import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';
import { ProductServiceProvider } from '../../providers/product-service/product-service';
import { OtherProfilePage } from '../other-profile/other-profile';

@Component({
  selector: 'page-users-list',
  templateUrl: 'users-list.html',
})
export class UsersListPage {
  perfilesLst;

  constructor(public navCtrl: NavController,public loadingCtrl: LoadingController, public navParams: NavParams, public serviceProd: ProductServiceProvider) {
    let loading = this.loadingCtrl.create({content: 'Cargando...'});
    loading.present();  
    let IdCategoria = this.navParams.get('IdCategoria');  
    if(IdCategoria==null){
      this.getAllPerfiles(loading);
    }
    else{
      console.log("El id categoria es:"+IdCategoria);
      this.getPerfiles(IdCategoria,loading);
    }
    
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsersListPage');
  }
  getAllPerfiles(loading) {    
    this.serviceProd.getAllPerfiles()       
    .subscribe(
        (data:any)=> {
          this.perfilesLst = data;
          loading.dismiss();
        },
        (error)=>{
          console.log(error);
          loading.dismiss();
        }
    )  
  }
  getPerfiles(idCategoria,loading) {    
    this.serviceProd.getPerfilesByCategoria(idCategoria)        
    .subscribe(
        (data:any)=> {
          this.perfilesLst = data;
          loading.dismiss();
        },
        (error)=>{
          console.log(error);
          loading.dismiss();
        }
    )  
  }
  ViewProfile(idUsuario){
    this.navCtrl.push(OtherProfilePage,{IdUsuario:idUsuario});
  }
}
