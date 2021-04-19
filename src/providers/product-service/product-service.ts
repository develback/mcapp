import { HttpClientModule, HttpParams, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalProductProvider } from '../../providers/global-product/global-product';
import { GlobalProvider } from "../../providers/global/global";
/*
  Generated class for the CategoryServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProductServiceProvider {

  constructor(public http: HttpClient, private product:GlobalProductProvider, public global:GlobalProvider) {
    
  }

  getHome(){
    return this.http.get(this.global.ApiUrl+'productos/HomeApp');
  }
  geProductosMap(){
    return this.http.get(this.global.ApiUrl+'productos/MapApp');
  }

  getProductByUser(idUsuario:string){
    return this.http.get(this.global.ApiUrl+'productos/ProductsByUser/'+idUsuario);
  }
  getProductByIdTipo(IdTipo:string){
    return this.http.get(this.global.ApiUrl+'productos/GetProductosByIdTipo/'+IdTipo);
  }
  getDescuentosByIdCategoria(IdCategoria:string){
    return this.http.get(this.global.ApiUrl+'productos/GetDescuentosByIdCategoria/'+IdCategoria);
  }
  getProductById(id:string){
    return this.http.get(this.global.ApiUrl+'productos/'+id);    
  }
  getProductByIdProd(id:string){
    return this.http.get(this.global.ApiUrl+'productos/ProductsByIdProd/'+id);
  }
  getProductByName(nombre:string){
    return this.http.get(this.global.ApiUrl+'productos/ProductsByName/'+nombre);
  }
  getPerfilesByCategoria(IdCategoria:string){
    return this.http.get(this.global.ApiUrl+'productos/GetPerfilesByCateg/'+IdCategoria);
  }
  getAllPerfiles(){
    return this.http.get(this.global.ApiUrl+'productos/GetAllPerfiles');
  }
  getCanjesByCategoria(IdCategoria:string){
    return this.http.get(this.global.ApiUrl+'productos/GetCanjesByIdCategoria/'+IdCategoria);
  }
  getCanjesBySexo(Sexo:string){
    return this.http.get(this.global.ApiUrl+'productos/GetCanjesBySexo/'+Sexo);
  }
  getCanjesByUsuario(IdUsuario:string){
    return this.http.get(this.global.ApiUrl+'productos/GetCanjesByIdUsuario/'+IdUsuario);
  }
  
  putProduct(product:GlobalProductProvider){
    console.log(product);
    //return this.http.put(this.global.ApiUrl+'Productos/'+product.Id, product);
    return this.http.put(this.global.ApiPostUrl+'Productos/'+product.Id, product);
  }
  deleteProduct(product:GlobalProductProvider){
    console.log(product);
    //return this.http.delete(this.global.ApiUrl+'Productos/'+product.Id);
    return this.http.delete(this.global.ApiPostUrl+'Productos/'+product.Id);
  }

  postProduct(product:GlobalProductProvider){
    product.Id="0";
    console.log(product);
    //return this.http.post(this.global.ApiUrl+'Productos/', product);
    return this.http.post(this.global.ApiPostUrl+'Productos/', product);
  }

}
