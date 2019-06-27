(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!doctype html>\n<html>\n  <head>\n    <title>Socket.IO chat</title>\n    <style>\n\n    </style>\n  </head>\n  <body *ngIf=\"!isLogin\">\n    <div>\n        <h1 class=\"header\">Bienvenido a ZapWhat,</h1>\n        <h1 class=\"header\">por favor ingrese un usuario</h1>\n    </div>\n    <div class=\"login\">\n      <input [(ngModel)]=\"loginInput\" (keyup.enter)=\"login()\" id=\"m\" autocomplete=\"off\" /><button (click)=\"login()\">Ingresar</button>\n    </div>\n  </body>\n  <body *ngIf=\"isLogin\">\n      <h1 class=\"header\">ZapWhat</h1>\n      <ul id=\"messages\">\n        <li *ngFor=\"let msg of msgs\" [ngClass]=\"{'serverMsg':msg.type==2,'serverMsg2':msg.type==1}\">{{msg.msg}}</li>\n        <li *ngIf=\"writting\" class=\"writting animated bounce\">Zappy esta escribiendo...</li>\n      </ul>\n      <div class=\"msg\">\n        <input [(ngModel)]=\"msgInput\" (keyup.enter)=\"sendMsg()\" id=\"m\" autocomplete=\"off\" /><button (click)=\"sendMsg()\">Send</button>\n      </div>\n    </body>\n</html>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* { margin: 0; padding: 0; box-sizing: border-box; }\r\nbody { font: 20px Helvetica, Arial; }\r\ndiv.msg { background: #000; padding: 3px; position: fixed; bottom: 0; width: 100%; }\r\ndiv.msg input { border: 0; padding: 10px; width: 90%; margin-right: .4%; }\r\ndiv.msg button { width: 9.6%; background: #1EBEA5; border: none; padding: 10px; }\r\ndiv.login { background: #000; padding: 3px; position: fixed; width: 50%; }\r\ndiv.login input { border: 0; padding: 10px; width: 90%; margin-right: .4%; }\r\ndiv.login button { width: 9.6%; background: #1EBEA5; border: none; padding: 10px; }\r\n#messages { list-style-type: none; margin: 0; padding: 0; }\r\n#messages li { padding: 5px 10px; background: #eee;}\r\n.serverMsg{margin-left: 0%!important;text-align: left!important;border-radius: 0px 15px 15px 15px;\r\n    ;\r\n    width: 50%;    word-wrap: break-word;}\r\n.serverMsg2{text-align: right;border-radius: 15px 0px 15px 15px;\r\n    background: powderblue!important;\r\n    width: 50%;margin-left: 50%;    word-wrap: break-word;}\r\n.header{color:#1EBEA5;}\r\n.writting{background:none!important;font-weight: bold}\r\n@-webkit-keyframes bounce {\r\n    0%, 20%, 50%, 80%, 100% {-webkit-transform: translateY(0);transform: translateY(0);}\r\n    40% {-webkit-transform: translateY(-10  px);transform: translateY(-10  px);}\r\n    60% {-webkit-transform: translateY(-5px);transform: translateY(-5px);}\r\n}\r\n@keyframes bounce {\r\n    0%, 20%, 50%, 80%, 100% {-webkit-transform: translateY(0);transform: translateY(0);}\r\n    40% {-webkit-transform: translateY(-10  px);transform: translateY(-10  px);}\r\n    60% {-webkit-transform: translateY(-5px);transform: translateY(-5px);}\r\n}\r\n.bounce {\r\n    -webkit-animation-name: bounce;\r\n            animation-name: bounce;\r\n}\r\n.animated {\r\n    -webkit-animation-duration: 2.5s;\r\n            animation-duration: 2.5s;\r\n    -webkit-animation-fill-mode: both;\r\n            animation-fill-mode: both;\r\n    -webkit-animation-iteration-count: infinite;\r\n            animation-iteration-count: infinite;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBSSxTQUFTLEVBQUUsVUFBVSxFQUFFLHNCQUFzQixFQUFFO0FBQ25ELE9BQU8sMkJBQTJCLEVBQUU7QUFDcEMsVUFBVSxnQkFBZ0IsRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUU7QUFDbkYsZ0JBQWdCLFNBQVMsRUFBRSxhQUFhLEVBQUUsVUFBVSxFQUFFLGlCQUFpQixFQUFFO0FBQ3pFLGlCQUFpQixXQUFXLEVBQUUsbUJBQW1CLEVBQUUsWUFBWSxFQUFFLGFBQWEsRUFBRTtBQUNoRixZQUFZLGdCQUFnQixFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUUsVUFBVSxFQUFFO0FBQ3pFLGtCQUFrQixTQUFTLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRSxpQkFBaUIsRUFBRTtBQUMzRSxtQkFBbUIsV0FBVyxFQUFFLG1CQUFtQixFQUFFLFlBQVksRUFBRSxhQUFhLEVBQUU7QUFDbEYsWUFBWSxxQkFBcUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFO0FBQzFELGVBQWUsaUJBQWlCLEVBQUUsZ0JBQWdCLENBQUM7QUFDbkQsV0FBVyx5QkFBeUIsQ0FBQywwQkFBMEIsQ0FBQyxpQ0FBaUM7O0lBRTdGLFVBQVUsS0FBSyxxQkFBcUIsQ0FBQztBQUN6QyxZQUFZLGlCQUFpQixDQUFDLGlDQUFpQztJQUMzRCxnQ0FBZ0M7SUFDaEMsVUFBVSxDQUFDLGdCQUFnQixLQUFLLHFCQUFxQixDQUFDO0FBQzFELFFBQVEsYUFBYSxDQUFDO0FBQ3RCLFVBQVUseUJBQXlCLENBQUMsaUJBQWlCO0FBRXJEO0lBQ0kseUJBQXlCLGdDQUF3QixDQUF4Qix3QkFBd0IsQ0FBQztJQUNsRCxLQUFLLHNDQUE4QixDQUE5Qiw4QkFBOEIsQ0FBQztJQUNwQyxLQUFLLG1DQUEyQixDQUEzQiwyQkFBMkIsQ0FBQztBQUNyQztBQUpBO0lBQ0kseUJBQXlCLGdDQUF3QixDQUF4Qix3QkFBd0IsQ0FBQztJQUNsRCxLQUFLLHNDQUE4QixDQUE5Qiw4QkFBOEIsQ0FBQztJQUNwQyxLQUFLLG1DQUEyQixDQUEzQiwyQkFBMkIsQ0FBQztBQUNyQztBQUNBO0lBQ0ksOEJBQXNCO1lBQXRCLHNCQUFzQjtBQUMxQjtBQUVBO0lBQ0ksZ0NBQXdCO1lBQXhCLHdCQUF3QjtJQUN4QixpQ0FBeUI7WUFBekIseUJBQXlCO0lBQ3pCLDJDQUFtQztZQUFuQyxtQ0FBbUM7QUFDdkMiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiogeyBtYXJnaW46IDA7IHBhZGRpbmc6IDA7IGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cclxuYm9keSB7IGZvbnQ6IDIwcHggSGVsdmV0aWNhLCBBcmlhbDsgfVxyXG5kaXYubXNnIHsgYmFja2dyb3VuZDogIzAwMDsgcGFkZGluZzogM3B4OyBwb3NpdGlvbjogZml4ZWQ7IGJvdHRvbTogMDsgd2lkdGg6IDEwMCU7IH1cclxuZGl2Lm1zZyBpbnB1dCB7IGJvcmRlcjogMDsgcGFkZGluZzogMTBweDsgd2lkdGg6IDkwJTsgbWFyZ2luLXJpZ2h0OiAuNCU7IH1cclxuZGl2Lm1zZyBidXR0b24geyB3aWR0aDogOS42JTsgYmFja2dyb3VuZDogIzFFQkVBNTsgYm9yZGVyOiBub25lOyBwYWRkaW5nOiAxMHB4OyB9XHJcbmRpdi5sb2dpbiB7IGJhY2tncm91bmQ6ICMwMDA7IHBhZGRpbmc6IDNweDsgcG9zaXRpb246IGZpeGVkOyB3aWR0aDogNTAlOyB9XHJcbmRpdi5sb2dpbiBpbnB1dCB7IGJvcmRlcjogMDsgcGFkZGluZzogMTBweDsgd2lkdGg6IDkwJTsgbWFyZ2luLXJpZ2h0OiAuNCU7IH1cclxuZGl2LmxvZ2luIGJ1dHRvbiB7IHdpZHRoOiA5LjYlOyBiYWNrZ3JvdW5kOiAjMUVCRUE1OyBib3JkZXI6IG5vbmU7IHBhZGRpbmc6IDEwcHg7IH1cclxuI21lc3NhZ2VzIHsgbGlzdC1zdHlsZS10eXBlOiBub25lOyBtYXJnaW46IDA7IHBhZGRpbmc6IDA7IH1cclxuI21lc3NhZ2VzIGxpIHsgcGFkZGluZzogNXB4IDEwcHg7IGJhY2tncm91bmQ6ICNlZWU7fVxyXG4uc2VydmVyTXNne21hcmdpbi1sZWZ0OiAwJSFpbXBvcnRhbnQ7dGV4dC1hbGlnbjogbGVmdCFpbXBvcnRhbnQ7Ym9yZGVyLXJhZGl1czogMHB4IDE1cHggMTVweCAxNXB4O1xyXG4gICAgO1xyXG4gICAgd2lkdGg6IDUwJTsgICAgd29yZC13cmFwOiBicmVhay13b3JkO31cclxuLnNlcnZlck1zZzJ7dGV4dC1hbGlnbjogcmlnaHQ7Ym9yZGVyLXJhZGl1czogMTVweCAwcHggMTVweCAxNXB4O1xyXG4gICAgYmFja2dyb3VuZDogcG93ZGVyYmx1ZSFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogNTAlO21hcmdpbi1sZWZ0OiA1MCU7ICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDt9XHJcbi5oZWFkZXJ7Y29sb3I6IzFFQkVBNTt9XHJcbi53cml0dGluZ3tiYWNrZ3JvdW5kOm5vbmUhaW1wb3J0YW50O2ZvbnQtd2VpZ2h0OiBib2xkfVxyXG5cclxuQGtleWZyYW1lcyBib3VuY2Uge1xyXG4gICAgMCUsIDIwJSwgNTAlLCA4MCUsIDEwMCUge3RyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTt9XHJcbiAgICA0MCUge3RyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAgIHB4KTt9XHJcbiAgICA2MCUge3RyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTt9XHJcbn1cclxuLmJvdW5jZSB7XHJcbiAgICBhbmltYXRpb24tbmFtZTogYm91bmNlO1xyXG59XHJcblxyXG4uYW5pbWF0ZWQge1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAyLjVzO1xyXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcclxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat.service */ "./src/app/chat.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(chatService) {
        this.chatService = chatService;
        this.msgs = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.chatService
            .getMessage()
            .subscribe(function (msg) {
            _this.msgs.push({ type: 2, msg: msg });
            if (_this.msgs.length > 7) {
                setTimeout(function () { return _this.msgs.pop(); }, 3000);
            }
        });
        this.chatService
            .getWritting()
            .subscribe(function (state) {
            _this.writting = state;
        });
    };
    AppComponent.prototype.sendMsg = function () {
        if (this.msgInput != "") {
            this.msgs.push({ type: 1, msg: this.msgInput });
            this.chatService.sendMessage('message', this.msgInput);
            this.msgInput = "";
        }
    };
    AppComponent.prototype.login = function () {
        if (this.msgInput != "") {
            this.chatService.sendMessage('login', this.loginInput);
            this.msgs.push({ type: 2, msg: "Bienvenido a ZapWhat, " + this.loginInput });
            this.isLogin = true;
        }
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            providers: [_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"]],
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







var config = { url: 'http://localhost:3000', options: {} };
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                ngx_socket_io__WEBPACK_IMPORTED_MODULE_5__["SocketIoModule"].forRoot(config)
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/chat.service.ts":
/*!*********************************!*\
  !*** ./src/app/chat.service.ts ***!
  \*********************************/
/*! exports provided: ChatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatService", function() { return ChatService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var ChatService = /** @class */ (function () {
    function ChatService(socket) {
        this.socket = socket;
    }
    ChatService.prototype.sendMessage = function (topic, msg) {
        this.socket.emit(topic, msg);
    };
    ChatService.prototype.getMessage = function () {
        return this.socket
            .fromEvent("message")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data; }));
    };
    ChatService.prototype.getWritting = function () {
        return this.socket
            .fromEvent("writting")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data; }));
    };
    ChatService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_socket_io__WEBPACK_IMPORTED_MODULE_2__["Socket"]])
    ], ChatService);
    return ChatService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\var\www\meetup\angularmeetup\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map