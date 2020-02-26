import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {UsersService} from '../users/users.service';
import {RolesService} from './roles.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {
  displayedColumns: string[] = ['position', 'role-id', 'role'];
  dataSource = new MatTableDataSource();
  constructor(public roleService: RolesService) { }

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.roleService.getRoles().subscribe(
      res => {
        console.log(res, 'roles');
        this.dataSource = new MatTableDataSource(res);
      }
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
