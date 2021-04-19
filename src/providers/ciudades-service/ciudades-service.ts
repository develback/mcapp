import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalProvider } from "../../providers/global/global";

@Injectable()
export class CiudadesServiceProvider {

  constructor(public http: HttpClient, public global:GlobalProvider) {
    
  }
  GetCiudades() {
    console.log("Obteniendo la ciudad de: "+this.global.ApiUrl);
    return this.http.get(this.global.ApiUrl+'localidades/');
  }
  GetCiudadesByIdPais(idPais) {
    return this.http.get(this.global.ApiUrl+'Localidades/LocalidadesByPais/'+idPais);
  }
  GetPaises() {
    console.log("Obteniendo el pais de: "+this.global.ApiUrl);
    return this.http.get(this.global.ApiUrl+'paises/');
  }

}
