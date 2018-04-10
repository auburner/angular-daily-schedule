import { Inject, Injectable, Optional } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

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

  private domain = 'http://scadevjobs.com/';

  constructor(private http: HttpClient, @Optional() @Inject('domain') domain: string ) {
    if (domain) {
      this.domain = domain;
    }
  }

  /**
  * Method ApiLocationsGet
  * @return Full HTTP response as Observable
  */
  public ApiLocationsGet(): Observable<HttpResponse<FacilitiesResponse>> {
    let uri = `/api/Locations`;
    let headers = new HttpHeaders();
    let params = new HttpParams();
    return this.sendRequest<FacilitiesResponse>('get', uri, headers, params, null);
  }
  

  /**
  * Method ApiSchedulesByFacilityIdByDayGet
  * @param facilityId 
  * @param day 
  * @return Full HTTP response as Observable
  */
  public ApiSchedulesByFacilityIdByDayGet(facilityId: string, day: string): Observable<HttpResponse<SchedulesResponse>> {
    let uri = `/api/Schedules/${facilityId}/${day}`;
    let headers = new HttpHeaders();
    let params = new HttpParams();
    return this.sendRequest<SchedulesResponse>('get', uri, headers, params, null);
  }

  private sendRequest<T>(method: string, uri: string, headers: HttpHeaders, params: HttpParams, body: any): Observable<HttpResponse<T>> {
    if (method === 'get') {
      return this.http.get<T>(this.domain + uri, { headers: headers.set('Accept', 'application/json'), params: params, observe: 'response' });
    } else if (method === 'put') {
      return this.http.put<T>(this.domain + uri, body, { headers: headers.set('Content-Type', 'application/json'), params: params, observe: 'response' });
    } else if (method === 'post') {
      return this.http.post<T>(this.domain + uri, body, { headers: headers.set('Content-Type', 'application/json'), params: params, observe: 'response' });
    } else if (method === 'delete') {
      return this.http.delete<T>(this.domain + uri, { headers: headers, params: params, observe: 'response' });
    } else {
      console.error('Unsupported request: ' + method);
      return Observable.throw('Unsupported request: ' + method);
    }
  }
}
