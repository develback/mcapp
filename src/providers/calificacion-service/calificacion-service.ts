import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalProvider } from "../../providers/global/global";
import { getLocaleDateFormat } from '@angular/common';

@Injectable()
export class CalificacionServiceProvider {
  /* private calificacion: CalificacionServiceProvider; 
    Id: string;
    UsuarioCalificador: string;
    UsuarioCalificado: string;
    Puntuacion: string;
    Comentario: string;
    FechaAlta: string; 
    
    getCalificacion(): CalificacionServiceProvider {
      return this.calificacion;
    }
  
    setCalificacion(calificacion:CalificacionServiceProvider) {
      this.calificacion = calificacion;
    } */

  constructor(public http: HttpClient, public global:GlobalProvider) {
    
  }


  getCalificacionesByUser(idUsuario:string){
    return this.http.get(this.global.ApiUrl+'Calificaciones/ByUsuarioCalificado/'+idUsuario);
  }
  getMiPromedioCalificado(idUsuario:string){
    return this.http.get(this.global.ApiUrl+'Calificaciones/MiPromedioCalificado/'+idUsuario);
  }

/*   postCalificaciones(calificacion:CalificacionServiceProvider){
    calificacion.Id="0";    
    return this.http.post(this.global.ApiUrl+'Calificaciones/', calificacion);
  } */
  postCalificaciones(usCalificador: string,usCalificado: string, puntuacion:number,comentario: string) {      
    let postData2 = {
        "Id": 0,
        "UsuarioCalificador":usCalificador,
        "UsuarioCalificado":usCalificado,
        "Puntuacion":puntuacion,
        "Comentario":comentario,
        "FechaAlta": ""
    }
    
    //return this.http.post(this.global.ApiUrl+'Calificaciones', postData2,{headers: {'Accept': 'application/json','Content-Type': 'application/json', }});    
    return this.http.post(this.global.ApiPostUrl+'Calificaciones', postData2,{headers: {'Accept': 'application/json','Content-Type': 'application/json', }});    
    
  }
  putCalificaciones(id:number,usCalificador: string,usCalificado: string, puntuacion:number,comentario: string){
    
      let postData2 = {
        "Id": id,
        "UsuarioCalificador":usCalificador,
        "UsuarioCalificado":usCalificado,
        "Puntuacion":puntuacion,
        "Comentario":comentario,
        "FechaAlta": ""
    }
    //return this.http.put(this.global.ApiUrl+'Calificaciones/'+id, postData2,{headers: {'Accept': 'application/json','Content-Type': 'application/json', }});    
    return this.http.put(this.global.ApiPostUrl+'Calificaciones/'+id, postData2,{headers: {'Accept': 'application/json','Content-Type': 'application/json', }});    
  }
  
  


}
