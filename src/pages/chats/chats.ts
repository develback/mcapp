import { Component } from '@angular/core';
import { NavController, ModalController,LoadingController } from 'ionic-angular';
import { ChatServiceProvider } from '../../providers/chat-service/chat-service';
import { SearchPage } from '../search/search';
import { ChattingPage } from '../chatting/chatting';
import { GlobalProvider } from "../../providers/global/global";

@Component({
  selector: 'page-chats',
  templateUrl: 'chats.html'
})
export class ChatsPage {
  chatLst;
  idUsuarioPropio;

  constructor(public navCtrl: NavController,public loadingCtrl: LoadingController, private user:GlobalProvider, public modalCtrl: ModalController, public serviceChat: ChatServiceProvider) {
    let loading = this.loadingCtrl.create({content: 'Cargando...'});
    loading.present();
    
    this.idUsuarioPropio = this.user.Id;
    console.log("EWl id propio es: "+this.idUsuarioPropio);
    this.getChats(this.idUsuarioPropio, loading);
  }
  
  chatting(chat){
     let UsIdReceptor = chat.Usuario_Emisor;
    if(this.idUsuarioPropio != chat.Usuario_Receptor){
      UsIdReceptor = chat.Usuario_Receptor;
    }
    this.navCtrl.push(ChattingPage,{UserRecep:UsIdReceptor}); 
    
  }
 
 search() {
    let modal = this.modalCtrl.create(SearchPage);
    modal.present();
  } 

  getChats(idUser,loading) {    
    this.serviceChat.getChatsByUsuario(idUser)        
    .subscribe(
        (data)=> {
          this.chatLst=data;
          loading.dismiss();
        },
        (error)=>{
          console.log(error);
          loading.dismiss();
        }
    )   
  }

}
