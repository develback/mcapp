import { HttpClientModule, HttpParams, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalProvider } from "../../providers/global/global";

@Injectable()
export class ChatDetalleServiceProvider {

  constructor(public http: HttpClient, public global:GlobalProvider) {
    
  }
  getChatsDetails(){
    return this.http.get(this.global.ApiUrl+'chats');
  }
  getChatsDetailsByUsuario(IdUserEmisor,IdUserReceptor){
    return this.http.get(this.global.ApiUrl+'Chats_Detalles/ChatsDetailsByIdUsuario/'+IdUserEmisor + '/'+IdUserReceptor);
  }
  postChatDetails(chat){
    chat.Id="0";
    console.log(chat);
    //return this.http.post(this.global.ApiUrl+'Chats_Detalles/', chat);
    return this.http.post(this.global.ApiPostUrl+'Chats_Detalles/', chat);
  }

}
