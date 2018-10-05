import { Observable } from 'rxjs';
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
  perfil$: Observable<Perfil>;

  constructor(private authService: AuthService) {
    this.perfil$ = this.authService.perfil$;
  }

  ngOnInit() {
    this.perfil$.subscribe(p=> console.log('p', p));
  }

  get authenticated(): boolean {
    return this.authService.authenticated;
  }

  logout() {
    return this.authService.logout();
  }

}
