import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {first} from 'rxjs/operators';
import {AdminService} from '../admin.service';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  emailExists = '';
  constructor(private router: Router,
              private fb: FormBuilder,
              public adminService: AdminService) { }

  ngOnInit() {
    if (this.adminService.adminLoggedin) {
      this.router.navigateByUrl('/admin/dashboard');
    } else {
      this.initLoginForm();
    }
  }

  initLoginForm() {

    this.loginForm = this.fb.group({
      email: ['', Validators.compose([
        Validators.required,
        Validators.email,
        Validators.minLength(3),
        Validators.maxLength(320) // https://stackoverflow.com/questions/386294/what-is-the-maximum-length-of-a-valid-email-address
      ])
      ],
      password: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(100)
      ])
      ]
    });
  }

  isControlHasError(controlName: string, validationType: string): boolean {
    const control = this.loginForm.controls[controlName];
    if (!control) {
      return false;
    }

    const result = control.hasError(validationType) && (control.dirty || control.touched);
    return result;
  }

  submit() {
    // stop here if form is invalid
    // console.log(this.loginForm);
    if (this.loginForm.invalid) {
      return;
    }
    console.log(this.loginForm);
    const formData = {
      email : this.loginForm.value.email,
      password : this.loginForm.value.password,
    };
    console.log('formData', formData);
    this.adminService.login(formData )
      .pipe(first())
      .subscribe(
        r => {
          console.log(r);
          if (r.status) {
            this.adminService.saveUser(r.data[0]);
            this.emailExists = '';
            this.router.navigateByUrl('/admin/dashboard');
          } else {
            this.emailExists = 'Adresse email ou mot de passe incorrect. Merci de réessayer.';
          }
          // this.router.navigate([this.returnUrl]);
        },
        error => {
          this.loading = false;
        });
  }
}
