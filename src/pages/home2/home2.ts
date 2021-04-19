import { Component } from '@angular/core';
import { NavController, ToastController,ModalController,NavParams,LoadingController, AlertController} from 'ionic-angular';

 import { Edit_offerPage } from '../edit_offer/edit_offer';
 import { Edit_eventPage } from '../edit_event/edit_event';
 import { EventdetailPage } from '../eventdetail/eventdetail';
 import { OfferdetailPage } from '../offerdetail/offerdetail';
 import { SearchPage } from '../search/search';

 import { MapPage } from '../map/map';
 import { CategoriesPage } from '../categories/categories'; 
 import {ListCanjes2Page} from '../list-canjes2/list-canjes2';
import {ListDescuentos2Page} from '../list-descuentos2/list-descuentos2';
import { Filters2Page } from '../../pages/filters2/filters2';
import { TabsPage } from '../tabs/tabs';
 import { AccountPage } from '../account/account';
 import { NewCanjePage } from '../new-canje/new-canje';
 import { CategoryServiceProvider } from '../../providers/category-service/category-service';
 import { ProductServiceProvider } from '../../providers/product-service/product-service';
 import { PedidosServiceProvider } from '../../providers/pedidos-service/pedidos-service';
 import { GlobalPedidoProvider } from '../../providers/global-pedido/global-pedido';
 import { GlobalProvider } from "../../providers/global/global";
 import { OtherProfilePage } from '../other-profile/other-profile';
 import { UsersListPage } from '../users-list/users-list';
 
@Component({
  selector: 'page-home2',
  templateUrl: 'home2.html',
})
export class Home2Page {
  result;
  categoriasLst;
  bannersLst;
  canjesLst;
  descuentosLst;
  usuariosLst;
  near: string = "offers";
  tokenUsuario;
  listBusqueda;
  constructor(public navCtrl: NavController,public alertCtrl: AlertController,public toastController: ToastController, private user:GlobalProvider,public pedido: GlobalPedidoProvider, public pedidoService:PedidosServiceProvider,public loadingCtrl: LoadingController, public modalCtrl: ModalController,public navParams: NavParams, public serviceCat: CategoryServiceProvider, public serviceProd: ProductServiceProvider) {
      let loading = this.loadingCtrl.create({content: 'Cargando...'});
      loading.present();  
      this.tokenUsuario = this.navParams.get('tokenU');      
      this.ObtenerCategorias(loading);
      this.getHome();
      console.log("EL token del usuario es:"+this.tokenUsuario);

      //loading.dismiss();
      
  }
 

  edit_offer(){
    this.navCtrl.push(Edit_offerPage)
}  
NuevoCanje(){
  this.navCtrl.push(NewCanjePage)
}  


edit_event(){
    this.navCtrl.push(Edit_eventPage)
} 
offerdetail(IdProd){
  this.navCtrl.push(OfferdetailPage,{idProd:IdProd});
}
eventdetail(){
    this.navCtrl.push(EventdetailPage)
}
map(){
    this.navCtrl.push(MapPage)
}
perfil(){
  this.navCtrl.push(AccountPage)
}


VerCategorias(){
  this.navCtrl.push(CategoriesPage)
}
VerFiltros(){
  //this.navCtrl.push(FiltersPage)
  this.navCtrl.push(Filters2Page)
}
VerMasCanjes(){
  //this.navCtrl.push(ListCanjes2Page);
  this.navCtrl.push(ListCanjes2Page,{tokenU:this.tokenUsuario});
} 
VerMasDescuentos(){
//this.navCtrl.push(ListDescuentosPage)
this.navCtrl.push(ListDescuentos2Page)
} 
VerMasUsuarios(){
  this.navCtrl.push(UsersListPage)
  } 

category_result(idCategoria){
  //this.navCtrl.push(FiltersPage,{IdCategoria:idCategoria});
  this.navCtrl.push(Filters2Page,{IdCategoria:idCategoria});
  
} 


search() {
let modal = this.modalCtrl.create(SearchPage);
modal.present();
} 

ObtenerCategorias(loading) {    
this.serviceCat.GetCategoriasHome()        
.subscribe(
    (data)=> {
      this.categoriasLst=data;
      console.log("La categorìa 1: "+ this.categoriasLst[0].Nombre);
      loading.dismiss();
    },
    (error)=>{
      console.log(error);
      loading.dismiss();
    }
)   
}

  getHome() {    
    this.serviceProd.getHome()        
    .subscribe(
        (data:any)=> {
          this.result = data;   // get data in result variable
          this.bannersLst = data.Banners;
          this.canjesLst = data.Canjes;
          this.descuentosLst = data.Descuentos;
          this.usuariosLst = data.Usuarios;
          
        },
        (error)=>{
          console.log(error);
          
        }
    )  
  }
  getItems(busqueda){    
    let val = busqueda.target.value;
    /*
    if (q.trim() == '') {
        return;
    }
    */
   this.BuscarCanjes(val);
    
  }
  BuscarCanjes(nombreCanje) {    
    this.serviceProd.getProductByName(nombreCanje)        
    .subscribe(
        (data)=> {
          this.listBusqueda=data;
          
        },
        (error)=>{console.log(error);}
    )        
    
  }
  ViewProfile(idUsuario){
    this.navCtrl.push(OtherProfilePage,{IdUsuario:idUsuario});
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
                       this.presentToast('Se envió la solicitud.');                
                       this.navCtrl.setRoot(TabsPage,{tokenU:this.tokenUsuario});
                //     },
                //     (error)=>{console.log("ERROR al enviar la push notification: " + error);}
                // )                 
              },
              (error)=>{
                console.log("ERROR en Save to DB: " + error);
                this.presentToast(error.message);                
                loading.dismiss();
              }
          ) 
    
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

  
  async presentToast(texto) {
    const toast = await this.toastController.create({
      message: texto,
      duration: 3000
    });
    toast.present();
  }

}
