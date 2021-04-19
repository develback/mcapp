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
 
 
@Component({
  selector: 'page-categoryresult',
  templateUrl: 'categoryresult.html',
})
export class CategoryresultPage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
  }

  edit_offer(){
    this.navCtrl.push(Edit_offerPage)
  }  
  edit_event(){
      this.navCtrl.push(Edit_eventPage)
  } 
  offerdetail(){
      this.navCtrl.push(OfferdetailPage)
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
