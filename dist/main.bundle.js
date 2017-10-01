webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header1></app-header1>\r\n\r\n<app-gioi-thieu1></app-gioi-thieu1>\r\n\r\n<app-dich-vu></app-dich-vu>\r\n\r\n<app-slider1></app-slider1>\r\n\r\n<app-footer></app-footer>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_nav1_nav1_component__ = __webpack_require__("../../../../../src/app/components/nav1/nav1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_header1_header1_component__ = __webpack_require__("../../../../../src/app/components/header1/header1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_head_video1_head_video1_component__ = __webpack_require__("../../../../../src/app/components/head-video1/head-video1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_slider1_slider1_component__ = __webpack_require__("../../../../../src/app/components/slider1/slider1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_dich_vu_dich_vu_component__ = __webpack_require__("../../../../../src/app/components/dich-vu/dich-vu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_gioi_thieu1_gioi_thieu1_component__ = __webpack_require__("../../../../../src/app/components/gioi-thieu1/gioi-thieu1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_footer_footer_component__ = __webpack_require__("../../../../../src/app/components/footer/footer.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__components_nav1_nav1_component__["a" /* Nav1Component */],
            __WEBPACK_IMPORTED_MODULE_4__components_header1_header1_component__["a" /* Header1Component */],
            __WEBPACK_IMPORTED_MODULE_5__components_head_video1_head_video1_component__["a" /* HeadVideo1Component */],
            __WEBPACK_IMPORTED_MODULE_6__components_slider1_slider1_component__["a" /* Slider1Component */],
            __WEBPACK_IMPORTED_MODULE_7__components_dich_vu_dich_vu_component__["a" /* DichVuComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_gioi_thieu1_gioi_thieu1_component__["a" /* GioiThieu1Component */],
            __WEBPACK_IMPORTED_MODULE_9__components_footer_footer_component__["a" /* FooterComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/dich-vu/dich-vu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Cac dich vu*/\r\n.dich-vu {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-flow: row nowrap;\r\n            flex-flow: row nowrap;\r\n    -ms-flex-line-pack: center;\r\n        align-content: center;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    /* background: #ddd; */\r\n    background: url(" + __webpack_require__("../../../../../src/assets/background-fruit.jpg") + ") no-repeat center center;\r\n    background-size: cover;\r\n    padding: 100px;\r\n}\r\n\r\n.dich-vu .the {\r\n    width: 280px;\r\n    padding: 0 30px;\r\n    height: 450px;\r\n    margin: 0 20px;\r\n    background-color: white;\r\n    text-align: center;\r\n}\r\n\r\n.dich-vu .the p {\r\n    margin-top: 30px;\r\n    font-size: 13px;\r\n}\r\n\r\n.dich-vu .the a {\r\n    color: gray;\r\n    text-decoration: none;\r\n    transition: 0.4s;\r\n}\r\n\r\n.dich-vu .the a:hover {\r\n    color: #333;\r\n}\r\n\r\n.the-border-bottom {\r\n    width: 60px;\r\n    height: 8px;\r\n    margin: auto;\r\n    margin-top: 30px;\r\n    border-top: 2px solid #333;\r\n    border-bottom: 2px solid #333;\r\n}\r\n\r\n\r\n\r\n.dich-vu .suat-an {\r\n   \r\n}\r\n\r\n.dich-vu .can-tin {\r\n    \r\n}\r\n\r\n.dich-vu .nha-thuoc {\r\n    \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dich-vu/dich-vu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"dich-vu\">\n    <div class=\"the suat-an\">\n      <img class=\"mt-4\" src=\"../../../assets/the1.webp\" alt=\"can tin\">\n      <h2  class=\"mt-1\">Quầy<br>Dịch Vụ</h2>\n      <div class=\"the-border-bottom\"></div>\n      <p>Cung cấp quầy dịch vụ bán nước, bánh, đồ ăn nhẹ cho khách hàng</p>\n  \n      <a href=\"#\">Xem thêm ></a>\n    </div>\n  \n    <div class=\"the can-tin\">\n      <img class=\"mt-4\" src=\"../../../assets/the2.webp\" alt=\"suat an\">\n      <h2 class=\"mt-1\">Suất Ăn<br>Công Nghiệp</h2>\n      <div class=\"the-border-bottom\"></div>\n      <p>Các phần ăn cho công ty, nhà máy với mục tiêu chất lượng, tươi sạch và giá cả hợp lý</p>\n      <a href=\"#\">Xem thêm ></a>\n    </div>\n  \n    <div class=\"the nha-thuoc\">\n      <img class=\"mt-4\" src=\"../../../assets/the3.webp\" alt=\"nha thuoc\">\n      <h2  class=\"mt-1\">Chuỗi<br>Nhà Thuốc</h2>\n      <div class=\"the-border-bottom\"></div>\n      <p>Chuỗi nhà thuốc cung cấp thuốc và các dịch vụ về sức khoẻ</p>\n      <a href=\"#\">Xem thêm ></a>\n    </div>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/components/dich-vu/dich-vu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DichVuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DichVuComponent = (function () {
    function DichVuComponent() {
    }
    DichVuComponent.prototype.ngOnInit = function () {
    };
    return DichVuComponent;
}());
DichVuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-dich-vu',
        template: __webpack_require__("../../../../../src/app/components/dich-vu/dich-vu.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/dich-vu/dich-vu.component.css")]
    }),
    __metadata("design:paramtypes", [])
], DichVuComponent);

//# sourceMappingURL=dich-vu.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer>\n  \n</footer>"

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/components/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/footer/footer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/gioi-thieu1/gioi-thieu1.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".gioi-thieu {\r\n    /* display: flex;\r\n    flex-flow: row wrap; */\r\n}\r\n\r\n.left {\r\n}\r\n\r\n.left img {\r\n    width: 100%;\r\n}\r\n\r\n.right {\r\n    padding: 35px;\r\n    padding-bottom: 0;\r\n    padding-left: 50px;\r\n    padding-right: 90px;\r\n}\r\n\r\n.the-border-bottom {\r\n    width: 60px;\r\n    height: 8px;\r\n    margin-top: 30px;\r\n    margin-bottom: 30px;\r\n    border-top: 2px solid #333;\r\n    border-bottom: 2px solid #333;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/gioi-thieu1/gioi-thieu1.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row gioi-thieu\">\n  <div class=\"col-lg-6 left\">\n    <img src=\"../../../assets/good-company.jpg\" alt=\"good company\">\n  </div>\n  <div class=\"col-lg-6 right introduce-company\">\n    <h2>Á Châu Food Catering</h2>\n    <div class=\"the-border-bottom\">\n    </div>\n    <p> Meet The Chef I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about  you.​</p>\n\n    <!-- Với mục tiêu chất lượng dịch vụ lên hàng đầu -->\n\n    <p class=\"mt-5\">Tel: 123-456-7890 | Email:info@mysite.com</p>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/gioi-thieu1/gioi-thieu1.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GioiThieu1Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GioiThieu1Component = (function () {
    function GioiThieu1Component() {
    }
    GioiThieu1Component.prototype.ngOnInit = function () {
    };
    return GioiThieu1Component;
}());
GioiThieu1Component = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-gioi-thieu1',
        template: __webpack_require__("../../../../../src/app/components/gioi-thieu1/gioi-thieu1.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/gioi-thieu1/gioi-thieu1.component.css")]
    }),
    __metadata("design:paramtypes", [])
], GioiThieu1Component);

//# sourceMappingURL=gioi-thieu1.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/head-video1/head-video1.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/head-video1/head-video1.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  head-video1 works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/head-video1/head-video1.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeadVideo1Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeadVideo1Component = (function () {
    function HeadVideo1Component() {
    }
    HeadVideo1Component.prototype.ngOnInit = function () {
    };
    return HeadVideo1Component;
}());
HeadVideo1Component = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-head-video1',
        template: __webpack_require__("../../../../../src/app/components/head-video1/head-video1.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/head-video1/head-video1.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HeadVideo1Component);

//# sourceMappingURL=head-video1.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/header1/header1.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cantin-1 {\r\n    height: 400px;\r\n    background: url(" + __webpack_require__("../../../../../src/assets/hoa-qua-1.jpg") + ") no-repeat center center;\r\n    background-size: cover;\r\n    color: white;\r\n    text-align: center;\r\n    padding-top: 60px;\r\n}\r\n\r\n.cantin-1 h1 {\r\n    width: 450px;\r\n    margin: auto;\r\n    line-height: 49px;\r\n}\r\n\r\n.cantin-1 .border-bottom {\r\n    width: 60px;\r\n    height: 8px;\r\n    margin: auto;\r\n    border-top: 2px solid white;\r\n    border-bottom: 2px solid white;\r\n}\r\n\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/header1/header1.component.html":
/***/ (function(module, exports) {

module.exports = "<app-nav1></app-nav1>\n<div class=\"cantin cantin-1\">\n  <h1 class=\"display-5\">SẢN PHẨM TƯƠI SẠCH VÀ CÓ NGUỒN GỐC</h1>\n  <div class=\"border-bottom mt-4\"></div>\n</div>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/header1/header1.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Header1Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Header1Component = (function () {
    function Header1Component() {
    }
    Header1Component.prototype.ngOnInit = function () {
    };
    return Header1Component;
}());
Header1Component = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-header1',
        template: __webpack_require__("../../../../../src/app/components/header1/header1.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/header1/header1.component.css")]
    }),
    __metadata("design:paramtypes", [])
], Header1Component);

//# sourceMappingURL=header1.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/nav1/nav1.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\nnav {\r\n\theight: 90px;\r\n\tfont-family: 'Roboto'; \r\n\tbackground-color: white;\r\n}\r\n.navbar-brand img {\r\n\twidth: 150px;\r\n}\r\n.navbar-toggler-icon {\r\n\tcolor: white !important;\r\n}\r\n\r\n.nav-link {\r\n\tfont-weight: 500;\r\n}\r\n\r\n.nav-link:hover {\r\n}\r\n\r\n.social-icon i {\r\n\tfont-size: 20px;\r\n\tcolor: lightgray;\r\n}\r\n\r\n.social-icon i:hover {\r\n\tcolor: gray;\r\n}\r\n\r\n@media only screen and (max-width: 760px) {\r\n\tnav {\r\n\t\theight: auto;\r\n\t}\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/nav1/nav1.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-light\">\n\t<a class=\"navbar-brand\" href=\"#\"><img src=\"../../../assets/logo_cantin.gif\" alt=\"\"></a>\n\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#nav1\" aria-controls=\"nav1\" aria-expanded=\"false\"\n    aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse ml-4\" id=\"nav1\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link active\" href=\"#\">Trang chủ</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Quầy dịch vụ</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Suất ăn công nghiệp</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Chuỗi nhà thuốc</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Liên hệ</a>\n      </li>\n    </ul>\n\n    <div class=\"social-icon\">\n    \t<a href=\"#\"><i class=\"fa fa-facebook mr-2\"></i></a>\n    \t<a href=\"\"><i class=\"fa fa-instagram\"></i></a>\n    </div>\n  </div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/components/nav1/nav1.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Nav1Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Nav1Component = (function () {
    function Nav1Component() {
    }
    Nav1Component.prototype.ngOnInit = function () {
    };
    return Nav1Component;
}());
Nav1Component = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-nav1',
        template: __webpack_require__("../../../../../src/app/components/nav1/nav1.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/nav1/nav1.component.css")]
    }),
    __metadata("design:paramtypes", [])
], Nav1Component);

//# sourceMappingURL=nav1.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/slider1/slider1.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/slider1/slider1.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div id=\"slider\">\n  <img class=\"d-block w-100\" src=\"../../../assets/slider/slider1.jpg\" alt=\"\">\n  <img class=\"d-block w-100\" src=\"../../../assets/slider/slider2.jpg\" alt=\"\">\n  <img class=\"d-block w-100\" src=\"../../../assets/slider/slider3.jpg\" alt=\"\">\n  <img class=\"d-block w-100\" src=\"../../../assets/slider/slider4.jpg\" alt=\"\">\n</div> -->\n\n\n<div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\n  <div class=\"carousel-inner\">\n    <div class=\"carousel-item active\">\n      <img class=\"d-block w-100\" src=\"../../../assets/slider/slider1.jpg\" alt=\"First slide\">\n    </div>\n    <div class=\"carousel-item\">\n      <img class=\"d-block w-100\" src=\"../../../assets/slider/slider2.jpg\" alt=\"Second slide\">\n    </div>\n    <div class=\"carousel-item\">\n      <img class=\"d-block w-100\" src=\"../../../assets/slider/slider3.jpg\" alt=\"Third slide\">\n    </div>\n    <div class=\"carousel-item\">\n      <img class=\"d-block w-100\" src=\"../../../assets/slider/slider4.jpg\" alt=\"Third slide\">\n    </div>\n    <div class=\"carousel-item\">\n      <img class=\"d-block w-100\" src=\"../../../assets/slider/slider5.jpg\" alt=\"Third slide\">\n    </div>\n  </div>\n  <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\n    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Previous</span>\n  </a>\n  <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\n    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Next</span>\n  </a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/slider1/slider1.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Slider1Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Slider1Component = (function () {
    function Slider1Component() {
    }
    Slider1Component.prototype.ngOnInit = function () {
    };
    return Slider1Component;
}());
Slider1Component = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-slider1',
        template: __webpack_require__("../../../../../src/app/components/slider1/slider1.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/slider1/slider1.component.css")]
    }),
    __metadata("design:paramtypes", [])
], Slider1Component);

//# sourceMappingURL=slider1.component.js.map

/***/ }),

/***/ "../../../../../src/assets/background-fruit.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "background-fruit.9f9777d540989cf1fd36.jpg";

/***/ }),

/***/ "../../../../../src/assets/hoa-qua-1.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "hoa-qua-1.9ba034c95f4690b5247c.jpg";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map