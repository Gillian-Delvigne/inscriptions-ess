import { Component, OnInit } from '@angular/core';
import {AppService} from '../../app.service';
import {AdminService} from './admin.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-backend',
  templateUrl: './backend.component.html',
  styleUrls: ['./backend.component.css']
})
export class BackendComponent implements OnInit {

  constructor(public appService: AppService,
              public adminService: AdminService,
              public router: Router) {
    this.appService.frontNav = false;
    // alert('fdfd');
    if ( !this.adminService.adminLoggedin) {
      this.router.navigateByUrl('/admin/login');
    } else {
      this.router.navigateByUrl('/admin/dashboard');
    }
  }

  ngOnInit() {
    console.log('dssd')
  }

}
