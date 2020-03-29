import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {StatusService} from './status.service';
import {AdminService} from '../../admin.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  displayedColumns: string[] = ['position', 'status-id', 'status', 'actions'];
  dataSource = new MatTableDataSource();
  editModel = false;
  delModel = false;
  addModel = false;
  singleRecord: any;
  addForm: FormGroup;
  editForm: FormGroup;
  submittedAdd = false;
  submittedEdit = false;
  
  constructor(public statusService: StatusService,
              public formBuilder: FormBuilder,
              public toastr: ToastrService) { }

  ngOnInit() {
    this.getStatus();
  }

  getStatus() {
    this.statusService.getStatus().subscribe(
      res => {
        console.log(res, 'Status');
        this.dataSource = new MatTableDataSource(res);
      }
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  closeDialog() {
    this.editModel = false;
    this.delModel = false;
    this.addModel = false;
  }

  addStatus() {
    this.addModel = true;
    this.initAddStatus();
  }

  initAddStatus(){
    this.addForm = this.formBuilder.group({
      name: ['', Validators.required]
    });
  }

  get f() {
    return this.addForm.controls;
  }

  onSubmit() {
    this.submittedAdd = true;
    console.log(this.addForm, this.addForm.value, 'before');
    // stop here if form is invalid
    if (this.addForm.invalid) {
      return;
    }
    console.log(this.addForm.value);

    this.statusService.addStatus(this.addForm.value).subscribe(
      res => {
        console.log(res, 'res');
        if (res.status === true){
          this.toastr.success('Status Data Submitted', 'Success !!!');
          this.getStatus();
        } else {
          this.toastr.error('Not Added', 'Warning !!!');
        }
        this.addModel = false;
      }
    )
  }

  delete(element: any) {
    console.log(element);
    this.singleRecord = element;
    this.delModel = true;
  }

  deleteStatus() {
    this.statusService.deleteStatus(this.singleRecord.status_id).subscribe(
      r => {
        console.log(r)
        if (r.affectedRows === 1) {
          this.getStatus();
          this.toastr.success('Status Deleted', 'Success !!!');
          this.delModel = false;
        } else {
          this.toastr.error('Technical Error', 'Error!!!');
        }
      }
    );
  }

  /* Edit Status */

  get e() {
    return this.editForm.controls;
  }

  async onEdit() {
    this.submittedEdit = true;
    console.log(this.editForm, this.editForm.value, 'before Status');
    // stop here if form is invalid
    if (this.editForm.invalid) {
      return;
    }
    console.log(this.editForm.value);

    this.statusService.editStatus(this.editForm.value).subscribe(
      res => {
        console.log(res);
        if (res.affectedRows === 1){
          this.toastr.success('Status Data Submitted', 'Success !!!');
          this.editModel = false;
          this.getStatus();
        } else {
          this.toastr.error('Not Added', 'Warning !!!');
        }
        this.editModel = false;
      }
    );
  }

  edit(element: any) {
    this.editModel = true;
    this.singleRecord = element;
    this.initEditForm();
  }

  initEditForm() {
    this.editForm = this.formBuilder.group({
      name: [this.singleRecord.name, Validators.required],
      status_id: [this.singleRecord.status_id, [Validators.required]]
    });
  }

}
