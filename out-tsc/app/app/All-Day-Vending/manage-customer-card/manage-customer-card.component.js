import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { takeUntil, filter } from 'rxjs/operators';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "src/app/services/api.service";
import * as i2 from "ngx-bootstrap/modal";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/router";
import * as i5 from "ngx-toastr";
import * as i6 from "ngx-spinner";
import * as i7 from "../../razorpay.service";
import * as i8 from "src/app/services/payment-status.service";
import * as i9 from "@angular/common";
import * as i10 from "ngx-bootstrap/tabs";
function ManageCustomerCardComponent_div_6_option_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 25);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const country_r24 = ctx.$implicit;
    i0.ɵɵproperty("value", country_r24.CNTRY_ID);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", country_r24.CNTRY_NM, "");
} }
function ManageCustomerCardComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r26 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 6)(1, "div", 7)(2, "label");
    i0.ɵɵtext(3, "Country");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "select", 24);
    i0.ɵɵlistener("change", function ManageCustomerCardComponent_div_6_Template_select_change_4_listener($event) { i0.ɵɵrestoreView(_r26); const ctx_r25 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r25.changeCountry($event)); });
    i0.ɵɵelementStart(5, "option", 9);
    i0.ɵɵtext(6, "Select");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, ManageCustomerCardComponent_div_6_option_7_Template, 2, 2, "option", 10);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngForOf", ctx_r0.countryList);
} }
function ManageCustomerCardComponent_div_7_option_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 25);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const state_r28 = ctx.$implicit;
    i0.ɵɵproperty("value", state_r28.STATE_ID);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", state_r28.STATE_NM, "");
} }
function ManageCustomerCardComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r30 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 6)(1, "div", 7)(2, "label");
    i0.ɵɵtext(3, "State");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "select", 24);
    i0.ɵɵlistener("change", function ManageCustomerCardComponent_div_7_Template_select_change_4_listener($event) { i0.ɵɵrestoreView(_r30); const ctx_r29 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r29.changeState($event)); });
    i0.ɵɵelementStart(5, "option", 9);
    i0.ɵɵtext(6, "Select");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, ManageCustomerCardComponent_div_7_option_7_Template, 2, 2, "option", 10);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngForOf", ctx_r1.stateList);
} }
function ManageCustomerCardComponent_div_8_option_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 25);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const acc_r32 = ctx.$implicit;
    i0.ɵɵproperty("value", acc_r32.THIRD_NODE_ACCT_SUBACCT_ID);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", acc_r32.RETAIL_D2C_SUBACCT_OFFICE_NAME, " ");
} }
function ManageCustomerCardComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r34 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 6)(1, "div", 7)(2, "label");
    i0.ɵɵtext(3, "My Account's");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "select", 26);
    i0.ɵɵlistener("change", function ManageCustomerCardComponent_div_8_Template_select_change_4_listener($event) { i0.ɵɵrestoreView(_r34); const ctx_r33 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r33.onAccountChange($event)); });
    i0.ɵɵelementStart(5, "option", 9);
    i0.ɵɵtext(6, "Select");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, ManageCustomerCardComponent_div_8_option_7_Template, 2, 2, "option", 10);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngForOf", ctx_r2.thirdNodeAccArr);
} }
function ManageCustomerCardComponent_option_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 25);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const classDep_r35 = ctx.$implicit;
    i0.ɵɵproperty("value", classDep_r35.ADC_VEND_CLAS_DEPT_ID);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", classDep_r35.ADC_VEND_CLAS_DEPT_NAME, " ");
} }
function ManageCustomerCardComponent_div_27_tr_26_span_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵelement(1, "img", 39);
    i0.ɵɵelementEnd();
} }
function ManageCustomerCardComponent_div_27_tr_26_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 40);
} }
function ManageCustomerCardComponent_div_27_tr_26_Template(rf, ctx) { if (rf & 1) {
    const _r43 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr")(1, "td");
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "number");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "td");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "td");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "td");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "td");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "td")(13, "button", 32);
    i0.ɵɵlistener("click", function ManageCustomerCardComponent_div_27_tr_26_Template_button_click_13_listener() { const restoredCtx = i0.ɵɵrestoreView(_r43); const user_r37 = restoredCtx.$implicit; const ctx_r42 = i0.ɵɵnextContext(2); const _r11 = i0.ɵɵreference(35); return i0.ɵɵresetView(ctx_r42.openChangePassword(user_r37, _r11)); });
    i0.ɵɵtext(14, " Change pwd ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(15, "td", 33);
    i0.ɵɵtemplate(16, ManageCustomerCardComponent_div_27_tr_26_span_16_Template, 2, 0, "span", 34);
    i0.ɵɵtemplate(17, ManageCustomerCardComponent_div_27_tr_26_ng_template_17_Template, 1, 0, "ng-template", null, 35, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "td");
    i0.ɵɵtext(20);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "td")(22, "button", 36);
    i0.ɵɵlistener("click", function ManageCustomerCardComponent_div_27_tr_26_Template_button_click_22_listener() { const restoredCtx = i0.ɵɵrestoreView(_r43); const user_r37 = restoredCtx.$implicit; const ctx_r44 = i0.ɵɵnextContext(2); const _r15 = i0.ɵɵreference(39); return i0.ɵɵresetView(ctx_r44.viewTransactionModal(_r15, user_r37)); });
    i0.ɵɵtext(23, " View Txns ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "button", 36);
    i0.ɵɵlistener("click", function ManageCustomerCardComponent_div_27_tr_26_Template_button_click_24_listener() { const restoredCtx = i0.ɵɵrestoreView(_r43); const user_r37 = restoredCtx.$implicit; const ctx_r45 = i0.ɵɵnextContext(2); const _r13 = i0.ɵɵreference(37); return i0.ɵɵresetView(ctx_r45.viewBalance(_r13, user_r37)); });
    i0.ɵɵtext(25, " View Bal. ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "button", 36);
    i0.ɵɵlistener("click", function ManageCustomerCardComponent_div_27_tr_26_Template_button_click_26_listener() { const restoredCtx = i0.ɵɵrestoreView(_r43); const user_r37 = restoredCtx.$implicit; const ctx_r46 = i0.ɵɵnextContext(2); const _r7 = i0.ɵɵreference(31); return i0.ɵɵresetView(ctx_r46.confirmDelete(_r7, user_r37)); });
    i0.ɵɵtext(27, " Delete Card ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "span", 37)(29, "i", 38);
    i0.ɵɵlistener("click", function ManageCustomerCardComponent_div_27_tr_26_Template_i_click_29_listener() { const restoredCtx = i0.ɵɵrestoreView(_r43); const user_r37 = restoredCtx.$implicit; const ctx_r47 = i0.ɵɵnextContext(2); const _r5 = i0.ɵɵreference(29); return i0.ɵɵresetView(ctx_r47.editUserCard(_r5, user_r37)); });
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const user_r37 = ctx.$implicit;
    const i_r38 = ctx.index;
    const _r40 = i0.ɵɵreference(18);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(3, 8, i_r38 + 1, "2.0"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(user_r37.ADC_VEND_CARDHOLDR_FIRST_NAME);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(user_r37.ADC_VEND_CARDHOLDR_LAST_NAME);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(user_r37.ADC_VEND_CARDHOLDR_REGID);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(user_r37.ADC_VEND_ACCOUNT_INTERNL_UID);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", user_r37.ADC_VEND_CARDHOLDR_MALE_FLG || user_r37.ADC_VEND_CARDHOLDR_FEMALE_FLG)("ngIfElse", _r40);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(user_r37.ADC_VEND_CARDHOLDR_PRIM_MOB_NUMBR);
} }
function ManageCustomerCardComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 27)(1, "div", 28);
    i0.ɵɵtext(2, " Already Added Card Holder(s) ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 29)(4, "table", 30)(5, "thead")(6, "tr")(7, "th");
    i0.ɵɵtext(8, "Serial#");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "th");
    i0.ɵɵtext(10, "First Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "th");
    i0.ɵɵtext(12, "Last Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "th");
    i0.ɵɵtext(14, "Id");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "th");
    i0.ɵɵtext(16, "Roll No.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "th");
    i0.ɵɵtext(18, "Password");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "th");
    i0.ɵɵtext(20, "Status");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "th");
    i0.ɵɵtext(22, "Mobile No.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "th");
    i0.ɵɵtext(24, "Action");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(25, "tbody");
    i0.ɵɵtemplate(26, ManageCustomerCardComponent_div_27_tr_26_Template, 30, 11, "tr", 31);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(26);
    i0.ɵɵproperty("ngForOf", ctx_r4.cardHolders);
} }
function ManageCustomerCardComponent_ng_template_28_div_74_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 72);
    i0.ɵɵelement(1, "img", 73);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r48 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("src", ctx_r48.imagePreview, i0.ɵɵsanitizeUrl);
} }
function ManageCustomerCardComponent_ng_template_28_Template(rf, ctx) { if (rf & 1) {
    const _r50 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "form", 41);
    i0.ɵɵlistener("ngSubmit", function ManageCustomerCardComponent_ng_template_28_Template_form_ngSubmit_0_listener() { i0.ɵɵrestoreView(_r50); const ctx_r49 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r49.submitUserCard()); });
    i0.ɵɵelementStart(1, "div", 42)(2, "h4", 43);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "button", 44);
    i0.ɵɵlistener("click", function ManageCustomerCardComponent_ng_template_28_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r50); const ctx_r51 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r51.modalRef.hide()); });
    i0.ɵɵelementStart(5, "span", 45);
    i0.ɵɵtext(6, "\u00D7");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(7, "div", 46)(8, "div", 47)(9, "div", 6)(10, "label");
    i0.ɵɵtext(11, "Card #");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(12, "input", 48);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "div", 6)(14, "label");
    i0.ɵɵtext(15, "Card Issued Type");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "select", 49)(17, "option", 50);
    i0.ɵɵtext(18, "Student");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "option", 51);
    i0.ɵɵtext(20, "Staff");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "option", 52);
    i0.ɵɵtext(22, "Trainees");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "option", 53);
    i0.ɵɵtext(24, "Visitors");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(25, "div", 6)(26, "label");
    i0.ɵɵtext(27, "Roll / Admission / ID");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(28, "input", 54);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(29, "div", 47)(30, "div", 6)(31, "label");
    i0.ɵɵtext(32, "First Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(33, "input", 55);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(34, "div", 6)(35, "label");
    i0.ɵɵtext(36, "Last Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(37, "input", 56);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(38, "div", 6)(39, "label");
    i0.ɵɵtext(40, "Parent / Guardian Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(41, "input", 57);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(42, "div", 47)(43, "div", 6)(44, "label");
    i0.ɵɵtext(45, "Associated Primary Mobile");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(46, "input", 58);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(47, "div", 6)(48, "label");
    i0.ɵɵtext(49, "Alternate Mobile");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(50, "input", 59);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(51, "div", 6)(52, "label");
    i0.ɵɵtext(53, "Email");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(54, "input", 60);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(55, "div", 47)(56, "div", 6)(57, "label", 61);
    i0.ɵɵtext(58, "Gender");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(59, "select", 62)(60, "option", 63);
    i0.ɵɵtext(61, "Male");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(62, "option", 64);
    i0.ɵɵtext(63, "Female");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(64, "div", 47)(65, "div", 65)(66, "div", 7)(67, "fieldset", 7)(68, "label", 61);
    i0.ɵɵtext(69, "Attach User Photo");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(70, "div", 66)(71, "input", 67);
    i0.ɵɵlistener("change", function ManageCustomerCardComponent_ng_template_28_Template_input_change_71_listener($event) { i0.ɵɵrestoreView(_r50); const ctx_r52 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r52.onFileSelect($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(72, "label", 68);
    i0.ɵɵtext(73);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(74, ManageCustomerCardComponent_ng_template_28_div_74_Template, 2, 1, "div", 69);
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(75, "div", 70)(76, "button", 71);
    i0.ɵɵtext(77);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵproperty("formGroup", ctx_r6.userCardForm);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r6.isEditMode ? "Edit User Card" : "Add New User Card", " ");
    i0.ɵɵadvance(70);
    i0.ɵɵtextInterpolate1(" ", ctx_r6.uploadLabel || "Choose file", " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r6.isImageSaved);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", ctx_r6.userCardForm.invalid);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r6.isEditMode ? "Edit User Card" : "Add New User Card", " ");
} }
function ManageCustomerCardComponent_ng_template_30_Template(rf, ctx) { if (rf & 1) {
    const _r54 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "form", 74);
    i0.ɵɵlistener("ngSubmit", function ManageCustomerCardComponent_ng_template_30_Template_form_ngSubmit_0_listener() { i0.ɵɵrestoreView(_r54); const ctx_r53 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r53.deleteCard()); });
    i0.ɵɵelementStart(1, "div", 42)(2, "h4", 43);
    i0.ɵɵtext(3, "Confirm Delete");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "button", 44);
    i0.ɵɵlistener("click", function ManageCustomerCardComponent_ng_template_30_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r54); const ctx_r55 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r55.modalRef.hide()); });
    i0.ɵɵelementStart(5, "span", 45);
    i0.ɵɵtext(6, "\u00D7");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(7, "div", 46)(8, "div", 47)(9, "div", 75)(10, "label");
    i0.ɵɵtext(11, "Confirmation");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "select", 76);
    i0.ɵɵlistener("ngModelChange", function ManageCustomerCardComponent_ng_template_30_Template_select_ngModelChange_12_listener($event) { i0.ɵɵrestoreView(_r54); const ctx_r56 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r56.confirmation = $event); });
    i0.ɵɵelementStart(13, "option", 9);
    i0.ɵɵtext(14, "Select");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "option", 77);
    i0.ɵɵtext(16, "Yes");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "option", 78);
    i0.ɵɵtext(18, "No");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(19, "div", 79)(20, "button", 80);
    i0.ɵɵtext(21, " Submit ");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext();
    i0.ɵɵadvance(12);
    i0.ɵɵproperty("ngModel", ctx_r8.confirmation);
} }
function ManageCustomerCardComponent_ng_template_32_Template(rf, ctx) { if (rf & 1) {
    const _r58 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 42)(1, "h4", 43);
    i0.ɵɵtext(2, " Add New Class Department ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 44);
    i0.ɵɵlistener("click", function ManageCustomerCardComponent_ng_template_32_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r58); const ctx_r57 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r57.modalRef.hide()); });
    i0.ɵɵelementStart(4, "span", 45);
    i0.ɵɵtext(5, "\u00D7");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(6, "div", 46)(7, "div", 47)(8, "div", 75)(9, "label");
    i0.ɵɵtext(10, "Class/Department Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "input", 81);
    i0.ɵɵlistener("ngModelChange", function ManageCustomerCardComponent_ng_template_32_Template_input_ngModelChange_11_listener($event) { i0.ɵɵrestoreView(_r58); const ctx_r59 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r59.classDepName = $event); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(12, "div", 70)(13, "button", 82);
    i0.ɵɵlistener("click", function ManageCustomerCardComponent_ng_template_32_Template_button_click_13_listener() { i0.ɵɵrestoreView(_r58); const ctx_r60 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r60.submitAddClassDep()); });
    i0.ɵɵtext(14, " Add ");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r10 = i0.ɵɵnextContext();
    i0.ɵɵadvance(11);
    i0.ɵɵproperty("ngModel", ctx_r10.classDepName);
} }
function ManageCustomerCardComponent_ng_template_34_div_18_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, " New password is required ");
    i0.ɵɵelementEnd();
} }
function ManageCustomerCardComponent_ng_template_34_div_18_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, " Minimum 6 characters required ");
    i0.ɵɵelementEnd();
} }
function ManageCustomerCardComponent_ng_template_34_div_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 90);
    i0.ɵɵtemplate(1, ManageCustomerCardComponent_ng_template_34_div_18_div_1_Template, 2, 0, "div", 91);
    i0.ɵɵtemplate(2, ManageCustomerCardComponent_ng_template_34_div_18_div_2_Template, 2, 0, "div", 91);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r61 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r61.f.newPassword.errors == null ? null : ctx_r61.f.newPassword.errors.required);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r61.f.newPassword.errors == null ? null : ctx_r61.f.newPassword.errors.minlength);
} }
function ManageCustomerCardComponent_ng_template_34_div_24_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, " Confirm password is required ");
    i0.ɵɵelementEnd();
} }
function ManageCustomerCardComponent_ng_template_34_div_24_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, " Passwords do not match ");
    i0.ɵɵelementEnd();
} }
function ManageCustomerCardComponent_ng_template_34_div_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 90);
    i0.ɵɵtemplate(1, ManageCustomerCardComponent_ng_template_34_div_24_div_1_Template, 2, 0, "div", 91);
    i0.ɵɵtemplate(2, ManageCustomerCardComponent_ng_template_34_div_24_div_2_Template, 2, 0, "div", 91);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r62 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r62.f.confirmPassword.errors == null ? null : ctx_r62.f.confirmPassword.errors.required);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r62.passwordMismatch);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
function ManageCustomerCardComponent_ng_template_34_Template(rf, ctx) { if (rf & 1) {
    const _r68 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 42)(1, "h4", 43);
    i0.ɵɵtext(2, "Change Password");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 83);
    i0.ɵɵlistener("click", function ManageCustomerCardComponent_ng_template_34_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r68); const ctx_r67 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r67.modalRef.hide()); });
    i0.ɵɵtext(4, " \u00D7 ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "div", 46)(6, "form", 3)(7, "div", 4)(8, "div", 6)(9, "div", 7)(10, "label");
    i0.ɵɵtext(11, "Current Password");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(12, "input", 84);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "div", 6)(14, "div", 7)(15, "label");
    i0.ɵɵtext(16, "New Password");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(17, "input", 85);
    i0.ɵɵtemplate(18, ManageCustomerCardComponent_ng_template_34_div_18_Template, 3, 2, "div", 86);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(19, "div", 6)(20, "div", 7)(21, "label");
    i0.ɵɵtext(22, "Confirm Password");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(23, "input", 87);
    i0.ɵɵtemplate(24, ManageCustomerCardComponent_ng_template_34_div_24_Template, 3, 2, "div", 86);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(25, "div", 4)(26, "div", 88)(27, "button", 89);
    i0.ɵɵlistener("click", function ManageCustomerCardComponent_ng_template_34_Template_button_click_27_listener() { i0.ɵɵrestoreView(_r68); const ctx_r69 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r69.changePassword()); });
    i0.ɵɵtext(28, " Update Password ");
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r12 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("formGroup", ctx_r12.changePasswordForm);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("disabled", true);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(6, _c0, (ctx_r12.submitted || ctx_r12.f.newPassword.touched) && ctx_r12.f.newPassword.errors));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (ctx_r12.submitted || ctx_r12.f.newPassword.touched) && ctx_r12.f.newPassword.errors);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(8, _c0, (ctx_r12.submitted || ctx_r12.f.confirmPassword.touched) && (ctx_r12.f.confirmPassword.errors || ctx_r12.passwordMismatch)));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (ctx_r12.submitted || ctx_r12.f.confirmPassword.touched) && (ctx_r12.f.confirmPassword.errors || ctx_r12.passwordMismatch));
} }
function ManageCustomerCardComponent_ng_template_36_Template(rf, ctx) { if (rf & 1) {
    const _r71 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 42)(1, "h4", 92);
    i0.ɵɵtext(2, " Card Balance ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 44);
    i0.ɵɵlistener("click", function ManageCustomerCardComponent_ng_template_36_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r71); const ctx_r70 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r70.modalRef.hide()); });
    i0.ɵɵelementStart(4, "span", 45);
    i0.ɵɵtext(5, "\u00D7");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(6, "div", 46)(7, "div", 93)(8, "div", 94)(9, "div", 95)(10, "label", 96);
    i0.ɵɵtext(11, "Available Balance");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "h2", 97);
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(14, "div", 98)(15, "div", 99)(16, "button", 89);
    i0.ɵɵlistener("click", function ManageCustomerCardComponent_ng_template_36_Template_button_click_16_listener() { i0.ɵɵrestoreView(_r71); const ctx_r72 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r72.modalRef.hide()); });
    i0.ɵɵtext(17, " Close ");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r14 = i0.ɵɵnextContext();
    i0.ɵɵadvance(13);
    i0.ɵɵtextInterpolate1(" \u20B9 ", ctx_r14.cardBalance || 0, " ");
} }
function ManageCustomerCardComponent_ng_template_38_div_18_tbody_24_tr_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td");
    i0.ɵɵtext(4);
    i0.ɵɵpipe(5, "date");
    i0.ɵɵelementEnd();
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
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "td");
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r79 = ctx.$implicit;
    const i_r80 = ctx.index;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i_r80 + 1);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(5, 7, item_r79.ADC_MEMBER_DEBIT_TRANS_DATETIME, "dd-MMM-yyyy hh:mm a"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(item_r79.ADC_MEMBER_DEBIT_TRANS_VENDID);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r79.ADC_MEMBER_DEBIT_TRANS_LOCTN || "N/A");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("\u20B9", item_r79.ADC_MEMBER_DEBIT_COST_AMT, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r79.ADC_MEMBER_DEBIT_PRODCT_ID);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("\u20B9", item_r79.ADC_MEMBER_CARD_BAL_AFTER_TRANS, "");
} }
function ManageCustomerCardComponent_ng_template_38_div_18_tbody_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tbody");
    i0.ɵɵtemplate(1, ManageCustomerCardComponent_ng_template_38_div_18_tbody_24_tr_1_Template, 16, 10, "tr", 31);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r75 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r75.cardholderSpends.DebitDetail);
} }
function ManageCustomerCardComponent_ng_template_38_div_18_ng_template_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 114);
    i0.ɵɵtext(2, "No transactions found");
    i0.ɵɵelementEnd()();
} }
function ManageCustomerCardComponent_ng_template_38_div_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 110)(1, "div", 28)(2, "span")(3, "b");
    i0.ɵɵtext(4, "Balance:");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 111)(7, "table", 112)(8, "thead")(9, "tr")(10, "th");
    i0.ɵɵtext(11, "#");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "th");
    i0.ɵɵtext(13, "Date/Time");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "th");
    i0.ɵɵtext(15, "Vend ID");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "th");
    i0.ɵɵtext(17, "Location");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "th");
    i0.ɵɵtext(19, "Amount");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "th");
    i0.ɵɵtext(21, "Product");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "th");
    i0.ɵɵtext(23, "Balance After");
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(24, ManageCustomerCardComponent_ng_template_38_div_18_tbody_24_Template, 2, 1, "tbody", 34);
    i0.ɵɵtemplate(25, ManageCustomerCardComponent_ng_template_38_div_18_ng_template_25_Template, 3, 0, "ng-template", null, 113, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const _r76 = i0.ɵɵreference(26);
    const ctx_r73 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" \u20B9", ctx_r73.cardholderSpends == null ? null : ctx_r73.cardholderSpends.CurrentBalance, "");
    i0.ɵɵadvance(19);
    i0.ɵɵproperty("ngIf", ctx_r73.cardholderSpends == null ? null : ctx_r73.cardholderSpends.DebitDetail == null ? null : ctx_r73.cardholderSpends.DebitDetail.length)("ngIfElse", _r76);
} }
function ManageCustomerCardComponent_ng_template_38_div_29_tbody_20_tr_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td");
    i0.ɵɵtext(4);
    i0.ɵɵpipe(5, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "td");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "td");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "td");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r85 = ctx.$implicit;
    const i_r86 = ctx.index;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i_r86 + 1);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind2(5, 6, item_r85.ADC_MEMBER_CREDIT_TRANS_DATETIME, "dd-MMM-yyyy hh:mm a"), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("\u20B9", item_r85.ADC_MEMBER_CREDIT_AMT, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2(" INV-", item_r85.ADC_MEMBER_CREDIT_CARTID, " (", item_r85.ADC_MEMBER_CREDIT_FRM_PORTL_FLG ? "Online" : "Offline", ") ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("\u20B9", item_r85.ADC_MEMBER_CARD_BAL_AFTER_TRANS, "");
} }
function ManageCustomerCardComponent_ng_template_38_div_29_tbody_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tbody");
    i0.ɵɵtemplate(1, ManageCustomerCardComponent_ng_template_38_div_29_tbody_20_tr_1_Template, 12, 9, "tr", 31);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r81 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r81.cardholderRefill.CreditDetail);
} }
function ManageCustomerCardComponent_ng_template_38_div_29_ng_template_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 116);
    i0.ɵɵtext(2, "No refill transactions found");
    i0.ɵɵelementEnd()();
} }
function ManageCustomerCardComponent_ng_template_38_div_29_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 110)(1, "div", 28)(2, "span")(3, "b");
    i0.ɵɵtext(4, "Balance:");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 111)(7, "table", 112)(8, "thead")(9, "tr")(10, "th");
    i0.ɵɵtext(11, "#");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "th");
    i0.ɵɵtext(13, "Date/Time");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "th");
    i0.ɵɵtext(15, "Refill Amt");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "th");
    i0.ɵɵtext(17, "Invoice");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "th");
    i0.ɵɵtext(19, "Balance After");
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(20, ManageCustomerCardComponent_ng_template_38_div_29_tbody_20_Template, 2, 1, "tbody", 34);
    i0.ɵɵtemplate(21, ManageCustomerCardComponent_ng_template_38_div_29_ng_template_21_Template, 3, 0, "ng-template", null, 115, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const _r82 = i0.ɵɵreference(22);
    const ctx_r74 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" \u20B9", ctx_r74.cardholderRefill == null ? null : ctx_r74.cardholderRefill.CurrentBalance, "");
    i0.ɵɵadvance(15);
    i0.ɵɵproperty("ngIf", ctx_r74.cardholderRefill == null ? null : ctx_r74.cardholderRefill.CreditDetail == null ? null : ctx_r74.cardholderRefill.CreditDetail.length)("ngIfElse", _r82);
} }
function ManageCustomerCardComponent_ng_template_38_Template(rf, ctx) { if (rf & 1) {
    const _r88 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 42)(1, "h4", 43);
    i0.ɵɵtext(2, " View My Transactions ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 44);
    i0.ɵɵlistener("click", function ManageCustomerCardComponent_ng_template_38_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r88); const ctx_r87 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r87.modalRef.hide()); });
    i0.ɵɵelementStart(4, "span", 45);
    i0.ɵɵtext(5, "\u00D7");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(6, "div", 46)(7, "tabset", 100)(8, "tab", 101);
    i0.ɵɵlistener("selectTab", function ManageCustomerCardComponent_ng_template_38_Template_tab_selectTab_8_listener() { i0.ɵɵrestoreView(_r88); const ctx_r89 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r89.onTabChange("tab2")); });
    i0.ɵɵelementStart(9, "div", 102)(10, "div", 103)(11, "div", 6)(12, "label");
    i0.ɵɵtext(13, "From Date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "input", 104);
    i0.ɵɵlistener("ngModelChange", function ManageCustomerCardComponent_ng_template_38_Template_input_ngModelChange_14_listener($event) { i0.ɵɵrestoreView(_r88); const ctx_r90 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r90.fromDate1 = $event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(15, "div", 6)(16, "button", 105);
    i0.ɵɵlistener("click", function ManageCustomerCardComponent_ng_template_38_Template_button_click_16_listener() { i0.ɵɵrestoreView(_r88); const ctx_r91 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r91.onSpendOnVend()); });
    i0.ɵɵtext(17, " Show Transactions ");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵtemplate(18, ManageCustomerCardComponent_ng_template_38_div_18_Template, 27, 3, "div", 106);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "tab", 107);
    i0.ɵɵlistener("selectTab", function ManageCustomerCardComponent_ng_template_38_Template_tab_selectTab_19_listener() { i0.ɵɵrestoreView(_r88); const ctx_r92 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r92.onTabChange("tab3")); });
    i0.ɵɵelementStart(20, "div", 102)(21, "div", 103)(22, "div", 6)(23, "label");
    i0.ɵɵtext(24, "From Date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "input", 104);
    i0.ɵɵlistener("ngModelChange", function ManageCustomerCardComponent_ng_template_38_Template_input_ngModelChange_25_listener($event) { i0.ɵɵrestoreView(_r88); const ctx_r93 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r93.fromDate2 = $event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(26, "div", 6)(27, "button", 105);
    i0.ɵɵlistener("click", function ManageCustomerCardComponent_ng_template_38_Template_button_click_27_listener() { i0.ɵɵrestoreView(_r88); const ctx_r94 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r94.onCardRefillDetails()); });
    i0.ɵɵtext(28, " Show Transactions ");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵtemplate(29, ManageCustomerCardComponent_ng_template_38_div_29_Template, 23, 3, "div", 106);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(30, "div", 108)(31, "button", 109);
    i0.ɵɵlistener("click", function ManageCustomerCardComponent_ng_template_38_Template_button_click_31_listener() { i0.ɵɵrestoreView(_r88); const ctx_r95 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r95.modalRef.hide()); });
    i0.ɵɵtext(32, "Close");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r16 = i0.ɵɵnextContext();
    i0.ɵɵadvance(14);
    i0.ɵɵproperty("ngModel", ctx_r16.fromDate1);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", ctx_r16.showCardholderSpends);
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngModel", ctx_r16.fromDate2);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", ctx_r16.showCardholderRefill);
} }
function ManageCustomerCardComponent_ng_template_40_div_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 128);
    i0.ɵɵtext(1, " Search Type is required. ");
    i0.ɵɵelementEnd();
} }
function ManageCustomerCardComponent_ng_template_40_div_24_small_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 128);
    i0.ɵɵtext(1, " Manufacturer ID is required. ");
    i0.ɵɵelementEnd();
} }
function ManageCustomerCardComponent_ng_template_40_div_24_Template(rf, ctx) { if (rf & 1) {
    const _r105 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 4)(1, "div", 6)(2, "label");
    i0.ɵɵtext(3, "Card Manufacturer ID");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "input", 129, 130);
    i0.ɵɵlistener("ngModelChange", function ManageCustomerCardComponent_ng_template_40_div_24_Template_input_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r105); const ctx_r104 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r104.manufacturerId = $event); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, ManageCustomerCardComponent_ng_template_40_div_24_small_6_Template, 2, 0, "small", 124);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const _r102 = i0.ɵɵreference(5);
    i0.ɵɵnextContext();
    const _r96 = i0.ɵɵreference(8);
    const ctx_r99 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngModel", ctx_r99.manufacturerId);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", _r96.submitted && _r102.invalid);
} }
function ManageCustomerCardComponent_ng_template_40_div_25_small_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 128);
    i0.ɵɵtext(1, " Mobile Number is required. ");
    i0.ɵɵelementEnd();
} }
function ManageCustomerCardComponent_ng_template_40_div_25_small_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 128);
    i0.ɵɵtext(1, " Enter a valid 10 digit mobile number. ");
    i0.ɵɵelementEnd();
} }
function ManageCustomerCardComponent_ng_template_40_div_25_Template(rf, ctx) { if (rf & 1) {
    const _r110 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 4)(1, "div", 6)(2, "label");
    i0.ɵɵtext(3, "Registered Mobile Number");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "input", 131, 132);
    i0.ɵɵlistener("ngModelChange", function ManageCustomerCardComponent_ng_template_40_div_25_Template_input_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r110); const ctx_r109 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r109.mobileNumber = $event); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, ManageCustomerCardComponent_ng_template_40_div_25_small_6_Template, 2, 0, "small", 124);
    i0.ɵɵtemplate(7, ManageCustomerCardComponent_ng_template_40_div_25_small_7_Template, 2, 0, "small", 124);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const _r106 = i0.ɵɵreference(5);
    i0.ɵɵnextContext();
    const _r96 = i0.ɵɵreference(8);
    const ctx_r100 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngModel", ctx_r100.mobileNumber);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", _r96.submitted && (_r106.errors == null ? null : _r106.errors.required));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", _r96.submitted && (_r106.errors == null ? null : _r106.errors.pattern));
} }
function ManageCustomerCardComponent_ng_template_40_form_30_small_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 128);
    i0.ɵɵtext(1, " Wallet Type is required. ");
    i0.ɵɵelementEnd();
} }
function ManageCustomerCardComponent_ng_template_40_form_30_small_36_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 128);
    i0.ɵɵtext(1, " Payment Type is required. ");
    i0.ɵɵelementEnd();
} }
function ManageCustomerCardComponent_ng_template_40_form_30_Template(rf, ctx) { if (rf & 1) {
    const _r118 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "form", 74, 133);
    i0.ɵɵlistener("ngSubmit", function ManageCustomerCardComponent_ng_template_40_form_30_Template_form_ngSubmit_0_listener() { i0.ɵɵrestoreView(_r118); const _r111 = i0.ɵɵreference(1); const ctx_r117 = i0.ɵɵnextContext(2); const _r19 = i0.ɵɵreference(43); const _r21 = i0.ɵɵreference(45); return i0.ɵɵresetView(ctx_r117.openAddToCart(_r111, _r19, _r21)); });
    i0.ɵɵelementStart(2, "div", 47)(3, "div", 100)(4, "h5")(5, "b");
    i0.ɵɵtext(6, "Registration ID :");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(8, "div", 4)(9, "div", 6)(10, "div", 7)(11, "label")(12, "b");
    i0.ɵɵtext(13, "Wallet Type");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "select", 134, 135);
    i0.ɵɵlistener("ngModelChange", function ManageCustomerCardComponent_ng_template_40_form_30_Template_select_ngModelChange_14_listener($event) { i0.ɵɵrestoreView(_r118); const ctx_r119 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r119.walletType = $event); });
    i0.ɵɵelementStart(16, "option", 9);
    i0.ɵɵtext(17, "Select Wallet");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "option", 136);
    i0.ɵɵtext(19, "Personal");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "option", 137);
    i0.ɵɵtext(21, "Corporate");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(22, ManageCustomerCardComponent_ng_template_40_form_30_small_22_Template, 2, 0, "small", 124);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(23, "div", 6)(24, "div", 7)(25, "label")(26, "b");
    i0.ɵɵtext(27, "Payment Type");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(28, "select", 138, 139);
    i0.ɵɵlistener("ngModelChange", function ManageCustomerCardComponent_ng_template_40_form_30_Template_select_ngModelChange_28_listener($event) { i0.ɵɵrestoreView(_r118); const ctx_r120 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r120.paymentType = $event); })("ngModelChange", function ManageCustomerCardComponent_ng_template_40_form_30_Template_select_ngModelChange_28_listener() { i0.ɵɵrestoreView(_r118); const ctx_r121 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r121.onPaymentTypeChange()); });
    i0.ɵɵelementStart(30, "option", 9);
    i0.ɵɵtext(31, "Select Payment");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(32, "option", 140);
    i0.ɵɵtext(33, "Cash");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(34, "option", 141);
    i0.ɵɵtext(35, "Digital");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(36, ManageCustomerCardComponent_ng_template_40_form_30_small_36_Template, 2, 0, "small", 124);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(37, "div", 6)(38, "div", 7)(39, "label")(40, "b");
    i0.ɵɵtext(41, "Refill Amount (\u20B9)");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(42, "input", 142, 143);
    i0.ɵɵlistener("ngModelChange", function ManageCustomerCardComponent_ng_template_40_form_30_Template_input_ngModelChange_42_listener($event) { i0.ɵɵrestoreView(_r118); const ctx_r122 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r122.refillAmount = $event); });
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(44, "div", 144)(45, "div", 11)(46, "button", 145);
    i0.ɵɵtext(47, " Add To Cart & Checkout ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(48, "button", 89);
    i0.ɵɵlistener("click", function ManageCustomerCardComponent_ng_template_40_form_30_Template_button_click_48_listener() { i0.ɵɵrestoreView(_r118); const ctx_r123 = i0.ɵɵnextContext(2); const _r19 = i0.ɵɵreference(43); return i0.ɵɵresetView(ctx_r123.diaplyCart(_r19)); });
    i0.ɵɵtext(49, " Display Cart ");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const _r111 = i0.ɵɵreference(1);
    const _r112 = i0.ɵɵreference(15);
    const _r114 = i0.ɵɵreference(29);
    const ctx_r101 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate1(" ", ctx_r101.regId, " ");
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngModel", ctx_r101.walletType);
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("ngIf", _r111.submitted && _r112.invalid);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngModel", ctx_r101.paymentType);
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("ngIf", _r111.submitted && _r114.invalid);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngModel", ctx_r101.refillAmount)("min", 1)("max", ctx_r101.paymentType === "Cash" ? ctx_r101.maxCashAmount : null)("placeholder", ctx_r101.paymentType === "Cash" ? "Fixed Amount \u20B9" + ctx_r101.maxCashAmount : "Enter Amount")("readonly", ctx_r101.paymentType === "Cash");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("disabled", _r111.invalid);
} }
function ManageCustomerCardComponent_ng_template_40_Template(rf, ctx) { if (rf & 1) {
    const _r125 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 42)(1, "h4", 92);
    i0.ɵɵtext(2, " Back Office Card Refill ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 44);
    i0.ɵɵlistener("click", function ManageCustomerCardComponent_ng_template_40_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r125); const ctx_r124 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r124.modalRef.hide()); });
    i0.ɵɵelementStart(4, "span", 45);
    i0.ɵɵtext(5, "\u00D7");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(6, "div", 46)(7, "form", 74, 117);
    i0.ɵɵlistener("ngSubmit", function ManageCustomerCardComponent_ng_template_40_Template_form_ngSubmit_7_listener() { i0.ɵɵrestoreView(_r125); const _r96 = i0.ɵɵreference(8); const ctx_r126 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r126.searchCredential(_r96)); });
    i0.ɵɵelementStart(9, "div", 118)(10, "div", 4)(11, "div", 119)(12, "label")(13, "b");
    i0.ɵɵtext(14, "Select Search Type");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(15, "div", 119)(16, "label", 120)(17, "input", 121, 122);
    i0.ɵɵlistener("ngModelChange", function ManageCustomerCardComponent_ng_template_40_Template_input_ngModelChange_17_listener($event) { i0.ɵɵrestoreView(_r125); const ctx_r127 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r127.searchType = $event); });
    i0.ɵɵelementEnd();
    i0.ɵɵtext(19, " Card Manufacturer ID ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "label")(21, "input", 123);
    i0.ɵɵlistener("ngModelChange", function ManageCustomerCardComponent_ng_template_40_Template_input_ngModelChange_21_listener($event) { i0.ɵɵrestoreView(_r125); const ctx_r128 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r128.searchType = $event); });
    i0.ɵɵelementEnd();
    i0.ɵɵtext(22, " Registered Mobile Number ");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(23, ManageCustomerCardComponent_ng_template_40_div_23_Template, 2, 0, "div", 124);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(24, ManageCustomerCardComponent_ng_template_40_div_24_Template, 7, 2, "div", 125);
    i0.ɵɵtemplate(25, ManageCustomerCardComponent_ng_template_40_div_25_Template, 8, 3, "div", 125);
    i0.ɵɵelementStart(26, "div", 4)(27, "div", 99)(28, "button", 126);
    i0.ɵɵtext(29, " Search ");
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵtemplate(30, ManageCustomerCardComponent_ng_template_40_form_30_Template, 50, 11, "form", 127);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r96 = i0.ɵɵreference(8);
    const _r97 = i0.ɵɵreference(18);
    const ctx_r18 = i0.ɵɵnextContext();
    i0.ɵɵadvance(17);
    i0.ɵɵproperty("ngModel", ctx_r18.searchType);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngModel", ctx_r18.searchType);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", _r96.submitted && _r97.invalid);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r18.searchType == "manufacturer");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r18.searchType == "mobile");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("disabled", _r96.invalid);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r18.showDetails);
} }
function ManageCustomerCardComponent_ng_template_42_Template(rf, ctx) { if (rf & 1) {
    const _r130 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 42)(1, "h4", 92);
    i0.ɵɵtext(2, "Cart Summary");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 146);
    i0.ɵɵlistener("click", function ManageCustomerCardComponent_ng_template_42_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r130); const ctx_r129 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r129.closeCheckout()); });
    i0.ɵɵelementStart(4, "span", 147);
    i0.ɵɵtext(5, "\u00D7");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(6, "div", 46)(7, "div", 148)(8, "div", 149)(9, "div")(10, "p")(11, "strong");
    i0.ɵɵtext(12, "Cart Id :");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "p")(15, "strong");
    i0.ɵɵtext(16, "Service Id :");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(17);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "p")(19, "strong");
    i0.ɵɵtext(20, "Service Name :");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(21);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(22, "button", 150);
    i0.ɵɵlistener("click", function ManageCustomerCardComponent_ng_template_42_Template_button_click_22_listener() { i0.ɵɵrestoreView(_r130); const ctx_r131 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r131.deleteCart()); });
    i0.ɵɵtext(23, "Delete CART");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(24, "div", 151)(25, "p")(26, "strong");
    i0.ɵɵtext(27, "Per Unit Cost :");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "span", 128);
    i0.ɵɵtext(29);
    i0.ɵɵpipe(30, "number");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(31, "p")(32, "strong");
    i0.ɵɵtext(33, "Quantity :");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(34);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(35, "p")(36, "strong");
    i0.ɵɵtext(37, "Currency :");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(38);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(39, "p")(40, "strong");
    i0.ɵɵtext(41, "Discount % :");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(42);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(43, "div", 152)(44, "p")(45, "strong");
    i0.ɵɵtext(46, "GST Charged :");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(47);
    i0.ɵɵpipe(48, "number");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(49, "h5", 153)(50, "strong");
    i0.ɵɵtext(51, "Total to Pay Amount :");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(52, "span", 154);
    i0.ɵɵtext(53);
    i0.ɵɵpipe(54, "number");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(55, "div", 108)(56, "button", 155);
    i0.ɵɵlistener("click", function ManageCustomerCardComponent_ng_template_42_Template_button_click_56_listener() { i0.ɵɵrestoreView(_r130); const ctx_r132 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r132.payAmount()); });
    i0.ɵɵtext(57, "PAY");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r20 = i0.ɵɵnextContext();
    i0.ɵɵadvance(13);
    i0.ɵɵtextInterpolate1(" ", (ctx_r20.openCart == null ? null : ctx_r20.openCart.MDR_CONCT_SERVICE_CARTID) || "\u2014", "");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", (ctx_r20.openCart == null ? null : ctx_r20.openCart.MDR_CONCT_CART_FOR_SERVICEID) || "\u2014", "");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", (ctx_r20.openCart == null ? null : ctx_r20.openCart.MDR_CONCT_CART_SERVICE_NAME) || "\u2014", "");
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(30, 10, ctx_r20.openCart == null ? null : ctx_r20.openCart.MDR_CONCT_SPP_UNIT_SERVICE_COST, "1.2-2"));
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", ctx_r20.openCart == null ? null : ctx_r20.openCart.MDR_CONCT_SERVICE_QUANTITY, "");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", ctx_r20.openCart == null ? null : ctx_r20.openCart.MDR_CONCT_SERVICE_CURRENCY, "");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", ctx_r20.openCart == null ? null : ctx_r20.openCart.MDR_CONCT_SERVICE_DISCNT_PERCENTG, "%");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(48, 13, ctx_r20.openCart == null ? null : ctx_r20.openCart.MDR_CONCT_CART_GST_CHARGED_AMT, "1.2-2"), " ");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate2(" ", i0.ɵɵpipeBind2(54, 16, ctx_r20.openCart == null ? null : ctx_r20.openCart.MDR_CONCT_CART_TOTAL_TO_PAY_AMT, "1.2-2"), " ", ctx_r20.openCart == null ? null : ctx_r20.openCart.MDR_CONCT_SERVICE_CURRENCY, " ");
} }
function ManageCustomerCardComponent_ng_template_44_Template(rf, ctx) { if (rf & 1) {
    const _r134 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 42)(1, "h4", 92);
    i0.ɵɵtext(2, " Cash Checkout Confirmation ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 146);
    i0.ɵɵlistener("click", function ManageCustomerCardComponent_ng_template_44_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r134); const ctx_r133 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r133.modalRef.hide()); });
    i0.ɵɵelementStart(4, "span", 147);
    i0.ɵɵtext(5, "\u00D7");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(6, "div", 46)(7, "div", 148)(8, "div", 156)(9, "p")(10, "strong");
    i0.ɵɵtext(11, "Registration ID :");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "p")(14, "strong");
    i0.ɵɵtext(15, "Refill Amount :");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "p")(18, "strong");
    i0.ɵɵtext(19, "GST (5%) :");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(20, " \u20B9 23.81 ");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(21, "hr");
    i0.ɵɵelementStart(22, "h5", 157)(23, "strong");
    i0.ɵɵtext(24, "Total Amount :");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "span", 154);
    i0.ɵɵtext(26, " \u20B9 500.00 ");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(27, "div", 70)(28, "button", 158);
    i0.ɵɵlistener("click", function ManageCustomerCardComponent_ng_template_44_Template_button_click_28_listener() { i0.ɵɵrestoreView(_r134); const ctx_r135 = i0.ɵɵnextContext(); const _r19 = i0.ɵɵreference(43); return i0.ɵɵresetView(ctx_r135.confirmCheckout(_r19)); });
    i0.ɵɵtext(29, " Confirm ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "button", 159);
    i0.ɵɵlistener("click", function ManageCustomerCardComponent_ng_template_44_Template_button_click_30_listener() { i0.ɵɵrestoreView(_r134); const ctx_r136 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r136.modalRef.hide()); });
    i0.ɵɵtext(31, " Cancel ");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r22 = i0.ɵɵnextContext();
    i0.ɵɵadvance(12);
    i0.ɵɵtextInterpolate1(" ", ctx_r22.regId, " ");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" \u20B9 ", ctx_r22.refillAmount, " ");
} }
export class ManageCustomerCardComponent {
    constructor(apiService, modalService, formBuilder, router, toastr, spinner, razorpayService, paymentStatusService) {
        this.apiService = apiService;
        this.modalService = modalService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.toastr = toastr;
        this.spinner = spinner;
        this.razorpayService = razorpayService;
        this.paymentStatusService = paymentStatusService;
        this.showAccHolders = false;
        this.showNetworkList = false;
        this.showReport = false;
        this.showGenerate = false;
        this.uploadLabel = "";
        this.cardHolders = [];
        this.confirmation = "";
        this.isEditMode = false;
        this.submitted = false;
        this.passwordMismatch = false;
        this.activeTabId = 'tab2';
        this.fromDate1 = '';
        this.fromDate2 = '';
        this.cardholderRefill = null;
        this.cardholderSpends = null;
        this.showCardholderRefill = false;
        this.showCardholderSpends = false;
        this.loadingSpend = false;
        this.loadingRefill = false;
        this.gstPercent = 5;
        this.gstAmount = 0;
        this.totalAmount = 0;
        this.maxCashAmount = 476.19;
        this.searchType = 'manufacturer';
        this.manufacturerId = '';
        this.mobileNumber = '';
        this.showDetails = false;
        // Wallet
        this.walletType = '';
        this.refillAmount = null;
        this.paymentType = '';
        // Cart
        this.cartSummary = {
            wallet: 'Personal',
            amount: 50,
            payment: 'Cash',
            total: 50
        };
        this.destroy$ = new Subject();
        this.imagePreview = null;
        this.accountid = this.apiService.requiredLoginData.accountid;
        this.subaccountid = this.apiService.requiredLoginData.subaccountid;
        this.storeid = this.apiService.requiredLoginData.storeid;
        this.storeName = this.apiService.requiredLoginData.storeName;
        this.domainid = this.apiService.requiredLoginData.domainid;
        this.getlogindata = localStorage.getItem('logindata');
        this.getlogindata = JSON.parse(this.getlogindata);
        this.userCardForm = this.formBuilder.group({
            cardNo: ['', Validators.required],
            cardType: ['Student', Validators.required],
            rollNo: ['', Validators.required],
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            guardianName: [''],
            primaryMobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
            altMobile: ['', [Validators.pattern('^[0-9]{10}$')]],
            email: ['', Validators.email],
            gender: ['M', Validators.required],
            photo: [null]
        });
        this.displayCardHolders = this.formBuilder.group({
            classId: ['', Validators.required],
            accId: ['', Validators.required]
        });
        this.changePasswordForm = this.formBuilder.group({
            currentPassword: [{ value: '', disabled: true }, Validators.required],
            newPassword: ['', [Validators.required, Validators.minLength(6)]],
            confirmPassword: ['', Validators.required]
        });
    }
    ngOnInit() {
        this.onTabChange('tab2');
        this.initForm();
        this.getCountry();
        if (this.getlogindata.THIRD_NODE_SUBACCT_FLG) {
            this.displayCardHolders.setValue({
                classId: '',
                accId: this.accountid
            });
            this.selectedAccountObj = {
                THIRD_NODE_ACCT_SUBACCT_ID: this.subaccountid,
                THIRD_NODE_ACCT_STORE_ID: this.storeid
            };
            this.getClassDep(this.selectedAccountObj.THIRD_NODE_ACCT_SUBACCT_ID, this.selectedAccountObj.THIRD_NODE_ACCT_STORE_ID);
        }
        this.calculateAmount();
        this.paymentStatusService.paymentStatus$
            .pipe(takeUntil(this.destroy$), filter(status => status === null || status === void 0 ? void 0 : status.success))
            .subscribe(status => {
            var _a, _b;
            if (status) {
                if (status.success) {
                    try {
                        const payload = {
                            cartId: (_a = this.openCart) === null || _a === void 0 ? void 0 : _a.MDR_CONCT_SERVICE_CARTID,
                            storecode: this.regId,
                            serviceId: (_b = this.openCart) === null || _b === void 0 ? void 0 : _b.MDR_CONCT_CART_FOR_SERVICEID,
                            confirmPayFlg: true,
                            rzrpay_Pamnt_Id: status.paymentId,
                            rzrpay_Signature: status.paymentSignature,
                            rzrpay_Live_Flg: this.openCart.MDR_PG_LIVE_KEY_FLG
                        };
                        console.log("payload: ", payload);
                        this.apiService.postCall(this.apiService.baseURL + '/MDR_Service_10and8_MakePayments', payload)
                            .subscribe(data => {
                            var _a;
                            console.log(data);
                            this.toastr.success(data.Message, '', {
                                timeOut: 5000,
                            });
                            (_a = this.modalRef) === null || _a === void 0 ? void 0 : _a.hide();
                        }, (error) => {
                            console.log(error);
                            this.toastr.error(error, '', {
                                timeOut: 5000,
                            });
                        });
                        this.paymentStatusService.updatePaymentStatus(null);
                    }
                    catch (error) {
                        console.log(error);
                    }
                }
                console.log('Payment status: ', status);
            }
        });
    }
    initForm() {
        this.changePasswordForm = this.formBuilder.group({
            currentPassword: [{ value: '', disabled: true }],
            newPassword: ['', [Validators.required, Validators.minLength(6)]],
            confirmPassword: ['', Validators.required]
        });
    }
    generate() {
        this.showGenerate = true;
    }
    generateReport(type) {
        this.reportType = type;
        this.showReport = true;
    }
    DisplayCardHolders() {
        this.cardHolders = [];
        const formValue = this.displayCardHolders.value;
        this.reportType = '';
        this.showReport = false;
        this.showGenerate = false;
        this.showAccHolders = false;
        const payload = {
            Account_Subacctid: this.selectedAccountObj.THIRD_NODE_ACCT_SUBACCT_ID,
            Account_Storeid: this.selectedAccountObj.THIRD_NODE_ACCT_STORE_ID,
            Class_Department_ID: formValue.classId || this.userCardForm.value.classId
        };
        console.log("payload: ", payload);
        this.apiService.postCall(`${this.apiService.baseURL}/GetVend-AllCardHolder`, payload)
            .subscribe(data => {
            console.log(data);
            if (data.Message == "No data Available") {
                this.toastr.error(data.Message, '', {
                    timeOut: 5000,
                });
            }
            else {
                this.cardHolders = data || [];
            }
        }, (error) => {
            console.log(error);
            this.toastr.error(error.Message, '', {
                timeOut: 5000,
            });
        });
    }
    confirmDelete(template, user) {
        this.SelectedUser = user;
        this.confirmation = "";
        this.modalRef = this.modalService.show(template, { class: 'modal-md' });
    }
    deleteCard() {
        this.modalRef.hide();
        if (this.confirmation === "" || this.confirmation === "no") {
            return;
        }
        const payload = {
            SecondNode_Storecode: this.getlogindata.Storecode,
            Account_Subacctid: this.selectedAccountObj.THIRD_NODE_ACCT_SUBACCT_ID,
            Account_Storeid: this.selectedAccountObj.THIRD_NODE_ACCT_STORE_ID,
            Class_Department_ID: this.displayCardHolders.value.classId,
            Card_Regid: this.SelectedUser.ADC_VEND_CARDHOLDR_REGID
        };
        console.log("payload: ", payload);
        this.apiService.postCall(`${this.apiService.baseURL}/SuspendVendCardHolder`, payload)
            .subscribe(data => {
            console.log(data);
            this.toastr.success(data.Message);
            this.DisplayCardHolders();
        }, (error) => {
            console.log(error);
            this.toastr.error(error.Message, '', {
                timeOut: 5000,
            });
        });
    }
    closeUserCardModal() {
        var _a;
        (_a = this.modalRef) === null || _a === void 0 ? void 0 : _a.hide();
    }
    addNewUserCard(template) {
        this.isEditMode = false;
        this.userCardForm.reset({
            cardType: 'Student',
            gender: 'M',
            classId: ''
        });
        this.userCardForm.enable();
        this.uploadLabel = 'Choose file';
        this.base64textString = '';
        this.imagePreview = null;
        this.isImageSaved = false;
        this.modalRef = this.modalService.show(template, { class: 'modal-lg' });
    }
    addNewClassDep(template) {
        this.classDepName = "";
        this.modalRef = this.modalService.show(template, { class: 'modal-md' });
    }
    submitAddClassDep() {
        if (this.classDepName !== '') {
            const payload = {
                Account_Subacctid: this.selectedAccountObj.THIRD_NODE_ACCT_SUBACCT_ID,
                Account_Storeid: this.selectedAccountObj.THIRD_NODE_ACCT_STORE_ID,
                Account_Class_Dept_Name: this.classDepName
            };
            console.log("payload: ", payload);
            this.apiService.postCall(`${this.apiService.baseURL}/ADD-CLASS-DEPARTMNT`, payload)
                .subscribe(data => {
                console.log(data);
                this.toastr.success(data.Message);
                this.getClassDep(this.selectedAccountObj.THIRD_NODE_ACCT_SUBACCT_ID, this.selectedAccountObj.THIRD_NODE_ACCT_STORE_ID);
            }, (error) => {
                console.log(error);
                this.toastr.error(error.Message, '', {
                    timeOut: 5000,
                });
            });
        }
        else {
            this.toastr.error('Please Enter a valid Class \ Departmnet Name');
        }
        this.modalRef.hide();
    }
    getClassDep(subaccid, storeid) {
        this.classDepArr = null;
        const payload = {
            Account_Subacctid: subaccid,
            Account_Storeid: storeid,
        };
        console.log("payload: ", payload);
        this.apiService.postCall(`${this.apiService.baseURL}/GetAccount-Class-dept`, payload)
            .subscribe(data => {
            console.log(data);
            this.classDepArr = data;
        }, (error) => {
            console.log(error);
            this.toastr.error(error.Message, '', {
                timeOut: 5000,
            });
        });
    }
    editUserCard(template, user) {
        var _a, _b, _c;
        this.isEditMode = true;
        this.userCardForm.patchValue({
            cardNo: user.ADC_VEND_MANUFACTR_CARDID,
            rollNo: user.ADC_VEND_ACCOUNT_INTERNL_UID,
            firstName: user.ADC_VEND_CARDHOLDR_FIRST_NAME,
            lastName: user.ADC_VEND_CARDHOLDR_LAST_NAME,
            primaryMobile: user.ADC_VEND_CARDHOLDR_PRIM_MOB_NUMBR,
            altMobile: user.ADC_VEND_CARDHOLDR_ALTRNT_MOB_NUMBR,
            email: user.ADC_VEND_CARDHOLDR_EMAILID,
            gender: user.ADC_VEND_CARDHOLDR_MALE_FLG ? 'M' : 'F',
            classId: user.Class_Department_ID || '1'
        });
        // this.userCardForm.get('cardNo')?.disable();
        (_a = this.userCardForm.get('cardType')) === null || _a === void 0 ? void 0 : _a.disable();
        (_b = this.userCardForm.get('rollNo')) === null || _b === void 0 ? void 0 : _b.disable();
        (_c = this.userCardForm.get('primaryMobile')) === null || _c === void 0 ? void 0 : _c.disable();
        this.modalRef = this.modalService.show(template, { class: 'modal-lg' });
    }
    submitUserCard() {
        if (this.userCardForm.invalid) {
            this.userCardForm.markAllAsTouched();
            return;
        }
        const formValue = this.userCardForm.getRawValue();
        const parentformValue = this.displayCardHolders.value;
        if (this.isEditMode) {
            const payload = {
                Account_Subacctid: this.selectedAccountObj.THIRD_NODE_ACCT_SUBACCT_ID,
                Account_Storeid: this.selectedAccountObj.THIRD_NODE_ACCT_STORE_ID,
                Class_Department_ID: parentformValue.classId,
                Card_Regid: formValue.cardNo,
                First_Name: formValue.firstName,
                Last_Name: formValue.lastName,
                Prim_Mob_Numbr: formValue.primaryMobile,
                Altrnt_Mob_Numbr: formValue.altMobile,
                Email_ID: formValue.email,
                Pic: this.base64textString
            };
            console.log("Payload for add card holder: ", payload);
            this.apiService.postCall(`${this.apiService.baseURL}/EditVend-CardHolder-Credentials`, payload).subscribe(res => {
                this.toastr.success('Card updated successfully');
                this.modalRef.hide();
                this.DisplayCardHolders();
            });
        }
        else {
            // ===== ADD API (your existing logic) =====
            const payload = {
                Card_MUID: formValue.cardNo,
                Second_Node_Storecode: '1001090106',
                Account_Acctid: '19',
                Account_Subacctid: this.selectedAccountObj.THIRD_NODE_ACCT_SUBACCT_ID,
                Account_Storeid: this.selectedAccountObj.THIRD_NODE_ACCT_STORE_ID,
                Class_Dept_ID: parentformValue.classId,
                Card_Typeid: formValue.cardType,
                First_Name: formValue.firstName,
                Last_Name: formValue.lastName,
                Male_Flg: formValue.gender === 'M',
                Female_Flg: formValue.gender === 'F',
                Account_Internal_UID: formValue.rollNo,
                Guardian_Hus_Wife_Name: formValue.guardianName,
                Primary_Mob_Numbr: formValue.primaryMobile,
                Alternate_Mob_Numbr: formValue.altMobile,
                Email_id: formValue.email,
                Cardholder_PIC: formValue.photo
            };
            console.log("Payload for add card holder: ", payload);
            this.apiService.postCall(`${this.apiService.baseURL}/ADD_New_CARDHOLDER`, payload)
                .subscribe(data => {
                console.log(data);
                this.toastr.success(data.Message);
                this.DisplayCardHolders();
                this.modalRef.hide();
            }, (error) => {
                console.log(error);
                this.toastr.error(error.error, '', {
                    timeOut: 5000,
                });
                this.modalRef.hide();
            });
        }
    }
    onFileSelect(event) {
        const files = event.target.files;
        const file = files[0];
        if (!file)
            return;
        this.uploadLabel = file.name;
        const reader = new FileReader();
        reader.onload = (e) => {
            var _a;
            const binaryString = e.target.result;
            this.base64textString = btoa(binaryString);
            this.userCardForm.patchValue({
                photo: this.base64textString
            });
            (_a = this.userCardForm.get('photo')) === null || _a === void 0 ? void 0 : _a.updateValueAndValidity();
            this.imagePreview = `data:${file.type};base64,${this.base64textString}`;
            this.isImageSaved = true;
        };
        reader.readAsBinaryString(file);
    }
    showPassword(user, template) {
        this.selectedUser = user;
        const payload = {
            Account_Subacctid: this.selectedAccountObj.THIRD_NODE_ACCT_SUBACCT_ID,
            Account_Storeid: this.selectedAccountObj.THIRD_NODE_ACCT_STORE_ID,
            CardRegid: user.ADC_VEND_CARDHOLDR_REGID
        };
        console.log("Payload: ", payload);
        this.apiService.postCall(`${this.apiService.baseURL}/GetVendPassword`, payload)
            .subscribe(data => {
            console.log(data);
            this.userpassword = data;
            this.modalRef = this.modalService.show(template, { class: 'modal-md' });
        }, (error) => {
            console.log(error);
            this.toastr.error(error.error, '', {
                timeOut: 5000,
            });
            this.modalRef.hide();
        });
    }
    openChangePassword(user, template) {
        this.selectedUser = user;
        this.submitted = false;
        this.passwordMismatch = false;
        this.initForm();
        const payload = {
            Account_Subacctid: this.selectedAccountObj.THIRD_NODE_ACCT_SUBACCT_ID,
            Account_Storeid: this.selectedAccountObj.THIRD_NODE_ACCT_STORE_ID,
            CardRegid: user.ADC_VEND_CARDHOLDR_REGID
        };
        console.log("payload: ", payload);
        this.apiService.postCall(`${this.apiService.baseURL}/GetVendPassword`, payload)
            .subscribe(data => {
            console.log(data);
            this.changePasswordForm.patchValue({
                currentPassword: data.Password
            });
        }, (error) => {
            console.log(error);
            this.toastr.error(error.error, '', {
                timeOut: 5000,
            });
        });
        this.modalRef = this.modalService.show(template, Object.assign({}, { class: 'width-720' }));
    }
    get f() {
        return this.changePasswordForm.controls;
    }
    changePassword() {
        this.submitted = true;
        if (this.changePasswordForm.invalid)
            return;
        const { newPassword, confirmPassword } = this.changePasswordForm.value;
        if (newPassword !== confirmPassword) {
            this.passwordMismatch = true;
            return;
        }
        this.passwordMismatch = false;
        const payload = {
            CardRegid: this.selectedUser.ADC_VEND_CARDHOLDR_REGID,
            Password: this.f.newPassword.value
        };
        console.log("Change Password Payload:", payload);
        this.apiService.postCall(`${this.apiService.baseURL}/ChangeVendPassword`, payload)
            .subscribe(data => {
            console.log(data);
            this.toastr.success(data.Message);
        }, (error) => {
            console.log(error);
            this.toastr.error(error.error, '', {
                timeOut: 5000,
            });
        });
        this.modalRef.hide();
    }
    getCountry() {
        this.apiService.CountryList().subscribe((res) => {
            this.countryList = res;
            //   this.getState();
        });
    }
    changeCountry(e) {
        this.countryID = e.target.value;
        console.log(this.countryID);
        // this.countryName = e.target.options[e.target.options.selectedIndex].text;
        if (this.countryID) {
            this.getState();
        }
        else {
            this.stateList = null;
            this.cityList = null;
            this.zipList = null;
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
        this.stateName = e.target.options[e.target.options.selectedIndex].text;
        if (this.countryID) {
            this.getCity();
        }
        else {
            this.cityList = null;
            this.zipList = null;
        }
        this.openSNThirdNode();
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
        this.cityName = e.target.options[e.target.options.selectedIndex].text;
    }
    openSNThirdNode() {
        const payload = {
            Cntryid: this.countryID,
            Stateid: this.stateID,
            Secnd_node_flg: false,
            Third_node_flg: true,
            Subacctid: this.subaccountid,
            Storeid: this.storeid,
            B2b_id: "jr0xpPU"
        };
        console.log("payload: ", payload);
        this.apiService.postCall(`${this.apiService.baseURL}/GetAcctNetwork`, payload)
            .subscribe(data => {
            console.log(data);
            this.thirdNodeAccArr = Array.isArray(data) ? data : [];
            console.log("Third Node Acc: ", this.thirdNodeAccArr);
        }, (error) => {
            console.log(error);
            this.toastr.error(error.error, '', {
                timeOut: 5000,
            });
        });
    }
    onAccountChange(event) {
        const selectedId = event.target.value;
        this.selectedAccountObj = this.thirdNodeAccArr.find(x => x.THIRD_NODE_ACCT_SUBACCT_ID == selectedId);
        console.log('Selected Object:', this.selectedAccountObj);
        this.getClassDep(this.selectedAccountObj.THIRD_NODE_ACCT_SUBACCT_ID, this.selectedAccountObj.THIRD_NODE_ACCT_STORE_ID);
    }
    viewBalance(template, user) {
        console.log("Selected user: ", user);
        const payload = {
            Card_Manufid: user.ADC_VEND_MANUFACTR_CARDID
        };
        console.log("payload: ", payload);
        this.apiService.postCall(this.apiService.baseURL + '/GetCardholderBalance', payload)
            .subscribe(data => {
            console.log(data);
            this.cardBalance = data.Balance;
        }, (error) => {
            this.toastr.error(error, '', {
                timeOut: 5000,
            });
        });
        this.modalRef = this.modalService.show(template, Object.assign({}, { class: 'width-480' }));
    }
    viewTransactionModal(template, user) {
        this.selectedUer = user;
        this.modalRef = this.modalService.show(template, Object.assign({}, { class: 'modal-xl' }));
    }
    onTabChange(tabId) {
        this.activeTabId = tabId;
        // Reset UI states
        this.showCardholderRefill = false;
        this.showCardholderSpends = false;
        if (tabId === 'tab2') {
            this.cardholderSpends = null;
        }
        if (tabId === 'tab3') {
            this.cardholderRefill = null;
        }
    }
    onSpendOnVend() {
        if (!this.fromDate1) {
            this.toastr.warning('Please select From Date');
            return;
        }
        this.loadingSpend = true;
        this.showCardholderSpends = false;
        const payload = {
            Cardholder_Regid: this.selectedUer.ADC_VEND_CARDHOLDR_REGID,
            Frm_Date: this.fromDate1
        };
        this.spinner.show();
        this.apiService.postCall(this.apiService.baseURL + '/GetCardholderSpends', payload)
            .subscribe((data) => {
            this.spinner.hide();
            this.loadingSpend = false;
            if (data === null || data === void 0 ? void 0 : data.Message) {
                this.toastr.error(data.Message);
                return;
            }
            this.cardholderSpends = data || {};
            this.showCardholderSpends = true;
        }, (error) => {
            this.spinner.hide();
            this.loadingSpend = false;
            this.toastr.error('Failed to fetch transactions');
        });
    }
    onCardRefillDetails() {
        if (!this.fromDate2) {
            this.toastr.warning('Please select From Date');
            return;
        }
        this.loadingRefill = true;
        this.showCardholderRefill = false;
        const payload = {
            Cardholder_Regid: this.selectedUer.ADC_VEND_CARDHOLDR_REGID,
            Frm_Date: this.fromDate2
        };
        this.spinner.show();
        this.apiService.postCall(this.apiService.baseURL + '/GetCardholderRefill', payload)
            .subscribe((data) => {
            this.spinner.hide();
            this.loadingRefill = false;
            if (data === null || data === void 0 ? void 0 : data.Message) {
                this.toastr.error(data.Message);
                return;
            }
            this.cardholderRefill = data || {};
            this.showCardholderRefill = true;
        }, (error) => {
            this.spinner.hide();
            this.loadingRefill = false;
            this.toastr.error('Failed to fetch refill data');
        });
    }
    backOfficeCardRefill(template) {
        this.showDetails = false;
        this.mobileNumber = '';
        this.manufacturerId = '';
        this.regId = '';
        this.resetForm();
        this.modalRef = this.modalService.show(template, Object.assign({}, { class: 'modal-lg' }));
    }
    // Search
    searchCredential(form) {
        if (form.invalid) {
            form.control.markAllAsTouched();
            return;
        }
        if (this.searchType == 'manufacturer') {
            if (!this.manufacturerId) {
                alert('Please enter Card Manufacturer ID');
                return;
            }
        }
        if (this.searchType == 'mobile') {
            if (!this.mobileNumber) {
                alert('Please enter Registered Mobile Number');
                return;
            }
        }
        const payload = {
            Card_Manf_UID_Flg: this.searchType === 'manufacturer' ? true : false,
            Card_Primry_MobIle_FLg: this.searchType === 'mobile' ? true : false,
            Card_UID: this.manufacturerId,
            Card_Mob_Numbr: this.mobileNumber
        };
        this.apiService.postCall(this.apiService.baseURL + '/GetMemberIdentity', payload)
            .subscribe((data) => {
            console.log("Data: ", data);
            this.memberIdentity = data;
            this.regId = data.ADC_VEND_CARDHOLDR_REGID;
            this.showDetails = true;
        }, (error) => {
            this.spinner.hide();
            this.loadingRefill = false;
            this.toastr.error('Failed to fetch data');
        });
    }
    // Add To Cart
    addToCart(form, template) {
        if (form.invalid) {
            form.control.markAllAsTouched();
            return;
        }
        if (this.refillAmount < 1 || this.refillAmount > 500) {
            return;
        }
        const payload = {
            Storecode: this.regId,
            MemberPlanId: "999",
            PlanName: 'Vending Plan',
            ServiceId: '21',
            ServicePrice: this.refillAmount.toFixed(2),
            Quantity: 1,
            DiscountPercent: 0,
            GstPercent: this.gstPercent,
            Currency: 'INR',
            Login_Subacctid: this.subaccountid,
            Login_Storeid: this.storeid,
            Persnl_Walt_Flg: this.walletType === 'Personal' ? true : false,
            Corp_Walt_Flg: this.walletType === 'Corporate' ? true : false,
            Cash_Flg: this.paymentType === 'Cash' ? true : false,
            Digital_Paymnt_Flg: this.paymentType === 'Digital' ? true : false,
        };
        console.log("payload: ", payload);
        this.apiService.postCall(this.apiService.baseURL + '/MDRCheckout', payload)
            .subscribe(data => {
            console.log(data);
            this.openCart = data;
            this.modalRef.hide();
            this.modalRef = this.modalService.show(template, { class: 'modal-md' });
        }, (error) => {
            console.log("error: ", error);
            this.toastr.error(error.error || error, '', {
                timeOut: 5000,
            });
        });
    }
    openAddToCart(cartForm, checkouTemplate, confirmCheckoutTemplate) {
        if (this.walletType === 'Corporate') {
            this.toastr.error("This feature is unavailable");
        }
        else if (this.paymentType === 'Cash') {
            this.cartFormPreserve = cartForm;
            this.modalRef.hide();
            this.modalRef = this.modalService.show(confirmCheckoutTemplate, { class: 'modal-md' });
        }
        else {
            this.addToCart(cartForm, checkouTemplate);
        }
    }
    diaplyCart(template) {
        const payload = {
            "Storecode": this.regId,
            "Serviceid": "21"
        };
        console.log("Display cart: ", payload);
        this.apiService.postCall(this.apiService.baseURL + '/Display-OpenCart', payload)
            .subscribe(data => {
            console.log(data);
            if (data.Message === "No Open cart Found for the Store") {
                this.toastr.error(data.Message);
            }
            else {
                this.openCart = data;
                this.modalRef.hide();
                this.modalRef = this.modalService.show(template, { class: 'modal-md' });
            }
        }, (error) => {
            var _a;
            this.toastr.error(((_a = error.error) === null || _a === void 0 ? void 0 : _a.Message) || error, '', {
                timeOut: 5000,
            });
        });
    }
    // Checkout
    checkout() {
        console.log('Checkout');
        console.log(this.cartSummary);
        // Checkout API
    }
    onPaymentTypeChange() {
        if (this.paymentType === 'Cash') {
            // Fixed amount for cash
            this.refillAmount = this.maxCashAmount;
        }
        else {
            // Clear amount for digital so user can enter any value
            this.refillAmount = null;
        }
    }
    // Reset Form
    resetForm() {
        this.searchType = 'manufacturer';
        this.manufacturerId = '';
        this.mobileNumber = '';
        this.showDetails = false;
        this.regId = '';
        this.walletType = '';
        this.refillAmount = null;
        this.paymentType = '';
    }
    closeCheckout() {
        var _a;
        (_a = this.modalRef) === null || _a === void 0 ? void 0 : _a.hide();
    }
    deleteCart() {
        var _a, _b;
        const payload = {
            Storecode: this.regId,
            ServiceId: (_a = this.openCart) === null || _a === void 0 ? void 0 : _a.MDR_CONCT_CART_FOR_SERVICEID,
            CartId: (_b = this.openCart) === null || _b === void 0 ? void 0 : _b.MDR_CONCT_SERVICE_CARTID
        };
        console.log("delete payload: ", payload);
        this.apiService.postCall(this.apiService.baseURL + '/Delete_MDR_ServiceCart', payload)
            .subscribe(data => {
            var _a;
            console.log(data);
            this.toastr.success(data.Message);
            (_a = this.modalRef) === null || _a === void 0 ? void 0 : _a.hide();
            this.openCart = null;
        }, (error) => {
            var _a;
            console.log('Error: ', error);
            this.toastr.error(((_a = error.error) === null || _a === void 0 ? void 0 : _a.Message) || error, '', {
                timeOut: 5000,
            });
        });
    }
    calculateAmount() {
        this.gstAmount = +(this.refillAmount * this.gstPercent / 100).toFixed(2);
        this.totalAmount = +(this.refillAmount + this.gstAmount).toFixed(2);
    }
    payAmount() {
        if (!this.openCart) {
            this.toastr.error('No checkout found. Please Add to Cart first.');
            return;
        }
        if (this.paymentType === 'Cash') {
            const payload = {
                CartId: this.openCart.MDR_CONCT_SERVICE_CARTID,
                Storecode: this.regId,
                ServiceId: "21",
                ConfirmPayFlg: true,
                Persnl_Wallet_Flg: this.walletType === 'Personal' ? true : false,
                Corp_Wallet_Flg: this.walletType === 'Corporate' ? true : false,
                Corp_Wallet_Subacctid: this.memberIdentity.ADC_VEND_THIRD_NODE_SUBACCTID,
                Corp_Wallet_Storeid: this.memberIdentity.ADC_VEND_THIRD_NODE_STOREID,
                Cash_Flg: true
            };
            console.log("Cash payment payload: ", payload);
            this.apiService.postCall(this.apiService.baseURL + '/BackofficeCashPayment', payload)
                .subscribe(data => {
                var _a;
                console.log(data);
                if (data.Message === ' Corporate Wallets are not associated with your account ') {
                    this.toastr.error(data.Message);
                }
                else {
                    this.toastr.success(data.Message);
                }
                (_a = this.modalRef) === null || _a === void 0 ? void 0 : _a.hide();
                this.openCart = null;
            }, (error) => {
                var _a;
                console.log('Error: ', error);
                this.toastr.error(((_a = error.error) === null || _a === void 0 ? void 0 : _a.Message) || error, '', {
                    timeOut: 5000,
                });
            });
        }
        else {
            this.razorpayService.payWithRazorpay(this.openCart.Id, this.openCart.MDR_CONCT_CART_TOTAL_TO_PAY_AMT_IN_PAISA, this.openCart.MDR_PG_LIVE_KEY_FLG, this.openCart.PlateformName, this.openCart.email, this.openCart.Contact);
        }
    }
    confirmCheckout(checkoutModal) {
        this.addToCart(this.cartFormPreserve, checkoutModal);
    }
}
ManageCustomerCardComponent.ɵfac = function ManageCustomerCardComponent_Factory(t) { return new (t || ManageCustomerCardComponent)(i0.ɵɵdirectiveInject(i1.ApiService), i0.ɵɵdirectiveInject(i2.BsModalService), i0.ɵɵdirectiveInject(i3.FormBuilder), i0.ɵɵdirectiveInject(i4.Router), i0.ɵɵdirectiveInject(i5.ToastrService), i0.ɵɵdirectiveInject(i6.NgxSpinnerService), i0.ɵɵdirectiveInject(i7.RazorpayService), i0.ɵɵdirectiveInject(i8.PaymentStatusService)); };
ManageCustomerCardComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ManageCustomerCardComponent, selectors: [["app-manage-customer-card"]], decls: 46, vars: 10, consts: [[1, "content"], [1, "heading-title"], [1, "toplevel"], [3, "formGroup"], [1, "row"], ["class", "col-md-4", 4, "ngIf"], [1, "col-md-4"], [1, "form-group"], ["formControlName", "classId", 1, "form-control"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-md-12", "text-right", "mb-3"], ["type", "button", 1, "btn", "mr-2", "custom-btn", 3, "disabled", "click"], ["type", "button", 1, "btn", "custom-btn", 3, "disabled", "click"], ["class", "card exiting-office-table mt-2 pb-0", 4, "ngIf"], ["addUserCardModal", ""], ["confirmDeleteModal", ""], ["addNewClassDepartment", ""], ["changePasswordModal", ""], ["cardBalanceModal", ""], ["viewTransactionsModal", ""], ["cardRefillModal", ""], ["checkoutModal", ""], ["checkoutConfirmationModal", ""], [1, "form-control", 3, "change"], [3, "value"], ["formControlName", "accId", 1, "form-control", 3, "change"], [1, "card", "exiting-office-table", "mt-2", "pb-0"], [1, "card-header"], [1, "card-body", "pa-0"], [1, "table"], [4, "ngFor", "ngForOf"], [1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "actdct_icon"], [4, "ngIf", "ngIfElse"], ["inactive", ""], [1, "btn", "btn-primary", "btn-sm", "mr-1", 3, "click"], [1, "icon", "ml-1"], [1, "fa", "fa-edit", "mt-2", 3, "click"], ["src", "assets/images/active_icon1.png", "width", "20"], ["src", "assets/images/deactive_icon.png", "width", "20"], [3, "formGroup", "ngSubmit"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "row", "mb-3"], ["type", "text", "formControlName", "cardNo", 1, "form-control"], ["formControlName", "cardType", 1, "form-control"], ["value", "Student"], ["value", "Staff"], ["value", "Trainees"], ["value", "Visitors"], ["type", "text", "formControlName", "rollNo", 1, "form-control"], ["type", "text", "formControlName", "firstName", 1, "form-control"], ["type", "text", "formControlName", "lastName", 1, "form-control"], ["type", "text", "formControlName", "guardianName", 1, "form-control"], ["type", "text", "formControlName", "primaryMobile", 1, "form-control"], ["type", "text", "formControlName", "altMobile", 1, "form-control"], ["type", "email", "formControlName", "email", 1, "form-control"], [1, "fw-bold"], ["formControlName", "gender", 1, "form-control"], ["value", "M"], ["value", "F"], [1, "col-md-6"], [1, "custom-file", "fileInputProfileWrap"], ["type", "file", "id", "UserPhoto", "accept", "image/*", 1, "custom-file-input", 3, "change"], ["for", "UserPhoto", 1, "custom-file-label"], ["class", "img-space mt-2 mb-3", 4, "ngIf"], [1, "text-center", "mt-4"], ["type", "submit", 1, "btn", "btn-danger", "px-4", 3, "disabled"], [1, "img-space", "mt-2", "mb-3"], [1, "img-thumbnail", 3, "src"], [3, "ngSubmit"], [1, "col-md-10"], ["name", "confirmation", 1, "form-control", 3, "ngModel", "ngModelChange"], ["value", "yes"], ["value", "no"], [1, "text-right", "mt-4"], ["type", "submit", 1, "btn", "btn-danger", "px-4"], ["type", "text", "name", "classDepName", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-danger", "px-4", 3, "click"], ["type", "button", 1, "close", 3, "click"], ["type", "text", "formControlName", "currentPassword", 1, "form-control", 3, "disabled"], ["type", "text", "formControlName", "newPassword", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "text", "formControlName", "confirmPassword", 1, "form-control", 3, "ngClass"], [1, "col-md-12", "mt-3", "text-right"], ["type", "button", 1, "btn", "custom-btn", 3, "click"], [1, "invalid-feedback"], [4, "ngIf"], [1, "modal-title", "pull-left"], [1, "row", "justify-content-center"], [1, "col-md-6", "text-center"], [1, "balance-card"], [1, "balance-label"], [1, "balance-amount"], [1, "row", "mt-3"], [1, "col-md-12", "text-right"], [1, "col-md-12"], ["heading", "My Spend On Vend", 3, "selectTab"], [1, "transaction-filter", "card", "p-3", "mt-2"], [1, "row", "align-items-end"], ["type", "date", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "btn", "btn-primary", "mt-4", 3, "click"], ["class", "card mt-3", 4, "ngIf"], ["heading", "My Card Refill", 3, "selectTab"], [1, "text-center", "mt-3"], [1, "btn", "btn-danger", "px-4", 3, "click"], [1, "card", "mt-3"], [1, "card-body", "p-0"], [1, "table", "mb-0"], ["noSpend", ""], ["colspan", "7", 1, "text-center"], ["noRefill", ""], ["colspan", "5", 1, "text-center"], ["searchForm", "ngForm"], [1, "mb-3"], [1, "col-md-12", "mb-3"], [1, "mr-4"], ["type", "radio", "name", "searchType", "value", "manufacturer", "required", "", 3, "ngModel", "ngModelChange"], ["searchTypeRef", "ngModel"], ["type", "radio", "name", "searchType", "value", "mobile", "required", "", 3, "ngModel", "ngModelChange"], ["class", "text-danger", 4, "ngIf"], ["class", "row", 4, "ngIf"], ["type", "submit", 1, "btn", "custom-btn", 3, "disabled"], [3, "ngSubmit", 4, "ngIf"], [1, "text-danger"], ["type", "text", "name", "manufacturerId", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["manufacturerIdRef", "ngModel"], ["type", "text", "name", "mobileNumber", "required", "", "minlength", "10", "maxlength", "10", "pattern", "^[0-9]{10}$", 1, "form-control", 3, "ngModel", "ngModelChange"], ["mobileNumberRef", "ngModel"], ["cartForm", "ngForm"], ["name", "walletType", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["walletTypeRef", "ngModel"], ["value", "Personal"], ["value", "Corporate"], ["name", "paymentType", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["paymentTypeRef", "ngModel"], ["value", "Cash"], ["value", "Digital"], ["type", "number", "name", "refillAmount", "required", "", 1, "form-control", 3, "ngModel", "min", "max", "placeholder", "readonly", "ngModelChange"], ["refillAmountRef", "ngModel"], [1, "row", "mt-4"], ["type", "submit", 1, "btn", "mr-2", "custom-btn", 3, "disabled"], ["type", "button", "aria-label", "Close", 1, "btn-close", "close", "pull-right", 3, "click"], ["aria-hidden", "true", 1, "visually-hidden"], [1, "cart-summary", "p-3", "rounded"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-2"], [1, "btn", "btn-danger", "btn-sm", "px-3", 3, "click"], [1, "border", "p-2", "rounded", "bg-light"], [1, "mt-3"], [1, "text-danger", "mt-3"], [1, "text-dark"], [1, "btn", "btn-danger", "px-4", "py-2", "font-weight-bold", 3, "click"], [1, "border", "p-3", "rounded", "bg-light"], [1, "text-danger", "mb-0"], [1, "btn", "btn-success", "px-4", "mr-2", 3, "click"], [1, "btn", "btn-secondary", "px-4", 3, "click"]], template: function ManageCustomerCardComponent_Template(rf, ctx) { if (rf & 1) {
        const _r137 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "div", 0)(1, "h1", 1);
        i0.ɵɵtext(2, "Manage Customer Cards");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "div", 2)(4, "form", 3)(5, "div", 4);
        i0.ɵɵtemplate(6, ManageCustomerCardComponent_div_6_Template, 8, 1, "div", 5);
        i0.ɵɵtemplate(7, ManageCustomerCardComponent_div_7_Template, 8, 1, "div", 5);
        i0.ɵɵtemplate(8, ManageCustomerCardComponent_div_8_Template, 8, 1, "div", 5);
        i0.ɵɵelementStart(9, "div", 6)(10, "div", 7)(11, "label");
        i0.ɵɵtext(12, "Class / Department");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(13, "select", 8)(14, "option", 9);
        i0.ɵɵtext(15, "Select");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(16, ManageCustomerCardComponent_option_16_Template, 2, 2, "option", 10);
        i0.ɵɵelementEnd()()()();
        i0.ɵɵelementStart(17, "div", 4)(18, "div", 11)(19, "button", 12);
        i0.ɵɵlistener("click", function ManageCustomerCardComponent_Template_button_click_19_listener() { return ctx.DisplayCardHolders(); });
        i0.ɵɵtext(20, " Display Acc. Card User ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(21, "button", 12);
        i0.ɵɵlistener("click", function ManageCustomerCardComponent_Template_button_click_21_listener() { i0.ɵɵrestoreView(_r137); const _r5 = i0.ɵɵreference(29); return i0.ɵɵresetView(ctx.addNewUserCard(_r5)); });
        i0.ɵɵtext(22, " Add New User Card ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(23, "button", 12);
        i0.ɵɵlistener("click", function ManageCustomerCardComponent_Template_button_click_23_listener() { i0.ɵɵrestoreView(_r137); const _r9 = i0.ɵɵreference(33); return i0.ɵɵresetView(ctx.addNewClassDep(_r9)); });
        i0.ɵɵtext(24, " Add New Class/Department ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(25, "button", 13);
        i0.ɵɵlistener("click", function ManageCustomerCardComponent_Template_button_click_25_listener() { i0.ɵɵrestoreView(_r137); const _r17 = i0.ɵɵreference(41); return i0.ɵɵresetView(ctx.backOfficeCardRefill(_r17)); });
        i0.ɵɵtext(26, " Back Office Card Reffil ");
        i0.ɵɵelementEnd()()()();
        i0.ɵɵtemplate(27, ManageCustomerCardComponent_div_27_Template, 27, 1, "div", 14);
        i0.ɵɵelementEnd()();
        i0.ɵɵtemplate(28, ManageCustomerCardComponent_ng_template_28_Template, 78, 6, "ng-template", null, 15, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(30, ManageCustomerCardComponent_ng_template_30_Template, 22, 1, "ng-template", null, 16, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(32, ManageCustomerCardComponent_ng_template_32_Template, 15, 1, "ng-template", null, 17, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(34, ManageCustomerCardComponent_ng_template_34_Template, 29, 10, "ng-template", null, 18, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(36, ManageCustomerCardComponent_ng_template_36_Template, 18, 1, "ng-template", null, 19, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(38, ManageCustomerCardComponent_ng_template_38_Template, 33, 4, "ng-template", null, 20, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(40, ManageCustomerCardComponent_ng_template_40_Template, 31, 7, "ng-template", null, 21, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(42, ManageCustomerCardComponent_ng_template_42_Template, 58, 19, "ng-template", null, 22, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(44, ManageCustomerCardComponent_ng_template_44_Template, 32, 2, "ng-template", null, 23, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        let tmp_5_0;
        let tmp_6_0;
        let tmp_7_0;
        let tmp_8_0;
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("formGroup", ctx.displayCardHolders);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.getlogindata.SECND_NODE_SUBACCT_FLG == true);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.getlogindata.SECND_NODE_SUBACCT_FLG == true);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.getlogindata.SECND_NODE_SUBACCT_FLG == true);
        i0.ɵɵadvance(8);
        i0.ɵɵproperty("ngForOf", ctx.classDepArr);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("disabled", !((tmp_5_0 = ctx.displayCardHolders.get("classId")) == null ? null : tmp_5_0.value));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("disabled", !((tmp_6_0 = ctx.displayCardHolders.get("classId")) == null ? null : tmp_6_0.value));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("disabled", !((tmp_7_0 = ctx.displayCardHolders.get("accId")) == null ? null : tmp_7_0.value));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("disabled", !((tmp_8_0 = ctx.displayCardHolders.get("accId")) == null ? null : tmp_8_0.value));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", (ctx.cardHolders == null ? null : ctx.cardHolders.length) > 0);
    } }, dependencies: [i9.NgClass, i9.NgForOf, i9.NgIf, i3.ɵNgNoValidate, i3.NgSelectOption, i3.ɵNgSelectMultipleOption, i3.DefaultValueAccessor, i3.NumberValueAccessor, i3.SelectControlValueAccessor, i3.RadioControlValueAccessor, i3.NgControlStatus, i3.NgControlStatusGroup, i3.RequiredValidator, i3.MinLengthValidator, i3.MaxLengthValidator, i3.PatternValidator, i3.MinValidator, i3.MaxValidator, i3.FormGroupDirective, i3.FormControlName, i3.NgModel, i3.NgForm, i10.TabDirective, i10.TabsetComponent, i9.DecimalPipe, i9.DatePipe], styles: [".toplevel[_ngcontent-%COMP%] {\r\n    background: #fff;\r\n    padding: 20px;\r\n    margin-bottom: 15px;\r\n    margin-top: 10px;\r\n    border: 1px solid #ddd;\r\n    border-radius: 5px;\r\n}\r\n\r\n.table-font-size[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table-font-size[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n  font-size: 13px; \r\n}\r\n\r\n.vipDiv[_ngcontent-%COMP%] {\r\n    background: #f8f9fa;\r\n    padding: 15px;\r\n    border-radius: 3px;\r\n    min-height: 210px;\r\n}\r\n\r\n.orderStatus[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    vertical-align: middle;\r\n}\r\n\r\n.orderStatus[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n    font-size: 13px;\r\n    padding: 4px 10px;\r\n}\r\n\r\n.orderStatus[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\r\n    color: #c50f20;\r\n    font-size: 90%;\r\n    font-weight: 600;\r\n}\r\n\r\n.bottom-btn[_ngcontent-%COMP%] {\r\n    float: right;\r\n}\r\n\r\n.alert.alert-success[_ngcontent-%COMP%] {\r\n    padding: 5px 10px;\r\n}\r\n\r\n.alert[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\r\n    font-size: 25px;\r\n    vertical-align: middle;\r\n    margin-left: 5px;\r\n}\r\n\r\n.orderStatus[_ngcontent-%COMP%] {\r\n    .card-header {\r\n        border: 0;\r\n    }\r\n    .card-body {\r\n        padding: 0;\r\n        overflow: auto;\r\n    }\r\n}\r\n\r\nh3.head-title[_ngcontent-%COMP%] {\r\n    font-size: 22px;\r\n    margin: 20px 0;\r\n    font-weight: bold;\r\n}\r\n\r\n.icon[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    vertical-align: top;\r\n    color: #17a2b8;\r\n}\r\n\r\n.orderStatus[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    max-width: 25px;\r\n}\r\n\r\n.orderStatus[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n    background: #021422;\r\n    border-radius: 25px;\r\n    color: #fff;\r\n    font-size: 11px !important;\r\n    border: 1px solid #21333c;\r\n    i {\r\n        font-size: 18px;\r\n        vertical-align: middle;\r\n        padding-right: 5px;\r\n    }\r\n}\r\n\r\nbutton.btn.view-del-btn[_ngcontent-%COMP%] {\r\n    background: #63030c !important;\r\n}\r\n\r\n.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n    border: 0;\r\n}\r\n\r\n.toplevel[_ngcontent-%COMP%], .card[_ngcontent-%COMP%] {\r\n    padding: 0 0 0;\r\n}\r\n\r\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n    padding: 8px 5px;\r\n    text-align: center;\r\n    line-height: 13px;\r\n    font-weight: 600;\r\n    font-size: 13px;\r\n    border-top: 0;\r\n}\r\n\r\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    font-size: 12px;\r\n    line-height: 15px;\r\n    padding: 10px 5px;\r\n}\r\n\r\ntd.icon[_ngcontent-%COMP%] {\r\n    padding: 0 !important;\r\n}\r\n\r\nbutton.btn.custom-btn[_ngcontent-%COMP%] {\r\n    min-width: 100px;\r\n}\r\n\r\n  .nav-tabs .nav-link {\r\n  font-size: 11px; \r\n}\r\n\r\nbutton.btn.custom-btn-white[_ngcontent-%COMP%] {\r\n    min-width: 100px;\r\n    background: #ffffff;\r\n    border: 1px solid #c50f20;\r\n    color: #c50f20;\r\n    font-weight: 600;\r\n\r\n    &:hover {\r\n        background: #c50f20;\r\n        color: #ffffff;\r\n    }\r\n}\r\n\r\n.input-group-prepend[_ngcontent-%COMP%] + .invalid-feedback[_ngcontent-%COMP%] {\r\n    top: 35px;\r\n}\r\n\r\n.card-header[_ngcontent-%COMP%] {\r\n    padding: 10px 15px;\r\n    background: #63030c;\r\n    font-size: 12px;\r\n    color: #fff;\r\n    font-weight: 500;\r\n    span {\r\n        float: left;\r\n    }\r\n    span+span {\r\n        float: right;\r\n    }\r\n}\r\n\r\n.card-header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 16px;\r\n    margin-left: 3px;\r\n}\r\n\r\n.subcard-header[_ngcontent-%COMP%] {\r\n    padding: 8px 12px;\r\n    background: #63030c;\r\n    font-size: 10px;\r\n    color: #fff;\r\n    font-weight: 500;\r\n    span {\r\n        float: left;\r\n    }\r\n    span+span {\r\n        float: right;\r\n    }\r\n}\r\n\r\n.subcard-header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 16px;\r\n    margin-left: 3px;\r\n}\r\n\r\n.icofont-info-circle[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    vertical-align: middle;\r\n    margin-left: 3px;\r\n}\r\n\r\n.orderList[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\r\n    background: #ff000029;\r\n}\r\n\r\n.orderList[_ngcontent-%COMP%] {\r\n    border-collapse: collapse;\r\n    border: 1px solid #ddd;\r\n    margin: 5px 0;\r\n}\r\n\r\n.orderList[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    border: 1px solid #ddd;\r\n}\r\n\r\n.orderList[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n    background: #212529;\r\n    color: #fff;\r\n    vertical-align: middle;\r\n}\r\n\r\n.no-border[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    border: 0 !important;\r\n    text-align: right !important;\r\n    font-weight: 600;\r\n    font-size: 12px !important;\r\n}\r\n\r\n.plain-text[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    padding-top: 6px;\r\n    font-size: 14px;\r\n    color: #333;\r\n    font-weight: 500;\r\n}\r\n\r\nlabel[_ngcontent-%COMP%] {\r\n    font-weight: 600;\r\n    color: #555;\r\n}\r\n\r\nsmall.view-customer[_ngcontent-%COMP%] {\r\n    display: block;\r\n    text-decoration: underline;\r\n    cursor: pointer;\r\n}\r\n\r\nbutton.btn.view-ord-btn[_ngcontent-%COMP%] {\r\n    min-width: 112px;\r\n}\r\n\r\nbutton.btn.view-del-btn[_ngcontent-%COMP%] {\r\n    min-width: 125px;\r\n}\r\n\r\n.card-body.no_data_available[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    color: #bd2130;\r\n    img {\r\n        display: block;\r\n        text-align: center;\r\n        margin: 0 auto 5px;\r\n        max-width: 30px;\r\n    }\r\n}\r\n\r\n\r\nsmall.viewCart[_ngcontent-%COMP%] {\r\n    text-decoration: underline;\r\n    cursor: pointer;\r\n}\r\n\r\n.hr[_ngcontent-%COMP%] {\r\n    border: none;\r\n    border-top: 1.5px solid #d1d1d1;\r\n    margin: 16px 0;\r\n    height: 0;\r\n    width: 100%;\r\n}\r\n\r\nh1.heading-title[_ngcontent-%COMP%] {\r\n    margin: 20px 0 0;\r\n}\r\n\r\n.heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    padding: 10px 5px 10px;\r\n    font-size: 20px;\r\n}\r\n\r\n.row.topLevel[_ngcontent-%COMP%] {\r\n    background: #fff;\r\n    padding: 20px 0;\r\n    margin: 0;\r\n    border-radius: 5px;\r\n}\r\n\r\n.heading.store-domain[_ngcontent-%COMP%] {\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.store-domain[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    margin-right: 20px;\r\n}\r\n\r\n.store-domain[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    background: #ddd;\r\n    padding: 5px 20px;\r\n    font-size: 13px;\r\n    border-radius: 20px;\r\n    display: inline-block;\r\n    font-weight: bold;\r\n    margin-left: 5px;\r\n}\r\n\r\n.store_id[_ngcontent-%COMP%] {\r\n    background: #ddd;\r\n    padding: 5px 20px;\r\n    border-radius: 20px;\r\n    font-size: 13px;\r\n    font-weight: 700;\r\n    float: right;\r\n    margin-top: -40px;\r\n}\r\n\r\n.box[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    overflow: hidden;\r\n    box-shadow: 0 0 4px 0px #eee;\r\n    margin: 20px 0 5px;\r\n    border-radius: 4px;\r\n    padding: 10px;\r\n    background: #fff;\r\n}\r\n\r\n.main-content-area[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\r\n    width: 20%;\r\n    float: left;\r\n    padding: 0;\r\n}\r\n\r\n.fa-star[_ngcontent-%COMP%]:before {\r\n    content: \"\\f005\";\r\n    color: #ff9600;\r\n    margin-right: 5px;\r\n}\r\n\r\n.pro-box[_ngcontent-%COMP%] {\r\n    box-shadow: 0 0 4px 0 #e9ecef;\r\n    margin: 0 5px 10px;\r\n    overflow: hidden;\r\n    padding: 15px;\r\n    border-radius: 3px;\r\n    position: relative;\r\n    border: 1px solid #dee2e6;\r\n}\r\n\r\n.pro-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    height: 100px;\r\n    width: 100px;\r\n    margin: 30px auto 15px;\r\n    display: block;\r\n}\r\n\r\n.storeitem[_ngcontent-%COMP%]   .p-details[_ngcontent-%COMP%] {\r\n    margin-bottom: 42px;\r\n}\r\n\r\np.label-txt[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    padding: 10px;\r\n    font-size: 14px;\r\n    margin: 0;\r\n}\r\n\r\n.store-available-product[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\r\n    width: 25% !important;\r\n}\r\n\r\n.selected-productLine[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .store-available-product[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\r\n    font-size: 16px;\r\n    padding: 0 10px 5px;\r\n}\r\n\r\n.right-field-head[_ngcontent-%COMP%] {\r\n    float: right;\r\n    margin-top: 10px;\r\n}\r\n\r\n.right-field-head[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    padding: 0 10px;\r\n}\r\n\r\nspan.video[_ngcontent-%COMP%], span.doc[_ngcontent-%COMP%] {\r\n    padding: 8px 15px;\r\n    background: #dee2e6;\r\n    font-size: 12px;\r\n    border-radius: 20px;\r\n}\r\n\r\n.right-field-head[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n    font-size: 11px;\r\n    border-radius: 20px;\r\n}\r\n\r\n.bottom-btn[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n    line-height: 11px;\r\n}\r\n\r\n.box.prduct-gallery[_ngcontent-%COMP%] {\r\n    position: relative;\r\n}\r\n\r\n.sample-img[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    z-index: 1;\r\n    left: 15%;\r\n    top: 28%;\r\n    transform: rotate(-45deg);\r\n}\r\n\r\np.p-name[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    margin: 0;\r\n    font-size: 13px;\r\n    font-weight: 500;\r\n    vertical-align: middle;\r\n}\r\n\r\np.item-id[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    position: absolute;\r\n    top: 0;\r\n    background: #212529;\r\n    left: 0;\r\n    font-weight: 600;\r\n    color: #fff;\r\n    border-radius: 0 0 5px;\r\n    font-size: 11px;\r\n    padding: 3px 6px;\r\n}\r\n\r\nspan.price[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n    padding: 7px 10px 0;\r\n    float: left;\r\n    font-weight: 600;\r\n    line-height: 20px;\r\n}\r\n\r\n.item-id[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\r\n    font-weight: 600;\r\n}\r\n\r\n.instock[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n    text-align: center;\r\n    margin: 0 0 3px;\r\n    position: absolute;\r\n    top: 5%;\r\n    box-shadow: 0 0 30px 0 rgb(82 63 105 / 10%);\r\n    left: 70%;\r\n    background: rgb(224 152 152 / 24%);\r\n    width: 50px;\r\n    border: 1px solid rgb(0 0 0 / 10%);\r\n    height: 50px;\r\n    border-radius: 50%;\r\n    img {\r\n        width: 30px !important;\r\n        height: 30px !important;\r\n        margin: 9px auto;\r\n    }\r\n}\r\n\r\n.pro-box.storeitem.item-box[_ngcontent-%COMP%] {\r\n    border: 1px solid #dee2e6;\r\n    height: 300px;\r\n    padding-left: 20px;\r\n    padding-right: 20px;\r\n}\r\n\r\nh1.heading-title[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    text-transform: uppercase;\r\n    font-weight: 700;\r\n    color: #ff7900;\r\n    position: relative;\r\n    margin-bottom: 10px;\r\n    width: 100%;\r\n    span {\r\n        font-size: 10px;\r\n        text-transform: inherit;\r\n        background: #495057;\r\n        color: #fff;\r\n        padding: 10px 15px;\r\n        border-radius: 25px;\r\n    }\r\n}\r\n\r\nh1.heading-title[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    max-width: 65px;\r\n    margin-right: 5px;\r\n}\r\n\r\nh1.heading-title[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    font-weight: 400;\r\n    font-size: 13px;\r\n    position: absolute;\r\n    left: 80px;\r\n    bottom: 4px;\r\n    color: grey;\r\n}\r\n\r\n.offerDiv[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 5px;\r\n    right: 5px;\r\n    font-size: 10px;\r\n    background: #dc3545;\r\n    line-height: 10px;\r\n    font-weight: 700;\r\n    width: 35px;\r\n    height: 35px;\r\n    border-radius: 50%;\r\n    padding: 9px;\r\n    text-align: center;\r\n    color: #fff;\r\n}\r\n\r\n.offerDiv[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\r\n    display: block;\r\n}\r\n\r\nspan.price.strike-price[_ngcontent-%COMP%] {\r\n    color: #ccc;\r\n    text-decoration: line-through;\r\n}\r\n\r\n.row.text-level[_ngcontent-%COMP%] {\r\n    margin: 0 -10px 10px;\r\n}\r\n\r\n.store-add-remove[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    padding: 10px;\r\n    float: left;\r\n    width: 100%;\r\n}\r\n\r\n.row.product-slider-box[_ngcontent-%COMP%] {\r\n    border-bottom: 5px solid #ddd;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.carousel-inner[_ngcontent-%COMP%] {\r\n    height: 278px;\r\n}\r\n\r\n.carousel-item[_ngcontent-%COMP%] {\r\n    margin-right: 0;\r\n    border: 1px solid #f8f9fa;\r\n    background: #fff;\r\n}\r\n\r\n.product-slider-box[_ngcontent-%COMP%]   .domain-product[_ngcontent-%COMP%] {\r\n    max-width: 23%;\r\n}\r\n\r\n.product-slider-box[_ngcontent-%COMP%]   .sub-domain-product[_ngcontent-%COMP%] {\r\n    max-width: 77%;\r\n}\r\n\r\n.store-add-remove[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n    font-size: 11px;\r\n    text-align: center;\r\n    float: left;\r\n    transition: all .5s;\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n    min-width: 65px;\r\n}\r\n\r\n.store-add-remove[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] + .btn[_ngcontent-%COMP%] {\r\n    float: right;\r\n}\r\n\r\n.item-subitem-list[_ngcontent-%COMP%]   .pro-box[_ngcontent-%COMP%] {\r\n    width: 95%;\r\n    overflow: auto;\r\n    height: 280px;\r\n}\r\n\r\n.item-subitem-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    float: left;\r\n}\r\n\r\n.item-box[_ngcontent-%COMP%] {\r\n    max-width: 225px;\r\n    width: 100%;\r\n    float: left;\r\n}\r\n\r\n.sub-item-box[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    float: left;\r\n    max-width: 225px;\r\n}\r\n\r\n.sub-item-box[_ngcontent-%COMP%]   .add_to_cart[_ngcontent-%COMP%]   button.btn[_ngcontent-%COMP%] {\r\n    background: #000064;\r\n    height: 35px;\r\n    font-size: 13px;\r\n    line-height: 16px;\r\n    color: #fff;\r\n    border-radius: 25px;\r\n    margin: 10px 0 0;\r\n    width: 100%;\r\n    text-align: center;\r\n}\r\n\r\n.add_to_cart[_ngcontent-%COMP%] {\r\n    .remove-btn {\r\n        border-radius: 50%;\r\n        background: #05054ead !important;\r\n        color: #fff;\r\n        height: 35px;\r\n        padding: 0;\r\n    }\r\n    .btn+.btn {\r\n        width: 100%;\r\n        border: 0;\r\n        border-radius: 30px;\r\n        font-size: 15px;\r\n        line-height: normal;\r\n        font-weight: 600;\r\n    }\r\n}\r\n\r\n.middle-arrow[_ngcontent-%COMP%] {\r\n    float: left;\r\n    width: 30px;\r\n    height: 50px;\r\n    font-size: 40px;\r\n    margin-top: 10%;\r\n    color: #dee2e6;\r\n    text-align: center;\r\n}\r\n\r\n.price-details[_ngcontent-%COMP%] {\r\n    float: left;\r\n    width: 100%;\r\n    margin-bottom: 10px;\r\n    font-size: 15px;\r\n    line-height: normal;\r\n    font-weight: 600;\r\n    .unit-price {\r\n        float: left;\r\n        width: 42%;\r\n    }\r\n}\r\n\r\n.unit-price[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    display: block;\r\n    font-size: 12px;\r\n    font-weight: 400;\r\n}\r\n\r\n.whole-sale-price[_ngcontent-%COMP%] {\r\n    float: right;\r\n    width: 58%;\r\n    text-align: right;\r\n    span {\r\n        font-size: 12px;\r\n        display: block;\r\n        font-weight: 400;\r\n    }\r\n}\r\n\r\n.add_to_cart[_ngcontent-%COMP%] {\r\n    clear: both;\r\n}\r\n\r\n.subItem-field[_ngcontent-%COMP%] {\r\n    width: calc(100% - 280px);\r\n    float: left;\r\n}\r\n\r\n.item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n\r\n.pro-box.active[_ngcontent-%COMP%] {\r\n    border: 1px solid #63030c;\r\n}\r\n\r\n.p-details[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\r\n    font-size: 13px;\r\n    padding: 0 5px;\r\n    min-height: 25px;\r\n    height: 25px;\r\n    text-align: center;\r\n}\r\n\r\n.p-details[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n    margin-bottom: 0;\r\n    font-weight: 400;\r\n    line-height: normal;\r\n    padding-top: 2px;\r\n    padding-bottom: 2px;\r\n}\r\n\r\n.p-details[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\r\n    margin-bottom: 4px;\r\n}\r\n\r\n.sub-item-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    margin-top: 5px !important;\r\n}\r\n\r\n.p-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n    line-height: 14px;\r\n}\r\n\r\n.add-stock[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    display: inline-block !important;\r\n    width: 60px !important;\r\n    margin-left: 5px;\r\n    vertical-align: middle;\r\n}\r\n\r\n.min-alert-count[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    width: 35px;\r\n    margin-left: 5px;\r\n    display: inline-block;\r\n    margin-right: 4px;\r\n}\r\n\r\n.d-flex[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] + span[_ngcontent-%COMP%] {\r\n    margin-left: auto;\r\n    font-weight: 600;\r\n    width: 60px;\r\n    i {\r\n        font-size: 16px;\r\n        color: #bd2130;\r\n        display: inline-block;\r\n        position: relative;\r\n        top: 2px;\r\n        cursor: pointer;\r\n    }\r\n}\r\n\r\n.sub-item-box[_ngcontent-%COMP%]   .pro-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    height: 55px;\r\n    width: 55px;\r\n    margin: 18px auto 8px;\r\n}\r\n\r\n.links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    display: block;\r\n    color: #17a2b8 !important;\r\n    text-decoration: underline !important;\r\n    font-size: 12px;\r\n    cursor: pointer;\r\n}\r\n\r\n.modal-header[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    margin: 5px 0;\r\n    color: #bd2130;\r\n}\r\n\r\n.field[_ngcontent-%COMP%] {\r\n    margin-bottom: 10px;\r\n    select {\r\n        border: 1px solid #ddd;\r\n        border-radius: 3px;\r\n        height: 26px;\r\n        font-size: 12px;\r\n        margin-left: 10px;\r\n        margin-top: -4px;\r\n        width: 60px;\r\n    }\r\n}\r\n\r\n.toplevel[_ngcontent-%COMP%] {\r\n    background: #fff;\r\n    padding: 20px;\r\n    margin-bottom: 15px;\r\n    margin-top: 10px;\r\n    border: 1px solid #ddd;\r\n    border-radius: 5px;\r\n}\r\n\r\n.orderStatus[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    max-width: 80px;\r\n}\r\n\r\n.vipDiv[_ngcontent-%COMP%] {\r\n    background: #f8f9fa;\r\n    padding: 15px;\r\n    border-radius: 3px;\r\n    min-height: 210px;\r\n}\r\n\r\n.orderStatus[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    vertical-align: middle;\r\n}\r\n\r\n.orderStatus[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n    font-size: 13px;\r\n}\r\n.orderStatus[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\r\n    color: #c50f20;\r\n    font-size: 90%;\r\n    font-weight: 600;\r\n}\r\n\r\n.bottom-btn[_ngcontent-%COMP%] {\r\n    float: right;\r\n}\r\n\r\n.alert.alert-success[_ngcontent-%COMP%] {\r\n    padding: 5px 10px;\r\n}\r\n\r\n.alert[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\r\n    font-size: 25px;\r\n    vertical-align: middle;\r\n    margin-left: 5px;\r\n}\r\n\r\n.orderStatus[_ngcontent-%COMP%] {\r\n.card-header {\r\n    border: 0;\r\n}\r\n.card-body {\r\n    padding: 0;\r\n}\r\n}\r\n\r\n.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    padding: 8px;\r\n    text-align: center;\r\n    line-height: normal;\r\n\r\n}\r\n\r\nh3.head-title[_ngcontent-%COMP%] {\r\n    font-size: 22px;\r\n    margin: 20px 0;\r\n    font-weight: bold;\r\n}\r\n\r\nlabel.clear[_ngcontent-%COMP%] {\r\n    display: block;\r\n}\r\n\r\n.save-pdf.btn[_ngcontent-%COMP%] {\r\n    font-size: 13px;\r\n    float: right;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.row.bank-details[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n}\r\n\r\n.img-preview-box[_ngcontent-%COMP%] {\r\n  width: 140px;\r\n  height: 140px;\r\n  border: 1px solid #ccc;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  background: #fafafa;\r\n}\r\n\r\n.img-preview-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  max-width: 100%;\r\n  max-height: 100%;\r\n  object-fit: cover;\r\n}\r\n\r\n.img-space[_ngcontent-%COMP%] {\r\n  max-width: 200px;     \r\n  max-height: 260px;    \r\n  overflow: hidden;\r\n}\r\n\r\n.preview-img[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: auto;\r\n  max-height: 260px;\r\n  object-fit: contain;  \r\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ManageCustomerCardComponent, [{
        type: Component,
        args: [{ selector: 'app-manage-customer-card', template: "<div class=\"content\">\n\n    <h1 class=\"heading-title\">Manage Customer Cards</h1>\n\n    <div class=\"toplevel\">\n\n        <form [formGroup]=\"displayCardHolders\">\n\n            <div class=\"row\">\n\n                <div *ngIf=\"getlogindata.SECND_NODE_SUBACCT_FLG == true\" class=\"col-md-4\">\n                    <div class=\"form-group\">\n                        <label>Country</label>\n                        <select class=\"form-control\" (change)=\"changeCountry($event)\">\n                            <option value=\"\">Select</option>\n                            <option *ngFor=\"let country of countryList\" [value]=\"country.CNTRY_ID\">\n                                {{country.CNTRY_NM}}</option>\n                        </select>\n                    </div>\n                </div>\n\n                <div *ngIf=\"getlogindata.SECND_NODE_SUBACCT_FLG == true\" class=\"col-md-4\">\n                    <div class=\"form-group\">\n                        <label>State</label>\n                        <select class=\"form-control\" (change)=\"changeState($event)\">\n                            <option value=\"\">Select</option>\n                            <option *ngFor=\"let state of stateList\" [value]=\"state.STATE_ID\">\n                                {{state.STATE_NM}}</option>\n                        </select>\n                    </div>\n                </div>\n\n                <div *ngIf=\"getlogindata.SECND_NODE_SUBACCT_FLG == true\" class=\"col-md-4\">\n                    <div class=\"form-group\">\n                        <label>My Account's</label>\n\n                        <select class=\"form-control\" formControlName=\"accId\" (change)=\"onAccountChange($event)\">\n\n                            <option value=\"\">Select</option>\n\n                            <option *ngFor=\"let acc of thirdNodeAccArr\" [value]=\"acc.THIRD_NODE_ACCT_SUBACCT_ID\">\n                                {{ acc.RETAIL_D2C_SUBACCT_OFFICE_NAME }}\n                            </option>\n\n                        </select>\n                    </div>\n                </div>\n\n                <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                        <label>Class / Department</label>\n\n                        <select class=\"form-control\" formControlName=\"classId\">\n                            <option value=\"\">Select</option>\n                            <option *ngFor=\"let classDep of classDepArr\" [value]=\"classDep.ADC_VEND_CLAS_DEPT_ID\">\n                                {{ classDep.ADC_VEND_CLAS_DEPT_NAME }}\n                            </option>\n                        </select>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"col-md-12 text-right mb-3\">\n\n                    <button type=\"button\" class=\"btn mr-2 custom-btn\" (click)=\"DisplayCardHolders()\"\n                        [disabled]=\"!displayCardHolders.get('classId')?.value\">\n                        Display Acc. Card User\n                    </button>\n\n                    <button type=\"button\" class=\"btn mr-2 custom-btn\" (click)=\"addNewUserCard(addUserCardModal)\"\n                        [disabled]=\"!displayCardHolders.get('classId')?.value\">\n                        Add New User Card\n                    </button>\n\n                    <button type=\"button\" class=\"btn mr-2 custom-btn\" (click)=\"addNewClassDep(addNewClassDepartment)\"\n                        [disabled]=\"!displayCardHolders.get('accId')?.value\">\n                        Add New Class/Department\n                    </button>\n\n                    <button type=\"button\" class=\"btn custom-btn\" (click)=\"backOfficeCardRefill(cardRefillModal)\"\n                        [disabled]=\"!displayCardHolders.get('accId')?.value\">\n                        Back Office Card Reffil\n                    </button>\n\n                </div>\n            </div>\n\n        </form>\n\n        <div *ngIf=\"cardHolders?.length > 0\" class=\"card exiting-office-table mt-2 pb-0\">\n\n            <div class=\"card-header\">\n                Already Added Card Holder(s)\n            </div>\n\n            <div class=\"card-body pa-0\">\n                <table class=\"table\">\n                    <thead>\n                        <tr>\n                            <th>Serial#</th>\n                            <th>First Name</th>\n                            <th>Last Name</th>\n                            <th>Id</th>\n                            <th>Roll No.</th>\n                            <th>Password</th>\n                            <th>Status</th>\n                            <th>Mobile No.</th>\n                            <th>Action</th>\n                        </tr>\n                    </thead>\n\n                    <tbody>\n                        <tr *ngFor=\"let user of cardHolders; let i = index\">\n\n                            <!-- Serial -->\n                            <td>{{ (i + 1) | number:'2.0' }}</td>\n\n                            <!-- First Name -->\n                            <td>{{ user.ADC_VEND_CARDHOLDR_FIRST_NAME }}</td>\n\n                            <!-- Last Name -->\n                            <td>{{ user.ADC_VEND_CARDHOLDR_LAST_NAME }}</td>\n\n                            <!-- ID -->\n                            <td>{{ user.ADC_VEND_CARDHOLDR_REGID }}</td>\n\n                            <!-- Roll No -->\n                            <td>{{ user.ADC_VEND_ACCOUNT_INTERNL_UID }}</td>\n\n                            <!-- Details -->\n                            <td>\n                                <button (click)=\"openChangePassword(user, changePasswordModal)\"\n                                    class=\"btn btn-primary btn-sm\">\n                                    Change pwd\n                                </button>\n                            </td>\n\n                            <!-- Status -->\n                            <td class=\"actdct_icon\">\n                                <span\n                                    *ngIf=\"user.ADC_VEND_CARDHOLDR_MALE_FLG || user.ADC_VEND_CARDHOLDR_FEMALE_FLG; else inactive\">\n                                    <img src=\"assets/images/active_icon1.png\" width=\"20\">\n                                </span>\n                                <ng-template #inactive>\n                                    <img src=\"assets/images/deactive_icon.png\" width=\"20\">\n                                </ng-template>\n                            </td>\n\n                            <!-- Mobile -->\n                            <td>{{ user.ADC_VEND_CARDHOLDR_PRIM_MOB_NUMBR }}</td>\n\n                            <!-- Action -->\n                            <td>\n                                <button (click)=\"viewTransactionModal(viewTransactionsModal, user)\"\n                                    class=\"btn btn-primary btn-sm mr-1\">\n                                    View Txns\n                                </button>\n\n                                <button (click)=\"viewBalance(cardBalanceModal,user)\"\n                                    class=\"btn btn-primary btn-sm mr-1\">\n                                    View Bal.\n                                </button>\n\n                                <button (click)=\"confirmDelete(confirmDeleteModal,user)\"\n                                    class=\"btn btn-primary btn-sm mr-1\">\n                                    Delete Card\n                                </button>\n\n                                <span class=\"icon ml-1\">\n                                    <i (click)=\"editUserCard(addUserCardModal, user)\" class=\"fa fa-edit mt-2\"></i>\n                                </span>\n                            </td>\n\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n        </div>\n\n    </div>\n</div>\n\n<ng-template #addUserCardModal>\n    <form [formGroup]=\"userCardForm\" (ngSubmit)=\"submitUserCard()\">\n\n        <div class=\"modal-header\">\n            <h4 class=\"modal-title\">\n                {{ isEditMode ? 'Edit User Card' : 'Add New User Card' }}\n            </h4>\n\n            <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n                <span aria-hidden=\"true\">&times;</span>\n            </button>\n        </div>\n\n        <div class=\"modal-body\">\n\n            <!-- Row 1 -->\n            <div class=\"row mb-3\">\n                <div class=\"col-md-4\">\n                    <label>Card #</label>\n                    <input type=\"text\" class=\"form-control\" formControlName=\"cardNo\">\n                </div>\n\n                <div class=\"col-md-4\">\n                    <label>Card Issued Type</label>\n                    <select class=\"form-control\" formControlName=\"cardType\">\n                        <option value=\"Student\">Student</option>\n                        <option value=\"Staff\">Staff</option>\n                        <option value=\"Trainees\">Trainees</option>\n                        <option value=\"Visitors\">Visitors</option>\n                    </select>\n                </div>\n\n                <div class=\"col-md-4\">\n                    <label>Roll / Admission / ID</label>\n                    <input type=\"text\" class=\"form-control\" formControlName=\"rollNo\">\n                </div>\n            </div>\n\n            <!-- Row 2 -->\n            <div class=\"row mb-3\">\n                <div class=\"col-md-4\">\n                    <label>First Name</label>\n                    <input type=\"text\" class=\"form-control\" formControlName=\"firstName\">\n                </div>\n\n                <div class=\"col-md-4\">\n                    <label>Last Name</label>\n                    <input type=\"text\" class=\"form-control\" formControlName=\"lastName\">\n                </div>\n\n                <div class=\"col-md-4\">\n                    <label>Parent / Guardian Name</label>\n                    <input type=\"text\" class=\"form-control\" formControlName=\"guardianName\">\n                </div>\n            </div>\n\n            <!-- Row 3 -->\n            <div class=\"row mb-3\">\n                <div class=\"col-md-4\">\n                    <label>Associated Primary Mobile</label>\n                    <input type=\"text\" class=\"form-control\" formControlName=\"primaryMobile\">\n                </div>\n\n                <div class=\"col-md-4\">\n                    <label>Alternate Mobile</label>\n                    <input type=\"text\" class=\"form-control\" formControlName=\"altMobile\">\n                </div>\n\n                <div class=\"col-md-4\">\n                    <label>Email</label>\n                    <input type=\"email\" class=\"form-control\" formControlName=\"email\">\n                </div>\n            </div>\n\n            <!-- Gender -->\n            <div class=\"row mb-3\">\n                <div class=\"col-md-4\">\n                    <label class=\"fw-bold\">Gender</label>\n\n                    <select class=\"form-control\" formControlName=\"gender\">\n                        <option value=\"M\">Male</option>\n                        <option value=\"F\">Female</option>\n                    </select>\n                </div>\n\n                <!-- <div class=\"col-md-4\">\n                    <label>\n                        Class / Department\n                    </label>\n\n                    <select class=\"form-control\" formControlName=\"classId\">\n                        <option value=\"\">Select</option>\n                        <option *ngFor=\"let classDep of classDepArr\" [value]=\"classDep.ADC_VEND_CLAS_DEPT_ID\">\n                            {{ classDep.ADC_VEND_CLAS_DEPT_NAME }}\n                        </option>\n                    </select>\n                </div> -->\n            </div>\n\n            <!-- Photo -->\n            <div class=\"row mb-3\">\n                <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                        <fieldset class=\"form-group\">\n                            <label class=\"fw-bold\">Attach User Photo</label>\n\n                            <div class=\"custom-file fileInputProfileWrap\">\n                                <input type=\"file\" class=\"custom-file-input\" id=\"UserPhoto\" accept=\"image/*\"\n                                    (change)=\"onFileSelect($event)\">\n\n                                <!-- Filename -->\n                                <label class=\"custom-file-label\" for=\"UserPhoto\">\n                                    {{ uploadLabel || 'Choose file' }}\n                                </label>\n\n                                <!-- Image Preview -->\n                                <div class=\"img-space mt-2 mb-3\" *ngIf=\"isImageSaved\">\n                                    <img [src]=\"imagePreview\" class=\"img-thumbnail\">\n                                </div>\n                            </div>\n                        </fieldset>\n                    </div>\n                </div>\n            </div>\n\n            <!-- Submit -->\n            <div class=\"text-center mt-4\">\n                <button class=\"btn btn-danger px-4\" type=\"submit\" [disabled]=\"userCardForm.invalid\">\n                    {{ isEditMode ? 'Edit User Card' : 'Add New User Card' }}\n                </button>\n            </div>\n\n        </div>\n    </form>\n</ng-template>\n\n<ng-template #confirmDeleteModal>\n    <form (ngSubmit)=\"deleteCard()\">\n\n        <div class=\"modal-header\">\n            <h4 class=\"modal-title\">Confirm Delete</h4>\n\n            <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n                <span aria-hidden=\"true\">&times;</span>\n            </button>\n        </div>\n\n        <div class=\"modal-body\">\n\n            <div class=\"row mb-3\">\n\n                <div class=\"col-md-10\">\n                    <label>Confirmation</label>\n                    <select class=\"form-control\" [(ngModel)]=\"confirmation\" name=\"confirmation\">\n                        <option value=\"\">Select</option>\n                        <option value=\"yes\">Yes</option>\n                        <option value=\"no\">No</option>\n                    </select>\n                </div>\n\n            </div>\n\n            <div class=\"text-right mt-4\">\n                <button class=\"btn btn-danger px-4\" type=\"submit\">\n                    Submit\n                </button>\n            </div>\n\n        </div>\n    </form>\n</ng-template>\n\n<ng-template #addNewClassDepartment>\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title\">\n            Add New Class Department\n        </h4>\n\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n\n    <div class=\"modal-body\">\n\n        <!-- Row 1 -->\n        <div class=\"row mb-3\">\n            <div class=\"col-md-10\">\n                <label>Class/Department Name</label>\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"classDepName\" name=\"classDepName\">\n            </div>\n        </div>\n\n        <!-- Submit -->\n        <div class=\"text-center mt-4\">\n            <button (click)=\"submitAddClassDep()\" class=\"btn btn-danger px-4\" type=\"submit\">\n                Add\n            </button>\n        </div>\n\n    </div>\n</ng-template>\n\n<ng-template #changePasswordModal>\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Change Password</h4>\n\n        <button type=\"button\" class=\"close\" (click)=\"modalRef.hide()\">\n            &times;\n        </button>\n    </div>\n\n    <div class=\"modal-body\">\n        <form [formGroup]=\"changePasswordForm\">\n\n            <div class=\"row\">\n\n                <!-- Current Password -->\n                <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                        <label>Current Password</label>\n\n                        <input type=\"text\" class=\"form-control\" formControlName=\"currentPassword\" [disabled]=\"true\">\n                    </div>\n                </div>\n\n                <!-- New Password -->\n                <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                        <label>New Password</label>\n\n                        <input type=\"text\" class=\"form-control\" formControlName=\"newPassword\" [ngClass]=\"{\n                     'is-invalid': (submitted || f.newPassword.touched) && f.newPassword.errors\n                   }\">\n\n                        <div *ngIf=\"(submitted || f.newPassword.touched) && f.newPassword.errors\"\n                            class=\"invalid-feedback\">\n\n                            <div *ngIf=\"f.newPassword.errors?.required\">\n                                New password is required\n                            </div>\n\n                            <div *ngIf=\"f.newPassword.errors?.minlength\">\n                                Minimum 6 characters required\n                            </div>\n\n                        </div>\n                    </div>\n                </div>\n\n                <!-- Confirm Password -->\n                <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                        <label>Confirm Password</label>\n\n                        <input type=\"text\" class=\"form-control\" formControlName=\"confirmPassword\" [ngClass]=\"{\n                     'is-invalid': (submitted || f.confirmPassword.touched) && (f.confirmPassword.errors || passwordMismatch)\n                   }\">\n\n                        <div *ngIf=\"(submitted || f.confirmPassword.touched) && (f.confirmPassword.errors || passwordMismatch)\"\n                            class=\"invalid-feedback\">\n\n                            <div *ngIf=\"f.confirmPassword.errors?.required\">\n                                Confirm password is required\n                            </div>\n\n                            <div *ngIf=\"passwordMismatch\">\n                                Passwords do not match\n                            </div>\n\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n\n            <!-- Button -->\n            <div class=\"row\">\n                <div class=\"col-md-12 mt-3 text-right\">\n                    <button type=\"button\" class=\"btn custom-btn\" (click)=\"changePassword()\">\n                        Update Password\n                    </button>\n                </div>\n            </div>\n\n        </form>\n    </div>\n</ng-template>\n\n<ng-template #cardBalanceModal>\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title pull-left\">\n            Card Balance\n        </h4>\n\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n\n    <div class=\"modal-body\">\n\n        <div class=\"row justify-content-center\">\n\n            <div class=\"col-md-6 text-center\">\n                <div class=\"balance-card\">\n\n                    <label class=\"balance-label\">Available Balance</label>\n\n                    <h2 class=\"balance-amount\">\n                        \u20B9 {{ cardBalance || 0 }}\n                    </h2>\n\n                </div>\n            </div>\n\n        </div>\n\n        <!-- Button -->\n        <div class=\"row mt-3\">\n            <div class=\"col-md-12 text-right\">\n                <button type=\"button\" class=\"btn custom-btn\" (click)=\"modalRef.hide()\">\n                    Close\n                </button>\n            </div>\n        </div>\n\n    </div>\n</ng-template>\n\n<ng-template #viewTransactionsModal>\n\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title\">\n            View My Transactions\n        </h4>\n\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n\n    <div class=\"modal-body\">\n\n        <tabset class=\"col-md-12\">\n\n            <!-- \uD83D\uDD39 TAB 1: Spend -->\n            <tab heading=\"My Spend On Vend\" (selectTab)=\"onTabChange('tab2')\">\n\n                <!-- Filter -->\n                <div class=\"transaction-filter card p-3 mt-2\">\n                    <div class=\"row align-items-end\">\n\n                        <div class=\"col-md-4\">\n                            <label>From Date</label>\n                            <input type=\"date\" class=\"form-control\" [(ngModel)]=\"fromDate1\">\n                        </div>\n\n                        <div class=\"col-md-4\">\n                            <button class=\"btn btn-primary mt-4\" (click)=\"onSpendOnVend()\">\n                                Show Transactions\n                            </button>\n                        </div>\n\n                    </div>\n                </div>\n\n                <!-- Table -->\n                <div *ngIf=\"showCardholderSpends\" class=\"card mt-3\">\n\n                    <div class=\"card-header\">\n                        <span><b>Balance:</b> \u20B9{{cardholderSpends?.CurrentBalance}}</span>\n                    </div>\n\n                    <div class=\"card-body p-0\">\n                        <table class=\"table mb-0\">\n                            <thead>\n                                <tr>\n                                    <th>#</th>\n                                    <th>Date/Time</th>\n                                    <th>Vend ID</th>\n                                    <th>Location</th>\n                                    <th>Amount</th>\n                                    <th>Product</th>\n                                    <th>Balance After</th>\n                                </tr>\n                            </thead>\n\n                            <tbody *ngIf=\"cardholderSpends?.DebitDetail?.length; else noSpend\">\n                                <tr *ngFor=\"let item of cardholderSpends.DebitDetail; let i = index\">\n                                    <td>{{ i + 1 }}</td>\n                                    <td>{{ item.ADC_MEMBER_DEBIT_TRANS_DATETIME | date:'dd-MMM-yyyy hh:mm a' }}</td>\n                                    <td>{{ item.ADC_MEMBER_DEBIT_TRANS_VENDID }}</td>\n                                    <td>{{ item.ADC_MEMBER_DEBIT_TRANS_LOCTN || 'N/A' }}</td>\n                                    <td>\u20B9{{ item.ADC_MEMBER_DEBIT_COST_AMT }}</td>\n                                    <td>{{ item.ADC_MEMBER_DEBIT_PRODCT_ID }}</td>\n                                    <td>\u20B9{{ item.ADC_MEMBER_CARD_BAL_AFTER_TRANS }}</td>\n                                </tr>\n                            </tbody>\n\n                            <ng-template #noSpend>\n                                <tr>\n                                    <td colspan=\"7\" class=\"text-center\">No transactions found</td>\n                                </tr>\n                            </ng-template>\n\n                        </table>\n                    </div>\n                </div>\n\n            </tab>\n\n            <!-- \uD83D\uDD39 TAB 2: Refill -->\n            <tab heading=\"My Card Refill\" (selectTab)=\"onTabChange('tab3')\">\n\n                <!-- Filter -->\n                <div class=\"transaction-filter card p-3 mt-2\">\n                    <div class=\"row align-items-end\">\n\n                        <div class=\"col-md-4\">\n                            <label>From Date</label>\n                            <input type=\"date\" class=\"form-control\" [(ngModel)]=\"fromDate2\">\n                        </div>\n\n                        <div class=\"col-md-4\">\n                            <button class=\"btn btn-primary mt-4\" (click)=\"onCardRefillDetails()\">\n                                Show Transactions\n                            </button>\n                        </div>\n\n                    </div>\n                </div>\n\n                <!-- Table -->\n                <div *ngIf=\"showCardholderRefill\" class=\"card mt-3\">\n\n                    <div class=\"card-header\">\n                        <span><b>Balance:</b> \u20B9{{cardholderRefill?.CurrentBalance}}</span>\n                    </div>\n\n                    <div class=\"card-body p-0\">\n                        <table class=\"table mb-0\">\n                            <thead>\n                                <tr>\n                                    <th>#</th>\n                                    <th>Date/Time</th>\n                                    <th>Refill Amt</th>\n                                    <th>Invoice</th>\n                                    <th>Balance After</th>\n                                </tr>\n                            </thead>\n\n                            <tbody *ngIf=\"cardholderRefill?.CreditDetail?.length; else noRefill\">\n                                <tr *ngFor=\"let item of cardholderRefill.CreditDetail; let i = index\">\n                                    <td>{{ i + 1 }}</td>\n                                    <td>{{ item.ADC_MEMBER_CREDIT_TRANS_DATETIME | date:'dd-MMM-yyyy hh:mm a' }}\n                                    </td>\n                                    <td>\u20B9{{ item.ADC_MEMBER_CREDIT_AMT }}</td>\n                                    <td>\n                                        INV-{{ item.ADC_MEMBER_CREDIT_CARTID }}\n                                        ({{ item.ADC_MEMBER_CREDIT_FRM_PORTL_FLG ? 'Online' : 'Offline' }})\n                                    </td>\n                                    <td>\u20B9{{ item.ADC_MEMBER_CARD_BAL_AFTER_TRANS }}</td>\n                                </tr>\n                            </tbody>\n\n                            <ng-template #noRefill>\n                                <tr>\n                                    <td colspan=\"5\" class=\"text-center\">No refill transactions found</td>\n                                </tr>\n                            </ng-template>\n\n                        </table>\n                    </div>\n                </div>\n\n            </tab>\n\n        </tabset>\n\n        <!-- Footer -->\n        <div class=\"text-center mt-3\">\n            <button class=\"btn btn-danger px-4\" (click)=\"modalRef.hide()\">Close</button>\n        </div>\n\n    </div>\n\n</ng-template>\n\n<ng-template #cardRefillModal>\n\n    <!-- Header -->\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title pull-left\">\n            Back Office Card Refill\n        </h4>\n\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n\n    <div class=\"modal-body\">\n\n        <!-- ================= Search Form ================= -->\n\n        <form #searchForm=\"ngForm\" (ngSubmit)=\"searchCredential(searchForm)\">\n\n            <div class=\"mb-3\">\n\n                <div class=\"row\">\n\n                    <div class=\"col-md-12 mb-3\">\n                        <label><b>Select Search Type</b></label>\n                    </div>\n\n                    <div class=\"col-md-12 mb-3\">\n\n                        <label class=\"mr-4\">\n\n                            <input type=\"radio\" name=\"searchType\" value=\"manufacturer\" [(ngModel)]=\"searchType\" required\n                                #searchTypeRef=\"ngModel\">\n\n                            Card Manufacturer ID\n\n                        </label>\n\n                        <label>\n\n                            <input type=\"radio\" name=\"searchType\" value=\"mobile\" [(ngModel)]=\"searchType\" required>\n\n                            Registered Mobile Number\n\n                        </label>\n\n                        <div class=\"text-danger\" *ngIf=\"searchForm.submitted && searchTypeRef.invalid\">\n                            Search Type is required.\n                        </div>\n\n                    </div>\n\n                </div>\n\n                <!-- Manufacturer -->\n\n                <div class=\"row\" *ngIf=\"searchType=='manufacturer'\">\n\n                    <div class=\"col-md-4\">\n\n                        <label>Card Manufacturer ID</label>\n\n                        <input type=\"text\" class=\"form-control\" name=\"manufacturerId\" [(ngModel)]=\"manufacturerId\"\n                            required #manufacturerIdRef=\"ngModel\">\n\n                        <small class=\"text-danger\" *ngIf=\"searchForm.submitted && manufacturerIdRef.invalid\">\n                            Manufacturer ID is required.\n                        </small>\n\n                    </div>\n\n                </div>\n\n                <!-- Mobile -->\n\n                <div class=\"row\" *ngIf=\"searchType=='mobile'\">\n\n                    <div class=\"col-md-4\">\n\n                        <label>Registered Mobile Number</label>\n\n                        <input type=\"text\" class=\"form-control\" name=\"mobileNumber\" [(ngModel)]=\"mobileNumber\" required\n                            minlength=\"10\" maxlength=\"10\" pattern=\"^[0-9]{10}$\" #mobileNumberRef=\"ngModel\">\n\n                        <small class=\"text-danger\" *ngIf=\"searchForm.submitted && mobileNumberRef.errors?.required\">\n                            Mobile Number is required.\n                        </small>\n\n                        <small class=\"text-danger\" *ngIf=\"searchForm.submitted && mobileNumberRef.errors?.pattern\">\n                            Enter a valid 10 digit mobile number.\n                        </small>\n\n                    </div>\n\n                </div>\n\n                <div class=\"row\">\n\n                    <div class=\"col-md-12 text-right\">\n\n                        <button class=\"btn custom-btn\" type=\"submit\" [disabled]=\"searchForm.invalid\">\n\n                            Search\n\n                        </button>\n\n                    </div>\n\n                </div>\n\n            </div>\n\n        </form>\n\n        <!-- ================= Cart Form ================= -->\n\n        <form #cartForm=\"ngForm\" *ngIf=\"showDetails\" (ngSubmit)=\"openAddToCart(cartForm, checkoutModal, checkoutConfirmationModal)\">\n\n            <div class=\"row mb-3\">\n\n                <div class=\"col-md-12\">\n\n                    <h5>\n                        <b>Registration ID :</b>\n                        {{ regId }}\n                    </h5>\n\n                </div>\n\n            </div>\n\n            <div class=\"row\">\n\n                <!-- Wallet Type -->\n\n                <div class=\"col-md-4\">\n\n                    <div class=\"form-group\">\n\n                        <label><b>Wallet Type</b></label>\n\n                        <select class=\"form-control\" name=\"walletType\" [(ngModel)]=\"walletType\" required\n                            #walletTypeRef=\"ngModel\">\n\n                            <option value=\"\">Select Wallet</option>\n                            <option value=\"Personal\">Personal</option>\n                            <option value=\"Corporate\">Corporate</option>\n\n                        </select>\n\n                        <small class=\"text-danger\" *ngIf=\"cartForm.submitted && walletTypeRef.invalid\">\n                            Wallet Type is required.\n                        </small>\n\n                    </div>\n\n                </div>\n\n                <!-- Payment Type -->\n\n                <div class=\"col-md-4\">\n\n                    <div class=\"form-group\">\n\n                        <label><b>Payment Type</b></label>\n\n                        <select class=\"form-control\" name=\"paymentType\" [(ngModel)]=\"paymentType\"\n                            (ngModelChange)=\"onPaymentTypeChange()\" required #paymentTypeRef=\"ngModel\">\n\n                            <option value=\"\">Select Payment</option>\n                            <option value=\"Cash\">Cash</option>\n                            <option value=\"Digital\">Digital</option>\n\n                        </select>\n\n                        <small class=\"text-danger\" *ngIf=\"cartForm.submitted && paymentTypeRef.invalid\">\n                            Payment Type is required.\n                        </small>\n\n                    </div>\n\n                </div>\n\n                <!-- Refill Amount -->\n\n                <div class=\"col-md-4\">\n\n                    <div class=\"form-group\">\n\n                        <label><b>Refill Amount (\u20B9)</b></label>\n\n                        <input type=\"number\" class=\"form-control\" name=\"refillAmount\" [(ngModel)]=\"refillAmount\"\n                            required [min]=\"1\" [max]=\"paymentType === 'Cash' ? maxCashAmount : null\"\n                            [placeholder]=\"paymentType === 'Cash' ? 'Fixed Amount \u20B9' + maxCashAmount : 'Enter Amount'\"\n                            [readonly]=\"paymentType === 'Cash'\" #refillAmountRef=\"ngModel\">\n\n                    </div>\n\n                </div>\n\n            </div>\n\n            <div class=\"row mt-4\">\n\n                <div class=\"col-md-12 text-right mb-3\">\n\n                    <button type=\"submit\" class=\"btn mr-2 custom-btn\" [disabled]=\"cartForm.invalid\">\n\n                        Add To Cart & Checkout\n\n                    </button>\n\n                    <button type=\"button\" class=\"btn custom-btn\" (click)=\"diaplyCart(checkoutModal)\">\n\n                        Display Cart\n\n                    </button>\n\n                </div>\n\n            </div>\n\n        </form>\n\n    </div>\n\n</ng-template>\n\n<ng-template #checkoutModal>\n\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title pull-left\">Cart Summary</h4>\n        <button type=\"button\" class=\"btn-close close pull-right\" aria-label=\"Close\" (click)=\"closeCheckout()\">\n            <span aria-hidden=\"true\" class=\"visually-hidden\">&times;</span>\n        </button>\n    </div>\n\n    <div class=\"modal-body\">\n\n        <div class=\"cart-summary p-3 rounded\">\n\n            <div class=\"d-flex justify-content-between align-items-center mb-2\">\n                <div>\n                    <p><strong>Cart Id :</strong> {{ openCart?.MDR_CONCT_SERVICE_CARTID || '\u2014' }}</p>\n                    <p><strong>Service Id :</strong> {{ openCart?.MDR_CONCT_CART_FOR_SERVICEID || '\u2014' }}</p>\n                    <p><strong>Service Name :</strong> {{ openCart?.MDR_CONCT_CART_SERVICE_NAME || '\u2014' }}</p>\n                </div>\n                <button (click)=\"deleteCart()\" class=\"btn btn-danger btn-sm px-3\">Delete CART</button>\n            </div>\n\n            <div class=\"border p-2 rounded bg-light\">\n                <p><strong>Per Unit Cost :</strong>\n                    <span class=\"text-danger\">{{ openCart?.MDR_CONCT_SPP_UNIT_SERVICE_COST | number:'1.2-2' }}</span>\n                </p>\n                <p><strong>Quantity :</strong> {{ openCart?.MDR_CONCT_SERVICE_QUANTITY }}</p>\n                <p><strong>Currency :</strong> {{ openCart?.MDR_CONCT_SERVICE_CURRENCY }}</p>\n                <p><strong>Discount % :</strong> {{ openCart?.MDR_CONCT_SERVICE_DISCNT_PERCENTG }}%</p>\n            </div>\n\n            <div class=\"mt-3\">\n                <p><strong>GST Charged :</strong>\n                    {{ openCart?.MDR_CONCT_CART_GST_CHARGED_AMT | number:'1.2-2' }}\n                </p>\n            </div>\n\n            <h5 class=\"text-danger mt-3\">\n                <strong>Total to Pay Amount :</strong>\n                <span class=\"text-dark\">\n                    {{ openCart?.MDR_CONCT_CART_TOTAL_TO_PAY_AMT | number:'1.2-2' }}\n                    {{ openCart?.MDR_CONCT_SERVICE_CURRENCY }}\n                </span>\n            </h5>\n\n            <div class=\"text-center mt-3\">\n                <button (click)=\"payAmount()\" class=\"btn btn-danger px-4 py-2 font-weight-bold\">PAY</button>\n            </div>\n\n        </div>\n\n    </div>\n</ng-template>\n\n<ng-template #checkoutConfirmationModal>\n\n    <!-- Header -->\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title pull-left\">\n            Cash Checkout Confirmation\n        </h4>\n\n        <button type=\"button\"\n                class=\"btn-close close pull-right\"\n                aria-label=\"Close\"\n                (click)=\"modalRef.hide()\">\n\n            <span aria-hidden=\"true\" class=\"visually-hidden\">&times;</span>\n\n        </button>\n    </div>\n\n    <!-- Body -->\n    <div class=\"modal-body\">\n\n        <div class=\"cart-summary p-3 rounded\">\n\n            <div class=\"border p-3 rounded bg-light\">\n\n                <p>\n                    <strong>Registration ID :</strong>\n                    {{ regId }}\n                </p>\n\n                <p>\n                    <strong>Refill Amount :</strong>\n                    \u20B9 {{refillAmount}}\n                </p>\n\n                <p>\n                    <strong>GST (5%) :</strong>\n                    \u20B9 23.81\n                </p>\n\n                <hr>\n\n                <h5 class=\"text-danger mb-0\">\n                    <strong>Total Amount :</strong>\n                    <span class=\"text-dark\">\n                        \u20B9 500.00\n                    </span>\n                </h5>\n\n            </div>\n\n            <!-- Buttons -->\n            <div class=\"text-center mt-4\">\n\n                <button\n                    class=\"btn btn-success px-4 mr-2\"\n                    (click)=\"confirmCheckout(checkoutModal)\">\n\n                    Confirm\n\n                </button>\n\n                <button\n                    class=\"btn btn-secondary px-4\"\n                    (click)=\"modalRef.hide()\">\n\n                    Cancel\n\n                </button>\n\n            </div>\n\n        </div>\n\n    </div>\n\n</ng-template>", styles: [".toplevel {\r\n    background: #fff;\r\n    padding: 20px;\r\n    margin-bottom: 15px;\r\n    margin-top: 10px;\r\n    border: 1px solid #ddd;\r\n    border-radius: 5px;\r\n}\r\n\r\n.table-font-size th,\r\n.table-font-size td {\r\n  font-size: 13px; /* Change to your desired size */\r\n}\r\n\r\n.vipDiv {\r\n    background: #f8f9fa;\r\n    padding: 15px;\r\n    border-radius: 3px;\r\n    min-height: 210px;\r\n}\r\n\r\n.orderStatus td {\r\n    vertical-align: middle;\r\n}\r\n\r\n.orderStatus td .btn {\r\n    font-size: 13px;\r\n    padding: 4px 10px;\r\n}\r\n\r\n.orderStatus small {\r\n    color: #c50f20;\r\n    font-size: 90%;\r\n    font-weight: 600;\r\n}\r\n\r\n.bottom-btn {\r\n    float: right;\r\n}\r\n\r\n.alert.alert-success {\r\n    padding: 5px 10px;\r\n}\r\n\r\n.alert .fa {\r\n    font-size: 25px;\r\n    vertical-align: middle;\r\n    margin-left: 5px;\r\n}\r\n\r\n.orderStatus {\r\n    .card-header {\r\n        border: 0;\r\n    }\r\n    .card-body {\r\n        padding: 0;\r\n        overflow: auto;\r\n    }\r\n}\r\n\r\nh3.head-title {\r\n    font-size: 22px;\r\n    margin: 20px 0;\r\n    font-weight: bold;\r\n}\r\n\r\n.icon .fa {\r\n    font-size: 20px;\r\n    vertical-align: top;\r\n    color: #17a2b8;\r\n}\r\n\r\n.orderStatus .icon img {\r\n    max-width: 25px;\r\n}\r\n\r\n.orderStatus .btn {\r\n    background: #021422;\r\n    border-radius: 25px;\r\n    color: #fff;\r\n    font-size: 11px !important;\r\n    border: 1px solid #21333c;\r\n    i {\r\n        font-size: 18px;\r\n        vertical-align: middle;\r\n        padding-right: 5px;\r\n    }\r\n}\r\n\r\nbutton.btn.view-del-btn {\r\n    background: #63030c !important;\r\n}\r\n\r\n.table thead th {\r\n    border: 0;\r\n}\r\n\r\n.toplevel,\r\n.card {\r\n    padding: 0 0 0;\r\n}\r\n\r\n.table th {\r\n    padding: 8px 5px;\r\n    text-align: center;\r\n    line-height: 13px;\r\n    font-weight: 600;\r\n    font-size: 13px;\r\n    border-top: 0;\r\n}\r\n\r\n.table td {\r\n    text-align: center;\r\n    font-size: 12px;\r\n    line-height: 15px;\r\n    padding: 10px 5px;\r\n}\r\n\r\ntd.icon {\r\n    padding: 0 !important;\r\n}\r\n\r\nbutton.btn.custom-btn {\r\n    min-width: 100px;\r\n}\r\n\r\n::ng-deep .nav-tabs .nav-link {\r\n  font-size: 11px; /* Adjust as needed */\r\n}\r\n\r\nbutton.btn.custom-btn-white {\r\n    min-width: 100px;\r\n    background: #ffffff;\r\n    border: 1px solid #c50f20;\r\n    color: #c50f20;\r\n    font-weight: 600;\r\n\r\n    &:hover {\r\n        background: #c50f20;\r\n        color: #ffffff;\r\n    }\r\n}\r\n\r\n.input-group-prepend+.invalid-feedback {\r\n    top: 35px;\r\n}\r\n\r\n.card-header {\r\n    padding: 10px 15px;\r\n    background: #63030c;\r\n    font-size: 12px;\r\n    color: #fff;\r\n    font-weight: 500;\r\n    span {\r\n        float: left;\r\n    }\r\n    span+span {\r\n        float: right;\r\n    }\r\n}\r\n\r\n.card-header img {\r\n    width: 16px;\r\n    margin-left: 3px;\r\n}\r\n\r\n.subcard-header {\r\n    padding: 8px 12px;\r\n    background: #63030c;\r\n    font-size: 10px;\r\n    color: #fff;\r\n    font-weight: 500;\r\n    span {\r\n        float: left;\r\n    }\r\n    span+span {\r\n        float: right;\r\n    }\r\n}\r\n\r\n.subcard-header img {\r\n    width: 16px;\r\n    margin-left: 3px;\r\n}\r\n\r\n.icofont-info-circle {\r\n    font-size: 20px;\r\n    vertical-align: middle;\r\n    margin-left: 3px;\r\n}\r\n\r\n.orderList thead tr {\r\n    background: #ff000029;\r\n}\r\n\r\n.orderList {\r\n    border-collapse: collapse;\r\n    border: 1px solid #ddd;\r\n    margin: 5px 0;\r\n}\r\n\r\n.orderList td {\r\n    border: 1px solid #ddd;\r\n}\r\n\r\n.orderList tr th {\r\n    background: #212529;\r\n    color: #fff;\r\n    vertical-align: middle;\r\n}\r\n\r\n.no-border td {\r\n    border: 0 !important;\r\n    text-align: right !important;\r\n    font-weight: 600;\r\n    font-size: 12px !important;\r\n}\r\n\r\n.plain-text {\r\n    display: inline-block;\r\n    padding-top: 6px;\r\n    font-size: 14px;\r\n    color: #333;\r\n    font-weight: 500;\r\n}\r\n\r\nlabel {\r\n    font-weight: 600;\r\n    color: #555;\r\n}\r\n\r\nsmall.view-customer {\r\n    display: block;\r\n    text-decoration: underline;\r\n    cursor: pointer;\r\n}\r\n\r\nbutton.btn.view-ord-btn {\r\n    min-width: 112px;\r\n}\r\n\r\nbutton.btn.view-del-btn {\r\n    min-width: 125px;\r\n}\r\n\r\n.card-body.no_data_available {\r\n    text-align: center;\r\n    color: #bd2130;\r\n    img {\r\n        display: block;\r\n        text-align: center;\r\n        margin: 0 auto 5px;\r\n        max-width: 30px;\r\n    }\r\n}\r\n\r\n\r\nsmall.viewCart {\r\n    text-decoration: underline;\r\n    cursor: pointer;\r\n}\r\n\r\n.hr {\r\n    border: none;\r\n    border-top: 1.5px solid #d1d1d1;\r\n    margin: 16px 0;\r\n    height: 0;\r\n    width: 100%;\r\n}\r\n\r\nh1.heading-title {\r\n    margin: 20px 0 0;\r\n}\r\n\r\n.heading h2 {\r\n    padding: 10px 5px 10px;\r\n    font-size: 20px;\r\n}\r\n\r\n.row.topLevel {\r\n    background: #fff;\r\n    padding: 20px 0;\r\n    margin: 0;\r\n    border-radius: 5px;\r\n}\r\n\r\n.heading.store-domain {\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.store-domain div {\r\n    display: inline-block;\r\n    margin-right: 20px;\r\n}\r\n\r\n.store-domain span {\r\n    background: #ddd;\r\n    padding: 5px 20px;\r\n    font-size: 13px;\r\n    border-radius: 20px;\r\n    display: inline-block;\r\n    font-weight: bold;\r\n    margin-left: 5px;\r\n}\r\n\r\n.store_id {\r\n    background: #ddd;\r\n    padding: 5px 20px;\r\n    border-radius: 20px;\r\n    font-size: 13px;\r\n    font-weight: 700;\r\n    float: right;\r\n    margin-top: -40px;\r\n}\r\n\r\n.box {\r\n    width: 100%;\r\n    overflow: hidden;\r\n    box-shadow: 0 0 4px 0px #eee;\r\n    margin: 20px 0 5px;\r\n    border-radius: 4px;\r\n    padding: 10px;\r\n    background: #fff;\r\n}\r\n\r\n.main-content-area .box .col {\r\n    width: 20%;\r\n    float: left;\r\n    padding: 0;\r\n}\r\n\r\n.fa-star:before {\r\n    content: \"\\f005\";\r\n    color: #ff9600;\r\n    margin-right: 5px;\r\n}\r\n\r\n.pro-box {\r\n    box-shadow: 0 0 4px 0 #e9ecef;\r\n    margin: 0 5px 10px;\r\n    overflow: hidden;\r\n    padding: 15px;\r\n    border-radius: 3px;\r\n    position: relative;\r\n    border: 1px solid #dee2e6;\r\n}\r\n\r\n.pro-box img {\r\n    height: 100px;\r\n    width: 100px;\r\n    margin: 30px auto 15px;\r\n    display: block;\r\n}\r\n\r\n.storeitem .p-details {\r\n    margin-bottom: 42px;\r\n}\r\n\r\np.label-txt {\r\n    text-align: center;\r\n    padding: 10px;\r\n    font-size: 14px;\r\n    margin: 0;\r\n}\r\n\r\n.store-available-product .col {\r\n    width: 25% !important;\r\n}\r\n\r\n.selected-productLine h5,\r\n.store-available-product h5 {\r\n    font-size: 16px;\r\n    padding: 0 10px 5px;\r\n}\r\n\r\n.right-field-head {\r\n    float: right;\r\n    margin-top: 10px;\r\n}\r\n\r\n.right-field-head li {\r\n    display: inline-block;\r\n    padding: 0 10px;\r\n}\r\n\r\nspan.video,\r\nspan.doc {\r\n    padding: 8px 15px;\r\n    background: #dee2e6;\r\n    font-size: 12px;\r\n    border-radius: 20px;\r\n}\r\n\r\n.right-field-head .btn {\r\n    font-size: 11px;\r\n    border-radius: 20px;\r\n}\r\n\r\n.bottom-btn .btn {\r\n    line-height: 11px;\r\n}\r\n\r\n.box.prduct-gallery {\r\n    position: relative;\r\n}\r\n\r\n.sample-img {\r\n    position: absolute;\r\n    z-index: 1;\r\n    left: 15%;\r\n    top: 28%;\r\n    transform: rotate(-45deg);\r\n}\r\n\r\np.p-name {\r\n    text-align: center;\r\n    margin: 0;\r\n    font-size: 13px;\r\n    font-weight: 500;\r\n    vertical-align: middle;\r\n}\r\n\r\np.item-id {\r\n    text-align: center;\r\n    position: absolute;\r\n    top: 0;\r\n    background: #212529;\r\n    left: 0;\r\n    font-weight: 600;\r\n    color: #fff;\r\n    border-radius: 0 0 5px;\r\n    font-size: 11px;\r\n    padding: 3px 6px;\r\n}\r\n\r\nspan.price {\r\n    font-size: 12px;\r\n    padding: 7px 10px 0;\r\n    float: left;\r\n    font-weight: 600;\r\n    line-height: 20px;\r\n}\r\n\r\n.item-id b {\r\n    font-weight: 600;\r\n}\r\n\r\n.instock {\r\n    font-size: 12px;\r\n    text-align: center;\r\n    margin: 0 0 3px;\r\n    position: absolute;\r\n    top: 5%;\r\n    box-shadow: 0 0 30px 0 rgb(82 63 105 / 10%);\r\n    left: 70%;\r\n    background: rgb(224 152 152 / 24%);\r\n    width: 50px;\r\n    border: 1px solid rgb(0 0 0 / 10%);\r\n    height: 50px;\r\n    border-radius: 50%;\r\n    img {\r\n        width: 30px !important;\r\n        height: 30px !important;\r\n        margin: 9px auto;\r\n    }\r\n}\r\n\r\n.pro-box.storeitem.item-box {\r\n    border: 1px solid #dee2e6;\r\n    height: 300px;\r\n    padding-left: 20px;\r\n    padding-right: 20px;\r\n}\r\n\r\nh1.heading-title {\r\n    font-size: 20px;\r\n    text-transform: uppercase;\r\n    font-weight: 700;\r\n    color: #ff7900;\r\n    position: relative;\r\n    margin-bottom: 10px;\r\n    width: 100%;\r\n    span {\r\n        font-size: 10px;\r\n        text-transform: inherit;\r\n        background: #495057;\r\n        color: #fff;\r\n        padding: 10px 15px;\r\n        border-radius: 25px;\r\n    }\r\n}\r\n\r\nh1.heading-title img {\r\n    max-width: 65px;\r\n    margin-right: 5px;\r\n}\r\n\r\nh1.heading-title small {\r\n    display: inline-block;\r\n    font-weight: 400;\r\n    font-size: 13px;\r\n    position: absolute;\r\n    left: 80px;\r\n    bottom: 4px;\r\n    color: grey;\r\n}\r\n\r\n.offerDiv {\r\n    position: absolute;\r\n    top: 5px;\r\n    right: 5px;\r\n    font-size: 10px;\r\n    background: #dc3545;\r\n    line-height: 10px;\r\n    font-weight: 700;\r\n    width: 35px;\r\n    height: 35px;\r\n    border-radius: 50%;\r\n    padding: 9px;\r\n    text-align: center;\r\n    color: #fff;\r\n}\r\n\r\n.offerDiv small {\r\n    display: block;\r\n}\r\n\r\nspan.price.strike-price {\r\n    color: #ccc;\r\n    text-decoration: line-through;\r\n}\r\n\r\n.row.text-level {\r\n    margin: 0 -10px 10px;\r\n}\r\n\r\n.store-add-remove {\r\n    text-align: center;\r\n    padding: 10px;\r\n    float: left;\r\n    width: 100%;\r\n}\r\n\r\n.row.product-slider-box {\r\n    border-bottom: 5px solid #ddd;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.carousel-inner {\r\n    height: 278px;\r\n}\r\n\r\n.carousel-item {\r\n    margin-right: 0;\r\n    border: 1px solid #f8f9fa;\r\n    background: #fff;\r\n}\r\n\r\n.product-slider-box .domain-product {\r\n    max-width: 23%;\r\n}\r\n\r\n.product-slider-box .sub-domain-product {\r\n    max-width: 77%;\r\n}\r\n\r\n.store-add-remove .btn {\r\n    font-size: 11px;\r\n    text-align: center;\r\n    float: left;\r\n    transition: all .5s;\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n    min-width: 65px;\r\n}\r\n\r\n.store-add-remove .btn+.btn {\r\n    float: right;\r\n}\r\n\r\n.item-subitem-list .pro-box {\r\n    width: 95%;\r\n    overflow: auto;\r\n    height: 280px;\r\n}\r\n\r\n.item-subitem-list li {\r\n    width: 100%;\r\n    float: left;\r\n}\r\n\r\n.item-box {\r\n    max-width: 225px;\r\n    width: 100%;\r\n    float: left;\r\n}\r\n\r\n.sub-item-box {\r\n    width: 100%;\r\n    float: left;\r\n    max-width: 225px;\r\n}\r\n\r\n.sub-item-box .add_to_cart button.btn {\r\n    background: #000064;\r\n    height: 35px;\r\n    font-size: 13px;\r\n    line-height: 16px;\r\n    color: #fff;\r\n    border-radius: 25px;\r\n    margin: 10px 0 0;\r\n    width: 100%;\r\n    text-align: center;\r\n}\r\n\r\n.add_to_cart {\r\n    .remove-btn {\r\n        border-radius: 50%;\r\n        background: #05054ead !important;\r\n        color: #fff;\r\n        height: 35px;\r\n        padding: 0;\r\n    }\r\n    .btn+.btn {\r\n        width: 100%;\r\n        border: 0;\r\n        border-radius: 30px;\r\n        font-size: 15px;\r\n        line-height: normal;\r\n        font-weight: 600;\r\n    }\r\n}\r\n\r\n.middle-arrow {\r\n    float: left;\r\n    width: 30px;\r\n    height: 50px;\r\n    font-size: 40px;\r\n    margin-top: 10%;\r\n    color: #dee2e6;\r\n    text-align: center;\r\n}\r\n\r\n.price-details {\r\n    float: left;\r\n    width: 100%;\r\n    margin-bottom: 10px;\r\n    font-size: 15px;\r\n    line-height: normal;\r\n    font-weight: 600;\r\n    .unit-price {\r\n        float: left;\r\n        width: 42%;\r\n    }\r\n}\r\n\r\n.unit-price span {\r\n    display: block;\r\n    font-size: 12px;\r\n    font-weight: 400;\r\n}\r\n\r\n.whole-sale-price {\r\n    float: right;\r\n    width: 58%;\r\n    text-align: right;\r\n    span {\r\n        font-size: 12px;\r\n        display: block;\r\n        font-weight: 400;\r\n    }\r\n}\r\n\r\n.add_to_cart {\r\n    clear: both;\r\n}\r\n\r\n.subItem-field {\r\n    width: calc(100% - 280px);\r\n    float: left;\r\n}\r\n\r\n.item img {\r\n    width: 100%;\r\n}\r\n\r\n.pro-box.active {\r\n    border: 1px solid #63030c;\r\n}\r\n\r\n.p-details .form-control {\r\n    font-size: 13px;\r\n    padding: 0 5px;\r\n    min-height: 25px;\r\n    height: 25px;\r\n    text-align: center;\r\n}\r\n\r\n.p-details .form-group label {\r\n    margin-bottom: 0;\r\n    font-weight: 400;\r\n    line-height: normal;\r\n    padding-top: 2px;\r\n    padding-bottom: 2px;\r\n}\r\n\r\n.p-details .form-group {\r\n    margin-bottom: 4px;\r\n}\r\n\r\n.sub-item-box img {\r\n    margin-top: 5px !important;\r\n}\r\n\r\n.p-details p {\r\n    font-size: 12px;\r\n    line-height: 14px;\r\n}\r\n\r\n.add-stock input {\r\n    display: inline-block !important;\r\n    width: 60px !important;\r\n    margin-left: 5px;\r\n    vertical-align: middle;\r\n}\r\n\r\n.min-alert-count input {\r\n    width: 35px;\r\n    margin-left: 5px;\r\n    display: inline-block;\r\n    margin-right: 4px;\r\n}\r\n\r\n.d-flex span+span {\r\n    margin-left: auto;\r\n    font-weight: 600;\r\n    width: 60px;\r\n    i {\r\n        font-size: 16px;\r\n        color: #bd2130;\r\n        display: inline-block;\r\n        position: relative;\r\n        top: 2px;\r\n        cursor: pointer;\r\n    }\r\n}\r\n\r\n.sub-item-box .pro-box img {\r\n    height: 55px;\r\n    width: 55px;\r\n    margin: 18px auto 8px;\r\n}\r\n\r\n.links a {\r\n    display: block;\r\n    color: #17a2b8 !important;\r\n    text-decoration: underline !important;\r\n    font-size: 12px;\r\n    cursor: pointer;\r\n}\r\n\r\n.modal-header i {\r\n    margin: 5px 0;\r\n    color: #bd2130;\r\n}\r\n\r\n.field {\r\n    margin-bottom: 10px;\r\n    select {\r\n        border: 1px solid #ddd;\r\n        border-radius: 3px;\r\n        height: 26px;\r\n        font-size: 12px;\r\n        margin-left: 10px;\r\n        margin-top: -4px;\r\n        width: 60px;\r\n    }\r\n}\r\n\r\n.toplevel {\r\n    background: #fff;\r\n    padding: 20px;\r\n    margin-bottom: 15px;\r\n    margin-top: 10px;\r\n    border: 1px solid #ddd;\r\n    border-radius: 5px;\r\n}\r\n\r\n.orderStatus td img {\r\n    max-width: 80px;\r\n}\r\n\r\n.vipDiv {\r\n    background: #f8f9fa;\r\n    padding: 15px;\r\n    border-radius: 3px;\r\n    min-height: 210px;\r\n}\r\n\r\n.orderStatus td {\r\n    vertical-align: middle;\r\n}\r\n\r\n.orderStatus td .btn {\r\n    font-size: 13px;\r\n}\r\n.orderStatus small {\r\n    color: #c50f20;\r\n    font-size: 90%;\r\n    font-weight: 600;\r\n}\r\n\r\n.bottom-btn {\r\n    float: right;\r\n}\r\n\r\n.alert.alert-success {\r\n    padding: 5px 10px;\r\n}\r\n\r\n.alert .fa {\r\n    font-size: 25px;\r\n    vertical-align: middle;\r\n    margin-left: 5px;\r\n}\r\n\r\n.orderStatus {\r\n.card-header {\r\n    border: 0;\r\n}\r\n.card-body {\r\n    padding: 0;\r\n}\r\n}\r\n\r\n.table thead th,\r\n.table tbody td {\r\n    padding: 8px;\r\n    text-align: center;\r\n    line-height: normal;\r\n\r\n}\r\n\r\nh3.head-title {\r\n    font-size: 22px;\r\n    margin: 20px 0;\r\n    font-weight: bold;\r\n}\r\n\r\nlabel.clear {\r\n    display: block;\r\n}\r\n\r\n.save-pdf.btn {\r\n    font-size: 13px;\r\n    float: right;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.row.bank-details {\r\n    margin: 0;\r\n}\r\n\r\n.img-preview-box {\r\n  width: 140px;\r\n  height: 140px;\r\n  border: 1px solid #ccc;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  background: #fafafa;\r\n}\r\n\r\n.img-preview-box img {\r\n  max-width: 100%;\r\n  max-height: 100%;\r\n  object-fit: cover;\r\n}\r\n\r\n.img-space {\r\n  max-width: 200px;     /* container width */\r\n  max-height: 260px;    /* container height */\r\n  overflow: hidden;\r\n}\r\n\r\n.preview-img {\r\n  width: 100%;\r\n  height: auto;\r\n  max-height: 260px;\r\n  object-fit: contain;  /* keeps full image visible */\r\n}\r\n"] }]
    }], function () { return [{ type: i1.ApiService }, { type: i2.BsModalService }, { type: i3.FormBuilder }, { type: i4.Router }, { type: i5.ToastrService }, { type: i6.NgxSpinnerService }, { type: i7.RazorpayService }, { type: i8.PaymentStatusService }]; }, null); })();
//# sourceMappingURL=manage-customer-card.component.js.map