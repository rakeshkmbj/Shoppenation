import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "src/app/services/api.service";
import * as i2 from "ngx-bootstrap/modal";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/router";
import * as i5 from "ngx-toastr";
import * as i6 from "ngx-spinner";
import * as i7 from "@angular/common";
import * as i8 from "ngx-pagination";
import * as i9 from "ngx-bootstrap/tabs";
import * as i10 from "ngx-bootstrap/datepicker";
function OrdersPendingListD2CIDCPOSComponent_div_25_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "From date is required ");
    i0.ɵɵelementEnd();
} }
function OrdersPendingListD2CIDCPOSComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 35);
    i0.ɵɵtemplate(1, OrdersPendingListD2CIDCPOSComponent_div_25_div_1_Template, 2, 0, "div", 36);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.f.SELECTED_DATE_FROM.errors.required);
} }
function OrdersPendingListD2CIDCPOSComponent_div_35_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "To date is required ");
    i0.ɵɵelementEnd();
} }
function OrdersPendingListD2CIDCPOSComponent_div_35_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 35);
    i0.ɵɵtemplate(1, OrdersPendingListD2CIDCPOSComponent_div_35_div_1_Template, 2, 0, "div", 36);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.f.SELECTED_DATE_TO.errors.required);
} }
function OrdersPendingListD2CIDCPOSComponent_div_40_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 37)(1, "div", 38)(2, "span");
    i0.ɵɵtext(3, "Delivery Type: Home Delivery");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 39);
    i0.ɵɵelement(5, "img", 40);
    i0.ɵɵelementStart(6, "span");
    i0.ɵɵtext(7, "Data Not Available!");
    i0.ɵɵelementEnd()()();
} }
function OrdersPendingListD2CIDCPOSComponent_div_41_div_1_img_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 54);
} }
function OrdersPendingListD2CIDCPOSComponent_div_41_div_1_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, "N/A");
} }
function OrdersPendingListD2CIDCPOSComponent_div_41_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 38)(1, "span", 51);
    i0.ɵɵtext(2, "Delivery Type: Home Delivery");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span", 51);
    i0.ɵɵtext(4, "Workflow Console Status: ");
    i0.ɵɵtemplate(5, OrdersPendingListD2CIDCPOSComponent_div_41_div_1_img_5_Template, 1, 0, "img", 52);
    i0.ɵɵtemplate(6, OrdersPendingListD2CIDCPOSComponent_div_41_div_1_ng_template_6_Template, 1, 0, "ng-template", null, 53, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const _r31 = i0.ɵɵreference(7);
    const ctx_r28 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", ctx_r28.confirmDashboardData.Store_Workflow_Available_Flag == true)("ngIfElse", _r31);
} }
function OrdersPendingListD2CIDCPOSComponent_div_41_tr_31_img_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 40);
} }
function OrdersPendingListD2CIDCPOSComponent_div_41_tr_31_img_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 54);
} }
function OrdersPendingListD2CIDCPOSComponent_div_41_tr_31_Template(rf, ctx) { if (rf & 1) {
    const _r38 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr")(1, "td");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td");
    i0.ɵɵtext(4);
    i0.ɵɵpipe(5, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "td");
    i0.ɵɵtext(7);
    i0.ɵɵelementStart(8, "small", 55);
    i0.ɵɵlistener("click", function OrdersPendingListD2CIDCPOSComponent_div_41_tr_31_Template_small_click_8_listener() { i0.ɵɵrestoreView(_r38); const ctx_r37 = i0.ɵɵnextContext(2); const _r16 = i0.ɵɵreference(89); return i0.ɵɵresetView(ctx_r37.viewCustomerModal(_r16)); });
    i0.ɵɵtext(9, "view customer");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "td")(11, "button", 56);
    i0.ɵɵlistener("click", function OrdersPendingListD2CIDCPOSComponent_div_41_tr_31_Template_button_click_11_listener() { const restoredCtx = i0.ɵɵrestoreView(_r38); const homeDelivery_r33 = restoredCtx.$implicit; const ctx_r39 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r39.processOrderWorkflow("homeDelivery", homeDelivery_r33.RETAIL_D2C_DELIVERY_RQSTD_ORDER_NUMBER)); });
    i0.ɵɵtext(12, "Process Order");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "td", 57);
    i0.ɵɵtemplate(14, OrdersPendingListD2CIDCPOSComponent_div_41_tr_31_img_14_Template, 1, 0, "img", 58);
    i0.ɵɵtemplate(15, OrdersPendingListD2CIDCPOSComponent_div_41_tr_31_img_15_Template, 1, 0, "img", 59);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "td", 57);
    i0.ɵɵelement(17, "img", 54);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "td");
    i0.ɵɵtext(19);
    i0.ɵɵelement(20, "br");
    i0.ɵɵelementStart(21, "small", 60);
    i0.ɵɵlistener("click", function OrdersPendingListD2CIDCPOSComponent_div_41_tr_31_Template_small_click_21_listener() { const restoredCtx = i0.ɵɵrestoreView(_r38); const homeDelivery_r33 = restoredCtx.$implicit; const ctx_r40 = i0.ɵɵnextContext(2); const _r18 = i0.ɵɵreference(91); return i0.ɵɵresetView(ctx_r40.openCartModal(homeDelivery_r33.RETAIL_D2C_DELIVERY_ORDER_ASSOCIATED_CART_ID, _r18)); });
    i0.ɵɵtext(22, "View Cart");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(23, "td")(24, "button", 56);
    i0.ɵɵlistener("click", function OrdersPendingListD2CIDCPOSComponent_div_41_tr_31_Template_button_click_24_listener() { const restoredCtx = i0.ɵɵrestoreView(_r38); const homeDelivery_r33 = restoredCtx.$implicit; const ctx_r41 = i0.ɵɵnextContext(2); const _r14 = i0.ɵɵreference(87); return i0.ɵɵresetView(ctx_r41.viewInvoiceDetails(homeDelivery_r33.RETAIL_D2C_DELIVERY_RQSTD_ORDER_NUMBER, _r14)); });
    i0.ɵɵelement(25, "i", 61);
    i0.ɵɵtext(26, "Order Invoice");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(27, "td")(28, "button", 62);
    i0.ɵɵlistener("click", function OrdersPendingListD2CIDCPOSComponent_div_41_tr_31_Template_button_click_28_listener() { const restoredCtx = i0.ɵɵrestoreView(_r38); const homeDelivery_r33 = restoredCtx.$implicit; const ctx_r42 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r42.viewOrderFulfillmentonStoreDashboard(homeDelivery_r33.RETAIL_D2C_DELIVERY_RQSTD_ORDER_NUMBER)); });
    i0.ɵɵelement(29, "i", 61);
    i0.ɵɵtext(30, "Fulfillment Details");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const homeDelivery_r33 = ctx.$implicit;
    const i_r34 = ctx.index;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i_r34 + 1);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(5, 6, homeDelivery_r33.RETAIL_D2C_DELIVERY_RQSTD_ALLOCATD_ON_PLATFORM_DATETIME, "medium"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(homeDelivery_r33.RETAIL_D2C_DELIVERY_RQSTD_ORDER_NUMBER);
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngIf", homeDelivery_r33.RETAIL_D2C_ORDER_PROCESSED_BY_STORE_DASHBOARD_FLAG == false);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", homeDelivery_r33.RETAIL_D2C_ORDER_PROCESSED_BY_STORE_DASHBOARD_FLAG == true);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(homeDelivery_r33.RETAIL_D2C_DELIVERY_ORDER_ASSOCIATED_CART_ID);
} }
function OrdersPendingListD2CIDCPOSComponent_div_41_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 41);
    i0.ɵɵtemplate(1, OrdersPendingListD2CIDCPOSComponent_div_41_div_1_Template, 8, 2, "div", 42);
    i0.ɵɵelementStart(2, "div", 43)(3, "div", 44)(4, "div", 45)(5, "table", 46)(6, "thead")(7, "tr")(8, "th", 47);
    i0.ɵɵtext(9, "Sr. No.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "th", 48);
    i0.ɵɵtext(11, "Date of Transaction");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "th");
    i0.ɵɵtext(13, "Confirmed");
    i0.ɵɵelement(14, "br");
    i0.ɵɵtext(15, " Order");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "th");
    i0.ɵɵtext(17, "Order Process");
    i0.ɵɵelement(18, "br");
    i0.ɵɵtext(19, " Workflow");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "th");
    i0.ɵɵtext(21, "Order Processed");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "th");
    i0.ɵɵtext(23, "Order Received");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "th", 49);
    i0.ɵɵtext(25, "Cart ID");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "th");
    i0.ɵɵtext(27, "View Invoice");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "th");
    i0.ɵɵtext(29, "View Details");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(30, "tbody");
    i0.ɵɵtemplate(31, OrdersPendingListD2CIDCPOSComponent_div_41_tr_31_Template, 31, 9, "tr", 50);
    i0.ɵɵelementEnd()()()()()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r3.confirmDashboardData);
    i0.ɵɵadvance(30);
    i0.ɵɵproperty("ngForOf", ctx_r3.homeDeliveryOrderList);
} }
function OrdersPendingListD2CIDCPOSComponent_div_42_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 37)(1, "div", 38)(2, "span");
    i0.ɵɵtext(3, "Delivery Type: Self Delivery");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 39);
    i0.ɵɵelement(5, "img", 40);
    i0.ɵɵelementStart(6, "span");
    i0.ɵɵtext(7, "Data Not Available!");
    i0.ɵɵelementEnd()()();
} }
function OrdersPendingListD2CIDCPOSComponent_div_43_div_1_img_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 54);
} }
function OrdersPendingListD2CIDCPOSComponent_div_43_div_1_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, "N/A");
} }
function OrdersPendingListD2CIDCPOSComponent_div_43_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 38)(1, "span", 51);
    i0.ɵɵtext(2, "Delivery Type: Self Takeaway");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span", 51);
    i0.ɵɵtext(4, "Workflow Console Status: ");
    i0.ɵɵtemplate(5, OrdersPendingListD2CIDCPOSComponent_div_43_div_1_img_5_Template, 1, 0, "img", 52);
    i0.ɵɵtemplate(6, OrdersPendingListD2CIDCPOSComponent_div_43_div_1_ng_template_6_Template, 1, 0, "ng-template", null, 53, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const _r46 = i0.ɵɵreference(7);
    const ctx_r43 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", ctx_r43.confirmDashboardData.Store_Workflow_Available_Flag == true)("ngIfElse", _r46);
} }
function OrdersPendingListD2CIDCPOSComponent_div_43_tr_31_img_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 40);
} }
function OrdersPendingListD2CIDCPOSComponent_div_43_tr_31_img_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 54);
} }
function OrdersPendingListD2CIDCPOSComponent_div_43_tr_31_Template(rf, ctx) { if (rf & 1) {
    const _r53 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr")(1, "td");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td");
    i0.ɵɵtext(4);
    i0.ɵɵpipe(5, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "td");
    i0.ɵɵtext(7);
    i0.ɵɵelementStart(8, "small", 63);
    i0.ɵɵtext(9, "view customer");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "td")(11, "button", 56);
    i0.ɵɵlistener("click", function OrdersPendingListD2CIDCPOSComponent_div_43_tr_31_Template_button_click_11_listener() { const restoredCtx = i0.ɵɵrestoreView(_r53); const selfDelivery_r48 = restoredCtx.$implicit; const ctx_r52 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r52.processOrderWorkflow("selfDelivery", selfDelivery_r48.RETAIL_D2C_DELIVERY_RQSTD_ORDER_NUMBER)); });
    i0.ɵɵtext(12, "Process Order");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "td", 57);
    i0.ɵɵtemplate(14, OrdersPendingListD2CIDCPOSComponent_div_43_tr_31_img_14_Template, 1, 0, "img", 58);
    i0.ɵɵtemplate(15, OrdersPendingListD2CIDCPOSComponent_div_43_tr_31_img_15_Template, 1, 0, "img", 59);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "td", 57);
    i0.ɵɵelement(17, "img", 54);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "td");
    i0.ɵɵtext(19);
    i0.ɵɵelement(20, "br");
    i0.ɵɵelementStart(21, "small", 60);
    i0.ɵɵlistener("click", function OrdersPendingListD2CIDCPOSComponent_div_43_tr_31_Template_small_click_21_listener() { const restoredCtx = i0.ɵɵrestoreView(_r53); const selfDelivery_r48 = restoredCtx.$implicit; const ctx_r54 = i0.ɵɵnextContext(2); const _r18 = i0.ɵɵreference(91); return i0.ɵɵresetView(ctx_r54.openCartModal(selfDelivery_r48.RETAIL_D2C_DELIVERY_ORDER_ASSOCIATED_CART_ID, _r18)); });
    i0.ɵɵtext(22, "View Cart");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(23, "td")(24, "button", 56);
    i0.ɵɵlistener("click", function OrdersPendingListD2CIDCPOSComponent_div_43_tr_31_Template_button_click_24_listener() { const restoredCtx = i0.ɵɵrestoreView(_r53); const selfDelivery_r48 = restoredCtx.$implicit; const ctx_r55 = i0.ɵɵnextContext(2); const _r14 = i0.ɵɵreference(87); return i0.ɵɵresetView(ctx_r55.viewInvoiceDetails(selfDelivery_r48.RETAIL_D2C_DELIVERY_RQSTD_ORDER_NUMBER, _r14)); });
    i0.ɵɵelement(25, "i", 61);
    i0.ɵɵtext(26, "Order Invoice");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(27, "td")(28, "button", 62);
    i0.ɵɵlistener("click", function OrdersPendingListD2CIDCPOSComponent_div_43_tr_31_Template_button_click_28_listener() { const restoredCtx = i0.ɵɵrestoreView(_r53); const selfDelivery_r48 = restoredCtx.$implicit; const ctx_r56 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r56.viewOrderFulfillmentonStoreDashboard(selfDelivery_r48.RETAIL_D2C_DELIVERY_RQSTD_ORDER_NUMBER)); });
    i0.ɵɵelement(29, "i", 61);
    i0.ɵɵtext(30, "Fulfillment Details");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const selfDelivery_r48 = ctx.$implicit;
    const i_r49 = ctx.index;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i_r49 + 1);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(5, 6, selfDelivery_r48.RETAIL_D2C_DELIVERY_RQSTD_ALLOCATD_ON_PLATFORM_DATETIME, "medium"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", selfDelivery_r48.RETAIL_D2C_DELIVERY_RQSTD_ORDER_NUMBER, " ");
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngIf", selfDelivery_r48.RETAIL_D2C_ORDER_PROCESSED_BY_STORE_DASHBOARD_FLAG == false);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", selfDelivery_r48.RETAIL_D2C_ORDER_PROCESSED_BY_STORE_DASHBOARD_FLAG == true);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(selfDelivery_r48.RETAIL_D2C_DELIVERY_ORDER_ASSOCIATED_CART_ID);
} }
function OrdersPendingListD2CIDCPOSComponent_div_43_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 41);
    i0.ɵɵtemplate(1, OrdersPendingListD2CIDCPOSComponent_div_43_div_1_Template, 8, 2, "div", 42);
    i0.ɵɵelementStart(2, "div", 43)(3, "div", 44)(4, "div", 45)(5, "table", 46)(6, "thead")(7, "tr")(8, "th", 47);
    i0.ɵɵtext(9, "Sr. No.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "th", 48);
    i0.ɵɵtext(11, "Date of Transaction");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "th");
    i0.ɵɵtext(13, "Confirmed");
    i0.ɵɵelement(14, "br");
    i0.ɵɵtext(15, " Order");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "th");
    i0.ɵɵtext(17, "Order Process");
    i0.ɵɵelement(18, "br");
    i0.ɵɵtext(19, " Workflow");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "th");
    i0.ɵɵtext(21, "Order Processed");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "th");
    i0.ɵɵtext(23, "Order Received");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "th");
    i0.ɵɵtext(25, "Cart ID");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "th");
    i0.ɵɵtext(27, "View Invoice");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "th");
    i0.ɵɵtext(29, "View Details");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(30, "tbody");
    i0.ɵɵtemplate(31, OrdersPendingListD2CIDCPOSComponent_div_43_tr_31_Template, 31, 9, "tr", 50);
    i0.ɵɵelementEnd()()()()()();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.confirmDashboardData);
    i0.ɵɵadvance(30);
    i0.ɵɵproperty("ngForOf", ctx_r5.selfDeliveryOrderList);
} }
function OrdersPendingListD2CIDCPOSComponent_div_75_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 37)(1, "div", 38)(2, "span");
    i0.ɵɵtext(3, "Delivery Type: Home Delivery");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 39);
    i0.ɵɵelement(5, "img", 40);
    i0.ɵɵelementStart(6, "span");
    i0.ɵɵtext(7, "Data Not Available!");
    i0.ɵɵelementEnd()()();
} }
function OrdersPendingListD2CIDCPOSComponent_div_76_div_1_img_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 54);
} }
function OrdersPendingListD2CIDCPOSComponent_div_76_div_1_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, "N/A");
} }
function OrdersPendingListD2CIDCPOSComponent_div_76_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 38)(1, "span");
    i0.ɵɵtext(2, "Delivery Type: Home Delivery");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4, "Workflow Console Status: ");
    i0.ɵɵtemplate(5, OrdersPendingListD2CIDCPOSComponent_div_76_div_1_img_5_Template, 1, 0, "img", 52);
    i0.ɵɵtemplate(6, OrdersPendingListD2CIDCPOSComponent_div_76_div_1_ng_template_6_Template, 1, 0, "ng-template", null, 53, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const _r60 = i0.ɵɵreference(7);
    const ctx_r57 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", ctx_r57.confirmDashboardData.Store_Workflow_Available_Flag == true)("ngIfElse", _r60);
} }
function OrdersPendingListD2CIDCPOSComponent_div_76_tr_31_img_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 40);
} }
function OrdersPendingListD2CIDCPOSComponent_div_76_tr_31_img_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 54);
} }
function OrdersPendingListD2CIDCPOSComponent_div_76_tr_31_Template(rf, ctx) { if (rf & 1) {
    const _r67 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr")(1, "td");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td");
    i0.ɵɵtext(4);
    i0.ɵɵpipe(5, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "td");
    i0.ɵɵtext(7);
    i0.ɵɵelementStart(8, "small", 55);
    i0.ɵɵlistener("click", function OrdersPendingListD2CIDCPOSComponent_div_76_tr_31_Template_small_click_8_listener() { i0.ɵɵrestoreView(_r67); const ctx_r66 = i0.ɵɵnextContext(2); const _r16 = i0.ɵɵreference(89); return i0.ɵɵresetView(ctx_r66.viewCustomerModal(_r16)); });
    i0.ɵɵtext(9, "view customer");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "td")(11, "button", 56);
    i0.ɵɵlistener("click", function OrdersPendingListD2CIDCPOSComponent_div_76_tr_31_Template_button_click_11_listener() { const restoredCtx = i0.ɵɵrestoreView(_r67); const homeDelivery_r62 = restoredCtx.$implicit; const ctx_r68 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r68.processOrderWorkflow("homeDelivery", homeDelivery_r62.RETAIL_D2C_DELIVERY_RQSTD_ORDER_NUMBER)); });
    i0.ɵɵtext(12, "Process Order");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "td", 57);
    i0.ɵɵtemplate(14, OrdersPendingListD2CIDCPOSComponent_div_76_tr_31_img_14_Template, 1, 0, "img", 58);
    i0.ɵɵtemplate(15, OrdersPendingListD2CIDCPOSComponent_div_76_tr_31_img_15_Template, 1, 0, "img", 59);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "td", 57);
    i0.ɵɵelement(17, "img", 54);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "td");
    i0.ɵɵtext(19);
    i0.ɵɵelement(20, "br");
    i0.ɵɵelementStart(21, "small", 60);
    i0.ɵɵlistener("click", function OrdersPendingListD2CIDCPOSComponent_div_76_tr_31_Template_small_click_21_listener() { const restoredCtx = i0.ɵɵrestoreView(_r67); const homeDelivery_r62 = restoredCtx.$implicit; const ctx_r69 = i0.ɵɵnextContext(2); const _r18 = i0.ɵɵreference(91); return i0.ɵɵresetView(ctx_r69.openCartModal(homeDelivery_r62.RETAIL_D2C_DELIVERY_ORDER_ASSOCIATED_CART_ID, _r18)); });
    i0.ɵɵtext(22, "View Cart");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(23, "td")(24, "button", 56);
    i0.ɵɵlistener("click", function OrdersPendingListD2CIDCPOSComponent_div_76_tr_31_Template_button_click_24_listener() { const restoredCtx = i0.ɵɵrestoreView(_r67); const homeDelivery_r62 = restoredCtx.$implicit; const ctx_r70 = i0.ɵɵnextContext(2); const _r14 = i0.ɵɵreference(87); return i0.ɵɵresetView(ctx_r70.viewInvoiceDetails(homeDelivery_r62.RETAIL_D2C_DELIVERY_RQSTD_ORDER_NUMBER, _r14)); });
    i0.ɵɵelement(25, "i", 61);
    i0.ɵɵtext(26, "Order Invoice");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(27, "td")(28, "button", 62);
    i0.ɵɵlistener("click", function OrdersPendingListD2CIDCPOSComponent_div_76_tr_31_Template_button_click_28_listener() { const restoredCtx = i0.ɵɵrestoreView(_r67); const homeDelivery_r62 = restoredCtx.$implicit; const ctx_r71 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r71.viewOrderFulfillmentonStoreDashboard(homeDelivery_r62.RETAIL_D2C_DELIVERY_RQSTD_ORDER_NUMBER)); });
    i0.ɵɵelement(29, "i", 61);
    i0.ɵɵtext(30, "Fulfillment Details");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const homeDelivery_r62 = ctx.$implicit;
    const i_r63 = ctx.index;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i_r63 + 1);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(5, 6, homeDelivery_r62.RETAIL_D2C_DELIVERY_RQSTD_ALLOCATD_ON_PLATFORM_DATETIME, "medium"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(homeDelivery_r62.RETAIL_D2C_DELIVERY_RQSTD_ORDER_NUMBER);
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngIf", homeDelivery_r62.RETAIL_D2C_ORDER_PROCESSED_BY_STORE_DASHBOARD_FLAG == false);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", homeDelivery_r62.RETAIL_D2C_ORDER_PROCESSED_BY_STORE_DASHBOARD_FLAG == true);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(homeDelivery_r62.RETAIL_D2C_DELIVERY_ORDER_ASSOCIATED_CART_ID);
} }
function OrdersPendingListD2CIDCPOSComponent_div_76_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 41);
    i0.ɵɵtemplate(1, OrdersPendingListD2CIDCPOSComponent_div_76_div_1_Template, 8, 2, "div", 42);
    i0.ɵɵelementStart(2, "div", 43)(3, "div", 44)(4, "div", 45)(5, "table", 46)(6, "thead")(7, "tr")(8, "th", 47);
    i0.ɵɵtext(9, "Sr. No.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "th", 48);
    i0.ɵɵtext(11, "Date of Transaction");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "th");
    i0.ɵɵtext(13, "Confirmed");
    i0.ɵɵelement(14, "br");
    i0.ɵɵtext(15, " Order");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "th");
    i0.ɵɵtext(17, "Order Process");
    i0.ɵɵelement(18, "br");
    i0.ɵɵtext(19, " Workflow");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "th");
    i0.ɵɵtext(21, "Order Processed");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "th");
    i0.ɵɵtext(23, "Order Received");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "th", 49);
    i0.ɵɵtext(25, "Cart ID");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "th");
    i0.ɵɵtext(27, "View Invoice");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "th");
    i0.ɵɵtext(29, "View Details");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(30, "tbody");
    i0.ɵɵtemplate(31, OrdersPendingListD2CIDCPOSComponent_div_76_tr_31_Template, 31, 9, "tr", 50);
    i0.ɵɵelementEnd()()()()()();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r7.confirmDashboardData);
    i0.ɵɵadvance(30);
    i0.ɵɵproperty("ngForOf", ctx_r7.homeDeliveryOrderList);
} }
function OrdersPendingListD2CIDCPOSComponent_div_77_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 37)(1, "div", 38)(2, "span");
    i0.ɵɵtext(3, "Delivery Type: Self Delivery");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 39);
    i0.ɵɵelement(5, "img", 40);
    i0.ɵɵelementStart(6, "span");
    i0.ɵɵtext(7, "Data Not Available!");
    i0.ɵɵelementEnd()()();
} }
function OrdersPendingListD2CIDCPOSComponent_div_78_div_1_img_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 54);
} }
function OrdersPendingListD2CIDCPOSComponent_div_78_div_1_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, "N/A");
} }
function OrdersPendingListD2CIDCPOSComponent_div_78_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 38)(1, "span");
    i0.ɵɵtext(2, "Delivery Type: Self Takeaway");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4, "Workflow Console Status: ");
    i0.ɵɵtemplate(5, OrdersPendingListD2CIDCPOSComponent_div_78_div_1_img_5_Template, 1, 0, "img", 52);
    i0.ɵɵtemplate(6, OrdersPendingListD2CIDCPOSComponent_div_78_div_1_ng_template_6_Template, 1, 0, "ng-template", null, 53, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const _r75 = i0.ɵɵreference(7);
    const ctx_r72 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", ctx_r72.confirmDashboardData.Store_Workflow_Available_Flag == true)("ngIfElse", _r75);
} }
function OrdersPendingListD2CIDCPOSComponent_div_78_tr_31_img_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 40);
} }
function OrdersPendingListD2CIDCPOSComponent_div_78_tr_31_img_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 54);
} }
function OrdersPendingListD2CIDCPOSComponent_div_78_tr_31_Template(rf, ctx) { if (rf & 1) {
    const _r82 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr")(1, "td");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td");
    i0.ɵɵtext(4);
    i0.ɵɵpipe(5, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "td");
    i0.ɵɵtext(7);
    i0.ɵɵelementStart(8, "small", 63);
    i0.ɵɵtext(9, "view customer");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "td")(11, "button", 56);
    i0.ɵɵlistener("click", function OrdersPendingListD2CIDCPOSComponent_div_78_tr_31_Template_button_click_11_listener() { const restoredCtx = i0.ɵɵrestoreView(_r82); const selfDelivery_r77 = restoredCtx.$implicit; const ctx_r81 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r81.processOrderWorkflow("selfDelivery", selfDelivery_r77.RETAIL_D2C_DELIVERY_RQSTD_ORDER_NUMBER)); });
    i0.ɵɵtext(12, "Process Order");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "td", 57);
    i0.ɵɵtemplate(14, OrdersPendingListD2CIDCPOSComponent_div_78_tr_31_img_14_Template, 1, 0, "img", 58);
    i0.ɵɵtemplate(15, OrdersPendingListD2CIDCPOSComponent_div_78_tr_31_img_15_Template, 1, 0, "img", 59);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "td", 57);
    i0.ɵɵelement(17, "img", 54);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "td");
    i0.ɵɵtext(19);
    i0.ɵɵelement(20, "br");
    i0.ɵɵelementStart(21, "small", 60);
    i0.ɵɵlistener("click", function OrdersPendingListD2CIDCPOSComponent_div_78_tr_31_Template_small_click_21_listener() { const restoredCtx = i0.ɵɵrestoreView(_r82); const selfDelivery_r77 = restoredCtx.$implicit; const ctx_r83 = i0.ɵɵnextContext(2); const _r18 = i0.ɵɵreference(91); return i0.ɵɵresetView(ctx_r83.openCartModal(selfDelivery_r77.RETAIL_D2C_DELIVERY_ORDER_ASSOCIATED_CART_ID, _r18)); });
    i0.ɵɵtext(22, "View Cart");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(23, "td")(24, "button", 56);
    i0.ɵɵlistener("click", function OrdersPendingListD2CIDCPOSComponent_div_78_tr_31_Template_button_click_24_listener() { const restoredCtx = i0.ɵɵrestoreView(_r82); const selfDelivery_r77 = restoredCtx.$implicit; const ctx_r84 = i0.ɵɵnextContext(2); const _r14 = i0.ɵɵreference(87); return i0.ɵɵresetView(ctx_r84.viewInvoiceDetails(selfDelivery_r77.RETAIL_D2C_DELIVERY_RQSTD_ORDER_NUMBER, _r14)); });
    i0.ɵɵelement(25, "i", 61);
    i0.ɵɵtext(26, "Order Invoice");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(27, "td")(28, "button", 62);
    i0.ɵɵlistener("click", function OrdersPendingListD2CIDCPOSComponent_div_78_tr_31_Template_button_click_28_listener() { const restoredCtx = i0.ɵɵrestoreView(_r82); const selfDelivery_r77 = restoredCtx.$implicit; const ctx_r85 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r85.viewOrderFulfillmentonStoreDashboard(selfDelivery_r77.RETAIL_D2C_DELIVERY_RQSTD_ORDER_NUMBER)); });
    i0.ɵɵelement(29, "i", 61);
    i0.ɵɵtext(30, "Fulfillment Details");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const selfDelivery_r77 = ctx.$implicit;
    const i_r78 = ctx.index;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i_r78 + 1);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(5, 6, selfDelivery_r77.RETAIL_D2C_DELIVERY_RQSTD_ALLOCATD_ON_PLATFORM_DATETIME, "medium"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", selfDelivery_r77.RETAIL_D2C_DELIVERY_RQSTD_ORDER_NUMBER, " ");
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngIf", selfDelivery_r77.RETAIL_D2C_ORDER_PROCESSED_BY_STORE_DASHBOARD_FLAG == false);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", selfDelivery_r77.RETAIL_D2C_ORDER_PROCESSED_BY_STORE_DASHBOARD_FLAG == true);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(selfDelivery_r77.RETAIL_D2C_DELIVERY_ORDER_ASSOCIATED_CART_ID);
} }
function OrdersPendingListD2CIDCPOSComponent_div_78_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 41);
    i0.ɵɵtemplate(1, OrdersPendingListD2CIDCPOSComponent_div_78_div_1_Template, 8, 2, "div", 42);
    i0.ɵɵelementStart(2, "div", 43)(3, "div", 44)(4, "div", 45)(5, "table", 46)(6, "thead")(7, "tr")(8, "th", 47);
    i0.ɵɵtext(9, "Sr. No.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "th", 48);
    i0.ɵɵtext(11, "Date of Transaction");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "th");
    i0.ɵɵtext(13, "Confirmed");
    i0.ɵɵelement(14, "br");
    i0.ɵɵtext(15, " Order");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "th");
    i0.ɵɵtext(17, "Order Process");
    i0.ɵɵelement(18, "br");
    i0.ɵɵtext(19, " Workflow");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "th");
    i0.ɵɵtext(21, "Order Processed");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "th");
    i0.ɵɵtext(23, "Order Received");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "th");
    i0.ɵɵtext(25, "Cart ID");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "th");
    i0.ɵɵtext(27, "View Invoice");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "th");
    i0.ɵɵtext(29, "View Details");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(30, "tbody");
    i0.ɵɵtemplate(31, OrdersPendingListD2CIDCPOSComponent_div_78_tr_31_Template, 31, 9, "tr", 50);
    i0.ɵɵelementEnd()()()()()();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r9.confirmDashboardData);
    i0.ɵɵadvance(30);
    i0.ɵɵproperty("ngForOf", ctx_r9.selfDeliveryOrderList);
} }
function OrdersPendingListD2CIDCPOSComponent_tab_79_option_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 69);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const country_r93 = ctx.$implicit;
    i0.ɵɵproperty("value", country_r93.CNTRY_ID);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", country_r93.CNTRY_NM, "");
} }
function OrdersPendingListD2CIDCPOSComponent_tab_79_option_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 69);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const state_r94 = ctx.$implicit;
    i0.ɵɵproperty("value", state_r94.STATE_ID);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", state_r94.STATE_NM, "");
} }
function OrdersPendingListD2CIDCPOSComponent_tab_79_div_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 37)(1, "div", 38)(2, "span");
    i0.ɵɵtext(3, "Primary/Secondary Channel List");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 39);
    i0.ɵɵelement(5, "img", 40);
    i0.ɵɵelementStart(6, "span");
    i0.ɵɵtext(7, "Data Not Available!");
    i0.ɵɵelementEnd()()();
} }
function OrdersPendingListD2CIDCPOSComponent_tab_79_div_24_tr_29_img_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 80);
} }
function OrdersPendingListD2CIDCPOSComponent_tab_79_div_24_tr_29_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 81);
} }
function OrdersPendingListD2CIDCPOSComponent_tab_79_div_24_tr_29_Template(rf, ctx) { if (rf & 1) {
    const _r102 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr")(1, "td", 71);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td", 71);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "td", 71);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "td", 71);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "td", 71);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "td", 71);
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "td", 71);
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "td", 71);
    i0.ɵɵtemplate(16, OrdersPendingListD2CIDCPOSComponent_tab_79_div_24_tr_29_img_16_Template, 1, 0, "img", 72);
    i0.ɵɵtemplate(17, OrdersPendingListD2CIDCPOSComponent_tab_79_div_24_tr_29_ng_template_17_Template, 1, 0, "ng-template", null, 73, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "td")(20, "div", 74)(21, "span", 75);
    i0.ɵɵlistener("click", function OrdersPendingListD2CIDCPOSComponent_tab_79_div_24_tr_29_Template_span_click_21_listener() { const restoredCtx = i0.ɵɵrestoreView(_r102); const item_r96 = restoredCtx.$implicit; const ctx_r101 = i0.ɵɵnextContext(3); const _r24 = i0.ɵɵreference(97); return i0.ɵɵresetView(ctx_r101.openSNAddress(item_r96.RETAIL_D2C_SUBACCT_OFFICE_NAME, item_r96.SECOND_NODE_ACCT_SUBACCT_ID, item_r96.SECOND_NODE_ACCT_STORE_ID, _r24)); });
    i0.ɵɵtext(22, "Address");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "span", 75);
    i0.ɵɵlistener("click", function OrdersPendingListD2CIDCPOSComponent_tab_79_div_24_tr_29_Template_span_click_23_listener() { const restoredCtx = i0.ɵɵrestoreView(_r102); const item_r96 = restoredCtx.$implicit; const ctx_r103 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r103.openSNThirdNode(item_r96)); });
    i0.ɵɵtext(24, "3rd Node");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "span", 76);
    i0.ɵɵlistener("click", function OrdersPendingListD2CIDCPOSComponent_tab_79_div_24_tr_29_Template_span_click_25_listener() { const restoredCtx = i0.ɵɵrestoreView(_r102); const item_r96 = restoredCtx.$implicit; const ctx_r104 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r104.openView(item_r96)); });
    i0.ɵɵelement(26, "img", 77);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "span", 78);
    i0.ɵɵlistener("click", function OrdersPendingListD2CIDCPOSComponent_tab_79_div_24_tr_29_Template_span_click_27_listener() { const restoredCtx = i0.ɵɵrestoreView(_r102); const item_r96 = restoredCtx.$implicit; const ctx_r105 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r105.openSNEdit(item_r96)); });
    i0.ɵɵelement(28, "i", 79);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const item_r96 = ctx.$implicit;
    const i_r97 = ctx.index;
    const _r99 = i0.ɵɵreference(18);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i_r97 + 1);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r96.ECOMM_PLATFORM_ID);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r96.SECOND_NODE_ACCT_SUBACCT_ID);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r96.SECOND_NODE_ACCT_STORE_ID);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r96.RETAIL_D2C_SUBACCT_OFFICE_NAME);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r96.ACCT_PRIMRY_SECNDRY_B2B_LINK_SEQ_ID);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r96.CategoryName);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", item_r96.PRIMRY_SECNDRY_ACCTS_b2B_ACTIV_FLG)("ngIfElse", _r99);
} }
function OrdersPendingListD2CIDCPOSComponent_tab_79_div_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 41)(1, "div", 38)(2, "span");
    i0.ɵɵtext(3, "Primary/Secondary Channel List");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 43)(5, "div", 44)(6, "div", 70)(7, "table", 46)(8, "thead")(9, "tr")(10, "th", 71);
    i0.ɵɵtext(11, "Sr#");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "th", 71);
    i0.ɵɵtext(13, "PltfrmId");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "th", 71);
    i0.ɵɵtext(15, "Subacc Id");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "th", 71);
    i0.ɵɵtext(17, "Store Id");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "th", 71);
    i0.ɵɵtext(19, "Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "th", 71);
    i0.ɵɵtext(21, "B2B Id");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "th", 71);
    i0.ɵɵtext(23, "Category");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "th", 71);
    i0.ɵɵtext(25, "B2B flg");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "th", 71);
    i0.ɵɵtext(27, "Action");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(28, "tbody");
    i0.ɵɵtemplate(29, OrdersPendingListD2CIDCPOSComponent_tab_79_div_24_tr_29_Template, 29, 9, "tr", 50);
    i0.ɵɵelementEnd()()()()()();
} if (rf & 2) {
    const ctx_r89 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(29);
    i0.ɵɵproperty("ngForOf", ctx_r89.secondryNodeAccArr);
} }
function OrdersPendingListD2CIDCPOSComponent_tab_79_div_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 37)(1, "div", 38)(2, "span");
    i0.ɵɵtext(3, "Secondary/Tertiary Channel List");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 39);
    i0.ɵɵelement(5, "img", 40);
    i0.ɵɵelementStart(6, "span");
    i0.ɵɵtext(7, "Data Not Available!");
    i0.ɵɵelementEnd()()();
} }
function OrdersPendingListD2CIDCPOSComponent_tab_79_div_26_tr_27_img_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 80);
} }
function OrdersPendingListD2CIDCPOSComponent_tab_79_div_26_tr_27_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 81);
} }
function OrdersPendingListD2CIDCPOSComponent_tab_79_div_26_tr_27_img_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 80);
} }
function OrdersPendingListD2CIDCPOSComponent_tab_79_div_26_tr_27_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 81);
} }
function OrdersPendingListD2CIDCPOSComponent_tab_79_div_26_tr_27_Template(rf, ctx) { if (rf & 1) {
    const _r116 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr")(1, "td", 71);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td", 71);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "td", 71);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "td", 71);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "td", 71);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "td", 71);
    i0.ɵɵtemplate(12, OrdersPendingListD2CIDCPOSComponent_tab_79_div_26_tr_27_img_12_Template, 1, 0, "img", 72);
    i0.ɵɵtemplate(13, OrdersPendingListD2CIDCPOSComponent_tab_79_div_26_tr_27_ng_template_13_Template, 1, 0, "ng-template", null, 82, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "td", 71);
    i0.ɵɵtemplate(16, OrdersPendingListD2CIDCPOSComponent_tab_79_div_26_tr_27_img_16_Template, 1, 0, "img", 72);
    i0.ɵɵtemplate(17, OrdersPendingListD2CIDCPOSComponent_tab_79_div_26_tr_27_ng_template_17_Template, 1, 0, "ng-template", null, 83, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "td")(20, "span", 75);
    i0.ɵɵlistener("click", function OrdersPendingListD2CIDCPOSComponent_tab_79_div_26_tr_27_Template_span_click_20_listener() { const restoredCtx = i0.ɵɵrestoreView(_r116); const item_r107 = restoredCtx.$implicit; const ctx_r115 = i0.ɵɵnextContext(3); const _r24 = i0.ɵɵreference(97); return i0.ɵɵresetView(ctx_r115.openTNAddress(item_r107.RETAIL_D2C_SUBACCT_OFFICE_NAME, item_r107.THIRD_NODE_ACCT_SUBACCT_ID, item_r107.THIRD_NODE_ACCT_STORE_ID, _r24)); });
    i0.ɵɵtext(21, "Address");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "span", 78);
    i0.ɵɵlistener("click", function OrdersPendingListD2CIDCPOSComponent_tab_79_div_26_tr_27_Template_span_click_22_listener() { const restoredCtx = i0.ɵɵrestoreView(_r116); const item_r107 = restoredCtx.$implicit; const ctx_r117 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r117.openTNEdit(item_r107)); });
    i0.ɵɵelement(23, "i", 79);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const item_r107 = ctx.$implicit;
    const i_r108 = ctx.index;
    const _r110 = i0.ɵɵreference(14);
    const _r113 = i0.ɵɵreference(18);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i_r108 + 1);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r107.THIRD_NODE_ACCT_SUBACCT_ID);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r107.THIRD_NODE_ACCT_STORE_ID);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r107.RETAIL_D2C_SUBACCT_OFFICE_NAME);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", item_r107.ACCTS_SECNDRY_TERITIARY_B2B_LINK_SEQ_ID, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", item_r107.SECNDRY_TERITIARY_ACCTS_b2B_ACTIV_FLG)("ngIfElse", _r110);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", item_r107.ACCTS_B2B2C_ACTIV_FLG)("ngIfElse", _r113);
} }
function OrdersPendingListD2CIDCPOSComponent_tab_79_div_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 41)(1, "div", 38)(2, "span");
    i0.ɵɵtext(3, "Secondary/Tertiary Channel List");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 43)(5, "div", 44)(6, "div", 70)(7, "table", 46)(8, "thead")(9, "tr")(10, "th", 71);
    i0.ɵɵtext(11, "Sr#");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "th", 71);
    i0.ɵɵtext(13, "Acc Id");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "th", 71);
    i0.ɵɵtext(15, "Store Id");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "th", 71);
    i0.ɵɵtext(17, "Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "th", 71);
    i0.ɵɵtext(19, "B2B Id");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "th", 71);
    i0.ɵɵtext(21, "B2B Flg");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "th", 71);
    i0.ɵɵtext(23, "B2B2C Flg");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "th", 71);
    i0.ɵɵtext(25, "Action");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(26, "tbody");
    i0.ɵɵtemplate(27, OrdersPendingListD2CIDCPOSComponent_tab_79_div_26_tr_27_Template, 24, 9, "tr", 50);
    i0.ɵɵelementEnd()()()()()();
} if (rf & 2) {
    const ctx_r91 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(27);
    i0.ɵɵproperty("ngForOf", ctx_r91.thirdNodeAccArr);
} }
function OrdersPendingListD2CIDCPOSComponent_tab_79_div_27_div_20_option_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 69);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const productline_r123 = ctx.$implicit;
    i0.ɵɵproperty("value", productline_r123.RETAIL_D2C_PRODUCT_ID);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", productline_r123.RETAIL_D2C_PRODUCT_NAME, " ");
} }
function OrdersPendingListD2CIDCPOSComponent_tab_79_div_27_div_20_option_30_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 102);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const productItem_r124 = ctx.$implicit;
    i0.ɵɵproperty("ngValue", productItem_r124.RETAIL_D2C_ITEM_ID);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", productItem_r124.RETAIL_D2C_ITEM_NAME, " ");
} }
function OrdersPendingListD2CIDCPOSComponent_tab_79_div_27_div_20_div_35_li_14_div_13_span_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵelement(1, "i", 130);
    i0.ɵɵelementEnd();
} }
function OrdersPendingListD2CIDCPOSComponent_tab_79_div_27_div_20_div_35_li_14_div_13_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵelement(1, "i", 131);
    i0.ɵɵelementEnd();
} }
function OrdersPendingListD2CIDCPOSComponent_tab_79_div_27_div_20_div_35_li_14_div_13_span_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "Yes");
    i0.ɵɵelementEnd();
} }
function OrdersPendingListD2CIDCPOSComponent_tab_79_div_27_div_20_div_35_li_14_div_13_ng_template_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "No");
    i0.ɵɵelementEnd();
} }
const _c0 = function (a0) { return { "active": a0 }; };
function OrdersPendingListD2CIDCPOSComponent_tab_79_div_27_div_20_div_35_li_14_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r137 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 118)(1, "div", 119);
    i0.ɵɵelement(2, "img", 120);
    i0.ɵɵpipe(3, "slice");
    i0.ɵɵelementStart(4, "div", 112)(5, "p", 121);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "p", 122)(8, "small");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "p", 123)(11, "span");
    i0.ɵɵtext(12, "In-Stock:");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(13, OrdersPendingListD2CIDCPOSComponent_tab_79_div_27_div_20_div_35_li_14_div_13_span_13_Template, 2, 0, "span", 124);
    i0.ɵɵtemplate(14, OrdersPendingListD2CIDCPOSComponent_tab_79_div_27_div_20_div_35_li_14_div_13_ng_template_14_Template, 2, 0, "ng-template", null, 125, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "p", 126)(17, "span");
    i0.ɵɵtext(18, "SKU#:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "span");
    i0.ɵɵtext(20);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(21, "p", 127)(22, "span");
    i0.ɵɵtext(23, "Minimum Inventory Alet:");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(24, OrdersPendingListD2CIDCPOSComponent_tab_79_div_27_div_20_div_35_li_14_div_13_span_24_Template, 2, 0, "span", 124);
    i0.ɵɵtemplate(25, OrdersPendingListD2CIDCPOSComponent_tab_79_div_27_div_20_div_35_li_14_div_13_ng_template_25_Template, 2, 0, "ng-template", null, 128, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "p", 127)(28, "span");
    i0.ɵɵtext(29, "Auto ordering Limit:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "span");
    i0.ɵɵtext(31, "N/A");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(32, "p", 126)(33, "span");
    i0.ɵɵtext(34, "Current Stock in Webstore:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(35, "span");
    i0.ɵɵtext(36);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(37, "span", 129);
    i0.ɵɵlistener("click", function OrdersPendingListD2CIDCPOSComponent_tab_79_div_27_div_20_div_35_li_14_div_13_Template_span_click_37_listener() { i0.ɵɵrestoreView(_r137); const ctx_r136 = i0.ɵɵnextContext(6); const _r22 = i0.ɵɵreference(95); return i0.ɵɵresetView(ctx_r136.stockMovement("inward", _r22)); });
    i0.ɵɵtext(38, " Inward Movement of stock ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(39, "span", 129);
    i0.ɵɵlistener("click", function OrdersPendingListD2CIDCPOSComponent_tab_79_div_27_div_20_div_35_li_14_div_13_Template_span_click_39_listener() { i0.ɵɵrestoreView(_r137); const ctx_r138 = i0.ɵɵnextContext(6); const _r22 = i0.ɵɵreference(95); return i0.ɵɵresetView(ctx_r138.stockMovement("outward", _r22)); });
    i0.ɵɵtext(40, " Outward Movement of stock ");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const storesubitem_r128 = ctx.$implicit;
    const _r131 = i0.ɵɵreference(15);
    const _r134 = i0.ɵɵreference(26);
    const ctx_r127 = i0.ɵɵnextContext(6);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(15, _c0, storesubitem_r128.isSelected === true));
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate2("src", "", ctx_r127.imgURL, "", i0.ɵɵpipeBind3(3, 11, storesubitem_r128.SubItemImagePath, 1, -4), "jpeg", i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", storesubitem_r128.SubItemName, "");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(storesubitem_r128.SubItemSize);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", storesubitem_r128.RETAIL_D2C_STOCK_HOLDER_SUBITEM_IN_STOCK_FLG == true)("ngIfElse", _r131);
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(storesubitem_r128.RETAIL_D2C_STOCK_SUBITEM_SKU_CODE);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", storesubitem_r128.RETAIL_D2C_STOCK_HOLDER_SUBITEM_STOCK_MIN_ALERT_FLG == true)("ngIfElse", _r134);
    i0.ɵɵadvance(12);
    i0.ɵɵtextInterpolate1("", storesubitem_r128.RETAIL_D2C_STOCK_HOLDR_INVENTRY_ON_HAND, " Units");
} }
const _c1 = function (a1) { return { itemsPerPage: 3, currentPage: a1 }; };
function OrdersPendingListD2CIDCPOSComponent_tab_79_div_27_div_20_div_35_li_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li")(1, "div", 110);
    i0.ɵɵelement(2, "img", 111);
    i0.ɵɵpipe(3, "slice");
    i0.ɵɵelementStart(4, "div", 112)(5, "p", 113);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "p", 114);
    i0.ɵɵtext(8, "Item ID: ");
    i0.ɵɵelementStart(9, "b");
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(11, "div", 115);
    i0.ɵɵelement(12, "i", 116);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(13, OrdersPendingListD2CIDCPOSComponent_tab_79_div_27_div_20_div_35_li_14_div_13_Template, 41, 17, "div", 117);
    i0.ɵɵpipe(14, "paginate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const storeitem_r126 = ctx.$implicit;
    const ctx_r125 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate2("src", "", ctx_r125.imgURL, "", i0.ɵɵpipeBind3(3, 5, storeitem_r126.ItemImagePath, 1, -4), "jpeg", i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(storeitem_r126.ItemName);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(storeitem_r126.ItemId);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind2(14, 9, ctx_r125.productLineInventoryList, i0.ɵɵpureFunction1(12, _c1, ctx_r125.p)));
} }
function OrdersPendingListD2CIDCPOSComponent_tab_79_div_27_div_20_div_35_Template(rf, ctx) { if (rf & 1) {
    const _r140 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 103)(1, "div", 104)(2, "div", 45)(3, "div", 105)(4, "div", 106);
    i0.ɵɵtext(5, "Store: ");
    i0.ɵɵelementStart(6, "span");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "div", 106);
    i0.ɵɵtext(9, "Product Line: ");
    i0.ɵɵelementStart(10, "span");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(12, "div", 107)(13, "ul");
    i0.ɵɵtemplate(14, OrdersPendingListD2CIDCPOSComponent_tab_79_div_27_div_20_div_35_li_14_Template, 15, 14, "li", 50);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(15, "div", 108)(16, "div", 45)(17, "pagination-controls", 109);
    i0.ɵɵlistener("pageChange", function OrdersPendingListD2CIDCPOSComponent_tab_79_div_27_div_20_div_35_Template_pagination_controls_pageChange_17_listener($event) { i0.ɵɵrestoreView(_r140); const ctx_r139 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r139.p = $event); });
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r122 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(ctx_r122.selectedChannel.RETAIL_D2C_SUBACCT_OFFICE_NAME);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r122.productName);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r122.filterItemList);
} }
function OrdersPendingListD2CIDCPOSComponent_tab_79_div_27_div_20_Template(rf, ctx) { if (rf & 1) {
    const _r142 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 93)(1, "div", 38)(2, "span");
    i0.ɵɵtext(3, "Stockes Inventory Dashboard");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 43)(5, "div", 44)(6, "div", 70)(7, "form", 94)(8, "div", 6)(9, "div", 7)(10, "div", 8)(11, "label");
    i0.ɵɵtext(12, "Store");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "div", 9);
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(15, "div", 7)(16, "div", 8)(17, "label");
    i0.ɵɵtext(18, "Select my Store Product-Line");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "select", 95);
    i0.ɵɵlistener("change", function OrdersPendingListD2CIDCPOSComponent_tab_79_div_27_div_20_Template_select_change_19_listener($event) { i0.ɵɵrestoreView(_r142); const ctx_r141 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r141.onretailDropshipStoreChange($event)); });
    i0.ɵɵelementStart(20, "option", 66);
    i0.ɵɵtext(21, "Select");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(22, OrdersPendingListD2CIDCPOSComponent_tab_79_div_27_div_20_option_22_Template, 2, 2, "option", 67);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(23, "div", 7)(24, "div", 8)(25, "label");
    i0.ɵɵtext(26, "Select Store Item");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "select", 96);
    i0.ɵɵlistener("change", function OrdersPendingListD2CIDCPOSComponent_tab_79_div_27_div_20_Template_select_change_27_listener($event) { i0.ɵɵrestoreView(_r142); const ctx_r143 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r143.onPItemChange($event)); });
    i0.ɵɵelementStart(28, "option", 97);
    i0.ɵɵtext(29, "Select");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(30, OrdersPendingListD2CIDCPOSComponent_tab_79_div_27_div_20_option_30_Template, 2, 2, "option", 98);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(31, "div", 99)(32, "div", 45)(33, "button", 100);
    i0.ɵɵlistener("click", function OrdersPendingListD2CIDCPOSComponent_tab_79_div_27_div_20_Template_button_click_33_listener() { i0.ɵɵrestoreView(_r142); const ctx_r144 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r144.getAllItemSubItemAvailableForInventoryForselectedChannel()); });
    i0.ɵɵtext(34, " Submit");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵtemplate(35, OrdersPendingListD2CIDCPOSComponent_tab_79_div_27_div_20_div_35_Template, 18, 3, "div", 101);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r118 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("formGroup", ctx_r118.webStoreForm);
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate1(" ", ctx_r118.selectedChannel.RETAIL_D2C_SUBACCT_OFFICE_NAME, " ");
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("ngForOf", ctx_r118.productLineList);
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("ngForOf", ctx_r118.itemLists);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", ctx_r118.showWebstore);
} }
function OrdersPendingListD2CIDCPOSComponent_tab_79_div_27_div_21_div_24_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, " From date is required ");
    i0.ɵɵelementEnd();
} }
function OrdersPendingListD2CIDCPOSComponent_tab_79_div_27_div_21_div_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 35);
    i0.ɵɵtemplate(1, OrdersPendingListD2CIDCPOSComponent_tab_79_div_27_div_21_div_24_div_1_Template, 2, 0, "div", 36);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r145 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r145.f.SELECTED_DATE_FROM.errors.required);
} }
function OrdersPendingListD2CIDCPOSComponent_tab_79_div_27_div_21_div_34_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "To date is required ");
    i0.ɵɵelementEnd();
} }
function OrdersPendingListD2CIDCPOSComponent_tab_79_div_27_div_21_div_34_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 35);
    i0.ɵɵtemplate(1, OrdersPendingListD2CIDCPOSComponent_tab_79_div_27_div_21_div_34_div_1_Template, 2, 0, "div", 36);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r146 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r146.f.SELECTED_DATE_TO.errors.required);
} }
function OrdersPendingListD2CIDCPOSComponent_tab_79_div_27_div_21_div_39_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 37)(1, "div", 38)(2, "span");
    i0.ɵɵtext(3, "Delivery Type: Home Delivery");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 39);
    i0.ɵɵelement(5, "img", 40);
    i0.ɵɵelementStart(6, "span");
    i0.ɵɵtext(7, "Data Not Available!");
    i0.ɵɵelementEnd()()();
} }
function OrdersPendingListD2CIDCPOSComponent_tab_79_div_27_div_21_div_40_div_1_img_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 54);
} }
function OrdersPendingListD2CIDCPOSComponent_tab_79_div_27_div_21_div_40_div_1_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, "N/A");
} }
function OrdersPendingListD2CIDCPOSComponent_tab_79_div_27_div_21_div_40_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 38)(1, "span");
    i0.ɵɵtext(2, "Delivery Type: Home Delivery");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4, "Workflow Console Status: ");
    i0.ɵɵtemplate(5, OrdersPendingListD2CIDCPOSComponent_tab_79_div_27_div_21_div_40_div_1_img_5_Template, 1, 0, "img", 52);
    i0.ɵɵtemplate(6, OrdersPendingListD2CIDCPOSComponent_tab_79_div_27_div_21_div_40_div_1_ng_template_6_Template, 1, 0, "ng-template", null, 53, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const _r156 = i0.ɵɵreference(7);
    const ctx_r153 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", ctx_r153.confirmDashboardData.Store_Workflow_Available_Flag == true)("ngIfElse", _r156);
} }
function OrdersPendingListD2CIDCPOSComponent_tab_79_div_27_div_21_div_40_tr_31_img_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 40);
} }
function OrdersPendingListD2CIDCPOSComponent_tab_79_div_27_div_21_div_40_tr_31_img_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 54);
} }
function OrdersPendingListD2CIDCPOSComponent_tab_79_div_27_div_21_div_40_tr_31_Template(rf, ctx) { if (rf & 1) {
    const _r163 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr")(1, "td");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td");
    i0.ɵɵtext(4);
    i0.ɵɵpipe(5, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "td");
    i0.ɵɵtext(7);
    i0.ɵɵelementStart(8, "small", 55);
    i0.ɵɵlistener("click", function OrdersPendingListD2CIDCPOSComponent_tab_79_div_27_div_21_div_40_tr_31_Template_small_click_8_listener() { i0.ɵɵrestoreView(_r163); const ctx_r162 = i0.ɵɵnextContext(5); const _r16 = i0.ɵɵreference(89); return i0.ɵɵresetView(ctx_r162.viewCustomerModal(_r16)); });
    i0.ɵɵtext(9, "view customer");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "td")(11, "button", 56);
    i0.ɵɵlistener("click", function OrdersPendingListD2CIDCPOSComponent_tab_79_div_27_div_21_div_40_tr_31_Template_button_click_11_listener() { const restoredCtx = i0.ɵɵrestoreView(_r163); const homeDelivery_r158 = restoredCtx.$implicit; const ctx_r164 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r164.processOrderWorkflow("homeDelivery", homeDelivery_r158.RETAIL_D2C_DELIVERY_RQSTD_ORDER_NUMBER)); });
    i0.ɵɵtext(12, "Process Order");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "td", 57);
    i0.ɵɵtemplate(14, OrdersPendingListD2CIDCPOSComponent_tab_79_div_27_div_21_div_40_tr_31_img_14_Template, 1, 0, "img", 58);
    i0.ɵɵtemplate(15, OrdersPendingListD2CIDCPOSComponent_tab_79_div_27_div_21_div_40_tr_31_img_15_Template, 1, 0, "img", 59);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "td", 57);
    i0.ɵɵelement(17, "img", 54);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "td");
    i0.ɵɵtext(19);
    i0.ɵɵelement(20, "br");
    i0.ɵɵelementStart(21, "small", 60);
    i0.ɵɵlistener("click", function OrdersPendingListD2CIDCPOSComponent_tab_79_div_27_div_21_div_40_tr_31_Template_small_click_21_listener() { const restoredCtx = i0.ɵɵrestoreView(_r163); const homeDelivery_r158 = restoredCtx.$implicit; const ctx_r165 = i0.ɵɵnextContext(5); const _r18 = i0.ɵɵreference(91); return i0.ɵɵresetView(ctx_r165.openCartModal(homeDelivery_r158.RETAIL_D2C_DELIVERY_ORDER_ASSOCIATED_CART_ID, _r18)); });
    i0.ɵɵtext(22, "View Cart");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(23, "td")(24, "button", 56);
    i0.ɵɵlistener("click", function OrdersPendingListD2CIDCPOSComponent_tab_79_div_27_div_21_div_40_tr_31_Template_button_click_24_listener() { const restoredCtx = i0.ɵɵrestoreView(_r163); const homeDelivery_r158 = restoredCtx.$implicit; const ctx_r166 = i0.ɵɵnextContext(5); const _r14 = i0.ɵɵreference(87); return i0.ɵɵresetView(ctx_r166.viewInvoiceDetails(homeDelivery_r158.RETAIL_D2C_DELIVERY_RQSTD_ORDER_NUMBER, _r14)); });
    i0.ɵɵelement(25, "i", 61);
    i0.ɵɵtext(26, "Order Invoice");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(27, "td")(28, "button", 62);
    i0.ɵɵlistener("click", function OrdersPendingListD2CIDCPOSComponent_tab_79_div_27_div_21_div_40_tr_31_Template_button_click_28_listener() { const restoredCtx = i0.ɵɵrestoreView(_r163); const homeDelivery_r158 = restoredCtx.$implicit; const ctx_r167 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r167.viewOrderFulfillmentonStoreDashboard(homeDelivery_r158.RETAIL_D2C_DELIVERY_RQSTD_ORDER_NUMBER)); });
    i0.ɵɵelement(29, "i", 61);
    i0.ɵɵtext(30, "Fulfillment Details");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const homeDelivery_r158 = ctx.$implicit;
    const i_r159 = ctx.index;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i_r159 + 1);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(5, 6, homeDelivery_r158.RETAIL_D2C_DELIVERY_RQSTD_ALLOCATD_ON_PLATFORM_DATETIME, "medium"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(homeDelivery_r158.RETAIL_D2C_DELIVERY_RQSTD_ORDER_NUMBER);
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngIf", homeDelivery_r158.RETAIL_D2C_ORDER_PROCESSED_BY_STORE_DASHBOARD_FLAG == false);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", homeDelivery_r158.RETAIL_D2C_ORDER_PROCESSED_BY_STORE_DASHBOARD_FLAG == true);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(homeDelivery_r158.RETAIL_D2C_DELIVERY_ORDER_ASSOCIATED_CART_ID);
} }
function OrdersPendingListD2CIDCPOSComponent_tab_79_div_27_div_21_div_40_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 41);
    i0.ɵɵtemplate(1, OrdersPendingListD2CIDCPOSComponent_tab_79_div_27_div_21_div_40_div_1_Template, 8, 2, "div", 42);
    i0.ɵɵelementStart(2, "div", 43)(3, "div", 44)(4, "div", 45)(5, "table", 46)(6, "thead")(7, "tr")(8, "th", 47);
    i0.ɵɵtext(9, "Sr. No.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "th", 48);
    i0.ɵɵtext(11, "Date of Transaction ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "th");
    i0.ɵɵtext(13, "Confirmed");
    i0.ɵɵelement(14, "br");
    i0.ɵɵtext(15, " Order");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "th");
    i0.ɵɵtext(17, "Order Process");
    i0.ɵɵelement(18, "br");
    i0.ɵɵtext(19, " Workflow");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "th");
    i0.ɵɵtext(21, "Order Processed");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "th");
    i0.ɵɵtext(23, "Order Received");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "th", 49);
    i0.ɵɵtext(25, "Cart ID");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "th");
    i0.ɵɵtext(27, "View Invoice");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "th");
    i0.ɵɵtext(29, "View Details");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(30, "tbody");
    i0.ɵɵtemplate(31, OrdersPendingListD2CIDCPOSComponent_tab_79_div_27_div_21_div_40_tr_31_Template, 31, 9, "tr", 50);
    i0.ɵɵelementEnd()()()()()();
} if (rf & 2) {
    const ctx_r148 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r148.confirmDashboardData);
    i0.ɵɵadvance(30);
    i0.ɵɵproperty("ngForOf", ctx_r148.homeDeliveryOrderList);
} }
function OrdersPendingListD2CIDCPOSComponent_tab_79_div_27_div_21_div_41_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 37)(1, "div", 38)(2, "span");
    i0.ɵɵtext(3, "Delivery Type: Self Delivery");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 39);
    i0.ɵɵelement(5, "img", 40);
    i0.ɵɵelementStart(6, "span");
    i0.ɵɵtext(7, "Data Not Available!");
    i0.ɵɵelementEnd()()();
} }
function OrdersPendingListD2CIDCPOSComponent_tab_79_div_27_div_21_div_42_div_1_img_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 54);
} }
function OrdersPendingListD2CIDCPOSComponent_tab_79_div_27_div_21_div_42_div_1_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, "N/A");
} }
function OrdersPendingListD2CIDCPOSComponent_tab_79_div_27_div_21_div_42_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 38)(1, "span", 51);
    i0.ɵɵtext(2, "Delivery Type: Self Takeaway");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span", 51);
    i0.ɵɵtext(4, "Workflow Console Status: ");
    i0.ɵɵtemplate(5, OrdersPendingListD2CIDCPOSComponent_tab_79_div_27_div_21_div_42_div_1_img_5_Template, 1, 0, "img", 52);
    i0.ɵɵtemplate(6, OrdersPendingListD2CIDCPOSComponent_tab_79_div_27_div_21_div_42_div_1_ng_template_6_Template, 1, 0, "ng-template", null, 53, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const _r171 = i0.ɵɵreference(7);
    const ctx_r168 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", ctx_r168.confirmDashboardData.Store_Workflow_Available_Flag == true)("ngIfElse", _r171);
} }
function OrdersPendingListD2CIDCPOSComponent_tab_79_div_27_div_21_div_42_tr_31_img_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 40);
} }
function OrdersPendingListD2CIDCPOSComponent_tab_79_div_27_div_21_div_42_tr_31_img_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 54);
} }
function OrdersPendingListD2CIDCPOSComponent_tab_79_div_27_div_21_div_42_tr_31_Template(rf, ctx) { if (rf & 1) {
    const _r178 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr")(1, "td");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td");
    i0.ɵɵtext(4);
    i0.ɵɵpipe(5, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "td");
    i0.ɵɵtext(7);
    i0.ɵɵelementStart(8, "small", 63);
    i0.ɵɵtext(9, "view customer");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "td")(11, "button", 56);
    i0.ɵɵlistener("click", function OrdersPendingListD2CIDCPOSComponent_tab_79_div_27_div_21_div_42_tr_31_Template_button_click_11_listener() { const restoredCtx = i0.ɵɵrestoreView(_r178); const selfDelivery_r173 = restoredCtx.$implicit; const ctx_r177 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r177.processOrderWorkflow("selfDelivery", selfDelivery_r173.RETAIL_D2C_DELIVERY_RQSTD_ORDER_NUMBER)); });
    i0.ɵɵtext(12, "Process Order");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "td", 57);
    i0.ɵɵtemplate(14, OrdersPendingListD2CIDCPOSComponent_tab_79_div_27_div_21_div_42_tr_31_img_14_Template, 1, 0, "img", 58);
    i0.ɵɵtemplate(15, OrdersPendingListD2CIDCPOSComponent_tab_79_div_27_div_21_div_42_tr_31_img_15_Template, 1, 0, "img", 59);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "td", 57);
    i0.ɵɵelement(17, "img", 54);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "td");
    i0.ɵɵtext(19);
    i0.ɵɵelement(20, "br");
    i0.ɵɵelementStart(21, "small", 60);
    i0.ɵɵlistener("click", function OrdersPendingListD2CIDCPOSComponent_tab_79_div_27_div_21_div_42_tr_31_Template_small_click_21_listener() { const restoredCtx = i0.ɵɵrestoreView(_r178); const selfDelivery_r173 = restoredCtx.$implicit; const ctx_r179 = i0.ɵɵnextContext(5); const _r18 = i0.ɵɵreference(91); return i0.ɵɵresetView(ctx_r179.openCartModal(selfDelivery_r173.RETAIL_D2C_DELIVERY_ORDER_ASSOCIATED_CART_ID, _r18)); });
    i0.ɵɵtext(22, "View Cart");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(23, "td")(24, "button", 56);
    i0.ɵɵlistener("click", function OrdersPendingListD2CIDCPOSComponent_tab_79_div_27_div_21_div_42_tr_31_Template_button_click_24_listener() { const restoredCtx = i0.ɵɵrestoreView(_r178); const selfDelivery_r173 = restoredCtx.$implicit; const ctx_r180 = i0.ɵɵnextContext(5); const _r14 = i0.ɵɵreference(87); return i0.ɵɵresetView(ctx_r180.viewInvoiceDetails(selfDelivery_r173.RETAIL_D2C_DELIVERY_RQSTD_ORDER_NUMBER, _r14)); });
    i0.ɵɵelement(25, "i", 61);
    i0.ɵɵtext(26, "Order Invoice");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(27, "td")(28, "button", 62);
    i0.ɵɵlistener("click", function OrdersPendingListD2CIDCPOSComponent_tab_79_div_27_div_21_div_42_tr_31_Template_button_click_28_listener() { const restoredCtx = i0.ɵɵrestoreView(_r178); const selfDelivery_r173 = restoredCtx.$implicit; const ctx_r181 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r181.viewOrderFulfillmentonStoreDashboard(selfDelivery_r173.RETAIL_D2C_DELIVERY_RQSTD_ORDER_NUMBER)); });
    i0.ɵɵelement(29, "i", 61);
    i0.ɵɵtext(30, "Fulfillment Details");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const selfDelivery_r173 = ctx.$implicit;
    const i_r174 = ctx.index;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i_r174 + 1);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(5, 6, selfDelivery_r173.RETAIL_D2C_DELIVERY_RQSTD_ALLOCATD_ON_PLATFORM_DATETIME, "medium"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", selfDelivery_r173.RETAIL_D2C_DELIVERY_RQSTD_ORDER_NUMBER, " ");
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngIf", selfDelivery_r173.RETAIL_D2C_ORDER_PROCESSED_BY_STORE_DASHBOARD_FLAG == false);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", selfDelivery_r173.RETAIL_D2C_ORDER_PROCESSED_BY_STORE_DASHBOARD_FLAG == true);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(selfDelivery_r173.RETAIL_D2C_DELIVERY_ORDER_ASSOCIATED_CART_ID);
} }
function OrdersPendingListD2CIDCPOSComponent_tab_79_div_27_div_21_div_42_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 41);
    i0.ɵɵtemplate(1, OrdersPendingListD2CIDCPOSComponent_tab_79_div_27_div_21_div_42_div_1_Template, 8, 2, "div", 42);
    i0.ɵɵelementStart(2, "div", 43)(3, "div", 44)(4, "div", 45)(5, "table", 46)(6, "thead")(7, "tr")(8, "th", 47);
    i0.ɵɵtext(9, "Sr. No.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "th", 48);
    i0.ɵɵtext(11, "Date of Transaction ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "th");
    i0.ɵɵtext(13, "Confirmed");
    i0.ɵɵelement(14, "br");
    i0.ɵɵtext(15, " Order");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "th");
    i0.ɵɵtext(17, "Order Process");
    i0.ɵɵelement(18, "br");
    i0.ɵɵtext(19, " Workflow");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "th");
    i0.ɵɵtext(21, "Order Processed");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "th");
    i0.ɵɵtext(23, "Order Received");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "th");
    i0.ɵɵtext(25, "Cart ID");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "th");
    i0.ɵɵtext(27, "View Invoice");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "th");
    i0.ɵɵtext(29, "View Details");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(30, "tbody");
    i0.ɵɵtemplate(31, OrdersPendingListD2CIDCPOSComponent_tab_79_div_27_div_21_div_42_tr_31_Template, 31, 9, "tr", 50);
    i0.ɵɵelementEnd()()()()()();
} if (rf & 2) {
    const ctx_r150 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r150.confirmDashboardData);
    i0.ɵɵadvance(30);
    i0.ɵɵproperty("ngForOf", ctx_r150.selfDeliveryOrderList);
} }
const _c2 = function (a0) { return { "is-invalid": a0 }; };
const _c3 = function () { return { dateInputFormat: "DD/MM/YYYY" }; };
function OrdersPendingListD2CIDCPOSComponent_tab_79_div_27_div_21_Template(rf, ctx) { if (rf & 1) {
    const _r183 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 93)(1, "div", 38)(2, "span");
    i0.ɵɵtext(3, "Online Order Dashboard");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 43)(5, "div", 44)(6, "div", 70)(7, "form", 5);
    i0.ɵɵlistener("ngSubmit", function OrdersPendingListD2CIDCPOSComponent_tab_79_div_27_div_21_Template_form_ngSubmit_7_listener() { i0.ɵɵrestoreView(_r183); const ctx_r182 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r182.confirmDeliveryStatus(2)); });
    i0.ɵɵelementStart(8, "div", 6)(9, "div", 7)(10, "div", 8)(11, "label");
    i0.ɵɵtext(12, "Store");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "div", 9);
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(15, "div", 7)(16, "div", 8)(17, "label");
    i0.ɵɵtext(18, "From Date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "div", 10);
    i0.ɵɵelement(20, "input", 11);
    i0.ɵɵelementStart(21, "div", 12)(22, "span", 13);
    i0.ɵɵelement(23, "i", 14);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(24, OrdersPendingListD2CIDCPOSComponent_tab_79_div_27_div_21_div_24_Template, 2, 1, "div", 15);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(25, "div", 7)(26, "div", 8)(27, "label");
    i0.ɵɵtext(28, "To Date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(29, "div", 10);
    i0.ɵɵelement(30, "input", 16);
    i0.ɵɵelementStart(31, "div", 12)(32, "span", 13);
    i0.ɵɵelement(33, "i", 14);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(34, OrdersPendingListD2CIDCPOSComponent_tab_79_div_27_div_21_div_34_Template, 2, 1, "div", 15);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(35, "div", 6)(36, "div", 17)(37, "button", 18);
    i0.ɵɵtext(38, "Submit");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵtemplate(39, OrdersPendingListD2CIDCPOSComponent_tab_79_div_27_div_21_div_39_Template, 8, 0, "div", 19);
    i0.ɵɵtemplate(40, OrdersPendingListD2CIDCPOSComponent_tab_79_div_27_div_21_div_40_Template, 32, 2, "div", 20);
    i0.ɵɵtemplate(41, OrdersPendingListD2CIDCPOSComponent_tab_79_div_27_div_21_div_41_Template, 8, 0, "div", 19);
    i0.ɵɵtemplate(42, OrdersPendingListD2CIDCPOSComponent_tab_79_div_27_div_21_div_42_Template, 32, 2, "div", 20);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r119 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("formGroup", ctx_r119.confirmDashboardForm);
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate1(" ", ctx_r119.selectedChannel.RETAIL_D2C_SUBACCT_OFFICE_NAME, " ");
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(12, _c2, ctx_r119.isSubmitted && ctx_r119.f.SELECTED_DATE_FROM.errors))("bsConfig", i0.ɵɵpureFunction0(14, _c3));
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", ctx_r119.isSubmitted && ctx_r119.f.SELECTED_DATE_FROM.errors);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(15, _c2, ctx_r119.isSubmitted && ctx_r119.f.SELECTED_DATE_TO.errors))("bsConfig", i0.ɵɵpureFunction0(17, _c3));
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", ctx_r119.isSubmitted && ctx_r119.f.SELECTED_DATE_TO.errors);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", (ctx_r119.homeDeliveryOrderList2 == null ? null : ctx_r119.homeDeliveryOrderList2.length) == 0);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (ctx_r119.homeDeliveryOrderList2 == null ? null : ctx_r119.homeDeliveryOrderList2.length) > 0);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (ctx_r119.selfDeliveryOrderList2 == null ? null : ctx_r119.selfDeliveryOrderList2.length) == 0);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (ctx_r119.selfDeliveryOrderList2 == null ? null : ctx_r119.selfDeliveryOrderList2.length) > 0);
} }
function OrdersPendingListD2CIDCPOSComponent_tab_79_div_27_Template(rf, ctx) { if (rf & 1) {
    const _r185 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 84)(1, "h4");
    i0.ɵɵtext(2, "View Dashboard");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 6)(4, "div", 70)(5, "div", 6)(6, "div", 85)(7, "label", 86);
    i0.ɵɵtext(8, "Select Dashboard");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "select", 87);
    i0.ɵɵlistener("change", function OrdersPendingListD2CIDCPOSComponent_tab_79_div_27_Template_select_change_9_listener($event) { i0.ɵɵrestoreView(_r185); const ctx_r184 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r184.onDashboardSelect($event)); });
    i0.ɵɵelementStart(10, "option", 66);
    i0.ɵɵtext(11, "Select");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "option", 88);
    i0.ɵɵtext(13, "Online Order Dashboard ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "option", 89);
    i0.ɵɵtext(15, "Stocks Inventory Dashboard ");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(16, "div", 6)(17, "div", 90)(18, "button", 91);
    i0.ɵɵlistener("click", function OrdersPendingListD2CIDCPOSComponent_tab_79_div_27_Template_button_click_18_listener() { i0.ɵɵrestoreView(_r185); const ctx_r186 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r186.showDashboard()); });
    i0.ɵɵtext(19, "View");
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵtemplate(20, OrdersPendingListD2CIDCPOSComponent_tab_79_div_27_div_20_Template, 36, 5, "div", 92);
    i0.ɵɵtemplate(21, OrdersPendingListD2CIDCPOSComponent_tab_79_div_27_div_21_Template, 43, 18, "div", 92);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r92 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(20);
    i0.ɵɵproperty("ngIf", ctx_r92.showDash === "Stocks Inventory Dashboard");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r92.showDash === "Online Order Dashboard");
} }
function OrdersPendingListD2CIDCPOSComponent_tab_79_Template(rf, ctx) { if (rf & 1) {
    const _r188 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tab", 64)(1, "form")(2, "div", 6)(3, "div", 7)(4, "div", 8)(5, "label");
    i0.ɵɵtext(6, "Country");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "select", 65);
    i0.ɵɵlistener("change", function OrdersPendingListD2CIDCPOSComponent_tab_79_Template_select_change_7_listener($event) { i0.ɵɵrestoreView(_r188); const ctx_r187 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r187.changeCountry($event)); });
    i0.ɵɵelementStart(8, "option", 66);
    i0.ɵɵtext(9, "Select");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(10, OrdersPendingListD2CIDCPOSComponent_tab_79_option_10_Template, 2, 2, "option", 67);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(11, "div", 7)(12, "div", 8)(13, "label");
    i0.ɵɵtext(14, "State");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "select", 65);
    i0.ɵɵlistener("change", function OrdersPendingListD2CIDCPOSComponent_tab_79_Template_select_change_15_listener($event) { i0.ɵɵrestoreView(_r188); const ctx_r189 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r189.changeState($event)); });
    i0.ɵɵelementStart(16, "option", 66);
    i0.ɵɵtext(17, "Select");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(18, OrdersPendingListD2CIDCPOSComponent_tab_79_option_18_Template, 2, 2, "option", 67);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(19, "div", 6)(20, "div", 17)(21, "button", 23);
    i0.ɵɵlistener("click", function OrdersPendingListD2CIDCPOSComponent_tab_79_Template_button_click_21_listener() { i0.ɵɵrestoreView(_r188); const ctx_r190 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r190.onSecondNodeNetwork()); });
    i0.ɵɵtext(22, "Primary/Secondary Network");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵtemplate(23, OrdersPendingListD2CIDCPOSComponent_tab_79_div_23_Template, 8, 0, "div", 19);
    i0.ɵɵtemplate(24, OrdersPendingListD2CIDCPOSComponent_tab_79_div_24_Template, 30, 1, "div", 20);
    i0.ɵɵtemplate(25, OrdersPendingListD2CIDCPOSComponent_tab_79_div_25_Template, 8, 0, "div", 19);
    i0.ɵɵtemplate(26, OrdersPendingListD2CIDCPOSComponent_tab_79_div_26_Template, 28, 1, "div", 20);
    i0.ɵɵtemplate(27, OrdersPendingListD2CIDCPOSComponent_tab_79_div_27_Template, 22, 2, "div", 68);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r10 = i0.ɵɵnextContext();
    i0.ɵɵadvance(10);
    i0.ɵɵproperty("ngForOf", ctx_r10.countryList);
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("ngForOf", ctx_r10.stateList);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", ctx_r10.showNetworkList && (!ctx_r10.secondryNodeAccArr || ctx_r10.secondryNodeAccArr.length === 0));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r10.showNetworkList && (ctx_r10.secondryNodeAccArr == null ? null : ctx_r10.secondryNodeAccArr.length) > 0);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r10.showThirdNodeAcc && (!ctx_r10.thirdNodeAccArr || ctx_r10.thirdNodeAccArr.length === 0));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r10.showThirdNodeAcc && (ctx_r10.thirdNodeAccArr == null ? null : ctx_r10.thirdNodeAccArr.length) > 0);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r10.isShowView == true);
} }
function OrdersPendingListD2CIDCPOSComponent_tab_80_tabset_22_option_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 69);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const country_r200 = ctx.$implicit;
    i0.ɵɵproperty("value", country_r200.CNTRY_ID);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", country_r200.CNTRY_NM, " ");
} }
function OrdersPendingListD2CIDCPOSComponent_tab_80_tabset_22_div_12_option_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 69);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const state_r202 = ctx.$implicit;
    i0.ɵɵproperty("value", state_r202.STATE_ID);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", state_r202.STATE_NM, " ");
} }
function OrdersPendingListD2CIDCPOSComponent_tab_80_tabset_22_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r204 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 7)(1, "div", 8)(2, "label");
    i0.ɵɵtext(3, "State");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "select", 65);
    i0.ɵɵlistener("change", function OrdersPendingListD2CIDCPOSComponent_tab_80_tabset_22_div_12_Template_select_change_4_listener($event) { i0.ɵɵrestoreView(_r204); const ctx_r203 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r203.changeState($event)); });
    i0.ɵɵelementStart(5, "option", 66);
    i0.ɵɵtext(6, "Select");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, OrdersPendingListD2CIDCPOSComponent_tab_80_tabset_22_div_12_option_7_Template, 2, 2, "option", 67);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r197 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngForOf", ctx_r197.stateList);
} }
function OrdersPendingListD2CIDCPOSComponent_tab_80_tabset_22_div_13_option_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 69);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const city_r206 = ctx.$implicit;
    i0.ɵɵproperty("value", city_r206.CITY_ID);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", city_r206.CITY_NM, " ");
} }
function OrdersPendingListD2CIDCPOSComponent_tab_80_tabset_22_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r208 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 7)(1, "div", 8)(2, "label");
    i0.ɵɵtext(3, "City");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "select", 65);
    i0.ɵɵlistener("change", function OrdersPendingListD2CIDCPOSComponent_tab_80_tabset_22_div_13_Template_select_change_4_listener($event) { i0.ɵɵrestoreView(_r208); const ctx_r207 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r207.changeCity($event)); });
    i0.ɵɵelementStart(5, "option", 66);
    i0.ɵɵtext(6, "Select");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, OrdersPendingListD2CIDCPOSComponent_tab_80_tabset_22_div_13_option_7_Template, 2, 2, "option", 67);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r198 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngForOf", ctx_r198.cityList);
} }
function OrdersPendingListD2CIDCPOSComponent_tab_80_tabset_22_div_37_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 37);
    i0.ɵɵelement(1, "div", 38);
    i0.ɵɵelementStart(2, "div", 39);
    i0.ɵɵelement(3, "img", 40);
    i0.ɵɵelementStart(4, "span");
    i0.ɵɵtext(5, "Data Not Available!");
    i0.ɵɵelementEnd()()();
} }
function OrdersPendingListD2CIDCPOSComponent_tab_80_tabset_22_Template(rf, ctx) { if (rf & 1) {
    const _r210 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tabset")(1, "tab", 142)(2, "form")(3, "div", 6)(4, "div", 7)(5, "div", 8)(6, "label");
    i0.ɵɵtext(7, "Country");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "select", 65);
    i0.ɵɵlistener("change", function OrdersPendingListD2CIDCPOSComponent_tab_80_tabset_22_Template_select_change_8_listener($event) { i0.ɵɵrestoreView(_r210); const ctx_r209 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r209.changeCountry($event)); });
    i0.ɵɵelementStart(9, "option", 66);
    i0.ɵɵtext(10, "Select");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(11, OrdersPendingListD2CIDCPOSComponent_tab_80_tabset_22_option_11_Template, 2, 2, "option", 67);
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(12, OrdersPendingListD2CIDCPOSComponent_tab_80_tabset_22_div_12_Template, 8, 1, "div", 143);
    i0.ɵɵtemplate(13, OrdersPendingListD2CIDCPOSComponent_tab_80_tabset_22_div_13_Template, 8, 1, "div", 143);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "div", 6)(15, "div", 7)(16, "div", 8)(17, "label");
    i0.ɵɵtext(18, "From Date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "div", 10);
    i0.ɵɵelement(20, "input", 144);
    i0.ɵɵelementStart(21, "div", 12)(22, "span", 13);
    i0.ɵɵelement(23, "i", 14);
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(24, "div", 7)(25, "div", 8)(26, "label");
    i0.ɵɵtext(27, "To Date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "div", 10);
    i0.ɵɵelement(29, "input", 144);
    i0.ɵɵelementStart(30, "div", 12)(31, "span", 13);
    i0.ɵɵelement(32, "i", 14);
    i0.ɵɵelementEnd()()()()()();
    i0.ɵɵelementStart(33, "div", 6)(34, "div", 17)(35, "button", 23);
    i0.ɵɵlistener("click", function OrdersPendingListD2CIDCPOSComponent_tab_80_tabset_22_Template_button_click_35_listener() { i0.ɵɵrestoreView(_r210); const ctx_r211 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r211.showAnalysis("Geo Based")); });
    i0.ɵɵtext(36, "Generate");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵtemplate(37, OrdersPendingListD2CIDCPOSComponent_tab_80_tabset_22_div_37_Template, 6, 0, "div", 19);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(38, "tab", 145);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r191 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(11);
    i0.ɵɵproperty("ngForOf", ctx_r191.countryList);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r191.basedOnSelectionGeo === "state" || ctx_r191.basedOnSelectionGeo === "city");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r191.basedOnSelectionGeo === "city");
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("bsConfig", i0.ɵɵpureFunction0(6, _c3));
    i0.ɵɵadvance(9);
    i0.ɵɵproperty("bsConfig", i0.ɵɵpureFunction0(7, _c3));
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("ngIf", ctx_r191.generateResGeoBased == true);
} }
function OrdersPendingListD2CIDCPOSComponent_tab_80_tabset_43_option_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 69);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const country_r217 = ctx.$implicit;
    i0.ɵɵproperty("value", country_r217.CNTRY_ID);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", country_r217.CNTRY_NM, " ");
} }
function OrdersPendingListD2CIDCPOSComponent_tab_80_tabset_43_div_12_option_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 69);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const state_r219 = ctx.$implicit;
    i0.ɵɵproperty("value", state_r219.STATE_ID);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", state_r219.STATE_NM, " ");
} }
function OrdersPendingListD2CIDCPOSComponent_tab_80_tabset_43_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r221 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 7)(1, "div", 8)(2, "label");
    i0.ɵɵtext(3, "State");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "select", 65);
    i0.ɵɵlistener("change", function OrdersPendingListD2CIDCPOSComponent_tab_80_tabset_43_div_12_Template_select_change_4_listener($event) { i0.ɵɵrestoreView(_r221); const ctx_r220 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r220.changeState($event)); });
    i0.ɵɵelementStart(5, "option", 66);
    i0.ɵɵtext(6, "Select");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, OrdersPendingListD2CIDCPOSComponent_tab_80_tabset_43_div_12_option_7_Template, 2, 2, "option", 67);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r213 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngForOf", ctx_r213.stateList);
} }
function OrdersPendingListD2CIDCPOSComponent_tab_80_tabset_43_div_13_option_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 69);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const city_r223 = ctx.$implicit;
    i0.ɵɵproperty("value", city_r223.CITY_ID);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", city_r223.CITY_NM, " ");
} }
function OrdersPendingListD2CIDCPOSComponent_tab_80_tabset_43_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r225 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 7)(1, "div", 8)(2, "label");
    i0.ɵɵtext(3, "City");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "select", 65);
    i0.ɵɵlistener("change", function OrdersPendingListD2CIDCPOSComponent_tab_80_tabset_43_div_13_Template_select_change_4_listener($event) { i0.ɵɵrestoreView(_r225); const ctx_r224 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r224.changeCity($event)); });
    i0.ɵɵelementStart(5, "option", 66);
    i0.ɵɵtext(6, "Select");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, OrdersPendingListD2CIDCPOSComponent_tab_80_tabset_43_div_13_option_7_Template, 2, 2, "option", 67);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r214 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngForOf", ctx_r214.cityList);
} }
function OrdersPendingListD2CIDCPOSComponent_tab_80_tabset_43_option_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 69);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const productline_r226 = ctx.$implicit;
    i0.ɵɵproperty("value", productline_r226.RETAIL_D2C_PRODUCT_ID);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", productline_r226.RETAIL_D2C_PRODUCT_NAME, " ");
} }
function OrdersPendingListD2CIDCPOSComponent_tab_80_tabset_43_div_46_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 37);
    i0.ɵɵelement(1, "div", 38);
    i0.ɵɵelementStart(2, "div", 39);
    i0.ɵɵelement(3, "img", 40);
    i0.ɵɵelementStart(4, "span");
    i0.ɵɵtext(5, "Data Not Available!");
    i0.ɵɵelementEnd()()();
} }
function OrdersPendingListD2CIDCPOSComponent_tab_80_tabset_43_Template(rf, ctx) { if (rf & 1) {
    const _r228 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tabset")(1, "tab", 142)(2, "form")(3, "div", 6)(4, "div", 7)(5, "div", 8)(6, "label");
    i0.ɵɵtext(7, "Country");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "select", 65);
    i0.ɵɵlistener("change", function OrdersPendingListD2CIDCPOSComponent_tab_80_tabset_43_Template_select_change_8_listener($event) { i0.ɵɵrestoreView(_r228); const ctx_r227 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r227.changeCountry($event)); });
    i0.ɵɵelementStart(9, "option", 66);
    i0.ɵɵtext(10, "Select");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(11, OrdersPendingListD2CIDCPOSComponent_tab_80_tabset_43_option_11_Template, 2, 2, "option", 67);
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(12, OrdersPendingListD2CIDCPOSComponent_tab_80_tabset_43_div_12_Template, 8, 1, "div", 143);
    i0.ɵɵtemplate(13, OrdersPendingListD2CIDCPOSComponent_tab_80_tabset_43_div_13_Template, 8, 1, "div", 143);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "div", 6)(15, "div", 7)(16, "div", 8)(17, "label");
    i0.ɵɵtext(18, "Product Line");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "select", 146)(20, "option", 97);
    i0.ɵɵtext(21, "Select");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(22, OrdersPendingListD2CIDCPOSComponent_tab_80_tabset_43_option_22_Template, 2, 2, "option", 67);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(23, "div", 6)(24, "div", 7)(25, "div", 8)(26, "label");
    i0.ɵɵtext(27, "From Date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "div", 10);
    i0.ɵɵelement(29, "input", 144);
    i0.ɵɵelementStart(30, "div", 12)(31, "span", 13);
    i0.ɵɵelement(32, "i", 14);
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(33, "div", 7)(34, "div", 8)(35, "label");
    i0.ɵɵtext(36, "To Date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(37, "div", 10);
    i0.ɵɵelement(38, "input", 144);
    i0.ɵɵelementStart(39, "div", 12)(40, "span", 13);
    i0.ɵɵelement(41, "i", 14);
    i0.ɵɵelementEnd()()()()()();
    i0.ɵɵelementStart(42, "div", 6)(43, "div", 17)(44, "button", 23);
    i0.ɵɵlistener("click", function OrdersPendingListD2CIDCPOSComponent_tab_80_tabset_43_Template_button_click_44_listener() { i0.ɵɵrestoreView(_r228); const ctx_r229 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r229.showAnalysis("Geo Product Based")); });
    i0.ɵɵtext(45, "Generate");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵtemplate(46, OrdersPendingListD2CIDCPOSComponent_tab_80_tabset_43_div_46_Template, 6, 0, "div", 19);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(47, "tab", 145);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r192 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(11);
    i0.ɵɵproperty("ngForOf", ctx_r192.countryList);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r192.basedOnSelectionGeoProduct === "state" || ctx_r192.basedOnSelectionGeoProduct === "city");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r192.basedOnSelectionGeoProduct === "city");
    i0.ɵɵadvance(9);
    i0.ɵɵproperty("ngForOf", ctx_r192.productLineList);
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("bsConfig", i0.ɵɵpureFunction0(7, _c3));
    i0.ɵɵadvance(9);
    i0.ɵɵproperty("bsConfig", i0.ɵɵpureFunction0(8, _c3));
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("ngIf", ctx_r192.generateResGeoProductBased == true);
} }
function OrdersPendingListD2CIDCPOSComponent_tab_80_tabset_64_option_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 69);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const country_r236 = ctx.$implicit;
    i0.ɵɵproperty("value", country_r236.CNTRY_ID);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", country_r236.CNTRY_NM, " ");
} }
function OrdersPendingListD2CIDCPOSComponent_tab_80_tabset_64_div_12_option_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 69);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const state_r238 = ctx.$implicit;
    i0.ɵɵproperty("value", state_r238.STATE_ID);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", state_r238.STATE_NM, " ");
} }
function OrdersPendingListD2CIDCPOSComponent_tab_80_tabset_64_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r240 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 7)(1, "div", 8)(2, "label");
    i0.ɵɵtext(3, "State");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "select", 65);
    i0.ɵɵlistener("change", function OrdersPendingListD2CIDCPOSComponent_tab_80_tabset_64_div_12_Template_select_change_4_listener($event) { i0.ɵɵrestoreView(_r240); const ctx_r239 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r239.changeState($event)); });
    i0.ɵɵelementStart(5, "option", 66);
    i0.ɵɵtext(6, "Select");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, OrdersPendingListD2CIDCPOSComponent_tab_80_tabset_64_div_12_option_7_Template, 2, 2, "option", 67);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r231 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngForOf", ctx_r231.stateList);
} }
function OrdersPendingListD2CIDCPOSComponent_tab_80_tabset_64_div_13_option_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 69);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const city_r242 = ctx.$implicit;
    i0.ɵɵproperty("value", city_r242.CITY_ID);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", city_r242.CITY_NM, " ");
} }
function OrdersPendingListD2CIDCPOSComponent_tab_80_tabset_64_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r244 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 7)(1, "div", 8)(2, "label");
    i0.ɵɵtext(3, "City");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "select", 65);
    i0.ɵɵlistener("change", function OrdersPendingListD2CIDCPOSComponent_tab_80_tabset_64_div_13_Template_select_change_4_listener($event) { i0.ɵɵrestoreView(_r244); const ctx_r243 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r243.changeCity($event)); });
    i0.ɵɵelementStart(5, "option", 66);
    i0.ɵɵtext(6, "Select");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, OrdersPendingListD2CIDCPOSComponent_tab_80_tabset_64_div_13_option_7_Template, 2, 2, "option", 67);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r232 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngForOf", ctx_r232.cityList);
} }
function OrdersPendingListD2CIDCPOSComponent_tab_80_tabset_64_option_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 69);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const productline_r245 = ctx.$implicit;
    i0.ɵɵproperty("value", productline_r245.RETAIL_D2C_PRODUCT_ID);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", productline_r245.RETAIL_D2C_PRODUCT_NAME, " ");
} }
function OrdersPendingListD2CIDCPOSComponent_tab_80_tabset_64_option_30_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 102);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const productItem_r246 = ctx.$implicit;
    i0.ɵɵproperty("ngValue", productItem_r246.RETAIL_D2C_ITEM_ID);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", productItem_r246.RETAIL_D2C_ITEM_NAME, " ");
} }
function OrdersPendingListD2CIDCPOSComponent_tab_80_tabset_64_div_54_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 37);
    i0.ɵɵelement(1, "div", 38);
    i0.ɵɵelementStart(2, "div", 39);
    i0.ɵɵelement(3, "img", 40);
    i0.ɵɵelementStart(4, "span");
    i0.ɵɵtext(5, "Data Not Available!");
    i0.ɵɵelementEnd()()();
} }
function OrdersPendingListD2CIDCPOSComponent_tab_80_tabset_64_Template(rf, ctx) { if (rf & 1) {
    const _r248 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tabset")(1, "tab", 142)(2, "form")(3, "div", 6)(4, "div", 7)(5, "div", 8)(6, "label");
    i0.ɵɵtext(7, "Country");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "select", 65);
    i0.ɵɵlistener("change", function OrdersPendingListD2CIDCPOSComponent_tab_80_tabset_64_Template_select_change_8_listener($event) { i0.ɵɵrestoreView(_r248); const ctx_r247 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r247.changeCountry($event)); });
    i0.ɵɵelementStart(9, "option", 66);
    i0.ɵɵtext(10, "Select");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(11, OrdersPendingListD2CIDCPOSComponent_tab_80_tabset_64_option_11_Template, 2, 2, "option", 67);
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(12, OrdersPendingListD2CIDCPOSComponent_tab_80_tabset_64_div_12_Template, 8, 1, "div", 143);
    i0.ɵɵtemplate(13, OrdersPendingListD2CIDCPOSComponent_tab_80_tabset_64_div_13_Template, 8, 1, "div", 143);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "div", 6)(15, "div", 7)(16, "div", 8)(17, "label");
    i0.ɵɵtext(18, "Product Line");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "select", 65);
    i0.ɵɵlistener("change", function OrdersPendingListD2CIDCPOSComponent_tab_80_tabset_64_Template_select_change_19_listener($event) { i0.ɵɵrestoreView(_r248); const ctx_r249 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r249.onSelectProductLine($event)); });
    i0.ɵɵelementStart(20, "option", 97);
    i0.ɵɵtext(21, "Select");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(22, OrdersPendingListD2CIDCPOSComponent_tab_80_tabset_64_option_22_Template, 2, 2, "option", 67);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(23, "div", 7)(24, "div", 8)(25, "label");
    i0.ɵɵtext(26, "Item");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "select", 146)(28, "option", 97);
    i0.ɵɵtext(29, "Select");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(30, OrdersPendingListD2CIDCPOSComponent_tab_80_tabset_64_option_30_Template, 2, 2, "option", 98);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(31, "div", 6)(32, "div", 7)(33, "div", 8)(34, "label");
    i0.ɵɵtext(35, "From Date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(36, "div", 10);
    i0.ɵɵelement(37, "input", 144);
    i0.ɵɵelementStart(38, "div", 12)(39, "span", 13);
    i0.ɵɵelement(40, "i", 14);
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(41, "div", 7)(42, "div", 8)(43, "label");
    i0.ɵɵtext(44, "To Date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(45, "div", 10);
    i0.ɵɵelement(46, "input", 144);
    i0.ɵɵelementStart(47, "div", 12)(48, "span", 13);
    i0.ɵɵelement(49, "i", 14);
    i0.ɵɵelementEnd()()()()()();
    i0.ɵɵelementStart(50, "div", 6)(51, "div", 17)(52, "button", 23);
    i0.ɵɵlistener("click", function OrdersPendingListD2CIDCPOSComponent_tab_80_tabset_64_Template_button_click_52_listener() { i0.ɵɵrestoreView(_r248); const ctx_r250 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r250.showAnalysis("Item Based")); });
    i0.ɵɵtext(53, "Generate");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵtemplate(54, OrdersPendingListD2CIDCPOSComponent_tab_80_tabset_64_div_54_Template, 6, 0, "div", 19);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(55, "tab", 145);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r193 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(11);
    i0.ɵɵproperty("ngForOf", ctx_r193.countryList);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r193.basedOnSelectionItem === "state" || ctx_r193.basedOnSelectionItem === "city");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r193.basedOnSelectionItem === "city");
    i0.ɵɵadvance(9);
    i0.ɵɵproperty("ngForOf", ctx_r193.productLineList);
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("ngForOf", ctx_r193.itemListsforitembased);
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("bsConfig", i0.ɵɵpureFunction0(8, _c3));
    i0.ɵɵadvance(9);
    i0.ɵɵproperty("bsConfig", i0.ɵɵpureFunction0(9, _c3));
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("ngIf", ctx_r193.generateResItemBased == true);
} }
function OrdersPendingListD2CIDCPOSComponent_tab_80_tabset_81_option_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 69);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const country_r255 = ctx.$implicit;
    i0.ɵɵproperty("value", country_r255.CNTRY_ID);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", country_r255.CNTRY_NM, " ");
} }
function OrdersPendingListD2CIDCPOSComponent_tab_80_tabset_81_div_12_option_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 69);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const state_r257 = ctx.$implicit;
    i0.ɵɵproperty("value", state_r257.STATE_ID);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", state_r257.STATE_NM, " ");
} }
function OrdersPendingListD2CIDCPOSComponent_tab_80_tabset_81_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r259 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 7)(1, "div", 8)(2, "label");
    i0.ɵɵtext(3, "State");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "select", 65);
    i0.ɵɵlistener("change", function OrdersPendingListD2CIDCPOSComponent_tab_80_tabset_81_div_12_Template_select_change_4_listener($event) { i0.ɵɵrestoreView(_r259); const ctx_r258 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r258.getChannel($event, 2)); });
    i0.ɵɵelementStart(5, "option", 66);
    i0.ɵɵtext(6, "Select");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, OrdersPendingListD2CIDCPOSComponent_tab_80_tabset_81_div_12_option_7_Template, 2, 2, "option", 67);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r252 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngForOf", ctx_r252.stateList);
} }
function OrdersPendingListD2CIDCPOSComponent_tab_80_tabset_81_option_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 69);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r260 = ctx.$implicit;
    i0.ɵɵproperty("value", item_r260.SECOND_NODE_ACCT_SUBACCT_ID);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", item_r260.RETAIL_D2C_SUBACCT_OFFICE_NAME, " ");
} }
function OrdersPendingListD2CIDCPOSComponent_tab_80_tabset_81_div_45_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 37);
    i0.ɵɵelement(1, "div", 38);
    i0.ɵɵelementStart(2, "div", 39);
    i0.ɵɵelement(3, "img", 40);
    i0.ɵɵelementStart(4, "span");
    i0.ɵɵtext(5, "Data Not Available!");
    i0.ɵɵelementEnd()()();
} }
function OrdersPendingListD2CIDCPOSComponent_tab_80_tabset_81_Template(rf, ctx) { if (rf & 1) {
    const _r262 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tabset")(1, "tab", 142)(2, "form")(3, "div", 6)(4, "div", 7)(5, "div", 8)(6, "label");
    i0.ɵɵtext(7, "Country");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "select", 65);
    i0.ɵɵlistener("change", function OrdersPendingListD2CIDCPOSComponent_tab_80_tabset_81_Template_select_change_8_listener($event) { i0.ɵɵrestoreView(_r262); const ctx_r261 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r261.changeCountry($event)); });
    i0.ɵɵelementStart(9, "option", 66);
    i0.ɵɵtext(10, "Select");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(11, OrdersPendingListD2CIDCPOSComponent_tab_80_tabset_81_option_11_Template, 2, 2, "option", 67);
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(12, OrdersPendingListD2CIDCPOSComponent_tab_80_tabset_81_div_12_Template, 8, 1, "div", 143);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "div", 6)(14, "div", 7)(15, "div", 8)(16, "label");
    i0.ɵɵtext(17, "Channel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "select", 146)(19, "option", 66);
    i0.ɵɵtext(20, "Select");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(21, OrdersPendingListD2CIDCPOSComponent_tab_80_tabset_81_option_21_Template, 2, 2, "option", 67);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(22, "div", 6)(23, "div", 7)(24, "div", 8)(25, "label");
    i0.ɵɵtext(26, "From Date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "div", 10);
    i0.ɵɵelement(28, "input", 144);
    i0.ɵɵelementStart(29, "div", 12)(30, "span", 13);
    i0.ɵɵelement(31, "i", 14);
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(32, "div", 7)(33, "div", 8)(34, "label");
    i0.ɵɵtext(35, "To Date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(36, "div", 10);
    i0.ɵɵelement(37, "input", 144);
    i0.ɵɵelementStart(38, "div", 12)(39, "span", 13);
    i0.ɵɵelement(40, "i", 14);
    i0.ɵɵelementEnd()()()()()();
    i0.ɵɵelementStart(41, "div", 6)(42, "div", 17)(43, "button", 23);
    i0.ɵɵlistener("click", function OrdersPendingListD2CIDCPOSComponent_tab_80_tabset_81_Template_button_click_43_listener() { i0.ɵɵrestoreView(_r262); const ctx_r263 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r263.showAnalysis("Channel Based")); });
    i0.ɵɵtext(44, "Generate");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵtemplate(45, OrdersPendingListD2CIDCPOSComponent_tab_80_tabset_81_div_45_Template, 6, 0, "div", 19);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(46, "tab", 145);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r194 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(11);
    i0.ɵɵproperty("ngForOf", ctx_r194.countryList);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r194.basedOnSelectionChannel === "state" || ctx_r194.basedOnSelectionChannel === "city");
    i0.ɵɵadvance(9);
    i0.ɵɵproperty("ngForOf", ctx_r194.secondryNodeAccArr2);
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("bsConfig", i0.ɵɵpureFunction0(6, _c3));
    i0.ɵɵadvance(9);
    i0.ɵɵproperty("bsConfig", i0.ɵɵpureFunction0(7, _c3));
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("ngIf", ctx_r194.generateResChannelBased == true);
} }
function OrdersPendingListD2CIDCPOSComponent_tab_80_tabset_98_option_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 69);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const country_r269 = ctx.$implicit;
    i0.ɵɵproperty("value", country_r269.CNTRY_ID);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", country_r269.CNTRY_NM, " ");
} }
function OrdersPendingListD2CIDCPOSComponent_tab_80_tabset_98_div_12_option_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 69);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const state_r271 = ctx.$implicit;
    i0.ɵɵproperty("value", state_r271.STATE_ID);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", state_r271.STATE_NM, " ");
} }
function OrdersPendingListD2CIDCPOSComponent_tab_80_tabset_98_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r273 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 7)(1, "div", 8)(2, "label");
    i0.ɵɵtext(3, "State");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "select", 65);
    i0.ɵɵlistener("change", function OrdersPendingListD2CIDCPOSComponent_tab_80_tabset_98_div_12_Template_select_change_4_listener($event) { i0.ɵɵrestoreView(_r273); const ctx_r272 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r272.getChannel($event, 3)); });
    i0.ɵɵelementStart(5, "option", 66);
    i0.ɵɵtext(6, "Select");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, OrdersPendingListD2CIDCPOSComponent_tab_80_tabset_98_div_12_option_7_Template, 2, 2, "option", 67);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r265 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngForOf", ctx_r265.stateList);
} }
function OrdersPendingListD2CIDCPOSComponent_tab_80_tabset_98_option_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 69);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r274 = ctx.$implicit;
    const ctx_r266 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("value", ctx_r266.toChannelValue(item_r274));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", item_r274.RETAIL_D2C_SUBACCT_OFFICE_NAME, " ");
} }
function OrdersPendingListD2CIDCPOSComponent_tab_80_tabset_98_option_42_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 69);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r275 = ctx.$implicit;
    i0.ɵɵproperty("value", item_r275.RoleName);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", item_r275.RoleName, " ");
} }
function OrdersPendingListD2CIDCPOSComponent_tab_80_tabset_98_div_66_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 37);
    i0.ɵɵelement(1, "div", 38);
    i0.ɵɵelementStart(2, "div", 39);
    i0.ɵɵelement(3, "img", 40);
    i0.ɵɵelementStart(4, "span");
    i0.ɵɵtext(5, "Data Not Available!");
    i0.ɵɵelementEnd()()();
} }
function OrdersPendingListD2CIDCPOSComponent_tab_80_tabset_98_Template(rf, ctx) { if (rf & 1) {
    const _r277 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tabset")(1, "tab", 142)(2, "form")(3, "div", 6)(4, "div", 7)(5, "div", 8)(6, "label");
    i0.ɵɵtext(7, "Country");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "select", 65);
    i0.ɵɵlistener("change", function OrdersPendingListD2CIDCPOSComponent_tab_80_tabset_98_Template_select_change_8_listener($event) { i0.ɵɵrestoreView(_r277); const ctx_r276 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r276.changeCountry($event)); });
    i0.ɵɵelementStart(9, "option", 66);
    i0.ɵɵtext(10, "Select");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(11, OrdersPendingListD2CIDCPOSComponent_tab_80_tabset_98_option_11_Template, 2, 2, "option", 67);
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(12, OrdersPendingListD2CIDCPOSComponent_tab_80_tabset_98_div_12_Template, 8, 1, "div", 143);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "div", 6)(14, "div", 7)(15, "div", 8)(16, "label");
    i0.ɵɵtext(17, "Channel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "select", 65);
    i0.ɵɵlistener("change", function OrdersPendingListD2CIDCPOSComponent_tab_80_tabset_98_Template_select_change_18_listener($event) { i0.ɵɵrestoreView(_r277); const ctx_r278 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r278.onChannelChange($event)); });
    i0.ɵɵelementStart(19, "option", 66);
    i0.ɵɵtext(20, "Select");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(21, OrdersPendingListD2CIDCPOSComponent_tab_80_tabset_98_option_21_Template, 2, 2, "option", 67);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(22, "div", 7)(23, "div", 8)(24, "label");
    i0.ɵɵtext(25, "Account Category For");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "select", 65);
    i0.ɵɵlistener("change", function OrdersPendingListD2CIDCPOSComponent_tab_80_tabset_98_Template_select_change_26_listener($event) { i0.ɵɵrestoreView(_r277); const ctx_r279 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r279.onAccountCategoryChange($event)); });
    i0.ɵɵelementStart(27, "option", 66);
    i0.ɵɵtext(28, "Select");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(29, "option", 147);
    i0.ɵɵtext(30, "Primary");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(31, "option", 148);
    i0.ɵɵtext(32, "Secondary");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(33, "option", 149);
    i0.ɵɵtext(34, "Tertiary");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(35, "div", 7)(36, "div", 8)(37, "label");
    i0.ɵɵtext(38, "SFA");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(39, "select", 146)(40, "option", 66);
    i0.ɵɵtext(41, "Select");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(42, OrdersPendingListD2CIDCPOSComponent_tab_80_tabset_98_option_42_Template, 2, 2, "option", 67);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(43, "div", 6)(44, "div", 7)(45, "div", 8)(46, "label");
    i0.ɵɵtext(47, "From Date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(48, "div", 10);
    i0.ɵɵelement(49, "input", 144);
    i0.ɵɵelementStart(50, "div", 12)(51, "span", 13);
    i0.ɵɵelement(52, "i", 14);
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(53, "div", 7)(54, "div", 8)(55, "label");
    i0.ɵɵtext(56, "To Date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(57, "div", 10);
    i0.ɵɵelement(58, "input", 144);
    i0.ɵɵelementStart(59, "div", 12)(60, "span", 13);
    i0.ɵɵelement(61, "i", 14);
    i0.ɵɵelementEnd()()()()()();
    i0.ɵɵelementStart(62, "div", 6)(63, "div", 17)(64, "button", 23);
    i0.ɵɵlistener("click", function OrdersPendingListD2CIDCPOSComponent_tab_80_tabset_98_Template_button_click_64_listener() { i0.ɵɵrestoreView(_r277); const ctx_r280 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r280.showAnalysis("SFA Exec Based")); });
    i0.ɵɵtext(65, "Generate");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵtemplate(66, OrdersPendingListD2CIDCPOSComponent_tab_80_tabset_98_div_66_Template, 6, 0, "div", 19);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(67, "tab", 145);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r195 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(11);
    i0.ɵɵproperty("ngForOf", ctx_r195.countryList);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r195.basedOnSelectionSFAExec === "state" || ctx_r195.basedOnSelectionSFAExec === "city");
    i0.ɵɵadvance(9);
    i0.ɵɵproperty("ngForOf", ctx_r195.secondryNodeAccArr3);
    i0.ɵɵadvance(21);
    i0.ɵɵproperty("ngForOf", ctx_r195.sfaAccountArr);
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("bsConfig", i0.ɵɵpureFunction0(7, _c3));
    i0.ɵɵadvance(9);
    i0.ɵɵproperty("bsConfig", i0.ɵɵpureFunction0(8, _c3));
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("ngIf", ctx_r195.generateResSFAExecBased == true);
} }
function OrdersPendingListD2CIDCPOSComponent_tab_80_Template(rf, ctx) { if (rf & 1) {
    const _r282 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tab", 132)(1, "tabset")(2, "tab", 133);
    i0.ɵɵlistener("selectTab", function OrdersPendingListD2CIDCPOSComponent_tab_80_Template_tab_selectTab_2_listener() { i0.ɵɵrestoreView(_r282); const ctx_r281 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r281.onSATabChange("Geo Based")); });
    i0.ɵɵelementStart(3, "form")(4, "div", 6)(5, "div", 7)(6, "div", 8)(7, "label");
    i0.ɵɵtext(8, "Based On");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "select", 65);
    i0.ɵɵlistener("change", function OrdersPendingListD2CIDCPOSComponent_tab_80_Template_select_change_9_listener($event) { i0.ɵɵrestoreView(_r282); const ctx_r283 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r283.onSelectBasedOn($event, "Geo Based")); });
    i0.ɵɵelementStart(10, "option", 134);
    i0.ɵɵtext(11, "Select");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "option", 135);
    i0.ɵɵtext(13, "Based on Country Wide");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "option", 136);
    i0.ɵɵtext(15, "Based on State Wide");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "option", 137);
    i0.ɵɵtext(17, "Based on City Wide");
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(18, "div", 6)(19, "div", 17)(20, "button", 23);
    i0.ɵɵlistener("click", function OrdersPendingListD2CIDCPOSComponent_tab_80_Template_button_click_20_listener() { i0.ɵɵrestoreView(_r282); const ctx_r284 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r284.showSaForm("Geo Based")); });
    i0.ɵɵtext(21, "Submit");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵtemplate(22, OrdersPendingListD2CIDCPOSComponent_tab_80_tabset_22_Template, 39, 8, "tabset", 36);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "tab", 138);
    i0.ɵɵlistener("selectTab", function OrdersPendingListD2CIDCPOSComponent_tab_80_Template_tab_selectTab_23_listener() { i0.ɵɵrestoreView(_r282); const ctx_r285 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r285.onSATabChange("Geo Product Based")); });
    i0.ɵɵelementStart(24, "form")(25, "div", 6)(26, "div", 7)(27, "div", 8)(28, "label");
    i0.ɵɵtext(29, "Based On");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "select", 65);
    i0.ɵɵlistener("change", function OrdersPendingListD2CIDCPOSComponent_tab_80_Template_select_change_30_listener($event) { i0.ɵɵrestoreView(_r282); const ctx_r286 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r286.onSelectBasedOn($event, "Geo Product Based")); });
    i0.ɵɵelementStart(31, "option", 134);
    i0.ɵɵtext(32, "Select");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(33, "option", 135);
    i0.ɵɵtext(34, "Based on Country Wide");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(35, "option", 136);
    i0.ɵɵtext(36, "Based on State Wide");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(37, "option", 137);
    i0.ɵɵtext(38, "Based on City Wide");
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(39, "div", 6)(40, "div", 17)(41, "button", 23);
    i0.ɵɵlistener("click", function OrdersPendingListD2CIDCPOSComponent_tab_80_Template_button_click_41_listener() { i0.ɵɵrestoreView(_r282); const ctx_r287 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r287.showSaForm("Geo Product Based")); });
    i0.ɵɵtext(42, "Submit");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵtemplate(43, OrdersPendingListD2CIDCPOSComponent_tab_80_tabset_43_Template, 48, 9, "tabset", 36);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(44, "tab", 139);
    i0.ɵɵlistener("selectTab", function OrdersPendingListD2CIDCPOSComponent_tab_80_Template_tab_selectTab_44_listener() { i0.ɵɵrestoreView(_r282); const ctx_r288 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r288.onSATabChange("Item Based")); });
    i0.ɵɵelementStart(45, "form")(46, "div", 6)(47, "div", 7)(48, "div", 8)(49, "label");
    i0.ɵɵtext(50, "Based On");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(51, "select", 65);
    i0.ɵɵlistener("change", function OrdersPendingListD2CIDCPOSComponent_tab_80_Template_select_change_51_listener($event) { i0.ɵɵrestoreView(_r282); const ctx_r289 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r289.onSelectBasedOn($event, "Item Based")); });
    i0.ɵɵelementStart(52, "option", 134);
    i0.ɵɵtext(53, "Select");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(54, "option", 135);
    i0.ɵɵtext(55, "Based on Country Wide");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(56, "option", 136);
    i0.ɵɵtext(57, "Based on State Wide");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(58, "option", 137);
    i0.ɵɵtext(59, "Based on City Wide");
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(60, "div", 6)(61, "div", 17)(62, "button", 23);
    i0.ɵɵlistener("click", function OrdersPendingListD2CIDCPOSComponent_tab_80_Template_button_click_62_listener() { i0.ɵɵrestoreView(_r282); const ctx_r290 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r290.showSaForm("Item Based")); });
    i0.ɵɵtext(63, "Submit");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵtemplate(64, OrdersPendingListD2CIDCPOSComponent_tab_80_tabset_64_Template, 56, 10, "tabset", 36);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(65, "tab", 140);
    i0.ɵɵlistener("selectTab", function OrdersPendingListD2CIDCPOSComponent_tab_80_Template_tab_selectTab_65_listener() { i0.ɵɵrestoreView(_r282); const ctx_r291 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r291.onSATabChange("Channel Based")); });
    i0.ɵɵelementStart(66, "form")(67, "div", 6)(68, "div", 7)(69, "div", 8)(70, "label");
    i0.ɵɵtext(71, "Based On");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(72, "select", 65);
    i0.ɵɵlistener("change", function OrdersPendingListD2CIDCPOSComponent_tab_80_Template_select_change_72_listener($event) { i0.ɵɵrestoreView(_r282); const ctx_r292 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r292.onSelectBasedOn($event, "Channel Based")); });
    i0.ɵɵelementStart(73, "option", 134);
    i0.ɵɵtext(74, "Select");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(75, "option", 136);
    i0.ɵɵtext(76, "Based on State Wide");
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(77, "div", 6)(78, "div", 17)(79, "button", 23);
    i0.ɵɵlistener("click", function OrdersPendingListD2CIDCPOSComponent_tab_80_Template_button_click_79_listener() { i0.ɵɵrestoreView(_r282); const ctx_r293 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r293.showSaForm("Channel Based")); });
    i0.ɵɵtext(80, "Submit");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵtemplate(81, OrdersPendingListD2CIDCPOSComponent_tab_80_tabset_81_Template, 47, 8, "tabset", 36);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(82, "tab", 141);
    i0.ɵɵlistener("selectTab", function OrdersPendingListD2CIDCPOSComponent_tab_80_Template_tab_selectTab_82_listener() { i0.ɵɵrestoreView(_r282); const ctx_r294 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r294.onSATabChange("SFA Exec Based")); });
    i0.ɵɵelementStart(83, "form")(84, "div", 6)(85, "div", 7)(86, "div", 8)(87, "label");
    i0.ɵɵtext(88, "Based On");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(89, "select", 65);
    i0.ɵɵlistener("change", function OrdersPendingListD2CIDCPOSComponent_tab_80_Template_select_change_89_listener($event) { i0.ɵɵrestoreView(_r282); const ctx_r295 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r295.onSelectBasedOn($event, "SFA Exec Based")); });
    i0.ɵɵelementStart(90, "option", 134);
    i0.ɵɵtext(91, "Select");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(92, "option", 136);
    i0.ɵɵtext(93, "Based on State Wide");
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(94, "div", 6)(95, "div", 17)(96, "button", 23);
    i0.ɵɵlistener("click", function OrdersPendingListD2CIDCPOSComponent_tab_80_Template_button_click_96_listener() { i0.ɵɵrestoreView(_r282); const ctx_r296 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r296.showSaForm("SFA Exec Based")); });
    i0.ɵɵtext(97, "Submit");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵtemplate(98, OrdersPendingListD2CIDCPOSComponent_tab_80_tabset_98_Template, 68, 9, "tabset", 36);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r11 = i0.ɵɵnextContext();
    i0.ɵɵadvance(22);
    i0.ɵɵproperty("ngIf", ctx_r11.showSAFormGeo == true);
    i0.ɵɵadvance(21);
    i0.ɵɵproperty("ngIf", ctx_r11.showSAFormGeoProduct == true);
    i0.ɵɵadvance(21);
    i0.ɵɵproperty("ngIf", ctx_r11.showSAFormItem == true);
    i0.ɵɵadvance(17);
    i0.ɵɵproperty("ngIf", ctx_r11.showSAFormChannel == true);
    i0.ɵɵadvance(17);
    i0.ɵɵproperty("ngIf", ctx_r11.showSAFormSFAExec == true);
} }
function OrdersPendingListD2CIDCPOSComponent_tab_81_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tab", 150);
} }
function OrdersPendingListD2CIDCPOSComponent_tab_82_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tab", 151);
} }
function OrdersPendingListD2CIDCPOSComponent_ng_template_86_tr_78_Template(rf, ctx) { if (rf & 1) {
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
    i0.ɵɵelementStart(13, "td");
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "td");
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "td");
    i0.ɵɵtext(18);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const invoice_r298 = ctx.$implicit;
    const i_r299 = ctx.index;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(1 + i_r299);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(invoice_r298.RETAIL_D2C_PRODUCT_NAME);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(invoice_r298.RETAIL_D2C_ITEM_NAME);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(invoice_r298.RETAIL_D2C_SUBITEM_NAME);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(invoice_r298.RETAIL_D2C_SUBITEM_QUANTITY_COUNT);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(invoice_r298.RETAIL_D2C_DISCOUNT_AVAILABLE_FLG ? "Yes" : "No");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(invoice_r298.RETAIL_D2C_DISCOUNT_FIGURE);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(invoice_r298.RETAIL_D2C_DISCOUNT_PERCENTAGE_FLG ? "Yes" : "No");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(invoice_r298.RETAIL_D2C_MRP_PRICE_TAG);
} }
function OrdersPendingListD2CIDCPOSComponent_ng_template_86_Template(rf, ctx) { if (rf & 1) {
    const _r301 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 152)(1, "h4", 153);
    i0.ɵɵtext(2, "Order Invoice & Order Details");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 154);
    i0.ɵɵlistener("click", function OrdersPendingListD2CIDCPOSComponent_ng_template_86_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r301); const ctx_r300 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r300.modalRef == null ? null : ctx_r300.modalRef.hide()); });
    i0.ɵɵelementStart(4, "span", 155);
    i0.ɵɵtext(5, "\u00D7");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(6, "div", 156)(7, "div", 6)(8, "div", 157)(9, "div", 6)(10, "div", 158)(11, "strong");
    i0.ɵɵtext(12, "Invoice No.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "div", 158);
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(15, "div", 6)(16, "div", 158);
    i0.ɵɵtext(17, " Invoiced Date ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "div", 158);
    i0.ɵɵtext(19);
    i0.ɵɵpipe(20, "date");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(21, "div", 6)(22, "div", 158);
    i0.ɵɵtext(23, " Invoiced on regular day ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "div", 158);
    i0.ɵɵtext(25);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(26, "div", 6)(27, "div", 158);
    i0.ɵɵtext(28, " Invoiced on holiday ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(29, "div", 158);
    i0.ɵɵtext(30);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(31, "div", 6)(32, "div", 158);
    i0.ɵɵtext(33, " Self Delivery Type ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(34, "div", 158);
    i0.ɵɵtext(35);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(36, "div", 159)(37, "div", 6)(38, "div", 160)(39, "strong");
    i0.ɵɵtext(40, " Order Number");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(41, "div", 7);
    i0.ɵɵtext(42);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(43, "div", 6)(44, "div", 160);
    i0.ɵɵtext(45, " Home Delivery Type ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(46, "div", 7);
    i0.ɵɵtext(47);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(48, "div", 6)(49, "div", 160);
    i0.ɵɵtext(50, " Packages in Order Count ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(51, "div", 7);
    i0.ɵɵtext(52);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(53, "div", 6)(54, "div", 160);
    i0.ɵɵtext(55, " Total item in Order ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(56, "div", 7);
    i0.ɵɵtext(57);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(58, "table", 161)(59, "tr")(60, "th");
    i0.ɵɵtext(61, "Sr. No.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(62, "th");
    i0.ɵɵtext(63, "Product Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(64, "th");
    i0.ɵɵtext(65, "Item Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(66, "th");
    i0.ɵɵtext(67, "Sub Item Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(68, "th");
    i0.ɵɵtext(69, "Quantity Ordered");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(70, "th");
    i0.ɵɵtext(71, "Disc. Available");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(72, "th");
    i0.ɵɵtext(73, "Discount Figure");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(74, "th");
    i0.ɵɵtext(75, "%");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(76, "th");
    i0.ɵɵtext(77, "MRP");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(78, OrdersPendingListD2CIDCPOSComponent_ng_template_86_tr_78_Template, 19, 9, "tr", 50);
    i0.ɵɵelementStart(79, "tr", 162)(80, "td", 163);
    i0.ɵɵtext(81, "Convienince fee");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(82, "td");
    i0.ɵɵtext(83);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(84, "tr", 162)(85, "td", 163);
    i0.ɵɵtext(86, "Delivery fee");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(87, "td");
    i0.ɵɵtext(88);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(89, "tr", 162)(90, "td", 163);
    i0.ɵɵtext(91, "Customer donation of Rs. 1.00");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(92, "td");
    i0.ɵɵtext(93);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(94, "tr", 162)(95, "td", 163);
    i0.ɵɵtext(96, "Total invoiced Packaging Cost");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(97, "td");
    i0.ɵɵtext(98);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(99, "tr", 162)(100, "td", 163);
    i0.ɵɵtext(101, "Total Store items Sales(including GST)");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(102, "td");
    i0.ɵɵtext(103);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(104, "tr", 162)(105, "td", 163);
    i0.ɵɵtext(106, "Customer Invoiced Amount ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(107, "td");
    i0.ɵɵtext(108);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r15 = i0.ɵɵnextContext();
    i0.ɵɵadvance(14);
    i0.ɵɵtextInterpolate1(" ", ctx_r15.invoiceData.RETAIL_D2C_INVOICE_NUMBR, " ");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(20, 16, ctx_r15.invoiceData.RETAIL_D2C_INVOICED_DATETIME), " ");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate1(" ", ctx_r15.regularDayFlag, " ");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", ctx_r15.holidayFlag, " ");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", ctx_r15.selfTakeAwayFlag, " ");
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate1(" ", ctx_r15.invoiceData.RETAIL_D2C_ORDER_NUMBR, " ");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", ctx_r15.homeDeliveryFlag, " ");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", ctx_r15.invoiceData.RETAIL_D2C_ORDER_PACKAGES_COUNT, " ");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", ctx_r15.invoiceData.RETAIL_D2C_STORE_PRODUCTS_ORDER_NO_TOTAL_QUANTITY, " ");
    i0.ɵɵadvance(21);
    i0.ɵɵproperty("ngForOf", ctx_r15.invoiceCartData);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r15.invoiceData.RETAIL_D2C_CONVENIENCE_FEE_INCLUD_GST);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r15.invoiceData.RETAIL_D2C_DELIVERY_FEE_INCLUD_GST);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", ctx_r15.donationFlag, "");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r15.invoiceData.RETAIL_D2C_INVOICED_PACKAGING_COST);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r15.invoiceData.RETAIL_D2C_STORE_PRODUCTS_SALES_INCLUD_GST_TOTAL);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r15.invoiceData.RETAIL_D2C_TOTAL_CUSTMR_INVOICED_AMT);
} }
function OrdersPendingListD2CIDCPOSComponent_ng_template_88_Template(rf, ctx) { if (rf & 1) {
    const _r303 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 152)(1, "h4", 153);
    i0.ɵɵtext(2, "View Customer");
    i0.ɵɵelement(3, "br");
    i0.ɵɵelementStart(4, "small");
    i0.ɵɵtext(5, "Customer ID: XXXXXX");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "button", 154);
    i0.ɵɵlistener("click", function OrdersPendingListD2CIDCPOSComponent_ng_template_88_Template_button_click_6_listener() { i0.ɵɵrestoreView(_r303); const ctx_r302 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r302.modalRef == null ? null : ctx_r302.modalRef.hide()); });
    i0.ɵɵelementStart(7, "span", 155);
    i0.ɵɵtext(8, "\u00D7");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(9, "div", 164)(10, "div", 6)(11, "div", 158)(12, "strong");
    i0.ɵɵtext(13, "Name");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "div", 158);
    i0.ɵɵtext(15, "Rajesh Handa");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "div", 6)(17, "div", 158)(18, "strong");
    i0.ɵɵtext(19, "Primary Customer of Store");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(20, "div", 158);
    i0.ɵɵtext(21, "Yes");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(22, "div", 6)(23, "div", 158)(24, "strong");
    i0.ɵɵtext(25, "Contact No.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(26, "div", 158);
    i0.ɵɵtext(27, "xxxxxxxxx");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(28, "div", 6)(29, "div", 158)(30, "strong");
    i0.ɵɵtext(31, "Address");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(32, "div", 158);
    i0.ɵɵtext(33, "xxxxxxxxx");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(34, "div", 6)(35, "div", 165)(36, "button", 166);
    i0.ɵɵtext(37, "Close");
    i0.ɵɵelementEnd()()()();
} }
function OrdersPendingListD2CIDCPOSComponent_ng_template_90_div_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 172)(1, "div", 168)(2, "div", 169)(3, "div", 170);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 170);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 170);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div", 170);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "div", 170);
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const cartList_r305 = ctx.$implicit;
    const i_r306 = ctx.index;
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", 1 + i_r306, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", cartList_r305.RETAIL_D2C_PRODUCT_NAME, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", cartList_r305.RETAIL_D2C_ITEM_NAME, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", cartList_r305.RETAIL_D2C_SUBITEM_NAME, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", cartList_r305.RETAIL_D2C_SUBITEM_QUANTITY_COUNT, " ");
} }
function OrdersPendingListD2CIDCPOSComponent_ng_template_90_Template(rf, ctx) { if (rf & 1) {
    const _r308 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 152)(1, "h4", 153);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 154);
    i0.ɵɵlistener("click", function OrdersPendingListD2CIDCPOSComponent_ng_template_90_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r308); const ctx_r307 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r307.modalRef == null ? null : ctx_r307.modalRef.hide()); });
    i0.ɵɵelementStart(4, "span", 155);
    i0.ɵɵtext(5, "\u00D7");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(6, "div", 164)(7, "div", 167)(8, "div", 168)(9, "div", 169)(10, "div", 170)(11, "strong");
    i0.ɵɵtext(12, "Serial No.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "div", 170)(14, "strong");
    i0.ɵɵtext(15, "Product Line Name");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "div", 170)(17, "strong");
    i0.ɵɵtext(18, "Item Name");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(19, "div", 170)(20, "strong");
    i0.ɵɵtext(21, "Sub Item Name");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(22, "div", 170)(23, "strong");
    i0.ɵɵtext(24, "Quantity");
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵtemplate(25, OrdersPendingListD2CIDCPOSComponent_ng_template_90_div_25_Template, 13, 5, "div", 171);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r19 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Cart ID: ", ctx_r19.cartid, "");
    i0.ɵɵadvance(23);
    i0.ɵɵproperty("ngForOf", ctx_r19.cartData);
} }
function OrdersPendingListD2CIDCPOSComponent_ng_template_92_Template(rf, ctx) { if (rf & 1) {
    const _r310 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 152)(1, "h4", 153);
    i0.ɵɵtext(2, "Delivery Details");
    i0.ɵɵelement(3, "br");
    i0.ɵɵelementStart(4, "small");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "button", 154);
    i0.ɵɵlistener("click", function OrdersPendingListD2CIDCPOSComponent_ng_template_92_Template_button_click_6_listener() { i0.ɵɵrestoreView(_r310); const ctx_r309 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r309.modalRef == null ? null : ctx_r309.modalRef.hide()); });
    i0.ɵɵelementStart(7, "span", 155);
    i0.ɵɵtext(8, "\u00D7");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(9, "div", 164)(10, "div", 6)(11, "div", 158)(12, "strong");
    i0.ɵɵtext(13, "Order Requested on Vend");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "div", 158);
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "div", 6)(17, "div", 158)(18, "strong");
    i0.ɵɵtext(19, "Delivery Taken from Vend");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(20, "div", 158);
    i0.ɵɵtext(21);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(22, "div", 6)(23, "div", 158)(24, "strong");
    i0.ɵɵtext(25, "Order Delivered to Customer");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(26, "div", 158);
    i0.ɵɵtext(27);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(28, "div", 6)(29, "div", 158)(30, "strong");
    i0.ɵɵtext(31, " Order Delivered to Customer Date Time");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(32, "div", 158);
    i0.ɵɵtext(33);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(34, "div", 6)(35, "div", 158)(36, "strong");
    i0.ɵɵtext(37, "Delivery on Pincode");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(38, "div", 158);
    i0.ɵɵtext(39);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(40, "div", 6)(41, "div", 158)(42, "strong");
    i0.ɵɵtext(43, " Allocated to Vahan");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(44, "div", 158);
    i0.ɵɵtext(45);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(46, "div", 6)(47, "div", 158)(48, "strong");
    i0.ɵɵtext(49, " Delivery taken from Vend Date Time");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(50, "div", 158);
    i0.ɵɵtext(51);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(52, "div", 6)(53, "div", 173);
    i0.ɵɵlistener("click", function OrdersPendingListD2CIDCPOSComponent_ng_template_92_Template_div_click_53_listener() { i0.ɵɵrestoreView(_r310); const ctx_r311 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r311.closeModal()); });
    i0.ɵɵelementStart(54, "button", 166);
    i0.ɵɵtext(55, "Close");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r21 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1("Order Number: ", ctx_r21.orderNumber, "");
    i0.ɵɵadvance(10);
    i0.ɵɵtextInterpolate1(" ", ctx_r21.orderDetailsData.RETAIL_D2C_DELIVERY_RQSTD_ALLOCATD_ON_PLATFORM_DATETIME, " ");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate1(" ", ctx_r21.yesNoText, " ");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate1(" ", ctx_r21.yesNoText, " ");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate1(" ", ctx_r21.orderDetailsData.RETAIL_RQST_ORDER_DELIVERY_DONE_TO_CUSTMR_DATETIME, " ");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate1(" ", ctx_r21.orderDetailsData.RETAIL_D2C_DELIVERY_RQSTD_CUSTMR_PINCODE, " ");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate1(" ", ctx_r21.yesNoText, " ");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate1(" ", ctx_r21.orderDetailsData.RETAIL_RQST_ORDER_TAKEN_FROM_VEND_DATETIME, " ");
} }
function OrdersPendingListD2CIDCPOSComponent_ng_template_94_Template(rf, ctx) { if (rf & 1) {
    const _r313 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 152)(1, "h4", 153);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 174);
    i0.ɵɵlistener("click", function OrdersPendingListD2CIDCPOSComponent_ng_template_94_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r313); const ctx_r312 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r312.viewStocksModalRef.hide()); });
    i0.ɵɵelementStart(4, "span", 175);
    i0.ɵɵtext(5, "\u00D7");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(6, "div", 164)(7, "div", 6)(8, "div", 85)(9, "label", 176);
    i0.ɵɵtext(10, "From Date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "div", 10);
    i0.ɵɵelement(12, "input", 177);
    i0.ɵɵelementStart(13, "div", 12)(14, "span", 13);
    i0.ɵɵelement(15, "i", 14);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(16, "div", 85)(17, "label", 178);
    i0.ɵɵtext(18, "To Date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "div", 10);
    i0.ɵɵelement(20, "input", 179);
    i0.ɵɵelementStart(21, "div", 12)(22, "span", 13);
    i0.ɵɵelement(23, "i", 14);
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(24, "div", 6)(25, "div", 90)(26, "button", 166);
    i0.ɵɵtext(27, "View");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(28, "div", 6)(29, "div", 45)(30, "table", 180)(31, "thead")(32, "tr")(33, "th");
    i0.ɵɵtext(34, "Serial");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(35, "th");
    i0.ɵɵtext(36, "Order");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(37, "th");
    i0.ɵɵtext(38, "Date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(39, "th");
    i0.ɵɵtext(40, "Invoice");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(41, "th");
    i0.ɵɵtext(42, "Item ID");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(43, "th");
    i0.ɵɵtext(44, "Movement");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(45, "th");
    i0.ɵɵtext(46, "Item Counts");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(47, "th");
    i0.ɵɵtext(48, "Seller Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(49, "th");
    i0.ɵɵtext(50, "Buyer Name");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(51, "tbody")(52, "tr")(53, "td", 181);
    i0.ɵɵtext(54, "No data available");
    i0.ɵɵelementEnd()()()()()()();
} if (rf & 2) {
    const ctx_r23 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", ctx_r23.movementName, " Movement of Stocks");
    i0.ɵɵadvance(10);
    i0.ɵɵproperty("bsConfig", i0.ɵɵpureFunction0(3, _c3));
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("bsConfig", i0.ɵɵpureFunction0(4, _c3));
} }
function OrdersPendingListD2CIDCPOSComponent_ng_template_96_Template(rf, ctx) { if (rf & 1) {
    const _r315 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "form")(1, "div", 152)(2, "h4", 153);
    i0.ɵɵtext(3, "Store Address");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "button", 174);
    i0.ɵɵlistener("click", function OrdersPendingListD2CIDCPOSComponent_ng_template_96_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r315); const ctx_r314 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r314.addressRef.hide()); });
    i0.ɵɵelementStart(5, "span", 175);
    i0.ɵɵtext(6, "\u00D7");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(7, "div", 164)(8, "div", 6)(9, "div", 158)(10, "p");
    i0.ɵɵtext(11, "Store Name");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "div", 158);
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "div", 182)(15, "div", 158)(16, "p");
    i0.ɵɵtext(17, "Pincode");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(18, "div", 158);
    i0.ɵɵtext(19);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(20, "div", 182)(21, "div", 158)(22, "p");
    i0.ɵɵtext(23, "Store Address");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(24, "div", 158);
    i0.ɵɵtext(25);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(26, "div", 183)(27, "button", 184);
    i0.ɵɵlistener("click", function OrdersPendingListD2CIDCPOSComponent_ng_template_96_Template_button_click_27_listener() { i0.ɵɵrestoreView(_r315); const ctx_r316 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r316.addressRef.hide()); });
    i0.ɵɵtext(28, "Close");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r25 = i0.ɵɵnextContext();
    i0.ɵɵadvance(13);
    i0.ɵɵtextInterpolate1(" ", ctx_r25.storeAddress == null ? null : ctx_r25.storeAddress.storeName, " ");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate1(" ", ctx_r25.storeAddress == null ? null : ctx_r25.storeAddress.Pincode, " ");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate1(" ", ctx_r25.storeAddress == null ? null : ctx_r25.storeAddress.Address, " ");
} }
export class OrdersPendingListD2CIDCPOSComponent {
    constructor(apiService, modalService, formBuilder, router, toastr, spinner) {
        this.apiService = apiService;
        this.modalService = modalService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.toastr = toastr;
        this.spinner = spinner;
        this.imgURL = this.apiService.imgURL;
        this.isSubmitted = false;
        this.checkedIcon = 'assets/images/active_icon1.png';
        this.invoiceCartData = [];
        this.invoiceyesNoText = '';
        this.orderProceedFalse = true;
        this.orderProceedTrue = false;
        this.secondryNodeAccArr = [];
        this.secondryNodeAccArr2 = [];
        this.secondryNodeAccArr3 = [];
        this.thirdNodeAccArr = [];
        this.showNetworkList = false;
        this.showThirdNodeAcc = false;
        this.collection = [];
        this.p = 1;
        this.isShowView = false;
        this.selectedDashboard = '';
        this.showDash = '';
        this.storeAddress = {
            storeName: '',
            Country: 0,
            State: 0,
            City: 0,
            Pincode: '',
            Address: ''
        };
        // Variables for each heading type
        this.generateResGeoBased = false;
        this.generateResGeoProductBased = false;
        this.generateResItemBased = false;
        this.generateResChannelBased = false;
        this.generateResSFAExecBased = false;
        // Geo Based
        this.basedOnSelectionGeo = '';
        this.tempbasedOnSelectionGeo = '';
        // Geo Product Based
        this.basedOnSelectionGeoProduct = '';
        this.tempbasedOnSelectionGeoProduct = '';
        // Item Based
        this.basedOnSelectionItem = '';
        this.tempbasedOnSelectionItem = '';
        // Channel Based
        this.basedOnSelectionChannel = '';
        this.tempbasedOnSelectionChannel = '';
        // SFA Exec Based
        this.basedOnSelectionSFAExec = '';
        this.tempbasedOnSelectionSFAExec = '';
        this.storeSfaList = {
            SubacctId: 0,
            StoreId: 0,
            ForTeritiarySalesFlg: false,
            ForSecondarySalesFlg: false,
            ForPrimaryPurchaseFlg: false
        };
        this.movementName = '';
        this.showB2B = false;
        this.PRIMARY_SELLER_FLG = this.apiService.requiredLoginData.PRIMARY_SELLER_FLG;
        this.accountid = this.apiService.requiredLoginData.accountid;
        this.subaccountid = this.apiService.requiredLoginData.subaccountid;
        this.storeid = this.apiService.requiredLoginData.storeid;
        this.storeName = this.apiService.requiredLoginData.storeName;
        this.domainid = this.apiService.requiredLoginData.domainid;
    }
    ngOnInit() {
        this.getStoreList();
        this.getCountry();
        // this.ViewDeliveryDetailsofOrderbyStore();
        this.confirmDashboardForm = this.formBuilder.group({
            STORE_ID: [this.storeid, [Validators.required]],
            SELECTED_DATE_FROM: ['', Validators.required],
            SELECTED_DATE_TO: ['', Validators.required],
        });
        this.channelOrder = this.formBuilder.group({
            COUNTRTY: ['', Validators.required],
            STATE: ['', Validators.required],
            CITY: ['', Validators.required],
            CHANNEL: ['', Validators.required],
            CHANNEL_SELECTED_DATE_FROM: ['', Validators.required],
            CHANNEL_SELECTED_DATE_TO: ['', Validators.required],
        });
        this.getProductLineList();
        this.webStoreForm = this.formBuilder.group({
            ACCT_ID: this.accountid,
            SUBACCT_ID: this.subaccountid,
            SUBACCT_OFFICE_ID: this.storeid,
            RETAIL_D2C_DOMAIN_ID: ['', Validators.required],
            RETAIL_D2C_PRODUCT_ID: ['', Validators.required],
            ProductId: '',
            itemId: ''
        });
    }
    onSelectBasedOn(event, heading) {
        const value = event.target.value;
        switch (heading) {
            case 'Geo Based':
                this.tempbasedOnSelectionGeo = value;
                break;
            case 'Geo Product Based':
                this.tempbasedOnSelectionGeoProduct = value;
                break;
            case 'Item Based':
                this.tempbasedOnSelectionItem = value;
                break;
            case 'Channel Based':
                this.tempbasedOnSelectionChannel = value;
                break;
            case 'SFA Exec Based':
                this.tempbasedOnSelectionSFAExec = value;
                break;
            default:
                break;
        }
        console.log(`Based On selected for ${heading}:`, value);
    }
    onSATabChange(heading) {
        if (heading == 'Geo Based') {
        }
        else if (heading == 'Geo Product Based') {
        }
        else if (heading == 'Item Based') {
        }
        else if (heading == 'Channel Based') {
        }
        else if (heading == 'SFA Exec Based') {
        }
    }
    showAnalysis(heading) {
        if (heading == 'Geo Based') {
            this.generateResGeoBased = true;
        }
        else if (heading == 'Geo Product Based') {
            this.generateResGeoProductBased = true;
        }
        else if (heading == 'Item Based') {
            this.generateResItemBased = true;
        }
        else if (heading == 'Channel Based') {
            this.generateResChannelBased = true;
        }
        else if (heading == 'SFA Exec Based') {
            this.generateResSFAExecBased = true;
        }
    }
    showSaForm(heading) {
        switch (heading) {
            case 'Geo Based':
                this.basedOnSelectionGeo = this.tempbasedOnSelectionGeo;
                this.showSAFormGeo = !!this.basedOnSelectionGeo;
                break;
            case 'Geo Product Based':
                this.basedOnSelectionGeoProduct = this.tempbasedOnSelectionGeoProduct;
                this.showSAFormGeoProduct = !!this.basedOnSelectionGeoProduct;
                break;
            case 'Item Based':
                this.basedOnSelectionItem = this.tempbasedOnSelectionItem;
                this.showSAFormItem = !!this.basedOnSelectionItem;
                break;
            case 'Channel Based':
                this.basedOnSelectionChannel = this.tempbasedOnSelectionChannel;
                this.showSAFormChannel = !!this.basedOnSelectionChannel;
                break;
            case 'SFA Exec Based':
                this.basedOnSelectionSFAExec = this.tempbasedOnSelectionSFAExec;
                this.showSAFormSFAExec = !!this.basedOnSelectionSFAExec;
                break;
            default:
                break;
        }
    }
    onKeyInput(event) {
        console.log(event.target.value);
        this.stockinStore = event.target.value;
    }
    onPItemChange(e) {
        this.itemId = this.webStoreForm.value.itemId;
        if (this.itemId === "" || this.itemId === null) {
        }
        else {
            this.showWebstore = false;
        }
    }
    stockMovement(name, template) {
        if (name === 'inward') {
            this.movementName = "Inward";
        }
        else {
            this.movementName = "Outward";
        }
        this.viewStocksModalRef = this.modalService.show(template, { class: 'modal-xl' });
    }
    getProductLineList() {
        this.apiService.getCall(this.apiService.baseURL + '/GetStoreProductLines/' + this.accountid + "/" + this.subaccountid + "/" + this.storeid)
            .subscribe(data => {
            this.productLineList = data;
            console.log(data);
        });
    }
    getAllItemSubItemAvailableForInventoryForselectedChannel() {
        this.apiService.getCall(this.apiService.baseURL + '/GetAllItemSubItemAvailableForInventory' + "/" + this.domainid + "/" + this.accountid + "/" + this.selectedChannel.SECOND_NODE_ACCT_SUBACCT_ID + "/" + this.selectedChannel.SECOND_NODE_ACCT_STORE_ID + "/" + this.productID + "/" + this.itemId)
            .subscribe(data => {
            this.productLineInventoryList = data;
            console.log(data);
            for (let i = 1; i <= this.productLineInventoryList.length; i++) {
                this.collection.push(`item ${i}`);
            }
            this.showWebstore = true;
            this.p = 1;
            this.filterItemList = this.productLineInventoryList.reduce((unique, o) => {
                if (!unique.some(obj => obj.ItemId === o.ItemId && obj.value === o.value)) {
                    unique.push(o);
                }
                return unique;
            }, []);
        }, (error) => {
            console.log(error);
            this.toastr.error(error.error.Message, '', {
                timeOut: 5000,
            });
            this.showWebstore = false;
        });
    }
    onretailDropshipStoreChange(e) {
        this.productID = this.webStoreForm.value.RETAIL_D2C_PRODUCT_ID;
        if (this.productID === "" || this.productID === null) {
        }
        else {
            this.productName = e.target.options[e.target.options.selectedIndex].text;
            console.log(this.productID);
            this.GetItemListOfStore();
            this.showWebstore = false;
        }
    }
    onSelectProductLine(event) {
        const selectElement = event.target;
        const productId = selectElement.value;
        this.apiService.getCall(this.apiService.baseURL + '/GetStoreProductItemList/' + this.accountid + "/" + this.subaccountid + "/" + this.storeid + "/" + productId)
            .subscribe(data => {
            console.log(data);
            this.itemListsforitembased = data;
            if (data.length == "") {
                this.toastr.error(data, '', {
                    timeOut: 5000,
                });
            }
        }, (error) => {
            this.toastr.error(error, '', {
                timeOut: 5000,
            });
        });
    }
    GetItemListOfStore() {
        this.apiService.getCall(this.apiService.baseURL + '/GetStoreProductItemList/' + this.accountid + "/" + this.subaccountid + "/" + this.storeid + "/" + this.productID)
            .subscribe(data => {
            console.log(data);
            this.itemLists = data;
            if (data.length == "") {
                this.toastr.error(data, '', {
                    timeOut: 5000,
                });
            }
        }, (error) => {
            this.toastr.error(error, '', {
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
    getChannel(e, number) {
        this.stateID = e.target.value;
        this.stateName = e.target.options[e.target.options.selectedIndex].text;
        if (this.countryID) {
            this.getCity();
        }
        else {
            this.cityList = null;
            this.zipList = null;
        }
        console.log("inside get channel");
        this.onSecondNodeNetwork(number);
    }
    toChannelValue(item) {
        return JSON.stringify({
            subaccId: item.SECOND_NODE_ACCT_SUBACCT_ID,
            storeId: item.SECOND_NODE_ACCT_STORE_ID
        });
    }
    onChannelChange(event) {
        const selectElement = event.target;
        const value = selectElement.value;
        if (value) {
            const { subaccId, storeId } = JSON.parse(value);
            this.storeSfaList.SubacctId = subaccId;
            this.storeSfaList.StoreId = storeId;
        }
    }
    onAccountCategoryChange(event) {
        const selectElement = event.target;
        const selectedCategory = selectElement.value;
        this.storeSfaList = {
            SubacctId: 0,
            StoreId: 0,
            ForTeritiarySalesFlg: false,
            ForSecondarySalesFlg: false,
            ForPrimaryPurchaseFlg: false
        };
        if (selectedCategory === 'primary') {
            this.storeSfaList.ForPrimaryPurchaseFlg = true;
            this.storeSfaList.ForSecondarySalesFlg = false;
            this.storeSfaList.ForTeritiarySalesFlg = false;
        }
        else if (selectedCategory === 'secondary') {
            this.storeSfaList.ForPrimaryPurchaseFlg = false;
            this.storeSfaList.ForSecondarySalesFlg = true;
            this.storeSfaList.ForTeritiarySalesFlg = false;
        }
        else {
            this.storeSfaList.ForPrimaryPurchaseFlg = false;
            this.storeSfaList.ForSecondarySalesFlg = false;
            this.storeSfaList.ForTeritiarySalesFlg = true;
        }
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
    onSecondNodeNetwork(number) {
        this.thirdNodeAccArr = [];
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
            if (number == 2) {
                this.secondryNodeAccArr2 = Array.isArray(data) ? data : [];
            }
            else if (number == 3) {
                this.secondryNodeAccArr3 = Array.isArray(data) ? data : [];
            }
            else {
                this.secondryNodeAccArr = Array.isArray(data) ? data : [];
                console.log("Secondary Node Acc: ", this.secondryNodeAccArr);
                if (this.secondryNodeAccArr.length > 0) {
                    this.showNetworkList = true;
                }
                else {
                    this.showNetworkList = false;
                    this.toastr.error("No Accounts avaliable");
                }
            }
        }, (error) => {
            console.log(error);
            this.toastr.error(error.error, '', {
                timeOut: 5000,
            });
        });
    }
    onStoreChange(e) {
        this.storeID = this.confirmDashboardForm.value.STORE_ID;
        this.storeName = e.target.options[e.target.options.selectedIndex].text;
        console.log(this.storeID);
    }
    getStoreList() {
        this.apiService.storeList().subscribe((data) => {
            this.storelist = data;
            console.log(this.storelist);
        });
    }
    get f() {
        return this.confirmDashboardForm.controls;
    }
    confirmDeliveryStatus(number) {
        this.isSubmitted = true;
        this.spinner.show();
        if (!this.confirmDashboardForm.valid) {
            this.spinner.hide();
            return false;
        }
        else {
            let fromDate = this.confirmDashboardForm.value.SELECTED_DATE_FROM;
            let isofromDate = new Date(fromDate.getTime() - fromDate.getTimezoneOffset() * 60000).toISOString();
            let toDate = this.confirmDashboardForm.value.SELECTED_DATE_TO;
            let isotoDate = new Date(toDate.getTime() - toDate.getTimezoneOffset() * 60000).toISOString();
            // let data = {
            //   ACCT_ID: this.accountid,
            //   SUBACCT_ID: this.subaccountid,
            //   STORE_ID: + this.confirmDashboardForm.value.STORE_ID,
            //   SELECTED_DATE_FROM: isofromDate,
            //   SELECTED_DATE_TO: isotoDate,
            // }
            let tempData = {};
            if (number) {
                tempData = {
                    ACCT_ID: this.accountid,
                    SUBACCT_ID: this.selectedChannel.SECOND_NODE_ACCT_SUBACCT_ID,
                    STORE_ID: this.selectedChannel.SECOND_NODE_ACCT_STORE_ID,
                    SELECTED_DATE_FROM: isofromDate,
                    SELECTED_DATE_TO: isotoDate,
                };
            }
            else {
                tempData = {
                    ACCT_ID: 8,
                    SUBACCT_ID: 40,
                    STORE_ID: 27,
                    SELECTED_DATE_FROM: isofromDate,
                    SELECTED_DATE_TO: isotoDate,
                };
            }
            this.apiService.postCall(this.apiService.baseURL + '/ListingofConfirmedDeliveryOrdersDeliveryStatus', tempData)
                .subscribe(data => {
                this.confirmDashboardData = data;
                console.log(data);
                this.spinner.hide();
                if (number) {
                    this.homeDeliveryOrderList2 = data.HOME_DELIVERY_ORDER_LIST_DASHBOARD;
                    this.selfDeliveryOrderList2 = data.SELF_TAKEAWAY_ORDER_LIST_DASHBOARD;
                }
                else {
                    this.homeDeliveryOrderList = data.HOME_DELIVERY_ORDER_LIST_DASHBOARD;
                    this.selfDeliveryOrderList = data.SELF_TAKEAWAY_ORDER_LIST_DASHBOARD;
                }
                // if (this.confirmDashboardData.Order_In_Store_Flag == true) {
                //   this.checkedIcon = 'assets/images/active_icon1.png';
                // }
                // else if (this.confirmDashboardData.Order_In_Store_Flag == false) {
                //   this.checkedIcon = 'assets/images/deactive_icon1.png';
                // }
                // else if (this.homeDeliveryOrderList.RETAIL_D2C_ORDER_DELIVERY_TAKEN_FRM_VEND_FLAG == true) {
                //   this.checkedIcon = 'assets/images/active_icon1.png';
                // }
                // else if (this.homeDeliveryOrderList.RETAIL_D2C_ORDER_DELIVERY_TAKEN_FRM_VEND_FLAG == false) {
                //   this.checkedIcon = 'assets/images/deactive_icon1.png';
                // }
                // else if (this.homeDeliveryOrderList.RETAIL_D2C_ORDER_DELIVERD_TO_CUSTMR_FLG == true) {
                //   this.checkedIcon = 'assets/images/active_icon1.png';
                // }
                // else if (this.homeDeliveryOrderList.RETAIL_D2C_ORDER_DELIVERD_TO_CUSTMR_FLG == false) {
                //   this.checkedIcon = 'assets/images/deactive_icon1.png';
                // }
            }, (error) => {
                this.toastr.error(error.error.Message, '', {
                    timeOut: 5000,
                });
            });
        }
    }
    /*   ViewDeliveryDetailsofOrderbyStore(orderNumber, orderDetailsModal) {
        this.orderNumber = orderNumber;
        let deliveryData = {
          RETAIL_ORDER_NUMBR: orderNumber,
          DELIVERY_TYPE_SELF_TAKEAWAY_FLG: false,
          DELIVERY_TYPE_HOME_DELIVERY_FLG: true
        }
        console.log(deliveryData);
        this.apiService.postCall(this.apiService.baseURL + '/ViewDeliveryDetailsofOrderbyStore', deliveryData)
          .subscribe(data => {
            if (data) {
              this.modalRef = this.modalService.show(orderDetailsModal, Object.assign({}, { class: 'orderDetailsModal' }));
              this.orderDetailsData = data;
              if (this.orderDetailsData.RETAIL_D2C_ORDER_DELIVERY_TAKEN_FRM_VEND_FLAG == true) {
                this.yesNoText = "Yes"
              }
              else if (this.orderDetailsData.RETAIL_D2C_ORDER_DELIVERY_TAKEN_FRM_VEND_FLAG == false) {
                this.yesNoText = "No"
              }
              else if (this.orderDetailsData.RETAIL_D2C_ORDER_DELIVERD_TO_CUSTMR_FLG == true) {
                this.yesNoText = "Yes"
              }
     
              else if (this.orderDetailsData.RETAIL_D2C_ORDER_DELIVERD_TO_CUSTMR_FLG == false) {
                this.yesNoText = "No"
              }
              else if (this.orderDetailsData.RETAIL_D2C_TRIP_ALLOCATED_TO_VAHAN_FLG == true) {
                this.yesNoText = "Yes"
              }
     
              else if (this.orderDetailsData.RETAIL_D2C_TRIP_ALLOCATED_TO_VAHAN_FLG == false) {
                this.yesNoText = "No"
              }
     
            }
     
            console.log(data);
          },
            (error) => {
              this.toastr.error(error.error.Message, '', {
                timeOut: 5000,
              });
            });
      } */
    closeModal() {
        var _a;
        (_a = this.modalRef) === null || _a === void 0 ? void 0 : _a.hide();
    }
    viewInvoiceDetails(orderNumber, invoiceDetailsModal) {
        this.apiService.getCall(this.apiService.baseURL + '/ViewInvoiceDetailsofOrderbyStore/' + orderNumber)
            .subscribe(data => {
            console.log(data);
            this.invoiceData = data;
            this.invoiceCartData = data.CART_Items_List;
            console.log(this.invoiceCartData);
            if (this.invoiceData) {
                this.modalRef = this.modalService.show(invoiceDetailsModal, Object.assign({}, { class: 'invoiceDetailsModal' }));
                if (this.invoiceData.RETAIL_D2C_DELIVERY_TYPE_HOME_DELIVERY_FLG == true) {
                    this.homeDeliveryFlag = "Yes";
                }
                if (this.invoiceData.RETAIL_D2C_DELIVERY_TYPE_HOME_DELIVERY_FLG == false) {
                    this.homeDeliveryFlag = "No";
                }
                if (this.invoiceData.RETAIL_D2C_DELIVERY_TYPE_SELF_TAKEAWAY_FLG == true) {
                    this.selfTakeAwayFlag = "Yes";
                }
                if (this.invoiceData.RETAIL_D2C_DELIVERY_TYPE_SELF_TAKEAWAY_FLG == false) {
                    this.selfTakeAwayFlag = "No";
                }
                if (this.invoiceData.RETAIL_D2C_CUSTOMER_DONATION_FLAG == true) {
                    this.donationFlag = "Yes";
                }
                if (this.invoiceData.RETAIL_D2C_CUSTOMER_DONATION_FLAG == false) {
                    this.donationFlag = "No";
                }
                if (this.invoiceData.RETAIL_D2C_INVOICED_ON_HOLIDAY_FLAG == true) {
                    this.holidayFlag = "Yes";
                }
                if (this.invoiceData.RETAIL_D2C_INVOICED_ON_HOLIDAY_FLAG == false) {
                    this.holidayFlag = "No";
                }
                if (this.invoiceData.RETAIL_D2C_INVOICED_ON_REGULAR_DAY_FLAG == true) {
                    this.regularDayFlag = "Yes";
                }
                if (this.invoiceData.RETAIL_D2C_INVOICED_ON_REGULAR_DAY_FLAG == false) {
                    this.regularDayFlag = "No";
                }
                //  if (this.invoiceCartData.RETAIL_D2C_DISCOUNT_AVAILABLE_FLG == true) {
                //     this.discountFlag = "Yes"
                //   }
                //  if (this.invoiceData.invoiceCartData.RETAIL_D2C_DISCOUNT_AVAILABLE_FLG == false) {
                //   this.discountFlag = "No"
                // }
                //  if (this.invoiceData.invoiceCartData.RETAIL_D2C_DISCOUNT_PERCENTAGE_FLG == true) {
                //   this.percentageFlag = "Yes"
                // }
                // if (this.invoiceData.invoiceCartData.RETAIL_D2C_DISCOUNT_PERCENTAGE_FLG == false) {
                //   this.percentageFlag = "No"
                // }
            }
        }, (error) => {
            this.toastr.error(error.error.Message, '', {
                timeOut: 5000,
            });
        });
    }
    processOrderWorkflow(deliveryType, orderNumber) {
        console.log(deliveryType);
        if (deliveryType == 'homeDelivery') {
            this.processOrderData = {
                RETAIL_ACCOUNT_ID: this.accountid,
                RETAIL_SUBACCT_ID: this.subaccountid,
                RETAIL_STORE_ID: +this.confirmDashboardForm.value.STORE_ID,
                RETAIL_ORDER_NUMBR: orderNumber,
                RETAIL_STD_PACAKAGING_SELFTAKEAWAY_FLG: false,
                RETAIL_STD_PACAKAGING_HYPER_LOCAL_DELIVERY_FLG: true,
                RETAIL_NO_PACKING_CONSOLDTD_WALKIN_TYPE_FLG: false,
                RETAIL_NO_PACKING_PARTIAL_WALKIN_TYPE_FLG: false
            };
        }
        else {
            this.processOrderData = {
                RETAIL_ACCOUNT_ID: this.accountid,
                RETAIL_SUBACCT_ID: this.subaccountid,
                RETAIL_STORE_ID: +this.confirmDashboardForm.value.STORE_ID,
                RETAIL_ORDER_NUMBR: orderNumber,
                RETAIL_STD_PACAKAGING_SELFTAKEAWAY_FLG: true,
                RETAIL_STD_PACAKAGING_HYPER_LOCAL_DELIVERY_FLG: false,
                RETAIL_NO_PACKING_CONSOLDTD_WALKIN_TYPE_FLG: false,
                RETAIL_NO_PACKING_PARTIAL_WALKIN_TYPE_FLG: false
            };
        }
        this.apiService.postCall(this.apiService.baseURL + '/ProcessOrderWorkflow', this.processOrderData)
            .subscribe(data => {
            console.log(data);
            this.orderProceedTrue = true;
            this.orderProceedFalse = false;
            this.confirmDeliveryStatus();
            if (data == null) {
                this.toastr.error('Process Order done already!', '', {
                    timeOut: 5000,
                });
            }
            else {
                this.toastr.success(data.message, '', {
                    timeOut: 5000,
                });
            }
        }, (error) => {
            this.toastr.error(error.error.Message, '', {
                timeOut: 5000,
            });
        });
    }
    openView(item) {
        this.selectedChannel = item;
        this.isShowView = !this.isShowView;
    }
    onDashboardSelect(event) {
        const selectElement = event.target;
        const selectedValue = selectElement.value;
        if (selectedValue === 'Online Order Dashboard') {
            this.selectedDashboard = selectedValue;
        }
        else if (selectedValue === 'Stocks Inventory Dashboard') {
            this.selectedDashboard = selectedValue;
        }
        else {
            this.selectedDashboard = '';
        }
    }
    showDashboard() {
        this.showDash = this.selectedDashboard;
    }
    viewCustomerModal(viewcustomer) {
        this.modalRef = this.modalService.show(viewcustomer, Object.assign({}, { class: 'customerModal' }));
    }
    openCartModal(cartID, template) {
        this.modalRef = this.modalService.show(template, Object.assign({}, { class: 'cartModal' }));
        this.cartid = cartID;
        this.viewCartonStoreDashboard(cartID);
    }
    viewCartonStoreDashboard(cartID) {
        this.apiService.getCall(this.apiService.baseURL + '/ViewCartonStoreDashboard/' + cartID)
            .subscribe(data => {
            this.cartData = data;
        }, (error) => {
            console.log(error);
            this.modalService.hide();
            this.toastr.error(error.error, '', {
                timeOut: 5000,
            });
        });
    }
    viewOrderFulfillmentonStoreDashboard(orderNumber) {
        this.apiService.getCall(this.apiService.baseURL + '/ViewOrderFulfillmentonStoreDashboard/' + orderNumber)
            .subscribe(data => {
            this.orderDetailsData = data;
            this.router.navigateByUrl('/opld2cidcPOS/orderfulfillment', { state: { orderDetails: this.orderDetailsData, orderNumber: orderNumber } });
            //  this.router.navigate(["StoreeCommerceManager/opld2cidcPOS/orderfulfillment"],  navigationExtras);
            // if (data) {
            //   this.modalRef = this.modalService.show(orderDetailsModal, Object.assign({}, { class: 'orderDetailsModal' }));
            //   this.orderDetailsData = data;
            //   }
            console.log(data);
        }, (error) => {
            this.toastr.error(error.error.message, '', {
                timeOut: 5000,
            });
        });
    }
    orderFulfillment() {
        this.router.navigate(['/orderfulfillment']);
    }
    // showAddress(address, SellerStoreName: string, SellerStoreAddress: string) {
    //   this.modalRef.hide()
    //   this.selectedStoreName = SellerStoreName;
    //   this.selectedStoreAddress = SellerStoreAddress;
    //   this.addressRef = this.modalService.show(address, { class: 'modal-md' });
    // }
    openSNAddress(name, subaccid, storeid, template) {
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
        this.addressRef = this.modalService.show(template, { class: 'modal-md' });
    }
    B2BOrders() {
        this.showB2B = true;
        console.log("showB2B: ", this.showB2B);
    }
    openSNThirdNode(item) {
        const payload = {
            Cntryid: item.RETAIL_D2C_SUBACCT_OFFICE_CNTRY,
            Stateid: item.RETAIL_D2C_SUBACCT_OFFICE_STATE,
            Secnd_node_flg: false,
            Third_node_flg: true,
            Subacctid: this.subaccountid,
            Storeid: this.storeid,
            B2b_id: item.ACCT_PRIMRY_SECNDRY_B2B_LINK_SEQ_ID
        };
        console.log("payload: ", payload);
        this.apiService.postCall(`${this.apiService.baseURL}/GetAcctNetwork`, payload)
            .subscribe(data => {
            console.log(data);
            this.thirdNodeAccArr = Array.isArray(data) ? data : [];
            console.log("Third Node Acc: ", this.thirdNodeAccArr);
            if (this.thirdNodeAccArr.length > 0) {
                this.showThirdNodeAcc = true;
            }
            else {
                this.showThirdNodeAcc = false;
                this.toastr.error("No Accounts avaliable");
            }
        }, (error) => {
            console.log(error);
            this.toastr.error(error.error, '', {
                timeOut: 5000,
            });
        });
    }
    openSNEdit(item) {
    }
    openTNAddress(name, subaccid, storeid, template) {
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
        this.addressRef = this.modalService.show(template, { class: 'modal-md' });
    }
    openTNEdit(item) {
    }
}
OrdersPendingListD2CIDCPOSComponent.ɵfac = function OrdersPendingListD2CIDCPOSComponent_Factory(t) { return new (t || OrdersPendingListD2CIDCPOSComponent)(i0.ɵɵdirectiveInject(i1.ApiService), i0.ɵɵdirectiveInject(i2.BsModalService), i0.ɵɵdirectiveInject(i3.FormBuilder), i0.ɵɵdirectiveInject(i4.Router), i0.ɵɵdirectiveInject(i5.ToastrService), i0.ɵɵdirectiveInject(i6.NgxSpinnerService)); };
OrdersPendingListD2CIDCPOSComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: OrdersPendingListD2CIDCPOSComponent, selectors: [["app-orders-pending-list-d2-c-idc-pos"]], decls: 98, vars: 37, consts: [[1, "content"], [1, "heading-title"], [1, "card"], [1, "card-body", "pl-0", "pr-0"], ["heading", "My Store D2C Online Orders", "id", "tab1"], [3, "formGroup", "ngSubmit"], [1, "row"], [1, "col-md-4"], [1, "form-group"], [1, "form-control", "form-level", "no-border"], [1, "input-group"], ["type", "text", "formControlName", "SELECTED_DATE_FROM", "bsDatepicker", "", "placeholder", "dd/mm/yyyy", 1, "form-control", 3, "ngClass", "bsConfig"], [1, "input-group-prepend"], [1, "input-group-text"], [1, "icofont-ui-calendar"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "text", "formControlName", "SELECTED_DATE_TO", "bsDatepicker", "", "placeholder", "dd/mm/yyyy", 1, "form-control", 3, "ngClass", "bsConfig"], [1, "col-md-12", "text-right", "mb-3"], ["type", "submit", 1, "btn", "custom-btn"], ["class", "card p-0", 4, "ngIf"], ["class", "card exiting-office-table orderStatus p-0", 4, "ngIf"], ["heading", "My Store B2B Online Orders", "id", "tab2"], ["type", "text", "bsDatepicker", "", "placeholder", "dd/mm/yyyy", 1, "form-control", 3, "ngClass", "bsConfig"], ["type", "submit", 1, "btn", "custom-btn", 3, "click"], ["heading", "My Store Channel Networks", "id", "tab3", 4, "ngIf"], ["heading", "Sales Analysis", "id", "tab4", 4, "ngIf"], ["heading", "Delivery Analysis", "id", "tab5", 4, "ngIf"], ["heading", "Panaromic view", "id", "tab6", 4, "ngIf"], ["template", "<img src='assets/images/icons/please_wait.gif' />"], ["invoiceDetailsModal", ""], ["viewcustomer", ""], ["cartTemplate", ""], ["orderDetailsModal", ""], ["viewStocksMovement", ""], ["address", ""], [1, "invalid-feedback"], [4, "ngIf"], [1, "card", "p-0"], [1, "card-header"], [1, "card-body", "no_data_available"], ["src", "assets/images/deactive_icon1.png"], [1, "card", "exiting-office-table", "orderStatus", "p-0"], ["class", "card-header", 4, "ngIf"], [1, "card-body", "pa-0"], [1, "row", "m-0"], [1, "col-md-12"], [1, "table"], ["width", "8%"], [2, "width", "95px"], ["width", "12%"], [4, "ngFor", "ngForOf"], [2, "font-size", "1rem"], ["src", "assets/images/active_icon1.png", 4, "ngIf", "ngIfElse"], ["elseBlock", ""], ["src", "assets/images/active_icon1.png"], [1, "view-customer", 3, "click"], [1, "btn", "view-ord-btn", 3, "click"], [1, "icon"], ["src", "assets/images/deactive_icon1.png", 4, "ngIf"], ["src", "assets/images/active_icon1.png", 4, "ngIf"], [1, "viewCart", 3, "click"], [1, "fa", "fa-eye"], [1, "btn", "view-del-btn", 3, "click"], [1, "view-customer"], ["heading", "My Store Channel Networks", "id", "tab3"], [1, "form-control", 3, "change"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["s", "content", "style", "border: 1px solid #ccc; border-radius: 4px; padding: 16px;", 4, "ngIf"], [3, "value"], [1, "col-md-12", "py-2"], [1, "font"], ["src", "assets/images/active_icon.png", "width", "20", 4, "ngIf", "ngIfElse"], ["inactiveB2B", ""], [2, "display", "flex", "align-items", "center", "justify-content", "center", "gap", "6px"], [1, "badge", "bg-primary", "mr-2", "text-white", 2, "cursor", "pointer", "font-size", "0.7rem", 3, "click"], [1, "mr-2", 3, "click"], ["src", "../../../../assets/images/eye.png", 2, "width", "25px", "height", "25px", "object-fit", "contain"], [1, "delete-icon", "text-white", 2, "cursor", "pointer", 3, "click"], [1, "fa", "fa-edit"], ["src", "assets/images/active_icon.png", "width", "20"], ["src", "assets/images/deactive_icon.png", "width", "20"], ["inactiveB2B3", ""], ["inactiveB2B2C", ""], ["s", "content", 2, "border", "1px solid #ccc", "border-radius", "4px", "padding", "16px"], [1, "col-md-3"], ["for", "dashboard"], ["id", "dashboard", 1, "form-control", 3, "change"], ["value", "Online Order Dashboard"], ["value", "Stocks Inventory Dashboard"], [1, "col-md-12", "pt-3", "text-right"], [1, "btn", "custom-btn", 3, "click"], ["class", "card exiting-office-table orderStatus p-0 mt-2", 4, "ngIf"], [1, "card", "exiting-office-table", "orderStatus", "p-0", "mt-2"], [3, "formGroup"], ["formControlName", "RETAIL_D2C_PRODUCT_ID", 1, "form-control", 3, "change"], ["formControlName", "itemId", 1, "form-control", 3, "change"], ["selected", "", "value", ""], [3, "ngValue", 4, "ngFor", "ngForOf"], [1, "row", "mt-2"], ["type", "button", 1, "btn", "custom-btn", "float-right", 3, "click"], ["class", "box productLevel", 4, "ngIf"], [3, "ngValue"], [1, "box", "productLevel"], [1, "row", "text-level"], [1, "search-field-list"], [1, "search-list-label"], [1, "item-subitem-list"], [1, "row", "pull-right", "mt-3"], [3, "pageChange"], [1, "pro-box", "storeitem", "item-box", 2, "max-width", "180px", "min-width", "140px", "width", "100%", "padding", "10px", "font-size", "0.85rem", "height", "auto"], [3, "src"], [1, "p-details"], [1, "p-name"], [1, "item-id"], [1, "middle-arrow"], [1, "fa", "fa-angle-double-right"], ["class", "sub-item-box", 4, "ngFor", "ngForOf"], [1, "sub-item-box"], [1, "pro-box", 2, "max-width", "180px", "min-width", "140px", "width", "100%", "padding", "10px", "font-size", "0.85rem", "height", "auto", 3, "ngClass"], [2, "max-width", "80px", "max-height", "80px", "object-fit", "contain", "margin-bottom", "6px", 3, "src"], [1, "p-name", 2, "font-size", "1em"], [1, "p-name", 2, "font-size", "0.9em"], [1, "d-flex", "inStock", 2, "font-size", "0.9em"], [4, "ngIf", "ngIfElse"], ["elseStock", ""], [1, "d-flex", 2, "font-size", "0.9em"], [1, "d-flex"], ["elseMIA", ""], [1, "badge", "bg-primary", "text-white", "w-100", "mt-2", "text-center", "py-2", 2, "cursor", "pointer", "font-size", "0.65rem", 3, "click"], [1, "ti-check-box"], [1, "ti-close"], ["heading", "Sales Analysis", "id", "tab4"], ["heading", "Geo Based", "id", "GB", 3, "selectTab"], ["value", "", "selected", ""], ["value", "country"], ["value", "state"], ["value", "city"], ["heading", "Geo Product Based", "id", "subtab1", 3, "selectTab"], ["heading", "Item Based", "id", "subtab1", 3, "selectTab"], ["heading", "Channel Based", "id", "subtab1", 3, "selectTab"], ["heading", "SFA Exec Based", "id", "subtab1", 3, "selectTab"], ["heading", "Sales Figure", "id", "sf1"], ["class", "col-md-4", 4, "ngIf"], ["type", "text", "bsDatepicker", "", "placeholder", "dd/mm/yyyy", 1, "form-control", 3, "bsConfig"], ["heading", "Comparitive Analysis", "id", "ca1"], [1, "form-control"], ["value", "primary"], ["value", "secondary"], ["value", "tertiary"], ["heading", "Delivery Analysis", "id", "tab5"], ["heading", "Panaromic view", "id", "tab6"], [1, "modal-header"], [1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "btn-close", "close", "pull-right", 3, "click"], ["aria-hidden", "true", 1, "visually-hidden"], [1, "modal-body", "pt-2"], [1, "col-md-7", "pr-5"], [1, "col-md-6"], [1, "col-md-5", "pl-2", "text-right"], [1, "col-md-8"], [1, "orderList", "table", "table-striped"], [1, "no-border"], ["colspan", "8"], [1, "modal-body"], [1, "col-md-12", "text-right"], [1, "btn", "custom-btn"], [1, "card", "card-head", "mb-1", "p-0"], [1, "card-body"], [1, "d-flex", "justify-content-between"], [1, "d-flex", "flex-row", "align-items-center"], ["class", "card mb-3 p-0", 4, "ngFor", "ngForOf"], [1, "card", "mb-3", "p-0"], [1, "col-md-12", "pt-3", "text-right", 3, "click"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", 3, "click"], ["aria-hidden", "true"], ["for", "fromDate"], ["type", "text", "id", "fromDate", "bsDatepicker", "", "placeholder", "dd/mm/yyyy", 1, "form-control", 3, "bsConfig"], ["for", "toDate"], ["type", "text", "id", "toDate", "bsDatepicker", "", "placeholder", "dd/mm/yyyy", 1, "form-control", 3, "bsConfig"], [1, "table", "table-bordered", "mt-3"], ["colspan", "9", 1, "text-center"], [1, "row", "mt-1"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"]], template: function OrdersPendingListD2CIDCPOSComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "h1", 1);
        i0.ɵɵtext(2, "My Store Confirmed Orders (FIFO Basis) delivery Dashboard");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "div", 2)(4, "div", 3)(5, "div")(6, "tabset")(7, "tab", 4)(8, "form", 5);
        i0.ɵɵlistener("ngSubmit", function OrdersPendingListD2CIDCPOSComponent_Template_form_ngSubmit_8_listener() { return ctx.confirmDeliveryStatus(); });
        i0.ɵɵelementStart(9, "div", 6)(10, "div", 7)(11, "div", 8)(12, "label");
        i0.ɵɵtext(13, "Store");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(14, "div", 9);
        i0.ɵɵtext(15);
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(16, "div", 7)(17, "div", 8)(18, "label");
        i0.ɵɵtext(19, "From Date");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(20, "div", 10);
        i0.ɵɵelement(21, "input", 11);
        i0.ɵɵelementStart(22, "div", 12)(23, "span", 13);
        i0.ɵɵelement(24, "i", 14);
        i0.ɵɵelementEnd()();
        i0.ɵɵtemplate(25, OrdersPendingListD2CIDCPOSComponent_div_25_Template, 2, 1, "div", 15);
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(26, "div", 7)(27, "div", 8)(28, "label");
        i0.ɵɵtext(29, "To Date");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(30, "div", 10);
        i0.ɵɵelement(31, "input", 16);
        i0.ɵɵelementStart(32, "div", 12)(33, "span", 13);
        i0.ɵɵelement(34, "i", 14);
        i0.ɵɵelementEnd()();
        i0.ɵɵtemplate(35, OrdersPendingListD2CIDCPOSComponent_div_35_Template, 2, 1, "div", 15);
        i0.ɵɵelementEnd()()()();
        i0.ɵɵelementStart(36, "div", 6)(37, "div", 17)(38, "button", 18);
        i0.ɵɵtext(39, "Submit");
        i0.ɵɵelementEnd()()()();
        i0.ɵɵtemplate(40, OrdersPendingListD2CIDCPOSComponent_div_40_Template, 8, 0, "div", 19);
        i0.ɵɵtemplate(41, OrdersPendingListD2CIDCPOSComponent_div_41_Template, 32, 2, "div", 20);
        i0.ɵɵtemplate(42, OrdersPendingListD2CIDCPOSComponent_div_42_Template, 8, 0, "div", 19);
        i0.ɵɵtemplate(43, OrdersPendingListD2CIDCPOSComponent_div_43_Template, 32, 2, "div", 20);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(44, "tab", 21)(45, "form")(46, "div", 6)(47, "div", 7)(48, "div", 8)(49, "label");
        i0.ɵɵtext(50, "Store");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(51, "div", 9);
        i0.ɵɵtext(52);
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(53, "div", 7)(54, "div", 8)(55, "label");
        i0.ɵɵtext(56, "From Date");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(57, "div", 10);
        i0.ɵɵelement(58, "input", 22);
        i0.ɵɵelementStart(59, "div", 12)(60, "span", 13);
        i0.ɵɵelement(61, "i", 14);
        i0.ɵɵelementEnd()()()()();
        i0.ɵɵelementStart(62, "div", 7)(63, "div", 8)(64, "label");
        i0.ɵɵtext(65, "To Date");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(66, "div", 10);
        i0.ɵɵelement(67, "input", 22);
        i0.ɵɵelementStart(68, "div", 12)(69, "span", 13);
        i0.ɵɵelement(70, "i", 14);
        i0.ɵɵelementEnd()()()()()();
        i0.ɵɵelementStart(71, "div", 6)(72, "div", 17)(73, "button", 23);
        i0.ɵɵlistener("click", function OrdersPendingListD2CIDCPOSComponent_Template_button_click_73_listener() { return ctx.B2BOrders(); });
        i0.ɵɵtext(74, "Submit");
        i0.ɵɵelementEnd()()()();
        i0.ɵɵtemplate(75, OrdersPendingListD2CIDCPOSComponent_div_75_Template, 8, 0, "div", 19);
        i0.ɵɵtemplate(76, OrdersPendingListD2CIDCPOSComponent_div_76_Template, 32, 2, "div", 20);
        i0.ɵɵtemplate(77, OrdersPendingListD2CIDCPOSComponent_div_77_Template, 8, 0, "div", 19);
        i0.ɵɵtemplate(78, OrdersPendingListD2CIDCPOSComponent_div_78_Template, 32, 2, "div", 20);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(79, OrdersPendingListD2CIDCPOSComponent_tab_79_Template, 28, 7, "tab", 24);
        i0.ɵɵtemplate(80, OrdersPendingListD2CIDCPOSComponent_tab_80_Template, 99, 5, "tab", 25);
        i0.ɵɵtemplate(81, OrdersPendingListD2CIDCPOSComponent_tab_81_Template, 1, 0, "tab", 26);
        i0.ɵɵtemplate(82, OrdersPendingListD2CIDCPOSComponent_tab_82_Template, 1, 0, "tab", 27);
        i0.ɵɵelementEnd()();
        i0.ɵɵelement(83, "br")(84, "br")(85, "ngx-spinner", 28);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(86, OrdersPendingListD2CIDCPOSComponent_ng_template_86_Template, 109, 18, "ng-template", null, 29, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(88, OrdersPendingListD2CIDCPOSComponent_ng_template_88_Template, 38, 0, "ng-template", null, 30, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(90, OrdersPendingListD2CIDCPOSComponent_ng_template_90_Template, 26, 2, "ng-template", null, 31, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(92, OrdersPendingListD2CIDCPOSComponent_ng_template_92_Template, 56, 8, "ng-template", null, 32, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(94, OrdersPendingListD2CIDCPOSComponent_ng_template_94_Template, 55, 5, "ng-template", null, 33, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(96, OrdersPendingListD2CIDCPOSComponent_ng_template_96_Template, 29, 3, "ng-template", null, 34, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵelementEnd()();
    } if (rf & 2) {
        i0.ɵɵadvance(8);
        i0.ɵɵproperty("formGroup", ctx.confirmDashboardForm);
        i0.ɵɵadvance(7);
        i0.ɵɵtextInterpolate1(" ", ctx.storeName, " ");
        i0.ɵɵadvance(6);
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(25, _c2, ctx.isSubmitted && ctx.f.SELECTED_DATE_FROM.errors))("bsConfig", i0.ɵɵpureFunction0(27, _c3));
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngIf", ctx.isSubmitted && ctx.f.SELECTED_DATE_FROM.errors);
        i0.ɵɵadvance(6);
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(28, _c2, ctx.isSubmitted && ctx.f.SELECTED_DATE_TO.errors))("bsConfig", i0.ɵɵpureFunction0(30, _c3));
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngIf", ctx.isSubmitted && ctx.f.SELECTED_DATE_TO.errors);
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("ngIf", (ctx.homeDeliveryOrderList == null ? null : ctx.homeDeliveryOrderList.length) == 0);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", (ctx.homeDeliveryOrderList == null ? null : ctx.homeDeliveryOrderList.length) > 0);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", (ctx.selfDeliveryOrderList == null ? null : ctx.selfDeliveryOrderList.length) == 0);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", (ctx.selfDeliveryOrderList == null ? null : ctx.selfDeliveryOrderList.length) > 0);
        i0.ɵɵadvance(9);
        i0.ɵɵtextInterpolate1(" ", ctx.storeName, " ");
        i0.ɵɵadvance(6);
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(31, _c2, ctx.isSubmitted && ctx.f.SELECTED_DATE_FROM.errors))("bsConfig", i0.ɵɵpureFunction0(33, _c3));
        i0.ɵɵadvance(9);
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(34, _c2, ctx.isSubmitted && ctx.f.SELECTED_DATE_TO.errors))("bsConfig", i0.ɵɵpureFunction0(36, _c3));
        i0.ɵɵadvance(8);
        i0.ɵɵproperty("ngIf", ctx.showB2B == true);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", (ctx.homeDeliveryOrderList3 == null ? null : ctx.homeDeliveryOrderList3.length) > 0);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.showB2B == true);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", (ctx.selfDeliveryOrderList3 == null ? null : ctx.selfDeliveryOrderList3.length) > 0);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.PRIMARY_SELLER_FLG);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.PRIMARY_SELLER_FLG);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.PRIMARY_SELLER_FLG);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.PRIMARY_SELLER_FLG);
    } }, dependencies: [i7.NgClass, i7.NgForOf, i7.NgIf, i3.ɵNgNoValidate, i3.NgSelectOption, i3.ɵNgSelectMultipleOption, i3.DefaultValueAccessor, i3.SelectControlValueAccessor, i3.NgControlStatus, i3.NgControlStatusGroup, i3.FormGroupDirective, i3.FormControlName, i3.NgForm, i8.PaginationControlsComponent, i9.TabDirective, i9.TabsetComponent, i6.NgxSpinnerComponent, i10.BsDatepickerDirective, i10.BsDatepickerInputDirective, i7.SlicePipe, i7.DatePipe, i8.PaginatePipe], styles: [".toplevel[_ngcontent-%COMP%] {\r\n    background: #fff;\r\n    padding: 20px;\r\n    margin-bottom: 15px;\r\n    margin-top: 10px;\r\n    border: 1px solid #ddd;\r\n    border-radius: 5px;\r\n}\r\n\r\n.table-font-size[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table-font-size[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n  font-size: 13px; \r\n}\r\n\r\n.vipDiv[_ngcontent-%COMP%] {\r\n    background: #f8f9fa;\r\n    padding: 15px;\r\n    border-radius: 3px;\r\n    min-height: 210px;\r\n}\r\n\r\n.orderStatus[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    vertical-align: middle;\r\n}\r\n\r\n.orderStatus[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n    font-size: 13px;\r\n    padding: 4px 10px;\r\n}\r\n\r\n.orderStatus[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\r\n    color: #c50f20;\r\n    font-size: 90%;\r\n    font-weight: 600;\r\n}\r\n\r\n.bottom-btn[_ngcontent-%COMP%] {\r\n    float: right;\r\n}\r\n\r\n.alert.alert-success[_ngcontent-%COMP%] {\r\n    padding: 5px 10px;\r\n}\r\n\r\n.alert[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\r\n    font-size: 25px;\r\n    vertical-align: middle;\r\n    margin-left: 5px;\r\n}\r\n\r\n.orderStatus[_ngcontent-%COMP%] {\r\n    .card-header {\r\n        border: 0;\r\n    }\r\n    .card-body {\r\n        padding: 0;\r\n        overflow: auto;\r\n    }\r\n}\r\n\r\nh3.head-title[_ngcontent-%COMP%] {\r\n    font-size: 22px;\r\n    margin: 20px 0;\r\n    font-weight: bold;\r\n}\r\n\r\n.icon[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    vertical-align: top;\r\n    color: #17a2b8;\r\n}\r\n\r\n.orderStatus[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    max-width: 25px;\r\n}\r\n\r\n.orderStatus[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n    background: #021422;\r\n    border-radius: 25px;\r\n    color: #fff;\r\n    font-size: 11px !important;\r\n    border: 1px solid #21333c;\r\n    i {\r\n        font-size: 18px;\r\n        vertical-align: middle;\r\n        padding-right: 5px;\r\n    }\r\n}\r\n\r\nbutton.btn.view-del-btn[_ngcontent-%COMP%] {\r\n    background: #63030c !important;\r\n}\r\n\r\n.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n    border: 0;\r\n}\r\n\r\n.toplevel[_ngcontent-%COMP%], .card[_ngcontent-%COMP%] {\r\n    padding: 0 20px 0;\r\n}\r\n\r\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n    padding: 8px 5px;\r\n    text-align: center;\r\n    line-height: 13px;\r\n    font-weight: 600;\r\n    font-size: 13px;\r\n    border-top: 0;\r\n}\r\n\r\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    font-size: 12px;\r\n    line-height: 15px;\r\n    padding: 10px 5px;\r\n}\r\n\r\ntd.icon[_ngcontent-%COMP%] {\r\n    padding: 0 !important;\r\n}\r\n\r\nbutton.btn.custom-btn[_ngcontent-%COMP%] {\r\n    min-width: 100px;\r\n}\r\n\r\n  .nav-tabs .nav-link {\r\n  font-size: 11px; \r\n}\r\n\r\nbutton.btn.custom-btn-white[_ngcontent-%COMP%] {\r\n    min-width: 100px;\r\n    background: #ffffff;\r\n    border: 1px solid #c50f20;\r\n    color: #c50f20;\r\n    font-weight: 600;\r\n\r\n    &:hover {\r\n        background: #c50f20;\r\n        color: #ffffff;\r\n    }\r\n}\r\n\r\n.input-group-prepend[_ngcontent-%COMP%] + .invalid-feedback[_ngcontent-%COMP%] {\r\n    top: 35px;\r\n}\r\n\r\n.card-header[_ngcontent-%COMP%] {\r\n    padding: 10px 15px;\r\n    background: #63030c;\r\n    font-size: 12px;\r\n    color: #fff;\r\n    font-weight: 500;\r\n    span {\r\n        float: left;\r\n    }\r\n    span+span {\r\n        float: right;\r\n    }\r\n}\r\n\r\n.card-header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 16px;\r\n    margin-left: 3px;\r\n}\r\n\r\n.subcard-header[_ngcontent-%COMP%] {\r\n    padding: 8px 12px;\r\n    background: #63030c;\r\n    font-size: 10px;\r\n    color: #fff;\r\n    font-weight: 500;\r\n    span {\r\n        float: left;\r\n    }\r\n    span+span {\r\n        float: right;\r\n    }\r\n}\r\n\r\n.subcard-header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 16px;\r\n    margin-left: 3px;\r\n}\r\n\r\n.icofont-info-circle[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    vertical-align: middle;\r\n    margin-left: 3px;\r\n}\r\n\r\n.orderList[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\r\n    background: #ff000029;\r\n}\r\n\r\n.orderList[_ngcontent-%COMP%] {\r\n    border-collapse: collapse;\r\n    border: 1px solid #ddd;\r\n    margin: 5px 0;\r\n}\r\n\r\n.orderList[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    border: 1px solid #ddd;\r\n}\r\n\r\n.orderList[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n    background: #212529;\r\n    color: #fff;\r\n    vertical-align: middle;\r\n}\r\n\r\n.no-border[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    border: 0 !important;\r\n    text-align: right !important;\r\n    font-weight: 600;\r\n    font-size: 12px !important;\r\n}\r\n\r\nsmall.view-customer[_ngcontent-%COMP%] {\r\n    display: block;\r\n    text-decoration: underline;\r\n    cursor: pointer;\r\n}\r\n\r\nbutton.btn.view-ord-btn[_ngcontent-%COMP%] {\r\n    min-width: 112px;\r\n}\r\n\r\nbutton.btn.view-del-btn[_ngcontent-%COMP%] {\r\n    min-width: 125px;\r\n}\r\n\r\n.card-body.no_data_available[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    color: #bd2130;\r\n    img {\r\n        display: block;\r\n        text-align: center;\r\n        margin: 0 auto 5px;\r\n        max-width: 30px;\r\n    }\r\n}\r\n\r\n\r\nsmall.viewCart[_ngcontent-%COMP%] {\r\n    text-decoration: underline;\r\n    cursor: pointer;\r\n}\r\n\r\n.hr[_ngcontent-%COMP%] {\r\n    border: none;\r\n    border-top: 1.5px solid #d1d1d1;\r\n    margin: 16px 0;\r\n    height: 0;\r\n    width: 100%;\r\n}\r\n\r\nh1.heading-title[_ngcontent-%COMP%] {\r\n    margin: 20px 0 0;\r\n}\r\n\r\n.heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    padding: 10px 5px 10px;\r\n    font-size: 20px;\r\n}\r\n\r\n.row.topLevel[_ngcontent-%COMP%] {\r\n    background: #fff;\r\n    padding: 20px 0;\r\n    margin: 0;\r\n    border-radius: 5px;\r\n}\r\n\r\n.heading.store-domain[_ngcontent-%COMP%] {\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.store-domain[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    margin-right: 20px;\r\n}\r\n\r\n.store-domain[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    background: #ddd;\r\n    padding: 5px 20px;\r\n    font-size: 13px;\r\n    border-radius: 20px;\r\n    display: inline-block;\r\n    font-weight: bold;\r\n    margin-left: 5px;\r\n}\r\n\r\n.store_id[_ngcontent-%COMP%] {\r\n    background: #ddd;\r\n    padding: 5px 20px;\r\n    border-radius: 20px;\r\n    font-size: 13px;\r\n    font-weight: 700;\r\n    float: right;\r\n    margin-top: -40px;\r\n}\r\n\r\n.box[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    overflow: hidden;\r\n    box-shadow: 0 0 4px 0px #eee;\r\n    margin: 20px 0 5px;\r\n    border-radius: 4px;\r\n    padding: 10px;\r\n    background: #fff;\r\n}\r\n\r\n.main-content-area[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\r\n    width: 20%;\r\n    float: left;\r\n    padding: 0;\r\n}\r\n\r\n.fa-star[_ngcontent-%COMP%]:before {\r\n    content: \"\\f005\";\r\n    color: #ff9600;\r\n    margin-right: 5px;\r\n}\r\n\r\n.pro-box[_ngcontent-%COMP%] {\r\n    box-shadow: 0 0 4px 0 #e9ecef;\r\n    margin: 0 5px 10px;\r\n    overflow: hidden;\r\n    padding: 15px;\r\n    border-radius: 3px;\r\n    position: relative;\r\n    border: 1px solid #dee2e6;\r\n}\r\n\r\n.pro-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    height: 100px;\r\n    width: 100px;\r\n    margin: 30px auto 15px;\r\n    display: block;\r\n}\r\n\r\n.storeitem[_ngcontent-%COMP%]   .p-details[_ngcontent-%COMP%] {\r\n    margin-bottom: 42px;\r\n}\r\n\r\np.label-txt[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    padding: 10px;\r\n    font-size: 14px;\r\n    margin: 0;\r\n}\r\n\r\n.store-available-product[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\r\n    width: 25% !important;\r\n}\r\n\r\n.selected-productLine[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .store-available-product[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\r\n    font-size: 16px;\r\n    padding: 0 10px 5px;\r\n}\r\n\r\n.right-field-head[_ngcontent-%COMP%] {\r\n    float: right;\r\n    margin-top: 10px;\r\n}\r\n\r\n.right-field-head[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    padding: 0 10px;\r\n}\r\n\r\nspan.video[_ngcontent-%COMP%], span.doc[_ngcontent-%COMP%] {\r\n    padding: 8px 15px;\r\n    background: #dee2e6;\r\n    font-size: 12px;\r\n    border-radius: 20px;\r\n}\r\n\r\n.right-field-head[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n    font-size: 11px;\r\n    border-radius: 20px;\r\n}\r\n\r\n.bottom-btn[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n    line-height: 11px;\r\n}\r\n\r\n.box.prduct-gallery[_ngcontent-%COMP%] {\r\n    position: relative;\r\n}\r\n\r\n.sample-img[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    z-index: 1;\r\n    left: 15%;\r\n    top: 28%;\r\n    transform: rotate(-45deg);\r\n}\r\n\r\np.p-name[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    margin: 0;\r\n    font-size: 13px;\r\n    font-weight: 500;\r\n    vertical-align: middle;\r\n}\r\n\r\np.item-id[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    position: absolute;\r\n    top: 0;\r\n    background: #212529;\r\n    left: 0;\r\n    font-weight: 600;\r\n    color: #fff;\r\n    border-radius: 0 0 5px;\r\n    font-size: 11px;\r\n    padding: 3px 6px;\r\n}\r\n\r\nspan.price[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n    padding: 7px 10px 0;\r\n    float: left;\r\n    font-weight: 600;\r\n    line-height: 20px;\r\n}\r\n\r\n.item-id[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\r\n    font-weight: 600;\r\n}\r\n\r\n.instock[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n    text-align: center;\r\n    margin: 0 0 3px;\r\n    position: absolute;\r\n    top: 5%;\r\n    box-shadow: 0 0 30px 0 rgb(82 63 105 / 10%);\r\n    left: 70%;\r\n    background: rgb(224 152 152 / 24%);\r\n    width: 50px;\r\n    border: 1px solid rgb(0 0 0 / 10%);\r\n    height: 50px;\r\n    border-radius: 50%;\r\n    img {\r\n        width: 30px !important;\r\n        height: 30px !important;\r\n        margin: 9px auto;\r\n    }\r\n}\r\n\r\n.pro-box.storeitem.item-box[_ngcontent-%COMP%] {\r\n    border: 1px solid #dee2e6;\r\n    height: 300px;\r\n    padding-left: 20px;\r\n    padding-right: 20px;\r\n}\r\n\r\nh1.heading-title[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    text-transform: uppercase;\r\n    font-weight: 700;\r\n    color: #ff7900;\r\n    position: relative;\r\n    margin-bottom: 10px;\r\n    width: 100%;\r\n    span {\r\n        font-size: 10px;\r\n        text-transform: inherit;\r\n        background: #495057;\r\n        color: #fff;\r\n        padding: 10px 15px;\r\n        border-radius: 25px;\r\n    }\r\n}\r\n\r\nh1.heading-title[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    max-width: 65px;\r\n    margin-right: 5px;\r\n}\r\n\r\nh1.heading-title[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    font-weight: 400;\r\n    font-size: 13px;\r\n    position: absolute;\r\n    left: 80px;\r\n    bottom: 4px;\r\n    color: grey;\r\n}\r\n\r\n.offerDiv[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 5px;\r\n    right: 5px;\r\n    font-size: 10px;\r\n    background: #dc3545;\r\n    line-height: 10px;\r\n    font-weight: 700;\r\n    width: 35px;\r\n    height: 35px;\r\n    border-radius: 50%;\r\n    padding: 9px;\r\n    text-align: center;\r\n    color: #fff;\r\n}\r\n\r\n.offerDiv[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\r\n    display: block;\r\n}\r\n\r\nspan.price.strike-price[_ngcontent-%COMP%] {\r\n    color: #ccc;\r\n    text-decoration: line-through;\r\n}\r\n\r\n.row.text-level[_ngcontent-%COMP%] {\r\n    margin: 0 -10px 10px;\r\n}\r\n\r\n.store-add-remove[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    padding: 10px;\r\n    float: left;\r\n    width: 100%;\r\n}\r\n\r\n.row.product-slider-box[_ngcontent-%COMP%] {\r\n    border-bottom: 5px solid #ddd;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.carousel-inner[_ngcontent-%COMP%] {\r\n    height: 278px;\r\n}\r\n\r\n.carousel-item[_ngcontent-%COMP%] {\r\n    margin-right: 0;\r\n    border: 1px solid #f8f9fa;\r\n    background: #fff;\r\n}\r\n\r\n.product-slider-box[_ngcontent-%COMP%]   .domain-product[_ngcontent-%COMP%] {\r\n    max-width: 23%;\r\n}\r\n\r\n.product-slider-box[_ngcontent-%COMP%]   .sub-domain-product[_ngcontent-%COMP%] {\r\n    max-width: 77%;\r\n}\r\n\r\n.store-add-remove[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n    font-size: 11px;\r\n    text-align: center;\r\n    float: left;\r\n    transition: all .5s;\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n    min-width: 65px;\r\n}\r\n\r\n.store-add-remove[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] + .btn[_ngcontent-%COMP%] {\r\n    float: right;\r\n}\r\n\r\n.item-subitem-list[_ngcontent-%COMP%]   .pro-box[_ngcontent-%COMP%] {\r\n    width: 95%;\r\n    overflow: auto;\r\n    height: 280px;\r\n}\r\n\r\n.item-subitem-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    float: left;\r\n}\r\n\r\n.item-box[_ngcontent-%COMP%] {\r\n    max-width: 225px;\r\n    width: 100%;\r\n    float: left;\r\n}\r\n\r\n.sub-item-box[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    float: left;\r\n    max-width: 225px;\r\n}\r\n\r\n.sub-item-box[_ngcontent-%COMP%]   .add_to_cart[_ngcontent-%COMP%]   button.btn[_ngcontent-%COMP%] {\r\n    background: #000064;\r\n    height: 35px;\r\n    font-size: 13px;\r\n    line-height: 16px;\r\n    color: #fff;\r\n    border-radius: 25px;\r\n    margin: 10px 0 0;\r\n    width: 100%;\r\n    text-align: center;\r\n}\r\n\r\n.add_to_cart[_ngcontent-%COMP%] {\r\n    .remove-btn {\r\n        border-radius: 50%;\r\n        background: #05054ead !important;\r\n        color: #fff;\r\n        height: 35px;\r\n        padding: 0;\r\n    }\r\n    .btn+.btn {\r\n        width: 100%;\r\n        border: 0;\r\n        border-radius: 30px;\r\n        font-size: 15px;\r\n        line-height: normal;\r\n        font-weight: 600;\r\n    }\r\n}\r\n\r\n.middle-arrow[_ngcontent-%COMP%] {\r\n    float: left;\r\n    width: 30px;\r\n    height: 50px;\r\n    font-size: 40px;\r\n    margin-top: 10%;\r\n    color: #dee2e6;\r\n    text-align: center;\r\n}\r\n\r\n.price-details[_ngcontent-%COMP%] {\r\n    float: left;\r\n    width: 100%;\r\n    margin-bottom: 10px;\r\n    font-size: 15px;\r\n    line-height: normal;\r\n    font-weight: 600;\r\n    .unit-price {\r\n        float: left;\r\n        width: 42%;\r\n    }\r\n}\r\n\r\n.unit-price[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    display: block;\r\n    font-size: 12px;\r\n    font-weight: 400;\r\n}\r\n\r\n.whole-sale-price[_ngcontent-%COMP%] {\r\n    float: right;\r\n    width: 58%;\r\n    text-align: right;\r\n    span {\r\n        font-size: 12px;\r\n        display: block;\r\n        font-weight: 400;\r\n    }\r\n}\r\n\r\n.add_to_cart[_ngcontent-%COMP%] {\r\n    clear: both;\r\n}\r\n\r\n.subItem-field[_ngcontent-%COMP%] {\r\n    width: calc(100% - 280px);\r\n    float: left;\r\n}\r\n\r\n.item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n\r\n.pro-box.active[_ngcontent-%COMP%] {\r\n    border: 1px solid #63030c;\r\n}\r\n\r\n.p-details[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\r\n    font-size: 13px;\r\n    padding: 0 5px;\r\n    min-height: 25px;\r\n    height: 25px;\r\n    text-align: center;\r\n}\r\n\r\n.p-details[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n    margin-bottom: 0;\r\n    font-weight: 400;\r\n    line-height: normal;\r\n    padding-top: 2px;\r\n    padding-bottom: 2px;\r\n}\r\n\r\n.p-details[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\r\n    margin-bottom: 4px;\r\n}\r\n\r\n.sub-item-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    margin-top: 5px !important;\r\n}\r\n\r\n.p-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n    line-height: 14px;\r\n}\r\n\r\n.add-stock[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    display: inline-block !important;\r\n    width: 60px !important;\r\n    margin-left: 5px;\r\n    vertical-align: middle;\r\n}\r\n\r\n.min-alert-count[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    width: 35px;\r\n    margin-left: 5px;\r\n    display: inline-block;\r\n    margin-right: 4px;\r\n}\r\n\r\n.d-flex[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] + span[_ngcontent-%COMP%] {\r\n    margin-left: auto;\r\n    font-weight: 600;\r\n    width: 60px;\r\n    i {\r\n        font-size: 16px;\r\n        color: #bd2130;\r\n        display: inline-block;\r\n        position: relative;\r\n        top: 2px;\r\n        cursor: pointer;\r\n    }\r\n}\r\n\r\n.sub-item-box[_ngcontent-%COMP%]   .pro-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    height: 55px;\r\n    width: 55px;\r\n    margin: 18px auto 8px;\r\n}\r\n\r\n.links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    display: block;\r\n    color: #17a2b8 !important;\r\n    text-decoration: underline !important;\r\n    font-size: 12px;\r\n    cursor: pointer;\r\n}\r\n\r\n.modal-header[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    margin: 5px 0;\r\n    color: #bd2130;\r\n}\r\n\r\n.field[_ngcontent-%COMP%] {\r\n    margin-bottom: 10px;\r\n    select {\r\n        border: 1px solid #ddd;\r\n        border-radius: 3px;\r\n        height: 26px;\r\n        font-size: 12px;\r\n        margin-left: 10px;\r\n        margin-top: -4px;\r\n        width: 60px;\r\n    }\r\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OrdersPendingListD2CIDCPOSComponent, [{
        type: Component,
        args: [{ selector: 'app-orders-pending-list-d2-c-idc-pos', template: "<div class=\"content\">\n    <h1 class=\"heading-title\">My Store Confirmed Orders (FIFO Basis) delivery Dashboard</h1>\n    <div class=\"card\">\n        <div class=\"card-body pl-0 pr-0\">\n            <div>\n                <tabset>\n                    <tab heading=\"My Store D2C Online Orders\" id=\"tab1\">\n                        <form [formGroup]=\"confirmDashboardForm\" (ngSubmit)=\"confirmDeliveryStatus()\">\n                            <div class=\"row\">\n                                <div class=\"col-md-4\">\n                                    <div class=\"form-group\">\n                                        <label>Store</label>\n                                        <div class=\"form-control form-level no-border\">\n                                            {{storeName}}\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-md-4\">\n                                    <div class=\"form-group\">\n                                        <label>From Date</label>\n                                        <div class=\"input-group\">\n                                            <input type=\"text\"\n                                                [ngClass]=\"{ 'is-invalid': isSubmitted && f.SELECTED_DATE_FROM.errors }\"\n                                                formControlName=\"SELECTED_DATE_FROM\" class=\"form-control\" bsDatepicker\n                                                [bsConfig]=\"{ dateInputFormat: 'DD/MM/YYYY' }\" placeholder=\"dd/mm/yyyy\">\n                                            <div class=\"input-group-prepend\">\n                                                <span class=\"input-group-text\"><i\n                                                        class=\"icofont-ui-calendar\"></i></span>\n                                            </div>\n                                            <div *ngIf=\"isSubmitted && f.SELECTED_DATE_FROM.errors\"\n                                                class=\"invalid-feedback\">\n                                                <div *ngIf=\"f.SELECTED_DATE_FROM.errors.required\">From date is required\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-md-4\">\n                                    <div class=\"form-group\">\n                                        <label>To Date</label>\n                                        <div class=\"input-group\">\n                                            <input type=\"text\"\n                                                [ngClass]=\"{ 'is-invalid': isSubmitted && f.SELECTED_DATE_TO.errors }\"\n                                                formControlName=\"SELECTED_DATE_TO\" class=\"form-control\" bsDatepicker\n                                                [bsConfig]=\"{ dateInputFormat: 'DD/MM/YYYY' }\" placeholder=\"dd/mm/yyyy\">\n                                            <div class=\"input-group-prepend\">\n                                                <span class=\"input-group-text\"><i\n                                                        class=\"icofont-ui-calendar\"></i></span>\n                                            </div>\n                                            <div *ngIf=\"isSubmitted && f.SELECTED_DATE_TO.errors\"\n                                                class=\"invalid-feedback\">\n                                                <div *ngIf=\"f.SELECTED_DATE_TO.errors.required\">To date is required\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-md-12 text-right mb-3\">\n                                    <button type=\"submit\" class=\"btn custom-btn\">Submit</button>\n                                </div>\n                            </div>\n                        </form>\n                        <div class=\"card p-0\" *ngIf=\"homeDeliveryOrderList?.length == 0\">\n                            <div class=\"card-header\"><span>Delivery Type: Home Delivery</span>\n                            </div>\n                            <div class=\"card-body no_data_available\"><img\n                                    src=\"assets/images/deactive_icon1.png\" /><span>Data Not Available!</span></div>\n                        </div>\n                        <div class=\"card exiting-office-table orderStatus p-0\"\n                            *ngIf=\"homeDeliveryOrderList?.length > 0\">\n                            <div class=\"card-header\" *ngIf=\"confirmDashboardData\">\n                                <span style=\"font-size: 1rem;\">Delivery Type: Home Delivery</span>\n                                <span style=\"font-size: 1rem;\">Workflow Console Status: <img\n                                        *ngIf=\"confirmDashboardData.Store_Workflow_Available_Flag == true; else elseBlock\"\n                                        src=\"assets/images/active_icon1.png\" />\n                                    <ng-template #elseBlock>N/A</ng-template>\n                                </span>\n                            </div>\n                            <div class=\"card-body pa-0\">\n                                <div class=\"row m-0\">\n                                    <div class=\"col-md-12\">\n                                        <table class=\"table\">\n                                            <thead>\n                                                <tr>\n                                                    <th width=\"8%\">Sr. No.</th>\n                                                    <th style=\"width: 95px;\">Date of Transaction</th>\n                                                    <th>Confirmed<br> Order</th>\n                                                    <th>Order Process<br> Workflow</th>\n                                                    <th>Order Processed</th>\n                                                    <th>Order Received</th>\n                                                    <th width=\"12%\">Cart ID</th>\n                                                    <th>View Invoice</th>\n                                                    <th>View Details</th>\n                                                </tr>\n                                            </thead>\n                                            <tbody>\n                                                <tr *ngFor=\"let homeDelivery of homeDeliveryOrderList; index as i\">\n                                                    <td>{{i + 1}}</td>\n                                                    <td>{{homeDelivery.RETAIL_D2C_DELIVERY_RQSTD_ALLOCATD_ON_PLATFORM_DATETIME\n                                                        | date:'medium'}}</td>\n                                                    <td>{{homeDelivery.RETAIL_D2C_DELIVERY_RQSTD_ORDER_NUMBER}}<small\n                                                            (click)=\"viewCustomerModal(viewcustomer)\"\n                                                            class=\"view-customer\">view customer</small></td>\n                                                    <td><button\n                                                            (click)=\"processOrderWorkflow('homeDelivery', homeDelivery.RETAIL_D2C_DELIVERY_RQSTD_ORDER_NUMBER)\"\n                                                            class=\"btn view-ord-btn\">Process Order</button></td>\n\n                                                    <td class=\"icon\">\n                                                        <img *ngIf=\"homeDelivery.RETAIL_D2C_ORDER_PROCESSED_BY_STORE_DASHBOARD_FLAG ==false\"\n                                                            src=\"assets/images/deactive_icon1.png\" />\n                                                        <img *ngIf=\"homeDelivery.RETAIL_D2C_ORDER_PROCESSED_BY_STORE_DASHBOARD_FLAG ==true\"\n                                                            src=\"assets/images/active_icon1.png\" />\n                                                    </td>\n                                                    <td class=\"icon\">\n                                                        <img src=\"assets/images/active_icon1.png\" />\n                                                    </td>\n                                                    <td>{{homeDelivery.RETAIL_D2C_DELIVERY_ORDER_ASSOCIATED_CART_ID}}<br><small\n                                                            (click)=\"openCartModal(homeDelivery.RETAIL_D2C_DELIVERY_ORDER_ASSOCIATED_CART_ID ,cartTemplate)\"\n                                                            class=\"viewCart\">View Cart</small></td>\n                                                    <td><button\n                                                            (click)=\"viewInvoiceDetails(homeDelivery.RETAIL_D2C_DELIVERY_RQSTD_ORDER_NUMBER, invoiceDetailsModal)\"\n                                                            class=\"btn view-ord-btn\"><i class=\"fa fa-eye\"></i>Order\n                                                            Invoice</button></td>\n                                                    <!-- <td><button (click)=\"viewOrderFulfillmentonStoreDashboard(homeDelivery.RETAIL_D2C_DELIVERY_RQSTD_ORDER_NUMBER, orderDetailsModal)\" class=\"btn view-del-btn\"><i class=\"fa fa-eye\"></i>Fulfillment Details</button></td> -->\n                                                    <td><button\n                                                            (click)=\"viewOrderFulfillmentonStoreDashboard(homeDelivery.RETAIL_D2C_DELIVERY_RQSTD_ORDER_NUMBER)\"\n                                                            class=\"btn view-del-btn\"><i\n                                                                class=\"fa fa-eye\"></i>Fulfillment Details</button></td>\n\n\n                                                </tr>\n                                            </tbody>\n                                        </table>\n                                    </div>\n\n                                </div>\n                            </div>\n\n                        </div>\n                        <div class=\"card p-0\" *ngIf=\"selfDeliveryOrderList?.length == 0\">\n                            <div class=\"card-header\"><span>Delivery Type: Self Delivery</span>\n                            </div>\n                            <div class=\"card-body no_data_available\"><img\n                                    src=\"assets/images/deactive_icon1.png\" /><span>Data Not Available!</span></div>\n                        </div>\n                        <div class=\"card exiting-office-table orderStatus p-0\"\n                            *ngIf=\"selfDeliveryOrderList?.length > 0\">\n                            <div class=\"card-header\" *ngIf=\"confirmDashboardData\">\n                                <span style=\"font-size: 1rem;\">Delivery Type: Self Takeaway</span>\n                                <span style=\"font-size: 1rem;\">Workflow Console Status: <img\n                                        *ngIf=\"confirmDashboardData.Store_Workflow_Available_Flag == true; else elseBlock\"\n                                        src=\"assets/images/active_icon1.png\" />\n                                    <ng-template #elseBlock>N/A</ng-template>\n                                </span>\n                            </div>\n                            <div class=\"card-body pa-0\">\n\n                                <div class=\"row m-0\">\n                                    <div class=\"col-md-12\">\n                                        <table class=\"table\">\n                                            <thead>\n                                                <tr>\n                                                    <th width=\"8%\">Sr. No.</th>\n                                                    <th style=\"width: 95px;\">Date of Transaction</th>\n                                                    <th>Confirmed<br> Order</th>\n                                                    <th>Order Process<br> Workflow</th>\n                                                    <th>Order Processed</th>\n                                                    <th>Order Received</th>\n                                                    <th>Cart ID</th>\n                                                    <th>View Invoice</th>\n                                                    <th>View Details</th>\n                                                </tr>\n                                            </thead>\n                                            <tbody>\n                                                <tr *ngFor=\"let selfDelivery of selfDeliveryOrderList; index as i\">\n                                                    <td>{{i + 1}}</td>\n                                                    <td>{{selfDelivery.RETAIL_D2C_DELIVERY_RQSTD_ALLOCATD_ON_PLATFORM_DATETIME\n                                                        | date:'medium'}}</td>\n                                                    <td>{{selfDelivery.RETAIL_D2C_DELIVERY_RQSTD_ORDER_NUMBER}}\n                                                        <small class=\"view-customer\">view customer</small>\n                                                    </td>\n                                                    <td><button\n                                                            (click)=\"processOrderWorkflow('selfDelivery', selfDelivery.RETAIL_D2C_DELIVERY_RQSTD_ORDER_NUMBER)\"\n                                                            class=\"btn view-ord-btn\">Process Order</button></td>\n                                                    <td class=\"icon\">\n                                                        <img *ngIf=\"selfDelivery.RETAIL_D2C_ORDER_PROCESSED_BY_STORE_DASHBOARD_FLAG ==false\"\n                                                            src=\"assets/images/deactive_icon1.png\" />\n                                                        <img *ngIf=\"selfDelivery.RETAIL_D2C_ORDER_PROCESSED_BY_STORE_DASHBOARD_FLAG ==true\"\n                                                            src=\"assets/images/active_icon1.png\" />\n                                                    </td>\n\n                                                    <td class=\"icon\">\n                                                        <img src=\"assets/images/active_icon1.png\" />\n                                                    </td>\n                                                    <td>{{selfDelivery.RETAIL_D2C_DELIVERY_ORDER_ASSOCIATED_CART_ID}}<br><small\n                                                            (click)=\"openCartModal(selfDelivery.RETAIL_D2C_DELIVERY_ORDER_ASSOCIATED_CART_ID ,cartTemplate)\"\n                                                            class=\"viewCart\">View Cart</small></td>\n\n                                                    <td><button\n                                                            (click)=\"viewInvoiceDetails(selfDelivery.RETAIL_D2C_DELIVERY_RQSTD_ORDER_NUMBER, invoiceDetailsModal)\"\n                                                            class=\"btn view-ord-btn\"><i class=\"fa fa-eye\"></i>Order\n                                                            Invoice</button></td>\n                                                    <td><button\n                                                            (click)=\"viewOrderFulfillmentonStoreDashboard(selfDelivery.RETAIL_D2C_DELIVERY_RQSTD_ORDER_NUMBER)\"\n                                                            class=\"btn view-del-btn\"><i\n                                                                class=\"fa fa-eye\"></i>Fulfillment Details</button></td>\n                                                </tr>\n\n\n                                            </tbody>\n                                        </table>\n                                    </div>\n\n                                </div>\n                            </div>\n                        </div>\n                    </tab>\n\n                    <tab heading=\"My Store B2B Online Orders\" id=\"tab2\">\n                        <form>\n                            <div class=\"row\">\n                                <div class=\"col-md-4\">\n                                    <div class=\"form-group\">\n                                        <label>Store</label>\n                                        <div class=\"form-control form-level no-border\">\n                                            {{storeName}}\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-md-4\">\n                                    <div class=\"form-group\">\n                                        <label>From Date</label>\n                                        <div class=\"input-group\">\n                                            <input type=\"text\"\n                                                [ngClass]=\"{ 'is-invalid': isSubmitted && f.SELECTED_DATE_FROM.errors }\"\n                                                class=\"form-control\" bsDatepicker\n                                                [bsConfig]=\"{ dateInputFormat: 'DD/MM/YYYY' }\" placeholder=\"dd/mm/yyyy\">\n                                            <div class=\"input-group-prepend\">\n                                                <span class=\"input-group-text\"><i\n                                                        class=\"icofont-ui-calendar\"></i></span>\n                                            </div>\n                                            <!-- <div *ngIf=\"isSubmitted && f.SELECTED_DATE_FROM.errors\"\n                                                class=\"invalid-feedback\">\n                                                <div *ngIf=\"f.SELECTED_DATE_FROM.errors.required\">From date is required\n                                                </div>\n                                            </div> -->\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-md-4\">\n                                    <div class=\"form-group\">\n                                        <label>To Date</label>\n                                        <div class=\"input-group\">\n                                            <input type=\"text\"\n                                                [ngClass]=\"{ 'is-invalid': isSubmitted && f.SELECTED_DATE_TO.errors }\"\n                                                class=\"form-control\" bsDatepicker\n                                                [bsConfig]=\"{ dateInputFormat: 'DD/MM/YYYY' }\" placeholder=\"dd/mm/yyyy\">\n                                            <div class=\"input-group-prepend\">\n                                                <span class=\"input-group-text\"><i\n                                                        class=\"icofont-ui-calendar\"></i></span>\n                                            </div>\n                                            <!-- <div *ngIf=\"isSubmitted && f.SELECTED_DATE_TO.errors\"\n                                                class=\"invalid-feedback\">\n                                                <div *ngIf=\"f.SELECTED_DATE_TO.errors.required\">To date is required\n                                                </div>\n                                            </div> -->\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-md-12 text-right mb-3\">\n                                    <button (click)=\"B2BOrders()\" type=\"submit\" class=\"btn custom-btn\">Submit</button>\n                                </div>\n                            </div>\n                        </form>\n                        <div class=\"card p-0\" *ngIf=\"showB2B == true\">\n                            <div class=\"card-header\"><span>Delivery Type: Home Delivery</span>\n                            </div>\n                            <div class=\"card-body no_data_available\"><img\n                                    src=\"assets/images/deactive_icon1.png\" /><span>Data Not Available!</span></div>\n                        </div>\n                        <div class=\"card exiting-office-table orderStatus p-0\"\n                            *ngIf=\"homeDeliveryOrderList3?.length > 0\">\n                            <div class=\"card-header\" *ngIf=\"confirmDashboardData\">\n                                <span>Delivery Type: Home Delivery</span>\n                                <span>Workflow Console Status: <img\n                                        *ngIf=\"confirmDashboardData.Store_Workflow_Available_Flag == true; else elseBlock\"\n                                        src=\"assets/images/active_icon1.png\" />\n                                    <ng-template #elseBlock>N/A</ng-template>\n                                </span>\n                            </div>\n                            <div class=\"card-body pa-0\">\n                                <div class=\"row m-0\">\n                                    <div class=\"col-md-12\">\n                                        <table class=\"table\">\n                                            <thead>\n                                                <tr>\n                                                    <th width=\"8%\">Sr. No.</th>\n                                                    <th style=\"width: 95px;\">Date of Transaction</th>\n                                                    <th>Confirmed<br> Order</th>\n                                                    <th>Order Process<br> Workflow</th>\n                                                    <th>Order Processed</th>\n                                                    <th>Order Received</th>\n                                                    <th width=\"12%\">Cart ID</th>\n                                                    <th>View Invoice</th>\n                                                    <th>View Details</th>\n                                                </tr>\n                                            </thead>\n                                            <tbody>\n                                                <tr *ngFor=\"let homeDelivery of homeDeliveryOrderList; index as i\">\n                                                    <td>{{i + 1}}</td>\n                                                    <td>{{homeDelivery.RETAIL_D2C_DELIVERY_RQSTD_ALLOCATD_ON_PLATFORM_DATETIME\n                                                        | date:'medium'}}</td>\n                                                    <td>{{homeDelivery.RETAIL_D2C_DELIVERY_RQSTD_ORDER_NUMBER}}<small\n                                                            (click)=\"viewCustomerModal(viewcustomer)\"\n                                                            class=\"view-customer\">view customer</small></td>\n                                                    <td><button\n                                                            (click)=\"processOrderWorkflow('homeDelivery', homeDelivery.RETAIL_D2C_DELIVERY_RQSTD_ORDER_NUMBER)\"\n                                                            class=\"btn view-ord-btn\">Process Order</button></td>\n\n                                                    <td class=\"icon\">\n                                                        <img *ngIf=\"homeDelivery.RETAIL_D2C_ORDER_PROCESSED_BY_STORE_DASHBOARD_FLAG ==false\"\n                                                            src=\"assets/images/deactive_icon1.png\" />\n                                                        <img *ngIf=\"homeDelivery.RETAIL_D2C_ORDER_PROCESSED_BY_STORE_DASHBOARD_FLAG ==true\"\n                                                            src=\"assets/images/active_icon1.png\" />\n                                                    </td>\n                                                    <td class=\"icon\">\n                                                        <img src=\"assets/images/active_icon1.png\" />\n                                                    </td>\n                                                    <td>{{homeDelivery.RETAIL_D2C_DELIVERY_ORDER_ASSOCIATED_CART_ID}}<br><small\n                                                            (click)=\"openCartModal(homeDelivery.RETAIL_D2C_DELIVERY_ORDER_ASSOCIATED_CART_ID ,cartTemplate)\"\n                                                            class=\"viewCart\">View Cart</small></td>\n                                                    <td><button\n                                                            (click)=\"viewInvoiceDetails(homeDelivery.RETAIL_D2C_DELIVERY_RQSTD_ORDER_NUMBER, invoiceDetailsModal)\"\n                                                            class=\"btn view-ord-btn\"><i class=\"fa fa-eye\"></i>Order\n                                                            Invoice</button></td>\n                                                    <!-- <td><button (click)=\"viewOrderFulfillmentonStoreDashboard(homeDelivery.RETAIL_D2C_DELIVERY_RQSTD_ORDER_NUMBER, orderDetailsModal)\" class=\"btn view-del-btn\"><i class=\"fa fa-eye\"></i>Fulfillment Details</button></td> -->\n                                                    <td><button\n                                                            (click)=\"viewOrderFulfillmentonStoreDashboard(homeDelivery.RETAIL_D2C_DELIVERY_RQSTD_ORDER_NUMBER)\"\n                                                            class=\"btn view-del-btn\"><i\n                                                                class=\"fa fa-eye\"></i>Fulfillment Details</button></td>\n\n\n                                                </tr>\n                                            </tbody>\n                                        </table>\n                                    </div>\n\n                                </div>\n                            </div>\n\n                        </div>\n                        <div class=\"card p-0\" *ngIf=\"showB2B == true\">\n                            <div class=\"card-header\"><span>Delivery Type: Self Delivery</span>\n                            </div>\n                            <div class=\"card-body no_data_available\"><img\n                                    src=\"assets/images/deactive_icon1.png\" /><span>Data Not Available!</span></div>\n                        </div>\n                        <div class=\"card exiting-office-table orderStatus p-0\"\n                            *ngIf=\"selfDeliveryOrderList3?.length > 0\">\n                            <div class=\"card-header\" *ngIf=\"confirmDashboardData\">\n                                <span>Delivery Type: Self Takeaway</span>\n                                <span>Workflow Console Status: <img\n                                        *ngIf=\"confirmDashboardData.Store_Workflow_Available_Flag == true; else elseBlock\"\n                                        src=\"assets/images/active_icon1.png\" />\n                                    <ng-template #elseBlock>N/A</ng-template>\n                                </span>\n                            </div>\n                            <div class=\"card-body pa-0\">\n\n                                <div class=\"row m-0\">\n                                    <div class=\"col-md-12\">\n                                        <table class=\"table\">\n                                            <thead>\n                                                <tr>\n                                                    <th width=\"8%\">Sr. No.</th>\n                                                    <th style=\"width: 95px;\">Date of Transaction</th>\n                                                    <th>Confirmed<br> Order</th>\n                                                    <th>Order Process<br> Workflow</th>\n                                                    <th>Order Processed</th>\n                                                    <th>Order Received</th>\n                                                    <th>Cart ID</th>\n                                                    <th>View Invoice</th>\n                                                    <th>View Details</th>\n                                                </tr>\n                                            </thead>\n                                            <tbody>\n                                                <tr *ngFor=\"let selfDelivery of selfDeliveryOrderList; index as i\">\n                                                    <td>{{i + 1}}</td>\n                                                    <td>{{selfDelivery.RETAIL_D2C_DELIVERY_RQSTD_ALLOCATD_ON_PLATFORM_DATETIME\n                                                        | date:'medium'}}</td>\n                                                    <td>{{selfDelivery.RETAIL_D2C_DELIVERY_RQSTD_ORDER_NUMBER}}\n                                                        <small class=\"view-customer\">view customer</small>\n                                                    </td>\n                                                    <td><button\n                                                            (click)=\"processOrderWorkflow('selfDelivery', selfDelivery.RETAIL_D2C_DELIVERY_RQSTD_ORDER_NUMBER)\"\n                                                            class=\"btn view-ord-btn\">Process Order</button></td>\n                                                    <td class=\"icon\">\n                                                        <img *ngIf=\"selfDelivery.RETAIL_D2C_ORDER_PROCESSED_BY_STORE_DASHBOARD_FLAG ==false\"\n                                                            src=\"assets/images/deactive_icon1.png\" />\n                                                        <img *ngIf=\"selfDelivery.RETAIL_D2C_ORDER_PROCESSED_BY_STORE_DASHBOARD_FLAG ==true\"\n                                                            src=\"assets/images/active_icon1.png\" />\n                                                    </td>\n\n                                                    <td class=\"icon\">\n                                                        <img src=\"assets/images/active_icon1.png\" />\n                                                    </td>\n                                                    <td>{{selfDelivery.RETAIL_D2C_DELIVERY_ORDER_ASSOCIATED_CART_ID}}<br><small\n                                                            (click)=\"openCartModal(selfDelivery.RETAIL_D2C_DELIVERY_ORDER_ASSOCIATED_CART_ID ,cartTemplate)\"\n                                                            class=\"viewCart\">View Cart</small></td>\n\n                                                    <td><button\n                                                            (click)=\"viewInvoiceDetails(selfDelivery.RETAIL_D2C_DELIVERY_RQSTD_ORDER_NUMBER, invoiceDetailsModal)\"\n                                                            class=\"btn view-ord-btn\"><i class=\"fa fa-eye\"></i>Order\n                                                            Invoice</button></td>\n                                                    <td><button\n                                                            (click)=\"viewOrderFulfillmentonStoreDashboard(selfDelivery.RETAIL_D2C_DELIVERY_RQSTD_ORDER_NUMBER)\"\n                                                            class=\"btn view-del-btn\"><i\n                                                                class=\"fa fa-eye\"></i>Fulfillment Details</button></td>\n                                                </tr>\n\n\n                                            </tbody>\n                                        </table>\n                                    </div>\n\n                                </div>\n                            </div>\n                        </div>\n\n                    </tab>\n\n                    <!-- Only for Primary Seller flag -->\n                    <tab *ngIf=\"PRIMARY_SELLER_FLG\" heading=\"My Store Channel Networks\" id=\"tab3\">\n                        <form>\n                            <div class=\"row\">\n\n                                <div class=\"col-md-4\">\n                                    <div class=\"form-group\">\n                                        <label>Country</label>\n                                        <select class=\"form-control\" (change)=\"changeCountry($event)\">\n                                            <option value=\"\">Select</option>\n                                            <option *ngFor=\"let country of countryList\" [value]=\"country.CNTRY_ID\">\n                                                {{country.CNTRY_NM}}</option>\n                                        </select>\n                                    </div>\n                                </div>\n\n                                <div class=\"col-md-4\">\n                                    <div class=\"form-group\">\n                                        <label>State</label>\n                                        <select class=\"form-control\" (change)=\"changeState($event)\">\n                                            <option value=\"\">Select</option>\n                                            <option *ngFor=\"let state of stateList\" [value]=\"state.STATE_ID\">\n                                                {{state.STATE_NM}}</option>\n                                        </select>\n                                    </div>\n                                </div>\n\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-md-12 text-right mb-3\">\n                                    <button (click)=\"onSecondNodeNetwork()\" type=\"submit\"\n                                        class=\"btn custom-btn\">Primary/Secondary Network</button>\n                                </div>\n                            </div>\n                        </form>\n\n                        <div class=\"card p-0\"\n                            *ngIf=\"showNetworkList && (!secondryNodeAccArr || secondryNodeAccArr.length === 0)\">\n                            <div class=\"card-header\">\n                                <span>Primary/Secondary Channel List</span>\n                            </div>\n                            <div class=\"card-body no_data_available\">\n                                <img src=\"assets/images/deactive_icon1.png\" />\n                                <span>Data Not Available!</span>\n                            </div>\n                        </div>\n                        <div class=\"card exiting-office-table orderStatus p-0\"\n                            *ngIf=\"showNetworkList && secondryNodeAccArr?.length > 0\">\n                            <div class=\"card-header\">\n                                <span>Primary/Secondary Channel List</span>\n                            </div>\n                            <div class=\"card-body pa-0\">\n                                <div class=\"row m-0\">\n                                    <div class=\"col-md-12 py-2\">\n                                        <table class=\"table\">\n                                            <thead>\n                                                <tr>\n                                                    <th class=\"font\">Sr#</th>\n                                                    <th class=\"font\">PltfrmId</th>\n                                                    <th class=\"font\">Subacc Id</th>\n                                                    <th class=\"font\">Store Id</th>\n                                                    <th class=\"font\">Name</th>\n                                                    <th class=\"font\">B2B Id</th>\n                                                    <th class=\"font\">Category</th>\n                                                    <th class=\"font\">B2B flg</th>\n                                                    <th class=\"font\">Action</th>\n                                                </tr>\n                                            </thead>\n                                            <tbody>\n                                                <tr *ngFor=\"let item of secondryNodeAccArr; let i = index\">\n                                                    <td class=\"font\">{{ i + 1 }}</td>\n                                                    <td class=\"font\">{{ item.ECOMM_PLATFORM_ID }}</td>\n                                                    <td class=\"font\">{{ item.SECOND_NODE_ACCT_SUBACCT_ID }}</td>\n                                                    <td class=\"font\">{{ item.SECOND_NODE_ACCT_STORE_ID }}</td>\n                                                    <td class=\"font\">{{ item.RETAIL_D2C_SUBACCT_OFFICE_NAME}}</td>\n                                                    <td class=\"font\">{{ item.ACCT_PRIMRY_SECNDRY_B2B_LINK_SEQ_ID }}</td>\n                                                    <td class=\"font\">{{ item.CategoryName }}</td>\n                                                    <td class=\"font\">\n                                                        <img *ngIf=\"item.PRIMRY_SECNDRY_ACCTS_b2B_ACTIV_FLG; else inactiveB2B\"\n                                                            src=\"assets/images/active_icon.png\" width=\"20\" />\n                                                        <ng-template #inactiveB2B>\n                                                            <img src=\"assets/images/deactive_icon.png\" width=\"20\" />\n                                                        </ng-template>\n                                                    </td>\n                                                    <td>\n                                                        <div\n                                                            style=\"display: flex; align-items: center; justify-content: center; gap: 6px;\">\n                                                            <span\n                                                                (click)=\"openSNAddress(item.RETAIL_D2C_SUBACCT_OFFICE_NAME, item.SECOND_NODE_ACCT_SUBACCT_ID, item.SECOND_NODE_ACCT_STORE_ID, address)\"\n                                                                class=\"badge bg-primary mr-2 text-white\"\n                                                                style=\"cursor: pointer; font-size: 0.7rem;\">Address</span>\n                                                            <span (click)=\"openSNThirdNode(item)\"\n                                                                class=\"badge bg-primary mr-2 text-white\"\n                                                                style=\"cursor: pointer; font-size: 0.7rem;\">3rd\n                                                                Node</span>\n                                                            <span (click)=\"openView(item)\" class=\"mr-2\">\n                                                                <img src=\"../../../../assets/images/eye.png\"\n                                                                    style=\"width:25px; height:25px; object-fit:contain;\" />\n                                                            </span>\n                                                            <span (click)=\"openSNEdit(item)\"\n                                                                class=\"delete-icon text-white\" style=\"cursor: pointer;\">\n                                                                <i class=\"fa fa-edit\"></i>\n                                                            </span>\n                                                        </div>\n                                                    </td>\n                                                </tr>\n                                            </tbody>\n                                        </table>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"card p-0\"\n                            *ngIf=\"showThirdNodeAcc && (!thirdNodeAccArr || thirdNodeAccArr.length === 0)\">\n                            <div class=\"card-header\">\n                                <span>Secondary/Tertiary Channel List</span>\n                            </div>\n                            <div class=\"card-body no_data_available\">\n                                <img src=\"assets/images/deactive_icon1.png\" />\n                                <span>Data Not Available!</span>\n                            </div>\n                        </div>\n\n                        <div class=\"card exiting-office-table orderStatus p-0\"\n                            *ngIf=\"showThirdNodeAcc && thirdNodeAccArr?.length > 0\">\n                            <div class=\"card-header\">\n                                <span>Secondary/Tertiary Channel List</span>\n                            </div>\n                            <div class=\"card-body pa-0\">\n                                <div class=\"row m-0\">\n                                    <div class=\"col-md-12 py-2\">\n                                        <table class=\"table\">\n                                            <thead>\n                                                <tr>\n                                                    <th class=\"font\">Sr#</th>\n                                                    <th class=\"font\">Acc Id</th>\n                                                    <th class=\"font\">Store Id</th>\n                                                    <th class=\"font\">Name</th>\n                                                    <th class=\"font\">B2B Id</th>\n                                                    <th class=\"font\">B2B Flg</th>\n                                                    <th class=\"font\">B2B2C Flg</th>\n                                                    <th class=\"font\">Action</th>\n                                                </tr>\n                                            </thead>\n                                            <tbody>\n                                                <tr *ngFor=\"let item of thirdNodeAccArr; let i = index\">\n                                                    <td class=\"font\">{{ i + 1 }}</td>\n                                                    <td class=\"font\">{{ item.THIRD_NODE_ACCT_SUBACCT_ID }}</td>\n                                                    <td class=\"font\">{{ item.THIRD_NODE_ACCT_STORE_ID }}</td>\n                                                    <td class=\"font\">{{ item.RETAIL_D2C_SUBACCT_OFFICE_NAME }}</td>\n                                                    <td class=\"font\">{{ item.ACCTS_SECNDRY_TERITIARY_B2B_LINK_SEQ_ID }}\n                                                    </td>\n                                                    <td class=\"font\">\n                                                        <img *ngIf=\"item.SECNDRY_TERITIARY_ACCTS_b2B_ACTIV_FLG; else inactiveB2B3\"\n                                                            src=\"assets/images/active_icon.png\" width=\"20\" />\n                                                        <ng-template #inactiveB2B3>\n                                                            <img src=\"assets/images/deactive_icon.png\" width=\"20\" />\n                                                        </ng-template>\n                                                    </td>\n                                                    <td class=\"font\">\n                                                        <img *ngIf=\"item.ACCTS_B2B2C_ACTIV_FLG; else inactiveB2B2C\"\n                                                            src=\"assets/images/active_icon.png\" width=\"20\" />\n                                                        <ng-template #inactiveB2B2C>\n                                                            <img src=\"assets/images/deactive_icon.png\" width=\"20\" />\n                                                        </ng-template>\n                                                    </td>\n                                                    <td>\n                                                        <span (click)=\"openTNAddress(item.RETAIL_D2C_SUBACCT_OFFICE_NAME, item.THIRD_NODE_ACCT_SUBACCT_ID, item.THIRD_NODE_ACCT_STORE_ID, address)\"\n                                                            class=\"badge bg-primary mr-2 text-white\"\n                                                            style=\"cursor: pointer; font-size: 0.7rem;\">Address</span>\n                                                        <span (click)=\"openTNEdit(item)\" class=\"delete-icon text-white\"\n                                                            style=\"cursor: pointer;\">\n                                                            <i class=\"fa fa-edit\"></i>\n                                                        </span>\n                                                    </td>\n                                                </tr>\n                                            </tbody>\n                                        </table>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div *ngIf=\"isShowView == true\" s=\"content\"\n                            style=\"border: 1px solid #ccc; border-radius: 4px; padding: 16px;\">\n\n                            <h4>View Dashboard</h4>\n\n                            <div class=\"row\">\n                                <div class=\"col-md-12 py-2\">\n\n                                    <div class=\"row\">\n                                        <div class=\"col-md-3\">\n                                            <label for=\"dashboard\">Select Dashboard</label>\n                                            <select (change)=\"onDashboardSelect($event)\" id=\"dashboard\"\n                                                class=\"form-control\">\n                                                <option value=\"\">Select</option>\n                                                <option value=\"Online Order Dashboard\">Online Order Dashboard\n                                                </option>\n                                                <option value=\"Stocks Inventory Dashboard\">Stocks Inventory\n                                                    Dashboard\n                                                </option>\n                                            </select>\n                                        </div>\n                                    </div>\n\n                                    <div class=\"row\">\n                                        <div class=\"col-md-12 pt-3 text-right\">\n                                            <button (click)=\"showDashboard()\" class=\"btn custom-btn\">View</button>\n                                        </div>\n                                    </div>\n\n                                </div>\n                            </div>\n\n                            <!-- stockes inventory dashboard -->\n                            <div *ngIf=\"showDash === 'Stocks Inventory Dashboard' \"\n                                class=\"card exiting-office-table orderStatus p-0 mt-2\">\n                                <div class=\"card-header\">\n                                    <span>Stockes Inventory Dashboard</span>\n                                </div>\n\n                                <div class=\"card-body pa-0\">\n                                    <div class=\"row m-0\">\n                                        <div class=\"col-md-12 py-2\">\n\n                                            <form [formGroup]=\"webStoreForm\">\n                                                <div class=\"row\">\n                                                    <div class=\"col-md-4\">\n\n                                                        <div class=\"form-group\">\n                                                            <label>Store</label>\n                                                            <div class=\"form-control form-level no-border\">\n                                                                {{selectedChannel.RETAIL_D2C_SUBACCT_OFFICE_NAME}}\n                                                            </div>\n\n                                                        </div>\n                                                    </div>\n                                                    <div class=\"col-md-4\">\n                                                        <div class=\"form-group\">\n                                                            <label>Select my Store Product-Line</label>\n                                                            <select class=\"form-control\"\n                                                                (change)=\"onretailDropshipStoreChange($event)\"\n                                                                formControlName=\"RETAIL_D2C_PRODUCT_ID\">\n                                                                <option value=\"\">Select</option>\n                                                                <option *ngFor=\"let productline of productLineList\"\n                                                                    [value]=\"productline.RETAIL_D2C_PRODUCT_ID\">\n                                                                    {{productline.RETAIL_D2C_PRODUCT_NAME}}\n                                                                </option>\n                                                            </select>\n                                                        </div>\n                                                    </div>\n                                                    <div class=\"col-md-4\">\n                                                        <div class=\"form-group\">\n                                                            <label>Select Store Item</label>\n\n                                                            <select formControlName=\"itemId\" class=\"form-control\"\n                                                                (change)=\"onPItemChange($event)\">\n                                                                <option selected value=\"\">Select</option>\n                                                                <option *ngFor=\"let productItem of itemLists\"\n                                                                    [ngValue]=\"productItem.RETAIL_D2C_ITEM_ID\">\n                                                                    {{productItem.RETAIL_D2C_ITEM_NAME}}\n                                                                </option>\n                                                            </select>\n\n                                                        </div>\n                                                    </div>\n                                                </div>\n\n                                                <div class=\"row mt-2\">\n                                                    <div class=\"col-md-12\">\n                                                        <button\n                                                            (click)=\"getAllItemSubItemAvailableForInventoryForselectedChannel()\"\n                                                            type=\"button\" class=\"btn custom-btn float-right\">\n                                                            Submit</button>\n                                                    </div>\n                                                </div>\n                                            </form>\n\n                                            <div class=\"box productLevel\" *ngIf=\"showWebstore\">\n                                                <div class=\"row text-level\">\n                                                    <div class=\"col-md-12\">\n\n                                                        <div class=\"search-field-list\">\n                                                            <div class=\"search-list-label\">Store:\n                                                                <span>{{selectedChannel.RETAIL_D2C_SUBACCT_OFFICE_NAME}}</span>\n                                                            </div>\n                                                            <div class=\"search-list-label\">Product Line:\n                                                                <span>{{productName}}</span>\n                                                            </div>\n                                                        </div>\n\n                                                    </div>\n                                                </div>\n\n                                                <div class=\"item-subitem-list\">\n                                                    <ul>\n                                                        <li *ngFor=\"let storeitem of filterItemList\">\n\n                                                            <div style=\"max-width: 180px; min-width: 140px; width: 100%; padding: 10px; font-size: 0.85rem; height: auto;\"\n                                                                class=\"pro-box storeitem item-box\">\n\n                                                                <img\n                                                                    src=\"{{imgURL}}{{storeitem.ItemImagePath | slice:1:-4}}jpeg\" />\n                                                                <div class=\"p-details \">\n                                                                    <p class=\"p-name\">{{storeitem.ItemName}}</p>\n                                                                    <p class=\"item-id\">Item ID:\n                                                                        <b>{{storeitem.ItemId}}</b>\n                                                                    </p>\n                                                                </div>\n\n                                                            </div>\n\n                                                            <div class=\"middle-arrow\"><i\n                                                                    class=\"fa fa-angle-double-right\"></i></div>\n\n                                                            <div *ngFor=\"let storesubitem of productLineInventoryList | paginate: { itemsPerPage: 3, currentPage: p }; let i = index\"\n                                                                class=\"sub-item-box\">\n\n                                                                <div class=\"pro-box\"\n                                                                    [ngClass]=\"{'active': storesubitem.isSelected === true}\"\n                                                                    style=\"max-width: 180px; min-width: 140px; width: 100%; padding: 10px; font-size: 0.85rem; height: auto;\">\n\n                                                                    <img src=\"{{imgURL}}{{storesubitem.SubItemImagePath | slice:1:-4}}jpeg\"\n                                                                        style=\"max-width: 80px; max-height: 80px; object-fit: contain; margin-bottom: 6px;\" />\n                                                                    <div class=\"p-details\">\n                                                                        <p class=\"p-name\" style=\"font-size: 1em;\">\n                                                                            {{storesubitem.SubItemName}}</p>\n                                                                        <p class=\"p-name\" style=\"font-size: 0.9em;\">\n                                                                            <small>{{storesubitem.SubItemSize}}</small>\n                                                                        </p>\n\n                                                                        <p class=\"d-flex inStock\"\n                                                                            style=\"font-size: 0.9em;\">\n                                                                            <span>In-Stock:</span>\n                                                                            <span\n                                                                                *ngIf=\"storesubitem.RETAIL_D2C_STOCK_HOLDER_SUBITEM_IN_STOCK_FLG == true; else elseStock\"><i\n                                                                                    class=\"ti-check-box\"></i></span>\n                                                                            <ng-template #elseStock><span><i\n                                                                                        class=\"ti-close\"></i></span></ng-template>\n                                                                        </p>\n                                                                        <p class=\"d-flex\" style=\"font-size: 0.9em;\">\n                                                                            <span>SKU#:</span>\n                                                                            <span>{{storesubitem.RETAIL_D2C_STOCK_SUBITEM_SKU_CODE}}</span>\n                                                                        </p>\n                                                                        <p class=\"d-flex\"><span>Minimum Inventory\n                                                                                Alet:</span>\n                                                                            <span\n                                                                                *ngIf=\"storesubitem.RETAIL_D2C_STOCK_HOLDER_SUBITEM_STOCK_MIN_ALERT_FLG == true; else elseMIA\">Yes</span>\n                                                                            <ng-template\n                                                                                #elseMIA><span>No</span></ng-template>\n                                                                        </p>\n\n                                                                        <p class=\"d-flex\"><span>Auto ordering\n                                                                                Limit:</span>\n                                                                            <span>N/A</span>\n                                                                        </p>\n\n                                                                        <p class=\"d-flex\" style=\"font-size: 0.9em;\">\n                                                                            <span>Current Stock in\n                                                                                Webstore:</span>\n                                                                            <span>{{storesubitem.RETAIL_D2C_STOCK_HOLDR_INVENTRY_ON_HAND}}\n                                                                                Units</span>\n                                                                        </p>\n                                                                        <span\n                                                                            (click)=\"stockMovement('inward', viewStocksMovement)\"\n                                                                            class=\"badge bg-primary text-white w-100 mt-2 text-center py-2\"\n                                                                            style=\"cursor: pointer; font-size: 0.65rem;\">\n                                                                            Inward Movement of stock\n                                                                        </span>\n\n                                                                        <span\n                                                                            (click)=\"stockMovement('outward', viewStocksMovement)\"\n                                                                            class=\"badge bg-primary text-white w-100 mt-2 text-center py-2\"\n                                                                            style=\"cursor: pointer; font-size: 0.65rem;\">\n                                                                            Outward Movement of stock\n                                                                        </span>\n                                                                    </div>\n\n                                                                </div>\n\n                                                            </div>\n\n                                                        </li>\n                                                    </ul>\n\n                                                </div>\n                                                <div class=\"row pull-right mt-3\">\n                                                    <div class=\"col-md-12\">\n                                                        <pagination-controls\n                                                            (pageChange)=\"p = $event\"></pagination-controls>\n                                                    </div>\n                                                </div>\n\n                                            </div>\n\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <!-- Online order dashboard -->\n                            <div *ngIf=\"showDash === 'Online Order Dashboard' \"\n                                class=\"card exiting-office-table orderStatus p-0 mt-2\">\n                                <div class=\"card-header\">\n                                    <span>Online Order Dashboard</span>\n                                </div>\n\n                                <div class=\"card-body pa-0\">\n                                    <div class=\"row m-0\">\n                                        <div class=\"col-md-12 py-2\">\n\n                                            <form [formGroup]=\"confirmDashboardForm\"\n                                                (ngSubmit)=\"confirmDeliveryStatus(2)\">\n                                                <div class=\"row\">\n                                                    <div class=\"col-md-4\">\n                                                        <div class=\"form-group\">\n                                                            <label>Store</label>\n                                                            <div class=\"form-control form-level no-border\">\n                                                                {{selectedChannel.RETAIL_D2C_SUBACCT_OFFICE_NAME}}\n                                                            </div>\n                                                        </div>\n                                                    </div>\n                                                    <div class=\"col-md-4\">\n                                                        <div class=\"form-group\">\n                                                            <label>From Date</label>\n                                                            <div class=\"input-group\">\n                                                                <input type=\"text\"\n                                                                    [ngClass]=\"{ 'is-invalid': isSubmitted && f.SELECTED_DATE_FROM.errors }\"\n                                                                    formControlName=\"SELECTED_DATE_FROM\"\n                                                                    class=\"form-control\" bsDatepicker\n                                                                    [bsConfig]=\"{ dateInputFormat: 'DD/MM/YYYY' }\"\n                                                                    placeholder=\"dd/mm/yyyy\">\n                                                                <div class=\"input-group-prepend\">\n                                                                    <span class=\"input-group-text\"><i\n                                                                            class=\"icofont-ui-calendar\"></i></span>\n                                                                </div>\n                                                                <div *ngIf=\"isSubmitted && f.SELECTED_DATE_FROM.errors\"\n                                                                    class=\"invalid-feedback\">\n                                                                    <div *ngIf=\"f.SELECTED_DATE_FROM.errors.required\">\n                                                                        From date is required\n                                                                    </div>\n                                                                </div>\n                                                            </div>\n                                                        </div>\n                                                    </div>\n                                                    <div class=\"col-md-4\">\n                                                        <div class=\"form-group\">\n                                                            <label>To Date</label>\n                                                            <div class=\"input-group\">\n                                                                <input type=\"text\"\n                                                                    [ngClass]=\"{ 'is-invalid': isSubmitted && f.SELECTED_DATE_TO.errors }\"\n                                                                    formControlName=\"SELECTED_DATE_TO\"\n                                                                    class=\"form-control\" bsDatepicker\n                                                                    [bsConfig]=\"{ dateInputFormat: 'DD/MM/YYYY' }\"\n                                                                    placeholder=\"dd/mm/yyyy\">\n                                                                <div class=\"input-group-prepend\">\n                                                                    <span class=\"input-group-text\"><i\n                                                                            class=\"icofont-ui-calendar\"></i></span>\n                                                                </div>\n                                                                <div *ngIf=\"isSubmitted && f.SELECTED_DATE_TO.errors\"\n                                                                    class=\"invalid-feedback\">\n                                                                    <div *ngIf=\"f.SELECTED_DATE_TO.errors.required\">To\n                                                                        date is required\n                                                                    </div>\n                                                                </div>\n                                                            </div>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                                <div class=\"row\">\n                                                    <div class=\"col-md-12 text-right mb-3\">\n                                                        <button type=\"submit\" class=\"btn custom-btn\">Submit</button>\n                                                    </div>\n                                                </div>\n                                            </form>\n\n                                            <div class=\"card p-0\" *ngIf=\"homeDeliveryOrderList2?.length == 0\">\n                                                <div class=\"card-header\"><span>Delivery Type: Home Delivery</span>\n                                                </div>\n                                                <div class=\"card-body no_data_available\"><img\n                                                        src=\"assets/images/deactive_icon1.png\" /><span>Data Not\n                                                        Available!</span></div>\n                                            </div>\n                                            <div class=\"card exiting-office-table orderStatus p-0\"\n                                                *ngIf=\"homeDeliveryOrderList2?.length > 0\">\n                                                <div class=\"card-header\" *ngIf=\"confirmDashboardData\">\n                                                    <span>Delivery Type: Home Delivery</span>\n                                                    <span>Workflow Console Status: <img\n                                                            *ngIf=\"confirmDashboardData.Store_Workflow_Available_Flag == true; else elseBlock\"\n                                                            src=\"assets/images/active_icon1.png\" />\n                                                        <ng-template #elseBlock>N/A</ng-template>\n                                                    </span>\n                                                </div>\n                                                <div class=\"card-body pa-0\">\n                                                    <div class=\"row m-0\">\n                                                        <div class=\"col-md-12\">\n                                                            <table class=\"table\">\n                                                                <thead>\n                                                                    <tr>\n                                                                        <th width=\"8%\">Sr. No.</th>\n                                                                        <th style=\"width: 95px;\">Date of Transaction\n                                                                        </th>\n                                                                        <th>Confirmed<br> Order</th>\n                                                                        <th>Order Process<br> Workflow</th>\n                                                                        <th>Order Processed</th>\n                                                                        <th>Order Received</th>\n                                                                        <th width=\"12%\">Cart ID</th>\n                                                                        <th>View Invoice</th>\n                                                                        <th>View Details</th>\n                                                                    </tr>\n                                                                </thead>\n                                                                <tbody>\n                                                                    <tr\n                                                                        *ngFor=\"let homeDelivery of homeDeliveryOrderList; index as i\">\n                                                                        <td>{{i + 1}}</td>\n                                                                        <td>{{homeDelivery.RETAIL_D2C_DELIVERY_RQSTD_ALLOCATD_ON_PLATFORM_DATETIME\n                                                                            | date:'medium'}}</td>\n                                                                        <td>{{homeDelivery.RETAIL_D2C_DELIVERY_RQSTD_ORDER_NUMBER}}<small\n                                                                                (click)=\"viewCustomerModal(viewcustomer)\"\n                                                                                class=\"view-customer\">view\n                                                                                customer</small></td>\n                                                                        <td><button\n                                                                                (click)=\"processOrderWorkflow('homeDelivery', homeDelivery.RETAIL_D2C_DELIVERY_RQSTD_ORDER_NUMBER)\"\n                                                                                class=\"btn view-ord-btn\">Process\n                                                                                Order</button></td>\n\n                                                                        <td class=\"icon\">\n                                                                            <img *ngIf=\"homeDelivery.RETAIL_D2C_ORDER_PROCESSED_BY_STORE_DASHBOARD_FLAG ==false\"\n                                                                                src=\"assets/images/deactive_icon1.png\" />\n                                                                            <img *ngIf=\"homeDelivery.RETAIL_D2C_ORDER_PROCESSED_BY_STORE_DASHBOARD_FLAG ==true\"\n                                                                                src=\"assets/images/active_icon1.png\" />\n                                                                        </td>\n                                                                        <td class=\"icon\">\n                                                                            <img src=\"assets/images/active_icon1.png\" />\n                                                                        </td>\n                                                                        <td>{{homeDelivery.RETAIL_D2C_DELIVERY_ORDER_ASSOCIATED_CART_ID}}<br><small\n                                                                                (click)=\"openCartModal(homeDelivery.RETAIL_D2C_DELIVERY_ORDER_ASSOCIATED_CART_ID ,cartTemplate)\"\n                                                                                class=\"viewCart\">View Cart</small></td>\n                                                                        <td><button\n                                                                                (click)=\"viewInvoiceDetails(homeDelivery.RETAIL_D2C_DELIVERY_RQSTD_ORDER_NUMBER, invoiceDetailsModal)\"\n                                                                                class=\"btn view-ord-btn\"><i\n                                                                                    class=\"fa fa-eye\"></i>Order\n                                                                                Invoice</button></td>\n                                                                        <!-- <td><button (click)=\"viewOrderFulfillmentonStoreDashboard(homeDelivery.RETAIL_D2C_DELIVERY_RQSTD_ORDER_NUMBER, orderDetailsModal)\" class=\"btn view-del-btn\"><i class=\"fa fa-eye\"></i>Fulfillment Details</button></td> -->\n                                                                        <td><button\n                                                                                (click)=\"viewOrderFulfillmentonStoreDashboard(homeDelivery.RETAIL_D2C_DELIVERY_RQSTD_ORDER_NUMBER)\"\n                                                                                class=\"btn view-del-btn\"><i\n                                                                                    class=\"fa fa-eye\"></i>Fulfillment\n                                                                                Details</button></td>\n                                                                    </tr>\n                                                                </tbody>\n                                                            </table>\n                                                        </div>\n\n                                                    </div>\n                                                </div>\n\n                                            </div>\n                                            <div class=\"card p-0\" *ngIf=\"selfDeliveryOrderList2?.length == 0\">\n                                                <div class=\"card-header\"><span>Delivery Type: Self Delivery</span>\n                                                </div>\n                                                <div class=\"card-body no_data_available\"><img\n                                                        src=\"assets/images/deactive_icon1.png\" /><span>Data Not\n                                                        Available!</span></div>\n                                            </div>\n                                            <div class=\"card exiting-office-table orderStatus p-0\"\n                                                *ngIf=\"selfDeliveryOrderList2?.length > 0\">\n                                                <div class=\"card-header\" *ngIf=\"confirmDashboardData\">\n                                                    <span style=\"font-size: 1rem;\">Delivery Type: Self Takeaway</span>\n                                                    <span style=\"font-size: 1rem;\">Workflow Console Status: <img\n                                                            *ngIf=\"confirmDashboardData.Store_Workflow_Available_Flag == true; else elseBlock\"\n                                                            src=\"assets/images/active_icon1.png\" />\n                                                        <ng-template #elseBlock>N/A</ng-template>\n                                                    </span>\n                                                </div>\n                                                <div class=\"card-body pa-0\">\n\n                                                    <div class=\"row m-0\">\n                                                        <div class=\"col-md-12\">\n                                                            <table class=\"table\">\n                                                                <thead>\n                                                                    <tr>\n                                                                        <th width=\"8%\">Sr. No.</th>\n                                                                        <th style=\"width: 95px;\">Date of Transaction\n                                                                        </th>\n                                                                        <th>Confirmed<br> Order</th>\n                                                                        <th>Order Process<br> Workflow</th>\n                                                                        <th>Order Processed</th>\n                                                                        <th>Order Received</th>\n                                                                        <th>Cart ID</th>\n                                                                        <th>View Invoice</th>\n                                                                        <th>View Details</th>\n                                                                    </tr>\n                                                                </thead>\n                                                                <tbody>\n                                                                    <tr\n                                                                        *ngFor=\"let selfDelivery of selfDeliveryOrderList; index as i\">\n                                                                        <td>{{i + 1}}</td>\n                                                                        <td>{{selfDelivery.RETAIL_D2C_DELIVERY_RQSTD_ALLOCATD_ON_PLATFORM_DATETIME\n                                                                            | date:'medium'}}</td>\n                                                                        <td>{{selfDelivery.RETAIL_D2C_DELIVERY_RQSTD_ORDER_NUMBER}}\n                                                                            <small class=\"view-customer\">view\n                                                                                customer</small>\n                                                                        </td>\n                                                                        <td><button\n                                                                                (click)=\"processOrderWorkflow('selfDelivery', selfDelivery.RETAIL_D2C_DELIVERY_RQSTD_ORDER_NUMBER)\"\n                                                                                class=\"btn view-ord-btn\">Process\n                                                                                Order</button></td>\n                                                                        <td class=\"icon\">\n                                                                            <img *ngIf=\"selfDelivery.RETAIL_D2C_ORDER_PROCESSED_BY_STORE_DASHBOARD_FLAG ==false\"\n                                                                                src=\"assets/images/deactive_icon1.png\" />\n                                                                            <img *ngIf=\"selfDelivery.RETAIL_D2C_ORDER_PROCESSED_BY_STORE_DASHBOARD_FLAG ==true\"\n                                                                                src=\"assets/images/active_icon1.png\" />\n                                                                        </td>\n\n                                                                        <td class=\"icon\">\n                                                                            <img src=\"assets/images/active_icon1.png\" />\n                                                                        </td>\n                                                                        <td>{{selfDelivery.RETAIL_D2C_DELIVERY_ORDER_ASSOCIATED_CART_ID}}<br><small\n                                                                                (click)=\"openCartModal(selfDelivery.RETAIL_D2C_DELIVERY_ORDER_ASSOCIATED_CART_ID ,cartTemplate)\"\n                                                                                class=\"viewCart\">View Cart</small></td>\n\n                                                                        <td><button\n                                                                                (click)=\"viewInvoiceDetails(selfDelivery.RETAIL_D2C_DELIVERY_RQSTD_ORDER_NUMBER, invoiceDetailsModal)\"\n                                                                                class=\"btn view-ord-btn\"><i\n                                                                                    class=\"fa fa-eye\"></i>Order\n                                                                                Invoice</button></td>\n                                                                        <td><button\n                                                                                (click)=\"viewOrderFulfillmentonStoreDashboard(selfDelivery.RETAIL_D2C_DELIVERY_RQSTD_ORDER_NUMBER)\"\n                                                                                class=\"btn view-del-btn\"><i\n                                                                                    class=\"fa fa-eye\"></i>Fulfillment\n                                                                                Details</button></td>\n                                                                    </tr>\n\n\n                                                                </tbody>\n                                                            </table>\n                                                        </div>\n\n                                                    </div>\n                                                </div>\n                                            </div>\n\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n\n                        </div>\n\n                    </tab>\n\n                    <tab *ngIf=\"PRIMARY_SELLER_FLG\" heading=\"Sales Analysis\" id=\"tab4\">\n\n                        <tabset>\n\n                            <tab (selectTab)=\"onSATabChange('Geo Based')\" heading=\"Geo Based\" id=\"GB\">\n                                <form>\n                                    <div class=\"row\">\n\n                                        <div class=\"col-md-4\">\n                                            <div class=\"form-group\">\n                                                <label>Based On</label>\n                                                <select class=\"form-control\"\n                                                    (change)=\"onSelectBasedOn($event, 'Geo Based')\">\n                                                    <option value=\"\" selected>Select</option>\n                                                    <option value=\"country\">Based on Country Wide</option>\n                                                    <option value=\"state\">Based on State Wide</option>\n                                                    <option value=\"city\">Based on City Wide</option>\n                                                </select>\n                                            </div>\n                                        </div>\n\n                                    </div>\n                                    <div class=\"row\">\n                                        <div class=\"col-md-12 text-right mb-3\">\n                                            <button (click)=\"showSaForm('Geo Based')\" type=\"submit\"\n                                                class=\"btn custom-btn\">Submit</button>\n                                        </div>\n                                    </div>\n                                </form>\n\n                                <tabset *ngIf=\"showSAFormGeo == true\">\n                                    <tab heading=\"Sales Figure\" id=\"sf1\">\n                                        <form>\n                                            <div class=\"row\">\n\n                                                <div class=\"col-md-4\">\n                                                    <div class=\"form-group\">\n                                                        <label>Country</label>\n                                                        <select class=\"form-control\" (change)=\"changeCountry($event)\">\n                                                            <option value=\"\">Select</option>\n                                                            <option *ngFor=\"let country of countryList\"\n                                                                [value]=\"country.CNTRY_ID\">\n                                                                {{country.CNTRY_NM}}\n                                                            </option>\n                                                        </select>\n                                                    </div>\n                                                </div>\n\n                                                <div *ngIf=\"basedOnSelectionGeo === 'state' || basedOnSelectionGeo === 'city' \"\n                                                    class=\"col-md-4\">\n                                                    <div class=\"form-group\">\n                                                        <label>State</label>\n                                                        <select class=\"form-control\" (change)=\"changeState($event)\">\n                                                            <option value=\"\">Select</option>\n                                                            <option *ngFor=\"let state of stateList\"\n                                                                [value]=\"state.STATE_ID\">\n                                                                {{state.STATE_NM}}\n                                                            </option>\n                                                        </select>\n                                                    </div>\n                                                </div>\n\n                                                <div *ngIf=\"basedOnSelectionGeo === 'city'\" class=\"col-md-4\">\n                                                    <div class=\"form-group\">\n                                                        <label>City</label>\n                                                        <select class=\"form-control\" (change)=\"changeCity($event)\">\n                                                            <option value=\"\">Select</option>\n                                                            <option *ngFor=\"let city of cityList\"\n                                                                [value]=\"city.CITY_ID\">\n                                                                {{city.CITY_NM}}\n                                                            </option>\n                                                        </select>\n                                                    </div>\n                                                </div>\n\n                                            </div>\n\n                                            <div class=\"row\">\n\n                                                <div class=\"col-md-4\">\n                                                    <div class=\"form-group\">\n                                                        <label>From Date</label>\n                                                        <div class=\"input-group\">\n                                                            <input type=\"text\" class=\"form-control\" bsDatepicker\n                                                                [bsConfig]=\"{ dateInputFormat: 'DD/MM/YYYY' }\"\n                                                                placeholder=\"dd/mm/yyyy\">\n                                                            <div class=\"input-group-prepend\">\n                                                                <span class=\"input-group-text\"><i\n                                                                        class=\"icofont-ui-calendar\"></i></span>\n                                                            </div>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                                <div class=\"col-md-4\">\n                                                    <div class=\"form-group\">\n                                                        <label>To Date</label>\n                                                        <div class=\"input-group\">\n                                                            <input type=\"text\" class=\"form-control\" bsDatepicker\n                                                                [bsConfig]=\"{ dateInputFormat: 'DD/MM/YYYY' }\"\n                                                                placeholder=\"dd/mm/yyyy\">\n                                                            <div class=\"input-group-prepend\">\n                                                                <span class=\"input-group-text\"><i\n                                                                        class=\"icofont-ui-calendar\"></i></span>\n                                                            </div>\n                                                        </div>\n                                                    </div>\n                                                </div>\n\n                                            </div>\n\n                                            <div class=\"row\">\n                                                <div class=\"col-md-12 text-right mb-3\">\n                                                    <button (click)=\"showAnalysis('Geo Based')\" type=\"submit\"\n                                                        class=\"btn custom-btn\">Generate</button>\n                                                </div>\n                                            </div>\n                                        </form>\n                                        <div *ngIf=\"generateResGeoBased == true\" class=\"card p-0\">\n                                            <div class=\"card-header\">\n                                                <!-- <span>Primary/Secondary Channel List</span> -->\n                                            </div>\n                                            <div class=\"card-body no_data_available\">\n                                                <img src=\"assets/images/deactive_icon1.png\" />\n                                                <span>Data Not Available!</span>\n                                            </div>\n                                        </div>\n                                    </tab>\n                                    <tab heading=\"Comparitive Analysis\" id=\"ca1\"></tab>\n                                </tabset>\n                            </tab>\n\n                            <tab (selectTab)=\"onSATabChange('Geo Product Based')\" heading=\"Geo Product Based\"\n                                id=\"subtab1\">\n                                <form>\n                                    <div class=\"row\">\n\n                                        <div class=\"col-md-4\">\n                                            <div class=\"form-group\">\n                                                <label>Based On</label>\n                                                <select class=\"form-control\"\n                                                    (change)=\"onSelectBasedOn($event, 'Geo Product Based')\">\n                                                    <option value=\"\" selected>Select</option>\n                                                    <option value=\"country\">Based on Country Wide</option>\n                                                    <option value=\"state\">Based on State Wide</option>\n                                                    <option value=\"city\">Based on City Wide</option>\n                                                </select>\n                                            </div>\n                                        </div>\n\n                                    </div>\n                                    <div class=\"row\">\n                                        <div class=\"col-md-12 text-right mb-3\">\n                                            <button (click)=\"showSaForm('Geo Product Based')\" type=\"submit\"\n                                                class=\"btn custom-btn\">Submit</button>\n                                        </div>\n                                    </div>\n                                </form>\n\n                                <tabset *ngIf=\"showSAFormGeoProduct == true\">\n                                    <tab heading=\"Sales Figure\" id=\"sf1\">\n                                        <form>\n                                            <div class=\"row\">\n\n                                                <div class=\"col-md-4\">\n                                                    <div class=\"form-group\">\n                                                        <label>Country</label>\n                                                        <select class=\"form-control\" (change)=\"changeCountry($event)\">\n                                                            <option value=\"\">Select</option>\n                                                            <option *ngFor=\"let country of countryList\"\n                                                                [value]=\"country.CNTRY_ID\">\n                                                                {{country.CNTRY_NM}}\n                                                            </option>\n                                                        </select>\n                                                    </div>\n                                                </div>\n\n                                                <div *ngIf=\"basedOnSelectionGeoProduct === 'state' || basedOnSelectionGeoProduct === 'city' \"\n                                                    class=\"col-md-4\">\n                                                    <div class=\"form-group\">\n                                                        <label>State</label>\n                                                        <select class=\"form-control\" (change)=\"changeState($event)\">\n                                                            <option value=\"\">Select</option>\n                                                            <option *ngFor=\"let state of stateList\"\n                                                                [value]=\"state.STATE_ID\">\n                                                                {{state.STATE_NM}}\n                                                            </option>\n                                                        </select>\n                                                    </div>\n                                                </div>\n\n                                                <div *ngIf=\"basedOnSelectionGeoProduct === 'city'\" class=\"col-md-4\">\n                                                    <div class=\"form-group\">\n                                                        <label>City</label>\n                                                        <select class=\"form-control\" (change)=\"changeCity($event)\">\n                                                            <option value=\"\">Select</option>\n                                                            <option *ngFor=\"let city of cityList\"\n                                                                [value]=\"city.CITY_ID\">\n                                                                {{city.CITY_NM}}\n                                                            </option>\n                                                        </select>\n                                                    </div>\n                                                </div>\n\n                                            </div>\n\n                                            <div class=\"row\">\n\n                                                <div class=\"col-md-4\">\n                                                    <div class=\"form-group\">\n                                                        <label>Product Line</label>\n                                                        <select class=\"form-control\">\n                                                            <option selected value=\"\">Select</option>\n                                                            <option *ngFor=\"let productline of productLineList\"\n                                                                [value]=\"productline.RETAIL_D2C_PRODUCT_ID\">\n                                                                {{productline.RETAIL_D2C_PRODUCT_NAME}}\n                                                            </option>\n                                                        </select>\n                                                    </div>\n                                                </div>\n\n                                            </div>\n\n                                            <div class=\"row\">\n\n                                                <div class=\"col-md-4\">\n                                                    <div class=\"form-group\">\n                                                        <label>From Date</label>\n                                                        <div class=\"input-group\">\n                                                            <input type=\"text\" class=\"form-control\" bsDatepicker\n                                                                [bsConfig]=\"{ dateInputFormat: 'DD/MM/YYYY' }\"\n                                                                placeholder=\"dd/mm/yyyy\">\n                                                            <div class=\"input-group-prepend\">\n                                                                <span class=\"input-group-text\"><i\n                                                                        class=\"icofont-ui-calendar\"></i></span>\n                                                            </div>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                                <div class=\"col-md-4\">\n                                                    <div class=\"form-group\">\n                                                        <label>To Date</label>\n                                                        <div class=\"input-group\">\n                                                            <input type=\"text\" class=\"form-control\" bsDatepicker\n                                                                [bsConfig]=\"{ dateInputFormat: 'DD/MM/YYYY' }\"\n                                                                placeholder=\"dd/mm/yyyy\">\n                                                            <div class=\"input-group-prepend\">\n                                                                <span class=\"input-group-text\"><i\n                                                                        class=\"icofont-ui-calendar\"></i></span>\n                                                            </div>\n                                                        </div>\n                                                    </div>\n                                                </div>\n\n                                            </div>\n\n                                            <div class=\"row\">\n                                                <div class=\"col-md-12 text-right mb-3\">\n                                                    <button (click)=\"showAnalysis('Geo Product Based')\" type=\"submit\"\n                                                        class=\"btn custom-btn\">Generate</button>\n                                                </div>\n                                            </div>\n                                        </form>\n                                        <div *ngIf=\"generateResGeoProductBased == true\" class=\"card p-0\">\n                                            <div class=\"card-header\">\n                                                <!-- <span>Primary/Secondary Channel List</span> -->\n                                            </div>\n                                            <div class=\"card-body no_data_available\">\n                                                <img src=\"assets/images/deactive_icon1.png\" />\n                                                <span>Data Not Available!</span>\n                                            </div>\n                                        </div>\n                                    </tab>\n                                    <tab heading=\"Comparitive Analysis\" id=\"ca1\"></tab>\n                                </tabset>\n                            </tab>\n\n                            <tab (selectTab)=\"onSATabChange('Item Based')\" heading=\"Item Based\" id=\"subtab1\">\n                                <form>\n                                    <div class=\"row\">\n\n                                        <div class=\"col-md-4\">\n                                            <div class=\"form-group\">\n                                                <label>Based On</label>\n                                                <select class=\"form-control\"\n                                                    (change)=\"onSelectBasedOn($event, 'Item Based')\">\n                                                    <option value=\"\" selected>Select</option>\n                                                    <option value=\"country\">Based on Country Wide</option>\n                                                    <option value=\"state\">Based on State Wide</option>\n                                                    <option value=\"city\">Based on City Wide</option>\n                                                </select>\n                                            </div>\n                                        </div>\n\n                                    </div>\n                                    <div class=\"row\">\n                                        <div class=\"col-md-12 text-right mb-3\">\n                                            <button (click)=\"showSaForm('Item Based')\" type=\"submit\"\n                                                class=\"btn custom-btn\">Submit</button>\n                                        </div>\n                                    </div>\n                                </form>\n\n                                <tabset *ngIf=\"showSAFormItem == true\">\n                                    <tab heading=\"Sales Figure\" id=\"sf1\">\n                                        <form>\n                                            <div class=\"row\">\n\n                                                <div class=\"col-md-4\">\n                                                    <div class=\"form-group\">\n                                                        <label>Country</label>\n                                                        <select class=\"form-control\" (change)=\"changeCountry($event)\">\n                                                            <option value=\"\">Select</option>\n                                                            <option *ngFor=\"let country of countryList\"\n                                                                [value]=\"country.CNTRY_ID\">\n                                                                {{country.CNTRY_NM}}\n                                                            </option>\n                                                        </select>\n                                                    </div>\n                                                </div>\n\n                                                <div *ngIf=\"basedOnSelectionItem === 'state' || basedOnSelectionItem === 'city' \"\n                                                    class=\"col-md-4\">\n                                                    <div class=\"form-group\">\n                                                        <label>State</label>\n                                                        <select class=\"form-control\" (change)=\"changeState($event)\">\n                                                            <option value=\"\">Select</option>\n                                                            <option *ngFor=\"let state of stateList\"\n                                                                [value]=\"state.STATE_ID\">\n                                                                {{state.STATE_NM}}\n                                                            </option>\n                                                        </select>\n                                                    </div>\n                                                </div>\n\n                                                <div *ngIf=\"basedOnSelectionItem === 'city'\" class=\"col-md-4\">\n                                                    <div class=\"form-group\">\n                                                        <label>City</label>\n                                                        <select class=\"form-control\" (change)=\"changeCity($event)\">\n                                                            <option value=\"\">Select</option>\n                                                            <option *ngFor=\"let city of cityList\"\n                                                                [value]=\"city.CITY_ID\">\n                                                                {{city.CITY_NM}}\n                                                            </option>\n                                                        </select>\n                                                    </div>\n                                                </div>\n\n                                            </div>\n\n                                            <div class=\"row\">\n\n                                                <div class=\"col-md-4\">\n                                                    <div class=\"form-group\">\n                                                        <label>Product Line</label>\n                                                        <select (change)=\"onSelectProductLine($event)\"\n                                                            class=\"form-control\">\n                                                            <option selected value=\"\">Select</option>\n                                                            <option *ngFor=\"let productline of productLineList\"\n                                                                [value]=\"productline.RETAIL_D2C_PRODUCT_ID\">\n                                                                {{productline.RETAIL_D2C_PRODUCT_NAME}}\n                                                            </option>\n                                                        </select>\n                                                    </div>\n                                                </div>\n\n                                                <div class=\"col-md-4\">\n                                                    <div class=\"form-group\">\n                                                        <label>Item</label>\n                                                        <select class=\"form-control\">\n                                                            <option selected value=\"\">Select</option>\n                                                            <option *ngFor=\"let productItem of itemListsforitembased\"\n                                                                [ngValue]=\"productItem.RETAIL_D2C_ITEM_ID\">\n                                                                {{productItem.RETAIL_D2C_ITEM_NAME}}\n                                                            </option>\n                                                        </select>\n                                                    </div>\n                                                </div>\n\n                                            </div>\n\n                                            <div class=\"row\">\n\n                                                <div class=\"col-md-4\">\n                                                    <div class=\"form-group\">\n                                                        <label>From Date</label>\n                                                        <div class=\"input-group\">\n                                                            <input type=\"text\" class=\"form-control\" bsDatepicker\n                                                                [bsConfig]=\"{ dateInputFormat: 'DD/MM/YYYY' }\"\n                                                                placeholder=\"dd/mm/yyyy\">\n                                                            <div class=\"input-group-prepend\">\n                                                                <span class=\"input-group-text\"><i\n                                                                        class=\"icofont-ui-calendar\"></i></span>\n                                                            </div>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                                <div class=\"col-md-4\">\n                                                    <div class=\"form-group\">\n                                                        <label>To Date</label>\n                                                        <div class=\"input-group\">\n                                                            <input type=\"text\" class=\"form-control\" bsDatepicker\n                                                                [bsConfig]=\"{ dateInputFormat: 'DD/MM/YYYY' }\"\n                                                                placeholder=\"dd/mm/yyyy\">\n                                                            <div class=\"input-group-prepend\">\n                                                                <span class=\"input-group-text\"><i\n                                                                        class=\"icofont-ui-calendar\"></i></span>\n                                                            </div>\n                                                        </div>\n                                                    </div>\n                                                </div>\n\n                                            </div>\n\n                                            <div class=\"row\">\n                                                <div class=\"col-md-12 text-right mb-3\">\n                                                    <button (click)=\"showAnalysis('Item Based')\" type=\"submit\"\n                                                        class=\"btn custom-btn\">Generate</button>\n                                                </div>\n                                            </div>\n                                        </form>\n                                        <div *ngIf=\"generateResItemBased == true\" class=\"card p-0\">\n                                            <div class=\"card-header\">\n                                                <!-- <span>Primary/Secondary Channel List</span> -->\n                                            </div>\n                                            <div class=\"card-body no_data_available\">\n                                                <img src=\"assets/images/deactive_icon1.png\" />\n                                                <span>Data Not Available!</span>\n                                            </div>\n                                        </div>\n                                    </tab>\n                                    <tab heading=\"Comparitive Analysis\" id=\"ca1\"></tab>\n                                </tabset>\n                            </tab>\n\n                            <tab (selectTab)=\"onSATabChange('Channel Based')\" heading=\"Channel Based\" id=\"subtab1\">\n                                <form>\n                                    <div class=\"row\">\n\n                                        <div class=\"col-md-4\">\n                                            <div class=\"form-group\">\n                                                <label>Based On</label>\n                                                <select class=\"form-control\"\n                                                    (change)=\"onSelectBasedOn($event, 'Channel Based')\">\n                                                    <option value=\"\" selected>Select</option>\n                                                    <option value=\"state\">Based on State Wide</option>\n                                                </select>\n                                            </div>\n                                        </div>\n\n                                    </div>\n                                    <div class=\"row\">\n                                        <div class=\"col-md-12 text-right mb-3\">\n                                            <button (click)=\"showSaForm('Channel Based')\" type=\"submit\"\n                                                class=\"btn custom-btn\">Submit</button>\n                                        </div>\n                                    </div>\n                                </form>\n\n                                <tabset *ngIf=\"showSAFormChannel == true\">\n                                    <tab heading=\"Sales Figure\" id=\"sf1\">\n                                        <form>\n                                            <div class=\"row\">\n\n                                                <div class=\"col-md-4\">\n                                                    <div class=\"form-group\">\n                                                        <label>Country</label>\n                                                        <select class=\"form-control\" (change)=\"changeCountry($event)\">\n                                                            <option value=\"\">Select</option>\n                                                            <option *ngFor=\"let country of countryList\"\n                                                                [value]=\"country.CNTRY_ID\">\n                                                                {{country.CNTRY_NM}}\n                                                            </option>\n                                                        </select>\n                                                    </div>\n                                                </div>\n\n                                                <div *ngIf=\"basedOnSelectionChannel === 'state' || basedOnSelectionChannel === 'city' \"\n                                                    class=\"col-md-4\">\n                                                    <div class=\"form-group\">\n                                                        <label>State</label>\n                                                        <select class=\"form-control\" (change)=\"getChannel($event, 2)\">\n                                                            <option value=\"\">Select</option>\n                                                            <option *ngFor=\"let state of stateList\"\n                                                                [value]=\"state.STATE_ID\">\n                                                                {{state.STATE_NM}}\n                                                            </option>\n                                                        </select>\n                                                    </div>\n                                                </div>\n\n                                            </div>\n\n                                            <div class=\"row\">\n                                                <div class=\"col-md-4\">\n                                                    <div class=\"form-group\">\n                                                        <label>Channel</label>\n                                                        <select class=\"form-control\">\n                                                            <option value=\"\">Select</option>\n                                                            <option *ngFor=\"let item of secondryNodeAccArr2\"\n                                                                [value]=\"item.SECOND_NODE_ACCT_SUBACCT_ID\">\n                                                                {{item.RETAIL_D2C_SUBACCT_OFFICE_NAME}}\n                                                            </option>\n                                                        </select>\n                                                    </div>\n                                                </div>\n                                            </div>\n\n                                            <div class=\"row\">\n\n                                                <div class=\"col-md-4\">\n                                                    <div class=\"form-group\">\n                                                        <label>From Date</label>\n                                                        <div class=\"input-group\">\n                                                            <input type=\"text\" class=\"form-control\" bsDatepicker\n                                                                [bsConfig]=\"{ dateInputFormat: 'DD/MM/YYYY' }\"\n                                                                placeholder=\"dd/mm/yyyy\">\n                                                            <div class=\"input-group-prepend\">\n                                                                <span class=\"input-group-text\"><i\n                                                                        class=\"icofont-ui-calendar\"></i></span>\n                                                            </div>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                                <div class=\"col-md-4\">\n                                                    <div class=\"form-group\">\n                                                        <label>To Date</label>\n                                                        <div class=\"input-group\">\n                                                            <input type=\"text\" class=\"form-control\" bsDatepicker\n                                                                [bsConfig]=\"{ dateInputFormat: 'DD/MM/YYYY' }\"\n                                                                placeholder=\"dd/mm/yyyy\">\n                                                            <div class=\"input-group-prepend\">\n                                                                <span class=\"input-group-text\"><i\n                                                                        class=\"icofont-ui-calendar\"></i></span>\n                                                            </div>\n                                                        </div>\n                                                    </div>\n                                                </div>\n\n                                            </div>\n\n                                            <div class=\"row\">\n                                                <div class=\"col-md-12 text-right mb-3\">\n                                                    <button (click)=\"showAnalysis('Channel Based')\" type=\"submit\"\n                                                        class=\"btn custom-btn\">Generate</button>\n                                                </div>\n                                            </div>\n                                        </form>\n\n                                        <div *ngIf=\"generateResChannelBased == true\" class=\"card p-0\">\n                                            <div class=\"card-header\">\n                                                <!-- <span>Primary/Secondary Channel List</span> -->\n                                            </div>\n                                            <div class=\"card-body no_data_available\">\n                                                <img src=\"assets/images/deactive_icon1.png\" />\n                                                <span>Data Not Available!</span>\n                                            </div>\n                                        </div>\n                                    </tab>\n                                    <tab heading=\"Comparitive Analysis\" id=\"ca1\"></tab>\n                                </tabset>\n                            </tab>\n\n                            <tab (selectTab)=\"onSATabChange('SFA Exec Based')\" heading=\"SFA Exec Based\" id=\"subtab1\">\n                                <form>\n                                    <div class=\"row\">\n\n                                        <div class=\"col-md-4\">\n                                            <div class=\"form-group\">\n                                                <label>Based On</label>\n                                                <select class=\"form-control\"\n                                                    (change)=\"onSelectBasedOn($event, 'SFA Exec Based')\">\n                                                    <option value=\"\" selected>Select</option>\n                                                    <option value=\"state\">Based on State Wide</option>\n                                                </select>\n                                            </div>\n                                        </div>\n\n                                    </div>\n                                    <div class=\"row\">\n                                        <div class=\"col-md-12 text-right mb-3\">\n                                            <button (click)=\"showSaForm('SFA Exec Based')\" type=\"submit\"\n                                                class=\"btn custom-btn\">Submit</button>\n                                        </div>\n                                    </div>\n                                </form>\n\n                                <tabset *ngIf=\"showSAFormSFAExec == true\">\n                                    <tab heading=\"Sales Figure\" id=\"sf1\">\n                                        <form>\n                                            <div class=\"row\">\n\n                                                <div class=\"col-md-4\">\n                                                    <div class=\"form-group\">\n                                                        <label>Country</label>\n                                                        <select class=\"form-control\" (change)=\"changeCountry($event)\">\n                                                            <option value=\"\">Select</option>\n                                                            <option *ngFor=\"let country of countryList\"\n                                                                [value]=\"country.CNTRY_ID\">\n                                                                {{country.CNTRY_NM}}\n                                                            </option>\n                                                        </select>\n                                                    </div>\n                                                </div>\n\n                                                <div *ngIf=\"basedOnSelectionSFAExec === 'state' || basedOnSelectionSFAExec === 'city' \"\n                                                    class=\"col-md-4\">\n                                                    <div class=\"form-group\">\n                                                        <label>State</label>\n                                                        <select class=\"form-control\" (change)=\"getChannel($event, 3)\">\n                                                            <option value=\"\">Select</option>\n                                                            <option *ngFor=\"let state of stateList\"\n                                                                [value]=\"state.STATE_ID\">\n                                                                {{state.STATE_NM}}\n                                                            </option>\n                                                        </select>\n                                                    </div>\n                                                </div>\n\n                                            </div>\n\n                                            <div class=\"row\">\n                                                <div class=\"col-md-4\">\n                                                    <div class=\"form-group\">\n                                                        <label>Channel</label>\n                                                        <select (change)=\"onChannelChange($event)\" class=\"form-control\">\n                                                            <option value=\"\">Select</option>\n                                                            <option *ngFor=\"let item of secondryNodeAccArr3\"\n                                                                [value]=\"toChannelValue(item)\">\n                                                                {{item.RETAIL_D2C_SUBACCT_OFFICE_NAME}}\n                                                            </option>\n                                                        </select>\n                                                    </div>\n                                                </div>\n\n                                                <div class=\"col-md-4\">\n                                                    <div class=\"form-group\">\n                                                        <label>Account Category For</label>\n                                                        <select (change)=\"onAccountCategoryChange($event)\"\n                                                            class=\"form-control\">\n                                                            <option value=\"\">Select</option>\n                                                            <option value=\"primary\">Primary</option>\n                                                            <option value=\"secondary\">Secondary</option>\n                                                            <option value=\"tertiary\">Tertiary</option>\n                                                        </select>\n                                                    </div>\n                                                </div>\n\n                                                <div class=\"col-md-4\">\n                                                    <div class=\"form-group\">\n                                                        <label>SFA</label>\n                                                        <select class=\"form-control\">\n                                                            <option value=\"\">Select</option>\n                                                            <option *ngFor=\"let item of sfaAccountArr\"\n                                                                [value]=\"item.RoleName\">\n                                                                {{item.RoleName}}\n                                                            </option>\n                                                        </select>\n                                                    </div>\n                                                </div>\n                                            </div>\n\n\n                                            <div class=\"row\">\n\n                                                <div class=\"col-md-4\">\n                                                    <div class=\"form-group\">\n                                                        <label>From Date</label>\n                                                        <div class=\"input-group\">\n                                                            <input type=\"text\" class=\"form-control\" bsDatepicker\n                                                                [bsConfig]=\"{ dateInputFormat: 'DD/MM/YYYY' }\"\n                                                                placeholder=\"dd/mm/yyyy\">\n                                                            <div class=\"input-group-prepend\">\n                                                                <span class=\"input-group-text\"><i\n                                                                        class=\"icofont-ui-calendar\"></i></span>\n                                                            </div>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                                <div class=\"col-md-4\">\n                                                    <div class=\"form-group\">\n                                                        <label>To Date</label>\n                                                        <div class=\"input-group\">\n                                                            <input type=\"text\" class=\"form-control\" bsDatepicker\n                                                                [bsConfig]=\"{ dateInputFormat: 'DD/MM/YYYY' }\"\n                                                                placeholder=\"dd/mm/yyyy\">\n                                                            <div class=\"input-group-prepend\">\n                                                                <span class=\"input-group-text\"><i\n                                                                        class=\"icofont-ui-calendar\"></i></span>\n                                                            </div>\n                                                        </div>\n                                                    </div>\n                                                </div>\n\n                                            </div>\n\n                                            <div class=\"row\">\n                                                <div class=\"col-md-12 text-right mb-3\">\n                                                    <button (click)=\"showAnalysis('SFA Exec Based')\" type=\"submit\"\n                                                        class=\"btn custom-btn\">Generate</button>\n                                                </div>\n                                            </div>\n                                        </form>\n                                        <div *ngIf=\"generateResSFAExecBased == true\" class=\"card p-0\">\n                                            <div class=\"card-header\">\n                                                <!-- <span>Primary/Secondary Channel List</span> -->\n                                            </div>\n                                            <div class=\"card-body no_data_available\">\n                                                <img src=\"assets/images/deactive_icon1.png\" />\n                                                <span>Data Not Available!</span>\n                                            </div>\n                                        </div>\n                                    </tab>\n                                    <tab heading=\"Comparitive Analysis\" id=\"ca1\"></tab>\n                                </tabset>\n                            </tab>\n\n                        </tabset>\n\n                    </tab>\n\n                    <tab *ngIf=\"PRIMARY_SELLER_FLG\" heading=\"Delivery Analysis\" id=\"tab5\"></tab>\n                    <tab *ngIf=\"PRIMARY_SELLER_FLG\" heading=\"Panaromic view\" id=\"tab6\"></tab>\n                </tabset>\n            </div>\n            <br><br>\n            <ngx-spinner template=\"<img src='assets/images/icons/please_wait.gif' />\">\n            </ngx-spinner>\n        </div>\n\n        <ng-template #invoiceDetailsModal>\n            <div class=\"modal-header\">\n                <h4 class=\"modal-title pull-left\">Order Invoice & Order Details</h4>\n                <button type=\"button\" class=\"btn-close close pull-right\" aria-label=\"Close\" (click)=\"modalRef?.hide()\">\n                    <span aria-hidden=\"true\" class=\"visually-hidden\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body pt-2\">\n                <div class=\"row\">\n                    <div class=\"col-md-7 pr-5\">\n                        <div class=\"row\">\n                            <div class=\"col-md-6\">\n                                <strong>Invoice No.</strong>\n                            </div>\n                            <div class=\"col-md-6\">\n                                {{invoiceData.RETAIL_D2C_INVOICE_NUMBR}}\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-md-6\">\n                                Invoiced Date\n                            </div>\n                            <div class=\"col-md-6\">\n                                {{invoiceData.RETAIL_D2C_INVOICED_DATETIME | date}}\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-md-6\">\n                                Invoiced on regular day\n                            </div>\n                            <div class=\"col-md-6\">\n                                {{regularDayFlag}}\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-md-6\">\n                                Invoiced on holiday\n                            </div>\n                            <div class=\"col-md-6\">\n                                {{holidayFlag}}\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-md-6\">\n                                Self Delivery Type\n                            </div>\n                            <div class=\"col-md-6\">\n                                {{selfTakeAwayFlag}}\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-5 pl-2 text-right\">\n                        <div class=\"row\">\n                            <div class=\"col-md-8\">\n                                <strong> Order Number</strong>\n                            </div>\n                            <div class=\"col-md-4\">\n                                {{invoiceData.RETAIL_D2C_ORDER_NUMBR}}\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-md-8\">\n                                Home Delivery Type\n                            </div>\n                            <div class=\"col-md-4\">\n                                {{homeDeliveryFlag}}\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-md-8\">\n                                Packages in Order Count\n                            </div>\n                            <div class=\"col-md-4\">\n                                {{invoiceData.RETAIL_D2C_ORDER_PACKAGES_COUNT}}\n                            </div>\n                        </div>\n\n                        <div class=\"row\">\n                            <div class=\"col-md-8\">\n                                Total item in Order\n                            </div>\n                            <div class=\"col-md-4\">\n                                {{invoiceData.RETAIL_D2C_STORE_PRODUCTS_ORDER_NO_TOTAL_QUANTITY}}\n                            </div>\n                        </div>\n                    </div>\n\n                </div>\n\n\n\n                <table class=\"orderList table table-striped\">\n                    <tr>\n                        <th>Sr. No.</th>\n                        <th>Product Name</th>\n                        <th>Item Name</th>\n                        <th>Sub Item Name</th>\n                        <th>Quantity Ordered</th>\n\n                        <th>Disc. Available</th>\n                        <th>Discount Figure</th>\n                        <th>%</th>\n                        <th>MRP</th>\n                    </tr>\n                    <tr *ngFor=\"let invoice of invoiceCartData; index as i\">\n                        <td>{{1+i}}</td>\n                        <td>{{invoice.RETAIL_D2C_PRODUCT_NAME}}</td>\n                        <td>{{invoice.RETAIL_D2C_ITEM_NAME}}</td>\n                        <td>{{invoice.RETAIL_D2C_SUBITEM_NAME}}</td>\n\n                        <td>{{invoice.RETAIL_D2C_SUBITEM_QUANTITY_COUNT}}</td>\n                        <td>{{invoice.RETAIL_D2C_DISCOUNT_AVAILABLE_FLG ? \"Yes\":\"No\"}}</td>\n                        <td>{{invoice.RETAIL_D2C_DISCOUNT_FIGURE}}</td>\n                        <td>{{invoice.RETAIL_D2C_DISCOUNT_PERCENTAGE_FLG ? \"Yes\":\"No\"}}</td>\n                        <td>{{invoice.RETAIL_D2C_MRP_PRICE_TAG}}</td>\n                    </tr>\n                    <tr class=\"no-border\">\n                        <td colspan=\"8\">Convienince fee</td>\n                        <td>{{invoiceData.RETAIL_D2C_CONVENIENCE_FEE_INCLUD_GST}}</td>\n                    </tr>\n\n                    <tr class=\"no-border\">\n                        <td colspan=\"8\">Delivery fee</td>\n                        <td>{{invoiceData.RETAIL_D2C_DELIVERY_FEE_INCLUD_GST}}</td>\n                    </tr>\n                    <tr class=\"no-border\">\n                        <td colspan=\"8\">Customer donation of Rs. 1.00</td>\n                        <td> {{donationFlag}}</td>\n                    </tr>\n\n                    <tr class=\"no-border\">\n                        <td colspan=\"8\">Total invoiced Packaging Cost</td>\n                        <td>{{invoiceData.RETAIL_D2C_INVOICED_PACKAGING_COST}}</td>\n                    </tr>\n                    <tr class=\"no-border\">\n                        <td colspan=\"8\">Total Store items Sales(including GST)</td>\n                        <td>{{invoiceData.RETAIL_D2C_STORE_PRODUCTS_SALES_INCLUD_GST_TOTAL}}</td>\n                    </tr>\n\n                    <tr class=\"no-border\">\n                        <td colspan=\"8\">Customer Invoiced Amount\n                        </td>\n                        <td>{{invoiceData.RETAIL_D2C_TOTAL_CUSTMR_INVOICED_AMT}}</td>\n                    </tr>\n                </table>\n            </div>\n        </ng-template>\n\n        <ng-template #viewcustomer>\n            <div class=\"modal-header\">\n                <h4 class=\"modal-title pull-left\">View Customer<br><small>Customer ID: XXXXXX</small></h4>\n                <button type=\"button\" class=\"btn-close close pull-right\" aria-label=\"Close\" (click)=\"modalRef?.hide()\">\n                    <span aria-hidden=\"true\" class=\"visually-hidden\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"row\">\n                    <div class=\"col-md-6\"><strong>Name</strong></div>\n                    <div class=\"col-md-6\">Rajesh Handa</div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-md-6\"><strong>Primary Customer of Store</strong></div>\n                    <div class=\"col-md-6\">Yes</div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-md-6\"><strong>Contact No.</strong></div>\n                    <div class=\"col-md-6\">xxxxxxxxx</div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-md-6\"><strong>Address</strong></div>\n                    <div class=\"col-md-6\">xxxxxxxxx</div>\n                </div>\n                <div class=\"row\">\n\n                    <div class=\"col-md-12 text-right\"><button class=\"btn custom-btn\">Close</button></div>\n                </div>\n            </div>\n        </ng-template>\n\n        <ng-template #cartTemplate>\n            <div class=\"modal-header\">\n                <h4 class=\"modal-title pull-left\">Cart ID: {{cartid}}</h4>\n                <button type=\"button\" class=\"btn-close close pull-right\" aria-label=\"Close\" (click)=\"modalRef?.hide()\">\n                    <span aria-hidden=\"true\" class=\"visually-hidden\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"card card-head mb-1 p-0\">\n                    <div class=\"card-body\">\n                        <div class=\"d-flex justify-content-between\">\n                            <div class=\"d-flex flex-row align-items-center\">\n                                <strong>Serial No.</strong>\n\n                            </div>\n                            <div class=\"d-flex flex-row align-items-center\">\n                                <strong>Product Line Name</strong>\n                            </div>\n                            <div class=\"d-flex flex-row align-items-center\">\n                                <strong>Item Name</strong>\n                            </div>\n                            <div class=\"d-flex flex-row align-items-center\">\n                                <strong>Sub Item Name</strong>\n                            </div>\n                            <div class=\"d-flex flex-row align-items-center\">\n                                <strong>Quantity</strong>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"card mb-3 p-0\" *ngFor=\"let cartList of cartData; index as i\">\n                    <div class=\"card-body\">\n                        <div class=\"d-flex justify-content-between\">\n                            <div class=\"d-flex flex-row align-items-center\">\n                                {{1+i}}\n                            </div>\n                            <div class=\"d-flex flex-row align-items-center\">\n                                {{cartList.RETAIL_D2C_PRODUCT_NAME}}\n                            </div>\n                            <div class=\"d-flex flex-row align-items-center\">\n                                {{cartList.RETAIL_D2C_ITEM_NAME}}\n                            </div>\n                            <div class=\"d-flex flex-row align-items-center\">\n                                {{cartList.RETAIL_D2C_SUBITEM_NAME}}\n                            </div>\n                            <div class=\"d-flex flex-row align-items-center\">\n                                {{cartList.RETAIL_D2C_SUBITEM_QUANTITY_COUNT}}\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </ng-template>\n\n        <ng-template #orderDetailsModal>\n            <div class=\"modal-header\">\n                <h4 class=\"modal-title pull-left\">Delivery Details<br>\n                    <small>Order Number: {{orderNumber}}</small>\n                </h4>\n                <button type=\"button\" class=\"btn-close close pull-right\" aria-label=\"Close\" (click)=\"modalRef?.hide()\">\n                    <span aria-hidden=\"true\" class=\"visually-hidden\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"row\">\n                    <div class=\"col-md-6\">\n                        <strong>Order Requested on Vend</strong>\n                    </div>\n                    <div class=\"col-md-6\">\n                        {{orderDetailsData.RETAIL_D2C_DELIVERY_RQSTD_ALLOCATD_ON_PLATFORM_DATETIME}}\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-md-6\">\n                        <strong>Delivery Taken from Vend</strong>\n                    </div>\n                    <div class=\"col-md-6\">\n                        {{yesNoText}}\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-md-6\">\n                        <strong>Order Delivered to Customer</strong>\n                    </div>\n                    <div class=\"col-md-6\">\n                        {{yesNoText}}\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-md-6\">\n                        <strong> Order Delivered to Customer Date Time</strong>\n                    </div>\n                    <div class=\"col-md-6\">\n                        {{orderDetailsData.RETAIL_RQST_ORDER_DELIVERY_DONE_TO_CUSTMR_DATETIME}}\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-md-6\">\n                        <strong>Delivery on Pincode</strong>\n                    </div>\n                    <div class=\"col-md-6\">\n                        {{orderDetailsData.RETAIL_D2C_DELIVERY_RQSTD_CUSTMR_PINCODE}}\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-md-6\">\n                        <strong> Allocated to Vahan</strong>\n                    </div>\n                    <div class=\"col-md-6\">\n                        {{yesNoText}}\n                    </div>\n                </div>\n\n                <div class=\"row\">\n                    <div class=\"col-md-6\">\n                        <strong> Delivery taken from Vend Date Time</strong>\n                    </div>\n                    <div class=\"col-md-6\">\n                        {{orderDetailsData.RETAIL_RQST_ORDER_TAKEN_FROM_VEND_DATETIME}}\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div (click)=\"closeModal()\" class=\"col-md-12 pt-3 text-right\"><button\n                            class=\"btn custom-btn\">Close</button></div>\n                </div>\n            </div>\n        </ng-template>\n\n        <ng-template #viewStocksMovement>\n            <div class=\"modal-header\">\n                <h4 class=\"modal-title pull-left\">{{movementName}} Movement of Stocks</h4>\n\n                <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"viewStocksModalRef.hide()\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n\n                <div class=\"row\">\n                    <div class=\"col-md-3\">\n                        <label for=\"fromDate\">From Date</label>\n                        <div class=\"input-group\">\n                            <input type=\"text\" id=\"fromDate\" class=\"form-control\" bsDatepicker\n                                [bsConfig]=\"{ dateInputFormat: 'DD/MM/YYYY' }\" placeholder=\"dd/mm/yyyy\">\n                            <div class=\"input-group-prepend\">\n                                <span class=\"input-group-text\"><i class=\"icofont-ui-calendar\"></i></span>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-3\">\n                        <label for=\"toDate\">To Date</label>\n                        <div class=\"input-group\">\n                            <input type=\"text\" id=\"toDate\" class=\"form-control\" bsDatepicker\n                                [bsConfig]=\"{ dateInputFormat: 'DD/MM/YYYY' }\" placeholder=\"dd/mm/yyyy\">\n                            <div class=\"input-group-prepend\">\n                                <span class=\"input-group-text\"><i class=\"icofont-ui-calendar\"></i></span>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"row\">\n                    <div class=\"col-md-12 pt-3 text-right\"><button class=\"btn custom-btn\">View</button></div>\n                </div>\n\n                <div class=\"row\">\n                    <div class=\"col-md-12\">\n                        <table class=\"table table-bordered mt-3\">\n                            <thead>\n                                <tr>\n                                    <th>Serial</th>\n                                    <th>Order</th>\n                                    <th>Date</th>\n                                    <th>Invoice</th>\n                                    <th>Item ID</th>\n                                    <th>Movement</th>\n                                    <th>Item Counts</th>\n                                    <th>Seller Name</th>\n                                    <th>Buyer Name</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <!-- Replace this row with *ngFor when data is available -->\n                                <tr>\n                                    <td colspan=\"9\" class=\"text-center\">No data available</td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n\n            </div>\n        </ng-template>\n\n        <ng-template #address>\n            <form>\n            <div class=\"modal-header\">\n                <h4 class=\"modal-title pull-left\">Store Address</h4>\n                <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\"\n                (click)=\"addressRef.hide()\">\n                <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n\n            <div class=\"modal-body\">\n\n                <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <p>Store Name</p>\n                </div>\n                <div class=\"col-md-6\">\n                    {{storeAddress?.storeName}}\n                </div>\n                </div>\n\n                <!-- <div class=\"row mt-1\">\n                <div class=\"col-md-6\">\n                    <p>Country</p>\n                </div>\n                <div class=\"col-md-6\">\n                    {{storeAddress?.Country}}\n                </div>\n                </div>\n\n                <div class=\"row mt-1\">\n                <div class=\"col-md-6\">\n                    <p>State</p>\n                </div>\n                <div class=\"col-md-6\">\n                    {{storeAddress?.State}}\n                </div>\n                </div>\n\n                <div class=\"row mt-1\">\n                <div class=\"col-md-6\">\n                    <p>City</p>\n                </div>\n                <div class=\"col-md-6\">\n                    {{storeAddress?.City}}\n                </div>\n                </div> -->\n\n                <div class=\"row mt-1\">\n                <div class=\"col-md-6\">\n                    <p>Pincode</p>\n                </div>\n                <div class=\"col-md-6\">\n                    {{storeAddress?.Pincode}}\n                </div>\n                </div>\n\n                <div class=\"row mt-1\">\n                <div class=\"col-md-6\">\n                    <p>Store Address</p>\n                </div>\n                <div class=\"col-md-6\">\n                    {{storeAddress?.Address}}\n                </div>\n                </div>\n            </div>\n\n            <div class=\"modal-footer\">\n                <button (click)=\"addressRef.hide()\" type=\"button\"\n                class=\"btn btn-secondary\">Close</button>\n            </div>\n            </form>\n        </ng-template>", styles: [".toplevel {\r\n    background: #fff;\r\n    padding: 20px;\r\n    margin-bottom: 15px;\r\n    margin-top: 10px;\r\n    border: 1px solid #ddd;\r\n    border-radius: 5px;\r\n}\r\n\r\n.table-font-size th,\r\n.table-font-size td {\r\n  font-size: 13px; /* Change to your desired size */\r\n}\r\n\r\n.vipDiv {\r\n    background: #f8f9fa;\r\n    padding: 15px;\r\n    border-radius: 3px;\r\n    min-height: 210px;\r\n}\r\n\r\n.orderStatus td {\r\n    vertical-align: middle;\r\n}\r\n\r\n.orderStatus td .btn {\r\n    font-size: 13px;\r\n    padding: 4px 10px;\r\n}\r\n\r\n.orderStatus small {\r\n    color: #c50f20;\r\n    font-size: 90%;\r\n    font-weight: 600;\r\n}\r\n\r\n.bottom-btn {\r\n    float: right;\r\n}\r\n\r\n.alert.alert-success {\r\n    padding: 5px 10px;\r\n}\r\n\r\n.alert .fa {\r\n    font-size: 25px;\r\n    vertical-align: middle;\r\n    margin-left: 5px;\r\n}\r\n\r\n.orderStatus {\r\n    .card-header {\r\n        border: 0;\r\n    }\r\n    .card-body {\r\n        padding: 0;\r\n        overflow: auto;\r\n    }\r\n}\r\n\r\nh3.head-title {\r\n    font-size: 22px;\r\n    margin: 20px 0;\r\n    font-weight: bold;\r\n}\r\n\r\n.icon .fa {\r\n    font-size: 20px;\r\n    vertical-align: top;\r\n    color: #17a2b8;\r\n}\r\n\r\n.orderStatus .icon img {\r\n    max-width: 25px;\r\n}\r\n\r\n.orderStatus .btn {\r\n    background: #021422;\r\n    border-radius: 25px;\r\n    color: #fff;\r\n    font-size: 11px !important;\r\n    border: 1px solid #21333c;\r\n    i {\r\n        font-size: 18px;\r\n        vertical-align: middle;\r\n        padding-right: 5px;\r\n    }\r\n}\r\n\r\nbutton.btn.view-del-btn {\r\n    background: #63030c !important;\r\n}\r\n\r\n.table thead th {\r\n    border: 0;\r\n}\r\n\r\n.toplevel,\r\n.card {\r\n    padding: 0 20px 0;\r\n}\r\n\r\n.table th {\r\n    padding: 8px 5px;\r\n    text-align: center;\r\n    line-height: 13px;\r\n    font-weight: 600;\r\n    font-size: 13px;\r\n    border-top: 0;\r\n}\r\n\r\n.table td {\r\n    text-align: center;\r\n    font-size: 12px;\r\n    line-height: 15px;\r\n    padding: 10px 5px;\r\n}\r\n\r\ntd.icon {\r\n    padding: 0 !important;\r\n}\r\n\r\nbutton.btn.custom-btn {\r\n    min-width: 100px;\r\n}\r\n\r\n::ng-deep .nav-tabs .nav-link {\r\n  font-size: 11px; /* Adjust as needed */\r\n}\r\n\r\nbutton.btn.custom-btn-white {\r\n    min-width: 100px;\r\n    background: #ffffff;\r\n    border: 1px solid #c50f20;\r\n    color: #c50f20;\r\n    font-weight: 600;\r\n\r\n    &:hover {\r\n        background: #c50f20;\r\n        color: #ffffff;\r\n    }\r\n}\r\n\r\n.input-group-prepend+.invalid-feedback {\r\n    top: 35px;\r\n}\r\n\r\n.card-header {\r\n    padding: 10px 15px;\r\n    background: #63030c;\r\n    font-size: 12px;\r\n    color: #fff;\r\n    font-weight: 500;\r\n    span {\r\n        float: left;\r\n    }\r\n    span+span {\r\n        float: right;\r\n    }\r\n}\r\n\r\n.card-header img {\r\n    width: 16px;\r\n    margin-left: 3px;\r\n}\r\n\r\n.subcard-header {\r\n    padding: 8px 12px;\r\n    background: #63030c;\r\n    font-size: 10px;\r\n    color: #fff;\r\n    font-weight: 500;\r\n    span {\r\n        float: left;\r\n    }\r\n    span+span {\r\n        float: right;\r\n    }\r\n}\r\n\r\n.subcard-header img {\r\n    width: 16px;\r\n    margin-left: 3px;\r\n}\r\n\r\n.icofont-info-circle {\r\n    font-size: 20px;\r\n    vertical-align: middle;\r\n    margin-left: 3px;\r\n}\r\n\r\n.orderList thead tr {\r\n    background: #ff000029;\r\n}\r\n\r\n.orderList {\r\n    border-collapse: collapse;\r\n    border: 1px solid #ddd;\r\n    margin: 5px 0;\r\n}\r\n\r\n.orderList td {\r\n    border: 1px solid #ddd;\r\n}\r\n\r\n.orderList tr th {\r\n    background: #212529;\r\n    color: #fff;\r\n    vertical-align: middle;\r\n}\r\n\r\n.no-border td {\r\n    border: 0 !important;\r\n    text-align: right !important;\r\n    font-weight: 600;\r\n    font-size: 12px !important;\r\n}\r\n\r\nsmall.view-customer {\r\n    display: block;\r\n    text-decoration: underline;\r\n    cursor: pointer;\r\n}\r\n\r\nbutton.btn.view-ord-btn {\r\n    min-width: 112px;\r\n}\r\n\r\nbutton.btn.view-del-btn {\r\n    min-width: 125px;\r\n}\r\n\r\n.card-body.no_data_available {\r\n    text-align: center;\r\n    color: #bd2130;\r\n    img {\r\n        display: block;\r\n        text-align: center;\r\n        margin: 0 auto 5px;\r\n        max-width: 30px;\r\n    }\r\n}\r\n\r\n\r\nsmall.viewCart {\r\n    text-decoration: underline;\r\n    cursor: pointer;\r\n}\r\n\r\n.hr {\r\n    border: none;\r\n    border-top: 1.5px solid #d1d1d1;\r\n    margin: 16px 0;\r\n    height: 0;\r\n    width: 100%;\r\n}\r\n\r\nh1.heading-title {\r\n    margin: 20px 0 0;\r\n}\r\n\r\n.heading h2 {\r\n    padding: 10px 5px 10px;\r\n    font-size: 20px;\r\n}\r\n\r\n.row.topLevel {\r\n    background: #fff;\r\n    padding: 20px 0;\r\n    margin: 0;\r\n    border-radius: 5px;\r\n}\r\n\r\n.heading.store-domain {\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.store-domain div {\r\n    display: inline-block;\r\n    margin-right: 20px;\r\n}\r\n\r\n.store-domain span {\r\n    background: #ddd;\r\n    padding: 5px 20px;\r\n    font-size: 13px;\r\n    border-radius: 20px;\r\n    display: inline-block;\r\n    font-weight: bold;\r\n    margin-left: 5px;\r\n}\r\n\r\n.store_id {\r\n    background: #ddd;\r\n    padding: 5px 20px;\r\n    border-radius: 20px;\r\n    font-size: 13px;\r\n    font-weight: 700;\r\n    float: right;\r\n    margin-top: -40px;\r\n}\r\n\r\n.box {\r\n    width: 100%;\r\n    overflow: hidden;\r\n    box-shadow: 0 0 4px 0px #eee;\r\n    margin: 20px 0 5px;\r\n    border-radius: 4px;\r\n    padding: 10px;\r\n    background: #fff;\r\n}\r\n\r\n.main-content-area .box .col {\r\n    width: 20%;\r\n    float: left;\r\n    padding: 0;\r\n}\r\n\r\n.fa-star:before {\r\n    content: \"\\f005\";\r\n    color: #ff9600;\r\n    margin-right: 5px;\r\n}\r\n\r\n.pro-box {\r\n    box-shadow: 0 0 4px 0 #e9ecef;\r\n    margin: 0 5px 10px;\r\n    overflow: hidden;\r\n    padding: 15px;\r\n    border-radius: 3px;\r\n    position: relative;\r\n    border: 1px solid #dee2e6;\r\n}\r\n\r\n.pro-box img {\r\n    height: 100px;\r\n    width: 100px;\r\n    margin: 30px auto 15px;\r\n    display: block;\r\n}\r\n\r\n.storeitem .p-details {\r\n    margin-bottom: 42px;\r\n}\r\n\r\np.label-txt {\r\n    text-align: center;\r\n    padding: 10px;\r\n    font-size: 14px;\r\n    margin: 0;\r\n}\r\n\r\n.store-available-product .col {\r\n    width: 25% !important;\r\n}\r\n\r\n.selected-productLine h5,\r\n.store-available-product h5 {\r\n    font-size: 16px;\r\n    padding: 0 10px 5px;\r\n}\r\n\r\n.right-field-head {\r\n    float: right;\r\n    margin-top: 10px;\r\n}\r\n\r\n.right-field-head li {\r\n    display: inline-block;\r\n    padding: 0 10px;\r\n}\r\n\r\nspan.video,\r\nspan.doc {\r\n    padding: 8px 15px;\r\n    background: #dee2e6;\r\n    font-size: 12px;\r\n    border-radius: 20px;\r\n}\r\n\r\n.right-field-head .btn {\r\n    font-size: 11px;\r\n    border-radius: 20px;\r\n}\r\n\r\n.bottom-btn .btn {\r\n    line-height: 11px;\r\n}\r\n\r\n.box.prduct-gallery {\r\n    position: relative;\r\n}\r\n\r\n.sample-img {\r\n    position: absolute;\r\n    z-index: 1;\r\n    left: 15%;\r\n    top: 28%;\r\n    transform: rotate(-45deg);\r\n}\r\n\r\np.p-name {\r\n    text-align: center;\r\n    margin: 0;\r\n    font-size: 13px;\r\n    font-weight: 500;\r\n    vertical-align: middle;\r\n}\r\n\r\np.item-id {\r\n    text-align: center;\r\n    position: absolute;\r\n    top: 0;\r\n    background: #212529;\r\n    left: 0;\r\n    font-weight: 600;\r\n    color: #fff;\r\n    border-radius: 0 0 5px;\r\n    font-size: 11px;\r\n    padding: 3px 6px;\r\n}\r\n\r\nspan.price {\r\n    font-size: 12px;\r\n    padding: 7px 10px 0;\r\n    float: left;\r\n    font-weight: 600;\r\n    line-height: 20px;\r\n}\r\n\r\n.item-id b {\r\n    font-weight: 600;\r\n}\r\n\r\n.instock {\r\n    font-size: 12px;\r\n    text-align: center;\r\n    margin: 0 0 3px;\r\n    position: absolute;\r\n    top: 5%;\r\n    box-shadow: 0 0 30px 0 rgb(82 63 105 / 10%);\r\n    left: 70%;\r\n    background: rgb(224 152 152 / 24%);\r\n    width: 50px;\r\n    border: 1px solid rgb(0 0 0 / 10%);\r\n    height: 50px;\r\n    border-radius: 50%;\r\n    img {\r\n        width: 30px !important;\r\n        height: 30px !important;\r\n        margin: 9px auto;\r\n    }\r\n}\r\n\r\n.pro-box.storeitem.item-box {\r\n    border: 1px solid #dee2e6;\r\n    height: 300px;\r\n    padding-left: 20px;\r\n    padding-right: 20px;\r\n}\r\n\r\nh1.heading-title {\r\n    font-size: 20px;\r\n    text-transform: uppercase;\r\n    font-weight: 700;\r\n    color: #ff7900;\r\n    position: relative;\r\n    margin-bottom: 10px;\r\n    width: 100%;\r\n    span {\r\n        font-size: 10px;\r\n        text-transform: inherit;\r\n        background: #495057;\r\n        color: #fff;\r\n        padding: 10px 15px;\r\n        border-radius: 25px;\r\n    }\r\n}\r\n\r\nh1.heading-title img {\r\n    max-width: 65px;\r\n    margin-right: 5px;\r\n}\r\n\r\nh1.heading-title small {\r\n    display: inline-block;\r\n    font-weight: 400;\r\n    font-size: 13px;\r\n    position: absolute;\r\n    left: 80px;\r\n    bottom: 4px;\r\n    color: grey;\r\n}\r\n\r\n.offerDiv {\r\n    position: absolute;\r\n    top: 5px;\r\n    right: 5px;\r\n    font-size: 10px;\r\n    background: #dc3545;\r\n    line-height: 10px;\r\n    font-weight: 700;\r\n    width: 35px;\r\n    height: 35px;\r\n    border-radius: 50%;\r\n    padding: 9px;\r\n    text-align: center;\r\n    color: #fff;\r\n}\r\n\r\n.offerDiv small {\r\n    display: block;\r\n}\r\n\r\nspan.price.strike-price {\r\n    color: #ccc;\r\n    text-decoration: line-through;\r\n}\r\n\r\n.row.text-level {\r\n    margin: 0 -10px 10px;\r\n}\r\n\r\n.store-add-remove {\r\n    text-align: center;\r\n    padding: 10px;\r\n    float: left;\r\n    width: 100%;\r\n}\r\n\r\n.row.product-slider-box {\r\n    border-bottom: 5px solid #ddd;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.carousel-inner {\r\n    height: 278px;\r\n}\r\n\r\n.carousel-item {\r\n    margin-right: 0;\r\n    border: 1px solid #f8f9fa;\r\n    background: #fff;\r\n}\r\n\r\n.product-slider-box .domain-product {\r\n    max-width: 23%;\r\n}\r\n\r\n.product-slider-box .sub-domain-product {\r\n    max-width: 77%;\r\n}\r\n\r\n.store-add-remove .btn {\r\n    font-size: 11px;\r\n    text-align: center;\r\n    float: left;\r\n    transition: all .5s;\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n    min-width: 65px;\r\n}\r\n\r\n.store-add-remove .btn+.btn {\r\n    float: right;\r\n}\r\n\r\n.item-subitem-list .pro-box {\r\n    width: 95%;\r\n    overflow: auto;\r\n    height: 280px;\r\n}\r\n\r\n.item-subitem-list li {\r\n    width: 100%;\r\n    float: left;\r\n}\r\n\r\n.item-box {\r\n    max-width: 225px;\r\n    width: 100%;\r\n    float: left;\r\n}\r\n\r\n.sub-item-box {\r\n    width: 100%;\r\n    float: left;\r\n    max-width: 225px;\r\n}\r\n\r\n.sub-item-box .add_to_cart button.btn {\r\n    background: #000064;\r\n    height: 35px;\r\n    font-size: 13px;\r\n    line-height: 16px;\r\n    color: #fff;\r\n    border-radius: 25px;\r\n    margin: 10px 0 0;\r\n    width: 100%;\r\n    text-align: center;\r\n}\r\n\r\n.add_to_cart {\r\n    .remove-btn {\r\n        border-radius: 50%;\r\n        background: #05054ead !important;\r\n        color: #fff;\r\n        height: 35px;\r\n        padding: 0;\r\n    }\r\n    .btn+.btn {\r\n        width: 100%;\r\n        border: 0;\r\n        border-radius: 30px;\r\n        font-size: 15px;\r\n        line-height: normal;\r\n        font-weight: 600;\r\n    }\r\n}\r\n\r\n.middle-arrow {\r\n    float: left;\r\n    width: 30px;\r\n    height: 50px;\r\n    font-size: 40px;\r\n    margin-top: 10%;\r\n    color: #dee2e6;\r\n    text-align: center;\r\n}\r\n\r\n.price-details {\r\n    float: left;\r\n    width: 100%;\r\n    margin-bottom: 10px;\r\n    font-size: 15px;\r\n    line-height: normal;\r\n    font-weight: 600;\r\n    .unit-price {\r\n        float: left;\r\n        width: 42%;\r\n    }\r\n}\r\n\r\n.unit-price span {\r\n    display: block;\r\n    font-size: 12px;\r\n    font-weight: 400;\r\n}\r\n\r\n.whole-sale-price {\r\n    float: right;\r\n    width: 58%;\r\n    text-align: right;\r\n    span {\r\n        font-size: 12px;\r\n        display: block;\r\n        font-weight: 400;\r\n    }\r\n}\r\n\r\n.add_to_cart {\r\n    clear: both;\r\n}\r\n\r\n.subItem-field {\r\n    width: calc(100% - 280px);\r\n    float: left;\r\n}\r\n\r\n.item img {\r\n    width: 100%;\r\n}\r\n\r\n.pro-box.active {\r\n    border: 1px solid #63030c;\r\n}\r\n\r\n.p-details .form-control {\r\n    font-size: 13px;\r\n    padding: 0 5px;\r\n    min-height: 25px;\r\n    height: 25px;\r\n    text-align: center;\r\n}\r\n\r\n.p-details .form-group label {\r\n    margin-bottom: 0;\r\n    font-weight: 400;\r\n    line-height: normal;\r\n    padding-top: 2px;\r\n    padding-bottom: 2px;\r\n}\r\n\r\n.p-details .form-group {\r\n    margin-bottom: 4px;\r\n}\r\n\r\n.sub-item-box img {\r\n    margin-top: 5px !important;\r\n}\r\n\r\n.p-details p {\r\n    font-size: 12px;\r\n    line-height: 14px;\r\n}\r\n\r\n.add-stock input {\r\n    display: inline-block !important;\r\n    width: 60px !important;\r\n    margin-left: 5px;\r\n    vertical-align: middle;\r\n}\r\n\r\n.min-alert-count input {\r\n    width: 35px;\r\n    margin-left: 5px;\r\n    display: inline-block;\r\n    margin-right: 4px;\r\n}\r\n\r\n.d-flex span+span {\r\n    margin-left: auto;\r\n    font-weight: 600;\r\n    width: 60px;\r\n    i {\r\n        font-size: 16px;\r\n        color: #bd2130;\r\n        display: inline-block;\r\n        position: relative;\r\n        top: 2px;\r\n        cursor: pointer;\r\n    }\r\n}\r\n\r\n.sub-item-box .pro-box img {\r\n    height: 55px;\r\n    width: 55px;\r\n    margin: 18px auto 8px;\r\n}\r\n\r\n.links a {\r\n    display: block;\r\n    color: #17a2b8 !important;\r\n    text-decoration: underline !important;\r\n    font-size: 12px;\r\n    cursor: pointer;\r\n}\r\n\r\n.modal-header i {\r\n    margin: 5px 0;\r\n    color: #bd2130;\r\n}\r\n\r\n.field {\r\n    margin-bottom: 10px;\r\n    select {\r\n        border: 1px solid #ddd;\r\n        border-radius: 3px;\r\n        height: 26px;\r\n        font-size: 12px;\r\n        margin-left: 10px;\r\n        margin-top: -4px;\r\n        width: 60px;\r\n    }\r\n}"] }]
    }], function () { return [{ type: i1.ApiService }, { type: i2.BsModalService }, { type: i3.FormBuilder }, { type: i4.Router }, { type: i5.ToastrService }, { type: i6.NgxSpinnerService }]; }, null); })();
//# sourceMappingURL=orders-pending-list-d2-c-idc-pos.component.js.map