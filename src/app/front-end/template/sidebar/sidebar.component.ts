import { Component, OnInit } from '@angular/core';
import {SystemService} from '../../shared/system.service';
import { faRedoAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  categories: any;
  constructor(public systemService: SystemService) { }
  faRedoAlt = faRedoAlt;
  ngOnInit() {
    this.getCats();

    /*this.systemService.saveParticipants().subscribe(
      r => {
        console.log(r);
      }
    );*/
  }

  getCats(){
    this.systemService.getCategories().subscribe(
      r => {
        console.log(r);
        this.categories = r;
        this.systemService.selectedCat = '';
        this.systemService.displayTrainings();
      },
      err => {
        console.log(err);
      }
    );
  }

  getCat(catId: any) {
    console.log(catId);
    this.systemService.selectedCat = catId;
    this.systemService.displayTrainingByCatId();
  }

  resetCats() {
    this.getCats();
  }
}
