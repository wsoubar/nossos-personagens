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

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.userInfo);
    
  }

}
