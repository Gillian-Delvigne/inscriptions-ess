import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogueComponent } from './front-end/body/catalogue/catalogue.component';
import { AgendaComponent } from './front-end/body/agenda/agenda.component';
import { InscriptionsComponent } from './front-end/body/inscriptions/inscriptions.component';

const routes: Routes = [
  { path: '', component: CatalogueComponent },
  { path: 'agenda', component: AgendaComponent },
  { path: 'inscriptions', component: InscriptionsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
