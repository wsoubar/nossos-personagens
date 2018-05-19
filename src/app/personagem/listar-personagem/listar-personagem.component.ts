import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { PersonagemService } from './../../services/personagem.service';
import { Component, OnInit } from '@angular/core';
import { Personagem } from '../../model/personagem';

@Component({
  selector: 'app-listar-personagem',
  templateUrl: './listar-personagem.component.html',
  styleUrls: ['./listar-personagem.component.css']
})
export class ListarPersonagemComponent implements OnInit {

  //personagens$: Observable<Personagem[]>;
  personagens: Personagem[];

  constructor(private personagemServ: PersonagemService,
    private router: Router) {

  }

  ngOnInit() {
    //this.personagens$ = this.personagemServ.getPersonagens$();
    this.personagemServ.getPersonagens$().subscribe(
      personagens => {
        this.personagens = personagens;
        console.log;
      });
  }

}
