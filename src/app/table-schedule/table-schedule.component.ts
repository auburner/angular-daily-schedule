import {SCHEDULE} from './mockscheduledata';
import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {MatTableDataSource, MatSort} from '@angular/material';

@Component({
  selector: 'app-table-schedule',
  templateUrl: './table-schedule.component.html',
  styleUrls: ['./table-schedule.component.css']
})
export class TableScheduleComponent implements AfterViewInit {
  dataSource = new MatTableDataSource(SCHEDULE);
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

  /**
   * Set the sort after the view init since this component will
   * be able to query its view for the initialized sort.
   */
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
}

