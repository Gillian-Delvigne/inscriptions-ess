import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusComponent } from './status.component';
import {RouterModule, Routes} from '@angular/router';
import {MaterialModule} from '../../../../material/material.module';
import {ReactiveFormsModule} from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: StatusComponent
  }
]

  @NgModule({
  declarations: [StatusComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class StatusModule { }
