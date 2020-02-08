import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {SystemService} from '../../shared/system.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class CardComponent implements OnInit {
  trainings: any;
  public sessions: any;
  public selectedTraining: any;

  constructor(config: NgbModalConfig,
              private modalService: NgbModal,
              public systemService: SystemService,
              public router: Router) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  open(content, training) {
    this.getSessions(content, training);
    /*this.modalService.open(
      content, 
      {
          size: 'xl', 
          windowClass: ''
      }
    )*/
  }

  ngOnInit() {
    this.systemService.displayTrainings();
  }

  getSessions(content, training){
    this.systemService.getSessions(training.training_id).subscribe(
      r => {
        this.sessions = r;
        console.log(this.sessions);
        this.selectedTraining = training;

        /*this.sessions.map((k, v) => {
          console.log(k, v);
          const count = this.getParticipants(k.training_session_id);
          console.log('count', count);
          k.participants = count;
        });*/
        console.log(this.sessions);
        this.modalService.open(
          content,
          {
            size: 'xl',
            windowClass: ''
          }
        );
      },
      err => {

      }
    )
  }

  public sliceTime(str) {
    if (str.length === 8){
      return str.substring(0, str.length - 3);
    } else {
      return str;
    }
  }

  chooseSession(trainingSession: any) {
    this.systemService.selectedSession = trainingSession;
    this.router.navigateByUrl('/inscriptions');
  }
}
