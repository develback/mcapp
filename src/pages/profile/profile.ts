import { Component } from '@angular/core';
import { NavController,ToastController } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { TabsPage } from '../tabs/tabs';
import { GlobalProvider } from "../../providers/global/global";
import { Camera, CameraOptions } from '@ionic-native/camera';

import { SigninPage } from '../signin/signin';
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
 shaop_category: string = "Dairy";
 base64Image;
 picture;

  constructor(public navCtrl: NavController, public userServ: UserServiceProvider,public toastController: ToastController, public user:GlobalProvider, public camera:Camera) {
    this.base64Image = user.Imagen;
    console.log("El id de usuario es:"+user.Id);
  }

  signin(){
        this.navCtrl.setRoot(SigninPage)
  }

  takePhoto(sourceType:number) {
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      sourceType:sourceType,
    }

    this.camera.getPicture(options).then((imageData) => {
      this.base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Handle error
    });
  }

  AccessCamera(){   
    this.takePhoto(1);
  }
   
  AccessGallery(){       
    this.takePhoto(0); 
  }
  putUsuario() {    
    
    if(this.user.Imagen == null){
      this.user.Imagen ="http://mundocanje.tk/Imagenes/Productos/NoDisponible.png";
    }    
    
    this.user.Imagen = this.base64Image;

    this.userServ.putUser(this.user)        
    .subscribe(
        (data)=> {          
         this.presentToast('Los cambios se guardaron correctamente');
         this.navCtrl.setRoot(TabsPage);
          
        },
        (error)=>{console.log("ERROR en Save to DB: " + error);}
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
