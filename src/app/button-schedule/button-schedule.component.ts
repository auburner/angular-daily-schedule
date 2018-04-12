import { ApiClientService } from "../clientApi";
import { Component, Input } from '@angular/core';
import { DatePickerComponent } from '../date-picker/date-picker.component'

@Component({
  selector: 'app-button-schedule',
  templateUrl: './button-schedule.component.html',
  styleUrls: ['./button-schedule.component.css']
})
export class ButtonScheduleComponent {
  
  constructor(private locationService: ApiClientService) {}
  
  getSchedule() {
    this.locationService.ApiSchedulesByFacilityIdByDayGet(this.locationService.getLocation(), this.locationService.getDate());
  }
  
}
