import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard.component';
import {RouterModule, Routes} from '@angular/router';
import {RolesModule} from './roles/roles.module';
import {MaterialModule} from '../../../material/material.module';

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
        loadChildren: () => import('./roles/roles.module').then(mod => mod.RolesModule)
      },
      {
        path: 'trainings',
        loadChildren: () => import('./trainings/trainings.module').then(mod => mod.TrainingsModule)
      },
      {
        path: 'training-sessions',
        loadChildren: () => import('./training-sessions/training-sessions.module').then(mod => mod.TrainingSessionsModule)
      },
      {
        path: 'contacts',
        loadChildren: () => import('./contacts/contacts.module').then(mod => mod.ContactsModule)
      }
    ]
  }
]

@NgModule({
  declarations: [AdminDashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
  ]
})
export class AdminDashboardModule { }
