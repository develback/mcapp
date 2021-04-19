import { Component } from '@angular/core';
import { NavController,App  } from 'ionic-angular';
import { GlobalProvider } from "../../providers/global/global";
import { ProfilePage } from '../profile/profile';
import { ReviewPage } from '../review/review';
import { ConditionPage } from '../condition/condition';
import { HelpPage } from '../help/help';
import { SigninPage } from '../signin/signin';
import { CanjesPage } from '../canjes/canjes';
import { MyCategoriesPage } from '../my-categories/my-categories';
import { NotificationServiceProvider } from '../../providers/notification-service/notification-service';

@Component({
  selector: 'page-account',
  templateUrl: 'account.html'
})
export class AccountPage {
  base64Image;
  cantNotificaciones;

  constructor(public navCtrl: NavController, public notificacionService:NotificationServiceProvider, public user:GlobalProvider, public platform:App ) {
      this.base64Image = user.Imagen;
      this.cantNotificaciones=0;
      this.getCantidadNotificaciones();
  }

  getCantidadNotificaciones() {    
    let userID =this.user.Id;
    this.notificacionService.GetCantNotificacionesByUsuario(userID)        
    .subscribe(
        (data:any)=> {
          this.cantNotificaciones = data;   // get data in result variable          
        },
        (error)=>{
          console.log(error);          
        }
    )  
  }

  GotoCanjes(){
      this.navCtrl.push(CanjesPage);
  }
  GotoMyCategories(){
      this.navCtrl.push(MyCategoriesPage);
  }
  
  profile(){
        this.navCtrl.push(ProfilePage)
  } 
  review(){
        this.navCtrl.push(ReviewPage)
  }
  condition(){
        this.navCtrl.push(ConditionPage)
  } 
  help(){
        this.navCtrl.push(HelpPage)
  }
  logout(){
      //this.navCtrl.popToRoot();
      
      //this.navCtrl.push(SigninPage)
      //this.platform.exitApp();
      this.platform.getRootNav().setRoot(SigninPage);
  }

}
