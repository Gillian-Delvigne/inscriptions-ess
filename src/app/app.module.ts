import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NavbarComponent } from './front-end/template/navbar/navbar.component';
import { CatalogueComponent } from './front-end/catalogue/catalogue.component';
import { AgendaComponent } from './front-end/agenda/agenda.component';
import { InscriptionsComponent } from './front-end/inscriptions/inscriptions.component';
import { CardComponent } from './front-end/template/card/card.component';
import { CalendarComponent } from './front-end/template/calendar/calendar.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CatalogueComponent,
    AgendaComponent,
    InscriptionsComponent,
    CardComponent,
    CalendarComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    CommonModule,
    FormsModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory})
  ],
  exports: [CalendarComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
