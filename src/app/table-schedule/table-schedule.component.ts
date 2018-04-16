import {ApiClientService} from '../clientApi';
import {Component, AfterViewInit, ViewChild, OnInit} from '@angular/core';
import {MatSort, MatTableDataSource} from '@angular/material';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

/**
 * @title Table retrieving data through HTTP
 */
@Component({
  selector: 'app-table-schedule',
  templateUrl: './table-schedule.component.html',
  styleUrls: ['./table-schedule.component.css']
})
export class TableScheduleComponent implements OnInit, AfterViewInit {
  date: string;
  location: string;
  displayedColumns = [
    'teammateName',
    'teammateType',
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
    'sunday',
  ];
  @ViewChild(MatSort) sort: MatSort;
  dataSource = new MatTableDataSource();

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }




  constructor(private locationService: ApiClientService) {}

  ngOnInit() {
    this.locationService.location.subscribe(location => this.location = location);
    this.locationService.date.subscribe(day => this.date = day);
  }

  getSchedule() {
    return this.locationService.GetSchedulesByFacilityIdByDayGet(this.location, this.date).map(result => result.data).subscribe(data => this.dataSource.data = data);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
}
