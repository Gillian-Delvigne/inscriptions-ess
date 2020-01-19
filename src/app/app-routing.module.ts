import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './front-end/body/accueil/accueil.component';
import { CatalogueComponent } from './front-end/body/catalogue/catalogue.component';
import { AgendaComponent } from './front-end/body/agenda/agenda.component';
import { InscriptionsComponent } from './front-end/body/inscriptions/inscriptions.component';
import {LoginComponent} from './front-end/body/login/login.component';
import {SignupComponent} from './front-end/body/signup/signup.component';

const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'catalogue', component: CatalogueComponent },
  { path: 'agenda', component: AgendaComponent },
  { path: 'inscriptions', component: InscriptionsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
