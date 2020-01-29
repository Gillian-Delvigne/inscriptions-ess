import { Component, OnInit } from '@angular/core';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import {SystemService} from '../../shared/system.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {

  constructor(public systemService: SystemService) { }

  ngOnInit() {
  }


  
}




