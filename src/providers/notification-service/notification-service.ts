import { HttpClientModule, HttpParams, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalProvider } from "../../providers/global/global";

@Injectable()
export class NotificationServiceProvider {

  constructor(public http: HttpClient, public global:GlobalProvider) {
    //console.log('Hello TerminosServiceProvider Provider');
  }
  GetNotificacionesByUsuario(idUsuario) {
    return this.http.get(this.global.ApiUrl+'Notificaciones/NotificacionesByUsuario/'+idUsuario);
  }
  GetCantNotificacionesByUsuario(idUsuario) {
    return this.http.get(this.global.ApiUrl+'Notificaciones/CantNotificacionesByUser/'+idUsuario);
  }
  
  SendNotificationPush(titulo: string,descripcion: string) {      
    let postData2 = {
        "Titulo": titulo,
        "Descripcion":descripcion
    }
    //return this.http.post(this.global.ApiUrl+'NotificationPush', postData2,{headers: {'Accept': 'application/json','Content-Type': 'application/json', }});    
    return this.http.post(this.global.ApiPostUrl+'NotificationPush', postData2,{headers: {'Accept': 'application/json','Content-Type': 'application/json', }});    
    
  }

}
