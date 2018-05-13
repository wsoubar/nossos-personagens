import { inject } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  error: any = {};
  resetPassword = false;

  constructor(private authService: AuthService,
              private fb: FormBuilder,
              private router: Router) { 

    this.form = this.fb.group({
      'email': ['', [Validators.required, Validators.email]],
      'password': ['', Validators.required]
    });
    
  }

  ngOnInit() {
  }

  isValidMailFormat() : boolean{
    return this.email.valid;
  }

  login() {
    console.log('login');
    //const val = this.form.value;
    return this.authService.loginWithEmail(this.email.value, this.password.value);
  }

  sendResetEmail() {
    const val = this.form.value;
    //const email = val.email;
    if (this.email.invalid) {
      this.error = {message: 'Favor preencher o email corretamente!'}
      return;
    }
    this.authService.resetPassword(this.email.value)
      .then(sucesso => {
        this.resetPassword = true;
        this.error = {};
        console.log('reset com sucesso');
      })
      .catch(_error => {
        this.error = _error
      });
  }

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }

}
