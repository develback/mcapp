import { Component,ViewChild  } from '@angular/core';
import { NavController,NavParams, Slides,ToastController,LoadingController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { PedidosServiceProvider } from '../../providers/pedidos-service/pedidos-service';
import { GlobalPedidoProvider } from '../../providers/global-pedido/global-pedido';
import { ChattingPage } from '../chatting/chatting';
import { OtherProfilePage } from '../other-profile/other-profile';

@Component({
  selector: 'page-match',
  templateUrl: 'match.html',
})
export class MatchPage {
  @ViewChild(Slides) slides: Slides;

  gender: string = "female";
  canjePedido;
  dataApi;

  constructor(public navCtrl: NavController,public loadingCtrl: LoadingController,public navParams: NavParams,public toastController: ToastController,public pedido: GlobalPedidoProvider, public pedidoService:PedidosServiceProvider) {
    this.canjePedido = this.navParams.get('canjePedido');    
    if(this.canjePedido.TipoMatch=="USUARIO"){
      this.canjePedido.ImgProductoInteres = this.canjePedido.ImgUsuarioSolicita;
      this.canjePedido.NombreProductoInteres = this.canjePedido.Nombre_UsuarioSolicita;
      this.canjePedido.Comentarios = "Nueva solicitud de Usuario";
    }
  }

   tabs(){
        this.navCtrl.setRoot(TabsPage)
  }
  goToSlide() {
    this.slides.slideTo(2, 500);
  }
  AceptaMatch(){
    let loading = this.loadingCtrl.create({content: 'Cargando...'});
    loading.present();  
    console.log("EL pedido aceptado es:"+this.canjePedido.Id);

    this.pedidoService.getPedidosById(this.canjePedido.Id)        
    .subscribe(
        (data)=> {
          //this.presentToast('OK');
          if(data==null){
            this.presentToast('Error al obtener el Canje');
            loading.dismiss();
          }
          else{
            console.log(data);
            //this.dataApi = JSON.stringify(data);
            let data2 = JSON.stringify(data);
            this.dataApi = JSON.parse(data2);
                        
            this.pedido.IdProductoInteres=this.dataApi.IdProductoInteres;
            this.pedido.IdUsuarioSolicita=this.dataApi.IdUsuarioSolicita;            
            console.log("La Categoria es: "+this.dataApi.CategoriaMatch);
            console.log("La pedido.FechaPedido es: "+this.pedido.FechaPedido);

            this.pedido.Comentarios=this.dataApi.Comentarios;
            this.pedido.Importe=this.dataApi.Importe;
            this.pedido.Id=this.dataApi.Id;
            this.pedido.IdPedido_Estado="4";    
            this.pedido.IdUsuarioRecibe=this.dataApi.IdUsuarioInteres;
            this.pedido.TipoMatch=this.dataApi.TipoMatch;

            this.pedidoService.putPedido(this.pedido)        
            .subscribe(
                (data)=> {
                  this.presentToast('La solicitud se aceptó');
                  //this.navCtrl.setRoot(TabsPage);
                  this.navCtrl.push(ChattingPage,{UserRecep:this.dataApi.IdUsuarioSolicita});
                  loading.dismiss();
                },
                (error)=>{
                  console.log("ERROR en Save to DB: " + error);
                  loading.dismiss();
                }
            ) 
            ////
            
          }
          
        },
        (error)=>{
          console.log(error);
          loading.dismiss();
        }
    )  


    //////////////

    



    
  }
  RechazaMatch(){
    let loading = this.loadingCtrl.create({content: 'Cargando...'});
    loading.present();  
    this.pedidoService.getPedidosById(this.canjePedido.Id)        
    .subscribe(
        (data)=> {
          //this.presentToast('OK');
          if(data==null){
            this.presentToast('Error al obtener el Canje');
            loading.dismiss();
          }
          else{
            console.log(data);
            //this.dataApi = JSON.stringify(data);
            let data2 = JSON.stringify(data);
            this.dataApi = JSON.parse(data2);
                        
            this.pedido.IdProductoInteres=this.dataApi.IdProductoInteres;
            this.pedido.IdUsuarioSolicita=this.dataApi.IdUsuarioSolicita;
            this.pedido.Comentarios=this.dataApi.Comentarios;
            this.pedido.Importe=this.dataApi.Importe;
            
            this.pedido.Id=this.dataApi.Id;
            this.pedido.IdPedido_Estado="2";    
            this.pedidoService.putPedido(this.pedido)        
            .subscribe(
                (data)=> {
                  this.presentToast('La solicitud fue rechazada');
                  this.navCtrl.setRoot(TabsPage);
                  loading.dismiss();
                },
                (error)=>{
                  console.log("ERROR en Save to DB: " + error);
                  loading.dismiss();
              }
            ) 
          }
          
        },
        (error)=>{
          console.log(error);
          loading.dismiss();
        }
    )  

    
    
  }
  ViewProfile(idUsuario){
    console.log("Voy a ViewProfile");
    this.navCtrl.push(OtherProfilePage,{IdUsuario:idUsuario});
  }

  async presentToast(texto) {
    const toast = await this.toastController.create({
      message: texto,
      duration: 3000
    });
    toast.present();
  }
  
}
