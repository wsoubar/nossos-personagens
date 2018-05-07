import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';

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
      email: ['', Validators.required],
      password: ['', Validators.required],
      conform: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  signUp() {

    const val = this.form.value;
    this.authService.signUpWithEmail(val.email, val.password)
      .subscribe(
        () => {
          alert();
        },
        err => alert(err)
      ); 

  }

  isPasswordMatch (): boolean {
    const val = this.form.value;
    return val && val.password && val.password == val.confirm;
  }

  validateForm(email: string, password: string): boolean {
    // validate this.errorMessage
    return true;
  }

}
