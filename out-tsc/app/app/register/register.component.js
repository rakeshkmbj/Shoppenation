import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@ng-bootstrap/ng-bootstrap";
import * as i3 from "../services/register.service";
import * as i4 from "ngx-toastr";
import * as i5 from "@angular/common";
import * as i6 from "@angular/forms";
function RegisterComponent_div_6_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 48);
    i0.ɵɵtext(1, "Mobile Number verified successfully ");
    i0.ɵɵelement(2, "img", 49);
    i0.ɵɵelementEnd();
} }
function RegisterComponent_div_6_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "Mobile Number is required");
    i0.ɵɵelementEnd();
} }
function RegisterComponent_div_6_div_6_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "Please, Enter 10 digit Mobile Number");
    i0.ɵɵelementEnd();
} }
function RegisterComponent_div_6_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 50);
    i0.ɵɵtemplate(1, RegisterComponent_div_6_div_6_div_1_Template, 2, 0, "div", 51);
    i0.ɵɵtemplate(2, RegisterComponent_div_6_div_6_div_2_Template, 2, 0, "div", 51);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.f.MobileNo.errors.required);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.f.MobileNo.errors.pattern);
} }
function RegisterComponent_div_6_div_18_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 48);
    i0.ɵɵtext(1, "GST verified successfully ");
    i0.ɵɵelement(2, "img", 49);
    i0.ɵɵelementEnd();
} }
function RegisterComponent_div_6_div_18_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "GST Number is required");
    i0.ɵɵelementEnd();
} }
function RegisterComponent_div_6_div_18_div_7_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "Please, Enter 15 digit GST Number");
    i0.ɵɵelementEnd();
} }
function RegisterComponent_div_6_div_18_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 50);
    i0.ɵɵtemplate(1, RegisterComponent_div_6_div_18_div_7_div_1_Template, 2, 0, "div", 51);
    i0.ɵɵtemplate(2, RegisterComponent_div_6_div_18_div_7_div_2_Template, 2, 0, "div", 51);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r16 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r16.f.GSTNO.errors.required);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r16.f.GSTNO.errors.pattern);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
function RegisterComponent_div_6_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r20 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 52)(1, "label");
    i0.ɵɵtext(2, "Enter GSTIN No.");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "input", 53);
    i0.ɵɵelementStart(4, "button", 54);
    i0.ɵɵlistener("click", function RegisterComponent_div_6_div_18_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r20); const ctx_r19 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r19.verifyGST()); });
    i0.ɵɵtext(5, " Verify ");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, RegisterComponent_div_6_div_18_div_6_Template, 3, 0, "div", 22);
    i0.ɵɵtemplate(7, RegisterComponent_div_6_div_18_div_7_Template, 3, 2, "div", 23);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(3, _c0, ctx_r6.submittedgst && ctx_r6.f.GSTNO.errors));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r6.gstVerifyMessage);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r6.submittedgst && ctx_r6.f.GSTNO.errors);
} }
function RegisterComponent_div_6_div_19_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 62);
    i0.ɵɵtext(1, "OTP is not valid");
    i0.ɵɵelementEnd();
} }
function RegisterComponent_div_6_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r23 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 55)(1, "label", 56);
    i0.ɵɵtext(2, "Please Enter OTP");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "input", 57);
    i0.ɵɵtemplate(4, RegisterComponent_div_6_div_19_div_4_Template, 2, 0, "div", 58);
    i0.ɵɵelementStart(5, "div", 59)(6, "button", 60);
    i0.ɵɵtext(7, "Resend");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "button", 61);
    i0.ɵɵlistener("click", function RegisterComponent_div_6_div_19_Template_button_click_8_listener() { i0.ɵɵrestoreView(_r23); const ctx_r22 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r22.getOTPVerify()); });
    i0.ɵɵtext(9, "Proceed");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", ctx_r7.otpNotValid);
} }
function RegisterComponent_div_6_div_24_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "Please provide valid Email ID as your initial access link will be sent on the same mail ID");
    i0.ɵɵelementEnd();
} }
function RegisterComponent_div_6_div_24_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "Please, Enter valid Email");
    i0.ɵɵelementEnd();
} }
function RegisterComponent_div_6_div_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 50);
    i0.ɵɵtemplate(1, RegisterComponent_div_6_div_24_div_1_Template, 2, 0, "div", 51);
    i0.ɵɵtemplate(2, RegisterComponent_div_6_div_24_div_2_Template, 2, 0, "div", 51);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r8.f.USR_EMAIL_ID.errors.required);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r8.f.USR_EMAIL_ID.errors.pattern);
} }
function RegisterComponent_div_6_option_33_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 63);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const plan_r26 = ctx.$implicit;
    i0.ɵɵproperty("value", plan_r26.Id);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(plan_r26.Value);
} }
function RegisterComponent_div_6_div_34_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "This field is required");
    i0.ɵɵelementEnd();
} }
function RegisterComponent_div_6_div_34_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 50);
    i0.ɵɵtemplate(1, RegisterComponent_div_6_div_34_div_1_Template, 2, 0, "div", 51);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r10 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r10.f.USER_SELCTD_SUBSCRIBER_PLAN_ID.errors.required);
} }
function RegisterComponent_div_6_option_44_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 63);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const pf_r28 = ctx.$implicit;
    i0.ɵɵproperty("value", pf_r28.id);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(pf_r28.plan);
} }
function RegisterComponent_div_6_div_45_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "This field is required");
    i0.ɵɵelementEnd();
} }
function RegisterComponent_div_6_div_45_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 50);
    i0.ɵɵtemplate(1, RegisterComponent_div_6_div_45_div_1_Template, 2, 0, "div", 51);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r12 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r12.f.USR_SELECTD_PAYMNT_FREQUENCY_ID.errors.required);
} }
function RegisterComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r31 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 19)(1, "div", 13)(2, "label", 20);
    i0.ɵɵtext(3, " Register Mobile Number");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "input", 21);
    i0.ɵɵtemplate(5, RegisterComponent_div_6_div_5_Template, 3, 0, "div", 22);
    i0.ɵɵtemplate(6, RegisterComponent_div_6_div_6_Template, 3, 2, "div", 23);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 24)(8, "label", 25);
    i0.ɵɵtext(9, "Registration of GSTIN Available");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "div", 26)(11, "label", 27)(12, "input", 28);
    i0.ɵɵlistener("change", function RegisterComponent_div_6_Template_input_change_12_listener($event) { i0.ɵɵrestoreView(_r31); const ctx_r30 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r30.showGSTField($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵtext(13, "Yes ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "div", 29)(15, "label", 27)(16, "input", 30);
    i0.ɵɵlistener("change", function RegisterComponent_div_6_Template_input_change_16_listener($event) { i0.ɵɵrestoreView(_r31); const ctx_r32 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r32.showGSTField($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵtext(17, "No ");
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(18, RegisterComponent_div_6_div_18_Template, 8, 5, "div", 31);
    i0.ɵɵtemplate(19, RegisterComponent_div_6_div_19_Template, 10, 1, "div", 32);
    i0.ɵɵelementStart(20, "div", 13)(21, "label", 33);
    i0.ɵɵtext(22, "Email ID");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(23, "input", 34);
    i0.ɵɵtemplate(24, RegisterComponent_div_6_div_24_Template, 3, 2, "div", 23);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "div", 35)(26, "label", 36);
    i0.ɵɵtext(27, "Choose Subscription Plan");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "div", 37)(29, "div", 38)(30, "select", 39);
    i0.ɵɵlistener("change", function RegisterComponent_div_6_Template_select_change_30_listener($event) { i0.ɵɵrestoreView(_r31); const ctx_r33 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r33.changeSubsPlan($event)); });
    i0.ɵɵelementStart(31, "option", 40);
    i0.ɵɵtext(32, "Choose Subscription Plan");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(33, RegisterComponent_div_6_option_33_Template, 2, 2, "option", 41);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(34, RegisterComponent_div_6_div_34_Template, 2, 1, "div", 23);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(35, "div", 42)(36, "button", 43);
    i0.ɵɵtext(37, "Plan Details");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(38, "div", 13)(39, "label", 36);
    i0.ɵɵtext(40, "Choose Payment Frequancy");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(41, "select", 44);
    i0.ɵɵlistener("change", function RegisterComponent_div_6_Template_select_change_41_listener($event) { i0.ɵɵrestoreView(_r31); const ctx_r34 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r34.changePaymentFrequancy($event)); });
    i0.ɵɵelementStart(42, "option", 45);
    i0.ɵɵtext(43, "Choose Subscription Plan");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(44, RegisterComponent_div_6_option_44_Template, 2, 2, "option", 41);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(45, RegisterComponent_div_6_div_45_Template, 2, 1, "div", 23);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(46, "div", 46)(47, "p");
    i0.ɵɵtext(48, "Read and Accept Terms & Condition of Usage ");
    i0.ɵɵelement(49, "img", 47);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(50, "button", 18);
    i0.ɵɵlistener("click", function RegisterComponent_div_6_Template_button_click_50_listener() { i0.ɵɵrestoreView(_r31); const ctx_r35 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r35.PreActivation()); });
    i0.ɵɵtext(51, "Proceed for Next Step");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(13, _c0, ctx_r0.submittedgst && ctx_r0.f.MobileNo.errors));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.mobileVerifyMessage);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.submittedgst && ctx_r0.f.MobileNo.errors);
    i0.ɵɵadvance(12);
    i0.ɵɵproperty("ngIf", ctx_r0.showGstInput);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.showotpDiv);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(15, _c0, ctx_r0.submitted && ctx_r0.f.USR_EMAIL_ID.errors));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.submitted && ctx_r0.f.USR_EMAIL_ID.errors);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(17, _c0, ctx_r0.submitted && ctx_r0.f.USER_SELCTD_SUBSCRIBER_PLAN_ID.errors));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r0.SubscriptionPlans);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.submitted && ctx_r0.f.USER_SELCTD_SUBSCRIBER_PLAN_ID.errors);
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(19, _c0, ctx_r0.submitted && ctx_r0.f.USR_SELECTD_PAYMNT_FREQUENCY_ID.errors));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r0.PaymentFrequancy);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.submitted && ctx_r0.f.USR_SELECTD_PAYMNT_FREQUENCY_ID.errors);
} }
function RegisterComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r37 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 64)(1, "div", 65)(2, "div", 66)(3, "h4", 2);
    i0.ɵɵtext(4, "View Details");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "table", 67)(6, "tr")(7, "td");
    i0.ɵɵtext(8, "Subscription Plan ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "td");
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "tr")(12, "td");
    i0.ɵɵtext(13, "Payment frequency ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "td");
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "tr")(17, "td");
    i0.ɵɵtext(18, "Annual Plan cost ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "td");
    i0.ɵɵtext(20);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(21, "tr")(22, "td");
    i0.ɵɵtext(23, "Payment Frequency Cost");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "td");
    i0.ɵɵtext(25);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(26, "tr")(27, "td");
    i0.ɵɵtext(28, "Sub-Total ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(29, "td");
    i0.ɵɵtext(30);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(31, "tr")(32, "td");
    i0.ɵɵtext(33, "GST ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(34, "td");
    i0.ɵɵtext(35);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(36, "tr", 68)(37, "td");
    i0.ɵɵtext(38, "Total ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(39, "td");
    i0.ɵɵtext(40);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(41, "tr")(42, "td");
    i0.ɵɵtext(43, "First Payment Payable Amount");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(44, "td");
    i0.ɵɵtext(45);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(46, "div", 69)(47, "div", 70)(48, "button", 71);
    i0.ɵɵtext(49, "Back");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(50, "div", 70)(51, "button", 72);
    i0.ɵɵlistener("click", function RegisterComponent_div_7_Template_button_click_51_listener() { i0.ɵɵrestoreView(_r37); const ctx_r36 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r36.next()); });
    i0.ɵɵtext(52, "Next");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(53, "label", 73)(54, "a");
    i0.ɵɵelement(55, "img", 47);
    i0.ɵɵtext(56, "View Performa Invoice");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(10);
    i0.ɵɵtextInterpolate(ctx_r1.SubscriptionPlan);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.Paymentfrequency);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.AnnualPlancost);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.PaymentFrequencyCost);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.Subtotal);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.GST);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.Total);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.FirstPaymentPayableAmount);
} }
function RegisterComponent_div_8_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r41 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 37)(1, "div", 82)(2, "label", 76);
    i0.ɵɵtext(3, "Card Number");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "input", 83);
    i0.ɵɵlistener("ngModelChange", function RegisterComponent_div_8_div_16_Template_input_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r41); const ctx_r40 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r40.cardNumber = $event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "div", 84)(6, "label", 76);
    i0.ɵɵtext(7, "CVV");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "input", 85);
    i0.ɵɵlistener("ngModelChange", function RegisterComponent_div_8_div_16_Template_input_ngModelChange_8_listener($event) { i0.ɵɵrestoreView(_r41); const ctx_r42 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r42.cvv = $event); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r39 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngModel", ctx_r39.cardNumber);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngModel", ctx_r39.cvv);
} }
function RegisterComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r44 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 74)(1, "div", 37)(2, "div", 75)(3, "label", 76);
    i0.ɵɵtext(4, "Enter Your Coupon Number");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(5, "input", 77, 78);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 79)(8, "label");
    i0.ɵɵtext(9, "\u00A0");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "button", 18);
    i0.ɵɵlistener("click", function RegisterComponent_div_8_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r44); const _r38 = i0.ɵɵreference(6); const ctx_r43 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r43.verifyCouponNumber(_r38)); });
    i0.ɵɵtext(11, "Verify");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(12, "div", 13)(13, "label", 76);
    i0.ɵɵtext(14, "Enter Your same Mobile Number which was used during Coupen Allocation ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "input", 80);
    i0.ɵɵlistener("keyup", function RegisterComponent_div_8_Template_input_keyup_15_listener($event) { i0.ɵɵrestoreView(_r44); const ctx_r45 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r45.getCardAndCVV($event)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(16, RegisterComponent_div_8_div_16_Template, 9, 2, "div", 81);
    i0.ɵɵelementStart(17, "div", 69)(18, "div", 70)(19, "button", 71);
    i0.ɵɵtext(20, "Back");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(21, "div", 70)(22, "button", 72);
    i0.ɵɵlistener("click", function RegisterComponent_div_8_Template_button_click_22_listener() { i0.ɵɵrestoreView(_r44); const ctx_r46 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r46.makePayments()); });
    i0.ɵɵtext(23, "Make Payment");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(16);
    i0.ɵɵproperty("ngIf", ctx_r2.validMobile);
} }
export class RegisterComponent {
    constructor(http, modalService, registerService, toastr) {
        this.http = http;
        this.modalService = modalService;
        this.registerService = registerService;
        this.toastr = toastr;
        this.baseUrl = "http://eguarddocshieldapi/carryr/b2b";
        this.disabled = false;
        this.submitted = false;
        this.showRegister = true;
        this.step1 = true;
        this.PaymentFrequancy = [{ "id": 1, "plan": "Monthly" },
            { "id": 2, "plan": "Quarterly" },
            { "id": 3, "plan": "Yearly" },
        ];
        this.registerForm = new FormGroup({
            MobileNo: new FormControl('', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
            GSTNO: new FormControl('', [Validators.required, Validators.pattern("^([0][1-9]|[1-2][0-9]|[3][0-7])([a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}[1-9a-zA-Z]{1}[zZ]{1}[0-9a-zA-Z]{1})+$")]),
            ConfirmationCode: new FormControl('', []),
            gstnchecked: new FormControl('Yes'),
            USR_EMAIL_ID: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$")]),
            SUPR_SELLER_SERVICE_ID: new FormControl(''),
            USER_SELCTD_SUBSCRIBER_PLAN_ID: new FormControl('', [Validators.required]),
            USR_SELECTD_PAYMNT_FREQUENCY_ID: new FormControl('', [Validators.required]),
            CARRYR_MART_COUPN_NUMBR: new FormControl('', []),
            CARRYR_MART_FREEBIE_CRDT_CARD_NO: new FormControl('', Validators.required),
            CARRYR_MART_FREEBIE_CRDT_CARD_CVV: new FormControl('', Validators.required),
        });
    }
    ngOnInit() {
        this.showGstInput = true;
        this.getSubscriptionPlans();
    }
    changeSubsPlan(e) {
        console.log(e.target.value);
    }
    changePaymentFrequancy(e) {
        console.log(e.target.value);
    }
    showGSTField(e) {
        if (e.target.value == "Yes") {
            this.showGstInput = true;
        }
        else {
            this.showGstInput = false;
        }
    }
    get f() {
        return this.registerForm.controls;
    }
    verifyGST() {
        this.submittedgst = true;
        if (this.registerForm.value.MobileNo.length != 10 || this.registerForm.value.GSTNO.length != 15) {
            alert('false');
            return;
        }
        let gstData = {
            MobileNo: this.registerForm.value.MobileNo,
            GSTNO: this.registerForm.value.GSTNO,
        };
        this.registerService.postCallHttp(this.baseUrl + '/GSTVerification', gstData).subscribe(data => {
            this.showotpDiv = true;
            // this.toastr.success(data);
            this.toastr.success((data));
        }, (err) => {
            alert('error');
            this.toastr.error((err['error']['Message']));
            this.showotpDiv = false;
        });
    }
    getSubscriptionPlans() {
        this.registerService.getCall(this.baseUrl + '/GetServiceSubscriptionPlans').subscribe((data) => {
            console.log(data);
            this.SubscriptionPlans = data;
            // this.planName = data.Value;
        });
    }
    getOTPVerify() {
        const mobileNumber = this.registerForm.value.MobileNo;
        const ConfirmationCode = this.registerForm.value.ConfirmationCode;
        this.registerService.getCall(this.baseUrl + '/VerifyMobile/' + mobileNumber + "/" + ConfirmationCode).subscribe((data) => {
            console.log(data);
            if (data == "false") {
                this.otpNotValid = true;
            }
            else {
                this.otpNotValid = false;
            }
        });
    }
    PreActivation() {
        this.submittedgst = true;
        this.submitted = true;
        if (this.submittedgst == true && this.submitted == true) {
            let date = new Date();
            let dateFormat = date.toISOString();
            let preActivationData = {
                USR_PRIMRY_MOBL_NUMBR: this.registerForm.value.MobileNo,
                PRIMRY_MOBL_NUMBR_VERYFYD_FLG: true,
                USR_GSTIN_NUMBR: this.registerForm.value.GSTNO,
                USR_GSTIN_NO_VERYFYD_FLG: true,
                USR_EMAIL_ID: this.registerForm.value.USR_EMAIL_ID,
                SUPR_SELLER_SERVICE_ID: 1,
                USER_SELCTD_SUBSCRIBER_PLAN_ID: +this.registerForm.value.USER_SELCTD_SUBSCRIBER_PLAN_ID,
                USR_SELECTD_PAYMNT_FREQUENCY_ID: +this.registerForm.value.USR_SELECTD_PAYMNT_FREQUENCY_ID,
                USR_ACCEPTANCE_TERMS_CONDITION_READ_AGREED_FLG: true,
                CARRYR_MART_30_DAYS_CREDT_FLG: true,
                USR_ACCEPTANCE_TERMS_CONDITION_READ_AGREED_DATETIME: dateFormat,
                ModifyBy: ''
            };
            this.registerService.postCallHttp(this.baseUrl + '/PreActivation', preActivationData).subscribe(data => {
                this.showOSPlan = true;
                this.showRegister = false;
                let summaryDetails = data;
                this.SubscriptionPlan = summaryDetails.CARRYR_MART_B2B_SUPR_SELLER_SERVICE_NAME;
                this.Paymentfrequency = summaryDetails.CARRYR_MART_FREQUENCY_NAME;
                this.AnnualPlancost = summaryDetails.CARRYR_MART_B2B_ANNUAL_SUBSCRIPTN_PLN_COST;
                this.PaymentFrequencyCost = summaryDetails.CARRYR_MART_B2B_PAYMNT_FRQUENCY_LOADING_COST;
                this.Subtotal = summaryDetails.CARRYR_MART_B2B_SUB_TOTAL_COST;
                this.GST = summaryDetails.CARRYR_MART_B2B_SUPR_SELLER_GST_SLAB;
                this.Total = summaryDetails.CARRYR_MART_B2B_TOTAL_COST;
                this.FirstPaymentPayableAmount = summaryDetails.CARRYR_MART_B2B_PERIODIC_BILLING_CYCLE_PAYABLE_COST;
                console.log(summaryDetails);
                this.step1 = false;
            }, error => {
                console.log(error);
                // this.toastr.error(error['Message']);
                this.showotpDiv = false;
                if (error == "Bad Request") {
                    this.toastr.error('Please pass all required data');
                }
            });
        }
        else {
            return;
        }
    }
    getCardAndCVV(event) {
        const mobilenumber = event.target.value;
        let mobileLength = mobilenumber.length;
        if (mobileLength == 10) {
            this.registerService.getCall(this.baseUrl + '/GetCouponCreditCard/' + mobilenumber).subscribe((data) => {
                console.log(data);
                let txt = 'No Record Found for Your Mobile Number . Please Contact Us at our Account Support Number.';
                if (data == txt) {
                    this.toastr.error((data));
                    this.validMobile = false;
                }
                else {
                    this.validMobile = true;
                    let dataList = data[0];
                    this.cardNumber = dataList.CARRYR_MART_FREEBIE_CRDT_CARD_NO;
                    this.cvv = dataList.CARRYR_MART_FREEBIE_CRDT_CARD_CVV;
                }
            }, (err) => {
                alert('error');
                this.toastr.error((err['error']['Message']));
            });
        }
    }
    verifyCouponNumber(couponNo) {
        const CouponNumber = couponNo.value;
        let CouponLength = CouponNumber.length;
        if (CouponLength == 7) {
            this.registerService.getCall(this.baseUrl + '/CouponNumberValidation/' + CouponNumber).subscribe((data) => {
                console.log(data);
                let txt = "Please Use Valid Coupon Number";
                if (data == txt) {
                    this.toastr.error((data));
                }
                else {
                    this.toastr.success((data));
                    $('#myModal').modal('show');
                }
            }, (err) => {
                alert('error');
                this.toastr.error((err['error']['Message']));
            });
        }
    }
    getOTPforCoupon(otpforCoupon) {
        this.mobileNo = this.registerForm.value.MobileNo;
        let confirmationCode = otpforCoupon.value;
        this.registerService.getCall(this.baseUrl + '/VerifyOTPForCouponNumber/' + this.mobileNo + "/" + confirmationCode).subscribe((data) => {
            console.log(data);
        }, (err) => {
            alert('error');
            this.toastr.error((err['error']['Message']));
        });
    }
    next() {
        this.showOSPlan = false;
        this.showStep3 = true;
    }
    makePayments() {
        alert('dd');
        let date = new Date();
        let dateFormat = date.toISOString();
        let paymentData = {
            USR_PRIMRY_MOBL_NUMBR: this.registerForm.value.MobileNo,
            CARRYR_MART_B2B_PERIODIC_BILLING_CYCLE_PAYABLE_COST: this.FirstPaymentPayableAmount,
            CARRYR_MART_POS_ID: 1,
            CARRYR_MART_COUPN_NUMBR: this.registerForm.value.CARRYR_MART_COUPN_NUMBR,
            CARRYR_MART_FREEBIE_CRDT_CARD_NO: this.registerForm.value.CARRYR_MART_FREEBIE_CRDT_CARD_NO,
            CARRYR_MART_FREEBIE_CRDT_CARD_CVV: this.registerForm.value.CARRYR_MART_FREEBIE_CRDT_CARD_CVV,
            CARRYR_MART_PAYMNT_TYPE: 2,
            PAYMNT_DONE_DATE_TIME: dateFormat
        };
        //  console.log(paymentData);
        this.registerService.postCallHttp(this.baseUrl + '/MakePayment', paymentData).subscribe(data => {
            console.log(data);
        }, (err) => {
            alert('error');
            this.toastr.error((err['error']['Message']));
        });
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(i0.ɵɵdirectiveInject(i1.HttpClient), i0.ɵɵdirectiveInject(i2.NgbModal), i0.ɵɵdirectiveInject(i3.RegisterService), i0.ɵɵdirectiveInject(i4.ToastrService)); };
RegisterComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RegisterComponent, selectors: [["app-register"]], decls: 26, vars: 4, consts: [[1, "register-field"], [1, "modal-header"], [1, "modal-title", "pull-left"], [1, "modal-body"], ["novalidate", "", 3, "formGroup", "ngSubmit"], ["class", "step1", 4, "ngIf"], ["class", "step2", 4, "ngIf"], ["class", "step3", 4, "ngIf"], ["id", "myModal", 1, "modal"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", 1, "close"], [1, "form-group"], ["for", "otpc"], ["type", "text", "id", "otpc", 1, "form-control"], ["otpforCoupon", ""], [1, "modal-footer"], ["type", "button", 1, "btn", "custom-btn", 3, "click"], [1, "step1"], ["for", "mn"], ["formControlName", "MobileNo", "type", "text", "placeholder", "Mobile Number", "id", "mn", 1, "form-control", 3, "ngClass"], ["class", "success-msg", 4, "ngIf"], ["class", "invalid-feedback", 4, "ngIf"], [1, "form-group", "with-left-100"], [1, "block"], [1, "form-check-inline", "pull-left"], [1, "form-check-label"], ["type", "radio", "value", "Yes", "name", "gstnchecked", "formControlName", "gstnchecked", 1, "form-check-input", 3, "change"], [1, "form-check-inline", "pull-right"], ["type", "radio", "value", "No", "name", "gstnchecked", "formControlName", "gstnchecked", 1, "form-check-input", 3, "change"], ["class", "form-group input-group gst-field", 4, "ngIf"], ["class", "form-group otp-fields", 4, "ngIf"], ["for", "email"], ["formControlName", "USR_EMAIL_ID", "type", "text", "id", "email", 1, "form-control", 3, "ngClass"], [1, "form-group", "subs_plan"], ["for", "sel1"], [1, "row"], [1, "col-md-9", "pr-0"], ["formControlName", "USER_SELCTD_SUBSCRIBER_PLAN_ID", 1, "form-control", 3, "ngClass", "change"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-md-3", "pl-0"], ["type", "button", 1, "btn"], ["formControlName", "USR_SELECTD_PAYMNT_FREQUENCY_ID", 1, "form-control", 3, "ngClass", "change"], ["value", "", "disabled", ""], [1, "form-group", "reg_below_msg", "label-icon"], ["src", "../assets/images/deactive_icon.png"], [1, "success-msg"], ["src", "assets/images/active_icon.png"], [1, "invalid-feedback"], [4, "ngIf"], [1, "form-group", "input-group", "gst-field"], ["formControlName", "GSTNO", "type", "text", 1, "form-control", 3, "ngClass"], ["type", "button", 1, "input-group-append", 3, "click"], [1, "form-group", "otp-fields"], ["for", "usr"], ["formControlName", "ConfirmationCode", "type", "text", "id", "otp", 1, "form-control"], ["class", "error-msg", 4, "ngIf"], [1, "otp-btns"], ["type", "button", 1, "btn", "btn-dark"], ["type", "button", 1, "btn", "btn-info", 3, "click"], [1, "error-msg"], [3, "value"], [1, "step2"], [1, "order-summary-plan"], [1, "modal-header", "pl-0"], [1, "table"], [1, "total"], [1, "btns", "row"], [1, "col-md-6"], ["type", "button", 1, "btn", "btn-primary"], ["type", "button", 1, "btn", "btn-success", 3, "click"], [1, "form-performa-invoice"], [1, "step3"], [1, "form-group", "col-md-9", "pr-0"], ["for", "cn"], ["formControlName", "CARRYR_MART_COUPN_NUMBR", "type", "text", "id", "cn", 1, "form-control"], ["couponNo", ""], [1, "form-group", "col-md-3"], ["type", "text", 1, "form-control", 3, "keyup"], ["class", "row", 4, "ngIf"], [1, "form-group", "col-md-8"], ["formControlName", "CARRYR_MART_FREEBIE_CRDT_CARD_NO", "disabled", "", "type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "form-group", "col-md-4"], ["formControlName", "CARRYR_MART_FREEBIE_CRDT_CARD_CVV", "disabled", "", "type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        const _r47 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "h4", 2);
        i0.ɵɵtext(3, "You need to register your business for Activation of your Account");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(4, "div", 3)(5, "form", 4);
        i0.ɵɵlistener("ngSubmit", function RegisterComponent_Template_form_ngSubmit_5_listener() { return ctx.makePayments(); });
        i0.ɵɵtemplate(6, RegisterComponent_div_6_Template, 52, 21, "div", 5);
        i0.ɵɵtemplate(7, RegisterComponent_div_7_Template, 57, 8, "div", 6);
        i0.ɵɵtemplate(8, RegisterComponent_div_8_Template, 24, 1, "div", 7);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(9, "div", 8)(10, "div", 9)(11, "div", 10)(12, "div", 1)(13, "h4", 11);
        i0.ɵɵtext(14, "Please Enter your OTP Number");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(15, "button", 12);
        i0.ɵɵtext(16, "\u00D7");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(17, "div", 3)(18, "div", 13)(19, "label", 14);
        i0.ɵɵtext(20, "Enter OTP Number");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(21, "input", 15, 16);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(23, "div", 17)(24, "button", 18);
        i0.ɵɵlistener("click", function RegisterComponent_Template_button_click_24_listener() { i0.ɵɵrestoreView(_r47); const _r3 = i0.ɵɵreference(22); return i0.ɵɵresetView(ctx.getOTPforCoupon(_r3)); });
        i0.ɵɵtext(25, "Submit");
        i0.ɵɵelementEnd()()()()()();
    } if (rf & 2) {
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("formGroup", ctx.registerForm);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.step1);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.showOSPlan);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.showStep3);
    } }, dependencies: [i5.NgClass, i5.NgForOf, i5.NgIf, i6.ɵNgNoValidate, i6.NgSelectOption, i6.ɵNgSelectMultipleOption, i6.DefaultValueAccessor, i6.SelectControlValueAccessor, i6.RadioControlValueAccessor, i6.NgControlStatus, i6.NgControlStatusGroup, i6.FormGroupDirective, i6.FormControlName], styles: [".register-field[_ngcontent-%COMP%] {\r\n    max-width: 500px;\r\n    background: #fff;\r\n    margin: 20px auto;\r\n    padding: 20px;\r\n    border-radius: 4px;\r\n    box-shadow: 0 0 5px #ddd;\r\n}\r\n\r\n  .login-field[_ngcontent-%COMP%] {\r\n    padding: 30px 25px;\r\n}\r\n\r\n.top-title[_ngcontent-%COMP%] {\r\n    font-weight: 600;\r\n    font-size: 14px;\r\n    line-height: 16px;\r\n}\r\n\r\nlabel.form-forget[_ngcontent-%COMP%] {\r\n    float: right;\r\n    color: #007bff;\r\n    font-size: 12px;\r\n    padding: 3px;\r\n}\r\n\r\n.form-control[_ngcontent-%COMP%]   input[type=\"text\"][_ngcontent-%COMP%], form-control[_ngcontent-%COMP%]   input[type=\"password\"][_ngcontent-%COMP%] {\r\n    height: 40px;\r\n}\r\n\r\nbutton.close[_ngcontent-%COMP%] {\r\n    margin: 10px;\r\n    font-size: 30px;\r\n}\r\n\r\n.login-field[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n    font-weight: 600;\r\n}\r\n\r\nsmall[_ngcontent-%COMP%] {\r\n    line-height: 15px;\r\n    display: block;\r\n    padding: 4px 0 0;\r\n    color: #e56f0b;\r\n}\r\n\r\n.form-group[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 14px;\r\n}\r\n\r\n.form-group.label-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 16px;\r\n    float: right;\r\n    margin-top: -8px;\r\n}\r\n\r\nlabel.form-performa-invoice[_ngcontent-%COMP%] {\r\n    display: block;\r\n    text-align: right;\r\n    margin-top: 0px;\r\n    padding: 10px 0;\r\n    font-size: 12px;\r\n    font-weight: 300;\r\n}\r\n\r\nlabel.form-performa-invoice[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    display: block;\r\n    color: #f57921;\r\n    text-decoration: underline;\r\n}\r\n\r\nlabel.form-performa-invoice[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 20px;\r\n    margin-right: 5px;\r\n}\r\n\r\n.form-check-inline[_ngcontent-%COMP%] {\r\n    width: 100px;\r\n}\r\n\r\nlabel.block[_ngcontent-%COMP%] {\r\n    display: block;\r\n}\r\n\r\n.form-group.input-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n    display: block;\r\n    width: 100%;\r\n}\r\n\r\n.subs_plan[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n    font-size: 13px;\r\n    border: 0;\r\n    padding: 7px 12px 8px;\r\n    background: #f57921;\r\n    color: #fff;\r\n    margin-left: 5px;\r\n}\r\n\r\n.login-field[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    line-height: 20px;\r\n}\r\n\r\n.gst-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    height: 34px;\r\n    border-radius: 4px 0 0 4px !important;\r\n}\r\n\r\n.gst-field[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%] {\r\n    padding: 5px 15px;\r\n    margin-bottom: 0;\r\n    font-size: 13px;\r\n    line-height: 15px;\r\n}\r\n\r\n.input-group-append[_ngcontent-%COMP%] {\r\n    margin-left: -1px;\r\n    cursor: pointer;\r\n}\r\n\r\n.form-group.otp-fields[_ngcontent-%COMP%] {\r\n    padding: 10px;\r\n    border: 1px solid #ddd;\r\n    border-radius: 4px;\r\n    background: #e9ecef;\r\n}\r\n\r\n.otp-btns[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n    width: 48%;\r\n    margin: 0 3% 0 0;\r\n    font-size: 13px;\r\n    height: 38px;\r\n}\r\n\r\n.otp-fields[_ngcontent-%COMP%]   .otp-btns[_ngcontent-%COMP%] {\r\n    margin-top: 15px;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.otp-btns[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]    + .btn[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n}\r\n\r\n.gst-field[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    border: 1px solid #ddd;\r\n    border-radius: 0 3px 3px;\r\n    font-size: 13px;\r\n    padding: 6px 10px;\r\n}\r\n\r\n.success-msg[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n    clear: both;\r\n    width: 100%;\r\n    color: #28a745;\r\n    padding: 0px 2px;\r\n}\r\n\r\n.success-msg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    max-width: 14px;\r\n}\r\n\r\n.reg_below_msg[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 13px !important;\r\n    line-height: 15px !important;\r\n}\r\n\r\n.order-summary-plan[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    font-size: 13px;\r\n    border: 0;\r\n    padding: 5px;\r\n}\r\n\r\n.order-summary-plan[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]    + td[_ngcontent-%COMP%] {\r\n    text-align: right;\r\n    font-weight: 600;\r\n}\r\n\r\n.form-group[_ngcontent-%COMP%] {\r\n    margin-bottom: 8px;\r\n}\r\n\r\n.btns[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    margin-top: 10px;\r\n  \r\n}\r\n\r\ntr.total[_ngcontent-%COMP%] {\r\n    border-top: 1px solid #ddd;\r\n}\r\n\r\n\r\n\r\n.step3[_ngcontent-%COMP%]   .btn.custom-btn[_ngcontent-%COMP%] {\r\n    padding: 6px 8px;\r\n}\r\n\r\n.form-control[_ngcontent-%COMP%]:disabled {\r\n    pointer-events: none;\r\n    cursor: not-allowed;\r\n    opacity: 0.6;\r\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RegisterComponent, [{
        type: Component,
        args: [{ selector: 'app-register', template: "\n<div class=\"register-field\">\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\">You need to register your business for Activation of your Account</h4>\n    \n  </div>\n \n  <div class=\"modal-body\">\n  <form [formGroup]=\"registerForm\" (ngSubmit)=\"makePayments()\" novalidate>\n    <div *ngIf=\"step1\" class=\"step1\">\n    <div class=\"form-group\">\n      <label for=\"mn\"> Register Mobile Number</label>\n      <input formControlName=\"MobileNo\" type=\"text\" class=\"form-control\" placeholder=\"Mobile Number\" id=\"mn\" [ngClass]=\"{ 'is-invalid': submittedgst && f.MobileNo.errors }\">\n      <div *ngIf=\"mobileVerifyMessage\" class=\"success-msg\">Mobile Number verified successfully <img src=\"assets/images/active_icon.png\" /></div>\n      <div *ngIf=\"submittedgst && f.MobileNo.errors\" class=\"invalid-feedback\">\n        <div *ngIf=\"f.MobileNo.errors.required\">Mobile Number is required</div>\n        <div *ngIf=\"f.MobileNo.errors.pattern\">Please, Enter 10 digit Mobile Number</div>\n    </div>\n     \n      <!-- <div *ngIf=\"f.MobileNo.touched && f.MobileNo.invalid\" class=\"error-msg\">\n        <div *ngIf=\"f.MobileNo.errors.required\">Mobile Number is required.</div>\n        <div *ngIf=\"f.MobileNo.errors.pattern\">Please, Enter 10 digit Mobile Number.</div>\n    </div> -->\n    \n    </div>\n     <div class=\"form-group with-left-100\">\n      <label class=\"block\">Registration of GSTIN Available</label>\n      <div class=\"form-check-inline pull-left\">\n        <label class=\"form-check-label\">\n          <input type=\"radio\" class=\"form-check-input\" value=\"Yes\" name=\"gstnchecked\" \n          formControlName=\"gstnchecked\" \n          (change)=\"showGSTField($event)\">Yes\n        </label>\n      </div>\n      <div class=\"form-check-inline pull-right\">\n        <label class=\"form-check-label\">\n          <input type=\"radio\" class=\"form-check-input\" value=\"No\" name=\"gstnchecked\" \n          formControlName=\"gstnchecked\" \n          (change)=\"showGSTField($event)\">No\n        </label>\n      </div>\n    </div>\n    \n    <div *ngIf=\"showGstInput\" class=\"form-group input-group gst-field\">\n      <label>Enter GSTIN No.</label>\n      <input formControlName=\"GSTNO\" type=\"text\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submittedgst && f.GSTNO.errors }\" />\n      <button type=\"button\" (click)=\"verifyGST()\" class=\"input-group-append\">\n        Verify\n      </button>\n      <div *ngIf=\"gstVerifyMessage\" class=\"success-msg\">GST verified successfully <img src=\"assets/images/active_icon.png\" /></div>\n      <div *ngIf=\"submittedgst && f.GSTNO.errors\" class=\"invalid-feedback\">\n        <div *ngIf=\"f.GSTNO.errors.required\">GST Number is required</div>\n        <div *ngIf=\"f.GSTNO.errors.pattern\">Please, Enter 15 digit GST Number</div>\n    </div>\n     \n      <!-- <div *ngIf=\"f.GSTNO.touched && f.GSTNO.invalid\" class=\"error-msg\">\n        <div *ngIf=\"f.GSTNO.errors.required\">GST Number is required.</div>\n        <div *ngIf=\"f.GSTNO.errors.pattern\">Please, Enter 15 digit GST Number.</div>\n        <div *ngIf=\"gstnotvalid\">Please, Enter 15 digit GST Number.</div> -->\n    </div>\n    \n\n    <div class=\"form-group otp-fields\" *ngIf=\"showotpDiv\">\n      <label for=\"usr\">Please Enter OTP</label>\n      <input formControlName=\"ConfirmationCode\" type=\"text\" class=\"form-control\" id=\"otp\">\n      <div *ngIf=\"otpNotValid\" class=\"error-msg\">OTP is not valid</div>\n     <div class=\"otp-btns\">\n      <button type=\"button\" class=\"btn btn-dark\">Resend</button>\n      <button (click)=\"getOTPVerify()\" type=\"button\" class=\"btn btn-info\">Proceed</button>\n     </div>\n    </div>\n     <div class=\"form-group\">\n      <label for=\"email\">Email ID</label>\n      <input formControlName=\"USR_EMAIL_ID\" type=\"text\" class=\"form-control\" id=\"email\" [ngClass]=\"{ 'is-invalid': submitted && f.USR_EMAIL_ID.errors }\">\n      <!-- <small>(Please provide valid Email ID as your initial access link will be sent on the same mail ID)</small> -->\n      <div *ngIf=\"submitted && f.USR_EMAIL_ID.errors\" class=\"invalid-feedback\">\n        <div *ngIf=\"f.USR_EMAIL_ID.errors.required\">Please provide valid Email ID as your initial access link will be sent on the same mail ID</div>\n        <div *ngIf=\"f.USR_EMAIL_ID.errors.pattern\">Please, Enter valid Email</div>\n      </div>\n    </div>\n\n    <div class=\"form-group subs_plan\">\n      <label for=\"sel1\">Choose Subscription Plan</label>\n      <div class=\"row\">\n        <div class=\"col-md-9 pr-0\">\n          <select formControlName=\"USER_SELCTD_SUBSCRIBER_PLAN_ID\" (change)=\"changeSubsPlan($event)\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.USER_SELCTD_SUBSCRIBER_PLAN_ID.errors }\">\n          <option value=\"\">Choose Subscription Plan</option>\n          <option *ngFor=\"let plan of SubscriptionPlans\" [value]=\"plan.Id\">{{plan.Value}}</option>\n         </select>\n         <div *ngIf=\"submitted && f.USER_SELCTD_SUBSCRIBER_PLAN_ID.errors\" class=\"invalid-feedback\">\n          <div *ngIf=\"f.USER_SELCTD_SUBSCRIBER_PLAN_ID.errors.required\">This field is required</div>\n         </div>\n        </div>\n        <div class=\"col-md-3 pl-0\">\n          <button type=\"button\" class=\"btn\">Plan Details</button>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"sel1\">Choose Payment Frequancy</label>\n      <select (change)=\"changePaymentFrequancy($event)\" formControlName=\"USR_SELECTD_PAYMNT_FREQUENCY_ID\" class=\"form-control\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.USR_SELECTD_PAYMNT_FREQUENCY_ID.errors }\">\n        <option value=\"\" disabled>Choose Subscription Plan</option>\n       <option *ngFor=\"let pf of PaymentFrequancy\" [value]=\"pf.id\">{{pf.plan}}</option>\n      </select>\n      <div *ngIf=\"submitted && f.USR_SELECTD_PAYMNT_FREQUENCY_ID.errors\" class=\"invalid-feedback\">\n        <div *ngIf=\"f.USR_SELECTD_PAYMNT_FREQUENCY_ID.errors.required\">This field is required</div>\n       </div>\n    </div>\n    \n    <div class=\"form-group reg_below_msg label-icon\">\n      <!-- <p class=\"success-msg\">Bonus for 30 days Credit on Payment<br> Frequency <img src=\"../assets/images/active_icon.png\" /></p> -->\n      <p>Read and Accept Terms & Condition of Usage <img src=\"../assets/images/deactive_icon.png\" /></p>\n    </div>\n    <button (click)=\"PreActivation()\" type=\"button\" class=\"btn custom-btn\">Proceed for Next Step</button>\n  \n  </div>\n\n  <!-- *ngIf=\"showOSPlan\" -->\n<div  class=\"step2\" *ngIf=\"showOSPlan\">\n  <div  class=\"order-summary-plan\">\n    <div class=\"modal-header pl-0\">\n      <h4 class=\"modal-title pull-left\">View Details</h4>\n      \n    </div>\n   \n     <table class=\"table\">\n     <tr>\n       <td>Subscription Plan </td>\n       <td>{{SubscriptionPlan}}</td>\n     </tr>\n     <tr>\n      <td>Payment frequency  </td>\n      <td>{{Paymentfrequency}}</td>\n    </tr>\n    <tr>\n      <td>Annual Plan cost </td>\n      <td>{{AnnualPlancost}}</td>\n    </tr>\n    <tr>\n      <td>Payment Frequency Cost</td>\n      <td>{{PaymentFrequencyCost}}</td>\n    </tr>\n    <tr>\n      <td>Sub-Total  </td>\n      <td>{{Subtotal}}</td>\n    </tr>\n    <tr>\n      <td>GST  </td>\n      <td>{{GST}}</td>\n    </tr>\n    <tr class=\"total\">\n      <td>Total  </td>\n      <td>{{Total}}</td>\n    </tr>\n    <tr>\n      <td>First Payment Payable Amount</td>\n      <td>{{FirstPaymentPayableAmount}}</td>\n    </tr>\n     </table>\n     <div class=\"btns row\">\n      <div class=\"col-md-6\">\n        <button type=\"button\" class=\"btn btn-primary\">Back</button>\n      </div>\n     <div class=\"col-md-6\">\n        <button (click)=\"next()\" type=\"button\" class=\"btn btn-success\">Next</button>\n      </div>\n      </div>\n    </div>\n        <label class=\"form-performa-invoice\">\n          <a><img src=\"../assets/images/deactive_icon.png\" />View Performa Invoice</a>\n        </label>\n \n</div>\n\n<div class=\"step3\" *ngIf=\"showStep3\">\n  <div class=\"row\">\n  <div class=\"form-group col-md-9 pr-0\">\n    <label for=\"cn\">Enter Your Coupon Number</label>\n    <input formControlName=\"CARRYR_MART_COUPN_NUMBR\" #couponNo type=\"text\" class=\"form-control\" id=\"cn\">\n  </div>\n  <div class=\"form-group col-md-3\">\n    <label>&nbsp;</label>\n    <button type=\"button\" class=\"btn custom-btn\" (click)=\"verifyCouponNumber(couponNo)\">Verify</button>\n    </div>\n</div>\n  <div class=\"form-group\">\n    <label for=\"cn\">Enter Your same Mobile Number which was used during Coupen Allocation </label>\n    <input (keyup)=\"getCardAndCVV($event)\" type=\"text\" class=\"form-control\">\n  </div>\n  <div *ngIf=\"validMobile\" class=\"row\">\n  <div class=\"form-group col-md-8\">\n    <label for=\"cn\">Card Number</label>\n    <input formControlName=\"CARRYR_MART_FREEBIE_CRDT_CARD_NO\" disabled  [(ngModel)]=\"cardNumber\"  type=\"text\" class=\"form-control\">\n  </div>\n  <div class=\"form-group col-md-4\">\n    <label for=\"cn\">CVV</label>\n    <input formControlName=\"CARRYR_MART_FREEBIE_CRDT_CARD_CVV\" disabled [(ngModel)]=\"cvv\" type=\"text\" class=\"form-control\">\n  </div>\n</div>\n<div class=\"btns row\">\n  <div class=\"col-md-6\">\n    <button type=\"button\" class=\"btn btn-primary\">Back</button>\n  </div>\n\n  <div class=\"col-md-6\">\n    <button (click)=\"makePayments()\" type=\"button\" class=\"btn btn-success\">Make Payment</button>\n  </div>\n  \n  \n  </div>\n</div>\n</form>\n</div>\n\n<!-- The Modal -->\n<div class=\"modal\" id=\"myModal\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n\n      <!-- Modal Header -->\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Please Enter your OTP Number</h4>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n      </div>\n\n      <!-- Modal body -->\n      <div class=\"modal-body\">\n        <div class=\"form-group\">\n          <label for=\"otpc\">Enter OTP Number</label>\n          <input #otpforCoupon type=\"text\" class=\"form-control\" id=\"otpc\">\n        </div>\n      </div>\n\n      <!-- Modal footer -->\n      <div class=\"modal-footer\">\n        <button (click)=\"getOTPforCoupon(otpforCoupon)\" type=\"button\" class=\"btn custom-btn\">Submit</button>\n      </div>\n\n    </div>\n  </div>\n</div>\n", styles: ["\r\n  \r\n.register-field {\r\n    max-width: 500px;\r\n    background: #fff;\r\n    margin: 20px auto;\r\n    padding: 20px;\r\n    border-radius: 4px;\r\n    box-shadow: 0 0 5px #ddd;\r\n}\r\n\r\n  .login-field {\r\n    padding: 30px 25px;\r\n}\r\n\r\n.top-title {\r\n    font-weight: 600;\r\n    font-size: 14px;\r\n    line-height: 16px;\r\n}\r\n\r\nlabel.form-forget {\r\n    float: right;\r\n    color: #007bff;\r\n    font-size: 12px;\r\n    padding: 3px;\r\n}\r\n\r\n.form-control input[type=\"text\"],\r\nform-control input[type=\"password\"] {\r\n    height: 40px;\r\n}\r\n\r\nbutton.close {\r\n    margin: 10px;\r\n    font-size: 30px;\r\n}\r\n\r\n.login-field .form-group label {\r\n    font-weight: 600;\r\n}\r\n\r\nsmall {\r\n    line-height: 15px;\r\n    display: block;\r\n    padding: 4px 0 0;\r\n    color: #e56f0b;\r\n}\r\n\r\n.form-group p {\r\n    font-size: 14px;\r\n}\r\n\r\n.form-group.label-icon img {\r\n    width: 16px;\r\n    float: right;\r\n    margin-top: -8px;\r\n}\r\n\r\nlabel.form-performa-invoice {\r\n    display: block;\r\n    text-align: right;\r\n    margin-top: 0px;\r\n    padding: 10px 0;\r\n    font-size: 12px;\r\n    font-weight: 300;\r\n}\r\n\r\nlabel.form-performa-invoice a {\r\n    display: block;\r\n    color: #f57921;\r\n    text-decoration: underline;\r\n}\r\n\r\nlabel.form-performa-invoice img {\r\n    width: 20px;\r\n    margin-right: 5px;\r\n}\r\n\r\n.form-check-inline {\r\n    width: 100px;\r\n}\r\n\r\nlabel.block {\r\n    display: block;\r\n}\r\n\r\n.form-group.input-group label {\r\n    display: block;\r\n    width: 100%;\r\n}\r\n\r\n.subs_plan .btn {\r\n    font-size: 13px;\r\n    border: 0;\r\n    padding: 7px 12px 8px;\r\n    background: #f57921;\r\n    color: #fff;\r\n    margin-left: 5px;\r\n}\r\n\r\n.login-field p {\r\n    line-height: 20px;\r\n}\r\n\r\n.gst-field input {\r\n    height: 34px;\r\n    border-radius: 4px 0 0 4px !important;\r\n}\r\n\r\n.gst-field .input-group-text {\r\n    padding: 5px 15px;\r\n    margin-bottom: 0;\r\n    font-size: 13px;\r\n    line-height: 15px;\r\n}\r\n\r\n.input-group-append {\r\n    margin-left: -1px;\r\n    cursor: pointer;\r\n}\r\n\r\n.form-group.otp-fields {\r\n    padding: 10px;\r\n    border: 1px solid #ddd;\r\n    border-radius: 4px;\r\n    background: #e9ecef;\r\n}\r\n\r\n.otp-btns .btn {\r\n    width: 48%;\r\n    margin: 0 3% 0 0;\r\n    font-size: 13px;\r\n    height: 38px;\r\n}\r\n\r\n.otp-fields .otp-btns {\r\n    margin-top: 15px;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.otp-btns .btn + .btn {\r\n    margin: 0;\r\n}\r\n\r\n.gst-field button {\r\n    border: 1px solid #ddd;\r\n    border-radius: 0 3px 3px;\r\n    font-size: 13px;\r\n    padding: 6px 10px;\r\n}\r\n\r\n.success-msg {\r\n    font-size: 12px;\r\n    clear: both;\r\n    width: 100%;\r\n    color: #28a745;\r\n    padding: 0px 2px;\r\n}\r\n\r\n.success-msg img {\r\n    max-width: 14px;\r\n}\r\n\r\n.reg_below_msg p {\r\n    font-size: 13px !important;\r\n    line-height: 15px !important;\r\n}\r\n\r\n.order-summary-plan .table td {\r\n    font-size: 13px;\r\n    border: 0;\r\n    padding: 5px;\r\n}\r\n\r\n.order-summary-plan .table td + td {\r\n    text-align: right;\r\n    font-weight: 600;\r\n}\r\n\r\n.form-group {\r\n    margin-bottom: 8px;\r\n}\r\n\r\n.btns .btn {\r\n    width: 100%;\r\n    margin-top: 10px;\r\n  \r\n}\r\n\r\ntr.total {\r\n    border-top: 1px solid #ddd;\r\n}\r\n\r\n\r\n\r\n.step3 .btn.custom-btn {\r\n    padding: 6px 8px;\r\n}\r\n\r\n.form-control:disabled {\r\n    pointer-events: none;\r\n    cursor: not-allowed;\r\n    opacity: 0.6;\r\n}\r\n"] }]
    }], function () { return [{ type: i1.HttpClient }, { type: i2.NgbModal }, { type: i3.RegisterService }, { type: i4.ToastrService }]; }, null); })();
//# sourceMappingURL=register.component.js.map