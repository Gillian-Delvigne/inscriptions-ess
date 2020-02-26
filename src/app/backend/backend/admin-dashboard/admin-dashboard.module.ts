import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AdminDashboardComponent,
    children : [
      {
        path: 'users',
        loadChildren: () => import('./users/users.module').then( mod => mod.UsersModule)
      }
    ]
  }
]

@NgModule({
  declarations: [AdminDashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class AdminDashboardModule { }
