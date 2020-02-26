import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingsComponent } from './trainings.component';
import {RouterModule, Routes} from '@angular/router';
import {MaterialModule} from '../../../../material/material.module';

const routes: Routes = [
  {
    path: '',
    component: TrainingsComponent
  }
]

@NgModule({
  declarations: [TrainingsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule
  ]
})
export class TrainingsModule { }
