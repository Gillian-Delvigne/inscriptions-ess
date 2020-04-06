import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../shared/auth.service';
import {AppService} from '../../../app.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public authService: AuthService,
              public appService: AppService) { }

  public isCollapsed = true;

  ngOnInit() {
  }


}
