import { Component } from '@angular/core';
import { NavController,ToastController } from 'ionic-angular';
import { AutenticationServiceProvider } from '../../providers/autentication-service/autentication-service';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { GlobalProvider } from "../../providers/global/global";
import { TabsPage } from '../tabs/tabs';
import { CiudadesServiceProvider } from '../../providers/ciudades-service/ciudades-service';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})


export class RegisterPage {
  TipoUsuario: any;
  ListCiudades: any;
  IdCiudad: any;

  constructor(public navCtrl: NavController, public authService:AutenticationServiceProvider,public toastController: ToastController, public userService: UserServiceProvider, private user:GlobalProvider, public ciudadServ:CiudadesServiceProvider) {
    this.user.Mail="";
    this.user.password="";
    this.TipoUsuario="1";
    this.ObtenerCiudades();
 }

  tabs(){
        this.navCtrl.setRoot(TabsPage)
  }
  SetTipoUsuario(tipoUsuario){
    this.TipoUsuario = tipoUsuario;
  }
  
 RegistrarUsuario(){
    let tokenFb ="";  
    this.authService.registerUser( this.user.Mail, this.user.password)
    .then(info=>{
      console.log('usuario registrado');
      this.presentToast('Registrado correctamente');
      tokenFb =info.user.uid;
      this.user.Token = tokenFb;
      this.user.Imagen = "";
      this.user.IdPlan = "1";//Se registra con plan básico por default.
      this.user.IdLocalidad = this.IdCiudad;
      this.user.Estado = "1";
      this.user.IdTipo = this.TipoUsuario;
      var myDate: string = new Date().toDateString();
      this.user.Fecha_Alta = myDate;

      console.log('Token ' + tokenFb);
      this.registerToDB2.then((result) => { 
        //window.alert(result); // true
        console.log("Registracion correcta");
        this.navCtrl.setRoot(TabsPage,{tokenU:tokenFb});
      }).catch(error=>{
        this.presentToast(error);
        console.log("Error al registrase");
      });
    })
    .catch(error=>{
          this.presentToast(error);
          console.log("ERror......");
    });   
  }

  

  get registerToDB2(): Promise<Boolean> {
    return new Promise((resolve, reject) => {
      this.userService.postUser(this.user)
        .subscribe((data) => {
          resolve(true);
        },
        (error)=>{
          console.log("ERROR en Save to DB: " + error);
          return false;
        })
    });
  }

  

  async presentToast(texto) {
    const toast = await this.toastController.create({
      message: texto,
      duration: 3000
    });
    toast.present();
  }

  ObtenerCiudades() {    
    this.ciudadServ.GetCiudades()        
    .subscribe(
        (data)=> {
          this.ListCiudades=data;
          console.log("La ciudad 1: "+ this.ListCiudades[0].Nombre);
        },
        (error)=>{console.log(error);}
    )   
  }
}
