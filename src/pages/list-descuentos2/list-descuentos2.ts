import { Component } from '@angular/core';
import { NavController, ModalController,LoadingController,NavParams} from 'ionic-angular';

 import { Edit_offerPage } from '../edit_offer/edit_offer';
 import { Edit_eventPage } from '../edit_event/edit_event';
 import { EventdetailPage } from '../eventdetail/eventdetail';
 import { OfferdetailPage } from '../offerdetail/offerdetail';
 
 import { SearchPage } from '../search/search';
 import { ChatsPage } from '../chats/chats';
 import { MapPage } from '../map/map';
 import { AccountPage } from '../account/account';
 import { ProductServiceProvider } from '../../providers/product-service/product-service';

@Component({
  selector: 'page-list-descuentos2',
  templateUrl: 'list-descuentos2.html',
})
export class ListDescuentos2Page {
  listDescuentos:any;
  constructor(public navCtrl: NavController,public navParams: NavParams,public loadingCtrl: LoadingController, public modalCtrl: ModalController, public prodServ: ProductServiceProvider) {
    let loading = this.loadingCtrl.create({content: 'Cargando...'});
    loading.present();
    let IdCategoria = this.navParams.get('IdCategoria');  
    if(IdCategoria!=null){
      this.ObtenerDescuentosByCategoria(loading,IdCategoria);
    }
    else{
      this.ObtenerDescuentos(loading);
    }
    

    
  }

  ObtenerDescuentos(loading) {    
    this.prodServ.getProductByIdTipo("2")        
    .subscribe(
        (data)=> {
          this.listDescuentos=data;
          console.log("El descuento 1: "+ this.listDescuentos[0].Nombre);
          loading.dismiss();
        },
        (error)=>{
          console.log(error);
          loading.dismiss();
        }
    )   
  }
  ObtenerDescuentosByCategoria(loading,idCategoria) {    
    this.prodServ.getDescuentosByIdCategoria(idCategoria)        
    .subscribe(
        (data)=> {
          this.listDescuentos=data;
          //console.log("El descuento 1: "+ this.listDescuentos[0].Nombre);
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
  eventdetail(){
      this.navCtrl.push(EventdetailPage)
  }
  map(){
      this.navCtrl.push(MapPage)
  }
  map22(){
    this.navCtrl.push(ChatsPage)
  }
  perfil(){
    this.navCtrl.push(AccountPage)
  }

  search() {
    let modal = this.modalCtrl.create(SearchPage);
    modal.present();
  } 

}
