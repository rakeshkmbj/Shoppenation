import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "src/app/services/api.service";
import * as i2 from "ngx-bootstrap/modal";
import * as i3 from "@angular/forms";
import * as i4 from "ngx-spinner";
import * as i5 from "ngx-toastr";
import * as i6 from "@angular/common";
function ManageStoreUserComponent_div_22_tr_24_span_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵelement(1, "img", 34);
    i0.ɵɵelementEnd();
} }
function ManageStoreUserComponent_div_22_tr_24_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 35);
} }
function ManageStoreUserComponent_div_22_tr_24_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
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
    i0.ɵɵelementStart(11, "td", 23);
    i0.ɵɵtemplate(12, ManageStoreUserComponent_div_22_tr_24_span_12_Template, 2, 0, "span", 24);
    i0.ɵɵtemplate(13, ManageStoreUserComponent_div_22_tr_24_ng_template_13_Template, 1, 0, "ng-template", null, 25, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "td")(16, "button", 26);
    i0.ɵɵlistener("click", function ManageStoreUserComponent_div_22_tr_24_Template_button_click_16_listener() { const restoredCtx = i0.ɵɵrestoreView(_r15); const userStore_r9 = restoredCtx.$implicit; const ctx_r14 = i0.ɵɵnextContext(2); const _r4 = i0.ɵɵreference(27); return i0.ɵɵresetView(ctx_r14.openDetails(_r4, userStore_r9.RETAIL_D2C_ACCT_INTRNL_CSTMR_RCNT_PWD, userStore_r9.RETAIL_D2C_ACCT_INTRNL_CSTMR_ADDRESS, userStore_r9.RETAIL_D2C_ACCT_INTRNL_CUSTMR_PHOTO_Path)); });
    i0.ɵɵtext(17, "Detail");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(18, "td", 27);
    i0.ɵɵlistener("click", function ManageStoreUserComponent_div_22_tr_24_Template_td_click_18_listener() { const restoredCtx = i0.ɵɵrestoreView(_r15); const userStore_r9 = restoredCtx.$implicit; const ctx_r16 = i0.ɵɵnextContext(2); const _r6 = i0.ɵɵreference(29); return i0.ɵɵresetView(ctx_r16.getRetailStoresById(_r6, userStore_r9.RETAIL_USR_ID, userStore_r9.RETAIL_STORE_ID)); });
    i0.ɵɵelementStart(19, "span", 28);
    i0.ɵɵelement(20, "i", 29);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(21, "td")(22, "button", 30);
    i0.ɵɵlistener("click", function ManageStoreUserComponent_div_22_tr_24_Template_button_click_22_listener() { const restoredCtx = i0.ɵɵrestoreView(_r15); const userStore_r9 = restoredCtx.$implicit; const ctx_r17 = i0.ɵɵnextContext(2); const _r2 = i0.ɵɵreference(25); return i0.ɵɵresetView(ctx_r17.registerOnMdr(_r2, userStore_r9)); });
    i0.ɵɵtext(23, "Register on MDR");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(24, "td", 31)(25, "span", 32);
    i0.ɵɵlistener("click", function ManageStoreUserComponent_div_22_tr_24_Template_span_click_25_listener() { const restoredCtx = i0.ɵɵrestoreView(_r15); const userStore_r9 = restoredCtx.$implicit; const ctx_r18 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r18.deleteAcc(userStore_r9)); });
    i0.ɵɵelement(26, "i", 33);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const userStore_r9 = ctx.$implicit;
    const i_r10 = ctx.index;
    const _r12 = i0.ɵɵreference(14);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i_r10 + 1);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(userStore_r9.RETAIL_USR_ID);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", userStore_r9.RETAIL_USR_FIRST_NAME, " ", userStore_r9.RETAIL_USR_LAST_NAME, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(userStore_r9.RETAIL_D2C_ACCT_INTRNL_TEAM_MOBL_NUMBR);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", userStore_r9.RETAIL_USR_ROLE_Name, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", userStore_r9.RETAIL_D2C_ACCT_INTRNL_CSTMR_ISACTIV_FLG)("ngIfElse", _r12);
} }
function ManageStoreUserComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 17)(1, "div", 18);
    i0.ɵɵtext(2, " Already Added User(s) ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 19)(4, "table", 20)(5, "thead")(6, "tr")(7, "th");
    i0.ɵɵtext(8, "Sr. No.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "th");
    i0.ɵɵtext(10, "User ID");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "th");
    i0.ɵɵtext(12, "Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "th");
    i0.ɵɵtext(14, "Mobile");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "th");
    i0.ɵɵtext(16, "Role of User");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "th");
    i0.ɵɵtext(18, "Status");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "th");
    i0.ɵɵtext(20, "Details");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "th", 21);
    i0.ɵɵtext(22, "Action");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(23, "tbody");
    i0.ɵɵtemplate(24, ManageStoreUserComponent_div_22_tr_24_Template, 27, 8, "tr", 22);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(24);
    i0.ɵɵproperty("ngForOf", ctx_r0.userStoreList);
} }
function ManageStoreUserComponent_div_23_tr_24_img_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 38);
    i0.ɵɵpipe(1, "slice");
} if (rf & 2) {
    const user_r20 = i0.ɵɵnextContext().$implicit;
    const ctx_r22 = i0.ɵɵnextContext(2);
    i0.ɵɵpropertyInterpolate2("src", "", ctx_r22.imgURL, "", i0.ɵɵpipeBind3(1, 2, user_r20.RETAIL_D2C_ACCT_INTERNAL_CUSTMR_PHOTO, 1, -4), "jpeg", i0.ɵɵsanitizeUrl);
} }
function ManageStoreUserComponent_div_23_tr_24_Template(rf, ctx) { if (rf & 1) {
    const _r25 = i0.ɵɵgetCurrentView();
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
    i0.ɵɵelementStart(11, "td");
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "td", 28);
    i0.ɵɵtemplate(14, ManageStoreUserComponent_div_23_tr_24_img_14_Template, 2, 6, "img", 36);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "td", 31)(16, "span", 32);
    i0.ɵɵlistener("click", function ManageStoreUserComponent_div_23_tr_24_Template_span_click_16_listener() { const restoredCtx = i0.ɵɵrestoreView(_r25); const user_r20 = restoredCtx.$implicit; const ctx_r24 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r24.deleteAcc(user_r20)); });
    i0.ɵɵelement(17, "i", 37);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const user_r20 = ctx.$implicit;
    const i_r21 = ctx.index;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i_r21 + 1);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(user_r20.RETAIL_D2C_ACCT_INTERNAL_USER_ID);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", user_r20.RETAIL_D2C_ACCT_INTERNAL_FIRST_NAME, " ", user_r20.RETAIL_D2C_ACCT_INTERNAL_LAST_NAME, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(user_r20.RETAIL_D2C_ACCT_USR_EMAIL_ID);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(user_r20.RETAIL_D2C_CUSTOMER_REGISTRO_PRIMARY_MOBIL_NUMBER);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(user_r20.RETAIL_D2C_CUSTOMER_REGISTERD_PASS_PASSWORD);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", user_r20.RETAIL_D2C_ACCT_INTERNAL_CUSTMR_PHOTO);
} }
function ManageStoreUserComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 17)(1, "div", 18);
    i0.ɵɵtext(2, " MDR Registered User(s) ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 19)(4, "table", 20)(5, "thead")(6, "tr")(7, "th");
    i0.ɵɵtext(8, "Sr. No.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "th");
    i0.ɵɵtext(10, "User ID");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "th");
    i0.ɵɵtext(12, "Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "th");
    i0.ɵɵtext(14, "Email");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "th");
    i0.ɵɵtext(16, "Mobile");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "th");
    i0.ɵɵtext(18, "Password");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "th");
    i0.ɵɵtext(20, "PIC");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "th");
    i0.ɵɵtext(22, "Action");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(23, "tbody");
    i0.ɵɵtemplate(24, ManageStoreUserComponent_div_23_tr_24_Template, 18, 8, "tr", 22);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(24);
    i0.ɵɵproperty("ngForOf", ctx_r1.mdrRegistedUserList);
} }
function ManageStoreUserComponent_ng_template_24_Template(rf, ctx) { if (rf & 1) {
    const _r27 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 39)(1, "h4", 40);
    i0.ɵɵtext(2, "Register On MDR App");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 41);
    i0.ɵɵlistener("click", function ManageStoreUserComponent_ng_template_24_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r27); const ctx_r26 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r26.modalRef.hide()); });
    i0.ɵɵelementStart(4, "span", 42);
    i0.ɵɵtext(5, "\u00D7");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(6, "div", 43)(7, "div", 44)(8, "div", 7)(9, "label");
    i0.ɵɵtext(10, "User Mobile Number:\u00A0");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "span");
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(13, "div", 1)(14, "div", 45)(15, "button", 46);
    i0.ɵɵlistener("click", function ManageStoreUserComponent_ng_template_24_Template_button_click_15_listener() { i0.ɵɵrestoreView(_r27); const ctx_r28 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r28.registerToMDR(ctx_r28.slectedUserStore)); });
    i0.ɵɵtext(16, "Register Users On MDR App");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(12);
    i0.ɵɵtextInterpolate(ctx_r3.slectedUserStore.RETAIL_D2C_ACCT_INTRNL_TEAM_MOBL_NUMBR);
} }
function ManageStoreUserComponent_ng_template_26_Template(rf, ctx) { if (rf & 1) {
    const _r30 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 39)(1, "h4", 40);
    i0.ɵɵtext(2, "Shoppenation Detail");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 41);
    i0.ɵɵlistener("click", function ManageStoreUserComponent_ng_template_26_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r30); const ctx_r29 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r29.modalRef.hide()); });
    i0.ɵɵelementStart(4, "span", 42);
    i0.ɵɵtext(5, "\u00D7");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(6, "div", 43)(7, "div", 44)(8, "div", 47)(9, "label");
    i0.ɵɵtext(10, "Photo:");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(11, "img", 48);
    i0.ɵɵpipe(12, "slice");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "div", 47)(14, "label");
    i0.ɵɵtext(15, "Password:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "span");
    i0.ɵɵtext(17);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(18, "div", 47)(19, "label");
    i0.ɵɵtext(20, "Address:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "span");
    i0.ɵɵtext(22);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵadvance(11);
    i0.ɵɵproperty("src", ctx_r5.imgURL + i0.ɵɵpipeBind3(12, 3, ctx_r5.selectedPhoto, 1, -4) + "jpeg", i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r5.selectedPassword);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r5.selectedAddress);
} }
function ManageStoreUserComponent_ng_template_28_div_26_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "Mobile is required ");
    i0.ɵɵelementEnd();
} }
function ManageStoreUserComponent_ng_template_28_div_26_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "Mobile must be 10 characters");
    i0.ɵɵelementEnd();
} }
function ManageStoreUserComponent_ng_template_28_div_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 80);
    i0.ɵɵtemplate(1, ManageStoreUserComponent_ng_template_28_div_26_div_1_Template, 2, 0, "div", 81);
    i0.ɵɵtemplate(2, ManageStoreUserComponent_ng_template_28_div_26_div_2_Template, 2, 0, "div", 81);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r31 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r31.f1.RETAIL_D2C_ACCT_INTRNL_TEAM_MOBL_NUMBR.errors.required);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r31.f1.RETAIL_D2C_ACCT_INTRNL_TEAM_MOBL_NUMBR.errors.minlength);
} }
function ManageStoreUserComponent_ng_template_28_div_32_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "Email is required");
    i0.ɵɵelementEnd();
} }
function ManageStoreUserComponent_ng_template_28_div_32_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "Email must be a valid email address");
    i0.ɵɵelementEnd();
} }
function ManageStoreUserComponent_ng_template_28_div_32_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 80);
    i0.ɵɵtemplate(1, ManageStoreUserComponent_ng_template_28_div_32_div_1_Template, 2, 0, "div", 81);
    i0.ɵɵtemplate(2, ManageStoreUserComponent_ng_template_28_div_32_div_2_Template, 2, 0, "div", 81);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r32 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r32.f1.RETAIL_USR_EMAIL_ID.errors.required);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r32.f1.RETAIL_USR_EMAIL_ID.errors.email);
} }
function ManageStoreUserComponent_ng_template_28_div_33_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 50)(1, "div", 7)(2, "label");
    i0.ɵɵtext(3, "Password");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "input", 82);
    i0.ɵɵelementEnd()();
} }
function ManageStoreUserComponent_ng_template_28_option_59_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 83);
    i0.ɵɵtext(1, "SFA TERITIARY SALES");
    i0.ɵɵelementEnd();
} }
function ManageStoreUserComponent_ng_template_28_option_60_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 84);
    i0.ɵɵtext(1, "SFA SECONDARY SALES");
    i0.ɵɵelementEnd();
} }
function ManageStoreUserComponent_ng_template_28_option_61_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 85);
    i0.ɵɵtext(1, "SFA MANUFACTURER PURCHASE");
    i0.ɵɵelementEnd();
} }
function ManageStoreUserComponent_ng_template_28_div_79_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 86);
    i0.ɵɵelementContainerStart(1);
    i0.ɵɵelement(2, "img", 87);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r37 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("src", "data:image/jpeg;base64," + ctx_r37.base64textString, i0.ɵɵsanitizeUrl);
} }
function ManageStoreUserComponent_ng_template_28_div_89_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 86);
    i0.ɵɵelementContainerStart(1);
    i0.ɵɵelement(2, "img", 87);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r38 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("src", "data:image/jpeg;base64," + ctx_r38.base64textString1, i0.ɵɵsanitizeUrl);
} }
function ManageStoreUserComponent_ng_template_28_button_92_Template(rf, ctx) { if (rf & 1) {
    const _r46 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 46);
    i0.ɵɵlistener("click", function ManageStoreUserComponent_ng_template_28_button_92_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r46); const ctx_r45 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r45.EditStoreUsers()); });
    i0.ɵɵtext(1, "Update User Details");
    i0.ɵɵelementEnd();
} }
function ManageStoreUserComponent_ng_template_28_button_93_Template(rf, ctx) { if (rf & 1) {
    const _r48 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 46);
    i0.ɵɵlistener("click", function ManageStoreUserComponent_ng_template_28_button_93_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r48); const ctx_r47 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r47.addStoreUser()); });
    i0.ɵɵtext(1, "Save User Details");
    i0.ɵɵelementEnd();
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
function ManageStoreUserComponent_ng_template_28_Template(rf, ctx) { if (rf & 1) {
    const _r50 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 39)(1, "h4", 40);
    i0.ɵɵtext(2);
    i0.ɵɵelementStart(3, "span", 49);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "button", 41);
    i0.ɵɵlistener("click", function ManageStoreUserComponent_ng_template_28_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r50); const ctx_r49 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r49.modalRef.hide()); });
    i0.ɵɵelementStart(6, "span", 42);
    i0.ɵɵtext(7, "\u00D7");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(8, "div", 43)(9, "form", 4)(10, "div", 1)(11, "div", 50)(12, "div", 7)(13, "label");
    i0.ɵɵtext(14, "First Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(15, "input", 51);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "div", 50)(17, "div", 7)(18, "label");
    i0.ɵɵtext(19, "Last Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(20, "input", 52);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(21, "div", 50)(22, "div", 7)(23, "label");
    i0.ɵɵtext(24, "Mobile Number");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(25, "input", 53);
    i0.ɵɵtemplate(26, ManageStoreUserComponent_ng_template_28_div_26_Template, 3, 2, "div", 54);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(27, "div", 50)(28, "div", 7)(29, "label");
    i0.ɵɵtext(30, "Email Id");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(31, "input", 55);
    i0.ɵɵtemplate(32, ManageStoreUserComponent_ng_template_28_div_32_Template, 3, 2, "div", 54);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(33, ManageStoreUserComponent_ng_template_28_div_33_Template, 5, 0, "div", 56);
    i0.ɵɵelementStart(34, "div", 50)(35, "div", 7)(36, "label");
    i0.ɵɵtext(37, "Role Allocated");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(38, "select", 57);
    i0.ɵɵlistener("change", function ManageStoreUserComponent_ng_template_28_Template_select_change_38_listener($event) { i0.ɵɵrestoreView(_r50); const ctx_r51 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r51.onRoleChange($event)); });
    i0.ɵɵelementStart(39, "option", 58);
    i0.ɵɵtext(40, "Select");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(41, "option", 59);
    i0.ɵɵtext(42, "Super Admin");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(43, "option", 60);
    i0.ɵɵtext(44, "Admin");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(45, "option", 61);
    i0.ɵɵtext(46, "Store Delivery POS Incharge");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(47, "option", 62);
    i0.ɵɵtext(48, "Store Order Packaging Incharge");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(49, "option", 63);
    i0.ɵɵtext(50, "Store Inventory Incharge");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(51, "option", 64);
    i0.ɵɵtext(52, "Finncial Accounts Incharge");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(53, "option", 65);
    i0.ɵɵtext(54, "DATA SOURCE MAKER");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(55, "option", 66);
    i0.ɵɵtext(56, "DATA CHECKER");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(57, "option", 67);
    i0.ɵɵtext(58, "DATA PUBLISHER");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(59, ManageStoreUserComponent_ng_template_28_option_59_Template, 2, 0, "option", 68);
    i0.ɵɵtemplate(60, ManageStoreUserComponent_ng_template_28_option_60_Template, 2, 0, "option", 69);
    i0.ɵɵtemplate(61, ManageStoreUserComponent_ng_template_28_option_61_Template, 2, 0, "option", 70);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(62, "div", 1)(63, "h4", 71);
    i0.ɵɵtext(64, "Other Details");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(65, "div", 2)(66, "div", 7)(67, "label");
    i0.ɵɵtext(68, "Resistent Address");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(69, "input", 72);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(70, "div", 73)(71, "div", 7)(72, "fieldset", 7)(73, "label");
    i0.ɵɵtext(74, "Attach User Photo");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(75, "div", 74)(76, "input", 75);
    i0.ɵɵlistener("change", function ManageStoreUserComponent_ng_template_28_Template_input_change_76_listener($event) { i0.ɵɵrestoreView(_r50); const ctx_r52 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r52.onSelectedFile($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(77, "label", 76);
    i0.ɵɵtext(78);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(79, ManageStoreUserComponent_ng_template_28_div_79_Template, 3, 1, "div", 77);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(80, "div", 73)(81, "div", 7)(82, "fieldset", 7)(83, "label");
    i0.ɵɵtext(84, "Attach Govt. ID Photo Card");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(85, "div", 74)(86, "input", 78);
    i0.ɵɵlistener("change", function ManageStoreUserComponent_ng_template_28_Template_input_change_86_listener($event) { i0.ɵɵrestoreView(_r50); const ctx_r53 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r53.onSelectedFile1($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(87, "label", 76);
    i0.ɵɵtext(88);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(89, ManageStoreUserComponent_ng_template_28_div_89_Template, 3, 1, "div", 77);
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(90, "div", 1)(91, "div", 45);
    i0.ɵɵtemplate(92, ManageStoreUserComponent_ng_template_28_button_92_Template, 2, 0, "button", 79);
    i0.ɵɵtemplate(93, ManageStoreUserComponent_ng_template_28_button_93_Template, 2, 0, "button", 79);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r7.editMode != true ? "Add Store User" : "Update Store User", " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Store Id: ", ctx_r7.storeid, "");
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("formGroup", ctx_r7.addStoreUserForm);
    i0.ɵɵadvance(16);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(17, _c0, ctx_r7.submitted1 && ctx_r7.f1.RETAIL_D2C_ACCT_INTRNL_TEAM_MOBL_NUMBR.errors));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r7.submitted1 && ctx_r7.f1.RETAIL_D2C_ACCT_INTRNL_TEAM_MOBL_NUMBR.errors);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(19, _c0, ctx_r7.submitted1 && ctx_r7.f1.RETAIL_USR_EMAIL_ID.errors));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r7.submitted1 && ctx_r7.f1.RETAIL_USR_EMAIL_ID.errors);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r7.ispassword);
    i0.ɵɵadvance(26);
    i0.ɵɵproperty("ngIf", ctx_r7.SECONDRY_SELLER_FLG == true);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r7.PRIMARY_SELLER_FLG == true);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r7.SECONDRY_SELLER_FLG == true || ctx_r7.TERITIARY_SELLER_FLG == true);
    i0.ɵɵadvance(17);
    i0.ɵɵtextInterpolate(ctx_r7.uploadLabel);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r7.isImageSaved);
    i0.ɵɵadvance(9);
    i0.ɵɵtextInterpolate(ctx_r7.uploadLabel1);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r7.isImageSaved1);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r7.editMode);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r7.editMode);
} }
export class ManageStoreUserComponent {
    constructor(apiService, modalService, formBuilder, spinner, toastr) {
        this.apiService = apiService;
        this.modalService = modalService;
        this.formBuilder = formBuilder;
        this.spinner = spinner;
        this.toastr = toastr;
        this.imgURL = this.apiService.imgURL;
        this.uploadLabel = "";
        this.uploadLabel1 = "";
        this.showuserStore = false;
        this.submitted = false;
        this.submitted1 = false;
        this.ispassword = false;
        this.editMode = false;
        this.accountid = this.apiService.requiredLoginData.accountid;
        this.subaccountid = this.apiService.requiredLoginData.subaccountid;
        this.storeid = this.apiService.requiredLoginData.storeid;
        this.storeName = this.apiService.requiredLoginData.storeName;
        this.domainid = this.apiService.requiredLoginData.domainid;
        this.PRIMARY_SELLER_FLG = this.apiService.requiredLoginData.PRIMARY_SELLER_FLG;
        this.SECONDRY_SELLER_FLG = this.apiService.requiredLoginData.SECONDRY_SELLER_FLG;
        this.TERITIARY_SELLER_FLG = this.apiService.requiredLoginData.TERITIARY_SELLER_FLG;
        console.log("PRIMARY_SELLER_FLG: ", this.PRIMARY_SELLER_FLG);
        console.log("SECONDRY_SELLER_FLG: ", this.SECONDRY_SELLER_FLG);
        console.log("TERITIARY_SELLER_FLG: ", this.TERITIARY_SELLER_FLG);
    }
    ngOnInit() {
        this.getStoreList();
        this.uploadLabel = "No file choosen";
        this.uploadLabel1 = "No file choosen";
        this.storeUserForm = this.formBuilder.group({
            SUBACCT_OFFICE_ID: ['', Validators.required],
            RETAIL_D2C_PRODUCT_ID: ['', Validators.required],
        });
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
    }
    get f() { return this.storeUserForm.controls; }
    get f1() { return this.addStoreUserForm.controls; }
    getStoreList() {
        this.apiService.storeList().subscribe((data) => {
            this.storelist = data;
            console.log(this.storelist);
        });
    }
    getMRDUserList() {
        const payload = {
            Login_SubAcctid: this.subaccountid,
            Login_Storeid: this.storeid
        };
        this.spinner.show();
        this.apiService.postCall(this.apiService.baseURL + '/Get-MDR-RegisteredUsers', payload)
            .subscribe(data => {
            this.showMdrRegistedUserList = true;
            this.showuserStore = false;
            this.mdrRegistedUserList = data.MDR_Reg_List || [];
            console.log(this.mdrRegistedUserList);
        }, (error) => {
            this.toastr.error(error, '', {
                timeOut: 5000,
            });
        });
        this.spinner.hide();
    }
    getUserStoreList() {
        this.showMdrRegistedUserList = false;
        this.showuserStore = true;
        this.spinner.show();
        // console.log(this.apiService.baseURL + '/GetRetailStoresByAccountSubAccount/' + this.accountid + "/" + this.subaccountid + "/" + this.storeid);
        this.apiService.getCall(this.apiService.baseURL + '/GetRetailStoresByAccountSubAccount/' + this.accountid + "/" + this.subaccountid + "/" + this.storeid)
            .subscribe(data => {
            this.userStoreList = data;
            console.log(data);
            this.spinner.hide();
        }, (error) => {
            this.toastr.error(error, '', {
                timeOut: 5000,
            });
            this.spinner.hide();
        });
        //}
    }
    openModal(addStoreUserModal) {
        this.submitted = true;
        this.editMode = false;
        // this.emptyInput = this.storeUserForm.value.SUBACCT_OFFICE_ID;
        //  if( this.emptyInput != ""){
        this.modalRef = this.modalService.show(addStoreUserModal, Object.assign({}, { class: 'width-720' }));
        // }
    }
    openSmallModal(addStoreUserModal) {
        this.submitted = true;
        this.editMode = false;
        this.modalRef = this.modalService.show(addStoreUserModal, Object.assign({}, { class: 'width-480' }));
        // }
    }
    openDetails(template, pass, address, photo) {
        this.selectedPassword = pass;
        this.selectedAddress = address;
        this.selectedPhoto = photo;
        this.openSmallModal(template);
    }
    registerOnMdr(template, store) {
        this.slectedUserStore = store;
        this.openSmallModal(template);
    }
    registerToMDR(store) {
        const payload = {
            User_Mobileno: store.RETAIL_D2C_ACCT_INTRNL_TEAM_MOBL_NUMBR,
            MDR_Main_SubAcctid: "6139",
            MDR_Main_StoreId: "60134",
            Login_SubAcctid: this.subaccountid,
            Login_Storeid: this.storeid,
            MDR_System_Flg: true
        };
        console.log("Payload: ", payload);
        this.apiService.postCall(this.apiService.baseURL + '/register', payload)
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
    deleteAcc(store) {
        const payload = {
            User_Mobileno: store.RETAIL_D2C_ACCT_INTRNL_TEAM_MOBL_NUMBR,
            Login_SubAcctid: this.subaccountid,
            Login_Storeid: this.storeid
        };
        this.apiService.postCall(this.apiService.baseURL + '/Delete-User-MDR-MyloginAccount', payload)
            .subscribe(data => {
            console.log(data);
            this.toastr.success(data);
        }, (error) => {
            this.toastr.error(error, '', {
                timeOut: 5000,
            });
        });
        this.getUserStoreList();
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
    onRoleChange(e) {
        // this.roleID = this.addStoreUserForm.value.RETAIL_USR_ROLE;
        this.roleName = e.target.options[e.target.options.selectedIndex].text;
        console.log(this.roleName);
    }
    addStoreUser() {
        let addStoreUserData = {
            RETAIL_ACCOUNT_ID: +this.accountid,
            RETAIL_SUBACCOUNT_ID: +this.subaccountid,
            RETAIl_STORE_ID: +this.storeid,
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
            this.getUserStoreList();
        }, (error) => {
            console.log(error);
            this.toastr.error(error.Message, '', {
                timeOut: 5000,
            });
        });
    }
    getRetailStoresById(addStoreUserModal, userID, storeID) {
        this.userID = userID;
        this.ispassword = true;
        this.editMode = true;
        this.apiService.getCall(this.apiService.baseURL + '/GetRetailStoresById/' + userID + "/" + this.subaccountid + "/" + storeID)
            .subscribe(data => {
            this.retiailStoreData = data;
            this.cstmrActiveFlag = data.RETAIL_D2C_ACCT_INTRNL_CSTMR_ISACTIV_FLG;
            console.log(data);
            this.modalRef = this.modalService.show(addStoreUserModal, Object.assign({}, { class: 'width-720' }));
            this.isImageSaved = true;
            this.imagePath = data.RETAIL_D2C_ACCT_INTRNL_CUSTMR_PHOTO_Path.substring(2);
            let imgurl = this.imgURL + this.imagePath;
            fetch(imgurl)
                .then(response => response.blob())
                .then(File => {
                var reader = new FileReader();
                reader.onload = (e) => {
                    const imgBase64Path = e.target.result;
                    this.base64textString = imgBase64Path.substring(23);
                };
                reader.readAsDataURL(File);
            });
            this.addStoreUserForm.patchValue({
                RETAIL_USR_FIRST_NAME: data.RETAIL_USR_FIRST_NAME,
                RETAIL_USR_LAST_NAME: data.RETAIL_USR_LAST_NAME,
                RETAIL_USR_ROLE: data.RETAIL_USR_ROLE,
                RETAIL_USR_EMAIL_ID: data.RETAIL_USR_EMAIL_ID,
                RETAIL_D2C_ACCT_INTRNL_CSTMR_ADDRESS: data.RETAIL_D2C_ACCT_INTRNL_CSTMR_ADDRESS,
                RETAIL_D2C_ACCT_INTRNL_CUSTMR_PHOTO: data.RETAIL_D2C_ACCT_INTRNL_CUSTMR_PHOTO,
                RETAIL_D2C_ACCT_INTRNL_CUSTMR_PHOTO_Path: data.RETAIL_D2C_ACCT_INTRNL_CUSTMR_PHOTO_Path,
                RETAIL_D2C_ACCT_INTRNL_TEAM_MOBL_NUMBR: data.RETAIL_D2C_ACCT_INTRNL_TEAM_MOBL_NUMBR,
                RETAIL_D2C_ACCT_INTRNL_CSTMR_RCNT_PWD: data.RETAIL_D2C_ACCT_INTRNL_CSTMR_RCNT_PWD,
                RETAIL_D2C_ACCT_INTRNL_CUSTMR_KYC_PHOTO_ID: data.RETAIL_D2C_ACCT_INTRNL_CUSTMR_KYC_PHOTO_ID,
            });
            this.isImageSaved = true;
        }, (error) => {
            this.toastr.error(error.error.Message, '', {
                timeOut: 5000,
            });
        });
    }
    EditStoreUsers() {
        let editStoreUserData = {
            RETAIL_ACCOUNT_ID: this.accountid,
            RETAIL_SUBACCOUNT_ID: this.subaccountid,
            RETAIL_STORE_ID: +this.storeid,
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
        this.apiService.postCall(this.apiService.baseURL + '/EditStoreUsers', editStoreUserData)
            .subscribe(data => {
            this.toastr.success('Update Successfully', '', { timeOut: 5000, });
            this.modalRef.hide();
            this.getUserStoreList();
        }, (error) => {
            this.toastr.error(error.error.Message, '', {
                timeOut: 5000,
            });
        });
    }
}
ManageStoreUserComponent.ɵfac = function ManageStoreUserComponent_Factory(t) { return new (t || ManageStoreUserComponent)(i0.ɵɵdirectiveInject(i1.ApiService), i0.ɵɵdirectiveInject(i2.BsModalService), i0.ɵɵdirectiveInject(i3.FormBuilder), i0.ɵɵdirectiveInject(i4.NgxSpinnerService), i0.ɵɵdirectiveInject(i5.ToastrService)); };
ManageStoreUserComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ManageStoreUserComponent, selectors: [["app-manage-store-user"]], decls: 31, vars: 4, consts: [[1, "main-content-area"], [1, "row"], [1, "col-md-12"], [1, "heading-title"], [3, "formGroup"], [1, "topLevel"], [1, "col-md-9"], [1, "form-group"], [1, "form-control", "form-level", "no-border"], [1, "col-md-9", "mt-1"], [1, "btn", "custom-btn", "float-right", 3, "click"], ["type", "button", 1, "btn", "btn-secondary", "float-right", "mr-2", 3, "click"], ["class", "card exiting-office-table mt-2 pb-0", 4, "ngIf"], ["registerMDR", ""], ["showDetails", ""], ["addStoreUserModal", ""], ["template", "<img src='assets/images/icons/please_wait.gif' />"], [1, "card", "exiting-office-table", "mt-2", "pb-0"], [1, "card-header"], [1, "card-body", "pa-0"], [1, "table"], ["colspan", "3"], [4, "ngFor", "ngForOf"], [1, "actdct_icon"], [4, "ngIf", "ngIfElse"], ["elseBlock", ""], [1, "btn", "btn-sm", "btn-outline-info", 3, "click"], [1, "delete-icon", 3, "click"], [1, "icon"], [1, "fa", "fa-edit"], [1, "btn", "custom-btn", 3, "click"], [1, "delete-icon"], [1, "icon", 3, "click"], [1, "fa", "fa", "fa-trash"], ["src", "assets/images/active_icon1.png"], ["src", "assets/images/deactive_icon.png"], ["alt", "User Photo", "width", "60", 3, "src", 4, "ngIf"], [1, "fa", "fa-trash"], ["alt", "User Photo", "width", "60", 3, "src"], [1, "modal-header"], [1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "details-container"], [1, "col-md-12", "mt-2"], ["type", "button", 1, "btn", "custom-btn", "float-right", 3, "click"], [1, "details-row"], ["alt", "Profile Photo", 1, "details-photo", 3, "src"], [1, "small"], [1, "col-md-4"], ["type", "text", "formControlName", "RETAIL_USR_FIRST_NAME", 1, "form-control"], ["type", "text", "formControlName", "RETAIL_USR_LAST_NAME", 1, "form-control"], ["type", "text", "maxlength", "10", "formControlName", "RETAIL_D2C_ACCT_INTRNL_TEAM_MOBL_NUMBR", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "text", "formControlName", "RETAIL_USR_EMAIL_ID", 1, "form-control", 3, "ngClass"], ["class", "col-md-4", 4, "ngIf"], ["formControlName", "RETAIL_USR_ROLE", 1, "form-control", 3, "change"], ["value", "Select"], ["value", "1"], ["value", "2"], ["value", "3"], ["value", "4"], ["value", "5"], ["value", "6"], ["value", "51"], ["value", "52"], ["value", "53"], ["value", "15", 4, "ngIf"], ["value", "16", 4, "ngIf"], ["value", "17", 4, "ngIf"], [1, "mb-2", "pl-3"], ["type", "text", "formControlName", "RETAIL_D2C_ACCT_INTRNL_CSTMR_ADDRESS", 1, "form-control"], [1, "col-md-6"], [1, "custom-file", "fileInputProfileWrap"], ["formControlName", "RETAIL_D2C_ACCT_INTRNL_CUSTMR_PHOTO", "name", "file", "id", "DomainImage", "type", "file", 1, "custom-file-input", 3, "change"], [1, "custom-file-label"], ["class", "img-space", 4, "ngIf"], ["formControlName", "RETAIL_D2C_ACCT_INTRNL_CUSTMR_KYC_PHOTO_ID", "name", "file", "type", "file", 1, "custom-file-input", 3, "change"], ["type", "button", "class", "btn custom-btn float-right", 3, "click", 4, "ngIf"], [1, "invalid-feedback"], [4, "ngIf"], ["type", "text", "formControlName", "RETAIL_D2C_ACCT_INTRNL_CSTMR_RCNT_PWD", 1, "form-control"], ["value", "15"], ["value", "16"], ["value", "17"], [1, "img-space"], [3, "src"]], template: function ManageStoreUserComponent_Template(rf, ctx) { if (rf & 1) {
        const _r54 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
        i0.ɵɵtext(4, "Manage my Store Users");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(5, "form", 4)(6, "div", 5)(7, "div", 1)(8, "div", 6)(9, "div", 7)(10, "label");
        i0.ɵɵtext(11, "Store");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "div", 8);
        i0.ɵɵtext(13);
        i0.ɵɵelementEnd()()()();
        i0.ɵɵelementStart(14, "div", 1)(15, "div", 9)(16, "button", 10);
        i0.ɵɵlistener("click", function ManageStoreUserComponent_Template_button_click_16_listener() { i0.ɵɵrestoreView(_r54); const _r6 = i0.ɵɵreference(29); return i0.ɵɵresetView(ctx.openModal(_r6)); });
        i0.ɵɵtext(17, "Add new User of Store");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(18, "button", 11);
        i0.ɵɵlistener("click", function ManageStoreUserComponent_Template_button_click_18_listener() { return ctx.getMRDUserList(); });
        i0.ɵɵtext(19, "Display MDR App Users");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(20, "button", 11);
        i0.ɵɵlistener("click", function ManageStoreUserComponent_Template_button_click_20_listener() { return ctx.getUserStoreList(); });
        i0.ɵɵtext(21, "Display Users of Store");
        i0.ɵɵelementEnd()()()()();
        i0.ɵɵtemplate(22, ManageStoreUserComponent_div_22_Template, 25, 1, "div", 12);
        i0.ɵɵtemplate(23, ManageStoreUserComponent_div_23_Template, 25, 1, "div", 12);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(24, ManageStoreUserComponent_ng_template_24_Template, 17, 1, "ng-template", null, 13, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(26, ManageStoreUserComponent_ng_template_26_Template, 23, 7, "ng-template", null, 14, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(28, ManageStoreUserComponent_ng_template_28_Template, 94, 21, "ng-template", null, 15, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵelement(30, "ngx-spinner", 16);
    } if (rf & 2) {
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("formGroup", ctx.storeUserForm);
        i0.ɵɵadvance(8);
        i0.ɵɵtextInterpolate1(" ", ctx.storeName, " ");
        i0.ɵɵadvance(9);
        i0.ɵɵproperty("ngIf", ctx.showuserStore);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.showMdrRegistedUserList);
    } }, dependencies: [i6.NgClass, i6.NgForOf, i6.NgIf, i3.ɵNgNoValidate, i3.NgSelectOption, i3.ɵNgSelectMultipleOption, i3.DefaultValueAccessor, i3.SelectControlValueAccessor, i3.NgControlStatus, i3.NgControlStatusGroup, i3.MaxLengthValidator, i3.FormGroupDirective, i3.FormControlName, i4.NgxSpinnerComponent, i6.SlicePipe], styles: [".details-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 12px; \r\n  width: 100%;\r\n  padding: 10px 0;\r\n}\r\n\r\n\r\n.details-row[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  border-bottom: 1px solid #f0f0f0;\r\n  padding: 6px 0;\r\n}\r\n\r\n.details-row[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  flex: 0 0 50%; \r\n  font-weight: 600;\r\n  color: #333;\r\n  font-size: 0.9rem;\r\n}\r\n\r\n.details-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  flex: 1;\r\n  text-align: right;\r\n  color: #555;\r\n  font-size: 0.9rem;\r\n}\r\n\r\n.details-photo[_ngcontent-%COMP%] {\r\n  height: 80px;      \r\n  width: auto;       \r\n  object-fit: cover;\r\n}\r\n\r\n\r\n.heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    padding: 10px 5px 10px;\r\n    font-size: 20px;\r\n}\r\n\r\n.topLevel[_ngcontent-%COMP%] {\r\n    background: #fff;\r\n    padding: 20px;\r\n    margin: 0;\r\n    border-radius: 5px;\r\n}\r\n\r\n.custom-file[_ngcontent-%COMP%] {\r\n     height: 100%;\r\n}\r\n\r\nh1.heading-title[_ngcontent-%COMP%] {\r\n  \r\n\r\n    span {\r\n        font-size: 10px;\r\n        text-transform: inherit;\r\n        background: #495057;\r\n        color: #fff;\r\n        padding: 10px 15px;\r\n        border-radius: 25px;\r\n    }\r\n}\r\n\r\nh1.heading-title[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    max-width: 65px;\r\n    margin-right: 5px;\r\n}\r\n\r\nh1.heading-title[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    font-weight: 400;\r\n    font-size: 13px;\r\n    position: absolute;\r\n    left: 80px;\r\n    bottom: 4px;\r\n    color: grey;\r\n}\r\n\r\n\r\n\r\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    padding: 5px;\r\n    line-height: 18px;\r\n}\r\n\r\ntd.actdct_icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    max-width: 25px;\r\n}\r\n\r\n.search-list-label[_ngcontent-%COMP%] {\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%] {\r\n    font-size: 14px;\r\n    min-height: 36px;\r\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ManageStoreUserComponent, [{
        type: Component,
        args: [{ selector: 'app-manage-store-user', template: "<div class=\"main-content-area\">\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <h1 class=\"heading-title\">Manage my Store Users</h1>\n        </div>\n    </div>\n    <form [formGroup]=\"storeUserForm\">\n        <div class=\"topLevel\">\n            <div class=\"row\">\n                <div class=\"col-md-9\">\n\n                    <div class=\"form-group\">\n                        <label>Store</label>\n                        <div class=\"form-control form-level no-border\">\n                            {{storeName}}\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n\n                <div class=\"col-md-9 mt-1\">\n                    <button (click)=\"openModal(addStoreUserModal)\" class=\"btn custom-btn float-right\">Add new User of\n                        Store</button>\n                    <button (click)=\"getMRDUserList()\" type=\"button\" class=\"btn btn-secondary float-right mr-2\">Display\n                        MDR App Users</button>\n                    <button (click)=\"getUserStoreList()\" type=\"button\"\n                        class=\"btn btn-secondary float-right mr-2\">Display Users of Store</button>\n                </div>\n            </div>\n        </div>\n    </form>\n\n    <div *ngIf=\"showuserStore\" class=\"card exiting-office-table mt-2 pb-0\">\n        <div class=\"card-header\">\n            Already Added User(s)\n        </div>\n        <div class=\"card-body pa-0\">\n            <table class=\"table\">\n                <thead>\n                    <tr>\n                        <th>Sr. No.</th>\n                        <th>User ID</th>\n                        <th>Name</th>\n                        <th>Mobile</th>\n                        <th>Role of User</th>\n                        <th>Status</th>\n                        <th>Details</th>\n                        <!-- <th>Password</th>\n                        <th>Address</th> -->\n                        <!-- <th>Photo</th> -->\n                        <th colspan=\"3\">Action</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let userStore of userStoreList; index as i\">\n                        <td>{{i+1}}</td>\n                        <td>{{userStore.RETAIL_USR_ID}}</td>\n                        <td>{{userStore.RETAIL_USR_FIRST_NAME}} {{userStore.RETAIL_USR_LAST_NAME}}</td>\n                        <td>{{userStore.RETAIL_D2C_ACCT_INTRNL_TEAM_MOBL_NUMBR}}</td>\n                        <td>{{userStore.RETAIL_USR_ROLE_Name}}\n                            <!-- <span *ngIf=\"userStore.RETAIL_USR_ROLE == 1\">Admin</span>\n                  <span *ngIf=\"userStore.RETAIL_USR_ROLE == 2\">Super Admin</span>\n                  <span *ngIf=\"userStore.RETAIL_USR_ROLE == 3\">Delivery POS Incharge</span>\n                  <span *ngIf=\"userStore.RETAIL_USR_ROLE == 4\">Order Packaging Incharge</span>\n                  <span *ngIf=\"userStore.RETAIL_USR_ROLE == 5\">Store Inventory Incharge</span>\n                  <span *ngIf=\"userStore.RETAIL_USR_ROLE == 6\">FA Incharge</span> -->\n\n\n                        </td>\n                        <td class=\"actdct_icon\">\n                            <span *ngIf=\"userStore.RETAIL_D2C_ACCT_INTRNL_CSTMR_ISACTIV_FLG; else elseBlock\">\n                                <img src=\"assets/images/active_icon1.png\">\n                            </span>\n                            <ng-template #elseBlock><img src=\"assets/images/deactive_icon.png\"></ng-template>\n                        </td>\n                        <td><button\n                                (click)=\"openDetails(showDetails, userStore.RETAIL_D2C_ACCT_INTRNL_CSTMR_RCNT_PWD, userStore.RETAIL_D2C_ACCT_INTRNL_CSTMR_ADDRESS, userStore.RETAIL_D2C_ACCT_INTRNL_CUSTMR_PHOTO_Path)\"\n                                class=\"btn btn-sm btn-outline-info\">Detail</button></td>\n                        <!-- <td>{{userStore.RETAIL_D2C_ACCT_INTRNL_CSTMR_RCNT_PWD}}</td>\n                        <td>{{userStore.RETAIL_D2C_ACCT_INTRNL_CSTMR_ADDRESS}}</td> -->\n                        <!-- <td class=\"icon\"><img\n                                src=\"{{imgURL}}{{userStore.RETAIL_D2C_ACCT_INTRNL_CUSTMR_PHOTO_Path | slice:1:-4}}jpeg\" />\n                        </td> -->\n                        <td class=\"delete-icon\"\n                            (click)=\"getRetailStoresById(addStoreUserModal, userStore.RETAIL_USR_ID, userStore.RETAIL_STORE_ID)\">\n                            <span class=\"icon\"><i class=\"fa fa-edit\"></i></span>\n                        </td>\n                        <td>\n                            <button (click)=\"registerOnMdr(registerMDR, userStore)\" class=\"btn custom-btn\">Register on\n                                MDR</button>\n                        </td>\n                        <td class=\"delete-icon\">\n                            <span (click)=\"deleteAcc(userStore)\" class=\"icon\"><i class=\"fa fa fa-trash\"></i></span>\n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n\n        </div>\n\n    </div>\n\n    <div *ngIf=\"showMdrRegistedUserList\" class=\"card exiting-office-table mt-2 pb-0\">\n        <div class=\"card-header\">\n            MDR Registered User(s)\n        </div>\n        <div class=\"card-body pa-0\">\n            <table class=\"table\">\n                <thead>\n                    <tr>\n                        <th>Sr. No.</th>\n                        <th>User ID</th>\n                        <th>Name</th>\n                        <th>Email</th>\n                        <th>Mobile</th>\n                        <th>Password</th>\n                        <th>PIC</th>\n                        <th>Action</th>\n                    </tr>\n                </thead>\n\n                <tbody>\n                    <tr *ngFor=\"let user of mdrRegistedUserList; index as i\">\n                        <td>{{ i + 1 }}</td>\n                        <td>{{ user.RETAIL_D2C_ACCT_INTERNAL_USER_ID }}</td>\n                        <td>{{ user.RETAIL_D2C_ACCT_INTERNAL_FIRST_NAME }} {{ user.RETAIL_D2C_ACCT_INTERNAL_LAST_NAME }}\n                        </td>\n                        <td>{{ user.RETAIL_D2C_ACCT_USR_EMAIL_ID }}</td>\n                        <td>{{ user.RETAIL_D2C_CUSTOMER_REGISTRO_PRIMARY_MOBIL_NUMBER }}</td>\n                        <td>{{ user.RETAIL_D2C_CUSTOMER_REGISTERD_PASS_PASSWORD }}</td>\n\n                        <td class=\"icon\">\n                            <img *ngIf=\"user.RETAIL_D2C_ACCT_INTERNAL_CUSTMR_PHOTO\"\n                                src=\"{{ imgURL }}{{ user.RETAIL_D2C_ACCT_INTERNAL_CUSTMR_PHOTO | slice:1:-4 }}jpeg\"\n                                alt=\"User Photo\" width=\"60\" />\n                        </td>\n\n                        <td class=\"delete-icon\">\n                            <span (click)=\"deleteAcc(user)\" class=\"icon\">\n                                <i class=\"fa fa-trash\"></i>\n                            </span>\n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n    </div>\n\n</div>\n\n<ng-template #registerMDR>\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title pull-left\">Register On MDR App</h4>\n\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"details-container\">\n            <div class=\"form-group\">\n                <label>User Mobile Number:&nbsp;</label>\n                <span>{{ slectedUserStore.RETAIL_D2C_ACCT_INTRNL_TEAM_MOBL_NUMBR }}</span>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-12 mt-2\">\n                <button (click)=\"registerToMDR(slectedUserStore)\" type=\"button\"\n                    class=\"btn custom-btn float-right\">Register Users On MDR App</button>\n            </div>\n        </div>\n    </div>\n\n</ng-template>\n\n<ng-template #showDetails>\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title pull-left\">Shoppenation Detail</h4>\n\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"details-container\">\n            <div class=\"details-row\">\n                <label>Photo:</label>\n                <img [src]=\"imgURL + (selectedPhoto | slice:1:-4) + 'jpeg'\" alt=\"Profile Photo\" class=\"details-photo\" />\n            </div>\n\n            <div class=\"details-row\">\n                <label>Password:</label>\n                <span>{{ selectedPassword }}</span>\n            </div>\n\n            <div class=\"details-row\">\n                <label>Address:</label>\n                <span>{{ selectedAddress }}</span>\n            </div>\n        </div>\n    </div>\n</ng-template>\n\n<ng-template #addStoreUserModal>\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title pull-left\">\n            {{ editMode != true ? 'Add Store User' : 'Update Store User' }}\n            <span class=\"small\">Store Id: {{storeid}}</span>\n        </h4>\n\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\">\n        <form [formGroup]=\"addStoreUserForm\">\n            <div class=\"row\">\n                <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                        <label>First Name</label>\n                        <input type=\"text\" class=\"form-control\" formControlName=\"RETAIL_USR_FIRST_NAME\">\n                    </div>\n                </div>\n\n                <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                        <label>Last Name</label>\n                        <input type=\"text\" class=\"form-control\" formControlName=\"RETAIL_USR_LAST_NAME\">\n                    </div>\n                </div>\n\n                <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                        <label>Mobile Number</label>\n                        <input type=\"text\" maxlength=\"10\" class=\"form-control\"\n                            formControlName=\"RETAIL_D2C_ACCT_INTRNL_TEAM_MOBL_NUMBR\"\n                            [ngClass]=\"{ 'is-invalid': submitted1 && f1.RETAIL_D2C_ACCT_INTRNL_TEAM_MOBL_NUMBR.errors }\">\n                        <div *ngIf=\"submitted1 && f1.RETAIL_D2C_ACCT_INTRNL_TEAM_MOBL_NUMBR.errors\"\n                            class=\"invalid-feedback\">\n                            <div *ngIf=\"f1.RETAIL_D2C_ACCT_INTRNL_TEAM_MOBL_NUMBR.errors.required\">Mobile is required\n                            </div>\n                            <div *ngIf=\"f1.RETAIL_D2C_ACCT_INTRNL_TEAM_MOBL_NUMBR.errors.minlength\">Mobile must be 10\n                                characters</div>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                        <label>Email Id</label>\n                        <input type=\"text\" class=\"form-control\" formControlName=\"RETAIL_USR_EMAIL_ID\"\n                            [ngClass]=\"{ 'is-invalid': submitted1 && f1.RETAIL_USR_EMAIL_ID.errors }\">\n                        <div *ngIf=\"submitted1 && f1.RETAIL_USR_EMAIL_ID.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f1.RETAIL_USR_EMAIL_ID.errors.required\">Email is required</div>\n                            <div *ngIf=\"f1.RETAIL_USR_EMAIL_ID.errors.email\">Email must be a valid email address</div>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-md-4\" *ngIf=\"ispassword\">\n                    <div class=\"form-group\">\n                        <label>Password</label>\n                        <input type=\"text\" class=\"form-control\" formControlName=\"RETAIL_D2C_ACCT_INTRNL_CSTMR_RCNT_PWD\">\n                    </div>\n                </div>\n\n                <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                        <label>Role Allocated</label>\n                        <select class=\"form-control\" formControlName=\"RETAIL_USR_ROLE\" (change)=\"onRoleChange($event)\">\n                            <option value=\"Select\">Select</option>\n                            <option value=\"1\">Super Admin</option>\n                            <option value=\"2\">Admin</option>\n                            <option value=\"3\">Store Delivery POS Incharge</option>\n                            <option value=\"4\">Store Order Packaging Incharge</option>\n                            <option value=\"5\">Store Inventory Incharge</option>\n                            <option value=\"6\">Finncial Accounts Incharge</option>\n\n                            <option value=\"51\">DATA SOURCE MAKER</option>\n                            <option value=\"52\">DATA CHECKER</option>\n                            <option value=\"53\">DATA PUBLISHER</option>\n\n                            <option *ngIf=\"SECONDRY_SELLER_FLG == true\" value=\"15\">SFA TERITIARY SALES</option>\n                            <option *ngIf=\"PRIMARY_SELLER_FLG == true\" value=\"16\">SFA SECONDARY SALES</option>\n                            <option *ngIf=\"SECONDRY_SELLER_FLG == true || TERITIARY_SELLER_FLG == true\" value=\"17\">SFA\n                                MANUFACTURER PURCHASE</option>\n                        </select>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <h4 class=\"mb-2 pl-3\">Other Details</h4>\n                <div class=\"col-md-12\">\n                    <div class=\"form-group\">\n                        <label>Resistent Address</label>\n                        <input type=\"text\" class=\"form-control\" formControlName=\"RETAIL_D2C_ACCT_INTRNL_CSTMR_ADDRESS\">\n                    </div>\n                </div>\n\n                <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                        <fieldset class=\"form-group\">\n                            <label>Attach User Photo</label>\n                            <div class=\"custom-file fileInputProfileWrap\">\n                                <input formControlName=\"RETAIL_D2C_ACCT_INTRNL_CUSTMR_PHOTO\" name=\"file\"\n                                    id=\"DomainImage\" type=\"file\" (change)=\"onSelectedFile($event)\"\n                                    class=\"custom-file-input\">\n                                <label class=\"custom-file-label\">{{uploadLabel}}</label>\n                                <div class=\"img-space\" *ngIf=\"isImageSaved\">\n                                    <ng-container>\n                                        <img [src]=\"'data:image/jpeg;base64,' + base64textString\">\n                                    </ng-container>\n                                </div>\n\n                            </div>\n                        </fieldset>\n                    </div>\n                </div>\n\n                <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                        <fieldset class=\"form-group\">\n                            <label>Attach Govt. ID Photo Card</label>\n                            <div class=\"custom-file fileInputProfileWrap\">\n                                <input formControlName=\"RETAIL_D2C_ACCT_INTRNL_CUSTMR_KYC_PHOTO_ID\" name=\"file\"\n                                    type=\"file\" (change)=\"onSelectedFile1($event)\" class=\"custom-file-input\">\n                                <label class=\"custom-file-label\">{{uploadLabel1}}</label>\n                                <div class=\"img-space\" *ngIf=\"isImageSaved1\">\n                                    <ng-container>\n                                        <img [src]=\"'data:image/jpeg;base64,' + base64textString1\">\n                                    </ng-container>\n                                </div>\n\n                            </div>\n                        </fieldset>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-12 mt-2\">\n                    <button *ngIf=\"editMode\" (click)=\"EditStoreUsers()\" type=\"button\"\n                        class=\"btn custom-btn float-right\">Update User Details</button>\n                    <button *ngIf=\"!editMode\" (click)=\"addStoreUser()\" type=\"button\"\n                        class=\"btn custom-btn float-right\">Save User Details</button>\n                </div>\n            </div>\n        </form>\n    </div>\n</ng-template>\n\n<ngx-spinner template=\"<img src='assets/images/icons/please_wait.gif' />\">\n</ngx-spinner>", styles: [".details-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 12px; /* space between rows */\r\n  width: 100%;\r\n  padding: 10px 0;\r\n}\r\n\r\n\r\n.details-row {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  border-bottom: 1px solid #f0f0f0;\r\n  padding: 6px 0;\r\n}\r\n\r\n.details-row label {\r\n  flex: 0 0 50%; /* take up 50% of width */\r\n  font-weight: 600;\r\n  color: #333;\r\n  font-size: 0.9rem;\r\n}\r\n\r\n.details-row span {\r\n  flex: 1;\r\n  text-align: right;\r\n  color: #555;\r\n  font-size: 0.9rem;\r\n}\r\n\r\n.details-photo {\r\n  height: 80px;      /* fixed image height */\r\n  width: auto;       /* maintain aspect ratio */\r\n  object-fit: cover;\r\n}\r\n\r\n\r\n.heading h2 {\r\n    padding: 10px 5px 10px;\r\n    font-size: 20px;\r\n}\r\n\r\n.topLevel {\r\n    background: #fff;\r\n    padding: 20px;\r\n    margin: 0;\r\n    border-radius: 5px;\r\n}\r\n\r\n.custom-file {\r\n     height: 100%;\r\n}\r\n\r\nh1.heading-title {\r\n  \r\n\r\n    span {\r\n        font-size: 10px;\r\n        text-transform: inherit;\r\n        background: #495057;\r\n        color: #fff;\r\n        padding: 10px 15px;\r\n        border-radius: 25px;\r\n    }\r\n}\r\n\r\nh1.heading-title img {\r\n    max-width: 65px;\r\n    margin-right: 5px;\r\n}\r\n\r\nh1.heading-title small {\r\n    display: inline-block;\r\n    font-weight: 400;\r\n    font-size: 13px;\r\n    position: absolute;\r\n    left: 80px;\r\n    bottom: 4px;\r\n    color: grey;\r\n}\r\n\r\n\r\n\r\n.table th, .table td {\r\n    padding: 5px;\r\n    line-height: 18px;\r\n}\r\n\r\ntd.actdct_icon img {\r\n    max-width: 25px;\r\n}\r\n\r\n.search-list-label {\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.btn {\r\n    font-size: 14px;\r\n    min-height: 36px;\r\n}\r\n"] }]
    }], function () { return [{ type: i1.ApiService }, { type: i2.BsModalService }, { type: i3.FormBuilder }, { type: i4.NgxSpinnerService }, { type: i5.ToastrService }]; }, null); })();
//# sourceMappingURL=manage-store-user.component.js.map