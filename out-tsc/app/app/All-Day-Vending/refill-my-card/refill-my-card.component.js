import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil, filter } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "src/app/services/api.service";
import * as i2 from "ngx-bootstrap/modal";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/router";
import * as i5 from "ngx-toastr";
import * as i6 from "ngx-spinner";
import * as i7 from "src/app/razorpay.service";
import * as i8 from "src/app/services/payment-status.service";
import * as i9 from "@angular/common";
function RefillMyCardComponent_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 16)(1, "h4", 17);
    i0.ɵɵtext(2, "Cart Summary");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 18);
    i0.ɵɵlistener("click", function RefillMyCardComponent_ng_template_18_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r5); const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.closeCheckout()); });
    i0.ɵɵelementStart(4, "span", 19);
    i0.ɵɵtext(5, "\u00D7");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(6, "div", 20)(7, "div", 21)(8, "div", 22)(9, "div")(10, "p")(11, "strong");
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
    i0.ɵɵelementStart(22, "button", 23);
    i0.ɵɵlistener("click", function RefillMyCardComponent_ng_template_18_Template_button_click_22_listener() { i0.ɵɵrestoreView(_r5); const ctx_r6 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r6.deleteCart()); });
    i0.ɵɵtext(23, "Delete CART");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(24, "div", 24)(25, "p")(26, "strong");
    i0.ɵɵtext(27, "Per Unit Cost :");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "span", 25);
    i0.ɵɵtext(29);
    i0.ɵɵpipe(30, "number");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(31, "p")(32, "strong");
    i0.ɵɵtext(33, "Quantity :");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(34);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(35, "p")(36, "strong");
    i0.ɵɵtext(37, "Currency :");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(38);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(39, "p")(40, "strong");
    i0.ɵɵtext(41, "Discount % :");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(42);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(43, "div", 26)(44, "p")(45, "strong");
    i0.ɵɵtext(46, "GST Charged :");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(47);
    i0.ɵɵpipe(48, "number");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(49, "h5", 27)(50, "strong");
    i0.ɵɵtext(51, "Total to Pay Amount :");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(52, "span", 28);
    i0.ɵɵtext(53);
    i0.ɵɵpipe(54, "number");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(55, "div", 29)(56, "button", 30);
    i0.ɵɵlistener("click", function RefillMyCardComponent_ng_template_18_Template_button_click_56_listener() { i0.ɵɵrestoreView(_r5); const ctx_r7 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r7.payAmount()); });
    i0.ɵɵtext(57, "PAY");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(13);
    i0.ɵɵtextInterpolate1(" ", (ctx_r1.openCart == null ? null : ctx_r1.openCart.MDR_CONCT_SERVICE_CARTID) || "\u2014", "");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", (ctx_r1.openCart == null ? null : ctx_r1.openCart.MDR_CONCT_CART_FOR_SERVICEID) || "\u2014", "");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", (ctx_r1.openCart == null ? null : ctx_r1.openCart.MDR_CONCT_CART_SERVICE_NAME) || "\u2014", "");
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(30, 10, ctx_r1.openCart == null ? null : ctx_r1.openCart.MDR_CONCT_SPP_UNIT_SERVICE_COST, "1.2-2"));
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.openCart == null ? null : ctx_r1.openCart.MDR_CONCT_SERVICE_QUANTITY, "");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.openCart == null ? null : ctx_r1.openCart.MDR_CONCT_SERVICE_CURRENCY, "");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.openCart == null ? null : ctx_r1.openCart.MDR_CONCT_SERVICE_DISCNT_PERCENTG, "%");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(48, 13, ctx_r1.openCart == null ? null : ctx_r1.openCart.MDR_CONCT_CART_GST_CHARGED_AMT, "1.2-2"), " ");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate2(" ", i0.ɵɵpipeBind2(54, 16, ctx_r1.openCart == null ? null : ctx_r1.openCart.MDR_CONCT_CART_TOTAL_TO_PAY_AMT, "1.2-2"), " ", ctx_r1.openCart == null ? null : ctx_r1.openCart.MDR_CONCT_SERVICE_CURRENCY, " ");
} }
function RefillMyCardComponent_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 16)(1, "h4", 17);
    i0.ɵɵtext(2, "Cart Summary");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 18);
    i0.ɵɵlistener("click", function RefillMyCardComponent_ng_template_20_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r9); const ctx_r8 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r8.closeCheckout()); });
    i0.ɵɵelementStart(4, "span", 19);
    i0.ɵɵtext(5, "\u00D7");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(6, "div", 20)(7, "div", 21)(8, "div", 22)(9, "div")(10, "p")(11, "strong");
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
    i0.ɵɵelementStart(22, "button", 23);
    i0.ɵɵlistener("click", function RefillMyCardComponent_ng_template_20_Template_button_click_22_listener() { i0.ɵɵrestoreView(_r9); const ctx_r10 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r10.deleteCart()); });
    i0.ɵɵtext(23, "Delete CART");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(24, "div", 24)(25, "p")(26, "strong");
    i0.ɵɵtext(27, "Per Unit Cost :");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "span", 25);
    i0.ɵɵtext(29);
    i0.ɵɵpipe(30, "number");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(31, "p")(32, "strong");
    i0.ɵɵtext(33, "Quantity :");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(34);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(35, "p")(36, "strong");
    i0.ɵɵtext(37, "Currency :");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(38);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(39, "p")(40, "strong");
    i0.ɵɵtext(41, "Discount % :");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(42);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(43, "div", 26)(44, "p")(45, "strong");
    i0.ɵɵtext(46, "GST Charged :");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(47);
    i0.ɵɵpipe(48, "number");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(49, "h5", 27)(50, "strong");
    i0.ɵɵtext(51, "Total to Pay Amount :");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(52, "span", 28);
    i0.ɵɵtext(53);
    i0.ɵɵpipe(54, "number");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(55, "div", 29)(56, "button", 30);
    i0.ɵɵlistener("click", function RefillMyCardComponent_ng_template_20_Template_button_click_56_listener() { i0.ɵɵrestoreView(_r9); const ctx_r11 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r11.payAmount()); });
    i0.ɵɵtext(57, "PAY");
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
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(30, 10, ctx_r3.openCart == null ? null : ctx_r3.openCart.MDR_CONCT_SPP_UNIT_SERVICE_COST, "1.2-2"));
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", ctx_r3.openCart == null ? null : ctx_r3.openCart.MDR_CONCT_SERVICE_QUANTITY, "");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", ctx_r3.openCart == null ? null : ctx_r3.openCart.MDR_CONCT_SERVICE_CURRENCY, "");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", ctx_r3.openCart == null ? null : ctx_r3.openCart.MDR_CONCT_SERVICE_DISCNT_PERCENTG, "%");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(48, 13, ctx_r3.openCart == null ? null : ctx_r3.openCart.MDR_CONCT_CART_GST_CHARGED_AMT, "1.2-2"), " ");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate2(" ", i0.ɵɵpipeBind2(54, 16, ctx_r3.openCart == null ? null : ctx_r3.openCart.MDR_CONCT_CART_TOTAL_TO_PAY_AMT, "1.2-2"), " ", ctx_r3.openCart == null ? null : ctx_r3.openCart.MDR_CONCT_SERVICE_CURRENCY, " ");
} }
export class RefillMyCardComponent {
    constructor(apiService, modalService, formBuilder, router, toastr, spinner, razorpayService, paymentStatusService) {
        this.apiService = apiService;
        this.modalService = modalService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.toastr = toastr;
        this.spinner = spinner;
        this.razorpayService = razorpayService;
        this.paymentStatusService = paymentStatusService;
        this.refillAmount = 200;
        this.gstPercent = 5;
        this.gstAmount = 0;
        this.totalAmount = 0;
        this.destroy$ = new Subject();
        this.getlogindata = localStorage.getItem('logindata');
        this.getlogindata = JSON.parse(this.getlogindata);
        this.subaccountid = this.apiService.requiredLoginData.subaccountid;
        this.storeid = this.apiService.requiredLoginData.storeid;
    }
    ngOnInit() {
        this.calculateAmount();
        this.paymentStatusService.paymentStatus$
            .pipe(takeUntil(this.destroy$), filter(status => status === null || status === void 0 ? void 0 : status.success))
            .subscribe(status => {
            var _a, _b;
            if (status) {
                if (status.success) {
                    try {
                        const payload = {
                            cartId: (_a = this.openCart) === null || _a === void 0 ? void 0 : _a.MDR_CONCT_SERVICE_CARTID,
                            storecode: this.getlogindata.ADC_VEND_CARDHOLDR_REGID,
                            serviceId: (_b = this.openCart) === null || _b === void 0 ? void 0 : _b.MDR_CONCT_CART_FOR_SERVICEID,
                            confirmPayFlg: true,
                            rzrpay_Pamnt_Id: status.paymentId,
                            rzrpay_Signature: status.paymentSignature,
                            rzrpay_Live_Flg: this.openCart.MDR_PG_LIVE_KEY_FLG
                        };
                        console.log("payload: ", payload);
                        this.apiService.postCall(this.apiService.baseURL + '/MDR_Service_10and8_MakePayments', payload)
                            .subscribe(data => {
                            var _a;
                            console.log(data);
                            this.toastr.success(data.Message, '', {
                                timeOut: 5000,
                            });
                            (_a = this.modalRef) === null || _a === void 0 ? void 0 : _a.hide();
                        }, (error) => {
                            console.log(error);
                            this.toastr.error(error, '', {
                                timeOut: 5000,
                            });
                        });
                        this.paymentStatusService.updatePaymentStatus(null);
                    }
                    catch (error) {
                        console.log(error);
                    }
                }
                console.log('Payment status: ', status);
            }
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    calculateAmount() {
        this.gstAmount = +(this.refillAmount * this.gstPercent / 100).toFixed(2);
        this.totalAmount = +(this.refillAmount + this.gstAmount).toFixed(2);
    }
    payAmount() {
        console.log('Paying:', this.totalAmount);
        if (!this.openCart) {
            this.toastr.error('No checkout found. Please Add to Cart first.');
            return;
        }
        // this.openCart;
        this.razorpayService.payWithRazorpay(this.openCart.Id, this.openCart.MDR_CONCT_CART_TOTAL_TO_PAY_AMT_IN_PAISA, this.openCart.MDR_PG_LIVE_KEY_FLG, this.openCart.PlateformName, this.openCart.email, this.openCart.Contact);
    }
    closeCheckout() {
        var _a;
        (_a = this.modalRef) === null || _a === void 0 ? void 0 : _a.hide();
    }
    addToCart(template) {
        const payload = {
            Storecode: this.getlogindata.ADC_VEND_CARDHOLDR_REGID,
            MemberPlanId: "999",
            PlanName: 'Vending Plan',
            ServiceId: '21',
            ServicePrice: this.refillAmount,
            Quantity: 1,
            DiscountPercent: 0,
            GstPercent: this.gstPercent,
            Currency: 'INR',
            Login_Subacctid: this.subaccountid,
            Login_Storeid: this.storeid,
            Persnl_Walt_Flg: this.getlogindata.RETAIL_D2C_ACCT_INTRNL_CUSTMR_ROLE_ALCTD === '37' ? true : false,
            Corp_Walt_Flg: false,
            Cash_Flg: false,
            Digital_Paymnt_Flg: true
        };
        console.log("payload: ", payload);
        this.apiService.postCall(this.apiService.baseURL + '/MDRCheckout', payload)
            .subscribe(data => {
            console.log(data);
            this.openCart = data;
            this.modalRef = this.modalService.show(template, { class: 'modal-md' });
        }, (error) => {
            console.log("error: ", error);
            this.toastr.error(error.error || error, '', {
                timeOut: 5000,
            });
        });
    }
    diaplyCart(template) {
        const payload = {
            "Storecode": this.getlogindata.ADC_VEND_CARDHOLDR_REGID,
            "Serviceid": "21"
        };
        this.apiService.postCall(this.apiService.baseURL + '/Display-OpenCart', payload)
            .subscribe(data => {
            console.log(data);
            if (data.Message === "No Open cart Found for the Store") {
                this.toastr.error(data.Message);
            }
            else {
                this.openCart = data;
                this.modalRef = this.modalService.show(template, { class: 'modal-md' });
            }
        }, (error) => {
            var _a;
            this.toastr.error(((_a = error.error) === null || _a === void 0 ? void 0 : _a.Message) || error, '', {
                timeOut: 5000,
            });
        });
    }
    deleteCart() {
        var _a, _b;
        const payload = {
            Storecode: this.getlogindata.ADC_VEND_CARDHOLDR_REGID,
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
        }, (error) => {
            var _a;
            console.log('Error: ', error);
            this.toastr.error(((_a = error.error) === null || _a === void 0 ? void 0 : _a.Message) || error, '', {
                timeOut: 5000,
            });
        });
    }
}
RefillMyCardComponent.ɵfac = function RefillMyCardComponent_Factory(t) { return new (t || RefillMyCardComponent)(i0.ɵɵdirectiveInject(i1.ApiService), i0.ɵɵdirectiveInject(i2.BsModalService), i0.ɵɵdirectiveInject(i3.FormBuilder), i0.ɵɵdirectiveInject(i4.Router), i0.ɵɵdirectiveInject(i5.ToastrService), i0.ɵɵdirectiveInject(i6.NgxSpinnerService), i0.ɵɵdirectiveInject(i7.RazorpayService), i0.ɵɵdirectiveInject(i8.PaymentStatusService)); };
RefillMyCardComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RefillMyCardComponent, selectors: [["app-refill-my-card"]], decls: 22, vars: 1, consts: [[1, "content"], [1, "heading-title"], [1, "toplevel"], [1, "row"], [1, "col-md-12", "text-right", "mb-3"], ["type", "button", 1, "btn", "mr-2", "custom-btn", 3, "click"], [1, "fa", "fa-shopping-cart", "mr-2"], [1, "row", "mt-3"], [1, "col-md-8"], [1, "me-2", "fw-bold"], ["type", "number", 1, "form-control", "w-50", 3, "ngModel", "ngModelChange", "input"], [1, "row", "mt-4"], [1, "col-md-4"], [1, "btn", "btn-dark", "w-75", "mb-3", 3, "click"], ["checkoutModal", ""], ["displayopnecart", ""], [1, "modal-header"], [1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "btn-close", "close", "pull-right", 3, "click"], ["aria-hidden", "true", 1, "visually-hidden"], [1, "modal-body"], [1, "cart-summary", "p-3", "rounded"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-2"], [1, "btn", "btn-danger", "btn-sm", "px-3", 3, "click"], [1, "border", "p-2", "rounded", "bg-light"], [1, "text-danger"], [1, "mt-3"], [1, "text-danger", "mt-3"], [1, "text-dark"], [1, "text-center", "mt-3"], [1, "btn", "btn-danger", "px-4", "py-2", "font-weight-bold", 3, "click"]], template: function RefillMyCardComponent_Template(rf, ctx) { if (rf & 1) {
        const _r12 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "div", 0)(1, "h1", 1);
        i0.ɵɵtext(2, "Refill My Card");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "button", 5);
        i0.ɵɵlistener("click", function RefillMyCardComponent_Template_button_click_6_listener() { i0.ɵɵrestoreView(_r12); const _r2 = i0.ɵɵreference(21); return i0.ɵɵresetView(ctx.diaplyCart(_r2)); });
        i0.ɵɵelement(7, "i", 6);
        i0.ɵɵtext(8, " Display Cart ");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(9, "div", 7)(10, "div", 8)(11, "label", 9);
        i0.ɵɵtext(12, "Refill my Card (INR)");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(13, "input", 10);
        i0.ɵɵlistener("ngModelChange", function RefillMyCardComponent_Template_input_ngModelChange_13_listener($event) { return ctx.refillAmount = $event; })("input", function RefillMyCardComponent_Template_input_input_13_listener() { return ctx.calculateAmount(); });
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(14, "div", 11)(15, "div", 12)(16, "button", 13);
        i0.ɵɵlistener("click", function RefillMyCardComponent_Template_button_click_16_listener() { i0.ɵɵrestoreView(_r12); const _r0 = i0.ɵɵreference(19); return i0.ɵɵresetView(ctx.addToCart(_r0)); });
        i0.ɵɵtext(17, " Add to Cart & Checkout ");
        i0.ɵɵelementEnd()()()()();
        i0.ɵɵtemplate(18, RefillMyCardComponent_ng_template_18_Template, 58, 19, "ng-template", null, 14, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(20, RefillMyCardComponent_ng_template_20_Template, 58, 19, "ng-template", null, 15, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        i0.ɵɵadvance(13);
        i0.ɵɵproperty("ngModel", ctx.refillAmount);
    } }, dependencies: [i3.DefaultValueAccessor, i3.NumberValueAccessor, i3.NgControlStatus, i3.NgModel, i9.DecimalPipe], styles: [".toplevel[_ngcontent-%COMP%] {\r\n    background: #fff;\r\n    padding: 20px;\r\n    margin-bottom: 15px;\r\n    margin-top: 10px;\r\n    border: 1px solid #ddd;\r\n    border-radius: 5px;\r\n}\r\n\r\n.table-font-size[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table-font-size[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n  font-size: 13px; \r\n}\r\n\r\n.vipDiv[_ngcontent-%COMP%] {\r\n    background: #f8f9fa;\r\n    padding: 15px;\r\n    border-radius: 3px;\r\n    min-height: 210px;\r\n}\r\n\r\n.orderStatus[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    vertical-align: middle;\r\n}\r\n\r\n.orderStatus[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n    font-size: 13px;\r\n    padding: 4px 10px;\r\n}\r\n\r\n.orderStatus[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\r\n    color: #c50f20;\r\n    font-size: 90%;\r\n    font-weight: 600;\r\n}\r\n\r\n.bottom-btn[_ngcontent-%COMP%] {\r\n    float: right;\r\n}\r\n\r\n.alert.alert-success[_ngcontent-%COMP%] {\r\n    padding: 5px 10px;\r\n}\r\n\r\n.alert[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\r\n    font-size: 25px;\r\n    vertical-align: middle;\r\n    margin-left: 5px;\r\n}\r\n\r\n.orderStatus[_ngcontent-%COMP%] {\r\n    .card-header {\r\n        border: 0;\r\n    }\r\n    .card-body {\r\n        padding: 0;\r\n        overflow: auto;\r\n    }\r\n}\r\n\r\nh3.head-title[_ngcontent-%COMP%] {\r\n    font-size: 22px;\r\n    margin: 20px 0;\r\n    font-weight: bold;\r\n}\r\n\r\n.icon[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    vertical-align: top;\r\n    color: #17a2b8;\r\n}\r\n\r\n.orderStatus[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    max-width: 25px;\r\n}\r\n\r\n.orderStatus[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n    background: #021422;\r\n    border-radius: 25px;\r\n    color: #fff;\r\n    font-size: 11px !important;\r\n    border: 1px solid #21333c;\r\n    i {\r\n        font-size: 18px;\r\n        vertical-align: middle;\r\n        padding-right: 5px;\r\n    }\r\n}\r\n\r\nbutton.btn.view-del-btn[_ngcontent-%COMP%] {\r\n    background: #63030c !important;\r\n}\r\n\r\n.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n    border: 0;\r\n}\r\n\r\n.toplevel[_ngcontent-%COMP%], .card[_ngcontent-%COMP%] {\r\n    padding: 0 20px 0;\r\n}\r\n\r\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n    padding: 8px 5px;\r\n    text-align: center;\r\n    line-height: 13px;\r\n    font-weight: 600;\r\n    font-size: 13px;\r\n    border-top: 0;\r\n}\r\n\r\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    font-size: 12px;\r\n    line-height: 15px;\r\n    padding: 10px 5px;\r\n}\r\n\r\ntd.icon[_ngcontent-%COMP%] {\r\n    padding: 0 !important;\r\n}\r\n\r\nbutton.btn.custom-btn[_ngcontent-%COMP%] {\r\n    min-width: 100px;\r\n}\r\n\r\n  .nav-tabs .nav-link {\r\n  font-size: 11px; \r\n}\r\n\r\nbutton.btn.custom-btn-white[_ngcontent-%COMP%] {\r\n    min-width: 100px;\r\n    background: #ffffff;\r\n    border: 1px solid #c50f20;\r\n    color: #c50f20;\r\n    font-weight: 600;\r\n\r\n    &:hover {\r\n        background: #c50f20;\r\n        color: #ffffff;\r\n    }\r\n}\r\n\r\n.input-group-prepend[_ngcontent-%COMP%] + .invalid-feedback[_ngcontent-%COMP%] {\r\n    top: 35px;\r\n}\r\n\r\n.card-header[_ngcontent-%COMP%] {\r\n    padding: 10px 15px;\r\n    background: #63030c;\r\n    font-size: 12px;\r\n    color: #fff;\r\n    font-weight: 500;\r\n    span {\r\n        float: left;\r\n    }\r\n    span+span {\r\n        float: right;\r\n    }\r\n}\r\n\r\n.card-header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 16px;\r\n    margin-left: 3px;\r\n}\r\n\r\n.subcard-header[_ngcontent-%COMP%] {\r\n    padding: 8px 12px;\r\n    background: #63030c;\r\n    font-size: 10px;\r\n    color: #fff;\r\n    font-weight: 500;\r\n    span {\r\n        float: left;\r\n    }\r\n    span+span {\r\n        float: right;\r\n    }\r\n}\r\n\r\n.subcard-header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 16px;\r\n    margin-left: 3px;\r\n}\r\n\r\n.icofont-info-circle[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    vertical-align: middle;\r\n    margin-left: 3px;\r\n}\r\n\r\n.orderList[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\r\n    background: #ff000029;\r\n}\r\n\r\n.orderList[_ngcontent-%COMP%] {\r\n    border-collapse: collapse;\r\n    border: 1px solid #ddd;\r\n    margin: 5px 0;\r\n}\r\n\r\n.orderList[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    border: 1px solid #ddd;\r\n}\r\n\r\n.orderList[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n    background: #212529;\r\n    color: #fff;\r\n    vertical-align: middle;\r\n}\r\n\r\n.no-border[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    border: 0 !important;\r\n    text-align: right !important;\r\n    font-weight: 600;\r\n    font-size: 12px !important;\r\n}\r\n\r\nsmall.view-customer[_ngcontent-%COMP%] {\r\n    display: block;\r\n    text-decoration: underline;\r\n    cursor: pointer;\r\n}\r\n\r\nbutton.btn.view-ord-btn[_ngcontent-%COMP%] {\r\n    min-width: 112px;\r\n}\r\n\r\nbutton.btn.view-del-btn[_ngcontent-%COMP%] {\r\n    min-width: 125px;\r\n}\r\n\r\n.card-body.no_data_available[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    color: #bd2130;\r\n    img {\r\n        display: block;\r\n        text-align: center;\r\n        margin: 0 auto 5px;\r\n        max-width: 30px;\r\n    }\r\n}\r\n\r\n\r\nsmall.viewCart[_ngcontent-%COMP%] {\r\n    text-decoration: underline;\r\n    cursor: pointer;\r\n}\r\n\r\n.hr[_ngcontent-%COMP%] {\r\n    border: none;\r\n    border-top: 1.5px solid #d1d1d1;\r\n    margin: 16px 0;\r\n    height: 0;\r\n    width: 100%;\r\n}\r\n\r\nh1.heading-title[_ngcontent-%COMP%] {\r\n    margin: 20px 0 0;\r\n}\r\n\r\n.heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    padding: 10px 5px 10px;\r\n    font-size: 20px;\r\n}\r\n\r\n.row.topLevel[_ngcontent-%COMP%] {\r\n    background: #fff;\r\n    padding: 20px 0;\r\n    margin: 0;\r\n    border-radius: 5px;\r\n}\r\n\r\n.heading.store-domain[_ngcontent-%COMP%] {\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.store-domain[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    margin-right: 20px;\r\n}\r\n\r\n.store-domain[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    background: #ddd;\r\n    padding: 5px 20px;\r\n    font-size: 13px;\r\n    border-radius: 20px;\r\n    display: inline-block;\r\n    font-weight: bold;\r\n    margin-left: 5px;\r\n}\r\n\r\n.store_id[_ngcontent-%COMP%] {\r\n    background: #ddd;\r\n    padding: 5px 20px;\r\n    border-radius: 20px;\r\n    font-size: 13px;\r\n    font-weight: 700;\r\n    float: right;\r\n    margin-top: -40px;\r\n}\r\n\r\n.box[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    overflow: hidden;\r\n    box-shadow: 0 0 4px 0px #eee;\r\n    margin: 20px 0 5px;\r\n    border-radius: 4px;\r\n    padding: 10px;\r\n    background: #fff;\r\n}\r\n\r\n.main-content-area[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\r\n    width: 20%;\r\n    float: left;\r\n    padding: 0;\r\n}\r\n\r\n.fa-star[_ngcontent-%COMP%]:before {\r\n    content: \"\\f005\";\r\n    color: #ff9600;\r\n    margin-right: 5px;\r\n}\r\n\r\n.pro-box[_ngcontent-%COMP%] {\r\n    box-shadow: 0 0 4px 0 #e9ecef;\r\n    margin: 0 5px 10px;\r\n    overflow: hidden;\r\n    padding: 15px;\r\n    border-radius: 3px;\r\n    position: relative;\r\n    border: 1px solid #dee2e6;\r\n}\r\n\r\n.pro-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    height: 100px;\r\n    width: 100px;\r\n    margin: 30px auto 15px;\r\n    display: block;\r\n}\r\n\r\n.storeitem[_ngcontent-%COMP%]   .p-details[_ngcontent-%COMP%] {\r\n    margin-bottom: 42px;\r\n}\r\n\r\np.label-txt[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    padding: 10px;\r\n    font-size: 14px;\r\n    margin: 0;\r\n}\r\n\r\n.store-available-product[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\r\n    width: 25% !important;\r\n}\r\n\r\n.selected-productLine[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .store-available-product[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\r\n    font-size: 16px;\r\n    padding: 0 10px 5px;\r\n}\r\n\r\n.right-field-head[_ngcontent-%COMP%] {\r\n    float: right;\r\n    margin-top: 10px;\r\n}\r\n\r\n.right-field-head[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    padding: 0 10px;\r\n}\r\n\r\nspan.video[_ngcontent-%COMP%], span.doc[_ngcontent-%COMP%] {\r\n    padding: 8px 15px;\r\n    background: #dee2e6;\r\n    font-size: 12px;\r\n    border-radius: 20px;\r\n}\r\n\r\n.right-field-head[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n    font-size: 11px;\r\n    border-radius: 20px;\r\n}\r\n\r\n.bottom-btn[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n    line-height: 11px;\r\n}\r\n\r\n.box.prduct-gallery[_ngcontent-%COMP%] {\r\n    position: relative;\r\n}\r\n\r\n.sample-img[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    z-index: 1;\r\n    left: 15%;\r\n    top: 28%;\r\n    transform: rotate(-45deg);\r\n}\r\n\r\np.p-name[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    margin: 0;\r\n    font-size: 13px;\r\n    font-weight: 500;\r\n    vertical-align: middle;\r\n}\r\n\r\np.item-id[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    position: absolute;\r\n    top: 0;\r\n    background: #212529;\r\n    left: 0;\r\n    font-weight: 600;\r\n    color: #fff;\r\n    border-radius: 0 0 5px;\r\n    font-size: 11px;\r\n    padding: 3px 6px;\r\n}\r\n\r\nspan.price[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n    padding: 7px 10px 0;\r\n    float: left;\r\n    font-weight: 600;\r\n    line-height: 20px;\r\n}\r\n\r\n.item-id[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\r\n    font-weight: 600;\r\n}\r\n\r\n.instock[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n    text-align: center;\r\n    margin: 0 0 3px;\r\n    position: absolute;\r\n    top: 5%;\r\n    box-shadow: 0 0 30px 0 rgb(82 63 105 / 10%);\r\n    left: 70%;\r\n    background: rgb(224 152 152 / 24%);\r\n    width: 50px;\r\n    border: 1px solid rgb(0 0 0 / 10%);\r\n    height: 50px;\r\n    border-radius: 50%;\r\n    img {\r\n        width: 30px !important;\r\n        height: 30px !important;\r\n        margin: 9px auto;\r\n    }\r\n}\r\n\r\n.pro-box.storeitem.item-box[_ngcontent-%COMP%] {\r\n    border: 1px solid #dee2e6;\r\n    height: 300px;\r\n    padding-left: 20px;\r\n    padding-right: 20px;\r\n}\r\n\r\nh1.heading-title[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    text-transform: uppercase;\r\n    font-weight: 700;\r\n    color: #ff7900;\r\n    position: relative;\r\n    margin-bottom: 10px;\r\n    width: 100%;\r\n    span {\r\n        font-size: 10px;\r\n        text-transform: inherit;\r\n        background: #495057;\r\n        color: #fff;\r\n        padding: 10px 15px;\r\n        border-radius: 25px;\r\n    }\r\n}\r\n\r\nh1.heading-title[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    max-width: 65px;\r\n    margin-right: 5px;\r\n}\r\n\r\nh1.heading-title[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    font-weight: 400;\r\n    font-size: 13px;\r\n    position: absolute;\r\n    left: 80px;\r\n    bottom: 4px;\r\n    color: grey;\r\n}\r\n\r\n.offerDiv[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 5px;\r\n    right: 5px;\r\n    font-size: 10px;\r\n    background: #dc3545;\r\n    line-height: 10px;\r\n    font-weight: 700;\r\n    width: 35px;\r\n    height: 35px;\r\n    border-radius: 50%;\r\n    padding: 9px;\r\n    text-align: center;\r\n    color: #fff;\r\n}\r\n\r\n.offerDiv[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\r\n    display: block;\r\n}\r\n\r\nspan.price.strike-price[_ngcontent-%COMP%] {\r\n    color: #ccc;\r\n    text-decoration: line-through;\r\n}\r\n\r\n.row.text-level[_ngcontent-%COMP%] {\r\n    margin: 0 -10px 10px;\r\n}\r\n\r\n.store-add-remove[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    padding: 10px;\r\n    float: left;\r\n    width: 100%;\r\n}\r\n\r\n.row.product-slider-box[_ngcontent-%COMP%] {\r\n    border-bottom: 5px solid #ddd;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.carousel-inner[_ngcontent-%COMP%] {\r\n    height: 278px;\r\n}\r\n\r\n.carousel-item[_ngcontent-%COMP%] {\r\n    margin-right: 0;\r\n    border: 1px solid #f8f9fa;\r\n    background: #fff;\r\n}\r\n\r\n.product-slider-box[_ngcontent-%COMP%]   .domain-product[_ngcontent-%COMP%] {\r\n    max-width: 23%;\r\n}\r\n\r\n.product-slider-box[_ngcontent-%COMP%]   .sub-domain-product[_ngcontent-%COMP%] {\r\n    max-width: 77%;\r\n}\r\n\r\n.store-add-remove[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n    font-size: 11px;\r\n    text-align: center;\r\n    float: left;\r\n    transition: all .5s;\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n    min-width: 65px;\r\n}\r\n\r\n.store-add-remove[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] + .btn[_ngcontent-%COMP%] {\r\n    float: right;\r\n}\r\n\r\n.item-subitem-list[_ngcontent-%COMP%]   .pro-box[_ngcontent-%COMP%] {\r\n    width: 95%;\r\n    overflow: auto;\r\n    height: 280px;\r\n}\r\n\r\n.item-subitem-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    float: left;\r\n}\r\n\r\n.item-box[_ngcontent-%COMP%] {\r\n    max-width: 225px;\r\n    width: 100%;\r\n    float: left;\r\n}\r\n\r\n.sub-item-box[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    float: left;\r\n    max-width: 225px;\r\n}\r\n\r\n.sub-item-box[_ngcontent-%COMP%]   .add_to_cart[_ngcontent-%COMP%]   button.btn[_ngcontent-%COMP%] {\r\n    background: #000064;\r\n    height: 35px;\r\n    font-size: 13px;\r\n    line-height: 16px;\r\n    color: #fff;\r\n    border-radius: 25px;\r\n    margin: 10px 0 0;\r\n    width: 100%;\r\n    text-align: center;\r\n}\r\n\r\n.add_to_cart[_ngcontent-%COMP%] {\r\n    .remove-btn {\r\n        border-radius: 50%;\r\n        background: #05054ead !important;\r\n        color: #fff;\r\n        height: 35px;\r\n        padding: 0;\r\n    }\r\n    .btn+.btn {\r\n        width: 100%;\r\n        border: 0;\r\n        border-radius: 30px;\r\n        font-size: 15px;\r\n        line-height: normal;\r\n        font-weight: 600;\r\n    }\r\n}\r\n\r\n.middle-arrow[_ngcontent-%COMP%] {\r\n    float: left;\r\n    width: 30px;\r\n    height: 50px;\r\n    font-size: 40px;\r\n    margin-top: 10%;\r\n    color: #dee2e6;\r\n    text-align: center;\r\n}\r\n\r\n.price-details[_ngcontent-%COMP%] {\r\n    float: left;\r\n    width: 100%;\r\n    margin-bottom: 10px;\r\n    font-size: 15px;\r\n    line-height: normal;\r\n    font-weight: 600;\r\n    .unit-price {\r\n        float: left;\r\n        width: 42%;\r\n    }\r\n}\r\n\r\n.unit-price[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    display: block;\r\n    font-size: 12px;\r\n    font-weight: 400;\r\n}\r\n\r\n.whole-sale-price[_ngcontent-%COMP%] {\r\n    float: right;\r\n    width: 58%;\r\n    text-align: right;\r\n    span {\r\n        font-size: 12px;\r\n        display: block;\r\n        font-weight: 400;\r\n    }\r\n}\r\n\r\n.add_to_cart[_ngcontent-%COMP%] {\r\n    clear: both;\r\n}\r\n\r\n.subItem-field[_ngcontent-%COMP%] {\r\n    width: calc(100% - 280px);\r\n    float: left;\r\n}\r\n\r\n.item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n\r\n.pro-box.active[_ngcontent-%COMP%] {\r\n    border: 1px solid #63030c;\r\n}\r\n\r\n.p-details[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\r\n    font-size: 13px;\r\n    padding: 0 5px;\r\n    min-height: 25px;\r\n    height: 25px;\r\n    text-align: center;\r\n}\r\n\r\n.p-details[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n    margin-bottom: 0;\r\n    font-weight: 400;\r\n    line-height: normal;\r\n    padding-top: 2px;\r\n    padding-bottom: 2px;\r\n}\r\n\r\n.p-details[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\r\n    margin-bottom: 4px;\r\n}\r\n\r\n.sub-item-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    margin-top: 5px !important;\r\n}\r\n\r\n.p-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n    line-height: 14px;\r\n}\r\n\r\n.add-stock[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    display: inline-block !important;\r\n    width: 60px !important;\r\n    margin-left: 5px;\r\n    vertical-align: middle;\r\n}\r\n\r\n.min-alert-count[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    width: 35px;\r\n    margin-left: 5px;\r\n    display: inline-block;\r\n    margin-right: 4px;\r\n}\r\n\r\n.d-flex[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] + span[_ngcontent-%COMP%] {\r\n    margin-left: auto;\r\n    font-weight: 600;\r\n    width: 60px;\r\n    i {\r\n        font-size: 16px;\r\n        color: #bd2130;\r\n        display: inline-block;\r\n        position: relative;\r\n        top: 2px;\r\n        cursor: pointer;\r\n    }\r\n}\r\n\r\n.sub-item-box[_ngcontent-%COMP%]   .pro-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    height: 55px;\r\n    width: 55px;\r\n    margin: 18px auto 8px;\r\n}\r\n\r\n.links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    display: block;\r\n    color: #17a2b8 !important;\r\n    text-decoration: underline !important;\r\n    font-size: 12px;\r\n    cursor: pointer;\r\n}\r\n\r\n.modal-header[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    margin: 5px 0;\r\n    color: #bd2130;\r\n}\r\n\r\n.field[_ngcontent-%COMP%] {\r\n    margin-bottom: 10px;\r\n    select {\r\n        border: 1px solid #ddd;\r\n        border-radius: 3px;\r\n        height: 26px;\r\n        font-size: 12px;\r\n        margin-left: 10px;\r\n        margin-top: -4px;\r\n        width: 60px;\r\n    }\r\n}\r\n\r\n.toplevel[_ngcontent-%COMP%] {\r\n    background: #fff;\r\n    padding: 20px;\r\n    margin-bottom: 15px;\r\n    margin-top: 10px;\r\n    border: 1px solid #ddd;\r\n    border-radius: 5px;\r\n}\r\n\r\n.orderStatus[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    max-width: 80px;\r\n}\r\n\r\n.vipDiv[_ngcontent-%COMP%] {\r\n    background: #f8f9fa;\r\n    padding: 15px;\r\n    border-radius: 3px;\r\n    min-height: 210px;\r\n}\r\n\r\n.orderStatus[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    vertical-align: middle;\r\n}\r\n\r\n.orderStatus[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n    font-size: 13px;\r\n}\r\n.orderStatus[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\r\n    color: #c50f20;\r\n    font-size: 90%;\r\n    font-weight: 600;\r\n}\r\n\r\n.bottom-btn[_ngcontent-%COMP%] {\r\n    float: right;\r\n}\r\n\r\n.alert.alert-success[_ngcontent-%COMP%] {\r\n    padding: 5px 10px;\r\n}\r\n\r\n.alert[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\r\n    font-size: 25px;\r\n    vertical-align: middle;\r\n    margin-left: 5px;\r\n}\r\n\r\n.orderStatus[_ngcontent-%COMP%] {\r\n.card-header {\r\n    border: 0;\r\n}\r\n.card-body {\r\n    padding: 0;\r\n}\r\n}\r\n\r\n.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    padding: 8px;\r\n    text-align: center;\r\n    line-height: normal;\r\n\r\n}\r\n\r\nh3.head-title[_ngcontent-%COMP%] {\r\n    font-size: 22px;\r\n    margin: 20px 0;\r\n    font-weight: bold;\r\n}\r\n\r\nlabel.clear[_ngcontent-%COMP%] {\r\n    display: block;\r\n}\r\n\r\n.save-pdf.btn[_ngcontent-%COMP%] {\r\n    font-size: 13px;\r\n    float: right;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.row.bank-details[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n}\r\n\r\n.row.bank-details[_ngcontent-%COMP%]    + .card-body[_ngcontent-%COMP%] {\r\n    padding-left: 15px;\r\n    padding-right: 15px;\r\n}\r\n\r\n.img-preview-box[_ngcontent-%COMP%] {\r\n  width: 140px;\r\n  height: 140px;\r\n  border: 1px solid #ccc;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  background: #fafafa;\r\n}\r\n\r\n.img-preview-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  max-width: 100%;\r\n  max-height: 100%;\r\n  object-fit: cover;\r\n}\r\n\r\n.summary-box[_ngcontent-%COMP%] {\r\n  min-height: 350px;\r\n  background: #fff;\r\n  font-size: 15px;\r\n}\r\n\r\ninput[type=number][_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  font-weight: bold;\r\n}\r\n\r\n.checkout-box[_ngcontent-%COMP%] {\r\n  border: 1px solid #aaa;\r\n  padding: 25px;\r\n  min-height: 250px;\r\n  font-size: 16px;\r\n}\r\n\r\n.checkout-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  margin-bottom: 8px;\r\n  color: #555;\r\n}\r\n\r\n.total[_ngcontent-%COMP%] {\r\n  margin-top: 20px;\r\n  font-size: 18px;\r\n  font-weight: bold;\r\n}\r\n\r\n.pay-btn[_ngcontent-%COMP%] {\r\n  margin-top: 15px;\r\n  padding: 6px 20px;\r\n  font-size: 15px;\r\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RefillMyCardComponent, [{
        type: Component,
        args: [{ selector: 'app-refill-my-card', template: "<div class=\"content\">\n\n    <h1 class=\"heading-title\">Refill My Card</h1>\n\n    <div class=\"toplevel\">\n\n        <div class=\"row\">\n            <div class=\"col-md-12 text-right mb-3\">\n\n                <button (click)=\"diaplyCart(displayopnecart)\" type=\"button\" class=\"btn mr-2 custom-btn\">\n                    <i class=\"fa fa-shopping-cart mr-2\"></i>\n                    Display Cart\n                </button>\n\n            </div>\n        </div>\n\n        <div class=\"row mt-3\">\n            <div class=\"col-md-8\">\n                <label class=\" me-2 fw-bold\">Refill my Card (INR)</label>\n                <input type=\"number\" class=\"form-control w-50\" [(ngModel)]=\"refillAmount\" (input)=\"calculateAmount()\">\n            </div>\n        </div>\n\n        <div class=\"row mt-4\">\n            <div class=\"col-md-4\">\n                <button class=\"btn btn-dark w-75 mb-3\" (click)=\"addToCart(checkoutModal)\">\n                    Add to Cart & Checkout\n                </button>\n            </div>\n        </div>\n    </div>\n</div>\n\n<ng-template #checkoutModal>\n\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title pull-left\">Cart Summary</h4>\n        <button type=\"button\" class=\"btn-close close pull-right\" aria-label=\"Close\" (click)=\"closeCheckout()\">\n            <span aria-hidden=\"true\" class=\"visually-hidden\">&times;</span>\n        </button>\n    </div>\n\n    <div class=\"modal-body\">\n\n        <div class=\"cart-summary p-3 rounded\">\n\n            <div class=\"d-flex justify-content-between align-items-center mb-2\">\n                <div>\n                    <p><strong>Cart Id :</strong> {{ openCart?.MDR_CONCT_SERVICE_CARTID || '\u2014' }}</p>\n                    <p><strong>Service Id :</strong> {{ openCart?.MDR_CONCT_CART_FOR_SERVICEID || '\u2014' }}</p>\n                    <p><strong>Service Name :</strong> {{ openCart?.MDR_CONCT_CART_SERVICE_NAME || '\u2014' }}</p>\n                </div>\n                <button (click)=\"deleteCart()\" class=\"btn btn-danger btn-sm px-3\">Delete CART</button>\n            </div>\n\n            <div class=\"border p-2 rounded bg-light\">\n                <p><strong>Per Unit Cost :</strong>\n                    <span class=\"text-danger\">{{ openCart?.MDR_CONCT_SPP_UNIT_SERVICE_COST | number:'1.2-2' }}</span>\n                </p>\n                <p><strong>Quantity :</strong> {{ openCart?.MDR_CONCT_SERVICE_QUANTITY }}</p>\n                <p><strong>Currency :</strong> {{ openCart?.MDR_CONCT_SERVICE_CURRENCY }}</p>\n                <p><strong>Discount % :</strong> {{ openCart?.MDR_CONCT_SERVICE_DISCNT_PERCENTG }}%</p>\n            </div>\n\n            <div class=\"mt-3\">\n                <p><strong>GST Charged :</strong>\n                    {{ openCart?.MDR_CONCT_CART_GST_CHARGED_AMT | number:'1.2-2' }}\n                </p>\n            </div>\n\n            <h5 class=\"text-danger mt-3\">\n                <strong>Total to Pay Amount :</strong>\n                <span class=\"text-dark\">\n                    {{ openCart?.MDR_CONCT_CART_TOTAL_TO_PAY_AMT | number:'1.2-2' }}\n                    {{ openCart?.MDR_CONCT_SERVICE_CURRENCY }}\n                </span>\n            </h5>\n\n            <div class=\"text-center mt-3\">\n                <button (click)=\"payAmount()\" class=\"btn btn-danger px-4 py-2 font-weight-bold\">PAY</button>\n            </div>\n\n        </div>\n\n    </div>\n</ng-template>\n\n\n<ng-template #displayopnecart>\n\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title pull-left\">Cart Summary</h4>\n        <button type=\"button\" class=\"btn-close close pull-right\" aria-label=\"Close\" (click)=\"closeCheckout()\">\n            <span aria-hidden=\"true\" class=\"visually-hidden\">&times;</span>\n        </button>\n    </div>\n\n    <div class=\"modal-body\">\n\n        <div class=\"cart-summary p-3 rounded\">\n\n            <div class=\"d-flex justify-content-between align-items-center mb-2\">\n                <div>\n                    <p><strong>Cart Id :</strong> {{ openCart?.MDR_CONCT_SERVICE_CARTID || '\u2014' }}</p>\n                    <p><strong>Service Id :</strong> {{ openCart?.MDR_CONCT_CART_FOR_SERVICEID || '\u2014' }}</p>\n                    <p><strong>Service Name :</strong> {{ openCart?.MDR_CONCT_CART_SERVICE_NAME || '\u2014' }}</p>\n                </div>\n                <button (click)=\"deleteCart()\" class=\"btn btn-danger btn-sm px-3\">Delete CART</button>\n            </div>\n\n            <div class=\"border p-2 rounded bg-light\">\n                <p><strong>Per Unit Cost :</strong>\n                    <span class=\"text-danger\">{{ openCart?.MDR_CONCT_SPP_UNIT_SERVICE_COST | number:'1.2-2' }}</span>\n                </p>\n                <p><strong>Quantity :</strong> {{ openCart?.MDR_CONCT_SERVICE_QUANTITY }}</p>\n                <p><strong>Currency :</strong> {{ openCart?.MDR_CONCT_SERVICE_CURRENCY }}</p>\n                <p><strong>Discount % :</strong> {{ openCart?.MDR_CONCT_SERVICE_DISCNT_PERCENTG }}%</p>\n            </div>\n\n            <div class=\"mt-3\">\n                <p><strong>GST Charged :</strong>\n                    {{ openCart?.MDR_CONCT_CART_GST_CHARGED_AMT | number:'1.2-2' }}\n                </p>\n            </div>\n\n            <h5 class=\"text-danger mt-3\">\n                <strong>Total to Pay Amount :</strong>\n                <span class=\"text-dark\">\n                    {{ openCart?.MDR_CONCT_CART_TOTAL_TO_PAY_AMT | number:'1.2-2' }}\n                    {{ openCart?.MDR_CONCT_SERVICE_CURRENCY }}\n                </span>\n            </h5>\n\n            <div class=\"text-center mt-3\">\n                <button (click)=\"payAmount()\" class=\"btn btn-danger px-4 py-2 font-weight-bold\">PAY</button>\n            </div>\n\n        </div>\n\n    </div>\n</ng-template>", styles: [".toplevel {\r\n    background: #fff;\r\n    padding: 20px;\r\n    margin-bottom: 15px;\r\n    margin-top: 10px;\r\n    border: 1px solid #ddd;\r\n    border-radius: 5px;\r\n}\r\n\r\n.table-font-size th,\r\n.table-font-size td {\r\n  font-size: 13px; /* Change to your desired size */\r\n}\r\n\r\n.vipDiv {\r\n    background: #f8f9fa;\r\n    padding: 15px;\r\n    border-radius: 3px;\r\n    min-height: 210px;\r\n}\r\n\r\n.orderStatus td {\r\n    vertical-align: middle;\r\n}\r\n\r\n.orderStatus td .btn {\r\n    font-size: 13px;\r\n    padding: 4px 10px;\r\n}\r\n\r\n.orderStatus small {\r\n    color: #c50f20;\r\n    font-size: 90%;\r\n    font-weight: 600;\r\n}\r\n\r\n.bottom-btn {\r\n    float: right;\r\n}\r\n\r\n.alert.alert-success {\r\n    padding: 5px 10px;\r\n}\r\n\r\n.alert .fa {\r\n    font-size: 25px;\r\n    vertical-align: middle;\r\n    margin-left: 5px;\r\n}\r\n\r\n.orderStatus {\r\n    .card-header {\r\n        border: 0;\r\n    }\r\n    .card-body {\r\n        padding: 0;\r\n        overflow: auto;\r\n    }\r\n}\r\n\r\nh3.head-title {\r\n    font-size: 22px;\r\n    margin: 20px 0;\r\n    font-weight: bold;\r\n}\r\n\r\n.icon .fa {\r\n    font-size: 20px;\r\n    vertical-align: top;\r\n    color: #17a2b8;\r\n}\r\n\r\n.orderStatus .icon img {\r\n    max-width: 25px;\r\n}\r\n\r\n.orderStatus .btn {\r\n    background: #021422;\r\n    border-radius: 25px;\r\n    color: #fff;\r\n    font-size: 11px !important;\r\n    border: 1px solid #21333c;\r\n    i {\r\n        font-size: 18px;\r\n        vertical-align: middle;\r\n        padding-right: 5px;\r\n    }\r\n}\r\n\r\nbutton.btn.view-del-btn {\r\n    background: #63030c !important;\r\n}\r\n\r\n.table thead th {\r\n    border: 0;\r\n}\r\n\r\n.toplevel,\r\n.card {\r\n    padding: 0 20px 0;\r\n}\r\n\r\n.table th {\r\n    padding: 8px 5px;\r\n    text-align: center;\r\n    line-height: 13px;\r\n    font-weight: 600;\r\n    font-size: 13px;\r\n    border-top: 0;\r\n}\r\n\r\n.table td {\r\n    text-align: center;\r\n    font-size: 12px;\r\n    line-height: 15px;\r\n    padding: 10px 5px;\r\n}\r\n\r\ntd.icon {\r\n    padding: 0 !important;\r\n}\r\n\r\nbutton.btn.custom-btn {\r\n    min-width: 100px;\r\n}\r\n\r\n::ng-deep .nav-tabs .nav-link {\r\n  font-size: 11px; /* Adjust as needed */\r\n}\r\n\r\nbutton.btn.custom-btn-white {\r\n    min-width: 100px;\r\n    background: #ffffff;\r\n    border: 1px solid #c50f20;\r\n    color: #c50f20;\r\n    font-weight: 600;\r\n\r\n    &:hover {\r\n        background: #c50f20;\r\n        color: #ffffff;\r\n    }\r\n}\r\n\r\n.input-group-prepend+.invalid-feedback {\r\n    top: 35px;\r\n}\r\n\r\n.card-header {\r\n    padding: 10px 15px;\r\n    background: #63030c;\r\n    font-size: 12px;\r\n    color: #fff;\r\n    font-weight: 500;\r\n    span {\r\n        float: left;\r\n    }\r\n    span+span {\r\n        float: right;\r\n    }\r\n}\r\n\r\n.card-header img {\r\n    width: 16px;\r\n    margin-left: 3px;\r\n}\r\n\r\n.subcard-header {\r\n    padding: 8px 12px;\r\n    background: #63030c;\r\n    font-size: 10px;\r\n    color: #fff;\r\n    font-weight: 500;\r\n    span {\r\n        float: left;\r\n    }\r\n    span+span {\r\n        float: right;\r\n    }\r\n}\r\n\r\n.subcard-header img {\r\n    width: 16px;\r\n    margin-left: 3px;\r\n}\r\n\r\n.icofont-info-circle {\r\n    font-size: 20px;\r\n    vertical-align: middle;\r\n    margin-left: 3px;\r\n}\r\n\r\n.orderList thead tr {\r\n    background: #ff000029;\r\n}\r\n\r\n.orderList {\r\n    border-collapse: collapse;\r\n    border: 1px solid #ddd;\r\n    margin: 5px 0;\r\n}\r\n\r\n.orderList td {\r\n    border: 1px solid #ddd;\r\n}\r\n\r\n.orderList tr th {\r\n    background: #212529;\r\n    color: #fff;\r\n    vertical-align: middle;\r\n}\r\n\r\n.no-border td {\r\n    border: 0 !important;\r\n    text-align: right !important;\r\n    font-weight: 600;\r\n    font-size: 12px !important;\r\n}\r\n\r\nsmall.view-customer {\r\n    display: block;\r\n    text-decoration: underline;\r\n    cursor: pointer;\r\n}\r\n\r\nbutton.btn.view-ord-btn {\r\n    min-width: 112px;\r\n}\r\n\r\nbutton.btn.view-del-btn {\r\n    min-width: 125px;\r\n}\r\n\r\n.card-body.no_data_available {\r\n    text-align: center;\r\n    color: #bd2130;\r\n    img {\r\n        display: block;\r\n        text-align: center;\r\n        margin: 0 auto 5px;\r\n        max-width: 30px;\r\n    }\r\n}\r\n\r\n\r\nsmall.viewCart {\r\n    text-decoration: underline;\r\n    cursor: pointer;\r\n}\r\n\r\n.hr {\r\n    border: none;\r\n    border-top: 1.5px solid #d1d1d1;\r\n    margin: 16px 0;\r\n    height: 0;\r\n    width: 100%;\r\n}\r\n\r\nh1.heading-title {\r\n    margin: 20px 0 0;\r\n}\r\n\r\n.heading h2 {\r\n    padding: 10px 5px 10px;\r\n    font-size: 20px;\r\n}\r\n\r\n.row.topLevel {\r\n    background: #fff;\r\n    padding: 20px 0;\r\n    margin: 0;\r\n    border-radius: 5px;\r\n}\r\n\r\n.heading.store-domain {\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.store-domain div {\r\n    display: inline-block;\r\n    margin-right: 20px;\r\n}\r\n\r\n.store-domain span {\r\n    background: #ddd;\r\n    padding: 5px 20px;\r\n    font-size: 13px;\r\n    border-radius: 20px;\r\n    display: inline-block;\r\n    font-weight: bold;\r\n    margin-left: 5px;\r\n}\r\n\r\n.store_id {\r\n    background: #ddd;\r\n    padding: 5px 20px;\r\n    border-radius: 20px;\r\n    font-size: 13px;\r\n    font-weight: 700;\r\n    float: right;\r\n    margin-top: -40px;\r\n}\r\n\r\n.box {\r\n    width: 100%;\r\n    overflow: hidden;\r\n    box-shadow: 0 0 4px 0px #eee;\r\n    margin: 20px 0 5px;\r\n    border-radius: 4px;\r\n    padding: 10px;\r\n    background: #fff;\r\n}\r\n\r\n.main-content-area .box .col {\r\n    width: 20%;\r\n    float: left;\r\n    padding: 0;\r\n}\r\n\r\n.fa-star:before {\r\n    content: \"\\f005\";\r\n    color: #ff9600;\r\n    margin-right: 5px;\r\n}\r\n\r\n.pro-box {\r\n    box-shadow: 0 0 4px 0 #e9ecef;\r\n    margin: 0 5px 10px;\r\n    overflow: hidden;\r\n    padding: 15px;\r\n    border-radius: 3px;\r\n    position: relative;\r\n    border: 1px solid #dee2e6;\r\n}\r\n\r\n.pro-box img {\r\n    height: 100px;\r\n    width: 100px;\r\n    margin: 30px auto 15px;\r\n    display: block;\r\n}\r\n\r\n.storeitem .p-details {\r\n    margin-bottom: 42px;\r\n}\r\n\r\np.label-txt {\r\n    text-align: center;\r\n    padding: 10px;\r\n    font-size: 14px;\r\n    margin: 0;\r\n}\r\n\r\n.store-available-product .col {\r\n    width: 25% !important;\r\n}\r\n\r\n.selected-productLine h5,\r\n.store-available-product h5 {\r\n    font-size: 16px;\r\n    padding: 0 10px 5px;\r\n}\r\n\r\n.right-field-head {\r\n    float: right;\r\n    margin-top: 10px;\r\n}\r\n\r\n.right-field-head li {\r\n    display: inline-block;\r\n    padding: 0 10px;\r\n}\r\n\r\nspan.video,\r\nspan.doc {\r\n    padding: 8px 15px;\r\n    background: #dee2e6;\r\n    font-size: 12px;\r\n    border-radius: 20px;\r\n}\r\n\r\n.right-field-head .btn {\r\n    font-size: 11px;\r\n    border-radius: 20px;\r\n}\r\n\r\n.bottom-btn .btn {\r\n    line-height: 11px;\r\n}\r\n\r\n.box.prduct-gallery {\r\n    position: relative;\r\n}\r\n\r\n.sample-img {\r\n    position: absolute;\r\n    z-index: 1;\r\n    left: 15%;\r\n    top: 28%;\r\n    transform: rotate(-45deg);\r\n}\r\n\r\np.p-name {\r\n    text-align: center;\r\n    margin: 0;\r\n    font-size: 13px;\r\n    font-weight: 500;\r\n    vertical-align: middle;\r\n}\r\n\r\np.item-id {\r\n    text-align: center;\r\n    position: absolute;\r\n    top: 0;\r\n    background: #212529;\r\n    left: 0;\r\n    font-weight: 600;\r\n    color: #fff;\r\n    border-radius: 0 0 5px;\r\n    font-size: 11px;\r\n    padding: 3px 6px;\r\n}\r\n\r\nspan.price {\r\n    font-size: 12px;\r\n    padding: 7px 10px 0;\r\n    float: left;\r\n    font-weight: 600;\r\n    line-height: 20px;\r\n}\r\n\r\n.item-id b {\r\n    font-weight: 600;\r\n}\r\n\r\n.instock {\r\n    font-size: 12px;\r\n    text-align: center;\r\n    margin: 0 0 3px;\r\n    position: absolute;\r\n    top: 5%;\r\n    box-shadow: 0 0 30px 0 rgb(82 63 105 / 10%);\r\n    left: 70%;\r\n    background: rgb(224 152 152 / 24%);\r\n    width: 50px;\r\n    border: 1px solid rgb(0 0 0 / 10%);\r\n    height: 50px;\r\n    border-radius: 50%;\r\n    img {\r\n        width: 30px !important;\r\n        height: 30px !important;\r\n        margin: 9px auto;\r\n    }\r\n}\r\n\r\n.pro-box.storeitem.item-box {\r\n    border: 1px solid #dee2e6;\r\n    height: 300px;\r\n    padding-left: 20px;\r\n    padding-right: 20px;\r\n}\r\n\r\nh1.heading-title {\r\n    font-size: 20px;\r\n    text-transform: uppercase;\r\n    font-weight: 700;\r\n    color: #ff7900;\r\n    position: relative;\r\n    margin-bottom: 10px;\r\n    width: 100%;\r\n    span {\r\n        font-size: 10px;\r\n        text-transform: inherit;\r\n        background: #495057;\r\n        color: #fff;\r\n        padding: 10px 15px;\r\n        border-radius: 25px;\r\n    }\r\n}\r\n\r\nh1.heading-title img {\r\n    max-width: 65px;\r\n    margin-right: 5px;\r\n}\r\n\r\nh1.heading-title small {\r\n    display: inline-block;\r\n    font-weight: 400;\r\n    font-size: 13px;\r\n    position: absolute;\r\n    left: 80px;\r\n    bottom: 4px;\r\n    color: grey;\r\n}\r\n\r\n.offerDiv {\r\n    position: absolute;\r\n    top: 5px;\r\n    right: 5px;\r\n    font-size: 10px;\r\n    background: #dc3545;\r\n    line-height: 10px;\r\n    font-weight: 700;\r\n    width: 35px;\r\n    height: 35px;\r\n    border-radius: 50%;\r\n    padding: 9px;\r\n    text-align: center;\r\n    color: #fff;\r\n}\r\n\r\n.offerDiv small {\r\n    display: block;\r\n}\r\n\r\nspan.price.strike-price {\r\n    color: #ccc;\r\n    text-decoration: line-through;\r\n}\r\n\r\n.row.text-level {\r\n    margin: 0 -10px 10px;\r\n}\r\n\r\n.store-add-remove {\r\n    text-align: center;\r\n    padding: 10px;\r\n    float: left;\r\n    width: 100%;\r\n}\r\n\r\n.row.product-slider-box {\r\n    border-bottom: 5px solid #ddd;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.carousel-inner {\r\n    height: 278px;\r\n}\r\n\r\n.carousel-item {\r\n    margin-right: 0;\r\n    border: 1px solid #f8f9fa;\r\n    background: #fff;\r\n}\r\n\r\n.product-slider-box .domain-product {\r\n    max-width: 23%;\r\n}\r\n\r\n.product-slider-box .sub-domain-product {\r\n    max-width: 77%;\r\n}\r\n\r\n.store-add-remove .btn {\r\n    font-size: 11px;\r\n    text-align: center;\r\n    float: left;\r\n    transition: all .5s;\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n    min-width: 65px;\r\n}\r\n\r\n.store-add-remove .btn+.btn {\r\n    float: right;\r\n}\r\n\r\n.item-subitem-list .pro-box {\r\n    width: 95%;\r\n    overflow: auto;\r\n    height: 280px;\r\n}\r\n\r\n.item-subitem-list li {\r\n    width: 100%;\r\n    float: left;\r\n}\r\n\r\n.item-box {\r\n    max-width: 225px;\r\n    width: 100%;\r\n    float: left;\r\n}\r\n\r\n.sub-item-box {\r\n    width: 100%;\r\n    float: left;\r\n    max-width: 225px;\r\n}\r\n\r\n.sub-item-box .add_to_cart button.btn {\r\n    background: #000064;\r\n    height: 35px;\r\n    font-size: 13px;\r\n    line-height: 16px;\r\n    color: #fff;\r\n    border-radius: 25px;\r\n    margin: 10px 0 0;\r\n    width: 100%;\r\n    text-align: center;\r\n}\r\n\r\n.add_to_cart {\r\n    .remove-btn {\r\n        border-radius: 50%;\r\n        background: #05054ead !important;\r\n        color: #fff;\r\n        height: 35px;\r\n        padding: 0;\r\n    }\r\n    .btn+.btn {\r\n        width: 100%;\r\n        border: 0;\r\n        border-radius: 30px;\r\n        font-size: 15px;\r\n        line-height: normal;\r\n        font-weight: 600;\r\n    }\r\n}\r\n\r\n.middle-arrow {\r\n    float: left;\r\n    width: 30px;\r\n    height: 50px;\r\n    font-size: 40px;\r\n    margin-top: 10%;\r\n    color: #dee2e6;\r\n    text-align: center;\r\n}\r\n\r\n.price-details {\r\n    float: left;\r\n    width: 100%;\r\n    margin-bottom: 10px;\r\n    font-size: 15px;\r\n    line-height: normal;\r\n    font-weight: 600;\r\n    .unit-price {\r\n        float: left;\r\n        width: 42%;\r\n    }\r\n}\r\n\r\n.unit-price span {\r\n    display: block;\r\n    font-size: 12px;\r\n    font-weight: 400;\r\n}\r\n\r\n.whole-sale-price {\r\n    float: right;\r\n    width: 58%;\r\n    text-align: right;\r\n    span {\r\n        font-size: 12px;\r\n        display: block;\r\n        font-weight: 400;\r\n    }\r\n}\r\n\r\n.add_to_cart {\r\n    clear: both;\r\n}\r\n\r\n.subItem-field {\r\n    width: calc(100% - 280px);\r\n    float: left;\r\n}\r\n\r\n.item img {\r\n    width: 100%;\r\n}\r\n\r\n.pro-box.active {\r\n    border: 1px solid #63030c;\r\n}\r\n\r\n.p-details .form-control {\r\n    font-size: 13px;\r\n    padding: 0 5px;\r\n    min-height: 25px;\r\n    height: 25px;\r\n    text-align: center;\r\n}\r\n\r\n.p-details .form-group label {\r\n    margin-bottom: 0;\r\n    font-weight: 400;\r\n    line-height: normal;\r\n    padding-top: 2px;\r\n    padding-bottom: 2px;\r\n}\r\n\r\n.p-details .form-group {\r\n    margin-bottom: 4px;\r\n}\r\n\r\n.sub-item-box img {\r\n    margin-top: 5px !important;\r\n}\r\n\r\n.p-details p {\r\n    font-size: 12px;\r\n    line-height: 14px;\r\n}\r\n\r\n.add-stock input {\r\n    display: inline-block !important;\r\n    width: 60px !important;\r\n    margin-left: 5px;\r\n    vertical-align: middle;\r\n}\r\n\r\n.min-alert-count input {\r\n    width: 35px;\r\n    margin-left: 5px;\r\n    display: inline-block;\r\n    margin-right: 4px;\r\n}\r\n\r\n.d-flex span+span {\r\n    margin-left: auto;\r\n    font-weight: 600;\r\n    width: 60px;\r\n    i {\r\n        font-size: 16px;\r\n        color: #bd2130;\r\n        display: inline-block;\r\n        position: relative;\r\n        top: 2px;\r\n        cursor: pointer;\r\n    }\r\n}\r\n\r\n.sub-item-box .pro-box img {\r\n    height: 55px;\r\n    width: 55px;\r\n    margin: 18px auto 8px;\r\n}\r\n\r\n.links a {\r\n    display: block;\r\n    color: #17a2b8 !important;\r\n    text-decoration: underline !important;\r\n    font-size: 12px;\r\n    cursor: pointer;\r\n}\r\n\r\n.modal-header i {\r\n    margin: 5px 0;\r\n    color: #bd2130;\r\n}\r\n\r\n.field {\r\n    margin-bottom: 10px;\r\n    select {\r\n        border: 1px solid #ddd;\r\n        border-radius: 3px;\r\n        height: 26px;\r\n        font-size: 12px;\r\n        margin-left: 10px;\r\n        margin-top: -4px;\r\n        width: 60px;\r\n    }\r\n}\r\n\r\n.toplevel {\r\n    background: #fff;\r\n    padding: 20px;\r\n    margin-bottom: 15px;\r\n    margin-top: 10px;\r\n    border: 1px solid #ddd;\r\n    border-radius: 5px;\r\n}\r\n\r\n.orderStatus td img {\r\n    max-width: 80px;\r\n}\r\n\r\n.vipDiv {\r\n    background: #f8f9fa;\r\n    padding: 15px;\r\n    border-radius: 3px;\r\n    min-height: 210px;\r\n}\r\n\r\n.orderStatus td {\r\n    vertical-align: middle;\r\n}\r\n\r\n.orderStatus td .btn {\r\n    font-size: 13px;\r\n}\r\n.orderStatus small {\r\n    color: #c50f20;\r\n    font-size: 90%;\r\n    font-weight: 600;\r\n}\r\n\r\n.bottom-btn {\r\n    float: right;\r\n}\r\n\r\n.alert.alert-success {\r\n    padding: 5px 10px;\r\n}\r\n\r\n.alert .fa {\r\n    font-size: 25px;\r\n    vertical-align: middle;\r\n    margin-left: 5px;\r\n}\r\n\r\n.orderStatus {\r\n.card-header {\r\n    border: 0;\r\n}\r\n.card-body {\r\n    padding: 0;\r\n}\r\n}\r\n\r\n.table thead th,\r\n.table tbody td {\r\n    padding: 8px;\r\n    text-align: center;\r\n    line-height: normal;\r\n\r\n}\r\n\r\nh3.head-title {\r\n    font-size: 22px;\r\n    margin: 20px 0;\r\n    font-weight: bold;\r\n}\r\n\r\nlabel.clear {\r\n    display: block;\r\n}\r\n\r\n.save-pdf.btn {\r\n    font-size: 13px;\r\n    float: right;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.row.bank-details {\r\n    margin: 0;\r\n}\r\n\r\n.row.bank-details + .card-body {\r\n    padding-left: 15px;\r\n    padding-right: 15px;\r\n}\r\n\r\n.img-preview-box {\r\n  width: 140px;\r\n  height: 140px;\r\n  border: 1px solid #ccc;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  background: #fafafa;\r\n}\r\n\r\n.img-preview-box img {\r\n  max-width: 100%;\r\n  max-height: 100%;\r\n  object-fit: cover;\r\n}\r\n\r\n.summary-box {\r\n  min-height: 350px;\r\n  background: #fff;\r\n  font-size: 15px;\r\n}\r\n\r\ninput[type=number] {\r\n  text-align: center;\r\n  font-weight: bold;\r\n}\r\n\r\n.checkout-box {\r\n  border: 1px solid #aaa;\r\n  padding: 25px;\r\n  min-height: 250px;\r\n  font-size: 16px;\r\n}\r\n\r\n.checkout-box p {\r\n  margin-bottom: 8px;\r\n  color: #555;\r\n}\r\n\r\n.total {\r\n  margin-top: 20px;\r\n  font-size: 18px;\r\n  font-weight: bold;\r\n}\r\n\r\n.pay-btn {\r\n  margin-top: 15px;\r\n  padding: 6px 20px;\r\n  font-size: 15px;\r\n}"] }]
    }], function () { return [{ type: i1.ApiService }, { type: i2.BsModalService }, { type: i3.FormBuilder }, { type: i4.Router }, { type: i5.ToastrService }, { type: i6.NgxSpinnerService }, { type: i7.RazorpayService }, { type: i8.PaymentStatusService }]; }, null); })();
//# sourceMappingURL=refill-my-card.component.js.map