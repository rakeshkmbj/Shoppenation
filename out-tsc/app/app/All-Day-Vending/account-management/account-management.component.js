import { Component, ViewChild } from '@angular/core';
import { Validators } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "src/app/services/api.service";
import * as i2 from "ngx-bootstrap/modal";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/router";
import * as i5 from "ngx-toastr";
import * as i6 from "ngx-spinner";
import * as i7 from "@angular/common";
import * as i8 from "ngx-bootstrap/tabs";
const _c0 = ["macroChildTabset"];
function AccountManagementComponent_option_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 16);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const country_r10 = ctx.$implicit;
    i0.ɵɵproperty("value", country_r10.CNTRY_ID);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", country_r10.CNTRY_NM, "");
} }
function AccountManagementComponent_option_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 16);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const state_r11 = ctx.$implicit;
    i0.ɵɵproperty("value", state_r11.STATE_ID);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", state_r11.STATE_NM, "");
} }
function AccountManagementComponent_button_24_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 17);
    i0.ɵɵlistener("click", function AccountManagementComponent_button_24_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r13); const ctx_r12 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r12.onSecondNodeNetwork()); });
    i0.ɵɵtext(1, "Display My Second Node Acc");
    i0.ɵɵelementEnd();
} }
function AccountManagementComponent_div_27_tr_25_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr")(1, "td", 24);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "number");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "td", 24);
    i0.ɵɵtext(5, " 19 ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "td", 24);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "td", 24);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "td", 24);
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "td", 24);
    i0.ɵɵtext(13, "Product Retailer");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "td")(15, "div", 28)(16, "span", 29);
    i0.ɵɵlistener("click", function AccountManagementComponent_div_27_tr_25_Template_span_click_16_listener() { const restoredCtx = i0.ɵɵrestoreView(_r19); const acc_r16 = restoredCtx.$implicit; const ctx_r18 = i0.ɵɵnextContext(2); const _r6 = i0.ɵɵreference(31); return i0.ɵɵresetView(ctx_r18.getUserStoreList(acc_r16, _r6)); });
    i0.ɵɵtext(17, " Display Users ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "span", 29);
    i0.ɵɵlistener("click", function AccountManagementComponent_div_27_tr_25_Template_span_click_18_listener() { const restoredCtx = i0.ɵɵrestoreView(_r19); const acc_r16 = restoredCtx.$implicit; const ctx_r20 = i0.ɵɵnextContext(2); const _r4 = i0.ɵɵreference(29); return i0.ɵɵresetView(ctx_r20.openModal(_r4, acc_r16)); });
    i0.ɵɵtext(19, " Acct User Mngmt ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "span", 29);
    i0.ɵɵlistener("click", function AccountManagementComponent_div_27_tr_25_Template_span_click_20_listener() { const restoredCtx = i0.ɵɵrestoreView(_r19); const acc_r16 = restoredCtx.$implicit; const ctx_r21 = i0.ɵɵnextContext(2); const _r8 = i0.ɵɵreference(33); return i0.ɵɵresetView(ctx_r21.contractMgmt(acc_r16, _r8)); });
    i0.ɵɵtext(21, " Contract Mngmt ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "span", 30);
    i0.ɵɵlistener("click", function AccountManagementComponent_div_27_tr_25_Template_span_click_22_listener() { const restoredCtx = i0.ɵɵrestoreView(_r19); const acc_r16 = restoredCtx.$implicit; const ctx_r22 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r22.editThirdNodeAcc(acc_r16)); });
    i0.ɵɵelement(23, "i", 31);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const acc_r16 = ctx.$implicit;
    const i_r17 = ctx.index;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(3, 4, i_r17 + 1, "2.0"));
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(acc_r16.THIRD_NODE_ACCT_SUBACCT_ID);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(acc_r16.THIRD_NODE_ACCT_STORE_ID);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(acc_r16.RETAIL_D2C_SUBACCT_OFFICE_NAME);
} }
function AccountManagementComponent_div_27_tr_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 32);
    i0.ɵɵtext(2, " No Third Node Accounts Found ");
    i0.ɵɵelementEnd()();
} }
function AccountManagementComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 18)(1, "div", 19)(2, "span");
    i0.ɵɵtext(3, "My Third Node Acc");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 20)(5, "div", 21)(6, "div", 22)(7, "table", 23)(8, "thead")(9, "tr")(10, "th", 24);
    i0.ɵɵtext(11, "Serial#");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "th", 24);
    i0.ɵɵtext(13, "AcctId");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "th", 24);
    i0.ɵɵtext(15, "Subacctid");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "th", 24);
    i0.ɵɵtext(17, "Storeid");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "th", 24);
    i0.ɵɵtext(19, "Account Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "th", 24);
    i0.ɵɵtext(21, "Manufacturer");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "th", 25);
    i0.ɵɵtext(23, "Action");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(24, "tbody");
    i0.ɵɵtemplate(25, AccountManagementComponent_div_27_tr_25_Template, 24, 7, "tr", 26);
    i0.ɵɵtemplate(26, AccountManagementComponent_div_27_tr_26_Template, 3, 0, "tr", 27);
    i0.ɵɵelementEnd()()()()()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(25);
    i0.ɵɵproperty("ngForOf", ctx_r3.thirdNodeAccArr);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r3.thirdNodeAccArr || ctx_r3.thirdNodeAccArr.length === 0);
} }
function AccountManagementComponent_ng_template_28_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 66);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r23 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("Store Id: ", ctx_r23.selectedThirdNode.THIRD_NODE_ACCT_STORE_ID, "");
} }
function AccountManagementComponent_ng_template_28_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 66);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r24 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("Store Id: ", ctx_r24.selectedAccId, "");
} }
function AccountManagementComponent_ng_template_28_div_26_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "Mobile is required ");
    i0.ɵɵelementEnd();
} }
function AccountManagementComponent_ng_template_28_div_26_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "Mobile must be 10 characters");
    i0.ɵɵelementEnd();
} }
function AccountManagementComponent_ng_template_28_div_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 67);
    i0.ɵɵtemplate(1, AccountManagementComponent_ng_template_28_div_26_div_1_Template, 2, 0, "div", 27);
    i0.ɵɵtemplate(2, AccountManagementComponent_ng_template_28_div_26_div_2_Template, 2, 0, "div", 27);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r25 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r25.f1.RETAIL_D2C_ACCT_INTRNL_TEAM_MOBL_NUMBR.errors.required);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r25.f1.RETAIL_D2C_ACCT_INTRNL_TEAM_MOBL_NUMBR.errors.minlength);
} }
function AccountManagementComponent_ng_template_28_div_32_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "Email is required");
    i0.ɵɵelementEnd();
} }
function AccountManagementComponent_ng_template_28_div_32_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "Email must be a valid email address");
    i0.ɵɵelementEnd();
} }
function AccountManagementComponent_ng_template_28_div_32_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 67);
    i0.ɵɵtemplate(1, AccountManagementComponent_ng_template_28_div_32_div_1_Template, 2, 0, "div", 27);
    i0.ɵɵtemplate(2, AccountManagementComponent_ng_template_28_div_32_div_2_Template, 2, 0, "div", 27);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r26 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r26.f1.RETAIL_USR_EMAIL_ID.errors.required);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r26.f1.RETAIL_USR_EMAIL_ID.errors.email);
} }
function AccountManagementComponent_ng_template_28_div_33_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4)(1, "div", 5)(2, "label");
    i0.ɵɵtext(3, "Password");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "input", 68);
    i0.ɵɵelementEnd()();
} }
function AccountManagementComponent_ng_template_28_div_72_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "img", 70);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r36 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("src", "data:image/jpeg;base64," + ctx_r36.base64textString, i0.ɵɵsanitizeUrl);
} }
function AccountManagementComponent_ng_template_28_div_72_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "img", 70);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r37 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("src", "data:image/jpeg;base64," + ctx_r37.base64textString, i0.ɵɵsanitizeUrl);
} }
function AccountManagementComponent_ng_template_28_div_72_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 69);
    i0.ɵɵtemplate(1, AccountManagementComponent_ng_template_28_div_72_ng_container_1_Template, 2, 1, "ng-container", 27);
    i0.ɵɵtemplate(2, AccountManagementComponent_ng_template_28_div_72_ng_container_2_Template, 2, 1, "ng-container", 27);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r28 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r28.editMode);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r28.editMode);
} }
function AccountManagementComponent_ng_template_28_div_82_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "img", 70);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r38 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("src", "data:image/jpeg;base64," + ctx_r38.base64textString1, i0.ɵɵsanitizeUrl);
} }
function AccountManagementComponent_ng_template_28_div_82_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "img", 70);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r39 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("src", "data:image/jpeg;base64," + ctx_r39.base64textString1, i0.ɵɵsanitizeUrl);
} }
function AccountManagementComponent_ng_template_28_div_82_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 69);
    i0.ɵɵtemplate(1, AccountManagementComponent_ng_template_28_div_82_ng_container_1_Template, 2, 1, "ng-container", 27);
    i0.ɵɵtemplate(2, AccountManagementComponent_ng_template_28_div_82_ng_container_2_Template, 2, 1, "ng-container", 27);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r29 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r29.editMode);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r29.editMode);
} }
function AccountManagementComponent_ng_template_28_button_85_Template(rf, ctx) { if (rf & 1) {
    const _r41 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 71);
    i0.ɵɵlistener("click", function AccountManagementComponent_ng_template_28_button_85_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r41); const ctx_r40 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r40.EditStoreUsers()); });
    i0.ɵɵtext(1, "Update User Details");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r30 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("disabled", ctx_r30.addStoreUserForm.invalid);
} }
function AccountManagementComponent_ng_template_28_button_86_Template(rf, ctx) { if (rf & 1) {
    const _r43 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 71);
    i0.ɵɵlistener("click", function AccountManagementComponent_ng_template_28_button_86_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r43); const ctx_r42 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r42.addStoreUser()); });
    i0.ɵɵtext(1, "Save User Details");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r31 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("disabled", ctx_r31.addStoreUserForm.invalid);
} }
const _c1 = function (a0) { return { "is-invalid": a0 }; };
function AccountManagementComponent_ng_template_28_Template(rf, ctx) { if (rf & 1) {
    const _r45 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 33)(1, "h4", 34);
    i0.ɵɵtext(2);
    i0.ɵɵtemplate(3, AccountManagementComponent_ng_template_28_span_3_Template, 2, 1, "span", 35);
    i0.ɵɵtemplate(4, AccountManagementComponent_ng_template_28_span_4_Template, 2, 1, "span", 35);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "button", 36);
    i0.ɵɵlistener("click", function AccountManagementComponent_ng_template_28_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r45); const ctx_r44 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r44.modalRef.hide()); });
    i0.ɵɵelementStart(6, "span", 37);
    i0.ɵɵtext(7, "\u00D7");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(8, "div", 38)(9, "form", 39)(10, "div", 3)(11, "div", 4)(12, "div", 5)(13, "label");
    i0.ɵɵtext(14, "First Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(15, "input", 40);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "div", 4)(17, "div", 5)(18, "label");
    i0.ɵɵtext(19, "Last Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(20, "input", 41);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(21, "div", 4)(22, "div", 5)(23, "label");
    i0.ɵɵtext(24, "Mobile Number");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(25, "input", 42);
    i0.ɵɵtemplate(26, AccountManagementComponent_ng_template_28_div_26_Template, 3, 2, "div", 43);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(27, "div", 4)(28, "div", 5)(29, "label");
    i0.ɵɵtext(30, "Email Id");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(31, "input", 44);
    i0.ɵɵtemplate(32, AccountManagementComponent_ng_template_28_div_32_Template, 3, 2, "div", 43);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(33, AccountManagementComponent_ng_template_28_div_33_Template, 5, 0, "div", 45);
    i0.ɵɵelementStart(34, "div", 4)(35, "div", 5)(36, "label");
    i0.ɵɵtext(37, "Role Allocated");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(38, "select", 46);
    i0.ɵɵlistener("change", function AccountManagementComponent_ng_template_28_Template_select_change_38_listener($event) { i0.ɵɵrestoreView(_r45); const ctx_r46 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r46.onRoleChange($event)); });
    i0.ɵɵelementStart(39, "option", 47);
    i0.ɵɵtext(40, "Select");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(41, "option", 48);
    i0.ɵɵtext(42, "VEND SUPER ADMIN");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(43, "option", 49);
    i0.ɵɵtext(44, "VEND ADMIN");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(45, "option", 50);
    i0.ɵɵtext(46, "VEND CARD MANAGER");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(47, "option", 51);
    i0.ɵɵtext(48, "VEND SUPPORT MANAGER");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(49, "option", 52);
    i0.ɵɵtext(50, "ACCOUNT MANAGER");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(51, "option", 53);
    i0.ɵɵtext(52, "ACCOUNT CARD MANAGER");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(53, "option", 54);
    i0.ɵɵtext(54, "ACCOUNT CARD HOLDER");
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(55, "div", 3)(56, "h4", 55);
    i0.ɵɵtext(57, "Other Details");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(58, "div", 56)(59, "div", 5)(60, "label");
    i0.ɵɵtext(61, "Resistent Address");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(62, "input", 57);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(63, "div", 58)(64, "div", 5)(65, "fieldset", 5)(66, "label");
    i0.ɵɵtext(67, "Attach User Photo");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(68, "div", 59)(69, "input", 60);
    i0.ɵɵlistener("change", function AccountManagementComponent_ng_template_28_Template_input_change_69_listener($event) { i0.ɵɵrestoreView(_r45); const ctx_r47 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r47.onSelectedFile($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(70, "label", 61);
    i0.ɵɵtext(71);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(72, AccountManagementComponent_ng_template_28_div_72_Template, 3, 2, "div", 62);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(73, "div", 58)(74, "div", 5)(75, "fieldset", 5)(76, "label");
    i0.ɵɵtext(77, "Attach Govt. ID Photo Card");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(78, "div", 59)(79, "input", 63);
    i0.ɵɵlistener("change", function AccountManagementComponent_ng_template_28_Template_input_change_79_listener($event) { i0.ɵɵrestoreView(_r45); const ctx_r48 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r48.onSelectedFile1($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(80, "label", 61);
    i0.ɵɵtext(81);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(82, AccountManagementComponent_ng_template_28_div_82_Template, 3, 2, "div", 62);
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(83, "div", 3)(84, "div", 64);
    i0.ɵɵtemplate(85, AccountManagementComponent_ng_template_28_button_85_Template, 2, 1, "button", 65);
    i0.ɵɵtemplate(86, AccountManagementComponent_ng_template_28_button_86_Template, 2, 1, "button", 65);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r5.editMode != true ? "Add Store User" : "Update Store User", " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r5.editMode);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.editMode);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("formGroup", ctx_r5.addStoreUserForm);
    i0.ɵɵadvance(16);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(15, _c1, ctx_r5.submitted1 && ctx_r5.f1.RETAIL_D2C_ACCT_INTRNL_TEAM_MOBL_NUMBR.errors));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.submitted1 && ctx_r5.f1.RETAIL_D2C_ACCT_INTRNL_TEAM_MOBL_NUMBR.errors);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(17, _c1, ctx_r5.submitted1 && ctx_r5.f1.RETAIL_USR_EMAIL_ID.errors));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.submitted1 && ctx_r5.f1.RETAIL_USR_EMAIL_ID.errors);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.ispassword);
    i0.ɵɵadvance(38);
    i0.ɵɵtextInterpolate(ctx_r5.uploadLabel);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.isImageSaved);
    i0.ɵɵadvance(9);
    i0.ɵɵtextInterpolate(ctx_r5.uploadLabel1);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.isImageSaved1);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r5.editMode);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r5.editMode);
} }
function AccountManagementComponent_ng_template_30_tr_29_span_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵelement(1, "img", 84);
    i0.ɵɵelementEnd();
} }
function AccountManagementComponent_ng_template_30_tr_29_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 85);
} }
function AccountManagementComponent_ng_template_30_tr_29_Template(rf, ctx) { if (rf & 1) {
    const _r57 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr")(1, "td");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "td");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "td");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "td");
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "td", 74);
    i0.ɵɵtemplate(12, AccountManagementComponent_ng_template_30_tr_29_span_12_Template, 2, 0, "span", 75);
    i0.ɵɵtemplate(13, AccountManagementComponent_ng_template_30_tr_29_ng_template_13_Template, 1, 0, "ng-template", null, 76, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "td");
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "td");
    i0.ɵɵelement(18, "img", 77);
    i0.ɵɵpipe(19, "slice");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "td", 78);
    i0.ɵɵlistener("click", function AccountManagementComponent_ng_template_30_tr_29_Template_td_click_20_listener() { const restoredCtx = i0.ɵɵrestoreView(_r57); const userStore_r51 = restoredCtx.$implicit; const ctx_r56 = i0.ɵɵnextContext(2); const _r4 = i0.ɵɵreference(29); return i0.ɵɵresetView(ctx_r56.getRetailStoresById(_r4, userStore_r51)); });
    i0.ɵɵelementStart(21, "span", 79);
    i0.ɵɵelement(22, "i", 80);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(23, "td", 81)(24, "span", 82);
    i0.ɵɵlistener("click", function AccountManagementComponent_ng_template_30_tr_29_Template_span_click_24_listener() { const restoredCtx = i0.ɵɵrestoreView(_r57); const userStore_r51 = restoredCtx.$implicit; const ctx_r58 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r58.deleteAcc(userStore_r51)); });
    i0.ɵɵelement(25, "i", 83);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const userStore_r51 = ctx.$implicit;
    const i_r52 = ctx.index;
    const _r54 = i0.ɵɵreference(14);
    const ctx_r49 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i_r52 + 1);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(userStore_r51.RETAIL_USR_ID);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2(" ", userStore_r51.RETAIL_USR_FIRST_NAME, " ", userStore_r51.RETAIL_USR_LAST_NAME, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(userStore_r51.RETAIL_D2C_ACCT_INTRNL_TEAM_MOBL_NUMBR);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(userStore_r51.RETAIL_USR_ROLE_Name);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", userStore_r51.RETAIL_D2C_ACCT_INTRNL_CSTMR_ISACTIV_FLG)("ngIfElse", _r54);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", userStore_r51.RETAIL_D2C_ACCT_INTRNL_CSTMR_RCNT_PWD, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("src", ctx_r49.imgURL + i0.ɵɵpipeBind3(19, 10, userStore_r51.RETAIL_D2C_ACCT_INTRNL_CUSTMR_PHOTO_Path, 1, -4) + "jpeg", i0.ɵɵsanitizeUrl);
} }
function AccountManagementComponent_ng_template_30_tr_30_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 86);
    i0.ɵɵtext(2, " No Users Found ");
    i0.ɵɵelementEnd()();
} }
function AccountManagementComponent_ng_template_30_Template(rf, ctx) { if (rf & 1) {
    const _r60 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 33)(1, "h4", 34);
    i0.ɵɵtext(2, " Already Added User(s) ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 36);
    i0.ɵɵlistener("click", function AccountManagementComponent_ng_template_30_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r60); const ctx_r59 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r59.modalRef.hide()); });
    i0.ɵɵelementStart(4, "span", 37);
    i0.ɵɵtext(5, "\u00D7");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(6, "div", 38)(7, "table", 72)(8, "thead")(9, "tr")(10, "th");
    i0.ɵɵtext(11, "Sr. No.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "th");
    i0.ɵɵtext(13, "User ID");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "th");
    i0.ɵɵtext(15, "Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "th");
    i0.ɵɵtext(17, "Mobile");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "th");
    i0.ɵɵtext(19, "Role of User");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "th");
    i0.ɵɵtext(21, "Status");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "th");
    i0.ɵɵtext(23, "Password");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "th");
    i0.ɵɵtext(25, "Photo");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "th", 73);
    i0.ɵɵtext(27, "Action");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(28, "tbody");
    i0.ɵɵtemplate(29, AccountManagementComponent_ng_template_30_tr_29_Template, 26, 14, "tr", 26);
    i0.ɵɵtemplate(30, AccountManagementComponent_ng_template_30_tr_30_Template, 3, 0, "tr", 27);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext();
    i0.ɵɵadvance(29);
    i0.ɵɵproperty("ngForOf", ctx_r7.userStoreList);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r7.userStoreList || ctx_r7.userStoreList.length === 0);
} }
function AccountManagementComponent_ng_template_32_div_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 98);
    i0.ɵɵtext(1, " Loading macro setup... ");
    i0.ɵɵelementEnd();
} }
function AccountManagementComponent_ng_template_32_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r67 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 99);
    i0.ɵɵtext(1, " No macro setup is available. Please add a macro setup first. ");
    i0.ɵɵelementStart(2, "button", 100);
    i0.ɵɵlistener("click", function AccountManagementComponent_ng_template_32_div_14_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r67); const ctx_r66 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r66.switchToAddMacroSetup()); });
    i0.ɵɵtext(3, " Add Mac. Setup ");
    i0.ɵɵelementEnd()();
} }
function AccountManagementComponent_ng_template_32_form_16_div_326_Template(rf, ctx) { if (rf & 1) {
    const _r70 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 3)(1, "div", 64)(2, "button", 185);
    i0.ɵɵlistener("click", function AccountManagementComponent_ng_template_32_form_16_div_326_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r70); const ctx_r69 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r69.addMacroSetup()); });
    i0.ɵɵtext(3, " Add Mac. Setup ");
    i0.ɵɵelementEnd()()();
} }
function AccountManagementComponent_ng_template_32_form_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "form", 39)(1, "div", 101)(2, "div", 4)(3, "div", 5)(4, "label");
    i0.ɵɵtext(5, " Associated Industry ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "select", 102)(7, "option", 103);
    i0.ɵɵtext(8, " Select Associated Industry ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "option", 104);
    i0.ɵɵtext(10, "Organization Promoters & Directors");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "option", 105);
    i0.ɵɵtext(12, "CEO & Managing Director");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "option", 106);
    i0.ɵɵtext(14, "CXO - Higher Management");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "option", 107);
    i0.ɵɵtext(16, "VP-GM Mid Level Management");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "option", 108);
    i0.ɵɵtext(18, "Operation Manager-Supervisor Level Management");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "option", 109);
    i0.ɵɵtext(20, "Sales & Customer Manager");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "option", 110);
    i0.ɵɵtext(22, "Operation Level & HR/ Admin Staff");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "option", 111);
    i0.ɵɵtext(24, "Technology Support Staff");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "option", 112);
    i0.ɵɵtext(26, "Customer Support & Contact Centre Staff");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "option", 113);
    i0.ɵɵtext(28, "Legal Support Team");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(29, "option", 114);
    i0.ɵɵtext(30, "Training & Teaching Staff");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(31, "option", 115);
    i0.ɵɵtext(32, "Security Staff");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(33, "option", 116);
    i0.ɵɵtext(34, "Office Support Staff");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(35, "option", 117);
    i0.ɵɵtext(36, "Staff on Contract");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(37, "option", 118);
    i0.ɵɵtext(38, "Sales Force Staff");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(39, "option", 119);
    i0.ɵɵtext(40, "Delivery Runners");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(41, "option", 120);
    i0.ɵɵtext(42, "Line Production Staff");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(43, "option", 121);
    i0.ɵɵtext(44, "Quality and Compliances Staff");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(45, "option", 122);
    i0.ɵɵtext(46, "Production Manager");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(47, "option", 123);
    i0.ɵɵtext(48, "Procurement Staff");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(49, "option", 124);
    i0.ɵɵtext(50, "Doctors & Surgeons");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(51, "option", 125);
    i0.ɵɵtext(52, "Paramedics & Nursing Staff");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(53, "option", 126);
    i0.ɵɵtext(54, "Chief Medical Officer");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(55, "option", 127);
    i0.ɵɵtext(56, "Registrar and Procurement Head");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(57, "option", 128);
    i0.ɵɵtext(58, "Reception and Customer attendants");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(59, "option", 129);
    i0.ɵɵtext(60, "Operation Theatre Staff");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(61, "option", 130);
    i0.ɵɵtext(62, "Patients");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(63, "option", 131);
    i0.ɵɵtext(64, "D2C Customers");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(65, "option", 132);
    i0.ɵɵtext(66, "B2B Customers");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(67, "option", 133);
    i0.ɵɵtext(68, "Retailer Network Channel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(69, "option", 48);
    i0.ɵɵtext(70, "Distributor Network Channel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(71, "option", 49);
    i0.ɵɵtext(72, "Service Providers");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(73, "option", 50);
    i0.ɵɵtext(74, "Stockists");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(75, "option", 52);
    i0.ɵɵtext(76, "C&FS Users");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(77, "option", 53);
    i0.ɵɵtext(78, "Logistics Support Staff");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(79, "option", 51);
    i0.ɵɵtext(80, "Drivers & Delivery Staffs");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(81, "option", 54);
    i0.ɵɵtext(82, "Principal & Vice Principal");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(83, "option", 134);
    i0.ɵɵtext(84, "Chancellors");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(85, "option", 135);
    i0.ɵɵtext(86, "Vice-Chancellors");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(87, "option", 136);
    i0.ɵɵtext(88, "Bank - Financial Services Branch Manager");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(89, "option", 137);
    i0.ɵɵtext(90, "Cashiers and Banking Staff");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(91, "option", 138);
    i0.ɵɵtext(92, "TPAs");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(93, "option", 139);
    i0.ɵɵtext(94, "Dealers & Retail Stores");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(95, "option", 140);
    i0.ɵɵtext(96, "Relation Ship Managers & Client Account Managers ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(97, "option", 141);
    i0.ɵɵtext(98, "Warehouse Supervisor");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(99, "option", 142);
    i0.ɵɵtext(100, "Collection Executive");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(101, "option", 143);
    i0.ɵɵtext(102, "Hospital Admin Staff");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(103, "option", 144);
    i0.ɵɵtext(104, "Teacher");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(105, "option", 145);
    i0.ɵɵtext(106, "Professors & Senior Professors");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(107, "option", 146);
    i0.ɵɵtext(108, "Faculty Deans");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(109, "option", 147);
    i0.ɵɵtext(110, "Hostel Wardens");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(111, "option", 148);
    i0.ɵɵtext(112, "Students");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(113, "option", 149);
    i0.ɵɵtext(114, "Visitors and Guests");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(115, "option", 150);
    i0.ɵɵtext(116, "Parents & Guardians");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(117, "option", 151);
    i0.ɵɵtext(118, "Project Manager");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(119, "option", 152);
    i0.ɵɵtext(120, "Site Manager");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(121, "option", 153);
    i0.ɵɵtext(122, "Surveyor");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(123, "option", 154);
    i0.ɵɵtext(124, "Hotel Manager");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(125, "option", 155);
    i0.ɵɵtext(126, "Lobby Manager");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(127, "option", 156);
    i0.ɵɵtext(128, "Chef & Restaurateur");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(129, "option", 157);
    i0.ɵɵtext(130, "Event Manager");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(131, "option", 158);
    i0.ɵɵtext(132, "Field Service Engineers");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(133, "option", 159);
    i0.ɵɵtext(134, "Technology Support Staff");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(135, "div", 4)(136, "div", 5)(137, "label");
    i0.ɵɵtext(138, " Brand Asset (Card) Duration ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(139, "select", 160)(140, "option", 103);
    i0.ɵɵtext(141, " Select Brand Asset Duration ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(142, "option", 104);
    i0.ɵɵtext(143, "1 year");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(144, "option", 106);
    i0.ɵɵtext(145, "3 years");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(146, "option", 108);
    i0.ɵɵtext(147, "5 years");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(148, "div", 4)(149, "div", 5)(150, "label");
    i0.ɵɵtext(151, " Validity Start Date ");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(152, "input", 161);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(153, "div", 162)(154, "div", 56)(155, "fieldset")(156, "legend");
    i0.ɵɵtext(157, " Wallet Types ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(158, "div", 3)(159, "div", 58)(160, "div", 5)(161, "label");
    i0.ɵɵtext(162, " Personal Wallet Availability ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(163, "div", 163);
    i0.ɵɵelement(164, "input", 164);
    i0.ɵɵelementStart(165, "label", 165);
    i0.ɵɵtext(166, " Default ");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(167, "div", 58)(168, "div", 5)(169, "label");
    i0.ɵɵtext(170, " Corporate Wallet Availability ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(171, "div", 163);
    i0.ɵɵelement(172, "input", 166);
    i0.ɵɵelementStart(173, "label", 165);
    i0.ɵɵtext(174, " Activate ");
    i0.ɵɵelementEnd()()()()()()()();
    i0.ɵɵelementStart(175, "div", 101)(176, "div", 56)(177, "fieldset")(178, "legend");
    i0.ɵɵtext(179, " Commercial Access ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(180, "div", 3)(181, "div", 56)(182, "div", 5)(183, "label");
    i0.ɵɵtext(184, " On Network Commerce Flag ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(185, "div", 163);
    i0.ɵɵelement(186, "input", 167);
    i0.ɵɵelementStart(187, "label", 165);
    i0.ɵɵtext(188, " Default ");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(189, "div", 58)(190, "div", 5)(191, "label");
    i0.ɵɵtext(192, " Access to Campus Terminal POS ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(193, "div", 163);
    i0.ɵɵelement(194, "input", 168);
    i0.ɵɵelementStart(195, "label", 165);
    i0.ɵɵtext(196, " Activate ");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(197, "div", 58)(198, "div", 5)(199, "label");
    i0.ɵɵtext(200, " Access to Full Terminal Network ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(201, "div", 163);
    i0.ɵɵelement(202, "input", 169);
    i0.ɵɵelementStart(203, "label", 165);
    i0.ɵɵtext(204, " Activate ");
    i0.ɵɵelementEnd()()()()()()()();
    i0.ɵɵelementStart(205, "div", 101)(206, "div", 56)(207, "fieldset")(208, "legend");
    i0.ɵɵtext(209, " Users Categories ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(210, "div", 3)(211, "div", 58)(212, "div", 5)(213, "label");
    i0.ɵɵtext(214, " Internal / Employees ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(215, "div", 163);
    i0.ɵɵelement(216, "input", 170);
    i0.ɵɵelementStart(217, "label", 165);
    i0.ɵɵtext(218, " Activate ");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(219, "div", 58)(220, "div", 5)(221, "label");
    i0.ɵɵtext(222, " Banks / Insurance ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(223, "div", 163);
    i0.ɵɵelement(224, "input", 171);
    i0.ɵɵelementStart(225, "label", 165);
    i0.ɵɵtext(226, " Activate ");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(227, "div", 58)(228, "div", 5)(229, "label");
    i0.ɵɵtext(230, " Channel Network / Sup. Chain ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(231, "div", 163);
    i0.ɵɵelement(232, "input", 172);
    i0.ɵɵelementStart(233, "label", 165);
    i0.ɵɵtext(234, " Activate ");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(235, "div", 58)(236, "div", 5)(237, "label");
    i0.ɵɵtext(238, " CSR Providers ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(239, "div", 163);
    i0.ɵɵelement(240, "input", 173);
    i0.ɵɵelementStart(241, "label", 165);
    i0.ɵɵtext(242, " Activate ");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(243, "div", 58)(244, "div", 5)(245, "label");
    i0.ɵɵtext(246, " Security Staff / Contractors ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(247, "div", 163);
    i0.ɵɵelement(248, "input", 174);
    i0.ɵɵelementStart(249, "label", 165);
    i0.ɵɵtext(250, " Activate ");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(251, "div", 58)(252, "div", 5)(253, "label");
    i0.ɵɵtext(254, " Events Based Users ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(255, "div", 163);
    i0.ɵɵelement(256, "input", 175);
    i0.ɵɵelementStart(257, "label", 165);
    i0.ɵɵtext(258, " Activate ");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(259, "div", 58)(260, "div", 5)(261, "label");
    i0.ɵɵtext(262, " B2B Customers ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(263, "div", 163);
    i0.ɵɵelement(264, "input", 176);
    i0.ɵɵelementStart(265, "label", 165);
    i0.ɵɵtext(266, " Activate ");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(267, "div", 58)(268, "div", 5)(269, "label");
    i0.ɵɵtext(270, " Guests / Visitors ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(271, "div", 163);
    i0.ɵɵelement(272, "input", 177);
    i0.ɵɵelementStart(273, "label", 165);
    i0.ɵɵtext(274, " Activate ");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(275, "div", 58)(276, "div", 5)(277, "label");
    i0.ɵɵtext(278, " Product / Service Consumers ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(279, "div", 163);
    i0.ɵɵelement(280, "input", 178);
    i0.ɵɵelementStart(281, "label", 165);
    i0.ɵɵtext(282, " Activate ");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(283, "div", 58)(284, "div", 5)(285, "label");
    i0.ɵɵtext(286, " Asset Owners / Users ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(287, "div", 163);
    i0.ɵɵelement(288, "input", 179);
    i0.ɵɵelementStart(289, "label", 165);
    i0.ɵɵtext(290, " Activate ");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(291, "div", 58)(292, "div", 5)(293, "label");
    i0.ɵɵtext(294, " Service Providers ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(295, "div", 163);
    i0.ɵɵelement(296, "input", 180);
    i0.ɵɵelementStart(297, "label", 165);
    i0.ɵɵtext(298, " Activate ");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(299, "div", 58)(300, "div", 5)(301, "label");
    i0.ɵɵtext(302, " Social Group Users ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(303, "div", 163);
    i0.ɵɵelement(304, "input", 181);
    i0.ɵɵelementStart(305, "label", 165);
    i0.ɵɵtext(306, " Activate ");
    i0.ɵɵelementEnd()()()()()()()();
    i0.ɵɵelementStart(307, "div", 101)(308, "div", 56)(309, "fieldset")(310, "legend");
    i0.ɵɵtext(311, " General Setup ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(312, "div", 5)(313, "label");
    i0.ɵɵtext(314, " Cash Charging Back office Availability with Fixed amt 500.00 INR ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(315, "div", 163);
    i0.ɵɵelement(316, "input", 182);
    i0.ɵɵelementStart(317, "label", 165);
    i0.ɵɵtext(318, " Activate ");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(319, "div", 5)(320, "label");
    i0.ɵɵtext(321, " Brand Card on Multiple Account Wallet ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(322, "div", 163);
    i0.ɵɵelement(323, "input", 183);
    i0.ɵɵelementStart(324, "label", 165);
    i0.ɵɵtext(325, " Activate ");
    i0.ɵɵelementEnd()()()()()();
    i0.ɵɵtemplate(326, AccountManagementComponent_ng_template_32_form_16_div_326_Template, 4, 0, "div", 184);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r65 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("formGroup", ctx_r65.macroSetupForm);
    i0.ɵɵadvance(326);
    i0.ɵɵproperty("ngIf", ctx_r65.selectedMacroChildTab === "tab12");
} }
function AccountManagementComponent_ng_template_32_Template(rf, ctx) { if (rf & 1) {
    const _r72 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 33)(1, "h4", 34);
    i0.ɵɵtext(2, " Enterprise Macro Setup ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 36);
    i0.ɵɵlistener("click", function AccountManagementComponent_ng_template_32_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r72); const ctx_r71 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r71.modalRef.hide()); });
    i0.ɵɵelementStart(4, "span", 37);
    i0.ɵɵtext(5, "\u00D7");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(6, "tabset", 87, 88)(8, "tab", 89);
    i0.ɵɵlistener("selectTab", function AccountManagementComponent_ng_template_32_Template_tab_selectTab_8_listener($event) { i0.ɵɵrestoreView(_r72); const ctx_r73 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r73.onMacroParentTabSelected($event)); });
    i0.ɵɵelementStart(9, "div", 38)(10, "tabset", 90, 91)(12, "tab", 92);
    i0.ɵɵlistener("selectTab", function AccountManagementComponent_ng_template_32_Template_tab_selectTab_12_listener($event) { i0.ɵɵrestoreView(_r72); const ctx_r74 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r74.onMacroChildTabSelected($event)); });
    i0.ɵɵtemplate(13, AccountManagementComponent_ng_template_32_div_13_Template, 2, 0, "div", 93);
    i0.ɵɵtemplate(14, AccountManagementComponent_ng_template_32_div_14_Template, 4, 0, "div", 94);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "tab", 95);
    i0.ɵɵlistener("selectTab", function AccountManagementComponent_ng_template_32_Template_tab_selectTab_15_listener($event) { i0.ɵɵrestoreView(_r72); const ctx_r75 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r75.onMacroChildTabSelected($event)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(16, AccountManagementComponent_ng_template_32_form_16_Template, 327, 2, "form", 96);
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(17, "tab", 97);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext();
    i0.ɵɵadvance(13);
    i0.ɵɵproperty("ngIf", ctx_r9.isMacroDisplayLoading);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r9.isMacroDisplayLoading && !ctx_r9.hasMacroSetup);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r9.selectedMacroChildTab === "tab12" || ctx_r9.selectedMacroChildTab === "tab11" && ctx_r9.hasMacroSetup);
} }
export class AccountManagementComponent {
    constructor(apiService, modalService, formBuilder, router, toastr, spinner) {
        this.apiService = apiService;
        this.modalService = modalService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.toastr = toastr;
        this.spinner = spinner;
        this.imgURL = this.apiService.imgURL;
        this.showThirdNodeAcc = false;
        this.showNetworkList = false;
        this.showReport = false;
        this.showGenerate = false;
        this.editMode = false;
        this.submitted = false;
        this.submitted1 = false;
        this.ispassword = false;
        this.uploadLabel = "";
        this.uploadLabel1 = "";
        this.showuserStore = false;
        this.selectedMacroParentTab = 'tab1';
        this.selectedMacroChildTab = 'tab11';
        this.isMacroDisplayMode = false;
        this.isMacroDisplayLoading = false;
        this.hasMacroSetup = false;
        this.secondNodeAccArr = [];
        this.thirdNodeAccArr = [];
        this.accountid = this.apiService.requiredLoginData.accountid;
        this.subaccountid = this.apiService.requiredLoginData.subaccountid;
        this.storeid = this.apiService.requiredLoginData.storeid;
        this.storeName = this.apiService.requiredLoginData.storeName;
        this.domainid = this.apiService.requiredLoginData.domainid;
        this.getlogindata = localStorage.getItem('logindata');
        this.getlogindata = JSON.parse(this.getlogindata);
    }
    ngOnInit() {
        if (this.getlogindata.DOMAIN_ID == 10 && this.getlogindata.SECND_NODE_SUBACCT_FLG == true) {
            const payload = {
                "Domainid": this.getlogindata.DOMAIN_ID,
                "Secndry_Subacctid": this.subaccountid,
                "Secndry_Storeid": this.storeid
            };
            this.apiService.postCall(`${this.apiService.baseURL}/GetVendingPrimrySecndryB2BId`, payload)
                .subscribe(data => {
                console.log(data);
                this.B2BLinkIdForD10 = data.ACCT_PRIMRY_SECNDRY_B2B_LINK_SEQ_ID;
            }, (error) => {
                console.log(error);
                this.toastr.error(error.error, '', {
                    timeOut: 5000,
                });
            });
        }
        else {
            this.B2BLinkIdForD10 = 'jr0xpPU';
        }
        this.getCountry();
        this.addStoreUserForm = this.formBuilder.group({
            RETAIL_ACCOUNT_ID: [''],
            RETAIL_SUBACCOUNT_ID: [''],
            RETAIL_STORE_ID: this.storeid,
            RETAIL_USR_EMAIL_ID: ['', [Validators.required, Validators.email]],
            RETAIL_USR_FIRST_NAME: ['', Validators.required],
            RETAIL_USR_LAST_NAME: ['', Validators.required],
            RETAIL_USR_ROLE: ['', Validators.required],
            RETAIL_D2C_ACCT_INTRNL_CSTMR_ADDRESS: ['', Validators.required],
            RETAIL_D2C_ACCT_INTRNL_CUSTMR_PHOTO: ['', Validators.required],
            RETAIL_D2C_ACCT_INTRNL_CUSTMR_KYC_PHOTO_ID: ['', Validators.required],
            RETAIL_D2C_ACCT_INTRNL_TEAM_MOBL_NUMBR: ['', [Validators.required, Validators.minLength(10)]],
            RETAIL_D2C_ACCT_INTRNL_CSTMR_RCNT_PWD: ['']
        });
        this.macroSetupForm = this.formBuilder.group({
            associatedIndustry: [{ value: '0' }],
            duration: ['0'],
            validityStartDate: [
                { value: '' }
            ],
            personalWalletAvailability: [false],
            corporateWalletAvailability: [false],
            onNetworkCommerceFlag: [false],
            campusTerminalPOS: [false],
            fullTerminalNetwork: [false],
            internalEmployees: [false],
            channelNetwork: [false],
            securityStaff: [false],
            b2bCustomers: [false],
            productConsumers: [false],
            serviceProviders: [false],
            banksInsurance: [false],
            csrProviders: [false],
            eventsBasedUsers: [false],
            guestsVisitors: [false],
            assetOwners: [false],
            socialGroupUsers: [false],
            cashCharging: [false],
            brandCardMultipleWallet: [false]
        });
    }
    openModal(addStoreUserModal, selectedThirdNode) {
        this.addStoreUserForm.reset();
        this.selectedThirdNode = selectedThirdNode;
        this.submitted = true;
        this.editMode = false;
        // this.emptyInput = this.storeUserForm.value.SUBACCT_OFFICE_ID;
        //  if( this.emptyInput != ""){
        this.modalRef = this.modalService.show(addStoreUserModal, Object.assign({}, { class: 'width-720' }));
        // }
    }
    onRoleChange(e) {
        // this.roleID = this.addStoreUserForm.value.RETAIL_USR_ROLE;
        this.roleName = e.target.options[e.target.options.selectedIndex].text;
        console.log(this.roleName);
    }
    get f1() { return this.addStoreUserForm.controls; }
    generate() {
        this.showGenerate = true;
    }
    generateReport(type) {
        this.reportType = type;
        this.showReport = true;
    }
    onSecondNodeNetwork() {
        this.reportType = '';
        this.showReport = false;
        this.showGenerate = false;
        this.showThirdNodeAcc = false;
        const payload = {
            Cntryid: this.countryID,
            Stateid: this.stateID,
            Secnd_node_flg: true,
            Third_node_flg: false,
            Subacctid: this.subaccountid,
            Storeid: this.storeid,
            B2b_id: "RH1"
        };
        console.log("payload: ", payload);
        this.apiService.postCall(`${this.apiService.baseURL}/GetAcctNetwork`, payload)
            .subscribe(data => {
            console.log(data);
            this.thirdNodeAccArr = data;
        }, (error) => {
            console.log(error);
            this.toastr.error(error.error, '', {
                timeOut: 5000,
            });
        });
    }
    openSNThirdNode() {
        const payload = {
            Cntryid: this.countryID,
            Stateid: this.stateID,
            Secnd_node_flg: false,
            Third_node_flg: true,
            Subacctid: this.subaccountid,
            Storeid: this.storeid,
            // B2b_id: "jr0xpPU"
            B2b_id: this.B2BLinkIdForD10
        };
        console.log("payload: ", payload);
        this.apiService.postCall(`${this.apiService.baseURL}/GetAcctNetwork`, payload)
            .subscribe(data => {
            console.log(data);
            this.thirdNodeAccArr = Array.isArray(data) ? data : [];
            this.showThirdNodeAcc = true;
            console.log("Third Node Acc: ", this.thirdNodeAccArr);
        }, (error) => {
            console.log(error);
            this.toastr.error(error.error, '', {
                timeOut: 5000,
            });
        });
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
    openAcctCardHolders(acc) {
        console.log('Acct Card Holders:', acc);
    }
    displayUsers(acc) {
        console.log('Display Users:', acc);
    }
    acctUserMgmt(acc) {
        console.log('Acct User Mgmt:', acc);
    }
    editThirdNodeAcc(acc) {
        console.log('Edit:', acc);
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
    }
    onSelectedFile1(event1) {
        var files1 = event1.target.files;
        var file1 = files1[0];
        var filename = files1[0].name;
        this.uploadLabel1 = filename;
        if (files1 && file1) {
            var reader = new FileReader();
            reader.onload = this._handleReaderLoaded1.bind(this);
            reader.readAsBinaryString(file1);
        }
    }
    _handleReaderLoaded1(readerEvt1) {
        let binaryString1 = readerEvt1.target.result;
        this.base64textString1 = btoa(binaryString1);
        console.log(this.base64textString1);
        this.isImageSaved1 = true;
    }
    getUserStoreList(acc, template) {
        this.selectedThirdNode = acc;
        this.showMdrRegistedUserList = false;
        this.showuserStore = true;
        this.spinner.show();
        this.apiService.getCall(this.apiService.baseURL + '/GetRetailStoresByAccountSubAccount/' + 19 + "/" + acc.THIRD_NODE_ACCT_SUBACCT_ID + "/" + acc.THIRD_NODE_ACCT_STORE_ID)
            .subscribe(data => {
            this.userStoreList = data;
            console.log(data);
            this.spinner.hide();
            if (template) {
                this.modalRef = this.modalService.show(template, {
                    class: 'modal-xl'
                });
            }
        }, (error) => {
            console.log("Error: ", error);
            this.toastr.error(error.error.Message, '', {
                timeOut: 5000,
            });
            this.spinner.hide();
        });
        //}
    }
    EditStoreUsers() {
        console.log("Selected Third Node Acc: ", this.selectedThirdNode);
        let editStoreUserData = {
            RETAIL_ACCOUNT_ID: 19,
            RETAIL_SUBACCOUNT_ID: +this.selectedThirdNode.THIRD_NODE_ACCT_SUBACCT_ID,
            RETAIl_STORE_ID: +this.selectedThirdNode.THIRD_NODE_ACCT_STORE_ID,
            RETAIL_USR_ID: this.userID,
            RETAIL_USR_EMAIL_ID: this.addStoreUserForm.value.RETAIL_USR_EMAIL_ID,
            RETAIL_USR_FIRST_NAME: this.addStoreUserForm.value.RETAIL_USR_FIRST_NAME,
            RETAIL_USR_LAST_NAME: this.addStoreUserForm.value.RETAIL_USR_LAST_NAME,
            RETAIL_USR_ROLE: this.addStoreUserForm.value.RETAIL_USR_ROLE,
            RETAIL_D2C_ACCT_INTRNL_CSTMR_ADDRESS: this.addStoreUserForm.value.RETAIL_D2C_ACCT_INTRNL_CSTMR_ADDRESS,
            RETAIL_D2C_ACCT_INTRNL_CUSTMR_PHOTO: this.base64textString,
            RETAIL_D2C_ACCT_INTRNL_CUSTMR_KYC_PHOTO_ID: this.base64textString1,
            RETAIL_D2C_ACCT_INTRNL_TEAM_MOBL_NUMBR: this.addStoreUserForm.value.RETAIL_D2C_ACCT_INTRNL_TEAM_MOBL_NUMBR,
            RETAIL_D2C_ACCT_INTRNL_CSTMR_ISACTIV_FLG: this.cstmrActiveFlag,
            RETAIL_D2C_ACCT_INTRNL_CSTMR_RCNT_PWD: this.addStoreUserForm.value.RETAIL_D2C_ACCT_INTRNL_CSTMR_RCNT_PWD,
        };
        console.log("payload: ", editStoreUserData);
        this.apiService.postCall(this.apiService.baseURL + '/EditStoreUsers', editStoreUserData)
            .subscribe(data => {
            this.toastr.success('Update Successfully', '', { timeOut: 5000, });
            this.getUserStoreList(this.selectedThirdNode);
        }, (error) => {
            this.toastr.error(error.error.Message, '', {
                timeOut: 5000,
            });
        });
        this.modalRef.hide();
    }
    getRetailStoresById(addStoreUserModal, acc) {
        this.userID = acc.RETAIL_USR_ID;
        this.modalRef.hide();
        this.selectedAccId = '';
        if (!acc)
            return;
        this.ispassword = true;
        this.editMode = true;
        console.log("selected acc:", acc);
        this.apiService
            .getCall(`${this.apiService.baseURL}/GetRetailStoresById/${acc.RETAIL_USR_ID}/${acc.RETAIL_SUBACCOUNT_ID}/${acc.RETAIL_STORE_ID}`)
            .subscribe((data) => {
            if (!data)
                return;
            this.retiailStoreData = data;
            this.cstmrActiveFlag = data.RETAIL_D2C_ACCT_INTRNL_CSTMR_ISACTIV_FLG;
            this.selectedAccId = data.RETAIL_STORE_ID;
            this.modalRef = this.modalService.show(addStoreUserModal, {
                class: 'width-720'
            });
            this.imagePreview = null;
            this.imagePreview2 = null;
            this.isImageSaved = false;
            this.isImageSaved1 = false;
            this.addStoreUserForm.patchValue({
                RETAIL_USR_FIRST_NAME: data.RETAIL_USR_FIRST_NAME,
                RETAIL_USR_LAST_NAME: data.RETAIL_USR_LAST_NAME,
                RETAIL_USR_ROLE: data.RETAIL_USR_ROLE,
                RETAIL_USR_EMAIL_ID: data.RETAIL_USR_EMAIL_ID,
                RETAIL_D2C_ACCT_INTRNL_CSTMR_ADDRESS: data.RETAIL_D2C_ACCT_INTRNL_CSTMR_ADDRESS,
                RETAIL_D2C_ACCT_INTRNL_TEAM_MOBL_NUMBR: data.RETAIL_D2C_ACCT_INTRNL_TEAM_MOBL_NUMBR,
                RETAIL_D2C_ACCT_INTRNL_CSTMR_RCNT_PWD: data.RETAIL_D2C_ACCT_INTRNL_CSTMR_RCNT_PWD,
            });
        }, (error) => {
            var _a;
            this.toastr.error(((_a = error === null || error === void 0 ? void 0 : error.error) === null || _a === void 0 ? void 0 : _a.Message) || 'Something went wrong', '', {
                timeOut: 5000
            });
        });
    }
    addStoreUser() {
        console.log("Selected Third Node Acc: ", this.selectedThirdNode);
        let addStoreUserData = {
            RETAIL_ACCOUNT_ID: 19,
            RETAIL_SUBACCOUNT_ID: +this.selectedThirdNode.THIRD_NODE_ACCT_SUBACCT_ID,
            RETAIl_STORE_ID: +this.selectedThirdNode.THIRD_NODE_ACCT_STORE_ID,
            RETAIL_USR_EMAIL_ID: this.addStoreUserForm.value.RETAIL_USR_EMAIL_ID,
            RETAIL_USR_FIRST_NAME: this.addStoreUserForm.value.RETAIL_USR_FIRST_NAME,
            RETAIL_USR_LAST_NAME: this.addStoreUserForm.value.RETAIL_USR_LAST_NAME,
            RETAIL_USR_ROLE: this.addStoreUserForm.value.RETAIL_USR_ROLE,
            RETAIL_D2C_ACCT_INTRNL_CSTMR_ADDRESS: this.addStoreUserForm.value.RETAIL_D2C_ACCT_INTRNL_CSTMR_ADDRESS,
            RETAIL_D2C_ACCT_INTRNL_CUSTMR_PHOTO: this.base64textString,
            RETAIL_D2C_ACCT_INTRNL_CUSTMR_KYC_PHOTO_ID: this.base64textString1,
            RETAIL_D2C_ACCT_INTRNL_TEAM_MOBL_NUMBR: +this.addStoreUserForm.value.RETAIL_D2C_ACCT_INTRNL_TEAM_MOBL_NUMBR,
            RETAIL_D2C_ACCT_INTRNL_CSTMR_RCNT_PWD: null,
        };
        this.submitted1 = true;
        if (this.addStoreUserForm.invalid) {
            return;
        }
        console.log(addStoreUserData);
        this.apiService.postCall(this.apiService.baseURL + '/AddStoreUsers', addStoreUserData)
            .subscribe(data => {
            this.addedStoreUserList = data;
            console.log(data);
            this.toastr.success('Added Successfully', '', { timeOut: 5000, });
            this.modalRef.hide();
            this.getUserStoreList(this.selectedThirdNode);
        }, (error) => {
            console.log(error);
            this.toastr.error(error.error.Message, '', {
                timeOut: 5000,
            });
        });
    }
    deleteAcc(store) {
        const payload = {
            User_Mobileno: store.RETAIL_D2C_ACCT_INTRNL_TEAM_MOBL_NUMBR,
            Login_SubAcctid: store.RETAIL_SUBACCOUNT_ID,
            Login_Storeid: store.RETAIL_STORE_ID
        };
        this.apiService.postCall(this.apiService.baseURL + '/Delete-User-MDR-MyloginAccount', payload)
            .subscribe(data => {
            console.log(data);
            this.toastr.success(data.Message);
        }, (error) => {
            this.toastr.error(error, '', {
                timeOut: 5000,
            });
        });
        this.getUserStoreList(this.selectedThirdNode);
    }
    contractMgmt(acc, template) {
        this.resetMacroSetupForm();
        this.selectedThirdNode = acc;
        this.selectedMacroParentTab = 'tab1';
        this.selectedMacroChildTab = 'tab11';
        if (template) {
            this.modalRef = this.modalService.show(template, {
                class: 'modal-xl'
            });
        }
        this.displayMacros();
    }
    onMacroParentTabSelected(tab) {
        this.selectedMacroParentTab = tab.id || '';
        if (tab.id === 'tab1') {
            this.selectedMacroChildTab = 'tab11';
            const childTabset = this.macroChildTabset;
            const displayTab = childTabset && childTabset.tabs
                .find(childTab => childTab.id === 'tab11');
            if (displayTab) {
                displayTab.active = true;
            }
        }
    }
    onMacroChildTabSelected(tab) {
        this.selectedMacroChildTab = tab.id || '';
        console.log("Selected TAB: ", tab.id);
        if (this.selectedMacroChildTab === 'tab11') {
            this.displayMacros();
        }
        else if (this.selectedMacroChildTab === 'tab12') {
            this.prepareMacroSetupForAdd();
        }
    }
    switchToAddMacroSetup() {
        var _a;
        this.selectedMacroChildTab = 'tab12';
        this.prepareMacroSetupForAdd();
        const addTab = (_a = this.macroChildTabset) === null || _a === void 0 ? void 0 : _a.tabs.find(tab => tab.id === 'tab12');
        if (addTab) {
            addTab.active = true;
        }
    }
    activateWallet(type) {
        console.log('Activate wallet:', type);
    }
    activateCommercialAccess(type) {
        console.log('Activate commercial access:', type);
    }
    activateUserCategory(type) {
        console.log('Activate user category:', type);
    }
    activateGeneralSetting(type) {
        console.log('Activate general setting:', type);
    }
    displayMacros() {
        this.isMacroDisplayMode = true;
        this.isMacroDisplayLoading = true;
        this.hasMacroSetup = false;
        this.macroSetupForm.disable({ emitEvent: false });
        const payload = {
            "Subacctid": this.subaccountid,
            "Storeid": this.storeid
        };
        this.apiService
            .postCall(this.apiService.baseURL + '/GetAdVendAcctMacroSetup', payload)
            .subscribe(data => {
            console.log('Res:', data);
            const macroSetup = this.getMacroSetupFromResponse(data);
            this.hasMacroSetup = !!macroSetup;
            if (macroSetup) {
                this.patchMacroSetupForm(macroSetup);
            }
            this.isMacroDisplayLoading = false;
        }, error => {
            console.error('Unable to load macro setup:', error);
            this.hasMacroSetup = false;
            this.isMacroDisplayLoading = false;
        });
    }
    prepareMacroSetupForAdd() {
        this.isMacroDisplayMode = false;
        this.hasMacroSetup = false;
        this.resetMacroSetupForm();
        this.macroSetupForm.enable({ emitEvent: false });
    }
    resetMacroSetupForm() {
        this.macroSetupForm.reset({
            associatedIndustry: '0',
            duration: '0',
            validityStartDate: '',
            personalWalletAvailability: false,
            corporateWalletAvailability: false,
            onNetworkCommerceFlag: false,
            campusTerminalPOS: false,
            fullTerminalNetwork: false,
            internalEmployees: false,
            channelNetwork: false,
            securityStaff: false,
            b2bCustomers: false,
            productConsumers: false,
            serviceProviders: false,
            banksInsurance: false,
            csrProviders: false,
            eventsBasedUsers: false,
            guestsVisitors: false,
            assetOwners: false,
            socialGroupUsers: false,
            cashCharging: false,
            brandCardMultipleWallet: false
        }, { emitEvent: false });
    }
    getMacroSetupFromResponse(response) {
        const candidates = [response, response === null || response === void 0 ? void 0 : response.Data, response === null || response === void 0 ? void 0 : response.data, response === null || response === void 0 ? void 0 : response.Result, response === null || response === void 0 ? void 0 : response.result];
        for (const candidate of candidates) {
            const setup = Array.isArray(candidate) ? candidate[0] : candidate;
            if (setup && typeof setup === 'object' && !Array.isArray(setup) &&
                Object.keys(setup).some(key => /industry|year[135]|start.?date|corp|netwrk/i.test(key))) {
                return setup;
            }
        }
        return null;
    }
    patchMacroSetupForm(setup) {
        const value = (keys, fallback = false) => {
            const key = Object.keys(setup).find(item => keys.includes(item.toLowerCase()));
            return key === undefined ? fallback : setup[key];
        };
        const flag = (keys) => this.toBoolean(value(keys));
        const duration = this.toBoolean(value(['year1_flg', 'year1flg'])) ? '1'
            : this.toBoolean(value(['year3_flg', 'year3flg'])) ? '3'
                : this.toBoolean(value(['year5_flg', 'year5flg'])) ? '5' : '0';
        this.macroSetupForm.patchValue({
            associatedIndustry: String(value(['industryid', 'industry_id', 'industry_id_fk'], '0')),
            duration,
            validityStartDate: this.toDateInputValue(value(['start_date', 'startdate', 'validitystartdate'], '')),
            personalWalletAvailability: flag(['personal_flg', 'personalflg']),
            corporateWalletAvailability: flag(['corp_flg', 'corpflg']),
            onNetworkCommerceFlag: flag(['onnetwork_flg', 'onnetwrk_flg', 'onnetworkcommerceflag']),
            campusTerminalPOS: flag(['campus_flg', 'campusflg']),
            fullTerminalNetwork: flag(['netwrk_flg', 'netwrkflg', 'network_flg']),
            internalEmployees: flag(['internal_flg', 'internalflg']),
            channelNetwork: flag(['chnl_flg', 'chnlflg']),
            securityStaff: flag(['contractr_flg', 'contractrflg']),
            b2bCustomers: flag(['b2b_cust_flg', 'b2bcustflg']),
            productConsumers: flag(['consumer_flg', 'consumerflg']),
            serviceProviders: flag(['srvc_prvdr_flg', 'srvcprvdrflg']),
            banksInsurance: flag(['bnkr_flg', 'bnkrflg']),
            csrProviders: flag(['csr_flg', 'csrflg']),
            eventsBasedUsers: flag(['event_flg', 'eventflg']),
            guestsVisitors: flag(['guest_flg', 'guestflg']),
            assetOwners: flag(['asset_owner_flg', 'assetownerflg']),
            socialGroupUsers: flag(['social_flg', 'socialflg']),
            cashCharging: flag(['bo_cash_flg', 'bocashflg']),
            brandCardMultipleWallet: flag(['mult_acct_flg', 'multacctflg'])
        }, { emitEvent: false });
    }
    toBoolean(value) {
        return value === true || value === 1 || value === '1' ||
            (typeof value === 'string' && ['true', 'y', 'yes'].includes(value.toLowerCase()));
    }
    toDateInputValue(value) {
        if (!value) {
            return '';
        }
        const datePart = String(value).match(/^\d{4}-\d{2}-\d{2}/);
        if (datePart) {
            return datePart[0];
        }
        const parsedDate = new Date(value);
        return isNaN(parsedDate.getTime()) ? '' : parsedDate.toISOString().slice(0, 10);
    }
    addMacroSetup() {
        const formValue = this.macroSetupForm.getRawValue();
        const payload = {
            "Subacctid": this.subaccountid,
            "Storeid": this.storeid,
            "Industryid": formValue.associatedIndustry,
            "Year1_Flg": formValue.duration === '1',
            "Year3_Flg": formValue.duration === '3',
            "Year5_Flg": formValue.duration === '5',
            "Start_Date": formValue.validityStartDate,
            "Corp_Flg": formValue.corporateWalletAvailability,
            "Campus_Flg": formValue.campusTerminalPOS,
            "Netwrk_Flg": formValue.fullTerminalNetwork,
            "Internal_Flg": formValue.internalEmployees,
            "Chnl_Flg": formValue.channelNetwork,
            "Contractr_Flg": formValue.securityStaff,
            "B2B_Cust_Flg": formValue.b2bCustomers,
            "Consumer_Flg": formValue.productConsumers,
            "Srvc_Prvdr_Flg": formValue.serviceProviders,
            "Bnkr_Flg": formValue.banksInsurance,
            "CSR_Flg": formValue.csrProviders,
            "Event_Flg": formValue.eventsBasedUsers,
            "Guest_Flg": formValue.guestsVisitors,
            "Social_Flg": formValue.socialGroupUsers,
            "BO_Cash_Flg": formValue.cashCharging,
            "Mult_Acct_Flg": formValue.brandCardMultipleWallet
        };
        console.log('Macro Setup Payload:', payload);
        this.apiService
            .postCall(this.apiService.baseURL + '/AddAdVendAccountMacroSetup', payload)
            .subscribe(data => {
            console.log('Macro setup added successfully:', data);
            this.toastr.success(data.Message);
        }, error => {
            var _a;
            this.toastr.error(((_a = error.error) === null || _a === void 0 ? void 0 : _a.Message) || error, '', {
                timeOut: 5000
            });
        });
    }
}
AccountManagementComponent.ɵfac = function AccountManagementComponent_Factory(t) { return new (t || AccountManagementComponent)(i0.ɵɵdirectiveInject(i1.ApiService), i0.ɵɵdirectiveInject(i2.BsModalService), i0.ɵɵdirectiveInject(i3.FormBuilder), i0.ɵɵdirectiveInject(i4.Router), i0.ɵɵdirectiveInject(i5.ToastrService), i0.ɵɵdirectiveInject(i6.NgxSpinnerService)); };
AccountManagementComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AccountManagementComponent, selectors: [["app-account-management"]], viewQuery: function AccountManagementComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.macroChildTabset = _t.first);
    } }, decls: 34, vars: 4, consts: [[1, "content"], [1, "heading-title"], [1, "toplevel"], [1, "row"], [1, "col-md-4"], [1, "form-group"], [1, "form-control", 3, "change"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-md-12", "text-right", "mb-3"], ["type", "submit", "class", "btn mr-2 custom-btn", 3, "click", 4, "ngIf"], ["type", "submit", 1, "btn", "custom-btn", 3, "click"], ["class", "card exiting-office-table orderStatus p-0", 4, "ngIf"], ["addStoreUserModal", ""], ["storeUserTable", ""], ["addMacroSetupModal", ""], [3, "value"], ["type", "submit", 1, "btn", "mr-2", "custom-btn", 3, "click"], [1, "card", "exiting-office-table", "orderStatus", "p-0"], [1, "card-header"], [1, "card-body", "pa-0"], [1, "row", "m-0"], [1, "col-md-12", "py-2"], [1, "table"], [1, "font"], [1, "font", "text-center"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [2, "display", "flex", "align-items", "center", "justify-content", "center", "gap", "6px"], [1, "badge", "bg-primary", "text-white", 2, "cursor", "pointer", "font-size", "0.7rem", "padding", "8px", 3, "click"], [2, "cursor", "pointer", 3, "click"], [1, "fa", "fa-edit", 2, "font-size", "large"], ["colspan", "6", 1, "text-center", "font"], [1, "modal-header"], [1, "modal-title", "pull-left"], ["class", "small", 4, "ngIf"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [3, "formGroup"], ["type", "text", "formControlName", "RETAIL_USR_FIRST_NAME", 1, "form-control"], ["type", "text", "formControlName", "RETAIL_USR_LAST_NAME", 1, "form-control"], ["type", "text", "maxlength", "10", "formControlName", "RETAIL_D2C_ACCT_INTRNL_TEAM_MOBL_NUMBR", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "text", "formControlName", "RETAIL_USR_EMAIL_ID", 1, "form-control", 3, "ngClass"], ["class", "col-md-4", 4, "ngIf"], ["formControlName", "RETAIL_USR_ROLE", 1, "form-control", 3, "change"], ["value", "Select"], ["value", "31"], ["value", "32"], ["value", "33"], ["value", "36"], ["value", "34"], ["value", "35"], ["value", "37"], [1, "mb-2", "pl-3"], [1, "col-md-12"], ["type", "text", "formControlName", "RETAIL_D2C_ACCT_INTRNL_CSTMR_ADDRESS", 1, "form-control"], [1, "col-md-6"], [1, "custom-file", "fileInputProfileWrap"], ["formControlName", "RETAIL_D2C_ACCT_INTRNL_CUSTMR_PHOTO", "name", "file", "id", "DomainImage", "type", "file", 1, "custom-file-input", 3, "change"], [1, "custom-file-label"], ["class", "img-space", 4, "ngIf"], ["formControlName", "RETAIL_D2C_ACCT_INTRNL_CUSTMR_KYC_PHOTO_ID", "name", "file", "type", "file", 1, "custom-file-input", 3, "change"], [1, "col-md-12", "mt-2"], ["type", "button", "class", "btn custom-btn float-right", 3, "disabled", "click", 4, "ngIf"], [1, "small"], [1, "invalid-feedback"], ["type", "text", "formControlName", "RETAIL_D2C_ACCT_INTRNL_CSTMR_RCNT_PWD", 1, "form-control"], [1, "img-space"], [3, "src"], ["type", "button", 1, "btn", "custom-btn", "float-right", 3, "disabled", "click"], [1, "table", "exiting-office-table"], ["colspan", "2"], [1, "actdct_icon"], [4, "ngIf", "ngIfElse"], ["inactiveBlock", ""], ["alt", "Profile Photo", 1, "details-photo", 3, "src"], [1, "delete-icon", 3, "click"], [1, "icon"], [1, "fa", "fa-edit"], [1, "delete-icon"], [1, "icon", 3, "click"], [1, "fa", "fa-trash"], ["src", "assets/images/active_icon1.png"], ["src", "assets/images/deactive_icon.png"], ["colspan", "10", 1, "text-center"], [1, "p-3"], ["macroParentTabset", ""], ["heading", "Enterprise Macro Setup", "id", "tab1", 3, "selectTab"], [1, ""], ["macroChildTabset", ""], ["heading", "Display Mac. Setup", "id", "tab11", 3, "selectTab"], ["class", "text-center mt-3", 4, "ngIf"], ["class", "alert alert-info mt-3 mb-0", "role", "alert", 4, "ngIf"], ["heading", "Add Mac. setup", "id", "tab12", 3, "selectTab"], [3, "formGroup", 4, "ngIf"], ["heading", " Net. Comm. Partner Setup", "id", "tab2"], [1, "text-center", "mt-3"], ["role", "alert", 1, "alert", "alert-info", "mt-3", "mb-0"], ["type", "button", 1, "btn", "btn-link", "p-0", "ml-1", "align-baseline", 3, "click"], [1, "row", "mt-3"], ["formControlName", "associatedIndustry", 1, "form-control"], ["value", "0"], ["value", "1"], ["value", "2"], ["value", "3"], ["value", "4"], ["value", "5"], ["value", "6"], ["value", "7"], ["value", "8"], ["value", "9"], ["value", "10"], ["value", "11"], ["value", "12"], ["value", "13"], ["value", "14"], ["value", "15"], ["value", "16"], ["value", "17"], ["value", "18"], ["value", "19"], ["value", "20"], ["value", "21"], ["value", "22"], ["value", "23"], ["value", "24"], ["value", "25"], ["value", "26"], ["value", "27"], ["value", "28"], ["value", "29"], ["value", "30"], ["value", "38"], ["value", "39"], ["value", "40"], ["value", "41"], ["value", "42"], ["value", "43"], ["value", "44"], ["value", "45"], ["value", "46"], ["value", "47"], ["value", "48"], ["value", "49"], ["value", "50"], ["value", "51"], ["value", "52"], ["value", "53"], ["value", "54"], ["value", "55"], ["value", "56"], ["value", "57"], ["value", "58"], ["value", "59"], ["value", "60"], ["value", "61"], ["value", "62"], ["value", "63"], ["formControlName", "duration", 1, "form-control"], ["type", "date", "formControlName", "validityStartDate", 1, "form-control"], [1, "row", "mt-2"], [1, "form-check"], ["type", "checkbox", "formControlName", "personalWalletAvailability", 1, "form-check-input"], [1, "form-check-label"], ["type", "checkbox", "formControlName", "corporateWalletAvailability", 1, "form-check-input"], ["type", "checkbox", "formControlName", "onNetworkCommerceFlag", 1, "form-check-input"], ["type", "checkbox", "formControlName", "campusTerminalPOS", 1, "form-check-input"], ["type", "checkbox", "formControlName", "fullTerminalNetwork", 1, "form-check-input"], ["type", "checkbox", "formControlName", "internalEmployees", 1, "form-check-input"], ["type", "checkbox", "formControlName", "banksInsurance", 1, "form-check-input"], ["type", "checkbox", "formControlName", "channelNetwork", 1, "form-check-input"], ["type", "checkbox", "formControlName", "csrProviders", 1, "form-check-input"], ["type", "checkbox", "formControlName", "securityStaff", 1, "form-check-input"], ["type", "checkbox", "formControlName", "eventsBasedUsers", 1, "form-check-input"], ["type", "checkbox", "formControlName", "b2bCustomers", 1, "form-check-input"], ["type", "checkbox", "formControlName", "guestsVisitors", 1, "form-check-input"], ["type", "checkbox", "formControlName", "productConsumers", 1, "form-check-input"], ["type", "checkbox", "formControlName", "assetOwners", 1, "form-check-input"], ["type", "checkbox", "formControlName", "serviceProviders", 1, "form-check-input"], ["type", "checkbox", "formControlName", "socialGroupUsers", 1, "form-check-input"], ["type", "checkbox", "formControlName", "cashCharging", 1, "form-check-input"], ["type", "checkbox", "formControlName", "brandCardMultipleWallet", 1, "form-check-input"], ["class", "row", 4, "ngIf"], ["type", "button", 1, "btn", "custom-btn", "float-right", 3, "click"]], template: function AccountManagementComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "h1", 1);
        i0.ɵɵtext(2, "Account Management (Under Us)");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "div", 2)(4, "form")(5, "div", 3)(6, "div", 4)(7, "div", 5)(8, "label");
        i0.ɵɵtext(9, "Country");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "select", 6);
        i0.ɵɵlistener("change", function AccountManagementComponent_Template_select_change_10_listener($event) { return ctx.changeCountry($event); });
        i0.ɵɵelementStart(11, "option", 7);
        i0.ɵɵtext(12, "Select");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(13, AccountManagementComponent_option_13_Template, 2, 2, "option", 8);
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(14, "div", 4)(15, "div", 5)(16, "label");
        i0.ɵɵtext(17, "State");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(18, "select", 6);
        i0.ɵɵlistener("change", function AccountManagementComponent_Template_select_change_18_listener($event) { return ctx.changeState($event); });
        i0.ɵɵelementStart(19, "option", 7);
        i0.ɵɵtext(20, "Select");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(21, AccountManagementComponent_option_21_Template, 2, 2, "option", 8);
        i0.ɵɵelementEnd()()()();
        i0.ɵɵelementStart(22, "div", 3)(23, "div", 9);
        i0.ɵɵtemplate(24, AccountManagementComponent_button_24_Template, 2, 0, "button", 10);
        i0.ɵɵelementStart(25, "button", 11);
        i0.ɵɵlistener("click", function AccountManagementComponent_Template_button_click_25_listener() { return ctx.openSNThirdNode(); });
        i0.ɵɵtext(26, "Display My Third Node Acc");
        i0.ɵɵelementEnd()()()();
        i0.ɵɵtemplate(27, AccountManagementComponent_div_27_Template, 27, 2, "div", 12);
        i0.ɵɵelementEnd()();
        i0.ɵɵtemplate(28, AccountManagementComponent_ng_template_28_Template, 87, 19, "ng-template", null, 13, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(30, AccountManagementComponent_ng_template_30_Template, 31, 2, "ng-template", null, 14, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(32, AccountManagementComponent_ng_template_32_Template, 18, 3, "ng-template", null, 15, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        i0.ɵɵadvance(13);
        i0.ɵɵproperty("ngForOf", ctx.countryList);
        i0.ɵɵadvance(8);
        i0.ɵɵproperty("ngForOf", ctx.stateList);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", ctx.getlogindata.FIRST_NODE_SUBACCT_FLG);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", ctx.showThirdNodeAcc);
    } }, dependencies: [i7.NgClass, i7.NgForOf, i7.NgIf, i3.ɵNgNoValidate, i3.NgSelectOption, i3.ɵNgSelectMultipleOption, i3.DefaultValueAccessor, i3.CheckboxControlValueAccessor, i3.SelectControlValueAccessor, i3.NgControlStatus, i3.NgControlStatusGroup, i3.MaxLengthValidator, i3.FormGroupDirective, i3.FormControlName, i3.NgForm, i8.TabDirective, i8.TabsetComponent, i7.SlicePipe, i7.DecimalPipe], styles: [".toplevel[_ngcontent-%COMP%] {\r\n    background: #fff;\r\n    padding: 20px;\r\n    margin-bottom: 15px;\r\n    margin-top: 10px;\r\n    border: 1px solid #ddd;\r\n    border-radius: 5px;\r\n}\r\n\r\n.table-font-size[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table-font-size[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n  font-size: 13px; \r\n}\r\n\r\n.vipDiv[_ngcontent-%COMP%] {\r\n    background: #f8f9fa;\r\n    padding: 15px;\r\n    border-radius: 3px;\r\n    min-height: 210px;\r\n}\r\n\r\n.orderStatus[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    vertical-align: middle;\r\n}\r\n\r\n.orderStatus[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n    font-size: 13px;\r\n    padding: 4px 10px;\r\n}\r\n\r\n.orderStatus[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\r\n    color: #c50f20;\r\n    font-size: 90%;\r\n    font-weight: 600;\r\n}\r\n\r\n.bottom-btn[_ngcontent-%COMP%] {\r\n    float: right;\r\n}\r\n\r\n.alert.alert-success[_ngcontent-%COMP%] {\r\n    padding: 5px 10px;\r\n}\r\n\r\n.alert[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\r\n    font-size: 25px;\r\n    vertical-align: middle;\r\n    margin-left: 5px;\r\n}\r\n\r\n.orderStatus[_ngcontent-%COMP%] {\r\n    .card-header {\r\n        border: 0;\r\n    }\r\n    .card-body {\r\n        padding: 0;\r\n        overflow: auto;\r\n    }\r\n}\r\n\r\nh3.head-title[_ngcontent-%COMP%] {\r\n    font-size: 22px;\r\n    margin: 20px 0;\r\n    font-weight: bold;\r\n}\r\n\r\n.icon[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    vertical-align: top;\r\n    color: #17a2b8;\r\n}\r\n\r\n.orderStatus[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    max-width: 25px;\r\n}\r\n\r\n.orderStatus[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n    background: #021422;\r\n    border-radius: 25px;\r\n    color: #fff;\r\n    font-size: 11px !important;\r\n    border: 1px solid #21333c;\r\n    i {\r\n        font-size: 18px;\r\n        vertical-align: middle;\r\n        padding-right: 5px;\r\n    }\r\n}\r\n\r\nbutton.btn.view-del-btn[_ngcontent-%COMP%] {\r\n    background: #63030c !important;\r\n}\r\n\r\n.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n    border: 0;\r\n}\r\n\r\n.toplevel[_ngcontent-%COMP%], .card[_ngcontent-%COMP%] {\r\n    padding: 0 20px 0;\r\n}\r\n\r\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n    padding: 8px 5px;\r\n    text-align: center;\r\n    line-height: 13px;\r\n    font-weight: 600;\r\n    font-size: 13px;\r\n    border-top: 0;\r\n}\r\n\r\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    font-size: 12px;\r\n    line-height: 15px;\r\n    padding: 10px 5px;\r\n}\r\n\r\ntd.icon[_ngcontent-%COMP%] {\r\n    padding: 0 !important;\r\n}\r\n\r\nbutton.btn.custom-btn[_ngcontent-%COMP%] {\r\n    min-width: 100px;\r\n}\r\n\r\n  .nav-tabs .nav-link {\r\n  font-size: 11px; \r\n}\r\n\r\nbutton.btn.custom-btn-white[_ngcontent-%COMP%] {\r\n    min-width: 100px;\r\n    background: #ffffff;\r\n    border: 1px solid #c50f20;\r\n    color: #c50f20;\r\n    font-weight: 600;\r\n\r\n    &:hover {\r\n        background: #c50f20;\r\n        color: #ffffff;\r\n    }\r\n}\r\n\r\n.input-group-prepend[_ngcontent-%COMP%] + .invalid-feedback[_ngcontent-%COMP%] {\r\n    top: 35px;\r\n}\r\n\r\n.card-header[_ngcontent-%COMP%] {\r\n    padding: 10px 15px;\r\n    background: #63030c;\r\n    font-size: 12px;\r\n    color: #fff;\r\n    font-weight: 500;\r\n    span {\r\n        float: left;\r\n    }\r\n    span+span {\r\n        float: right;\r\n    }\r\n}\r\n\r\n.card-header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 16px;\r\n    margin-left: 3px;\r\n}\r\n\r\n.subcard-header[_ngcontent-%COMP%] {\r\n    padding: 8px 12px;\r\n    background: #63030c;\r\n    font-size: 10px;\r\n    color: #fff;\r\n    font-weight: 500;\r\n    span {\r\n        float: left;\r\n    }\r\n    span+span {\r\n        float: right;\r\n    }\r\n}\r\n\r\n.subcard-header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 16px;\r\n    margin-left: 3px;\r\n}\r\n\r\n.icofont-info-circle[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    vertical-align: middle;\r\n    margin-left: 3px;\r\n}\r\n\r\n.orderList[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\r\n    background: #ff000029;\r\n}\r\n\r\n.orderList[_ngcontent-%COMP%] {\r\n    border-collapse: collapse;\r\n    border: 1px solid #ddd;\r\n    margin: 5px 0;\r\n}\r\n\r\n.orderList[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    border: 1px solid #ddd;\r\n}\r\n\r\n.orderList[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n    background: #212529;\r\n    color: #fff;\r\n    vertical-align: middle;\r\n}\r\n\r\n.no-border[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    border: 0 !important;\r\n    text-align: right !important;\r\n    font-weight: 600;\r\n    font-size: 12px !important;\r\n}\r\n\r\nsmall.view-customer[_ngcontent-%COMP%] {\r\n    display: block;\r\n    text-decoration: underline;\r\n    cursor: pointer;\r\n}\r\n\r\nbutton.btn.view-ord-btn[_ngcontent-%COMP%] {\r\n    min-width: 112px;\r\n}\r\n\r\nbutton.btn.view-del-btn[_ngcontent-%COMP%] {\r\n    min-width: 125px;\r\n}\r\n\r\n.card-body.no_data_available[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    color: #bd2130;\r\n    img {\r\n        display: block;\r\n        text-align: center;\r\n        margin: 0 auto 5px;\r\n        max-width: 30px;\r\n    }\r\n}\r\n\r\n\r\nsmall.viewCart[_ngcontent-%COMP%] {\r\n    text-decoration: underline;\r\n    cursor: pointer;\r\n}\r\n\r\n.hr[_ngcontent-%COMP%] {\r\n    border: none;\r\n    border-top: 1.5px solid #d1d1d1;\r\n    margin: 16px 0;\r\n    height: 0;\r\n    width: 100%;\r\n}\r\n\r\nh1.heading-title[_ngcontent-%COMP%] {\r\n    margin: 20px 0 0;\r\n}\r\n\r\n.heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    padding: 10px 5px 10px;\r\n    font-size: 20px;\r\n}\r\n\r\n.row.topLevel[_ngcontent-%COMP%] {\r\n    background: #fff;\r\n    padding: 20px 0;\r\n    margin: 0;\r\n    border-radius: 5px;\r\n}\r\n\r\n.heading.store-domain[_ngcontent-%COMP%] {\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.store-domain[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    margin-right: 20px;\r\n}\r\n\r\n.store-domain[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    background: #ddd;\r\n    padding: 5px 20px;\r\n    font-size: 13px;\r\n    border-radius: 20px;\r\n    display: inline-block;\r\n    font-weight: bold;\r\n    margin-left: 5px;\r\n}\r\n\r\n.store_id[_ngcontent-%COMP%] {\r\n    background: #ddd;\r\n    padding: 5px 20px;\r\n    border-radius: 20px;\r\n    font-size: 13px;\r\n    font-weight: 700;\r\n    float: right;\r\n    margin-top: -40px;\r\n}\r\n\r\n.box[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    overflow: hidden;\r\n    box-shadow: 0 0 4px 0px #eee;\r\n    margin: 20px 0 5px;\r\n    border-radius: 4px;\r\n    padding: 10px;\r\n    background: #fff;\r\n}\r\n\r\n.main-content-area[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\r\n    width: 20%;\r\n    float: left;\r\n    padding: 0;\r\n}\r\n\r\n.fa-star[_ngcontent-%COMP%]:before {\r\n    content: \"\\f005\";\r\n    color: #ff9600;\r\n    margin-right: 5px;\r\n}\r\n\r\n.pro-box[_ngcontent-%COMP%] {\r\n    box-shadow: 0 0 4px 0 #e9ecef;\r\n    margin: 0 5px 10px;\r\n    overflow: hidden;\r\n    padding: 15px;\r\n    border-radius: 3px;\r\n    position: relative;\r\n    border: 1px solid #dee2e6;\r\n}\r\n\r\n.pro-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    height: 100px;\r\n    width: 100px;\r\n    margin: 30px auto 15px;\r\n    display: block;\r\n}\r\n\r\n.storeitem[_ngcontent-%COMP%]   .p-details[_ngcontent-%COMP%] {\r\n    margin-bottom: 42px;\r\n}\r\n\r\np.label-txt[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    padding: 10px;\r\n    font-size: 14px;\r\n    margin: 0;\r\n}\r\n\r\n.store-available-product[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\r\n    width: 25% !important;\r\n}\r\n\r\n.selected-productLine[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .store-available-product[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\r\n    font-size: 16px;\r\n    padding: 0 10px 5px;\r\n}\r\n\r\n.right-field-head[_ngcontent-%COMP%] {\r\n    float: right;\r\n    margin-top: 10px;\r\n}\r\n\r\n.right-field-head[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    padding: 0 10px;\r\n}\r\n\r\nspan.video[_ngcontent-%COMP%], span.doc[_ngcontent-%COMP%] {\r\n    padding: 8px 15px;\r\n    background: #dee2e6;\r\n    font-size: 12px;\r\n    border-radius: 20px;\r\n}\r\n\r\n.right-field-head[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n    font-size: 11px;\r\n    border-radius: 20px;\r\n}\r\n\r\n.bottom-btn[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n    line-height: 11px;\r\n}\r\n\r\n.box.prduct-gallery[_ngcontent-%COMP%] {\r\n    position: relative;\r\n}\r\n\r\n.sample-img[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    z-index: 1;\r\n    left: 15%;\r\n    top: 28%;\r\n    transform: rotate(-45deg);\r\n}\r\n\r\np.p-name[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    margin: 0;\r\n    font-size: 13px;\r\n    font-weight: 500;\r\n    vertical-align: middle;\r\n}\r\n\r\np.item-id[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    position: absolute;\r\n    top: 0;\r\n    background: #212529;\r\n    left: 0;\r\n    font-weight: 600;\r\n    color: #fff;\r\n    border-radius: 0 0 5px;\r\n    font-size: 11px;\r\n    padding: 3px 6px;\r\n}\r\n\r\nspan.price[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n    padding: 7px 10px 0;\r\n    float: left;\r\n    font-weight: 600;\r\n    line-height: 20px;\r\n}\r\n\r\n.item-id[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\r\n    font-weight: 600;\r\n}\r\n\r\n.instock[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n    text-align: center;\r\n    margin: 0 0 3px;\r\n    position: absolute;\r\n    top: 5%;\r\n    box-shadow: 0 0 30px 0 rgb(82 63 105 / 10%);\r\n    left: 70%;\r\n    background: rgb(224 152 152 / 24%);\r\n    width: 50px;\r\n    border: 1px solid rgb(0 0 0 / 10%);\r\n    height: 50px;\r\n    border-radius: 50%;\r\n    img {\r\n        width: 30px !important;\r\n        height: 30px !important;\r\n        margin: 9px auto;\r\n    }\r\n}\r\n\r\n.pro-box.storeitem.item-box[_ngcontent-%COMP%] {\r\n    border: 1px solid #dee2e6;\r\n    height: 300px;\r\n    padding-left: 20px;\r\n    padding-right: 20px;\r\n}\r\n\r\nh1.heading-title[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    text-transform: uppercase;\r\n    font-weight: 700;\r\n    color: #ff7900;\r\n    position: relative;\r\n    margin-bottom: 10px;\r\n    width: 100%;\r\n    span {\r\n        font-size: 10px;\r\n        text-transform: inherit;\r\n        background: #495057;\r\n        color: #fff;\r\n        padding: 10px 15px;\r\n        border-radius: 25px;\r\n    }\r\n}\r\n\r\nh1.heading-title[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    max-width: 65px;\r\n    margin-right: 5px;\r\n}\r\n\r\nh1.heading-title[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    font-weight: 400;\r\n    font-size: 13px;\r\n    position: absolute;\r\n    left: 80px;\r\n    bottom: 4px;\r\n    color: grey;\r\n}\r\n\r\n.offerDiv[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 5px;\r\n    right: 5px;\r\n    font-size: 10px;\r\n    background: #dc3545;\r\n    line-height: 10px;\r\n    font-weight: 700;\r\n    width: 35px;\r\n    height: 35px;\r\n    border-radius: 50%;\r\n    padding: 9px;\r\n    text-align: center;\r\n    color: #fff;\r\n}\r\n\r\n.offerDiv[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\r\n    display: block;\r\n}\r\n\r\nspan.price.strike-price[_ngcontent-%COMP%] {\r\n    color: #ccc;\r\n    text-decoration: line-through;\r\n}\r\n\r\n.row.text-level[_ngcontent-%COMP%] {\r\n    margin: 0 -10px 10px;\r\n}\r\n\r\n.store-add-remove[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    padding: 10px;\r\n    float: left;\r\n    width: 100%;\r\n}\r\n\r\n.row.product-slider-box[_ngcontent-%COMP%] {\r\n    border-bottom: 5px solid #ddd;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.carousel-inner[_ngcontent-%COMP%] {\r\n    height: 278px;\r\n}\r\n\r\n.carousel-item[_ngcontent-%COMP%] {\r\n    margin-right: 0;\r\n    border: 1px solid #f8f9fa;\r\n    background: #fff;\r\n}\r\n\r\n.product-slider-box[_ngcontent-%COMP%]   .domain-product[_ngcontent-%COMP%] {\r\n    max-width: 23%;\r\n}\r\n\r\n.product-slider-box[_ngcontent-%COMP%]   .sub-domain-product[_ngcontent-%COMP%] {\r\n    max-width: 77%;\r\n}\r\n\r\n.store-add-remove[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n    font-size: 11px;\r\n    text-align: center;\r\n    float: left;\r\n    transition: all .5s;\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n    min-width: 65px;\r\n}\r\n\r\n.store-add-remove[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] + .btn[_ngcontent-%COMP%] {\r\n    float: right;\r\n}\r\n\r\n.item-subitem-list[_ngcontent-%COMP%]   .pro-box[_ngcontent-%COMP%] {\r\n    width: 95%;\r\n    overflow: auto;\r\n    height: 280px;\r\n}\r\n\r\n.item-subitem-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    float: left;\r\n}\r\n\r\n.item-box[_ngcontent-%COMP%] {\r\n    max-width: 225px;\r\n    width: 100%;\r\n    float: left;\r\n}\r\n\r\n.sub-item-box[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    float: left;\r\n    max-width: 225px;\r\n}\r\n\r\n.sub-item-box[_ngcontent-%COMP%]   .add_to_cart[_ngcontent-%COMP%]   button.btn[_ngcontent-%COMP%] {\r\n    background: #000064;\r\n    height: 35px;\r\n    font-size: 13px;\r\n    line-height: 16px;\r\n    color: #fff;\r\n    border-radius: 25px;\r\n    margin: 10px 0 0;\r\n    width: 100%;\r\n    text-align: center;\r\n}\r\n\r\n.add_to_cart[_ngcontent-%COMP%] {\r\n    .remove-btn {\r\n        border-radius: 50%;\r\n        background: #05054ead !important;\r\n        color: #fff;\r\n        height: 35px;\r\n        padding: 0;\r\n    }\r\n    .btn+.btn {\r\n        width: 100%;\r\n        border: 0;\r\n        border-radius: 30px;\r\n        font-size: 15px;\r\n        line-height: normal;\r\n        font-weight: 600;\r\n    }\r\n}\r\n\r\n.middle-arrow[_ngcontent-%COMP%] {\r\n    float: left;\r\n    width: 30px;\r\n    height: 50px;\r\n    font-size: 40px;\r\n    margin-top: 10%;\r\n    color: #dee2e6;\r\n    text-align: center;\r\n}\r\n\r\n.price-details[_ngcontent-%COMP%] {\r\n    float: left;\r\n    width: 100%;\r\n    margin-bottom: 10px;\r\n    font-size: 15px;\r\n    line-height: normal;\r\n    font-weight: 600;\r\n    .unit-price {\r\n        float: left;\r\n        width: 42%;\r\n    }\r\n}\r\n\r\n.unit-price[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    display: block;\r\n    font-size: 12px;\r\n    font-weight: 400;\r\n}\r\n\r\n.whole-sale-price[_ngcontent-%COMP%] {\r\n    float: right;\r\n    width: 58%;\r\n    text-align: right;\r\n    span {\r\n        font-size: 12px;\r\n        display: block;\r\n        font-weight: 400;\r\n    }\r\n}\r\n\r\n.add_to_cart[_ngcontent-%COMP%] {\r\n    clear: both;\r\n}\r\n\r\n.subItem-field[_ngcontent-%COMP%] {\r\n    width: calc(100% - 280px);\r\n    float: left;\r\n}\r\n\r\n.item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n\r\n.pro-box.active[_ngcontent-%COMP%] {\r\n    border: 1px solid #63030c;\r\n}\r\n\r\n.p-details[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\r\n    font-size: 13px;\r\n    padding: 0 5px;\r\n    min-height: 25px;\r\n    height: 25px;\r\n    text-align: center;\r\n}\r\n\r\n.p-details[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n    margin-bottom: 0;\r\n    font-weight: 400;\r\n    line-height: normal;\r\n    padding-top: 2px;\r\n    padding-bottom: 2px;\r\n}\r\n\r\n.p-details[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\r\n    margin-bottom: 4px;\r\n}\r\n\r\n.sub-item-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    margin-top: 5px !important;\r\n}\r\n\r\n.p-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n    line-height: 14px;\r\n}\r\n\r\n.add-stock[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    display: inline-block !important;\r\n    width: 60px !important;\r\n    margin-left: 5px;\r\n    vertical-align: middle;\r\n}\r\n\r\n.min-alert-count[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    width: 35px;\r\n    margin-left: 5px;\r\n    display: inline-block;\r\n    margin-right: 4px;\r\n}\r\n\r\n.d-flex[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] + span[_ngcontent-%COMP%] {\r\n    margin-left: auto;\r\n    font-weight: 600;\r\n    width: 60px;\r\n    i {\r\n        font-size: 16px;\r\n        color: #bd2130;\r\n        display: inline-block;\r\n        position: relative;\r\n        top: 2px;\r\n        cursor: pointer;\r\n    }\r\n}\r\n\r\n.sub-item-box[_ngcontent-%COMP%]   .pro-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    height: 55px;\r\n    width: 55px;\r\n    margin: 18px auto 8px;\r\n}\r\n\r\n.links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    display: block;\r\n    color: #17a2b8 !important;\r\n    text-decoration: underline !important;\r\n    font-size: 12px;\r\n    cursor: pointer;\r\n}\r\n\r\n.modal-header[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    margin: 5px 0;\r\n    color: #bd2130;\r\n}\r\n\r\n.field[_ngcontent-%COMP%] {\r\n    margin-bottom: 10px;\r\n    select {\r\n        border: 1px solid #ddd;\r\n        border-radius: 3px;\r\n        height: 26px;\r\n        font-size: 12px;\r\n        margin-left: 10px;\r\n        margin-top: -4px;\r\n        width: 60px;\r\n    }\r\n}\r\n\r\n.toplevel[_ngcontent-%COMP%] {\r\n    background: #fff;\r\n    padding: 20px;\r\n    margin-bottom: 15px;\r\n    margin-top: 10px;\r\n    border: 1px solid #ddd;\r\n    border-radius: 5px;\r\n}\r\n\r\n.orderStatus[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    max-width: 80px;\r\n}\r\n\r\n.vipDiv[_ngcontent-%COMP%] {\r\n    background: #f8f9fa;\r\n    padding: 15px;\r\n    border-radius: 3px;\r\n    min-height: 210px;\r\n}\r\n\r\n.orderStatus[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    vertical-align: middle;\r\n}\r\n\r\n.orderStatus[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n    font-size: 13px;\r\n}\r\n.orderStatus[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\r\n    color: #c50f20;\r\n    font-size: 90%;\r\n    font-weight: 600;\r\n}\r\n\r\n.bottom-btn[_ngcontent-%COMP%] {\r\n    float: right;\r\n}\r\n\r\n.alert.alert-success[_ngcontent-%COMP%] {\r\n    padding: 5px 10px;\r\n}\r\n\r\n.alert[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\r\n    font-size: 25px;\r\n    vertical-align: middle;\r\n    margin-left: 5px;\r\n}\r\n\r\n.orderStatus[_ngcontent-%COMP%] {\r\n.card-header {\r\n    border: 0;\r\n}\r\n.card-body {\r\n    padding: 0;\r\n}\r\n}\r\n\r\n.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    padding: 8px;\r\n    text-align: center;\r\n    line-height: normal;\r\n\r\n}\r\n\r\nh3.head-title[_ngcontent-%COMP%] {\r\n    font-size: 22px;\r\n    margin: 20px 0;\r\n    font-weight: bold;\r\n}\r\n\r\nlabel.clear[_ngcontent-%COMP%] {\r\n    display: block;\r\n}\r\n\r\n.save-pdf.btn[_ngcontent-%COMP%] {\r\n    font-size: 13px;\r\n    float: right;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.row.bank-details[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n}\r\n\r\n.row.bank-details[_ngcontent-%COMP%]    + .card-body[_ngcontent-%COMP%] {\r\n    padding-left: 15px;\r\n    padding-right: 15px;\r\n}\r\n\r\n.details-photo[_ngcontent-%COMP%] {\r\n  max-width: 40px;\r\n  max-height: 40px;\r\n  width: auto;\r\n  height: auto;\r\n  object-fit: contain;\r\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AccountManagementComponent, [{
        type: Component,
        args: [{ selector: 'app-account-management', template: "<div class=\"content\">\n\n    <h1 class=\"heading-title\">Account Management (Under Us)</h1>\n\n    <div class=\"toplevel\">\n\n        <form>\n            <div class=\"row\">\n\n                <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                        <label>Country</label>\n                        <select class=\"form-control\" (change)=\"changeCountry($event)\">\n                            <option value=\"\">Select</option>\n                            <option *ngFor=\"let country of countryList\" [value]=\"country.CNTRY_ID\">\n                                {{country.CNTRY_NM}}</option>\n                        </select>\n                    </div>\n                </div>\n\n                <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                        <label>State</label>\n                        <select class=\"form-control\" (change)=\"changeState($event)\">\n                            <option value=\"\">Select</option>\n                            <option *ngFor=\"let state of stateList\" [value]=\"state.STATE_ID\">\n                                {{state.STATE_NM}}</option>\n                        </select>\n                    </div>\n                </div>\n\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-12 text-right mb-3\">\n                    <button *ngIf=\"getlogindata.FIRST_NODE_SUBACCT_FLG\" (click)=\"onSecondNodeNetwork()\" type=\"submit\"\n                        class=\"btn mr-2 custom-btn\">Display My Second Node\n                        Acc</button>\n                    <button (click)=\"openSNThirdNode()\" type=\"submit\" class=\"btn custom-btn\">Display My Third Node\n                        Acc</button>\n                </div>\n            </div>\n        </form>\n\n        <div *ngIf=\"showThirdNodeAcc\" class=\"card exiting-office-table orderStatus p-0\">\n            <div class=\"card-header\">\n                <span>My Third Node Acc</span>\n            </div>\n            <div class=\"card-body pa-0\">\n                <div class=\"row m-0\">\n                    <div class=\"col-md-12 py-2\">\n                        <table class=\"table\">\n                            <thead>\n                                <tr>\n                                    <th class=\"font\">Serial#</th>\n                                    <th class=\"font\">AcctId</th>\n                                    <th class=\"font\">Subacctid</th>\n                                    <th class=\"font\">Storeid</th>\n                                    <th class=\"font\">Account Name</th>\n                                    <th class=\"font\">Manufacturer</th>\n                                    <th class=\"font text-center\">Action</th>\n                                </tr>\n                            </thead>\n\n                            <tbody>\n                                <tr *ngFor=\"let acc of thirdNodeAccArr; let i = index\">\n                                    <!-- Serial -->\n                                    <td class=\"font\">{{ i + 1 | number: '2.0' }}</td>\n\n                                    <!-- AcctId (Category or any ID you want) -->\n                                    <td class=\"font\"> 19 </td>\n\n                                    <!-- Subacctid -->\n                                    <td class=\"font\">{{ acc.THIRD_NODE_ACCT_SUBACCT_ID }}</td>\n\n                                    <!-- Storeid -->\n                                    <td class=\"font\">{{ acc.THIRD_NODE_ACCT_STORE_ID }}</td>\n\n                                    <!-- Account Name -->\n                                    <td class=\"font\">{{ acc.RETAIL_D2C_SUBACCT_OFFICE_NAME }}</td>\n\n                                    <!-- Manuafacturer type -->\n                                    <td class=\"font\">Product Retailer</td>\n\n                                    <!-- Actions -->\n                                    <td>\n                                        <div\n                                            style=\"display: flex; align-items: center; justify-content: center; gap: 6px;\">\n\n                                            <span class=\"badge bg-primary text-white\"\n                                                style=\"cursor: pointer; font-size: 0.7rem; padding: 8px;\"\n                                                (click)=\"getUserStoreList(acc,storeUserTable)\">\n                                                Display Users\n                                            </span>\n\n                                            <span class=\"badge bg-primary text-white\"\n                                                style=\"cursor: pointer; font-size: 0.7rem; padding: 8px;\"\n                                                (click)=\"openModal(addStoreUserModal, acc)\">\n                                                Acct User Mngmt\n                                            </span>\n\n                                            <span class=\"badge bg-primary text-white\"\n                                                style=\"cursor: pointer; font-size: 0.7rem; padding: 8px;\"\n                                                (click)=\"contractMgmt(acc,addMacroSetupModal)\">\n                                                Contract Mngmt\n                                            </span>\n\n                                            <span (click)=\"editThirdNodeAcc(acc)\" style=\"cursor: pointer;\">\n                                                <i style=\"font-size: large;\" class=\"fa fa-edit\"></i>\n                                            </span>\n                                        </div>\n                                    </td>\n                                </tr>\n\n                                <!-- No data fallback -->\n                                <tr *ngIf=\"!thirdNodeAccArr || thirdNodeAccArr.length === 0\">\n                                    <td colspan=\"6\" class=\"text-center font\">\n                                        No Third Node Accounts Found\n                                    </td>\n                                </tr>\n                            </tbody>\n\n                        </table>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n    </div>\n</div>\n\n<ng-template #addStoreUserModal>\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title pull-left\">\n            {{ editMode != true ? 'Add Store User' : 'Update Store User' }}\n            <span *ngIf=\"!editMode\" class=\"small\">Store Id: {{selectedThirdNode.THIRD_NODE_ACCT_STORE_ID}}</span>\n            <span *ngIf=\"editMode\" class=\"small\">Store Id: {{selectedAccId}}</span>\n        </h4>\n\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\">\n        <form [formGroup]=\"addStoreUserForm\">\n            <div class=\"row\">\n                <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                        <label>First Name</label>\n                        <input type=\"text\" class=\"form-control\" formControlName=\"RETAIL_USR_FIRST_NAME\">\n                    </div>\n                </div>\n\n                <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                        <label>Last Name</label>\n                        <input type=\"text\" class=\"form-control\" formControlName=\"RETAIL_USR_LAST_NAME\">\n                    </div>\n                </div>\n\n                <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                        <label>Mobile Number</label>\n                        <input type=\"text\" maxlength=\"10\" class=\"form-control\"\n                            formControlName=\"RETAIL_D2C_ACCT_INTRNL_TEAM_MOBL_NUMBR\"\n                            [ngClass]=\"{ 'is-invalid': submitted1 && f1.RETAIL_D2C_ACCT_INTRNL_TEAM_MOBL_NUMBR.errors }\">\n                        <div *ngIf=\"submitted1 && f1.RETAIL_D2C_ACCT_INTRNL_TEAM_MOBL_NUMBR.errors\"\n                            class=\"invalid-feedback\">\n                            <div *ngIf=\"f1.RETAIL_D2C_ACCT_INTRNL_TEAM_MOBL_NUMBR.errors.required\">Mobile is required\n                            </div>\n                            <div *ngIf=\"f1.RETAIL_D2C_ACCT_INTRNL_TEAM_MOBL_NUMBR.errors.minlength\">Mobile must be 10\n                                characters</div>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                        <label>Email Id</label>\n                        <input type=\"text\" class=\"form-control\" formControlName=\"RETAIL_USR_EMAIL_ID\"\n                            [ngClass]=\"{ 'is-invalid': submitted1 && f1.RETAIL_USR_EMAIL_ID.errors }\">\n                        <div *ngIf=\"submitted1 && f1.RETAIL_USR_EMAIL_ID.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f1.RETAIL_USR_EMAIL_ID.errors.required\">Email is required</div>\n                            <div *ngIf=\"f1.RETAIL_USR_EMAIL_ID.errors.email\">Email must be a valid email address</div>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-md-4\" *ngIf=\"ispassword\">\n                    <div class=\"form-group\">\n                        <label>Password</label>\n                        <input type=\"text\" class=\"form-control\" formControlName=\"RETAIL_D2C_ACCT_INTRNL_CSTMR_RCNT_PWD\">\n                    </div>\n                </div>\n\n                <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                        <label>Role Allocated</label>\n                        <select class=\"form-control\" formControlName=\"RETAIL_USR_ROLE\" (change)=\"onRoleChange($event)\">\n                            <option value=\"Select\">Select</option>\n                            <option value=\"31\">VEND SUPER ADMIN</option>\n                            <option value=\"32\">VEND ADMIN</option>\n                            <option value=\"33\">VEND CARD MANAGER</option>\n                            <option value=\"36\">VEND SUPPORT MANAGER</option>\n                            <option value=\"34\">ACCOUNT MANAGER</option>\n                            <option value=\"35\">ACCOUNT CARD MANAGER</option>\n                            <option value=\"37\">ACCOUNT CARD HOLDER</option>\n                        </select>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <h4 class=\"mb-2 pl-3\">Other Details</h4>\n                <div class=\"col-md-12\">\n                    <div class=\"form-group\">\n                        <label>Resistent Address</label>\n                        <input type=\"text\" class=\"form-control\" formControlName=\"RETAIL_D2C_ACCT_INTRNL_CSTMR_ADDRESS\">\n                    </div>\n                </div>\n\n                <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                        <fieldset class=\"form-group\">\n                            <label>Attach User Photo</label>\n                            <div class=\"custom-file fileInputProfileWrap\">\n                                <input formControlName=\"RETAIL_D2C_ACCT_INTRNL_CUSTMR_PHOTO\" name=\"file\"\n                                    id=\"DomainImage\" type=\"file\" (change)=\"onSelectedFile($event)\"\n                                    class=\"custom-file-input\">\n                                <label class=\"custom-file-label\">{{uploadLabel}}</label>\n                                <div class=\"img-space\" *ngIf=\"isImageSaved\">\n                                    <ng-container *ngIf=\"!editMode\">\n                                        <img [src]=\"'data:image/jpeg;base64,' + base64textString\">\n                                    </ng-container>\n                                    <ng-container *ngIf=\"editMode\">\n                                        <img [src]=\"'data:image/jpeg;base64,' + base64textString\">\n                                    </ng-container>\n                                </div>\n\n                            </div>\n                        </fieldset>\n                    </div>\n                </div>\n\n                <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                        <fieldset class=\"form-group\">\n                            <label>Attach Govt. ID Photo Card</label>\n                            <div class=\"custom-file fileInputProfileWrap\">\n                                <input formControlName=\"RETAIL_D2C_ACCT_INTRNL_CUSTMR_KYC_PHOTO_ID\" name=\"file\"\n                                    type=\"file\" (change)=\"onSelectedFile1($event)\" class=\"custom-file-input\">\n                                <label class=\"custom-file-label\">{{uploadLabel1}}</label>\n                                <div class=\"img-space\" *ngIf=\"isImageSaved1\">\n                                    <ng-container *ngIf=\"!editMode\">\n                                        <img [src]=\"'data:image/jpeg;base64,' + base64textString1\">\n                                    </ng-container>\n                                    <ng-container *ngIf=\"editMode\">\n                                        <img [src]=\"'data:image/jpeg;base64,' + base64textString1\">\n                                    </ng-container>\n                                </div>\n                            </div>\n                        </fieldset>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-12 mt-2\">\n                    <button *ngIf=\"editMode\" [disabled]=\"addStoreUserForm.invalid\" (click)=\"EditStoreUsers()\"\n                        type=\"button\" class=\"btn custom-btn float-right\">Update User Details</button>\n                    <button *ngIf=\"!editMode\" [disabled]=\"addStoreUserForm.invalid\" (click)=\"addStoreUser()\"\n                        type=\"button\" class=\"btn custom-btn float-right\">Save User Details</button>\n                </div>\n            </div>\n        </form>\n    </div>\n</ng-template>\n\n<ng-template #storeUserTable>\n    <!-- Modal Header (same style as reference) -->\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title pull-left\">\n            Already Added User(s)\n        </h4>\n\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n\n    <!-- Modal Body -->\n    <div class=\"modal-body\">\n\n        <table class=\"table exiting-office-table\">\n            <thead>\n                <tr>\n                    <th>Sr. No.</th>\n                    <th>User ID</th>\n                    <th>Name</th>\n                    <th>Mobile</th>\n                    <th>Role of User</th>\n                    <th>Status</th>\n                    <th>Password</th>\n                    <th>Photo</th>\n                    <th colspan=\"2\">Action</th>\n                </tr>\n            </thead>\n\n            <tbody>\n                <tr *ngFor=\"let userStore of userStoreList; index as i\">\n                    <td>{{ i + 1 }}</td>\n\n                    <td>{{ userStore.RETAIL_USR_ID }}</td>\n\n                    <td>\n                        {{ userStore.RETAIL_USR_FIRST_NAME }}\n                        {{ userStore.RETAIL_USR_LAST_NAME }}\n                    </td>\n\n                    <td>{{ userStore.RETAIL_D2C_ACCT_INTRNL_TEAM_MOBL_NUMBR }}</td>\n\n                    <td>{{ userStore.RETAIL_USR_ROLE_Name }}</td>\n\n                    <!-- Status -->\n                    <td class=\"actdct_icon\">\n                        <span *ngIf=\"userStore.RETAIL_D2C_ACCT_INTRNL_CSTMR_ISACTIV_FLG; else inactiveBlock\">\n                            <img src=\"assets/images/active_icon1.png\">\n                        </span>\n                        <ng-template #inactiveBlock>\n                            <img src=\"assets/images/deactive_icon.png\">\n                        </ng-template>\n                    </td>\n\n                    <!-- Password -->\n                    <td>\n                        {{ userStore.RETAIL_D2C_ACCT_INTRNL_CSTMR_RCNT_PWD }}\n                    </td>\n\n                    <!-- Photo -->\n                    <td>\n                        <img [src]=\"imgURL + (userStore.RETAIL_D2C_ACCT_INTRNL_CUSTMR_PHOTO_Path | slice:1:-4) + 'jpeg'\"\n                            alt=\"Profile Photo\" class=\"details-photo\" />\n                    </td>\n\n                    <!-- Edit -->\n                    <td class=\"delete-icon\" (click)=\"getRetailStoresById(\n                addStoreUserModal,\n                userStore\n              )\">\n                        <span class=\"icon\">\n                            <i class=\"fa fa-edit\"></i>\n                        </span>\n                    </td>\n\n                    <!-- Delete -->\n                    <td class=\"delete-icon\">\n                        <span class=\"icon\" (click)=\"deleteAcc(userStore)\">\n                            <i class=\"fa fa-trash\"></i>\n                        </span>\n                    </td>\n                </tr>\n\n                <!-- No data -->\n                <tr *ngIf=\"!userStoreList || userStoreList.length === 0\">\n                    <td colspan=\"10\" class=\"text-center\">\n                        No Users Found\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n\n    </div>\n</ng-template>\n\n<ng-template #addMacroSetupModal>\n\n    <!-- Modal Header -->\n    <div class=\"modal-header\">\n\n        <h4 class=\"modal-title pull-left\">\n            Enterprise Macro Setup\n        </h4>\n\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n\n            <span aria-hidden=\"true\">&times;</span>\n\n        </button>\n\n    </div>\n\n    <tabset #macroParentTabset class=\"p-3\">\n\n        <tab heading=\"Enterprise Macro Setup\" id=\"tab1\" (selectTab)=\"onMacroParentTabSelected($event)\">\n\n            <!-- Modal Body -->\n            <div class=\"modal-body\">\n\n                <tabset #macroChildTabset class=\"\">\n\n                    <tab heading=\"Display Mac. Setup\" id=\"tab11\"\n                        (selectTab)=\"onMacroChildTabSelected($event)\">\n\n                        <div *ngIf=\"isMacroDisplayLoading\" class=\"text-center mt-3\">\n                            Loading macro setup...\n                        </div>\n\n                        <div *ngIf=\"!isMacroDisplayLoading && !hasMacroSetup\" class=\"alert alert-info mt-3 mb-0\"\n                            role=\"alert\">\n                            No macro setup is available. Please add a macro setup first.\n                            <button type=\"button\" class=\"btn btn-link p-0 ml-1 align-baseline\"\n                                (click)=\"switchToAddMacroSetup()\">\n                                Add Mac. Setup\n                            </button>\n                        </div>\n\n                    </tab>\n\n                    <tab heading=\"Add Mac. setup\" id=\"tab12\"\n                        (selectTab)=\"onMacroChildTabSelected($event)\">\n\n                    </tab>\n\n                </tabset>\n\n                <form *ngIf=\"selectedMacroChildTab === 'tab12' || (selectedMacroChildTab === 'tab11' && hasMacroSetup)\"\n                    [formGroup]=\"macroSetupForm\">\n\n                            <!-- ========================= -->\n                            <!-- BASIC DETAILS -->\n                            <!-- ========================= -->\n\n                            <div class=\"row mt-3\">\n\n                                <!-- Associated Industry -->\n                                <div class=\"col-md-4\">\n                                    <div class=\"form-group\">\n\n                                        <label>\n                                            Associated Industry\n                                        </label>\n\n                                        <select class=\"form-control\" formControlName=\"associatedIndustry\">\n\n                                            <option value=\"0\">\n                                                Select Associated Industry\n                                            </option>\n\n                                            <option value=\"1\">Organization Promoters &amp; Directors</option>\n                                            <option value=\"2\">CEO &amp; Managing Director</option>\n                                            <option value=\"3\">CXO - Higher Management</option>\n                                            <option value=\"4\">VP-GM Mid Level Management</option>\n                                            <option value=\"5\">Operation Manager-Supervisor Level Management</option>\n                                            <option value=\"6\">Sales &amp; Customer Manager</option>\n                                            <option value=\"7\">Operation Level &amp; HR/ Admin Staff</option>\n                                            <option value=\"8\">Technology Support Staff</option>\n                                            <option value=\"9\">Customer Support &amp; Contact Centre Staff</option>\n                                            <option value=\"10\">Legal Support Team</option>\n                                            <option value=\"11\">Training &amp; Teaching Staff</option>\n                                            <option value=\"12\">Security Staff</option>\n                                            <option value=\"13\">Office Support Staff</option>\n                                            <option value=\"14\">Staff on Contract</option>\n                                            <option value=\"15\">Sales Force Staff</option>\n                                            <option value=\"16\">Delivery Runners</option>\n                                            <option value=\"17\">Line Production Staff</option>\n                                            <option value=\"18\">Quality and Compliances Staff</option>\n                                            <option value=\"19\">Production Manager</option>\n                                            <option value=\"20\">Procurement Staff</option>\n                                            <option value=\"21\">Doctors &amp; Surgeons</option>\n                                            <option value=\"22\">Paramedics &amp; Nursing Staff</option>\n                                            <option value=\"23\">Chief Medical Officer</option>\n                                            <option value=\"24\">Registrar and Procurement Head</option>\n                                            <option value=\"25\">Reception and Customer attendants</option>\n                                            <option value=\"26\">Operation Theatre Staff</option>\n                                            <option value=\"27\">Patients</option>\n                                            <option value=\"28\">D2C Customers</option>\n                                            <option value=\"29\">B2B Customers</option>\n                                            <option value=\"30\">Retailer Network Channel</option>\n                                            <option value=\"31\">Distributor Network Channel</option>\n                                            <option value=\"32\">Service Providers</option>\n                                            <option value=\"33\">Stockists</option>\n                                            <option value=\"34\">C&amp;FS Users</option>\n                                            <option value=\"35\">Logistics Support Staff</option>\n                                            <option value=\"36\">Drivers &amp; Delivery Staffs</option>\n                                            <option value=\"37\">Principal &amp; Vice Principal</option>\n                                            <option value=\"38\">Chancellors</option>\n                                            <option value=\"39\">Vice-Chancellors</option>\n                                            <option value=\"40\">Bank - Financial Services Branch Manager</option>\n                                            <option value=\"41\">Cashiers and Banking Staff</option>\n                                            <option value=\"42\">TPAs</option>\n                                            <option value=\"43\">Dealers &amp; Retail Stores</option>\n                                            <option value=\"44\">Relation Ship Managers &amp; Client Account Managers\n                                            </option>\n                                            <option value=\"45\">Warehouse Supervisor</option>\n                                            <option value=\"46\">Collection Executive</option>\n                                            <option value=\"47\">Hospital Admin Staff</option>\n                                            <option value=\"48\">Teacher</option>\n                                            <option value=\"49\">Professors &amp; Senior Professors</option>\n                                            <option value=\"50\">Faculty Deans</option>\n                                            <option value=\"51\">Hostel Wardens</option>\n                                            <option value=\"52\">Students</option>\n                                            <option value=\"53\">Visitors and Guests</option>\n                                            <option value=\"54\">Parents &amp; Guardians</option>\n                                            <option value=\"55\">Project Manager</option>\n                                            <option value=\"56\">Site Manager</option>\n                                            <option value=\"57\">Surveyor</option>\n                                            <option value=\"58\">Hotel Manager</option>\n                                            <option value=\"59\">Lobby Manager</option>\n                                            <option value=\"60\">Chef &amp; Restaurateur</option>\n                                            <option value=\"61\">Event Manager</option>\n                                            <option value=\"62\">Field Service Engineers</option>\n                                            <option value=\"63\">Technology Support Staff</option>\n\n                                        </select>\n\n                                    </div>\n                                </div>\n\n                                <!-- Brand Asset -->\n                                <div class=\"col-md-4\">\n\n                                    <div class=\"form-group\">\n\n                                        <label>\n                                            Brand Asset (Card) Duration\n                                        </label>\n\n                                        <select class=\"form-control\" formControlName=\"duration\">\n\n                                            <option value=\"0\">\n                                                Select Brand Asset Duration\n                                            </option>\n\n                                            <option value=\"1\">1 year</option>\n                                            <option value=\"3\">3 years</option>\n                                            <option value=\"5\">5 years</option>\n\n                                        </select>\n\n                                    </div>\n\n                                </div>\n\n                                <!-- Validity Start Date -->\n                                <div class=\"col-md-4\">\n\n                                    <div class=\"form-group\">\n\n                                        <label>\n                                            Validity Start Date\n                                        </label>\n\n                                        <input type=\"date\" class=\"form-control\" formControlName=\"validityStartDate\">\n\n                                    </div>\n\n                                </div>\n\n                            </div>\n\n\n                            <!-- ========================= -->\n                            <!-- WALLET TYPES -->\n                            <!-- ========================= -->\n\n                            <div class=\"row mt-2\">\n\n                                <div class=\"col-md-12\">\n\n                                    <fieldset>\n\n                                        <legend>\n                                            Wallet Types\n                                        </legend>\n\n\n                                        <div class=\"row\">\n\n                                            <!-- Personal Wallet -->\n                                            <div class=\"col-md-6\">\n\n                                                <div class=\"form-group\">\n\n                                                    <label>\n                                                        Personal Wallet Availability\n                                                    </label>\n\n                                                    <div class=\"form-check\">\n\n                                                        <input type=\"checkbox\" class=\"form-check-input\"\n                                                            formControlName=\"personalWalletAvailability\">\n\n                                                        <label class=\"form-check-label\">\n                                                            Default\n                                                        </label>\n\n                                                    </div>\n\n                                                </div>\n\n                                            </div>\n\n\n                                            <!-- Corporate Wallet -->\n                                            <div class=\"col-md-6\">\n\n                                                <div class=\"form-group\">\n\n                                                    <label>\n                                                        Corporate Wallet Availability\n                                                    </label>\n\n                                                    <div class=\"form-check\">\n\n                                                        <input type=\"checkbox\" class=\"form-check-input\"\n                                                            formControlName=\"corporateWalletAvailability\">\n\n                                                        <label class=\"form-check-label\">\n                                                            Activate\n                                                        </label>\n\n                                                    </div>\n\n                                                </div>\n\n                                            </div>\n\n                                        </div>\n\n                                    </fieldset>\n\n                                </div>\n\n                            </div>\n\n\n                            <!-- ========================= -->\n                            <!-- COMMERCIAL ACCESS -->\n                            <!-- ========================= -->\n\n                            <div class=\"row mt-3\">\n\n                                <div class=\"col-md-12\">\n\n                                    <fieldset>\n\n                                        <legend>\n                                            Commercial Access\n                                        </legend>\n\n\n                                        <div class=\"row\">\n\n                                            <!-- On Network Commerce Flag -->\n                                            <div class=\"col-md-12\">\n\n                                                <div class=\"form-group\">\n\n                                                    <label>\n                                                        On Network Commerce Flag\n                                                    </label>\n\n                                                    <div class=\"form-check\">\n\n                                                        <input type=\"checkbox\" class=\"form-check-input\"\n                                                            formControlName=\"onNetworkCommerceFlag\">\n\n                                                        <label class=\"form-check-label\">\n                                                            Default\n                                                        </label>\n\n                                                    </div>\n\n                                                </div>\n\n                                            </div>\n\n\n                                            <!-- Campus Terminal POS -->\n                                            <div class=\"col-md-6\">\n\n                                                <div class=\"form-group\">\n\n                                                    <label>\n                                                        Access to Campus Terminal POS\n                                                    </label>\n\n                                                    <div class=\"form-check\">\n\n                                                        <input type=\"checkbox\" class=\"form-check-input\"\n                                                            formControlName=\"campusTerminalPOS\">\n\n                                                        <label class=\"form-check-label\">\n                                                            Activate\n                                                        </label>\n\n                                                    </div>\n\n                                                </div>\n\n                                            </div>\n\n\n                                            <!-- Full Terminal Network -->\n                                            <div class=\"col-md-6\">\n\n                                                <div class=\"form-group\">\n\n                                                    <label>\n                                                        Access to Full Terminal Network\n                                                    </label>\n\n                                                    <div class=\"form-check\">\n\n                                                        <input type=\"checkbox\" class=\"form-check-input\"\n                                                            formControlName=\"fullTerminalNetwork\">\n\n                                                        <label class=\"form-check-label\">\n                                                            Activate\n                                                        </label>\n\n                                                    </div>\n\n                                                </div>\n\n                                            </div>\n\n                                        </div>\n\n                                    </fieldset>\n\n                                </div>\n\n                            </div>\n\n\n                            <!-- ========================= -->\n                            <!-- USERS CATEGORIES -->\n                            <!-- ========================= -->\n\n                            <div class=\"row mt-3\">\n\n                                <div class=\"col-md-12\">\n\n                                    <fieldset>\n\n                                        <legend>\n                                            Users Categories\n                                        </legend>\n\n\n                                        <div class=\"row\">\n\n                                            <!-- Internal / Employees -->\n                                            <div class=\"col-md-6\">\n                                                <div class=\"form-group\">\n\n                                                    <label>\n                                                        Internal / Employees\n                                                    </label>\n\n                                                    <div class=\"form-check\">\n                                                        <input type=\"checkbox\" class=\"form-check-input\"\n                                                            formControlName=\"internalEmployees\">\n\n                                                        <label class=\"form-check-label\">\n                                                            Activate\n                                                        </label>\n                                                    </div>\n\n                                                </div>\n                                            </div>\n\n\n                                            <!-- Banks / Insurance -->\n                                            <div class=\"col-md-6\">\n\n                                                <div class=\"form-group\">\n\n                                                    <label>\n                                                        Banks / Insurance\n                                                    </label>\n\n                                                    <div class=\"form-check\">\n\n                                                        <input type=\"checkbox\" class=\"form-check-input\"\n                                                            formControlName=\"banksInsurance\">\n\n                                                        <label class=\"form-check-label\">\n                                                            Activate\n                                                        </label>\n\n                                                    </div>\n\n                                                </div>\n\n                                            </div>\n\n\n                                            <!-- Channel Network -->\n                                            <div class=\"col-md-6\">\n\n                                                <div class=\"form-group\">\n\n                                                    <label>\n                                                        Channel Network / Sup. Chain\n                                                    </label>\n\n                                                    <div class=\"form-check\">\n\n                                                        <input type=\"checkbox\" class=\"form-check-input\"\n                                                            formControlName=\"channelNetwork\">\n\n                                                        <label class=\"form-check-label\">\n                                                            Activate\n                                                        </label>\n\n                                                    </div>\n\n                                                </div>\n\n                                            </div>\n\n\n                                            <!-- CSR Providers -->\n                                            <div class=\"col-md-6\">\n\n                                                <div class=\"form-group\">\n\n                                                    <label>\n                                                        CSR Providers\n                                                    </label>\n\n                                                    <div class=\"form-check\">\n\n                                                        <input type=\"checkbox\" class=\"form-check-input\"\n                                                            formControlName=\"csrProviders\">\n\n                                                        <label class=\"form-check-label\">\n                                                            Activate\n                                                        </label>\n\n                                                    </div>\n\n                                                </div>\n\n                                            </div>\n\n\n                                            <!-- Security Staff -->\n                                            <div class=\"col-md-6\">\n\n                                                <div class=\"form-group\">\n\n                                                    <label>\n                                                        Security Staff / Contractors\n                                                    </label>\n\n                                                    <div class=\"form-check\">\n\n                                                        <input type=\"checkbox\" class=\"form-check-input\"\n                                                            formControlName=\"securityStaff\">\n\n                                                        <label class=\"form-check-label\">\n                                                            Activate\n                                                        </label>\n\n                                                    </div>\n\n                                                </div>\n\n                                            </div>\n\n\n                                            <!-- Events Based Users -->\n                                            <div class=\"col-md-6\">\n\n                                                <div class=\"form-group\">\n\n                                                    <label>\n                                                        Events Based Users\n                                                    </label>\n\n                                                    <div class=\"form-check\">\n\n                                                        <input type=\"checkbox\" class=\"form-check-input\"\n                                                            formControlName=\"eventsBasedUsers\">\n\n                                                        <label class=\"form-check-label\">\n                                                            Activate\n                                                        </label>\n\n                                                    </div>\n\n                                                </div>\n\n                                            </div>\n\n\n                                            <!-- B2B Customers -->\n                                            <div class=\"col-md-6\">\n\n                                                <div class=\"form-group\">\n\n                                                    <label>\n                                                        B2B Customers\n                                                    </label>\n\n                                                    <div class=\"form-check\">\n\n                                                        <input type=\"checkbox\" class=\"form-check-input\"\n                                                            formControlName=\"b2bCustomers\">\n\n                                                        <label class=\"form-check-label\">\n                                                            Activate\n                                                        </label>\n\n                                                    </div>\n\n                                                </div>\n\n                                            </div>\n\n\n                                            <!-- Guests / Visitors -->\n                                            <div class=\"col-md-6\">\n\n                                                <div class=\"form-group\">\n\n                                                    <label>\n                                                        Guests / Visitors\n                                                    </label>\n\n                                                    <div class=\"form-check\">\n\n                                                        <input type=\"checkbox\" class=\"form-check-input\"\n                                                            formControlName=\"guestsVisitors\">\n\n                                                        <label class=\"form-check-label\">\n                                                            Activate\n                                                        </label>\n\n                                                    </div>\n\n                                                </div>\n\n                                            </div>\n\n\n                                            <!-- Product / Service Consumers -->\n                                            <div class=\"col-md-6\">\n\n                                                <div class=\"form-group\">\n\n                                                    <label>\n                                                        Product / Service Consumers\n                                                    </label>\n\n                                                    <div class=\"form-check\">\n\n                                                        <input type=\"checkbox\" class=\"form-check-input\"\n                                                            formControlName=\"productConsumers\">\n\n                                                        <label class=\"form-check-label\">\n                                                            Activate\n                                                        </label>\n\n                                                    </div>\n\n                                                </div>\n\n                                            </div>\n\n\n                                            <!-- Asset Owners / Users -->\n                                            <div class=\"col-md-6\">\n\n                                                <div class=\"form-group\">\n\n                                                    <label>\n                                                        Asset Owners / Users\n                                                    </label>\n\n                                                    <div class=\"form-check\">\n\n                                                        <input type=\"checkbox\" class=\"form-check-input\"\n                                                            formControlName=\"assetOwners\">\n\n                                                        <label class=\"form-check-label\">\n                                                            Activate\n                                                        </label>\n\n                                                    </div>\n\n                                                </div>\n\n                                            </div>\n\n\n                                            <!-- Service Providers -->\n                                            <div class=\"col-md-6\">\n\n                                                <div class=\"form-group\">\n\n                                                    <label>\n                                                        Service Providers\n                                                    </label>\n\n                                                    <div class=\"form-check\">\n\n                                                        <input type=\"checkbox\" class=\"form-check-input\"\n                                                            formControlName=\"serviceProviders\">\n\n                                                        <label class=\"form-check-label\">\n                                                            Activate\n                                                        </label>\n\n                                                    </div>\n\n                                                </div>\n\n                                            </div>\n\n\n                                            <!-- Social Group Users -->\n                                            <div class=\"col-md-6\">\n\n                                                <div class=\"form-group\">\n\n                                                    <label>\n                                                        Social Group Users\n                                                    </label>\n\n                                                    <div class=\"form-check\">\n\n                                                        <input type=\"checkbox\" class=\"form-check-input\"\n                                                            formControlName=\"socialGroupUsers\">\n\n                                                        <label class=\"form-check-label\">\n                                                            Activate\n                                                        </label>\n\n                                                    </div>\n\n                                                </div>\n\n                                            </div>\n\n                                        </div>\n\n                                    </fieldset>\n\n                                </div>\n\n                            </div>\n\n\n                            <!-- ========================= -->\n                            <!-- GENERAL SETUP -->\n                            <!-- ========================= -->\n\n                            <div class=\"row mt-3\">\n\n                                <div class=\"col-md-12\">\n\n                                    <fieldset>\n\n                                        <legend>\n                                            General Setup\n                                        </legend>\n\n\n                                        <!-- Cash Charging -->\n                                        <div class=\"form-group\">\n\n                                            <label>\n                                                Cash Charging Back office Availability\n                                                with Fixed amt 500.00 INR\n                                            </label>\n\n                                            <div class=\"form-check\">\n\n                                                <input type=\"checkbox\" class=\"form-check-input\"\n                                                    formControlName=\"cashCharging\">\n\n                                                <label class=\"form-check-label\">\n                                                    Activate\n                                                </label>\n\n                                            </div>\n\n                                        </div>\n\n\n                                        <!-- Brand Card -->\n                                        <div class=\"form-group\">\n\n                                            <label>\n                                                Brand Card on Multiple Account Wallet\n                                            </label>\n\n                                            <div class=\"form-check\">\n\n                                                <input type=\"checkbox\" class=\"form-check-input\"\n                                                    formControlName=\"brandCardMultipleWallet\">\n\n                                                <label class=\"form-check-label\">\n                                                    Activate\n                                                </label>\n\n                                            </div>\n\n                                        </div>\n\n                                    </fieldset>\n\n                                </div>\n\n                            </div>\n\n\n                            <!-- ========================= -->\n                            <!-- ACTION -->\n                            <!-- ========================= -->\n\n                            <div class=\"row\" *ngIf=\"selectedMacroChildTab === 'tab12'\">\n\n                                <div class=\"col-md-12 mt-2\">\n\n                                    <button type=\"button\" class=\"btn custom-btn float-right\" (click)=\"addMacroSetup()\">\n\n                                        Add Mac. Setup\n\n                                    </button>\n\n                                </div>\n\n                            </div>\n\n                </form>\n\n            </div>\n\n        </tab>\n\n        <tab heading=\" Net. Comm. Partner Setup\" id=\"tab2\">\n\n        </tab>\n\n    </tabset>\n\n</ng-template>\n", styles: [".toplevel {\r\n    background: #fff;\r\n    padding: 20px;\r\n    margin-bottom: 15px;\r\n    margin-top: 10px;\r\n    border: 1px solid #ddd;\r\n    border-radius: 5px;\r\n}\r\n\r\n.table-font-size th,\r\n.table-font-size td {\r\n  font-size: 13px; /* Change to your desired size */\r\n}\r\n\r\n.vipDiv {\r\n    background: #f8f9fa;\r\n    padding: 15px;\r\n    border-radius: 3px;\r\n    min-height: 210px;\r\n}\r\n\r\n.orderStatus td {\r\n    vertical-align: middle;\r\n}\r\n\r\n.orderStatus td .btn {\r\n    font-size: 13px;\r\n    padding: 4px 10px;\r\n}\r\n\r\n.orderStatus small {\r\n    color: #c50f20;\r\n    font-size: 90%;\r\n    font-weight: 600;\r\n}\r\n\r\n.bottom-btn {\r\n    float: right;\r\n}\r\n\r\n.alert.alert-success {\r\n    padding: 5px 10px;\r\n}\r\n\r\n.alert .fa {\r\n    font-size: 25px;\r\n    vertical-align: middle;\r\n    margin-left: 5px;\r\n}\r\n\r\n.orderStatus {\r\n    .card-header {\r\n        border: 0;\r\n    }\r\n    .card-body {\r\n        padding: 0;\r\n        overflow: auto;\r\n    }\r\n}\r\n\r\nh3.head-title {\r\n    font-size: 22px;\r\n    margin: 20px 0;\r\n    font-weight: bold;\r\n}\r\n\r\n.icon .fa {\r\n    font-size: 20px;\r\n    vertical-align: top;\r\n    color: #17a2b8;\r\n}\r\n\r\n.orderStatus .icon img {\r\n    max-width: 25px;\r\n}\r\n\r\n.orderStatus .btn {\r\n    background: #021422;\r\n    border-radius: 25px;\r\n    color: #fff;\r\n    font-size: 11px !important;\r\n    border: 1px solid #21333c;\r\n    i {\r\n        font-size: 18px;\r\n        vertical-align: middle;\r\n        padding-right: 5px;\r\n    }\r\n}\r\n\r\nbutton.btn.view-del-btn {\r\n    background: #63030c !important;\r\n}\r\n\r\n.table thead th {\r\n    border: 0;\r\n}\r\n\r\n.toplevel,\r\n.card {\r\n    padding: 0 20px 0;\r\n}\r\n\r\n.table th {\r\n    padding: 8px 5px;\r\n    text-align: center;\r\n    line-height: 13px;\r\n    font-weight: 600;\r\n    font-size: 13px;\r\n    border-top: 0;\r\n}\r\n\r\n.table td {\r\n    text-align: center;\r\n    font-size: 12px;\r\n    line-height: 15px;\r\n    padding: 10px 5px;\r\n}\r\n\r\ntd.icon {\r\n    padding: 0 !important;\r\n}\r\n\r\nbutton.btn.custom-btn {\r\n    min-width: 100px;\r\n}\r\n\r\n::ng-deep .nav-tabs .nav-link {\r\n  font-size: 11px; /* Adjust as needed */\r\n}\r\n\r\nbutton.btn.custom-btn-white {\r\n    min-width: 100px;\r\n    background: #ffffff;\r\n    border: 1px solid #c50f20;\r\n    color: #c50f20;\r\n    font-weight: 600;\r\n\r\n    &:hover {\r\n        background: #c50f20;\r\n        color: #ffffff;\r\n    }\r\n}\r\n\r\n.input-group-prepend+.invalid-feedback {\r\n    top: 35px;\r\n}\r\n\r\n.card-header {\r\n    padding: 10px 15px;\r\n    background: #63030c;\r\n    font-size: 12px;\r\n    color: #fff;\r\n    font-weight: 500;\r\n    span {\r\n        float: left;\r\n    }\r\n    span+span {\r\n        float: right;\r\n    }\r\n}\r\n\r\n.card-header img {\r\n    width: 16px;\r\n    margin-left: 3px;\r\n}\r\n\r\n.subcard-header {\r\n    padding: 8px 12px;\r\n    background: #63030c;\r\n    font-size: 10px;\r\n    color: #fff;\r\n    font-weight: 500;\r\n    span {\r\n        float: left;\r\n    }\r\n    span+span {\r\n        float: right;\r\n    }\r\n}\r\n\r\n.subcard-header img {\r\n    width: 16px;\r\n    margin-left: 3px;\r\n}\r\n\r\n.icofont-info-circle {\r\n    font-size: 20px;\r\n    vertical-align: middle;\r\n    margin-left: 3px;\r\n}\r\n\r\n.orderList thead tr {\r\n    background: #ff000029;\r\n}\r\n\r\n.orderList {\r\n    border-collapse: collapse;\r\n    border: 1px solid #ddd;\r\n    margin: 5px 0;\r\n}\r\n\r\n.orderList td {\r\n    border: 1px solid #ddd;\r\n}\r\n\r\n.orderList tr th {\r\n    background: #212529;\r\n    color: #fff;\r\n    vertical-align: middle;\r\n}\r\n\r\n.no-border td {\r\n    border: 0 !important;\r\n    text-align: right !important;\r\n    font-weight: 600;\r\n    font-size: 12px !important;\r\n}\r\n\r\nsmall.view-customer {\r\n    display: block;\r\n    text-decoration: underline;\r\n    cursor: pointer;\r\n}\r\n\r\nbutton.btn.view-ord-btn {\r\n    min-width: 112px;\r\n}\r\n\r\nbutton.btn.view-del-btn {\r\n    min-width: 125px;\r\n}\r\n\r\n.card-body.no_data_available {\r\n    text-align: center;\r\n    color: #bd2130;\r\n    img {\r\n        display: block;\r\n        text-align: center;\r\n        margin: 0 auto 5px;\r\n        max-width: 30px;\r\n    }\r\n}\r\n\r\n\r\nsmall.viewCart {\r\n    text-decoration: underline;\r\n    cursor: pointer;\r\n}\r\n\r\n.hr {\r\n    border: none;\r\n    border-top: 1.5px solid #d1d1d1;\r\n    margin: 16px 0;\r\n    height: 0;\r\n    width: 100%;\r\n}\r\n\r\nh1.heading-title {\r\n    margin: 20px 0 0;\r\n}\r\n\r\n.heading h2 {\r\n    padding: 10px 5px 10px;\r\n    font-size: 20px;\r\n}\r\n\r\n.row.topLevel {\r\n    background: #fff;\r\n    padding: 20px 0;\r\n    margin: 0;\r\n    border-radius: 5px;\r\n}\r\n\r\n.heading.store-domain {\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.store-domain div {\r\n    display: inline-block;\r\n    margin-right: 20px;\r\n}\r\n\r\n.store-domain span {\r\n    background: #ddd;\r\n    padding: 5px 20px;\r\n    font-size: 13px;\r\n    border-radius: 20px;\r\n    display: inline-block;\r\n    font-weight: bold;\r\n    margin-left: 5px;\r\n}\r\n\r\n.store_id {\r\n    background: #ddd;\r\n    padding: 5px 20px;\r\n    border-radius: 20px;\r\n    font-size: 13px;\r\n    font-weight: 700;\r\n    float: right;\r\n    margin-top: -40px;\r\n}\r\n\r\n.box {\r\n    width: 100%;\r\n    overflow: hidden;\r\n    box-shadow: 0 0 4px 0px #eee;\r\n    margin: 20px 0 5px;\r\n    border-radius: 4px;\r\n    padding: 10px;\r\n    background: #fff;\r\n}\r\n\r\n.main-content-area .box .col {\r\n    width: 20%;\r\n    float: left;\r\n    padding: 0;\r\n}\r\n\r\n.fa-star:before {\r\n    content: \"\\f005\";\r\n    color: #ff9600;\r\n    margin-right: 5px;\r\n}\r\n\r\n.pro-box {\r\n    box-shadow: 0 0 4px 0 #e9ecef;\r\n    margin: 0 5px 10px;\r\n    overflow: hidden;\r\n    padding: 15px;\r\n    border-radius: 3px;\r\n    position: relative;\r\n    border: 1px solid #dee2e6;\r\n}\r\n\r\n.pro-box img {\r\n    height: 100px;\r\n    width: 100px;\r\n    margin: 30px auto 15px;\r\n    display: block;\r\n}\r\n\r\n.storeitem .p-details {\r\n    margin-bottom: 42px;\r\n}\r\n\r\np.label-txt {\r\n    text-align: center;\r\n    padding: 10px;\r\n    font-size: 14px;\r\n    margin: 0;\r\n}\r\n\r\n.store-available-product .col {\r\n    width: 25% !important;\r\n}\r\n\r\n.selected-productLine h5,\r\n.store-available-product h5 {\r\n    font-size: 16px;\r\n    padding: 0 10px 5px;\r\n}\r\n\r\n.right-field-head {\r\n    float: right;\r\n    margin-top: 10px;\r\n}\r\n\r\n.right-field-head li {\r\n    display: inline-block;\r\n    padding: 0 10px;\r\n}\r\n\r\nspan.video,\r\nspan.doc {\r\n    padding: 8px 15px;\r\n    background: #dee2e6;\r\n    font-size: 12px;\r\n    border-radius: 20px;\r\n}\r\n\r\n.right-field-head .btn {\r\n    font-size: 11px;\r\n    border-radius: 20px;\r\n}\r\n\r\n.bottom-btn .btn {\r\n    line-height: 11px;\r\n}\r\n\r\n.box.prduct-gallery {\r\n    position: relative;\r\n}\r\n\r\n.sample-img {\r\n    position: absolute;\r\n    z-index: 1;\r\n    left: 15%;\r\n    top: 28%;\r\n    transform: rotate(-45deg);\r\n}\r\n\r\np.p-name {\r\n    text-align: center;\r\n    margin: 0;\r\n    font-size: 13px;\r\n    font-weight: 500;\r\n    vertical-align: middle;\r\n}\r\n\r\np.item-id {\r\n    text-align: center;\r\n    position: absolute;\r\n    top: 0;\r\n    background: #212529;\r\n    left: 0;\r\n    font-weight: 600;\r\n    color: #fff;\r\n    border-radius: 0 0 5px;\r\n    font-size: 11px;\r\n    padding: 3px 6px;\r\n}\r\n\r\nspan.price {\r\n    font-size: 12px;\r\n    padding: 7px 10px 0;\r\n    float: left;\r\n    font-weight: 600;\r\n    line-height: 20px;\r\n}\r\n\r\n.item-id b {\r\n    font-weight: 600;\r\n}\r\n\r\n.instock {\r\n    font-size: 12px;\r\n    text-align: center;\r\n    margin: 0 0 3px;\r\n    position: absolute;\r\n    top: 5%;\r\n    box-shadow: 0 0 30px 0 rgb(82 63 105 / 10%);\r\n    left: 70%;\r\n    background: rgb(224 152 152 / 24%);\r\n    width: 50px;\r\n    border: 1px solid rgb(0 0 0 / 10%);\r\n    height: 50px;\r\n    border-radius: 50%;\r\n    img {\r\n        width: 30px !important;\r\n        height: 30px !important;\r\n        margin: 9px auto;\r\n    }\r\n}\r\n\r\n.pro-box.storeitem.item-box {\r\n    border: 1px solid #dee2e6;\r\n    height: 300px;\r\n    padding-left: 20px;\r\n    padding-right: 20px;\r\n}\r\n\r\nh1.heading-title {\r\n    font-size: 20px;\r\n    text-transform: uppercase;\r\n    font-weight: 700;\r\n    color: #ff7900;\r\n    position: relative;\r\n    margin-bottom: 10px;\r\n    width: 100%;\r\n    span {\r\n        font-size: 10px;\r\n        text-transform: inherit;\r\n        background: #495057;\r\n        color: #fff;\r\n        padding: 10px 15px;\r\n        border-radius: 25px;\r\n    }\r\n}\r\n\r\nh1.heading-title img {\r\n    max-width: 65px;\r\n    margin-right: 5px;\r\n}\r\n\r\nh1.heading-title small {\r\n    display: inline-block;\r\n    font-weight: 400;\r\n    font-size: 13px;\r\n    position: absolute;\r\n    left: 80px;\r\n    bottom: 4px;\r\n    color: grey;\r\n}\r\n\r\n.offerDiv {\r\n    position: absolute;\r\n    top: 5px;\r\n    right: 5px;\r\n    font-size: 10px;\r\n    background: #dc3545;\r\n    line-height: 10px;\r\n    font-weight: 700;\r\n    width: 35px;\r\n    height: 35px;\r\n    border-radius: 50%;\r\n    padding: 9px;\r\n    text-align: center;\r\n    color: #fff;\r\n}\r\n\r\n.offerDiv small {\r\n    display: block;\r\n}\r\n\r\nspan.price.strike-price {\r\n    color: #ccc;\r\n    text-decoration: line-through;\r\n}\r\n\r\n.row.text-level {\r\n    margin: 0 -10px 10px;\r\n}\r\n\r\n.store-add-remove {\r\n    text-align: center;\r\n    padding: 10px;\r\n    float: left;\r\n    width: 100%;\r\n}\r\n\r\n.row.product-slider-box {\r\n    border-bottom: 5px solid #ddd;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.carousel-inner {\r\n    height: 278px;\r\n}\r\n\r\n.carousel-item {\r\n    margin-right: 0;\r\n    border: 1px solid #f8f9fa;\r\n    background: #fff;\r\n}\r\n\r\n.product-slider-box .domain-product {\r\n    max-width: 23%;\r\n}\r\n\r\n.product-slider-box .sub-domain-product {\r\n    max-width: 77%;\r\n}\r\n\r\n.store-add-remove .btn {\r\n    font-size: 11px;\r\n    text-align: center;\r\n    float: left;\r\n    transition: all .5s;\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n    min-width: 65px;\r\n}\r\n\r\n.store-add-remove .btn+.btn {\r\n    float: right;\r\n}\r\n\r\n.item-subitem-list .pro-box {\r\n    width: 95%;\r\n    overflow: auto;\r\n    height: 280px;\r\n}\r\n\r\n.item-subitem-list li {\r\n    width: 100%;\r\n    float: left;\r\n}\r\n\r\n.item-box {\r\n    max-width: 225px;\r\n    width: 100%;\r\n    float: left;\r\n}\r\n\r\n.sub-item-box {\r\n    width: 100%;\r\n    float: left;\r\n    max-width: 225px;\r\n}\r\n\r\n.sub-item-box .add_to_cart button.btn {\r\n    background: #000064;\r\n    height: 35px;\r\n    font-size: 13px;\r\n    line-height: 16px;\r\n    color: #fff;\r\n    border-radius: 25px;\r\n    margin: 10px 0 0;\r\n    width: 100%;\r\n    text-align: center;\r\n}\r\n\r\n.add_to_cart {\r\n    .remove-btn {\r\n        border-radius: 50%;\r\n        background: #05054ead !important;\r\n        color: #fff;\r\n        height: 35px;\r\n        padding: 0;\r\n    }\r\n    .btn+.btn {\r\n        width: 100%;\r\n        border: 0;\r\n        border-radius: 30px;\r\n        font-size: 15px;\r\n        line-height: normal;\r\n        font-weight: 600;\r\n    }\r\n}\r\n\r\n.middle-arrow {\r\n    float: left;\r\n    width: 30px;\r\n    height: 50px;\r\n    font-size: 40px;\r\n    margin-top: 10%;\r\n    color: #dee2e6;\r\n    text-align: center;\r\n}\r\n\r\n.price-details {\r\n    float: left;\r\n    width: 100%;\r\n    margin-bottom: 10px;\r\n    font-size: 15px;\r\n    line-height: normal;\r\n    font-weight: 600;\r\n    .unit-price {\r\n        float: left;\r\n        width: 42%;\r\n    }\r\n}\r\n\r\n.unit-price span {\r\n    display: block;\r\n    font-size: 12px;\r\n    font-weight: 400;\r\n}\r\n\r\n.whole-sale-price {\r\n    float: right;\r\n    width: 58%;\r\n    text-align: right;\r\n    span {\r\n        font-size: 12px;\r\n        display: block;\r\n        font-weight: 400;\r\n    }\r\n}\r\n\r\n.add_to_cart {\r\n    clear: both;\r\n}\r\n\r\n.subItem-field {\r\n    width: calc(100% - 280px);\r\n    float: left;\r\n}\r\n\r\n.item img {\r\n    width: 100%;\r\n}\r\n\r\n.pro-box.active {\r\n    border: 1px solid #63030c;\r\n}\r\n\r\n.p-details .form-control {\r\n    font-size: 13px;\r\n    padding: 0 5px;\r\n    min-height: 25px;\r\n    height: 25px;\r\n    text-align: center;\r\n}\r\n\r\n.p-details .form-group label {\r\n    margin-bottom: 0;\r\n    font-weight: 400;\r\n    line-height: normal;\r\n    padding-top: 2px;\r\n    padding-bottom: 2px;\r\n}\r\n\r\n.p-details .form-group {\r\n    margin-bottom: 4px;\r\n}\r\n\r\n.sub-item-box img {\r\n    margin-top: 5px !important;\r\n}\r\n\r\n.p-details p {\r\n    font-size: 12px;\r\n    line-height: 14px;\r\n}\r\n\r\n.add-stock input {\r\n    display: inline-block !important;\r\n    width: 60px !important;\r\n    margin-left: 5px;\r\n    vertical-align: middle;\r\n}\r\n\r\n.min-alert-count input {\r\n    width: 35px;\r\n    margin-left: 5px;\r\n    display: inline-block;\r\n    margin-right: 4px;\r\n}\r\n\r\n.d-flex span+span {\r\n    margin-left: auto;\r\n    font-weight: 600;\r\n    width: 60px;\r\n    i {\r\n        font-size: 16px;\r\n        color: #bd2130;\r\n        display: inline-block;\r\n        position: relative;\r\n        top: 2px;\r\n        cursor: pointer;\r\n    }\r\n}\r\n\r\n.sub-item-box .pro-box img {\r\n    height: 55px;\r\n    width: 55px;\r\n    margin: 18px auto 8px;\r\n}\r\n\r\n.links a {\r\n    display: block;\r\n    color: #17a2b8 !important;\r\n    text-decoration: underline !important;\r\n    font-size: 12px;\r\n    cursor: pointer;\r\n}\r\n\r\n.modal-header i {\r\n    margin: 5px 0;\r\n    color: #bd2130;\r\n}\r\n\r\n.field {\r\n    margin-bottom: 10px;\r\n    select {\r\n        border: 1px solid #ddd;\r\n        border-radius: 3px;\r\n        height: 26px;\r\n        font-size: 12px;\r\n        margin-left: 10px;\r\n        margin-top: -4px;\r\n        width: 60px;\r\n    }\r\n}\r\n\r\n.toplevel {\r\n    background: #fff;\r\n    padding: 20px;\r\n    margin-bottom: 15px;\r\n    margin-top: 10px;\r\n    border: 1px solid #ddd;\r\n    border-radius: 5px;\r\n}\r\n\r\n.orderStatus td img {\r\n    max-width: 80px;\r\n}\r\n\r\n.vipDiv {\r\n    background: #f8f9fa;\r\n    padding: 15px;\r\n    border-radius: 3px;\r\n    min-height: 210px;\r\n}\r\n\r\n.orderStatus td {\r\n    vertical-align: middle;\r\n}\r\n\r\n.orderStatus td .btn {\r\n    font-size: 13px;\r\n}\r\n.orderStatus small {\r\n    color: #c50f20;\r\n    font-size: 90%;\r\n    font-weight: 600;\r\n}\r\n\r\n.bottom-btn {\r\n    float: right;\r\n}\r\n\r\n.alert.alert-success {\r\n    padding: 5px 10px;\r\n}\r\n\r\n.alert .fa {\r\n    font-size: 25px;\r\n    vertical-align: middle;\r\n    margin-left: 5px;\r\n}\r\n\r\n.orderStatus {\r\n.card-header {\r\n    border: 0;\r\n}\r\n.card-body {\r\n    padding: 0;\r\n}\r\n}\r\n\r\n.table thead th,\r\n.table tbody td {\r\n    padding: 8px;\r\n    text-align: center;\r\n    line-height: normal;\r\n\r\n}\r\n\r\nh3.head-title {\r\n    font-size: 22px;\r\n    margin: 20px 0;\r\n    font-weight: bold;\r\n}\r\n\r\nlabel.clear {\r\n    display: block;\r\n}\r\n\r\n.save-pdf.btn {\r\n    font-size: 13px;\r\n    float: right;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.row.bank-details {\r\n    margin: 0;\r\n}\r\n\r\n.row.bank-details + .card-body {\r\n    padding-left: 15px;\r\n    padding-right: 15px;\r\n}\r\n\r\n.details-photo {\r\n  max-width: 40px;\r\n  max-height: 40px;\r\n  width: auto;\r\n  height: auto;\r\n  object-fit: contain;\r\n}"] }]
    }], function () { return [{ type: i1.ApiService }, { type: i2.BsModalService }, { type: i3.FormBuilder }, { type: i4.Router }, { type: i5.ToastrService }, { type: i6.NgxSpinnerService }]; }, { macroChildTabset: [{
            type: ViewChild,
            args: ['macroChildTabset']
        }] }); })();
//# sourceMappingURL=account-management.component.js.map