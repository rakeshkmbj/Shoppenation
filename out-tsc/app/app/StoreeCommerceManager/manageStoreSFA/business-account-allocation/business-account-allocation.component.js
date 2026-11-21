import { Component } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "src/app/services/api.service";
import * as i2 from "ngx-bootstrap/modal";
import * as i3 from "ngx-toastr";
import * as i4 from "src/app/services/common.service";
import * as i5 from "@angular/forms";
import * as i6 from "@angular/common";
import * as i7 from "ngx-bootstrap/tabs";
function BusinessAccountAllocationComponent_ng_container_7_tr_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 21);
    i0.ɵɵtext(2, "No data available");
    i0.ɵɵelementEnd()();
} }
function BusinessAccountAllocationComponent_ng_container_7_tr_23_Template(rf, ctx) { if (rf & 1) {
    const _r28 = i0.ɵɵgetCurrentView();
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
    i0.ɵɵelementStart(9, "td")(10, "button", 22);
    i0.ɵɵlistener("click", function BusinessAccountAllocationComponent_ng_container_7_tr_23_Template_button_click_10_listener() { const restoredCtx = i0.ɵɵrestoreView(_r28); const user_r25 = restoredCtx.$implicit; const ctx_r27 = i0.ɵɵnextContext(2); const _r15 = i0.ɵɵreference(23); return i0.ɵɵresetView(ctx_r27.showDetails(user_r25.Photo, user_r25.MobileNumber, user_r25.RoleId, user_r25.RoleName, _r15)); });
    i0.ɵɵtext(11, "Deatils");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "td")(13, "button", 23);
    i0.ɵɵlistener("click", function BusinessAccountAllocationComponent_ng_container_7_tr_23_Template_button_click_13_listener() { const restoredCtx = i0.ɵɵrestoreView(_r28); const user_r25 = restoredCtx.$implicit; const ctx_r29 = i0.ɵɵnextContext(2); const _r19 = i0.ɵɵreference(27); return i0.ɵɵresetView(ctx_r29.showCredentials(_r19, user_r25.UserId)); });
    i0.ɵɵtext(14, "Credentials");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "button", 23);
    i0.ɵɵlistener("click", function BusinessAccountAllocationComponent_ng_container_7_tr_23_Template_button_click_15_listener() { const restoredCtx = i0.ɵɵrestoreView(_r28); const user_r25 = restoredCtx.$implicit; const ctx_r30 = i0.ɵɵnextContext(2); const _r11 = i0.ɵɵreference(19); return i0.ɵɵresetView(ctx_r30.sfaEcomReg(_r11, user_r25.RoleId, user_r25.MobileNumber)); });
    i0.ɵɵtext(16, "SFA Ecomm Registration");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "button", 23);
    i0.ɵɵlistener("click", function BusinessAccountAllocationComponent_ng_container_7_tr_23_Template_button_click_17_listener() { const restoredCtx = i0.ɵɵrestoreView(_r28); const user_r25 = restoredCtx.$implicit; const ctx_r31 = i0.ɵɵnextContext(2); const _r3 = i0.ɵɵreference(11); return i0.ɵɵresetView(ctx_r31.viewUserAllocated(_r3, user_r25.UserId)); });
    i0.ɵɵtext(18, "View User Acc");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "button", 23);
    i0.ɵɵlistener("click", function BusinessAccountAllocationComponent_ng_container_7_tr_23_Template_button_click_19_listener() { const restoredCtx = i0.ɵɵrestoreView(_r28); const user_r25 = restoredCtx.$implicit; const ctx_r32 = i0.ɵɵnextContext(2); const _r9 = i0.ɵɵreference(17); return i0.ɵɵresetView(ctx_r32.allocateNewUser(_r9, user_r25.RoleId, user_r25.UserId)); });
    i0.ɵɵtext(20, "Allocate New Acc");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(21, "td")(22, "span", 24);
    i0.ɵɵlistener("click", function BusinessAccountAllocationComponent_ng_container_7_tr_23_Template_span_click_22_listener() { i0.ɵɵrestoreView(_r28); const ctx_r33 = i0.ɵɵnextContext(2); const _r17 = i0.ɵɵreference(25); return i0.ɵɵresetView(ctx_r33.deleteUser(_r17)); });
    i0.ɵɵelement(23, "i", 25);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const user_r25 = ctx.$implicit;
    const i_r26 = ctx.index;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i_r26 + 1);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(user_r25.UserId);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(user_r25.FirstName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(user_r25.LastName);
} }
function BusinessAccountAllocationComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    const _r35 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "tab", 15);
    i0.ɵɵlistener("selectTab", function BusinessAccountAllocationComponent_ng_container_7_Template_tab_selectTab_1_listener() { i0.ɵɵrestoreView(_r35); const ctx_r34 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r34.onTabChange("Secondary Account")); });
    i0.ɵɵelementStart(2, "div", 16)(3, "div", 17)(4, "div", 18)(5, "table", 19)(6, "thead")(7, "tr")(8, "th");
    i0.ɵɵtext(9, "Sr. No.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "th");
    i0.ɵɵtext(11, "User ID");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "th");
    i0.ɵɵtext(13, "User First Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "th");
    i0.ɵɵtext(15, "User Last Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "th");
    i0.ɵɵtext(17, "Details");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "th");
    i0.ɵɵtext(19, "Actions");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(20, "th");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(21, "tbody");
    i0.ɵɵtemplate(22, BusinessAccountAllocationComponent_ng_container_7_tr_22_Template, 3, 0, "tr", 4);
    i0.ɵɵtemplate(23, BusinessAccountAllocationComponent_ng_container_7_tr_23_Template, 24, 4, "tr", 20);
    i0.ɵɵelementEnd()()()()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(22);
    i0.ɵɵproperty("ngIf", !ctx_r0.sfaAccountArr || ctx_r0.sfaAccountArr.length === 0);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r0.sfaAccountArr);
} }
function BusinessAccountAllocationComponent_ng_container_8_tr_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 21);
    i0.ɵɵtext(2, "No data available");
    i0.ɵɵelementEnd()();
} }
function BusinessAccountAllocationComponent_ng_container_8_tr_23_Template(rf, ctx) { if (rf & 1) {
    const _r43 = i0.ɵɵgetCurrentView();
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
    i0.ɵɵelementStart(9, "td")(10, "button", 22);
    i0.ɵɵlistener("click", function BusinessAccountAllocationComponent_ng_container_8_tr_23_Template_button_click_10_listener() { const restoredCtx = i0.ɵɵrestoreView(_r43); const user_r40 = restoredCtx.$implicit; const ctx_r42 = i0.ɵɵnextContext(2); const _r15 = i0.ɵɵreference(23); return i0.ɵɵresetView(ctx_r42.showDetails(user_r40.Photo, user_r40.MobileNumber, user_r40.RoleId, user_r40.RoleName, _r15)); });
    i0.ɵɵtext(11, "Deatils");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "td")(13, "button", 23);
    i0.ɵɵlistener("click", function BusinessAccountAllocationComponent_ng_container_8_tr_23_Template_button_click_13_listener() { const restoredCtx = i0.ɵɵrestoreView(_r43); const user_r40 = restoredCtx.$implicit; const ctx_r44 = i0.ɵɵnextContext(2); const _r19 = i0.ɵɵreference(27); return i0.ɵɵresetView(ctx_r44.showCredentials(_r19, user_r40.UserId)); });
    i0.ɵɵtext(14, "Credentials");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "button", 23);
    i0.ɵɵlistener("click", function BusinessAccountAllocationComponent_ng_container_8_tr_23_Template_button_click_15_listener() { const restoredCtx = i0.ɵɵrestoreView(_r43); const user_r40 = restoredCtx.$implicit; const ctx_r45 = i0.ɵɵnextContext(2); const _r11 = i0.ɵɵreference(19); return i0.ɵɵresetView(ctx_r45.sfaEcomReg(_r11, user_r40.RoleId, user_r40.MobileNumber)); });
    i0.ɵɵtext(16, "SFA Ecomm Registration");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "button", 23);
    i0.ɵɵlistener("click", function BusinessAccountAllocationComponent_ng_container_8_tr_23_Template_button_click_17_listener() { const restoredCtx = i0.ɵɵrestoreView(_r43); const user_r40 = restoredCtx.$implicit; const ctx_r46 = i0.ɵɵnextContext(2); const _r3 = i0.ɵɵreference(11); return i0.ɵɵresetView(ctx_r46.viewUserAllocated(_r3, user_r40.UserId)); });
    i0.ɵɵtext(18, "View User Acc");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "button", 23);
    i0.ɵɵlistener("click", function BusinessAccountAllocationComponent_ng_container_8_tr_23_Template_button_click_19_listener() { const restoredCtx = i0.ɵɵrestoreView(_r43); const user_r40 = restoredCtx.$implicit; const ctx_r47 = i0.ɵɵnextContext(2); const _r9 = i0.ɵɵreference(17); return i0.ɵɵresetView(ctx_r47.allocateNewUser(_r9, user_r40.RoleId, user_r40.UserId)); });
    i0.ɵɵtext(20, "Allocate New Acc");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(21, "td")(22, "span", 24);
    i0.ɵɵlistener("click", function BusinessAccountAllocationComponent_ng_container_8_tr_23_Template_span_click_22_listener() { i0.ɵɵrestoreView(_r43); const ctx_r48 = i0.ɵɵnextContext(2); const _r17 = i0.ɵɵreference(25); return i0.ɵɵresetView(ctx_r48.deleteUser(_r17)); });
    i0.ɵɵelement(23, "i", 25);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const user_r40 = ctx.$implicit;
    const i_r41 = ctx.index;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i_r41 + 1);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(user_r40.UserId);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(user_r40.FirstName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(user_r40.LastName);
} }
function BusinessAccountAllocationComponent_ng_container_8_tr_45_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 21);
    i0.ɵɵtext(2, "No data available");
    i0.ɵɵelementEnd()();
} }
function BusinessAccountAllocationComponent_ng_container_8_tr_46_img_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 29);
} if (rf & 2) {
    const user_r49 = i0.ɵɵnextContext().$implicit;
    const ctx_r51 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("src", ctx_r51.imgURL + user_r49.Photo.replace("~", ""), i0.ɵɵsanitizeUrl);
} }
function BusinessAccountAllocationComponent_ng_container_8_tr_46_Template(rf, ctx) { if (rf & 1) {
    const _r54 = i0.ɵɵgetCurrentView();
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
    i0.ɵɵtemplate(10, BusinessAccountAllocationComponent_ng_container_8_tr_46_img_10_Template, 1, 1, "img", 28);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "td");
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "td");
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "td");
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "td")(18, "button", 23);
    i0.ɵɵlistener("click", function BusinessAccountAllocationComponent_ng_container_8_tr_46_Template_button_click_18_listener() { const restoredCtx = i0.ɵɵrestoreView(_r54); const user_r49 = restoredCtx.$implicit; const ctx_r53 = i0.ɵɵnextContext(2); const _r19 = i0.ɵɵreference(27); return i0.ɵɵresetView(ctx_r53.showCredentials(_r19, user_r49.UserId)); });
    i0.ɵɵtext(19, "Credentials");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "button", 23);
    i0.ɵɵlistener("click", function BusinessAccountAllocationComponent_ng_container_8_tr_46_Template_button_click_20_listener() { const restoredCtx = i0.ɵɵrestoreView(_r54); const user_r49 = restoredCtx.$implicit; const ctx_r55 = i0.ɵɵnextContext(2); const _r11 = i0.ɵɵreference(19); return i0.ɵɵresetView(ctx_r55.sfaEcomReg(_r11, user_r49.RoleId, user_r49.MobileNumber)); });
    i0.ɵɵtext(21, "SFA Ecomm Registration");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "button", 23);
    i0.ɵɵlistener("click", function BusinessAccountAllocationComponent_ng_container_8_tr_46_Template_button_click_22_listener() { const restoredCtx = i0.ɵɵrestoreView(_r54); const user_r49 = restoredCtx.$implicit; const ctx_r56 = i0.ɵɵnextContext(2); const _r3 = i0.ɵɵreference(11); return i0.ɵɵresetView(ctx_r56.viewUserAllocated(_r3, user_r49.UserId)); });
    i0.ɵɵtext(23, "View User Acc");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "button", 23);
    i0.ɵɵlistener("click", function BusinessAccountAllocationComponent_ng_container_8_tr_46_Template_button_click_24_listener() { const restoredCtx = i0.ɵɵrestoreView(_r54); const user_r49 = restoredCtx.$implicit; const ctx_r57 = i0.ɵɵnextContext(2); const _r9 = i0.ɵɵreference(17); return i0.ɵɵresetView(ctx_r57.allocateNewUser(_r9, user_r49.RoleId, user_r49.UserId)); });
    i0.ɵɵtext(25, "Allocate New Acc");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(26, "td")(27, "span", 24);
    i0.ɵɵlistener("click", function BusinessAccountAllocationComponent_ng_container_8_tr_46_Template_span_click_27_listener() { i0.ɵɵrestoreView(_r54); const ctx_r58 = i0.ɵɵnextContext(2); const _r17 = i0.ɵɵreference(25); return i0.ɵɵresetView(ctx_r58.deleteUser(_r17)); });
    i0.ɵɵelement(28, "i", 25);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const user_r49 = ctx.$implicit;
    const i_r50 = ctx.index;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i_r50 + 1);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(user_r49.UserId);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(user_r49.FirstName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(user_r49.LastName);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", user_r49.Photo);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(user_r49.MobileNumber);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(user_r49.RoleId);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(user_r49.RoleName);
} }
function BusinessAccountAllocationComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    const _r60 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "tab", 26);
    i0.ɵɵlistener("selectTab", function BusinessAccountAllocationComponent_ng_container_8_Template_tab_selectTab_1_listener() { i0.ɵɵrestoreView(_r60); const ctx_r59 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r59.onTabChange("Primary Account")); });
    i0.ɵɵelementStart(2, "div", 16)(3, "div", 17)(4, "div", 18)(5, "table", 19)(6, "thead")(7, "tr")(8, "th");
    i0.ɵɵtext(9, "Sr. No.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "th");
    i0.ɵɵtext(11, "User ID");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "th");
    i0.ɵɵtext(13, "User First Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "th");
    i0.ɵɵtext(15, "User Last Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "th");
    i0.ɵɵtext(17, "Details");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "th");
    i0.ɵɵtext(19, "Actions");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(20, "th");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(21, "tbody");
    i0.ɵɵtemplate(22, BusinessAccountAllocationComponent_ng_container_8_tr_22_Template, 3, 0, "tr", 4);
    i0.ɵɵtemplate(23, BusinessAccountAllocationComponent_ng_container_8_tr_23_Template, 24, 4, "tr", 20);
    i0.ɵɵelementEnd()()()()()();
    i0.ɵɵelementStart(24, "tab", 27);
    i0.ɵɵlistener("selectTab", function BusinessAccountAllocationComponent_ng_container_8_Template_tab_selectTab_24_listener() { i0.ɵɵrestoreView(_r60); const ctx_r61 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r61.onTabChange("Teritiary Account")); });
    i0.ɵɵelementStart(25, "div", 16)(26, "div", 17)(27, "div", 18)(28, "table", 19)(29, "thead")(30, "tr")(31, "th");
    i0.ɵɵtext(32, "Sr. No.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(33, "th");
    i0.ɵɵtext(34, "User ID");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(35, "th");
    i0.ɵɵtext(36, "User First Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(37, "th");
    i0.ɵɵtext(38, "User Last Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(39, "th");
    i0.ɵɵtext(40, "Details");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(41, "th");
    i0.ɵɵtext(42, "Actions");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(43, "th");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(44, "tbody");
    i0.ɵɵtemplate(45, BusinessAccountAllocationComponent_ng_container_8_tr_45_Template, 3, 0, "tr", 4);
    i0.ɵɵtemplate(46, BusinessAccountAllocationComponent_ng_container_8_tr_46_Template, 29, 8, "tr", 20);
    i0.ɵɵelementEnd()()()()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(22);
    i0.ɵɵproperty("ngIf", !ctx_r1.sfaAccountArr || ctx_r1.sfaAccountArr.length === 0);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r1.sfaAccountArr);
    i0.ɵɵadvance(22);
    i0.ɵɵproperty("ngIf", !ctx_r1.sfaAccountArr || ctx_r1.sfaAccountArr.length === 0);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r1.sfaAccountArr);
} }
function BusinessAccountAllocationComponent_ng_container_9_ng_container_5_tr_18_Template(rf, ctx) { if (rf & 1) {
    const _r71 = i0.ɵɵgetCurrentView();
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
    i0.ɵɵelementStart(9, "td")(10, "button", 32);
    i0.ɵɵlistener("click", function BusinessAccountAllocationComponent_ng_container_9_ng_container_5_tr_18_Template_button_click_10_listener() { const restoredCtx = i0.ɵɵrestoreView(_r71); const user_r68 = restoredCtx.$implicit; const ctx_r70 = i0.ɵɵnextContext(3); const _r15 = i0.ɵɵreference(23); return i0.ɵɵresetView(ctx_r70.showDetails(user_r68.Photo, user_r68.MobileNumber, user_r68.RoleId, user_r68.RoleName, _r15)); });
    i0.ɵɵtext(11, "Deatils");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "td")(13, "button", 23);
    i0.ɵɵlistener("click", function BusinessAccountAllocationComponent_ng_container_9_ng_container_5_tr_18_Template_button_click_13_listener() { const restoredCtx = i0.ɵɵrestoreView(_r71); const user_r68 = restoredCtx.$implicit; const ctx_r72 = i0.ɵɵnextContext(3); const _r19 = i0.ɵɵreference(27); return i0.ɵɵresetView(ctx_r72.showCredentials(_r19, user_r68.UserId)); });
    i0.ɵɵtext(14, "Credentials");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "button", 32);
    i0.ɵɵlistener("click", function BusinessAccountAllocationComponent_ng_container_9_ng_container_5_tr_18_Template_button_click_15_listener() { const restoredCtx = i0.ɵɵrestoreView(_r71); const user_r68 = restoredCtx.$implicit; const ctx_r73 = i0.ɵɵnextContext(3); const _r11 = i0.ɵɵreference(19); return i0.ɵɵresetView(ctx_r73.sfaEcomReg(_r11, user_r68.RoleId, user_r68.MobileNumber)); });
    i0.ɵɵtext(16, "SFA Ecomm Registration");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "button", 33);
    i0.ɵɵlistener("click", function BusinessAccountAllocationComponent_ng_container_9_ng_container_5_tr_18_Template_button_click_17_listener() { const restoredCtx = i0.ɵɵrestoreView(_r71); const user_r68 = restoredCtx.$implicit; const ctx_r74 = i0.ɵɵnextContext(3); const _r3 = i0.ɵɵreference(11); return i0.ɵɵresetView(ctx_r74.viewUserAllocated(_r3, user_r68.UserId)); });
    i0.ɵɵtext(18, "View User Acc");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "button", 33);
    i0.ɵɵlistener("click", function BusinessAccountAllocationComponent_ng_container_9_ng_container_5_tr_18_Template_button_click_19_listener() { const restoredCtx = i0.ɵɵrestoreView(_r71); const user_r68 = restoredCtx.$implicit; const ctx_r75 = i0.ɵɵnextContext(3); const _r9 = i0.ɵɵreference(17); return i0.ɵɵresetView(ctx_r75.allocateNewUser(_r9, user_r68.RoleId, user_r68.UserId)); });
    i0.ɵɵtext(20, "Allocate New Acc");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(21, "td")(22, "span", 24);
    i0.ɵɵlistener("click", function BusinessAccountAllocationComponent_ng_container_9_ng_container_5_tr_18_Template_span_click_22_listener() { i0.ɵɵrestoreView(_r71); const ctx_r76 = i0.ɵɵnextContext(3); const _r17 = i0.ɵɵreference(25); return i0.ɵɵresetView(ctx_r76.deleteUser(_r17)); });
    i0.ɵɵelement(23, "i", 25);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const user_r68 = ctx.$implicit;
    const i_r69 = ctx.index;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i_r69 + 1);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(user_r68.UserId);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(user_r68.FirstName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(user_r68.LastName);
} }
function BusinessAccountAllocationComponent_ng_container_9_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "table", 19)(2, "thead")(3, "tr")(4, "th");
    i0.ɵɵtext(5, "Sr. No.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "th");
    i0.ɵɵtext(7, "User ID");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "th");
    i0.ɵɵtext(9, "User First Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "th");
    i0.ɵɵtext(11, "User Last Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "th");
    i0.ɵɵtext(13, "Details");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "th");
    i0.ɵɵtext(15, "Actions");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(16, "th");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(17, "tbody");
    i0.ɵɵtemplate(18, BusinessAccountAllocationComponent_ng_container_9_ng_container_5_tr_18_Template, 24, 4, "tr", 20);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r62 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(18);
    i0.ɵɵproperty("ngForOf", ctx_r62.sfaAccountArr);
} }
function BusinessAccountAllocationComponent_ng_container_9_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 34);
    i0.ɵɵtext(1, " The current account does not have access to this data. ");
    i0.ɵɵelementEnd();
} }
function BusinessAccountAllocationComponent_ng_container_9_tr_28_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 21);
    i0.ɵɵtext(2, "No data available");
    i0.ɵɵelementEnd()();
} }
function BusinessAccountAllocationComponent_ng_container_9_tr_29_Template(rf, ctx) { if (rf & 1) {
    const _r80 = i0.ɵɵgetCurrentView();
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
    i0.ɵɵelementStart(9, "td")(10, "button", 23);
    i0.ɵɵlistener("click", function BusinessAccountAllocationComponent_ng_container_9_tr_29_Template_button_click_10_listener() { const restoredCtx = i0.ɵɵrestoreView(_r80); const user_r77 = restoredCtx.$implicit; const ctx_r79 = i0.ɵɵnextContext(2); const _r19 = i0.ɵɵreference(27); return i0.ɵɵresetView(ctx_r79.showCredentials(_r19, user_r77.UserId)); });
    i0.ɵɵtext(11, "Credentials");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "button", 32);
    i0.ɵɵlistener("click", function BusinessAccountAllocationComponent_ng_container_9_tr_29_Template_button_click_12_listener() { const restoredCtx = i0.ɵɵrestoreView(_r80); const user_r77 = restoredCtx.$implicit; const ctx_r81 = i0.ɵɵnextContext(2); const _r11 = i0.ɵɵreference(19); return i0.ɵɵresetView(ctx_r81.sfaEcomReg(_r11, user_r77.RoleId, user_r77.MobileNumber)); });
    i0.ɵɵtext(13, "SFA Ecomm Registration");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "button", 33);
    i0.ɵɵlistener("click", function BusinessAccountAllocationComponent_ng_container_9_tr_29_Template_button_click_14_listener() { const restoredCtx = i0.ɵɵrestoreView(_r80); const user_r77 = restoredCtx.$implicit; const ctx_r82 = i0.ɵɵnextContext(2); const _r3 = i0.ɵɵreference(11); return i0.ɵɵresetView(ctx_r82.viewUserAllocated(_r3, user_r77.UserId)); });
    i0.ɵɵtext(15, "View User Acc");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "button", 33);
    i0.ɵɵlistener("click", function BusinessAccountAllocationComponent_ng_container_9_tr_29_Template_button_click_16_listener() { const restoredCtx = i0.ɵɵrestoreView(_r80); const user_r77 = restoredCtx.$implicit; const ctx_r83 = i0.ɵɵnextContext(2); const _r9 = i0.ɵɵreference(17); return i0.ɵɵresetView(ctx_r83.allocateNewUser(_r9, user_r77.RoleId, user_r77.UserId)); });
    i0.ɵɵtext(17, "Allocate New Acc");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(18, "td")(19, "button", 23);
    i0.ɵɵlistener("click", function BusinessAccountAllocationComponent_ng_container_9_tr_29_Template_button_click_19_listener() { const restoredCtx = i0.ɵɵrestoreView(_r80); const user_r77 = restoredCtx.$implicit; const ctx_r84 = i0.ɵɵnextContext(2); const _r19 = i0.ɵɵreference(27); return i0.ɵɵresetView(ctx_r84.showCredentials(_r19, user_r77.UserId)); });
    i0.ɵɵtext(20, "Credentials");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "button", 32);
    i0.ɵɵlistener("click", function BusinessAccountAllocationComponent_ng_container_9_tr_29_Template_button_click_21_listener() { const restoredCtx = i0.ɵɵrestoreView(_r80); const user_r77 = restoredCtx.$implicit; const ctx_r85 = i0.ɵɵnextContext(2); const _r11 = i0.ɵɵreference(19); return i0.ɵɵresetView(ctx_r85.sfaEcomReg(_r11, user_r77.RoleId, user_r77.MobileNumber)); });
    i0.ɵɵtext(22, "SFA Ecomm Registration");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "button", 33);
    i0.ɵɵlistener("click", function BusinessAccountAllocationComponent_ng_container_9_tr_29_Template_button_click_23_listener() { const restoredCtx = i0.ɵɵrestoreView(_r80); const user_r77 = restoredCtx.$implicit; const ctx_r86 = i0.ɵɵnextContext(2); const _r3 = i0.ɵɵreference(11); return i0.ɵɵresetView(ctx_r86.viewUserAllocated(_r3, user_r77.UserId)); });
    i0.ɵɵtext(24, "View User Acc");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "button", 33);
    i0.ɵɵlistener("click", function BusinessAccountAllocationComponent_ng_container_9_tr_29_Template_button_click_25_listener() { const restoredCtx = i0.ɵɵrestoreView(_r80); const user_r77 = restoredCtx.$implicit; const ctx_r87 = i0.ɵɵnextContext(2); const _r9 = i0.ɵɵreference(17); return i0.ɵɵresetView(ctx_r87.allocateNewUser(_r9, user_r77.RoleId, user_r77.UserId)); });
    i0.ɵɵtext(26, "Allocate New Acc");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(27, "td")(28, "span", 24);
    i0.ɵɵlistener("click", function BusinessAccountAllocationComponent_ng_container_9_tr_29_Template_span_click_28_listener() { i0.ɵɵrestoreView(_r80); const ctx_r88 = i0.ɵɵnextContext(2); const _r17 = i0.ɵɵreference(25); return i0.ɵɵresetView(ctx_r88.deleteUser(_r17)); });
    i0.ɵɵelement(29, "i", 25);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const user_r77 = ctx.$implicit;
    const i_r78 = ctx.index;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i_r78 + 1);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(user_r77.UserId);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(user_r77.FirstName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(user_r77.LastName);
} }
function BusinessAccountAllocationComponent_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    const _r90 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "tab", 26);
    i0.ɵɵlistener("selectTab", function BusinessAccountAllocationComponent_ng_container_9_Template_tab_selectTab_1_listener() { i0.ɵɵrestoreView(_r90); const ctx_r89 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r89.onTabChange("Primary Account")); });
    i0.ɵɵelementStart(2, "div", 16)(3, "div", 17)(4, "div", 18);
    i0.ɵɵtemplate(5, BusinessAccountAllocationComponent_ng_container_9_ng_container_5_Template, 19, 1, "ng-container", 30);
    i0.ɵɵtemplate(6, BusinessAccountAllocationComponent_ng_container_9_ng_template_6_Template, 2, 0, "ng-template", null, 31, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(8, "tab", 15);
    i0.ɵɵlistener("selectTab", function BusinessAccountAllocationComponent_ng_container_9_Template_tab_selectTab_8_listener() { i0.ɵɵrestoreView(_r90); const ctx_r91 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r91.onTabChange("Secondary Account")); });
    i0.ɵɵelementStart(9, "div", 16)(10, "div", 17)(11, "div", 18)(12, "table", 19)(13, "thead")(14, "tr")(15, "th");
    i0.ɵɵtext(16, "Sr. No.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "th");
    i0.ɵɵtext(18, "User ID");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "th");
    i0.ɵɵtext(20, "User First Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "th");
    i0.ɵɵtext(22, "User Last Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "th");
    i0.ɵɵtext(24, "Details");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "th");
    i0.ɵɵtext(26, "Actions");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(27, "tbody");
    i0.ɵɵtemplate(28, BusinessAccountAllocationComponent_ng_container_9_tr_28_Template, 3, 0, "tr", 4);
    i0.ɵɵtemplate(29, BusinessAccountAllocationComponent_ng_container_9_tr_29_Template, 30, 4, "tr", 20);
    i0.ɵɵelementEnd()()()()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r63 = i0.ɵɵreference(7);
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", ctx_r2.sfaAccountArr && ctx_r2.sfaAccountArr.length > 0)("ngIfElse", _r63);
    i0.ɵɵadvance(23);
    i0.ɵɵproperty("ngIf", !ctx_r2.sfaAccountArr || ctx_r2.sfaAccountArr.length === 0);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r2.sfaAccountArr);
} }
function BusinessAccountAllocationComponent_ng_template_10_ng_container_8_tr_21_img_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 49);
} }
function BusinessAccountAllocationComponent_ng_template_10_ng_container_8_tr_21_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 50);
} }
function BusinessAccountAllocationComponent_ng_template_10_ng_container_8_tr_21_Template(rf, ctx) { if (rf & 1) {
    const _r102 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr")(1, "td");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "td");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "td")(8, "button", 43);
    i0.ɵɵlistener("click", function BusinessAccountAllocationComponent_ng_template_10_ng_container_8_tr_21_Template_button_click_8_listener() { const restoredCtx = i0.ɵɵrestoreView(_r102); const rel_r96 = restoredCtx.$implicit; const ctx_r101 = i0.ɵɵnextContext(3); const _r5 = i0.ɵɵreference(13); return i0.ɵɵresetView(ctx_r101.showAddress(_r5, rel_r96.EcomStoreName, rel_r96.EcomStoreAddress)); });
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "td")(11, "button", 43);
    i0.ɵɵlistener("click", function BusinessAccountAllocationComponent_ng_template_10_ng_container_8_tr_21_Template_button_click_11_listener() { const restoredCtx = i0.ɵɵrestoreView(_r102); const rel_r96 = restoredCtx.$implicit; const ctx_r103 = i0.ɵɵnextContext(3); const _r5 = i0.ɵɵreference(13); return i0.ɵɵresetView(ctx_r103.showAddress(_r5, rel_r96.SellerStoreName, rel_r96.SellerStoreAddress)); });
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "td")(14, "button", 43);
    i0.ɵɵlistener("click", function BusinessAccountAllocationComponent_ng_template_10_ng_container_8_tr_21_Template_button_click_14_listener() { const restoredCtx = i0.ɵɵrestoreView(_r102); const rel_r96 = restoredCtx.$implicit; const ctx_r104 = i0.ɵɵnextContext(3); const _r5 = i0.ɵɵreference(13); return i0.ɵɵresetView(ctx_r104.showAddress(_r5, rel_r96.BuyerStoreName, rel_r96.BuyerStoreAddress)); });
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "td", 44);
    i0.ɵɵtemplate(17, BusinessAccountAllocationComponent_ng_template_10_ng_container_8_tr_21_img_17_Template, 1, 0, "img", 45);
    i0.ɵɵtemplate(18, BusinessAccountAllocationComponent_ng_template_10_ng_container_8_tr_21_ng_template_18_Template, 1, 0, "ng-template", null, 46, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "td", 47);
    i0.ɵɵlistener("click", function BusinessAccountAllocationComponent_ng_template_10_ng_container_8_tr_21_Template_td_click_20_listener() { i0.ɵɵrestoreView(_r102); const ctx_r105 = i0.ɵɵnextContext(3); const _r7 = i0.ɵɵreference(15); return i0.ɵɵresetView(ctx_r105.editStatus(_r7)); });
    i0.ɵɵelement(21, "i", 48);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const rel_r96 = ctx.$implicit;
    const i_r97 = ctx.index;
    const _r99 = i0.ɵɵreference(19);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i_r97 + 1);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(rel_r96.RelationId);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(rel_r96.B2BLinkSeqId);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("title", rel_r96.EcomStoreAddress || rel_r96.EcomStoreName);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", rel_r96.EcomStoreName, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("title", rel_r96.SellerStoreAddress || rel_r96.SellerStoreName);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", rel_r96.SellerStoreName, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("title", rel_r96.BuyerStoreAddress || rel_r96.BuyerStoreName);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", rel_r96.BuyerStoreName, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", rel_r96.IsActive)("ngIfElse", _r99);
} }
function BusinessAccountAllocationComponent_ng_template_10_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "table", 19)(2, "thead")(3, "tr")(4, "th");
    i0.ɵɵtext(5, "Sr. No.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "th");
    i0.ɵɵtext(7, "Relant Id");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "th");
    i0.ɵɵtext(9, "B2B Id");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "th");
    i0.ɵɵtext(11, "Ecom Store Address");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "th");
    i0.ɵɵtext(13, "Seller Org. Address");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "th");
    i0.ɵɵtext(15, "Buyer Org. Address");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "th");
    i0.ɵɵtext(17, "Active status");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "th");
    i0.ɵɵtext(19, "Action");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(20, "tbody");
    i0.ɵɵtemplate(21, BusinessAccountAllocationComponent_ng_template_10_ng_container_8_tr_21_Template, 22, 11, "tr", 20);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r92 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(21);
    i0.ɵɵproperty("ngForOf", ctx_r92.sfaRelationList);
} }
function BusinessAccountAllocationComponent_ng_template_10_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 51);
    i0.ɵɵtext(1, "No data available");
    i0.ɵɵelementEnd();
} }
function BusinessAccountAllocationComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    const _r107 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "form")(1, "div", 35)(2, "h4", 36);
    i0.ɵɵtext(3, "View User Allocated Acc.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "button", 37);
    i0.ɵɵlistener("click", function BusinessAccountAllocationComponent_ng_template_10_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r107); const ctx_r106 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r106.modalRef.hide()); });
    i0.ɵɵelementStart(5, "span", 38);
    i0.ɵɵtext(6, "\u00D7");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(7, "div", 39);
    i0.ɵɵtemplate(8, BusinessAccountAllocationComponent_ng_template_10_ng_container_8_Template, 22, 1, "ng-container", 30);
    i0.ɵɵtemplate(9, BusinessAccountAllocationComponent_ng_template_10_ng_template_9_Template, 2, 0, "ng-template", null, 40, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "div", 41)(12, "button", 42);
    i0.ɵɵlistener("click", function BusinessAccountAllocationComponent_ng_template_10_Template_button_click_12_listener() { i0.ɵɵrestoreView(_r107); const ctx_r108 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r108.modalRef.hide()); });
    i0.ɵɵtext(13, "Close");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const _r93 = i0.ɵɵreference(10);
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("ngIf", ctx_r4.sfaRelationList && ctx_r4.sfaRelationList.length > 0)("ngIfElse", _r93);
} }
function BusinessAccountAllocationComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    const _r110 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "form")(1, "div", 35)(2, "h4", 36);
    i0.ɵɵtext(3, "Store Address");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "button", 37);
    i0.ɵɵlistener("click", function BusinessAccountAllocationComponent_ng_template_12_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r110); const ctx_r109 = i0.ɵɵnextContext(); const _r3 = i0.ɵɵreference(11); return i0.ɵɵresetView(ctx_r109.closeSmallModal(_r3)); });
    i0.ɵɵelementStart(5, "span", 38);
    i0.ɵɵtext(6, "\u00D7");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(7, "div", 39)(8, "div", 16)(9, "div", 52)(10, "p");
    i0.ɵɵtext(11, "Store Name");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "div", 52);
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "div", 53)(15, "div", 52)(16, "p");
    i0.ɵɵtext(17, "Store Address");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(18, "div", 52);
    i0.ɵɵtext(19);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(20, "div", 41)(21, "button", 42);
    i0.ɵɵlistener("click", function BusinessAccountAllocationComponent_ng_template_12_Template_button_click_21_listener() { i0.ɵɵrestoreView(_r110); const ctx_r111 = i0.ɵɵnextContext(); const _r3 = i0.ɵɵreference(11); return i0.ɵɵresetView(ctx_r111.closeSmallModal(_r3)); });
    i0.ɵɵtext(22, "Close");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵadvance(13);
    i0.ɵɵtextInterpolate1(" ", ctx_r6.selectedStoreName, " ");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate1(" ", ctx_r6.selectedStoreAddress, " ");
} }
function BusinessAccountAllocationComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    const _r113 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "form")(1, "div", 35)(2, "h4", 36);
    i0.ɵɵtext(3, "Update Active Status");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "button", 37);
    i0.ɵɵlistener("click", function BusinessAccountAllocationComponent_ng_template_14_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r113); const ctx_r112 = i0.ɵɵnextContext(); const _r3 = i0.ɵɵreference(11); return i0.ɵɵresetView(ctx_r112.closeSmallModal(_r3)); });
    i0.ɵɵelementStart(5, "span", 38);
    i0.ɵɵtext(6, "\u00D7");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(7, "div", 39)(8, "div", 54)(9, "label", 55);
    i0.ɵɵtext(10, "Active Status");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "select", 56)(12, "option", 57);
    i0.ɵɵtext(13, "Select status");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "option", 58);
    i0.ɵɵtext(15, "Yes");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "option", 59);
    i0.ɵɵtext(17, "No");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(18, "div", 41)(19, "button", 42);
    i0.ɵɵlistener("click", function BusinessAccountAllocationComponent_ng_template_14_Template_button_click_19_listener() { i0.ɵɵrestoreView(_r113); const ctx_r114 = i0.ɵɵnextContext(); const _r3 = i0.ɵɵreference(11); return i0.ɵɵresetView(ctx_r114.closeSmallModal(_r3)); });
    i0.ɵɵtext(20, "Save");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "button", 42);
    i0.ɵɵlistener("click", function BusinessAccountAllocationComponent_ng_template_14_Template_button_click_21_listener() { i0.ɵɵrestoreView(_r113); const ctx_r115 = i0.ɵɵnextContext(); const _r3 = i0.ɵɵreference(11); return i0.ɵɵresetView(ctx_r115.closeSmallModal(_r3)); });
    i0.ɵɵtext(22, "Close");
    i0.ɵɵelementEnd()()();
} }
function BusinessAccountAllocationComponent_ng_template_16_option_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 73);
    i0.ɵɵtext(1, "Secondary");
    i0.ɵɵelementEnd();
} }
function BusinessAccountAllocationComponent_ng_template_16_option_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 74);
    i0.ɵɵtext(1, "Primary");
    i0.ɵɵelementEnd();
} }
function BusinessAccountAllocationComponent_ng_template_16_option_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 75);
    i0.ɵɵtext(1, "Teritiary");
    i0.ɵɵelementEnd();
} }
function BusinessAccountAllocationComponent_ng_template_16_option_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 74);
    i0.ɵɵtext(1, "Primary");
    i0.ɵɵelementEnd();
} }
function BusinessAccountAllocationComponent_ng_template_16_option_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 73);
    i0.ɵɵtext(1, "Secondary");
    i0.ɵɵelementEnd();
} }
function BusinessAccountAllocationComponent_ng_template_16_option_28_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 76);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const country_r125 = ctx.$implicit;
    i0.ɵɵproperty("value", country_r125.CNTRY_ID);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", country_r125.CNTRY_NM, " ");
} }
function BusinessAccountAllocationComponent_ng_template_16_option_36_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 76);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const state_r126 = ctx.$implicit;
    i0.ɵɵproperty("value", state_r126.STATE_ID);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(state_r126.STATE_NM);
} }
function BusinessAccountAllocationComponent_ng_template_16_option_44_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 76);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const city_r127 = ctx.$implicit;
    i0.ɵɵproperty("value", city_r127.CITY_ID);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(city_r127.CITY_NM);
} }
function BusinessAccountAllocationComponent_ng_template_16_div_48_tr_21_Template(rf, ctx) { if (rf & 1) {
    const _r133 = i0.ɵɵgetCurrentView();
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
    i0.ɵɵelementStart(11, "td")(12, "button", 78);
    i0.ɵɵlistener("click", function BusinessAccountAllocationComponent_ng_template_16_div_48_tr_21_Template_button_click_12_listener() { const restoredCtx = i0.ɵɵrestoreView(_r133); const acc_r130 = restoredCtx.$implicit; const ctx_r132 = i0.ɵɵnextContext(3); const _r21 = i0.ɵɵreference(29); return i0.ɵɵresetView(ctx_r132.openAccAddress(acc_r130.OfficeName, acc_r130.SubacctId, acc_r130.StoreId, _r21)); });
    i0.ɵɵtext(13, " Address ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "td");
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "td")(17, "button", 79);
    i0.ɵɵlistener("click", function BusinessAccountAllocationComponent_ng_template_16_div_48_tr_21_Template_button_click_17_listener() { const restoredCtx = i0.ɵɵrestoreView(_r133); const acc_r130 = restoredCtx.$implicit; const ctx_r134 = i0.ɵɵnextContext(3); const _r13 = i0.ɵɵreference(21); return i0.ɵɵresetView(ctx_r134.addSfaRelationModel(acc_r130.LinkId, _r13)); });
    i0.ɵɵtext(18, "Add");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const acc_r130 = ctx.$implicit;
    const i_r131 = ctx.index;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i_r131 + 1);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(acc_r130.LinkId);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(acc_r130.SubacctId);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(acc_r130.StoreId);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(acc_r130.OfficeName);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("title", acc_r130.Address || "No address");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(acc_r130.CategoryName);
} }
function BusinessAccountAllocationComponent_ng_template_16_div_48_tr_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 80);
    i0.ɵɵtext(2, "No data available");
    i0.ɵɵelementEnd()();
} }
function BusinessAccountAllocationComponent_ng_template_16_div_48_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 77)(1, "table", 19)(2, "thead")(3, "tr")(4, "th");
    i0.ɵɵtext(5, "Sr. No.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "th");
    i0.ɵɵtext(7, "B2B Id");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "th");
    i0.ɵɵtext(9, "Subacc Id");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "th");
    i0.ɵɵtext(11, "Store Id");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "th");
    i0.ɵɵtext(13, "Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "th");
    i0.ɵɵtext(15, "Address Detail");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "th");
    i0.ɵɵtext(17, "Category");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "th");
    i0.ɵɵtext(19, "Action");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(20, "tbody");
    i0.ɵɵtemplate(21, BusinessAccountAllocationComponent_ng_template_16_div_48_tr_21_Template, 19, 7, "tr", 20);
    i0.ɵɵtemplate(22, BusinessAccountAllocationComponent_ng_template_16_div_48_tr_22_Template, 3, 0, "tr", 4);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r124 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(21);
    i0.ɵɵproperty("ngForOf", ctx_r124.accountForSFA);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r124.accountForSFA.length === 0);
} }
function BusinessAccountAllocationComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    const _r136 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "form")(1, "div", 35)(2, "h4", 36);
    i0.ɵɵtext(3, "Allocate New Account");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "button", 37);
    i0.ɵɵlistener("click", function BusinessAccountAllocationComponent_ng_template_16_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r136); const ctx_r135 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r135.modalRef.hide()); });
    i0.ɵɵelementStart(5, "span", 38);
    i0.ɵɵtext(6, "\u00D7");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(7, "div", 39)(8, "div", 16)(9, "div", 60)(10, "div", 54)(11, "label", 61);
    i0.ɵɵtext(12, "Account Category For");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "select", 62);
    i0.ɵɵlistener("click", function BusinessAccountAllocationComponent_ng_template_16_Template_select_click_13_listener($event) { i0.ɵɵrestoreView(_r136); const ctx_r137 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r137.setAccCategory($event)); });
    i0.ɵɵelementStart(14, "option", 57);
    i0.ɵɵtext(15, "Select option");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(16, BusinessAccountAllocationComponent_ng_template_16_option_16_Template, 2, 0, "option", 63);
    i0.ɵɵtemplate(17, BusinessAccountAllocationComponent_ng_template_16_option_17_Template, 2, 0, "option", 64);
    i0.ɵɵtemplate(18, BusinessAccountAllocationComponent_ng_template_16_option_18_Template, 2, 0, "option", 65);
    i0.ɵɵtemplate(19, BusinessAccountAllocationComponent_ng_template_16_option_19_Template, 2, 0, "option", 64);
    i0.ɵɵtemplate(20, BusinessAccountAllocationComponent_ng_template_16_option_20_Template, 2, 0, "option", 63);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(21, "div", 60)(22, "div", 54)(23, "label");
    i0.ɵɵtext(24, "Country");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "select", 66);
    i0.ɵɵlistener("change", function BusinessAccountAllocationComponent_ng_template_16_Template_select_change_25_listener($event) { i0.ɵɵrestoreView(_r136); const ctx_r138 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r138.changeCountry($event)); });
    i0.ɵɵelementStart(26, "option", 67);
    i0.ɵɵtext(27, "Select");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(28, BusinessAccountAllocationComponent_ng_template_16_option_28_Template, 2, 2, "option", 68);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(29, "div", 60)(30, "div", 54)(31, "label");
    i0.ɵɵtext(32, "State");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(33, "select", 66);
    i0.ɵɵlistener("change", function BusinessAccountAllocationComponent_ng_template_16_Template_select_change_33_listener($event) { i0.ɵɵrestoreView(_r136); const ctx_r139 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r139.changeState($event)); });
    i0.ɵɵelementStart(34, "option", 67);
    i0.ɵɵtext(35, "Select");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(36, BusinessAccountAllocationComponent_ng_template_16_option_36_Template, 2, 2, "option", 68);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(37, "div", 60)(38, "div", 54)(39, "label");
    i0.ɵɵtext(40, "City");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(41, "select", 66);
    i0.ɵɵlistener("change", function BusinessAccountAllocationComponent_ng_template_16_Template_select_change_41_listener($event) { i0.ɵɵrestoreView(_r136); const ctx_r140 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r140.changeCity($event)); });
    i0.ɵɵelementStart(42, "option", 69);
    i0.ɵɵtext(43, "Select");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(44, BusinessAccountAllocationComponent_ng_template_16_option_44_Template, 2, 2, "option", 68);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(45, "div", 70)(46, "button", 71);
    i0.ɵɵlistener("click", function BusinessAccountAllocationComponent_ng_template_16_Template_button_click_46_listener() { i0.ɵɵrestoreView(_r136); const ctx_r141 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r141.getAccount()); });
    i0.ɵɵtext(47, "Get Account");
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(48, BusinessAccountAllocationComponent_ng_template_16_div_48_Template, 23, 2, "div", 72);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(49, "div", 41)(50, "button", 42);
    i0.ɵɵlistener("click", function BusinessAccountAllocationComponent_ng_template_16_Template_button_click_50_listener() { i0.ɵɵrestoreView(_r136); const ctx_r142 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r142.modalRef.hide()); });
    i0.ɵɵtext(51, "Close");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r10 = i0.ɵɵnextContext();
    i0.ɵɵadvance(16);
    i0.ɵɵproperty("ngIf", ctx_r10.PRIMARY_SELLER_FLG);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r10.SECONDRY_SELLER_FLG);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r10.SECONDRY_SELLER_FLG);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r10.TERITIARY_SELLER_FLG);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r10.TERITIARY_SELLER_FLG);
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("ngForOf", ctx_r10.countryList);
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("ngForOf", ctx_r10.stateList);
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("ngForOf", ctx_r10.cityList);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", ctx_r10.showAccList && ctx_r10.accountForSFA && ctx_r10.accountForSFA.length > 0);
} }
function BusinessAccountAllocationComponent_ng_template_18_option_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 76);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const store_r144 = ctx.$implicit;
    i0.ɵɵproperty("value", store_r144.StoreId);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", store_r144.OfficeName, " ");
} }
function BusinessAccountAllocationComponent_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    const _r146 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "form")(1, "div", 35)(2, "h4", 36);
    i0.ɵɵtext(3, "SFA Ecomm Registration");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "button", 37);
    i0.ɵɵlistener("click", function BusinessAccountAllocationComponent_ng_template_18_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r146); const ctx_r145 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r145.sfaRegRef.hide()); });
    i0.ɵɵelementStart(5, "span", 38);
    i0.ɵɵtext(6, "\u00D7");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(7, "div", 39)(8, "div", 54)(9, "label", 55);
    i0.ɵɵtext(10, "E-Commerce Stores");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "select", 81);
    i0.ɵɵlistener("change", function BusinessAccountAllocationComponent_ng_template_18_Template_select_change_11_listener($event) { i0.ɵɵrestoreView(_r146); const ctx_r147 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r147.onSelectStore($event)); });
    i0.ɵɵelementStart(12, "option", 57);
    i0.ɵɵtext(13, "Select store");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(14, BusinessAccountAllocationComponent_ng_template_18_option_14_Template, 2, 2, "option", 68);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(15, "div", 41)(16, "button", 42);
    i0.ɵɵlistener("click", function BusinessAccountAllocationComponent_ng_template_18_Template_button_click_16_listener() { i0.ɵɵrestoreView(_r146); const ctx_r148 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r148.onSfaRegistration()); });
    i0.ɵɵtext(17, "SFA Registration for Store");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r12 = i0.ɵɵnextContext();
    i0.ɵɵadvance(14);
    i0.ɵɵproperty("ngForOf", ctx_r12.ecomStoreList);
} }
function BusinessAccountAllocationComponent_ng_template_20_option_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 76);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const store_r150 = ctx.$implicit;
    i0.ɵɵproperty("value", store_r150.StoreId);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", store_r150.OfficeName, " ");
} }
function BusinessAccountAllocationComponent_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    const _r152 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "form")(1, "div", 35)(2, "h4", 36);
    i0.ɵɵtext(3, "Add Store");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "button", 37);
    i0.ɵɵlistener("click", function BusinessAccountAllocationComponent_ng_template_20_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r152); const ctx_r151 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r151.addStoreRef.hide()); });
    i0.ɵɵelementStart(5, "span", 38);
    i0.ɵɵtext(6, "\u00D7");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(7, "div", 39)(8, "div", 54)(9, "label", 55);
    i0.ɵɵtext(10, "E-Commerce Stores");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "select", 81);
    i0.ɵɵlistener("change", function BusinessAccountAllocationComponent_ng_template_20_Template_select_change_11_listener($event) { i0.ɵɵrestoreView(_r152); const ctx_r153 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r153.onEcomSelectStore($event)); });
    i0.ɵɵelementStart(12, "option", 57);
    i0.ɵɵtext(13, "Select store");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(14, BusinessAccountAllocationComponent_ng_template_20_option_14_Template, 2, 2, "option", 68);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(15, "div", 41)(16, "button", 42);
    i0.ɵɵlistener("click", function BusinessAccountAllocationComponent_ng_template_20_Template_button_click_16_listener() { i0.ɵɵrestoreView(_r152); const ctx_r154 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r154.addSfaRelation()); });
    i0.ɵɵtext(17, "Add");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r14 = i0.ɵɵnextContext();
    i0.ɵɵadvance(14);
    i0.ɵɵproperty("ngForOf", ctx_r14.ecomStoreList);
} }
function BusinessAccountAllocationComponent_ng_template_22_img_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 29);
} if (rf & 2) {
    const ctx_r155 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("src", ctx_r155.imgURL + ctx_r155.details.Photo.replace("~", ""), i0.ɵɵsanitizeUrl);
} }
function BusinessAccountAllocationComponent_ng_template_22_Template(rf, ctx) { if (rf & 1) {
    const _r157 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "form")(1, "div", 35)(2, "h4", 36);
    i0.ɵɵtext(3, "Details");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "button", 37);
    i0.ɵɵlistener("click", function BusinessAccountAllocationComponent_ng_template_22_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r157); const ctx_r156 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r156.detailsRef.hide()); });
    i0.ɵɵelementStart(5, "span", 38);
    i0.ɵɵtext(6, "\u00D7");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(7, "div", 39)(8, "div", 16)(9, "div", 52)(10, "p");
    i0.ɵɵtext(11, "Photo");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "div", 52);
    i0.ɵɵtemplate(13, BusinessAccountAllocationComponent_ng_template_22_img_13_Template, 1, 1, "img", 28);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "div", 53)(15, "div", 52)(16, "p");
    i0.ɵɵtext(17, "Mobile");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(18, "div", 52);
    i0.ɵɵtext(19);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(20, "div", 53)(21, "div", 52)(22, "p");
    i0.ɵɵtext(23, "Role Id");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(24, "div", 52);
    i0.ɵɵtext(25);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(26, "div", 53)(27, "div", 52)(28, "p");
    i0.ɵɵtext(29, "Role Name");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(30, "div", 52);
    i0.ɵɵtext(31);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(32, "div", 41)(33, "button", 42);
    i0.ɵɵlistener("click", function BusinessAccountAllocationComponent_ng_template_22_Template_button_click_33_listener() { i0.ɵɵrestoreView(_r157); const ctx_r158 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r158.detailsRef.hide()); });
    i0.ɵɵtext(34, "Close");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r16 = i0.ɵɵnextContext();
    i0.ɵɵadvance(13);
    i0.ɵɵproperty("ngIf", ctx_r16.details.Photo);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate1(" ", ctx_r16.details.mobile, " ");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate1(" ", ctx_r16.details.roleId, " ");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate1(" ", ctx_r16.details.roleName, " ");
} }
function BusinessAccountAllocationComponent_ng_template_24_Template(rf, ctx) { if (rf & 1) {
    const _r160 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "form")(1, "div", 35)(2, "h4", 36);
    i0.ɵɵtext(3, "Delete User");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "button", 37);
    i0.ɵɵlistener("click", function BusinessAccountAllocationComponent_ng_template_24_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r160); const ctx_r159 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r159.deleteUserRef.hide()); });
    i0.ɵɵelementStart(5, "span", 38);
    i0.ɵɵtext(6, "\u00D7");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(7, "div", 39)(8, "div", 54)(9, "label", 55);
    i0.ɵɵtext(10, "Delete SFA User Permanently");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "select", 81);
    i0.ɵɵlistener("change", function BusinessAccountAllocationComponent_ng_template_24_Template_select_change_11_listener($event) { i0.ɵɵrestoreView(_r160); const ctx_r161 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r161.onEcomSelectStore($event)); });
    i0.ɵɵelementStart(12, "option", 57);
    i0.ɵɵtext(13, "Select option");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "option", 58);
    i0.ɵɵtext(15, "Yes");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "option", 59);
    i0.ɵɵtext(17, "No");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(18, "div", 41)(19, "button", 82);
    i0.ɵɵtext(20, "Delete");
    i0.ɵɵelementEnd()()();
} }
function BusinessAccountAllocationComponent_ng_template_26_Template(rf, ctx) { if (rf & 1) {
    const _r163 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "form")(1, "div", 35)(2, "h4", 36);
    i0.ɵɵtext(3, "Credentials");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "button", 37);
    i0.ɵɵlistener("click", function BusinessAccountAllocationComponent_ng_template_26_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r163); const ctx_r162 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r162.showcredentialsRef.hide()); });
    i0.ɵɵelementStart(5, "span", 38);
    i0.ɵɵtext(6, "\u00D7");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(7, "div", 39)(8, "div", 53)(9, "div", 52)(10, "p");
    i0.ɵɵtext(11, "Mobile");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "div", 52);
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "div", 53)(15, "div", 52)(16, "p");
    i0.ɵɵtext(17, "Password");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(18, "div", 52);
    i0.ɵɵtext(19);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(20, "div", 41)(21, "button", 42);
    i0.ɵɵlistener("click", function BusinessAccountAllocationComponent_ng_template_26_Template_button_click_21_listener() { i0.ɵɵrestoreView(_r163); const ctx_r164 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r164.showcredentialsRef.hide()); });
    i0.ɵɵtext(22, "Close");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r20 = i0.ɵɵnextContext();
    i0.ɵɵadvance(13);
    i0.ɵɵtextInterpolate1(" ", ctx_r20.credentials.Reg_Mobile, " ");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate1(" ", ctx_r20.credentials.App_Password, " ");
} }
function BusinessAccountAllocationComponent_ng_template_28_Template(rf, ctx) { if (rf & 1) {
    const _r166 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "form")(1, "div", 35)(2, "h4", 36);
    i0.ɵɵtext(3, "Store Address");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "button", 37);
    i0.ɵɵlistener("click", function BusinessAccountAllocationComponent_ng_template_28_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r166); const ctx_r165 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r165.addressRef.hide()); });
    i0.ɵɵelementStart(5, "span", 38);
    i0.ɵɵtext(6, "\u00D7");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(7, "div", 39)(8, "div", 16)(9, "div", 52)(10, "p");
    i0.ɵɵtext(11, "Store Name");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "div", 52);
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "div", 53)(15, "div", 52)(16, "p");
    i0.ɵɵtext(17, "Pincode");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(18, "div", 52);
    i0.ɵɵtext(19);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(20, "div", 53)(21, "div", 52)(22, "p");
    i0.ɵɵtext(23, "Store Address");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(24, "div", 52);
    i0.ɵɵtext(25);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(26, "div", 41)(27, "button", 42);
    i0.ɵɵlistener("click", function BusinessAccountAllocationComponent_ng_template_28_Template_button_click_27_listener() { i0.ɵɵrestoreView(_r166); const ctx_r167 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r167.addressRef.hide()); });
    i0.ɵɵtext(28, "Close");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r22 = i0.ɵɵnextContext();
    i0.ɵɵadvance(13);
    i0.ɵɵtextInterpolate1(" ", ctx_r22.storeAddress == null ? null : ctx_r22.storeAddress.storeName, " ");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate1(" ", ctx_r22.storeAddress == null ? null : ctx_r22.storeAddress.Pincode, " ");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate1(" ", ctx_r22.storeAddress == null ? null : ctx_r22.storeAddress.Address, " ");
} }
export class BusinessAccountAllocationComponent {
    constructor(apiService, modalService, toastr, commonservice, formBuilder) {
        this.apiService = apiService;
        this.modalService = modalService;
        this.toastr = toastr;
        this.commonservice = commonservice;
        this.formBuilder = formBuilder;
        this.countryEvent = new EventEmitter();
        this.stateEvent = new EventEmitter();
        this.cityEvent = new EventEmitter();
        this.imgURL = this.apiService.imgURL;
        this.storeSfaList = {
            SubacctId: 0,
            StoreId: 0,
            ForTeritiarySalesFlg: false,
            ForSecondarySalesFlg: false,
            ForPrimaryPurchaseFlg: false
        };
        this.credentials = {
            Reg_Mobile: '',
            App_Password: ''
        };
        this.getAccountArr = {
            Login_Subacctid: null,
            Login_Storeid: null,
            For_Primary_Flg: false,
            For_Secondry_Flg: false,
            For_Teritiary_Flg: false,
            Countryid: null,
            Stateid: null,
            Cityid: null
        };
        this.details = {
            Photo: '',
            mobile: '',
            roleId: 0,
            roleName: ''
        };
        this.teritiarySalesFlg = true;
        this.secondarySalesFlg = false;
        this.primaryPurchaseFlg = false;
        this.showAccList = false;
        this.sfaAccountArr = [];
        this.sfaRelationList = [];
        this.ecomStoreList = [];
        this.accountForSFA = [];
        this.sfaRegestration = {
            User_Mobileno: '',
            Primary_Subacctid: 0,
            Primary_Storeid: 0,
            User_Subacctid: 0,
            User_Storeid: 0,
            b2b_retailer_Flg: false,
            b2b_distributor_Flg: false,
            b2b_Franchisee_flg: false,
            b2b_Branch_Flg: false
        };
        this.storeAddress = {
            storeName: '',
            Country: 0,
            State: 0,
            City: 0,
            Pincode: '',
            Address: ''
        };
        this.addSfaRelationPayload = {
            Login_Subacctid: 0,
            Login_Storeid: 0,
            Ecom_Store_Code: '',
            SFE_USERID: '',
            For_Primry_Purchase_Flg: false,
            For_Secndry_Sales_Flg: false,
            For_Teritiary_Sales_Flg: false,
            B2B_Link_Seq_ID: null
        };
        this.getlogindata = localStorage.getItem('logindata');
        this.getlogindata = JSON.parse(this.getlogindata);
        this.accountid = this.getlogindata.RETAIL_D2C_ACCT_ID;
        this.subaccountid = this.getlogindata.RETAIL_D2C_USR_SUBACCT_ID;
        this.storeid = this.getlogindata.RETAIL_D2C_ACCT_INTRNL_OFFICE_REGID;
        this.PRIMARY_SELLER_FLG = this.apiService.requiredLoginData.PRIMARY_SELLER_FLG;
        this.SECONDRY_SELLER_FLG = this.apiService.requiredLoginData.SECONDRY_SELLER_FLG;
        this.TERITIARY_SELLER_FLG = this.apiService.requiredLoginData.TERITIARY_SELLER_FLG;
        this.PlatformId = this.apiService.requiredLoginData.PlatformId;
    }
    ngOnInit() {
        // Set initial tab and SFA list based on seller flags
        if (this.PRIMARY_SELLER_FLG) {
            // Primary: Only show Secondary tab
            this.teritiarySalesFlg = false;
            this.secondarySalesFlg = true;
            this.primaryPurchaseFlg = false;
            this.storeSfaList = {
                SubacctId: this.subaccountid,
                StoreId: this.storeid,
                ForTeritiarySalesFlg: false,
                ForSecondarySalesFlg: true,
                ForPrimaryPurchaseFlg: false
            };
        }
        else if (this.SECONDRY_SELLER_FLG) {
            // Secondary: Show Primary and Tertiary tabs, default to Primary
            this.teritiarySalesFlg = false;
            this.secondarySalesFlg = false;
            this.primaryPurchaseFlg = true;
            this.storeSfaList = {
                SubacctId: this.subaccountid,
                StoreId: this.storeid,
                ForTeritiarySalesFlg: false,
                ForSecondarySalesFlg: false,
                ForPrimaryPurchaseFlg: true
            };
        }
        else if (this.TERITIARY_SELLER_FLG) {
            // Tertiary: Only show Primary tab
            this.teritiarySalesFlg = false;
            this.secondarySalesFlg = false;
            this.primaryPurchaseFlg = true;
            this.storeSfaList = {
                SubacctId: this.subaccountid,
                StoreId: this.storeid,
                ForTeritiarySalesFlg: false,
                ForSecondarySalesFlg: false,
                ForPrimaryPurchaseFlg: true
            };
        }
        else {
            // Default: fallback to Tertiary
            this.teritiarySalesFlg = true;
            this.secondarySalesFlg = false;
            this.primaryPurchaseFlg = false;
            this.storeSfaList = {
                SubacctId: this.subaccountid,
                StoreId: this.storeid,
                ForTeritiarySalesFlg: true,
                ForSecondarySalesFlg: false,
                ForPrimaryPurchaseFlg: false
            };
        }
        this.apiService.postCall(this.apiService.baseURL + '/GetStoreSfaExecList', this.storeSfaList)
            .subscribe(data => {
            this.sfaAccountArr = data;
            console.log(this.sfaAccountArr);
            console.log("img url: ", this.imgURL);
        }, (error) => {
            this.toastr.error(error.error.Message, '', {
                timeOut: 5000,
            });
        });
        this.getCountry();
    }
    addSfaRelation() {
        this.apiService.postCall(this.apiService.baseURL + '/AddSfaRelation', this.addSfaRelationPayload)
            .subscribe(data => {
            this.sfaAccountArr = data;
            console.log(this.sfaAccountArr);
        }, (error) => {
            console.log("Responce: ", error);
            this.toastr.error(error.error, '', {
                timeOut: 5000,
            });
        });
        console.log("Payload: ", this.addSfaRelationPayload);
        this.addStoreRef.hide();
        this.modalRef.show();
    }
    addSfaRelationModel(linkId, template) {
        this.modalRef.hide();
        this.addSfaRelationPayload = Object.assign(Object.assign({}, this.addSfaRelationPayload), { B2B_Link_Seq_ID: linkId });
        this.addStoreRef = this.modalService.show(template, { class: 'modal-sm' });
    }
    openModalLarge(template) {
        this.isTitle = true;
        this.isAdd = true;
        this.modalRef = this.modalService.show(template, { class: 'modal-xl' });
    }
    openModalSmall(template) {
        this.isTitle = true;
        this.isAdd = true;
        this.smallModalRef = this.modalService.show(template, { class: 'modal-sm' });
    }
    openModalMedium(template) {
        this.isTitle = true;
        this.isAdd = true;
        this.smallModalRef = this.modalService.show(template, { class: 'modal-md' });
    }
    closeSmallModal(viewusertemplate) {
        if (this.smallModalRef) {
            this.smallModalRef.hide();
            this.openModalLarge(viewusertemplate);
        }
    }
    onEcomSelectStore(event) {
        const selectedStoreId = event.target.value;
        const selectedStore = this.ecomStoreList.find(store => store.StoreId == selectedStoreId);
        const customerAccessStoreCode = selectedStore ? selectedStore.CustomerAccessStoreCode : null;
        console.log('CustomerAccessStoreCode:', customerAccessStoreCode);
        if (selectedStore) {
            const storeId = selectedStore.StoreId;
            const accid = selectedStore.SubacctId;
            console.log('Selected StoreId:', storeId, 'SubacctId:', accid);
            this.addSfaRelationPayload = Object.assign(Object.assign({}, this.addSfaRelationPayload), { Login_Subacctid: this.subaccountid, Login_Storeid: this.storeid, Ecom_Store_Code: customerAccessStoreCode });
        }
        else {
            console.log('No store found for StoreId:', selectedStoreId);
        }
    }
    onSelectStore(event) {
        const selectedStoreId = event.target.value;
        const selectedStore = this.ecomStoreList.find(store => store.StoreId == selectedStoreId);
        if (selectedStore) {
            const storeId = selectedStore.StoreId;
            const accid = selectedStore.SubacctId;
            console.log('Selected StoreId:', storeId, 'SubacctId:', accid);
            this.sfaRegestration = Object.assign(Object.assign({}, this.sfaRegestration), { Primary_Subacctid: accid, Primary_Storeid: +storeId, User_Subacctid: this.subaccountid, User_Storeid: this.storeid, b2b_retailer_Flg: false, b2b_distributor_Flg: false, b2b_Franchisee_flg: false, b2b_Branch_Flg: true });
        }
        else {
            console.log('No store found for StoreId:', selectedStoreId);
        }
    }
    onSfaRegistration() {
        console.log("Payload: ", this.sfaRegestration);
        this.apiService.postCall(this.apiService.baseURL + '/B2BAppCustRegistration', this.sfaRegestration)
            .subscribe(data => {
            console.log(data);
            this.toastr.show(data.Message);
        }, (error) => {
            this.toastr.error(error.error.Message, '', {
                timeOut: 5000,
            });
        });
        this.sfaRegRef.hide();
    }
    showDetails(Photo, mobile, roleId, roleName, template) {
        this.details = {
            Photo: Photo,
            mobile: mobile,
            roleId: roleId,
            roleName: roleName
        };
        this.detailsRef = this.modalService.show(template, { class: 'modal-md' });
    }
    deleteUser(template) {
        this.deleteUserRef = this.modalService.show(template, { class: 'modal-sm' });
    }
    showCredentials(template, userId) {
        const payload = {
            Userid: userId,
            Login_Subacctid: this.subaccountid,
            Login_Storeid: this.storeid
        };
        console.log("Payload: ", payload);
        this.apiService.postCall(this.apiService.baseURL + '/GetSFA_AppPassword_OnDashboard', payload)
            .subscribe(data => {
            console.log(data);
            this.credentials = {
                Reg_Mobile: data.Reg_Mobile,
                App_Password: data.App_Password
            };
        }, (error) => {
            console.log(error);
            this.toastr.error(error.error.Message, '', {
                timeOut: 5000,
            });
        });
        this.showcredentialsRef = this.modalService.show(template, { class: 'modal-sm' });
    }
    getStoreCredentials(storeID) {
        this.apiService.getCall(`${this.apiService.baseURL}/GetStoreCredentials/${storeID}`)
            .subscribe(data => {
            console.log(data);
        }, (error) => {
            console.log(error);
            this.toastr.error(error.error, '', {
                timeOut: 5000,
            });
        });
    }
    viewUserAllocated(template, userId) {
        this.openModalLarge(template);
        console.log("useradat: ", this.getlogindata);
        const payload = {
            SubacctId: this.subaccountid,
            StoreId: this.storeid,
            SfaUserId: userId,
            ForPrimryFlg: this.primaryPurchaseFlg,
            ForSecndryFlg: this.secondarySalesFlg,
            ForTertiaryFlg: this.teritiarySalesFlg
        };
        console.log("payload: ", payload);
        this.apiService.postCall(this.apiService.baseURL + '/GetSFA_Relations', payload)
            .subscribe(data => {
            this.sfaRelationList = data || [];
            console.log(this.sfaRelationList);
        }, (error) => {
            this.toastr.error(error.error.Message, '', {
                timeOut: 5000,
            });
        });
    }
    editStatus(template) {
        this.modalRef.hide();
        this.openModalSmall(template);
    }
    showAddress(address, SellerStoreName, SellerStoreAddress) {
        this.modalRef.hide();
        this.selectedStoreName = SellerStoreName;
        this.selectedStoreAddress = SellerStoreAddress;
        this.openModalMedium(address);
    }
    openAccAddress(name, subaccid, storeid, template) {
        const payload = {
            Subacctid: subaccid,
            Storeid: storeid
        };
        this.apiService.postCall(`${this.apiService.baseURL}/GetAcctAddressContact`, payload)
            .subscribe(data => {
            console.log(data);
            this.storeAddress = {
                storeName: name,
                Country: data.Country,
                State: data.State,
                City: data.City,
                Pincode: data.Pincode,
                Address: data.Address
            };
        }, (error) => {
            console.log(error);
            this.toastr.error(error.error, '', {
                timeOut: 5000,
            });
        });
        this.modalRef.hide();
        this.addressRef = this.modalService.show(template, { class: 'modal-md' });
    }
    allocateNewUser(template, roleId, userId) {
        this.addSfaRelationPayload = Object.assign(Object.assign({}, this.addSfaRelationPayload), { SFE_USERID: userId });
        const payload = {
            LoginSubacctid: this.subaccountid,
            LoginStoreid: this.storeid,
            LoginPlatformid: this.PlatformId,
            ForPrimryFlg: roleId === 15,
            ForSecndryFlg: roleId === 16,
            ForTertiaryFlg: roleId === 17
        };
        console.log("Payload: ", payload);
        this.apiService.postCall(this.apiService.baseURL + '/GetEcomStoreList', payload)
            .subscribe(data => {
            console.log(data);
            this.ecomStoreList = data || [];
        }, (error) => {
            this.toastr.error(error.error.Message, '', {
                timeOut: 5000,
            });
        });
        this.showAccList = false;
        this.openModalLarge(template);
    }
    setAccCategory(event) {
        const selectedValue = event.target.value;
        console.log('Selected Account Category:', selectedValue);
        if (selectedValue == "primary") {
            this.addSfaRelationPayload.For_Primry_Purchase_Flg = this.getAccountArr.For_Primary_Flg = true;
            this.addSfaRelationPayload.For_Secndry_Sales_Flg = this.getAccountArr.For_Secondry_Flg = false;
            this.addSfaRelationPayload.For_Teritiary_Sales_Flg = this.getAccountArr.For_Teritiary_Flg = false;
        }
        else if (selectedValue == "secondary") {
            this.addSfaRelationPayload.For_Primry_Purchase_Flg = this.getAccountArr.For_Primary_Flg = false;
            this.addSfaRelationPayload.For_Secndry_Sales_Flg = this.getAccountArr.For_Secondry_Flg = true;
            this.addSfaRelationPayload.For_Teritiary_Sales_Flg = this.getAccountArr.For_Teritiary_Flg = false;
        }
        else if (selectedValue == "teritiary") {
            this.addSfaRelationPayload.For_Primry_Purchase_Flg = this.getAccountArr.For_Primary_Flg = false;
            this.addSfaRelationPayload.For_Secndry_Sales_Flg = this.getAccountArr.For_Secondry_Flg = false;
            this.addSfaRelationPayload.For_Teritiary_Sales_Flg = this.getAccountArr.For_Teritiary_Flg = true;
        }
        else {
            this.addSfaRelationPayload.For_Primry_Purchase_Flg = this.getAccountArr.For_Primary_Flg = false;
            this.addSfaRelationPayload.For_Secndry_Sales_Flg = this.getAccountArr.For_Secondry_Flg = false;
            this.addSfaRelationPayload.For_Teritiary_Sales_Flg = this.getAccountArr.For_Teritiary_Flg = false;
        }
    }
    getAccount() {
        this.getAccountArr.Login_Subacctid = this.subaccountid;
        this.getAccountArr.Login_Storeid = this.storeid;
        this.getAccountArr.Countryid = this.countryID;
        this.getAccountArr.Stateid = this.stateID;
        this.getAccountArr.Cityid = this.cityID;
        console.log("payload: ", this.getAccountArr);
        // Check if Ecom_Store_Code is empty before making API call
        // if (!this.addSfaRelationPayload.Ecom_Store_Code) {
        //   this.toastr.error('Please select the E-Commerce Store', '', {
        //   timeOut: 3000,
        //   });
        //   return;
        // }
        this.apiService.postCall(this.apiService.baseURL + '/GetAccountsForSFA', this.getAccountArr)
            .subscribe(data => {
            console.log(data);
            this.accountForSFA = data.data || [];
        }, (error) => {
            this.toastr.error(error.error.Message, '', {
                timeOut: 5000,
            });
        });
        this.showAccList = true;
    }
    sfaEcomReg(template, roleId, MobileNumber) {
        const payload = {
            LoginSubacctid: this.subaccountid,
            LoginStoreid: this.storeid,
            LoginPlatformid: this.PlatformId,
            ForPrimryFlg: roleId === 15,
            ForSecndryFlg: roleId === 16,
            ForTertiaryFlg: roleId === 17
        };
        this.sfaRegestration = {
            User_Mobileno: MobileNumber,
            Primary_Subacctid: 0,
            Primary_Storeid: 0,
            User_Subacctid: 0,
            User_Storeid: 0,
            b2b_retailer_Flg: false,
            b2b_distributor_Flg: false,
            b2b_Franchisee_flg: false,
            b2b_Branch_Flg: false
        };
        this.apiService.postCall(this.apiService.baseURL + '/GetEcomStoreList', payload)
            .subscribe(data => {
            console.log(data);
            this.ecomStoreList = data || [];
        }, (error) => {
            this.toastr.error(error.error.Message, '', {
                timeOut: 5000,
            });
        });
        this.sfaRegRef = this.modalService.show(template, { class: 'modal-sm' });
    }
    onTabChange(event) {
        console.log('Tab changed:', event);
        this.sfaAccountArr = [];
        if (event == "Teritiary Account") {
            this.teritiarySalesFlg = true;
            this.secondarySalesFlg = false;
            this.primaryPurchaseFlg = false;
        }
        else if (event == "Secondary Account") {
            this.teritiarySalesFlg = false;
            this.secondarySalesFlg = true;
            this.primaryPurchaseFlg = false;
        }
        else {
            this.teritiarySalesFlg = false;
            this.secondarySalesFlg = false;
            this.primaryPurchaseFlg = true;
        }
        this.storeSfaList = {
            SubacctId: this.subaccountid,
            StoreId: this.storeid,
            ForTeritiarySalesFlg: this.teritiarySalesFlg,
            ForSecondarySalesFlg: this.secondarySalesFlg,
            ForPrimaryPurchaseFlg: this.primaryPurchaseFlg
        };
        console.log("Payload: ", this.storeSfaList);
        this.apiService.postCall(this.apiService.baseURL + '/GetStoreSfaExecList', this.storeSfaList)
            .subscribe(data => {
            this.sfaAccountArr = data;
            console.log(this.sfaAccountArr);
        }, (error) => {
            this.toastr.error(error.error.Message, '', {
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
BusinessAccountAllocationComponent.ɵfac = function BusinessAccountAllocationComponent_Factory(t) { return new (t || BusinessAccountAllocationComponent)(i0.ɵɵdirectiveInject(i1.ApiService), i0.ɵɵdirectiveInject(i2.BsModalService), i0.ɵɵdirectiveInject(i3.ToastrService), i0.ɵɵdirectiveInject(i4.CommonService), i0.ɵɵdirectiveInject(i5.FormBuilder)); };
BusinessAccountAllocationComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BusinessAccountAllocationComponent, selectors: [["app-business-account-allocation"]], outputs: { countryEvent: "countryEvent", stateEvent: "stateEvent", cityEvent: "cityEvent" }, decls: 30, vars: 3, consts: [[1, "content"], [1, "heading-title"], [1, "card"], [1, "card-body", "pl-0", "pr-0"], [4, "ngIf"], ["viewusertemplate", ""], ["address", ""], ["edit", ""], ["alloacteusertemplate", ""], ["sfaRegistration", ""], ["addStore", ""], ["showExtraDetails", ""], ["deleteUserModal", ""], ["showCredentialsModal", ""], ["bigaddress", ""], ["heading", "GET SFA for Secondary Account", "id", "tab-secondary", 3, "selectTab"], [1, "row"], [1, "col-md-12"], [1, "pb-0"], [1, "table"], [4, "ngFor", "ngForOf"], ["colspan", "9", 1, "text-center"], [1, "btn", "custom-btn", "float-right", 3, "click"], [1, "btn", "custom-btn", "float-right", "mr-2", 3, "click"], [1, "icon", 2, "font-size", "1.5em", "color", "#ba080b", 3, "click"], [1, "fa", "fa-trash"], ["heading", "GET SFA for Primary Account", "id", "tab-primary", 3, "selectTab"], ["heading", "GET SFA for Teritiary Account", "id", "tab-tertiary", 3, "selectTab"], ["alt", "KYC Image", "width", "40", 3, "src", 4, "ngIf"], ["alt", "KYC Image", "width", "40", 3, "src"], [4, "ngIf", "ngIfElse"], ["noAccessTertiary", ""], [1, "px-2", "py-1", "action-btn", 3, "click"], [1, "ml-2", "px-2", "py-1", "action-btn", 3, "click"], [1, "alert", "alert-warning", "text-center", "my-4"], [1, "modal-header"], [1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], ["noDataAvailable", ""], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], [1, "btn", "btn-outline-info", "btn-sm", "px-3", 2, "font-size", "10px", 3, "title", "click"], [1, "icon"], ["src", "../assets/images/active_icon.png", 4, "ngIf", "ngIfElse"], ["inactiveIcon", ""], [1, "icon", 3, "click"], [1, "fa", "fa-edit"], ["src", "../assets/images/active_icon.png"], ["src", "../assets/images/inactive_icon.png"], [1, "text-center", "my-4"], [1, "col-md-6"], [1, "row", "mt-1"], [1, "form-group"], ["for", "activeStatus"], ["id", "activeStatus", 1, "form-control"], ["value", "", "selected", "", "disabled", ""], ["value", "yes"], ["value", "no"], [1, "col-md-3"], ["for", "dropdown1"], ["id", "dropdown1", 1, "form-control", 3, "click"], ["value", "secondary", 4, "ngIf"], ["value", "primary", 4, "ngIf"], ["value", "teritiary", 4, "ngIf"], [1, "form-control", 3, "change"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["selected", "", "value", ""], [1, "col-md-12", "bottom-btn", "mt-1", "mb-3"], ["type", "button", 1, "btn", "custom-btn", "float-right", 3, "click"], ["class", "mt-3", 4, "ngIf"], ["value", "secondary"], ["value", "primary"], ["value", "teritiary"], [3, "value"], [1, "mt-3"], [1, "btn", "btn-outline-info", "btn-sm", "px-3", 3, "title", "click"], [1, "btn", "btn-outline-info", "btn-sm", "px-3", 3, "click"], ["colspan", "8", 1, "text-center"], ["id", "activeStatus", 1, "form-control", 3, "change"], ["type", "button", 1, "btn", "btn-secondary"]], template: function BusinessAccountAllocationComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "h1", 1);
        i0.ɵɵtext(2, "Business Account Allocation Component");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "div", 2)(4, "div", 3)(5, "div")(6, "tabset");
        i0.ɵɵtemplate(7, BusinessAccountAllocationComponent_ng_container_7_Template, 24, 2, "ng-container", 4);
        i0.ɵɵtemplate(8, BusinessAccountAllocationComponent_ng_container_8_Template, 47, 4, "ng-container", 4);
        i0.ɵɵtemplate(9, BusinessAccountAllocationComponent_ng_container_9_Template, 30, 4, "ng-container", 4);
        i0.ɵɵelementEnd()()()()();
        i0.ɵɵtemplate(10, BusinessAccountAllocationComponent_ng_template_10_Template, 14, 2, "ng-template", null, 5, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(12, BusinessAccountAllocationComponent_ng_template_12_Template, 23, 2, "ng-template", null, 6, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(14, BusinessAccountAllocationComponent_ng_template_14_Template, 23, 0, "ng-template", null, 7, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(16, BusinessAccountAllocationComponent_ng_template_16_Template, 52, 9, "ng-template", null, 8, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(18, BusinessAccountAllocationComponent_ng_template_18_Template, 18, 1, "ng-template", null, 9, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(20, BusinessAccountAllocationComponent_ng_template_20_Template, 18, 1, "ng-template", null, 10, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(22, BusinessAccountAllocationComponent_ng_template_22_Template, 35, 4, "ng-template", null, 11, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(24, BusinessAccountAllocationComponent_ng_template_24_Template, 21, 0, "ng-template", null, 12, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(26, BusinessAccountAllocationComponent_ng_template_26_Template, 23, 2, "ng-template", null, 13, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(28, BusinessAccountAllocationComponent_ng_template_28_Template, 29, 3, "ng-template", null, 14, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        i0.ɵɵadvance(7);
        i0.ɵɵproperty("ngIf", ctx.PRIMARY_SELLER_FLG);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.SECONDRY_SELLER_FLG);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.TERITIARY_SELLER_FLG);
    } }, dependencies: [i6.NgForOf, i6.NgIf, i5.ɵNgNoValidate, i5.NgSelectOption, i5.ɵNgSelectMultipleOption, i5.NgControlStatusGroup, i5.NgForm, i7.TabDirective, i7.TabsetComponent], styles: ["i.fa.fa-edit[_ngcontent-%COMP%] {\r\n    font-size: 25px;\r\n    color: #bd2130;\r\n}\r\n\r\n.action-btn[_ngcontent-%COMP%] {\r\n    font-size: 0.6rem; \r\n    background-color: #10b981; \r\n    color: #ffffff; \r\n    border: none;\r\n}\r\n\r\n.custom-btn[_ngcontent-%COMP%], button.custom-btn[_ngcontent-%COMP%] {\r\n    background: #ba080b !important;\r\n    color: #fff;\r\n    border: 0;\r\n    transition: 1s all;\r\n    font-size: 12px;\r\n    min-height: 28px;\r\n}\r\n\r\n.flex-col[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n    font-size: 1.1rem; \r\n    font-weight: 500;\r\n}\r\n\r\n.tabset-bg-white[_ngcontent-%COMP%] {\r\n    background-color: #fff;\r\n    border-radius: 6px;\r\n    padding: 10px;\r\n}\r\n\r\n.card-body.no_data_available[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    color: #bd2130;\r\n    img {\r\n        display: block;\r\n        text-align: center;\r\n        margin: 0 auto 5px;\r\n        max-width: 30px;\r\n    }\r\n}\r\n.card[_ngcontent-%COMP%] {\r\n    padding: 0 20px 0;\r\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BusinessAccountAllocationComponent, [{
        type: Component,
        args: [{ selector: 'app-business-account-allocation', template: "<div class=\"content\">\n    <h1 class=\"heading-title\">Business Account Allocation Component</h1>\n\n    <div class=\"card\">\n        <div class=\"card-body pl-0 pr-0\">\n            <div>\n                <tabset>\n                    <!-- Primary Seller Flag: Show only \"GET SFA for Secondary Account\" tab -->\n                    <ng-container *ngIf=\"PRIMARY_SELLER_FLG\">\n                        <tab (selectTab)=\"onTabChange('Secondary Account')\" heading=\"GET SFA for Secondary Account\"\n                            id=\"tab-secondary\">\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n                                    <div class=\" pb-0\">\n                                        <table class=\"table\">\n                                            <thead>\n                                                <tr>\n                                                    <th>Sr. No.</th>\n                                                    <th>User ID</th>\n                                                    <th>User First Name</th>\n                                                    <th>User Last Name</th>\n                                                    <th>Details</th>\n                                                    <th>Actions</th>\n                                                    <th></th>\n                                                </tr>\n                                            </thead>\n                                            <tbody>\n                                                <tr *ngIf=\"!sfaAccountArr || sfaAccountArr.length === 0\">\n                                                    <td colspan=\"9\" class=\"text-center\">No data available</td>\n                                                </tr>\n                                                <tr *ngFor=\"let user of sfaAccountArr; let i = index\">\n                                                    <td>{{ i + 1 }}</td>\n                                                    <td>{{ user.UserId }}</td>\n                                                    <td>{{ user.FirstName }}</td>\n                                                    <td>{{ user.LastName }}</td>\n                                                    <td>\n                                                        <button\n                                                            (click)=\"showDetails(user.Photo, user.MobileNumber, user.RoleId, user.RoleName, showExtraDetails)\"\n                                                            class=\"btn custom-btn float-right\">Deatils</button>\n                                                    </td>\n                                                    <td>\n                                                        <button\n                                                            (click)=\"showCredentials(showCredentialsModal, user.UserId)\"\n                                                            class=\"btn custom-btn float-right mr-2\">Credentials</button>\n                                                        <button\n                                                            (click)=\"sfaEcomReg(sfaRegistration, user.RoleId, user.MobileNumber)\"\n                                                            class=\"btn custom-btn float-right mr-2\">SFA Ecomm\n                                                            Registration</button>\n                                                        <button\n                                                            (click)=\"viewUserAllocated(viewusertemplate, user.UserId)\"\n                                                            class=\"btn custom-btn float-right mr-2\">View User\n                                                            Acc</button>\n                                                        <button\n                                                            (click)=\"allocateNewUser(alloacteusertemplate, user.RoleId, user.UserId)\"\n                                                            class=\"btn custom-btn float-right mr-2\">Allocate New\n                                                            Acc</button>\n                                                    </td>\n                                                    <td>\n                                                        <span (click)=\"deleteUser(deleteUserModal)\" class=\"icon\"\n                                                            style=\"font-size: 1.5em; color: #ba080b;\"><i\n                                                                class=\"fa fa-trash\"></i></span>\n                                                    </td>\n                                                </tr>\n                                            </tbody>\n                                        </table>\n                                    </div>\n                                </div>\n                            </div>\n                        </tab>\n                    </ng-container>\n\n                    <!-- Secondary Seller Flag: Show \"GET SFA for Primary Account\" and \"GET SFA for Teritiary Account\" tabs -->\n                    <ng-container *ngIf=\"SECONDRY_SELLER_FLG\">\n                        <tab (selectTab)=\"onTabChange('Primary Account')\" heading=\"GET SFA for Primary Account\"\n                            id=\"tab-primary\">\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n                                    <div class=\" pb-0\">\n                                        <table class=\"table\">\n                                            <thead>\n                                                <tr>\n                                                    <th>Sr. No.</th>\n                                                    <th>User ID</th>\n                                                    <th>User First Name</th>\n                                                    <th>User Last Name</th>\n                                                    <th>Details</th>\n                                                    <th>Actions</th>\n                                                    <th></th>\n                                                </tr>\n                                            </thead>\n                                            <tbody>\n                                                <tr *ngIf=\"!sfaAccountArr || sfaAccountArr.length === 0\">\n                                                    <td colspan=\"9\" class=\"text-center\">No data available</td>\n                                                </tr>\n                                                <tr *ngFor=\"let user of sfaAccountArr; let i = index\">\n                                                    <td>{{ i + 1 }}</td>\n                                                    <td>{{ user.UserId }}</td>\n                                                    <td>{{ user.FirstName }}</td>\n                                                    <td>{{ user.LastName }}</td>\n                                                    <td>\n                                                        <button\n                                                            (click)=\"showDetails(user.Photo, user.MobileNumber, user.RoleId, user.RoleName, showExtraDetails)\"\n                                                            class=\"btn custom-btn float-right\">Deatils</button>\n                                                    </td>\n                                                    <td>\n                                                        <button\n                                                            (click)=\"showCredentials(showCredentialsModal, user.UserId)\"\n                                                            class=\"btn custom-btn float-right mr-2\">Credentials</button>\n                                                        <button\n                                                            (click)=\"sfaEcomReg(sfaRegistration, user.RoleId, user.MobileNumber)\"\n                                                            class=\"btn custom-btn float-right mr-2\">SFA Ecomm\n                                                            Registration</button>\n                                                        <button\n                                                            (click)=\"viewUserAllocated(viewusertemplate, user.UserId)\"\n                                                            class=\"btn custom-btn float-right mr-2\">View User\n                                                            Acc</button>\n                                                        <button\n                                                            (click)=\"allocateNewUser(alloacteusertemplate, user.RoleId, user.UserId)\"\n                                                            class=\"btn custom-btn float-right mr-2\">Allocate New\n                                                            Acc</button>\n                                                    </td>\n                                                    <td>\n                                                        <span (click)=\"deleteUser(deleteUserModal)\" class=\"icon\"\n                                                            style=\"font-size: 1.5em; color: #ba080b;\"><i\n                                                                class=\"fa fa-trash\"></i></span>\n                                                    </td>\n                                                </tr>\n                                            </tbody>\n                                        </table>\n                                    </div>\n                                </div>\n                            </div>\n                        </tab>\n                        <tab (selectTab)=\"onTabChange('Teritiary Account')\" heading=\"GET SFA for Teritiary Account\"\n                            id=\"tab-tertiary\">\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n                                    <div class=\" pb-0\">\n                                        <table class=\"table\">\n                                            <thead>\n                                                <tr>\n                                                    <th>Sr. No.</th>\n                                                    <th>User ID</th>\n                                                    <th>User First Name</th>\n                                                    <th>User Last Name</th>\n                                                    <th>Details</th>\n                                                    <th>Actions</th>\n                                                    <th></th>\n                                                </tr>\n                                            </thead>\n                                            <tbody>\n                                                <tr *ngIf=\"!sfaAccountArr || sfaAccountArr.length === 0\">\n                                                    <td colspan=\"9\" class=\"text-center\">No data available</td>\n                                                </tr>\n                                                <tr *ngFor=\"let user of sfaAccountArr; let i = index\">\n                                                    <td>{{ i + 1 }}</td>\n                                                    <td>{{ user.UserId }}</td>\n                                                    <td>{{ user.FirstName }}</td>\n                                                    <td>{{ user.LastName }}</td>\n                                                    <td>\n                                                        <img *ngIf=\"user.Photo\"\n                                                            [src]=\"imgURL + (user.Photo.replace('~', ''))\"\n                                                            alt=\"KYC Image\" width=\"40\" />\n                                                    </td>\n                                                    <td>{{ user.MobileNumber }}</td>\n                                                    <td>{{ user.RoleId }}</td>\n                                                    <td>{{ user.RoleName }}</td>\n                                                    <td>\n                                                        <button\n                                                            (click)=\"showCredentials(showCredentialsModal, user.UserId)\"\n                                                            class=\"btn custom-btn float-right mr-2\">Credentials</button>\n                                                        <button\n                                                            (click)=\"sfaEcomReg(sfaRegistration, user.RoleId, user.MobileNumber)\"\n                                                            class=\"btn custom-btn float-right mr-2\">SFA Ecomm\n                                                            Registration</button>\n                                                        <button\n                                                            (click)=\"viewUserAllocated(viewusertemplate, user.UserId)\"\n                                                            class=\"btn custom-btn float-right mr-2\">View User\n                                                            Acc</button>\n                                                        <button\n                                                            (click)=\"allocateNewUser(alloacteusertemplate, user.RoleId, user.UserId)\"\n                                                            class=\"btn custom-btn float-right mr-2\">Allocate New\n                                                            Acc</button>\n                                                    </td>\n                                                    <td>\n                                                        <span (click)=\"deleteUser(deleteUserModal)\" class=\"icon\"\n                                                            style=\"font-size: 1.5em; color: #ba080b;\"><i\n                                                                class=\"fa fa-trash\"></i></span>\n                                                    </td>\n                                                </tr>\n                                            </tbody>\n                                        </table>\n                                    </div>\n                                </div>\n                            </div>\n                        </tab>\n                    </ng-container>\n\n                    <!-- Tertiary Seller Flag: Show only \"GET SFA for Primary Account\" tab -->\n                    <ng-container *ngIf=\"TERITIARY_SELLER_FLG\">\n                        <tab (selectTab)=\"onTabChange('Primary Account')\" heading=\"GET SFA for Primary Account\"\n                            id=\"tab-primary\">\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n                                    <div class=\"pb-0\">\n                                        <ng-container\n                                            *ngIf=\"sfaAccountArr && sfaAccountArr.length > 0; else noAccessTertiary\">\n                                            <table class=\"table\">\n                                                <thead>\n                                                    <tr>\n                                                        <th>Sr. No.</th>\n                                                        <th>User ID</th>\n                                                        <th>User First Name</th>\n                                                        <th>User Last Name</th>\n                                                        <th>Details</th>\n                                                        <th>Actions</th>\n                                                        <th></th>\n                                                    </tr>\n                                                </thead>\n                                                <tbody>\n                                                    <tr *ngFor=\"let user of sfaAccountArr; let i = index\">\n                                                        <td>{{ i + 1 }}</td>\n                                                        <td>{{ user.UserId }}</td>\n                                                        <td>{{ user.FirstName }}</td>\n                                                        <td>{{ user.LastName }}</td>\n                                                        <td>\n                                                            <button\n                                                                (click)=\"showDetails(user.Photo, user.MobileNumber, user.RoleId, user.RoleName, showExtraDetails)\"\n                                                                class=\"px-2 py-1 action-btn\">Deatils</button>\n                                                        </td>\n                                                        <td>\n                                                            <button\n                                                                (click)=\"showCredentials(showCredentialsModal, user.UserId)\"\n                                                                class=\"btn custom-btn float-right mr-2\">Credentials</button>\n                                                            <button\n                                                                (click)=\"sfaEcomReg(sfaRegistration, user.RoleId, user.MobileNumber)\"\n                                                                class=\"px-2 py-1 action-btn\">SFA Ecomm\n                                                                Registration</button>\n                                                            <button\n                                                                (click)=\"viewUserAllocated(viewusertemplate, user.UserId)\"\n                                                                class=\"ml-2 px-2 py-1 action-btn\">View User Acc</button>\n                                                            <button\n                                                                (click)=\"allocateNewUser(alloacteusertemplate, user.RoleId, user.UserId)\"\n                                                                class=\"ml-2 px-2 py-1 action-btn\">Allocate New\n                                                                Acc</button>\n                                                        </td>\n                                                        <td>\n                                                            <span (click)=\"deleteUser(deleteUserModal)\" class=\"icon\"\n                                                                style=\"font-size: 1.5em; color: #ba080b;\"><i\n                                                                    class=\"fa fa-trash\"></i></span>\n                                                        </td>\n                                                    </tr>\n                                                </tbody>\n                                            </table>\n                                        </ng-container>\n                                        <ng-template #noAccessTertiary>\n                                            <div class=\"alert alert-warning text-center my-4\">\n                                                The current account does not have access to this data.\n                                            </div>\n                                        </ng-template>\n                                    </div>\n                                </div>\n                            </div>\n                        </tab>\n                        <tab (selectTab)=\"onTabChange('Secondary Account')\" heading=\"GET SFA for Secondary Account\"\n                            id=\"tab-secondary\">\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n                                    <div class=\"pb-0\">\n                                        <table class=\"table\">\n                                            <thead>\n                                                <tr>\n                                                    <th>Sr. No.</th>\n                                                    <th>User ID</th>\n                                                    <th>User First Name</th>\n                                                    <th>User Last Name</th>\n                                                    <th>Details</th>\n                                                    <th>Actions</th>\n                                                </tr>\n                                            </thead>\n                                            <tbody>\n                                                <tr *ngIf=\"!sfaAccountArr || sfaAccountArr.length === 0\">\n                                                    <td colspan=\"9\" class=\"text-center\">No data available</td>\n                                                </tr>\n                                                <tr *ngFor=\"let user of sfaAccountArr; let i = index\">\n                                                    <td>{{ i + 1 }}</td>\n                                                    <td>{{ user.UserId }}</td>\n                                                    <td>{{ user.FirstName }}</td>\n                                                    <td>{{ user.LastName }}</td>\n                                                    <td>\n                                                        <button\n                                                            (click)=\"showCredentials(showCredentialsModal, user.UserId)\"\n                                                            class=\"btn custom-btn float-right mr-2\">Credentials</button>\n                                                        <button\n                                                            (click)=\"sfaEcomReg(sfaRegistration, user.RoleId, user.MobileNumber)\"\n                                                            class=\"px-2 py-1 action-btn\">SFA Ecomm\n                                                            Registration</button>\n                                                        <button\n                                                            (click)=\"viewUserAllocated(viewusertemplate, user.UserId)\"\n                                                            class=\"ml-2 px-2 py-1 action-btn\">View User Acc</button>\n                                                        <button\n                                                            (click)=\"allocateNewUser(alloacteusertemplate, user.RoleId, user.UserId)\"\n                                                            class=\"ml-2 px-2 py-1 action-btn\">Allocate New\n                                                            Acc</button>\n                                                    </td>\n                                                    <td>\n                                                        <button\n                                                            (click)=\"showCredentials(showCredentialsModal, user.UserId)\"\n                                                            class=\"btn custom-btn float-right mr-2\">Credentials</button>\n                                                        <button\n                                                            (click)=\"sfaEcomReg(sfaRegistration, user.RoleId, user.MobileNumber)\"\n                                                            class=\"px-2 py-1 action-btn\">SFA Ecomm Registration</button>\n                                                        <button\n                                                            (click)=\"viewUserAllocated(viewusertemplate, user.UserId)\"\n                                                            class=\"ml-2 px-2 py-1 action-btn\">View User Acc</button>\n                                                        <button\n                                                            (click)=\"allocateNewUser(alloacteusertemplate, user.RoleId, user.UserId)\"\n                                                            class=\"ml-2 px-2 py-1 action-btn\">Allocate New Acc</button>\n                                                    </td>\n                                                    <td>\n                                                        <span (click)=\"deleteUser(deleteUserModal)\" class=\"icon\"\n                                                            style=\"font-size: 1.5em; color: #ba080b;\"><i\n                                                                class=\"fa fa-trash\"></i></span>\n                                                    </td>\n                                                </tr>\n                                            </tbody>\n                                        </table>\n                                    </div>\n                                </div>\n                            </div>\n                        </tab>\n                    </ng-container>\n\n                </tabset>\n            </div>\n        </div>\n    </div>\n\n</div>\n\n<ng-template #viewusertemplate>\n    <form>\n        <div class=\"modal-header\">\n            <h4 class=\"modal-title pull-left\">View User Allocated Acc.</h4>\n            <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n                <span aria-hidden=\"true\">&times;</span>\n            </button>\n        </div>\n\n        <div class=\"modal-body\">\n            <ng-container *ngIf=\"sfaRelationList && sfaRelationList.length > 0; else noDataAvailable\">\n                <table class=\"table\">\n                    <thead>\n                        <tr>\n                            <th>Sr. No.</th>\n                            <th>Relant Id</th>\n                            <th>B2B Id</th>\n                            <th>Ecom Store Address</th>\n                            <th>Seller Org. Address</th>\n                            <th>Buyer Org. Address</th>\n                            <th>Active status</th>\n                            <th>Action</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let rel of sfaRelationList; let i = index\">\n                            <td>{{ i + 1 }}</td>\n                            <td>{{ rel.RelationId }}</td>\n                            <td>{{ rel.B2BLinkSeqId }}</td>\n                            <td>\n                                <button (click)=\"showAddress(address, rel.EcomStoreName, rel.EcomStoreAddress)\"\n                                    class=\"btn btn-outline-info btn-sm px-3\" style=\"font-size: 10px;\"\n                                    [title]=\"rel.EcomStoreAddress || rel.EcomStoreName\">\n                                    {{ rel.EcomStoreName }}\n                                </button>\n                            </td>\n                            <td>\n                                <button (click)=\"showAddress(address, rel.SellerStoreName , rel.SellerStoreAddress)\"\n                                    class=\"btn btn-outline-info btn-sm px-3\" style=\"font-size: 10px;\"\n                                    [title]=\"rel.SellerStoreAddress || rel.SellerStoreName\">\n                                    {{ rel.SellerStoreName }}\n                                </button>\n                            </td>\n                            <td>\n                                <button (click)=\"showAddress(address, rel.BuyerStoreName, rel.BuyerStoreAddress)\"\n                                    class=\"btn btn-outline-info btn-sm px-3\" style=\"font-size: 10px;\"\n                                    [title]=\"rel.BuyerStoreAddress || rel.BuyerStoreName\">\n                                    {{ rel.BuyerStoreName }}\n                                </button>\n                            </td>\n                            <td class=\"icon\">\n                                <img *ngIf=\"rel.IsActive; else inactiveIcon\" src=\"../assets/images/active_icon.png\" />\n                                <ng-template #inactiveIcon>\n                                    <img src=\"../assets/images/inactive_icon.png\" />\n                                </ng-template>\n                            </td>\n                            <td (click)=\"editStatus(edit)\" class=\"icon\">\n                                <i class=\"fa fa-edit\"></i>\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </ng-container>\n            <ng-template #noDataAvailable>\n                <div class=\"text-center my-4\">No data available</div>\n            </ng-template>\n        </div>\n\n\n        <div class=\"modal-footer\">\n            <button (click)=\"modalRef.hide()\" type=\"button\" class=\"btn btn-secondary\">Close</button>\n        </div>\n    </form>\n</ng-template>\n\n<ng-template #address>\n    <form>\n        <div class=\"modal-header\">\n            <h4 class=\"modal-title pull-left\">Store Address</h4>\n            <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\"\n                (click)=\"closeSmallModal(viewusertemplate)\">\n                <span aria-hidden=\"true\">&times;</span>\n            </button>\n        </div>\n\n        <div class=\"modal-body\">\n\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <p>Store Name</p>\n                </div>\n                <div class=\"col-md-6\">\n                    {{selectedStoreName}}\n                </div>\n            </div>\n\n            <div class=\"row mt-1\">\n                <div class=\"col-md-6\">\n                    <p>Store Address</p>\n                </div>\n                <div class=\"col-md-6\">\n                    {{selectedStoreAddress}}\n                </div>\n            </div>\n        </div>\n\n        <div class=\"modal-footer\">\n            <button (click)=\"closeSmallModal(viewusertemplate)\" type=\"button\" class=\"btn btn-secondary\">Close</button>\n        </div>\n    </form>\n</ng-template>\n\n<ng-template #edit>\n    <form>\n        <div class=\"modal-header\">\n            <h4 class=\"modal-title pull-left\">Update Active Status</h4>\n            <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\"\n                (click)=\"closeSmallModal(viewusertemplate)\">\n                <span aria-hidden=\"true\">&times;</span>\n            </button>\n        </div>\n        <div class=\"modal-body\">\n            <div class=\"form-group\">\n                <label for=\"activeStatus\">Active Status</label>\n                <select id=\"activeStatus\" class=\"form-control\">\n                    <option value=\"\" selected disabled>Select status</option>\n                    <option value=\"yes\">Yes</option>\n                    <option value=\"no\">No</option>\n                </select>\n            </div>\n        </div>\n\n\n        <div class=\"modal-footer\">\n            <button (click)=\"closeSmallModal(viewusertemplate)\" type=\"button\" class=\"btn btn-secondary\">Save</button>\n            <button (click)=\"closeSmallModal(viewusertemplate)\" type=\"button\" class=\"btn btn-secondary\">Close</button>\n        </div>\n    </form>\n</ng-template>\n\n<ng-template #alloacteusertemplate>\n    <form>\n        <div class=\"modal-header\">\n            <h4 class=\"modal-title pull-left\">Allocate New Account</h4>\n            <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n                <span aria-hidden=\"true\">&times;</span>\n            </button>\n        </div>\n        <div class=\"modal-body\">\n\n            <div class=\"row\">\n                <div class=\"col-md-3\">\n                    <div class=\"form-group\">\n                        <label for=\"dropdown1\">Account Category For</label>\n                        <select (click)=\"setAccCategory($event)\" id=\"dropdown1\" class=\"form-control\">\n                            <option value=\"\" selected disabled>Select option</option>\n\n                            <option *ngIf=\"PRIMARY_SELLER_FLG\" value=\"secondary\">Secondary</option>\n\n                            <option *ngIf=\"SECONDRY_SELLER_FLG\" value=\"primary\">Primary</option>\n                            <option *ngIf=\"SECONDRY_SELLER_FLG\" value=\"teritiary\">Teritiary</option>\n\n                            <option *ngIf=\"TERITIARY_SELLER_FLG\" value=\"primary\">Primary</option>\n                            <option *ngIf=\"TERITIARY_SELLER_FLG\" value=\"secondary\">Secondary</option>\n                        </select>\n                    </div>\n                </div>\n                <div class=\"col-md-3\">\n                    <div class=\"form-group\">\n                        <label>Country</label>\n                        <select class=\"form-control\" (change)=\"changeCountry($event)\">\n                            <option value=\"\">Select</option>\n                            <option *ngFor=\"let country of countryList\" [value]=\"country.CNTRY_ID\">{{country.CNTRY_NM}}\n                            </option>\n                        </select>\n                    </div>\n                </div>\n\n                <div class=\"col-md-3\">\n                    <div class=\"form-group\">\n                        <label>State</label>\n                        <select class=\"form-control\" (change)=\"changeState($event)\">\n                            <option value=\"\">Select</option>\n                            <option *ngFor=\"let state of stateList\" [value]=\"state.STATE_ID\">{{state.STATE_NM}}</option>\n                        </select>\n                    </div>\n                </div>\n                <div class=\"col-md-3\">\n                    <div class=\"form-group\">\n                        <label>City</label>\n                        <select class=\"form-control\" (change)=\"changeCity($event)\">\n                            <option selected value=\"\">Select</option>\n                            <option *ngFor=\"let city of cityList\" [value]=\"city.CITY_ID\">{{city.CITY_NM}}</option>\n                        </select>\n                    </div>\n                </div>\n\n\n                <div class=\"col-md-12 bottom-btn mt-1 mb-3\">\n                    <button (click)=\"getAccount()\" type=\"button\" class=\"btn custom-btn float-right\">Get Account</button>\n                </div>\n\n            </div>\n\n            <div *ngIf=\"showAccList && accountForSFA && accountForSFA.length > 0\" class=\"mt-3\">\n                <table class=\"table\">\n                    <thead>\n                        <tr>\n                            <th>Sr. No.</th>\n                            <th>B2B Id</th>\n                            <th>Subacc Id</th>\n                            <th>Store Id</th>\n                            <th>Name</th>\n                            <th>Address Detail</th>\n                            <th>Category</th>\n                            <th>Action</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let acc of accountForSFA; let i = index\">\n                            <td>{{ i + 1 }}</td>\n                            <td>{{ acc.LinkId }}</td>\n                            <td>{{ acc.SubacctId }}</td>\n                            <td>{{ acc.StoreId }}</td>\n                            <td>{{ acc.OfficeName }}</td>\n                            <td>\n                                <button (click)=\"openAccAddress(acc.OfficeName, acc.SubacctId, acc.StoreId, bigaddress)\"\n                                    class=\"btn btn-outline-info btn-sm px-3\" [title]=\"acc.Address || 'No address'\">\n                                    Address\n                                </button>\n                            </td>\n                            <td>{{ acc.CategoryName }}</td>\n                            <td>\n                                <button (click)=\"addSfaRelationModel(acc.LinkId, addStore)\"\n                                    class=\"btn btn-outline-info btn-sm px-3\">Add</button>\n                            </td>\n                        </tr>\n                        <tr *ngIf=\"accountForSFA.length === 0\">\n                            <td colspan=\"8\" class=\"text-center\">No data available</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n        </div>\n\n\n        <div class=\"modal-footer\">\n            <button (click)=\"modalRef.hide()\" type=\"button\" class=\"btn btn-secondary\">Close</button>\n        </div>\n    </form>\n</ng-template>\n\n<ng-template #sfaRegistration>\n    <form>\n        <div class=\"modal-header\">\n            <h4 class=\"modal-title pull-left\">SFA Ecomm Registration</h4>\n            <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"sfaRegRef.hide()\">\n                <span aria-hidden=\"true\">&times;</span>\n            </button>\n        </div>\n        <div class=\"modal-body\">\n            <div class=\"form-group\">\n                <label for=\"activeStatus\">E-Commerce Stores</label>\n                <select (change)=\"onSelectStore($event)\" id=\"activeStatus\" class=\"form-control\">\n                    <option value=\"\" selected disabled>Select store</option>\n                    <option *ngFor=\"let store of ecomStoreList\" [value]=\"store.StoreId\">\n                        {{ store.OfficeName }}\n                    </option>\n                </select>\n            </div>\n        </div>\n\n\n        <div class=\"modal-footer\">\n            <button (click)=\"onSfaRegistration()\" type=\"button\" class=\"btn btn-secondary\">SFA Registration for\n                Store</button>\n        </div>\n    </form>\n</ng-template>\n\n<ng-template #addStore>\n    <form>\n        <div class=\"modal-header\">\n            <h4 class=\"modal-title pull-left\">Add Store</h4>\n            <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"addStoreRef.hide()\">\n                <span aria-hidden=\"true\">&times;</span>\n            </button>\n        </div>\n\n        <div class=\"modal-body\">\n            <div class=\"form-group\">\n                <label for=\"activeStatus\">E-Commerce Stores</label>\n                <select (change)=\"onEcomSelectStore($event)\" id=\"activeStatus\" class=\"form-control\">\n                    <option value=\"\" selected disabled>Select store</option>\n                    <option *ngFor=\"let store of ecomStoreList\" [value]=\"store.StoreId\">\n                        {{ store.OfficeName }}\n                    </option>\n                </select>\n            </div>\n        </div>\n\n        <div class=\"modal-footer\">\n            <button (click)=\"addSfaRelation()\" type=\"button\" class=\"btn btn-secondary\">Add</button>\n        </div>\n    </form>\n</ng-template>\n\n<ng-template #showExtraDetails>\n    <form>\n        <div class=\"modal-header\">\n            <h4 class=\"modal-title pull-left\">Details</h4>\n            <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"detailsRef.hide()\">\n                <span aria-hidden=\"true\">&times;</span>\n            </button>\n        </div>\n\n        <div class=\"modal-body\">\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <p>Photo</p>\n                </div>\n                <div class=\"col-md-6\">\n                    <img *ngIf=\"details.Photo\" [src]=\"imgURL + (details.Photo.replace('~', ''))\" alt=\"KYC Image\"\n                        width=\"40\" />\n                </div>\n            </div>\n            <div class=\"row mt-1\">\n                <div class=\"col-md-6\">\n                    <p>Mobile</p>\n                </div>\n                <div class=\"col-md-6\">\n                    {{ details.mobile }}\n                </div>\n            </div>\n            <div class=\"row mt-1\">\n                <div class=\"col-md-6\">\n                    <p>Role Id</p>\n                </div>\n                <div class=\"col-md-6\">\n                    {{ details.roleId }}\n                </div>\n            </div>\n            <div class=\"row mt-1\">\n                <div class=\"col-md-6\">\n                    <p>Role Name</p>\n                </div>\n                <div class=\"col-md-6\">\n                    {{ details.roleName }}\n                </div>\n            </div>\n        </div>\n\n        <div class=\"modal-footer\">\n            <button (click)=\"detailsRef.hide()\" type=\"button\" class=\"btn btn-secondary\">Close</button>\n        </div>\n    </form>\n</ng-template>\n\n<ng-template #deleteUserModal>\n    <form>\n        <div class=\"modal-header\">\n            <h4 class=\"modal-title pull-left\">Delete User</h4>\n            <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"deleteUserRef.hide()\">\n                <span aria-hidden=\"true\">&times;</span>\n            </button>\n        </div>\n\n        <div class=\"modal-body\">\n            <div class=\"form-group\">\n                <label for=\"activeStatus\">Delete SFA User Permanently</label>\n                <select (change)=\"onEcomSelectStore($event)\" id=\"activeStatus\" class=\"form-control\">\n                    <option value=\"\" selected disabled>Select option</option>\n                    <option value=\"yes\">Yes</option>\n                    <option value=\"no\">No</option>\n                </select>\n            </div>\n        </div>\n\n        <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-secondary\">Delete</button>\n        </div>\n    </form>\n</ng-template>\n\n<ng-template #showCredentialsModal>\n    <form>\n        <div class=\"modal-header\">\n            <h4 class=\"modal-title pull-left\">Credentials</h4>\n            <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"showcredentialsRef.hide()\">\n                <span aria-hidden=\"true\">&times;</span>\n            </button>\n        </div>\n\n        <div class=\"modal-body\">\n            <div class=\"row mt-1\">\n                <div class=\"col-md-6\">\n                    <p>Mobile</p>\n                </div>\n                <div class=\"col-md-6\">\n                    {{credentials.Reg_Mobile}}\n                </div>\n            </div>\n            <div class=\"row mt-1\">\n                <div class=\"col-md-6\">\n                    <p>Password</p>\n                </div>\n                <div class=\"col-md-6\">\n                    {{credentials.App_Password}}\n                </div>\n            </div>\n        </div>\n\n        <div class=\"modal-footer\">\n            <button (click)=\"showcredentialsRef.hide()\" type=\"button\" class=\"btn btn-secondary\">Close</button>\n        </div>\n    </form>\n</ng-template>\n\n<ng-template #bigaddress>\n    <form>\n        <div class=\"modal-header\">\n            <h4 class=\"modal-title pull-left\">Store Address</h4>\n            <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"addressRef.hide()\">\n                <span aria-hidden=\"true\">&times;</span>\n            </button>\n        </div>\n\n        <div class=\"modal-body\">\n\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <p>Store Name</p>\n                </div>\n                <div class=\"col-md-6\">\n                    {{storeAddress?.storeName}}\n                </div>\n            </div>\n\n            <!-- <div class=\"row mt-1\">\n                <div class=\"col-md-6\">\n                    <p>Country</p>\n                </div>\n                <div class=\"col-md-6\">\n                    {{storeAddress?.Country}}\n                </div>\n            </div>\n\n            <div class=\"row mt-1\">\n                <div class=\"col-md-6\">\n                    <p>State</p>\n                </div>\n                <div class=\"col-md-6\">\n                    {{storeAddress?.State}}\n                </div>\n            </div>\n\n            <div class=\"row mt-1\">\n                <div class=\"col-md-6\">\n                    <p>City</p>\n                </div>\n                <div class=\"col-md-6\">\n                    {{storeAddress?.City}}\n                </div>\n            </div> -->\n\n            <div class=\"row mt-1\">\n                <div class=\"col-md-6\">\n                    <p>Pincode</p>\n                </div>\n                <div class=\"col-md-6\">\n                    {{storeAddress?.Pincode}}\n                </div>\n            </div>\n\n            <div class=\"row mt-1\">\n                <div class=\"col-md-6\">\n                    <p>Store Address</p>\n                </div>\n                <div class=\"col-md-6\">\n                    {{storeAddress?.Address}}\n                </div>\n            </div>\n        </div>\n\n        <div class=\"modal-footer\">\n            <button (click)=\"addressRef.hide()\" type=\"button\" class=\"btn btn-secondary\">Close</button>\n        </div>\n    </form>\n</ng-template>", styles: ["i.fa.fa-edit {\r\n    font-size: 25px;\r\n    color: #bd2130;\r\n}\r\n\r\n.action-btn {\r\n    font-size: 0.6rem; /* Equivalent to text-sm */\r\n    background-color: #10b981; /* Equivalent to bg-green-500 */\r\n    color: #ffffff; /* Equivalent to text-white */\r\n    border: none;\r\n}\r\n\r\n.custom-btn,\r\nbutton.custom-btn {\r\n    background: #ba080b !important;\r\n    color: #fff;\r\n    border: 0;\r\n    transition: 1s all;\r\n    font-size: 12px;\r\n    min-height: 28px;\r\n}\r\n\r\n.flex-col label {\r\n    font-size: 1.1rem; /* Adjust label size as needed */\r\n    font-weight: 500;\r\n}\r\n\r\n.tabset-bg-white {\r\n    background-color: #fff;\r\n    border-radius: 6px;\r\n    padding: 10px;\r\n}\r\n\r\n.card-body.no_data_available {\r\n    text-align: center;\r\n    color: #bd2130;\r\n    img {\r\n        display: block;\r\n        text-align: center;\r\n        margin: 0 auto 5px;\r\n        max-width: 30px;\r\n    }\r\n}\r\n.card {\r\n    padding: 0 20px 0;\r\n}"] }]
    }], function () { return [{ type: i1.ApiService }, { type: i2.BsModalService }, { type: i3.ToastrService }, { type: i4.CommonService }, { type: i5.FormBuilder }]; }, { countryEvent: [{
            type: Output
        }], stateEvent: [{
            type: Output
        }], cityEvent: [{
            type: Output
        }] }); })();
//# sourceMappingURL=business-account-allocation.component.js.map