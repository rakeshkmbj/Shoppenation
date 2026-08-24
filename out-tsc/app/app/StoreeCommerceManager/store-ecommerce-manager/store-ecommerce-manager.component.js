import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "src/app/services/common.service";
import * as i2 from "ngx-bootstrap/modal";
import * as i3 from "src/app/services/api.service";
import * as i4 from "@angular/forms";
import * as i5 from "@angular/router";
import * as i6 from "ngx-toastr";
import * as i7 from "@angular/common";
import * as i8 from "@ng-bootstrap/ng-bootstrap";
import * as i9 from "ngx-bootstrap/dropdown";
import * as i10 from "../left-nav/left-nav.component";
function StoreEcommerceManagerComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 36)(1, "div", 37)(2, "b");
    i0.ɵɵtext(3, "Category ID :");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 37)(6, "b");
    i0.ɵɵtext(7, "Category Name :");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div", 37)(10, "b");
    i0.ɵɵtext(11, "Member ID :");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "div", 37)(14, "b");
    i0.ɵɵtext(15, "Plan ID :");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "div", 37)(18, "b");
    i0.ɵɵtext(19, "Plan Name :");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(20);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "div", 37)(22, "b");
    i0.ɵɵtext(23, "Seller with SKU :");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "span");
    i0.ɵɵtext(25);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(26, "div", 37)(27, "b");
    i0.ɵɵtext(28, "Store on Product :");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(29, "span");
    i0.ɵɵtext(30);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(31, "div", 37)(32, "b");
    i0.ɵɵtext(33, "Store on Service :");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(34, "span");
    i0.ɵɵtext(35);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(36, "div", 37)(37, "b");
    i0.ɵɵtext(38, "Free SKU Count :");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(39);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(40, "div", 37)(41, "b");
    i0.ɵɵtext(42, "Bought SKU Count :");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(43);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(44, "div", 37)(45, "b");
    i0.ɵɵtext(46, "SKU Validity Date :");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(47);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(48, "div", 37)(49, "b");
    i0.ɵɵtext(50, "MDR Menu Access :");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(51, "span");
    i0.ɵɵtext(52);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.getlogindata.MDR_Store_Category_Id || "-", " ");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.getlogindata.MDR_Store_Category_Name || "-", " ");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.getlogindata.MDR_MemberId || "-", " ");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.getlogindata.MDR_Membership_planid || "-", " ");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.getlogindata.MDR_Membership_Plan_Name || "-", " ");
    i0.ɵɵadvance(4);
    i0.ɵɵclassProp("ok", ctx_r0.getlogindata.MDR_Seller_With_SKU_Flag)("no", !ctx_r0.getlogindata.MDR_Seller_With_SKU_Flag);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.getlogindata.MDR_Seller_With_SKU_Flag ? "\u2714" : "\u2718", " ");
    i0.ɵɵadvance(4);
    i0.ɵɵclassProp("ok", ctx_r0.getlogindata.MDR_Store_on_Product_Flg)("no", !ctx_r0.getlogindata.MDR_Store_on_Product_Flg);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.getlogindata.MDR_Store_on_Product_Flg ? "\u2714" : "\u2718", " ");
    i0.ɵɵadvance(4);
    i0.ɵɵclassProp("ok", ctx_r0.getlogindata.MDR_Store_on_Service_Flg)("no", !ctx_r0.getlogindata.MDR_Store_on_Service_Flg);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.getlogindata.MDR_Store_on_Service_Flg ? "\u2714" : "\u2718", " ");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.getlogindata.Store_Free_SKU_Counts || "-", " ");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.getlogindata.Store_Bought_SKU_Counts || "-", " ");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.getlogindata.Store_Bought_SKU_Validity_Date || "-", " ");
    i0.ɵɵadvance(4);
    i0.ɵɵclassProp("ok", ctx_r0.getlogindata.MDR_Connect_Menu_Access_Flg)("no", !ctx_r0.getlogindata.MDR_Connect_Menu_Access_Flg);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.getlogindata.MDR_Connect_Menu_Access_Flg ? "\u2714" : "\u2718", " ");
} }
function StoreEcommerceManagerComponent_ul_54_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ul", 38)(1, "li", 39);
    i0.ɵɵtext(2);
    i0.ɵɵelementStart(3, "small", 40);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "li")(6, "a", 41);
    i0.ɵɵlistener("click", function StoreEcommerceManagerComponent_ul_54_Template_a_click_6_listener() { i0.ɵɵrestoreView(_r7); const ctx_r6 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r6.logout()); });
    i0.ɵɵtext(7, "Logout");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "li")(9, "a", 41);
    i0.ɵɵlistener("click", function StoreEcommerceManagerComponent_ul_54_Template_a_click_9_listener() { i0.ɵɵrestoreView(_r7); const ctx_r8 = i0.ɵɵnextContext(); const _r4 = i0.ɵɵreference(66); return i0.ɵɵresetView(ctx_r8.accDetails(_r4)); });
    i0.ɵɵtext(10, "Acc Details");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2(" ", ctx_r1.getlogindata.RETAIL_D2C_ACCT_INTRNL_FIRST_NAME, " ", ctx_r1.getlogindata.RETAIL_D2C_ACCT_INTRNL_LAST_NAME, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.getlogindata.RETATAIL_D2C_ROLE_NAME, " ");
} }
function StoreEcommerceManagerComponent_ng_template_63_div_16_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, " Current password is required ");
    i0.ɵɵelementEnd();
} }
function StoreEcommerceManagerComponent_ng_template_63_div_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 57);
    i0.ɵɵtemplate(1, StoreEcommerceManagerComponent_ng_template_63_div_16_div_1_Template, 2, 0, "div", 58);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r9.f.currentPassword.errors.required);
} }
function StoreEcommerceManagerComponent_ng_template_63_div_22_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, " New password is required ");
    i0.ɵɵelementEnd();
} }
function StoreEcommerceManagerComponent_ng_template_63_div_22_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, " Minimum 6 characters required ");
    i0.ɵɵelementEnd();
} }
function StoreEcommerceManagerComponent_ng_template_63_div_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 57);
    i0.ɵɵtemplate(1, StoreEcommerceManagerComponent_ng_template_63_div_22_div_1_Template, 2, 0, "div", 58);
    i0.ɵɵtemplate(2, StoreEcommerceManagerComponent_ng_template_63_div_22_div_2_Template, 2, 0, "div", 58);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r10 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r10.f.newPassword.errors.required);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r10.f.newPassword.errors.minlength);
} }
function StoreEcommerceManagerComponent_ng_template_63_div_28_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, " Confirm password is required ");
    i0.ɵɵelementEnd();
} }
function StoreEcommerceManagerComponent_ng_template_63_div_28_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, " Passwords do not match ");
    i0.ɵɵelementEnd();
} }
function StoreEcommerceManagerComponent_ng_template_63_div_28_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 57);
    i0.ɵɵtemplate(1, StoreEcommerceManagerComponent_ng_template_63_div_28_div_1_Template, 2, 0, "div", 58);
    i0.ɵɵtemplate(2, StoreEcommerceManagerComponent_ng_template_63_div_28_div_2_Template, 2, 0, "div", 58);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r11 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r11.f.confirmPassword.errors == null ? null : ctx_r11.f.confirmPassword.errors.required);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r11.passwordMismatch);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
function StoreEcommerceManagerComponent_ng_template_63_Template(rf, ctx) { if (rf & 1) {
    const _r18 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 42)(1, "h4", 43);
    i0.ɵɵtext(2, " Change Password ");
    i0.ɵɵelementStart(3, "span", 44);
    i0.ɵɵtext(4, "Secure your account");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "button", 45);
    i0.ɵɵlistener("click", function StoreEcommerceManagerComponent_ng_template_63_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r18); const ctx_r17 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r17.modalRef.hide()); });
    i0.ɵɵelementStart(6, "span", 46);
    i0.ɵɵtext(7, "\u00D7");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(8, "div", 47)(9, "form", 48)(10, "div", 30)(11, "div", 49)(12, "div", 50)(13, "label");
    i0.ɵɵtext(14, "Current Password");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(15, "input", 51);
    i0.ɵɵtemplate(16, StoreEcommerceManagerComponent_ng_template_63_div_16_Template, 2, 1, "div", 52);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(17, "div", 49)(18, "div", 50)(19, "label");
    i0.ɵɵtext(20, "New Password");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(21, "input", 53);
    i0.ɵɵtemplate(22, StoreEcommerceManagerComponent_ng_template_63_div_22_Template, 3, 2, "div", 52);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(23, "div", 49)(24, "div", 50)(25, "label");
    i0.ɵɵtext(26, "Confirm Password");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(27, "input", 54);
    i0.ɵɵtemplate(28, StoreEcommerceManagerComponent_ng_template_63_div_28_Template, 3, 2, "div", 52);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(29, "div", 30)(30, "div", 55)(31, "button", 56);
    i0.ɵɵlistener("click", function StoreEcommerceManagerComponent_ng_template_63_Template_button_click_31_listener() { i0.ɵɵrestoreView(_r18); const ctx_r19 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r19.changePassword()); });
    i0.ɵɵtext(32, " Update Password ");
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(9);
    i0.ɵɵproperty("formGroup", ctx_r3.changePasswordForm);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(7, _c0, ctx_r3.submitted && ctx_r3.f.currentPassword.errors));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r3.submitted && ctx_r3.f.currentPassword.errors);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(9, _c0, ctx_r3.submitted && ctx_r3.f.newPassword.errors));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r3.submitted && ctx_r3.f.newPassword.errors);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(11, _c0, ctx_r3.submitted && (ctx_r3.f.confirmPassword.errors || ctx_r3.passwordMismatch)));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r3.submitted && (ctx_r3.f.confirmPassword.errors || ctx_r3.passwordMismatch));
} }
function StoreEcommerceManagerComponent_ng_template_65_Template(rf, ctx) { if (rf & 1) {
    const _r21 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 42)(1, "h4", 43);
    i0.ɵɵtext(2, " Account Details ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 45);
    i0.ɵɵlistener("click", function StoreEcommerceManagerComponent_ng_template_65_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r21); const ctx_r20 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r20.modalRef.hide()); });
    i0.ɵɵelementStart(4, "span", 46);
    i0.ɵɵtext(5, "\u00D7");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(6, "div", 59)(7, "div", 30)(8, "div", 49)(9, "div", 60)(10, "label");
    i0.ɵɵtext(11, "Office Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "div", 61);
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "div", 60)(15, "label");
    i0.ɵɵtext(16, "Industry Domain ID");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "div", 61);
    i0.ɵɵtext(18);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(19, "div", 60)(20, "label");
    i0.ɵɵtext(21, "GSTIN");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "div", 61);
    i0.ɵɵtext(23);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(24, "div", 60)(25, "label");
    i0.ɵɵtext(26, "Store ID");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "div", 61);
    i0.ɵɵtext(28);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(29, "div", 60)(30, "label");
    i0.ɵɵtext(31, "MDR-Connect");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(32, "span", 62);
    i0.ɵɵtext(33);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(34, "div", 49)(35, "div", 60)(36, "label");
    i0.ɵɵtext(37, "Address");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(38, "div", 61);
    i0.ɵɵtext(39);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(40, "div", 60)(41, "label");
    i0.ɵɵtext(42, "Domain Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(43, "div", 61);
    i0.ɵɵtext(44);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(45, "div", 60)(46, "label");
    i0.ɵɵtext(47, "Account ID");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(48, "div", 61);
    i0.ɵɵtext(49);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(50, "div", 60)(51, "label");
    i0.ɵɵtext(52, "Store Code");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(53, "div", 61);
    i0.ɵɵtext(54);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(55, "div", 60)(56, "label");
    i0.ɵɵtext(57, "All-Day Distribution");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(58, "span", 62);
    i0.ɵɵtext(59);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(60, "div", 49)(61, "div", 60)(62, "label");
    i0.ɵɵtext(63, "Registered Mobile");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(64, "div", 61);
    i0.ɵɵtext(65);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(66, "div", 60)(67, "label");
    i0.ɵɵtext(68, "Subacct ID");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(69, "div", 61);
    i0.ɵɵtext(70);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(71, "div", 60)(72, "label");
    i0.ɵɵtext(73, "Multiple Domain");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(74, "span", 62);
    i0.ɵɵtext(75);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(76, "div", 63)(77, "div", 64)(78, "label", 65);
    i0.ɵɵtext(79, "Account Hierarchy");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(80, "div", 66)(81, "span");
    i0.ɵɵtext(82);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(83, "span");
    i0.ɵɵtext(84);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(85, "span");
    i0.ɵɵtext(86);
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵadvance(13);
    i0.ɵɵtextInterpolate(ctx_r5.getlogindata.RETAIL_D2C_SUBACCT_OFFICE_NAME || "-");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r5.getlogindata.DOMAIN_ID || "-");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r5.getlogindata.SUB_ACCT_GSTIN_NO || "-");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r5.getlogindata.RETAIL_D2C_ACCT_INTRNL_OFFICE_REGID || "-");
    i0.ɵɵadvance(4);
    i0.ɵɵclassProp("ok", ctx_r5.getlogindata.MDR_Connect_App_Flag)("no", !ctx_r5.getlogindata.MDR_Connect_App_Flag);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r5.getlogindata.MDR_Connect_App_Flag ? "\u2714" : "\u2718", " ");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r5.getlogindata.RETAIL_D2C_SUBACCT_OFFICE_ADDRESS || "-");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r5.getlogindata.RETAIL_D2C_DOMAIN_NAME || "-");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r5.getlogindata.RETAIL_D2C_ACCT_ID || "-");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r5.getlogindata.Storecode || "-");
    i0.ɵɵadvance(4);
    i0.ɵɵclassProp("ok", ctx_r5.getlogindata.Distribution_App_Flag)("no", !ctx_r5.getlogindata.Distribution_App_Flag);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r5.getlogindata.Distribution_App_Flag ? "\u2714" : "\u2718", " ");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r5.getlogindata.Account_Registered_From_MobileNumber || "-");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r5.getlogindata.RETAIL_D2C_USR_SUBACCT_ID || "-");
    i0.ɵɵadvance(4);
    i0.ɵɵclassProp("ok", ctx_r5.getlogindata.SUBACCT_MULTI_DOMAIN_ACTIVE)("no", !ctx_r5.getlogindata.SUBACCT_MULTI_DOMAIN_ACTIVE);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r5.getlogindata.SUBACCT_MULTI_DOMAIN_ACTIVE ? "\u2714" : "\u2718", " ");
    i0.ɵɵadvance(6);
    i0.ɵɵclassProp("ok", ctx_r5.getlogindata.FIRST_NODE_SUBACCT_FLG)("no", !ctx_r5.getlogindata.FIRST_NODE_SUBACCT_FLG);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" Primary: ", ctx_r5.getlogindata.FIRST_NODE_SUBACCT_FLG ? "\u2714" : "\u2718", " ");
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("ok", ctx_r5.getlogindata.SECND_NODE_SUBACCT_FLG)("no", !ctx_r5.getlogindata.SECND_NODE_SUBACCT_FLG);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" Secondary: ", ctx_r5.getlogindata.SECND_NODE_SUBACCT_FLG ? "\u2714" : "\u2718", " ");
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("ok", ctx_r5.getlogindata.THIRD_NODE_SUBACCT_FLG)("no", !ctx_r5.getlogindata.THIRD_NODE_SUBACCT_FLG);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" Tertiary: ", ctx_r5.getlogindata.THIRD_NODE_SUBACCT_FLG ? "\u2714" : "\u2718", " ");
} }
export class StoreEcommerceManagerComponent {
    constructor(commonservice, modalService, apiService, formBuilder, router, toastr) {
        this.commonservice = commonservice;
        this.modalService = modalService;
        this.apiService = apiService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.toastr = toastr;
        this.imgURL = this.apiService.imgURL;
        this.role = '';
        this.submitted = false;
        this.passwordMismatch = false;
        this.accountid = this.apiService.requiredLoginData.accountid;
        this.subaccid = this.apiService.requiredLoginData.subaccountid;
        this.storeid = this.apiService.requiredLoginData.storeid;
        this.officename = this.apiService.requiredLoginData.storeName;
        this.domainid = this.apiService.requiredLoginData.domainid;
        this.address = this.apiService.requiredLoginData.address;
        this.pincode = this.apiService.requiredLoginData.pincode;
        this.photo = this.apiService.requiredLoginData.photo;
        this.username = this.apiService.requiredLoginData.username;
        this.roleid = this.apiService.requiredLoginData.roleid;
        this.cartcount = this.apiService.requiredLoginData.cartcount;
        this.getlogindata = localStorage.getItem('logindata');
        this.getlogindata = JSON.parse(this.getlogindata);
    }
    ngOnInit() {
        let loginDAta = JSON.parse(localStorage.getItem("logindata"));
        this.username = loginDAta.RETAIL_D2C_ACCT_INTRNL_FIRST_NAME + " " + loginDAta.RETAIL_D2C_ACCT_INTRNL_LAST_NAME;
        this.commonservice.stringSubject.subscribe(loginData => {
            console.log(loginData);
        });
        if (this.cartcount == null) {
            this.cartcount = 0;
        }
        if (this.roleid == 1) {
            this.role = "Super Admin";
        }
        else if (this.roleid == 2) {
            this.role = "Admin";
        }
        else if (this.roleid == 3) {
            this.role = "Store Inventury Incharge";
        }
        this.changePasswordForm = this.formBuilder.group({
            currentPassword: ['', Validators.required],
            newPassword: ['', [Validators.required, Validators.minLength(6)]],
            confirmPassword: ['', Validators.required]
        });
    }
    logout() {
        localStorage.clear();
        sessionStorage.clear();
        this.router.navigate(['/']).then(() => {
            window.location.reload();
        });
    }
    openChangePassword(template) {
        const payload = {
            Account_Subaccid: this.subaccid,
            Account_Storeid: this.storeid,
            CardRegid: this.getlogindata.ADC_VEND_CARDHOLDR_REGID
        };
        console.log("payload: ", payload);
        this.apiService.postCall(`${this.apiService.baseURL}/GetVendPassword`, payload)
            .subscribe(data => {
            console.log(data);
        }, (error) => {
            console.log(error);
            this.toastr.error(error.error, '', {
                timeOut: 5000,
            });
        });
        this.modalRef = this.modalService.show(template, Object.assign({}, { class: 'width-720' }));
    }
    accDetails(template) {
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
            currentPassword: this.f.currentPassword.value,
            newPassword: this.f.newPassword.value
        };
        console.log("Change Password Payload:", payload);
        // 🔹 Call API here
    }
}
StoreEcommerceManagerComponent.ɵfac = function StoreEcommerceManagerComponent_Factory(t) { return new (t || StoreEcommerceManagerComponent)(i0.ɵɵdirectiveInject(i1.CommonService), i0.ɵɵdirectiveInject(i2.BsModalService), i0.ɵɵdirectiveInject(i3.ApiService), i0.ɵɵdirectiveInject(i4.FormBuilder), i0.ɵɵdirectiveInject(i5.Router), i0.ɵɵdirectiveInject(i6.ToastrService)); };
StoreEcommerceManagerComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StoreEcommerceManagerComponent, selectors: [["app-store-ecommerce-manager"]], decls: 67, vars: 14, consts: [[1, "navbar", "navbar-fixed", "navbar-expand-lg", "navbar-light", "bg-light"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarTogglerDemo01", "aria-controls", "navbarTogglerDemo01", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarTogglerDemo01", 1, "collapse", "navbar-collapse"], [1, "navbar-brand", "logo"], ["src", "../assets/images/shoppenation-logo.png", 1, "img-fluid"], [1, "nav-middle"], [1, "nav-grid"], [1, "nav-item"], [1, "nav-highlight"], [1, "my-2", "right-links", "my-lg-0"], [1, "navbar-nav"], ["dropdown", "", 1, "nav-item"], ["dropdownToggle", "", 1, "nav-link", "dropdown-toggle"], [1, "ti-info-alt"], ["class", "dropdown-menu info-dropdown", 4, "dropdownMenu"], [1, "nav-link"], [1, "ti-bell"], [1, "nav-item", "cart"], [1, "ti-shopping-cart"], [1, "name-area"], ["dropdown", "", 1, "btn-group"], ["dropdownToggle", "", 1, "btn", "dropdown-toggle", "user-info-btn"], [1, "user-text"], [1, "user-avatar", 3, "src"], [1, "user-role"], [1, "user-name"], [1, "user-id"], ["class", "dropdown-menu", 4, "dropdownMenu"], [1, "container-fluid", "content-area", "margin-top"], [1, "row"], [1, "col-md-3", "width-20", "pr-0", "pl-0", "fixed-top"], [1, "col-md-9", "width-80", "margin-left"], [1, "innerPanel"], ["changePasswordModal", ""], ["accountDetailsModal", ""], [1, "dropdown-menu", "info-dropdown"], [1, "info-row"], [1, "dropdown-menu"], [1, "company-name"], [1, "user-roll"], [1, "dropdown-item", 3, "click"], [1, "modal-header"], [1, "modal-title", "pull-left"], [1, "small"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [3, "formGroup"], [1, "col-md-4"], [1, "form-group"], ["type", "password", "formControlName", "currentPassword", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "password", "formControlName", "newPassword", 1, "form-control", 3, "ngClass"], ["type", "password", "formControlName", "confirmPassword", 1, "form-control", 3, "ngClass"], [1, "col-md-12", "mt-3"], ["type", "button", 1, "btn", "custom-btn", "float-right", 3, "click"], [1, "invalid-feedback"], [4, "ngIf"], [1, "modal-body", "account-modal"], [1, "info-block"], [1, "value"], [1, "status"], [1, "row", "mt-3", "border-top", "pt-2"], [1, "col-md-12"], [1, "section-title"], [1, "d-flex", "justify-content-between", "hierarchy-row"]], template: function StoreEcommerceManagerComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "nav", 0)(1, "button", 1);
        i0.ɵɵelement(2, "span", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "div", 3)(4, "a", 4);
        i0.ɵɵelement(5, "img", 5);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "p", 9);
        i0.ɵɵtext(10, "Office Name: ");
        i0.ɵɵelementStart(11, "span");
        i0.ɵɵtext(12);
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(13, "div", 8)(14, "p", 9);
        i0.ɵɵtext(15, "Address: ");
        i0.ɵɵelementStart(16, "span");
        i0.ɵɵtext(17);
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(18, "div", 8)(19, "p", 9);
        i0.ɵɵtext(20, "Industry Domain ID: ");
        i0.ɵɵelementStart(21, "span");
        i0.ɵɵtext(22);
        i0.ɵɵelementEnd()()()()();
        i0.ɵɵelementStart(23, "div", 10)(24, "ul", 11)(25, "li", 12)(26, "a", 13);
        i0.ɵɵelement(27, "i", 14);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(28, StoreEcommerceManagerComponent_div_28_Template, 53, 28, "div", 15);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(29, "li", 8)(30, "a", 16);
        i0.ɵɵelement(31, "i", 17);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(32, "li", 18)(33, "a", 16);
        i0.ɵɵelement(34, "i", 19);
        i0.ɵɵelementStart(35, "span");
        i0.ɵɵtext(36);
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(37, "li", 8)(38, "div", 20)(39, "div", 21)(40, "button", 22)(41, "div", 23);
        i0.ɵɵelement(42, "img", 24);
        i0.ɵɵpipe(43, "slice");
        i0.ɵɵelementStart(44, "div", 25)(45, "p");
        i0.ɵɵtext(46);
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(47, "div", 23)(48, "div", 25);
        i0.ɵɵtext(49);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(50, "div", 26);
        i0.ɵɵtext(51);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(52, "div", 27);
        i0.ɵɵtext(53);
        i0.ɵɵelementEnd()()();
        i0.ɵɵtemplate(54, StoreEcommerceManagerComponent_ul_54_Template, 11, 3, "ul", 28);
        i0.ɵɵelementEnd()()()()()()();
        i0.ɵɵelementStart(55, "div", 29)(56, "div", 30)(57, "div", 31);
        i0.ɵɵelement(58, "left-nav");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(59, "div", 32)(60, "div", 33);
        i0.ɵɵelement(61, "router-outlet");
        i0.ɵɵelementEnd()()()();
        i0.ɵɵelement(62, "app-pos-modal");
        i0.ɵɵtemplate(63, StoreEcommerceManagerComponent_ng_template_63_Template, 33, 13, "ng-template", null, 34, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(65, StoreEcommerceManagerComponent_ng_template_65_Template, 87, 40, "ng-template", null, 35, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        i0.ɵɵadvance(12);
        i0.ɵɵtextInterpolate(ctx.getlogindata.RETAIL_D2C_SUBACCT_OFFICE_NAME || "-");
        i0.ɵɵadvance(5);
        i0.ɵɵtextInterpolate(ctx.getlogindata.RETAIL_D2C_SUBACCT_OFFICE_ADDRESS || "-");
        i0.ɵɵadvance(5);
        i0.ɵɵtextInterpolate(ctx.getlogindata.DOMAIN_ID || "-");
        i0.ɵɵadvance(14);
        i0.ɵɵtextInterpolate(ctx.cartcount);
        i0.ɵɵadvance(6);
        i0.ɵɵproperty("src", ctx.imgURL + i0.ɵɵpipeBind3(43, 10, ctx.getlogindata.RETAIL_D2C_ACCT_INTRNL_CUSTMR_PHOTO, 1, -4) + "jpeg", i0.ɵɵsanitizeUrl);
        i0.ɵɵadvance(4);
        i0.ɵɵtextInterpolate1("Role : ", ctx.getlogindata.RETAIL_D2C_ACCT_INTRNL_CUSTMR_ROLE_ALCTD || "-", "");
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate1(" ", ctx.getlogindata.RETATAIL_D2C_ROLE_NAME || "-", " ");
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate2(" ", ctx.getlogindata.RETAIL_D2C_ACCT_INTRNL_FIRST_NAME, " ", ctx.getlogindata.RETAIL_D2C_ACCT_INTRNL_LAST_NAME, " ");
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1(" ", ctx.getlogindata.RETAIL_D2C_ACCT_INTRNL_USR_ID || "-", " ");
    } }, dependencies: [i7.NgClass, i7.NgIf, i4.ɵNgNoValidate, i4.DefaultValueAccessor, i4.NgControlStatus, i4.NgControlStatusGroup, i4.FormGroupDirective, i4.FormControlName, i5.RouterOutlet, i8.NgbNavbar, i9.BsDropdownMenuDirective, i9.BsDropdownToggleDirective, i9.BsDropdownDirective, i10.LeftNavComponent, i7.SlicePipe], styles: [".fixed-top[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  padding: 0;\r\n  top: 73px;\r\n  bottom: 0;\r\n}\r\n\r\n.margin-left[_ngcontent-%COMP%] {\r\n  margin-left: 20%;\r\n  margin-top: 75px;\r\n}\r\n\r\n.header[_ngcontent-%COMP%] {\r\n  padding: 0 20px;\r\n  border-bottom: 5px solid #bd2130;\r\n  background: #fff;\r\n  box-shadow: 0px 1px 5px 1px #00000045;\r\n  position: fixed;\r\n  z-index: 9999;\r\n}\r\n\r\nnav.navbar.navbar-expand-lg.navbar-fixed[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  width: 100%;\r\n  z-index: 999;\r\n  padding: 0 20px;\r\n  box-shadow: 0 0 30px 0 rgb(82 63 105 / 10%);\r\n}\r\n\r\n.navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n}\r\n\r\n.navbar-nav[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  top: -9px;\r\n  border-bottom: 10px solid #fff;\r\n  border-right: 8px solid transparent;\r\n  left: 15px;\r\n  border-left: 8px solid transparent;\r\n  filter: drop-shadow(0px -1px 1px rgba(0, 0, 0, 0.1));\r\n}\r\n\r\n.bg-light[_ngcontent-%COMP%] {\r\n  background-color: #fff !important;\r\n}\r\n\r\nli.nav-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  font-size: 25px;\r\n  color: #607d8b;\r\n}\r\n\r\ni.icofont-user-alt-7[_ngcontent-%COMP%] {\r\n  color: #607d8b;\r\n  font-size: 20px;\r\n}\r\n\r\na.navbar-brand.logo[_ngcontent-%COMP%] {\r\n  max-width: 60px;\r\n}\r\n\r\n.right-links[_ngcontent-%COMP%]   li.nav-item[_ngcontent-%COMP%] {\r\n  margin: 0 10px;\r\n  position: relative;\r\n}\r\n\r\n.com-name[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n  font-size: 20px;\r\n  padding-top: 0px;\r\n  margin: 0;\r\n  line-height: 18px;\r\n}\r\n\r\n.dropdown-item[_ngcontent-%COMP%] {\r\n  padding: 8px 15px;\r\n  font-size: 14px;\r\n  font-weight: 300;\r\n}\r\n\r\n.middle-field[_ngcontent-%COMP%] {\r\n  flex: 0 0 55% !important;\r\n  max-width: 385px !important;\r\n  padding: 0;\r\n}\r\n\r\nsmall.user-roll[_ngcontent-%COMP%] {\r\n  line-height: 0;\r\n  display: block;\r\n  color: #bd2130;\r\n  font-size: 12px;\r\n  margin-top: 8px;\r\n}\r\n\r\n.name-area[_ngcontent-%COMP%] > a[_ngcontent-%COMP%] > img[_ngcontent-%COMP%] {\r\n  float: left;\r\n  margin-left: 10px;\r\n  margin-top: 12px;\r\n  width: 38px;\r\n  border-radius: 50%;\r\n}\r\n\r\n.name-area[_ngcontent-%COMP%] > a[_ngcontent-%COMP%] {\r\n  color: #94979f;\r\n  float: right;\r\n  font-size: 14px;\r\n  font-weight: normal;\r\n}\r\n\r\n.navbar-expand-lg[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  left: auto !important;\r\n  border: 0;\r\n  top: 56px !important;\r\n  min-width: 170px;\r\n  box-shadow: 0 0 5px #ddd9;\r\n}\r\n\r\nli.company-name[_ngcontent-%COMP%] {\r\n  border-bottom: 2px solid #ddd;\r\n  padding: 0 10px 20px;\r\n}\r\n\r\n.name-area[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  padding: 10px;\r\n  font-size: 13px;\r\n  cursor: pointer;\r\n}\r\n\r\n.company-name[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 40px;\r\n  border-radius: 50%;\r\n  margin-right: 10px;\r\n}\r\n\r\nul.quick-notify-section[_ngcontent-%COMP%] {\r\n  float: right;\r\n  list-style: none;\r\n  padding: 0;\r\n  margin: 28px 15px 10px;\r\n}\r\n\r\n.quick-notify-section[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  float: left;\r\n  margin-right: 30px;\r\n}\r\n\r\n.dropdown-toggle[_ngcontent-%COMP%]::after {\r\n  display: none;\r\n}\r\n\r\n.quick-notify-section[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  width: 30px;\r\n  height: 30px;\r\n  display: inline-block;\r\n  border: 1px solid #ddd;\r\n  border-radius: 50%;\r\n  position: relative;\r\n  text-align: center;\r\n}\r\n\r\n.quick-notify-section[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  font-size: 10px;\r\n  top: -7px;\r\n  right: -5px;\r\n  background: #ddd;\r\n  width: 15px;\r\n  height: 15px;\r\n  text-align: center;\r\n  border-radius: 50%;\r\n}\r\n\r\n.store_manager[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\r\n  padding: 1px 2px 0 0 !important;\r\n  width: 30px;\r\n  height: 30px;\r\n  border: 1px solid #ddd;\r\n  line-height: 25px;\r\n  text-align: center;\r\n  padding: 0;\r\n  border-radius: 50%;\r\n  margin-right: 7px;\r\n}\r\n\r\n.cart-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  max-width: 100px;\r\n}\r\n\r\ntd.product-name[_ngcontent-%COMP%] {\r\n  font-size: 13px;\r\n}\r\n\r\n.sub[_ngcontent-%COMP%], .add[_ngcontent-%COMP%] {\r\n  border: 1px solid #ddd;\r\n  width: 30px;\r\n  height: 30px;\r\n  border-radius: 50%;\r\n}\r\n\r\n.quantity[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  border: 0;\r\n  text-align: center;\r\n  font-size: 13px;\r\n  width: 75px;\r\n}\r\n\r\n.price[_ngcontent-%COMP%] {\r\n  color: #ff7900;\r\n}\r\n\r\n.free-shipping[_ngcontent-%COMP%] {\r\n  float: left;\r\n}\r\n\r\n.fs[_ngcontent-%COMP%] {\r\n  font-size: 13px;\r\n  color: #117a8b;\r\n  float: left;\r\n  margin-right: 10px;\r\n  border-right: 1px solid #ddd;\r\n  padding-right: 10px;\r\n}\r\n\r\n.db[_ngcontent-%COMP%] {\r\n  font-size: 13px;\r\n  float: left;\r\n  font-weight: 600;\r\n}\r\n\r\n.add-remove[_ngcontent-%COMP%] {\r\n  float: left;\r\n  clear: both;\r\n  width: 100%;\r\n  margin-top: 10px;\r\n}\r\n\r\n.remove[_ngcontent-%COMP%] {\r\n  float: left;\r\n  font-size: 13px;\r\n  color: #f70a20;\r\n  border-right: 1px solid #ddd;\r\n  margin-right: 10px;\r\n  padding-right: 10px;\r\n}\r\n\r\n.save-later[_ngcontent-%COMP%] {\r\n  font-size: 13px;\r\n  float: left;\r\n}\r\n\r\n.table[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  margin-bottom: 0;\r\n}\r\n\r\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n  border-top: 0;\r\n}\r\n\r\n.cart-modal[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\r\n  border-bottom: 1px solid #ddd;\r\n}\r\n\r\n.cart-modal[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child {\r\n  border-bottom: 0;\r\n}\r\n\r\n.modal-footer[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n  width: auto;\r\n  padding: 10px 20px;\r\n  font-size: 12px;\r\n}\r\n\r\n.cart-modal[_ngcontent-%COMP%]   td.cart-img[_ngcontent-%COMP%] {\r\n  width: 15%;\r\n}\r\n\r\n.cart-modal[_ngcontent-%COMP%]   td.product-name[_ngcontent-%COMP%] {\r\n  width: 35%;\r\n}\r\n\r\n.cart-modal[_ngcontent-%COMP%]   td.quantity[_ngcontent-%COMP%] {\r\n  width: 20%;\r\n}\r\n\r\n.cart-modal[_ngcontent-%COMP%]   td.price-add-remove[_ngcontent-%COMP%] {\r\n  width: 30%;\r\n}\r\n\r\nli.delivery_icon[_ngcontent-%COMP%] {\r\n  margin-top: -15px;\r\n}\r\n\r\n.delivery_icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  max-width: 80px;\r\n  display: block;\r\n  margin: 0 auto;\r\n}\r\n\r\n.delivery_icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  display: block;\r\n}\r\n\r\n.float-left.com-name[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  padding: 16px;\r\n  line-height: 22px;\r\n  font-size: 30px;\r\n}\r\n\r\n.com-name[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\r\n  font-size: 15px;\r\n  color: #bd2130;\r\n  font-weight: bold;\r\n}\r\n\r\n.com-name[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  max-width: 20px;\r\n}\r\n\r\n.StoreeCommerceManagerHeader[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  max-width: 60px;\r\n  margin: 10px 20px 2px;\r\n}\r\n\r\n.dropdown-toggle[_ngcontent-%COMP%] {\r\n  border: 0;\r\n\r\n  &:hover {\r\n    background-color: transparent;\r\n    border: 0;\r\n  }\r\n}\r\n\r\n.com-name[_ngcontent-%COMP%] {\r\n  small.address {\r\n    color: #333 !important;\r\n    font-size: 12px;\r\n    text-transform: inherit;\r\n  }\r\n}\r\n\r\n.name-area[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 40px;\r\n  border-radius: 50%;\r\n  height: 40px;\r\n  border: 1px solid #e9ecef;\r\n  margin-right: 5px;\r\n}\r\n\r\nli.nav-item.cart[_ngcontent-%COMP%] {\r\n  position: relative;\r\n}\r\n\r\n.cart[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 10px;\r\n}\r\n\r\nli.middle-field[_ngcontent-%COMP%] {\r\n  margin: 0 30px;\r\n  text-align: left;\r\n  width: 336px;\r\n}\r\n\r\n.middle-field[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\r\n  font-size: 100%;\r\n}\r\n\r\nbutton#button-basic[_ngcontent-%COMP%] {\r\n  background: none;\r\n  color: #222b45;\r\n  padding: 0;\r\n}\r\n\r\n.name-area[_ngcontent-%COMP%] {\r\n  border-left: 1px solid #edf1f7;\r\n  padding-left: 20px;\r\n\r\n  .dropdown-toggle::after {\r\n    display: none;\r\n  }\r\n}\r\n\r\n.middle-field[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  background: #ddd;\r\n  padding: 5px 15px;\r\n  margin-bottom: 5px;\r\n  border-radius: 25px;\r\n  min-width: 125px;\r\n  text-align: center;\r\n  font-size: 11px;\r\n}\r\n\r\n\r\n.navbar-collapse[_ngcontent-%COMP%] {\r\n  display: flex !important;\r\n  align-items: center;\r\n  width: 100%;\r\n}\r\n\r\n\r\n.navbar-brand[_ngcontent-%COMP%] {\r\n  flex: 0 0 auto;\r\n  margin-right: 12px;\r\n}\r\n\r\n\r\n.nav-middle[_ngcontent-%COMP%] {\r\n  flex: 1;\r\n  \r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: start;\r\n  min-width: 0;\r\n}\r\n\r\n\r\n.nav-line[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  align-items: center;\r\n  gap: 14px;\r\n  font-size: 12px;\r\n  white-space: nowrap;\r\n}\r\n\r\n\r\n.nav-line[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  display: inline-flex;\r\n  align-items: center;\r\n  gap: 4px;\r\n}\r\n\r\n\r\n.store-icon[_ngcontent-%COMP%] {\r\n  width: 18px;\r\n  height: 18px;\r\n}\r\n\r\n\r\n.store-name[_ngcontent-%COMP%] {\r\n  font-weight: 600;\r\n  color: #c0392b;\r\n}\r\n\r\n\r\n.ok[_ngcontent-%COMP%] {\r\n  color: #1e7e34;\r\n  font-weight: 600;\r\n}\r\n\r\n.no[_ngcontent-%COMP%] {\r\n  color: #c82333;\r\n  font-weight: 600;\r\n}\r\n\r\n\r\n.right-links[_ngcontent-%COMP%] {\r\n  margin-left: auto;\r\n  \r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.right-links[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  flex-direction: row;\r\n  gap: 14px;\r\n}\r\n\r\n\r\n.right-links[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\r\n  padding: 0 6px;\r\n  font-size: 18px;\r\n}\r\n\r\n\r\n.cart[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  margin-left: 4px;\r\n  font-size: 12px;\r\n}\r\n\r\n\r\n.name-area[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.name-area[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 30px;\r\n  height: 30px;\r\n  border-radius: 50%;\r\n  object-fit: cover;\r\n  margin-right: 6px;\r\n}\r\n\r\n\r\n.info-dropdown[_ngcontent-%COMP%] {\r\n  min-width: 340px;\r\n  padding: 10px;\r\n  font-size: 12px;\r\n}\r\n\r\n.info-row[_ngcontent-%COMP%] {\r\n  padding: 4px 0;\r\n  border-bottom: 1px dashed #ddd;\r\n}\r\n\r\n.info-row[_ngcontent-%COMP%]:last-child {\r\n  border-bottom: none;\r\n}\r\n\r\n\r\n\r\n.nav-grid[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-auto-flow: column;\r\n  grid-template-rows: repeat(3, auto);\r\n  align-items: flex-start;\r\n\r\n  column-gap: 20px;   \r\n  row-gap: 4px;       \r\n\r\n  font-size: 11px;    \r\n  line-height: 1;   \r\n  white-space: nowrap;\r\n}\r\n\r\n\r\n.nav-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n}\r\n\r\n\r\n.nav-highlight[_ngcontent-%COMP%] {\r\n  font-weight: 600;\r\n  color: #c0392b;\r\n}\r\n\r\n.nav-highlight[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  color: #333;\r\n  margin-left: 4px;\r\n  font-weight: 500;\r\n}\r\n\r\n\r\n.nav-item[_ngcontent-%COMP%] {\r\n  display: inline-flex;\r\n  align-items: flex-start;\r\n  gap: 4px;\r\n}\r\n\r\n\r\n.store-icon[_ngcontent-%COMP%] {\r\n  width: 18px;\r\n  height: 18px;\r\n}\r\n\r\n\r\n.store-name[_ngcontent-%COMP%] {\r\n  font-weight: 600;\r\n  color: #c0392b;\r\n}\r\n\r\n\r\n.ok[_ngcontent-%COMP%] {\r\n  color: #1e7e34;\r\n  font-weight: 600;\r\n}\r\n\r\n.no[_ngcontent-%COMP%] {\r\n  color: #c82333;\r\n  font-weight: 600;\r\n}\r\n\r\n\r\n.right-links[_ngcontent-%COMP%] {\r\n  margin-left: auto;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n\r\n.right-links[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\r\n  padding: 0 6px;\r\n  font-size: 18px;\r\n}\r\n\r\n.nav-highlight[_ngcontent-%COMP%] {\r\n  font-size: 9px;\r\n  color: #bd2130;\r\n  font-weight: 600;\r\n  margin-top: -5px;\r\n  margin-bottom: -5px;\r\n}\r\n\r\n.nav-highlight[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  font-size: 10px;\r\n  color: #454545;\r\n}\r\n\r\n\r\n.user-info-btn[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n  text-align: left;\r\n  padding: 6px 10px;\r\n}\r\n\r\n\r\n.user-avatar[_ngcontent-%COMP%] {\r\n  width: 45px;\r\n  height: 45px;\r\n  border-radius: 50%;\r\n  object-fit: cover;\r\n}\r\n\r\n\r\n.user-text[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  line-height: 1.2;\r\n}\r\n\r\n\r\n.user-role[_ngcontent-%COMP%] {\r\n  font-size: 10px;\r\n  font-weight: 600;\r\n  color: #444;\r\n}\r\n\r\n\r\n.user-name[_ngcontent-%COMP%] {\r\n  font-size: 14px;\r\n  font-weight: 600;\r\n  color: #222;\r\n}\r\n\r\n\r\n.user-id[_ngcontent-%COMP%] {\r\n  font-size: 12px;\r\n  color: #777;\r\n}\r\n\r\n\r\n.user-flags[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 4px;\r\n  margin-left: 10px;\r\n  font-size: 12px;\r\n}\r\n\r\n.flag-label[_ngcontent-%COMP%] {\r\n  color: #444;\r\n}\r\n\r\n.flag-icon.ok[_ngcontent-%COMP%] {\r\n  color: green;\r\n  font-weight: 700;\r\n}\r\n\r\n.flag-icon.no[_ngcontent-%COMP%] {\r\n  color: red;\r\n  font-weight: 700;\r\n}\r\n\r\n.account-modal[_ngcontent-%COMP%] {\r\n  font-size: 13px;\r\n}\r\n\r\n.info-block[_ngcontent-%COMP%] {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.info-block[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  font-size: 11px;\r\n  color: #777;\r\n  margin-bottom: 2px;\r\n  display: block;\r\n}\r\n\r\n.value[_ngcontent-%COMP%] {\r\n  font-size: 13px;\r\n  font-weight: 600;\r\n  color: #222;\r\n}\r\n\r\n.status[_ngcontent-%COMP%] {\r\n  font-size: 14px;\r\n  font-weight: 600;\r\n}\r\n\r\n.ok[_ngcontent-%COMP%] {\r\n  color: #28a745;\r\n}\r\n\r\n.no[_ngcontent-%COMP%] {\r\n  color: #dc3545;\r\n}\r\n\r\n.section-title[_ngcontent-%COMP%] {\r\n  font-size: 12px;\r\n  font-weight: 600;\r\n  color: #555;\r\n}\r\n\r\n.hierarchy-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  font-weight: 600;\r\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StoreEcommerceManagerComponent, [{
        type: Component,
        args: [{ selector: 'app-store-ecommerce-manager', template: "<!-- <nav class=\"navbar navbar-fixed navbar-expand-lg navbar-light bg-light\">\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarTogglerDemo01\" aria-controls=\"navbarTogglerDemo01\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarTogglerDemo01\">\n        <a class=\"navbar-brand logo\"><img class=\"img-fluid\" src=\"../assets/images/shoppenation-logo.png\" /></a>\n        <ul class=\"navbar-nav mr-auto mt-2 mt-lg-0\">\n            <li class=\"nav-item com-name\">\n                <h4><small><img src=\"../assets/images/aaa.jpg\" />{{officename}}</small><br>\n                    <small class=\"address\">{{address}}, {{pincode}}</small>\n                </h4>\n            </li>\n\n\n        </ul>\n\n        <div class=\"my-2 right-links my-lg-0\">\n            <ul class=\"navbar-nav\">\n                <li class=\"nav-item\" dropdown>\n                    <a class=\"nav-link dropdown-toggle\" dropdownToggle id=\"dropdownMenuButton\" data-toggle=\"dropdown\"><i class=\"ti-info-alt\"></i></a>\n                    <div class=\"dropdown-menu\" *dropdownMenu aria-labelledby=\"dropdownMenuButton\">\n\n                        <a class=\"dropdown-item d-flex justify-content-between align-items-center\">Domain: <span class=\"badge badge-primary badge-pill\">{{domainid}}</span></a>\n                        <a class=\"dropdown-item d-flex justify-content-between align-items-center\">Store ID: <span class=\"badge badge-primary badge-pill\">{{storeid}}</span></a>\n                        <a class=\"dropdown-item d-flex justify-content-between align-items-center\">Account ID: <span class=\"badge badge-primary badge-pill\">{{accountid}}</span></a>\n                        <a class=\"dropdown-item d-flex justify-content-between align-items-center\">Sub-Account ID: <span class=\"badge badge-primary badge-pill\">{{subaccid}}</span></a>\n                    </div>\n                </li>\n                <li class=\"nav-item\"><a class=\"nav-link\"><i class=\"ti-bell\"></i></a></li>\n                <li class=\"nav-item cart\"><a class=\"nav-link\"><i class=\"ti-shopping-cart\"></i>\n            <span>{{cartcount}}</span>\n          </a></li>\n                <li class=\"nav-item\">\n                    <div class=\"name-area\">\n                        <div class=\"btn-group\" dropdown>\n                            <button id=\"button-basic\" dropdownToggle type=\"button\" class=\"btn dropdown-toggle\" aria-controls=\"dropdown-basic\">\n                <img src=\"{{imgURL}}{{photo | slice:1:-4}}jpeg\" /> {{username}}\n              </button>\n                            <ul id=\"dropdown-basic\" *dropdownMenu class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"button-basic\">\n                                <li role=\"menuitem\" class=\"company-name\">\n                                    {{username}}\n                                    <small class=\"user-roll\">{{role}}</small>\n                                </li>\n                                <li role=\"menuitem\"><a class=\"dropdown-item\">Change Password</a></li>\n\n                                <li role=\"menuitem\"><a (click)=\"logout()\" class=\"dropdown-item\" title=\"\">logout</a></li>\n\n                            </ul>\n                        </div>\n\n\n                    </div>\n                </li>\n            </ul>\n        </div>\n    </div>\n</nav> -->\n\n<nav class=\"navbar navbar-fixed navbar-expand-lg navbar-light bg-light\">\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarTogglerDemo01\"\n        aria-controls=\"navbarTogglerDemo01\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarTogglerDemo01\">\n\n        <!-- LOGO -->\n        <a class=\"navbar-brand logo\">\n            <img class=\"img-fluid\" src=\"../assets/images/shoppenation-logo.png\" />\n        </a>\n\n        <!-- ================= CENTER INFO BAR ================= -->\n        <div class=\"nav-middle\">\n            <div class=\"nav-grid\">\n\n                <!-- Row items auto-flow into grid -->\n\n                <div class=\"nav-item\">\n                    <p class=\"nav-highlight\">Office Name: <span>{{ getlogindata.RETAIL_D2C_SUBACCT_OFFICE_NAME || '-'\n                            }}</span></p>\n                </div>\n\n                <div class=\"nav-item\">\n                    <p class=\"nav-highlight\">Address: <span>{{ getlogindata.RETAIL_D2C_SUBACCT_OFFICE_ADDRESS || '-'\n                            }}</span></p>\n                </div>\n\n                <div class=\"nav-item\">\n                    <p class=\"nav-highlight\">Industry Domain ID: <span>{{ getlogindata.DOMAIN_ID || '-' }}</span></p>\n                </div>\n\n            </div>\n        </div>\n\n\n        <!-- ================= RIGHT ICONS ================= -->\n        <div class=\"my-2 right-links my-lg-0\">\n            <ul class=\"navbar-nav\">\n\n                <!-- INFO PANEL -->\n                <li class=\"nav-item\" dropdown>\n                    <a class=\"nav-link dropdown-toggle\" dropdownToggle>\n                        <i class=\"ti-info-alt\"></i>\n                    </a>\n\n                    <div class=\"dropdown-menu info-dropdown\" *dropdownMenu>\n\n                        <div class=\"info-row\">\n                            <b>Category ID :</b> {{ getlogindata.MDR_Store_Category_Id || '-' }}\n                        </div>\n\n                        <div class=\"info-row\">\n                            <b>Category Name :</b> {{ getlogindata.MDR_Store_Category_Name || '-' }}\n                        </div>\n\n                        <div class=\"info-row\">\n                            <b>Member ID :</b> {{ getlogindata.MDR_MemberId || '-' }}\n                        </div>\n\n                        <div class=\"info-row\">\n                            <b>Plan ID :</b> {{ getlogindata.MDR_Membership_planid || '-' }}\n                        </div>\n\n                        <div class=\"info-row\">\n                            <b>Plan Name :</b> {{ getlogindata.MDR_Membership_Plan_Name || '-' }}\n                        </div>\n\n                        <div class=\"info-row\">\n                            <b>Seller with SKU :</b>\n                            <span [class.ok]=\"getlogindata.MDR_Seller_With_SKU_Flag\"\n                                [class.no]=\"!getlogindata.MDR_Seller_With_SKU_Flag\">\n                                {{ getlogindata.MDR_Seller_With_SKU_Flag ? '\u2714' : '\u2718' }}\n                            </span>\n                        </div>\n\n                        <div class=\"info-row\">\n                            <b>Store on Product :</b>\n                            <span [class.ok]=\"getlogindata.MDR_Store_on_Product_Flg\"\n                                [class.no]=\"!getlogindata.MDR_Store_on_Product_Flg\">\n                                {{ getlogindata.MDR_Store_on_Product_Flg ? '\u2714' : '\u2718' }}\n                            </span>\n                        </div>\n\n                        <div class=\"info-row\">\n                            <b>Store on Service :</b>\n                            <span [class.ok]=\"getlogindata.MDR_Store_on_Service_Flg\"\n                                [class.no]=\"!getlogindata.MDR_Store_on_Service_Flg\">\n                                {{ getlogindata.MDR_Store_on_Service_Flg ? '\u2714' : '\u2718' }}\n                            </span>\n                        </div>\n\n                        <div class=\"info-row\">\n                            <b>Free SKU Count :</b> {{ getlogindata.Store_Free_SKU_Counts || '-' }}\n                        </div>\n\n                        <div class=\"info-row\">\n                            <b>Bought SKU Count :</b> {{ getlogindata.Store_Bought_SKU_Counts || '-' }}\n                        </div>\n\n                        <div class=\"info-row\">\n                            <b>SKU Validity Date :</b> {{ getlogindata.Store_Bought_SKU_Validity_Date || '-' }}\n                        </div>\n\n                        <div class=\"info-row\">\n                            <b>MDR Menu Access :</b>\n                            <span [class.ok]=\"getlogindata.MDR_Connect_Menu_Access_Flg\"\n                                [class.no]=\"!getlogindata.MDR_Connect_Menu_Access_Flg\">\n                                {{ getlogindata.MDR_Connect_Menu_Access_Flg ? '\u2714' : '\u2718' }}\n                            </span>\n                        </div>\n\n                    </div>\n                </li>\n\n                <!-- NOTIFICATION -->\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\"><i class=\"ti-bell\"></i></a>\n                </li>\n\n                <!-- CART -->\n                <li class=\"nav-item cart\">\n                    <a class=\"nav-link\">\n                        <i class=\"ti-shopping-cart\"></i>\n                        <span>{{ cartcount }}</span>\n                    </a>\n                </li>\n\n                <!-- USER -->\n                <li class=\"nav-item\">\n                    <div class=\"name-area\">\n                        <div class=\"btn-group\" dropdown>\n                            <button class=\"btn dropdown-toggle user-info-btn\" dropdownToggle>\n\n                                <!-- RIGHT SIDE STATUS -->\n                                <div class=\"user-text\">\n\n                                    <img class=\"user-avatar\"\n                                        [src]=\"imgURL + (getlogindata.RETAIL_D2C_ACCT_INTRNL_CUSTMR_PHOTO | slice:1:-4) + 'jpeg'\" />\n\n                                    <div class=\"user-role\">\n                                        <p>Role : {{ getlogindata.RETAIL_D2C_ACCT_INTRNL_CUSTMR_ROLE_ALCTD || '-' }}</p>\n                                    </div>\n\n                                </div>\n\n\n                                <!-- USER DETAILS -->\n                                <div class=\"user-text\">\n\n                                    <!-- ROLE NAME -->\n                                    <div class=\"user-role\">\n                                        {{ getlogindata.RETATAIL_D2C_ROLE_NAME || '-' }}\n                                    </div>\n\n                                    <!-- FULL NAME -->\n                                    <div class=\"user-name\">\n                                        {{ getlogindata.RETAIL_D2C_ACCT_INTRNL_FIRST_NAME }}\n                                        {{ getlogindata.RETAIL_D2C_ACCT_INTRNL_LAST_NAME }}\n                                    </div>\n\n                                    <!-- USER ID -->\n                                    <div class=\"user-id\">\n                                        {{ getlogindata.RETAIL_D2C_ACCT_INTRNL_USR_ID || '-' }}\n                                    </div>\n\n                                </div>\n\n                            </button>\n\n                            <ul class=\"dropdown-menu\" *dropdownMenu>\n                                <li class=\"company-name\">\n                                    {{ getlogindata.RETAIL_D2C_ACCT_INTRNL_FIRST_NAME }}\n                                    {{ getlogindata.RETAIL_D2C_ACCT_INTRNL_LAST_NAME }}\n                                    <small class=\"user-roll\">\n                                        {{ getlogindata.RETATAIL_D2C_ROLE_NAME }}\n                                    </small>\n                                </li>\n\n                                <!-- <li><a (click)=\"openChangePassword(changePasswordModal)\" class=\"dropdown-item\">Change Password</a></li> -->\n                                <li><a (click)=\"logout()\" class=\"dropdown-item\">Logout</a></li>\n                                <li><a (click)=\"accDetails(accountDetailsModal)\" class=\"dropdown-item\">Acc Details</a>\n                                </li>\n                            </ul>\n                        </div>\n                    </div>\n                </li>\n\n            </ul>\n        </div>\n    </div>\n\n</nav>\n\n\n<div class=\"container-fluid content-area margin-top\">\n    <div class=\"row\">\n        <div class=\"col-md-3 width-20 pr-0 pl-0 fixed-top\">\n            <left-nav></left-nav>\n        </div>\n\n        <div class=\"col-md-9 width-80 margin-left\">\n            <div class=\"innerPanel\">\n                <router-outlet></router-outlet>\n            </div>\n        </div>\n    </div>\n\n</div>\n\n<!-- POS Modal Component -->\n<app-pos-modal></app-pos-modal>\n\n<ng-template #changePasswordModal>\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title pull-left\">\n            Change Password\n            <span class=\"small\">Secure your account</span>\n        </h4>\n\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n\n    <div class=\"modal-body\">\n        <form [formGroup]=\"changePasswordForm\">\n\n            <div class=\"row\">\n\n                <!-- Current Password -->\n                <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                        <label>Current Password</label>\n                        <input type=\"password\" class=\"form-control\" formControlName=\"currentPassword\"\n                            [ngClass]=\"{ 'is-invalid': submitted && f.currentPassword.errors }\">\n\n                        <div *ngIf=\"submitted && f.currentPassword.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.currentPassword.errors.required\">\n                                Current password is required\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <!-- New Password -->\n                <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                        <label>New Password</label>\n                        <input type=\"password\" class=\"form-control\" formControlName=\"newPassword\"\n                            [ngClass]=\"{ 'is-invalid': submitted && f.newPassword.errors }\">\n\n                        <div *ngIf=\"submitted && f.newPassword.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.newPassword.errors.required\">\n                                New password is required\n                            </div>\n                            <div *ngIf=\"f.newPassword.errors.minlength\">\n                                Minimum 6 characters required\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <!-- Confirm Password -->\n                <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                        <label>Confirm Password</label>\n                        <input type=\"password\" class=\"form-control\" formControlName=\"confirmPassword\"\n                            [ngClass]=\"{ 'is-invalid': submitted && (f.confirmPassword.errors || passwordMismatch) }\">\n\n                        <div *ngIf=\"submitted && (f.confirmPassword.errors || passwordMismatch)\"\n                            class=\"invalid-feedback\">\n                            <div *ngIf=\"f.confirmPassword.errors?.required\">\n                                Confirm password is required\n                            </div>\n                            <div *ngIf=\"passwordMismatch\">\n                                Passwords do not match\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n\n            <!-- Buttons -->\n            <div class=\"row\">\n                <div class=\"col-md-12 mt-3\">\n                    <button type=\"button\" class=\"btn custom-btn float-right\" (click)=\"changePassword()\">\n                        Update Password\n                    </button>\n                </div>\n            </div>\n\n        </form>\n    </div>\n</ng-template>\n\n<ng-template #accountDetailsModal>\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title pull-left\">\n            Account Details\n        </h4>\n\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n\n    <div class=\"modal-body account-modal\">\n\n        <div class=\"row\">\n\n            <!-- COLUMN 1 -->\n            <div class=\"col-md-4\">\n                <div class=\"info-block\">\n                    <label>Office Name</label>\n                    <div class=\"value\">{{ getlogindata.RETAIL_D2C_SUBACCT_OFFICE_NAME || '-' }}</div>\n                </div>\n\n                <div class=\"info-block\">\n                    <label>Industry Domain ID</label>\n                    <div class=\"value\">{{ getlogindata.DOMAIN_ID || '-' }}</div>\n                </div>\n\n                <div class=\"info-block\">\n                    <label>GSTIN</label>\n                    <div class=\"value\">{{ getlogindata.SUB_ACCT_GSTIN_NO || '-' }}</div>\n                </div>\n\n                <div class=\"info-block\">\n                    <label>Store ID</label>\n                    <div class=\"value\">{{ getlogindata.RETAIL_D2C_ACCT_INTRNL_OFFICE_REGID || '-' }}</div>\n                </div>\n\n                <div class=\"info-block\">\n                    <label>MDR-Connect</label>\n                    <span class=\"status\" [class.ok]=\"getlogindata.MDR_Connect_App_Flag\"\n                        [class.no]=\"!getlogindata.MDR_Connect_App_Flag\">\n                        {{ getlogindata.MDR_Connect_App_Flag ? '\u2714' : '\u2718' }}\n                    </span>\n                </div>\n            </div>\n\n            <!-- COLUMN 2 -->\n            <div class=\"col-md-4\">\n                <div class=\"info-block\">\n                    <label>Address</label>\n                    <div class=\"value\">{{ getlogindata.RETAIL_D2C_SUBACCT_OFFICE_ADDRESS || '-' }}</div>\n                </div>\n\n                <div class=\"info-block\">\n                    <label>Domain Name</label>\n                    <div class=\"value\">{{ getlogindata.RETAIL_D2C_DOMAIN_NAME || '-' }}</div>\n                </div>\n\n                <div class=\"info-block\">\n                    <label>Account ID</label>\n                    <div class=\"value\">{{ getlogindata.RETAIL_D2C_ACCT_ID || '-' }}</div>\n                </div>\n\n                <div class=\"info-block\">\n                    <label>Store Code</label>\n                    <div class=\"value\">{{ getlogindata.Storecode || '-' }}</div>\n                </div>\n\n                <div class=\"info-block\">\n                    <label>All-Day Distribution</label>\n                    <span class=\"status\" [class.ok]=\"getlogindata.Distribution_App_Flag\"\n                        [class.no]=\"!getlogindata.Distribution_App_Flag\">\n                        {{ getlogindata.Distribution_App_Flag ? '\u2714' : '\u2718' }}\n                    </span>\n                </div>\n            </div>\n\n            <!-- COLUMN 3 -->\n            <div class=\"col-md-4\">\n                <div class=\"info-block\">\n                    <label>Registered Mobile</label>\n                    <div class=\"value\">{{ getlogindata.Account_Registered_From_MobileNumber || '-' }}</div>\n                </div>\n\n                <div class=\"info-block\">\n                    <label>Subacct ID</label>\n                    <div class=\"value\">{{ getlogindata.RETAIL_D2C_USR_SUBACCT_ID || '-' }}</div>\n                </div>\n\n                <div class=\"info-block\">\n                    <label>Multiple Domain</label>\n                    <span class=\"status\" [class.ok]=\"getlogindata.SUBACCT_MULTI_DOMAIN_ACTIVE\"\n                        [class.no]=\"!getlogindata.SUBACCT_MULTI_DOMAIN_ACTIVE\">\n                        {{ getlogindata.SUBACCT_MULTI_DOMAIN_ACTIVE ? '\u2714' : '\u2718' }}\n                    </span>\n                </div>\n            </div>\n\n        </div>\n\n        <!-- ACCOUNT HIERARCHY -->\n        <div class=\"row mt-3 border-top pt-2\">\n            <div class=\"col-md-12\">\n                <label class=\"section-title\">Account Hierarchy</label>\n\n                <div class=\"d-flex justify-content-between hierarchy-row\">\n                    <span [class.ok]=\"getlogindata.FIRST_NODE_SUBACCT_FLG\"\n                        [class.no]=\"!getlogindata.FIRST_NODE_SUBACCT_FLG\">\n                        Primary: {{ getlogindata.FIRST_NODE_SUBACCT_FLG ? '\u2714' : '\u2718' }}\n                    </span>\n\n                    <span [class.ok]=\"getlogindata.SECND_NODE_SUBACCT_FLG\"\n                        [class.no]=\"!getlogindata.SECND_NODE_SUBACCT_FLG\">\n                        Secondary: {{ getlogindata.SECND_NODE_SUBACCT_FLG ? '\u2714' : '\u2718' }}\n                    </span>\n\n                    <span [class.ok]=\"getlogindata.THIRD_NODE_SUBACCT_FLG\"\n                        [class.no]=\"!getlogindata.THIRD_NODE_SUBACCT_FLG\">\n                        Tertiary: {{ getlogindata.THIRD_NODE_SUBACCT_FLG ? '\u2714' : '\u2718' }}\n                    </span>\n                </div>\n            </div>\n        </div>\n\n    </div>\n</ng-template>", styles: [".fixed-top {\r\n  position: fixed;\r\n  padding: 0;\r\n  top: 73px;\r\n  bottom: 0;\r\n}\r\n\r\n.margin-left {\r\n  margin-left: 20%;\r\n  margin-top: 75px;\r\n}\r\n\r\n.header {\r\n  padding: 0 20px;\r\n  border-bottom: 5px solid #bd2130;\r\n  background: #fff;\r\n  box-shadow: 0px 1px 5px 1px #00000045;\r\n  position: fixed;\r\n  z-index: 9999;\r\n}\r\n\r\nnav.navbar.navbar-expand-lg.navbar-fixed {\r\n  position: fixed;\r\n  width: 100%;\r\n  z-index: 999;\r\n  padding: 0 20px;\r\n  box-shadow: 0 0 30px 0 rgb(82 63 105 / 10%);\r\n}\r\n\r\n.navbar-nav .nav-link {\r\n  cursor: pointer;\r\n}\r\n\r\n.navbar-nav .dropdown-menu:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  top: -9px;\r\n  border-bottom: 10px solid #fff;\r\n  border-right: 8px solid transparent;\r\n  left: 15px;\r\n  border-left: 8px solid transparent;\r\n  filter: drop-shadow(0px -1px 1px rgba(0, 0, 0, 0.1));\r\n}\r\n\r\n.bg-light {\r\n  background-color: #fff !important;\r\n}\r\n\r\nli.nav-item a i {\r\n  font-size: 25px;\r\n  color: #607d8b;\r\n}\r\n\r\ni.icofont-user-alt-7 {\r\n  color: #607d8b;\r\n  font-size: 20px;\r\n}\r\n\r\na.navbar-brand.logo {\r\n  max-width: 60px;\r\n}\r\n\r\n.right-links li.nav-item {\r\n  margin: 0 10px;\r\n  position: relative;\r\n}\r\n\r\n.com-name h4 {\r\n  font-size: 20px;\r\n  padding-top: 0px;\r\n  margin: 0;\r\n  line-height: 18px;\r\n}\r\n\r\n.dropdown-item {\r\n  padding: 8px 15px;\r\n  font-size: 14px;\r\n  font-weight: 300;\r\n}\r\n\r\n.middle-field {\r\n  flex: 0 0 55% !important;\r\n  max-width: 385px !important;\r\n  padding: 0;\r\n}\r\n\r\nsmall.user-roll {\r\n  line-height: 0;\r\n  display: block;\r\n  color: #bd2130;\r\n  font-size: 12px;\r\n  margin-top: 8px;\r\n}\r\n\r\n.name-area>a>img {\r\n  float: left;\r\n  margin-left: 10px;\r\n  margin-top: 12px;\r\n  width: 38px;\r\n  border-radius: 50%;\r\n}\r\n\r\n.name-area>a {\r\n  color: #94979f;\r\n  float: right;\r\n  font-size: 14px;\r\n  font-weight: normal;\r\n}\r\n\r\n.navbar-expand-lg .navbar-nav .dropdown-menu {\r\n  position: absolute;\r\n  left: auto !important;\r\n  border: 0;\r\n  top: 56px !important;\r\n  min-width: 170px;\r\n  box-shadow: 0 0 5px #ddd9;\r\n}\r\n\r\nli.company-name {\r\n  border-bottom: 2px solid #ddd;\r\n  padding: 0 10px 20px;\r\n}\r\n\r\n.name-area li a {\r\n  padding: 10px;\r\n  font-size: 13px;\r\n  cursor: pointer;\r\n}\r\n\r\n.company-name img {\r\n  width: 40px;\r\n  border-radius: 50%;\r\n  margin-right: 10px;\r\n}\r\n\r\nul.quick-notify-section {\r\n  float: right;\r\n  list-style: none;\r\n  padding: 0;\r\n  margin: 28px 15px 10px;\r\n}\r\n\r\n.quick-notify-section li {\r\n  float: left;\r\n  margin-right: 30px;\r\n}\r\n\r\n.dropdown-toggle::after {\r\n  display: none;\r\n}\r\n\r\n.quick-notify-section span {\r\n  width: 30px;\r\n  height: 30px;\r\n  display: inline-block;\r\n  border: 1px solid #ddd;\r\n  border-radius: 50%;\r\n  position: relative;\r\n  text-align: center;\r\n}\r\n\r\n.quick-notify-section li strong {\r\n  position: absolute;\r\n  font-size: 10px;\r\n  top: -7px;\r\n  right: -5px;\r\n  background: #ddd;\r\n  width: 15px;\r\n  height: 15px;\r\n  text-align: center;\r\n  border-radius: 50%;\r\n}\r\n\r\n.store_manager .fa {\r\n  padding: 1px 2px 0 0 !important;\r\n  width: 30px;\r\n  height: 30px;\r\n  border: 1px solid #ddd;\r\n  line-height: 25px;\r\n  text-align: center;\r\n  padding: 0;\r\n  border-radius: 50%;\r\n  margin-right: 7px;\r\n}\r\n\r\n.cart-img img {\r\n  max-width: 100px;\r\n}\r\n\r\ntd.product-name {\r\n  font-size: 13px;\r\n}\r\n\r\n.sub,\r\n.add {\r\n  border: 1px solid #ddd;\r\n  width: 30px;\r\n  height: 30px;\r\n  border-radius: 50%;\r\n}\r\n\r\n.quantity input {\r\n  border: 0;\r\n  text-align: center;\r\n  font-size: 13px;\r\n  width: 75px;\r\n}\r\n\r\n.price {\r\n  color: #ff7900;\r\n}\r\n\r\n.free-shipping {\r\n  float: left;\r\n}\r\n\r\n.fs {\r\n  font-size: 13px;\r\n  color: #117a8b;\r\n  float: left;\r\n  margin-right: 10px;\r\n  border-right: 1px solid #ddd;\r\n  padding-right: 10px;\r\n}\r\n\r\n.db {\r\n  font-size: 13px;\r\n  float: left;\r\n  font-weight: 600;\r\n}\r\n\r\n.add-remove {\r\n  float: left;\r\n  clear: both;\r\n  width: 100%;\r\n  margin-top: 10px;\r\n}\r\n\r\n.remove {\r\n  float: left;\r\n  font-size: 13px;\r\n  color: #f70a20;\r\n  border-right: 1px solid #ddd;\r\n  margin-right: 10px;\r\n  padding-right: 10px;\r\n}\r\n\r\n.save-later {\r\n  font-size: 13px;\r\n  float: left;\r\n}\r\n\r\n.table {\r\n  width: 100%;\r\n  margin-bottom: 0;\r\n}\r\n\r\n.table td,\r\n.table th {\r\n  border-top: 0;\r\n}\r\n\r\n.cart-modal table tr {\r\n  border-bottom: 1px solid #ddd;\r\n}\r\n\r\n.cart-modal table tr:last-child {\r\n  border-bottom: 0;\r\n}\r\n\r\n.modal-footer .btn {\r\n  width: auto;\r\n  padding: 10px 20px;\r\n  font-size: 12px;\r\n}\r\n\r\n.cart-modal td.cart-img {\r\n  width: 15%;\r\n}\r\n\r\n.cart-modal td.product-name {\r\n  width: 35%;\r\n}\r\n\r\n.cart-modal td.quantity {\r\n  width: 20%;\r\n}\r\n\r\n.cart-modal td.price-add-remove {\r\n  width: 30%;\r\n}\r\n\r\nli.delivery_icon {\r\n  margin-top: -15px;\r\n}\r\n\r\n.delivery_icon img {\r\n  max-width: 80px;\r\n  display: block;\r\n  margin: 0 auto;\r\n}\r\n\r\n.delivery_icon i {\r\n  display: block;\r\n}\r\n\r\n.float-left.com-name h4 {\r\n  margin: 0;\r\n  padding: 16px;\r\n  line-height: 22px;\r\n  font-size: 30px;\r\n}\r\n\r\n.com-name small {\r\n  font-size: 15px;\r\n  color: #bd2130;\r\n  font-weight: bold;\r\n}\r\n\r\n.com-name small img {\r\n  max-width: 20px;\r\n}\r\n\r\n.StoreeCommerceManagerHeader .logo img {\r\n  max-width: 60px;\r\n  margin: 10px 20px 2px;\r\n}\r\n\r\n.dropdown-toggle {\r\n  border: 0;\r\n\r\n  &:hover {\r\n    background-color: transparent;\r\n    border: 0;\r\n  }\r\n}\r\n\r\n.com-name {\r\n  small.address {\r\n    color: #333 !important;\r\n    font-size: 12px;\r\n    text-transform: inherit;\r\n  }\r\n}\r\n\r\n.name-area img {\r\n  width: 40px;\r\n  border-radius: 50%;\r\n  height: 40px;\r\n  border: 1px solid #e9ecef;\r\n  margin-right: 5px;\r\n}\r\n\r\nli.nav-item.cart {\r\n  position: relative;\r\n}\r\n\r\n.cart span {\r\n  position: absolute;\r\n  top: 10px;\r\n}\r\n\r\nli.middle-field {\r\n  margin: 0 30px;\r\n  text-align: left;\r\n  width: 336px;\r\n}\r\n\r\n.middle-field small {\r\n  font-size: 100%;\r\n}\r\n\r\nbutton#button-basic {\r\n  background: none;\r\n  color: #222b45;\r\n  padding: 0;\r\n}\r\n\r\n.name-area {\r\n  border-left: 1px solid #edf1f7;\r\n  padding-left: 20px;\r\n\r\n  .dropdown-toggle::after {\r\n    display: none;\r\n  }\r\n}\r\n\r\n.middle-field small {\r\n  display: inline-block;\r\n  background: #ddd;\r\n  padding: 5px 15px;\r\n  margin-bottom: 5px;\r\n  border-radius: 25px;\r\n  min-width: 125px;\r\n  text-align: center;\r\n  font-size: 11px;\r\n}\r\n\r\n/* MAIN NAV LAYOUT */\r\n.navbar-collapse {\r\n  display: flex !important;\r\n  align-items: center;\r\n  width: 100%;\r\n}\r\n\r\n/* LOGO */\r\n.navbar-brand {\r\n  flex: 0 0 auto;\r\n  margin-right: 12px;\r\n}\r\n\r\n/* CENTER SECTION */\r\n.nav-middle {\r\n  flex: 1;\r\n  /* occupies remaining space */\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: start;\r\n  min-width: 0;\r\n}\r\n\r\n/* Each info row */\r\n.nav-line {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  align-items: center;\r\n  gap: 14px;\r\n  font-size: 12px;\r\n  white-space: nowrap;\r\n}\r\n\r\n/* Prevent text from jumping */\r\n.nav-line span {\r\n  display: inline-flex;\r\n  align-items: center;\r\n  gap: 4px;\r\n}\r\n\r\n/* Store icon */\r\n.store-icon {\r\n  width: 18px;\r\n  height: 18px;\r\n}\r\n\r\n/* Store name */\r\n.store-name {\r\n  font-weight: 600;\r\n  color: #c0392b;\r\n}\r\n\r\n/* Status colors */\r\n.ok {\r\n  color: #1e7e34;\r\n  font-weight: 600;\r\n}\r\n\r\n.no {\r\n  color: #c82333;\r\n  font-weight: 600;\r\n}\r\n\r\n/* RIGHT SIDE (icons + user) */\r\n.right-links {\r\n  margin-left: auto;\r\n  /* pushes it to extreme right */\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.right-links .navbar-nav {\r\n  display: flex;\r\n  align-items: center;\r\n  flex-direction: row;\r\n  gap: 14px;\r\n}\r\n\r\n/* Icons */\r\n.right-links .nav-link {\r\n  padding: 0 6px;\r\n  font-size: 18px;\r\n}\r\n\r\n/* Cart badge spacing */\r\n.cart span {\r\n  margin-left: 4px;\r\n  font-size: 12px;\r\n}\r\n\r\n/* User section */\r\n.name-area {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.name-area img {\r\n  width: 30px;\r\n  height: 30px;\r\n  border-radius: 50%;\r\n  object-fit: cover;\r\n  margin-right: 6px;\r\n}\r\n\r\n/* Dropdown info panel */\r\n.info-dropdown {\r\n  min-width: 340px;\r\n  padding: 10px;\r\n  font-size: 12px;\r\n}\r\n\r\n.info-row {\r\n  padding: 4px 0;\r\n  border-bottom: 1px dashed #ddd;\r\n}\r\n\r\n.info-row:last-child {\r\n  border-bottom: none;\r\n}\r\n\r\n\r\n/* GRID LAYOUT */\r\n.nav-grid {\r\n  display: grid;\r\n  grid-auto-flow: column;\r\n  grid-template-rows: repeat(3, auto);\r\n  align-items: flex-start;\r\n\r\n  column-gap: 20px;   /* spacing between columns */\r\n  row-gap: 4px;       /* spacing between rows */\r\n\r\n  font-size: 11px;    /* slightly readable */\r\n  line-height: 1;   /* FIX: was too tight */\r\n  white-space: nowrap;\r\n}\r\n\r\n/* remove default p spacing issue */\r\n.nav-item p {\r\n  margin: 0;\r\n}\r\n\r\n/* better label/value separation */\r\n.nav-highlight {\r\n  font-weight: 600;\r\n  color: #c0392b;\r\n}\r\n\r\n.nav-highlight span {\r\n  color: #333;\r\n  margin-left: 4px;\r\n  font-weight: 500;\r\n}\r\n\r\n/* Individual cells */\r\n.nav-item {\r\n  display: inline-flex;\r\n  align-items: flex-start;\r\n  gap: 4px;\r\n}\r\n\r\n/* Store icon */\r\n.store-icon {\r\n  width: 18px;\r\n  height: 18px;\r\n}\r\n\r\n/* Highlight store name */\r\n.store-name {\r\n  font-weight: 600;\r\n  color: #c0392b;\r\n}\r\n\r\n/* Status flags */\r\n.ok {\r\n  color: #1e7e34;\r\n  font-weight: 600;\r\n}\r\n\r\n.no {\r\n  color: #c82333;\r\n  font-weight: 600;\r\n}\r\n\r\n/* Keep right side aligned */\r\n.right-links {\r\n  margin-left: auto;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n/* Icons */\r\n.right-links .nav-link {\r\n  padding: 0 6px;\r\n  font-size: 18px;\r\n}\r\n\r\n.nav-highlight {\r\n  font-size: 9px;\r\n  color: #bd2130;\r\n  font-weight: 600;\r\n  margin-top: -5px;\r\n  margin-bottom: -5px;\r\n}\r\n\r\n.nav-highlight span {\r\n  font-size: 10px;\r\n  color: #454545;\r\n}\r\n\r\n/* USER BUTTON WRAPPER */\r\n.user-info-btn {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n  text-align: left;\r\n  padding: 6px 10px;\r\n}\r\n\r\n/* PROFILE IMAGE */\r\n.user-avatar {\r\n  width: 45px;\r\n  height: 45px;\r\n  border-radius: 50%;\r\n  object-fit: cover;\r\n}\r\n\r\n/* TEXT BLOCK */\r\n.user-text {\r\n  display: flex;\r\n  flex-direction: column;\r\n  line-height: 1.2;\r\n}\r\n\r\n/* ROLE NAME */\r\n.user-role {\r\n  font-size: 10px;\r\n  font-weight: 600;\r\n  color: #444;\r\n}\r\n\r\n/* FULL NAME */\r\n.user-name {\r\n  font-size: 14px;\r\n  font-weight: 600;\r\n  color: #222;\r\n}\r\n\r\n/* USER ID */\r\n.user-id {\r\n  font-size: 12px;\r\n  color: #777;\r\n}\r\n\r\n/* RIGHT FLAGS */\r\n.user-flags {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 4px;\r\n  margin-left: 10px;\r\n  font-size: 12px;\r\n}\r\n\r\n.flag-label {\r\n  color: #444;\r\n}\r\n\r\n.flag-icon.ok {\r\n  color: green;\r\n  font-weight: 700;\r\n}\r\n\r\n.flag-icon.no {\r\n  color: red;\r\n  font-weight: 700;\r\n}\r\n\r\n.account-modal {\r\n  font-size: 13px;\r\n}\r\n\r\n.info-block {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.info-block label {\r\n  font-size: 11px;\r\n  color: #777;\r\n  margin-bottom: 2px;\r\n  display: block;\r\n}\r\n\r\n.value {\r\n  font-size: 13px;\r\n  font-weight: 600;\r\n  color: #222;\r\n}\r\n\r\n.status {\r\n  font-size: 14px;\r\n  font-weight: 600;\r\n}\r\n\r\n.ok {\r\n  color: #28a745;\r\n}\r\n\r\n.no {\r\n  color: #dc3545;\r\n}\r\n\r\n.section-title {\r\n  font-size: 12px;\r\n  font-weight: 600;\r\n  color: #555;\r\n}\r\n\r\n.hierarchy-row span {\r\n  font-weight: 600;\r\n}"] }]
    }], function () { return [{ type: i1.CommonService }, { type: i2.BsModalService }, { type: i3.ApiService }, { type: i4.FormBuilder }, { type: i5.Router }, { type: i6.ToastrService }]; }, null); })();
//# sourceMappingURL=store-ecommerce-manager.component.js.map