import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  ROOT_URL = environment.apiUrl;
  isLoggedin = false;
  loggedInUserId: any;
  loggedInUser: any;

  constructor(private http: HttpClient, private router: Router) {
    if (sessionStorage.getItem('userId')){
      this.isLoggedin = true;
      this.loggedInUser = JSON.parse(sessionStorage.getItem('loggedUser'));
      this.loggedInUserId = sessionStorage.getItem('userId');
    }
  }

  signUp(data): Observable<any> {
    console.log(data)
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post<any>(this.ROOT_URL + 'users/signUp', data, {headers});
  }

  login(data): Observable<any> {
    console.log(data)
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post<any>(this.ROOT_URL + 'users/login', data, {headers});
  }

  // Keep user in session
  saveUser(user){
    console.log(user);
    sessionStorage.setItem('loggedUser', JSON.stringify(user));
    sessionStorage.setItem('userId', user.user_id);
    this.isLoggedin = true;
    this.loggedInUser = JSON.parse(sessionStorage.getItem('loggedUser'));
    this.loggedInUserId = sessionStorage.getItem('userId');
  }

  // Logout Users
  logout(){
    sessionStorage.setItem('loggedUser', '');
    sessionStorage.setItem('userId', '');
    this.isLoggedin = false;
    this.loggedInUser = '';
    this.loggedInUserId = '';
  }
}
