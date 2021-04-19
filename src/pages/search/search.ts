import { Component } from '@angular/core';
import { NavController,ToastController,ViewController,LoadingController } from 'ionic-angular';
import { CategoriesPage } from '../categories/categories';
import {CategoryresultPage} from '../categoryresult/categoryresult';
import { CategoryServiceProvider } from '../../providers/category-service/category-service';
import { ProductServiceProvider } from '../../providers/product-service/product-service';
import { OfferdetailPage } from '../offerdetail/offerdetail';
import { OtherProfilePage } from '../other-profile/other-profile';
import { GlobalPedidoProvider } from '../../providers/global-pedido/global-pedido';
import { GlobalProvider } from "../../providers/global/global";
import { PedidosServiceProvider } from '../../providers/pedidos-service/pedidos-service';
import { TabsPage } from '../tabs/tabs';
import { Filters2Page } from '../../pages/filters2/filters2';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {
  categoriasLst;
  listBusqueda;
  tokenUsuario;
  
  constructor(public navCtrl: NavController,public toastController: ToastController, public pedidoService:PedidosServiceProvider, private user:GlobalProvider,public pedido: GlobalPedidoProvider,public loadingCtrl: LoadingController,  public viewCtrl: ViewController, public serviceCat: CategoryServiceProvider, public prodServ: ProductServiceProvider) {
    this.ObtenerCategorias();
  }
  dismiss() {
		this.viewCtrl.dismiss();
  }
  VerCategorias(){
    this.navCtrl.push(CategoriesPage)
  }
/*   category_result(){
    this.navCtrl.push(CategoryresultPage)
  }  */
  category_result(idCategoria){
    //this.navCtrl.push(ListCanjes2Page,{IdCategoria:idCategoria});
    this.navCtrl.push(Filters2Page,{IdCategoria:idCategoria});
  } 
  presentPrompt(idProd) {
    this.SendNotification(idProd, "");
  }
  SendNotification(IdProd, Comentario){
    let loading = this.loadingCtrl.create({content: 'Cargando...'});
    loading.present();  

    this.pedido.Id="0";
    this.pedido.IdProductoInteres=IdProd;
    this.pedido.IdPedido_Estado="3";
    var myDate: string = new Date().toDateString();
    this.pedido.FechaPedido=myDate;
    this.pedido.IdUsuarioSolicita=this.user.Id;
    this.pedido.Comentarios=Comentario;
    this.pedido.TipoMatch="CANJE";

    this.pedidoService.postPedido(this.pedido)        
          .subscribe(
              (data)=> {
                  loading.dismiss();
                       this.presentToast();                
                       this.navCtrl.setRoot(TabsPage,{tokenU:this.tokenUsuario});              
              },
              (error)=>{
                console.log("ERROR en Save to DB: " + error);
                loading.dismiss();
              }
          ) 
    
  }
  getItems(busqueda){    
    let val = busqueda.target.value;
    /*
    if (q.trim() == '') {
        return;
    }
    */
   this.BuscarCanjes(val);
    
  }
  BuscarCanjes(nombreCanje) {    
    this.prodServ.getProductByName(nombreCanje)        
    .subscribe(
        (data)=> {
          this.listBusqueda=data;
          
        },
        (error)=>{console.log(error);}
    )        
    
  }
  offerdetail(IdProd){
    console.log("El producto id es: "+IdProd);
    this.navCtrl.push(OfferdetailPage,{idProd:IdProd});
  }

  ObtenerCategorias() {    
    this.serviceCat.GetCategorias()        
    .subscribe(
        (data)=> {
          this.categoriasLst=data;          
        },
        (error)=>{console.log(error);}
    )        
    
  }
  ViewProfile(idUsuario){
    this.navCtrl.push(OtherProfilePage,{IdUsuario:idUsuario});
  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Se envió la solicitud.',
      duration: 3000
    });
    toast.present();
  }

}
