import { Component, OnInit } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {

  //coursesObservable: Observable<any []>;
  cursos = [];

  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
    //this.coursesObservable = this.getCourses('/cursos');
    this.getCursos('/cursos');
  }

//  getCourses(listPath): Observable<any[]> {
//    return this.db.list(listPath).valueChanges();
//  }

  getCursos(listPath) {
    this.db.list(listPath).valueChanges().subscribe(data => {
      console.log('Passou aqui');
      this.cursos = data;
      console.log(data);
    });
  }

}
