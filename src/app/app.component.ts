import {AfterViewInit, Component, OnInit} from '@angular/core';
import {AppService} from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit{
  title = 'inscriptions-ess';

  constructor(public appService: AppService){
    // this.appService.frontNav = true;
  }

  ngOnInit(){

  }

  ngAfterViewInit(): void {
    this.appService.frontNav = true;
  }
}
