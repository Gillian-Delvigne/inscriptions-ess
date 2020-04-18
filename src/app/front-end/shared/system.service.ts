import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {NgxSpinnerService} from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})

export class SystemService {
  ROOT_URL = environment.apiUrl;
  selectedCat = '';
  public trainings: any;
  selectedSession: any;
  constructor(private http: HttpClient,
              private router: Router,
              public SpinnerService: NgxSpinnerService) { }

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
    this.SpinnerService.show();
    this.getTrainings().subscribe(
      r => {
        this.SpinnerService.hide();
        console.log('test', r);
        this.trainings = r;
      },
      err => {
        this.SpinnerService.hide();
        console.log('Error', err)
      }
    )
  }

  displayTrainingByCatId(){
    this.SpinnerService.show();
    this.getTrainingsByCat().subscribe(
      r => {
        this.SpinnerService.hide();
        console.log('test', r);
        this.trainings = r;
      },
      err => {
        this.SpinnerService.hide();
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

    return this.http.get<any>(this.ROOT_URL + 'sessions/getTrainingSessionByAll/', {headers});
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
