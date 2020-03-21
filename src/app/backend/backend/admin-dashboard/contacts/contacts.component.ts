import {Component, OnInit, ViewChild} from '@angular/core';
import {ContactsService} from './contacts.service';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {FormBuilder, FormGroup} from '@angular/forms';
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
  singleTraining: any;
  singleContact: any;
  singleLocation: any;
  trainings: any;
  locations: any;
  trainingForm: FormGroup;
  trainingFormEdit: FormGroup;
  submitted = false;
  trainers: any;
  dates: any;
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
}
