import { Component } from '@angular/core';
import { NavController,ToastController,LoadingController } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';
import { RegisterPage } from '../register/register';
import { RegisterSlidePage } from '../register-slide/register-slide';
import { PasswordPage } from '../password/password';
import { AutenticationServiceProvider } from '../../providers/autentication-service/autentication-service';
import { GlobalProvider } from "../../providers/global/global";
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { CategoryServiceProvider } from '../../providers/category-service/category-service';
//import { Observable } from 'rxjs';

@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html'
})


export class SigninPage {
  login: string = "signin";
  mailRegister: string;
  passRegister: string;
  dataApi:any;

    constructor(public cat:CategoryServiceProvider, public navCtrl: NavController,public loadingCtrl: LoadingController, public authService:AutenticationServiceProvider,public toastController: ToastController, public userService: UserServiceProvider, private user:GlobalProvider) {
     }
  
 
 tabs(){
        this.navCtrl.setRoot(TabsPage)
  }
  register(){
        
        this.navCtrl.push(RegisterSlidePage,{tokenMail:this.mailRegister, tokenPass:this.passRegister})
        //this.navCtrl.push(RegisterSlide2Page,{tokenMail:this.mailRegister, tokenPass:this.passRegister})
  } 
  password(){
        this.navCtrl.push(PasswordPage)
  }
  
   IngresarUsuario(){
      let loading = this.loadingCtrl.create({content: 'Cargando...'});
      loading.present();
      
      console.log("El mail es: "+this.user.Mail);
      console.log("El pass es: "+this.user.password);
      
      this.authService.loginUser( this.user.Mail, this.user.password)
      .then(info=>{
        console.log('Usuario conectado');
        console.log('El token es: '+info.user.uid);
        //this.user.Token = info.user.uid;

        this.getUserByToken(info.user.uid);
        loading.dismiss();
      })
      .catch(error=>{
            this.presentToast('Usuario o clave incorrecto');
            console.log("Errorororor......");
            loading.dismiss();
      });   
   }
   async presentToast(texto) {
      const toast = await this.toastController.create({
        message: texto,
        duration: 3000
      });
      toast.present();
    }

    getUserByToken(token) {    
      this.userService.getUserByToken(token)        
      //this.cat.GetCategorias2()
      .subscribe(
          (data)=> {
            //this.presentToast('OK');
            if(data==null){
              this.presentToast('Usuario o clave incorrecto');
            }
            else{
              console.log(data);
              
              let data2 = JSON.stringify(data);
              this.dataApi = JSON.parse(data2);
              
              this.user.Id = this.dataApi.Id;
              this.user.Mail = this.dataApi.Mail;  
              this.user.password = "";
              this.user.Nombre = this.dataApi.Nombre;
              this.user.Telefono = this.dataApi.Telefono;
              this.user.Whatsapp = this.dataApi.Whatsapp;
              this.user.Imagen = this.dataApi.Imagen;
              this.user.Token = token;
              this.user.Direccion = this.dataApi.Direccion;
              this.user.Razon_Social = this.dataApi.Razon_Social;
              this.user.Estado = this.dataApi.Estado;
              this.user.IdTipo = this.dataApi.IdTipo;
              this.user.Cuit = this.dataApi.Cuit;
              this.user.IdPlan = this.dataApi.IdPlan;
              this.user.IdLocalidad = this.dataApi.IdLocalidad;
              this.user.Fecha_Alta = this.dataApi.Fecha_Alta;
              this.user.RubroUsuario = this.dataApi.RubroUsuario; 

              this.navCtrl.setRoot(TabsPage,{tokenU:token});
            }
            
          },
          (error)=>{
            this.presentToast('Error123: '+error.message);
            console.log(error);
          }
      )        
    }


    presentLoadingDefault() {
      let loading = this.loadingCtrl.create({content: 'Cargando...'});
    
      loading.present();
    /*
      setTimeout(() => {
        loading.dismiss();
      }, 5000);
      */
    }
}
