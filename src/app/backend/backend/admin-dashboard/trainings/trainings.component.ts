import {Component, OnInit, ViewChild} from '@angular/core';
import {TrainingsService} from './trainings.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {AdminService} from '../../admin.service';
import {ExcelService} from '../excel.service';

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.css']
})
export class TrainingsComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'desc', 'duration', 'price', 'participants', 'contact'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  trainingForm: FormGroup;
  trainingFormEdit: FormGroup;
  submitted = false;
  viewModal = false;
  editModal = false;
  deleteModal = false;
  createModal = false;
  singleTraining: any;
  categoriesList: any;
  TCList: any;
  submittedEdit = false;
  excelData: any = [];

  constructor(public trainingsService: TrainingsService,
              public formBuilder: FormBuilder,
              public toastr: ToastrService,
              public adminService: AdminService,
              public excelService: ExcelService) {
    this.adminService.showDashboard = false;
  }

  ngOnInit() {
    this.displayTrainings();
    this.getCategories();
    this.getTrainingContacts();
  }

  displayTrainings() {
    this.trainingsService.getTrainings().subscribe(
      res => {
        console.log(res);
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;

        res.map((data, key) => {
          this.excelData.push({
            'S No': key + 1,
            Name: data.name,
            Duration: data.duration_info,
            Price: data.price,
            'Participants-Min': data.participants_min,
            'Participants-Max': data.participants_max,
            Conditions: data.conditions,
            'Contact Id': data.contact_id,
            'Category Id': data.category_id,
            'Training Contact Id': data.training_contact_id,
            'Contact Name': data.contact_name,
            Phone: data.phone,
            Email: data.email,
            Description: data.description
          });
        });
      }
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getCategories(){
    this.trainingsService.getCategories().subscribe(
      res => {
        console.log(res);
        this.categoriesList = res;
      }
    )
  }

  getTrainingContacts(){
    this.trainingsService.getTrainingContacts().subscribe(
      res => {
        console.log(res);
        this.TCList = res;
      }
    )
  }

  view(element: any) {
    console.log(element);
    this.singleTraining = element;
    this.viewModal = true;
  }

  closeDialog() {
    this.viewModal = false;
    this.editModal = false;
    this.deleteModal = false;
    this.createModal = false;
  }

  deleteTraining() {
    this.trainingsService.deleteTraining(this.singleTraining.training_id).subscribe(
      r => {
        console.log(r)
        if (r.affectedRows == 1) {
          this.displayTrainings();
          this.deleteModal = false;
        } else {
          console.log('technical error');
        }
      }
    )
  }

  delete(element: any) {
    this.singleTraining = element;
    this.deleteModal = true;
  }

  openAddTraining(){
    this.createModal = true;
    this.initTrainingForm();
  }

  initTrainingForm(){
    this.trainingForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', [Validators.required]],
      duration: ['', [Validators.required]],
      price: ['', [Validators.required]],
      participantsMin: ['', [Validators.required]],
      participantsMax: ['', [Validators.required]],
      conditions: ['', [Validators.required]],
      isRequired: ['', [Validators.required]],
      categoryId: ['', [Validators.required]],
      trainingContactId: ['', [Validators.required]]
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

    this.trainingsService.addTraining(this.trainingForm.value).subscribe(
      res => {
        console.log(res);
        if (res.status == true){
          this.toastr.success('Training Data submitted', 'Success !!!');
          this.displayTrainings();
        } else {
          this.toastr.error('Not Added', 'Warning !!!');
        }
        this.createModal = false;
      }
    )
  }

  edit(element: any) {
    this.singleTraining = element;
    console.log(this.singleTraining);
    this.trainingFormEdit = this.formBuilder.group({
      name: [this.singleTraining.name, Validators.required],
      description: [this.singleTraining.description, [Validators.required]],
      duration: [this.singleTraining.duration_info, [Validators.required]],
      price: [this.singleTraining.price, [Validators.required]],
      participantsMin: [this.singleTraining.participants_min, [Validators.required]],
      participantsMax: [this.singleTraining.participants_max, [Validators.required]],
      conditions: [this.singleTraining.conditions, [Validators.required]],
      isRequired: [this.singleTraining.is_required, [Validators.required]],
      categoryId: [this.singleTraining.category_id, [Validators.required]],
      trainingContactId: [this.singleTraining.contact_id, [Validators.required]],
      trainingId: [this.singleTraining.training_id, [Validators.required]]
    });
    this.editModal = true;
  }

  // convenience getter for easy access to form fields
  get e() {
    return this.trainingFormEdit.controls;
  }
  async onEdit() {
    this.submittedEdit = true;
    console.log(this.trainingFormEdit, this.trainingFormEdit.value, 'before');
    // stop here if form is invalid
    if (this.trainingFormEdit.invalid) {
      return;
    }
    console.log(this.trainingFormEdit.value);

    this.trainingsService.editTraining(this.trainingFormEdit.value).subscribe(
      res => {
        console.log(res);
        if (res.changedRows == 1){
          this.toastr.success('Training Data Updated', 'Success !!!');
          this.displayTrainings();
        } else {
          this.toastr.error('Not Updated', 'Warning !!!');
        }
        this.editModal = false;
      }
    )
  }

  exportAsXLSX(): void {
    console.log(this.excelData);
    this.excelService.exportAsExcelFile(this.excelData, 'trainings');
  }
}
