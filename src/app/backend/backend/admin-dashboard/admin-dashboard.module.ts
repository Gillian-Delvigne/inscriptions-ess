import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard.component';
import {RouterModule, Routes} from '@angular/router';
import {RolesModule} from './roles/roles.module';

const routes: Routes = [
  {
    path: '',
    component: AdminDashboardComponent,
    children : [
      {
        path: 'users',
        loadChildren: () => import('./users/users.module').then( mod => mod.UsersModule)
      },
      {
        path: 'roles',
        loadChildren: () => import('./roles/roles.module').then(mod => RolesModule)
      },
      {
        path: 'trainings',
        loadChildren: () => import('./trainings/trainings.module').then(mod => mod.TrainingsModule)
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
