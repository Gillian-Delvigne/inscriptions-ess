import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RolesComponent } from './roles.component';
import {RouterModule, Routes} from '@angular/router';
import {MaterialModule} from '../../../../material/material.module';

const routes: Routes = [
  {
    path: '',
    component: RolesComponent
  }
]

@NgModule({
  declarations: [RolesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule
  ]
})
export class RolesModule { }
