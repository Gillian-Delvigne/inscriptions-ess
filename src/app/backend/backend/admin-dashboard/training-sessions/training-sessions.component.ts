import {Component, OnInit, ViewChild} from '@angular/core';
import {TrainingSessionsService} from './training-sessions.service';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {AdminService} from '../../admin.service';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-training-sessions',
  templateUrl: './training-sessions.component.html',
  styleUrls: ['./training-sessions.component.css']
})
export class TrainingSessionsComponent implements OnInit {
  displayedColumns: string[] = ['name', 'desc', 'day1', 'location', 'duration', 'participants', 'price', 'contact'];
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
  datePipe = new DatePipe('en-US');
  constructor(public trainingSessions: TrainingSessionsService,
              public formBuilder: FormBuilder,
              public toastr: ToastrService,
              public adminService: AdminService) { }

  ngOnInit() {
    this.displayTrainings();
    this.dates = [
      '00:00',
      '00:30',
      '01:00',
      '01:30',
      '02:00',
      '02:30',
      '03:00',
      '03:30',
      '04:00',
      '04:30',
      '05:00',
      '05:30',
      '06:00',
      '06:30',
      '07:00',
      '07:30',
      '08:00',
      '08:30',
      '09:00',
      '09:30',
      '10:00',
      '10:30',
      '11:00',
      '11:30',
      '12:00',
      '12:30',
      '13:00',
      '13:30',
      '14:00',
      '14:30',
      '15:00',
      '15:30',
      '16:00',
      '16:30',
      '17:00',
      '17:30',
      '18:00',
      '18:30',
      '19:00',
      '19:30',
      '20:00',
      '20:30',
      '21:00',
      '21:30',
      '22:00',
      '22:30',
      '23:00',
      '23:30'
    ]
  }

  displayTrainings() {
    this.trainingSessions.getTrainingSessions().subscribe(
      res => {
        console.log(res);
        this.dataSource = new MatTableDataSource(res.data);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      }
    );
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  public sliceTime(str) {
    if (str.length === 8){
      return str.substring(0, str.length - 3);
    } else {
      return str;
    }
  }

  view(element: any) {
    this.singleTraining = element;
    console.log(element)
    this.getTrainingContactById(element.contact_id, element.location_id);
  }

  closeDialog() {
    this.viewModal = false;
    this.editModal = false;
    this.deleteModal = false;
    this.createModal = false;
  }

  getTrainingContactById(cId, locId) {
    this.trainingSessions.getData(cId, locId).subscribe(
      res => {
        this.singleContact = res[1][0];
        this.singleLocation = res[0][0];
        // console.log('res-', res, this.singleContact);
        this.viewModal = true;
      }
    );
  }

  openAddSession() {
    this.trainingSessions.getSessionData().subscribe(
      res => {
        // console.log(res);
        this.trainings = res[0];
        this.locations = res[1];
        this.trainers = res[2];
        // console.log(this.trainings, this.trainers, this.locations);
        this.initSessionForm();
        this.createModal = true;
      }
    );
  }

  initSessionForm(){
    this.trainingForm = this.formBuilder.group({
      day1: ['', Validators.required],
      start_time1: ['', [Validators.required]],
      end_time1: ['', [Validators.required]],
      day2: [''],
      start_time2: [''],
      end_time2: [''],
      training_id: ['', [Validators.required]],
      trainer1_id: ['', [Validators.required]],
      trainer2_id: ['',],
      location_id: ['', [Validators.required]]
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
    if (this.trainingForm.value.day1 === '' || this.trainingForm.value.start_time1 === '' || this.trainingForm.value.end_time1 === '' || this.trainingForm.value.training_id === '' || this.trainingForm.value.trainer1_id === '' || this.trainingForm.value.location_id === '') {
      return;
    }
    console.log(this.trainingForm.value);

    this.trainingSessions.addTrainingSession(this.trainingForm.value).subscribe(
      res => {
        console.log(res);
        if (res.status == true){
          this.toastr.success('Training Session Data Submitted', 'Success !!!');
          this.displayTrainings();
        } else {
          this.toastr.error('Not Added', 'Warning !!!');
        }
        this.createModal = false;
      }
    )
  }

  delete(element: any) {
    this.deleteModal = true;
    this.singleTraining = element;
  }

  deleteTraining() {
    this.trainingSessions.deleteSession(this.singleTraining.training_session_id).subscribe(
      r => {
        console.log(r);
        if (r.affectedRows == 1) {
          this.displayTrainings();
          this.toastr.success('Training Session Deleted.', 'Success !!!');
          this.deleteModal = false;
        } else {
          this.toastr.error('Not Deleted', 'Error!!!');
          console.log('technical error');
        }
      }
    )
  }

  edit(element: any) {
    this.singleTraining = element;
    console.log(this.singleTraining, this.datePipe.transform(this.singleTraining.day1, 'dd-MM-yyyy'));
    this.trainingSessions.getSessionData().subscribe(
      res => {
        // console.log(res);
        this.trainings = res[0];
        this.locations = res[1];
        this.trainers = res[2];
        // console.log(this.trainings, this.trainers, this.locations);
        this.trainingFormEdit = this.formBuilder.group({
          day1: [new Date(this.singleTraining.day1).toISOString().split('T')[0], Validators.required],
          start_time1: [this.singleTraining.start_time1, [Validators.required]],
          end_time1: [this.singleTraining.end_time1, [Validators.required]],
          day2: [this.singleTraining.day2 ? new Date(this.singleTraining.day2).toISOString().split('T')[0] : ''],
          start_time2: [this.singleTraining.start_time2],
          end_time2: [this.singleTraining.end_time2],
          training_id: [this.singleTraining.training_id, [Validators.required]],
          trainer1_id: [this.singleTraining.trainer1_id, [Validators.required]],
          trainer2_id: [this.singleTraining.trainer2_id],
          location_id: [this.singleTraining.location_id, [Validators.required]],
          training_session_id: [this.singleTraining.training_session_id]
        });
        this.editModal = true;
      }
    );
  }

  // convenience getter for easy access to form fields
  get e() {
    return this.trainingFormEdit.controls;
  }
  async onEdit() {
    this.submittedEdit = true;
    console.log(this.trainingFormEdit, this.trainingFormEdit.value, 'before');
    // stop here if form is invalid
    if (this.trainingFormEdit.value.day1 === '' || this.trainingFormEdit.value.start_time1 === '' || this.trainingFormEdit.value.end_time1 === '' || this.trainingFormEdit.value.training_id === '' || this.trainingFormEdit.value.trainer1_id === '' || this.trainingFormEdit.value.location_id === '') {
      return;
    }
    console.log(this.trainingFormEdit.value);

    this.trainingSessions.editSession(this.trainingFormEdit.value).subscribe(
      res => {
        console.log(res);
        if (res.changedRows == 1){
          this.toastr.success('Session Updated', 'Success !!!');
          this.displayTrainings();
        } else {
          this.toastr.error('Not Updated', 'Warning !!!');
        }
        this.editModal = false;
      }
    )
  }
}
