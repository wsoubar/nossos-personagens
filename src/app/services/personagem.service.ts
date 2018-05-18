import { AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestore } from 'angularfire2/firestore';
import { Personagem } from './../model/personagem';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonagemService {

  personagens: Observable<Personagem[]>;
  personagemColl: AngularFirestoreCollection<Personagem>;
  personagemDoc: AngularFirestoreDocument<Personagem>;

  constructor(private afs: AngularFirestore) { 
    this.personagemColl = this.afs.collection('personagem', ref=> ref.orderBy('nome', 'asc'));

    this.personagens = this.personagemColl.snapshotChanges().map(changes=> {
      return changes.map(p => {
        const data = p.payload.doc.data() as Personagem;
        data.id = p.payload.doc.id;
        return data;
      });
    });
  }

  getPersonagens() {
    return this.personagens;
  }

  addPersonagem(personagem: Personagem) {
    this.personagemColl.add(personagem);
  }

  deletePersonagem(personagem: Personagem) {
    this.getPersonagemDoc(personagem)
    this.personagemDoc.delete();
  }
  
  updatePersonagem(personagem: Personagem) {
    this.getPersonagemDoc(personagem)
    this.personagemDoc.update(personagem);
  }
  
  getPersonagemDoc(personagem: Personagem) {
    return this.personagemDoc = this.afs.doc(`personagem/${personagem.id}`); 
  }
}
