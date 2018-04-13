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
  MatOptionModule,
  MatSortModule
} from '@angular/material';
import {ButtonScheduleComponent} from './button-schedule/button-schedule.component';
import {MatMomentDateModule} from '@angular/material-moment-adapter';
import {MatTableModule} from '@angular/material/table';
import {TableScheduleComponent} from './table-schedule/table-schedule.component';



@NgModule({
  declarations: [
    AppComponent,
    LocationsComponent,
    DatePickerComponent,
    ButtonScheduleComponent,
    TableScheduleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // provides two-way data binding
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatMomentDateModule,
    MatSelectModule,
    MatOptionModule,
    MatTableModule,
    MatSortModule
  ],
  providers: [ApiClientService],
  bootstrap: [AppComponent]
})
export class AppModule {}
