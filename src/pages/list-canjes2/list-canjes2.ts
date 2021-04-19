import { Component } from '@angular/core';
import { NavController, ModalController,ToastController,NavParams,AlertController,LoadingController} from 'ionic-angular';

 import { Edit_offerPage } from '../edit_offer/edit_offer';
 import { Edit_eventPage } from '../edit_event/edit_event';
 import { OfferdetailPage } from '../offerdetail/offerdetail';
 import { SearchPage } from '../search/search'; 
 import { AccountPage } from '../account/account';
 import { TabsPage } from '../tabs/tabs';
 import { ProductServiceProvider } from '../../providers/product-service/product-service';
 import { GlobalPedidoProvider } from '../../providers/global-pedido/global-pedido';
 import { PedidosServiceProvider } from '../../providers/pedidos-service/pedidos-service';
 import { GlobalProvider } from "../../providers/global/global";

@Component({
  selector: 'page-list-canjes2',
  templateUrl: 'list-canjes2.html',
})
export class ListCanjes2Page {

  listCanjes:any;
  tokenUsuario;
  CanjesOfrecidos:boolean;

  constructor(public navCtrl: NavController,public toastController: ToastController, private user:GlobalProvider, public pedidoService:PedidosServiceProvider,public loadingCtrl: LoadingController,public alertCtrl: AlertController,public pedido: GlobalPedidoProvider, public modalCtrl: ModalController,public navParams: NavParams, public prodServ: ProductServiceProvider) {
    let loading = this.loadingCtrl.create({content: 'Cargando...'});
    loading.present();  
    this.CanjesOfrecidos=true;
    let IdCategoria = this.navParams.get('IdCategoria');  
    let Sexo = this.navParams.get('Sexo');
    this.tokenUsuario = this.navParams.get('tokenU');   
    let IdUsuario = this.navParams.get('IdUsuario');  
    
    if(IdCategoria!=null){
      this.ObtenerCanjesPorCategoria(IdCategoria, loading);
    }
    else if(Sexo!=null){
      this.ObtenerCanjesPorSexo(Sexo, loading);
    }
    else if(IdUsuario!=null){
      this.ObtenerCanjesPorUsuario(IdUsuario, loading);
    }
    else{
      this.ObtenerCanjes(loading);
    }
    
    
  }

  ObtenerCanjes(loading) {    
    this.prodServ.getProductByIdTipo("1")        
    .subscribe(
        (data)=> {
          this.listCanjes=data;
          console.log("El canje 1: "+ this.listCanjes[0].Nombre);
          loading.dismiss();
        },
        (error)=>{
          console.log(error);
          loading.dismiss();
        }
    )   
  }
  ObtenerCanjesPorCategoria(idCategoria, loading) {    
    this.prodServ.getCanjesByCategoria(idCategoria)        
    .subscribe(
        (data)=> {
          this.listCanjes=data;
          console.log("El canje 1: "+ this.listCanjes[0].Nombre);
          loading.dismiss();
        },
        (error)=>{
          console.log(error);
          loading.dismiss();
        }
    )   
  }
  
  ObtenerCanjesPorUsuario(idUsuario, loading) {    
    this.prodServ.getCanjesByUsuario(idUsuario)        
    .subscribe(
        (data)=> {
          this.listCanjes=data;
          if(this.listCanjes.length==0){
            this.CanjesOfrecidos=false
          }
          
          loading.dismiss();
        },
        (error)=>{
          console.log(error);
          loading.dismiss();
        }
    )   
  }
  ObtenerCanjesPorSexo(sexo,loading) {    
    this.prodServ.getCanjesBySexo(sexo)        
    .subscribe(
        (data)=> {
          this.listCanjes=data;
          console.log("El canje 1: "+ this.listCanjes[0].Nombre);
          loading.dismiss();
        },
        (error)=>{
          console.log(error);
          loading.dismiss();
        }
    )   
  }

  edit_offer(){
    this.navCtrl.push(Edit_offerPage)
  }  
  edit_event(){
      this.navCtrl.push(Edit_eventPage)
  } 
  offerdetail(IdProd){
    console.log("El producto id es: "+IdProd);
    this.navCtrl.push(OfferdetailPage,{idProd:IdProd});
  }
  
  
  perfil(){
    this.navCtrl.push(AccountPage)
  }

  search() {
    let modal = this.modalCtrl.create(SearchPage);
    modal.present();
  } 
  presentPrompt(idProd) {
    /* let alert = this.alertCtrl.create({
      title: 'Agregar Comentario',
      inputs: [
        {
          name: 'comentario',
          placeholder: 'Ingresar comentario'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Enviar',
          handler: data => {
            console.log("Usuario es: "+data.comentario);
            this.SendNotification(idProd, data.comentario);
          }
        }
      ]
    });
    alert.present(); */
    this.SendNotification(idProd, "");
  }
  SendNotification(IdProd, Comentario){
    let loading = this.loadingCtrl.create({content: 'Cargando...'});
    loading.present();  

    this.pedido.Id="0";
    this.pedido.IdProductoInteres=IdProd;
    this.pedido.IdPedido_Estado="3";
    var myDate: string = new Date().toDateString();
    this.pedido.FechaPedido=myDate;
    this.pedido.IdUsuarioSolicita=this.user.Id;
    this.pedido.Comentarios=Comentario;
    this.pedido.TipoMatch="CANJE";

    this.pedidoService.postPedido(this.pedido)        
          .subscribe(
              (data)=> {
                
                // this.pushNotif.SendNotificationPush("Solicitud recibida", "Nueva solicitud de Canje")        
                // .subscribe(
                //     (data)=> {
                  loading.dismiss();
                       this.presentToast();                
                       this.navCtrl.setRoot(TabsPage,{tokenU:this.tokenUsuario});
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
