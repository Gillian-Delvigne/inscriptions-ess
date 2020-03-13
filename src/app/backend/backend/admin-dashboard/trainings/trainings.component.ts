import {Component, OnInit, ViewChild} from '@angular/core';
import {TrainingsService} from './trainings.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';

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
  submitted = false;
  viewModal = false;
  editModal = false;
  deleteModal = false;
  createModal = false;
  public singleTraining: any;
  categoriesList: any;
  TCList: any;

  constructor(public trainingsService: TrainingsService,
              public formBuilder: FormBuilder,
              public toastr: ToastrService) { }

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

}
