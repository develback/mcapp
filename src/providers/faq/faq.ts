import { HttpClientModule, HttpParams, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalProvider } from "../../providers/global/global";

@Injectable()
export class FaqProvider {
    favoriteCounter: number = 0;
    favorites: Array<any> = [];
    
    clientes;
    cliente: any;
    

  constructor(public http: HttpClient, public global:GlobalProvider) {
    //console.log('Hello FaqProvider Provider');
  }
  GetPreguntas_Frecuentes() {
    return this.http.get(this.global.ApiUrl+'preguntas_frecuentes/');
  }

}
