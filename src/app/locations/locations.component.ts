import {ApiClientService} from '../clientApi';
import {Facility, FacilitiesResponse} from '../clientApi/models';
import {HttpResponse} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {
  facilities: Facility[];



  constructor(private locationService: ApiClientService) {}

  getLocations(): void {
    this.locationService.ApiLocationsGet().subscribe(
      result => this.facilities = result.body.data);
  }

  ngOnInit() {
    this.getLocations();
  }

}
