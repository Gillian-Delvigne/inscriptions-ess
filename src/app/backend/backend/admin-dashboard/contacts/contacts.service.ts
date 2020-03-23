import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  ROOT_URL = environment.apiUrl;
  constructor(public http: HttpClient) { }

  getContacts(): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get<any>(this.ROOT_URL + 'trainings/getTrainingContacts', {headers});
  }

  addContacts(data): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<any>(this.ROOT_URL + 'trainings/addContact', data,{headers});
  }

  editContact(data): Observable<any> {
    console.log(data)
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post<any>(this.ROOT_URL + 'trainings/editContact', data, {headers});
  }

  deleteContact(id): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post<any>(this.ROOT_URL + 'trainings/deleteContact',{id} , {headers});
  }
}
