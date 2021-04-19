import { HttpClientModule, HttpParams, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalProvider } from "../../providers/global/global";

@Injectable()
export class CategoryServiceProvider {

  
  constructor(public http: HttpClient, public global:GlobalProvider) {
    //console.log('Hello CategoryServiceProvider Provider');
  }

  GetCategorias() {
    console.log("La API es: "+this.global.ApiUrl);
    return this.http.get(this.global.ApiUrl+'categorias/');
  }
  GetCategoriasHome() {
    return this.http.get(this.global.ApiUrl+'categorias/GetCategoriasHome');
  }
  GetCategorias2() {
    //return this.http.get(this.global.ApiUrl+'usuarios/14');
    return this.http.get(this.global.ApiUrl+'categorias/GetUsuarioByToken/5OtYdXPtpqQSVDzzFdQ7srXxGrn1');
  }
  GetCategoriaById(id) {
    return this.http.get(this.global.ApiUrl+'categorias/'+id);
  }
  GetTotalesById(idCateg) {
    return this.http.get(this.global.ApiUrl+'categorias/GetTotalesById/'+idCateg);
  }

}
