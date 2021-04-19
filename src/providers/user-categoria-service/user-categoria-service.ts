import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalProvider } from "../../providers/global/global";

@Injectable()
export class UserCategoriaServiceProvider {

  constructor(public http: HttpClient, public global:GlobalProvider) {

  }
  getUsuariosCategorias(){
    return this.http.get(this.global.ApiUrl+'Usuarios_Categorias');
  }
  getUsuarioCategoriaByUsuario(IdUser){
    return this.http.get(this.global.ApiUrl+'Usuarios_Categorias/GetCategoriasByUsuario/'+IdUser);
  }
/*   postUsuarioCategoria(usuarioCateg){
    usuarioCateg.Id="0";
    console.log(usuarioCateg);
    return this.http.post(this.global.ApiUrl+'Usuarios_Categorias/', usuarioCateg);
  } */
  postUsuarioCategoria(idUsuario: string,idCategoria: string) {      
    let postData2 = {
        "IdUsuario": idUsuario,
        "IdCategoria":idCategoria,
        "Observacion":""
    }
    //return this.http.post(this.global.ApiUrl+'Usuarios_Categorias', postData2,{headers: {'Accept': 'application/json','Content-Type': 'application/json', }});    
    return this.http.post(this.global.ApiPostUrl+'Usuarios_Categorias', postData2,{headers: {'Accept': 'application/json','Content-Type': 'application/json', }});    
  }

  putUsuarioCategoria(usuarioCateg){
    console.log(usuarioCateg);
    //return this.http.put(this.global.ApiUrl+'Usuarios_Categorias/'+usuarioCateg.Id, usuarioCateg);
    return this.http.put(this.global.ApiPostUrl+'Usuarios_Categorias/'+usuarioCateg.Id, usuarioCateg);
  }
  DelUsuarioCategoria(idUsuario){
    //return this.http.delete(this.global.ApiUrl+'Usuarios_Categorias/'+idUsuario);
    return this.http.delete(this.global.ApiPostUrl+'Usuarios_Categorias/'+idUsuario);
  }

}
