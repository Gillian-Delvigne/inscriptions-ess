import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../../../environments/environment';
import {forkJoin} from 'rxjs/internal/observable/forkJoin';

@Injectable({
  providedIn: 'root'
})
export class TrainingSessionsService {
  ROOT_URL = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getTrainingSessions(): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get<any>(this.ROOT_URL + 'sessions/getTrainingSessionByAll', {headers});
  }

  getTrainings(): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get<any>(this.ROOT_URL + 'trainings/getTrainings', {headers});
  }

  getLocations(): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get<any>(this.ROOT_URL + 'locations/getLocations', {headers});
  }

  deleteSession(id): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<any>(this.ROOT_URL + 'sessions/deleteSession', {id},{headers});
  }

  addTrainingSession(data): Observable<any> {
    console.log(data)
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<any>(this.ROOT_URL + 'sessions/addTrainingSession', data,{headers});
  }

  getData(cId, lId): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const response1 = this.http.get<any>(this.ROOT_URL + 'locations/getLocationById/' + lId, {headers});
    const response2 =  this.http.get<any>(this.ROOT_URL + 'trainings/getTrainingContacts/' + cId, {headers});
    /*const response3 = this.http.get(apiUrl + '28743736/');
    const response4 = this.http.get(apiUrl + '1940345/');*/
    return forkJoin([response1, response2]);
  }

  getSessionData(): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const getTrainings = this.http.get<any>(this.ROOT_URL + 'trainings/getTrainings', {headers});
    const getLocations =  this.http.get<any>(this.ROOT_URL + 'locations/getLocations', {headers});
    const getTrainers =  this.http.get<any>(this.ROOT_URL + 'users/getTrainers', {headers});
    return forkJoin([getTrainings, getLocations, getTrainers]);
  }

  editSession(data): Observable<any> {
    console.log(data)
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post<any>(this.ROOT_URL + 'sessions/editSession', data, {headers});
  }
}
