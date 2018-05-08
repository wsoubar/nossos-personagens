import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.css']
})
export class AppNavbarComponent implements OnInit {

  isCollapsed = true;
  user: any;

  constructor(private authService: AuthService) { 
    this.user = this.authService.currentUser;
   }

  ngOnInit() {
  }

  get authenticated():boolean {
    return this.authService.authenticated;
  }

  get userName() : string {
    return this.authService.currentUserDisplayName;
  }

  logout() {
    return this.authService.logout();
  }

}
