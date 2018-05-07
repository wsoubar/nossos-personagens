import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  error: any = {};

  constructor(private authService: AuthService, 
              private router: Router, 
              private fb: FormBuilder) { 

    this.form = this.fb.group({
      'email': ['', [Validators.required, Validators.email]],
      'password': ['', [
        Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
        Validators.minLength(6),
        Validators.maxLength(25),
        Validators.required
        ]
      ],
      'confirm': ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  signUp() {

    const val = this.form.value;
    this.authService.signUpWithEmail(val.email, val.password)
      .then(user => {
        console.log('user', user)
      })
      .catch(err =>{
        this.error = err;
        console.log(err);
      });

  }

  isPasswordMatch (): boolean {
    const val = this.form.value;
    return val && val.password && val.password == val.confirm;
  }

  validateForm(email: string, password: string): boolean {
    // validate this.errorMessage
    return true;
  }

  get email() { return this.form.get('email') }
  get password() { return this.form.get('password') }
  get confirm() { return this.form.get('confirm') }

}
