import { Curso } from './../model/Curso';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore } from 'angularfire2/firestore';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private afs: AngularFirestore) { 

  }

  findAll$(listPath): Observable<Curso[]> {
    return this.afs.collection<Curso>(listPath).snapshotChanges()
      //.do(console.log)
      .map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Curso;
          data.id = a.payload.doc.id;
          return data;
        });
    });
  }

  findByID(id: string): Observable<Curso> {
    return null;
  }
}
