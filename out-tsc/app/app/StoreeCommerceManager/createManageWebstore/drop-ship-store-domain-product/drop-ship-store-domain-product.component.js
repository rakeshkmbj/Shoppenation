import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import * as i0 from "@angular/core";
import * as i1 from "src/app/services/api.service";
import * as i2 from "ngx-spinner";
import * as i3 from "ngx-toastr";
import * as i4 from "@angular/forms";
import * as i5 from "@angular/common/http";
import * as i6 from "@angular/common";
import * as i7 from "ngx-pagination";
function DropShipStoreDomainProductComponent_option_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 21);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const productline_r5 = ctx.$implicit;
    i0.ɵɵproperty("value", productline_r5.RETAIL_D2C_PRODUCT_ID);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", productline_r5.RETAIL_D2C_PRODUCT_NAME, " ");
} }
function DropShipStoreDomainProductComponent_option_28_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 22);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const productItem_r6 = ctx.$implicit;
    i0.ɵɵproperty("ngValue", productItem_r6.RETAIL_D2C_ITEM_ID);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", productItem_r6.RETAIL_D2C_ITEM_NAME, " ");
} }
function DropShipStoreDomainProductComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 23)(1, "div", 1)(2, "div", 24)(3, "h4", 25);
    i0.ɵɵtext(4, "Tag my Store");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(5, "div", 1)(6, "div", 2)(7, "h6");
    i0.ɵɵtext(8, "Demographic Based");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div", 26)(10, "button", 27);
    i0.ɵɵtext(11, "Get Tags");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "button", 27);
    i0.ɵɵtext(13, "Add Tags");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "button", 27);
    i0.ɵɵtext(15, "Edit Tags");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "ul", 28)(17, "li", 29)(18, "div", 30);
    i0.ɵɵelement(19, "input", 31);
    i0.ɵɵelementStart(20, "label", 32);
    i0.ɵɵtext(21, " Domain ");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(22, "li", 29)(23, "div", 30);
    i0.ɵɵelement(24, "input", 33);
    i0.ɵɵelementStart(25, "label", 34);
    i0.ɵɵtext(26, " Country ");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(27, "li", 29)(28, "div", 30);
    i0.ɵɵelement(29, "input", 35);
    i0.ɵɵelementStart(30, "label", 36);
    i0.ɵɵtext(31, " State ");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(32, "li", 29)(33, "div", 30);
    i0.ɵɵelement(34, "input", 35);
    i0.ɵɵelementStart(35, "label", 36);
    i0.ɵɵtext(36, " State ");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(37, "li", 29)(38, "div", 30);
    i0.ɵɵelement(39, "input", 37);
    i0.ɵɵelementStart(40, "label", 38);
    i0.ɵɵtext(41, " City ");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(42, "li", 29)(43, "div", 30);
    i0.ɵɵelement(44, "input", 39);
    i0.ɵɵelementStart(45, "label", 40);
    i0.ɵɵtext(46, " Pin Code ");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(47, "li", 29)(48, "div", 30);
    i0.ɵɵelement(49, "input", 41);
    i0.ɵɵelementStart(50, "label", 42);
    i0.ɵɵtext(51, " Near Me ");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(52, "li", 29)(53, "div", 30);
    i0.ɵɵelement(54, "input", 43);
    i0.ɵɵelementStart(55, "label", 44);
    i0.ɵɵtext(56, " Categories ");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(57, "li", 29)(58, "div", 30);
    i0.ɵɵelement(59, "input", 45);
    i0.ɵɵelementStart(60, "label", 46);
    i0.ɵɵtext(61, " Sub-Categories ");
    i0.ɵɵelementEnd()()()()()();
    i0.ɵɵelementStart(62, "div", 47)(63, "div", 2)(64, "h6");
    i0.ɵɵtext(65, "Industry Based");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(66, "div", 26)(67, "button", 27);
    i0.ɵɵtext(68, "Get Tags");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(69, "button", 27);
    i0.ɵɵtext(70, "Add Tags");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(71, "button", 27);
    i0.ɵɵtext(72, "Edit Tags");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(73, "ul", 28)(74, "li", 29)(75, "div", 30);
    i0.ɵɵelement(76, "input", 48);
    i0.ɵɵelementStart(77, "label", 49);
    i0.ɵɵtext(78, " Multi-Designer ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(79, "a");
    i0.ɵɵtext(80, "Add/Edit Designers");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(81, "li", 29)(82, "div", 30);
    i0.ɵɵelement(83, "input", 50);
    i0.ɵɵelementStart(84, "label", 51);
    i0.ɵɵtext(85, " Brands ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(86, "a");
    i0.ɵɵtext(87, "Add/Edit Brands");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(88, "li", 29)(89, "div", 30);
    i0.ɵɵelement(90, "input", 52);
    i0.ɵɵelementStart(91, "label", 53);
    i0.ɵɵtext(92, " New on Racks ");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(93, "li", 29)(94, "div", 30);
    i0.ɵɵelement(95, "input", 54);
    i0.ɵɵelementStart(96, "label", 55);
    i0.ɵɵtext(97, " Popular Items ");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(98, "li", 29)(99, "div", 30);
    i0.ɵɵelement(100, "input", 56);
    i0.ɵɵelementStart(101, "label", 57);
    i0.ɵɵtext(102, " By Occasion ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(103, "a");
    i0.ɵɵtext(104, "Add/Edit Occasion");
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(105, "div", 47)(106, "div", 2)(107, "h6");
    i0.ɵɵtext(108, "Value Economic Based");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(109, "div", 26)(110, "button", 27);
    i0.ɵɵtext(111, "Get Tags");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(112, "button", 27);
    i0.ɵɵtext(113, "Add Tags");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(114, "button", 27);
    i0.ɵɵtext(115, "Edit Tags");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(116, "ul", 28)(117, "li", 29)(118, "div", 30);
    i0.ɵɵelement(119, "input", 58);
    i0.ɵɵelementStart(120, "label", 59);
    i0.ɵɵtext(121, " Price Range ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(122, "a");
    i0.ɵɵtext(123, "Add/Edit Price Range");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(124, "li", 29)(125, "div", 30);
    i0.ɵɵelement(126, "input", 60);
    i0.ɵɵelementStart(127, "label", 61);
    i0.ɵɵtext(128, " Bargain Deals ");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(129, "li", 29)(130, "div", 30);
    i0.ɵɵelement(131, "input", 62);
    i0.ɵɵelementStart(132, "label", 63);
    i0.ɵɵtext(133, " Discounts ");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(134, "li", 29)(135, "div", 30);
    i0.ɵɵelement(136, "input", 64);
    i0.ɵɵelementStart(137, "label", 65);
    i0.ɵɵtext(138, " Store Rating ");
    i0.ɵɵelementEnd()()()()()()();
} }
function DropShipStoreDomainProductComponent_div_37_li_24_div_13_div_1_span_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span")(1, "span", 92);
    i0.ɵɵelement(2, "img", 93);
    i0.ɵɵelementEnd()();
} }
function DropShipStoreDomainProductComponent_div_37_li_24_div_13_div_1_ng_template_8_Template(rf, ctx) { }
function DropShipStoreDomainProductComponent_div_37_li_24_div_13_div_1_span_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span")(1, "span", 92);
    i0.ɵɵelement(2, "img", 93);
    i0.ɵɵelementEnd()();
} }
function DropShipStoreDomainProductComponent_div_37_li_24_div_13_div_1_div_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 94)(1, "div", 95)(2, "span");
    i0.ɵɵtext(3, "Unit MRP");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 96)(6, "span");
    i0.ɵɵtext(7, "Whole Sale MRP");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const storesubitem_r10 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", storesubitem_r10.RETAIL_D2C_SUBITEM_MRP[0].RETAIL_D2C_SUBITEM_RETAIL_BOTTLE_MRP, "\u20B9 ");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", storesubitem_r10.RETAIL_D2C_SUBITEM_MRP[0].RETAIL_D2C_SUBITEM_RETAIL_CASE_WHOLESALE_MRP, "\u20B9 ");
} }
function DropShipStoreDomainProductComponent_div_37_li_24_div_13_div_1_button_19_Template(rf, ctx) { if (rf & 1) {
    const _r24 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 97)(1, "div", 98)(2, "input", 99);
    i0.ɵɵlistener("ngModelChange", function DropShipStoreDomainProductComponent_div_37_li_24_div_13_div_1_button_19_Template_input_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r24); const storesubitem_r10 = i0.ɵɵnextContext(2).$implicit; return i0.ɵɵresetView(storesubitem_r10.isSelected = $event); })("change", function DropShipStoreDomainProductComponent_div_37_li_24_div_13_div_1_button_19_Template_input_change_2_listener() { i0.ɵɵrestoreView(_r24); const ctx_r25 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r25.isAllSelected()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "label", 100);
    i0.ɵɵtext(4, " Add to Store ");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r26 = i0.ɵɵnextContext(2);
    const storesubitem_r10 = ctx_r26.$implicit;
    const i_r11 = ctx_r26.index;
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate("value", storesubitem_r10.isSelected);
    i0.ɵɵpropertyInterpolate1("id", "flexCheckDefault", i_r11, "");
    i0.ɵɵproperty("ngModel", storesubitem_r10.isSelected);
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate1("for", "flexCheckDefault", i_r11, "");
} }
function DropShipStoreDomainProductComponent_div_37_li_24_div_13_div_1_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 101);
    i0.ɵɵtext(1, "Add to Store");
    i0.ɵɵelementEnd();
} }
const _c0 = function (a0) { return { "active": a0 }; };
function DropShipStoreDomainProductComponent_div_37_li_24_div_13_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "div", 83);
    i0.ɵɵelement(2, "img", 74);
    i0.ɵɵpipe(3, "slice");
    i0.ɵɵelementStart(4, "div", 75)(5, "p", 76);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, DropShipStoreDomainProductComponent_div_37_li_24_div_13_div_1_span_7_Template, 3, 0, "span", 84);
    i0.ɵɵtemplate(8, DropShipStoreDomainProductComponent_div_37_li_24_div_13_div_1_ng_template_8_Template, 0, 0, "ng-template", null, 85, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵtemplate(10, DropShipStoreDomainProductComponent_div_37_li_24_div_13_div_1_span_10_Template, 3, 0, "span", 82);
    i0.ɵɵelementStart(11, "p", 77);
    i0.ɵɵtext(12, "Sub Item ID: ");
    i0.ɵɵelementStart(13, "b");
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(15, DropShipStoreDomainProductComponent_div_37_li_24_div_13_div_1_div_15_Template, 9, 2, "div", 86);
    i0.ɵɵelementStart(16, "div", 87)(17, "button", 88);
    i0.ɵɵelement(18, "i", 89);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(19, DropShipStoreDomainProductComponent_div_37_li_24_div_13_div_1_button_19_Template, 5, 4, "button", 90);
    i0.ɵɵtemplate(20, DropShipStoreDomainProductComponent_div_37_li_24_div_13_div_1_ng_template_20_Template, 2, 0, "ng-template", null, 91, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const _r14 = i0.ɵɵreference(9);
    const _r19 = i0.ɵɵreference(21);
    const storesubitem_r10 = i0.ɵɵnextContext().$implicit;
    const ctx_r12 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(15, _c0, storesubitem_r10.isSelected === true));
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate2("src", "", ctx_r12.imgURL, "", i0.ɵɵpipeBind3(3, 11, storesubitem_r10.RETAIL_D2C_SUBITEM_IMAGE, 1, -4), "jpeg", i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(storesubitem_r10.RETAIL_D2C_SUBITEM_NAME);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", storesubitem_r10.IsAvailable == true)("ngIfElse", _r14);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r12.newSelectedArray.isSelectet == true);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(storesubitem_r10.RETAIL_D2C_SUBITEM_ID);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r12.domainid == 1);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", storesubitem_r10.IsAvailable != true)("ngIfElse", _r19);
} }
function DropShipStoreDomainProductComponent_div_37_li_24_div_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 81);
    i0.ɵɵtemplate(1, DropShipStoreDomainProductComponent_div_37_li_24_div_13_div_1_Template, 22, 17, "div", 82);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const storesubitem_r10 = ctx.$implicit;
    const storeitem_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", storeitem_r8.RETAIL_D2C_ITEM_ID == storesubitem_r10.RETAIL_D2C_ITEM_ID);
} }
const _c1 = function (a1) { return { itemsPerPage: 3, currentPage: a1 }; };
function DropShipStoreDomainProductComponent_div_37_li_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li")(1, "div", 73);
    i0.ɵɵelement(2, "img", 74);
    i0.ɵɵpipe(3, "slice");
    i0.ɵɵelementStart(4, "div", 75)(5, "p", 76);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "p", 77);
    i0.ɵɵtext(8, "Item ID: ");
    i0.ɵɵelementStart(9, "b");
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(11, "div", 78);
    i0.ɵɵelement(12, "i", 79);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(13, DropShipStoreDomainProductComponent_div_37_li_24_div_13_Template, 2, 1, "div", 80);
    i0.ɵɵpipe(14, "paginate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const storeitem_r8 = ctx.$implicit;
    const ctx_r7 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate2("src", "", ctx_r7.imgURL, "", i0.ɵɵpipeBind3(3, 5, storeitem_r8.RETAIl_D2C_ITEM_IMAGE, 1, -4), "jpeg", i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(storeitem_r8.RETAIL_D2C_ITEM_NAME);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(storeitem_r8.RETAIL_D2C_ITEM_ID);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind2(14, 9, ctx_r7.storesubItemList, i0.ɵɵpureFunction1(12, _c1, ctx_r7.p)));
} }
function DropShipStoreDomainProductComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    const _r30 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 66)(1, "div", 67)(2, "div", 2)(3, "h5");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 68)(6, "div", 69);
    i0.ɵɵtext(7, "Store: ");
    i0.ɵɵelementStart(8, "span");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "div", 69);
    i0.ɵɵtext(11, "Product Line: ");
    i0.ɵɵelementStart(12, "span");
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "div", 69);
    i0.ɵɵtext(15, "State: ");
    i0.ɵɵelementStart(16, "span");
    i0.ɵɵtext(17, "xxxxx");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(18, "div", 69);
    i0.ɵɵtext(19, "City: ");
    i0.ɵɵelementStart(20, "span");
    i0.ɵɵtext(21, "xxxxx");
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(22, "div", 70)(23, "ul");
    i0.ɵɵtemplate(24, DropShipStoreDomainProductComponent_div_37_li_24_Template, 15, 14, "li", 71);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "div", 1)(26, "div", 2)(27, "pagination-controls", 72);
    i0.ɵɵlistener("pageChange", function DropShipStoreDomainProductComponent_div_37_Template_pagination_controls_pageChange_27_listener($event) { i0.ɵɵrestoreView(_r30); const ctx_r29 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r29.p = $event); });
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("Webstore ", ctx_r3.txt, "");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r3.showStoreName);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r3.showProductName);
    i0.ɵɵadvance(11);
    i0.ɵɵproperty("ngForOf", ctx_r3.storeItemList);
} }
function DropShipStoreDomainProductComponent_div_38_Template(rf, ctx) { if (rf & 1) {
    const _r32 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 1)(1, "div", 2)(2, "button", 102);
    i0.ɵɵlistener("click", function DropShipStoreDomainProductComponent_div_38_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r32); const ctx_r31 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r31.cnfAlert()); });
    i0.ɵɵelement(3, "i", 103);
    i0.ɵɵtext(4, " Update my Store Product Line");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", ctx_r4.isitemChecked);
} }
export class DropShipStoreDomainProductComponent {
    constructor(apiService, spinner, toastr, formBuilder, http) {
        this.apiService = apiService;
        this.spinner = spinner;
        this.toastr = toastr;
        this.formBuilder = formBuilder;
        this.http = http;
        // baseURL: string = "https://www.shoppenation.in/alcoolretail/carryr/retail";
        this.imgURL = this.apiService.imgURL;
        this.isValid = true;
        this.itemsPerSlide = 4;
        this.singleSlideOffset = true;
        this.noWrap = false;
        this.slidesChangeMessage = '';
        this.mobileBreakpoint = 480;
        this.storesubItemList = [];
        this.p = 1;
        this.collection = [];
        this.isitemChecked = true;
        this.newSelectedArray = [];
        this.masterSelected = false;
        this.getlogindata = localStorage.getItem('logindata');
        this.domainid = localStorage.getItem('getDomainID');
        this.getlogindata = JSON.parse(this.getlogindata);
        this.accountid = this.getlogindata.RETAIL_D2C_ACCT_ID;
        this.subaccountid = this.getlogindata.RETAIL_D2C_USR_SUBACCT_ID;
        this.storeid = this.getlogindata.RETAIL_D2C_ACCT_INTRNL_OFFICE_REGID;
        this.storeName = this.getlogindata.RETAIL_D2C_SUBACCT_OFFICE_NAME;
    }
    ngOnInit() {
        this.adjustsItemsPerSlide();
        this.storeList();
        this.getProductLineList();
        this.webStoreForm = this.formBuilder.group({
            ACCT_ID: ['', Validators.required],
            SUBACCT_ID: ['', Validators.required],
            SUBACCT_OFFICE_ID: ['', Validators.required],
            RETAIL_D2C_DOMAIN_ID: ['', Validators.required],
            RETAIL_D2C_PRODUCT_ID: ['', Validators.required],
            itemId: ['', Validators.required],
            ProductId: '',
            Image: [''],
        });
    }
    adjustsItemsPerSlide() {
        this.innerWidth = window.innerWidth;
        if (this.innerWidth < this.mobileBreakpoint) {
            this.itemsPerSlide = 1;
        }
        else {
            this.itemsPerSlide = 3;
        }
    }
    storeList() {
        this.apiService.getCall(this.apiService.baseURL + '/GetRetailStoresByAccountSubAccount' + "/" + this.accountid + "/" + this.subaccountid)
            .subscribe(data => {
            console.log(data);
            this.retailStoreList = data;
        }, (error) => {
            this.toastr.error(error.error.Message, '', {
                timeOut: 5000,
            });
        });
    }
    getProductLineList() {
        this.apiService.getCall(this.apiService.baseURL + '/GetAllDomainSuperStoreProductLine')
            // this.apiService.getCall(this.apiService.baseURL + '/GetStoreProductLines/' + this.accountid +"/"+ this.subaccountid +"/"+ this.storeid)
            .subscribe(data => {
            this.productLineList = data;
            console.log(data);
            //  let domainID = this.domainid;
            //  this.productLineList =  data.filter(function(domain) {
            //   return domain.DomainId == domainID;
            // });
        });
    }
    onStoreChange(e) {
        this.showWebstore = false;
        this.officeID = this.webStoreForm.value.SUBACCT_OFFICE_ID;
        this.storeName = e.target.options[e.target.options.selectedIndex].text;
        //this.state = e.
        console.log(this.officeID);
    }
    // retailDropshipStore() {
    //   this.apiService.getCall(this.apiService.baseURL + '/GetRetailDropshipStore').subscribe(data => {
    //        this.retailDropshipList = data;
    //         console.log(data);
    //    })
    //  }
    onretailDropshipStoreChange(e) {
        this.productID = this.webStoreForm.value.RETAIL_D2C_PRODUCT_ID;
        this.productName = e.target.options[e.target.options.selectedIndex].text;
        console.log(this.productID);
        if (this.webStoreForm.value.RETAIL_D2C_PRODUCT_ID != '') {
            this.itemList();
        }
        this.showWebstore = false;
    }
    itemList() {
        this.apiService.getCall(this.apiService.baseURL + '/GetSuperStoreProductItems/' + this.productID)
            .subscribe(data => {
            this.brandOrgList = data;
            console.log(this.brandOrgList);
        }, (error) => {
            console.log(error);
            this.brandOrgList = [];
            this.toastr.error(error.error, '', {
                timeOut: 5000,
            });
        });
    }
    onPItemChange(e) {
        // this.showloader= true;
        this.itemId = this.webStoreForm.value.itemId;
        if (this.itemId != "") {
            // this.showloader= false;
            // this.GetSuperStoreDropShipSubItems();
        }
        else {
            // this.empty = true;
        }
    }
    showWebStore(webstoreText) {
        this.txt = webstoreText;
        this.spinner.show();
        this.showStoreName = this.storeName;
        this.showProductName = this.productName;
        let manageWebStoreData = {
            ACCT_ID: this.accountid,
            SUBACCT_ID: this.subaccountid,
            SUBACCT_OFFICE_ID: this.storeid,
            RETAIL_D2C_DOMAIN_ID: +this.domainid,
            RETAIL_D2C_PRODUCT_ID: +this.productID,
            ITEM_ID: +this.itemId
        };
        console.log("payload: ", manageWebStoreData);
        this.pathtext = '';
        if (this.txt === 'Reserved') {
            this.pathtext = 'RetailDropshipReserveStore';
        }
        if (this.txt === 'Generic') {
            this.pathtext = 'RetailDropshipStore';
        }
        this.apiService.postCall(this.apiService.baseURL + '/' + this.pathtext, manageWebStoreData)
            .subscribe(data => {
            this.spinner.hide();
            this.storeItemList = data.SUPER_STORE_ITEM_DISPLAYED;
            this.storesubItemList = data.ITEM_SUBITEM_DISPALYED;
            for (let i = 1; i <= this.storesubItemList.length; i++) {
                this.collection.push(`item ${i}`);
            }
            if (this.storeItemList.length == 0) {
                this.showWebstore = false;
                this.toastr.error('Data not Available', '', {
                    timeOut: 5000,
                });
            }
            else {
                this.showWebstore = true;
            }
            // this.priceList = data.SUPER_STORE_ITEM_DISPLAYED.RETAIL_D2C_SUBITEM_MRP[0];
            console.log(this.priceList);
        }, (error) => {
            console.log(error);
            this.spinner.hide();
            this.toastr.error(error.error.Message, '', {
                timeOut: 5000,
            });
            this.showWebstore = false;
        });
    }
    isAllSelected() {
        this.masterSelected = this.storesubItemList.every(function (item) {
            return item.isSelected == true;
        });
        this.getCheckedItemList();
    }
    getCheckedItemList() {
        this.checkedList = [];
        for (var i = 0; i < this.storesubItemList.length; i++) {
            if (this.storesubItemList[i].isSelected) {
                this.subItemDetails = {
                    RETAIL_D2C_ITEM_ID: this.storesubItemList[i].RETAIL_D2C_ITEM_ID,
                    RETAIL_D2C_SUBITEM_ID: this.storesubItemList[i].RETAIL_D2C_SUBITEM_ID,
                    RETAIL_D2C_SUBITEM_MRP: this.storesubItemList[i].RETAIL_D2C_SUBITEM_MRP[0].RETAIL_D2C_SUBITEM_RETAIL_BOTTLE_MRP,
                    RETAIL_D2C_SUBITEM_Case_MRP: this.storesubItemList[i].RETAIL_D2C_SUBITEM_MRP[0].RETAIL_D2C_SUBITEM_RETAIL_CASE_WHOLESALE_MRP,
                };
                console.log(this.subItemDetails);
                this.checkedList.push(this.subItemDetails);
            }
        }
        if (this.checkedList.length == 0) {
            this.isitemChecked = true;
        }
        else {
            this.isitemChecked = false;
        }
        console.log(this.checkedList);
    }
    cnfAlert() {
        if (this.checkedList == '') {
            this.toastr.error('Please select Product List', '', {
                timeOut: 5000,
            });
        }
        else {
            Swal.fire({
                title: 'Are you sure?',
                text: "You want to store this SubItem",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes'
            }).then((result) => {
                if (result.isConfirmed) {
                    this.updateMyStoreProductLine();
                    this.isitemChecked = true;
                }
            });
        }
    }
    updateMyStoreProductLine() {
        let updateMyStoreProductLineData = {
            ACCT_ID: this.accountid,
            SUBACCT_ID: this.subaccountid,
            SUBACCT_OFFICE_ID: +this.storeid,
            RETAIL_D2C_DOMAIN_ID: +this.domainid,
            RETAIL_D2C_PRODUCT_ID: +this.productID,
            ITEM_SUBITEM_NEW_ADDED: this.checkedList
        };
        console.log(updateMyStoreProductLineData);
        this.apiService.postCall(this.apiService.baseURL + '/UpdateMyStoreProductLine', updateMyStoreProductLineData)
            .subscribe(data => {
            console.log(data);
            this.toastr.success('Update Store ProductLine Successfully', '', {
                timeOut: 5000,
            });
            // this.showRetailDropshipStoreList();
        }, (error) => {
            this.toastr.error(error.error.Message, '', {
                timeOut: 5000,
            });
        });
    }
    showWebTags() {
        this.webtagshow = true;
    }
}
DropShipStoreDomainProductComponent.ɵfac = function DropShipStoreDomainProductComponent_Factory(t) { return new (t || DropShipStoreDomainProductComponent)(i0.ɵɵdirectiveInject(i1.ApiService), i0.ɵɵdirectiveInject(i2.NgxSpinnerService), i0.ɵɵdirectiveInject(i3.ToastrService), i0.ɵɵdirectiveInject(i4.FormBuilder), i0.ɵɵdirectiveInject(i5.HttpClient)); };
DropShipStoreDomainProductComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DropShipStoreDomainProductComponent, selectors: [["app-drop-ship-store-domain-product"]], decls: 40, vars: 7, consts: [[1, "main-content-area"], [1, "row"], [1, "col-md-12"], [1, "heading-title"], [3, "formGroup"], [1, "row", "topLevel"], [1, "col-md-4"], [1, "form-group"], [1, "form-control", "form-level", "no-border"], ["formControlName", "RETAIL_D2C_PRODUCT_ID", 1, "form-control", 3, "change"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "itemId", 1, "form-control", 3, "change"], ["selected", "", "value", ""], [3, "ngValue", 4, "ngFor", "ngForOf"], [1, "col-md-12", "text-right"], ["type", "button", 1, "btn", "mt-1", "ml-2", "col-md-3", "custom-btn", 3, "click"], ["class", "box tag-store", 4, "ngIf"], ["class", "box productLevel", 4, "ngIf"], ["class", "row", 4, "ngIf"], ["template", "<img src='assets/images/icons/please_wait.gif' />"], [3, "value"], [3, "ngValue"], [1, "box", "tag-store"], [1, "col-md-12", "d-flex"], [1, "pt-2"], ["role", "group", 1, "btn-group", "btn-group-sm", "mt-1", "mb-3"], ["type", "button", 1, "btn", "btn-outline-primary"], [1, "list-group", "list-group-horizontal"], [1, "list-group-item"], [1, "form-check"], ["type", "checkbox", "value", "", "id", "demographic1", 1, "form-check-input"], ["for", "demographic1", 1, "form-check-label"], ["type", "checkbox", "value", "", "id", "demographic2", 1, "form-check-input"], ["for", "demographic2", 1, "form-check-label"], ["type", "checkbox", "value", "", "id", "demographic3", 1, "form-check-input"], ["for", "demographic3", 1, "form-check-label"], ["type", "checkbox", "value", "", "id", "demographic4", 1, "form-check-input"], ["for", "demographic4", 1, "form-check-label"], ["type", "checkbox", "value", "", "id", "demographic5", 1, "form-check-input"], ["for", "demographic5", 1, "form-check-label"], ["type", "checkbox", "value", "", "id", "demographic6", 1, "form-check-input"], ["for", "demographic6", 1, "form-check-label"], ["type", "checkbox", "value", "", "id", "demographic7", 1, "form-check-input"], ["for", "demographic7", 1, "form-check-label"], ["type", "checkbox", "value", "", "id", "demographic8", 1, "form-check-input"], ["for", "demographic8", 1, "form-check-label"], [1, "row", "mt-4"], ["type", "checkbox", "value", "", "id", "industry1", 1, "form-check-input"], ["for", "industry1", 1, "form-check-label"], ["type", "checkbox", "value", "", "id", "industry2", 1, "form-check-input"], ["for", "industry2", 1, "form-check-label"], ["type", "checkbox", "value", "", "id", "industry3", 1, "form-check-input"], ["for", "industry3", 1, "form-check-label"], ["type", "checkbox", "value", "", "id", "industry4", 1, "form-check-input"], ["for", "industry4", 1, "form-check-label"], ["type", "checkbox", "value", "", "id", "industry5", 1, "form-check-input"], ["for", "industry5", 1, "form-check-label"], ["type", "checkbox", "value", "", "id", "prange1", 1, "form-check-input"], ["for", "prange1", 1, "form-check-label"], ["type", "checkbox", "value", "", "id", "prange2", 1, "form-check-input"], ["for", "prange2", 1, "form-check-label"], ["type", "checkbox", "value", "", "id", "prange3", 1, "form-check-input"], ["for", "prange3", 1, "form-check-label"], ["type", "checkbox", "value", "", "id", "prange4", 1, "form-check-input"], ["for", "prange4", 1, "form-check-label"], [1, "box", "productLevel"], [1, "row", "text-level"], [1, "search-field-list"], [1, "search-list-label"], [1, "item-subitem-list"], [4, "ngFor", "ngForOf"], [3, "pageChange"], [1, "pro-box", "storeitem", "item-box"], [3, "src"], [1, "p-details"], [1, "p-name"], [1, "item-id"], [1, "middle-arrow"], [1, "fa", "fa-angle-double-right"], ["class", "sub-item-box", 4, "ngFor", "ngForOf"], [1, "sub-item-box"], [4, "ngIf"], [1, "pro-box", 3, "ngClass"], [4, "ngIf", "ngIfElse"], ["elseBlock", ""], ["class", "price-details", 4, "ngIf"], [1, "add_to_cart"], ["type", "button", 1, "btn", "remove-btn"], [1, "fa", "fa-trash"], ["type", "button", "class", "btn", 4, "ngIf", "ngIfElse"], ["disableButton", ""], [1, "instock"], ["src", "../assets/images/active_icon1.png"], [1, "price-details"], [1, "unit-price"], [1, "whole-sale-price"], ["type", "button", 1, "btn"], [1, "form-check", "custom-checkbox"], ["type", "checkbox", 1, "form-check-input", "custom-control-input", 3, "ngModel", "value", "id", "ngModelChange", "change"], [1, "custom-control-label", 3, "for"], ["disabled", "", "type", "button", 1, "btn"], ["type", "button", 1, "btn", "col-md-4", "custom-btn", "float-right", 3, "disabled", "click"], [1, "fa", "fa-check-circle"]], template: function DropShipStoreDomainProductComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
        i0.ɵɵtext(4, "Manage my Webstore");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(5, "form", 4)(6, "div", 5)(7, "div", 6)(8, "div", 7)(9, "label");
        i0.ɵɵtext(10, "Store");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "div", 8);
        i0.ɵɵtext(12);
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(13, "div", 6)(14, "div", 7)(15, "label");
        i0.ɵɵtext(16, "Select my Store Product-Line(Category)");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(17, "select", 9);
        i0.ɵɵlistener("change", function DropShipStoreDomainProductComponent_Template_select_change_17_listener($event) { return ctx.onretailDropshipStoreChange($event); });
        i0.ɵɵelementStart(18, "option", 10);
        i0.ɵɵtext(19, "Select");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(20, DropShipStoreDomainProductComponent_option_20_Template, 2, 2, "option", 11);
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(21, "div", 6)(22, "div", 7)(23, "label");
        i0.ɵɵtext(24, "Select my Store Item(Sub-Category)");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(25, "select", 12);
        i0.ɵɵlistener("change", function DropShipStoreDomainProductComponent_Template_select_change_25_listener($event) { return ctx.onPItemChange($event); });
        i0.ɵɵelementStart(26, "option", 13);
        i0.ɵɵtext(27, "Select");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(28, DropShipStoreDomainProductComponent_option_28_Template, 2, 2, "option", 14);
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(29, "div", 15)(30, "button", 16);
        i0.ɵɵlistener("click", function DropShipStoreDomainProductComponent_Template_button_click_30_listener() { return ctx.showWebTags(); });
        i0.ɵɵtext(31, "Manage my Webstore(Tags)");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(32, "button", 16);
        i0.ɵɵlistener("click", function DropShipStoreDomainProductComponent_Template_button_click_32_listener() { return ctx.showWebStore("Reserved"); });
        i0.ɵɵtext(33, "Manage my Webstore(Reserved)");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(34, "button", 16);
        i0.ɵɵlistener("click", function DropShipStoreDomainProductComponent_Template_button_click_34_listener() { return ctx.showWebStore("Generic"); });
        i0.ɵɵtext(35, "Manage my Webstore(Generic)");
        i0.ɵɵelementEnd()()()();
        i0.ɵɵtemplate(36, DropShipStoreDomainProductComponent_div_36_Template, 139, 0, "div", 17);
        i0.ɵɵtemplate(37, DropShipStoreDomainProductComponent_div_37_Template, 28, 4, "div", 18);
        i0.ɵɵtemplate(38, DropShipStoreDomainProductComponent_div_38_Template, 5, 1, "div", 19);
        i0.ɵɵelementEnd();
        i0.ɵɵelement(39, "ngx-spinner", 20);
    } if (rf & 2) {
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("formGroup", ctx.webStoreForm);
        i0.ɵɵadvance(7);
        i0.ɵɵtextInterpolate1(" ", ctx.storeName, " ");
        i0.ɵɵadvance(8);
        i0.ɵɵproperty("ngForOf", ctx.productLineList);
        i0.ɵɵadvance(8);
        i0.ɵɵproperty("ngForOf", ctx.brandOrgList);
        i0.ɵɵadvance(8);
        i0.ɵɵproperty("ngIf", ctx.webtagshow);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.showWebstore);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.showWebstore);
    } }, dependencies: [i6.NgClass, i6.NgForOf, i6.NgIf, i4.ɵNgNoValidate, i4.NgSelectOption, i4.ɵNgSelectMultipleOption, i4.CheckboxControlValueAccessor, i4.SelectControlValueAccessor, i4.NgControlStatus, i4.NgControlStatusGroup, i4.FormGroupDirective, i4.FormControlName, i4.NgModel, i7.PaginationControlsComponent, i2.NgxSpinnerComponent, i6.SlicePipe, i7.PaginatePipe], styles: ["h1.heading-title[_ngcontent-%COMP%] {\r\n    margin: 20px 0 0;\r\n}\r\n\r\n.heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    padding: 10px 5px 10px;\r\n    font-size: 20px;\r\n}\r\n\r\n.row.topLevel[_ngcontent-%COMP%] {\r\n    background: #fff;\r\n    padding: 20px 0;\r\n    margin: 0;\r\n    border-radius: 5px;\r\n}\r\n\r\n.heading.store-domain[_ngcontent-%COMP%] {\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.store-domain[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    margin-right: 20px;\r\n}\r\n\r\n.store-domain[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    background: #ddd;\r\n    padding: 5px 20px;\r\n    font-size: 13px;\r\n    border-radius: 20px;\r\n    display: inline-block;\r\n    font-weight: bold;\r\n    margin-left: 5px;\r\n}\r\n\r\n.store_id[_ngcontent-%COMP%] {\r\n    background: #ddd;\r\n    padding: 5px 20px;\r\n    border-radius: 20px;\r\n    font-size: 13px;\r\n    font-weight: 700;\r\n    float: right;\r\n    margin-top: -40px;\r\n}\r\n\r\n.box[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    overflow: hidden;\r\n    box-shadow: 0 0 4px 0px #eee;\r\n    margin: 20px 0;\r\n    border-radius: 4px;\r\n    padding: 10px;\r\n    background: #fff;\r\n}\r\n\r\n.main-content-area[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\r\n    width: 20%;\r\n    float: left;\r\n    padding: 0;\r\n}\r\n\r\n.fa-star[_ngcontent-%COMP%]:before {\r\n    content: \"\\f005\";\r\n    color: #ff9600;\r\n    margin-right: 5px;\r\n}\r\n\r\n.pro-box[_ngcontent-%COMP%] {\r\n    box-shadow: 0 0 4px 0 #e9ecef;\r\n    margin: 0 10px 20px;\r\n    overflow: hidden;\r\n    padding: 15px;\r\n    border-radius: 3px;\r\n    position: relative;\r\n    border: 1px solid #dee2e6;\r\n}\r\n\r\n.pro-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    height: 100px;\r\n    width: 100px;\r\n    margin: 30px auto 15px;\r\n    display: block;\r\n}\r\n\r\n.storeitem[_ngcontent-%COMP%]   .p-details[_ngcontent-%COMP%] {\r\n    margin-bottom: 38px;\r\n}\r\n\r\np.label-txt[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    padding: 10px;\r\n    font-size: 14px;\r\n    margin: 0;\r\n}\r\n\r\n.store-available-product[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\r\n    width: 25% !important;\r\n}\r\n\r\n.selected-productLine[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .store-available-product[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\r\n    font-size: 16px;\r\n    padding: 0 10px 5px;\r\n}\r\n\r\n.right-field-head[_ngcontent-%COMP%] {\r\n    float: right;\r\n    margin-top: 10px;\r\n}\r\n\r\n.right-field-head[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    padding: 0 10px;\r\n}\r\n\r\nspan.video[_ngcontent-%COMP%], span.doc[_ngcontent-%COMP%] {\r\n    padding: 8px 15px;\r\n    background: #dee2e6;\r\n    font-size: 12px;\r\n    border-radius: 20px;\r\n}\r\n\r\n.right-field-head[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n    font-size: 11px;\r\n    border-radius: 20px;\r\n}\r\n\r\n.bottom-btn[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n    line-height: 11px;\r\n}\r\n\r\n.box.prduct-gallery[_ngcontent-%COMP%] {\r\n    position: relative;\r\n}\r\n\r\n.sample-img[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    z-index: 1;\r\n    left: 15%;\r\n    top: 28%;\r\n    transform: rotate(-45deg);\r\n}\r\n\r\np.p-name[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    margin: 0;\r\n    font-size: 13px;\r\n    font-weight: 500;\r\n    height: 30px;\r\n    vertical-align: middle;\r\n}\r\n\r\np.item-id[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    position: absolute;\r\n    top: 0;\r\n    background: #212529;\r\n    left: 0;\r\n    font-weight: 600;\r\n    color: #fff;\r\n    border-radius: 0 0 5px;\r\n    font-size: 11px;\r\n    padding: 3px 6px;\r\n}\r\n\r\nspan.price[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n    padding: 7px 10px 0;\r\n    float: left;\r\n    font-weight: 600;\r\n    line-height: 20px;\r\n}\r\n\r\n.item-id[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\r\n    font-weight: 600;\r\n}\r\n\r\n.instock[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n    text-align: center;\r\n    margin: 0 0 3px;\r\n    position: absolute;\r\n    top: 5%;\r\n    box-shadow: 0 0 30px 0 rgb(82 63 105 / 10%);\r\n    left: 70%;\r\n    background: rgb(224 152 152 / 24%);\r\n    width: 50px;\r\n    border: 1px solid rgb(0 0 0 / 10%);\r\n    height: 50px;\r\n    border-radius: 50%;\r\n    img {\r\n        width: 30px !important;\r\n        height: 30px !important;\r\n        margin: 9px auto;\r\n    }\r\n}\r\n\r\n.pro-box.storeitem.item-box[_ngcontent-%COMP%] {\r\n    border: 1px solid #dee2e6;\r\n    min-height: 230px;\r\n    max-height: 282px;\r\n}\r\n\r\nh1.heading-title[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    text-transform: uppercase;\r\n    font-weight: 700;\r\n    color: #ff7900;\r\n    position: relative;\r\n    margin-bottom: 10px;\r\n    width: 100%;\r\n    span {\r\n        font-size: 10px;\r\n        text-transform: inherit;\r\n        background: #495057;\r\n        color: #fff;\r\n        padding: 10px 15px;\r\n        border-radius: 25px;\r\n    }\r\n}\r\n\r\nh1.heading-title[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    max-width: 65px;\r\n    margin-right: 5px;\r\n}\r\n\r\nh1.heading-title[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    font-weight: 400;\r\n    font-size: 13px;\r\n    position: absolute;\r\n    left: 80px;\r\n    bottom: 4px;\r\n    color: grey;\r\n}\r\n\r\n.offerDiv[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 5px;\r\n    right: 5px;\r\n    font-size: 10px;\r\n    background: #dc3545;\r\n    line-height: 10px;\r\n    font-weight: 700;\r\n    width: 35px;\r\n    height: 35px;\r\n    border-radius: 50%;\r\n    padding: 9px;\r\n    text-align: center;\r\n    color: #fff;\r\n}\r\n\r\n.offerDiv[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\r\n    display: block;\r\n}\r\n\r\nspan.price.strike-price[_ngcontent-%COMP%] {\r\n    color: #ccc;\r\n    text-decoration: line-through;\r\n}\r\n\r\n.row.text-level[_ngcontent-%COMP%] {\r\n    margin: 0 -10px 10px;\r\n}\r\n\r\n.store-add-remove[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    padding: 10px;\r\n    float: left;\r\n    width: 100%;\r\n}\r\n\r\n.row.product-slider-box[_ngcontent-%COMP%] {\r\n    border-bottom: 5px solid #ddd;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.carousel-inner[_ngcontent-%COMP%] {\r\n    height: 278px;\r\n}\r\n\r\n.carousel-item[_ngcontent-%COMP%] {\r\n    margin-right: 0;\r\n    border: 1px solid #f8f9fa;\r\n    background: #fff;\r\n}\r\n\r\n.product-slider-box[_ngcontent-%COMP%]   .domain-product[_ngcontent-%COMP%] {\r\n    max-width: 23%;\r\n}\r\n\r\n.product-slider-box[_ngcontent-%COMP%]   .sub-domain-product[_ngcontent-%COMP%] {\r\n    max-width: 77%;\r\n}\r\n\r\n.store-add-remove[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n    font-size: 11px;\r\n    text-align: center;\r\n    float: left;\r\n    transition: all .5s;\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n    min-width: 65px;\r\n}\r\n\r\n.store-add-remove[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] + .btn[_ngcontent-%COMP%] {\r\n    float: right;\r\n}\r\n\r\n.item-subitem-list[_ngcontent-%COMP%]   .pro-box[_ngcontent-%COMP%] {\r\n    width: 99%;\r\n}\r\n\r\n.item-subitem-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    float: left;\r\n}\r\n\r\n.item-box[_ngcontent-%COMP%] {\r\n    max-width: 225px;\r\n    width: 100%;\r\n    float: left;\r\n}\r\n\r\n.sub-item-box[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    float: left;\r\n    max-width: 225px;\r\n}\r\n\r\n.sub-item-box[_ngcontent-%COMP%]   .add_to_cart[_ngcontent-%COMP%]   button.btn[_ngcontent-%COMP%] {\r\n    background: #000064;\r\n}\r\n\r\n.add_to_cart[_ngcontent-%COMP%] {\r\n    .remove-btn {\r\n        border-radius: 50%;\r\n        background: #05054ead !important;\r\n        color: #fff;\r\n        width: 35px;\r\n        height: 35px;\r\n        padding: 0;\r\n    }\r\n    .btn+.btn {\r\n        width: calc(100% - 45px);\r\n        border: 0;\r\n        background: #63030c;\r\n        border-radius: 30px;\r\n        font-size: 13px;\r\n        color: #fff;\r\n        margin-left: 10px;\r\n        height: 34px;\r\n    }\r\n}\r\n\r\n.middle-arrow[_ngcontent-%COMP%] {\r\n    float: left;\r\n    width: 30px;\r\n    height: 50px;\r\n    font-size: 40px;\r\n    margin-top: 10%;\r\n    color: #dee2e6;\r\n    text-align: center;\r\n}\r\n\r\n.price-details[_ngcontent-%COMP%] {\r\n    float: left;\r\n    width: 100%;\r\n    margin-bottom: 10px;\r\n    font-size: 15px;\r\n    line-height: normal;\r\n    font-weight: 600;\r\n    .unit-price {\r\n        float: left;\r\n        width: 42%;\r\n    }\r\n}\r\n\r\n.unit-price[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    display: block;\r\n    font-size: 12px;\r\n    font-weight: 400;\r\n}\r\n\r\n.whole-sale-price[_ngcontent-%COMP%] {\r\n    float: right;\r\n    width: 58%;\r\n    text-align: right;\r\n    span {\r\n        font-size: 12px;\r\n        display: block;\r\n        font-weight: 400;\r\n    }\r\n}\r\n\r\n.add_to_cart[_ngcontent-%COMP%] {\r\n    clear: both;\r\n}\r\n\r\n.subItem-field[_ngcontent-%COMP%] {\r\n    width: calc(100% - 280px);\r\n    float: left;\r\n}\r\n\r\n.item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n\r\n.pro-box.active[_ngcontent-%COMP%] {\r\n    border: 1px solid #63030c;\r\n}\r\n\r\n.custom-btn[_ngcontent-%COMP%] + .custom-btn[_ngcontent-%COMP%] + .custom-btn[_ngcontent-%COMP%] {\r\n    background: #dc3545 !important;\r\n}\r\n\r\n.custom-btn[_ngcontent-%COMP%] + .custom-btn[_ngcontent-%COMP%] {\r\n    background: #495057 !important;\r\n}\r\n\r\nbutton.filter-btn[_ngcontent-%COMP%] {\r\n    background: #dc3545;\r\n    color: #fff;\r\n    font-size: 12px;\r\n    &:hover {\r\n        color: #fff;\r\n        background-color: #88101c;\r\n        border-color: #88101c;\r\n    }\r\n}\r\n\r\n.list-group-item[_ngcontent-%COMP%] {\r\n    padding: 8px 15px;\r\n    .form-check-label {\r\n        vertical-align: text-top;\r\n    }\r\n}\r\n\r\n.box.tag-store[_ngcontent-%COMP%] {\r\n    padding: 10px 15px 20px;\r\n}\r\n\r\n.btn-group-sm[_ngcontent-%COMP%] > .btn[_ngcontent-%COMP%], .btn-sm[_ngcontent-%COMP%] {\r\n    padding: 3px 10px;\r\n    font-size: 12px;\r\n    line-height: 15px;\r\n}\r\n\r\n.list-group-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n    color: #bd2130;\r\n    text-decoration: underline;\r\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DropShipStoreDomainProductComponent, [{
        type: Component,
        args: [{ selector: 'app-drop-ship-store-domain-product', template: "<div class=\"main-content-area\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <h1 class=\"heading-title\">Manage my Webstore</h1>\r\n\r\n        </div>\r\n    </div>\r\n    <form [formGroup]=\"webStoreForm\">\r\n        <div class=\"row topLevel\">\r\n            <div class=\"col-md-4\">\r\n\r\n                <div class=\"form-group\">\r\n                    <label>Store</label>\r\n                    <div class=\"form-control form-level no-border\">\r\n                        {{storeName}}\r\n                    </div>\r\n                    <!-- <select class=\"form-control\" (change)=\"onStoreChange($event)\" formControlName=\"SUBACCT_OFFICE_ID\">\r\n              <option value=\"\">Select</option>\r\n              <option *ngFor=\"let store of retailStoreList\" [value]=\"store.RETAIL_D2C_ACCT_INTRNL_OFFICE_REGID\">{{store.RETAIL_D2C_SUBACCT_OFFICE_NAME}}</option>\r\n              </select> -->\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n                <div class=\"form-group\">\r\n                    <label>Select my Store Product-Line(Category)</label>\r\n                    <select class=\"form-control\" (change)=\"onretailDropshipStoreChange($event)\" formControlName=\"RETAIL_D2C_PRODUCT_ID\">\r\n            <option value=\"\">Select</option>\r\n            <option *ngFor=\"let productline of productLineList\" [value]=\"productline.RETAIL_D2C_PRODUCT_ID\">{{productline.RETAIL_D2C_PRODUCT_NAME}}\r\n            </option>\r\n\r\n          </select>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n                <div class=\"form-group\">\r\n                    <label>Select my Store Item(Sub-Category)</label>\r\n\r\n                    <select formControlName=\"itemId\" class=\"form-control\" (change)=\"onPItemChange($event)\">\r\n            <option selected value=\"\">Select</option>\r\n            <option *ngFor=\"let productItem of brandOrgList\" [ngValue]=\"productItem.RETAIL_D2C_ITEM_ID\">{{productItem.RETAIL_D2C_ITEM_NAME}}\r\n            </option>\r\n          </select>\r\n\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-12 text-right\">\r\n                <button type=\"button\" (click)=\"showWebTags()\" class=\"btn mt-1 ml-2 col-md-3 custom-btn\">Manage my\r\n                    Webstore(Tags)</button>\r\n                <button type=\"button\" (click)=\"showWebStore('Reserved')\" class=\"btn mt-1 ml-2 col-md-3 custom-btn\">Manage my\r\n                    Webstore(Reserved)</button>\r\n                <button type=\"button\" (click)=\"showWebStore('Generic')\" class=\"btn mt-1 ml-2 col-md-3 custom-btn\">Manage my\r\n          Webstore(Generic)</button>\r\n            </div>\r\n        </div>\r\n    </form>\r\n    <div class=\"box tag-store\" *ngIf=\"webtagshow\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12 d-flex\">\r\n                <h4 class=\"pt-2\">Tag my Store</h4>\r\n                <!-- <button class=\"filter-btn btn ml-auto\"><i class=\"ti-filter\"></i>Filter</button> -->\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <h6>Demographic Based</h6>\r\n                <div class=\"btn-group btn-group-sm mt-1 mb-3\" role=\"group\">\r\n                    <button type=\"button\" class=\"btn btn-outline-primary\">Get Tags</button>\r\n                    <button type=\"button\" class=\"btn btn-outline-primary\">Add Tags</button>\r\n                    <button type=\"button\" class=\"btn btn-outline-primary\">Edit Tags</button>\r\n                </div>\r\n                <ul class=\"list-group list-group-horizontal\">\r\n                    <li class=\"list-group-item\">\r\n                        <div class=\"form-check\">\r\n                            <input class=\"form-check-input\" type=\"checkbox\" value=\"\" id=\"demographic1\">\r\n                            <label class=\"form-check-label\" for=\"demographic1\">\r\n                              Domain\r\n                            </label>\r\n                        </div>\r\n                    </li>\r\n                    <li class=\"list-group-item\">\r\n                        <div class=\"form-check\">\r\n                            <input class=\"form-check-input\" type=\"checkbox\" value=\"\" id=\"demographic2\">\r\n                            <label class=\"form-check-label\" for=\"demographic2\">\r\n                              Country\r\n                            </label>\r\n                        </div>\r\n                    </li>\r\n                    <li class=\"list-group-item\">\r\n                        <div class=\"form-check\">\r\n                            <input class=\"form-check-input\" type=\"checkbox\" value=\"\" id=\"demographic3\">\r\n                            <label class=\"form-check-label\" for=\"demographic3\">\r\n                              State\r\n                            </label>\r\n                        </div>\r\n                    </li>\r\n                    <li class=\"list-group-item\">\r\n                        <div class=\"form-check\">\r\n                            <input class=\"form-check-input\" type=\"checkbox\" value=\"\" id=\"demographic3\">\r\n                            <label class=\"form-check-label\" for=\"demographic3\">\r\n                              State\r\n                            </label>\r\n                        </div>\r\n                    </li>\r\n                    <li class=\"list-group-item\">\r\n                        <div class=\"form-check\">\r\n                            <input class=\"form-check-input\" type=\"checkbox\" value=\"\" id=\"demographic4\">\r\n                            <label class=\"form-check-label\" for=\"demographic4\">\r\n                              City\r\n                            </label>\r\n                        </div>\r\n                    </li>\r\n                    <li class=\"list-group-item\">\r\n                        <div class=\"form-check\">\r\n                            <input class=\"form-check-input\" type=\"checkbox\" value=\"\" id=\"demographic5\">\r\n                            <label class=\"form-check-label\" for=\"demographic5\">\r\n                              Pin Code\r\n                            </label>\r\n                        </div>\r\n                    </li>\r\n                    <li class=\"list-group-item\">\r\n                        <div class=\"form-check\">\r\n                            <input class=\"form-check-input\" type=\"checkbox\" value=\"\" id=\"demographic6\">\r\n                            <label class=\"form-check-label\" for=\"demographic6\">\r\n                              Near Me\r\n                            </label>\r\n                        </div>\r\n                    </li>\r\n                    <li class=\"list-group-item\">\r\n                        <div class=\"form-check\">\r\n                            <input class=\"form-check-input\" type=\"checkbox\" value=\"\" id=\"demographic7\">\r\n                            <label class=\"form-check-label\" for=\"demographic7\">\r\n                              Categories\r\n                            </label>\r\n                        </div>\r\n                    </li>\r\n                    <li class=\"list-group-item\">\r\n                        <div class=\"form-check\">\r\n                            <input class=\"form-check-input\" type=\"checkbox\" value=\"\" id=\"demographic8\">\r\n                            <label class=\"form-check-label\" for=\"demographic8\">\r\n                              Sub-Categories\r\n                            </label>\r\n                        </div>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row mt-4\">\r\n            <div class=\"col-md-12\">\r\n                <h6>Industry Based</h6>\r\n                <div class=\"btn-group btn-group-sm mt-1 mb-3\" role=\"group\">\r\n                    <button type=\"button\" class=\"btn btn-outline-primary\">Get Tags</button>\r\n                    <button type=\"button\" class=\"btn btn-outline-primary\">Add Tags</button>\r\n                    <button type=\"button\" class=\"btn btn-outline-primary\">Edit Tags</button>\r\n                </div>\r\n                <ul class=\"list-group list-group-horizontal\">\r\n                    <li class=\"list-group-item\">\r\n                        <div class=\"form-check\">\r\n                            <input class=\"form-check-input\" type=\"checkbox\" value=\"\" id=\"industry1\">\r\n                            <label class=\"form-check-label\" for=\"industry1\">\r\n                              Multi-Designer\r\n                            </label>\r\n                        </div>\r\n                        <a>Add/Edit Designers</a>\r\n                    </li>\r\n                    <li class=\"list-group-item\">\r\n                        <div class=\"form-check\">\r\n                            <input class=\"form-check-input\" type=\"checkbox\" value=\"\" id=\"industry2\">\r\n                            <label class=\"form-check-label\" for=\"industry2\">\r\n                              Brands\r\n                            </label>\r\n                        </div>\r\n                        <a>Add/Edit Brands</a>\r\n                    </li>\r\n                    <li class=\"list-group-item\">\r\n                        <div class=\"form-check\">\r\n                            <input class=\"form-check-input\" type=\"checkbox\" value=\"\" id=\"industry3\">\r\n                            <label class=\"form-check-label\" for=\"industry3\">\r\n                              New on Racks\r\n                            </label>\r\n                        </div>\r\n                    </li>\r\n                    <li class=\"list-group-item\">\r\n                        <div class=\"form-check\">\r\n                            <input class=\"form-check-input\" type=\"checkbox\" value=\"\" id=\"industry4\">\r\n                            <label class=\"form-check-label\" for=\"industry4\">\r\n                              Popular Items\r\n                            </label>\r\n                        </div>\r\n                    </li>\r\n                    <li class=\"list-group-item\">\r\n                        <div class=\"form-check\">\r\n                            <input class=\"form-check-input\" type=\"checkbox\" value=\"\" id=\"industry5\">\r\n                            <label class=\"form-check-label\" for=\"industry5\">\r\n                              By Occasion\r\n                            </label>\r\n                        </div>\r\n                        <a>Add/Edit Occasion</a>\r\n                    </li>\r\n\r\n                </ul>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row mt-4\">\r\n            <div class=\"col-md-12\">\r\n                <h6>Value Economic Based</h6>\r\n                <div class=\"btn-group btn-group-sm mt-1 mb-3\" role=\"group\">\r\n                    <button type=\"button\" class=\"btn btn-outline-primary\">Get Tags</button>\r\n                    <button type=\"button\" class=\"btn btn-outline-primary\">Add Tags</button>\r\n                    <button type=\"button\" class=\"btn btn-outline-primary\">Edit Tags</button>\r\n                </div>\r\n                <ul class=\"list-group list-group-horizontal\">\r\n                    <li class=\"list-group-item\">\r\n                        <div class=\"form-check\">\r\n                            <input class=\"form-check-input\" type=\"checkbox\" value=\"\" id=\"prange1\">\r\n                            <label class=\"form-check-label\" for=\"prange1\">\r\n                              Price Range\r\n                            </label>\r\n                        </div>\r\n                        <a>Add/Edit Price Range</a>\r\n                    </li>\r\n                    <li class=\"list-group-item\">\r\n                        <div class=\"form-check\">\r\n                            <input class=\"form-check-input\" type=\"checkbox\" value=\"\" id=\"prange2\">\r\n                            <label class=\"form-check-label\" for=\"prange2\">\r\n                              Bargain Deals\r\n                            </label>\r\n                        </div>\r\n                    </li>\r\n                    <li class=\"list-group-item\">\r\n                        <div class=\"form-check\">\r\n                            <input class=\"form-check-input\" type=\"checkbox\" value=\"\" id=\"prange3\">\r\n                            <label class=\"form-check-label\" for=\"prange3\">\r\n                              Discounts\r\n                            </label>\r\n                        </div>\r\n                    </li>\r\n                    <li class=\"list-group-item\">\r\n                        <div class=\"form-check\">\r\n                            <input class=\"form-check-input\" type=\"checkbox\" value=\"\" id=\"prange4\">\r\n                            <label class=\"form-check-label\" for=\"prange4\">\r\n                              Store Rating\r\n                            </label>\r\n                        </div>\r\n                    </li>\r\n\r\n\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"box productLevel\" *ngIf=\"showWebstore\">\r\n        <div class=\"row text-level\">\r\n            <div class=\"col-md-12\">\r\n                <h5>Webstore {{txt}}</h5>\r\n                <div class=\"search-field-list\">\r\n                    <div class=\"search-list-label\">Store: <span>{{showStoreName}}</span>\r\n                    </div>\r\n                    <div class=\"search-list-label\">Product Line: <span>{{showProductName}}</span>\r\n                    </div>\r\n                    <div class=\"search-list-label\">State: <span>xxxxx</span>\r\n                    </div>\r\n                    <div class=\"search-list-label\">City: <span>xxxxx</span>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"item-subitem-list\">\r\n            <ul>\r\n                <li *ngFor=\"let storeitem of storeItemList\">\r\n                    <div class=\"pro-box storeitem item-box\">\r\n\r\n                        <img src=\"{{imgURL}}{{storeitem.RETAIl_D2C_ITEM_IMAGE | slice:1:-4}}jpeg\" />\r\n                        <div class=\"p-details\">\r\n                            <p class=\"p-name\">{{storeitem.RETAIL_D2C_ITEM_NAME}}</p>\r\n                            <!-- <p class=\"instock\">\r\n            <span *ngIf=\"storeitem.IsAvailable == false; else elseBlock\">\r\n             <img src=\"../assets/images/active_icon.png\" />\r\n            </span>\r\n           <ng-template #elseBlock></ng-template>\r\n          </p> -->\r\n                            <p class=\"item-id\">Item ID: <b>{{storeitem.RETAIL_D2C_ITEM_ID}}</b></p>\r\n                        </div>\r\n                        <!-- <div class=\"add_to_cart\">\r\n            <button type=\"button\" class=\"btn remove-btn\"><i class=\"fa fa-trash\"></i></button>\r\n            <button type=\"button\" class=\"btn\">Add to Store</button>\r\n          </div> -->\r\n\r\n                    </div>\r\n\r\n                    <div class=\"middle-arrow\"><i class=\"fa fa-angle-double-right\"></i></div>\r\n\r\n                    <div *ngFor=\"let storesubitem of storesubItemList | paginate: { itemsPerPage: 3, currentPage: p }; let i = index\" class=\"sub-item-box\">\r\n                        <div *ngIf=\"storeitem.RETAIL_D2C_ITEM_ID == storesubitem.RETAIL_D2C_ITEM_ID\">\r\n                            <div class=\"pro-box\" [ngClass]=\"{'active': storesubitem.isSelected === true}\">\r\n\r\n                                <img src=\"{{imgURL}}{{storesubitem.RETAIL_D2C_SUBITEM_IMAGE | slice:1:-4}}jpeg\" />\r\n                                <div class=\"p-details\">\r\n                                    <p class=\"p-name\">{{storesubitem.RETAIL_D2C_SUBITEM_NAME}}</p>\r\n\r\n                                    <span *ngIf=\"storesubitem.IsAvailable == true; else elseBlock\">\r\n                    <span class=\"instock\">\r\n                      <img src=\"../assets/images/active_icon1.png\" />\r\n                    </span>\r\n                                    </span>\r\n                                    <ng-template #elseBlock></ng-template>\r\n                                    <span *ngIf=\"newSelectedArray.isSelectet == true\">\r\n                    <span class=\"instock\">\r\n                      <img src=\"../assets/images/active_icon1.png\" />\r\n                    </span>\r\n                                    </span>\r\n                                    <p class=\"item-id\">Sub Item ID: <b>{{storesubitem.RETAIL_D2C_SUBITEM_ID}}</b></p>\r\n                                </div>\r\n                                <div class=\"price-details\" *ngIf=\"domainid == 1\">\r\n                                    <div class=\"unit-price\"><span>Unit\r\n                      MRP</span> {{storesubitem.RETAIL_D2C_SUBITEM_MRP[0].RETAIL_D2C_SUBITEM_RETAIL_BOTTLE_MRP}}&#8377;\r\n                                    </div>\r\n                                    <div class=\"whole-sale-price\"><span>Whole Sale\r\n                      MRP</span> {{storesubitem.RETAIL_D2C_SUBITEM_MRP[0].RETAIL_D2C_SUBITEM_RETAIL_CASE_WHOLESALE_MRP}}&#8377;\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"add_to_cart\">\r\n                                    <button type=\"button\" class=\"btn remove-btn\"><i class=\"fa fa-trash\"></i></button>\r\n                                    <!-- <input type=\"radio\" (change)=\"checked($event)\"> -->\r\n\r\n                                    <button *ngIf=\"storesubitem.IsAvailable != true; else disableButton\" type=\"button\" class=\"btn\">\r\n                    <div class=\"form-check custom-checkbox\">\r\n                      <input [(ngModel)]=\"storesubitem.isSelected\" value=\"{{storesubitem.isSelected}}\"\r\n                        (change)=\"isAllSelected()\" class=\"form-check-input custom-control-input\" type=\"checkbox\"\r\n                        id=\"flexCheckDefault{{i}}\">\r\n                      <label class=\"custom-control-label\" for=\"flexCheckDefault{{i}}\">\r\n                        Add to Store\r\n                      </label>\r\n                    </div>\r\n                  </button>\r\n                                    <ng-template #disableButton>\r\n                                        <button disabled type=\"button\" class=\"btn\">Add to Store</button>\r\n                                    </ng-template>\r\n                                </div>\r\n\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                </li>\r\n            </ul>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n\r\n    </div>\r\n    <div class=\"row\" *ngIf=\"showWebstore\">\r\n        <div class=\"col-md-12\">\r\n            <button (click)=\"cnfAlert()\" type=\"button\" [disabled]=\"isitemChecked\" class=\"btn col-md-4 custom-btn float-right\"><i class=\"fa fa-check-circle\"></i>\r\n        Update my Store Product Line</button>\r\n        </div>\r\n    </div>\r\n\r\n\r\n</div>\r\n\r\n<ngx-spinner template=\"<img src='assets/images/icons/please_wait.gif' />\">\r\n</ngx-spinner>", styles: ["h1.heading-title {\r\n    margin: 20px 0 0;\r\n}\r\n\r\n.heading h2 {\r\n    padding: 10px 5px 10px;\r\n    font-size: 20px;\r\n}\r\n\r\n.row.topLevel {\r\n    background: #fff;\r\n    padding: 20px 0;\r\n    margin: 0;\r\n    border-radius: 5px;\r\n}\r\n\r\n.heading.store-domain {\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.store-domain div {\r\n    display: inline-block;\r\n    margin-right: 20px;\r\n}\r\n\r\n.store-domain span {\r\n    background: #ddd;\r\n    padding: 5px 20px;\r\n    font-size: 13px;\r\n    border-radius: 20px;\r\n    display: inline-block;\r\n    font-weight: bold;\r\n    margin-left: 5px;\r\n}\r\n\r\n.store_id {\r\n    background: #ddd;\r\n    padding: 5px 20px;\r\n    border-radius: 20px;\r\n    font-size: 13px;\r\n    font-weight: 700;\r\n    float: right;\r\n    margin-top: -40px;\r\n}\r\n\r\n.box {\r\n    width: 100%;\r\n    overflow: hidden;\r\n    box-shadow: 0 0 4px 0px #eee;\r\n    margin: 20px 0;\r\n    border-radius: 4px;\r\n    padding: 10px;\r\n    background: #fff;\r\n}\r\n\r\n.main-content-area .box .col {\r\n    width: 20%;\r\n    float: left;\r\n    padding: 0;\r\n}\r\n\r\n.fa-star:before {\r\n    content: \"\\f005\";\r\n    color: #ff9600;\r\n    margin-right: 5px;\r\n}\r\n\r\n.pro-box {\r\n    box-shadow: 0 0 4px 0 #e9ecef;\r\n    margin: 0 10px 20px;\r\n    overflow: hidden;\r\n    padding: 15px;\r\n    border-radius: 3px;\r\n    position: relative;\r\n    border: 1px solid #dee2e6;\r\n}\r\n\r\n.pro-box img {\r\n    height: 100px;\r\n    width: 100px;\r\n    margin: 30px auto 15px;\r\n    display: block;\r\n}\r\n\r\n.storeitem .p-details {\r\n    margin-bottom: 38px;\r\n}\r\n\r\np.label-txt {\r\n    text-align: center;\r\n    padding: 10px;\r\n    font-size: 14px;\r\n    margin: 0;\r\n}\r\n\r\n.store-available-product .col {\r\n    width: 25% !important;\r\n}\r\n\r\n.selected-productLine h5,\r\n.store-available-product h5 {\r\n    font-size: 16px;\r\n    padding: 0 10px 5px;\r\n}\r\n\r\n.right-field-head {\r\n    float: right;\r\n    margin-top: 10px;\r\n}\r\n\r\n.right-field-head li {\r\n    display: inline-block;\r\n    padding: 0 10px;\r\n}\r\n\r\nspan.video,\r\nspan.doc {\r\n    padding: 8px 15px;\r\n    background: #dee2e6;\r\n    font-size: 12px;\r\n    border-radius: 20px;\r\n}\r\n\r\n.right-field-head .btn {\r\n    font-size: 11px;\r\n    border-radius: 20px;\r\n}\r\n\r\n.bottom-btn .btn {\r\n    line-height: 11px;\r\n}\r\n\r\n.box.prduct-gallery {\r\n    position: relative;\r\n}\r\n\r\n.sample-img {\r\n    position: absolute;\r\n    z-index: 1;\r\n    left: 15%;\r\n    top: 28%;\r\n    transform: rotate(-45deg);\r\n}\r\n\r\np.p-name {\r\n    text-align: center;\r\n    margin: 0;\r\n    font-size: 13px;\r\n    font-weight: 500;\r\n    height: 30px;\r\n    vertical-align: middle;\r\n}\r\n\r\np.item-id {\r\n    text-align: center;\r\n    position: absolute;\r\n    top: 0;\r\n    background: #212529;\r\n    left: 0;\r\n    font-weight: 600;\r\n    color: #fff;\r\n    border-radius: 0 0 5px;\r\n    font-size: 11px;\r\n    padding: 3px 6px;\r\n}\r\n\r\nspan.price {\r\n    font-size: 12px;\r\n    padding: 7px 10px 0;\r\n    float: left;\r\n    font-weight: 600;\r\n    line-height: 20px;\r\n}\r\n\r\n.item-id b {\r\n    font-weight: 600;\r\n}\r\n\r\n.instock {\r\n    font-size: 12px;\r\n    text-align: center;\r\n    margin: 0 0 3px;\r\n    position: absolute;\r\n    top: 5%;\r\n    box-shadow: 0 0 30px 0 rgb(82 63 105 / 10%);\r\n    left: 70%;\r\n    background: rgb(224 152 152 / 24%);\r\n    width: 50px;\r\n    border: 1px solid rgb(0 0 0 / 10%);\r\n    height: 50px;\r\n    border-radius: 50%;\r\n    img {\r\n        width: 30px !important;\r\n        height: 30px !important;\r\n        margin: 9px auto;\r\n    }\r\n}\r\n\r\n.pro-box.storeitem.item-box {\r\n    border: 1px solid #dee2e6;\r\n    min-height: 230px;\r\n    max-height: 282px;\r\n}\r\n\r\nh1.heading-title {\r\n    font-size: 20px;\r\n    text-transform: uppercase;\r\n    font-weight: 700;\r\n    color: #ff7900;\r\n    position: relative;\r\n    margin-bottom: 10px;\r\n    width: 100%;\r\n    span {\r\n        font-size: 10px;\r\n        text-transform: inherit;\r\n        background: #495057;\r\n        color: #fff;\r\n        padding: 10px 15px;\r\n        border-radius: 25px;\r\n    }\r\n}\r\n\r\nh1.heading-title img {\r\n    max-width: 65px;\r\n    margin-right: 5px;\r\n}\r\n\r\nh1.heading-title small {\r\n    display: inline-block;\r\n    font-weight: 400;\r\n    font-size: 13px;\r\n    position: absolute;\r\n    left: 80px;\r\n    bottom: 4px;\r\n    color: grey;\r\n}\r\n\r\n.offerDiv {\r\n    position: absolute;\r\n    top: 5px;\r\n    right: 5px;\r\n    font-size: 10px;\r\n    background: #dc3545;\r\n    line-height: 10px;\r\n    font-weight: 700;\r\n    width: 35px;\r\n    height: 35px;\r\n    border-radius: 50%;\r\n    padding: 9px;\r\n    text-align: center;\r\n    color: #fff;\r\n}\r\n\r\n.offerDiv small {\r\n    display: block;\r\n}\r\n\r\nspan.price.strike-price {\r\n    color: #ccc;\r\n    text-decoration: line-through;\r\n}\r\n\r\n.row.text-level {\r\n    margin: 0 -10px 10px;\r\n}\r\n\r\n.store-add-remove {\r\n    text-align: center;\r\n    padding: 10px;\r\n    float: left;\r\n    width: 100%;\r\n}\r\n\r\n.row.product-slider-box {\r\n    border-bottom: 5px solid #ddd;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.carousel-inner {\r\n    height: 278px;\r\n}\r\n\r\n.carousel-item {\r\n    margin-right: 0;\r\n    border: 1px solid #f8f9fa;\r\n    background: #fff;\r\n}\r\n\r\n.product-slider-box .domain-product {\r\n    max-width: 23%;\r\n}\r\n\r\n.product-slider-box .sub-domain-product {\r\n    max-width: 77%;\r\n}\r\n\r\n.store-add-remove .btn {\r\n    font-size: 11px;\r\n    text-align: center;\r\n    float: left;\r\n    transition: all .5s;\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n    min-width: 65px;\r\n}\r\n\r\n.store-add-remove .btn+.btn {\r\n    float: right;\r\n}\r\n\r\n.item-subitem-list .pro-box {\r\n    width: 99%;\r\n}\r\n\r\n.item-subitem-list li {\r\n    width: 100%;\r\n    float: left;\r\n}\r\n\r\n.item-box {\r\n    max-width: 225px;\r\n    width: 100%;\r\n    float: left;\r\n}\r\n\r\n.sub-item-box {\r\n    width: 100%;\r\n    float: left;\r\n    max-width: 225px;\r\n}\r\n\r\n.sub-item-box .add_to_cart button.btn {\r\n    background: #000064;\r\n}\r\n\r\n.add_to_cart {\r\n    .remove-btn {\r\n        border-radius: 50%;\r\n        background: #05054ead !important;\r\n        color: #fff;\r\n        width: 35px;\r\n        height: 35px;\r\n        padding: 0;\r\n    }\r\n    .btn+.btn {\r\n        width: calc(100% - 45px);\r\n        border: 0;\r\n        background: #63030c;\r\n        border-radius: 30px;\r\n        font-size: 13px;\r\n        color: #fff;\r\n        margin-left: 10px;\r\n        height: 34px;\r\n    }\r\n}\r\n\r\n.middle-arrow {\r\n    float: left;\r\n    width: 30px;\r\n    height: 50px;\r\n    font-size: 40px;\r\n    margin-top: 10%;\r\n    color: #dee2e6;\r\n    text-align: center;\r\n}\r\n\r\n.price-details {\r\n    float: left;\r\n    width: 100%;\r\n    margin-bottom: 10px;\r\n    font-size: 15px;\r\n    line-height: normal;\r\n    font-weight: 600;\r\n    .unit-price {\r\n        float: left;\r\n        width: 42%;\r\n    }\r\n}\r\n\r\n.unit-price span {\r\n    display: block;\r\n    font-size: 12px;\r\n    font-weight: 400;\r\n}\r\n\r\n.whole-sale-price {\r\n    float: right;\r\n    width: 58%;\r\n    text-align: right;\r\n    span {\r\n        font-size: 12px;\r\n        display: block;\r\n        font-weight: 400;\r\n    }\r\n}\r\n\r\n.add_to_cart {\r\n    clear: both;\r\n}\r\n\r\n.subItem-field {\r\n    width: calc(100% - 280px);\r\n    float: left;\r\n}\r\n\r\n.item img {\r\n    width: 100%;\r\n}\r\n\r\n.pro-box.active {\r\n    border: 1px solid #63030c;\r\n}\r\n\r\n.custom-btn+.custom-btn+.custom-btn {\r\n    background: #dc3545 !important;\r\n}\r\n\r\n.custom-btn+.custom-btn {\r\n    background: #495057 !important;\r\n}\r\n\r\nbutton.filter-btn {\r\n    background: #dc3545;\r\n    color: #fff;\r\n    font-size: 12px;\r\n    &:hover {\r\n        color: #fff;\r\n        background-color: #88101c;\r\n        border-color: #88101c;\r\n    }\r\n}\r\n\r\n.list-group-item {\r\n    padding: 8px 15px;\r\n    .form-check-label {\r\n        vertical-align: text-top;\r\n    }\r\n}\r\n\r\n.box.tag-store {\r\n    padding: 10px 15px 20px;\r\n}\r\n\r\n.btn-group-sm>.btn,\r\n.btn-sm {\r\n    padding: 3px 10px;\r\n    font-size: 12px;\r\n    line-height: 15px;\r\n}\r\n\r\n.list-group-item a {\r\n    font-size: 12px;\r\n    color: #bd2130;\r\n    text-decoration: underline;\r\n}"] }]
    }], function () { return [{ type: i1.ApiService }, { type: i2.NgxSpinnerService }, { type: i3.ToastrService }, { type: i4.FormBuilder }, { type: i5.HttpClient }]; }, null); })();
//# sourceMappingURL=drop-ship-store-domain-product.component.js.map