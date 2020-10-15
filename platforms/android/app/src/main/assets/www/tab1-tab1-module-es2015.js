(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      Tab 1\n    </ion-title>\n  </ion-toolbar>\n</ion-header >\n\n<ion-content>\n  <ion-list padding>\n    <ion-button expand=\"block\" (click)=\"startScanning()\">scan</ion-button>\n    <ion-list-header>\n      Paired Devices\n    </ion-list-header>\n    <ion-item *ngFor=\"let device of pairedDevices\">\n      {{device.name}}\n    </ion-item>\n    <ion-button expand=\"block\" (click)=\"disconnect()\">Disconnect</ion-button>\n    <ion-list-header>\n      availlable Devices\n    </ion-list-header>\n    <ion-item *ngFor='let device of unpairedDevices'>\n      <span (click)=\"selectDevice(device.id)\">\n        {{device.name }}\n      </span>\n    </ion-item>\n    <ion-spinner name=\"crescent\" *ngIf=\"gettingDevices\"></ion-spinner>\n    <ion-button expand=\"block\" (click)=\"available()\">available</ion-button>\n  </ion-list>\n  <p>{{d}}</p>\n</ion-content>");

/***/ }),

/***/ "./src/app/tab1/tab1-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/tab1/tab1-routing.module.ts ***!
  \*********************************************/
/*! exports provided: Tab1PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageRoutingModule", function() { return Tab1PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");




const routes = [
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_3__["Tab1Page"],
    }
];
let Tab1PageRoutingModule = class Tab1PageRoutingModule {
};
Tab1PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], Tab1PageRoutingModule);



/***/ }),

/***/ "./src/app/tab1/tab1.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "./src/app/explore-container/explore-container.module.ts");
/* harmony import */ var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tab1-routing.module */ "./src/app/tab1/tab1-routing.module.ts");








// import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';
//  import {AlertController, ToastController} from '@ionic/angular';
let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"],
            _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__["Tab1PageRoutingModule"]
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_5__["Tab1Page"]]
    })
], Tab1PageModule);



/***/ }),

/***/ "./src/app/tab1/tab1.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("page-home .submit-btn {\n  color: #FFF;\n  background: rgba(0, 0, 0, 0);\n  border-radius: 30px !important;\n  border: 1px solid #FFF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3BhY28vRG9jdW1lbnRvcy9CbHVlL3NyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLFdBQUE7RUFDQSw0QkFBQTtFQUNBLDhCQUFBO0VBQ0Esc0JBQUE7QUNBUiIsImZpbGUiOiJzcmMvYXBwL3RhYjEvdGFiMS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwYWdlLWhvbWUge1xuICAgIC5zdWJtaXQtYnRuIHtcbiAgICAgICAgY29sb3I6I0ZGRjtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweCAhaW1wb3J0YW50O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjRkZGO1xuICAgICAgfVxufVxuIiwicGFnZS1ob21lIC5zdWJtaXQtYnRuIHtcbiAgY29sb3I6ICNGRkY7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMCk7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHggIWltcG9ydGFudDtcbiAgYm9yZGVyOiAxcHggc29saWQgI0ZGRjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/tab1/tab1.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_native_bluetooth_serial_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/bluetooth-serial/ngx */ "./node_modules/@ionic-native/bluetooth-serial/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");




let Tab1Page = class Tab1Page {
    constructor(bluetoothSerial, alertController) {
        this.bluetoothSerial = bluetoothSerial;
        this.alertController = alertController;
        this.d = "jjdjdj";
        this.success = (data) => {
            console.log(data);
            this.deviceConnected();
        };
        this.fail = (error) => {
            alert(error);
        };
        //  this.bluetoothSerial.disconnect();
        this.bluetoothSerial.connect('98:D3:32:70:7C:95');
        setInterval(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.available();
        }), 1000);
        //  console.log('enable  ',bluetoothSerial.enable());
        //  this.selectDevice('98:D3:32:70:7C:95')
    }
    startScanning() {
        this.pairedDevices = null;
        this.unpairedDevices = null;
        this.gettingDevices = true;
        const unPair = [];
        this.bluetoothSerial.discoverUnpaired().then((success) => {
            console.log(success);
            success.forEach((value, key) => {
                var exists = false;
                unPair.forEach((val2, i) => {
                    if (value.id === val2.id) {
                        exists = true;
                    }
                });
                if (exists === false && value.id !== '') {
                    unPair.push(value);
                }
            });
            this.unpairedDevices = unPair;
            this.gettingDevices = false;
        }, (err) => {
            console.log(err);
        });
        this.bluetoothSerial.list().then((success) => {
            this.pairedDevices = success;
        }, (err) => {
        });
    }
    selectDevice(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('id ', id);
            const alert = yield this.alertController.create({
                header: 'Connect',
                message: 'Do you want to connect with?',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: () => {
                            console.log('Cancel clicked');
                        }
                    },
                    {
                        text: 'Connect',
                        handler: () => {
                            this.bluetoothSerial.connect(id).subscribe(this.success, this.fail);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    available() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.bluetoothSerial.available().then((f) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                console.log(f);
                this.d = yield this.bluetoothSerial.read();
                console.log();
                // this.bluetoothSerial.readUntil('\n').then(d=>{
                //  this.d= d;
                //   console.log(d);
                // });
            }));
        });
    }
    deviceConnected() {
        this.bluetoothSerial.isConnected().then(success => {
            //      this.bluetoothSerial.readUntil('\n').then(d=> console.log('d ',d));
            // this.bluetoothSerial.available().then(d=>console.log('dd', d));
            console.log('isEnabled ', this.bluetoothSerial.isEnabled());
            alert('Connected Successfullly');
        }, error => {
            alert('error' + JSON.stringify(error));
        });
    }
    disconnect() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Disconnect?',
                message: 'Do you want to Disconnect?',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: () => {
                            console.log('Cancel clicked');
                        }
                    },
                    {
                        text: 'Disconnect',
                        handler: () => {
                            this.bluetoothSerial.disconnect();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
Tab1Page.ctorParameters = () => [
    { type: _ionic_native_bluetooth_serial_ngx__WEBPACK_IMPORTED_MODULE_2__["BluetoothSerial"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
];
Tab1Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab1',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tab1.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tab1.page.scss */ "./src/app/tab1/tab1.page.scss")).default]
    })
], Tab1Page);



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module-es2015.js.map