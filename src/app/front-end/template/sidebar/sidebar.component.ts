import { Component, OnInit } from '@angular/core';
import {SystemService} from '../../shared/system.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  categories: any;
  constructor(public systemService: SystemService) { }

  ngOnInit() {
    this.systemService.getCategories().subscribe(
      r => {
        console.log(r);
        this.categories = r;
      },
      err => {
        console.log(err);
      }
    )
  }

  getCat(catId: any) {
    console.log(catId);
    this.systemService.selectedCat = catId;
    this.systemService.displayTrainingByCatId();
  }

}
