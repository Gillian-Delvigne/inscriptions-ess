import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import {RouterModule, Routes} from '@angular/router';
import {MaterialModule} from '../../../../material/material.module';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    // loadChildren: () => import('./')
  }
]

@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule
  ]
})
export class UsersModule { }
