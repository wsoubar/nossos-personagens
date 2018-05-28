import { Perfil } from './../model/perfil';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import 'rxjs/add/operator/switchMap';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //  private authState: Observable<firebase.User>;
  userDetails: firebase.User = null;
  perfil$: Observable<Perfil>;
  perfil: Perfil;

  //perfis: Observable<Perfil[]>;
  //perfilCollection: AngularFirestoreCollection<Perfil>;
  //perfilDoc: AngularFirestoreDocument<Perfil>;
  /*
  novoPerfil: Perfil = {
    nome: '',
    foto: null
  };  
*/

  constructor(private afAuth: AngularFireAuth,
    private router: Router,
    private afs: AngularFirestore) {

    //this.perfilCollection = this.afs.collection('perfil');
    this.afAuth.authState.subscribe(
      (user: firebase.User) => {
        if (user) {
          //getPerfil(user.uid);
          this.userDetails = user;
          //console.log('userDetails', this.userDetails);
        } else {
          this.userDetails = null;
        }
      }
    );

    this.perfil$ = this.afAuth.authState
      .switchMap(user => {
        if (user) {
          return this.afs.doc<Perfil>(`perfil/${user.uid}`).snapshotChanges()
            .map(a => {
              const data = a.payload.data() as Perfil;
              data.id = a.payload.id;
              return data;
            });
        }
      });
  }

  signUpWithEmail(email: string, password: string, name: string) {
    let p = { nome: name, email: email, foto: null };

    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((user: firebase.User) => {
        this.userDetails = user;
        this.afAuth.authState.subscribe(user => {
          //console.log('user authstate subscribe', user);
          this.afs.doc(`perfil/${user.uid}`).set({ nome: p.nome, foto: p.foto, email: p.email }, { merge: true });
        });
      })
      .catch(error => {
        console.log(error)
        throw error
      });
  }

  loginWithEmail(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then(user => {
        this.userDetails = user;
        this.perfil$ = this.afs.doc<Perfil>(`items/${user.uid}`).valueChanges();
        //this.perfil.subscribe(perf=>console.log(perf));
        this.router.navigate(['/'])
      })
      .catch(error => {
        console.log(error)
        throw error
      });
  }

  resetPassword(email: string) {
    return this.afAuth.auth.sendPasswordResetEmail(email)
      .then(() => console.log('sent Password Reset Email!'))
      .catch((error) => console.log(error))
  }

  // Returns true if user is logged in
  get authenticated(): boolean {
    return this.userDetails !== null;
  }

  getPerfil(userid): AngularFirestoreDocument<Perfil> {
    //this.afs.collection('perfil').doc(userid).snapshotChanges().map(
    return null;
  }

  // Returns current user data
  get currentUser(): any {
    return this.authenticated ? this.userDetails : null;
  }

  // Returns
  get currentUserObservable(): any {
    return this.afAuth.authState
  }

  logout() {
    this.afAuth.auth.signOut()
      .then((res) => this.router.navigate(['/']));
  }

  /*
    signInWithTwitter() {
      return this.afAuth.auth.signInWithPopup(
        new firebase.auth.TwitterAuthProvider()
      )
    }
  
    signInWithFacebook() {
      return this.afAuth.auth.signInWithPopup(
        new firebase.auth.FacebookAuthProvider()
      )
    }
  
    signInWithGoogle() {
      return this.afAuth.auth.signInWithPopup(
        new firebase.auth.GoogleAuthProvider()
      )
    }
  
  */

}