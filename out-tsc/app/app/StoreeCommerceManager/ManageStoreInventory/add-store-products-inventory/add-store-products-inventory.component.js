import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { ActivationDeactivationComponent } from '../activation-deactivation/activation-deactivation.component';
import * as i0 from "@angular/core";
import * as i1 from "src/app/services/api.service";
import * as i2 from "ngx-toastr";
import * as i3 from "@angular/forms";
import * as i4 from "ngx-bootstrap/modal";
import * as i5 from "@angular/common/http";
import * as i6 from "@angular/common";
import * as i7 from "ngx-pagination";
function AddStoreProductsInventoryComponent_option_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 21);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const productline_r11 = ctx.$implicit;
    i0.ɵɵproperty("value", productline_r11.RETAIL_D2C_PRODUCT_ID);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", productline_r11.RETAIL_D2C_PRODUCT_NAME, " ");
} }
function AddStoreProductsInventoryComponent_option_28_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 22);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const productItem_r12 = ctx.$implicit;
    i0.ɵɵproperty("ngValue", productItem_r12.RETAIL_D2C_ITEM_ID);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", productItem_r12.RETAIL_D2C_ITEM_NAME, " ");
} }
function AddStoreProductsInventoryComponent_div_32_li_14_div_13_span_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵelement(1, "i", 55);
    i0.ɵɵelementEnd();
} }
function AddStoreProductsInventoryComponent_div_32_li_14_div_13_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵelement(1, "i", 56);
    i0.ɵɵelementEnd();
} }
function AddStoreProductsInventoryComponent_div_32_li_14_div_13_span_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "Yes");
    i0.ɵɵelementEnd();
} }
function AddStoreProductsInventoryComponent_div_32_li_14_div_13_ng_template_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "No");
    i0.ɵɵelementEnd();
} }
const _c0 = function (a0) { return { "active": a0 }; };
function AddStoreProductsInventoryComponent_div_32_li_14_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r25 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 39)(1, "div", 40);
    i0.ɵɵelement(2, "img", 32);
    i0.ɵɵpipe(3, "slice");
    i0.ɵɵelementStart(4, "div", 33)(5, "p", 34);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "p", 34)(8, "small");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "p", 41)(11, "span");
    i0.ɵɵtext(12, "In-Stock:");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(13, AddStoreProductsInventoryComponent_div_32_li_14_div_13_span_13_Template, 2, 0, "span", 42);
    i0.ɵɵtemplate(14, AddStoreProductsInventoryComponent_div_32_li_14_div_13_ng_template_14_Template, 2, 0, "ng-template", null, 43, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "p", 44)(17, "span");
    i0.ɵɵtext(18, "SKU#:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "span");
    i0.ɵɵtext(20);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(21, "p", 44)(22, "span");
    i0.ɵɵtext(23, "Minimum Inventory Alet:");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(24, AddStoreProductsInventoryComponent_div_32_li_14_div_13_span_24_Template, 2, 0, "span", 42);
    i0.ɵɵtemplate(25, AddStoreProductsInventoryComponent_div_32_li_14_div_13_ng_template_25_Template, 2, 0, "ng-template", null, 45, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "p", 44)(28, "span");
    i0.ɵɵtext(29, "Current Stock in Webstore:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "span");
    i0.ɵɵtext(31);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(32, "p", 44)(33, "span");
    i0.ɵɵtext(34, "All-Day WMS:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(35, "span");
    i0.ɵɵtext(36, "No");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(37, "p", 46)(38, "span");
    i0.ɵɵtext(39, "Add Stock in Store:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(40, "span")(41, "input", 47);
    i0.ɵɵlistener("keyup", function AddStoreProductsInventoryComponent_div_32_li_14_div_13_Template_input_keyup_41_listener($event) { i0.ɵɵrestoreView(_r25); const ctx_r24 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r24.onKeyInput($event)); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(42, "p", 48)(43, "span");
    i0.ɵɵtext(44, "Min Alert Count:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(45, "span");
    i0.ɵɵelement(46, "input", 49);
    i0.ɵɵelementStart(47, "i", 50);
    i0.ɵɵlistener("click", function AddStoreProductsInventoryComponent_div_32_li_14_div_13_Template_i_click_47_listener() { const restoredCtx = i0.ɵɵrestoreView(_r25); const storesubitem_r16 = restoredCtx.$implicit; const ctx_r26 = i0.ɵɵnextContext(3); const _r3 = i0.ɵɵreference(34); return i0.ɵɵresetView(ctx_r26.openModal(_r3, storesubitem_r16.SubItemId)); });
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(48, "div", 51)(49, "a", 52);
    i0.ɵɵlistener("click", function AddStoreProductsInventoryComponent_div_32_li_14_div_13_Template_a_click_49_listener() { const restoredCtx = i0.ɵɵrestoreView(_r25); const storesubitem_r16 = restoredCtx.$implicit; const ctx_r27 = i0.ɵɵnextContext(3); const _r5 = i0.ɵɵreference(36); return i0.ɵɵresetView(ctx_r27.publicViewModal(_r5, storesubitem_r16.SubItemId)); });
    i0.ɵɵtext(50, "Check Public View");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(51, "a");
    i0.ɵɵtext(52, "Add Size Matrix & Store SKU#");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(53, "a");
    i0.ɵɵtext(54, "Add other Details");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(55, "a", 52);
    i0.ɵɵlistener("click", function AddStoreProductsInventoryComponent_div_32_li_14_div_13_Template_a_click_55_listener() { const restoredCtx = i0.ɵɵrestoreView(_r25); const storesubitem_r16 = restoredCtx.$implicit; const ctx_r28 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r28.openActModal(storesubitem_r16.SubItemId)); });
    i0.ɵɵtext(56, "De-activation & Re-activation");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(57, "a", 52);
    i0.ɵɵlistener("click", function AddStoreProductsInventoryComponent_div_32_li_14_div_13_Template_a_click_57_listener() { const restoredCtx = i0.ɵɵrestoreView(_r25); const storesubitem_r16 = restoredCtx.$implicit; const ctx_r29 = i0.ɵɵnextContext(3); const _r7 = i0.ɵɵreference(38); return i0.ɵɵresetView(ctx_r29.openModalTopPick(_r7, storesubitem_r16.SubItemId)); });
    i0.ɵɵtext(58, "Add/Edit to Top-Pick");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(59, "a", 52);
    i0.ɵɵlistener("click", function AddStoreProductsInventoryComponent_div_32_li_14_div_13_Template_a_click_59_listener() { const restoredCtx = i0.ɵɵrestoreView(_r25); const storesubitem_r16 = restoredCtx.$implicit; const ctx_r30 = i0.ɵɵnextContext(3); const _r9 = i0.ɵɵreference(40); return i0.ɵɵresetView(ctx_r30.openModalNewSelf(_r9, storesubitem_r16.SubItemId)); });
    i0.ɵɵtext(60, "Add/Edit to New on-Self");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(61, "div", 53)(62, "button", 54);
    i0.ɵɵlistener("click", function AddStoreProductsInventoryComponent_div_32_li_14_div_13_Template_button_click_62_listener() { const restoredCtx = i0.ɵɵrestoreView(_r25); const storesubitem_r16 = restoredCtx.$implicit; const ctx_r31 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r31.SaveDropShipItemSubItemSaveInventory(storesubitem_r16.ItemId, storesubitem_r16.SubItemId)); });
    i0.ɵɵtext(63, " Add Inventory to Store ");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const storesubitem_r16 = ctx.$implicit;
    const i_r17 = ctx.index;
    const _r19 = i0.ɵɵreference(15);
    const _r22 = i0.ɵɵreference(26);
    const ctx_r15 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(17, _c0, storesubitem_r16.isSelected === true));
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate2("src", "", ctx_r15.imgURL, "", i0.ɵɵpipeBind3(3, 13, storesubitem_r16.SubItemImagePath, 1, -4), "jpeg", i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(storesubitem_r16.SubItemName);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(storesubitem_r16.SubItemSize);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", storesubitem_r16.RETAIL_D2C_STOCK_HOLDER_SUBITEM_IN_STOCK_FLG == true)("ngIfElse", _r19);
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(storesubitem_r16.RETAIL_D2C_STOCK_SUBITEM_SKU_CODE);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", storesubitem_r16.RETAIL_D2C_STOCK_HOLDER_SUBITEM_STOCK_MIN_ALERT_FLG == true)("ngIfElse", _r22);
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate1("", storesubitem_r16.RETAIL_D2C_STOCK_HOLDR_INVENTRY_ON_HAND, " Units");
    i0.ɵɵadvance(10);
    i0.ɵɵpropertyInterpolate1("name", "stockinStore", i_r17, "");
    i0.ɵɵadvance(5);
    i0.ɵɵpropertyInterpolate("value", storesubitem_r16.RETAIL_D2C_STOCK_HOLDR_MIN_INVNTRY_OFFICE_ALRT_SET_COUNT);
} }
const _c1 = function (a1) { return { itemsPerPage: 3, currentPage: a1 }; };
function AddStoreProductsInventoryComponent_div_32_li_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li")(1, "div", 31);
    i0.ɵɵelement(2, "img", 32);
    i0.ɵɵpipe(3, "slice");
    i0.ɵɵelementStart(4, "div", 33)(5, "p", 34);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "p", 35);
    i0.ɵɵtext(8, "Item ID: ");
    i0.ɵɵelementStart(9, "b");
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(11, "div", 36);
    i0.ɵɵelement(12, "i", 37);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(13, AddStoreProductsInventoryComponent_div_32_li_14_div_13_Template, 64, 19, "div", 38);
    i0.ɵɵpipe(14, "paginate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const storeitem_r14 = ctx.$implicit;
    const ctx_r13 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate2("src", "", ctx_r13.imgURL, "", i0.ɵɵpipeBind3(3, 5, storeitem_r14.ItemImagePath, 1, -4), "jpeg", i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(storeitem_r14.ItemName);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(storeitem_r14.ItemId);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind2(14, 9, ctx_r13.productLineInventoryList, i0.ɵɵpureFunction1(12, _c1, ctx_r13.p)));
} }
function AddStoreProductsInventoryComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    const _r33 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 23)(1, "div", 24)(2, "div", 2)(3, "div", 25)(4, "div", 26);
    i0.ɵɵtext(5, "Store: ");
    i0.ɵɵelementStart(6, "span");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "div", 26);
    i0.ɵɵtext(9, "Product Line: ");
    i0.ɵɵelementStart(10, "span");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(12, "div", 27)(13, "ul");
    i0.ɵɵtemplate(14, AddStoreProductsInventoryComponent_div_32_li_14_Template, 15, 14, "li", 28);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(15, "div", 29)(16, "div", 2)(17, "pagination-controls", 30);
    i0.ɵɵlistener("pageChange", function AddStoreProductsInventoryComponent_div_32_Template_pagination_controls_pageChange_17_listener($event) { i0.ɵɵrestoreView(_r33); const ctx_r32 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r32.p = $event); });
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(ctx_r2.storeName);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r2.productName);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r2.filterItemList);
} }
function AddStoreProductsInventoryComponent_ng_template_33_Template(rf, ctx) { if (rf & 1) {
    const _r35 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 57)(1, "h4", 58);
    i0.ɵɵtext(2, "Add Alert Count");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 59);
    i0.ɵɵlistener("click", function AddStoreProductsInventoryComponent_ng_template_33_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r35); const ctx_r34 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r34.modalRef == null ? null : ctx_r34.modalRef.hide()); });
    i0.ɵɵelementStart(4, "span", 60);
    i0.ɵɵtext(5, "\u00D7");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(6, "div", 61)(7, "div", 7)(8, "label", 62);
    i0.ɵɵtext(9, "Min. Alert Count");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "input", 63);
    i0.ɵɵlistener("ngModelChange", function AddStoreProductsInventoryComponent_ng_template_33_Template_input_ngModelChange_10_listener($event) { i0.ɵɵrestoreView(_r35); const ctx_r36 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r36.minalertCount = $event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "button", 64);
    i0.ɵɵlistener("click", function AddStoreProductsInventoryComponent_ng_template_33_Template_button_click_11_listener() { i0.ɵɵrestoreView(_r35); const ctx_r37 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r37.minAlertCount()); });
    i0.ɵɵtext(12, "Save");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(10);
    i0.ɵɵproperty("ngModel", ctx_r4.minalertCount);
} }
function AddStoreProductsInventoryComponent_ng_template_35_Template(rf, ctx) { if (rf & 1) {
    const _r39 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 57)(1, "h4", 58);
    i0.ɵɵtext(2, "Public View");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "i", 65);
    i0.ɵɵelementStart(4, "button", 59);
    i0.ɵɵlistener("click", function AddStoreProductsInventoryComponent_ng_template_35_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r39); const ctx_r38 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r38.modalRef == null ? null : ctx_r38.modalRef.hide()); });
    i0.ɵɵelementStart(5, "span", 60);
    i0.ɵɵtext(6, "\u00D7");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(7, "div", 61)(8, "form", 4)(9, "ul", 66)(10, "li", 67);
    i0.ɵɵtext(11, " SubItem ID ");
    i0.ɵɵelementStart(12, "span");
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "li", 67);
    i0.ɵɵtext(15, " Publicaly Available ");
    i0.ɵɵelementStart(16, "select", 68)(17, "option", 69);
    i0.ɵɵtext(18, "Yes");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "option", 70);
    i0.ɵɵtext(20, "No");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(21, "li", 67);
    i0.ɵɵtext(22, " Set Restricted view time ");
    i0.ɵɵelementStart(23, "select", 71)(24, "option", 72);
    i0.ɵɵtext(25, "5 mins");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "option", 73);
    i0.ɵɵtext(27, "10 mins");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "option", 74);
    i0.ɵɵtext(29, "15 mins");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "option", 75);
    i0.ɵɵtext(31, "20 mins");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(32, "option", 76);
    i0.ɵɵtext(33, "30 mins");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(34, "option", 77);
    i0.ɵɵtext(35, "40 mins");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(36, "option", 78);
    i0.ɵɵtext(37, "50 mins");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(38, "option", 79);
    i0.ɵɵtext(39, "60 mins");
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(40, "button", 80);
    i0.ɵɵlistener("click", function AddStoreProductsInventoryComponent_ng_template_35_Template_button_click_40_listener() { i0.ɵɵrestoreView(_r39); const ctx_r40 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r40.EditSubitemPublicViewStatus()); });
    i0.ɵɵtext(41, "Update");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("formGroup", ctx_r6.publicViewForm);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r6.subItemId);
} }
function AddStoreProductsInventoryComponent_ng_template_37_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 85);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r41 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r41.noTopPick, " ");
} }
function AddStoreProductsInventoryComponent_ng_template_37_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r46 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 86)(1, "p");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "form", 4)(4, "div", 87)(5, "p");
    i0.ɵɵtext(6, "Available on Top Pick List");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "select", 88);
    i0.ɵɵlistener("change", function AddStoreProductsInventoryComponent_ng_template_37_div_8_Template_select_change_7_listener($event) { i0.ɵɵrestoreView(_r46); const ctx_r45 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r45.onTopPickChange($event)); });
    i0.ɵɵelementStart(8, "option", 69);
    i0.ɵɵtext(9, "Yes");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "option", 70);
    i0.ɵɵtext(11, "No");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(12, "button", 89);
    i0.ɵɵlistener("click", function AddStoreProductsInventoryComponent_ng_template_37_div_8_Template_button_click_12_listener() { const restoredCtx = i0.ɵɵrestoreView(_r46); const data_r44 = restoredCtx.$implicit; const ctx_r47 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r47.updateSubitemTopPick(data_r44.RETAIL_STORE_TOPPICKS_ID, data_r44.RETAIL_TOPPICK_SUBITEM_ID)); });
    i0.ɵɵtext(13, "Update TopPick");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const data_r44 = ctx.$implicit;
    const ctx_r42 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Subitem ID: ", data_r44.RETAIL_TOPPICK_SUBITEM_ID, "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("formGroup", ctx_r42.topPickForm);
} }
function AddStoreProductsInventoryComponent_ng_template_37_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r49 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 89);
    i0.ɵɵlistener("click", function AddStoreProductsInventoryComponent_ng_template_37_button_9_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r49); const ctx_r48 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r48.addSubitemTopPick(ctx_r48.subItemId)); });
    i0.ɵɵtext(1, "Add TopPick");
    i0.ɵɵelementEnd();
} }
function AddStoreProductsInventoryComponent_ng_template_37_Template(rf, ctx) { if (rf & 1) {
    const _r51 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 57)(1, "h4", 58);
    i0.ɵɵtext(2, "SubItem on top Pick List");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 81);
    i0.ɵɵlistener("click", function AddStoreProductsInventoryComponent_ng_template_37_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r51); const ctx_r50 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r50.modalRef == null ? null : ctx_r50.modalRef.hide()); });
    i0.ɵɵelementStart(4, "span", 60);
    i0.ɵɵtext(5, "\u00D7");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(6, "div", 61);
    i0.ɵɵtemplate(7, AddStoreProductsInventoryComponent_ng_template_37_div_7_Template, 2, 1, "div", 82);
    i0.ɵɵtemplate(8, AddStoreProductsInventoryComponent_ng_template_37_div_8_Template, 14, 2, "div", 83);
    i0.ɵɵtemplate(9, AddStoreProductsInventoryComponent_ng_template_37_button_9_Template, 2, 0, "button", 84);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext();
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngIf", ctx_r8.showError);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r8.topPickList);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r8.showError);
} }
function AddStoreProductsInventoryComponent_ng_template_39_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 85);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r52 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r52.newSelftxt, " ");
} }
function AddStoreProductsInventoryComponent_ng_template_39_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r57 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 86)(1, "p");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "form", 4)(4, "div", 87)(5, "p");
    i0.ɵɵtext(6, "Available on New on Self");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "select", 88);
    i0.ɵɵlistener("change", function AddStoreProductsInventoryComponent_ng_template_39_div_8_Template_select_change_7_listener($event) { i0.ɵɵrestoreView(_r57); const ctx_r56 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r56.onnewSelfChange($event)); });
    i0.ɵɵelementStart(8, "option", 69);
    i0.ɵɵtext(9, "Yes");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "option", 70);
    i0.ɵɵtext(11, "No");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(12, "button", 89);
    i0.ɵɵlistener("click", function AddStoreProductsInventoryComponent_ng_template_39_div_8_Template_button_click_12_listener() { const restoredCtx = i0.ɵɵrestoreView(_r57); const data_r55 = restoredCtx.$implicit; const ctx_r58 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r58.updateSubitemNewonShelf(data_r55.RETAIl_STORE_NEW_ON_SHELF_ID, data_r55.RETAIL_NEW_ON_SHELF_SUBITEM_ID)); });
    i0.ɵɵtext(13, "Update NewSelf");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const data_r55 = ctx.$implicit;
    const ctx_r53 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Subitem ID: ", data_r55.RETAIL_NEW_ON_SHELF_SUBITEM_ID, "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("formGroup", ctx_r53.newSelfForm);
} }
function AddStoreProductsInventoryComponent_ng_template_39_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r60 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 89);
    i0.ɵɵlistener("click", function AddStoreProductsInventoryComponent_ng_template_39_button_9_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r60); const ctx_r59 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r59.addSubitemNewonShelf(ctx_r59.subItemId)); });
    i0.ɵɵtext(1, "Add NewSelf");
    i0.ɵɵelementEnd();
} }
function AddStoreProductsInventoryComponent_ng_template_39_Template(rf, ctx) { if (rf & 1) {
    const _r62 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 57)(1, "h4", 58);
    i0.ɵɵtext(2, "SubItem on New on Self");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 81);
    i0.ɵɵlistener("click", function AddStoreProductsInventoryComponent_ng_template_39_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r62); const ctx_r61 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r61.modalRef == null ? null : ctx_r61.modalRef.hide()); });
    i0.ɵɵelementStart(4, "span", 60);
    i0.ɵɵtext(5, "\u00D7");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(6, "div", 61);
    i0.ɵɵtemplate(7, AddStoreProductsInventoryComponent_ng_template_39_div_7_Template, 2, 1, "div", 82);
    i0.ɵɵtemplate(8, AddStoreProductsInventoryComponent_ng_template_39_div_8_Template, 14, 2, "div", 83);
    i0.ɵɵtemplate(9, AddStoreProductsInventoryComponent_ng_template_39_button_9_Template, 2, 0, "button", 84);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r10 = i0.ɵɵnextContext();
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngIf", ctx_r10.showError1);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r10.newSelfData);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r10.showError1);
} }
export class AddStoreProductsInventoryComponent {
    constructor(apiService, toastr, formBuilder, modalService, http) {
        this.apiService = apiService;
        this.toastr = toastr;
        this.formBuilder = formBuilder;
        this.modalService = modalService;
        this.http = http;
        this.imgURL = this.apiService.imgURL;
        this.isValid = true;
        this.p = 1;
        this.collection = [];
        this.btnDisabled = true;
        this.getlogindata = localStorage.getItem('logindata');
        this.domainid = localStorage.getItem('getDomainID');
        this.getlogindata = JSON.parse(this.getlogindata);
        this.accountid = this.getlogindata.RETAIL_D2C_ACCT_ID;
        this.subaccountid = this.getlogindata.RETAIL_D2C_USR_SUBACCT_ID;
        this.storeid = this.getlogindata.RETAIL_D2C_ACCT_INTRNL_OFFICE_REGID;
        this.storeName = this.getlogindata.RETAIL_D2C_SUBACCT_OFFICE_NAME;
    }
    ngOnInit() {
        this.getProductLineList();
        this.webStoreForm = this.formBuilder.group({
            ACCT_ID: this.accountid,
            SUBACCT_ID: this.subaccountid,
            SUBACCT_OFFICE_ID: this.storeid,
            RETAIL_D2C_DOMAIN_ID: ['', Validators.required],
            RETAIL_D2C_PRODUCT_ID: ['', Validators.required],
            ProductId: '',
            itemId: ''
        });
        this.publicViewForm = this.formBuilder.group({
            RETAIL_D2C_STORE_APPROVED_PUBLISH_SUBITEM_ID: [''],
            RETAIL_D2C_STORE_ITEM_SUBITEM_MARKETPLACE_PUBLISH_APPROVAL_GRANTED_FLG: ['', Validators.required],
            RETAIL_D2C_STORE_ITEM_SUBITEM_PUBLISH_APPROVAL_TIME_LIMIT_MINUTE: ['', Validators.required],
        });
        this.inventoryForm = this.formBuilder.group({
            START_INVENTORY_COUNT_NUMBR: ['', Validators.required],
            START_INVENTORY_COUNT_UPDATION_FLG: ['', Validators.required],
            ADDED_CASES_QUANTITY_NUMBR: ['', Validators.required],
            MIN_ALRT_COUNT_NUMBR: ['', Validators.required],
        });
        this.topPickForm = this.formBuilder.group({
            Active_Flg: ['', Validators.required],
        });
        this.newSelfForm = this.formBuilder.group({
            Active_Flg: ['', Validators.required],
        });
    }
    getProductLineList() {
        this.apiService.getCall(this.apiService.baseURL + '/GetStoreProductLines/' + this.accountid + "/" + this.subaccountid + "/" + this.storeid)
            .subscribe(data => {
            this.productLineList = data;
            console.log(data);
        });
    }
    onretailDropshipStoreChange(e) {
        this.productID = this.webStoreForm.value.RETAIL_D2C_PRODUCT_ID;
        if (this.productID === "" || this.productID === null) {
            this.btnDisabled = true;
        }
        else {
            this.productName = e.target.options[e.target.options.selectedIndex].text;
            console.log(this.productID);
            this.GetItemListOfStore();
            this.showWebstore = false;
            this.btnDisabled = true;
        }
    }
    onKey(event) {
        this.inputValue = event.target.value;
    }
    GetItemListOfStore() {
        this.apiService.getCall(this.apiService.baseURL + '/GetStoreProductItemList/' + this.accountid + "/" + this.subaccountid + "/" + this.storeid + "/" + this.productID)
            .subscribe(data => {
            console.log(data);
            this.itemLists = data;
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
    onPItemChange(e) {
        this.itemId = this.webStoreForm.value.itemId;
        if (this.itemId === "" || this.itemId === null) {
            this.btnDisabled = true;
        }
        else {
            this.showWebstore = false;
            this.btnDisabled = false;
        }
    }
    getAllItemSubItemAvailableForInventory() {
        console.log("Display subitem payload: ", '/GetAllItemSubItemAvailableForInventory' + "/" + this.domainid + "/" + this.accountid + "/" + this.subaccountid + "/" + this.storeid + "/" + this.productID + "/" + this.itemId);
        this.apiService.getCall(this.apiService.baseURL + '/GetAllItemSubItemAvailableForInventory' + "/" + this.domainid + "/" + this.accountid + "/" + this.subaccountid + "/" + this.storeid + "/" + this.productID + "/" + this.itemId)
            .subscribe(data => {
            this.productLineInventoryList = data;
            console.log(data);
            for (let i = 1; i <= this.productLineInventoryList.length; i++) {
                this.collection.push(`item ${i}`);
            }
            this.showWebstore = true;
            this.p = 1;
            this.filterItemList = this.productLineInventoryList.reduce((unique, o) => {
                if (!unique.some(obj => obj.ItemId === o.ItemId && obj.value === o.value)) {
                    unique.push(o);
                }
                return unique;
            }, []);
        }, (error) => {
            console.log(error);
            this.toastr.error(error.error.Message, '', {
                timeOut: 5000,
            });
            this.showWebstore = false;
        });
    }
    onKeyInput(event) {
        console.log(event.target.value);
        this.stockinStore = event.target.value;
    }
    SaveDropShipItemSubItemSaveInventory(item_id, subItem_id) {
        let inventoryData = {
            DomainId: +this.domainid,
            AccountId: this.accountid,
            SubAccountId: this.subaccountid,
            OfficeId: +this.storeid,
            ProductLineId: +this.productID,
            ItemId: item_id,
            SubItemId: subItem_id,
            UnitReceivedInCounts: this.stockinStore
        };
        this.apiService.postCall(this.apiService.baseURL + '/SaveDropShipItemSubItemSaveInventory', inventoryData).subscribe(data => {
            console.log(data);
            this.toastr.success(data, '', {
                timeOut: 3000,
            });
            this.getAllItemSubItemAvailableForInventory();
        }, (error) => {
            this.toastr.error(error, '', {
                timeOut: 3000,
            });
        });
    }
    openModal(alertCountTemplate, subitemid) {
        this.modalRef = this.modalService.show(alertCountTemplate, Object.assign({}, { class: 'alertCountModal' }));
        this.subItemId = subitemid;
    }
    minAlertCount() {
        if (this.minalertCount === null || this.minalertCount == undefined) {
            this.toastr.error('Please enter value');
        }
        else {
            let alertCountData = {
                STORE_ID: this.storeid,
                SUBITEM_ID: this.subItemId,
                minalertcount: this.minalertCount,
            };
            this.apiService.postCall(this.apiService.baseURL + '/EditSubitemMinalertcount', alertCountData)
                .subscribe(data => {
                console.log(data);
                this.getAllItemSubItemAvailableForInventory();
                this.toastr.success('Updated Successfully!');
                this.modalService.hide();
                this.minalertCount = null;
            }, (error) => {
                this.toastr.error(error, '', {
                    timeOut: 5000,
                });
            });
        }
    }
    publicViewModal(publicViewTemplate, subItemid) {
        this.modalRef = this.modalService.show(publicViewTemplate, Object.assign({}, { class: 'publicViewModal' }));
        this.getSubitemPublicViewStatus(subItemid);
    }
    getSubitemPublicViewStatus(subItemid) {
        this.apiService.getCall(this.apiService.baseURL + '/GetSubitemPublicViewStatus/' + subItemid + "/" + this.storeid)
            .subscribe(data => {
            console.log(data);
            this.publicviewData = data;
            this.subItemId = data[0].RETAIL_D2C_STORE_APPROVED_PUBLISH_SUBITEM_ID;
            this.publicViewForm.patchValue({
                RETAIL_D2C_STORE_APPROVED_PUBLISH_SUBITEM_ID: this.publicviewData[0].RETAIL_D2C_STORE_APPROVED_PUBLISH_SUBITEM_ID,
                RETAIL_D2C_STORE_ITEM_SUBITEM_MARKETPLACE_PUBLISH_APPROVAL_GRANTED_FLG: this.publicviewData[0].RETAIL_D2C_STORE_ITEM_SUBITEM_MARKETPLACE_PUBLISH_APPROVAL_GRANTED_FLG,
                RETAIL_D2C_STORE_ITEM_SUBITEM_PUBLISH_APPROVAL_TIME_LIMIT_MINUTE: this.publicviewData[0].RETAIL_D2C_STORE_ITEM_SUBITEM_PUBLISH_APPROVAL_TIME_LIMIT_MINUTE,
            });
        }, (error) => {
            console.log(error);
        });
    }
    EditSubitemPublicViewStatus() {
        let data = {
            STORE_ID: this.storeid,
            SUBITEM_ID: this.subItemId,
            MARKETPLACE_PUBLISH_APPROVAL_FLAG: this.publicViewForm.value.RETAIL_D2C_STORE_ITEM_SUBITEM_MARKETPLACE_PUBLISH_APPROVAL_GRANTED_FLG,
            PUBLISH_APPROVAL_TIME_LIMIT_MINUTES: this.publicViewForm.value.RETAIL_D2C_STORE_ITEM_SUBITEM_PUBLISH_APPROVAL_TIME_LIMIT_MINUTE
        };
        console.log(data);
        this.apiService.postCall(this.apiService.baseURL + '/EditSubitemPublicViewStatus', data)
            .subscribe(data => {
            console.log(data);
            this.toastr.success('Updated Successfully!');
            this.modalService.hide();
        }, (error) => {
            this.toastr.error(error, '', {
                timeOut: 5000,
            });
        });
    }
    openActModal(subitemid) {
        const initialState = {
            initialState: { subitemID: subitemid }
        };
        this.bsModalRef = this.modalService.show(ActivationDeactivationComponent, Object.assign({}, { class: 'actModal' }, initialState));
    }
    openModalTopPick(topPickTemplate, subItemid) {
        this.modalRef = this.modalService.show(topPickTemplate, Object.assign({}, { class: 'publicViewModal' }));
        this.subItemId = subItemid;
        this.getSubitemTopPick(subItemid);
    }
    getSubitemTopPick(subitemid) {
        this.apiService.getCall(this.apiService.baseURL + '/GetSubitemTopPick/' + this.storeid + "/" + subitemid)
            .subscribe(data => {
            console.log(data);
            this.topPickList = data;
            this.showError = false;
            this.toppickActiveFlag = data[0].RETAIL_TOPPICK_ACTIV_FLG;
            this.topPickForm.patchValue({
                Active_Flg: data[0].RETAIL_TOPPICK_ACTIV_FLG,
            });
        }, (error) => {
            console.log(error);
            this.topPickList = [];
            this.noTopPick = error.error;
            this.showError = true;
            this.toastr.error(error.error, '', {
                timeOut: 5000,
            });
        });
    }
    addSubitemTopPick(subitemid) {
        let addpickData = {
            SubItemId: subitemid,
            Store_ID: this.storeid
        };
        this.apiService.postCall(this.apiService.baseURL + '/AddSubitemTopPick', addpickData)
            .subscribe(data => {
            console.log(data);
            this.toastr.success('Added Successfully');
            this.modalRef.hide();
        }, (error) => {
            console.log(error);
            this.toastr.error(error.error);
        });
    }
    onTopPickChange(e) {
        if (this.topPickForm.value.Active_Flg === 'true') {
            this.topPickFlag = true;
        }
        else {
            this.topPickFlag = false;
        }
    }
    updateSubitemTopPick(toppickId, subitemId) {
        let data = {
            RETAIL_STORE_TOPPICKS_ID: toppickId,
            SubItemId: subitemId,
            Store_ID: this.storeid,
            Active_Flg: this.topPickFlag
        };
        this.apiService.postCall(this.apiService.baseURL + '/EditSubitemTopPick', data)
            .subscribe(data => {
            console.log(data);
            this.toastr.success('Updated Successfully');
            this.modalRef.hide();
        }, (error) => {
            console.log(error.error);
        });
    }
    openModalNewSelf(newSelfTemplate, subItemid) {
        this.modalRef = this.modalService.show(newSelfTemplate, Object.assign({}, { class: 'publicViewModal' }));
        this.subItemId = subItemid;
        this.getSubitemNewonShelf(subItemid);
    }
    getSubitemNewonShelf(subitemid) {
        this.apiService.getCall(this.apiService.baseURL + '/GetSubitemNewonShelf/' + this.storeid + "/" + subitemid)
            .subscribe(data => {
            console.log(data);
            this.newSelfData = data;
            this.showError1 = false;
            this.newSelfActiveFlag = data[0].RETAIL_NEW_ON_SHELF_ACTIV_FLG;
            this.newSelfForm.patchValue({
                Active_Flg: data[0].RETAIL_NEW_ON_SHELF_ACTIV_FLG,
            });
        }, (error) => {
            console.log(error);
            this.newSelfData = [];
            this.newSelftxt = error.error;
            this.showError1 = true;
            this.toastr.error(error.error, '', {
                timeOut: 5000,
            });
        });
    }
    addSubitemNewonShelf(subitemid) {
        let addselfData = {
            SubItemId: subitemid,
            Store_ID: this.storeid
        };
        this.apiService.postCall(this.apiService.baseURL + '/AddSubitemNewonShelf', addselfData)
            .subscribe(data => {
            console.log(data);
            this.toastr.success('Added Successfully');
            this.modalRef.hide();
        }, (error) => {
            console.log(error);
            this.toastr.error(error.error);
        });
    }
    onnewSelfChange(e) {
        if (this.newSelfForm.value.Active_Flg === 'true') {
            this.newSelfFlag = true;
        }
        else {
            this.newSelfFlag = false;
        }
    }
    updateSubitemNewonShelf(newselfId, subitemId) {
        let data = {
            RETAIl_STORE_NEW_ON_SHELF_ID: newselfId,
            SubItemId: subitemId,
            Store_ID: this.storeid,
            Active_Flg: this.newSelfFlag
        };
        this.apiService.postCall(this.apiService.baseURL + '/EditSubitemNewonShelf', data)
            .subscribe(data => {
            this.toastr.success('Updated Successfully');
            this.modalRef.hide();
        }, (error) => {
            console.log(error.error);
        });
    }
}
AddStoreProductsInventoryComponent.ɵfac = function AddStoreProductsInventoryComponent_Factory(t) { return new (t || AddStoreProductsInventoryComponent)(i0.ɵɵdirectiveInject(i1.ApiService), i0.ɵɵdirectiveInject(i2.ToastrService), i0.ɵɵdirectiveInject(i3.FormBuilder), i0.ɵɵdirectiveInject(i4.BsModalService), i0.ɵɵdirectiveInject(i5.HttpClient)); };
AddStoreProductsInventoryComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AddStoreProductsInventoryComponent, selectors: [["app-add-store-products-inventory"]], decls: 41, vars: 6, consts: [[1, "main-content-area"], [1, "row"], [1, "col-md-12"], [1, "heading-title"], [3, "formGroup"], [1, "row", "topLevel"], [1, "col-md-4"], [1, "form-group"], [1, "form-control", "form-level", "no-border"], ["formControlName", "RETAIL_D2C_PRODUCT_ID", 1, "form-control", 3, "change"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "itemId", 1, "form-control", 3, "change"], ["selected", "", "value", ""], [3, "ngValue", 4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "custom-btn", "float-right", 3, "disabled", "click"], ["class", "box productLevel", 4, "ngIf"], ["alertCountTemplate", ""], ["publicViewTemplate", ""], ["topPickTemplate", ""], ["newSelfTemplate", ""], [3, "value"], [3, "ngValue"], [1, "box", "productLevel"], [1, "row", "text-level"], [1, "search-field-list"], [1, "search-list-label"], [1, "item-subitem-list"], [4, "ngFor", "ngForOf"], [1, "row", "pull-right"], [3, "pageChange"], [1, "pro-box", "storeitem", "item-box"], [3, "src"], [1, "p-details"], [1, "p-name"], [1, "item-id"], [1, "middle-arrow"], [1, "fa", "fa-angle-double-right"], ["class", "sub-item-box", 4, "ngFor", "ngForOf"], [1, "sub-item-box"], [1, "pro-box", 3, "ngClass"], [1, "d-flex", "inStock"], [4, "ngIf", "ngIfElse"], ["elseStock", ""], [1, "d-flex"], ["elseMIA", ""], [1, "add-stock", "d-flex"], ["type", "number", 1, "form-control", 3, "name", "keyup"], [1, "min-alert-count", "d-flex"], ["disabled", "", "type", "number", 1, "form-control", 3, "value"], [1, "ti-pencil-alt", 3, "click"], [1, "links"], [3, "click"], [1, "add_to_cart"], ["type", "button", 1, "btn", 3, "click"], [1, "ti-check-box"], [1, "ti-close"], [1, "modal-header"], [1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "btn-close", "close", "pull-right", 3, "click"], ["aria-hidden", "true", 1, "visually-hidden"], [1, "modal-body"], [1, "form-label"], ["type", "number", "name", "minalertCount", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "btn", "custom-btn", 3, "click"], [1, "ti-pencil-alt"], [1, "list-group"], [1, "list-group-item", "d-flex", "justify-content-between", "align-items-center"], ["formControlName", "RETAIL_D2C_STORE_ITEM_SUBITEM_MARKETPLACE_PUBLISH_APPROVAL_GRANTED_FLG", 1, "form-select"], ["value", "true"], ["value", "false"], ["formControlName", "RETAIL_D2C_STORE_ITEM_SUBITEM_PUBLISH_APPROVAL_TIME_LIMIT_MINUTE", 1, "form-select"], ["value", "5"], ["value", "10"], ["value", "15"], ["value", "20"], ["value", "30"], ["value", "40"], ["value", "50"], ["value", "60"], [1, "btn", "custom-btn", "pull-right", "mt-3", "w-100", 3, "click"], ["type", "button", 1, "btn-close", "close", "pull-right", 3, "click"], ["class", "alert alert-danger", "role", "alert", 4, "ngIf"], ["class", "topListData", 4, "ngFor", "ngForOf"], ["class", "btn custom-btn float-right", 3, "click", 4, "ngIf"], ["role", "alert", 1, "alert", "alert-danger"], [1, "topListData"], [1, "field", "d-flex"], ["formControlName", "Active_Flg", 1, "form-select", 3, "change"], [1, "btn", "custom-btn", "float-right", 3, "click"]], template: function AddStoreProductsInventoryComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
        i0.ɵɵtext(4, "Adding my Product Inventory");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(5, "form", 4)(6, "div", 5)(7, "div", 6)(8, "div", 7)(9, "label");
        i0.ɵɵtext(10, "Store");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "div", 8);
        i0.ɵɵtext(12);
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(13, "div", 6)(14, "div", 7)(15, "label");
        i0.ɵɵtext(16, "Select my Store Product-Line");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(17, "select", 9);
        i0.ɵɵlistener("change", function AddStoreProductsInventoryComponent_Template_select_change_17_listener($event) { return ctx.onretailDropshipStoreChange($event); });
        i0.ɵɵelementStart(18, "option", 10);
        i0.ɵɵtext(19, "Select");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(20, AddStoreProductsInventoryComponent_option_20_Template, 2, 2, "option", 11);
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(21, "div", 6)(22, "div", 7)(23, "label");
        i0.ɵɵtext(24, "Select Store Item");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(25, "select", 12);
        i0.ɵɵlistener("change", function AddStoreProductsInventoryComponent_Template_select_change_25_listener($event) { return ctx.onPItemChange($event); });
        i0.ɵɵelementStart(26, "option", 13);
        i0.ɵɵtext(27, "Select");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(28, AddStoreProductsInventoryComponent_option_28_Template, 2, 2, "option", 14);
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(29, "div", 2)(30, "button", 15);
        i0.ɵɵlistener("click", function AddStoreProductsInventoryComponent_Template_button_click_30_listener() { return ctx.getAllItemSubItemAvailableForInventory(); });
        i0.ɵɵtext(31, "Display Store Product Line Item Sub-Item");
        i0.ɵɵelementEnd()()()();
        i0.ɵɵtemplate(32, AddStoreProductsInventoryComponent_div_32_Template, 18, 3, "div", 16);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(33, AddStoreProductsInventoryComponent_ng_template_33_Template, 13, 1, "ng-template", null, 17, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(35, AddStoreProductsInventoryComponent_ng_template_35_Template, 42, 2, "ng-template", null, 18, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(37, AddStoreProductsInventoryComponent_ng_template_37_Template, 10, 3, "ng-template", null, 19, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(39, AddStoreProductsInventoryComponent_ng_template_39_Template, 10, 3, "ng-template", null, 20, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("formGroup", ctx.webStoreForm);
        i0.ɵɵadvance(7);
        i0.ɵɵtextInterpolate1(" ", ctx.storeName, " ");
        i0.ɵɵadvance(8);
        i0.ɵɵproperty("ngForOf", ctx.productLineList);
        i0.ɵɵadvance(8);
        i0.ɵɵproperty("ngForOf", ctx.itemLists);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("disabled", ctx.btnDisabled);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.showWebstore);
    } }, dependencies: [i6.NgClass, i6.NgForOf, i6.NgIf, i3.ɵNgNoValidate, i3.NgSelectOption, i3.ɵNgSelectMultipleOption, i3.DefaultValueAccessor, i3.NumberValueAccessor, i3.SelectControlValueAccessor, i3.NgControlStatus, i3.NgControlStatusGroup, i3.FormGroupDirective, i3.FormControlName, i3.NgModel, i7.PaginationControlsComponent, i6.SlicePipe, i7.PaginatePipe], styles: ["h1.heading-title[_ngcontent-%COMP%] {\r\n    margin: 20px 0 0;\r\n}\r\n\r\n.heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    padding: 10px 5px 10px;\r\n    font-size: 20px;\r\n}\r\n\r\n.row.topLevel[_ngcontent-%COMP%] {\r\n    background: #fff;\r\n    padding: 20px 0;\r\n    margin: 0;\r\n    border-radius: 5px;\r\n}\r\n\r\n.heading.store-domain[_ngcontent-%COMP%] {\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.store-domain[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    margin-right: 20px;\r\n}\r\n\r\n.store-domain[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    background: #ddd;\r\n    padding: 5px 20px;\r\n    font-size: 13px;\r\n    border-radius: 20px;\r\n    display: inline-block;\r\n    font-weight: bold;\r\n    margin-left: 5px;\r\n}\r\n\r\n.store_id[_ngcontent-%COMP%] {\r\n    background: #ddd;\r\n    padding: 5px 20px;\r\n    border-radius: 20px;\r\n    font-size: 13px;\r\n    font-weight: 700;\r\n    float: right;\r\n    margin-top: -40px;\r\n}\r\n\r\n.box[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    overflow: hidden;\r\n    box-shadow: 0 0 4px 0px #eee;\r\n    margin: 20px 0 5px;\r\n    border-radius: 4px;\r\n    padding: 10px;\r\n    background: #fff;\r\n}\r\n\r\n.main-content-area[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\r\n    width: 20%;\r\n    float: left;\r\n    padding: 0;\r\n}\r\n\r\n.fa-star[_ngcontent-%COMP%]:before {\r\n    content: \"\\f005\";\r\n    color: #ff9600;\r\n    margin-right: 5px;\r\n}\r\n\r\n.pro-box[_ngcontent-%COMP%] {\r\n    box-shadow: 0 0 4px 0 #e9ecef;\r\n    margin: 0 10px 20px;\r\n    overflow: hidden;\r\n    padding: 15px;\r\n    border-radius: 3px;\r\n    position: relative;\r\n    border: 1px solid #dee2e6;\r\n}\r\n\r\n.pro-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    height: 100px;\r\n    width: 100px;\r\n    margin: 30px auto 15px;\r\n    display: block;\r\n}\r\n\r\n.storeitem[_ngcontent-%COMP%]   .p-details[_ngcontent-%COMP%] {\r\n    margin-bottom: 42px;\r\n}\r\n\r\np.label-txt[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    padding: 10px;\r\n    font-size: 14px;\r\n    margin: 0;\r\n}\r\n\r\n.store-available-product[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\r\n    width: 25% !important;\r\n}\r\n\r\n.selected-productLine[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .store-available-product[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\r\n    font-size: 16px;\r\n    padding: 0 10px 5px;\r\n}\r\n\r\n.right-field-head[_ngcontent-%COMP%] {\r\n    float: right;\r\n    margin-top: 10px;\r\n}\r\n\r\n.right-field-head[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    padding: 0 10px;\r\n}\r\n\r\nspan.video[_ngcontent-%COMP%], span.doc[_ngcontent-%COMP%] {\r\n    padding: 8px 15px;\r\n    background: #dee2e6;\r\n    font-size: 12px;\r\n    border-radius: 20px;\r\n}\r\n\r\n.right-field-head[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n    font-size: 11px;\r\n    border-radius: 20px;\r\n}\r\n\r\n.bottom-btn[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n    line-height: 11px;\r\n}\r\n\r\n.box.prduct-gallery[_ngcontent-%COMP%] {\r\n    position: relative;\r\n}\r\n\r\n.sample-img[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    z-index: 1;\r\n    left: 15%;\r\n    top: 28%;\r\n    transform: rotate(-45deg);\r\n}\r\n\r\np.p-name[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    margin: 0;\r\n    font-size: 13px;\r\n    font-weight: 500;\r\n    vertical-align: middle;\r\n}\r\n\r\np.item-id[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    position: absolute;\r\n    top: 0;\r\n    background: #212529;\r\n    left: 0;\r\n    font-weight: 600;\r\n    color: #fff;\r\n    border-radius: 0 0 5px;\r\n    font-size: 11px;\r\n    padding: 3px 6px;\r\n}\r\n\r\nspan.price[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n    padding: 7px 10px 0;\r\n    float: left;\r\n    font-weight: 600;\r\n    line-height: 20px;\r\n}\r\n\r\n.item-id[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\r\n    font-weight: 600;\r\n}\r\n\r\n.instock[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n    text-align: center;\r\n    margin: 0 0 3px;\r\n    position: absolute;\r\n    top: 5%;\r\n    box-shadow: 0 0 30px 0 rgb(82 63 105 / 10%);\r\n    left: 70%;\r\n    background: rgb(224 152 152 / 24%);\r\n    width: 50px;\r\n    border: 1px solid rgb(0 0 0 / 10%);\r\n    height: 50px;\r\n    border-radius: 50%;\r\n    img {\r\n        width: 30px !important;\r\n        height: 30px !important;\r\n        margin: 9px auto;\r\n    }\r\n}\r\n\r\n.pro-box.storeitem.item-box[_ngcontent-%COMP%] {\r\n    border: 1px solid #dee2e6;\r\n    height: 320px;\r\n    padding-left: 40px;\r\n    padding-right: 40px;\r\n}\r\n\r\nh1.heading-title[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    text-transform: uppercase;\r\n    font-weight: 700;\r\n    color: #ff7900;\r\n    position: relative;\r\n    margin-bottom: 10px;\r\n    width: 100%;\r\n    span {\r\n        font-size: 10px;\r\n        text-transform: inherit;\r\n        background: #495057;\r\n        color: #fff;\r\n        padding: 10px 15px;\r\n        border-radius: 25px;\r\n    }\r\n}\r\n\r\nh1.heading-title[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    max-width: 65px;\r\n    margin-right: 5px;\r\n}\r\n\r\nh1.heading-title[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    font-weight: 400;\r\n    font-size: 13px;\r\n    position: absolute;\r\n    left: 80px;\r\n    bottom: 4px;\r\n    color: grey;\r\n}\r\n\r\n.offerDiv[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 5px;\r\n    right: 5px;\r\n    font-size: 10px;\r\n    background: #dc3545;\r\n    line-height: 10px;\r\n    font-weight: 700;\r\n    width: 35px;\r\n    height: 35px;\r\n    border-radius: 50%;\r\n    padding: 9px;\r\n    text-align: center;\r\n    color: #fff;\r\n}\r\n\r\n.offerDiv[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\r\n    display: block;\r\n}\r\n\r\nspan.price.strike-price[_ngcontent-%COMP%] {\r\n    color: #ccc;\r\n    text-decoration: line-through;\r\n}\r\n\r\n.row.text-level[_ngcontent-%COMP%] {\r\n    margin: 0 -10px 10px;\r\n}\r\n\r\n.store-add-remove[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    padding: 10px;\r\n    float: left;\r\n    width: 100%;\r\n}\r\n\r\n.row.product-slider-box[_ngcontent-%COMP%] {\r\n    border-bottom: 5px solid #ddd;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.carousel-inner[_ngcontent-%COMP%] {\r\n    height: 278px;\r\n}\r\n\r\n.carousel-item[_ngcontent-%COMP%] {\r\n    margin-right: 0;\r\n    border: 1px solid #f8f9fa;\r\n    background: #fff;\r\n}\r\n\r\n.product-slider-box[_ngcontent-%COMP%]   .domain-product[_ngcontent-%COMP%] {\r\n    max-width: 23%;\r\n}\r\n\r\n.product-slider-box[_ngcontent-%COMP%]   .sub-domain-product[_ngcontent-%COMP%] {\r\n    max-width: 77%;\r\n}\r\n\r\n.store-add-remove[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n    font-size: 11px;\r\n    text-align: center;\r\n    float: left;\r\n    transition: all .5s;\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n    min-width: 65px;\r\n}\r\n\r\n.store-add-remove[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] + .btn[_ngcontent-%COMP%] {\r\n    float: right;\r\n}\r\n\r\n.item-subitem-list[_ngcontent-%COMP%]   .pro-box[_ngcontent-%COMP%] {\r\n    width: 99%;\r\n    overflow: auto;\r\n    height: 300px;\r\n}\r\n\r\n.item-subitem-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    float: left;\r\n}\r\n\r\n.item-box[_ngcontent-%COMP%] {\r\n    max-width: 225px;\r\n    width: 100%;\r\n    float: left;\r\n}\r\n\r\n.sub-item-box[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    float: left;\r\n    max-width: 225px;\r\n}\r\n\r\n.sub-item-box[_ngcontent-%COMP%]   .add_to_cart[_ngcontent-%COMP%]   button.btn[_ngcontent-%COMP%] {\r\n    background: #000064;\r\n    height: 35px;\r\n    font-size: 13px;\r\n    line-height: 16px;\r\n    color: #fff;\r\n    border-radius: 25px;\r\n    margin: 10px 0 0;\r\n    width: 100%;\r\n    text-align: center;\r\n}\r\n\r\n.add_to_cart[_ngcontent-%COMP%] {\r\n    .remove-btn {\r\n        border-radius: 50%;\r\n        background: #05054ead !important;\r\n        color: #fff;\r\n        height: 35px;\r\n        padding: 0;\r\n    }\r\n    .btn+.btn {\r\n        width: 100%;\r\n        border: 0;\r\n        border-radius: 30px;\r\n        font-size: 15px;\r\n        line-height: normal;\r\n        font-weight: 600;\r\n    }\r\n}\r\n\r\n.middle-arrow[_ngcontent-%COMP%] {\r\n    float: left;\r\n    width: 30px;\r\n    height: 50px;\r\n    font-size: 40px;\r\n    margin-top: 10%;\r\n    color: #dee2e6;\r\n    text-align: center;\r\n}\r\n\r\n.price-details[_ngcontent-%COMP%] {\r\n    float: left;\r\n    width: 100%;\r\n    margin-bottom: 10px;\r\n    font-size: 15px;\r\n    line-height: normal;\r\n    font-weight: 600;\r\n    .unit-price {\r\n        float: left;\r\n        width: 42%;\r\n    }\r\n}\r\n\r\n.unit-price[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    display: block;\r\n    font-size: 12px;\r\n    font-weight: 400;\r\n}\r\n\r\n.whole-sale-price[_ngcontent-%COMP%] {\r\n    float: right;\r\n    width: 58%;\r\n    text-align: right;\r\n    span {\r\n        font-size: 12px;\r\n        display: block;\r\n        font-weight: 400;\r\n    }\r\n}\r\n\r\n.add_to_cart[_ngcontent-%COMP%] {\r\n    clear: both;\r\n}\r\n\r\n.subItem-field[_ngcontent-%COMP%] {\r\n    width: calc(100% - 280px);\r\n    float: left;\r\n}\r\n\r\n.item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n\r\n.pro-box.active[_ngcontent-%COMP%] {\r\n    border: 1px solid #63030c;\r\n}\r\n\r\n.p-details[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\r\n    font-size: 13px;\r\n    padding: 0 5px;\r\n    min-height: 25px;\r\n    height: 25px;\r\n    text-align: center;\r\n}\r\n\r\n.p-details[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n    margin-bottom: 0;\r\n    font-weight: 400;\r\n    line-height: normal;\r\n    padding-top: 2px;\r\n    padding-bottom: 2px;\r\n}\r\n\r\n.p-details[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\r\n    margin-bottom: 4px;\r\n}\r\n\r\n.sub-item-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    margin-top: 5px !important;\r\n}\r\n\r\n.p-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n    line-height: 14px;\r\n}\r\n\r\n.add-stock[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    display: inline-block !important;\r\n    width: 60px !important;\r\n    margin-left: 5px;\r\n    vertical-align: middle;\r\n}\r\n\r\n.min-alert-count[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    width: 35px;\r\n    margin-left: 5px;\r\n    display: inline-block;\r\n    margin-right: 4px;\r\n}\r\n\r\n.d-flex[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] + span[_ngcontent-%COMP%] {\r\n    margin-left: auto;\r\n    font-weight: 600;\r\n    width: 60px;\r\n    i {\r\n        font-size: 16px;\r\n        color: #bd2130;\r\n        display: inline-block;\r\n        position: relative;\r\n        top: 2px;\r\n        cursor: pointer;\r\n    }\r\n}\r\n\r\n.sub-item-box[_ngcontent-%COMP%]   .pro-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    height: 65px;\r\n    width: 65px;\r\n    margin: 20px auto 10px;\r\n}\r\n\r\n.links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    display: block;\r\n    color: #17a2b8 !important;\r\n    text-decoration: underline !important;\r\n    font-size: 12px;\r\n    cursor: pointer;\r\n}\r\n\r\n.modal-header[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    margin: 5px 0;\r\n    color: #bd2130;\r\n}\r\n\r\n.field[_ngcontent-%COMP%] {\r\n    margin-bottom: 10px;\r\n    select {\r\n        border: 1px solid #ddd;\r\n        border-radius: 3px;\r\n        height: 26px;\r\n        font-size: 12px;\r\n        margin-left: 10px;\r\n        margin-top: -4px;\r\n        width: 60px;\r\n    }\r\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AddStoreProductsInventoryComponent, [{
        type: Component,
        args: [{ selector: 'app-add-store-products-inventory', template: "<div class=\"main-content-area\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <h1 class=\"heading-title\">Adding my Product Inventory</h1>\r\n        </div>\r\n    </div>\r\n    <form [formGroup]=\"webStoreForm\">\r\n        <div class=\"row topLevel\">\r\n            <div class=\"col-md-4\">\r\n\r\n                <div class=\"form-group\">\r\n                    <label>Store</label>\r\n                    <div class=\"form-control form-level no-border\">\r\n                        {{storeName}}\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n                <div class=\"form-group\">\r\n                    <label>Select my Store Product-Line</label>\r\n                    <select class=\"form-control\" (change)=\"onretailDropshipStoreChange($event)\" formControlName=\"RETAIL_D2C_PRODUCT_ID\">\r\n            <option value=\"\">Select</option>\r\n            <option *ngFor=\"let productline of productLineList\" [value]=\"productline.RETAIL_D2C_PRODUCT_ID\">{{productline.RETAIL_D2C_PRODUCT_NAME}}\r\n            </option>\r\n          </select>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n                <div class=\"form-group\">\r\n                    <label>Select Store Item</label>\r\n\r\n                    <select formControlName=\"itemId\" class=\"form-control\" (change)=\"onPItemChange($event)\">\r\n                        <option selected value=\"\">Select</option>\r\n                        <option *ngFor=\"let productItem of itemLists\" [ngValue]=\"productItem.RETAIL_D2C_ITEM_ID\">{{productItem.RETAIL_D2C_ITEM_NAME}}\r\n                       </option>\r\n          </select>\r\n\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-12\">\r\n                <button [disabled]=\"btnDisabled\" type=\"button\" (click)=\"getAllItemSubItemAvailableForInventory()\" class=\"btn custom-btn float-right\">Display Store Product Line Item Sub-Item</button>\r\n            </div>\r\n        </div>\r\n    </form>\r\n    <div class=\"box productLevel\" *ngIf=\"showWebstore\">\r\n        <div class=\"row text-level\">\r\n            <div class=\"col-md-12\">\r\n\r\n                <div class=\"search-field-list\">\r\n                    <div class=\"search-list-label\">Store: <span>{{storeName}}</span>\r\n                    </div>\r\n                    <div class=\"search-list-label\">Product Line: <span>{{productName}}</span>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"item-subitem-list\">\r\n            <ul>\r\n                <li *ngFor=\"let storeitem of filterItemList\">\r\n\r\n                    <div class=\"pro-box storeitem item-box\">\r\n\r\n                        <img src=\"{{imgURL}}{{storeitem.ItemImagePath | slice:1:-4}}jpeg\" />\r\n                        <div class=\"p-details\">\r\n                            <p class=\"p-name\">{{storeitem.ItemName}}</p>\r\n                            <p class=\"item-id\">Item ID: <b>{{storeitem.ItemId}}</b></p>\r\n                        </div>\r\n\r\n                    </div>\r\n\r\n                    <div class=\"middle-arrow\"><i class=\"fa fa-angle-double-right\"></i></div>\r\n\r\n                    <div *ngFor=\"let storesubitem of productLineInventoryList | paginate: { itemsPerPage: 3, currentPage: p }; let i = index\" class=\"sub-item-box\">\r\n\r\n                        <div class=\"pro-box\" [ngClass]=\"{'active': storesubitem.isSelected === true}\">\r\n\r\n                            <img src=\"{{imgURL}}{{storesubitem.SubItemImagePath | slice:1:-4}}jpeg\" />\r\n                            <div class=\"p-details\">\r\n                                <p class=\"p-name\">{{storesubitem.SubItemName}}</p>\r\n                                <p class=\"p-name\"><small>{{storesubitem.SubItemSize}}</small></p>\r\n\r\n\r\n\r\n\r\n                                <p class=\"d-flex inStock\"><span>In-Stock:</span>\r\n                                    <span *ngIf=\"storesubitem.RETAIL_D2C_STOCK_HOLDER_SUBITEM_IN_STOCK_FLG == true; else elseStock\"><i class=\"ti-check-box\"></i></span>\r\n                                    <ng-template #elseStock><span><i class=\"ti-close\"></i></span></ng-template>\r\n                                </p>\r\n                                <p class=\"d-flex\"><span>SKU#:</span> <span>{{storesubitem.RETAIL_D2C_STOCK_SUBITEM_SKU_CODE}}</span></p>\r\n                                <p class=\"d-flex\"><span>Minimum Inventory Alet:</span>\r\n                                    <span *ngIf=\"storesubitem.RETAIL_D2C_STOCK_HOLDER_SUBITEM_STOCK_MIN_ALERT_FLG == true; else elseMIA\">Yes</span>\r\n                                    <ng-template #elseMIA><span>No</span></ng-template>\r\n                                </p>\r\n                                <p class=\"d-flex\"><span>Current Stock in Webstore:</span> <span>{{storesubitem.RETAIL_D2C_STOCK_HOLDR_INVENTRY_ON_HAND}} Units</span></p>\r\n                                <p class=\"d-flex\"><span>All-Day WMS:</span> <span>No</span></p>\r\n                                <p class=\"add-stock d-flex\"><span>Add Stock in Store:</span>\r\n                                    <span><input type=\"number\" name=\"stockinStore{{i}}\" (keyup)=\"onKeyInput($event)\" class=\"form-control\" /></span></p>\r\n                                <p class=\"min-alert-count d-flex\"><span>Min Alert Count:</span>\r\n                                    <span><input disabled type=\"number\" value=\"{{storesubitem.RETAIL_D2C_STOCK_HOLDR_MIN_INVNTRY_OFFICE_ALRT_SET_COUNT}}\" class=\"form-control\" />\r\n                                    <i (click)=\"openModal(alertCountTemplate, storesubitem.SubItemId)\" class=\"ti-pencil-alt\"></i></span></p>\r\n                            </div>\r\n                            <div class=\"links\">\r\n                                <a (click)=\"publicViewModal(publicViewTemplate, storesubitem.SubItemId)\">Check Public View</a>\r\n                                <a>Add Size Matrix & Store SKU#</a>\r\n                                <a>Add other Details</a>\r\n                                <a (click)=\"openActModal(storesubitem.SubItemId)\">De-activation & Re-activation</a>\r\n                                <a (click)=\"openModalTopPick(topPickTemplate, storesubitem.SubItemId)\">Add/Edit to Top-Pick</a>\r\n                                <a (click)=\"openModalNewSelf(newSelfTemplate, storesubitem.SubItemId)\">Add/Edit to New on-Self</a>\r\n                            </div>\r\n                            <div class=\"add_to_cart\">\r\n                                <button (click)=\"SaveDropShipItemSubItemSaveInventory(storesubitem.ItemId, storesubitem.SubItemId)\" type=\"button\" class=\"btn\">\r\n                                    Add Inventory to Store\r\n                                </button>\r\n\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                </li>\r\n            </ul>\r\n\r\n\r\n\r\n\r\n        </div>\r\n        <div class=\"row pull-right\">\r\n            <div class=\"col-md-12\">\r\n                <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n\r\n</div>\r\n\r\n<ng-template #alertCountTemplate>\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"modal-title pull-left\">Add Alert Count</h4>\r\n        <button type=\"button\" class=\"btn-close close pull-right\" aria-label=\"Close\" (click)=\"modalRef?.hide()\">\r\n        <span aria-hidden=\"true\" class=\"visually-hidden\">&times;</span>\r\n      </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <div class=\"form-group\">\r\n            <label class=\"form-label\">Min. Alert Count</label>\r\n            <input type=\"number\" name=\"minalertCount\" [(ngModel)]=\"minalertCount\" class=\"form-control\" />\r\n        </div>\r\n        <button (click)=\"minAlertCount()\" class=\"btn custom-btn\">Save</button>\r\n    </div>\r\n</ng-template>\r\n\r\n<ng-template #publicViewTemplate>\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"modal-title pull-left\">Public View</h4> <i class=\"ti-pencil-alt\"></i>\r\n        <button type=\"button\" class=\"btn-close close pull-right\" aria-label=\"Close\" (click)=\"modalRef?.hide()\">\r\n        <span aria-hidden=\"true\" class=\"visually-hidden\">&times;</span>\r\n      </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <form [formGroup]=\"publicViewForm\">\r\n            <ul class=\"list-group\">\r\n                <li class=\"list-group-item d-flex justify-content-between align-items-center\">\r\n                    SubItem ID\r\n                    <span>{{subItemId}}</span>\r\n                </li>\r\n                <li class=\"list-group-item d-flex justify-content-between align-items-center\">\r\n                    Publicaly Available\r\n                    <select class=\"form-select\" formControlName=\"RETAIL_D2C_STORE_ITEM_SUBITEM_MARKETPLACE_PUBLISH_APPROVAL_GRANTED_FLG\">\r\n                <option value=true>Yes</option>\r\n                <option value=false>No</option>\r\n              </select>\r\n                </li>\r\n                <li class=\"list-group-item d-flex justify-content-between align-items-center\">\r\n                    Set Restricted view time\r\n                    <select class=\"form-select\" formControlName=\"RETAIL_D2C_STORE_ITEM_SUBITEM_PUBLISH_APPROVAL_TIME_LIMIT_MINUTE\">\r\n                <option value=\"5\">5 mins</option>\r\n                <option value=\"10\">10 mins</option>\r\n                <option value=\"15\">15 mins</option>\r\n                <option value=\"20\">20 mins</option>\r\n                <option value=\"30\">30 mins</option>\r\n                <option value=\"40\">40 mins</option>\r\n                <option value=\"50\">50 mins</option>\r\n                <option value=\"60\">60 mins</option>\r\n              </select>\r\n                </li>\r\n            </ul>\r\n        </form>\r\n        <button (click)=\"EditSubitemPublicViewStatus()\" class=\"btn custom-btn pull-right mt-3 w-100\">Update</button>\r\n    </div>\r\n</ng-template>\r\n\r\n<ng-template #topPickTemplate>\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"modal-title pull-left\">SubItem on top Pick List</h4>\r\n        <button type=\"button\" class=\"btn-close close pull-right\" (click)=\"modalRef?.hide()\">\r\n        <span aria-hidden=\"true\" class=\"visually-hidden\">&times;</span>\r\n      </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <div *ngIf=\"showError\" class=\"alert alert-danger\" role=\"alert\">\r\n            {{noTopPick}}\r\n        </div>\r\n        <div class=\"topListData\" *ngFor=\"let data of topPickList\">\r\n            <p>Subitem ID: {{data.RETAIL_TOPPICK_SUBITEM_ID}}</p>\r\n            <form [formGroup]=\"topPickForm\">\r\n                <div class=\"field d-flex\">\r\n                    <p>Available on Top Pick List</p>\r\n                    <select class=\"form-select\" formControlName=\"Active_Flg\" (change)=\"onTopPickChange($event)\">\r\n                        <option value='true'>Yes</option>\r\n                        <option value='false'>No</option>\r\n                    </select>\r\n\r\n\r\n                </div>\r\n                <button (click)=\"updateSubitemTopPick(data.RETAIL_STORE_TOPPICKS_ID, data.RETAIL_TOPPICK_SUBITEM_ID)\" class=\"btn custom-btn float-right\">Update TopPick</button>\r\n\r\n            </form>\r\n\r\n        </div>\r\n\r\n        <button *ngIf=\"showError\" (click)=\"addSubitemTopPick(subItemId)\" class=\"btn custom-btn float-right\">Add TopPick</button>\r\n    </div>\r\n</ng-template>\r\n\r\n<ng-template #newSelfTemplate>\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"modal-title pull-left\">SubItem on New on Self</h4>\r\n        <button type=\"button\" class=\"btn-close close pull-right\" (click)=\"modalRef?.hide()\">\r\n        <span aria-hidden=\"true\" class=\"visually-hidden\">&times;</span>\r\n      </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <div *ngIf=\"showError1\" class=\"alert alert-danger\" role=\"alert\">\r\n            {{newSelftxt}}\r\n        </div>\r\n        <div class=\"topListData\" *ngFor=\"let data of newSelfData\">\r\n            <p>Subitem ID: {{data.RETAIL_NEW_ON_SHELF_SUBITEM_ID}}</p>\r\n            <form [formGroup]=\"newSelfForm\">\r\n                <div class=\"field d-flex\">\r\n                    <p>Available on New on Self</p>\r\n                    <select class=\"form-select\" formControlName=\"Active_Flg\" (change)=\"onnewSelfChange($event)\">\r\n                    <option value='true'>Yes</option>\r\n                    <option value='false'>No</option>\r\n                </select>\r\n                </div>\r\n                <button (click)=\"updateSubitemNewonShelf(data.RETAIl_STORE_NEW_ON_SHELF_ID, data.RETAIL_NEW_ON_SHELF_SUBITEM_ID)\" class=\"btn custom-btn float-right\">Update NewSelf</button>\r\n\r\n            </form>\r\n        </div>\r\n\r\n        <button *ngIf=\"showError1\" (click)=\"addSubitemNewonShelf(subItemId)\" class=\"btn custom-btn float-right\">Add NewSelf</button>\r\n    </div>\r\n</ng-template>", styles: ["h1.heading-title {\r\n    margin: 20px 0 0;\r\n}\r\n\r\n.heading h2 {\r\n    padding: 10px 5px 10px;\r\n    font-size: 20px;\r\n}\r\n\r\n.row.topLevel {\r\n    background: #fff;\r\n    padding: 20px 0;\r\n    margin: 0;\r\n    border-radius: 5px;\r\n}\r\n\r\n.heading.store-domain {\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.store-domain div {\r\n    display: inline-block;\r\n    margin-right: 20px;\r\n}\r\n\r\n.store-domain span {\r\n    background: #ddd;\r\n    padding: 5px 20px;\r\n    font-size: 13px;\r\n    border-radius: 20px;\r\n    display: inline-block;\r\n    font-weight: bold;\r\n    margin-left: 5px;\r\n}\r\n\r\n.store_id {\r\n    background: #ddd;\r\n    padding: 5px 20px;\r\n    border-radius: 20px;\r\n    font-size: 13px;\r\n    font-weight: 700;\r\n    float: right;\r\n    margin-top: -40px;\r\n}\r\n\r\n.box {\r\n    width: 100%;\r\n    overflow: hidden;\r\n    box-shadow: 0 0 4px 0px #eee;\r\n    margin: 20px 0 5px;\r\n    border-radius: 4px;\r\n    padding: 10px;\r\n    background: #fff;\r\n}\r\n\r\n.main-content-area .box .col {\r\n    width: 20%;\r\n    float: left;\r\n    padding: 0;\r\n}\r\n\r\n.fa-star:before {\r\n    content: \"\\f005\";\r\n    color: #ff9600;\r\n    margin-right: 5px;\r\n}\r\n\r\n.pro-box {\r\n    box-shadow: 0 0 4px 0 #e9ecef;\r\n    margin: 0 10px 20px;\r\n    overflow: hidden;\r\n    padding: 15px;\r\n    border-radius: 3px;\r\n    position: relative;\r\n    border: 1px solid #dee2e6;\r\n}\r\n\r\n.pro-box img {\r\n    height: 100px;\r\n    width: 100px;\r\n    margin: 30px auto 15px;\r\n    display: block;\r\n}\r\n\r\n.storeitem .p-details {\r\n    margin-bottom: 42px;\r\n}\r\n\r\np.label-txt {\r\n    text-align: center;\r\n    padding: 10px;\r\n    font-size: 14px;\r\n    margin: 0;\r\n}\r\n\r\n.store-available-product .col {\r\n    width: 25% !important;\r\n}\r\n\r\n.selected-productLine h5,\r\n.store-available-product h5 {\r\n    font-size: 16px;\r\n    padding: 0 10px 5px;\r\n}\r\n\r\n.right-field-head {\r\n    float: right;\r\n    margin-top: 10px;\r\n}\r\n\r\n.right-field-head li {\r\n    display: inline-block;\r\n    padding: 0 10px;\r\n}\r\n\r\nspan.video,\r\nspan.doc {\r\n    padding: 8px 15px;\r\n    background: #dee2e6;\r\n    font-size: 12px;\r\n    border-radius: 20px;\r\n}\r\n\r\n.right-field-head .btn {\r\n    font-size: 11px;\r\n    border-radius: 20px;\r\n}\r\n\r\n.bottom-btn .btn {\r\n    line-height: 11px;\r\n}\r\n\r\n.box.prduct-gallery {\r\n    position: relative;\r\n}\r\n\r\n.sample-img {\r\n    position: absolute;\r\n    z-index: 1;\r\n    left: 15%;\r\n    top: 28%;\r\n    transform: rotate(-45deg);\r\n}\r\n\r\np.p-name {\r\n    text-align: center;\r\n    margin: 0;\r\n    font-size: 13px;\r\n    font-weight: 500;\r\n    vertical-align: middle;\r\n}\r\n\r\np.item-id {\r\n    text-align: center;\r\n    position: absolute;\r\n    top: 0;\r\n    background: #212529;\r\n    left: 0;\r\n    font-weight: 600;\r\n    color: #fff;\r\n    border-radius: 0 0 5px;\r\n    font-size: 11px;\r\n    padding: 3px 6px;\r\n}\r\n\r\nspan.price {\r\n    font-size: 12px;\r\n    padding: 7px 10px 0;\r\n    float: left;\r\n    font-weight: 600;\r\n    line-height: 20px;\r\n}\r\n\r\n.item-id b {\r\n    font-weight: 600;\r\n}\r\n\r\n.instock {\r\n    font-size: 12px;\r\n    text-align: center;\r\n    margin: 0 0 3px;\r\n    position: absolute;\r\n    top: 5%;\r\n    box-shadow: 0 0 30px 0 rgb(82 63 105 / 10%);\r\n    left: 70%;\r\n    background: rgb(224 152 152 / 24%);\r\n    width: 50px;\r\n    border: 1px solid rgb(0 0 0 / 10%);\r\n    height: 50px;\r\n    border-radius: 50%;\r\n    img {\r\n        width: 30px !important;\r\n        height: 30px !important;\r\n        margin: 9px auto;\r\n    }\r\n}\r\n\r\n.pro-box.storeitem.item-box {\r\n    border: 1px solid #dee2e6;\r\n    height: 320px;\r\n    padding-left: 40px;\r\n    padding-right: 40px;\r\n}\r\n\r\nh1.heading-title {\r\n    font-size: 20px;\r\n    text-transform: uppercase;\r\n    font-weight: 700;\r\n    color: #ff7900;\r\n    position: relative;\r\n    margin-bottom: 10px;\r\n    width: 100%;\r\n    span {\r\n        font-size: 10px;\r\n        text-transform: inherit;\r\n        background: #495057;\r\n        color: #fff;\r\n        padding: 10px 15px;\r\n        border-radius: 25px;\r\n    }\r\n}\r\n\r\nh1.heading-title img {\r\n    max-width: 65px;\r\n    margin-right: 5px;\r\n}\r\n\r\nh1.heading-title small {\r\n    display: inline-block;\r\n    font-weight: 400;\r\n    font-size: 13px;\r\n    position: absolute;\r\n    left: 80px;\r\n    bottom: 4px;\r\n    color: grey;\r\n}\r\n\r\n.offerDiv {\r\n    position: absolute;\r\n    top: 5px;\r\n    right: 5px;\r\n    font-size: 10px;\r\n    background: #dc3545;\r\n    line-height: 10px;\r\n    font-weight: 700;\r\n    width: 35px;\r\n    height: 35px;\r\n    border-radius: 50%;\r\n    padding: 9px;\r\n    text-align: center;\r\n    color: #fff;\r\n}\r\n\r\n.offerDiv small {\r\n    display: block;\r\n}\r\n\r\nspan.price.strike-price {\r\n    color: #ccc;\r\n    text-decoration: line-through;\r\n}\r\n\r\n.row.text-level {\r\n    margin: 0 -10px 10px;\r\n}\r\n\r\n.store-add-remove {\r\n    text-align: center;\r\n    padding: 10px;\r\n    float: left;\r\n    width: 100%;\r\n}\r\n\r\n.row.product-slider-box {\r\n    border-bottom: 5px solid #ddd;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.carousel-inner {\r\n    height: 278px;\r\n}\r\n\r\n.carousel-item {\r\n    margin-right: 0;\r\n    border: 1px solid #f8f9fa;\r\n    background: #fff;\r\n}\r\n\r\n.product-slider-box .domain-product {\r\n    max-width: 23%;\r\n}\r\n\r\n.product-slider-box .sub-domain-product {\r\n    max-width: 77%;\r\n}\r\n\r\n.store-add-remove .btn {\r\n    font-size: 11px;\r\n    text-align: center;\r\n    float: left;\r\n    transition: all .5s;\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n    min-width: 65px;\r\n}\r\n\r\n.store-add-remove .btn+.btn {\r\n    float: right;\r\n}\r\n\r\n.item-subitem-list .pro-box {\r\n    width: 99%;\r\n    overflow: auto;\r\n    height: 300px;\r\n}\r\n\r\n.item-subitem-list li {\r\n    width: 100%;\r\n    float: left;\r\n}\r\n\r\n.item-box {\r\n    max-width: 225px;\r\n    width: 100%;\r\n    float: left;\r\n}\r\n\r\n.sub-item-box {\r\n    width: 100%;\r\n    float: left;\r\n    max-width: 225px;\r\n}\r\n\r\n.sub-item-box .add_to_cart button.btn {\r\n    background: #000064;\r\n    height: 35px;\r\n    font-size: 13px;\r\n    line-height: 16px;\r\n    color: #fff;\r\n    border-radius: 25px;\r\n    margin: 10px 0 0;\r\n    width: 100%;\r\n    text-align: center;\r\n}\r\n\r\n.add_to_cart {\r\n    .remove-btn {\r\n        border-radius: 50%;\r\n        background: #05054ead !important;\r\n        color: #fff;\r\n        height: 35px;\r\n        padding: 0;\r\n    }\r\n    .btn+.btn {\r\n        width: 100%;\r\n        border: 0;\r\n        border-radius: 30px;\r\n        font-size: 15px;\r\n        line-height: normal;\r\n        font-weight: 600;\r\n    }\r\n}\r\n\r\n.middle-arrow {\r\n    float: left;\r\n    width: 30px;\r\n    height: 50px;\r\n    font-size: 40px;\r\n    margin-top: 10%;\r\n    color: #dee2e6;\r\n    text-align: center;\r\n}\r\n\r\n.price-details {\r\n    float: left;\r\n    width: 100%;\r\n    margin-bottom: 10px;\r\n    font-size: 15px;\r\n    line-height: normal;\r\n    font-weight: 600;\r\n    .unit-price {\r\n        float: left;\r\n        width: 42%;\r\n    }\r\n}\r\n\r\n.unit-price span {\r\n    display: block;\r\n    font-size: 12px;\r\n    font-weight: 400;\r\n}\r\n\r\n.whole-sale-price {\r\n    float: right;\r\n    width: 58%;\r\n    text-align: right;\r\n    span {\r\n        font-size: 12px;\r\n        display: block;\r\n        font-weight: 400;\r\n    }\r\n}\r\n\r\n.add_to_cart {\r\n    clear: both;\r\n}\r\n\r\n.subItem-field {\r\n    width: calc(100% - 280px);\r\n    float: left;\r\n}\r\n\r\n.item img {\r\n    width: 100%;\r\n}\r\n\r\n.pro-box.active {\r\n    border: 1px solid #63030c;\r\n}\r\n\r\n.p-details .form-control {\r\n    font-size: 13px;\r\n    padding: 0 5px;\r\n    min-height: 25px;\r\n    height: 25px;\r\n    text-align: center;\r\n}\r\n\r\n.p-details .form-group label {\r\n    margin-bottom: 0;\r\n    font-weight: 400;\r\n    line-height: normal;\r\n    padding-top: 2px;\r\n    padding-bottom: 2px;\r\n}\r\n\r\n.p-details .form-group {\r\n    margin-bottom: 4px;\r\n}\r\n\r\n.sub-item-box img {\r\n    margin-top: 5px !important;\r\n}\r\n\r\n.p-details p {\r\n    font-size: 12px;\r\n    line-height: 14px;\r\n}\r\n\r\n.add-stock input {\r\n    display: inline-block !important;\r\n    width: 60px !important;\r\n    margin-left: 5px;\r\n    vertical-align: middle;\r\n}\r\n\r\n.min-alert-count input {\r\n    width: 35px;\r\n    margin-left: 5px;\r\n    display: inline-block;\r\n    margin-right: 4px;\r\n}\r\n\r\n.d-flex span+span {\r\n    margin-left: auto;\r\n    font-weight: 600;\r\n    width: 60px;\r\n    i {\r\n        font-size: 16px;\r\n        color: #bd2130;\r\n        display: inline-block;\r\n        position: relative;\r\n        top: 2px;\r\n        cursor: pointer;\r\n    }\r\n}\r\n\r\n.sub-item-box .pro-box img {\r\n    height: 65px;\r\n    width: 65px;\r\n    margin: 20px auto 10px;\r\n}\r\n\r\n.links a {\r\n    display: block;\r\n    color: #17a2b8 !important;\r\n    text-decoration: underline !important;\r\n    font-size: 12px;\r\n    cursor: pointer;\r\n}\r\n\r\n.modal-header i {\r\n    margin: 5px 0;\r\n    color: #bd2130;\r\n}\r\n\r\n.field {\r\n    margin-bottom: 10px;\r\n    select {\r\n        border: 1px solid #ddd;\r\n        border-radius: 3px;\r\n        height: 26px;\r\n        font-size: 12px;\r\n        margin-left: 10px;\r\n        margin-top: -4px;\r\n        width: 60px;\r\n    }\r\n}"] }]
    }], function () { return [{ type: i1.ApiService }, { type: i2.ToastrService }, { type: i3.FormBuilder }, { type: i4.BsModalService }, { type: i5.HttpClient }]; }, null); })();
//# sourceMappingURL=add-store-products-inventory.component.js.map