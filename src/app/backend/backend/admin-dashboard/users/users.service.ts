import { Injectable } from '@angular/core';
import {environment} from '../../../../../environments/environment';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  ROOT_URL = environment.apiUrl;

  constructor(private http: HttpClient, private router: Router) { }

  getUsers(): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.get<any>(this.ROOT_URL + 'users/getUsersAdmin', {headers});
  }
}
