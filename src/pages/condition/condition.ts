import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TerminosServiceProvider } from '../../providers/terminos-service/terminos-service';

@Component({
  selector: 'page-condition',
  templateUrl: 'condition.html'
})
export class ConditionPage {
  terms1;
  vTerminos;
  vTerminosDeUso;

  constructor(public navCtrl: NavController, public serviceTerminos: TerminosServiceProvider) {
    this.GetTerminos();
  }
  GetTerminos() {    
    this.serviceTerminos.GetTerminos()        
    .subscribe(
        (data)=> {
          
          for(let i in data){
            if(data[i].Titulo =="Terminos"){
              this.vTerminos = data[i].Descripcion;
              console.log("El termino es: "+ this.vTerminos);
            }
            if(data[i].Titulo =="TerminosDeUso"){
              this.vTerminosDeUso = data[i].Descripcion;
              console.log("El TerminosDeUso es: "+ this.vTerminosDeUso);
            }
          }

        },
        (error)=>{console.log(error);}
    )        
    
  }

}
