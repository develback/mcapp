import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';
@Component({
  selector: 'page-edit_offer',
  templateUrl: 'edit_offer.html'
})
export class Edit_offerPage {
 gender: string = "female";
  constructor(public navCtrl: NavController) {

  }

tabs(){
        this.navCtrl.setRoot(TabsPage)
  }
}
