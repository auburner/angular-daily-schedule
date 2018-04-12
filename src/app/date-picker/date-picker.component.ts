import { ApiClientService } from "../clientApi";
import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent implements OnInit {
  date = new FormControl(new Date('2-12-2018'));

  constructor(private apiClientService: ApiClientService) { }
  
  

  ngOnInit() {
  }

}
