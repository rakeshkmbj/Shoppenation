import { Component } from '@angular/core';
import { Paginator } from '../../_models/pagination';
import * as i0 from "@angular/core";
import * as i1 from "ngx-bootstrap/modal";
import * as i2 from "@angular/common";
import * as i3 from "ngx-bootstrap/tabs";
import * as i4 from "ngx-spinner";
function CommunincationDeskComponent_div_16_tr_36_span_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵelement(1, "img", 36);
    i0.ɵɵelementEnd();
} }
function CommunincationDeskComponent_div_16_tr_36_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 37);
} }
function CommunincationDeskComponent_div_16_tr_36_img_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 36);
} }
function CommunincationDeskComponent_div_16_tr_36_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 37);
} }
function CommunincationDeskComponent_div_16_tr_36_span_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 38);
    i0.ɵɵtext(1, "Yes");
    i0.ɵɵelementEnd();
} }
function CommunincationDeskComponent_div_16_tr_36_span_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 39);
    i0.ɵɵtext(1, "No");
    i0.ɵɵelementEnd();
} }
function CommunincationDeskComponent_div_16_tr_36_span_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 38);
    i0.ɵɵtext(1, "Yes");
    i0.ɵɵelementEnd();
} }
function CommunincationDeskComponent_div_16_tr_36_span_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 39);
    i0.ɵɵtext(1, "No");
    i0.ɵɵelementEnd();
} }
function CommunincationDeskComponent_div_16_tr_36_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr")(1, "td", 25);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td", 25);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "td", 27);
    i0.ɵɵtemplate(6, CommunincationDeskComponent_div_16_tr_36_span_6_Template, 2, 0, "span", 28);
    i0.ɵɵtemplate(7, CommunincationDeskComponent_div_16_tr_36_ng_template_7_Template, 1, 0, "ng-template", null, 29, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "td", 25);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "td", 25);
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "td")(14, "button", 30);
    i0.ɵɵtext(15, "Details");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "td", 27);
    i0.ɵɵtemplate(17, CommunincationDeskComponent_div_16_tr_36_img_17_Template, 1, 0, "img", 31);
    i0.ɵɵtemplate(18, CommunincationDeskComponent_div_16_tr_36_ng_template_18_Template, 1, 0, "ng-template", null, 32, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "td", 25);
    i0.ɵɵtemplate(21, CommunincationDeskComponent_div_16_tr_36_span_21_Template, 2, 0, "span", 33);
    i0.ɵɵtemplate(22, CommunincationDeskComponent_div_16_tr_36_span_22_Template, 2, 0, "span", 34);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "td", 25);
    i0.ɵɵtemplate(24, CommunincationDeskComponent_div_16_tr_36_span_24_Template, 2, 0, "span", 33);
    i0.ɵɵtemplate(25, CommunincationDeskComponent_div_16_tr_36_span_25_Template, 2, 0, "span", 34);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "td")(27, "button", 35);
    i0.ɵɵlistener("click", function CommunincationDeskComponent_div_16_tr_36_Template_button_click_27_listener() { const restoredCtx = i0.ɵɵrestoreView(_r19); const post_r6 = restoredCtx.$implicit; const ctx_r18 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r18.openResponceCentre(post_r6)); });
    i0.ɵɵtext(28, " Response Centre ");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const post_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    const _r9 = i0.ɵɵreference(8);
    const _r12 = i0.ɵɵreference(19);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i_r7 + 1);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(post_r6.postId);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", post_r6.active)("ngIfElse", _r9);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(post_r6.category);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(post_r6.domainId);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", post_r6.originator)("ngIfElse", _r12);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", post_r6.isPublic);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !post_r6.isPublic);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", post_r6.inPerson);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !post_r6.inPerson);
} }
function CommunincationDeskComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 17)(1, "div", 18)(2, "div", 19)(3, "span");
    i0.ɵɵtext(4, "My Org. Post Responces");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span", 20)(6, "strong");
    i0.ɵɵtext(7, "Storecode:");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(8, " 3254386586 ");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(9, "div", 21)(10, "div", 22)(11, "div", 23)(12, "table", 24)(13, "thead")(14, "tr")(15, "th", 25);
    i0.ɵɵtext(16, "S#");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "th", 25);
    i0.ɵɵtext(18, "Post ID");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "th", 25);
    i0.ɵɵtext(20, "Active");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "th", 25);
    i0.ɵɵtext(22, "Category");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "th", 25);
    i0.ɵɵtext(24, "Domain ID");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "th", 25);
    i0.ɵɵtext(26, "Details");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "th", 25);
    i0.ɵɵtext(28, "Originator");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(29, "th", 25);
    i0.ɵɵtext(30, "Public");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(31, "th", 25);
    i0.ɵɵtext(32, "In-Person");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(33, "th", 25);
    i0.ɵɵtext(34, "Post Management");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(35, "tbody");
    i0.ɵɵtemplate(36, CommunincationDeskComponent_div_16_tr_36_Template, 29, 12, "tr", 26);
    i0.ɵɵelementEnd()()()()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(36);
    i0.ɵɵproperty("ngForOf", ctx_r0.postList);
} }
function CommunincationDeskComponent_div_17_tr_32_span_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵelement(1, "img", 49);
    i0.ɵɵelementEnd();
} }
function CommunincationDeskComponent_div_17_tr_32_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 50);
} }
function CommunincationDeskComponent_div_17_tr_32_span_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵelement(1, "img", 51);
    i0.ɵɵelementEnd();
} }
function CommunincationDeskComponent_div_17_tr_32_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 52);
} }
function CommunincationDeskComponent_div_17_tr_32_Template(rf, ctx) { if (rf & 1) {
    const _r30 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr")(1, "td");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td");
    i0.ɵɵtext(4, "677878");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "td");
    i0.ɵɵtext(6, "2345675678");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "td");
    i0.ɵɵtext(8, "06/08/2025");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "td");
    i0.ɵɵtext(10, "10:15 PM");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "td", 27);
    i0.ɵɵtemplate(12, CommunincationDeskComponent_div_17_tr_32_span_12_Template, 2, 0, "span", 28);
    i0.ɵɵtemplate(13, CommunincationDeskComponent_div_17_tr_32_ng_template_13_Template, 1, 0, "ng-template", null, 40, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "td", 27);
    i0.ɵɵtemplate(16, CommunincationDeskComponent_div_17_tr_32_span_16_Template, 2, 0, "span", 28);
    i0.ɵɵtemplate(17, CommunincationDeskComponent_div_17_tr_32_ng_template_17_Template, 1, 0, "ng-template", null, 41, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "td", 42)(20, "span", 43);
    i0.ɵɵlistener("click", function CommunincationDeskComponent_div_17_tr_32_Template_span_click_20_listener() { i0.ɵɵrestoreView(_r30); const ctx_r29 = i0.ɵɵnextContext(2); const _r3 = i0.ɵɵreference(27); return i0.ɵɵresetView(ctx_r29.openModal(_r3)); });
    i0.ɵɵelement(21, "i", 44);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "span", 45);
    i0.ɵɵelement(23, "i", 46);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "span", 47);
    i0.ɵɵelement(25, "i", 48);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const post_r21 = ctx.$implicit;
    const i_r22 = ctx.index;
    const _r24 = i0.ɵɵreference(14);
    const _r27 = i0.ɵɵreference(18);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i_r22 + 1);
    i0.ɵɵadvance(10);
    i0.ɵɵproperty("ngIf", post_r21.sentPublic)("ngIfElse", _r24);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", post_r21.sentInPerson)("ngIfElse", _r27);
} }
function CommunincationDeskComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 17)(1, "div", 18)(2, "div", 19)(3, "span");
    i0.ɵɵtext(4, "Response Centre");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span", 20)(6, "strong");
    i0.ɵɵtext(7, "Post ID:");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(8, " P7252 ");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(9, "div", 21)(10, "div", 22)(11, "div", 23)(12, "table", 24)(13, "thead")(14, "tr")(15, "th");
    i0.ɵɵtext(16, "S#");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "th");
    i0.ɵɵtext(18, "Resp. ID");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "th");
    i0.ɵɵtext(20, "Org. ID");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "th");
    i0.ɵɵtext(22, "Date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "th");
    i0.ɵɵtext(24, "Time");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "th");
    i0.ɵɵtext(26, "Public");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "th");
    i0.ɵɵtext(28, "In-Person");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(29, "th");
    i0.ɵɵtext(30, "Action");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(31, "tbody");
    i0.ɵɵtemplate(32, CommunincationDeskComponent_div_17_tr_32_Template, 26, 5, "tr", 26);
    i0.ɵɵelementEnd()()()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(32);
    i0.ɵɵproperty("ngForOf", ctx_r1.postList);
} }
function CommunincationDeskComponent_div_19_tr_36_span_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵelement(1, "img", 55);
    i0.ɵɵelementEnd();
} }
function CommunincationDeskComponent_div_19_tr_36_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 56);
} }
function CommunincationDeskComponent_div_19_tr_36_span_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵelement(1, "img", 49);
    i0.ɵɵelementEnd();
} }
function CommunincationDeskComponent_div_19_tr_36_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 50);
} }
function CommunincationDeskComponent_div_19_tr_36_span_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵelement(1, "img", 51);
    i0.ɵɵelementEnd();
} }
function CommunincationDeskComponent_div_19_tr_36_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 52);
} }
function CommunincationDeskComponent_div_19_tr_36_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 25);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td", 25);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "td", 27);
    i0.ɵɵtemplate(6, CommunincationDeskComponent_div_19_tr_36_span_6_Template, 2, 0, "span", 28);
    i0.ɵɵtemplate(7, CommunincationDeskComponent_div_19_tr_36_ng_template_7_Template, 1, 0, "ng-template", null, 29, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "td", 25);
    i0.ɵɵtext(10, "2345675678");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "td", 27);
    i0.ɵɵtemplate(12, CommunincationDeskComponent_div_19_tr_36_span_12_Template, 2, 0, "span", 28);
    i0.ɵɵtemplate(13, CommunincationDeskComponent_div_19_tr_36_ng_template_13_Template, 1, 0, "ng-template", null, 40, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "td", 27);
    i0.ɵɵtemplate(16, CommunincationDeskComponent_div_19_tr_36_span_16_Template, 2, 0, "span", 28);
    i0.ɵɵtemplate(17, CommunincationDeskComponent_div_19_tr_36_ng_template_17_Template, 1, 0, "ng-template", null, 41, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "td")(20, "button", 30);
    i0.ɵɵtext(21, "Details");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(22, "td", 25);
    i0.ɵɵtext(23, "677878");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "td")(25, "button", 53);
    i0.ɵɵtext(26, "Resp. Text");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(27, "td", 42)(28, "span", 54);
    i0.ɵɵelement(29, "i", 44);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "span", 45);
    i0.ɵɵelement(31, "i", 46);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(32, "span", 47);
    i0.ɵɵelement(33, "i", 48);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const post_r32 = ctx.$implicit;
    const i_r33 = ctx.index;
    const _r35 = i0.ɵɵreference(8);
    const _r38 = i0.ɵɵreference(14);
    const _r41 = i0.ɵɵreference(18);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i_r33 + 1);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(post_r32.postId);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", post_r32.active)("ngIfElse", _r35);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngIf", post_r32.sentPublic)("ngIfElse", _r38);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", post_r32.sentInPerson)("ngIfElse", _r41);
} }
function CommunincationDeskComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 17)(1, "div", 18)(2, "div", 19)(3, "span");
    i0.ɵɵtext(4, "Responce to other Org. Post");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span", 20)(6, "strong");
    i0.ɵɵtext(7, "Storecode:");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(8, " 3254386586 ");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(9, "div", 21)(10, "div", 22)(11, "div", 23)(12, "table", 24)(13, "thead")(14, "tr")(15, "th", 25);
    i0.ɵɵtext(16, "S#");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "th", 25);
    i0.ɵɵtext(18, "Post ID");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "th", 25);
    i0.ɵɵtext(20, "Active");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "th", 25);
    i0.ɵɵtext(22, "To Originator Org. ID");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "th", 25);
    i0.ɵɵtext(24, "Sent Public");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "th", 25);
    i0.ɵɵtext(26, "Sent In-Person");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "th", 25);
    i0.ɵɵtext(28, "Details");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(29, "th", 25);
    i0.ɵɵtext(30, "Resp. ID");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(31, "th", 25);
    i0.ɵɵtext(32, "Resp. Text");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(33, "th", 25);
    i0.ɵɵtext(34, "Action");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(35, "tbody");
    i0.ɵɵtemplate(36, CommunincationDeskComponent_div_19_tr_36_Template, 34, 8, "tr", 26);
    i0.ɵɵelementEnd()()()()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(36);
    i0.ɵɵproperty("ngForOf", ctx_r2.postList);
} }
function CommunincationDeskComponent_ng_template_26_Template(rf, ctx) { if (rf & 1) {
    const _r44 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 57)(1, "h4", 58);
    i0.ɵɵtext(2, "Profile");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 59);
    i0.ɵɵlistener("click", function CommunincationDeskComponent_ng_template_26_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r44); const ctx_r43 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r43.modalRef.hide()); });
    i0.ɵɵelementStart(4, "span", 60);
    i0.ɵɵtext(5, "\u00D7");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(6, "div", 61)(7, "tabset", 62)(8, "tab", 63)(9, "div", 64)(10, "div", 65)(11, "div", 66);
    i0.ɵɵelement(12, "img", 67);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "div", 68)(14, "p", 69);
    i0.ɵɵtext(15, "Rakesh Arora");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "p", 70);
    i0.ɵɵtext(17, "Promoter");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "p", 71)(19, "strong");
    i0.ɵɵtext(20, "Verified:");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(21, " \u2705");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(22, "h4");
    i0.ɵɵtext(23, "Moon Light Shades Pvt. Ltd");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "p")(25, "strong");
    i0.ɵɵtext(26, "Category: ");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(27, "Manufacturers");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "p")(29, "strong");
    i0.ɵɵtext(30, "Industry: ");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(31, "Consumer Appliances");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(32, "p")(33, "strong");
    i0.ɵɵtext(34, "Store Code: ");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(35, "1100012100");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(36, "p")(37, "strong");
    i0.ɵɵtext(38, "Employees: ");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(39, "200");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(40, "p")(41, "strong");
    i0.ɵɵtext(42, "Available on Market: ");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(43, "\u2705");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(44, "tab", 72)(45, "div", 73)(46, "div");
    i0.ɵɵelement(47, "img", 74);
    i0.ɵɵelementStart(48, "p");
    i0.ɵɵtext(49, "Rakesh Arora");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(50, "small");
    i0.ɵɵtext(51, "about");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(52, "div");
    i0.ɵɵelement(53, "img", 74);
    i0.ɵɵelementStart(54, "p");
    i0.ɵɵtext(55, "Rakesh Arora");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(56, "small");
    i0.ɵɵtext(57, "about");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(58, "div");
    i0.ɵɵelement(59, "img", 74);
    i0.ɵɵelementStart(60, "p");
    i0.ɵɵtext(61, "Rakesh Arora");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(62, "small");
    i0.ɵɵtext(63, "about");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(64, "div");
    i0.ɵɵelement(65, "img", 74);
    i0.ɵɵelementStart(66, "p");
    i0.ɵɵtext(67, "Rakesh Arora");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(68, "small");
    i0.ɵɵtext(69, "about");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(70, "tab", 75)(71, "table", 24)(72, "thead")(73, "tr")(74, "th");
    i0.ɵɵtext(75, "S#");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(76, "th");
    i0.ɵɵtext(77, "Code");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(78, "th");
    i0.ɵɵtext(79, "Product / Service");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(80, "th");
    i0.ɵɵtext(81, "Image");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(82, "th");
    i0.ɵɵtext(83, "Action");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(84, "tbody")(85, "tr")(86, "td");
    i0.ɵɵtext(87, "01");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(88, "td");
    i0.ɵɵtext(89, "2567");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(90, "td");
    i0.ɵɵtext(91, "Leather Jacket Manufacturing");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(92, "td");
    i0.ɵɵelement(93, "img", 76);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(94, "td")(95, "button", 30);
    i0.ɵɵtext(96, "Detail");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(97, "tr")(98, "td");
    i0.ɵɵtext(99, "02");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(100, "td");
    i0.ɵɵtext(101, "790");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(102, "td");
    i0.ɵɵtext(103, "Leather Bags Manufacturing");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(104, "td");
    i0.ɵɵelement(105, "img", 77);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(106, "td")(107, "button", 30);
    i0.ɵɵtext(108, "Detail");
    i0.ɵɵelementEnd()()()()()();
    i0.ɵɵelementStart(109, "tab", 78)(110, "div", 73)(111, "div");
    i0.ɵɵelement(112, "img", 79)(113, "br");
    i0.ɵɵelementStart(114, "p");
    i0.ɵɵtext(115, "1890 Our Store");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(116, "div");
    i0.ɵɵelement(117, "img", 80)(118, "br");
    i0.ɵɵelementStart(119, "p");
    i0.ɵɵtext(120, "890 Back office Reception");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(121, "tab", 81)(122, "div", 73)(123, "div");
    i0.ɵɵelement(124, "img", 82);
    i0.ɵɵelementStart(125, "p")(126, "strong");
    i0.ɵɵtext(127, "LML Exports");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(128, "p");
    i0.ɵɵtext(129, "Excellent Job done");
    i0.ɵɵelement(130, "br");
    i0.ɵɵtext(131, "Ravi Kumar");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(132, "div");
    i0.ɵɵelement(133, "img", 82);
    i0.ɵɵelementStart(134, "p")(135, "strong");
    i0.ɵɵtext(136, "Finolex Industries");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(137, "p");
    i0.ɵɵtext(138, "I am satisfied with jobwork");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(139, "tab", 83)(140, "div")(141, "p")(142, "strong");
    i0.ɵɵtext(143, "India: ");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(144, "UP");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(145, "p")(146, "strong");
    i0.ɵɵtext(147, "India: ");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(148, "Maharashtra");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(149, "p")(150, "strong");
    i0.ɵɵtext(151, "India: ");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(152, "Punjab");
    i0.ɵɵelementEnd()()()()();
} }
export class CommunincationDeskComponent {
    constructor(modalService) {
        this.modalService = modalService;
        this.showResponceCentre = false;
        this.categoryList = ['Technology', 'Health', 'Education', 'Entertainment'];
        this.newPost = {
            category: '',
            title: '',
            template: 'Text',
            createdDate: '',
            detail: '',
            file: null
        };
        this.filePreviewUrl = null;
        this.isImageFile = true;
        this.postList = [
            {
                postId: 'P001',
                active: true,
                category: 'Technology',
                domainId: 'D001',
                createdDate: new Date('2025-08-01'),
                approved: true,
                rejected: false
            },
            {
                postId: 'P002',
                active: false,
                category: 'Health',
                domainId: 'D002',
                createdDate: new Date('2025-07-25'),
                approved: false,
                rejected: true
            },
            {
                postId: 'P003',
                active: true,
                category: 'Education',
                domainId: 'D003',
                createdDate: new Date('2025-07-30'),
                approved: true,
                rejected: false
            },
            {
                postId: 'P003',
                active: true,
                category: 'Education',
                domainId: 'D003',
                createdDate: new Date('2025-07-30'),
                approved: true,
                rejected: false
            },
            {
                postId: 'P003',
                active: true,
                category: 'Education',
                domainId: 'D003',
                createdDate: new Date('2025-07-30'),
                approved: true,
                rejected: false
            },
            {
                postId: 'P003',
                active: true,
                category: 'Education',
                domainId: 'D003',
                createdDate: new Date('2025-07-30'),
                approved: true,
                rejected: false
            }
        ];
    }
    ngOnInit() {
        this.postsPaginator = new Paginator(this.postList, 10);
    }
    openModal(template) {
        if (this.childModalRef) {
            this.childModalRef.hide();
        }
        this.modalRef = this.modalService.show(template, Object.assign({}, { class: 'modal-lg' }));
    }
    openChildModal(template, parentTemplate) {
        // Close parent modal first
        if (this.modalRef) {
            this.modalRef.hide();
        }
        // Open child modal
        this.childModalRef = this.modalService.show(template, { class: 'modal-lg' });
        // When child modal closes, reopen parent modal
        const subscription = this.modalService.onHide.subscribe((reason) => {
            if (this.childModalRef && reason === this.childModalRef.id) {
                this.openModal(parentTemplate); // reopen parent
                subscription.unsubscribe(); // cleanup
            }
        });
    }
    onFileChange(event) {
        const file = event.target.files[0];
        this.newPost.file = file;
        if (file) {
            this.isImageFile = file.type.startsWith('image/');
            const reader = new FileReader();
            reader.onload = () => this.filePreviewUrl = reader.result;
            reader.readAsDataURL(file);
        }
    }
    saveAndPublish() {
        console.log('Post Data:', this.newPost);
        // API call logic
    }
    openResponceCentre(post) {
        this.showResponceCentre = !this.showResponceCentre;
    }
}
CommunincationDeskComponent.ɵfac = function CommunincationDeskComponent_Factory(t) { return new (t || CommunincationDeskComponent)(i0.ɵɵdirectiveInject(i1.BsModalService)); };
CommunincationDeskComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CommunincationDeskComponent, selectors: [["app-communincation-desk"]], decls: 28, vars: 3, consts: [[1, "content"], [1, "heading-title"], [1, "card"], [1, "card-body", "pl-0", "pr-0"], [1, "row", "topcontent", "mt-3"], [1, "col-md-12"], ["heading", "Post Responce Centre", "id", "tab11"], [1, "col-md-12", "mb-3", "pl-0"], [1, "sub-desk-title"], ["heading", "My Org. Post Responces", "id", "tab111"], ["class", "card exiting-office-table orderStatus p-0 mt-2", 4, "ngIf"], ["heading", "Responce to other Org. Post", "id", "tab112"], ["heading", "Message Centre", "id", "tab12"], ["heading", "My Post Engagement Effectiveness", "id", "tab13"], ["heading", "Turbo Push Effectiveness", "id", "tab14"], ["template", "<img src='assets/images/icons/please_wait.gif' />"], ["profile", ""], [1, "card", "exiting-office-table", "orderStatus", "p-0", "mt-2"], [1, "card-header"], [2, "display", "flex", "flex-direction", "column"], [1, "small"], [1, "card-body", "pa-0"], [1, "row", "m-0"], [1, "col-md-12", "py-2"], [1, "table"], [1, "font"], [4, "ngFor", "ngForOf"], [1, "actdct_icon"], [4, "ngIf", "ngIfElse"], ["inactiveIcon", ""], [1, "btn", "btn-sm", "btn-outline-info"], ["src", "assets/images/active_icon.png", 4, "ngIf", "ngIfElse"], ["notOriginator", ""], ["class", "text-success", 4, "ngIf"], ["class", "text-danger", 4, "ngIf"], [1, "btn", "btn-sm", "btn-outline-primary", 3, "click"], ["src", "assets/images/active_icon.png"], ["src", "assets/images/deactive_icon.png"], [1, "text-success"], [1, "text-danger"], ["notPublic", ""], ["notInPerson", ""], [1, "action_icon"], ["title", "Person", 1, "delete-icon", 3, "click"], [1, "fa", "fa-user"], ["title", "Message", 1, "delete-icon"], [1, "fa", "fa-envelope"], ["title", "Handshake", 1, "delete-icon"], [1, "fa", "fa-handshake-o"], ["src", "assets/images/active_icon.png", "alt", "Public"], ["src", "assets/images/deactive_icon.png", "alt", "Not Public"], ["src", "assets/images/active_icon.png", "alt", "In-Person"], ["src", "assets/images/deactive_icon.png", "alt", "Not In-Person"], [1, "btn", "btn-sm", "btn-outline-secondary"], ["title", "Person", 1, "delete-icon"], ["src", "assets/images/active_icon.png", "alt", "Active"], ["src", "assets/images/deactive_icon.png", "alt", "Inactive"], [1, "modal-header"], [1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "btn-close", "close", "pull-right", 3, "click"], ["aria-hidden", "true", 1, "visually-hidden"], [1, "modal-body"], [1, "styled-tabs"], ["heading", "Main Profile", "id", "tab1"], [1, "profilesection"], [1, "profile-row"], [1, "profile-image-big"], ["src", "../../../assets/images/profileMyConnect.webp", "alt", "Rakesh Arora"], [1, "profile-details"], [1, "profile-name"], [1, "profile-title"], [1, "profile-verified"], ["heading", "Management", "id", "tab2"], [2, "display", "flex", "gap", "20px"], ["src", "../../../assets/images/profileMyConnect.webp", "alt", "Rakesh Arora", 1, "profile", 2, "width", "80px", "border-radius", "50%"], ["heading", "Prod & Services", "id", "tab3"], ["src", "https://www.saintg.in/cdn/shop/files/Untitled-2.5_c9f0474e-67c2-4774-b290-ba921b70af0e.jpg?v=1745314291&width=1080", "alt", "Leather Jacket", 2, "width", "50px", "border-radius", "4px"], ["src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWIOKt_FpzmStMjbeZqI0iwVWJg3fLzSsF2A&s", "alt", "Leather Bag", 2, "width", "50px", "border-radius", "4px"], ["heading", "Media & Cert", "id", "tab4"], ["src", "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "alt", "Our Store", 2, "width", "150px"], ["src", "https://designdesk.in/wp-content/uploads/2017/01/AECOM-Lobby.jpg", "alt", "Back Office Reception", 2, "width", "150px"], ["heading", "Clients", "id", "tab5"], ["src", "../../../assets/images/profileMyConnect.webp", "alt", "CEO", 1, "profile", 2, "width", "80px", "border-radius", "50%"], ["heading", "GEO-Ser", "id", "tab6"]], template: function CommunincationDeskComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "h1", 1);
        i0.ɵɵtext(2, "Communication Desk ( Post Management )");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "div", 2)(4, "div", 3)(5, "div")(6, "div", 4)(7, "tabset", 5)(8, "tab", 6)(9, "div", 7)(10, "span", 8)(11, "strong");
        i0.ɵɵtext(12, "MDR-Connect Organization:");
        i0.ɵɵelementEnd();
        i0.ɵɵtext(13, " Post Response Centre ");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(14, "tabset")(15, "tab", 9);
        i0.ɵɵtemplate(16, CommunincationDeskComponent_div_16_Template, 37, 1, "div", 10);
        i0.ɵɵtemplate(17, CommunincationDeskComponent_div_17_Template, 33, 1, "div", 10);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(18, "tab", 11);
        i0.ɵɵtemplate(19, CommunincationDeskComponent_div_19_Template, 37, 1, "div", 10);
        i0.ɵɵelementEnd()()();
        i0.ɵɵelement(20, "tab", 12)(21, "tab", 13)(22, "tab", 14);
        i0.ɵɵelementEnd()()();
        i0.ɵɵelement(23, "br")(24, "br")(25, "ngx-spinner", 15);
        i0.ɵɵelementEnd()()();
        i0.ɵɵtemplate(26, CommunincationDeskComponent_ng_template_26_Template, 153, 0, "ng-template", null, 16, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        i0.ɵɵadvance(16);
        i0.ɵɵproperty("ngIf", (ctx.postList == null ? null : ctx.postList.length) > 0);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.showResponceCentre === true);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", (ctx.postList == null ? null : ctx.postList.length) > 0);
    } }, dependencies: [i2.NgForOf, i2.NgIf, i3.TabDirective, i3.TabsetComponent, i4.NgxSpinnerComponent], styles: [".toplevel[_ngcontent-%COMP%] {\r\n    background: #fff;\r\n    padding: 20px;\r\n    margin-bottom: 15px;\r\n    margin-top: 10px;\r\n    border: 1px solid #ddd;\r\n    border-radius: 5px;\r\n}\r\n\r\n.table-font-size[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table-font-size[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    font-size: 13px;\r\n    \r\n}\r\n\r\n.vipDiv[_ngcontent-%COMP%] {\r\n    background: #f8f9fa;\r\n    padding: 15px;\r\n    border-radius: 3px;\r\n    min-height: 210px;\r\n}\r\n\r\n.orderStatus[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    vertical-align: middle;\r\n}\r\n\r\n.orderStatus[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n    font-size: 13px;\r\n    padding: 4px 10px;\r\n}\r\n\r\n.orderStatus[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\r\n    color: #c50f20;\r\n    font-size: 90%;\r\n    font-weight: 600;\r\n}\r\n\r\n.bottom-btn[_ngcontent-%COMP%] {\r\n    float: right;\r\n}\r\n\r\n.alert.alert-success[_ngcontent-%COMP%] {\r\n    padding: 5px 10px;\r\n}\r\n\r\n.alert[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\r\n    font-size: 25px;\r\n    vertical-align: middle;\r\n    margin-left: 5px;\r\n}\r\n\r\n.orderStatus[_ngcontent-%COMP%] {\r\n    .card-header {\r\n        border: 0;\r\n    }\r\n\r\n    .card-body {\r\n        padding: 0;\r\n        overflow: auto;\r\n    }\r\n}\r\n\r\nh3.head-title[_ngcontent-%COMP%] {\r\n    font-size: 22px;\r\n    margin: 20px 0;\r\n    font-weight: bold;\r\n}\r\n\r\n.icon[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    vertical-align: top;\r\n    color: #17a2b8;\r\n}\r\n\r\n.orderStatus[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    max-width: 25px;\r\n}\r\n\r\n.orderStatus[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n    background: #021422;\r\n    border-radius: 25px;\r\n    color: #fff;\r\n    font-size: 11px !important;\r\n    border: 1px solid #21333c;\r\n\r\n    i {\r\n        font-size: 18px;\r\n        vertical-align: middle;\r\n        padding-right: 5px;\r\n    }\r\n}\r\n\r\nbutton.btn.view-del-btn[_ngcontent-%COMP%] {\r\n    background: #63030c !important;\r\n}\r\n\r\n.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n    border: 0;\r\n}\r\n\r\n.toplevel[_ngcontent-%COMP%], .card[_ngcontent-%COMP%] {\r\n    padding: 0 20px 0;\r\n}\r\n\r\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n    padding: 8px 5px;\r\n    text-align: center;\r\n    line-height: 13px;\r\n    font-weight: 600;\r\n    font-size: 13px;\r\n    border-top: 0;\r\n}\r\n\r\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    font-size: 12px;\r\n    line-height: 15px;\r\n    padding: 10px 5px;\r\n}\r\n\r\ntd.icon[_ngcontent-%COMP%] {\r\n    padding: 0 !important;\r\n}\r\n\r\nbutton.btn.custom-btn[_ngcontent-%COMP%] {\r\n    min-width: 100px;\r\n}\r\n\r\n  .nav-tabs .nav-link {\r\n    font-size: 11px;\r\n    \r\n}\r\n\r\nbutton.btn.custom-btn-white[_ngcontent-%COMP%] {\r\n    min-width: 100px;\r\n    background: #ffffff;\r\n    border: 1px solid #c50f20;\r\n    color: #c50f20;\r\n    font-weight: 600;\r\n\r\n    &:hover {\r\n        background: #c50f20;\r\n        color: #ffffff;\r\n    }\r\n}\r\n\r\n.input-group-prepend[_ngcontent-%COMP%] + .invalid-feedback[_ngcontent-%COMP%] {\r\n    top: 35px;\r\n}\r\n\r\n.card-header[_ngcontent-%COMP%] {\r\n    padding: 10px 15px;\r\n    background: #63030c;\r\n    font-size: 12px;\r\n    color: #fff;\r\n    font-weight: 500;\r\n\r\n    span {\r\n        float: left;\r\n    }\r\n\r\n    span+span {\r\n        float: right;\r\n    }\r\n}\r\n\r\n.card-header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 16px;\r\n    margin-left: 3px;\r\n}\r\n\r\n.subcard-header[_ngcontent-%COMP%] {\r\n    padding: 8px 12px;\r\n    background: #63030c;\r\n    font-size: 10px;\r\n    color: #fff;\r\n    font-weight: 500;\r\n\r\n    span {\r\n        float: left;\r\n    }\r\n\r\n    span+span {\r\n        float: right;\r\n    }\r\n}\r\n\r\n.subcard-header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 16px;\r\n    margin-left: 3px;\r\n}\r\n\r\n.icofont-info-circle[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    vertical-align: middle;\r\n    margin-left: 3px;\r\n}\r\n\r\n.orderList[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\r\n    background: #ff000029;\r\n}\r\n\r\n.orderList[_ngcontent-%COMP%] {\r\n    border-collapse: collapse;\r\n    border: 1px solid #ddd;\r\n    margin: 5px 0;\r\n}\r\n\r\n.orderList[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    border: 1px solid #ddd;\r\n}\r\n\r\n.orderList[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n    background: #212529;\r\n    color: #fff;\r\n    vertical-align: middle;\r\n}\r\n\r\n.no-border[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    border: 0 !important;\r\n    text-align: right !important;\r\n    font-weight: 600;\r\n    font-size: 12px !important;\r\n}\r\n\r\nsmall.view-customer[_ngcontent-%COMP%] {\r\n    display: block;\r\n    text-decoration: underline;\r\n    cursor: pointer;\r\n}\r\n\r\nbutton.btn.view-ord-btn[_ngcontent-%COMP%] {\r\n    min-width: 112px;\r\n}\r\n\r\nbutton.btn.view-del-btn[_ngcontent-%COMP%] {\r\n    min-width: 125px;\r\n}\r\n\r\n.card-body.no_data_available[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    color: #bd2130;\r\n\r\n    img {\r\n        display: block;\r\n        text-align: center;\r\n        margin: 0 auto 5px;\r\n        max-width: 30px;\r\n    }\r\n}\r\n\r\n\r\nsmall.viewCart[_ngcontent-%COMP%] {\r\n    text-decoration: underline;\r\n    cursor: pointer;\r\n}\r\n\r\n.hr[_ngcontent-%COMP%] {\r\n    border: none;\r\n    border-top: 1.5px solid #d1d1d1;\r\n    margin: 16px 0;\r\n    height: 0;\r\n    width: 100%;\r\n}\r\n\r\nh1.heading-title[_ngcontent-%COMP%] {\r\n    margin: 20px 0 0;\r\n}\r\n\r\n.heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    padding: 10px 5px 10px;\r\n    font-size: 20px;\r\n}\r\n\r\n.row.topLevel[_ngcontent-%COMP%] {\r\n    background: #fff;\r\n    padding: 20px 0;\r\n    margin: 0;\r\n    border-radius: 5px;\r\n}\r\n\r\n.heading.store-domain[_ngcontent-%COMP%] {\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.store-domain[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    margin-right: 20px;\r\n}\r\n\r\n.store-domain[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    background: #ddd;\r\n    padding: 5px 20px;\r\n    font-size: 13px;\r\n    border-radius: 20px;\r\n    display: inline-block;\r\n    font-weight: bold;\r\n    margin-left: 5px;\r\n}\r\n\r\n.store_id[_ngcontent-%COMP%] {\r\n    background: #ddd;\r\n    padding: 5px 20px;\r\n    border-radius: 20px;\r\n    font-size: 13px;\r\n    font-weight: 700;\r\n    float: right;\r\n    margin-top: -40px;\r\n}\r\n\r\n.box[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    overflow: hidden;\r\n    box-shadow: 0 0 4px 0px #eee;\r\n    margin: 20px 0 5px;\r\n    border-radius: 4px;\r\n    padding: 10px;\r\n    background: #fff;\r\n}\r\n\r\n.main-content-area[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\r\n    width: 20%;\r\n    float: left;\r\n    padding: 0;\r\n}\r\n\r\n.fa-star[_ngcontent-%COMP%]:before {\r\n    content: \"\\f005\";\r\n    color: #ff9600;\r\n    margin-right: 5px;\r\n}\r\n\r\n.pro-box[_ngcontent-%COMP%] {\r\n    box-shadow: 0 0 4px 0 #e9ecef;\r\n    margin: 0 5px 10px;\r\n    overflow: hidden;\r\n    padding: 15px;\r\n    border-radius: 3px;\r\n    position: relative;\r\n    border: 1px solid #dee2e6;\r\n}\r\n\r\n.pro-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    height: 100px;\r\n    width: 100px;\r\n    margin: 30px auto 15px;\r\n    display: block;\r\n}\r\n\r\n.storeitem[_ngcontent-%COMP%]   .p-details[_ngcontent-%COMP%] {\r\n    margin-bottom: 42px;\r\n}\r\n\r\np.label-txt[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    padding: 10px;\r\n    font-size: 14px;\r\n    margin: 0;\r\n}\r\n\r\n.store-available-product[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\r\n    width: 25% !important;\r\n}\r\n\r\n.selected-productLine[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .store-available-product[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\r\n    font-size: 16px;\r\n    padding: 0 10px 5px;\r\n}\r\n\r\n.right-field-head[_ngcontent-%COMP%] {\r\n    float: right;\r\n    margin-top: 10px;\r\n}\r\n\r\n.right-field-head[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    padding: 0 10px;\r\n}\r\n\r\nspan.video[_ngcontent-%COMP%], span.doc[_ngcontent-%COMP%] {\r\n    padding: 8px 15px;\r\n    background: #dee2e6;\r\n    font-size: 12px;\r\n    border-radius: 20px;\r\n}\r\n\r\n.right-field-head[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n    font-size: 11px;\r\n    border-radius: 20px;\r\n}\r\n\r\n.bottom-btn[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n    line-height: 11px;\r\n}\r\n\r\n.box.prduct-gallery[_ngcontent-%COMP%] {\r\n    position: relative;\r\n}\r\n\r\n.sample-img[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    z-index: 1;\r\n    left: 15%;\r\n    top: 28%;\r\n    transform: rotate(-45deg);\r\n}\r\n\r\np.p-name[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    margin: 0;\r\n    font-size: 13px;\r\n    font-weight: 500;\r\n    vertical-align: middle;\r\n}\r\n\r\np.item-id[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    position: absolute;\r\n    top: 0;\r\n    background: #212529;\r\n    left: 0;\r\n    font-weight: 600;\r\n    color: #fff;\r\n    border-radius: 0 0 5px;\r\n    font-size: 11px;\r\n    padding: 3px 6px;\r\n}\r\n\r\nspan.price[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n    padding: 7px 10px 0;\r\n    float: left;\r\n    font-weight: 600;\r\n    line-height: 20px;\r\n}\r\n\r\n.item-id[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\r\n    font-weight: 600;\r\n}\r\n\r\n.instock[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n    text-align: center;\r\n    margin: 0 0 3px;\r\n    position: absolute;\r\n    top: 5%;\r\n    box-shadow: 0 0 30px 0 rgb(82 63 105 / 10%);\r\n    left: 70%;\r\n    background: rgb(224 152 152 / 24%);\r\n    width: 50px;\r\n    border: 1px solid rgb(0 0 0 / 10%);\r\n    height: 50px;\r\n    border-radius: 50%;\r\n\r\n    img {\r\n        width: 30px !important;\r\n        height: 30px !important;\r\n        margin: 9px auto;\r\n    }\r\n}\r\n\r\n.pro-box.storeitem.item-box[_ngcontent-%COMP%] {\r\n    border: 1px solid #dee2e6;\r\n    height: 300px;\r\n    padding-left: 20px;\r\n    padding-right: 20px;\r\n}\r\n\r\nh1.heading-title[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    text-transform: uppercase;\r\n    font-weight: 700;\r\n    color: #ff7900;\r\n    position: relative;\r\n    margin-bottom: 10px;\r\n    width: 100%;\r\n\r\n    span {\r\n        font-size: 10px;\r\n        text-transform: inherit;\r\n        background: #495057;\r\n        color: #fff;\r\n        padding: 10px 15px;\r\n        border-radius: 25px;\r\n    }\r\n}\r\n\r\nh1.heading-title[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    max-width: 65px;\r\n    margin-right: 5px;\r\n}\r\n\r\nh1.heading-title[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    font-weight: 400;\r\n    font-size: 13px;\r\n    position: absolute;\r\n    left: 80px;\r\n    bottom: 4px;\r\n    color: grey;\r\n}\r\n\r\n.offerDiv[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 5px;\r\n    right: 5px;\r\n    font-size: 10px;\r\n    background: #dc3545;\r\n    line-height: 10px;\r\n    font-weight: 700;\r\n    width: 35px;\r\n    height: 35px;\r\n    border-radius: 50%;\r\n    padding: 9px;\r\n    text-align: center;\r\n    color: #fff;\r\n}\r\n\r\n.offerDiv[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\r\n    display: block;\r\n}\r\n\r\nspan.price.strike-price[_ngcontent-%COMP%] {\r\n    color: #ccc;\r\n    text-decoration: line-through;\r\n}\r\n\r\n.row.text-level[_ngcontent-%COMP%] {\r\n    margin: 0 -10px 10px;\r\n}\r\n\r\n.store-add-remove[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    padding: 10px;\r\n    float: left;\r\n    width: 100%;\r\n}\r\n\r\n.row.product-slider-box[_ngcontent-%COMP%] {\r\n    border-bottom: 5px solid #ddd;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.carousel-inner[_ngcontent-%COMP%] {\r\n    height: 278px;\r\n}\r\n\r\n.carousel-item[_ngcontent-%COMP%] {\r\n    margin-right: 0;\r\n    border: 1px solid #f8f9fa;\r\n    background: #fff;\r\n}\r\n\r\n.product-slider-box[_ngcontent-%COMP%]   .domain-product[_ngcontent-%COMP%] {\r\n    max-width: 23%;\r\n}\r\n\r\n.product-slider-box[_ngcontent-%COMP%]   .sub-domain-product[_ngcontent-%COMP%] {\r\n    max-width: 77%;\r\n}\r\n\r\n.store-add-remove[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n    font-size: 11px;\r\n    text-align: center;\r\n    float: left;\r\n    transition: all .5s;\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n    min-width: 65px;\r\n}\r\n\r\n.store-add-remove[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] + .btn[_ngcontent-%COMP%] {\r\n    float: right;\r\n}\r\n\r\n.item-subitem-list[_ngcontent-%COMP%]   .pro-box[_ngcontent-%COMP%] {\r\n    width: 95%;\r\n    overflow: auto;\r\n    height: 280px;\r\n}\r\n\r\n.item-subitem-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    float: left;\r\n}\r\n\r\n.item-box[_ngcontent-%COMP%] {\r\n    max-width: 225px;\r\n    width: 100%;\r\n    float: left;\r\n}\r\n\r\n.sub-item-box[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    float: left;\r\n    max-width: 225px;\r\n}\r\n\r\n.sub-item-box[_ngcontent-%COMP%]   .add_to_cart[_ngcontent-%COMP%]   button.btn[_ngcontent-%COMP%] {\r\n    background: #000064;\r\n    height: 35px;\r\n    font-size: 13px;\r\n    line-height: 16px;\r\n    color: #fff;\r\n    border-radius: 25px;\r\n    margin: 10px 0 0;\r\n    width: 100%;\r\n    text-align: center;\r\n}\r\n\r\n.add_to_cart[_ngcontent-%COMP%] {\r\n    .remove-btn {\r\n        border-radius: 50%;\r\n        background: #05054ead !important;\r\n        color: #fff;\r\n        height: 35px;\r\n        padding: 0;\r\n    }\r\n\r\n    .btn+.btn {\r\n        width: 100%;\r\n        border: 0;\r\n        border-radius: 30px;\r\n        font-size: 15px;\r\n        line-height: normal;\r\n        font-weight: 600;\r\n    }\r\n}\r\n\r\n.middle-arrow[_ngcontent-%COMP%] {\r\n    float: left;\r\n    width: 30px;\r\n    height: 50px;\r\n    font-size: 40px;\r\n    margin-top: 10%;\r\n    color: #dee2e6;\r\n    text-align: center;\r\n}\r\n\r\n.price-details[_ngcontent-%COMP%] {\r\n    float: left;\r\n    width: 100%;\r\n    margin-bottom: 10px;\r\n    font-size: 15px;\r\n    line-height: normal;\r\n    font-weight: 600;\r\n\r\n    .unit-price {\r\n        float: left;\r\n        width: 42%;\r\n    }\r\n}\r\n\r\n.unit-price[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    display: block;\r\n    font-size: 12px;\r\n    font-weight: 400;\r\n}\r\n\r\n.whole-sale-price[_ngcontent-%COMP%] {\r\n    float: right;\r\n    width: 58%;\r\n    text-align: right;\r\n\r\n    span {\r\n        font-size: 12px;\r\n        display: block;\r\n        font-weight: 400;\r\n    }\r\n}\r\n\r\n.add_to_cart[_ngcontent-%COMP%] {\r\n    clear: both;\r\n}\r\n\r\n.subItem-field[_ngcontent-%COMP%] {\r\n    width: calc(100% - 280px);\r\n    float: left;\r\n}\r\n\r\n.item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n\r\n.pro-box.active[_ngcontent-%COMP%] {\r\n    border: 1px solid #63030c;\r\n}\r\n\r\n.p-details[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\r\n    font-size: 13px;\r\n    padding: 0 5px;\r\n    min-height: 25px;\r\n    height: 25px;\r\n    text-align: center;\r\n}\r\n\r\n.p-details[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n    margin-bottom: 0;\r\n    font-weight: 400;\r\n    line-height: normal;\r\n    padding-top: 2px;\r\n    padding-bottom: 2px;\r\n}\r\n\r\n.p-details[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\r\n    margin-bottom: 4px;\r\n}\r\n\r\n.sub-item-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    margin-top: 5px !important;\r\n}\r\n\r\n.p-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n    line-height: 14px;\r\n}\r\n\r\n.add-stock[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    display: inline-block !important;\r\n    width: 60px !important;\r\n    margin-left: 5px;\r\n    vertical-align: middle;\r\n}\r\n\r\n.min-alert-count[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    width: 35px;\r\n    margin-left: 5px;\r\n    display: inline-block;\r\n    margin-right: 4px;\r\n}\r\n\r\n.d-flex[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] + span[_ngcontent-%COMP%] {\r\n    margin-left: auto;\r\n    font-weight: 600;\r\n    width: 60px;\r\n\r\n    i {\r\n        font-size: 16px;\r\n        color: #bd2130;\r\n        display: inline-block;\r\n        position: relative;\r\n        top: 2px;\r\n        cursor: pointer;\r\n    }\r\n}\r\n\r\n.sub-item-box[_ngcontent-%COMP%]   .pro-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    height: 55px;\r\n    width: 55px;\r\n    margin: 18px auto 8px;\r\n}\r\n\r\n.links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    display: block;\r\n    color: #17a2b8 !important;\r\n    text-decoration: underline !important;\r\n    font-size: 12px;\r\n    cursor: pointer;\r\n}\r\n\r\n.modal-header[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    margin: 5px 0;\r\n    color: #bd2130;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.field[_ngcontent-%COMP%] {\r\n    margin-bottom: 10px;\r\n\r\n    select {\r\n        border: 1px solid #ddd;\r\n        border-radius: 3px;\r\n        height: 26px;\r\n        font-size: 12px;\r\n        margin-left: 10px;\r\n        margin-top: -4px;\r\n        width: 60px;\r\n    }\r\n}\r\n\r\n.topcontent[_ngcontent-%COMP%] {\r\n    font-size: larger;\r\n}\r\n\r\n.actdct_icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    max-width: 45px;\r\n}\r\n\r\n.action_icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    color: #bd2130;\r\n    margin: 0 10px 0 10px;\r\n}\r\n\r\n.btn-space[_ngcontent-%COMP%] {\r\n    margin-right: 10px;\r\n}\r\n\r\n.comm-desk-title[_ngcontent-%COMP%] {\r\n    font-size: 1.3rem;\r\n    font-weight: 600;\r\n    color: #222;\r\n    letter-spacing: 0.5px;\r\n}\r\n\r\n.comm-desk-title[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\r\n    font-size: 1.3rem;\r\n    font-weight: 600;\r\n    color: #ff7900;\r\n}\r\n\r\n.smallfont[_ngcontent-%COMP%] {\r\n    font-size: 0.8rem;\r\n}\r\n\r\n.styled-tabs[_ngcontent-%COMP%] {\r\n    font-family: Arial, sans-serif;\r\n}\r\n\r\n.styled-tabs[_ngcontent-%COMP%]   tab[_ngcontent-%COMP%] {\r\n    padding: 20px;\r\n    background: #ffffff;\r\n    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);\r\n}\r\n\r\n.profile[_ngcontent-%COMP%] {\r\n    height: 80px;             \r\n    object-fit: cover;         \r\n    border-radius: 50%;        \r\n    border: 2px solid #eee;\r\n    padding: 3px;\r\n    background: #fafafa;\r\n    transition: transform 0.2s ease-in-out;\r\n}\r\n\r\n.styled-tabs[_ngcontent-%COMP%]   tab[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n    margin-top: 10px;\r\n    font-size: 1.2rem;\r\n    font-weight: bold;\r\n    color: #333;\r\n}\r\n\r\n.styled-tabs[_ngcontent-%COMP%]   tab[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    margin: 4px 0;\r\n    font-size: 0.95rem;\r\n    color: #555;\r\n}\r\n\r\n.styled-tabs[_ngcontent-%COMP%]   tab[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    background: #007bff;\r\n    color: white;\r\n    border: none;\r\n    padding: 6px 12px;\r\n    border-radius: 4px;\r\n    cursor: pointer;\r\n    font-size: 0.9rem;\r\n    transition: background 0.2s ease;\r\n}\r\n\r\n.styled-tabs[_ngcontent-%COMP%]   tab[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\r\n    background: #0056b3;\r\n}\r\n\r\n.styled-tabs[_ngcontent-%COMP%]   tab[_ngcontent-%COMP%]   div[style*=\"display:flex\"][_ngcontent-%COMP%] {\r\n    flex-wrap: wrap;\r\n}\r\n\r\n.styled-tabs[_ngcontent-%COMP%]   tab[_ngcontent-%COMP%]   div[style*=\"gap\"][_ngcontent-%COMP%] > div[_ngcontent-%COMP%] {\r\n    background: #f9f9f9;\r\n    padding: 10px;\r\n    border-radius: 6px;\r\n    text-align: center;\r\n    flex: 1;\r\n    min-width: 120px;\r\n}\r\n\r\n.profile-row[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 20px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.profile-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 80px;\r\n    height: 80px;\r\n    border-radius: 50%;\r\n    border: 2px solid #eee;\r\n    object-fit: cover;\r\n}\r\n\r\n.profile-image-big[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 100px;\r\n    height: 100px;\r\n    border-radius: 50%;\r\n    border: 2px solid #eee;\r\n    object-fit: cover;\r\n}\r\n\r\n.profile-details[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n}\r\n\r\n.profile-name[_ngcontent-%COMP%] {\r\n    font-size: 1.25rem;\r\n    font-weight: bold;\r\n    margin: 0;\r\n    color: #222;\r\n}\r\n\r\n.profile-title[_ngcontent-%COMP%] {\r\n    font-size: 1rem;\r\n    font-weight: 500;\r\n    color: #666;\r\n    margin: 3px 0;\r\n}\r\n\r\n.profile-verified[_ngcontent-%COMP%] {\r\n    font-size: 0.95rem;\r\n    color: #28a745;\r\n    font-weight: 500;\r\n    margin: 0;\r\n}\r\n\r\n.profilesection[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column; \r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 2px;\r\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CommunincationDeskComponent, [{
        type: Component,
        args: [{ selector: 'app-communincation-desk', template: "<div class=\"content\">\n    <h1 class=\"heading-title\">Communication Desk ( Post Management )</h1>\n    <div class=\"card\">\n        <div class=\"card-body pl-0 pr-0\">\n            <div>\n                <div class=\"row topcontent mt-3\">\n\n                    <tabset class=\"col-md-12\">\n\n                        <tab heading=\"Post Responce Centre\" id=\"tab11\">\n\n                            <div class=\"col-md-12 mb-3 pl-0\">\n                                <span class=\"sub-desk-title\">\n                                    <strong>MDR-Connect Organization:</strong> Post Response Centre\n                                </span>\n                            </div>\n\n                            <tabset>\n                                <tab heading=\"My Org. Post Responces\" id=\"tab111\">\n\n                                    <div class=\"card exiting-office-table orderStatus p-0 mt-2\"\n                                        *ngIf=\"postList?.length > 0\">\n                                        <div class=\"card-header\">\n                                            <div style=\"display: flex; flex-direction: column;\">\n                                                <span>My Org. Post Responces</span>\n                                                <span class=\"small\">\n                                                    <strong>Storecode:</strong> 3254386586\n                                                </span>\n                                            </div>\n                                        </div>\n\n                                        <div class=\"card-body pa-0\">\n                                            <div class=\"row m-0\">\n                                                <div class=\"col-md-12 py-2\">\n                                                    <table class=\"table\">\n                                                        <thead>\n                                                            <tr>\n                                                                <th class=\"font\">S#</th>\n                                                                <th class=\"font\">Post ID</th>\n                                                                <th class=\"font\">Active</th>\n                                                                <th class=\"font\">Category</th>\n                                                                <th class=\"font\">Domain ID</th>\n                                                                <th class=\"font\">Details</th>\n                                                                <th class=\"font\">Originator</th>\n                                                                <th class=\"font\">Public</th>\n                                                                <th class=\"font\">In-Person</th>\n                                                                <th class=\"font\">Post Management</th>\n                                                            </tr>\n                                                        </thead>\n                                                        <tbody>\n                                                            <tr *ngFor=\"let post of postList; let i = index\">\n                                                                <td class=\"font\">{{ i + 1 }}</td>\n                                                                <td class=\"font\">{{ post.postId }}</td>\n\n                                                                <!-- Active -->\n                                                                <td class=\"actdct_icon\">\n                                                                    <span *ngIf=\"post.active; else inactiveIcon\">\n                                                                        <img src=\"assets/images/active_icon.png\" />\n                                                                    </span>\n                                                                    <ng-template #inactiveIcon>\n                                                                        <img src=\"assets/images/deactive_icon.png\" />\n                                                                    </ng-template>\n                                                                </td>\n\n                                                                <td class=\"font\">{{ post.category }}</td>\n                                                                <td class=\"font\">{{ post.domainId }}</td>\n\n                                                                <!-- Details Button -->\n                                                                <td>\n                                                                    <button\n                                                                        class=\"btn btn-sm btn-outline-info\">Details</button>\n                                                                </td>\n\n                                                                <!-- Originator -->\n                                                                <td class=\"actdct_icon\">\n                                                                    <img *ngIf=\"post.originator; else notOriginator\"\n                                                                        src=\"assets/images/active_icon.png\" />\n                                                                    <ng-template #notOriginator>\n                                                                        <img src=\"assets/images/deactive_icon.png\" />\n                                                                    </ng-template>\n                                                                </td>\n\n                                                                <!-- Public -->\n                                                                <td class=\"font\">\n                                                                    <span *ngIf=\"post.isPublic\"\n                                                                        class=\"text-success\">Yes</span>\n                                                                    <span *ngIf=\"!post.isPublic\"\n                                                                        class=\"text-danger\">No</span>\n                                                                </td>\n\n                                                                <!-- In-Person -->\n                                                                <td class=\"font\">\n                                                                    <span *ngIf=\"post.inPerson\"\n                                                                        class=\"text-success\">Yes</span>\n                                                                    <span *ngIf=\"!post.inPerson\"\n                                                                        class=\"text-danger\">No</span>\n                                                                </td>\n\n                                                                <!-- Post Management Button -->\n                                                                <td>\n                                                                    <button (click)=\"openResponceCentre(post)\"\n                                                                        class=\"btn btn-sm btn-outline-primary\">\n                                                                        Response Centre\n                                                                    </button>\n                                                                </td>\n                                                            </tr>\n                                                        </tbody>\n                                                    </table>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n\n                                    <div class=\"card exiting-office-table orderStatus p-0 mt-2\"\n                                        *ngIf=\"showResponceCentre === true\">\n                                        <div class=\"card-header\">\n                                            <div style=\"display: flex; flex-direction: column;\">\n                                                <span>Response Centre</span>\n                                                <span class=\"small\">\n                                                    <strong>Post ID:</strong> P7252\n                                                </span>\n                                            </div>\n                                        </div>\n\n                                        <div class=\"card-body pa-0\">\n                                            <div class=\"row m-0\">\n                                                <div class=\"col-md-12 py-2\">\n                                                    <table class=\"table\">\n                                                        <thead>\n                                                            <tr>\n                                                                <th>S#</th>\n                                                                <th>Resp. ID</th>\n                                                                <th>Org. ID</th>\n                                                                <th>Date</th>\n                                                                <th>Time</th>\n                                                                <th>Public</th>\n                                                                <th>In-Person</th>\n                                                                <th>Action</th>\n                                                            </tr>\n                                                        </thead>\n                                                        <tbody>\n                                                            <tr *ngFor=\"let post of postList; index as i\">\n                                                                <td>{{ i + 1 }}</td>\n\n                                                                <td>677878</td>\n\n                                                                <td>2345675678</td>\n\n                                                                <td>06/08/2025</td>\n\n                                                                <td>10:15 PM</td>\n\n                                                                <!-- Public -->\n                                                                <td class=\"actdct_icon\">\n                                                                    <span *ngIf=\"post.sentPublic; else notPublic\">\n                                                                        <img src=\"assets/images/active_icon.png\"\n                                                                            alt=\"Public\" />\n                                                                    </span>\n                                                                    <ng-template #notPublic>\n                                                                        <img src=\"assets/images/deactive_icon.png\"\n                                                                            alt=\"Not Public\" />\n                                                                    </ng-template>\n                                                                </td>\n\n                                                                <!-- In-Person -->\n                                                                <td class=\"actdct_icon\">\n                                                                    <span *ngIf=\"post.sentInPerson; else notInPerson\">\n                                                                        <img src=\"assets/images/active_icon.png\"\n                                                                            alt=\"In-Person\" />\n                                                                    </span>\n                                                                    <ng-template #notInPerson>\n                                                                        <img src=\"assets/images/deactive_icon.png\"\n                                                                            alt=\"Not In-Person\" />\n                                                                    </ng-template>\n                                                                </td>\n\n                                                                <!-- Action Icons -->\n                                                                <td class=\"action_icon\">\n                                                                    <span (click)=\"openModal(profile)\"\n                                                                        class=\"delete-icon\" title=\"Person\">\n                                                                        <i class=\"fa fa-user\"></i>\n                                                                    </span>\n                                                                    <span class=\"delete-icon\" title=\"Message\">\n                                                                        <i class=\"fa fa-envelope\"></i>\n                                                                    </span>\n                                                                    <span class=\"delete-icon\" title=\"Handshake\">\n                                                                        <i class=\"fa fa-handshake-o\"></i>\n                                                                    </span>\n                                                                </td>\n                                                            </tr>\n                                                        </tbody>\n                                                    </table>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n\n                                </tab>\n\n                                <tab heading=\"Responce to other Org. Post\" id=\"tab112\">\n\n                                    <div class=\"card exiting-office-table orderStatus p-0 mt-2\"\n                                        *ngIf=\"postList?.length > 0\">\n                                        <div class=\"card-header\">\n                                            <div style=\"display: flex; flex-direction: column;\">\n                                                <span>Responce to other Org. Post</span>\n                                                <span class=\"small\">\n                                                    <strong>Storecode:</strong> 3254386586\n                                                </span>\n                                            </div>\n                                        </div>\n\n                                        <div class=\"card-body pa-0\">\n                                            <div class=\"row m-0\">\n                                                <div class=\"col-md-12 py-2\">\n                                                    <table class=\"table\">\n                                                        <thead>\n                                                            <tr>\n                                                                <th class=\"font\">S#</th>\n                                                                <th class=\"font\">Post ID</th>\n                                                                <th class=\"font\">Active</th>\n                                                                <th class=\"font\">To Originator Org. ID</th>\n                                                                <th class=\"font\">Sent Public</th>\n                                                                <th class=\"font\">Sent In-Person</th>\n                                                                <th class=\"font\">Details</th>\n                                                                <th class=\"font\">Resp. ID</th>\n                                                                <th class=\"font\">Resp. Text</th>\n                                                                <th class=\"font\">Action</th>\n                                                            </tr>\n                                                        </thead>\n                                                        <tbody>\n                                                            <tr *ngFor=\"let post of postList; let i = index\">\n                                                                <td class=\"font\">{{ i + 1 }}</td>\n                                                                <td class=\"font\">{{ post.postId }}</td>\n\n                                                                <!-- Active -->\n                                                                <td class=\"actdct_icon\">\n                                                                    <span *ngIf=\"post.active; else inactiveIcon\">\n                                                                        <img src=\"assets/images/active_icon.png\"\n                                                                            alt=\"Active\" />\n                                                                    </span>\n                                                                    <ng-template #inactiveIcon>\n                                                                        <img src=\"assets/images/deactive_icon.png\"\n                                                                            alt=\"Inactive\" />\n                                                                    </ng-template>\n                                                                </td>\n\n                                                                <!-- To Originator Org. ID -->\n                                                                <td class=\"font\">2345675678</td>\n\n                                                                <!-- Sent Public -->\n                                                                <td class=\"actdct_icon\">\n                                                                    <span *ngIf=\"post.sentPublic; else notPublic\">\n                                                                        <img src=\"assets/images/active_icon.png\"\n                                                                            alt=\"Public\" />\n                                                                    </span>\n                                                                    <ng-template #notPublic>\n                                                                        <img src=\"assets/images/deactive_icon.png\"\n                                                                            alt=\"Not Public\" />\n                                                                    </ng-template>\n                                                                </td>\n\n                                                                <!-- Sent In-Person -->\n                                                                <td class=\"actdct_icon\">\n                                                                    <span *ngIf=\"post.sentInPerson; else notInPerson\">\n                                                                        <img src=\"assets/images/active_icon.png\"\n                                                                            alt=\"In-Person\" />\n                                                                    </span>\n                                                                    <ng-template #notInPerson>\n                                                                        <img src=\"assets/images/deactive_icon.png\"\n                                                                            alt=\"Not In-Person\" />\n                                                                    </ng-template>\n                                                                </td>\n\n                                                                <!-- Details Button -->\n                                                                <td>\n                                                                    <button\n                                                                        class=\"btn btn-sm btn-outline-info\">Details</button>\n                                                                </td>\n\n                                                                <!-- Resp. ID -->\n                                                                <td class=\"font\">677878</td>\n\n                                                                <!-- Resp. Text Button -->\n                                                                <td>\n                                                                    <button\n                                                                        class=\"btn btn-sm btn-outline-secondary\">Resp.\n                                                                        Text</button>\n                                                                </td>\n\n                                                                <!-- Action Icons -->\n                                                                <td class=\"action_icon\">\n                                                                    <span class=\"delete-icon\" title=\"Person\">\n                                                                        <i class=\"fa fa-user\"></i>\n                                                                    </span>\n                                                                    <span class=\"delete-icon\" title=\"Message\">\n                                                                        <i class=\"fa fa-envelope\"></i>\n                                                                    </span>\n                                                                    <span class=\"delete-icon\" title=\"Handshake\">\n                                                                        <i class=\"fa fa-handshake-o\"></i>\n                                                                    </span>\n                                                                </td>\n                                                            </tr>\n                                                        </tbody>\n                                                    </table>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n\n                                </tab>\n\n                            </tabset>\n\n                        </tab>\n\n                        <tab heading=\"Message Centre\" id=\"tab12\">\n\n                        </tab>\n\n                        <tab heading=\"My Post Engagement Effectiveness\" id=\"tab13\">\n\n                        </tab>\n\n                        <tab heading=\"Turbo Push Effectiveness\" id=\"tab14\">\n\n                        </tab>\n\n                    </tabset>\n\n                </div>\n                \n            </div>\n            <br><br>\n            <ngx-spinner template=\"<img src='assets/images/icons/please_wait.gif' />\">\n            </ngx-spinner>\n        </div>\n    </div>\n</div>\n\n\n<ng-template #profile>\n\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title pull-left\">Profile</h4>\n        <button type=\"button\" class=\"btn-close close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n            <span aria-hidden=\"true\" class=\"visually-hidden\">&times;</span>\n        </button>\n    </div>\n\n    <div class=\"modal-body\">\n\n        <tabset class=\"styled-tabs\">\n\n            <!-- Main Profile -->\n            <tab heading=\"Main Profile\" id=\"tab1\">\n                <div class=\"profilesection\">\n                    <div class=\"profile-row\">\n                        <div class=\"profile-image-big\">\n                            <img src=\"../../../assets/images/profileMyConnect.webp\" alt=\"Rakesh Arora\">\n                        </div>\n                        <div class=\"profile-details\">\n                            <p class=\"profile-name\">Rakesh Arora</p>\n                            <p class=\"profile-title\">Promoter</p>\n                            <p class=\"profile-verified\"><strong>Verified:</strong> \u2705</p>\n                        </div>\n                    </div>\n\n                    <h4>Moon Light Shades Pvt. Ltd</h4>\n\n                    <p><strong>Category: </strong>Manufacturers</p>\n                    <p><strong>Industry: </strong>Consumer Appliances</p>\n                    <p><strong>Store Code: </strong>1100012100</p>\n                    <p><strong>Employees: </strong>200</p>\n                    <p><strong>Available on Market: </strong>\u2705</p>\n\n                </div>\n            </tab>\n\n            <!-- Management -->\n            <tab heading=\"Management\" id=\"tab2\">\n                <div style=\"display:flex;gap:20px;\">\n                    <div>\n                        <img class=\"profile\" src=\"../../../assets/images/profileMyConnect.webp\" alt=\"Rakesh Arora\"\n                            style=\"width:80px;border-radius:50%;\">\n                        <p>Rakesh Arora</p>\n                        <small>about</small>\n                    </div>\n                    <div>\n                        <img class=\"profile\" src=\"../../../assets/images/profileMyConnect.webp\" alt=\"Rakesh Arora\"\n                            style=\"width:80px;border-radius:50%;\">\n                        <p>Rakesh Arora</p>\n                        <small>about</small>\n                    </div>\n                    <div>\n                        <img class=\"profile\" src=\"../../../assets/images/profileMyConnect.webp\" alt=\"Rakesh Arora\"\n                            style=\"width:80px;border-radius:50%;\">\n                        <p>Rakesh Arora</p>\n                        <small>about</small>\n                    </div>\n                    <div>\n                        <img class=\"profile\" src=\"../../../assets/images/profileMyConnect.webp\" alt=\"Rakesh Arora\"\n                            style=\"width:80px;border-radius:50%;\">\n                        <p>Rakesh Arora</p>\n                        <small>about</small>\n                    </div>\n                </div>\n            </tab>\n\n            <!-- Prod & Services -->\n            <tab heading=\"Prod & Services\" id=\"tab3\">\n                <table class=\"table\">\n                    <thead>\n                        <tr>\n                            <th>S#</th>\n                            <th>Code</th>\n                            <th>Product / Service</th>\n                            <th>Image</th>\n                            <th>Action</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>01</td>\n                            <td>2567</td>\n                            <td>Leather Jacket Manufacturing</td>\n                            <td>\n                                <img src=\"https://www.saintg.in/cdn/shop/files/Untitled-2.5_c9f0474e-67c2-4774-b290-ba921b70af0e.jpg?v=1745314291&width=1080\"\n                                    alt=\"Leather Jacket\" style=\"width:50px; border-radius:4px;\">\n                            </td>\n                            <td>\n                                <button class=\"btn btn-sm btn-outline-info\">Detail</button>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>02</td>\n                            <td>790</td>\n                            <td>Leather Bags Manufacturing</td>\n                            <td>\n                                <img src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWIOKt_FpzmStMjbeZqI0iwVWJg3fLzSsF2A&s\"\n                                    alt=\"Leather Bag\" style=\"width:50px; border-radius:4px;\">\n                            </td>\n                            <td>\n                                <button class=\"btn btn-sm btn-outline-info\">Detail</button>\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </tab>\n\n\n            <!-- Media & Cert -->\n            <tab heading=\"Media & Cert\" id=\"tab4\">\n                <div style=\"display:flex;gap:20px;\">\n                    <div>\n                        <img src=\"https://images.unsplash.com/photo-1604719312566-8912e9227c6a?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D\"\n                            alt=\"Our Store\" style=\"width:150px;\">\n                        <br>\n                        <p>1890 Our Store</p>\n                    </div>\n                    <div>\n                        <img src=\"https://designdesk.in/wp-content/uploads/2017/01/AECOM-Lobby.jpg\"\n                            alt=\"Back Office Reception\" style=\"width:150px;\">\n                        <br>\n                        <p>890 Back office Reception</p>\n                    </div>\n                </div>\n            </tab>\n\n            <!-- Clients -->\n            <tab heading=\"Clients\" id=\"tab5\">\n                <div style=\"display:flex;gap:20px;\">\n                    <div>\n                        <img class=\"profile\" src=\"../../../assets/images/profileMyConnect.webp\" alt=\"CEO\"\n                            style=\"width:80px;border-radius:50%;\">\n                        <p><strong>LML Exports</strong></p>\n                        <p>Excellent Job done<br>Ravi Kumar</p>\n                    </div>\n                    <div>\n                        <img class=\"profile\" src=\"../../../assets/images/profileMyConnect.webp\" alt=\"CEO\"\n                            style=\"width:80px;border-radius:50%;\">\n                        <p><strong>Finolex Industries</strong></p>\n                        <p>I am satisfied with jobwork</p>\n                    </div>\n                </div>\n            </tab>\n\n            <!-- GEO-Ser -->\n            <tab heading=\"GEO-Ser\" id=\"tab6\">\n                <div>\n                    <p><strong>India: </strong>UP</p>\n                    <p><strong>India: </strong>Maharashtra</p>\n                    <p><strong>India: </strong>Punjab</p>\n                </div>\n            </tab>\n\n        </tabset>\n\n    </div>\n\n</ng-template>", styles: [".toplevel {\r\n    background: #fff;\r\n    padding: 20px;\r\n    margin-bottom: 15px;\r\n    margin-top: 10px;\r\n    border: 1px solid #ddd;\r\n    border-radius: 5px;\r\n}\r\n\r\n.table-font-size th,\r\n.table-font-size td {\r\n    font-size: 13px;\r\n    /* Change to your desired size */\r\n}\r\n\r\n.vipDiv {\r\n    background: #f8f9fa;\r\n    padding: 15px;\r\n    border-radius: 3px;\r\n    min-height: 210px;\r\n}\r\n\r\n.orderStatus td {\r\n    vertical-align: middle;\r\n}\r\n\r\n.orderStatus td .btn {\r\n    font-size: 13px;\r\n    padding: 4px 10px;\r\n}\r\n\r\n.orderStatus small {\r\n    color: #c50f20;\r\n    font-size: 90%;\r\n    font-weight: 600;\r\n}\r\n\r\n.bottom-btn {\r\n    float: right;\r\n}\r\n\r\n.alert.alert-success {\r\n    padding: 5px 10px;\r\n}\r\n\r\n.alert .fa {\r\n    font-size: 25px;\r\n    vertical-align: middle;\r\n    margin-left: 5px;\r\n}\r\n\r\n.orderStatus {\r\n    .card-header {\r\n        border: 0;\r\n    }\r\n\r\n    .card-body {\r\n        padding: 0;\r\n        overflow: auto;\r\n    }\r\n}\r\n\r\nh3.head-title {\r\n    font-size: 22px;\r\n    margin: 20px 0;\r\n    font-weight: bold;\r\n}\r\n\r\n.icon .fa {\r\n    font-size: 20px;\r\n    vertical-align: top;\r\n    color: #17a2b8;\r\n}\r\n\r\n.orderStatus .icon img {\r\n    max-width: 25px;\r\n}\r\n\r\n.orderStatus .btn {\r\n    background: #021422;\r\n    border-radius: 25px;\r\n    color: #fff;\r\n    font-size: 11px !important;\r\n    border: 1px solid #21333c;\r\n\r\n    i {\r\n        font-size: 18px;\r\n        vertical-align: middle;\r\n        padding-right: 5px;\r\n    }\r\n}\r\n\r\nbutton.btn.view-del-btn {\r\n    background: #63030c !important;\r\n}\r\n\r\n.table thead th {\r\n    border: 0;\r\n}\r\n\r\n.toplevel,\r\n.card {\r\n    padding: 0 20px 0;\r\n}\r\n\r\n.table th {\r\n    padding: 8px 5px;\r\n    text-align: center;\r\n    line-height: 13px;\r\n    font-weight: 600;\r\n    font-size: 13px;\r\n    border-top: 0;\r\n}\r\n\r\n.table td {\r\n    text-align: center;\r\n    font-size: 12px;\r\n    line-height: 15px;\r\n    padding: 10px 5px;\r\n}\r\n\r\ntd.icon {\r\n    padding: 0 !important;\r\n}\r\n\r\nbutton.btn.custom-btn {\r\n    min-width: 100px;\r\n}\r\n\r\n::ng-deep .nav-tabs .nav-link {\r\n    font-size: 11px;\r\n    /* Adjust as needed */\r\n}\r\n\r\nbutton.btn.custom-btn-white {\r\n    min-width: 100px;\r\n    background: #ffffff;\r\n    border: 1px solid #c50f20;\r\n    color: #c50f20;\r\n    font-weight: 600;\r\n\r\n    &:hover {\r\n        background: #c50f20;\r\n        color: #ffffff;\r\n    }\r\n}\r\n\r\n.input-group-prepend+.invalid-feedback {\r\n    top: 35px;\r\n}\r\n\r\n.card-header {\r\n    padding: 10px 15px;\r\n    background: #63030c;\r\n    font-size: 12px;\r\n    color: #fff;\r\n    font-weight: 500;\r\n\r\n    span {\r\n        float: left;\r\n    }\r\n\r\n    span+span {\r\n        float: right;\r\n    }\r\n}\r\n\r\n.card-header img {\r\n    width: 16px;\r\n    margin-left: 3px;\r\n}\r\n\r\n.subcard-header {\r\n    padding: 8px 12px;\r\n    background: #63030c;\r\n    font-size: 10px;\r\n    color: #fff;\r\n    font-weight: 500;\r\n\r\n    span {\r\n        float: left;\r\n    }\r\n\r\n    span+span {\r\n        float: right;\r\n    }\r\n}\r\n\r\n.subcard-header img {\r\n    width: 16px;\r\n    margin-left: 3px;\r\n}\r\n\r\n.icofont-info-circle {\r\n    font-size: 20px;\r\n    vertical-align: middle;\r\n    margin-left: 3px;\r\n}\r\n\r\n.orderList thead tr {\r\n    background: #ff000029;\r\n}\r\n\r\n.orderList {\r\n    border-collapse: collapse;\r\n    border: 1px solid #ddd;\r\n    margin: 5px 0;\r\n}\r\n\r\n.orderList td {\r\n    border: 1px solid #ddd;\r\n}\r\n\r\n.orderList tr th {\r\n    background: #212529;\r\n    color: #fff;\r\n    vertical-align: middle;\r\n}\r\n\r\n.no-border td {\r\n    border: 0 !important;\r\n    text-align: right !important;\r\n    font-weight: 600;\r\n    font-size: 12px !important;\r\n}\r\n\r\nsmall.view-customer {\r\n    display: block;\r\n    text-decoration: underline;\r\n    cursor: pointer;\r\n}\r\n\r\nbutton.btn.view-ord-btn {\r\n    min-width: 112px;\r\n}\r\n\r\nbutton.btn.view-del-btn {\r\n    min-width: 125px;\r\n}\r\n\r\n.card-body.no_data_available {\r\n    text-align: center;\r\n    color: #bd2130;\r\n\r\n    img {\r\n        display: block;\r\n        text-align: center;\r\n        margin: 0 auto 5px;\r\n        max-width: 30px;\r\n    }\r\n}\r\n\r\n\r\nsmall.viewCart {\r\n    text-decoration: underline;\r\n    cursor: pointer;\r\n}\r\n\r\n.hr {\r\n    border: none;\r\n    border-top: 1.5px solid #d1d1d1;\r\n    margin: 16px 0;\r\n    height: 0;\r\n    width: 100%;\r\n}\r\n\r\nh1.heading-title {\r\n    margin: 20px 0 0;\r\n}\r\n\r\n.heading h2 {\r\n    padding: 10px 5px 10px;\r\n    font-size: 20px;\r\n}\r\n\r\n.row.topLevel {\r\n    background: #fff;\r\n    padding: 20px 0;\r\n    margin: 0;\r\n    border-radius: 5px;\r\n}\r\n\r\n.heading.store-domain {\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.store-domain div {\r\n    display: inline-block;\r\n    margin-right: 20px;\r\n}\r\n\r\n.store-domain span {\r\n    background: #ddd;\r\n    padding: 5px 20px;\r\n    font-size: 13px;\r\n    border-radius: 20px;\r\n    display: inline-block;\r\n    font-weight: bold;\r\n    margin-left: 5px;\r\n}\r\n\r\n.store_id {\r\n    background: #ddd;\r\n    padding: 5px 20px;\r\n    border-radius: 20px;\r\n    font-size: 13px;\r\n    font-weight: 700;\r\n    float: right;\r\n    margin-top: -40px;\r\n}\r\n\r\n.box {\r\n    width: 100%;\r\n    overflow: hidden;\r\n    box-shadow: 0 0 4px 0px #eee;\r\n    margin: 20px 0 5px;\r\n    border-radius: 4px;\r\n    padding: 10px;\r\n    background: #fff;\r\n}\r\n\r\n.main-content-area .box .col {\r\n    width: 20%;\r\n    float: left;\r\n    padding: 0;\r\n}\r\n\r\n.fa-star:before {\r\n    content: \"\\f005\";\r\n    color: #ff9600;\r\n    margin-right: 5px;\r\n}\r\n\r\n.pro-box {\r\n    box-shadow: 0 0 4px 0 #e9ecef;\r\n    margin: 0 5px 10px;\r\n    overflow: hidden;\r\n    padding: 15px;\r\n    border-radius: 3px;\r\n    position: relative;\r\n    border: 1px solid #dee2e6;\r\n}\r\n\r\n.pro-box img {\r\n    height: 100px;\r\n    width: 100px;\r\n    margin: 30px auto 15px;\r\n    display: block;\r\n}\r\n\r\n.storeitem .p-details {\r\n    margin-bottom: 42px;\r\n}\r\n\r\np.label-txt {\r\n    text-align: center;\r\n    padding: 10px;\r\n    font-size: 14px;\r\n    margin: 0;\r\n}\r\n\r\n.store-available-product .col {\r\n    width: 25% !important;\r\n}\r\n\r\n.selected-productLine h5,\r\n.store-available-product h5 {\r\n    font-size: 16px;\r\n    padding: 0 10px 5px;\r\n}\r\n\r\n.right-field-head {\r\n    float: right;\r\n    margin-top: 10px;\r\n}\r\n\r\n.right-field-head li {\r\n    display: inline-block;\r\n    padding: 0 10px;\r\n}\r\n\r\nspan.video,\r\nspan.doc {\r\n    padding: 8px 15px;\r\n    background: #dee2e6;\r\n    font-size: 12px;\r\n    border-radius: 20px;\r\n}\r\n\r\n.right-field-head .btn {\r\n    font-size: 11px;\r\n    border-radius: 20px;\r\n}\r\n\r\n.bottom-btn .btn {\r\n    line-height: 11px;\r\n}\r\n\r\n.box.prduct-gallery {\r\n    position: relative;\r\n}\r\n\r\n.sample-img {\r\n    position: absolute;\r\n    z-index: 1;\r\n    left: 15%;\r\n    top: 28%;\r\n    transform: rotate(-45deg);\r\n}\r\n\r\np.p-name {\r\n    text-align: center;\r\n    margin: 0;\r\n    font-size: 13px;\r\n    font-weight: 500;\r\n    vertical-align: middle;\r\n}\r\n\r\np.item-id {\r\n    text-align: center;\r\n    position: absolute;\r\n    top: 0;\r\n    background: #212529;\r\n    left: 0;\r\n    font-weight: 600;\r\n    color: #fff;\r\n    border-radius: 0 0 5px;\r\n    font-size: 11px;\r\n    padding: 3px 6px;\r\n}\r\n\r\nspan.price {\r\n    font-size: 12px;\r\n    padding: 7px 10px 0;\r\n    float: left;\r\n    font-weight: 600;\r\n    line-height: 20px;\r\n}\r\n\r\n.item-id b {\r\n    font-weight: 600;\r\n}\r\n\r\n.instock {\r\n    font-size: 12px;\r\n    text-align: center;\r\n    margin: 0 0 3px;\r\n    position: absolute;\r\n    top: 5%;\r\n    box-shadow: 0 0 30px 0 rgb(82 63 105 / 10%);\r\n    left: 70%;\r\n    background: rgb(224 152 152 / 24%);\r\n    width: 50px;\r\n    border: 1px solid rgb(0 0 0 / 10%);\r\n    height: 50px;\r\n    border-radius: 50%;\r\n\r\n    img {\r\n        width: 30px !important;\r\n        height: 30px !important;\r\n        margin: 9px auto;\r\n    }\r\n}\r\n\r\n.pro-box.storeitem.item-box {\r\n    border: 1px solid #dee2e6;\r\n    height: 300px;\r\n    padding-left: 20px;\r\n    padding-right: 20px;\r\n}\r\n\r\nh1.heading-title {\r\n    font-size: 20px;\r\n    text-transform: uppercase;\r\n    font-weight: 700;\r\n    color: #ff7900;\r\n    position: relative;\r\n    margin-bottom: 10px;\r\n    width: 100%;\r\n\r\n    span {\r\n        font-size: 10px;\r\n        text-transform: inherit;\r\n        background: #495057;\r\n        color: #fff;\r\n        padding: 10px 15px;\r\n        border-radius: 25px;\r\n    }\r\n}\r\n\r\nh1.heading-title img {\r\n    max-width: 65px;\r\n    margin-right: 5px;\r\n}\r\n\r\nh1.heading-title small {\r\n    display: inline-block;\r\n    font-weight: 400;\r\n    font-size: 13px;\r\n    position: absolute;\r\n    left: 80px;\r\n    bottom: 4px;\r\n    color: grey;\r\n}\r\n\r\n.offerDiv {\r\n    position: absolute;\r\n    top: 5px;\r\n    right: 5px;\r\n    font-size: 10px;\r\n    background: #dc3545;\r\n    line-height: 10px;\r\n    font-weight: 700;\r\n    width: 35px;\r\n    height: 35px;\r\n    border-radius: 50%;\r\n    padding: 9px;\r\n    text-align: center;\r\n    color: #fff;\r\n}\r\n\r\n.offerDiv small {\r\n    display: block;\r\n}\r\n\r\nspan.price.strike-price {\r\n    color: #ccc;\r\n    text-decoration: line-through;\r\n}\r\n\r\n.row.text-level {\r\n    margin: 0 -10px 10px;\r\n}\r\n\r\n.store-add-remove {\r\n    text-align: center;\r\n    padding: 10px;\r\n    float: left;\r\n    width: 100%;\r\n}\r\n\r\n.row.product-slider-box {\r\n    border-bottom: 5px solid #ddd;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.carousel-inner {\r\n    height: 278px;\r\n}\r\n\r\n.carousel-item {\r\n    margin-right: 0;\r\n    border: 1px solid #f8f9fa;\r\n    background: #fff;\r\n}\r\n\r\n.product-slider-box .domain-product {\r\n    max-width: 23%;\r\n}\r\n\r\n.product-slider-box .sub-domain-product {\r\n    max-width: 77%;\r\n}\r\n\r\n.store-add-remove .btn {\r\n    font-size: 11px;\r\n    text-align: center;\r\n    float: left;\r\n    transition: all .5s;\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n    min-width: 65px;\r\n}\r\n\r\n.store-add-remove .btn+.btn {\r\n    float: right;\r\n}\r\n\r\n.item-subitem-list .pro-box {\r\n    width: 95%;\r\n    overflow: auto;\r\n    height: 280px;\r\n}\r\n\r\n.item-subitem-list li {\r\n    width: 100%;\r\n    float: left;\r\n}\r\n\r\n.item-box {\r\n    max-width: 225px;\r\n    width: 100%;\r\n    float: left;\r\n}\r\n\r\n.sub-item-box {\r\n    width: 100%;\r\n    float: left;\r\n    max-width: 225px;\r\n}\r\n\r\n.sub-item-box .add_to_cart button.btn {\r\n    background: #000064;\r\n    height: 35px;\r\n    font-size: 13px;\r\n    line-height: 16px;\r\n    color: #fff;\r\n    border-radius: 25px;\r\n    margin: 10px 0 0;\r\n    width: 100%;\r\n    text-align: center;\r\n}\r\n\r\n.add_to_cart {\r\n    .remove-btn {\r\n        border-radius: 50%;\r\n        background: #05054ead !important;\r\n        color: #fff;\r\n        height: 35px;\r\n        padding: 0;\r\n    }\r\n\r\n    .btn+.btn {\r\n        width: 100%;\r\n        border: 0;\r\n        border-radius: 30px;\r\n        font-size: 15px;\r\n        line-height: normal;\r\n        font-weight: 600;\r\n    }\r\n}\r\n\r\n.middle-arrow {\r\n    float: left;\r\n    width: 30px;\r\n    height: 50px;\r\n    font-size: 40px;\r\n    margin-top: 10%;\r\n    color: #dee2e6;\r\n    text-align: center;\r\n}\r\n\r\n.price-details {\r\n    float: left;\r\n    width: 100%;\r\n    margin-bottom: 10px;\r\n    font-size: 15px;\r\n    line-height: normal;\r\n    font-weight: 600;\r\n\r\n    .unit-price {\r\n        float: left;\r\n        width: 42%;\r\n    }\r\n}\r\n\r\n.unit-price span {\r\n    display: block;\r\n    font-size: 12px;\r\n    font-weight: 400;\r\n}\r\n\r\n.whole-sale-price {\r\n    float: right;\r\n    width: 58%;\r\n    text-align: right;\r\n\r\n    span {\r\n        font-size: 12px;\r\n        display: block;\r\n        font-weight: 400;\r\n    }\r\n}\r\n\r\n.add_to_cart {\r\n    clear: both;\r\n}\r\n\r\n.subItem-field {\r\n    width: calc(100% - 280px);\r\n    float: left;\r\n}\r\n\r\n.item img {\r\n    width: 100%;\r\n}\r\n\r\n.pro-box.active {\r\n    border: 1px solid #63030c;\r\n}\r\n\r\n.p-details .form-control {\r\n    font-size: 13px;\r\n    padding: 0 5px;\r\n    min-height: 25px;\r\n    height: 25px;\r\n    text-align: center;\r\n}\r\n\r\n.p-details .form-group label {\r\n    margin-bottom: 0;\r\n    font-weight: 400;\r\n    line-height: normal;\r\n    padding-top: 2px;\r\n    padding-bottom: 2px;\r\n}\r\n\r\n.p-details .form-group {\r\n    margin-bottom: 4px;\r\n}\r\n\r\n.sub-item-box img {\r\n    margin-top: 5px !important;\r\n}\r\n\r\n.p-details p {\r\n    font-size: 12px;\r\n    line-height: 14px;\r\n}\r\n\r\n.add-stock input {\r\n    display: inline-block !important;\r\n    width: 60px !important;\r\n    margin-left: 5px;\r\n    vertical-align: middle;\r\n}\r\n\r\n.min-alert-count input {\r\n    width: 35px;\r\n    margin-left: 5px;\r\n    display: inline-block;\r\n    margin-right: 4px;\r\n}\r\n\r\n.d-flex span+span {\r\n    margin-left: auto;\r\n    font-weight: 600;\r\n    width: 60px;\r\n\r\n    i {\r\n        font-size: 16px;\r\n        color: #bd2130;\r\n        display: inline-block;\r\n        position: relative;\r\n        top: 2px;\r\n        cursor: pointer;\r\n    }\r\n}\r\n\r\n.sub-item-box .pro-box img {\r\n    height: 55px;\r\n    width: 55px;\r\n    margin: 18px auto 8px;\r\n}\r\n\r\n.links a {\r\n    display: block;\r\n    color: #17a2b8 !important;\r\n    text-decoration: underline !important;\r\n    font-size: 12px;\r\n    cursor: pointer;\r\n}\r\n\r\n.modal-header i {\r\n    margin: 5px 0;\r\n    color: #bd2130;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.field {\r\n    margin-bottom: 10px;\r\n\r\n    select {\r\n        border: 1px solid #ddd;\r\n        border-radius: 3px;\r\n        height: 26px;\r\n        font-size: 12px;\r\n        margin-left: 10px;\r\n        margin-top: -4px;\r\n        width: 60px;\r\n    }\r\n}\r\n\r\n.topcontent {\r\n    font-size: larger;\r\n}\r\n\r\n.actdct_icon img {\r\n    max-width: 45px;\r\n}\r\n\r\n.action_icon i {\r\n    font-size: 20px;\r\n    color: #bd2130;\r\n    margin: 0 10px 0 10px;\r\n}\r\n\r\n.btn-space {\r\n    margin-right: 10px;\r\n}\r\n\r\n.comm-desk-title {\r\n    font-size: 1.3rem;\r\n    font-weight: 600;\r\n    color: #222;\r\n    letter-spacing: 0.5px;\r\n}\r\n\r\n.comm-desk-title small {\r\n    font-size: 1.3rem;\r\n    font-weight: 600;\r\n    color: #ff7900;\r\n}\r\n\r\n.smallfont {\r\n    font-size: 0.8rem;\r\n}\r\n\r\n.styled-tabs {\r\n    font-family: Arial, sans-serif;\r\n}\r\n\r\n.styled-tabs tab {\r\n    padding: 20px;\r\n    background: #ffffff;\r\n    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);\r\n}\r\n\r\n.profile {\r\n    height: 80px;             \r\n    object-fit: cover;         \r\n    border-radius: 50%;        \r\n    border: 2px solid #eee;\r\n    padding: 3px;\r\n    background: #fafafa;\r\n    transition: transform 0.2s ease-in-out;\r\n}\r\n\r\n.styled-tabs tab h4 {\r\n    margin-top: 10px;\r\n    font-size: 1.2rem;\r\n    font-weight: bold;\r\n    color: #333;\r\n}\r\n\r\n.styled-tabs tab p {\r\n    margin: 4px 0;\r\n    font-size: 0.95rem;\r\n    color: #555;\r\n}\r\n\r\n.styled-tabs tab button {\r\n    background: #007bff;\r\n    color: white;\r\n    border: none;\r\n    padding: 6px 12px;\r\n    border-radius: 4px;\r\n    cursor: pointer;\r\n    font-size: 0.9rem;\r\n    transition: background 0.2s ease;\r\n}\r\n\r\n.styled-tabs tab button:hover {\r\n    background: #0056b3;\r\n}\r\n\r\n.styled-tabs tab div[style*=\"display:flex\"] {\r\n    flex-wrap: wrap;\r\n}\r\n\r\n.styled-tabs tab div[style*=\"gap\"]>div {\r\n    background: #f9f9f9;\r\n    padding: 10px;\r\n    border-radius: 6px;\r\n    text-align: center;\r\n    flex: 1;\r\n    min-width: 120px;\r\n}\r\n\r\n.profile-row {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 20px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.profile-image img {\r\n    width: 80px;\r\n    height: 80px;\r\n    border-radius: 50%;\r\n    border: 2px solid #eee;\r\n    object-fit: cover;\r\n}\r\n\r\n.profile-image-big img {\r\n    width: 100px;\r\n    height: 100px;\r\n    border-radius: 50%;\r\n    border: 2px solid #eee;\r\n    object-fit: cover;\r\n}\r\n\r\n.profile-details {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n}\r\n\r\n.profile-name {\r\n    font-size: 1.25rem;\r\n    font-weight: bold;\r\n    margin: 0;\r\n    color: #222;\r\n}\r\n\r\n.profile-title {\r\n    font-size: 1rem;\r\n    font-weight: 500;\r\n    color: #666;\r\n    margin: 3px 0;\r\n}\r\n\r\n.profile-verified {\r\n    font-size: 0.95rem;\r\n    color: #28a745;\r\n    font-weight: 500;\r\n    margin: 0;\r\n}\r\n\r\n.profilesection {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column; /* Stack vertically */\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 2px;\r\n}"] }]
    }], function () { return [{ type: i1.BsModalService }]; }, null); })();
//# sourceMappingURL=communincation-desk.component.js.map