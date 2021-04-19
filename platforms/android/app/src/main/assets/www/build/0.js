webpackJsonp([0],{

/***/ 753:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalNotificationPageModule", function() { return ModalNotificationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_notification__ = __webpack_require__(755);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ModalNotificationPageModule = /** @class */ (function () {
    function ModalNotificationPageModule() {
    }
    ModalNotificationPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__modal_notification__["a" /* ModalNotificationPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__modal_notification__["a" /* ModalNotificationPage */]),
            ],
        })
    ], ModalNotificationPageModule);
    return ModalNotificationPageModule;
}());

//# sourceMappingURL=modal-notification.module.js.map

/***/ }),

/***/ 755:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalNotificationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_product_service_product_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_global__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_pedidos_service_pedidos_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_global_pedido_global_pedido__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_notification_service_notification_service__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tabs_tabs__ = __webpack_require__(23);
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








var ModalNotificationPage = /** @class */ (function () {
    function ModalNotificationPage(navParams, toastController, navCtrl, pedido, pedidoService, view, serviceProd, user, pushNotif) {
        this.navParams = navParams;
        this.toastController = toastController;
        this.navCtrl = navCtrl;
        this.pedido = pedido;
        this.pedidoService = pedidoService;
        this.view = view;
        this.serviceProd = serviceProd;
        this.user = user;
        this.pushNotif = pushNotif;
        this.IdProducto = this.navParams.get('idProd');
        this.getOfrecidos(this.user.Id);
    }
    ModalNotificationPage.prototype.SetProductChecked = function (ProdChk) {
        console.log("El art checked es:" + ProdChk);
        this.pedido.Importe = parseFloat(ProdChk.Importe);
    };
    ModalNotificationPage.prototype.SendNotification = function (vComentarios, vImporte) {
        var _this = this;
        this.pedido.Id = "0";
        this.pedido.IdProductoInteres = this.IdProducto; //Poner id que devuelve el data
        this.pedido.IdPedido_Estado = "3";
        var myDate = new Date().toDateString();
        this.pedido.FechaPedido = myDate;
        /*
            this.pedido.ImagenMatch="";
            this.pedido.ProductoNombreMatch="";
            this.pedido.ProductoDescripcionMatch="";
            */
        //vImporte = vImporte.replace("$","");
        //this.pedido.Comentarios=vComentarios;
        //this.pedido.Importe=vImporte;
        this.pedido.IdUsuarioSolicita = this.user.Id;
        this.pedidoService.postPedido(this.pedido)
            .subscribe(function (data) {
            _this.pushNotif.SendNotificationPush("Solicitud recibida", "Nueva solicitud de Canje")
                .subscribe(function (data) {
                _this.presentToast();
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__tabs_tabs__["a" /* TabsPage */]);
            }, function (error) { console.log("ERROR al enviar la push notification: " + error); });
        }, function (error) { console.log("ERROR en Save to DB: " + error); });
    };
    ModalNotificationPage.prototype.presentToast = function () {
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
    ModalNotificationPage.prototype.ionViewWillLoad = function () {
        var data = this.navParams.get('data');
        console.log(data);
    };
    ModalNotificationPage.prototype.closeModal = function () {
        var data = {
            name: 'John Doe',
            occupation: 'Milkman'
        };
        this.view.dismiss(data);
    };
    ModalNotificationPage.prototype.getOfrecidos = function (idUsuario) {
        var _this = this;
        this.serviceProd.getProductByUser(idUsuario)
            .subscribe(function (data) {
            _this.CanjesLst = data;
        }, function (error) { console.log(error); });
    };
    ModalNotificationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modal-notification',template:/*ion-inline-start:"D:\ionic\MundoCanjeApp\app\appDesa\src\pages\modal-notification\modal-notification.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Solicitud de Canje</ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="closeModal()">Cerrar</button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  \n  \n <!-- <div class="form" padding-left padding-right>-->\n      <ion-list no-lines radio-group>   \n          <ion-list-header>\n              Seleccioná tu Canje\n            </ion-list-header>  \n            \n            <ion-item *ngFor="let d of CanjesLst; let i = index">\n                \n                <ion-thumbnail item-start>\n                    <img [src]="d.Imagen">\n                  </ion-thumbnail>\n                  <ion-label>{{d.Nombre}}</ion-label>\n                  <ion-radio (ionSelect)="SetProductChecked(d)"  [value]=d.Id></ion-radio>\n                \n            </ion-item>\n\n                          \n          <ion-item style="margin-top: 20px;">\n                <!-- <ion-label floating>{{\'event_title\' | translate}}</ion-label>\n                <ion-textarea type="text" value="" [(ngModel)]="product.Descripcion"></ion-textarea> -->\n                <ion-label floating>Comentario</ion-label>\n                <ion-textarea [(ngModel)]="pedido.Comentarios" type="text" value=""></ion-textarea>\n            </ion-item>            \n          <!--\n            <ion-item>\n                <ion-label item-start>Precio ($):</ion-label>\n                <div class="input_box d-flex" item-end>\n                    <ion-icon class="text-black" name="cash"></ion-icon>\n                    <ion-input [(ngModel)]="pedido.Importe" type="number" value="0" ></ion-input>\n                </div>e\n            </ion-item>\n            -->\n      </ion-list>\n      <ion-list no-lines padding-left padding-right class="listButton">\n          <div class="socile d-flex">\n              <button ion-button icon-start block class="btn text-white" round (click)="SendNotification()">\n                  <ion-icon class="material-icons text-white">notifications</ion-icon>\n                  Enviar Solicitud\n              </button>\n          </div>\n      </ion-list>\n\n      \n <!-- </div>-->\n</ion-content>'/*ion-inline-end:"D:\ionic\MundoCanjeApp\app\appDesa\src\pages\modal-notification\modal-notification.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__providers_global_pedido_global_pedido__["a" /* GlobalPedidoProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_pedidos_service_pedidos_service__["a" /* PedidosServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__providers_product_service_product_service__["a" /* ProductServiceProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_notification_service_notification_service__["a" /* NotificationServiceProvider */]])
    ], ModalNotificationPage);
    return ModalNotificationPage;
}());

//# sourceMappingURL=modal-notification.js.map

/***/ })

});
//# sourceMappingURL=0.js.map