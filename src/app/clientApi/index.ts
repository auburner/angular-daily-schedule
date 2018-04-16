import {Inject, Injectable, Optional} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams, HttpResponse} from '@angular/common/http';
import {Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import {
  FacilitiesResponse,
  Facility,
  SchedulesResponse,
  TeammateSchedule
} from './models';

/**
* Created with angular4-swagger-client-generator.
*/
@Injectable()
export class ApiClientService {


  private facility = new BehaviorSubject<string>('');
  location = this.facility.asObservable();

  private day = new BehaviorSubject<string>('');
  date = this.day.asObservable();
  
  //private weeklySchedule = new Observable<FacilitiesResponse>();

  private domain = 'http://scadevjobs.com/';

  constructor(private http: HttpClient, @Optional() @Inject('domain') domain: string) {
    if (domain) {
      this.domain = domain;
    }
  }

  /**
  * Method ApiLocationsGet
  * @return Full HTTP response as Observable
  */
  public ApiLocationsGet(): Observable<HttpResponse<FacilitiesResponse>> {
    const uri = `/api/Locations`;
    const headers = new HttpHeaders();
    const params = new HttpParams();
    return this.sendRequest<FacilitiesResponse>('get', uri, headers, params, null);
  }


  /**
  * Method ApiSchedulesByFacilityIdByDayGet
  * @param facilityId
  * @param day
  * @return Full HTTP response as Observable
  */
  public ApiSchedulesByFacilityIdByDayGet(facilityId: string, day: string): Observable<HttpResponse<SchedulesResponse>> {
    const uri = `/api/Schedules/${facilityId}/${day}`;
    const headers = new HttpHeaders();
    const params = new HttpParams();
    return this.sendRequest<SchedulesResponse>('get', uri, headers, params, null);
  }
  
  public GetSchedulesByFacilityIdByDayGet(facilityId: string, day: string): Observable<SchedulesResponse> {
    const uri = `/api/Schedules/${facilityId}/${day}`;
    return this.http.get<SchedulesResponse>(this.domain + uri);
  }

  private sendRequest<T>(method: string, uri: string, headers: HttpHeaders, params: HttpParams, body: any): Observable<HttpResponse<T>> {
    if (method === 'get') {
      return this.http.get<T>(this.domain + uri, {headers: headers.set('Accept', 'application/json'), params: params, observe: 'response'});
    } else if (method === 'put') {
      return this.http.put<T>(this.domain + uri, body, {headers: headers.set('Content-Type', 'application/json'), params: params, observe: 'response'});
    } else if (method === 'post') {
      return this.http.post<T>(this.domain + uri, body, {headers: headers.set('Content-Type', 'application/json'), params: params, observe: 'response'});
    } else if (method === 'delete') {
      return this.http.delete<T>(this.domain + uri, {headers: headers, params: params, observe: 'response'});
    } else {
      console.error('Unsupported request: ' + method);
      return Observable.throw('Unsupported request: ' + method);
    }
  }
  

  changeFacility(facility: string) {
    this.facility.next(facility);
  }


  changeDay(date: string) {
    this.day.next(date);
  }

}
