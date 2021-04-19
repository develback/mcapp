webpackJsonp([2],{

/***/ 10:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GlobalProvider = /** @class */ (function () {
    function GlobalProvider() {
        //public ApiUrl = 'https://cors-anywhere.herokuapp.com/http://wi200484.ferozo.com/api/';
        //public ApiUrl = 'https://cors-anywhere.herokuapp.com/https://mundocanjeapp.tk/api/';
        this.ApiUrl = "https://mundocanjeapp.tk/api/"; //Android
        this.ApiPostUrl = 'https://cors-anywhere.herokuapp.com/http://wi200484.ferozo.com/api/';
    }
    GlobalProvider.prototype.getUser = function () {
        return this.user;
    };
    GlobalProvider.prototype.setUser = function (user) {
        this.user = user;
    };
    GlobalProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], GlobalProvider);
    return GlobalProvider;
}());

//# sourceMappingURL=global.js.map

/***/ }),

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_product_service_product_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__other_profile_other_profile__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UsersListPage = /** @class */ (function () {
    function UsersListPage(navCtrl, loadingCtrl, navParams, serviceProd) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.serviceProd = serviceProd;
        var loading = this.loadingCtrl.create({ content: 'Cargando...' });
        loading.present();
        var IdCategoria = this.navParams.get('IdCategoria');
        if (IdCategoria == null) {
            this.getAllPerfiles(loading);
        }
        else {
            console.log("El id categoria es:" + IdCategoria);
            this.getPerfiles(IdCategoria, loading);
        }
    }
    UsersListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UsersListPage');
    };
    UsersListPage.prototype.getAllPerfiles = function (loading) {
        var _this = this;
        this.serviceProd.getAllPerfiles()
            .subscribe(function (data) {
            _this.perfilesLst = data;
            loading.dismiss();
        }, function (error) {
            console.log(error);
            loading.dismiss();
        });
    };
    UsersListPage.prototype.getPerfiles = function (idCategoria, loading) {
        var _this = this;
        this.serviceProd.getPerfilesByCategoria(idCategoria)
            .subscribe(function (data) {
            _this.perfilesLst = data;
            loading.dismiss();
        }, function (error) {
            console.log(error);
            loading.dismiss();
        });
    };
    UsersListPage.prototype.ViewProfile = function (idUsuario) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__other_profile_other_profile__["a" /* OtherProfilePage */], { IdUsuario: idUsuario });
    };
    UsersListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-users-list',template:/*ion-inline-start:"D:\ionic\MundoCanjeApp\app\appDesa\src\pages\users-list\users-list.html"*/'<ion-header class="bg-color">\n  <ion-navbar>\n      <ion-title class="text-theme">  \n        <span class="start">                \n          <img src="assets/imgs/ic_open-menu.png" (click)="perfil()">\n      </span>\n          <img src="assets/imgs/banner_mc.png" width="50%" height="50%" (click)="search()">\n          <span class="end">                \n              <img src="assets/imgs/ic_search-4.png" (click)="search()">\n          </span>\n      </ion-title>\n  </ion-navbar>\n  \n</ion-header>\n\n\n<ion-content class="bg-background">\n  <div class="categories">\n    <h2 class="text-gray d-flex">Listado de Usuarios</h2>\n</div>\n  <ion-list class="offers" *ngFor="let d of perfilesLst; let i = index">\n    \n    <ion-card class="cardUsers" (click)="ViewProfile(d.Id)"> \n      <div class="banner">\n        <img src="assets/imgs/Fondo2_1080.jpg" class="bg">\n        <div class="profile d-flex" (click)="profile()">\n            <div class="profile-img">\n                <img [src]="d.Imagen">\n            </div>\n            <h2 class="h2Card">\n                {{d.Nombre}}\n                <span class="text-gray">{{d.CantCanjes}} canjes</span>              \n                <span class="text-violet">{{d.Distancia}}</span>              \n            </h2>          \n        </div>\n      </div>\n    </ion-card>\n  \n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\ionic\MundoCanjeApp\app\appDesa\src\pages\users-list\users-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_product_service_product_service__["a" /* ProductServiceProvider */]])
    ], UsersListPage);
    return UsersListPage;
}());

//# sourceMappingURL=users-list.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_slide_register_slide__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__password_password__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_autentication_service_autentication_service__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_global_global__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_user_service_user_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_category_service_category_service__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};









//import { Observable } from 'rxjs';
var SigninPage = /** @class */ (function () {
    function SigninPage(cat, navCtrl, loadingCtrl, authService, toastController, userService, user) {
        this.cat = cat;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.authService = authService;
        this.toastController = toastController;
        this.userService = userService;
        this.user = user;
        this.login = "signin";
    }
    SigninPage.prototype.tabs = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
    };
    SigninPage.prototype.register = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__register_slide_register_slide__["a" /* RegisterSlidePage */], { tokenMail: this.mailRegister, tokenPass: this.passRegister });
        //this.navCtrl.push(RegisterSlide2Page,{tokenMail:this.mailRegister, tokenPass:this.passRegister})
    };
    SigninPage.prototype.password = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__password_password__["a" /* PasswordPage */]);
    };
    SigninPage.prototype.IngresarUsuario = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: 'Cargando...' });
        loading.present();
        console.log("El mail es: " + this.user.Mail);
        console.log("El pass es: " + this.user.password);
        this.authService.loginUser(this.user.Mail, this.user.password)
            .then(function (info) {
            console.log('Usuario conectado');
            console.log('El token es: ' + info.user.uid);
            //this.user.Token = info.user.uid;
            _this.getUserByToken(info.user.uid);
            loading.dismiss();
        })
            .catch(function (error) {
            _this.presentToast('Usuario o clave incorrecto');
            console.log("Errorororor......");
            loading.dismiss();
        });
    };
    SigninPage.prototype.presentToast = function (texto) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: texto,
                            duration: 3000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    SigninPage.prototype.getUserByToken = function (token) {
        var _this = this;
        this.userService.getUserByToken(token)
            //this.cat.GetCategorias2()
            .subscribe(function (data) {
            //this.presentToast('OK');
            if (data == null) {
                _this.presentToast('Usuario o clave incorrecto');
            }
            else {
                console.log(data);
                var data2 = JSON.stringify(data);
                _this.dataApi = JSON.parse(data2);
                _this.user.Id = _this.dataApi.Id;
                _this.user.Mail = _this.dataApi.Mail;
                _this.user.password = "";
                _this.user.Nombre = _this.dataApi.Nombre;
                _this.user.Telefono = _this.dataApi.Telefono;
                _this.user.Whatsapp = _this.dataApi.Whatsapp;
                _this.user.Imagen = _this.dataApi.Imagen;
                _this.user.Token = token;
                _this.user.Direccion = _this.dataApi.Direccion;
                _this.user.Razon_Social = _this.dataApi.Razon_Social;
                _this.user.Estado = _this.dataApi.Estado;
                _this.user.IdTipo = _this.dataApi.IdTipo;
                _this.user.Cuit = _this.dataApi.Cuit;
                _this.user.IdPlan = _this.dataApi.IdPlan;
                _this.user.IdLocalidad = _this.dataApi.IdLocalidad;
                _this.user.Fecha_Alta = _this.dataApi.Fecha_Alta;
                _this.user.RubroUsuario = _this.dataApi.RubroUsuario;
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */], { tokenU: token });
            }
        }, function (error) {
            _this.presentToast('Error123: ' + error.message);
            console.log(error);
        });
    };
    SigninPage.prototype.presentLoadingDefault = function () {
        var loading = this.loadingCtrl.create({ content: 'Cargando...' });
        loading.present();
        /*
          setTimeout(() => {
            loading.dismiss();
          }, 5000);
          */
    };
    SigninPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signin',template:/*ion-inline-start:"D:\ionic\MundoCanjeApp\app\appDesa\src\pages\signin\signin.html"*/'<ion-header class="bg-transparent">\n\n    <!-- <ion-navbar>\n\n        <ion-title>\n\n            <span class="start" (click)="register()">\n\n                <span  style="font-size: 2.5rem;">+ </span>\n\n                {{\'register\' | translate}}\n\n            </span>\n\n        </ion-title>\n\n    </ion-navbar> -->\n\n</ion-header>\n\n\n\n<ion-content class="bg-color">\n\n    <div class="banner111">\n\n        <img src="assets/imgs/fondo1-3.png" >\n\n<!--         <div class="logo">\n\n            <img src="assets/imgs/Logomundo-canje.png">\n\n            \n\n        </div> -->\n\n    </div>\n\n    \n\n\n\n    <div class="defult-tab bg-white">\n\n        <ion-segment [(ngModel)]="login" padding-left padding-right>\n\n            <ion-segment-button value="signin" class="text-white">\n\n                INICIAR SESIÓN\n\n            </ion-segment-button>\n\n            <ion-segment-button value="signup" class="text-white">\n\n                REGISTRARME\n\n            </ion-segment-button>\n\n        </ion-segment>\n\n    </div>\n\n    <div [ngSwitch]="login">\n\n        <div class="form" *ngSwitchCase="\'signin\'">        \n\n            <ion-list no-lines padding-left padding-right>\n\n                \n\n                <h4 style="color:#000000d9"><span style="color:#22709a">¡Hola!</span> Te damos la bienvenida.</h4>\n\n                \n\n                <!-- <ion-item>\n\n                    <ion-label floating>{{\'email_address\' | translate}}</ion-label>\n\n                    <ion-input type="email" [(ngModel)]="user.Mail" value="samanthasmith@mail.com"></ion-input>\n\n                </ion-item>\n\n                <ion-item class="password">\n\n                    <ion-label floating>{{\'password\' | translate}}</ion-label>\n\n                    <ion-input type="password" [(ngModel)]="user.password" class="password" value="123456"></ion-input>\n\n                    <h5 class="text-theme" item-end (click)="password()">{{\'forgot\' | translate}}</h5>\n\n                </ion-item> -->\n\n                <ion-item>\n\n                    <img class="imglogin" src="assets/imgs/mail.png" item-start>\n\n                    <ion-input item-end type="email" style="margin-top: 14px;" [(ngModel)]="user.Mail" placeholder="Email" value="samanthasmith@mail.com"></ion-input>\n\n                </ion-item>\n\n                <ion-item>\n\n                    <img class="imglogin" src="assets/imgs/padlock.png" item-start>                    \n\n                    <ion-input style="margin-top: 14px;" type="password" class="password"  item-right [(ngModel)]="user.password" placeholder="Clave" value="123456"></ion-input>\n\n                </ion-item>                \n\n                    <h5 class="text-theme recovery" item-end (click)="password()">{{\'forgot\' | translate}}</h5>\n\n                \n\n                \n\n\n\n                <button ion-button block class="btn" style="margin-bottom: 25px;" (click)="IngresarUsuario()" round>{{\'Enter\' | translate}}</button>\n\n            <!--     \n\n                <button ion-button block class="btn-xs" (click)="tabs()" round>{{\'enter_invited\' | translate}}</button>\n\n                 -->\n\n                <div class="socile d-flex">\n\n                    <button ion-button icon-start block outline class="btn text-blue" round>\n\n                        <ion-icon> <img src="assets/imgs/ic_facebook.png"></ion-icon>\n\n                        {{\'facebook\' | translate}}\n\n                    </button>\n\n                    <button ion-button icon-start block outline class="btn text-blue" round>\n\n                        <ion-icon class="google"> <img src="assets/imgs/ic_google.png"></ion-icon>\n\n                        {{\'google\' | translate}}\n\n                    </button>\n\n                </div>\n\n            </ion-list>\n\n        </div>\n\n        <div class="form" *ngSwitchCase="\'signup\'">        \n\n            <ion-list no-lines padding-left padding-right>\n\n                \n\n                <h4 style="color:#000000d9"><span style="color:#22709a">¡Hola!</span> Creá tu nueva cuenta.</h4>\n\n                \n\n                <ion-item>\n\n                    <img class="imglogin" src="assets/imgs/mail.png" item-start>\n\n                    <ion-input style="margin-top: 14px;" item-end type="email" [(ngModel)]="mailRegister" placeholder="Email"></ion-input>\n\n                </ion-item>\n\n                <ion-item>\n\n                    <img class="imglogin" src="assets/imgs/padlock.png" item-start>\n\n                    <ion-input style="margin-top: 14px;" type="password" class="password" [(ngModel)]="passRegister" item-right placeholder="Clave"></ion-input>\n\n                </ion-item>\n\n\n\n                <button ion-button block class="btn" (click)="register()" round>Continuar</button>\n\n                \n\n            </ion-list>\n\n        </div>\n\n    </div>\n\n<!-- \n\n    <div [ngSwitch]="login" class="difault-form bg-light" padding>\n\n        <ion-list *ngSwitchCase="\'signin\'">\n\n            <ion-item class="bg-light">\n\n                <ion-input type="email" [(ngModel)]="user.Mail" placeholder="E-mail" value="test@test.com"></ion-input>\n\n            </ion-item>\n\n            <ion-item class="bg-light">\n\n                <ion-input type="password" [(ngModel)]="user.password" placeholder="Contraseña" value="test1234"></ion-input>                \n\n            </ion-item>\n\n            <br/><br/>\n\n            <small class="password" (click)="forgotpassword()">¿Te olvidaste la contraseña?</small>\n\n        \n\n            \n\n            <button ion-button full class="btn sucess" (click)="IngresarUsuario()">Ingresar</button>\n\n            <button ion-button full class="btn orange" (click)="location()">Ingresar como Invitado</button>\n\n            \n\n        </ion-list>\n\n        <ion-list *ngSwitchCase="\'signup\'">\n\n            <ion-item class="bg-light">\n\n                <ion-input type="email" [(ngModel)]="user.Mail" placeholder="E-mail" value=""></ion-input>\n\n            </ion-item>\n\n            <ion-item class="bg-light">\n\n                <ion-input type="text" [(ngModel)]="user.Nombre" placeholder="Nombre" value=""></ion-input>\n\n            </ion-item>\n\n            <ion-item class="bg-light">\n\n                <ion-input type="password" [(ngModel)]="user.password" placeholder="Contraseña" value=""></ion-input>\n\n            </ion-item>\n\n            <br>\n\n            <button ion-button full class="btn sucess" (click)="RegistrarUsuario()">Registrarse</button>\n\n        </ion-list>\n\n    </div> -->\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionic\MundoCanjeApp\app\appDesa\src\pages\signin\signin.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__providers_category_service_category_service__["a" /* CategoryServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5__providers_autentication_service_autentication_service__["a" /* AutenticationServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_7__providers_user_service_user_service__["a" /* UserServiceProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_global_global__["a" /* GlobalProvider */]])
    ], SigninPage);
    return SigninPage;
}());

//# sourceMappingURL=signin.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutenticationServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__(708);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AutenticationServiceProvider = /** @class */ (function () {
    function AutenticationServiceProvider(http) {
        this.http = http;
        console.log('Hello AutenticationServiceProvider Provider');
    }
    AutenticationServiceProvider.prototype.registerUser = function (usuario, clave) {
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"]().createUserWithEmailAndPassword(usuario, clave)
                .then(function (res) { return resolve(res); }, function (err) { return reject(err); });
        });
    };
    AutenticationServiceProvider.prototype.loginUser = function (usuario, clave) {
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"]().signInWithEmailAndPassword(usuario, clave)
                .then(function (res) { return resolve(res); }, function (err) { return reject(err); });
        });
    };
    AutenticationServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], AutenticationServiceProvider);
    return AutenticationServiceProvider;
}());

//# sourceMappingURL=autentication-service.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_global__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NotificationServiceProvider = /** @class */ (function () {
    function NotificationServiceProvider(http, global) {
        this.http = http;
        this.global = global;
        //console.log('Hello TerminosServiceProvider Provider');
    }
    NotificationServiceProvider.prototype.GetNotificacionesByUsuario = function (idUsuario) {
        return this.http.get(this.global.ApiUrl + 'Notificaciones/NotificacionesByUsuario/' + idUsuario);
    };
    NotificationServiceProvider.prototype.GetCantNotificacionesByUsuario = function (idUsuario) {
        return this.http.get(this.global.ApiUrl + 'Notificaciones/CantNotificacionesByUser/' + idUsuario);
    };
    NotificationServiceProvider.prototype.SendNotificationPush = function (titulo, descripcion) {
        var postData2 = {
            "Titulo": titulo,
            "Descripcion": descripcion
        };
        //return this.http.post(this.global.ApiUrl+'NotificationPush', postData2,{headers: {'Accept': 'application/json','Content-Type': 'application/json', }});    
        return this.http.post(this.global.ApiPostUrl + 'NotificationPush', postData2, { headers: { 'Accept': 'application/json', 'Content-Type': 'application/json', } });
    };
    NotificationServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__providers_global_global__["a" /* GlobalProvider */]])
    ], NotificationServiceProvider);
    return NotificationServiceProvider;
}());

//# sourceMappingURL=notification-service.js.map

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_filters2_filters2__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__search_search__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_category_service_category_service__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CategoriesPage = /** @class */ (function () {
    function CategoriesPage(navCtrl, modalCtrl, serviceCat) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.serviceCat = serviceCat;
        this.ObtenerCategorias();
    }
    CategoriesPage.prototype.search = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__search_search__["a" /* SearchPage */]);
        modal.present();
    };
    CategoriesPage.prototype.category_result = function (idCategoria) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_filters2_filters2__["a" /* Filters2Page */], { IdCategoria: idCategoria });
    };
    CategoriesPage.prototype.ObtenerCategorias = function () {
        var _this = this;
        this.serviceCat.GetCategorias()
            .subscribe(function (data) {
            _this.categoriasLst = data;
            console.log(data);
            console.log("La categorìa 1: " + _this.categoriasLst[0].Nombre);
        }, function (error) { console.log(error); });
    };
    CategoriesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-categories',template:/*ion-inline-start:"D:\ionic\MundoCanjeApp\app\appDesa\src\pages\categories\categories.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>{{\'categories\' | translate}}\n            <!-- <span class="end">\n                <img src="assets/imgs/ic_search.png" (click)="search()">\n            </span>-->\n        </ion-title> \n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-background">\n   <!--  <ion-list no-lines>        \n        <ion-item *ngFor="let d of categoriasLst; let i = index" (click)="category_result(d.Id)">\n            <img [src]="d.Imagen" class="bg">\n            <div text-center class="text">\n                <h2 class="text-white">{{d.Nombre | translate}}</h2>\n                <p class="text-gray">{{d.CantProductos}} Canjes</p>\n            </div>\n        </ion-item>\n    </ion-list> -->\n    <ion-list class="offers" >\n        <ion-card>                  \n          <ion-row>\n            <ion-col col-6  (click)="category_result(d.Id)" class="colCategoryBloque" *ngFor="let d of categoriasLst">\n              <ion-fab class="fabCategoryBloque" vertical="top" horizontal="end" edge slot="fixed">\n                <span>{{d.CantProductos}}</span>\n             </ion-fab>\n              <img  [src]="d.Logo" class="imgCategoryBloque">          \n              <ion-card-content class="cardCategoryBloque">\n                <p class="pCategoryBloque">{{d.Nombre}}</p>                            \n              </ion-card-content>\n            </ion-col>\n          </ion-row>\n        </ion-card>\n      </ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\ionic\MundoCanjeApp\app\appDesa\src\pages\categories\categories.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_4__providers_category_service_category_service__["a" /* CategoryServiceProvider */]])
    ], CategoriesPage);
    return CategoriesPage;
}());

//# sourceMappingURL=categories.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyCategoriesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_categoria_service_user_categoria_service__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_global__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var MyCategoriesPage = /** @class */ (function () {
    function MyCategoriesPage(navCtrl, user, toastController, navParams, loadingCtrl, userCatService) {
        this.navCtrl = navCtrl;
        this.user = user;
        this.toastController = toastController;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.userCatService = userCatService;
        this.categoriasSelect = [];
        this.catSelect = [];
        this.showButton = true;
        this.vTitulo = "Mis Preferencias de Canje";
        var loading = this.loadingCtrl.create({ content: 'Cargando...' });
        loading.present();
        this.idUsuario = this.navParams.get('IdUsuario'); //Usuario de interes
        if (this.idUsuario != null) {
            this.showButton = false;
            this.vTitulo = "Categorías de Canje";
            this.GetCategoriasByUsuario(this.idUsuario, loading);
        }
        else {
            this.GetCategoriasByUsuario(this.user.Id, loading);
        }
    }
    MyCategoriesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MyCategoriesPage');
    };
    MyCategoriesPage.prototype.GetCategoriasByUsuario = function (idUsuario, loading) {
        var _this = this;
        this.userCatService.getUsuarioCategoriaByUsuario(idUsuario)
            .subscribe(function (data) {
            _this.categoriasUserLst = data;
            loading.dismiss();
            for (var i in data) {
                if (data[i].Checked) {
                    _this.catSelect.push(data[i].IdCategoria);
                }
            }
        }, function (error) {
            console.log(error);
            loading.dismiss();
        });
    };
    MyCategoriesPage.prototype.checkboxClick = function (e, idCategoria) {
        var categoriaSel = 0;
        if (e.checked) {
            this.categoriasSelect.push({ Id: parseFloat(idCategoria), Nombre: 'AAA' });
            this.catSelect.push(idCategoria);
        }
        else {
            var index2 = this.catSelect.indexOf(idCategoria);
            if (index2 > -1) {
                this.catSelect.splice(index2, 1);
            }
        }
        console.log("La cantidad es: " + this.catSelect.length);
    };
    MyCategoriesPage.prototype.GuardarPreferencias = function () {
        var _this = this;
        this.userCatService.DelUsuarioCategoria(this.user.Id)
            .subscribe(function (data) {
            console.log("Datos Eliminados");
            ////////////Registrar categorias/////////////////////////
            var SaveCateg = true;
            _this.catSelect.forEach(function (item) {
                if (item > 0) {
                    console.log(item);
                    _this.userCatService.postUsuarioCategoria(_this.user.Id, item.toString())
                        .subscribe(function (data) {
                        console.log("Las categorias se registraron OK");
                    }, function (error) {
                        console.log("ERROR al guardar la categoria: " + error);
                        SaveCateg = false;
                    });
                }
            });
            if (!SaveCateg) {
                _this.presentToast('Error. No se pudieron grabar las categorías.');
            }
            else {
                _this.presentToast('OK. Los cambios se guardaron correctamente.');
            }
        }, function (error) { console.log("Error al registrase"); });
    };
    MyCategoriesPage.prototype.presentToast = function (texto) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: texto,
                            duration: 3000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    MyCategoriesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-my-categories',template:/*ion-inline-start:"D:\ionic\MundoCanjeApp\app\appDesa\src\pages\my-categories\my-categories.html"*/'<ion-header class="bg-transparent">\n  <ion-navbar>\n      <ion-title>{{vTitulo}}</ion-title>\n  </ion-navbar>\n  <div class="banner">\n      <img src="assets/imgs/Fondo2_1080.jpg" class="bg">\n      <h4 class="d-flex text-white">\n          <ion-badge item-end>{{catSelect.length}}</ion-badge>\n          Categorías elegidas.\n      </h4>\n  </div>\n</ion-header>\n\n<ion-content class="bg-background">\n  <div class="form">        \n  <ion-list no-lines *ngFor="let d of categoriasUserLst; let i = index">\n      <ion-item>\n        <ion-label>{{d.NombreCategoria}} </ion-label>\n        <ion-checkbox color="light" (ionChange)="checkboxClick($event, d.IdCategoria)" [checked]="d.Checked"></ion-checkbox>\n      </ion-item>\n    \n      <!-- <ion-item>\n        <ion-label>Elegir todas</ion-label>\n        <ion-checkbox color="light" (click)="checkAll()"></ion-checkbox>\n      </ion-item> -->     \n      \n      \n     \n\n    </ion-list>\n\n    <button *ngIf="showButton" ion-button block class="btn" (click)="GuardarPreferencias()" round>\n      Guardar &nbsp;&nbsp;   \n      <ion-icon name="arrow-round-forward"></ion-icon>\n    </button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\ionic\MundoCanjeApp\app\appDesa\src\pages\my-categories\my-categories.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__providers_user_categoria_service_user_categoria_service__["a" /* UserCategoriaServiceProvider */]])
    ], MyCategoriesPage);
    return MyCategoriesPage;
}());

//# sourceMappingURL=my-categories.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserCategoriaServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_global__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserCategoriaServiceProvider = /** @class */ (function () {
    function UserCategoriaServiceProvider(http, global) {
        this.http = http;
        this.global = global;
    }
    UserCategoriaServiceProvider.prototype.getUsuariosCategorias = function () {
        return this.http.get(this.global.ApiUrl + 'Usuarios_Categorias');
    };
    UserCategoriaServiceProvider.prototype.getUsuarioCategoriaByUsuario = function (IdUser) {
        return this.http.get(this.global.ApiUrl + 'Usuarios_Categorias/GetCategoriasByUsuario/' + IdUser);
    };
    /*   postUsuarioCategoria(usuarioCateg){
        usuarioCateg.Id="0";
        console.log(usuarioCateg);
        return this.http.post(this.global.ApiUrl+'Usuarios_Categorias/', usuarioCateg);
      } */
    UserCategoriaServiceProvider.prototype.postUsuarioCategoria = function (idUsuario, idCategoria) {
        var postData2 = {
            "IdUsuario": idUsuario,
            "IdCategoria": idCategoria,
            "Observacion": ""
        };
        //return this.http.post(this.global.ApiUrl+'Usuarios_Categorias', postData2,{headers: {'Accept': 'application/json','Content-Type': 'application/json', }});    
        return this.http.post(this.global.ApiPostUrl + 'Usuarios_Categorias', postData2, { headers: { 'Accept': 'application/json', 'Content-Type': 'application/json', } });
    };
    UserCategoriaServiceProvider.prototype.putUsuarioCategoria = function (usuarioCateg) {
        console.log(usuarioCateg);
        //return this.http.put(this.global.ApiUrl+'Usuarios_Categorias/'+usuarioCateg.Id, usuarioCateg);
        return this.http.put(this.global.ApiPostUrl + 'Usuarios_Categorias/' + usuarioCateg.Id, usuarioCateg);
    };
    UserCategoriaServiceProvider.prototype.DelUsuarioCategoria = function (idUsuario) {
        //return this.http.delete(this.global.ApiUrl+'Usuarios_Categorias/'+idUsuario);
        return this.http.delete(this.global.ApiPostUrl + 'Usuarios_Categorias/' + idUsuario);
    };
    UserCategoriaServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__providers_global_global__["a" /* GlobalProvider */]])
    ], UserCategoriaServiceProvider);
    return UserCategoriaServiceProvider;
}());

//# sourceMappingURL=user-categoria-service.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_global__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the CategoryServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ChatServiceProvider = /** @class */ (function () {
    function ChatServiceProvider(http, global) {
        this.http = http;
        this.global = global;
    }
    ChatServiceProvider.prototype.getChats = function () {
        return this.http.get(this.global.ApiUrl + 'chats');
    };
    ChatServiceProvider.prototype.getChatsByUsuario = function (IdUser) {
        return this.http.get(this.global.ApiUrl + 'chats/ChatsByIdUsuario/' + IdUser);
    };
    ChatServiceProvider.prototype.postChat = function (chat) {
        chat.Id = "0";
        console.log(chat);
        //return this.http.post(this.global.ApiUrl+'Chats/', chat);
        return this.http.post(this.global.ApiPostUrl + 'Chats/', chat);
    };
    ChatServiceProvider.prototype.putChat = function (chat) {
        console.log(chat);
        //return this.http.put(this.global.ApiUrl+'Chats/'+chat.Id, chat);
        return this.http.put(this.global.ApiPostUrl + 'Chats/' + chat.Id, chat);
    };
    ChatServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__providers_global_global__["a" /* GlobalProvider */]])
    ], ChatServiceProvider);
    return ChatServiceProvider;
}());

//# sourceMappingURL=chat-service.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CiudadesServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_global__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CiudadesServiceProvider = /** @class */ (function () {
    function CiudadesServiceProvider(http, global) {
        this.http = http;
        this.global = global;
    }
    CiudadesServiceProvider.prototype.GetCiudades = function () {
        console.log("Obteniendo la ciudad de: " + this.global.ApiUrl);
        return this.http.get(this.global.ApiUrl + 'localidades/');
    };
    CiudadesServiceProvider.prototype.GetCiudadesByIdPais = function (idPais) {
        return this.http.get(this.global.ApiUrl + 'Localidades/LocalidadesByPais/' + idPais);
    };
    CiudadesServiceProvider.prototype.GetPaises = function () {
        console.log("Obteniendo el pais de: " + this.global.ApiUrl);
        return this.http.get(this.global.ApiUrl + 'paises/');
    };
    CiudadesServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__providers_global_global__["a" /* GlobalProvider */]])
    ], CiudadesServiceProvider);
    return CiudadesServiceProvider;
}());

//# sourceMappingURL=ciudades-service.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__match_match__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_notification_service_notification_service__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_calificacion_service_calificacion_service__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_pedidos_service_pedidos_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_global_global__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__addreview_addreview__ = __webpack_require__(175);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ReviewPage = /** @class */ (function () {
    function ReviewPage(navCtrl, pedidoService, calificacionServ, user, notificacionService, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.pedidoService = pedidoService;
        this.calificacionServ = calificacionServ;
        this.user = user;
        this.notificacionService = notificacionService;
        this.loadingCtrl = loadingCtrl;
        this.cantNotificaciones = 0;
        this.miPuntaje = 0;
        var loading = this.loadingCtrl.create({ content: 'Cargando...' });
        loading.present();
        this.getMiPuntuacion();
        this.getNotificaciones(loading);
    }
    ReviewPage.prototype.VerCalificacion = function (canje) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__addreview_addreview__["a" /* AddreviewPage */], { idUs: canje.IdUsuario,
            nombreUs: canje.NombreUsuario,
            imgUs: canje.ImgUsuario,
            idPedido: canje.IdPedido });
    };
    ReviewPage.prototype.ViewMatch = function (idPedido) {
        var _this = this;
        //Buscar el pedido por Id,
        this.pedidoService.getPedidosById(idPedido)
            .subscribe(function (data) {
            //this.presentToast('OK');
            if (data != null) {
                console.log(data);
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__match_match__["a" /* MatchPage */], { canjePedido: data });
            }
        }, function (error) {
            console.log(error);
        });
    };
    ReviewPage.prototype.getMiPuntuacion = function () {
        var _this = this;
        var userID = this.user.Id;
        this.calificacionServ.getMiPromedioCalificado(userID)
            .subscribe(function (data) {
            _this.miPuntaje = data;
        }, function (error) {
            console.log(error);
        });
    };
    ReviewPage.prototype.getNotificaciones = function (loading) {
        var _this = this;
        var userID = this.user.Id;
        this.notificacionService.GetNotificacionesByUsuario(userID)
            .subscribe(function (data) {
            _this.notificacionesLst = data; // get data in result variable
            _this.cantNotificaciones = _this.notificacionesLst.length;
            loading.dismiss();
        }, function (error) {
            console.log(error);
            loading.dismiss();
        });
    };
    ReviewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-review',template:/*ion-inline-start:"D:\ionic\MundoCanjeApp\app\appDesa\src\pages\review\review.html"*/'<ion-header class="bg-transparent">\n    <ion-navbar>\n        <ion-title>{{\'notifications\' | translate}}</ion-title>\n    </ion-navbar>\n    <div class="banner">\n        <img src="assets/imgs/Fondo2_1080.jpg" class="bg">\n        <h4 class="d-flex text-white">\n            <ion-badge item-end>{{miPuntaje}}\n                <ion-icon name="md-star"></ion-icon>\n            </ion-badge>\n            {{cantNotificaciones}} Notificaciones nuevas\n        </h4>\n    </div>\n</ion-header>\n\n<ion-content class="bg-background">\n    <ion-list no-lines *ngFor="let d of notificacionesLst; let i = index">\n        <ion-item (click)="d.Tipo==\'CALIFICACION\' ? VerCalificacion(d) : ViewMatch(d.IdPedido)">\n            <div class="item_header d-flex">\n                <div class="profile d-flex">\n                    <div class="profile-img">\n                        <img [src]="d.ImgUsuario">\n                    </div>\n                    <h2>\n                        {{d.NombreUsuario}}\n                        <span class="text-gray">{{d.FechaNotificacion | date:"dd/MM"}}</span>\n                    </h2>\n                </div>\n                \n                <div class="rating end">\n                    <ion-icon name="md-star" [ngClass]="{\'acteive\' : d.PuntajeUsuario-1>=0}"></ion-icon>\n                    <ion-icon name="md-star" [ngClass]="{\'acteive\' : d.PuntajeUsuario-2>=0}"></ion-icon>\n                    <ion-icon name="md-star" [ngClass]="{\'acteive\' : d.PuntajeUsuario-3>=0}"></ion-icon>\n                    <ion-icon name="md-star" [ngClass]="{\'acteive\' : d.PuntajeUsuario-4>=0}"></ion-icon>\n                    <ion-icon name="md-star" [ngClass]="{\'acteive\' : d.PuntajeUsuario-5>=0}"></ion-icon>\n                </div> \n               \n            </div>\n            <p class="text-black text">\n                {{d.Observacion}}\n            </p>\n        </ion-item>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\ionic\MundoCanjeApp\app\appDesa\src\pages\review\review.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__providers_pedidos_service_pedidos_service__["a" /* PedidosServiceProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_calificacion_service_calificacion_service__["a" /* CalificacionServiceProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_notification_service_notification_service__["a" /* NotificationServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
    ], ReviewPage);
    return ReviewPage;
}());

//# sourceMappingURL=review.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_pedidos_service_pedidos_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_global_pedido_global_pedido__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__chatting_chatting__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__other_profile_other_profile__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var MatchPage = /** @class */ (function () {
    function MatchPage(navCtrl, loadingCtrl, navParams, toastController, pedido, pedidoService) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.toastController = toastController;
        this.pedido = pedido;
        this.pedidoService = pedidoService;
        this.gender = "female";
        this.canjePedido = this.navParams.get('canjePedido');
        if (this.canjePedido.TipoMatch == "USUARIO") {
            this.canjePedido.ImgProductoInteres = this.canjePedido.ImgUsuarioSolicita;
            this.canjePedido.NombreProductoInteres = this.canjePedido.Nombre_UsuarioSolicita;
            this.canjePedido.Comentarios = "Nueva solicitud de Usuario";
        }
    }
    MatchPage.prototype.tabs = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
    };
    MatchPage.prototype.goToSlide = function () {
        this.slides.slideTo(2, 500);
    };
    MatchPage.prototype.AceptaMatch = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: 'Cargando...' });
        loading.present();
        console.log("EL pedido aceptado es:" + this.canjePedido.Id);
        this.pedidoService.getPedidosById(this.canjePedido.Id)
            .subscribe(function (data) {
            //this.presentToast('OK');
            if (data == null) {
                _this.presentToast('Error al obtener el Canje');
                loading.dismiss();
            }
            else {
                console.log(data);
                //this.dataApi = JSON.stringify(data);
                var data2 = JSON.stringify(data);
                _this.dataApi = JSON.parse(data2);
                _this.pedido.IdProductoInteres = _this.dataApi.IdProductoInteres;
                _this.pedido.IdUsuarioSolicita = _this.dataApi.IdUsuarioSolicita;
                console.log("La Categoria es: " + _this.dataApi.CategoriaMatch);
                console.log("La pedido.FechaPedido es: " + _this.pedido.FechaPedido);
                _this.pedido.Comentarios = _this.dataApi.Comentarios;
                _this.pedido.Importe = _this.dataApi.Importe;
                _this.pedido.Id = _this.dataApi.Id;
                _this.pedido.IdPedido_Estado = "4";
                _this.pedido.IdUsuarioRecibe = _this.dataApi.IdUsuarioInteres;
                _this.pedido.TipoMatch = _this.dataApi.TipoMatch;
                _this.pedidoService.putPedido(_this.pedido)
                    .subscribe(function (data) {
                    _this.presentToast('La solicitud se aceptó');
                    //this.navCtrl.setRoot(TabsPage);
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__chatting_chatting__["a" /* ChattingPage */], { UserRecep: _this.dataApi.IdUsuarioSolicita });
                    loading.dismiss();
                }, function (error) {
                    console.log("ERROR en Save to DB: " + error);
                    loading.dismiss();
                });
                ////
            }
        }, function (error) {
            console.log(error);
            loading.dismiss();
        });
        //////////////
    };
    MatchPage.prototype.RechazaMatch = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: 'Cargando...' });
        loading.present();
        this.pedidoService.getPedidosById(this.canjePedido.Id)
            .subscribe(function (data) {
            //this.presentToast('OK');
            if (data == null) {
                _this.presentToast('Error al obtener el Canje');
                loading.dismiss();
            }
            else {
                console.log(data);
                //this.dataApi = JSON.stringify(data);
                var data2 = JSON.stringify(data);
                _this.dataApi = JSON.parse(data2);
                _this.pedido.IdProductoInteres = _this.dataApi.IdProductoInteres;
                _this.pedido.IdUsuarioSolicita = _this.dataApi.IdUsuarioSolicita;
                _this.pedido.Comentarios = _this.dataApi.Comentarios;
                _this.pedido.Importe = _this.dataApi.Importe;
                _this.pedido.Id = _this.dataApi.Id;
                _this.pedido.IdPedido_Estado = "2";
                _this.pedidoService.putPedido(_this.pedido)
                    .subscribe(function (data) {
                    _this.presentToast('La solicitud fue rechazada');
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
                    loading.dismiss();
                }, function (error) {
                    console.log("ERROR en Save to DB: " + error);
                    loading.dismiss();
                });
            }
        }, function (error) {
            console.log(error);
            loading.dismiss();
        });
    };
    MatchPage.prototype.ViewProfile = function (idUsuario) {
        console.log("Voy a ViewProfile");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__other_profile_other_profile__["a" /* OtherProfilePage */], { IdUsuario: idUsuario });
    };
    MatchPage.prototype.presentToast = function (texto) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: texto,
                            duration: 3000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Slides */])
    ], MatchPage.prototype, "slides", void 0);
    MatchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-match',template:/*ion-inline-start:"D:\ionic\MundoCanjeApp\app\appDesa\src\pages\match\match.html"*/'<ion-header>\n  <ion-navbar>\n      <!--<ion-title>{{\'match\' | translate}}<span class="end text-theme" (click)="tabs() ">{{\'save\' | translate}}</span></ion-title>-->\n\n      <ion-title class="text-theme">{{\'match\' | translate}}</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content class="bg-background">\n  <div class="form" padding-left padding-right style="margin-bottom: 60px;">\n      <ion-list no-lines >          \n          <ion-slides pager="true" autoplay="3000" loop="true">\n              <ion-slide (click)="ViewProfile(canjePedido.IdUsuarioSolicita)">\n                  <div class="store_img">\n                      <img [src]="canjePedido.ImgProductoInteres" >  \n                      <!-- <ion-badge item-end>${{canjePedido.Importe}}</ion-badge>             -->\n                      <ion-badge item-end style="background-color: #fd7821;" >Ver Perfil</ion-badge> \n                  </div>\n                  <!-- <div class="end">\n                    <ion-badge item-end (click)="ViewProfile(); $event.stopPropagation()">\n                            Ver Perfil\n                    </ion-badge>                                  \n                </div> -->\n              </ion-slide>\n              \n            </ion-slides>\n          <!-- <ion-item>\n              <ion-label floating>{{\'event_title\' | translate}}</ion-label>\n              <ion-textarea type="text" disabled="true" value="{{canjePedido.NombreProductoInteres}}"></ion-textarea>\n          </ion-item>   -->\n          <h4 style="margin-top: 5px;">{{canjePedido.NombreProductoInteres}}</h4>\n\n          <ion-item>\n            <ion-label floating>Comentarios</ion-label>\n            <ion-textarea type="text" disabled="true" value="{{canjePedido.Comentarios}}"></ion-textarea>\n        </ion-item>  \n      </ion-list>\n  </div>\n</ion-content>\n<ion-footer no-border class="d-flex">\n    <ion-icon class="material-icons text-white colorRed start" (click)="RechazaMatch()">thumb_down_alt</ion-icon>\n    <ion-icon class="material-icons text-white colorGreen end" (click)="AceptaMatch()">thumb_up_alt</ion-icon>\n  </ion-footer>\n'/*ion-inline-end:"D:\ionic\MundoCanjeApp\app\appDesa\src\pages\match\match.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_4__providers_global_pedido_global_pedido__["a" /* GlobalPedidoProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_pedidos_service_pedidos_service__["a" /* PedidosServiceProvider */]])
    ], MatchPage);
    return MatchPage;
}());

//# sourceMappingURL=match.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalificacionServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_global__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CalificacionServiceProvider = /** @class */ (function () {
    /* private calificacion: CalificacionServiceProvider;
      Id: string;
      UsuarioCalificador: string;
      UsuarioCalificado: string;
      Puntuacion: string;
      Comentario: string;
      FechaAlta: string;
      
      getCalificacion(): CalificacionServiceProvider {
        return this.calificacion;
      }
    
      setCalificacion(calificacion:CalificacionServiceProvider) {
        this.calificacion = calificacion;
      } */
    function CalificacionServiceProvider(http, global) {
        this.http = http;
        this.global = global;
    }
    CalificacionServiceProvider.prototype.getCalificacionesByUser = function (idUsuario) {
        return this.http.get(this.global.ApiUrl + 'Calificaciones/ByUsuarioCalificado/' + idUsuario);
    };
    CalificacionServiceProvider.prototype.getMiPromedioCalificado = function (idUsuario) {
        return this.http.get(this.global.ApiUrl + 'Calificaciones/MiPromedioCalificado/' + idUsuario);
    };
    /*   postCalificaciones(calificacion:CalificacionServiceProvider){
        calificacion.Id="0";
        return this.http.post(this.global.ApiUrl+'Calificaciones/', calificacion);
      } */
    CalificacionServiceProvider.prototype.postCalificaciones = function (usCalificador, usCalificado, puntuacion, comentario) {
        var postData2 = {
            "Id": 0,
            "UsuarioCalificador": usCalificador,
            "UsuarioCalificado": usCalificado,
            "Puntuacion": puntuacion,
            "Comentario": comentario,
            "FechaAlta": ""
        };
        //return this.http.post(this.global.ApiUrl+'Calificaciones', postData2,{headers: {'Accept': 'application/json','Content-Type': 'application/json', }});    
        return this.http.post(this.global.ApiPostUrl + 'Calificaciones', postData2, { headers: { 'Accept': 'application/json', 'Content-Type': 'application/json', } });
    };
    CalificacionServiceProvider.prototype.putCalificaciones = function (id, usCalificador, usCalificado, puntuacion, comentario) {
        var postData2 = {
            "Id": id,
            "UsuarioCalificador": usCalificador,
            "UsuarioCalificado": usCalificado,
            "Puntuacion": puntuacion,
            "Comentario": comentario,
            "FechaAlta": ""
        };
        //return this.http.put(this.global.ApiUrl+'Calificaciones/'+id, postData2,{headers: {'Accept': 'application/json','Content-Type': 'application/json', }});    
        return this.http.put(this.global.ApiPostUrl + 'Calificaciones/' + id, postData2, { headers: { 'Accept': 'application/json', 'Content-Type': 'application/json', } });
    };
    CalificacionServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__providers_global_global__["a" /* GlobalProvider */]])
    ], CalificacionServiceProvider);
    return CalificacionServiceProvider;
}());

//# sourceMappingURL=calificacion-service.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddreviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_global__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_calificacion_service_calificacion_service__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_pedidos_service_pedidos_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tabs_tabs__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var AddreviewPage = /** @class */ (function () {
    function AddreviewPage(navCtrl, servicePedido, loadingCtrl, toastController, navParams, user, events, calificacion) {
        this.navCtrl = navCtrl;
        this.servicePedido = servicePedido;
        this.loadingCtrl = loadingCtrl;
        this.toastController = toastController;
        this.navParams = navParams;
        this.user = user;
        this.events = events;
        this.calificacion = calificacion;
        this.usCalificadoId = this.navParams.get('idUs');
        this.usCalificadoNombre = this.navParams.get('nombreUs');
        this.usCalificadoImg = this.navParams.get('imgUs');
        this.usIdPedido = this.navParams.get('idPedido');
        console.log("El idpedido es: " + this.usIdPedido);
        this.Puntaje = 2;
    }
    AddreviewPage.prototype.tabs = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__tabs_tabs__["a" /* TabsPage */]);
    };
    AddreviewPage.prototype.logRatingChange = function (rating) {
        this.Puntaje = rating;
    };
    AddreviewPage.prototype.SendCalificacion = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: 'Cargando...' });
        loading.present();
        this.calificacion.postCalificaciones(this.user.Id, this.usCalificadoId, this.Puntaje, this.Comentarios)
            .subscribe(function (data) {
            ///////////////Se obtiene el pedido y se lo cambia de estado ////////////
            _this.servicePedido.getPedidosById(_this.usIdPedido)
                .subscribe(function (data) {
                if (data == null) {
                    _this.presentToast('Error al obtener el Canje');
                    loading.dismiss();
                }
                else {
                    var data2 = JSON.stringify(data);
                    _this.dataApiPedido = JSON.parse(data2);
                    _this.dataApiPedido.IdPedido_Estado = "5";
                    _this.servicePedido.putPedido(_this.dataApiPedido)
                        .subscribe(function (data) {
                        _this.presentToast('Se calificó correctamente');
                        _this.navCtrl.pop();
                        loading.dismiss();
                    }, function (error) {
                        loading.dismiss();
                    });
                }
            }, function (error) {
                console.log(error);
                loading.dismiss();
            });
            /////////////////////////////
        }, function (error) {
            console.log("ERROR en Save to DB: " + error);
            loading.dismiss();
        });
    };
    AddreviewPage.prototype.presentToast = function (texto) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: texto,
                            duration: 3000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('rating'),
        __metadata("design:type", Object)
    ], AddreviewPage.prototype, "rating", void 0);
    AddreviewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addreview',template:/*ion-inline-start:"D:\ionic\MundoCanjeApp\app\appDesa\src\pages\addreview\addreview.html"*/'<ion-header class="bg-transparent">\n    <ion-navbar>\n        <ion-title>Calificar</ion-title>\n    </ion-navbar>\n    <div class="banner">\n        <img src="assets/imgs/Fondo2_1080.jpg" class="bg">\n        <div class="profile d-flex" (click)="profile()">\n            <div class="profile-img">\n                <img [src]="usCalificadoImg" *ngIf="usCalificadoImg">\n            </div>\n            <h2>\n                {{usCalificadoNombre}}\n                <span class="text-gray">{{\'view_profile\' | translate}}</span>\n            </h2>\n        </div>\n    </div>\n</ion-header>\n\n<ion-content class="bg-background">\n    <div class="banner">\n        <img src="assets/imgs/background.png" class="bg">\n       \n        \n    </div>\n    <div class="form">\n        <ion-list no-lines padding-left padding-right>\n            <h4 style="color:#000000d9">¿Cómo calificás al usuario?</h4>\n            <ionic3-star-rating #rating class="rating"\n                activeIcon = "md-star"\n                defaultIcon = "md-star-outline"\n                activeColor = "#3a97c9"\n                defaultColor = "#a26bb7"\n                readonly = "false"\n                rating = "2"\n                fontSize = "40px"\n                (ratingChanged)="logRatingChange($event)">\n            </ionic3-star-rating>\n            <ion-item>\n                <!-- <ion-input type="email" placeholder="{{\'let_us_know\' | translate}}"></ion-input> -->\n                <ion-textarea type="text" [(ngModel)]="Comentarios" style="margin-top: 20px;" placeholder="Dejanos un comentario sobre el usuario."></ion-textarea>\n            </ion-item>\n            <button ion-button block class="btn" (click)="SendCalificacion()" round>Enviar Calificación</button>\n        </ion-list>\n        \n    </div>\n</ion-content>\n'/*ion-inline-end:"D:\ionic\MundoCanjeApp\app\appDesa\src\pages\addreview\addreview.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__providers_pedidos_service_pedidos_service__["a" /* PedidosServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */], __WEBPACK_IMPORTED_MODULE_3__providers_calificacion_service_calificacion_service__["a" /* CalificacionServiceProvider */]])
    ], AddreviewPage);
    return AddreviewPage;
}());

//# sourceMappingURL=addreview.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CanjesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store_store__ = __webpack_require__(709);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__eventdetail_eventdetail__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__offerdetail_offerdetail__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__search_search__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__map_map__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__edit_event_edit_event__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__new_canje_new_canje__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__match_match__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_product_service_product_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_pedidos_service_pedidos_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_user_service_user_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_global_global__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__chatting_chatting__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__addreview_addreview__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__other_profile_other_profile__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

















var CanjesPage = /** @class */ (function () {
    function CanjesPage(navCtrl, toastController, loadingCtrl, modalCtrl, userService, navParams, serviceProd, servicePedido, user) {
        this.navCtrl = navCtrl;
        this.toastController = toastController;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.userService = userService;
        this.navParams = navParams;
        this.serviceProd = serviceProd;
        this.servicePedido = servicePedido;
        this.user = user;
        this.near = "Ofrecidos";
        var loading = this.loadingCtrl.create({ content: 'Cargando...' });
        loading.present();
        this.tokenUsuario = this.navParams.get('tokenU');
        this.CanjesOfrecidos = false;
        this.CanjesRecibidos = false;
        console.log("El mail por ejemplo es:" + this.user.Mail);
        console.log("El Id por ejemplo es:" + this.user.Id);
        this.getOfrecidos(this.user.Id);
        this.getRecibidos(this.user.Id);
        this.getCanjeados(this.user.Id, loading);
    }
    CanjesPage.prototype.NuevoCanje = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__new_canje_new_canje__["a" /* NewCanjePage */]);
    };
    CanjesPage.prototype.store = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__store_store__["a" /* StorePage */]);
    };
    CanjesPage.prototype.offerdetail = function (IdProd) {
        console.log("El IdProductoMatch es:" + IdProd);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__offerdetail_offerdetail__["a" /* OfferdetailPage */], { idProd: IdProd, estado: 'canjeado' });
    };
    CanjesPage.prototype.VerCalificacion = function (canje) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_15__addreview_addreview__["a" /* AddreviewPage */], { idUs: canje.IdUsuarioSolicita,
            nombreUs: canje.Nombre_UsuarioSolicita,
            imgUs: canje.ImgUsuarioSolicita,
            idPedido: canje.Id });
    };
    CanjesPage.prototype.eventdetail = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__eventdetail_eventdetail__["a" /* EventdetailPage */]);
    };
    CanjesPage.prototype.map = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__map_map__["a" /* MapPage */]);
    };
    CanjesPage.prototype.search = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__search_search__["a" /* SearchPage */]);
        modal.present();
    };
    CanjesPage.prototype.edit_event = function (Producto) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__edit_event_edit_event__["a" /* Edit_eventPage */], { productoEdit: Producto });
    };
    CanjesPage.prototype.ViewMatch = function (pedido) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__match_match__["a" /* MatchPage */], { canjePedido: pedido });
    };
    CanjesPage.prototype.ViewProfile = function (idUsuario) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_16__other_profile_other_profile__["a" /* OtherProfilePage */], { IdUsuario: idUsuario });
    };
    CanjesPage.prototype.ViewChatting = function (IdUsuarioSolicita) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_14__chatting_chatting__["a" /* ChattingPage */], { UserRecep: IdUsuarioSolicita });
    };
    CanjesPage.prototype.getOfrecidos = function (idUsuario) {
        var _this = this;
        this.serviceProd.getProductByUser(idUsuario)
            .subscribe(function (data) {
            _this.canjesLst = data;
            if (data.length > 0) {
                _this.CanjesOfrecidos = true;
            }
        }, function (error) { console.log(error); });
    };
    CanjesPage.prototype.getRecibidos = function (idUsuario) {
        var _this = this;
        //Obtener el idUsuario  
        this.servicePedido.getPedidosRecibidosByUser(idUsuario)
            .subscribe(function (data) {
            _this.recibidosLst = data;
            if (data.length > 0) {
                _this.CanjesRecibidos = true;
            }
        }, function (error) { console.log(error); });
    };
    CanjesPage.prototype.getCanjeados = function (idUsuario, loading) {
        var _this = this;
        this.servicePedido.getPedidosConfirmadosByUser(idUsuario)
            .subscribe(function (data) {
            _this.canjeadosLst = data;
            loading.dismiss();
        }, function (error) {
            console.log(error);
            loading.dismiss();
        });
    };
    CanjesPage.prototype.presentToast = function (texto) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: texto,
                            duration: 3000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    CanjesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-canjes',template:/*ion-inline-start:"D:\ionic\MundoCanjeApp\app\appDesa\src\pages\canjes\canjes.html"*/'<ion-header class="bg-color">\n\n  <ion-navbar>\n\n      <ion-title class="text-theme">{{\'canje_title\' | translate}}         \n\n      </ion-title>\n\n  </ion-navbar>\n\n  <ion-segment [(ngModel)]="near">\n\n      <ion-segment-button value="Ofrecidos">\n\n          {{\'offers\' | translate}}\n\n      </ion-segment-button>\n\n      <ion-segment-button value="Recibidos">\n\n          {{\'requested\' | translate}}\n\n      </ion-segment-button>\n\n      <ion-segment-button value="Canjeados">\n\n          {{\'redeemed\' | translate}}\n\n      </ion-segment-button>\n\n  </ion-segment>\n\n</ion-header>\n\n\n\n<ion-content class="bg-background">\n\n  <div [ngSwitch]="near">\n\n      <!--*ngSwitchCase="\'Ofrecidos\'" No funciona con 2 *ng-->\n\n      <!-- <ion-list no-lines *ngSwitchCase="\'Ofrecidos\'"> -->\n\n<!--         <div *ngFor="let d of canjesLst; let i = index" >            \n\n            <ion-item (click)="edit_event(d)">   \n\n                    <img [src]="d.Imagen" class="bg">          \n\n                    <ion-badge item-end>\n\n                            <ion-icon name="md-stopwatch"></ion-icon>\n\n                            {{d.Ult_Dias}} Días\n\n                    </ion-badge>          \n\n                    <div class="text">\n\n                        <h2>{{d.Nombre}}</h2>\n\n                        <p class="d-flex">\n\n                        <span class="text-theme">{{d.Descripcion}}</span>\n\n                        <span class=""> | {{d.Categoria}}</span>\n\n                        <span class="end">$ {{d.Importe}}</span>\n\n                        </p>                  \n\n                    </div>\n\n            </ion-item>        \n\n        </div> -->\n\n        <div *ngSwitchCase="\'Ofrecidos\'">\n\n            <ion-list class="offers"  *ngFor="let d of canjesLst; let i = index">\n\n              <ion-card (click)="edit_event(d)">\n\n                <ion-item >\n\n                  <ion-avatar item-start>\n\n                    <img [src]="d.UsuarioImagen" style="width: 50px;height: 50px;">\n\n                  </ion-avatar>\n\n                  <h2 style="font-size: 1.9rem;padding-bottom: 2px;font-weight: 500;">{{d.Usuario}}</h2>\n\n                  <p style="font-size: 1.4rem;font-weight: normal">{{d.Fecha_Publicacion | date:\'dd/MM/yyyy\'}}</p>\n\n                  <ion-avatar item-end>\n\n                    <img style="border-radius: 0%;width: 35px;height: 35px;" src="assets/imgs/share.png">\n\n                  </ion-avatar>\n\n                </ion-item>\n\n              \n\n               <img [src]="d.Imagen">\n\n              \n\n                <ion-card-content>\n\n                  <p>{{d.Nombre}}</p>\n\n                  \n\n                  <ion-item style="padding-left: 0px;">\n\n                    <ion-avatar item-start style="margin-right: 0px;">\n\n                      <img src="assets/imgs/pin.png" style="width: 30px;height: 30px;">\n\n                    </ion-avatar>\n\n                    <p style="color: #222;font-weight: normal;">2 km Belgrano</p>                      \n\n                  </ion-item>\n\n                  <ion-item style="padding-left: 0px;">\n\n                    <ion-avatar item-start style="margin-right: 0px;">\n\n                      <img src="assets/imgs/send.png" style="width: 30px;height: 30px;border-radius:0%;">\n\n                    </ion-avatar>\n\n                    <p style="color: #3a97c9;font-weight: normal;" (click)="presentToast(\'No se puede enviar solicitudes a uno mismo\'); $event.stopPropagation()">Enviar solicitud de canje</p>                      \n\n                  </ion-item>\n\n                  \n\n                \n\n                </ion-card-content>\n\n              \n\n                <ion-row>\n\n                  <ion-col>\n\n                    <button ion-button icon-start clear small>\n\n                      <ion-icon name="thumbs-up"></ion-icon>\n\n                      <div>12 Likes</div>\n\n                    </button>\n\n                  </ion-col>\n\n                  <ion-col>\n\n                    <button ion-button icon-start clear small>\n\n                      <ion-icon name="text"></ion-icon>\n\n                      <div>4 Ofertas</div>\n\n                    </button>\n\n                  </ion-col>\n\n                  \n\n                </ion-row>\n\n              \n\n              </ion-card>\n\n            </ion-list>\n\n    \n\n    \n\n        </div>\n\n        <div class="CanjeadosEmpty" *ngIf="!CanjesOfrecidos">\n\n                <img  src="assets/imgs/NoCanjes.png" >          \n\n                <h2 >No hay canjes ofrecidos</h2>           \n\n          </div>\n\n    \n\n      <!-- </ion-list>       -->\n\n<!--       <ion-list class="ListReview" no-lines *ngSwitchCase="\'Recibidos\'" >\n\n          <div *ngFor="let d of recibidosLst">\n\n                <ion-item  (click)="ViewMatch(d)">\n\n                    <div class="item_header d-flex">\n\n                        <div class="profile d-flex">\n\n                            <div class="profile-img">\n\n                                <img [src]="d.ImgUsuarioSolicita">\n\n                            </div>\n\n                            <h2 class="text-black">\n\n                                    {{d.Nombre_UsuarioSolicita}}\n\n                                <span class="text-gray">{{d.Ult_Dias}} Días</span>\n\n                            </h2>\n\n                        </div>\n\n                        <div class="end">\n\n                                <ion-badge item-end (click)="ViewProfile(d.IdUsuarioSolicita); $event.stopPropagation()">\n\n                                        Ver Perfil\n\n                                </ion-badge>                                  \n\n                            </div>\n\n                            \n\n                    </div>\n\n                    <p class="text">\n\n                            {{d.Comentarios}}. Precio estimado ${{d.Importe}}\n\n                    </p>\n\n                </ion-item>\n\n\n\n                \n\n          </div>\n\n          <div class="RecibidosEmpty" *ngIf="!CanjesRecibidos">\n\n                <img  src="assets/imgs/NoCanjes.png" >          \n\n                <h2 >No hay canjes recibidos</h2>\n\n           \n\n          </div>          \n\n      </ion-list> -->\n\n      <div *ngSwitchCase="\'Recibidos\'" >\n\n        <ion-list class="offers" *ngFor="let d of recibidosLst; let i = index">    \n\n          <ion-card class="cardUsers" (click)="ViewMatch(d)"> \n\n            <div class="banner">\n\n              <img src="assets/imgs/Fondo2_1080.jpg" class="bg">\n\n              <!-- <ion-badge item-end style="background-color: #fd7821;" (click)="ViewProfile(d.IdUsuarioSolicita); $event.stopPropagation()">Ver Perfil</ion-badge>  -->\n\n              \n\n              \n\n              <div class="profile d-flex">\n\n                  <div class="profile-img">\n\n                      <img [src]="d.ImgUsuarioSolicita">\n\n                  </div>\n\n                  <h2 class="h2Card">\n\n                      {{d.Nombre_UsuarioSolicita}}\n\n                      <span class="text-gray">{{d.Ult_Dias}} Días</span>              \n\n                      <span class="text-violet">1 km.</span>              \n\n                  </h2>          \n\n              </div>\n\n              \n\n            </div>\n\n            <ion-badge item-end style="background-color: #fd7821;" (click)="ViewProfile(d.IdUsuarioSolicita); $event.stopPropagation()">Ver Perfil</ion-badge> \n\n          </ion-card>\n\n          \n\n        </ion-list>\n\n    </div>\n\n    <div class="RecibidosEmpty" *ngIf="!CanjesRecibidos">\n\n      <img  src="assets/imgs/NoCanjes.png" >          \n\n      <h2 >No hay canjes recibidos</h2>\n\n    </div>  \n\n     \n\n      <div *ngSwitchCase="\'Canjeados\'">\n\n        <ion-list class="offers"  *ngFor="let d of canjeadosLst; let i = index">\n\n          <ion-card>\n\n            <ion-item (click)="ViewChatting(d.IdUsuarioSolicita)">\n\n              <ion-avatar item-start>\n\n                <img [src]="d.ImgUsuarioSolicita" style="width: 50px;height: 50px;">\n\n              </ion-avatar>\n\n              <h2 style="font-size: 1.9rem;padding-bottom: 2px;font-weight: 500;">{{d.Nombre_UsuarioSolicita}}</h2>\n\n              <p style="font-size: 1.4rem;font-weight: normal">{{d.FechaPedido}}</p>\n\n              <ion-avatar item-end>\n\n                <img style="border-radius: 0%;width: 35px;height: 35px;" src="assets/imgs/share.png">\n\n              </ion-avatar>\n\n            </ion-item>\n\n          \n\n           <img [src]="d.ImgProductoInteres">\n\n          \n\n            <ion-card-content>\n\n              <p>{{d.NombreProductoInteres}} - ({{d.Desc_Estado}})</p>\n\n              \n\n              <ion-item style="padding-left: 0px;">\n\n                <ion-avatar item-start style="margin-right: 0px;">\n\n                  <img src="assets/imgs/pin.png" style="width: 30px;height: 30px;">\n\n                </ion-avatar>\n\n                <p style="color: #222;font-weight: normal;">2 km Belgrano</p>                      \n\n              </ion-item>\n\n              <ion-item (click)="VerCalificacion(d); $event.stopPropagation()" style="padding-left: 0px;">\n\n                <ion-avatar *ngIf="(!d.FueCalificado)" item-start style="margin-right: 0px;">\n\n                  <img src="assets/imgs/semi-star.png" style="width: 30px;height: 30px;border-radius:0%;">\n\n                </ion-avatar>\n\n                <p *ngIf="(!d.FueCalificado)" style="color: #65a3c4;font-weight: normal;">Calificar usuario</p>                      \n\n\n\n              </ion-item>\n\n              \n\n            \n\n            </ion-card-content>\n\n          \n\n            <ion-row>\n\n              <ion-col>\n\n                <button ion-button icon-start clear small>\n\n                  <ion-icon name="thumbs-up"></ion-icon>\n\n                  <div>12 Likes</div>\n\n                </button>\n\n              </ion-col>\n\n              <ion-col>\n\n                <button ion-button icon-start clear small>\n\n                  <ion-icon name="text"></ion-icon>\n\n                  <div>4 Ofertas</div>\n\n                </button>\n\n              </ion-col>\n\n              \n\n            </ion-row>\n\n          \n\n          </ion-card>\n\n        </ion-list>\n\n\n\n\n\n    </div>\n\n      \n\n  </div>\n\n  \n\n</ion-content>\n\n<ion-footer no-border class="d-flex">\n\n  <ion-icon class="material-icons text-white bg-theme end" (click)="NuevoCanje()">add</ion-icon>\n\n</ion-footer>'/*ion-inline-end:"D:\ionic\MundoCanjeApp\app\appDesa\src\pages\canjes\canjes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_12__providers_user_service_user_service__["a" /* UserServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_10__providers_product_service_product_service__["a" /* ProductServiceProvider */], __WEBPACK_IMPORTED_MODULE_11__providers_pedidos_service_pedidos_service__["a" /* PedidosServiceProvider */], __WEBPACK_IMPORTED_MODULE_13__providers_global_global__["a" /* GlobalProvider */]])
    ], CanjesPage);
    return CanjesPage;
}());

//# sourceMappingURL=canjes.js.map

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewCanjePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_product_service_product_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_product_global_product__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_tabs__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_category_service_category_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_global_global__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_pedidos_service_pedidos_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_global_pedido_global_pedido__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_geolocation_ngx__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_camera__ = __webpack_require__(85);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};











var NewCanjePage = /** @class */ (function () {
    function NewCanjePage(navCtrl, toastController, geolocation, productService, product, pedido, categService, user, pedidoService, camera) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.toastController = toastController;
        this.geolocation = geolocation;
        this.productService = productService;
        this.product = product;
        this.pedido = pedido;
        this.categService = categService;
        this.user = user;
        this.pedidoService = pedidoService;
        this.camera = camera;
        this.gender = "female";
        this.geolocationSuccess = function (position) {
            _this.latitude = position.coords.latitude;
            _this.longitude = position.coords.longitude;
        };
        this.ObtenerCategorias();
        this.ObtenerUbicacion();
        this.product.Nombre = "";
        this.product.Descripcion = "";
        this.product.Importe = 0;
        this.base64Image = "";
    }
    NewCanjePage.prototype.tabs = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]);
    };
    NewCanjePage.prototype.postCanje = function () {
        var _this = this;
        console.log("LAT: " + this.latitude);
        console.log("LONG: " + this.longitude);
        this.product.Id = '0';
        this.product.IdTipo = '1';
        this.product.TipoDespublicacion = '1';
        this.product.IdEstado = '1';
        if (this.product.Imagen == null) {
            this.product.Imagen = "http://mundocanje.tk/Imagenes/Productos/NoDisponible.png";
        }
        this.product.IdUsuario = this.user.Id;
        var myDate = new Date().toDateString();
        this.product.Fecha_Publicacion = myDate;
        this.product.lat = this.latitude;
        this.product.lng = this.longitude;
        this.product.Imagen = this.base64Image;
        this.productService.postProduct(this.product)
            .subscribe(function (data) {
            var data2 = JSON.stringify(data);
            _this.dataApi = JSON.parse(data2);
            _this.pedido.Id = "0";
            _this.pedido.IdProductoInteres = _this.dataApi.Id; //Poner id que devuelve el data
            _this.pedido.IdPedido_Estado = "1";
            _this.pedido.FechaPedido = myDate;
            _this.presentToast('Canje creado correctamente');
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]);
            /*
                      this.pedidoService.postPedido(this.pedido)
                      .subscribe(
                          (data)=> {
                            this.presentToast('Canje creado correctamente');
                            this.navCtrl.setRoot(TabsPage);
                          },
                          (error)=>{console.log("ERROR en Save to DB: " + error);}
                      )
            */
        }, function (error) { console.log("ERROR en Save to DB: " + error); });
    };
    NewCanjePage.prototype.presentToast = function (texto) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: texto,
                            duration: 3000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    NewCanjePage.prototype.ObtenerCategorias = function () {
        var _this = this;
        this.categService.GetCategorias()
            .subscribe(function (data) {
            _this.CategoriasLst = data;
        }, function (error) { console.log(error); });
    };
    NewCanjePage.prototype.ObtenerUbicacion = function () {
        var options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        };
        navigator.geolocation.getCurrentPosition(this.geolocationSuccess, this.onError);
    };
    NewCanjePage.prototype.onError = function (error) {
        alert("Error al obtener la posicion");
    };
    NewCanjePage.prototype.takePhoto = function (sourceType) {
        var _this = this;
        var options = {
            quality: 50,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true,
            sourceType: sourceType,
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.base64Image = 'data:image/jpeg;base64,' + imageData;
        }, function (err) {
            // Handle error
        });
    };
    NewCanjePage.prototype.AccessCamera = function () {
        this.takePhoto(1);
    };
    NewCanjePage.prototype.AccessGallery = function () {
        this.takePhoto(0);
    };
    NewCanjePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-new-canje',template:/*ion-inline-start:"D:\ionic\MundoCanjeApp\app\appDesa\src\pages\new-canje\new-canje.html"*/'<ion-header>\n\n  <ion-navbar>\n\n      <ion-title>{{\'new_canje\' | translate}}<span class="end text-theme" (click)="postCanje() ">{{\'save\' | translate}}</span></ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="bg-background">\n\n  <div class="form" padding-left padding-right>\n\n      <ion-list no-lines padding-left padding-right>\n\n          <div class="store_img">\n\n             <img [src]="base64Image" *ngIf="base64Image" />      \n\n             <!-- <ion-icon name="md-camera" class="text-white bg-theme add-pic"></ion-icon>-->\n\n              <ion-fab center style="bottom: 30px;" >\n\n                <button ion-fab style="background-color: #b9b6b6;">\n\n                    <ion-icon name="md-camera" class="text-white bg-theme add-pic"></ion-icon>\n\n                </button>\n\n                <ion-fab-list side="left">\n\n                  <button ion-fab (click)="AccessGallery()">\n\n                    <ion-icon name="md-photos" class="text-white bg-theme add-pic"></ion-icon>\n\n                  </button>\n\n                </ion-fab-list>\n\n                <ion-fab-list side="right">  \n\n                  <button ion-fab (click)="AccessCamera()">\n\n                    <ion-icon name="md-camera" class="text-white bg-theme add-pic"></ion-icon>\n\n                  </button>\n\n                </ion-fab-list>\n\n              </ion-fab>\n\n          </div>\n\n          <ion-item>\n\n              <ion-label floating>{{\'canje_name\' | translate}}</ion-label>\n\n              <ion-textarea type="text" value="" [(ngModel)]="product.Nombre"></ion-textarea>\n\n          </ion-item>           \n\n          <ion-item>\n\n                <ion-label floating>{{\'event_title\' | translate}}</ion-label>\n\n                <ion-textarea type="text" value="" [(ngModel)]="product.Descripcion"></ion-textarea>\n\n            </ion-item>            \n\n          <!--<ion-item>\n\n              <ion-label floating>{{\'address2\' | translate}}</ion-label>\n\n              <ion-input type="text" value=""></ion-input>\n\n          </ion-item>-->\n\n          \n\n          <ion-item>\n\n                <ion-label floating>{{\'categories\' | translate}}</ion-label>                \n\n              <ion-select [(ngModel)]="product.IdCategoria">>                \n\n                    <ion-option *ngFor="let iCategoria of CategoriasLst; let i = index" [value]="iCategoria.Id" >\n\n                        {{iCategoria.Nombre}} \n\n                    </ion-option>\n\n                </ion-select>\n\n          </ion-item>\n\n          <ion-row>\n\n              <ion-col col-6>\n\n                  <ion-item>\n\n                      <ion-label item-start>{{\'quantity\' | translate}}</ion-label>\n\n                      <div class="input_box d-flex" item-end>\n\n                          <ion-icon class="material-icons text-black">settings</ion-icon>\n\n                          <ion-input [(ngModel)]="product.Cantidad" type="number" value="1"></ion-input>\n\n                      </div>\n\n                  </ion-item>\n\n              </ion-col>\n\n              <ion-col col-6>\n\n                  <ion-item>\n\n                      <ion-label item-start>{{\'price\' | translate}}</ion-label>\n\n                      <div class="input_box d-flex" item-end>\n\n                          <ion-icon class="text-black" name="cash"></ion-icon>\n\n                          <ion-input type="text" value="0" [(ngModel)]="product.Importe"></ion-input>\n\n                      </div>\n\n                  </ion-item>\n\n              </ion-col>\n\n          </ion-row>\n\n      </ion-list>\n\n\n\n      \n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionic\MundoCanjeApp\app\appDesa\src\pages\new-canje\new-canje.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_geolocation_ngx__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_2__providers_product_service_product_service__["a" /* ProductServiceProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_global_product_global_product__["a" /* GlobalProductProvider */], __WEBPACK_IMPORTED_MODULE_8__providers_global_pedido_global_pedido__["a" /* GlobalPedidoProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_category_service_category_service__["a" /* CategoryServiceProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_7__providers_pedidos_service_pedidos_service__["a" /* PedidosServiceProvider */], __WEBPACK_IMPORTED_MODULE_10__ionic_native_camera__["a" /* Camera */]])
    ], NewCanjePage);
    return NewCanjePage;
}());

//# sourceMappingURL=new-canje.js.map

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListDescuentos2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_offer_edit_offer__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__edit_event_edit_event__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__eventdetail_eventdetail__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__offerdetail_offerdetail__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__search_search__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__chats_chats__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__map_map__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__account_account__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_product_service_product_service__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var ListDescuentos2Page = /** @class */ (function () {
    function ListDescuentos2Page(navCtrl, navParams, loadingCtrl, modalCtrl, prodServ) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.prodServ = prodServ;
        var loading = this.loadingCtrl.create({ content: 'Cargando...' });
        loading.present();
        var IdCategoria = this.navParams.get('IdCategoria');
        if (IdCategoria != null) {
            this.ObtenerDescuentosByCategoria(loading, IdCategoria);
        }
        else {
            this.ObtenerDescuentos(loading);
        }
    }
    ListDescuentos2Page.prototype.ObtenerDescuentos = function (loading) {
        var _this = this;
        this.prodServ.getProductByIdTipo("2")
            .subscribe(function (data) {
            _this.listDescuentos = data;
            console.log("El descuento 1: " + _this.listDescuentos[0].Nombre);
            loading.dismiss();
        }, function (error) {
            console.log(error);
            loading.dismiss();
        });
    };
    ListDescuentos2Page.prototype.ObtenerDescuentosByCategoria = function (loading, idCategoria) {
        var _this = this;
        this.prodServ.getDescuentosByIdCategoria(idCategoria)
            .subscribe(function (data) {
            _this.listDescuentos = data;
            //console.log("El descuento 1: "+ this.listDescuentos[0].Nombre);
            loading.dismiss();
        }, function (error) {
            console.log(error);
            loading.dismiss();
        });
    };
    ListDescuentos2Page.prototype.edit_offer = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__edit_offer_edit_offer__["a" /* Edit_offerPage */]);
    };
    ListDescuentos2Page.prototype.edit_event = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__edit_event_edit_event__["a" /* Edit_eventPage */]);
    };
    ListDescuentos2Page.prototype.offerdetail = function (IdProd) {
        console.log("El producto id es: " + IdProd);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__offerdetail_offerdetail__["a" /* OfferdetailPage */], { idProd: IdProd });
    };
    ListDescuentos2Page.prototype.eventdetail = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__eventdetail_eventdetail__["a" /* EventdetailPage */]);
    };
    ListDescuentos2Page.prototype.map = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__map_map__["a" /* MapPage */]);
    };
    ListDescuentos2Page.prototype.map22 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__chats_chats__["a" /* ChatsPage */]);
    };
    ListDescuentos2Page.prototype.perfil = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__account_account__["a" /* AccountPage */]);
    };
    ListDescuentos2Page.prototype.search = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__search_search__["a" /* SearchPage */]);
        modal.present();
    };
    ListDescuentos2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list-descuentos2',template:/*ion-inline-start:"D:\ionic\MundoCanjeApp\app\appDesa\src\pages\list-descuentos2\list-descuentos2.html"*/'<ion-header class="bg-color">\n  <ion-navbar>\n      <ion-title class="text-theme">  \n        <span class="start">                \n          <img src="assets/imgs/ic_open-menu.png" (click)="perfil()">\n      </span>\n          <img src="assets/imgs/banner_mc.png" width="50%" height="50%" (click)="search()">\n          <span class="end">                \n              <img src="assets/imgs/ic_search-4.png" (click)="search()">\n          </span>\n      </ion-title>\n  </ion-navbar>\n  \n</ion-header>\n\n<ion-content class="bg-background">\n  <div>\n<!--       <ion-list  class="offers" *ngFor="let d of listDescuentos; let i = index">\n          <ion-item (click)="offerdetail(d.Id)">\n              <img [src]="d.Imagen" class="bg">\n              <ion-badge item-end>\n                  <ion-icon name="md-stopwatch"></ion-icon>\n                  {{d.Ult_Dias}} Días\n              </ion-badge>\n              <div class="text">\n                  <h2>{{d.Nombre}}</h2>\n                  <p class="d-flex text-theme">\n                      {{d.Descripcion}}\n                  </p>\n              </div>\n          </ion-item>\n\n      </ion-list> -->\n      <ion-list class="offers"  *ngFor="let d of listDescuentos; let i = index">\n       \n         <ion-card (click)="offerdetail(d.Id)">  \n       <!--  <ion-card> -->\n         <ion-item >\n           <ion-avatar item-start>\n             <img [src]="d.UsuarioImagen" style="width: 80px;height: 50px;">\n           </ion-avatar>\n           <h2 style="font-size: 1.9rem;padding-bottom: 2px;font-weight: 500;">{{d.Usuario}}</h2>\n           <ion-avatar item-end>\n             <img style="border-radius: 0%;width: 35px;height: 35px;" src="assets/imgs/share.png">\n           </ion-avatar>\n         </ion-item>\n       \n           <ion-row>\n             <ion-col col-7>\n               <img [src]="d.Imagen" style="min-width: 200px;">\n             </ion-col>\n             <ion-col col-5 style="background-color: #a26bb7;">\n               <h2 class="DiscountShow">{{d.PorcentajeDesc}} </h2>\n             </ion-col>\n         </ion-row>\n       \n        <ion-card-content>\n          <p style="font-weight: 500;">{{d.Descripcion}}</p>\n          \n          <ion-item style="padding-left: 0px;">\n            <ion-avatar item-start style="margin-right: 0px;margin-bottom: 0px;">\n              <img src="assets/imgs/pin.png" style="width: 30px;height: 30px;">\n            </ion-avatar>\n            <p style="color: #222;font-weight: normal;margin-bottom: 0px;font-size: 16px;">1 km Belgrano</p>                      \n          </ion-item>\n          <ion-item style="padding-left: 0px;">\n           <ion-avatar item-start style="margin-right: 0px;margin-bottom: 0px;">\n             <img src="assets/imgs/chronometer.png" style="width: 30px;height: 30px;">\n           </ion-avatar>\n           <p style="color: #222;font-weight: normal;margin-bottom: 0px;margin-top: 3px;font-size: 16px;">Vencimiento: {{d.FechaVencimiento | date:"dd/MM"}} </p>                      \n         </ion-item>\n          <ion-item style="padding-left: 0px;">\n            <ion-avatar item-start style="margin-right: 0px;margin-bottom: 0px;">\n              <img src="assets/imgs/price-tag.png" style="width: 30px;height: 30px;border-radius:0%;">\n            </ion-avatar>\n            <p style="color: #3a97c9;font-weight: normal;margin-bottom: 0px;">Descargar Cupón</p>                      \n          </ion-item>\n          \n        \n        </ion-card-content>\n      \n        <ion-row>\n          <ion-col>\n            <button ion-button icon-start clear small>\n              <ion-icon name="thumbs-up"></ion-icon>\n              <div>12 Likes</div>\n            </button>\n          </ion-col>\n          <ion-col>\n            <button ion-button icon-start clear small>\n              <ion-icon name="text"></ion-icon>\n              <div>40 Descargas</div>\n            </button>\n          </ion-col>\n          \n        </ion-row>\n      \n      </ion-card>\n        \n     </ion-list> \n\n  </div>\n</ion-content>\n<ion-footer no-border class="d-flex">\n  <ion-icon class="material-icons text-white bg-theme end" *ngIf="near == \'offers\'" (click)="edit_offer()">add</ion-icon>\n  <ion-icon class="material-icons text-white bg-theme end" *ngIf="near == \'events\'" (click)="edit_event()">add</ion-icon>\n</ion-footer>\n'/*ion-inline-end:"D:\ionic\MundoCanjeApp\app\appDesa\src\pages\list-descuentos2\list-descuentos2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_10__providers_product_service_product_service__["a" /* ProductServiceProvider */]])
    ], ListDescuentos2Page);
    return ListDescuentos2Page;
}());

//# sourceMappingURL=list-descuentos2.js.map

/***/ }),

/***/ 209:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 209;

/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__map_map__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home2_home2__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chats_chats__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__canjes_canjes__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TabsPage = /** @class */ (function () {
    function TabsPage(navParams) {
        this.navParams = navParams;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__home2_home2__["a" /* Home2Page */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_4__canjes_canjes__["a" /* CanjesPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__chats_chats__["a" /* ChatsPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_1__map_map__["a" /* MapPage */];
        this.tokenUsuario = this.navParams.get('tokenU');
        console.log("El token del usuario es:" + this.tokenUsuario);
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\ionic\MundoCanjeApp\app\appDesa\src\pages\tabs\tabs.html"*/'<ion-tabs>\n    <ion-tab [root]="tab1Root" [rootParams]="navParams.data" tabTitle="{{\'navigate\' | translate}}" tabsHideOnSubPages="true"></ion-tab>\n    <ion-tab [root]="tab2Root" [rootParams]="navParams.data" tabTitle="{{\'canje_title\' | translate}}" tabsHideOnSubPages="true"></ion-tab>\n    <ion-tab [root]="tab3Root" [rootParams]="navParams.data" tabTitle="{{\'chats\' | translate}}" tabsHideOnSubPages="true"></ion-tab>\n    <ion-tab [root]="tab4Root" [rootParams]="navParams.data" tabTitle="{{\'map\' | translate}}" tabsHideOnSubPages="true"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"D:\ionic\MundoCanjeApp\app\appDesa\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["k" /* NavParams */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 253:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/modal-notification/modal-notification.module": [
		753,
		0
	],
	"../pages/other-profile/other-profile.module": [
		754,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 253;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_product_global_product__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_global__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the CategoryServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ProductServiceProvider = /** @class */ (function () {
    function ProductServiceProvider(http, product, global) {
        this.http = http;
        this.product = product;
        this.global = global;
    }
    ProductServiceProvider.prototype.getHome = function () {
        return this.http.get(this.global.ApiUrl + 'productos/HomeApp');
    };
    ProductServiceProvider.prototype.geProductosMap = function () {
        return this.http.get(this.global.ApiUrl + 'productos/MapApp');
    };
    ProductServiceProvider.prototype.getProductByUser = function (idUsuario) {
        return this.http.get(this.global.ApiUrl + 'productos/ProductsByUser/' + idUsuario);
    };
    ProductServiceProvider.prototype.getProductByIdTipo = function (IdTipo) {
        return this.http.get(this.global.ApiUrl + 'productos/GetProductosByIdTipo/' + IdTipo);
    };
    ProductServiceProvider.prototype.getDescuentosByIdCategoria = function (IdCategoria) {
        return this.http.get(this.global.ApiUrl + 'productos/GetDescuentosByIdCategoria/' + IdCategoria);
    };
    ProductServiceProvider.prototype.getProductById = function (id) {
        return this.http.get(this.global.ApiUrl + 'productos/' + id);
    };
    ProductServiceProvider.prototype.getProductByIdProd = function (id) {
        return this.http.get(this.global.ApiUrl + 'productos/ProductsByIdProd/' + id);
    };
    ProductServiceProvider.prototype.getProductByName = function (nombre) {
        return this.http.get(this.global.ApiUrl + 'productos/ProductsByName/' + nombre);
    };
    ProductServiceProvider.prototype.getPerfilesByCategoria = function (IdCategoria) {
        return this.http.get(this.global.ApiUrl + 'productos/GetPerfilesByCateg/' + IdCategoria);
    };
    ProductServiceProvider.prototype.getAllPerfiles = function () {
        return this.http.get(this.global.ApiUrl + 'productos/GetAllPerfiles');
    };
    ProductServiceProvider.prototype.getCanjesByCategoria = function (IdCategoria) {
        return this.http.get(this.global.ApiUrl + 'productos/GetCanjesByIdCategoria/' + IdCategoria);
    };
    ProductServiceProvider.prototype.getCanjesBySexo = function (Sexo) {
        return this.http.get(this.global.ApiUrl + 'productos/GetCanjesBySexo/' + Sexo);
    };
    ProductServiceProvider.prototype.getCanjesByUsuario = function (IdUsuario) {
        return this.http.get(this.global.ApiUrl + 'productos/GetCanjesByIdUsuario/' + IdUsuario);
    };
    ProductServiceProvider.prototype.putProduct = function (product) {
        console.log(product);
        //return this.http.put(this.global.ApiUrl+'Productos/'+product.Id, product);
        return this.http.put(this.global.ApiPostUrl + 'Productos/' + product.Id, product);
    };
    ProductServiceProvider.prototype.deleteProduct = function (product) {
        console.log(product);
        //return this.http.delete(this.global.ApiUrl+'Productos/'+product.Id);
        return this.http.delete(this.global.ApiPostUrl + 'Productos/' + product.Id);
    };
    ProductServiceProvider.prototype.postProduct = function (product) {
        product.Id = "0";
        console.log(product);
        //return this.http.post(this.global.ApiUrl+'Productos/', product);
        return this.http.post(this.global.ApiPostUrl + 'Productos/', product);
    };
    ProductServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__providers_global_product_global_product__["a" /* GlobalProductProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_global_global__["a" /* GlobalProvider */]])
    ], ProductServiceProvider);
    return ProductServiceProvider;
}());

//# sourceMappingURL=product-service.js.map

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PedidosServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_global__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_pedido_global_pedido__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PedidosServiceProvider = /** @class */ (function () {
    function PedidosServiceProvider(http, global, pedido) {
        this.http = http;
        this.global = global;
        this.pedido = pedido;
    }
    PedidosServiceProvider.prototype.getPedidosById = function (idPedido) {
        return this.http.get(this.global.ApiUrl + 'Pedidos/' + idPedido);
    };
    PedidosServiceProvider.prototype.getPedidosRecibidosByUser = function (idUsuario) {
        return this.http.get(this.global.ApiUrl + 'Pedidos/CanjesRecibidosByUsuario/' + idUsuario);
    };
    PedidosServiceProvider.prototype.getPedidosConfirmadosByUser = function (idUsuario) {
        return this.http.get(this.global.ApiUrl + 'Pedidos/CanjesConfirmadosByUsuario/' + idUsuario);
    };
    PedidosServiceProvider.prototype.postPedido = function (pedido) {
        pedido.Id = "0";
        console.log(pedido);
        //return this.http.post(this.global.ApiUrl+'Pedidos/', pedido);
        return this.http.post(this.global.ApiPostUrl + 'Pedidos/', pedido);
    };
    PedidosServiceProvider.prototype.putPedido = function (pedido) {
        //pedido.Id="0";
        console.log(pedido);
        //return this.http.put(this.global.ApiUrl+'Pedidos/'+pedido.Id, pedido);
        return this.http.put(this.global.ApiPostUrl + 'Pedidos/' + pedido.Id, pedido);
    };
    PedidosServiceProvider.prototype.UpdatePedidoState = function (pedido) {
        console.log(pedido);
        //return this.http.post(this.global.ApiUrl+'Pedidos/UpdatePedidoState/', pedido);
        return this.http.post(this.global.ApiPostUrl + 'Pedidos/UpdatePedidoState/', pedido);
    };
    PedidosServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_global_pedido_global_pedido__["a" /* GlobalPedidoProvider */]])
    ], PedidosServiceProvider);
    return PedidosServiceProvider;
}());

//# sourceMappingURL=pedidos-service.js.map

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__categories_categories__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_category_service_category_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_product_service_product_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__offerdetail_offerdetail__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__other_profile_other_profile__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_global_pedido_global_pedido__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_global_global__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_pedidos_service_pedidos_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__tabs_tabs__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_filters2_filters2__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};












var SearchPage = /** @class */ (function () {
    function SearchPage(navCtrl, toastController, pedidoService, user, pedido, loadingCtrl, viewCtrl, serviceCat, prodServ) {
        this.navCtrl = navCtrl;
        this.toastController = toastController;
        this.pedidoService = pedidoService;
        this.user = user;
        this.pedido = pedido;
        this.loadingCtrl = loadingCtrl;
        this.viewCtrl = viewCtrl;
        this.serviceCat = serviceCat;
        this.prodServ = prodServ;
        this.ObtenerCategorias();
    }
    SearchPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    SearchPage.prototype.VerCategorias = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__categories_categories__["a" /* CategoriesPage */]);
    };
    /*   category_result(){
        this.navCtrl.push(CategoryresultPage)
      }  */
    SearchPage.prototype.category_result = function (idCategoria) {
        //this.navCtrl.push(ListCanjes2Page,{IdCategoria:idCategoria});
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__pages_filters2_filters2__["a" /* Filters2Page */], { IdCategoria: idCategoria });
    };
    SearchPage.prototype.presentPrompt = function (idProd) {
        this.SendNotification(idProd, "");
    };
    SearchPage.prototype.SendNotification = function (IdProd, Comentario) {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: 'Cargando...' });
        loading.present();
        this.pedido.Id = "0";
        this.pedido.IdProductoInteres = IdProd;
        this.pedido.IdPedido_Estado = "3";
        var myDate = new Date().toDateString();
        this.pedido.FechaPedido = myDate;
        this.pedido.IdUsuarioSolicita = this.user.Id;
        this.pedido.Comentarios = Comentario;
        this.pedido.TipoMatch = "CANJE";
        this.pedidoService.postPedido(this.pedido)
            .subscribe(function (data) {
            loading.dismiss();
            _this.presentToast();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__tabs_tabs__["a" /* TabsPage */], { tokenU: _this.tokenUsuario });
        }, function (error) {
            console.log("ERROR en Save to DB: " + error);
            loading.dismiss();
        });
    };
    SearchPage.prototype.getItems = function (busqueda) {
        var val = busqueda.target.value;
        /*
        if (q.trim() == '') {
            return;
        }
        */
        this.BuscarCanjes(val);
    };
    SearchPage.prototype.BuscarCanjes = function (nombreCanje) {
        var _this = this;
        this.prodServ.getProductByName(nombreCanje)
            .subscribe(function (data) {
            _this.listBusqueda = data;
        }, function (error) { console.log(error); });
    };
    SearchPage.prototype.offerdetail = function (IdProd) {
        console.log("El producto id es: " + IdProd);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__offerdetail_offerdetail__["a" /* OfferdetailPage */], { idProd: IdProd });
    };
    SearchPage.prototype.ObtenerCategorias = function () {
        var _this = this;
        this.serviceCat.GetCategorias()
            .subscribe(function (data) {
            _this.categoriasLst = data;
        }, function (error) { console.log(error); });
    };
    SearchPage.prototype.ViewProfile = function (idUsuario) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__other_profile_other_profile__["a" /* OtherProfilePage */], { IdUsuario: idUsuario });
    };
    SearchPage.prototype.presentToast = function () {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: 'Se envió la solicitud.',
                            duration: 3000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-search',template:/*ion-inline-start:"D:\ionic\MundoCanjeApp\app\appDesa\src\pages\search\search.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            <ion-icon name="md-close" class="text-theme" (click)="dismiss()"></ion-icon>\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-background">\n    <div class="form">\n        <ion-searchbar (ionInput)="getItems($event)" placeholder="{{\'what_are_you_searching_for\' | translate}}" class="text-white"></ion-searchbar>\n        \n        <ion-list class="offers"  *ngFor="let d of listBusqueda; let i = index">\n            <ion-card>\n              <ion-item (click)="ViewProfile(d.IdUsuario)">\n                <ion-avatar item-start>\n                  <img [src]="d.UsuarioImagen" style="width: 50px;height: 50px;">\n                </ion-avatar>\n                <h2 style="font-size: 1.9rem;padding-bottom: 2px;font-weight: 500;">{{d.Usuario}}</h2>\n                <p style="font-size: 1.4rem;font-weight: normal">{{d.Fecha_Publicacion | date:\'dd/MM/yyyy\'}}</p>\n              </ion-item>          \n             <img [src]="d.Imagen">          \n              <ion-card-content>\n                <p>{{d.Nombre}}</p>              \n                <ion-item (click)="presentPrompt(d.Id)" style="padding-left: 0px;border-bottom: 0px solid #173e53 !important;">\n                  <ion-avatar item-start style="margin-right: 0px;">\n                    <img src="assets/imgs/send.png" style="width: 25px;height: 25px;border-radius:0%;">\n                  </ion-avatar>\n                  <p style="color: #3a97c9;font-weight: normal;font-size: 15px;">Enviar solicitud de canje</p>                      \n                </ion-item>\n              </ion-card-content>          \n            </ion-card>\n          </ion-list>\n    </div>\n    <div class="categories">\n        \n        \n        <ion-list class="offers" >\n          <ion-card>                  \n            <ion-row>\n              <ion-col col-6  (click)="category_result(d.Id)" class="colCategoryBloque" *ngFor="let d of categoriasLst">\n                <ion-fab class="fabCategoryBloque" vertical="top" horizontal="end" edge slot="fixed">\n                  <span>{{d.CantProductos}}</span>\n               </ion-fab>\n                <img  [src]="d.Logo" class="imgCategoryBloque">          \n                <ion-card-content class="cardCategoryBloque">\n                  <p class="pCategoryBloque">{{d.Nombre}}</p>                            \n                </ion-card-content>\n              </ion-col>\n            </ion-row>\n          </ion-card>\n        </ion-list>\n    </div>\n</ion-content>\n'/*ion-inline-end:"D:\ionic\MundoCanjeApp\app\appDesa\src\pages\search\search.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_9__providers_pedidos_service_pedidos_service__["a" /* PedidosServiceProvider */], __WEBPACK_IMPORTED_MODULE_8__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_7__providers_global_pedido_global_pedido__["a" /* GlobalPedidoProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__providers_category_service_category_service__["a" /* CategoryServiceProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_product_service_product_service__["a" /* ProductServiceProvider */]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatDetalleServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_global__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChatDetalleServiceProvider = /** @class */ (function () {
    function ChatDetalleServiceProvider(http, global) {
        this.http = http;
        this.global = global;
    }
    ChatDetalleServiceProvider.prototype.getChatsDetails = function () {
        return this.http.get(this.global.ApiUrl + 'chats');
    };
    ChatDetalleServiceProvider.prototype.getChatsDetailsByUsuario = function (IdUserEmisor, IdUserReceptor) {
        return this.http.get(this.global.ApiUrl + 'Chats_Detalles/ChatsDetailsByIdUsuario/' + IdUserEmisor + '/' + IdUserReceptor);
    };
    ChatDetalleServiceProvider.prototype.postChatDetails = function (chat) {
        chat.Id = "0";
        console.log(chat);
        //return this.http.post(this.global.ApiUrl+'Chats_Detalles/', chat);
        return this.http.post(this.global.ApiPostUrl + 'Chats_Detalles/', chat);
    };
    ChatDetalleServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__providers_global_global__["a" /* GlobalProvider */]])
    ], ChatDetalleServiceProvider);
    return ChatDetalleServiceProvider;
}());

//# sourceMappingURL=chat-detalle-service.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_service_user_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_global_global__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__signin_signin__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, userServ, toastController, user, camera) {
        this.navCtrl = navCtrl;
        this.userServ = userServ;
        this.toastController = toastController;
        this.user = user;
        this.camera = camera;
        this.shaop_category = "Dairy";
        this.base64Image = user.Imagen;
        console.log("El id de usuario es:" + user.Id);
    }
    ProfilePage.prototype.signin = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__signin_signin__["a" /* SigninPage */]);
    };
    ProfilePage.prototype.takePhoto = function (sourceType) {
        var _this = this;
        var options = {
            quality: 50,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true,
            sourceType: sourceType,
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.base64Image = 'data:image/jpeg;base64,' + imageData;
        }, function (err) {
            // Handle error
        });
    };
    ProfilePage.prototype.AccessCamera = function () {
        this.takePhoto(1);
    };
    ProfilePage.prototype.AccessGallery = function () {
        this.takePhoto(0);
    };
    ProfilePage.prototype.putUsuario = function () {
        var _this = this;
        if (this.user.Imagen == null) {
            this.user.Imagen = "http://mundocanje.tk/Imagenes/Productos/NoDisponible.png";
        }
        this.user.Imagen = this.base64Image;
        this.userServ.putUser(this.user)
            .subscribe(function (data) {
            _this.presentToast('Los cambios se guardaron correctamente');
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
        }, function (error) { console.log("ERROR en Save to DB: " + error); });
    };
    ProfilePage.prototype.presentToast = function (texto) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: texto,
                            duration: 3000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"D:\ionic\MundoCanjeApp\app\appDesa\src\pages\profile\profile.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>{{\'my_profile\' | translate}}<span class="end text-theme" (click)="putUsuario() ">{{\'save\' | translate}}</span></ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-color" overflow-scroll="false">\n    <div class="form" padding-left padding-right>\n        <ion-list no-lines padding-left padding-right>\n            <div class="store_img">\n                <img [src]="base64Image" *ngIf="base64Image" />      \n                <!-- <ion-icon name="md-camera" class="text-white bg-theme add-pic"></ion-icon>-->\n                 <ion-fab center style="bottom: 30px;" >\n                   <button ion-fab style="background-color: #b9b6b6;">\n                       <ion-icon name="md-camera" class="text-white bg-theme add-pic"></ion-icon>\n                   </button>\n                   <ion-fab-list side="left">\n                     <button ion-fab (click)="AccessGallery()">\n                       <ion-icon name="md-photos" class="text-white bg-theme add-pic"></ion-icon>\n                     </button>\n                   </ion-fab-list>\n                   <ion-fab-list side="right">  \n                     <button ion-fab (click)="AccessCamera()">\n                       <ion-icon name="md-camera" class="text-white bg-theme add-pic"></ion-icon>\n                     </button>\n                   </ion-fab-list>\n                 </ion-fab>\n             </div>\n            <ion-item>\n                <ion-label floating>{{\'shop_name\' | translate}}</ion-label>\n                <ion-input type="text" [(ngModel)]="user.Nombre" value=""></ion-input>\n            </ion-item>\n           <!--  <ion-item>\n                <ion-label floating>Telefono</ion-label>\n                <ion-input type="text" [(ngModel)]="user.Telefono" value=""></ion-input>\n            </ion-item> -->\n            <ion-item>\n                <ion-label floating>Whatsapp</ion-label>\n                <ion-input type="text" [(ngModel)]="user.Whatsapp" value=""></ion-input>\n            </ion-item>\n\n            <ion-item>\n                <ion-label floating>{{\'email_address\' | translate}}</ion-label>\n                <ion-input type="text" [(ngModel)]="user.Mail" value=""></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label floating>Direccion</ion-label>\n                <ion-input type="text" [(ngModel)]="user.Direccion" value=""></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label floating>Rubro/ Profesión</ion-label>\n                <ion-input type="text" [(ngModel)]="user.RubroUsuario" value=""></ion-input>\n            </ion-item>\n        </ion-list>\n    </div>\n</ion-content>\n'/*ion-inline-end:"D:\ionic\MundoCanjeApp\app\appDesa\src\pages\profile\profile.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_user_service_user_service__["a" /* UserServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_4__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterSlidePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_ciudades_service_ciudades_service__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_category_service_category_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_global_global__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_autentication_service_autentication_service__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_user_service_user_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_user_categoria_service_user_categoria_service__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__tabs_tabs__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};










var RegisterSlidePage = /** @class */ (function () {
    function RegisterSlidePage(navCtrl, authService, loadingCtrl, serviceCat, navParams, ciudadServ, camera, user, userService, toastController, userCatService) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.serviceCat = serviceCat;
        this.navParams = navParams;
        this.ciudadServ = ciudadServ;
        this.camera = camera;
        this.user = user;
        this.userService = userService;
        this.toastController = toastController;
        this.userCatService = userCatService;
        this.slider = [
            {
                title: "Slide 1",
                description: "ionic is a built......",
                image: "assets/imgs/slide-1.png"
            },
            {
                title: "Slide 2",
                description: "ionic is a built222......",
                image: "assets/imgs/slide-2.png"
            },
            {
                title: "Slide 3",
                description: "ionic is a built33......",
                image: "assets/imgs/slide-3.png"
            }
        ];
        this.ListSexo = [
            {
                id: "F",
                nombre: "Femenino"
            },
            {
                id: "M",
                nombre: "Masculino"
            },
            {
                id: "O",
                nombre: "Otro"
            }
        ];
        this.categoriasSelect = [{ Id: -34.619334, Nombre: "1" }];
        this.catSelect = [0];
        var loading = this.loadingCtrl.create({ content: 'Cargando...' });
        loading.present();
        this.user.Mail = this.navParams.get('tokenMail');
        this.user.password = this.navParams.get('tokenPass');
        this.user.Sexo = "Hombre"; //Por defecto por si no se selecciona en registrarse
        //console.log("El token del usuario es:"+this.tokenMail + " pass: "+this.tokenPass);
        this.ObtenerCategorias();
        this.ObtenerCiudades2();
        this.ObtenerPaises(loading);
        this.base64Image = "assets/imgs/upload.png";
        //loading.dismiss();
    }
    RegisterSlidePage.prototype.ObtenerCiudadesByPais = function (idPais) {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: 'Cargando...' });
        loading.present();
        this.ciudadServ.GetCiudadesByIdPais(idPais)
            .subscribe(function (data) {
            _this.ListCiudades = data;
            console.log("La ciudad 1: " + _this.ListCiudades[0].Nombre);
            loading.dismiss();
        }, function (error) {
            console.log(error);
            loading.dismiss();
        });
    };
    RegisterSlidePage.prototype.ObtenerPaises = function (loading) {
        var _this = this;
        this.ciudadServ.GetPaises()
            .subscribe(function (data) {
            _this.ListPaises = data;
            console.log("El pais 1: " + _this.ListPaises[0].Nombre);
            loading.dismiss();
        }, function (error) {
            console.log(error);
            loading.dismiss();
        });
    };
    RegisterSlidePage.prototype.ObtenerCiudades2 = function () {
        var _this = this;
        this.ciudadServ.GetCiudades()
            .subscribe(function (data) {
            _this.ListCiudades = data;
        }, function (error) {
            console.log(error);
        });
    };
    RegisterSlidePage.prototype.PaisSelect = function (pais) {
        console.log('Pais elegido:' + pais);
        this.ListCiudadesElegidas = this.ListCiudades.filter(function (u) { return u.IdPais == pais; });
        //this.ObtenerCiudadesByPais(pais);
    };
    RegisterSlidePage.prototype.ObtenerCategorias = function () {
        var _this = this;
        this.serviceCat.GetCategorias()
            .subscribe(function (data) {
            _this.categoriasLst = data;
            console.log("La categorìa 1: " + _this.categoriasLst[0].Nombre);
        }, function (error) { console.log(error); });
    };
    RegisterSlidePage.prototype.goToSlide = function () {
        this.slides.slideTo(2, 500);
    };
    RegisterSlidePage.prototype.slidechanged = function () {
        console.log('Se cambio de slide...');
    };
    RegisterSlidePage.prototype.swipeNext = function () {
        this.slides.slideNext();
    };
    RegisterSlidePage.prototype.swipePrev = function () {
        this.slides.slidePrev();
    };
    RegisterSlidePage.prototype.Previous = function () {
        this.navCtrl.pop();
    };
    RegisterSlidePage.prototype.checkAll = function () {
        this.selectedAll = !this.selectedAll;
    };
    RegisterSlidePage.prototype.takePhoto = function (sourceType) {
        var _this = this;
        var options = {
            quality: 50,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true,
            sourceType: sourceType,
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.base64Image = 'data:image/jpeg;base64,' + imageData;
        }, function (err) {
            // Handle error
        });
    };
    RegisterSlidePage.prototype.AccessCamera = function () {
        this.takePhoto(1);
    };
    RegisterSlidePage.prototype.AccessGallery = function () {
        this.takePhoto(0);
    };
    RegisterSlidePage.prototype.checkboxClick = function (e, idCategoria) {
        var categoriaSel = 0;
        if (e.checked) {
            this.categoriasSelect.push({ Id: parseFloat(idCategoria), Nombre: 'AAA' });
            this.catSelect.push(idCategoria);
        }
        else {
            var index2 = this.catSelect.indexOf(idCategoria);
            if (index2 > -1) {
                this.catSelect.splice(index2, 1);
            }
        }
    };
    RegisterSlidePage.prototype.SetGenero = function (Genero) {
        if (Genero == 1) {
            this.user.Sexo = "Hombre";
        }
        else {
            this.user.Sexo = "Mujer";
        }
    };
    RegisterSlidePage.prototype.RegistrarUsuario = function () {
        var _this = this;
        var tokenFb = "";
        this.authService.registerUser(this.user.Mail, this.user.password)
            .then(function (info) {
            console.log('usuario registrado');
            _this.presentToast('Registrado correctamente');
            tokenFb = info.user.uid;
            _this.user.Token = tokenFb;
            _this.user.Imagen = _this.base64Image;
            _this.user.IdPlan = "1"; //Se registra con plan básico por default.
            _this.user.IdLocalidad = _this.IdCiudad;
            _this.user.Estado = "1";
            _this.user.IdTipo = "1";
            var myDate = new Date().toDateString();
            _this.user.Fecha_Alta = myDate;
            console.log('Token ' + tokenFb);
            //this.registerToDB2.then((result) => { 
            //console.log("Registracion correcta");
            _this.userService.postUser(_this.user)
                .subscribe(function (data) {
                console.log("Registracion correcta");
                _this.user.Id = data.Id;
                ////////////Registrar categorias/////////////////////////
                var SaveCateg = true;
                _this.catSelect.forEach(function (item) {
                    if (item > 0) {
                        console.log(item);
                        _this.userCatService.postUsuarioCategoria(_this.user.Id, item.toString())
                            .subscribe(function (data) {
                            console.log("Las categorias se registraron OK");
                        }, function (error) {
                            console.log("ERROR al guardar la categoria: " + error);
                            SaveCateg = false;
                        });
                    }
                });
                if (!SaveCateg) {
                    _this.presentToast('Error. No se pudieron grabar las categorías.');
                }
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__tabs_tabs__["a" /* TabsPage */], { tokenU: tokenFb });
                //////////////////////////////////
            }, function (error) { console.log("Error al registrase"); });
            /* }).catch(error=>{
              this.presentToast(error);
              console.log("Error al registrase");
            }); */
        })
            .catch(function (error) {
            _this.presentToast(error);
            console.log("ERror......");
        });
    };
    RegisterSlidePage.prototype.presentToast = function (texto) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: texto,
                            duration: 3000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Slides */])
    ], RegisterSlidePage.prototype, "slides", void 0);
    RegisterSlidePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register-slide',template:/*ion-inline-start:"D:\ionic\MundoCanjeApp\app\appDesa\src\pages\register-slide\register-slide.html"*/'\n<!-- <ion-header>\n\n  <ion-navbar>\n    <ion-title>registerSlide</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-slides pager="true">\n    <ion-slide *ngFor=\'let slide of slider\' (ionSlideDidChange)="slidechanged">\n      <img [src]="slide.image" />\n      <h2 [innerHTML]="slide.title"></h2>\n      <p [innerHTML]="slide.description"></p>\n    </ion-slide>\n    \n  </ion-slides>\n</ion-content> -->\n\n\n<ion-header class="bg-transparent">\n <!--     <ion-navbar>\n <ion-title>{{\'register\' | translate}}</ion-title> \n</ion-navbar> \n-->\n</ion-header>\n\n<ion-content class="bg-color">\n  <div class="banner111">\n      <img src="assets/imgs/fondo1-3.png" >\n  </div>\n\n  <ion-slides pager="false">\n    <ion-slide>\n      <div class="form">        \n        <ion-list no-lines padding-left padding-right>            \n            <h4 style="color:#000000d9"><span style="color:#22709a">Paso 1.</span> Completá tus datos personales.</h4>\n            \n            <ion-item>\n                <img class="imglogin" src="assets/imgs/user-blue.png" item-start>\n                <ion-input style="margin-top: 14px;" item-end type="text" [(ngModel)]="user.Nombre" placeholder="Usuario"></ion-input>\n            </ion-item>\n            <!-- <ion-item>\n                <img class="imglogin" src="assets/imgs/phone1.png" item-start>\n                <ion-input style="margin-top: 14px;" item-right type="text" [(ngModel)]="user.Telefono" placeholder="Telefono"></ion-input>\n            </ion-item> -->\n            <ion-item>\n              <img class="imglogin" src="assets/imgs/whatsapp.png" item-start>\n              <ion-input style="margin-top: 14px;" item-right type="text" [(ngModel)]="user.Whatsapp" placeholder="Whatsapp"></ion-input>\n          </ion-item>\n            <ion-item>\n              <img class="imglogin" src="assets/imgs/location.png" item-start>\n              <ion-input style="margin-top: 14px;" item-right type="text" [(ngModel)]="user.Direccion" placeholder="Direccion"></ion-input>\n           </ion-item>\n           <ion-item>\n            <img class="imglogin" src="assets/imgs/education-cost.png" item-start>\n            <ion-input style="margin-top: 14px;" item-right type="text" [(ngModel)]="user.RubroUsuario" placeholder="Rubro/ Profesion"></ion-input>\n         </ion-item>\n<!--            <ion-item>\n            <ion-label floating>Sexo</ion-label>\n              <ion-select [(ngModel)]="IdSexo">                \n                  <ion-option *ngFor="let iCiudad of ListSexo; let i = index" [value]="iCiudad.id" >\n                      {{iCiudad.nombre}} \n                  </ion-option>\n              </ion-select>\n          </ion-item>   -->     \n          \n          <ion-list radio-group color="secondary">                \n            <div class="row">\n              <ion-col col-6 col-sm-6 col-md-6 col-lg-6 >\n                  <ion-item>\n                  <ion-label>Hombre</ion-label>\n                  <ion-radio color="secondary" checked=\'true\' (click)="SetGenero(1)" value=\'1\'></ion-radio>\n                  </ion-item>\n              </ion-col>\n              <ion-col col-6 col-sm-6 col-md-6 col-lg-6 >\n                  <ion-item>\n                  <ion-label>Mujer</ion-label>\n                  <ion-radio color="secondary" (click)="SetGenero(2)" value=\'2\'></ion-radio>\n                  </ion-item>\n              </ion-col>\n            </div>\n        \n        </ion-list>\n          <ion-item style="margin-top: 0px;">\n            <ion-label floating>Pais</ion-label>\n              <ion-select [(ngModel)]="IdPais">                \n                  <ion-option *ngFor="let iPais of ListPaises; let i = index" (ionSelect)="PaisSelect(iPais.Id)" [value]="iPais.Id" >\n                      {{iPais.Nombre}} \n                  </ion-option>\n              </ion-select>\n          </ion-item>\n          <ion-item style="margin-top: 0px;">\n            <ion-label floating>Ciudad</ion-label>\n              <ion-select [(ngModel)]="IdCiudad">                \n                  <ion-option *ngFor="let iCiudad of ListCiudadesElegidas; let i = index" [value]="iCiudad.Id" >\n                      {{iCiudad.Nombre}} \n                  </ion-option>\n              </ion-select>\n          </ion-item>\n\n            <button ion-button block class="btn" (click)="swipeNext()" round>\n              Continuar &nbsp;&nbsp;   \n              <ion-icon name="arrow-round-forward"></ion-icon>\n            </button>\n\n            <button ion-button block class="btn-xs" (click)="Previous()" round>               \n              <ion-icon name="arrow-round-back"></ion-icon>\n              &nbsp;&nbsp; Volver\n            </button>\n        </ion-list>\n    </div>\n    </ion-slide>\n    <ion-slide>\n      <div class="form">        \n        <ion-list no-lines padding-left padding-right>            \n            <h4 style="color:#000000d9"><span style="color:#22709a">Paso 2.</span> Elegí las categorías que vas a ofrecer.</h4>\n            \n            <ion-list *ngFor="let d of categoriasLst; let i = index">\n              <ion-item>\n                <ion-label>{{d.Nombre}} </ion-label>\n                <ion-checkbox color="light" (ionChange)="checkboxClick($event, d.Id)" [checked]="selectedAll"></ion-checkbox>\n              </ion-item>\n             \n              <!-- <ion-item>\n                <ion-label>Elegir todas</ion-label>\n                <ion-checkbox color="light" (click)="checkAll()"></ion-checkbox>\n              </ion-item> -->            \n            </ion-list>\n            \n            \n        \n            <button ion-button block class="btn" (click)="swipeNext()" round>\n              Continuar &nbsp;&nbsp;   \n              <ion-icon name="arrow-round-forward"></ion-icon>\n            </button>\n\n            <button ion-button block class="btn-xs" (click)="swipePrev()" round>               \n              <ion-icon name="arrow-round-back"></ion-icon>\n              &nbsp;&nbsp; Volver\n            </button>\n        </ion-list>\n    </div>\n    </ion-slide>\n    <ion-slide style="height: 80%;">\n      <div class="form">        \n        <ion-list no-lines padding-left padding-right>            \n            <h4 style="color:#000000d9"><span style="color:#22709a">Último paso!</span> Subí tu imagen de perfil.</h4>\n            \n           <div class="store_img">\n              <img [src]="base64Image" *ngIf="base64Image" />      \n               <ion-fab center style="bottom: 30px;" >\n                 <button ion-fab style="background-color: #b9b6b6;">\n                     <ion-icon name="md-camera" class="text-white bg-theme add-pic"></ion-icon>\n                 </button>\n                 <ion-fab-list side="left">\n                   <button ion-fab (click)="AccessGallery()">\n                     <ion-icon name="md-photos" class="text-white bg-theme add-pic"></ion-icon>\n                   </button>\n                 </ion-fab-list>\n                 <ion-fab-list side="right">  \n                   <button ion-fab (click)="AccessCamera()">\n                     <ion-icon name="md-camera" class="text-white bg-theme add-pic"></ion-icon>\n                   </button>\n                 </ion-fab-list>\n               </ion-fab>\n           </div> \n           <!--  <ion-list>\n              <ion-item>                \n              </ion-item>\n              \n            </ion-list>\n             -->\n            <button ion-button block class="btn" (click)="RegistrarUsuario()" round>\n              Finalizar &nbsp;&nbsp;   \n              <ion-icon name="arrow-round-forward"></ion-icon>\n            </button>\n\n            <button ion-button block class="btn-xs" (click)="swipePrev()" round>               \n              <ion-icon name="arrow-round-back"></ion-icon>\n              &nbsp;&nbsp; Volver\n            </button>\n        </ion-list>\n    </div>\n    </ion-slide>\n    \n  </ion-slides>\n <!--  \n    \n   -->\n</ion-content>\n'/*ion-inline-end:"D:\ionic\MundoCanjeApp\app\appDesa\src\pages\register-slide\register-slide.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_6__providers_autentication_service_autentication_service__["a" /* AutenticationServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__providers_category_service_category_service__["a" /* CategoryServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_ciudades_service_ciudades_service__["a" /* CiudadesServiceProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_5__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_7__providers_user_service_user_service__["a" /* UserServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_8__providers_user_categoria_service_user_categoria_service__["a" /* UserCategoriaServiceProvider */]])
    ], RegisterSlidePage);
    return RegisterSlidePage;
}());

//# sourceMappingURL=register-slide.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PasswordPage = /** @class */ (function () {
    function PasswordPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    PasswordPage.prototype.tabs = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
    };
    PasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-password',template:/*ion-inline-start:"D:\ionic\MundoCanjeApp\app\appDesa\src\pages\password\password.html"*/'<ion-header class="bg-transparent">\n    <ion-navbar>\n        <ion-title>{{\'forgot_password\' | translate}}</ion-title>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content class="bg-color">\n    <div class="banner">\n        <img src="assets/imgs/background.png" class="background">\n        <div class="text">\n            <p class="text-white"><strong>{{\'it_will_take_less_than_a_minutes\' | translate}}</strong></p>\n            <p class="text-white">{{\'let_us_know_your_registered_email_address\' | translate}}</p>\n        </div>\n    </div>\n    <div class="form">\n        <ion-list no-lines padding-left padding-right>\n            <ion-item>\n                <ion-input type="email" placeholder="{{\'registered_email_eddress\' | translate}}"></ion-input>\n            </ion-item>\n            <button ion-button block class="btn" (click)="tabs()" round>{{\'submit\' | translate}}</button>\n        </ion-list>\n    </div>\n</ion-content>\n'/*ion-inline-end:"D:\ionic\MundoCanjeApp\app\appDesa\src\pages\password\password.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], PasswordPage);
    return PasswordPage;
}());

//# sourceMappingURL=password.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConditionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_terminos_service_terminos_service__ = __webpack_require__(350);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ConditionPage = /** @class */ (function () {
    function ConditionPage(navCtrl, serviceTerminos) {
        this.navCtrl = navCtrl;
        this.serviceTerminos = serviceTerminos;
        this.GetTerminos();
    }
    ConditionPage.prototype.GetTerminos = function () {
        var _this = this;
        this.serviceTerminos.GetTerminos()
            .subscribe(function (data) {
            for (var i in data) {
                if (data[i].Titulo == "Terminos") {
                    _this.vTerminos = data[i].Descripcion;
                    console.log("El termino es: " + _this.vTerminos);
                }
                if (data[i].Titulo == "TerminosDeUso") {
                    _this.vTerminosDeUso = data[i].Descripcion;
                    console.log("El TerminosDeUso es: " + _this.vTerminosDeUso);
                }
            }
        }, function (error) { console.log(error); });
    };
    ConditionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-condition',template:/*ion-inline-start:"D:\ionic\MundoCanjeApp\app\appDesa\src\pages\condition\condition.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>{{\'terms_conditions\' | translate}}</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-color">\n    <p class="text-black">\n            {{vTerminos}}\n\n    </p>\n    <h2 class="text-blue">{{\'terms_of_use\' | translate}}</h2>\n    <p class="text-black">\n            {{vTerminosDeUso}}\n    </p>\n</ion-content>\n'/*ion-inline-end:"D:\ionic\MundoCanjeApp\app\appDesa\src\pages\condition\condition.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_terminos_service_terminos_service__["a" /* TerminosServiceProvider */]])
    ], ConditionPage);
    return ConditionPage;
}());

//# sourceMappingURL=condition.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TerminosServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_global__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TerminosServiceProvider = /** @class */ (function () {
    function TerminosServiceProvider(http, global) {
        this.http = http;
        this.global = global;
        this.favoriteCounter = 0;
        this.favorites = [];
        //console.log('Hello TerminosServiceProvider Provider');
    }
    TerminosServiceProvider.prototype.GetTerminos = function () {
        return this.http.get(this.global.ApiUrl + 'terminos/');
    };
    TerminosServiceProvider.prototype.findAll = function () {
        //return Promise.resolve(restaurants);
        return Promise.resolve(this.GetTerminos());
    };
    TerminosServiceProvider.prototype.findByName = function (searchKey) {
        var key = searchKey.toUpperCase();
        return Promise.resolve(this.GetDatosParams(key));
    };
    TerminosServiceProvider.prototype.getFavorites = function () {
        return Promise.resolve(this.favorites);
    };
    TerminosServiceProvider.prototype.obtenerDatos = function () {
        return this.http.get(this.global.ApiUrl + 'terminos');
    };
    //GetDatosId(id) {
    //return this.http.get(this.apiUrl+'clientes/'+id);
    //}
    TerminosServiceProvider.prototype.GetDatosParams = function (searchKey) {
        var key = searchKey;
        var postData2 = {
            "NombreFantasia": key,
            "Direccion": ""
        };
        return this.http.post(this.global.ApiUrl + 'clientes/clientesbyfiltros', postData2, { headers: { 'Accept': 'application/json', 'Content-Type': 'application/json', } });
    };
    TerminosServiceProvider.prototype.SendComentarios = function (restaurant, usuarioID, comentario, rating1, rating2, rating3, rating4) {
        console.log("ID de comecio2:" + restaurant.Id);
        console.log("El usuaroID es :" + usuarioID);
        var postData2 = {
            "Id": 0,
            "IdCliente": restaurant.Id,
            "IdUsuario": usuarioID,
            "FechaAlta": "",
            "Comentario": comentario,
            "rating1": rating1,
            "rating2": rating2,
            "rating3": rating3,
            "rating4": rating4
        };
        console.log("va a mandar alto pos3");
        //return this.http.post(this.global.ApiUrl+'Clientes_Comentarios', postData2,{headers: {'Accept': 'application/json','Content-Type': 'application/json', }});
        return this.http.post(this.global.ApiPostUrl + 'Clientes_Comentarios', postData2, { headers: { 'Accept': 'application/json', 'Content-Type': 'application/json', } });
    };
    TerminosServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__providers_global_global__["a" /* GlobalProvider */]])
    ], TerminosServiceProvider);
    return TerminosServiceProvider;
}());

//# sourceMappingURL=terminos-service.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_faq_faq__ = __webpack_require__(352);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HelpPage = /** @class */ (function () {
    function HelpPage(navCtrl, serviceFaq) {
        this.navCtrl = navCtrl;
        this.serviceFaq = serviceFaq;
        this.GetFaq();
    }
    HelpPage.prototype.GetFaq = function () {
        var _this = this;
        this.serviceFaq.GetPreguntas_Frecuentes()
            .subscribe(function (data) {
            _this.pregFrec = data;
            console.log(data);
            console.log("La faq 1: " + _this.pregFrec[0].Pregunta);
        }, function (error) { console.log(error); });
    };
    HelpPage.prototype.toggleDetails = function (data) {
        if (data.showDetails) {
            data.showDetails = false;
        }
        else {
            data.showDetails = true;
        }
    };
    HelpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-help',template:/*ion-inline-start:"D:\ionic\MundoCanjeApp\app\appDesa\src\pages\help\help.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>{{\'help\' | translate}}</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-color">\n    <ion-list no-lines>\n        <!--\n        <ion-item [ngClass]="faqExpand1 ? \'active\' : \'\' " (click)="faqExpandToggle1()">\n            <h2 class="text-blue d-flex">{{\'what_is_neargo\' | translate}}\n                <ion-icon class="material-icons end text-theme">keyboard_arrow_down</ion-icon>\n            </h2>\n            <div class="text_box">\n                <p class="text-violet"> Primera plataforma y App de canje para usuarios, comercios y servicios. Mundo Canje es una opción rápida y eficiente de optimizar recursos en un mundo cada vez más conectado. </p>\n            </div>\n        </ion-item>\n        <ion-item [ngClass]="faqExpand2 ? \'active\' : \'\' " (click)="faqExpandToggle2()">\n            <h2 class="text-blue d-flex">{{\'can_l_list_my_store_on_neargo\' | translate}}\n                <ion-icon class="material-icons end text-theme">keyboard_arrow_down</ion-icon>\n            </h2>\n            <div class="text_box">\n                <p class="text-blue"> MundoCanje dispone de 3 planes para los socios. Plan Basico: Puede generar hasta 5 canjes mensuales. El plan intermedio posibilita la generación de hasta 15 canjes mensuales y el Plan Full posibilita canjes ilimitados.</p>\n            </div>\n        </ion-item>\n        <ion-item [ngClass]="faqExpand3 ? \'active\' : \'\' " (click)="faqExpandToggle3()">\n            <h2 class="text-blue d-flex">{{\'how_to_complain_about_services\' | translate}}\n                <ion-icon class="material-icons end text-theme">keyboard_arrow_down</ion-icon>\n            </h2>\n            <div class="text_box">\n                <p class="text-black"> Los canjes se generan entre los usuarios, previamente aceptado el importe estimado. Puede ser por el total, o realizando la diferencia del importe a la otra parte.</p>\n            </div>\n        </ion-item>\n        <ion-item [ngClass]="faqExpand4 ? \'active\' : \'\' " (click)="faqExpandToggle4()">\n            <h2 class="text-blue d-flex">{{\'wahat_is_service_charnge\' | translate}}\n                <ion-icon class="material-icons end text-theme">keyboard_arrow_down</ion-icon>\n            </h2>\n            <div class="text_box">\n                <p class="text-black"> La app cuenta con diversas categorías, como ser: Indumentaria, Moda, Gastronomía, Música, Cursos, etc. Todas las semanas se siguen agregando nuevas categorías.</p>\n            </div>\n        </ion-item>\n        <ion-item [ngClass]="faqExpand5 ? \'active\' : \'\' " (click)="faqExpandToggle5()">\n            <h2 class="text-blue d-flex">{{\'user_data_pol\' | translate}}\n                <ion-icon class="material-icons end text-theme">keyboard_arrow_down</ion-icon>\n            </h2>\n            <div class="text_box">\n                <p class="text-black"> Todos los datos de los usuarios son privados y no pueden ser visualizados al navegar la app. Solamente se envían al usuario al momento de realizar el canje, con previa aceptación del usuario.</p>\n            </div>\n        </ion-item>\n        <ion-item [ngClass]="faqExpand6 ? \'active\' : \'\' " (click)="faqExpandToggle6()">\n            <h2 class="text-blue d-flex">{{\'are_those_services_are_free\' | translate}}\n                <ion-icon class="material-icons end text-theme">keyboard_arrow_down</ion-icon>\n            </h2>\n            <div class="text_box ">\n                <p class="text-black"> MundoCanje no cobra por transacción o pago en linea. Solamente recibe créditos por los planes de socios.</p>\n            </div>\n        </ion-item>\n        <ion-item [ngClass]="faqExpand7 ? \'active\' : \'\' " (click)="faqExpandToggle7()">\n            <h2 class="text-blue d-flex">{{\'can_i_create_event\' | translate}}\n                <ion-icon class="material-icons end text-theme">keyboard_arrow_down</ion-icon>\n            </h2>\n            <div class="text_box">\n                <p class="text-black"> Los canjes se pueden crear en cualquier momento y al mismo tiempo son compartidos por toda la comunidad.</p>\n            </div>\n        </ion-item>\n        <ion-item [ngClass]="faqExpand8 ? \'active\' : \'\' " (click)="faqExpandToggle8()">\n            <h2 class="text-blue d-flex">{{\'i_want_to_create_an_offer\' | translate}}\n                <ion-icon class="material-icons end text-theme">keyboard_arrow_down</ion-icon>\n            </h2>\n            <div class="text_box">\n                <p class="text-black"> La diferencia de los canjes pueden abonarse en Efectivo al retirar el producto o por pagos eléctronicos mediante Mercadopago. El usuario deberá elegir el método de pago que más le convenga.</p>\n            </div>\n        </ion-item>\n-->\n\n        <ion-item *ngFor="let d of pregFrec; let i = index"  (click)="toggleDetails(d)" [ngClass]="{\'active\': d.showDetails }">\n            <h2 class="text-blue d-flex">{{d.Pregunta | translate}}\n                <ion-icon class="material-icons end text-theme">keyboard_arrow_down</ion-icon>\n            </h2>\n            <div class="text_box">\n                <p class="text-violet"> {{d.Respuesta}} </p>\n            </div>\n        </ion-item>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\ionic\MundoCanjeApp\app\appDesa\src\pages\help\help.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_faq_faq__["a" /* FaqProvider */]])
    ], HelpPage);
    return HelpPage;
}());

//# sourceMappingURL=help.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaqProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_global__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FaqProvider = /** @class */ (function () {
    function FaqProvider(http, global) {
        this.http = http;
        this.global = global;
        this.favoriteCounter = 0;
        this.favorites = [];
        //console.log('Hello FaqProvider Provider');
    }
    FaqProvider.prototype.GetPreguntas_Frecuentes = function () {
        return this.http.get(this.global.ApiUrl + 'preguntas_frecuentes/');
    };
    FaqProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__providers_global_global__["a" /* GlobalProvider */]])
    ], FaqProvider);
    return FaqProvider;
}());

//# sourceMappingURL=faq.js.map

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Home2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_offer_edit_offer__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__edit_event_edit_event__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__eventdetail_eventdetail__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__offerdetail_offerdetail__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__search_search__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__map_map__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__categories_categories__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__list_canjes2_list_canjes2__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__list_descuentos2_list_descuentos2__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_filters2_filters2__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__tabs_tabs__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__account_account__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__new_canje_new_canje__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_category_service_category_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_product_service_product_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_pedidos_service_pedidos_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_global_pedido_global_pedido__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_global_global__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__other_profile_other_profile__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__users_list_users_list__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






















var Home2Page = /** @class */ (function () {
    function Home2Page(navCtrl, alertCtrl, toastController, user, pedido, pedidoService, loadingCtrl, modalCtrl, navParams, serviceCat, serviceProd) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.toastController = toastController;
        this.user = user;
        this.pedido = pedido;
        this.pedidoService = pedidoService;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.serviceCat = serviceCat;
        this.serviceProd = serviceProd;
        this.near = "offers";
        var loading = this.loadingCtrl.create({ content: 'Cargando...' });
        loading.present();
        this.tokenUsuario = this.navParams.get('tokenU');
        this.ObtenerCategorias(loading);
        this.getHome();
        console.log("EL token del usuario es:" + this.tokenUsuario);
        //loading.dismiss();
    }
    Home2Page.prototype.edit_offer = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__edit_offer_edit_offer__["a" /* Edit_offerPage */]);
    };
    Home2Page.prototype.NuevoCanje = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_14__new_canje_new_canje__["a" /* NewCanjePage */]);
    };
    Home2Page.prototype.edit_event = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__edit_event_edit_event__["a" /* Edit_eventPage */]);
    };
    Home2Page.prototype.offerdetail = function (IdProd) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__offerdetail_offerdetail__["a" /* OfferdetailPage */], { idProd: IdProd });
    };
    Home2Page.prototype.eventdetail = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__eventdetail_eventdetail__["a" /* EventdetailPage */]);
    };
    Home2Page.prototype.map = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__map_map__["a" /* MapPage */]);
    };
    Home2Page.prototype.perfil = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_13__account_account__["a" /* AccountPage */]);
    };
    Home2Page.prototype.VerCategorias = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__categories_categories__["a" /* CategoriesPage */]);
    };
    Home2Page.prototype.VerFiltros = function () {
        //this.navCtrl.push(FiltersPage)
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__pages_filters2_filters2__["a" /* Filters2Page */]);
    };
    Home2Page.prototype.VerMasCanjes = function () {
        //this.navCtrl.push(ListCanjes2Page);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__list_canjes2_list_canjes2__["a" /* ListCanjes2Page */], { tokenU: this.tokenUsuario });
    };
    Home2Page.prototype.VerMasDescuentos = function () {
        //this.navCtrl.push(ListDescuentosPage)
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__list_descuentos2_list_descuentos2__["a" /* ListDescuentos2Page */]);
    };
    Home2Page.prototype.VerMasUsuarios = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_21__users_list_users_list__["a" /* UsersListPage */]);
    };
    Home2Page.prototype.category_result = function (idCategoria) {
        //this.navCtrl.push(FiltersPage,{IdCategoria:idCategoria});
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__pages_filters2_filters2__["a" /* Filters2Page */], { IdCategoria: idCategoria });
    };
    Home2Page.prototype.search = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__search_search__["a" /* SearchPage */]);
        modal.present();
    };
    Home2Page.prototype.ObtenerCategorias = function (loading) {
        var _this = this;
        this.serviceCat.GetCategoriasHome()
            .subscribe(function (data) {
            _this.categoriasLst = data;
            console.log("La categorìa 1: " + _this.categoriasLst[0].Nombre);
            loading.dismiss();
        }, function (error) {
            console.log(error);
            loading.dismiss();
        });
    };
    Home2Page.prototype.getHome = function () {
        var _this = this;
        this.serviceProd.getHome()
            .subscribe(function (data) {
            _this.result = data; // get data in result variable
            _this.bannersLst = data.Banners;
            _this.canjesLst = data.Canjes;
            _this.descuentosLst = data.Descuentos;
            _this.usuariosLst = data.Usuarios;
        }, function (error) {
            console.log(error);
        });
    };
    Home2Page.prototype.getItems = function (busqueda) {
        var val = busqueda.target.value;
        /*
        if (q.trim() == '') {
            return;
        }
        */
        this.BuscarCanjes(val);
    };
    Home2Page.prototype.BuscarCanjes = function (nombreCanje) {
        var _this = this;
        this.serviceProd.getProductByName(nombreCanje)
            .subscribe(function (data) {
            _this.listBusqueda = data;
        }, function (error) { console.log(error); });
    };
    Home2Page.prototype.ViewProfile = function (idUsuario) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_20__other_profile_other_profile__["a" /* OtherProfilePage */], { IdUsuario: idUsuario });
    };
    Home2Page.prototype.SendNotification = function (IdProd, Comentario) {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: 'Cargando...' });
        loading.present();
        this.pedido.Id = "0";
        this.pedido.IdProductoInteres = IdProd;
        this.pedido.IdPedido_Estado = "3";
        var myDate = new Date().toDateString();
        this.pedido.FechaPedido = myDate;
        this.pedido.IdUsuarioSolicita = this.user.Id;
        this.pedido.Comentarios = Comentario;
        this.pedido.TipoMatch = "CANJE";
        this.pedidoService.postPedido(this.pedido)
            .subscribe(function (data) {
            // this.pushNotif.SendNotificationPush("Solicitud recibida", "Nueva solicitud de Canje")        
            // .subscribe(
            //     (data)=> {
            loading.dismiss();
            _this.presentToast('Se envió la solicitud.');
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_12__tabs_tabs__["a" /* TabsPage */], { tokenU: _this.tokenUsuario });
            //     },
            //     (error)=>{console.log("ERROR al enviar la push notification: " + error);}
            // )                 
        }, function (error) {
            console.log("ERROR en Save to DB: " + error);
            _this.presentToast(error.message);
            loading.dismiss();
        });
    };
    Home2Page.prototype.presentPrompt = function (idProd) {
        /* let alert = this.alertCtrl.create({
          title: 'Agregar Comentario',
          inputs: [
            {
              name: 'comentario',
              placeholder: 'Ingresar comentario'
            }
          ],
          buttons: [
            {
              text: 'Cancelar',
              role: 'cancel',
              handler: data => {
                console.log('Cancel clicked');
              }
            },
            {
              text: 'Enviar',
              handler: data => {
                console.log("Usuario es: "+data.comentario);
                this.SendNotification(idProd, data.comentario);
              }
            }
          ]
        });
        alert.present(); */
        this.SendNotification(idProd, "");
    };
    Home2Page.prototype.presentToast = function (texto) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: texto,
                            duration: 3000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    Home2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home2',template:/*ion-inline-start:"D:\ionic\MundoCanjeApp\app\appDesa\src\pages\home2\home2.html"*/'<ion-header class="bg-color">\n  <ion-navbar>\n      <ion-title class="text-theme">  \n        <span class="start">                \n          <img src="assets/imgs/ic_open-menu.png" (click)="perfil()">\n      </span>\n          <img src="assets/imgs/banner_mc.png" width="50%" height="50%" (click)="search()">\n          <span class="end">                \n              <img src="assets/imgs/ic_search-4.png" (click)="search()">\n          </span>\n      </ion-title>\n  </ion-navbar>\n  \n</ion-header>\n\n<!-- <ion-content class="bg-color"> -->\n  <ion-content class="bg-background">\n    <!--   <div class="banner"  *ngFor="let d of bannersLst; let i = index">\n          <img [src]="d.Imagen" class="bg">                \n     </div> -->\n     <div class="form">\n        <ion-searchbar (ionInput)="getItems($event)" placeholder="{{\'what_are_you_searching_for\' | translate}}" class="text-white"></ion-searchbar>\n        \n        <ion-list class="offers"  *ngFor="let d of listBusqueda; let i = index">\n          <ion-card>\n            <ion-item (click)="ViewProfile(d.IdUsuario)">\n              <ion-avatar item-start>\n                <img [src]="d.UsuarioImagen" style="width: 50px;height: 50px;">\n              </ion-avatar>\n              <h2 style="font-size: 1.9rem;padding-bottom: 2px;font-weight: 500;">{{d.Usuario}}</h2>\n              <p style="font-size: 1.4rem;font-weight: normal">{{d.Fecha_Publicacion | date:\'dd/MM/yyyy\'}}</p>\n            </ion-item>          \n           <img [src]="d.Imagen">          \n            <ion-card-content>\n              <p>{{d.Nombre}}</p>              \n              <ion-item (click)="presentPrompt(d.Id)" style="padding-left: 0px;border-bottom: 0px solid #173e53 !important;">\n                <ion-avatar item-start style="margin-right: 0px;">\n                  <img src="assets/imgs/send.png" style="width: 25px;height: 25px;border-radius:0%;">\n                </ion-avatar>\n                <p style="color: #3a97c9;font-weight: normal;font-size: 15px;">Enviar solicitud de canje</p>                      \n              </ion-item>\n            </ion-card-content>          \n          </ion-card>\n        </ion-list>\n\n    </div>\n     \n     \n<!--      <div class="categories">\n          <h2 (click)="VerCategorias()" class="text-gray d-flex">Ver más categorías\n            <span (click)="VerMasUsuarios(); $event.stopPropagation()" class="text-violet end">Usuarios</span>\n          </h2>\n      </div> -->\n      <div class="categories">\n        <ion-row style="margin-left: 15px;">\n          <ion-col size="4">\n            <p (click)="VerCategorias()" class="text-gray d-flex">Tienda</p>\n          </ion-col>\n          <ion-col size="4">\n            <p (click)="VerMasUsuarios()" class="text-violet d-flex">Usuarios</p>\n          </ion-col>\n          <ion-col size="4">\n            <p (click)="VerMasDescuentos()" class="text-gray d-flex">Beneficios</p>\n          </ion-col>\n        </ion-row>\n      </div>\n      <!-- ////////Inicio bloque categorias////////// -->\n      <ion-slides pager="true" style="height: 70%;">\n        <ion-slide>\n              <ion-list class="offers" >\n                <ion-card>                  \n                  <ion-row>\n                    <ion-col col-6  (click)="category_result(d.Id)" class="colCategoryBloque" *ngFor="let d of categoriasLst  | slice:4:8;">\n                      <ion-fab class="fabCategoryBloque" vertical="top" horizontal="end" edge slot="fixed">\n                        <span>{{d.CantProductos}}</span>\n                     </ion-fab>\n                      <img  [src]="d.Logo" class="imgCategoryBloque">          \n                      <ion-card-content class="cardCategoryBloque">\n                        <p class="pCategoryBloque">{{d.Nombre}}</p>                            \n                      </ion-card-content>\n                    </ion-col>\n                  </ion-row>\n                </ion-card>\n              </ion-list>\n        </ion-slide>\n        <ion-slide>\n          <ion-list class="offers" >\n              <ion-card>\n                <ion-row>\n                  <ion-col col-6 (click)="category_result(d.Id)" class="colCategoryBloque" *ngFor="let d of categoriasLst  | slice:8:12;">\n                    <ion-fab class="fabCategoryBloque" vertical="top" horizontal="end" edge slot="fixed">\n                      <span>{{d.CantProductos}}</span>\n                   </ion-fab>\n                    <img  [src]="d.Logo" class="imgCategoryBloque">          \n                    <ion-card-content class="cardCategoryBloque">\n                      <p class="pCategoryBloque">{{d.Nombre}}</p>                            \n                    </ion-card-content>\n                  </ion-col>\n                </ion-row>\n              </ion-card>\n            </ion-list>\n      </ion-slide>\n      <ion-slide>\n        <ion-list class="offers" >\n            <ion-card>\n              <ion-row>\n                <ion-col col-6 (click)="category_result(d.Id)" class="colCategoryBloque" *ngFor="let d of categoriasLst  | slice:0:4;">\n                  <ion-fab class="fabCategoryBloque" vertical="top" horizontal="end" edge slot="fixed">\n                    <span>{{d.CantProductos}}</span>\n                 </ion-fab>\n                  <img  [src]="d.Logo" class="imgCategoryBloque">          \n                  <ion-card-content class="cardCategoryBloque">\n                    <p class="pCategoryBloque">{{d.Nombre}}</p>                            \n                  </ion-card-content>\n                </ion-col>\n              </ion-row>\n            </ion-card>\n          </ion-list>\n    </ion-slide>\n\n        \n      </ion-slides>\n\n\n\n    \n    \n    \n    \n    \n    <!-- ////////FIN bloque categorias///// -->\n    <!-- Categorias slide en 1 linea\n      <div class="fixed-bottom">\n        \n            <ion-scroll scrollX="true" style="height: 130px;white-space: nowrap;">\n              \n              <ion-card style="box-shadow:none" *ngFor="let d of categoriasLst; let i = index">\n                <ion-item (click)="category_result(d.Id)" style="background-color: #edebeb;">\n                    <ion-avatar item-start >\n                        <img [src]="d.Logo">\n                    </ion-avatar>                          \n                </ion-item>\n                <p> {{d.Nombre}} </p>                                                          \n            </ion-card>      \n          </ion-scroll>\n      </div>\n       -->\n\n          <div class="categories">\n            <h2 class="text-gray d-flex">Últimos Perfiles</h2>\n        </div>\n        <div>\n            <ion-list class="offers" *ngFor="let d of usuariosLst; let i = index">    \n              <ion-card class="cardUsers" (click)="ViewProfile(d.Id)"> \n                <div class="banner">\n                  <img src="assets/imgs/Fondo2_1080.jpg" class="bg">\n                  <div class="profile d-flex" (click)="profile()">\n                      <div class="profile-img">\n                          <img [src]="d.Imagen">\n                      </div>\n                      <h2 class="h2Card">\n                          {{d.Nombre}}\n                          <span class="text-gray">{{d.CantCanjes}} canjes</span>              \n                          <span class="text-violet">{{d.Distancia}}</span>              \n                      </h2>          \n                  </div>\n                </div>\n              </ion-card>\n            \n            </ion-list>\n\n        </div>\n        <ion-list no-lines padding-left padding-right class="listButton" >\n          <div class="socile d-flex">\n              <button ion-button icon-start block class="btn text-white" round (click)="VerMasUsuarios()">\n                  <ion-icon class="material-icons text-white">add</ion-icon>\n                  Ver Más Usuarios\n              </button>\n              \n          </div>\n      </ion-list>\n\n          \n          <div class="categories">\n                  <h2 class="text-gray d-flex">{{\'Canjes Destacados\' | translate}}</h2>\n              </div>\n          <div>\n              <ion-list class="offers"  *ngFor="let d of canjesLst; let i = index">\n                <ion-card>\n                  <ion-item (click)="ViewProfile(d.IdUsuario)">\n                    <ion-avatar item-start>\n                      <img [src]="d.UsuarioImagen" style="width: 50px;height: 50px;">\n                    </ion-avatar>\n                    <h2 style="font-size: 1.9rem;padding-bottom: 2px;font-weight: 500;">{{d.Usuario}}</h2>\n                    <p style="font-size: 1.4rem;font-weight: normal">{{d.Fecha_Publicacion | date:\'dd/MM/yyyy\'}}</p>\n                    <ion-avatar item-end>\n                      <img style="border-radius: 0%;width: 35px;height: 35px;" src="assets/imgs/share.png">\n                    </ion-avatar>\n                  </ion-item>\n                \n                 <img [src]="d.Imagen">\n                \n                  <ion-card-content>\n                    <p>{{d.Nombre}}</p>\n                    \n                    <ion-item style="padding-left: 0px;">\n                      <ion-avatar item-start style="margin-right: 0px;">\n                        <img src="assets/imgs/pin.png" style="width: 30px;height: 30px;">\n                      </ion-avatar>\n                      <p style="color: #222;font-weight: normal;">2 km Belgrano</p>                      \n                    </ion-item>\n                    <ion-item (click)="presentPrompt(d.Id)" style="padding-left: 0px;">\n                      <ion-avatar item-start style="margin-right: 0px;">\n                        <img src="assets/imgs/send.png" style="width: 30px;height: 30px;border-radius:0%;">\n                      </ion-avatar>\n                      <p style="color: #3a97c9;font-weight: normal;">Enviar solicitud de canje</p>                      \n                    </ion-item>\n                    \n                  \n                  </ion-card-content>\n                \n                  <ion-row>\n                    <ion-col>\n                      <button ion-button icon-start clear small>\n                        <ion-icon name="thumbs-up"></ion-icon>\n                        <div>12 Likes</div>\n                      </button>\n                    </ion-col>\n                    <ion-col>\n                      <button ion-button icon-start clear small>\n                        <ion-icon name="text"></ion-icon>\n                        <div>4 Ofertas</div>\n                      </button>\n                    </ion-col>\n                    \n                  </ion-row>\n                \n                </ion-card>\n              </ion-list>\n      \n      \n          </div>\n          <ion-list no-lines padding-left padding-right class="listButton" >\n              <div class="socile d-flex">\n                  <button ion-button icon-start block class="btn text-white" round (click)="VerMasCanjes()">\n                      <ion-icon class="material-icons text-white">add</ion-icon>\n                      Ver Más Canjes\n                  </button>\n                  \n              </div>\n          </ion-list>\n\n           <div class="categories">\n                  <h2 class="text-gray d-flex">{{\'Cupones\' | translate}}</h2>\n              </div>\n          <div>\n               <ion-list class="offers"  *ngFor="let d of descuentosLst; let i = index">\n                \n                <ion-card (click)="offerdetail(d.Id)"> \n                  <ion-item >\n                    <ion-avatar item-start>\n                      <img [src]="d.UsuarioImagen" style="width: 80px;height: 50px;">\n                    </ion-avatar>\n                    <h2 style="font-size: 1.9rem;padding-bottom: 2px;font-weight: 500;">{{d.Usuario}}</h2>\n                    <ion-avatar item-end>\n                      <img style="border-radius: 0%;width: 35px;height: 35px;" src="assets/imgs/share.png">\n                    </ion-avatar>\n                  </ion-item>\n                \n                    <ion-row>\n                      <ion-col col-7>\n                        <img [src]="d.Imagen" style="min-width: 200px;">\n                      </ion-col>\n                      <ion-col col-5 style="background-color: #a26bb7;">\n                        <h2 class="DiscountShow">{{d.PorcentajeDesc}} </h2>\n                      </ion-col>\n                  </ion-row>\n                \n                 <ion-card-content>\n                   <p style="font-weight: 500;">{{d.Descripcion}}</p>\n                   \n                   <ion-item style="padding-left: 0px;">\n                     <ion-avatar item-start style="margin-right: 0px;margin-bottom: 0px;">\n                       <img src="assets/imgs/pin.png" style="width: 30px;height: 30px;">\n                     </ion-avatar>\n                     <p style="color: #222;font-weight: normal;margin-bottom: 0px;">1 km Belgrano</p>                      \n                   </ion-item>\n                   <ion-item style="padding-left: 0px;">\n                    <ion-avatar item-start style="margin-right: 0px;margin-bottom: 0px;">\n                      <img src="assets/imgs/chronometer.png" style="width: 30px;height: 30px;">\n                    </ion-avatar>\n                    <p style="color: #222;font-weight: normal;margin-bottom: 0px;margin-top: 3px;">Vencimiento: {{d.FechaVencimiento | date:"dd/MM"}} </p>                      \n                  </ion-item>\n                   <ion-item style="padding-left: 0px;">\n                     <ion-avatar item-start style="margin-right: 0px;margin-bottom: 0px;">\n                       <img src="assets/imgs/price-tag.png" style="width: 30px;height: 30px;border-radius:0%;">\n                     </ion-avatar>\n                     <p style="color: #3a97c9;font-weight: normal;margin-bottom: 0px;">Descargar Cupón</p>                      \n                   </ion-item>\n                   \n                 \n                 </ion-card-content>\n               \n                 <ion-row>\n                   <ion-col>\n                     <button ion-button icon-start clear small>\n                       <ion-icon name="thumbs-up"></ion-icon>\n                       <div>12 Likes</div>\n                     </button>\n                   </ion-col>\n                   <ion-col>\n                     <button ion-button icon-start clear small>\n                       <ion-icon name="text"></ion-icon>\n                       <div>40 Descargas</div>\n                     </button>\n                   </ion-col>\n                   \n                 </ion-row>\n               \n               </ion-card>\n                 \n              </ion-list> \n      \n      \n          </div>\n          <ion-list no-lines padding-left padding-right class="listButton">\n              <div class="socile d-flex">\n                  <button ion-button icon-start block class="btn text-white" round (click)="VerMasDescuentos()">\n                      <ion-icon class="material-icons text-white">add</ion-icon>\n                      Ver Más Cupones\n                  </button>\n              </div>\n          </ion-list> \n</ion-content>\n<!-- <ion-footer no-border class="d-flex">\n  <ion-icon class="material-icons text-white bg-theme end" (click)="NuevoCanje()">add</ion-icon>\n</ion-footer> -->\n\n'/*ion-inline-end:"D:\ionic\MundoCanjeApp\app\appDesa\src\pages\home2\home2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_19__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_18__providers_global_pedido_global_pedido__["a" /* GlobalPedidoProvider */], __WEBPACK_IMPORTED_MODULE_17__providers_pedidos_service_pedidos_service__["a" /* PedidosServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_15__providers_category_service_category_service__["a" /* CategoryServiceProvider */], __WEBPACK_IMPORTED_MODULE_16__providers_product_service_product_service__["a" /* ProductServiceProvider */]])
    ], Home2Page);
    return Home2Page;
}());

//# sourceMappingURL=home2.js.map

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_global__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CategoryServiceProvider = /** @class */ (function () {
    function CategoryServiceProvider(http, global) {
        this.http = http;
        this.global = global;
        //console.log('Hello CategoryServiceProvider Provider');
    }
    CategoryServiceProvider.prototype.GetCategorias = function () {
        console.log("La API es: " + this.global.ApiUrl);
        return this.http.get(this.global.ApiUrl + 'categorias/');
    };
    CategoryServiceProvider.prototype.GetCategoriasHome = function () {
        return this.http.get(this.global.ApiUrl + 'categorias/GetCategoriasHome');
    };
    CategoryServiceProvider.prototype.GetCategorias2 = function () {
        //return this.http.get(this.global.ApiUrl+'usuarios/14');
        return this.http.get(this.global.ApiUrl + 'categorias/GetUsuarioByToken/5OtYdXPtpqQSVDzzFdQ7srXxGrn1');
    };
    CategoryServiceProvider.prototype.GetCategoriaById = function (id) {
        return this.http.get(this.global.ApiUrl + 'categorias/' + id);
    };
    CategoryServiceProvider.prototype.GetTotalesById = function (idCateg) {
        return this.http.get(this.global.ApiUrl + 'categorias/GetTotalesById/' + idCateg);
    };
    CategoryServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__providers_global_global__["a" /* GlobalProvider */]])
    ], CategoryServiceProvider);
    return CategoryServiceProvider;
}());

//# sourceMappingURL=category-service.js.map

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OfferdetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_offer_edit_offer__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_product_service_product_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_global_global__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_maps__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__chatting_chatting__ = __webpack_require__(65);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var OfferdetailPage = /** @class */ (function () {
    function OfferdetailPage(navCtrl, modal, alertCtrl, user, navParams, serviceProd) {
        this.navCtrl = navCtrl;
        this.modal = modal;
        this.alertCtrl = alertCtrl;
        this.user = user;
        this.navParams = navParams;
        this.serviceProd = serviceProd;
        this.ProductoCanjeado = false;
        this.CanjesOfrecidos = false;
        this.IdProducto = this.navParams.get('idProd');
        if (this.navParams.get('estado') == "canjeado") {
            this.ProductoCanjeado = true;
        }
        console.log("El producto id es:" + this.IdProducto);
        this.getProduct(this.IdProducto);
        this.getOfrecidos(this.user.Id);
    }
    /* ionViewWillLoad() {
      let tabs=document.querySelector('.show-tabbar');
      if(tabs!==null){
        Object.keys(tabs).map((key)=>{
          tabs[key].style.display='flex';
        });
      }
    } */
    OfferdetailPage.prototype.getProduct = function (Id) {
        var _this = this;
        //this.serviceProd.getProductById(Id)     
        this.serviceProd.getProductByIdProd(Id)
            .subscribe(function (data) {
            _this.producto = data;
            if (_this.producto != null) {
                _this.nombreProd = _this.producto.Nombre;
                _this.descripcionProd = _this.producto.Descripcion;
                _this.cantSolicitudes = _this.producto.NroSolicitudes;
                _this.ultDiasProd = _this.producto.Ult_Dias;
                _this.imgProd = _this.producto.Imagen;
                _this.importeProd = _this.producto.Importe;
                _this.IdProdUsuario = _this.producto.IdProductoUsuario;
                _this.UsuarioImagen = _this.producto.UsuarioImagen;
                _this.Usuario = _this.producto.Usuario;
                _this.PorcentajeDesc = _this.producto.PorcentajeDesc;
                _this.FechaVencimiento = _this.producto.FechaVencimiento;
                _this.CodigoDescuento = _this.producto.CodigoDescuento;
                _this.DireccionUsuario = _this.producto.DireccionUsuario;
                //this.MostrarMapa(this.latProd,this.lngProd);
                _this.MostrarMapa(_this.producto.lat, _this.producto.lng, _this.Usuario);
            }
        }, function (error) { console.log(error); });
    };
    OfferdetailPage.prototype.edit_offer = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__edit_offer_edit_offer__["a" /* Edit_offerPage */]);
    };
    OfferdetailPage.prototype.MostrarCodigo = function () {
        this.flagMostarCodigo = true;
    };
    OfferdetailPage.prototype.getOfrecidos = function (idUsuario) {
        var _this = this;
        this.serviceProd.getProductByUser(idUsuario)
            .subscribe(function (data) {
            if (data.length > 0) {
                _this.CanjesOfrecidos = true;
            }
        }, function (error) { console.log(error); });
    };
    OfferdetailPage.prototype.AbrirChat = function () {
        var UserReceptor = this.IdProdUsuario;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__chatting_chatting__["a" /* ChattingPage */], { UserRecep: UserReceptor });
    };
    OfferdetailPage.prototype.presentAlert = function (Titulo, Descripcion) {
        var alert = this.alertCtrl.create({
            title: Titulo,
            subTitle: Descripcion,
            buttons: ['Aceptar']
        });
        alert.present();
    };
    OfferdetailPage.prototype.MostrarMapa = function (latitud, longitud, nombreIcono) {
        var Lati2 = parseFloat(latitud);
        var Longi2 = parseFloat(longitud);
        var mapOptions = {
            camera: {
                target: {
                    lat: Lati2,
                    lng: Longi2
                },
                zoom: 12,
                tilt: 30
            }
        };
        var map2 = __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_maps__["a" /* GoogleMaps */].create('map_canvas', mapOptions);
        var marker = map2.addMarkerSync({
            title: nombreIcono,
            icon: 'green',
            animation: 'DROP',
            position: {
                lat: Lati2,
                lng: Longi2
            }
        });
    };
    //////////////////////////////////
    OfferdetailPage.prototype.openModal = function () {
        var myModalOptions = {
            enableBackdropDismiss: false
        };
        /*
            const myModalData = {
              name: 'Paul Halliday',
              occupation: 'Developer'
            };
            */
        var myModal = this.modal.create('ModalNotificationPage', { idProd: this.IdProducto }, myModalOptions);
        myModal.present();
        myModal.onDidDismiss(function (data) {
            console.log("I have dismissed.");
            console.log(data);
        });
        myModal.onWillDismiss(function (data) {
            console.log("I'm about to dismiss");
            console.log(data);
        });
    };
    OfferdetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-offerdetail',template:/*ion-inline-start:"D:\ionic\MundoCanjeApp\app\appDesa\src\pages\offerdetail\offerdetail.html"*/'\n<ion-header>\n  <ion-navbar>\n      <ion-title>Detalle del Canje</ion-title> \n  </ion-navbar>\n</ion-header>\n\n\n<ion-content class="bg-background">\n<!--     <div class="banner">\n        <img [src]="imgProd">\n        <div class="store-name">\n            <h2 class="text-white d-flex">{{nombreProd}}\n            </h2>\n        </div>\n    </div>\n    <div class="details">\n        <div class="about">\n            <h3 class="text-black">{{\'about_offer\' | translate}}</h3>\n            <p class="text-black">{{nombreProd}}. Valor estimado: $ {{importeProd}} </p>\n        </div>\n        <div class="interested d-flex">\n            <h3 class="d-flex text-black">\n                    {{cantSolicitudes}}\n                <small class="text-black">{{\'people_send\' | translate}}</small>\n            </h3>\n            <button  *ngIf="!ProductoCanjeado" ion-button block icon-start class="btn text-white end" round (click)="AbrirPopup()">\n                <ion-icon class="material-icons">notifications</ion-icon>\n                {{\'send_invitation\' | translate}}\n            </button>\n            <button *ngIf="ProductoCanjeado" ion-button block icon-start class="btn text-white end" round (click)="AbrirChat()">\n                    <ion-icon class="material-icons">mail</ion-icon>\n                    Enviar Chat\n                </button>\n            \n        </div>\n        \n        \n        <div class="address">\n                <div id="map_canvas"></div>           \n        </div>        \n    </div> -->\n    <ion-list class="offers">       \n      <ion-card>\n        <ion-item >\n          <ion-avatar item-start>\n            <img [src]="UsuarioImagen" style="width: 80px;height: 50px;">\n          </ion-avatar>\n          <h2 style="font-size: 1.9rem;padding-bottom: 2px;font-weight: 500;">{{Usuario}}</h2>\n          <ion-avatar item-end>\n            <img style="border-radius: 0%;width: 35px;height: 35px;" src="assets/imgs/share.png">\n          </ion-avatar>\n        </ion-item>\n      \n          <ion-row>\n            <ion-col col-7>\n              <img [src]="imgProd" style="min-width: 200px;">\n            </ion-col>\n            <ion-col col-5 style="background-color: #a26bb7;">\n              <h2 class="DiscountShow">{{PorcentajeDesc}} </h2>\n            </ion-col>\n        </ion-row>\n      \n       <ion-card-content>\n         <p style="font-weight: 500;">{{nombreProd}}</p>\n        <br>\n         <p style="font-weight: 300;"><b>Condiciones:</b> {{descripcionProd}}</p>\n         \n         <ion-item style="padding-left: 0px;">\n           <ion-avatar item-start style="margin-right: 0px;margin-bottom: 0px;">\n             <img src="assets/imgs/pin.png" style="width: 30px;height: 30px;">\n           </ion-avatar>\n           <p style="color: #222;font-weight: normal;margin-bottom: 0px;font-size: 16px;">{{DireccionUsuario}} (1 km)</p>                      \n         </ion-item>\n         <ion-item style="padding-left: 0px;">\n          <ion-avatar item-start style="margin-right: 0px;margin-bottom: 0px;">\n            <img src="assets/imgs/chronometer.png" style="width: 30px;height: 30px;">\n          </ion-avatar>\n          <p style="color: #222;font-weight: normal;margin-bottom: 0px;margin-top: 3px;font-size: 16px;">Vencimiento: {{FechaVencimiento | date:"dd/MM"}} </p>                      \n        </ion-item>\n         <ion-item style="padding-left: 0px;">\n            <button  ion-button block icon-start class="btn text-white end" round (click)="MostrarCodigo()">\n                <ion-icon class="material-icons">notifications</ion-icon>\n                Descargar Cupón\n            </button>\n         </ion-item>\n         <ion-item *ngIf="flagMostarCodigo"  style="padding-left: 0px;color: #a26bb7;border: dashed;">\n          <p style="color: #a26bb7;font-weight: 500;font-size: 26px;text-align: center;">{{CodigoDescuento}}</p>                      \n       </ion-item>\n         \n       \n       </ion-card-content>\n     \n       <ion-row>\n         <ion-col>\n           <button ion-button icon-start clear small>\n             <ion-icon name="thumbs-up"></ion-icon>\n             <div>12 Likes</div>\n           </button>\n         </ion-col>\n         <ion-col>\n           <button ion-button icon-start clear small>\n             <ion-icon name="text"></ion-icon>\n             <div>40 Descargas</div>\n           </button>\n         </ion-col>\n         \n       </ion-row>\n      <br>\n       <div class="address">\n          <div id="map_canvas"></div>           \n      </div>\n     \n     </ion-card>\n       \n    </ion-list> \n    <br><br><br><br>\n</ion-content>\n'/*ion-inline-end:"D:\ionic\MundoCanjeApp\app\appDesa\src\pages\offerdetail\offerdetail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_product_service_product_service__["a" /* ProductServiceProvider */]])
    ], OfferdetailPage);
    return OfferdetailPage;
}());

//# sourceMappingURL=offerdetail.js.map

/***/ }),

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(403);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalPedidoProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GlobalPedidoProvider = /** @class */ (function () {
    function GlobalPedidoProvider() {
    }
    GlobalPedidoProvider.prototype.getPedido = function () {
        return this.pedido;
    };
    GlobalPedidoProvider.prototype.setPedido = function (pedido) {
        this.pedido = pedido;
    };
    GlobalPedidoProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], GlobalPedidoProvider);
    return GlobalPedidoProvider;
}());

//# sourceMappingURL=global-pedido.js.map

/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(727);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_http_loader__ = __webpack_require__(728);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_account_account__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_addreview_addreview__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_chats_chats__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_chatting_chatting__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_condition_condition__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_edit_offer_edit_offer__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_edit_event_edit_event__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_eventdetail_eventdetail__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_help_help__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_home2_home2__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_map_map__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_offerdetail_offerdetail__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_password_password__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_profile_profile__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_register_register__ = __webpack_require__(730);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_register_slide_register_slide__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_review_review__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_search_search__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_signin_signin__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_tabs_tabs__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_categories_categories__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_categoryresult_categoryresult__ = __webpack_require__(731);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_canjes_canjes__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_new_canje_new_canje__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_match_match__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_newchatting_newchatting__ = __webpack_require__(732);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_list_canjes_list_canjes__ = __webpack_require__(733);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_list_canjes2_list_canjes2__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_list_descuentos_list_descuentos__ = __webpack_require__(734);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_list_descuentos2_list_descuentos2__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_filters_filters__ = __webpack_require__(735);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_filters2_filters2__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_users_list_users_list__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_my_categories_my_categories__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_other_profile_other_profile__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__ionic_native_status_bar__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__ionic_native_splash_screen__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__providers_terminos_service_terminos_service__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__providers_faq_faq__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__providers_category_service_category_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__providers_autentication_service_autentication_service__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__providers_user_service_user_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__ionic_native_camera__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50_firebase__ = __webpack_require__(736);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_50_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__providers_global_global__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__providers_product_service_product_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__providers_global_product_global_product__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__providers_chat_service_chat_service__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__ionic_native_google_maps__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__ionic_native_geolocation_ngx__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__providers_ciudades_service_ciudades_service__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__providers_pedidos_service_pedidos_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__providers_global_pedido_global_pedido__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__providers_chat_detalle_service_chat_detalle_service__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__ionic_native_push__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__providers_notification_service_notification_service__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__providers_user_categoria_service_user_categoria_service__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__ionic_native_crop_ngx__ = __webpack_require__(748);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__ionic_native_image_picker_ngx__ = __webpack_require__(749);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__ionic_native_file_ngx__ = __webpack_require__(750);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67_ionic3_star_rating__ = __webpack_require__(751);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68__providers_calificacion_service_calificacion_service__ = __webpack_require__(174);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















































function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_6__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}



















__WEBPACK_IMPORTED_MODULE_50_firebase__["initializeApp"]({
    apiKey: "AIzaSyDnRzX07BLi192INJNLCV6qZb-kUmGtMzI",
    authDomain: "mundocanjeapp-5b311.firebaseapp.com",
    databaseURL: "https://mundocanjeapp-5b311.firebaseio.com",
    projectId: "mundocanjeapp-5b311",
    storageBucket: "mundo-canje-app.appspot.com",
    messagingSenderId: "943473640737",
    appId: "1:1036430754198:web:5d32636367549438ad1db7"
});
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_account_account__["a" /* AccountPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_addreview_addreview__["a" /* AddreviewPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_chats_chats__["a" /* ChatsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_chatting_chatting__["a" /* ChattingPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_condition_condition__["a" /* ConditionPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_edit_offer_edit_offer__["a" /* Edit_offerPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_edit_event_edit_event__["a" /* Edit_eventPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_eventdetail_eventdetail__["a" /* EventdetailPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_help_help__["a" /* HelpPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_home2_home2__["a" /* Home2Page */],
                __WEBPACK_IMPORTED_MODULE_17__pages_map_map__["a" /* MapPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_offerdetail_offerdetail__["a" /* OfferdetailPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_password_password__["a" /* PasswordPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_register_slide_register_slide__["a" /* RegisterSlidePage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_review_review__["a" /* ReviewPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_signin_signin__["a" /* SigninPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_categories_categories__["a" /* CategoriesPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_categoryresult_categoryresult__["a" /* CategoryresultPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_canjes_canjes__["a" /* CanjesPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_new_canje_new_canje__["a" /* NewCanjePage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_match_match__["a" /* MatchPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_newchatting_newchatting__["a" /* NewchattingPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_list_canjes_list_canjes__["a" /* ListCanjesPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_list_canjes2_list_canjes2__["a" /* ListCanjes2Page */],
                __WEBPACK_IMPORTED_MODULE_35__pages_list_descuentos_list_descuentos__["a" /* ListDescuentosPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_list_descuentos2_list_descuentos2__["a" /* ListDescuentos2Page */],
                __WEBPACK_IMPORTED_MODULE_37__pages_filters_filters__["a" /* FiltersPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_filters2_filters2__["a" /* Filters2Page */],
                __WEBPACK_IMPORTED_MODULE_39__pages_users_list_users_list__["a" /* UsersListPage */],
                __WEBPACK_IMPORTED_MODULE_40__pages_my_categories_my_categories__["a" /* MyCategoriesPage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_other_profile_other_profile__["a" /* OtherProfilePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_67_ionic3_star_rating__["a" /* StarRatingModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], { scrollAssist: false, autoFocusAssist: false }, {
                    links: [
                        { loadChildren: '../pages/modal-notification/modal-notification.module#ModalNotificationPageModule', name: 'ModalNotificationPage', segment: 'modal-notification', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/other-profile/other-profile.module#OtherProfilePageModule', name: 'OtherProfilePage', segment: 'other-profile', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: createTranslateLoader,
                        deps: [__WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_account_account__["a" /* AccountPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_addreview_addreview__["a" /* AddreviewPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_chats_chats__["a" /* ChatsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_chatting_chatting__["a" /* ChattingPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_condition_condition__["a" /* ConditionPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_edit_offer_edit_offer__["a" /* Edit_offerPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_edit_event_edit_event__["a" /* Edit_eventPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_eventdetail_eventdetail__["a" /* EventdetailPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_help_help__["a" /* HelpPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_home2_home2__["a" /* Home2Page */],
                __WEBPACK_IMPORTED_MODULE_17__pages_map_map__["a" /* MapPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_offerdetail_offerdetail__["a" /* OfferdetailPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_password_password__["a" /* PasswordPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_register_slide_register_slide__["a" /* RegisterSlidePage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_review_review__["a" /* ReviewPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_signin_signin__["a" /* SigninPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_categories_categories__["a" /* CategoriesPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_categoryresult_categoryresult__["a" /* CategoryresultPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_canjes_canjes__["a" /* CanjesPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_new_canje_new_canje__["a" /* NewCanjePage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_match_match__["a" /* MatchPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_newchatting_newchatting__["a" /* NewchattingPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_list_canjes_list_canjes__["a" /* ListCanjesPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_list_canjes2_list_canjes2__["a" /* ListCanjes2Page */],
                __WEBPACK_IMPORTED_MODULE_35__pages_list_descuentos_list_descuentos__["a" /* ListDescuentosPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_list_descuentos2_list_descuentos2__["a" /* ListDescuentos2Page */],
                __WEBPACK_IMPORTED_MODULE_37__pages_filters_filters__["a" /* FiltersPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_filters2_filters2__["a" /* Filters2Page */],
                __WEBPACK_IMPORTED_MODULE_39__pages_users_list_users_list__["a" /* UsersListPage */],
                __WEBPACK_IMPORTED_MODULE_40__pages_my_categories_my_categories__["a" /* MyCategoriesPage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_other_profile_other_profile__["a" /* OtherProfilePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_42__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_43__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_44__providers_terminos_service_terminos_service__["a" /* TerminosServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_45__providers_faq_faq__["a" /* FaqProvider */],
                __WEBPACK_IMPORTED_MODULE_46__providers_category_service_category_service__["a" /* CategoryServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_47__providers_autentication_service_autentication_service__["a" /* AutenticationServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_48__providers_user_service_user_service__["a" /* UserServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_51__providers_global_global__["a" /* GlobalProvider */],
                __WEBPACK_IMPORTED_MODULE_52__providers_product_service_product_service__["a" /* ProductServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_53__providers_global_product_global_product__["a" /* GlobalProductProvider */],
                __WEBPACK_IMPORTED_MODULE_54__providers_chat_service_chat_service__["a" /* ChatServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_55__ionic_native_google_maps__["a" /* GoogleMaps */],
                __WEBPACK_IMPORTED_MODULE_56__ionic_native_geolocation_ngx__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_57__providers_ciudades_service_ciudades_service__["a" /* CiudadesServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_58__providers_pedidos_service_pedidos_service__["a" /* PedidosServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_59__providers_global_pedido_global_pedido__["a" /* GlobalPedidoProvider */],
                __WEBPACK_IMPORTED_MODULE_49__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_60__providers_chat_detalle_service_chat_detalle_service__["a" /* ChatDetalleServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_61__ionic_native_push__["a" /* Push */],
                __WEBPACK_IMPORTED_MODULE_62__providers_notification_service_notification_service__["a" /* NotificationServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_63__providers_user_categoria_service_user_categoria_service__["a" /* UserCategoriaServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_64__ionic_native_crop_ngx__["a" /* Crop */],
                __WEBPACK_IMPORTED_MODULE_65__ionic_native_image_picker_ngx__["a" /* ImagePicker */],
                __WEBPACK_IMPORTED_MODULE_66__ionic_native_file_ngx__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_68__providers_calificacion_service_calificacion_service__["a" /* CalificacionServiceProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Edit_eventPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_product_service_product_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_product_global_product__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_tabs__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_category_service_category_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_global_global__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_pedidos_service_pedidos_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_global_pedido_global_pedido__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_geolocation_ngx__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_camera__ = __webpack_require__(85);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};











var Edit_eventPage = /** @class */ (function () {
    function Edit_eventPage(navCtrl, alertCtrl, navParams, toastController, geolocation, productService, product, pedido, categService, user, pedidoService, camera) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.toastController = toastController;
        this.geolocation = geolocation;
        this.productService = productService;
        this.product = product;
        this.pedido = pedido;
        this.categService = categService;
        this.user = user;
        this.pedidoService = pedidoService;
        this.camera = camera;
        this.gender = "female";
        this.geolocationSuccess = function (position) {
            _this.latitude = position.coords.latitude;
            _this.longitude = position.coords.longitude;
        };
        this.ProductoEdit = this.navParams.get('productoEdit');
        this.ObtenerCategorias();
        //this.ObtenerUbicacion();    
        this.SetProductEdit(this.ProductoEdit);
    }
    Edit_eventPage.prototype.SetProductEdit = function (prod) {
        console.log("El importe es: " + prod.Importe);
        console.log("El IdCategoria es: " + prod.IdCategoria);
        console.log("El IdUsuario es: " + this.user.Id);
        this.product.Id = prod.Id;
        this.product.Nombre = prod.Nombre;
        this.product.Descripcion = prod.Descripcion;
        this.product.IdCategoria = prod.IdCategoria;
        this.product.Cantidad = prod.Cantidad;
        //let Lati2 = parseFloat(latitud); 
        this.product.Importe = parseFloat(prod.Importe);
        this.product.IdTipo = '1';
        this.product.TipoDespublicacion = '1';
        this.product.IdEstado = '1';
        this.product.Imagen = prod.Imagen;
        this.base64Image = prod.Imagen;
        this.product.IdUsuario = this.user.Id;
        this.product.Fecha_Publicacion = prod.Fecha_Publicacion;
        this.product.lat = prod.lat;
        this.product.lng = prod.lng;
    };
    Edit_eventPage.prototype.tabs = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]);
    };
    Edit_eventPage.prototype.putCanje = function () {
        //console.log("LAT: "+this.latitude);
        //console.log("LONG: "+this.longitude);
        var _this = this;
        if (this.product.Imagen == null) {
            this.product.Imagen = "http://mundocanje.tk/Imagenes/Productos/NoDisponible.png";
        }
        //this.product.IdUsuario = this.user.Id;
        //var myDate: string = new Date().toDateString();
        //this.product.Fecha_Publicacion = myDate;
        //this.product.lat = this.latitude;
        //this.product.lng = this.longitude;
        this.product.Imagen = this.base64Image;
        this.productService.putProduct(this.product)
            .subscribe(function (data) {
            /*
            let data2 = JSON.stringify(data);
            this.dataApi = JSON.parse(data2);
            this.pedido.Id="0";
            this.pedido.IdProducto=this.dataApi.Id; //Poner id que devuelve el data
            this.pedido.IdPedido_Estado="1";
            this.pedido.FechaPedido=myDate;
            */
            _this.presentToast('Los cambios se guardaron correctamente');
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]);
        }, function (error) { console.log("ERROR en Save to DB: " + error); });
    };
    Edit_eventPage.prototype.DeleteProduct = function () {
        var _this = this;
        this.productService.deleteProduct(this.product)
            .subscribe(function (data) {
            _this.presentToast('El Canje se eliminó correctamente');
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]);
        }, function (error) { console.log("ERROR en Save to DB: " + error); });
    };
    Edit_eventPage.prototype.EliminarProducto = function () {
        this.presentAlertConfirm();
    };
    Edit_eventPage.prototype.presentAlertConfirm = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            title: "Eliminar producto",
                            message: '¿Está seguro de eliminar este producto?',
                            buttons: [
                                {
                                    text: 'No',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        console.log('Confirm Cancel: blah');
                                    }
                                }, {
                                    text: 'Si',
                                    handler: function () {
                                        _this.DeleteProduct();
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Edit_eventPage.prototype.presentToast = function (texto) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: texto,
                            duration: 3000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    Edit_eventPage.prototype.ObtenerCategorias = function () {
        var _this = this;
        this.categService.GetCategorias()
            .subscribe(function (data) {
            _this.CategoriasLst = data;
        }, function (error) { console.log(error); });
    };
    Edit_eventPage.prototype.ObtenerUbicacion = function () {
        var options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        };
        navigator.geolocation.getCurrentPosition(this.geolocationSuccess, this.onError);
    };
    Edit_eventPage.prototype.onError = function (error) {
        alert("Error al obtener la posicion");
    };
    Edit_eventPage.prototype.takePhoto = function (sourceType) {
        var _this = this;
        var options = {
            quality: 50,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true,
            sourceType: sourceType,
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.base64Image = 'data:image/jpeg;base64,' + imageData;
        }, function (err) {
            // Handle error
        });
    };
    Edit_eventPage.prototype.AccessCamera = function () {
        this.takePhoto(1);
    };
    Edit_eventPage.prototype.AccessGallery = function () {
        this.takePhoto(0);
    };
    Edit_eventPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit_event',template:/*ion-inline-start:"D:\ionic\MundoCanjeApp\app\appDesa\src\pages\edit_event\edit_event.html"*/'<ion-header>\n    <ion-navbar>        \n        <ion-title>{{\'edit_event\' | translate}}<span class="end text-theme" (click)="putCanje() ">{{\'save\' | translate}}</span></ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-background">\n    <div class="form" padding-left padding-right>\n        <ion-list no-lines padding-left padding-right>\n            <div class="store_img">\n               <img [src]="base64Image" *ngIf="base64Image" />      \n                <ion-fab center style="bottom: 30px;" >\n                  <button ion-fab style="background-color: #b9b6b6;">\n                      <ion-icon name="md-camera" class="text-white bg-theme add-pic"></ion-icon>\n                  </button>\n                  <ion-fab-list side="left">\n                    <button ion-fab (click)="AccessGallery()">\n                      <ion-icon name="md-photos" class="text-white bg-theme add-pic"></ion-icon>\n                    </button>\n                  </ion-fab-list>\n                  <ion-fab-list side="right">  \n                    <button ion-fab (click)="AccessCamera()">\n                      <ion-icon name="md-camera" class="text-white bg-theme add-pic"></ion-icon>\n                    </button>\n                  </ion-fab-list>\n                </ion-fab>\n            </div>\n            <ion-item>\n                <ion-label floating>{{\'canje_name\' | translate}}</ion-label>\n                <ion-textarea type="text" value="" [(ngModel)]="product.Nombre"></ion-textarea>\n            </ion-item>           \n            <ion-item>\n                  <ion-label floating>{{\'event_title\' | translate}}</ion-label>\n                  <ion-textarea type="text" value="" [(ngModel)]="product.Descripcion"></ion-textarea>\n              </ion-item>  \n            <ion-item>\n                  <ion-label floating>{{\'categories\' | translate}}</ion-label>                \n                <ion-select [(ngModel)]="product.IdCategoria">>                \n                      <ion-option *ngFor="let iCategoria of CategoriasLst; let i = index" [value]="iCategoria.Id" >\n                          {{iCategoria.Nombre}} \n                      </ion-option>\n                  </ion-select>\n            </ion-item>\n            <ion-row>\n                <ion-col col-6>\n                    <ion-item>\n                        <ion-label item-start>{{\'quantity\' | translate}}</ion-label>\n                        <div class="input_box d-flex" item-end>\n                            <ion-icon class="material-icons text-black">settings</ion-icon>\n                            <ion-input [(ngModel)]="product.Cantidad" type="number" value="1"></ion-input>\n                        </div>\n                    </ion-item>\n                </ion-col>\n                <ion-col col-6>\n                    <ion-item>\n                        <ion-label item-start>{{\'price\' | translate}}</ion-label>\n                        <div class="input_box d-flex" item-end>\n                            <ion-icon class="text-black" name="cash"></ion-icon>\n                            <ion-input type="text"  [(ngModel)]="product.Importe"></ion-input>\n                        </div>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n            \n        </ion-list>\n        <br>\n        <ion-list no-lines padding-left padding-right class="listButton" >\n            <button ion-button block class="btn-xs" style="background-color: #e13838;" (click)="EliminarProducto()" round>Eliminar\n                <ion-icon class="material-icons text-white">delete</ion-icon>\n            </button>\n        </ion-list>\n        \n    </div>\n</ion-content>\n'/*ion-inline-end:"D:\ionic\MundoCanjeApp\app\appDesa\src\pages\edit_event\edit_event.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_geolocation_ngx__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_2__providers_product_service_product_service__["a" /* ProductServiceProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_global_product_global_product__["a" /* GlobalProductProvider */], __WEBPACK_IMPORTED_MODULE_8__providers_global_pedido_global_pedido__["a" /* GlobalPedidoProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_category_service_category_service__["a" /* CategoryServiceProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_7__providers_pedidos_service_pedidos_service__["a" /* PedidosServiceProvider */], __WEBPACK_IMPORTED_MODULE_10__ionic_native_camera__["a" /* Camera */]])
    ], Edit_eventPage);
    return Edit_eventPage;
}());

//# sourceMappingURL=edit_event.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_search__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_product_service_product_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation_ngx__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__account_account__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__offerdetail_offerdetail__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__other_profile_other_profile__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_google_maps__ = __webpack_require__(169);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


//import {  GoogleMaps,  GoogleMap,  GoogleMapsEvent,  GoogleMapOptions} from '@ionic-native/google-maps';







var MapPage = /** @class */ (function () {
    function MapPage(navCtrl, toastController, loadingCtrl, serviceProd, modalCtrl, geolocation) {
        this.navCtrl = navCtrl;
        this.toastController = toastController;
        this.loadingCtrl = loadingCtrl;
        this.serviceProd = serviceProd;
        this.modalCtrl = modalCtrl;
        this.geolocation = geolocation;
        this.showCard = false;
        this.showCardCupon = false;
        this.CardImage = "";
        this.NameImage = "";
        this.IdUsuario = "";
        this.CardCategoria = "";
        this.IdCanje = "";
        this.CuponImage = "";
        this.CuponPercent = "";
        this.CuponTitle = "";
        this.CuponText = "";
        this.IdCupon = "";
        var loading = this.loadingCtrl.create({ content: 'Cargando...' });
        loading.present();
        //this.ObtenerUbicacion();
        this.ObtenerProductosMapa(loading);
    }
    MapPage.prototype.ionViewDidLoad = function () {
        //this.map=this.abrirMAPA();
    };
    MapPage.prototype.search = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__search_search__["a" /* SearchPage */]);
        modal.present();
    };
    MapPage.prototype.ObtenerUbicacion = function () {
        var _this = this;
        var options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        };
        navigator.geolocation.getCurrentPosition(function (position) {
            _this.textoAlerta = "2";
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            var loadingIN = _this.loadingCtrl.create({ content: 'Cargando...' });
            loadingIN.present();
            _this.ubicLat = pos.lat;
            var mapOptions = {
                camera: {
                    target: {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    },
                    zoom: 12,
                    tilt: 30
                }
            };
            _this.textoAlerta = "3";
            var map2 = __WEBPACK_IMPORTED_MODULE_8__ionic_native_google_maps__["a" /* GoogleMaps */].create('map_canvas', mapOptions);
            var marker;
            map2.addMarker({
                title: 'Estoy aqui',
                icon: 'red',
                animation: 'DROP',
                position: {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                }
            });
            _this.canjesLst.forEach(function (item) {
                var marki = map2.addMarkerSync({
                    // title: item.Nombre,
                    icon: 'blue',
                    animation: 'DROP',
                    optimized: false,
                    position: {
                        lat: item.lat,
                        lng: item.lng
                    }
                });
                marki.addEventListener(__WEBPACK_IMPORTED_MODULE_8__ionic_native_google_maps__["b" /* GoogleMapsEvent */].MARKER_CLICK).subscribe(function () {
                    console.log('Marker clicked...');
                    _this.presentToast(item.Nombre);
                    _this.showCardCupon = false;
                    _this.showCard = true;
                    _this.CardImage = item.Imagen;
                    _this.NameImage = item.Nombre;
                    _this.IdUsuario = item.IdUsuario;
                    _this.CardCategoria = item.Categoria;
                    _this.IdCanje = item.Id;
                });
            });
            _this.cuponLst.forEach(function (item) {
                var markiCupon = map2.addMarkerSync({
                    // title: item.Nombre,
                    icon: 'green',
                    animation: 'DROP',
                    position: {
                        lat: item.lat,
                        lng: item.lng
                    }
                });
                markiCupon.addEventListener(__WEBPACK_IMPORTED_MODULE_8__ionic_native_google_maps__["b" /* GoogleMapsEvent */].MARKER_CLICK).subscribe(function () {
                    _this.presentToast(item.Nombre);
                    _this.showCard = false;
                    _this.showCardCupon = true;
                    _this.NameImage = item.Nombre;
                    _this.IdUsuario = item.IdUsuario;
                    _this.CuponImage = item.UsuarioImagen;
                    _this.CuponPercent = item.PorcentajeDesc;
                    _this.CuponTitle = item.Usuario;
                    _this.CuponText = item.Nombre;
                    _this.IdCupon = item.Id;
                });
            });
            _this.textoAlerta = "";
            loadingIN.dismiss();
        }, this.onError);
    };
    MapPage.prototype.onError = function (error) {
        this.presentToast("Debe habilitar la ubicación");
    };
    MapPage.prototype.ViewProfile = function (idUsuario) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__other_profile_other_profile__["a" /* OtherProfilePage */], { IdUsuario: idUsuario });
    };
    MapPage.prototype.ObtenerProductosMapa = function (loading) {
        var _this = this;
        this.serviceProd.geProductosMap()
            .subscribe(function (data) {
            _this.cuponLst = data.Descuentos;
            _this.canjesLst = data.Canjes;
            _this.textoAlerta = "Debe habilitar la ubicación";
            _this.ObtenerUbicacion();
            loading.dismiss();
        }, function (error) {
            console.log(error);
            loading.dismiss();
        });
    };
    MapPage.prototype.perfil = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__account_account__["a" /* AccountPage */]);
    };
    MapPage.prototype.offerdetail = function (IdProd) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__offerdetail_offerdetail__["a" /* OfferdetailPage */], { idProd: IdProd });
    };
    MapPage.prototype.presentToast = function (texto) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: texto,
                            duration: 3000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    MapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-map',template:/*ion-inline-start:"D:\ionic\MundoCanjeApp\app\appDesa\src\pages\map\map.html"*/'<ion-header class="bg-color">\n    <ion-navbar>\n        <ion-title class="text-theme">  \n          <span class="start">                \n            <img src="assets/imgs/ic_open-menu.png" (click)="perfil()">\n        </span>\n            <img src="assets/imgs/banner_mc.png" width="50%" height="50%" (click)="search()">\n            <span class="end">                \n                <img src="assets/imgs/ic_search-4.png" (click)="search()">\n            </span>\n        </ion-title>\n    </ion-navbar>\n    \n  </ion-header>\n\n <ion-content class="bg-background">\n     <p style="text-align: center;font-size: 18px;font-weight: 500;color: #3a97c9;">{{textoAlerta}}</p>\n    <div id="map_canvas"></div>\n</ion-content>\n<ion-footer no-border>\n    <div class="fixed-bottom">\n        <ion-scroll scrollX="true" style="height: 108px;white-space: nowrap;" >\n            <!--  \n            <ion-card>\n                <ion-item>\n                    <ion-avatar item-start>\n                        <img src="assets/imgs/12.jpg">\n                    </ion-avatar>\n                    <h2>1 Parrillada completa para 4 personas</h2>\n                    <p class="d-flex"><img src="assets/imgs/ic_neargo-5.png">Av. Cabildo 669 (250m)</p>\n                    <h3 class="d-flex">\n                        <ion-badge item-end>{{\'4.3\' | translate}}\n                            <ion-icon name="md-star"></ion-icon>\n                        </ion-badge>\n                        <span>Gastronomía</span>\n                        <span class="end"><img src="assets/imgs/ic_direction.png"></span>\n                    </h3>\n                </ion-item>\n            </ion-card>\n           <ion-card>\n                <ion-item>\n                    <ion-avatar item-start>\n                        <img src="assets/imgs/2.png">\n                    </ion-avatar>\n                    <h2>2 Kg de Bananas + 1 Kg Manzana</h2>\n                    <p class="d-flex"><img src="assets/imgs/ic_neargo-5.png">Echeverría 2602</p>\n                    <h3 class="d-flex">\n                        <ion-badge item-end>{{\'4.3\' | translate}}\n                            <ion-icon name="md-star"></ion-icon>\n                        </ion-badge>\n                        <span>Verdulería</span>\n                        <span class="end"><img src="assets/imgs/ic_direction.png"></span>\n                    </h3>\n                </ion-item>\n            </ion-card>\n            <ion-card>\n                <ion-item>\n                    <ion-avatar item-start>\n                        <img src="assets/imgs/10.png">\n                    </ion-avatar>\n                    <h2>10 Clases de Guitarra Acústica</h2>\n                    <p class="d-flex"><img src="assets/imgs/ic_neargo-5.png">Juramento 561</p>\n                    <h3 class="d-flex">\n                        <ion-badge item-end>{{\'4.5\' | translate}}\n                            <ion-icon name="md-star"></ion-icon>\n                        </ion-badge>\n                        <span>Música</span>\n                        <span class="end"><img src="assets/imgs/ic_direction.png"></span>\n                    </h3>\n                </ion-item>\n            </ion-card> -->\n\n            <!-- <ion-card *ngFor="let d of objCanje; let i = index" >\n                <ion-item>\n                    <ion-avatar item-start>\n                        <img [src]="d.Imagen">\n                    </ion-avatar>\n                    <h2>{{d.Nombre}}</h2>\n                    <p class="d-flex"><img src="assets/imgs/ic_neargo-5.png">Av. Cabildo 669 (250m)</p>\n                    <h3 class="d-flex">\n                        <ion-badge item-end>{{\'4.3\' | translate}}\n                            <ion-icon name="md-star"></ion-icon>\n                        </ion-badge>\n                        <span>Gastronomía</span>\n                        <span class="end"><img src="assets/imgs/ic_direction.png"></span>\n                    </h3>\n                </ion-item>\n            </ion-card> -->\n            <ion-card *ngIf="showCard">\n                <ion-item (click)="ViewProfile(IdUsuario)">\n                    <ion-avatar item-start>\n                        <img [src]="CardImage">\n                    </ion-avatar>\n                    <h2>{{NameImage}}</h2>\n                    <p class="d-flex"><img src="assets/imgs/ic_neargo-5.png">Av. Cabildo 669 (250m)</p>\n                    <h3 class="d-flex">\n                        <ion-badge item-end>{{\'4.3\' | translate}}\n                            <ion-icon name="md-star"></ion-icon>\n                        </ion-badge>\n                        <span>{{CardCategoria}}</span>\n                        <span class="end"><img src="assets/imgs/ic_direction.png"></span>\n                    </h3>\n                </ion-item>\n            </ion-card>\n            \n            <ion-card *ngIf="showCardCupon">\n                 <ion-item (click)="offerdetail(IdCupon)"> \n                <!--    <ion-item>-->\n                    <ion-avatar item-start style="width: 108px; height: 92px;">\n                        <img [src]="CuponImage" class="imgCupon">\n                    </ion-avatar>\n                    <h1 class="percentCupon">{{CuponPercent}}</h1>\n                    <h2 class="titleCupon">{{CuponTitle}}</h2>\n                    <p class="d-flex textCupon">{{CuponText}}</p>\n                </ion-item>\n            </ion-card>\n        </ion-scroll>\n    </div>\n</ion-footer>'/*ion-inline-end:"D:\ionic\MundoCanjeApp\app\appDesa\src\pages\map\map.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__providers_product_service_product_service__["a" /* ProductServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation_ngx__["a" /* Geolocation */]])
    ], MapPage);
    return MapPage;
}());

//# sourceMappingURL=map.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_global__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the CategoryServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var UserServiceProvider = /** @class */ (function () {
    function UserServiceProvider(http, user) {
        this.http = http;
        this.user = user;
    }
    UserServiceProvider.prototype.getUserByToken = function (token) {
        return this.http.get(this.user.ApiUrl + 'Usuarios/GetUsuarioByToken/' + token);
    };
    UserServiceProvider.prototype.getUserById = function (idUsuario) {
        return this.http.get(this.user.ApiUrl + 'Usuarios/GetUsuariosById/' + idUsuario);
    };
    UserServiceProvider.prototype.postUser = function (user) {
        user.Id = "0";
        console.log(user);
        //return this.http.post(this.user.ApiUrl+'Usuarios/', user);
        return this.http.post(this.user.ApiPostUrl + 'Usuarios/', user);
    };
    UserServiceProvider.prototype.putUser = function (usuario) {
        console.log(usuario);
        //return this.http.put(this.user.ApiUrl+'Usuarios/'+usuario.Id, usuario);
        return this.http.put(this.user.ApiPostUrl + 'Usuarios/' + usuario.Id, usuario);
    };
    UserServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__providers_global_global__["a" /* GlobalProvider */]])
    ], UserServiceProvider);
    return UserServiceProvider;
}());

//# sourceMappingURL=user-service.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Edit_offerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Edit_offerPage = /** @class */ (function () {
    function Edit_offerPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.gender = "female";
    }
    Edit_offerPage.prototype.tabs = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
    };
    Edit_offerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit_offer',template:/*ion-inline-start:"D:\ionic\MundoCanjeApp\app\appDesa\src\pages\edit_offer\edit_offer.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>{{\'edit_offer\' | translate}}<span class="end text-theme" (click)="tabs() ">{{\'save\' | translate}}</span></ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-background">\n    <div class="form" padding-left padding-right>\n        <ion-list no-lines padding-left padding-right>\n            <div class="store_img">\n                <!--        <img src="assets/imgs/profile.png">-->\n                <ion-icon name="md-camera" class="text-white bg-theme add-pic"></ion-icon>\n            </div>\n            <ion-item>\n                <ion-label floating>{{\'offer_title\' | translate}}</ion-label>\n                <ion-textarea type="text" value="Buy 2 pair of jens and get 2 for absolutel free. HURRY !"></ion-textarea>\n            </ion-item>\n            <ion-item class="about_offer">\n                <ion-label floating>{{\'about_offer2\' | translate}}</ion-label>\n                <ion-textarea type="text" value="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,"></ion-textarea>t>\n            </ion-item>\n            <ion-item>\n                <ion-label floating>{{\'address2\' | translate}}</ion-label>\n                <ion-input type="text" value="1124, Old Church Street (250m)"></ion-input>\n            </ion-item>\n            <ion-row>\n                <ion-col col-6>\n                    <ion-item>\n                        <ion-label item-start>{{\'offer_start_date\' | translate}}</ion-label>\n                        <div class="input_box d-flex" item-end>\n                            <ion-icon class="material-icons text-white">event</ion-icon>\n                            <ion-input type="text" value="25 - June - 18"></ion-input>\n                        </div>\n                    </ion-item>\n                </ion-col>\n                <ion-col col-6>\n                    <ion-item>\n                        <ion-label item-start>{{\'offer_end_date\' | translate}}</ion-label>\n                        <div class="input_box d-flex" item-end>\n                            <ion-icon class="material-icons text-white">event</ion-icon>\n                            <ion-input type="text" value="29 - June - 18"></ion-input>\n                        </div>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n        </ion-list>\n    </div>\n</ion-content>\n'/*ion-inline-end:"D:\ionic\MundoCanjeApp\app\appDesa\src\pages\edit_offer\edit_offer.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], Edit_offerPage);
    return Edit_offerPage;
}());

//# sourceMappingURL=edit_offer.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_global__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_profile__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__review_review__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__condition_condition__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__help_help__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__signin_signin__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__canjes_canjes__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__my_categories_my_categories__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_notification_service_notification_service__ = __webpack_require__(118);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var AccountPage = /** @class */ (function () {
    function AccountPage(navCtrl, notificacionService, user, platform) {
        this.navCtrl = navCtrl;
        this.notificacionService = notificacionService;
        this.user = user;
        this.platform = platform;
        this.base64Image = user.Imagen;
        this.cantNotificaciones = 0;
        this.getCantidadNotificaciones();
    }
    AccountPage.prototype.getCantidadNotificaciones = function () {
        var _this = this;
        var userID = this.user.Id;
        this.notificacionService.GetCantNotificacionesByUsuario(userID)
            .subscribe(function (data) {
            _this.cantNotificaciones = data; // get data in result variable          
        }, function (error) {
            console.log(error);
        });
    };
    AccountPage.prototype.GotoCanjes = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__canjes_canjes__["a" /* CanjesPage */]);
    };
    AccountPage.prototype.GotoMyCategories = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__my_categories_my_categories__["a" /* MyCategoriesPage */]);
    };
    AccountPage.prototype.profile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__profile_profile__["a" /* ProfilePage */]);
    };
    AccountPage.prototype.review = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__review_review__["a" /* ReviewPage */]);
    };
    AccountPage.prototype.condition = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__condition_condition__["a" /* ConditionPage */]);
    };
    AccountPage.prototype.help = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__help_help__["a" /* HelpPage */]);
    };
    AccountPage.prototype.logout = function () {
        //this.navCtrl.popToRoot();
        //this.navCtrl.push(SigninPage)
        //this.platform.exitApp();
        this.platform.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_7__signin_signin__["a" /* SigninPage */]);
    };
    AccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-account',template:/*ion-inline-start:"D:\ionic\MundoCanjeApp\app\appDesa\src\pages\account\account.html"*/'<ion-header class="bg-transparent">\n    <ion-navbar>\n        <ion-title>Menu</ion-title>\n    </ion-navbar>\n    <div class="banner">\n        <img src="assets/imgs/Fondo2_1080.jpg" class="bg">\n        <div class="profile d-flex" (click)="profile()">\n            <div class="profile-img">\n                <img [src]="base64Image" *ngIf="base64Image">\n            </div>\n            <h2>\n                {{user.Nombre}}\n                <span class="text-gray">{{\'view_profile\' | translate}}</span>\n            </h2>\n        </div>\n    </div>\n</ion-header>\n\n<ion-content class="bg-background">\n    <ion-list no-lines>\n        <ion-item (click)="review()">\n            <img src="assets/imgs/ic_notification-1.png" item-start>\n            <h2 class="text-blue">{{\'notifications\' | translate}}</h2>\n            <p class="text-gray">{{\'view_all_notifications\' | translate}}</p>\n            <ion-badge item-end>\n                {{cantNotificaciones}}\n                <ion-icon name="md-notifications"></ion-icon>\n            </ion-badge>\n        </ion-item>\n        <!-- <ion-item>\n            <img src="assets/imgs/ic_share-1.png" item-start>\n            <h2 class="text-blue">{{\'share_app\' | translate}}</h2>\n            <p class="text-gray">{{\'invite_frindes_family\' | translate}}</p>\n        </ion-item> -->\n        <ion-item (click)="GotoCanjes()">\n            <img src="assets/imgs/ic-term-condition-1.png" item-start>\n            <h2 class="text-blue">Mi Catálogo de Canjes</h2>\n            <p class="text-gray">Ver el listado de tus canjes</p>\n        </ion-item>\n       \n       <!--  <ion-item>\n            <img src="assets/imgs/ic_thumbs-up-hand-1.png" item-start>\n            <h2 class="text-blue">{{\'rate_app\' | translate}}</h2>\n            <p class="text-gray">{{\'rate_us\' | translate}}</p>\n        </ion-item> -->\n        <ion-item (click)="GotoMyCategories()">\n            <img src="assets/imgs/ic_thumbs-up-hand-1.png" item-start>\n            <h2 class="text-blue">Mis Preferencias de Canjes</h2>\n            <p class="text-gray">Actualizá tus categorías preferidas</p>\n        </ion-item>\n        <!-- <ion-item (click)="condition()">\n            <img src="assets/imgs/ic-term-condition-1.png" item-start>\n            <h2 class="text-blue">{{\'terms_conditions\' | translate}}</h2>\n            <p class="text-gray">{{\'our_terms_conditions\' | translate}}</p>\n        </ion-item> -->\n        <!--\n        <ion-item>\n            <img src="assets/imgs/ic_discount.png" item-start>   \n            <h2 class="text-blue">Mis Cupones/ Beneficios</h2>\n            <p class="text-gray">Revisá los cupones descargados</p>\n        </ion-item>\n        -->\n        <ion-item (click)="help()">\n            <img src="assets/imgs/ic_help-1.png" item-start>\n            <h2 class="text-blue">{{\'need_help\' | translate}}</h2>\n            <p class="text-gray">{{\'faq\' | translate}}</p>\n        </ion-item>\n        <ion-item (click)="logout()">\n                <img src="assets/imgs/logout.png" item-start>\n                <h2 class="text-blue">Salir</h2>     \n                <p class="text-gray">Cerrar sesión</p>           \n            </ion-item>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\ionic\MundoCanjeApp\app\appDesa\src\pages\account\account.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_10__providers_notification_service_notification_service__["a" /* NotificationServiceProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]])
    ], AccountPage);
    return AccountPage;
}());

//# sourceMappingURL=account.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OtherProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_service_user_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__my_categories_my_categories__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__list_canjes2_list_canjes2__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_global_pedido_global_pedido__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_global_global__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_pedidos_service_pedidos_service__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








var OtherProfilePage = /** @class */ (function () {
    function OtherProfilePage(navCtrl, toastController, pedidoService, user, pedido, loadingCtrl, userService, navParams) {
        this.navCtrl = navCtrl;
        this.toastController = toastController;
        this.pedidoService = pedidoService;
        this.user = user;
        this.pedido = pedido;
        this.loadingCtrl = loadingCtrl;
        this.userService = userService;
        this.navParams = navParams;
        this.IdUsuario = this.navParams.get('IdUsuario');
        //Get UsuarioPorId
        this.getUserById(this.IdUsuario);
    }
    OtherProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OtherProfilePage');
    };
    OtherProfilePage.prototype.getUserById = function (idUsuario) {
        var _this = this;
        this.userService.getUserById(idUsuario)
            .subscribe(function (data) {
            if (data == null) {
                console.log("No se pudo encontrar el usuario receptor");
            }
            else {
                //this.dataApi = JSON.stringify(data);
                var data2 = JSON.stringify(data);
                _this.dataApi = JSON.parse(data2);
                _this.UsNombre = _this.dataApi.Nombre;
                _this.base64Image = _this.dataApi.Imagen;
                _this.UsLocalidad = _this.dataApi.Localidad;
                _this.RubroUsuario = _this.dataApi.RubroUsuario;
            }
        }, function (error) { console.log(error); });
    };
    OtherProfilePage.prototype.GotoCategoryList = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__my_categories_my_categories__["a" /* MyCategoriesPage */], { IdUsuario: this.IdUsuario });
    };
    OtherProfilePage.prototype.GotoCatalogo = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__list_canjes2_list_canjes2__["a" /* ListCanjes2Page */], { IdUsuario: this.IdUsuario });
    };
    OtherProfilePage.prototype.presentPrompt = function () {
        this.SendNotificationUser(this.IdUsuario, "");
    };
    OtherProfilePage.prototype.SendNotificationUser = function (IdUsuario, Comentario) {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: 'Cargando...' });
        loading.present();
        this.pedido.Id = "0";
        this.pedido.IdProductoInteres = "";
        this.pedido.IdPedido_Estado = "3";
        var myDate = new Date().toDateString();
        this.pedido.FechaPedido = myDate;
        this.pedido.IdUsuarioSolicita = this.user.Id;
        this.pedido.IdUsuarioRecibe = this.IdUsuario;
        this.pedido.Comentarios = Comentario;
        this.pedido.TipoMatch = "USUARIO";
        this.pedidoService.postPedido(this.pedido)
            .subscribe(function (data) {
            // this.pushNotif.SendNotificationPush("Solicitud recibida", "Nueva solicitud de Canje")        
            // .subscribe(
            //     (data)=> {
            loading.dismiss();
            _this.presentToast();
            _this.navCtrl.pop();
            //     },
            //     (error)=>{console.log("ERROR al enviar la push notification: " + error);}
            // )                 
        }, function (error) {
            console.log("ERROR en Save to DB: " + error);
            loading.dismiss();
        });
    };
    OtherProfilePage.prototype.presentToast = function () {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: 'Se envió la solicitud.',
                            duration: 3000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    OtherProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-other-profile',template:/*ion-inline-start:"D:\ionic\MundoCanjeApp\app\appDesa\src\pages\other-profile\other-profile.html"*/'<ion-header class="bg-transparent">\n  <ion-navbar>\n      <ion-title>Perfil de Usuario</ion-title>\n  </ion-navbar>\n  <div class="banner">\n      <img src="assets/imgs/Fondo2_1080.jpg"  class="bg">\n      <div class="profile d-flex" >\n          <div class="profile-img">\n              <img [src]="base64Image"  *ngIf="base64Image">\n          </div>\n          <h2>\n              {{UsNombre}}\n              <span class="text-gray">{{UsLocalidad}}</span>\n          </h2>\n      </div>\n  </div>\n</ion-header>\n\n<ion-content class="bg-background">\n    <ion-list no-lines>\n        \n        <ion-item>\n            <img src="assets/imgs/ic_star.png" class="ImgItems" item-start>\n            <h2 class="text-blue">{{RubroUsuario}}</h2>\n            <p class="text-gray">Mi Rubro/ Profesión</p>\n        </ion-item>\n        <ion-item (click)="GotoCategoryList()">\n            <img src="assets/imgs/ic-term-condition-1.png" class="ImgItems" item-start>\n            <h2 class="text-blue">Categorías de Canjes</h2>\n            <p class="text-gray">Ver categorías que ofrece el usuario</p>\n        </ion-item>\n        <ion-item (click)="GotoCatalogo()">\n            <img src="assets/imgs/ic_thumbs-up-hand-1.png" class="ImgItems" item-start>\n            <h2 class="text-blue">Catálogo de Canjes</h2>\n            <p class="text-gray">Ver catálogo del usuario</p>\n        </ion-item>\n        <ion-item (click)="presentPrompt()">\n            <img src="assets/imgs/send.png" style="width: 24px;top: 1px;" item-start>\n            <h2 class="text-blue">Enviar Solicitud de Canje</h2>\n            <p class="text-gray">Conectar</p>\n        </ion-item>\n        \n        \n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\ionic\MundoCanjeApp\app\appDesa\src\pages\other-profile\other-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_7__providers_pedidos_service_pedidos_service__["a" /* PedidosServiceProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_global_pedido_global_pedido__["a" /* GlobalPedidoProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__providers_user_service_user_service__["a" /* UserServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], OtherProfilePage);
    return OtherProfilePage;
}());

//# sourceMappingURL=other-profile.js.map

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventdetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chatting_chatting__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__edit_event_edit_event__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EventdetailPage = /** @class */ (function () {
    function EventdetailPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    EventdetailPage.prototype.edit_event = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__edit_event_edit_event__["a" /* Edit_eventPage */]);
    };
    EventdetailPage.prototype.VerChat = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__chatting_chatting__["a" /* ChattingPage */]);
    };
    EventdetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-eventdetail',template:/*ion-inline-start:"D:\ionic\MundoCanjeApp\app\appDesa\src\pages\eventdetail\eventdetail.html"*/'<ion-header class="bg-transparent">\n    <ion-navbar>\n        <ion-title>\n            <ion-badge class="end">\n                <ion-icon name="md-calendar"></ion-icon>\n                14/10/2019\n            </ion-badge>\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-background">\n    <div class="banner">\n        <img src=\'assets/imgs/12.jpg\'>\n        <div class="store-name">\n            <h2 class="text-white d-flex">1 Parrillada completa para 4 personas</h2>\n        </div>\n    </div>\n    <div class="details">\n        <div class="about">\n            <h3 class="text-black">{{\'about_event2\' | translate}}</h3>\n            <p class="text-black">Parrilla Locos de Asar. El comercio intercambia 1 parrillada para 4 personas que consta de: Vacío, Asado, Chorizos, Morcillas y achuras. No incluye bebidas o entradas. Por un valor de $3.100</p>\n        </div>\n        <div class="interested d-flex">\n            <h3 class="d-flex text-black">\n                12 <small class="text-black">{{\'people_send\' | translate}}</small>\n            </h3>\n            <button ion-button block icon-start class="btn text-white end"  round (click)="VerChat()">\n                <ion-icon class="material-icons">chat</ion-icon>\n                {{\'chats_view\' | translate}}\n            </button>\n        </div>\n        <div class="address">\n            <h3 class="text-white d-flex">{{\'address\' | translate}}\n             <!--   <span class="text-theme end ">{{\'get_direction\' | translate}}</span> -->\n            </h3>\n            <p class="text-white">Belgrano. Buenos Aires</p>\n            <div class="map">\n                <img src="assets/imgs/mapa3.jpg">\n            </div>\n            <img src="assets/imgs/ic_pin.png" class="location">\n        </div>\n    </div>\n\n</ion-content>\n'/*ion-inline-end:"D:\ionic\MundoCanjeApp\app\appDesa\src\pages\eventdetail\eventdetail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], EventdetailPage);
    return EventdetailPage;
}());

//# sourceMappingURL=eventdetail.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChattingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_global__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_service_user_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_chat_service_chat_service__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_chat_detalle_service_chat_detalle_service__ = __webpack_require__(345);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ChattingPage = /** @class */ (function () {
    function ChattingPage(navCtrl, loadingCtrl, navParams, chatDetServ, chatServ, user, userService) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.chatDetServ = chatDetServ;
        this.chatServ = chatServ;
        this.user = user;
        this.userService = userService;
        var loading = this.loadingCtrl.create({ content: 'Cargando...' });
        loading.present();
        this.UsEmisor = this.user.Id;
        this.UsIdReceptor = this.navParams.get('UserRecep');
        console.log("El usuario emisor es:" + this.UsEmisor);
        console.log("El usuario receptor es:" + this.UsIdReceptor);
        this.getUserById(this.UsIdReceptor);
        this.getChatsByUsuario(this.UsEmisor, this.UsIdReceptor, loading);
    }
    /*
      ngOnInit() {
        this.getChatsByUsuario(this.UsEmisor, this.UsIdReceptor);
        this.scrollToBottom();
      }
      */
    ChattingPage.prototype.doRefresh = function (refresher) {
        var loading = this.loadingCtrl.create({ content: 'Cargando...' });
        loading.present();
        console.log('Begin async operation');
        this.getChatsByUsuario(this.UsEmisor, this.UsIdReceptor, loading);
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    ChattingPage.prototype.getUserById = function (idUsuario) {
        var _this = this;
        this.userService.getUserById(idUsuario)
            .subscribe(function (data) {
            if (data == null) {
                console.log("No se pudo encontrar el usuario receptor");
            }
            else {
                //this.dataApi = JSON.stringify(data);
                var data2 = JSON.stringify(data);
                _this.dataApi = JSON.parse(data2);
                _this.UsNombreReceptor = _this.dataApi.Nombre;
                _this.UsImgReceptor = _this.dataApi.Imagen;
            }
        }, function (error) { console.log(error); });
    };
    ChattingPage.prototype.getChatsByUsuario = function (idEmisor, IdReceptor, loading) {
        var _this = this;
        this.chatDetServ.getChatsDetailsByUsuario(idEmisor, IdReceptor)
            .subscribe(function (data) {
            if (data == null) {
                console.log("No se pudo encontrar el usuario receptor");
            }
            else {
                _this.chatDetalleApi = data;
                if (data[0] != null) {
                    _this.idChat = data[0].IdChat;
                }
                else {
                    _this.idChat = 0;
                }
                /*
                let data2 = JSON.stringify(data);
                this.dataApi = JSON.parse(data2);
                this.UsNombreReceptor = this.dataApi.Nombre;
                this.UsImgReceptor = this.dataApi.Imagen;
                */
            }
            loading.dismiss();
        }, function (error) {
            console.log(error);
            loading.dismiss();
        });
    };
    ChattingPage.prototype.SendChat = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: 'Enviando...' });
        loading.present();
        var myDate = new Date().toDateString();
        if (this.idChat == 0) {
            var postChat = {
                "Id": "0",
                "Usuario_Emisor": this.UsEmisor,
                "Usuario_Receptor": this.UsIdReceptor,
                "Fecha_Ultimo_Mensaje": myDate,
                "Ultimo_Mensaje": this.MensajeSend
            };
            this.chatServ.postChat(postChat)
                .subscribe(function (data) {
                var data2 = JSON.stringify(data);
                _this.dataApi = JSON.parse(data2);
                _this.idChat = _this.dataApi.Id;
                _this.PostChatDetail(loading);
            }, function (error) {
                console.log(error);
                loading.dismiss();
            });
        }
        else {
            var putChat = {
                "Id": this.idChat,
                "Usuario_Emisor": this.UsEmisor,
                "Usuario_Receptor": this.UsIdReceptor,
                "Fecha_Ultimo_Mensaje": myDate,
                "Ultimo_Mensaje": this.MensajeSend
            };
            this.chatServ.putChat(putChat)
                .subscribe(function (data) {
                _this.PostChatDetail(loading);
            }, function (error) {
                console.log(error);
                loading.dismiss();
            });
        }
    };
    ChattingPage.prototype.PostChatDetail = function (loading) {
        var _this = this;
        var myDate = new Date().toDateString();
        var postChatDetail = {
            "Id": "0",
            "Usuario_Emisor": this.UsEmisor,
            "Usuario_Receptor": this.UsIdReceptor,
            "Fecha_Mensaje": myDate,
            "Mensaje": this.MensajeSend,
            "IdChat": this.idChat
        };
        this.chatDetServ.postChatDetails(postChatDetail)
            .subscribe(function (data) {
            console.log("Mensaje enviado");
            _this.getChatsByUsuario(_this.UsEmisor, _this.UsIdReceptor, loading);
            _this.MensajeSend = "";
        }, function (error) {
            console.log(error);
            loading.dismiss();
        });
    };
    ChattingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chatting',template:/*ion-inline-start:"D:\ionic\MundoCanjeApp\app\appDesa\src\pages\chatting\chatting.html"*/'<ion-header class="bg-transparent">\n    <ion-navbar>\n        <ion-title>\n            <span class="text-white">{{UsNombreReceptor}}<small>online</small></span>\n        </ion-title>\n    </ion-navbar>\n    <div class="banner">\n       <!-- <img src="assets/imgs/background.png" class="bg"> -->\n       <img [src]="UsImgReceptor" class="bg">\n    </div>\n</ion-header>\n\n<ion-content class="bg-background">\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n        <ion-refresher-content></ion-refresher-content>\n    </ion-refresher>\n    \n    <div *ngFor="let d of chatDetalleApi; let i = index" (ionRefresh)="doRefresh($event)">\n        <div *ngIf="(d.Usuario_Emisor == UsEmisor)" class="send chat-box" padding>\n            <h6>{{d.Mensaje}}</h6>\n            <p>{{d.Fecha_Mensaje | date:"dd/MM/yyyy"}}</p>\n        </div>\n        <div *ngIf="(d.Usuario_Emisor == UsIdReceptor)" class="received chat-box" padding>\n            <h6>{{d.Mensaje}}</h6>\n            <p>{{d.Fecha_Mensaje | date:"dd/MM/yyyy"}}</p>\n        </div>\n    </div>\n        \n</ion-content>\n<ion-footer no-border>\n    <div class="fixed-bottom form">\n        <ion-list class="" no-lines>\n            <ion-item>\n                <ion-input  [(ngModel)]="MensajeSend" type="text" placeholder="{{\'type_your_message\' | translate}}"></ion-input>\n                <div class="" item-end>\n                    <!-- <ion-icon name="attach" class="attach"></ion-icon> -->\n                    <!-- <ion-icon (click)="SendChat()" name="md-send" class=""></ion-icon> -->\n                    <button (click)="SendChat()" ion-button icon-start clear small>\n                        <ion-icon name="md-send"></ion-icon>\n                        \n                      </button>\n                </div>\n            </ion-item>\n        </ion-list>\n    </div>\n</ion-footer>\n'/*ion-inline-end:"D:\ionic\MundoCanjeApp\app\appDesa\src\pages\chatting\chatting.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__providers_chat_detalle_service_chat_detalle_service__["a" /* ChatDetalleServiceProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_chat_service_chat_service__["a" /* ChatServiceProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_user_service_user_service__["a" /* UserServiceProvider */]])
    ], ChattingPage);
    return ChattingPage;
}());

//# sourceMappingURL=chatting.js.map

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_chat_service_chat_service__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__search_search__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__chatting_chatting__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_global_global__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ChatsPage = /** @class */ (function () {
    function ChatsPage(navCtrl, loadingCtrl, user, modalCtrl, serviceChat) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.user = user;
        this.modalCtrl = modalCtrl;
        this.serviceChat = serviceChat;
        var loading = this.loadingCtrl.create({ content: 'Cargando...' });
        loading.present();
        this.idUsuarioPropio = this.user.Id;
        console.log("EWl id propio es: " + this.idUsuarioPropio);
        this.getChats(this.idUsuarioPropio, loading);
    }
    ChatsPage.prototype.chatting = function (chat) {
        var UsIdReceptor = chat.Usuario_Emisor;
        if (this.idUsuarioPropio != chat.Usuario_Receptor) {
            UsIdReceptor = chat.Usuario_Receptor;
        }
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__chatting_chatting__["a" /* ChattingPage */], { UserRecep: UsIdReceptor });
    };
    ChatsPage.prototype.search = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__search_search__["a" /* SearchPage */]);
        modal.present();
    };
    ChatsPage.prototype.getChats = function (idUser, loading) {
        var _this = this;
        this.serviceChat.getChatsByUsuario(idUser)
            .subscribe(function (data) {
            _this.chatLst = data;
            loading.dismiss();
        }, function (error) {
            console.log(error);
            loading.dismiss();
        });
    };
    ChatsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chats',template:/*ion-inline-start:"D:\ionic\MundoCanjeApp\app\appDesa\src\pages\chats\chats.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>{{\'chats_history\' | translate}}<span class="end">\n\n                <img src="assets/imgs/ic_search-4.png" (click)="search()">\n\n            </span></ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-background">\n\n    \n\n<!--\n\n    <ion-list no-lines *ngFor="let d of chatLst; let i = index">\n\n        <ion-item class="active" (click)="chatting()">\n\n            <div class="img-box">\n\n                <img src="assets/imgs/background.png">\n\n            </div>\n\n            <div class="details">\n\n                <h2 class="text-white d-flex">Las Medialunas del Abuelo<span class="end">{{d.Fecha_Ultimo_Mensaje}}</span></h2>\n\n                <p class="text-white d-flex">{{d.Ultimo_Mensaje}}<span class="end notifications">1</span></p>\n\n            </div>\n\n        </ion-item>\n\n-->\n\n<!-- <ion-list no-lines *ngFor="let d of chatLst; let i = index">\n\n        <ion-item (click)="chatting(d)">\n\n                <div  *ngIf="(d.Usuario_Emisor != idUsuarioPropio)"  class="img-box">\n\n                    <img [src]="d.ImgUsuarioEmisor">\n\n                </div>\n\n                <div *ngIf="(d.Usuario_Receptor != idUsuarioPropio)" class="img-box">\n\n                        <img [src]="d.ImgUsuarioReceptor">\n\n                    </div>\n\n                <div *ngIf="(d.Usuario_Emisor != idUsuarioPropio)" class="details">\n\n                    <h2 class="text-white d-flex">{{d.NombreUsuarioEmisor}}<span class="end">{{d.Fecha_Ultimo_Mensaje | date:"dd/MM/yyyy"}}</span></h2>\n\n                    <p class=" d-flex">{{d.Ultimo_Mensaje}}<span class="end"></span></p>\n\n                </div>\n\n                <div *ngIf="(d.Usuario_Receptor != idUsuarioPropio)" class="details">\n\n                        <h2 class="text-white d-flex">{{d.NombreUsuarioReceptor}}<span class="end">{{d.Fecha_Ultimo_Mensaje | date:"dd/MM/yyyy"}}</span></h2>\n\n                        <p class=" d-flex">{{d.Ultimo_Mensaje}}<span class="end"></span></p>\n\n                    </div>\n\n            </ion-item>\n\n  \n\n    </ion-list> -->\n\n    <ion-list class="offers" *ngFor="let d of chatLst; let i = index">    \n\n        <ion-card class="cardUsers" (click)="chatting(d)"> \n\n            <div class="banner" >\n\n                <img src="assets/imgs/Fondo2_1080.jpg" class="bg">\n\n                <div class="profile d-flex" (click)="chatting(d)">              \n\n                    <div  *ngIf="(d.Usuario_Emisor != idUsuarioPropio)" class="profile-img">\n\n                        <img [src]="d.ImgUsuarioEmisor">\n\n                    </div>\n\n                    <div *ngIf="(d.Usuario_Receptor != idUsuarioPropio)" class="profile-img">\n\n                        <img [src]="d.ImgUsuarioReceptor">\n\n                    </div>\n\n                    <h2 *ngIf="(d.Usuario_Emisor != idUsuarioPropio)" class="h2Card"> \n\n                        {{d.NombreUsuarioEmisor}}\n\n                        <span class="text-gray">{{d.Fecha_Ultimo_Mensaje | date:"dd/MM/yyyy"}}</span>              \n\n                        <!-- <span class="text-violet">10</span>               -->\n\n                    </h2> \n\n                    <h2 *ngIf="(d.Usuario_Receptor != idUsuarioPropio)" class="h2Card"> \n\n                        {{d.NombreUsuarioReceptor}}\n\n                        <span class="text-gray">{{d.Fecha_Ultimo_Mensaje | date:"dd/MM/yyyy"}}</span>              \n\n                        <!-- <span class="text-violet">11</span>               -->\n\n                    </h2>         \n\n                </div>\n\n            </div>\n\n        </ion-card>\n\n    \n\n      \n\n      </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionic\MundoCanjeApp\app\appDesa\src\pages\chats\chats.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__providers_chat_service_chat_service__["a" /* ChatServiceProvider */]])
    ], ChatsPage);
    return ChatsPage;
}());

//# sourceMappingURL=chats.js.map

/***/ }),

/***/ 709:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__review_review__ = __webpack_require__(172);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StorePage = /** @class */ (function () {
    function StorePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.slides = [
            {
                image: "assets/imgs/background.png",
            },
            {
                image: "assets/imgs/2.png",
            },
            {
                image: "assets/imgs/3.png",
            }
        ];
    }
    StorePage.prototype.review = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__review_review__["a" /* ReviewPage */]);
    };
    StorePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-store',template:/*ion-inline-start:"D:\ionic\MundoCanjeApp\app\appDesa\src\pages\store\store.html"*/'<ion-header class="bg-transparent">\n    <ion-navbar>\n        <ion-title></ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-color">\n    <div class="banner">\n        <img src="assets/imgs/background.png">\n    </div>\n    <div class="details">\n        <div class="store-name">\n            <h2 class="text-white">Golden Bakery</h2>\n            <p class="d-flex text-gray">Dairy & Bakery </p>\n            <h4 class="d-flex text-white">\n                <ion-badge item-end class="bg-theme text-white">4.3\n                    <ion-icon name="md-star"></ion-icon>\n                </ion-badge>\n                {{\'98_people_rated\' | translate}}<span class="end text-theme" (click)="review()">{{\'read_all\' | translate}}</span>\n            </h4>\n        </div>\n        <div class="about">\n            <h3 class="text-white">{{\'aboput\' | translate}}</h3>\n            <p class="text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s</p>\n        </div>\n        <div class="contact d-flex">\n            <div class="opening">\n                <h3 class="text-white">{{\'opening_hours\' | translate}}</h3>\n                <p class="text-theme">{{\'open_now\' | translate}}<span class="text-white">(08:00 - 22:00)</span></p>\n            </div>\n            <div text-end class="end">\n                <ion-icon name="md-heart" class="text-white bg-theme fevret"></ion-icon>\n                <ion-icon name="md-chatboxes" class="heart text-white bg-theme"></ion-icon>\n                <ion-icon name="md-call" class="text-white bg-theme"></ion-icon>\n            </div>\n        </div>\n        <div class="address">\n            <h3 class="text-white d-flex">{{\'address\' | translate}}\n                <span class="text-theme end ">{{\'get_direction\' | translate}}</span>\n            </h3>\n            <p class="text-white">1124, Old Church Street (250m)</p>\n            <div class="map">\n                <img src="assets/imgs/map-location.png">\n            </div>\n            <img src="assets/imgs/ic_pin.png" class="location">\n        </div>\n    </div>\n\n</ion-content>\n'/*ion-inline-end:"D:\ionic\MundoCanjeApp\app\appDesa\src\pages\store\store.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], StorePage);
    return StorePage;
}());

//# sourceMappingURL=store.js.map

/***/ }),

/***/ 727:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_signin_signin__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__node_modules_ngx_translate_core__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_push__ = __webpack_require__(396);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, translate, push) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.translate = translate;
        this.push = push;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_signin_signin__["a" /* SigninPage */];
        this.initializeApp();
        this.pushSetup();
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            _this.translate.setDefaultLang('en');
            _this.translate.use('en');
        });
    };
    MyApp.prototype.pushSetup = function () {
        var options = {
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
        var pushObject = this.push.init(options);
        var topic = "mundocanje"; //this way ,topics are working in android but not in ios
        pushObject.subscribe(topic);
        pushObject.on('notification').subscribe(function (notification) { return console.log('Received a notification', notification); });
        pushObject.on('registration').subscribe(function (registration) { return console.log('Device registered', registration); });
        pushObject.on('error').subscribe(function (error) { return console.error('Error with Push plugin', error); });
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\ionic\MundoCanjeApp\app\appDesa\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"D:\ionic\MundoCanjeApp\app\appDesa\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_5__node_modules_ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_push__["a" /* Push */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 730:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_autentication_service_autentication_service__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_service_user_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_global_global__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tabs_tabs__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_ciudades_service_ciudades_service__ = __webpack_require__(171);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, authService, toastController, userService, user, ciudadServ) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.toastController = toastController;
        this.userService = userService;
        this.user = user;
        this.ciudadServ = ciudadServ;
        this.user.Mail = "";
        this.user.password = "";
        this.TipoUsuario = "1";
        this.ObtenerCiudades();
    }
    RegisterPage.prototype.tabs = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__tabs_tabs__["a" /* TabsPage */]);
    };
    RegisterPage.prototype.SetTipoUsuario = function (tipoUsuario) {
        this.TipoUsuario = tipoUsuario;
    };
    RegisterPage.prototype.RegistrarUsuario = function () {
        var _this = this;
        var tokenFb = "";
        this.authService.registerUser(this.user.Mail, this.user.password)
            .then(function (info) {
            console.log('usuario registrado');
            _this.presentToast('Registrado correctamente');
            tokenFb = info.user.uid;
            _this.user.Token = tokenFb;
            _this.user.Imagen = "";
            _this.user.IdPlan = "1"; //Se registra con plan básico por default.
            _this.user.IdLocalidad = _this.IdCiudad;
            _this.user.Estado = "1";
            _this.user.IdTipo = _this.TipoUsuario;
            var myDate = new Date().toDateString();
            _this.user.Fecha_Alta = myDate;
            console.log('Token ' + tokenFb);
            _this.registerToDB2.then(function (result) {
                //window.alert(result); // true
                console.log("Registracion correcta");
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__tabs_tabs__["a" /* TabsPage */], { tokenU: tokenFb });
            }).catch(function (error) {
                _this.presentToast(error);
                console.log("Error al registrase");
            });
        })
            .catch(function (error) {
            _this.presentToast(error);
            console.log("ERror......");
        });
    };
    Object.defineProperty(RegisterPage.prototype, "registerToDB2", {
        get: function () {
            var _this = this;
            return new Promise(function (resolve, reject) {
                _this.userService.postUser(_this.user)
                    .subscribe(function (data) {
                    resolve(true);
                }, function (error) {
                    console.log("ERROR en Save to DB: " + error);
                    return false;
                });
            });
        },
        enumerable: true,
        configurable: true
    });
    RegisterPage.prototype.presentToast = function (texto) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: texto,
                            duration: 3000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    RegisterPage.prototype.ObtenerCiudades = function () {
        var _this = this;
        this.ciudadServ.GetCiudades()
            .subscribe(function (data) {
            _this.ListCiudades = data;
            console.log("La ciudad 1: " + _this.ListCiudades[0].Nombre);
        }, function (error) { console.log(error); });
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"D:\ionic\MundoCanjeApp\app\appDesa\src\pages\register\register.html"*/'<ion-header class="bg-transparent">\n\n    <ion-navbar>\n\n        <ion-title>{{\'register\' | translate}}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content class="bg-color">\n\n    <div class="profile-img">\n\n        <div class="img-box">\n\n            <!--            <img src="assets/imgs/dp1.png">-->\n\n            <ion-icon name="md-person" class="text-white"></ion-icon>\n\n        </div>\n\n        <ion-icon name="md-camera" class="text-white bg-theme add-pic"></ion-icon>\n\n    </div>\n\n    <div class="form" padding-left padding-right>\n\n        <ion-list no-lines padding-left padding-right>\n\n            <ion-item>\n\n                <ion-label floating>{{\'user_name\' | translate}}</ion-label>\n\n                <ion-input [(ngModel)]="user.Nombre" type="text" value=""></ion-input>\n\n            </ion-item>\n\n           \n\n            <ion-item>\n\n                <ion-label floating>{{\'user_telephone\' | translate}}</ion-label>\n\n                <ion-input [(ngModel)]="user.Telefono" type="number" value=""></ion-input>\n\n            </ion-item>            \n\n            <ion-item>\n\n                <ion-label floating>{{\'user_address\' | translate}}</ion-label>\n\n                <ion-input [(ngModel)]="user.Direccion" type="text" value=""></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-label floating>{{\'email_address\' | translate}}</ion-label>\n\n                <ion-input [(ngModel)]="user.Mail" type="email" value=""></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n                    <ion-label floating>Ciudad</ion-label>\n\n                    \n\n                    <!--       <ion-select > -->\n\n                  <ion-select [(ngModel)]="IdCiudad">                \n\n                        <ion-option *ngFor="let iCiudad of ListCiudades; let i = index" [value]="iCiudad.Id" >\n\n                            {{iCiudad.Nombre}} \n\n                        </ion-option>\n\n                    </ion-select>\n\n                </ion-item>\n\n            \n\n\n\n            <ion-list radio-group style="margin: 10px 0 16px;">                \n\n                  <div class="row">\n\n                    <ion-col col-6 col-sm-6 col-md-6 col-lg-6 >\n\n                        <ion-item>\n\n                        <ion-label>Usuario</ion-label>\n\n                        <ion-radio checked=\'true\' (click)="SetTipoUsuario(1)" value=\'1\'></ion-radio>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                    <ion-col col-6 col-sm-6 col-md-6 col-lg-6 >\n\n                        <ion-item>\n\n                        <ion-label>Comercio</ion-label>\n\n                        <ion-radio (click)="SetTipoUsuario(2)" value=\'2\'></ion-radio>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                  </div>\n\n              \n\n              </ion-list>\n\n            <ion-item [class.hide]="TipoUsuario==1"> \n\n                <ion-label floating>{{\'user_business_name\' | translate}}</ion-label>\n\n                <ion-input [(ngModel)]="user.Razon_Social" type="text" value=""></ion-input>\n\n            </ion-item>            \n\n            <ion-item [class.hide]="TipoUsuario==1">\n\n                <ion-label floating>{{\'user_cuit\' | translate}}</ion-label>\n\n                <ion-input [(ngModel)]="user.Cuit" type="number" value="" maxlength="11"></ion-input>\n\n            </ion-item>\n\n            <ion-item class="password">\n\n                <ion-label floating>{{\'set_password\' | translate}}</ion-label>\n\n                <ion-input [(ngModel)]="user.password" type="password" class="password" value=""></ion-input>\n\n            </ion-item>\n\n            <ion-item class="password">\n\n                <ion-label floating>{{\'confirm_password\' | translate}}</ion-label>\n\n                <ion-input type="password" class="password" value=""></ion-input>\n\n            </ion-item>\n\n            <button ion-button block class="btn" (click)="RegistrarUsuario()" round>{{\'register_now\' | translate}}</button>\n\n        </ion-list>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionic\MundoCanjeApp\app\appDesa\src\pages\register\register.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_autentication_service_autentication_service__["a" /* AutenticationServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__providers_user_service_user_service__["a" /* UserServiceProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_ciudades_service_ciudades_service__["a" /* CiudadesServiceProvider */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 731:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryresultPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_offer_edit_offer__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__edit_event_edit_event__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__eventdetail_eventdetail__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__offerdetail_offerdetail__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__search_search__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__chats_chats__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__map_map__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__account_account__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var CategoryresultPage = /** @class */ (function () {
    function CategoryresultPage(navCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
    }
    CategoryresultPage.prototype.edit_offer = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__edit_offer_edit_offer__["a" /* Edit_offerPage */]);
    };
    CategoryresultPage.prototype.edit_event = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__edit_event_edit_event__["a" /* Edit_eventPage */]);
    };
    CategoryresultPage.prototype.offerdetail = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__offerdetail_offerdetail__["a" /* OfferdetailPage */]);
    };
    CategoryresultPage.prototype.eventdetail = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__eventdetail_eventdetail__["a" /* EventdetailPage */]);
    };
    CategoryresultPage.prototype.map = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__map_map__["a" /* MapPage */]);
    };
    CategoryresultPage.prototype.map22 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__chats_chats__["a" /* ChatsPage */]);
    };
    CategoryresultPage.prototype.perfil = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__account_account__["a" /* AccountPage */]);
    };
    CategoryresultPage.prototype.search = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__search_search__["a" /* SearchPage */]);
        modal.present();
    };
    CategoryresultPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-categoryresult',template:/*ion-inline-start:"D:\ionic\MundoCanjeApp\app\appDesa\src\pages\categoryresult\categoryresult.html"*/'<ion-header class="bg-color">\n  <ion-navbar>\n      <ion-title class="text-theme">{{\'app_title\' | translate}}\n          <span class="end">\n              \n              <img src="assets/imgs/ic_search-4.png" (click)="search()">\n              <img src="assets/imgs/ic_account-4.png" (click)="perfil()">\n          </span>\n      </ion-title>\n  </ion-navbar>  \n</ion-header>\n\n<ion-content class="bg-color">\n  <div>\n      <ion-list  class="offers">\n          <ion-item (click)="offerdetail()">\n              <img src="assets/imgs/12.jpg" class="bg">\n              <ion-badge item-end>\n                  <ion-icon name="md-stopwatch"></ion-icon>\n                  2 Días\n              </ion-badge>\n              <div class="text">\n                  <h2>1 Parrillada completa para 4 personas</h2>\n                  <p class="d-flex text-theme">\n                      5 {{\'people_send\' | translate}}\n                  </p>\n              </div>\n          </ion-item>\n          <ion-item (click)="offerdetail()">\n              <img src="assets/imgs/13.jpg" class="bg">\n              <ion-badge item-end>\n                  <ion-icon name="md-stopwatch"></ion-icon>\n                  6 Días\n              </ion-badge>\n              <div class="text">\n                  <h2>1 Docena de empanadas de carne </h2>\n                  <p class="d-flex text-theme">\n                      10 {{\'people_send\' | translate}}\n                  </p>\n              </div>\n          </ion-item>\n          <ion-item (click)="offerdetail()">\n              <img src="assets/imgs/14.jpg" class="bg">\n              <ion-badge item-end>\n                  <ion-icon name="md-stopwatch"></ion-icon>\n                  5 Hrs\n              </ion-badge>\n              <div class="text">\n                  <h2>Menú del día completo para dos personas</h2>\n                  <p class="d-flex text-theme">\n                      1 {{\'people_send\' | translate}}\n                  </p>\n              </div>\n          </ion-item>\n\n          <ion-item (click)="offerdetail()">\n              <img src="assets/imgs/16.jpg" class="bg">\n              <ion-badge item-end>\n                  <ion-icon name="md-stopwatch"></ion-icon>\n                  2 Días\n              </ion-badge>\n              <div class="text">\n                  <h2>12 Alfajores Cachafaz dulce de leche</h2>\n                  <p class="d-flex text-theme">\n                      2 {{\'people_send\' | translate}}\n                  </p>\n              </div>\n          </ion-item>\n          <ion-item (click)="offerdetail()">\n              <img src="assets/imgs/17.jpg" class="bg">\n              <ion-badge item-end>\n                  <ion-icon name="md-stopwatch"></ion-icon>\n                  6 Días\n              </ion-badge>\n              <div class="text">\n                  <h2>Choripan + gaseosa para llevar </h2>\n                  <p class="d-flex text-theme">\n                      3 {{\'people_send\' | translate}}\n                  </p>\n              </div>\n          </ion-item>\n          <ion-item (click)="offerdetail()">\n              <img src="assets/imgs/18.jpg" class="bg">\n              <ion-badge item-end>\n                  <ion-icon name="md-stopwatch"></ion-icon>\n                  5 Hrs\n              </ion-badge>\n              <div class="text">\n                  <h2>24 Facturas mixtas</h2>\n                  <p class="d-flex text-theme">\n                      4 {{\'people_send\' | translate}}\n                  </p>\n              </div>\n          </ion-item>\n      </ion-list>\n\n  </div>\n</ion-content>\n<ion-footer no-border class="d-flex">\n  <ion-icon class="material-icons text-white bg-theme end" *ngIf="near == \'offers\'" (click)="edit_offer()">add</ion-icon>\n  <ion-icon class="material-icons text-white bg-theme end" *ngIf="near == \'events\'" (click)="edit_event()">add</ion-icon>\n</ion-footer>\n'/*ion-inline-end:"D:\ionic\MundoCanjeApp\app\appDesa\src\pages\categoryresult\categoryresult.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]])
    ], CategoryresultPage);
    return CategoryresultPage;
}());

//# sourceMappingURL=categoryresult.js.map

/***/ }),

/***/ 732:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewchattingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NewchattingPage = /** @class */ (function () {
    function NewchattingPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    NewchattingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NewchattingPage');
    };
    NewchattingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-newchatting',template:/*ion-inline-start:"D:\ionic\MundoCanjeApp\app\appDesa\src\pages\newchatting\newchatting.html"*/'<ion-header class="bg-transparent">\n    <ion-navbar>\n        <ion-title>\n            <span class="text-white">Luciano Fernandez<small>online</small></span>\n        </ion-title>\n    </ion-navbar>\n    <div class="banner">\n        <img src="assets/imgs/16.jpg" class="bg">\n    </div>\n</ion-header>\n\n<ion-content class="bg-color">\n    <div class="send chat-box" padding>\n        <h6>Buen día, acepté la solicitud. Estarían faltando $350 para completar el total</h6>\n        <p>11:58</p>\n    </div>\n    \n    \n</ion-content>\n<ion-footer no-border>\n    <div class="fixed-bottom form">\n        <ion-list class="" no-lines>\n            <ion-item>\n                <ion-input type="text" placeholder="{{\'type_your_message\' | translate}}"></ion-input>\n                <div class="" item-end>\n                    <ion-icon name="attach" class="attach"></ion-icon>\n                    <ion-icon name="md-send" class=""></ion-icon>\n                </div>\n            </ion-item>\n        </ion-list>\n    </div>\n</ion-footer>\n'/*ion-inline-end:"D:\ionic\MundoCanjeApp\app\appDesa\src\pages\newchatting\newchatting.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], NewchattingPage);
    return NewchattingPage;
}());

//# sourceMappingURL=newchatting.js.map

/***/ }),

/***/ 733:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListCanjesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_offer_edit_offer__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__edit_event_edit_event__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__eventdetail_eventdetail__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__offerdetail_offerdetail__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__search_search__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__chats_chats__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__map_map__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__account_account__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_product_service_product_service__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var ListCanjesPage = /** @class */ (function () {
    function ListCanjesPage(navCtrl, modalCtrl, prodServ) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.prodServ = prodServ;
        this.ObtenerCanjes();
    }
    ListCanjesPage.prototype.ObtenerCanjes = function () {
        var _this = this;
        this.prodServ.getProductByIdTipo("1")
            .subscribe(function (data) {
            _this.listCanjes = data;
            console.log("El canje 1: " + _this.listCanjes[0].Nombre);
        }, function (error) { console.log(error); });
    };
    ListCanjesPage.prototype.edit_offer = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__edit_offer_edit_offer__["a" /* Edit_offerPage */]);
    };
    ListCanjesPage.prototype.edit_event = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__edit_event_edit_event__["a" /* Edit_eventPage */]);
    };
    ListCanjesPage.prototype.offerdetail = function (IdProd) {
        console.log("El producto id es: " + IdProd);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__offerdetail_offerdetail__["a" /* OfferdetailPage */], { idProd: IdProd });
    };
    ListCanjesPage.prototype.eventdetail = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__eventdetail_eventdetail__["a" /* EventdetailPage */]);
    };
    ListCanjesPage.prototype.map = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__map_map__["a" /* MapPage */]);
    };
    ListCanjesPage.prototype.map22 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__chats_chats__["a" /* ChatsPage */]);
    };
    ListCanjesPage.prototype.perfil = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__account_account__["a" /* AccountPage */]);
    };
    ListCanjesPage.prototype.search = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__search_search__["a" /* SearchPage */]);
        modal.present();
    };
    ListCanjesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list-canjes',template:/*ion-inline-start:"D:\ionic\MundoCanjeApp\app\appDesa\src\pages\list-canjes\list-canjes.html"*/'<ion-header class="bg-color">\n        <ion-navbar>\n                <ion-title class="text-theme">  \n                    <img src="assets/imgs/banner_mc.png" width="50%" height="50%" (click)="search()">\n                    <span class="end">                \n                        <img src="assets/imgs/ic_search-4.png" (click)="search()">\n                        <img src="assets/imgs/ic_account-4.png" (click)="perfil()">\n        \n                    </span>\n                </ion-title>\n            </ion-navbar>  \n  </ion-header>\n  \n  <ion-content class="bg-color">\n    <div>\n        <ion-list  class="offers" *ngFor="let d of listCanjes; let i = index">\n            <ion-item (click)="offerdetail(d.Id)">\n                <img [src]="d.Imagen" class="bg">\n                <ion-badge item-end>\n                    <ion-icon name="md-stopwatch"></ion-icon>\n                    {{d.Ult_Dias}}  Días\n                </ion-badge>\n                <div class="text">\n                    <h2>{{d.Nombre}}</h2>\n                    <p class="d-flex">\n                      <span class="text-theme">{{d.Descripcion}}</span>\n                      <span class=""> | {{d.Categoria}}</span>\n                      <span class="end">$ {{d.Importe}}</span>\n                    </p>                  \n                </div>\n            </ion-item>\n\n          <!--\n            <ion-item (click)="offerdetail()">\n                <img src="assets/imgs/12.jpg" class="bg">\n                <ion-badge item-end>\n                    <ion-icon name="md-stopwatch"></ion-icon>\n                    2 Días\n                </ion-badge>\n                <div class="text">\n                    <h2>1 Parrillada completa para 4 personas</h2>\n                    <p class="d-flex text-theme">\n                        5 {{\'people_send\' | translate}}\n                    </p>\n                </div>\n            </ion-item>\n            <ion-item (click)="offerdetail()">\n                <img src="assets/imgs/13.jpg" class="bg">\n                <ion-badge item-end>\n                    <ion-icon name="md-stopwatch"></ion-icon>\n                    6 Días\n                </ion-badge>\n                <div class="text">\n                    <h2>1 Docena de empanadas de carne </h2>\n                    <p class="d-flex text-theme">\n                        10 {{\'people_send\' | translate}}\n                    </p>\n                </div>\n            </ion-item>\n            <ion-item (click)="offerdetail()">\n                <img src="assets/imgs/14.jpg" class="bg">\n                <ion-badge item-end>\n                    <ion-icon name="md-stopwatch"></ion-icon>\n                    5 Hrs\n                </ion-badge>\n                <div class="text">\n                    <h2>Menú del día completo para dos personas</h2>\n                    <p class="d-flex text-theme">\n                        1 {{\'people_send\' | translate}}\n                    </p>\n                </div>\n            </ion-item>\n  \n            <ion-item (click)="offerdetail()">\n                <img src="assets/imgs/16.jpg" class="bg">\n                <ion-badge item-end>\n                    <ion-icon name="md-stopwatch"></ion-icon>\n                    2 Días\n                </ion-badge>\n                <div class="text">\n                    <h2>12 Alfajores Cachafaz dulce de leche</h2>\n                    <p class="d-flex text-theme">\n                        2 {{\'people_send\' | translate}}\n                    </p>\n                </div>\n            </ion-item>\n            <ion-item (click)="offerdetail()">\n                <img src="assets/imgs/17.jpg" class="bg">\n                <ion-badge item-end>\n                    <ion-icon name="md-stopwatch"></ion-icon>\n                    6 Días\n                </ion-badge>\n                <div class="text">\n                    <h2>Choripan + gaseosa para llevar </h2>\n                    <p class="d-flex text-theme">\n                        3 {{\'people_send\' | translate}}\n                    </p>\n                </div>\n            </ion-item>\n            <ion-item (click)="offerdetail()">\n                <img src="assets/imgs/18.jpg" class="bg">\n                <ion-badge item-end>\n                    <ion-icon name="md-stopwatch"></ion-icon>\n                    5 Hrs\n                </ion-badge>\n                <div class="text">\n                    <h2>24 Facturas mixtas</h2>\n                    <p class="d-flex text-theme">\n                        4 {{\'people_send\' | translate}}\n                    </p>\n                </div>\n            </ion-item>\n\n            -->\n\n        </ion-list>\n  \n    </div>\n  </ion-content>\n  <ion-footer no-border class="d-flex">\n    <ion-icon class="material-icons text-white bg-theme end" *ngIf="near == \'offers\'" (click)="edit_offer()">add</ion-icon>\n    <ion-icon class="material-icons text-white bg-theme end" *ngIf="near == \'events\'" (click)="edit_event()">add</ion-icon>\n  </ion-footer>\n  '/*ion-inline-end:"D:\ionic\MundoCanjeApp\app\appDesa\src\pages\list-canjes\list-canjes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_10__providers_product_service_product_service__["a" /* ProductServiceProvider */]])
    ], ListCanjesPage);
    return ListCanjesPage;
}());

//# sourceMappingURL=list-canjes.js.map

/***/ }),

/***/ 734:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListDescuentosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_offer_edit_offer__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__edit_event_edit_event__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__eventdetail_eventdetail__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__offerdetail_offerdetail__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__search_search__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__chats_chats__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__map_map__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__account_account__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_product_service_product_service__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var ListDescuentosPage = /** @class */ (function () {
    function ListDescuentosPage(navCtrl, modalCtrl, prodServ) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.prodServ = prodServ;
        this.ObtenerDescuentos();
    }
    ListDescuentosPage.prototype.ObtenerDescuentos = function () {
        var _this = this;
        this.prodServ.getProductByIdTipo("2")
            .subscribe(function (data) {
            _this.listDescuentos = data;
            console.log("El descuento 1: " + _this.listDescuentos[0].Nombre);
        }, function (error) { console.log(error); });
    };
    ListDescuentosPage.prototype.edit_offer = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__edit_offer_edit_offer__["a" /* Edit_offerPage */]);
    };
    ListDescuentosPage.prototype.edit_event = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__edit_event_edit_event__["a" /* Edit_eventPage */]);
    };
    ListDescuentosPage.prototype.offerdetail = function (IdProd) {
        console.log("El producto id es: " + IdProd);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__offerdetail_offerdetail__["a" /* OfferdetailPage */], { idProd: IdProd });
    };
    ListDescuentosPage.prototype.eventdetail = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__eventdetail_eventdetail__["a" /* EventdetailPage */]);
    };
    ListDescuentosPage.prototype.map = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__map_map__["a" /* MapPage */]);
    };
    ListDescuentosPage.prototype.map22 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__chats_chats__["a" /* ChatsPage */]);
    };
    ListDescuentosPage.prototype.perfil = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__account_account__["a" /* AccountPage */]);
    };
    ListDescuentosPage.prototype.search = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__search_search__["a" /* SearchPage */]);
        modal.present();
    };
    ListDescuentosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list-descuentos',template:/*ion-inline-start:"D:\ionic\MundoCanjeApp\app\appDesa\src\pages\list-descuentos\list-descuentos.html"*/'<ion-header class="bg-color">\n    <ion-navbar>\n        <ion-title class="text-theme">{{\'app_title\' | translate}}\n            <span class="end">\n                \n                <img src="assets/imgs/ic_search-4.png" (click)="search()">\n                <img src="assets/imgs/ic_account-4.png" (click)="perfil()">\n            </span>\n        </ion-title>\n    </ion-navbar>  \n  </ion-header>\n  \n  <ion-content class="bg-color">\n    <div>\n        <ion-list  class="offers" *ngFor="let d of listDescuentos; let i = index">\n            <ion-item (click)="offerdetail(d.Id)">\n                <img [src]="d.Imagen" class="bg">\n                <ion-badge item-end>\n                    <ion-icon name="md-stopwatch"></ion-icon>\n                    {{d.Ult_Dias}} Días\n                </ion-badge>\n                <div class="text">\n                    <h2>{{d.Nombre}}</h2>\n                    <p class="d-flex text-theme">\n                        {{d.Descripcion}}\n                    </p>\n                </div>\n            </ion-item>\n\n        </ion-list>\n  \n    </div>\n  </ion-content>\n  <ion-footer no-border class="d-flex">\n    <ion-icon class="material-icons text-white bg-theme end" *ngIf="near == \'offers\'" (click)="edit_offer()">add</ion-icon>\n    <ion-icon class="material-icons text-white bg-theme end" *ngIf="near == \'events\'" (click)="edit_event()">add</ion-icon>\n  </ion-footer>\n  '/*ion-inline-end:"D:\ionic\MundoCanjeApp\app\appDesa\src\pages\list-descuentos\list-descuentos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_10__providers_product_service_product_service__["a" /* ProductServiceProvider */]])
    ], ListDescuentosPage);
    return ListDescuentosPage;
}());

//# sourceMappingURL=list-descuentos.js.map

/***/ }),

/***/ 735:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FiltersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__users_list_users_list__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__list_canjes2_list_canjes2__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_category_service_category_service__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FiltersPage = /** @class */ (function () {
    function FiltersPage(navCtrl, loadingCtrl, modalCtrl, navParams, serviceCat) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.serviceCat = serviceCat;
        var loading = this.loadingCtrl.create({ content: 'Cargando...' });
        loading.present();
        this.vCategoria = "Cargando...";
        this.vIdCategoria = this.navParams.get('IdCategoria');
        this.ObtenerCategoria(this.vIdCategoria, loading);
    }
    FiltersPage.prototype.ObtenerCategoria = function (idCategoria, loading) {
        var _this = this;
        this.serviceCat.GetTotalesById(idCategoria)
            .subscribe(function (data) {
            var data2 = JSON.stringify(data);
            _this.objCategoria = JSON.parse(data2);
            _this.vCategoria = _this.objCategoria.Nombre;
            _this.vCantUsuarios = _this.objCategoria.CantUsuarios;
            _this.vCantProductos = _this.objCategoria.CantProductos;
            _this.vCantHombres = _this.objCategoria.CantHombres;
            _this.vCantMujeres = _this.objCategoria.CantMujeres;
            _this.vCantNinios = _this.objCategoria.CantNinios;
            loading.dismiss();
        }, function (error) {
            console.log(error);
            loading.dismiss();
        });
    };
    FiltersPage.prototype.VerListaDeUsuarios = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__users_list_users_list__["a" /* UsersListPage */], { IdCategoria: this.vIdCategoria });
    };
    FiltersPage.prototype.VerCanjesPorCategoria = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__list_canjes2_list_canjes2__["a" /* ListCanjes2Page */], { IdCategoria: this.vIdCategoria });
    };
    FiltersPage.prototype.VerCanjesPorSexo = function (sexo) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__list_canjes2_list_canjes2__["a" /* ListCanjes2Page */], { Sexo: sexo });
    };
    FiltersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-filters',template:/*ion-inline-start:"D:\ionic\MundoCanjeApp\app\appDesa\src\pages\filters\filters.html"*/'<ion-header>\n  <ion-navbar>\n      <ion-title>{{vCategoria}} </ion-title> \n  </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-color">\n  <ion-list no-lines>\n       <ion-item (click)="vCantUsuarios>0 && VerListaDeUsuarios()">\n          <img src="assets/imgs/user_filter.jpg" class="bg">\n          <div text-center class="text">\n              <h2 class="text-white">Listado de Usuarios</h2>\n              <p class="text-gray">{{vCantUsuarios}} Perfiles</p>\n          </div>\n      </ion-item>\n      \n      <ion-item (click)="vCantProductos>0 && VerCanjesPorCategoria()">\n          <img src="assets/imgs/catalogo_filter.jpg" class="bg">\n          <div text-center class="text">\n              <h2 class="text-white">Ver Catálogo</h2>\n              <p class="text-gray">{{vCantProductos}} Resultados</p>\n          </div>\n      </ion-item>\n      <ion-item (click)="vCantHombres>0 && VerCanjesPorSexo(\'Hombre\')">\n          <img src="assets/imgs/men_filter.jpg" class="bg">\n          <div text-center class="text">\n              <h2 class="text-white">Hombres</h2>\n              <p class="text-gray">{{vCantHombres}}  Perfiles</p>\n          </div>\n      </ion-item>\n      <ion-item (click)="vCantMujeres>0 && VerCanjesPorSexo(\'Mujer\')">\n          <img src="assets/imgs/women_filter.jpg" class="bg">\n          <div text-center class="text">\n              <h2 class="text-white">Mujeres</h2>\n              <p class="text-gray">{{vCantMujeres}} Perfiles</p>\n          </div>\n      </ion-item>\n      \n    <!--\n      <ion-item *ngFor="let d of categoriasLst; let i = index" (click)="category_result()">\n          <img [src]="d.Imagen" class="bg">\n          <div text-center class="text">\n              <h2 class="text-white">{{d.Nombre | translate}}</h2>\n              <p class="text-gray">{{d.Id}} Canjes</p>\n          </div>\n      </ion-item>\n      -->\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\ionic\MundoCanjeApp\app\appDesa\src\pages\filters\filters.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_category_service_category_service__["a" /* CategoryServiceProvider */]])
    ], FiltersPage);
    return FiltersPage;
}());

//# sourceMappingURL=filters.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListCanjes2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_offer_edit_offer__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__edit_event_edit_event__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__offerdetail_offerdetail__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__search_search__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__account_account__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tabs_tabs__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_product_service_product_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_global_pedido_global_pedido__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_pedidos_service_pedidos_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_global_global__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};












var ListCanjes2Page = /** @class */ (function () {
    function ListCanjes2Page(navCtrl, toastController, user, pedidoService, loadingCtrl, alertCtrl, pedido, modalCtrl, navParams, prodServ) {
        this.navCtrl = navCtrl;
        this.toastController = toastController;
        this.user = user;
        this.pedidoService = pedidoService;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.pedido = pedido;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.prodServ = prodServ;
        var loading = this.loadingCtrl.create({ content: 'Cargando...' });
        loading.present();
        this.CanjesOfrecidos = true;
        var IdCategoria = this.navParams.get('IdCategoria');
        var Sexo = this.navParams.get('Sexo');
        this.tokenUsuario = this.navParams.get('tokenU');
        var IdUsuario = this.navParams.get('IdUsuario');
        if (IdCategoria != null) {
            this.ObtenerCanjesPorCategoria(IdCategoria, loading);
        }
        else if (Sexo != null) {
            this.ObtenerCanjesPorSexo(Sexo, loading);
        }
        else if (IdUsuario != null) {
            this.ObtenerCanjesPorUsuario(IdUsuario, loading);
        }
        else {
            this.ObtenerCanjes(loading);
        }
    }
    ListCanjes2Page.prototype.ObtenerCanjes = function (loading) {
        var _this = this;
        this.prodServ.getProductByIdTipo("1")
            .subscribe(function (data) {
            _this.listCanjes = data;
            console.log("El canje 1: " + _this.listCanjes[0].Nombre);
            loading.dismiss();
        }, function (error) {
            console.log(error);
            loading.dismiss();
        });
    };
    ListCanjes2Page.prototype.ObtenerCanjesPorCategoria = function (idCategoria, loading) {
        var _this = this;
        this.prodServ.getCanjesByCategoria(idCategoria)
            .subscribe(function (data) {
            _this.listCanjes = data;
            console.log("El canje 1: " + _this.listCanjes[0].Nombre);
            loading.dismiss();
        }, function (error) {
            console.log(error);
            loading.dismiss();
        });
    };
    ListCanjes2Page.prototype.ObtenerCanjesPorUsuario = function (idUsuario, loading) {
        var _this = this;
        this.prodServ.getCanjesByUsuario(idUsuario)
            .subscribe(function (data) {
            _this.listCanjes = data;
            if (_this.listCanjes.length == 0) {
                _this.CanjesOfrecidos = false;
            }
            loading.dismiss();
        }, function (error) {
            console.log(error);
            loading.dismiss();
        });
    };
    ListCanjes2Page.prototype.ObtenerCanjesPorSexo = function (sexo, loading) {
        var _this = this;
        this.prodServ.getCanjesBySexo(sexo)
            .subscribe(function (data) {
            _this.listCanjes = data;
            console.log("El canje 1: " + _this.listCanjes[0].Nombre);
            loading.dismiss();
        }, function (error) {
            console.log(error);
            loading.dismiss();
        });
    };
    ListCanjes2Page.prototype.edit_offer = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__edit_offer_edit_offer__["a" /* Edit_offerPage */]);
    };
    ListCanjes2Page.prototype.edit_event = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__edit_event_edit_event__["a" /* Edit_eventPage */]);
    };
    ListCanjes2Page.prototype.offerdetail = function (IdProd) {
        console.log("El producto id es: " + IdProd);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__offerdetail_offerdetail__["a" /* OfferdetailPage */], { idProd: IdProd });
    };
    ListCanjes2Page.prototype.perfil = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__account_account__["a" /* AccountPage */]);
    };
    ListCanjes2Page.prototype.search = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__search_search__["a" /* SearchPage */]);
        modal.present();
    };
    ListCanjes2Page.prototype.presentPrompt = function (idProd) {
        /* let alert = this.alertCtrl.create({
          title: 'Agregar Comentario',
          inputs: [
            {
              name: 'comentario',
              placeholder: 'Ingresar comentario'
            }
          ],
          buttons: [
            {
              text: 'Cancelar',
              role: 'cancel',
              handler: data => {
                console.log('Cancel clicked');
              }
            },
            {
              text: 'Enviar',
              handler: data => {
                console.log("Usuario es: "+data.comentario);
                this.SendNotification(idProd, data.comentario);
              }
            }
          ]
        });
        alert.present(); */
        this.SendNotification(idProd, "");
    };
    ListCanjes2Page.prototype.SendNotification = function (IdProd, Comentario) {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: 'Cargando...' });
        loading.present();
        this.pedido.Id = "0";
        this.pedido.IdProductoInteres = IdProd;
        this.pedido.IdPedido_Estado = "3";
        var myDate = new Date().toDateString();
        this.pedido.FechaPedido = myDate;
        this.pedido.IdUsuarioSolicita = this.user.Id;
        this.pedido.Comentarios = Comentario;
        this.pedido.TipoMatch = "CANJE";
        this.pedidoService.postPedido(this.pedido)
            .subscribe(function (data) {
            // this.pushNotif.SendNotificationPush("Solicitud recibida", "Nueva solicitud de Canje")        
            // .subscribe(
            //     (data)=> {
            loading.dismiss();
            _this.presentToast();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__tabs_tabs__["a" /* TabsPage */], { tokenU: _this.tokenUsuario });
            //     },
            //     (error)=>{console.log("ERROR al enviar la push notification: " + error);}
            // )                 
        }, function (error) {
            console.log("ERROR en Save to DB: " + error);
            loading.dismiss();
        });
    };
    ListCanjes2Page.prototype.presentToast = function () {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: 'Se envió la solicitud.',
                            duration: 3000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    ListCanjes2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list-canjes2',template:/*ion-inline-start:"D:\ionic\MundoCanjeApp\app\appDesa\src\pages\list-canjes2\list-canjes2.html"*/'<ion-header class="bg-color">\n  <ion-navbar>\n      <ion-title class="text-theme">  \n        <span class="start">                \n          <img src="assets/imgs/ic_open-menu.png" (click)="perfil()">\n      </span>\n          <img src="assets/imgs/banner_mc.png" width="50%" height="50%" (click)="search()">\n          <span class="end">                \n              <img src="assets/imgs/ic_search-4.png" (click)="search()">\n          </span>\n      </ion-title>\n  </ion-navbar>\n  \n</ion-header>\n<ion-content class="bg-background">\n<div>\n  <!-- <ion-list  class="offers" *ngFor="let d of listCanjes; let i = index">\n      <ion-item (click)="offerdetail(d.Id)">\n          <img [src]="d.Imagen" class="bg">\n          <ion-badge item-end>\n              <ion-icon name="md-stopwatch"></ion-icon>\n              {{d.Ult_Dias}}  Días\n          </ion-badge>\n          <div class="text">\n              <h2>{{d.Nombre}}</h2>\n              <p class="d-flex">\n                <span class="text-theme">{{d.Descripcion}}</span>\n                <span class=""> | {{d.Categoria}}</span>\n                <span class="end">$ {{d.Importe}}</span>\n              </p>                  \n          </div>\n      </ion-item>\n\n  </ion-list> -->\n  <ion-list class="offers"  *ngFor="let d of listCanjes; let i = index">\n    <ion-card>\n      <ion-item >\n        <ion-avatar item-start>\n          <img [src]="d.UsuarioImagen" style="width: 50px;height: 50px;">\n        </ion-avatar>\n        <h2 style="font-size: 1.9rem;padding-bottom: 2px;font-weight: 500;">{{d.Usuario}}</h2>\n        <p style="font-size: 1.4rem;font-weight: normal">{{d.Fecha_Publicacion | date:\'dd/MM/yyyy\'}}</p>\n        <ion-avatar item-end>\n          <img style="border-radius: 0%;width: 35px;height: 35px;" src="assets/imgs/share.png">\n        </ion-avatar>\n      </ion-item>\n    \n     <img [src]="d.Imagen">\n    \n      <ion-card-content>\n        <p>{{d.Nombre}}</p>\n        \n        <ion-item style="padding-left: 0px;">\n          <ion-avatar item-start style="margin-right: 0px;">\n            <img src="assets/imgs/pin.png" style="width: 30px;height: 30px;">\n          </ion-avatar>\n          <p style="color: #222;font-weight: normal;">2 km Belgrano</p>                      \n        </ion-item>\n        <ion-item (click)="presentPrompt(d.Id)" style="padding-left: 0px;">\n          <ion-avatar item-start style="margin-right: 0px;">\n            <img src="assets/imgs/send.png" style="width: 30px;height: 30px;border-radius:0%;">\n          </ion-avatar>\n          <p style="color: #3a97c9;font-weight: normal;">Enviar solicitud de canje</p>                      \n        </ion-item>\n        \n      \n      </ion-card-content>\n    \n      <ion-row>\n        <ion-col>\n          <button ion-button icon-start clear small>\n            <ion-icon name="thumbs-up"></ion-icon>\n            <div>12 Likes</div>\n          </button>\n        </ion-col>\n        <ion-col>\n          <button ion-button icon-start clear small>\n            <ion-icon name="text"></ion-icon>\n            <div>4 Ofertas</div>\n          </button>\n        </ion-col>\n        \n      </ion-row>\n    \n    </ion-card>\n  </ion-list>\n  <div class="CanjeadosEmpty" *ngIf="!CanjesOfrecidos"> \n    <img  src="assets/imgs/NoCanjes.png" >          \n    <h2 >No hay canjes ofrecidos</h2>           \n  </div>\n\n</div>\n</ion-content>\n<ion-footer no-border class="d-flex">\n<ion-icon class="material-icons text-white bg-theme end" *ngIf="near == \'offers\'" (click)="edit_offer()">add</ion-icon>\n<ion-icon class="material-icons text-white bg-theme end" *ngIf="near == \'events\'" (click)="edit_event()">add</ion-icon>\n</ion-footer>\n'/*ion-inline-end:"D:\ionic\MundoCanjeApp\app\appDesa\src\pages\list-canjes2\list-canjes2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_11__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_10__providers_pedidos_service_pedidos_service__["a" /* PedidosServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_9__providers_global_pedido_global_pedido__["a" /* GlobalPedidoProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_8__providers_product_service_product_service__["a" /* ProductServiceProvider */]])
    ], ListCanjes2Page);
    return ListCanjes2Page;
}());

//# sourceMappingURL=list-canjes2.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalProductProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/*
  Generated class for the GlobalProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var GlobalProductProvider = /** @class */ (function () {
    function GlobalProductProvider() {
    }
    //ImageData: string;
    GlobalProductProvider.prototype.getProduct = function () {
        return this.product;
    };
    GlobalProductProvider.prototype.setProduct = function (product) {
        this.product = product;
    };
    GlobalProductProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], GlobalProductProvider);
    return GlobalProductProvider;
}());

//# sourceMappingURL=global-product.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Filters2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__users_list_users_list__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__list_canjes2_list_canjes2__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_category_service_category_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__list_descuentos2_list_descuentos2__ = __webpack_require__(178);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var Filters2Page = /** @class */ (function () {
    function Filters2Page(navCtrl, loadingCtrl, modalCtrl, navParams, serviceCat) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.serviceCat = serviceCat;
        var loading = this.loadingCtrl.create({ content: 'Cargando...' });
        loading.present();
        this.vCategoria = "Cargando...";
        this.vIdCategoria = this.navParams.get('IdCategoria');
        this.ObtenerCategoria(this.vIdCategoria, loading);
    }
    Filters2Page.prototype.ObtenerCategoria = function (idCategoria, loading) {
        var _this = this;
        this.serviceCat.GetTotalesById(idCategoria)
            .subscribe(function (data) {
            var data2 = JSON.stringify(data);
            _this.objCategoria = JSON.parse(data2);
            _this.vCategoria = _this.objCategoria.Nombre;
            _this.vCantUsuarios = _this.objCategoria.CantUsuarios;
            _this.vCantProductos = _this.objCategoria.CantProductos;
            _this.vCantHombres = _this.objCategoria.CantHombres;
            _this.vCantMujeres = _this.objCategoria.CantMujeres;
            _this.vCantNinios = _this.objCategoria.CantNinios;
            _this.vCantBeneficios = _this.objCategoria.CantDescuentos;
            loading.dismiss();
        }, function (error) {
            console.log(error);
            loading.dismiss();
        });
    };
    Filters2Page.prototype.VerListaDeUsuarios = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__users_list_users_list__["a" /* UsersListPage */], { IdCategoria: this.vIdCategoria });
    };
    Filters2Page.prototype.VerCanjesPorCategoria = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__list_canjes2_list_canjes2__["a" /* ListCanjes2Page */], { IdCategoria: this.vIdCategoria });
    };
    Filters2Page.prototype.VerCanjesPorSexo = function (sexo) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__list_canjes2_list_canjes2__["a" /* ListCanjes2Page */], { Sexo: sexo });
    };
    Filters2Page.prototype.VerDescuentosPorCategoria = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__list_descuentos2_list_descuentos2__["a" /* ListDescuentos2Page */], { IdCategoria: this.vIdCategoria });
    };
    Filters2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-filters2',template:/*ion-inline-start:"D:\ionic\MundoCanjeApp\app\appDesa\src\pages\filters2\filters2.html"*/'<ion-header>\n  <ion-navbar>\n      <ion-title>{{vCategoria}} </ion-title> \n  </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-background">\n  <!-- <ion-list no-lines>\n       <ion-item (click)="vCantUsuarios>0 && VerListaDeUsuarios()">\n          <img src="assets/imgs/user_filter.jpg" class="bg">\n          <div text-center class="text">\n              <h2 class="text-white">Listado de Usuarios</h2>\n              <p class="text-gray">{{vCantUsuarios}} Perfiles</p>\n          </div>\n      </ion-item>\n      \n      <ion-item (click)="vCantProductos>0 && VerCanjesPorCategoria()">\n          <img src="assets/imgs/catalogo_filter.jpg" class="bg">\n          <div text-center class="text">\n              <h2 class="text-white">Ver Catálogo</h2>\n              <p class="text-gray">{{vCantProductos}} Resultados</p>\n          </div>\n      </ion-item>\n      <ion-item (click)="vCantHombres>0 && VerCanjesPorSexo(\'Hombre\')">\n          <img src="assets/imgs/men_filter.jpg" class="bg">\n          <div text-center class="text">\n              <h2 class="text-white">Hombres</h2>\n              <p class="text-gray">{{vCantHombres}}  Perfiles</p>\n          </div>\n      </ion-item>\n      <ion-item (click)="vCantMujeres>0 && VerCanjesPorSexo(\'Mujer\')">\n          <img src="assets/imgs/women_filter.jpg" class="bg">\n          <div text-center class="text">\n              <h2 class="text-white">Mujeres</h2>\n              <p class="text-gray">{{vCantMujeres}} Perfiles</p>\n          </div>\n      </ion-item>\n      \n  </ion-list> -->\n    <ion-list class="offers">\n        \n      <ion-card class="CardCss" (click)="vCantUsuarios>0 && VerListaDeUsuarios()">     \n          <ion-row>\n            <ion-col col-5 style="background-color: #a26bb7;">\n              <img src="assets/imgs/People3.jpg" style="min-width: 180px;">\n            </ion-col>\n            <ion-col col-7 style="background-color: #a26bb7;">\n              <h2 class="DiscountShow">LISTADO DE USUARIOS</h2>\n              <p style="font-size: 16px;text-align: center;margin-top: 10px;">{{vCantUsuarios}} Perfiles</p>\n            </ion-col>\n        </ion-row>\n    </ion-card>\n    <ion-card class="CardCss" (click)="vCantProductos>0 && VerCanjesPorCategoria()">     \n          <ion-row>\n            <ion-col col-5 style="background-color: #a26bb7;">\n              <img src="assets/imgs/Product2.png" style="min-width: 180px;">\n            </ion-col>\n            <ion-col col-7 style="background-color: #a26bb7;">\n              <h2 class="DiscountShow">VER CATÁLOGO</h2>\n              <p style="font-size: 16px;text-align: center;margin-top: 10px;">{{vCantProductos}} Resultados</p>\n            </ion-col>\n        </ion-row>\n    </ion-card>\n    <ion-card class="CardCss" (click)="vCantHombres>0 && VerCanjesPorSexo(\'Hombre\')">     \n      <ion-row>\n        <ion-col col-5 style="background-color: #a26bb7;">\n          <img src="assets/imgs/Men1.jpg" style="min-width: 180px;">\n        </ion-col>\n        <ion-col col-7 style="background-color: #a26bb7;">\n          <h2 class="DiscountShow">HOMBRES</h2>\n          <p style="font-size: 16px;text-align: center;margin-top: 10px;">{{vCantHombres}} Perfiles</p>\n        </ion-col>\n    </ion-row>\n    </ion-card>\n    <ion-card class="CardCss" (click)="vCantMujeres>0 && VerCanjesPorSexo(\'Mujer\')">      \n      <ion-row>\n        <ion-col col-5 style="background-color: #a26bb7;">\n          <img src="assets/imgs/Mujeres1.jpg" style="min-width: 180px;">\n        </ion-col>\n        <ion-col col-7 style="background-color: #a26bb7;">\n          <h2 class="DiscountShow">MUJERES</h2>\n          <p style="font-size: 16px;text-align: center;margin-top: 10px;">{{vCantMujeres}} Perfiles</p>\n        </ion-col>\n    </ion-row>\n    </ion-card>\n    <ion-card class="CardCss" (click)="vCantBeneficios>0 && VerDescuentosPorCategoria()">      \n      <ion-row>\n        <ion-col col-5 style="background-color: #a26bb7;">\n          <img src="assets/imgs/MujerDescuento.jpg" style="min-width: 180px;">\n        </ion-col>\n        <ion-col col-7 style="background-color: #a26bb7;">\n          <h2 class="DiscountShow">BENEFICIOS</h2>\n          <p style="font-size: 16px;text-align: center;margin-top: 10px;">{{vCantBeneficios}} Beneficios</p>\n        </ion-col>\n    </ion-row>\n    </ion-card>\n    \n  </ion-list> \n</ion-content>\n'/*ion-inline-end:"D:\ionic\MundoCanjeApp\app\appDesa\src\pages\filters2\filters2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_category_service_category_service__["a" /* CategoryServiceProvider */]])
    ], Filters2Page);
    return Filters2Page;
}());

//# sourceMappingURL=filters2.js.map

/***/ })

},[398]);
//# sourceMappingURL=main.js.map