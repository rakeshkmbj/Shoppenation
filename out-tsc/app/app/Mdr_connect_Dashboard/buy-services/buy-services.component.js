import { __awaiter } from "tslib";
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "ngx-bootstrap/modal";
import * as i2 from "src/app/services/api.service";
import * as i3 from "ngx-toastr";
import * as i4 from "src/app/razorpay.service";
import * as i5 from "src/app/services/payment-status.service";
import * as i6 from "@angular/common";
import * as i7 from "@angular/forms";
import * as i8 from "ngx-bootstrap/tabs";
import * as i9 from "ngx-spinner";
function BuyServicesComponent_ng_template_53_option_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 38);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const service_r9 = ctx.$implicit;
    i0.ɵɵproperty("value", service_r9.id);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", service_r9.name, " ");
} }
function BuyServicesComponent_ng_template_53_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 39)(1, "button", 40);
    i0.ɵɵlistener("click", function BuyServicesComponent_ng_template_53_div_18_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r11); const ctx_r10 = i0.ɵɵnextContext(2); const _r2 = i0.ɵɵreference(56); return i0.ɵɵresetView(ctx_r10.openCartModal(_r2)); });
    i0.ɵɵtext(2, " Open Checkout Cart ");
    i0.ɵɵelementEnd()();
} }
function BuyServicesComponent_ng_template_53_div_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 41)(1, "div", 7)(2, "p");
    i0.ɵɵtext(3, "Per Unit Price: ");
    i0.ɵɵelementStart(4, "strong");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "p");
    i0.ɵɵtext(7, "Currency: ");
    i0.ɵɵelementStart(8, "strong");
    i0.ɵɵtext(9, "INR");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "p");
    i0.ɵɵtext(11, "Discount %: ");
    i0.ɵɵelementStart(12, "strong");
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "p");
    i0.ɵɵtext(15, "GST %: ");
    i0.ɵɵelementStart(16, "strong");
    i0.ɵɵtext(17);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r6.serviceDiscount == null ? null : ctx_r6.serviceDiscount.ServicePrice);
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate(ctx_r6.serviceDiscount == null ? null : ctx_r6.serviceDiscount.Discount_Percntg);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r6.serviceDiscount == null ? null : ctx_r6.serviceDiscount.GST_Percntg);
} }
function BuyServicesComponent_ng_template_53_div_20_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 42)(1, "div", 27)(2, "label", 28);
    i0.ɵɵtext(3, "Quantity");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "input", 43);
    i0.ɵɵlistener("ngModelChange", function BuyServicesComponent_ng_template_53_div_20_Template_input_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r13); const ctx_r12 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r12.quantity = $event); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngModel", ctx_r7.quantity);
} }
function BuyServicesComponent_ng_template_53_div_21_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 44)(1, "button", 45);
    i0.ɵɵlistener("click", function BuyServicesComponent_ng_template_53_div_21_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r15); const ctx_r14 = i0.ɵɵnextContext(2); const _r2 = i0.ɵɵreference(56); return i0.ɵɵresetView(ctx_r14.cartCheckout(_r2)); });
    i0.ɵɵtext(2, " Check-out Cart ");
    i0.ɵɵelementEnd()();
} }
function BuyServicesComponent_ng_template_53_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 21)(1, "h4", 22);
    i0.ɵɵtext(2, "Service Checkout");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 23);
    i0.ɵɵlistener("click", function BuyServicesComponent_ng_template_53_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r17); const ctx_r16 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r16.closeCheckout()); });
    i0.ɵɵelementStart(4, "span", 24);
    i0.ɵɵtext(5, "\u00D7");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(6, "div", 25)(7, "div", 26)(8, "div", 27)(9, "label", 28);
    i0.ɵɵtext(10, "Service list Id");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "select", 29);
    i0.ɵɵlistener("ngModelChange", function BuyServicesComponent_ng_template_53_Template_select_ngModelChange_11_listener($event) { i0.ɵɵrestoreView(_r17); const ctx_r18 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r18.selectedService = $event); });
    i0.ɵɵelementStart(12, "option", 30);
    i0.ɵɵtext(13, "Select Service");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(14, BuyServicesComponent_ng_template_53_option_14_Template, 2, 2, "option", 31);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(15, "div", 32)(16, "button", 33);
    i0.ɵɵlistener("click", function BuyServicesComponent_ng_template_53_Template_button_click_16_listener() { i0.ɵɵrestoreView(_r17); const ctx_r19 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r19.showPrice()); });
    i0.ɵɵtext(17, " Show Price & Discount ");
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(18, BuyServicesComponent_ng_template_53_div_18_Template, 3, 0, "div", 34);
    i0.ɵɵtemplate(19, BuyServicesComponent_ng_template_53_div_19_Template, 18, 3, "div", 35);
    i0.ɵɵtemplate(20, BuyServicesComponent_ng_template_53_div_20_Template, 5, 1, "div", 36);
    i0.ɵɵtemplate(21, BuyServicesComponent_ng_template_53_div_21_Template, 3, 0, "div", 37);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(11);
    i0.ɵɵproperty("ngModel", ctx_r1.selectedService);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r1.servicesList);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", ctx_r1.showPriceDetails);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.showPriceDetails);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.showPriceDetails);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.showPriceDetails);
} }
function BuyServicesComponent_ng_template_55_Template(rf, ctx) { if (rf & 1) {
    const _r21 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 21)(1, "h4", 22);
    i0.ɵɵtext(2, "Cart Summary");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 23);
    i0.ɵɵlistener("click", function BuyServicesComponent_ng_template_55_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r21); const ctx_r20 = i0.ɵɵnextContext(); const _r0 = i0.ɵɵreference(54); return i0.ɵɵresetView(ctx_r20.closeCart(_r0)); });
    i0.ɵɵelementStart(4, "span", 24);
    i0.ɵɵtext(5, "\u00D7");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(6, "div", 25)(7, "div", 46)(8, "div", 47)(9, "div")(10, "p")(11, "strong");
    i0.ɵɵtext(12, "Cart Id :");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "p")(15, "strong");
    i0.ɵɵtext(16, "Service Id :");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(17);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "p")(19, "strong");
    i0.ɵɵtext(20, "Service Name :");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(21);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(22, "button", 48);
    i0.ɵɵlistener("click", function BuyServicesComponent_ng_template_55_Template_button_click_22_listener() { i0.ɵɵrestoreView(_r21); const ctx_r22 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r22.deleteCart()); });
    i0.ɵɵtext(23, "Delete CART");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(24, "div", 49)(25, "div", 27)(26, "p")(27, "strong");
    i0.ɵɵtext(28, "Membership Id :");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(29);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(30, "div", 27)(31, "p")(32, "strong");
    i0.ɵɵtext(33, "Membership Name :");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(34);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(35, "div", 50)(36, "p")(37, "strong");
    i0.ɵɵtext(38, "Per Unit Cost :");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(39, "span", 51);
    i0.ɵɵtext(40);
    i0.ɵɵpipe(41, "number");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(42, "p")(43, "strong");
    i0.ɵɵtext(44, "Quantity :");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(45);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(46, "p")(47, "strong");
    i0.ɵɵtext(48, "Currency :");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(49);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(50, "p")(51, "strong");
    i0.ɵɵtext(52, "Discount % :");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(53);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(54, "p")(55, "strong");
    i0.ɵɵtext(56, "GST % :");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(57);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(58, "div", 52)(59, "p")(60, "strong");
    i0.ɵɵtext(61, "Cost with Quantity :");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(62);
    i0.ɵɵpipe(63, "number");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(64, "p")(65, "strong");
    i0.ɵɵtext(66, "Discount Amount :");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(67);
    i0.ɵɵpipe(68, "number");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(69, "p")(70, "strong");
    i0.ɵɵtext(71, "Re-activation :");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(72);
    i0.ɵɵpipe(73, "number");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(74, "p")(75, "strong");
    i0.ɵɵtext(76, "GST Charged :");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(77);
    i0.ɵɵpipe(78, "number");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(79, "h5", 53)(80, "strong");
    i0.ɵɵtext(81, "Total to Pay Amount :");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(82, "span", 54);
    i0.ɵɵtext(83);
    i0.ɵɵpipe(84, "number");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(85, "div", 44)(86, "button", 55);
    i0.ɵɵlistener("click", function BuyServicesComponent_ng_template_55_Template_button_click_86_listener() { i0.ɵɵrestoreView(_r21); const ctx_r23 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r23.payment()); });
    i0.ɵɵtext(87, "PAY");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(13);
    i0.ɵɵtextInterpolate1(" ", (ctx_r3.openCart == null ? null : ctx_r3.openCart.MDR_CONCT_SERVICE_CARTID) || "\u2014", "");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", (ctx_r3.openCart == null ? null : ctx_r3.openCart.MDR_CONCT_CART_FOR_SERVICEID) || "\u2014", "");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", (ctx_r3.openCart == null ? null : ctx_r3.openCart.MDR_CONCT_CART_SERVICE_NAME) || "\u2014", "");
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate1(" ", (ctx_r3.openCart == null ? null : ctx_r3.openCart.MDR_CONCT_STORE_MEMBRSHIP_ID) || "\u2014", "");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", (ctx_r3.openCart == null ? null : ctx_r3.openCart.MDR_CONCT_STORE_MEMBRSHIP_NAME) || "\u2014", "");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(41, 16, ctx_r3.openCart == null ? null : ctx_r3.openCart.MDR_CONCT_SPP_UNIT_SERVICE_COST, "1.2-2"));
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", ctx_r3.openCart == null ? null : ctx_r3.openCart.MDR_CONCT_SERVICE_QUANTITY, "");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", ctx_r3.openCart == null ? null : ctx_r3.openCart.MDR_CONCT_SERVICE_CURRENCY, "");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", ctx_r3.openCart == null ? null : ctx_r3.openCart.MDR_CONCT_SERVICE_DISCNT_PERCENTG, "%");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", ctx_r3.openCart == null ? null : ctx_r3.openCart.MDR_CONCT_SERVICE_GST_PERCENTG, "%");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(63, 19, ctx_r3.openCart == null ? null : ctx_r3.openCart.MDR_CONCT_SERVICE_WITH_QUANTITY_AMT, "1.2-2"), " ");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(68, 22, ctx_r3.openCart == null ? null : ctx_r3.openCart.MDR_CONCT_SERVICE_DISCNT_AMT, "1.2-2"), " ");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(73, 25, ctx_r3.openCart == null ? null : ctx_r3.openCart.MDR_CONCT_RE_ACTIVATION_AMT, "1.2-2"), " ");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(78, 28, ctx_r3.openCart == null ? null : ctx_r3.openCart.MDR_CONCT_CART_GST_CHARGED_AMT, "1.2-2"), " ");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate2(" ", i0.ɵɵpipeBind2(84, 31, ctx_r3.openCart == null ? null : ctx_r3.openCart.MDR_CONCT_CART_TOTAL_TO_PAY_AMT, "1.2-2"), " ", ctx_r3.openCart == null ? null : ctx_r3.openCart.MDR_CONCT_SERVICE_CURRENCY, " ");
} }
export class BuyServicesComponent {
    constructor(modalService, apiService, toastr, razorpayService, paymentStatusService) {
        this.modalService = modalService;
        this.apiService = apiService;
        this.toastr = toastr;
        this.razorpayService = razorpayService;
        this.paymentStatusService = paymentStatusService;
        // Payment variables
        this.memberId = '';
        this.storeCode = '1100012100';
        this.selectedMembership = 'Premium';
        this.changeType = 'no';
        this.memberType = 'premium';
        this.servicePrice = 17899;
        this.discount = 10;
        this.gst = 18;
        this.validity = 1;
        this.servicesList = [
            { id: 1, name: 'MDR-Home-Store SKUs' },
            { id: 2, name: 'MDR-Dedicated-Store SKUs' },
            { id: 3, name: 'Image Text Posts' },
            { id: 4, name: '10Seconds Video-AD' },
            { id: 5, name: 'Turbo Push for Post' },
            { id: 6, name: 'Membership Re-Subscription' },
            { id: 8, name: 'View Profile Package' }
        ];
        // Cart variables
        this.cartId = 'CART987654';
        this.servId = 'SRV1001';
        this.membershipId = 'MEMB101';
        this.memberTypeName = 'Premium';
        this.perUnitCost = 17899;
        this.showDetails = false;
        this.selectedService = "";
        this.perUnitPrice = 5.0;
        this.quantity = 25;
        this.showPriceDetails = false;
        this.getlogindata = localStorage.getItem('logindata');
        this.getlogindata = JSON.parse(this.getlogindata);
        console.log("Login data: ", this.getlogindata);
    }
    ngOnInit() {
        this.paymentStatusService.paymentStatus$.subscribe((status) => __awaiter(this, void 0, void 0, function* () {
            if (status) {
                this.paymentStatus = status;
                if (status.success) {
                    try {
                        const payload = {
                            cartId: this.openCart.MDR_CONCT_SERVICE_CARTID,
                            storecode: "1001070099",
                            serviceId: this.openCart.MDR_CONCT_CART_FOR_SERVICEID,
                            confirmPayFlg: true,
                            rzrpay_Pamnt_Id: status.paymentId,
                            rzrpay_Signature: status.paymentSignature,
                            rzrpay_Live_Flg: this.openCart.MDR_PG_LIVE_KEY_FLG
                        };
                        this.apiService.postCall(this.apiService.baseURL + '/MDR_Service_10and8_MakePayments', payload)
                            .subscribe(data => {
                            var _a;
                            console.log(data);
                            this.toastr.success(data.Message);
                            (_a = this.modalRef) === null || _a === void 0 ? void 0 : _a.hide();
                        }, (error) => {
                            console.log(error);
                            this.toastr.error(error, '', {
                                timeOut: 5000,
                            });
                        });
                    }
                    catch (error) {
                        console.log(error);
                    }
                }
                console.log("Payment status: ", this.paymentStatus);
            }
        }));
    }
    showPrice() {
        const payload = {
            Storecode: "1001070099",
            Serviceid: this.selectedService
        };
        console.log("For get: ", payload);
        this.apiService.postCall(this.apiService.baseURL + '/Get-Service-Discount-Price', payload)
            .subscribe(data => {
            console.log(data);
            this.serviceDiscount = data;
        }, (error) => {
            this.toastr.error(error, '', {
                timeOut: 5000,
            });
        });
        this.showPriceDetails = true;
    }
    showPaymentDetails() {
        this.showDetails = true;
    }
    openCheckoutModal(template) {
        this.modalRef = this.modalService.show(template, { class: 'modal-lg' });
    }
    openCartModal(template) {
        const payload = {
            Storecode: "1001070099",
            Serviceid: this.selectedService
        };
        console.log("Payload: ", payload);
        this.apiService.postCall(this.apiService.baseURL + '/Display-OpenCart', payload)
            .subscribe(data => {
            var _a;
            console.log(data);
            if (data.Message === 'No Open cart Found for the Store') {
                this.toastr.error("No Open cart Found for the Store");
                return;
            }
            this.openCart = data;
            (_a = this.modalRef) === null || _a === void 0 ? void 0 : _a.hide();
            this.openCheckoutModal(template);
        }, (error) => {
            this.toastr.error(error.error.Message, '', {
                timeOut: 5000,
            });
        });
    }
    closeCheckout() {
        var _a;
        this.selectedService = "";
        this.showPriceDetails = false;
        (_a = this.modalRef) === null || _a === void 0 ? void 0 : _a.hide();
    }
    openCheckout(template) {
        var _a;
        (_a = this.modalRef) === null || _a === void 0 ? void 0 : _a.hide();
        this.openCheckoutModal(template);
    }
    closeCart(tempalte) {
        this.openCheckout(tempalte);
    }
    cartCheckout(template) {
        var _a, _b, _c, _d, _e;
        const payload = {
            Storecode: "1001070099",
            MemberPlanId: (_a = this.serviceDiscount) === null || _a === void 0 ? void 0 : _a.MDR_STORE_MEMBRSHIP_PLAN_ID,
            PlanName: (_b = this.serviceDiscount) === null || _b === void 0 ? void 0 : _b.MDR_MEMBERSHIP_PLAN_NAME,
            ServiceId: this.selectedService,
            ServicePrice: (_c = this.serviceDiscount) === null || _c === void 0 ? void 0 : _c.ServicePrice,
            Quantity: this.quantity,
            DiscountPercent: (_d = this.serviceDiscount) === null || _d === void 0 ? void 0 : _d.Discount_Percntg,
            GstPercent: (_e = this.serviceDiscount) === null || _e === void 0 ? void 0 : _e.GST_Percntg,
            Currency: "INR",
            Login_Subacctid: this.subaccountid,
            Login_Storeid: this.storeid
        };
        console.log("Payload: ", payload);
        this.apiService.postCall(this.apiService.baseURL + '/MDRCheckout', payload)
            .subscribe(data => {
            var _a;
            console.log(data);
            this.openCart = data;
            (_a = this.modalRef) === null || _a === void 0 ? void 0 : _a.hide();
            this.openCheckoutModal(template);
        }, (error) => {
            console.log("Error: ", error);
            this.toastr.error(error.error.Message, '', {
                timeOut: 5000,
            });
        });
    }
    deleteCart() {
        var _a, _b;
        const payload = {
            Storecode: "1001070099",
            ServiceId: (_a = this.openCart) === null || _a === void 0 ? void 0 : _a.MDR_CONCT_CART_FOR_SERVICEID,
            CartId: (_b = this.openCart) === null || _b === void 0 ? void 0 : _b.MDR_CONCT_SERVICE_CARTID
        };
        this.apiService.postCall(this.apiService.baseURL + '/Delete_MDR_ServiceCart', payload)
            .subscribe(data => {
            var _a;
            console.log(data);
            this.toastr.success(data.Message);
            (_a = this.modalRef) === null || _a === void 0 ? void 0 : _a.hide();
            this.openCart = null;
            this.selectedService = '';
        }, (error) => {
            console.log("Error: ", error);
            this.toastr.error(error.error.Message, '', {
                timeOut: 5000,
            });
        });
    }
    payment() {
        console.log("data for the cart: ", this.openCart);
        this.razorpayService.payWithRazorpay(this.openCart.Id, this.openCart.MDR_CONCT_CART_TOTAL_TO_PAY_AMT_IN_PAISA, this.openCart.MDR_PG_LIVE_KEY_FLG, this.openCart.PlateformName, this.openCart.email, this.openCart.Contact);
        // this.razorpayService.payWithRazorpay(this.openCart.Id, this.openCart.MDR_CONCT_CART_TOTAL_TO_PAY_AMT_IN_PAISA);
    }
}
BuyServicesComponent.ɵfac = function BuyServicesComponent_Factory(t) { return new (t || BuyServicesComponent)(i0.ɵɵdirectiveInject(i1.BsModalService), i0.ɵɵdirectiveInject(i2.ApiService), i0.ɵɵdirectiveInject(i3.ToastrService), i0.ɵɵdirectiveInject(i4.RazorpayService), i0.ɵɵdirectiveInject(i5.PaymentStatusService)); };
BuyServicesComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BuyServicesComponent, selectors: [["app-buy-services"]], decls: 57, vars: 0, consts: [[1, "content"], [1, "heading-title"], [1, "card"], [1, "card-body", "pl-0", "pr-0"], [1, "row", "topcontent", "mt-3"], [1, "col-md-12", "mb-3"], ["type", "button", 1, "btn", "custom-btn", "float-right", 3, "click"], [1, "col-md-12"], ["heading", "My Stores Services Payments", "id", "tab1"], [1, "card", "exiting-office-table", "orderStatus", "p-0", "mt-2"], [1, "card-header"], [2, "display", "flex", "flex-direction", "column"], [1, "card-body", "pa-0"], [1, "row", "m-0"], [1, "col-md-12", "py-2"], [1, "table"], [1, "font"], [1, "btn", "btn-sm", "btn-outline-primary"], ["template", "<img src='assets/images/icons/please_wait.gif' />"], ["membershipCheckout", ""], ["cartSummary", ""], [1, "modal-header"], [1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "btn-close", "close", "pull-right", 3, "click"], ["aria-hidden", "true", 1, "visually-hidden"], [1, "modal-body"], [1, "row", "mb-2", "align-items-end"], [1, "col-md-6"], [1, "fw-bold"], [1, "form-control", 3, "ngModel", "ngModelChange"], ["value", "", "disabled", "", "selected", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-md-4", "text-md-right", "mt-3", "mt-md-0"], [1, "btn", "btn-warning", "btn-sm", "fw-bold", "w-100", 3, "click"], ["class", "text-start mt-3", 4, "ngIf"], ["class", "row mb-2 my-3 border mx-1 rounded bg-light p-2 text-start", 4, "ngIf"], ["class", "row mb-2", 4, "ngIf"], ["class", "text-center mt-3", 4, "ngIf"], [3, "value"], [1, "text-start", "mt-3"], [1, "btn", "btn-success", "fw-bold", 3, "click"], [1, "row", "mb-2", "my-3", "border", "mx-1", "rounded", "bg-light", "p-2", "text-start"], [1, "row", "mb-2"], ["type", "number", "min", "1", "placeholder", "Enter quantity", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "text-center", "mt-3"], [1, "btn", "btn-dark", "fw-bold", 3, "click"], [1, "cart-summary", "p-3", "rounded"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-2"], [1, "btn", "btn-danger", "btn-sm", "px-3", 3, "click"], [1, "row"], [1, "border", "p-2", "rounded", "bg-light"], [1, "text-danger"], [1, "mt-3"], [1, "text-danger", "mt-3"], [1, "text-dark"], [1, "btn", "btn-danger", "px-4", "py-2", "font-weight-bold", 3, "click"]], template: function BuyServicesComponent_Template(rf, ctx) { if (rf & 1) {
        const _r24 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "div", 0)(1, "h1", 1);
        i0.ɵɵtext(2, "Buy MDR-Connect Services");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "div", 2)(4, "div", 3)(5, "div")(6, "div", 4)(7, "div", 5)(8, "button", 6);
        i0.ɵɵlistener("click", function BuyServicesComponent_Template_button_click_8_listener() { i0.ɵɵrestoreView(_r24); const _r0 = i0.ɵɵreference(54); return i0.ɵɵresetView(ctx.openCheckout(_r0)); });
        i0.ɵɵtext(9, "Buy MDR-Connect Services");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(10, "tabset", 7)(11, "tab", 8)(12, "div", 9)(13, "div", 10)(14, "div", 11)(15, "span");
        i0.ɵɵtext(16, "My Stores Services Payments");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(17, "div", 12)(18, "div", 13)(19, "div", 14)(20, "table", 15)(21, "thead")(22, "tr")(23, "th", 16);
        i0.ɵɵtext(24, "S#");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(25, "th", 16);
        i0.ɵɵtext(26, "Service ID");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(27, "th", 16);
        i0.ɵɵtext(28, "Name");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(29, "th", 16);
        i0.ɵɵtext(30, "Date");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(31, "th", 16);
        i0.ɵɵtext(32, "Order ID");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(33, "th", 16);
        i0.ɵɵtext(34, "Invoice");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(35, "tbody")(36, "tr")(37, "td");
        i0.ɵɵtext(38, "1");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(39, "td");
        i0.ɵɵtext(40, "SRV-1001");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(41, "td");
        i0.ɵɵtext(42, "Premium Membership Renewal");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(43, "td");
        i0.ɵɵtext(44, "04-Nov-2025");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(45, "td");
        i0.ɵɵtext(46, "ORD-789654");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(47, "td")(48, "button", 17);
        i0.ɵɵtext(49, " Response Centre ");
        i0.ɵɵelementEnd()()()()()()()()()()()()();
        i0.ɵɵelement(50, "br")(51, "br")(52, "ngx-spinner", 18);
        i0.ɵɵelementEnd()()();
        i0.ɵɵtemplate(53, BuyServicesComponent_ng_template_53_Template, 22, 6, "ng-template", null, 19, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(55, BuyServicesComponent_ng_template_55_Template, 88, 34, "ng-template", null, 20, i0.ɵɵtemplateRefExtractor);
    } }, dependencies: [i6.NgForOf, i6.NgIf, i7.NgSelectOption, i7.ɵNgSelectMultipleOption, i7.DefaultValueAccessor, i7.NumberValueAccessor, i7.SelectControlValueAccessor, i7.NgControlStatus, i7.MinValidator, i7.NgModel, i8.TabDirective, i8.TabsetComponent, i9.NgxSpinnerComponent, i6.DecimalPipe], styles: [".toplevel[_ngcontent-%COMP%] {\r\n    background: #fff;\r\n    padding: 20px;\r\n    margin-bottom: 15px;\r\n    margin-top: 10px;\r\n    border: 1px solid #ddd;\r\n    border-radius: 5px;\r\n}\r\n\r\n.table-font-size[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table-font-size[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    font-size: 13px;\r\n    \r\n}\r\n\r\n.vipDiv[_ngcontent-%COMP%] {\r\n    background: #f8f9fa;\r\n    padding: 15px;\r\n    border-radius: 3px;\r\n    min-height: 210px;\r\n}\r\n\r\n.orderStatus[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    vertical-align: middle;\r\n}\r\n\r\n.orderStatus[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n    font-size: 13px;\r\n    padding: 4px 10px;\r\n}\r\n\r\n.orderStatus[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\r\n    color: #c50f20;\r\n    font-size: 90%;\r\n    font-weight: 600;\r\n}\r\n\r\n.bottom-btn[_ngcontent-%COMP%] {\r\n    float: right;\r\n}\r\n\r\n.alert.alert-success[_ngcontent-%COMP%] {\r\n    padding: 5px 10px;\r\n}\r\n\r\n.alert[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\r\n    font-size: 25px;\r\n    vertical-align: middle;\r\n    margin-left: 5px;\r\n}\r\n\r\n.orderStatus[_ngcontent-%COMP%] {\r\n    .card-header {\r\n        border: 0;\r\n    }\r\n\r\n    .card-body {\r\n        padding: 0;\r\n        overflow: auto;\r\n    }\r\n}\r\n\r\nh3.head-title[_ngcontent-%COMP%] {\r\n    font-size: 22px;\r\n    margin: 20px 0;\r\n    font-weight: bold;\r\n}\r\n\r\n.icon[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    vertical-align: top;\r\n    color: #17a2b8;\r\n}\r\n\r\n.orderStatus[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    max-width: 25px;\r\n}\r\n\r\n.orderStatus[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n    background: #021422;\r\n    border-radius: 25px;\r\n    color: #fff;\r\n    font-size: 11px !important;\r\n    border: 1px solid #21333c;\r\n\r\n    i {\r\n        font-size: 18px;\r\n        vertical-align: middle;\r\n        padding-right: 5px;\r\n    }\r\n}\r\n\r\nbutton.btn.view-del-btn[_ngcontent-%COMP%] {\r\n    background: #63030c !important;\r\n}\r\n\r\n.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n    border: 0;\r\n}\r\n\r\n.toplevel[_ngcontent-%COMP%], .card[_ngcontent-%COMP%] {\r\n    padding: 0 20px 0;\r\n}\r\n\r\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n    padding: 8px 5px;\r\n    text-align: center;\r\n    line-height: 13px;\r\n    font-weight: 600;\r\n    font-size: 13px;\r\n    border-top: 0;\r\n}\r\n\r\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    font-size: 12px;\r\n    line-height: 15px;\r\n    padding: 10px 5px;\r\n}\r\n\r\ntd.icon[_ngcontent-%COMP%] {\r\n    padding: 0 !important;\r\n}\r\n\r\nbutton.btn.custom-btn[_ngcontent-%COMP%] {\r\n    min-width: 100px;\r\n}\r\n\r\n  .nav-tabs .nav-link {\r\n    font-size: 11px;\r\n    \r\n}\r\n\r\nbutton.btn.custom-btn-white[_ngcontent-%COMP%] {\r\n    min-width: 100px;\r\n    background: #ffffff;\r\n    border: 1px solid #c50f20;\r\n    color: #c50f20;\r\n    font-weight: 600;\r\n\r\n    &:hover {\r\n        background: #c50f20;\r\n        color: #ffffff;\r\n    }\r\n}\r\n\r\n.input-group-prepend[_ngcontent-%COMP%] + .invalid-feedback[_ngcontent-%COMP%] {\r\n    top: 35px;\r\n}\r\n\r\n.card-header[_ngcontent-%COMP%] {\r\n    padding: 10px 15px;\r\n    background: #63030c;\r\n    font-size: 12px;\r\n    color: #fff;\r\n    font-weight: 500;\r\n\r\n    span {\r\n        float: left;\r\n    }\r\n\r\n    span+span {\r\n        float: right;\r\n    }\r\n}\r\n\r\n.card-header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 16px;\r\n    margin-left: 3px;\r\n}\r\n\r\n.subcard-header[_ngcontent-%COMP%] {\r\n    padding: 8px 12px;\r\n    background: #63030c;\r\n    font-size: 10px;\r\n    color: #fff;\r\n    font-weight: 500;\r\n\r\n    span {\r\n        float: left;\r\n    }\r\n\r\n    span+span {\r\n        float: right;\r\n    }\r\n}\r\n\r\n.subcard-header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 16px;\r\n    margin-left: 3px;\r\n}\r\n\r\n.icofont-info-circle[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    vertical-align: middle;\r\n    margin-left: 3px;\r\n}\r\n\r\n.orderList[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\r\n    background: #ff000029;\r\n}\r\n\r\n.orderList[_ngcontent-%COMP%] {\r\n    border-collapse: collapse;\r\n    border: 1px solid #ddd;\r\n    margin: 5px 0;\r\n}\r\n\r\n.orderList[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    border: 1px solid #ddd;\r\n}\r\n\r\n.orderList[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n    background: #212529;\r\n    color: #fff;\r\n    vertical-align: middle;\r\n}\r\n\r\n.no-border[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    border: 0 !important;\r\n    text-align: right !important;\r\n    font-weight: 600;\r\n    font-size: 12px !important;\r\n}\r\n\r\nsmall.view-customer[_ngcontent-%COMP%] {\r\n    display: block;\r\n    text-decoration: underline;\r\n    cursor: pointer;\r\n}\r\n\r\nbutton.btn.view-ord-btn[_ngcontent-%COMP%] {\r\n    min-width: 112px;\r\n}\r\n\r\nbutton.btn.view-del-btn[_ngcontent-%COMP%] {\r\n    min-width: 125px;\r\n}\r\n\r\n.card-body.no_data_available[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    color: #bd2130;\r\n\r\n    img {\r\n        display: block;\r\n        text-align: center;\r\n        margin: 0 auto 5px;\r\n        max-width: 30px;\r\n    }\r\n}\r\n\r\n\r\nsmall.viewCart[_ngcontent-%COMP%] {\r\n    text-decoration: underline;\r\n    cursor: pointer;\r\n}\r\n\r\n.hr[_ngcontent-%COMP%] {\r\n    border: none;\r\n    border-top: 1.5px solid #d1d1d1;\r\n    margin: 16px 0;\r\n    height: 0;\r\n    width: 100%;\r\n}\r\n\r\nh1.heading-title[_ngcontent-%COMP%] {\r\n    margin: 20px 0 0;\r\n}\r\n\r\n.heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    padding: 10px 5px 10px;\r\n    font-size: 20px;\r\n}\r\n\r\n.row.topLevel[_ngcontent-%COMP%] {\r\n    background: #fff;\r\n    padding: 20px 0;\r\n    margin: 0;\r\n    border-radius: 5px;\r\n}\r\n\r\n.heading.store-domain[_ngcontent-%COMP%] {\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.store-domain[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    margin-right: 20px;\r\n}\r\n\r\n.store-domain[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    background: #ddd;\r\n    padding: 5px 20px;\r\n    font-size: 13px;\r\n    border-radius: 20px;\r\n    display: inline-block;\r\n    font-weight: bold;\r\n    margin-left: 5px;\r\n}\r\n\r\n.store_id[_ngcontent-%COMP%] {\r\n    background: #ddd;\r\n    padding: 5px 20px;\r\n    border-radius: 20px;\r\n    font-size: 13px;\r\n    font-weight: 700;\r\n    float: right;\r\n    margin-top: -40px;\r\n}\r\n\r\n.box[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    overflow: hidden;\r\n    box-shadow: 0 0 4px 0px #eee;\r\n    margin: 20px 0 5px;\r\n    border-radius: 4px;\r\n    padding: 10px;\r\n    background: #fff;\r\n}\r\n\r\n.main-content-area[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\r\n    width: 20%;\r\n    float: left;\r\n    padding: 0;\r\n}\r\n\r\n.fa-star[_ngcontent-%COMP%]:before {\r\n    content: \"\\f005\";\r\n    color: #ff9600;\r\n    margin-right: 5px;\r\n}\r\n\r\n.pro-box[_ngcontent-%COMP%] {\r\n    box-shadow: 0 0 4px 0 #e9ecef;\r\n    margin: 0 5px 10px;\r\n    overflow: hidden;\r\n    padding: 15px;\r\n    border-radius: 3px;\r\n    position: relative;\r\n    border: 1px solid #dee2e6;\r\n}\r\n\r\n.pro-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    height: 100px;\r\n    width: 100px;\r\n    margin: 30px auto 15px;\r\n    display: block;\r\n}\r\n\r\n.storeitem[_ngcontent-%COMP%]   .p-details[_ngcontent-%COMP%] {\r\n    margin-bottom: 42px;\r\n}\r\n\r\np.label-txt[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    padding: 10px;\r\n    font-size: 14px;\r\n    margin: 0;\r\n}\r\n\r\n.store-available-product[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\r\n    width: 25% !important;\r\n}\r\n\r\n.selected-productLine[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .store-available-product[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\r\n    font-size: 16px;\r\n    padding: 0 10px 5px;\r\n}\r\n\r\n.right-field-head[_ngcontent-%COMP%] {\r\n    float: right;\r\n    margin-top: 10px;\r\n}\r\n\r\n.right-field-head[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    padding: 0 10px;\r\n}\r\n\r\nspan.video[_ngcontent-%COMP%], span.doc[_ngcontent-%COMP%] {\r\n    padding: 8px 15px;\r\n    background: #dee2e6;\r\n    font-size: 12px;\r\n    border-radius: 20px;\r\n}\r\n\r\n.right-field-head[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n    font-size: 11px;\r\n    border-radius: 20px;\r\n}\r\n\r\n.bottom-btn[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n    line-height: 11px;\r\n}\r\n\r\n.box.prduct-gallery[_ngcontent-%COMP%] {\r\n    position: relative;\r\n}\r\n\r\n.sample-img[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    z-index: 1;\r\n    left: 15%;\r\n    top: 28%;\r\n    transform: rotate(-45deg);\r\n}\r\n\r\np.p-name[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    margin: 0;\r\n    font-size: 13px;\r\n    font-weight: 500;\r\n    vertical-align: middle;\r\n}\r\n\r\np.item-id[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    position: absolute;\r\n    top: 0;\r\n    background: #212529;\r\n    left: 0;\r\n    font-weight: 600;\r\n    color: #fff;\r\n    border-radius: 0 0 5px;\r\n    font-size: 11px;\r\n    padding: 3px 6px;\r\n}\r\n\r\nspan.price[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n    padding: 7px 10px 0;\r\n    float: left;\r\n    font-weight: 600;\r\n    line-height: 20px;\r\n}\r\n\r\n.item-id[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\r\n    font-weight: 600;\r\n}\r\n\r\n.instock[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n    text-align: center;\r\n    margin: 0 0 3px;\r\n    position: absolute;\r\n    top: 5%;\r\n    box-shadow: 0 0 30px 0 rgb(82 63 105 / 10%);\r\n    left: 70%;\r\n    background: rgb(224 152 152 / 24%);\r\n    width: 50px;\r\n    border: 1px solid rgb(0 0 0 / 10%);\r\n    height: 50px;\r\n    border-radius: 50%;\r\n\r\n    img {\r\n        width: 30px !important;\r\n        height: 30px !important;\r\n        margin: 9px auto;\r\n    }\r\n}\r\n\r\n.pro-box.storeitem.item-box[_ngcontent-%COMP%] {\r\n    border: 1px solid #dee2e6;\r\n    height: 300px;\r\n    padding-left: 20px;\r\n    padding-right: 20px;\r\n}\r\n\r\nh1.heading-title[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    text-transform: uppercase;\r\n    font-weight: 700;\r\n    color: #ff7900;\r\n    position: relative;\r\n    margin-bottom: 10px;\r\n    width: 100%;\r\n\r\n    span {\r\n        font-size: 10px;\r\n        text-transform: inherit;\r\n        background: #495057;\r\n        color: #fff;\r\n        padding: 10px 15px;\r\n        border-radius: 25px;\r\n    }\r\n}\r\n\r\nh1.heading-title[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    max-width: 65px;\r\n    margin-right: 5px;\r\n}\r\n\r\nh1.heading-title[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    font-weight: 400;\r\n    font-size: 13px;\r\n    position: absolute;\r\n    left: 80px;\r\n    bottom: 4px;\r\n    color: grey;\r\n}\r\n\r\n.offerDiv[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 5px;\r\n    right: 5px;\r\n    font-size: 10px;\r\n    background: #dc3545;\r\n    line-height: 10px;\r\n    font-weight: 700;\r\n    width: 35px;\r\n    height: 35px;\r\n    border-radius: 50%;\r\n    padding: 9px;\r\n    text-align: center;\r\n    color: #fff;\r\n}\r\n\r\n.offerDiv[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\r\n    display: block;\r\n}\r\n\r\nspan.price.strike-price[_ngcontent-%COMP%] {\r\n    color: #ccc;\r\n    text-decoration: line-through;\r\n}\r\n\r\n.row.text-level[_ngcontent-%COMP%] {\r\n    margin: 0 -10px 10px;\r\n}\r\n\r\n.store-add-remove[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    padding: 10px;\r\n    float: left;\r\n    width: 100%;\r\n}\r\n\r\n.row.product-slider-box[_ngcontent-%COMP%] {\r\n    border-bottom: 5px solid #ddd;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.carousel-inner[_ngcontent-%COMP%] {\r\n    height: 278px;\r\n}\r\n\r\n.carousel-item[_ngcontent-%COMP%] {\r\n    margin-right: 0;\r\n    border: 1px solid #f8f9fa;\r\n    background: #fff;\r\n}\r\n\r\n.product-slider-box[_ngcontent-%COMP%]   .domain-product[_ngcontent-%COMP%] {\r\n    max-width: 23%;\r\n}\r\n\r\n.product-slider-box[_ngcontent-%COMP%]   .sub-domain-product[_ngcontent-%COMP%] {\r\n    max-width: 77%;\r\n}\r\n\r\n.store-add-remove[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n    font-size: 11px;\r\n    text-align: center;\r\n    float: left;\r\n    transition: all .5s;\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n    min-width: 65px;\r\n}\r\n\r\n.store-add-remove[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] + .btn[_ngcontent-%COMP%] {\r\n    float: right;\r\n}\r\n\r\n.item-subitem-list[_ngcontent-%COMP%]   .pro-box[_ngcontent-%COMP%] {\r\n    width: 95%;\r\n    overflow: auto;\r\n    height: 280px;\r\n}\r\n\r\n.item-subitem-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    float: left;\r\n}\r\n\r\n.item-box[_ngcontent-%COMP%] {\r\n    max-width: 225px;\r\n    width: 100%;\r\n    float: left;\r\n}\r\n\r\n.sub-item-box[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    float: left;\r\n    max-width: 225px;\r\n}\r\n\r\n.sub-item-box[_ngcontent-%COMP%]   .add_to_cart[_ngcontent-%COMP%]   button.btn[_ngcontent-%COMP%] {\r\n    background: #000064;\r\n    height: 35px;\r\n    font-size: 13px;\r\n    line-height: 16px;\r\n    color: #fff;\r\n    border-radius: 25px;\r\n    margin: 10px 0 0;\r\n    width: 100%;\r\n    text-align: center;\r\n}\r\n\r\n.add_to_cart[_ngcontent-%COMP%] {\r\n    .remove-btn {\r\n        border-radius: 50%;\r\n        background: #05054ead !important;\r\n        color: #fff;\r\n        height: 35px;\r\n        padding: 0;\r\n    }\r\n\r\n    .btn+.btn {\r\n        width: 100%;\r\n        border: 0;\r\n        border-radius: 30px;\r\n        font-size: 15px;\r\n        line-height: normal;\r\n        font-weight: 600;\r\n    }\r\n}\r\n\r\n.middle-arrow[_ngcontent-%COMP%] {\r\n    float: left;\r\n    width: 30px;\r\n    height: 50px;\r\n    font-size: 40px;\r\n    margin-top: 10%;\r\n    color: #dee2e6;\r\n    text-align: center;\r\n}\r\n\r\n.price-details[_ngcontent-%COMP%] {\r\n    float: left;\r\n    width: 100%;\r\n    margin-bottom: 10px;\r\n    font-size: 15px;\r\n    line-height: normal;\r\n    font-weight: 600;\r\n\r\n    .unit-price {\r\n        float: left;\r\n        width: 42%;\r\n    }\r\n}\r\n\r\n.unit-price[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    display: block;\r\n    font-size: 12px;\r\n    font-weight: 400;\r\n}\r\n\r\n.whole-sale-price[_ngcontent-%COMP%] {\r\n    float: right;\r\n    width: 58%;\r\n    text-align: right;\r\n\r\n    span {\r\n        font-size: 12px;\r\n        display: block;\r\n        font-weight: 400;\r\n    }\r\n}\r\n\r\n.add_to_cart[_ngcontent-%COMP%] {\r\n    clear: both;\r\n}\r\n\r\n.subItem-field[_ngcontent-%COMP%] {\r\n    width: calc(100% - 280px);\r\n    float: left;\r\n}\r\n\r\n.item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n\r\n.pro-box.active[_ngcontent-%COMP%] {\r\n    border: 1px solid #63030c;\r\n}\r\n\r\n.p-details[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\r\n    font-size: 13px;\r\n    padding: 0 5px;\r\n    min-height: 25px;\r\n    height: 25px;\r\n    text-align: center;\r\n}\r\n\r\n.p-details[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n    margin-bottom: 0;\r\n    font-weight: 400;\r\n    line-height: normal;\r\n    padding-top: 2px;\r\n    padding-bottom: 2px;\r\n}\r\n\r\n.p-details[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\r\n    margin-bottom: 4px;\r\n}\r\n\r\n.sub-item-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    margin-top: 5px !important;\r\n}\r\n\r\n.p-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n    line-height: 14px;\r\n}\r\n\r\n.add-stock[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    display: inline-block !important;\r\n    width: 60px !important;\r\n    margin-left: 5px;\r\n    vertical-align: middle;\r\n}\r\n\r\n.min-alert-count[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    width: 35px;\r\n    margin-left: 5px;\r\n    display: inline-block;\r\n    margin-right: 4px;\r\n}\r\n\r\n.d-flex[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] + span[_ngcontent-%COMP%] {\r\n    margin-left: auto;\r\n    font-weight: 600;\r\n    width: 60px;\r\n\r\n    i {\r\n        font-size: 16px;\r\n        color: #bd2130;\r\n        display: inline-block;\r\n        position: relative;\r\n        top: 2px;\r\n        cursor: pointer;\r\n    }\r\n}\r\n\r\n.sub-item-box[_ngcontent-%COMP%]   .pro-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    height: 55px;\r\n    width: 55px;\r\n    margin: 18px auto 8px;\r\n}\r\n\r\n.links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    display: block;\r\n    color: #17a2b8 !important;\r\n    text-decoration: underline !important;\r\n    font-size: 12px;\r\n    cursor: pointer;\r\n}\r\n\r\n.modal-header[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    margin: 5px 0;\r\n    color: #bd2130;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.field[_ngcontent-%COMP%] {\r\n    margin-bottom: 10px;\r\n\r\n    select {\r\n        border: 1px solid #ddd;\r\n        border-radius: 3px;\r\n        height: 26px;\r\n        font-size: 12px;\r\n        margin-left: 10px;\r\n        margin-top: -4px;\r\n        width: 60px;\r\n    }\r\n}\r\n\r\n.topcontent[_ngcontent-%COMP%] {\r\n    font-size: larger;\r\n}\r\n\r\n.actdct_icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    max-width: 45px;\r\n}\r\n\r\n.action_icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    color: #bd2130;\r\n    margin: 0 10px 0 10px;\r\n}\r\n\r\n.btn-space[_ngcontent-%COMP%] {\r\n    margin-right: 10px;\r\n}\r\n\r\n.comm-desk-title[_ngcontent-%COMP%] {\r\n    font-size: 1.3rem;\r\n    font-weight: 600;\r\n    color: #222;\r\n    letter-spacing: 0.5px;\r\n}\r\n\r\n.comm-desk-title[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\r\n    font-size: 1.3rem;\r\n    font-weight: 600;\r\n    color: #ff7900;\r\n}\r\n\r\n.smallfont[_ngcontent-%COMP%] {\r\n    font-size: 0.8rem;\r\n}\r\n\r\n.styled-tabs[_ngcontent-%COMP%] {\r\n    font-family: Arial, sans-serif;\r\n}\r\n\r\n.styled-tabs[_ngcontent-%COMP%]   tab[_ngcontent-%COMP%] {\r\n    padding: 20px;\r\n    background: #ffffff;\r\n    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);\r\n}\r\n\r\n.profile[_ngcontent-%COMP%] {\r\n    height: 80px;             \r\n    object-fit: cover;         \r\n    border-radius: 50%;        \r\n    border: 2px solid #eee;\r\n    padding: 3px;\r\n    background: #fafafa;\r\n    transition: transform 0.2s ease-in-out;\r\n}\r\n\r\n.styled-tabs[_ngcontent-%COMP%]   tab[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n    margin-top: 10px;\r\n    font-size: 1.2rem;\r\n    font-weight: bold;\r\n    color: #333;\r\n}\r\n\r\n.styled-tabs[_ngcontent-%COMP%]   tab[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    margin: 4px 0;\r\n    font-size: 0.95rem;\r\n    color: #555;\r\n}\r\n\r\n.styled-tabs[_ngcontent-%COMP%]   tab[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    background: #007bff;\r\n    color: white;\r\n    border: none;\r\n    padding: 6px 12px;\r\n    border-radius: 4px;\r\n    cursor: pointer;\r\n    font-size: 0.9rem;\r\n    transition: background 0.2s ease;\r\n}\r\n\r\n.styled-tabs[_ngcontent-%COMP%]   tab[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\r\n    background: #0056b3;\r\n}\r\n\r\n.styled-tabs[_ngcontent-%COMP%]   tab[_ngcontent-%COMP%]   div[style*=\"display:flex\"][_ngcontent-%COMP%] {\r\n    flex-wrap: wrap;\r\n}\r\n\r\n.styled-tabs[_ngcontent-%COMP%]   tab[_ngcontent-%COMP%]   div[style*=\"gap\"][_ngcontent-%COMP%] > div[_ngcontent-%COMP%] {\r\n    background: #f9f9f9;\r\n    padding: 10px;\r\n    border-radius: 6px;\r\n    text-align: center;\r\n    flex: 1;\r\n    min-width: 120px;\r\n}\r\n\r\n.profile-row[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 20px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.profile-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 80px;\r\n    height: 80px;\r\n    border-radius: 50%;\r\n    border: 2px solid #eee;\r\n    object-fit: cover;\r\n}\r\n\r\n.profile-image-big[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 100px;\r\n    height: 100px;\r\n    border-radius: 50%;\r\n    border: 2px solid #eee;\r\n    object-fit: cover;\r\n}\r\n\r\n.profile-details[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n}\r\n\r\n.profile-name[_ngcontent-%COMP%] {\r\n    font-size: 1.25rem;\r\n    font-weight: bold;\r\n    margin: 0;\r\n    color: #222;\r\n}\r\n\r\n.profile-title[_ngcontent-%COMP%] {\r\n    font-size: 1rem;\r\n    font-weight: 500;\r\n    color: #666;\r\n    margin: 3px 0;\r\n}\r\n\r\n.profile-verified[_ngcontent-%COMP%] {\r\n    font-size: 0.95rem;\r\n    color: #28a745;\r\n    font-weight: 500;\r\n    margin: 0;\r\n}\r\n\r\n.profilesection[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column; \r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 2px;\r\n}\r\n\r\n\r\n.rounded-border[_ngcontent-%COMP%] {\r\n  border: 1.5px solid #ccc; \r\n  border-radius: 8px;     \r\n  padding: 12px;          \r\n}\r\n\r\n.membership-checkout[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  font-weight: 500;\r\n}\r\n\r\n.membership-checkout[_ngcontent-%COMP%]   .btn-warning[_ngcontent-%COMP%] {\r\n  background-color: #ff9900;\r\n  border: none;\r\n  color: #fff;\r\n  font-weight: 500;\r\n}\r\n\r\n.membership-checkout[_ngcontent-%COMP%]   .btn-dark[_ngcontent-%COMP%] {\r\n  background-color: #000;\r\n  color: #fff;\r\n  font-weight: 600;\r\n}\r\n\r\n.cart-summary[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  margin-bottom: 4px;\r\n  font-size: 14px;\r\n}\r\n\r\n.cart-summary[_ngcontent-%COMP%]   .btn-danger[_ngcontent-%COMP%] {\r\n  background-color: #c00;\r\n  border: none;\r\n  font-weight: 600;\r\n}\r\n\r\n.cart-summary[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\r\n  font-weight: 700;\r\n  color: #990000;\r\n}\r\n\r\n.cart-summary[_ngcontent-%COMP%]   .btn-danger[_ngcontent-%COMP%]:hover {\r\n  background-color: #a60000;\r\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BuyServicesComponent, [{
        type: Component,
        args: [{ selector: 'app-buy-services', template: "<div class=\"content\">\n    <h1 class=\"heading-title\">Buy MDR-Connect Services</h1>\n    <div class=\"card\">\n        <div class=\"card-body pl-0 pr-0\">\n            <div>\n                <div class=\"row topcontent mt-3\">\n\n                    <div class=\"col-md-12 mb-3\">\n                        <button (click)=\"openCheckout(membershipCheckout)\" type=\"button\"\n                            class=\"btn custom-btn float-right\">Buy MDR-Connect Services</button>\n                    </div>\n\n                    <tabset class=\"col-md-12\">\n\n                        <tab heading=\"My Stores Services Payments\" id=\"tab1\">\n\n                            <div class=\"card exiting-office-table orderStatus p-0 mt-2\">\n\n                                <!-- Card Header -->\n                                <div class=\"card-header\">\n                                    <div style=\"display: flex; flex-direction: column;\">\n                                        <span>My Stores Services Payments</span>\n                                    </div>\n                                </div>\n\n                                <!-- Card Body -->\n                                <div class=\"card-body pa-0\">\n                                    <div class=\"row m-0\">\n                                        <div class=\"col-md-12 py-2\">\n                                            <table class=\"table\">\n                                                <thead>\n                                                    <tr>\n                                                        <th class=\"font\">S#</th>\n                                                        <th class=\"font\">Service ID</th>\n                                                        <th class=\"font\">Name</th>\n                                                        <th class=\"font\">Date</th>\n                                                        <th class=\"font\">Order ID</th>\n                                                        <th class=\"font\">Invoice</th>\n                                                    </tr>\n                                                </thead>\n                                                <tbody>\n                                                    <tr>\n                                                        <td>1</td>\n                                                        <td>SRV-1001</td>\n                                                        <td>Premium Membership Renewal</td>\n                                                        <td>04-Nov-2025</td>\n                                                        <td>ORD-789654</td>\n                                                        <td>\n                                                            <button class=\"btn btn-sm btn-outline-primary\">\n                                                                Response Centre\n                                                            </button>\n                                                        </td>\n                                                    </tr>\n                                                </tbody>\n                                            </table>\n\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n\n                        </tab>\n\n                    </tabset>\n\n                </div>\n\n            </div>\n            <br><br>\n            <ngx-spinner template=\"<img src='assets/images/icons/please_wait.gif' />\">\n            </ngx-spinner>\n        </div>\n    </div>\n</div>\n\n<!-- Membership Checkout Template -->\n<ng-template #membershipCheckout>\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title pull-left\">Service Checkout</h4>\n        <button type=\"button\" class=\"btn-close close pull-right\" aria-label=\"Close\" (click)=\"closeCheckout()\">\n            <span aria-hidden=\"true\" class=\"visually-hidden\">&times;</span>\n        </button>\n    </div>\n\n    <div class=\"modal-body\">\n\n        <div class=\"row mb-2 align-items-end\">\n            <!-- Service Dropdown -->\n            <div class=\"col-md-6\">\n                <label class=\"fw-bold\">Service list Id</label>\n                <select class=\"form-control\" [(ngModel)]=\"selectedService\">\n                    <option value=\"\" disabled selected>Select Service</option>\n                    <option *ngFor=\"let service of servicesList\" [value]=\"service.id\">\n                        {{ service.name }}\n                    </option>\n                </select>\n            </div>\n\n            <!-- Show Price Button -->\n            <div class=\"col-md-4 text-md-right mt-3 mt-md-0\">\n                <button class=\"btn btn-warning btn-sm fw-bold w-100\" (click)=\"showPrice()\">\n                    Show Price & Discount\n                </button>\n            </div>\n        </div>\n\n        <div *ngIf=\"showPriceDetails\" class=\"text-start mt-3\">\n            <button (click)=\"openCartModal(cartSummary)\" class=\"btn btn-success fw-bold\">\n                Open Checkout Cart\n            </button>\n        </div>\n\n        <!-- Price Details -->\n        <div *ngIf=\"showPriceDetails\" class=\"row mb-2 my-3 border mx-1 rounded bg-light p-2 text-start\">\n            <div class=\"col-md-12\">\n                <p>Per Unit Price: <strong>{{ serviceDiscount?.ServicePrice }}</strong></p>\n                <p>Currency: <strong>INR</strong></p>\n                <p>Discount %: <strong>{{ serviceDiscount?.Discount_Percntg }}</strong></p>\n                <p>GST %: <strong>{{ serviceDiscount?.GST_Percntg }}</strong></p>\n            </div>\n        </div>\n\n        <!-- Quantity -->\n        <div *ngIf=\"showPriceDetails\" class=\"row mb-2\">\n            <div class=\"col-md-6\">\n                <label class=\"fw-bold\">Quantity</label>\n                <input type=\"number\" class=\"form-control\" [(ngModel)]=\"quantity\" min=\"1\" placeholder=\"Enter quantity\" />\n            </div>\n        </div>\n\n        <div *ngIf=\"showPriceDetails\" class=\"text-center mt-3\">\n            <button (click)=\"cartCheckout(cartSummary)\" class=\"btn btn-dark fw-bold\">\n                Check-out Cart\n            </button>\n        </div>\n    </div>\n</ng-template>\n\n<!-- Cart Summary Template -->\n<ng-template #cartSummary>\n\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title pull-left\">Cart Summary</h4>\n        <button type=\"button\" class=\"btn-close close pull-right\" aria-label=\"Close\"\n            (click)=\"closeCart(membershipCheckout)\">\n            <span aria-hidden=\"true\" class=\"visually-hidden\">&times;</span>\n        </button>\n    </div>\n\n    <div class=\"modal-body\">\n\n        <div class=\"cart-summary p-3 rounded\">\n\n            <!-- Cart ID & Service -->\n            <div class=\"d-flex justify-content-between align-items-center mb-2\">\n                <div>\n                    <p><strong>Cart Id :</strong> {{ openCart?.MDR_CONCT_SERVICE_CARTID || '\u2014' }}</p>\n                    <p><strong>Service Id :</strong> {{ openCart?.MDR_CONCT_CART_FOR_SERVICEID || '\u2014' }}</p>\n                    <p><strong>Service Name :</strong> {{ openCart?.MDR_CONCT_CART_SERVICE_NAME || '\u2014' }}</p>\n                </div>\n                <button (click)=\"deleteCart()\" class=\"btn btn-danger btn-sm px-3\">Delete CART</button>\n            </div>\n\n            <!-- Membership -->\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <p><strong>Membership Id :</strong> {{ openCart?.MDR_CONCT_STORE_MEMBRSHIP_ID || '\u2014' }}</p>\n                </div>\n                <div class=\"col-md-6\">\n                    <p><strong>Membership Name :</strong> {{ openCart?.MDR_CONCT_STORE_MEMBRSHIP_NAME || '\u2014' }}</p>\n                </div>\n            </div>\n\n            <!-- Cost Details -->\n            <div class=\"border p-2 rounded bg-light\">\n                <p><strong>Per Unit Cost :</strong>\n                    <span class=\"text-danger\">{{ openCart?.MDR_CONCT_SPP_UNIT_SERVICE_COST | number:'1.2-2' }}</span>\n                </p>\n                <p><strong>Quantity :</strong> {{ openCart?.MDR_CONCT_SERVICE_QUANTITY }}</p>\n                <p><strong>Currency :</strong> {{ openCart?.MDR_CONCT_SERVICE_CURRENCY }}</p>\n                <p><strong>Discount % :</strong> {{ openCart?.MDR_CONCT_SERVICE_DISCNT_PERCENTG }}%</p>\n                <p><strong>GST % :</strong> {{ openCart?.MDR_CONCT_SERVICE_GST_PERCENTG }}%</p>\n            </div>\n\n            <!-- Computed Fields -->\n            <div class=\"mt-3\">\n                <p><strong>Cost with Quantity :</strong>\n                    {{ openCart?.MDR_CONCT_SERVICE_WITH_QUANTITY_AMT | number:'1.2-2' }}\n                </p>\n                <p><strong>Discount Amount :</strong>\n                    {{ openCart?.MDR_CONCT_SERVICE_DISCNT_AMT | number:'1.2-2' }}\n                </p>\n                <p><strong>Re-activation :</strong>\n                    {{ openCart?.MDR_CONCT_RE_ACTIVATION_AMT | number:'1.2-2' }}\n                </p>\n                <p><strong>GST Charged :</strong>\n                    {{ openCart?.MDR_CONCT_CART_GST_CHARGED_AMT | number:'1.2-2' }}\n                </p>\n            </div>\n\n            <!-- Total -->\n            <h5 class=\"text-danger mt-3\">\n                <strong>Total to Pay Amount :</strong>\n                <span class=\"text-dark\">\n                    {{ openCart?.MDR_CONCT_CART_TOTAL_TO_PAY_AMT | number:'1.2-2' }}\n                    {{ openCart?.MDR_CONCT_SERVICE_CURRENCY }}\n                </span>\n            </h5>\n\n            <div class=\"text-center mt-3\">\n                <button (click)=\"payment()\" class=\"btn btn-danger px-4 py-2 font-weight-bold\">PAY</button>\n            </div>\n\n        </div>\n\n    </div>\n</ng-template>", styles: [".toplevel {\r\n    background: #fff;\r\n    padding: 20px;\r\n    margin-bottom: 15px;\r\n    margin-top: 10px;\r\n    border: 1px solid #ddd;\r\n    border-radius: 5px;\r\n}\r\n\r\n.table-font-size th,\r\n.table-font-size td {\r\n    font-size: 13px;\r\n    /* Change to your desired size */\r\n}\r\n\r\n.vipDiv {\r\n    background: #f8f9fa;\r\n    padding: 15px;\r\n    border-radius: 3px;\r\n    min-height: 210px;\r\n}\r\n\r\n.orderStatus td {\r\n    vertical-align: middle;\r\n}\r\n\r\n.orderStatus td .btn {\r\n    font-size: 13px;\r\n    padding: 4px 10px;\r\n}\r\n\r\n.orderStatus small {\r\n    color: #c50f20;\r\n    font-size: 90%;\r\n    font-weight: 600;\r\n}\r\n\r\n.bottom-btn {\r\n    float: right;\r\n}\r\n\r\n.alert.alert-success {\r\n    padding: 5px 10px;\r\n}\r\n\r\n.alert .fa {\r\n    font-size: 25px;\r\n    vertical-align: middle;\r\n    margin-left: 5px;\r\n}\r\n\r\n.orderStatus {\r\n    .card-header {\r\n        border: 0;\r\n    }\r\n\r\n    .card-body {\r\n        padding: 0;\r\n        overflow: auto;\r\n    }\r\n}\r\n\r\nh3.head-title {\r\n    font-size: 22px;\r\n    margin: 20px 0;\r\n    font-weight: bold;\r\n}\r\n\r\n.icon .fa {\r\n    font-size: 20px;\r\n    vertical-align: top;\r\n    color: #17a2b8;\r\n}\r\n\r\n.orderStatus .icon img {\r\n    max-width: 25px;\r\n}\r\n\r\n.orderStatus .btn {\r\n    background: #021422;\r\n    border-radius: 25px;\r\n    color: #fff;\r\n    font-size: 11px !important;\r\n    border: 1px solid #21333c;\r\n\r\n    i {\r\n        font-size: 18px;\r\n        vertical-align: middle;\r\n        padding-right: 5px;\r\n    }\r\n}\r\n\r\nbutton.btn.view-del-btn {\r\n    background: #63030c !important;\r\n}\r\n\r\n.table thead th {\r\n    border: 0;\r\n}\r\n\r\n.toplevel,\r\n.card {\r\n    padding: 0 20px 0;\r\n}\r\n\r\n.table th {\r\n    padding: 8px 5px;\r\n    text-align: center;\r\n    line-height: 13px;\r\n    font-weight: 600;\r\n    font-size: 13px;\r\n    border-top: 0;\r\n}\r\n\r\n.table td {\r\n    text-align: center;\r\n    font-size: 12px;\r\n    line-height: 15px;\r\n    padding: 10px 5px;\r\n}\r\n\r\ntd.icon {\r\n    padding: 0 !important;\r\n}\r\n\r\nbutton.btn.custom-btn {\r\n    min-width: 100px;\r\n}\r\n\r\n::ng-deep .nav-tabs .nav-link {\r\n    font-size: 11px;\r\n    /* Adjust as needed */\r\n}\r\n\r\nbutton.btn.custom-btn-white {\r\n    min-width: 100px;\r\n    background: #ffffff;\r\n    border: 1px solid #c50f20;\r\n    color: #c50f20;\r\n    font-weight: 600;\r\n\r\n    &:hover {\r\n        background: #c50f20;\r\n        color: #ffffff;\r\n    }\r\n}\r\n\r\n.input-group-prepend+.invalid-feedback {\r\n    top: 35px;\r\n}\r\n\r\n.card-header {\r\n    padding: 10px 15px;\r\n    background: #63030c;\r\n    font-size: 12px;\r\n    color: #fff;\r\n    font-weight: 500;\r\n\r\n    span {\r\n        float: left;\r\n    }\r\n\r\n    span+span {\r\n        float: right;\r\n    }\r\n}\r\n\r\n.card-header img {\r\n    width: 16px;\r\n    margin-left: 3px;\r\n}\r\n\r\n.subcard-header {\r\n    padding: 8px 12px;\r\n    background: #63030c;\r\n    font-size: 10px;\r\n    color: #fff;\r\n    font-weight: 500;\r\n\r\n    span {\r\n        float: left;\r\n    }\r\n\r\n    span+span {\r\n        float: right;\r\n    }\r\n}\r\n\r\n.subcard-header img {\r\n    width: 16px;\r\n    margin-left: 3px;\r\n}\r\n\r\n.icofont-info-circle {\r\n    font-size: 20px;\r\n    vertical-align: middle;\r\n    margin-left: 3px;\r\n}\r\n\r\n.orderList thead tr {\r\n    background: #ff000029;\r\n}\r\n\r\n.orderList {\r\n    border-collapse: collapse;\r\n    border: 1px solid #ddd;\r\n    margin: 5px 0;\r\n}\r\n\r\n.orderList td {\r\n    border: 1px solid #ddd;\r\n}\r\n\r\n.orderList tr th {\r\n    background: #212529;\r\n    color: #fff;\r\n    vertical-align: middle;\r\n}\r\n\r\n.no-border td {\r\n    border: 0 !important;\r\n    text-align: right !important;\r\n    font-weight: 600;\r\n    font-size: 12px !important;\r\n}\r\n\r\nsmall.view-customer {\r\n    display: block;\r\n    text-decoration: underline;\r\n    cursor: pointer;\r\n}\r\n\r\nbutton.btn.view-ord-btn {\r\n    min-width: 112px;\r\n}\r\n\r\nbutton.btn.view-del-btn {\r\n    min-width: 125px;\r\n}\r\n\r\n.card-body.no_data_available {\r\n    text-align: center;\r\n    color: #bd2130;\r\n\r\n    img {\r\n        display: block;\r\n        text-align: center;\r\n        margin: 0 auto 5px;\r\n        max-width: 30px;\r\n    }\r\n}\r\n\r\n\r\nsmall.viewCart {\r\n    text-decoration: underline;\r\n    cursor: pointer;\r\n}\r\n\r\n.hr {\r\n    border: none;\r\n    border-top: 1.5px solid #d1d1d1;\r\n    margin: 16px 0;\r\n    height: 0;\r\n    width: 100%;\r\n}\r\n\r\nh1.heading-title {\r\n    margin: 20px 0 0;\r\n}\r\n\r\n.heading h2 {\r\n    padding: 10px 5px 10px;\r\n    font-size: 20px;\r\n}\r\n\r\n.row.topLevel {\r\n    background: #fff;\r\n    padding: 20px 0;\r\n    margin: 0;\r\n    border-radius: 5px;\r\n}\r\n\r\n.heading.store-domain {\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.store-domain div {\r\n    display: inline-block;\r\n    margin-right: 20px;\r\n}\r\n\r\n.store-domain span {\r\n    background: #ddd;\r\n    padding: 5px 20px;\r\n    font-size: 13px;\r\n    border-radius: 20px;\r\n    display: inline-block;\r\n    font-weight: bold;\r\n    margin-left: 5px;\r\n}\r\n\r\n.store_id {\r\n    background: #ddd;\r\n    padding: 5px 20px;\r\n    border-radius: 20px;\r\n    font-size: 13px;\r\n    font-weight: 700;\r\n    float: right;\r\n    margin-top: -40px;\r\n}\r\n\r\n.box {\r\n    width: 100%;\r\n    overflow: hidden;\r\n    box-shadow: 0 0 4px 0px #eee;\r\n    margin: 20px 0 5px;\r\n    border-radius: 4px;\r\n    padding: 10px;\r\n    background: #fff;\r\n}\r\n\r\n.main-content-area .box .col {\r\n    width: 20%;\r\n    float: left;\r\n    padding: 0;\r\n}\r\n\r\n.fa-star:before {\r\n    content: \"\\f005\";\r\n    color: #ff9600;\r\n    margin-right: 5px;\r\n}\r\n\r\n.pro-box {\r\n    box-shadow: 0 0 4px 0 #e9ecef;\r\n    margin: 0 5px 10px;\r\n    overflow: hidden;\r\n    padding: 15px;\r\n    border-radius: 3px;\r\n    position: relative;\r\n    border: 1px solid #dee2e6;\r\n}\r\n\r\n.pro-box img {\r\n    height: 100px;\r\n    width: 100px;\r\n    margin: 30px auto 15px;\r\n    display: block;\r\n}\r\n\r\n.storeitem .p-details {\r\n    margin-bottom: 42px;\r\n}\r\n\r\np.label-txt {\r\n    text-align: center;\r\n    padding: 10px;\r\n    font-size: 14px;\r\n    margin: 0;\r\n}\r\n\r\n.store-available-product .col {\r\n    width: 25% !important;\r\n}\r\n\r\n.selected-productLine h5,\r\n.store-available-product h5 {\r\n    font-size: 16px;\r\n    padding: 0 10px 5px;\r\n}\r\n\r\n.right-field-head {\r\n    float: right;\r\n    margin-top: 10px;\r\n}\r\n\r\n.right-field-head li {\r\n    display: inline-block;\r\n    padding: 0 10px;\r\n}\r\n\r\nspan.video,\r\nspan.doc {\r\n    padding: 8px 15px;\r\n    background: #dee2e6;\r\n    font-size: 12px;\r\n    border-radius: 20px;\r\n}\r\n\r\n.right-field-head .btn {\r\n    font-size: 11px;\r\n    border-radius: 20px;\r\n}\r\n\r\n.bottom-btn .btn {\r\n    line-height: 11px;\r\n}\r\n\r\n.box.prduct-gallery {\r\n    position: relative;\r\n}\r\n\r\n.sample-img {\r\n    position: absolute;\r\n    z-index: 1;\r\n    left: 15%;\r\n    top: 28%;\r\n    transform: rotate(-45deg);\r\n}\r\n\r\np.p-name {\r\n    text-align: center;\r\n    margin: 0;\r\n    font-size: 13px;\r\n    font-weight: 500;\r\n    vertical-align: middle;\r\n}\r\n\r\np.item-id {\r\n    text-align: center;\r\n    position: absolute;\r\n    top: 0;\r\n    background: #212529;\r\n    left: 0;\r\n    font-weight: 600;\r\n    color: #fff;\r\n    border-radius: 0 0 5px;\r\n    font-size: 11px;\r\n    padding: 3px 6px;\r\n}\r\n\r\nspan.price {\r\n    font-size: 12px;\r\n    padding: 7px 10px 0;\r\n    float: left;\r\n    font-weight: 600;\r\n    line-height: 20px;\r\n}\r\n\r\n.item-id b {\r\n    font-weight: 600;\r\n}\r\n\r\n.instock {\r\n    font-size: 12px;\r\n    text-align: center;\r\n    margin: 0 0 3px;\r\n    position: absolute;\r\n    top: 5%;\r\n    box-shadow: 0 0 30px 0 rgb(82 63 105 / 10%);\r\n    left: 70%;\r\n    background: rgb(224 152 152 / 24%);\r\n    width: 50px;\r\n    border: 1px solid rgb(0 0 0 / 10%);\r\n    height: 50px;\r\n    border-radius: 50%;\r\n\r\n    img {\r\n        width: 30px !important;\r\n        height: 30px !important;\r\n        margin: 9px auto;\r\n    }\r\n}\r\n\r\n.pro-box.storeitem.item-box {\r\n    border: 1px solid #dee2e6;\r\n    height: 300px;\r\n    padding-left: 20px;\r\n    padding-right: 20px;\r\n}\r\n\r\nh1.heading-title {\r\n    font-size: 20px;\r\n    text-transform: uppercase;\r\n    font-weight: 700;\r\n    color: #ff7900;\r\n    position: relative;\r\n    margin-bottom: 10px;\r\n    width: 100%;\r\n\r\n    span {\r\n        font-size: 10px;\r\n        text-transform: inherit;\r\n        background: #495057;\r\n        color: #fff;\r\n        padding: 10px 15px;\r\n        border-radius: 25px;\r\n    }\r\n}\r\n\r\nh1.heading-title img {\r\n    max-width: 65px;\r\n    margin-right: 5px;\r\n}\r\n\r\nh1.heading-title small {\r\n    display: inline-block;\r\n    font-weight: 400;\r\n    font-size: 13px;\r\n    position: absolute;\r\n    left: 80px;\r\n    bottom: 4px;\r\n    color: grey;\r\n}\r\n\r\n.offerDiv {\r\n    position: absolute;\r\n    top: 5px;\r\n    right: 5px;\r\n    font-size: 10px;\r\n    background: #dc3545;\r\n    line-height: 10px;\r\n    font-weight: 700;\r\n    width: 35px;\r\n    height: 35px;\r\n    border-radius: 50%;\r\n    padding: 9px;\r\n    text-align: center;\r\n    color: #fff;\r\n}\r\n\r\n.offerDiv small {\r\n    display: block;\r\n}\r\n\r\nspan.price.strike-price {\r\n    color: #ccc;\r\n    text-decoration: line-through;\r\n}\r\n\r\n.row.text-level {\r\n    margin: 0 -10px 10px;\r\n}\r\n\r\n.store-add-remove {\r\n    text-align: center;\r\n    padding: 10px;\r\n    float: left;\r\n    width: 100%;\r\n}\r\n\r\n.row.product-slider-box {\r\n    border-bottom: 5px solid #ddd;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.carousel-inner {\r\n    height: 278px;\r\n}\r\n\r\n.carousel-item {\r\n    margin-right: 0;\r\n    border: 1px solid #f8f9fa;\r\n    background: #fff;\r\n}\r\n\r\n.product-slider-box .domain-product {\r\n    max-width: 23%;\r\n}\r\n\r\n.product-slider-box .sub-domain-product {\r\n    max-width: 77%;\r\n}\r\n\r\n.store-add-remove .btn {\r\n    font-size: 11px;\r\n    text-align: center;\r\n    float: left;\r\n    transition: all .5s;\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n    min-width: 65px;\r\n}\r\n\r\n.store-add-remove .btn+.btn {\r\n    float: right;\r\n}\r\n\r\n.item-subitem-list .pro-box {\r\n    width: 95%;\r\n    overflow: auto;\r\n    height: 280px;\r\n}\r\n\r\n.item-subitem-list li {\r\n    width: 100%;\r\n    float: left;\r\n}\r\n\r\n.item-box {\r\n    max-width: 225px;\r\n    width: 100%;\r\n    float: left;\r\n}\r\n\r\n.sub-item-box {\r\n    width: 100%;\r\n    float: left;\r\n    max-width: 225px;\r\n}\r\n\r\n.sub-item-box .add_to_cart button.btn {\r\n    background: #000064;\r\n    height: 35px;\r\n    font-size: 13px;\r\n    line-height: 16px;\r\n    color: #fff;\r\n    border-radius: 25px;\r\n    margin: 10px 0 0;\r\n    width: 100%;\r\n    text-align: center;\r\n}\r\n\r\n.add_to_cart {\r\n    .remove-btn {\r\n        border-radius: 50%;\r\n        background: #05054ead !important;\r\n        color: #fff;\r\n        height: 35px;\r\n        padding: 0;\r\n    }\r\n\r\n    .btn+.btn {\r\n        width: 100%;\r\n        border: 0;\r\n        border-radius: 30px;\r\n        font-size: 15px;\r\n        line-height: normal;\r\n        font-weight: 600;\r\n    }\r\n}\r\n\r\n.middle-arrow {\r\n    float: left;\r\n    width: 30px;\r\n    height: 50px;\r\n    font-size: 40px;\r\n    margin-top: 10%;\r\n    color: #dee2e6;\r\n    text-align: center;\r\n}\r\n\r\n.price-details {\r\n    float: left;\r\n    width: 100%;\r\n    margin-bottom: 10px;\r\n    font-size: 15px;\r\n    line-height: normal;\r\n    font-weight: 600;\r\n\r\n    .unit-price {\r\n        float: left;\r\n        width: 42%;\r\n    }\r\n}\r\n\r\n.unit-price span {\r\n    display: block;\r\n    font-size: 12px;\r\n    font-weight: 400;\r\n}\r\n\r\n.whole-sale-price {\r\n    float: right;\r\n    width: 58%;\r\n    text-align: right;\r\n\r\n    span {\r\n        font-size: 12px;\r\n        display: block;\r\n        font-weight: 400;\r\n    }\r\n}\r\n\r\n.add_to_cart {\r\n    clear: both;\r\n}\r\n\r\n.subItem-field {\r\n    width: calc(100% - 280px);\r\n    float: left;\r\n}\r\n\r\n.item img {\r\n    width: 100%;\r\n}\r\n\r\n.pro-box.active {\r\n    border: 1px solid #63030c;\r\n}\r\n\r\n.p-details .form-control {\r\n    font-size: 13px;\r\n    padding: 0 5px;\r\n    min-height: 25px;\r\n    height: 25px;\r\n    text-align: center;\r\n}\r\n\r\n.p-details .form-group label {\r\n    margin-bottom: 0;\r\n    font-weight: 400;\r\n    line-height: normal;\r\n    padding-top: 2px;\r\n    padding-bottom: 2px;\r\n}\r\n\r\n.p-details .form-group {\r\n    margin-bottom: 4px;\r\n}\r\n\r\n.sub-item-box img {\r\n    margin-top: 5px !important;\r\n}\r\n\r\n.p-details p {\r\n    font-size: 12px;\r\n    line-height: 14px;\r\n}\r\n\r\n.add-stock input {\r\n    display: inline-block !important;\r\n    width: 60px !important;\r\n    margin-left: 5px;\r\n    vertical-align: middle;\r\n}\r\n\r\n.min-alert-count input {\r\n    width: 35px;\r\n    margin-left: 5px;\r\n    display: inline-block;\r\n    margin-right: 4px;\r\n}\r\n\r\n.d-flex span+span {\r\n    margin-left: auto;\r\n    font-weight: 600;\r\n    width: 60px;\r\n\r\n    i {\r\n        font-size: 16px;\r\n        color: #bd2130;\r\n        display: inline-block;\r\n        position: relative;\r\n        top: 2px;\r\n        cursor: pointer;\r\n    }\r\n}\r\n\r\n.sub-item-box .pro-box img {\r\n    height: 55px;\r\n    width: 55px;\r\n    margin: 18px auto 8px;\r\n}\r\n\r\n.links a {\r\n    display: block;\r\n    color: #17a2b8 !important;\r\n    text-decoration: underline !important;\r\n    font-size: 12px;\r\n    cursor: pointer;\r\n}\r\n\r\n.modal-header i {\r\n    margin: 5px 0;\r\n    color: #bd2130;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.field {\r\n    margin-bottom: 10px;\r\n\r\n    select {\r\n        border: 1px solid #ddd;\r\n        border-radius: 3px;\r\n        height: 26px;\r\n        font-size: 12px;\r\n        margin-left: 10px;\r\n        margin-top: -4px;\r\n        width: 60px;\r\n    }\r\n}\r\n\r\n.topcontent {\r\n    font-size: larger;\r\n}\r\n\r\n.actdct_icon img {\r\n    max-width: 45px;\r\n}\r\n\r\n.action_icon i {\r\n    font-size: 20px;\r\n    color: #bd2130;\r\n    margin: 0 10px 0 10px;\r\n}\r\n\r\n.btn-space {\r\n    margin-right: 10px;\r\n}\r\n\r\n.comm-desk-title {\r\n    font-size: 1.3rem;\r\n    font-weight: 600;\r\n    color: #222;\r\n    letter-spacing: 0.5px;\r\n}\r\n\r\n.comm-desk-title small {\r\n    font-size: 1.3rem;\r\n    font-weight: 600;\r\n    color: #ff7900;\r\n}\r\n\r\n.smallfont {\r\n    font-size: 0.8rem;\r\n}\r\n\r\n.styled-tabs {\r\n    font-family: Arial, sans-serif;\r\n}\r\n\r\n.styled-tabs tab {\r\n    padding: 20px;\r\n    background: #ffffff;\r\n    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);\r\n}\r\n\r\n.profile {\r\n    height: 80px;             \r\n    object-fit: cover;         \r\n    border-radius: 50%;        \r\n    border: 2px solid #eee;\r\n    padding: 3px;\r\n    background: #fafafa;\r\n    transition: transform 0.2s ease-in-out;\r\n}\r\n\r\n.styled-tabs tab h4 {\r\n    margin-top: 10px;\r\n    font-size: 1.2rem;\r\n    font-weight: bold;\r\n    color: #333;\r\n}\r\n\r\n.styled-tabs tab p {\r\n    margin: 4px 0;\r\n    font-size: 0.95rem;\r\n    color: #555;\r\n}\r\n\r\n.styled-tabs tab button {\r\n    background: #007bff;\r\n    color: white;\r\n    border: none;\r\n    padding: 6px 12px;\r\n    border-radius: 4px;\r\n    cursor: pointer;\r\n    font-size: 0.9rem;\r\n    transition: background 0.2s ease;\r\n}\r\n\r\n.styled-tabs tab button:hover {\r\n    background: #0056b3;\r\n}\r\n\r\n.styled-tabs tab div[style*=\"display:flex\"] {\r\n    flex-wrap: wrap;\r\n}\r\n\r\n.styled-tabs tab div[style*=\"gap\"]>div {\r\n    background: #f9f9f9;\r\n    padding: 10px;\r\n    border-radius: 6px;\r\n    text-align: center;\r\n    flex: 1;\r\n    min-width: 120px;\r\n}\r\n\r\n.profile-row {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 20px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.profile-image img {\r\n    width: 80px;\r\n    height: 80px;\r\n    border-radius: 50%;\r\n    border: 2px solid #eee;\r\n    object-fit: cover;\r\n}\r\n\r\n.profile-image-big img {\r\n    width: 100px;\r\n    height: 100px;\r\n    border-radius: 50%;\r\n    border: 2px solid #eee;\r\n    object-fit: cover;\r\n}\r\n\r\n.profile-details {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n}\r\n\r\n.profile-name {\r\n    font-size: 1.25rem;\r\n    font-weight: bold;\r\n    margin: 0;\r\n    color: #222;\r\n}\r\n\r\n.profile-title {\r\n    font-size: 1rem;\r\n    font-weight: 500;\r\n    color: #666;\r\n    margin: 3px 0;\r\n}\r\n\r\n.profile-verified {\r\n    font-size: 0.95rem;\r\n    color: #28a745;\r\n    font-weight: 500;\r\n    margin: 0;\r\n}\r\n\r\n.profilesection {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column; /* Stack vertically */\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 2px;\r\n}\r\n\r\n\r\n.rounded-border {\r\n  border: 1.5px solid #ccc; \r\n  border-radius: 8px;     \r\n  padding: 12px;          \r\n}\r\n\r\n.membership-checkout label {\r\n  font-weight: 500;\r\n}\r\n\r\n.membership-checkout .btn-warning {\r\n  background-color: #ff9900;\r\n  border: none;\r\n  color: #fff;\r\n  font-weight: 500;\r\n}\r\n\r\n.membership-checkout .btn-dark {\r\n  background-color: #000;\r\n  color: #fff;\r\n  font-weight: 600;\r\n}\r\n\r\n.cart-summary p {\r\n  margin-bottom: 4px;\r\n  font-size: 14px;\r\n}\r\n\r\n.cart-summary .btn-danger {\r\n  background-color: #c00;\r\n  border: none;\r\n  font-weight: 600;\r\n}\r\n\r\n.cart-summary h5 {\r\n  font-weight: 700;\r\n  color: #990000;\r\n}\r\n\r\n.cart-summary .btn-danger:hover {\r\n  background-color: #a60000;\r\n}"] }]
    }], function () { return [{ type: i1.BsModalService }, { type: i2.ApiService }, { type: i3.ToastrService }, { type: i4.RazorpayService }, { type: i5.PaymentStatusService }]; }, null); })();
//# sourceMappingURL=buy-services.component.js.map