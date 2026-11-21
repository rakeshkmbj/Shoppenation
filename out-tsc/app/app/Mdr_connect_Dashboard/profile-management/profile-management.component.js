import { __awaiter } from "tslib";
import { Component, Output, EventEmitter } from '@angular/core';
import { Validators } from '@angular/forms';
import { firstValueFrom } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "ngx-bootstrap/modal";
import * as i2 from "@angular/forms";
import * as i3 from "src/app/services/api.service";
import * as i4 from "ngx-toastr";
import * as i5 from "@angular/common";
import * as i6 from "ngx-bootstrap/tabs";
import * as i7 from "ngx-spinner";
function ProfileManagementComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 79);
    i0.ɵɵtext(1, " Phone number must be between 10 and 15 digits. ");
    i0.ɵɵelementEnd();
} }
function ProfileManagementComponent_div_43_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 79);
    i0.ɵɵtext(1, " Please enter a valid email address. ");
    i0.ɵɵelementEnd();
} }
function ProfileManagementComponent_input_82_Template(rf, ctx) { if (rf & 1) {
    const _r48 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 80);
    i0.ɵɵlistener("change", function ProfileManagementComponent_input_82_Template_input_change_0_listener($event) { i0.ɵɵrestoreView(_r48); const ctx_r47 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r47.onOrgLogoChange($event)); });
    i0.ɵɵelementEnd();
} }
function ProfileManagementComponent_div_83_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 81);
    i0.ɵɵelement(1, "img", 82);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("src", ctx_r3.orgLogoUrl, i0.ɵɵsanitizeUrl);
} }
function ProfileManagementComponent_div_84_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 81);
    i0.ɵɵelement(1, "img", 83);
    i0.ɵɵpipe(2, "slice");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    let tmp_0_0;
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate2("src", "", ctx_r4.imgURL, "", i0.ɵɵpipeBind3(2, 2, (tmp_0_0 = ctx_r4.mainProfileForm.get("Corp_Logo")) == null ? null : tmp_0_0.value, 1, -4), "jpeg", i0.ɵɵsanitizeUrl);
} }
function ProfileManagementComponent_input_89_Template(rf, ctx) { if (rf & 1) {
    const _r50 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 84);
    i0.ɵɵlistener("change", function ProfileManagementComponent_input_89_Template_input_change_0_listener($event) { i0.ɵɵrestoreView(_r50); const ctx_r49 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r49.onProfilePicChange($event)); });
    i0.ɵɵelementEnd();
} }
function ProfileManagementComponent_div_90_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 81);
    i0.ɵɵelement(1, "img", 83);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("src", ctx_r6.profilePicUrl, i0.ɵɵsanitizeUrl);
} }
function ProfileManagementComponent_div_91_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 81);
    i0.ɵɵelement(1, "img", 83);
    i0.ɵɵpipe(2, "slice");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext();
    let tmp_0_0;
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate2("src", "", ctx_r7.imgURL, "", i0.ɵɵpipeBind3(2, 2, (tmp_0_0 = ctx_r7.mainProfileForm.get("MainProfile_Mngmt_Pic")) == null ? null : tmp_0_0.value, 1, -4), "jpeg", i0.ɵɵsanitizeUrl);
} }
function ProfileManagementComponent_button_94_Template(rf, ctx) { if (rf & 1) {
    const _r52 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 85);
    i0.ɵɵlistener("click", function ProfileManagementComponent_button_94_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r52); const ctx_r51 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r51.onSubmit()); });
    i0.ɵɵtext(1, " Add Profile ");
    i0.ɵɵelementEnd();
} }
function ProfileManagementComponent_button_95_Template(rf, ctx) { if (rf & 1) {
    const _r54 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 49);
    i0.ɵɵlistener("click", function ProfileManagementComponent_button_95_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r54); const ctx_r53 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r53.enableEditing()); });
    i0.ɵɵtext(1, " Edit Profile ");
    i0.ɵɵelementEnd();
} }
function ProfileManagementComponent_button_96_Template(rf, ctx) { if (rf & 1) {
    const _r56 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 86);
    i0.ɵɵlistener("click", function ProfileManagementComponent_button_96_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r56); const ctx_r55 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r55.editMainProfile()); });
    i0.ɵɵtext(1, " Save Profile ");
    i0.ɵɵelementEnd();
} }
function ProfileManagementComponent_tr_131_span_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵelement(1, "img", 92);
    i0.ɵɵelementEnd();
} }
function ProfileManagementComponent_tr_131_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 93);
} }
function ProfileManagementComponent_tr_131_Template(rf, ctx) { if (rf & 1) {
    const _r63 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr")(1, "td");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "td", 61);
    i0.ɵɵtemplate(6, ProfileManagementComponent_tr_131_span_6_Template, 2, 0, "span", 62);
    i0.ɵɵtemplate(7, ProfileManagementComponent_tr_131_ng_template_7_Template, 1, 0, "ng-template", null, 87, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "td");
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "td");
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "td");
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "td")(16, "button", 88);
    i0.ɵɵlistener("click", function ProfileManagementComponent_tr_131_Template_button_click_16_listener() { const restoredCtx = i0.ɵɵrestoreView(_r63); const profile_r57 = restoredCtx.$implicit; const ctx_r62 = i0.ɵɵnextContext(); const _r39 = i0.ɵɵreference(374); return i0.ɵɵresetView(ctx_r62.showDetails(profile_r57, _r39)); });
    i0.ɵɵtext(17, " Detail ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(18, "td");
    i0.ɵɵelement(19, "img", 89);
    i0.ɵɵpipe(20, "slice");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "td", 90)(22, "i", 91);
    i0.ɵɵlistener("click", function ProfileManagementComponent_tr_131_Template_i_click_22_listener() { const restoredCtx = i0.ɵɵrestoreView(_r63); const profile_r57 = restoredCtx.$implicit; const ctx_r64 = i0.ɵɵnextContext(); const _r21 = i0.ɵɵreference(356); return i0.ɵɵresetView(ctx_r64.openeditKeyManagementProfile(profile_r57, _r21)); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const profile_r57 = ctx.$implicit;
    const i_r58 = ctx.index;
    const _r60 = i0.ɵɵreference(8);
    const ctx_r11 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i_r58 + 1);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(profile_r57.MDR_TOP_MANAGEMENT_ID);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", profile_r57.MDR_TOP_MNGMT_ACTIV_FLG)("ngIfElse", _r60);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(profile_r57.MDR_TOP_MNGMT_FIRST_NAME);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(profile_r57.MDR_TOP_MNGMT_LAST_NAME);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(profile_r57.MDR_TOP_MNGMT_CORP_TITLE);
    i0.ɵɵadvance(5);
    i0.ɵɵpropertyInterpolate2("src", "", ctx_r11.imgURL, "", i0.ɵɵpipeBind3(20, 9, profile_r57.MDR_TOP_MNGMT_PIC_IMAGE, 1, -4), "jpeg", i0.ɵɵsanitizeUrl);
} }
function ProfileManagementComponent_tbody_161_tr_1_span_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵelement(1, "img", 92);
    i0.ɵɵelementEnd();
} }
function ProfileManagementComponent_tbody_161_tr_1_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 93);
} }
function ProfileManagementComponent_tbody_161_tr_1_Template(rf, ctx) { if (rf & 1) {
    const _r72 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr")(1, "td");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "td", 61);
    i0.ɵɵtemplate(6, ProfileManagementComponent_tbody_161_tr_1_span_6_Template, 2, 0, "span", 62);
    i0.ɵɵtemplate(7, ProfileManagementComponent_tbody_161_tr_1_ng_template_7_Template, 1, 0, "ng-template", null, 63, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "td")(10, "button", 88);
    i0.ɵɵlistener("click", function ProfileManagementComponent_tbody_161_tr_1_Template_button_click_10_listener() { const restoredCtx = i0.ɵɵrestoreView(_r72); const media_r66 = restoredCtx.$implicit; const ctx_r71 = i0.ɵɵnextContext(2); const _r41 = i0.ɵɵreference(376); return i0.ɵɵresetView(ctx_r71.showDetails(media_r66, _r41)); });
    i0.ɵɵtext(11, " Detail ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "td");
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "td");
    i0.ɵɵelement(15, "img", 94);
    i0.ɵɵpipe(16, "slice");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "td", 90)(18, "i", 91);
    i0.ɵɵlistener("click", function ProfileManagementComponent_tbody_161_tr_1_Template_i_click_18_listener() { const restoredCtx = i0.ɵɵrestoreView(_r72); const media_r66 = restoredCtx.$implicit; const ctx_r73 = i0.ɵɵnextContext(2); const _r25 = i0.ɵɵreference(360); return i0.ɵɵresetView(ctx_r73.openeditMediaCerification(media_r66, _r25)); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const media_r66 = ctx.$implicit;
    const i_r67 = ctx.index;
    const _r69 = i0.ɵɵreference(8);
    const ctx_r65 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i_r67 + 1);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(media_r66.MDR_MEDIA_ID);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", media_r66.MDR_MEDIA_ACTIV_FLG)("ngIfElse", _r69);
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(media_r66.MDR_MEDIA_HEAD_TXT);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("src", ctx_r65.imgURL + i0.ɵɵpipeBind2(16, 6, media_r66.MDR_MEDIA_PIC, 1), i0.ɵɵsanitizeUrl);
} }
function ProfileManagementComponent_tbody_161_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tbody");
    i0.ɵɵtemplate(1, ProfileManagementComponent_tbody_161_tr_1_Template, 19, 9, "tr", 52);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r12 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r12.mediaCertificationsArr);
} }
function ProfileManagementComponent_tr_192_span_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵelement(1, "img", 92);
    i0.ɵɵelementEnd();
} }
function ProfileManagementComponent_tr_192_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 93);
} }
function ProfileManagementComponent_tr_192_Template(rf, ctx) { if (rf & 1) {
    const _r80 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr")(1, "td");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "td", 61);
    i0.ɵɵtemplate(6, ProfileManagementComponent_tr_192_span_6_Template, 2, 0, "span", 62);
    i0.ɵɵtemplate(7, ProfileManagementComponent_tr_192_ng_template_7_Template, 1, 0, "ng-template", null, 63, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "td");
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "td");
    i0.ɵɵelement(12, "img", 95);
    i0.ɵɵpipe(13, "slice");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "td")(15, "button", 88);
    i0.ɵɵlistener("click", function ProfileManagementComponent_tr_192_Template_button_click_15_listener() { const restoredCtx = i0.ɵɵrestoreView(_r80); const product_r74 = restoredCtx.$implicit; const ctx_r79 = i0.ɵɵnextContext(); const _r43 = i0.ɵɵreference(378); return i0.ɵɵresetView(ctx_r79.showDetails(product_r74, _r43)); });
    i0.ɵɵtext(16, "Details");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(17, "td", 90)(18, "i", 91);
    i0.ɵɵlistener("click", function ProfileManagementComponent_tr_192_Template_i_click_18_listener() { const restoredCtx = i0.ɵɵrestoreView(_r80); const product_r74 = restoredCtx.$implicit; const ctx_r81 = i0.ɵɵnextContext(); const _r29 = i0.ɵɵreference(364); return i0.ɵɵresetView(ctx_r81.openditProductService(product_r74, _r29)); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const product_r74 = ctx.$implicit;
    const i_r75 = ctx.index;
    const _r77 = i0.ɵɵreference(8);
    const ctx_r13 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i_r75 + 1);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(product_r74.MDR_STORE_PRDCT_SERVC_ID);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", product_r74.MDR_STORE_PRDCT_SERVC_ACTIV_FLG)("ngIfElse", _r77);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(product_r74.MDR_STORE_PRDCT_SERVC_TXT);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("src", ctx_r13.imgURL + i0.ɵɵpipeBind2(13, 6, product_r74.MDR_STORE_PRDCT_SERVC_IMAGE, 1), i0.ɵɵsanitizeUrl);
} }
function ProfileManagementComponent_tr_227_span_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵelement(1, "img", 92);
    i0.ɵɵelementEnd();
} }
function ProfileManagementComponent_tr_227_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 93);
} }
function ProfileManagementComponent_tr_227_Template(rf, ctx) { if (rf & 1) {
    const _r88 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr")(1, "td");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "td", 61);
    i0.ɵɵtemplate(6, ProfileManagementComponent_tr_227_span_6_Template, 2, 0, "span", 62);
    i0.ɵɵtemplate(7, ProfileManagementComponent_tr_227_ng_template_7_Template, 1, 0, "ng-template", null, 63, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "td");
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "td");
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "td");
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "td");
    i0.ɵɵelement(16, "img", 96);
    i0.ɵɵpipe(17, "slice");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "td")(19, "button", 88);
    i0.ɵɵlistener("click", function ProfileManagementComponent_tr_227_Template_button_click_19_listener() { const restoredCtx = i0.ɵɵrestoreView(_r88); const client_r82 = restoredCtx.$implicit; const ctx_r87 = i0.ɵɵnextContext(); const _r45 = i0.ɵɵreference(380); return i0.ɵɵresetView(ctx_r87.showDetails(client_r82, _r45)); });
    i0.ɵɵtext(20);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(21, "td", 90)(22, "i", 97);
    i0.ɵɵlistener("click", function ProfileManagementComponent_tr_227_Template_i_click_22_listener() { const restoredCtx = i0.ɵɵrestoreView(_r88); const client_r82 = restoredCtx.$implicit; const ctx_r89 = i0.ɵɵnextContext(); const _r33 = i0.ɵɵreference(368); return i0.ɵɵresetView(ctx_r89.openeditClientRecommendations(client_r82, _r33)); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const client_r82 = ctx.$implicit;
    const i_r83 = ctx.index;
    const _r85 = i0.ɵɵreference(8);
    const ctx_r14 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i_r83 + 1);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(client_r82.MDR_STORE_CLIENT_ID);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", client_r82.MDR_STORE_CLIENT_ACTIV_FLG)("ngIfElse", _r85);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(client_r82.MDR_STORE_CLIENT_ORG);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", client_r82.MDR_STORE_CLIENT_REP_FIRSTNAME, " ", client_r82.MDR_STORE_CLIENT_REP_LASTNAME, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(client_r82.MDR_STORE_CLIENT_REP_DESIGNATION);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("src", ctx_r14.imgURL + i0.ɵɵpipeBind2(17, 10, client_r82.MDR_STORE_CLIENT_IMAGE, 1), i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", client_r82.MDR_STORE_CLIENT_SAID_ABOUT_TEXT ? "Appre details" : "Nodetails", " ");
} }
function ProfileManagementComponent_tr_260_span_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵelement(1, "img", 92);
    i0.ɵɵelementEnd();
} }
function ProfileManagementComponent_tr_260_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 93);
} }
function ProfileManagementComponent_tr_260_Template(rf, ctx) { if (rf & 1) {
    const _r96 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr")(1, "td");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "td", 61);
    i0.ɵɵtemplate(6, ProfileManagementComponent_tr_260_span_6_Template, 2, 0, "span", 62);
    i0.ɵɵtemplate(7, ProfileManagementComponent_tr_260_ng_template_7_Template, 1, 0, "ng-template", null, 63, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "td");
    i0.ɵɵtext(10);
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
    i0.ɵɵelementStart(17, "td", 90)(18, "i", 97);
    i0.ɵɵlistener("click", function ProfileManagementComponent_tr_260_Template_i_click_18_listener() { const restoredCtx = i0.ɵɵrestoreView(_r96); const geo_r90 = restoredCtx.$implicit; const ctx_r95 = i0.ɵɵnextContext(); const _r37 = i0.ɵɵreference(372); return i0.ɵɵresetView(ctx_r95.openeditgeoServicibilityClient(geo_r90, _r37)); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const geo_r90 = ctx.$implicit;
    const i_r91 = ctx.index;
    const _r93 = i0.ɵɵreference(8);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i_r91 + 1);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(geo_r90.MDR_GEOSERVICIBILITY_CATGRY);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", geo_r90.MDR_GEO_ACTIV_FLG)("ngIfElse", _r93);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(geo_r90.MDR_SERVC_COUNTRY_ID);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(geo_r90.MDR_SERVC_STATE_ID);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(geo_r90.MDR_SERVC_CITY_ID);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(geo_r90.MDR_SERV_PINCODE);
} }
function ProfileManagementComponent_span_302_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵelement(1, "img", 98);
    i0.ɵɵelementEnd();
} }
function ProfileManagementComponent_ng_template_303_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 99);
} }
function ProfileManagementComponent_ng_template_353_div_40_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 81);
    i0.ɵɵelement(1, "img", 83);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r97 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("src", ctx_r97.profilePicUrladdKeyManagement, i0.ɵɵsanitizeUrl);
} }
function ProfileManagementComponent_ng_template_353_Template(rf, ctx) { if (rf & 1) {
    const _r99 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "form", 100);
    i0.ɵɵlistener("ngSubmit", function ProfileManagementComponent_ng_template_353_Template_form_ngSubmit_0_listener() { i0.ɵɵrestoreView(_r99); const ctx_r98 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r98.onaddKeyManagementProfileSubmit()); });
    i0.ɵɵelementStart(1, "div", 101)(2, "h4", 102);
    i0.ɵɵtext(3, "Add Key Management Profile");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "button", 103);
    i0.ɵɵlistener("click", function ProfileManagementComponent_ng_template_353_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r99); const ctx_r100 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r100.modalRef == null ? null : ctx_r100.modalRef.hide()); });
    i0.ɵɵelementStart(5, "span", 104);
    i0.ɵɵtext(6, "\u00D7");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(7, "div", 105)(8, "div", 106)(9, "div", 24)(10, "label");
    i0.ɵɵtext(11, "First Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(12, "input", 107);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "div", 24)(14, "label");
    i0.ɵɵtext(15, "Last Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(16, "input", 108);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(17, "div", 106)(18, "div", 24)(19, "label");
    i0.ɵɵtext(20, "Designation");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(21, "input", 109);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "div", 24)(23, "label");
    i0.ɵɵtext(24, "Active");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "select", 110)(26, "option", 111);
    i0.ɵɵtext(27, "Yes");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "option", 111);
    i0.ɵɵtext(29, "No");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(30, "div", 106)(31, "div", 33)(32, "label");
    i0.ɵɵtext(33, "About");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(34, "textarea", 112);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(35, "div", 113)(36, "div", 24)(37, "label", 40);
    i0.ɵɵtext(38, "Profile Picture");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(39, "input", 84);
    i0.ɵɵlistener("change", function ProfileManagementComponent_ng_template_353_Template_input_change_39_listener($event) { i0.ɵɵrestoreView(_r99); const ctx_r101 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r101.onProfilePicChangeaddKeyManagementProfile($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(40, ProfileManagementComponent_ng_template_353_div_40_Template, 2, 1, "div", 39);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(41, "div", 6)(42, "div", 114)(43, "button", 115);
    i0.ɵɵtext(44, " Add ");
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r20 = i0.ɵɵnextContext();
    i0.ɵɵproperty("formGroup", ctx_r20.keyManagementForm);
    i0.ɵɵadvance(26);
    i0.ɵɵproperty("ngValue", true);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngValue", false);
    i0.ɵɵadvance(12);
    i0.ɵɵproperty("ngIf", ctx_r20.profilePicUrladdKeyManagement);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("disabled", ctx_r20.keyManagementForm.invalid);
} }
function ProfileManagementComponent_ng_template_355_div_40_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 81);
    i0.ɵɵelement(1, "img", 83);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r102 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("src", ctx_r102.profilePicUrladdKeyManagement, i0.ɵɵsanitizeUrl);
} }
function ProfileManagementComponent_ng_template_355_Template(rf, ctx) { if (rf & 1) {
    const _r104 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div")(1, "div", 101)(2, "h4", 102);
    i0.ɵɵtext(3, "Edit Key Management Profile");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "button", 103);
    i0.ɵɵlistener("click", function ProfileManagementComponent_ng_template_355_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r104); const ctx_r103 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r103.modalRef == null ? null : ctx_r103.modalRef.hide()); });
    i0.ɵɵelementStart(5, "span", 104);
    i0.ɵɵtext(6, "\u00D7");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(7, "div", 105)(8, "div", 106)(9, "div", 24)(10, "label");
    i0.ɵɵtext(11, "First Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "input", 116);
    i0.ɵɵlistener("ngModelChange", function ProfileManagementComponent_ng_template_355_Template_input_ngModelChange_12_listener($event) { i0.ɵɵrestoreView(_r104); const ctx_r105 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r105.editkeymanagementprofile.First_Name = $event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "div", 24)(14, "label");
    i0.ɵɵtext(15, "Last Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "input", 117);
    i0.ɵɵlistener("ngModelChange", function ProfileManagementComponent_ng_template_355_Template_input_ngModelChange_16_listener($event) { i0.ɵɵrestoreView(_r104); const ctx_r106 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r106.editkeymanagementprofile.Last_Name = $event); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(17, "div", 106)(18, "div", 24)(19, "label");
    i0.ɵɵtext(20, "Designation");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "input", 118);
    i0.ɵɵlistener("ngModelChange", function ProfileManagementComponent_ng_template_355_Template_input_ngModelChange_21_listener($event) { i0.ɵɵrestoreView(_r104); const ctx_r107 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r107.editkeymanagementprofile.Designation = $event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(22, "div", 24)(23, "label");
    i0.ɵɵtext(24, "Active");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "select", 119);
    i0.ɵɵlistener("ngModelChange", function ProfileManagementComponent_ng_template_355_Template_select_ngModelChange_25_listener($event) { i0.ɵɵrestoreView(_r104); const ctx_r108 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r108.editkeymanagementprofile.Activ_Flg = $event); });
    i0.ɵɵelementStart(26, "option", 111);
    i0.ɵɵtext(27, "Yes");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "option", 111);
    i0.ɵɵtext(29, "No");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(30, "div", 106)(31, "div", 33)(32, "label");
    i0.ɵɵtext(33, "About");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(34, "textarea", 120);
    i0.ɵɵlistener("ngModelChange", function ProfileManagementComponent_ng_template_355_Template_textarea_ngModelChange_34_listener($event) { i0.ɵɵrestoreView(_r104); const ctx_r109 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r109.editkeymanagementprofile.About_Txt = $event); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(35, "div", 113)(36, "div", 24)(37, "label", 40);
    i0.ɵɵtext(38, "Profile Picture");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(39, "input", 84);
    i0.ɵɵlistener("change", function ProfileManagementComponent_ng_template_355_Template_input_change_39_listener($event) { i0.ɵɵrestoreView(_r104); const ctx_r110 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r110.onProfilePicChangeaddKeyManagementProfile($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(40, ProfileManagementComponent_ng_template_355_div_40_Template, 2, 1, "div", 39);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(41, "div", 6)(42, "div", 114)(43, "button", 121);
    i0.ɵɵlistener("click", function ProfileManagementComponent_ng_template_355_Template_button_click_43_listener() { i0.ɵɵrestoreView(_r104); const ctx_r111 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r111.oneditKeyManagementProfileSubmit()); });
    i0.ɵɵtext(44, " Save ");
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r22 = i0.ɵɵnextContext();
    i0.ɵɵadvance(12);
    i0.ɵɵproperty("ngModel", ctx_r22.editkeymanagementprofile.First_Name);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngModel", ctx_r22.editkeymanagementprofile.Last_Name);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngModel", ctx_r22.editkeymanagementprofile.Designation);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngModel", ctx_r22.editkeymanagementprofile.Activ_Flg);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngValue", true);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngValue", false);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngModel", ctx_r22.editkeymanagementprofile.About_Txt);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngIf", ctx_r22.profilePicUrladdKeyManagement);
} }
function ProfileManagementComponent_ng_template_357_div_31_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 81);
    i0.ɵɵelement(1, "img", 126);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r112 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("src", ctx_r112.mediaImageUrl, i0.ɵɵsanitizeUrl);
} }
function ProfileManagementComponent_ng_template_357_Template(rf, ctx) { if (rf & 1) {
    const _r114 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "form", 100);
    i0.ɵɵlistener("ngSubmit", function ProfileManagementComponent_ng_template_357_Template_form_ngSubmit_0_listener() { i0.ɵɵrestoreView(_r114); const ctx_r113 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r113.onSubmitMediaCertification()); });
    i0.ɵɵelementStart(1, "div", 101)(2, "h4", 102);
    i0.ɵɵtext(3, "Add Media & Certifications");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "button", 103);
    i0.ɵɵlistener("click", function ProfileManagementComponent_ng_template_357_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r114); const ctx_r115 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r115.modalRef == null ? null : ctx_r115.modalRef.hide()); });
    i0.ɵɵelementStart(5, "span", 104);
    i0.ɵɵtext(6, "\u00D7");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(7, "div", 105)(8, "div", 106)(9, "div", 24)(10, "label");
    i0.ɵɵtext(11, "Subject");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(12, "input", 122);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "div", 24)(14, "label");
    i0.ɵɵtext(15, "Active");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "select", 110)(17, "option", 111);
    i0.ɵɵtext(18, "Yes");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "option", 111);
    i0.ɵɵtext(20, "No");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(21, "div", 106)(22, "div", 33)(23, "label");
    i0.ɵɵtext(24, "Media Details");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(25, "textarea", 123);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(26, "div", 113)(27, "div", 24)(28, "label", 124);
    i0.ɵɵtext(29, "Media Image");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "input", 125);
    i0.ɵɵlistener("change", function ProfileManagementComponent_ng_template_357_Template_input_change_30_listener($event) { i0.ɵɵrestoreView(_r114); const ctx_r116 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r116.onMediaImageSelectedaddMediaCertification($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(31, ProfileManagementComponent_ng_template_357_div_31_Template, 2, 1, "div", 39);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(32, "div", 6)(33, "div", 114)(34, "button", 115);
    i0.ɵɵtext(35, " Add ");
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r24 = i0.ɵɵnextContext();
    i0.ɵɵproperty("formGroup", ctx_r24.mediaCertificationForm);
    i0.ɵɵadvance(17);
    i0.ɵɵproperty("ngValue", true);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngValue", false);
    i0.ɵɵadvance(12);
    i0.ɵɵproperty("ngIf", ctx_r24.mediaImageUrl);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("disabled", ctx_r24.mediaCertificationForm.invalid);
} }
function ProfileManagementComponent_ng_template_359_div_31_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 81);
    i0.ɵɵelement(1, "img", 126);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r117 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("src", ctx_r117.mediaImageUrl, i0.ɵɵsanitizeUrl);
} }
function ProfileManagementComponent_ng_template_359_Template(rf, ctx) { if (rf & 1) {
    const _r119 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div")(1, "div", 101)(2, "h4", 102);
    i0.ɵɵtext(3, "Edit Media & Certifications");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "button", 103);
    i0.ɵɵlistener("click", function ProfileManagementComponent_ng_template_359_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r119); const ctx_r118 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r118.modalRef == null ? null : ctx_r118.modalRef.hide()); });
    i0.ɵɵelementStart(5, "span", 104);
    i0.ɵɵtext(6, "\u00D7");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(7, "div", 105)(8, "div", 106)(9, "div", 24)(10, "label");
    i0.ɵɵtext(11, "Subject");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "input", 127);
    i0.ɵɵlistener("ngModelChange", function ProfileManagementComponent_ng_template_359_Template_input_ngModelChange_12_listener($event) { i0.ɵɵrestoreView(_r119); const ctx_r120 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r120.editMedia.MediaSubject = $event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "div", 24)(14, "label");
    i0.ɵɵtext(15, "Active");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "select", 119);
    i0.ɵɵlistener("ngModelChange", function ProfileManagementComponent_ng_template_359_Template_select_ngModelChange_16_listener($event) { i0.ɵɵrestoreView(_r119); const ctx_r121 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r121.editMedia.ActivFlg = $event); });
    i0.ɵɵelementStart(17, "option", 111);
    i0.ɵɵtext(18, "Yes");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "option", 111);
    i0.ɵɵtext(20, "No");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(21, "div", 106)(22, "div", 33)(23, "label");
    i0.ɵɵtext(24, "Media Details");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "textarea", 128);
    i0.ɵɵlistener("ngModelChange", function ProfileManagementComponent_ng_template_359_Template_textarea_ngModelChange_25_listener($event) { i0.ɵɵrestoreView(_r119); const ctx_r122 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r122.editMedia.HeaderText = $event); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(26, "div", 113)(27, "div", 24)(28, "label", 124);
    i0.ɵɵtext(29, "Media Image");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "input", 125);
    i0.ɵɵlistener("change", function ProfileManagementComponent_ng_template_359_Template_input_change_30_listener($event) { i0.ɵɵrestoreView(_r119); const ctx_r123 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r123.onMediaImageSelectedaddMediaCertification($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(31, ProfileManagementComponent_ng_template_359_div_31_Template, 2, 1, "div", 39);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(32, "div", 6)(33, "div", 114)(34, "button", 121);
    i0.ɵɵlistener("click", function ProfileManagementComponent_ng_template_359_Template_button_click_34_listener() { i0.ɵɵrestoreView(_r119); const ctx_r124 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r124.editMediaCerification()); });
    i0.ɵɵtext(35, " Save ");
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r26 = i0.ɵɵnextContext();
    i0.ɵɵadvance(12);
    i0.ɵɵproperty("ngModel", ctx_r26.editMedia.MediaSubject);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngModel", ctx_r26.editMedia.ActivFlg);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngValue", true);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngValue", false);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngModel", ctx_r26.editMedia.HeaderText);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngIf", ctx_r26.mediaImageUrl);
} }
function ProfileManagementComponent_ng_template_361_div_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 81);
    i0.ɵɵelement(1, "img", 126);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r125 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("src", ctx_r125.mediaImageUrl2, i0.ɵɵsanitizeUrl);
} }
function ProfileManagementComponent_ng_template_361_Template(rf, ctx) { if (rf & 1) {
    const _r127 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "form", 100);
    i0.ɵɵlistener("ngSubmit", function ProfileManagementComponent_ng_template_361_Template_form_ngSubmit_0_listener() { i0.ɵɵrestoreView(_r127); const ctx_r126 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r126.onSubmitProductService()); });
    i0.ɵɵelementStart(1, "div", 101)(2, "h4", 102);
    i0.ɵɵtext(3, "Add Product / Service");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "button", 103);
    i0.ɵɵlistener("click", function ProfileManagementComponent_ng_template_361_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r127); const ctx_r128 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r128.modalRef == null ? null : ctx_r128.modalRef.hide()); });
    i0.ɵɵelementStart(5, "span", 104);
    i0.ɵɵtext(6, "\u00D7");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(7, "div", 105)(8, "div", 113)(9, "div", 33)(10, "label");
    i0.ɵɵtext(11, "Product / Service Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(12, "input", 129);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "div", 113)(14, "div", 24)(15, "label", 124);
    i0.ɵɵtext(16, "Upload Product / Service Image");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "input", 130);
    i0.ɵɵlistener("change", function ProfileManagementComponent_ng_template_361_Template_input_change_17_listener($event) { i0.ɵɵrestoreView(_r127); const ctx_r129 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r129.onMediaImageSelectedaddProductAndService($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(18, ProfileManagementComponent_ng_template_361_div_18_Template, 2, 1, "div", 39);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(19, "div", 6)(20, "div", 114)(21, "button", 115);
    i0.ɵɵtext(22, " Add ");
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r28 = i0.ɵɵnextContext();
    i0.ɵɵproperty("formGroup", ctx_r28.productServiceForm);
    i0.ɵɵadvance(18);
    i0.ɵɵproperty("ngIf", ctx_r28.mediaImageUrl2);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("disabled", ctx_r28.productServiceForm.invalid);
} }
function ProfileManagementComponent_ng_template_363_div_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 81);
    i0.ɵɵelement(1, "img", 126);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r130 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("src", ctx_r130.mediaImageUrl2, i0.ɵɵsanitizeUrl);
} }
function ProfileManagementComponent_ng_template_363_Template(rf, ctx) { if (rf & 1) {
    const _r132 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div")(1, "div", 101)(2, "h4", 102);
    i0.ɵɵtext(3, "Edit Product / Service");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "button", 103);
    i0.ɵɵlistener("click", function ProfileManagementComponent_ng_template_363_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r132); const ctx_r131 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r131.modalRef == null ? null : ctx_r131.modalRef.hide()); });
    i0.ɵɵelementStart(5, "span", 104);
    i0.ɵɵtext(6, "\u00D7");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(7, "div", 105)(8, "div", 113)(9, "div", 33)(10, "label");
    i0.ɵɵtext(11, "Product / Service Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "input", 131);
    i0.ɵɵlistener("ngModelChange", function ProfileManagementComponent_ng_template_363_Template_input_ngModelChange_12_listener($event) { i0.ɵɵrestoreView(_r132); const ctx_r133 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r133.editproductservice.Prd_Srvc_Txt = $event); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(13, "div", 113)(14, "div", 24)(15, "label");
    i0.ɵɵtext(16, "Active");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "select", 119);
    i0.ɵɵlistener("ngModelChange", function ProfileManagementComponent_ng_template_363_Template_select_ngModelChange_17_listener($event) { i0.ɵɵrestoreView(_r132); const ctx_r134 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r134.editproductservice.Activ_Flg = $event); });
    i0.ɵɵelementStart(18, "option", 111);
    i0.ɵɵtext(19, "Yes");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "option", 111);
    i0.ɵɵtext(21, "No");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(22, "div", 24)(23, "label", 124);
    i0.ɵɵtext(24, "Upload Product / Service Image");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "input", 130);
    i0.ɵɵlistener("change", function ProfileManagementComponent_ng_template_363_Template_input_change_25_listener($event) { i0.ɵɵrestoreView(_r132); const ctx_r135 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r135.onMediaImageSelectedaddProductAndService($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(26, ProfileManagementComponent_ng_template_363_div_26_Template, 2, 1, "div", 39);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(27, "div", 6)(28, "div", 114)(29, "button", 121);
    i0.ɵɵlistener("click", function ProfileManagementComponent_ng_template_363_Template_button_click_29_listener() { i0.ɵɵrestoreView(_r132); const ctx_r136 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r136.oneditProductService()); });
    i0.ɵɵtext(30, " Save ");
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r30 = i0.ɵɵnextContext();
    i0.ɵɵadvance(12);
    i0.ɵɵproperty("ngModel", ctx_r30.editproductservice.Prd_Srvc_Txt);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngModel", ctx_r30.editproductservice.Activ_Flg);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngValue", true);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngValue", false);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngIf", ctx_r30.mediaImageUrl2);
} }
function ProfileManagementComponent_ng_template_365_div_37_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 81);
    i0.ɵɵelement(1, "img", 126);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r137 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("src", ctx_r137.ProfilePicaddclient, i0.ɵɵsanitizeUrl);
} }
function ProfileManagementComponent_ng_template_365_Template(rf, ctx) { if (rf & 1) {
    const _r139 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "form", 100);
    i0.ɵɵlistener("ngSubmit", function ProfileManagementComponent_ng_template_365_Template_form_ngSubmit_0_listener() { i0.ɵɵrestoreView(_r139); const ctx_r138 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r138.onSubmitClientRecommendation()); });
    i0.ɵɵelementStart(1, "div", 101)(2, "h4", 102);
    i0.ɵɵtext(3, "Add Client & Recommendation");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "button", 103);
    i0.ɵɵlistener("click", function ProfileManagementComponent_ng_template_365_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r139); const ctx_r140 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r140.modalRef == null ? null : ctx_r140.modalRef.hide()); });
    i0.ɵɵelementStart(5, "span", 104);
    i0.ɵɵtext(6, "\u00D7");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(7, "div", 105)(8, "div", 106)(9, "div", 33)(10, "label");
    i0.ɵɵtext(11, "Client Organization Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(12, "input", 132);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "div", 106)(14, "div", 24)(15, "label");
    i0.ɵɵtext(16, "Client First Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(17, "input", 133);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "div", 24)(19, "label");
    i0.ɵɵtext(20, "Client Last Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(21, "input", 134);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(22, "div", 106)(23, "div", 24)(24, "label");
    i0.ɵɵtext(25, "Designation");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(26, "input", 135);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(27, "div", 106)(28, "div", 33)(29, "label");
    i0.ɵɵtext(30, "Appreciation / Recommendation");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(31, "textarea", 136);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(32, "div", 113)(33, "div", 24)(34, "label", 137);
    i0.ɵɵtext(35, "Profile Picture");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(36, "input", 138);
    i0.ɵɵlistener("change", function ProfileManagementComponent_ng_template_365_Template_input_change_36_listener($event) { i0.ɵɵrestoreView(_r139); const ctx_r141 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r141.onMediaImageaddClientRecommendation($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(37, ProfileManagementComponent_ng_template_365_div_37_Template, 2, 1, "div", 39);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(38, "div", 6)(39, "div", 114)(40, "button", 115);
    i0.ɵɵtext(41, " Add ");
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r32 = i0.ɵɵnextContext();
    i0.ɵɵproperty("formGroup", ctx_r32.clientRecommendationForm);
    i0.ɵɵadvance(37);
    i0.ɵɵproperty("ngIf", ctx_r32.ProfilePicaddclient);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("disabled", ctx_r32.clientRecommendationForm.invalid);
} }
function ProfileManagementComponent_ng_template_367_div_37_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 81);
    i0.ɵɵelement(1, "img", 126);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r142 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("src", ctx_r142.ProfilePicaddclient, i0.ɵɵsanitizeUrl);
} }
function ProfileManagementComponent_ng_template_367_Template(rf, ctx) { if (rf & 1) {
    const _r144 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div")(1, "div", 101)(2, "h4", 102);
    i0.ɵɵtext(3, "Edit Client & Recommendation");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "button", 103);
    i0.ɵɵlistener("click", function ProfileManagementComponent_ng_template_367_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r144); const ctx_r143 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r143.modalRef == null ? null : ctx_r143.modalRef.hide()); });
    i0.ɵɵelementStart(5, "span", 104);
    i0.ɵɵtext(6, "\u00D7");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(7, "div", 105)(8, "div", 106)(9, "div", 33)(10, "label");
    i0.ɵɵtext(11, "Client Organization Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "input", 139);
    i0.ɵɵlistener("ngModelChange", function ProfileManagementComponent_ng_template_367_Template_input_ngModelChange_12_listener($event) { i0.ɵɵrestoreView(_r144); const ctx_r145 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r145.editclientandrecommendation.Client_Org_Name = $event); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(13, "div", 106)(14, "div", 24)(15, "label");
    i0.ɵɵtext(16, "Client First Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "input", 116);
    i0.ɵɵlistener("ngModelChange", function ProfileManagementComponent_ng_template_367_Template_input_ngModelChange_17_listener($event) { i0.ɵɵrestoreView(_r144); const ctx_r146 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r146.editclientandrecommendation.Client_First_Name = $event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(18, "div", 24)(19, "label");
    i0.ɵɵtext(20, "Client Last Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "input", 117);
    i0.ɵɵlistener("ngModelChange", function ProfileManagementComponent_ng_template_367_Template_input_ngModelChange_21_listener($event) { i0.ɵɵrestoreView(_r144); const ctx_r147 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r147.editclientandrecommendation.Client_Last_Name = $event); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(22, "div", 106)(23, "div", 24)(24, "label");
    i0.ɵɵtext(25, "Designation");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "input", 118);
    i0.ɵɵlistener("ngModelChange", function ProfileManagementComponent_ng_template_367_Template_input_ngModelChange_26_listener($event) { i0.ɵɵrestoreView(_r144); const ctx_r148 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r148.editclientandrecommendation.Designation = $event); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(27, "div", 106)(28, "div", 33)(29, "label");
    i0.ɵɵtext(30, "Appreciation / Recommendation");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(31, "textarea", 140);
    i0.ɵɵlistener("ngModelChange", function ProfileManagementComponent_ng_template_367_Template_textarea_ngModelChange_31_listener($event) { i0.ɵɵrestoreView(_r144); const ctx_r149 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r149.editclientandrecommendation.Appreciation_Txt = $event); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(32, "div", 113)(33, "div", 24)(34, "label", 137);
    i0.ɵɵtext(35, "Profile Picture");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(36, "input", 138);
    i0.ɵɵlistener("change", function ProfileManagementComponent_ng_template_367_Template_input_change_36_listener($event) { i0.ɵɵrestoreView(_r144); const ctx_r150 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r150.onMediaImageaddClientRecommendation($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(37, ProfileManagementComponent_ng_template_367_div_37_Template, 2, 1, "div", 39);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(38, "div", 6)(39, "div", 114)(40, "button", 121);
    i0.ɵɵlistener("click", function ProfileManagementComponent_ng_template_367_Template_button_click_40_listener() { i0.ɵɵrestoreView(_r144); const ctx_r151 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r151.oneditClientRecommendation()); });
    i0.ɵɵtext(41, " Save ");
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r34 = i0.ɵɵnextContext();
    i0.ɵɵadvance(12);
    i0.ɵɵproperty("ngModel", ctx_r34.editclientandrecommendation.Client_Org_Name);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngModel", ctx_r34.editclientandrecommendation.Client_First_Name);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngModel", ctx_r34.editclientandrecommendation.Client_Last_Name);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngModel", ctx_r34.editclientandrecommendation.Designation);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngModel", ctx_r34.editclientandrecommendation.Appreciation_Txt);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngIf", ctx_r34.ProfilePicaddclient);
} }
function ProfileManagementComponent_ng_template_369_option_28_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 152);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const country_r156 = ctx.$implicit;
    i0.ɵɵproperty("value", country_r156.CNTRY_ID);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", country_r156.CNTRY_NM, " ");
} }
function ProfileManagementComponent_ng_template_369_option_35_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 152);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const state_r157 = ctx.$implicit;
    i0.ɵɵproperty("value", state_r157.STATE_ID);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(state_r157.STATE_NM);
} }
function ProfileManagementComponent_ng_template_369_option_42_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 152);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const city_r158 = ctx.$implicit;
    i0.ɵɵproperty("value", city_r158.CITY_ID);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(city_r158.CITY_NM);
} }
function ProfileManagementComponent_ng_template_369_option_49_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 152);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const zip_r159 = ctx.$implicit;
    i0.ɵɵproperty("value", zip_r159.Id);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(zip_r159.Value);
} }
function ProfileManagementComponent_ng_template_369_Template(rf, ctx) { if (rf & 1) {
    const _r161 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "form", 100);
    i0.ɵɵlistener("ngSubmit", function ProfileManagementComponent_ng_template_369_Template_form_ngSubmit_0_listener() { i0.ɵɵrestoreView(_r161); const ctx_r160 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r160.onSubmitGeoServicibility()); });
    i0.ɵɵelementStart(1, "div", 101)(2, "h4", 102);
    i0.ɵɵtext(3, "Add Geo Servicibility");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "button", 103);
    i0.ɵɵlistener("click", function ProfileManagementComponent_ng_template_369_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r161); const ctx_r162 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r162.modalRef == null ? null : ctx_r162.modalRef.hide()); });
    i0.ɵɵelementStart(5, "span", 104);
    i0.ɵɵtext(6, "\u00D7");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(7, "div", 105)(8, "div", 106)(9, "div", 24)(10, "label");
    i0.ɵɵtext(11, "Geo Category");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "select", 141)(13, "option", 142);
    i0.ɵɵtext(14, "Select");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "option", 111);
    i0.ɵɵtext(16, "Urban");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "option", 111);
    i0.ɵɵtext(18, "Rural");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "option", 111);
    i0.ɵɵtext(20, "Semi-Urban");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(21, "div", 143)(22, "div", 144)(23, "label");
    i0.ɵɵtext(24, "Country");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "select", 145);
    i0.ɵɵlistener("change", function ProfileManagementComponent_ng_template_369_Template_select_change_25_listener($event) { i0.ɵɵrestoreView(_r161); const ctx_r163 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r163.changeCountry($event)); });
    i0.ɵɵelementStart(26, "option", 142);
    i0.ɵɵtext(27, "Select");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(28, ProfileManagementComponent_ng_template_369_option_28_Template, 2, 2, "option", 146);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(29, "div", 144)(30, "label");
    i0.ɵɵtext(31, "State");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(32, "select", 147);
    i0.ɵɵlistener("change", function ProfileManagementComponent_ng_template_369_Template_select_change_32_listener($event) { i0.ɵɵrestoreView(_r161); const ctx_r164 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r164.changeState($event)); });
    i0.ɵɵelementStart(33, "option", 142);
    i0.ɵɵtext(34, "Select");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(35, ProfileManagementComponent_ng_template_369_option_35_Template, 2, 2, "option", 146);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(36, "div", 144)(37, "label");
    i0.ɵɵtext(38, "City");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(39, "select", 148);
    i0.ɵɵlistener("change", function ProfileManagementComponent_ng_template_369_Template_select_change_39_listener($event) { i0.ɵɵrestoreView(_r161); const ctx_r165 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r165.changeCity($event)); });
    i0.ɵɵelementStart(40, "option", 149);
    i0.ɵɵtext(41, "Select");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(42, ProfileManagementComponent_ng_template_369_option_42_Template, 2, 2, "option", 146);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(43, "div", 144)(44, "label");
    i0.ɵɵtext(45, "Pin");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(46, "select", 150);
    i0.ɵɵlistener("change", function ProfileManagementComponent_ng_template_369_Template_select_change_46_listener($event) { i0.ɵɵrestoreView(_r161); const ctx_r166 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r166.changePin($event)); });
    i0.ɵɵelementStart(47, "option", 149);
    i0.ɵɵtext(48, "Select");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(49, ProfileManagementComponent_ng_template_369_option_49_Template, 2, 2, "option", 146);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(50, "div", 151)(51, "div", 114)(52, "button", 115);
    i0.ɵɵtext(53, " Save Geo Servicibility ");
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r36 = i0.ɵɵnextContext();
    i0.ɵɵproperty("formGroup", ctx_r36.geoServicibilityForm);
    i0.ɵɵadvance(15);
    i0.ɵɵproperty("ngValue", "Urban");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngValue", "Rural");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngValue", "Semi-Urban");
    i0.ɵɵadvance(9);
    i0.ɵɵproperty("ngForOf", ctx_r36.countryList);
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngForOf", ctx_r36.stateList);
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngForOf", ctx_r36.cityList);
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngForOf", ctx_r36.zipList);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("disabled", ctx_r36.geoServicibilityForm.invalid);
} }
function ProfileManagementComponent_ng_template_371_option_36_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 152);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const country_r171 = ctx.$implicit;
    i0.ɵɵproperty("value", country_r171.CNTRY_ID);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", country_r171.CNTRY_NM, " ");
} }
function ProfileManagementComponent_ng_template_371_option_43_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 152);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const state_r172 = ctx.$implicit;
    i0.ɵɵproperty("value", state_r172.STATE_ID);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(state_r172.STATE_NM);
} }
function ProfileManagementComponent_ng_template_371_option_50_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 152);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const city_r173 = ctx.$implicit;
    i0.ɵɵproperty("value", city_r173.CITY_ID);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(city_r173.CITY_NM);
} }
function ProfileManagementComponent_ng_template_371_option_57_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 152);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const zip_r174 = ctx.$implicit;
    i0.ɵɵproperty("value", zip_r174.Id);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(zip_r174.Value);
} }
function ProfileManagementComponent_ng_template_371_Template(rf, ctx) { if (rf & 1) {
    const _r176 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div")(1, "div", 101)(2, "h4", 102);
    i0.ɵɵtext(3, "Edit Geo Servicibility");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "button", 103);
    i0.ɵɵlistener("click", function ProfileManagementComponent_ng_template_371_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r176); const ctx_r175 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r175.modalRef == null ? null : ctx_r175.modalRef.hide()); });
    i0.ɵɵelementStart(5, "span", 104);
    i0.ɵɵtext(6, "\u00D7");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(7, "div", 105)(8, "div", 106)(9, "div", 24)(10, "label");
    i0.ɵɵtext(11, "Geo Category");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "select", 119);
    i0.ɵɵlistener("ngModelChange", function ProfileManagementComponent_ng_template_371_Template_select_ngModelChange_12_listener($event) { i0.ɵɵrestoreView(_r176); const ctx_r177 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r177.editgeoservicibility.Geo_Category = $event); });
    i0.ɵɵelementStart(13, "option", 142);
    i0.ɵɵtext(14, "Select");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "option", 111);
    i0.ɵɵtext(16, "Urban");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "option", 111);
    i0.ɵɵtext(18, "Rural");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "option", 111);
    i0.ɵɵtext(20, "Semi-Urban");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(21, "div", 24)(22, "label");
    i0.ɵɵtext(23, "Active");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "select", 119);
    i0.ɵɵlistener("ngModelChange", function ProfileManagementComponent_ng_template_371_Template_select_ngModelChange_24_listener($event) { i0.ɵɵrestoreView(_r176); const ctx_r178 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r178.editgeoservicibility.Activ_Flg = $event); });
    i0.ɵɵelementStart(25, "option", 111);
    i0.ɵɵtext(26, "Yes");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "option", 111);
    i0.ɵɵtext(28, "No");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(29, "div", 143)(30, "div", 144)(31, "label");
    i0.ɵɵtext(32, "Country");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(33, "select", 153);
    i0.ɵɵlistener("ngModelChange", function ProfileManagementComponent_ng_template_371_Template_select_ngModelChange_33_listener($event) { i0.ɵɵrestoreView(_r176); const ctx_r179 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r179.editgeoservicibility.CountryId = $event); })("change", function ProfileManagementComponent_ng_template_371_Template_select_change_33_listener($event) { i0.ɵɵrestoreView(_r176); const ctx_r180 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r180.changeCountry($event)); });
    i0.ɵɵelementStart(34, "option", 142);
    i0.ɵɵtext(35, "Select");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(36, ProfileManagementComponent_ng_template_371_option_36_Template, 2, 2, "option", 146);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(37, "div", 144)(38, "label");
    i0.ɵɵtext(39, "State");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(40, "select", 153);
    i0.ɵɵlistener("ngModelChange", function ProfileManagementComponent_ng_template_371_Template_select_ngModelChange_40_listener($event) { i0.ɵɵrestoreView(_r176); const ctx_r181 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r181.editgeoservicibility.StateId = $event); })("change", function ProfileManagementComponent_ng_template_371_Template_select_change_40_listener($event) { i0.ɵɵrestoreView(_r176); const ctx_r182 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r182.changeState($event)); });
    i0.ɵɵelementStart(41, "option", 142);
    i0.ɵɵtext(42, "Select");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(43, ProfileManagementComponent_ng_template_371_option_43_Template, 2, 2, "option", 146);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(44, "div", 144)(45, "label");
    i0.ɵɵtext(46, "City");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(47, "select", 153);
    i0.ɵɵlistener("ngModelChange", function ProfileManagementComponent_ng_template_371_Template_select_ngModelChange_47_listener($event) { i0.ɵɵrestoreView(_r176); const ctx_r183 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r183.editgeoservicibility.CityId = $event); })("change", function ProfileManagementComponent_ng_template_371_Template_select_change_47_listener($event) { i0.ɵɵrestoreView(_r176); const ctx_r184 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r184.changeCity($event)); });
    i0.ɵɵelementStart(48, "option", 149);
    i0.ɵɵtext(49, "Select");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(50, ProfileManagementComponent_ng_template_371_option_50_Template, 2, 2, "option", 146);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(51, "div", 144)(52, "label");
    i0.ɵɵtext(53, "Pin");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(54, "select", 153);
    i0.ɵɵlistener("ngModelChange", function ProfileManagementComponent_ng_template_371_Template_select_ngModelChange_54_listener($event) { i0.ɵɵrestoreView(_r176); const ctx_r185 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r185.editgeoservicibility.PinCode = $event); })("change", function ProfileManagementComponent_ng_template_371_Template_select_change_54_listener($event) { i0.ɵɵrestoreView(_r176); const ctx_r186 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r186.changePin($event)); });
    i0.ɵɵelementStart(55, "option", 149);
    i0.ɵɵtext(56, "Select");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(57, ProfileManagementComponent_ng_template_371_option_57_Template, 2, 2, "option", 146);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(58, "div", 151)(59, "div", 114)(60, "button", 121);
    i0.ɵɵlistener("click", function ProfileManagementComponent_ng_template_371_Template_button_click_60_listener() { i0.ɵɵrestoreView(_r176); const ctx_r187 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r187.oneditGeoServicibility()); });
    i0.ɵɵtext(61, " Save ");
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r38 = i0.ɵɵnextContext();
    i0.ɵɵadvance(12);
    i0.ɵɵproperty("ngModel", ctx_r38.editgeoservicibility.Geo_Category);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngValue", "Urban");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngValue", "Rural");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngValue", "Semi-Urban");
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngModel", ctx_r38.editgeoservicibility.Activ_Flg);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngValue", true);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngValue", false);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngModel", ctx_r38.editgeoservicibility.CountryId);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r38.countryList);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngModel", ctx_r38.editgeoservicibility.StateId);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r38.stateList);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngModel", ctx_r38.editgeoservicibility.CityId);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r38.cityList);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngModel", ctx_r38.editgeoservicibility.PinCode);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r38.zipList);
} }
function ProfileManagementComponent_ng_template_373_span_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵelement(1, "img", 159);
    i0.ɵɵelementEnd();
} }
function ProfileManagementComponent_ng_template_373_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 160);
} }
function ProfileManagementComponent_ng_template_373_span_45_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 161);
    i0.ɵɵtext(1, "Yes");
    i0.ɵɵelementEnd();
} }
function ProfileManagementComponent_ng_template_373_span_46_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 79);
    i0.ɵɵtext(1, "No");
    i0.ɵɵelementEnd();
} }
function ProfileManagementComponent_ng_template_373_span_47_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 162);
    i0.ɵɵtext(1, "-");
    i0.ɵɵelementEnd();
} }
function ProfileManagementComponent_ng_template_373_Template(rf, ctx) { if (rf & 1) {
    const _r195 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div")(1, "div", 101)(2, "h4", 154);
    i0.ɵɵtext(3, "Key Management Profile Details");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "button", 103);
    i0.ɵɵlistener("click", function ProfileManagementComponent_ng_template_373_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r195); const ctx_r194 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r194.modalRef == null ? null : ctx_r194.modalRef.hide()); });
    i0.ɵɵelementStart(5, "span", 104);
    i0.ɵɵtext(6, "\u00D7");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(7, "div", 105)(8, "div", 113)(9, "div", 24)(10, "strong");
    i0.ɵɵtext(11, "ID:");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "div", 24);
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "div", 113)(15, "div", 24)(16, "strong");
    i0.ɵɵtext(17, "Active:");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(18, "div", 24);
    i0.ɵɵtemplate(19, ProfileManagementComponent_ng_template_373_span_19_Template, 2, 0, "span", 62);
    i0.ɵɵtemplate(20, ProfileManagementComponent_ng_template_373_ng_template_20_Template, 1, 0, "ng-template", null, 63, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(22, "div", 113)(23, "div", 24)(24, "strong");
    i0.ɵɵtext(25, "First Name:");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(26, "div", 24);
    i0.ɵɵtext(27);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(28, "div", 113)(29, "div", 24)(30, "strong");
    i0.ɵɵtext(31, "Last Name:");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(32, "div", 24);
    i0.ɵɵtext(33);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(34, "div", 113)(35, "div", 24)(36, "strong");
    i0.ɵɵtext(37, "Designation:");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(38, "div", 24);
    i0.ɵɵtext(39);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(40, "div", 113)(41, "div", 24)(42, "strong");
    i0.ɵɵtext(43, "Main Profile:");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(44, "div", 24);
    i0.ɵɵtemplate(45, ProfileManagementComponent_ng_template_373_span_45_Template, 2, 0, "span", 155);
    i0.ɵɵtemplate(46, ProfileManagementComponent_ng_template_373_span_46_Template, 2, 0, "span", 19);
    i0.ɵɵtemplate(47, ProfileManagementComponent_ng_template_373_span_47_Template, 2, 0, "span", 156);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(48, "div", 113)(49, "div", 24)(50, "strong");
    i0.ɵɵtext(51, "About:");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(52, "div", 157);
    i0.ɵɵtext(53);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(54, "div", 113)(55, "div", 24)(56, "strong");
    i0.ɵɵtext(57, "Profile Image:");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(58, "div", 24);
    i0.ɵɵelement(59, "img", 158);
    i0.ɵɵpipe(60, "slice");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const _r189 = i0.ɵɵreference(21);
    const ctx_r40 = i0.ɵɵnextContext();
    i0.ɵɵadvance(13);
    i0.ɵɵtextInterpolate(ctx_r40.detail.MDR_TOP_MANAGEMENT_ID);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngIf", ctx_r40.detail.MDR_TOP_MNGMT_ACTIV_FLG)("ngIfElse", _r189);
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate(ctx_r40.detail.MDR_TOP_MNGMT_FIRST_NAME);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r40.detail.MDR_TOP_MNGMT_LAST_NAME);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r40.detail.MDR_TOP_MNGMT_CORP_TITLE);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngIf", ctx_r40.detail.MDR_TO_MANAGEMENT_MAIN_PROFILE_FLG === true);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r40.detail.MDR_TO_MANAGEMENT_MAIN_PROFILE_FLG === false);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r40.detail.MDR_TO_MANAGEMENT_MAIN_PROFILE_FLG == null);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r40.detail.MDR_TOP_MNGMT_ABOUT_TXT);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("src", ctx_r40.imgURL + i0.ɵɵpipeBind2(60, 11, ctx_r40.detail.MDR_TOP_MNGMT_PIC_IMAGE, 1), i0.ɵɵsanitizeUrl);
} }
function ProfileManagementComponent_ng_template_375_span_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵelement(1, "img", 159);
    i0.ɵɵelementEnd();
} }
function ProfileManagementComponent_ng_template_375_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 160);
} }
function ProfileManagementComponent_ng_template_375_Template(rf, ctx) { if (rf & 1) {
    const _r200 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div")(1, "div", 101)(2, "h4", 154);
    i0.ɵɵtext(3, "Media & Certification Details");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "button", 103);
    i0.ɵɵlistener("click", function ProfileManagementComponent_ng_template_375_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r200); const ctx_r199 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r199.modalRef == null ? null : ctx_r199.modalRef.hide()); });
    i0.ɵɵelementStart(5, "span", 104);
    i0.ɵɵtext(6, "\u00D7");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(7, "div", 105)(8, "div", 113)(9, "div", 24)(10, "strong");
    i0.ɵɵtext(11, "ID:");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "div", 24);
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "div", 113)(15, "div", 24)(16, "strong");
    i0.ɵɵtext(17, "Active:");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(18, "div", 24);
    i0.ɵɵtemplate(19, ProfileManagementComponent_ng_template_375_span_19_Template, 2, 0, "span", 62);
    i0.ɵɵtemplate(20, ProfileManagementComponent_ng_template_375_ng_template_20_Template, 1, 0, "ng-template", null, 63, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(22, "div", 113)(23, "div", 24)(24, "strong");
    i0.ɵɵtext(25, "Heading:");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(26, "div", 24);
    i0.ɵɵtext(27);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(28, "div", 113)(29, "div", 24)(30, "strong");
    i0.ɵɵtext(31, "Subject:");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(32, "div", 24);
    i0.ɵɵtext(33);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(34, "div", 113)(35, "div", 24)(36, "strong");
    i0.ɵɵtext(37, "Media Image:");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(38, "div", 24);
    i0.ɵɵelement(39, "img", 163);
    i0.ɵɵpipe(40, "slice");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const _r197 = i0.ɵɵreference(21);
    const ctx_r42 = i0.ɵɵnextContext();
    i0.ɵɵadvance(13);
    i0.ɵɵtextInterpolate(ctx_r42.detail.MDR_MEDIA_ID);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngIf", ctx_r42.detail.MDR_MEDIA_ACTIV_FLG)("ngIfElse", _r197);
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate(ctx_r42.detail.MDR_MEDIA_HEAD_TXT);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r42.detail.MDR_MEDIA_SUBJCT_TXT);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("src", ctx_r42.imgURL + i0.ɵɵpipeBind2(40, 6, ctx_r42.detail.MDR_MEDIA_PIC, 1), i0.ɵɵsanitizeUrl);
} }
function ProfileManagementComponent_ng_template_377_span_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵelement(1, "img", 159);
    i0.ɵɵelementEnd();
} }
function ProfileManagementComponent_ng_template_377_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 160);
} }
function ProfileManagementComponent_ng_template_377_Template(rf, ctx) { if (rf & 1) {
    const _r205 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div")(1, "div", 101)(2, "h4", 154);
    i0.ɵɵtext(3, "Product & Service Details");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "button", 103);
    i0.ɵɵlistener("click", function ProfileManagementComponent_ng_template_377_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r205); const ctx_r204 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r204.modalRef == null ? null : ctx_r204.modalRef.hide()); });
    i0.ɵɵelementStart(5, "span", 104);
    i0.ɵɵtext(6, "\u00D7");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(7, "div", 105)(8, "div", 113)(9, "div", 24)(10, "strong");
    i0.ɵɵtext(11, "ID:");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "div", 24);
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "div", 113)(15, "div", 24)(16, "strong");
    i0.ɵɵtext(17, "Active:");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(18, "div", 24);
    i0.ɵɵtemplate(19, ProfileManagementComponent_ng_template_377_span_19_Template, 2, 0, "span", 62);
    i0.ɵɵtemplate(20, ProfileManagementComponent_ng_template_377_ng_template_20_Template, 1, 0, "ng-template", null, 63, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(22, "div", 113)(23, "div", 24)(24, "strong");
    i0.ɵɵtext(25, "Product / Service:");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(26, "div", 24);
    i0.ɵɵtext(27);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(28, "div", 113)(29, "div", 24)(30, "strong");
    i0.ɵɵtext(31, "Image:");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(32, "div", 24);
    i0.ɵɵelement(33, "img", 164);
    i0.ɵɵpipe(34, "slice");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const _r202 = i0.ɵɵreference(21);
    const ctx_r44 = i0.ɵɵnextContext();
    i0.ɵɵadvance(13);
    i0.ɵɵtextInterpolate(ctx_r44.detail.MDR_STORE_PRDCT_SERVC_ID);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngIf", ctx_r44.detail.MDR_STORE_PRDCT_SERVC_ACTIV_FLG)("ngIfElse", _r202);
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate(ctx_r44.detail.MDR_STORE_PRDCT_SERVC_TXT);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("src", ctx_r44.imgURL + i0.ɵɵpipeBind2(34, 5, ctx_r44.detail.MDR_STORE_PRDCT_SERVC_IMAGE, 1), i0.ɵɵsanitizeUrl);
} }
function ProfileManagementComponent_ng_template_379_span_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵelement(1, "img", 159);
    i0.ɵɵelementEnd();
} }
function ProfileManagementComponent_ng_template_379_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 160);
} }
function ProfileManagementComponent_ng_template_379_Template(rf, ctx) { if (rf & 1) {
    const _r210 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div")(1, "div", 101)(2, "h4", 154);
    i0.ɵɵtext(3, "Client Recommendation Details");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "button", 103);
    i0.ɵɵlistener("click", function ProfileManagementComponent_ng_template_379_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r210); const ctx_r209 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r209.modalRef == null ? null : ctx_r209.modalRef.hide()); });
    i0.ɵɵelementStart(5, "span", 104);
    i0.ɵɵtext(6, "\u00D7");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(7, "div", 105)(8, "div", 113)(9, "div", 24)(10, "strong");
    i0.ɵɵtext(11, "ID:");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "div", 24);
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "div", 113)(15, "div", 24)(16, "strong");
    i0.ɵɵtext(17, "Active:");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(18, "div", 24);
    i0.ɵɵtemplate(19, ProfileManagementComponent_ng_template_379_span_19_Template, 2, 0, "span", 62);
    i0.ɵɵtemplate(20, ProfileManagementComponent_ng_template_379_ng_template_20_Template, 1, 0, "ng-template", null, 63, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(22, "div", 113)(23, "div", 24)(24, "strong");
    i0.ɵɵtext(25, "Organization:");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(26, "div", 24);
    i0.ɵɵtext(27);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(28, "div", 113)(29, "div", 24)(30, "strong");
    i0.ɵɵtext(31, "Representative Name:");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(32, "div", 24);
    i0.ɵɵtext(33);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(34, "div", 113)(35, "div", 24)(36, "strong");
    i0.ɵɵtext(37, "Designation:");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(38, "div", 24);
    i0.ɵɵtext(39);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(40, "div", 113)(41, "div", 24)(42, "strong");
    i0.ɵɵtext(43, "Feedback:");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(44, "div", 157);
    i0.ɵɵtext(45);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(46, "div", 113)(47, "div", 24)(48, "strong");
    i0.ɵɵtext(49, "Client Image:");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(50, "div", 24);
    i0.ɵɵelement(51, "img", 165);
    i0.ɵɵpipe(52, "slice");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const _r207 = i0.ɵɵreference(21);
    const ctx_r46 = i0.ɵɵnextContext();
    i0.ɵɵadvance(13);
    i0.ɵɵtextInterpolate(ctx_r46.detail.MDR_STORE_CLIENT_ID);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngIf", ctx_r46.detail.MDR_STORE_CLIENT_ACTIV_FLG)("ngIfElse", _r207);
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate(ctx_r46.detail.MDR_STORE_CLIENT_ORG);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate2(" ", ctx_r46.detail.MDR_STORE_CLIENT_REP_FIRSTNAME, " ", ctx_r46.detail.MDR_STORE_CLIENT_REP_LASTNAME, " ");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r46.detail.MDR_STORE_CLIENT_REP_DESIGNATION);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r46.detail.MDR_STORE_CLIENT_SAID_ABOUT_TEXT);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("src", ctx_r46.imgURL + i0.ɵɵpipeBind2(52, 9, ctx_r46.detail.MDR_STORE_CLIENT_IMAGE, 1), i0.ɵɵsanitizeUrl);
} }
export class ProfileManagementComponent {
    constructor(modalService, fb, apiService, toastr) {
        this.modalService = modalService;
        this.fb = fb;
        this.apiService = apiService;
        this.toastr = toastr;
        this.imgURL = this.apiService.imgURL;
        this.isProfileExisting = false;
        this.keyManagementProfileArr = [];
        this.storeandprdtArr = [];
        this.clientRecommendationArr = [];
        this.geoservicibilityArr = [];
        this.mediaCertificationsArr = [];
        this.orgLogoUrl = '';
        this.profilePicUrl = '';
        this.orgProfile = {
            MDR_ADDRESS: "",
            MDR_ADDRESS_ACTIV_FLG: false,
            MDR_ADDRESS_CITY: "",
            MDR_ADDRESS_COUNTRY: "",
            MDR_ADDRESS_LANDMARK: "",
            MDR_ADDRESS_LATD: null,
            MDR_ADDRESS_LONGTD: null,
            MDR_ADDRESS_PINCODE: "",
            MDR_ADDRESS_STATE: "",
            MDR_CORP_CONTACT_EMAILID: "",
            MDR_CORP_CONTACT_NUMBER: "",
            MDR_CORP_RESPONDER: "",
            MDR_ORG_NAME: "",
            MDR_ORG_TYPE: "",
            MDR_PROFILE_ORG_GSTIN: ""
        };
        this.countryList = [];
        this.cityList = [];
        this.stateList = [];
        this.zipList = [];
        this.countryEvent = new EventEmitter();
        this.stateEvent = new EventEmitter();
        this.cityEvent = new EventEmitter();
        this.pincodeEvent = new EventEmitter();
        this.editenabled = false;
        this.mediaImageUrl = null;
        this.mediaImageUrl2 = null;
        this.ProfilePicaddclient = null;
        this.profilePicUrladdKeyManagement = '';
        this.keyProfile = {
            firstName: '',
            lastName: '',
            designation: '',
            active: true,
            about: '',
            imageUrl: ''
        };
        this.media = {
            subject: '',
            active: true,
            mediaDetails: '',
            imageUrl: ''
        };
    }
    ngOnInit() {
        this.getCountry();
        this.mainProfileForm = this.fb.group({
            Login_Storecode: ['1001070099', Validators.required],
            Main_Display_Text: ['', Validators.required],
            Corp_Logo: [''],
            Corp_About_Text: [''],
            Website_URL: ['', Validators.pattern('https?://.+')],
            Corp_PhoneNumber: ['', Validators.pattern('^[0-9]{10,15}$')],
            Corp_Emailid: ['', [Validators.required, Validators.email]],
            Corp_Responder_Name: [''],
            MainProfile_Mngmt_Pic: [''],
            MainProfile_FirstName: ['', Validators.required],
            MainProfile_LastName: ['', Validators.required],
            MainProfile_Designation: [''],
            Mngmt_About_Text: [''],
            Employee_Counts: [, [Validators.required, Validators.min(0)]]
        });
        this.loadMainProfile();
        this.keyManagementForm = this.fb.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            designation: ['', Validators.required],
            active: [true],
            about: [''],
            profilePic: [null]
        });
        this.mediaCertificationForm = this.fb.group({
            subject: ['', Validators.required],
            active: [true],
            details: [''],
            mediaPic: [null]
        });
        this.productServiceForm = this.fb.group({
            Prdct_Servc_Txt: ['', Validators.required],
            Prdct_Servc_Image: ['', Validators.required]
        });
        this.clientRecommendationForm = this.fb.group({
            Client_Org_Name: ['', Validators.required],
            Client_First_Name: ['', Validators.required],
            Client_Last_Name: ['', Validators.required],
            Designation: ['', Validators.required],
            Person_Pic: [null, Validators.required],
            Appreciation_Txt: ['']
        });
        this.geoServicibilityForm = this.fb.group({
            Geo_Category: ['', Validators.required],
            CountryId: ['', Validators.required],
            StateId: [''],
            CityId: [''],
            PinCode: ['']
        });
    }
    onTabChange(tabName) {
        console.log("Switched to tab:", tabName);
        let payload = {
            Storecode: "1001070099",
            Media_Profile_Flg: false,
            Mangmt_Profile_Flg: false,
            Prod_Servc_Profile_Flg: false,
            Client_Profile_Flg: false,
            Geo_Service_Profile_Flg: false,
            Corp_Contact_Profile_Flg: false
        };
        switch (tabName) {
            case "Main Profile":
                this.loadMainProfile();
                break;
            case "Key Management Profile":
                payload.Mangmt_Profile_Flg = true;
                this.apiService.postCall(this.apiService.baseURL + '/GetMdrProfileAddons', payload)
                    .subscribe({
                    next: (data) => {
                        if (data && data.length > 0) {
                            this.keyManagementProfileArr = data;
                        }
                        console.log("Mapped Profiles:", this.keyManagementProfileArr);
                    },
                    error: (error) => {
                        this.toastr.error(error, '', { timeOut: 5000 });
                    }
                });
                break;
            case "Media & Certifications":
                payload.Media_Profile_Flg = true;
                this.apiService.postCall(this.apiService.baseURL + '/GetMdrProfileAddons', payload)
                    .subscribe({
                    next: (data) => {
                        console.log(data);
                        this.mediaCertificationsArr = data;
                    },
                    error: (error) => {
                        this.toastr.error(error, '', { timeOut: 5000 });
                    }
                });
                break;
            case "Product & Services":
                payload.Prod_Servc_Profile_Flg = true;
                this.apiService.postCall(this.apiService.baseURL + '/GetMdrProfileAddons', payload)
                    .subscribe({
                    next: (data) => {
                        console.log(data);
                        this.storeandprdtArr = data;
                    },
                    error: (error) => {
                        this.toastr.error(error, '', { timeOut: 5000 });
                    }
                });
                break;
            case "Clients & Recommendations":
                payload.Client_Profile_Flg = true;
                this.apiService.postCall(this.apiService.baseURL + '/GetMdrProfileAddons', payload)
                    .subscribe({
                    next: (data) => {
                        console.log(data);
                        this.clientRecommendationArr = data;
                    },
                    error: (error) => {
                        this.toastr.error(error, '', { timeOut: 5000 });
                    }
                });
                break;
            case "Geo Service":
                payload.Geo_Service_Profile_Flg = true;
                this.apiService.postCall(this.apiService.baseURL + '/GetMdrProfileAddons', payload)
                    .subscribe({
                    next: (data) => {
                        console.log(data);
                        this.geoservicibilityArr = data;
                    },
                    error: (error) => {
                        this.toastr.error(error, '', { timeOut: 5000 });
                    }
                });
                break;
            case "Corp Contact":
                payload.Corp_Contact_Profile_Flg = true;
                this.apiService.postCall(this.apiService.baseURL + '/GetMdrProfileAddons', payload)
                    .subscribe({
                    next: (data) => {
                        this.orgProfile = data[0];
                        console.log("Org Profiles:", this.orgProfile);
                    },
                    error: (error) => {
                        this.toastr.error(error, '', { timeOut: 5000 });
                    }
                });
                break;
        }
    }
    enableEditing() {
        var _a, _b, _c, _d, _e;
        (_a = this.mainProfileForm.get('Main_Display_Text')) === null || _a === void 0 ? void 0 : _a.enable();
        (_b = this.mainProfileForm.get('Corp_About_Text')) === null || _b === void 0 ? void 0 : _b.enable();
        (_c = this.mainProfileForm.get('Corp_Logo')) === null || _c === void 0 ? void 0 : _c.enable();
        (_d = this.mainProfileForm.get('Website_URL')) === null || _d === void 0 ? void 0 : _d.enable();
        (_e = this.mainProfileForm.get('Employee_Counts')) === null || _e === void 0 ? void 0 : _e.enable();
        this.editenabled = true;
        this.isProfileExisting = false;
    }
    editMainProfile() {
        if (this.orgLogoUrl == '') {
            this.loadMainProfile();
            this.editenabled = false;
            this.isProfileExisting = true;
            return;
        }
        const payload = {
            Storecode: "1001070099",
            Profilehead_Text: this.mainProfileForm.get('Main_Display_Text').value,
            Corp_About_Text: this.mainProfileForm.get('Corp_About_Text').value,
            Corp_Logo: this.mainProfileForm.get('Corp_Logo').value,
            Web_URL: this.mainProfileForm.get('Website_URL').value,
            Employees_No: this.mainProfileForm.get('Employee_Counts').value
        };
        console.log("Edit payload: ", payload);
        this.apiService.postCall(this.apiService.baseURL + '/EditMDR_MainProfile', payload)
            .subscribe({
            next: (data) => {
                console.log(data);
                this.toastr.success(data);
            },
            error: (error) => {
                this.toastr.error(error, '', { timeOut: 5000 });
            }
        });
        this.orgLogoUrl = '';
        this.loadMainProfile();
        this.editenabled = false;
        this.isProfileExisting = true;
    }
    onSubmitGeoServicibility() {
        var _a, _b, _c, _d, _e, _f, _g;
        return __awaiter(this, void 0, void 0, function* () {
            if (this.geoServicibilityForm.valid) {
                const payload = {
                    Storecode: "1001070099",
                    Geo_Category: (_a = this.geoServicibilityForm.get('Geo_Category')) === null || _a === void 0 ? void 0 : _a.value,
                    CountryId: (_b = this.geoServicibilityForm.get('CountryId')) === null || _b === void 0 ? void 0 : _b.value,
                    StateId: (_c = this.geoServicibilityForm.get('StateId')) === null || _c === void 0 ? void 0 : _c.value,
                    CityId: (_d = this.geoServicibilityForm.get('CityId')) === null || _d === void 0 ? void 0 : _d.value,
                    PinCode: (_e = this.geoServicibilityForm.get('PinCode')) === null || _e === void 0 ? void 0 : _e.value
                };
                console.log("Payload: ", payload);
                const payloadforget = {
                    Storecode: "1001070099",
                    Media_Profile_Flg: false,
                    Mangmt_Profile_Flg: false,
                    Prod_Servc_Profile_Flg: false,
                    Client_Profile_Flg: false,
                    Geo_Service_Profile_Flg: true,
                    Corp_Contact_Profile_Flg: false
                };
                try {
                    const res1 = yield firstValueFrom(this.apiService.postCall(this.apiService.baseURL + '/AddMDR_ServiceabilityGeoAddon', payload));
                    console.log("First API response:", res1);
                    this.toastr.success(res1.Message, "", { timeOut: 5000 });
                    const res2 = yield firstValueFrom(this.apiService.postCall(this.apiService.baseURL + '/GetMdrProfileAddons', payloadforget));
                    console.log("Geo: ", res2);
                    this.geoservicibilityArr = Array.isArray(res2) ? res2 : ((_f = res2 === null || res2 === void 0 ? void 0 : res2.MNGMT_LIST) !== null && _f !== void 0 ? _f : []);
                    console.log("Mapped Profiles:", this.geoservicibilityArr);
                    (_g = this.modalRef) === null || _g === void 0 ? void 0 : _g.hide();
                }
                catch (err) {
                    this.toastr.error(err, '', { timeOut: 5000 });
                }
            }
        });
    }
    onaddKeyManagementProfileSubmit() {
        var _a, _b, _c, _d, _e, _f, _g;
        return __awaiter(this, void 0, void 0, function* () {
            if (this.keyManagementForm.valid) {
                const payload = {
                    Storecode: "1001070099",
                    First_Name: (_a = this.keyManagementForm.get('firstName')) === null || _a === void 0 ? void 0 : _a.value,
                    Last_Name: (_b = this.keyManagementForm.get('lastName')) === null || _b === void 0 ? void 0 : _b.value,
                    Designation: (_c = this.keyManagementForm.get('designation')) === null || _c === void 0 ? void 0 : _c.value,
                    About_Txt: (_d = this.keyManagementForm.get('about')) === null || _d === void 0 ? void 0 : _d.value,
                    Person_Pic: (_e = this.keyManagementForm.get('profilePic')) === null || _e === void 0 ? void 0 : _e.value
                };
                const payloadforget = {
                    Storecode: "1001070099",
                    Media_Profile_Flg: false,
                    Mangmt_Profile_Flg: true,
                    Prod_Servc_Profile_Flg: false,
                    Client_Profile_Flg: false,
                    Geo_Service_Profile_Flg: false,
                    Corp_Contact_Profile_Flg: false
                };
                try {
                    const res1 = yield firstValueFrom(this.apiService.postCall(this.apiService.baseURL + '/AddMDR_ProfileMngmtAddon', payload));
                    console.log("First API response:", res1);
                    if (res1 === "Your plan limit is already consumed fully so management is not added")
                        this.toastr.error(res1, "", { timeOut: 5000 });
                    else
                        this.toastr.success(res1, "", { timeOut: 5000 });
                    const res2 = yield firstValueFrom(this.apiService.postCall(this.apiService.baseURL + '/GetMdrProfileAddons', payloadforget));
                    this.keyManagementProfileArr = Array.isArray(res2) ? res2 : ((_f = res2 === null || res2 === void 0 ? void 0 : res2.MNGMT_LIST) !== null && _f !== void 0 ? _f : []);
                    console.log("Mapped Profiles:", this.keyManagementProfileArr);
                    (_g = this.modalRef) === null || _g === void 0 ? void 0 : _g.hide();
                }
                catch (err) {
                    this.toastr.error(err, '', { timeOut: 5000 });
                }
            }
        });
    }
    openeditClientRecommendations(client, template) {
        this.ProfilePicaddclient = "";
        this.editclientandrecommendation = {
            Storecode: "1001070099",
            Clientid: client.MDR_STORE_CLIENT_ID,
            Client_Org_Name: client.MDR_STORE_CLIENT_ORG,
            Client_First_Name: client.MDR_STORE_CLIENT_REP_FIRSTNAME,
            Client_Last_Name: client.MDR_STORE_CLIENT_REP_LASTNAME,
            Designation: client.MDR_STORE_CLIENT_REP_DESIGNATION,
            Person_Pic: '',
            Appreciation_Txt: client.MDR_STORE_CLIENT_SAID_ABOUT_TEXT,
            Activ_Flg: client.MDR_STORE_CLIENT_ACTIV_FLG
        };
        console.log(this.editclientandrecommendation);
        this.openModal(template);
    }
    oneditClientRecommendation() {
        var _a;
        if (this.editclientandrecommendation.Prd_Srvc_Image === '') {
            return;
        }
        console.log(this.editclientandrecommendation);
        let payload = {
            Storecode: "1001070099",
            Media_Profile_Flg: false,
            Mangmt_Profile_Flg: false,
            Prod_Servc_Profile_Flg: false,
            Client_Profile_Flg: true,
            Geo_Service_Profile_Flg: false,
            Corp_Contact_Profile_Flg: false
        };
        this.apiService.postCall(this.apiService.baseURL + '/EditMDR_ProfileClientAddon', this.editclientandrecommendation)
            .subscribe({
            next: (data) => {
                console.log(data);
                this.toastr.success(data.Message);
                this.apiService.postCall(this.apiService.baseURL + '/GetMdrProfileAddons', payload)
                    .subscribe({
                    next: (data) => {
                        this.clientRecommendationArr = data;
                    },
                    error: (error) => {
                        this.toastr.error(error, '', { timeOut: 5000 });
                    }
                });
            },
            error: (error) => {
                this.toastr.error(error, '', { timeOut: 5000 });
            }
        });
        (_a = this.modalRef) === null || _a === void 0 ? void 0 : _a.hide();
    }
    openditProductService(product, template) {
        this.mediaImageUrl2 = "";
        this.editproductservice = {
            Storecode: "1001070099",
            Prd_Srvc_id: product.MDR_STORE_PRDCT_SERVC_ID,
            Prd_Srvc_Txt: product.MDR_STORE_PRDCT_SERVC_TXT,
            Prd_Srvc_Image: '',
            Activ_Flg: product.MDR_STORE_PRDCT_SERVC_ACTIV_FLG
        };
        console.log(this.editproductservice);
        this.openModal(template);
    }
    oneditGeoServicibility() {
        var _a;
        console.log(this.editgeoservicibility);
        let payload = {
            Storecode: "1001070099",
            Media_Profile_Flg: false,
            Mangmt_Profile_Flg: false,
            Prod_Servc_Profile_Flg: false,
            Client_Profile_Flg: false,
            Geo_Service_Profile_Flg: true,
            Corp_Contact_Profile_Flg: false
        };
        this.apiService.postCall(this.apiService.baseURL + '/EditMDR_ServiceabilityGeoAddon', this.editgeoservicibility)
            .subscribe({
            next: (data) => {
                console.log(data);
                this.toastr.success(data.Message);
                this.apiService.postCall(this.apiService.baseURL + '/GetMdrProfileAddons', payload)
                    .subscribe({
                    next: (data) => {
                        this.geoservicibilityArr = data;
                    },
                    error: (error) => {
                        this.toastr.error(error, '', { timeOut: 5000 });
                    }
                });
            },
            error: (error) => {
                this.toastr.error(error, '', { timeOut: 5000 });
            }
        });
        (_a = this.modalRef) === null || _a === void 0 ? void 0 : _a.hide();
    }
    showDetails(object, template) {
        this.detail = object;
        this.openSmallModal(template);
    }
    oneditProductService() {
        var _a;
        if (this.editproductservice.Prd_Srvc_Image === '') {
            return;
        }
        console.log(this.editproductservice);
        let payload = {
            Storecode: "1001070099",
            Media_Profile_Flg: false,
            Mangmt_Profile_Flg: false,
            Prod_Servc_Profile_Flg: true,
            Client_Profile_Flg: false,
            Geo_Service_Profile_Flg: false,
            Corp_Contact_Profile_Flg: false
        };
        this.apiService.postCall(this.apiService.baseURL + '/EditMDR_ProfilePRDCTSERVCAddon', this.editproductservice)
            .subscribe({
            next: (data) => {
                console.log(data);
                this.toastr.success(data.Message);
                this.apiService.postCall(this.apiService.baseURL + '/GetMdrProfileAddons', payload)
                    .subscribe({
                    next: (data) => {
                        this.storeandprdtArr = data;
                    },
                    error: (error) => {
                        this.toastr.error(error, '', { timeOut: 5000 });
                    }
                });
            },
            error: (error) => {
                this.toastr.error(error, '', { timeOut: 5000 });
            }
        });
        (_a = this.modalRef) === null || _a === void 0 ? void 0 : _a.hide();
    }
    openeditKeyManagementProfile(profile, template) {
        this.profilePicUrladdKeyManagement = "";
        this.editkeymanagementprofile = {
            StoreCode: "1001070099",
            Mngmt_id: profile.MDR_TOP_MANAGEMENT_ID,
            First_Name: profile.MDR_TOP_MNGMT_FIRST_NAME,
            Last_Name: profile.MDR_TOP_MNGMT_LAST_NAME,
            Designation: profile.MDR_TOP_MNGMT_CORP_TITLE,
            About_Txt: profile.MDR_TOP_MNGMT_ABOUT_TXT,
            Person_PIC: '',
            Activ_Flg: profile.MDR_TOP_MNGMT_ACTIV_FLG
        };
        console.log(this.editkeymanagementprofile);
        this.openModal(template);
    }
    oneditKeyManagementProfileSubmit() {
        var _a;
        if (this.editkeymanagementprofile.Person_PIC === '') {
            return;
        }
        console.log(this.editkeymanagementprofile);
        let payload = {
            Storecode: "1001070099",
            Media_Profile_Flg: false,
            Mangmt_Profile_Flg: true,
            Prod_Servc_Profile_Flg: false,
            Client_Profile_Flg: false,
            Geo_Service_Profile_Flg: false,
            Corp_Contact_Profile_Flg: false
        };
        this.apiService.postCall(this.apiService.baseURL + '/EditMDR_ProfileMngmtAddon', this.editkeymanagementprofile)
            .subscribe({
            next: (data) => {
                console.log(data);
                this.toastr.success(data.Message);
                this.apiService.postCall(this.apiService.baseURL + '/GetMdrProfileAddons', payload)
                    .subscribe({
                    next: (data) => {
                        if (data && data.length > 0) {
                            this.keyManagementProfileArr = data;
                        }
                    },
                    error: (error) => {
                        this.toastr.error(error, '', { timeOut: 5000 });
                    }
                });
            },
            error: (error) => {
                this.toastr.error(error, '', { timeOut: 5000 });
            }
        });
        (_a = this.modalRef) === null || _a === void 0 ? void 0 : _a.hide();
    }
    onMediaImageSelectedaddMediaCertification(event) {
        const input = event.target;
        if (input.files && input.files[0]) {
            const file = input.files[0];
            const reader = new FileReader();
            reader.onload = () => {
                var _a;
                const base64WithPrefix = reader.result;
                this.mediaImageUrl = base64WithPrefix;
                const base64String = base64WithPrefix.split(',')[1];
                (_a = this.mediaCertificationForm.get('mediaPic')) === null || _a === void 0 ? void 0 : _a.setValue(base64String);
                this.editMedia.MediaImage = base64String;
                // console.log("Base64 (no prefix):", base64String);
            };
            reader.readAsDataURL(file);
        }
    }
    onMediaImageSelectedaddProductAndService(event) {
        const input = event.target;
        if (input.files && input.files[0]) {
            const file = input.files[0];
            const reader = new FileReader();
            reader.onload = () => {
                var _a;
                const base64WithPrefix = reader.result;
                this.mediaImageUrl2 = base64WithPrefix;
                const base64String = base64WithPrefix.split(',')[1];
                (_a = this.productServiceForm.get('Prdct_Servc_Image')) === null || _a === void 0 ? void 0 : _a.setValue(base64String);
                this.editproductservice.Prd_Srvc_Image = base64String;
                // console.log("Base64 (no prefix):", base64String);
            };
            reader.readAsDataURL(file);
        }
    }
    onMediaImageaddClientRecommendation(event) {
        const input = event.target;
        if (input.files && input.files[0]) {
            const file = input.files[0];
            const reader = new FileReader();
            reader.onload = () => {
                var _a;
                const base64WithPrefix = reader.result;
                this.ProfilePicaddclient = base64WithPrefix;
                const base64String = base64WithPrefix.split(',')[1];
                (_a = this.clientRecommendationForm.get('Person_Pic')) === null || _a === void 0 ? void 0 : _a.setValue(base64String);
                this.editclientandrecommendation.Person_Pic = base64String;
                // console.log("Base64 (no prefix):", base64String);
            };
            reader.readAsDataURL(file);
        }
    }
    onSubmitClientRecommendation() {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        return __awaiter(this, void 0, void 0, function* () {
            if (this.clientRecommendationForm.valid) {
                const payload = {
                    Storecode: "1001070099",
                    Client_Org_Name: (_a = this.clientRecommendationForm.get('Client_Org_Name')) === null || _a === void 0 ? void 0 : _a.value,
                    Client_First_Name: (_b = this.clientRecommendationForm.get('Client_First_Name')) === null || _b === void 0 ? void 0 : _b.value,
                    Client_Last_Name: (_c = this.clientRecommendationForm.get('Client_Last_Name')) === null || _c === void 0 ? void 0 : _c.value,
                    Designation: (_d = this.clientRecommendationForm.get('Designation')) === null || _d === void 0 ? void 0 : _d.value,
                    Person_Pic: (_e = this.clientRecommendationForm.get('Person_Pic')) === null || _e === void 0 ? void 0 : _e.value,
                    Appreciation_Txt: (_f = this.clientRecommendationForm.get('Appreciation_Txt')) === null || _f === void 0 ? void 0 : _f.value
                };
                const payloadforget = {
                    Storecode: "1001070099",
                    Media_Profile_Flg: false,
                    Mangmt_Profile_Flg: false,
                    Prod_Servc_Profile_Flg: false,
                    Client_Profile_Flg: true,
                    Geo_Service_Profile_Flg: false,
                    Corp_Contact_Profile_Flg: false
                };
                try {
                    const res1 = yield firstValueFrom(this.apiService.postCall(this.apiService.baseURL + '/AddMDR_ProfileClientAddon', payload));
                    console.log("First API response:", res1);
                    this.toastr.success(res1.Message, "", { timeOut: 5000 });
                    const res2 = yield firstValueFrom(this.apiService.postCall(this.apiService.baseURL + '/GetMdrProfileAddons', payloadforget));
                    console.log("Clients: ", res2);
                    this.clientRecommendationArr = Array.isArray(res2) ? res2 : ((_g = res2 === null || res2 === void 0 ? void 0 : res2.MNGMT_LIST) !== null && _g !== void 0 ? _g : []);
                    console.log("Client & Recommendation:", this.clientRecommendationArr);
                    (_h = this.modalRef) === null || _h === void 0 ? void 0 : _h.hide();
                }
                catch (err) {
                    this.toastr.error(err, '', { timeOut: 5000 });
                }
            }
        });
    }
    onSubmitMediaCertification() {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            if (this.mediaCertificationForm.valid) {
                const formData = this.mediaCertificationForm.value;
                const payload = {
                    StoreCode: "1001070099",
                    HeaderText: formData.details,
                    MediaImage: formData.mediaPic,
                    MediaSubject: formData.subject
                };
                console.log("Payload: ", payload);
                const payloadforget = {
                    Storecode: "1001070099",
                    Media_Profile_Flg: true,
                    Mangmt_Profile_Flg: false,
                    Prod_Servc_Profile_Flg: false,
                    Client_Profile_Flg: false,
                    Geo_Service_Profile_Flg: false,
                    Corp_Contact_Profile_Flg: false
                };
                try {
                    const res1 = yield firstValueFrom(this.apiService.postCall(this.apiService.baseURL + '/AddMDR_ProfileMediaAddon', payload));
                    console.log("First API response:", res1);
                    this.toastr.success(res1.Message, "", { timeOut: 5000 });
                    const res2 = yield firstValueFrom(this.apiService.postCall(this.apiService.baseURL + '/GetMdrProfileAddons', payloadforget));
                    console.log("Media: ", res2);
                    this.mediaCertificationsArr = Array.isArray(res2) ? res2 : ((_a = res2 === null || res2 === void 0 ? void 0 : res2.MEDIA_LIST) !== null && _a !== void 0 ? _a : []);
                    console.log("Mapped Media Certifications:", this.mediaCertificationsArr);
                    (_b = this.modalRef) === null || _b === void 0 ? void 0 : _b.hide();
                }
                catch (err) {
                    this.toastr.error(err, '', { timeOut: 5000 });
                }
            }
            else {
                this.toastr.warning("Please fill all required fields!", "", { timeOut: 3000 });
            }
        });
    }
    openeditMediaCerification(media, template) {
        this.mediaImageUrl = "";
        this.editMedia = {
            StoreCode: "1001070099",
            MediaId: media.MDR_MEDIA_ID,
            HeaderText: media.MDR_MEDIA_HEAD_TXT,
            MediaImage: "",
            MediaSubject: media.MDR_MEDIA_SUBJCT_TXT,
            ActivFlg: media.MDR_MEDIA_ACTIV_FLG
        };
        console.log(this.editMedia);
        this.openModal(template);
    }
    editMediaCerification() {
        var _a;
        if (this.editMedia.MediaImage === '') {
            return;
        }
        console.log("Edit media: ", this.editMedia);
        let payload = {
            Storecode: "1001070099",
            Media_Profile_Flg: true,
            Mangmt_Profile_Flg: false,
            Prod_Servc_Profile_Flg: false,
            Client_Profile_Flg: false,
            Geo_Service_Profile_Flg: false,
            Corp_Contact_Profile_Flg: false
        };
        this.apiService.postCall(this.apiService.baseURL + '/EditMDR_ProfileMediaAddon', this.editMedia)
            .subscribe({
            next: (data) => {
                console.log(data);
                this.toastr.success(data.Message);
                this.apiService.postCall(this.apiService.baseURL + '/GetMdrProfileAddons', payload)
                    .subscribe({
                    next: (data) => {
                        this.mediaCertificationsArr = data;
                    },
                    error: (error) => {
                        this.toastr.error(error, '', { timeOut: 5000 });
                    }
                });
            },
            error: (error) => {
                this.toastr.error(error, '', { timeOut: 5000 });
            }
        });
        (_a = this.modalRef) === null || _a === void 0 ? void 0 : _a.hide();
    }
    onSubmitProductService() {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            if (this.productServiceForm.valid) {
                console.log(this.productServiceForm.value);
                const payload = {
                    Storecode: "1001070099",
                    Prdct_Servc_Txt: this.productServiceForm.value.Prdct_Servc_Txt,
                    Prdct_Servc_Image: this.productServiceForm.value.Prdct_Servc_Image
                };
                const payloadforget = {
                    Storecode: "1001070099",
                    Media_Profile_Flg: false,
                    Mangmt_Profile_Flg: false,
                    Prod_Servc_Profile_Flg: true,
                    Client_Profile_Flg: false,
                    Geo_Service_Profile_Flg: false,
                    Corp_Contact_Profile_Flg: false
                };
                try {
                    const res1 = yield firstValueFrom(this.apiService.postCall(this.apiService.baseURL + '/AddMDR_ProfilePRDCTSERVCAddon', payload));
                    console.log("First API response:", res1);
                    if (typeof res1 === "string" && res1.includes("limit")) {
                        this.toastr.error(res1, "", { timeOut: 5000 });
                    }
                    else {
                        this.toastr.success("Product and Service saved successfully!", "", { timeOut: 5000 });
                    }
                    yield new Promise(resolve => setTimeout(resolve, 1000));
                    const res2 = yield firstValueFrom(this.apiService.postCall(this.apiService.baseURL + '/GetMdrProfileAddons', payloadforget));
                    console.log("REs: ", res2);
                    this.storeandprdtArr = Array.isArray(res2) ? res2 : ((_a = res2 === null || res2 === void 0 ? void 0 : res2.MEDIA_LIST) !== null && _a !== void 0 ? _a : []);
                    console.log("Store and Services:", this.storeandprdtArr);
                    (_b = this.modalRef) === null || _b === void 0 ? void 0 : _b.hide();
                }
                catch (err) {
                    console.error("Error:", err);
                    this.toastr.error("Failed to save Media Certification!", "", { timeOut: 5000 });
                }
            }
            else {
                this.toastr.warning("Please fill all required fields!", "", { timeOut: 3000 });
            }
        });
    }
    loadMainProfile() {
        console.log("Main Profile function executed");
        this.apiService.getCall(this.apiService.baseURL + `/GetSingleMdrStoreMasterProfile/${1001070099}`)
            .subscribe({
            next: (data) => {
                this.mainProfileForm.patchValue({
                    Login_Storecode: data.storecode || '1001070099',
                    Main_Display_Text: data.MDR_CORP_PROFILE_DISPLAY_TEXT,
                    Corp_Logo: data.MDR_CORP_LOGO,
                    Corp_About_Text: data.MDR_CORP_ABOUT_TEXT,
                    Website_URL: data.Website_URL || '',
                    Corp_PhoneNumber: data.Corp_PhoneNumber || '',
                    Corp_Emailid: data.Corp_Emailid || '',
                    Corp_Responder_Name: data.Corp_Responder_Name || '',
                    MainProfile_Mngmt_Pic: data.MDR_TOP_MNGMT_PIC_IMAGE,
                    MainProfile_FirstName: data.MDR_TOP_MNGMT_FIRST_NAME,
                    MainProfile_LastName: data.MDR_TOP_MNGMT_LAST_NAME,
                    MainProfile_Designation: data.MDR_TOP_MNGMT_CORP_TITLE,
                    Mngmt_About_Text: data.Mngmt_About_Text || '',
                    Employee_Counts: data.MDR_NO_OF_EMPLOYEES_COUNTS
                });
                console.log("Profile data: ", this.mainProfileForm.value);
                if (data && data.MDR_MEMBERSHIP_ID) {
                    this.mainProfileForm.disable();
                    this.isProfileExisting = true;
                }
            },
            error: (error) => {
                this.toastr.error(error, '', { timeOut: 5000 });
            }
        });
    }
    onOrgLogoChange(event) {
        const input = event.target;
        if (input.files && input.files[0]) {
            const file = input.files[0];
            const reader = new FileReader();
            reader.onload = () => {
                var _a;
                const base64WithPrefix = reader.result;
                this.orgLogoUrl = base64WithPrefix;
                const base64String = base64WithPrefix.split(',')[1];
                (_a = this.mainProfileForm.get('Corp_Logo')) === null || _a === void 0 ? void 0 : _a.setValue(base64String);
                // console.log("Org Logo Base64 (no prefix):", base64String);
            };
            reader.readAsDataURL(file);
        }
    }
    onProfilePicChange(event) {
        const input = event.target;
        if (input.files && input.files[0]) {
            const file = input.files[0];
            const reader = new FileReader();
            reader.onload = () => {
                var _a;
                const base64WithPrefix = reader.result;
                this.profilePicUrl = base64WithPrefix;
                const base64String = base64WithPrefix.split(',')[1];
                (_a = this.mainProfileForm.get('MainProfile_Mngmt_Pic')) === null || _a === void 0 ? void 0 : _a.setValue(base64String);
                // console.log("Base64 (no prefix):", base64String);
            };
            reader.readAsDataURL(file);
        }
    }
    onProfilePicChangeaddKeyManagementProfile(event) {
        const input = event.target;
        if (input.files && input.files[0]) {
            const file = input.files[0];
            const reader = new FileReader();
            reader.onload = () => {
                var _a;
                const base64WithPrefix = reader.result;
                this.profilePicUrladdKeyManagement = base64WithPrefix;
                const base64String = base64WithPrefix.split(',')[1];
                this.editkeymanagementprofile.Person_PIC = base64String;
                (_a = this.keyManagementForm.get('profilePic')) === null || _a === void 0 ? void 0 : _a.setValue(base64String);
                // console.log("Base64 (no prefix):", base64String);
            };
            reader.readAsDataURL(file);
        }
    }
    onMediaImageSelected(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                this.media.imageUrl = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    }
    addMedia() {
        var _a;
        console.log('Media:', this.media);
        (_a = this.modalRef) === null || _a === void 0 ? void 0 : _a.hide();
    }
    onProfileImageSelected(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                this.keyProfile.imageUrl = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    }
    addKeyProfile() {
        var _a;
        console.log('Key Profile:', this.keyProfile);
        (_a = this.modalRef) === null || _a === void 0 ? void 0 : _a.hide();
    }
    openModal(template) {
        this.modalRef = this.modalService.show(template, Object.assign({}, { class: 'modal-lg' }));
    }
    openSmallModal(template) {
        this.modalRef = this.modalService.show(template, Object.assign({}, { class: 'modal-md' }));
    }
    onSubmit() {
        if (this.mainProfileForm.valid) {
            const payload = this.mainProfileForm.getRawValue();
            const apiUrl = this.isProfileExisting
                ? this.apiService.baseURL + '/EditMDR_MainProfile'
                : this.apiService.baseURL + '/AddMDR_MainProfile';
            this.apiService.postCall(apiUrl, payload).subscribe({
                next: (data) => {
                    this.toastr.success('Profile saved successfully');
                    this.loadMainProfile();
                },
                error: (error) => {
                    this.toastr.error(error, '', { timeOut: 5000 });
                }
            });
        }
        else {
            this.mainProfileForm.markAllAsTouched();
        }
    }
    viewgeoServicibilityDetails(client) {
    }
    openeditgeoServicibilityClient(geo, template) {
        this.apiService.StateList(geo.MDR_SERVC_COUNTRY_ID).subscribe((stateRes) => {
            this.stateList = stateRes;
            console.log("State List: ", stateRes);
            this.apiService.CityList(geo.MDR_SERVC_COUNTRY_ID, geo.MDR_SERVC_STATE_ID).subscribe((cityRes) => {
                this.cityList = cityRes;
                console.log("City List: ", cityRes);
                const selectedState = this.stateList.find((s) => s.STATE_ID === geo.MDR_SERVC_STATE_ID);
                const stateName = selectedState ? selectedState.STATE_NM : null;
                const selectedCity = this.cityList.find((c) => c.CITY_ID === geo.MDR_SERVC_CITY_ID);
                const cityName = selectedCity ? selectedCity.CITY_NM : null;
                this.apiService.ZipList(stateName, cityName).subscribe((zipRes) => {
                    this.zipList = zipRes;
                    console.log("ZIP List: ", zipRes);
                });
            });
        });
        this.editgeoservicibility = {
            Storecode: "1001070099",
            ServiceId: geo.MDR_SERVC_ID,
            Geo_Category: geo.MDR_GEOSERVICIBILITY_CATGRY,
            CountryId: geo.MDR_SERVC_COUNTRY_ID,
            StateId: geo.MDR_SERVC_STATE_ID,
            CityId: geo.MDR_SERVC_CITY_ID,
            PinCode: geo.MDR_SERV_PINCODE,
            Activ_Flg: geo.MDR_GEO_ACTIV_FLG
        };
        console.log(this.editgeoservicibility);
        this.openModal(template);
    }
    getCountry() {
        this.apiService.CountryList().subscribe((res) => {
            console.log("Country List: ", res);
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
            this.zipList = null;
        }
    }
    getState() {
        this.apiService.StateList(this.countryID).subscribe((res) => {
            this.stateList = res;
            console.log("State List: ", res);
        });
    }
    changeState(e) {
        this.stateID = e.target.value;
        this.stateEvent.emit(this.stateID);
        this.stateName = e.target.options[e.target.options.selectedIndex].text;
        if (this.stateID) {
            this.getCity();
            this.cityList = null;
            this.zipList = null;
        }
        else {
            this.cityList = null;
            // this.zipList = null;
        }
    }
    getCity() {
        this.apiService.CityList(this.countryID, this.stateID).subscribe((res) => {
            this.cityList = res;
            console.log("City List: ", res);
        });
    }
    changeCity(e) {
        this.cityID = e.target.value;
        console.log(this.cityID);
        this.cityEvent.emit(this.cityID);
        this.cityName = e.target.options[e.target.options.selectedIndex].text;
        this.getZip();
    }
    getZip() {
        this.apiService.ZipList(this.stateName, this.cityName).subscribe((res) => {
            this.zipList = res;
            console.log(this.zipList);
        });
    }
    changePin(e) {
        // this.pinID =e.target.value;
        this.pinID = e.target.options[e.target.options.selectedIndex].text;
        console.log(this.pinID);
        this.pincodeEvent.emit(this.pinID);
    }
}
ProfileManagementComponent.ɵfac = function ProfileManagementComponent_Factory(t) { return new (t || ProfileManagementComponent)(i0.ɵɵdirectiveInject(i1.BsModalService), i0.ɵɵdirectiveInject(i2.FormBuilder), i0.ɵɵdirectiveInject(i3.ApiService), i0.ɵɵdirectiveInject(i4.ToastrService)); };
ProfileManagementComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ProfileManagementComponent, selectors: [["app-profile-management"]], outputs: { countryEvent: "countryEvent", stateEvent: "stateEvent", cityEvent: "cityEvent", pincodeEvent: "pincodeEvent" }, decls: 381, vars: 33, consts: [[1, "content"], [1, "heading-title"], [1, "card"], [1, "card-body", "pl-0", "pr-0"], ["heading", "Main Profile", "id", "tab1", 3, "selectTab"], [3, "formGroup"], [1, "row"], [1, "col-md-4"], [1, "form-group"], ["for", "storecode"], ["type", "text", "id", "storecode", "formControlName", "Login_Storecode", "disabled", "", 1, "form-control"], ["for", "firstName"], ["type", "text", "id", "firstName", "placeholder", "Enter first name", "formControlName", "MainProfile_FirstName", 1, "form-control"], ["for", "lastName"], ["type", "text", "id", "lastName", "placeholder", "Enter last name", "formControlName", "MainProfile_LastName", 1, "form-control"], ["for", "respondername"], ["type", "text", "id", "respondername", "placeholder", "Enter responder name", "formControlName", "Corp_Responder_Name", 1, "form-control"], ["for", "phoneNumber"], ["type", "tel", "id", "phoneNumber", "formControlName", "Corp_PhoneNumber", "placeholder", "Enter phone number", 1, "form-control"], ["class", "text-danger", 4, "ngIf"], ["for", "emailId"], ["type", "email", "id", "emailId", "formControlName", "Corp_Emailid", "placeholder", "Enter corporate email", 1, "form-control"], ["for", "designation"], ["type", "text", "id", "designation", "placeholder", "Enter designation", "formControlName", "MainProfile_Designation", 1, "form-control"], [1, "col-md-6"], ["for", "employee"], ["type", "number", "id", "employee", "placeholder", "Number of employees", "formControlName", "Employee_Counts", 1, "form-control"], ["for", "url"], ["type", "text", "id", "url", "placeholder", "Company website URL", "formControlName", "Website_URL", 1, "form-control"], ["for", "about"], ["type", "text", "placeholder", "Brief description of the management profile", "id", "about", "formControlName", "Mngmt_About_Text", 1, "form-control"], ["for", "mainText"], ["type", "text", "id", "mainText", "placeholder", "Primary tagline or display text", "formControlName", "Main_Display_Text", 1, "form-control"], [1, "col-md-12"], ["for", "profile"], ["placeholder", "Write a brief overview of the organization", "id", "profile", "rows", "2", "formControlName", "Corp_About_Text", 1, "form-control"], [1, "form-group", "border", "p-3", "rounded"], ["for", "orgLogo"], ["type", "file", "class", "form-control-file border p-2 rounded", "id", "orgLogo", 3, "change", 4, "ngIf"], ["class", "mt-2 border p-2 rounded", 4, "ngIf"], ["for", "profilePic"], ["type", "file", "class", "form-control-file border p-2 rounded", "id", "profilePic", 3, "change", 4, "ngIf"], [1, "col-md-12", "mb-3"], ["type", "submit", "class", "btn custom-btn float-right", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn custom-btn float-right", 3, "click", 4, "ngIf"], ["class", "btn custom-btn float-right", 3, "click", 4, "ngIf"], ["heading", "Key Management Profile", "id", "tab2", 3, "selectTab"], [1, "row", "topcontent"], [1, "col-md-6", "mb-3"], ["type", "button", 1, "btn", "custom-btn", "float-right", 3, "click"], [1, "card-body", "pa-0"], [1, "table"], [4, "ngFor", "ngForOf"], ["heading", "Media & Certifications", "id", "tab3", 3, "selectTab"], [4, "ngIf"], ["heading", "Product & Services", "id", "tab4", 3, "selectTab"], ["heading", "Clients & Recommendations", "id", "tab5", 3, "selectTab"], ["heading", "Geo Service", "id", "tab7", 3, "selectTab"], ["heading", "Corp Contact", "id", "tab6", 3, "selectTab"], [1, "mb-2"], [1, "table", "table-bordered", "table-sm", "custom-table"], [1, "actdct_icon"], [4, "ngIf", "ngIfElse"], ["notActive", ""], ["template", "<img src='assets/images/icons/please_wait.gif/>"], ["addKeyManagementProfile", ""], ["editKeyManagementProfile", ""], ["addMediaCertification", ""], ["editMediaCertification", ""], ["addProductService", ""], ["editProductService", ""], ["addClientRecommendation", ""], ["editClientRecommendation", ""], ["geoServicibility", ""], ["editgeoServicibility", ""], ["keymanagementProfileDetails", ""], ["mediaDetails", ""], ["productAndServiceDetails", ""], ["clientRecommendationDetails", ""], [1, "text-danger"], ["type", "file", "id", "orgLogo", 1, "form-control-file", "border", "p-2", "rounded", 3, "change"], [1, "mt-2", "border", "p-2", "rounded"], ["alt", "Organization Logo", 2, "max-width", "150px", "max-height", "150px", 3, "src"], ["alt", "Profile Picture", 2, "max-width", "150px", "max-height", "150px", 3, "src"], ["type", "file", "id", "profilePic", 1, "form-control-file", "border", "p-2", "rounded", 3, "change"], ["type", "submit", 1, "btn", "custom-btn", "float-right", 3, "click"], [1, "btn", "custom-btn", "float-right", 3, "click"], ["notOnMain", ""], [1, "btn", "btn-sm", "btn-outline-info", 3, "click"], ["alt", "Profile Image", 2, "max-width", "50px", "max-height", "50px", "object-fit", "cover", 3, "src"], ["title", "Edit", 1, "delete-icon"], [1, "fa", "fa-edit", 3, "click"], ["src", "assets/images/active_icon.png", "alt", "Yes"], ["src", "assets/images/deactive_icon.png", "alt", "No"], ["alt", "Media Image", 2, "max-width", "50px", "max-height", "50px", "object-fit", "cover", 3, "src"], ["alt", "Product Image", 2, "max-width", "50px", "max-height", "50px", "object-fit", "cover", 3, "src"], ["alt", "Client Image", 2, "max-width", "50px", "max-height", "50px", "object-fit", "cover", 3, "src"], [1, "fa", "fa-edit", 2, "cursor", "pointer", 3, "click"], ["src", "assets/images/active_icon.png", "alt", "Active"], ["src", "assets/images/deactive_icon.png", "alt", "Inactive"], [3, "formGroup", "ngSubmit"], [1, "modal-header"], [1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "btn-close", "close", "pull-right", 3, "click"], ["aria-hidden", "true", 1, "visually-hidden"], [1, "modal-body"], [1, "row", "mb-2"], ["type", "text", "placeholder", "Enter First Name", "formControlName", "firstName", 1, "form-control"], ["type", "text", "placeholder", "Enter Last Name", "formControlName", "lastName", 1, "form-control"], ["type", "text", "placeholder", "Enter Designation", "formControlName", "designation", 1, "form-control"], ["formControlName", "active", 1, "form-control"], [3, "ngValue"], ["rows", "3", "placeholder", "Enter short bio or role summary", "formControlName", "about", 1, "form-control"], [1, "row", "mb-3"], [1, "col-md-12", "text-right"], ["type", "submit", 1, "btn", "custom-btn", 3, "disabled"], ["type", "text", "placeholder", "Enter First Name", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Enter Last Name", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Enter Designation", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "form-control", 3, "ngModel", "ngModelChange"], ["rows", "3", "placeholder", "Enter short bio or role summary", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "custom-btn", 3, "click"], ["type", "text", "placeholder", "Enter Subject", "formControlName", "subject", 1, "form-control"], ["rows", "3", "placeholder", "Enter media description or certification detail", "formControlName", "details", 1, "form-control"], ["for", "mediaPic"], ["type", "file", "id", "mediaPic", 1, "form-control-file", "border", "p-2", "rounded", 3, "change"], ["alt", "Media", 2, "max-width", "150px", "max-height", "150px", 3, "src"], ["type", "text", "placeholder", "Enter Subject", 1, "form-control", 3, "ngModel", "ngModelChange"], ["rows", "3", "placeholder", "Enter media description or certification detail", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Enter Product / Service Name", "formControlName", "Prdct_Servc_Txt", 1, "form-control"], ["type", "file", "id", "mediaPic", "accept", "image/*", 1, "form-control-file", "border", "p-2", "rounded", 3, "change"], ["type", "text", "placeholder", "Enter Product / Service Name", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Enter Organization Name", "formControlName", "Client_Org_Name", 1, "form-control"], ["type", "text", "placeholder", "Enter First Name", "formControlName", "Client_First_Name", 1, "form-control"], ["type", "text", "placeholder", "Enter Last Name", "formControlName", "Client_Last_Name", 1, "form-control"], ["type", "text", "placeholder", "Enter Designation", "formControlName", "Designation", 1, "form-control"], ["rows", "3", "placeholder", "Enter appreciation or recommendation", "formControlName", "Appreciation_Txt", 1, "form-control"], ["for", "personPic"], ["type", "file", "id", "personPic", "accept", "image/*", 1, "form-control-file", "border", "p-2", "rounded", 3, "change"], ["type", "text", "placeholder", "Enter Organization Name", 1, "form-control", 3, "ngModel", "ngModelChange"], ["rows", "3", "placeholder", "Enter appreciation or recommendation", 1, "form-control", 3, "ngModel", "ngModelChange"], ["formControlName", "Geo_Category", 1, "form-control"], ["value", ""], [1, "form-row"], [1, "form-group", "col-md-3"], ["formControlName", "CountryId", 1, "form-control", 3, "change"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "StateId", 1, "form-control", 3, "change"], ["formControlName", "CityId", 1, "form-control", 3, "change"], ["selected", "", "value", ""], ["formControlName", "PinCode", 1, "form-control", 3, "change"], [1, "row", "mt-3"], [3, "value"], [1, "form-control", 3, "ngModel", "ngModelChange", "change"], [1, "modal-title"], ["class", "text-success", 4, "ngIf"], ["class", "text-muted", 4, "ngIf"], [1, "col-md-6", "text-secondary"], ["alt", "Profile Image", 1, "img-thumbnail", "rounded", "mt-1", 2, "max-width", "150px", "max-height", "150px", "object-fit", "cover", 3, "src"], ["src", "assets/images/active_icon.png", "alt", "Active", 2, "height", "20px"], ["src", "assets/images/deactive_icon.png", "alt", "Inactive", 2, "height", "20px"], [1, "text-success"], [1, "text-muted"], ["alt", "Media Image", 1, "img-thumbnail", "rounded", "mt-1", 2, "max-width", "150px", "max-height", "150px", "object-fit", "cover", 3, "src"], ["alt", "Product / Service Image", 1, "img-thumbnail", "rounded", "mt-1", 2, "max-width", "150px", "max-height", "150px", "object-fit", "cover", 3, "src"], ["alt", "Client Image", 1, "img-thumbnail", "rounded", "mt-1", 2, "max-width", "150px", "max-height", "150px", "object-fit", "cover", 3, "src"]], template: function ProfileManagementComponent_Template(rf, ctx) { if (rf & 1) {
        const _r211 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "div", 0)(1, "h1", 1);
        i0.ɵɵtext(2, "Profile Management");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "div", 2)(4, "div", 3)(5, "div")(6, "tabset")(7, "tab", 4);
        i0.ɵɵlistener("selectTab", function ProfileManagementComponent_Template_tab_selectTab_7_listener() { return ctx.onTabChange("Main Profile"); });
        i0.ɵɵelementStart(8, "form", 5)(9, "div", 6)(10, "div", 7)(11, "div", 8)(12, "label", 9);
        i0.ɵɵtext(13, "Store Code");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(14, "input", 10);
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(15, "div", 6)(16, "div", 7)(17, "div", 8)(18, "label", 11);
        i0.ɵɵtext(19, "First Name");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(20, "input", 12);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(21, "div", 7)(22, "div", 8)(23, "label", 13);
        i0.ɵɵtext(24, "Last Name");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(25, "input", 14);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(26, "div", 7)(27, "div", 8)(28, "label", 15);
        i0.ɵɵtext(29, "Responder Name");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(30, "input", 16);
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(31, "div", 6)(32, "div", 7)(33, "div", 8)(34, "label", 17);
        i0.ɵɵtext(35, "Corporate Phone Number");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(36, "input", 18);
        i0.ɵɵtemplate(37, ProfileManagementComponent_div_37_Template, 2, 0, "div", 19);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(38, "div", 7)(39, "div", 8)(40, "label", 20);
        i0.ɵɵtext(41, "Corporate Email");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(42, "input", 21);
        i0.ɵɵtemplate(43, ProfileManagementComponent_div_43_Template, 2, 0, "div", 19);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(44, "div", 7)(45, "div", 8)(46, "label", 22);
        i0.ɵɵtext(47, "Designation");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(48, "input", 23);
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(49, "div", 6)(50, "div", 24)(51, "div", 8)(52, "label", 25);
        i0.ɵɵtext(53, "Employees");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(54, "input", 26);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(55, "div", 24)(56, "div", 8)(57, "label", 27);
        i0.ɵɵtext(58, "Website URL");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(59, "input", 28);
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(60, "div", 6)(61, "div", 24)(62, "div", 8)(63, "label", 29);
        i0.ɵɵtext(64, "About above entered Management Main Profile");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(65, "input", 30);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(66, "div", 24)(67, "div", 8)(68, "label", 31);
        i0.ɵɵtext(69, "Organization main display text");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(70, "input", 32);
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(71, "div", 6)(72, "div", 33)(73, "div", 8)(74, "label", 34);
        i0.ɵɵtext(75, "Organization Profile");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(76, "textarea", 35);
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(77, "div", 6)(78, "div", 24)(79, "div", 36)(80, "label", 37);
        i0.ɵɵtext(81, "Organization Logo");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(82, ProfileManagementComponent_input_82_Template, 1, 0, "input", 38);
        i0.ɵɵtemplate(83, ProfileManagementComponent_div_83_Template, 2, 1, "div", 39);
        i0.ɵɵtemplate(84, ProfileManagementComponent_div_84_Template, 3, 6, "div", 39);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(85, "div", 24)(86, "div", 36)(87, "label", 40);
        i0.ɵɵtext(88, "Profile Picture");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(89, ProfileManagementComponent_input_89_Template, 1, 0, "input", 41);
        i0.ɵɵtemplate(90, ProfileManagementComponent_div_90_Template, 2, 1, "div", 39);
        i0.ɵɵtemplate(91, ProfileManagementComponent_div_91_Template, 3, 6, "div", 39);
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(92, "div", 6)(93, "div", 42);
        i0.ɵɵtemplate(94, ProfileManagementComponent_button_94_Template, 2, 0, "button", 43);
        i0.ɵɵtemplate(95, ProfileManagementComponent_button_95_Template, 2, 0, "button", 44);
        i0.ɵɵtemplate(96, ProfileManagementComponent_button_96_Template, 2, 0, "button", 45);
        i0.ɵɵelementEnd()()()();
        i0.ɵɵelementStart(97, "tab", 46);
        i0.ɵɵlistener("selectTab", function ProfileManagementComponent_Template_tab_selectTab_97_listener() { return ctx.onTabChange("Key Management Profile"); });
        i0.ɵɵelementStart(98, "div", 47)(99, "div", 48)(100, "span")(101, "strong");
        i0.ɵɵtext(102, "Profile Add-on: ");
        i0.ɵɵelementEnd();
        i0.ɵɵtext(103, "Key Management Profile");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(104, "div", 48)(105, "button", 49);
        i0.ɵɵlistener("click", function ProfileManagementComponent_Template_button_click_105_listener() { i0.ɵɵrestoreView(_r211); const _r19 = i0.ɵɵreference(354); return i0.ɵɵresetView(ctx.openModal(_r19)); });
        i0.ɵɵtext(106, "Add Management Profile");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(107, "div", 6)(108, "div", 50)(109, "table", 51)(110, "thead")(111, "tr")(112, "th");
        i0.ɵɵtext(113, "S#");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(114, "th");
        i0.ɵɵtext(115, "Id");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(116, "th");
        i0.ɵɵtext(117, "On-Main");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(118, "th");
        i0.ɵɵtext(119, "First Name");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(120, "th");
        i0.ɵɵtext(121, "Last Name");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(122, "th");
        i0.ɵɵtext(123, "Designation");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(124, "th");
        i0.ɵɵtext(125, "Detail");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(126, "th");
        i0.ɵɵtext(127, "Image");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(128, "th");
        i0.ɵɵtext(129, "Action");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(130, "tbody");
        i0.ɵɵtemplate(131, ProfileManagementComponent_tr_131_Template, 23, 13, "tr", 52);
        i0.ɵɵelementEnd()()()()();
        i0.ɵɵelementStart(132, "tab", 53);
        i0.ɵɵlistener("selectTab", function ProfileManagementComponent_Template_tab_selectTab_132_listener() { return ctx.onTabChange("Media & Certifications"); });
        i0.ɵɵelementStart(133, "div", 47)(134, "div", 48)(135, "span")(136, "strong");
        i0.ɵɵtext(137, "Profile Add-on: ");
        i0.ɵɵelementEnd();
        i0.ɵɵtext(138, "Media & Certifications");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(139, "div", 48)(140, "button", 49);
        i0.ɵɵlistener("click", function ProfileManagementComponent_Template_button_click_140_listener() { i0.ɵɵrestoreView(_r211); const _r23 = i0.ɵɵreference(358); return i0.ɵɵresetView(ctx.openModal(_r23)); });
        i0.ɵɵtext(141, "Add Media & Certifications");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(142, "div", 6)(143, "div", 50)(144, "table", 51)(145, "thead")(146, "tr")(147, "th");
        i0.ɵɵtext(148, "S#");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(149, "th");
        i0.ɵɵtext(150, "Id");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(151, "th");
        i0.ɵɵtext(152, "Active");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(153, "th");
        i0.ɵɵtext(154, "Subject");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(155, "th");
        i0.ɵɵtext(156, "Media Details");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(157, "th");
        i0.ɵɵtext(158, "Media Image");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(159, "th");
        i0.ɵɵtext(160, "Action");
        i0.ɵɵelementEnd()()();
        i0.ɵɵtemplate(161, ProfileManagementComponent_tbody_161_Template, 2, 1, "tbody", 54);
        i0.ɵɵelementEnd()()()();
        i0.ɵɵelementStart(162, "tab", 55);
        i0.ɵɵlistener("selectTab", function ProfileManagementComponent_Template_tab_selectTab_162_listener() { return ctx.onTabChange("Product & Services"); });
        i0.ɵɵelementStart(163, "div", 47)(164, "div", 48)(165, "span")(166, "strong");
        i0.ɵɵtext(167, "Profile Add-on: ");
        i0.ɵɵelementEnd();
        i0.ɵɵtext(168, "Product & Services");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(169, "div", 48)(170, "button", 49);
        i0.ɵɵlistener("click", function ProfileManagementComponent_Template_button_click_170_listener() { i0.ɵɵrestoreView(_r211); const _r27 = i0.ɵɵreference(362); return i0.ɵɵresetView(ctx.openModal(_r27)); });
        i0.ɵɵtext(171, "Add Product & Services");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(172, "div", 6)(173, "div", 50)(174, "table", 51)(175, "thead")(176, "tr")(177, "th");
        i0.ɵɵtext(178, "S#");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(179, "th");
        i0.ɵɵtext(180, "Id");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(181, "th");
        i0.ɵɵtext(182, "Active");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(183, "th");
        i0.ɵɵtext(184, "Products/Services");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(185, "th");
        i0.ɵɵtext(186, "Image");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(187, "th");
        i0.ɵɵtext(188, "Details");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(189, "th");
        i0.ɵɵtext(190, "Action");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(191, "tbody");
        i0.ɵɵtemplate(192, ProfileManagementComponent_tr_192_Template, 19, 9, "tr", 52);
        i0.ɵɵelementEnd()()()()();
        i0.ɵɵelementStart(193, "tab", 56);
        i0.ɵɵlistener("selectTab", function ProfileManagementComponent_Template_tab_selectTab_193_listener() { return ctx.onTabChange("Clients & Recommendations"); });
        i0.ɵɵelementStart(194, "div", 47)(195, "div", 48)(196, "span")(197, "strong");
        i0.ɵɵtext(198, "Profile Add-on: ");
        i0.ɵɵelementEnd();
        i0.ɵɵtext(199, "Clients & Recommendations");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(200, "div", 48)(201, "button", 49);
        i0.ɵɵlistener("click", function ProfileManagementComponent_Template_button_click_201_listener() { i0.ɵɵrestoreView(_r211); const _r31 = i0.ɵɵreference(366); return i0.ɵɵresetView(ctx.openModal(_r31)); });
        i0.ɵɵtext(202, "Add Clients & Recommendations");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(203, "div", 6)(204, "div", 50)(205, "table", 51)(206, "thead")(207, "tr")(208, "th");
        i0.ɵɵtext(209, "S#");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(210, "th");
        i0.ɵɵtext(211, "Id");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(212, "th");
        i0.ɵɵtext(213, "Active");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(214, "th");
        i0.ɵɵtext(215, "Client");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(216, "th");
        i0.ɵɵtext(217, "Representative");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(218, "th");
        i0.ɵɵtext(219, "Designation");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(220, "th");
        i0.ɵɵtext(221, "Image");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(222, "th");
        i0.ɵɵtext(223, "Appre details");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(224, "th");
        i0.ɵɵtext(225, "Action");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(226, "tbody");
        i0.ɵɵtemplate(227, ProfileManagementComponent_tr_227_Template, 23, 13, "tr", 52);
        i0.ɵɵelementEnd()()()()();
        i0.ɵɵelementStart(228, "tab", 57);
        i0.ɵɵlistener("selectTab", function ProfileManagementComponent_Template_tab_selectTab_228_listener() { return ctx.onTabChange("Geo Service"); });
        i0.ɵɵelementStart(229, "div", 47)(230, "div", 48)(231, "span")(232, "strong");
        i0.ɵɵtext(233, "Profile Add-on: ");
        i0.ɵɵelementEnd();
        i0.ɵɵtext(234, "Geo Servicibility");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(235, "div", 48)(236, "button", 49);
        i0.ɵɵlistener("click", function ProfileManagementComponent_Template_button_click_236_listener() { i0.ɵɵrestoreView(_r211); const _r35 = i0.ɵɵreference(370); return i0.ɵɵresetView(ctx.openModal(_r35)); });
        i0.ɵɵtext(237, "Add Geo Servicibility");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(238, "div", 6)(239, "div", 50)(240, "table", 51)(241, "thead")(242, "tr")(243, "th");
        i0.ɵɵtext(244, "S#");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(245, "th");
        i0.ɵɵtext(246, "Geo Category");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(247, "th");
        i0.ɵɵtext(248, "Active");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(249, "th");
        i0.ɵɵtext(250, "Country ID");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(251, "th");
        i0.ɵɵtext(252, "State ID");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(253, "th");
        i0.ɵɵtext(254, "City ID");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(255, "th");
        i0.ɵɵtext(256, "Pin Code");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(257, "th");
        i0.ɵɵtext(258, "Action");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(259, "tbody");
        i0.ɵɵtemplate(260, ProfileManagementComponent_tr_260_Template, 19, 8, "tr", 52);
        i0.ɵɵelementEnd()()()()();
        i0.ɵɵelementStart(261, "tab", 58);
        i0.ɵɵlistener("selectTab", function ProfileManagementComponent_Template_tab_selectTab_261_listener() { return ctx.onTabChange("Corp Contact"); });
        i0.ɵɵelementStart(262, "div", 6)(263, "div", 24)(264, "h5", 59);
        i0.ɵɵtext(265, "Corporate Information");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(266, "table", 60)(267, "tbody")(268, "tr")(269, "th");
        i0.ɵɵtext(270, "Corporate Name");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(271, "td");
        i0.ɵɵtext(272);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(273, "tr")(274, "th");
        i0.ɵɵtext(275, "Org GSTIN");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(276, "td");
        i0.ɵɵtext(277);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(278, "tr")(279, "th");
        i0.ɵɵtext(280, "Org Type");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(281, "td");
        i0.ɵɵtext(282);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(283, "tr")(284, "th");
        i0.ɵɵtext(285, "Contact Number");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(286, "td");
        i0.ɵɵtext(287);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(288, "tr")(289, "th");
        i0.ɵɵtext(290, "Email");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(291, "td");
        i0.ɵɵtext(292);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(293, "tr")(294, "th");
        i0.ɵɵtext(295, "Responder");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(296, "td");
        i0.ɵɵtext(297);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(298, "tr")(299, "th");
        i0.ɵɵtext(300, "Status");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(301, "td", 61);
        i0.ɵɵtemplate(302, ProfileManagementComponent_span_302_Template, 2, 0, "span", 62);
        i0.ɵɵtemplate(303, ProfileManagementComponent_ng_template_303_Template, 1, 0, "ng-template", null, 63, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵelementEnd()()()()();
        i0.ɵɵelementStart(305, "div", 24)(306, "h5", 59);
        i0.ɵɵtext(307, "Corporate Address");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(308, "table", 60)(309, "tbody")(310, "tr")(311, "th");
        i0.ɵɵtext(312, "Address");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(313, "td");
        i0.ɵɵtext(314);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(315, "tr")(316, "th");
        i0.ɵɵtext(317, "Landmark");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(318, "td");
        i0.ɵɵtext(319);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(320, "tr")(321, "th");
        i0.ɵɵtext(322, "Country");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(323, "td");
        i0.ɵɵtext(324);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(325, "tr")(326, "th");
        i0.ɵɵtext(327, "State");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(328, "td");
        i0.ɵɵtext(329);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(330, "tr")(331, "th");
        i0.ɵɵtext(332, "City");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(333, "td");
        i0.ɵɵtext(334);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(335, "tr")(336, "th");
        i0.ɵɵtext(337, "Pincode");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(338, "td");
        i0.ɵɵtext(339);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(340, "tr")(341, "th");
        i0.ɵɵtext(342, "Latitude");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(343, "td");
        i0.ɵɵtext(344);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(345, "tr")(346, "th");
        i0.ɵɵtext(347, "Longitude");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(348, "td");
        i0.ɵɵtext(349);
        i0.ɵɵelementEnd()()()()()()()()();
        i0.ɵɵelement(350, "br")(351, "br")(352, "ngx-spinner", 64);
        i0.ɵɵelementEnd()()();
        i0.ɵɵtemplate(353, ProfileManagementComponent_ng_template_353_Template, 45, 5, "ng-template", null, 65, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(355, ProfileManagementComponent_ng_template_355_Template, 45, 8, "ng-template", null, 66, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(357, ProfileManagementComponent_ng_template_357_Template, 36, 5, "ng-template", null, 67, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(359, ProfileManagementComponent_ng_template_359_Template, 36, 6, "ng-template", null, 68, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(361, ProfileManagementComponent_ng_template_361_Template, 23, 3, "ng-template", null, 69, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(363, ProfileManagementComponent_ng_template_363_Template, 31, 5, "ng-template", null, 70, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(365, ProfileManagementComponent_ng_template_365_Template, 42, 3, "ng-template", null, 71, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(367, ProfileManagementComponent_ng_template_367_Template, 42, 6, "ng-template", null, 72, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(369, ProfileManagementComponent_ng_template_369_Template, 54, 9, "ng-template", null, 73, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(371, ProfileManagementComponent_ng_template_371_Template, 62, 15, "ng-template", null, 74, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(373, ProfileManagementComponent_ng_template_373_Template, 61, 14, "ng-template", null, 75, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(375, ProfileManagementComponent_ng_template_375_Template, 41, 9, "ng-template", null, 76, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(377, ProfileManagementComponent_ng_template_377_Template, 35, 8, "ng-template", null, 77, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(379, ProfileManagementComponent_ng_template_379_Template, 53, 12, "ng-template", null, 78, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r17 = i0.ɵɵreference(304);
        let tmp_1_0;
        let tmp_2_0;
        i0.ɵɵadvance(8);
        i0.ɵɵproperty("formGroup", ctx.mainProfileForm);
        i0.ɵɵadvance(29);
        i0.ɵɵproperty("ngIf", ((tmp_1_0 = ctx.mainProfileForm.get("Corp_PhoneNumber")) == null ? null : tmp_1_0.invalid) && ((tmp_1_0 = ctx.mainProfileForm.get("Corp_PhoneNumber")) == null ? null : tmp_1_0.touched));
        i0.ɵɵadvance(6);
        i0.ɵɵproperty("ngIf", ((tmp_2_0 = ctx.mainProfileForm.get("Corp_Emailid")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx.mainProfileForm.get("Corp_Emailid")) == null ? null : tmp_2_0.touched));
        i0.ɵɵadvance(39);
        i0.ɵɵproperty("ngIf", !ctx.isProfileExisting);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.orgLogoUrl && !ctx.isProfileExisting);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.isProfileExisting);
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("ngIf", !ctx.isProfileExisting && !ctx.editenabled);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.profilePicUrl);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.isProfileExisting || ctx.editenabled);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", !ctx.isProfileExisting && !ctx.editenabled);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.isProfileExisting);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.editenabled);
        i0.ɵɵadvance(35);
        i0.ɵɵproperty("ngForOf", ctx.keyManagementProfileArr);
        i0.ɵɵadvance(30);
        i0.ɵɵproperty("ngIf", ctx.mediaCertificationsArr && ctx.mediaCertificationsArr.length > 0);
        i0.ɵɵadvance(31);
        i0.ɵɵproperty("ngForOf", ctx.storeandprdtArr);
        i0.ɵɵadvance(35);
        i0.ɵɵproperty("ngForOf", ctx.clientRecommendationArr);
        i0.ɵɵadvance(33);
        i0.ɵɵproperty("ngForOf", ctx.geoservicibilityArr);
        i0.ɵɵadvance(12);
        i0.ɵɵtextInterpolate(ctx.orgProfile.MDR_ORG_NAME);
        i0.ɵɵadvance(5);
        i0.ɵɵtextInterpolate(ctx.orgProfile.MDR_PROFILE_ORG_GSTIN);
        i0.ɵɵadvance(5);
        i0.ɵɵtextInterpolate(ctx.orgProfile.MDR_ORG_TYPE);
        i0.ɵɵadvance(5);
        i0.ɵɵtextInterpolate(ctx.orgProfile.MDR_CORP_CONTACT_NUMBER);
        i0.ɵɵadvance(5);
        i0.ɵɵtextInterpolate(ctx.orgProfile.MDR_CORP_CONTACT_EMAILID);
        i0.ɵɵadvance(5);
        i0.ɵɵtextInterpolate(ctx.orgProfile.MDR_CORP_RESPONDER);
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("ngIf", ctx.orgProfile.MDR_ADDRESS_ACTIV_FLG)("ngIfElse", _r17);
        i0.ɵɵadvance(12);
        i0.ɵɵtextInterpolate(ctx.orgProfile.MDR_ADDRESS);
        i0.ɵɵadvance(5);
        i0.ɵɵtextInterpolate(ctx.orgProfile.MDR_ADDRESS_LANDMARK);
        i0.ɵɵadvance(5);
        i0.ɵɵtextInterpolate(ctx.orgProfile.MDR_ADDRESS_COUNTRY);
        i0.ɵɵadvance(5);
        i0.ɵɵtextInterpolate(ctx.orgProfile.MDR_ADDRESS_STATE);
        i0.ɵɵadvance(5);
        i0.ɵɵtextInterpolate(ctx.orgProfile.MDR_ADDRESS_CITY);
        i0.ɵɵadvance(5);
        i0.ɵɵtextInterpolate(ctx.orgProfile.MDR_ADDRESS_PINCODE);
        i0.ɵɵadvance(5);
        i0.ɵɵtextInterpolate(ctx.orgProfile.MDR_ADDRESS_LATD || "-");
        i0.ɵɵadvance(5);
        i0.ɵɵtextInterpolate(ctx.orgProfile.MDR_ADDRESS_LONGTD || "-");
    } }, dependencies: [i5.NgForOf, i5.NgIf, i2.ɵNgNoValidate, i2.NgSelectOption, i2.ɵNgSelectMultipleOption, i2.DefaultValueAccessor, i2.NumberValueAccessor, i2.SelectControlValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.FormGroupDirective, i2.FormControlName, i2.NgModel, i6.TabDirective, i6.TabsetComponent, i7.NgxSpinnerComponent, i5.SlicePipe], styles: [".toplevel[_ngcontent-%COMP%] {\r\n    background: #fff;\r\n    padding: 20px;\r\n    margin-bottom: 15px;\r\n    margin-top: 10px;\r\n    border: 1px solid #ddd;\r\n    border-radius: 5px;\r\n}\r\n\r\n.table-font-size[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table-font-size[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n  font-size: 13px; \r\n}\r\n\r\n.vipDiv[_ngcontent-%COMP%] {\r\n    background: #f8f9fa;\r\n    padding: 15px;\r\n    border-radius: 3px;\r\n    min-height: 210px;\r\n}\r\n\r\n.orderStatus[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    vertical-align: middle;\r\n}\r\n\r\n.orderStatus[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n    font-size: 13px;\r\n    padding: 4px 10px;\r\n}\r\n\r\n.orderStatus[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\r\n    color: #c50f20;\r\n    font-size: 90%;\r\n    font-weight: 600;\r\n}\r\n\r\n.bottom-btn[_ngcontent-%COMP%] {\r\n    float: right;\r\n}\r\n\r\n.alert.alert-success[_ngcontent-%COMP%] {\r\n    padding: 5px 10px;\r\n}\r\n\r\n.alert[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\r\n    font-size: 25px;\r\n    vertical-align: middle;\r\n    margin-left: 5px;\r\n}\r\n\r\n.orderStatus[_ngcontent-%COMP%] {\r\n    .card-header {\r\n        border: 0;\r\n    }\r\n    .card-body {\r\n        padding: 0;\r\n        overflow: auto;\r\n    }\r\n}\r\n\r\nh3.head-title[_ngcontent-%COMP%] {\r\n    font-size: 22px;\r\n    margin: 20px 0;\r\n    font-weight: bold;\r\n}\r\n\r\n.icon[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    vertical-align: top;\r\n    color: #17a2b8;\r\n}\r\n\r\n.orderStatus[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    max-width: 25px;\r\n}\r\n\r\n.orderStatus[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n    background: #021422;\r\n    border-radius: 25px;\r\n    color: #fff;\r\n    font-size: 11px !important;\r\n    border: 1px solid #21333c;\r\n    i {\r\n        font-size: 18px;\r\n        vertical-align: middle;\r\n        padding-right: 5px;\r\n    }\r\n}\r\n\r\nbutton.btn.view-del-btn[_ngcontent-%COMP%] {\r\n    background: #63030c !important;\r\n}\r\n\r\n.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n    border: 0;\r\n}\r\n\r\n.toplevel[_ngcontent-%COMP%], .card[_ngcontent-%COMP%] {\r\n    padding: 0 20px 0;\r\n}\r\n\r\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n    padding: 8px 5px;\r\n    text-align: center;\r\n    line-height: 13px;\r\n    font-weight: 600;\r\n    font-size: 13px;\r\n    border-top: 0;\r\n}\r\n\r\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    font-size: 12px;\r\n    line-height: 15px;\r\n    padding: 10px 5px;\r\n}\r\n\r\ntd.icon[_ngcontent-%COMP%] {\r\n    padding: 0 !important;\r\n}\r\n\r\nbutton.btn.custom-btn[_ngcontent-%COMP%] {\r\n    min-width: 100px;\r\n}\r\n\r\n  .nav-tabs .nav-link {\r\n  font-size: 11px; \r\n}\r\n\r\nbutton.btn.custom-btn-white[_ngcontent-%COMP%] {\r\n    min-width: 100px;\r\n    background: #ffffff;\r\n    border: 1px solid #c50f20;\r\n    color: #c50f20;\r\n    font-weight: 600;\r\n\r\n    &:hover {\r\n        background: #c50f20;\r\n        color: #ffffff;\r\n    }\r\n}\r\n\r\n.input-group-prepend[_ngcontent-%COMP%] + .invalid-feedback[_ngcontent-%COMP%] {\r\n    top: 35px;\r\n}\r\n\r\n.card-header[_ngcontent-%COMP%] {\r\n    padding: 10px 15px;\r\n    background: #63030c;\r\n    font-size: 12px;\r\n    color: #fff;\r\n    font-weight: 500;\r\n    span {\r\n        float: left;\r\n    }\r\n    span+span {\r\n        float: right;\r\n    }\r\n}\r\n\r\n.card-header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 16px;\r\n    margin-left: 3px;\r\n}\r\n\r\n.subcard-header[_ngcontent-%COMP%] {\r\n    padding: 8px 12px;\r\n    background: #63030c;\r\n    font-size: 10px;\r\n    color: #fff;\r\n    font-weight: 500;\r\n    span {\r\n        float: left;\r\n    }\r\n    span+span {\r\n        float: right;\r\n    }\r\n}\r\n\r\n.subcard-header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 16px;\r\n    margin-left: 3px;\r\n}\r\n\r\n.icofont-info-circle[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    vertical-align: middle;\r\n    margin-left: 3px;\r\n}\r\n\r\n.orderList[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\r\n    background: #ff000029;\r\n}\r\n\r\n.orderList[_ngcontent-%COMP%] {\r\n    border-collapse: collapse;\r\n    border: 1px solid #ddd;\r\n    margin: 5px 0;\r\n}\r\n\r\n.orderList[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    border: 1px solid #ddd;\r\n}\r\n\r\n.orderList[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n    background: #212529;\r\n    color: #fff;\r\n    vertical-align: middle;\r\n}\r\n\r\n.no-border[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    border: 0 !important;\r\n    text-align: right !important;\r\n    font-weight: 600;\r\n    font-size: 12px !important;\r\n}\r\n\r\nsmall.view-customer[_ngcontent-%COMP%] {\r\n    display: block;\r\n    text-decoration: underline;\r\n    cursor: pointer;\r\n}\r\n\r\nbutton.btn.view-ord-btn[_ngcontent-%COMP%] {\r\n    min-width: 112px;\r\n}\r\n\r\nbutton.btn.view-del-btn[_ngcontent-%COMP%] {\r\n    min-width: 125px;\r\n}\r\n\r\n.card-body.no_data_available[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    color: #bd2130;\r\n    img {\r\n        display: block;\r\n        text-align: center;\r\n        margin: 0 auto 5px;\r\n        max-width: 30px;\r\n    }\r\n}\r\n\r\n\r\nsmall.viewCart[_ngcontent-%COMP%] {\r\n    text-decoration: underline;\r\n    cursor: pointer;\r\n}\r\n\r\n.hr[_ngcontent-%COMP%] {\r\n    border: none;\r\n    border-top: 1.5px solid #d1d1d1;\r\n    margin: 16px 0;\r\n    height: 0;\r\n    width: 100%;\r\n}\r\n\r\nh1.heading-title[_ngcontent-%COMP%] {\r\n    margin: 20px 0 0;\r\n}\r\n\r\n.heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    padding: 10px 5px 10px;\r\n    font-size: 20px;\r\n}\r\n\r\n.row.topLevel[_ngcontent-%COMP%] {\r\n    background: #fff;\r\n    padding: 20px 0;\r\n    margin: 0;\r\n    border-radius: 5px;\r\n}\r\n\r\n.heading.store-domain[_ngcontent-%COMP%] {\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.store-domain[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    margin-right: 20px;\r\n}\r\n\r\n.store-domain[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    background: #ddd;\r\n    padding: 5px 20px;\r\n    font-size: 13px;\r\n    border-radius: 20px;\r\n    display: inline-block;\r\n    font-weight: bold;\r\n    margin-left: 5px;\r\n}\r\n\r\n.store_id[_ngcontent-%COMP%] {\r\n    background: #ddd;\r\n    padding: 5px 20px;\r\n    border-radius: 20px;\r\n    font-size: 13px;\r\n    font-weight: 700;\r\n    float: right;\r\n    margin-top: -40px;\r\n}\r\n\r\n.box[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    overflow: hidden;\r\n    box-shadow: 0 0 4px 0px #eee;\r\n    margin: 20px 0 5px;\r\n    border-radius: 4px;\r\n    padding: 10px;\r\n    background: #fff;\r\n}\r\n\r\n.main-content-area[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\r\n    width: 20%;\r\n    float: left;\r\n    padding: 0;\r\n}\r\n\r\n.fa-star[_ngcontent-%COMP%]:before {\r\n    content: \"\\f005\";\r\n    color: #ff9600;\r\n    margin-right: 5px;\r\n}\r\n\r\n.pro-box[_ngcontent-%COMP%] {\r\n    box-shadow: 0 0 4px 0 #e9ecef;\r\n    margin: 0 5px 10px;\r\n    overflow: hidden;\r\n    padding: 15px;\r\n    border-radius: 3px;\r\n    position: relative;\r\n    border: 1px solid #dee2e6;\r\n}\r\n\r\n.pro-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    height: 100px;\r\n    width: 100px;\r\n    margin: 30px auto 15px;\r\n    display: block;\r\n}\r\n\r\n.storeitem[_ngcontent-%COMP%]   .p-details[_ngcontent-%COMP%] {\r\n    margin-bottom: 42px;\r\n}\r\n\r\np.label-txt[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    padding: 10px;\r\n    font-size: 14px;\r\n    margin: 0;\r\n}\r\n\r\n.store-available-product[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\r\n    width: 25% !important;\r\n}\r\n\r\n.selected-productLine[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .store-available-product[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\r\n    font-size: 16px;\r\n    padding: 0 10px 5px;\r\n}\r\n\r\n.right-field-head[_ngcontent-%COMP%] {\r\n    float: right;\r\n    margin-top: 10px;\r\n}\r\n\r\n.right-field-head[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    padding: 0 10px;\r\n}\r\n\r\nspan.video[_ngcontent-%COMP%], span.doc[_ngcontent-%COMP%] {\r\n    padding: 8px 15px;\r\n    background: #dee2e6;\r\n    font-size: 12px;\r\n    border-radius: 20px;\r\n}\r\n\r\n.right-field-head[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n    font-size: 11px;\r\n    border-radius: 20px;\r\n}\r\n\r\n.bottom-btn[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n    line-height: 11px;\r\n}\r\n\r\n.box.prduct-gallery[_ngcontent-%COMP%] {\r\n    position: relative;\r\n}\r\n\r\n.sample-img[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    z-index: 1;\r\n    left: 15%;\r\n    top: 28%;\r\n    transform: rotate(-45deg);\r\n}\r\n\r\np.p-name[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    margin: 0;\r\n    font-size: 13px;\r\n    font-weight: 500;\r\n    vertical-align: middle;\r\n}\r\n\r\np.item-id[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    position: absolute;\r\n    top: 0;\r\n    background: #212529;\r\n    left: 0;\r\n    font-weight: 600;\r\n    color: #fff;\r\n    border-radius: 0 0 5px;\r\n    font-size: 11px;\r\n    padding: 3px 6px;\r\n}\r\n\r\nspan.price[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n    padding: 7px 10px 0;\r\n    float: left;\r\n    font-weight: 600;\r\n    line-height: 20px;\r\n}\r\n\r\n.item-id[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\r\n    font-weight: 600;\r\n}\r\n\r\n.instock[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n    text-align: center;\r\n    margin: 0 0 3px;\r\n    position: absolute;\r\n    top: 5%;\r\n    box-shadow: 0 0 30px 0 rgb(82 63 105 / 10%);\r\n    left: 70%;\r\n    background: rgb(224 152 152 / 24%);\r\n    width: 50px;\r\n    border: 1px solid rgb(0 0 0 / 10%);\r\n    height: 50px;\r\n    border-radius: 50%;\r\n    img {\r\n        width: 30px !important;\r\n        height: 30px !important;\r\n        margin: 9px auto;\r\n    }\r\n}\r\n\r\n.pro-box.storeitem.item-box[_ngcontent-%COMP%] {\r\n    border: 1px solid #dee2e6;\r\n    height: 300px;\r\n    padding-left: 20px;\r\n    padding-right: 20px;\r\n}\r\n\r\nh1.heading-title[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    text-transform: uppercase;\r\n    font-weight: 700;\r\n    color: #ff7900;\r\n    position: relative;\r\n    margin-bottom: 10px;\r\n    width: 100%;\r\n    span {\r\n        font-size: 10px;\r\n        text-transform: inherit;\r\n        background: #495057;\r\n        color: #fff;\r\n        padding: 10px 15px;\r\n        border-radius: 25px;\r\n    }\r\n}\r\n\r\nh1.heading-title[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    max-width: 65px;\r\n    margin-right: 5px;\r\n}\r\n\r\nh1.heading-title[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    font-weight: 400;\r\n    font-size: 13px;\r\n    position: absolute;\r\n    left: 80px;\r\n    bottom: 4px;\r\n    color: grey;\r\n}\r\n\r\n.offerDiv[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 5px;\r\n    right: 5px;\r\n    font-size: 10px;\r\n    background: #dc3545;\r\n    line-height: 10px;\r\n    font-weight: 700;\r\n    width: 35px;\r\n    height: 35px;\r\n    border-radius: 50%;\r\n    padding: 9px;\r\n    text-align: center;\r\n    color: #fff;\r\n}\r\n\r\n.offerDiv[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\r\n    display: block;\r\n}\r\n\r\nspan.price.strike-price[_ngcontent-%COMP%] {\r\n    color: #ccc;\r\n    text-decoration: line-through;\r\n}\r\n\r\n.row.text-level[_ngcontent-%COMP%] {\r\n    margin: 0 -10px 10px;\r\n}\r\n\r\n.store-add-remove[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    padding: 10px;\r\n    float: left;\r\n    width: 100%;\r\n}\r\n\r\n.row.product-slider-box[_ngcontent-%COMP%] {\r\n    border-bottom: 5px solid #ddd;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.carousel-inner[_ngcontent-%COMP%] {\r\n    height: 278px;\r\n}\r\n\r\n.carousel-item[_ngcontent-%COMP%] {\r\n    margin-right: 0;\r\n    border: 1px solid #f8f9fa;\r\n    background: #fff;\r\n}\r\n\r\n.product-slider-box[_ngcontent-%COMP%]   .domain-product[_ngcontent-%COMP%] {\r\n    max-width: 23%;\r\n}\r\n\r\n.product-slider-box[_ngcontent-%COMP%]   .sub-domain-product[_ngcontent-%COMP%] {\r\n    max-width: 77%;\r\n}\r\n\r\n.store-add-remove[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n    font-size: 11px;\r\n    text-align: center;\r\n    float: left;\r\n    transition: all .5s;\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n    min-width: 65px;\r\n}\r\n\r\n.store-add-remove[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] + .btn[_ngcontent-%COMP%] {\r\n    float: right;\r\n}\r\n\r\n.item-subitem-list[_ngcontent-%COMP%]   .pro-box[_ngcontent-%COMP%] {\r\n    width: 95%;\r\n    overflow: auto;\r\n    height: 280px;\r\n}\r\n\r\n.item-subitem-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    float: left;\r\n}\r\n\r\n.item-box[_ngcontent-%COMP%] {\r\n    max-width: 225px;\r\n    width: 100%;\r\n    float: left;\r\n}\r\n\r\n.sub-item-box[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    float: left;\r\n    max-width: 225px;\r\n}\r\n\r\n.sub-item-box[_ngcontent-%COMP%]   .add_to_cart[_ngcontent-%COMP%]   button.btn[_ngcontent-%COMP%] {\r\n    background: #000064;\r\n    height: 35px;\r\n    font-size: 13px;\r\n    line-height: 16px;\r\n    color: #fff;\r\n    border-radius: 25px;\r\n    margin: 10px 0 0;\r\n    width: 100%;\r\n    text-align: center;\r\n}\r\n\r\n.add_to_cart[_ngcontent-%COMP%] {\r\n    .remove-btn {\r\n        border-radius: 50%;\r\n        background: #05054ead !important;\r\n        color: #fff;\r\n        height: 35px;\r\n        padding: 0;\r\n    }\r\n    .btn+.btn {\r\n        width: 100%;\r\n        border: 0;\r\n        border-radius: 30px;\r\n        font-size: 15px;\r\n        line-height: normal;\r\n        font-weight: 600;\r\n    }\r\n}\r\n\r\n.middle-arrow[_ngcontent-%COMP%] {\r\n    float: left;\r\n    width: 30px;\r\n    height: 50px;\r\n    font-size: 40px;\r\n    margin-top: 10%;\r\n    color: #dee2e6;\r\n    text-align: center;\r\n}\r\n\r\n.price-details[_ngcontent-%COMP%] {\r\n    float: left;\r\n    width: 100%;\r\n    margin-bottom: 10px;\r\n    font-size: 15px;\r\n    line-height: normal;\r\n    font-weight: 600;\r\n    .unit-price {\r\n        float: left;\r\n        width: 42%;\r\n    }\r\n}\r\n\r\n.unit-price[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    display: block;\r\n    font-size: 12px;\r\n    font-weight: 400;\r\n}\r\n\r\n.whole-sale-price[_ngcontent-%COMP%] {\r\n    float: right;\r\n    width: 58%;\r\n    text-align: right;\r\n    span {\r\n        font-size: 12px;\r\n        display: block;\r\n        font-weight: 400;\r\n    }\r\n}\r\n\r\n.add_to_cart[_ngcontent-%COMP%] {\r\n    clear: both;\r\n}\r\n\r\n.subItem-field[_ngcontent-%COMP%] {\r\n    width: calc(100% - 280px);\r\n    float: left;\r\n}\r\n\r\n.item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n\r\n.pro-box.active[_ngcontent-%COMP%] {\r\n    border: 1px solid #63030c;\r\n}\r\n\r\n.p-details[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\r\n    font-size: 13px;\r\n    padding: 0 5px;\r\n    min-height: 25px;\r\n    height: 25px;\r\n    text-align: center;\r\n}\r\n\r\n.p-details[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n    margin-bottom: 0;\r\n    font-weight: 400;\r\n    line-height: normal;\r\n    padding-top: 2px;\r\n    padding-bottom: 2px;\r\n}\r\n\r\n.p-details[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\r\n    margin-bottom: 4px;\r\n}\r\n\r\n.sub-item-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    margin-top: 5px !important;\r\n}\r\n\r\n.p-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n    line-height: 14px;\r\n}\r\n\r\n.add-stock[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    display: inline-block !important;\r\n    width: 60px !important;\r\n    margin-left: 5px;\r\n    vertical-align: middle;\r\n}\r\n\r\n.min-alert-count[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    width: 35px;\r\n    margin-left: 5px;\r\n    display: inline-block;\r\n    margin-right: 4px;\r\n}\r\n\r\n.d-flex[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] + span[_ngcontent-%COMP%] {\r\n    margin-left: auto;\r\n    font-weight: 600;\r\n    width: 60px;\r\n    i {\r\n        font-size: 16px;\r\n        color: #bd2130;\r\n        display: inline-block;\r\n        position: relative;\r\n        top: 2px;\r\n        cursor: pointer;\r\n    }\r\n}\r\n\r\n.sub-item-box[_ngcontent-%COMP%]   .pro-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    height: 55px;\r\n    width: 55px;\r\n    margin: 18px auto 8px;\r\n}\r\n\r\n.links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    display: block;\r\n    color: #17a2b8 !important;\r\n    text-decoration: underline !important;\r\n    font-size: 12px;\r\n    cursor: pointer;\r\n}\r\n\r\n.modal-header[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    margin: 5px 0;\r\n    color: #bd2130;\r\n}\r\n\r\n.field[_ngcontent-%COMP%] {\r\n    margin-bottom: 10px;\r\n    select {\r\n        border: 1px solid #ddd;\r\n        border-radius: 3px;\r\n        height: 26px;\r\n        font-size: 12px;\r\n        margin-left: 10px;\r\n        margin-top: -4px;\r\n        width: 60px;\r\n    }\r\n}\r\n\r\n.topcontent[_ngcontent-%COMP%] {\r\n    font-size: larger;\r\n}\r\n\r\n.actdct_icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    max-width: 45px;\r\n}\r\n\r\n.custom-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(odd) {\r\n  background-color: #f9f9f9; \r\n}\r\n\r\n.custom-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\r\n  background-color: #ffffff; \r\n}\r\n\r\n.custom-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n  width: 40%;\r\n  background-color: #f1f1f1; \r\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProfileManagementComponent, [{
        type: Component,
        args: [{ selector: 'app-profile-management', template: "<div class=\"content\">\n    <h1 class=\"heading-title\">Profile Management</h1>\n    <div class=\"card\">\n        <div class=\"card-body pl-0 pr-0\">\n            <div>\n                <tabset>\n\n                    <tab (selectTab)=\"onTabChange('Main Profile')\" heading=\"Main Profile\" id=\"tab1\">\n\n                        <form [formGroup]=\"mainProfileForm\">\n                            <div class=\"row\">\n                                <div class=\"col-md-4\">\n                                    <div class=\"form-group\">\n                                        <label for=\"storecode\">Store Code</label>\n                                        <input type=\"text\" class=\"form-control\" id=\"storecode\"\n                                            formControlName=\"Login_Storecode\" disabled>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"row\">\n                                <div class=\"col-md-4\">\n                                    <div class=\"form-group\">\n                                        <label for=\"firstName\">First Name</label>\n                                        <input type=\"text\" class=\"form-control\" id=\"firstName\"\n                                            placeholder=\"Enter first name\" formControlName=\"MainProfile_FirstName\">\n                                    </div>\n                                </div>\n                                <div class=\"col-md-4\">\n                                    <div class=\"form-group\">\n                                        <label for=\"lastName\">Last Name</label>\n                                        <input type=\"text\" class=\"form-control\" id=\"lastName\"\n                                            placeholder=\"Enter last name\" formControlName=\"MainProfile_LastName\">\n                                    </div>\n                                </div>\n                                <div class=\"col-md-4\">\n                                    <div class=\"form-group\">\n                                        <label for=\"respondername\">Responder Name</label>\n                                        <input type=\"text\" class=\"form-control\" id=\"respondername\"\n                                            placeholder=\"Enter responder name\" formControlName=\"Corp_Responder_Name\">\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"row\">\n                                <div class=\"col-md-4\">\n                                    <div class=\"form-group\">\n                                        <label for=\"phoneNumber\">Corporate Phone Number</label>\n                                        <input type=\"tel\" class=\"form-control\" id=\"phoneNumber\"\n                                            formControlName=\"Corp_PhoneNumber\" placeholder=\"Enter phone number\">\n                                        <div *ngIf=\"mainProfileForm.get('Corp_PhoneNumber')?.invalid && mainProfileForm.get('Corp_PhoneNumber')?.touched\"\n                                            class=\"text-danger\">\n                                            Phone number must be between 10 and 15 digits.\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div class=\"col-md-4\">\n                                    <div class=\"form-group\">\n                                        <label for=\"emailId\">Corporate Email</label>\n                                        <input type=\"email\" class=\"form-control\" id=\"emailId\"\n                                            formControlName=\"Corp_Emailid\" placeholder=\"Enter corporate email\">\n                                        <div *ngIf=\"mainProfileForm.get('Corp_Emailid')?.invalid && mainProfileForm.get('Corp_Emailid')?.touched\"\n                                            class=\"text-danger\">\n                                            Please enter a valid email address.\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div class=\"col-md-4\">\n                                    <div class=\"form-group\">\n                                        <label for=\"designation\">Designation</label>\n                                        <input type=\"text\" class=\"form-control\" id=\"designation\"\n                                            placeholder=\"Enter designation\" formControlName=\"MainProfile_Designation\">\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"row\">\n                                <div class=\"col-md-6\">\n                                    <div class=\"form-group\">\n                                        <label for=\"employee\">Employees</label>\n                                        <input type=\"number\" class=\"form-control\" id=\"employee\"\n                                            placeholder=\"Number of employees\" formControlName=\"Employee_Counts\">\n                                    </div>\n                                </div>\n\n                                <div class=\"col-md-6\">\n                                    <div class=\"form-group\">\n                                        <label for=\"url\">Website URL</label>\n                                        <input type=\"text\" class=\"form-control\" id=\"url\"\n                                            placeholder=\"Company website URL\" formControlName=\"Website_URL\">\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"row\">\n                                <div class=\"col-md-6\">\n                                    <div class=\"form-group\">\n                                        <label for=\"about\">About above entered Management Main Profile</label>\n                                        <input type=\"text\" placeholder=\"Brief description of the management profile\"\n                                            class=\"form-control\" id=\"about\" formControlName=\"Mngmt_About_Text\">\n                                    </div>\n                                </div>\n\n                                <div class=\"col-md-6\">\n                                    <div class=\"form-group\">\n                                        <label for=\"mainText\">Organization main display text</label>\n                                        <input type=\"text\" class=\"form-control\" id=\"mainText\"\n                                            placeholder=\"Primary tagline or display text\"\n                                            formControlName=\"Main_Display_Text\">\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n                                    <div class=\"form-group\">\n                                        <label for=\"profile\">Organization Profile</label>\n                                        <textarea placeholder=\"Write a brief overview of the organization\"\n                                            class=\"form-control\" id=\"profile\" rows=\"2\"\n                                            formControlName=\"Corp_About_Text\"></textarea>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"row\">\n                                <div class=\"col-md-6\">\n                                    <div class=\"form-group border p-3 rounded\">\n                                        <label for=\"orgLogo\">Organization Logo</label>\n                                        <input *ngIf=\"!isProfileExisting\" type=\"file\"\n                                            class=\"form-control-file border p-2 rounded\" id=\"orgLogo\"\n                                            (change)=\"onOrgLogoChange($event)\">\n                                        <div *ngIf=\"orgLogoUrl && !isProfileExisting\" class=\"mt-2 border p-2 rounded\">\n                                            <img [src]=\"orgLogoUrl\" alt=\"Organization Logo\"\n                                                style=\"max-width: 150px; max-height: 150px;\">\n                                        </div>\n\n                                        <div *ngIf=\"isProfileExisting\" class=\"mt-2 border p-2 rounded\">\n                                            <img src=\"{{imgURL}}{{mainProfileForm.get('Corp_Logo')?.value| slice:1:-4}}jpeg\"\n                                                alt=\"Profile Picture\" style=\"max-width: 150px; max-height: 150px;\">\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div class=\"col-md-6\">\n                                    <div class=\"form-group border p-3 rounded\">\n                                        <label for=\"profilePic\">Profile Picture</label>\n                                        <input *ngIf=\"!isProfileExisting && !editenabled\" type=\"file\"\n                                            class=\"form-control-file border p-2 rounded\" id=\"profilePic\"\n                                            (change)=\"onProfilePicChange($event)\">\n                                        <div *ngIf=\"profilePicUrl\" class=\"mt-2 border p-2 rounded\">\n                                            <img [src]=\"profilePicUrl\" alt=\"Profile Picture\"\n                                                style=\"max-width: 150px; max-height: 150px;\">\n                                        </div>\n\n                                        <div *ngIf=\"isProfileExisting || editenabled\" class=\"mt-2 border p-2 rounded\">\n                                            <img src=\"{{imgURL}}{{mainProfileForm.get('MainProfile_Mngmt_Pic')?.value| slice:1:-4}}jpeg\"\n                                                alt=\"Profile Picture\" style=\"max-width: 150px; max-height: 150px;\">\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"row\">\n                                <div class=\"col-md-12 mb-3\">\n                                    <button *ngIf=\"!isProfileExisting && !editenabled\" type=\"submit\"\n                                        (click)=\"onSubmit()\" class=\"btn custom-btn float-right\">\n                                        Add Profile\n                                    </button>\n\n                                    <button *ngIf=\"isProfileExisting\" type=\"button\" class=\"btn custom-btn float-right\"\n                                        (click)=\"enableEditing()\">\n                                        Edit Profile\n                                    </button>\n\n                                    <button *ngIf=\"editenabled\" class=\"btn custom-btn float-right\"\n                                        (click)=\"editMainProfile()\">\n                                        Save Profile\n                                    </button>\n                                </div>\n                            </div>\n                        </form>\n\n                    </tab>\n\n                    <tab (selectTab)=\"onTabChange('Key Management Profile')\" heading=\"Key Management Profile\" id=\"tab2\">\n\n                        <div class=\"row topcontent\">\n\n                            <div class=\"col-md-6 mb-3\">\n                                <span><strong>Profile Add-on: </strong>Key Management Profile</span>\n                            </div>\n\n                            <div class=\"col-md-6 mb-3\">\n                                <button (click)=\"openModal(addKeyManagementProfile)\" type=\"button\"\n                                    class=\"btn custom-btn float-right\">Add Management Profile</button>\n                            </div>\n\n                        </div>\n\n                        <div class=\"row\">\n\n                            <div class=\"card-body pa-0\">\n                                <table class=\"table\">\n                                    <thead>\n                                        <tr>\n                                            <th>S#</th>\n                                            <th>Id</th>\n                                            <th>On-Main</th>\n                                            <th>First Name</th>\n                                            <th>Last Name</th>\n                                            <th>Designation</th>\n                                            <th>Detail</th>\n                                            <th>Image</th>\n                                            <th>Action</th>\n                                        </tr>\n                                    </thead>\n                                    <tbody>\n                                        <tr *ngFor=\"let profile of keyManagementProfileArr; index as i\">\n\n                                            <!-- Serial -->\n                                            <td>{{ i + 1 }}</td>\n\n                                            <!-- ID -->\n                                            <td>{{ profile.MDR_TOP_MANAGEMENT_ID }}</td>\n\n                                            <!-- Main Profile Flag -->\n                                            <td class=\"actdct_icon\">\n                                                <span *ngIf=\"profile.MDR_TOP_MNGMT_ACTIV_FLG; else notOnMain\">\n                                                    <img src=\"assets/images/active_icon.png\" alt=\"Yes\" />\n                                                </span>\n                                                <ng-template #notOnMain>\n                                                    <img src=\"assets/images/deactive_icon.png\" alt=\"No\" />\n                                                </ng-template>\n                                            </td>\n\n                                            <!-- First Name -->\n                                            <td>{{ profile.MDR_TOP_MNGMT_FIRST_NAME }}</td>\n\n                                            <!-- Last Name -->\n                                            <td>{{ profile.MDR_TOP_MNGMT_LAST_NAME }}</td>\n\n                                            <!-- Designation -->\n                                            <td>{{ profile.MDR_TOP_MNGMT_CORP_TITLE }}</td>\n\n                                            <!-- Detail Button -->\n                                            <td>\n                                                <button (click)=\"showDetails(profile, keymanagementProfileDetails)\"\n                                                    class=\"btn btn-sm btn-outline-info\">\n                                                    Detail\n                                                </button>\n                                            </td>\n\n                                            <!-- Profile Image -->\n                                            <td>\n                                                <img src=\"{{imgURL}}{{profile.MDR_TOP_MNGMT_PIC_IMAGE | slice:1:-4}}jpeg\"\n                                                    alt=\"Profile Image\"\n                                                    style=\"max-width: 50px; max-height: 50px; object-fit: cover;\" />\n                                            </td>\n\n                                            <!-- Edit Action -->\n                                            <td class=\"delete-icon\" title=\"Edit\">\n                                                <i (click)=\"openeditKeyManagementProfile(profile, editKeyManagementProfile)\"\n                                                    class=\"fa fa-edit\"></i>\n                                            </td>\n\n                                        </tr>\n                                    </tbody>\n                                </table>\n\n                            </div>\n\n                        </div>\n\n                    </tab>\n\n                    <tab (selectTab)=\"onTabChange('Media & Certifications')\" heading=\"Media & Certifications\" id=\"tab3\">\n\n                        <div class=\"row topcontent\">\n\n                            <div class=\"col-md-6 mb-3\">\n                                <span><strong>Profile Add-on: </strong>Media & Certifications</span>\n                            </div>\n\n                            <div class=\"col-md-6 mb-3\">\n                                <button (click)=\"openModal(addMediaCertification)\" type=\"button\"\n                                    class=\"btn custom-btn float-right\">Add Media &\n                                    Certifications</button>\n                            </div>\n\n                        </div>\n\n                        <div class=\"row\">\n\n                            <div class=\"card-body pa-0\">\n                                <table class=\"table\">\n                                    <thead>\n                                        <tr>\n                                            <th>S#</th>\n                                            <th>Id</th>\n                                            <th>Active</th>\n                                            <th>Subject</th>\n                                            <th>Media Details</th>\n                                            <th>Media Image</th>\n                                            <th>Action</th>\n                                        </tr>\n                                    </thead>\n                                    <tbody *ngIf=\"mediaCertificationsArr && mediaCertificationsArr.length > 0\">\n                                        <tr *ngFor=\"let media of mediaCertificationsArr; index as i\">\n                                            <td>{{ i + 1 }}</td>\n                                            <td>{{ media.MDR_MEDIA_ID }}</td>\n                                            <td class=\"actdct_icon\">\n                                                <span *ngIf=\"media.MDR_MEDIA_ACTIV_FLG; else notActive\">\n                                                    <img src=\"assets/images/active_icon.png\" alt=\"Yes\" />\n                                                </span>\n                                                <ng-template #notActive>\n                                                    <img src=\"assets/images/deactive_icon.png\" alt=\"No\" />\n                                                </ng-template>\n                                            </td>\n                                            <td>\n                                                <button (click)=\"showDetails(media, mediaDetails)\"\n                                                    class=\"btn btn-sm btn-outline-info\">\n                                                    Detail\n                                                </button>\n                                            </td>\n                                            <td>{{ media.MDR_MEDIA_HEAD_TXT }}</td>\n                                            <td>\n                                                <img [src]=\"imgURL + (media.MDR_MEDIA_PIC | slice:1)\" alt=\"Media Image\"\n                                                    style=\"max-width: 50px; max-height: 50px; object-fit: cover;\" />\n                                            </td>\n                                            <td class=\"delete-icon\" title=\"Edit\">\n                                                <i (click)=\"openeditMediaCerification(media, editMediaCertification)\"\n                                                    class=\"fa fa-edit\"></i>\n                                            </td>\n                                        </tr>\n                                    </tbody>\n                                </table>\n                            </div>\n\n                        </div>\n\n                    </tab>\n\n                    <tab (selectTab)=\"onTabChange('Product & Services')\" heading=\"Product & Services\" id=\"tab4\">\n\n                        <div class=\"row topcontent\">\n\n                            <div class=\"col-md-6 mb-3\">\n                                <span><strong>Profile Add-on: </strong>Product & Services</span>\n                            </div>\n\n                            <div class=\"col-md-6 mb-3\">\n                                <button (click)=\"openModal(addProductService)\" type=\"button\"\n                                    class=\"btn custom-btn float-right\">Add Product &\n                                    Services</button>\n                            </div>\n\n                        </div>\n\n                        <div class=\"row\">\n\n                            <div class=\"card-body pa-0\">\n                                <table class=\"table\">\n                                    <thead>\n                                        <tr>\n                                            <th>S#</th>\n                                            <th>Id</th>\n                                            <th>Active</th>\n                                            <th>Products/Services</th>\n                                            <th>Image</th>\n                                            <th>Details</th>\n                                            <th>Action</th>\n                                        </tr>\n                                    </thead>\n                                    <tbody>\n                                        <tr *ngFor=\"let product of storeandprdtArr; index as i\">\n                                            <td>{{ i + 1 }}</td>\n                                            <td>{{ product.MDR_STORE_PRDCT_SERVC_ID }}</td>\n                                            <td class=\"actdct_icon\">\n                                                <span *ngIf=\"product.MDR_STORE_PRDCT_SERVC_ACTIV_FLG; else notActive\">\n                                                    <img src=\"assets/images/active_icon.png\" alt=\"Yes\" />\n                                                </span>\n                                                <ng-template #notActive>\n                                                    <img src=\"assets/images/deactive_icon.png\" alt=\"No\" />\n                                                </ng-template>\n                                            </td>\n                                            <td>{{ product.MDR_STORE_PRDCT_SERVC_TXT }}</td>\n                                            <td>\n                                                <img [src]=\"imgURL + (product.MDR_STORE_PRDCT_SERVC_IMAGE | slice:1)\"\n                                                    alt=\"Product Image\"\n                                                    style=\"max-width: 50px; max-height: 50px; object-fit: cover;\" />\n\n                                            </td>\n                                            <td>\n                                                <button (click)=\"showDetails(product, productAndServiceDetails)\" class=\"btn btn-sm btn-outline-info\">Details</button>\n                                            </td>\n                                            <td class=\"delete-icon\" title=\"Edit\">\n                                                <i (click)=\"openditProductService(product, editProductService)\"\n                                                    class=\"fa fa-edit\"></i>\n                                            </td>\n                                        </tr>\n                                    </tbody>\n                                </table>\n                            </div>\n\n                        </div>\n\n                    </tab>\n\n                    <tab (selectTab)=\"onTabChange('Clients & Recommendations')\" heading=\"Clients & Recommendations\"\n                        id=\"tab5\">\n\n                        <div class=\"row topcontent\">\n\n                            <div class=\"col-md-6 mb-3\">\n                                <span><strong>Profile Add-on: </strong>Clients & Recommendations</span>\n                            </div>\n\n                            <div class=\"col-md-6 mb-3\">\n                                <button (click)=\"openModal(addClientRecommendation)\" type=\"button\"\n                                    class=\"btn custom-btn float-right\">Add Clients &\n                                    Recommendations</button>\n                            </div>\n\n                        </div>\n\n                        <div class=\"row\">\n\n                            <div class=\"card-body pa-0\">\n                                <table class=\"table\">\n                                    <thead>\n                                        <tr>\n                                            <th>S#</th>\n                                            <th>Id</th>\n                                            <th>Active</th>\n                                            <th>Client</th>\n                                            <th>Representative</th>\n                                            <th>Designation</th>\n                                            <th>Image</th>\n                                            <th>Appre details</th>\n                                            <th>Action</th>\n                                        </tr>\n                                    </thead>\n                                    <tbody>\n                                        <tr *ngFor=\"let client of clientRecommendationArr; index as i\">\n                                            <td>{{ i + 1 }}</td>\n                                            <td>{{ client.MDR_STORE_CLIENT_ID }}</td>\n                                            <td class=\"actdct_icon\">\n                                                <span *ngIf=\"client.MDR_STORE_CLIENT_ACTIV_FLG; else notActive\">\n                                                    <img src=\"assets/images/active_icon.png\" alt=\"Yes\" />\n                                                </span>\n                                                <ng-template #notActive>\n                                                    <img src=\"assets/images/deactive_icon.png\" alt=\"No\" />\n                                                </ng-template>\n                                            </td>\n                                            <td>{{ client.MDR_STORE_CLIENT_ORG }}</td>\n                                            <td>{{ client.MDR_STORE_CLIENT_REP_FIRSTNAME }} {{\n                                                client.MDR_STORE_CLIENT_REP_LASTNAME }}</td>\n                                            <td>{{ client.MDR_STORE_CLIENT_REP_DESIGNATION }}</td>\n                                            <td>\n                                                <img [src]=\"imgURL + (client.MDR_STORE_CLIENT_IMAGE | slice:1)\"\n                                                    alt=\"Client Image\"\n                                                    style=\"max-width: 50px; max-height: 50px; object-fit: cover;\" />\n                                            </td>\n                                            <td>\n                                                <button (click)=\"showDetails(client, clientRecommendationDetails)\" class=\"btn btn-sm btn-outline-info\">\n                                                    {{ client.MDR_STORE_CLIENT_SAID_ABOUT_TEXT ? 'Appre details' :\n                                                    'Nodetails' }}\n                                                </button>\n                                            </td>\n                                            <td class=\"delete-icon\" title=\"Edit\">\n                                                <i (click)=\"openeditClientRecommendations(client, editClientRecommendation)\"\n                                                    class=\"fa fa-edit\" style=\"cursor: pointer;\"></i>\n                                            </td>\n                                        </tr>\n                                    </tbody>\n                                </table>\n                            </div>\n\n                        </div>\n\n                    </tab>\n\n                    <tab (selectTab)=\"onTabChange('Geo Service')\" heading=\"Geo Service\" id=\"tab7\">\n\n                        <div class=\"row topcontent\">\n\n                            <div class=\"col-md-6 mb-3\">\n                                <span><strong>Profile Add-on: </strong>Geo Servicibility</span>\n                            </div>\n\n                            <div class=\"col-md-6 mb-3\">\n                                <button (click)=\"openModal(geoServicibility)\" type=\"button\"\n                                    class=\"btn custom-btn float-right\">Add Geo Servicibility</button>\n                            </div>\n\n                        </div>\n\n                        <div class=\"row\">\n                            <div class=\"card-body pa-0\">\n                                <table class=\"table\">\n                                    <thead>\n                                        <tr>\n                                            <th>S#</th>\n                                            <th>Geo Category</th>\n                                            <th>Active</th>\n                                            <th>Country ID</th>\n                                            <th>State ID</th>\n                                            <th>City ID</th>\n                                            <th>Pin Code</th>\n                                            <th>Action</th>\n                                        </tr>\n                                    </thead>\n                                    <tbody>\n                                        <tr *ngFor=\"let geo of geoservicibilityArr; index as i\">\n                                            <!-- Serial -->\n                                            <td>{{ i + 1 }}</td>\n\n                                            <!-- Geo Category -->\n                                            <td>{{ geo.MDR_GEOSERVICIBILITY_CATGRY }}</td>\n\n                                            <!-- Active Status -->\n                                            <td class=\"actdct_icon\">\n                                                <span *ngIf=\"geo.MDR_GEO_ACTIV_FLG; else notActive\">\n                                                    <img src=\"assets/images/active_icon.png\" alt=\"Yes\" />\n                                                </span>\n                                                <ng-template #notActive>\n                                                    <img src=\"assets/images/deactive_icon.png\" alt=\"No\" />\n                                                </ng-template>\n                                            </td>\n\n                                            <!-- Country ID -->\n                                            <td>{{ geo.MDR_SERVC_COUNTRY_ID }}</td>\n\n                                            <!-- State ID -->\n                                            <td>{{ geo.MDR_SERVC_STATE_ID }}</td>\n\n                                            <!-- City ID -->\n                                            <td>{{ geo.MDR_SERVC_CITY_ID }}</td>\n\n                                            <!-- Pin Code -->\n                                            <td>{{ geo.MDR_SERV_PINCODE }}</td>\n\n                                            <!-- Edit Action -->\n                                            <td class=\"delete-icon\" title=\"Edit\">\n                                                <i class=\"fa fa-edit\" style=\"cursor: pointer;\"\n                                                    (click)=\"openeditgeoServicibilityClient(geo, editgeoServicibility)\"></i>\n                                            </td>\n                                        </tr>\n                                    </tbody>\n                                </table>\n                            </div>\n                        </div>\n\n                    </tab>\n\n                    <tab (selectTab)=\"onTabChange('Corp Contact')\" heading=\"Corp Contact\" id=\"tab6\">\n\n                        <div class=\"row\">\n                            <!-- LEFT: Corporate Information -->\n                            <div class=\"col-md-6\">\n                                <h5 class=\"mb-2 \">Corporate Information</h5>\n                                <table class=\"table table-bordered table-sm custom-table\">\n                                    <tbody>\n                                        <tr>\n                                            <th>Corporate Name</th>\n                                            <td>{{ orgProfile.MDR_ORG_NAME }}</td>\n                                        </tr>\n                                        <tr>\n                                            <th>Org GSTIN</th>\n                                            <td>{{ orgProfile.MDR_PROFILE_ORG_GSTIN }}</td>\n                                        </tr>\n                                        <tr>\n                                            <th>Org Type</th>\n                                            <td>{{ orgProfile.MDR_ORG_TYPE }}</td>\n                                        </tr>\n                                        <tr>\n                                            <th>Contact Number</th>\n                                            <td>{{ orgProfile.MDR_CORP_CONTACT_NUMBER }}</td>\n                                        </tr>\n                                        <tr>\n                                            <th>Email</th>\n                                            <td>{{ orgProfile.MDR_CORP_CONTACT_EMAILID }}</td>\n                                        </tr>\n                                        <tr>\n                                            <th>Responder</th>\n                                            <td>{{ orgProfile.MDR_CORP_RESPONDER }}</td>\n                                        </tr>\n                                        <tr>\n                                            <th>Status</th>\n                                            <td class=\"actdct_icon\">\n                                                <span *ngIf=\"orgProfile.MDR_ADDRESS_ACTIV_FLG; else notActive\">\n                                                    <img src=\"assets/images/active_icon.png\" alt=\"Active\" />\n                                                </span>\n                                                <ng-template #notActive>\n                                                    <img src=\"assets/images/deactive_icon.png\" alt=\"Inactive\" />\n                                                </ng-template>\n                                            </td>\n                                        </tr>\n                                    </tbody>\n                                </table>\n                            </div>\n\n                            <!-- RIGHT: Corporate Address -->\n                            <div class=\"col-md-6\">\n                                <h5 class=\"mb-2 \">Corporate Address</h5>\n                                <table class=\"table table-bordered table-sm custom-table\">\n                                    <tbody>\n                                        <tr>\n                                            <th>Address</th>\n                                            <td>{{ orgProfile.MDR_ADDRESS }}</td>\n                                        </tr>\n                                        <tr>\n                                            <th>Landmark</th>\n                                            <td>{{ orgProfile.MDR_ADDRESS_LANDMARK }}</td>\n                                        </tr>\n                                        <tr>\n                                            <th>Country</th>\n                                            <td>{{ orgProfile.MDR_ADDRESS_COUNTRY }}</td>\n                                        </tr>\n                                        <tr>\n                                            <th>State</th>\n                                            <td>{{ orgProfile.MDR_ADDRESS_STATE }}</td>\n                                        </tr>\n                                        <tr>\n                                            <th>City</th>\n                                            <td>{{ orgProfile.MDR_ADDRESS_CITY }}</td>\n                                        </tr>\n                                        <tr>\n                                            <th>Pincode</th>\n                                            <td>{{ orgProfile.MDR_ADDRESS_PINCODE }}</td>\n                                        </tr>\n                                        <tr>\n                                            <th>Latitude</th>\n                                            <td>{{ orgProfile.MDR_ADDRESS_LATD || '-' }}</td>\n                                        </tr>\n                                        <tr>\n                                            <th>Longitude</th>\n                                            <td>{{ orgProfile.MDR_ADDRESS_LONGTD || '-' }}</td>\n                                        </tr>\n                                    </tbody>\n                                </table>\n                            </div>\n                        </div>\n\n                    </tab>\n\n                </tabset>\n            </div>\n            <br><br>\n            <ngx-spinner template=\"<img src='assets/images/icons/please_wait.gif/>\">\n            </ngx-spinner>\n        </div>\n    </div>\n</div>\n\n<ng-template #addKeyManagementProfile>\n    <form [formGroup]=\"keyManagementForm\" (ngSubmit)=\"onaddKeyManagementProfileSubmit()\">\n        <div class=\"modal-header\">\n            <h4 class=\"modal-title pull-left\">Add Key Management Profile</h4>\n            <button type=\"button\" class=\"btn-close close pull-right\" aria-label=\"Close\" (click)=\"modalRef?.hide()\">\n                <span aria-hidden=\"true\" class=\"visually-hidden\">&times;</span>\n            </button>\n        </div>\n\n        <div class=\"modal-body\">\n            <!-- First & Last Name -->\n            <div class=\"row mb-2\">\n                <div class=\"col-md-6\">\n                    <label>First Name</label>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter First Name\"\n                        formControlName=\"firstName\" />\n                </div>\n                <div class=\"col-md-6\">\n                    <label>Last Name</label>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter Last Name\" formControlName=\"lastName\" />\n                </div>\n            </div>\n\n            <!-- Designation & Active -->\n            <div class=\"row mb-2\">\n                <div class=\"col-md-6\">\n                    <label>Designation</label>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter Designation\"\n                        formControlName=\"designation\" />\n                </div>\n                <div class=\"col-md-6\">\n                    <label>Active</label>\n                    <select class=\"form-control\" formControlName=\"active\">\n                        <option [ngValue]=\"true\">Yes</option>\n                        <option [ngValue]=\"false\">No</option>\n                    </select>\n                </div>\n            </div>\n\n            <!-- About -->\n            <div class=\"row mb-2\">\n                <div class=\"col-md-12\">\n                    <label>About</label>\n                    <textarea class=\"form-control\" rows=\"3\" placeholder=\"Enter short bio or role summary\"\n                        formControlName=\"about\"></textarea>\n                </div>\n            </div>\n\n            <!-- Profile Picture -->\n            <div class=\"row mb-3\">\n                <div class=\"col-md-6\">\n                    <label for=\"profilePic\">Profile Picture</label>\n                    <input type=\"file\" class=\"form-control-file border p-2 rounded\" id=\"profilePic\"\n                        (change)=\"onProfilePicChangeaddKeyManagementProfile($event)\" />\n                    <div *ngIf=\"profilePicUrladdKeyManagement\" class=\"mt-2 border p-2 rounded\">\n                        <img [src]=\"profilePicUrladdKeyManagement\" alt=\"Profile Picture\"\n                            style=\"max-width: 150px; max-height: 150px;\" />\n                    </div>\n                </div>\n            </div>\n\n            <!-- Submit -->\n            <div class=\"row\">\n                <div class=\"col-md-12 text-right\">\n                    <button type=\"submit\" class=\"btn custom-btn\" [disabled]=\"keyManagementForm.invalid\">\n                        Add\n                    </button>\n                </div>\n            </div>\n        </div>\n    </form>\n</ng-template>\n\n<ng-template #editKeyManagementProfile>\n    <div>\n        <div class=\"modal-header\">\n            <h4 class=\"modal-title pull-left\">Edit Key Management Profile</h4>\n            <button type=\"button\" class=\"btn-close close pull-right\" aria-label=\"Close\" (click)=\"modalRef?.hide()\">\n                <span aria-hidden=\"true\" class=\"visually-hidden\">&times;</span>\n            </button>\n        </div>\n\n        <div class=\"modal-body\">\n            <!-- First & Last Name -->\n            <div class=\"row mb-2\">\n                <div class=\"col-md-6\">\n                    <label>First Name</label>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter First Name\"\n                        [(ngModel)]=\"editkeymanagementprofile.First_Name\" />\n                </div>\n                <div class=\"col-md-6\">\n                    <label>Last Name</label>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter Last Name\"\n                        [(ngModel)]=\"editkeymanagementprofile.Last_Name\" />\n                </div>\n            </div>\n\n            <!-- Designation & Active -->\n            <div class=\"row mb-2\">\n                <div class=\"col-md-6\">\n                    <label>Designation</label>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter Designation\"\n                        [(ngModel)]=\"editkeymanagementprofile.Designation\" />\n                </div>\n                <div class=\"col-md-6\">\n                    <label>Active</label>\n                    <select class=\"form-control\" [(ngModel)]=\"editkeymanagementprofile.Activ_Flg\">\n                        <option [ngValue]=\"true\">Yes</option>\n                        <option [ngValue]=\"false\">No</option>\n                    </select>\n                </div>\n            </div>\n\n            <!-- About -->\n            <div class=\"row mb-2\">\n                <div class=\"col-md-12\">\n                    <label>About</label>\n                    <textarea class=\"form-control\" rows=\"3\" placeholder=\"Enter short bio or role summary\"\n                        [(ngModel)]=\"editkeymanagementprofile.About_Txt\"></textarea>\n                </div>\n            </div>\n\n            <!-- Profile Picture -->\n            <div class=\"row mb-3\">\n                <div class=\"col-md-6\">\n                    <label for=\"profilePic\">Profile Picture</label>\n                    <input type=\"file\" class=\"form-control-file border p-2 rounded\" id=\"profilePic\"\n                        (change)=\"onProfilePicChangeaddKeyManagementProfile($event)\" />\n                    <div *ngIf=\"profilePicUrladdKeyManagement\" class=\"mt-2 border p-2 rounded\">\n                        <img [src]=\"profilePicUrladdKeyManagement\" alt=\"Profile Picture\"\n                            style=\"max-width: 150px; max-height: 150px;\" />\n                    </div>\n                </div>\n            </div>\n\n            <!-- Submit -->\n            <div class=\"row\">\n                <div class=\"col-md-12 text-right\">\n                    <button (click)=\"oneditKeyManagementProfileSubmit()\" type=\"submit\" class=\"btn custom-btn\">\n                        Save\n                    </button>\n                </div>\n            </div>\n        </div>\n    </div>\n</ng-template>\n\n\n<ng-template #addMediaCertification>\n    <form [formGroup]=\"mediaCertificationForm\" (ngSubmit)=\"onSubmitMediaCertification()\">\n        <div class=\"modal-header\">\n            <h4 class=\"modal-title pull-left\">Add Media & Certifications</h4>\n            <button type=\"button\" class=\"btn-close close pull-right\" aria-label=\"Close\" (click)=\"modalRef?.hide()\">\n                <span aria-hidden=\"true\" class=\"visually-hidden\">&times;</span>\n            </button>\n        </div>\n\n        <div class=\"modal-body\">\n            <!-- Subject & Active -->\n            <div class=\"row mb-2\">\n                <div class=\"col-md-6\">\n                    <label>Subject</label>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter Subject\" formControlName=\"subject\" />\n                </div>\n                <div class=\"col-md-6\">\n                    <label>Active</label>\n                    <select class=\"form-control\" formControlName=\"active\">\n                        <option [ngValue]=\"true\">Yes</option>\n                        <option [ngValue]=\"false\">No</option>\n                    </select>\n                </div>\n            </div>\n\n            <!-- Media Details -->\n            <div class=\"row mb-2\">\n                <div class=\"col-md-12\">\n                    <label>Media Details</label>\n                    <textarea class=\"form-control\" rows=\"3\"\n                        placeholder=\"Enter media description or certification detail\"\n                        formControlName=\"details\"></textarea>\n                </div>\n            </div>\n\n            <!-- Media Image -->\n            <div class=\"row mb-3\">\n                <div class=\"col-md-6\">\n                    <label for=\"mediaPic\">Media Image</label>\n                    <input type=\"file\" class=\"form-control-file border p-2 rounded\" id=\"mediaPic\"\n                        (change)=\"onMediaImageSelectedaddMediaCertification($event)\" />\n                    <div *ngIf=\"mediaImageUrl\" class=\"mt-2 border p-2 rounded\">\n                        <img [src]=\"mediaImageUrl\" alt=\"Media\" style=\"max-width: 150px; max-height: 150px;\" />\n                    </div>\n                </div>\n            </div>\n\n            <!-- Submit -->\n            <div class=\"row\">\n                <div class=\"col-md-12 text-right\">\n                    <button type=\"submit\" class=\"btn custom-btn\" [disabled]=\"mediaCertificationForm.invalid\">\n                        Add\n                    </button>\n                </div>\n            </div>\n        </div>\n    </form>\n</ng-template>\n\n<ng-template #editMediaCertification>\n    <div>\n        <div class=\"modal-header\">\n            <h4 class=\"modal-title pull-left\">Edit Media & Certifications</h4>\n            <button type=\"button\" class=\"btn-close close pull-right\" aria-label=\"Close\" (click)=\"modalRef?.hide()\">\n                <span aria-hidden=\"true\" class=\"visually-hidden\">&times;</span>\n            </button>\n        </div>\n\n        <div class=\"modal-body\">\n            <!-- Subject & Active -->\n            <div class=\"row mb-2\">\n                <div class=\"col-md-6\">\n                    <label>Subject</label>\n                    <input [(ngModel)]=\"editMedia.MediaSubject\" type=\"text\" class=\"form-control\"\n                        placeholder=\"Enter Subject\" />\n                </div>\n                <div class=\"col-md-6\">\n                    <label>Active</label>\n                    <select [(ngModel)]=\"editMedia.ActivFlg\" class=\"form-control\">\n                        <option [ngValue]=\"true\">Yes</option>\n                        <option [ngValue]=\"false\">No</option>\n                    </select>\n                </div>\n            </div>\n\n            <!-- Media Details -->\n            <div class=\"row mb-2\">\n                <div class=\"col-md-12\">\n                    <label>Media Details</label>\n                    <textarea [(ngModel)]=\"editMedia.HeaderText\" class=\"form-control\" rows=\"3\"\n                        placeholder=\"Enter media description or certification detail\"></textarea>\n                </div>\n            </div>\n\n            <!-- Media Image -->\n            <div class=\"row mb-3\">\n                <div class=\"col-md-6\">\n                    <label for=\"mediaPic\">Media Image</label>\n                    <input type=\"file\" class=\"form-control-file border p-2 rounded\" id=\"mediaPic\"\n                        (change)=\"onMediaImageSelectedaddMediaCertification($event)\" />\n                    <div *ngIf=\"mediaImageUrl\" class=\"mt-2 border p-2 rounded\">\n                        <img [src]=\"mediaImageUrl\" alt=\"Media\" style=\"max-width: 150px; max-height: 150px;\" />\n                    </div>\n                </div>\n            </div>\n\n            <!-- Submit -->\n            <div class=\"row\">\n                <div class=\"col-md-12 text-right\">\n                    <button (click)=\"editMediaCerification()\" type=\"submit\" class=\"btn custom-btn\">\n                        Save\n                    </button>\n                </div>\n            </div>\n        </div>\n    </div>\n</ng-template>\n\n\n<ng-template #addProductService>\n    <form [formGroup]=\"productServiceForm\" (ngSubmit)=\"onSubmitProductService()\">\n        <div class=\"modal-header\">\n            <h4 class=\"modal-title pull-left\">Add Product / Service</h4>\n            <button type=\"button\" class=\"btn-close close pull-right\" aria-label=\"Close\" (click)=\"modalRef?.hide()\">\n                <span aria-hidden=\"true\" class=\"visually-hidden\">&times;</span>\n            </button>\n        </div>\n\n        <div class=\"modal-body\">\n            <!-- Product/Service Text -->\n            <div class=\"row mb-3\">\n                <div class=\"col-md-12\">\n                    <label>Product / Service Name</label>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter Product / Service Name\"\n                        formControlName=\"Prdct_Servc_Txt\" />\n                </div>\n            </div>\n\n            <!-- Image Upload -->\n            <div class=\"row mb-3\">\n                <div class=\"col-md-6\">\n                    <label for=\"mediaPic\">Upload Product / Service Image</label>\n                    <input type=\"file\" class=\"form-control-file border p-2 rounded\" id=\"mediaPic\"\n                        (change)=\"onMediaImageSelectedaddProductAndService($event)\" accept=\"image/*\" />\n                    <div *ngIf=\"mediaImageUrl2\" class=\"mt-2 border p-2 rounded\">\n                        <img [src]=\"mediaImageUrl2\" alt=\"Media\" style=\"max-width: 150px; max-height: 150px;\" />\n                    </div>\n                </div>\n            </div>\n\n            <!-- Submit -->\n            <div class=\"row\">\n                <div class=\"col-md-12 text-right\">\n                    <button type=\"submit\" class=\"btn custom-btn\" [disabled]=\"productServiceForm.invalid\">\n                        Add\n                    </button>\n                </div>\n            </div>\n        </div>\n    </form>\n</ng-template>\n\n<ng-template #editProductService>\n    <div>\n        <div class=\"modal-header\">\n            <h4 class=\"modal-title pull-left\">Edit Product / Service</h4>\n            <button type=\"button\" class=\"btn-close close pull-right\" aria-label=\"Close\" (click)=\"modalRef?.hide()\">\n                <span aria-hidden=\"true\" class=\"visually-hidden\">&times;</span>\n            </button>\n        </div>\n\n        <div class=\"modal-body\">\n            <!-- Product/Service Text -->\n            <div class=\"row mb-3\">\n                <div class=\"col-md-12\">\n                    <label>Product / Service Name</label>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter Product / Service Name\"\n                        [(ngModel)]=\"editproductservice.Prd_Srvc_Txt\" />\n                </div>\n            </div>\n\n            <!-- Image Upload -->\n            <div class=\"row mb-3\">\n                <div class=\"col-md-6\">\n                    <label>Active</label>\n                    <select class=\"form-control\" [(ngModel)]=\"editproductservice.Activ_Flg\">\n                        <option [ngValue]=\"true\">Yes</option>\n                        <option [ngValue]=\"false\">No</option>\n                    </select>\n                </div>\n\n                <div class=\"col-md-6\">\n                    <label for=\"mediaPic\">Upload Product / Service Image</label>\n                    <input type=\"file\" class=\"form-control-file border p-2 rounded\" id=\"mediaPic\"\n                        (change)=\"onMediaImageSelectedaddProductAndService($event)\" accept=\"image/*\" />\n                    <div *ngIf=\"mediaImageUrl2\" class=\"mt-2 border p-2 rounded\">\n                        <img [src]=\"mediaImageUrl2\" alt=\"Media\" style=\"max-width: 150px; max-height: 150px;\" />\n                    </div>\n                </div>\n            </div>\n\n            <!-- Submit -->\n            <div class=\"row\">\n                <div class=\"col-md-12 text-right\">\n                    <button (click)=\"oneditProductService()\" type=\"submit\" class=\"btn custom-btn\">\n                        Save\n                    </button>\n                </div>\n            </div>\n        </div>\n    </div>\n</ng-template>\n\n\n<ng-template #addClientRecommendation>\n    <form [formGroup]=\"clientRecommendationForm\" (ngSubmit)=\"onSubmitClientRecommendation()\">\n        <div class=\"modal-header\">\n            <h4 class=\"modal-title pull-left\">Add Client & Recommendation</h4>\n            <button type=\"button\" class=\"btn-close close pull-right\" aria-label=\"Close\" (click)=\"modalRef?.hide()\">\n                <span aria-hidden=\"true\" class=\"visually-hidden\">&times;</span>\n            </button>\n        </div>\n\n        <div class=\"modal-body\">\n            <!-- Organization Name -->\n            <div class=\"row mb-2\">\n                <div class=\"col-md-12\">\n                    <label>Client Organization Name</label>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter Organization Name\"\n                        formControlName=\"Client_Org_Name\" />\n                </div>\n            </div>\n\n            <!-- Client First & Last Name -->\n            <div class=\"row mb-2\">\n                <div class=\"col-md-6\">\n                    <label>Client First Name</label>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter First Name\"\n                        formControlName=\"Client_First_Name\" />\n                </div>\n                <div class=\"col-md-6\">\n                    <label>Client Last Name</label>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter Last Name\"\n                        formControlName=\"Client_Last_Name\" />\n                </div>\n            </div>\n\n            <!-- Designation -->\n            <div class=\"row mb-2\">\n                <div class=\"col-md-6\">\n                    <label>Designation</label>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter Designation\"\n                        formControlName=\"Designation\" />\n                </div>\n            </div>\n\n            <!-- Appreciation / Recommendation -->\n            <div class=\"row mb-2\">\n                <div class=\"col-md-12\">\n                    <label>Appreciation / Recommendation</label>\n                    <textarea class=\"form-control\" rows=\"3\" placeholder=\"Enter appreciation or recommendation\"\n                        formControlName=\"Appreciation_Txt\"></textarea>\n                </div>\n            </div>\n\n            <!-- Profile Picture -->\n            <div class=\"row mb-3\">\n                <div class=\"col-md-6\">\n                    <label for=\"personPic\">Profile Picture</label>\n                    <input type=\"file\" class=\"form-control-file border p-2 rounded\" id=\"personPic\"\n                        (change)=\"onMediaImageaddClientRecommendation($event)\" accept=\"image/*\" />\n                    <div *ngIf=\"ProfilePicaddclient\" class=\"mt-2 border p-2 rounded\">\n                        <img [src]=\"ProfilePicaddclient\" alt=\"Media\" style=\"max-width: 150px; max-height: 150px;\" />\n                    </div>\n                </div>\n            </div>\n\n            <!-- Submit -->\n            <div class=\"row\">\n                <div class=\"col-md-12 text-right\">\n                    <button type=\"submit\" class=\"btn custom-btn\" [disabled]=\"clientRecommendationForm.invalid\">\n                        Add\n                    </button>\n                </div>\n            </div>\n        </div>\n    </form>\n</ng-template>\n\n<ng-template #editClientRecommendation>\n    <div>\n        <div class=\"modal-header\">\n            <h4 class=\"modal-title pull-left\">Edit Client & Recommendation</h4>\n            <button type=\"button\" class=\"btn-close close pull-right\" aria-label=\"Close\" (click)=\"modalRef?.hide()\">\n                <span aria-hidden=\"true\" class=\"visually-hidden\">&times;</span>\n            </button>\n        </div>\n\n        <div class=\"modal-body\">\n            <!-- Organization Name -->\n            <div class=\"row mb-2\">\n                <div class=\"col-md-12\">\n                    <label>Client Organization Name</label>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter Organization Name\"\n                        [(ngModel)]=\"editclientandrecommendation.Client_Org_Name\" />\n                </div>\n            </div>\n\n            <!-- Client First & Last Name -->\n            <div class=\"row mb-2\">\n                <div class=\"col-md-6\">\n                    <label>Client First Name</label>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter First Name\"\n                        [(ngModel)]=\"editclientandrecommendation.Client_First_Name\" />\n                </div>\n                <div class=\"col-md-6\">\n                    <label>Client Last Name</label>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter Last Name\"\n                        [(ngModel)]=\"editclientandrecommendation.Client_Last_Name\" />\n                </div>\n            </div>\n\n            <!-- Designation -->\n            <div class=\"row mb-2\">\n                <div class=\"col-md-6\">\n                    <label>Designation</label>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter Designation\"\n                        [(ngModel)]=\"editclientandrecommendation.Designation\" />\n                </div>\n            </div>\n\n            <!-- Appreciation / Recommendation -->\n            <div class=\"row mb-2\">\n                <div class=\"col-md-12\">\n                    <label>Appreciation / Recommendation</label>\n                    <textarea class=\"form-control\" rows=\"3\" placeholder=\"Enter appreciation or recommendation\"\n                        [(ngModel)]=\"editclientandrecommendation.Appreciation_Txt\"></textarea>\n                </div>\n            </div>\n\n            <!-- Profile Picture -->\n            <div class=\"row mb-3\">\n                <div class=\"col-md-6\">\n                    <label for=\"personPic\">Profile Picture</label>\n                    <input type=\"file\" class=\"form-control-file border p-2 rounded\" id=\"personPic\"\n                        (change)=\"onMediaImageaddClientRecommendation($event)\" accept=\"image/*\" />\n                    <div *ngIf=\"ProfilePicaddclient\" class=\"mt-2 border p-2 rounded\">\n                        <img [src]=\"ProfilePicaddclient\" alt=\"Media\" style=\"max-width: 150px; max-height: 150px;\" />\n                    </div>\n                </div>\n            </div>\n\n            <!-- Submit -->\n            <div class=\"row\">\n                <div class=\"col-md-12 text-right\">\n                    <button (click)=\"oneditClientRecommendation()\" type=\"submit\" class=\"btn custom-btn\">\n                        Save\n                    </button>\n                </div>\n            </div>\n        </div>\n    </div>\n</ng-template>\n\n\n<ng-template #geoServicibility>\n    <form [formGroup]=\"geoServicibilityForm\" (ngSubmit)=\"onSubmitGeoServicibility()\">\n        <div class=\"modal-header\">\n            <h4 class=\"modal-title pull-left\">Add Geo Servicibility</h4>\n            <button type=\"button\" class=\"btn-close close pull-right\" aria-label=\"Close\" (click)=\"modalRef?.hide()\">\n                <span aria-hidden=\"true\" class=\"visually-hidden\">&times;</span>\n            </button>\n        </div>\n\n        <div class=\"modal-body\">\n            <!-- Geo Category -->\n            <div class=\"row mb-2\">\n                <div class=\"col-md-6\">\n                    <label>Geo Category</label>\n                    <select class=\"form-control\" formControlName=\"Geo_Category\">\n                        <option value=\"\">Select</option>\n                        <option [ngValue]=\"'Urban'\">Urban</option>\n                        <option [ngValue]=\"'Rural'\">Rural</option>\n                        <option [ngValue]=\"'Semi-Urban'\">Semi-Urban</option>\n                    </select>\n                </div>\n            </div>\n\n\n            <div class=\"form-row\">\n                <div class=\"form-group col-md-3\">\n                    <label>Country</label>\n                    <select class=\"form-control\" formControlName=\"CountryId\" (change)=\"changeCountry($event)\">\n                        <option value=\"\">Select</option>\n                        <option *ngFor=\"let country of countryList\" [value]=\"country.CNTRY_ID\">{{country.CNTRY_NM}}\n                        </option>\n                    </select>\n                </div>\n                <div class=\"form-group col-md-3\">\n                    <label>State</label>\n                    <select formControlName=\"StateId\" class=\"form-control\" (change)=\"changeState($event)\">\n                        <option value=\"\">Select</option>\n                        <option *ngFor=\"let state of stateList\" [value]=\"state.STATE_ID\">{{state.STATE_NM}}</option>\n                    </select>\n                </div>\n                <div class=\"form-group col-md-3\">\n                    <label>City</label>\n                    <select formControlName=\"CityId\" class=\"form-control\" (change)=\"changeCity($event)\">\n                        <option selected value=\"\">Select</option>\n                        <option *ngFor=\"let city of cityList\" [value]=\"city.CITY_ID\">{{city.CITY_NM}}</option>\n                    </select>\n                </div>\n                <div class=\"form-group col-md-3\">\n                    <label>Pin</label>\n                    <select formControlName=\"PinCode\" class=\"form-control\" (change)=\"changePin($event)\">\n                        <option selected value=\"\">Select</option>\n                        <option *ngFor=\"let zip of zipList\" [value]=\"zip.Id\">{{zip.Value}}</option>\n                    </select>\n                </div>\n            </div>\n\n            <!-- Submit -->\n            <div class=\"row mt-3\">\n                <div class=\"col-md-12 text-right\">\n                    <button type=\"submit\" class=\"btn custom-btn\" [disabled]=\"geoServicibilityForm.invalid\">\n                        Save Geo Servicibility\n                    </button>\n                </div>\n            </div>\n        </div>\n    </form>\n</ng-template>\n\n<ng-template #editgeoServicibility>\n    <div>\n        <div class=\"modal-header\">\n            <h4 class=\"modal-title pull-left\">Edit Geo Servicibility</h4>\n            <button type=\"button\" class=\"btn-close close pull-right\" aria-label=\"Close\" (click)=\"modalRef?.hide()\">\n                <span aria-hidden=\"true\" class=\"visually-hidden\">&times;</span>\n            </button>\n        </div>\n\n        <div class=\"modal-body\">\n            <!-- Geo Category -->\n            <div class=\"row mb-2\">\n                <div class=\"col-md-6\">\n                    <label>Geo Category</label>\n                    <select [(ngModel)]=\"editgeoservicibility.Geo_Category\" class=\"form-control\">\n                        <option value=\"\">Select</option>\n                        <option [ngValue]=\"'Urban'\">Urban</option>\n                        <option [ngValue]=\"'Rural'\">Rural</option>\n                        <option [ngValue]=\"'Semi-Urban'\">Semi-Urban</option>\n                    </select>\n                </div>\n                <div class=\"col-md-6\">\n                    <label>Active</label>\n                    <select class=\"form-control\" [(ngModel)]=\"editgeoservicibility.Activ_Flg\">\n                        <option [ngValue]=\"true\">Yes</option>\n                        <option [ngValue]=\"false\">No</option>\n                    </select>\n                </div>\n            </div>\n\n\n            <div class=\"form-row\">\n                <div class=\"form-group col-md-3\">\n                    <label>Country</label>\n                    <select [(ngModel)]=\"editgeoservicibility.CountryId\" class=\"form-control\"\n                        (change)=\"changeCountry($event)\">\n                        <option value=\"\">Select</option>\n                        <option *ngFor=\"let country of countryList\" [value]=\"country.CNTRY_ID\">{{country.CNTRY_NM}}\n                        </option>\n                    </select>\n                </div>\n                <div class=\"form-group col-md-3\">\n                    <label>State</label>\n                    <select [(ngModel)]=\"editgeoservicibility.StateId\" class=\"form-control\"\n                        (change)=\"changeState($event)\">\n                        <option value=\"\">Select</option>\n                        <option *ngFor=\"let state of stateList\" [value]=\"state.STATE_ID\">{{state.STATE_NM}}</option>\n                    </select>\n                </div>\n                <div class=\"form-group col-md-3\">\n                    <label>City</label>\n                    <select [(ngModel)]=\"editgeoservicibility.CityId\" class=\"form-control\"\n                        (change)=\"changeCity($event)\">\n                        <option selected value=\"\">Select</option>\n                        <option *ngFor=\"let city of cityList\" [value]=\"city.CITY_ID\">{{city.CITY_NM}}</option>\n                    </select>\n                </div>\n                <div class=\"form-group col-md-3\">\n                    <label>Pin</label>\n                    <select [(ngModel)]=\"editgeoservicibility.PinCode\" class=\"form-control\"\n                        (change)=\"changePin($event)\">\n                        <option selected value=\"\">Select</option>\n                        <option *ngFor=\"let zip of zipList\" [value]=\"zip.Id\">{{zip.Value}}</option>\n                    </select>\n                </div>\n            </div>\n\n            <!-- Submit -->\n            <div class=\"row mt-3\">\n                <div class=\"col-md-12 text-right\">\n                    <button (click)=\"oneditGeoServicibility()\" type=\"submit\" class=\"btn custom-btn\">\n                        Save\n                    </button>\n                </div>\n            </div>\n        </div>\n    </div>\n</ng-template>\n\n\n<ng-template #keymanagementProfileDetails>\n    <div>\n        <!-- Header -->\n        <div class=\"modal-header\">\n            <h4 class=\"modal-title\">Key Management Profile Details</h4>\n            <button type=\"button\" class=\"btn-close close pull-right\" aria-label=\"Close\" (click)=\"modalRef?.hide()\">\n                <span aria-hidden=\"true\" class=\"visually-hidden\">&times;</span>\n            </button>\n        </div>\n\n        <!-- Body -->\n        <div class=\"modal-body\">\n            <div class=\"row mb-3\">\n                <div class=\"col-md-6\"><strong>ID:</strong></div>\n                <div class=\"col-md-6\">{{ detail.MDR_TOP_MANAGEMENT_ID }}</div>\n            </div>\n\n            <div class=\"row mb-3\">\n                <div class=\"col-md-6\"><strong>Active:</strong></div>\n                <div class=\"col-md-6\">\n                    <span *ngIf=\"detail.MDR_TOP_MNGMT_ACTIV_FLG; else notActive\">\n                        <img src=\"assets/images/active_icon.png\" alt=\"Active\" style=\"height:20px;\" />\n                    </span>\n                    <ng-template #notActive>\n                        <img src=\"assets/images/deactive_icon.png\" alt=\"Inactive\" style=\"height:20px;\" />\n                    </ng-template>\n                </div>\n            </div>\n\n            <div class=\"row mb-3\">\n                <div class=\"col-md-6\"><strong>First Name:</strong></div>\n                <div class=\"col-md-6\">{{ detail.MDR_TOP_MNGMT_FIRST_NAME }}</div>\n            </div>\n\n            <div class=\"row mb-3\">\n                <div class=\"col-md-6\"><strong>Last Name:</strong></div>\n                <div class=\"col-md-6\">{{ detail.MDR_TOP_MNGMT_LAST_NAME }}</div>\n            </div>\n\n            <div class=\"row mb-3\">\n                <div class=\"col-md-6\"><strong>Designation:</strong></div>\n                <div class=\"col-md-6\">{{ detail.MDR_TOP_MNGMT_CORP_TITLE }}</div>\n            </div>\n\n            <div class=\"row mb-3\">\n                <div class=\"col-md-6\"><strong>Main Profile:</strong></div>\n                <div class=\"col-md-6\">\n                    <span *ngIf=\"detail.MDR_TO_MANAGEMENT_MAIN_PROFILE_FLG === true\" class=\"text-success\">Yes</span>\n                    <span *ngIf=\"detail.MDR_TO_MANAGEMENT_MAIN_PROFILE_FLG === false\" class=\"text-danger\">No</span>\n                    <span *ngIf=\"detail.MDR_TO_MANAGEMENT_MAIN_PROFILE_FLG == null\" class=\"text-muted\">-</span>\n                </div>\n            </div>\n\n            <div class=\"row mb-3\">\n                <div class=\"col-md-6\"><strong>About:</strong></div>\n                <div class=\"col-md-6 text-secondary\">{{ detail.MDR_TOP_MNGMT_ABOUT_TXT }}</div>\n            </div>\n\n            <div class=\"row mb-3\">\n                <div class=\"col-md-6\"><strong>Profile Image:</strong></div>\n                <div class=\"col-md-6\">\n                    <img [src]=\"imgURL + (detail.MDR_TOP_MNGMT_PIC_IMAGE | slice:1)\" alt=\"Profile Image\"\n                        class=\"img-thumbnail rounded mt-1\"\n                        style=\"max-width: 150px; max-height: 150px; object-fit: cover;\" />\n                </div>\n            </div>\n        </div>\n    </div>\n</ng-template>\n\n\n<ng-template #mediaDetails>\n    <div>\n        <!-- Header -->\n        <div class=\"modal-header\">\n            <h4 class=\"modal-title\">Media & Certification Details</h4>\n            <button type=\"button\" class=\"btn-close close pull-right\" aria-label=\"Close\" (click)=\"modalRef?.hide()\">\n                <span aria-hidden=\"true\" class=\"visually-hidden\">&times;</span>\n            </button>\n        </div>\n\n        <!-- Body -->\n        <div class=\"modal-body\">\n            <div class=\"row mb-3\">\n                <div class=\"col-md-6\"><strong>ID:</strong></div>\n                <div class=\"col-md-6\">{{ detail.MDR_MEDIA_ID }}</div>\n            </div>\n\n            <div class=\"row mb-3\">\n                <div class=\"col-md-6\"><strong>Active:</strong></div>\n                <div class=\"col-md-6\">\n                    <span *ngIf=\"detail.MDR_MEDIA_ACTIV_FLG; else notActive\">\n                        <img src=\"assets/images/active_icon.png\" alt=\"Active\" style=\"height:20px;\" />\n                    </span>\n                    <ng-template #notActive>\n                        <img src=\"assets/images/deactive_icon.png\" alt=\"Inactive\" style=\"height:20px;\" />\n                    </ng-template>\n                </div>\n            </div>\n\n            <div class=\"row mb-3\">\n                <div class=\"col-md-6\"><strong>Heading:</strong></div>\n                <div class=\"col-md-6\">{{ detail.MDR_MEDIA_HEAD_TXT }}</div>\n            </div>\n\n            <div class=\"row mb-3\">\n                <div class=\"col-md-6\"><strong>Subject:</strong></div>\n                <div class=\"col-md-6\">{{ detail.MDR_MEDIA_SUBJCT_TXT }}</div>\n            </div>\n\n            <div class=\"row mb-3\">\n                <div class=\"col-md-6\"><strong>Media Image:</strong></div>\n                <div class=\"col-md-6\">\n                    <img [src]=\"imgURL + (detail.MDR_MEDIA_PIC | slice:1)\" alt=\"Media Image\"\n                        class=\"img-thumbnail rounded mt-1\"\n                        style=\"max-width: 150px; max-height: 150px; object-fit: cover;\" />\n                </div>\n            </div>\n        </div>\n    </div>\n</ng-template>\n\n\n<ng-template #productAndServiceDetails>\n    <div>\n        <!-- Header -->\n        <div class=\"modal-header\">\n            <h4 class=\"modal-title\">Product & Service Details</h4>\n            <button type=\"button\" class=\"btn-close close pull-right\" aria-label=\"Close\" (click)=\"modalRef?.hide()\">\n                <span aria-hidden=\"true\" class=\"visually-hidden\">&times;</span>\n            </button>\n        </div>\n\n        <!-- Body -->\n        <div class=\"modal-body\">\n            <div class=\"row mb-3\">\n                <div class=\"col-md-6\"><strong>ID:</strong></div>\n                <div class=\"col-md-6\">{{ detail.MDR_STORE_PRDCT_SERVC_ID }}</div>\n            </div>\n\n            <div class=\"row mb-3\">\n                <div class=\"col-md-6\"><strong>Active:</strong></div>\n                <div class=\"col-md-6\">\n                    <span *ngIf=\"detail.MDR_STORE_PRDCT_SERVC_ACTIV_FLG; else notActive\">\n                        <img src=\"assets/images/active_icon.png\" alt=\"Active\" style=\"height:20px;\" />\n                    </span>\n                    <ng-template #notActive>\n                        <img src=\"assets/images/deactive_icon.png\" alt=\"Inactive\" style=\"height:20px;\" />\n                    </ng-template>\n                </div>\n            </div>\n\n            <div class=\"row mb-3\">\n                <div class=\"col-md-6\"><strong>Product / Service:</strong></div>\n                <div class=\"col-md-6\">{{ detail.MDR_STORE_PRDCT_SERVC_TXT }}</div>\n            </div>\n\n            <div class=\"row mb-3\">\n                <div class=\"col-md-6\"><strong>Image:</strong></div>\n                <div class=\"col-md-6\">\n                    <img [src]=\"imgURL + (detail.MDR_STORE_PRDCT_SERVC_IMAGE | slice:1)\" alt=\"Product / Service Image\"\n                        class=\"img-thumbnail rounded mt-1\"\n                        style=\"max-width: 150px; max-height: 150px; object-fit: cover;\" />\n                </div>\n            </div>\n        </div>\n    </div>\n</ng-template>\n\n<ng-template #clientRecommendationDetails>\n    <div>\n        <!-- Header -->\n        <div class=\"modal-header\">\n            <h4 class=\"modal-title\">Client Recommendation Details</h4>\n            <button type=\"button\" class=\"btn-close close pull-right\" aria-label=\"Close\" (click)=\"modalRef?.hide()\">\n                <span aria-hidden=\"true\" class=\"visually-hidden\">&times;</span>\n            </button>\n        </div>\n\n        <!-- Body -->\n        <div class=\"modal-body\">\n            <div class=\"row mb-3\">\n                <div class=\"col-md-6\"><strong>ID:</strong></div>\n                <div class=\"col-md-6\">{{ detail.MDR_STORE_CLIENT_ID }}</div>\n            </div>\n\n            <div class=\"row mb-3\">\n                <div class=\"col-md-6\"><strong>Active:</strong></div>\n                <div class=\"col-md-6\">\n                    <span *ngIf=\"detail.MDR_STORE_CLIENT_ACTIV_FLG; else notActive\">\n                        <img src=\"assets/images/active_icon.png\" alt=\"Active\" style=\"height:20px;\" />\n                    </span>\n                    <ng-template #notActive>\n                        <img src=\"assets/images/deactive_icon.png\" alt=\"Inactive\" style=\"height:20px;\" />\n                    </ng-template>\n                </div>\n            </div>\n\n            <div class=\"row mb-3\">\n                <div class=\"col-md-6\"><strong>Organization:</strong></div>\n                <div class=\"col-md-6\">{{ detail.MDR_STORE_CLIENT_ORG }}</div>\n            </div>\n\n            <div class=\"row mb-3\">\n                <div class=\"col-md-6\"><strong>Representative Name:</strong></div>\n                <div class=\"col-md-6\">\n                    {{ detail.MDR_STORE_CLIENT_REP_FIRSTNAME }} {{ detail.MDR_STORE_CLIENT_REP_LASTNAME }}\n                </div>\n            </div>\n\n            <div class=\"row mb-3\">\n                <div class=\"col-md-6\"><strong>Designation:</strong></div>\n                <div class=\"col-md-6\">{{ detail.MDR_STORE_CLIENT_REP_DESIGNATION }}</div>\n            </div>\n\n            <div class=\"row mb-3\">\n                <div class=\"col-md-6\"><strong>Feedback:</strong></div>\n                <div class=\"col-md-6 text-secondary\">{{ detail.MDR_STORE_CLIENT_SAID_ABOUT_TEXT }}</div>\n            </div>\n\n            <div class=\"row mb-3\">\n                <div class=\"col-md-6\"><strong>Client Image:</strong></div>\n                <div class=\"col-md-6\">\n                    <img [src]=\"imgURL + (detail.MDR_STORE_CLIENT_IMAGE | slice:1)\" alt=\"Client Image\"\n                        class=\"img-thumbnail rounded mt-1\"\n                        style=\"max-width: 150px; max-height: 150px; object-fit: cover;\" />\n                </div>\n            </div>\n        </div>\n    </div>\n</ng-template>", styles: [".toplevel {\r\n    background: #fff;\r\n    padding: 20px;\r\n    margin-bottom: 15px;\r\n    margin-top: 10px;\r\n    border: 1px solid #ddd;\r\n    border-radius: 5px;\r\n}\r\n\r\n.table-font-size th,\r\n.table-font-size td {\r\n  font-size: 13px; /* Change to your desired size */\r\n}\r\n\r\n.vipDiv {\r\n    background: #f8f9fa;\r\n    padding: 15px;\r\n    border-radius: 3px;\r\n    min-height: 210px;\r\n}\r\n\r\n.orderStatus td {\r\n    vertical-align: middle;\r\n}\r\n\r\n.orderStatus td .btn {\r\n    font-size: 13px;\r\n    padding: 4px 10px;\r\n}\r\n\r\n.orderStatus small {\r\n    color: #c50f20;\r\n    font-size: 90%;\r\n    font-weight: 600;\r\n}\r\n\r\n.bottom-btn {\r\n    float: right;\r\n}\r\n\r\n.alert.alert-success {\r\n    padding: 5px 10px;\r\n}\r\n\r\n.alert .fa {\r\n    font-size: 25px;\r\n    vertical-align: middle;\r\n    margin-left: 5px;\r\n}\r\n\r\n.orderStatus {\r\n    .card-header {\r\n        border: 0;\r\n    }\r\n    .card-body {\r\n        padding: 0;\r\n        overflow: auto;\r\n    }\r\n}\r\n\r\nh3.head-title {\r\n    font-size: 22px;\r\n    margin: 20px 0;\r\n    font-weight: bold;\r\n}\r\n\r\n.icon .fa {\r\n    font-size: 20px;\r\n    vertical-align: top;\r\n    color: #17a2b8;\r\n}\r\n\r\n.orderStatus .icon img {\r\n    max-width: 25px;\r\n}\r\n\r\n.orderStatus .btn {\r\n    background: #021422;\r\n    border-radius: 25px;\r\n    color: #fff;\r\n    font-size: 11px !important;\r\n    border: 1px solid #21333c;\r\n    i {\r\n        font-size: 18px;\r\n        vertical-align: middle;\r\n        padding-right: 5px;\r\n    }\r\n}\r\n\r\nbutton.btn.view-del-btn {\r\n    background: #63030c !important;\r\n}\r\n\r\n.table thead th {\r\n    border: 0;\r\n}\r\n\r\n.toplevel,\r\n.card {\r\n    padding: 0 20px 0;\r\n}\r\n\r\n.table th {\r\n    padding: 8px 5px;\r\n    text-align: center;\r\n    line-height: 13px;\r\n    font-weight: 600;\r\n    font-size: 13px;\r\n    border-top: 0;\r\n}\r\n\r\n.table td {\r\n    text-align: center;\r\n    font-size: 12px;\r\n    line-height: 15px;\r\n    padding: 10px 5px;\r\n}\r\n\r\ntd.icon {\r\n    padding: 0 !important;\r\n}\r\n\r\nbutton.btn.custom-btn {\r\n    min-width: 100px;\r\n}\r\n\r\n::ng-deep .nav-tabs .nav-link {\r\n  font-size: 11px; /* Adjust as needed */\r\n}\r\n\r\nbutton.btn.custom-btn-white {\r\n    min-width: 100px;\r\n    background: #ffffff;\r\n    border: 1px solid #c50f20;\r\n    color: #c50f20;\r\n    font-weight: 600;\r\n\r\n    &:hover {\r\n        background: #c50f20;\r\n        color: #ffffff;\r\n    }\r\n}\r\n\r\n.input-group-prepend+.invalid-feedback {\r\n    top: 35px;\r\n}\r\n\r\n.card-header {\r\n    padding: 10px 15px;\r\n    background: #63030c;\r\n    font-size: 12px;\r\n    color: #fff;\r\n    font-weight: 500;\r\n    span {\r\n        float: left;\r\n    }\r\n    span+span {\r\n        float: right;\r\n    }\r\n}\r\n\r\n.card-header img {\r\n    width: 16px;\r\n    margin-left: 3px;\r\n}\r\n\r\n.subcard-header {\r\n    padding: 8px 12px;\r\n    background: #63030c;\r\n    font-size: 10px;\r\n    color: #fff;\r\n    font-weight: 500;\r\n    span {\r\n        float: left;\r\n    }\r\n    span+span {\r\n        float: right;\r\n    }\r\n}\r\n\r\n.subcard-header img {\r\n    width: 16px;\r\n    margin-left: 3px;\r\n}\r\n\r\n.icofont-info-circle {\r\n    font-size: 20px;\r\n    vertical-align: middle;\r\n    margin-left: 3px;\r\n}\r\n\r\n.orderList thead tr {\r\n    background: #ff000029;\r\n}\r\n\r\n.orderList {\r\n    border-collapse: collapse;\r\n    border: 1px solid #ddd;\r\n    margin: 5px 0;\r\n}\r\n\r\n.orderList td {\r\n    border: 1px solid #ddd;\r\n}\r\n\r\n.orderList tr th {\r\n    background: #212529;\r\n    color: #fff;\r\n    vertical-align: middle;\r\n}\r\n\r\n.no-border td {\r\n    border: 0 !important;\r\n    text-align: right !important;\r\n    font-weight: 600;\r\n    font-size: 12px !important;\r\n}\r\n\r\nsmall.view-customer {\r\n    display: block;\r\n    text-decoration: underline;\r\n    cursor: pointer;\r\n}\r\n\r\nbutton.btn.view-ord-btn {\r\n    min-width: 112px;\r\n}\r\n\r\nbutton.btn.view-del-btn {\r\n    min-width: 125px;\r\n}\r\n\r\n.card-body.no_data_available {\r\n    text-align: center;\r\n    color: #bd2130;\r\n    img {\r\n        display: block;\r\n        text-align: center;\r\n        margin: 0 auto 5px;\r\n        max-width: 30px;\r\n    }\r\n}\r\n\r\n\r\nsmall.viewCart {\r\n    text-decoration: underline;\r\n    cursor: pointer;\r\n}\r\n\r\n.hr {\r\n    border: none;\r\n    border-top: 1.5px solid #d1d1d1;\r\n    margin: 16px 0;\r\n    height: 0;\r\n    width: 100%;\r\n}\r\n\r\nh1.heading-title {\r\n    margin: 20px 0 0;\r\n}\r\n\r\n.heading h2 {\r\n    padding: 10px 5px 10px;\r\n    font-size: 20px;\r\n}\r\n\r\n.row.topLevel {\r\n    background: #fff;\r\n    padding: 20px 0;\r\n    margin: 0;\r\n    border-radius: 5px;\r\n}\r\n\r\n.heading.store-domain {\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.store-domain div {\r\n    display: inline-block;\r\n    margin-right: 20px;\r\n}\r\n\r\n.store-domain span {\r\n    background: #ddd;\r\n    padding: 5px 20px;\r\n    font-size: 13px;\r\n    border-radius: 20px;\r\n    display: inline-block;\r\n    font-weight: bold;\r\n    margin-left: 5px;\r\n}\r\n\r\n.store_id {\r\n    background: #ddd;\r\n    padding: 5px 20px;\r\n    border-radius: 20px;\r\n    font-size: 13px;\r\n    font-weight: 700;\r\n    float: right;\r\n    margin-top: -40px;\r\n}\r\n\r\n.box {\r\n    width: 100%;\r\n    overflow: hidden;\r\n    box-shadow: 0 0 4px 0px #eee;\r\n    margin: 20px 0 5px;\r\n    border-radius: 4px;\r\n    padding: 10px;\r\n    background: #fff;\r\n}\r\n\r\n.main-content-area .box .col {\r\n    width: 20%;\r\n    float: left;\r\n    padding: 0;\r\n}\r\n\r\n.fa-star:before {\r\n    content: \"\\f005\";\r\n    color: #ff9600;\r\n    margin-right: 5px;\r\n}\r\n\r\n.pro-box {\r\n    box-shadow: 0 0 4px 0 #e9ecef;\r\n    margin: 0 5px 10px;\r\n    overflow: hidden;\r\n    padding: 15px;\r\n    border-radius: 3px;\r\n    position: relative;\r\n    border: 1px solid #dee2e6;\r\n}\r\n\r\n.pro-box img {\r\n    height: 100px;\r\n    width: 100px;\r\n    margin: 30px auto 15px;\r\n    display: block;\r\n}\r\n\r\n.storeitem .p-details {\r\n    margin-bottom: 42px;\r\n}\r\n\r\np.label-txt {\r\n    text-align: center;\r\n    padding: 10px;\r\n    font-size: 14px;\r\n    margin: 0;\r\n}\r\n\r\n.store-available-product .col {\r\n    width: 25% !important;\r\n}\r\n\r\n.selected-productLine h5,\r\n.store-available-product h5 {\r\n    font-size: 16px;\r\n    padding: 0 10px 5px;\r\n}\r\n\r\n.right-field-head {\r\n    float: right;\r\n    margin-top: 10px;\r\n}\r\n\r\n.right-field-head li {\r\n    display: inline-block;\r\n    padding: 0 10px;\r\n}\r\n\r\nspan.video,\r\nspan.doc {\r\n    padding: 8px 15px;\r\n    background: #dee2e6;\r\n    font-size: 12px;\r\n    border-radius: 20px;\r\n}\r\n\r\n.right-field-head .btn {\r\n    font-size: 11px;\r\n    border-radius: 20px;\r\n}\r\n\r\n.bottom-btn .btn {\r\n    line-height: 11px;\r\n}\r\n\r\n.box.prduct-gallery {\r\n    position: relative;\r\n}\r\n\r\n.sample-img {\r\n    position: absolute;\r\n    z-index: 1;\r\n    left: 15%;\r\n    top: 28%;\r\n    transform: rotate(-45deg);\r\n}\r\n\r\np.p-name {\r\n    text-align: center;\r\n    margin: 0;\r\n    font-size: 13px;\r\n    font-weight: 500;\r\n    vertical-align: middle;\r\n}\r\n\r\np.item-id {\r\n    text-align: center;\r\n    position: absolute;\r\n    top: 0;\r\n    background: #212529;\r\n    left: 0;\r\n    font-weight: 600;\r\n    color: #fff;\r\n    border-radius: 0 0 5px;\r\n    font-size: 11px;\r\n    padding: 3px 6px;\r\n}\r\n\r\nspan.price {\r\n    font-size: 12px;\r\n    padding: 7px 10px 0;\r\n    float: left;\r\n    font-weight: 600;\r\n    line-height: 20px;\r\n}\r\n\r\n.item-id b {\r\n    font-weight: 600;\r\n}\r\n\r\n.instock {\r\n    font-size: 12px;\r\n    text-align: center;\r\n    margin: 0 0 3px;\r\n    position: absolute;\r\n    top: 5%;\r\n    box-shadow: 0 0 30px 0 rgb(82 63 105 / 10%);\r\n    left: 70%;\r\n    background: rgb(224 152 152 / 24%);\r\n    width: 50px;\r\n    border: 1px solid rgb(0 0 0 / 10%);\r\n    height: 50px;\r\n    border-radius: 50%;\r\n    img {\r\n        width: 30px !important;\r\n        height: 30px !important;\r\n        margin: 9px auto;\r\n    }\r\n}\r\n\r\n.pro-box.storeitem.item-box {\r\n    border: 1px solid #dee2e6;\r\n    height: 300px;\r\n    padding-left: 20px;\r\n    padding-right: 20px;\r\n}\r\n\r\nh1.heading-title {\r\n    font-size: 20px;\r\n    text-transform: uppercase;\r\n    font-weight: 700;\r\n    color: #ff7900;\r\n    position: relative;\r\n    margin-bottom: 10px;\r\n    width: 100%;\r\n    span {\r\n        font-size: 10px;\r\n        text-transform: inherit;\r\n        background: #495057;\r\n        color: #fff;\r\n        padding: 10px 15px;\r\n        border-radius: 25px;\r\n    }\r\n}\r\n\r\nh1.heading-title img {\r\n    max-width: 65px;\r\n    margin-right: 5px;\r\n}\r\n\r\nh1.heading-title small {\r\n    display: inline-block;\r\n    font-weight: 400;\r\n    font-size: 13px;\r\n    position: absolute;\r\n    left: 80px;\r\n    bottom: 4px;\r\n    color: grey;\r\n}\r\n\r\n.offerDiv {\r\n    position: absolute;\r\n    top: 5px;\r\n    right: 5px;\r\n    font-size: 10px;\r\n    background: #dc3545;\r\n    line-height: 10px;\r\n    font-weight: 700;\r\n    width: 35px;\r\n    height: 35px;\r\n    border-radius: 50%;\r\n    padding: 9px;\r\n    text-align: center;\r\n    color: #fff;\r\n}\r\n\r\n.offerDiv small {\r\n    display: block;\r\n}\r\n\r\nspan.price.strike-price {\r\n    color: #ccc;\r\n    text-decoration: line-through;\r\n}\r\n\r\n.row.text-level {\r\n    margin: 0 -10px 10px;\r\n}\r\n\r\n.store-add-remove {\r\n    text-align: center;\r\n    padding: 10px;\r\n    float: left;\r\n    width: 100%;\r\n}\r\n\r\n.row.product-slider-box {\r\n    border-bottom: 5px solid #ddd;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.carousel-inner {\r\n    height: 278px;\r\n}\r\n\r\n.carousel-item {\r\n    margin-right: 0;\r\n    border: 1px solid #f8f9fa;\r\n    background: #fff;\r\n}\r\n\r\n.product-slider-box .domain-product {\r\n    max-width: 23%;\r\n}\r\n\r\n.product-slider-box .sub-domain-product {\r\n    max-width: 77%;\r\n}\r\n\r\n.store-add-remove .btn {\r\n    font-size: 11px;\r\n    text-align: center;\r\n    float: left;\r\n    transition: all .5s;\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n    min-width: 65px;\r\n}\r\n\r\n.store-add-remove .btn+.btn {\r\n    float: right;\r\n}\r\n\r\n.item-subitem-list .pro-box {\r\n    width: 95%;\r\n    overflow: auto;\r\n    height: 280px;\r\n}\r\n\r\n.item-subitem-list li {\r\n    width: 100%;\r\n    float: left;\r\n}\r\n\r\n.item-box {\r\n    max-width: 225px;\r\n    width: 100%;\r\n    float: left;\r\n}\r\n\r\n.sub-item-box {\r\n    width: 100%;\r\n    float: left;\r\n    max-width: 225px;\r\n}\r\n\r\n.sub-item-box .add_to_cart button.btn {\r\n    background: #000064;\r\n    height: 35px;\r\n    font-size: 13px;\r\n    line-height: 16px;\r\n    color: #fff;\r\n    border-radius: 25px;\r\n    margin: 10px 0 0;\r\n    width: 100%;\r\n    text-align: center;\r\n}\r\n\r\n.add_to_cart {\r\n    .remove-btn {\r\n        border-radius: 50%;\r\n        background: #05054ead !important;\r\n        color: #fff;\r\n        height: 35px;\r\n        padding: 0;\r\n    }\r\n    .btn+.btn {\r\n        width: 100%;\r\n        border: 0;\r\n        border-radius: 30px;\r\n        font-size: 15px;\r\n        line-height: normal;\r\n        font-weight: 600;\r\n    }\r\n}\r\n\r\n.middle-arrow {\r\n    float: left;\r\n    width: 30px;\r\n    height: 50px;\r\n    font-size: 40px;\r\n    margin-top: 10%;\r\n    color: #dee2e6;\r\n    text-align: center;\r\n}\r\n\r\n.price-details {\r\n    float: left;\r\n    width: 100%;\r\n    margin-bottom: 10px;\r\n    font-size: 15px;\r\n    line-height: normal;\r\n    font-weight: 600;\r\n    .unit-price {\r\n        float: left;\r\n        width: 42%;\r\n    }\r\n}\r\n\r\n.unit-price span {\r\n    display: block;\r\n    font-size: 12px;\r\n    font-weight: 400;\r\n}\r\n\r\n.whole-sale-price {\r\n    float: right;\r\n    width: 58%;\r\n    text-align: right;\r\n    span {\r\n        font-size: 12px;\r\n        display: block;\r\n        font-weight: 400;\r\n    }\r\n}\r\n\r\n.add_to_cart {\r\n    clear: both;\r\n}\r\n\r\n.subItem-field {\r\n    width: calc(100% - 280px);\r\n    float: left;\r\n}\r\n\r\n.item img {\r\n    width: 100%;\r\n}\r\n\r\n.pro-box.active {\r\n    border: 1px solid #63030c;\r\n}\r\n\r\n.p-details .form-control {\r\n    font-size: 13px;\r\n    padding: 0 5px;\r\n    min-height: 25px;\r\n    height: 25px;\r\n    text-align: center;\r\n}\r\n\r\n.p-details .form-group label {\r\n    margin-bottom: 0;\r\n    font-weight: 400;\r\n    line-height: normal;\r\n    padding-top: 2px;\r\n    padding-bottom: 2px;\r\n}\r\n\r\n.p-details .form-group {\r\n    margin-bottom: 4px;\r\n}\r\n\r\n.sub-item-box img {\r\n    margin-top: 5px !important;\r\n}\r\n\r\n.p-details p {\r\n    font-size: 12px;\r\n    line-height: 14px;\r\n}\r\n\r\n.add-stock input {\r\n    display: inline-block !important;\r\n    width: 60px !important;\r\n    margin-left: 5px;\r\n    vertical-align: middle;\r\n}\r\n\r\n.min-alert-count input {\r\n    width: 35px;\r\n    margin-left: 5px;\r\n    display: inline-block;\r\n    margin-right: 4px;\r\n}\r\n\r\n.d-flex span+span {\r\n    margin-left: auto;\r\n    font-weight: 600;\r\n    width: 60px;\r\n    i {\r\n        font-size: 16px;\r\n        color: #bd2130;\r\n        display: inline-block;\r\n        position: relative;\r\n        top: 2px;\r\n        cursor: pointer;\r\n    }\r\n}\r\n\r\n.sub-item-box .pro-box img {\r\n    height: 55px;\r\n    width: 55px;\r\n    margin: 18px auto 8px;\r\n}\r\n\r\n.links a {\r\n    display: block;\r\n    color: #17a2b8 !important;\r\n    text-decoration: underline !important;\r\n    font-size: 12px;\r\n    cursor: pointer;\r\n}\r\n\r\n.modal-header i {\r\n    margin: 5px 0;\r\n    color: #bd2130;\r\n}\r\n\r\n.field {\r\n    margin-bottom: 10px;\r\n    select {\r\n        border: 1px solid #ddd;\r\n        border-radius: 3px;\r\n        height: 26px;\r\n        font-size: 12px;\r\n        margin-left: 10px;\r\n        margin-top: -4px;\r\n        width: 60px;\r\n    }\r\n}\r\n\r\n.topcontent {\r\n    font-size: larger;\r\n}\r\n\r\n.actdct_icon img {\r\n    max-width: 45px;\r\n}\r\n\r\n.custom-table tbody tr:nth-child(odd) {\r\n  background-color: #f9f9f9; \r\n}\r\n\r\n.custom-table tbody tr:nth-child(even) {\r\n  background-color: #ffffff; \r\n}\r\n\r\n.custom-table th {\r\n  width: 40%;\r\n  background-color: #f1f1f1; \r\n}\r\n"] }]
    }], function () { return [{ type: i1.BsModalService }, { type: i2.FormBuilder }, { type: i3.ApiService }, { type: i4.ToastrService }]; }, { countryEvent: [{
            type: Output
        }], stateEvent: [{
            type: Output
        }], cityEvent: [{
            type: Output
        }], pincodeEvent: [{
            type: Output
        }] }); })();
//# sourceMappingURL=profile-management.component.js.map