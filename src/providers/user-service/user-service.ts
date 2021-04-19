import { HttpClientModule, HttpParams, HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalProvider } from "../../providers/global/global";
/*
  Generated class for the CategoryServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserServiceProvider {

  constructor(public http: HttpClient, private user:GlobalProvider) {
    
  }

  

  getUserByToken(token:string){
    
    return this.http.get(this.user.ApiUrl+'Usuarios/GetUsuarioByToken/'+token);
  }
  getUserById(idUsuario){    
    return this.http.get(this.user.ApiUrl+'Usuarios/GetUsuariosById/'+idUsuario);
  }
  postUser(user:GlobalProvider) {
    user.Id="0";
    console.log(user);
    //return this.http.post(this.user.ApiUrl+'Usuarios/', user);
    return this.http.post(this.user.ApiPostUrl+'Usuarios/', user);
  }
  putUser(usuario){
    console.log(usuario);
    //return this.http.put(this.user.ApiUrl+'Usuarios/'+usuario.Id, usuario);
    return this.http.put(this.user.ApiPostUrl+'Usuarios/'+usuario.Id, usuario);
  }

}
