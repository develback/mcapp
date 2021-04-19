import { Component } from '@angular/core';
import { NavController,ToastController,NavParams,AlertController } from 'ionic-angular';
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
  selector: 'page-edit_event',
  templateUrl: 'edit_event.html'
})
export class Edit_eventPage {
  CategoriasLst:any;
  gender: string = "female";
  dataApi:any;
  latitude:any;
  longitude:any;
  base64Image;
  picture;
  ProductoEdit;

  constructor(public navCtrl: NavController,public alertCtrl:AlertController,public navParams: NavParams, public toastController: ToastController, public geolocation:Geolocation, public productService: ProductServiceProvider, public product:GlobalProductProvider,public pedido: GlobalPedidoProvider, public categService:CategoryServiceProvider, public user:GlobalProvider, public pedidoService:PedidosServiceProvider, public camera:Camera) {

    this.ProductoEdit = this.navParams.get('productoEdit');  
    this.ObtenerCategorias();
    //this.ObtenerUbicacion();    
    this.SetProductEdit(this.ProductoEdit);  
  }
  SetProductEdit(prod){
    console.log("El importe es: "+prod.Importe);
    console.log("El IdCategoria es: "+prod.IdCategoria);
    console.log("El IdUsuario es: "+this.user.Id);

    this.product.Id = prod.Id;
    this.product.Nombre = prod.Nombre;
    this.product.Descripcion = prod.Descripcion;
    this.product.IdCategoria = prod.IdCategoria;
    this.product.Cantidad = prod.Cantidad;   
    //let Lati2 = parseFloat(latitud); 
    this.product.Importe = parseFloat(prod.Importe);
    this.product.IdTipo = '1';
    this.product.TipoDespublicacion = '1';
    this.product.IdEstado = '1';
    this.product.Imagen = prod.Imagen;
    this.base64Image = prod.Imagen;
    this.product.IdUsuario = this.user.Id;    
    this.product.Fecha_Publicacion = prod.Fecha_Publicacion;    
    this.product.lat = prod.lat;
    this.product.lng = prod.lng;
    
  }

  tabs(){
        this.navCtrl.setRoot(TabsPage)
  }
  
  putCanje() {    
    //console.log("LAT: "+this.latitude);
    //console.log("LONG: "+this.longitude);

    if(this.product.Imagen == null){
      this.product.Imagen ="http://mundocanje.tk/Imagenes/Productos/NoDisponible.png";
    }    
    //this.product.IdUsuario = this.user.Id;
    //var myDate: string = new Date().toDateString();
    //this.product.Fecha_Publicacion = myDate;
    //this.product.lat = this.latitude;
    //this.product.lng = this.longitude;
    this.product.Imagen = this.base64Image;

    this.productService.putProduct(this.product)        
    .subscribe(
        (data)=> {
          /*
          let data2 = JSON.stringify(data);
          this.dataApi = JSON.parse(data2);
          this.pedido.Id="0";
          this.pedido.IdProducto=this.dataApi.Id; //Poner id que devuelve el data
          this.pedido.IdPedido_Estado="1";
          this.pedido.FechaPedido=myDate;
          */
         this.presentToast('Los cambios se guardaron correctamente');
         this.navCtrl.setRoot(TabsPage);
          
        },
        (error)=>{console.log("ERROR en Save to DB: " + error);}
    )        
  }
  DeleteProduct(){  

    this.productService.deleteProduct(this.product)        
    .subscribe(
        (data)=> {          
         this.presentToast('El Canje se eliminó correctamente');
         this.navCtrl.setRoot(TabsPage);
          
        },
        (error)=>{console.log("ERROR en Save to DB: " + error);}
    )   
  }
  EliminarProducto(){
    this.presentAlertConfirm();
  }


  async presentAlertConfirm() {
    const alert = await this.alertCtrl.create({
      title: "Eliminar producto",
      message: '¿Está seguro de eliminar este producto?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Si',
          handler: () => {
            this.DeleteProduct();
          }
        }
      ]
    });

    await alert.present();
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
