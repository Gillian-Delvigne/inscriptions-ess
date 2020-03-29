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

  addRole(data): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post<any>(this.ROOT_URL + 'users/addRoles', data,{headers});
  }

  editRole(data): Observable<any> {
    console.log(data)
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post<any>(this.ROOT_URL + 'users/editRole', data, {headers});
  }

  deleteRole(id): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post<any>(this.ROOT_URL + 'users/deleteRole',{id} , {headers});
  }
}
