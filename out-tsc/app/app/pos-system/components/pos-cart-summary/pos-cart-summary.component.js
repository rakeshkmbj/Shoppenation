import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function PosCartSummaryComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9)(1, "div", 10)(2, "span", 11);
    i0.ɵɵtext(3, "Items");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span", 12);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 10)(7, "span", 11);
    i0.ɵɵtext(8, "Total QTY");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "span", 12);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "div", 10)(12, "span", 11);
    i0.ɵɵtext(13, "MRP Total");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "span", 12);
    i0.ɵɵtext(15);
    i0.ɵɵpipe(16, "number");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(17, "div", 10)(18, "span", 11);
    i0.ɵɵtext(19, "Discount");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "span", 13);
    i0.ɵɵtext(21);
    i0.ɵɵpipe(22, "number");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(23, "div", 10)(24, "span", 11);
    i0.ɵɵtext(25, "Cashback");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "span", 14);
    i0.ɵɵtext(27);
    i0.ɵɵpipe(28, "number");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(29, "div", 10)(30, "span", 11);
    i0.ɵɵtext(31, "Tax (5%)");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(32, "span", 12);
    i0.ɵɵtext(33);
    i0.ɵɵpipe(34, "number");
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(35, "div", 15);
    i0.ɵɵelementStart(36, "div", 16)(37, "span", 11);
    i0.ɵɵtext(38, "NET PAYABLE");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(39, "span", 12);
    i0.ɵɵtext(40);
    i0.ɵɵpipe(41, "number");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r0.summary.totalItems);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r0.summary.totalQty);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1("\u20B9", i0.ɵɵpipeBind2(16, 7, ctx_r0.summary.mrpTotal, "1.2-2"), "");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate1("-\u20B9", i0.ɵɵpipeBind2(22, 10, ctx_r0.summary.discountAmount, "1.2-2"), "");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate1("+\u20B9", i0.ɵɵpipeBind2(28, 13, ctx_r0.summary.cashbackAmount, "1.2-2"), "");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate1("\u20B9", i0.ɵɵpipeBind2(34, 16, ctx_r0.summary.taxAmount, "1.2-2"), "");
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate1("\u20B9", i0.ɵɵpipeBind2(41, 19, ctx_r0.summary.netPayable, "1.2-2"), "");
} }
function PosCartSummaryComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 17)(1, "p");
    i0.ɵɵtext(2, "No items in cart");
    i0.ɵɵelementEnd()();
} }
export class PosCartSummaryComponent {
    constructor() {
        this.summary = null;
        this.deliverSettle = new EventEmitter();
        this.deleteCart = new EventEmitter();
        this.makePending = new EventEmitter();
    }
}
PosCartSummaryComponent.ɵfac = function PosCartSummaryComponent_Factory(t) { return new (t || PosCartSummaryComponent)(); };
PosCartSummaryComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PosCartSummaryComponent, selectors: [["app-pos-cart-summary"]], inputs: { summary: "summary" }, outputs: { deliverSettle: "deliverSettle", deleteCart: "deleteCart", makePending: "makePending" }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 15, vars: 2, consts: [[1, "cart-summary-container"], [1, "summary-header"], ["class", "summary-content", 4, "ngIf"], ["class", "empty-summary", 4, "ngIf"], [1, "summary-actions"], [1, "btn", "btn-delete", 3, "click"], [1, "bi", "bi-trash3-fill", "me-2"], [1, "btn", "btn-pending", 3, "click"], [1, "bi", "bi-credit-card-fill", "me-2"], [1, "summary-content"], [1, "summary-row"], [1, "label"], [1, "value"], [1, "value", "discount"], [1, "value", "cashback"], [1, "summary-divider"], [1, "summary-row", "total"], [1, "empty-summary"]], template: function PosCartSummaryComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "h4");
        i0.ɵɵtext(3, "CART SUMMARY");
        i0.ɵɵelementEnd()();
        i0.ɵɵtemplate(4, PosCartSummaryComponent_div_4_Template, 42, 22, "div", 2);
        i0.ɵɵtemplate(5, PosCartSummaryComponent_div_5_Template, 3, 0, "div", 3);
        i0.ɵɵelementStart(6, "div", 4)(7, "button", 5);
        i0.ɵɵlistener("click", function PosCartSummaryComponent_Template_button_click_7_listener() { return ctx.deleteCart.emit(); });
        i0.ɵɵelement(8, "i", 6);
        i0.ɵɵelementStart(9, "span");
        i0.ɵɵtext(10, "Delete Cart");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(11, "button", 7);
        i0.ɵɵlistener("click", function PosCartSummaryComponent_Template_button_click_11_listener() { return ctx.makePending.emit(); });
        i0.ɵɵelement(12, "i", 8);
        i0.ɵɵelementStart(13, "span");
        i0.ɵɵtext(14, "Make Payment");
        i0.ɵɵelementEnd()()()();
    } if (rf & 2) {
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngIf", ctx.summary);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.summary || ctx.summary.totalItems === 0);
    } }, dependencies: [CommonModule, i1.NgIf, i1.DecimalPipe], styles: [".cart-summary-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  background: white;\r\n  border-radius: 8px;\r\n  margin: 12px;\r\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);\r\n  border: 1px solid #e0e0e0;\r\n  overflow: hidden;\r\n\r\n  .summary-header {\r\n    padding: 14px 16px;\r\n    background-color: #f9f9f9;\r\n    border-bottom: 1px solid #e0e0e0;\r\n\r\n    h4 {\r\n      margin: 0;\r\n      font-size: 14px;\r\n      font-weight: 600;\r\n      color: #333;\r\n      letter-spacing: 0.5px;\r\n    }\r\n  }\r\n\r\n  .summary-content {\r\n    padding: 16px;\r\n    background-color: white;\r\n\r\n    .summary-row {\r\n      display: flex;\r\n      justify-content: space-between;\r\n      align-items: center;\r\n      padding: 8px 0;\r\n      font-size: 12px;\r\n\r\n      .label {\r\n        color: #666;\r\n        font-weight: 500;\r\n      }\r\n\r\n      .value {\r\n        font-weight: 600;\r\n        color: #333;\r\n        text-align: right;\r\n\r\n        &.discount {\r\n          color: #28a745;\r\n        }\r\n\r\n        &.cashback {\r\n          color: #28a745;\r\n        }\r\n      }\r\n\r\n      &.total {\r\n        padding: 12px 0;\r\n        font-size: 14px;\r\n        background: linear-gradient(135deg, #ff6b35 0%, #e55a2b 100%);\r\n        color: white;\r\n        padding: 12px;\r\n        margin: 0 -16px;\r\n        padding: 12px 16px;\r\n        border-radius: 6px;\r\n        margin-top: 8px;\r\n        margin: 0px;\r\n\r\n        .label,\r\n        .value {\r\n          color: white;\r\n          font-size: 14px;\r\n          font-weight: 700;\r\n        }\r\n      }\r\n    }\r\n\r\n    .summary-divider {\r\n      height: 1px;\r\n      background-color: #e0e0e0;\r\n      margin: 12px 0;\r\n    }\r\n  }\r\n\r\n  .empty-summary {\r\n    padding: 40px 16px;\r\n    text-align: center;\r\n    color: #999;\r\n\r\n    p {\r\n      margin: 0;\r\n      font-size: 12px;\r\n    }\r\n  }\r\n\r\n  .summary-actions {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 8px;\r\n    padding: 12px;\r\n\r\n    .btn {\r\n      display: flex;\r\n      align-items: center;\r\n      justify-content: center;\r\n      gap: 8px;\r\n      padding: 10px 12px;\r\n      border: none;\r\n      border-radius: 6px;\r\n      font-size: 12px;\r\n      font-weight: 600;\r\n      cursor: pointer;\r\n      transition: all 0.3s ease;\r\n      text-transform: uppercase;\r\n      letter-spacing: 0.5px;\r\n\r\n      .icon {\r\n        font-size: 14px;\r\n      }\r\n\r\n      &.btn-deliver {\r\n        background-color: #ff6b35;\r\n        color: white;\r\n\r\n        &:hover {\r\n          background-color: #e55a2b;\r\n          box-shadow: 0 4px 12px rgba(255, 107, 53, 0.3);\r\n        }\r\n\r\n        &:active {\r\n          transform: translateY(1px);\r\n        }\r\n      }\r\n\r\n      &.btn-delete {\r\n        background-color: #dc3545;\r\n        color: white;\r\n\r\n        &:hover {\r\n          background-color: #c82333;\r\n          box-shadow: 0 4px 12px rgba(220, 53, 69, 0.3);\r\n        }\r\n\r\n        &:active {\r\n          transform: translateY(1px);\r\n        }\r\n      }\r\n\r\n      &.btn-pending {\r\n        background-color: #ffc107;\r\n        color: #333;\r\n\r\n        &:hover {\r\n          background-color: #e0a800;\r\n          box-shadow: 0 4px 12px rgba(255, 193, 7, 0.3);\r\n        }\r\n\r\n        &:active {\r\n          transform: translateY(1px);\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  .additional-actions {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 6px;\r\n    padding: 0 12px 12px 12px;\r\n    border-top: 1px solid #e0e0e0;\r\n    padding-top: 12px;\r\n\r\n    .action-link {\r\n      display: flex;\r\n      align-items: center;\r\n      gap: 8px;\r\n      padding: 8px 12px;\r\n      background: none;\r\n      border: 1px solid #ddd;\r\n      border-radius: 4px;\r\n      font-size: 11px;\r\n      font-weight: 600;\r\n      color: #666;\r\n      cursor: pointer;\r\n      transition: all 0.3s ease;\r\n\r\n      &:hover {\r\n        background-color: #f0f0f0;\r\n        border-color: #ff6b35;\r\n        color: #ff6b35;\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n.summary-actions[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  gap: 12px;\r\n}\r\n\r\n.summary-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 8px;\r\n  min-width: 160px;\r\n  font-weight: 600;\r\n  border-radius: 8px;\r\n  padding: 10px 18px;\r\n  transition: all 0.25s ease;\r\n}\r\n\r\n.btn-delete[_ngcontent-%COMP%] {\r\n  background: #dc3545;\r\n  color: #fff;\r\n  border: 1px solid #dc3545;\r\n}\r\n\r\n.btn-delete[_ngcontent-%COMP%]:hover {\r\n  background: #bb2d3b;\r\n  border-color: #b02a37;\r\n}\r\n\r\n.btn-pending[_ngcontent-%COMP%] {\r\n  background: #198754;\r\n  color: #fff;\r\n  border: 1px solid #198754;\r\n}\r\n\r\n.btn-pending[_ngcontent-%COMP%]:hover {\r\n  background: #157347;\r\n  border-color: #146c43;\r\n}\r\n\r\n.summary-actions[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  font-size: 1rem;\r\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PosCartSummaryComponent, [{
        type: Component,
        args: [{ selector: 'app-pos-cart-summary', standalone: true, imports: [CommonModule], template: "<div class=\"cart-summary-container\">\r\n  <div class=\"summary-header\">\r\n    <h4>CART SUMMARY</h4>\r\n  </div>\r\n\r\n  <div class=\"summary-content\" *ngIf=\"summary\">\r\n    <div class=\"summary-row\">\r\n      <span class=\"label\">Items</span>\r\n      <span class=\"value\">{{ summary.totalItems }}</span>\r\n    </div>\r\n\r\n    <div class=\"summary-row\">\r\n      <span class=\"label\">Total QTY</span>\r\n      <span class=\"value\">{{ summary.totalQty }}</span>\r\n    </div>\r\n\r\n    <div class=\"summary-row\">\r\n      <span class=\"label\">MRP Total</span>\r\n      <span class=\"value\">\u20B9{{ summary.mrpTotal | number: '1.2-2' }}</span>\r\n    </div>\r\n\r\n    <div class=\"summary-row\">\r\n      <span class=\"label\">Discount</span>\r\n      <span class=\"value discount\">-\u20B9{{ summary.discountAmount | number: '1.2-2' }}</span>\r\n    </div>\r\n\r\n    <div class=\"summary-row\">\r\n      <span class=\"label\">Cashback</span>\r\n      <span class=\"value cashback\">+\u20B9{{ summary.cashbackAmount | number: '1.2-2' }}</span>\r\n    </div>\r\n\r\n    <div class=\"summary-row\">\r\n      <span class=\"label\">Tax (5%)</span>\r\n      <span class=\"value\">\u20B9{{ summary.taxAmount | number: '1.2-2' }}</span>\r\n    </div>\r\n\r\n    <div class=\"summary-divider\"></div>\r\n\r\n    <div class=\"summary-row total\">\r\n      <span class=\"label\">NET PAYABLE</span>\r\n      <span class=\"value\">\u20B9{{ summary.netPayable | number: '1.2-2' }}</span>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"empty-summary\" *ngIf=\"!summary || summary.totalItems === 0\">\r\n    <p>No items in cart</p>\r\n  </div>\r\n\r\n  <div class=\"summary-actions\">\r\n\r\n    <button class=\"btn btn-delete\" (click)=\"deleteCart.emit()\">\r\n      <i class=\"bi bi-trash3-fill me-2\"></i>\r\n      <span>Delete Cart</span>\r\n    </button>\r\n\r\n    <button class=\"btn btn-pending\" (click)=\"makePending.emit()\">\r\n      <i class=\"bi bi-credit-card-fill me-2\"></i>\r\n      <span>Make Payment</span>\r\n    </button>\r\n\r\n  </div>\r\n\r\n</div>", styles: [".cart-summary-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  background: white;\r\n  border-radius: 8px;\r\n  margin: 12px;\r\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);\r\n  border: 1px solid #e0e0e0;\r\n  overflow: hidden;\r\n\r\n  .summary-header {\r\n    padding: 14px 16px;\r\n    background-color: #f9f9f9;\r\n    border-bottom: 1px solid #e0e0e0;\r\n\r\n    h4 {\r\n      margin: 0;\r\n      font-size: 14px;\r\n      font-weight: 600;\r\n      color: #333;\r\n      letter-spacing: 0.5px;\r\n    }\r\n  }\r\n\r\n  .summary-content {\r\n    padding: 16px;\r\n    background-color: white;\r\n\r\n    .summary-row {\r\n      display: flex;\r\n      justify-content: space-between;\r\n      align-items: center;\r\n      padding: 8px 0;\r\n      font-size: 12px;\r\n\r\n      .label {\r\n        color: #666;\r\n        font-weight: 500;\r\n      }\r\n\r\n      .value {\r\n        font-weight: 600;\r\n        color: #333;\r\n        text-align: right;\r\n\r\n        &.discount {\r\n          color: #28a745;\r\n        }\r\n\r\n        &.cashback {\r\n          color: #28a745;\r\n        }\r\n      }\r\n\r\n      &.total {\r\n        padding: 12px 0;\r\n        font-size: 14px;\r\n        background: linear-gradient(135deg, #ff6b35 0%, #e55a2b 100%);\r\n        color: white;\r\n        padding: 12px;\r\n        margin: 0 -16px;\r\n        padding: 12px 16px;\r\n        border-radius: 6px;\r\n        margin-top: 8px;\r\n        margin: 0px;\r\n\r\n        .label,\r\n        .value {\r\n          color: white;\r\n          font-size: 14px;\r\n          font-weight: 700;\r\n        }\r\n      }\r\n    }\r\n\r\n    .summary-divider {\r\n      height: 1px;\r\n      background-color: #e0e0e0;\r\n      margin: 12px 0;\r\n    }\r\n  }\r\n\r\n  .empty-summary {\r\n    padding: 40px 16px;\r\n    text-align: center;\r\n    color: #999;\r\n\r\n    p {\r\n      margin: 0;\r\n      font-size: 12px;\r\n    }\r\n  }\r\n\r\n  .summary-actions {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 8px;\r\n    padding: 12px;\r\n\r\n    .btn {\r\n      display: flex;\r\n      align-items: center;\r\n      justify-content: center;\r\n      gap: 8px;\r\n      padding: 10px 12px;\r\n      border: none;\r\n      border-radius: 6px;\r\n      font-size: 12px;\r\n      font-weight: 600;\r\n      cursor: pointer;\r\n      transition: all 0.3s ease;\r\n      text-transform: uppercase;\r\n      letter-spacing: 0.5px;\r\n\r\n      .icon {\r\n        font-size: 14px;\r\n      }\r\n\r\n      &.btn-deliver {\r\n        background-color: #ff6b35;\r\n        color: white;\r\n\r\n        &:hover {\r\n          background-color: #e55a2b;\r\n          box-shadow: 0 4px 12px rgba(255, 107, 53, 0.3);\r\n        }\r\n\r\n        &:active {\r\n          transform: translateY(1px);\r\n        }\r\n      }\r\n\r\n      &.btn-delete {\r\n        background-color: #dc3545;\r\n        color: white;\r\n\r\n        &:hover {\r\n          background-color: #c82333;\r\n          box-shadow: 0 4px 12px rgba(220, 53, 69, 0.3);\r\n        }\r\n\r\n        &:active {\r\n          transform: translateY(1px);\r\n        }\r\n      }\r\n\r\n      &.btn-pending {\r\n        background-color: #ffc107;\r\n        color: #333;\r\n\r\n        &:hover {\r\n          background-color: #e0a800;\r\n          box-shadow: 0 4px 12px rgba(255, 193, 7, 0.3);\r\n        }\r\n\r\n        &:active {\r\n          transform: translateY(1px);\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  .additional-actions {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 6px;\r\n    padding: 0 12px 12px 12px;\r\n    border-top: 1px solid #e0e0e0;\r\n    padding-top: 12px;\r\n\r\n    .action-link {\r\n      display: flex;\r\n      align-items: center;\r\n      gap: 8px;\r\n      padding: 8px 12px;\r\n      background: none;\r\n      border: 1px solid #ddd;\r\n      border-radius: 4px;\r\n      font-size: 11px;\r\n      font-weight: 600;\r\n      color: #666;\r\n      cursor: pointer;\r\n      transition: all 0.3s ease;\r\n\r\n      &:hover {\r\n        background-color: #f0f0f0;\r\n        border-color: #ff6b35;\r\n        color: #ff6b35;\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n.summary-actions {\r\n  display: flex;\r\n  gap: 12px;\r\n}\r\n\r\n.summary-actions .btn {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 8px;\r\n  min-width: 160px;\r\n  font-weight: 600;\r\n  border-radius: 8px;\r\n  padding: 10px 18px;\r\n  transition: all 0.25s ease;\r\n}\r\n\r\n.btn-delete {\r\n  background: #dc3545;\r\n  color: #fff;\r\n  border: 1px solid #dc3545;\r\n}\r\n\r\n.btn-delete:hover {\r\n  background: #bb2d3b;\r\n  border-color: #b02a37;\r\n}\r\n\r\n.btn-pending {\r\n  background: #198754;\r\n  color: #fff;\r\n  border: 1px solid #198754;\r\n}\r\n\r\n.btn-pending:hover {\r\n  background: #157347;\r\n  border-color: #146c43;\r\n}\r\n\r\n.summary-actions i {\r\n  font-size: 1rem;\r\n}"] }]
    }], null, { summary: [{
            type: Input
        }], deliverSettle: [{
            type: Output
        }], deleteCart: [{
            type: Output
        }], makePending: [{
            type: Output
        }] }); })();
//# sourceMappingURL=pos-cart-summary.component.js.map