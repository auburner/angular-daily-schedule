import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import {AppComponent} from './app.component';
import {ApiClientService} from './clientApi';
import {LocationsComponent} from './locations/locations.component';
import {HttpClientModule} from '@angular/common/http';
import {DatePickerComponent} from './date-picker/date-picker.component';

import {
  MatDatepicker,
  MatDatepickerModule,
  MatFormFieldModule,
  MatInputModule,
  MatNativeDateModule,
  MatSelectModule,
  MatOptionModule
} from "@angular/material";



@NgModule({
  declarations: [
    AppComponent,
    LocationsComponent,
    DatePickerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // provides two-way data binding
    BrowserAnimationsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatSelectModule,
    MatOptionModule
  ],
  providers: [ApiClientService],
  bootstrap: [AppComponent]
})
export class AppModule {}
