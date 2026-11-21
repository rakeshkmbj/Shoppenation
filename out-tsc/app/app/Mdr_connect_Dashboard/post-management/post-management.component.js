import { Component } from '@angular/core';
import { Paginator } from '../../_models/pagination';
import * as i0 from "@angular/core";
import * as i1 from "ngx-bootstrap/modal";
import * as i2 from "src/app/services/api.service";
import * as i3 from "ngx-toastr";
import * as i4 from "@angular/common";
import * as i5 from "@angular/forms";
import * as i6 from "ngx-spinner";
function PostManagementComponent_div_15_tr_36_span_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵelement(1, "img", 39);
    i0.ɵɵelementEnd();
} }
function PostManagementComponent_div_15_tr_36_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 40);
} }
function PostManagementComponent_div_15_tr_36_span_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 41);
    i0.ɵɵtext(1, "Yes");
    i0.ɵɵelementEnd();
} }
function PostManagementComponent_div_15_tr_36_span_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 42);
    i0.ɵɵtext(1, "No");
    i0.ɵɵelementEnd();
} }
function PostManagementComponent_div_15_tr_36_span_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 42);
    i0.ɵɵtext(1, "Yes");
    i0.ɵɵelementEnd();
} }
function PostManagementComponent_div_15_tr_36_span_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 41);
    i0.ɵɵtext(1, "No");
    i0.ɵɵelementEnd();
} }
function PostManagementComponent_div_15_tr_36_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 19);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td", 19);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "td", 26);
    i0.ɵɵtemplate(6, PostManagementComponent_div_15_tr_36_span_6_Template, 2, 0, "span", 27);
    i0.ɵɵtemplate(7, PostManagementComponent_div_15_tr_36_ng_template_7_Template, 1, 0, "ng-template", null, 28, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "td", 19);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "td", 19);
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "td")(14, "button", 29);
    i0.ɵɵtext(15, "Details");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "td", 19);
    i0.ɵɵtext(17);
    i0.ɵɵpipe(18, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "td", 19);
    i0.ɵɵtemplate(20, PostManagementComponent_div_15_tr_36_span_20_Template, 2, 0, "span", 30);
    i0.ɵɵtemplate(21, PostManagementComponent_div_15_tr_36_span_21_Template, 2, 0, "span", 31);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "td", 19);
    i0.ɵɵtemplate(23, PostManagementComponent_div_15_tr_36_span_23_Template, 2, 0, "span", 31);
    i0.ɵɵtemplate(24, PostManagementComponent_div_15_tr_36_span_24_Template, 2, 0, "span", 30);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "td", 32)(26, "span", 33);
    i0.ɵɵelement(27, "i", 34);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "span", 35);
    i0.ɵɵelement(29, "i", 36);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "span", 37);
    i0.ɵɵelement(31, "i", 38);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const post_r9 = ctx.$implicit;
    const i_r10 = ctx.index;
    const _r12 = i0.ɵɵreference(8);
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", (ctx_r5.postsPaginator.currentPage - 1) * ctx_r5.postsPaginator.itemsPerPage + i_r10 + 1, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(post_r9.postId);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", post_r9.active)("ngIfElse", _r12);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(post_r9.category);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(post_r9.domainId);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(18, 11, post_r9.createdDate, "short"));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", post_r9.approved);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !post_r9.approved);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", post_r9.rejected);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !post_r9.rejected);
} }
function PostManagementComponent_div_15_li_45_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 23)(1, "span", 43);
    i0.ɵɵtext(2, "...");
    i0.ɵɵelementEnd()();
} }
function PostManagementComponent_div_15_ng_container_46_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r22 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 23)(1, "a", 24);
    i0.ɵɵlistener("click", function PostManagementComponent_div_15_ng_container_46_li_1_Template_a_click_1_listener() { i0.ɵɵrestoreView(_r22); const page_r18 = i0.ɵɵnextContext().$implicit; const ctx_r20 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r20.postsPaginator.changePage(page_r18)); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const page_r18 = i0.ɵɵnextContext().$implicit;
    const ctx_r19 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("active", page_r18 === ctx_r19.postsPaginator.currentPage);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(page_r18);
} }
function PostManagementComponent_div_15_ng_container_46_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, PostManagementComponent_div_15_ng_container_46_li_1_Template, 3, 3, "li", 44);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const page_r18 = ctx.$implicit;
    const ctx_r7 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", page_r18 !== 1 && page_r18 !== ctx_r7.postsPaginator.totalPages);
} }
function PostManagementComponent_div_15_li_47_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 23)(1, "span", 43);
    i0.ɵɵtext(2, "...");
    i0.ɵɵelementEnd()();
} }
function PostManagementComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r25 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 11)(1, "div", 12)(2, "div", 13)(3, "span");
    i0.ɵɵtext(4, "Post Management");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span", 14)(6, "strong");
    i0.ɵɵtext(7, "Total Posts:");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(9, "div", 15)(10, "div", 16)(11, "div", 17)(12, "table", 18)(13, "thead")(14, "tr")(15, "th", 19);
    i0.ɵɵtext(16, "S#");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "th", 19);
    i0.ɵɵtext(18, "Post ID");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "th", 19);
    i0.ɵɵtext(20, "Active");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "th", 19);
    i0.ɵɵtext(22, "Category");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "th", 19);
    i0.ɵɵtext(24, "Domain ID");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "th", 19);
    i0.ɵɵtext(26, "Details");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "th", 19);
    i0.ɵɵtext(28, "Created Date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(29, "th", 19);
    i0.ɵɵtext(30, "Approved");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(31, "th", 19);
    i0.ɵɵtext(32, "Rejected");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(33, "th", 19);
    i0.ɵɵtext(34, "Action");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(35, "tbody");
    i0.ɵɵtemplate(36, PostManagementComponent_div_15_tr_36_Template, 32, 14, "tr", 20);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(37, "nav", 21)(38, "ul", 22)(39, "li", 23)(40, "a", 24);
    i0.ɵɵlistener("click", function PostManagementComponent_div_15_Template_a_click_40_listener() { i0.ɵɵrestoreView(_r25); const ctx_r24 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r24.postsPaginator.changePage(ctx_r24.postsPaginator.currentPage - 1)); });
    i0.ɵɵtext(41, "Prev");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(42, "li", 23)(43, "a", 24);
    i0.ɵɵlistener("click", function PostManagementComponent_div_15_Template_a_click_43_listener() { i0.ɵɵrestoreView(_r25); const ctx_r26 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r26.postsPaginator.changePage(1)); });
    i0.ɵɵtext(44, "1");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(45, PostManagementComponent_div_15_li_45_Template, 3, 0, "li", 25);
    i0.ɵɵtemplate(46, PostManagementComponent_div_15_ng_container_46_Template, 2, 1, "ng-container", 20);
    i0.ɵɵtemplate(47, PostManagementComponent_div_15_li_47_Template, 3, 0, "li", 25);
    i0.ɵɵelementStart(48, "li", 23)(49, "a", 24);
    i0.ɵɵlistener("click", function PostManagementComponent_div_15_Template_a_click_49_listener() { i0.ɵɵrestoreView(_r25); const ctx_r27 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r27.postsPaginator.changePage(ctx_r27.postsPaginator.totalPages)); });
    i0.ɵɵtext(50);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(51, "li", 23)(52, "a", 24);
    i0.ɵɵlistener("click", function PostManagementComponent_div_15_Template_a_click_52_listener() { i0.ɵɵrestoreView(_r25); const ctx_r28 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r28.postsPaginator.changePage(ctx_r28.postsPaginator.currentPage + 1)); });
    i0.ɵɵtext(53, "Next");
    i0.ɵɵelementEnd()()()()()()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.postsPaginator.totalItems, " ");
    i0.ɵɵadvance(28);
    i0.ɵɵproperty("ngForOf", ctx_r0.postsPaginator.paginatedItems);
    i0.ɵɵadvance(3);
    i0.ɵɵclassProp("disabled", ctx_r0.postsPaginator.currentPage === 1);
    i0.ɵɵadvance(3);
    i0.ɵɵclassProp("active", ctx_r0.postsPaginator.currentPage === 1);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r0.postsPaginator.pagesToShow[0] > 2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r0.postsPaginator.pagesToShow);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.postsPaginator.pagesToShow[ctx_r0.postsPaginator.pagesToShow.length - 1] < ctx_r0.postsPaginator.totalPages - 1);
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("active", ctx_r0.postsPaginator.currentPage === ctx_r0.postsPaginator.totalPages);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.postsPaginator.totalPages, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("disabled", ctx_r0.postsPaginator.currentPage === ctx_r0.postsPaginator.totalPages);
} }
function PostManagementComponent_ng_template_19_option_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 69);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const cat_r31 = ctx.$implicit;
    i0.ɵɵproperty("value", cat_r31);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(cat_r31);
} }
function PostManagementComponent_ng_template_19_div_44_img_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 73);
} if (rf & 2) {
    const ctx_r32 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("src", ctx_r32.filePreviewUrl, i0.ɵɵsanitizeUrl);
} }
function PostManagementComponent_ng_template_19_div_44_video_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "video", 74);
} if (rf & 2) {
    const ctx_r33 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("src", ctx_r33.filePreviewUrl, i0.ɵɵsanitizeUrl);
} }
function PostManagementComponent_ng_template_19_div_44_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 70);
    i0.ɵɵtemplate(1, PostManagementComponent_ng_template_19_div_44_img_1_Template, 1, 1, "img", 71);
    i0.ɵɵtemplate(2, PostManagementComponent_ng_template_19_div_44_video_2_Template, 1, 1, "video", 72);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r30 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r30.isImageFile);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r30.isImageFile);
} }
function PostManagementComponent_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    const _r35 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 45)(1, "h4", 46);
    i0.ɵɵtext(2, "Add Post");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 47);
    i0.ɵɵlistener("click", function PostManagementComponent_ng_template_19_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r35); const ctx_r34 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r34.modalRef == null ? null : ctx_r34.modalRef.hide()); });
    i0.ɵɵelementStart(4, "span", 48);
    i0.ɵɵtext(5, "\u00D7");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(6, "div", 49)(7, "div", 50)(8, "div", 51)(9, "label");
    i0.ɵɵtext(10, "Post Category");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "select", 52);
    i0.ɵɵlistener("ngModelChange", function PostManagementComponent_ng_template_19_Template_select_ngModelChange_11_listener($event) { i0.ɵɵrestoreView(_r35); const ctx_r36 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r36.newPost.category = $event); });
    i0.ɵɵelementStart(12, "option", 53);
    i0.ɵɵtext(13, "Select Category");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(14, PostManagementComponent_ng_template_19_option_14_Template, 2, 2, "option", 54);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(15, "div", 51)(16, "label");
    i0.ɵɵtext(17, "Post Listing Title");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "input", 55);
    i0.ɵɵlistener("ngModelChange", function PostManagementComponent_ng_template_19_Template_input_ngModelChange_18_listener($event) { i0.ɵɵrestoreView(_r35); const ctx_r37 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r37.newPost.title = $event); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(19, "div", 50)(20, "div", 51)(21, "label");
    i0.ɵɵtext(22, "Post Template");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "select", 52);
    i0.ɵɵlistener("ngModelChange", function PostManagementComponent_ng_template_19_Template_select_ngModelChange_23_listener($event) { i0.ɵɵrestoreView(_r35); const ctx_r38 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r38.newPost.template = $event); });
    i0.ɵɵelementStart(24, "option", 56);
    i0.ɵɵtext(25, "Text");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "option", 57);
    i0.ɵɵtext(27, "Text & Image");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "option", 58);
    i0.ɵɵtext(29, "Text & Video");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(30, "div", 51)(31, "label");
    i0.ɵɵtext(32, "Created Date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(33, "input", 59);
    i0.ɵɵlistener("ngModelChange", function PostManagementComponent_ng_template_19_Template_input_ngModelChange_33_listener($event) { i0.ɵɵrestoreView(_r35); const ctx_r39 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r39.newPost.createdDate = $event); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(34, "div", 50)(35, "div", 60)(36, "label");
    i0.ɵɵtext(37, "Post Detail");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(38, "textarea", 61);
    i0.ɵɵlistener("ngModelChange", function PostManagementComponent_ng_template_19_Template_textarea_ngModelChange_38_listener($event) { i0.ɵɵrestoreView(_r35); const ctx_r40 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r40.newPost.detail = $event); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(39, "div", 62)(40, "div", 60)(41, "label");
    i0.ɵɵtext(42, "Attach Image/Video");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(43, "input", 63);
    i0.ɵɵlistener("change", function PostManagementComponent_ng_template_19_Template_input_change_43_listener($event) { i0.ɵɵrestoreView(_r35); const ctx_r41 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r41.onFileChange($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(44, PostManagementComponent_ng_template_19_div_44_Template, 3, 2, "div", 64);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(45, "div", 65)(46, "div", 66)(47, "button", 67);
    i0.ɵɵtext(48, "Validate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(49, "button", 68);
    i0.ɵɵlistener("click", function PostManagementComponent_ng_template_19_Template_button_click_49_listener() { i0.ɵɵrestoreView(_r35); const ctx_r42 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r42.saveAndPublish()); });
    i0.ɵɵtext(50, "Save & Publish");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(11);
    i0.ɵɵproperty("ngModel", ctx_r2.newPost.category);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r2.categoryList);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngModel", ctx_r2.newPost.title);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngModel", ctx_r2.newPost.template);
    i0.ɵɵadvance(10);
    i0.ɵɵproperty("ngModel", ctx_r2.newPost.createdDate);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngModel", ctx_r2.newPost.detail);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngIf", ctx_r2.filePreviewUrl);
} }
function PostManagementComponent_ng_template_21_option_114_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 77);
    i0.ɵɵtext(1, "Manufacturer/Producer");
    i0.ɵɵelementEnd();
} }
function PostManagementComponent_ng_template_21_option_115_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 78);
    i0.ɵɵtext(1, "Distributor/CNF");
    i0.ɵɵelementEnd();
} }
function PostManagementComponent_ng_template_21_option_116_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 79);
    i0.ɵɵtext(1, "Retailer/Wholeseller");
    i0.ɵɵelementEnd();
} }
function PostManagementComponent_ng_template_21_option_117_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 80);
    i0.ɵɵtext(1, "Pharma & Medicos");
    i0.ɵɵelementEnd();
} }
function PostManagementComponent_ng_template_21_option_118_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 81);
    i0.ɵɵtext(1, "HoReCa (Hotel /Restaurant/Caterer)");
    i0.ɵɵelementEnd();
} }
function PostManagementComponent_ng_template_21_option_119_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 83);
    i0.ɵɵtext(1, "Exporter/Importer");
    i0.ɵɵelementEnd();
} }
function PostManagementComponent_ng_template_21_option_120_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 84);
    i0.ɵɵtext(1, "School/University");
    i0.ɵɵelementEnd();
} }
function PostManagementComponent_ng_template_21_option_121_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 85);
    i0.ɵɵtext(1, "Health Care /Hospitals and Medicos");
    i0.ɵɵelementEnd();
} }
function PostManagementComponent_ng_template_21_option_122_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 86);
    i0.ɵɵtext(1, "Fitness & Health Organization");
    i0.ɵɵelementEnd();
} }
function PostManagementComponent_ng_template_21_option_123_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 87);
    i0.ɵɵtext(1, "Dropship Intermediatory");
    i0.ɵɵelementEnd();
} }
function PostManagementComponent_ng_template_21_option_124_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 88);
    i0.ɵɵtext(1, "Productivity Tool provider");
    i0.ɵɵelementEnd();
} }
function PostManagementComponent_ng_template_21_option_125_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 89);
    i0.ɵɵtext(1, "Contact Centres");
    i0.ɵɵelementEnd();
} }
function PostManagementComponent_ng_template_21_option_126_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 90);
    i0.ɵɵtext(1, "Logistic & 3PL Providers");
    i0.ɵɵelementEnd();
} }
function PostManagementComponent_ng_template_21_option_127_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 91);
    i0.ɵɵtext(1, "Automobile Service Provider Org");
    i0.ɵɵelementEnd();
} }
function PostManagementComponent_ng_template_21_option_128_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 92);
    i0.ɵɵtext(1, "Recruitment And Skill Development Org");
    i0.ɵɵelementEnd();
} }
function PostManagementComponent_ng_template_21_option_129_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 93);
    i0.ɵɵtext(1, "Travel & Tour Operators");
    i0.ɵɵelementEnd();
} }
function PostManagementComponent_ng_template_21_option_130_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 94);
    i0.ɵɵtext(1, "Facility Management Service Provider");
    i0.ɵɵelementEnd();
} }
function PostManagementComponent_ng_template_21_option_131_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 95);
    i0.ɵɵtext(1, "Real Estate Developers and Services Org");
    i0.ɵɵelementEnd();
} }
function PostManagementComponent_ng_template_21_option_132_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 96);
    i0.ɵɵtext(1, "Business Consulting Organization");
    i0.ɵɵelementEnd();
} }
function PostManagementComponent_ng_template_21_option_133_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 97);
    i0.ɵɵtext(1, "CA & Auditing Organization");
    i0.ɵɵelementEnd();
} }
function PostManagementComponent_ng_template_21_option_134_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 98);
    i0.ɵɵtext(1, "Advertisement & Media Firm");
    i0.ɵɵelementEnd();
} }
function PostManagementComponent_ng_template_21_option_135_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 99);
    i0.ɵɵtext(1, "Software Development Organization");
    i0.ɵɵelementEnd();
} }
function PostManagementComponent_ng_template_21_option_136_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 100);
    i0.ɵɵtext(1, "Event Management Organization");
    i0.ɵɵelementEnd();
} }
function PostManagementComponent_ng_template_21_option_137_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 101);
    i0.ɵɵtext(1, "Banking & Financial Organization");
    i0.ɵɵelementEnd();
} }
function PostManagementComponent_ng_template_21_option_138_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 102);
    i0.ɵɵtext(1, "NGO/Trust");
    i0.ɵɵelementEnd();
} }
function PostManagementComponent_ng_template_21_option_139_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 103);
    i0.ɵɵtext(1, "Other Corporate Services");
    i0.ɵɵelementEnd();
} }
function PostManagementComponent_ng_template_21_div_184_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 136);
    i0.ɵɵelement(1, "img", 137);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r71 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("src", ctx_r71.selectedImageUrl, i0.ɵɵsanitizeUrl);
} }
function PostManagementComponent_ng_template_21_div_184_Template(rf, ctx) { if (rf & 1) {
    const _r73 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 62)(1, "div", 60)(2, "label");
    i0.ɵɵtext(3, "Upload Image");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "input", 134);
    i0.ɵɵlistener("change", function PostManagementComponent_ng_template_21_div_184_Template_input_change_4_listener($event) { i0.ɵɵrestoreView(_r73); const ctx_r72 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r72.onFileSelect($event, "image")); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, PostManagementComponent_ng_template_21_div_184_div_5_Template, 2, 1, "div", 135);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r69 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", ctx_r69.selectedImageUrl);
} }
function PostManagementComponent_ng_template_21_div_185_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 136);
    i0.ɵɵelement(1, "video", 139);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r74 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("src", ctx_r74.selectedVideoUrl, i0.ɵɵsanitizeUrl);
} }
function PostManagementComponent_ng_template_21_div_185_Template(rf, ctx) { if (rf & 1) {
    const _r76 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 62)(1, "div", 60)(2, "label");
    i0.ɵɵtext(3, "Upload Video");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "input", 138);
    i0.ɵɵlistener("change", function PostManagementComponent_ng_template_21_div_185_Template_input_change_4_listener($event) { i0.ɵɵrestoreView(_r76); const ctx_r75 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r75.onFileSelect($event, "video")); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, PostManagementComponent_ng_template_21_div_185_div_5_Template, 2, 1, "div", 135);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r70 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", ctx_r70.selectedVideoUrl);
} }
function PostManagementComponent_ng_template_21_Template(rf, ctx) { if (rf & 1) {
    const _r78 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 45)(1, "h4", 46);
    i0.ɵɵtext(2, "Add Post");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 47);
    i0.ɵɵlistener("click", function PostManagementComponent_ng_template_21_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r78); const ctx_r77 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r77.modalRef == null ? null : ctx_r77.modalRef.hide()); });
    i0.ɵɵelementStart(4, "span", 48);
    i0.ɵɵtext(5, "\u00D7");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(6, "div", 49)(7, "div", 62)(8, "div", 75)(9, "label");
    i0.ɵɵtext(10, "Timezone");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "select", 52);
    i0.ɵɵlistener("ngModelChange", function PostManagementComponent_ng_template_21_Template_select_ngModelChange_11_listener($event) { i0.ɵɵrestoreView(_r78); const ctx_r79 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r79.newPost.timezone = $event); });
    i0.ɵɵelementStart(12, "option", 53);
    i0.ɵɵtext(13, "Select");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "option", 76);
    i0.ɵɵtext(15, "IST");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(16, "div", 75)(17, "label");
    i0.ɵɵtext(18, "Industry");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "select", 52);
    i0.ɵɵlistener("ngModelChange", function PostManagementComponent_ng_template_21_Template_select_ngModelChange_19_listener($event) { i0.ɵɵrestoreView(_r78); const ctx_r80 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r80.newPost.industry = $event); });
    i0.ɵɵelementStart(20, "option", 53);
    i0.ɵɵtext(21, "Select");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "option", 77);
    i0.ɵɵtext(23, "Wine & Liquor");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "option", 78);
    i0.ɵɵtext(25, "Hotel Restaurant & Catering");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "option", 79);
    i0.ɵɵtext(27, "FMCG/Kirana & Grocery");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "option", 80);
    i0.ɵɵtext(29, "Fashion /Beauty Products /Footwear");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "option", 81);
    i0.ɵɵtext(31, "Electronics /Consumer Appliances");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(32, "option", 82);
    i0.ɵɵtext(33, "Furnitures (Office /Hospital/Home)");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(34, "option", 83);
    i0.ɵɵtext(35, "Pharma & Medicos");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(36, "option", 84);
    i0.ɵɵtext(37, "Home Decors & Office Furnishings");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(38, "option", 85);
    i0.ɵɵtext(39, "Medicine (Human/Pets)");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(40, "option", 86);
    i0.ɵɵtext(41, "Facility Management Services");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(42, "option", 87);
    i0.ɵɵtext(43, "Farming / Agro And Agro Care");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(44, "option", 88);
    i0.ɵɵtext(45, "Automobiles & Vehicles");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(46, "option", 89);
    i0.ɵɵtext(47, "Health Care /Clinics /Hospitals");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(48, "option", 90);
    i0.ɵɵtext(49, "Office /Home Infrastructure Services");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(50, "option", 91);
    i0.ɵɵtext(51, "Automobile Spare Parts");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(52, "option", 92);
    i0.ɵɵtext(53, "Kitchen & Dining");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(54, "option", 93);
    i0.ɵɵtext(55, "Electrical & Lighting");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(56, "option", 94);
    i0.ɵɵtext(57, "Entertainment & Mobility");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(58, "option", 95);
    i0.ɵɵtext(59, "Sanitary Paints /Cements and Infra Furnishings");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(60, "option", 96);
    i0.ɵɵtext(61, "Logistic and transportation");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(62, "option", 97);
    i0.ɵɵtext(63, "Banking /Finance and Accounting");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(64, "option", 98);
    i0.ɵɵtext(65, "Business Consulting & Liasoning");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(66, "option", 99);
    i0.ɵɵtext(67, "Travel & Tourism");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(68, "option", 100);
    i0.ɵɵtext(69, "Hardware /Software Providers");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(70, "option", 101);
    i0.ɵɵtext(71, "Real Estate and development");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(72, "option", 102);
    i0.ɵɵtext(73, "Media & Advertisement");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(74, "option", 103);
    i0.ɵɵtext(75, "Event Management");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(76, "option", 104);
    i0.ɵɵtext(77, "Corporate Services /professional services");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(78, "option", 105);
    i0.ɵɵtext(79, "Skill Development /Trainings & recruitments");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(80, "div", 75)(81, "label");
    i0.ɵɵtext(82, "Platform");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(83, "select", 52);
    i0.ɵɵlistener("ngModelChange", function PostManagementComponent_ng_template_21_Template_select_ngModelChange_83_listener($event) { i0.ɵɵrestoreView(_r78); const ctx_r81 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r81.newPost.platform = $event); });
    i0.ɵɵelementStart(84, "option", 53);
    i0.ɵɵtext(85, "Select");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(86, "option", 77);
    i0.ɵɵtext(87, "Posts");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(88, "div", 75)(89, "label");
    i0.ɵɵtext(90, "Audience");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(91, "select", 52);
    i0.ɵɵlistener("ngModelChange", function PostManagementComponent_ng_template_21_Template_select_ngModelChange_91_listener($event) { i0.ɵɵrestoreView(_r78); const ctx_r82 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r82.newPost.audience = $event); });
    i0.ɵɵelementStart(92, "option", 53);
    i0.ɵɵtext(93, "Select");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(94, "option", 77);
    i0.ɵɵtext(95, "Seller");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(96, "option", 78);
    i0.ɵɵtext(97, "Buyer");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(98, "div", 75)(99, "label");
    i0.ɵɵtext(100, "Category");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(101, "select", 52);
    i0.ɵɵlistener("ngModelChange", function PostManagementComponent_ng_template_21_Template_select_ngModelChange_101_listener($event) { i0.ɵɵrestoreView(_r78); const ctx_r83 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r83.newPost.category = $event); });
    i0.ɵɵelementStart(102, "option", 53);
    i0.ɵɵtext(103, "Select");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(104, "option", 106);
    i0.ɵɵtext(105, "Product Based");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(106, "option", 77);
    i0.ɵɵtext(107, "Service Based");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(108, "div", 75)(109, "label");
    i0.ɵɵtext(110, "Sub-category");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(111, "select", 52);
    i0.ɵɵlistener("ngModelChange", function PostManagementComponent_ng_template_21_Template_select_ngModelChange_111_listener($event) { i0.ɵɵrestoreView(_r78); const ctx_r84 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r84.newPost.subcategory = $event); });
    i0.ɵɵelementStart(112, "option", 53);
    i0.ɵɵtext(113, "Select");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(114, PostManagementComponent_ng_template_21_option_114_Template, 2, 0, "option", 107);
    i0.ɵɵtemplate(115, PostManagementComponent_ng_template_21_option_115_Template, 2, 0, "option", 108);
    i0.ɵɵtemplate(116, PostManagementComponent_ng_template_21_option_116_Template, 2, 0, "option", 109);
    i0.ɵɵtemplate(117, PostManagementComponent_ng_template_21_option_117_Template, 2, 0, "option", 110);
    i0.ɵɵtemplate(118, PostManagementComponent_ng_template_21_option_118_Template, 2, 0, "option", 111);
    i0.ɵɵtemplate(119, PostManagementComponent_ng_template_21_option_119_Template, 2, 0, "option", 112);
    i0.ɵɵtemplate(120, PostManagementComponent_ng_template_21_option_120_Template, 2, 0, "option", 113);
    i0.ɵɵtemplate(121, PostManagementComponent_ng_template_21_option_121_Template, 2, 0, "option", 114);
    i0.ɵɵtemplate(122, PostManagementComponent_ng_template_21_option_122_Template, 2, 0, "option", 115);
    i0.ɵɵtemplate(123, PostManagementComponent_ng_template_21_option_123_Template, 2, 0, "option", 116);
    i0.ɵɵtemplate(124, PostManagementComponent_ng_template_21_option_124_Template, 2, 0, "option", 117);
    i0.ɵɵtemplate(125, PostManagementComponent_ng_template_21_option_125_Template, 2, 0, "option", 118);
    i0.ɵɵtemplate(126, PostManagementComponent_ng_template_21_option_126_Template, 2, 0, "option", 119);
    i0.ɵɵtemplate(127, PostManagementComponent_ng_template_21_option_127_Template, 2, 0, "option", 120);
    i0.ɵɵtemplate(128, PostManagementComponent_ng_template_21_option_128_Template, 2, 0, "option", 121);
    i0.ɵɵtemplate(129, PostManagementComponent_ng_template_21_option_129_Template, 2, 0, "option", 122);
    i0.ɵɵtemplate(130, PostManagementComponent_ng_template_21_option_130_Template, 2, 0, "option", 123);
    i0.ɵɵtemplate(131, PostManagementComponent_ng_template_21_option_131_Template, 2, 0, "option", 124);
    i0.ɵɵtemplate(132, PostManagementComponent_ng_template_21_option_132_Template, 2, 0, "option", 125);
    i0.ɵɵtemplate(133, PostManagementComponent_ng_template_21_option_133_Template, 2, 0, "option", 126);
    i0.ɵɵtemplate(134, PostManagementComponent_ng_template_21_option_134_Template, 2, 0, "option", 127);
    i0.ɵɵtemplate(135, PostManagementComponent_ng_template_21_option_135_Template, 2, 0, "option", 128);
    i0.ɵɵtemplate(136, PostManagementComponent_ng_template_21_option_136_Template, 2, 0, "option", 129);
    i0.ɵɵtemplate(137, PostManagementComponent_ng_template_21_option_137_Template, 2, 0, "option", 130);
    i0.ɵɵtemplate(138, PostManagementComponent_ng_template_21_option_138_Template, 2, 0, "option", 131);
    i0.ɵɵtemplate(139, PostManagementComponent_ng_template_21_option_139_Template, 2, 0, "option", 132);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(140, "div", 75)(141, "label");
    i0.ɵɵtext(142, "Post Category");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(143, "select", 52);
    i0.ɵɵlistener("ngModelChange", function PostManagementComponent_ng_template_21_Template_select_ngModelChange_143_listener($event) { i0.ɵɵrestoreView(_r78); const ctx_r85 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r85.newPost.postCategory = $event); });
    i0.ɵɵelementStart(144, "option", 53);
    i0.ɵɵtext(145, "Select");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(146, "option", 77);
    i0.ɵɵtext(147, "Promotional");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(148, "option", 78);
    i0.ɵɵtext(149, "Distribution Network");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(150, "option", 79);
    i0.ɵɵtext(151, "HR & Talent");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(152, "option", 80);
    i0.ɵɵtext(153, "Infrastructure");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(154, "option", 81);
    i0.ɵɵtext(155, "Technology & Support");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(156, "option", 82);
    i0.ɵɵtext(157, "Events & Sponsors");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(158, "option", 83);
    i0.ɵɵtext(159, "Services");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(160, "option", 84);
    i0.ɵɵtext(161, "General");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(162, "option", 85);
    i0.ɵɵtext(163, "Franchisee & Collaborators");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(164, "div", 50)(165, "div", 51)(166, "label");
    i0.ɵɵtext(167, "Post Listing Title");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(168, "input", 55);
    i0.ɵɵlistener("ngModelChange", function PostManagementComponent_ng_template_21_Template_input_ngModelChange_168_listener($event) { i0.ɵɵrestoreView(_r78); const ctx_r86 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r86.newPost.title = $event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(169, "div", 51)(170, "label");
    i0.ɵɵtext(171, "Post Template");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(172, "select", 52);
    i0.ɵɵlistener("ngModelChange", function PostManagementComponent_ng_template_21_Template_select_ngModelChange_172_listener($event) { i0.ɵɵrestoreView(_r78); const ctx_r87 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r87.newPost.template = $event); });
    i0.ɵɵelementStart(173, "option", 53);
    i0.ɵɵtext(174, "Select");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(175, "option", 57);
    i0.ɵɵtext(176, "Text + Image");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(177, "option", 58);
    i0.ɵɵtext(178, "Text + Video");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(179, "div", 50)(180, "div", 60)(181, "label");
    i0.ɵɵtext(182, "Post Detail");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(183, "textarea", 61);
    i0.ɵɵlistener("ngModelChange", function PostManagementComponent_ng_template_21_Template_textarea_ngModelChange_183_listener($event) { i0.ɵɵrestoreView(_r78); const ctx_r88 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r88.newPost.detail = $event); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(184, PostManagementComponent_ng_template_21_div_184_Template, 6, 1, "div", 133);
    i0.ɵɵtemplate(185, PostManagementComponent_ng_template_21_div_185_Template, 6, 1, "div", 133);
    i0.ɵɵelementStart(186, "div", 65)(187, "div", 66)(188, "button", 68);
    i0.ɵɵlistener("click", function PostManagementComponent_ng_template_21_Template_button_click_188_listener() { i0.ɵɵrestoreView(_r78); const ctx_r89 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r89.saveAndPublish()); });
    i0.ɵɵtext(189, "Save & Publish");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(11);
    i0.ɵɵproperty("ngModel", ctx_r4.newPost.timezone);
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("ngModel", ctx_r4.newPost.industry);
    i0.ɵɵadvance(64);
    i0.ɵɵproperty("ngModel", ctx_r4.newPost.platform);
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("ngModel", ctx_r4.newPost.audience);
    i0.ɵɵadvance(10);
    i0.ɵɵproperty("ngModel", ctx_r4.newPost.category);
    i0.ɵɵadvance(10);
    i0.ɵɵproperty("ngModel", ctx_r4.newPost.subcategory);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r4.newPost.category === "0");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.newPost.category === "0");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.newPost.category === "0");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.newPost.category === "0");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.newPost.category === "1");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.newPost.category === "1");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.newPost.category === "1");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.newPost.category === "1");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.newPost.category === "1");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.newPost.category === "1");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.newPost.category === "1");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.newPost.category === "1");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.newPost.category === "1");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.newPost.category === "1");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.newPost.category === "1");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.newPost.category === "1");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.newPost.category === "1");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.newPost.category === "1");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.newPost.category === "1");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.newPost.category === "1");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.newPost.category === "1");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.newPost.category === "1");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.newPost.category === "1");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.newPost.category === "1");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.newPost.category === "1");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.newPost.category === "1");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngModel", ctx_r4.newPost.postCategory);
    i0.ɵɵadvance(25);
    i0.ɵɵproperty("ngModel", ctx_r4.newPost.title);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngModel", ctx_r4.newPost.template);
    i0.ɵɵadvance(11);
    i0.ɵɵproperty("ngModel", ctx_r4.newPost.detail);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.newPost.template === "Text & Image");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.newPost.template === "Text & Video");
} }
export class PostManagementComponent {
    constructor(modalService, apiService, toastr) {
        this.modalService = modalService;
        this.apiService = apiService;
        this.toastr = toastr;
        this.showResponceCentre = false;
        this.selectedImageUrl = null;
        this.selectedVideoUrl = null;
        this.selectedFileBase64 = '';
        this.categoryList = ['Technology', 'Health', 'Education', 'Entertainment'];
        this.newPost = {
            timezone: '',
            industry: '',
            platform: '',
            audience: '',
            category: '',
            subcategory: '',
            postCategory: '',
            title: '',
            template: '',
            detail: '',
            file: null,
            createdDate: ''
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
    onFileSelect(event, type) {
        const input = event.target;
        if (input.files && input.files[0]) {
            const file = input.files[0];
            const reader = new FileReader();
            reader.onload = () => {
                const base64WithPrefix = reader.result;
                const base64String = base64WithPrefix.split(',')[1];
                this.selectedFileBase64 = base64String;
                if (type === 'image') {
                    this.selectedImageUrl = base64WithPrefix;
                }
                else if (type === 'video') {
                    this.selectedVideoUrl = base64WithPrefix;
                }
            };
            reader.readAsDataURL(file);
        }
    }
    // saveAndPublish() {
    //   console.log('Post Data:', this.newPost);
    //   // API call logic
    // }
    saveAndPublish() {
        const payload = {
            // Storecode: this.B2bData.GLB_Login_Ecom_storecode,
            Storecode: "1001070099",
            Domainid: "3",
            PostCategoryid: this.newPost.postCategory,
            PostTitle: this.newPost.title,
            TxtImgFlg: this.newPost.template === 'Text & Image',
            TxtVdoFlg: this.newPost.template === 'Text & Video',
            PostDetailTxt: this.newPost.detail,
            PostMedia: this.selectedFileBase64,
            Posttag1: 1,
            Posttag2: 3,
            Posttag3: 1,
            Posttag4: 2,
            Posttag5: 3
        };
        console.log("Payload: ", payload);
        this.apiService.postCall(this.apiService.baseURL + '/ADD_MDR_Storepost', payload)
            .subscribe({
            next: (data) => {
                console.log(data);
                const publish = {
                    Postid: data.PostId,
                    UserId: "1100070132"
                };
                this.apiService.postCall(this.apiService.baseURL + '/Publish_MDRDistribute_post', publish)
                    .subscribe(data => {
                    console.log(data);
                    this.toastr.success(data, "", { timeOut: 5000 });
                }, error => {
                    console.log(error);
                });
            },
            error: (error) => {
                this.toastr.error(error.error.Message, '', { timeOut: 5000 });
            }
        });
        this.modalRef.hide();
    }
    openResponceCentre(post) {
        this.showResponceCentre = !this.showResponceCentre;
    }
}
PostManagementComponent.ɵfac = function PostManagementComponent_Factory(t) { return new (t || PostManagementComponent)(i0.ɵɵdirectiveInject(i1.BsModalService), i0.ɵɵdirectiveInject(i2.ApiService), i0.ɵɵdirectiveInject(i3.ToastrService)); };
PostManagementComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PostManagementComponent, selectors: [["app-post-management"]], decls: 23, vars: 1, consts: [[1, "content"], [1, "heading-title"], [1, "card"], [1, "card-body", "pl-0", "pr-0"], [1, "row", "topcontent"], [1, "col-md-6", "mb-3"], ["type", "button", 1, "btn", "custom-btn", "float-right", 3, "click"], ["class", "card exiting-office-table orderStatus p-0 mt-2", 4, "ngIf"], ["template", "<img src='assets/images/icons/please_wait.gif' />"], ["addPostold", ""], ["addPost", ""], [1, "card", "exiting-office-table", "orderStatus", "p-0", "mt-2"], [1, "card-header"], [2, "display", "flex", "flex-direction", "column"], [1, "small"], [1, "card-body", "pa-0"], [1, "row", "m-0"], [1, "col-md-12", "py-2"], [1, "table"], [1, "font"], [4, "ngFor", "ngForOf"], [1, "pull-right", "mr-2"], [1, "pagination"], [1, "page-item"], [1, "page-link", 2, "cursor", "pointer", 3, "click"], ["class", "page-item", 4, "ngIf"], [1, "actdct_icon"], [4, "ngIf", "ngIfElse"], ["inactiveIcon", ""], [1, "btn", "btn-sm", "btn-outline-info"], ["class", "text-success", 4, "ngIf"], ["class", "text-danger", 4, "ngIf"], [1, "action_icon"], ["title", "Edit", 1, "delete-icon"], [1, "fa", "fa-edit"], ["title", "Turbo", 1, "delete-icon"], [1, "fa", "fa-bolt"], ["title", "Delete", 1, "delete-icon"], [1, "fa", "fa-trash"], ["src", "assets/images/active_icon.png"], ["src", "assets/images/deactive_icon.png"], [1, "text-success"], [1, "text-danger"], [1, "page-link"], ["class", "page-item", 3, "active", 4, "ngIf"], [1, "modal-header"], [1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "btn-close", "close", "pull-right", 3, "click"], ["aria-hidden", "true", 1, "visually-hidden"], [1, "modal-body"], [1, "row", "mb-2"], [1, "col-md-6"], [1, "form-control", 3, "ngModel", "ngModelChange"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["type", "text", "placeholder", "Enter Post Listing Title", 1, "form-control", 3, "ngModel", "ngModelChange"], ["value", "Text"], ["value", "Text & Image"], ["value", "Text & Video"], ["type", "date", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "col-md-12"], ["rows", "4", "placeholder", "Enter post details", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "row", "mb-3"], ["type", "file", 1, "form-control-file", "border", "p-2", "rounded", 3, "change"], ["class", "mt-2 border p-2 rounded", 4, "ngIf"], [1, "row"], [1, "col-md-12", "text-right"], [1, "btn", "custom-btn", "btn-space"], [1, "btn", "custom-btn", 3, "click"], [3, "value"], [1, "mt-2", "border", "p-2", "rounded"], ["alt", "Preview", "style", "max-width: 150px; max-height: 150px;", 3, "src", 4, "ngIf"], ["controls", "", "style", "max-width: 150px; max-height: 150px;", 3, "src", 4, "ngIf"], ["alt", "Preview", 2, "max-width", "150px", "max-height", "150px", 3, "src"], ["controls", "", 2, "max-width", "150px", "max-height", "150px", 3, "src"], [1, "col-md-6", "mb-2"], ["value", "IST"], ["value", "1"], ["value", "2"], ["value", "3"], ["value", "4"], ["value", "5"], ["value", "6"], ["value", "7"], ["value", "8"], ["value", "9"], ["value", "10"], ["value", "11"], ["value", "12"], ["value", "13"], ["value", "14"], ["value", "15"], ["value", "16"], ["value", "17"], ["value", "18"], ["value", "19"], ["value", "20"], ["value", "21"], ["value", "22"], ["value", "23"], ["value", "24"], ["value", "25"], ["value", "26"], ["value", "27"], ["value", "28"], ["value", "29"], ["value", "0"], ["value", "1", 4, "ngIf"], ["value", "2", 4, "ngIf"], ["value", "3", 4, "ngIf"], ["value", "4", 4, "ngIf"], ["value", "5", 4, "ngIf"], ["value", "7", 4, "ngIf"], ["value", "8", 4, "ngIf"], ["value", "9", 4, "ngIf"], ["value", "10", 4, "ngIf"], ["value", "11", 4, "ngIf"], ["value", "12", 4, "ngIf"], ["value", "13", 4, "ngIf"], ["value", "14", 4, "ngIf"], ["value", "15", 4, "ngIf"], ["value", "16", 4, "ngIf"], ["value", "17", 4, "ngIf"], ["value", "18", 4, "ngIf"], ["value", "19", 4, "ngIf"], ["value", "20", 4, "ngIf"], ["value", "21", 4, "ngIf"], ["value", "22", 4, "ngIf"], ["value", "23", 4, "ngIf"], ["value", "24", 4, "ngIf"], ["value", "25", 4, "ngIf"], ["value", "26", 4, "ngIf"], ["value", "27", 4, "ngIf"], ["class", "row mb-3", 4, "ngIf"], ["type", "file", "accept", "image/*", 1, "form-control-file", "border", "p-2", "rounded", 2, "margin-top", "8px", 3, "change"], ["class", "mt-2 border p-2 rounded text-center", 4, "ngIf"], [1, "mt-2", "border", "p-2", "rounded", "text-center"], ["alt", "Preview", 2, "max-width", "100%", "max-height", "200px", 3, "src"], ["type", "file", "accept", "video/*", 1, "form-control-file", "border", "p-2", "rounded", 2, "margin-top", "8px", 3, "change"], ["controls", "", 2, "max-width", "100%", "max-height", "200px", 3, "src"]], template: function PostManagementComponent_Template(rf, ctx) { if (rf & 1) {
        const _r90 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "div", 0)(1, "h1", 1);
        i0.ɵɵtext(2, "Post Management ( Digital Marketing On PLatform )");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "div", 2)(4, "div", 3)(5, "div")(6, "div", 4)(7, "div", 5)(8, "span")(9, "strong");
        i0.ɵɵtext(10, "Storecode: ");
        i0.ɵɵelementEnd();
        i0.ɵɵtext(11, "3254386586");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(12, "div", 5)(13, "button", 6);
        i0.ɵɵlistener("click", function PostManagementComponent_Template_button_click_13_listener() { i0.ɵɵrestoreView(_r90); const _r3 = i0.ɵɵreference(22); return i0.ɵɵresetView(ctx.openModal(_r3)); });
        i0.ɵɵtext(14, "Add Post");
        i0.ɵɵelementEnd()()();
        i0.ɵɵtemplate(15, PostManagementComponent_div_15_Template, 54, 14, "div", 7);
        i0.ɵɵelementEnd();
        i0.ɵɵelement(16, "br")(17, "br")(18, "ngx-spinner", 8);
        i0.ɵɵelementEnd()()();
        i0.ɵɵtemplate(19, PostManagementComponent_ng_template_19_Template, 51, 7, "ng-template", null, 9, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(21, PostManagementComponent_ng_template_21_Template, 190, 38, "ng-template", null, 10, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        i0.ɵɵadvance(15);
        i0.ɵɵproperty("ngIf", (ctx.postsPaginator == null ? null : ctx.postsPaginator.paginatedItems == null ? null : ctx.postsPaginator.paginatedItems.length) > 0);
    } }, dependencies: [i4.NgForOf, i4.NgIf, i5.NgSelectOption, i5.ɵNgSelectMultipleOption, i5.DefaultValueAccessor, i5.SelectControlValueAccessor, i5.NgControlStatus, i5.NgModel, i6.NgxSpinnerComponent, i4.DatePipe], styles: [".toplevel[_ngcontent-%COMP%] {\r\n    background: #fff;\r\n    padding: 20px;\r\n    margin-bottom: 15px;\r\n    margin-top: 10px;\r\n    border: 1px solid #ddd;\r\n    border-radius: 5px;\r\n}\r\n\r\n.table-font-size[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table-font-size[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    font-size: 13px;\r\n    \r\n}\r\n\r\n.vipDiv[_ngcontent-%COMP%] {\r\n    background: #f8f9fa;\r\n    padding: 15px;\r\n    border-radius: 3px;\r\n    min-height: 210px;\r\n}\r\n\r\n.orderStatus[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    vertical-align: middle;\r\n}\r\n\r\n.orderStatus[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n    font-size: 13px;\r\n    padding: 4px 10px;\r\n}\r\n\r\n.orderStatus[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\r\n    color: #c50f20;\r\n    font-size: 90%;\r\n    font-weight: 600;\r\n}\r\n\r\n.bottom-btn[_ngcontent-%COMP%] {\r\n    float: right;\r\n}\r\n\r\n.alert.alert-success[_ngcontent-%COMP%] {\r\n    padding: 5px 10px;\r\n}\r\n\r\n.alert[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\r\n    font-size: 25px;\r\n    vertical-align: middle;\r\n    margin-left: 5px;\r\n}\r\n\r\n.orderStatus[_ngcontent-%COMP%] {\r\n    .card-header {\r\n        border: 0;\r\n    }\r\n\r\n    .card-body {\r\n        padding: 0;\r\n        overflow: auto;\r\n    }\r\n}\r\n\r\nh3.head-title[_ngcontent-%COMP%] {\r\n    font-size: 22px;\r\n    margin: 20px 0;\r\n    font-weight: bold;\r\n}\r\n\r\n.icon[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    vertical-align: top;\r\n    color: #17a2b8;\r\n}\r\n\r\n.orderStatus[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    max-width: 25px;\r\n}\r\n\r\n.orderStatus[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n    background: #021422;\r\n    border-radius: 25px;\r\n    color: #fff;\r\n    font-size: 11px !important;\r\n    border: 1px solid #21333c;\r\n\r\n    i {\r\n        font-size: 18px;\r\n        vertical-align: middle;\r\n        padding-right: 5px;\r\n    }\r\n}\r\n\r\nbutton.btn.view-del-btn[_ngcontent-%COMP%] {\r\n    background: #63030c !important;\r\n}\r\n\r\n.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n    border: 0;\r\n}\r\n\r\n.toplevel[_ngcontent-%COMP%], .card[_ngcontent-%COMP%] {\r\n    padding: 0 20px 0;\r\n}\r\n\r\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n    padding: 8px 5px;\r\n    text-align: center;\r\n    line-height: 13px;\r\n    font-weight: 600;\r\n    font-size: 13px;\r\n    border-top: 0;\r\n}\r\n\r\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    font-size: 12px;\r\n    line-height: 15px;\r\n    padding: 10px 5px;\r\n}\r\n\r\ntd.icon[_ngcontent-%COMP%] {\r\n    padding: 0 !important;\r\n}\r\n\r\nbutton.btn.custom-btn[_ngcontent-%COMP%] {\r\n    min-width: 100px;\r\n}\r\n\r\n  .nav-tabs .nav-link {\r\n    font-size: 11px;\r\n    \r\n}\r\n\r\nbutton.btn.custom-btn-white[_ngcontent-%COMP%] {\r\n    min-width: 100px;\r\n    background: #ffffff;\r\n    border: 1px solid #c50f20;\r\n    color: #c50f20;\r\n    font-weight: 600;\r\n\r\n    &:hover {\r\n        background: #c50f20;\r\n        color: #ffffff;\r\n    }\r\n}\r\n\r\n.input-group-prepend[_ngcontent-%COMP%] + .invalid-feedback[_ngcontent-%COMP%] {\r\n    top: 35px;\r\n}\r\n\r\n.card-header[_ngcontent-%COMP%] {\r\n    padding: 10px 15px;\r\n    background: #63030c;\r\n    font-size: 12px;\r\n    color: #fff;\r\n    font-weight: 500;\r\n\r\n    span {\r\n        float: left;\r\n    }\r\n\r\n    span+span {\r\n        float: right;\r\n    }\r\n}\r\n\r\n.card-header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 16px;\r\n    margin-left: 3px;\r\n}\r\n\r\n.subcard-header[_ngcontent-%COMP%] {\r\n    padding: 8px 12px;\r\n    background: #63030c;\r\n    font-size: 10px;\r\n    color: #fff;\r\n    font-weight: 500;\r\n\r\n    span {\r\n        float: left;\r\n    }\r\n\r\n    span+span {\r\n        float: right;\r\n    }\r\n}\r\n\r\n.subcard-header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 16px;\r\n    margin-left: 3px;\r\n}\r\n\r\n.icofont-info-circle[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    vertical-align: middle;\r\n    margin-left: 3px;\r\n}\r\n\r\n.orderList[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\r\n    background: #ff000029;\r\n}\r\n\r\n.orderList[_ngcontent-%COMP%] {\r\n    border-collapse: collapse;\r\n    border: 1px solid #ddd;\r\n    margin: 5px 0;\r\n}\r\n\r\n.orderList[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    border: 1px solid #ddd;\r\n}\r\n\r\n.orderList[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n    background: #212529;\r\n    color: #fff;\r\n    vertical-align: middle;\r\n}\r\n\r\n.no-border[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    border: 0 !important;\r\n    text-align: right !important;\r\n    font-weight: 600;\r\n    font-size: 12px !important;\r\n}\r\n\r\nsmall.view-customer[_ngcontent-%COMP%] {\r\n    display: block;\r\n    text-decoration: underline;\r\n    cursor: pointer;\r\n}\r\n\r\nbutton.btn.view-ord-btn[_ngcontent-%COMP%] {\r\n    min-width: 112px;\r\n}\r\n\r\nbutton.btn.view-del-btn[_ngcontent-%COMP%] {\r\n    min-width: 125px;\r\n}\r\n\r\n.card-body.no_data_available[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    color: #bd2130;\r\n\r\n    img {\r\n        display: block;\r\n        text-align: center;\r\n        margin: 0 auto 5px;\r\n        max-width: 30px;\r\n    }\r\n}\r\n\r\n\r\nsmall.viewCart[_ngcontent-%COMP%] {\r\n    text-decoration: underline;\r\n    cursor: pointer;\r\n}\r\n\r\n.hr[_ngcontent-%COMP%] {\r\n    border: none;\r\n    border-top: 1.5px solid #d1d1d1;\r\n    margin: 16px 0;\r\n    height: 0;\r\n    width: 100%;\r\n}\r\n\r\nh1.heading-title[_ngcontent-%COMP%] {\r\n    margin: 20px 0 0;\r\n}\r\n\r\n.heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    padding: 10px 5px 10px;\r\n    font-size: 20px;\r\n}\r\n\r\n.row.topLevel[_ngcontent-%COMP%] {\r\n    background: #fff;\r\n    padding: 20px 0;\r\n    margin: 0;\r\n    border-radius: 5px;\r\n}\r\n\r\n.heading.store-domain[_ngcontent-%COMP%] {\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.store-domain[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    margin-right: 20px;\r\n}\r\n\r\n.store-domain[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    background: #ddd;\r\n    padding: 5px 20px;\r\n    font-size: 13px;\r\n    border-radius: 20px;\r\n    display: inline-block;\r\n    font-weight: bold;\r\n    margin-left: 5px;\r\n}\r\n\r\n.store_id[_ngcontent-%COMP%] {\r\n    background: #ddd;\r\n    padding: 5px 20px;\r\n    border-radius: 20px;\r\n    font-size: 13px;\r\n    font-weight: 700;\r\n    float: right;\r\n    margin-top: -40px;\r\n}\r\n\r\n.box[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    overflow: hidden;\r\n    box-shadow: 0 0 4px 0px #eee;\r\n    margin: 20px 0 5px;\r\n    border-radius: 4px;\r\n    padding: 10px;\r\n    background: #fff;\r\n}\r\n\r\n.main-content-area[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\r\n    width: 20%;\r\n    float: left;\r\n    padding: 0;\r\n}\r\n\r\n.fa-star[_ngcontent-%COMP%]:before {\r\n    content: \"\\f005\";\r\n    color: #ff9600;\r\n    margin-right: 5px;\r\n}\r\n\r\n.pro-box[_ngcontent-%COMP%] {\r\n    box-shadow: 0 0 4px 0 #e9ecef;\r\n    margin: 0 5px 10px;\r\n    overflow: hidden;\r\n    padding: 15px;\r\n    border-radius: 3px;\r\n    position: relative;\r\n    border: 1px solid #dee2e6;\r\n}\r\n\r\n.pro-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    height: 100px;\r\n    width: 100px;\r\n    margin: 30px auto 15px;\r\n    display: block;\r\n}\r\n\r\n.storeitem[_ngcontent-%COMP%]   .p-details[_ngcontent-%COMP%] {\r\n    margin-bottom: 42px;\r\n}\r\n\r\np.label-txt[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    padding: 10px;\r\n    font-size: 14px;\r\n    margin: 0;\r\n}\r\n\r\n.store-available-product[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\r\n    width: 25% !important;\r\n}\r\n\r\n.selected-productLine[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .store-available-product[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\r\n    font-size: 16px;\r\n    padding: 0 10px 5px;\r\n}\r\n\r\n.right-field-head[_ngcontent-%COMP%] {\r\n    float: right;\r\n    margin-top: 10px;\r\n}\r\n\r\n.right-field-head[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    padding: 0 10px;\r\n}\r\n\r\nspan.video[_ngcontent-%COMP%], span.doc[_ngcontent-%COMP%] {\r\n    padding: 8px 15px;\r\n    background: #dee2e6;\r\n    font-size: 12px;\r\n    border-radius: 20px;\r\n}\r\n\r\n.right-field-head[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n    font-size: 11px;\r\n    border-radius: 20px;\r\n}\r\n\r\n.bottom-btn[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n    line-height: 11px;\r\n}\r\n\r\n.box.prduct-gallery[_ngcontent-%COMP%] {\r\n    position: relative;\r\n}\r\n\r\n.sample-img[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    z-index: 1;\r\n    left: 15%;\r\n    top: 28%;\r\n    transform: rotate(-45deg);\r\n}\r\n\r\np.p-name[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    margin: 0;\r\n    font-size: 13px;\r\n    font-weight: 500;\r\n    vertical-align: middle;\r\n}\r\n\r\np.item-id[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    position: absolute;\r\n    top: 0;\r\n    background: #212529;\r\n    left: 0;\r\n    font-weight: 600;\r\n    color: #fff;\r\n    border-radius: 0 0 5px;\r\n    font-size: 11px;\r\n    padding: 3px 6px;\r\n}\r\n\r\nspan.price[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n    padding: 7px 10px 0;\r\n    float: left;\r\n    font-weight: 600;\r\n    line-height: 20px;\r\n}\r\n\r\n.item-id[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\r\n    font-weight: 600;\r\n}\r\n\r\n.instock[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n    text-align: center;\r\n    margin: 0 0 3px;\r\n    position: absolute;\r\n    top: 5%;\r\n    box-shadow: 0 0 30px 0 rgb(82 63 105 / 10%);\r\n    left: 70%;\r\n    background: rgb(224 152 152 / 24%);\r\n    width: 50px;\r\n    border: 1px solid rgb(0 0 0 / 10%);\r\n    height: 50px;\r\n    border-radius: 50%;\r\n\r\n    img {\r\n        width: 30px !important;\r\n        height: 30px !important;\r\n        margin: 9px auto;\r\n    }\r\n}\r\n\r\n.pro-box.storeitem.item-box[_ngcontent-%COMP%] {\r\n    border: 1px solid #dee2e6;\r\n    height: 300px;\r\n    padding-left: 20px;\r\n    padding-right: 20px;\r\n}\r\n\r\nh1.heading-title[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    text-transform: uppercase;\r\n    font-weight: 700;\r\n    color: #ff7900;\r\n    position: relative;\r\n    margin-bottom: 10px;\r\n    width: 100%;\r\n\r\n    span {\r\n        font-size: 10px;\r\n        text-transform: inherit;\r\n        background: #495057;\r\n        color: #fff;\r\n        padding: 10px 15px;\r\n        border-radius: 25px;\r\n    }\r\n}\r\n\r\nh1.heading-title[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    max-width: 65px;\r\n    margin-right: 5px;\r\n}\r\n\r\nh1.heading-title[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    font-weight: 400;\r\n    font-size: 13px;\r\n    position: absolute;\r\n    left: 80px;\r\n    bottom: 4px;\r\n    color: grey;\r\n}\r\n\r\n.offerDiv[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 5px;\r\n    right: 5px;\r\n    font-size: 10px;\r\n    background: #dc3545;\r\n    line-height: 10px;\r\n    font-weight: 700;\r\n    width: 35px;\r\n    height: 35px;\r\n    border-radius: 50%;\r\n    padding: 9px;\r\n    text-align: center;\r\n    color: #fff;\r\n}\r\n\r\n.offerDiv[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\r\n    display: block;\r\n}\r\n\r\nspan.price.strike-price[_ngcontent-%COMP%] {\r\n    color: #ccc;\r\n    text-decoration: line-through;\r\n}\r\n\r\n.row.text-level[_ngcontent-%COMP%] {\r\n    margin: 0 -10px 10px;\r\n}\r\n\r\n.store-add-remove[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    padding: 10px;\r\n    float: left;\r\n    width: 100%;\r\n}\r\n\r\n.row.product-slider-box[_ngcontent-%COMP%] {\r\n    border-bottom: 5px solid #ddd;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.carousel-inner[_ngcontent-%COMP%] {\r\n    height: 278px;\r\n}\r\n\r\n.carousel-item[_ngcontent-%COMP%] {\r\n    margin-right: 0;\r\n    border: 1px solid #f8f9fa;\r\n    background: #fff;\r\n}\r\n\r\n.product-slider-box[_ngcontent-%COMP%]   .domain-product[_ngcontent-%COMP%] {\r\n    max-width: 23%;\r\n}\r\n\r\n.product-slider-box[_ngcontent-%COMP%]   .sub-domain-product[_ngcontent-%COMP%] {\r\n    max-width: 77%;\r\n}\r\n\r\n.store-add-remove[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n    font-size: 11px;\r\n    text-align: center;\r\n    float: left;\r\n    transition: all .5s;\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n    min-width: 65px;\r\n}\r\n\r\n.store-add-remove[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] + .btn[_ngcontent-%COMP%] {\r\n    float: right;\r\n}\r\n\r\n.item-subitem-list[_ngcontent-%COMP%]   .pro-box[_ngcontent-%COMP%] {\r\n    width: 95%;\r\n    overflow: auto;\r\n    height: 280px;\r\n}\r\n\r\n.item-subitem-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    float: left;\r\n}\r\n\r\n.item-box[_ngcontent-%COMP%] {\r\n    max-width: 225px;\r\n    width: 100%;\r\n    float: left;\r\n}\r\n\r\n.sub-item-box[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    float: left;\r\n    max-width: 225px;\r\n}\r\n\r\n.sub-item-box[_ngcontent-%COMP%]   .add_to_cart[_ngcontent-%COMP%]   button.btn[_ngcontent-%COMP%] {\r\n    background: #000064;\r\n    height: 35px;\r\n    font-size: 13px;\r\n    line-height: 16px;\r\n    color: #fff;\r\n    border-radius: 25px;\r\n    margin: 10px 0 0;\r\n    width: 100%;\r\n    text-align: center;\r\n}\r\n\r\n.add_to_cart[_ngcontent-%COMP%] {\r\n    .remove-btn {\r\n        border-radius: 50%;\r\n        background: #05054ead !important;\r\n        color: #fff;\r\n        height: 35px;\r\n        padding: 0;\r\n    }\r\n\r\n    .btn+.btn {\r\n        width: 100%;\r\n        border: 0;\r\n        border-radius: 30px;\r\n        font-size: 15px;\r\n        line-height: normal;\r\n        font-weight: 600;\r\n    }\r\n}\r\n\r\n.middle-arrow[_ngcontent-%COMP%] {\r\n    float: left;\r\n    width: 30px;\r\n    height: 50px;\r\n    font-size: 40px;\r\n    margin-top: 10%;\r\n    color: #dee2e6;\r\n    text-align: center;\r\n}\r\n\r\n.price-details[_ngcontent-%COMP%] {\r\n    float: left;\r\n    width: 100%;\r\n    margin-bottom: 10px;\r\n    font-size: 15px;\r\n    line-height: normal;\r\n    font-weight: 600;\r\n\r\n    .unit-price {\r\n        float: left;\r\n        width: 42%;\r\n    }\r\n}\r\n\r\n.unit-price[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    display: block;\r\n    font-size: 12px;\r\n    font-weight: 400;\r\n}\r\n\r\n.whole-sale-price[_ngcontent-%COMP%] {\r\n    float: right;\r\n    width: 58%;\r\n    text-align: right;\r\n\r\n    span {\r\n        font-size: 12px;\r\n        display: block;\r\n        font-weight: 400;\r\n    }\r\n}\r\n\r\n.add_to_cart[_ngcontent-%COMP%] {\r\n    clear: both;\r\n}\r\n\r\n.subItem-field[_ngcontent-%COMP%] {\r\n    width: calc(100% - 280px);\r\n    float: left;\r\n}\r\n\r\n.item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n\r\n.pro-box.active[_ngcontent-%COMP%] {\r\n    border: 1px solid #63030c;\r\n}\r\n\r\n.p-details[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\r\n    font-size: 13px;\r\n    padding: 0 5px;\r\n    min-height: 25px;\r\n    height: 25px;\r\n    text-align: center;\r\n}\r\n\r\n.p-details[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n    margin-bottom: 0;\r\n    font-weight: 400;\r\n    line-height: normal;\r\n    padding-top: 2px;\r\n    padding-bottom: 2px;\r\n}\r\n\r\n.p-details[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\r\n    margin-bottom: 4px;\r\n}\r\n\r\n.sub-item-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    margin-top: 5px !important;\r\n}\r\n\r\n.p-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n    line-height: 14px;\r\n}\r\n\r\n.add-stock[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    display: inline-block !important;\r\n    width: 60px !important;\r\n    margin-left: 5px;\r\n    vertical-align: middle;\r\n}\r\n\r\n.min-alert-count[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    width: 35px;\r\n    margin-left: 5px;\r\n    display: inline-block;\r\n    margin-right: 4px;\r\n}\r\n\r\n.d-flex[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] + span[_ngcontent-%COMP%] {\r\n    margin-left: auto;\r\n    font-weight: 600;\r\n    width: 60px;\r\n\r\n    i {\r\n        font-size: 16px;\r\n        color: #bd2130;\r\n        display: inline-block;\r\n        position: relative;\r\n        top: 2px;\r\n        cursor: pointer;\r\n    }\r\n}\r\n\r\n.sub-item-box[_ngcontent-%COMP%]   .pro-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    height: 55px;\r\n    width: 55px;\r\n    margin: 18px auto 8px;\r\n}\r\n\r\n.links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    display: block;\r\n    color: #17a2b8 !important;\r\n    text-decoration: underline !important;\r\n    font-size: 12px;\r\n    cursor: pointer;\r\n}\r\n\r\n.modal-header[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    margin: 5px 0;\r\n    color: #bd2130;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.field[_ngcontent-%COMP%] {\r\n    margin-bottom: 10px;\r\n\r\n    select {\r\n        border: 1px solid #ddd;\r\n        border-radius: 3px;\r\n        height: 26px;\r\n        font-size: 12px;\r\n        margin-left: 10px;\r\n        margin-top: -4px;\r\n        width: 60px;\r\n    }\r\n}\r\n\r\n.topcontent[_ngcontent-%COMP%] {\r\n    font-size: larger;\r\n}\r\n\r\n.actdct_icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    max-width: 45px;\r\n}\r\n\r\n.action_icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    color: #bd2130;\r\n    margin: 0 10px 0 10px;\r\n}\r\n\r\n.btn-space[_ngcontent-%COMP%] {\r\n    margin-right: 10px;\r\n}\r\n\r\n.comm-desk-title[_ngcontent-%COMP%] {\r\n    font-size: 1.3rem;\r\n    font-weight: 600;\r\n    color: #222;\r\n    letter-spacing: 0.5px;\r\n}\r\n\r\n.comm-desk-title[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\r\n    font-size: 1.3rem;\r\n    font-weight: 600;\r\n    color: #ff7900;\r\n}\r\n\r\n.smallfont[_ngcontent-%COMP%] {\r\n    font-size: 0.8rem;\r\n}\r\n\r\n.styled-tabs[_ngcontent-%COMP%] {\r\n    font-family: Arial, sans-serif;\r\n}\r\n\r\n.styled-tabs[_ngcontent-%COMP%]   tab[_ngcontent-%COMP%] {\r\n    padding: 20px;\r\n    background: #ffffff;\r\n    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);\r\n}\r\n\r\n.profile[_ngcontent-%COMP%] {\r\n    height: 80px;             \r\n    object-fit: cover;         \r\n    border-radius: 50%;        \r\n    border: 2px solid #eee;\r\n    padding: 3px;\r\n    background: #fafafa;\r\n    transition: transform 0.2s ease-in-out;\r\n}\r\n\r\n.styled-tabs[_ngcontent-%COMP%]   tab[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n    margin-top: 10px;\r\n    font-size: 1.2rem;\r\n    font-weight: bold;\r\n    color: #333;\r\n}\r\n\r\n.styled-tabs[_ngcontent-%COMP%]   tab[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    margin: 4px 0;\r\n    font-size: 0.95rem;\r\n    color: #555;\r\n}\r\n\r\n.styled-tabs[_ngcontent-%COMP%]   tab[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    background: #007bff;\r\n    color: white;\r\n    border: none;\r\n    padding: 6px 12px;\r\n    border-radius: 4px;\r\n    cursor: pointer;\r\n    font-size: 0.9rem;\r\n    transition: background 0.2s ease;\r\n}\r\n\r\n.styled-tabs[_ngcontent-%COMP%]   tab[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\r\n    background: #0056b3;\r\n}\r\n\r\n.styled-tabs[_ngcontent-%COMP%]   tab[_ngcontent-%COMP%]   div[style*=\"display:flex\"][_ngcontent-%COMP%] {\r\n    flex-wrap: wrap;\r\n}\r\n\r\n.styled-tabs[_ngcontent-%COMP%]   tab[_ngcontent-%COMP%]   div[style*=\"gap\"][_ngcontent-%COMP%] > div[_ngcontent-%COMP%] {\r\n    background: #f9f9f9;\r\n    padding: 10px;\r\n    border-radius: 6px;\r\n    text-align: center;\r\n    flex: 1;\r\n    min-width: 120px;\r\n}\r\n\r\n.profile-row[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 20px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.profile-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 80px;\r\n    height: 80px;\r\n    border-radius: 50%;\r\n    border: 2px solid #eee;\r\n    object-fit: cover;\r\n}\r\n\r\n.profile-image-big[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 100px;\r\n    height: 100px;\r\n    border-radius: 50%;\r\n    border: 2px solid #eee;\r\n    object-fit: cover;\r\n}\r\n\r\n.profile-details[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n}\r\n\r\n.profile-name[_ngcontent-%COMP%] {\r\n    font-size: 1.25rem;\r\n    font-weight: bold;\r\n    margin: 0;\r\n    color: #222;\r\n}\r\n\r\n.profile-title[_ngcontent-%COMP%] {\r\n    font-size: 1rem;\r\n    font-weight: 500;\r\n    color: #666;\r\n    margin: 3px 0;\r\n}\r\n\r\n.profile-verified[_ngcontent-%COMP%] {\r\n    font-size: 0.95rem;\r\n    color: #28a745;\r\n    font-weight: 500;\r\n    margin: 0;\r\n}\r\n\r\n.profilesection[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column; \r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 2px;\r\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PostManagementComponent, [{
        type: Component,
        args: [{ selector: 'app-post-management', template: "<div class=\"content\">\n    <h1 class=\"heading-title\">Post Management ( Digital Marketing On PLatform )</h1>\n    <div class=\"card\">\n        <div class=\"card-body pl-0 pr-0\">\n            <div>\n                <div class=\"row topcontent\">\n\n                    <div class=\"col-md-6 mb-3\">\n                        <span><strong>Storecode: </strong>3254386586</span>\n                    </div>\n\n                    <div class=\"col-md-6 mb-3\">\n                        <button (click)=\"openModal(addPost)\" type=\"button\" class=\"btn custom-btn float-right\">Add\n                            Post</button>\n                    </div>\n\n                </div>\n\n                <div class=\"card exiting-office-table orderStatus p-0 mt-2\"\n                    *ngIf=\"postsPaginator?.paginatedItems?.length > 0\">\n\n                    <!-- Card Header -->\n                    <div class=\"card-header\">\n                        <div style=\"display: flex; flex-direction: column;\">\n                            <span>Post Management</span>\n                            <span class=\"small\">\n                                <strong>Total Posts:</strong> {{ postsPaginator.totalItems }}\n                            </span>\n                        </div>\n                    </div>\n\n                    <!-- Card Body -->\n                    <div class=\"card-body pa-0\">\n                        <div class=\"row m-0\">\n                            <div class=\"col-md-12 py-2\">\n                                <table class=\"table\">\n                                    <thead>\n                                        <tr>\n                                            <th class=\"font\">S#</th>\n                                            <th class=\"font\">Post ID</th>\n                                            <th class=\"font\">Active</th>\n                                            <th class=\"font\">Category</th>\n                                            <th class=\"font\">Domain ID</th>\n                                            <th class=\"font\">Details</th>\n                                            <th class=\"font\">Created Date</th>\n                                            <th class=\"font\">Approved</th>\n                                            <th class=\"font\">Rejected</th>\n                                            <th class=\"font\">Action</th>\n                                        </tr>\n                                    </thead>\n                                    <tbody>\n                                        <tr *ngFor=\"let post of postsPaginator.paginatedItems; let i = index\">\n                                            <td class=\"font\">\n                                                {{ (postsPaginator.currentPage - 1) *\n                                                postsPaginator.itemsPerPage + i + 1 }}\n                                            </td>\n                                            <td class=\"font\">{{ post.postId }}</td>\n\n                                            <!-- Active -->\n                                            <td class=\"actdct_icon\">\n                                                <span *ngIf=\"post.active; else inactiveIcon\">\n                                                    <img src=\"assets/images/active_icon.png\" />\n                                                </span>\n                                                <ng-template #inactiveIcon>\n                                                    <img src=\"assets/images/deactive_icon.png\" />\n                                                </ng-template>\n                                            </td>\n\n                                            <td class=\"font\">{{ post.category }}</td>\n                                            <td class=\"font\">{{ post.domainId }}</td>\n\n                                            <!-- Details -->\n                                            <td>\n                                                <button class=\"btn btn-sm btn-outline-info\">Details</button>\n                                            </td>\n\n                                            <td class=\"font\">{{ post.createdDate | date: 'short' }}</td>\n\n                                            <!-- Approved -->\n                                            <td class=\"font\">\n                                                <span *ngIf=\"post.approved\" class=\"text-success\">Yes</span>\n                                                <span *ngIf=\"!post.approved\" class=\"text-danger\">No</span>\n                                            </td>\n\n                                            <!-- Rejected -->\n                                            <td class=\"font\">\n                                                <span *ngIf=\"post.rejected\" class=\"text-danger\">Yes</span>\n                                                <span *ngIf=\"!post.rejected\" class=\"text-success\">No</span>\n                                            </td>\n\n                                            <!-- Actions -->\n                                            <td class=\"action_icon\">\n                                                <span class=\"delete-icon\" title=\"Edit\">\n                                                    <i class=\"fa fa-edit\"></i>\n                                                </span>\n                                                <span class=\"delete-icon\" title=\"Turbo\">\n                                                    <i class=\"fa fa-bolt\"></i>\n                                                </span>\n                                                <span class=\"delete-icon\" title=\"Delete\">\n                                                    <i class=\"fa fa-trash\"></i>\n                                                </span>\n                                            </td>\n                                        </tr>\n                                    </tbody>\n                                </table>\n\n                                <!-- Pagination -->\n                                <nav class=\"pull-right mr-2\">\n                                    <ul class=\"pagination\">\n                                        <!-- Prev -->\n                                        <li class=\"page-item\" [class.disabled]=\"postsPaginator.currentPage === 1\">\n                                            <a class=\"page-link\" style=\"cursor: pointer\"\n                                                (click)=\"postsPaginator.changePage(postsPaginator.currentPage - 1)\">Prev</a>\n                                        </li>\n\n                                        <!-- First Page -->\n                                        <li class=\"page-item\" [class.active]=\"postsPaginator.currentPage === 1\">\n                                            <a class=\"page-link\" style=\"cursor: pointer\"\n                                                (click)=\"postsPaginator.changePage(1)\">1</a>\n                                        </li>\n\n                                        <!-- Left Ellipsis -->\n                                        <li class=\"page-item\" *ngIf=\"postsPaginator.pagesToShow[0] > 2\">\n                                            <span class=\"page-link\">...</span>\n                                        </li>\n\n                                        <!-- Pages in Between -->\n                                        <ng-container *ngFor=\"let page of postsPaginator.pagesToShow\">\n                                            <li class=\"page-item\"\n                                                *ngIf=\"page !== 1 && page !== postsPaginator.totalPages\"\n                                                [class.active]=\"page === postsPaginator.currentPage\">\n                                                <a class=\"page-link\" style=\"cursor: pointer\"\n                                                    (click)=\"postsPaginator.changePage(page)\">{{ page }}</a>\n                                            </li>\n                                        </ng-container>\n\n                                        <!-- Right Ellipsis -->\n                                        <li class=\"page-item\"\n                                            *ngIf=\"postsPaginator.pagesToShow[postsPaginator.pagesToShow.length - 1] < postsPaginator.totalPages - 1\">\n                                            <span class=\"page-link\">...</span>\n                                        </li>\n\n                                        <!-- Last Page -->\n                                        <li class=\"page-item\"\n                                            [class.active]=\"postsPaginator.currentPage === postsPaginator.totalPages\">\n                                            <a class=\"page-link\" style=\"cursor: pointer\"\n                                                (click)=\"postsPaginator.changePage(postsPaginator.totalPages)\">\n                                                {{ postsPaginator.totalPages }}\n                                            </a>\n                                        </li>\n\n                                        <!-- Next -->\n                                        <li class=\"page-item\"\n                                            [class.disabled]=\"postsPaginator.currentPage === postsPaginator.totalPages\">\n                                            <a class=\"page-link\" style=\"cursor: pointer\"\n                                                (click)=\"postsPaginator.changePage(postsPaginator.currentPage + 1)\">Next</a>\n                                        </li>\n                                    </ul>\n                                </nav>\n\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n            <br><br>\n            <ngx-spinner template=\"<img src='assets/images/icons/please_wait.gif' />\">\n            </ngx-spinner>\n        </div>\n    </div>\n</div>\n\n<ng-template #addPostold>\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title pull-left\">Add Post</h4>\n        <button type=\"button\" class=\"btn-close close pull-right\" aria-label=\"Close\" (click)=\"modalRef?.hide()\">\n            <span aria-hidden=\"true\" class=\"visually-hidden\">&times;</span>\n        </button>\n    </div>\n\n    <div class=\"modal-body\">\n        <!-- Post Category -->\n        <div class=\"row mb-2\">\n            <div class=\"col-md-6\">\n                <label>Post Category</label>\n                <select class=\"form-control\" [(ngModel)]=\"newPost.category\">\n                    <option value=\"\">Select Category</option>\n                    <option *ngFor=\"let cat of categoryList\" [value]=\"cat\">{{ cat }}</option>\n                </select>\n            </div>\n\n            <!-- Post Listing Title -->\n            <div class=\"col-md-6\">\n                <label>Post Listing Title</label>\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"newPost.title\"\n                    placeholder=\"Enter Post Listing Title\" />\n            </div>\n        </div>\n\n        <!-- Post Template -->\n        <div class=\"row mb-2\">\n            <div class=\"col-md-6\">\n                <label>Post Template</label>\n                <select class=\"form-control\" [(ngModel)]=\"newPost.template\">\n                    <option value=\"Text\">Text</option>\n                    <option value=\"Text & Image\">Text & Image</option>\n                    <option value=\"Text & Video\">Text & Video</option>\n                </select>\n            </div>\n\n            <!-- Created Date -->\n            <div class=\"col-md-6\">\n                <label>Created Date</label>\n                <input type=\"date\" class=\"form-control\" [(ngModel)]=\"newPost.createdDate\" />\n            </div>\n        </div>\n\n        <!-- Post Detail -->\n        <div class=\"row mb-2\">\n            <div class=\"col-md-12\">\n                <label>Post Detail</label>\n                <textarea class=\"form-control\" rows=\"4\" [(ngModel)]=\"newPost.detail\"\n                    placeholder=\"Enter post details\"></textarea>\n            </div>\n        </div>\n\n        <!-- Attach Image/Video -->\n        <div class=\"row mb-3\">\n            <div class=\"col-md-12\">\n                <label>Attach Image/Video</label>\n                <input type=\"file\" class=\"form-control-file border p-2 rounded\" (change)=\"onFileChange($event)\">\n                <div *ngIf=\"filePreviewUrl\" class=\"mt-2 border p-2 rounded\">\n                    <img *ngIf=\"isImageFile\" [src]=\"filePreviewUrl\" alt=\"Preview\"\n                        style=\"max-width: 150px; max-height: 150px;\">\n                    <video *ngIf=\"!isImageFile\" [src]=\"filePreviewUrl\" controls\n                        style=\"max-width: 150px; max-height: 150px;\"></video>\n                </div>\n            </div>\n        </div>\n\n        <!-- Action Buttons -->\n        <div class=\"row\">\n            <div class=\"col-md-12 text-right\">\n                <button class=\"btn custom-btn btn-space\">Validate</button>\n                <button class=\"btn custom-btn\" (click)=\"saveAndPublish()\">Save & Publish</button>\n            </div>\n        </div>\n    </div>\n</ng-template>\n\n\n<ng-template #addPost>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\">Add Post</h4>\n    <button type=\"button\" class=\"btn-close close pull-right\" aria-label=\"Close\" (click)=\"modalRef?.hide()\">\n      <span aria-hidden=\"true\" class=\"visually-hidden\">&times;</span>\n    </button>\n  </div>\n\n  <div class=\"modal-body\">\n    <!-- Tags Section -->\n    <div class=\"row mb-3\">\n\n      <!-- Timezone -->\n      <div class=\"col-md-6 mb-2\">\n        <label>Timezone</label>\n        <select class=\"form-control\" [(ngModel)]=\"newPost.timezone\">\n          <option value=\"\">Select</option>\n          <option value=\"IST\">IST</option>\n        </select>\n      </div>\n\n      <!-- Industry -->\n      <div class=\"col-md-6 mb-2\">\n        <label>Industry</label>\n        <select class=\"form-control\" [(ngModel)]=\"newPost.industry\">\n          <option value=\"\">Select</option>\n          <option value=\"1\">Wine & Liquor</option>\n          <option value=\"2\">Hotel Restaurant & Catering</option>\n          <option value=\"3\">FMCG/Kirana & Grocery</option>\n          <option value=\"4\">Fashion /Beauty Products /Footwear</option>\n          <option value=\"5\">Electronics /Consumer Appliances</option>\n          <option value=\"6\">Furnitures (Office /Hospital/Home)</option>\n          <option value=\"7\">Pharma & Medicos</option>\n          <option value=\"8\">Home Decors & Office Furnishings</option>\n          <option value=\"9\">Medicine (Human/Pets)</option>\n          <option value=\"10\">Facility Management Services</option>\n          <option value=\"11\">Farming / Agro And Agro Care</option>\n          <option value=\"12\">Automobiles & Vehicles</option>\n          <option value=\"13\">Health Care /Clinics /Hospitals</option>\n          <option value=\"14\">Office /Home Infrastructure Services</option>\n          <option value=\"15\">Automobile Spare Parts</option>\n          <option value=\"16\">Kitchen & Dining</option>\n          <option value=\"17\">Electrical & Lighting</option>\n          <option value=\"18\">Entertainment & Mobility</option>\n          <option value=\"19\">Sanitary Paints /Cements and Infra Furnishings</option>\n          <option value=\"20\">Logistic and transportation</option>\n          <option value=\"21\">Banking /Finance and Accounting</option>\n          <option value=\"22\">Business Consulting & Liasoning</option>\n          <option value=\"23\">Travel & Tourism</option>\n          <option value=\"24\">Hardware /Software Providers</option>\n          <option value=\"25\">Real Estate and development</option>\n          <option value=\"26\">Media & Advertisement</option>\n          <option value=\"27\">Event Management</option>\n          <option value=\"28\">Corporate Services /professional services</option>\n          <option value=\"29\">Skill Development /Trainings & recruitments</option>\n        </select>\n      </div>\n\n      <!-- Platform -->\n      <div class=\"col-md-6 mb-2\">\n        <label>Platform</label>\n        <select class=\"form-control\" [(ngModel)]=\"newPost.platform\">\n          <option value=\"\">Select</option>\n          <option value=\"1\">Posts</option>\n        </select>\n      </div>\n\n      <!-- Audience -->\n      <div class=\"col-md-6 mb-2\">\n        <label>Audience</label>\n        <select class=\"form-control\" [(ngModel)]=\"newPost.audience\">\n          <option value=\"\">Select</option>\n          <option value=\"1\">Seller</option>\n          <option value=\"2\">Buyer</option>\n        </select>\n      </div>\n\n      <!-- Category -->\n      <div class=\"col-md-6 mb-2\">\n        <label>Category</label>\n        <select class=\"form-control\" [(ngModel)]=\"newPost.category\">\n          <option value=\"\">Select</option>\n          <option value=\"0\">Product Based</option>\n          <option value=\"1\">Service Based</option>\n        </select>\n      </div>\n\n      <!-- Sub-category -->\n      <div class=\"col-md-6 mb-2\">\n        <label>Sub-category</label>\n        <select class=\"form-control\" [(ngModel)]=\"newPost.subcategory\">\n          <option value=\"\">Select</option>\n          <!-- Product Based -->\n          <option *ngIf=\"newPost.category === '0'\" value=\"1\">Manufacturer/Producer</option>\n          <option *ngIf=\"newPost.category === '0'\" value=\"2\">Distributor/CNF</option>\n          <option *ngIf=\"newPost.category === '0'\" value=\"3\">Retailer/Wholeseller</option>\n          <option *ngIf=\"newPost.category === '0'\" value=\"4\">Pharma & Medicos</option>\n\n          <!-- Service Based -->\n          <option *ngIf=\"newPost.category === '1'\" value=\"5\">HoReCa (Hotel /Restaurant/Caterer)</option>\n          <option *ngIf=\"newPost.category === '1'\" value=\"7\">Exporter/Importer</option>\n          <option *ngIf=\"newPost.category === '1'\" value=\"8\">School/University</option>\n          <option *ngIf=\"newPost.category === '1'\" value=\"9\">Health Care /Hospitals and Medicos</option>\n          <option *ngIf=\"newPost.category === '1'\" value=\"10\">Fitness & Health Organization</option>\n          <option *ngIf=\"newPost.category === '1'\" value=\"11\">Dropship Intermediatory</option>\n          <option *ngIf=\"newPost.category === '1'\" value=\"12\">Productivity Tool provider</option>\n          <option *ngIf=\"newPost.category === '1'\" value=\"13\">Contact Centres</option>\n          <option *ngIf=\"newPost.category === '1'\" value=\"14\">Logistic & 3PL Providers</option>\n          <option *ngIf=\"newPost.category === '1'\" value=\"15\">Automobile Service Provider Org</option>\n          <option *ngIf=\"newPost.category === '1'\" value=\"16\">Recruitment And Skill Development Org</option>\n          <option *ngIf=\"newPost.category === '1'\" value=\"17\">Travel & Tour Operators</option>\n          <option *ngIf=\"newPost.category === '1'\" value=\"18\">Facility Management Service Provider</option>\n          <option *ngIf=\"newPost.category === '1'\" value=\"19\">Real Estate Developers and Services Org</option>\n          <option *ngIf=\"newPost.category === '1'\" value=\"20\">Business Consulting Organization</option>\n          <option *ngIf=\"newPost.category === '1'\" value=\"21\">CA & Auditing Organization</option>\n          <option *ngIf=\"newPost.category === '1'\" value=\"22\">Advertisement & Media Firm</option>\n          <option *ngIf=\"newPost.category === '1'\" value=\"23\">Software Development Organization</option>\n          <option *ngIf=\"newPost.category === '1'\" value=\"24\">Event Management Organization</option>\n          <option *ngIf=\"newPost.category === '1'\" value=\"25\">Banking & Financial Organization</option>\n          <option *ngIf=\"newPost.category === '1'\" value=\"26\">NGO/Trust</option>\n          <option *ngIf=\"newPost.category === '1'\" value=\"27\">Other Corporate Services</option>\n        </select>\n      </div>\n\n      <!-- Post Category -->\n      <div class=\"col-md-6 mb-2\">\n        <label>Post Category</label>\n        <select class=\"form-control\" [(ngModel)]=\"newPost.postCategory\">\n          <option value=\"\">Select</option>\n          <option value=\"1\">Promotional</option>\n          <option value=\"2\">Distribution Network</option>\n          <option value=\"3\">HR & Talent</option>\n          <option value=\"4\">Infrastructure</option>\n          <option value=\"5\">Technology & Support</option>\n          <option value=\"6\">Events & Sponsors</option>\n          <option value=\"7\">Services</option>\n          <option value=\"8\">General</option>\n          <option value=\"9\">Franchisee & Collaborators</option>\n        </select>\n      </div>\n    </div>\n\n    <!-- Post Details Section -->\n    <div class=\"row mb-2\">\n      <div class=\"col-md-6\">\n        <label>Post Listing Title</label>\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"newPost.title\" placeholder=\"Enter Post Listing Title\" />\n      </div>\n      <div class=\"col-md-6\">\n        <label>Post Template</label>\n        <select class=\"form-control\" [(ngModel)]=\"newPost.template\">\n          <option value=\"\">Select</option>\n          <option value=\"Text & Image\">Text + Image</option>\n          <option value=\"Text & Video\">Text + Video</option>\n        </select>\n      </div>\n    </div>\n\n    <!-- Post Detail -->\n    <div class=\"row mb-2\">\n      <div class=\"col-md-12\">\n        <label>Post Detail</label>\n        <textarea class=\"form-control\" rows=\"4\" [(ngModel)]=\"newPost.detail\" placeholder=\"Enter post details\"></textarea>\n      </div>\n    </div>\n\n    <!-- File Upload -->\n    <!-- Image Upload -->\n    <div class=\"row mb-3\" *ngIf=\"newPost.template === 'Text & Image'\">\n        <div class=\"col-md-12\">\n            <label>Upload Image</label>\n            <input type=\"file\" accept=\"image/*\" class=\"form-control-file border p-2 rounded\" (change)=\"onFileSelect($event, 'image')\" style=\"margin-top: 8px;\">\n            <div *ngIf=\"selectedImageUrl\" class=\"mt-2 border p-2 rounded text-center\">\n                <img [src]=\"selectedImageUrl\" alt=\"Preview\" style=\"max-width:100%; max-height:200px;\">\n            </div>\n        </div>\n    </div>\n\n    <!-- Video Upload -->\n    <div class=\"row mb-3\" *ngIf=\"newPost.template === 'Text & Video'\">\n        <div class=\"col-md-12\">\n            <label>Upload Video</label>\n            <input type=\"file\" accept=\"video/*\" class=\"form-control-file border p-2 rounded\" (change)=\"onFileSelect($event, 'video')\" style=\"margin-top: 8px;\">\n            <div *ngIf=\"selectedVideoUrl\" class=\"mt-2 border p-2 rounded text-center\">\n                <video [src]=\"selectedVideoUrl\" controls style=\"max-width:100%; max-height:200px;\"></video>\n            </div>\n        </div>\n    </div>\n\n    <!-- Action Buttons -->\n    <div class=\"row\">\n      <div class=\"col-md-12 text-right\">\n        <button class=\"btn custom-btn\" (click)=\"saveAndPublish()\">Save & Publish</button>\n      </div>\n    </div>\n  </div>\n</ng-template>\n", styles: [".toplevel {\r\n    background: #fff;\r\n    padding: 20px;\r\n    margin-bottom: 15px;\r\n    margin-top: 10px;\r\n    border: 1px solid #ddd;\r\n    border-radius: 5px;\r\n}\r\n\r\n.table-font-size th,\r\n.table-font-size td {\r\n    font-size: 13px;\r\n    /* Change to your desired size */\r\n}\r\n\r\n.vipDiv {\r\n    background: #f8f9fa;\r\n    padding: 15px;\r\n    border-radius: 3px;\r\n    min-height: 210px;\r\n}\r\n\r\n.orderStatus td {\r\n    vertical-align: middle;\r\n}\r\n\r\n.orderStatus td .btn {\r\n    font-size: 13px;\r\n    padding: 4px 10px;\r\n}\r\n\r\n.orderStatus small {\r\n    color: #c50f20;\r\n    font-size: 90%;\r\n    font-weight: 600;\r\n}\r\n\r\n.bottom-btn {\r\n    float: right;\r\n}\r\n\r\n.alert.alert-success {\r\n    padding: 5px 10px;\r\n}\r\n\r\n.alert .fa {\r\n    font-size: 25px;\r\n    vertical-align: middle;\r\n    margin-left: 5px;\r\n}\r\n\r\n.orderStatus {\r\n    .card-header {\r\n        border: 0;\r\n    }\r\n\r\n    .card-body {\r\n        padding: 0;\r\n        overflow: auto;\r\n    }\r\n}\r\n\r\nh3.head-title {\r\n    font-size: 22px;\r\n    margin: 20px 0;\r\n    font-weight: bold;\r\n}\r\n\r\n.icon .fa {\r\n    font-size: 20px;\r\n    vertical-align: top;\r\n    color: #17a2b8;\r\n}\r\n\r\n.orderStatus .icon img {\r\n    max-width: 25px;\r\n}\r\n\r\n.orderStatus .btn {\r\n    background: #021422;\r\n    border-radius: 25px;\r\n    color: #fff;\r\n    font-size: 11px !important;\r\n    border: 1px solid #21333c;\r\n\r\n    i {\r\n        font-size: 18px;\r\n        vertical-align: middle;\r\n        padding-right: 5px;\r\n    }\r\n}\r\n\r\nbutton.btn.view-del-btn {\r\n    background: #63030c !important;\r\n}\r\n\r\n.table thead th {\r\n    border: 0;\r\n}\r\n\r\n.toplevel,\r\n.card {\r\n    padding: 0 20px 0;\r\n}\r\n\r\n.table th {\r\n    padding: 8px 5px;\r\n    text-align: center;\r\n    line-height: 13px;\r\n    font-weight: 600;\r\n    font-size: 13px;\r\n    border-top: 0;\r\n}\r\n\r\n.table td {\r\n    text-align: center;\r\n    font-size: 12px;\r\n    line-height: 15px;\r\n    padding: 10px 5px;\r\n}\r\n\r\ntd.icon {\r\n    padding: 0 !important;\r\n}\r\n\r\nbutton.btn.custom-btn {\r\n    min-width: 100px;\r\n}\r\n\r\n::ng-deep .nav-tabs .nav-link {\r\n    font-size: 11px;\r\n    /* Adjust as needed */\r\n}\r\n\r\nbutton.btn.custom-btn-white {\r\n    min-width: 100px;\r\n    background: #ffffff;\r\n    border: 1px solid #c50f20;\r\n    color: #c50f20;\r\n    font-weight: 600;\r\n\r\n    &:hover {\r\n        background: #c50f20;\r\n        color: #ffffff;\r\n    }\r\n}\r\n\r\n.input-group-prepend+.invalid-feedback {\r\n    top: 35px;\r\n}\r\n\r\n.card-header {\r\n    padding: 10px 15px;\r\n    background: #63030c;\r\n    font-size: 12px;\r\n    color: #fff;\r\n    font-weight: 500;\r\n\r\n    span {\r\n        float: left;\r\n    }\r\n\r\n    span+span {\r\n        float: right;\r\n    }\r\n}\r\n\r\n.card-header img {\r\n    width: 16px;\r\n    margin-left: 3px;\r\n}\r\n\r\n.subcard-header {\r\n    padding: 8px 12px;\r\n    background: #63030c;\r\n    font-size: 10px;\r\n    color: #fff;\r\n    font-weight: 500;\r\n\r\n    span {\r\n        float: left;\r\n    }\r\n\r\n    span+span {\r\n        float: right;\r\n    }\r\n}\r\n\r\n.subcard-header img {\r\n    width: 16px;\r\n    margin-left: 3px;\r\n}\r\n\r\n.icofont-info-circle {\r\n    font-size: 20px;\r\n    vertical-align: middle;\r\n    margin-left: 3px;\r\n}\r\n\r\n.orderList thead tr {\r\n    background: #ff000029;\r\n}\r\n\r\n.orderList {\r\n    border-collapse: collapse;\r\n    border: 1px solid #ddd;\r\n    margin: 5px 0;\r\n}\r\n\r\n.orderList td {\r\n    border: 1px solid #ddd;\r\n}\r\n\r\n.orderList tr th {\r\n    background: #212529;\r\n    color: #fff;\r\n    vertical-align: middle;\r\n}\r\n\r\n.no-border td {\r\n    border: 0 !important;\r\n    text-align: right !important;\r\n    font-weight: 600;\r\n    font-size: 12px !important;\r\n}\r\n\r\nsmall.view-customer {\r\n    display: block;\r\n    text-decoration: underline;\r\n    cursor: pointer;\r\n}\r\n\r\nbutton.btn.view-ord-btn {\r\n    min-width: 112px;\r\n}\r\n\r\nbutton.btn.view-del-btn {\r\n    min-width: 125px;\r\n}\r\n\r\n.card-body.no_data_available {\r\n    text-align: center;\r\n    color: #bd2130;\r\n\r\n    img {\r\n        display: block;\r\n        text-align: center;\r\n        margin: 0 auto 5px;\r\n        max-width: 30px;\r\n    }\r\n}\r\n\r\n\r\nsmall.viewCart {\r\n    text-decoration: underline;\r\n    cursor: pointer;\r\n}\r\n\r\n.hr {\r\n    border: none;\r\n    border-top: 1.5px solid #d1d1d1;\r\n    margin: 16px 0;\r\n    height: 0;\r\n    width: 100%;\r\n}\r\n\r\nh1.heading-title {\r\n    margin: 20px 0 0;\r\n}\r\n\r\n.heading h2 {\r\n    padding: 10px 5px 10px;\r\n    font-size: 20px;\r\n}\r\n\r\n.row.topLevel {\r\n    background: #fff;\r\n    padding: 20px 0;\r\n    margin: 0;\r\n    border-radius: 5px;\r\n}\r\n\r\n.heading.store-domain {\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.store-domain div {\r\n    display: inline-block;\r\n    margin-right: 20px;\r\n}\r\n\r\n.store-domain span {\r\n    background: #ddd;\r\n    padding: 5px 20px;\r\n    font-size: 13px;\r\n    border-radius: 20px;\r\n    display: inline-block;\r\n    font-weight: bold;\r\n    margin-left: 5px;\r\n}\r\n\r\n.store_id {\r\n    background: #ddd;\r\n    padding: 5px 20px;\r\n    border-radius: 20px;\r\n    font-size: 13px;\r\n    font-weight: 700;\r\n    float: right;\r\n    margin-top: -40px;\r\n}\r\n\r\n.box {\r\n    width: 100%;\r\n    overflow: hidden;\r\n    box-shadow: 0 0 4px 0px #eee;\r\n    margin: 20px 0 5px;\r\n    border-radius: 4px;\r\n    padding: 10px;\r\n    background: #fff;\r\n}\r\n\r\n.main-content-area .box .col {\r\n    width: 20%;\r\n    float: left;\r\n    padding: 0;\r\n}\r\n\r\n.fa-star:before {\r\n    content: \"\\f005\";\r\n    color: #ff9600;\r\n    margin-right: 5px;\r\n}\r\n\r\n.pro-box {\r\n    box-shadow: 0 0 4px 0 #e9ecef;\r\n    margin: 0 5px 10px;\r\n    overflow: hidden;\r\n    padding: 15px;\r\n    border-radius: 3px;\r\n    position: relative;\r\n    border: 1px solid #dee2e6;\r\n}\r\n\r\n.pro-box img {\r\n    height: 100px;\r\n    width: 100px;\r\n    margin: 30px auto 15px;\r\n    display: block;\r\n}\r\n\r\n.storeitem .p-details {\r\n    margin-bottom: 42px;\r\n}\r\n\r\np.label-txt {\r\n    text-align: center;\r\n    padding: 10px;\r\n    font-size: 14px;\r\n    margin: 0;\r\n}\r\n\r\n.store-available-product .col {\r\n    width: 25% !important;\r\n}\r\n\r\n.selected-productLine h5,\r\n.store-available-product h5 {\r\n    font-size: 16px;\r\n    padding: 0 10px 5px;\r\n}\r\n\r\n.right-field-head {\r\n    float: right;\r\n    margin-top: 10px;\r\n}\r\n\r\n.right-field-head li {\r\n    display: inline-block;\r\n    padding: 0 10px;\r\n}\r\n\r\nspan.video,\r\nspan.doc {\r\n    padding: 8px 15px;\r\n    background: #dee2e6;\r\n    font-size: 12px;\r\n    border-radius: 20px;\r\n}\r\n\r\n.right-field-head .btn {\r\n    font-size: 11px;\r\n    border-radius: 20px;\r\n}\r\n\r\n.bottom-btn .btn {\r\n    line-height: 11px;\r\n}\r\n\r\n.box.prduct-gallery {\r\n    position: relative;\r\n}\r\n\r\n.sample-img {\r\n    position: absolute;\r\n    z-index: 1;\r\n    left: 15%;\r\n    top: 28%;\r\n    transform: rotate(-45deg);\r\n}\r\n\r\np.p-name {\r\n    text-align: center;\r\n    margin: 0;\r\n    font-size: 13px;\r\n    font-weight: 500;\r\n    vertical-align: middle;\r\n}\r\n\r\np.item-id {\r\n    text-align: center;\r\n    position: absolute;\r\n    top: 0;\r\n    background: #212529;\r\n    left: 0;\r\n    font-weight: 600;\r\n    color: #fff;\r\n    border-radius: 0 0 5px;\r\n    font-size: 11px;\r\n    padding: 3px 6px;\r\n}\r\n\r\nspan.price {\r\n    font-size: 12px;\r\n    padding: 7px 10px 0;\r\n    float: left;\r\n    font-weight: 600;\r\n    line-height: 20px;\r\n}\r\n\r\n.item-id b {\r\n    font-weight: 600;\r\n}\r\n\r\n.instock {\r\n    font-size: 12px;\r\n    text-align: center;\r\n    margin: 0 0 3px;\r\n    position: absolute;\r\n    top: 5%;\r\n    box-shadow: 0 0 30px 0 rgb(82 63 105 / 10%);\r\n    left: 70%;\r\n    background: rgb(224 152 152 / 24%);\r\n    width: 50px;\r\n    border: 1px solid rgb(0 0 0 / 10%);\r\n    height: 50px;\r\n    border-radius: 50%;\r\n\r\n    img {\r\n        width: 30px !important;\r\n        height: 30px !important;\r\n        margin: 9px auto;\r\n    }\r\n}\r\n\r\n.pro-box.storeitem.item-box {\r\n    border: 1px solid #dee2e6;\r\n    height: 300px;\r\n    padding-left: 20px;\r\n    padding-right: 20px;\r\n}\r\n\r\nh1.heading-title {\r\n    font-size: 20px;\r\n    text-transform: uppercase;\r\n    font-weight: 700;\r\n    color: #ff7900;\r\n    position: relative;\r\n    margin-bottom: 10px;\r\n    width: 100%;\r\n\r\n    span {\r\n        font-size: 10px;\r\n        text-transform: inherit;\r\n        background: #495057;\r\n        color: #fff;\r\n        padding: 10px 15px;\r\n        border-radius: 25px;\r\n    }\r\n}\r\n\r\nh1.heading-title img {\r\n    max-width: 65px;\r\n    margin-right: 5px;\r\n}\r\n\r\nh1.heading-title small {\r\n    display: inline-block;\r\n    font-weight: 400;\r\n    font-size: 13px;\r\n    position: absolute;\r\n    left: 80px;\r\n    bottom: 4px;\r\n    color: grey;\r\n}\r\n\r\n.offerDiv {\r\n    position: absolute;\r\n    top: 5px;\r\n    right: 5px;\r\n    font-size: 10px;\r\n    background: #dc3545;\r\n    line-height: 10px;\r\n    font-weight: 700;\r\n    width: 35px;\r\n    height: 35px;\r\n    border-radius: 50%;\r\n    padding: 9px;\r\n    text-align: center;\r\n    color: #fff;\r\n}\r\n\r\n.offerDiv small {\r\n    display: block;\r\n}\r\n\r\nspan.price.strike-price {\r\n    color: #ccc;\r\n    text-decoration: line-through;\r\n}\r\n\r\n.row.text-level {\r\n    margin: 0 -10px 10px;\r\n}\r\n\r\n.store-add-remove {\r\n    text-align: center;\r\n    padding: 10px;\r\n    float: left;\r\n    width: 100%;\r\n}\r\n\r\n.row.product-slider-box {\r\n    border-bottom: 5px solid #ddd;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.carousel-inner {\r\n    height: 278px;\r\n}\r\n\r\n.carousel-item {\r\n    margin-right: 0;\r\n    border: 1px solid #f8f9fa;\r\n    background: #fff;\r\n}\r\n\r\n.product-slider-box .domain-product {\r\n    max-width: 23%;\r\n}\r\n\r\n.product-slider-box .sub-domain-product {\r\n    max-width: 77%;\r\n}\r\n\r\n.store-add-remove .btn {\r\n    font-size: 11px;\r\n    text-align: center;\r\n    float: left;\r\n    transition: all .5s;\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n    min-width: 65px;\r\n}\r\n\r\n.store-add-remove .btn+.btn {\r\n    float: right;\r\n}\r\n\r\n.item-subitem-list .pro-box {\r\n    width: 95%;\r\n    overflow: auto;\r\n    height: 280px;\r\n}\r\n\r\n.item-subitem-list li {\r\n    width: 100%;\r\n    float: left;\r\n}\r\n\r\n.item-box {\r\n    max-width: 225px;\r\n    width: 100%;\r\n    float: left;\r\n}\r\n\r\n.sub-item-box {\r\n    width: 100%;\r\n    float: left;\r\n    max-width: 225px;\r\n}\r\n\r\n.sub-item-box .add_to_cart button.btn {\r\n    background: #000064;\r\n    height: 35px;\r\n    font-size: 13px;\r\n    line-height: 16px;\r\n    color: #fff;\r\n    border-radius: 25px;\r\n    margin: 10px 0 0;\r\n    width: 100%;\r\n    text-align: center;\r\n}\r\n\r\n.add_to_cart {\r\n    .remove-btn {\r\n        border-radius: 50%;\r\n        background: #05054ead !important;\r\n        color: #fff;\r\n        height: 35px;\r\n        padding: 0;\r\n    }\r\n\r\n    .btn+.btn {\r\n        width: 100%;\r\n        border: 0;\r\n        border-radius: 30px;\r\n        font-size: 15px;\r\n        line-height: normal;\r\n        font-weight: 600;\r\n    }\r\n}\r\n\r\n.middle-arrow {\r\n    float: left;\r\n    width: 30px;\r\n    height: 50px;\r\n    font-size: 40px;\r\n    margin-top: 10%;\r\n    color: #dee2e6;\r\n    text-align: center;\r\n}\r\n\r\n.price-details {\r\n    float: left;\r\n    width: 100%;\r\n    margin-bottom: 10px;\r\n    font-size: 15px;\r\n    line-height: normal;\r\n    font-weight: 600;\r\n\r\n    .unit-price {\r\n        float: left;\r\n        width: 42%;\r\n    }\r\n}\r\n\r\n.unit-price span {\r\n    display: block;\r\n    font-size: 12px;\r\n    font-weight: 400;\r\n}\r\n\r\n.whole-sale-price {\r\n    float: right;\r\n    width: 58%;\r\n    text-align: right;\r\n\r\n    span {\r\n        font-size: 12px;\r\n        display: block;\r\n        font-weight: 400;\r\n    }\r\n}\r\n\r\n.add_to_cart {\r\n    clear: both;\r\n}\r\n\r\n.subItem-field {\r\n    width: calc(100% - 280px);\r\n    float: left;\r\n}\r\n\r\n.item img {\r\n    width: 100%;\r\n}\r\n\r\n.pro-box.active {\r\n    border: 1px solid #63030c;\r\n}\r\n\r\n.p-details .form-control {\r\n    font-size: 13px;\r\n    padding: 0 5px;\r\n    min-height: 25px;\r\n    height: 25px;\r\n    text-align: center;\r\n}\r\n\r\n.p-details .form-group label {\r\n    margin-bottom: 0;\r\n    font-weight: 400;\r\n    line-height: normal;\r\n    padding-top: 2px;\r\n    padding-bottom: 2px;\r\n}\r\n\r\n.p-details .form-group {\r\n    margin-bottom: 4px;\r\n}\r\n\r\n.sub-item-box img {\r\n    margin-top: 5px !important;\r\n}\r\n\r\n.p-details p {\r\n    font-size: 12px;\r\n    line-height: 14px;\r\n}\r\n\r\n.add-stock input {\r\n    display: inline-block !important;\r\n    width: 60px !important;\r\n    margin-left: 5px;\r\n    vertical-align: middle;\r\n}\r\n\r\n.min-alert-count input {\r\n    width: 35px;\r\n    margin-left: 5px;\r\n    display: inline-block;\r\n    margin-right: 4px;\r\n}\r\n\r\n.d-flex span+span {\r\n    margin-left: auto;\r\n    font-weight: 600;\r\n    width: 60px;\r\n\r\n    i {\r\n        font-size: 16px;\r\n        color: #bd2130;\r\n        display: inline-block;\r\n        position: relative;\r\n        top: 2px;\r\n        cursor: pointer;\r\n    }\r\n}\r\n\r\n.sub-item-box .pro-box img {\r\n    height: 55px;\r\n    width: 55px;\r\n    margin: 18px auto 8px;\r\n}\r\n\r\n.links a {\r\n    display: block;\r\n    color: #17a2b8 !important;\r\n    text-decoration: underline !important;\r\n    font-size: 12px;\r\n    cursor: pointer;\r\n}\r\n\r\n.modal-header i {\r\n    margin: 5px 0;\r\n    color: #bd2130;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.field {\r\n    margin-bottom: 10px;\r\n\r\n    select {\r\n        border: 1px solid #ddd;\r\n        border-radius: 3px;\r\n        height: 26px;\r\n        font-size: 12px;\r\n        margin-left: 10px;\r\n        margin-top: -4px;\r\n        width: 60px;\r\n    }\r\n}\r\n\r\n.topcontent {\r\n    font-size: larger;\r\n}\r\n\r\n.actdct_icon img {\r\n    max-width: 45px;\r\n}\r\n\r\n.action_icon i {\r\n    font-size: 20px;\r\n    color: #bd2130;\r\n    margin: 0 10px 0 10px;\r\n}\r\n\r\n.btn-space {\r\n    margin-right: 10px;\r\n}\r\n\r\n.comm-desk-title {\r\n    font-size: 1.3rem;\r\n    font-weight: 600;\r\n    color: #222;\r\n    letter-spacing: 0.5px;\r\n}\r\n\r\n.comm-desk-title small {\r\n    font-size: 1.3rem;\r\n    font-weight: 600;\r\n    color: #ff7900;\r\n}\r\n\r\n.smallfont {\r\n    font-size: 0.8rem;\r\n}\r\n\r\n.styled-tabs {\r\n    font-family: Arial, sans-serif;\r\n}\r\n\r\n.styled-tabs tab {\r\n    padding: 20px;\r\n    background: #ffffff;\r\n    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);\r\n}\r\n\r\n.profile {\r\n    height: 80px;             \r\n    object-fit: cover;         \r\n    border-radius: 50%;        \r\n    border: 2px solid #eee;\r\n    padding: 3px;\r\n    background: #fafafa;\r\n    transition: transform 0.2s ease-in-out;\r\n}\r\n\r\n.styled-tabs tab h4 {\r\n    margin-top: 10px;\r\n    font-size: 1.2rem;\r\n    font-weight: bold;\r\n    color: #333;\r\n}\r\n\r\n.styled-tabs tab p {\r\n    margin: 4px 0;\r\n    font-size: 0.95rem;\r\n    color: #555;\r\n}\r\n\r\n.styled-tabs tab button {\r\n    background: #007bff;\r\n    color: white;\r\n    border: none;\r\n    padding: 6px 12px;\r\n    border-radius: 4px;\r\n    cursor: pointer;\r\n    font-size: 0.9rem;\r\n    transition: background 0.2s ease;\r\n}\r\n\r\n.styled-tabs tab button:hover {\r\n    background: #0056b3;\r\n}\r\n\r\n.styled-tabs tab div[style*=\"display:flex\"] {\r\n    flex-wrap: wrap;\r\n}\r\n\r\n.styled-tabs tab div[style*=\"gap\"]>div {\r\n    background: #f9f9f9;\r\n    padding: 10px;\r\n    border-radius: 6px;\r\n    text-align: center;\r\n    flex: 1;\r\n    min-width: 120px;\r\n}\r\n\r\n.profile-row {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 20px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.profile-image img {\r\n    width: 80px;\r\n    height: 80px;\r\n    border-radius: 50%;\r\n    border: 2px solid #eee;\r\n    object-fit: cover;\r\n}\r\n\r\n.profile-image-big img {\r\n    width: 100px;\r\n    height: 100px;\r\n    border-radius: 50%;\r\n    border: 2px solid #eee;\r\n    object-fit: cover;\r\n}\r\n\r\n.profile-details {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n}\r\n\r\n.profile-name {\r\n    font-size: 1.25rem;\r\n    font-weight: bold;\r\n    margin: 0;\r\n    color: #222;\r\n}\r\n\r\n.profile-title {\r\n    font-size: 1rem;\r\n    font-weight: 500;\r\n    color: #666;\r\n    margin: 3px 0;\r\n}\r\n\r\n.profile-verified {\r\n    font-size: 0.95rem;\r\n    color: #28a745;\r\n    font-weight: 500;\r\n    margin: 0;\r\n}\r\n\r\n.profilesection {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column; /* Stack vertically */\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 2px;\r\n}"] }]
    }], function () { return [{ type: i1.BsModalService }, { type: i2.ApiService }, { type: i3.ToastrService }]; }, null); })();
//# sourceMappingURL=post-management.component.js.map