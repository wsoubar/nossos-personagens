import { ListarPersonagemComponent } from './personagem/listar-personagem/listar-personagem.component';
import { AuthGuard } from './services/auth.guard';
import { RegisterComponent } from './login/register/register.component';
import { LoginComponent } from './login/login/login.component';
import { HomeComponent } from './home/home.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'courses', component: CoursesListComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'listarPersonagens', component: ListarPersonagemComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }