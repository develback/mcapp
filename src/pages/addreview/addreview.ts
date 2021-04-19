import { Component,ViewChild  } from '@angular/core';
import { NavController ,Events,NavParams,LoadingController,ToastController } from 'ionic-angular';
import { GlobalProvider } from "../../providers/global/global";
import { CalificacionServiceProvider } from '../../providers/calificacion-service/calificacion-service';
import { PedidosServiceProvider } from '../../providers/pedidos-service/pedidos-service';
import { TabsPage } from '../tabs/tabs';
@Component({
  selector: 'page-addreview',
  templateUrl: 'addreview.html'
})
export class AddreviewPage {
  @ViewChild('rating') rating : any;

  usCalificadoNombre;
  usCalificadoImg;
  usCalificadoId;
  usIdPedido;
  Puntaje;
  Comentarios;
  dataApiPedido;
  constructor(public navCtrl: NavController, public servicePedido:PedidosServiceProvider,public loadingCtrl: LoadingController,public toastController: ToastController,public navParams: NavParams, public user:GlobalProvider,private events : Events,public calificacion: CalificacionServiceProvider) {
    
    this.usCalificadoId = this.navParams.get('idUs');    
    this.usCalificadoNombre = this.navParams.get('nombreUs'); 
    this.usCalificadoImg = this.navParams.get('imgUs'); 
    this.usIdPedido = this.navParams.get('idPedido');  
    console.log("El idpedido es: "+this.usIdPedido);
    this.Puntaje=2;
  }

  
  tabs(){
        this.navCtrl.setRoot(TabsPage)
  }
  logRatingChange(rating){
    this.Puntaje=rating;
  }
  SendCalificacion(){
    let loading = this.loadingCtrl.create({content: 'Cargando...'});
    loading.present();  

    this.calificacion.postCalificaciones(this.user.Id,this.usCalificadoId,this.Puntaje,this.Comentarios)        
      .subscribe(
          (data)=> {
            ///////////////Se obtiene el pedido y se lo cambia de estado ////////////
            this.servicePedido.getPedidosById(this.usIdPedido)        
            .subscribe(
                (data)=> {
                  if(data==null){
                    this.presentToast('Error al obtener el Canje');
                    loading.dismiss();
                  }
                  else{
                    let data2 = JSON.stringify(data);
                    this.dataApiPedido = JSON.parse(data2);
                    this.dataApiPedido.IdPedido_Estado="5";    
                    
                    this.servicePedido.putPedido(this.dataApiPedido)        
                    .subscribe(
                        (data)=> {
                          this.presentToast('Se calificó correctamente');
                          this.navCtrl.pop();
                          loading.dismiss();
                        },
                        (error)=>{
                          loading.dismiss();
                        }
                    ) }                  
                },
                (error)=>{
                  console.log(error);
                  loading.dismiss();
                }
            ) 

            /////////////////////////////

           
          },
          (error)=>{
            console.log("ERROR en Save to DB: " + error);
            loading.dismiss();
          }
      ) 
  }

  async presentToast(texto) {
    const toast = await this.toastController.create({
      message: texto,
      duration: 3000
    });
    toast.present();
  }

}
