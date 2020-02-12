import { Component, OnInit, ViewChild } from '@angular/core';
import {SystemService} from '../../shared/system.service';
import {Router} from '@angular/router';
import {AuthService} from '../../shared/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-inscriptions',
  templateUrl: './inscriptions.component.html',
  styleUrls: ['./inscriptions.component.css']
})
export class InscriptionsComponent implements OnInit {
  successJoined = false;

  constructor(public systemService: SystemService,
              public router: Router,
              public authService: AuthService,
              public toastr: ToastrService) {
  }


  ngOnInit() {
    console.log(this.systemService.selectedSession);
    if (!this.systemService.selectedSession) {
      this.router.navigateByUrl('/catalogue');
    }
  }

  submit() {
    this.systemService.saveParticipants(this.systemService.selectedSession.training_session_id).subscribe(
      r => {
        console.log(r);
        if (r.status) {
          this.successJoined = true;
          this.showSuccess();
        } else {
          this.showError();
        }
      }
    );
  }

  showSuccess() {
    this.toastr.success('Votre inscription à la formation a bien été prise en compte : nous reviendrons rapidement vers vous avec de plus amples informations.', 'Réussite');
  }

  showError() {
    this.toastr.error('Vous êtes déjà inscrit à cette formation.', 'Erreur');
  }
  public sliceTime(str) {
    if (str.length === 8){
      return str.substring(0, str.length - 3);
    } else {
      return str;
    }
  }
}
