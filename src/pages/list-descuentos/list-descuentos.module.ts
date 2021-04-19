import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListDescuentosPage } from './list-descuentos';

@NgModule({
  declarations: [
    ListDescuentosPage,
  ],
  imports: [
    IonicPageModule.forChild(ListDescuentosPage),
  ],
})
export class ListDescuentosPageModule {}
