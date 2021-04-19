import { Component } from '@angular/core';
import { NavController,LoadingController } from 'ionic-angular';
import { MatchPage } from '../match/match';
import { CanjesPage } from '../canjes/canjes';
import { NotificationServiceProvider } from '../../providers/notification-service/notification-service';
import { CalificacionServiceProvider } from '../../providers/calificacion-service/calificacion-service';
import { PedidosServiceProvider } from '../../providers/pedidos-service/pedidos-service';

import { GlobalProvider } from "../../providers/global/global";
import { AddreviewPage } from '../addreview/addreview';

@Component({
  selector: 'page-review',
  templateUrl: 'review.html'
})
export class ReviewPage {
  notificacionesLst;
  cantNotificaciones;
  miPuntaje;
  starArray;
  constructor(public navCtrl: NavController,public pedidoService:PedidosServiceProvider,public calificacionServ:CalificacionServiceProvider, public user:GlobalProvider, public notificacionService:NotificationServiceProvider,public loadingCtrl: LoadingController) {
    this.cantNotificaciones =0;
    this.miPuntaje=0;
    let loading = this.loadingCtrl.create({content: 'Cargando...'});
    loading.present();
    this.getMiPuntuacion();
    this.getNotificaciones(loading);  
  }
  VerCalificacion(canje){
    this.navCtrl.push(AddreviewPage,{idUs:canje.IdUsuario, 
                                    nombreUs:canje.NombreUsuario, 
                                    imgUs:canje.ImgUsuario,
                                    idPedido:canje.IdPedido });
  }
  ViewMatch(idPedido){
    //Buscar el pedido por Id,
    this.pedidoService.getPedidosById(idPedido)        
    .subscribe(
        (data)=> {
          //this.presentToast('OK');
          if(data!=null){            
            console.log(data);            
            this.navCtrl.push(MatchPage,{canjePedido:data});
          }
          
        },
        (error)=>{
          console.log(error);
        }
    )  

    
  }
  getMiPuntuacion() {    
    let userID =this.user.Id;
    this.calificacionServ.getMiPromedioCalificado(userID)        
    .subscribe(
        (data:any)=> {
          this.miPuntaje = data;          
        },
        (error)=>{
          console.log(error);          
        }
    )  
  }
  getNotificaciones(loading) {    
    let userID =this.user.Id;
    this.notificacionService.GetNotificacionesByUsuario(userID)        
    .subscribe(
        (data:any)=> {
          this.notificacionesLst = data;   // get data in result variable
          this.cantNotificaciones = this.notificacionesLst.length;
          
          loading.dismiss();
        },
        (error)=>{
          console.log(error);
          loading.dismiss();
        }
    )  
  }
 
}
