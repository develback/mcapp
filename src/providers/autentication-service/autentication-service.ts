import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';

@Injectable()
export class AutenticationServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello AutenticationServiceProvider Provider');
  }
  

  registerUser(usuario:string, clave:string){
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(usuario, clave)
      .then(
        res => resolve(res),
        err => reject(err))
   
      })
    
   }
   loginUser(usuario:string, clave:string){
    return new Promise<any>((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(usuario, clave)
      .then(
        res => resolve(res),
        err => reject(err))
   
      })
    
   }
   

}
