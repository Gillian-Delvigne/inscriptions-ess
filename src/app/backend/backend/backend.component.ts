import { Component, OnInit } from '@angular/core';
import {AppService} from '../../app.service';

@Component({
  selector: 'app-backend',
  templateUrl: './backend.component.html',
  styleUrls: ['./backend.component.css']
})
export class BackendComponent implements OnInit {

  constructor(public appService: AppService) {
    this.appService.frontNav = false;
  }

  ngOnInit() {
  }

}
