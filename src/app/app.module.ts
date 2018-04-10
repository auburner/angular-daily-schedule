import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ApiClientService } from './clientApi';
import { LocationsComponent } from './locations/locations.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DatePickerComponent } from './date-picker/date-picker.component';



@NgModule({
  declarations: [
    AppComponent,
    LocationsComponent,
    DatePickerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // provides two-way data binding
    HttpClientModule
  ],
  providers: [ApiClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
