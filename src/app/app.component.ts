import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SigninPage } from '../pages/signin/signin';
import { TranslateService } from '../../node_modules/@ngx-translate/core';
import { Push, PushObject, PushOptions } from '@ionic-native/push';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = SigninPage;

  constructor(private platform: Platform, private statusBar: StatusBar,private splashScreen: SplashScreen, public translate:TranslateService, private push: Push) {
    this.initializeApp();
    this.pushSetup();
  }
  
  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.translate.setDefaultLang('en');
      this.translate.use('en');
    });
  }
  pushSetup(){
    const options: PushOptions = {
       android: {
           senderID: '943473640737'
       },
       ios: {
           alert: 'true',
           badge: true,
           sound: 'false'
       },
       browser: {
        pushServiceURL: 'http://push.api.phonegap.com/v1/push'
      }
    };
 
    const pushObject: PushObject = this.push.init(options);

    let topic = "mundocanje"; //this way ,topics are working in android but not in ios
    pushObject.subscribe(topic);
 
    pushObject.on('notification').subscribe((notification: any) => console.log('Received a notification', notification));
    pushObject.on('registration').subscribe((registration: any) => console.log('Device registered', registration));
    pushObject.on('error').subscribe(error => console.error('Error with Push plugin', error));
  }

}
