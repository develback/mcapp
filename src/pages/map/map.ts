import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, ModalController,LoadingController,ToastController } from 'ionic-angular';
//import {  GoogleMaps,  GoogleMap,  GoogleMapsEvent,  GoogleMapOptions} from '@ionic-native/google-maps';
import { SearchPage } from '../search/search';
import { ProductServiceProvider } from '../../providers/product-service/product-service';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { AccountPage } from '../account/account';
import { OfferdetailPage } from '../offerdetail/offerdetail';
import { OtherProfilePage } from '../other-profile/other-profile';

import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker,
  Environment
} from '@ionic-native/google-maps';



@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {
  //map: GoogleMap;
  canjesLst;
  objCanje;
  ubicLat;
  ubicLng;
  cuponLst;
  CardImage;
  NameImage;
  CardCategoria;
  showCard;
  showCardCupon;
  CuponImage;
  CuponPercent;
  CuponTitle;
  CuponText;
  IdCanje;
  IdCupon;
  textoAlerta;
  IdUsuario;

  constructor(public navCtrl: NavController,public toastController: ToastController,public loadingCtrl: LoadingController, public serviceProd: ProductServiceProvider, public modalCtrl: ModalController, public geolocation:Geolocation) {
    this.showCard=false;
    this.showCardCupon=false;
    this.CardImage="";
    this.NameImage="";
    this.IdUsuario="";
    this.CardCategoria="";
    this.IdCanje="";

    this.CuponImage="";
    this.CuponPercent="";
    this.CuponTitle="";
    this.CuponText="";
    this.IdCupon="";

    

    let loading = this.loadingCtrl.create({content: 'Cargando...'});
     loading.present();  
    //this.ObtenerUbicacion();
    this.ObtenerProductosMapa(loading);
  }
  
  ionViewDidLoad(){
    //this.map=this.abrirMAPA();
    
  }
  

 search() {
    let modal = this.modalCtrl.create(SearchPage);
    modal.present();
  } 
  
  ObtenerUbicacion(){
    
      var options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      };
              
            navigator.geolocation.getCurrentPosition(
              (position: Position) => {
                this.textoAlerta ="2";
                const pos = {
                  lat: position.coords.latitude,
                  lng: position.coords.longitude
                };     
                let loadingIN = this.loadingCtrl.create({content: 'Cargando...'});
                loadingIN.present();  

                this.ubicLat = pos.lat;
  
                let mapOptions: GoogleMapOptions = {
                  camera: {
                    target: {
                      lat: position.coords.latitude,
                      lng: position.coords.longitude
                    },
                    zoom: 12,
                    tilt: 30
                  }
                };
                this.textoAlerta ="3";
                let map2 = GoogleMaps.create('map_canvas', mapOptions);
              let marker: Marker;
                
                  map2.addMarker({
                    title: 'Estoy aqui',
                    icon: 'red',
                    animation: 'DROP',
                    position: {
                      lat: position.coords.latitude,
                      lng: position.coords.longitude
                    }
                  });
  
                  this.canjesLst.forEach(item => {
                    const marki = map2.addMarkerSync({
                      // title: item.Nombre,
                      icon: 'blue',
                      animation: 'DROP',
                      optimized: false,
                      position: {
                        lat: item.lat,
                        lng: item.lng
                      }
                    });
    
                    marki.addEventListener(GoogleMapsEvent.MARKER_CLICK).subscribe(() => { 
                      console.log('Marker clicked...'); 
                      this.presentToast(item.Nombre);
                      this.showCardCupon=false;
                      this.showCard=true;                        
                      this.CardImage=item.Imagen;
                      this.NameImage=item.Nombre;
                      this.IdUsuario=item.IdUsuario;
                      this.CardCategoria=item.Categoria;
                      this.IdCanje=item.Id;
                    });
                  }); 
  
                  this.cuponLst.forEach(item => {
                    const markiCupon = map2.addMarkerSync({
                      // title: item.Nombre,
                      icon: 'green',
                      animation: 'DROP',
                      position: {
                        lat: item.lat,
                        lng: item.lng
                      }
                    });
  
                    markiCupon.addEventListener(GoogleMapsEvent.MARKER_CLICK).subscribe(() => { 
                      this.presentToast(item.Nombre);
                      this.showCard=false;
                          this.showCardCupon=true;                        
                          this.NameImage=item.Nombre; 
                          this.IdUsuario=item.IdUsuario;                       
                          this.CuponImage=item.UsuarioImagen;
                          this.CuponPercent=item.PorcentajeDesc;
                          this.CuponTitle=item.Usuario;
                          this.CuponText=item.Nombre;
                          this.IdCupon=item.Id;
                    });
                  }); 
  
                  this.textoAlerta ="";
                  loadingIN.dismiss();
              },
              this.onError
            );
          
    
    
    
  }
  onError(error) {
    this.presentToast("Debe habilitar la ubicación");
    
  }
  ViewProfile(idUsuario){
    this.navCtrl.push(OtherProfilePage,{IdUsuario:idUsuario});
  }


    ObtenerProductosMapa(loading) {    
      this.serviceProd.geProductosMap()  
      .subscribe(
          (data:any)=> {
            this.cuponLst=data.Descuentos;
            this.canjesLst =data.Canjes;
            this.textoAlerta ="Debe habilitar la ubicación";
            this.ObtenerUbicacion();
            
            loading.dismiss();
          },
          (error)=>{
            console.log(error);            
            loading.dismiss();

          }
      )   
  }
  perfil(){
    this.navCtrl.push(AccountPage)
  }
  offerdetail(IdProd){
    this.navCtrl.push(OfferdetailPage,{idProd:IdProd});    
  }

  async presentToast(texto) {
    const toast = await this.toastController.create({
      message: texto,
      duration: 3000
    });
    toast.present();
  }
  
}
  

 

