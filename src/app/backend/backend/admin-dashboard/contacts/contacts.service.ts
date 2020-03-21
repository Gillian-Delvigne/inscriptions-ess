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
}
