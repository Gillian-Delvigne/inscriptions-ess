import { Injectable } from '@angular/core';
import {environment} from '../../../../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RolesService {
  ROOT_URL = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getRoles(): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.get<any>(this.ROOT_URL + 'users/getRoles', {headers});
  }
}
