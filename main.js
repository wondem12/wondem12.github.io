(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_favorites_favorites_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/favorites/favorites.component */ "./src/app/components/favorites/favorites.component.ts");





var routes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'favorites', component: _components_favorites_favorites_component__WEBPACK_IMPORTED_MODULE_4__["FavoritesComponent"] }
];
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<router-outlet></router-outlet>\n"

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


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_favorites_favorites_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/favorites/favorites.component */ "./src/app/components/favorites/favorites.component.ts");
/* harmony import */ var _components_weather_card_weather_card_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/weather-card/weather-card.component */ "./src/app/components/weather-card/weather-card.component.ts");
/* harmony import */ var _store_effects_weather_effect__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./store/effects/weather.effect */ "./src/app/store/effects/weather.effect.ts");
/* harmony import */ var _app_reducer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.reducer */ "./src/app/app.reducer.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _components_favorites_favorites_component__WEBPACK_IMPORTED_MODULE_9__["FavoritesComponent"],
                _components_weather_card_weather_card_component__WEBPACK_IMPORTED_MODULE_10__["WeatherCardComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_14__["StoreModule"].forRoot(_app_reducer__WEBPACK_IMPORTED_MODULE_12__["Reducers"]),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_13__["EffectsModule"].forRoot([_store_effects_weather_effect__WEBPACK_IMPORTED_MODULE_11__["WeatherEffects"]])
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.reducer.ts":
/*!********************************!*\
  !*** ./src/app/app.reducer.ts ***!
  \********************************/
/*! exports provided: Reducers, getWeatherReducer, getFiveDayWeatherReducer, getGeoLocationReducer, getWeatherData, getFiveDayWeatherData, getGeoLocationData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Reducers", function() { return Reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWeatherReducer", function() { return getWeatherReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFiveDayWeatherReducer", function() { return getFiveDayWeatherReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGeoLocationReducer", function() { return getGeoLocationReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWeatherData", function() { return getWeatherData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFiveDayWeatherData", function() { return getFiveDayWeatherData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGeoLocationData", function() { return getGeoLocationData; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_reducers_weather_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store/reducers/weather.reducer */ "./src/app/store/reducers/weather.reducer.ts");
/* harmony import */ var _store_reducers_fiveDayWeather_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store/reducers/fiveDayWeather.reducer */ "./src/app/store/reducers/fiveDayWeather.reducer.ts");
/* harmony import */ var _store_reducers_geolocation_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store/reducers/geolocation.reducer */ "./src/app/store/reducers/geolocation.reducer.ts");




var Reducers = {
    weatherReducer: _store_reducers_weather_reducer__WEBPACK_IMPORTED_MODULE_1__["weatherReducer"],
    fiveDayWeatherReducer: _store_reducers_fiveDayWeather_reducer__WEBPACK_IMPORTED_MODULE_2__["fiveDayWeatherReducer"],
    geoLocationWeatherReducer: _store_reducers_geolocation_reducer__WEBPACK_IMPORTED_MODULE_3__["geoLocationReducer"]
};
var getWeatherReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])("weatherReducer");
var getFiveDayWeatherReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])("fiveDayWeatherReducer");
var getGeoLocationReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])("geoLocationWeatherReducer");
var getWeatherData = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getWeatherReducer, _store_reducers_weather_reducer__WEBPACK_IMPORTED_MODULE_1__["getWeatherData"]);
var getFiveDayWeatherData = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getFiveDayWeatherReducer, _store_reducers_fiveDayWeather_reducer__WEBPACK_IMPORTED_MODULE_2__["getFiveDayWeatherData"]);
var getGeoLocationData = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getGeoLocationReducer, _store_reducers_geolocation_reducer__WEBPACK_IMPORTED_MODULE_3__["getGeoLocationData"]);


/***/ }),

/***/ "./src/app/components/favorites/favorites.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/favorites/favorites.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZmF2b3JpdGVzL2Zhdm9yaXRlcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/favorites/favorites.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/favorites/favorites.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<hr />\n<h2 class=\"upHeading\">My Fevorites</h2>\n<div class=\"weather__wrapper\" *ngIf=\"exists\">\n  <div class=\"weather__cont\" *ngFor=\"let city of favoriteCities\">\n    <div (click)=\"moreInfoCity(city.city, city.key)\">\n      <h3>{{ city.city }}</h3>\n      <img\n        class=\"weather-icon\"\n        src=\"https://vortex.accuweather.com/adc2010/images/slate/icons/{{\n          city?.WeatherIcon\n        }}.svg\"\n      />\n      <br />\n      <h4>\n        <p>{{ city.weatherText }}</p>\n        <p *ngIf=\"!unit\">\n          {{ city.Temperature.Imperial.Value }}\n          {{ city.Temperature.Imperial.Unit }}\n        </p>\n        <br />\n        <p *ngIf=\"unit\">\n          {{ city.Temperature.Metric.Value }} {{ city.Temperature.Metric.Unit }}\n        </p>\n        {{ day?.Temperature?.Maximum?.Unit }}<br />\n      </h4>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/favorites/favorites.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/favorites/favorites.component.ts ***!
  \*************************************************************/
/*! exports provided: FavoritesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritesComponent", function() { return FavoritesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var FavoritesComponent = /** @class */ (function () {
    function FavoritesComponent(Data, router) {
        this.Data = Data;
        this.router = router;
        this.favoriteCities = [];
        this.exists = false;
    }
    FavoritesComponent.prototype.ngOnInit = function () {
        this.onLoadComponent();
    };
    FavoritesComponent.prototype.onLoadComponent = function () {
        var _this = this;
        this.Data.currentTempValue.subscribe(function (response) {
            _this.unit = response;
        });
        this.checkFavoriteCitiesExists();
    };
    FavoritesComponent.prototype.moreInfoCity = function (city, key) {
        var data = { city: city, key: key };
        this.Data.changeCity(JSON.stringify(data));
        this.router.navigate(['/']);
    };
    FavoritesComponent.prototype.checkFavoriteCitiesExists = function () {
        if (JSON.parse(localStorage.getItem('cities'))) {
            this.favoriteCities = JSON.parse(localStorage.getItem('cities'));
            this.exists = true;
        }
        else {
            this.exists = false;
        }
    };
    FavoritesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-favorites',
            template: __webpack_require__(/*! ./favorites.component.html */ "./src/app/components/favorites/favorites.component.html"),
            styles: [__webpack_require__(/*! ./favorites.component.css */ "./src/app/components/favorites/favorites.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_2__["Data"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], FavoritesComponent);
    return FavoritesComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-weather-card></app-weather-card>"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg \">\n  <a class=\"navbar-brand\" routerLink=\"/\" style=\"font-size:24px ;color:white\"\n    >Herolo Weather</a\n  >\n  <button\n    class=\"navbar-toggler\"\n    type=\"button\"\n    data-toggle=\"collapse\"\n    data-target=\"#navbarNav\"\n    aria-controls=\"navbarNav\"\n    aria-expanded=\"false\"\n    aria-label=\"Toggle navigation\"\n  >\n    <span class=\"navbar-toggler-icon\" style=\"color:white\"\n      ><i class=\"fa fa-bars\" style=\"font-size:24px\"></i\n    ></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n    <ul class=\"nav navbar-nav ml-auto\">\n      <li class=\"nav-item active\">\n        <label class=\"nav-item active\" (click)=\"changecolor()\">\n          <a class=\"nav-link\">\n            <i\n              class=\"fa fa-moon-o\"\n              aria-hidden=\"true\"\n              style=\"font-size:24px ;color:white\"\n            ></i>\n          </a>\n        </label>\n      </li>\n      <li class=\"nav-item active\">\n        <label class=\"nav-item active\" (click)=\"changeUnit(unit)\">\n          <a class=\"nav-link\" *ngIf=\"unit\"\n            ><i\n              class=\"fa fa-thermometer\"\n              style=\"font-size:48px;color:red\"\n            ></i> </a\n          ><a class=\"nav-link\" *ngIf=\"!unit\"\n            ><i\n              class=\"fa fa-thermometer\"\n              style=\"font-size:24px ;color:white\"\n            ></i>\n          </a>\n        </label>\n      </li>\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" routerLink=\"/\"\n          ><i\n            class=\"fa fa-home\"\n            aria-hidden=\"true\"\n            style=\"font-size:24px ;color:white\"\n          ></i\n        ></a>\n      </li>\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" routerLink=\"/favorites\">\n          <i\n            class=\"fa fa-heart-o\"\n            aria-hidden=\"true\"\n            style=\"font-size:24px ;color:white\"\n          ></i>\n        </a>\n      </li>\n    </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(router, DataService) {
        this.router = router;
        this.DataService = DataService;
        this.unit = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.onLoadComponent();
        this.color = true;
    };
    NavbarComponent.prototype.onLoadComponent = function () {
        this.router.navigate(['/']);
    };
    NavbarComponent.prototype.changeUnit = function (unit) {
        if (unit) {
            this.unit = false;
            this.DataService.changeUnit(this.unit);
        }
        else {
            this.unit = true;
            this.DataService.changeUnit(this.unit);
        }
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_data_service__WEBPACK_IMPORTED_MODULE_1__["Data"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/weather-card/weather-card.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/weather-card/weather-card.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\nform input{\n    width: 60%;\n}\n\nform ul{\n    display:none;\n    position:absolute;\n    padding: 0;\n    margin: 0;\n}\n\nform:focus-within ul{\n    display: block;\n    width: 60%;\n    z-index: 1;\n    background-color: #fff;\n}\n\nform ul li{\n    border-bottom:1px solid silver;\n    padding: 5px;\n}\n\nform ul li:hover{\n   background-color:rgba(0,0,0,.1);\n}\n\n.like{\n    padding-top: 20px;\n    padding-left: 70px;\n    color: white;\n}\n\n.sk-circle {\n    margin: 100px auto;\n    width: 100px;\n    height: 100px;\n    position: relative;\n  }\n\n.sk-circle .sk-child {\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    left: 0;\n    top: 0;\n  }\n\n.sk-circle .sk-child:before {\n    content: '';\n    display: block;\n    margin: 0 auto;\n    width: 15%;\n    height: 15%;\n    background-color: #333;\n    border-radius: 100%;\n    -webkit-animation: sk-circleBounceDelay 1.2s infinite ease-in-out both;\n            animation: sk-circleBounceDelay 1.2s infinite ease-in-out both;\n  }\n\n.sk-circle .sk-circle2 {\n    transform: rotate(30deg); }\n\n.sk-circle .sk-circle3 {\n    transform: rotate(60deg); }\n\n.sk-circle .sk-circle4 {\n    transform: rotate(90deg); }\n\n.sk-circle .sk-circle5 {\n    transform: rotate(120deg); }\n\n.sk-circle .sk-circle6 {\n    transform: rotate(150deg); }\n\n.sk-circle .sk-circle7 {\n    transform: rotate(180deg); }\n\n.sk-circle .sk-circle8 {\n    transform: rotate(210deg); }\n\n.sk-circle .sk-circle9 {\n    transform: rotate(240deg); }\n\n.sk-circle .sk-circle10 {\n    transform: rotate(270deg); }\n\n.sk-circle .sk-circle11 {\n    transform: rotate(300deg); }\n\n.sk-circle .sk-circle12 {\n    transform: rotate(330deg); }\n\n.sk-circle .sk-circle2:before {\n    -webkit-animation-delay: -1.1s;\n            animation-delay: -1.1s; }\n\n.sk-circle .sk-circle3:before {\n    -webkit-animation-delay: -1s;\n            animation-delay: -1s; }\n\n.sk-circle .sk-circle4:before {\n    -webkit-animation-delay: -0.9s;\n            animation-delay: -0.9s; }\n\n.sk-circle .sk-circle5:before {\n    -webkit-animation-delay: -0.8s;\n            animation-delay: -0.8s; }\n\n.sk-circle .sk-circle6:before {\n    -webkit-animation-delay: -0.7s;\n            animation-delay: -0.7s; }\n\n.sk-circle .sk-circle7:before {\n    -webkit-animation-delay: -0.6s;\n            animation-delay: -0.6s; }\n\n.sk-circle .sk-circle8:before {\n    -webkit-animation-delay: -0.5s;\n            animation-delay: -0.5s; }\n\n.sk-circle .sk-circle9:before {\n    -webkit-animation-delay: -0.4s;\n            animation-delay: -0.4s; }\n\n.sk-circle .sk-circle10:before {\n    -webkit-animation-delay: -0.3s;\n            animation-delay: -0.3s; }\n\n.sk-circle .sk-circle11:before {\n    -webkit-animation-delay: -0.2s;\n            animation-delay: -0.2s; }\n\n.sk-circle .sk-circle12:before {\n    -webkit-animation-delay: -0.1s;\n            animation-delay: -0.1s; }\n\n@-webkit-keyframes sk-circleBounceDelay {\n    0%, 80%, 100% {\n      transform: scale(0);\n    } 40% {\n      transform: scale(1);\n    }\n  }\n\n@keyframes sk-circleBounceDelay {\n    0%, 80%, 100% {\n      transform: scale(0);\n    } 40% {\n      transform: scale(1);\n    }\n  }\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy93ZWF0aGVyLWNhcmQvd2VhdGhlci1jYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsU0FBUztBQUNiOztBQUNBO0lBQ0ksY0FBYztJQUNkLFVBQVU7SUFDVixVQUFVO0lBQ1Ysc0JBQXNCO0FBQzFCOztBQUNBO0lBQ0ksOEJBQThCO0lBQzlCLFlBQVk7QUFDaEI7O0FBQ0E7R0FDRywrQkFBK0I7QUFDbEM7O0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7RUFDcEI7O0FBQ0E7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsTUFBTTtFQUNSOztBQUNBO0lBQ0UsV0FBVztJQUNYLGNBQWM7SUFDZCxjQUFjO0lBQ2QsVUFBVTtJQUNWLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHNFQUFzRTtZQUM5RCw4REFBOEQ7RUFDeEU7O0FBQ0E7SUFHVSx3QkFBd0IsRUFBRTs7QUFDcEM7SUFHVSx3QkFBd0IsRUFBRTs7QUFDcEM7SUFHVSx3QkFBd0IsRUFBRTs7QUFDcEM7SUFHVSx5QkFBeUIsRUFBRTs7QUFDckM7SUFHVSx5QkFBeUIsRUFBRTs7QUFDckM7SUFHVSx5QkFBeUIsRUFBRTs7QUFDckM7SUFHVSx5QkFBeUIsRUFBRTs7QUFDckM7SUFHVSx5QkFBeUIsRUFBRTs7QUFDckM7SUFHVSx5QkFBeUIsRUFBRTs7QUFDckM7SUFHVSx5QkFBeUIsRUFBRTs7QUFDckM7SUFHVSx5QkFBeUIsRUFBRTs7QUFDckM7SUFDRSw4QkFBOEI7WUFDdEIsc0JBQXNCLEVBQUU7O0FBQ2xDO0lBQ0UsNEJBQTRCO1lBQ3BCLG9CQUFvQixFQUFFOztBQUNoQztJQUNFLDhCQUE4QjtZQUN0QixzQkFBc0IsRUFBRTs7QUFDbEM7SUFDRSw4QkFBOEI7WUFDdEIsc0JBQXNCLEVBQUU7O0FBQ2xDO0lBQ0UsOEJBQThCO1lBQ3RCLHNCQUFzQixFQUFFOztBQUNsQztJQUNFLDhCQUE4QjtZQUN0QixzQkFBc0IsRUFBRTs7QUFDbEM7SUFDRSw4QkFBOEI7WUFDdEIsc0JBQXNCLEVBQUU7O0FBQ2xDO0lBQ0UsOEJBQThCO1lBQ3RCLHNCQUFzQixFQUFFOztBQUNsQztJQUNFLDhCQUE4QjtZQUN0QixzQkFBc0IsRUFBRTs7QUFDbEM7SUFDRSw4QkFBOEI7WUFDdEIsc0JBQXNCLEVBQUU7O0FBQ2xDO0lBQ0UsOEJBQThCO1lBQ3RCLHNCQUFzQixFQUFFOztBQUVsQztJQUNFO01BRVUsbUJBQW1CO0lBQzdCLEVBQUU7TUFFUSxtQkFBbUI7SUFDN0I7RUFDRjs7QUFFQTtJQUNFO01BRVUsbUJBQW1CO0lBQzdCLEVBQUU7TUFFUSxtQkFBbUI7SUFDN0I7RUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd2VhdGhlci1jYXJkL3dlYXRoZXItY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5mb3JtIGlucHV0e1xuICAgIHdpZHRoOiA2MCU7XG59XG5cbmZvcm0gdWx7XG4gICAgZGlzcGxheTpub25lO1xuICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xufVxuZm9ybTpmb2N1cy13aXRoaW4gdWx7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDYwJTtcbiAgICB6LWluZGV4OiAxO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59IFxuZm9ybSB1bCBsaXtcbiAgICBib3JkZXItYm90dG9tOjFweCBzb2xpZCBzaWx2ZXI7XG4gICAgcGFkZGluZzogNXB4O1xufVxuZm9ybSB1bCBsaTpob3ZlcntcbiAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuMSk7XG59XG4ubGlrZXtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDcwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4uc2stY2lyY2xlIHtcbiAgICBtYXJnaW46IDEwMHB4IGF1dG87XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIC5zay1jaXJjbGUgLnNrLWNoaWxkIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xuICB9XG4gIC5zay1jaXJjbGUgLnNrLWNoaWxkOmJlZm9yZSB7XG4gICAgY29udGVudDogJyc7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgd2lkdGg6IDE1JTtcbiAgICBoZWlnaHQ6IDE1JTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgLXdlYmtpdC1hbmltYXRpb246IHNrLWNpcmNsZUJvdW5jZURlbGF5IDEuMnMgaW5maW5pdGUgZWFzZS1pbi1vdXQgYm90aDtcbiAgICAgICAgICAgIGFuaW1hdGlvbjogc2stY2lyY2xlQm91bmNlRGVsYXkgMS4ycyBpbmZpbml0ZSBlYXNlLWluLW91dCBib3RoO1xuICB9XG4gIC5zay1jaXJjbGUgLnNrLWNpcmNsZTIge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzBkZWcpO1xuICAgICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMzBkZWcpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzBkZWcpOyB9XG4gIC5zay1jaXJjbGUgLnNrLWNpcmNsZTMge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNjBkZWcpO1xuICAgICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNjBkZWcpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNjBkZWcpOyB9XG4gIC5zay1jaXJjbGUgLnNrLWNpcmNsZTQge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAgICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpOyB9XG4gIC5zay1jaXJjbGUgLnNrLWNpcmNsZTUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTIwZGVnKTtcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDEyMGRlZyk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxMjBkZWcpOyB9XG4gIC5zay1jaXJjbGUgLnNrLWNpcmNsZTYge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTUwZGVnKTtcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDE1MGRlZyk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxNTBkZWcpOyB9XG4gIC5zay1jaXJjbGUgLnNrLWNpcmNsZTcge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpOyB9XG4gIC5zay1jaXJjbGUgLnNrLWNpcmNsZTgge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMjEwZGVnKTtcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDIxMGRlZyk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyMTBkZWcpOyB9XG4gIC5zay1jaXJjbGUgLnNrLWNpcmNsZTkge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMjQwZGVnKTtcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDI0MGRlZyk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyNDBkZWcpOyB9XG4gIC5zay1jaXJjbGUgLnNrLWNpcmNsZTEwIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTsgfVxuICAuc2stY2lyY2xlIC5zay1jaXJjbGUxMSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzMDBkZWcpO1xuICAgICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMzAwZGVnKTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDMwMGRlZyk7IH1cbiAgLnNrLWNpcmNsZSAuc2stY2lyY2xlMTIge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzMwZGVnKTtcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDMzMGRlZyk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzMzBkZWcpOyB9XG4gIC5zay1jaXJjbGUgLnNrLWNpcmNsZTI6YmVmb3JlIHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTEuMXM7XG4gICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0xLjFzOyB9XG4gIC5zay1jaXJjbGUgLnNrLWNpcmNsZTM6YmVmb3JlIHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTFzO1xuICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtMXM7IH1cbiAgLnNrLWNpcmNsZSAuc2stY2lyY2xlNDpiZWZvcmUge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC45cztcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuOXM7IH1cbiAgLnNrLWNpcmNsZSAuc2stY2lyY2xlNTpiZWZvcmUge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC44cztcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuOHM7IH1cbiAgLnNrLWNpcmNsZSAuc2stY2lyY2xlNjpiZWZvcmUge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC43cztcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuN3M7IH1cbiAgLnNrLWNpcmNsZSAuc2stY2lyY2xlNzpiZWZvcmUge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC42cztcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuNnM7IH1cbiAgLnNrLWNpcmNsZSAuc2stY2lyY2xlODpiZWZvcmUge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC41cztcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuNXM7IH1cbiAgLnNrLWNpcmNsZSAuc2stY2lyY2xlOTpiZWZvcmUge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC40cztcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuNHM7IH1cbiAgLnNrLWNpcmNsZSAuc2stY2lyY2xlMTA6YmVmb3JlIHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuM3M7XG4gICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0wLjNzOyB9XG4gIC5zay1jaXJjbGUgLnNrLWNpcmNsZTExOmJlZm9yZSB7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjJzO1xuICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4yczsgfVxuICAuc2stY2lyY2xlIC5zay1jaXJjbGUxMjpiZWZvcmUge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC4xcztcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMXM7IH1cbiAgXG4gIEAtd2Via2l0LWtleWZyYW1lcyBzay1jaXJjbGVCb3VuY2VEZWxheSB7XG4gICAgMCUsIDgwJSwgMTAwJSB7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgfSA0MCUge1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIH1cbiAgfVxuICBcbiAgQGtleWZyYW1lcyBzay1jaXJjbGVCb3VuY2VEZWxheSB7XG4gICAgMCUsIDgwJSwgMTAwJSB7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgfSA0MCUge1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIH1cbiAgfVxuXG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/weather-card/weather-card.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/weather-card/weather-card.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <div *ngIf=\"loaded\" class=\"sk-circle\">\n        <div class=\"sk-circle1 sk-child\"></div>\n        <div class=\"sk-circle2 sk-child\"></div>\n        <div class=\"sk-circle3 sk-child\"></div>\n        <div class=\"sk-circle4 sk-child\"></div>\n        <div class=\"sk-circle5 sk-child\"></div>\n        <div class=\"sk-circle6 sk-child\"></div>\n        <div class=\"sk-circle7 sk-child\"></div>\n        <div class=\"sk-circle8 sk-child\"></div>\n        <div class=\"sk-circle9 sk-child\"></div>\n        <div class=\"sk-circle10 sk-child\"></div>\n        <div class=\"sk-circle11 sk-child\"></div>\n        <div class=\"sk-circle12 sk-child\"></div>\n      </div>\n      \n<form *ngIf=\"!loaded\" [formGroup]=\"searchForm\">\n  <input\n    type=\"text\"\n    formControlName=\"search\"\n    placeholder=\"Search By City Name\"\n    (input)=\"onInputChange($event)\"\n  />\n\n  <ul style=\"list-style-type:none;\">\n    <li\n      *ngFor=\"let suggestion of suggestions\"\n      [value]=\"suggestion?.LocalizedName\"\n      (mousedown)=\"getWeather(suggestion?.Key, suggestion?.LocalizedName)\">\n      {{ suggestion?.LocalizedName }}\n  </li>\n  </ul>\n\n</form>\n\n<hr />\n<div *ngIf=\"!loaded\" class=\"weather-contine\">\n  <div class=\"container\">\n    <div class=\"widget\">\n      <div class=\"details\" *ngIf=\"!metric\">\n        <div class=\"temperature\">{{ City?.city }}</div>\n        <div class=\"temperature\">{{ City?.weatherText }}</div>\n        <img\n          class=\"pictoCloudBig\"\n          src=\"https://vortex.accuweather.com/adc2010/images/slate/icons/{{\n            City?.WeatherIcon\n          }}.svg\"\n        />\n        <div class=\"temperature\">\n          {{ City?.Temperature?.Imperial?.Value }}\n          {{ City?.Temperature?.Imperial?.Unit }}\n        </div>\n      </div>\n      <div class=\"details\" *ngIf=\"metric\">\n        <div class=\"temperature\">{{ City?.city }}</div>\n        <div class=\"temperature\">{{ City?.weatherText }}</div>\n        <img\n          class=\"pictoCloudBig\"\n          src=\"https://vortex.accuweather.com/adc2010/images/slate/icons/{{\n            City?.WeatherIcon\n          }}.svg\"\n        />\n        <div class=\"temperature\">\n          {{ City?.Temperature?.Metric?.Value }}\n          {{ City?.Temperature?.Metric?.Unit }}\n        </div>\n      </div>\n      <div class=\"like\">\n          <i\n          style='font-size:30px'\n          class=\"fa fa-heart-o\"\n          aria-hidden=\"true\"\n          \n          (click)=\"addToFavorite()\" *ngIf=\"!exist\"\n        ></i>\n        <i\n        style='font-size:30px'\n        (click)=\"removeFromFavorite()\" *ngIf=\"exist\"\n        class=\"fa fa-heart\"\n        aria-hidden=\"true\"\n        [ngStyle]=\"exist && { color: 'red' }\"\n      ></i>\n      </div>\n    </div>\n  </div>\n</div>\n\n<hr />\n<h2 *ngIf=\"!loaded\" class=\"upHeading\">Up Coming</h2>\n<div *ngIf=\"!loaded\" class=\"weather__wrapper\">\n  <div class=\"weather__cont\" *ngFor=\"let day of fiveDayWeather\">\n    <h4 >{{ day.Date }}</h4>\n    <img\n      class=\"weather-icon\"\n      src=\"https://vortex.accuweather.com/adc2010/images/slate/icons/{{\n        day?.Day.Icon\n      }}.svg\"\n    />\n    <br />\n    <h4>\n      {{ day?.Day?.IconPhrase }}<br />\n      <br/>\n      {{ day?.Temperature?.Minimum?.Value }}\n      /\n      {{ day?.Temperature?.Maximum?.Value }}\n      {{ day?.Temperature?.Maximum?.Unit }}<br />\n    </h4>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/components/weather-card/weather-card.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/weather-card/weather-card.component.ts ***!
  \*******************************************************************/
/*! exports provided: WeatherCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherCardComponent", function() { return WeatherCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _app_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../app.reducer */ "./src/app/app.reducer.ts");
/* harmony import */ var _store_actions_weather_action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/actions/weather.action */ "./src/app/store/actions/weather.action.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");









var WeatherCardComponent = /** @class */ (function () {
    function WeatherCardComponent(Data, store) {
        this.Data = Data;
        this.store = store;
        this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.currentWeather$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.favoriteCities = [];
        this.loaded = true;
        this.metric = true;
        this.exist = false;
    }
    //Init
    WeatherCardComponent.prototype.ngOnInit = function () {
        this.onLoad();
        this.searchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormGroup"]({
            search: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]("", {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]
            })
        });
    };
    WeatherCardComponent.prototype.onLoad = function () {
        var _this = this;
        this.setData();
        this.Data.currentCity.subscribe(function (response) {
            if (response) {
                _this.loaded = false;
                var data = {
                    key: JSON.parse(response).key,
                    city: JSON.parse(response).city
                };
                _this.getWeather(data.key, data.city);
            }
            else {
                _this.showGeoLocation();
            }
        });
    };
    //Search
    WeatherCardComponent.prototype.onInputChange = function ($event) {
        var input = $event.target.value;
        if (input === "") {
            this.suggestions = [];
        }
        else {
            this.getAutoComplete(input);
        }
    };
    //
    WeatherCardComponent.prototype.getAutoComplete = function (input) {
        var _this = this;
        this.store.dispatch(new _store_actions_weather_action__WEBPACK_IMPORTED_MODULE_6__["GetAutoCompleteCities"](input));
        this.dataToSubscribe = this.store
            .select(_app_reducer__WEBPACK_IMPORTED_MODULE_5__["getWeatherData"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.ngUnsubscribe))
            .subscribe(function (data) {
            if (data.loaded) {
                _this.suggestions = data.data;
            }
        });
    };
    //Location
    WeatherCardComponent.prototype.showGeoLocation = function () {
        var _this = this;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                var x = position.coords.latitude;
                var y = position.coords.longitude;
                var location = { x: x, y: y };
                _this.store.dispatch(new _store_actions_weather_action__WEBPACK_IMPORTED_MODULE_6__["GetGeoLocation"](location));
                var dataToSubscribeGeo = _this.store
                    .select(_app_reducer__WEBPACK_IMPORTED_MODULE_5__["getGeoLocationData"])
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(_this.ngUnsubscribe))
                    .subscribe(function (data) {
                    if (data.loaded) {
                        _this.defaultKey = data.data.Key;
                        _this.defaultCity = data.data.LocalizedName;
                        _this.getWeather(data.data.Key, data.data.LocalizedName);
                        dataToSubscribeGeo.unsubscribe();
                    }
                });
            }, function () {
                _this.getWeather(_this.defaultKey, _this.defaultCity);
                _this.checkSpecificCity(_this.defaultCity);
            });
        }
    };
    //Get Current Weather
    WeatherCardComponent.prototype.getWeather = function (key, city) {
        var _this = this;
        this.loaded = false;
        this.City.city = city;
        this.checkSpecificCity(city);
        var intKey = Number(key);
        this.getFiveDayWeather(intKey);
        this.store.dispatch(new _store_actions_weather_action__WEBPACK_IMPORTED_MODULE_6__["GetCurrentWeather"](intKey));
        this.currentSubscribe = this.store
            .select(_app_reducer__WEBPACK_IMPORTED_MODULE_5__["getWeatherData"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.currentWeather$))
            .subscribe(function (data) {
            if (data.loaded) {
                _this.currentWeather = data.data[0];
                _this.weatherCityData(intKey);
            }
        });
    };
    //Five Days Weather
    WeatherCardComponent.prototype.getFiveDayWeather = function (key) {
        var _this = this;
        var days = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
        ];
        this.store.dispatch(new _store_actions_weather_action__WEBPACK_IMPORTED_MODULE_6__["GetFiveDayWeather"](key, this.metric));
        this.dataToSubscribe = this.store
            .select(_app_reducer__WEBPACK_IMPORTED_MODULE_5__["getFiveDayWeatherData"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.ngUnsubscribe))
            .subscribe(function (data) {
            if (data.loaded) {
                data.data.DailyForecasts.forEach(function (day) {
                    day.Date = days[new Date(day.Date).getDay()];
                });
                _this.fiveDayWeather = data.data.DailyForecasts;
            }
        });
    };
    //Change Unit
    WeatherCardComponent.prototype.changeUnit = function () {
        var i = 0;
        var value = 0;
        var fahToCelFormula = (value - 32) / (9 / 5);
        var celToFahFormula = value * (9 / 5) + 32;
        if (this.unit) {
            if (this.fiveDayWeather &&
                this.fiveDayWeather[0].Temperature.Minimum.Unit === "F") {
                for (i = 0; i < 5; i++) {
                    value = this.fiveDayWeather[i].Temperature.Maximum.Value;
                    fahToCelFormula = (value - 32) / (9 / 5);
                    this.fiveDayWeather[i].Temperature.Maximum.Value = fahToCelFormula.toFixed(0);
                    value = this.fiveDayWeather[i].Temperature.Minimum.Value;
                    fahToCelFormula = (value - 32) / (9 / 5);
                    this.fiveDayWeather[i].Temperature.Minimum.Value = fahToCelFormula.toFixed(0);
                    this.fiveDayWeather[i].Temperature.Minimum.Unit = "C";
                    this.fiveDayWeather[i].Temperature.Maximum.Unit = "C";
                }
            }
        }
        else {
            if (this.fiveDayWeather &&
                this.fiveDayWeather[0].Temperature.Minimum.Unit === "C") {
                for (i = 0; i < 5; i++) {
                    value = this.fiveDayWeather[i].Temperature.Maximum.Value;
                    celToFahFormula = value * (9 / 5) + 32;
                    this.fiveDayWeather[i].Temperature.Maximum.Value = celToFahFormula.toFixed(0);
                    value = this.fiveDayWeather[i].Temperature.Minimum.Value;
                    celToFahFormula = value * (9 / 5) + 32;
                    this.fiveDayWeather[i].Temperature.Minimum.Value = celToFahFormula.toFixed(0);
                    this.fiveDayWeather[i].Temperature.Minimum.Unit = "F";
                    this.fiveDayWeather[i].Temperature.Maximum.Unit = "F";
                }
            }
        }
    };
    //Add to the favorites
    WeatherCardComponent.prototype.addToFavorite = function () {
        this.checkIfExists();
        this.favoriteCities.push(this.City);
        localStorage.setItem("cities", JSON.stringify(this.favoriteCities));
        this.checkSpecificCity(this.City.city);
    };
    //Remove to the favorites
    WeatherCardComponent.prototype.removeFromFavorite = function () {
        var _this = this;
        this.checkIfExists();
        var index = this.favoriteCities.findIndex(function (city) { return city.city === _this.City.city; });
        if (index >= 0) {
            this.favoriteCities.splice(index, 1);
            localStorage.removeItem("cities");
            localStorage.setItem("cities", JSON.stringify(this.favoriteCities));
            this.checkSpecificCity(this.City.city);
        }
    };
    WeatherCardComponent.prototype.checkIfExists = function () {
        if (JSON.parse(localStorage.getItem("cities"))) {
            this.favoriteCities = JSON.parse(localStorage.getItem("cities"));
        }
    };
    WeatherCardComponent.prototype.checkSpecificCity = function (city) {
        var index = this.favoriteCities.find(function (arrayCity) { return arrayCity.city === city; });
        if (index) {
            this.exist = true;
        }
        else {
            this.exist = false;
        }
    };
    WeatherCardComponent.prototype.setModel = function () {
        this.City = {
            key: 0,
            city: "",
            Country: {
                ID: "",
                LocalizedName: ""
            },
            Temperature: {
                Metric: {
                    Value: 0,
                    Unit: "",
                    UnitType: 0
                },
                Imperial: {
                    Value: 0,
                    Unit: "",
                    UnitType: 0
                }
            },
            weatherText: "",
            WeatherIcon: 0,
            link: "",
            mobileLink: "",
            dayTime: false
        };
    };
    WeatherCardComponent.prototype.weatherCityData = function (intKey) {
        this.City.key = intKey;
        this.City.dayTime = this.currentWeather.IsDayTime;
        this.City.Temperature = this.currentWeather.Temperature;
        this.City.weatherText = this.currentWeather.WeatherText;
        this.City.WeatherIcon = this.currentWeather.WeatherIcon;
    };
    WeatherCardComponent.prototype.setData = function () {
        var _this = this;
        this.Data.currentTempValue.subscribe(function (response) {
            _this.unit = response;
            _this.metric = response;
            _this.changeUnit();
        });
        this.setModel();
        this.checkIfExists();
    };
    WeatherCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-weather-card",
            template: __webpack_require__(/*! ./weather-card.component.html */ "./src/app/components/weather-card/weather-card.component.html"),
            styles: [__webpack_require__(/*! ./weather-card.component.css */ "./src/app/components/weather-card/weather-card.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_7__["Data"], _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], WeatherCardComponent);
    return WeatherCardComponent;
}());



/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: Data */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Data", function() { return Data; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var Data = /** @class */ (function () {
    function Data() {
        this.tempValue = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.citySource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.currentCity = this.citySource.asObservable();
        this.currentTempValue = this.tempValue.asObservable();
    }
    Data.prototype.changeCity = function (city) {
        this.citySource.next(city);
    };
    Data.prototype.changeUnit = function (value) {
        this.tempValue.next(value);
    };
    Data = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: "root" }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Data);
    return Data;
}());



/***/ }),

/***/ "./src/app/services/weather.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/weather.service.ts ***!
  \*********************************************/
/*! exports provided: WeatherService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherService", function() { return WeatherService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var WeatherService = /** @class */ (function () {
    function WeatherService(http) {
        this.http = http;
        this.Key = "aV10RuA4FiN1gsLhbD6kWSzQzklwaHKY";
        this.Url = "https://dataservice.accuweather.com";
    }
    WeatherService.prototype.getAutocomplete = function (text) {
        return this.http.get(this.Url + "/locations/v1/cities/autocomplete?apikey=" + this.Key + "&q=" + text);
    };
    WeatherService.prototype.getCurrentWeatherGeolocation = function (data) {
        return this.http.get(this.Url + "/locations/v1/cities/geoposition/search?apikey=" + this.Key + "&q=" + data.x + "," + data.y);
    };
    WeatherService.prototype.getFiveDayForecasts = function (locationKey, metric) {
        return this.http.get(this.Url + "/forecasts/v1/daily/5day/" + locationKey + "?apikey=" + this.Key + "&metric=" + metric);
    };
    WeatherService.prototype.getCurrentWeather = function (locationKey) {
        return this.http.get(this.Url + "/currentconditions/v1/" + locationKey + "?apikey=" + this.Key + "&details=false");
    };
    WeatherService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: "root" }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], WeatherService);
    return WeatherService;
}());



/***/ }),

/***/ "./src/app/store/actions/weather.action.ts":
/*!*************************************************!*\
  !*** ./src/app/store/actions/weather.action.ts ***!
  \*************************************************/
/*! exports provided: GET_AUTO_COMPLETE_CITIES, GET_AUTO_COMPLETE_CITIES_SUCCESS, GET_AUTO_COMPLETE_CITIES_FAILED, GET_CURRENT_WEATHER, GET_CURRENT_WEATHER_SUCCESS, GET_CURRENT_WEATHER_FAILED, GET_FIVE_DAY_WEATHER, GET_FIVE_DAY_WEATHER_SUCCESS, GET_FIVE_DAY_WEATHER_FAILED, GET_GEOLOCATION_WEATHER, GET_GEOLOCATION_WEATHER_SUCCESS, GET_GEOLOCATION_WEATHER_FAILED, GetAutoCompleteCities, GetAutoCompleteCitiesSuccess, GetAutoCompleteCitiesFailed, GetCurrentWeather, GetCurrentWeatherSuccess, GetCurrentWeatherFailed, GetFiveDayWeather, GetFiveDayWeatherSuccess, GetFiveDayWeatherFailed, GetGeoLocation, GetGeoLocationSuccess, GetGeoLocationFailed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_AUTO_COMPLETE_CITIES", function() { return GET_AUTO_COMPLETE_CITIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_AUTO_COMPLETE_CITIES_SUCCESS", function() { return GET_AUTO_COMPLETE_CITIES_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_AUTO_COMPLETE_CITIES_FAILED", function() { return GET_AUTO_COMPLETE_CITIES_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_CURRENT_WEATHER", function() { return GET_CURRENT_WEATHER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_CURRENT_WEATHER_SUCCESS", function() { return GET_CURRENT_WEATHER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_CURRENT_WEATHER_FAILED", function() { return GET_CURRENT_WEATHER_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_FIVE_DAY_WEATHER", function() { return GET_FIVE_DAY_WEATHER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_FIVE_DAY_WEATHER_SUCCESS", function() { return GET_FIVE_DAY_WEATHER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_FIVE_DAY_WEATHER_FAILED", function() { return GET_FIVE_DAY_WEATHER_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_GEOLOCATION_WEATHER", function() { return GET_GEOLOCATION_WEATHER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_GEOLOCATION_WEATHER_SUCCESS", function() { return GET_GEOLOCATION_WEATHER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_GEOLOCATION_WEATHER_FAILED", function() { return GET_GEOLOCATION_WEATHER_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetAutoCompleteCities", function() { return GetAutoCompleteCities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetAutoCompleteCitiesSuccess", function() { return GetAutoCompleteCitiesSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetAutoCompleteCitiesFailed", function() { return GetAutoCompleteCitiesFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCurrentWeather", function() { return GetCurrentWeather; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCurrentWeatherSuccess", function() { return GetCurrentWeatherSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCurrentWeatherFailed", function() { return GetCurrentWeatherFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetFiveDayWeather", function() { return GetFiveDayWeather; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetFiveDayWeatherSuccess", function() { return GetFiveDayWeatherSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetFiveDayWeatherFailed", function() { return GetFiveDayWeatherFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetGeoLocation", function() { return GetGeoLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetGeoLocationSuccess", function() { return GetGeoLocationSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetGeoLocationFailed", function() { return GetGeoLocationFailed; });
var GET_AUTO_COMPLETE_CITIES = "GET_AUTO_COMPLETE_CITIES";
var GET_AUTO_COMPLETE_CITIES_SUCCESS = "GET_AUTO_COMPLETE_CITIES_SUCCESS";
var GET_AUTO_COMPLETE_CITIES_FAILED = "GET_AUTO_COMPLETE_CITIES_FAILED";
var GET_CURRENT_WEATHER = "GET_CURRENT_WEATHER";
var GET_CURRENT_WEATHER_SUCCESS = "GET_CURRENT_WEATHER_SUCCESS";
var GET_CURRENT_WEATHER_FAILED = "GET_CURRENT_WEATHER_FAILED";
var GET_FIVE_DAY_WEATHER = "GET_FIVE_DAY_WEATHER";
var GET_FIVE_DAY_WEATHER_SUCCESS = "GET_FIVE_DAY_WEATHER_SUCCESS";
var GET_FIVE_DAY_WEATHER_FAILED = "GET_FIVE_DAY_WEATHER_FAILED";
var GET_GEOLOCATION_WEATHER = "GET_GEOLOCATION_WEATHER";
var GET_GEOLOCATION_WEATHER_SUCCESS = "GET_GEOLOCATION_WEATHER_SUCCESS";
var GET_GEOLOCATION_WEATHER_FAILED = "GET_GEOLOCATION_WEATHER_FAILED";
var GetAutoCompleteCities = /** @class */ (function () {
    function GetAutoCompleteCities(payload) {
        this.payload = payload;
        this.type = GET_AUTO_COMPLETE_CITIES;
    }
    return GetAutoCompleteCities;
}());

var GetAutoCompleteCitiesSuccess = /** @class */ (function () {
    function GetAutoCompleteCitiesSuccess(payload) {
        this.payload = payload;
        this.type = GET_AUTO_COMPLETE_CITIES_SUCCESS;
    }
    return GetAutoCompleteCitiesSuccess;
}());

var GetAutoCompleteCitiesFailed = /** @class */ (function () {
    function GetAutoCompleteCitiesFailed(payload) {
        this.payload = payload;
        this.type = GET_AUTO_COMPLETE_CITIES_FAILED;
    }
    return GetAutoCompleteCitiesFailed;
}());

var GetCurrentWeather = /** @class */ (function () {
    function GetCurrentWeather(payload) {
        this.payload = payload;
        this.type = GET_CURRENT_WEATHER;
    }
    return GetCurrentWeather;
}());

var GetCurrentWeatherSuccess = /** @class */ (function () {
    function GetCurrentWeatherSuccess(payload) {
        this.payload = payload;
        this.type = GET_CURRENT_WEATHER_SUCCESS;
    }
    return GetCurrentWeatherSuccess;
}());

var GetCurrentWeatherFailed = /** @class */ (function () {
    function GetCurrentWeatherFailed(payload) {
        this.payload = payload;
        this.type = GET_CURRENT_WEATHER_FAILED;
    }
    return GetCurrentWeatherFailed;
}());

var GetFiveDayWeather = /** @class */ (function () {
    function GetFiveDayWeather(payload, metric) {
        this.payload = payload;
        this.metric = metric;
        this.type = GET_FIVE_DAY_WEATHER;
    }
    return GetFiveDayWeather;
}());

var GetFiveDayWeatherSuccess = /** @class */ (function () {
    function GetFiveDayWeatherSuccess(payload) {
        this.payload = payload;
        this.type = GET_FIVE_DAY_WEATHER_SUCCESS;
    }
    return GetFiveDayWeatherSuccess;
}());

var GetFiveDayWeatherFailed = /** @class */ (function () {
    function GetFiveDayWeatherFailed(payload) {
        this.payload = payload;
        this.type = GET_FIVE_DAY_WEATHER_FAILED;
    }
    return GetFiveDayWeatherFailed;
}());

var GetGeoLocation = /** @class */ (function () {
    function GetGeoLocation(payload) {
        this.payload = payload;
        this.type = GET_GEOLOCATION_WEATHER;
    }
    return GetGeoLocation;
}());

var GetGeoLocationSuccess = /** @class */ (function () {
    function GetGeoLocationSuccess(payload) {
        this.payload = payload;
        this.type = GET_GEOLOCATION_WEATHER_SUCCESS;
    }
    return GetGeoLocationSuccess;
}());

var GetGeoLocationFailed = /** @class */ (function () {
    function GetGeoLocationFailed(payload) {
        this.payload = payload;
        this.type = GET_GEOLOCATION_WEATHER_FAILED;
    }
    return GetGeoLocationFailed;
}());



/***/ }),

/***/ "./src/app/store/effects/weather.effect.ts":
/*!*************************************************!*\
  !*** ./src/app/store/effects/weather.effect.ts ***!
  \*************************************************/
/*! exports provided: WeatherEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherEffects", function() { return WeatherEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_weather_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/weather.service */ "./src/app/services/weather.service.ts");
/* harmony import */ var _actions_weather_action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actions/weather.action */ "./src/app/store/actions/weather.action.ts");







var WeatherEffects = /** @class */ (function () {
    function WeatherEffects(actions$, weatherService) {
        var _this = this;
        this.actions$ = actions$;
        this.weatherService = weatherService;
        this.weatherData$ = this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_weather_action__WEBPACK_IMPORTED_MODULE_6__["GET_AUTO_COMPLETE_CITIES"]))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["exhaustMap"])(function (action) {
            return _this.weatherService.getAutocomplete(action.payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) { return new _actions_weather_action__WEBPACK_IMPORTED_MODULE_6__["GetAutoCompleteCitiesSuccess"](data); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _actions_weather_action__WEBPACK_IMPORTED_MODULE_6__["GetAutoCompleteCitiesFailed"](error));
            }));
        }));
        this.currentWeatherData$ = this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_weather_action__WEBPACK_IMPORTED_MODULE_6__["GET_CURRENT_WEATHER"]))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["exhaustMap"])(function (action) {
            return _this.weatherService.getCurrentWeather(action.payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) { return new _actions_weather_action__WEBPACK_IMPORTED_MODULE_6__["GetCurrentWeatherSuccess"](data); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _actions_weather_action__WEBPACK_IMPORTED_MODULE_6__["GetCurrentWeatherFailed"](error));
            }));
        }));
        this.fiveDayWeatherData$ = this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_weather_action__WEBPACK_IMPORTED_MODULE_6__["GET_FIVE_DAY_WEATHER"]))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["exhaustMap"])(function (action) {
            return _this.weatherService
                .getFiveDayForecasts(action.payload, action.metric)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) { return new _actions_weather_action__WEBPACK_IMPORTED_MODULE_6__["GetFiveDayWeatherSuccess"](data); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _actions_weather_action__WEBPACK_IMPORTED_MODULE_6__["GetFiveDayWeatherFailed"](error));
            }));
        }));
        this.geolocationData$ = this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_weather_action__WEBPACK_IMPORTED_MODULE_6__["GET_GEOLOCATION_WEATHER"]))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["exhaustMap"])(function (action) {
            return _this.weatherService
                .getCurrentWeatherGeolocation(action.payload)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) { return new _actions_weather_action__WEBPACK_IMPORTED_MODULE_6__["GetGeoLocationSuccess"](data); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _actions_weather_action__WEBPACK_IMPORTED_MODULE_6__["GetGeoLocationFailed"](error));
            }));
        }));
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], WeatherEffects.prototype, "weatherData$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], WeatherEffects.prototype, "currentWeatherData$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], WeatherEffects.prototype, "fiveDayWeatherData$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], WeatherEffects.prototype, "geolocationData$", void 0);
    WeatherEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"],
            _services_weather_service__WEBPACK_IMPORTED_MODULE_5__["WeatherService"]])
    ], WeatherEffects);
    return WeatherEffects;
}());



/***/ }),

/***/ "./src/app/store/reducers/fiveDayWeather.reducer.ts":
/*!**********************************************************!*\
  !*** ./src/app/store/reducers/fiveDayWeather.reducer.ts ***!
  \**********************************************************/
/*! exports provided: fiveDayWeatherReducer, getFiveDayWeatherData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fiveDayWeatherReducer", function() { return fiveDayWeatherReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFiveDayWeatherData", function() { return getFiveDayWeatherData; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _actions_weather_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/weather.action */ "./src/app/store/actions/weather.action.ts");


var initialState = {
    data: [],
    loading: true,
    loaded: false
};
function fiveDayWeatherReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _actions_weather_action__WEBPACK_IMPORTED_MODULE_1__["GET_FIVE_DAY_WEATHER"]:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { loading: true, loaded: false, data: action.payload });
        case _actions_weather_action__WEBPACK_IMPORTED_MODULE_1__["GET_FIVE_DAY_WEATHER_SUCCESS"]:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { loading: false, loaded: true, data: action.payload });
        case _actions_weather_action__WEBPACK_IMPORTED_MODULE_1__["GET_FIVE_DAY_WEATHER_FAILED"]:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { loading: false, loaded: true, data: action.payload });
        default: {
            return state;
        }
    }
}
var getFiveDayWeatherData = function (state) { return state; };


/***/ }),

/***/ "./src/app/store/reducers/geolocation.reducer.ts":
/*!*******************************************************!*\
  !*** ./src/app/store/reducers/geolocation.reducer.ts ***!
  \*******************************************************/
/*! exports provided: geoLocationReducer, getGeoLocationData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "geoLocationReducer", function() { return geoLocationReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGeoLocationData", function() { return getGeoLocationData; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _actions_weather_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/weather.action */ "./src/app/store/actions/weather.action.ts");


var initialState = {
    data: [],
    loading: true,
    loaded: false
};
function geoLocationReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _actions_weather_action__WEBPACK_IMPORTED_MODULE_1__["GET_GEOLOCATION_WEATHER"]:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { loading: true, loaded: false, data: action.payload });
        case _actions_weather_action__WEBPACK_IMPORTED_MODULE_1__["GET_GEOLOCATION_WEATHER_SUCCESS"]:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { loading: false, loaded: true, data: action.payload });
        case _actions_weather_action__WEBPACK_IMPORTED_MODULE_1__["GET_GEOLOCATION_WEATHER_FAILED"]:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { loading: false, loaded: true, data: action.payload });
        default:
            return state;
    }
}
var getGeoLocationData = function (state) { return state; };


/***/ }),

/***/ "./src/app/store/reducers/weather.reducer.ts":
/*!***************************************************!*\
  !*** ./src/app/store/reducers/weather.reducer.ts ***!
  \***************************************************/
/*! exports provided: weatherReducer, getWeatherData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "weatherReducer", function() { return weatherReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWeatherData", function() { return getWeatherData; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _actions_weather_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../actions/weather.action */ "./src/app/store/actions/weather.action.ts");


var initialState = {
    data: [],
    loading: false,
    loaded: false
};
function weatherReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _actions_weather_action__WEBPACK_IMPORTED_MODULE_1__["GET_AUTO_COMPLETE_CITIES"]:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { loading: true, loaded: false, data: action.payload });
        case _actions_weather_action__WEBPACK_IMPORTED_MODULE_1__["GET_AUTO_COMPLETE_CITIES_SUCCESS"]:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { loading: false, loaded: true, data: action.payload });
        case _actions_weather_action__WEBPACK_IMPORTED_MODULE_1__["GET_AUTO_COMPLETE_CITIES_FAILED"]:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { loading: false, loaded: true, data: action.payload });
        case _actions_weather_action__WEBPACK_IMPORTED_MODULE_1__["GET_CURRENT_WEATHER"]:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { loading: true, loaded: false });
        case _actions_weather_action__WEBPACK_IMPORTED_MODULE_1__["GET_CURRENT_WEATHER_SUCCESS"]:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { loading: false, loaded: true, data: action.payload });
        case _actions_weather_action__WEBPACK_IMPORTED_MODULE_1__["GET_CURRENT_WEATHER_FAILED"]:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { loading: false, loaded: true, data: action.payload });
        default:
            return state;
    }
}
var getWeatherData = function (state) { return state; };


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

module.exports = __webpack_require__(/*! /Users/samuelwondem/Desktop/herolo-weather/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map