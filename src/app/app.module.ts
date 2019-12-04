import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NavbarComponent } from './navbar/navbar.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { AgendaComponent } from './agenda/agenda.component';
import { InscriptionsComponent } from './inscriptions/inscriptions.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CatalogueComponent,
    AgendaComponent,
    InscriptionsComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
