import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackendComponent } from './backend.component';
import {RouterModule, Routes} from '@angular/router';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import {MaterialModule} from '../../material/material.module';


const routes: Routes = [
  {
    path: '',
    component: BackendComponent,
    children : [
      {
        path: 'login',
        loadChildren: () => import('./login-admin/login-admin.module').then( mod => mod.LoginAdminModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./admin-dashboard/admin-dashboard.module').then( mod => mod.AdminDashboardModule)
      }
    ]
  }
]

@NgModule({
  declarations: [BackendComponent, AdminSidebarComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
  ]
})
export class BackendModule { }
