import { Component } from '@angular/core';
import { NavController, ModalController,NavParams,LoadingController,ToastController} from 'ionic-angular';
 import { StorePage } from '../store/store';
 import { EventdetailPage } from '../eventdetail/eventdetail';
 import { OfferdetailPage } from '../offerdetail/offerdetail';
 import { SearchPage } from '../search/search';
 import { MapPage } from '../map/map';
 import { Edit_eventPage } from '../edit_event/edit_event';
 import { NewCanjePage } from '../new-canje/new-canje';
 import { MatchPage } from '../match/match';
 import { ProductServiceProvider } from '../../providers/product-service/product-service';
 import { PedidosServiceProvider } from '../../providers/pedidos-service/pedidos-service';
 import { UserServiceProvider } from '../../providers/user-service/user-service';
 import { GlobalProvider } from "../../providers/global/global";
 import { ChattingPage } from '../chatting/chatting';
 import { AddreviewPage } from '../addreview/addreview';
 import { OtherProfilePage } from '../other-profile/other-profile';

@Component({
  selector: 'page-canjes',
  templateUrl: 'canjes.html',
})
export class CanjesPage {
  canjesLst:any;
  recibidosLst:any;
  canjeadosLst:any;
  near: string = "Ofrecidos";
  tokenUsuario;
  CanjesOfrecidos:boolean;
  CanjesRecibidos:boolean;

  constructor(public navCtrl: NavController,public toastController: ToastController,public loadingCtrl: LoadingController, public modalCtrl: ModalController, public userService: UserServiceProvider,public navParams: NavParams, public serviceProd: ProductServiceProvider, public servicePedido:PedidosServiceProvider, private user:GlobalProvider) {
    let loading = this.loadingCtrl.create({content: 'Cargando...'});
    loading.present();
    this.tokenUsuario = this.navParams.get('tokenU'); 
    this.CanjesOfrecidos=false; 
    this.CanjesRecibidos=false; 
    console.log("El mail por ejemplo es:"+this.user.Mail)
    console.log("El Id por ejemplo es:"+this.user.Id)
    this.getOfrecidos(this.user.Id);
    this.getRecibidos(this.user.Id);
    this.getCanjeados(this.user.Id, loading);
  }
  NuevoCanje(){
    this.navCtrl.push(NewCanjePage)
  }  
 
 store(){
        this.navCtrl.push(StorePage)
  } 
  offerdetail(IdProd){
    console.log("El IdProductoMatch es:"+IdProd);
    this.navCtrl.push(OfferdetailPage,{idProd:IdProd, estado:'canjeado'});
  }

  VerCalificacion(canje){
    this.navCtrl.push(AddreviewPage,{idUs:canje.IdUsuarioSolicita, 
                                    nombreUs:canje.Nombre_UsuarioSolicita, 
                                    imgUs:canje.ImgUsuarioSolicita,
                                    idPedido: canje.Id });
  }
  eventdetail(){
        this.navCtrl.push(EventdetailPage)
  }
  map(){
        this.navCtrl.push(MapPage)
  }
 search() {
    let modal = this.modalCtrl.create(SearchPage);
    modal.present();
  } 
  edit_event(Producto){
    this.navCtrl.push(Edit_eventPage,{productoEdit:Producto})
  }
  ViewMatch(pedido){
    this.navCtrl.push(MatchPage,{canjePedido:pedido})
  }
  ViewProfile(idUsuario){
    this.navCtrl.push(OtherProfilePage,{IdUsuario:idUsuario});
  }
  ViewChatting(IdUsuarioSolicita){
    this.navCtrl.push(ChattingPage,{UserRecep:IdUsuarioSolicita});
  }
  
  getOfrecidos(idUsuario) {    
    this.serviceProd.getProductByUser(idUsuario)        
    .subscribe(
        (data:any)=> {
          this.canjesLst = data;
          if(data.length >0){
            this.CanjesOfrecidos=true;
          }
        },
        (error)=>{console.log(error);}
    )  
  }
  getRecibidos(idUsuario) {  
    //Obtener el idUsuario  
    this.servicePedido.getPedidosRecibidosByUser(idUsuario)        
    .subscribe(
        (data:any)=> {
          this.recibidosLst = data;
          if(data.length >0){
            this.CanjesRecibidos=true;
          }
        },
        (error)=>{console.log(error);}
    )  
  }
  getCanjeados(idUsuario,loading) {  
    this.servicePedido.getPedidosConfirmadosByUser(idUsuario)        
    .subscribe(
        (data:any)=> {
          this.canjeadosLst = data;
          
          loading.dismiss();
        },
        (error)=>{
          console.log(error);
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
