import { Component, OnInit, ViewChild } from '@angular/core';
import {SystemService} from '../../shared/system.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-inscriptions',
  templateUrl: './inscriptions.component.html',
  styleUrls: ['./inscriptions.component.css']
})
export class InscriptionsComponent implements OnInit {
  successJoined = false;
  

  constructor(public systemService: SystemService,
              public router: Router) { }

  ngOnInit() {
    console.log(this.systemService.selectedSession);
    if(!this.systemService.selectedSession){
      this.router.navigateByUrl('/catalogue');
    }
  }

  submit() {
    this.systemService.saveParticipants(this.systemService.selectedSession.training_session_id).subscribe(
      r => {
        console.log(r);
        if (r.status) {
          this.successJoined = true;
        }
      }
    )
  }
}
