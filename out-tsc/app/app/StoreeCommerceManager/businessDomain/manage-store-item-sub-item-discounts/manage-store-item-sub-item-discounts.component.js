import { Validators } from '@angular/forms';
import { Component, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "src/app/services/api.service";
import * as i2 from "ngx-bootstrap/modal";
import * as i3 from "@angular/forms";
import * as i4 from "ngx-toastr";
import * as i5 from "@angular/common";
import * as i6 from "ngx-bootstrap/tabs";
import * as i7 from "ngx-bootstrap/datepicker";
function ManageStoreItemSubItemDiscountsComponent_option_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 27);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const productline_r25 = ctx.$implicit;
    i0.ɵɵproperty("value", productline_r25.RETAIL_D2C_PRODUCT_ID);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", productline_r25.RETAIL_D2C_PRODUCT_NAME, "");
} }
function ManageStoreItemSubItemDiscountsComponent_option_28_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 27);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r26 = ctx.$implicit;
    i0.ɵɵproperty("value", item_r26.RETAIL_D2C_ITEM_ID);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", item_r26.RETAIL_D2C_ITEM_NAME, "");
} }
function ManageStoreItemSubItemDiscountsComponent_div_32_th_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th");
    i0.ɵɵtext(1, "Size");
    i0.ɵɵelementEnd();
} }
function ManageStoreItemSubItemDiscountsComponent_div_32_tr_44_td_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const itemSubitemDiscount_r29 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(itemSubitemDiscount_r29.RETAIL_D2C_SUBITEM_SIZE);
} }
function ManageStoreItemSubItemDiscountsComponent_div_32_tr_44_span_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵelement(1, "img", 43);
    i0.ɵɵelementEnd();
} }
function ManageStoreItemSubItemDiscountsComponent_div_32_tr_44_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 44);
} }
function ManageStoreItemSubItemDiscountsComponent_div_32_tr_44_span_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵelement(1, "img", 43);
    i0.ɵɵelementEnd();
} }
function ManageStoreItemSubItemDiscountsComponent_div_32_tr_44_ng_template_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 44);
} }
function ManageStoreItemSubItemDiscountsComponent_div_32_tr_44_Template(rf, ctx) { if (rf & 1) {
    const _r40 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr")(1, "td");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, ManageStoreItemSubItemDiscountsComponent_div_32_tr_44_td_5_Template, 2, 1, "td", 34);
    i0.ɵɵelementStart(6, "td");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "td");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "td");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "td");
    i0.ɵɵtext(13);
    i0.ɵɵpipe(14, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "td");
    i0.ɵɵtext(16);
    i0.ɵɵpipe(17, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "td", 36);
    i0.ɵɵtemplate(19, ManageStoreItemSubItemDiscountsComponent_div_32_tr_44_span_19_Template, 2, 0, "span", 37);
    i0.ɵɵtemplate(20, ManageStoreItemSubItemDiscountsComponent_div_32_tr_44_ng_template_20_Template, 1, 0, "ng-template", null, 38, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "td", 36);
    i0.ɵɵtemplate(23, ManageStoreItemSubItemDiscountsComponent_div_32_tr_44_span_23_Template, 2, 0, "span", 37);
    i0.ɵɵtemplate(24, ManageStoreItemSubItemDiscountsComponent_div_32_tr_44_ng_template_24_Template, 1, 0, "ng-template", null, 39, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "td");
    i0.ɵɵtext(27);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "td", 40);
    i0.ɵɵlistener("click", function ManageStoreItemSubItemDiscountsComponent_div_32_tr_44_Template_td_click_28_listener() { const restoredCtx = i0.ɵɵrestoreView(_r40); const itemSubitemDiscount_r29 = restoredCtx.$implicit; const ctx_r39 = i0.ɵɵnextContext(2); const _r5 = i0.ɵɵreference(36); return i0.ɵɵresetView(ctx_r39.selectSubItemPriceData(itemSubitemDiscount_r29, _r5)); });
    i0.ɵɵelement(29, "i", 41);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "td", 40);
    i0.ɵɵlistener("click", function ManageStoreItemSubItemDiscountsComponent_div_32_tr_44_Template_td_click_30_listener() { const restoredCtx = i0.ɵɵrestoreView(_r40); const itemSubitemDiscount_r29 = restoredCtx.$implicit; const ctx_r41 = i0.ɵɵnextContext(2); const _r3 = i0.ɵɵreference(34); return i0.ɵɵresetView(ctx_r41.selecttemSubtemDiscountData(itemSubitemDiscount_r29, _r3)); });
    i0.ɵɵelement(31, "i", 41);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(32, "td")(33, "a", 42);
    i0.ɵɵlistener("click", function ManageStoreItemSubItemDiscountsComponent_div_32_tr_44_Template_a_click_33_listener() { const restoredCtx = i0.ɵɵrestoreView(_r40); const itemSubitemDiscount_r29 = restoredCtx.$implicit; const ctx_r42 = i0.ɵɵnextContext(2); const _r23 = i0.ɵɵreference(54); return i0.ɵɵresetView(ctx_r42.openB2BModal(itemSubitemDiscount_r29, _r23)); });
    i0.ɵɵtext(34, "B2B");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const itemSubitemDiscount_r29 = ctx.$implicit;
    const i_r30 = ctx.index;
    const _r33 = i0.ɵɵreference(21);
    const _r36 = i0.ɵɵreference(25);
    const ctx_r28 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i_r30 + 1);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(itemSubitemDiscount_r29.RETAIL_D2C_SUBITEM_NAME);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r28.domainid == 1);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(itemSubitemDiscount_r29.RETAIL_D2C_SUBITEM_MRP);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(itemSubitemDiscount_r29.RETAIL_D2C_SUBITEM_CASE_MRP);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(itemSubitemDiscount_r29.DiscountId);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(14, 13, itemSubitemDiscount_r29.RETAIL_D2C_DISCOUNT_VALID_FROM_DATE, "dd/MM/yyyy"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(17, 16, itemSubitemDiscount_r29.RETAIL_D2C_DISCOUNT_VALID_TO_DATE, "dd/MM/yyyy"));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", itemSubitemDiscount_r29.RETAIL_D2C_DISCOUNT_VALIDITY_FLG)("ngIfElse", _r33);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", itemSubitemDiscount_r29.RETAIL_D2C_DISCOUNT_PERCENTG_FLG)("ngIfElse", _r36);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(itemSubitemDiscount_r29.RETAIL_D2C_DISCOUNT_FIGURE);
} }
function ManageStoreItemSubItemDiscountsComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 28)(1, "div", 29);
    i0.ɵɵtext(2, " Already Added MRP & Discounts ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 30)(4, "div", 31);
    i0.ɵɵtext(5, "Product Line: ");
    i0.ɵɵelementStart(6, "span");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "div", 31);
    i0.ɵɵtext(9, "Item: ");
    i0.ɵɵelementStart(10, "span");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(12, "div", 32)(13, "table", 33)(14, "thead")(15, "tr")(16, "th");
    i0.ɵɵtext(17, "Sr. No.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "th");
    i0.ɵɵtext(19, "Sub-Item Name");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(20, ManageStoreItemSubItemDiscountsComponent_div_32_th_20_Template, 2, 0, "th", 34);
    i0.ɵɵelementStart(21, "th");
    i0.ɵɵtext(22, "MRP/UNIT(Rs.)");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "th");
    i0.ɵɵtext(24, "Export Price(USD)");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "th");
    i0.ɵɵtext(26, "Discounts ID");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "th");
    i0.ɵɵtext(28, "Valid from");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(29, "th");
    i0.ɵɵtext(30, "Valid To");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(31, "th");
    i0.ɵɵtext(32, "Discount Validity");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(33, "th");
    i0.ɵɵtext(34, "%");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(35, "th");
    i0.ɵɵtext(36, "Discount");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(37, "th");
    i0.ɵɵtext(38, "MRP");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(39, "th");
    i0.ɵɵtext(40, "Discount");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(41, "th");
    i0.ɵɵtext(42, "\u00A0");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(43, "tbody");
    i0.ɵɵtemplate(44, ManageStoreItemSubItemDiscountsComponent_div_32_tr_44_Template, 35, 19, "tr", 35);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(ctx_r2.productName);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r2.itemName);
    i0.ɵɵadvance(9);
    i0.ɵɵproperty("ngIf", ctx_r2.domainid == 1);
    i0.ɵɵadvance(24);
    i0.ɵɵproperty("ngForOf", ctx_r2.manageStoreItemPDList);
} }
const _c0 = function () { return { dateInputFormat: "DD/MM/YYYY" }; };
function ManageStoreItemSubItemDiscountsComponent_ng_template_33_Template(rf, ctx) { if (rf & 1) {
    const _r44 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 45)(1, "h4", 46);
    i0.ɵɵtext(2, "Edit Store Item Discounts");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 47);
    i0.ɵɵlistener("click", function ManageStoreItemSubItemDiscountsComponent_ng_template_33_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r44); const ctx_r43 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r43.closeModal()); });
    i0.ɵɵelementStart(4, "span", 48);
    i0.ɵɵtext(5, "\u00D7");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(6, "div", 49)(7, "form", 4)(8, "div", 30)(9, "div", 31);
    i0.ɵɵtext(10, "Product Line: ");
    i0.ɵɵelementStart(11, "span");
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "div", 31);
    i0.ɵɵtext(14, "Item: ");
    i0.ɵɵelementStart(15, "span");
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(17, "div", 31);
    i0.ɵɵtext(18, "Sub Item Name: ");
    i0.ɵɵelementStart(19, "span");
    i0.ɵɵtext(20);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(21, "div", 31);
    i0.ɵɵtext(22, "Discount Coupon ID: ");
    i0.ɵɵelementStart(23, "span");
    i0.ɵɵtext(24);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(25, "div", 31);
    i0.ɵɵtext(26, "Retail MRP: ");
    i0.ɵɵelementStart(27, "span");
    i0.ɵɵtext(28);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(29, "div", 31);
    i0.ɵɵtext(30, "Whole Sale Price: ");
    i0.ɵɵelementStart(31, "span");
    i0.ɵɵtext(32);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(33, "div", 31);
    i0.ɵɵtext(34, "Size: ");
    i0.ɵɵelementStart(35, "span");
    i0.ɵɵtext(36);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(37, "div", 1)(38, "div", 6)(39, "div", 7)(40, "label");
    i0.ɵɵtext(41, "Discount %");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(42, "select", 50)(43, "option", 51);
    i0.ɵɵtext(44, "Select");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(45, "option", 52);
    i0.ɵɵtext(46, "Yes");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(47, "option", 53);
    i0.ɵɵtext(48, "No");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(49, "div", 6)(50, "div", 7)(51, "label");
    i0.ɵɵtext(52, "Discount Validity");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(53, "select", 54)(54, "option", 51);
    i0.ɵɵtext(55, "Select");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(56, "option", 52);
    i0.ɵɵtext(57, "Yes");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(58, "option", 53);
    i0.ɵɵtext(59, "No");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(60, "div", 6)(61, "div", 7)(62, "label");
    i0.ɵɵtext(63, "Discount Figure");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(64, "input", 55);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(65, "div", 6)(66, "div", 7)(67, "label");
    i0.ɵɵtext(68, "Valid From");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(69, "input", 56);
    i0.ɵɵlistener("bsValueChange", function ManageStoreItemSubItemDiscountsComponent_ng_template_33_Template_input_bsValueChange_69_listener($event) { i0.ɵɵrestoreView(_r44); const ctx_r45 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r45.onDateChange($event)); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(70, "div", 6)(71, "div", 7)(72, "label");
    i0.ɵɵtext(73, "Valid To");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(74, "input", 57);
    i0.ɵɵlistener("bsValueChange", function ManageStoreItemSubItemDiscountsComponent_ng_template_33_Template_input_bsValueChange_74_listener($event) { i0.ɵɵrestoreView(_r44); const ctx_r46 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r46.onDateChange($event)); });
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(75, "div", 1)(76, "div", 2)(77, "button", 14);
    i0.ɵɵlistener("click", function ManageStoreItemSubItemDiscountsComponent_ng_template_33_Template_button_click_77_listener() { i0.ɵɵrestoreView(_r44); const ctx_r47 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r47.updateItemSubitemDiscount()); });
    i0.ɵɵtext(78, "Save Discount for Sub-Item");
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("formGroup", ctx_r4.discountForm);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r4.productName);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r4.itemName);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r4.subitemName);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r4.couponID);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r4.retailMRP);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r4.wholesalePrice);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r4.retailSize);
    i0.ɵɵadvance(33);
    i0.ɵɵproperty("bsConfig", i0.ɵɵpureFunction0(10, _c0));
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("bsConfig", i0.ɵɵpureFunction0(11, _c0));
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_35_Template(rf, ctx) { if (rf & 1) {
    const _r49 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 45)(1, "h4", 46);
    i0.ɵɵtext(2, "Edit Store Item Prices");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 47);
    i0.ɵɵlistener("click", function ManageStoreItemSubItemDiscountsComponent_ng_template_35_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r49); const ctx_r48 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r48.modalRef.hide()); });
    i0.ɵɵelementStart(4, "span", 48);
    i0.ɵɵtext(5, "\u00D7");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(6, "div", 49)(7, "form", 4)(8, "div", 30)(9, "div", 31);
    i0.ɵɵtext(10, "Product Line: ");
    i0.ɵɵelementStart(11, "span");
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "div", 31);
    i0.ɵɵtext(14, "Item: ");
    i0.ɵɵelementStart(15, "span");
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(17, "div", 31);
    i0.ɵɵtext(18, "Sub Item Name: ");
    i0.ɵɵelementStart(19, "span");
    i0.ɵɵtext(20);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(21, "div", 31);
    i0.ɵɵtext(22, "Size: ");
    i0.ɵɵelementStart(23, "span");
    i0.ɵɵtext(24);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(25, "div", 1)(26, "div", 6)(27, "div", 7)(28, "label");
    i0.ɵɵtext(29, "Retail Prise(Rs.)");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(30, "input", 58);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(31, "div", 6)(32, "div", 7)(33, "label");
    i0.ɵɵtext(34, "Export Price (USD)");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(35, "input", 59);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(36, "div", 1)(37, "div", 2)(38, "button", 14);
    i0.ɵɵlistener("click", function ManageStoreItemSubItemDiscountsComponent_ng_template_35_Template_button_click_38_listener() { i0.ɵɵrestoreView(_r49); const ctx_r50 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r50.updateItemSubitemMRP()); });
    i0.ɵɵtext(39, "Save Item MRP");
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("formGroup", ctx_r6.mrpForm);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r6.productName);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r6.itemName);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r6.subitemName);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r6.retailSize);
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_37_div_33_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "From date is required ");
    i0.ɵɵelementEnd();
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_37_div_33_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 69);
    i0.ɵɵtemplate(1, ManageStoreItemSubItemDiscountsComponent_ng_template_37_div_33_div_1_Template, 2, 0, "div", 34);
    i0.ɵɵelementEnd();
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_37_div_42_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "To date is required ");
    i0.ɵɵelementEnd();
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_37_div_42_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 69);
    i0.ɵɵtemplate(1, ManageStoreItemSubItemDiscountsComponent_ng_template_37_div_42_div_1_Template, 2, 0, "div", 34);
    i0.ɵɵelementEnd();
} }
const _c1 = function (a1) { return { dateInputFormat: "DD/MM/YYYY", minDate: a1 }; };
function ManageStoreItemSubItemDiscountsComponent_ng_template_37_Template(rf, ctx) { if (rf & 1) {
    const _r56 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 45)(1, "h4", 46);
    i0.ɵɵtext(2, "Edit Regular Discount");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 47);
    i0.ɵɵlistener("click", function ManageStoreItemSubItemDiscountsComponent_ng_template_37_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r56); const ctx_r55 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r55.modalRef.hide()); });
    i0.ɵɵelementStart(4, "span", 48);
    i0.ɵɵtext(5, "\u00D7");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(6, "div", 49)(7, "form")(8, "div", 30)(9, "div", 31);
    i0.ɵɵtext(10, "Valid From: ");
    i0.ɵɵelementStart(11, "span");
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "div", 31);
    i0.ɵɵtext(14, "Valid To: ");
    i0.ɵɵelementStart(15, "span");
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(17, "div", 31);
    i0.ɵɵtext(18, "Discount Validity: ");
    i0.ɵɵelement(19, "span");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "div", 31);
    i0.ɵɵtext(21, "Discount Figure: ");
    i0.ɵɵelementStart(22, "span");
    i0.ɵɵtext(23);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(24, "div", 1)(25, "div", 6)(26, "label");
    i0.ɵɵtext(27, "From Date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "div", 60)(29, "input", 61);
    i0.ɵɵlistener("ngModelChange", function ManageStoreItemSubItemDiscountsComponent_ng_template_37_Template_input_ngModelChange_29_listener($event) { i0.ɵɵrestoreView(_r56); const ctx_r57 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r57.DisDatefrom = $event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "div", 62)(31, "span", 63);
    i0.ɵɵelement(32, "i", 64);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(33, ManageStoreItemSubItemDiscountsComponent_ng_template_37_div_33_Template, 2, 0, "div", 65);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(34, "div", 6)(35, "label");
    i0.ɵɵtext(36, "To Date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(37, "div", 60)(38, "input", 66);
    i0.ɵɵlistener("ngModelChange", function ManageStoreItemSubItemDiscountsComponent_ng_template_37_Template_input_ngModelChange_38_listener($event) { i0.ɵɵrestoreView(_r56); const ctx_r58 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r58.DisDateto = $event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(39, "div", 62)(40, "span", 63);
    i0.ɵɵelement(41, "i", 64);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(42, ManageStoreItemSubItemDiscountsComponent_ng_template_37_div_42_Template, 2, 0, "div", 65);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(43, "div", 6)(44, "div", 7)(45, "label");
    i0.ɵɵtext(46, "Discount %");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(47, "select", 67);
    i0.ɵɵlistener("ngModelChange", function ManageStoreItemSubItemDiscountsComponent_ng_template_37_Template_select_ngModelChange_47_listener($event) { i0.ɵɵrestoreView(_r56); const ctx_r59 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r59.discountEdit.PercntgFlg = $event); });
    i0.ɵɵelementStart(48, "option", 51);
    i0.ɵɵtext(49, "Select");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(50, "option", 27);
    i0.ɵɵtext(51, "Yes");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(52, "option", 27);
    i0.ɵɵtext(53, "No");
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(54, "div", 1)(55, "div", 6)(56, "div", 7)(57, "label");
    i0.ɵɵtext(58, "Discount Figure");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(59, "input", 68);
    i0.ɵɵlistener("ngModelChange", function ManageStoreItemSubItemDiscountsComponent_ng_template_37_Template_input_ngModelChange_59_listener($event) { i0.ɵɵrestoreView(_r56); const ctx_r60 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r60.discountEdit.PercntgFigure = $event); });
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(60, "div", 1)(61, "div", 2)(62, "button", 14);
    i0.ɵɵlistener("click", function ManageStoreItemSubItemDiscountsComponent_ng_template_37_Template_button_click_62_listener() { i0.ɵɵrestoreView(_r56); const ctx_r61 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r61.editDiscount(ctx_r61.discountEdit)); });
    i0.ɵɵtext(63, "Save");
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext();
    i0.ɵɵadvance(12);
    i0.ɵɵtextInterpolate(ctx_r8.discountEdit.DateFrom);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r8.discountEdit.DateTo);
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(ctx_r8.discountEdit.PercntgFigure);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngModel", ctx_r8.DisDatefrom)("bsConfig", i0.ɵɵpureFunction0(12, _c0));
    i0.ɵɵadvance(9);
    i0.ɵɵproperty("ngModel", ctx_r8.DisDateto)("bsConfig", i0.ɵɵpureFunction1(13, _c1, ctx_r8.DisDatefrom ? ctx_r8.DisDatefrom : null))("disabled", !ctx_r8.DisDatefrom);
    i0.ɵɵadvance(9);
    i0.ɵɵproperty("ngModel", ctx_r8.discountEdit.PercntgFlg);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("value", true);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("value", false);
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngModel", ctx_r8.discountEdit.PercntgFigure);
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_39_div_17_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "From date is required ");
    i0.ɵɵelementEnd();
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_39_div_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 69);
    i0.ɵɵtemplate(1, ManageStoreItemSubItemDiscountsComponent_ng_template_39_div_17_div_1_Template, 2, 0, "div", 34);
    i0.ɵɵelementEnd();
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_39_div_26_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "To date is required ");
    i0.ɵɵelementEnd();
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_39_div_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 69);
    i0.ɵɵtemplate(1, ManageStoreItemSubItemDiscountsComponent_ng_template_39_div_26_div_1_Template, 2, 0, "div", 34);
    i0.ɵɵelementEnd();
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_39_Template(rf, ctx) { if (rf & 1) {
    const _r67 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 45)(1, "h4", 46);
    i0.ɵɵtext(2, "Add Regular Discount");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 47);
    i0.ɵɵlistener("click", function ManageStoreItemSubItemDiscountsComponent_ng_template_39_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r67); const ctx_r66 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r66.modalRef.hide()); });
    i0.ɵɵelementStart(4, "span", 48);
    i0.ɵɵtext(5, "\u00D7");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(6, "div", 49)(7, "form")(8, "div", 1)(9, "div", 6)(10, "label");
    i0.ɵɵtext(11, "From Date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "div", 60)(13, "input", 61);
    i0.ɵɵlistener("ngModelChange", function ManageStoreItemSubItemDiscountsComponent_ng_template_39_Template_input_ngModelChange_13_listener($event) { i0.ɵɵrestoreView(_r67); const ctx_r68 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r68.b2bItemDiscount.FromDate = $event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "div", 62)(15, "span", 63);
    i0.ɵɵelement(16, "i", 64);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(17, ManageStoreItemSubItemDiscountsComponent_ng_template_39_div_17_Template, 2, 0, "div", 65);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(18, "div", 6)(19, "label");
    i0.ɵɵtext(20, "To Date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "div", 60)(22, "input", 66);
    i0.ɵɵlistener("ngModelChange", function ManageStoreItemSubItemDiscountsComponent_ng_template_39_Template_input_ngModelChange_22_listener($event) { i0.ɵɵrestoreView(_r67); const ctx_r69 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r69.b2bItemDiscount.ToDate = $event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "div", 62)(24, "span", 63);
    i0.ɵɵelement(25, "i", 64);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(26, ManageStoreItemSubItemDiscountsComponent_ng_template_39_div_26_Template, 2, 0, "div", 65);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(27, "div", 6)(28, "div", 7)(29, "label");
    i0.ɵɵtext(30, "Discount %");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(31, "select", 70);
    i0.ɵɵlistener("click", function ManageStoreItemSubItemDiscountsComponent_ng_template_39_Template_select_click_31_listener($event) { i0.ɵɵrestoreView(_r67); const ctx_r70 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r70.onslectDiscountFlag($event)); });
    i0.ɵɵelementStart(32, "option", 51);
    i0.ɵɵtext(33, "Select");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(34, "option", 52);
    i0.ɵɵtext(35, "Yes");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(36, "option", 53);
    i0.ɵɵtext(37, "No");
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(38, "div", 1)(39, "div", 6)(40, "div", 7)(41, "label");
    i0.ɵɵtext(42, "Discount Figure");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(43, "input", 71);
    i0.ɵɵlistener("ngModelChange", function ManageStoreItemSubItemDiscountsComponent_ng_template_39_Template_input_ngModelChange_43_listener($event) { i0.ɵɵrestoreView(_r67); const ctx_r71 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r71.b2bItemDiscount.PercntgFigure = $event); });
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(44, "div", 1)(45, "div", 2)(46, "button", 14);
    i0.ɵɵlistener("click", function ManageStoreItemSubItemDiscountsComponent_ng_template_39_Template_button_click_46_listener() { i0.ɵɵrestoreView(_r67); const ctx_r72 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r72.addRegularDiscount()); });
    i0.ɵɵtext(47, "Add");
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r10 = i0.ɵɵnextContext();
    i0.ɵɵadvance(13);
    i0.ɵɵproperty("ngModel", ctx_r10.b2bItemDiscount.FromDate)("bsConfig", i0.ɵɵpureFunction0(6, _c0));
    i0.ɵɵadvance(9);
    i0.ɵɵproperty("ngModel", ctx_r10.b2bItemDiscount.ToDate)("bsConfig", i0.ɵɵpureFunction1(7, _c1, ctx_r10.b2bItemDiscount.FromDate ? ctx_r10.b2bItemDiscount.FromDate : null))("disabled", !ctx_r10.b2bItemDiscount.FromDate);
    i0.ɵɵadvance(21);
    i0.ɵɵproperty("ngModel", ctx_r10.b2bItemDiscount.PercntgFigure);
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_41_div_34_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "From date is required");
    i0.ɵɵelementEnd();
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_41_div_34_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 69);
    i0.ɵɵtemplate(1, ManageStoreItemSubItemDiscountsComponent_ng_template_41_div_34_div_1_Template, 2, 0, "div", 34);
    i0.ɵɵelementEnd();
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_41_div_43_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "To date is required");
    i0.ɵɵelementEnd();
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_41_div_43_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 69);
    i0.ɵɵtemplate(1, ManageStoreItemSubItemDiscountsComponent_ng_template_41_div_43_div_1_Template, 2, 0, "div", 34);
    i0.ɵɵelementEnd();
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_41_Template(rf, ctx) { if (rf & 1) {
    const _r78 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 45)(1, "h4", 46);
    i0.ɵɵtext(2, "Edit Item Count Discount");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 47);
    i0.ɵɵlistener("click", function ManageStoreItemSubItemDiscountsComponent_ng_template_41_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r78); const ctx_r77 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r77.modalRef.hide()); });
    i0.ɵɵelementStart(4, "span", 48);
    i0.ɵɵtext(5, "\u00D7");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(6, "div", 49)(7, "form")(8, "div", 30)(9, "div", 31);
    i0.ɵɵtext(10, "Valid From: ");
    i0.ɵɵelementStart(11, "span");
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "div", 31);
    i0.ɵɵtext(14, "Valid To: ");
    i0.ɵɵelementStart(15, "span");
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(17, "div", 31);
    i0.ɵɵtext(18, "%: ");
    i0.ɵɵelementStart(19, "span");
    i0.ɵɵtext(20);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(21, "div", 31);
    i0.ɵɵtext(22, "Discount Figure: ");
    i0.ɵɵelementStart(23, "span");
    i0.ɵɵtext(24);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(25, "div", 1)(26, "div", 6)(27, "label");
    i0.ɵɵtext(28, "From Date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(29, "div", 60)(30, "input", 61);
    i0.ɵɵlistener("ngModelChange", function ManageStoreItemSubItemDiscountsComponent_ng_template_41_Template_input_ngModelChange_30_listener($event) { i0.ɵɵrestoreView(_r78); const ctx_r79 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r79.DisDatefrom = $event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(31, "div", 62)(32, "span", 63);
    i0.ɵɵelement(33, "i", 64);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(34, ManageStoreItemSubItemDiscountsComponent_ng_template_41_div_34_Template, 2, 0, "div", 65);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(35, "div", 6)(36, "label");
    i0.ɵɵtext(37, "To Date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(38, "div", 60)(39, "input", 66);
    i0.ɵɵlistener("ngModelChange", function ManageStoreItemSubItemDiscountsComponent_ng_template_41_Template_input_ngModelChange_39_listener($event) { i0.ɵɵrestoreView(_r78); const ctx_r80 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r80.DisDateto = $event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(40, "div", 62)(41, "span", 63);
    i0.ɵɵelement(42, "i", 64);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(43, ManageStoreItemSubItemDiscountsComponent_ng_template_41_div_43_Template, 2, 0, "div", 65);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(44, "div", 1)(45, "div", 6)(46, "div", 7)(47, "label");
    i0.ɵɵtext(48, "Discount %");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(49, "select", 67);
    i0.ɵɵlistener("ngModelChange", function ManageStoreItemSubItemDiscountsComponent_ng_template_41_Template_select_ngModelChange_49_listener($event) { i0.ɵɵrestoreView(_r78); const ctx_r81 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r81.discountEdit.PercntgFlg = $event); });
    i0.ɵɵelementStart(50, "option", 51);
    i0.ɵɵtext(51, "Select");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(52, "option", 27);
    i0.ɵɵtext(53, "Yes");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(54, "option", 27);
    i0.ɵɵtext(55, "No");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(56, "div", 6)(57, "div", 7)(58, "label");
    i0.ɵɵtext(59, "Discount Figure");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(60, "input", 72);
    i0.ɵɵlistener("ngModelChange", function ManageStoreItemSubItemDiscountsComponent_ng_template_41_Template_input_ngModelChange_60_listener($event) { i0.ɵɵrestoreView(_r78); const ctx_r82 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r82.discountEdit.PercntgFigure = $event); });
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(61, "div", 1)(62, "div", 2)(63, "button", 14);
    i0.ɵɵlistener("click", function ManageStoreItemSubItemDiscountsComponent_ng_template_41_Template_button_click_63_listener() { i0.ɵɵrestoreView(_r78); const ctx_r83 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r83.editDiscount(ctx_r83.discountEdit)); });
    i0.ɵɵtext(64, "Save");
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r12 = i0.ɵɵnextContext();
    i0.ɵɵadvance(12);
    i0.ɵɵtextInterpolate(ctx_r12.discountEdit.DateFrom);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r12.discountEdit.DateTo);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r12.discountEdit.PercntgFlg);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r12.discountEdit.PercntgFigure);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngModel", ctx_r12.DisDatefrom)("bsConfig", i0.ɵɵpureFunction0(13, _c0));
    i0.ɵɵadvance(9);
    i0.ɵɵproperty("ngModel", ctx_r12.DisDateto)("bsConfig", i0.ɵɵpureFunction1(14, _c1, ctx_r12.DisDatefrom ? ctx_r12.DisDatefrom : null))("disabled", !ctx_r12.DisDatefrom);
    i0.ɵɵadvance(10);
    i0.ɵɵproperty("ngModel", ctx_r12.discountEdit.PercntgFlg);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("value", true);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("value", false);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngModel", ctx_r12.discountEdit.PercntgFigure);
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_43_div_17_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "From date is required ");
    i0.ɵɵelementEnd();
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_43_div_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 69);
    i0.ɵɵtemplate(1, ManageStoreItemSubItemDiscountsComponent_ng_template_43_div_17_div_1_Template, 2, 0, "div", 34);
    i0.ɵɵelementEnd();
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_43_div_26_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "To date is required ");
    i0.ɵɵelementEnd();
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_43_div_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 69);
    i0.ɵɵtemplate(1, ManageStoreItemSubItemDiscountsComponent_ng_template_43_div_26_div_1_Template, 2, 0, "div", 34);
    i0.ɵɵelementEnd();
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_43_Template(rf, ctx) { if (rf & 1) {
    const _r89 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 45)(1, "h4", 46);
    i0.ɵɵtext(2, "Add Item Count Discount");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 47);
    i0.ɵɵlistener("click", function ManageStoreItemSubItemDiscountsComponent_ng_template_43_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r89); const ctx_r88 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r88.modalRef.hide()); });
    i0.ɵɵelementStart(4, "span", 48);
    i0.ɵɵtext(5, "\u00D7");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(6, "div", 49)(7, "form")(8, "div", 1)(9, "div", 6)(10, "label");
    i0.ɵɵtext(11, "From Date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "div", 60)(13, "input", 61);
    i0.ɵɵlistener("ngModelChange", function ManageStoreItemSubItemDiscountsComponent_ng_template_43_Template_input_ngModelChange_13_listener($event) { i0.ɵɵrestoreView(_r89); const ctx_r90 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r90.b2bItemDiscount.FromDate = $event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "div", 62)(15, "span", 63);
    i0.ɵɵelement(16, "i", 64);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(17, ManageStoreItemSubItemDiscountsComponent_ng_template_43_div_17_Template, 2, 0, "div", 65);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(18, "div", 6)(19, "label");
    i0.ɵɵtext(20, "To Date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "div", 60)(22, "input", 66);
    i0.ɵɵlistener("ngModelChange", function ManageStoreItemSubItemDiscountsComponent_ng_template_43_Template_input_ngModelChange_22_listener($event) { i0.ɵɵrestoreView(_r89); const ctx_r91 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r91.b2bItemDiscount.ToDate = $event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "div", 62)(24, "span", 63);
    i0.ɵɵelement(25, "i", 64);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(26, ManageStoreItemSubItemDiscountsComponent_ng_template_43_div_26_Template, 2, 0, "div", 65);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(27, "div", 6)(28, "div", 7)(29, "label");
    i0.ɵɵtext(30, "Discount %");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(31, "select", 70);
    i0.ɵɵlistener("click", function ManageStoreItemSubItemDiscountsComponent_ng_template_43_Template_select_click_31_listener($event) { i0.ɵɵrestoreView(_r89); const ctx_r92 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r92.onslectDiscountFlag($event)); });
    i0.ɵɵelementStart(32, "option", 51);
    i0.ɵɵtext(33, "Select");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(34, "option", 52);
    i0.ɵɵtext(35, "Yes");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(36, "option", 53);
    i0.ɵɵtext(37, "No");
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(38, "div", 1)(39, "div", 6)(40, "div", 7)(41, "label");
    i0.ɵɵtext(42, "Discount Figure");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(43, "input", 73);
    i0.ɵɵlistener("ngModelChange", function ManageStoreItemSubItemDiscountsComponent_ng_template_43_Template_input_ngModelChange_43_listener($event) { i0.ɵɵrestoreView(_r89); const ctx_r93 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r93.b2bItemDiscount.PercntgFigure = $event); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(44, "div", 6)(45, "div", 7)(46, "label");
    i0.ɵɵtext(47, "Item Count");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(48, "input", 74);
    i0.ɵɵlistener("ngModelChange", function ManageStoreItemSubItemDiscountsComponent_ng_template_43_Template_input_ngModelChange_48_listener($event) { i0.ɵɵrestoreView(_r89); const ctx_r94 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r94.b2bItemDiscount.CountsOnCart = $event); });
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(49, "div", 1)(50, "div", 2)(51, "button", 14);
    i0.ɵɵlistener("click", function ManageStoreItemSubItemDiscountsComponent_ng_template_43_Template_button_click_51_listener() { i0.ɵɵrestoreView(_r89); const ctx_r95 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r95.addRegularDiscount()); });
    i0.ɵɵtext(52, "Add");
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r14 = i0.ɵɵnextContext();
    i0.ɵɵadvance(13);
    i0.ɵɵproperty("ngModel", ctx_r14.b2bItemDiscount.FromDate)("bsConfig", i0.ɵɵpureFunction0(7, _c0));
    i0.ɵɵadvance(9);
    i0.ɵɵproperty("ngModel", ctx_r14.b2bItemDiscount.ToDate)("bsConfig", i0.ɵɵpureFunction1(8, _c1, ctx_r14.b2bItemDiscount.FromDate ? ctx_r14.b2bItemDiscount.FromDate : null))("disabled", !ctx_r14.b2bItemDiscount.FromDate);
    i0.ɵɵadvance(21);
    i0.ɵɵproperty("ngModel", ctx_r14.b2bItemDiscount.PercntgFigure);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngModel", ctx_r14.b2bItemDiscount.CountsOnCart);
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_45_div_34_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "From date is required");
    i0.ɵɵelementEnd();
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_45_div_34_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 69);
    i0.ɵɵtemplate(1, ManageStoreItemSubItemDiscountsComponent_ng_template_45_div_34_div_1_Template, 2, 0, "div", 34);
    i0.ɵɵelementEnd();
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_45_div_43_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "To date is required");
    i0.ɵɵelementEnd();
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_45_div_43_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 69);
    i0.ɵɵtemplate(1, ManageStoreItemSubItemDiscountsComponent_ng_template_45_div_43_div_1_Template, 2, 0, "div", 34);
    i0.ɵɵelementEnd();
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_45_Template(rf, ctx) { if (rf & 1) {
    const _r101 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 45)(1, "h4", 46);
    i0.ɵɵtext(2, "Edit Item Count Discount");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 47);
    i0.ɵɵlistener("click", function ManageStoreItemSubItemDiscountsComponent_ng_template_45_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r101); const ctx_r100 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r100.modalRef.hide()); });
    i0.ɵɵelementStart(4, "span", 48);
    i0.ɵɵtext(5, "\u00D7");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(6, "div", 49)(7, "form")(8, "div", 30)(9, "div", 31);
    i0.ɵɵtext(10, "Valid From: ");
    i0.ɵɵelementStart(11, "span");
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "div", 31);
    i0.ɵɵtext(14, "Valid To: ");
    i0.ɵɵelementStart(15, "span");
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(17, "div", 31);
    i0.ɵɵtext(18, "%: ");
    i0.ɵɵelementStart(19, "span");
    i0.ɵɵtext(20);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(21, "div", 31);
    i0.ɵɵtext(22, "Discount Figure: ");
    i0.ɵɵelementStart(23, "span");
    i0.ɵɵtext(24);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(25, "div", 1)(26, "div", 6)(27, "label");
    i0.ɵɵtext(28, "From Date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(29, "div", 60)(30, "input", 61);
    i0.ɵɵlistener("ngModelChange", function ManageStoreItemSubItemDiscountsComponent_ng_template_45_Template_input_ngModelChange_30_listener($event) { i0.ɵɵrestoreView(_r101); const ctx_r102 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r102.DisDatefrom = $event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(31, "div", 62)(32, "span", 63);
    i0.ɵɵelement(33, "i", 64);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(34, ManageStoreItemSubItemDiscountsComponent_ng_template_45_div_34_Template, 2, 0, "div", 65);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(35, "div", 6)(36, "label");
    i0.ɵɵtext(37, "To Date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(38, "div", 60)(39, "input", 66);
    i0.ɵɵlistener("ngModelChange", function ManageStoreItemSubItemDiscountsComponent_ng_template_45_Template_input_ngModelChange_39_listener($event) { i0.ɵɵrestoreView(_r101); const ctx_r103 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r103.DisDateto = $event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(40, "div", 62)(41, "span", 63);
    i0.ɵɵelement(42, "i", 64);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(43, ManageStoreItemSubItemDiscountsComponent_ng_template_45_div_43_Template, 2, 0, "div", 65);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(44, "div", 1)(45, "div", 6)(46, "div", 7)(47, "label");
    i0.ɵɵtext(48, "Discount %");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(49, "select", 67);
    i0.ɵɵlistener("ngModelChange", function ManageStoreItemSubItemDiscountsComponent_ng_template_45_Template_select_ngModelChange_49_listener($event) { i0.ɵɵrestoreView(_r101); const ctx_r104 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r104.discountEdit.PercntgFlg = $event); });
    i0.ɵɵelementStart(50, "option", 51);
    i0.ɵɵtext(51, "Select");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(52, "option", 27);
    i0.ɵɵtext(53, "Yes");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(54, "option", 27);
    i0.ɵɵtext(55, "No");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(56, "div", 6)(57, "div", 7)(58, "label");
    i0.ɵɵtext(59, "Discount Figure");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(60, "input", 72);
    i0.ɵɵlistener("ngModelChange", function ManageStoreItemSubItemDiscountsComponent_ng_template_45_Template_input_ngModelChange_60_listener($event) { i0.ɵɵrestoreView(_r101); const ctx_r105 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r105.discountEdit.PercntgFigure = $event); });
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(61, "div", 1)(62, "div", 2)(63, "button", 14);
    i0.ɵɵlistener("click", function ManageStoreItemSubItemDiscountsComponent_ng_template_45_Template_button_click_63_listener() { i0.ɵɵrestoreView(_r101); const ctx_r106 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r106.editDiscount(ctx_r106.discountEdit)); });
    i0.ɵɵtext(64, "Save");
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r16 = i0.ɵɵnextContext();
    i0.ɵɵadvance(12);
    i0.ɵɵtextInterpolate(ctx_r16.discountEdit.DateFrom);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r16.discountEdit.DateTo);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r16.discountEdit.PercntgFlg);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r16.discountEdit.PercntgFigure);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngModel", ctx_r16.DisDatefrom)("bsConfig", i0.ɵɵpureFunction0(13, _c0));
    i0.ɵɵadvance(9);
    i0.ɵɵproperty("ngModel", ctx_r16.DisDateto)("bsConfig", i0.ɵɵpureFunction1(14, _c1, ctx_r16.DisDatefrom ? ctx_r16.DisDatefrom : null))("disabled", !ctx_r16.DisDatefrom);
    i0.ɵɵadvance(10);
    i0.ɵɵproperty("ngModel", ctx_r16.discountEdit.PercntgFlg);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("value", true);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("value", false);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngModel", ctx_r16.discountEdit.PercntgFigure);
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_47_div_17_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "From date is required ");
    i0.ɵɵelementEnd();
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_47_div_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 69);
    i0.ɵɵtemplate(1, ManageStoreItemSubItemDiscountsComponent_ng_template_47_div_17_div_1_Template, 2, 0, "div", 34);
    i0.ɵɵelementEnd();
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_47_div_26_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "To date is required ");
    i0.ɵɵelementEnd();
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_47_div_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 69);
    i0.ɵɵtemplate(1, ManageStoreItemSubItemDiscountsComponent_ng_template_47_div_26_div_1_Template, 2, 0, "div", 34);
    i0.ɵɵelementEnd();
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_47_Template(rf, ctx) { if (rf & 1) {
    const _r112 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 45)(1, "h4", 46);
    i0.ɵɵtext(2, "Add Promotional Discount");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 47);
    i0.ɵɵlistener("click", function ManageStoreItemSubItemDiscountsComponent_ng_template_47_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r112); const ctx_r111 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r111.modalRef.hide()); });
    i0.ɵɵelementStart(4, "span", 48);
    i0.ɵɵtext(5, "\u00D7");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(6, "div", 49)(7, "form")(8, "div", 1)(9, "div", 6)(10, "label");
    i0.ɵɵtext(11, "From Date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "div", 60)(13, "input", 61);
    i0.ɵɵlistener("ngModelChange", function ManageStoreItemSubItemDiscountsComponent_ng_template_47_Template_input_ngModelChange_13_listener($event) { i0.ɵɵrestoreView(_r112); const ctx_r113 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r113.b2bItemDiscount.FromDate = $event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "div", 62)(15, "span", 63);
    i0.ɵɵelement(16, "i", 64);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(17, ManageStoreItemSubItemDiscountsComponent_ng_template_47_div_17_Template, 2, 0, "div", 65);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(18, "div", 6)(19, "label");
    i0.ɵɵtext(20, "To Date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "div", 60)(22, "input", 66);
    i0.ɵɵlistener("ngModelChange", function ManageStoreItemSubItemDiscountsComponent_ng_template_47_Template_input_ngModelChange_22_listener($event) { i0.ɵɵrestoreView(_r112); const ctx_r114 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r114.b2bItemDiscount.ToDate = $event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "div", 62)(24, "span", 63);
    i0.ɵɵelement(25, "i", 64);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(26, ManageStoreItemSubItemDiscountsComponent_ng_template_47_div_26_Template, 2, 0, "div", 65);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(27, "div", 6)(28, "div", 7)(29, "label");
    i0.ɵɵtext(30, "Discount %");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(31, "select", 70);
    i0.ɵɵlistener("click", function ManageStoreItemSubItemDiscountsComponent_ng_template_47_Template_select_click_31_listener($event) { i0.ɵɵrestoreView(_r112); const ctx_r115 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r115.onslectDiscountFlag($event)); });
    i0.ɵɵelementStart(32, "option", 51);
    i0.ɵɵtext(33, "Select");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(34, "option", 52);
    i0.ɵɵtext(35, "Yes");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(36, "option", 53);
    i0.ɵɵtext(37, "No");
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(38, "div", 1)(39, "div", 6)(40, "div", 7)(41, "label");
    i0.ɵɵtext(42, "Discount Figure");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(43, "input", 75);
    i0.ɵɵlistener("ngModelChange", function ManageStoreItemSubItemDiscountsComponent_ng_template_47_Template_input_ngModelChange_43_listener($event) { i0.ɵɵrestoreView(_r112); const ctx_r116 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r116.b2bItemDiscount.PercntgFigure = $event); });
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(44, "div", 1)(45, "div", 2)(46, "button", 14);
    i0.ɵɵlistener("click", function ManageStoreItemSubItemDiscountsComponent_ng_template_47_Template_button_click_46_listener() { i0.ɵɵrestoreView(_r112); const ctx_r117 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r117.addRegularDiscount()); });
    i0.ɵɵtext(47, "Add");
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r18 = i0.ɵɵnextContext();
    i0.ɵɵadvance(13);
    i0.ɵɵproperty("ngModel", ctx_r18.b2bItemDiscount.FromDate)("bsConfig", i0.ɵɵpureFunction0(6, _c0));
    i0.ɵɵadvance(9);
    i0.ɵɵproperty("ngModel", ctx_r18.b2bItemDiscount.ToDate)("bsConfig", i0.ɵɵpureFunction1(7, _c1, ctx_r18.b2bItemDiscount.FromDate ? ctx_r18.b2bItemDiscount.FromDate : null))("disabled", !ctx_r18.b2bItemDiscount.FromDate);
    i0.ɵɵadvance(21);
    i0.ɵɵproperty("ngModel", ctx_r18.b2bItemDiscount.PercntgFigure);
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_49_div_36_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "From date is required ");
    i0.ɵɵelementEnd();
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_49_div_36_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 69);
    i0.ɵɵtemplate(1, ManageStoreItemSubItemDiscountsComponent_ng_template_49_div_36_div_1_Template, 2, 0, "div", 34);
    i0.ɵɵelementEnd();
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_49_div_45_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "From date is required ");
    i0.ɵɵelementEnd();
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_49_div_45_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 69);
    i0.ɵɵtemplate(1, ManageStoreItemSubItemDiscountsComponent_ng_template_49_div_45_div_1_Template, 2, 0, "div", 34);
    i0.ɵɵelementEnd();
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_49_Template(rf, ctx) { if (rf & 1) {
    const _r123 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 45)(1, "h4", 46);
    i0.ɵɵtext(2, "Edit Preffered Discount");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 47);
    i0.ɵɵlistener("click", function ManageStoreItemSubItemDiscountsComponent_ng_template_49_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r123); const ctx_r122 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r122.modalRef.hide()); });
    i0.ɵɵelementStart(4, "span", 48);
    i0.ɵɵtext(5, "\u00D7");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(6, "div", 49)(7, "form", 4)(8, "div", 30)(9, "div", 31);
    i0.ɵɵtext(10, "Valid From: ");
    i0.ɵɵelement(11, "span");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "div", 31);
    i0.ɵɵtext(13, "Valid To: ");
    i0.ɵɵelement(14, "span");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "div", 31);
    i0.ɵɵtext(16, "Discount Validity: ");
    i0.ɵɵelement(17, "span");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "div", 31);
    i0.ɵɵtext(19, "%: ");
    i0.ɵɵelement(20, "span");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "div", 31);
    i0.ɵɵtext(22, "Discount Figure: ");
    i0.ɵɵelement(23, "span");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "div", 31);
    i0.ɵɵtext(25, "Account: ");
    i0.ɵɵelement(26, "span");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(27, "div", 1)(28, "div", 6)(29, "label");
    i0.ɵɵtext(30, "From Date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(31, "div", 60);
    i0.ɵɵelement(32, "input", 76);
    i0.ɵɵelementStart(33, "div", 62)(34, "span", 63);
    i0.ɵɵelement(35, "i", 64);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(36, ManageStoreItemSubItemDiscountsComponent_ng_template_49_div_36_Template, 2, 0, "div", 65);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(37, "div", 6)(38, "label");
    i0.ɵɵtext(39, "To Date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(40, "div", 60);
    i0.ɵɵelement(41, "input", 76);
    i0.ɵɵelementStart(42, "div", 62)(43, "span", 63);
    i0.ɵɵelement(44, "i", 64);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(45, ManageStoreItemSubItemDiscountsComponent_ng_template_49_div_45_Template, 2, 0, "div", 65);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(46, "div", 6)(47, "div", 7)(48, "label");
    i0.ɵɵtext(49, "Discount Validity");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(50, "select", 77)(51, "option", 51);
    i0.ɵɵtext(52, "Select");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(53, "option", 52);
    i0.ɵɵtext(54, "Yes");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(55, "option", 53);
    i0.ɵɵtext(56, "No");
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(57, "div", 1)(58, "div", 6)(59, "div", 7)(60, "label");
    i0.ɵɵtext(61, "Discount %");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(62, "select", 77)(63, "option", 51);
    i0.ɵɵtext(64, "Select");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(65, "option", 52);
    i0.ɵɵtext(66, "Yes");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(67, "option", 53);
    i0.ɵɵtext(68, "No");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(69, "div", 6)(70, "div", 7)(71, "label");
    i0.ɵɵtext(72, "Discount Figure");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(73, "input", 78);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(74, "div", 6)(75, "div", 7)(76, "label");
    i0.ɵɵtext(77, "Account");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(78, "select", 77)(79, "option", 51);
    i0.ɵɵtext(80, "Select");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(81, "option", 52);
    i0.ɵɵtext(82, "Account 1");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(83, "option", 53);
    i0.ɵɵtext(84, "Account 2");
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(85, "div", 1)(86, "div", 2)(87, "button", 14);
    i0.ɵɵlistener("click", function ManageStoreItemSubItemDiscountsComponent_ng_template_49_Template_button_click_87_listener() { i0.ɵɵrestoreView(_r123); const ctx_r124 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r124.updateItemSubitemMRP()); });
    i0.ɵɵtext(88, "Save");
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r20 = i0.ɵɵnextContext();
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("formGroup", ctx_r20.mrpForm);
    i0.ɵɵadvance(25);
    i0.ɵɵproperty("bsConfig", i0.ɵɵpureFunction0(3, _c0));
    i0.ɵɵadvance(9);
    i0.ɵɵproperty("bsConfig", i0.ɵɵpureFunction0(4, _c0));
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_51_div_17_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "From date is required ");
    i0.ɵɵelementEnd();
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_51_div_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 69);
    i0.ɵɵtemplate(1, ManageStoreItemSubItemDiscountsComponent_ng_template_51_div_17_div_1_Template, 2, 0, "div", 34);
    i0.ɵɵelementEnd();
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_51_div_26_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "To date is required ");
    i0.ɵɵelementEnd();
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_51_div_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 69);
    i0.ɵɵtemplate(1, ManageStoreItemSubItemDiscountsComponent_ng_template_51_div_26_div_1_Template, 2, 0, "div", 34);
    i0.ɵɵelementEnd();
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_51_option_51_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 27);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const country_r133 = ctx.$implicit;
    i0.ɵɵproperty("value", country_r133.CNTRY_ID);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", country_r133.CNTRY_NM, " ");
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_51_option_59_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 27);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const state_r134 = ctx.$implicit;
    i0.ɵɵproperty("value", state_r134.STATE_ID);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(state_r134.STATE_NM);
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_51_option_68_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 27);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const city_r135 = ctx.$implicit;
    i0.ɵɵproperty("value", city_r135.CITY_ID);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(city_r135.CITY_NM);
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_51_option_76_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 27);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const acc_r136 = ctx.$implicit;
    i0.ɵɵproperty("value", acc_r136.SubaccountId);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", acc_r136.OfficeName, " ");
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_51_Template(rf, ctx) { if (rf & 1) {
    const _r138 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 45)(1, "h4", 46);
    i0.ɵɵtext(2, "Add Preffered Discount");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 47);
    i0.ɵɵlistener("click", function ManageStoreItemSubItemDiscountsComponent_ng_template_51_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r138); const ctx_r137 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r137.modalRef.hide()); });
    i0.ɵɵelementStart(4, "span", 48);
    i0.ɵɵtext(5, "\u00D7");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(6, "div", 49)(7, "form")(8, "div", 1)(9, "div", 6)(10, "label");
    i0.ɵɵtext(11, "From Date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "div", 60)(13, "input", 61);
    i0.ɵɵlistener("ngModelChange", function ManageStoreItemSubItemDiscountsComponent_ng_template_51_Template_input_ngModelChange_13_listener($event) { i0.ɵɵrestoreView(_r138); const ctx_r139 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r139.addNewPreferredPartnerDiscount.ValidFrom = $event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "div", 62)(15, "span", 63);
    i0.ɵɵelement(16, "i", 64);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(17, ManageStoreItemSubItemDiscountsComponent_ng_template_51_div_17_Template, 2, 0, "div", 65);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(18, "div", 6)(19, "label");
    i0.ɵɵtext(20, "To Date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "div", 60)(22, "input", 66);
    i0.ɵɵlistener("ngModelChange", function ManageStoreItemSubItemDiscountsComponent_ng_template_51_Template_input_ngModelChange_22_listener($event) { i0.ɵɵrestoreView(_r138); const ctx_r140 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r140.addNewPreferredPartnerDiscount.ValidTo = $event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "div", 62)(24, "span", 63);
    i0.ɵɵelement(25, "i", 64);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(26, ManageStoreItemSubItemDiscountsComponent_ng_template_51_div_26_Template, 2, 0, "div", 65);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(27, "div", 6)(28, "div", 7)(29, "label");
    i0.ɵɵtext(30, "Discount %");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(31, "select", 70);
    i0.ɵɵlistener("click", function ManageStoreItemSubItemDiscountsComponent_ng_template_51_Template_select_click_31_listener($event) { i0.ɵɵrestoreView(_r138); const ctx_r141 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r141.onslectDiscountFlagPreddredDiscount($event)); });
    i0.ɵɵelementStart(32, "option", 51);
    i0.ɵɵtext(33, "Select");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(34, "option", 52);
    i0.ɵɵtext(35, "Yes");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(36, "option", 53);
    i0.ɵɵtext(37, "No");
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(38, "div", 1)(39, "div", 6)(40, "div", 7)(41, "label");
    i0.ɵɵtext(42, "Discount Figure");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(43, "input", 71);
    i0.ɵɵlistener("ngModelChange", function ManageStoreItemSubItemDiscountsComponent_ng_template_51_Template_input_ngModelChange_43_listener($event) { i0.ɵɵrestoreView(_r138); const ctx_r142 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r142.addNewPreferredPartnerDiscount.PrefDiscountNumber = $event); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(44, "div", 6)(45, "div", 7)(46, "label");
    i0.ɵɵtext(47, "Country");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(48, "select", 79);
    i0.ɵɵlistener("change", function ManageStoreItemSubItemDiscountsComponent_ng_template_51_Template_select_change_48_listener($event) { i0.ɵɵrestoreView(_r138); const ctx_r143 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r143.changeCountry($event)); });
    i0.ɵɵelementStart(49, "option", 10);
    i0.ɵɵtext(50, "Select");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(51, ManageStoreItemSubItemDiscountsComponent_ng_template_51_option_51_Template, 2, 2, "option", 11);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(52, "div", 6)(53, "div", 7)(54, "label");
    i0.ɵɵtext(55, "State");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(56, "select", 79);
    i0.ɵɵlistener("change", function ManageStoreItemSubItemDiscountsComponent_ng_template_51_Template_select_change_56_listener($event) { i0.ɵɵrestoreView(_r138); const ctx_r144 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r144.changeState($event)); });
    i0.ɵɵelementStart(57, "option", 10);
    i0.ɵɵtext(58, "Select");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(59, ManageStoreItemSubItemDiscountsComponent_ng_template_51_option_59_Template, 2, 2, "option", 11);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(60, "div", 1)(61, "div", 6)(62, "div", 7)(63, "label");
    i0.ɵɵtext(64, "City");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(65, "select", 79);
    i0.ɵɵlistener("change", function ManageStoreItemSubItemDiscountsComponent_ng_template_51_Template_select_change_65_listener($event) { i0.ɵɵrestoreView(_r138); const ctx_r145 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r145.changeCity($event)); });
    i0.ɵɵelementStart(66, "option", 80);
    i0.ɵɵtext(67, "Select");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(68, ManageStoreItemSubItemDiscountsComponent_ng_template_51_option_68_Template, 2, 2, "option", 11);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(69, "div", 6)(70, "div", 7)(71, "label");
    i0.ɵɵtext(72, "Network Accounts");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(73, "select", 79);
    i0.ɵɵlistener("change", function ManageStoreItemSubItemDiscountsComponent_ng_template_51_Template_select_change_73_listener($event) { i0.ɵɵrestoreView(_r138); const ctx_r146 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r146.onSelectNetworkAcc($event)); });
    i0.ɵɵelementStart(74, "option", 51);
    i0.ɵɵtext(75, "Select");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(76, ManageStoreItemSubItemDiscountsComponent_ng_template_51_option_76_Template, 2, 2, "option", 11);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(77, "div", 1)(78, "div", 2)(79, "button", 14);
    i0.ɵɵlistener("click", function ManageStoreItemSubItemDiscountsComponent_ng_template_51_Template_button_click_79_listener() { i0.ɵɵrestoreView(_r138); const ctx_r147 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r147.addPrefferedDiscount()); });
    i0.ɵɵtext(80, "Add");
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r22 = i0.ɵɵnextContext();
    i0.ɵɵadvance(13);
    i0.ɵɵproperty("ngModel", ctx_r22.addNewPreferredPartnerDiscount.ValidFrom)("bsConfig", i0.ɵɵpureFunction0(10, _c0));
    i0.ɵɵadvance(9);
    i0.ɵɵproperty("ngModel", ctx_r22.addNewPreferredPartnerDiscount.ValidTo)("bsConfig", i0.ɵɵpureFunction1(11, _c1, ctx_r22.addNewPreferredPartnerDiscount.ValidFrom ? ctx_r22.addNewPreferredPartnerDiscount.ValidFrom : null))("disabled", !ctx_r22.addNewPreferredPartnerDiscount.ValidFrom);
    i0.ɵɵadvance(21);
    i0.ɵɵproperty("ngModel", ctx_r22.addNewPreferredPartnerDiscount.PrefDiscountNumber);
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("ngForOf", ctx_r22.countryList);
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("ngForOf", ctx_r22.stateList);
    i0.ɵɵadvance(9);
    i0.ɵɵproperty("ngForOf", ctx_r22.cityList);
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("ngForOf", ctx_r22.secondaryAcc);
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_28_table_1_tr_16_img_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 43);
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_28_table_1_tr_16_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 44);
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_28_table_1_tr_16_img_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 43);
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_28_table_1_tr_16_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 44);
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_28_table_1_tr_16_Template(rf, ctx) { if (rf & 1) {
    const _r172 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr")(1, "td")(2, "div");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "td")(5, "div");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "td", 36)(8, "div");
    i0.ɵɵtemplate(9, ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_28_table_1_tr_16_img_9_Template, 1, 0, "img", 103);
    i0.ɵɵtemplate(10, ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_28_table_1_tr_16_ng_template_10_Template, 1, 0, "ng-template", null, 104, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "td", 36)(13, "div");
    i0.ɵɵtemplate(14, ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_28_table_1_tr_16_img_14_Template, 1, 0, "img", 103);
    i0.ɵɵtemplate(15, ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_28_table_1_tr_16_ng_template_15_Template, 1, 0, "ng-template", null, 105, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(17, "td")(18, "div");
    i0.ɵɵtext(19);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(20, "td", 106)(21, "i", 107);
    i0.ɵɵlistener("click", function ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_28_table_1_tr_16_Template_i_click_21_listener() { const restoredCtx = i0.ɵɵrestoreView(_r172); const discount_r164 = restoredCtx.$implicit; const ctx_r171 = i0.ɵɵnextContext(4); const _r7 = i0.ɵɵreference(38); return i0.ɵɵresetView(ctx_r171.openEditRegularDiscountModal(_r7, discount_r164)); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const discount_r164 = ctx.$implicit;
    const _r166 = i0.ɵɵreference(11);
    const _r169 = i0.ɵɵreference(16);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", discount_r164.RETAIL_B2B_DISCOUNT_VALD_FRM_DATE || "NA", " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", discount_r164.RETAIL_B2B_DISCOUNT_VALID_TO_DATE || "NA", " ");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", discount_r164.RETAIL_B2B_ITEM_DISCNT_VALID_FLG)("ngIfElse", _r166);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", discount_r164.RETAIL_B2B_ITEM_SPL_DISC_PERCNTG_FIG)("ngIfElse", _r169);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", discount_r164.RETAIL_B2B_DISCOUNT_FIGURE || "NA", " ");
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_28_table_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "table", 33)(1, "thead")(2, "tr")(3, "th");
    i0.ɵɵtext(4, "Valid From");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "th");
    i0.ɵɵtext(6, "Valid To");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "th");
    i0.ɵɵtext(8, "Discount Validity");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "th");
    i0.ɵɵtext(10, "%");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "th");
    i0.ɵɵtext(12, "Discount Figure");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "th");
    i0.ɵɵtext(14, "Edit");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(15, "tbody");
    i0.ɵɵtemplate(16, ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_28_table_1_tr_16_Template, 22, 7, "tr", 35);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r160 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(16);
    i0.ɵɵproperty("ngForOf", ctx_r160.dicountArr);
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_28_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 108);
    i0.ɵɵtext(1, "No data available.");
    i0.ɵɵelementEnd();
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_28_Template(rf, ctx) { if (rf & 1) {
    const _r174 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_28_table_1_Template, 17, 1, "table", 99);
    i0.ɵɵtemplate(2, ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_28_ng_template_2_Template, 2, 0, "ng-template", null, 100, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementStart(4, "div", 1)(5, "div", 101)(6, "button", 102);
    i0.ɵɵlistener("click", function ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_28_Template_button_click_6_listener() { i0.ɵɵrestoreView(_r174); const ctx_r173 = i0.ɵɵnextContext(2); const _r9 = i0.ɵɵreference(40); return i0.ɵɵresetView(ctx_r173.openAddRegularDiscountModal(_r9)); });
    i0.ɵɵtext(7, "Add");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const _r161 = i0.ɵɵreference(3);
    const ctx_r148 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r148.dicountArr && ctx_r148.dicountArr.length > 0)("ngIfElse", _r161);
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_29_table_1_tr_20_img_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 43);
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_29_table_1_tr_20_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 44);
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_29_table_1_tr_20_img_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 43);
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_29_table_1_tr_20_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 44);
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_29_table_1_tr_20_Template(rf, ctx) { if (rf & 1) {
    const _r187 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr")(1, "td")(2, "div");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "td")(5, "div");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "td", 36)(8, "div");
    i0.ɵɵtemplate(9, ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_29_table_1_tr_20_img_9_Template, 1, 0, "img", 103);
    i0.ɵɵtemplate(10, ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_29_table_1_tr_20_ng_template_10_Template, 1, 0, "ng-template", null, 104, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "td", 36)(13, "div");
    i0.ɵɵtemplate(14, ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_29_table_1_tr_20_img_14_Template, 1, 0, "img", 103);
    i0.ɵɵtemplate(15, ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_29_table_1_tr_20_ng_template_15_Template, 1, 0, "ng-template", null, 105, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(17, "td")(18, "div");
    i0.ɵɵtext(19);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(20, "td")(21, "div");
    i0.ɵɵtext(22);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(23, "td")(24, "div");
    i0.ɵɵtext(25);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(26, "td", 106)(27, "i", 107);
    i0.ɵɵlistener("click", function ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_29_table_1_tr_20_Template_i_click_27_listener() { const restoredCtx = i0.ɵɵrestoreView(_r187); const discount_r179 = restoredCtx.$implicit; const ctx_r186 = i0.ɵɵnextContext(4); const _r11 = i0.ɵɵreference(42); return i0.ɵɵresetView(ctx_r186.openEditItemCountDiscountModal(_r11, discount_r179)); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const discount_r179 = ctx.$implicit;
    const _r181 = i0.ɵɵreference(11);
    const _r184 = i0.ɵɵreference(16);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", discount_r179.RETAIL_B2B_DISCOUNT_VALD_FRM_DATE || "NA", " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", discount_r179.RETAIL_B2B_DISCOUNT_VALID_TO_DATE || "NA", " ");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", discount_r179.RETAIL_B2B_ITEM_DISCNT_VALID_FLG)("ngIfElse", _r181);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", discount_r179.RETAIL_B2B_ITEM_SPL_DISC_PERCNTG_FIG)("ngIfElse", _r184);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", discount_r179.RETAIL_B2B_DISCOUNT_FIGURE || "NA", " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", discount_r179.RETAIL_B2B_ITEM_COUNT || "NA", " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", discount_r179.RETAIL_B2B_ITEM_UNIT || "NA", " ");
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_29_table_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "table", 33)(1, "thead")(2, "tr")(3, "th");
    i0.ɵɵtext(4, "Valid From");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "th");
    i0.ɵɵtext(6, "Valid To");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "th");
    i0.ɵɵtext(8, "Discount Validity");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "th");
    i0.ɵɵtext(10, "%");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "th");
    i0.ɵɵtext(12, "Discount Figure");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "th");
    i0.ɵɵtext(14, "Item Counts");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "th");
    i0.ɵɵtext(16, "Units");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "th");
    i0.ɵɵtext(18, "Edit");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(19, "tbody");
    i0.ɵɵtemplate(20, ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_29_table_1_tr_20_Template, 28, 9, "tr", 35);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r175 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(20);
    i0.ɵɵproperty("ngForOf", ctx_r175.dicountArr);
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_29_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 108);
    i0.ɵɵtext(1, "No data available.");
    i0.ɵɵelementEnd();
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_29_Template(rf, ctx) { if (rf & 1) {
    const _r189 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_29_table_1_Template, 21, 1, "table", 99);
    i0.ɵɵtemplate(2, ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_29_ng_template_2_Template, 2, 0, "ng-template", null, 109, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementStart(4, "div", 1)(5, "div", 101)(6, "button", 102);
    i0.ɵɵlistener("click", function ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_29_Template_button_click_6_listener() { i0.ɵɵrestoreView(_r189); const ctx_r188 = i0.ɵɵnextContext(2); const _r13 = i0.ɵɵreference(44); return i0.ɵɵresetView(ctx_r188.openAddItemCountDiscountModal(_r13)); });
    i0.ɵɵtext(7, "Add");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const _r176 = i0.ɵɵreference(3);
    const ctx_r149 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r149.dicountArr && ctx_r149.dicountArr.length > 0)("ngIfElse", _r176);
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_30_table_1_tr_16_img_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 43);
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_30_table_1_tr_16_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 44);
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_30_table_1_tr_16_img_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 43);
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_30_table_1_tr_16_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 44);
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_30_table_1_tr_16_Template(rf, ctx) { if (rf & 1) {
    const _r202 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr")(1, "td")(2, "div");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "td")(5, "div");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "td", 36)(8, "div");
    i0.ɵɵtemplate(9, ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_30_table_1_tr_16_img_9_Template, 1, 0, "img", 103);
    i0.ɵɵtemplate(10, ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_30_table_1_tr_16_ng_template_10_Template, 1, 0, "ng-template", null, 104, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "td", 36)(13, "div");
    i0.ɵɵtemplate(14, ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_30_table_1_tr_16_img_14_Template, 1, 0, "img", 103);
    i0.ɵɵtemplate(15, ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_30_table_1_tr_16_ng_template_15_Template, 1, 0, "ng-template", null, 105, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(17, "td")(18, "div");
    i0.ɵɵtext(19);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(20, "td", 106)(21, "i", 107);
    i0.ɵɵlistener("click", function ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_30_table_1_tr_16_Template_i_click_21_listener() { const restoredCtx = i0.ɵɵrestoreView(_r202); const discount_r194 = restoredCtx.$implicit; const ctx_r201 = i0.ɵɵnextContext(4); const _r15 = i0.ɵɵreference(46); return i0.ɵɵresetView(ctx_r201.openEditPromotionalDiscountModal(_r15, discount_r194)); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const discount_r194 = ctx.$implicit;
    const _r196 = i0.ɵɵreference(11);
    const _r199 = i0.ɵɵreference(16);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", discount_r194.RETAIL_B2B_DISCOUNT_VALD_FRM_DATE || "NA", " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", discount_r194.RETAIL_B2B_DISCOUNT_VALID_TO_DATE || "NA", " ");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", discount_r194.RETAIL_B2B_ITEM_DISCNT_VALID_FLG)("ngIfElse", _r196);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", discount_r194.RETAIL_B2B_ITEM_SPL_DISC_PERCNTG_FIG)("ngIfElse", _r199);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", discount_r194.RETAIL_B2B_DISCOUNT_FIGURE || "NA", " ");
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_30_table_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "table", 33)(1, "thead")(2, "tr")(3, "th");
    i0.ɵɵtext(4, "Valid From");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "th");
    i0.ɵɵtext(6, "Valid To");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "th");
    i0.ɵɵtext(8, "Discount Validity");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "th");
    i0.ɵɵtext(10, "%");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "th");
    i0.ɵɵtext(12, "Discount Figure");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "th");
    i0.ɵɵtext(14, "Edit");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(15, "tbody");
    i0.ɵɵtemplate(16, ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_30_table_1_tr_16_Template, 22, 7, "tr", 35);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r190 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(16);
    i0.ɵɵproperty("ngForOf", ctx_r190.dicountArr);
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_30_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 108);
    i0.ɵɵtext(1, "No data available.");
    i0.ɵɵelementEnd();
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_30_Template(rf, ctx) { if (rf & 1) {
    const _r204 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_30_table_1_Template, 17, 1, "table", 99);
    i0.ɵɵtemplate(2, ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_30_ng_template_2_Template, 2, 0, "ng-template", null, 110, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementStart(4, "div", 1)(5, "div", 101)(6, "button", 102);
    i0.ɵɵlistener("click", function ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_30_Template_button_click_6_listener() { i0.ɵɵrestoreView(_r204); const ctx_r203 = i0.ɵɵnextContext(2); const _r17 = i0.ɵɵreference(48); return i0.ɵɵresetView(ctx_r203.openAddPromotionaliscountModal(_r17)); });
    i0.ɵɵtext(7, "Add");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const _r191 = i0.ɵɵreference(3);
    const ctx_r150 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r150.dicountArr && ctx_r150.dicountArr.length > 0)("ngIfElse", _r191);
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_31_table_1_tr_18_img_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 43);
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_31_table_1_tr_18_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 44);
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_31_table_1_tr_18_img_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 43);
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_31_table_1_tr_18_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 44);
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_31_table_1_tr_18_Template(rf, ctx) { if (rf & 1) {
    const _r217 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr")(1, "td")(2, "div");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "td")(5, "div");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "td", 36)(8, "div");
    i0.ɵɵtemplate(9, ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_31_table_1_tr_18_img_9_Template, 1, 0, "img", 103);
    i0.ɵɵtemplate(10, ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_31_table_1_tr_18_ng_template_10_Template, 1, 0, "ng-template", null, 104, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "td", 36)(13, "div");
    i0.ɵɵtemplate(14, ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_31_table_1_tr_18_img_14_Template, 1, 0, "img", 103);
    i0.ɵɵtemplate(15, ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_31_table_1_tr_18_ng_template_15_Template, 1, 0, "ng-template", null, 105, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(17, "td")(18, "div");
    i0.ɵɵtext(19);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(20, "td")(21, "div");
    i0.ɵɵtext(22);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(23, "td", 106)(24, "i", 107);
    i0.ɵɵlistener("click", function ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_31_table_1_tr_18_Template_i_click_24_listener() { const restoredCtx = i0.ɵɵrestoreView(_r217); const discount_r209 = restoredCtx.$implicit; const ctx_r216 = i0.ɵɵnextContext(4); const _r19 = i0.ɵɵreference(50); return i0.ɵɵresetView(ctx_r216.openEditPrefferedDiscountModal(_r19, discount_r209)); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const discount_r209 = ctx.$implicit;
    const _r211 = i0.ɵɵreference(11);
    const _r214 = i0.ɵɵreference(16);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", discount_r209.RETAIL_B2B_DISCOUNT_VALD_FRM_DATE || "NA", " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", discount_r209.RETAIL_B2B_DISCOUNT_VALID_TO_DATE || "NA", " ");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", discount_r209.RETAIL_B2B_ITEM_DISCNT_VALID_FLG)("ngIfElse", _r211);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", discount_r209.RETAIL_B2B_ITEM_SPL_DISC_PERCNTG_FIG)("ngIfElse", _r214);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", discount_r209.RETAIL_B2B_DISCOUNT_FIGURE || "NA", " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", discount_r209.RETAIL_B2B_ITEM_ACCOUNT || "NA", " ");
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_31_table_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "table", 33)(1, "thead")(2, "tr")(3, "th");
    i0.ɵɵtext(4, "Valid From");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "th");
    i0.ɵɵtext(6, "Valid To");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "th");
    i0.ɵɵtext(8, "Discount Validity");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "th");
    i0.ɵɵtext(10, "%");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "th");
    i0.ɵɵtext(12, "Discount Figure");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "th");
    i0.ɵɵtext(14, "Account");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "th");
    i0.ɵɵtext(16, "Edit");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(17, "tbody");
    i0.ɵɵtemplate(18, ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_31_table_1_tr_18_Template, 25, 8, "tr", 35);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r205 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(18);
    i0.ɵɵproperty("ngForOf", ctx_r205.dicountArr);
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_31_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 108);
    i0.ɵɵtext(1, "No data available.");
    i0.ɵɵelementEnd();
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_31_Template(rf, ctx) { if (rf & 1) {
    const _r219 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_31_table_1_Template, 19, 1, "table", 99);
    i0.ɵɵtemplate(2, ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_31_ng_template_2_Template, 2, 0, "ng-template", null, 111, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementStart(4, "div", 1)(5, "div", 101)(6, "button", 102);
    i0.ɵɵlistener("click", function ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_31_Template_button_click_6_listener() { i0.ɵɵrestoreView(_r219); const ctx_r218 = i0.ɵɵnextContext(2); const _r21 = i0.ɵɵreference(52); return i0.ɵɵresetView(ctx_r218.openAddPrefferediscountModal(_r21)); });
    i0.ɵɵtext(7, "Add");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const _r206 = i0.ɵɵreference(3);
    const ctx_r151 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r151.dicountArr && ctx_r151.dicountArr.length > 0)("ngIfElse", _r206);
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_53_table_1_tr_16_img_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 43);
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_53_table_1_tr_16_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 44);
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_53_table_1_tr_16_img_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 43);
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_53_table_1_tr_16_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 44);
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_53_table_1_tr_16_Template(rf, ctx) { if (rf & 1) {
    const _r232 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr")(1, "td")(2, "div");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "td")(5, "div");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "td", 36)(8, "div");
    i0.ɵɵtemplate(9, ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_53_table_1_tr_16_img_9_Template, 1, 0, "img", 103);
    i0.ɵɵtemplate(10, ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_53_table_1_tr_16_ng_template_10_Template, 1, 0, "ng-template", null, 104, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "td", 36)(13, "div");
    i0.ɵɵtemplate(14, ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_53_table_1_tr_16_img_14_Template, 1, 0, "img", 103);
    i0.ɵɵtemplate(15, ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_53_table_1_tr_16_ng_template_15_Template, 1, 0, "ng-template", null, 105, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(17, "td")(18, "div");
    i0.ɵɵtext(19);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(20, "td", 106)(21, "i", 107);
    i0.ɵɵlistener("click", function ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_53_table_1_tr_16_Template_i_click_21_listener() { const restoredCtx = i0.ɵɵrestoreView(_r232); const discount_r224 = restoredCtx.$implicit; const ctx_r231 = i0.ɵɵnextContext(4); const _r7 = i0.ɵɵreference(38); return i0.ɵɵresetView(ctx_r231.openEditRegularDiscountModal(_r7, discount_r224)); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const discount_r224 = ctx.$implicit;
    const _r226 = i0.ɵɵreference(11);
    const _r229 = i0.ɵɵreference(16);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", discount_r224.RETAIL_B2B_DISCOUNT_VALD_FRM_DATE || "NA", " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", discount_r224.RETAIL_B2B_DISCOUNT_VALID_TO_DATE || "NA", " ");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", discount_r224.RETAIL_B2B_ITEM_DISCNT_VALID_FLG)("ngIfElse", _r226);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", discount_r224.RETAIL_B2B_ITEM_SPL_DISC_PERCNTG_FIG)("ngIfElse", _r229);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", discount_r224.RETAIL_B2B_DISCOUNT_FIGURE || "NA", " ");
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_53_table_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "table", 33)(1, "thead")(2, "tr")(3, "th");
    i0.ɵɵtext(4, "Valid From");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "th");
    i0.ɵɵtext(6, "Valid To");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "th");
    i0.ɵɵtext(8, "Discount Validity");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "th");
    i0.ɵɵtext(10, "%");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "th");
    i0.ɵɵtext(12, "Discount Figure");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "th");
    i0.ɵɵtext(14, "Edit");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(15, "tbody");
    i0.ɵɵtemplate(16, ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_53_table_1_tr_16_Template, 22, 7, "tr", 35);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r220 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(16);
    i0.ɵɵproperty("ngForOf", ctx_r220.dicountArr);
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_53_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 108);
    i0.ɵɵtext(1, "No data available.");
    i0.ɵɵelementEnd();
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_53_Template(rf, ctx) { if (rf & 1) {
    const _r234 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_53_table_1_Template, 17, 1, "table", 99);
    i0.ɵɵtemplate(2, ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_53_ng_template_2_Template, 2, 0, "ng-template", null, 112, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementStart(4, "div", 1)(5, "div", 101)(6, "button", 102);
    i0.ɵɵlistener("click", function ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_53_Template_button_click_6_listener() { i0.ɵɵrestoreView(_r234); const ctx_r233 = i0.ɵɵnextContext(2); const _r9 = i0.ɵɵreference(40); return i0.ɵɵresetView(ctx_r233.openAddRegularDiscountModal(_r9)); });
    i0.ɵɵtext(7, "Add");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const _r221 = i0.ɵɵreference(3);
    const ctx_r152 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r152.dicountArr && ctx_r152.dicountArr.length > 0)("ngIfElse", _r221);
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_54_table_1_tr_20_img_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 43);
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_54_table_1_tr_20_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 44);
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_54_table_1_tr_20_img_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 43);
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_54_table_1_tr_20_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 44);
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_54_table_1_tr_20_Template(rf, ctx) { if (rf & 1) {
    const _r247 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr")(1, "td")(2, "div");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "td")(5, "div");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "td", 36)(8, "div");
    i0.ɵɵtemplate(9, ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_54_table_1_tr_20_img_9_Template, 1, 0, "img", 103);
    i0.ɵɵtemplate(10, ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_54_table_1_tr_20_ng_template_10_Template, 1, 0, "ng-template", null, 104, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "td", 36)(13, "div");
    i0.ɵɵtemplate(14, ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_54_table_1_tr_20_img_14_Template, 1, 0, "img", 103);
    i0.ɵɵtemplate(15, ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_54_table_1_tr_20_ng_template_15_Template, 1, 0, "ng-template", null, 105, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(17, "td")(18, "div");
    i0.ɵɵtext(19);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(20, "td")(21, "div");
    i0.ɵɵtext(22);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(23, "td")(24, "div");
    i0.ɵɵtext(25);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(26, "td", 106)(27, "i", 107);
    i0.ɵɵlistener("click", function ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_54_table_1_tr_20_Template_i_click_27_listener() { const restoredCtx = i0.ɵɵrestoreView(_r247); const discount_r239 = restoredCtx.$implicit; const ctx_r246 = i0.ɵɵnextContext(4); const _r11 = i0.ɵɵreference(42); return i0.ɵɵresetView(ctx_r246.openEditItemCountDiscountModal(_r11, discount_r239)); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const discount_r239 = ctx.$implicit;
    const _r241 = i0.ɵɵreference(11);
    const _r244 = i0.ɵɵreference(16);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", discount_r239.RETAIL_B2B_DISCOUNT_VALD_FRM_DATE || "NA", " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", discount_r239.RETAIL_B2B_DISCOUNT_VALID_TO_DATE || "NA", " ");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", discount_r239.RETAIL_B2B_ITEM_DISCNT_VALID_FLG)("ngIfElse", _r241);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", discount_r239.RETAIL_B2B_ITEM_SPL_DISC_PERCNTG_FIG)("ngIfElse", _r244);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", discount_r239.RETAIL_B2B_DISCOUNT_FIGURE || "NA", " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", discount_r239.RETAIL_B2B_ITEM_COUNT || "NA", " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", discount_r239.RETAIL_B2B_ITEM_UNIT || "NA", " ");
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_54_table_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "table", 33)(1, "thead")(2, "tr")(3, "th");
    i0.ɵɵtext(4, "Valid From");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "th");
    i0.ɵɵtext(6, "Valid To");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "th");
    i0.ɵɵtext(8, "Discount Validity");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "th");
    i0.ɵɵtext(10, "%");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "th");
    i0.ɵɵtext(12, "Discount Figure");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "th");
    i0.ɵɵtext(14, "Item Counts");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "th");
    i0.ɵɵtext(16, "Units");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "th");
    i0.ɵɵtext(18, "Edit");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(19, "tbody");
    i0.ɵɵtemplate(20, ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_54_table_1_tr_20_Template, 28, 9, "tr", 35);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r235 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(20);
    i0.ɵɵproperty("ngForOf", ctx_r235.dicountArr);
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_54_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 108);
    i0.ɵɵtext(1, "No data available.");
    i0.ɵɵelementEnd();
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_54_Template(rf, ctx) { if (rf & 1) {
    const _r249 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_54_table_1_Template, 21, 1, "table", 99);
    i0.ɵɵtemplate(2, ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_54_ng_template_2_Template, 2, 0, "ng-template", null, 113, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementStart(4, "div", 1)(5, "div", 101)(6, "button", 102);
    i0.ɵɵlistener("click", function ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_54_Template_button_click_6_listener() { i0.ɵɵrestoreView(_r249); const ctx_r248 = i0.ɵɵnextContext(2); const _r13 = i0.ɵɵreference(44); return i0.ɵɵresetView(ctx_r248.openAddItemCountDiscountModal(_r13)); });
    i0.ɵɵtext(7, "Add");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const _r236 = i0.ɵɵreference(3);
    const ctx_r153 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r153.dicountArr && ctx_r153.dicountArr.length > 0)("ngIfElse", _r236);
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_55_table_1_tr_16_img_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 43);
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_55_table_1_tr_16_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 44);
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_55_table_1_tr_16_img_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 43);
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_55_table_1_tr_16_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 44);
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_55_table_1_tr_16_Template(rf, ctx) { if (rf & 1) {
    const _r262 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr")(1, "td")(2, "div");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "td")(5, "div");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "td", 36)(8, "div");
    i0.ɵɵtemplate(9, ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_55_table_1_tr_16_img_9_Template, 1, 0, "img", 103);
    i0.ɵɵtemplate(10, ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_55_table_1_tr_16_ng_template_10_Template, 1, 0, "ng-template", null, 104, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "td", 36)(13, "div");
    i0.ɵɵtemplate(14, ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_55_table_1_tr_16_img_14_Template, 1, 0, "img", 103);
    i0.ɵɵtemplate(15, ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_55_table_1_tr_16_ng_template_15_Template, 1, 0, "ng-template", null, 105, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(17, "td")(18, "div");
    i0.ɵɵtext(19);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(20, "td", 106)(21, "i", 107);
    i0.ɵɵlistener("click", function ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_55_table_1_tr_16_Template_i_click_21_listener() { const restoredCtx = i0.ɵɵrestoreView(_r262); const discount_r254 = restoredCtx.$implicit; const ctx_r261 = i0.ɵɵnextContext(4); const _r15 = i0.ɵɵreference(46); return i0.ɵɵresetView(ctx_r261.openEditPromotionalDiscountModal(_r15, discount_r254)); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const discount_r254 = ctx.$implicit;
    const _r256 = i0.ɵɵreference(11);
    const _r259 = i0.ɵɵreference(16);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", discount_r254.RETAIL_B2B_DISCOUNT_VALD_FRM_DATE || "NA", " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", discount_r254.RETAIL_B2B_DISCOUNT_VALID_TO_DATE || "NA", " ");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", discount_r254.RETAIL_B2B_ITEM_DISCNT_VALID_FLG)("ngIfElse", _r256);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", discount_r254.RETAIL_B2B_ITEM_SPL_DISC_PERCNTG_FIG)("ngIfElse", _r259);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", discount_r254.RETAIL_B2B_DISCOUNT_FIGURE || "NA", " ");
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_55_table_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "table", 33)(1, "thead")(2, "tr")(3, "th");
    i0.ɵɵtext(4, "Valid From");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "th");
    i0.ɵɵtext(6, "Valid To");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "th");
    i0.ɵɵtext(8, "Discount Validity");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "th");
    i0.ɵɵtext(10, "%");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "th");
    i0.ɵɵtext(12, "Discount Figure");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "th");
    i0.ɵɵtext(14, "Edit");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(15, "tbody");
    i0.ɵɵtemplate(16, ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_55_table_1_tr_16_Template, 22, 7, "tr", 35);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r250 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(16);
    i0.ɵɵproperty("ngForOf", ctx_r250.dicountArr);
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_55_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 108);
    i0.ɵɵtext(1, "No data available.");
    i0.ɵɵelementEnd();
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_55_Template(rf, ctx) { if (rf & 1) {
    const _r264 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_55_table_1_Template, 17, 1, "table", 99);
    i0.ɵɵtemplate(2, ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_55_ng_template_2_Template, 2, 0, "ng-template", null, 114, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementStart(4, "div", 1)(5, "div", 101)(6, "button", 102);
    i0.ɵɵlistener("click", function ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_55_Template_button_click_6_listener() { i0.ɵɵrestoreView(_r264); const ctx_r263 = i0.ɵɵnextContext(2); const _r17 = i0.ɵɵreference(48); return i0.ɵɵresetView(ctx_r263.openAddPromotionaliscountModal(_r17)); });
    i0.ɵɵtext(7, "Add");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const _r251 = i0.ɵɵreference(3);
    const ctx_r154 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r154.dicountArr && ctx_r154.dicountArr.length > 0)("ngIfElse", _r251);
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_56_table_1_tr_18_img_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 43);
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_56_table_1_tr_18_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 44);
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_56_table_1_tr_18_img_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 43);
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_56_table_1_tr_18_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 44);
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_56_table_1_tr_18_Template(rf, ctx) { if (rf & 1) {
    const _r277 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr")(1, "td")(2, "div");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "td")(5, "div");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "td", 36)(8, "div");
    i0.ɵɵtemplate(9, ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_56_table_1_tr_18_img_9_Template, 1, 0, "img", 103);
    i0.ɵɵtemplate(10, ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_56_table_1_tr_18_ng_template_10_Template, 1, 0, "ng-template", null, 104, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "td", 36)(13, "div");
    i0.ɵɵtemplate(14, ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_56_table_1_tr_18_img_14_Template, 1, 0, "img", 103);
    i0.ɵɵtemplate(15, ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_56_table_1_tr_18_ng_template_15_Template, 1, 0, "ng-template", null, 105, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(17, "td")(18, "div");
    i0.ɵɵtext(19);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(20, "td")(21, "div");
    i0.ɵɵtext(22);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(23, "td", 106)(24, "i", 107);
    i0.ɵɵlistener("click", function ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_56_table_1_tr_18_Template_i_click_24_listener() { const restoredCtx = i0.ɵɵrestoreView(_r277); const discount_r269 = restoredCtx.$implicit; const ctx_r276 = i0.ɵɵnextContext(4); const _r19 = i0.ɵɵreference(50); return i0.ɵɵresetView(ctx_r276.openEditPrefferedDiscountModal(_r19, discount_r269)); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const discount_r269 = ctx.$implicit;
    const _r271 = i0.ɵɵreference(11);
    const _r274 = i0.ɵɵreference(16);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", discount_r269.RETAIL_B2B_DISCOUNT_VALD_FRM_DATE || "NA", " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", discount_r269.RETAIL_B2B_DISCOUNT_VALID_TO_DATE || "NA", " ");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", discount_r269.RETAIL_B2B_ITEM_DISCNT_VALID_FLG)("ngIfElse", _r271);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", discount_r269.RETAIL_B2B_ITEM_SPL_DISC_PERCNTG_FIG)("ngIfElse", _r274);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", discount_r269.RETAIL_B2B_DISCOUNT_FIGURE || "NA", " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", discount_r269.RETAIL_B2B_ITEM_ACCOUNT || "NA", " ");
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_56_table_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "table", 33)(1, "thead")(2, "tr")(3, "th");
    i0.ɵɵtext(4, "Valid From");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "th");
    i0.ɵɵtext(6, "Valid To");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "th");
    i0.ɵɵtext(8, "Discount Validity");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "th");
    i0.ɵɵtext(10, "%");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "th");
    i0.ɵɵtext(12, "Discount Figure");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "th");
    i0.ɵɵtext(14, "Account");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "th");
    i0.ɵɵtext(16, "Edit");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(17, "tbody");
    i0.ɵɵtemplate(18, ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_56_table_1_tr_18_Template, 25, 8, "tr", 35);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r265 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(18);
    i0.ɵɵproperty("ngForOf", ctx_r265.dicountArr);
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_56_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 108);
    i0.ɵɵtext(1, "No data available.");
    i0.ɵɵelementEnd();
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_56_Template(rf, ctx) { if (rf & 1) {
    const _r279 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_56_table_1_Template, 19, 1, "table", 99);
    i0.ɵɵtemplate(2, ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_56_ng_template_2_Template, 2, 0, "ng-template", null, 115, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementStart(4, "div", 1)(5, "div", 101)(6, "button", 102);
    i0.ɵɵlistener("click", function ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_56_Template_button_click_6_listener() { i0.ɵɵrestoreView(_r279); const ctx_r278 = i0.ɵɵnextContext(2); const _r21 = i0.ɵɵreference(52); return i0.ɵɵresetView(ctx_r278.openAddPrefferediscountModal(_r21)); });
    i0.ɵɵtext(7, "Add");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const _r266 = i0.ɵɵreference(3);
    const ctx_r155 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r155.dicountArr && ctx_r155.dicountArr.length > 0)("ngIfElse", _r266);
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_78_table_1_tr_16_img_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 43);
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_78_table_1_tr_16_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 44);
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_78_table_1_tr_16_img_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 43);
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_78_table_1_tr_16_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 44);
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_78_table_1_tr_16_Template(rf, ctx) { if (rf & 1) {
    const _r292 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr")(1, "td")(2, "div");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "td")(5, "div");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "td", 36)(8, "div");
    i0.ɵɵtemplate(9, ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_78_table_1_tr_16_img_9_Template, 1, 0, "img", 103);
    i0.ɵɵtemplate(10, ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_78_table_1_tr_16_ng_template_10_Template, 1, 0, "ng-template", null, 104, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "td", 36)(13, "div");
    i0.ɵɵtemplate(14, ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_78_table_1_tr_16_img_14_Template, 1, 0, "img", 103);
    i0.ɵɵtemplate(15, ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_78_table_1_tr_16_ng_template_15_Template, 1, 0, "ng-template", null, 105, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(17, "td")(18, "div");
    i0.ɵɵtext(19);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(20, "td", 106)(21, "i", 107);
    i0.ɵɵlistener("click", function ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_78_table_1_tr_16_Template_i_click_21_listener() { const restoredCtx = i0.ɵɵrestoreView(_r292); const discount_r284 = restoredCtx.$implicit; const ctx_r291 = i0.ɵɵnextContext(4); const _r7 = i0.ɵɵreference(38); return i0.ɵɵresetView(ctx_r291.openEditRegularDiscountModal(_r7, discount_r284)); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const discount_r284 = ctx.$implicit;
    const _r286 = i0.ɵɵreference(11);
    const _r289 = i0.ɵɵreference(16);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", discount_r284.RETAIL_B2B_DISCOUNT_VALD_FRM_DATE || "NA", " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", discount_r284.RETAIL_B2B_DISCOUNT_VALID_TO_DATE || "NA", " ");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", discount_r284.RETAIL_B2B_ITEM_DISCNT_VALID_FLG)("ngIfElse", _r286);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", discount_r284.RETAIL_B2B_ITEM_SPL_DISC_PERCNTG_FIG)("ngIfElse", _r289);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", discount_r284.RETAIL_B2B_DISCOUNT_FIGURE || "NA", " ");
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_78_table_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "table", 33)(1, "thead")(2, "tr")(3, "th");
    i0.ɵɵtext(4, "Valid From");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "th");
    i0.ɵɵtext(6, "Valid To");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "th");
    i0.ɵɵtext(8, "Discount Validity");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "th");
    i0.ɵɵtext(10, "%");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "th");
    i0.ɵɵtext(12, "Discount Figure");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "th");
    i0.ɵɵtext(14, "Edit");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(15, "tbody");
    i0.ɵɵtemplate(16, ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_78_table_1_tr_16_Template, 22, 7, "tr", 35);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r280 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(16);
    i0.ɵɵproperty("ngForOf", ctx_r280.dicountArr);
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_78_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 108);
    i0.ɵɵtext(1, "No data available.");
    i0.ɵɵelementEnd();
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_78_Template(rf, ctx) { if (rf & 1) {
    const _r294 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_78_table_1_Template, 17, 1, "table", 99);
    i0.ɵɵtemplate(2, ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_78_ng_template_2_Template, 2, 0, "ng-template", null, 116, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementStart(4, "div", 1)(5, "div", 101)(6, "button", 102);
    i0.ɵɵlistener("click", function ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_78_Template_button_click_6_listener() { i0.ɵɵrestoreView(_r294); const ctx_r293 = i0.ɵɵnextContext(2); const _r9 = i0.ɵɵreference(40); return i0.ɵɵresetView(ctx_r293.openAddRegularDiscountModal(_r9)); });
    i0.ɵɵtext(7, "Add");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const _r281 = i0.ɵɵreference(3);
    const ctx_r156 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r156.dicountArr && ctx_r156.dicountArr.length > 0)("ngIfElse", _r281);
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_79_table_1_tr_20_img_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 43);
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_79_table_1_tr_20_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 44);
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_79_table_1_tr_20_img_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 43);
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_79_table_1_tr_20_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 44);
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_79_table_1_tr_20_Template(rf, ctx) { if (rf & 1) {
    const _r307 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr")(1, "td")(2, "div");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "td")(5, "div");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "td", 36)(8, "div");
    i0.ɵɵtemplate(9, ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_79_table_1_tr_20_img_9_Template, 1, 0, "img", 103);
    i0.ɵɵtemplate(10, ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_79_table_1_tr_20_ng_template_10_Template, 1, 0, "ng-template", null, 104, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "td", 36)(13, "div");
    i0.ɵɵtemplate(14, ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_79_table_1_tr_20_img_14_Template, 1, 0, "img", 103);
    i0.ɵɵtemplate(15, ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_79_table_1_tr_20_ng_template_15_Template, 1, 0, "ng-template", null, 105, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(17, "td")(18, "div");
    i0.ɵɵtext(19);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(20, "td")(21, "div");
    i0.ɵɵtext(22);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(23, "td")(24, "div");
    i0.ɵɵtext(25);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(26, "td", 106)(27, "i", 107);
    i0.ɵɵlistener("click", function ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_79_table_1_tr_20_Template_i_click_27_listener() { const restoredCtx = i0.ɵɵrestoreView(_r307); const discount_r299 = restoredCtx.$implicit; const ctx_r306 = i0.ɵɵnextContext(4); const _r11 = i0.ɵɵreference(42); return i0.ɵɵresetView(ctx_r306.openEditItemCountDiscountModal(_r11, discount_r299)); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const discount_r299 = ctx.$implicit;
    const _r301 = i0.ɵɵreference(11);
    const _r304 = i0.ɵɵreference(16);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", discount_r299.RETAIL_B2B_DISCOUNT_VALD_FRM_DATE || "NA", " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", discount_r299.RETAIL_B2B_DISCOUNT_VALID_TO_DATE || "NA", " ");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", discount_r299.RETAIL_B2B_ITEM_DISCNT_VALID_FLG)("ngIfElse", _r301);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", discount_r299.RETAIL_B2B_ITEM_SPL_DISC_PERCNTG_FIG)("ngIfElse", _r304);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", discount_r299.RETAIL_B2B_DISCOUNT_FIGURE || "NA", " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", discount_r299.RETAIL_B2B_ITEM_COUNT || "NA", " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", discount_r299.RETAIL_B2B_ITEM_UNIT || "NA", " ");
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_79_table_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "table", 33)(1, "thead")(2, "tr")(3, "th");
    i0.ɵɵtext(4, "Valid From");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "th");
    i0.ɵɵtext(6, "Valid To");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "th");
    i0.ɵɵtext(8, "Discount Validity");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "th");
    i0.ɵɵtext(10, "%");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "th");
    i0.ɵɵtext(12, "Discount Figure");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "th");
    i0.ɵɵtext(14, "Item Counts");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "th");
    i0.ɵɵtext(16, "Units");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "th");
    i0.ɵɵtext(18, "Edit");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(19, "tbody");
    i0.ɵɵtemplate(20, ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_79_table_1_tr_20_Template, 28, 9, "tr", 35);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r295 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(20);
    i0.ɵɵproperty("ngForOf", ctx_r295.dicountArr);
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_79_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 108);
    i0.ɵɵtext(1, "No data available.");
    i0.ɵɵelementEnd();
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_79_Template(rf, ctx) { if (rf & 1) {
    const _r309 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_79_table_1_Template, 21, 1, "table", 99);
    i0.ɵɵtemplate(2, ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_79_ng_template_2_Template, 2, 0, "ng-template", null, 117, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementStart(4, "div", 1)(5, "div", 101)(6, "button", 102);
    i0.ɵɵlistener("click", function ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_79_Template_button_click_6_listener() { i0.ɵɵrestoreView(_r309); const ctx_r308 = i0.ɵɵnextContext(2); const _r13 = i0.ɵɵreference(44); return i0.ɵɵresetView(ctx_r308.openAddItemCountDiscountModal(_r13)); });
    i0.ɵɵtext(7, "Add");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const _r296 = i0.ɵɵreference(3);
    const ctx_r157 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r157.dicountArr && ctx_r157.dicountArr.length > 0)("ngIfElse", _r296);
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_80_table_1_tr_16_img_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 43);
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_80_table_1_tr_16_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 44);
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_80_table_1_tr_16_img_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 43);
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_80_table_1_tr_16_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 44);
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_80_table_1_tr_16_Template(rf, ctx) { if (rf & 1) {
    const _r322 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr")(1, "td")(2, "div");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "td")(5, "div");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "td", 36)(8, "div");
    i0.ɵɵtemplate(9, ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_80_table_1_tr_16_img_9_Template, 1, 0, "img", 103);
    i0.ɵɵtemplate(10, ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_80_table_1_tr_16_ng_template_10_Template, 1, 0, "ng-template", null, 104, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "td", 36)(13, "div");
    i0.ɵɵtemplate(14, ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_80_table_1_tr_16_img_14_Template, 1, 0, "img", 103);
    i0.ɵɵtemplate(15, ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_80_table_1_tr_16_ng_template_15_Template, 1, 0, "ng-template", null, 105, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(17, "td")(18, "div");
    i0.ɵɵtext(19);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(20, "td", 106)(21, "i", 107);
    i0.ɵɵlistener("click", function ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_80_table_1_tr_16_Template_i_click_21_listener() { const restoredCtx = i0.ɵɵrestoreView(_r322); const discount_r314 = restoredCtx.$implicit; const ctx_r321 = i0.ɵɵnextContext(4); const _r15 = i0.ɵɵreference(46); return i0.ɵɵresetView(ctx_r321.openEditPromotionalDiscountModal(_r15, discount_r314)); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const discount_r314 = ctx.$implicit;
    const _r316 = i0.ɵɵreference(11);
    const _r319 = i0.ɵɵreference(16);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", discount_r314.RETAIL_B2B_DISCOUNT_VALD_FRM_DATE || "NA", " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", discount_r314.RETAIL_B2B_DISCOUNT_VALID_TO_DATE || "NA", " ");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", discount_r314.RETAIL_B2B_ITEM_DISCNT_VALID_FLG)("ngIfElse", _r316);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", discount_r314.RETAIL_B2B_ITEM_SPL_DISC_PERCNTG_FIG)("ngIfElse", _r319);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", discount_r314.RETAIL_B2B_DISCOUNT_FIGURE || "NA", " ");
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_80_table_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "table", 33)(1, "thead")(2, "tr")(3, "th");
    i0.ɵɵtext(4, "Valid From");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "th");
    i0.ɵɵtext(6, "Valid To");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "th");
    i0.ɵɵtext(8, "Discount Validity");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "th");
    i0.ɵɵtext(10, "%");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "th");
    i0.ɵɵtext(12, "Discount Figure");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "th");
    i0.ɵɵtext(14, "Edit");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(15, "tbody");
    i0.ɵɵtemplate(16, ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_80_table_1_tr_16_Template, 22, 7, "tr", 35);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r310 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(16);
    i0.ɵɵproperty("ngForOf", ctx_r310.dicountArr);
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_80_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 108);
    i0.ɵɵtext(1, "No data available.");
    i0.ɵɵelementEnd();
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_80_Template(rf, ctx) { if (rf & 1) {
    const _r324 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_80_table_1_Template, 17, 1, "table", 99);
    i0.ɵɵtemplate(2, ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_80_ng_template_2_Template, 2, 0, "ng-template", null, 118, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementStart(4, "div", 1)(5, "div", 101)(6, "button", 102);
    i0.ɵɵlistener("click", function ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_80_Template_button_click_6_listener() { i0.ɵɵrestoreView(_r324); const ctx_r323 = i0.ɵɵnextContext(2); const _r17 = i0.ɵɵreference(48); return i0.ɵɵresetView(ctx_r323.openAddPromotionaliscountModal(_r17)); });
    i0.ɵɵtext(7, "Add");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const _r311 = i0.ɵɵreference(3);
    const ctx_r158 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r158.dicountArr && ctx_r158.dicountArr.length > 0)("ngIfElse", _r311);
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_81_table_1_tr_18_img_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 43);
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_81_table_1_tr_18_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 44);
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_81_table_1_tr_18_img_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 43);
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_81_table_1_tr_18_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 44);
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_81_table_1_tr_18_Template(rf, ctx) { if (rf & 1) {
    const _r337 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr")(1, "td")(2, "div");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "td")(5, "div");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "td", 36)(8, "div");
    i0.ɵɵtemplate(9, ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_81_table_1_tr_18_img_9_Template, 1, 0, "img", 103);
    i0.ɵɵtemplate(10, ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_81_table_1_tr_18_ng_template_10_Template, 1, 0, "ng-template", null, 104, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "td", 36)(13, "div");
    i0.ɵɵtemplate(14, ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_81_table_1_tr_18_img_14_Template, 1, 0, "img", 103);
    i0.ɵɵtemplate(15, ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_81_table_1_tr_18_ng_template_15_Template, 1, 0, "ng-template", null, 105, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(17, "td")(18, "div");
    i0.ɵɵtext(19);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(20, "td")(21, "div");
    i0.ɵɵtext(22);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(23, "td", 106)(24, "i", 107);
    i0.ɵɵlistener("click", function ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_81_table_1_tr_18_Template_i_click_24_listener() { const restoredCtx = i0.ɵɵrestoreView(_r337); const discount_r329 = restoredCtx.$implicit; const ctx_r336 = i0.ɵɵnextContext(4); const _r19 = i0.ɵɵreference(50); return i0.ɵɵresetView(ctx_r336.openEditPrefferedDiscountModal(_r19, discount_r329)); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const discount_r329 = ctx.$implicit;
    const _r331 = i0.ɵɵreference(11);
    const _r334 = i0.ɵɵreference(16);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", discount_r329.RETAIL_B2B_DISCOUNT_VALD_FRM_DATE || "NA", " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", discount_r329.RETAIL_B2B_DISCOUNT_VALID_TO_DATE || "NA", " ");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", discount_r329.RETAIL_B2B_ITEM_DISCNT_VALID_FLG)("ngIfElse", _r331);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", discount_r329.RETAIL_B2B_ITEM_SPL_DISC_PERCNTG_FIG)("ngIfElse", _r334);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", discount_r329.RETAIL_B2B_DISCOUNT_FIGURE || "NA", " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", discount_r329.RETAIL_B2B_ITEM_ACCOUNT || "NA", " ");
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_81_table_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "table", 33)(1, "thead")(2, "tr")(3, "th");
    i0.ɵɵtext(4, "Valid From");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "th");
    i0.ɵɵtext(6, "Valid To");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "th");
    i0.ɵɵtext(8, "Discount Validity");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "th");
    i0.ɵɵtext(10, "%");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "th");
    i0.ɵɵtext(12, "Discount Figure");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "th");
    i0.ɵɵtext(14, "Account");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "th");
    i0.ɵɵtext(16, "Edit");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(17, "tbody");
    i0.ɵɵtemplate(18, ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_81_table_1_tr_18_Template, 25, 8, "tr", 35);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r325 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(18);
    i0.ɵɵproperty("ngForOf", ctx_r325.dicountArr);
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_81_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 108);
    i0.ɵɵtext(1, "No data available.");
    i0.ɵɵelementEnd();
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_81_Template(rf, ctx) { if (rf & 1) {
    const _r339 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_81_table_1_Template, 19, 1, "table", 99);
    i0.ɵɵtemplate(2, ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_81_ng_template_2_Template, 2, 0, "ng-template", null, 119, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementStart(4, "div", 1)(5, "div", 101)(6, "button", 102);
    i0.ɵɵlistener("click", function ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_81_Template_button_click_6_listener() { i0.ɵɵrestoreView(_r339); const ctx_r338 = i0.ɵɵnextContext(2); const _r21 = i0.ɵɵreference(52); return i0.ɵɵresetView(ctx_r338.openAddPrefferediscountModal(_r21)); });
    i0.ɵɵtext(7, "Add");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const _r326 = i0.ɵɵreference(3);
    const ctx_r159 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r159.dicountArr && ctx_r159.dicountArr.length > 0)("ngIfElse", _r326);
} }
function ManageStoreItemSubItemDiscountsComponent_ng_template_53_Template(rf, ctx) { if (rf & 1) {
    const _r341 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 45)(1, "h4", 46);
    i0.ɵɵtext(2, "B2B STAKEHOLDER DISCOUNTS FOR SUBITEM");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 47);
    i0.ɵɵlistener("click", function ManageStoreItemSubItemDiscountsComponent_ng_template_53_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r341); const ctx_r340 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r340.modalRef.hide()); });
    i0.ɵɵelementStart(4, "span", 48);
    i0.ɵɵtext(5, "\u00D7");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(6, "tabset", 81)(7, "tab", 82);
    i0.ɵɵlistener("selectTab", function ManageStoreItemSubItemDiscountsComponent_ng_template_53_Template_tab_selectTab_7_listener() { i0.ɵɵrestoreView(_r341); const ctx_r342 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r342.onTabChange("Distributors")); });
    i0.ɵɵelementStart(8, "div", 7)(9, "label", 83);
    i0.ɵɵtext(10, "Select Discount Type");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "div", 84)(12, "div")(13, "label")(14, "input", 85);
    i0.ɵɵlistener("ngModelChange", function ManageStoreItemSubItemDiscountsComponent_ng_template_53_Template_input_ngModelChange_14_listener($event) { i0.ɵɵrestoreView(_r341); const ctx_r343 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r343.selectedDiscountTypeTab1 = $event); })("change", function ManageStoreItemSubItemDiscountsComponent_ng_template_53_Template_input_change_14_listener($event) { i0.ɵɵrestoreView(_r341); const ctx_r344 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r344.onSelecttab1($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵtext(15, " Regular Discount ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "div")(17, "label")(18, "input", 86);
    i0.ɵɵlistener("ngModelChange", function ManageStoreItemSubItemDiscountsComponent_ng_template_53_Template_input_ngModelChange_18_listener($event) { i0.ɵɵrestoreView(_r341); const ctx_r345 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r345.selectedDiscountTypeTab1 = $event); })("change", function ManageStoreItemSubItemDiscountsComponent_ng_template_53_Template_input_change_18_listener($event) { i0.ɵɵrestoreView(_r341); const ctx_r346 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r346.onSelecttab1($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵtext(19, " Item Counts Discount ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(20, "div")(21, "label")(22, "input", 87);
    i0.ɵɵlistener("ngModelChange", function ManageStoreItemSubItemDiscountsComponent_ng_template_53_Template_input_ngModelChange_22_listener($event) { i0.ɵɵrestoreView(_r341); const ctx_r347 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r347.selectedDiscountTypeTab1 = $event); })("change", function ManageStoreItemSubItemDiscountsComponent_ng_template_53_Template_input_change_22_listener($event) { i0.ɵɵrestoreView(_r341); const ctx_r348 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r348.onSelecttab1($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵtext(23, " Promotional Discount ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(24, "div")(25, "label")(26, "input", 88);
    i0.ɵɵlistener("ngModelChange", function ManageStoreItemSubItemDiscountsComponent_ng_template_53_Template_input_ngModelChange_26_listener($event) { i0.ɵɵrestoreView(_r341); const ctx_r349 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r349.selectedDiscountTypeTab1 = $event); })("change", function ManageStoreItemSubItemDiscountsComponent_ng_template_53_Template_input_change_26_listener($event) { i0.ɵɵrestoreView(_r341); const ctx_r350 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r350.onSelecttab1($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵtext(27, " Preffered Partner Discount ");
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(28, ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_28_Template, 8, 2, "div", 34);
    i0.ɵɵtemplate(29, ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_29_Template, 8, 2, "div", 34);
    i0.ɵɵtemplate(30, ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_30_Template, 8, 2, "div", 34);
    i0.ɵɵtemplate(31, ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_31_Template, 8, 2, "div", 34);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(32, "tab", 89);
    i0.ɵɵlistener("selectTab", function ManageStoreItemSubItemDiscountsComponent_ng_template_53_Template_tab_selectTab_32_listener() { i0.ɵɵrestoreView(_r341); const ctx_r351 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r351.onTabChange("Retailers")); });
    i0.ɵɵelementStart(33, "div", 7)(34, "label", 83);
    i0.ɵɵtext(35, "Select Discount Type");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(36, "div", 84)(37, "div")(38, "label")(39, "input", 90);
    i0.ɵɵlistener("ngModelChange", function ManageStoreItemSubItemDiscountsComponent_ng_template_53_Template_input_ngModelChange_39_listener($event) { i0.ɵɵrestoreView(_r341); const ctx_r352 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r352.selectedDiscountTypeTab2 = $event); })("change", function ManageStoreItemSubItemDiscountsComponent_ng_template_53_Template_input_change_39_listener($event) { i0.ɵɵrestoreView(_r341); const ctx_r353 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r353.onSelecttab2($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵtext(40, " Regular Discount ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(41, "div")(42, "label")(43, "input", 91);
    i0.ɵɵlistener("ngModelChange", function ManageStoreItemSubItemDiscountsComponent_ng_template_53_Template_input_ngModelChange_43_listener($event) { i0.ɵɵrestoreView(_r341); const ctx_r354 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r354.selectedDiscountTypeTab2 = $event); })("change", function ManageStoreItemSubItemDiscountsComponent_ng_template_53_Template_input_change_43_listener($event) { i0.ɵɵrestoreView(_r341); const ctx_r355 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r355.onSelecttab2($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵtext(44, " Item Counts Discount ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(45, "div")(46, "label")(47, "input", 92);
    i0.ɵɵlistener("ngModelChange", function ManageStoreItemSubItemDiscountsComponent_ng_template_53_Template_input_ngModelChange_47_listener($event) { i0.ɵɵrestoreView(_r341); const ctx_r356 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r356.selectedDiscountTypeTab2 = $event); })("change", function ManageStoreItemSubItemDiscountsComponent_ng_template_53_Template_input_change_47_listener($event) { i0.ɵɵrestoreView(_r341); const ctx_r357 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r357.onSelecttab2($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵtext(48, " Promotional Discount ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(49, "div")(50, "label")(51, "input", 93);
    i0.ɵɵlistener("ngModelChange", function ManageStoreItemSubItemDiscountsComponent_ng_template_53_Template_input_ngModelChange_51_listener($event) { i0.ɵɵrestoreView(_r341); const ctx_r358 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r358.selectedDiscountTypeTab2 = $event); })("change", function ManageStoreItemSubItemDiscountsComponent_ng_template_53_Template_input_change_51_listener($event) { i0.ɵɵrestoreView(_r341); const ctx_r359 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r359.onSelecttab2($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵtext(52, " Preffered Partner Discount ");
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(53, ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_53_Template, 8, 2, "div", 34);
    i0.ɵɵtemplate(54, ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_54_Template, 8, 2, "div", 34);
    i0.ɵɵtemplate(55, ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_55_Template, 8, 2, "div", 34);
    i0.ɵɵtemplate(56, ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_56_Template, 8, 2, "div", 34);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(57, "tab", 94);
    i0.ɵɵlistener("selectTab", function ManageStoreItemSubItemDiscountsComponent_ng_template_53_Template_tab_selectTab_57_listener() { i0.ɵɵrestoreView(_r341); const ctx_r360 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r360.onTabChange("Franchise")); });
    i0.ɵɵelementStart(58, "div", 7)(59, "label", 83);
    i0.ɵɵtext(60, "Select Discount Type");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(61, "div", 84)(62, "div")(63, "label")(64, "input", 95);
    i0.ɵɵlistener("ngModelChange", function ManageStoreItemSubItemDiscountsComponent_ng_template_53_Template_input_ngModelChange_64_listener($event) { i0.ɵɵrestoreView(_r341); const ctx_r361 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r361.selectedDiscountTypeTab3 = $event); })("change", function ManageStoreItemSubItemDiscountsComponent_ng_template_53_Template_input_change_64_listener($event) { i0.ɵɵrestoreView(_r341); const ctx_r362 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r362.onSelecttab3($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵtext(65, " Regular Discount ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(66, "div")(67, "label")(68, "input", 96);
    i0.ɵɵlistener("ngModelChange", function ManageStoreItemSubItemDiscountsComponent_ng_template_53_Template_input_ngModelChange_68_listener($event) { i0.ɵɵrestoreView(_r341); const ctx_r363 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r363.selectedDiscountTypeTab3 = $event); })("change", function ManageStoreItemSubItemDiscountsComponent_ng_template_53_Template_input_change_68_listener($event) { i0.ɵɵrestoreView(_r341); const ctx_r364 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r364.onSelecttab3($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵtext(69, " Item Counts Discount ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(70, "div")(71, "label")(72, "input", 97);
    i0.ɵɵlistener("ngModelChange", function ManageStoreItemSubItemDiscountsComponent_ng_template_53_Template_input_ngModelChange_72_listener($event) { i0.ɵɵrestoreView(_r341); const ctx_r365 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r365.selectedDiscountTypeTab3 = $event); })("change", function ManageStoreItemSubItemDiscountsComponent_ng_template_53_Template_input_change_72_listener($event) { i0.ɵɵrestoreView(_r341); const ctx_r366 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r366.onSelecttab3($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵtext(73, " Promotional Discount ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(74, "div")(75, "label")(76, "input", 98);
    i0.ɵɵlistener("ngModelChange", function ManageStoreItemSubItemDiscountsComponent_ng_template_53_Template_input_ngModelChange_76_listener($event) { i0.ɵɵrestoreView(_r341); const ctx_r367 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r367.selectedDiscountTypeTab3 = $event); })("change", function ManageStoreItemSubItemDiscountsComponent_ng_template_53_Template_input_change_76_listener($event) { i0.ɵɵrestoreView(_r341); const ctx_r368 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r368.onSelecttab3($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵtext(77, " Preffered Partner Discount ");
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(78, ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_78_Template, 8, 2, "div", 34);
    i0.ɵɵtemplate(79, ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_79_Template, 8, 2, "div", 34);
    i0.ɵɵtemplate(80, ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_80_Template, 8, 2, "div", 34);
    i0.ɵɵtemplate(81, ManageStoreItemSubItemDiscountsComponent_ng_template_53_div_81_Template, 8, 2, "div", 34);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r24 = i0.ɵɵnextContext();
    i0.ɵɵadvance(14);
    i0.ɵɵproperty("ngModel", ctx_r24.selectedDiscountTypeTab1);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngModel", ctx_r24.selectedDiscountTypeTab1);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngModel", ctx_r24.selectedDiscountTypeTab1);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngModel", ctx_r24.selectedDiscountTypeTab1);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r24.isRegularDiscountSelectedTab1);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r24.isItemCountDiscountSelectedTab1);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r24.isPromotionalDiscountSelectedTab1);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r24.isPrefferdPartnerDiscountSelectedTab1);
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("ngModel", ctx_r24.selectedDiscountTypeTab2);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngModel", ctx_r24.selectedDiscountTypeTab2);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngModel", ctx_r24.selectedDiscountTypeTab2);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngModel", ctx_r24.selectedDiscountTypeTab2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r24.isRegularDiscountSelectedTab2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r24.isItemCountDiscountSelectedTab2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r24.isPromotionalDiscountSelectedTab2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r24.isPrefferdPartnerDiscountSelectedTab2);
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("ngModel", ctx_r24.selectedDiscountTypeTab3);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngModel", ctx_r24.selectedDiscountTypeTab3);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngModel", ctx_r24.selectedDiscountTypeTab3);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngModel", ctx_r24.selectedDiscountTypeTab3);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r24.isRegularDiscountSelectedTab3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r24.isItemCountDiscountSelectedTab3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r24.isPromotionalDiscountSelectedTab3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r24.isPrefferdPartnerDiscountSelectedTab3);
} }
export class ManageStoreItemSubItemDiscountsComponent {
    constructor(apiService, modalService, formBuilder, toastr) {
        this.apiService = apiService;
        this.modalService = modalService;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.countryEvent = new EventEmitter();
        this.stateEvent = new EventEmitter();
        this.cityEvent = new EventEmitter();
        this.imgURL = this.apiService.imgURL;
        this.b2bItemDiscount = {
            Acctid: 0,
            Subacctid: 0,
            Storeid: 0,
            ProductId: 0,
            ItemId: 0,
            SubItemId: 0,
            Retailer_Flg: 0,
            Distributor_Flg: 0,
            Franchisee_flg: 0,
            CountsOnCart: 1,
            PercntgFigure: 0,
            Percntg_Flg: 0,
            Regular_Discount_Flg: 0,
            Item_Counts_Discount_Flg: 0,
            Promotional_Discount_Flg: 0,
            FromDate: '',
            ToDate: ''
        };
        this.addNewPreferredPartnerDiscount = {
            ManufacturerAcctId: 0,
            ManufacturerSubacctId: 0,
            ManufacturerStoreId: 0,
            ProductId: 0,
            ItemId: 0,
            SubitemId: 0,
            DistributorFlg: 0,
            RetailerFlg: 0,
            FranchiseFlg: 0,
            PartnerSubacctId: 0,
            PartnerStoreId: 0,
            PercentFlag: 0,
            PrefDiscountNumber: 0,
            ValidFrom: '',
            ValidTo: ''
        };
        this.secondaryAcc = [];
        this.DisDatefrom = null;
        this.DisDateto = null;
        this.isRegularDiscountSelectedTab1 = false;
        this.isItemCountDiscountSelectedTab1 = false;
        this.isPromotionalDiscountSelectedTab1 = false;
        this.isPrefferdPartnerDiscountSelectedTab1 = false;
        this.isRegularDiscountSelectedTab2 = false;
        this.isItemCountDiscountSelectedTab2 = false;
        this.isPromotionalDiscountSelectedTab2 = false;
        this.isPrefferdPartnerDiscountSelectedTab2 = false;
        this.isRegularDiscountSelectedTab3 = false;
        this.isItemCountDiscountSelectedTab3 = false;
        this.isPromotionalDiscountSelectedTab3 = false;
        this.isPrefferdPartnerDiscountSelectedTab3 = false;
        this.dicountArr = [];
        this.discountEdit = {
            DiscountId: '',
            AcctBasedDiscntFlg: false,
            ItemCountsDiscntFlg: false,
            SubitemsCountsOnCart: 0,
            PercntgFlg: false,
            PercntgFigure: 0,
            DateFrom: '',
            DateTo: ''
        };
        this.selectedDiscountTypeTab1 = '';
        this.selectedDiscountTypeTab2 = '';
        this.selectedDiscountTypeTab3 = '';
        this.accountid = this.apiService.requiredLoginData.accountid;
        this.subaccountid = this.apiService.requiredLoginData.subaccountid;
        this.storeid = this.apiService.requiredLoginData.storeid;
        this.storeName = this.apiService.requiredLoginData.storeName;
        this.domainid = this.apiService.requiredLoginData.domainid;
    }
    ngOnInit() {
        this.getStoreList();
        this.getProductLineList();
        this.itemSubitemForm = this.formBuilder.group({
            SUBACCT_OFFICE_ID: this.storeid,
            RETAIL_D2C_PRODUCT_ID: ['', Validators.required],
            itemid: ['', Validators.required],
        });
        this.discountForm = this.formBuilder.group({
            RETAIL_DISCOUNT_FIGURE: ['', Validators.required],
            RETAIL_D2C_DISCOUNT_PERCENTG_FLG: ['', Validators.required],
            RETAIL_VALID_FROM_DATE: ['', Validators.required],
            RETAIL_VALID_To_DATE: ['', Validators.required],
            RETAIL_D2C_DISCOUNT_VALIDITY_FLG: ['', Validators.required],
        });
        this.mrpForm = this.formBuilder.group({
            Retail_MRP: ['', Validators.required],
            RETAIL_WHOLESALE_MRP: ['', Validators.required]
        });
    }
    getStoreList() {
        this.apiService.storeList().subscribe((data) => {
            this.storelist = data;
            console.log(this.storelist);
        });
    }
    //  onStoreChange(e){
    //   this.officeID = this.itemSubitemForm.value.SUBACCT_OFFICE_ID;
    //   this.storeName = e.target.options[e.target.options.selectedIndex].text;
    //   console.log(this.officeID);
    // }
    getProductLineList() {
        this.apiService.getCall(this.apiService.baseURL + '/GetStoreProductLines/' + this.accountid + "/" + this.subaccountid + "/" + this.storeid)
            // this.apiService.postCall(this.apiService.baseURL + '/GetItemListOfStore', data)
            .subscribe(data => {
            console.log(data);
            this.productLinelist = data;
            if (data.length == "") {
                this.toastr.error(data, '', {
                    timeOut: 5000,
                });
            }
        }, (error) => {
            this.toastr.error(error, '', {
                timeOut: 5000,
            });
        });
    }
    productLineChange(e) {
        this.productID = this.itemSubitemForm.value.RETAIL_D2C_PRODUCT_ID;
        this.productName = e.target.options[e.target.options.selectedIndex].text;
        console.log(this.productID);
        this.GetItemListOfStore();
    }
    GetItemListOfStore() {
        this.apiService.getCall(this.apiService.baseURL + '/GetStoreProductItemList' + "/" + this.accountid + "/" + this.subaccountid + "/" + this.storeid + "/" + this.productID)
            .subscribe(data => {
            console.log(data);
            this.dropShipItemList = data;
            if (data.length == "") {
                this.toastr.error(data, '', {
                    timeOut: 5000,
                });
            }
        }, (error) => {
            this.toastr.error(error, '', {
                timeOut: 5000,
            });
        });
    }
    // getItemList(){
    //   this.apiService.getCall(this.apiService.baseURL + '/GetSuperStoreDropShipItems/' + this.domainid + "/" + this.productID)
    //    .subscribe(data => {
    //    this.dropShipItemList = data;
    // });
    // }
    itemChange(e) {
        this.itemID = this.itemSubitemForm.value.itemid;
        this.itemName = e.target.options[e.target.options.selectedIndex].text;
        console.log(this.itemID);
        this.showMrpDiscountTable = false;
    }
    addItemSubtemDiscount() {
        let addItemSubtemDiscountData = {
            RETAIL_DOMAIN_ID: +this.domainid,
            RETAIL_ACCOUNT_ID: this.accountid,
            RETAIL_SUBACCOUNT_ID: this.subaccountid,
            RETAIl_STORE_ID: +this.storeid,
            RETAIL_PRODUCT_ID: +this.productID,
            RETAIL_ITEM_ID: +this.itemID
        };
        this.apiService.postCall(this.apiService.baseURL + '/AddItemSubtemDiscount', addItemSubtemDiscountData)
            .subscribe(data => {
            console.log(data);
            this.toastr.success(data, '', {
                timeOut: 5000,
            });
        }, (error) => {
            this.toastr.error(error, '', {
                timeOut: 5000,
            });
        });
    }
    manageyStoreItemsPricesandDiscounts() {
        let manageStoreItemPC = {
            RETAIL_DOMAIN_ID: +this.domainid,
            RETAIL_ACCOUNT_ID: this.accountid,
            RETAIL_SUBACCOUNT_ID: this.subaccountid,
            RETAIl_STORE_ID: +this.storeid,
            RETAIL_PRODUCT_ID: +this.productID,
            RETAIL_ITEM_ID: +this.itemID
        };
        this.apiService.postCall(this.apiService.baseURL + '/ManageyStoreItemsPricesandDiscounts', manageStoreItemPC)
            .subscribe(data => {
            console.log(data);
            this.manageStoreItemPDList = data;
            if (data.length != '') {
                this.showMrpDiscountTable = true;
            }
            else {
                this.toastr.error("Data not available", '', {
                    timeOut: 5000,
                });
            }
        }, (error) => {
            this.showMrpDiscountTable = false;
            this.toastr.error(error, '', {
                timeOut: 5000,
            });
        });
    }
    getItemSubtemDiscount() {
        let getItemSubtemDiscountData = {
            RETAIL_DOMAIN_ID: +this.domainid,
            RETAIL_ACCOUNT_ID: this.accountid,
            RETAIL_SUBACCOUNT_ID: this.subaccountid,
            RETAIl_STORE_ID: +this.storeid,
            RETAIL_PRODUCT_ID: +this.productID,
            RETAIL_ITEM_ID: +this.itemID
        };
        this.apiService.postCall(this.apiService.baseURL + '/GetItemSubtemDiscount', getItemSubtemDiscountData)
            .subscribe(data => {
            console.log(data);
            this.ItemSubtemDiscountList = data;
            if (data.length != '') {
                this.showMrpDiscountTable = true;
            }
            else {
                this.toastr.error("Data not available", '', {
                    timeOut: 5000,
                });
            }
        }, (error) => {
            this.toastr.error(error, '', {
                timeOut: 5000,
            });
        });
    }
    selecttemSubtemDiscountData(itemSubitemDiscount, template) {
        this.modalRef = this.modalService.show(template, Object.assign({}, { class: 'width-720' }));
        console.log(itemSubitemDiscount);
        this.subitemName = itemSubitemDiscount.RETAIL_D2C_SUBITEM_NAME;
        this.couponID = itemSubitemDiscount.DiscountId;
        this.retailMRP = itemSubitemDiscount.RETAIL_D2C_SUBITEM_MRP;
        this.wholesalePrice = itemSubitemDiscount.RETAIL_D2C_SUBITEM_CASE_MRP;
        this.retailSize = itemSubitemDiscount.RETAIL_D2C_SUBITEM_SIZE;
        this.subItemID = itemSubitemDiscount.RETAIL_SUB_ITEM_ID;
        console.log(itemSubitemDiscount.RETAIL_D2C_DISCOUNT_PERCENTG_FLG);
        if (itemSubitemDiscount.RETAIL_D2C_DISCOUNT_PERCENTG_FLG == true) {
            this.discountForm.patchValue({
                RETAIL_D2C_DISCOUNT_PERCENTG_FLG: "Yes"
            });
        }
        if (itemSubitemDiscount.RETAIL_D2C_DISCOUNT_PERCENTG_FLG == false) {
            this.discountForm.patchValue({
                RETAIL_D2C_DISCOUNT_PERCENTG_FLG: "No"
            });
        }
        if (itemSubitemDiscount.RETAIL_D2C_DISCOUNT_VALIDITY_FLG == false) {
            this.discountForm.patchValue({
                RETAIL_D2C_DISCOUNT_VALIDITY_FLG: "No"
            });
        }
        if (itemSubitemDiscount.RETAIL_D2C_DISCOUNT_VALIDITY_FLG == false) {
            this.discountForm.patchValue({
                RETAIL_D2C_DISCOUNT_VALIDITY_FLG: "No"
            });
        }
        this.discountForm.patchValue({
            RETAIL_D2C_DISCOUNT_VALIDITY_FLG: itemSubitemDiscount.RETAIL_D2C_DISCOUNT_VALIDITY_FLG,
            RETAIL_D2C_DISCOUNT_PERCENTG_FLG: itemSubitemDiscount.RETAIL_D2C_DISCOUNT_PERCENTG_FLG,
            RETAIL_VALID_FROM_DATE: itemSubitemDiscount.RETAIL_D2C_DISCOUNT_VALID_TO_DATE,
            RETAIL_VALID_To_DATE: itemSubitemDiscount.RETAIL_D2C_DISCOUNT_VALID_TO_DATE,
            RETAIL_DISCOUNT_FIGURE: itemSubitemDiscount.RETAIL_D2C_DISCOUNT_FIGURE,
        });
    }
    onDateChange(newDate) {
        this.previousDate = new Date(newDate);
    }
    updateItemSubitemDiscount() {
        // if(this.discountForm.value.RETAIL_D2C_DISCOUNT_VALIDITY_FLG == "1") {
        //   this.discountFlag = true;
        // }
        // if(this.discountForm.value.RETAIL_D2C_DISCOUNT_VALIDITY_FLG == "0") {
        //   this.discountFlag = false;
        // }
        // if(this.discountForm.value.RETAIL_D2C_DISCOUNT_PERCENTG_FLG == "1") {
        //   this.percentgFlag = true;
        // }
        // if(this.discountForm.value.RETAIL_D2C_DISCOUNT_PERCENTG_FLG == "0") {
        //   this.percentgFlag = false;
        // }
        let updateItemSubItemDiscountData = {
            DiscountId: +this.couponID,
            RETAIL_DOMAIN_ID: +this.domainid,
            RETAIL_ACCOUNT_ID: +this.accountid,
            RETAIL_SUBACCOUNT_ID: +this.subaccountid,
            RETAIl_STORE_ID: +this.storeid,
            RETAIL_PRODUCT_ID: +this.productID,
            RETAIL_ITEM_ID: +this.itemID,
            RETAIL_SUB_ITEM_ID: +this.subItemID,
            RETAIL_VALID_FROM_DATE: this.discountForm.value.RETAIL_VALID_FROM_DATE.toISOString().slice(0, 13) + ':' + "00",
            RETAIL_VALID_To_DATE: this.discountForm.value.RETAIL_VALID_To_DATE.toISOString().slice(0, 13) + ':' + "00",
            RETAIL_VALIDITY_FLG: this.discountForm.value.RETAIL_D2C_DISCOUNT_VALIDITY_FLG,
            RETAIL_PERCENTG_FLG: this.discountForm.value.RETAIL_D2C_DISCOUNT_PERCENTG_FLG,
            RETAIL_DISCOUNT_FIGURE: +this.discountForm.value.RETAIL_DISCOUNT_FIGURE
        };
        console.log(updateItemSubItemDiscountData);
        this.apiService.postCall(this.apiService.baseURL + '/EditItemSubtemDiscount', updateItemSubItemDiscountData)
            .subscribe(data => {
            console.log(data);
            this.manageyStoreItemsPricesandDiscounts();
            this.toastr.success('Updated Successfully', '', {
                timeOut: 5000,
            });
            //this.modalService.hide();
            this.modalRef.hide();
            //this.getItemSubtemDiscount();
        }, (error) => {
            this.toastr.error(error, '', {
                timeOut: 5000,
            });
        });
    }
    closeModal() {
        this.modalRef.hide();
        // this.modalService.hide();
        this.discountForm.reset({
            RETAIL_D2C_DISCOUNT_PERCENTG_FLG: 'Select',
            RETAIL_D2C_DISCOUNT_VALIDITY_FLG: 'Select'
        });
    }
    selectSubItemPriceData(itemSubitemDiscount, template1) {
        console.log(itemSubitemDiscount);
        this.mrpID = itemSubitemDiscount.STORE_ITEM_SUBITEM_MRP_ID;
        this.retailSize = itemSubitemDiscount.RETAIL_D2C_SUBITEM_SIZE;
        this.itemID = itemSubitemDiscount.RETAIL_ITEM_ID;
        this.subItemID = itemSubitemDiscount.RETAIL_SUB_ITEM_ID;
        this.mrp = itemSubitemDiscount.RETAIL_D2C_SUBITEM_MRP;
        this.wholesalemrp = itemSubitemDiscount.RETAIL_D2C_SUBITEM_CASE_MRP;
        this.subitemName = itemSubitemDiscount.RETAIL_D2C_SUBITEM_NAME;
        this.modalRef = this.modalService.show(template1, Object.assign({}, { class: 'width-720' }));
        this.mrpForm.patchValue({
            Retail_MRP: this.mrp,
            RETAIL_WHOLESALE_MRP: this.wholesalemrp,
        });
    }
    updateItemSubitemMRP() {
        let updateItemSubItemMRPData = {
            STORE_ITEM_SUBITEM_MRP_ID: +this.mrpID,
            RETAIL_DOMAIN_ID: +this.domainid,
            RETAIL_ACCOUNT_ID: +this.accountid,
            RETAIL_SUBACCOUNT_ID: +this.subaccountid,
            RETAIl_STORE_ID: +this.storeid,
            RETAIL_PRODUCT_ID: +this.productID,
            RETAIL_ITEM_ID: +this.itemID,
            RETAIL_SUB_ITEM_ID: +this.subItemID,
            Retail_MRP: +this.mrpForm.value.Retail_MRP,
            RETAIL_WHOLESALE_MRP: +this.mrpForm.value.RETAIL_WHOLESALE_MRP
        };
        console.log(updateItemSubItemMRPData);
        this.apiService.postCall(this.apiService.baseURL + '/EditSubItemPrice', updateItemSubItemMRPData)
            .subscribe(data => {
            console.log(data);
            this.manageyStoreItemsPricesandDiscounts();
            this.toastr.success(data, '', {
                timeOut: 5000,
            });
            this.modalRef.hide();
            // this.modalService.hide();
        }, (error) => {
            this.toastr.error(error, '', {
                timeOut: 5000,
            });
        });
    }
    onslectDiscountFlag(e) {
        const value = e.target.value;
        console.log('Selected Discount Flag:', value);
        if (value == 'true') {
            this.b2bItemDiscount.Percntg_Flg = 1;
        }
        else {
            this.b2bItemDiscount.Percntg_Flg = 0;
        }
    }
    onslectDiscountFlagPreddredDiscount(e) {
        const value = e.target.value;
        console.log('Selected Discount Flag:', value);
        if (value == 'true') {
            this.addNewPreferredPartnerDiscount.PercentFlag = 1;
        }
        else {
            this.addNewPreferredPartnerDiscount.PercentFlag = 0;
        }
    }
    formatDateToISOString(date) {
        if (!date)
            return '';
        const year = date.getFullYear();
        const month = ('0' + (date.getMonth() + 1)).slice(-2);
        const day = ('0' + date.getDate()).slice(-2);
        const hours = ('0' + date.getHours()).slice(-2);
        const minutes = ('0' + date.getMinutes()).slice(-2);
        const seconds = ('0' + date.getSeconds()).slice(-2);
        return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
    }
    addRegularDiscount() {
        this.b2bItemDiscount.FromDate = this.formatDateToISOString(new Date(this.b2bItemDiscount.FromDate));
        this.b2bItemDiscount.ToDate = this.formatDateToISOString(new Date(this.b2bItemDiscount.ToDate));
        console.log("Data: ", this.b2bItemDiscount);
        this.apiService.postCall(this.apiService.baseURL + '/AddB2BitemSplDiscount', this.b2bItemDiscount)
            .subscribe(data => {
            console.log(data);
            this.toastr.success(data.message);
            this.modalRef.hide();
        }, (error) => {
            this.toastr.error(error, '', {
                timeOut: 5000,
            });
        });
        this.modalRef.hide();
    }
    addPrefferedDiscount() {
        console.log("payload: ", this.addNewPreferredPartnerDiscount);
        this.apiService.postCall(this.apiService.baseURL + '/AddItemDiscount', this.addNewPreferredPartnerDiscount)
            .subscribe(data => {
            console.log(data);
            this.toastr.success(data, '', {
                timeOut: 5000,
            });
        }, (error) => {
            this.toastr.error(error.error, '', {
                timeOut: 5000,
            });
        });
        this.modalRef.hide();
    }
    openB2BModal(item, templateB2B) {
        this.selectedDiscountTypeTab1 = '';
        this.selectedDiscountTypeTab2 = '';
        this.selectedDiscountTypeTab3 = '';
        this.subItemID = item.RETAIL_SUB_ITEM_ID;
        this.isRegularDiscountSelectedTab1 = false;
        this.isItemCountDiscountSelectedTab1 = false;
        this.isPromotionalDiscountSelectedTab1 = false;
        this.isPrefferdPartnerDiscountSelectedTab1 = false;
        this.isRegularDiscountSelectedTab2 = false;
        this.isItemCountDiscountSelectedTab2 = false;
        this.isPromotionalDiscountSelectedTab2 = false;
        this.isPrefferdPartnerDiscountSelectedTab2 = false;
        this.isRegularDiscountSelectedTab3 = false;
        this.isItemCountDiscountSelectedTab3 = false;
        this.isPromotionalDiscountSelectedTab3 = false;
        this.isPrefferdPartnerDiscountSelectedTab3 = false;
        this.b2bItemDiscount = {
            Acctid: +this.accountid,
            Subacctid: +this.subaccountid,
            Storeid: +this.storeid,
            ProductId: +this.productID,
            ItemId: +this.itemID,
            SubItemId: +this.subItemID,
            Retailer_Flg: 0,
            Distributor_Flg: 1,
            Franchisee_flg: 0,
            CountsOnCart: 1,
            PercntgFigure: 0,
            Percntg_Flg: 0,
            Regular_Discount_Flg: 0,
            Item_Counts_Discount_Flg: 0,
            Promotional_Discount_Flg: 0,
            FromDate: '',
            ToDate: ''
        };
        this.addNewPreferredPartnerDiscount = {
            ManufacturerAcctId: +this.accountid,
            ManufacturerSubacctId: +this.subaccountid,
            ManufacturerStoreId: +this.storeid,
            ProductId: +this.productID,
            ItemId: +this.itemID,
            SubitemId: +this.subItemID,
            DistributorFlg: 1,
            RetailerFlg: 0,
            FranchiseFlg: 0,
            PartnerSubacctId: 0,
            PartnerStoreId: 0,
            PercentFlag: 0,
            PrefDiscountNumber: 0,
            ValidFrom: '',
            ValidTo: ''
        };
        this.modalRef = this.modalService.show(templateB2B, Object.assign({}, { class: 'b2bModal' }));
        this.bebModalData = item;
    }
    getDiscount() {
        const payload = {
            SubacctId: +this.subaccountid,
            StoreId: +this.storeid,
            ProductId: +this.productID,
            ItemId: +this.itemID,
            SubitemId: +this.subItemID,
            DistributorFlg: this.addNewPreferredPartnerDiscount.DistributorFlg,
            RetailerFlg: this.addNewPreferredPartnerDiscount.RetailerFlg,
            FranchiseFlg: this.addNewPreferredPartnerDiscount.FranchiseFlg,
            RegularDiscountFlg: this.b2bItemDiscount.Regular_Discount_Flg,
            ItemCountsDiscountFlg: this.b2bItemDiscount.Item_Counts_Discount_Flg,
            PromotionalDiscountFlg: this.b2bItemDiscount.Promotional_Discount_Flg,
            PrefAccountDiscountFlg: !this.b2bItemDiscount.Regular_Discount_Flg && !this.b2bItemDiscount.Item_Counts_Discount_Flg && !this.b2bItemDiscount.Promotional_Discount_Flg ? 1 : 0
        };
        console.log(payload);
        this.apiService.postCall(this.apiService.baseURL + '/GetB2B_Discount_Details', payload)
            .subscribe(data => {
            console.log(data);
            this.dicountArr = Array.isArray(data) ? data.map((item) => ({
                RETAIL_B2B_DISCOUNT_FIGURE: item.RETAIL_B2B_DISCOUNT_FIGURE,
                RETAIL_B2B_DISCOUNT_ID: item.RETAIL_B2B_DISCOUNT_ID,
                RETAIL_B2B_DISCOUNT_TYPE: item.RETAIL_B2B_DISCOUNT_TYPE,
                RETAIL_B2B_DISCOUNT_VALD_FRM_DATE: item.RETAIL_B2B_DISCOUNT_VALD_FRM_DATE,
                RETAIL_B2B_DISCOUNT_VALID_TO_DATE: item.RETAIL_B2B_DISCOUNT_VALID_TO_DATE,
                RETAIL_B2B_ITEM_DISCNT_VALID_FLG: item.RETAIL_B2B_ITEM_DISCNT_VALID_FLG,
                RETAIL_B2B_ITEM_SPL_DISC_PERCNTG_FIG: item.RETAIL_B2B_ITEM_SPL_DISC_PERCNTG_FIG
            })) : [];
        }, (error) => {
            this.toastr.error("No discount added.");
        });
    }
    onTabChange(event) {
        // Reset all radio selections when switching tabs
        this.selectedDiscountTypeTab1 = '';
        this.selectedDiscountTypeTab2 = '';
        this.selectedDiscountTypeTab3 = '';
        // Optionally, reset your tab selection flags as well
        this.isRegularDiscountSelectedTab1 = false;
        this.isItemCountDiscountSelectedTab1 = false;
        this.isPromotionalDiscountSelectedTab1 = false;
        this.isPrefferdPartnerDiscountSelectedTab1 = false;
        this.isRegularDiscountSelectedTab2 = false;
        this.isItemCountDiscountSelectedTab2 = false;
        this.isPromotionalDiscountSelectedTab2 = false;
        this.isPrefferdPartnerDiscountSelectedTab2 = false;
        this.isRegularDiscountSelectedTab3 = false;
        this.isItemCountDiscountSelectedTab3 = false;
        this.isPromotionalDiscountSelectedTab3 = false;
        this.isPrefferdPartnerDiscountSelectedTab3 = false;
    }
    onSelecttab1(event) {
        const selectedValue = event.target.value;
        console.log('Selected Discount Type:', selectedValue);
        this.b2bItemDiscount.Franchisee_flg = this.addNewPreferredPartnerDiscount.FranchiseFlg = 0;
        this.b2bItemDiscount.Retailer_Flg = this.addNewPreferredPartnerDiscount.RetailerFlg = 0;
        this.b2bItemDiscount.Distributor_Flg = this.addNewPreferredPartnerDiscount.DistributorFlg = 1;
        switch (selectedValue) {
            case 'regularDiscount':
                this.isRegularDiscountSelectedTab1 = true;
                this.b2bItemDiscount.Regular_Discount_Flg = 1;
                this.isItemCountDiscountSelectedTab1 = false;
                this.b2bItemDiscount.Item_Counts_Discount_Flg = 0;
                this.isPromotionalDiscountSelectedTab1 = false;
                this.b2bItemDiscount.Promotional_Discount_Flg = 0;
                this.isPrefferdPartnerDiscountSelectedTab1 = false;
                break;
            case 'itemCountsDiscount':
                this.isRegularDiscountSelectedTab1 = false;
                this.b2bItemDiscount.Regular_Discount_Flg = 0;
                this.isItemCountDiscountSelectedTab1 = true;
                this.b2bItemDiscount.Item_Counts_Discount_Flg = 1;
                this.isPromotionalDiscountSelectedTab1 = false;
                this.b2bItemDiscount.Promotional_Discount_Flg = 0;
                this.isPrefferdPartnerDiscountSelectedTab1 = false;
                break;
            case 'promotionalDiscount':
                this.isRegularDiscountSelectedTab1 = false;
                this.b2bItemDiscount.Regular_Discount_Flg = 0;
                this.isItemCountDiscountSelectedTab1 = false;
                this.b2bItemDiscount.Item_Counts_Discount_Flg = 0;
                this.isPromotionalDiscountSelectedTab1 = true;
                this.b2bItemDiscount.Promotional_Discount_Flg = 1;
                this.isPrefferdPartnerDiscountSelectedTab1 = false;
                break;
            case 'prefferedPartnerDiscount':
                this.isRegularDiscountSelectedTab1 = false;
                this.b2bItemDiscount.Regular_Discount_Flg = 0;
                this.isItemCountDiscountSelectedTab1 = false;
                this.b2bItemDiscount.Item_Counts_Discount_Flg = 0;
                this.isPromotionalDiscountSelectedTab1 = false;
                this.b2bItemDiscount.Promotional_Discount_Flg = 0;
                this.isPrefferdPartnerDiscountSelectedTab1 = true;
                break;
            default:
                console.log('No valid discount type selected');
        }
        this.getDiscount();
    }
    onSelecttab2(event) {
        const selectedValue = event.target.value;
        console.log('Selected Discount Type:', selectedValue);
        this.b2bItemDiscount.Franchisee_flg = this.addNewPreferredPartnerDiscount.FranchiseFlg = 0;
        this.b2bItemDiscount.Retailer_Flg = this.addNewPreferredPartnerDiscount.RetailerFlg = 1;
        this.b2bItemDiscount.Distributor_Flg = this.addNewPreferredPartnerDiscount.DistributorFlg = 0;
        switch (selectedValue) {
            case 'regularDiscount':
                this.isRegularDiscountSelectedTab2 = true;
                this.b2bItemDiscount.Regular_Discount_Flg = 1;
                this.isItemCountDiscountSelectedTab2 = false;
                this.b2bItemDiscount.Item_Counts_Discount_Flg = 0;
                this.isPromotionalDiscountSelectedTab2 = false;
                this.b2bItemDiscount.Promotional_Discount_Flg = 0;
                this.isPrefferdPartnerDiscountSelectedTab2 = false;
                break;
            case 'itemCountsDiscount':
                this.isRegularDiscountSelectedTab2 = false;
                this.b2bItemDiscount.Regular_Discount_Flg = 0;
                this.isItemCountDiscountSelectedTab2 = true;
                this.b2bItemDiscount.Item_Counts_Discount_Flg = 1;
                this.isPromotionalDiscountSelectedTab2 = false;
                this.b2bItemDiscount.Promotional_Discount_Flg = 0;
                this.isPrefferdPartnerDiscountSelectedTab2 = false;
                break;
            case 'promotionalDiscount':
                this.isRegularDiscountSelectedTab2 = false;
                this.b2bItemDiscount.Regular_Discount_Flg = 0;
                this.isItemCountDiscountSelectedTab2 = false;
                this.b2bItemDiscount.Item_Counts_Discount_Flg = 0;
                this.isPromotionalDiscountSelectedTab2 = true;
                this.b2bItemDiscount.Promotional_Discount_Flg = 1;
                this.isPrefferdPartnerDiscountSelectedTab2 = false;
                break;
            case 'prefferedPartnerDiscount':
                this.isRegularDiscountSelectedTab2 = false;
                this.b2bItemDiscount.Regular_Discount_Flg = 0;
                this.isItemCountDiscountSelectedTab2 = false;
                this.b2bItemDiscount.Item_Counts_Discount_Flg = 0;
                this.isPromotionalDiscountSelectedTab2 = false;
                this.b2bItemDiscount.Promotional_Discount_Flg = 0;
                this.isPrefferdPartnerDiscountSelectedTab2 = true;
                break;
            default:
                console.log('No valid discount type selected');
        }
        this.getDiscount();
    }
    onSelecttab3(event) {
        const selectedValue = event.target.value;
        console.log('Selected Discount Type:', selectedValue);
        this.b2bItemDiscount.Franchisee_flg = this.addNewPreferredPartnerDiscount.FranchiseFlg = 1;
        this.b2bItemDiscount.Retailer_Flg = this.addNewPreferredPartnerDiscount.RetailerFlg = 0;
        this.b2bItemDiscount.Distributor_Flg = this.addNewPreferredPartnerDiscount.DistributorFlg = 0;
        switch (selectedValue) {
            case 'regularDiscount':
                this.isRegularDiscountSelectedTab3 = true;
                this.b2bItemDiscount.Regular_Discount_Flg = 1;
                this.isItemCountDiscountSelectedTab3 = false;
                this.b2bItemDiscount.Item_Counts_Discount_Flg = 0;
                this.isPromotionalDiscountSelectedTab3 = false;
                this.b2bItemDiscount.Promotional_Discount_Flg = 0;
                this.isPrefferdPartnerDiscountSelectedTab3 = false;
                break;
            case 'itemCountsDiscount':
                this.isRegularDiscountSelectedTab3 = false;
                this.b2bItemDiscount.Regular_Discount_Flg = 0;
                this.isItemCountDiscountSelectedTab3 = true;
                this.b2bItemDiscount.Item_Counts_Discount_Flg = 1;
                this.isPromotionalDiscountSelectedTab3 = false;
                this.b2bItemDiscount.Promotional_Discount_Flg = 0;
                this.isPrefferdPartnerDiscountSelectedTab3 = false;
                break;
            case 'promotionalDiscount':
                this.isRegularDiscountSelectedTab3 = false;
                this.b2bItemDiscount.Regular_Discount_Flg = 0;
                this.isItemCountDiscountSelectedTab3 = false;
                this.b2bItemDiscount.Item_Counts_Discount_Flg = 0;
                this.isPromotionalDiscountSelectedTab3 = true;
                this.b2bItemDiscount.Promotional_Discount_Flg = 1;
                this.isPrefferdPartnerDiscountSelectedTab3 = false;
                break;
            case 'prefferedPartnerDiscount':
                this.isRegularDiscountSelectedTab3 = false;
                this.b2bItemDiscount.Regular_Discount_Flg = 0;
                this.isItemCountDiscountSelectedTab3 = false;
                this.b2bItemDiscount.Item_Counts_Discount_Flg = 0;
                this.isPromotionalDiscountSelectedTab3 = false;
                this.b2bItemDiscount.Promotional_Discount_Flg = 0;
                this.isPrefferdPartnerDiscountSelectedTab3 = true;
                break;
            default:
                console.log('No valid discount type selected');
        }
        this.getDiscount();
    }
    openEditRegularDiscountModal(template, discount) {
        if (discount) {
            this.discountEdit = {
                DiscountId: discount.RETAIL_B2B_DISCOUNT_ID,
                AcctBasedDiscntFlg: false,
                ItemCountsDiscntFlg: false,
                SubitemsCountsOnCart: 0,
                PercntgFlg: discount.RETAIL_B2B_ITEM_SPL_DISC_PERCNTG_FIG,
                PercntgFigure: discount.RETAIL_B2B_DISCOUNT_FIGURE,
                DateFrom: discount.RETAIL_B2B_DISCOUNT_VALD_FRM_DATE,
                DateTo: discount.RETAIL_B2B_DISCOUNT_VALID_TO_DATE,
            };
            this.DisDatefrom = discount.RETAIL_B2B_DISCOUNT_VALD_FRM_DATE ? new Date(discount.RETAIL_B2B_DISCOUNT_VALD_FRM_DATE) : null;
            this.DisDateto = discount.RETAIL_B2B_DISCOUNT_VALID_TO_DATE ? new Date(discount.RETAIL_B2B_DISCOUNT_VALID_TO_DATE) : null;
        }
        if (this.modalRef) {
            this.modalRef.hide();
        }
        this.modalRef = this.modalService.show(template, Object.assign({}, { class: 'width-720' }));
    }
    editDiscount(discount) {
        const payload = Object.assign(Object.assign({}, discount), { DateFrom: this.DisDatefrom ? this.DisDatefrom.toISOString() : '', DateTo: this.DisDateto ? this.DisDateto.toISOString() : '' });
        console.log(payload);
        this.apiService.postCall(this.apiService.baseURL + '/EditB2BDiscountNew', payload)
            .subscribe(data => {
            console.log(data);
            this.toastr.success(data.Message);
        }, (error) => {
            this.toastr.error(error, '', {
                timeOut: 5000,
            });
        });
        this.modalRef.hide();
    }
    openAddRegularDiscountModal(template) {
        if (this.modalRef) {
            this.modalRef.hide();
        }
        this.modalRef = this.modalService.show(template, Object.assign({}, { class: 'width-720' }));
    }
    openEditItemCountDiscountModal(template, discount) {
        if (discount) {
            this.discountEdit = {
                DiscountId: discount.RETAIL_B2B_DISCOUNT_ID,
                AcctBasedDiscntFlg: false,
                ItemCountsDiscntFlg: false,
                SubitemsCountsOnCart: 0,
                PercntgFlg: discount.RETAIL_B2B_ITEM_SPL_DISC_PERCNTG_FIG,
                PercntgFigure: discount.RETAIL_B2B_DISCOUNT_FIGURE,
                DateFrom: discount.RETAIL_B2B_DISCOUNT_VALD_FRM_DATE,
                DateTo: discount.RETAIL_B2B_DISCOUNT_VALID_TO_DATE,
            };
            this.DisDatefrom = discount.RETAIL_B2B_DISCOUNT_VALD_FRM_DATE ? new Date(discount.RETAIL_B2B_DISCOUNT_VALD_FRM_DATE) : null;
            this.DisDateto = discount.RETAIL_B2B_DISCOUNT_VALID_TO_DATE ? new Date(discount.RETAIL_B2B_DISCOUNT_VALID_TO_DATE) : null;
        }
        if (this.modalRef) {
            this.modalRef.hide();
        }
        this.modalRef = this.modalService.show(template, Object.assign({}, { class: 'width-720' }));
    }
    openAddItemCountDiscountModal(template) {
        if (this.modalRef) {
            this.modalRef.hide();
        }
        this.modalRef = this.modalService.show(template, Object.assign({}, { class: 'width-720' }));
    }
    openEditPromotionalDiscountModal(template, discount) {
        if (discount) {
            this.discountEdit = {
                DiscountId: discount.RETAIL_B2B_DISCOUNT_ID,
                AcctBasedDiscntFlg: false,
                ItemCountsDiscntFlg: false,
                SubitemsCountsOnCart: 0,
                PercntgFlg: discount.RETAIL_B2B_ITEM_SPL_DISC_PERCNTG_FIG,
                PercntgFigure: discount.RETAIL_B2B_DISCOUNT_FIGURE,
                DateFrom: discount.RETAIL_B2B_DISCOUNT_VALD_FRM_DATE,
                DateTo: discount.RETAIL_B2B_DISCOUNT_VALID_TO_DATE,
            };
            this.DisDatefrom = discount.RETAIL_B2B_DISCOUNT_VALD_FRM_DATE ? new Date(discount.RETAIL_B2B_DISCOUNT_VALD_FRM_DATE) : null;
            this.DisDateto = discount.RETAIL_B2B_DISCOUNT_VALID_TO_DATE ? new Date(discount.RETAIL_B2B_DISCOUNT_VALID_TO_DATE) : null;
        }
        if (this.modalRef) {
            this.modalRef.hide();
        }
        this.modalRef = this.modalService.show(template, Object.assign({}, { class: 'width-720' }));
    }
    openAddPromotionaliscountModal(template) {
        if (this.modalRef) {
            this.modalRef.hide();
        }
        this.modalRef = this.modalService.show(template, Object.assign({}, { class: 'width-720' }));
    }
    openEditPrefferedDiscountModal(template, discount) {
        if (this.modalRef) {
            this.modalRef.hide();
        }
        this.modalRef = this.modalService.show(template, Object.assign({}, { class: 'width-720' }));
    }
    openAddPrefferediscountModal(template) {
        const payload = {
            PlatformId: '2',
            PrimaryStoreId: this.storeid,
            PrimarySubaccountId: this.subaccountid
        };
        console.log("payload: ", payload);
        this.apiService.postCall(this.apiService.baseURL + '/GetSecondaryAccounts', payload)
            .subscribe(data => {
            console.log(data);
            this.secondaryAcc = data.map(item => {
                var _a;
                return ({
                    CategoryId: item.CategoryId,
                    DomainId: (_a = item.DomainId) !== null && _a !== void 0 ? _a : null,
                    LinkSeqId: item.LinkSeqId,
                    OfficeName: item.OfficeName,
                    StoreId: item.StoreId,
                    SubaccountId: item.SubaccountId
                });
            });
        }, (error) => {
            this.toastr.error(error, '', {
                timeOut: 5000,
            });
        });
        if (this.modalRef) {
            this.modalRef.hide();
        }
        this.modalRef = this.modalService.show(template, Object.assign({}, { class: 'width-720' }));
    }
    onSelectNetworkAcc(e) {
        const selectedValue = e.target.value;
        this.addNewPreferredPartnerDiscount.PartnerSubacctId = selectedValue;
        const selectedSecondaryAcc = this.secondaryAcc.find(acc => acc.SubaccountId === selectedValue);
        this.addNewPreferredPartnerDiscount.PartnerStoreId = selectedSecondaryAcc ? +selectedSecondaryAcc.StoreId : 0;
    }
    changeCountry(e) {
        this.countryID = e.target.value;
        this.countryEvent.emit(this.countryID);
        console.log(this.countryID);
        if (this.countryID) {
            this.getState();
        }
        else {
            this.stateList = null;
            this.cityList = null;
        }
    }
    getState() {
        this.apiService.StateList(this.countryID).subscribe((res) => {
            this.stateList = res;
            console.log(this.stateList);
        });
    }
    changeState(e) {
        this.stateID = e.target.value;
        this.stateEvent.emit(this.stateID);
        this.stateName = e.target.options[e.target.options.selectedIndex].text;
        if (this.stateID) {
            this.getCity();
            this.cityList = null;
        }
        else {
            this.cityList = null;
        }
    }
    getCity() {
        this.apiService.CityList(this.countryID, this.stateID).subscribe((res) => {
            this.cityList = res;
            console.log(this.cityList);
        });
    }
    changeCity(e) {
        this.cityID = e.target.value;
        console.log(this.cityID);
        this.cityEvent.emit(this.cityID);
        this.cityName = e.target.options[e.target.options.selectedIndex].text;
    }
}
ManageStoreItemSubItemDiscountsComponent.ɵfac = function ManageStoreItemSubItemDiscountsComponent_Factory(t) { return new (t || ManageStoreItemSubItemDiscountsComponent)(i0.ɵɵdirectiveInject(i1.ApiService), i0.ɵɵdirectiveInject(i2.BsModalService), i0.ɵɵdirectiveInject(i3.FormBuilder), i0.ɵɵdirectiveInject(i4.ToastrService)); };
ManageStoreItemSubItemDiscountsComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ManageStoreItemSubItemDiscountsComponent, selectors: [["app-manage-store-item-sub-item-discounts"]], outputs: { countryEvent: "countryEvent", stateEvent: "stateEvent", cityEvent: "cityEvent" }, decls: 55, vars: 5, consts: [[1, "main-content-area"], [1, "row"], [1, "col-md-12"], [1, "heading-title"], [3, "formGroup"], [1, "row", "topLevel"], [1, "col-md-4"], [1, "form-group"], [1, "form-control", "form-level", "no-border"], ["formControlName", "RETAIL_D2C_PRODUCT_ID", 1, "form-control", 3, "change"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "itemid", 1, "form-control", 3, "change"], [1, "col-md-12", "bottom-btn", "mt-1"], ["type", "button", 1, "btn", "custom-btn", "float-right", 3, "click"], ["class", "card exiting-office-table mt-2 pb-0", 4, "ngIf"], ["template", ""], ["template1", ""], ["EditRegularDiscount", ""], ["AddRegularDiscount", ""], ["EditItemCountDiscount", ""], ["AddItemCountDiscount", ""], ["EditPromotionalDiscount", ""], ["AddPromotionalDiscount", ""], ["EditPrefferedDiscount", ""], ["AddPrefferedDiscount", ""], ["templateB2B", ""], [3, "value"], [1, "card", "exiting-office-table", "mt-2", "pb-0"], [1, "card-header"], [1, "search-field-list"], [1, "search-list-label"], [1, "card-body", "pa-0"], [1, "table"], [4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "actdct_icon"], [4, "ngIf", "ngIfElse"], ["elseBlock", ""], ["elseBlock1", ""], [1, "delete-icon", 3, "click"], [1, "fa", "fa-edit"], [3, "click"], ["src", "assets/images/active_icon.png"], ["src", "assets/images/deactive_icon.png"], [1, "modal-header"], [1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", 3, "click"], ["aria-hidden", "true"], [1, "modal-body", "pt-0"], ["formControlName", "RETAIL_D2C_DISCOUNT_PERCENTG_FLG", 1, "form-control"], ["selected", "", "value", "Select"], ["value", "true"], ["value", "false"], ["formControlName", "RETAIL_D2C_DISCOUNT_VALIDITY_FLG", 1, "form-control"], ["type", "text", "formControlName", "RETAIL_DISCOUNT_FIGURE", 1, "form-control"], ["type", "text", "bsDatepicker", "", "formControlName", "RETAIL_VALID_FROM_DATE", 1, "form-control", 3, "bsConfig", "bsValueChange"], ["type", "text", "bsDatepicker", "", "formControlName", "RETAIL_VALID_To_DATE", 1, "form-control", 3, "bsConfig", "bsValueChange"], ["type", "text", "formControlName", "Retail_MRP", 1, "form-control"], ["type", "text", "formControlName", "RETAIL_WHOLESALE_MRP", 1, "form-control"], [1, "input-group"], ["type", "text", "name", "fromDate", "bsDatepicker", "", "placeholder", "dd/mm/yyyy", 1, "form-control", 3, "ngModel", "bsConfig", "ngModelChange"], [1, "input-group-prepend"], [1, "input-group-text"], [1, "icofont-ui-calendar"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "text", "name", "toDate", "bsDatepicker", "", "placeholder", "dd/mm/yyyy", 1, "form-control", 3, "ngModel", "bsConfig", "disabled", "ngModelChange"], ["name", "discountPercentFlag", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "disfig", "type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "invalid-feedback"], [1, "form-control", 3, "click"], ["name", "discount", "type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "disfig", "type", "number", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "discountFig", "type", "number", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "itemCount", "type", "number", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "discountFig", "type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "formControlName", "", "bsDatepicker", "", "placeholder", "dd/mm/yyyy", 1, "form-control", 3, "bsConfig"], ["formControlName", "", 1, "form-control"], ["type", "text", "formControlName", "", 1, "form-control"], [1, "form-control", 3, "change"], ["selected", "", "value", ""], [1, "p-3"], ["heading", "Distributors", "id", "tab1", 3, "selectTab"], [1, "me-3", "mb-1"], [1, "d-flex", "tab-div", "mb-3"], ["type", "radio", "name", "options1", "value", "regularDiscount", 3, "ngModel", "ngModelChange", "change"], ["type", "radio", "name", "options1", "value", "itemCountsDiscount", 3, "ngModel", "ngModelChange", "change"], ["type", "radio", "name", "options1", "value", "promotionalDiscount", 3, "ngModel", "ngModelChange", "change"], ["type", "radio", "name", "options1", "value", "prefferedPartnerDiscount", 3, "ngModel", "ngModelChange", "change"], ["heading", "Retailers", "id", "tab2", 3, "selectTab"], ["type", "radio", "name", "options2", "value", "regularDiscount", 3, "ngModel", "ngModelChange", "change"], ["type", "radio", "name", "options2", "value", "itemCountsDiscount", 3, "ngModel", "ngModelChange", "change"], ["type", "radio", "name", "options2", "value", "promotionalDiscount", 3, "ngModel", "ngModelChange", "change"], ["type", "radio", "name", "options2", "value", "prefferedPartnerDiscount", 3, "ngModel", "ngModelChange", "change"], ["heading", "Franchise", "id", "tab3", 3, "selectTab"], ["type", "radio", "name", "options3", "value", "regularDiscount", 3, "ngModel", "ngModelChange", "change"], ["type", "radio", "name", "options3", "value", "itemCountsDiscount", 3, "ngModel", "ngModelChange", "change"], ["type", "radio", "name", "options3", "value", "promotionalDiscount", 3, "ngModel", "ngModelChange", "change"], ["type", "radio", "name", "options3", "value", "prefferedPartnerDiscount", 3, "ngModel", "ngModelChange", "change"], ["class", "table", 4, "ngIf", "ngIfElse"], ["noDataTab1Regular", ""], [1, "col-md-12", "pt-3", "text-right"], [1, "btn", "custom-btn", "mr-3", 3, "click"], ["src", "assets/images/active_icon.png", 4, "ngIf", "ngIfElse"], ["deactive1", ""], ["deactive2", ""], [1, "delete-icon"], [1, "fa", "fa-edit", 3, "click"], [1, "text-center", "text-muted", "py-3"], ["noDataTab1ItemCount", ""], ["noDataTab1Promo", ""], ["noDataTab1Pref", ""], ["noDataTab2Regular", ""], ["noDataTab2ItemCount", ""], ["noDataTab2Promo", ""], ["noDataTab2Pref", ""], ["noDataTab3Regular", ""], ["noDataTab3ItemCount", ""], ["noDataTab3Promo", ""], ["noDataTab3Pref", ""]], template: function ManageStoreItemSubItemDiscountsComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
        i0.ɵɵtext(4, "Manage my Store Item Prices & Discounts");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(5, "form", 4)(6, "div", 5)(7, "div", 6)(8, "div", 7)(9, "label");
        i0.ɵɵtext(10, "Store");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "div", 8);
        i0.ɵɵtext(12);
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(13, "div", 6)(14, "div", 7)(15, "label");
        i0.ɵɵtext(16, "Store Product-Line");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(17, "select", 9);
        i0.ɵɵlistener("change", function ManageStoreItemSubItemDiscountsComponent_Template_select_change_17_listener($event) { return ctx.productLineChange($event); });
        i0.ɵɵelementStart(18, "option", 10);
        i0.ɵɵtext(19, "Select");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(20, ManageStoreItemSubItemDiscountsComponent_option_20_Template, 2, 2, "option", 11);
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(21, "div", 6)(22, "div", 7)(23, "label");
        i0.ɵɵtext(24, "Store Item");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(25, "select", 12);
        i0.ɵɵlistener("change", function ManageStoreItemSubItemDiscountsComponent_Template_select_change_25_listener($event) { return ctx.itemChange($event); });
        i0.ɵɵelementStart(26, "option", 10);
        i0.ɵɵtext(27, "Select");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(28, ManageStoreItemSubItemDiscountsComponent_option_28_Template, 2, 2, "option", 11);
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(29, "div", 13)(30, "button", 14);
        i0.ɵɵlistener("click", function ManageStoreItemSubItemDiscountsComponent_Template_button_click_30_listener() { return ctx.manageyStoreItemsPricesandDiscounts(); });
        i0.ɵɵtext(31, "Manage Store Items Price & Discounts");
        i0.ɵɵelementEnd()()()();
        i0.ɵɵtemplate(32, ManageStoreItemSubItemDiscountsComponent_div_32_Template, 45, 4, "div", 15);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(33, ManageStoreItemSubItemDiscountsComponent_ng_template_33_Template, 79, 12, "ng-template", null, 16, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(35, ManageStoreItemSubItemDiscountsComponent_ng_template_35_Template, 40, 5, "ng-template", null, 17, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(37, ManageStoreItemSubItemDiscountsComponent_ng_template_37_Template, 64, 15, "ng-template", null, 18, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(39, ManageStoreItemSubItemDiscountsComponent_ng_template_39_Template, 48, 9, "ng-template", null, 19, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(41, ManageStoreItemSubItemDiscountsComponent_ng_template_41_Template, 65, 16, "ng-template", null, 20, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(43, ManageStoreItemSubItemDiscountsComponent_ng_template_43_Template, 53, 10, "ng-template", null, 21, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(45, ManageStoreItemSubItemDiscountsComponent_ng_template_45_Template, 65, 16, "ng-template", null, 22, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(47, ManageStoreItemSubItemDiscountsComponent_ng_template_47_Template, 48, 9, "ng-template", null, 23, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(49, ManageStoreItemSubItemDiscountsComponent_ng_template_49_Template, 89, 5, "ng-template", null, 24, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(51, ManageStoreItemSubItemDiscountsComponent_ng_template_51_Template, 81, 13, "ng-template", null, 25, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(53, ManageStoreItemSubItemDiscountsComponent_ng_template_53_Template, 82, 24, "ng-template", null, 26, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("formGroup", ctx.itemSubitemForm);
        i0.ɵɵadvance(7);
        i0.ɵɵtextInterpolate1(" ", ctx.storeName, " ");
        i0.ɵɵadvance(8);
        i0.ɵɵproperty("ngForOf", ctx.productLinelist);
        i0.ɵɵadvance(8);
        i0.ɵɵproperty("ngForOf", ctx.dropShipItemList);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngIf", ctx.showMrpDiscountTable);
    } }, dependencies: [i5.NgForOf, i5.NgIf, i3.ɵNgNoValidate, i3.NgSelectOption, i3.ɵNgSelectMultipleOption, i3.DefaultValueAccessor, i3.NumberValueAccessor, i3.SelectControlValueAccessor, i3.RadioControlValueAccessor, i3.NgControlStatus, i3.NgControlStatusGroup, i3.FormGroupDirective, i3.FormControlName, i3.NgModel, i3.NgForm, i6.TabDirective, i6.TabsetComponent, i7.BsDatepickerDirective, i7.BsDatepickerInputDirective, i5.DatePipe], styles: [".heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    padding: 10px 5px 10px;\r\n    font-size: 20px;\r\n}\r\n\r\n.row.topLevel[_ngcontent-%COMP%] {\r\n    background: #fff;\r\n    padding: 20px 0;\r\n    margin: 0;\r\n    border-radius: 5px;\r\n}\r\n\r\n.heading.store-domain[_ngcontent-%COMP%] {\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.store-domain[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    margin-right: 20px;\r\n}\r\n\r\n.store-domain[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    background: #ddd;\r\n    padding: 5px 20px;\r\n    font-size: 13px;\r\n    border-radius: 20px;\r\n    display: inline-block;\r\n    font-weight: bold;\r\n    margin-left: 5px;\r\n}\r\n\r\n.store_id[_ngcontent-%COMP%] {\r\n    background: #ddd;\r\n    padding: 5px 20px;\r\n    border-radius: 20px;\r\n    font-size: 13px;\r\n    font-weight: 700;\r\n    float: right;\r\n    margin-top: -40px;\r\n}\r\n\r\n.box[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    overflow: hidden;\r\n    box-shadow: 0 0 4px 0px #eee;\r\n    margin: 20px 0;\r\n    border-radius: 4px;\r\n    padding: 10px;\r\n    background: #fff;\r\n}\r\n\r\n.main-content-area[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\r\n    width: 20%;\r\n    float: left;\r\n    padding: 0;\r\n}\r\n\r\n.fa-star[_ngcontent-%COMP%]:before {\r\n    content: \"\\f005\";\r\n    color: #ff9600;\r\n    margin-right: 5px;\r\n}\r\n\r\n.pro-box[_ngcontent-%COMP%] {\r\n    box-shadow: 0 0 4px 0 #e9ecef;\r\n    margin: 0 10px 20px;\r\n    overflow: hidden;\r\n    padding: 15px;\r\n    border-radius: 3px;\r\n    position: relative;\r\n    border: 1px solid #dee2e6;\r\n}\r\n\r\n.pro-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    height: 100px;\r\n    width: 100px;\r\n    margin: 30px auto 15px;\r\n    display: block;\r\n}\r\n\r\n.storeitem[_ngcontent-%COMP%]   .p-details[_ngcontent-%COMP%] {\r\n    margin-bottom: 42px;\r\n}\r\n\r\np.label-txt[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    padding: 10px;\r\n    font-size: 14px;\r\n    margin: 0;\r\n}\r\n\r\n.store-available-product[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\r\n    width: 25% !important;\r\n}\r\n\r\n.selected-productLine[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .store-available-product[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\r\n    font-size: 16px;\r\n    padding: 0 10px 5px;\r\n}\r\n\r\n.right-field-head[_ngcontent-%COMP%] {\r\n    float: right;\r\n    margin-top: 10px;\r\n}\r\n\r\n.right-field-head[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    padding: 0 10px;\r\n}\r\n\r\nspan.video[_ngcontent-%COMP%], span.doc[_ngcontent-%COMP%] {\r\n    padding: 8px 15px;\r\n    background: #dee2e6;\r\n    font-size: 12px;\r\n    border-radius: 20px;\r\n}\r\n\r\n.right-field-head[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n    font-size: 11px;\r\n    border-radius: 20px;\r\n}\r\n\r\n\r\n.box.prduct-gallery[_ngcontent-%COMP%] {\r\n    position: relative;\r\n}\r\n\r\n.sample-img[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    z-index: 1;\r\n    left: 15%;\r\n    top: 28%;\r\n    transform: rotate(-45deg);\r\n}\r\n\r\np.p-name[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    margin: 0;\r\n    font-size: 13px;\r\n    font-weight: 500;\r\n    vertical-align: middle;\r\n}\r\n\r\np.item-id[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    position: absolute;\r\n    top: 0;\r\n    background: #212529;\r\n    left: 0;\r\n    font-weight: 600;\r\n    color: #fff;\r\n    border-radius: 0 0 5px;\r\n    font-size: 11px;\r\n    padding: 3px 6px;\r\n}\r\n\r\nspan.price[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n    padding: 7px 10px 0;\r\n    float: left;\r\n    font-weight: 600;\r\n    line-height: 20px;\r\n}\r\n\r\n.item-id[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\r\n    font-weight: 600;\r\n}\r\n\r\n.instock[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n    text-align: center;\r\n    margin: 0 0 3px;\r\n    position: absolute;\r\n    top: 5%;\r\n    box-shadow: 0 0 30px 0 rgb(82 63 105 / 10%);\r\n    left: 70%;\r\n    background: rgb(224 152 152 / 24%);\r\n    width: 50px;\r\n    border: 1px solid rgb(0 0 0 / 10%);\r\n    height: 50px;\r\n    border-radius: 50%;\r\n\r\n img {\r\n    width: 30px !important;\r\n    height: 30px !important;\r\n    margin: 9px auto;\r\n    }\r\n}\r\n\r\n.pro-box.storeitem.item-box[_ngcontent-%COMP%] {\r\n    border: 1px solid #dee2e6;\r\n    height: 282px;\r\n}\r\n\r\nh1.heading-title[_ngcontent-%COMP%] {\r\n\r\n    span {\r\n        font-size: 10px;\r\n        text-transform: inherit;\r\n        background: #495057;\r\n        color: #fff;\r\n        padding: 10px 15px;\r\n        border-radius: 25px;\r\n    }\r\n}\r\n\r\nh1.heading-title[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    max-width: 65px;\r\n    margin-right: 5px;\r\n}\r\n\r\nh1.heading-title[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    font-weight: 400;\r\n    font-size: 13px;\r\n    position: absolute;\r\n    left: 80px;\r\n    bottom: 4px;\r\n    color: grey;\r\n}\r\n\r\n.offerDiv[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 5px;\r\n    right: 5px;\r\n    font-size: 10px;\r\n    background: #dc3545;\r\n    line-height: 10px;\r\n    font-weight: 700;\r\n    width: 35px;\r\n    height: 35px;\r\n    border-radius: 50%;\r\n    padding: 9px;\r\n    text-align: center;\r\n    color: #fff;\r\n}\r\n\r\n.offerDiv[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\r\n    display: block;\r\n}\r\n\r\nspan.price.strike-price[_ngcontent-%COMP%] {\r\n    color: #ccc;\r\n    text-decoration: line-through;\r\n}\r\n\r\n\r\n.row.text-level[_ngcontent-%COMP%] {\r\n    margin: 0 -10px 10px;\r\n}\r\n\r\n.store-add-remove[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    padding: 10px;\r\n    float: left;\r\n    width: 100%;\r\n}\r\n\r\n\r\n\r\n.row.product-slider-box[_ngcontent-%COMP%] {\r\n    border-bottom: 5px solid #ddd;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.carousel-inner[_ngcontent-%COMP%] {\r\n    height: 278px;\r\n}\r\n\r\n .carousel-item[_ngcontent-%COMP%] {\r\n    margin-right: 0;\r\n    border: 1px solid #f8f9fa;\r\n    background: #fff;\r\n}\r\n\r\n.product-slider-box[_ngcontent-%COMP%]   .domain-product[_ngcontent-%COMP%] {\r\n    max-width: 23%;\r\n}\r\n\r\n.product-slider-box[_ngcontent-%COMP%]   .sub-domain-product[_ngcontent-%COMP%] {\r\n    max-width: 77%;\r\n}\r\n\r\n.store-add-remove[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n    font-size: 11px;\r\n    text-align: center;\r\n    float: left;\r\n    transition: all .5s;\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n    min-width: 65px;\r\n}\r\n\r\n.store-add-remove[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]    + .btn[_ngcontent-%COMP%] {\r\n    float: right;\r\n}\r\n\r\n.item-subitem-list[_ngcontent-%COMP%]   .pro-box[_ngcontent-%COMP%] {\r\n    width: 99%;\r\n}\r\n\r\n.item-subitem-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    float: left;\r\n}\r\n .item-box[_ngcontent-%COMP%] {\r\n        max-width: 225px;\r\n        width: 100%;\r\n        float: left;\r\n    }\r\n    .sub-item-box[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    float: left;\r\n    max-width: 225px;\r\n    }\r\n\r\n    .sub-item-box[_ngcontent-%COMP%]   .add_to_cart[_ngcontent-%COMP%]   button.btn[_ngcontent-%COMP%] {\r\n        background: #000064;\r\n    }\r\n\r\n    .add_to_cart[_ngcontent-%COMP%]{\r\n     .remove-btn {\r\n        border-radius: 50%;\r\n        background: #05054ead !important;\r\n        color: #fff;\r\n        width: 35px;\r\n        height: 35px;\r\n        padding: 0;\r\n    }\r\n\r\n    .btn + .btn {\r\n        width: 100%;\r\n        border: 0;\r\n        border-radius: 30px;\r\n        font-size: 13px;\r\n        color: #fff;\r\n        margin: 10px 0 5px;\r\n        height: 34px;\r\n    }\r\n}\r\n\r\n.middle-arrow[_ngcontent-%COMP%] {\r\n    float: left;\r\n    width: 30px;\r\n    height: 50px;\r\n    font-size: 40px;\r\n    margin-top: 10%;\r\n    color: #dee2e6;\r\n    text-align: center;\r\n}\r\n\r\n.price-details[_ngcontent-%COMP%] {\r\n    float: left;\r\n    width: 100%;\r\n    margin-bottom: 10px;\r\n    font-size: 15px;\r\n    line-height: normal;\r\n    font-weight: 600;\r\n\r\n    .unit-price {\r\n        float: left;\r\n        width: 42%;\r\n    }\r\n}\r\n\r\n.unit-price[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    display: block;\r\n    font-size: 12px;\r\n    font-weight: 400;\r\n}\r\n\r\n.whole-sale-price[_ngcontent-%COMP%] {\r\n    float: right;\r\n    width: 58%;\r\n    text-align: right;\r\n\r\n\r\n span {\r\n    font-size: 12px;\r\n    display: block;\r\n    font-weight: 400;\r\n    }\r\n}\r\n\r\n\r\n.add_to_cart[_ngcontent-%COMP%] {\r\n    clear: both;\r\n}\r\n\r\n.subItem-field[_ngcontent-%COMP%] {\r\n    width: calc(100% - 280px);\r\n    float: left;\r\n}\r\n\r\n.item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n\r\n.pro-box.active[_ngcontent-%COMP%] {\r\n    border: 1px solid #63030c;\r\n}\r\n\r\n.p-details[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\r\n    font-size: 13px;\r\n    padding: 0 5px;\r\n    min-height: 25px;\r\n    height: 25px;\r\n    text-align: center;\r\n}\r\n\r\n.p-details[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n    margin-bottom: 0;\r\n    font-weight: 400;\r\n    line-height: normal;\r\n    padding-top: 2px;\r\n    padding-bottom: 2px;\r\n}\r\n\r\n.p-details[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\r\n    margin-bottom: 4px;\r\n}\r\n\r\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    padding: 5px;\r\n    font-size: 12px !important;\r\n    line-height: 18px;\r\n}\r\n\r\ntd.actdct_icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    max-width: 45px;\r\n}\r\n\r\n.search-list-label[_ngcontent-%COMP%] {\r\n    margin-bottom: 5px;\r\n}\r\n\r\ntd[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    color: #007bff;\r\n    text-decoration: underline;\r\n    cursor: pointer;\r\n}\r\n\r\n.tab-div[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: row;\r\n    gap: 2rem;\r\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ManageStoreItemSubItemDiscountsComponent, [{
        type: Component,
        args: [{ selector: 'app-manage-store-item-sub-item-discounts', template: "<div class=\"main-content-area\">\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <h1 class=\"heading-title\">Manage my Store Item Prices & Discounts</h1>\n\n        </div>\n    </div>\n    <form [formGroup]=\"itemSubitemForm\">\n        <div class=\"row topLevel\">\n            <div class=\"col-md-4\">\n\n                <div class=\"form-group\">\n                    <label>Store</label>\n                    <div class=\"form-control form-level no-border\">\n                        {{storeName}}\n                    </div>\n                    <!-- <select class=\"form-control\" formControlName=\"SUBACCT_OFFICE_ID\" (change)=\"onStoreChange($event)\">\n          <option value=\"\">Select</option>\n          <option *ngFor=\"let store of storelist\" [value]=\"store.RETAIL_D2C_ACCT_INTRNL_OFFICE_REGID\">{{store.RETAIL_D2C_SUBACCT_OFFICE_NAME}}</option>\n          </select> -->\n                </div>\n            </div>\n            <div class=\"col-md-4\">\n                <div class=\"form-group\">\n                    <label>Store Product-Line</label>\n                    <select class=\"form-control\" formControlName=\"RETAIL_D2C_PRODUCT_ID\"\n                        (change)=\"productLineChange($event)\">\n                        <option value=\"\">Select</option>\n                        <option *ngFor=\"let productline of productLinelist\" [value]=\"productline.RETAIL_D2C_PRODUCT_ID\">\n                            {{productline.RETAIL_D2C_PRODUCT_NAME}}</option>\n                    </select>\n                </div>\n            </div>\n            <div class=\"col-md-4\">\n                <div class=\"form-group\">\n                    <label>Store Item</label>\n                    <select class=\"form-control\" formControlName=\"itemid\" (change)=\"itemChange($event)\">\n                        <option value=\"\">Select</option>\n                        <option *ngFor=\"let item of dropShipItemList\" [value]=\"item.RETAIL_D2C_ITEM_ID\">\n                            {{item.RETAIL_D2C_ITEM_NAME}}</option>\n\n                    </select>\n                </div>\n            </div>\n            <div class=\"col-md-12 bottom-btn mt-1\">\n                <button type=\"button\" (click)=\"manageyStoreItemsPricesandDiscounts()\"\n                    class=\"btn custom-btn float-right\">Manage Store Items Price & Discounts</button>\n                <!-- <button type=\"button\" (click)=\"getItemSubtemDiscount()\" class=\"btn float-right mr-2\">Show already MRP & Discounts</button> -->\n\n            </div>\n        </div>\n    </form>\n\n    <div *ngIf=\"showMrpDiscountTable\" class=\"card exiting-office-table mt-2 pb-0\">\n        <div class=\"card-header\">\n            Already Added MRP & Discounts\n        </div>\n\n        <div class=\"search-field-list\">\n            <div class=\"search-list-label\">Product Line: <span>{{productName}}</span></div>\n            <div class=\"search-list-label\">Item: <span>{{itemName}}</span></div>\n        </div>\n        <div class=\"card-body pa-0\">\n            <table class=\"table\">\n                <thead>\n                    <tr>\n                        <th>Sr. No.</th>\n                        <th>Sub-Item Name</th>\n                        <th *ngIf=\"domainid == 1\">Size</th>\n                        <th>MRP/UNIT(Rs.)</th>\n                        <th>Export Price(USD)</th>\n                        <th>Discounts ID</th>\n                        <th>Valid from</th>\n                        <th>Valid To</th>\n                        <th>Discount Validity</th>\n                        <th>%</th>\n                        <th>Discount</th>\n                        <th>MRP</th>\n                        <th>Discount</th>\n                        <th>&nbsp;</th>\n\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let itemSubitemDiscount of manageStoreItemPDList; index as i\">\n                        <td>{{i+1}}</td>\n                        <td>{{itemSubitemDiscount.RETAIL_D2C_SUBITEM_NAME}}</td>\n                        <td *ngIf=\"domainid == 1\">{{itemSubitemDiscount.RETAIL_D2C_SUBITEM_SIZE}}</td>\n                        <td>{{itemSubitemDiscount.RETAIL_D2C_SUBITEM_MRP}}</td>\n                        <td>{{itemSubitemDiscount.RETAIL_D2C_SUBITEM_CASE_MRP}}</td>\n                        <td>{{itemSubitemDiscount.DiscountId}}</td>\n                        <td>{{itemSubitemDiscount.RETAIL_D2C_DISCOUNT_VALID_FROM_DATE | date: 'dd/MM/yyyy'}}</td>\n                        <td>{{itemSubitemDiscount.RETAIL_D2C_DISCOUNT_VALID_TO_DATE | date: 'dd/MM/yyyy'}}</td>\n                        <td class=\"actdct_icon\">\n                            <span *ngIf=\"itemSubitemDiscount.RETAIL_D2C_DISCOUNT_VALIDITY_FLG; else elseBlock\">\n                                <img src=\"assets/images/active_icon.png\">\n                            </span>\n                            <ng-template #elseBlock><img src=\"assets/images/deactive_icon.png\"></ng-template>\n                        </td>\n\n                        <td class=\"actdct_icon\">\n                            <span *ngIf=\"itemSubitemDiscount.RETAIL_D2C_DISCOUNT_PERCENTG_FLG; else elseBlock1\">\n                                <img src=\"assets/images/active_icon.png\">\n                            </span>\n                            <ng-template #elseBlock1><img src=\"assets/images/deactive_icon.png\"></ng-template>\n\n                        </td>\n                        <td>{{itemSubitemDiscount.RETAIL_D2C_DISCOUNT_FIGURE}}</td>\n                        <td (click)=\"selectSubItemPriceData(itemSubitemDiscount, template1)\" class=\"delete-icon\"><i\n                                class=\"fa fa-edit\"></i></td>\n                        <td (click)=\"selecttemSubtemDiscountData(itemSubitemDiscount, template)\" class=\"delete-icon\"><i\n                                class=\"fa fa-edit\"></i></td>\n                        <td><a (click)=\"openB2BModal(itemSubitemDiscount, templateB2B)\">B2B</a></td>\n                    </tr>\n                </tbody>\n            </table>\n\n        </div>\n\n    </div>\n\n</div>\n\n<ng-template #template>\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title pull-left\">Edit Store Item Discounts</h4>\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"closeModal()\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body pt-0\">\n        <form [formGroup]=\"discountForm\">\n            <div class=\"search-field-list\">\n                <div class=\"search-list-label\">Product Line: <span>{{productName}}</span></div>\n                <div class=\"search-list-label\">Item: <span>{{itemName}}</span></div>\n                <div class=\"search-list-label\">Sub Item Name: <span>{{subitemName}}</span></div>\n                <div class=\"search-list-label\">Discount Coupon ID: <span>{{couponID}}</span></div>\n                <div class=\"search-list-label\">Retail MRP: <span>{{retailMRP}}</span></div>\n                <div class=\"search-list-label\">Whole Sale Price: <span>{{wholesalePrice}}</span></div>\n                <div class=\"search-list-label\">Size: <span>{{retailSize}}</span></div>\n            </div>\n            <div class=\"row\">\n\n                <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                        <label>Discount %</label>\n                        <select class=\"form-control\" formControlName=\"RETAIL_D2C_DISCOUNT_PERCENTG_FLG\">\n                            <option selected value=\"Select\">Select</option>\n                            <option value=true>Yes</option>\n                            <option value=false>No</option>\n                        </select>\n                    </div>\n                </div>\n\n                <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                        <label>Discount Validity</label>\n                        <select class=\"form-control\" formControlName=\"RETAIL_D2C_DISCOUNT_VALIDITY_FLG\">\n                            <option selected value=\"Select\">Select</option>\n                            <option value=true>Yes</option>\n                            <option value=false>No</option>\n                        </select>\n                    </div>\n                </div>\n                <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                        <label>Discount Figure</label>\n                        <input type=\"text\" class=\"form-control\" formControlName=\"RETAIL_DISCOUNT_FIGURE\">\n                    </div>\n                </div>\n                <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                        <label>Valid From</label>\n                        <input type=\"text\" bsDatepicker (bsValueChange)=\"onDateChange($event)\"\n                            [bsConfig]=\"{ dateInputFormat: 'DD/MM/YYYY' }\" class=\"form-control\"\n                            formControlName=\"RETAIL_VALID_FROM_DATE\">\n                    </div>\n                </div>\n\n                <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                        <label>Valid To</label>\n                        <input type=\"text\" bsDatepicker (bsValueChange)=\"onDateChange($event)\"\n                            [bsConfig]=\"{ dateInputFormat: 'DD/MM/YYYY' }\" class=\"form-control\"\n                            formControlName=\"RETAIL_VALID_To_DATE\">\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"row\">\n\n                <div class=\"col-md-12\">\n                    <button type=\"button\" (click)=\"updateItemSubitemDiscount()\" class=\"btn custom-btn float-right\">Save\n                        Discount for Sub-Item</button>\n                </div>\n            </div>\n        </form>\n    </div>\n</ng-template>\n\n<ng-template #template1>\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title pull-left\">Edit Store Item Prices</h4>\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body pt-0\">\n        <form [formGroup]=\"mrpForm\">\n            <div class=\"search-field-list\">\n                <div class=\"search-list-label\">Product Line: <span>{{productName}}</span></div>\n                <div class=\"search-list-label\">Item: <span>{{itemName}}</span></div>\n                <div class=\"search-list-label\">Sub Item Name: <span>{{subitemName}}</span></div>\n                <div class=\"search-list-label\">Size: <span>{{retailSize}}</span></div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                        <label>Retail Prise(Rs.)</label>\n                        <input type=\"text\" class=\"form-control\" formControlName=\"Retail_MRP\">\n                    </div>\n                </div>\n                <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                        <label>Export Price (USD)</label>\n                        <input type=\"text\" class=\"form-control\" formControlName=\"RETAIL_WHOLESALE_MRP\">\n                    </div>\n                </div>\n\n\n            </div>\n\n            <div class=\"row\">\n\n                <div class=\"col-md-12\">\n                    <button type=\"button\" (click)=\"updateItemSubitemMRP()\" class=\"btn custom-btn float-right\">Save Item\n                        MRP</button>\n                </div>\n            </div>\n        </form>\n    </div>\n</ng-template>\n\n<ng-template #EditRegularDiscount>\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title pull-left\">Edit Regular Discount</h4>\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body pt-0\">\n        <form>\n            <div class=\"search-field-list\">\n                <div class=\"search-list-label\">Valid From: <span>{{discountEdit.DateFrom}}</span>\n                </div>\n                <div class=\"search-list-label\">Valid To: <span>{{discountEdit.DateTo}}</span></div>\n                <div class=\"search-list-label\">Discount Validity: <span></span></div>\n                <div class=\"search-list-label\">Discount Figure:\n                    <span>{{discountEdit.PercntgFigure}}</span>\n                </div>\n            </div>\n            <div class=\"row\">\n\n                <div class=\"col-md-4\">\n                    <label>From Date</label>\n                    <div class=\"input-group\">\n                        <input type=\"text\" [(ngModel)]=\"DisDatefrom\" name=\"fromDate\" class=\"form-control\"\n                            bsDatepicker [bsConfig]=\"{ dateInputFormat: 'DD/MM/YYYY' }\" placeholder=\"dd/mm/yyyy\">\n                        <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\"><i class=\"icofont-ui-calendar\"></i></span>\n                        </div>\n                        <div *ngIf=\"\" class=\"invalid-feedback\">\n                            <div *ngIf=\"\">From date is required\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-md-4\">\n                    <label>To Date</label>\n                    <div class=\"input-group\">\n                        <input type=\"text\" [(ngModel)]=\"DisDateto\" name=\"toDate\" class=\"form-control\" bsDatepicker\n                            [bsConfig]=\"{ dateInputFormat: 'DD/MM/YYYY', minDate: DisDatefrom ? DisDatefrom: null }\"\n                            placeholder=\"dd/mm/yyyy\" [disabled]=\"!DisDatefrom\">\n                        <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\"><i class=\"icofont-ui-calendar\"></i></span>\n                        </div>\n                        <div *ngIf=\"\" class=\"invalid-feedback\">\n                            <div *ngIf=\"\">To date is required\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <!-- <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                        <label>Discount Validity</label>\n                        <select class=\"form-control\">\n                            <option selected value=\"Select\">Select</option>\n                            <option value=true>Yes</option>\n                            <option value=false>No</option>\n                        </select>\n                    </div>\n                </div> -->\n\n\n\n                <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                        <label>Discount %</label>\n                        <select [(ngModel)]=\"discountEdit.PercntgFlg\" name=\"discountPercentFlag\"\n                            class=\"form-control\">\n                            <option selected value=\"Select\">Select</option>\n                            <option [value]=\"true\">Yes</option>\n                            <option [value]=\"false\">No</option>\n                        </select>\n                    </div>\n                </div>\n\n            </div>\n\n            <div class=\"row\">\n\n                <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                        <label>Discount Figure</label>\n                        <input [(ngModel)]=\"discountEdit.PercntgFigure\" name=\"disfig\" type=\"text\"\n                            class=\"form-control\">\n                    </div>\n                </div>\n\n            </div>\n\n            <div class=\"row\">\n\n                <div class=\"col-md-12\">\n                    <button (click)=\"editDiscount(discountEdit)\" type=\"button\"\n                        class=\"btn custom-btn float-right\">Save</button>\n                </div>\n\n            </div>\n        </form>\n    </div>\n</ng-template>\n\n<ng-template #AddRegularDiscount>\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title pull-left\">Add Regular Discount</h4>\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body pt-0\">\n        <form>\n            <div class=\"row\">\n\n                <div class=\"col-md-4\">\n                    <label>From Date</label>\n                    <div class=\"input-group\">\n                        <input type=\"text\" [(ngModel)]=\"b2bItemDiscount.FromDate\" name=\"fromDate\" class=\"form-control\"\n                            bsDatepicker [bsConfig]=\"{ dateInputFormat: 'DD/MM/YYYY' }\" placeholder=\"dd/mm/yyyy\">\n                        <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\"><i class=\"icofont-ui-calendar\"></i></span>\n                        </div>\n                        <div *ngIf=\"\" class=\"invalid-feedback\">\n                            <div *ngIf=\"\">From date is required\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-md-4\">\n                    <label>To Date</label>\n                    <div class=\"input-group\">\n                        <input type=\"text\" [(ngModel)]=\"b2bItemDiscount.ToDate\" name=\"toDate\" class=\"form-control\"\n                            bsDatepicker\n                            [bsConfig]=\"{ dateInputFormat: 'DD/MM/YYYY', minDate: b2bItemDiscount.FromDate ? b2bItemDiscount.FromDate : null }\"\n                            placeholder=\"dd/mm/yyyy\" [disabled]=\"!b2bItemDiscount.FromDate\">\n                        <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\"><i class=\"icofont-ui-calendar\"></i></span>\n                        </div>\n                        <div *ngIf=\"\" class=\"invalid-feedback\">\n                            <div *ngIf=\"\">To date is required\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <!-- <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                        <label>Discount Validity</label>\n                        <select class=\"form-control\" formControlName=\"\">\n                            <option selected value=\"Select\">Select</option>\n                            <option value=true>Yes</option>\n                            <option value=false>No</option>\n                        </select>\n                    </div>\n                </div> -->\n\n                <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                        <label>Discount %</label>\n                        <select (click)=\"onslectDiscountFlag($event)\" class=\"form-control\">\n                            <option selected value=\"Select\">Select</option>\n                            <option value='true'>Yes</option>\n                            <option value='false'>No</option>\n                        </select>\n                    </div>\n                </div>\n\n            </div>\n\n            <div class=\"row\">\n\n                <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                        <label>Discount Figure</label>\n                        <input [(ngModel)]=\"b2bItemDiscount.PercntgFigure\" name=\"discount\" type=\"text\"\n                            class=\"form-control\">\n                    </div>\n                </div>\n\n            </div>\n\n            <div class=\"row\">\n\n                <div class=\"col-md-12\">\n                    <button (click)=\"addRegularDiscount()\" type=\"button\" class=\"btn custom-btn float-right\">Add</button>\n                </div>\n\n            </div>\n        </form>\n    </div>\n</ng-template>\n\n<ng-template #EditItemCountDiscount>\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title pull-left\">Edit Item Count Discount</h4>\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body pt-0\">\n        <form>\n            <div class=\"search-field-list\">\n                <div class=\"search-list-label\">Valid From: <span>{{discountEdit.DateFrom}}</span></div>\n                <div class=\"search-list-label\">Valid To: <span>{{discountEdit.DateTo}}</span></div>\n                <div class=\"search-list-label\">%: <span>{{discountEdit.PercntgFlg}}</span></div>\n                <div class=\"search-list-label\">Discount Figure: <span>{{discountEdit.PercntgFigure}}</span></div>\n\n            </div>\n            <div class=\"row\">\n\n                <div class=\"col-md-4\">\n                    <label>From Date</label>\n                    <div class=\"input-group\">\n                        <input type=\"text\" [(ngModel)]=\"DisDatefrom\" name=\"fromDate\" class=\"form-control\"\n                            bsDatepicker [bsConfig]=\"{ dateInputFormat: 'DD/MM/YYYY' }\" placeholder=\"dd/mm/yyyy\">\n                        <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\"><i class=\"icofont-ui-calendar\"></i></span>\n                        </div>\n                        <div *ngIf=\"\" class=\"invalid-feedback\">\n                            <div *ngIf=\"\">From date is required</div>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-md-4\">\n                    <label>To Date</label>\n                    <div class=\"input-group\">\n                        <input type=\"text\" [(ngModel)]=\"DisDateto\" name=\"toDate\" class=\"form-control\" bsDatepicker\n                            [bsConfig]=\"{ dateInputFormat: 'DD/MM/YYYY', minDate: DisDatefrom ? DisDatefrom: null }\"\n                            placeholder=\"dd/mm/yyyy\" [disabled]=\"!DisDatefrom\">\n                        <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\"><i class=\"icofont-ui-calendar\"></i></span>\n                        </div>\n                        <div *ngIf=\"\" class=\"invalid-feedback\">\n                            <div *ngIf=\"\">To date is required</div>\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n\n            <div class=\"row\">\n\n                <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                        <label>Discount %</label>\n                        <select [(ngModel)]=\"discountEdit.PercntgFlg\" name=\"discountPercentFlag\" class=\"form-control\">\n                            <option selected value=\"Select\">Select</option>\n                            <option [value]=\"true\">Yes</option>\n                            <option [value]=\"false\">No</option>\n                        </select>\n                    </div>\n                </div>\n\n                <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                        <label>Discount Figure</label>\n                        <input [(ngModel)]=\"discountEdit.PercntgFigure\" name=\"disfig\" type=\"number\" class=\"form-control\">\n                    </div>\n                </div>\n\n            </div>\n\n            <div class=\"row\">\n\n                <div class=\"col-md-12\">\n                    <button (click)=\"editDiscount(discountEdit)\" type=\"button\" class=\"btn custom-btn float-right\">Save</button>\n                </div>\n\n            </div>\n        </form>\n    </div>\n</ng-template>\n\n<ng-template #AddItemCountDiscount>\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title pull-left\">Add Item Count Discount</h4>\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body pt-0\">\n        <form>\n            <div class=\"row\">\n\n                <div class=\"col-md-4\">\n                    <label>From Date</label>\n                    <div class=\"input-group\">\n                        <input type=\"text\" [(ngModel)]=\"b2bItemDiscount.FromDate\" name=\"fromDate\" class=\"form-control\"\n                            bsDatepicker [bsConfig]=\"{ dateInputFormat: 'DD/MM/YYYY' }\" placeholder=\"dd/mm/yyyy\">\n                        <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\"><i class=\"icofont-ui-calendar\"></i></span>\n                        </div>\n                        <div *ngIf=\"\" class=\"invalid-feedback\">\n                            <div *ngIf=\"\">From date is required\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-md-4\">\n                    <label>To Date</label>\n                    <div class=\"input-group\">\n                        <input type=\"text\" [(ngModel)]=\"b2bItemDiscount.ToDate\" name=\"toDate\" class=\"form-control\"\n                            bsDatepicker\n                            [bsConfig]=\"{ dateInputFormat: 'DD/MM/YYYY', minDate: b2bItemDiscount.FromDate ? b2bItemDiscount.FromDate : null }\"\n                            placeholder=\"dd/mm/yyyy\" [disabled]=\"!b2bItemDiscount.FromDate\">\n                        <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\"><i class=\"icofont-ui-calendar\"></i></span>\n                        </div>\n                        <div *ngIf=\"\" class=\"invalid-feedback\">\n                            <div *ngIf=\"\">To date is required\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <!-- <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                        <label>Discount Validity</label>\n                        <select class=\"form-control\" formControlName=\"\">\n                            <option selected value=\"Select\">Select</option>\n                            <option value=true>Yes</option>\n                            <option value=false>No</option>\n                        </select>\n                    </div>\n                </div> -->\n\n                <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                        <label>Discount %</label>\n                        <select (click)=\"onslectDiscountFlag($event)\" class=\"form-control\">\n                            <option selected value=\"Select\">Select</option>\n                            <option value=true>Yes</option>\n                            <option value=false>No</option>\n                        </select>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"row\">\n\n                <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                        <label>Discount Figure</label>\n                        <input [(ngModel)]=\"b2bItemDiscount.PercntgFigure\" name=\"discountFig\" type=\"number\"\n                            class=\"form-control\">\n                    </div>\n                </div>\n\n                <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                        <label>Item Count</label>\n                        <input [(ngModel)]=\"b2bItemDiscount.CountsOnCart\" name=\"itemCount\" type=\"number\"\n                            class=\"form-control\">\n                    </div>\n                </div>\n\n            </div>\n\n            <div class=\"row\">\n\n                <div class=\"col-md-12\">\n                    <button (click)=\"addRegularDiscount()\" type=\"button\" class=\"btn custom-btn float-right\">Add</button>\n                </div>\n\n            </div>\n        </form>\n    </div>\n</ng-template>\n\n<ng-template #EditPromotionalDiscount>\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title pull-left\">Edit Item Count Discount</h4>\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body pt-0\">\n        <form>\n            <div class=\"search-field-list\">\n                <div class=\"search-list-label\">Valid From: <span>{{discountEdit.DateFrom}}</span></div>\n                <div class=\"search-list-label\">Valid To: <span>{{discountEdit.DateTo}}</span></div>\n                <div class=\"search-list-label\">%: <span>{{discountEdit.PercntgFlg}}</span></div>\n                <div class=\"search-list-label\">Discount Figure: <span>{{discountEdit.PercntgFigure}}</span></div>\n\n            </div>\n            <div class=\"row\">\n\n                <div class=\"col-md-4\">\n                    <label>From Date</label>\n                    <div class=\"input-group\">\n                        <input type=\"text\" [(ngModel)]=\"DisDatefrom\" name=\"fromDate\" class=\"form-control\"\n                            bsDatepicker [bsConfig]=\"{ dateInputFormat: 'DD/MM/YYYY' }\" placeholder=\"dd/mm/yyyy\">\n                        <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\"><i class=\"icofont-ui-calendar\"></i></span>\n                        </div>\n                        <div *ngIf=\"\" class=\"invalid-feedback\">\n                            <div *ngIf=\"\">From date is required</div>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-md-4\">\n                    <label>To Date</label>\n                    <div class=\"input-group\">\n                        <input type=\"text\" [(ngModel)]=\"DisDateto\" name=\"toDate\" class=\"form-control\" bsDatepicker\n                            [bsConfig]=\"{ dateInputFormat: 'DD/MM/YYYY', minDate: DisDatefrom ? DisDatefrom: null }\"\n                            placeholder=\"dd/mm/yyyy\" [disabled]=\"!DisDatefrom\">\n                        <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\"><i class=\"icofont-ui-calendar\"></i></span>\n                        </div>\n                        <div *ngIf=\"\" class=\"invalid-feedback\">\n                            <div *ngIf=\"\">To date is required</div>\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n\n            <div class=\"row\">\n\n                <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                        <label>Discount %</label>\n                        <select [(ngModel)]=\"discountEdit.PercntgFlg\" name=\"discountPercentFlag\" class=\"form-control\">\n                            <option selected value=\"Select\">Select</option>\n                            <option [value]=\"true\">Yes</option>\n                            <option [value]=\"false\">No</option>\n                        </select>\n                    </div>\n                </div>\n\n                <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                        <label>Discount Figure</label>\n                        <input [(ngModel)]=\"discountEdit.PercntgFigure\" name=\"disfig\" type=\"number\" class=\"form-control\">\n                    </div>\n                </div>\n\n            </div>\n\n            <div class=\"row\">\n\n                <div class=\"col-md-12\">\n                    <button (click)=\"editDiscount(discountEdit)\" type=\"button\" class=\"btn custom-btn float-right\">Save</button>\n                </div>\n\n            </div>\n        </form>\n    </div>\n</ng-template>\n\n<ng-template #AddPromotionalDiscount>\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title pull-left\">Add Promotional Discount</h4>\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body pt-0\">\n        <form>\n\n            <div class=\"row\">\n\n                <div class=\"col-md-4\">\n                    <label>From Date</label>\n                    <div class=\"input-group\">\n                        <input type=\"text\" [(ngModel)]=\"b2bItemDiscount.FromDate\" name=\"fromDate\" class=\"form-control\"\n                            bsDatepicker [bsConfig]=\"{ dateInputFormat: 'DD/MM/YYYY' }\" placeholder=\"dd/mm/yyyy\">\n                        <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\"><i class=\"icofont-ui-calendar\"></i></span>\n                        </div>\n                        <div *ngIf=\"\" class=\"invalid-feedback\">\n                            <div *ngIf=\"\">From date is required\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-md-4\">\n                    <label>To Date</label>\n                    <div class=\"input-group\">\n                        <input type=\"text\" [(ngModel)]=\"b2bItemDiscount.ToDate\" name=\"toDate\" class=\"form-control\"\n                            bsDatepicker\n                            [bsConfig]=\"{ dateInputFormat: 'DD/MM/YYYY', minDate: b2bItemDiscount.FromDate ? b2bItemDiscount.FromDate : null }\"\n                            placeholder=\"dd/mm/yyyy\" [disabled]=\"!b2bItemDiscount.FromDate\">\n                        <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\"><i class=\"icofont-ui-calendar\"></i></span>\n                        </div>\n                        <div *ngIf=\"\" class=\"invalid-feedback\">\n                            <div *ngIf=\"\">To date is required\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <!-- <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                        <label>Discount Validity</label>\n                        <select class=\"form-control\" formControlName=\"\">\n                            <option selected value=\"Select\">Select</option>\n                            <option value=true>Yes</option>\n                            <option value=false>No</option>\n                        </select>\n                    </div>\n                </div> -->\n\n\n                <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                        <label>Discount %</label>\n                        <select (click)=\"onslectDiscountFlag($event)\" class=\"form-control\">\n                            <option selected value=\"Select\">Select</option>\n                            <option value=true>Yes</option>\n                            <option value=false>No</option>\n                        </select>\n                    </div>\n                </div>\n\n            </div>\n\n            <div class=\"row\">\n\n\n                <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                        <label>Discount Figure</label>\n                        <input [(ngModel)]=\"b2bItemDiscount.PercntgFigure\" name=\"discountFig\" type=\"text\"\n                            class=\"form-control\">\n                    </div>\n                </div>\n\n            </div>\n\n            <div class=\"row\">\n\n                <div class=\"col-md-12\">\n                    <button (click)=\"addRegularDiscount()\" type=\"button\" class=\"btn custom-btn float-right\">Add</button>\n                </div>\n\n            </div>\n        </form>\n    </div>\n</ng-template>\n\n<ng-template #EditPrefferedDiscount>\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title pull-left\">Edit Preffered Discount</h4>\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body pt-0\">\n        <form [formGroup]=\"mrpForm\">\n            <div class=\"search-field-list\">\n                <div class=\"search-list-label\">Valid From: <span></span></div>\n                <div class=\"search-list-label\">Valid To: <span></span></div>\n                <div class=\"search-list-label\">Discount Validity: <span></span></div>\n                <div class=\"search-list-label\">%: <span></span></div>\n                <div class=\"search-list-label\">Discount Figure: <span></span></div>\n                <div class=\"search-list-label\">Account: <span></span></div>\n            </div>\n            <div class=\"row\">\n\n                <div class=\"col-md-4\">\n                    <label>From Date</label>\n                    <div class=\"input-group\">\n                        <input type=\"text\" formControlName=\"\" class=\"form-control\" bsDatepicker\n                            [bsConfig]=\"{ dateInputFormat: 'DD/MM/YYYY' }\" placeholder=\"dd/mm/yyyy\">\n                        <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\"><i class=\"icofont-ui-calendar\"></i></span>\n                        </div>\n                        <div *ngIf=\"\" class=\"invalid-feedback\">\n                            <div *ngIf=\"\">From date is required\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-md-4\">\n                    <label>To Date</label>\n                    <div class=\"input-group\">\n                        <input type=\"text\" formControlName=\"\" class=\"form-control\" bsDatepicker\n                            [bsConfig]=\"{ dateInputFormat: 'DD/MM/YYYY' }\" placeholder=\"dd/mm/yyyy\">\n                        <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\"><i class=\"icofont-ui-calendar\"></i></span>\n                        </div>\n                        <div *ngIf=\"\" class=\"invalid-feedback\">\n                            <div *ngIf=\"\">From date is required\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                        <label>Discount Validity</label>\n                        <select class=\"form-control\" formControlName=\"\">\n                            <option selected value=\"Select\">Select</option>\n                            <option value=true>Yes</option>\n                            <option value=false>No</option>\n                        </select>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"row\">\n\n                <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                        <label>Discount %</label>\n                        <select class=\"form-control\" formControlName=\"\">\n                            <option selected value=\"Select\">Select</option>\n                            <option value=true>Yes</option>\n                            <option value=false>No</option>\n                        </select>\n                    </div>\n                </div>\n\n                <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                        <label>Discount Figure</label>\n                        <input type=\"text\" class=\"form-control\" formControlName=\"\">\n                    </div>\n                </div>\n\n                <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                        <label>Account</label>\n                        <select class=\"form-control\" formControlName=\"\">\n                            <option selected value=\"Select\">Select</option>\n                            <option value=true>Account 1</option>\n                            <option value=false>Account 2</option>\n                        </select>\n                    </div>\n                </div>\n\n            </div>\n\n            <div class=\"row\">\n\n                <div class=\"col-md-12\">\n                    <button type=\"button\" (click)=\"updateItemSubitemMRP()\"\n                        class=\"btn custom-btn float-right\">Save</button>\n                </div>\n\n            </div>\n        </form>\n    </div>\n</ng-template>\n\n<ng-template #AddPrefferedDiscount>\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title pull-left\">Add Preffered Discount</h4>\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body pt-0\">\n        <form>\n\n            <div class=\"row\">\n\n                <div class=\"col-md-4\">\n                    <label>From Date</label>\n                    <div class=\"input-group\">\n                        <input type=\"text\" [(ngModel)]=\"addNewPreferredPartnerDiscount.ValidFrom\" name=\"fromDate\"\n                            class=\"form-control\" bsDatepicker [bsConfig]=\"{ dateInputFormat: 'DD/MM/YYYY' }\"\n                            placeholder=\"dd/mm/yyyy\">\n                        <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\"><i class=\"icofont-ui-calendar\"></i></span>\n                        </div>\n                        <div *ngIf=\"\" class=\"invalid-feedback\">\n                            <div *ngIf=\"\">From date is required\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-md-4\">\n                    <label>To Date</label>\n                    <div class=\"input-group\">\n                        <input type=\"text\" [(ngModel)]=\"addNewPreferredPartnerDiscount.ValidTo\" name=\"toDate\"\n                            class=\"form-control\" bsDatepicker\n                            [bsConfig]=\"{ dateInputFormat: 'DD/MM/YYYY', minDate: addNewPreferredPartnerDiscount.ValidFrom ? addNewPreferredPartnerDiscount.ValidFrom : null }\"\n                            placeholder=\"dd/mm/yyyy\" [disabled]=\"!addNewPreferredPartnerDiscount.ValidFrom\">\n                        <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\"><i class=\"icofont-ui-calendar\"></i></span>\n                        </div>\n                        <div *ngIf=\"\" class=\"invalid-feedback\">\n                            <div *ngIf=\"\">To date is required\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                        <label>Discount %</label>\n                        <select (click)=\"onslectDiscountFlagPreddredDiscount($event)\" class=\"form-control\">\n                            <option selected value=\"Select\">Select</option>\n                            <option value=true>Yes</option>\n                            <option value=false>No</option>\n                        </select>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"row\">\n\n                <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                        <label>Discount Figure</label>\n                        <input [(ngModel)]=\"addNewPreferredPartnerDiscount.PrefDiscountNumber\" name=\"discount\"\n                            type=\"text\" class=\"form-control\">\n                    </div>\n                </div>\n\n                <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                        <label>Country</label>\n                        <select class=\"form-control\" (change)=\"changeCountry($event)\">\n                            <option value=\"\">Select</option>\n                            <option *ngFor=\"let country of countryList\" [value]=\"country.CNTRY_ID\">{{country.CNTRY_NM}}\n                            </option>\n                        </select>\n                    </div>\n                </div>\n\n                <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                        <label>State</label>\n                        <select class=\"form-control\" (change)=\"changeState($event)\">\n                            <option value=\"\">Select</option>\n                            <option *ngFor=\"let state of stateList\" [value]=\"state.STATE_ID\">{{state.STATE_NM}}</option>\n                        </select>\n                    </div>\n                </div>\n\n            </div>\n\n            <div class=\"row\">\n\n                <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                        <label>City</label>\n                        <select class=\"form-control\" (change)=\"changeCity($event)\">\n                            <option selected value=\"\">Select</option>\n                            <option *ngFor=\"let city of cityList\" [value]=\"city.CITY_ID\">{{city.CITY_NM}}</option>\n                        </select>\n                    </div>\n                </div>\n\n                <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                        <label>Network Accounts</label>\n                        <select (change)=\"onSelectNetworkAcc($event)\" class=\"form-control\">\n                            <option selected value=\"Select\">Select</option>\n                            <option *ngFor=\"let acc of secondaryAcc\" [value]=\"acc.SubaccountId\">{{ acc.OfficeName }}\n                            </option>\n                        </select>\n                    </div>\n                </div>\n\n            </div>\n\n            <div class=\"row\">\n\n                <div class=\"col-md-12\">\n                    <button type=\"button\" (click)=\"addPrefferedDiscount()\"\n                        class=\"btn custom-btn float-right\">Add</button>\n                </div>\n\n            </div>\n        </form>\n    </div>\n</ng-template>\n\n\n<ng-template #templateB2B>\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title pull-left\">B2B STAKEHOLDER DISCOUNTS FOR SUBITEM</h4>\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n\n    <tabset class=\"p-3\">\n\n        <tab (selectTab)=\"onTabChange('Distributors')\" heading=\"Distributors\" id=\"tab1\">\n\n            <div class=\"form-group\">\n                <label class=\"me-3 mb-1\">Select Discount Type</label>\n                <div class=\"d-flex tab-div mb-3\">\n                    <div>\n                        <label>\n                            <input [(ngModel)]=\"selectedDiscountTypeTab1\" type=\"radio\" name=\"options1\" value=\"regularDiscount\" (change)=\"onSelecttab1($event)\">\n                            Regular Discount\n                        </label>\n                    </div>\n                    <div>\n                        <label>\n                            <input [(ngModel)]=\"selectedDiscountTypeTab1\" type=\"radio\" name=\"options1\" value=\"itemCountsDiscount\"\n                                (change)=\"onSelecttab1($event)\"> Item Counts Discount\n                        </label>\n                    </div>\n                    <div>\n                        <label>\n                            <input [(ngModel)]=\"selectedDiscountTypeTab1\" type=\"radio\" name=\"options1\" value=\"promotionalDiscount\"\n                                (change)=\"onSelecttab1($event)\"> Promotional Discount\n                        </label>\n                    </div>\n                    <div>\n                        <label>\n                            <input [(ngModel)]=\"selectedDiscountTypeTab1\" type=\"radio\" name=\"options1\" value=\"prefferedPartnerDiscount\"\n                                (change)=\"onSelecttab1($event)\"> Preffered Partner Discount\n                        </label>\n                    </div>\n                </div>\n\n                <!-- for regular discount -->\n                <div *ngIf=\"isRegularDiscountSelectedTab1\">\n                    <table class=\"table\" *ngIf=\"dicountArr && dicountArr.length > 0; else noDataTab1Regular\">\n                        <thead>\n                            <tr>\n                                <th>Valid From</th>\n                                <th>Valid To</th>\n                                <th>Discount Validity</th>\n                                <th>%</th>\n                                <th>Discount Figure</th>\n                                <th>Edit</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr *ngFor=\"let discount of dicountArr\">\n                                <td>\n                                    <div>\n                                        {{ discount.RETAIL_B2B_DISCOUNT_VALD_FRM_DATE || 'NA' }}\n                                    </div>\n                                </td>\n                                <td>\n                                    <div>\n                                        {{ discount.RETAIL_B2B_DISCOUNT_VALID_TO_DATE || 'NA' }}\n                                    </div>\n                                </td>\n                                <td class=\"actdct_icon\">\n                                    <div>\n                                        <img *ngIf=\"discount.RETAIL_B2B_ITEM_DISCNT_VALID_FLG; else deactive1\"\n                                            src=\"assets/images/active_icon.png\">\n                                        <ng-template #deactive1>\n                                            <img src=\"assets/images/deactive_icon.png\">\n                                        </ng-template>\n                                    </div>\n                                </td>\n                                <td class=\"actdct_icon\">\n                                    <div>\n                                        <img *ngIf=\"discount.RETAIL_B2B_ITEM_SPL_DISC_PERCNTG_FIG; else deactive2\"\n                                            src=\"assets/images/active_icon.png\">\n                                        <ng-template #deactive2>\n                                            <img src=\"assets/images/deactive_icon.png\">\n                                        </ng-template>\n                                    </div>\n                                </td>\n                                <td>\n                                    <div>\n                                        {{ discount.RETAIL_B2B_DISCOUNT_FIGURE || 'NA' }}\n                                    </div>\n                                </td>\n                                <td class=\"delete-icon\">\n                                    <i class=\"fa fa-edit\"\n                                        (click)=\"openEditRegularDiscountModal(EditRegularDiscount, discount)\"></i>\n                                </td>\n                            </tr>\n                        </tbody>\n                    </table>\n                    <ng-template #noDataTab1Regular>\n                        <div class=\"text-center text-muted py-3\">No data available.</div>\n                    </ng-template>\n                    <div class=\"row\">\n                        <div class=\"col-md-12 pt-3 text-right\">\n                            <button (click)=\"openAddRegularDiscountModal(AddRegularDiscount)\"\n                                class=\"btn custom-btn mr-3\">Add</button>\n                        </div>\n                    </div>\n                </div>\n\n                <!-- for item counts discount -->\n                <div *ngIf=\"isItemCountDiscountSelectedTab1\">\n                    <table class=\"table\" *ngIf=\"dicountArr && dicountArr.length > 0; else noDataTab1ItemCount\">\n                        <thead>\n                            <tr>\n                                <th>Valid From</th>\n                                <th>Valid To</th>\n                                <th>Discount Validity</th>\n                                <th>%</th>\n                                <th>Discount Figure</th>\n                                <th>Item Counts</th>\n                                <th>Units</th>\n                                <th>Edit</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr *ngFor=\"let discount of dicountArr\">\n                                <td>\n                                    <div>\n                                        {{ discount.RETAIL_B2B_DISCOUNT_VALD_FRM_DATE || 'NA' }}\n                                    </div>\n                                </td>\n                                <td>\n                                    <div>\n                                        {{ discount.RETAIL_B2B_DISCOUNT_VALID_TO_DATE || 'NA' }}\n                                    </div>\n                                </td>\n                                <td class=\"actdct_icon\">\n                                    <div>\n                                        <img *ngIf=\"discount.RETAIL_B2B_ITEM_DISCNT_VALID_FLG; else deactive1\"\n                                            src=\"assets/images/active_icon.png\">\n                                        <ng-template #deactive1>\n                                            <img src=\"assets/images/deactive_icon.png\">\n                                        </ng-template>\n                                    </div>\n                                </td>\n                                <td class=\"actdct_icon\">\n                                    <div>\n                                        <img *ngIf=\"discount.RETAIL_B2B_ITEM_SPL_DISC_PERCNTG_FIG; else deactive2\"\n                                            src=\"assets/images/active_icon.png\">\n                                        <ng-template #deactive2>\n                                            <img src=\"assets/images/deactive_icon.png\">\n                                        </ng-template>\n                                    </div>\n                                </td>\n                                <td>\n                                    <div>\n                                        {{ discount.RETAIL_B2B_DISCOUNT_FIGURE || 'NA' }}\n                                    </div>\n                                </td>\n                                <td>\n                                    <div>\n                                        {{ discount.RETAIL_B2B_ITEM_COUNT || 'NA' }}\n                                    </div>\n                                </td>\n                                <td>\n                                    <div>\n                                        {{ discount.RETAIL_B2B_ITEM_UNIT || 'NA' }}\n                                    </div>\n                                </td>\n                                <td class=\"delete-icon\">\n                                    <i class=\"fa fa-edit\"\n                                        (click)=\"openEditItemCountDiscountModal(EditItemCountDiscount, discount)\"></i>\n                                </td>\n                            </tr>\n                        </tbody>\n                    </table>\n                    <ng-template #noDataTab1ItemCount>\n                        <div class=\"text-center text-muted py-3\">No data available.</div>\n                    </ng-template>\n                    <div class=\"row\">\n                        <div class=\"col-md-12 pt-3 text-right\">\n                            <button class=\"btn custom-btn mr-3\"\n                                (click)=\"openAddItemCountDiscountModal(AddItemCountDiscount)\">Add</button>\n                        </div>\n                    </div>\n                </div>\n\n                <!-- for promotional discount -->\n                <div *ngIf=\"isPromotionalDiscountSelectedTab1\">\n                    <table class=\"table\" *ngIf=\"dicountArr && dicountArr.length > 0; else noDataTab1Promo\">\n                        <thead>\n                            <tr>\n                                <th>Valid From</th>\n                                <th>Valid To</th>\n                                <th>Discount Validity</th>\n                                <th>%</th>\n                                <th>Discount Figure</th>\n                                <th>Edit</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr *ngFor=\"let discount of dicountArr\">\n                                <td>\n                                    <div>\n                                        {{ discount.RETAIL_B2B_DISCOUNT_VALD_FRM_DATE || 'NA' }}\n                                    </div>\n                                </td>\n                                <td>\n                                    <div>\n                                        {{ discount.RETAIL_B2B_DISCOUNT_VALID_TO_DATE || 'NA' }}\n                                    </div>\n                                </td>\n                                <td class=\"actdct_icon\">\n                                    <div>\n                                        <img *ngIf=\"discount.RETAIL_B2B_ITEM_DISCNT_VALID_FLG; else deactive1\"\n                                            src=\"assets/images/active_icon.png\">\n                                        <ng-template #deactive1>\n                                            <img src=\"assets/images/deactive_icon.png\">\n                                        </ng-template>\n                                    </div>\n                                </td>\n                                <td class=\"actdct_icon\">\n                                    <div>\n                                        <img *ngIf=\"discount.RETAIL_B2B_ITEM_SPL_DISC_PERCNTG_FIG; else deactive2\"\n                                            src=\"assets/images/active_icon.png\">\n                                        <ng-template #deactive2>\n                                            <img src=\"assets/images/deactive_icon.png\">\n                                        </ng-template>\n                                    </div>\n                                </td>\n                                <td>\n                                    <div>\n                                        {{ discount.RETAIL_B2B_DISCOUNT_FIGURE || 'NA' }}\n                                    </div>\n                                </td>\n                                <td class=\"delete-icon\">\n                                    <i class=\"fa fa-edit\"\n                                        (click)=\"openEditPromotionalDiscountModal(EditPromotionalDiscount, discount)\"></i>\n                                </td>\n                            </tr>\n                        </tbody>\n                    </table>\n                    <ng-template #noDataTab1Promo>\n                        <div class=\"text-center text-muted py-3\">No data available.</div>\n                    </ng-template>\n                    <div class=\"row\">\n                        <div class=\"col-md-12 pt-3 text-right\">\n                            <button class=\"btn custom-btn mr-3\"\n                                (click)=\"openAddPromotionaliscountModal(AddPromotionalDiscount)\">Add</button>\n                        </div>\n                    </div>\n                </div>\n\n                <!-- for preffered discount -->\n                <div *ngIf=\"isPrefferdPartnerDiscountSelectedTab1\">\n                    <table class=\"table\" *ngIf=\"dicountArr && dicountArr.length > 0; else noDataTab1Pref\">\n                        <thead>\n                            <tr>\n                                <th>Valid From</th>\n                                <th>Valid To</th>\n                                <th>Discount Validity</th>\n                                <th>%</th>\n                                <th>Discount Figure</th>\n                                <th>Account</th>\n                                <th>Edit</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr *ngFor=\"let discount of dicountArr\">\n                                <td>\n                                    <div>\n                                        {{ discount.RETAIL_B2B_DISCOUNT_VALD_FRM_DATE || 'NA' }}\n                                    </div>\n                                </td>\n                                <td>\n                                    <div>\n                                        {{ discount.RETAIL_B2B_DISCOUNT_VALID_TO_DATE || 'NA' }}\n                                    </div>\n                                </td>\n                                <td class=\"actdct_icon\">\n                                    <div>\n                                        <img *ngIf=\"discount.RETAIL_B2B_ITEM_DISCNT_VALID_FLG; else deactive1\"\n                                            src=\"assets/images/active_icon.png\">\n                                        <ng-template #deactive1>\n                                            <img src=\"assets/images/deactive_icon.png\">\n                                        </ng-template>\n                                    </div>\n                                </td>\n                                <td class=\"actdct_icon\">\n                                    <div>\n                                        <img *ngIf=\"discount.RETAIL_B2B_ITEM_SPL_DISC_PERCNTG_FIG; else deactive2\"\n                                            src=\"assets/images/active_icon.png\">\n                                        <ng-template #deactive2>\n                                            <img src=\"assets/images/deactive_icon.png\">\n                                        </ng-template>\n                                    </div>\n                                </td>\n                                <td>\n                                    <div>\n                                        {{ discount.RETAIL_B2B_DISCOUNT_FIGURE || 'NA' }}\n                                    </div>\n                                </td>\n                                <td>\n                                    <div>\n                                        {{ discount.RETAIL_B2B_ITEM_ACCOUNT || 'NA' }}\n                                    </div>\n                                </td>\n                                <td class=\"delete-icon\">\n                                    <i class=\"fa fa-edit\"\n                                        (click)=\"openEditPrefferedDiscountModal(EditPrefferedDiscount, discount)\"></i>\n                                </td>\n                            </tr>\n                        </tbody>\n                    </table>\n                    <ng-template #noDataTab1Pref>\n                        <div class=\"text-center text-muted py-3\">No data available.</div>\n                    </ng-template>\n                    <div class=\"row\">\n                        <div class=\"col-md-12 pt-3 text-right\">\n                            <button class=\"btn custom-btn mr-3\"\n                                (click)=\"openAddPrefferediscountModal(AddPrefferedDiscount)\">Add</button>\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n\n        </tab>\n\n        <tab (selectTab)=\"onTabChange('Retailers')\" heading=\"Retailers\" id=\"tab2\">\n\n            <div class=\"form-group\">\n                <label class=\"me-3 mb-1\">Select Discount Type</label>\n                <div class=\"d-flex tab-div mb-3\">\n                    <div>\n                        <label>\n                            <input [(ngModel)]=\"selectedDiscountTypeTab2\" type=\"radio\" name=\"options2\" value=\"regularDiscount\" (change)=\"onSelecttab2($event)\">\n                            Regular Discount\n                        </label>\n                    </div>\n                    <div>\n                        <label>\n                            <input [(ngModel)]=\"selectedDiscountTypeTab2\" type=\"radio\" name=\"options2\" value=\"itemCountsDiscount\"\n                                (change)=\"onSelecttab2($event)\"> Item Counts Discount\n                        </label>\n                    </div>\n                    <div>\n                        <label>\n                            <input [(ngModel)]=\"selectedDiscountTypeTab2\" type=\"radio\" name=\"options2\" value=\"promotionalDiscount\"\n                                (change)=\"onSelecttab2($event)\"> Promotional Discount\n                        </label>\n                    </div>\n                    <div>\n                        <label>\n                            <input [(ngModel)]=\"selectedDiscountTypeTab2\" type=\"radio\" name=\"options2\" value=\"prefferedPartnerDiscount\"\n                                (change)=\"onSelecttab2($event)\"> Preffered Partner Discount\n                        </label>\n                    </div>\n                </div>\n\n                <!-- for regular discount -->\n                <div *ngIf=\"isRegularDiscountSelectedTab2\">\n                    <table class=\"table\" *ngIf=\"dicountArr && dicountArr.length > 0; else noDataTab2Regular\">\n                        <thead>\n                            <tr>\n                                <th>Valid From</th>\n                                <th>Valid To</th>\n                                <th>Discount Validity</th>\n                                <th>%</th>\n                                <th>Discount Figure</th>\n                                <th>Edit</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr *ngFor=\"let discount of dicountArr\">\n                                <td>\n                                    <div>\n                                        {{ discount.RETAIL_B2B_DISCOUNT_VALD_FRM_DATE || 'NA' }}\n                                    </div>\n                                </td>\n                                <td>\n                                    <div>\n                                        {{ discount.RETAIL_B2B_DISCOUNT_VALID_TO_DATE || 'NA' }}\n                                    </div>\n                                </td>\n                                <td class=\"actdct_icon\">\n                                    <div>\n                                        <img *ngIf=\"discount.RETAIL_B2B_ITEM_DISCNT_VALID_FLG; else deactive1\"\n                                            src=\"assets/images/active_icon.png\">\n                                        <ng-template #deactive1>\n                                            <img src=\"assets/images/deactive_icon.png\">\n                                        </ng-template>\n                                    </div>\n                                </td>\n                                <td class=\"actdct_icon\">\n                                    <div>\n                                        <img *ngIf=\"discount.RETAIL_B2B_ITEM_SPL_DISC_PERCNTG_FIG; else deactive2\"\n                                            src=\"assets/images/active_icon.png\">\n                                        <ng-template #deactive2>\n                                            <img src=\"assets/images/deactive_icon.png\">\n                                        </ng-template>\n                                    </div>\n                                </td>\n                                <td>\n                                    <div>\n                                        {{ discount.RETAIL_B2B_DISCOUNT_FIGURE || 'NA' }}\n                                    </div>\n                                </td>\n                                <td class=\"delete-icon\">\n                                    <i class=\"fa fa-edit\"\n                                        (click)=\"openEditRegularDiscountModal(EditRegularDiscount, discount)\"></i>\n                                </td>\n                            </tr>\n                        </tbody>\n                    </table>\n                    <ng-template #noDataTab2Regular>\n                        <div class=\"text-center text-muted py-3\">No data available.</div>\n                    </ng-template>\n                    <div class=\"row\">\n                        <div class=\"col-md-12 pt-3 text-right\">\n                            <button (click)=\"openAddRegularDiscountModal(AddRegularDiscount)\"\n                                class=\"btn custom-btn mr-3\">Add</button>\n                        </div>\n                    </div>\n                </div>\n\n                <!-- for item counts discount -->\n                <div *ngIf=\"isItemCountDiscountSelectedTab2\">\n                    <table class=\"table\" *ngIf=\"dicountArr && dicountArr.length > 0; else noDataTab2ItemCount\">\n                        <thead>\n                            <tr>\n                                <th>Valid From</th>\n                                <th>Valid To</th>\n                                <th>Discount Validity</th>\n                                <th>%</th>\n                                <th>Discount Figure</th>\n                                <th>Item Counts</th>\n                                <th>Units</th>\n                                <th>Edit</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr *ngFor=\"let discount of dicountArr\">\n                                <td>\n                                    <div>\n                                        {{ discount.RETAIL_B2B_DISCOUNT_VALD_FRM_DATE || 'NA' }}\n                                    </div>\n                                </td>\n                                <td>\n                                    <div>\n                                        {{ discount.RETAIL_B2B_DISCOUNT_VALID_TO_DATE || 'NA' }}\n                                    </div>\n                                </td>\n                                <td class=\"actdct_icon\">\n                                    <div>\n                                        <img *ngIf=\"discount.RETAIL_B2B_ITEM_DISCNT_VALID_FLG; else deactive1\"\n                                            src=\"assets/images/active_icon.png\">\n                                        <ng-template #deactive1>\n                                            <img src=\"assets/images/deactive_icon.png\">\n                                        </ng-template>\n                                    </div>\n                                </td>\n                                <td class=\"actdct_icon\">\n                                    <div>\n                                        <img *ngIf=\"discount.RETAIL_B2B_ITEM_SPL_DISC_PERCNTG_FIG; else deactive2\"\n                                            src=\"assets/images/active_icon.png\">\n                                        <ng-template #deactive2>\n                                            <img src=\"assets/images/deactive_icon.png\">\n                                        </ng-template>\n                                    </div>\n                                </td>\n                                <td>\n                                    <div>\n                                        {{ discount.RETAIL_B2B_DISCOUNT_FIGURE || 'NA' }}\n                                    </div>\n                                </td>\n                                <td>\n                                    <div>\n                                        {{ discount.RETAIL_B2B_ITEM_COUNT || 'NA' }}\n                                    </div>\n                                </td>\n                                <td>\n                                    <div>\n                                        {{ discount.RETAIL_B2B_ITEM_UNIT || 'NA' }}\n                                    </div>\n                                </td>\n                                <td class=\"delete-icon\">\n                                    <i class=\"fa fa-edit\"\n                                        (click)=\"openEditItemCountDiscountModal(EditItemCountDiscount, discount)\"></i>\n                                </td>\n                            </tr>\n                        </tbody>\n                    </table>\n                    <ng-template #noDataTab2ItemCount>\n                        <div class=\"text-center text-muted py-3\">No data available.</div>\n                    </ng-template>\n                    <div class=\"row\">\n                        <div class=\"col-md-12 pt-3 text-right\">\n                            <button class=\"btn custom-btn mr-3\"\n                                (click)=\"openAddItemCountDiscountModal(AddItemCountDiscount)\">Add</button>\n                        </div>\n                    </div>\n                </div>\n\n                <!-- for promotional discount -->\n                <div *ngIf=\"isPromotionalDiscountSelectedTab2\">\n                    <table class=\"table\" *ngIf=\"dicountArr && dicountArr.length > 0; else noDataTab2Promo\">\n                        <thead>\n                            <tr>\n                                <th>Valid From</th>\n                                <th>Valid To</th>\n                                <th>Discount Validity</th>\n                                <th>%</th>\n                                <th>Discount Figure</th>\n                                <th>Edit</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr *ngFor=\"let discount of dicountArr\">\n                                <td>\n                                    <div>\n                                        {{ discount.RETAIL_B2B_DISCOUNT_VALD_FRM_DATE || 'NA' }}\n                                    </div>\n                                </td>\n                                <td>\n                                    <div>\n                                        {{ discount.RETAIL_B2B_DISCOUNT_VALID_TO_DATE || 'NA' }}\n                                    </div>\n                                </td>\n                                <td class=\"actdct_icon\">\n                                    <div>\n                                        <img *ngIf=\"discount.RETAIL_B2B_ITEM_DISCNT_VALID_FLG; else deactive1\"\n                                            src=\"assets/images/active_icon.png\">\n                                        <ng-template #deactive1>\n                                            <img src=\"assets/images/deactive_icon.png\">\n                                        </ng-template>\n                                    </div>\n                                </td>\n                                <td class=\"actdct_icon\">\n                                    <div>\n                                        <img *ngIf=\"discount.RETAIL_B2B_ITEM_SPL_DISC_PERCNTG_FIG; else deactive2\"\n                                            src=\"assets/images/active_icon.png\">\n                                        <ng-template #deactive2>\n                                            <img src=\"assets/images/deactive_icon.png\">\n                                        </ng-template>\n                                    </div>\n                                </td>\n                                <td>\n                                    <div>\n                                        {{ discount.RETAIL_B2B_DISCOUNT_FIGURE || 'NA' }}\n                                    </div>\n                                </td>\n                                <td class=\"delete-icon\">\n                                    <i class=\"fa fa-edit\"\n                                        (click)=\"openEditPromotionalDiscountModal(EditPromotionalDiscount, discount)\"></i>\n                                </td>\n                            </tr>\n                        </tbody>\n                    </table>\n                    <ng-template #noDataTab2Promo>\n                        <div class=\"text-center text-muted py-3\">No data available.</div>\n                    </ng-template>\n                    <div class=\"row\">\n                        <div class=\"col-md-12 pt-3 text-right\">\n                            <button class=\"btn custom-btn mr-3\"\n                                (click)=\"openAddPromotionaliscountModal(AddPromotionalDiscount)\">Add</button>\n                        </div>\n                    </div>\n                </div>\n\n                <!-- for preffered discount -->\n                <div *ngIf=\"isPrefferdPartnerDiscountSelectedTab2\">\n                    <table class=\"table\" *ngIf=\"dicountArr && dicountArr.length > 0; else noDataTab2Pref\">\n                        <thead>\n                            <tr>\n                                <th>Valid From</th>\n                                <th>Valid To</th>\n                                <th>Discount Validity</th>\n                                <th>%</th>\n                                <th>Discount Figure</th>\n                                <th>Account</th>\n                                <th>Edit</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr *ngFor=\"let discount of dicountArr\">\n                                <td>\n                                    <div>\n                                        {{ discount.RETAIL_B2B_DISCOUNT_VALD_FRM_DATE || 'NA' }}\n                                    </div>\n                                </td>\n                                <td>\n                                    <div>\n                                        {{ discount.RETAIL_B2B_DISCOUNT_VALID_TO_DATE || 'NA' }}\n                                    </div>\n                                </td>\n                                <td class=\"actdct_icon\">\n                                    <div>\n                                        <img *ngIf=\"discount.RETAIL_B2B_ITEM_DISCNT_VALID_FLG; else deactive1\"\n                                            src=\"assets/images/active_icon.png\">\n                                        <ng-template #deactive1>\n                                            <img src=\"assets/images/deactive_icon.png\">\n                                        </ng-template>\n                                    </div>\n                                </td>\n                                <td class=\"actdct_icon\">\n                                    <div>\n                                        <img *ngIf=\"discount.RETAIL_B2B_ITEM_SPL_DISC_PERCNTG_FIG; else deactive2\"\n                                            src=\"assets/images/active_icon.png\">\n                                        <ng-template #deactive2>\n                                            <img src=\"assets/images/deactive_icon.png\">\n                                        </ng-template>\n                                    </div>\n                                </td>\n                                <td>\n                                    <div>\n                                        {{ discount.RETAIL_B2B_DISCOUNT_FIGURE || 'NA' }}\n                                    </div>\n                                </td>\n                                <td>\n                                    <div>\n                                        {{ discount.RETAIL_B2B_ITEM_ACCOUNT || 'NA' }}\n                                    </div>\n                                </td>\n                                <td class=\"delete-icon\">\n                                    <i class=\"fa fa-edit\"\n                                        (click)=\"openEditPrefferedDiscountModal(EditPrefferedDiscount, discount)\"></i>\n                                </td>\n                            </tr>\n                        </tbody>\n                    </table>\n                    <ng-template #noDataTab2Pref>\n                        <div class=\"text-center text-muted py-3\">No data available.</div>\n                    </ng-template>\n                    <div class=\"row\">\n                        <div class=\"col-md-12 pt-3 text-right\">\n                            <button class=\"btn custom-btn mr-3\"\n                                (click)=\"openAddPrefferediscountModal(AddPrefferedDiscount)\">Add</button>\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n\n        </tab>\n\n        <tab (selectTab)=\"onTabChange('Franchise')\" heading=\"Franchise\" id=\"tab3\">\n\n            <div class=\"form-group\">\n                <label class=\"me-3 mb-1\">Select Discount Type</label>\n                <div class=\"d-flex tab-div mb-3\">\n                    <div>\n                        <label>\n                            <input [(ngModel)]=\"selectedDiscountTypeTab3\" type=\"radio\" name=\"options3\" value=\"regularDiscount\" (change)=\"onSelecttab3($event)\">\n                            Regular Discount\n                        </label>\n                    </div>\n                    <div>\n                        <label>\n                            <input [(ngModel)]=\"selectedDiscountTypeTab3\" type=\"radio\" name=\"options3\" value=\"itemCountsDiscount\"\n                                (change)=\"onSelecttab3($event)\"> Item Counts Discount\n                        </label>\n                    </div>\n                    <div>\n                        <label>\n                            <input [(ngModel)]=\"selectedDiscountTypeTab3\" type=\"radio\" name=\"options3\" value=\"promotionalDiscount\"\n                                (change)=\"onSelecttab3($event)\"> Promotional Discount\n                        </label>\n                    </div>\n                    <div>\n                        <label>\n                            <input [(ngModel)]=\"selectedDiscountTypeTab3\" type=\"radio\" name=\"options3\" value=\"prefferedPartnerDiscount\"\n                                (change)=\"onSelecttab3($event)\"> Preffered Partner Discount\n                        </label>\n                    </div>\n                </div>\n\n                <!-- for regular discount -->\n                <div *ngIf=\"isRegularDiscountSelectedTab3\">\n                    <table class=\"table\" *ngIf=\"dicountArr && dicountArr.length > 0; else noDataTab3Regular\">\n                        <thead>\n                            <tr>\n                                <th>Valid From</th>\n                                <th>Valid To</th>\n                                <th>Discount Validity</th>\n                                <th>%</th>\n                                <th>Discount Figure</th>\n                                <th>Edit</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr *ngFor=\"let discount of dicountArr\">\n                                <td>\n                                    <div>\n                                        {{ discount.RETAIL_B2B_DISCOUNT_VALD_FRM_DATE || 'NA' }}\n                                    </div>\n                                </td>\n                                <td>\n                                    <div>\n                                        {{ discount.RETAIL_B2B_DISCOUNT_VALID_TO_DATE || 'NA' }}\n                                    </div>\n                                </td>\n                                <td class=\"actdct_icon\">\n                                    <div>\n                                        <img *ngIf=\"discount.RETAIL_B2B_ITEM_DISCNT_VALID_FLG; else deactive1\"\n                                            src=\"assets/images/active_icon.png\">\n                                        <ng-template #deactive1>\n                                            <img src=\"assets/images/deactive_icon.png\">\n                                        </ng-template>\n                                    </div>\n                                </td>\n                                <td class=\"actdct_icon\">\n                                    <div>\n                                        <img *ngIf=\"discount.RETAIL_B2B_ITEM_SPL_DISC_PERCNTG_FIG; else deactive2\"\n                                            src=\"assets/images/active_icon.png\">\n                                        <ng-template #deactive2>\n                                            <img src=\"assets/images/deactive_icon.png\">\n                                        </ng-template>\n                                    </div>\n                                </td>\n                                <td>\n                                    <div>\n                                        {{ discount.RETAIL_B2B_DISCOUNT_FIGURE || 'NA' }}\n                                    </div>\n                                </td>\n                                <td class=\"delete-icon\">\n                                    <i class=\"fa fa-edit\"\n                                        (click)=\"openEditRegularDiscountModal(EditRegularDiscount, discount)\"></i>\n                                </td>\n                            </tr>\n                        </tbody>\n                    </table>\n                    <ng-template #noDataTab3Regular>\n                        <div class=\"text-center text-muted py-3\">No data available.</div>\n                    </ng-template>\n                    <div class=\"row\">\n                        <div class=\"col-md-12 pt-3 text-right\">\n                            <button (click)=\"openAddRegularDiscountModal(AddRegularDiscount)\"\n                                class=\"btn custom-btn mr-3\">Add</button>\n                        </div>\n                    </div>\n                </div>\n\n                <!-- for item counts discount -->\n                <div *ngIf=\"isItemCountDiscountSelectedTab3\">\n                    <table class=\"table\" *ngIf=\"dicountArr && dicountArr.length > 0; else noDataTab3ItemCount\">\n                        <thead>\n                            <tr>\n                                <th>Valid From</th>\n                                <th>Valid To</th>\n                                <th>Discount Validity</th>\n                                <th>%</th>\n                                <th>Discount Figure</th>\n                                <th>Item Counts</th>\n                                <th>Units</th>\n                                <th>Edit</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr *ngFor=\"let discount of dicountArr\">\n                                <td>\n                                    <div>\n                                        {{ discount.RETAIL_B2B_DISCOUNT_VALD_FRM_DATE || 'NA' }}\n                                    </div>\n                                </td>\n                                <td>\n                                    <div>\n                                        {{ discount.RETAIL_B2B_DISCOUNT_VALID_TO_DATE || 'NA' }}\n                                    </div>\n                                </td>\n                                <td class=\"actdct_icon\">\n                                    <div>\n                                        <img *ngIf=\"discount.RETAIL_B2B_ITEM_DISCNT_VALID_FLG; else deactive1\"\n                                            src=\"assets/images/active_icon.png\">\n                                        <ng-template #deactive1>\n                                            <img src=\"assets/images/deactive_icon.png\">\n                                        </ng-template>\n                                    </div>\n                                </td>\n                                <td class=\"actdct_icon\">\n                                    <div>\n                                        <img *ngIf=\"discount.RETAIL_B2B_ITEM_SPL_DISC_PERCNTG_FIG; else deactive2\"\n                                            src=\"assets/images/active_icon.png\">\n                                        <ng-template #deactive2>\n                                            <img src=\"assets/images/deactive_icon.png\">\n                                        </ng-template>\n                                    </div>\n                                </td>\n                                <td>\n                                    <div>\n                                        {{ discount.RETAIL_B2B_DISCOUNT_FIGURE || 'NA' }}\n                                    </div>\n                                </td>\n                                <td>\n                                    <div>\n                                        {{ discount.RETAIL_B2B_ITEM_COUNT || 'NA' }}\n                                    </div>\n                                </td>\n                                <td>\n                                    <div>\n                                        {{ discount.RETAIL_B2B_ITEM_UNIT || 'NA' }}\n                                    </div>\n                                </td>\n                                <td class=\"delete-icon\">\n                                    <i class=\"fa fa-edit\"\n                                        (click)=\"openEditItemCountDiscountModal(EditItemCountDiscount, discount)\"></i>\n                                </td>\n                            </tr>\n                        </tbody>\n                    </table>\n                    <ng-template #noDataTab3ItemCount>\n                        <div class=\"text-center text-muted py-3\">No data available.</div>\n                    </ng-template>\n                    <div class=\"row\">\n                        <div class=\"col-md-12 pt-3 text-right\">\n                            <button class=\"btn custom-btn mr-3\"\n                                (click)=\"openAddItemCountDiscountModal(AddItemCountDiscount)\">Add</button>\n                        </div>\n                    </div>\n                </div>\n\n                <!-- for promotional discount -->\n                <div *ngIf=\"isPromotionalDiscountSelectedTab3\">\n                    <table class=\"table\" *ngIf=\"dicountArr && dicountArr.length > 0; else noDataTab3Promo\">\n                        <thead>\n                            <tr>\n                                <th>Valid From</th>\n                                <th>Valid To</th>\n                                <th>Discount Validity</th>\n                                <th>%</th>\n                                <th>Discount Figure</th>\n                                <th>Edit</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr *ngFor=\"let discount of dicountArr\">\n                                <td>\n                                    <div>\n                                        {{ discount.RETAIL_B2B_DISCOUNT_VALD_FRM_DATE || 'NA' }}\n                                    </div>\n                                </td>\n                                <td>\n                                    <div>\n                                        {{ discount.RETAIL_B2B_DISCOUNT_VALID_TO_DATE || 'NA' }}\n                                    </div>\n                                </td>\n                                <td class=\"actdct_icon\">\n                                    <div>\n                                        <img *ngIf=\"discount.RETAIL_B2B_ITEM_DISCNT_VALID_FLG; else deactive1\"\n                                            src=\"assets/images/active_icon.png\">\n                                        <ng-template #deactive1>\n                                            <img src=\"assets/images/deactive_icon.png\">\n                                        </ng-template>\n                                    </div>\n                                </td>\n                                <td class=\"actdct_icon\">\n                                    <div>\n                                        <img *ngIf=\"discount.RETAIL_B2B_ITEM_SPL_DISC_PERCNTG_FIG; else deactive2\"\n                                            src=\"assets/images/active_icon.png\">\n                                        <ng-template #deactive2>\n                                            <img src=\"assets/images/deactive_icon.png\">\n                                        </ng-template>\n                                    </div>\n                                </td>\n                                <td>\n                                    <div>\n                                        {{ discount.RETAIL_B2B_DISCOUNT_FIGURE || 'NA' }}\n                                    </div>\n                                </td>\n                                <td class=\"delete-icon\">\n                                    <i class=\"fa fa-edit\"\n                                        (click)=\"openEditPromotionalDiscountModal(EditPromotionalDiscount, discount)\"></i>\n                                </td>\n                            </tr>\n                        </tbody>\n                    </table>\n                    <ng-template #noDataTab3Promo>\n                        <div class=\"text-center text-muted py-3\">No data available.</div>\n                    </ng-template>\n                    <div class=\"row\">\n                        <div class=\"col-md-12 pt-3 text-right\">\n                            <button class=\"btn custom-btn mr-3\"\n                                (click)=\"openAddPromotionaliscountModal(AddPromotionalDiscount)\">Add</button>\n                        </div>\n                    </div>\n                </div>\n\n                <!-- for preffered discount -->\n                <div *ngIf=\"isPrefferdPartnerDiscountSelectedTab3\">\n                    <table class=\"table\" *ngIf=\"dicountArr && dicountArr.length > 0; else noDataTab3Pref\">\n                        <thead>\n                            <tr>\n                                <th>Valid From</th>\n                                <th>Valid To</th>\n                                <th>Discount Validity</th>\n                                <th>%</th>\n                                <th>Discount Figure</th>\n                                <th>Account</th>\n                                <th>Edit</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr *ngFor=\"let discount of dicountArr\">\n                                <td>\n                                    <div>\n                                        {{ discount.RETAIL_B2B_DISCOUNT_VALD_FRM_DATE || 'NA' }}\n                                    </div>\n                                </td>\n                                <td>\n                                    <div>\n                                        {{ discount.RETAIL_B2B_DISCOUNT_VALID_TO_DATE || 'NA' }}\n                                    </div>\n                                </td>\n                                <td class=\"actdct_icon\">\n                                    <div>\n                                        <img *ngIf=\"discount.RETAIL_B2B_ITEM_DISCNT_VALID_FLG; else deactive1\"\n                                            src=\"assets/images/active_icon.png\">\n                                        <ng-template #deactive1>\n                                            <img src=\"assets/images/deactive_icon.png\">\n                                        </ng-template>\n                                    </div>\n                                </td>\n                                <td class=\"actdct_icon\">\n                                    <div>\n                                        <img *ngIf=\"discount.RETAIL_B2B_ITEM_SPL_DISC_PERCNTG_FIG; else deactive2\"\n                                            src=\"assets/images/active_icon.png\">\n                                        <ng-template #deactive2>\n                                            <img src=\"assets/images/deactive_icon.png\">\n                                        </ng-template>\n                                    </div>\n                                </td>\n                                <td>\n                                    <div>\n                                        {{ discount.RETAIL_B2B_DISCOUNT_FIGURE || 'NA' }}\n                                    </div>\n                                </td>\n                                <td>\n                                    <div>\n                                        {{ discount.RETAIL_B2B_ITEM_ACCOUNT || 'NA' }}\n                                    </div>\n                                </td>\n                                <td class=\"delete-icon\">\n                                    <i class=\"fa fa-edit\"\n                                        (click)=\"openEditPrefferedDiscountModal(EditPrefferedDiscount, discount)\"></i>\n                                </td>\n                            </tr>\n                        </tbody>\n                    </table>\n                    <ng-template #noDataTab3Pref>\n                        <div class=\"text-center text-muted py-3\">No data available.</div>\n                    </ng-template>\n                    <div class=\"row\">\n                        <div class=\"col-md-12 pt-3 text-right\">\n                            <button class=\"btn custom-btn mr-3\"\n                                (click)=\"openAddPrefferediscountModal(AddPrefferedDiscount)\">Add</button>\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n\n        </tab>\n\n    </tabset>\n\n\n    <!-- <div class=\"modal-body pt-0\">\n        <div class=\"card-body pa-0\">\n            <table class=\"table\">\n                <thead>\n                    <tr>\n                        <th>Valid From</th>\n                        <th>Valid To</th>\n                        <th>Discount Validity</th>\n                        <th>%</th>\n                        <th>Distributor Discount</th>\n                        <th>Retailer Discount</th>\n                        <th>Franchise Discount</th>\n                        <th>Own Store Discount</th>\n                        <th>Distributor Spl. Discount</th>\n                        <th>Retailer Spl. Discount</th>\n                        <th>Franchise Spl. Discount</th>\n                        <th>&nbsp;</th>\n\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr>\n                        <td>\n                            <div *ngIf=\"bebModalData && bebModalData.RETAIL_B2B_DISCOUNT_VALID_FROM_DATE !== null\">\n                                {{ bebModalData.RETAIL_B2B_DISCOUNT_VALID_FROM_DATE }}\n                            </div>\n                            <div *ngIf=\"!bebModalData || bebModalData.RETAIL_B2B_DISCOUNT_VALID_FROM_DATE === null\">\n                                NA\n                            </div>\n                        </td>\n                        <td>\n                            <div *ngIf=\"bebModalData && bebModalData.RETAIL_B2B_DISCOUNT_VALID_TO_DATE !== null\">\n                                {{ bebModalData.RETAIL_B2B_DISCOUNT_VALID_TO_DATE }}\n                            </div>\n                            <div *ngIf=\"!bebModalData || bebModalData.RETAIL_B2B_DISCOUNT_VALID_TO_DATE === null\">\n                                NA\n                            </div>\n                        </td>\n                        <td class=\"actdct_icon\">\n                            <div *ngIf=\"bebModalData && bebModalData.RETAIL_B2B_VALIDITY_FLG !== null\">\n                                {{ bebModalData.RETAIL_B2B_VALIDITY_FLG }}\n                            </div>\n                            <div *ngIf=\"!bebModalData || bebModalData.RETAIL_B2B_VALIDITY_FLG === null\">\n                                <img src=\"assets/images/deactive_icon.png\">\n                            </div>\n                        </td>\n                        <td class=\"actdct_icon\">\n                            <div *ngIf=\"bebModalData && bebModalData.RETAIL_B2B_DISCOUNT_PERCENTG_FLG !== null\">\n                                {{ bebModalData.RETAIL_B2B_DISCOUNT_PERCENTG_FLG }}\n                            </div>\n                            <div *ngIf=\"!bebModalData || bebModalData.RETAIL_B2B_DISCOUNT_PERCENTG_FLG === null\">\n                                <img src=\"assets/images/deactive_icon.png\">\n                            </div>\n                        </td>\n\n                        <td class=\"actdct_icon\">\n                            <div *ngIf=\"bebModalData && bebModalData.RETAIL_B2B_DISTRIBUTOR_DISCOUNT_FIGURE !== null\">\n                                {{ bebModalData.RETAIL_B2B_DISTRIBUTOR_DISCOUNT_FIGURE }}\n                            </div>\n                            <div *ngIf=\"!bebModalData || bebModalData.RETAIL_B2B_DISTRIBUTOR_DISCOUNT_FIGURE === null\">\n                              <img src=\"assets/images/deactive_icon.png\">\n                            </div>\n                        </td>\n\n                        <td>\n                            <div *ngIf=\"bebModalData && bebModalData.RETAIL_B2B_RETAILER_DISCOUNT_FIGURE !== null\">\n                                {{ bebModalData.RETAIL_B2B_RETAILER_DISCOUNT_FIGURE }}\n                            </div>\n                            <div *ngIf=\"!bebModalData || bebModalData.RETAIL_B2B_RETAILER_DISCOUNT_FIGURE === null\">\n                                NA\n                            </div>\n                        </td>\n                        <td>\n                            <div *ngIf=\"bebModalData && bebModalData.RETAIL_B2B_FRANCHISE_DISCOUNT_FIGURE !== null\">\n                                {{ bebModalData.RETAIL_B2B_FRANCHISE_DISCOUNT_FIGURE }}\n                            </div>\n                            <div *ngIf=\"!bebModalData || bebModalData.RETAIL_B2B_FRANCHISE_DISCOUNT_FIGURE === null\">\n                                NA\n                            </div>\n                        </td>\n                        <td>\n                            <div *ngIf=\"bebModalData && bebModalData.RETAIL_B2B_OWNSTORE_DISCOUNT_FIGURE !== null\">\n                                {{ bebModalData.RETAIL_B2B_OWNSTORE_DISCOUNT_FIGURE }}\n                            </div>\n                            <div *ngIf=\"!bebModalData || bebModalData.RETAIL_B2B_OWNSTORE_DISCOUNT_FIGURE === null\">\n                                NA\n                            </div>\n                        </td>\n                        <td class=\"actdct_icon\">\n                            <div *ngIf=\"bebModalData && bebModalData.RETAIL_B2B_DISTRI_ITEM_COUNT_SPL_DISC_AVLBL_FLG !== null\">\n                                {{ bebModalData.RETAIL_B2B_DISTRI_ITEM_COUNT_SPL_DISC_AVLBL_FLG }}\n                            </div>\n                            <div *ngIf=\"!bebModalData || bebModalData.RETAIL_B2B_DISTRI_ITEM_COUNT_SPL_DISC_AVLBL_FLG === null\">\n                                <span [popover]=\"distributorpopoverTemplate\" [outsideClick]=\"true\">\n                                    <img src=\"assets/images/deactive_icon.png\">\n                                    \n                                </span>\n                                \n                            </div>\n                        </td>\n                        <td class=\"actdct_icon\">\n                            <div *ngIf=\"bebModalData && bebModalData.RETAIL_B2B_RETAILER_ITEM_COUNT_SPL_DISC_AVLBL_FLG !== null\">\n                                {{ bebModalData.RETAIL_B2B_RETAILER_ITEM_COUNT_SPL_DISC_AVLBL_FLG }}\n                            </div>\n                            <div *ngIf=\"!bebModalData || bebModalData.RETAIL_B2B_RETAILER_ITEM_COUNT_SPL_DISC_AVLBL_FLG === null\">\n                                <span [popover]=\"retailerpopoverTemplate\" [outsideClick]=\"true\"><img src=\"assets/images/deactive_icon.png\">\n                                </span>\n                                </div>\n                        </td>\n                        <td class=\"actdct_icon\">\n                            <div *ngIf=\"bebModalData && bebModalData.RETAIL_B2B_FRANCHISE_ITEM_COUNT_SPL_DISC_AVLBL_FLG !== null\">\n                                {{ bebModalData.RETAIL_B2B_FRANCHISE_ITEM_COUNT_SPL_DISC_AVLBL_FLG }}\n                            </div>\n                            <div *ngIf=\"!bebModalData || bebModalData.RETAIL_B2B_FRANCHISE_ITEM_COUNT_SPL_DISC_AVLBL_FLG === null\">\n                                <span [popover]=\"franchisepopoverTemplate\" [outsideClick]=\"true\"><img src=\"assets/images/deactive_icon.png\"></span>\n                            </div>\n                        </td>\n                        <td class=\"delete-icon\"><i class=\"fa fa-edit\"></i></td>\n                    </tr>\n                </tbody>\n            </table>\n\n        </div>\n    </div> -->\n</ng-template>\n\n<!-- <ng-template #distributorpopoverTemplate>\n    <p><strong>Distributor Spl. Discount</strong></p>\n    <div class=\"form-group\">\n        <label>Item Count on Discount</label>\n        <input type=\"text\" class=\"form-control\">\n    </div>\n    <div class=\"form-group\">\n        <label>Added Spl. Discount %</label>\n        <input type=\"number\" class=\"form-control\">\n    </div>\n    <div class=\"form-group\">\n        <button class=\"btn custom-btn w-100\"> Add </button>\n    </div>\n</ng-template>\n\n<ng-template #retailerpopoverTemplate>\n    <p><strong>Retailer Spl. Discount</strong></p>\n    <div class=\"form-group\">\n        <label>Item Count on Discount</label>\n        <input type=\"text\" class=\"form-control\">\n    </div>\n    <div class=\"form-group\">\n        <label>Added Spl. Discount %</label>\n        <input type=\"number\" class=\"form-control\">\n    </div>\n    <div class=\"form-group\">\n        <button class=\"btn custom-btn w-100\"> Add </button>\n    </div>\n</ng-template>\n\n<ng-template #franchisepopoverTemplate>\n    <p><strong>Franchise Spl. Discount</strong></p>\n    <div class=\"form-group\">\n        <label>Item Count on Discount</label>\n        <input type=\"text\" class=\"form-control\">\n    </div>\n    <div class=\"form-group\">\n        <label>Added Spl. Discount %</label>\n        <input type=\"number\" class=\"form-control\">\n    </div>\n    <div class=\"form-group\">\n        <button class=\"btn custom-btn w-100\"> Add </button>\n    </div>\n</ng-template> -->", styles: ["\r\n\r\n\r\n.heading h2 {\r\n    padding: 10px 5px 10px;\r\n    font-size: 20px;\r\n}\r\n\r\n.row.topLevel {\r\n    background: #fff;\r\n    padding: 20px 0;\r\n    margin: 0;\r\n    border-radius: 5px;\r\n}\r\n\r\n.heading.store-domain {\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.store-domain div {\r\n    display: inline-block;\r\n    margin-right: 20px;\r\n}\r\n\r\n.store-domain span {\r\n    background: #ddd;\r\n    padding: 5px 20px;\r\n    font-size: 13px;\r\n    border-radius: 20px;\r\n    display: inline-block;\r\n    font-weight: bold;\r\n    margin-left: 5px;\r\n}\r\n\r\n.store_id {\r\n    background: #ddd;\r\n    padding: 5px 20px;\r\n    border-radius: 20px;\r\n    font-size: 13px;\r\n    font-weight: 700;\r\n    float: right;\r\n    margin-top: -40px;\r\n}\r\n\r\n.box {\r\n    width: 100%;\r\n    overflow: hidden;\r\n    box-shadow: 0 0 4px 0px #eee;\r\n    margin: 20px 0;\r\n    border-radius: 4px;\r\n    padding: 10px;\r\n    background: #fff;\r\n}\r\n\r\n.main-content-area .box .col {\r\n    width: 20%;\r\n    float: left;\r\n    padding: 0;\r\n}\r\n\r\n.fa-star:before {\r\n    content: \"\\f005\";\r\n    color: #ff9600;\r\n    margin-right: 5px;\r\n}\r\n\r\n.pro-box {\r\n    box-shadow: 0 0 4px 0 #e9ecef;\r\n    margin: 0 10px 20px;\r\n    overflow: hidden;\r\n    padding: 15px;\r\n    border-radius: 3px;\r\n    position: relative;\r\n    border: 1px solid #dee2e6;\r\n}\r\n\r\n.pro-box img {\r\n    height: 100px;\r\n    width: 100px;\r\n    margin: 30px auto 15px;\r\n    display: block;\r\n}\r\n\r\n.storeitem .p-details {\r\n    margin-bottom: 42px;\r\n}\r\n\r\np.label-txt {\r\n    text-align: center;\r\n    padding: 10px;\r\n    font-size: 14px;\r\n    margin: 0;\r\n}\r\n\r\n.store-available-product .col {\r\n    width: 25% !important;\r\n}\r\n\r\n.selected-productLine h5,\r\n.store-available-product h5 {\r\n    font-size: 16px;\r\n    padding: 0 10px 5px;\r\n}\r\n\r\n.right-field-head {\r\n    float: right;\r\n    margin-top: 10px;\r\n}\r\n\r\n.right-field-head li {\r\n    display: inline-block;\r\n    padding: 0 10px;\r\n}\r\n\r\nspan.video,\r\nspan.doc {\r\n    padding: 8px 15px;\r\n    background: #dee2e6;\r\n    font-size: 12px;\r\n    border-radius: 20px;\r\n}\r\n\r\n.right-field-head .btn {\r\n    font-size: 11px;\r\n    border-radius: 20px;\r\n}\r\n\r\n\r\n.box.prduct-gallery {\r\n    position: relative;\r\n}\r\n\r\n.sample-img {\r\n    position: absolute;\r\n    z-index: 1;\r\n    left: 15%;\r\n    top: 28%;\r\n    transform: rotate(-45deg);\r\n}\r\n\r\np.p-name {\r\n    text-align: center;\r\n    margin: 0;\r\n    font-size: 13px;\r\n    font-weight: 500;\r\n    vertical-align: middle;\r\n}\r\n\r\np.item-id {\r\n    text-align: center;\r\n    position: absolute;\r\n    top: 0;\r\n    background: #212529;\r\n    left: 0;\r\n    font-weight: 600;\r\n    color: #fff;\r\n    border-radius: 0 0 5px;\r\n    font-size: 11px;\r\n    padding: 3px 6px;\r\n}\r\n\r\nspan.price {\r\n    font-size: 12px;\r\n    padding: 7px 10px 0;\r\n    float: left;\r\n    font-weight: 600;\r\n    line-height: 20px;\r\n}\r\n\r\n.item-id b {\r\n    font-weight: 600;\r\n}\r\n\r\n.instock {\r\n    font-size: 12px;\r\n    text-align: center;\r\n    margin: 0 0 3px;\r\n    position: absolute;\r\n    top: 5%;\r\n    box-shadow: 0 0 30px 0 rgb(82 63 105 / 10%);\r\n    left: 70%;\r\n    background: rgb(224 152 152 / 24%);\r\n    width: 50px;\r\n    border: 1px solid rgb(0 0 0 / 10%);\r\n    height: 50px;\r\n    border-radius: 50%;\r\n\r\n img {\r\n    width: 30px !important;\r\n    height: 30px !important;\r\n    margin: 9px auto;\r\n    }\r\n}\r\n\r\n.pro-box.storeitem.item-box {\r\n    border: 1px solid #dee2e6;\r\n    height: 282px;\r\n}\r\n\r\nh1.heading-title {\r\n\r\n    span {\r\n        font-size: 10px;\r\n        text-transform: inherit;\r\n        background: #495057;\r\n        color: #fff;\r\n        padding: 10px 15px;\r\n        border-radius: 25px;\r\n    }\r\n}\r\n\r\nh1.heading-title img {\r\n    max-width: 65px;\r\n    margin-right: 5px;\r\n}\r\n\r\nh1.heading-title small {\r\n    display: inline-block;\r\n    font-weight: 400;\r\n    font-size: 13px;\r\n    position: absolute;\r\n    left: 80px;\r\n    bottom: 4px;\r\n    color: grey;\r\n}\r\n\r\n.offerDiv {\r\n    position: absolute;\r\n    top: 5px;\r\n    right: 5px;\r\n    font-size: 10px;\r\n    background: #dc3545;\r\n    line-height: 10px;\r\n    font-weight: 700;\r\n    width: 35px;\r\n    height: 35px;\r\n    border-radius: 50%;\r\n    padding: 9px;\r\n    text-align: center;\r\n    color: #fff;\r\n}\r\n\r\n.offerDiv small {\r\n    display: block;\r\n}\r\n\r\nspan.price.strike-price {\r\n    color: #ccc;\r\n    text-decoration: line-through;\r\n}\r\n\r\n\r\n.row.text-level {\r\n    margin: 0 -10px 10px;\r\n}\r\n\r\n.store-add-remove {\r\n    text-align: center;\r\n    padding: 10px;\r\n    float: left;\r\n    width: 100%;\r\n}\r\n\r\n\r\n\r\n.row.product-slider-box {\r\n    border-bottom: 5px solid #ddd;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.carousel-inner {\r\n    height: 278px;\r\n}\r\n\r\n .carousel-item {\r\n    margin-right: 0;\r\n    border: 1px solid #f8f9fa;\r\n    background: #fff;\r\n}\r\n\r\n.product-slider-box .domain-product {\r\n    max-width: 23%;\r\n}\r\n\r\n.product-slider-box .sub-domain-product {\r\n    max-width: 77%;\r\n}\r\n\r\n.store-add-remove .btn {\r\n    font-size: 11px;\r\n    text-align: center;\r\n    float: left;\r\n    transition: all .5s;\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n    min-width: 65px;\r\n}\r\n\r\n.store-add-remove .btn + .btn {\r\n    float: right;\r\n}\r\n\r\n.item-subitem-list .pro-box {\r\n    width: 99%;\r\n}\r\n\r\n.item-subitem-list li {\r\n    width: 100%;\r\n    float: left;\r\n}\r\n .item-box {\r\n        max-width: 225px;\r\n        width: 100%;\r\n        float: left;\r\n    }\r\n    .sub-item-box {\r\n    width: 100%;\r\n    float: left;\r\n    max-width: 225px;\r\n    }\r\n\r\n    .sub-item-box .add_to_cart button.btn {\r\n        background: #000064;\r\n    }\r\n\r\n    .add_to_cart{\r\n     .remove-btn {\r\n        border-radius: 50%;\r\n        background: #05054ead !important;\r\n        color: #fff;\r\n        width: 35px;\r\n        height: 35px;\r\n        padding: 0;\r\n    }\r\n\r\n    .btn + .btn {\r\n        width: 100%;\r\n        border: 0;\r\n        border-radius: 30px;\r\n        font-size: 13px;\r\n        color: #fff;\r\n        margin: 10px 0 5px;\r\n        height: 34px;\r\n    }\r\n}\r\n\r\n.middle-arrow {\r\n    float: left;\r\n    width: 30px;\r\n    height: 50px;\r\n    font-size: 40px;\r\n    margin-top: 10%;\r\n    color: #dee2e6;\r\n    text-align: center;\r\n}\r\n\r\n.price-details {\r\n    float: left;\r\n    width: 100%;\r\n    margin-bottom: 10px;\r\n    font-size: 15px;\r\n    line-height: normal;\r\n    font-weight: 600;\r\n\r\n    .unit-price {\r\n        float: left;\r\n        width: 42%;\r\n    }\r\n}\r\n\r\n.unit-price span {\r\n    display: block;\r\n    font-size: 12px;\r\n    font-weight: 400;\r\n}\r\n\r\n.whole-sale-price {\r\n    float: right;\r\n    width: 58%;\r\n    text-align: right;\r\n\r\n\r\n span {\r\n    font-size: 12px;\r\n    display: block;\r\n    font-weight: 400;\r\n    }\r\n}\r\n\r\n\r\n.add_to_cart {\r\n    clear: both;\r\n}\r\n\r\n.subItem-field {\r\n    width: calc(100% - 280px);\r\n    float: left;\r\n}\r\n\r\n.item img {\r\n    width: 100%;\r\n}\r\n\r\n.pro-box.active {\r\n    border: 1px solid #63030c;\r\n}\r\n\r\n.p-details .form-control {\r\n    font-size: 13px;\r\n    padding: 0 5px;\r\n    min-height: 25px;\r\n    height: 25px;\r\n    text-align: center;\r\n}\r\n\r\n.p-details .form-group label {\r\n    margin-bottom: 0;\r\n    font-weight: 400;\r\n    line-height: normal;\r\n    padding-top: 2px;\r\n    padding-bottom: 2px;\r\n}\r\n\r\n.p-details .form-group {\r\n    margin-bottom: 4px;\r\n}\r\n\r\n.table th, .table td {\r\n    padding: 5px;\r\n    font-size: 12px !important;\r\n    line-height: 18px;\r\n}\r\n\r\ntd.actdct_icon img {\r\n    max-width: 45px;\r\n}\r\n\r\n.search-list-label {\r\n    margin-bottom: 5px;\r\n}\r\n\r\ntd a {\r\n    color: #007bff;\r\n    text-decoration: underline;\r\n    cursor: pointer;\r\n}\r\n\r\n.tab-div {\r\n    display: flex;\r\n    flex-direction: row;\r\n    gap: 2rem;\r\n}"] }]
    }], function () { return [{ type: i1.ApiService }, { type: i2.BsModalService }, { type: i3.FormBuilder }, { type: i4.ToastrService }]; }, { countryEvent: [{
            type: Output
        }], stateEvent: [{
            type: Output
        }], cityEvent: [{
            type: Output
        }] }); })();
//# sourceMappingURL=manage-store-item-sub-item-discounts.component.js.map