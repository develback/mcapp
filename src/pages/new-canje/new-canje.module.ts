import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewCanjePage } from './new-canje';

@NgModule({
  declarations: [
    NewCanjePage,
  ],
  imports: [
    IonicPageModule.forChild(NewCanjePage),
  ],
})
export class NewCanjePageModule {}
