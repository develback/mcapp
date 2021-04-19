import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewchattingPage } from './newchatting';

@NgModule({
  declarations: [
    NewchattingPage,
  ],
  imports: [
    IonicPageModule.forChild(NewchattingPage),
  ],
})
export class NewchattingPageModule {}
