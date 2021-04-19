import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListCanjesPage } from './list-canjes';

@NgModule({
  declarations: [
    ListCanjesPage,
  ],
  imports: [
    IonicPageModule.forChild(ListCanjesPage),
  ],
})
export class ListCanjesPageModule {}
