import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  ROOT_URL = environment.apiUrl;
  adminLoggedin = false;
  loggedInAdminId: any;
  loggedInAdmin: any;
  public showDashboard = false;

  constructor(private http: HttpClient, private router: Router) {
    console.log(this.router.url)
    if (this.router.url === '/admin/dashboard'){
      this.showDashboard = true;
    } else {
      this.showDashboard = false;
    }
    if (sessionStorage.getItem('adminId')){
      this.adminLoggedin = true;
      this.loggedInAdmin = JSON.parse(sessionStorage.getItem('loggedUser'));
      this.loggedInAdminId = sessionStorage.getItem('adminId');
    }
  }

  login(data): Observable<any> {
    console.log(data)
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post<any>(this.ROOT_URL + 'users/loginAdmin', data, {headers});
  }

  // Keep user in session
  saveUser(user){
    console.log(user);
    sessionStorage.setItem('loggedUser', JSON.stringify(user));
    sessionStorage.setItem('adminId', user.user_id);
    this.adminLoggedin = true;
    this.loggedInAdmin = JSON.parse(sessionStorage.getItem('loggedUser'));
    this.loggedInAdminId = sessionStorage.getItem('adminId');
  }

  // Logout Users
  logout(){
    sessionStorage.setItem('loggedUser', '');
    sessionStorage.setItem('adminId', '');
    this.adminLoggedin = false;
    this.loggedInAdmin = '';
    this.loggedInAdminId = '';
    this.router.navigateByUrl('/admin/login');
  }
}
