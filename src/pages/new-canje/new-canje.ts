import { Component } from '@angular/core';
import { NavController,ToastController } from 'ionic-angular';
import { ProductServiceProvider } from '../../providers/product-service/product-service';
import { GlobalProductProvider } from '../../providers/global-product/global-product';
import { TabsPage } from '../tabs/tabs';
import { CategoryServiceProvider } from '../../providers/category-service/category-service';
import { GlobalProvider } from "../../providers/global/global";
import { PedidosServiceProvider } from '../../providers/pedidos-service/pedidos-service';
import { GlobalPedidoProvider } from '../../providers/global-pedido/global-pedido';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera';


@Component({
  selector: 'page-new-canje',
  templateUrl: 'new-canje.html',
})
export class NewCanjePage {
  CategoriasLst:any;
  gender: string = "female";
  dataApi:any;
  latitude:any;
  longitude:any;
  base64Image;
  picture;

  constructor(public navCtrl: NavController, public toastController: ToastController, public geolocation:Geolocation, public productService: ProductServiceProvider, public product:GlobalProductProvider,public pedido: GlobalPedidoProvider, public categService:CategoryServiceProvider, public user:GlobalProvider, public pedidoService:PedidosServiceProvider, public camera:Camera) {
    this.ObtenerCategorias();
    this.ObtenerUbicacion(); 
    this.product.Nombre="";   
    this.product.Descripcion="";   
    this.product.Importe=0;   
    this.base64Image="";   
  }

  tabs(){
        this.navCtrl.setRoot(TabsPage)
  }
  
  postCanje() {    
    console.log("LAT: "+this.latitude);
    console.log("LONG: "+this.longitude);

    this.product.Id = '0';
    this.product.IdTipo = '1';
    this.product.TipoDespublicacion = '1';
    this.product.IdEstado = '1';
    if(this.product.Imagen == null){
      this.product.Imagen ="http://mundocanje.tk/Imagenes/Productos/NoDisponible.png";
    }    
    this.product.IdUsuario = this.user.Id;
    var myDate: string = new Date().toDateString();
    this.product.Fecha_Publicacion = myDate;
    this.product.lat = this.latitude;
    this.product.lng = this.longitude;
    this.product.Imagen = this.base64Image;

    this.productService.postProduct(this.product)        
    .subscribe(
        (data)=> {
          let data2 = JSON.stringify(data);
          this.dataApi = JSON.parse(data2);
          this.pedido.Id="0";
          this.pedido.IdProductoInteres=this.dataApi.Id; //Poner id que devuelve el data
          this.pedido.IdPedido_Estado="1";
          this.pedido.FechaPedido=myDate;

          this.presentToast('Canje creado correctamente');
          this.navCtrl.setRoot(TabsPage);         
          
/*
          this.pedidoService.postPedido(this.pedido)        
          .subscribe(
              (data)=> {
                this.presentToast('Canje creado correctamente');
                this.navCtrl.setRoot(TabsPage);         
              },
              (error)=>{console.log("ERROR en Save to DB: " + error);}
          ) 
*/
      
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
  ObtenerCategorias() {    
    this.categService.GetCategorias()        
    .subscribe(
        (data)=> {
          this.CategoriasLst=data;
        },
        (error)=>{console.log(error);}
    )   
  }

  ObtenerUbicacion(){

    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };
    
      navigator.geolocation.getCurrentPosition(this.geolocationSuccess, this.onError);
  }
  onError(error) {
    alert("Error al obtener la posicion");
  }

  geolocationSuccess = (position) => {
    this.latitude = position.coords.latitude;
    this.longitude = position.coords.longitude;
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
  
}