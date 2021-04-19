import { Component } from '@angular/core';
import { NavController, ModalController} from 'ionic-angular';
import { Filters2Page } from '../../pages/filters2/filters2';
import { SearchPage } from '../search/search';
import { CategoryServiceProvider } from '../../providers/category-service/category-service';

@Component({
  selector: 'page-categories',
  templateUrl: 'categories.html'
})
export class CategoriesPage {
  categoriasLst;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public serviceCat: CategoryServiceProvider) {
    this.ObtenerCategorias();
  }
  search() {
    let modal = this.modalCtrl.create(SearchPage);
    modal.present();
  } 

 category_result(idCategoria){
      this.navCtrl.push(Filters2Page,{IdCategoria:idCategoria});
  } 

  ObtenerCategorias() {    
    this.serviceCat.GetCategorias()        
    .subscribe(
        (data)=> {
          this.categoriasLst=data;
          console.log(data);
          console.log("La categorìa 1: "+ this.categoriasLst[0].Nombre);
        },
        (error)=>{console.log(error);}
    )        
    
  }
}
