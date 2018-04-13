import {ApiClientService} from '../clientApi';
import {Component, Input, OnInit} from '@angular/core';
import {DatePickerComponent} from '../date-picker/date-picker.component';

@Component({
  selector: 'app-button-schedule',
  templateUrl: './button-schedule.component.html',
  styleUrls: ['./button-schedule.component.css']
})
export class ButtonScheduleComponent implements OnInit {
  date: string;
  location: string;

  constructor(private locationService: ApiClientService) {}

  getSchedule() {
    this.locationService.ApiSchedulesByFacilityIdByDayGet(this.location, this.date);
  }

  ngOnInit() {
    this.locationService.location.subscribe(location => this.location = location);
    this.locationService.date.subscribe(day => this.date = day);
  }

}
