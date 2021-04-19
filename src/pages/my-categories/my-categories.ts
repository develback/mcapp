import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,LoadingController,ToastController} from 'ionic-angular';
import { UserCategoriaServiceProvider } from '../../providers/user-categoria-service/user-categoria-service';
import { GlobalProvider } from "../../providers/global/global";

@Component({
  selector: 'page-my-categories',
  templateUrl: 'my-categories.html',
})
export class MyCategoriesPage {
  categoriasLst;
  categoriasUserLst;
  categoriasSelect: any[] = [];
  catSelect = [];
  idUsuario;
  showButton:boolean;
  vTitulo;

  constructor(public navCtrl: NavController, private user:GlobalProvider ,public toastController: ToastController, public navParams: NavParams,public loadingCtrl: LoadingController, public userCatService: UserCategoriaServiceProvider) {
    this.showButton =true;
    this.vTitulo="Mis Preferencias de Canje";
    let loading = this.loadingCtrl.create({content: 'Cargando...'});
    loading.present();  
    
    this.idUsuario = this.navParams.get('IdUsuario'); //Usuario de interes
    if(this.idUsuario!=null){
      this.showButton =false;
      this.vTitulo="Categorías de Canje";
      this.GetCategoriasByUsuario(this.idUsuario,loading);
    }
    else{
      this.GetCategoriasByUsuario(this.user.Id,loading);
    }
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyCategoriesPage');
  }
  
  GetCategoriasByUsuario(idUsuario,loading) {    
    this.userCatService.getUsuarioCategoriaByUsuario(idUsuario)        
    .subscribe(
        (data)=> {
          this.categoriasUserLst=data;
          loading.dismiss();
          for(let i in data){
            if(data[i].Checked){
              this.catSelect.push(data[i].IdCategoria);
            }
            
          }
          
        },
        (error)=>{
          console.log(error);
          loading.dismiss();
        }
    )   
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
    console.log("La cantidad es: "+this.catSelect.length);
  }

  GuardarPreferencias(){
    
        this.userCatService.DelUsuarioCategoria(this.user.Id)        
        .subscribe(
            (data:any)=> {
              console.log("Datos Eliminados");
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
                else{
                  this.presentToast('OK. Los cambios se guardaron correctamente.');
                }
                
            },
            (error)=>{console.log("Error al registrase");}
        );   
  }
  async presentToast(texto) {
    const toast = await this.toastController.create({
      message: texto,
      duration: 3000
    });
    toast.present();
  }
  

}
