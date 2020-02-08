import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SystemService {
  ROOT_URL = environment.apiUrl;
  selectedCat = '';
  public trainings: any;
  selectedSession: any;
  constructor(private http: HttpClient, private router: Router) { }

  // Get Trainings With Contacts
  getTrainings(): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    return this.http.get<any>(this.ROOT_URL + 'trainings/getTrainingsWithContacts', {headers});
  }

  // Get Trainings By Category
  getTrainingsByCat(): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    return this.http.get<any>(this.ROOT_URL + 'trainings/getTrainingsByCat/' + this.selectedCat, {headers});
  }

  displayTrainings(){
    this.getTrainings().subscribe(
      r => {
        console.log('test', r);
        this.trainings = r;
      },
      err => {
        console.log('Error', err)
      }
    )
  }

  displayTrainingByCatId(){
    this.getTrainingsByCat().subscribe(
      r => {
        console.log('test', r);
        this.trainings = r;
      },
      err => {
        console.log('Error', err)
      }
    )
  }

  getCategories(): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    return this.http.get<any>(this.ROOT_URL + 'category/getCategories', {headers});
  }

  getSessions(trainingId): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    return this.http.get<any>(this.ROOT_URL + 'sessions/getTrainingSessionByTId/' + trainingId, {headers});
  }

  getAllSessions(): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    return this.http.get<any>(this.ROOT_URL + 'sessions/getTrainingSessions/', {headers});
  }

  getSessionById(trainingId): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    return this.http.get<any>(this.ROOT_URL + 'sessions/getTrainingSessionByTSId/' + trainingId, {headers});
  }

  getParticipants(): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    return this.http.get<any>(this.ROOT_URL + 'sessions/getParticipants', {headers});
  }

  getParticipantsBySession(sessionId): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    return this.http.get<any>(this.ROOT_URL + 'sessions/getTrainingSessionParticipants/' + sessionId, {headers});
  }

  saveParticipants(trainingSessionId): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const data = {
      userId: sessionStorage.getItem('userId'),
      sessionId: trainingSessionId
    };

    return this.http.post<any>(this.ROOT_URL + 'sessions/addParticipant', data, {headers});
  }

}
