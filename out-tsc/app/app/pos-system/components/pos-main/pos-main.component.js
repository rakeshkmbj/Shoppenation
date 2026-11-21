import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PosHeaderComponent } from '../pos-header/pos-header.component';
import { PosSidebarComponent } from '../pos-sidebar/pos-sidebar.component';
import { PosProductListComponent } from '../pos-product-list/pos-product-list.component';
import { PosShoppingCartComponent } from '../pos-shopping-cart/pos-shopping-cart.component';
import { PosCartSummaryComponent } from '../pos-cart-summary/pos-cart-summary.component';
import * as i0 from "@angular/core";
import * as i1 from "../../services";
import * as i2 from "@angular/common";
const _c0 = function () { return []; };
export class PosMainComponent {
    constructor(cartService, productService) {
        this.cartService = cartService;
        this.productService = productService;
        this.storeInfo = {
            name: 'Raj Medical Store',
            terminalId: 'POS-01',
            location: 'Main Branch',
            gstin: 'ABHgf134666xx'
        };
        this.userName = 'Rajesh Handa';
        this.categories$ = this.productService.getCategories();
        this.selectedCategory$ = this.productService.getSelectedCategory();
        this.cartItems$ = this.cartService.cartItems$;
        this.cartSummary$ = this.cartService.cartSummary$;
        this.filteredProducts$ = this.productService.getProducts();
    }
    ngOnInit() {
        // Initialize POS system
    }
    onAddToCart(event) {
        this.cartService.addToCart(event.product, event.quantity);
    }
    onUpdateQuantity(event) {
        this.cartService.updateQuantity(event.productId, event.quantity);
    }
    onRemoveItem(productId) {
        this.cartService.removeFromCart(productId);
    }
    onCategorySelect(categoryId) {
        this.productService.selectCategory(categoryId);
    }
    onDeliverSettle() {
        console.log('Deliver & Settle clicked');
        const cartSummary = this.cartService.getCurrentCartSummary();
        // Implement delivery and settlement logic
    }
    onDeleteCart() {
        if (confirm('Are you sure you want to clear the cart?')) {
            this.cartService.clearCart();
        }
    }
    onMakePending() {
        console.log('Make Pending to Deliver clicked');
        // Implement pending order logic
    }
    onNotificationClick() {
        console.log('Notification clicked');
    }
}
PosMainComponent.ɵfac = function PosMainComponent_Factory(t) { return new (t || PosMainComponent)(i0.ɵɵdirectiveInject(i1.CartService), i0.ɵɵdirectiveInject(i1.ProductService)); };
PosMainComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PosMainComponent, selectors: [["app-pos-main"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 15, vars: 20, consts: [[1, "pos-page"], [1, "pos-container"], [3, "storeInfo", "userName", "notificationClick"], [1, "pos-main-content"], [3, "categories", "selectedCategory", "categorySelect"], [1, "pos-center-content"], [3, "products", "addToCart"], [1, "pos-right-sidebar"], [3, "items", "updateQuantity", "removeItem"], [3, "summary", "deliverSettle", "deleteCart", "makePending"]], template: function PosMainComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "app-pos-header", 2);
        i0.ɵɵlistener("notificationClick", function PosMainComponent_Template_app_pos_header_notificationClick_2_listener() { return ctx.onNotificationClick(); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "div", 3)(4, "app-pos-sidebar", 4);
        i0.ɵɵlistener("categorySelect", function PosMainComponent_Template_app_pos_sidebar_categorySelect_4_listener($event) { return ctx.onCategorySelect($event); });
        i0.ɵɵpipe(5, "async");
        i0.ɵɵpipe(6, "async");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "div", 5)(8, "app-pos-product-list", 6);
        i0.ɵɵlistener("addToCart", function PosMainComponent_Template_app_pos_product_list_addToCart_8_listener($event) { return ctx.onAddToCart($event); });
        i0.ɵɵpipe(9, "async");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(10, "div", 7)(11, "app-pos-shopping-cart", 8);
        i0.ɵɵlistener("updateQuantity", function PosMainComponent_Template_app_pos_shopping_cart_updateQuantity_11_listener($event) { return ctx.onUpdateQuantity($event); })("removeItem", function PosMainComponent_Template_app_pos_shopping_cart_removeItem_11_listener($event) { return ctx.onRemoveItem($event); });
        i0.ɵɵpipe(12, "async");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(13, "app-pos-cart-summary", 9);
        i0.ɵɵlistener("deliverSettle", function PosMainComponent_Template_app_pos_cart_summary_deliverSettle_13_listener() { return ctx.onDeliverSettle(); })("deleteCart", function PosMainComponent_Template_app_pos_cart_summary_deleteCart_13_listener() { return ctx.onDeleteCart(); })("makePending", function PosMainComponent_Template_app_pos_cart_summary_makePending_13_listener() { return ctx.onMakePending(); });
        i0.ɵɵpipe(14, "async");
        i0.ɵɵelementEnd()()()()();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("storeInfo", ctx.storeInfo)("userName", ctx.userName);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("categories", i0.ɵɵpipeBind1(5, 7, ctx.categories$) || i0.ɵɵpureFunction0(17, _c0))("selectedCategory", i0.ɵɵpipeBind1(6, 9, ctx.selectedCategory$) || "");
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("products", i0.ɵɵpipeBind1(9, 11, ctx.filteredProducts$) || i0.ɵɵpureFunction0(18, _c0));
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("items", i0.ɵɵpipeBind1(12, 13, ctx.cartItems$) || i0.ɵɵpureFunction0(19, _c0));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("summary", i0.ɵɵpipeBind1(14, 15, ctx.cartSummary$));
    } }, dependencies: [CommonModule, i2.AsyncPipe, PosHeaderComponent,
        PosSidebarComponent,
        PosProductListComponent,
        PosShoppingCartComponent,
        PosCartSummaryComponent], styles: [".pos-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: 100vh;\r\n  width: 100%;\r\n  background-color: #f5f5f5;\r\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;\r\n\r\n  .pos-main-content {\r\n    display: flex;\r\n    flex: 1;\r\n    overflow: hidden;\r\n\r\n    .pos-center-content {\r\n      flex: 1;\r\n      padding: 20px;\r\n      overflow-y: auto;\r\n      background-color: #ffffff;\r\n    }\r\n\r\n    .pos-right-sidebar {\r\n      width: 380px;\r\n      background-color: #f9f9f9;\r\n      border-left: 1px solid #e0e0e0;\r\n      overflow-y: auto;\r\n      display: flex;\r\n      flex-direction: column;\r\n    }\r\n  }\r\n}\r\n\r\n\r\n.pos-main-content[_ngcontent-%COMP%]   .pos-center-content[_ngcontent-%COMP%]::-webkit-scrollbar, .pos-right-sidebar[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  width: 8px;\r\n}\r\n\r\n.pos-main-content[_ngcontent-%COMP%]   .pos-center-content[_ngcontent-%COMP%]::-webkit-scrollbar-track, .pos-right-sidebar[_ngcontent-%COMP%]::-webkit-scrollbar-track {\r\n  background: #f1f1f1;\r\n}\r\n\r\n.pos-main-content[_ngcontent-%COMP%]   .pos-center-content[_ngcontent-%COMP%]::-webkit-scrollbar-thumb, .pos-right-sidebar[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n  background: #888;\r\n  border-radius: 4px;\r\n\r\n  &:hover {\r\n    background: #555;\r\n  }\r\n}\r\n\r\n\r\n[_nghost-%COMP%] {\r\n    display: block;\r\n    width: 100vw;\r\n    height: 100vh;\r\n}\r\n\r\n.pos-page[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 100%;\r\n    overflow: hidden;\r\n    background: #f5f5f5;\r\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PosMainComponent, [{
        type: Component,
        args: [{ selector: 'app-pos-main', standalone: true, imports: [
                    CommonModule,
                    PosHeaderComponent,
                    PosSidebarComponent,
                    PosProductListComponent,
                    PosShoppingCartComponent,
                    PosCartSummaryComponent
                ], template: "<div class=\"pos-page\">\r\n  <div class=\"pos-container\">\r\n    <app-pos-header [storeInfo]=\"storeInfo\" [userName]=\"userName\"\r\n      (notificationClick)=\"onNotificationClick()\"></app-pos-header>\r\n\r\n    <div class=\"pos-main-content\">\r\n      <app-pos-sidebar [categories]=\"(categories$ | async) || []\" [selectedCategory]=\"(selectedCategory$ | async) || ''\"\r\n        (categorySelect)=\"onCategorySelect($event)\"></app-pos-sidebar>\r\n\r\n      <div class=\"pos-center-content\">\r\n        <app-pos-product-list [products]=\"(filteredProducts$ | async) || []\"\r\n          (addToCart)=\"onAddToCart($event)\"></app-pos-product-list>\r\n      </div>\r\n\r\n      <div class=\"pos-right-sidebar\">\r\n        <app-pos-shopping-cart [items]=\"(cartItems$ | async) || []\" (updateQuantity)=\"onUpdateQuantity($event)\"\r\n          (removeItem)=\"onRemoveItem($event)\"></app-pos-shopping-cart>\r\n\r\n        <app-pos-cart-summary [summary]=\"(cartSummary$ | async)\" (deliverSettle)=\"onDeliverSettle()\"\r\n          (deleteCart)=\"onDeleteCart()\" (makePending)=\"onMakePending()\"></app-pos-cart-summary>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>", styles: [".pos-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: 100vh;\r\n  width: 100%;\r\n  background-color: #f5f5f5;\r\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;\r\n\r\n  .pos-main-content {\r\n    display: flex;\r\n    flex: 1;\r\n    overflow: hidden;\r\n\r\n    .pos-center-content {\r\n      flex: 1;\r\n      padding: 20px;\r\n      overflow-y: auto;\r\n      background-color: #ffffff;\r\n    }\r\n\r\n    .pos-right-sidebar {\r\n      width: 380px;\r\n      background-color: #f9f9f9;\r\n      border-left: 1px solid #e0e0e0;\r\n      overflow-y: auto;\r\n      display: flex;\r\n      flex-direction: column;\r\n    }\r\n  }\r\n}\r\n\r\n/* Scrollbar styling */\r\n.pos-main-content .pos-center-content::-webkit-scrollbar,\r\n.pos-right-sidebar::-webkit-scrollbar {\r\n  width: 8px;\r\n}\r\n\r\n.pos-main-content .pos-center-content::-webkit-scrollbar-track,\r\n.pos-right-sidebar::-webkit-scrollbar-track {\r\n  background: #f1f1f1;\r\n}\r\n\r\n.pos-main-content .pos-center-content::-webkit-scrollbar-thumb,\r\n.pos-right-sidebar::-webkit-scrollbar-thumb {\r\n  background: #888;\r\n  border-radius: 4px;\r\n\r\n  &:hover {\r\n    background: #555;\r\n  }\r\n}\r\n\r\n\r\n:host {\r\n    display: block;\r\n    width: 100vw;\r\n    height: 100vh;\r\n}\r\n\r\n.pos-page {\r\n    width: 100%;\r\n    height: 100%;\r\n    overflow: hidden;\r\n    background: #f5f5f5;\r\n}"] }]
    }], function () { return [{ type: i1.CartService }, { type: i1.ProductService }]; }, null); })();
//# sourceMappingURL=pos-main.component.js.map