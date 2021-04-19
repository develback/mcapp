import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FaqProvider } from '../../providers/faq/faq';

@Component({
  selector: 'page-help',
  templateUrl: 'help.html'
})
export class HelpPage {
  pregFrec;

  constructor(public navCtrl: NavController, public serviceFaq: FaqProvider) {
    this.GetFaq();
  }
  GetFaq() {    
    this.serviceFaq.GetPreguntas_Frecuentes()        
    .subscribe(
        (data)=> {
          this.pregFrec=data;
          console.log(data);
          console.log("La faq 1: "+ this.pregFrec[0].Pregunta);
        },
        (error)=>{console.log(error);}
    )        
    
  }
  toggleDetails(data) {
    if (data.showDetails) {
      data.showDetails = false;
    } else {
      data.showDetails = true;
    }
  }


}
