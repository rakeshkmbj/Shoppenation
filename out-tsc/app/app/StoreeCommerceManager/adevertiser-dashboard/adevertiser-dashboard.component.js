import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "ngx-bootstrap/modal";
import * as i2 from "src/app/services/api.service";
import * as i3 from "@angular/forms";
import * as i4 from "ngx-toastr";
import * as i5 from "@angular/common";
import * as i6 from "ngx-bootstrap/tabs";
import * as i7 from "../../commonComponent/country-state-city-pin/country-state-city-pin.component";
function AdevertiserDashboardComponent_tr_40_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr")(1, "td");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "td");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "td")(8, "button", 26);
    i0.ɵɵlistener("click", function AdevertiserDashboardComponent_tr_40_Template_button_click_8_listener() { const restoredCtx = i0.ɵɵrestoreView(_r10); const list_r7 = restoredCtx.$implicit; const ctx_r9 = i0.ɵɵnextContext(); const _r3 = i0.ɵɵreference(80); return i0.ɵɵresetView(ctx_r9.viewopenModal(_r3, list_r7.RETAIL_D2C_ACCT_INTRNL_USR_ID)); });
    i0.ɵɵtext(9, "View Detail");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "td")(11, "button", 27);
    i0.ɵɵlistener("click", function AdevertiserDashboardComponent_tr_40_Template_button_click_11_listener() { const restoredCtx = i0.ɵɵrestoreView(_r10); const list_r7 = restoredCtx.$implicit; const ctx_r11 = i0.ɵɵnextContext(); const _r1 = i0.ɵɵreference(78); return i0.ɵɵresetView(ctx_r11.openModal(_r1, list_r7.RETAIL_D2C_ACCT_INTRNL_USR_ID)); });
    i0.ɵɵtext(12, "Add New");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const list_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i_r8 + 1);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(list_r7.RETAIL_D2C_ACCT_INTRNL_USR_ID);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", list_r7.RETAIL_D2C_ACCT_INTRNL_FIRST_NAME, " ", list_r7.RETAIL_D2C_ACCT_INTRNL_LAST_NAME, "");
} }
function AdevertiserDashboardComponent_ng_template_77_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 28)(1, "h4", 29);
    i0.ɵɵtext(2, "Add New Inventory ");
    i0.ɵɵelementStart(3, "span", 30)(4, "small");
    i0.ɵɵtext(5, "User Id: 112");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(6, "button", 31);
    i0.ɵɵlistener("click", function AdevertiserDashboardComponent_ng_template_77_Template_button_click_6_listener() { i0.ɵɵrestoreView(_r13); const ctx_r12 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r12.modalRef == null ? null : ctx_r12.modalRef.hide()); });
    i0.ɵɵelementStart(7, "span", 32);
    i0.ɵɵtext(8, "\u00D7");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(9, "form", 33)(10, "div", 34)(11, "div", 1)(12, "div", 35)(13, "div", 36)(14, "label", 37);
    i0.ɵɵtext(15, "Inventory Type");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "select", 38)(17, "option", 39);
    i0.ɵɵtext(18, "Select");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "option", 40);
    i0.ɵɵtext(20, "Web");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "option", 41);
    i0.ɵɵtext(22, "App");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "option", 42);
    i0.ɵɵtext(24, "OTT-CTC");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "option", 43);
    i0.ɵɵtext(26, "M-WEB");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(27, "div", 35)(28, "div", 36)(29, "label", 37);
    i0.ɵɵtext(30, "Name of Inventory");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(31, "input", 44);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(32, "div", 35)(33, "div", 36)(34, "label");
    i0.ɵɵtext(35, "Req. Ad Type");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(36, "select", 45)(37, "option", 39);
    i0.ɵɵtext(38, "Select");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(39, "option", 40);
    i0.ɵɵtext(40, "Video");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(41, "option", 41);
    i0.ɵɵtext(42, "Display");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(43, "option", 42);
    i0.ɵɵtext(44, "INAPP");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(45, "div", 35)(46, "div", 36)(47, "label", 46);
    i0.ɵɵtext(48, "Req. Ad Unit");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(49, "select", 47)(50, "option", 39);
    i0.ɵɵtext(51, "Select");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(52, "option", 40);
    i0.ɵɵtext(53, "INSTREAM");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(54, "option", 41);
    i0.ɵɵtext(55, "OUTSTREAM");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(56, "option", 42);
    i0.ɵɵtext(57, " VAST");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(58, "option", 43);
    i0.ɵɵtext(59, "DISP-BANNER");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(60, "option", 48);
    i0.ɵɵtext(61, "APP-BANNER");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(62, "option", 49);
    i0.ɵɵtext(63, "RECTANGLE");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(64, "option", 50);
    i0.ɵɵtext(65, "APPOPEN");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(66, "option", 51);
    i0.ɵɵtext(67, "NATIVE");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(68, "option", 52);
    i0.ɵɵtext(69, "INTERSTITIAL");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(70, "option", 53);
    i0.ɵɵtext(71, "REWARDING");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(72, "div", 35)(73, "div", 7)(74, "label", 54);
    i0.ɵɵtext(75, "Allocated to Ad Exchaning Org.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(76, "select", 55)(77, "option", 39);
    i0.ɵɵtext(78, "Select");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(79, "option", 40);
    i0.ɵɵtext(80, "UNIBOT");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(81, "option", 41);
    i0.ɵɵtext(82, "GAMESZONE");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(83, "div", 35)(84, "div", 7)(85, "label", 56);
    i0.ɵɵtext(86, "Fee %");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(87, "input", 57);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(88, "div", 58)(89, "div", 1)(90, "div", 59)(91, "button", 60);
    i0.ɵɵlistener("click", function AdevertiserDashboardComponent_ng_template_77_Template_button_click_91_listener() { i0.ɵɵrestoreView(_r13); const ctx_r14 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r14.modalRef == null ? null : ctx_r14.modalRef.hide()); });
    i0.ɵɵtext(92, "Cancel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(93, "button", 61);
    i0.ɵɵlistener("click", function AdevertiserDashboardComponent_ng_template_77_Template_button_click_93_listener() { i0.ɵɵrestoreView(_r13); const ctx_r15 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r15.addPubinventory()); });
    i0.ɵɵtext(94, "Add Inventory");
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(9);
    i0.ɵɵproperty("formGroup", ctx_r2.inventoryForm);
} }
function AdevertiserDashboardComponent_ng_template_79_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 63)(1, "div", 1)(2, "div", 64)(3, "div", 36)(4, "label", 37);
    i0.ɵɵtext(5, "Pub Inv Id");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(6, "input", 65);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "div", 64)(8, "div", 36)(9, "label", 37);
    i0.ɵɵtext(10, "Pub Inv Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(11, "input", 65);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "div", 64)(13, "div", 36)(14, "label", 37);
    i0.ɵɵtext(15, "Pub Inv Type Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(16, "input", 65);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(17, "div", 64)(18, "div", 36)(19, "label", 37);
    i0.ɵɵtext(20, "Pub Ad Type Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(21, "input", 65);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(22, "div", 64)(23, "div", 36)(24, "label", 37);
    i0.ɵɵtext(25, "Pub Ad unit Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(26, "input", 65);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(27, "div", 64)(28, "div", 36)(29, "label", 37);
    i0.ɵɵtext(30, "Exch Inv Id");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(31, "input", 66);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(32, "div", 64)(33, "div", 36)(34, "label", 37);
    i0.ɵɵtext(35, "Exch Inv Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(36, "input", 67);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(37, "div", 64)(38, "div", 36)(39, "label", 37);
    i0.ɵɵtext(40, "Exch Inv Type Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(41, "input", 68);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(42, "div", 64)(43, "div", 36)(44, "label", 37);
    i0.ɵɵtext(45, "Exch Type Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(46, "input", 69);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(47, "div", 64)(48, "div", 36)(49, "label", 37);
    i0.ɵɵtext(50, "Exch Ad unit Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(51, "input", 70);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(52, "div", 64)(53, "div", 36)(54, "label", 37);
    i0.ɵɵtext(55, "Fee %");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(56, "input", 71);
    i0.ɵɵlistener("ngModelChange", function AdevertiserDashboardComponent_ng_template_79_div_10_Template_input_ngModelChange_56_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r19); const item_r17 = restoredCtx.$implicit; return i0.ɵɵresetView(item_r17.AD_ADMEDIA_FEE_PERCNTG = $event); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(57, "div", 64)(58, "div", 36)(59, "label", 37);
    i0.ɵɵtext(60, "Active Flag");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(61, "select", 72);
    i0.ɵɵlistener("ngModelChange", function AdevertiserDashboardComponent_ng_template_79_div_10_Template_select_ngModelChange_61_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r19); const item_r17 = restoredCtx.$implicit; return i0.ɵɵresetView(item_r17.AD_PUB_INV_ACTIV_FLG = $event); });
    i0.ɵɵelementStart(62, "option", 73);
    i0.ɵɵtext(63, "Active");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(64, "option", 74);
    i0.ɵɵtext(65, "InActive");
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(66, "div", 1)(67, "div", 75)(68, "button", 76);
    i0.ɵɵlistener("click", function AdevertiserDashboardComponent_ng_template_79_div_10_Template_button_click_68_listener() { const restoredCtx = i0.ɵɵrestoreView(_r19); const item_r17 = restoredCtx.$implicit; const ctx_r21 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r21.getSelectedInventory(item_r17)); });
    i0.ɵɵtext(69, "Edit");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const item_r17 = ctx.$implicit;
    i0.ɵɵadvance(6);
    i0.ɵɵpropertyInterpolate("value", item_r17.AD_PUBLISHER_INVENTORY_ID);
    i0.ɵɵadvance(5);
    i0.ɵɵpropertyInterpolate("value", item_r17.AD_PUB_INVNAME);
    i0.ɵɵadvance(5);
    i0.ɵɵpropertyInterpolate("value", item_r17.AD_INVTYPE_NAME);
    i0.ɵɵadvance(5);
    i0.ɵɵpropertyInterpolate("value", item_r17.AD_ADTYPE_NAME);
    i0.ɵɵadvance(5);
    i0.ɵɵpropertyInterpolate("value", item_r17.AD_ADUNIT_NAME);
    i0.ɵɵadvance(5);
    i0.ɵɵpropertyInterpolate("value", item_r17.AD_EXCH_INV_ID);
    i0.ɵɵadvance(25);
    i0.ɵɵpropertyInterpolate("value", item_r17.AD_ADMEDIA_FEE_PERCNTG);
    i0.ɵɵproperty("ngModel", item_r17.AD_ADMEDIA_FEE_PERCNTG);
    i0.ɵɵadvance(5);
    i0.ɵɵpropertyInterpolate("value", item_r17.AD_PUB_INV_ACTIV_FLG);
    i0.ɵɵproperty("ngModel", item_r17.AD_PUB_INV_ACTIV_FLG);
} }
function AdevertiserDashboardComponent_ng_template_79_Template(rf, ctx) { if (rf & 1) {
    const _r23 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 28)(1, "h4", 29);
    i0.ɵɵtext(2, "View Details ");
    i0.ɵɵelementStart(3, "span", 30)(4, "small");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(6, "button", 31);
    i0.ɵɵlistener("click", function AdevertiserDashboardComponent_ng_template_79_Template_button_click_6_listener() { i0.ɵɵrestoreView(_r23); const ctx_r22 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r22.modalRef == null ? null : ctx_r22.modalRef.hide()); });
    i0.ɵɵelementStart(7, "span", 32);
    i0.ɵɵtext(8, "\u00D7");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(9, "div", 34);
    i0.ɵɵtemplate(10, AdevertiserDashboardComponent_ng_template_79_div_10_Template, 70, 10, "div", 62);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "div", 58)(12, "div", 1)(13, "div", 59)(14, "button", 60);
    i0.ɵɵlistener("click", function AdevertiserDashboardComponent_ng_template_79_Template_button_click_14_listener() { i0.ɵɵrestoreView(_r23); const ctx_r24 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r24.modalRef == null ? null : ctx_r24.modalRef.hide()); });
    i0.ɵɵtext(15, "Cancel");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1("User Id: ", ctx_r4.userid, "");
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngForOf", ctx_r4.pubInventoryList);
} }
function AdevertiserDashboardComponent_ng_template_81_div_51_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 89);
    i0.ɵɵelementContainerStart(1);
    i0.ɵɵelement(2, "img", 90);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r25 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("src", "data:image/jpeg;base64," + ctx_r25.base64textString, i0.ɵɵsanitizeUrl);
} }
function AdevertiserDashboardComponent_ng_template_81_Template(rf, ctx) { if (rf & 1) {
    const _r27 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 28)(1, "h4", 29);
    i0.ɵɵtext(2, "Add Master Details");
    i0.ɵɵelementStart(3, "span", 30)(4, "small");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(6, "button", 31);
    i0.ɵɵlistener("click", function AdevertiserDashboardComponent_ng_template_81_Template_button_click_6_listener() { i0.ɵɵrestoreView(_r27); const ctx_r26 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r26.modalRef == null ? null : ctx_r26.modalRef.hide()); });
    i0.ɵɵelementStart(7, "span", 32);
    i0.ɵɵtext(8, "\u00D7");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(9, "form", 33)(10, "div", 34)(11, "country-state-city-pin", 77);
    i0.ɵɵlistener("countryEvent", function AdevertiserDashboardComponent_ng_template_81_Template_country_state_city_pin_countryEvent_11_listener($event) { i0.ɵɵrestoreView(_r27); const ctx_r28 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r28.receiveCountryId($event)); })("stateEvent", function AdevertiserDashboardComponent_ng_template_81_Template_country_state_city_pin_stateEvent_11_listener($event) { i0.ɵɵrestoreView(_r27); const ctx_r29 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r29.receiveStateId($event)); })("cityEvent", function AdevertiserDashboardComponent_ng_template_81_Template_country_state_city_pin_cityEvent_11_listener($event) { i0.ɵɵrestoreView(_r27); const ctx_r30 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r30.receiveCityId($event)); })("pincodeEvent", function AdevertiserDashboardComponent_ng_template_81_Template_country_state_city_pin_pincodeEvent_11_listener($event) { i0.ɵɵrestoreView(_r27); const ctx_r31 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r31.receivePinId($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "div", 1)(13, "div", 78)(14, "div", 36)(15, "label", 37);
    i0.ɵɵtext(16, "Org. Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(17, "input", 79);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(18, "div", 78)(19, "div", 36)(20, "label");
    i0.ɵɵtext(21, "Address");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(22, "input", 80);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(23, "div", 78)(24, "div", 36)(25, "label");
    i0.ɵɵtext(26, "Bank Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(27, "input", 81);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(28, "div", 78)(29, "div", 36)(30, "label");
    i0.ɵɵtext(31, "Bank Account Number");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(32, "input", 82);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(33, "div", 78)(34, "div", 36)(35, "label");
    i0.ɵɵtext(36, "Branch Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(37, "input", 83);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(38, "div", 78)(39, "div", 36)(40, "label");
    i0.ɵɵtext(41, "IFSC");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(42, "input", 84);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(43, "div", 78)(44, "div", 36)(45, "label");
    i0.ɵɵtext(46, "Attach Contract PDF");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(47, "div", 85)(48, "input", 86);
    i0.ɵɵlistener("change", function AdevertiserDashboardComponent_ng_template_81_Template_input_change_48_listener($event) { i0.ɵɵrestoreView(_r27); const ctx_r32 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r32.onSelectedFile($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(49, "label", 87);
    i0.ɵɵtext(50);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(51, AdevertiserDashboardComponent_ng_template_81_div_51_Template, 3, 1, "div", 88);
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(52, "div", 58)(53, "div", 1)(54, "div", 59)(55, "button", 60);
    i0.ɵɵlistener("click", function AdevertiserDashboardComponent_ng_template_81_Template_button_click_55_listener() { i0.ɵɵrestoreView(_r27); const ctx_r33 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r33.modalRef == null ? null : ctx_r33.modalRef.hide()); });
    i0.ɵɵtext(56, "Cancel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(57, "button", 61);
    i0.ɵɵlistener("click", function AdevertiserDashboardComponent_ng_template_81_Template_button_click_57_listener() { i0.ɵɵrestoreView(_r27); const ctx_r34 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r34.addPubMasterDetail()); });
    i0.ɵɵtext(58, "Save Master Detail");
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1("User Id: ", ctx_r6.detailmodaluserid, "");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("formGroup", ctx_r6.masterDetailForm);
    i0.ɵɵadvance(41);
    i0.ɵɵtextInterpolate(ctx_r6.uploadLabel);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r6.isImageSaved);
} }
export class AdevertiserDashboardComponent {
    constructor(modalService, apiservice, formBuilder, toastr) {
        this.modalService = modalService;
        this.apiservice = apiservice;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.inventoryist = [];
        this.uploadLabel = 'No file choosen';
        this.storeId = this.apiservice.requiredLoginData.storeid;
        // this.userid = this.apiservice.requiredLoginData.userID
    }
    ngOnInit() {
        this.inventoryForm = this.formBuilder.group({
            INVTYPE_ID: ['', Validators.required],
            ADTYPE_ID: ['', Validators.required],
            ADUNIT_ID: ['', Validators.required],
            ALLOCATD_ORGID: ['', Validators.required],
            FEE_PERCNTG: ['', Validators.required],
            INV_NAME: ['', Validators.required]
        });
        this.pubInventoryForm = this.formBuilder.group({
            AD_ADMEDIA_FEE_PERCNTG: [''],
            AD_PUB_INV_ACTIV_FLG: [''],
        });
        this.masterDetailForm = this.formBuilder.group({
            ORG_NAME: ['', Validators.required],
            ORG_ADDRESS: ['', Validators.required],
            BANK_NAME: ['', Validators.required],
            BANK_BRANCH: ['', Validators.required],
            BANK_ACCOUNT_NUMBR: ['', Validators.required],
            BANK_IFSC: ['', Validators.required],
            BANK_APPROVED_FLG: ['', Validators.required],
            CONTRCT_PDF_ATTCHMNT: ['', Validators.required]
        });
        this.managePubinventory();
    }
    openModal(template, userid) {
        this.modalRef = this.modalService.show(template);
        this.userid = userid;
    }
    viewopenModal(viewdetailtemplate, userid) {
        this.modalRef = this.modalService.show(viewdetailtemplate, Object.assign({}, { class: 'gray modal-lg modal-dialog-scrollable' }));
        this.viewPubInventoryDetail(userid);
    }
    managePubinventory() {
        this.apiservice.getCall(this.apiservice.baseURL + "/ManagePubinventory/" + this.storeId)
            .subscribe(data => {
            console.log(data);
            this.inventoryist = data;
        }), (error) => {
            console.log(error);
        };
    }
    addPubinventory() {
        if (this.inventoryForm.valid) {
            const formData = {
                USER_ID: +this.userid,
                INVTYPE_ID: +this.inventoryForm.value.INVTYPE_ID,
                INV_NAME: this.inventoryForm.value.INV_NAME,
                ADTYPE_ID: +this.inventoryForm.value.ADTYPE_ID,
                ADUNIT_ID: +this.inventoryForm.value.ADUNIT_ID,
                ALLOCATD_ORGID: +this.inventoryForm.value.ALLOCATD_ORGID,
                FEE_PERCNTG: +this.inventoryForm.value.FEE_PERCNTG,
                Active_FLG: true
            };
            console.log(formData);
            this.apiservice.postCall(`${this.apiservice.baseURL}/AddPubinventory`, formData)
                .subscribe(data => {
                console.log(data);
                this.toastr.success(data);
                this.modalService.hide();
            }, error => {
                console.log(error);
                this.toastr.error(error.error.Message);
            });
        }
        else {
            this.toastr.error("Please fill all fields!");
        }
    }
    viewPubInventoryDetail(userid) {
        this.userid = userid;
        this.apiservice.getCall(`${this.apiservice.baseURL}/ViewPubInventoryDetail/${userid}`).
            subscribe(data => {
            console.log(data);
            this.pubInventoryList = data;
        }, error => {
            console.log(error);
        });
    }
    getSelectedInventory(item) {
        console.log(item.AD_PUB_INV_ACTIV_FLG);
        let data = {
            AD_PUBLISHER_INVENTORY_ID: item.AD_PUBLISHER_INVENTORY_ID,
            USER_ID: item.AD_PUB_USER_ID,
            INVTYPE_ID: item.AD_PUB_INVTYPE_ID,
            ADTYPE_ID: item.AD_PUB_ADTYPE_ID,
            ADUNIT_ID: item.AD_PUB_ADUNIT_ID,
            ALLOCATD_ORGID: item.AD_PUB_ALLOCATD_ORGID,
            FEE_PERCNTG: +item.AD_ADMEDIA_FEE_PERCNTG,
            INV_NAME: item.AD_PUB_INVNAME,
            Active_FLG: item.AD_PUB_INV_ACTIV_FLG === 'true' ? true : item.AD_PUB_INV_ACTIV_FLG === 'false' ? false : item.AD_PUB_INV_ACTIV_FLG
        };
        console.log(data);
        this.apiservice.postCall(this.apiservice.baseURL + '/EditPubinventory', data).
            subscribe((data) => {
            console.log(data);
            this.toastr.success(data);
            this.modalService.hide();
        }, error => {
            console.log(error);
            this.toastr.error(error.error);
        });
    }
    AddMasterDetailopenModal(addMasterDetailtemplate, userid) {
        this.detailmodaluserid = userid;
        this.modalRef = this.modalService.show(addMasterDetailtemplate, Object.assign({}, { class: 'gray modal-lg modal-dialog-scrollable' }));
        // this.userid = userid;
    }
    receiveCountryId($event) {
        this.countryID = $event;
        console.log(this.countryID);
    }
    receiveStateId($event) {
        this.stateID = $event;
    }
    receiveCityId($event) {
        this.cityID = $event;
    }
    receivePinId($event) {
        this.pinID = $event;
    }
    addPubMasterDetail() {
        let data = {
            USERID: +this.detailmodaluserid,
            ORG_COUNTRY: +this.countryID,
            STATE: +this.stateID,
            CITY: +this.cityID,
            PINCODE: +this.pinID,
            ORG_NAME: this.masterDetailForm.value.ORG_NAME,
            ORG_ADDRESS: this.masterDetailForm.value.ORG_ADDRESS,
            BANK_NAME: this.masterDetailForm.value.BANK_NAME,
            BANK_BRANCH: this.masterDetailForm.value.BANK_BRANCH,
            BANK_ACCOUNT_NUMBR: +this.masterDetailForm.value.BANK_ACCOUNT_NUMBR,
            BANK_IFSC: this.masterDetailForm.value.BANK_IFSC,
            BANK_APPROVED_FLG: true,
            CONTRCT_PDF_ATTCHMNT: this.base64textString,
        };
        console.log(data);
        this.apiservice.postCall(this.apiservice.baseURL + '/AddPubMasterDetail', data)
            .subscribe((data) => {
            console.log(data);
            this.toastr.success(data);
        }, error => {
            console.log(error);
            this.toastr.error(error.error.Message);
        });
    }
    onSelectedFile(event) {
        var files = event.target.files;
        var file = files[0];
        var filename = files[0].name;
        this.uploadLabel = filename;
        if (files && file) {
            var reader = new FileReader();
            reader.onload = this._handleReaderLoaded.bind(this);
            reader.readAsBinaryString(file);
        }
    }
    _handleReaderLoaded(readerEvt) {
        let binaryString = readerEvt.target.result;
        this.base64textString = btoa(binaryString);
        console.log(this.base64textString);
        this.isImageSaved = true;
        //this.isFileUploaded = false
    }
}
AdevertiserDashboardComponent.ɵfac = function AdevertiserDashboardComponent_Factory(t) { return new (t || AdevertiserDashboardComponent)(i0.ɵɵdirectiveInject(i1.BsModalService), i0.ɵɵdirectiveInject(i2.ApiService), i0.ɵɵdirectiveInject(i3.FormBuilder), i0.ɵɵdirectiveInject(i4.ToastrService)); };
AdevertiserDashboardComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AdevertiserDashboardComponent, selectors: [["app-adevertiser-dashboard"]], decls: 83, vars: 1, consts: [[1, "main-content-area"], [1, "row"], [1, "col-md-12"], [1, "heading-title"], [1, "topLevel"], ["heading", "Manage User Inventory", "id", "tab1"], [1, "col-md-3", "mt-2"], [1, "from-group"], ["for", "role"], ["id", "role", 1, "form-control"], [1, "col-md-3", "d-flex", "align-items-end", "pl-0"], [1, "btn", "custom-btn", "w-75"], [1, "card", "mt-3"], [1, "d-flex", "align-items-center"], [1, "mr-auto"], [1, "table"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["heading", "Manage User Master Details"], [1, "btn", "btn-outline-info", "btn-sm", "px-3"], [1, "btn", "custom-btn", 3, "click"], ["heading", "Data Extraction from Excel"], ["heading", "Populate Publisher Reporting"], ["template", ""], ["viewdetailtemplate", ""], ["addMasterDetailtemplate", ""], [1, "btn", "btn-outline-info", "btn-sm", "px-3", 3, "click"], [1, "btn", "custom-btn", "w-50", 3, "click"], [1, "modal-header"], [1, "modal-title", "pull-left"], [1, "badge", "bg-secondary", "ml-2", "px-2", "pb-1", "text-white"], ["type", "button", "aria-label", "Close", 1, "btn-close", "close", "pull-right", 3, "click"], ["aria-hidden", "true", 1, "visually-hidden"], [3, "formGroup"], [1, "modal-body"], [1, "col-md-6"], [1, "from-group", "mb-2"], ["for", "it"], ["id", "it", "formControlName", "INVTYPE_ID", 1, "form-control"], ["value", "", "selected", ""], ["value", "1"], ["value", "2"], ["value", "3"], ["value", "4"], ["type", "text", "formControlName", "INV_NAME", 1, "form-control"], ["id", "rat", "formControlName", "ADTYPE_ID", 1, "form-control"], ["for", "rau"], ["id", "rau", "formControlName", "ADUNIT_ID", 1, "form-control"], ["value", "5"], ["value", "6"], ["value", "7"], ["value", "8"], ["value", "9"], ["value", "10"], ["for", "aaeo"], ["id", "aaeo", "formControlName", "ALLOCATD_ORGID", 1, "form-control"], ["for", "fee"], ["id", "fee", "formControlName", "FEE_PERCNTG", 1, "form-control"], [1, "modal-footer"], [1, "col-md-12", "d-flex", "justify-content-end", "px-1"], [1, "btn", "btn-secondary", "mr-2", "cancel-btn", 3, "click"], [1, "btn", "custom-btn", "px-4", 3, "click"], ["class", "card", 4, "ngFor", "ngForOf"], [1, "card"], [1, "col-md-3"], ["type", "text", "readonly", "", 1, "form-control", 3, "value"], ["type", "text", 1, "form-control", 3, "value"], ["type", "text", "value", "xxxxxx", 1, "form-control"], ["type", "text", "value", "Wb", 1, "form-control"], ["type", "text", "value", "Ban", 1, "form-control"], ["type", "text", "value", "Sq rect", 1, "form-control"], ["type", "text", 1, "form-control", 3, "ngModel", "value", "ngModelChange"], [1, "form-control", 3, "ngModel", "value", "ngModelChange"], ["value", "true"], ["value", "false"], [1, "col-md-12", "d-flex", "justify-content-end"], [1, "btn", "mt-2", "custom-btn", "px-4", 3, "click"], [3, "countryEvent", "stateEvent", "cityEvent", "pincodeEvent"], [1, "col-md-4"], ["formControlName", "ORG_NAME", "type", "text", 1, "form-control"], ["formControlName", "ORG_ADDRESS", "type", "text", 1, "form-control"], ["formControlName", "BANK_NAME", "type", "text", 1, "form-control"], ["formControlName", "BANK_ACCOUNT_NUMBR", "type", "text", 1, "form-control"], ["formControlName", "BANK_BRANCH", "type", "text", 1, "form-control"], ["formControlName", "BANK_IFSC", "type", "text", 1, "form-control"], [1, "custom-file", "fileInputProfileWrap"], ["name", "file", "type", "file", "formControlName", "CONTRCT_PDF_ATTCHMNT", 1, "custom-file-input", 3, "change"], [1, "custom-file-label"], ["class", "img-space", 4, "ngIf"], [1, "img-space"], [3, "src"]], template: function AdevertiserDashboardComponent_Template(rf, ctx) { if (rf & 1) {
        const _r35 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
        i0.ɵɵtext(4, "Advertiser Dashboard");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(5, "div", 4)(6, "div", 1)(7, "div", 2)(8, "div")(9, "tabset")(10, "tab", 5)(11, "div", 1)(12, "div", 6)(13, "div", 7)(14, "label", 8);
        i0.ɵɵtext(15, "Role");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(16, "select", 9)(17, "option");
        i0.ɵɵtext(18, "Publisher");
        i0.ɵɵelementEnd()()()();
        i0.ɵɵelementStart(19, "div", 10)(20, "button", 11);
        i0.ɵɵtext(21, "Manage Inventory");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(22, "div", 12)(23, "div", 13)(24, "h4", 14);
        i0.ɵɵtext(25, "Inventory Details");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(26, "table", 15)(27, "thead")(28, "tr")(29, "th", 16);
        i0.ɵɵtext(30, "#");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(31, "th", 16);
        i0.ɵɵtext(32, "User ID");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(33, "th", 16);
        i0.ɵɵtext(34, "User Name");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(35, "th", 16);
        i0.ɵɵtext(36, "Detail of Inventory");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(37, "th", 16);
        i0.ɵɵtext(38, "Action");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(39, "tbody");
        i0.ɵɵtemplate(40, AdevertiserDashboardComponent_tr_40_Template, 13, 4, "tr", 17);
        i0.ɵɵelementEnd()()()();
        i0.ɵɵelementStart(41, "tab", 18)(42, "div", 12)(43, "div", 13)(44, "h4", 14);
        i0.ɵɵtext(45, "User Master Details");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(46, "table", 15)(47, "thead")(48, "tr")(49, "th", 16);
        i0.ɵɵtext(50, "#");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(51, "th", 16);
        i0.ɵɵtext(52, "User ID");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(53, "th", 16);
        i0.ɵɵtext(54, "User Name");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(55, "th", 16);
        i0.ɵɵtext(56, "Master Details");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(57, "th", 16);
        i0.ɵɵtext(58, "Action");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(59, "tbody")(60, "tr")(61, "td");
        i0.ɵɵtext(62, "1");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(63, "td");
        i0.ɵɵtext(64, "1234");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(65, "td");
        i0.ɵɵtext(66, "TechBuddy");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(67, "td")(68, "button", 19);
        i0.ɵɵtext(69, "View");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(70, "td")(71, "button", 20);
        i0.ɵɵlistener("click", function AdevertiserDashboardComponent_Template_button_click_71_listener() { i0.ɵɵrestoreView(_r35); const _r5 = i0.ɵɵreference(82); return i0.ɵɵresetView(ctx.AddMasterDetailopenModal(_r5, "1100060")); });
        i0.ɵɵtext(72, "Add Master Detail");
        i0.ɵɵelementEnd()()()()()()();
        i0.ɵɵelementStart(73, "tab", 21);
        i0.ɵɵtext(74, "Basic content 2");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(75, "tab", 22);
        i0.ɵɵtext(76, "Basic content 2");
        i0.ɵɵelementEnd()()()()()();
        i0.ɵɵtemplate(77, AdevertiserDashboardComponent_ng_template_77_Template, 95, 1, "ng-template", null, 23, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(79, AdevertiserDashboardComponent_ng_template_79_Template, 16, 2, "ng-template", null, 24, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(81, AdevertiserDashboardComponent_ng_template_81_Template, 59, 4, "ng-template", null, 25, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(40);
        i0.ɵɵproperty("ngForOf", ctx.inventoryist);
    } }, dependencies: [i5.NgForOf, i5.NgIf, i3.ɵNgNoValidate, i3.NgSelectOption, i3.ɵNgSelectMultipleOption, i3.DefaultValueAccessor, i3.SelectControlValueAccessor, i3.NgControlStatus, i3.NgControlStatusGroup, i3.FormGroupDirective, i3.FormControlName, i3.NgModel, i6.TabDirective, i6.TabsetComponent, i7.CountryStateCityPinComponent], styles: [".topLevel[_ngcontent-%COMP%] {\r\n    background: #fff;\r\n    padding: 20px;\r\n    margin: 0;\r\n    border-radius: 5px;\r\n}\r\n\r\n.form-control[readonly][_ngcontent-%COMP%] {\r\n    border: 0;\r\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AdevertiserDashboardComponent, [{
        type: Component,
        args: [{ selector: 'app-adevertiser-dashboard', template: "<div class=\"main-content-area\">\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <h1 class=\"heading-title\">Advertiser Dashboard</h1>\n        </div>\n    </div>\n\n    <div class=\"topLevel\">\n\n<div class=\"row\">\n    <div class=\"col-md-12\">\n        <div>\n            <tabset>\n              <tab heading=\"Manage User Inventory\" id=\"tab1\">\n\n                <div class=\"row\">\n                    <div class=\"col-md-3 mt-2\">\n                        <div class=\"from-group\">\n                            <label for=\"role\">Role</label>\n                            <select class=\"form-control\" id=\"role\">\n                                <option>Publisher</option>\n                            </select>\n                        </div>\n                    </div>\n        \n                    <div class=\"col-md-3 d-flex align-items-end pl-0\">\n        \n                        <button class=\"btn custom-btn w-75\">Manage Inventory</button>\n                    </div>\n                </div>\n            \n            <div class=\"card mt-3\">\n                <div class=\"d-flex align-items-center\">\n                    <h4 class=\"mr-auto\">Inventory Details</h4>\n                </div>\n                <table class=\"table\">\n                    <thead>\n                        <tr>\n                            <th scope=\"col\">#</th>\n                            <th scope=\"col\">User ID</th>\n                            <th scope=\"col\">User Name</th>\n                            <th scope=\"col\">Detail of Inventory</th>\n                            <th scope=\"col\">Action</th>\n        \n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let list of inventoryist; index as i\">\n                            <td>{{i+1}}</td>\n                            <td>{{list.RETAIL_D2C_ACCT_INTRNL_USR_ID}}</td>\n                            <td>{{list.RETAIL_D2C_ACCT_INTRNL_FIRST_NAME}} {{list.RETAIL_D2C_ACCT_INTRNL_LAST_NAME}}</td>\n                            <td><button (click)=\"viewopenModal(viewdetailtemplate, list.RETAIL_D2C_ACCT_INTRNL_USR_ID)\"\n                                    class=\"btn btn-outline-info btn-sm px-3\">View Detail</button></td>\n                            <td><button (click)=\"openModal(template, list.RETAIL_D2C_ACCT_INTRNL_USR_ID)\" class=\"btn custom-btn w-50\">Add New</button></td>\n                        </tr>\n        \n                    </tbody>\n                </table>\n            </div>\n        \n              </tab>\n              <tab heading=\"Manage User Master Details\">\n                <div class=\"card mt-3\">\n                    <div class=\"d-flex align-items-center\">\n                        <h4 class=\"mr-auto\">User Master Details</h4>\n                    </div>\n                    <table class=\"table\">\n                        <thead>\n                            <tr>\n                                <th scope=\"col\">#</th>\n                                <th scope=\"col\">User ID</th>\n                                <th scope=\"col\">User Name</th>\n                                <th scope=\"col\">Master Details</th>\n                                <th scope=\"col\">Action</th>\n            \n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr>\n                                <td>1</td>\n                                <td>1234</td>\n                                <td>TechBuddy</td>\n                                <td><button class=\"btn btn-outline-info btn-sm px-3\">View</button></td>\n                                <td><button (click)=\"AddMasterDetailopenModal(addMasterDetailtemplate, '1100060')\" class=\"btn custom-btn\">Add Master Detail</button></td>\n                            </tr>\n                        </tbody>\n                        </table>\n                        </div>\n              </tab>\n              <tab heading=\"Data Extraction from Excel\">Basic content 2</tab>\n              <tab heading=\"Populate Publisher Reporting\">Basic content 2</tab>\n            </tabset>\n          </div>\n    </div>\n</div>\n\n\n\n</div>\n\n<ng-template #template>\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title pull-left\">Add New Inventory <span\n                class=\"badge bg-secondary ml-2 px-2 pb-1 text-white\"><small>User Id: 112</small></span></h4>\n        <button type=\"button\" class=\"btn-close close pull-right\" aria-label=\"Close\" (click)=\"modalRef?.hide()\">\n            <span aria-hidden=\"true\" class=\"visually-hidden\">&times;</span>\n        </button>\n    </div>\n    <form [formGroup]=\"inventoryForm\">\n    <div class=\"modal-body\">\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <div class=\"from-group mb-2\">\n                    <label for=\"it\">Inventory Type</label>\n                    <select class=\"form-control\" id=\"it\" formControlName=\"INVTYPE_ID\">\n                        <option value=\"\" selected>Select</option>\n                        <option value=\"1\">Web</option>\n                        <option value=\"2\">App</option>\n                        <option value=\"3\">OTT-CTC</option>\n                        <option value=\"4\">M-WEB</option>\n                    </select>\n                </div>\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"from-group mb-2\">\n                    <label for=\"it\">Name of Inventory</label>\n                    <input type=\"text\" class=\"form-control\" formControlName=\"INV_NAME\" />\n                </div>\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"from-group mb-2\">\n                    <label >Req. Ad Type</label>\n                    <select class=\"form-control\" id=\"rat\" formControlName=\"ADTYPE_ID\">\n                        <option value=\"\" selected>Select</option>\n                        <option value=\"1\">Video</option>\n                        <option value=\"2\">Display</option>\n                        <option value=\"3\">INAPP</option>\n                    </select>\n                </div>\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"from-group mb-2\">\n                    <label for=\"rau\">Req. Ad Unit</label>\n                    <select class=\"form-control\" id=\"rau\" formControlName=\"ADUNIT_ID\">\n                        <option value=\"\" selected>Select</option>\n                        <option value=\"1\">INSTREAM</option>\n                        <option value=\"2\">OUTSTREAM</option>\n                        <option value=\"3\"> VAST</option>\n                        <option value=\"4\">DISP-BANNER</option>\n                        <option value=\"5\">APP-BANNER</option>\n                        <option value=\"6\">RECTANGLE</option>\n                        <option value=\"7\">APPOPEN</option>\n                        <option value=\"8\">NATIVE</option>\n                        <option value=\"9\">INTERSTITIAL</option>\n                        <option value=\"10\">REWARDING</option>\n                    </select>\n                </div>\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"from-group\">\n                    <label for=\"aaeo\">Allocated to Ad Exchaning Org.</label>\n                    <select class=\"form-control\" id=\"aaeo\" formControlName=\"ALLOCATD_ORGID\">\n                        <option value=\"\" selected>Select</option>\n                        <option value=\"1\">UNIBOT</option>\n                        <option value=\"2\">GAMESZONE</option>\n                    </select>\n                </div>\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"from-group\">\n                    <label for=\"fee\">Fee %</label>\n                    <input class=\"form-control\" id=\"fee\" formControlName=\"FEE_PERCNTG\" />\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <div class=\"row\">\n            <div class=\"col-md-12 d-flex justify-content-end px-1\">\n                <button (click)=\"modalRef?.hide()\" class=\"btn btn-secondary mr-2 cancel-btn\">Cancel</button>\n                <button class=\"btn custom-btn px-4\" (click)=\"addPubinventory()\">Add Inventory</button>\n            </div>\n        </div>\n    </div>\n</form>\n</ng-template>\n\n<ng-template #viewdetailtemplate>\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title pull-left\">View Details <span\n                class=\"badge bg-secondary ml-2 px-2 pb-1 text-white\"><small>User Id: {{userid}}</small></span></h4>\n        <button type=\"button\" class=\"btn-close close pull-right\" aria-label=\"Close\" (click)=\"modalRef?.hide()\">\n            <span aria-hidden=\"true\" class=\"visually-hidden\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"card\" *ngFor=\"let item of pubInventoryList\">\n            <div class=\"row\">\n                <div class=\"col-md-3\">\n                    <div class=\"from-group mb-2\">\n                        <label for=\"it\">Pub Inv Id</label>\n                        <input type=\"text\" value=\"{{item.AD_PUBLISHER_INVENTORY_ID}}\" class=\"form-control\" readonly />\n                    </div>\n                </div>\n                <div class=\"col-md-3\">\n                    <div class=\"from-group mb-2\">\n                        <label for=\"it\">Pub Inv Name</label>\n                        <input type=\"text\" value=\"{{item.AD_PUB_INVNAME}}\" class=\"form-control\" readonly />\n                    </div>\n                </div>\n                <div class=\"col-md-3\">\n                    <div class=\"from-group mb-2\">\n                        <label for=\"it\">Pub Inv Type Name</label>\n                        <input type=\"text\" value=\"{{item.AD_INVTYPE_NAME}}\" class=\"form-control\" readonly />\n                    </div>\n                </div>\n                <div class=\"col-md-3\">\n                    <div class=\"from-group mb-2\">\n                        <label for=\"it\">Pub Ad Type Name</label>\n                        <input type=\"text\" value=\"{{item.AD_ADTYPE_NAME}}\" class=\"form-control\" readonly />\n                    </div>\n                </div>\n                <div class=\"col-md-3\">\n                    <div class=\"from-group mb-2\">\n                        <label for=\"it\">Pub Ad unit Name</label>\n                        <input type=\"text\" value=\"{{item.AD_ADUNIT_NAME}}\" class=\"form-control\" readonly />\n                    </div>\n                </div>\n                <div class=\"col-md-3\">\n                    <div class=\"from-group mb-2\">\n                        <label for=\"it\">Exch Inv Id</label>\n                        <input type=\"text\" value=\"{{item.AD_EXCH_INV_ID}}\" class=\"form-control\" />\n                    </div>\n                </div>\n                <div class=\"col-md-3\">\n                    <div class=\"from-group mb-2\">\n                        <label for=\"it\">Exch Inv Name</label>\n                        <input type=\"text\" value=\"xxxxxx\" class=\"form-control\" />\n                    </div>\n                </div>\n                <div class=\"col-md-3\">\n                    <div class=\"from-group mb-2\">\n                        <label for=\"it\">Exch Inv Type Name</label>\n                        <input type=\"text\" value=\"Wb\" class=\"form-control\" />\n                    </div>\n                </div>\n                <div class=\"col-md-3\">\n                    <div class=\"from-group mb-2\">\n                        <label for=\"it\">Exch Type Name</label>\n                        <input type=\"text\" value=\"Ban\" class=\"form-control\" />\n                    </div>\n                </div>\n                <div class=\"col-md-3\">\n                    <div class=\"from-group mb-2\">\n                        <label for=\"it\">Exch Ad unit Name</label>\n                        <input type=\"text\" value=\"Sq rect\" class=\"form-control\" />\n                    </div>\n                </div>\n                <div class=\"col-md-3\">\n                    <div class=\"from-group mb-2\">\n                        <label for=\"it\">Fee %</label>\n                        <input [(ngModel)]=\"item.AD_ADMEDIA_FEE_PERCNTG\" type=\"text\" value=\"{{item.AD_ADMEDIA_FEE_PERCNTG}}\" class=\"form-control\" />\n                    </div>\n                </div>\n                <div class=\"col-md-3\">\n                    <div class=\"from-group mb-2\">\n                        <label for=\"it\">Active Flag</label>\n                        <select [(ngModel)]=\"item.AD_PUB_INV_ACTIV_FLG\" class=\"form-control\" value=\"{{item.AD_PUB_INV_ACTIV_FLG}}\">\n                            <option value=\"true\">Active</option>\n                            <option value=\"false\">InActive</option>\n                            \n                        </select>\n                        <!-- <input formControlName=\"FEE_PERCNTG\" type=\"text\" value=\"{{item.AD_PUB_INV_ACTIV_FLG}}\" class=\"form-control\" /> -->\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-12 d-flex justify-content-end\">\n                    <button (click)=\"getSelectedInventory(item)\" class=\"btn mt-2 custom-btn px-4\">Edit</button>\n                </div>\n            </div>\n        </div>\n  \n    </div>\n    <div class=\"modal-footer\">\n        <div class=\"row\">\n            <div class=\"col-md-12 d-flex justify-content-end px-1\">\n                <button (click)=\"modalRef?.hide()\" class=\"btn btn-secondary mr-2 cancel-btn\">Cancel</button>\n\n            </div>\n        </div>\n    </div>\n</ng-template>\n\n\n<ng-template #addMasterDetailtemplate>\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title pull-left\">Add Master Details<span\n                class=\"badge bg-secondary ml-2 px-2 pb-1 text-white\"><small>User Id: {{detailmodaluserid}}</small></span></h4>\n        <button type=\"button\" class=\"btn-close close pull-right\" aria-label=\"Close\" (click)=\"modalRef?.hide()\">\n            <span aria-hidden=\"true\" class=\"visually-hidden\">&times;</span>\n        </button>\n    </div>\n    <form [formGroup]=\"masterDetailForm\">\n      \n    <div class=\"modal-body\">\n      \n            <country-state-city-pin (countryEvent)=\"receiveCountryId($event)\" (stateEvent)=\"receiveStateId($event)\" (cityEvent)=\"receiveCityId($event)\" (pincodeEvent)=\"receivePinId($event)\"></country-state-city-pin>\n            <div class=\"row\">\n            <div class=\"col-md-4\">\n                <div class=\"from-group mb-2\">\n                    <label for=\"it\">Org. Name</label>\n                    <input formControlName=\"ORG_NAME\" type=\"text\" class=\"form-control\" />\n                </div>\n            </div>\n            <div class=\"col-md-4\">\n                <div class=\"from-group mb-2\">\n                    <label >Address</label>\n                    <input formControlName=\"ORG_ADDRESS\" type=\"text\" class=\"form-control\" />\n                </div>\n            </div>\n            <div class=\"col-md-4\">\n                <div class=\"from-group mb-2\">\n                    <label >Bank Name</label>\n                    <input formControlName=\"BANK_NAME\" type=\"text\" class=\"form-control\" />\n                </div>\n            </div>\n            <div class=\"col-md-4\">\n                <div class=\"from-group mb-2\">\n                    <label >Bank Account Number</label>\n                    <input formControlName=\"BANK_ACCOUNT_NUMBR\" type=\"text\" class=\"form-control\" />\n                </div>\n            </div>\n            <div class=\"col-md-4\">\n                <div class=\"from-group mb-2\">\n                    <label >Branch Name</label>\n                    <input formControlName=\"BANK_BRANCH\" type=\"text\" class=\"form-control\" />\n                </div>\n            </div>\n            <div class=\"col-md-4\">\n                <div class=\"from-group mb-2\">\n                    <label>IFSC</label>\n                    <input formControlName=\"BANK_IFSC\" type=\"text\" class=\"form-control\" />\n                </div>\n            </div>\n            <div class=\"col-md-4\">\n                <div class=\"from-group mb-2\">\n                    <label>Attach Contract PDF</label>\n                    <!-- <input formControlName=\"CONTRCT_PDF_ATTCHMNT\" type=\"text\" class=\"form-control\" /> -->\n                    <div class=\"custom-file fileInputProfileWrap\">\n                        <input name=\"file\" type=\"file\" class=\"custom-file-input\" (change)=\"onSelectedFile($event)\"\n                          formControlName=\"CONTRCT_PDF_ATTCHMNT\">\n                       \n                        <label class=\"custom-file-label\">{{uploadLabel}}</label>\n                        <div class=\"img-space\" *ngIf=\"isImageSaved\">\n                          <ng-container>\n                            <img [src]=\"'data:image/jpeg;base64,' + base64textString\">\n                          </ng-container>\n                        </div>\n          \n                      </div>\n                </div>\n            </div>\n    </div>\n</div>\n    <div class=\"modal-footer\">\n        <div class=\"row\">\n            <div class=\"col-md-12 d-flex justify-content-end px-1\">\n                <button (click)=\"modalRef?.hide()\" class=\"btn btn-secondary mr-2 cancel-btn\">Cancel</button>\n                <button (click)=\"addPubMasterDetail()\" class=\"btn custom-btn px-4\">Save Master Detail</button>\n            </div>\n        </div>\n    </div>\n</form>\n</ng-template>", styles: [".topLevel {\r\n    background: #fff;\r\n    padding: 20px;\r\n    margin: 0;\r\n    border-radius: 5px;\r\n}\r\n\r\n.form-control[readonly] {\r\n    border: 0;\r\n}\r\n\r\n\r\n"] }]
    }], function () { return [{ type: i1.BsModalService }, { type: i2.ApiService }, { type: i3.FormBuilder }, { type: i4.ToastrService }]; }, null); })();
//# sourceMappingURL=adevertiser-dashboard.component.js.map