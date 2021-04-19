import { Component,ViewChild } from '@angular/core';
import { NavController, NavParams,Content,LoadingController } from 'ionic-angular';
import { GlobalProvider } from "../../providers/global/global";
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { ChatServiceProvider } from '../../providers/chat-service/chat-service';
import { ChatDetalleServiceProvider } from '../../providers/chat-detalle-service/chat-detalle-service';

@Component({
  selector: 'page-chatting',
  templateUrl: 'chatting.html'
})


export class ChattingPage {  
  

  UsIdReceptor;
  UsNombreReceptor;
  UsImgReceptor;
  UsEmisor;
  dataApi;
  chatDetalleApi;
  idChat;
  MensajeSend;
  

  constructor(public navCtrl: NavController,public loadingCtrl: LoadingController, public navParams:NavParams,public chatDetServ:ChatDetalleServiceProvider,public chatServ:ChatServiceProvider, private user:GlobalProvider, public userService:UserServiceProvider) {
    let loading = this.loadingCtrl.create({content: 'Cargando...'});
    loading.present();  

    this.UsEmisor = this.user.Id;
    this.UsIdReceptor = this.navParams.get('UserRecep');  
    
    console.log("El usuario emisor es:"+this.UsEmisor);
    console.log("El usuario receptor es:"+this.UsIdReceptor);

    this.getUserById(this.UsIdReceptor);
    this.getChatsByUsuario(this.UsEmisor, this.UsIdReceptor, loading);
    
  }
/*
  ngOnInit() {
    this.getChatsByUsuario(this.UsEmisor, this.UsIdReceptor);
    this.scrollToBottom();
  }
  */

 doRefresh(refresher) {
  let loading = this.loadingCtrl.create({content: 'Cargando...'});
  loading.present();  
  console.log('Begin async operation');
  this.getChatsByUsuario(this.UsEmisor, this.UsIdReceptor,loading);
  setTimeout(() => {
    console.log('Async operation has ended');
    refresher.complete();
  }, 2000);
}

  


  getUserById(idUsuario) {    
    this.userService.getUserById(idUsuario)        
    .subscribe(
        (data)=> {          
          if(data==null){
            console.log("No se pudo encontrar el usuario receptor")
          }
          else{
            
            //this.dataApi = JSON.stringify(data);
            let data2 = JSON.stringify(data);
            this.dataApi = JSON.parse(data2);            
            this.UsNombreReceptor = this.dataApi.Nombre;
            this.UsImgReceptor = this.dataApi.Imagen;

          }
          
        },
        (error)=>{console.log(error);}
    )        
  }

  getChatsByUsuario(idEmisor, IdReceptor, loading) {    
    this.chatDetServ.getChatsDetailsByUsuario(idEmisor,IdReceptor)        
    .subscribe(
        (data)=> {          
          if(data==null){
            console.log("No se pudo encontrar el usuario receptor")
          }
          else{
            this.chatDetalleApi=data;
            if(data[0] !=null){
              this.idChat = data[0].IdChat;
            }
            else{
              this.idChat = 0;
            }
            
            /*
            let data2 = JSON.stringify(data);
            this.dataApi = JSON.parse(data2);            
            this.UsNombreReceptor = this.dataApi.Nombre;
            this.UsImgReceptor = this.dataApi.Imagen;
            */
          }
          loading.dismiss();
        },
        (error)=>{
          console.log(error);
          loading.dismiss();
        }
    )        
  }
  
  SendChat() {
    let loading = this.loadingCtrl.create({content: 'Enviando...'});
    loading.present(); 
    var myDate: string = new Date().toDateString();
    if (this.idChat == 0){
      let postChat = {
        "Id": "0",
        "Usuario_Emisor": this.UsEmisor,
        "Usuario_Receptor": this.UsIdReceptor,
        "Fecha_Ultimo_Mensaje": myDate,
        "Ultimo_Mensaje": this.MensajeSend
      };
      this.chatServ.postChat(postChat)        
      .subscribe(
          (data)=> {
            let data2 = JSON.stringify(data);
            this.dataApi = JSON.parse(data2);
            this.idChat= this.dataApi.Id; 

            this.PostChatDetail(loading);
          },
          (error)=>{
            console.log(error);
            loading.dismiss();
          }
      ); 
    }
    else{
      let putChat = {
        "Id": this.idChat,
        "Usuario_Emisor": this.UsEmisor,
        "Usuario_Receptor": this.UsIdReceptor,
        "Fecha_Ultimo_Mensaje": myDate,
        "Ultimo_Mensaje": this.MensajeSend
      };
      this.chatServ.putChat(putChat)        
      .subscribe(
          (data)=> {
            this.PostChatDetail(loading);
          },
          (error)=>{
            console.log(error);
            loading.dismiss();
          }
      ); 
    }

    
            
  }
  PostChatDetail(loading){
    var myDate: string = new Date().toDateString();
    let postChatDetail = {
      "Id": "0",
      "Usuario_Emisor": this.UsEmisor,
      "Usuario_Receptor": this.UsIdReceptor,
      "Fecha_Mensaje": myDate,
      "Mensaje": this.MensajeSend,
      "IdChat": this.idChat
    };

    this.chatDetServ.postChatDetails(postChatDetail)        
    .subscribe(
        (data)=> {
          console.log("Mensaje enviado");          
          this.getChatsByUsuario(this.UsEmisor, this.UsIdReceptor,loading);
          this.MensajeSend="";
        },
        (error)=>{
          console.log(error);
          loading.dismiss();
        }
    ) 
  }

}
