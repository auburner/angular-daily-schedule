import { ApiClientService } from '../clientApi';
import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';

import * as _moment from 'moment';
import {default as _rollupMoment} from 'moment';
const moment = _rollupMoment || _moment;

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent implements OnInit {
  myDate = new FormControl(moment([2018, 1, 12]));
  dateFormat;



  constructor(private apiClientService: ApiClientService) { }


  ngOnInit() {
  }

  changeDate(date): any {
    this.formatDate(date);
    this.apiClientService.changeDay(this.dateFormat);
  }

  formatDate(date): any {
    this.dateFormat = moment(date.value).format('YYYY-MM-DD');
  }
}
