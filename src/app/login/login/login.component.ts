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

  constructor(private authService: AuthService,
              private fb: FormBuilder,
              private router: Router) { 

    this.form = this.fb.group({
      'email': ['', Validators.required],
      'password': ['', Validators.required]
    });
    
  }

  ngOnInit() {
  }

  login() {
    console.log('login');
    const val = this.form.value;
    return this.authService.loginWithEmail(val.email, val.password);
  }

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }

}
