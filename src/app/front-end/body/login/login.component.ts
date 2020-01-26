import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import {AuthService} from '../../shared/auth.service';

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
              public authService: AuthService) { }

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
          if (r.status){
            this.emailExists = '';
            this.authService.saveUser(r.data[0]);
            this.router.navigateByUrl('/');
          } else {
            this.emailExists = 'No User found with this Email/Password. Please try again.';
          }
          // this.router.navigate([this.returnUrl]);
        },
  error => {
        this.loading = false;
    });
  }

}
