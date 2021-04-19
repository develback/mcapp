import { HttpClientModule, HttpParams, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalProvider } from "../../providers/global/global";
/*
  Generated class for the CategoryServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ChatServiceProvider {

  
  
  
  constructor(public http: HttpClient, public global:GlobalProvider) {
    
  }

  getChats(){
    return this.http.get(this.global.ApiUrl+'chats');
  }
  getChatsByUsuario(IdUser){
    return this.http.get(this.global.ApiUrl+'chats/ChatsByIdUsuario/'+IdUser);
  }
  postChat(chat){
    chat.Id="0";
    console.log(chat);
    //return this.http.post(this.global.ApiUrl+'Chats/', chat);
    return this.http.post(this.global.ApiPostUrl+'Chats/', chat);
  }
  putChat(chat){
    console.log(chat);
    //return this.http.put(this.global.ApiUrl+'Chats/'+chat.Id, chat);
    return this.http.put(this.global.ApiPostUrl+'Chats/'+chat.Id, chat);
  }

}
