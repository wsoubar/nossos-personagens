import { Perfil } from './../model/perfil';
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
  perfil: Perfil;

  constructor(private authService: AuthService) {
    this.user = this.authService.currentUser;
    if (this.user) {
      this.authService.perfil$.subscribe(perfil => {
        this.perfil = perfil;
      });
    }
  }

  ngOnInit() {
  }

  get authenticated(): boolean {
    return this.authService.authenticated;
  }

  logout() {
    return this.authService.logout();
  }

}
