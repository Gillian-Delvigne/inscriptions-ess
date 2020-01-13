import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NavbarComponent } from './front-end/header/navbar/navbar.component';
import { CatalogueComponent } from './front-end/body/catalogue/catalogue.component';
import { AgendaComponent } from './front-end/body/agenda/agenda.component';
import { InscriptionsComponent } from './front-end/body/inscriptions/inscriptions.component';
import { CardComponent } from './front-end/template/card/card.component';
import { CalendarComponent } from './front-end/template/calendar/calendar.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { FooterComponent } from './front-end/footer/footer.component';
import { SidebarComponent } from './front-end/template/sidebar/sidebar.component';
import { AccueilComponent } from './front-end/body/accueil/accueil.component';
import '../../node_modules/flatpickr/dist/flatpickr.min.css';

registerLocaleData(localeFr, 'fr');

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CatalogueComponent,
    AgendaComponent,
    InscriptionsComponent,
    CardComponent,
    CalendarComponent,
    FooterComponent,
    SidebarComponent,
    AccueilComponent,

  ],
  imports: [
    BrowserModule,
    NgbModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory})
  ],
  exports: [CalendarComponent],
  providers: [{ provide: LOCALE_ID, useValue: 'fr' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
