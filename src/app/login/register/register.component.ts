import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userInfo = {
    email: '',
    password: '',
    confirmPassword: '' 
  };

  error: any = {};

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.userInfo);
    
    if (this.validateForm(this.userInfo.email, this.userInfo.password)) {
      this.authService.signUpWithEmail(this.userInfo.email, this.userInfo.password)
        .then(() => {
          this.router.navigate(['/'])
        }).catch(_error => {
          this.error = _error
          console.log(_error);
          this.router.navigate(['/register'])
        })
    }

  }

  validateForm(email: string, password: string): boolean {
    // validate this.errorMessage
    return true;
  }

}
