import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import {AuthService} from '../../shared/auth.service';
import { ToastrService } from 'ngx-toastr';
import {SystemService} from '../../shared/system.service';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  emailExists: string;

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              public authService: AuthService,
              public toastr: ToastrService,
              public systemService: SystemService,
              public SpinnerService: NgxSpinnerService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    console.log(this.loginForm);
    this.SpinnerService.show();
    // this.loading = true;
    const formData = {
      email : this.f.username.value,
      password : this.f.password.value,
    };
    console.log('formData', formData);
    this.authService.login(formData )
      .pipe(first())
      .subscribe(
        r => {
          console.log(r);
          this.SpinnerService.hide();
          if (r.status){
            this.showSuccess();
            this.emailExists = '';
            this.authService.saveUser(r.data[0]);

            if (sessionStorage.getItem('selectedSession') != '' && sessionStorage.getItem('selectedSession') != null){
              this.systemService.selectedSession = JSON.parse(sessionStorage.getItem('selectedSession'));
              this.router.navigateByUrl('/inscriptions');
            } else {
              this.router.navigateByUrl('/');
            }
          } else {
            this.showFailure();
            this.emailExists = 'Adresse email ou mot de passe incorrect. Merci de réessayer.';
          }
          // this.router.navigate([this.returnUrl]);
        },
  error => {
        this.loading = false;
    });
  }

  showSuccess() {
    this.toastr.success('La connexion à votre compte a réussi', 'Réussite');
  }
  showFailure() {
    this.toastr.error('Un problème est survenu lors de la création de votre compte', 'Erreur');
  }
}
