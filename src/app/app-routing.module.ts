import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { AgendaComponent } from './agenda/agenda.component';
import { InscriptionsComponent } from './inscriptions/inscriptions.component';

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
