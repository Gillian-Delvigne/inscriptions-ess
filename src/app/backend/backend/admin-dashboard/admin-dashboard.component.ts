import { Component, OnInit } from '@angular/core';
import {AdminService} from '../admin.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(public adminService: AdminService) { }

  ngOnInit() {
  }

}
