import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "src/app/services/api.service";
import * as i2 from "ngx-bootstrap/modal";
import * as i3 from "ngx-toastr";
import * as i4 from "src/app/services/common.service";
import * as i5 from "@angular/common";
import * as i6 from "@angular/forms";
function DeliveryOrderPackagingComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6)(1, "h6", 7);
    i0.ɵɵelement(2, "i", 8);
    i0.ɵɵtext(3, " No Store Delivery Order Packaging Found");
    i0.ɵɵelementEnd()();
} }
function DeliveryOrderPackagingComponent_div_4_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 17)(1, "h4");
    i0.ɵɵtext(2, "Current Customer Order due for Packaging as FIRST IN FIRST OUT basis");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "table", 18)(4, "thead")(5, "tr")(6, "th", 19);
    i0.ɵɵtext(7, "Customer ID");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "th", 19);
    i0.ɵɵtext(9, "Order No.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "th", 19);
    i0.ɵɵtext(11, "Order Date & Time");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "th", 19);
    i0.ɵɵtext(13, "on Package Job");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(14, "tbody")(15, "tr")(16, "td");
    i0.ɵɵtext(17);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "td");
    i0.ɵɵtext(19);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "td");
    i0.ɵɵtext(21, "xxxxxxx");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "td");
    i0.ɵɵelement(23, "img", 20);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(24, "div", 21)(25, "div", 9)(26, "div", 22);
    i0.ɵɵelement(27, "i", 23);
    i0.ɵɵtext(28, " Total Pending Order for Packaging == ");
    i0.ɵɵelementStart(29, "strong");
    i0.ɵɵtext(30);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(31, "div", 24);
    i0.ɵɵtext(32);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(17);
    i0.ɵɵtextInterpolate(ctx_r6.customerID);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r6.orderNumber);
    i0.ɵɵadvance(11);
    i0.ɵɵtextInterpolate(ctx_r6.NoOfRecords);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" Delivery Type: ", ctx_r6.deliveryType, " ");
} }
function DeliveryOrderPackagingComponent_div_4_div_10_tr_24_div_29_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 37);
    i0.ɵɵtext(1, " Please match value to order quantity ");
    i0.ɵɵelementEnd();
} }
function DeliveryOrderPackagingComponent_div_4_div_10_tr_24_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr")(1, "td", 32);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td");
    i0.ɵɵtext(4);
    i0.ɵɵelement(5, "br");
    i0.ɵɵelementStart(6, "small");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "td");
    i0.ɵɵtext(9);
    i0.ɵɵelement(10, "br");
    i0.ɵɵelementStart(11, "small");
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "td");
    i0.ɵɵtext(14);
    i0.ɵɵelement(15, "br");
    i0.ɵɵelementStart(16, "small");
    i0.ɵɵtext(17);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(18, "td");
    i0.ɵɵtext(19);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "td")(21, "button", 33);
    i0.ɵɵtext(22, "Scan BarCode for Outsale");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(23, "br");
    i0.ɵɵelementStart(24, "small");
    i0.ɵɵtext(25);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "p", 34);
    i0.ɵɵtext(27, "Confirm Brand/SubItem Quantity ");
    i0.ɵɵelementStart(28, "input", 35);
    i0.ɵɵlistener("ngModel", function DeliveryOrderPackagingComponent_div_4_div_10_tr_24_Template_input_ngModel_28_listener() { i0.ɵɵrestoreView(_r14); const ctx_r13 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r13.subItemQuantity); })("change", function DeliveryOrderPackagingComponent_div_4_div_10_tr_24_Template_input_change_28_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r15 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r15.onChangeEvent($event)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(29, DeliveryOrderPackagingComponent_div_4_div_10_tr_24_div_29_Template, 2, 0, "div", 36);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const subitem_r10 = ctx.$implicit;
    const i_r11 = ctx.index;
    const ctx_r9 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i_r11 + 1);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(subitem_r10.RETAIL_D2C_PRODUCT_NAME);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("ID: ", subitem_r10.RETAIL_D2C_PRODUCT_ID, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(subitem_r10.RETAIL_D2C_ITEM_NAME);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("ID: ", subitem_r10.RETAIL_D2C_ITEM_ID, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(subitem_r10.RETAIL_D2C_SUBITEM_NAME);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("ID: ", subitem_r10.RETAIL_D2C_SUBITEM_ID, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(subitem_r10.RETAIL_D2C_SUBITEM_QUANTITY_COUNT);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate1("Out Quantity: ", subitem_r10.RETAIL_D2C_SUBITEM_QUANTITY_COUNT, "");
    i0.ɵɵadvance(3);
    i0.ɵɵpropertyInterpolate("value", subitem_r10.RETAIL_D2C_SUBITEM_QUANTITY_COUNT);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", subitem_r10.RETAIL_D2C_SUBITEM_QUANTITY_COUNT != ctx_r9.subItemQuantity);
} }
function DeliveryOrderPackagingComponent_div_4_div_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 25)(1, "div", 9)(2, "div", 10)(3, "div", 26);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(5, "div", 27)(6, "div", 9)(7, "div", 17)(8, "table", 28)(9, "thead")(10, "tr")(11, "th");
    i0.ɵɵtext(12, "S. No.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "th");
    i0.ɵɵtext(14, "Product Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "th");
    i0.ɵɵtext(16, "Item Brand");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "th");
    i0.ɵɵtext(18, "Sub-Item Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "th");
    i0.ɵɵtext(20, "Order Quantity");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "th");
    i0.ɵɵtext(22, "Inventory Out");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(23, "tbody");
    i0.ɵɵtemplate(24, DeliveryOrderPackagingComponent_div_4_div_10_tr_24_Template, 30, 11, "tr", 29);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(25, "div", 10)(26, "div", 30)(27, "table", 28)(28, "tr")(29, "td", 31)(30, "strong");
    i0.ɵɵtext(31, "Item ID BarCode sale");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(32, "tr")(33, "td");
    i0.ɵɵtext(34, "01");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(35, "td");
    i0.ɵɵtext(36, "5679009988");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(37, "tr")(38, "td");
    i0.ɵɵtext(39, "02");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(40, "td");
    i0.ɵɵtext(41, "5679009966");
    i0.ɵɵelementEnd()()()()()()()();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("Cart - ", ctx_r7.cartNo, "");
    i0.ɵɵadvance(20);
    i0.ɵɵproperty("ngForOf", ctx_r7.subItemsData);
} }
function DeliveryOrderPackagingComponent_div_4_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 38)(1, "div", 39);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 40)(4, "label");
    i0.ɵɵtext(5, "Inventory Out & Order Quantity Matched");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "select", 41);
    i0.ɵɵlistener("change", function DeliveryOrderPackagingComponent_div_4_div_11_Template_select_change_6_listener($event) { i0.ɵɵrestoreView(_r17); const ctx_r16 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r16.onChangeInventory($event.target.value)); });
    i0.ɵɵelementStart(7, "option", 42);
    i0.ɵɵtext(8, "Select");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "option", 43);
    i0.ɵɵtext(10, "Yes");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "option", 44);
    i0.ɵɵtext(12, "No");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "button", 45);
    i0.ɵɵlistener("click", function DeliveryOrderPackagingComponent_div_4_div_11_Template_button_click_13_listener() { i0.ɵɵrestoreView(_r17); const ctx_r18 = i0.ɵɵnextContext(2); const _r2 = i0.ɵɵreference(6); return i0.ɵɵresetView(ctx_r18.openModal(_r2)); });
    i0.ɵɵtext(14, "Physical Check out from Inventory & Print Sticker");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Total Package(s): ", ctx_r8.totalPackage, "");
    i0.ɵɵadvance(11);
    i0.ɵɵproperty("disabled", ctx_r8.isInventoryYes);
} }
function DeliveryOrderPackagingComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r20 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div")(1, "div", 6)(2, "div")(3, "div", 9)(4, "div", 10)(5, "div", 11);
    i0.ɵɵelement(6, "img", 12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "button", 13);
    i0.ɵɵlistener("click", function DeliveryOrderPackagingComponent_div_4_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r20); const ctx_r19 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r19.storeDeliveryOrderPackagingWF()); });
    i0.ɵɵtext(8, "Click here for new packaging");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(9, DeliveryOrderPackagingComponent_div_4_div_9_Template, 33, 4, "div", 14);
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(10, DeliveryOrderPackagingComponent_div_4_div_10_Template, 42, 2, "div", 15);
    i0.ɵɵtemplate(11, DeliveryOrderPackagingComponent_div_4_div_11_Template, 15, 2, "div", 16);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(9);
    i0.ɵɵproperty("ngIf", ctx_r1.orderPackagingData);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.orderPackagingData);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.orderPackagingData);
} }
function DeliveryOrderPackagingComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r22 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 46)(1, "h4", 47);
    i0.ɵɵtext(2, "Inventory Details");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 48);
    i0.ɵɵlistener("click", function DeliveryOrderPackagingComponent_ng_template_5_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r22); const ctx_r21 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r21.modalRef.hide()); });
    i0.ɵɵelementStart(4, "span", 49);
    i0.ɵɵtext(5, "\u00D7");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(6, "div", 50)(7, "ul", 51)(8, "li", 52);
    i0.ɵɵtext(9, " Inventory auto done flag ");
    i0.ɵɵelementStart(10, "span", 53);
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "li", 52);
    i0.ɵɵtext(13, " Print sticker flag ");
    i0.ɵɵelementStart(14, "span", 53);
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "li", 52)(17, "button", 54);
    i0.ɵɵtext(18, "Print Order Sticker");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(19, "li", 52);
    i0.ɵɵtext(20, " Sticker Printed and patched on Order Packets ");
    i0.ɵɵelementStart(21, "span", 55)(22, "select", 56)(23, "option");
    i0.ɵɵtext(24, "Yes");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "option");
    i0.ɵɵtext(26, "No");
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelement(27, "br");
    i0.ɵɵelementStart(28, "button", 57);
    i0.ɵɵlistener("click", function DeliveryOrderPackagingComponent_ng_template_5_Template_button_click_28_listener() { i0.ɵɵrestoreView(_r22); const ctx_r23 = i0.ɵɵnextContext(); const _r4 = i0.ɵɵreference(8); return i0.ɵɵresetView(ctx_r23.packaingDoneOrderDeliveryReady(_r4)); });
    i0.ɵɵtext(29, "Proceed for packaging done & order ready for Delivery");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(11);
    i0.ɵɵtextInterpolate(ctx_r3.inventoryFlag);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r3.printingFlag);
} }
function DeliveryOrderPackagingComponent_ng_template_7_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    const _r28 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 50)(2, "div", 62)(3, "div", 63)(4, "p", 64);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "h5", 65);
    i0.ɵɵtext(7, "Order Number: ");
    i0.ɵɵelementStart(8, "strong");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "div", 9)(11, "div", 66);
    i0.ɵɵtext(12, "Storage Rack-ID:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "div", 66);
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(15, "div", 9)(16, "div", 66);
    i0.ɵɵtext(17, "Allocated Storage Rack Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "div", 66);
    i0.ɵɵtext(19);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(20, "div", 9)(21, "div", 66);
    i0.ɵɵtext(22, "Total Packets in Orders");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "div", 66);
    i0.ɵɵtext(24);
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(25, "div", 67)(26, "button", 68);
    i0.ɵɵlistener("click", function DeliveryOrderPackagingComponent_ng_template_7_ng_container_6_Template_button_click_26_listener() { i0.ɵɵrestoreView(_r28); const ctx_r27 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r27.modalRef2 == null ? null : ctx_r27.modalRef2.hide()); });
    i0.ɵɵtext(27, "Close");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r24 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r24.orderPlace.Message);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r24.orderPlace.RETAIL_ORDER_NUMBR);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r24.orderPlace.RETAIL_D2C_SORAGE_RACK_ID);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r24.orderPlace.RETAIL_D2C_STORAGE_RACK_NAME);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r24.orderPlace.TOTAL_PACKETS_IN_ORDER);
} }
function DeliveryOrderPackagingComponent_ng_template_7_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 69);
    i0.ɵɵelement(1, "i", 70);
    i0.ɵɵtext(2, " No Store Delivery Order Packaging Found");
    i0.ɵɵelementEnd();
} }
function DeliveryOrderPackagingComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    const _r30 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 46)(1, "h4", 47);
    i0.ɵɵtext(2, "Order Details");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 58);
    i0.ɵɵlistener("click", function DeliveryOrderPackagingComponent_ng_template_7_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r30); const ctx_r29 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r29.modalRef2 == null ? null : ctx_r29.modalRef2.hide()); });
    i0.ɵɵelementStart(4, "span", 59);
    i0.ɵɵtext(5, "\u00D7");
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(6, DeliveryOrderPackagingComponent_ng_template_7_ng_container_6_Template, 28, 5, "ng-container", 60);
    i0.ɵɵtemplate(7, DeliveryOrderPackagingComponent_ng_template_7_ng_template_7_Template, 3, 0, "ng-template", null, 61, i0.ɵɵtemplateRefExtractor);
} if (rf & 2) {
    const _r25 = i0.ɵɵreference(8);
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngIf", ctx_r5.orderPlace)("ngIfElse", _r25);
} }
export class DeliveryOrderPackagingComponent {
    constructor(apiService, modalService, toastr, commonservice) {
        this.apiService = apiService;
        this.modalService = modalService;
        this.toastr = toastr;
        this.commonservice = commonservice;
        this.imgURL = this.apiService.imgURL;
        this.isInventoryYes = true;
        this.config = {
            backdrop: true,
            ignoreBackdropClick: true
        };
        this.datalist = false;
        this.getlogindata = localStorage.getItem('logindata');
        this.domainid = localStorage.getItem('getDomainID');
        this.getlogindata = JSON.parse(this.getlogindata);
        this.accountid = this.getlogindata.RETAIL_D2C_ACCT_ID;
        this.subaccountid = this.getlogindata.RETAIL_D2C_USR_SUBACCT_ID;
        this.storeid = this.getlogindata.RETAIL_D2C_ACCT_INTRNL_OFFICE_REGID;
        this.storeName = this.getlogindata.RETAIL_D2C_SUBACCT_OFFICE_NAME;
    }
    ngOnInit() {
    }
    openModal(template) {
        this.modalRef = this.modalService.show(template);
        this.PhysicalCheckoutFromInventory();
    }
    storeDeliveryOrderPackagingWF() {
        let packagingData = {
            AccountId: this.accountid,
            SubAccountId: this.subaccountid,
            OfficeId: this.storeid,
        };
        this.apiService.postCall(this.apiService.baseURL + '/StoreDeliveryOrderPackagingWF', packagingData)
            .subscribe(data => {
            console.log(data);
            this.orderPackagingData = data;
            if (data == "No StoreDeliveryOrderPackaging Found") {
                this.datalist = true;
                this.toastr.error('No Store Delivery Order Packaging Found', '', {
                    timeOut: 5000,
                });
            }
            this.subItemsData = data.subItems;
            this.orderNumber = data.RETAIL_D2C_ORDER_NUMBR;
            this.NoOfRecords = data.NoOfRecords;
            this.customerID = data.RETAIL_D2C_CUSTOMR_ID;
            this.cartNo = data.RETAIL_D2C_CUSTMR_CART_NUMBR;
            this.totalPackage = data.RETAIL_D2C_ORDER_PACKAGES_COUNT;
            //  this.totalPackage = 1;
            if (data.RETAIL_D2C_DELIVERY_TYPE_HOME_DELIVERY_FLG == true) {
                this.deliveryType = "Home Delivery";
            }
            if (data.RETAIL_D2C_DELIVERY_TYPE_SELF_TAKEAWAY_FLG == true) {
                this.deliveryType = "Self Delivery";
            }
            // this.toastr.success(data, '', {
            //  timeOut: 5000,
            // });
        }, (error) => {
            this.toastr.error(error.error.Message, '', {
                timeOut: 5000,
            });
        });
    }
    PhysicalCheckoutFromInventory() {
        if (this.deliveryType == "Home Delivery") {
            this.deliveryFlag = true;
            this.deliveryFlag1 = false;
        }
        if (this.deliveryType == "Self Delivery") {
            this.deliveryFlag = false;
            this.deliveryFlag1 = true;
        }
        let checkoutInventoryData = {
            RETAIL_ACCT_ID: this.accountid,
            RETAIL_SUBACCT_ID: this.subaccountid,
            RETAIL_OFFICE_ID: this.storeid,
            RETAIL_DOMAIN_ID: 1,
            RETAIL_CUSTOMR_ID: this.customerID,
            RETAIL_CART_ID: this.cartNo,
            RETAIL_ORDER_NUMBR: this.orderNumber,
            RETAIL_D2C_ORDER_PACKAGES_COUNT: this.totalPackage,
            // RETAIL_D2C_ORDER_PACKAGES_COUNT: 1,
            RETAIL_D2C_DELIVERY_TYPE_SELF_TAKEAWAY_FLG: this.deliveryFlag1,
            RETAIL_D2C_DELIVERY_TYPE_HOME_DELIVERY_FLG: this.deliveryFlag,
        };
        console.log(checkoutInventoryData);
        this.apiService.postCall(this.apiService.baseURL + '/PhysicalCheckoutFromInventory', checkoutInventoryData)
            .subscribe(data => {
            console.log(data);
            this.orderNumber = data.print_Order_Sticker[0].RETAIL_ORDER_NUMBR;
            if (data.InventoryFlag == true) {
                this.inventoryFlag = "Yes";
            }
            if (data.InventoryFlag == false) {
                this.inventoryFlag = "No";
            }
            if (data.PrintingFlag == true) {
                this.printingFlag = "Yes";
            }
            if (data.PrintingFlag == false) {
                this.printingFlag = "No";
            }
        }, (error) => {
            this.toastr.error(error, '', {
                timeOut: 5000,
            });
        });
    }
    packaingDoneOrderDeliveryReady(templateNested) {
        if (this.deliveryType == "Home Delivery") {
            this.deliveryFlag = true;
            this.deliveryFlag1 = false;
        }
        if (this.deliveryType == "Self Delivery") {
            this.deliveryFlag = false;
            this.deliveryFlag1 = true;
        }
        let orderDeliveryReadyData = {
            RETAIL_ACCT_ID: this.accountid,
            RETAIL_SUBACCT_ID: this.subaccountid,
            RETAIL_OFFICE_ID: this.storeid,
            RETAIL_DOMAIN_ID: 1,
            RETAIL_CUSTOMR_ID: this.customerID,
            RETAIL_CART_ID: this.cartNo,
            RETAIL_ORDER_NUMBR: this.orderNumber,
            TOTAL_PACKETS_IN_ORDER: this.totalPackage,
            RETAIL_D2C_DELIVERY_TYPE_SELF_TAKEAWAY_FLG: this.deliveryFlag1,
            RETAIL_D2C_DELIVERY_TYPE_HOME_DELIVERY_FLG: this.deliveryFlag,
        };
        console.log(orderDeliveryReadyData);
        this.apiService.postCall(this.apiService.baseURL + '/PackaingDoneOrderDeliveryReady', orderDeliveryReadyData)
            .subscribe(data => {
            console.log(data);
            this.orderPlace = data;
            this.storeDeliveryOrderPackagingWF();
            // if(this.orderPlace === 'object'){
            //   this.toastr.success(data, '', {
            //     timeOut: 5000,
            //   });
            // }
            // else {
            //   this.toastr.error(data, '', {
            //     timeOut: 5000,
            //   });
            // }
            this.modalRef.hide();
            this.modalRef2 = this.modalService.show(templateNested, this.config);
        }, (error) => {
            this.toastr.error(error, '', {
                timeOut: 5000,
            });
        });
    }
    onChangeInventory(value) {
        if (value == "Yes") {
            this.isInventoryYes = false;
        }
        else {
            this.isInventoryYes = true;
        }
    }
    onChangeEvent(event) {
        this.subItemQuantity = event.target.value;
        console.log(this.subItemQuantity);
    }
}
DeliveryOrderPackagingComponent.ɵfac = function DeliveryOrderPackagingComponent_Factory(t) { return new (t || DeliveryOrderPackagingComponent)(i0.ɵɵdirectiveInject(i1.ApiService), i0.ɵɵdirectiveInject(i2.BsModalService), i0.ɵɵdirectiveInject(i3.ToastrService), i0.ɵɵdirectiveInject(i4.CommonService)); };
DeliveryOrderPackagingComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DeliveryOrderPackagingComponent, selectors: [["app-delivery-order-packaging"]], decls: 9, vars: 2, consts: [[1, "content"], [1, "heading-title"], ["class", "toplevel card", 4, "ngIf"], [4, "ngIf"], ["template", ""], ["templateNested", ""], [1, "toplevel", "card"], [1, "no-data"], [1, "icofont-exclamation-tringle"], [1, "row"], [1, "col-md-3"], [1, "default-img"], ["src", "assets/images/default-img.jpg"], [1, "btn", "new_package_btn", 3, "click"], ["class", "col-md-9", 4, "ngIf"], ["class", "card exiting-office-table orderStatus", 4, "ngIf"], ["class", "card inventory-out-order", 4, "ngIf"], [1, "col-md-9"], [1, "table", "table-bordered", "customer-order-table"], ["scope", "col"], ["src", "assets/images/active_icon.png"], ["role", "alert", 1, "alert", "alert-warning"], [1, "col-md-8"], [1, "fa", "fa-exclamation-triangle"], [1, "col-md-4"], [1, "card", "exiting-office-table", "orderStatus"], [1, "card-header"], [1, "card-body", "order-item-list", "pa-0"], [1, "table", "table-bordered"], [4, "ngFor", "ngForOf"], [1, "vipDiv"], ["colspan", "2"], [2, "min-width", "50px"], ["type", "button", 1, "btn", "grey-btn", "btn-dark"], [1, "cbq"], ["type", "text", 1, "form-control", 3, "value", "ngModel", "change"], ["class", "error", 4, "ngIf"], [1, "error"], [1, "card", "inventory-out-order"], [1, "t_package"], [1, "form-group", "form-inline", "mb-0"], [1, "form-control", 3, "change"], ["selected", "", "value", "Select"], ["value", "Yes"], ["value", "No"], ["type", "button", "data-toggle", "modal", 1, "btn", "custom-btn", 3, "disabled", "click"], [1, "modal-header"], [1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "list-group"], [1, "list-group-item", "d-flex", "justify-content-between", "align-items-center"], [1, "badge", "badge-primary", "badge-pill"], ["type", "button", 1, "btn", "custom-btn"], [1, "width-100"], [1, "form-control"], ["type", "button", 1, "btn", "custom-btn", 3, "click"], ["type", "button", "aria-label", "Close", 1, "btn-close", "close", "pull-right", 3, "click"], ["aria-hidden", "true", 1, "visually-hidden"], [4, "ngIf", "ngIfElse"], ["resultNA", ""], [1, "card"], [1, "card-body", "pa-0"], [2, "color", "#ff5722"], [1, "card-title"], [1, "col-md-6"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], [1, "p-3", "info-text"], [1, "icofont-close-line-circled"]], template: function DeliveryOrderPackagingComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "h1", 1);
        i0.ɵɵtext(2, "Delivery Order Packaging Workflow Kiosk");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(3, DeliveryOrderPackagingComponent_div_3_Template, 4, 0, "div", 2);
        i0.ɵɵtemplate(4, DeliveryOrderPackagingComponent_div_4_Template, 12, 3, "div", 3);
        i0.ɵɵtemplate(5, DeliveryOrderPackagingComponent_ng_template_5_Template, 30, 2, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(7, DeliveryOrderPackagingComponent_ng_template_7_Template, 9, 2, "ng-template", null, 5, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", ctx.datalist);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.datalist);
    } }, dependencies: [i5.NgForOf, i5.NgIf, i6.NgSelectOption, i6.ɵNgSelectMultipleOption, i6.DefaultValueAccessor, i6.NgControlStatus, i6.NgModel], styles: [".toplevel[_ngcontent-%COMP%] {\r\n    background: #fff;\r\n    padding: 20px;\r\n    margin-bottom: 15px;\r\n    margin-top: 10px;\r\n    border-radius: 5px;\r\n}\r\n\r\n.orderStatus[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    max-width: 50px;\r\n}\r\n\r\n.vipDiv[_ngcontent-%COMP%] {\r\n    background: #f8f9fa;\r\n    padding: 15px;\r\n    border-radius: 3px;\r\n    min-height: 210px;\r\n}\r\n\r\n.orderStatus[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    vertical-align: middle;\r\n}\r\n\r\n.orderStatus[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n    font-size: 13px;\r\n}\r\n\r\n.bottom-btn[_ngcontent-%COMP%] {\r\n    float: right;\r\n    margin: 15px 0 20px;\r\n}\r\n\r\n.alert.alert-danger[_ngcontent-%COMP%] {\r\n    margin: 15px 0 0;\r\n    padding: 10px;\r\n}\r\n\r\n.alert[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\r\n    font-size: 25px;\r\n    vertical-align: middle;\r\n    margin-left: 5px;\r\n}\r\n\r\n.default-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    border-radius: 10px;\r\n    box-shadow: 0 0 5px #eee;\r\n}\r\n\r\n.customer-order-table[_ngcontent-%COMP%]\r\n{  \r\n     td {\r\n        padding: 8px;\r\n    }\r\n    \r\n    img {\r\n    max-width: 65px;\r\n}\r\n\r\n\r\n}\r\n\r\n.alert-warning[_ngcontent-%COMP%] {\r\n    font-size: 15px;\r\n    margin: 0;\r\n}\r\n\r\n.card-body.order-item-list[_ngcontent-%COMP%] {\r\n    margin-top: 20px;\r\n}\r\n\r\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    padding: 6px;\r\n    line-height: 15px;\r\n}\r\n\r\np.cbq[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    max-width: 100px;\r\n    margin: 10px auto;\r\n}\r\n\r\n.card.inventory-out-order[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\r\n    margin: 0 15px;\r\n    width: 80px;\r\n}\r\n\r\nspan.width-100[_ngcontent-%COMP%] {\r\n    width: 100px;\r\n}\r\n\r\nselect.form-control[_ngcontent-%COMP%] {\r\n    width: 70px;\r\n    float: right;\r\n}\r\n\r\n.badge-primary[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n    background-color: #00bcd6;\r\n    padding: 8px 20px;\r\n}\r\n\r\nbutton.btn.new_package_btn[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n    width: 100%;\r\n    margin-top: 5px;\r\n    background: #bd2130;\r\n    color: #fff;\r\n}\r\n\r\n.error[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    font-size: 9px;\r\n    color: red;\r\n    bottom: 20px;\r\n    text-align: center;\r\n    padding-left: 10px;\r\n}\r\n\r\n.info-text[_ngcontent-%COMP%] {\r\n    color: #bd2130;\r\n    font-size: 14px;\r\n\r\n i {\r\n    font-size: 30px;\r\n    vertical-align: middle;\r\n    margin-right: 5px;\r\n}\r\n\r\n}\r\n\r\n.no-data[_ngcontent-%COMP%] {\r\n    p {\r\n        font-size: 15px;\r\n        font-weight: 600;\r\n    }\r\n img {\r\n    max-width: 30px;\r\n    margin-right: 5px;\r\n}\r\n}\r\n\r\n.modal-content[_ngcontent-%COMP%]   .card-body.pa-0[_ngcontent-%COMP%]   .col-md-6[_ngcontent-%COMP%]    + .col-md-6[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n    line-height: 25px;\r\n}\r\n\r\n.no-data[_ngcontent-%COMP%]{\r\n    color: #bd2130;\r\n    margin: 0;\r\n i {\r\n    font-size: 25px;\r\n    color: #bd2130;\r\n}\r\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DeliveryOrderPackagingComponent, [{
        type: Component,
        args: [{ selector: 'app-delivery-order-packaging', template: "<div class=\"content\">\n  <h1 class=\"heading-title\">Delivery Order Packaging Workflow Kiosk</h1>\n  <!-- <h6>Store: <strong>Daizy Wines Alpha Road Hazaribagh</strong></h6> \n  *ngIf=\"!datalist; else elseBlock\n  -->\n  <div *ngIf=\"datalist\" class=\"toplevel card\">\n<h6 class=\"no-data\"><i class=\"icofont-exclamation-tringle\"></i> No Store Delivery Order Packaging Found</h6>\n  </div>\n  <div *ngIf=\"!datalist\">\n   <div class=\"toplevel card\">\n    <div>\n      <div class=\"row\">\n        <div class=\"col-md-3\">\n          <div class=\"default-img\">\n            <img src=\"assets/images/default-img.jpg\" />\n          </div>\n          <button (click)=\"storeDeliveryOrderPackagingWF()\" class=\"btn new_package_btn\">Click here for new packaging</button>\n        </div>\n        <div class=\"col-md-9\" *ngIf=\"orderPackagingData\">\n          <h4>Current Customer Order due for Packaging as FIRST IN FIRST OUT basis</h4>\n          <table class=\"table table-bordered customer-order-table\">\n            <thead>\n              <tr>\n                <th scope=\"col\">Customer ID</th>\n                <th scope=\"col\">Order No.</th>\n                <th scope=\"col\">Order Date & Time</th>\n                <th scope=\"col\">on Package Job</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td>{{customerID}}</td>\n                <td>{{orderNumber}}</td>\n                <td>xxxxxxx</td>\n                <td> <img src=\"assets/images/active_icon.png\" /></td>\n              </tr>\n            </tbody>\n          </table>\n          <div class=\"alert alert-warning\" role=\"alert\">\n            <div class=\"row\">\n              <div class=\"col-md-8\">\n                <i class=\"fa fa-exclamation-triangle\"></i> Total Pending Order for Packaging ==\n                <strong>{{NoOfRecords}}</strong>\n              </div>\n              <div class=\"col-md-4\">\n                Delivery Type: {{deliveryType}}\n              </div>\n            </div>\n\n          </div>\n        </div>\n      </div>\n    </div>\n\n    </div>\n\n\n   <div class=\"card exiting-office-table orderStatus\" *ngIf=\"orderPackagingData\">\n    <div class=\"row\">\n      <div class=\"col-md-3\">\n        <div class=\"card-header\">Cart - {{cartNo}}</div>\n      </div>\n\n    </div>\n\n    <div class=\"card-body order-item-list pa-0\">\n\n      <div class=\"row\">\n        <div class=\"col-md-9\">\n          <table class=\"table table-bordered\">\n            <thead>\n              <tr>\n                <th>S. No.</th>\n                <th>Product Name</th>\n                <th>Item Brand</th>\n                <th>Sub-Item Name</th>\n                <th>Order Quantity</th>\n                <th>Inventory Out</th>\n\n\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let subitem of subItemsData; let i = index\">\n                <td style=\"min-width: 50px;\">{{i+1}}</td>\n                <td>{{subitem.RETAIL_D2C_PRODUCT_NAME}}<br><small>ID: {{subitem.RETAIL_D2C_PRODUCT_ID}}</small></td>\n                <td>{{subitem.RETAIL_D2C_ITEM_NAME}}<br><small>ID: {{subitem.RETAIL_D2C_ITEM_ID}}</small></td>\n                <td>{{subitem.RETAIL_D2C_SUBITEM_NAME}}<br><small>ID: {{subitem.RETAIL_D2C_SUBITEM_ID}}</small></td>\n                <td>{{subitem.RETAIL_D2C_SUBITEM_QUANTITY_COUNT}}</td>\n                <td>\n                  <button type=\"button\" class=\"btn grey-btn btn-dark\">Scan BarCode for Outsale</button>\n                  <br><small>Out Quantity: {{subitem.RETAIL_D2C_SUBITEM_QUANTITY_COUNT}}</small>\n                  <p class=\"cbq\">Confirm Brand/SubItem Quantity\n                    <input (ngModel)=\"subItemQuantity\" (change)=\"onChangeEvent($event)\"\n                      value=\"{{subitem.RETAIL_D2C_SUBITEM_QUANTITY_COUNT}}\" class=\"form-control\" type=\"text\" />\n                  </p>\n                  <div class=\"error\" *ngIf='subitem.RETAIL_D2C_SUBITEM_QUANTITY_COUNT != subItemQuantity'>\n                    Please match value to order quantity\n                  </div>\n                </td>\n              </tr>\n\n\n            </tbody>\n          </table>\n        </div>\n        <div class=\"col-md-3\">\n          <div class=\"vipDiv\">\n            <table class=\"table table-bordered\">\n              <tr>\n                <td colspan=\"2\"><strong>Item ID BarCode sale</strong></td>\n              </tr>\n              <tr>\n                <td>01</td>\n                <td>5679009988</td>\n              </tr>\n              <tr>\n                <td>02</td>\n                <td>5679009966</td>\n              </tr>\n            </table>\n          </div>\n        </div>\n      </div>\n    </div>\n\n   </div>\n\n   <div class=\"card inventory-out-order\" *ngIf=\"orderPackagingData\">\n    <div class=\"t_package\">Total Package(s): {{totalPackage}}</div>\n    <div class=\"form-group form-inline mb-0\">\n      <label>Inventory Out & Order Quantity Matched</label>\n      <select (change)=\"onChangeInventory($event.target.value)\" class=\"form-control\">\n        <option selected value=\"Select\">Select</option>\n        <option value=\"Yes\">Yes</option>\n        <option value=\"No\">No</option>\n      </select>\n      <button type=\"button\" [disabled]=\"isInventoryYes\" data-toggle=\"modal\" (click)=\"openModal(template)\"\n        class=\"btn custom-btn\">Physical Check out\n        from Inventory & Print Sticker</button>\n    </div>\n   </div>\n  </div>\n  <!-- <ng-template #elseBlock>\n    <div class=\"toplevel no-data card\">\n     <p><img src=\"assets/images/deactive_icon1.png\" /> No Store Delivery Order Packaging Found</p>\n    </div>\n  </ng-template> -->\n\n  <ng-template #template>\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title pull-left\">Inventory Details</h4>\n      <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <ul class=\"list-group\">\n        <li class=\"list-group-item d-flex justify-content-between align-items-center\">\n          Inventory auto done flag\n          <span class=\"badge badge-primary badge-pill\">{{inventoryFlag}}</span>\n        </li>\n        <li class=\"list-group-item d-flex justify-content-between align-items-center\">\n          Print sticker flag\n          <span class=\"badge badge-primary badge-pill\">{{printingFlag}}</span>\n        </li>\n\n        <li class=\"list-group-item d-flex justify-content-between align-items-center\">\n          <button type=\"button\" class=\"btn custom-btn\">Print Order Sticker</button>\n        </li>\n        <li class=\"list-group-item d-flex justify-content-between align-items-center\">\n          Sticker Printed and patched on Order Packets\n          <span class=\"width-100\"><select class=\"form-control\">\n              <option>Yes</option>\n              <option>No</option>\n            </select></span>\n        </li>\n      </ul>\n      <br>\n      <button type=\"button\" (click)=\"packaingDoneOrderDeliveryReady(templateNested)\" class=\"btn custom-btn\">Proceed for\n        packaging done & order ready for Delivery</button>\n    </div>\n\n\n  </ng-template>\n\n</div>\n\n\n\n\n\n\n\n\n\n<ng-template #templateNested>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\">Order Details</h4>\n    <button type=\"button\" class=\"btn-close close pull-right\" aria-label=\"Close\" (click)=\"modalRef2?.hide()\">\n      <span aria-hidden=\"true\" class=\"visually-hidden\">&times;</span>\n    </button>\n  </div>\n  <ng-container *ngIf=\"orderPlace else resultNA;\">\n    <div class=\"modal-body\">\n      <div class=\"card\">\n        <div class=\"card-body pa-0\">\n          <p style=\"color: #ff5722;\">{{orderPlace.Message}}</p>\n          <h5 class=\"card-title\">Order Number: <strong>{{orderPlace.RETAIL_ORDER_NUMBR}}</strong></h5>\n          <div class=\"row\">\n            <div class=\"col-md-6\">Storage Rack-ID:</div>\n            <div class=\"col-md-6\">{{orderPlace.RETAIL_D2C_SORAGE_RACK_ID}}</div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-md-6\">Allocated Storage Rack Name</div>\n            <div class=\"col-md-6\">{{orderPlace.RETAIL_D2C_STORAGE_RACK_NAME}}</div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-6\">Total Packets in Orders</div>\n            <div class=\"col-md-6\">{{orderPlace.TOTAL_PACKETS_IN_ORDER}}</div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-secondary\" (click)=\"modalRef2?.hide()\">Close</button>\n    </div>\n  </ng-container>\n  <ng-template #resultNA>\n    <p class=\"p-3 info-text\"><i class=\"icofont-close-line-circled\"></i> No Store Delivery Order Packaging Found</p>\n  </ng-template>\n</ng-template>", styles: [".toplevel {\r\n    background: #fff;\r\n    padding: 20px;\r\n    margin-bottom: 15px;\r\n    margin-top: 10px;\r\n    border-radius: 5px;\r\n}\r\n\r\n.orderStatus td img {\r\n    max-width: 50px;\r\n}\r\n\r\n.vipDiv {\r\n    background: #f8f9fa;\r\n    padding: 15px;\r\n    border-radius: 3px;\r\n    min-height: 210px;\r\n}\r\n\r\n.orderStatus td {\r\n    vertical-align: middle;\r\n}\r\n\r\n.orderStatus td .btn {\r\n    font-size: 13px;\r\n}\r\n\r\n.bottom-btn {\r\n    float: right;\r\n    margin: 15px 0 20px;\r\n}\r\n\r\n.alert.alert-danger {\r\n    margin: 15px 0 0;\r\n    padding: 10px;\r\n}\r\n\r\n.alert .fa {\r\n    font-size: 25px;\r\n    vertical-align: middle;\r\n    margin-left: 5px;\r\n}\r\n\r\n.default-img img {\r\n    width: 100%;\r\n    border-radius: 10px;\r\n    box-shadow: 0 0 5px #eee;\r\n}\r\n\r\n.customer-order-table\r\n{  \r\n     td {\r\n        padding: 8px;\r\n    }\r\n    \r\n    img {\r\n    max-width: 65px;\r\n}\r\n\r\n\r\n}\r\n\r\n.alert-warning {\r\n    font-size: 15px;\r\n    margin: 0;\r\n}\r\n\r\n.card-body.order-item-list {\r\n    margin-top: 20px;\r\n}\r\n\r\n.table th, .table td {\r\n    padding: 6px;\r\n    line-height: 15px;\r\n}\r\n\r\np.cbq input {\r\n    max-width: 100px;\r\n    margin: 10px auto;\r\n}\r\n\r\n.card.inventory-out-order select {\r\n    margin: 0 15px;\r\n    width: 80px;\r\n}\r\n\r\nspan.width-100 {\r\n    width: 100px;\r\n}\r\n\r\nselect.form-control {\r\n    width: 70px;\r\n    float: right;\r\n}\r\n\r\n.badge-primary {\r\n    color: #fff;\r\n    background-color: #00bcd6;\r\n    padding: 8px 20px;\r\n}\r\n\r\nbutton.btn.new_package_btn {\r\n    font-size: 12px;\r\n    width: 100%;\r\n    margin-top: 5px;\r\n    background: #bd2130;\r\n    color: #fff;\r\n}\r\n\r\n.error {\r\n    position: absolute;\r\n    font-size: 9px;\r\n    color: red;\r\n    bottom: 20px;\r\n    text-align: center;\r\n    padding-left: 10px;\r\n}\r\n\r\n.info-text {\r\n    color: #bd2130;\r\n    font-size: 14px;\r\n\r\n i {\r\n    font-size: 30px;\r\n    vertical-align: middle;\r\n    margin-right: 5px;\r\n}\r\n\r\n}\r\n\r\n.no-data {\r\n    p {\r\n        font-size: 15px;\r\n        font-weight: 600;\r\n    }\r\n img {\r\n    max-width: 30px;\r\n    margin-right: 5px;\r\n}\r\n}\r\n\r\n.modal-content .card-body.pa-0 .col-md-6 + .col-md-6 {\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n    line-height: 25px;\r\n}\r\n\r\n.no-data{\r\n    color: #bd2130;\r\n    margin: 0;\r\n i {\r\n    font-size: 25px;\r\n    color: #bd2130;\r\n}\r\n}\r\n"] }]
    }], function () { return [{ type: i1.ApiService }, { type: i2.BsModalService }, { type: i3.ToastrService }, { type: i4.CommonService }]; }, null); })();
//# sourceMappingURL=delivery-order-packaging.component.js.map