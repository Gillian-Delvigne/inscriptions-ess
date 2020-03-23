import {Component, OnInit, ViewChild} from '@angular/core';
import {ContactsService} from './contacts.service';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  displayedColumns: string[] = ['name', 'phone', 'email'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  viewModal = false;
  editModal = false;
  deleteModal = false;
  createModal = false;
  singleContact: any;
  trainings: any;
  locations: any;
  trainingForm: FormGroup;
  editForm: FormGroup;
  submitted = false;
  submittedEdit = false;
  constructor( public contactService: ContactsService,
               public formBuilder: FormBuilder,
               public toastr: ToastrService) { }

  ngOnInit() {
    this.displayContacts();
  }

  displayContacts(){
    this.contactService.getContacts().subscribe(
      res => {
        console.log(res);
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      }
    )
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  closeDialog() {
    this.viewModal = false;
    this.editModal = false;
    this.deleteModal = false;
    this.createModal = false;
  }

  view(element: any) {
    this.viewModal = true;
    this.singleContact = element;
  }

  // convenience getter for easy access to form fields
  get e() {
    return this.editForm.controls;
  }

  async onEdit() {
    this.submittedEdit = true;
    console.log(this.editForm, this.editForm.value, 'before');
    // stop here if form is invalid
    if (this.editForm.invalid) {
      return;
    }
    console.log(this.editForm.value);

    this.contactService.editContact(this.editForm.value).subscribe(
      res => {
        console.log(res);
        if (res.affectedRows === 1){
          this.toastr.success('Contact Data Submitted', 'Success !!!');
          this.editModal = false;
          this.displayContacts();
        } else {
          this.toastr.error('Not Added', 'Warning !!!');
        }
        this.createModal = false;
      }
    )
  }

  edit(element: any){
    this.editModal = true;
    this.singleContact = element;
    this.initEditForm();
  }

  initEditForm(){
    this.editForm = this.formBuilder.group({
      contact_name: [this.singleContact.contact_name, Validators.required],
      phone: [this.singleContact.phone, [Validators.required]],
      email: [this.singleContact.email, [Validators.required]],
      training_contact_id: [this.singleContact.training_contact_id, [Validators.required]]
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.trainingForm.controls;
  }

  async onSubmit() {
    this.submitted = true;
    console.log(this.trainingForm, this.trainingForm.value, 'before');
    // stop here if form is invalid
    if (this.trainingForm.invalid) {
      return;
    }
    console.log(this.trainingForm.value);

    this.contactService.addContacts(this.trainingForm.value).subscribe(
      res => {
        console.log(res);
        if (res.status == true){
          this.toastr.success('Contact Data Submitted', 'Success !!!');
          this.displayContacts();
        } else {
          this.toastr.error('Not Added', 'Warning !!!');
        }
        this.createModal = false;
      }
    )
  }

  openAddSession(){
    this.createModal = true;
    this.initContactForm();
  }

  initContactForm(){
    this.trainingForm = this.formBuilder.group({
      contact_name: ['', Validators.required],
      phone: ['', [Validators.required]],
      email: ['', [Validators.required]]
    });
  }

  delete(element: any) {
    console.log(element);
    this.singleContact = element;
    this.deleteModal = true;
  }

  deleteTraining() {
    this.contactService.deleteContact(this.singleContact.training_contact_id).subscribe(
      r => {
        console.log(r)
        if (r.affectedRows == 1) {
          this.displayContacts();
          this.deleteModal = false;
        } else {
          console.log('technical error');
        }
      }
    )
  }
}
