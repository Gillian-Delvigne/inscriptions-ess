import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LocationsService} from './locations.service';
import {ToastrService} from 'ngx-toastr';
import {ExcelService} from '../excel.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {
  displayedColumns: string[] = ['name', 'address', 'phone', 'email'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  viewModal = false;
  editModal = false;
  deleteModal = false;
  createModal = false;
  singleLocation: any;
  trainings: any;
  locations: any;
  trainingForm: FormGroup;
  editForm: FormGroup;
  submitted = false;
  submittedEdit = false;
  excelData: any = [];

  constructor(public ls: LocationsService,
              public formBuilder: FormBuilder,
              public toastr: ToastrService,
              public excelService: ExcelService) { }

  ngOnInit() {
    this.displayLocation();
  }

  displayLocation(){
    this.ls.getLocations().subscribe(
      res => {
        console.log(res);
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;

        res.map((data, key) => {
          this.excelData.push({
            'S No': key + 1,
            Name: data.name,
            Address: data.address,
            Phone: data.phone_number,
            Email: data.email,
          });
        });
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
    this.singleLocation = element;
    console.log(this.singleLocation);
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

    this.ls.editLocations(this.editForm.value).subscribe(
      res => {
        console.log(res);
        if (res.affectedRows === 1){
          this.toastr.success('Contact Data Submitted', 'Success !!!');
          this.editModal = false;
          this.displayLocation();
        } else {
          this.toastr.error('Not Added', 'Warning !!!');
        }
        this.createModal = false;
      }
    );
  }

  edit(element: any) {
    this.editModal = true;
    this.singleLocation = element;
    this.initEditForm();
  }

  initEditForm() {
    this.editForm = this.formBuilder.group({
      name: [this.singleLocation.name, Validators.required],
      address: [this.singleLocation.address, [Validators.required]],
      phone_number: [this.singleLocation.phone_number, [Validators.required]],
      email: [this.singleLocation.email, [Validators.required]],
      location_id: [this.singleLocation.location_id, [Validators.required]]
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

    this.ls.addLocations(this.trainingForm.value).subscribe(
      res => {
        console.log(res);
        if (res.status == true){
          this.toastr.success('Location Data Submitted', 'Success !!!');
          this.displayLocation();
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
      name: ['', Validators.required],
      address: ['', [Validators.required]],
      phone_number: ['', [Validators.required]],
      email: ['', [Validators.required]]
    });
  }

  delete(element: any) {
    console.log(element);
    this.singleLocation = element;
    this.deleteModal = true;
  }

  deleteTraining() {
    this.ls.deleteLocations(this.singleLocation.location_id).subscribe(
      r => {
        console.log(r)
        if (r.affectedRows === 1) {
          this.displayLocation();
          this.toastr.success('Location Deleted', 'Success !!!');
          this.deleteModal = false;
        } else {
          this.toastr.error('Technical Error', 'Error!!!');
          console.log('technical error');
        }
      }
    )
  }

  exportAsXLSX(): void {
    console.log(this.excelData);
    this.excelService.exportAsExcelFile(this.excelData, 'locations');
  }
}
