import { Injectable } from '@angular/core';
import {environment} from '../../../../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {
  ROOT_URL = environment.apiUrl;
  constructor(public http: HttpClient) { }

  getLocations(): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get<any>(this.ROOT_URL + 'locations/getLocations', {headers});
  }

  addLocations(data): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<any>(this.ROOT_URL + 'locations/addLocation', data,{headers});
  }

  editLocations(data): Observable<any> {
    console.log(data)
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post<any>(this.ROOT_URL + 'locations/editLocation', data, {headers});
  }

  deleteLocations(id): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post<any>(this.ROOT_URL + 'locations/deleteLocation',{id} , {headers});
  }
}
