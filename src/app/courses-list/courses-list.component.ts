import { Component, OnInit } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore } from "angularfire2/firestore";
import { Observable } from 'rxjs/Observable';
import { Curso } from '../model/Curso';


@Component({
  selector: 'courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {

  coursesObservable: Observable<any []>;
  cursos= [];

  constructor(private db: AngularFireDatabase, private afs: AngularFirestore) { }

  ngOnInit() {
    this.coursesObservable = this.getCourses('/cursos');
    this.getCursos('/cursos');
  }

  getCourses(listPath): Observable<any[]> {
    return this.afs.collection(listPath).valueChanges();
  }

  getCursos(listPath) {
    this.afs.collection(listPath).valueChanges().subscribe(data => {
      console.log('Passou aqui');
      this.cursos = data;
      console.log(data);
    });
  }

}
