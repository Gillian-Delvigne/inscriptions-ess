import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {SystemService} from '../../shared/system.service';
import {Router} from '@angular/router';
import {NgxSpinnerService} from 'ngx-spinner';

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
  public sessionStatus = false;

  constructor(config: NgbModalConfig,
              private modalService: NgbModal,
              public systemService: SystemService,
              public router: Router,
              public SpinnerService: NgxSpinnerService) {
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
        console.log(r);
        if(r.status){
          this.sessions = r.data;

          this.selectedTraining = training;
          console.log(this.sessions);
          this.sessionStatus = true;
        } else{
          this.sessionStatus = false;
        }
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
