import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AccountPage } from '../pages/account/account';
import { AddreviewPage } from '../pages/addreview/addreview';
import { ChatsPage } from '../pages/chats/chats';
import { ChattingPage } from '../pages/chatting/chatting';
import { ConditionPage } from '../pages/condition/condition';
import { Edit_offerPage } from '../pages/edit_offer/edit_offer';
import { Edit_eventPage } from '../pages/edit_event/edit_event';
import { EventdetailPage } from '../pages/eventdetail/eventdetail';
import { HelpPage } from '../pages/help/help';
import { Home2Page } from '../pages/home2/home2';
import { MapPage } from '../pages/map/map';
import { OfferdetailPage } from '../pages/offerdetail/offerdetail';
import { PasswordPage } from '../pages/password/password';
import { ProfilePage } from '../pages/profile/profile';
import { RegisterPage } from '../pages/register/register';
import { RegisterSlidePage } from '../pages/register-slide/register-slide';
import { ReviewPage } from '../pages/review/review';
import { SearchPage } from '../pages/search/search';
import { SigninPage } from '../pages/signin/signin';
import { TabsPage } from '../pages/tabs/tabs';
import { CategoriesPage } from '../pages/categories/categories';
import {CategoryresultPage} from '../pages/categoryresult/categoryresult';
import { CanjesPage } from '../pages/canjes/canjes';
import { NewCanjePage } from '../pages/new-canje/new-canje';
import { MatchPage } from '../pages/match/match';
import { NewchattingPage } from '../pages/newchatting/newchatting';
import {ListCanjesPage} from '../pages/list-canjes/list-canjes';
import {ListCanjes2Page} from '../pages/list-canjes2/list-canjes2';
import {ListDescuentosPage} from '../pages/list-descuentos/list-descuentos';
import {ListDescuentos2Page} from '../pages/list-descuentos2/list-descuentos2';
import { FiltersPage } from '../pages/filters/filters';
import { Filters2Page } from '../pages/filters2/filters2';
import { UsersListPage } from '../pages/users-list/users-list';
import { MyCategoriesPage } from '../pages/my-categories/my-categories';
import { OtherProfilePage } from '../pages/other-profile/other-profile';



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TerminosServiceProvider } from '../providers/terminos-service/terminos-service';
import { FaqProvider } from '../providers/faq/faq';
import { CategoryServiceProvider } from '../providers/category-service/category-service';
import { AutenticationServiceProvider } from '../providers/autentication-service/autentication-service';
import { UserServiceProvider } from '../providers/user-service/user-service';
import { Camera, CameraOptions } from '@ionic-native/camera';


export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

import * as firebase from 'firebase';
import { GlobalProvider } from '../providers/global/global';
import { ProductServiceProvider } from '../providers/product-service/product-service';
import { GlobalProductProvider } from '../providers/global-product/global-product';
import { ChatServiceProvider } from '../providers/chat-service/chat-service';
import { GoogleMaps } from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { CiudadesServiceProvider } from '../providers/ciudades-service/ciudades-service';
import { PedidosServiceProvider } from '../providers/pedidos-service/pedidos-service';
import { GlobalPedidoProvider } from '../providers/global-pedido/global-pedido';
import { ChatDetalleServiceProvider } from '../providers/chat-detalle-service/chat-detalle-service';
import { Push, PushObject, PushOptions } from '@ionic-native/push';
import { NotificationServiceProvider } from '../providers/notification-service/notification-service';
import { UserCategoriaServiceProvider } from '../providers/user-categoria-service/user-categoria-service';
import { Crop } from '@ionic-native/crop/ngx';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { File } from '@ionic-native/file/ngx';
import { StarRatingModule } from 'ionic3-star-rating';
import { CalificacionServiceProvider } from '../providers/calificacion-service/calificacion-service';
 
firebase.initializeApp({
  apiKey: "AIzaSyDnRzX07BLi192INJNLCV6qZb-kUmGtMzI",
    authDomain: "mundocanjeapp-5b311.firebaseapp.com",
    databaseURL: "https://mundocanjeapp-5b311.firebaseio.com",
    projectId: "mundocanjeapp-5b311",
    storageBucket: "mundo-canje-app.appspot.com",
    messagingSenderId: "943473640737",
    appId: "1:1036430754198:web:5d32636367549438ad1db7"
});

@NgModule({
  declarations: [
    MyApp,
    AccountPage,
    AddreviewPage,
    ChatsPage,
    ChattingPage,
    ConditionPage,
    Edit_offerPage,
    Edit_eventPage,
    EventdetailPage,
    HelpPage,
    Home2Page,
    MapPage,
    OfferdetailPage,
    PasswordPage,
    ProfilePage,
    RegisterPage,
    RegisterSlidePage,
    ReviewPage,
    SearchPage,
    SigninPage,
    TabsPage,
    CategoriesPage,
    CategoryresultPage,
    CanjesPage,
    NewCanjePage,
    MatchPage,
    NewchattingPage,
    ListCanjesPage,
    ListCanjes2Page,    
    ListDescuentosPage,
    ListDescuentos2Page,
    FiltersPage,
    Filters2Page,
    UsersListPage,
    MyCategoriesPage,
    OtherProfilePage
  ],
  imports: [
    BrowserModule,
    StarRatingModule,
    IonicModule.forRoot(MyApp, { scrollAssist: false, autoFocusAssist: false }),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
  ], 
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AccountPage,
    AddreviewPage,
    ChatsPage,
    ChattingPage,
    ConditionPage,
    Edit_offerPage,
    Edit_eventPage,
    EventdetailPage,
    HelpPage,
    Home2Page,
    MapPage,
    OfferdetailPage,
    PasswordPage,
    ProfilePage,
    RegisterPage,
    RegisterSlidePage,
    ReviewPage,
    SearchPage,
    SigninPage,
    TabsPage,
    CategoriesPage,
    CategoryresultPage,
    CanjesPage,
    NewCanjePage,
    MatchPage,
    NewchattingPage,
    ListCanjesPage,
    ListCanjes2Page,
    ListDescuentosPage,
    ListDescuentos2Page,
    FiltersPage,
    Filters2Page,
    UsersListPage,
    MyCategoriesPage,
    OtherProfilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TerminosServiceProvider,
    FaqProvider,
    CategoryServiceProvider,
    AutenticationServiceProvider,
    UserServiceProvider,
    GlobalProvider,
    ProductServiceProvider,
    GlobalProductProvider,
    ChatServiceProvider,
    GoogleMaps,
    Geolocation,
    CiudadesServiceProvider,
    PedidosServiceProvider,
    GlobalPedidoProvider,
    Camera,
    ChatDetalleServiceProvider,
    Push,
    NotificationServiceProvider,
    UserCategoriaServiceProvider,
    Crop,
    ImagePicker,
    File,
    CalificacionServiceProvider
  ]
})
export class AppModule {}
