import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,Slides,LoadingController ,ToastController} from 'ionic-angular';
import { CiudadesServiceProvider } from '../../providers/ciudades-service/ciudades-service';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { CategoryServiceProvider } from '../../providers/category-service/category-service';
import { GlobalProvider } from "../../providers/global/global";
import { AutenticationServiceProvider } from '../../providers/autentication-service/autentication-service';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { UserCategoriaServiceProvider } from '../../providers/user-categoria-service/user-categoria-service';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-register-slide',
  templateUrl: 'register-slide.html',
})
export class RegisterSlidePage {
  @ViewChild(Slides) slides: Slides;

  slider=[
    {
      title:"Slide 1",
      description: "ionic is a built......",
      image: "assets/imgs/slide-1.png"
    },
    {
      title:"Slide 2",
      description: "ionic is a built222......",
      image: "assets/imgs/slide-2.png"
    },
    {
      title:"Slide 3",
      description: "ionic is a built33......",
      image: "assets/imgs/slide-3.png"
    }
  ]

  ListSexo=[
    {
      id:"F",
      nombre: "Femenino"
    },
    {
      id:"M",
      nombre: "Masculino"
    },
    {
      id:"O",
      nombre: "Otro"
    }
  ]


  ListCiudades: any;
  ListCiudadesElegidas: any;
  ListPaises: any;
  IdCiudad: any;
  IdPais: any;
  selectedAll: boolean;
  IdSexo: any;
  base64Image;
  picture;
  categoriasLst;
  categoriasSelect: any[] = [{Id: -34.619334, Nombre : "1"}  ];
  catSelect = [0];

  constructor(public navCtrl: NavController, public authService:AutenticationServiceProvider,public loadingCtrl: LoadingController, public serviceCat: CategoryServiceProvider, public navParams: NavParams, public ciudadServ:CiudadesServiceProvider, public camera:Camera, private user:GlobalProvider, public userService: UserServiceProvider,public toastController: ToastController, public userCatService: UserCategoriaServiceProvider) {
       
    let loading = this.loadingCtrl.create({content: 'Cargando...'});
    loading.present();  

    this.user.Mail = this.navParams.get('tokenMail');
    this.user.password = this.navParams.get('tokenPass');
    this.user.Sexo = "Hombre"; //Por defecto por si no se selecciona en registrarse

    //console.log("El token del usuario es:"+this.tokenMail + " pass: "+this.tokenPass);
    
    this.ObtenerCategorias()
    this.ObtenerCiudades2();  
    this.ObtenerPaises(loading);
    
    this.base64Image = "assets/imgs/upload.png";

    //loading.dismiss();
  }

  ObtenerCiudadesByPais(idPais) {    
    let loading = this.loadingCtrl.create({content: 'Cargando...'});
      loading.present();  

    this.ciudadServ.GetCiudadesByIdPais(idPais)        
    .subscribe(
        (data)=> {
          this.ListCiudades=data;
          console.log("La ciudad 1: "+ this.ListCiudades[0].Nombre);
          loading.dismiss();
        },
        (error)=>{
          console.log(error);
          loading.dismiss();
        }
    )   
  }
  ObtenerPaises(loading) {    
    this.ciudadServ.GetPaises()        
    .subscribe(
        (data)=> {
          this.ListPaises=data;
          console.log("El pais 1: "+ this.ListPaises[0].Nombre);
          loading.dismiss();
        },
        (error)=>{
          console.log(error);
          loading.dismiss();
        }
    )   
  }
  ObtenerCiudades2() {    
    this.ciudadServ.GetCiudades()        
    .subscribe(
        (data)=> {
          this.ListCiudades=data;
          
          
        },
        (error)=>{
          console.log(error);
        }
    )   
  }
  PaisSelect(pais) {
    console.log('Pais elegido:' + pais);
    this.ListCiudadesElegidas = this.ListCiudades.filter(u => u.IdPais == pais);
    //this.ObtenerCiudadesByPais(pais);
  }

  ObtenerCategorias() {    
    this.serviceCat.GetCategorias()        
    .subscribe(
        (data)=> {
          this.categoriasLst=data;
          console.log("La categorìa 1: "+ this.categoriasLst[0].Nombre);
        },
        (error)=>{console.log(error);}
    )   
  }
  goToSlide() {
    this.slides.slideTo(2, 500);
  }
  slidechanged(){
    console.log('Se cambio de slide...');
  }
  swipeNext(){
    this.slides.slideNext();
  }
  swipePrev(){
    this.slides.slidePrev();
  }
  Previous(){
    this.navCtrl.pop();
  }
  checkAll(){      
      this.selectedAll=!this.selectedAll;
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
  checkboxClick(e, idCategoria){
    var categoriaSel=0;
    if(e.checked){
      this.categoriasSelect.push({Id: parseFloat(idCategoria), Nombre :'AAA'});
      this.catSelect.push(idCategoria);
    }
    else{      
      var index2 = this.catSelect.indexOf(idCategoria);
      if (index2 > -1) {
        this.catSelect.splice(index2, 1);
      }
    }
  }
  SetGenero(Genero){
    if(Genero==1){
      this.user.Sexo = "Hombre";
    }
    else{
      this.user.Sexo = "Mujer";
    }
    
  }

  RegistrarUsuario(){
    let tokenFb ="";  
    this.authService.registerUser( this.user.Mail, this.user.password)
    .then(info=>{
      console.log('usuario registrado');
      this.presentToast('Registrado correctamente');
      tokenFb =info.user.uid;
      this.user.Token = tokenFb;

      this.user.Imagen = this.base64Image;
      this.user.IdPlan = "1";//Se registra con plan básico por default.
      this.user.IdLocalidad = this.IdCiudad;
      this.user.Estado = "1";
      this.user.IdTipo = "1";
      var myDate: string = new Date().toDateString();
      this.user.Fecha_Alta = myDate;

      console.log('Token ' + tokenFb);
      //this.registerToDB2.then((result) => { 
        
        //console.log("Registracion correcta");

        this.userService.postUser(this.user)        
        .subscribe(
            (data:any)=> {
              console.log("Registracion correcta");
              this.user.Id = data.Id;

                ////////////Registrar categorias/////////////////////////
                var SaveCateg=true;
                this.catSelect.forEach(item => {
                  if(item>0){
                    console.log(item);
                    this.userCatService.postUsuarioCategoria(this.user.Id, item.toString())        
                    .subscribe(
                        (data)=> {
                          console.log("Las categorias se registraron OK");
                        },
                        (error)=>{
                          console.log("ERROR al guardar la categoria: " + error);
                          SaveCateg=false;
                        }
                    );
                  }
                  
                });

                
                if(!SaveCateg){
                  this.presentToast('Error. No se pudieron grabar las categorías.');
                }
                this.navCtrl.setRoot(TabsPage,{tokenU:tokenFb});
                //////////////////////////////////


            },
            (error)=>{console.log("Error al registrase");}
        );



        
      /* }).catch(error=>{
        this.presentToast(error);
        console.log("Error al registrase");
      }); */
    })
    .catch(error=>{
          this.presentToast(error);
          console.log("ERror......");
    });   
  }

  
  async presentToast(texto) {
    const toast = await this.toastController.create({
      message: texto,
      duration: 3000
    });
    toast.present();
  }

}
