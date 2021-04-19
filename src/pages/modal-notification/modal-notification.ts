import { Component } from '@angular/core';
import { IonicPage,ToastController, NavController, NavParams, ViewController  } from 'ionic-angular';
import { ProductServiceProvider } from '../../providers/product-service/product-service';
import { GlobalProvider } from "../../providers/global/global";
import { PedidosServiceProvider } from '../../providers/pedidos-service/pedidos-service';
import { GlobalPedidoProvider } from '../../providers/global-pedido/global-pedido';
import { NotificationServiceProvider } from '../../providers/notification-service/notification-service';
import { CanjesPage } from '../canjes/canjes';
import { TabsPage } from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-modal-notification',
  templateUrl: 'modal-notification.html',
})
export class ModalNotificationPage {
  CanjesLst;
  IdProducto;
  chkProduct;

  constructor(private navParams: NavParams,public toastController: ToastController,public navCtrl: NavController,public pedido: GlobalPedidoProvider, public pedidoService:PedidosServiceProvider, private view: ViewController, public serviceProd: ProductServiceProvider, private user:GlobalProvider, public pushNotif:NotificationServiceProvider) {
    this.IdProducto = this.navParams.get('idProd');        
    this.getOfrecidos(this.user.Id);
  }
  SetProductChecked(ProdChk){
    console.log("El art checked es:"+ProdChk);
    this.pedido.Importe = parseFloat(ProdChk.Importe);
    
  }
  

  SendNotification(vComentarios, vImporte){
    this.pedido.Id="0";
    this.pedido.IdProductoInteres=this.IdProducto; //Poner id que devuelve el data
    this.pedido.IdPedido_Estado="3";
    var myDate: string = new Date().toDateString();
    this.pedido.FechaPedido=myDate;
/*
    this.pedido.ImagenMatch="";
    this.pedido.ProductoNombreMatch="";
    this.pedido.ProductoDescripcionMatch="";
    */
    

    //vImporte = vImporte.replace("$","");

    //this.pedido.Comentarios=vComentarios;
    //this.pedido.Importe=vImporte;
    this.pedido.IdUsuarioSolicita=this.user.Id;

    this.pedidoService.postPedido(this.pedido)        
          .subscribe(
              (data)=> {
                
                this.pushNotif.SendNotificationPush("Solicitud recibida", "Nueva solicitud de Canje")        
                .subscribe(
                    (data)=> {
                      
                      this.presentToast();                
                      this.navCtrl.setRoot(TabsPage);
                    },
                    (error)=>{console.log("ERROR al enviar la push notification: " + error);}
                )                 
              },
              (error)=>{console.log("ERROR en Save to DB: " + error);}
          ) 
    
  } 
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Se envió la solicitud.',
      duration: 3000
    });
    toast.present();
  }

  ionViewWillLoad() {
    const data = this.navParams.get('data');
    console.log(data);
  }

  closeModal() {
    const data = {
      name: 'John Doe',
      occupation: 'Milkman'
    };
    this.view.dismiss(data);
  }

  getOfrecidos(idUsuario) {    
    this.serviceProd.getProductByUser(idUsuario)        
    .subscribe(
        (data:any)=> {
          this.CanjesLst = data;
        },
        (error)=>{console.log(error);}
    )  
  }

}
