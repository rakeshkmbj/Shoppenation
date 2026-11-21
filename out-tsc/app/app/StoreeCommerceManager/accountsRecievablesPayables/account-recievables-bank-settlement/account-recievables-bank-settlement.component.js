import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "src/app/services/api.service";
import * as i2 from "ngx-bootstrap/modal";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/router";
import * as i5 from "ngx-toastr";
import * as i6 from "ngx-spinner";
import * as i7 from "@angular/common";
import * as i8 from "ngx-bootstrap/datepicker";
function AccountRecievablesBankSettlementComponent_option_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 15);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const country_r6 = ctx.$implicit;
    i0.ɵɵproperty("value", country_r6.CNTRY_ID);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", country_r6.CNTRY_NM, "");
} }
function AccountRecievablesBankSettlementComponent_option_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 15);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const state_r7 = ctx.$implicit;
    i0.ɵɵproperty("value", state_r7.STATE_ID);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", state_r7.STATE_NM, "");
} }
function AccountRecievablesBankSettlementComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 16)(1, "div", 17)(2, "span");
    i0.ɵɵtext(3, "Primary/Secondary Channel List");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 18);
    i0.ɵɵelement(5, "img", 19);
    i0.ɵɵelementStart(6, "span");
    i0.ɵɵtext(7, "Data Not Available!");
    i0.ɵɵelementEnd()()();
} }
function AccountRecievablesBankSettlementComponent_div_27_tr_29_img_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 31);
} }
function AccountRecievablesBankSettlementComponent_div_27_tr_29_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 32);
} }
function AccountRecievablesBankSettlementComponent_div_27_tr_29_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr")(1, "td", 25);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td", 25);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "td", 25);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "td", 25);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "td", 25);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "td", 25);
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "td", 25);
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "td", 25);
    i0.ɵɵtemplate(16, AccountRecievablesBankSettlementComponent_div_27_tr_29_img_16_Template, 1, 0, "img", 27);
    i0.ɵɵtemplate(17, AccountRecievablesBankSettlementComponent_div_27_tr_29_ng_template_17_Template, 1, 0, "ng-template", null, 28, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "td")(20, "div", 29)(21, "span", 30);
    i0.ɵɵlistener("click", function AccountRecievablesBankSettlementComponent_div_27_tr_29_Template_span_click_21_listener() { i0.ɵɵrestoreView(_r15); const ctx_r14 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r14.generateReport("Receivable")); });
    i0.ɵɵtext(22, "Receivable");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "span", 30);
    i0.ɵɵlistener("click", function AccountRecievablesBankSettlementComponent_div_27_tr_29_Template_span_click_23_listener() { i0.ɵɵrestoreView(_r15); const ctx_r16 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r16.generateReport("Payable")); });
    i0.ɵɵtext(24, "Payable ");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    const i_r10 = ctx.index;
    const _r12 = i0.ɵɵreference(18);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i_r10 + 1);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r9.ECOMM_PLATFORM_ID);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r9.SECOND_NODE_ACCT_SUBACCT_ID);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r9.SECOND_NODE_ACCT_STORE_ID);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r9.RETAIL_D2C_SUBACCT_OFFICE_NAME);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r9.ACCT_PRIMRY_SECNDRY_B2B_LINK_SEQ_ID);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r9.CategoryName);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", item_r9.PRIMRY_SECNDRY_ACCTS_b2B_ACTIV_FLG)("ngIfElse", _r12);
} }
function AccountRecievablesBankSettlementComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20)(1, "div", 17)(2, "span");
    i0.ɵɵtext(3, "Primary/Secondary Channel List");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 21)(5, "div", 22)(6, "div", 23)(7, "table", 24)(8, "thead")(9, "tr")(10, "th", 25);
    i0.ɵɵtext(11, "Sr#");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "th", 25);
    i0.ɵɵtext(13, "PltfrmId");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "th", 25);
    i0.ɵɵtext(15, "Subacc Id");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "th", 25);
    i0.ɵɵtext(17, "Store Id");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "th", 25);
    i0.ɵɵtext(19, "Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "th", 25);
    i0.ɵɵtext(21, "B2B Id");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "th", 25);
    i0.ɵɵtext(23, "Category");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "th", 25);
    i0.ɵɵtext(25, "B2B flg");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "th", 25);
    i0.ɵɵtext(27, "Action");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(28, "tbody");
    i0.ɵɵtemplate(29, AccountRecievablesBankSettlementComponent_div_27_tr_29_Template, 25, 9, "tr", 26);
    i0.ɵɵelementEnd()()()()()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(29);
    i0.ɵɵproperty("ngForOf", ctx_r3.secondryNodeAccArr);
} }
const _c0 = function () { return { dateInputFormat: "DD/MM/YYYY" }; };
function AccountRecievablesBankSettlementComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    const _r18 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 2)(1, "h4");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "label");
    i0.ɵɵtext(7, "From Date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div", 33);
    i0.ɵɵelement(9, "input", 34);
    i0.ɵɵelementStart(10, "div", 35)(11, "span", 36);
    i0.ɵɵelement(12, "i", 37);
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(13, "div", 4)(14, "div", 5)(15, "label");
    i0.ɵɵtext(16, "To Date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "div", 33);
    i0.ɵɵelement(18, "input", 34);
    i0.ɵɵelementStart(19, "div", 35)(20, "span", 36);
    i0.ɵɵelement(21, "i", 37);
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(22, "div", 38)(23, "div", 5)(24, "label", 39);
    i0.ɵɵtext(25, "\u00A0");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "button", 40);
    i0.ɵɵlistener("click", function AccountRecievablesBankSettlementComponent_div_28_Template_button_click_26_listener() { i0.ɵɵrestoreView(_r18); const ctx_r17 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r17.generate()); });
    i0.ɵɵtext(27, "Generate Report");
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Generate Report For ", ctx_r4.reportType, "");
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("bsConfig", i0.ɵɵpureFunction0(3, _c0));
    i0.ɵɵadvance(9);
    i0.ɵɵproperty("bsConfig", i0.ɵɵpureFunction0(4, _c0));
} }
function AccountRecievablesBankSettlementComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 41)(1, "div", 21)(2, "div", 3)(3, "div", 42)(4, "table", 24)(5, "thead")(6, "tr")(7, "th");
    i0.ɵɵtext(8, "Sr. No.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "th");
    i0.ɵɵtext(10, "Order");
    i0.ɵɵelement(11, "br");
    i0.ɵɵtext(12, " Date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "th");
    i0.ɵɵtext(14, "Customer#");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "th");
    i0.ɵɵtext(16, "Order");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "th");
    i0.ɵɵtext(18, "Total");
    i0.ɵɵelement(19, "br");
    i0.ɵɵtext(20, " Order Amt.(RS)");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "th");
    i0.ɵɵtext(22, "Amt Due to Vend");
    i0.ɵɵelement(23, "br");
    i0.ɵɵtext(24, " After Platform Exp.(RS)");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "th");
    i0.ɵɵtext(26, "Pending Status");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "th");
    i0.ɵɵtext(28, "Settled");
    i0.ɵɵelement(29, "br");
    i0.ɵɵtext(30, " Bank Transaction");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(31, "th");
    i0.ɵɵtext(32, "Bank");
    i0.ɵɵelement(33, "br");
    i0.ɵɵtext(34, " Transaction Date");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(35, "tbody")(36, "tr")(37, "td");
    i0.ɵɵtext(38, "01");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(39, "td");
    i0.ɵɵtext(40, "12/05/2020");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(41, "td");
    i0.ɵɵtext(42, "2030567898");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(43, "td");
    i0.ɵɵtext(44, "35677");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(45, "td");
    i0.ɵɵtext(46, " 554.00");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(47, "td");
    i0.ɵɵtext(48, " 535.00");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(49, "td");
    i0.ɵɵtext(50, " Paid");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(51, "td");
    i0.ɵɵtext(52, " B3045645656");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(53, "td");
    i0.ɵɵtext(54, " 19/05/2020");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(55, "tr")(56, "td");
    i0.ɵɵtext(57, "02");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(58, "td");
    i0.ɵɵtext(59, "12/05/2020");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(60, "td");
    i0.ɵɵtext(61, "2030567898");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(62, "td");
    i0.ɵɵtext(63, "35677");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(64, "td");
    i0.ɵɵtext(65, " 554.00");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(66, "td");
    i0.ɵɵtext(67, " 535.00");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(68, "td");
    i0.ɵɵtext(69, " Paid");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(70, "td");
    i0.ɵɵtext(71, " B3045645656");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(72, "td");
    i0.ɵɵtext(73, " 19/05/2020");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(74, "tr")(75, "td");
    i0.ɵɵtext(76, "03");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(77, "td");
    i0.ɵɵtext(78, "12/05/2020");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(79, "td");
    i0.ɵɵtext(80, "2030567898");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(81, "td");
    i0.ɵɵtext(82, "35677");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(83, "td");
    i0.ɵɵtext(84, " 554.00");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(85, "td");
    i0.ɵɵtext(86, " 535.00");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(87, "td");
    i0.ɵɵtext(88, " Paid");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(89, "td");
    i0.ɵɵtext(90, " B3045645656");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(91, "td");
    i0.ɵɵtext(92, " 19/05/2020");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(93, "tr")(94, "td");
    i0.ɵɵtext(95, "04");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(96, "td");
    i0.ɵɵtext(97, "12/05/2020");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(98, "td");
    i0.ɵɵtext(99, "2030567898");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(100, "td");
    i0.ɵɵtext(101, "35677");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(102, "td");
    i0.ɵɵtext(103, " 554.00");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(104, "td");
    i0.ɵɵtext(105, " 535.00");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(106, "td");
    i0.ɵɵtext(107, " Paid");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(108, "td");
    i0.ɵɵtext(109, " B3045645656");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(110, "td");
    i0.ɵɵtext(111, " 19/05/2020");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(112, "tr")(113, "td");
    i0.ɵɵtext(114, "05");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(115, "td");
    i0.ɵɵtext(116, "12/05/2020");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(117, "td");
    i0.ɵɵtext(118, "2030567898");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(119, "td");
    i0.ɵɵtext(120, "35677");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(121, "td");
    i0.ɵɵtext(122, " 554.00");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(123, "td");
    i0.ɵɵtext(124, " 535.00");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(125, "td");
    i0.ɵɵtext(126, " Paid");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(127, "td");
    i0.ɵɵtext(128, " B3045645656");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(129, "td");
    i0.ɵɵtext(130, " 19/05/2020");
    i0.ɵɵelementEnd()()()()()()();
    i0.ɵɵelementStart(131, "div", 43)(132, "div", 44)(133, "h5");
    i0.ɵɵtext(134, "Bank Settled for above Transaction");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(135, "div", 21)(136, "div", 3)(137, "div", 42)(138, "table", 24)(139, "thead")(140, "tr")(141, "th");
    i0.ɵɵtext(142, "Bank");
    i0.ɵɵelement(143, "br");
    i0.ɵɵtext(144, " Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(145, "th");
    i0.ɵɵtext(146, "IFSC");
    i0.ɵɵelement(147, "br");
    i0.ɵɵtext(148, " Code");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(149, "th");
    i0.ɵɵtext(150, "Account");
    i0.ɵɵelement(151, "br");
    i0.ɵɵtext(152, " Number");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(153, "th");
    i0.ɵɵtext(154, "Bank");
    i0.ɵɵelement(155, "br");
    i0.ɵɵtext(156, " Transaction#");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(157, "th");
    i0.ɵɵtext(158, "Bank Batch");
    i0.ɵɵelement(159, "br");
    i0.ɵɵtext(160, " Transaction Amt.(RS)");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(161, "th");
    i0.ɵɵtext(162, "Bank");
    i0.ɵɵelement(163, "br");
    i0.ɵɵtext(164, " Transaction Date");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(165, "tbody")(166, "tr")(167, "td");
    i0.ɵɵtext(168, "HDFC");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(169, "td");
    i0.ɵɵtext(170, "HDFC1010890");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(171, "td");
    i0.ɵɵtext(172, "20305678988876");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(173, "td");
    i0.ɵɵtext(174, "B3045645656");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(175, "td");
    i0.ɵɵtext(176, " 4792.00");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(177, "td");
    i0.ɵɵtext(178, " 19/05/2020");
    i0.ɵɵelementEnd()()()()()()()();
} }
export class AccountRecievablesBankSettlementComponent {
    constructor(apiService, modalService, formBuilder, router, toastr, spinner) {
        this.apiService = apiService;
        this.modalService = modalService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.toastr = toastr;
        this.spinner = spinner;
        this.thirdNodeAccArr = [];
        this.showThirdNodeAcc = false;
        this.secondryNodeAccArr = [];
        this.showNetworkList = false;
        this.showReport = false;
        this.showGenerate = false;
        this.accountid = this.apiService.requiredLoginData.accountid;
        this.subaccountid = this.apiService.requiredLoginData.subaccountid;
        this.storeid = this.apiService.requiredLoginData.storeid;
        this.storeName = this.apiService.requiredLoginData.storeName;
        this.domainid = this.apiService.requiredLoginData.domainid;
    }
    ngOnInit() {
        this.getCountry();
    }
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
            this.secondryNodeAccArr = Array.isArray(data) ? data : [];
            console.log("Secondary Node Acc: ", this.secondryNodeAccArr);
            if (this.secondryNodeAccArr.length > 0) {
                this.showNetworkList = true;
            }
            else {
                this.showNetworkList = false;
                this.toastr.error("No Accounts avaliable");
            }
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
}
AccountRecievablesBankSettlementComponent.ɵfac = function AccountRecievablesBankSettlementComponent_Factory(t) { return new (t || AccountRecievablesBankSettlementComponent)(i0.ɵɵdirectiveInject(i1.ApiService), i0.ɵɵdirectiveInject(i2.BsModalService), i0.ɵɵdirectiveInject(i3.FormBuilder), i0.ɵɵdirectiveInject(i4.Router), i0.ɵɵdirectiveInject(i5.ToastrService), i0.ɵɵdirectiveInject(i6.NgxSpinnerService)); };
AccountRecievablesBankSettlementComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AccountRecievablesBankSettlementComponent, selectors: [["app-account-recievables-bank-settlement"]], decls: 32, vars: 6, consts: [[1, "content"], [1, "heading-title"], [1, "toplevel"], [1, "row"], [1, "col-md-4"], [1, "form-group"], [1, "form-control", 3, "change"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-md-12", "text-right", "mb-3"], ["type", "submit", 1, "btn", "custom-btn", 3, "click"], ["class", "card p-0", 4, "ngIf"], ["class", "card exiting-office-table orderStatus p-0", 4, "ngIf"], ["class", "toplevel", 4, "ngIf"], ["class", "card exiting-office-table orderStatus", 4, "ngIf"], [3, "value"], [1, "card", "p-0"], [1, "card-header"], [1, "card-body", "no_data_available"], ["src", "assets/images/deactive_icon1.png"], [1, "card", "exiting-office-table", "orderStatus", "p-0"], [1, "card-body", "pa-0"], [1, "row", "m-0"], [1, "col-md-12", "py-2"], [1, "table"], [1, "font"], [4, "ngFor", "ngForOf"], ["src", "assets/images/active_icon.png", "width", "20", 4, "ngIf", "ngIfElse"], ["inactiveB2B", ""], [2, "display", "flex", "align-items", "center", "justify-content", "center", "gap", "6px"], [1, "badge", "bg-primary", "mr-2", "text-white", 2, "cursor", "pointer", "font-size", "0.7rem", 3, "click"], ["src", "assets/images/active_icon.png", "width", "20"], ["src", "assets/images/deactive_icon.png", "width", "20"], [1, "input-group"], ["type", "text", "bsDatepicker", "", "placeholder", "dd/mm/yyyy", 1, "form-control", 3, "bsConfig"], [1, "input-group-prepend"], [1, "input-group-text"], [1, "icofont-ui-calendar"], [1, "col-md-3"], [1, "clear"], ["type", "button", 1, "btn", "custom-btn", "btn-primary", 3, "click"], [1, "card", "exiting-office-table", "orderStatus"], [1, "col-md-12"], [1, "row", "bank-details"], [1, "col-md-10"]], template: function AccountRecievablesBankSettlementComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "h1", 1);
        i0.ɵɵtext(2, "My Accounts Recievables & Payment from Platform Settlements");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "div", 2)(4, "form")(5, "div", 3)(6, "div", 4)(7, "div", 5)(8, "label");
        i0.ɵɵtext(9, "Country");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "select", 6);
        i0.ɵɵlistener("change", function AccountRecievablesBankSettlementComponent_Template_select_change_10_listener($event) { return ctx.changeCountry($event); });
        i0.ɵɵelementStart(11, "option", 7);
        i0.ɵɵtext(12, "Select");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(13, AccountRecievablesBankSettlementComponent_option_13_Template, 2, 2, "option", 8);
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(14, "div", 4)(15, "div", 5)(16, "label");
        i0.ɵɵtext(17, "State");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(18, "select", 6);
        i0.ɵɵlistener("change", function AccountRecievablesBankSettlementComponent_Template_select_change_18_listener($event) { return ctx.changeState($event); });
        i0.ɵɵelementStart(19, "option", 7);
        i0.ɵɵtext(20, "Select");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(21, AccountRecievablesBankSettlementComponent_option_21_Template, 2, 2, "option", 8);
        i0.ɵɵelementEnd()()()();
        i0.ɵɵelementStart(22, "div", 3)(23, "div", 9)(24, "button", 10);
        i0.ɵɵlistener("click", function AccountRecievablesBankSettlementComponent_Template_button_click_24_listener() { return ctx.onSecondNodeNetwork(); });
        i0.ɵɵtext(25, "Primary/Secondary Network");
        i0.ɵɵelementEnd()()()();
        i0.ɵɵtemplate(26, AccountRecievablesBankSettlementComponent_div_26_Template, 8, 0, "div", 11);
        i0.ɵɵtemplate(27, AccountRecievablesBankSettlementComponent_div_27_Template, 30, 1, "div", 12);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(28, AccountRecievablesBankSettlementComponent_div_28_Template, 28, 5, "div", 13);
        i0.ɵɵtemplate(29, AccountRecievablesBankSettlementComponent_div_29_Template, 179, 0, "div", 14);
        i0.ɵɵelementEnd();
        i0.ɵɵelement(30, "br")(31, "br");
    } if (rf & 2) {
        i0.ɵɵadvance(13);
        i0.ɵɵproperty("ngForOf", ctx.countryList);
        i0.ɵɵadvance(8);
        i0.ɵɵproperty("ngForOf", ctx.stateList);
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("ngIf", ctx.showNetworkList && (!ctx.secondryNodeAccArr || ctx.secondryNodeAccArr.length === 0));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.showNetworkList && (ctx.secondryNodeAccArr == null ? null : ctx.secondryNodeAccArr.length) > 0);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.showReport == true);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.showGenerate == true);
    } }, dependencies: [i7.NgForOf, i7.NgIf, i3.ɵNgNoValidate, i3.NgSelectOption, i3.ɵNgSelectMultipleOption, i3.NgControlStatusGroup, i3.NgForm, i8.BsDatepickerDirective, i8.BsDatepickerInputDirective], styles: [".toplevel[_ngcontent-%COMP%] {\r\n    background: #fff;\r\n    padding: 20px;\r\n    margin-bottom: 15px;\r\n    margin-top: 10px;\r\n    border: 1px solid #ddd;\r\n    border-radius: 5px;\r\n}\r\n\r\n.table-font-size[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table-font-size[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n  font-size: 13px; \r\n}\r\n\r\n.vipDiv[_ngcontent-%COMP%] {\r\n    background: #f8f9fa;\r\n    padding: 15px;\r\n    border-radius: 3px;\r\n    min-height: 210px;\r\n}\r\n\r\n.orderStatus[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    vertical-align: middle;\r\n}\r\n\r\n.orderStatus[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n    font-size: 13px;\r\n    padding: 4px 10px;\r\n}\r\n\r\n.orderStatus[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\r\n    color: #c50f20;\r\n    font-size: 90%;\r\n    font-weight: 600;\r\n}\r\n\r\n.bottom-btn[_ngcontent-%COMP%] {\r\n    float: right;\r\n}\r\n\r\n.alert.alert-success[_ngcontent-%COMP%] {\r\n    padding: 5px 10px;\r\n}\r\n\r\n.alert[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\r\n    font-size: 25px;\r\n    vertical-align: middle;\r\n    margin-left: 5px;\r\n}\r\n\r\n.orderStatus[_ngcontent-%COMP%] {\r\n    .card-header {\r\n        border: 0;\r\n    }\r\n    .card-body {\r\n        padding: 0;\r\n        overflow: auto;\r\n    }\r\n}\r\n\r\nh3.head-title[_ngcontent-%COMP%] {\r\n    font-size: 22px;\r\n    margin: 20px 0;\r\n    font-weight: bold;\r\n}\r\n\r\n.icon[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    vertical-align: top;\r\n    color: #17a2b8;\r\n}\r\n\r\n.orderStatus[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    max-width: 25px;\r\n}\r\n\r\n.orderStatus[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n    background: #021422;\r\n    border-radius: 25px;\r\n    color: #fff;\r\n    font-size: 11px !important;\r\n    border: 1px solid #21333c;\r\n    i {\r\n        font-size: 18px;\r\n        vertical-align: middle;\r\n        padding-right: 5px;\r\n    }\r\n}\r\n\r\nbutton.btn.view-del-btn[_ngcontent-%COMP%] {\r\n    background: #63030c !important;\r\n}\r\n\r\n.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n    border: 0;\r\n}\r\n\r\n.toplevel[_ngcontent-%COMP%], .card[_ngcontent-%COMP%] {\r\n    padding: 0 20px 0;\r\n}\r\n\r\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n    padding: 8px 5px;\r\n    text-align: center;\r\n    line-height: 13px;\r\n    font-weight: 600;\r\n    font-size: 13px;\r\n    border-top: 0;\r\n}\r\n\r\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    font-size: 12px;\r\n    line-height: 15px;\r\n    padding: 10px 5px;\r\n}\r\n\r\ntd.icon[_ngcontent-%COMP%] {\r\n    padding: 0 !important;\r\n}\r\n\r\nbutton.btn.custom-btn[_ngcontent-%COMP%] {\r\n    min-width: 100px;\r\n}\r\n\r\n  .nav-tabs .nav-link {\r\n  font-size: 11px; \r\n}\r\n\r\nbutton.btn.custom-btn-white[_ngcontent-%COMP%] {\r\n    min-width: 100px;\r\n    background: #ffffff;\r\n    border: 1px solid #c50f20;\r\n    color: #c50f20;\r\n    font-weight: 600;\r\n\r\n    &:hover {\r\n        background: #c50f20;\r\n        color: #ffffff;\r\n    }\r\n}\r\n\r\n.input-group-prepend[_ngcontent-%COMP%] + .invalid-feedback[_ngcontent-%COMP%] {\r\n    top: 35px;\r\n}\r\n\r\n.card-header[_ngcontent-%COMP%] {\r\n    padding: 10px 15px;\r\n    background: #63030c;\r\n    font-size: 12px;\r\n    color: #fff;\r\n    font-weight: 500;\r\n    span {\r\n        float: left;\r\n    }\r\n    span+span {\r\n        float: right;\r\n    }\r\n}\r\n\r\n.card-header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 16px;\r\n    margin-left: 3px;\r\n}\r\n\r\n.subcard-header[_ngcontent-%COMP%] {\r\n    padding: 8px 12px;\r\n    background: #63030c;\r\n    font-size: 10px;\r\n    color: #fff;\r\n    font-weight: 500;\r\n    span {\r\n        float: left;\r\n    }\r\n    span+span {\r\n        float: right;\r\n    }\r\n}\r\n\r\n.subcard-header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 16px;\r\n    margin-left: 3px;\r\n}\r\n\r\n.icofont-info-circle[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    vertical-align: middle;\r\n    margin-left: 3px;\r\n}\r\n\r\n.orderList[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\r\n    background: #ff000029;\r\n}\r\n\r\n.orderList[_ngcontent-%COMP%] {\r\n    border-collapse: collapse;\r\n    border: 1px solid #ddd;\r\n    margin: 5px 0;\r\n}\r\n\r\n.orderList[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    border: 1px solid #ddd;\r\n}\r\n\r\n.orderList[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n    background: #212529;\r\n    color: #fff;\r\n    vertical-align: middle;\r\n}\r\n\r\n.no-border[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    border: 0 !important;\r\n    text-align: right !important;\r\n    font-weight: 600;\r\n    font-size: 12px !important;\r\n}\r\n\r\nsmall.view-customer[_ngcontent-%COMP%] {\r\n    display: block;\r\n    text-decoration: underline;\r\n    cursor: pointer;\r\n}\r\n\r\nbutton.btn.view-ord-btn[_ngcontent-%COMP%] {\r\n    min-width: 112px;\r\n}\r\n\r\nbutton.btn.view-del-btn[_ngcontent-%COMP%] {\r\n    min-width: 125px;\r\n}\r\n\r\n.card-body.no_data_available[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    color: #bd2130;\r\n    img {\r\n        display: block;\r\n        text-align: center;\r\n        margin: 0 auto 5px;\r\n        max-width: 30px;\r\n    }\r\n}\r\n\r\n\r\nsmall.viewCart[_ngcontent-%COMP%] {\r\n    text-decoration: underline;\r\n    cursor: pointer;\r\n}\r\n\r\n.hr[_ngcontent-%COMP%] {\r\n    border: none;\r\n    border-top: 1.5px solid #d1d1d1;\r\n    margin: 16px 0;\r\n    height: 0;\r\n    width: 100%;\r\n}\r\n\r\nh1.heading-title[_ngcontent-%COMP%] {\r\n    margin: 20px 0 0;\r\n}\r\n\r\n.heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    padding: 10px 5px 10px;\r\n    font-size: 20px;\r\n}\r\n\r\n.row.topLevel[_ngcontent-%COMP%] {\r\n    background: #fff;\r\n    padding: 20px 0;\r\n    margin: 0;\r\n    border-radius: 5px;\r\n}\r\n\r\n.heading.store-domain[_ngcontent-%COMP%] {\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.store-domain[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    margin-right: 20px;\r\n}\r\n\r\n.store-domain[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    background: #ddd;\r\n    padding: 5px 20px;\r\n    font-size: 13px;\r\n    border-radius: 20px;\r\n    display: inline-block;\r\n    font-weight: bold;\r\n    margin-left: 5px;\r\n}\r\n\r\n.store_id[_ngcontent-%COMP%] {\r\n    background: #ddd;\r\n    padding: 5px 20px;\r\n    border-radius: 20px;\r\n    font-size: 13px;\r\n    font-weight: 700;\r\n    float: right;\r\n    margin-top: -40px;\r\n}\r\n\r\n.box[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    overflow: hidden;\r\n    box-shadow: 0 0 4px 0px #eee;\r\n    margin: 20px 0 5px;\r\n    border-radius: 4px;\r\n    padding: 10px;\r\n    background: #fff;\r\n}\r\n\r\n.main-content-area[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\r\n    width: 20%;\r\n    float: left;\r\n    padding: 0;\r\n}\r\n\r\n.fa-star[_ngcontent-%COMP%]:before {\r\n    content: \"\\f005\";\r\n    color: #ff9600;\r\n    margin-right: 5px;\r\n}\r\n\r\n.pro-box[_ngcontent-%COMP%] {\r\n    box-shadow: 0 0 4px 0 #e9ecef;\r\n    margin: 0 5px 10px;\r\n    overflow: hidden;\r\n    padding: 15px;\r\n    border-radius: 3px;\r\n    position: relative;\r\n    border: 1px solid #dee2e6;\r\n}\r\n\r\n.pro-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    height: 100px;\r\n    width: 100px;\r\n    margin: 30px auto 15px;\r\n    display: block;\r\n}\r\n\r\n.storeitem[_ngcontent-%COMP%]   .p-details[_ngcontent-%COMP%] {\r\n    margin-bottom: 42px;\r\n}\r\n\r\np.label-txt[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    padding: 10px;\r\n    font-size: 14px;\r\n    margin: 0;\r\n}\r\n\r\n.store-available-product[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\r\n    width: 25% !important;\r\n}\r\n\r\n.selected-productLine[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .store-available-product[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\r\n    font-size: 16px;\r\n    padding: 0 10px 5px;\r\n}\r\n\r\n.right-field-head[_ngcontent-%COMP%] {\r\n    float: right;\r\n    margin-top: 10px;\r\n}\r\n\r\n.right-field-head[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    padding: 0 10px;\r\n}\r\n\r\nspan.video[_ngcontent-%COMP%], span.doc[_ngcontent-%COMP%] {\r\n    padding: 8px 15px;\r\n    background: #dee2e6;\r\n    font-size: 12px;\r\n    border-radius: 20px;\r\n}\r\n\r\n.right-field-head[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n    font-size: 11px;\r\n    border-radius: 20px;\r\n}\r\n\r\n.bottom-btn[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n    line-height: 11px;\r\n}\r\n\r\n.box.prduct-gallery[_ngcontent-%COMP%] {\r\n    position: relative;\r\n}\r\n\r\n.sample-img[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    z-index: 1;\r\n    left: 15%;\r\n    top: 28%;\r\n    transform: rotate(-45deg);\r\n}\r\n\r\np.p-name[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    margin: 0;\r\n    font-size: 13px;\r\n    font-weight: 500;\r\n    vertical-align: middle;\r\n}\r\n\r\np.item-id[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    position: absolute;\r\n    top: 0;\r\n    background: #212529;\r\n    left: 0;\r\n    font-weight: 600;\r\n    color: #fff;\r\n    border-radius: 0 0 5px;\r\n    font-size: 11px;\r\n    padding: 3px 6px;\r\n}\r\n\r\nspan.price[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n    padding: 7px 10px 0;\r\n    float: left;\r\n    font-weight: 600;\r\n    line-height: 20px;\r\n}\r\n\r\n.item-id[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\r\n    font-weight: 600;\r\n}\r\n\r\n.instock[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n    text-align: center;\r\n    margin: 0 0 3px;\r\n    position: absolute;\r\n    top: 5%;\r\n    box-shadow: 0 0 30px 0 rgb(82 63 105 / 10%);\r\n    left: 70%;\r\n    background: rgb(224 152 152 / 24%);\r\n    width: 50px;\r\n    border: 1px solid rgb(0 0 0 / 10%);\r\n    height: 50px;\r\n    border-radius: 50%;\r\n    img {\r\n        width: 30px !important;\r\n        height: 30px !important;\r\n        margin: 9px auto;\r\n    }\r\n}\r\n\r\n.pro-box.storeitem.item-box[_ngcontent-%COMP%] {\r\n    border: 1px solid #dee2e6;\r\n    height: 300px;\r\n    padding-left: 20px;\r\n    padding-right: 20px;\r\n}\r\n\r\nh1.heading-title[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    text-transform: uppercase;\r\n    font-weight: 700;\r\n    color: #ff7900;\r\n    position: relative;\r\n    margin-bottom: 10px;\r\n    width: 100%;\r\n    span {\r\n        font-size: 10px;\r\n        text-transform: inherit;\r\n        background: #495057;\r\n        color: #fff;\r\n        padding: 10px 15px;\r\n        border-radius: 25px;\r\n    }\r\n}\r\n\r\nh1.heading-title[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    max-width: 65px;\r\n    margin-right: 5px;\r\n}\r\n\r\nh1.heading-title[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    font-weight: 400;\r\n    font-size: 13px;\r\n    position: absolute;\r\n    left: 80px;\r\n    bottom: 4px;\r\n    color: grey;\r\n}\r\n\r\n.offerDiv[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 5px;\r\n    right: 5px;\r\n    font-size: 10px;\r\n    background: #dc3545;\r\n    line-height: 10px;\r\n    font-weight: 700;\r\n    width: 35px;\r\n    height: 35px;\r\n    border-radius: 50%;\r\n    padding: 9px;\r\n    text-align: center;\r\n    color: #fff;\r\n}\r\n\r\n.offerDiv[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\r\n    display: block;\r\n}\r\n\r\nspan.price.strike-price[_ngcontent-%COMP%] {\r\n    color: #ccc;\r\n    text-decoration: line-through;\r\n}\r\n\r\n.row.text-level[_ngcontent-%COMP%] {\r\n    margin: 0 -10px 10px;\r\n}\r\n\r\n.store-add-remove[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    padding: 10px;\r\n    float: left;\r\n    width: 100%;\r\n}\r\n\r\n.row.product-slider-box[_ngcontent-%COMP%] {\r\n    border-bottom: 5px solid #ddd;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.carousel-inner[_ngcontent-%COMP%] {\r\n    height: 278px;\r\n}\r\n\r\n.carousel-item[_ngcontent-%COMP%] {\r\n    margin-right: 0;\r\n    border: 1px solid #f8f9fa;\r\n    background: #fff;\r\n}\r\n\r\n.product-slider-box[_ngcontent-%COMP%]   .domain-product[_ngcontent-%COMP%] {\r\n    max-width: 23%;\r\n}\r\n\r\n.product-slider-box[_ngcontent-%COMP%]   .sub-domain-product[_ngcontent-%COMP%] {\r\n    max-width: 77%;\r\n}\r\n\r\n.store-add-remove[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n    font-size: 11px;\r\n    text-align: center;\r\n    float: left;\r\n    transition: all .5s;\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n    min-width: 65px;\r\n}\r\n\r\n.store-add-remove[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] + .btn[_ngcontent-%COMP%] {\r\n    float: right;\r\n}\r\n\r\n.item-subitem-list[_ngcontent-%COMP%]   .pro-box[_ngcontent-%COMP%] {\r\n    width: 95%;\r\n    overflow: auto;\r\n    height: 280px;\r\n}\r\n\r\n.item-subitem-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    float: left;\r\n}\r\n\r\n.item-box[_ngcontent-%COMP%] {\r\n    max-width: 225px;\r\n    width: 100%;\r\n    float: left;\r\n}\r\n\r\n.sub-item-box[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    float: left;\r\n    max-width: 225px;\r\n}\r\n\r\n.sub-item-box[_ngcontent-%COMP%]   .add_to_cart[_ngcontent-%COMP%]   button.btn[_ngcontent-%COMP%] {\r\n    background: #000064;\r\n    height: 35px;\r\n    font-size: 13px;\r\n    line-height: 16px;\r\n    color: #fff;\r\n    border-radius: 25px;\r\n    margin: 10px 0 0;\r\n    width: 100%;\r\n    text-align: center;\r\n}\r\n\r\n.add_to_cart[_ngcontent-%COMP%] {\r\n    .remove-btn {\r\n        border-radius: 50%;\r\n        background: #05054ead !important;\r\n        color: #fff;\r\n        height: 35px;\r\n        padding: 0;\r\n    }\r\n    .btn+.btn {\r\n        width: 100%;\r\n        border: 0;\r\n        border-radius: 30px;\r\n        font-size: 15px;\r\n        line-height: normal;\r\n        font-weight: 600;\r\n    }\r\n}\r\n\r\n.middle-arrow[_ngcontent-%COMP%] {\r\n    float: left;\r\n    width: 30px;\r\n    height: 50px;\r\n    font-size: 40px;\r\n    margin-top: 10%;\r\n    color: #dee2e6;\r\n    text-align: center;\r\n}\r\n\r\n.price-details[_ngcontent-%COMP%] {\r\n    float: left;\r\n    width: 100%;\r\n    margin-bottom: 10px;\r\n    font-size: 15px;\r\n    line-height: normal;\r\n    font-weight: 600;\r\n    .unit-price {\r\n        float: left;\r\n        width: 42%;\r\n    }\r\n}\r\n\r\n.unit-price[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    display: block;\r\n    font-size: 12px;\r\n    font-weight: 400;\r\n}\r\n\r\n.whole-sale-price[_ngcontent-%COMP%] {\r\n    float: right;\r\n    width: 58%;\r\n    text-align: right;\r\n    span {\r\n        font-size: 12px;\r\n        display: block;\r\n        font-weight: 400;\r\n    }\r\n}\r\n\r\n.add_to_cart[_ngcontent-%COMP%] {\r\n    clear: both;\r\n}\r\n\r\n.subItem-field[_ngcontent-%COMP%] {\r\n    width: calc(100% - 280px);\r\n    float: left;\r\n}\r\n\r\n.item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n\r\n.pro-box.active[_ngcontent-%COMP%] {\r\n    border: 1px solid #63030c;\r\n}\r\n\r\n.p-details[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\r\n    font-size: 13px;\r\n    padding: 0 5px;\r\n    min-height: 25px;\r\n    height: 25px;\r\n    text-align: center;\r\n}\r\n\r\n.p-details[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n    margin-bottom: 0;\r\n    font-weight: 400;\r\n    line-height: normal;\r\n    padding-top: 2px;\r\n    padding-bottom: 2px;\r\n}\r\n\r\n.p-details[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\r\n    margin-bottom: 4px;\r\n}\r\n\r\n.sub-item-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    margin-top: 5px !important;\r\n}\r\n\r\n.p-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n    line-height: 14px;\r\n}\r\n\r\n.add-stock[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    display: inline-block !important;\r\n    width: 60px !important;\r\n    margin-left: 5px;\r\n    vertical-align: middle;\r\n}\r\n\r\n.min-alert-count[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    width: 35px;\r\n    margin-left: 5px;\r\n    display: inline-block;\r\n    margin-right: 4px;\r\n}\r\n\r\n.d-flex[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] + span[_ngcontent-%COMP%] {\r\n    margin-left: auto;\r\n    font-weight: 600;\r\n    width: 60px;\r\n    i {\r\n        font-size: 16px;\r\n        color: #bd2130;\r\n        display: inline-block;\r\n        position: relative;\r\n        top: 2px;\r\n        cursor: pointer;\r\n    }\r\n}\r\n\r\n.sub-item-box[_ngcontent-%COMP%]   .pro-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    height: 55px;\r\n    width: 55px;\r\n    margin: 18px auto 8px;\r\n}\r\n\r\n.links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    display: block;\r\n    color: #17a2b8 !important;\r\n    text-decoration: underline !important;\r\n    font-size: 12px;\r\n    cursor: pointer;\r\n}\r\n\r\n.modal-header[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    margin: 5px 0;\r\n    color: #bd2130;\r\n}\r\n\r\n.field[_ngcontent-%COMP%] {\r\n    margin-bottom: 10px;\r\n    select {\r\n        border: 1px solid #ddd;\r\n        border-radius: 3px;\r\n        height: 26px;\r\n        font-size: 12px;\r\n        margin-left: 10px;\r\n        margin-top: -4px;\r\n        width: 60px;\r\n    }\r\n}\r\n\r\n.toplevel[_ngcontent-%COMP%] {\r\n    background: #fff;\r\n    padding: 20px;\r\n    margin-bottom: 15px;\r\n    margin-top: 10px;\r\n    border: 1px solid #ddd;\r\n    border-radius: 5px;\r\n}\r\n\r\n.orderStatus[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    max-width: 80px;\r\n}\r\n\r\n.vipDiv[_ngcontent-%COMP%] {\r\n    background: #f8f9fa;\r\n    padding: 15px;\r\n    border-radius: 3px;\r\n    min-height: 210px;\r\n}\r\n\r\n.orderStatus[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    vertical-align: middle;\r\n}\r\n\r\n.orderStatus[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n    font-size: 13px;\r\n}\r\n.orderStatus[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\r\n    color: #c50f20;\r\n    font-size: 90%;\r\n    font-weight: 600;\r\n}\r\n\r\n.bottom-btn[_ngcontent-%COMP%] {\r\n    float: right;\r\n}\r\n\r\n.alert.alert-success[_ngcontent-%COMP%] {\r\n    padding: 5px 10px;\r\n}\r\n\r\n.alert[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\r\n    font-size: 25px;\r\n    vertical-align: middle;\r\n    margin-left: 5px;\r\n}\r\n\r\n.orderStatus[_ngcontent-%COMP%] {\r\n.card-header {\r\n    border: 0;\r\n}\r\n.card-body {\r\n    padding: 0;\r\n}\r\n}\r\n\r\n.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    padding: 8px;\r\n    text-align: center;\r\n    line-height: normal;\r\n\r\n}\r\n\r\nh3.head-title[_ngcontent-%COMP%] {\r\n    font-size: 22px;\r\n    margin: 20px 0;\r\n    font-weight: bold;\r\n}\r\n\r\nlabel.clear[_ngcontent-%COMP%] {\r\n    display: block;\r\n}\r\n\r\n.save-pdf.btn[_ngcontent-%COMP%] {\r\n    font-size: 13px;\r\n    float: right;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.row.bank-details[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n}\r\n\r\n.row.bank-details[_ngcontent-%COMP%]    + .card-body[_ngcontent-%COMP%] {\r\n    padding-left: 15px;\r\n    padding-right: 15px;\r\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AccountRecievablesBankSettlementComponent, [{
        type: Component,
        args: [{ selector: 'app-account-recievables-bank-settlement', template: "<div class=\"content\">\n\n  <h1 class=\"heading-title\">My Accounts Recievables & Payment from Platform Settlements</h1>\n\n  <div class=\"toplevel\">\n\n    <form>\n      <div class=\"row\">\n\n        <div class=\"col-md-4\">\n          <div class=\"form-group\">\n            <label>Country</label>\n            <select class=\"form-control\" (change)=\"changeCountry($event)\">\n              <option value=\"\">Select</option>\n              <option *ngFor=\"let country of countryList\" [value]=\"country.CNTRY_ID\">\n                {{country.CNTRY_NM}}</option>\n            </select>\n          </div>\n        </div>\n\n        <div class=\"col-md-4\">\n          <div class=\"form-group\">\n            <label>State</label>\n            <select class=\"form-control\" (change)=\"changeState($event)\">\n              <option value=\"\">Select</option>\n              <option *ngFor=\"let state of stateList\" [value]=\"state.STATE_ID\">\n                {{state.STATE_NM}}</option>\n            </select>\n          </div>\n        </div>\n\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-12 text-right mb-3\">\n          <button (click)=\"onSecondNodeNetwork()\" type=\"submit\" class=\"btn custom-btn\">Primary/Secondary\n            Network</button>\n        </div>\n      </div>\n    </form>\n\n    <div class=\"card p-0\" *ngIf=\"showNetworkList && (!secondryNodeAccArr || secondryNodeAccArr.length === 0)\">\n      <div class=\"card-header\">\n        <span>Primary/Secondary Channel List</span>\n      </div>\n      <div class=\"card-body no_data_available\">\n        <img src=\"assets/images/deactive_icon1.png\" />\n        <span>Data Not Available!</span>\n      </div>\n    </div>\n    <div class=\"card exiting-office-table orderStatus p-0\" *ngIf=\"showNetworkList && secondryNodeAccArr?.length > 0\">\n      <div class=\"card-header\">\n        <span>Primary/Secondary Channel List</span>\n      </div>\n      <div class=\"card-body pa-0\">\n        <div class=\"row m-0\">\n          <div class=\"col-md-12 py-2\">\n            <table class=\"table\">\n              <thead>\n                <tr>\n                  <th class=\"font\">Sr#</th>\n                  <th class=\"font\">PltfrmId</th>\n                  <th class=\"font\">Subacc Id</th>\n                  <th class=\"font\">Store Id</th>\n                  <th class=\"font\">Name</th>\n                  <th class=\"font\">B2B Id</th>\n                  <th class=\"font\">Category</th>\n                  <th class=\"font\">B2B flg</th>\n                  <th class=\"font\">Action</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let item of secondryNodeAccArr; let i = index\">\n                  <td class=\"font\">{{ i + 1 }}</td>\n                  <td class=\"font\">{{ item.ECOMM_PLATFORM_ID }}</td>\n                  <td class=\"font\">{{ item.SECOND_NODE_ACCT_SUBACCT_ID }}</td>\n                  <td class=\"font\">{{ item.SECOND_NODE_ACCT_STORE_ID }}</td>\n                  <td class=\"font\">{{ item.RETAIL_D2C_SUBACCT_OFFICE_NAME}}</td>\n                  <td class=\"font\">{{ item.ACCT_PRIMRY_SECNDRY_B2B_LINK_SEQ_ID }}</td>\n                  <td class=\"font\">{{ item.CategoryName }}</td>\n                  <td class=\"font\">\n                    <img *ngIf=\"item.PRIMRY_SECNDRY_ACCTS_b2B_ACTIV_FLG; else inactiveB2B\"\n                      src=\"assets/images/active_icon.png\" width=\"20\" />\n                    <ng-template #inactiveB2B>\n                      <img src=\"assets/images/deactive_icon.png\" width=\"20\" />\n                    </ng-template>\n                  </td>\n                  <td>\n                    <div style=\"display: flex; align-items: center; justify-content: center; gap: 6px;\">\n                      <span (click)=\"generateReport('Receivable')\" class=\"badge bg-primary mr-2 text-white\"\n                        style=\"cursor: pointer; font-size: 0.7rem;\">Receivable</span>\n                      <span (click)=\"generateReport('Payable')\" class=\"badge bg-primary mr-2 text-white\"\n                        style=\"cursor: pointer; font-size: 0.7rem;\">Payable\n                      </span>\n                    </div>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </div>\n\n  <div *ngIf=\"showReport == true\" class=\"toplevel\">\n\n    <h4>Generate Report For {{reportType}}</h4>\n\n    <div class=\"row\">\n\n      <div class=\"col-md-4\">\n        <div class=\"form-group\">\n          <label>From Date</label>\n          <div class=\"input-group\">\n            <input type=\"text\" class=\"form-control\" bsDatepicker [bsConfig]=\"{ dateInputFormat: 'DD/MM/YYYY' }\"\n              placeholder=\"dd/mm/yyyy\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\"><i class=\"icofont-ui-calendar\"></i></span>\n            </div>\n            <!-- <div *ngIf=\"isSubmitted && f.SELECTED_DATE_FROM.errors\"\n                                                class=\"invalid-feedback\">\n                                                <div *ngIf=\"f.SELECTED_DATE_FROM.errors.required\">From date is required\n                                                </div>\n                                            </div> -->\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-4\">\n        <div class=\"form-group\">\n          <label>To Date</label>\n          <div class=\"input-group\">\n            <input type=\"text\" class=\"form-control\" bsDatepicker [bsConfig]=\"{ dateInputFormat: 'DD/MM/YYYY' }\"\n              placeholder=\"dd/mm/yyyy\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\"><i class=\"icofont-ui-calendar\"></i></span>\n            </div>\n            <!-- <div *ngIf=\"isSubmitted && f.SELECTED_DATE_TO.errors\"\n                                                class=\"invalid-feedback\">\n                                                <div *ngIf=\"f.SELECTED_DATE_TO.errors.required\">To date is required\n                                                </div>\n                                            </div> -->\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-md-3\">\n\n        <div class=\"form-group\">\n          <label class=\"clear\">&nbsp;</label>\n          <button (click)=\"generate()\" type=\"button\" class=\"btn custom-btn btn-primary\">Generate Report</button>\n\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n\n\n  <div *ngIf=\"showGenerate == true\" class=\"card exiting-office-table orderStatus\">\n\n    <div class=\"card-body pa-0\">\n\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <table class=\"table\">\n            <thead>\n              <tr>\n                <th>Sr. No.</th>\n                <th>Order<br> Date</th>\n                <th>Customer#</th>\n                <th>Order</th>\n                <th>Total<br> Order Amt.(RS)</th>\n                <th>Amt Due to Vend<br> After Platform Exp.(RS)</th>\n                <th>Pending Status</th>\n                <th>Settled<br> Bank Transaction</th>\n                <th>Bank<br> Transaction Date</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td>01</td>\n                <td>12/05/2020</td>\n                <td>2030567898</td>\n                <td>35677</td>\n                <td> 554.00</td>\n                <td> 535.00</td>\n                <td> Paid</td>\n                <td> B3045645656</td>\n                <td> 19/05/2020</td>\n              </tr>\n              <tr>\n                <td>02</td>\n                <td>12/05/2020</td>\n                <td>2030567898</td>\n                <td>35677</td>\n                <td> 554.00</td>\n                <td> 535.00</td>\n                <td> Paid</td>\n                <td> B3045645656</td>\n                <td> 19/05/2020</td>\n              </tr>\n              <tr>\n                <td>03</td>\n                <td>12/05/2020</td>\n                <td>2030567898</td>\n                <td>35677</td>\n                <td> 554.00</td>\n                <td> 535.00</td>\n                <td> Paid</td>\n                <td> B3045645656</td>\n                <td> 19/05/2020</td>\n              </tr>\n              <tr>\n                <td>04</td>\n                <td>12/05/2020</td>\n                <td>2030567898</td>\n                <td>35677</td>\n                <td> 554.00</td>\n                <td> 535.00</td>\n                <td> Paid</td>\n                <td> B3045645656</td>\n                <td> 19/05/2020</td>\n              </tr>\n              <tr>\n                <td>05</td>\n                <td>12/05/2020</td>\n                <td>2030567898</td>\n                <td>35677</td>\n                <td> 554.00</td>\n                <td> 535.00</td>\n                <td> Paid</td>\n                <td> B3045645656</td>\n                <td> 19/05/2020</td>\n              </tr>\n\n\n            </tbody>\n          </table>\n        </div>\n\n      </div>\n    </div>\n\n\n\n    <div class=\"row bank-details\">\n      <div class=\"col-md-10\">\n        <h5>Bank Settled for above Transaction</h5>\n      </div>\n    </div>\n\n    <div class=\"card-body pa-0\">\n\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <table class=\"table\">\n            <thead>\n              <tr>\n                <th>Bank<br> Name</th>\n                <th>IFSC<br> Code</th>\n                <th>Account<br> Number</th>\n                <th>Bank<br> Transaction#</th>\n                <th>Bank Batch<br> Transaction Amt.(RS)</th>\n                <th>Bank<br> Transaction Date</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td>HDFC</td>\n                <td>HDFC1010890</td>\n                <td>20305678988876</td>\n                <td>B3045645656</td>\n                <td> 4792.00</td>\n                <td> 19/05/2020</td>\n              </tr>\n\n\n            </tbody>\n          </table>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</div>\n<br>\n<br>", styles: [".toplevel {\r\n    background: #fff;\r\n    padding: 20px;\r\n    margin-bottom: 15px;\r\n    margin-top: 10px;\r\n    border: 1px solid #ddd;\r\n    border-radius: 5px;\r\n}\r\n\r\n.table-font-size th,\r\n.table-font-size td {\r\n  font-size: 13px; /* Change to your desired size */\r\n}\r\n\r\n.vipDiv {\r\n    background: #f8f9fa;\r\n    padding: 15px;\r\n    border-radius: 3px;\r\n    min-height: 210px;\r\n}\r\n\r\n.orderStatus td {\r\n    vertical-align: middle;\r\n}\r\n\r\n.orderStatus td .btn {\r\n    font-size: 13px;\r\n    padding: 4px 10px;\r\n}\r\n\r\n.orderStatus small {\r\n    color: #c50f20;\r\n    font-size: 90%;\r\n    font-weight: 600;\r\n}\r\n\r\n.bottom-btn {\r\n    float: right;\r\n}\r\n\r\n.alert.alert-success {\r\n    padding: 5px 10px;\r\n}\r\n\r\n.alert .fa {\r\n    font-size: 25px;\r\n    vertical-align: middle;\r\n    margin-left: 5px;\r\n}\r\n\r\n.orderStatus {\r\n    .card-header {\r\n        border: 0;\r\n    }\r\n    .card-body {\r\n        padding: 0;\r\n        overflow: auto;\r\n    }\r\n}\r\n\r\nh3.head-title {\r\n    font-size: 22px;\r\n    margin: 20px 0;\r\n    font-weight: bold;\r\n}\r\n\r\n.icon .fa {\r\n    font-size: 20px;\r\n    vertical-align: top;\r\n    color: #17a2b8;\r\n}\r\n\r\n.orderStatus .icon img {\r\n    max-width: 25px;\r\n}\r\n\r\n.orderStatus .btn {\r\n    background: #021422;\r\n    border-radius: 25px;\r\n    color: #fff;\r\n    font-size: 11px !important;\r\n    border: 1px solid #21333c;\r\n    i {\r\n        font-size: 18px;\r\n        vertical-align: middle;\r\n        padding-right: 5px;\r\n    }\r\n}\r\n\r\nbutton.btn.view-del-btn {\r\n    background: #63030c !important;\r\n}\r\n\r\n.table thead th {\r\n    border: 0;\r\n}\r\n\r\n.toplevel,\r\n.card {\r\n    padding: 0 20px 0;\r\n}\r\n\r\n.table th {\r\n    padding: 8px 5px;\r\n    text-align: center;\r\n    line-height: 13px;\r\n    font-weight: 600;\r\n    font-size: 13px;\r\n    border-top: 0;\r\n}\r\n\r\n.table td {\r\n    text-align: center;\r\n    font-size: 12px;\r\n    line-height: 15px;\r\n    padding: 10px 5px;\r\n}\r\n\r\ntd.icon {\r\n    padding: 0 !important;\r\n}\r\n\r\nbutton.btn.custom-btn {\r\n    min-width: 100px;\r\n}\r\n\r\n::ng-deep .nav-tabs .nav-link {\r\n  font-size: 11px; /* Adjust as needed */\r\n}\r\n\r\nbutton.btn.custom-btn-white {\r\n    min-width: 100px;\r\n    background: #ffffff;\r\n    border: 1px solid #c50f20;\r\n    color: #c50f20;\r\n    font-weight: 600;\r\n\r\n    &:hover {\r\n        background: #c50f20;\r\n        color: #ffffff;\r\n    }\r\n}\r\n\r\n.input-group-prepend+.invalid-feedback {\r\n    top: 35px;\r\n}\r\n\r\n.card-header {\r\n    padding: 10px 15px;\r\n    background: #63030c;\r\n    font-size: 12px;\r\n    color: #fff;\r\n    font-weight: 500;\r\n    span {\r\n        float: left;\r\n    }\r\n    span+span {\r\n        float: right;\r\n    }\r\n}\r\n\r\n.card-header img {\r\n    width: 16px;\r\n    margin-left: 3px;\r\n}\r\n\r\n.subcard-header {\r\n    padding: 8px 12px;\r\n    background: #63030c;\r\n    font-size: 10px;\r\n    color: #fff;\r\n    font-weight: 500;\r\n    span {\r\n        float: left;\r\n    }\r\n    span+span {\r\n        float: right;\r\n    }\r\n}\r\n\r\n.subcard-header img {\r\n    width: 16px;\r\n    margin-left: 3px;\r\n}\r\n\r\n.icofont-info-circle {\r\n    font-size: 20px;\r\n    vertical-align: middle;\r\n    margin-left: 3px;\r\n}\r\n\r\n.orderList thead tr {\r\n    background: #ff000029;\r\n}\r\n\r\n.orderList {\r\n    border-collapse: collapse;\r\n    border: 1px solid #ddd;\r\n    margin: 5px 0;\r\n}\r\n\r\n.orderList td {\r\n    border: 1px solid #ddd;\r\n}\r\n\r\n.orderList tr th {\r\n    background: #212529;\r\n    color: #fff;\r\n    vertical-align: middle;\r\n}\r\n\r\n.no-border td {\r\n    border: 0 !important;\r\n    text-align: right !important;\r\n    font-weight: 600;\r\n    font-size: 12px !important;\r\n}\r\n\r\nsmall.view-customer {\r\n    display: block;\r\n    text-decoration: underline;\r\n    cursor: pointer;\r\n}\r\n\r\nbutton.btn.view-ord-btn {\r\n    min-width: 112px;\r\n}\r\n\r\nbutton.btn.view-del-btn {\r\n    min-width: 125px;\r\n}\r\n\r\n.card-body.no_data_available {\r\n    text-align: center;\r\n    color: #bd2130;\r\n    img {\r\n        display: block;\r\n        text-align: center;\r\n        margin: 0 auto 5px;\r\n        max-width: 30px;\r\n    }\r\n}\r\n\r\n\r\nsmall.viewCart {\r\n    text-decoration: underline;\r\n    cursor: pointer;\r\n}\r\n\r\n.hr {\r\n    border: none;\r\n    border-top: 1.5px solid #d1d1d1;\r\n    margin: 16px 0;\r\n    height: 0;\r\n    width: 100%;\r\n}\r\n\r\nh1.heading-title {\r\n    margin: 20px 0 0;\r\n}\r\n\r\n.heading h2 {\r\n    padding: 10px 5px 10px;\r\n    font-size: 20px;\r\n}\r\n\r\n.row.topLevel {\r\n    background: #fff;\r\n    padding: 20px 0;\r\n    margin: 0;\r\n    border-radius: 5px;\r\n}\r\n\r\n.heading.store-domain {\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.store-domain div {\r\n    display: inline-block;\r\n    margin-right: 20px;\r\n}\r\n\r\n.store-domain span {\r\n    background: #ddd;\r\n    padding: 5px 20px;\r\n    font-size: 13px;\r\n    border-radius: 20px;\r\n    display: inline-block;\r\n    font-weight: bold;\r\n    margin-left: 5px;\r\n}\r\n\r\n.store_id {\r\n    background: #ddd;\r\n    padding: 5px 20px;\r\n    border-radius: 20px;\r\n    font-size: 13px;\r\n    font-weight: 700;\r\n    float: right;\r\n    margin-top: -40px;\r\n}\r\n\r\n.box {\r\n    width: 100%;\r\n    overflow: hidden;\r\n    box-shadow: 0 0 4px 0px #eee;\r\n    margin: 20px 0 5px;\r\n    border-radius: 4px;\r\n    padding: 10px;\r\n    background: #fff;\r\n}\r\n\r\n.main-content-area .box .col {\r\n    width: 20%;\r\n    float: left;\r\n    padding: 0;\r\n}\r\n\r\n.fa-star:before {\r\n    content: \"\\f005\";\r\n    color: #ff9600;\r\n    margin-right: 5px;\r\n}\r\n\r\n.pro-box {\r\n    box-shadow: 0 0 4px 0 #e9ecef;\r\n    margin: 0 5px 10px;\r\n    overflow: hidden;\r\n    padding: 15px;\r\n    border-radius: 3px;\r\n    position: relative;\r\n    border: 1px solid #dee2e6;\r\n}\r\n\r\n.pro-box img {\r\n    height: 100px;\r\n    width: 100px;\r\n    margin: 30px auto 15px;\r\n    display: block;\r\n}\r\n\r\n.storeitem .p-details {\r\n    margin-bottom: 42px;\r\n}\r\n\r\np.label-txt {\r\n    text-align: center;\r\n    padding: 10px;\r\n    font-size: 14px;\r\n    margin: 0;\r\n}\r\n\r\n.store-available-product .col {\r\n    width: 25% !important;\r\n}\r\n\r\n.selected-productLine h5,\r\n.store-available-product h5 {\r\n    font-size: 16px;\r\n    padding: 0 10px 5px;\r\n}\r\n\r\n.right-field-head {\r\n    float: right;\r\n    margin-top: 10px;\r\n}\r\n\r\n.right-field-head li {\r\n    display: inline-block;\r\n    padding: 0 10px;\r\n}\r\n\r\nspan.video,\r\nspan.doc {\r\n    padding: 8px 15px;\r\n    background: #dee2e6;\r\n    font-size: 12px;\r\n    border-radius: 20px;\r\n}\r\n\r\n.right-field-head .btn {\r\n    font-size: 11px;\r\n    border-radius: 20px;\r\n}\r\n\r\n.bottom-btn .btn {\r\n    line-height: 11px;\r\n}\r\n\r\n.box.prduct-gallery {\r\n    position: relative;\r\n}\r\n\r\n.sample-img {\r\n    position: absolute;\r\n    z-index: 1;\r\n    left: 15%;\r\n    top: 28%;\r\n    transform: rotate(-45deg);\r\n}\r\n\r\np.p-name {\r\n    text-align: center;\r\n    margin: 0;\r\n    font-size: 13px;\r\n    font-weight: 500;\r\n    vertical-align: middle;\r\n}\r\n\r\np.item-id {\r\n    text-align: center;\r\n    position: absolute;\r\n    top: 0;\r\n    background: #212529;\r\n    left: 0;\r\n    font-weight: 600;\r\n    color: #fff;\r\n    border-radius: 0 0 5px;\r\n    font-size: 11px;\r\n    padding: 3px 6px;\r\n}\r\n\r\nspan.price {\r\n    font-size: 12px;\r\n    padding: 7px 10px 0;\r\n    float: left;\r\n    font-weight: 600;\r\n    line-height: 20px;\r\n}\r\n\r\n.item-id b {\r\n    font-weight: 600;\r\n}\r\n\r\n.instock {\r\n    font-size: 12px;\r\n    text-align: center;\r\n    margin: 0 0 3px;\r\n    position: absolute;\r\n    top: 5%;\r\n    box-shadow: 0 0 30px 0 rgb(82 63 105 / 10%);\r\n    left: 70%;\r\n    background: rgb(224 152 152 / 24%);\r\n    width: 50px;\r\n    border: 1px solid rgb(0 0 0 / 10%);\r\n    height: 50px;\r\n    border-radius: 50%;\r\n    img {\r\n        width: 30px !important;\r\n        height: 30px !important;\r\n        margin: 9px auto;\r\n    }\r\n}\r\n\r\n.pro-box.storeitem.item-box {\r\n    border: 1px solid #dee2e6;\r\n    height: 300px;\r\n    padding-left: 20px;\r\n    padding-right: 20px;\r\n}\r\n\r\nh1.heading-title {\r\n    font-size: 20px;\r\n    text-transform: uppercase;\r\n    font-weight: 700;\r\n    color: #ff7900;\r\n    position: relative;\r\n    margin-bottom: 10px;\r\n    width: 100%;\r\n    span {\r\n        font-size: 10px;\r\n        text-transform: inherit;\r\n        background: #495057;\r\n        color: #fff;\r\n        padding: 10px 15px;\r\n        border-radius: 25px;\r\n    }\r\n}\r\n\r\nh1.heading-title img {\r\n    max-width: 65px;\r\n    margin-right: 5px;\r\n}\r\n\r\nh1.heading-title small {\r\n    display: inline-block;\r\n    font-weight: 400;\r\n    font-size: 13px;\r\n    position: absolute;\r\n    left: 80px;\r\n    bottom: 4px;\r\n    color: grey;\r\n}\r\n\r\n.offerDiv {\r\n    position: absolute;\r\n    top: 5px;\r\n    right: 5px;\r\n    font-size: 10px;\r\n    background: #dc3545;\r\n    line-height: 10px;\r\n    font-weight: 700;\r\n    width: 35px;\r\n    height: 35px;\r\n    border-radius: 50%;\r\n    padding: 9px;\r\n    text-align: center;\r\n    color: #fff;\r\n}\r\n\r\n.offerDiv small {\r\n    display: block;\r\n}\r\n\r\nspan.price.strike-price {\r\n    color: #ccc;\r\n    text-decoration: line-through;\r\n}\r\n\r\n.row.text-level {\r\n    margin: 0 -10px 10px;\r\n}\r\n\r\n.store-add-remove {\r\n    text-align: center;\r\n    padding: 10px;\r\n    float: left;\r\n    width: 100%;\r\n}\r\n\r\n.row.product-slider-box {\r\n    border-bottom: 5px solid #ddd;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.carousel-inner {\r\n    height: 278px;\r\n}\r\n\r\n.carousel-item {\r\n    margin-right: 0;\r\n    border: 1px solid #f8f9fa;\r\n    background: #fff;\r\n}\r\n\r\n.product-slider-box .domain-product {\r\n    max-width: 23%;\r\n}\r\n\r\n.product-slider-box .sub-domain-product {\r\n    max-width: 77%;\r\n}\r\n\r\n.store-add-remove .btn {\r\n    font-size: 11px;\r\n    text-align: center;\r\n    float: left;\r\n    transition: all .5s;\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n    min-width: 65px;\r\n}\r\n\r\n.store-add-remove .btn+.btn {\r\n    float: right;\r\n}\r\n\r\n.item-subitem-list .pro-box {\r\n    width: 95%;\r\n    overflow: auto;\r\n    height: 280px;\r\n}\r\n\r\n.item-subitem-list li {\r\n    width: 100%;\r\n    float: left;\r\n}\r\n\r\n.item-box {\r\n    max-width: 225px;\r\n    width: 100%;\r\n    float: left;\r\n}\r\n\r\n.sub-item-box {\r\n    width: 100%;\r\n    float: left;\r\n    max-width: 225px;\r\n}\r\n\r\n.sub-item-box .add_to_cart button.btn {\r\n    background: #000064;\r\n    height: 35px;\r\n    font-size: 13px;\r\n    line-height: 16px;\r\n    color: #fff;\r\n    border-radius: 25px;\r\n    margin: 10px 0 0;\r\n    width: 100%;\r\n    text-align: center;\r\n}\r\n\r\n.add_to_cart {\r\n    .remove-btn {\r\n        border-radius: 50%;\r\n        background: #05054ead !important;\r\n        color: #fff;\r\n        height: 35px;\r\n        padding: 0;\r\n    }\r\n    .btn+.btn {\r\n        width: 100%;\r\n        border: 0;\r\n        border-radius: 30px;\r\n        font-size: 15px;\r\n        line-height: normal;\r\n        font-weight: 600;\r\n    }\r\n}\r\n\r\n.middle-arrow {\r\n    float: left;\r\n    width: 30px;\r\n    height: 50px;\r\n    font-size: 40px;\r\n    margin-top: 10%;\r\n    color: #dee2e6;\r\n    text-align: center;\r\n}\r\n\r\n.price-details {\r\n    float: left;\r\n    width: 100%;\r\n    margin-bottom: 10px;\r\n    font-size: 15px;\r\n    line-height: normal;\r\n    font-weight: 600;\r\n    .unit-price {\r\n        float: left;\r\n        width: 42%;\r\n    }\r\n}\r\n\r\n.unit-price span {\r\n    display: block;\r\n    font-size: 12px;\r\n    font-weight: 400;\r\n}\r\n\r\n.whole-sale-price {\r\n    float: right;\r\n    width: 58%;\r\n    text-align: right;\r\n    span {\r\n        font-size: 12px;\r\n        display: block;\r\n        font-weight: 400;\r\n    }\r\n}\r\n\r\n.add_to_cart {\r\n    clear: both;\r\n}\r\n\r\n.subItem-field {\r\n    width: calc(100% - 280px);\r\n    float: left;\r\n}\r\n\r\n.item img {\r\n    width: 100%;\r\n}\r\n\r\n.pro-box.active {\r\n    border: 1px solid #63030c;\r\n}\r\n\r\n.p-details .form-control {\r\n    font-size: 13px;\r\n    padding: 0 5px;\r\n    min-height: 25px;\r\n    height: 25px;\r\n    text-align: center;\r\n}\r\n\r\n.p-details .form-group label {\r\n    margin-bottom: 0;\r\n    font-weight: 400;\r\n    line-height: normal;\r\n    padding-top: 2px;\r\n    padding-bottom: 2px;\r\n}\r\n\r\n.p-details .form-group {\r\n    margin-bottom: 4px;\r\n}\r\n\r\n.sub-item-box img {\r\n    margin-top: 5px !important;\r\n}\r\n\r\n.p-details p {\r\n    font-size: 12px;\r\n    line-height: 14px;\r\n}\r\n\r\n.add-stock input {\r\n    display: inline-block !important;\r\n    width: 60px !important;\r\n    margin-left: 5px;\r\n    vertical-align: middle;\r\n}\r\n\r\n.min-alert-count input {\r\n    width: 35px;\r\n    margin-left: 5px;\r\n    display: inline-block;\r\n    margin-right: 4px;\r\n}\r\n\r\n.d-flex span+span {\r\n    margin-left: auto;\r\n    font-weight: 600;\r\n    width: 60px;\r\n    i {\r\n        font-size: 16px;\r\n        color: #bd2130;\r\n        display: inline-block;\r\n        position: relative;\r\n        top: 2px;\r\n        cursor: pointer;\r\n    }\r\n}\r\n\r\n.sub-item-box .pro-box img {\r\n    height: 55px;\r\n    width: 55px;\r\n    margin: 18px auto 8px;\r\n}\r\n\r\n.links a {\r\n    display: block;\r\n    color: #17a2b8 !important;\r\n    text-decoration: underline !important;\r\n    font-size: 12px;\r\n    cursor: pointer;\r\n}\r\n\r\n.modal-header i {\r\n    margin: 5px 0;\r\n    color: #bd2130;\r\n}\r\n\r\n.field {\r\n    margin-bottom: 10px;\r\n    select {\r\n        border: 1px solid #ddd;\r\n        border-radius: 3px;\r\n        height: 26px;\r\n        font-size: 12px;\r\n        margin-left: 10px;\r\n        margin-top: -4px;\r\n        width: 60px;\r\n    }\r\n}\r\n\r\n.toplevel {\r\n    background: #fff;\r\n    padding: 20px;\r\n    margin-bottom: 15px;\r\n    margin-top: 10px;\r\n    border: 1px solid #ddd;\r\n    border-radius: 5px;\r\n}\r\n\r\n.orderStatus td img {\r\n    max-width: 80px;\r\n}\r\n\r\n.vipDiv {\r\n    background: #f8f9fa;\r\n    padding: 15px;\r\n    border-radius: 3px;\r\n    min-height: 210px;\r\n}\r\n\r\n.orderStatus td {\r\n    vertical-align: middle;\r\n}\r\n\r\n.orderStatus td .btn {\r\n    font-size: 13px;\r\n}\r\n.orderStatus small {\r\n    color: #c50f20;\r\n    font-size: 90%;\r\n    font-weight: 600;\r\n}\r\n\r\n.bottom-btn {\r\n    float: right;\r\n}\r\n\r\n.alert.alert-success {\r\n    padding: 5px 10px;\r\n}\r\n\r\n.alert .fa {\r\n    font-size: 25px;\r\n    vertical-align: middle;\r\n    margin-left: 5px;\r\n}\r\n\r\n.orderStatus {\r\n.card-header {\r\n    border: 0;\r\n}\r\n.card-body {\r\n    padding: 0;\r\n}\r\n}\r\n\r\n.table thead th,\r\n.table tbody td {\r\n    padding: 8px;\r\n    text-align: center;\r\n    line-height: normal;\r\n\r\n}\r\n\r\nh3.head-title {\r\n    font-size: 22px;\r\n    margin: 20px 0;\r\n    font-weight: bold;\r\n}\r\n\r\nlabel.clear {\r\n    display: block;\r\n}\r\n\r\n.save-pdf.btn {\r\n    font-size: 13px;\r\n    float: right;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.row.bank-details {\r\n    margin: 0;\r\n}\r\n\r\n.row.bank-details + .card-body {\r\n    padding-left: 15px;\r\n    padding-right: 15px;\r\n}\r\n"] }]
    }], function () { return [{ type: i1.ApiService }, { type: i2.BsModalService }, { type: i3.FormBuilder }, { type: i4.Router }, { type: i5.ToastrService }, { type: i6.NgxSpinnerService }]; }, null); })();
//# sourceMappingURL=account-recievables-bank-settlement.component.js.map