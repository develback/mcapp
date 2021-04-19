import { Component } from '@angular/core';
import { NavController, ModalController} from 'ionic-angular';

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
  selector: 'page-list-descuentos',
  templateUrl: 'list-descuentos.html',
})
export class ListDescuentosPage {
  listDescuentos:any;
  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public prodServ: ProductServiceProvider) {
    this.ObtenerDescuentos();
  }

  ObtenerDescuentos() {    
    this.prodServ.getProductByIdTipo("2")        
    .subscribe(
        (data)=> {
          this.listDescuentos=data;
          console.log("El descuento 1: "+ this.listDescuentos[0].Nombre);
        },
        (error)=>{console.log(error);}
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
