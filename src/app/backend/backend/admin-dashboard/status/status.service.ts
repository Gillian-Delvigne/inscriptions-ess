import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StatusService {
  ROOT_URL = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getStatus(): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.get<any>(this.ROOT_URL + 'users/getStatus', {headers});
  }

  addStatus(data): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post<any>(this.ROOT_URL + 'users/addStatus', data,{headers});
  }

  editStatus(data): Observable<any> {
    console.log(data)
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post<any>(this.ROOT_URL + 'users/editStatus', data, {headers});
  }

  deleteStatus(id): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post<any>(this.ROOT_URL + 'users/deleteStatus',{id} , {headers});
  }
}
