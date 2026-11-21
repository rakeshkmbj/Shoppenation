import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function PosShoppingCartComponent_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 6);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" (", ctx_r0.items.length, " items) ");
} }
function PosShoppingCartComponent_div_5_div_1_div_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 28)(1, "span", 29);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "number");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r4 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("-\u20B9", i0.ɵɵpipeBind2(3, 1, item_r4.discount, "1.2-2"), "");
} }
function PosShoppingCartComponent_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 9)(1, "div", 10);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 11)(4, "div", 12)(5, "div", 13);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 14);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(9, "div", 15)(10, "button", 16);
    i0.ɵɵlistener("click", function PosShoppingCartComponent_div_5_div_1_Template_button_click_10_listener() { const restoredCtx = i0.ɵɵrestoreView(_r9); const item_r4 = restoredCtx.$implicit; const ctx_r8 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r8.decreaseQty(item_r4.product.id)); });
    i0.ɵɵtext(11, "\u2212");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(12, "input", 17);
    i0.ɵɵelementStart(13, "button", 16);
    i0.ɵɵlistener("click", function PosShoppingCartComponent_div_5_div_1_Template_button_click_13_listener() { const restoredCtx = i0.ɵɵrestoreView(_r9); const item_r4 = restoredCtx.$implicit; const ctx_r10 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r10.increaseQty(item_r4.product.id)); });
    i0.ɵɵtext(14, "+");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(15, "div", 18)(16, "div", 19)(17, "span", 20);
    i0.ɵɵtext(18, "\u20B9");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "span", 21);
    i0.ɵɵtext(20);
    i0.ɵɵpipe(21, "number");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(22, PosShoppingCartComponent_div_5_div_1_div_22_Template, 4, 4, "div", 22);
    i0.ɵɵelementStart(23, "div", 23)(24, "span", 24);
    i0.ɵɵtext(25);
    i0.ɵɵpipe(26, "number");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(27, "div", 25)(28, "button", 26);
    i0.ɵɵtext(29, "\uD83D\uDCB0");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "button", 27);
    i0.ɵɵlistener("click", function PosShoppingCartComponent_div_5_div_1_Template_button_click_30_listener() { const restoredCtx = i0.ɵɵrestoreView(_r9); const item_r4 = restoredCtx.$implicit; const ctx_r11 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r11.onRemoveItem(item_r4.product.id)); });
    i0.ɵɵtext(31, "\u2715");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i_r5 + 1);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(item_r4.product.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r4.product.sku);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("value", item_r4.quantity);
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(21, 7, item_r4.price * item_r4.quantity, "1.2-2"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", item_r4.discount > 0);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("\u20B9", i0.ɵɵpipeBind2(26, 10, item_r4.mrpTotal, "1.2-2"), "");
} }
function PosShoppingCartComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵtemplate(1, PosShoppingCartComponent_div_5_div_1_Template, 32, 13, "div", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r1.items);
} }
function PosShoppingCartComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 30)(1, "div", 31);
    i0.ɵɵtext(2, "\uD83D\uDED2");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p");
    i0.ɵɵtext(4, "Cart is Empty");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span");
    i0.ɵɵtext(6, "Add items to get started");
    i0.ɵɵelementEnd()();
} }
export class PosShoppingCartComponent {
    constructor() {
        this.items = [];
        this.updateQuantity = new EventEmitter();
        this.removeItem = new EventEmitter();
    }
    increaseQty(productId) {
        const item = this.items.find(i => i.product.id === productId);
        if (item) {
            this.updateQuantity.emit({ productId, quantity: item.quantity + 1 });
        }
    }
    decreaseQty(productId) {
        const item = this.items.find(i => i.product.id === productId);
        if (item && item.quantity > 1) {
            this.updateQuantity.emit({ productId, quantity: item.quantity - 1 });
        }
    }
    onRemoveItem(productId) {
        this.removeItem.emit(productId);
    }
}
PosShoppingCartComponent.ɵfac = function PosShoppingCartComponent_Factory(t) { return new (t || PosShoppingCartComponent)(); };
PosShoppingCartComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PosShoppingCartComponent, selectors: [["app-pos-shopping-cart"]], inputs: { items: "items" }, outputs: { updateQuantity: "updateQuantity", removeItem: "removeItem" }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 7, vars: 3, consts: [[1, "shopping-cart-container"], [1, "cart-header"], [1, "cart-title"], ["class", "items-count", 4, "ngIf"], ["class", "cart-items-list", 4, "ngIf"], ["class", "empty-cart", 4, "ngIf"], [1, "items-count"], [1, "cart-items-list"], ["class", "cart-item", 4, "ngFor", "ngForOf"], [1, "cart-item"], [1, "item-number"], [1, "item-details"], [1, "item-info"], [1, "item-name"], [1, "item-sku"], [1, "item-qty"], [1, "qty-btn", 3, "click"], ["type", "text", "readonly", "", 1, "qty-value", 3, "value"], [1, "item-price"], [1, "price-row"], [1, "price-label"], [1, "price-value"], ["class", "discount-row", 4, "ngIf"], [1, "mrp-row"], [1, "mrp-value"], [1, "item-actions"], ["title", "Apply Discount", 1, "action-btn", "discount-btn"], ["title", "Remove", 1, "action-btn", "remove-btn", 3, "click"], [1, "discount-row"], [1, "discount-label"], [1, "empty-cart"], [1, "empty-icon"]], template: function PosShoppingCartComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "h3", 2);
        i0.ɵɵtext(3, "SHOPPING CART");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(4, PosShoppingCartComponent_span_4_Template, 2, 1, "span", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(5, PosShoppingCartComponent_div_5_Template, 2, 1, "div", 4);
        i0.ɵɵtemplate(6, PosShoppingCartComponent_div_6_Template, 7, 0, "div", 5);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngIf", ctx.items && ctx.items.length > 0);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.items && ctx.items.length > 0);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.items || ctx.items.length === 0);
    } }, dependencies: [CommonModule, i1.NgForOf, i1.NgIf, i1.DecimalPipe], styles: [".shopping-cart-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  background: white;\r\n  border-radius: 8px;\r\n  margin: 12px;\r\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);\r\n  overflow: hidden;\r\n  border: 1px solid #e0e0e0;\r\n\r\n  .cart-header {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    padding: 14px 16px;\r\n    background-color: #f9f9f9;\r\n    border-bottom: 1px solid #e0e0e0;\r\n\r\n    .cart-title {\r\n      margin: 0;\r\n      font-size: 14px;\r\n      font-weight: 600;\r\n      color: #333;\r\n      letter-spacing: 0.5px;\r\n    }\r\n\r\n    .items-count {\r\n      font-size: 12px;\r\n      color: #ff6b35;\r\n      font-weight: 600;\r\n    }\r\n  }\r\n\r\n  .cart-status {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    gap: 10px;\r\n    padding: 12px 16px;\r\n    background-color: #fff7f0;\r\n    border-bottom: 1px solid #f0e6de;\r\n\r\n    .status-item {\r\n      display: flex;\r\n      align-items: center;\r\n      gap: 8px;\r\n      font-size: 12px;\r\n      color: #333;\r\n      font-weight: 600;\r\n    }\r\n\r\n    .status-icon {\r\n      display: inline-flex;\r\n      align-items: center;\r\n      justify-content: center;\r\n      width: 24px;\r\n      height: 24px;\r\n      border-radius: 50%;\r\n      background-color: #f0f0f0;\r\n      color: #333;\r\n      font-size: 12px;\r\n    }\r\n\r\n    .status-icon.open {\r\n      background-color: #d4edda;\r\n      color: #217a33;\r\n    }\r\n\r\n    .status-icon.closed {\r\n      background-color: #f8d7da;\r\n      color: #842029;\r\n    }\r\n\r\n    .view-cart-btn {\r\n      border: none;\r\n      background-color: #111111;\r\n      color: white;\r\n      padding: 10px 16px;\r\n      border-radius: 6px;\r\n      cursor: pointer;\r\n      font-size: 12px;\r\n      font-weight: 700;\r\n      text-transform: uppercase;\r\n      transition: all 0.3s ease;\r\n\r\n      &:hover {\r\n        background-color: #333333;\r\n      }\r\n    }\r\n  }\r\n\r\n  .cart-items-list {\r\n    flex: 1;\r\n    overflow-y: auto;\r\n\r\n    .cart-item {\r\n      display: flex;\r\n      align-items: center;\r\n      gap: 8px;\r\n      padding: 12px 12px;\r\n      border-bottom: 1px solid #f0f0f0;\r\n      transition: background-color 0.3s ease;\r\n\r\n      &:hover {\r\n        background-color: #f9f9f9;\r\n      }\r\n\r\n      .item-number {\r\n        flex-shrink: 0;\r\n        width: 24px;\r\n        height: 24px;\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n        background-color: #ff6b35;\r\n        color: white;\r\n        border-radius: 50%;\r\n        font-size: 12px;\r\n        font-weight: 600;\r\n      }\r\n\r\n      .item-details {\r\n        flex: 1;\r\n        min-width: 0;\r\n\r\n        .item-info {\r\n          .item-name {\r\n            font-size: 12px;\r\n            font-weight: 600;\r\n            color: #333;\r\n            margin-bottom: 2px;\r\n            white-space: nowrap;\r\n            overflow: hidden;\r\n            text-overflow: ellipsis;\r\n          }\r\n\r\n          .item-sku {\r\n            font-size: 10px;\r\n            color: #999;\r\n          }\r\n        }\r\n      }\r\n\r\n      .item-qty {\r\n        display: flex;\r\n        align-items: center;\r\n        gap: 2px;\r\n        background-color: #f0f0f0;\r\n        border-radius: 4px;\r\n        padding: 2px;\r\n\r\n        .qty-btn {\r\n          width: 22px;\r\n          height: 22px;\r\n          border: none;\r\n          background: none;\r\n          cursor: pointer;\r\n          font-size: 14px;\r\n          font-weight: 600;\r\n          color: #666;\r\n          border-radius: 3px;\r\n          transition: all 0.3s ease;\r\n\r\n          &:hover {\r\n            background-color: #e0e0e0;\r\n            color: #ff6b35;\r\n          }\r\n        }\r\n\r\n        .qty-value {\r\n          width: 32px;\r\n          border: none;\r\n          background: none;\r\n          text-align: center;\r\n          font-size: 12px;\r\n          font-weight: 600;\r\n          color: #333;\r\n        }\r\n      }\r\n\r\n      .item-price {\r\n        text-align: right;\r\n        font-size: 11px;\r\n\r\n        .price-row {\r\n          .price-label {\r\n            font-size: 10px;\r\n          }\r\n\r\n          .price-value {\r\n            font-weight: 600;\r\n            color: #333;\r\n          }\r\n        }\r\n\r\n        .discount-row {\r\n          .discount-label {\r\n            color: #28a745;\r\n            font-weight: 600;\r\n          }\r\n        }\r\n\r\n        .mrp-row {\r\n          .mrp-value {\r\n            color: #999;\r\n            text-decoration: line-through;\r\n            font-size: 10px;\r\n          }\r\n        }\r\n      }\r\n\r\n      .item-actions {\r\n        display: flex;\r\n        gap: 4px;\r\n\r\n        .action-btn {\r\n          width: 24px;\r\n          height: 24px;\r\n          border: 1px solid #ddd;\r\n          background: white;\r\n          border-radius: 4px;\r\n          cursor: pointer;\r\n          font-size: 12px;\r\n          transition: all 0.3s ease;\r\n\r\n          &:hover {\r\n            background-color: #f0f0f0;\r\n          }\r\n\r\n          &.discount-btn {\r\n            &:hover {\r\n              border-color: #ff6b35;\r\n              background-color: rgba(255, 107, 53, 0.1);\r\n            }\r\n          }\r\n\r\n          &.remove-btn {\r\n            &:hover {\r\n              border-color: #dc3545;\r\n              background-color: rgba(220, 53, 69, 0.1);\r\n              color: #dc3545;\r\n            }\r\n          }\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  .empty-cart {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    padding: 40px 20px;\r\n    color: #999;\r\n\r\n    .empty-icon {\r\n      font-size: 36px;\r\n      margin-bottom: 12px;\r\n      opacity: 0.6;\r\n    }\r\n\r\n    p {\r\n      margin: 0 0 6px 0;\r\n      font-size: 14px;\r\n      font-weight: 600;\r\n    }\r\n\r\n    span {\r\n      font-size: 12px;\r\n      color: #bbb;\r\n    }\r\n  }\r\n}\r\n\r\n\r\n.cart-items-list[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  width: 6px;\r\n}\r\n\r\n.cart-items-list[_ngcontent-%COMP%]::-webkit-scrollbar-track {\r\n  background: #f1f1f1;\r\n}\r\n\r\n.cart-items-list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n  background: #ccc;\r\n  border-radius: 3px;\r\n\r\n  &:hover {\r\n    background: #999;\r\n  }\r\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PosShoppingCartComponent, [{
        type: Component,
        args: [{ selector: 'app-pos-shopping-cart', standalone: true, imports: [CommonModule], template: "<div class=\"shopping-cart-container\">\r\n  <div class=\"cart-header\">\r\n    <h3 class=\"cart-title\">SHOPPING CART</h3>\r\n    <span class=\"items-count\" *ngIf=\"items && items.length > 0\">\r\n      ({{ items.length }} items)\r\n    </span>\r\n  </div>\r\n\r\n  <!-- <div class=\"cart-status\">\r\n    <div class=\"status-item\">\r\n      <span class=\"status-label\">Cart Opened</span>\r\n      <span class=\"status-icon open\">\u2714</span>\r\n    </div>\r\n    <div class=\"status-item\">\r\n      <span class=\"status-label\">Checked-out</span>\r\n      <span class=\"status-icon closed\">\u2715</span>\r\n    </div>\r\n    <button class=\"view-cart-btn\">VIEW CART</button>\r\n  </div> -->\r\n\r\n  <div class=\"cart-items-list\" *ngIf=\"items && items.length > 0\">\r\n    <div class=\"cart-item\" *ngFor=\"let item of items; let i = index\">\r\n      <div class=\"item-number\">{{ i + 1 }}</div>\r\n\r\n      <div class=\"item-details\">\r\n        <div class=\"item-info\">\r\n          <div class=\"item-name\">{{ item.product.name }}</div>\r\n          <div class=\"item-sku\">{{ item.product.sku }}</div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"item-qty\">\r\n        <button class=\"qty-btn\" (click)=\"decreaseQty(item.product.id)\">\u2212</button>\r\n        <input type=\"text\" class=\"qty-value\" [value]=\"item.quantity\" readonly>\r\n        <button class=\"qty-btn\" (click)=\"increaseQty(item.product.id)\">+</button>\r\n      </div>\r\n\r\n      <div class=\"item-price\">\r\n        <div class=\"price-row\">\r\n          <span class=\"price-label\">\u20B9</span>\r\n          <span class=\"price-value\">{{ item.price * item.quantity | number: '1.2-2' }}</span>\r\n        </div>\r\n        <div class=\"discount-row\" *ngIf=\"item.discount > 0\">\r\n          <span class=\"discount-label\">-\u20B9{{ item.discount | number: '1.2-2' }}</span>\r\n        </div>\r\n        <div class=\"mrp-row\">\r\n          <span class=\"mrp-value\">\u20B9{{ item.mrpTotal | number: '1.2-2' }}</span>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"item-actions\">\r\n        <button class=\"action-btn discount-btn\" title=\"Apply Discount\">\uD83D\uDCB0</button>\r\n        <button class=\"action-btn remove-btn\" (click)=\"onRemoveItem(item.product.id)\" title=\"Remove\">\u2715</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"empty-cart\" *ngIf=\"!items || items.length === 0\">\r\n    <div class=\"empty-icon\">\uD83D\uDED2</div>\r\n    <p>Cart is Empty</p>\r\n    <span>Add items to get started</span>\r\n  </div>\r\n</div>\r\n", styles: [".shopping-cart-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  background: white;\r\n  border-radius: 8px;\r\n  margin: 12px;\r\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);\r\n  overflow: hidden;\r\n  border: 1px solid #e0e0e0;\r\n\r\n  .cart-header {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    padding: 14px 16px;\r\n    background-color: #f9f9f9;\r\n    border-bottom: 1px solid #e0e0e0;\r\n\r\n    .cart-title {\r\n      margin: 0;\r\n      font-size: 14px;\r\n      font-weight: 600;\r\n      color: #333;\r\n      letter-spacing: 0.5px;\r\n    }\r\n\r\n    .items-count {\r\n      font-size: 12px;\r\n      color: #ff6b35;\r\n      font-weight: 600;\r\n    }\r\n  }\r\n\r\n  .cart-status {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    gap: 10px;\r\n    padding: 12px 16px;\r\n    background-color: #fff7f0;\r\n    border-bottom: 1px solid #f0e6de;\r\n\r\n    .status-item {\r\n      display: flex;\r\n      align-items: center;\r\n      gap: 8px;\r\n      font-size: 12px;\r\n      color: #333;\r\n      font-weight: 600;\r\n    }\r\n\r\n    .status-icon {\r\n      display: inline-flex;\r\n      align-items: center;\r\n      justify-content: center;\r\n      width: 24px;\r\n      height: 24px;\r\n      border-radius: 50%;\r\n      background-color: #f0f0f0;\r\n      color: #333;\r\n      font-size: 12px;\r\n    }\r\n\r\n    .status-icon.open {\r\n      background-color: #d4edda;\r\n      color: #217a33;\r\n    }\r\n\r\n    .status-icon.closed {\r\n      background-color: #f8d7da;\r\n      color: #842029;\r\n    }\r\n\r\n    .view-cart-btn {\r\n      border: none;\r\n      background-color: #111111;\r\n      color: white;\r\n      padding: 10px 16px;\r\n      border-radius: 6px;\r\n      cursor: pointer;\r\n      font-size: 12px;\r\n      font-weight: 700;\r\n      text-transform: uppercase;\r\n      transition: all 0.3s ease;\r\n\r\n      &:hover {\r\n        background-color: #333333;\r\n      }\r\n    }\r\n  }\r\n\r\n  .cart-items-list {\r\n    flex: 1;\r\n    overflow-y: auto;\r\n\r\n    .cart-item {\r\n      display: flex;\r\n      align-items: center;\r\n      gap: 8px;\r\n      padding: 12px 12px;\r\n      border-bottom: 1px solid #f0f0f0;\r\n      transition: background-color 0.3s ease;\r\n\r\n      &:hover {\r\n        background-color: #f9f9f9;\r\n      }\r\n\r\n      .item-number {\r\n        flex-shrink: 0;\r\n        width: 24px;\r\n        height: 24px;\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n        background-color: #ff6b35;\r\n        color: white;\r\n        border-radius: 50%;\r\n        font-size: 12px;\r\n        font-weight: 600;\r\n      }\r\n\r\n      .item-details {\r\n        flex: 1;\r\n        min-width: 0;\r\n\r\n        .item-info {\r\n          .item-name {\r\n            font-size: 12px;\r\n            font-weight: 600;\r\n            color: #333;\r\n            margin-bottom: 2px;\r\n            white-space: nowrap;\r\n            overflow: hidden;\r\n            text-overflow: ellipsis;\r\n          }\r\n\r\n          .item-sku {\r\n            font-size: 10px;\r\n            color: #999;\r\n          }\r\n        }\r\n      }\r\n\r\n      .item-qty {\r\n        display: flex;\r\n        align-items: center;\r\n        gap: 2px;\r\n        background-color: #f0f0f0;\r\n        border-radius: 4px;\r\n        padding: 2px;\r\n\r\n        .qty-btn {\r\n          width: 22px;\r\n          height: 22px;\r\n          border: none;\r\n          background: none;\r\n          cursor: pointer;\r\n          font-size: 14px;\r\n          font-weight: 600;\r\n          color: #666;\r\n          border-radius: 3px;\r\n          transition: all 0.3s ease;\r\n\r\n          &:hover {\r\n            background-color: #e0e0e0;\r\n            color: #ff6b35;\r\n          }\r\n        }\r\n\r\n        .qty-value {\r\n          width: 32px;\r\n          border: none;\r\n          background: none;\r\n          text-align: center;\r\n          font-size: 12px;\r\n          font-weight: 600;\r\n          color: #333;\r\n        }\r\n      }\r\n\r\n      .item-price {\r\n        text-align: right;\r\n        font-size: 11px;\r\n\r\n        .price-row {\r\n          .price-label {\r\n            font-size: 10px;\r\n          }\r\n\r\n          .price-value {\r\n            font-weight: 600;\r\n            color: #333;\r\n          }\r\n        }\r\n\r\n        .discount-row {\r\n          .discount-label {\r\n            color: #28a745;\r\n            font-weight: 600;\r\n          }\r\n        }\r\n\r\n        .mrp-row {\r\n          .mrp-value {\r\n            color: #999;\r\n            text-decoration: line-through;\r\n            font-size: 10px;\r\n          }\r\n        }\r\n      }\r\n\r\n      .item-actions {\r\n        display: flex;\r\n        gap: 4px;\r\n\r\n        .action-btn {\r\n          width: 24px;\r\n          height: 24px;\r\n          border: 1px solid #ddd;\r\n          background: white;\r\n          border-radius: 4px;\r\n          cursor: pointer;\r\n          font-size: 12px;\r\n          transition: all 0.3s ease;\r\n\r\n          &:hover {\r\n            background-color: #f0f0f0;\r\n          }\r\n\r\n          &.discount-btn {\r\n            &:hover {\r\n              border-color: #ff6b35;\r\n              background-color: rgba(255, 107, 53, 0.1);\r\n            }\r\n          }\r\n\r\n          &.remove-btn {\r\n            &:hover {\r\n              border-color: #dc3545;\r\n              background-color: rgba(220, 53, 69, 0.1);\r\n              color: #dc3545;\r\n            }\r\n          }\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  .empty-cart {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    padding: 40px 20px;\r\n    color: #999;\r\n\r\n    .empty-icon {\r\n      font-size: 36px;\r\n      margin-bottom: 12px;\r\n      opacity: 0.6;\r\n    }\r\n\r\n    p {\r\n      margin: 0 0 6px 0;\r\n      font-size: 14px;\r\n      font-weight: 600;\r\n    }\r\n\r\n    span {\r\n      font-size: 12px;\r\n      color: #bbb;\r\n    }\r\n  }\r\n}\r\n\r\n/* Scrollbar styling */\r\n.cart-items-list::-webkit-scrollbar {\r\n  width: 6px;\r\n}\r\n\r\n.cart-items-list::-webkit-scrollbar-track {\r\n  background: #f1f1f1;\r\n}\r\n\r\n.cart-items-list::-webkit-scrollbar-thumb {\r\n  background: #ccc;\r\n  border-radius: 3px;\r\n\r\n  &:hover {\r\n    background: #999;\r\n  }\r\n}\r\n"] }]
    }], null, { items: [{
            type: Input
        }], updateQuantity: [{
            type: Output
        }], removeItem: [{
            type: Output
        }] }); })();
//# sourceMappingURL=pos-shopping-cart.component.js.map