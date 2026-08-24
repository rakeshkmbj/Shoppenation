import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "src/app/services/api.service";
import * as i2 from "ngx-bootstrap/modal";
import * as i3 from "@angular/forms";
import * as i4 from "ngx-toastr";
import * as i5 from "@angular/common";
function AddBankKYCComponent_div_18_span_32_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵelement(1, "img", 23);
    i0.ɵɵelementEnd();
} }
function AddBankKYCComponent_div_18_ng_template_33_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 24);
} }
function AddBankKYCComponent_div_18_span_36_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵelement(1, "img", 23);
    i0.ɵɵelementEnd();
} }
function AddBankKYCComponent_div_18_ng_template_37_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 24);
} }
function AddBankKYCComponent_div_18_div_39_span_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵelement(1, "img", 23);
    i0.ɵɵelementEnd();
} }
function AddBankKYCComponent_div_18_div_39_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 24);
} }
function AddBankKYCComponent_div_18_div_39_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 25)(1, "div", 14);
    i0.ɵɵtext(2, " Back Office Work flow Approvals ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 0)(4, "div", 26)(5, "p", 27);
    i0.ɵɵtext(6, "Bank added & need Work flow Approvals ");
    i0.ɵɵtemplate(7, AddBankKYCComponent_div_18_div_39_span_7_Template, 2, 0, "span", 19);
    i0.ɵɵtemplate(8, AddBankKYCComponent_div_18_div_39_ng_template_8_Template, 1, 0, "ng-template", null, 28, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "div", 26)(11, "p", 27);
    i0.ɵɵtext(12, "Edit/Update Allowed ");
    i0.ɵɵelement(13, "img", 24);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(14, "div", 16)(15, "table", 17)(16, "thead")(17, "tr")(18, "th");
    i0.ɵɵtext(19, "Bank Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "th");
    i0.ɵɵtext(21, "Bank Account No.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "th");
    i0.ɵɵtext(23, "IFSC Code");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "th");
    i0.ɵɵtext(25, "Type of Account");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "th");
    i0.ɵɵtext(27, "Branch Address");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "th", 29);
    i0.ɵɵtext(29, "Action");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(30, "tbody")(31, "tr")(32, "td");
    i0.ɵɵtext(33);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(34, "td");
    i0.ɵɵtext(35);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(36, "td");
    i0.ɵɵtext(37);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(38, "td");
    i0.ɵɵtext(39);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(40, "td");
    i0.ɵɵtext(41);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(42, "td", 30)(43, "span", 31);
    i0.ɵɵelement(44, "i", 32);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(45, "td", 30)(46, "span", 31);
    i0.ɵɵelement(47, "i", 33);
    i0.ɵɵelementEnd()()()()()();
    i0.ɵɵelementStart(48, "button", 34);
    i0.ɵɵlistener("click", function AddBankKYCComponent_div_18_div_39_Template_button_click_48_listener() { i0.ɵɵrestoreView(_r14); const ctx_r13 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r13.sendToBackOfficeForApproval()); });
    i0.ɵɵtext(49, "Send to back office for Approval");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const _r11 = i0.ɵɵreference(9);
    const ctx_r9 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngIf", ctx_r9.approvedBankList.RETAIL_STORE_BANK_BACKOFFICE_WRKFLOW_APPROVAL)("ngIfElse", _r11);
    i0.ɵɵadvance(26);
    i0.ɵɵtextInterpolate(ctx_r9.approvedBankList.RETAIL_D2C_BANK_NAME);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r9.approvedBankList.RETAIL_D2C_BANK_ACCOUNT_NUMBER);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r9.approvedBankList.RETAIL_D2C_BANK_IFSC_CODE);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r9.approvedBankList.RETAIL_D2C_TYP_OF_BANK_ACCOUNT);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r9.approvedBankList.RETAIL_BRANCH_ADDRESS_DETAIL);
} }
function AddBankKYCComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 13)(1, "div", 14);
    i0.ɵɵtext(2, " Back Office Approved Bank ");
    i0.ɵɵelementStart(3, "button", 15);
    i0.ɵɵlistener("click", function AddBankKYCComponent_div_18_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r16); const ctx_r15 = i0.ɵɵnextContext(); const _r1 = i0.ɵɵreference(20); return i0.ɵɵresetView(ctx_r15.openModal(_r1)); });
    i0.ɵɵtext(4, "Add Store Bank");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "div", 16)(6, "table", 17)(7, "thead")(8, "tr")(9, "th");
    i0.ɵɵtext(10, "Bank Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "th");
    i0.ɵɵtext(12, "Bank Account No.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "th");
    i0.ɵɵtext(14, "IFSC Code");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "th");
    i0.ɵɵtext(16, "Type of Account");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "th");
    i0.ɵɵtext(18, "Active Status");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "th");
    i0.ɵɵtext(20, "Locked");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(21, "tbody")(22, "tr")(23, "td");
    i0.ɵɵtext(24);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "td");
    i0.ɵɵtext(26);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "td");
    i0.ɵɵtext(28);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(29, "td");
    i0.ɵɵtext(30);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(31, "td", 18);
    i0.ɵɵtemplate(32, AddBankKYCComponent_div_18_span_32_Template, 2, 0, "span", 19);
    i0.ɵɵtemplate(33, AddBankKYCComponent_div_18_ng_template_33_Template, 1, 0, "ng-template", null, 20, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(35, "td", 18);
    i0.ɵɵtemplate(36, AddBankKYCComponent_div_18_span_36_Template, 2, 0, "span", 19);
    i0.ɵɵtemplate(37, AddBankKYCComponent_div_18_ng_template_37_Template, 1, 0, "ng-template", null, 21, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵtemplate(39, AddBankKYCComponent_div_18_div_39_Template, 50, 7, "div", 22);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r4 = i0.ɵɵreference(34);
    const _r7 = i0.ɵɵreference(38);
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(24);
    i0.ɵɵtextInterpolate(ctx_r0.approvedBankList.RETAIL_D2C_BANK_NAME);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.approvedBankList.RETAIL_D2C_BANK_ACCOUNT_NUMBER);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.approvedBankList.RETAIL_D2C_BANK_IFSC_CODE);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.approvedBankList.RETAIL_D2C_TYP_OF_BANK_ACCOUNT);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.approvedBankList.RETAIL_STORE_BANK_BACKOFFICE_WRKFLOW_APPROVAL)("ngIfElse", _r4);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", ctx_r0.approvedBankList.RETAIL_STORE_BANK_BACKOFFICE_APPROVED_LOCKED_FLG)("ngIfElse", _r7);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r0.showApprovedBank);
} }
function AddBankKYCComponent_ng_template_19_div_32_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "Field is required");
    i0.ɵɵelementEnd();
} }
function AddBankKYCComponent_ng_template_19_div_32_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 62);
    i0.ɵɵtemplate(1, AddBankKYCComponent_ng_template_19_div_32_div_1_Template, 2, 0, "div", 63);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r17 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r17.f.RETAIL_D2C_BANK_NAME.errors.required);
} }
function AddBankKYCComponent_ng_template_19_div_44_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "Field is required");
    i0.ɵɵelementEnd();
} }
function AddBankKYCComponent_ng_template_19_div_44_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 62);
    i0.ɵɵtemplate(1, AddBankKYCComponent_ng_template_19_div_44_div_1_Template, 2, 0, "div", 63);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r18 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r18.f.RETAIL_D2C_TYP_OF_BANK_ACCOUNT.errors.required);
} }
function AddBankKYCComponent_ng_template_19_div_50_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "Field is required");
    i0.ɵɵelementEnd();
} }
function AddBankKYCComponent_ng_template_19_div_50_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "Field must be at least 9 characters");
    i0.ɵɵelementEnd();
} }
function AddBankKYCComponent_ng_template_19_div_50_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 62);
    i0.ɵɵtemplate(1, AddBankKYCComponent_ng_template_19_div_50_div_1_Template, 2, 0, "div", 63);
    i0.ɵɵtemplate(2, AddBankKYCComponent_ng_template_19_div_50_div_2_Template, 2, 0, "div", 63);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r19 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r19.f.RETAIL_D2C_BANK_ACCOUNT_NUMBER.errors.required);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r19.f.RETAIL_D2C_BANK_ACCOUNT_NUMBER.errors.minlength);
} }
function AddBankKYCComponent_ng_template_19_div_56_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "Field is required");
    i0.ɵɵelementEnd();
} }
function AddBankKYCComponent_ng_template_19_div_56_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 62);
    i0.ɵɵtemplate(1, AddBankKYCComponent_ng_template_19_div_56_div_1_Template, 2, 0, "div", 63);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r20 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r20.f.RETAIL_D2C_BANK_IFSC_CODE.errors.required);
} }
function AddBankKYCComponent_ng_template_19_div_62_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "Field is required");
    i0.ɵɵelementEnd();
} }
function AddBankKYCComponent_ng_template_19_div_62_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 62);
    i0.ɵɵtemplate(1, AddBankKYCComponent_ng_template_19_div_62_div_1_Template, 2, 0, "div", 63);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r21 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r21.f.RETAIL_BRANCH_ADDRESS_DETAIL.errors.required);
} }
function AddBankKYCComponent_ng_template_19_div_70_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "Account is required");
    i0.ɵɵelementEnd();
} }
function AddBankKYCComponent_ng_template_19_div_70_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 62);
    i0.ɵɵtemplate(1, AddBankKYCComponent_ng_template_19_div_70_div_1_Template, 2, 0, "div", 63);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r22 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r22.f.RETAIL_BANK_ACCOUNT_CANCLD_CHEQUE_IMG.errors.required);
} }
function AddBankKYCComponent_ng_template_19_div_73_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 64);
    i0.ɵɵelementContainerStart(1);
    i0.ɵɵelement(2, "img", 65);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r23 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("src", "data:image/jpeg;base64," + ctx_r23.base64textString, i0.ɵɵsanitizeUrl);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
function AddBankKYCComponent_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    const _r32 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 35)(1, "h4", 36);
    i0.ɵɵtext(2, "Add my Store Bank ");
    i0.ɵɵelementStart(3, "span", 37);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "button", 38);
    i0.ɵɵlistener("click", function AddBankKYCComponent_ng_template_19_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r32); const ctx_r31 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r31.modalRef.hide()); });
    i0.ɵɵelementStart(6, "span", 39);
    i0.ɵɵtext(7, "\u00D7");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(8, "form", 3)(9, "div", 4)(10, "div", 0)(11, "div", 5)(12, "div", 6)(13, "label");
    i0.ɵɵtext(14, "Enter Bank Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "select", 40)(16, "option", 41);
    i0.ɵɵtext(17, "Select");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "option", 42);
    i0.ɵɵtext(19, "ICICI Bank");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "option", 43);
    i0.ɵɵtext(21, "State Bank of India");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "option", 44);
    i0.ɵɵtext(23, "Axis Bank");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "option", 45);
    i0.ɵɵtext(25, "Bank of India");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "option", 46);
    i0.ɵɵtext(27, "Kotak Bank");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "option", 47);
    i0.ɵɵtext(29, "HDFC");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "option", 48);
    i0.ɵɵtext(31, "Central Bank of India");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(32, AddBankKYCComponent_ng_template_19_div_32_Template, 2, 1, "div", 49);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(33, "div", 5)(34, "div", 6)(35, "label");
    i0.ɵɵtext(36, "Type of Account");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(37, "select", 50)(38, "option", 41);
    i0.ɵɵtext(39, "Select");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(40, "option", 51);
    i0.ɵɵtext(41, "Current");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(42, "option", 52);
    i0.ɵɵtext(43, "Saving");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(44, AddBankKYCComponent_ng_template_19_div_44_Template, 2, 1, "div", 49);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(45, "div", 5)(46, "div", 6)(47, "label");
    i0.ɵɵtext(48, "Enter Bank Account Number");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(49, "input", 53);
    i0.ɵɵtemplate(50, AddBankKYCComponent_ng_template_19_div_50_Template, 3, 2, "div", 49);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(51, "div", 5)(52, "div", 6)(53, "label");
    i0.ɵɵtext(54, "Enter Bank IFSC Code");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(55, "input", 54);
    i0.ɵɵtemplate(56, AddBankKYCComponent_ng_template_19_div_56_Template, 2, 1, "div", 49);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(57, "div", 5)(58, "div", 6)(59, "label");
    i0.ɵɵtext(60, "Bank Branch Address");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(61, "input", 55);
    i0.ɵɵtemplate(62, AddBankKYCComponent_ng_template_19_div_62_Template, 2, 1, "div", 49);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(63, "div", 5)(64, "div", 6)(65, "fieldset", 6)(66, "label");
    i0.ɵɵtext(67, "Attach Bank Canceled Cheque");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(68, "div", 56)(69, "input", 57);
    i0.ɵɵlistener("change", function AddBankKYCComponent_ng_template_19_Template_input_change_69_listener($event) { i0.ɵɵrestoreView(_r32); const ctx_r33 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r33.onSelectedFile($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(70, AddBankKYCComponent_ng_template_19_div_70_Template, 2, 1, "div", 49);
    i0.ɵɵelementStart(71, "label", 58);
    i0.ɵɵtext(72);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(73, AddBankKYCComponent_ng_template_19_div_73_Template, 3, 1, "div", 59);
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(74, "div", 0)(75, "div", 60)(76, "button", 61);
    i0.ɵɵlistener("click", function AddBankKYCComponent_ng_template_19_Template_button_click_76_listener() { i0.ɵɵrestoreView(_r32); const ctx_r34 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r34.addStoreBank()); });
    i0.ɵɵtext(77, "Save Store Bank");
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("Store Id: ", ctx_r2.storeid, "");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("formGroup", ctx_r2.addStoreBankForm);
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(16, _c0, ctx_r2.submitted && ctx_r2.f.RETAIL_D2C_BANK_NAME.errors));
    i0.ɵɵadvance(17);
    i0.ɵɵproperty("ngIf", ctx_r2.submitted && ctx_r2.f.RETAIL_D2C_BANK_NAME.errors);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(18, _c0, ctx_r2.submitted && ctx_r2.f.RETAIL_D2C_TYP_OF_BANK_ACCOUNT.errors));
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngIf", ctx_r2.submitted && ctx_r2.f.RETAIL_D2C_TYP_OF_BANK_ACCOUNT.errors);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(20, _c0, ctx_r2.submitted && ctx_r2.f.RETAIL_D2C_BANK_ACCOUNT_NUMBER.errors));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.submitted && ctx_r2.f.RETAIL_D2C_BANK_ACCOUNT_NUMBER.errors);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(22, _c0, ctx_r2.submitted && ctx_r2.f.RETAIL_D2C_BANK_IFSC_CODE.errors));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.submitted && ctx_r2.f.RETAIL_D2C_BANK_IFSC_CODE.errors);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(24, _c0, ctx_r2.submitted && ctx_r2.f.RETAIL_BRANCH_ADDRESS_DETAIL.errors));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.submitted && ctx_r2.f.RETAIL_BRANCH_ADDRESS_DETAIL.errors);
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(26, _c0, ctx_r2.submitted && ctx_r2.f.RETAIL_BANK_ACCOUNT_CANCLD_CHEQUE_IMG.errors));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.submitted && ctx_r2.f.RETAIL_BANK_ACCOUNT_CANCLD_CHEQUE_IMG.errors);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r2.uploadLabel);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.isImageSaved);
} }
export class AddBankKYCComponent {
    constructor(apiService, modalService, formBuilder, toastr) {
        this.apiService = apiService;
        this.modalService = modalService;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        // baseURL: string = "https://www.shoppenation.in/alcoolretail/carryr/retail";
        this.imgURL = this.apiService.imgURL;
        this.uploadLabel = "";
        this.submitted = false;
        this.submitted1 = false;
        this.approvedBankList = {};
        this.showApprovedBank = false;
        this.accountid = this.apiService.requiredLoginData.accountid;
        this.subaccountid = this.apiService.requiredLoginData.subaccountid;
        this.storeid = this.apiService.requiredLoginData.storeid;
        this.storeName = this.apiService.requiredLoginData.storeName;
        this.domainid = this.apiService.requiredLoginData.domainid;
    }
    ngOnInit() {
        //  this. getStoreList();
        this.uploadLabel = 'No file choosen';
        this.storeUserForm = this.formBuilder.group({
            SUBACCT_OFFICE_ID: [this.storeid, Validators.required],
            RETAIL_D2C_PRODUCT_ID: ['', Validators.required],
        });
        this.addStoreBankForm = this.formBuilder.group({
            RETAIL_D2C_BANK_NAME: ['', Validators.required],
            RETAIL_D2C_BANK_ACCOUNT_NUMBER: ['', [Validators.required, Validators.minLength(9)]],
            RETAIL_D2C_BANK_IFSC_CODE: ['', Validators.required],
            RETAIL_D2C_TYP_OF_BANK_ACCOUNT: ['', Validators.required],
            RETAIL_BRANCH_ADDRESS_DETAIL: ['', Validators.required],
            RETAIL_BANK_ACCOUNT_CANCLD_CHEQUE_IMG: ['', Validators.required]
        });
    }
    //   getStoreList() {
    //     this.apiService.storeList().subscribe((data) => {
    //       this.storelist = data;
    //       console.log(this.storelist);
    //   });
    //  }
    //  onStoreChange(e){
    //  this.officeID = this.storeUserForm.value.SUBACCT_OFFICE_ID;
    //   this.storeName = e.target.options[e.target.options.selectedIndex].text;
    //   console.log(this.officeID);
    //   this.showApprovedBank= false;
    // }
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
    get f1() { return this.storeUserForm.controls; }
    get f() { return this.addStoreBankForm.controls; }
    getDisplayApprovedBank() {
        this.submitted1 = true;
        // this.emptyInput = this.storeUserForm.value.SUBACCT_OFFICE_ID;
        // if( this.emptyInput != ""){
        this.apiService.getCall(this.apiService.baseURL + '/GetDisplayApprovedBank/' + this.accountid + "/" + this.subaccountid + "/" + this.storeid)
            .subscribe(data => {
            this.approvedBankList = data.RETAIL_STS_BNKDTL_WORKFLOW_APPROVAL;
            console.log(data);
            this.showApprovedBank = true;
        }, (error) => {
            this.toastr.error(error.error.Message, '', {
                timeOut: 5000,
            });
        });
        //}
    }
    sendToBackOfficeForApproval() {
        this.apiService.getCall(this.apiService.baseURL + '/SendToBackOfficeForApproval/' + this.accountid + "/" + this.subaccountid + "/" + this.storeid)
            .subscribe(data => {
            console.log(data);
            this.toastr.success(data.Message, '', {
                timeOut: 5000,
            });
        }, (error) => {
            this.toastr.error(error.error.Message, '', {
                timeOut: 5000,
            });
        });
    }
    openModal(addStoreBankFormModal) {
        this.emptyInput = this.storeUserForm.value.SUBACCT_OFFICE_ID;
        // if( this.emptyInput != ""){
        this.modalRef = this.modalService.show(addStoreBankFormModal, Object.assign({}, { class: 'width-720' }));
        // }
    }
    addStoreBank() {
        let currentDate = new Date();
        let currentDateLocal = currentDate.toLocaleDateString();
        let addStoreBankData = {
            RETAIL_D2C_ACCT_ID: this.accountid,
            RETAIL_D2C_SUBACCT_ID: this.subaccountid,
            RETAIl_D2C_OFFICE_REGID: this.storeid,
            RETAIL_D2C_BANK_NAME: this.addStoreBankForm.value.RETAIL_D2C_BANK_NAME,
            RETAIL_D2C_BANK_ACCOUNT_NUMBER: this.addStoreBankForm.value.RETAIL_D2C_BANK_ACCOUNT_NUMBER,
            RETAIL_D2C_BANK_IFSC_CODE: this.addStoreBankForm.value.RETAIL_D2C_BANK_IFSC_CODE,
            RETAIL_D2C_TYP_OF_BANK_ACCOUNT: this.addStoreBankForm.value.RETAIL_D2C_TYP_OF_BANK_ACCOUNT,
            RETAIL_BRANCH_ADDRESS_DETAIL: this.addStoreBankForm.value.RETAIL_BRANCH_ADDRESS_DETAIL,
            RETAIL_BANK_ACCOUNT_CANCLD_CHEQUE_IMG: this.base64textString,
            RETAIL_CHQ_IMAGE: this.base64textString,
            RETAIL_STORE_BANK_ADDED_DATETIME: currentDateLocal,
            RETAIL_STORE_BANK_BACKOFFICE_WRKFLOW_APPROVAL: null,
            RETAIL_STORE_BANK_BACKOFFICE_APPROVED_LOCKED_FLG: null,
            RETAIL_D2C_SYSTEM_BANK_DELETION_DATETIME: null,
            RETAIL_D2C_SYSTEM_BANK_DELETION_FLG: null
        };
        this.submitted = true;
        if (this.addStoreBankForm.invalid) {
            return;
        }
        console.log(addStoreBankData);
        this.apiService.postCall(this.apiService.baseURL + '/AddStoreBank', addStoreBankData)
            .subscribe(data => {
            this.addStoreBankList = data;
            console.log(data);
            this.toastr.success('Add Successfully', '', { timeOut: 5000, });
            //   this.getUserStoreList();
        }, (error) => {
            this.toastr.error(error.error.Message, '', {
                timeOut: 5000,
            });
        });
    }
}
AddBankKYCComponent.ɵfac = function AddBankKYCComponent_Factory(t) { return new (t || AddBankKYCComponent)(i0.ɵɵdirectiveInject(i1.ApiService), i0.ɵɵdirectiveInject(i2.BsModalService), i0.ɵɵdirectiveInject(i3.FormBuilder), i0.ɵɵdirectiveInject(i4.ToastrService)); };
AddBankKYCComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AddBankKYCComponent, selectors: [["app-add-bank-kyc"]], decls: 21, vars: 3, consts: [[1, "row"], [1, "col-md-12"], [1, "heading-title"], [3, "formGroup"], [1, "topLevel"], [1, "col-md-6"], [1, "form-group"], [1, "form-control", "form-level", "no-border"], [1, "col-md-3"], [1, "clear"], [1, "btn", "width-100", "custom-btn", 3, "click"], ["class", "card exiting-office-table mt-2 pb-0", 4, "ngIf"], ["addStoreBankFormModal", ""], [1, "card", "exiting-office-table", "mt-2", "pb-0"], [1, "card-header"], [1, "btn", "custom-btn", "pull-right", 3, "click"], [1, "card-body", "pa-0"], [1, "table"], [1, "actdct_icon"], [4, "ngIf", "ngIfElse"], ["elseBlock", ""], ["elseBlock1", ""], ["class", "exiting-office-table mt-2 pb-0", 4, "ngIf"], ["src", "assets/images/active_icon.png"], ["src", "assets/images/deactive_icon.png"], [1, "exiting-office-table", "mt-2", "pb-0"], [1, "col-md-5"], [1, "txt-icon"], ["elseBlock2", ""], ["colspan", "2"], [1, "delete-icon"], [1, "icon"], [1, "fa", "fa-edit"], [1, "fa", "fa", "fa-trash"], [1, "btn", "mb-3", "custom-btn", "pull-right", 3, "click"], [1, "modal-header"], [1, "modal-title", "pull-left"], [1, "small"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", 3, "click"], ["aria-hidden", "true"], ["formControlName", "RETAIL_D2C_BANK_NAME", 1, "form-control", 3, "ngClass"], ["value", ""], ["value", "ICICI Bank"], ["value", "State Bank of India"], ["value", "Axis Bank"], ["value", "Bank of India"], ["value", "Kotak Bank"], ["value", "HDFC"], ["value", "Central Bank of India"], ["class", "invalid-feedback", 4, "ngIf"], ["formControlName", "RETAIL_D2C_TYP_OF_BANK_ACCOUNT", 1, "form-control", 3, "ngClass"], ["value", "Current"], ["value", "Saving"], ["type", "text", "formControlName", "RETAIL_D2C_BANK_ACCOUNT_NUMBER", 1, "form-control", 3, "ngClass"], ["type", "text", "formControlName", "RETAIL_D2C_BANK_IFSC_CODE", 1, "form-control", 3, "ngClass"], ["type", "text", "formControlName", "RETAIL_BRANCH_ADDRESS_DETAIL", 1, "form-control", 3, "ngClass"], [1, "custom-file", "fileInputProfileWrap"], ["name", "file", "type", "file", "formControlName", "RETAIL_BANK_ACCOUNT_CANCLD_CHEQUE_IMG", 1, "custom-file-input", 3, "ngClass", "change"], [1, "custom-file-label"], ["class", "img-space", 4, "ngIf"], [1, "col-md-12", "mt-1"], ["type", "button", 1, "btn", "col-md-3", "custom-btn", "float-right", 3, "click"], [1, "invalid-feedback"], [4, "ngIf"], [1, "img-space"], [3, "src"]], template: function AddBankKYCComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
        i0.ɵɵtext(3, "Manage My Store Bank KYC");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(4, "form", 3)(5, "div", 4)(6, "div", 0)(7, "div", 5)(8, "div", 6)(9, "label");
        i0.ɵɵtext(10, "Store");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "div", 7);
        i0.ɵɵtext(12);
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(13, "div", 8)(14, "label", 9);
        i0.ɵɵtext(15, "\u00A0");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(16, "button", 10);
        i0.ɵɵlistener("click", function AddBankKYCComponent_Template_button_click_16_listener() { return ctx.getDisplayApprovedBank(); });
        i0.ɵɵtext(17, "Display my Store Bank");
        i0.ɵɵelementEnd()()()()();
        i0.ɵɵtemplate(18, AddBankKYCComponent_div_18_Template, 40, 9, "div", 11);
        i0.ɵɵtemplate(19, AddBankKYCComponent_ng_template_19_Template, 78, 28, "ng-template", null, 12, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("formGroup", ctx.storeUserForm);
        i0.ɵɵadvance(8);
        i0.ɵɵtextInterpolate1(" ", ctx.storeName, " ");
        i0.ɵɵadvance(6);
        i0.ɵɵproperty("ngIf", ctx.showApprovedBank);
    } }, dependencies: [i5.NgClass, i5.NgIf, i3.ɵNgNoValidate, i3.NgSelectOption, i3.ɵNgSelectMultipleOption, i3.DefaultValueAccessor, i3.SelectControlValueAccessor, i3.NgControlStatus, i3.NgControlStatusGroup, i3.FormGroupDirective, i3.FormControlName], styles: [".heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  padding: 10px 5px 10px;\r\n  font-size: 20px;\r\n}\r\n\r\n.topLevel[_ngcontent-%COMP%] {\r\n  background: #fff;\r\n  padding: 20px;\r\n  margin: 0;\r\n  border-radius: 5px;\r\n}\r\n\r\n.custom-file[_ngcontent-%COMP%] {\r\n   height: 100%;\r\n}\r\n\r\nh1.heading-title[_ngcontent-%COMP%] {\r\n\r\n\r\n  span {\r\n      font-size: 10px;\r\n      text-transform: inherit;\r\n      background: #495057;\r\n      color: #fff;\r\n      padding: 10px 15px;\r\n      border-radius: 25px;\r\n  }\r\n}\r\n\r\nh1.heading-title[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  max-width: 65px;\r\n  margin-right: 5px;\r\n}\r\n\r\nh1.heading-title[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  font-weight: 400;\r\n  font-size: 13px;\r\n  position: absolute;\r\n  left: 80px;\r\n  bottom: 4px;\r\n  color: grey;\r\n}\r\n\r\n\r\n\r\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n  padding: 5px;\r\n  line-height: 18px;\r\n}\r\n\r\ntd.actdct_icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  max-width: 50px;\r\n}\r\n\r\n.search-list-label[_ngcontent-%COMP%] {\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%] {\r\n  font-size: 14px;\r\n  min-height: 36px;\r\n}\r\n\r\n\r\nlabel.clear[_ngcontent-%COMP%] {\r\n  display: block;\r\n  margin: 3px 0 0 0;\r\n}\r\n\r\n.width-100[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\n.txt-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  max-width: 50px;\r\n  margin-left: 5px;\r\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AddBankKYCComponent, [{
        type: Component,
        args: [{ selector: 'app-add-bank-kyc', template: "<div class=\"row\">\n  <div class=\"col-md-12\">\n    <h1 class=\"heading-title\">Manage My Store Bank KYC</h1>\n  </div>\n</div>\n<!-- <div class=\"card\">\n    <div class=\"card-body\">\n        <div class=\"form-field\">\n            <div class=\"col-md-12 reg_address\">\n                <div class=\"custom-radio form-check-inline\">\n                    <input type=\"radio\" class=\"custom-control-input\" name=\"optradio\">\n                    <label class=\"custom-control-label\">GST Certificate</label>\n                  </div>  \n\n                  <div class=\"custom-radio form-check-inline\">\n                    <input type=\"radio\" class=\"custom-control-input\" name=\"optradio\">\n                    <label class=\"custom-control-label\">Trade Certificate/License</label>\n                  </div>  \n                  <div class=\"custom-radio form-check-inline\">\n                    <input type=\"radio\" class=\"custom-control-input\" name=\"optradio\">\n                    <label class=\"custom-control-label\">Shop & Establishment License</label>\n                  </div> \n                  <div class=\"custom-radio form-check-inline\">\n                    <input type=\"radio\" class=\"custom-control-input\" name=\"optradio\">\n                    <label class=\"custom-control-label\">Udhyog Aadhar</label>\n                  </div>\n                 \n                  <div class=\"custom-radio form-check-inline\">\n                    <input type=\"radio\" class=\"custom-control-input\" name=\"optradio\">\n                    <label class=\"custom-control-label\">FSSAI Registration</label>\n                  </div>\n                  <div class=\"custom-radio form-check-inline\">\n                    <input type=\"radio\" class=\"custom-control-input\" name=\"optradio\">\n                    <label class=\"custom-control-label\">Store/Godown</label>\n                  </div>\n            </div>\n            <div class=\"row Upload-file\">\n         <div class=\"col-md-12\">\n            <div class=\"form-group\">\n                <label>Upload your Selected Document</label>\n                <div class=\"custom-file\">\n                    <input type=\"file\" class=\"custom-file-input\" id=\"myInput\" aria-describedby=\"myInput\">\n                    <label class=\"custom-file-label\" for=\"myInput\">Choose file</label>\n                </div>\n              </div>\n         </div> \n        </div>\n        </div>\n    </div>\n   \n  </div> -->\n\n\n<form [formGroup]=\"storeUserForm\">\n  <div class=\"topLevel\">\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n          <label>Store</label>\n          <div class=\"form-control form-level no-border\">\n            {{storeName}}\n          </div>\n          <!-- <select class=\"form-control\" formControlName=\"SUBACCT_OFFICE_ID\" (change)=\"onStoreChange($event)\"\n            [ngClass]=\"{ 'is-invalid': submitted1 && f1.SUBACCT_OFFICE_ID.errors }\">\n            <option value=\"\">Select</option>\n            <option *ngFor=\"let store of storelist\" [value]=\"store.RETAIL_D2C_ACCT_INTRNL_OFFICE_REGID\">\n              {{store.RETAIL_D2C_SUBACCT_OFFICE_NAME}}</option>\n          </select>\n          <div *ngIf=\"submitted1 && f1.SUBACCT_OFFICE_ID.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f1.SUBACCT_OFFICE_ID.errors.required\">Store is required</div>\n          </div> -->\n        </div>\n      </div>\n      <div class=\"col-md-3\">\n        <label class=\"clear\">&nbsp;</label>\n        <button (click)=\"getDisplayApprovedBank()\" class=\"btn width-100 custom-btn\">Display my Store Bank</button>\n      </div>\n    </div>\n\n  </div>\n</form>\n\n<div class=\"card exiting-office-table mt-2 pb-0\" *ngIf=\"showApprovedBank\">\n  <div class=\"card-header\">\n    Back Office Approved Bank\n    <button (click)=\"openModal(addStoreBankFormModal)\" class=\"btn custom-btn pull-right\">Add Store Bank</button>\n  </div>\n  <div class=\"card-body pa-0\">\n    <table class=\"table\">\n      <thead>\n        <tr>\n          <th>Bank Name</th>\n          <th>Bank Account No.</th>\n          <th>IFSC Code</th>\n          <th>Type of Account</th>\n          <th>Active Status</th>\n          <th>Locked</th>\n          <!-- <th colspan=\"2\">Action</th> -->\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>{{approvedBankList.RETAIL_D2C_BANK_NAME}}</td>\n          <td>{{approvedBankList.RETAIL_D2C_BANK_ACCOUNT_NUMBER}}</td>\n          <td>{{approvedBankList.RETAIL_D2C_BANK_IFSC_CODE}}</td>\n          <td>{{approvedBankList.RETAIL_D2C_TYP_OF_BANK_ACCOUNT}}</td>\n\n\n          <td class=\"actdct_icon\">\n            <span *ngIf=\"approvedBankList.RETAIL_STORE_BANK_BACKOFFICE_WRKFLOW_APPROVAL; else elseBlock\">\n              <img src=\"assets/images/active_icon.png\">\n            </span>\n            <ng-template #elseBlock><img src=\"assets/images/deactive_icon.png\"></ng-template>\n          </td>\n\n          <td class=\"actdct_icon\">\n            <span *ngIf=\"approvedBankList.RETAIL_STORE_BANK_BACKOFFICE_APPROVED_LOCKED_FLG; else elseBlock1\">\n              <img src=\"assets/images/active_icon.png\">\n            </span>\n            <ng-template #elseBlock1><img src=\"assets/images/deactive_icon.png\"></ng-template>\n          </td>\n\n          <!-- <td class=\"delete-icon\">\n            <span class=\"icon\"><i class=\"fa fa-edit\"></i></span>\n          </td>\n          <td class=\"delete-icon\">\n            <span class=\"icon\"><i class=\"fa fa fa-trash\"></i></span>\n          </td> -->\n        </tr>\n      </tbody>\n    </table>\n\n  </div>\n  <div class=\"exiting-office-table mt-2 pb-0\" *ngIf=\"showApprovedBank\">\n    <div class=\"card-header\">\n      Back Office Work flow Approvals\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-5\">\n        <p class=\"txt-icon\">Bank added & need Work flow Approvals\n          <span *ngIf=\"approvedBankList.RETAIL_STORE_BANK_BACKOFFICE_WRKFLOW_APPROVAL; else elseBlock2\">\n            <img src=\"assets/images/active_icon.png\">\n          </span>\n          <ng-template #elseBlock2><img src=\"assets/images/deactive_icon.png\"></ng-template>\n        </p>\n      </div>\n      <div class=\"col-md-5\">\n        <p class=\"txt-icon\">Edit/Update Allowed\n          <!-- <span *ngIf=\"approvedBankList.RETAIL_STORE_BANK_BACKOFFICE_WRKFLOW_APPROVAL; else elseBlock3\">\n            <img src=\"assets/images/active_icon.png\">\n          </span> -->\n         <img src=\"assets/images/deactive_icon.png\">\n        </p>\n      </div>\n    </div>\n  <div class=\"card-body pa-0\">\n    <table class=\"table\">\n      <thead>\n        <tr>\n          <th>Bank Name</th>\n          <th>Bank Account No.</th>\n          <th>IFSC Code</th>\n          <th>Type of Account</th>\n          <th>Branch Address</th>\n          <th colspan=\"2\">Action</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>{{approvedBankList.RETAIL_D2C_BANK_NAME}}</td>\n          <td>{{approvedBankList.RETAIL_D2C_BANK_ACCOUNT_NUMBER}}</td>\n          <td>{{approvedBankList.RETAIL_D2C_BANK_IFSC_CODE}}</td>\n          <td>{{approvedBankList.RETAIL_D2C_TYP_OF_BANK_ACCOUNT}}</td>\n          <td>{{approvedBankList.RETAIL_BRANCH_ADDRESS_DETAIL}}</td>\n          <td class=\"delete-icon\">\n            <span class=\"icon\"><i class=\"fa fa-edit\"></i></span>\n          </td>\n          <td class=\"delete-icon\">\n            <span class=\"icon\"><i class=\"fa fa fa-trash\"></i></span>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n</div>\n<button (click)=\"sendToBackOfficeForApproval()\" class=\"btn mb-3 custom-btn pull-right\">Send to back office for Approval</button>\n  </div>\n\n</div>\n\n\n<ng-template #addStoreBankFormModal>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\">Add my Store Bank <span class=\"small\">Store Id: {{storeid}}</span></h4>\n     <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n     <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n<form [formGroup]=\"addStoreBankForm\">\n  <div class=\"topLevel\">\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n          <label>Enter Bank Name</label>\n          <select class=\"form-control\" formControlName=\"RETAIL_D2C_BANK_NAME\"\n            [ngClass]=\"{ 'is-invalid': submitted && f.RETAIL_D2C_BANK_NAME.errors }\">\n            <option value=\"\">Select</option>\n            <option value=\"ICICI Bank\">ICICI Bank</option>\n            <option value=\"State Bank of India\">State Bank of India</option>\n            <option value=\"Axis Bank\">Axis Bank</option>\n            <option value=\"Bank of India\">Bank of India</option>\n            <option value=\"Kotak Bank\">Kotak Bank</option>\n            <option value=\"HDFC\">HDFC</option>\n            <option value=\"Central Bank of India\">Central Bank of India</option>\n          </select>\n          <div *ngIf=\"submitted && f.RETAIL_D2C_BANK_NAME.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.RETAIL_D2C_BANK_NAME.errors.required\">Field is required</div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n          <label>Type of Account</label>\n          <select class=\"form-control\" formControlName=\"RETAIL_D2C_TYP_OF_BANK_ACCOUNT\"\n            [ngClass]=\"{ 'is-invalid': submitted && f.RETAIL_D2C_TYP_OF_BANK_ACCOUNT.errors }\">\n            <option value=\"\">Select</option>\n            <option value=\"Current\">Current</option>\n            <option value=\"Saving\">Saving</option>\n          </select>\n          <div *ngIf=\"submitted && f.RETAIL_D2C_TYP_OF_BANK_ACCOUNT.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.RETAIL_D2C_TYP_OF_BANK_ACCOUNT.errors.required\">Field is required</div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n          <label>Enter Bank Account Number</label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"RETAIL_D2C_BANK_ACCOUNT_NUMBER\"\n            [ngClass]=\"{ 'is-invalid': submitted && f.RETAIL_D2C_BANK_ACCOUNT_NUMBER.errors }\" />\n          <div *ngIf=\"submitted && f.RETAIL_D2C_BANK_ACCOUNT_NUMBER.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.RETAIL_D2C_BANK_ACCOUNT_NUMBER.errors.required\">Field is required</div>\n            <div *ngIf=\"f.RETAIL_D2C_BANK_ACCOUNT_NUMBER.errors.minlength\">Field must be at least 9 characters</div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n          <label>Enter Bank IFSC Code</label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"RETAIL_D2C_BANK_IFSC_CODE\"\n            [ngClass]=\"{ 'is-invalid': submitted && f.RETAIL_D2C_BANK_IFSC_CODE.errors }\" />\n          <div *ngIf=\"submitted && f.RETAIL_D2C_BANK_IFSC_CODE.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.RETAIL_D2C_BANK_IFSC_CODE.errors.required\">Field is required</div>\n          </div>\n        </div>\n      </div>\n\n\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n          <label>Bank Branch Address</label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"RETAIL_BRANCH_ADDRESS_DETAIL\"\n            [ngClass]=\"{ 'is-invalid': submitted && f.RETAIL_BRANCH_ADDRESS_DETAIL.errors }\" />\n          <div *ngIf=\"submitted && f.RETAIL_BRANCH_ADDRESS_DETAIL.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.RETAIL_BRANCH_ADDRESS_DETAIL.errors.required\">Field is required</div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n          <fieldset class=\"form-group\">\n            <label>Attach Bank Canceled Cheque</label>\n            <div class=\"custom-file fileInputProfileWrap\">\n              <input name=\"file\" type=\"file\" class=\"custom-file-input\" (change)=\"onSelectedFile($event)\"\n                formControlName=\"RETAIL_BANK_ACCOUNT_CANCLD_CHEQUE_IMG\"\n                [ngClass]=\"{ 'is-invalid': submitted && f.RETAIL_BANK_ACCOUNT_CANCLD_CHEQUE_IMG.errors }\">\n              <div *ngIf=\"submitted && f.RETAIL_BANK_ACCOUNT_CANCLD_CHEQUE_IMG.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.RETAIL_BANK_ACCOUNT_CANCLD_CHEQUE_IMG.errors.required\">Account is required</div>\n\n              </div>\n              <label class=\"custom-file-label\">{{uploadLabel}}</label>\n              <div class=\"img-space\" *ngIf=\"isImageSaved\">\n                <ng-container>\n                  <img [src]=\"'data:image/jpeg;base64,' + base64textString\">\n                </ng-container>\n              </div>\n\n            </div>\n          </fieldset>\n        </div>\n      </div>\n\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-12 mt-1\">\n        <button (click)=\"addStoreBank()\" type=\"button\" class=\"btn col-md-3 custom-btn float-right\">Save Store\n          Bank</button>\n      </div>\n    </div>\n  </div>\n</form>\n</ng-template>\n<!-- <div class=\"card\">\n  <div class=\"card-header\">Add Primary Bank/Document</div>\n  <div class=\"card-body\"><br>\n    <div class=\"form-field\">\n      <div class=\"row\">\n        <div class=\"col-md-4\">\n          <div class=\"form-group\">\n            <label>Primary Bank Name</label>\n            <input type=\"text\" class=\"form-control\" />\n          </div>\n        </div>\n        <div class=\"col-md-4\">\n          <div class=\"form-group\">\n            <label>Branch Name</label>\n            <input type=\"text\" class=\"form-control\" />\n          </div>\n        </div>\n        <div class=\"col-md-4\">\n          <div class=\"form-group\">\n            <label>Account Number</label>\n            <input type=\"text\" class=\"form-control\" />\n          </div>\n        </div>\n\n        <div class=\"col-md-4\">\n          <div class=\"form-group\">\n            <label>IFSC Code</label>\n            <input type=\"text\" class=\"form-control\" />\n          </div>\n        </div>\n\n        <div class=\"col-md-8\">\n          <div class=\"Upload-file\">\n            <div class=\"form-group\">\n              <label>Upload Cancelled Cheque Image</label>\n              <div class=\"custom-file\">\n                <input type=\"file\" class=\"custom-file-input\" id=\"myInput\" aria-describedby=\"myInput\">\n                <label class=\"custom-file-label\" for=\"myInput\">Choose file</label>\n              </div>\n            </div>\n          </div>\n        </div>\n\n      </div>\n\n    </div>\n  </div>\n\n</div> -->", styles: ["\r\n\r\n.heading h2 {\r\n  padding: 10px 5px 10px;\r\n  font-size: 20px;\r\n}\r\n\r\n.topLevel {\r\n  background: #fff;\r\n  padding: 20px;\r\n  margin: 0;\r\n  border-radius: 5px;\r\n}\r\n\r\n.custom-file {\r\n   height: 100%;\r\n}\r\n\r\nh1.heading-title {\r\n\r\n\r\n  span {\r\n      font-size: 10px;\r\n      text-transform: inherit;\r\n      background: #495057;\r\n      color: #fff;\r\n      padding: 10px 15px;\r\n      border-radius: 25px;\r\n  }\r\n}\r\n\r\nh1.heading-title img {\r\n  max-width: 65px;\r\n  margin-right: 5px;\r\n}\r\n\r\nh1.heading-title small {\r\n  display: inline-block;\r\n  font-weight: 400;\r\n  font-size: 13px;\r\n  position: absolute;\r\n  left: 80px;\r\n  bottom: 4px;\r\n  color: grey;\r\n}\r\n\r\n\r\n\r\n.table th, .table td {\r\n  padding: 5px;\r\n  line-height: 18px;\r\n}\r\n\r\ntd.actdct_icon img {\r\n  max-width: 50px;\r\n}\r\n\r\n.search-list-label {\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.btn {\r\n  font-size: 14px;\r\n  min-height: 36px;\r\n}\r\n\r\n\r\nlabel.clear {\r\n  display: block;\r\n  margin: 3px 0 0 0;\r\n}\r\n\r\n.width-100 {\r\n  width: 100%;\r\n}\r\n\r\n.txt-icon img {\r\n  max-width: 50px;\r\n  margin-left: 5px;\r\n}"] }]
    }], function () { return [{ type: i1.ApiService }, { type: i2.BsModalService }, { type: i3.FormBuilder }, { type: i4.ToastrService }]; }, null); })();
//# sourceMappingURL=add-bank-kyc.component.js.map