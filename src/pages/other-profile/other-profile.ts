import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,ToastController } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { MyCategoriesPage } from '../my-categories/my-categories';
import {ListCanjes2Page} from '../list-canjes2/list-canjes2';
import { GlobalPedidoProvider } from '../../providers/global-pedido/global-pedido';
import { GlobalProvider } from "../../providers/global/global";
import { PedidosServiceProvider } from '../../providers/pedidos-service/pedidos-service';

@IonicPage()
@Component({
  selector: 'page-other-profile',
  templateUrl: 'other-profile.html',
})
export class OtherProfilePage {
  base64Image;
  UsNombre;
  dataApi;
  UsLocalidad;
  IdUsuario;
  RubroUsuario;

  constructor(public navCtrl: NavController,public toastController: ToastController, public pedidoService:PedidosServiceProvider, private user:GlobalProvider,public pedido: GlobalPedidoProvider,public loadingCtrl: LoadingController, public userService:UserServiceProvider, public navParams: NavParams) {
    this.IdUsuario = this.navParams.get('IdUsuario');  
    //Get UsuarioPorId
    this.getUserById(this.IdUsuario);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OtherProfilePage');
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
            this.UsNombre = this.dataApi.Nombre;
            this.base64Image = this.dataApi.Imagen;
            this.UsLocalidad = this.dataApi.Localidad;
            this.RubroUsuario = this.dataApi.RubroUsuario;
          }
          
        },
        (error)=>{console.log(error);}
    )        
  }
  GotoCategoryList(){
    this.navCtrl.push(MyCategoriesPage,{IdUsuario:this.IdUsuario});
  }
  GotoCatalogo(){
    this.navCtrl.push(ListCanjes2Page,{IdUsuario:this.IdUsuario});
  }
  presentPrompt() {
    
    this.SendNotificationUser(this.IdUsuario, "");
  }
  SendNotificationUser(IdUsuario, Comentario){
    let loading = this.loadingCtrl.create({content: 'Cargando...'});
    loading.present();  

    this.pedido.Id="0";
    this.pedido.IdProductoInteres="";
    this.pedido.IdPedido_Estado="3";
    var myDate: string = new Date().toDateString();
    this.pedido.FechaPedido=myDate;
    this.pedido.IdUsuarioSolicita=this.user.Id;
    this.pedido.IdUsuarioRecibe=this.IdUsuario;
    this.pedido.Comentarios=Comentario;
    this.pedido.TipoMatch="USUARIO";

    this.pedidoService.postPedido(this.pedido)        
          .subscribe(
              (data)=> {
                
                // this.pushNotif.SendNotificationPush("Solicitud recibida", "Nueva solicitud de Canje")        
                // .subscribe(
                //     (data)=> {
                  loading.dismiss();
                  this.presentToast();                
                  this.navCtrl.pop();
                //     },
                //     (error)=>{console.log("ERROR al enviar la push notification: " + error);}
                // )                 
              },
              (error)=>{
                console.log("ERROR en Save to DB: " + error);
                loading.dismiss();
              }
          ) 
    
  } 
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Se envió la solicitud.',
      duration: 3000
    });
    toast.present();
  }

}
