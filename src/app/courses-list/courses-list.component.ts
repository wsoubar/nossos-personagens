import { CoursesService } from './../services/courses.service';
import { Curso } from './../model/Curso';
import { Component, OnInit } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore } from "angularfire2/firestore";
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {

  cursos$: Observable<Curso[]>;

  constructor(private coursesService: CoursesService) { 

  }

  ngOnInit() {
    this.cursos$ = this.coursesService.findAll$('/cursos');
    this.cursos$.subscribe();
  }


}
