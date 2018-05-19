import { PersonagemService } from './services/personagem.service';
import { AuthGuard } from './services/auth.guard';
import { CoursesService } from './services/courses.service';
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { AuthService } from './services/auth.service';
import { LoginComponent } from './login/login/login.component';
import { RegisterComponent } from './login/register/register.component';
import { ListarPersonagemComponent } from './personagem/listar-personagem/listar-personagem.component';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/first';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    CoursesListComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ListarPersonagemComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [AuthService, AuthGuard, PersonagemService, CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
