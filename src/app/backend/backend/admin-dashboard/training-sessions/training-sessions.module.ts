import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingSessionsComponent } from './training-sessions.component';
import {RouterModule, Routes} from '@angular/router';
import {MaterialModule} from '../../../../material/material.module';
import {ReactiveFormsModule} from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: TrainingSessionsComponent
  }
]

@NgModule({
  declarations: [TrainingSessionsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class TrainingSessionsModule { }
