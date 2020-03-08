import { Injectable } from '@angular/core';
import {environment} from '../../../../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrainingsService {
  ROOT_URL = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getTrainings(): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get<any>(this.ROOT_URL + 'trainings/getTrainingsWithContacts', {headers});
  }

  deleteTraining(id): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post<any>(this.ROOT_URL + 'trainings/deleteTrainingById',{id} , {headers});
  }

  getCategories(): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get<any>(this.ROOT_URL + 'category/getCategories', {headers});
  }

  getTrainingContacts(): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get<any>(this.ROOT_URL + 'trainings/getTrainingsContacts', {headers});
  }

  addTraining(data): Observable<any> {
    console.log(data)
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post<any>(this.ROOT_URL + 'trainings/addTraining', data, {headers});
  }
}
