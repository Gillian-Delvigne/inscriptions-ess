import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LoginAdminComponent} from './login-admin.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../../../material/material.module';

const routes: Routes = [
  {
    path : '',
    component : LoginAdminComponent
  }
]

  @NgModule({
  declarations: [LoginAdminComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class LoginAdminModule { }
