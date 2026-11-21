import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "src/app/services/api.service";
import * as i3 from "ngx-bootstrap/modal";
import * as i4 from "ngx-toastr";
import * as i5 from "src/app/services/common.service";
import * as i6 from "@angular/common";
function SelfTakeAwayDispatchPOSComponent_div_11_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "Order number is required");
    i0.ɵɵelementEnd();
} }
function SelfTakeAwayDispatchPOSComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 24);
    i0.ɵɵtemplate(1, SelfTakeAwayDispatchPOSComponent_div_11_div_1_Template, 2, 0, "div", 25);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.f.RETAIL_ORDER_NUMBR.errors.required);
} }
function SelfTakeAwayDispatchPOSComponent_div_16_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "Happy code is required");
    i0.ɵɵelementEnd();
} }
function SelfTakeAwayDispatchPOSComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 24);
    i0.ɵɵtemplate(1, SelfTakeAwayDispatchPOSComponent_div_16_div_1_Template, 2, 0, "div", 25);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.f.RETAIL_HAPPY_CODE.errors.required);
} }
function SelfTakeAwayDispatchPOSComponent_p_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 26);
    i0.ɵɵtext(1, "Happy Code matched ");
    i0.ɵɵelement(2, "i", 27);
    i0.ɵɵelementEnd();
} }
function SelfTakeAwayDispatchPOSComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3)(1, "div", 28)(2, "div", 2)(3, "div", 29)(4, "p");
    i0.ɵɵtext(5, "Customer ID: ");
    i0.ɵɵelementStart(6, "span");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "p");
    i0.ɵɵtext(9, "Customer Name: ");
    i0.ɵɵelementStart(10, "span");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(12, "div", 30);
    i0.ɵɵelement(13, "img", 31);
    i0.ɵɵpipe(14, "slice");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(ctx_r3.customerID);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r3.customerName);
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate2("src", "", ctx_r3.imgURL, "", i0.ɵɵpipeBind3(14, 4, ctx_r3.profileImage, 1, -4), "jpeg", i0.ɵɵsanitizeUrl);
} }
function SelfTakeAwayDispatchPOSComponent_div_44_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6)(1, "label");
    i0.ɵɵtext(2, "Transaction Invoice Number");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "input", 32);
    i0.ɵɵelementEnd();
} }
function SelfTakeAwayDispatchPOSComponent_div_45_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6)(1, "label");
    i0.ɵɵtext(2, "Mobile Number");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "input", 32);
    i0.ɵɵelementEnd();
} }
function SelfTakeAwayDispatchPOSComponent_div_57_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 33)(1, "div", 34);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 35)(4, "div", 2)(5, "div", 15)(6, "table", 36)(7, "thead")(8, "tr")(9, "th");
    i0.ɵɵtext(10, "Order No.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "th");
    i0.ɵɵtext(12, "Order Inventory Rack");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "th");
    i0.ɵɵtext(14, "Packets In Orders");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "th");
    i0.ɵɵtext(16, "Date & Time");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(17, "tbody")(18, "tr")(19, "td");
    i0.ɵɵtext(20);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "td");
    i0.ɵɵtext(22);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "td");
    i0.ɵɵtext(24);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "td");
    i0.ɵɵtext(26, "xxxxxxxx");
    i0.ɵɵelementEnd()()()()()()();
    i0.ɵɵelementStart(27, "div", 37)(28, "button", 38);
    i0.ɵɵlistener("click", function SelfTakeAwayDispatchPOSComponent_div_57_Template_button_click_28_listener() { i0.ɵɵrestoreView(_r12); const ctx_r11 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r11.StorePOSOrderDeliveryDispatch()); });
    i0.ɵɵtext(29, "Dispatch Order for Delivery");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Order Selected & Dispatched to Customer #", ctx_r6.customerID, "");
    i0.ɵɵadvance(18);
    i0.ɵɵtextInterpolate(ctx_r6.orderNumber);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Rack #", ctx_r6.rackID, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r6.packetOrder);
} }
function SelfTakeAwayDispatchPOSComponent_ng_template_59_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 39)(1, "h4", 40);
    i0.ɵɵtext(2, "Modal");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 41);
    i0.ɵɵlistener("click", function SelfTakeAwayDispatchPOSComponent_ng_template_59_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r14); const ctx_r13 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r13.modalRef == null ? null : ctx_r13.modalRef.hide()); });
    i0.ɵɵelementStart(4, "span", 42);
    i0.ɵɵtext(5, "\u00D7");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(6, "div", 43);
    i0.ɵɵelement(7, "img", 44);
    i0.ɵɵpipe(8, "slice");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext();
    i0.ɵɵadvance(7);
    i0.ɵɵpropertyInterpolate2("src", "", ctx_r8.imgURL, "", i0.ɵɵpipeBind3(8, 2, ctx_r8.qrcode, 1, -4), "jpeg", i0.ɵɵsanitizeUrl);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
export class SelfTakeAwayDispatchPOSComponent {
    constructor(formBuilder, apiService, modalService, toastr, commonservice) {
        this.formBuilder = formBuilder;
        this.apiService = apiService;
        this.modalService = modalService;
        this.toastr = toastr;
        this.commonservice = commonservice;
        this.imgURL = this.apiService.imgURL;
        this.submitted = false;
        this.happycodematch = false;
        this.pcInvoiceFlag = true;
        this.accountid = this.apiService.requiredLoginData.accountid;
        this.subaccountid = this.apiService.requiredLoginData.subaccountid;
        this.storeid = this.apiService.requiredLoginData.storeid;
        this.storeName = this.apiService.requiredLoginData.storeName;
        this.domainid = this.apiService.requiredLoginData.domainid;
    }
    ngOnInit() {
        this.form = this.formBuilder.group({
            RETAIL_ORDER_NUMBR: ['', Validators.required],
            RETAIL_HAPPY_CODE: ['', Validators.required],
        });
    }
    get f() {
        return this.form.controls;
    }
    onSubmit() {
        this.submitted = true;
        if (this.form.invalid) {
            return;
        }
        this.SelfTakeAwayDeliveryPOS();
    }
    SelfTakeAwayDeliveryPOS() {
        let selfDeliveryPOSLost = {
            ACCT_ID: this.accountid,
            SUBACCT_ID: this.subaccountid,
            SUBACCT_OFFICE_ID: +this.storeid,
            RETAIL_ORDER_NUMBR: this.form.value.RETAIL_ORDER_NUMBR,
            RETAIL_HAPPY_CODE: this.form.value.RETAIL_HAPPY_CODE
        };
        console.log(selfDeliveryPOSLost);
        this.apiService.postCall(this.apiService.baseURL + '/SelfTakeAwayDeliveryPOS', selfDeliveryPOSLost)
            .subscribe(data => {
            console.log(data);
            if (data.HAPPY_CODE_MATCHED_FLAG == 1) {
                this.detailsFound = true;
                this.happycodematch = true;
                this.customerID = data.RETAIL_D2C_CUSTOMER_ID;
                this.customerName = data.RETAIL_D2C_CUSTOMER_FIRST_NAME + " " + data.RETAIL_D2C_CUSTOMER_LAST_NAME;
                this.profileImage = data.RETAIL_D2C_PROFILE_IMAGE;
                this.rackID = data.RETAIL_D2C_STORAGE_RACK_ID;
                this.packetOrder = data.RETAIL_PACKETS_IN_ORDERS;
                this.orderNumber = this.form.value.RETAIL_ORDER_NUMBR;
                this.toastr.success(data.Message, '', {
                    timeOut: 5000,
                });
            }
            else {
                this.detailsFound = false;
                this.toastr.error(data.Message, '', {
                    timeOut: 5000,
                });
            }
        }, (error) => {
            this.happycodematch = false;
            this.detailsFound = false;
            this.toastr.error(error, '', {
                timeOut: 5000,
            });
        });
    }
    StorePOSOrderDeliveryDispatch() {
        let deliverDispatchList = {
            POS_HOME_DELIVERY_TYPE_FLG: false,
            POS_SELF_TAKEAWAY_DELIVERY_TYPE_FLG: true,
            POS_WALK_IN_DELIVERY_TYPE_FLG: false,
            RETAIL_ORDER_NUMBR: this.form.value.RETAIL_ORDER_NUMBR
        };
        console.log(deliverDispatchList);
        this.apiService.postCall(this.apiService.baseURL + '/StorePOSOrderDeliveryDispatch', deliverDispatchList)
            .subscribe(data => {
            console.log(data);
            this.toastr.success(data.Message, '', {
                timeOut: 5000,
            });
        }, (error) => {
            this.toastr.error(error, '', {
                timeOut: 5000,
            });
        });
    }
    pcChange(pcValue) {
        console.log(pcValue);
        if (pcValue == "Invoice") {
            this.pcInvoiceFlag = true;
        }
        else {
            this.pcInvoiceFlag = false;
        }
    }
    openQRModal(qrtemplate) {
        this.modalRef = this.modalService.show(qrtemplate);
        this.getQRCode();
    }
    getQRCode() {
        this.apiService.getCall(this.apiService.baseURL + '/GetQRCode')
            .subscribe(data => {
            console.log(data);
            this.qrcode = data[0].ALL_DAY_DIGITAL_BANK_ACCT_QR_CODE_IMAGE;
        }, (error) => {
            this.toastr.error(error, '', {
                timeOut: 5000,
            });
        });
    }
}
SelfTakeAwayDispatchPOSComponent.ɵfac = function SelfTakeAwayDispatchPOSComponent_Factory(t) { return new (t || SelfTakeAwayDispatchPOSComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder), i0.ɵɵdirectiveInject(i2.ApiService), i0.ɵɵdirectiveInject(i3.BsModalService), i0.ɵɵdirectiveInject(i4.ToastrService), i0.ɵɵdirectiveInject(i5.CommonService)); };
SelfTakeAwayDispatchPOSComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SelfTakeAwayDispatchPOSComponent, selectors: [["app-self-take-away-dispatch-pos"]], decls: 61, vars: 15, consts: [[1, "content"], [1, "heading-title"], [1, "row"], [1, "col-md-6"], [1, "card"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["formControlName", "RETAIL_ORDER_NUMBR", "type", "text", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["formControlName", "RETAIL_HAPPY_CODE", "type", "text", 1, "form-control", 3, "ngClass"], ["class", "happycodematch", 4, "ngIf"], [1, "form-group", "pull-right"], ["type", "submit", 1, "btn", "custom-btn", 3, "disabled"], ["class", "col-md-6", 4, "ngIf"], [1, "btn", "custom-btn", "pull-right", 3, "click"], [1, "col-md-12"], [1, "form-control", 3, "change"], ["value", "Invoice"], ["value", "Mobile"], ["class", "form-group", 4, "ngIf"], [1, "form-control"], [1, "btn", "custom-btn", "pull-right"], ["class", "card exiting-office-table orderStatus", 4, "ngIf"], ["qrtemplate", ""], [1, "invalid-feedback"], [4, "ngIf"], [1, "happycodematch"], [1, "icofont-check-circled"], [1, "card", "customer-details"], [1, "col-md-8"], [1, "col-md-4"], [1, "p_image", 3, "src"], ["type", "text", 1, "form-control"], [1, "card", "exiting-office-table", "orderStatus"], [1, "card-header"], [1, "card-body", "pa-0"], [1, "table"], [1, "bottom-btn"], ["type", "button", 1, "btn", "custom-btn", "btn-primary", 3, "click"], [1, "modal-header"], [1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "btn-close", "close", "pull-right", 3, "click"], ["aria-hidden", "true", 1, "visually-hidden"], [1, "modal-body"], [1, "w-100", 3, "src"]], template: function SelfTakeAwayDispatchPOSComponent_Template(rf, ctx) { if (rf & 1) {
        const _r15 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "div", 0)(1, "h1", 1);
        i0.ɵɵtext(2, "Self Take-Away Dispatch POS");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "form", 5);
        i0.ɵɵlistener("ngSubmit", function SelfTakeAwayDispatchPOSComponent_Template_form_ngSubmit_6_listener() { return ctx.onSubmit(); });
        i0.ɵɵelementStart(7, "div", 6)(8, "label");
        i0.ɵɵtext(9, "Enter Order Number");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(10, "input", 7);
        i0.ɵɵtemplate(11, SelfTakeAwayDispatchPOSComponent_div_11_Template, 2, 1, "div", 8);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "div", 6)(13, "label");
        i0.ɵɵtext(14, "Happy Code for Take-Away");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(15, "input", 9);
        i0.ɵɵtemplate(16, SelfTakeAwayDispatchPOSComponent_div_16_Template, 2, 1, "div", 8);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(17, SelfTakeAwayDispatchPOSComponent_p_17_Template, 3, 0, "p", 10);
        i0.ɵɵelementStart(18, "div", 11)(19, "button", 12);
        i0.ɵɵtext(20, "Check");
        i0.ɵɵelementEnd()()()()();
        i0.ɵɵtemplate(21, SelfTakeAwayDispatchPOSComponent_div_21_Template, 15, 8, "div", 13);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(22, "div", 2)(23, "div", 3)(24, "div", 4)(25, "div", 2)(26, "div", 3)(27, "h4");
        i0.ɵɵtext(28, "Payment Type: COD");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(29, "h6");
        i0.ɵɵtext(30, "Amount: RS. 2375.00");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(31, "div", 3)(32, "button", 14);
        i0.ɵɵlistener("click", function SelfTakeAwayDispatchPOSComponent_Template_button_click_32_listener() { i0.ɵɵrestoreView(_r15); const _r7 = i0.ɵɵreference(60); return i0.ɵɵresetView(ctx.openQRModal(_r7)); });
        i0.ɵɵtext(33, "Scan All-Day QR Code");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(34, "div", 2)(35, "div", 15)(36, "div", 6)(37, "label");
        i0.ɵɵtext(38, "Payment Confirmation By");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(39, "select", 16);
        i0.ɵɵlistener("change", function SelfTakeAwayDispatchPOSComponent_Template_select_change_39_listener($event) { return ctx.pcChange($event.target.value); });
        i0.ɵɵelementStart(40, "option", 17);
        i0.ɵɵtext(41, "Invoice No.");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(42, "option", 18);
        i0.ɵɵtext(43, "Mobile No.");
        i0.ɵɵelementEnd()()();
        i0.ɵɵtemplate(44, SelfTakeAwayDispatchPOSComponent_div_44_Template, 4, 0, "div", 19);
        i0.ɵɵtemplate(45, SelfTakeAwayDispatchPOSComponent_div_45_Template, 4, 0, "div", 19);
        i0.ɵɵelementStart(46, "div", 6)(47, "label");
        i0.ɵɵtext(48, "Confirmed full amount payment");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(49, "select", 20)(50, "option");
        i0.ɵɵtext(51, "Yes");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(52, "option");
        i0.ɵɵtext(53, "No");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(54, "div", 6)(55, "button", 21);
        i0.ɵɵtext(56, "Payment Done");
        i0.ɵɵelementEnd()()()()()()();
        i0.ɵɵtemplate(57, SelfTakeAwayDispatchPOSComponent_div_57_Template, 30, 4, "div", 22);
        i0.ɵɵelement(58, "br");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(59, SelfTakeAwayDispatchPOSComponent_ng_template_59_Template, 9, 6, "ng-template", null, 23, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        i0.ɵɵadvance(6);
        i0.ɵɵproperty("formGroup", ctx.form);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(11, _c0, ctx.submitted && ctx.f.RETAIL_ORDER_NUMBR.errors));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.submitted && ctx.f.RETAIL_ORDER_NUMBR.errors);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(13, _c0, ctx.submitted && ctx.f.RETAIL_HAPPY_CODE.errors));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.submitted && ctx.f.RETAIL_HAPPY_CODE.errors);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.happycodematch);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("disabled", ctx.happycodematch);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.detailsFound);
        i0.ɵɵadvance(23);
        i0.ɵɵproperty("ngIf", ctx.pcInvoiceFlag);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.pcInvoiceFlag);
        i0.ɵɵadvance(12);
        i0.ɵɵproperty("ngIf", ctx.detailsFound);
    } }, dependencies: [i6.NgClass, i6.NgIf, i1.ɵNgNoValidate, i1.NgSelectOption, i1.ɵNgSelectMultipleOption, i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.FormGroupDirective, i1.FormControlName, i6.SlicePipe], styles: [".toplevel[_ngcontent-%COMP%] {\r\n    background: #fff;\r\n    padding: 20px;\r\n    margin-bottom: 15px;\r\n    margin-top: 10px;\r\n    border: 1px solid #ddd;\r\n    border-radius: 5px;\r\n}\r\n\r\n.orderStatus[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    max-width: 80px;\r\n}\r\n\r\n.vipDiv[_ngcontent-%COMP%] {\r\n    background: #f8f9fa;\r\n    padding: 15px;\r\n    border-radius: 3px;\r\n    min-height: 210px;\r\n}\r\n\r\n.orderStatus[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    vertical-align: middle;\r\n}\r\n\r\n.orderStatus[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n    font-size: 13px;\r\n}\r\n.orderStatus[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\r\n    color: #c50f20;\r\n    font-size: 90%;\r\n    font-weight: 600;\r\n}\r\n\r\n.bottom-btn[_ngcontent-%COMP%] {\r\n    float: right;\r\n}\r\n\r\n.alert.alert-success[_ngcontent-%COMP%] {\r\n    padding: 5px 10px;\r\n}\r\n\r\n.alert[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\r\n    font-size: 25px;\r\n    vertical-align: middle;\r\n    margin-left: 5px;\r\n}\r\n\r\n.orderStatus[_ngcontent-%COMP%] {\r\n.card-header {\r\n    border: 0;\r\n}\r\n.card-body {\r\n    padding: 0;\r\n}\r\n}\r\n\r\n.card.customer-details[_ngcontent-%COMP%] {\r\n    min-height: 175px;\r\n    margin: 10px 0;\r\n    p {\r\n        font-size: 15px;\r\n        line-height: 20px;\r\n        margin-bottom: 10px;\r\n    }\r\n\r\n     span {\r\n        font-weight: 600;\r\n    }\r\n\r\n}\r\n\r\nbutton.btn.custom-btn[_ngcontent-%COMP%] {\r\n    min-width: 100px;\r\n    font-weight: 600;\r\n    min-height: 40px;\r\n}\r\n\r\n.invalid-feedback[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    font-size: 11px;\r\n}\r\n\r\n.p_image[_ngcontent-%COMP%] {\r\n        width: 120px;\r\n        height: 120px;\r\n        border-radius: 5px;\r\n        box-shadow: 0 0 5px #ddd;\r\n}\r\n\r\np.happycodematch[_ngcontent-%COMP%] {\r\n    float: left;\r\n    color: #17a2b8;\r\n    font-size: 14px;\r\n\r\n    i.icofont-check-circled {\r\n        font-size: 20px;\r\n        vertical-align: text-top;\r\n        line-height: 18px;\r\n    }\r\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SelfTakeAwayDispatchPOSComponent, [{
        type: Component,
        args: [{ selector: 'app-self-take-away-dispatch-pos', template: "<div class=\"content\">\n    <h1 class=\"heading-title\">Self Take-Away Dispatch POS</h1>\n\n    <div class=\"row\">\n        <div class=\"col-md-6\">\n            <div class=\"card\">\n                <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n                    <div class=\"form-group\">\n                        <label>Enter Order Number</label>\n                        <input formControlName=\"RETAIL_ORDER_NUMBR\" type=\"text\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.RETAIL_ORDER_NUMBR.errors }\">\n                        <div *ngIf=\"submitted && f.RETAIL_ORDER_NUMBR.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.RETAIL_ORDER_NUMBR.errors.required\">Order number is required</div>\n                        </div>\n                    </div>\n\n                    <div class=\"form-group\">\n                        <label>Happy Code for Take-Away</label>\n                        <input formControlName=\"RETAIL_HAPPY_CODE\" type=\"text\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.RETAIL_HAPPY_CODE.errors }\">\n                        <div *ngIf=\"submitted && f.RETAIL_HAPPY_CODE.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.RETAIL_HAPPY_CODE.errors.required\">Happy code is required</div>\n                        </div>\n                    </div>\n\n                    <p *ngIf=\"happycodematch\" class=\"happycodematch\">Happy Code matched <i class=\"icofont-check-circled\"></i></p>\n                    <div class=\"form-group pull-right\">\n\n                        <button [disabled]=\"happycodematch\" type=\"submit\" class=\"btn custom-btn\">Check</button>\n\n                    </div>\n                </form>\n            </div>\n        </div>\n        <div class=\"col-md-6\" *ngIf=\"detailsFound\">\n            <div class=\"card customer-details\">\n                <div class=\"row\">\n                    <div class=\"col-md-8\">\n                        <p>Customer ID: <span>{{customerID}}</span></p>\n                        <p>Customer Name: <span>{{customerName}}</span></p>\n                    </div>\n                    <div class=\"col-md-4\">\n                        <img class=\"p_image\" src=\"{{imgURL}}{{profileImage | slice:1:-4}}jpeg\" />\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-md-6\">\n            <div class=\"card\">\n                <div class=\"row\">\n                    <div class=\"col-md-6\">\n                        <h4>Payment Type: COD</h4>\n                        <h6>Amount: RS. 2375.00</h6>\n                    </div>\n                    <div class=\"col-md-6\">\n                        <button (click)=\"openQRModal(qrtemplate)\" class=\"btn custom-btn pull-right\">Scan All-Day QR Code</button>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-md-12\">\n                        <div class=\"form-group\">\n                            <label>Payment Confirmation By</label>\n                            <select class=\"form-control\" (change)=\"pcChange($event.target.value)\">\n              <option value=\"Invoice\">Invoice No.</option>\n              <option value=\"Mobile\">Mobile No.</option>\n            </select>\n                        </div>\n                        <div class=\"form-group\" *ngIf=\"pcInvoiceFlag\">\n                            <label>Transaction Invoice Number</label>\n                            <input type=\"text\" class=\"form-control\" />\n                        </div>\n                        <div class=\"form-group\" *ngIf=\"!pcInvoiceFlag\">\n                            <label>Mobile Number</label>\n                            <input type=\"text\" class=\"form-control\" />\n                        </div>\n                        <div class=\"form-group\">\n                            <label>Confirmed full amount payment</label>\n                            <select class=\"form-control\">\n              <option>Yes</option>\n              <option>No</option>\n            </select>\n                        </div>\n                        <div class=\"form-group\">\n                            <button class=\"btn custom-btn pull-right\">Payment Done</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"card exiting-office-table orderStatus\" *ngIf=\"detailsFound\">\n        <div class=\"card-header\">Order Selected & Dispatched to Customer #{{customerID}}</div>\n        <div class=\"card-body pa-0\">\n            <div class=\"row\">\n                <div class=\"col-md-12\">\n                    <table class=\"table\">\n                        <thead>\n                            <tr>\n                                <th>Order No.</th>\n                                <th>Order Inventory Rack</th>\n                                <th>Packets In Orders</th>\n                                <th>Date & Time</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr>\n                                <td>{{orderNumber}}</td>\n                                <td>Rack #{{rackID}}</td>\n                                <td>{{packetOrder}}</td>\n                                <td>xxxxxxxx</td>\n                            </tr>\n\n                        </tbody>\n                    </table>\n                </div>\n\n            </div>\n        </div>\n\n        <div class=\"bottom-btn\">\n            <button type=\"button\" (click)=\"StorePOSOrderDeliveryDispatch()\" class=\"btn custom-btn btn-primary\">Dispatch Order for Delivery</button>\n        </div>\n\n    </div>\n\n\n    <br>\n</div>\n\n<ng-template #qrtemplate>\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title pull-left\">Modal</h4>\n        <button type=\"button\" class=\"btn-close close pull-right\" aria-label=\"Close\" (click)=\"modalRef?.hide()\">\n      <span aria-hidden=\"true\" class=\"visually-hidden\">&times;</span>\n    </button>\n    </div>\n    <div class=\"modal-body\">\n        <img class=\"w-100\" src=\"{{imgURL}}{{qrcode | slice:1:-4}}jpeg\" />\n    </div>\n</ng-template>", styles: [".toplevel {\r\n    background: #fff;\r\n    padding: 20px;\r\n    margin-bottom: 15px;\r\n    margin-top: 10px;\r\n    border: 1px solid #ddd;\r\n    border-radius: 5px;\r\n}\r\n\r\n.orderStatus td img {\r\n    max-width: 80px;\r\n}\r\n\r\n.vipDiv {\r\n    background: #f8f9fa;\r\n    padding: 15px;\r\n    border-radius: 3px;\r\n    min-height: 210px;\r\n}\r\n\r\n.orderStatus td {\r\n    vertical-align: middle;\r\n}\r\n\r\n.orderStatus td .btn {\r\n    font-size: 13px;\r\n}\r\n.orderStatus small {\r\n    color: #c50f20;\r\n    font-size: 90%;\r\n    font-weight: 600;\r\n}\r\n\r\n.bottom-btn {\r\n    float: right;\r\n}\r\n\r\n.alert.alert-success {\r\n    padding: 5px 10px;\r\n}\r\n\r\n.alert .fa {\r\n    font-size: 25px;\r\n    vertical-align: middle;\r\n    margin-left: 5px;\r\n}\r\n\r\n.orderStatus {\r\n.card-header {\r\n    border: 0;\r\n}\r\n.card-body {\r\n    padding: 0;\r\n}\r\n}\r\n\r\n.card.customer-details {\r\n    min-height: 175px;\r\n    margin: 10px 0;\r\n    p {\r\n        font-size: 15px;\r\n        line-height: 20px;\r\n        margin-bottom: 10px;\r\n    }\r\n\r\n     span {\r\n        font-weight: 600;\r\n    }\r\n\r\n}\r\n\r\nbutton.btn.custom-btn {\r\n    min-width: 100px;\r\n    font-weight: 600;\r\n    min-height: 40px;\r\n}\r\n\r\n.invalid-feedback {\r\n    margin: 0;\r\n    font-size: 11px;\r\n}\r\n\r\n.p_image {\r\n        width: 120px;\r\n        height: 120px;\r\n        border-radius: 5px;\r\n        box-shadow: 0 0 5px #ddd;\r\n}\r\n\r\np.happycodematch {\r\n    float: left;\r\n    color: #17a2b8;\r\n    font-size: 14px;\r\n\r\n    i.icofont-check-circled {\r\n        font-size: 20px;\r\n        vertical-align: text-top;\r\n        line-height: 18px;\r\n    }\r\n}\r\n"] }]
    }], function () { return [{ type: i1.FormBuilder }, { type: i2.ApiService }, { type: i3.BsModalService }, { type: i4.ToastrService }, { type: i5.CommonService }]; }, null); })();
//# sourceMappingURL=self-take-away-dispatch-pos.component.js.map