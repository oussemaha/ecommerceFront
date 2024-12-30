(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/oussema/Desktop/oussema/TP_info/IGL4/projet_cloud/ecommerceFront/src/main.ts */"zUnb");


/***/ }),

/***/ "8R/P":
/*!********************************************************!*\
  !*** ./src/app/product-card/product-card.component.ts ***!
  \********************************************************/
/*! exports provided: ProductCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCardComponent", function() { return ProductCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "RwU8");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");






class ProductCardComponent {
    constructor() { }
    ngOnInit() { }
}
ProductCardComponent.ɵfac = function ProductCardComponent_Factory(t) { return new (t || ProductCardComponent)(); };
ProductCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductCardComponent, selectors: [["app-product-card"]], inputs: { title: "title", image: "image", short_desc: "short_desc", category: "category", quantity: "quantity", price: "price", id: "id", onAdd: "onAdd" }, decls: 16, vars: 10, consts: [[1, "product-card"], [1, "product-card__image", 3, "routerLink"], ["alt", "", 3, "src"], [1, "product-card__info"], [1, "title"], [1, "product-name"], [1, "product-short-desc"], [1, "product-price"], [1, "product-card__cta"], ["nz-button", "", 3, "disabled", "click"]], template: function ProductCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductCardComponent_Template_button_click_14_listener() { return ctx.onAdd({ id: ctx.id, price: ctx.price, image: ctx.image, title: ctx.title, maxQuantity: ctx.quantity }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/product/", ctx.id, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.short_desc);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](12, 7, ctx.price, "USD"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.quantity === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.quantity === 0 ? "Out of stock" : "Add to cart", " ");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_3__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__["ɵNzTransitionPatchDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CurrencyPipe"]], styles: [".product-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  border: 1px solid #ccc;\n  border-radius: 3px;\n  transition: all 0.2s;\n  overflow: hidden;\n}\n.product-card__image[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  width: 100%;\n  object-fit: cover;\n  border-bottom: 1px solid #ccc;\n}\n.product-card__info[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  padding: 16px 16px 32px;\n}\n.product-card__info[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.product-card__info[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n.product-card__info[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .product-name[_ngcontent-%COMP%] {\n  padding-right: 12px;\n  font-size: 1.125rem;\n  font-weight: 500;\n  text-transform: uppercase;\n  margin-bottom: 4px;\n}\n.product-card__info[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .product-short-desc[_ngcontent-%COMP%] {\n  color: #777;\n}\n.product-card__info[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%]   .product-price[_ngcontent-%COMP%] {\n  font-size: 1.375rem;\n  font-weight: 600;\n}\n.product-card__cta[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n  height: 48px;\n  width: 100%;\n  border: none;\n  background-color: #fff;\n  border-top: 1px solid #ccc;\n  cursor: pointer;\n  transition: background-color 0.2s;\n}\n@media screen and (min-width: 1024px) {\n  .product-card[_ngcontent-%COMP%]:hover {\n    transform: scale(1.0125);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Byb2R1Y3QtY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7QUFDSTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLDZCQUFBO0FBQ047QUFFRTtFQUNFLFlBQUE7RUFDQSx1QkFBQTtBQUFKO0FBQ0k7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFDTjtBQUFNO0VBQ0UsWUFBQTtBQUVSO0FBRFE7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FBR1Y7QUFEUTtFQUNFLFdBQUE7QUFHVjtBQUFNO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtBQUVSO0FBR0k7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLGlDQUFBO0FBRE47QUFNQTtFQUVJO0lBQ0Usd0JBQUE7RUFKSjtBQUNGIiwiZmlsZSI6InByb2R1Y3QtY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9kdWN0LWNhcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICAmX19pbWFnZSB7XG4gICAgPiBpbWcge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICAgIH1cbiAgfVxuICAmX19pbmZvIHtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgcGFkZGluZzogMTZweCAxNnB4IDMycHg7XG4gICAgPiBoZWFkZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAudGl0bGUge1xuICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgIC5wcm9kdWN0LW5hbWUge1xuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDEycHg7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjEyNXJlbTtcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgICAgICB9XG4gICAgICAgIC5wcm9kdWN0LXNob3J0LWRlc2Mge1xuICAgICAgICAgIGNvbG9yOiAjNzc3O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAucHJvZHVjdC1wcmljZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4zNzVyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICB9XG4gICAgfVxuICB9XG4gICZfX2N0YSB7XG4gICAgPiBidXR0b24ge1xuICAgICAgaGVpZ2h0OiA0OHB4O1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjY2M7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnM7XG4gICAgfVxuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAucHJvZHVjdC1jYXJkIHtcbiAgICAmOmhvdmVyIHtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMTI1KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/product.service */ "Gdn9");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/cart.service */ "c14U");
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/angular */ "UMfn");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "RwU8");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/spin */ "qAZ0");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var _product_card_product_card_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../product-card/product-card.component */ "8R/P");











function HomeComponent_7_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r3.name);
} }
function HomeComponent_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HomeComponent_7_ng_template_0_Template, 2, 1, "ng-template", 12);
} }
const _c0 = function () { return { "font-size": "2rem", margin: "0 auto" }; };
function HomeComponent_div_12_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 17);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
function HomeComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_div_12_ng_template_1_Template, 1, 2, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "nz-spin", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzIndicator", _r6);
} }
function HomeComponent_div_13_app_product_card_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-product-card", 20);
} if (rf & 2) {
    const n_r9 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", n_r9.id)("title", n_r9.title)("image", n_r9.image)("price", n_r9.price)("short_desc", n_r9.short_desc)("category", n_r9.category)("quantity", n_r9.quantity)("onAdd", ctx_r8.cartService.addProduct.bind(ctx_r8.cartService));
} }
function HomeComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_div_13_app_product_card_1_Template, 1, 8, "app-product-card", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.products);
} }
class HomeComponent {
    constructor(productService, cartService) {
        this.productService = productService;
        this.cartService = cartService;
        this.products = [];
        this.categories = [
            {
                name: 'Laptops',
            },
            {
                name: 'Accessories',
            },
            {
                name: 'Cameras',
            },
        ];
        this.loading = false;
        this.productPageCounter = 1;
        this.additionalLoading = false;
    }
    onResize(event) {
        this.screenWidth = window.innerWidth;
        this.screenHeight = window.innerHeight;
    }
    ngOnInit() {
        this.screenWidth = window.innerWidth;
        this.screenHeight = window.innerHeight;
        this.loading = true;
        setTimeout(() => {
            this.productService.getAllProducts(9, this.productPageCounter).subscribe((res) => {
                console.log(res);
                this.products = res;
                this.loading = false;
            }, (err) => {
                console.log(err);
                this.loading = false;
            });
        }, 500);
    }
    showMoreProducts() {
        this.additionalLoading = true;
        this.productPageCounter = this.productPageCounter + 1;
        setTimeout(() => {
            this.productService.getAllProducts(9, this.productPageCounter).subscribe((res) => {
                console.log(res);
                this.products = [...this.products, ...res];
                this.additionalLoading = false;
            }, (err) => {
                console.log(err);
                this.additionalLoading = false;
            });
        }, 500);
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], hostBindings: function HomeComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function HomeComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 17, vars: 9, consts: [[1, "home-container"], [1, "categories"], [1, "categories__header"], [1, "categories__list"], [3, "zoom", "slidesPerView", "spaceBetween", "pagination", "loop"], [4, "ngFor", "ngForOf"], [1, "products"], [1, "products__header"], ["class", "products__loading", 4, "ngIf"], ["class", "products__list", 4, "ngIf"], [1, "load-products"], ["nz-button", "", 3, "nzLoading", "click"], ["swiperSlide", ""], [1, "category-card"], [1, "products__loading"], ["indicatorTemplate", ""], ["nzSimple", "", 3, "nzIndicator"], ["nz-icon", "", "nzType", "loading", 3, "ngStyle"], [1, "products__list"], [3, "id", "title", "image", "price", "short_desc", "category", "quantity", "onAdd", 4, "ngFor", "ngForOf"], [3, "id", "title", "image", "price", "short_desc", "category", "quantity", "onAdd"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "swiper", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HomeComponent_7_Template, 1, 0, undefined, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "New Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, HomeComponent_div_12_Template, 4, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, HomeComponent_div_13_Template, 2, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_15_listener() { return ctx.showMoreProducts(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Show more ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("zoom", false)("slidesPerView", ctx.screenWidth > 1200 ? 3 : 1)("spaceBetween", 50)("pagination", true)("loop", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLoading", ctx.additionalLoading);
    } }, directives: [swiper_angular__WEBPACK_IMPORTED_MODULE_3__["SwiperComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_6__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__["ɵNzTransitionPatchDirective"], swiper_angular__WEBPACK_IMPORTED_MODULE_3__["SwiperSlideDirective"], ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_8__["NzSpinComponent"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_9__["NzIconDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"], _product_card_product_card_component__WEBPACK_IMPORTED_MODULE_10__["ProductCardComponent"]], styles: [".home-container {\n  padding-top: 24px;\n}\n.home-container .categories {\n  margin: 0 auto;\n  padding: 24px 16px;\n  max-width: calc(350px + 32px);\n}\n.home-container .categories__header {\n  margin-bottom: 16px;\n}\n.home-container .categories__header > h2 {\n  font-size: 1.75rem;\n}\n.home-container .categories__list .swiper-pagination-bullet-active {\n  background-color: #fff;\n}\n.home-container .categories__list .category-card {\n  height: 150px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 3px;\n  font-size: 1.375rem;\n  letter-spacing: 5px;\n  font-weight: 500;\n  text-transform: uppercase;\n  color: #fff;\n  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);\n  background-size: 400% 400%;\n  animation: gradient 15s ease infinite;\n  cursor: pointer;\n}\n.home-container .products {\n  margin: 0 auto;\n  padding: 24px 16px;\n  max-width: calc(350px + 32px);\n}\n.home-container .products__loading {\n  text-align: center;\n}\n.home-container .products__header {\n  margin-bottom: 16px;\n}\n.home-container .products__header > h2 {\n  font-size: 1.75rem;\n}\n.home-container .products__list {\n  display: grid;\n  grid-template-columns: 1fr;\n  row-gap: 24px;\n}\n.home-container .products__list .product-card {\n  height: 100%;\n  max-width: 350px;\n  margin: 0 auto;\n}\n.home-container .products__list .product-card__image {\n  cursor: pointer;\n}\n.home-container .load-products {\n  text-align: center;\n  padding: 16px 16px 32px;\n}\n.home-container .load-products > button {\n  max-width: 341px;\n  height: 44px;\n  width: 100%;\n}\n@media screen and (min-width: 768px) {\n  .home-container .categories {\n    max-width: calc(700px + 72px);\n    padding: 36px 24px;\n  }\n  .home-container .categories__list .category-card {\n    height: 200px;\n  }\n  .home-container .products {\n    max-width: calc(700px + 72px);\n    padding: 36px 24px;\n  }\n  .home-container .products__header {\n    margin-bottom: 16px;\n  }\n  .home-container .products__list {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    column-gap: 24px;\n    row-gap: 24px;\n  }\n}\n@media screen and (min-width: 1200px) {\n  .home-container .categories {\n    max-width: calc(1050px + 96px);\n    padding: 36px 24px;\n  }\n  .home-container .categories__list .category-card {\n    width: 348px;\n  }\n  .home-container .products {\n    max-width: calc(1050px + 96px);\n    padding: 36px 24px;\n  }\n  .home-container .products__header {\n    margin-bottom: 16px;\n  }\n  .home-container .products__list {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n  }\n}\n@keyframes gradient {\n  0% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0% 50%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtBQUNGO0FBQUU7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtBQUVKO0FBREk7RUFDRSxtQkFBQTtBQUdOO0FBRk07RUFDRSxrQkFBQTtBQUlSO0FBQ007RUFDRSxzQkFBQTtBQUNSO0FBQ007RUFDRSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLHVFQUFBO0VBQ0EsMEJBQUE7RUFDQSxxQ0FBQTtFQUNBLGVBQUE7QUFDUjtBQUdFO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7QUFESjtBQUVJO0VBQ0Usa0JBQUE7QUFBTjtBQUVJO0VBQ0UsbUJBQUE7QUFBTjtBQUNNO0VBQ0Usa0JBQUE7QUFDUjtBQUVJO0VBQ0UsYUFBQTtFQUNBLDBCQUFBO0VBQ0EsYUFBQTtBQUFOO0FBQ007RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBQ1I7QUFBUTtFQUNFLGVBQUE7QUFFVjtBQUdFO0VBQ0Usa0JBQUE7RUFDQSx1QkFBQTtBQURKO0FBRUk7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBQU47QUFLQTtFQUVJO0lBQ0UsNkJBQUE7SUFDQSxrQkFBQTtFQUhKO0VBS007SUFDRSxhQUFBO0VBSFI7RUFPRTtJQUNFLDZCQUFBO0lBQ0Esa0JBQUE7RUFMSjtFQU1JO0lBQ0UsbUJBQUE7RUFKTjtFQU1JO0lBQ0UsYUFBQTtJQUNBLDhCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxhQUFBO0VBSk47QUFDRjtBQVdBO0VBRUk7SUFDRSw4QkFBQTtJQUNBLGtCQUFBO0VBVko7RUFZTTtJQUNFLFlBQUE7RUFWUjtFQWNFO0lBQ0UsOEJBQUE7SUFDQSxrQkFBQTtFQVpKO0VBYUk7SUFDRSxtQkFBQTtFQVhOO0VBYUk7SUFDRSxhQUFBO0lBQ0Esa0NBQUE7RUFYTjtBQUNGO0FBa0JBO0VBQ0U7SUFDRSwyQkFBQTtFQWhCRjtFQWtCQTtJQUNFLDZCQUFBO0VBaEJGO0VBa0JBO0lBQ0UsMkJBQUE7RUFoQkY7QUFDRiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhvbWUtY29udGFpbmVyIHtcbiAgcGFkZGluZy10b3A6IDI0cHg7XG4gIC5jYXRlZ29yaWVzIHtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBwYWRkaW5nOiAyNHB4IDE2cHg7XG4gICAgbWF4LXdpZHRoOiBjYWxjKDM1MHB4ICsgMzJweCk7IC8vIHdpZHRoIG9mIGNhcmRzICsgYWxsIHBhZGRpbmcgKyBnYXBcbiAgICAmX19oZWFkZXIge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICAgID4gaDIge1xuICAgICAgICBmb250LXNpemU6IDEuNzVyZW07XG4gICAgICB9XG4gICAgfVxuICAgICZfX2xpc3Qge1xuICAgICAgLy8ganVzdCBmb3IgY2F0ZWdvcmllc1xuICAgICAgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgfVxuICAgICAgLmNhdGVnb3J5LWNhcmQge1xuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICBmb250LXNpemU6IDEuMzc1cmVtO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogNXB4O1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KC00NWRlZywgI2VlNzc1MiwgI2U3M2M3ZSwgIzIzYTZkNSwgIzIzZDVhYik7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogNDAwJSA0MDAlO1xuICAgICAgICBhbmltYXRpb246IGdyYWRpZW50IDE1cyBlYXNlIGluZmluaXRlO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC5wcm9kdWN0cyB7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgcGFkZGluZzogMjRweCAxNnB4O1xuICAgIG1heC13aWR0aDogY2FsYygzNTBweCArIDMycHgpOyAvLyB3aWR0aCBvZiBjYXJkcyArIGFsbCBwYWRkaW5nICsgZ2FwXG4gICAgJl9fbG9hZGluZyB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICAgICZfX2hlYWRlciB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgICAgPiBoMiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcbiAgICAgIH1cbiAgICB9XG4gICAgJl9fbGlzdCB7XG4gICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgICByb3ctZ2FwOiAyNHB4O1xuICAgICAgLnByb2R1Y3QtY2FyZCB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgbWF4LXdpZHRoOiAzNTBweDtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICZfX2ltYWdlIHtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLmxvYWQtcHJvZHVjdHMge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxNnB4IDE2cHggMzJweDtcbiAgICA+IGJ1dHRvbiB7XG4gICAgICBtYXgtd2lkdGg6IDM0MXB4O1xuICAgICAgaGVpZ2h0OiA0NHB4O1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5ob21lLWNvbnRhaW5lciB7XG4gICAgLmNhdGVnb3JpZXMge1xuICAgICAgbWF4LXdpZHRoOiBjYWxjKDcwMHB4ICsgNzJweCk7IC8vIHdpZHRoIG9mIGNhcmRzICsgYWxsIHBhZGRpbmcgKyBnYXBcbiAgICAgIHBhZGRpbmc6IDM2cHggMjRweDtcbiAgICAgICZfX2xpc3Qge1xuICAgICAgICAuY2F0ZWdvcnktY2FyZCB7XG4gICAgICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAucHJvZHVjdHMge1xuICAgICAgbWF4LXdpZHRoOiBjYWxjKDcwMHB4ICsgNzJweCk7IC8vIHdpZHRoIG9mIGNhcmRzICsgYWxsIHBhZGRpbmcgKyBnYXBcbiAgICAgIHBhZGRpbmc6IDM2cHggMjRweDtcbiAgICAgICZfX2hlYWRlciB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgICB9XG4gICAgICAmX19saXN0IHtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgICAgICBjb2x1bW4tZ2FwOiAyNHB4O1xuICAgICAgICByb3ctZ2FwOiAyNHB4O1xuICAgICAgICAucHJvZHVjdC1jYXJkIHtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgLmhvbWUtY29udGFpbmVyIHtcbiAgICAuY2F0ZWdvcmllcyB7XG4gICAgICBtYXgtd2lkdGg6IGNhbGMoMTA1MHB4ICsgOTZweCk7IC8vIHdpZHRoIG9mIGNhcmRzICsgYWxsIHBhZGRpbmcgKyBnYXBcbiAgICAgIHBhZGRpbmc6IDM2cHggMjRweDtcbiAgICAgICZfX2xpc3Qge1xuICAgICAgICAuY2F0ZWdvcnktY2FyZCB7XG4gICAgICAgICAgd2lkdGg6IDM0OHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC5wcm9kdWN0cyB7XG4gICAgICBtYXgtd2lkdGg6IGNhbGMoMTA1MHB4ICsgOTZweCk7IC8vIHdpZHRoIG9mIGNhcmRzICsgYWxsIHBhZGRpbmcgKyBnYXBcbiAgICAgIHBhZGRpbmc6IDM2cHggMjRweDtcbiAgICAgICZfX2hlYWRlciB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgICB9XG4gICAgICAmX19saXN0IHtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcbiAgICAgICAgLnByb2R1Y3QtY2FyZCB7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuQGtleWZyYW1lcyBncmFkaWVudCB7XG4gIDAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSA1MCU7XG4gIH1cbiAgNTAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDUwJTtcbiAgfVxuICAxMDAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSA1MCU7XG4gIH1cbn1cbiJdfQ== */"], encapsulation: 2 });


/***/ }),

/***/ "AytR":
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
const environment = {
    production: false,
    apiUrl: 'https://api.igl4-ecommerce.me/api/v1/',
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

/***/ "Gdn9":
/*!*********************************************!*\
  !*** ./src/app/services/product.service.ts ***!
  \*********************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api.service */ "H+bZ");




class ProductService {
    constructor(http, _api) {
        this.http = http;
        this._api = _api;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl;
    }
    getAllProducts(limitOfResults = 9, page) {
        return this.http.get(this.url + 'products', {
            params: {
                limit: limitOfResults.toString(),
                page: page,
            },
        });
    }
    getSingleProduct(id) {
        console.log(id);
        return this._api.getTypeRequest('products/' + id);
    }
}
ProductService.ɵfac = function ProductService_Factory(t) { return new (t || ProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"])); };
ProductService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ProductService, factory: ProductService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "H+bZ":
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class ApiService {
    constructor(_http) {
        this._http = _http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl;
    }
    getTypeRequest(url) {
        return this._http.get(`${this.baseUrl}${url}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((res) => {
            return res;
        }));
    }
    postTypeRequest(url, payload) {
        return this._http.post(`${this.baseUrl}${url}`, payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((res) => {
            return res;
        }));
    }
    putTypeRequest(url, payload) {
        return this._http.put(`${this.baseUrl}${url}`, payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((res) => {
            return res;
        }));
    }
}
ApiService.ɵfac = function ApiService_Factory(t) { return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ApiService, factory: ApiService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Hs9l":
/*!**********************************************!*\
  !*** ./src/app/guards/auth-guard.service.ts ***!
  \**********************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/token-storage.service */ "Zr0/");



class AuthGuardService {
    constructor(_route, _token) {
        this._route = _route;
        this._token = _token;
    }
    canActivate(route, state) {
        const currentUser = this._token.getUser();
        if (currentUser) {
            return true;
        }
        this._route.navigate(['/login']);
        return false;
    }
}
AuthGuardService.ɵfac = function AuthGuardService_Factory(t) { return new (t || AuthGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"])); };
AuthGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuardService, factory: AuthGuardService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "IiZn":
/*!************************************************!*\
  !*** ./src/app/checkout/checkout.component.ts ***!
  \************************************************/
/*! exports provided: CheckoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutComponent", function() { return CheckoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/cart.service */ "c14U");
/* harmony import */ var ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/progress */ "W9fG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "RwU8");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/input */ "PTRe");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "tyNb");











function CheckoutComponent_div_3_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function CheckoutComponent_div_3_div_5_Template_input_valueChange_3_listener($event) { const field_r5 = ctx.$implicit; return field_r5.value = $event; })("ngModelChange", function CheckoutComponent_div_3_div_5_Template_input_ngModelChange_3_listener($event) { const field_r5 = ctx.$implicit; return field_r5.value = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const field_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](field_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", field_r5.type)("name", field_r5.name)("placeholder", field_r5.placeholder)("value", field_r5.value)("ngModel", field_r5.value);
} }
function CheckoutComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Billing Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CheckoutComponent_div_3_div_5_Template, 4, 6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CheckoutComponent_div_3_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.submitBilling(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Continue ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.billingAddress);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r0.canBillingSubmit());
} }
function CheckoutComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Payment Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Card number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function CheckoutComponent_div_4_Template_input_valueChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.cardNumber = $event; })("ngModelChange", function CheckoutComponent_div_4_Template_input_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.cardNumber = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Name on card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function CheckoutComponent_div_4_Template_input_valueChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.cardName = $event; })("ngModelChange", function CheckoutComponent_div_4_Template_input_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.cardName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Expiry date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function CheckoutComponent_div_4_Template_input_valueChange_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.cardExpiry = $event; })("ngModelChange", function CheckoutComponent_div_4_Template_input_ngModelChange_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.cardExpiry = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Security code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function CheckoutComponent_div_4_Template_input_valueChange_21_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.cardCode = $event; })("ngModelChange", function CheckoutComponent_div_4_Template_input_ngModelChange_21_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.cardCode = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CheckoutComponent_div_4_Template_button_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.submitPayment(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Continue ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r1.cardNumber)("ngModel", ctx_r1.cardNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r1.cardName)("ngModel", ctx_r1.cardName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r1.cardExpiry)("ngModel", ctx_r1.cardExpiry);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r1.cardCode)("ngModel", ctx_r1.cardCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r1.canPaymentSubmit());
} }
function CheckoutComponent_div_5_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r22.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r22.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 5, item_r22.price, "USD"), " x ", item_r22.quantity, " = ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 8, item_r22.quantity * item_r22.price, "USD"), " ");
} }
function CheckoutComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Order Summary");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Item(s)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Payment method");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Credit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Order total");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CheckoutComponent_div_5_Template_button_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.submitCheckout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Place order ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Order Items");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, CheckoutComponent_div_5_div_25_Template, 9, 11, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.cartData.products.length, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](18, 4, ctx_r2.cartData.total, "USD"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLoading", ctx_r2.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.cartData.products);
} }
function CheckoutComponent_div_6_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r26.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r26.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 5, item_r26.price, "USD"), " x ", item_r26.quantity, " = ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 8, item_r26.quantity * item_r26.price, "USD"), " ");
} }
function CheckoutComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Thank you!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Please check your email for the order confirmation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Order ID: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Continue shopping ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Order Summary");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, CheckoutComponent_div_6_div_18_Template, 9, 11, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.orderId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.products);
} }
class CheckoutComponent {
    constructor(_auth, _cart) {
        this._auth = _auth;
        this._cart = _cart;
        this.currentStep = 1;
        this.loading = false;
        this.successMessage = '';
        this.billingAddress = [
            {
                name: 'Full name',
                placeholder: 'Enter your full name',
                type: 'text',
                value: '',
            },
            {
                name: 'Email',
                placeholder: 'Enter your email address',
                type: 'email',
                value: '',
            },
            {
                name: 'Address',
                placeholder: 'Enter your address',
                type: 'text',
                value: '',
            },
            {
                name: 'City',
                placeholder: 'Enter your city',
                type: 'text',
                value: '',
            },
            {
                name: 'Country',
                placeholder: 'Enter your country',
                type: 'text',
                value: '',
            },
            {
                name: 'ZIP',
                placeholder: 'Enter your zip code',
                type: 'text',
                value: '',
            },
            {
                name: 'Telephone',
                placeholder: 'Enter your telephone number',
                type: 'text',
                value: '',
            },
        ];
        this._auth.user.subscribe((user) => {
            if (user) {
                this.currentUser = user;
                this.billingAddress[0].value = user.fname;
                this.billingAddress[1].value = user.email;
            }
        });
        this._cart.cartDataObs$.subscribe((cartData) => {
            this.cartData = cartData;
        });
    }
    ngOnInit() { }
    submitCheckout() {
        this.loading = true;
        setTimeout(() => {
            this._cart
                .submitCheckout(this.currentUser.user_id, this.cartData)
                .subscribe((res) => {
                console.log(res);
                this.loading = false;
                this.orderId = res.orderId;
                this.products = res.products;
                this.currentStep = 4;
                this._cart.clearCart();
            }, (err) => {
                console.log(err);
                this.loading = false;
            });
        }, 750);
    }
    getProgressPrecent() {
        return (this.currentStep / 4) * 100;
    }
    submitBilling() {
        this.nextStep();
    }
    canBillingSubmit() {
        return this.billingAddress.filter((field) => field.value.length > 0)
            .length !== 7
            ? true
            : false;
    }
    submitPayment() {
        this.nextStep();
    }
    canPaymentSubmit() {
        return this.cardNumber && this.cardName && this.cardExpiry && this.cardCode
            ? true
            : false;
    }
    nextStep() {
        this.currentStep += 1;
        localStorage.setItem('checkoutStep', this.currentStep.toString());
    }
    prevStep() {
        if (this.currentStep > 1) {
            this.currentStep -= 1;
            localStorage.setItem('checkoutStep', this.currentStep.toString());
        }
    }
}
CheckoutComponent.ɵfac = function CheckoutComponent_Factory(t) { return new (t || CheckoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"])); };
CheckoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CheckoutComponent, selectors: [["app-checkout"]], decls: 7, vars: 7, consts: [[1, "checkout-container"], [1, "progress-container"], [3, "nzPercent", "nzShowInfo", "nzStrokeWidth"], [4, "ngIf"], [1, "billing-container"], ["class", "input-container", 4, "ngFor", "ngForOf"], ["nz-button", "", 3, "disabled", "click"], [1, "input-container"], ["for", ""], ["nz-input", "", 3, "type", "name", "placeholder", "value", "ngModel", "valueChange", "ngModelChange"], [1, "payment-container"], ["nz-input", "", "type", "text", "name", "cardNumber", "placeholder", "1234 1234 1234 1234", 3, "value", "ngModel", "valueChange", "ngModelChange"], ["nz-input", "", "type", "text", "name", "cardName", "placeholder", "John Doe", 3, "value", "ngModel", "valueChange", "ngModelChange"], [1, "\u203C\uFE0F"], ["nz-input", "", "type", "text", "name", "cardExpiry", "placeholder", "06/30", 3, "value", "ngModel", "valueChange", "ngModelChange"], ["nz-input", "", "type", "text", "name", "cardCode", "placeholder", "123", 3, "value", "ngModel", "valueChange", "ngModelChange"], [1, "summary-container"], [1, "summary-container__order"], [1, "details"], ["nz-button", "", "nzType", "primary", 3, "nzLoading", "click"], [1, "summary-container__items"], [1, "item-list"], ["class", "item-container", 4, "ngFor", "ngForOf"], [1, "item-container"], [1, "item-image"], ["alt", "", 3, "src"], [1, "item-title"], [1, "item-total"], [1, "confirmation-container"], [1, "title"], [1, "order-id"], ["nz-button", "", "routerLink", "/", 1, "cta-button"], [1, "products-container"], [1, "products-container__list"], ["class", "list-item", 4, "ngFor", "ngForOf"], [1, "list-item"]], template: function CheckoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "nz-progress", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CheckoutComponent_div_3_Template, 8, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CheckoutComponent_div_4_Template, 24, 9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CheckoutComponent_div_5_Template, 26, 7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CheckoutComponent_div_6_Template, 19, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzPercent", ctx.getProgressPrecent())("nzShowInfo", false)("nzStrokeWidth", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentStep === 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentStep === 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentStep === 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentStep === 4);
    } }, directives: [ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_3__["NzProgressComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_6__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_7__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__["ɵNzTransitionPatchDirective"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_9__["NzInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterLink"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CurrencyPipe"]], styles: ["@charset \"UTF-8\";\n.checkout-container[_ngcontent-%COMP%] {\n  padding: 24px 16px;\n  position: relative;\n}\n.checkout-container[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%] {\n  top: -12px;\n  left: 0px;\n  position: absolute;\n  height: 20px;\n  width: 100%;\n}\n.checkout-container[_ngcontent-%COMP%]   .billing-container[_ngcontent-%COMP%]    > h2[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.checkout-container[_ngcontent-%COMP%]   .billing-container[_ngcontent-%COMP%]    > form[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.checkout-container[_ngcontent-%COMP%]   .billing-container[_ngcontent-%COMP%]    > form[_ngcontent-%COMP%]    > .input-container[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.checkout-container[_ngcontent-%COMP%]   .billing-container[_ngcontent-%COMP%]    > form[_ngcontent-%COMP%]    > .input-container[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 2px;\n}\n.checkout-container[_ngcontent-%COMP%]   .billing-container[_ngcontent-%COMP%]    > form[_ngcontent-%COMP%]    > .input-container[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%] {\n  height: 44px;\n}\n.checkout-container[_ngcontent-%COMP%]   .billing-container[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 48px;\n}\n.checkout-container[_ngcontent-%COMP%]   .payment-container[_ngcontent-%COMP%]    > h2[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.checkout-container[_ngcontent-%COMP%]   .payment-container[_ngcontent-%COMP%]    > form[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.checkout-container[_ngcontent-%COMP%]   .payment-container[_ngcontent-%COMP%]    > form[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.checkout-container[_ngcontent-%COMP%]   .payment-container[_ngcontent-%COMP%]    > form[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 2px;\n}\n.checkout-container[_ngcontent-%COMP%]   .payment-container[_ngcontent-%COMP%]    > form[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  height: 44px;\n}\n.checkout-container[_ngcontent-%COMP%]   .payment-container[_ngcontent-%COMP%]    > form[_ngcontent-%COMP%]    > .\u203C\uFE0F[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  column-gap: 12px;\n}\n.checkout-container[_ngcontent-%COMP%]   .payment-container[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 48px;\n}\n.checkout-container[_ngcontent-%COMP%]   .summary-container__order[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n}\n.checkout-container[_ngcontent-%COMP%]   .summary-container__order[_ngcontent-%COMP%]    > h2[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.checkout-container[_ngcontent-%COMP%]   .summary-container__order[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.checkout-container[_ngcontent-%COMP%]   .summary-container__order[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 3px;\n}\n.checkout-container[_ngcontent-%COMP%]   .summary-container__order[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  margin-right: auto;\n}\n.checkout-container[_ngcontent-%COMP%]   .summary-container__order[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n  height: 44px;\n  width: 100%;\n}\n.checkout-container[_ngcontent-%COMP%]   .summary-container__items[_ngcontent-%COMP%]    > h2[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.checkout-container[_ngcontent-%COMP%]   .summary-container__items[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%] {\n  max-height: 300px;\n  overflow-y: auto;\n}\n.checkout-container[_ngcontent-%COMP%]   .summary-container__items[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]   .item-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  font-weight: 500;\n  margin-bottom: 24px;\n  padding: 8px 0;\n}\n.checkout-container[_ngcontent-%COMP%]   .summary-container__items[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]   .item-container[_ngcontent-%COMP%]   .item-image[_ngcontent-%COMP%] {\n  margin-right: 16px;\n}\n.checkout-container[_ngcontent-%COMP%]   .summary-container__items[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]   .item-container[_ngcontent-%COMP%]   .item-image[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  width: 80px;\n}\n.checkout-container[_ngcontent-%COMP%]   .summary-container__items[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]   .item-container[_ngcontent-%COMP%]   .item-title[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n.checkout-container[_ngcontent-%COMP%]   .summary-container__items[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]   .item-container[_ngcontent-%COMP%]   .item-total[_ngcontent-%COMP%] {\n  text-align: right;\n  padding-left: 16px;\n}\n.checkout-container[_ngcontent-%COMP%]   .confirmation-container[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.checkout-container[_ngcontent-%COMP%]   .confirmation-container[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%] {\n  padding-bottom: 40px;\n  text-align: center;\n  border-bottom: 1px solid #ccc;\n}\n.checkout-container[_ngcontent-%COMP%]   .confirmation-container[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]    > h1[_ngcontent-%COMP%] {\n  font-size: 2.75rem;\n}\n.checkout-container[_ngcontent-%COMP%]   .confirmation-container[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%]   .order-id[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.checkout-container[_ngcontent-%COMP%]   .confirmation-container[_ngcontent-%COMP%]   .cta-button[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 250px;\n  height: 44px;\n  margin: 24px auto auto;\n}\n.checkout-container[_ngcontent-%COMP%]   .confirmation-container[_ngcontent-%COMP%]   .products-container[_ngcontent-%COMP%] {\n  text-align: left;\n  padding-top: 40px;\n}\n.checkout-container[_ngcontent-%COMP%]   .confirmation-container[_ngcontent-%COMP%]   .products-container[_ngcontent-%COMP%]    > h2[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.checkout-container[_ngcontent-%COMP%]   .confirmation-container[_ngcontent-%COMP%]   .products-container__list[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  font-weight: 500;\n  margin-bottom: 24px;\n  padding: 8px 0;\n}\n.checkout-container[_ngcontent-%COMP%]   .confirmation-container[_ngcontent-%COMP%]   .products-container__list[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]   .item-image[_ngcontent-%COMP%] {\n  margin-right: 16px;\n}\n.checkout-container[_ngcontent-%COMP%]   .confirmation-container[_ngcontent-%COMP%]   .products-container__list[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]   .item-image[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  width: 80px;\n}\n.checkout-container[_ngcontent-%COMP%]   .confirmation-container[_ngcontent-%COMP%]   .products-container__list[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]   .item-title[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n.checkout-container[_ngcontent-%COMP%]   .confirmation-container[_ngcontent-%COMP%]   .products-container__list[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]   .item-total[_ngcontent-%COMP%] {\n  text-align: right;\n  padding-left: 16px;\n}\n@media screen and (min-width: 1200px) {\n  .checkout-container[_ngcontent-%COMP%] {\n    padding: 0;\n    padding-bottom: 60px;\n  }\n  .checkout-container[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%] {\n    top: -60px;\n    left: 0px;\n    position: absolute;\n    height: 20px;\n    width: 100%;\n  }\n  .checkout-container[_ngcontent-%COMP%]   .billing-container[_ngcontent-%COMP%] {\n    padding: 24px 16px;\n    max-width: 600px;\n    margin: 48px auto 0;\n    border: 1px solid #ccc;\n    border-radius: 3px;\n  }\n  .checkout-container[_ngcontent-%COMP%]   .payment-container[_ngcontent-%COMP%] {\n    padding: 24px 16px;\n    max-width: 600px;\n    margin: 48px auto 0;\n    border: 1px solid #ccc;\n    border-radius: 3px;\n  }\n  .checkout-container[_ngcontent-%COMP%]   .summary-container[_ngcontent-%COMP%] {\n    max-width: 1024px;\n    margin: 48px auto 0;\n    border: 1px solid #ccc;\n    border-radius: 3px;\n    display: flex;\n    flex-direction: row-reverse;\n  }\n  .checkout-container[_ngcontent-%COMP%]   .summary-container__order[_ngcontent-%COMP%] {\n    width: 350px;\n    padding: 16px;\n  }\n  .checkout-container[_ngcontent-%COMP%]   .summary-container__items[_ngcontent-%COMP%] {\n    flex-grow: 1;\n  }\n  .checkout-container[_ngcontent-%COMP%]   .summary-container__items[_ngcontent-%COMP%]    > h2[_ngcontent-%COMP%] {\n    padding: 16px;\n    margin: 0;\n  }\n  .checkout-container[_ngcontent-%COMP%]   .summary-container__items[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .checkout-container[_ngcontent-%COMP%]   .confirmation-container[_ngcontent-%COMP%] {\n    max-width: 700px;\n    margin: 48px auto 0;\n    padding: 24px;\n    border: 1px solid #ccc;\n    border-radius: 3px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NoZWNrb3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7QUFFRjtBQUFFO0VBQ0UsVUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBRUo7QUFDSTtFQUNFLG1CQUFBO0FBQ047QUFDSTtFQUNFLG1CQUFBO0FBQ047QUFBTTtFQUNFLG1CQUFBO0FBRVI7QUFEUTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtBQUdWO0FBRFE7RUFDRSxZQUFBO0FBR1Y7QUFDSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBQ047QUFJSTtFQUNFLG1CQUFBO0FBRk47QUFJSTtFQUNFLG1CQUFBO0FBRk47QUFHTTtFQUNFLG1CQUFBO0FBRFI7QUFFUTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtBQUFWO0FBRVE7RUFDRSxZQUFBO0FBQVY7QUFHTTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0FBRFI7QUFJSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBRk47QUFPSTtFQUlFLG1CQUFBO0FBUk47QUFLTTtFQUNFLG1CQUFBO0FBSFI7QUFNTTtFQUNFLG1CQUFBO0FBSlI7QUFLUTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtBQUhWO0FBSVU7RUFDRSxrQkFBQTtBQUZaO0FBTU07RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQUpSO0FBUU07RUFDRSxtQkFBQTtBQU5SO0FBUU07RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0FBTlI7QUFPUTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBTFY7QUFNVTtFQUNFLGtCQUFBO0FBSlo7QUFLWTtFQUNFLFdBQUE7QUFIZDtBQU1VO0VBQ0UsWUFBQTtBQUpaO0FBTVU7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FBSlo7QUFVRTtFQUNFLGtCQUFBO0FBUko7QUFTSTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtBQVBOO0FBU1E7RUFDRSxrQkFBQTtBQVBWO0FBV1E7RUFDRSxnQkFBQTtBQVRWO0FBYUk7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUFYTjtBQWFJO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQVhOO0FBWU07RUFDRSxtQkFBQTtBQVZSO0FBYVE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQVhWO0FBWVU7RUFDRSxrQkFBQTtBQVZaO0FBV1k7RUFDRSxXQUFBO0FBVGQ7QUFZVTtFQUNFLFlBQUE7QUFWWjtBQVlVO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBQVZaO0FBa0JBO0VBQ0U7SUFDRSxVQUFBO0lBQ0Esb0JBQUE7RUFmRjtFQWdCRTtJQUNFLFVBQUE7SUFDQSxTQUFBO0lBQ0Esa0JBQUE7SUFDQSxZQUFBO0lBQ0EsV0FBQTtFQWRKO0VBZ0JFO0lBQ0Usa0JBQUE7SUFDQSxnQkFBQTtJQUNBLG1CQUFBO0lBQ0Esc0JBQUE7SUFDQSxrQkFBQTtFQWRKO0VBZ0JFO0lBQ0Usa0JBQUE7SUFDQSxnQkFBQTtJQUNBLG1CQUFBO0lBQ0Esc0JBQUE7SUFDQSxrQkFBQTtFQWRKO0VBZ0JFO0lBQ0UsaUJBQUE7SUFDQSxtQkFBQTtJQUNBLHNCQUFBO0lBQ0Esa0JBQUE7SUFDQSxhQUFBO0lBQ0EsMkJBQUE7RUFkSjtFQWVJO0lBQ0UsWUFBQTtJQUNBLGFBQUE7RUFiTjtFQWVJO0lBQ0UsWUFBQTtFQWJOO0VBY007SUFDRSxhQUFBO0lBQ0EsU0FBQTtFQVpSO0VBY007SUFDRSxhQUFBO0VBWlI7RUFnQkU7SUFDRSxnQkFBQTtJQUNBLG1CQUFBO0lBQ0EsYUFBQTtJQUNBLHNCQUFBO0lBQ0Esa0JBQUE7RUFkSjtBQUNGIiwiZmlsZSI6ImNoZWNrb3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoZWNrb3V0LWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDI0cHggMTZweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAvLyBGaXJzdCBzdGVwXG4gIC5wcm9ncmVzcy1jb250YWluZXIge1xuICAgIHRvcDogLTEycHg7XG4gICAgbGVmdDogMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmJpbGxpbmctY29udGFpbmVyIHtcbiAgICA+IGgyIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgfVxuICAgID4gZm9ybSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICAgICAgPiAuaW5wdXQtY29udGFpbmVyIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgICAgICAgPiBsYWJlbCB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICAgICAgICB9XG4gICAgICAgID4gaW5wdXQge1xuICAgICAgICAgIGhlaWdodDogNDRweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICA+IGJ1dHRvbiB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogNDhweDtcbiAgICB9XG4gIH1cbiAgLy8gU2Vjb25kIHN0ZXBcbiAgLnBheW1lbnQtY29udGFpbmVyIHtcbiAgICA+IGgyIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgfVxuICAgID4gZm9ybSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICAgICAgLmlucHV0LWNvbnRhaW5lciB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG4gICAgICAgIGxhYmVsIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAycHg7XG4gICAgICAgIH1cbiAgICAgICAgaW5wdXQge1xuICAgICAgICAgIGhlaWdodDogNDRweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgPiAu4oC877iPIHtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgICAgICBjb2x1bW4tZ2FwOiAxMnB4O1xuICAgICAgfVxuICAgIH1cbiAgICA+IGJ1dHRvbiB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogNDhweDtcbiAgICB9XG4gIH1cbiAgLy8gVGhpcmQgc3RlcFxuICAuc3VtbWFyeS1jb250YWluZXIge1xuICAgICZfX29yZGVyIHtcbiAgICAgID4gaDIge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgICAgfVxuICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgICAgIC5kZXRhaWxzIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgICAgICAgPiBkaXYge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogM3B4O1xuICAgICAgICAgID4gc3BhbiB7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICA+IGJ1dHRvbiB7XG4gICAgICAgIGhlaWdodDogNDRweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgfVxuICAgICZfX2l0ZW1zIHtcbiAgICAgID4gaDIge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgICAgfVxuICAgICAgLml0ZW0tbGlzdCB7XG4gICAgICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xuICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgICAgICAuaXRlbS1jb250YWluZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gICAgICAgICAgcGFkZGluZzogOHB4IDA7XG4gICAgICAgICAgLml0ZW0taW1hZ2Uge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICAgICAgICAgICAgPiBpbWcge1xuICAgICAgICAgICAgICB3aWR0aDogODBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgLml0ZW0tdGl0bGUge1xuICAgICAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaXRlbS10b3RhbCB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLmNvbmZpcm1hdGlvbi1jb250YWluZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICA+IGhlYWRlciB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogNDBweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICAgICAgLnRpdGxlIHtcbiAgICAgICAgPiBoMSB7XG4gICAgICAgICAgZm9udC1zaXplOiAyLjc1cmVtO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAub3JkZXItaWQge1xuICAgICAgICA+IHNwYW4ge1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLmN0YS1idXR0b24ge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXgtd2lkdGg6IDI1MHB4O1xuICAgICAgaGVpZ2h0OiA0NHB4O1xuICAgICAgbWFyZ2luOiAyNHB4IGF1dG8gYXV0bztcbiAgICB9XG4gICAgLnByb2R1Y3RzLWNvbnRhaW5lciB7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgcGFkZGluZy10b3A6IDQwcHg7XG4gICAgICA+IGgyIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICAgIH1cbiAgICAgICZfX2xpc3Qge1xuICAgICAgICAubGlzdC1pdGVtIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICAgICAgICAgIHBhZGRpbmc6IDhweCAwO1xuICAgICAgICAgIC5pdGVtLWltYWdlIHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcbiAgICAgICAgICAgID4gaW1nIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDgwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIC5pdGVtLXRpdGxlIHtcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLml0ZW0tdG90YWwge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAuY2hlY2tvdXQtY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHBhZGRpbmctYm90dG9tOiA2MHB4O1xuICAgIC5wcm9ncmVzcy1jb250YWluZXIge1xuICAgICAgdG9wOiAtNjBweDtcbiAgICAgIGxlZnQ6IDBweDtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGhlaWdodDogMjBweDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICAuYmlsbGluZy1jb250YWluZXIge1xuICAgICAgcGFkZGluZzogMjRweCAxNnB4O1xuICAgICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICAgIG1hcmdpbjogNDhweCBhdXRvIDA7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIH1cbiAgICAucGF5bWVudC1jb250YWluZXIge1xuICAgICAgcGFkZGluZzogMjRweCAxNnB4O1xuICAgICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICAgIG1hcmdpbjogNDhweCBhdXRvIDA7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIH1cbiAgICAuc3VtbWFyeS1jb250YWluZXIge1xuICAgICAgbWF4LXdpZHRoOiAxMDI0cHg7XG4gICAgICBtYXJnaW46IDQ4cHggYXV0byAwO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gICAgICAmX19vcmRlciB7XG4gICAgICAgIHdpZHRoOiAzNTBweDtcbiAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgIH1cbiAgICAgICZfX2l0ZW1zIHtcbiAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICA+IGgyIHtcbiAgICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuICAgICAgICAuaXRlbS1saXN0IHtcbiAgICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC5jb25maXJtYXRpb24tY29udGFpbmVyIHtcbiAgICAgIG1heC13aWR0aDogNzAwcHg7XG4gICAgICBtYXJnaW46IDQ4cHggYXV0byAwO1xuICAgICAgcGFkZGluZzogMjRweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgfVxuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ "KRBT":
/*!*************************************************!*\
  !*** ./src/app/services/interceptor.service.ts ***!
  \*************************************************/
/*! exports provided: MyInterceptor, authInterceptorProviders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyInterceptor", function() { return MyInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authInterceptorProviders", function() { return authInterceptorProviders; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/token-storage.service */ "Zr0/");



const TOKEN_HEADER_KEY = 'x-access-token';
class MyInterceptor {
    constructor(_token) {
        this._token = _token;
    }
    intercept(req, next) {
        let authReq = req;
        let token = this._token.getToken();
        if (token != null) {
            authReq = req.clone({
                headers: req.headers.set(TOKEN_HEADER_KEY, token),
            });
        }
        return next.handle(authReq);
    }
}
MyInterceptor.ɵfac = function MyInterceptor_Factory(t) { return new (t || MyInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"])); };
MyInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: MyInterceptor, factory: MyInterceptor.ɵfac });
const authInterceptorProviders = [
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"], useClass: MyInterceptor, multi: true },
];


/***/ }),

/***/ "LvIC":
/*!**********************************************!*\
  !*** ./src/app/product/product.component.ts ***!
  \**********************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var swiper_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/core */ "TaHA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/product.service */ "Gdn9");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/cart.service */ "c14U");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/input-number */ "z4wI");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "RwU8");
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! swiper/angular */ "UMfn");

// import Swiper core and required components













function ProductComponent_div_0_swiper_3_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 29);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", ctx_r3.product.image, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function ProductComponent_div_0_swiper_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "swiper", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ProductComponent_div_0_swiper_3_ng_template_1_Template, 1, 1, "ng-template", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("zoom", true)("slidesPerView", 1)("spaceBetween", 50)("pagination", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("zoom", true);
} }
function ProductComponent_div_0_swiper_4_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 29);
} if (rf & 2) {
    const image_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", image_r5, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function ProductComponent_div_0_swiper_4_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ProductComponent_div_0_swiper_4_1_ng_template_0_Template, 1, 1, "ng-template", 28);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("zoom", true);
} }
function ProductComponent_div_0_swiper_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "swiper", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ProductComponent_div_0_swiper_4_1_Template, 1, 1, undefined, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("zoom", true)("slidesPerView", 1)("spaceBetween", 50)("pagination", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.showcaseImages);
} }
const _c0 = function (a0) { return { color: a0 }; };
function ProductComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ProductComponent_div_0_swiper_3_Template, 2, 5, "swiper", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, ProductComponent_div_0_swiper_4_Template, 2, 5, "swiper", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h2", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "10 Review(s) | ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Add your review");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "h2", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](22, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "QTY:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "nz-input-number", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ProductComponent_div_0_Template_nz_input_number_ngModelChange_31_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r9.quantity = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductComponent_div_0_Template_button_click_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r11.addToCart(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, " Add to cart ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Category: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "Share: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](41, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](42, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](43, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](44, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](45, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.showcaseImages.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.showcaseImages.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.product.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](22, 13, ctx_r0.product.price, "USD"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](16, _c0, ctx_r0.quantity > 0 ? "inherit" : "red"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.quantity === 0 ? "Out of stock" : "In stock");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.product.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r0.quantity)("nzMin", ctx_r0.product.quantity > 0 ? 1 : 0)("nzMax", ctx_r0.product.quantity > 0 ? ctx_r0.product.quantity : 0)("nzStep", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r0.quantity === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.product.category, " ");
} }
// install Swiper components
swiper_core__WEBPACK_IMPORTED_MODULE_1__["default"].use([
    swiper_core__WEBPACK_IMPORTED_MODULE_1__["Navigation"],
    swiper_core__WEBPACK_IMPORTED_MODULE_1__["Pagination"],
    swiper_core__WEBPACK_IMPORTED_MODULE_1__["Scrollbar"],
    swiper_core__WEBPACK_IMPORTED_MODULE_1__["A11y"],
    swiper_core__WEBPACK_IMPORTED_MODULE_1__["Virtual"],
    swiper_core__WEBPACK_IMPORTED_MODULE_1__["Zoom"],
    swiper_core__WEBPACK_IMPORTED_MODULE_1__["Autoplay"],
    swiper_core__WEBPACK_IMPORTED_MODULE_1__["Thumbs"],
    swiper_core__WEBPACK_IMPORTED_MODULE_1__["Controller"],
]);
class ProductComponent {
    constructor(_route, _product, _cart) {
        this._route = _route;
        this._product = _product;
        this._cart = _cart;
        this.showcaseImages = [];
        this.loading = false;
    }
    ngOnInit() {
        this.loading = true;
        this._route.paramMap
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((param) => {
            return param.params.id;
        }))
            .subscribe((productId) => {
            // returns string so convert it to number
            this.id = parseInt(productId);
            this._product.getSingleProduct(productId).subscribe((product) => {
                console.log(product);
                this.product = product;
                if (product.quantity === 0)
                    this.quantity = 0;
                else
                    this.quantity = 1;
                if (product.images) {
                    this.showcaseImages = product.images.split(';');
                }
                this.loading = false;
            });
        });
    }
    addToCart() {
        this._cart.addProduct({
            id: this.id,
            price: this.product.price,
            quantity: this.quantity,
            image: this.product.image,
            title: this.product.title,
            maxQuantity: this.product.quantity,
        });
    }
}
ProductComponent.ɵfac = function ProductComponent_Factory(t) { return new (t || ProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_5__["CartService"])); };
ProductComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ProductComponent, selectors: [["app-product"]], decls: 1, vars: 1, consts: [["class", "product-container", 4, "ngIf"], [1, "product-container"], [1, "product-container__image"], [3, "zoom", "slidesPerView", "spaceBetween", "pagination", 4, "ngIf"], [1, "product-container__details"], [1, "title"], [1, "reviews"], [1, "rating"], ["nz-icon", "", "nzType", "star", "nzTheme", "fill"], ["nz-icon", "", "nzType", "star"], [1, "review-link"], [2, "cursor", "pointer"], [1, "price-container"], [1, "price"], [1, "availability", 3, "ngStyle"], [1, "description"], [1, "cta"], [1, "add-to-cart"], [3, "ngModel", "nzMin", "nzMax", "nzStep", "ngModelChange"], ["nz-button", "", "nzType", "primary", 3, "disabled", "click"], [1, "category"], [1, "social-links"], ["nz-icon", "", "nzType", "facebook", "nzTheme", "outline"], ["nz-icon", "", "nzType", "twitter", "nzTheme", "outline"], ["nz-icon", "", "nzType", "google-plus", "nzTheme", "outline"], ["nz-icon", "", "nzType", "mail", "nzTheme", "outline"], [1, "additional"], [3, "zoom", "slidesPerView", "spaceBetween", "pagination"], ["swiperSlide", "", 3, "zoom"], ["alt", "`Product image`", 3, "src"], [4, "ngFor", "ngForOf"]], template: function ProductComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ProductComponent_div_0_Template, 46, 18, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_8__["NzIconDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgStyle"], ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_9__["NzInputNumberComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_11__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_12__["NzWaveDirective"], swiper_angular__WEBPACK_IMPORTED_MODULE_13__["SwiperComponent"], swiper_angular__WEBPACK_IMPORTED_MODULE_13__["SwiperSlideDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["CurrencyPipe"]], styles: [".product-container[_ngcontent-%COMP%] {\n  padding-bottom: 60px;\n}\n.product-container__image[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n  text-align: center;\n}\n.product-container__details[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  max-width: 1024px;\n  padding: 16px;\n}\n.product-container__details[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  line-height: 1.25;\n  margin-bottom: 6px;\n}\n.product-container__details[_ngcontent-%COMP%]   .reviews[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 4px;\n}\n.product-container__details[_ngcontent-%COMP%]   .reviews[_ngcontent-%COMP%]   .rating[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}\n.product-container__details[_ngcontent-%COMP%]   .reviews[_ngcontent-%COMP%]   .rating[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  margin-right: 2px;\n  font-size: 1rem;\n  color: #aaa;\n  cursor: pointer;\n}\n.product-container__details[_ngcontent-%COMP%]   .reviews[_ngcontent-%COMP%]   .rating[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%]:nth-child(n+1):nth-child(-n+4) {\n  color: #f9d71c;\n}\n.product-container__details[_ngcontent-%COMP%]   .reviews[_ngcontent-%COMP%]   .review-link[_ngcontent-%COMP%] {\n  color: #525252;\n  font-size: 0.75rem;\n}\n.product-container__details[_ngcontent-%COMP%]   .price-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 12px;\n}\n.product-container__details[_ngcontent-%COMP%]   .price-container[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  margin-right: 12px;\n}\n.product-container__details[_ngcontent-%COMP%]   .price-container[_ngcontent-%COMP%]   .availability[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  text-transform: uppercase;\n}\n.product-container__details[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.product-container__details[_ngcontent-%COMP%]   .cta[_ngcontent-%COMP%]   .add-to-cart[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 40px;\n}\n.product-container__details[_ngcontent-%COMP%]   .cta[_ngcontent-%COMP%]   .add-to-cart[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  margin-right: 4px;\n}\n.product-container__details[_ngcontent-%COMP%]   .cta[_ngcontent-%COMP%]   .add-to-cart[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n  height: 46px;\n  margin-left: 12px;\n  border-radius: 50px;\n}\n.product-container__details[_ngcontent-%COMP%]   .cta[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  margin-bottom: 16px;\n}\n.product-container__details[_ngcontent-%COMP%]   .cta[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  margin-right: 6px;\n}\n.product-container__details[_ngcontent-%COMP%]   .cta[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n}\n.product-container__details[_ngcontent-%COMP%]   .cta[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  margin-right: 6px;\n}\n.product-container__details[_ngcontent-%COMP%]   .cta[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  margin: 0 8px;\n  cursor: pointer;\n  transition: color 0.2s;\n}\n.product-container__details[_ngcontent-%COMP%]   .cta[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%]:hover {\n  color: #1890ff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Byb2R1Y3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBQTtBQUNGO0FBQUU7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0FBRUo7QUFBRTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7QUFFSjtBQURJO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBR047QUFESTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBR047QUFGTTtFQUNFLGtCQUFBO0FBSVI7QUFIUTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBS1Y7QUFKVTtFQUNFLGNBQUE7QUFNWjtBQUZNO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0FBSVI7QUFESTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBR047QUFGTTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7QUFJUjtBQUZNO0VBQ0UsZUFBQTtFQUNBLHlCQUFBO0FBSVI7QUFESTtFQUNFLG1CQUFBO0FBR047QUFBTTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBRVI7QUFEUTtFQUNFLGlCQUFBO0FBR1Y7QUFEUTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBR1Y7QUFBTTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7QUFFUjtBQURRO0VBQ0UsaUJBQUE7QUFHVjtBQUFNO0VBQ0UseUJBQUE7QUFFUjtBQURRO0VBQ0UsaUJBQUE7QUFHVjtBQURRO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7QUFHVjtBQUZVO0VBQ0UsY0FBQTtBQUlaIiwiZmlsZSI6InByb2R1Y3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZHVjdC1jb250YWluZXIge1xuICBwYWRkaW5nLWJvdHRvbTogNjBweDtcbiAgJl9faW1hZ2Uge1xuICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gICZfX2RldGFpbHMge1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIG1heC13aWR0aDogMTAyNHB4O1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgLnRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgbGluZS1oZWlnaHQ6IDEuMjU7XG4gICAgICBtYXJnaW4tYm90dG9tOiA2cHg7XG4gICAgfVxuICAgIC5yZXZpZXdzIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgICAgLnJhdGluZyB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTJweDtcbiAgICAgICAgPiBpIHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDJweDtcbiAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgY29sb3I6ICNhYWE7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICY6bnRoLWNoaWxkKG4gKyAxKTpudGgtY2hpbGQoLW4gKyA0KSB7XG4gICAgICAgICAgICBjb2xvcjogI2Y5ZDcxYztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5yZXZpZXctbGluayB7XG4gICAgICAgIGNvbG9yOiAjNTI1MjUyO1xuICAgICAgICBmb250LXNpemU6IDAuNzVyZW07XG4gICAgICB9XG4gICAgfVxuICAgIC5wcmljZS1jb250YWluZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICAgICAgLnByaWNlIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjc1cmVtO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gICAgICB9XG4gICAgICAuYXZhaWxhYmlsaXR5IHtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgfVxuICAgIH1cbiAgICAuZGVzY3JpcHRpb24ge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB9XG4gICAgLmN0YSB7XG4gICAgICAuYWRkLXRvLWNhcnQge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICAgICAgICA+IHNwYW4ge1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogNHB4O1xuICAgICAgICB9XG4gICAgICAgID4gYnV0dG9uIHtcbiAgICAgICAgICBoZWlnaHQ6IDQ2cHg7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDEycHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLmNhdGVnb3J5IHtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICAgICAgPiBzcGFuIHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDZweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLnNvY2lhbC1saW5rcyB7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgID4gc3BhbiB7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA2cHg7XG4gICAgICAgIH1cbiAgICAgICAgPiBpIHtcbiAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgbWFyZ2luOiAwIDhweDtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4ycztcbiAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGNvbG9yOiAjMTg5MGZmO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcbi8vICAgLnByb2R1Y3QtY29udGFpbmVyIHtcbi8vICAgICBwYWRkaW5nLWJvdHRvbTogNjBweDtcbi8vICAgICAmX19pbWFnZSB7XG4vLyAgICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuLy8gICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuLy8gICAgIH1cbi8vICAgICAmX19kZXRhaWxzIHtcbi8vICAgICB9XG4vLyAgIH1cbi8vIH1cbiJdfQ== */"] });


/***/ }),

/***/ "OuDC":
/*!**********************************************************!*\
  !*** ./src/app/auth/components/login/login.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/input */ "PTRe");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "RwU8");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/alert */ "Wfee");










const _c0 = function () { return { "margin-bottom": "16px" }; };
function LoginComponent_nz_alert_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-alert", 14);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzMessage", ctx_r0.error)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
} }
class LoginComponent {
    constructor(_auth, _router) {
        this._auth = _auth;
        this._router = _router;
        this.email = '';
        this.password = '';
        this.error = '';
        this.loading = false;
    }
    ngOnInit() { }
    onSubmit() {
        this.loading = true;
        this.error = '';
        if (!this.email || !this.password) {
            this.error = 'Make sure to fill everything ;)';
        }
        else {
            this._auth
                .login({ email: this.email, password: this.password })
                .subscribe((res) => {
                this.loading = false;
                this._router.navigate(['/']);
            }, (err) => {
                console.log(err);
                this.error = err.error.message;
                this.loading = false;
            });
        }
    }
    canSubmit() {
        return this.email.length > 0 && this.password.length > 0;
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 23, vars: 5, consts: [[1, "login-container"], [1, "form-container"], ["nzShowIcon", "", "nzType", "error", 3, "nzMessage", "ngStyle", 4, "ngIf"], [3, "ngSubmit"], [1, "input-container"], ["for", "email"], ["nz-input", "", "type", "email", "name", "email", "placeholder", "Enter email address", 3, "ngModel", "ngModelChange"], ["for", "password"], ["nz-input", "", "type", "password", "name", "password", "placeholder", "Enter your password", 3, "ngModel", "ngModelChange"], [1, "cta-container"], ["nz-button", "", "type", "submit", 3, "disabled", "nzLoading"], ["routerLink", "/register"], [1, "forgot-password"], ["href", ""], ["nzShowIcon", "", "nzType", "error", 3, "nzMessage", "ngStyle"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Sign In to Eccom");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, LoginComponent_nz_alert_4_Template, 1, 3, "nz-alert", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_5_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Email address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_9_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_13_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Sign in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Create a new account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Forgot password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.canSubmit())("nzLoading", ctx.loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_5__["NzInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_6__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_7__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__["ɵNzTransitionPatchDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_9__["NzAlertComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"]], styles: [".login-container[_ngcontent-%COMP%] {\n  padding: 24px 16px;\n}\n.login-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%] {\n  max-width: 475px;\n  padding: 24px 16px;\n  margin: 0 auto;\n  border-radius: 3px;\n  background-color: #fff;\n}\n.login-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]    > h2[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 32px;\n}\n.login-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]    > .error-container[_ngcontent-%COMP%] {\n  padding: 12px;\n  margin: 0 0 16px;\n  color: #fff;\n  background-color: #f83333;\n  border-radius: 4px;\n}\n.login-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]    > form[_ngcontent-%COMP%]    > .cta-container[_ngcontent-%COMP%] {\n  margin-top: 36px;\n  margin-bottom: 60px;\n  text-align: center;\n}\n.login-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]    > form[_ngcontent-%COMP%]    > .cta-container[_ngcontent-%COMP%]    > button[type=submit][_ngcontent-%COMP%] {\n  height: 52px;\n  width: 100%;\n  margin-bottom: 12px;\n}\n.login-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]    > form[_ngcontent-%COMP%]    > .cta-container[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  text-align: left;\n}\n.login-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]    > form[_ngcontent-%COMP%]   .forgot-password[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n  text-align: center;\n  font-size: 0.85rem;\n}\n.login-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]    > form[_ngcontent-%COMP%]   .forgot-password[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  color: #121212;\n}\n@media screen and (min-width: 768px) {\n  .login-container[_ngcontent-%COMP%] {\n    padding: 48px 16px 240px;\n  }\n  .login-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%] {\n    padding: 36px;\n    border: 1px solid #ccc;\n  }\n}\n.input-container[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.input-container[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  display: inline-block;\n  margin-bottom: 6px;\n}\n.input-container[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUFDRjtBQUFFO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FBRUo7QUFBSTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUFFTjtBQUFJO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUFFTjtBQUNNO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBQ1I7QUFBUTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFFVjtBQUFRO0VBQ0UsZ0JBQUE7QUFFVjtBQUNNO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBQ1I7QUFBUTtFQUNFLGNBQUE7QUFFVjtBQUtBO0VBQ0U7SUFDRSx3QkFBQTtFQUZGO0VBSUU7SUFDRSxhQUFBO0lBQ0Esc0JBQUE7RUFGSjtBQUNGO0FBTUE7RUFDRSxtQkFBQTtBQUpGO0FBS0U7RUFDRSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUFISjtBQUtFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0FBSEoiLCJmaWxlIjoibG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4tY29udGFpbmVyIHtcbiAgcGFkZGluZzogMjRweCAxNnB4O1xuICAuZm9ybS1jb250YWluZXIge1xuICAgIG1heC13aWR0aDogNDc1cHg7XG4gICAgcGFkZGluZzogMjRweCAxNnB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuXG4gICAgPiBoMiB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBtYXJnaW4tYm90dG9tOiAzMnB4O1xuICAgIH1cbiAgICA+IC5lcnJvci1jb250YWluZXIge1xuICAgICAgcGFkZGluZzogMTJweDtcbiAgICAgIG1hcmdpbjogMCAwIDE2cHg7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDgsIDUxLCA1MSk7XG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgfVxuICAgID4gZm9ybSB7XG4gICAgICA+IC5jdGEtY29udGFpbmVyIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMzZweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNjBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICA+IGJ1dHRvblt0eXBlPVwic3VibWl0XCJdIHtcbiAgICAgICAgICBoZWlnaHQ6IDUycHg7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgICAgICAgfVxuICAgICAgICA+IGRpdiB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLmZvcmdvdC1wYXNzd29yZCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDAuODVyZW07XG4gICAgICAgID4gYSB7XG4gICAgICAgICAgY29sb3I6ICMxMjEyMTI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmxvZ2luLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogNDhweCAxNnB4IDI0MHB4O1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICNmNWY1Zjg7XG4gICAgLmZvcm0tY29udGFpbmVyIHtcbiAgICAgIHBhZGRpbmc6IDM2cHg7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIH1cbiAgfVxufVxuXG4uaW5wdXQtY29udGFpbmVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgPiBsYWJlbCB7XG4gICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLWJvdHRvbTogNnB4O1xuICB9XG4gID4gaW5wdXQge1xuICAgIHBhZGRpbmc6IDEwcHggMTJweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'client';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "W6KJ":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/api.service */ "H+bZ");
/* harmony import */ var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/token-storage.service */ "Zr0/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "RwU8");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/alert */ "Wfee");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/input */ "PTRe");











const _c0 = function () { return { marginBottom: "12px" }; };
function ProfileComponent_nz_alert_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-alert", 7);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", ctx_r0.alertType)("nzMessage", ctx_r0.alertMessage)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
} }
function ProfileComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function ProfileComponent_div_6_Template_input_valueChange_3_listener($event) { const field_r2 = ctx.$implicit; return field_r2.value = $event; })("ngModelChange", function ProfileComponent_div_6_Template_input_ngModelChange_3_listener($event) { const field_r2 = ctx.$implicit; return field_r2.value = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const field_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](field_r2.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", field_r2.key)("type", field_r2.type)("value", field_r2.value)("ngModel", field_r2.value);
} }
class ProfileComponent {
    constructor(_api, _token, _router) {
        this._api = _api;
        this._token = _token;
        this._router = _router;
        this.user = [
            {
                key: 'fullName',
                label: 'Full name',
                value: '',
                type: 'text',
            },
            {
                key: 'email',
                label: 'Email address',
                value: '',
                type: 'email',
            },
            {
                key: 'password',
                label: 'Password',
                value: '',
                type: 'password',
            },
            {
                key: 'confirmPassword',
                label: 'Confirm password',
                value: '',
                type: 'password',
            },
        ];
        this.userId = null;
        this.alertMessage = '';
        this.alertType = '';
        this.alertVisible = false;
        this.loading = false;
    }
    // Update user fields with current details
    ngOnInit() {
        const { user_id, fname, email } = this._token.getUser();
        this.userId = user_id;
        this.user[0].value = fname;
        this.user[1].value = email;
        console.log(this.user);
    }
    canUpdate() {
        return this.user.filter((field) => field.value.length > 0).length !== 4
            ? true
            : false;
    }
    // Submit data to be updated
    onSubmit() {
        this.alertVisible = false;
        if (this.user[2].value !== this.user[3].value) {
            this.alertType = 'error';
            this.alertMessage = 'Passwords do not match';
            this.alertVisible = true;
        }
        else {
            this.loading = true;
            this._api
                .putTypeRequest(`users/${this.userId}`, {
                fullName: this.user[0].value,
                email: this.user[1].value,
                password: this.user[2].value,
            })
                .subscribe((res) => {
                console.log(res);
                this.alertMessage = res.message;
                this.alertType = 'success';
                this.alertVisible = true;
                this.loading = false;
                const oldDetails = this._token.getUser();
                this._token.setUser(Object.assign(Object.assign({}, oldDetails), { fname: this.user[0].value, email: this.user[1].value }));
                this.user[2].value = '';
                this.user[3].value = '';
                // window.location.reload();
            }, (err) => {
                console.log(err);
                this.alertMessage = err.error.message;
                this.alertVisible = true;
                this.alertType = 'error';
                this.loading = false;
            });
        }
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 10, vars: 4, consts: [[1, "profile-container"], [1, "form-container"], ["nzShowIcon", "", 3, "nzType", "nzMessage", "ngStyle", 4, "ngIf"], [3, "ngSubmit"], ["class", "input-container", 4, "ngFor", "ngForOf"], [1, "cta-container"], ["nz-button", "", "type", "submit", 3, "nzLoading", "disabled"], ["nzShowIcon", "", 3, "nzType", "nzMessage", "ngStyle"], [1, "input-container"], ["for", "field.key"], ["nz-input", "", 3, "name", "type", "value", "ngModel", "valueChange", "ngModelChange"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProfileComponent_nz_alert_4_Template, 1, 4, "nz-alert", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ProfileComponent_Template_form_ngSubmit_5_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ProfileComponent_div_6_Template, 4, 5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Update ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.alertVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLoading", ctx.loading)("disabled", ctx.canUpdate());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_6__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_7__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__["ɵNzTransitionPatchDirective"], ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_9__["NzAlertComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_10__["NzInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]], styles: [".profile-container[_ngcontent-%COMP%] {\n  padding: 24px 16px;\n}\n.profile-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%] {\n  max-width: 475px;\n  padding: 24px 16px;\n  margin: 0 auto;\n}\n.profile-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]    > h2[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 24px;\n}\n.profile-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]    > form[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.profile-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]    > form[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  display: inline-block;\n  margin-bottom: 6px;\n}\n.profile-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]    > form[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  width: 100%;\n}\n.profile-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]    > form[_ngcontent-%COMP%]   .cta-container[_ngcontent-%COMP%] {\n  margin-top: 24px;\n}\n.profile-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]    > form[_ngcontent-%COMP%]   .cta-container[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n  height: 52px;\n  width: 100%;\n}\n@media screen and (min-width: 768px) {\n  .profile-container[_ngcontent-%COMP%] {\n    padding: 48px 16px 240px;\n  }\n  .profile-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%] {\n    padding: 36px;\n    border: 1px solid #ccc;\n    border-radius: 12px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQUNGO0FBQUU7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUVKO0FBREk7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FBR047QUFBTTtFQUNFLG1CQUFBO0FBRVI7QUFEUTtFQUNFLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQUdWO0FBRFE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUFHVjtBQUFNO0VBQ0UsZ0JBQUE7QUFFUjtBQURRO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUFHVjtBQUlBO0VBQ0U7SUFDRSx3QkFBQTtFQURGO0VBRUU7SUFDRSxhQUFBO0lBQ0Esc0JBQUE7SUFDQSxtQkFBQTtFQUFKO0FBQ0YiLCJmaWxlIjoicHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9maWxlLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDI0cHggMTZweDtcbiAgLmZvcm0tY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDQ3NXB4O1xuICAgIHBhZGRpbmc6IDI0cHggMTZweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICA+IGgyIHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gICAgfVxuICAgID4gZm9ybSB7XG4gICAgICAuaW5wdXQtY29udGFpbmVyIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgICAgICAgPiBsYWJlbCB7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNnB4O1xuICAgICAgICB9XG4gICAgICAgID4gaW5wdXQge1xuICAgICAgICAgIHBhZGRpbmc6IDEwcHggMTJweDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLmN0YS1jb250YWluZXIge1xuICAgICAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgICAgICA+IGJ1dHRvbiB7XG4gICAgICAgICAgaGVpZ2h0OiA1MnB4O1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5wcm9maWxlLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogNDhweCAxNnB4IDI0MHB4O1xuICAgIC5mb3JtLWNvbnRhaW5lciB7XG4gICAgICBwYWRkaW5nOiAzNnB4O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgICAvLyAgID4gaDIge1xuICAgICAgLy8gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIC8vICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ "Yj9t":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AuthModule {
}
AuthModule.ɵfac = function AuthModule_Factory(t) { return new (t || AuthModule)(); };
AuthModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AuthModule });
AuthModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AuthModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]] }); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-responsive-carousel */ "0L5U");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _auth_components_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth/components/login/login.component */ "OuDC");
/* harmony import */ var _auth_components_register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth/components/register/register.component */ "ysMu");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cart/cart.component */ "c2A7");
/* harmony import */ var _order_history_order_history_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./order-history/order-history.component */ "d759");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./product/product.component */ "LvIC");
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./checkout/checkout.component */ "IiZn");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./profile/profile.component */ "W6KJ");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");
/* harmony import */ var _product_card_product_card_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./product-card/product-card.component */ "8R/P");
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./auth/auth.module */ "Yj9t");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_interceptor_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/interceptor.service */ "KRBT");
/* harmony import */ var _guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./guards/auth-guard.service */ "Hs9l");
/* harmony import */ var ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/i18n */ "Rm4T");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common/locales/en */ "tAZD");
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ "Nqz0");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ng-zorro-antd/input */ "PTRe");
/* harmony import */ var ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ng-zorro-antd/alert */ "Wfee");
/* harmony import */ var ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ng-zorro-antd/input-number */ "z4wI");
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! swiper/angular */ "UMfn");
/* harmony import */ var ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ng-zorro-antd/spin */ "qAZ0");
/* harmony import */ var ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ng-zorro-antd/notification */ "bNXi");
/* harmony import */ var ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ng-zorro-antd/progress */ "W9fG");
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ng-zorro-antd/table */ "rMZv");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/core */ "fXoL");





































Object(_angular_common__WEBPACK_IMPORTED_MODULE_21__["registerLocaleData"])(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_22___default.a);
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_35__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_35__["ɵɵdefineInjector"]({ providers: [
        _services_interceptor_service__WEBPACK_IMPORTED_MODULE_18__["authInterceptorProviders"],
        _guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_19__["AuthGuardService"],
        { provide: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_20__["NZ_I18N"], useValue: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_20__["en_US"] },
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_3__["IvyCarouselModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _auth_auth_module__WEBPACK_IMPORTED_MODULE_16__["AuthModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_23__["BrowserAnimationsModule"],
            ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_24__["NzButtonModule"],
            ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_25__["NzDropDownModule"],
            ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_26__["NzIconModule"],
            ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_27__["NzInputModule"],
            ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_28__["NzAlertModule"],
            ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_29__["NzInputNumberModule"],
            swiper_angular__WEBPACK_IMPORTED_MODULE_30__["SwiperModule"],
            ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_31__["NzSpinModule"],
            ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_32__["NzNotificationModule"],
            ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_33__["NzProgressModule"],
            ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_34__["NzTableModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_35__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
        _auth_components_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
        _auth_components_register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"],
        _cart_cart_component__WEBPACK_IMPORTED_MODULE_8__["CartComponent"],
        _order_history_order_history_component__WEBPACK_IMPORTED_MODULE_9__["OrderHistoryComponent"],
        _product_product_component__WEBPACK_IMPORTED_MODULE_10__["ProductComponent"],
        _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_11__["CheckoutComponent"],
        _profile_profile_component__WEBPACK_IMPORTED_MODULE_12__["ProfileComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_13__["HeaderComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"],
        _product_card_product_card_component__WEBPACK_IMPORTED_MODULE_15__["ProductCardComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_3__["IvyCarouselModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _auth_auth_module__WEBPACK_IMPORTED_MODULE_16__["AuthModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_23__["BrowserAnimationsModule"],
        ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_24__["NzButtonModule"],
        ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_25__["NzDropDownModule"],
        ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_26__["NzIconModule"],
        ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_27__["NzInputModule"],
        ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_28__["NzAlertModule"],
        ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_29__["NzInputNumberModule"],
        swiper_angular__WEBPACK_IMPORTED_MODULE_30__["SwiperModule"],
        ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_31__["NzSpinModule"],
        ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_32__["NzNotificationModule"],
        ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_33__["NzProgressModule"],
        ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_34__["NzTableModule"]] }); })();


/***/ }),

/***/ "Zr0/":
/*!***************************************************!*\
  !*** ./src/app/services/token-storage.service.ts ***!
  \***************************************************/
/*! exports provided: TokenStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenStorageService", function() { return TokenStorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class TokenStorageService {
    constructor() {
        this.TOKEN_KEY = 'auth-token';
        this.USER_KEY = 'auth-user';
    }
    getToken() {
        return sessionStorage.getItem(this.TOKEN_KEY);
    }
    setToken(token) {
        sessionStorage.removeItem(this.TOKEN_KEY);
        sessionStorage.setItem(this.TOKEN_KEY, token);
    }
    getUser() {
        return JSON.parse(sessionStorage.getItem(this.USER_KEY));
    }
    setUser(user) {
        sessionStorage.removeItem(this.USER_KEY);
        sessionStorage.setItem(this.USER_KEY, JSON.stringify(user));
    }
    clearStorage() {
        sessionStorage.clear();
    }
}
TokenStorageService.ɵfac = function TokenStorageService_Factory(t) { return new (t || TokenStorageService)(); };
TokenStorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TokenStorageService, factory: TokenStorageService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "c14U":
/*!******************************************!*\
  !*** ./src/app/services/cart.service.ts ***!
  \******************************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/notification */ "bNXi");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api.service */ "H+bZ");




class CartService {
    constructor(_notification, _api) {
        this._notification = _notification;
        this._api = _api;
        this.cartData = {
            products: [],
            total: 0,
        };
        this.cartDataObs$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](this.cartData);
        let localCartData = JSON.parse(localStorage.getItem('cart'));
        if (localCartData)
            this.cartData = localCartData;
        this.cartDataObs$.next(this.cartData);
    }
    submitCheckout(userId, cart) {
        return this._api.postTypeRequest('orders/create', {
            userId: userId,
            cart: cart,
        });
    }
    addProduct(params) {
        const { id, price, quantity, image, title, maxQuantity } = params;
        const product = { id, price, quantity, image, title, maxQuantity };
        if (!this.isProductInCart(id)) {
            if (quantity)
                this.cartData.products.push(product);
            else
                this.cartData.products.push(Object.assign(Object.assign({}, product), { quantity: 1 }));
        }
        else {
            // copy array, find item index and update
            let updatedProducts = [...this.cartData.products];
            let productIndex = updatedProducts.findIndex((prod) => prod.id == id);
            let product = updatedProducts[productIndex];
            // if no quantity, increment
            if (quantity) {
                updatedProducts[productIndex] = Object.assign(Object.assign({}, product), { quantity: quantity });
            }
            else {
                updatedProducts[productIndex] = Object.assign(Object.assign({}, product), { quantity: product.quantity + 1 });
            }
            console.log(updatedProducts);
            this.cartData.products = updatedProducts;
        }
        this.cartData.total = this.getCartTotal();
        this._notification.create('success', 'Product added to cart', `${title} was successfully added to the cart`);
        this.cartDataObs$.next(Object.assign({}, this.cartData));
        localStorage.setItem('cart', JSON.stringify(this.cartData));
    }
    updateCart(id, quantity) {
        // copy array, find item index and update
        let updatedProducts = [...this.cartData.products];
        let productIndex = updatedProducts.findIndex((prod) => prod.id == id);
        updatedProducts[productIndex] = Object.assign(Object.assign({}, updatedProducts[productIndex]), { quantity: quantity });
        this.cartData.products = updatedProducts;
        this.cartData.total = this.getCartTotal();
        this.cartDataObs$.next(Object.assign({}, this.cartData));
        console.log(this.cartData.products);
        localStorage.setItem('cart', JSON.stringify(this.cartData));
    }
    removeProduct(id) {
        let updatedProducts = this.cartData.products.filter((prod) => prod.id !== id);
        this.cartData.products = updatedProducts;
        this.cartData.total = this.getCartTotal();
        this.cartDataObs$.next(Object.assign({}, this.cartData));
        localStorage.setItem('cart', JSON.stringify(this.cartData));
        this._notification.create('success', 'Removed successfully', 'The selected item was removed from the cart successfully');
    }
    clearCart() {
        this.cartData = {
            products: [],
            total: 0,
        };
        this.cartDataObs$.next(Object.assign({}, this.cartData));
        localStorage.setItem('cart', JSON.stringify(this.cartData));
    }
    getCartTotal() {
        let totalSum = 0;
        this.cartData.products.forEach((prod) => (totalSum += prod.price * prod.quantity));
        return totalSum;
    }
    isProductInCart(id) {
        return this.cartData.products.findIndex((prod) => prod.id === id) !== -1;
    }
}
CartService.ɵfac = function CartService_Factory(t) { return new (t || CartService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_2__["NzNotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"])); };
CartService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CartService, factory: CartService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "c2A7":
/*!****************************************!*\
  !*** ./src/app/cart/cart.component.ts ***!
  \****************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/cart.service */ "c14U");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "RwU8");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/input-number */ "z4wI");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");









function CartComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Your cart is empty. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { border: a0 }; };
function CartComponent_div_2_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_div_2_div_4_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const product_r3 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.removeCartItem(product_r3.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " X ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "nz-input-number", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CartComponent_div_2_div_4_Template_nz_input_number_ngModelChange_12_listener($event) { const product_r3 = ctx.$implicit; return product_r3.quantity = $event; })("ngModelChange", function CartComponent_div_2_div_4_Template_nz_input_number_ngModelChange_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const product_r3 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.updateCart(product_r3.id, product_r3.quantity); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, i_r4 === ctx_r2.cartData.products.length - 1 && "none"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", product_r3.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 8, product_r3.price, "USD"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", product_r3.quantity)("nzMin", product_r3.maxQuantity > 0 ? 1 : 0)("nzMax", product_r3.maxQuantity > 0 ? product_r3.maxQuantity : 0)("nzStep", 1);
} }
function CartComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CartComponent_div_2_div_4_Template, 13, 13, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.cartData.products);
} }
class CartComponent {
    constructor(_cart) {
        this._cart = _cart;
        this._cart.cartDataObs$.subscribe((cartData) => {
            this.cartData = cartData;
            console.log(cartData);
        });
    }
    ngOnInit() { }
    updateCart(id, quantity) {
        console.log({ id, quantity });
        this._cart.updateCart(id, quantity);
    }
    removeCartItem(id) {
        this._cart.removeProduct(id);
    }
}
CartComponent.ɵfac = function CartComponent_Factory(t) { return new (t || CartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"])); };
CartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CartComponent, selectors: [["app-cart"]], decls: 21, vars: 8, consts: [[1, "cart-container"], ["class", "cart-container__empty", 4, "ngIf"], ["class", "cart-container__list", 4, "ngIf"], [1, "cart-container__total"], [1, "price"], [1, "cta"], ["nz-button", "", "nzType", "primary", "routerLink", "/checkout", 3, "disabled"], ["nz-button", "", "routerLink", "/"], [1, "cart-container__empty"], [1, "cart-container__list"], [1, "list-header"], ["class", "list-item", 3, "ngStyle", 4, "ngFor", "ngForOf"], [1, "list-item", 3, "ngStyle"], [1, "list-item__remove", 3, "click"], [1, "list-item__image"], ["alt", "", 3, "src"], [1, "list-item__details"], [1, "title"], [3, "ngModel", "nzMin", "nzMax", "nzStep", "ngModelChange"]], template: function CartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CartComponent_div_1_Template, 2, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CartComponent_div_2_Template, 5, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Total amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Total items");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Checkout ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Back to shopping");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cartData.products.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cartData.products.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 5, ctx.cartData.total, "USD"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.cartData.products.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.cartData.products.length === 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_3__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_4__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__["ɵNzTransitionPatchDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_7__["NzInputNumberComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CurrencyPipe"]], styles: [".cart-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.cart-container__empty[_ngcontent-%COMP%] {\n  margin: 24px 16px 0;\n  padding: 16px 24px;\n  text-align: center;\n  border: 1px solid #ccc;\n  border-radius: 3px;\n  font-size: 1rem;\n  font-weight: 500;\n}\n.cart-container__list[_ngcontent-%COMP%] {\n  max-height: 60vh;\n  flex-grow: 1;\n  padding: 16px;\n  overflow-y: auto;\n  border-bottom: 1px solid #ccc;\n}\n.cart-container__list[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 24px;\n  padding-bottom: 24px;\n  border-bottom: 1px solid #ccc;\n  position: relative;\n}\n.cart-container__list[_ngcontent-%COMP%]   .list-item__remove[_ngcontent-%COMP%] {\n  border: 1px solid #ccc;\n  height: 22px;\n  width: 22px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  position: absolute;\n  right: 8px;\n  top: 8px;\n  z-index: 1;\n}\n.cart-container__list[_ngcontent-%COMP%]   .list-item__remove[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n}\n.cart-container__list[_ngcontent-%COMP%]   .list-item__image[_ngcontent-%COMP%] {\n  margin-right: 16px;\n  min-height: 100px;\n  min-width: 100px;\n  max-height: 100px;\n  max-width: 100px;\n}\n.cart-container__list[_ngcontent-%COMP%]   .list-item__image[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.cart-container__list[_ngcontent-%COMP%]   .list-item__details[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  position: relative;\n  padding: 22px 0;\n  padding-right: 18px;\n}\n.cart-container__list[_ngcontent-%COMP%]   .list-item__details[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n  font-size: 1.125rem;\n  font-weight: 500;\n}\n.cart-container__list[_ngcontent-%COMP%]   .list-item__details[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n  font-size: 1rem;\n}\n.cart-container__list[_ngcontent-%COMP%]   .list-item__details[_ngcontent-%COMP%]   .cta[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  bottom: -6px;\n}\n.cart-container__total[_ngcontent-%COMP%] {\n  padding: 24px 16px 16px;\n  display: flex;\n  flex-direction: column;\n}\n.cart-container__total[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 16px;\n}\n.cart-container__total[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  display: flex;\n  align-items: center;\n}\n.cart-container__total[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]    > h3[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  flex-grow: 1;\n}\n.cart-container__total[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:nth-child(2)    > h3[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #787878;\n  font-weight: 400;\n}\n.cart-container__total[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:nth-child(2)    > h2[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  color: #787878;\n  font-weight: 400;\n}\n.cart-container__total[_ngcontent-%COMP%]   .cta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.cart-container__total[_ngcontent-%COMP%]   .cta[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n  height: 48px;\n  width: 100%;\n  margin-bottom: 12px;\n}\n@media screen and (min-width: 1200px) {\n  .cart-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    max-width: 1024px;\n    margin: 48px auto 0;\n    border: 1px solid #ccc;\n    border-radius: 3px;\n  }\n  .cart-container__empty[_ngcontent-%COMP%] {\n    margin: 0;\n    padding-top: 40px;\n    flex-grow: 1;\n    border: none;\n  }\n  .cart-container__list[_ngcontent-%COMP%] {\n    border: none;\n  }\n  .cart-container__total[_ngcontent-%COMP%] {\n    width: 350px;\n    padding: 0 16px;\n    display: flex;\n    justify-content: flex-start;\n    align-items: flex-start;\n    flex-direction: column;\n  }\n  .cart-container__total[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n    padding: 16px 0;\n  }\n  .cart-container__total[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]    > h3[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n  }\n  .cart-container__total[_ngcontent-%COMP%]   .cta[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 0px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n  .cart-container__total[_ngcontent-%COMP%]   .cta[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n    height: 48px;\n    width: 100%;\n    margin-bottom: 12px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NhcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUFDRjtBQUFFO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUVKO0FBQUU7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtBQUVKO0FBREk7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtBQUdOO0FBRk07RUFDRSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUlBLFVBQUE7QUFDUjtBQUpRO0VBQ0Usa0JBQUE7QUFNVjtBQUZNO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUlSO0FBSFE7RUFDRSxXQUFBO0FBS1Y7QUFGTTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQUlSO0FBSFE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFLVjtBQUhRO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0FBS1Y7QUFIUTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7QUFLVjtBQUFFO0VBQ0UsdUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFFSjtBQURJO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFHTjtBQUZNO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUlSO0FBSFE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7QUFLVjtBQURRO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUdWO0FBRFE7RUFDRSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUdWO0FBQ0k7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUNOO0FBQU07RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBRVI7QUFJQTtFQUNFO0lBQ0UsYUFBQTtJQUNBLG1CQUFBO0lBQ0EsaUJBQUE7SUFDQSxtQkFBQTtJQUNBLHNCQUFBO0lBQ0Esa0JBQUE7RUFERjtFQUVFO0lBQ0UsU0FBQTtJQUNBLGlCQUFBO0lBQ0EsWUFBQTtJQUNBLFlBQUE7RUFBSjtFQUVFO0lBQ0UsWUFBQTtFQUFKO0VBRUU7SUFDRSxZQUFBO0lBQ0EsZUFBQTtJQUNBLGFBQUE7SUFDQSwyQkFBQTtJQUNBLHVCQUFBO0lBQ0Esc0JBQUE7RUFBSjtFQUNJO0lBQ0UsV0FBQTtJQUNBLGFBQUE7SUFDQSxlQUFBO0VBQ047RUFBTTtJQUNFLGtCQUFBO0VBRVI7RUFDSTtJQUNFLFdBQUE7SUFDQSxZQUFBO0lBQ0EsYUFBQTtJQUNBLHNCQUFBO0lBQ0EsbUJBQUE7RUFDTjtFQUFNO0lBQ0UsWUFBQTtJQUNBLFdBQUE7SUFDQSxtQkFBQTtFQUVSO0FBQ0YiLCJmaWxlIjoiY2FydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJ0LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICZfX2VtcHR5IHtcbiAgICBtYXJnaW46IDI0cHggMTZweCAwO1xuICAgIHBhZGRpbmc6IDE2cHggMjRweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH1cbiAgJl9fbGlzdCB7XG4gICAgbWF4LWhlaWdodDogNjB2aDtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgcGFkZGluZzogMTZweDtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICAgIC5saXN0LWl0ZW0ge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICAgICAgcGFkZGluZy1ib3R0b206IDI0cHg7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICZfX3JlbW92ZSB7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgIGhlaWdodDogMjJweDtcbiAgICAgICAgd2lkdGg6IDIycHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IDhweDtcbiAgICAgICAgdG9wOiA4cHg7XG4gICAgICAgID4gaSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgICAgICB9XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgICB9XG4gICAgICAmX19pbWFnZSB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcbiAgICAgICAgbWluLWhlaWdodDogMTAwcHg7XG4gICAgICAgIG1pbi13aWR0aDogMTAwcHg7XG4gICAgICAgIG1heC1oZWlnaHQ6IDEwMHB4O1xuICAgICAgICBtYXgtd2lkdGg6IDEwMHB4O1xuICAgICAgICA+IGltZyB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgICZfX2RldGFpbHMge1xuICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgcGFkZGluZzogMjJweCAwO1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxOHB4O1xuICAgICAgICAudGl0bGUge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICAgICAgICBmb250LXNpemU6IDEuMTI1cmVtO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIH1cbiAgICAgICAgLnByaWNlIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgfVxuICAgICAgICAuY3RhIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgYm90dG9tOiAtNnB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gICZfX3RvdGFsIHtcbiAgICBwYWRkaW5nOiAyNHB4IDE2cHggMTZweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgLnByaWNlIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICAgID4gc3BhbiB7XG4gICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgPiBoMyB7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgPiBzcGFuOm50aC1jaGlsZCgyKSB7XG4gICAgICAgID4gaDMge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICBjb2xvcjogIzc4Nzg3ODtcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICB9XG4gICAgICAgID4gaDIge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XG4gICAgICAgICAgY29sb3I6ICM3ODc4Nzg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAuY3RhIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgID4gYnV0dG9uIHtcbiAgICAgICAgaGVpZ2h0OiA0OHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIC5jYXJ0LWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIG1heC13aWR0aDogMTAyNHB4O1xuICAgIG1hcmdpbjogNDhweCBhdXRvIDA7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgJl9fZW1wdHkge1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgcGFkZGluZy10b3A6IDQwcHg7XG4gICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgfVxuICAgICZfX2xpc3Qge1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgIH1cbiAgICAmX190b3RhbCB7XG4gICAgICB3aWR0aDogMzUwcHg7XG4gICAgICBwYWRkaW5nOiAwIDE2cHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgLnByaWNlIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHBhZGRpbmc6IDE2cHggMDtcbiAgICAgICAgPiBoMyB7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAuY3RhIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgPiBidXR0b24ge1xuICAgICAgICAgIGhlaWdodDogNDhweDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ "d759":
/*!**********************************************************!*\
  !*** ./src/app/order-history/order-history.component.ts ***!
  \**********************************************************/
/*! exports provided: OrderHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderHistoryComponent", function() { return OrderHistoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/api.service */ "H+bZ");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/product.service */ "Gdn9");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/table */ "rMZv");






function OrderHistoryComponent_nz_table_4_tr_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.order_id);
} }
function OrderHistoryComponent_nz_table_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-table", 2, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "OrderID");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, OrderHistoryComponent_nz_table_4_tr_11_Template, 7, 3, "tr", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzData", ctx_r0.orders);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _r1.data);
} }
class OrderHistoryComponent {
    constructor(_api, _auth, _product) {
        this._api = _api;
        this._auth = _auth;
        this._product = _product;
        this.listOfData = [
            {
                key: '1',
                name: 'John Brown',
                age: 32,
                address: 'New York No. 1 Lake Park',
            },
            {
                key: '2',
                name: 'Jim Green',
                age: 42,
                address: 'London No. 1 Lake Park',
            },
            {
                key: '3',
                name: 'Joe Black',
                age: 32,
                address: 'Sidney No. 1 Lake Park',
            },
        ];
        this.orders = [];
        this.error = '';
        this.user = this._auth.getUser();
    }
    ngOnInit() {
        this._api.getTypeRequest(`orders/?userId=${this.user.user_id}`).subscribe((res) => {
            console.log(res);
            res.data.forEach((item) => {
                this._product
                    .getSingleProduct(item.product_id)
                    .subscribe((product) => {
                    console.log(product);
                    this.orders.push(Object.assign(Object.assign({}, product), item));
                });
            });
            // let uniqueProductsArray = Array.from(
            //   new Set(res.data.map((p) => p.product_id))
            // );
        }, (err) => {
            this.error = err.error.message;
        });
    }
}
OrderHistoryComponent.ɵfac = function OrderHistoryComponent_Factory(t) { return new (t || OrderHistoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"])); };
OrderHistoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OrderHistoryComponent, selectors: [["app-order-history"]], decls: 5, vars: 2, consts: [[1, "order-history-container"], [3, "nzData", 4, "ngIf"], [3, "nzData"], ["basicTable", ""], [4, "ngFor", "ngForOf"]], template: function OrderHistoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Order History");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, OrderHistoryComponent_nz_table_4_Template, 12, 2, "nz-table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.error, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.orders.length > 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_5__["NzTableComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_5__["NzTheadComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_5__["NzTrDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_5__["NzTableCellDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_5__["NzThMeasureDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_5__["NzTbodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: [".order-history-container[_ngcontent-%COMP%] {\n  padding: 24px 16px;\n  max-width: 1024px;\n  margin: 0 auto;\n}\n.order-history-container[_ngcontent-%COMP%]    > h2[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.order-history-container[_ngcontent-%COMP%]   .order-list[_ngcontent-%COMP%]   .order-container[_ngcontent-%COMP%]   .order-image[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n@media screen and (min-width: 1200px) {\n  .order-history-container[_ngcontent-%COMP%] {\n    margin-top: 48px;\n    padding: 24px;\n    border: 1px solid #ccc;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL29yZGVyLWhpc3RvcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUNGO0FBQUU7RUFDRSxtQkFBQTtBQUVKO0FBR1E7RUFDRSxXQUFBO0FBRFY7QUFZQTtFQUNFO0lBQ0UsZ0JBQUE7SUFDQSxhQUFBO0lBQ0Esc0JBQUE7RUFWRjtBQUNGIiwiZmlsZSI6Im9yZGVyLWhpc3RvcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3JkZXItaGlzdG9yeS1jb250YWluZXIge1xuICBwYWRkaW5nOiAyNHB4IDE2cHg7XG4gIG1heC13aWR0aDogMTAyNHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgPiBoMiB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgfVxuICAub3JkZXItbGlzdCB7XG4gICAgLm9yZGVyLWNvbnRhaW5lciB7XG4gICAgICAub3JkZXItaW1hZ2Uge1xuICAgICAgICA+IGltZyB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5vcmRlci10aXRsZSB7XG4gICAgICB9XG4gICAgICAub3JkZXItdG90YWwge1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgLm9yZGVyLWhpc3RvcnktY29udGFpbmVyIHtcbiAgICBtYXJnaW4tdG9wOiA0OHB4O1xuICAgIHBhZGRpbmc6IDI0cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ "fECr":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/token-storage.service */ "Zr0/");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/cart.service */ "c14U");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ "Nqz0");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "RwU8");











function HeaderComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Your cart is empty. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "border-bottom": a0 }; };
function HeaderComponent_div_17_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_17_div_2_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const product_r7 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r9.removeProductFromCart(product_r7.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " X ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, i_r8 !== ctx_r6.cartData.products.length - 1 && "1px solid #ccc"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", product_r7.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r7.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", product_r7.quantity, " x ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](13, 5, product_r7.price, "USD"));
} }
const _c1 = function () { return { borderLeft: "none", borderRight: "none", borderBottom: "none" }; };
function HeaderComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HeaderComponent_div_17_div_2_Template, 14, 10, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_17_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.toggleDropdown(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " View cart ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_17_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.toggleDropdown(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Checkout ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.cartData.products);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.cartData.products.length, " Item(s) selected ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Total: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 5, ctx_r2.cartData.total, "USD"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c1));
} }
function HeaderComponent_button_34_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_button_34_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.toggleMenu(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Sign in ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_button_35_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_button_35_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.toggleMenu(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Sign up ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_button_36_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_button_36_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.logout() && ctx_r18.toggleMenu(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Sign out ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c2 = function () { return { "font-size": "1.25rem", "padding-top": "6px" }; };
const _c3 = function () { return { fontSize: "24px", paddingTop: "3px" }; };
class HeaderComponent {
    constructor(_token, _auth, _cart) {
        this._token = _token;
        this._auth = _auth;
        this._cart = _cart;
        this.isMenuOpen = false;
        this.isMobile = false;
        this.isLoggedIn = false;
        this.dropdownVisible = false;
        this.getScreenSize();
        this._auth.user.subscribe((user) => {
            if (user)
                this.isLoggedIn = true;
            else
                this.isLoggedIn = false;
        });
        this._cart.cartDataObs$.subscribe((cartData) => {
            this.cartData = cartData;
        });
    }
    getScreenSize(event) {
        this.screenHeight = window.innerHeight;
        this.screenWidth = window.innerWidth;
        if (this.screenWidth > 768)
            this.isMobile = false;
        else
            this.isMobile = true;
    }
    ngOnInit() {
        if (this._token.getUser())
            this.isLoggedIn = true;
        else
            this.isLoggedIn = false;
    }
    toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
    }
    toggleDropdown() {
        this.dropdownVisible = !this.dropdownVisible;
    }
    removeProductFromCart(id) {
        this._cart.removeProduct(id);
    }
    logout() {
        this._auth.logout();
        this.isMenuOpen = false;
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_token_storage_service__WEBPACK_IMPORTED_MODULE_1__["TokenStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], hostBindings: function HeaderComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function HeaderComponent_resize_HostBindingHandler($event) { return ctx.getScreenSize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 38, vars: 14, consts: [[1, "header-container"], [1, "header-container__left"], ["nz-button", "", "nzType", "text", "size", "large", "nzShape", "circle", "nzSize", "large", 3, "click"], ["nz-icon", "", "nzType", "menu", 3, "ngStyle"], [1, "header-container__middle"], ["routerLink", "/"], [1, "header-container__right"], [1, "cart-counter"], ["nz-button", "", "nz-dropdown", "", "nzType", "text", "nzTrigger", "click", "nzPlacement", "right", "nzShape", "circle", "nzSize", "large", 3, "nzDropdownMenu", "nzVisible", "nzVisibleChange"], ["nz-icon", "", "nzType", "shopping-cart", 3, "ngStyle"], ["menu", "nzDropdownMenu"], [1, "cart-dropdown"], ["class", "cart-dropdown__empty", 4, "ngIf"], ["class", "cart-dropdown__content", 4, "ngIf"], [3, "className"], ["nz-icon", "", "nzType", "close", "nzTheme", "outline", 3, "click"], [1, "side-menu__content"], ["routerLink", "/", 3, "click"], ["routerLink", "/cart", 3, "click"], ["routerLink", "/profile", 3, "click"], ["routerLink", "/order-history", 3, "click"], [1, "\uD83C\uDF51"], ["nz-button", "", "routerLink", "/login", 3, "click", 4, "ngIf"], ["nz-button", "", "routerLink", "/register", 3, "click", 4, "ngIf"], ["nz-button", "", 3, "click", 4, "ngIf"], [3, "className", "click"], [1, "cart-dropdown__empty"], [1, "cart-dropdown__content"], [1, "product-list"], ["class", "product-list__item", 3, "ngStyle", 4, "ngFor", "ngForOf"], [1, "cart-info"], [1, "selected-amount"], [1, "total-price"], [1, "cart-cta"], ["nz-button", "", "nzSize", "large", "routerLink", "/cart", 3, "ngStyle", "click"], ["nz-button", "", "nzType", "primary", "nzSize", "large", "routerLink", "/checkout", 3, "ngStyle", "click"], [1, "product-list__item", 3, "ngStyle"], [1, "product-item"], [1, "product-item__remove", 3, "click"], [1, "product-item__image"], ["alt", "", 3, "src"], [1, "product-item__description"], [1, "product-name"], [1, "product-amount"], ["nz-button", "", "routerLink", "/login", 3, "click"], ["nz-button", "", "routerLink", "/register", 3, "click"], ["nz-button", "", 3, "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_2_listener() { return ctx.toggleMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Eccom");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzVisibleChange", function HeaderComponent_Template_button_nzVisibleChange_11_listener() { return ctx.toggleDropdown(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "nz-dropdown-menu", null, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, HeaderComponent_div_16_Template, 2, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, HeaderComponent_div_17_Template, 14, 10, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_i_click_19_listener() { return ctx.toggleMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h2", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_h2_click_21_listener() { return ctx.toggleMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Eccom");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_li_click_25_listener() { return ctx.toggleMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_li_click_27_listener() { return ctx.toggleMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_li_click_29_listener() { return ctx.toggleMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_li_click_31_listener() { return ctx.toggleMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Order History ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, HeaderComponent_button_34_Template, 2, 0, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, HeaderComponent_button_35_Template, 2, 0, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, HeaderComponent_button_36_Template, 2, 0, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_37_listener() { return ctx.toggleMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.cartData.products.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzDropdownMenu", _r0)("nzVisible", ctx.dropdownVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cartData.products.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cartData.products.length !== 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("className", ctx.isMenuOpen ? "side-menu show" : "side-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("className", ctx.isMenuOpen ? "darken-background enable" : "darken-background");
    } }, directives: [ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__["NzButtonComponent"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__["NzIconDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgStyle"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLink"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_9__["NzDropdownButtonDirective"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_9__["NzDropDownDirective"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_9__["NzDropdownMenuComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_10__["NzWaveDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["CurrencyPipe"]], styles: ["@charset \"UTF-8\";\n.header-container[_ngcontent-%COMP%] {\n  height: 60px;\n  padding: 0 16px;\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid #ccc;\n}\n.header-container[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.header-container__middle[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  text-align: center;\n}\n.header-container__right[_ngcontent-%COMP%] {\n  position: relative;\n}\n.header-container__right[_ngcontent-%COMP%]   .cart-counter[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: red;\n  width: 17px;\n  height: 17px;\n  font-size: 11px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50px;\n  position: absolute;\n  right: 0px;\n  top: 12px;\n  z-index: 2;\n}\n@media screen and (min-width: 768px) {\n  .header-container[_ngcontent-%COMP%] {\n    padding: 0 24px;\n  }\n}\n.cart-dropdown[_ngcontent-%COMP%] {\n  max-width: 280px;\n  min-width: 280px;\n  background-color: #fff;\n  border: 1px solid #ccc;\n}\n.cart-dropdown__empty[_ngcontent-%COMP%] {\n  padding: 12px;\n  text-align: center;\n  font-weight: 500;\n}\n.cart-dropdown__content[_ngcontent-%COMP%] {\n  padding-top: 12px;\n}\n.cart-dropdown__content[_ngcontent-%COMP%]   .product-list[_ngcontent-%COMP%] {\n  padding: 0 12px;\n  max-height: 180px;\n  overflow-y: auto;\n  border-bottom: 1px solid #ccc;\n}\n.cart-dropdown__content[_ngcontent-%COMP%]   .product-list__item[_ngcontent-%COMP%] {\n  padding: 12px 0;\n  margin-bottom: 12px;\n  cursor: default;\n}\n.cart-dropdown__content[_ngcontent-%COMP%]   .product-list__item[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%] {\n  display: flex;\n  position: relative;\n  align-items: center;\n}\n.cart-dropdown__content[_ngcontent-%COMP%]   .product-list__item[_ngcontent-%COMP%]   .product-item__remove[_ngcontent-%COMP%] {\n  top: 4px;\n  right: 0px;\n  position: absolute;\n  border: 1px solid #ccc;\n  height: 22px;\n  width: 22px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n}\n.cart-dropdown__content[_ngcontent-%COMP%]   .product-list__item[_ngcontent-%COMP%]   .product-item__image[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  height: 72px;\n  width: 72px;\n  object-fit: contain;\n}\n.cart-dropdown__content[_ngcontent-%COMP%]   .product-list__item[_ngcontent-%COMP%]   .product-item__description[_ngcontent-%COMP%] {\n  margin-left: 12px;\n  padding-right: 24px;\n}\n.cart-dropdown__content[_ngcontent-%COMP%]   .product-list__item[_ngcontent-%COMP%]   .product-item__description[_ngcontent-%COMP%]   .product-name[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n}\n.cart-dropdown__content[_ngcontent-%COMP%]   .product-list__item[_ngcontent-%COMP%]   .product-item__description[_ngcontent-%COMP%]   .product-amount[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.cart-dropdown__content[_ngcontent-%COMP%]   .cart-info[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n.cart-dropdown__content[_ngcontent-%COMP%]   .cart-info[_ngcontent-%COMP%]   .selected-amount[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n}\n.cart-dropdown__content[_ngcontent-%COMP%]   .cart-info[_ngcontent-%COMP%]   .total-price[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 500;\n}\n.cart-dropdown__content[_ngcontent-%COMP%]   .cart-cta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n.cart-dropdown__content[_ngcontent-%COMP%]   .cart-cta[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.nav-container[_ngcontent-%COMP%] {\n  padding: 16px;\n  background-color: #eee;\n  border-bottom: 1px solid #ccc;\n}\n.nav-container[_ngcontent-%COMP%]    > nav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%] {\n  display: flex;\n}\n.nav-container[_ngcontent-%COMP%]    > nav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  cursor: pointer;\n  margin-right: 16px;\n}\n.side-menu[_ngcontent-%COMP%] {\n  width: 285px;\n  height: 100vh;\n  position: fixed;\n  top: 0px;\n  padding: 56px 0px 24px;\n  transform: translateX(-285px);\n  background-color: #fff;\n  border-right: 1px solid #ccc;\n  transition: all 0.35s ease;\n  z-index: 10002;\n}\n.side-menu[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  top: 24px;\n  right: 24px;\n  position: absolute;\n  font-size: 1.25rem;\n  cursor: pointer;\n}\n.side-menu__content[_ngcontent-%COMP%] {\n  height: 100%;\n  position: relative;\n}\n.side-menu__content[_ngcontent-%COMP%]    > h2[_ngcontent-%COMP%] {\n  padding-left: 24px;\n  margin-bottom: 24px;\n  outline: none;\n  cursor: pointer;\n  transition: transform 0.2s;\n}\n.side-menu__content[_ngcontent-%COMP%]    > h2[_ngcontent-%COMP%]:hover {\n  transform: translateX(16px);\n}\n.side-menu__content[_ngcontent-%COMP%]    > nav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  outline: none;\n  padding: 8px 0 8px 24px;\n  margin-bottom: 12px;\n  cursor: pointer;\n  transition: background-color 0.2s;\n}\n.side-menu__content[_ngcontent-%COMP%]    > nav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:hover {\n  background-color: #ececec;\n}\n.side-menu__content[_ngcontent-%COMP%]   .\uD83C\uDF51[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 24px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.side-menu__content[_ngcontent-%COMP%]   .\uD83C\uDF51[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n  height: 44px;\n  width: 236px;\n  flex-grow: 1;\n  border: 1px solid #ccc;\n  background: transparent;\n}\n.side-menu.show[_ngcontent-%COMP%] {\n  transform: translateX(0);\n}\n.darken-background[_ngcontent-%COMP%] {\n  height: 100vh;\n  width: 100vw;\n  position: fixed;\n  top: 0;\n  left: 0;\n  background-color: transparent;\n  transition: background-color 0.35s ease;\n  z-index: 10001;\n  pointer-events: none;\n}\n.darken-background.enable[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.5);\n  pointer-events: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0FBRUY7QUFERTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUdKO0FBQ0U7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7QUFDSjtBQUdFO0VBQ0Usa0JBQUE7QUFESjtBQUVJO0VBQ0UsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBQU47QUFLQTtFQUNFO0lBQ0UsZUFBQTtFQUZGO0FBQ0Y7QUFNQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0FBSkY7QUFLRTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBSEo7QUFLRTtFQUNFLGlCQUFBO0FBSEo7QUFJSTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7QUFGTjtBQUdNO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQURSO0FBRVE7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUFWO0FBQ1U7RUFDRSxRQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUNaO0FBRVk7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBQWQ7QUFHVTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7QUFEWjtBQUVZO0VBQ0UsbUJBQUE7QUFBZDtBQUdjO0VBQ0UsZ0JBQUE7QUFEaEI7QUFRSTtFQUNFLGFBQUE7QUFOTjtBQU9NO0VBQ0UsbUJBQUE7QUFMUjtBQU9NO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBQUxSO0FBUUk7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFOTjtBQU9NO0VBQ0UsV0FBQTtBQUxSO0FBV0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtBQVJGO0FBVUk7RUFDRSxhQUFBO0FBUk47QUFTTTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQVBSO0FBZUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxRQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7QUFaRjtBQWFFO0VBQ0UsU0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQVhKO0FBYUU7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7QUFYSjtBQVlJO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7QUFWTjtBQVdNO0VBQ0UsMkJBQUE7QUFUUjtBQWNRO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUNBQUE7QUFaVjtBQWFVO0VBQ0UseUJBQUE7QUFYWjtBQWdCSTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBZE47QUFlTTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQWJSO0FBbUJBO0VBQ0Usd0JBQUE7QUFoQkY7QUFtQkE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLDZCQUFBO0VBQ0EsdUNBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7QUFoQkY7QUFtQkE7RUFDRSxvQ0FBQTtFQUNBLG9CQUFBO0FBaEJGIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItY29udGFpbmVyIHtcbiAgaGVpZ2h0OiA2MHB4O1xuICBwYWRkaW5nOiAwIDE2cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICA+IGRpdiB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICAmX19sZWZ0IHtcbiAgfVxuICAmX19taWRkbGUge1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgPiBoMyB7XG4gICAgfVxuICB9XG4gICZfX3JpZ2h0IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLmNhcnQtY291bnRlciB7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICAgIHdpZHRoOiAxN3B4O1xuICAgICAgaGVpZ2h0OiAxN3B4O1xuICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICByaWdodDogMHB4O1xuICAgICAgdG9wOiAxMnB4O1xuICAgICAgei1pbmRleDogMjtcbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmhlYWRlci1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDAgMjRweDtcbiAgfVxufVxuXG4vLyBDYXJ0IERyb3Bkb3duXG4uY2FydC1kcm9wZG93biB7XG4gIG1heC13aWR0aDogMjgwcHg7XG4gIG1pbi13aWR0aDogMjgwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICZfX2VtcHR5IHtcbiAgICBwYWRkaW5nOiAxMnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG4gICZfX2NvbnRlbnQge1xuICAgIHBhZGRpbmctdG9wOiAxMnB4O1xuICAgIC5wcm9kdWN0LWxpc3Qge1xuICAgICAgcGFkZGluZzogMCAxMnB4O1xuICAgICAgbWF4LWhlaWdodDogMTgwcHg7XG4gICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG4gICAgICAmX19pdGVtIHtcbiAgICAgICAgcGFkZGluZzogMTJweCAwO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgICAgIC5wcm9kdWN0LWl0ZW0ge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgJl9fcmVtb3ZlIHtcbiAgICAgICAgICAgIHRvcDogNHB4O1xuICAgICAgICAgICAgcmlnaHQ6IDBweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgICAgICBoZWlnaHQ6IDIycHg7XG4gICAgICAgICAgICB3aWR0aDogMjJweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgICZfX2ltYWdlIHtcbiAgICAgICAgICAgID4gaW1nIHtcbiAgICAgICAgICAgICAgaGVpZ2h0OiA3MnB4O1xuICAgICAgICAgICAgICB3aWR0aDogNzJweDtcbiAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgJl9fZGVzY3JpcHRpb24ge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEycHg7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyNHB4O1xuICAgICAgICAgICAgLnByb2R1Y3QtbmFtZSB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucHJvZHVjdC1hbW91bnQge1xuICAgICAgICAgICAgICA+IHNwYW4ge1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLmNhcnQtaW5mbyB7XG4gICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgLnNlbGVjdGVkLWFtb3VudCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgICB9XG4gICAgICAudG90YWwtcHJpY2Uge1xuICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICB9XG4gICAgfVxuICAgIC5jYXJ0LWN0YSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgID4gYnV0dG9uIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5uYXYtY29udGFpbmVyIHtcbiAgcGFkZGluZzogMTZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG4gID4gbmF2IHtcbiAgICA+IHVsIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICA+IGxpIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIFNpZGUgTWVudSBTdHlsZXNcblxuLnNpZGUtbWVudSB7XG4gIHdpZHRoOiAyODVweDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDBweDtcbiAgcGFkZGluZzogNTZweCAwcHggMjRweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yODVweCk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNjY2M7XG4gIHRyYW5zaXRpb246IGFsbCAwLjM1cyBlYXNlO1xuICB6LWluZGV4OiAxMDAwMjtcbiAgPiBpIHtcbiAgICB0b3A6IDI0cHg7XG4gICAgcmlnaHQ6IDI0cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgJl9fY29udGVudCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICA+IGgyIHtcbiAgICAgIHBhZGRpbmctbGVmdDogMjRweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnM7XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE2cHgpO1xuICAgICAgfVxuICAgIH1cbiAgICA+IG5hdiB7XG4gICAgICA+IHVsIHtcbiAgICAgICAgPiBsaSB7XG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICBwYWRkaW5nOiA4cHggMCA4cHggMjRweDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnM7XG4gICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM2LCAyMzYsIDIzNik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC7wn42RIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGJvdHRvbTogMDtcbiAgICAgIGxlZnQ6IDI0cHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgID4gYnV0dG9uIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgICAgICBoZWlnaHQ6IDQ0cHg7XG4gICAgICAgIHdpZHRoOiAyMzZweDtcbiAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLnNpZGUtbWVudS5zaG93IHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xufVxuXG4uZGFya2VuLWJhY2tncm91bmQge1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwdnc7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjM1cyBlYXNlO1xuICB6LWluZGV4OiAxMDAwMTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5kYXJrZW4tYmFja2dyb3VuZC5lbmFibGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xufVxuIl19 */"] });


/***/ }),

/***/ "fp1T":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 2, vars: 0, template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "footer works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "lGQG":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api.service */ "H+bZ");
/* harmony import */ var _token_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./token-storage.service */ "Zr0/");





class AuthService {
    constructor(_api, _token) {
        this._api = _api;
        this._token = _token;
        this.userSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this._token.getUser());
        this.user = this.userSubject.asObservable();
    }
    getUser() {
        console.log(this.userSubject);
        console.log(this.userSubject.value);
        return this.userSubject.value;
    }
    login(credentials) {
        return this._api
            .postTypeRequest('auth/login', {
            email: credentials.email,
            password: credentials.password,
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((res) => {
            let user = {
                email: credentials.email,
                token: res.token,
            };
            this._token.setToken(res.token);
            this._token.setUser(res.data[0]);
            console.log(res);
            this.userSubject.next(user);
            return user;
        }));
    }
    register(user) {
        return this._api.postTypeRequest('auth/register', {
            fullName: user.fullName,
            email: user.email,
            password: user.password,
        });
    }
    logout() {
        this._token.clearStorage();
        this.userSubject.next(null);
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_token_storage_service__WEBPACK_IMPORTED_MODULE_4__["TokenStorageService"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cart/cart.component */ "c2A7");
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkout/checkout.component */ "IiZn");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _auth_components_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/components/login/login.component */ "OuDC");
/* harmony import */ var _order_history_order_history_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./order-history/order-history.component */ "d759");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product/product.component */ "LvIC");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./profile/profile.component */ "W6KJ");
/* harmony import */ var _auth_components_register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth/components/register/register.component */ "ysMu");
/* harmony import */ var _guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./guards/auth-guard.service */ "Hs9l");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");












const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'login', component: _auth_components_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'register', component: _auth_components_register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"] },
    {
        path: 'profile',
        component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"],
        canActivate: [_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuardService"]],
    },
    { path: 'product/:id', component: _product_product_component__WEBPACK_IMPORTED_MODULE_6__["ProductComponent"] },
    { path: 'cart', component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_1__["CartComponent"] },
    {
        path: 'checkout',
        component: _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_2__["CheckoutComponent"],
        canActivate: [_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuardService"]],
    },
    {
        path: 'order-history',
        component: _order_history_order_history_component__WEBPACK_IMPORTED_MODULE_5__["OrderHistoryComponent"],
        canActivate: [_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuardService"]],
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "ysMu":
/*!****************************************************************!*\
  !*** ./src/app/auth/components/register/register.component.ts ***!
  \****************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/api.service */ "H+bZ");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/input */ "PTRe");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "RwU8");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/alert */ "Wfee");











const _c0 = function () { return { "margin-bottom": "16px" }; };
function RegisterComponent_nz_alert_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-alert", 21);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzMessage", ctx_r0.errorMessage)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
} }
class RegisterComponent {
    constructor(_api, _auth, _router) {
        this._api = _api;
        this._auth = _auth;
        this._router = _router;
        this.fullName = '';
        this.email = '';
        this.password = '';
        this.confirmPassword = '';
        this.errorMessage = '';
        this.loading = false;
    }
    ngOnInit() { }
    onSubmit() {
        this.errorMessage = '';
        if (this.fullName && this.password && this.email && this.confirmPassword) {
            if (this.password !== this.confirmPassword) {
                this.errorMessage = 'Passwords need to match';
            }
            else {
                this.loading = true;
                this._auth
                    .register({
                    fullName: this.fullName,
                    email: this.email,
                    password: this.password,
                })
                    .subscribe((res) => {
                    console.log(res);
                    this.loading = false;
                    this._router.navigate(['/login']);
                }, (err) => {
                    this.errorMessage = err.error.message;
                    this.loading = false;
                });
            }
        }
        else {
            this.errorMessage = 'Make sure to fill everything ;)';
        }
    }
    canSubmit() {
        return this.fullName && this.email && this.password && this.confirmPassword
            ? true
            : false;
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 40, vars: 7, consts: [[1, "register-container"], [1, "form-container"], ["nzShowIcon", "", "nzType", "error", 3, "nzMessage", "ngStyle", 4, "ngIf"], [3, "ngSubmit"], ["registerForm", "ngForm"], [1, "input-container"], ["for", "fullName"], ["nz-input", "", "type", "text", "name", "fullName", "placeholder", "Enter your full name", 3, "ngModel", "ngModelChange"], ["for", "email"], ["nz-input", "", "type", "email", "name", "email", "placeholder", "Enter your email address", 3, "ngModel", "ngModelChange"], [1, "\uD83E\uDD2A"], ["for", "password"], ["nz-input", "", "type", "password", "name", "password", "placeholder", "Enter a strong password", 3, "ngModel", "ngModelChange"], ["for", "confirmPassword"], ["nz-input", "", "type", "password", "name", "confirmPassword", "placeholder", "Repeat your password", 3, "ngModel", "ngModelChange"], [1, "\u2705"], [1, "checkbox-container"], ["nz-input", "", "type", "checkbox"], [1, "cta-container"], ["nz-button", "", "type", "submit", 3, "disabled", "nzLoading"], ["routerLink", "/login"], ["nzShowIcon", "", "nzType", "error", 3, "nzMessage", "ngStyle"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Sign Up to Eccom");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, RegisterComponent_nz_alert_4_Template, 1, 3, "nz-alert", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_5_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Full name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_10_listener($event) { return ctx.fullName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Email address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_14_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_19_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Confirm password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_23_listener($event) { return ctx.confirmPassword = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "I agree to receive instructional and promotional emails");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " I agree to Eccom's Terms of Use & Privacy Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Sign up ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Sign in with an existing user");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.fullName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.confirmPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.canSubmit())("nzLoading", ctx.loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_6__["NzInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_7__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_8__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_9__["ɵNzTransitionPatchDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_10__["NzAlertComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"]], styles: ["@charset \"UTF-8\";\n.register-container[_ngcontent-%COMP%] {\n  padding: 24px 16px;\n}\n.register-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%] {\n  max-width: 475px;\n  padding: 24px 16px;\n  margin: 0 auto;\n  border-radius: 3px;\n  background-color: #fff;\n}\n.register-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]    > h2[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 32px;\n}\n.register-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]    > .error-container[_ngcontent-%COMP%] {\n  padding: 12px;\n  margin: 0 0 16px;\n  color: #fff;\n  background-color: #f83333;\n  border-radius: 4px;\n}\n.register-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]    > form[_ngcontent-%COMP%]    > .\uD83E\uDD2A[_ngcontent-%COMP%] {\n  display: grid;\n  grid-column-gap: 12px;\n  grid-template-columns: 1fr 1fr;\n  margin-bottom: 24px;\n}\n.register-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]    > form[_ngcontent-%COMP%]    > .\u2705[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n.register-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]    > form[_ngcontent-%COMP%]    > .\u2705[_ngcontent-%COMP%]    > .checkbox-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 12px;\n}\n.register-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]    > form[_ngcontent-%COMP%]    > .\u2705[_ngcontent-%COMP%]    > .checkbox-container[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%] {\n  width: auto;\n  margin-right: 12px;\n}\n.register-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]    > form[_ngcontent-%COMP%]    > .\u2705[_ngcontent-%COMP%]    > .checkbox-container[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n}\n.register-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]    > form[_ngcontent-%COMP%]    > .cta-container[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.register-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]    > form[_ngcontent-%COMP%]    > .cta-container[_ngcontent-%COMP%]    > button[type=submit][_ngcontent-%COMP%] {\n  height: 52px;\n  width: 100%;\n  padding: 0px 30px;\n  margin-bottom: 12px;\n}\n.register-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]    > form[_ngcontent-%COMP%]    > .cta-container[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  text-align: left;\n}\n@media screen and (min-width: 768px) {\n  .register-container[_ngcontent-%COMP%] {\n    padding: 48px 16px 240px;\n  }\n  .register-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%] {\n    padding: 36px;\n    border: 1px solid #ccc;\n  }\n}\n.input-container[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.input-container[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  display: inline-block;\n  margin-bottom: 6px;\n}\n.input-container[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjtFQUNFLGtCQUFBO0FBRUY7QUFERTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQUdKO0FBRkk7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FBSU47QUFGSTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FBSU47QUFETTtFQUNFLGFBQUE7RUFDQSxxQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFHUjtBQURNO0VBQ0UsbUJBQUE7QUFHUjtBQUZRO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFJVjtBQUhVO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FBS1o7QUFIVTtFQUNFLGtCQUFBO0FBS1o7QUFETTtFQUNFLGtCQUFBO0FBR1I7QUFGUTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQUlWO0FBRlE7RUFDRSxnQkFBQTtBQUlWO0FBR0E7RUFDRTtJQUNFLHdCQUFBO0VBQUY7RUFFRTtJQUNFLGFBQUE7SUFDQSxzQkFBQTtFQUFKO0FBQ0Y7QUFJQTtFQUNFLG1CQUFBO0FBRkY7QUFHRTtFQUNFLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQURKO0FBR0U7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUFESiIsImZpbGUiOiJyZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZWdpc3Rlci1jb250YWluZXIge1xuICBwYWRkaW5nOiAyNHB4IDE2cHg7XG4gIC5mb3JtLWNvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiA0NzVweDtcbiAgICBwYWRkaW5nOiAyNHB4IDE2cHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgPiBoMiB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBtYXJnaW4tYm90dG9tOiAzMnB4O1xuICAgIH1cbiAgICA+IC5lcnJvci1jb250YWluZXIge1xuICAgICAgcGFkZGluZzogMTJweDtcbiAgICAgIG1hcmdpbjogMCAwIDE2cHg7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDgsIDUxLCA1MSk7XG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgfVxuICAgID4gZm9ybSB7XG4gICAgICA+IC7wn6SqIHtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgZ3JpZC1jb2x1bW4tZ2FwOiAxMnB4O1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gICAgICB9XG4gICAgICA+IC7inIUge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMnB4O1xuICAgICAgICA+IC5jaGVja2JveC1jb250YWluZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICAgICAgICAgID4gaW5wdXQge1xuICAgICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gICAgICAgICAgfVxuICAgICAgICAgID4gc3BhbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuNzVyZW07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICA+IC5jdGEtY29udGFpbmVyIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICA+IGJ1dHRvblt0eXBlPVwic3VibWl0XCJdIHtcbiAgICAgICAgICBoZWlnaHQ6IDUycHg7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgcGFkZGluZzogMHB4IDMwcHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgICAgICAgfVxuICAgICAgICA+IGRpdiB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAucmVnaXN0ZXItY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiA0OHB4IDE2cHggMjQwcHg7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmODtcbiAgICAuZm9ybS1jb250YWluZXIge1xuICAgICAgcGFkZGluZzogMzZweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgfVxuICB9XG59XG5cbi5pbnB1dC1jb250YWluZXIge1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICA+IGxhYmVsIHtcbiAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW4tYm90dG9tOiA2cHg7XG4gIH1cbiAgPiBpbnB1dCB7XG4gICAgcGFkZGluZzogMTBweCAxMnB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map