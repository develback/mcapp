import { Component } from '@angular/core';
import { NavController, NavParams,ModalController,LoadingController} from 'ionic-angular';
import { UsersListPage } from '../users-list/users-list';
import { ListCanjes2Page } from '../list-canjes2/list-canjes2';
import { CategoryServiceProvider } from '../../providers/category-service/category-service';
import {ListDescuentos2Page} from '../list-descuentos2/list-descuentos2';

@Component({
  selector: 'page-filters2',
  templateUrl: 'filters2.html',
})
export class Filters2Page {

  
  categoriasLst;
  vCategoria;
  vCantUsuarios;
  vCantProductos;
  vCantHombres;
  vCantMujeres;
  vCantNinios;
  vIdCategoria;
  vCantBeneficios;
  objCategoria:any;

  constructor(public navCtrl: NavController,public loadingCtrl: LoadingController, public modalCtrl: ModalController,public navParams: NavParams, public serviceCat: CategoryServiceProvider) {
    let loading = this.loadingCtrl.create({content: 'Cargando...'});
    loading.present();  

    this.vCategoria ="Cargando...";
    this.vIdCategoria = this.navParams.get('IdCategoria');    
    this.ObtenerCategoria(this.vIdCategoria,loading);
    
  }

  ObtenerCategoria(idCategoria, loading) {    
    this.serviceCat.GetTotalesById(idCategoria)        
    .subscribe(
        (data)=> {
          let data2 = JSON.stringify(data);
          this.objCategoria = JSON.parse(data2);
          this.vCategoria = this.objCategoria.Nombre;
          this.vCantUsuarios = this.objCategoria.CantUsuarios;
          this.vCantProductos= this.objCategoria.CantProductos;
          this.vCantHombres= this.objCategoria.CantHombres;
          this.vCantMujeres= this.objCategoria.CantMujeres;
          this.vCantNinios = this.objCategoria.CantNinios;
          this.vCantBeneficios =this.objCategoria.CantDescuentos;
          loading.dismiss();
        },
        (error)=>{
          console.log(error);
          loading.dismiss();
        }
    )        
    
  }
  VerListaDeUsuarios(){
    this.navCtrl.push(UsersListPage,{IdCategoria:this.vIdCategoria});
  }
  VerCanjesPorCategoria(){
    this.navCtrl.push(ListCanjes2Page,{IdCategoria:this.vIdCategoria});
  }
  VerCanjesPorSexo(sexo:string){
    this.navCtrl.push(ListCanjes2Page,{Sexo:sexo});
    
  }
  VerDescuentosPorCategoria(){
    this.navCtrl.push(ListDescuentos2Page,{IdCategoria:this.vIdCategoria});
    
  }

}
