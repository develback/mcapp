import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



/*
  Generated class for the GlobalProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GlobalProductProvider {

  private product: GlobalProductProvider; 
    Id: string;
    Nombre: string;
    Descripcion: string;
    IdTipo: string;
    IdEstado: string;
    Importe: number;
    Fecha_Publicacion: string;
    TipoDespublicacion: string;
    IdCategoria: string;
    IdUsuario: string;
    Cantidad: string;
    Imagen: string;
    lat: string;
    lng: string;
    //ImageData: string;

    getProduct(): GlobalProductProvider {
      return this.product;
    }
  
    setProduct(product:GlobalProductProvider) {
      this.product = product;
    }
  }


