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
import * as i8 from "ngx-bootstrap/tabs";
function MyCardTransactionsComponent_div_19_tr_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td");
    i0.ɵɵtext(4);
    i0.ɵɵpipe(5, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "td");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "td");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "td");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "td");
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "td");
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i_r8 + 1);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(5, 7, item_r7.ADC_MEMBER_DEBIT_TRANS_DATETIME, "dd-MMM-yyyy hh:mm a"), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(item_r7.ADC_MEMBER_DEBIT_TRANS_VENDID);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", item_r7.ADC_MEMBER_DEBIT_TRANS_LOCTN || "N/A", " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("\u20B9", item_r7.ADC_MEMBER_DEBIT_COST_AMT, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", item_r7.ADC_MEMBER_DEBIT_PRODCT_ID, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("\u20B9", item_r7.ADC_MEMBER_CARD_BAL_AFTER_TRANS, "");
} }
function MyCardTransactionsComponent_div_19_ng_template_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 27);
    i0.ɵɵtext(2, "No transactions found");
    i0.ɵɵelementEnd()();
} }
function MyCardTransactionsComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 17)(1, "div", 18)(2, "div", 19)(3, "span");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(5, "div", 20)(6, "div", 21)(7, "div", 22)(8, "table", 23)(9, "thead")(10, "tr")(11, "th", 24);
    i0.ɵɵtext(12, "Serial#");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "th", 24);
    i0.ɵɵtext(14, "Date/Time");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "th", 24);
    i0.ɵɵtext(16, "Vending Machine Id");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "th", 24);
    i0.ɵɵtext(18, "Location");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "th", 24);
    i0.ɵɵtext(20, "Amt Spent");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "th", 24);
    i0.ɵɵtext(22, "Drink Id");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "th", 24);
    i0.ɵɵtext(24, "Card Balance After Spent");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(25, "tbody");
    i0.ɵɵtemplate(26, MyCardTransactionsComponent_div_19_tr_26_Template, 16, 10, "tr", 25);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(27, MyCardTransactionsComponent_div_19_ng_template_27_Template, 3, 0, "ng-template", null, 26, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("Card Balance: ", ctx_r0.cardholderSpends.CurrentBalance, "");
    i0.ɵɵadvance(22);
    i0.ɵɵproperty("ngForOf", ctx_r0.cardholderSpends == null ? null : ctx_r0.cardholderSpends.DebitDetail);
} }
function MyCardTransactionsComponent_div_30_tbody_21_tr_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td");
    i0.ɵɵtext(4);
    i0.ɵɵpipe(5, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "td");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "td");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "td");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r13 = ctx.$implicit;
    const i_r14 = ctx.index;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i_r14 + 1);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(5, 6, item_r13.ADC_MEMBER_CREDIT_TRANS_DATETIME, "dd-MMM-yyyy hh:mm a"), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("\u20B9", item_r13.ADC_MEMBER_CREDIT_AMT, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2(" INV-", item_r13.ADC_MEMBER_CREDIT_CARTID, " (", item_r13.ADC_MEMBER_CREDIT_FRM_PORTL_FLG ? "Online" : "Offline", ") ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("\u20B9", item_r13.ADC_MEMBER_CARD_BAL_AFTER_TRANS, "");
} }
function MyCardTransactionsComponent_div_30_tbody_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tbody");
    i0.ɵɵtemplate(1, MyCardTransactionsComponent_div_30_tbody_21_tr_1_Template, 12, 9, "tr", 25);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r9.cardholderRefill == null ? null : ctx_r9.cardholderRefill.CreditDetail);
} }
function MyCardTransactionsComponent_div_30_ng_template_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 30);
    i0.ɵɵtext(2, "No refill transactions found");
    i0.ɵɵelementEnd()();
} }
function MyCardTransactionsComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 17)(1, "div", 18)(2, "div", 19)(3, "span");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(5, "div", 20)(6, "div", 21)(7, "div", 22)(8, "table", 23)(9, "thead")(10, "tr")(11, "th", 24);
    i0.ɵɵtext(12, "Serial#");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "th", 24);
    i0.ɵɵtext(14, "Date/Time");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "th", 24);
    i0.ɵɵtext(16, "Refill Amt");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "th", 24);
    i0.ɵɵtext(18, "Invoice Detail");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "th", 24);
    i0.ɵɵtext(20, "Balance After Refill");
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(21, MyCardTransactionsComponent_div_30_tbody_21_Template, 2, 1, "tbody", 28);
    i0.ɵɵtemplate(22, MyCardTransactionsComponent_div_30_ng_template_22_Template, 3, 0, "ng-template", null, 29, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const _r10 = i0.ɵɵreference(23);
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("Card Balance: ", ctx_r1.cardholderRefill.CurrentBalance, "");
    i0.ɵɵadvance(17);
    i0.ɵɵproperty("ngIf", ctx_r1.cardholderRefill == null ? null : ctx_r1.cardholderRefill.CreditDetail.length)("ngIfElse", _r10);
} }
function MyCardTransactionsComponent_ng_template_31_div_18_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, " New password is required ");
    i0.ɵɵelementEnd();
} }
function MyCardTransactionsComponent_ng_template_31_div_18_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, " Minimum 6 characters required ");
    i0.ɵɵelementEnd();
} }
function MyCardTransactionsComponent_ng_template_31_div_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 44);
    i0.ɵɵtemplate(1, MyCardTransactionsComponent_ng_template_31_div_18_div_1_Template, 2, 0, "div", 45);
    i0.ɵɵtemplate(2, MyCardTransactionsComponent_ng_template_31_div_18_div_2_Template, 2, 0, "div", 45);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r15 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r15.f.newPassword.errors == null ? null : ctx_r15.f.newPassword.errors.required);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r15.f.newPassword.errors == null ? null : ctx_r15.f.newPassword.errors.minlength);
} }
function MyCardTransactionsComponent_ng_template_31_div_24_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, " Confirm password is required ");
    i0.ɵɵelementEnd();
} }
function MyCardTransactionsComponent_ng_template_31_div_24_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, " Passwords do not match ");
    i0.ɵɵelementEnd();
} }
function MyCardTransactionsComponent_ng_template_31_div_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 44);
    i0.ɵɵtemplate(1, MyCardTransactionsComponent_ng_template_31_div_24_div_1_Template, 2, 0, "div", 45);
    i0.ɵɵtemplate(2, MyCardTransactionsComponent_ng_template_31_div_24_div_2_Template, 2, 0, "div", 45);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r16 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r16.f.confirmPassword.errors == null ? null : ctx_r16.f.confirmPassword.errors.required);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r16.passwordMismatch);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
function MyCardTransactionsComponent_ng_template_31_Template(rf, ctx) { if (rf & 1) {
    const _r22 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 31)(1, "h4", 32);
    i0.ɵɵtext(2, "Change Password");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 33);
    i0.ɵɵlistener("click", function MyCardTransactionsComponent_ng_template_31_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r22); const ctx_r21 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r21.modalRef.hide()); });
    i0.ɵɵtext(4, " \u00D7 ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "div", 34)(6, "form", 35)(7, "div", 3)(8, "div", 36)(9, "div", 37)(10, "label");
    i0.ɵɵtext(11, "Current Password");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(12, "input", 38);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "div", 36)(14, "div", 37)(15, "label");
    i0.ɵɵtext(16, "New Password");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(17, "input", 39);
    i0.ɵɵtemplate(18, MyCardTransactionsComponent_ng_template_31_div_18_Template, 3, 2, "div", 40);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(19, "div", 36)(20, "div", 37)(21, "label");
    i0.ɵɵtext(22, "Confirm Password");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(23, "input", 41);
    i0.ɵɵtemplate(24, MyCardTransactionsComponent_ng_template_31_div_24_Template, 3, 2, "div", 40);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(25, "div", 3)(26, "div", 42)(27, "button", 43);
    i0.ɵɵlistener("click", function MyCardTransactionsComponent_ng_template_31_Template_button_click_27_listener() { i0.ɵɵrestoreView(_r22); const ctx_r23 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r23.changePassword()); });
    i0.ɵɵtext(28, " Update Password ");
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("formGroup", ctx_r3.changePasswordForm);
    i0.ɵɵadvance(11);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(5, _c0, (ctx_r3.submitted || ctx_r3.f.newPassword.touched) && ctx_r3.f.newPassword.errors));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (ctx_r3.submitted || ctx_r3.f.newPassword.touched) && ctx_r3.f.newPassword.errors);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(7, _c0, (ctx_r3.submitted || ctx_r3.f.confirmPassword.touched) && (ctx_r3.f.confirmPassword.errors || ctx_r3.passwordMismatch)));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (ctx_r3.submitted || ctx_r3.f.confirmPassword.touched) && (ctx_r3.f.confirmPassword.errors || ctx_r3.passwordMismatch));
} }
export class MyCardTransactionsComponent {
    constructor(apiService, modalService, formBuilder, router, toastr, spinner) {
        this.apiService = apiService;
        this.modalService = modalService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.toastr = toastr;
        this.spinner = spinner;
        this.activeTabId = 'tab1';
        this.fromDate1 = '';
        this.fromDate2 = '';
        this.subaccountid = this.apiService.requiredLoginData.subaccountid;
        this.storeid = this.apiService.requiredLoginData.storeid;
        this.getlogindata = localStorage.getItem('logindata');
        this.getlogindata = JSON.parse(this.getlogindata);
        console.log("Login data: ", this.getlogindata);
        this.changePasswordForm = this.formBuilder.group({
            currentPassword: [{ value: '', disabled: true }, Validators.required],
            newPassword: ['', [Validators.required, Validators.minLength(6)]],
            confirmPassword: ['', Validators.required]
        });
    }
    ngOnInit() {
        this.onCurrentBalanceTabSelected();
        this.initForm();
    }
    initForm() {
        this.changePasswordForm = this.formBuilder.group({
            currentPassword: [{ value: '', disabled: true }],
            newPassword: ['', [Validators.required, Validators.minLength(6)]],
            confirmPassword: ['', Validators.required]
        });
    }
    onTabChange(tabId) {
        this.activeTabId = tabId;
        switch (tabId) {
            case 'tab1':
                this.onCurrentBalanceTabSelected();
                break;
            case 'tab2':
                break;
            case 'tab3':
                break;
            default:
                break;
        }
    }
    onCurrentBalanceTabSelected() {
        // const payload = {
        //   Card_Manufid: this.getlogindata.RETAIL_D2C_ACCT_INTRNL_OFFICE_REGID
        // }
        // this.apiService.postCall(this.apiService.baseURL + '/GetCardholderBalance', payload)
        //   .subscribe(data => {
        //     console.log(data);
        //   },
        //     (error) => {
        //       this.toastr.error(error, '', {
        //         timeOut: 5000,
        //       });
        //     });
    }
    onSpendOnVend() {
        this.showCardholderSpends = false;
        const payload = {
            Cardholder_Regid: this.getlogindata.ADC_VEND_CARDHOLDR_REGID,
            Frm_Date: this.fromDate1
        };
        console.log("payload: ", payload);
        this.apiService.postCall(this.apiService.baseURL + '/GetCardholderSpends', payload)
            .subscribe(data => {
            console.log(data);
            if (data.Message) {
                this.toastr.error(data.Message);
            }
            else {
                this.cardholderSpends = data;
            }
            this.showCardholderSpends = true;
        }, (error) => {
            this.toastr.error(error, '', {
                timeOut: 5000,
            });
        });
    }
    onCardRefillDetails() {
        this.showCardholderRefill = false;
        const payload = {
            Cardholder_Regid: this.getlogindata.ADC_VEND_CARDHOLDR_REGID,
            Frm_Date: this.fromDate2
        };
        this.apiService.postCall(this.apiService.baseURL + '/GetCardholderRefill', payload)
            .subscribe(data => {
            console.log(data);
            if (data.Message) {
                this.toastr.error(data.Message);
            }
            else {
                this.cardholderRefill = data;
            }
            this.showCardholderRefill = true;
        }, (error) => {
            this.toastr.error(error, '', {
                timeOut: 5000,
            });
        });
    }
    openChangePassword(template) {
        this.submitted = false;
        this.passwordMismatch = false;
        this.initForm();
        const payload = {
            Account_Subacctid: this.subaccountid,
            Account_Storeid: this.storeid,
            CardRegid: this.getlogindata.ADC_VEND_CARDHOLDR_REGID
        };
        this.apiService.postCall(`${this.apiService.baseURL}/GetVendPassword`, payload)
            .subscribe((data) => {
            this.changePasswordForm.patchValue({
                currentPassword: data.Password
            });
        }, (error) => {
            this.toastr.error(error.error, '', { timeOut: 5000 });
        });
        this.modalRef = this.modalService.show(template, { class: 'width-720' });
    }
    get f() {
        return this.changePasswordForm.controls;
    }
    changePassword() {
        var _a;
        this.submitted = true;
        if (this.changePasswordForm.invalid)
            return;
        const { newPassword, confirmPassword } = this.changePasswordForm.value;
        if (newPassword !== confirmPassword) {
            this.passwordMismatch = true;
            return;
        }
        this.passwordMismatch = false;
        const payload = {
            CardRegid: this.getlogindata.ADC_VEND_CARDHOLDR_REGID,
            Password: this.f.newPassword.value
        };
        console.log("Change Password Payload:", payload);
        this.apiService.postCall(`${this.apiService.baseURL}/ChangeVendPassword`, payload)
            .subscribe(data => {
            console.log(data);
            this.toastr.success(data.Message);
        }, (error) => {
            console.log(error);
            this.toastr.error(error.error, '', {
                timeOut: 5000,
            });
        });
        (_a = this.modalRef) === null || _a === void 0 ? void 0 : _a.hide();
    }
}
MyCardTransactionsComponent.ɵfac = function MyCardTransactionsComponent_Factory(t) { return new (t || MyCardTransactionsComponent)(i0.ɵɵdirectiveInject(i1.ApiService), i0.ɵɵdirectiveInject(i2.BsModalService), i0.ɵɵdirectiveInject(i3.FormBuilder), i0.ɵɵdirectiveInject(i4.Router), i0.ɵɵdirectiveInject(i5.ToastrService), i0.ɵɵdirectiveInject(i6.NgxSpinnerService)); };
MyCardTransactionsComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MyCardTransactionsComponent, selectors: [["app-my-card-transactions"]], decls: 33, vars: 4, consts: [[1, "content"], [1, "heading-title"], [1, "toplevel"], [1, "row"], [1, "col-md-12", "text-right", "mb-3"], ["type", "button", 1, "btn", "mr-2", "custom-btn", 3, "click"], [1, "col-md-12"], ["heading", "My Spend On Vend", "id", "tab2", 3, "selectTab"], [1, "transaction-filter", "card", "p-3", "mt-2"], [1, "row", "align-items-end"], [1, "col-md-3"], [1, "filter-label"], ["type", "date", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "btn", "btn-primary", "show-btn", 3, "click"], ["class", "card exiting-office-table orderStatus p-0 mt-2", 4, "ngIf"], ["heading", "My Card Refill Details", "id", "tab3", 3, "selectTab"], ["changePasswordModal", ""], [1, "card", "exiting-office-table", "orderStatus", "p-0", "mt-2"], [1, "card-header"], [2, "display", "flex", "flex-direction", "column"], [1, "card-body", "pa-0"], [1, "row", "m-0"], [1, "col-md-12", "py-2"], [1, "table"], [1, "font"], [4, "ngFor", "ngForOf"], ["noData", ""], ["colspan", "7", 1, "text-center"], [4, "ngIf", "ngIfElse"], ["noRefillData", ""], ["colspan", "5", 1, "text-center"], [1, "modal-header"], [1, "modal-title"], ["type", "button", 1, "close", 3, "click"], [1, "modal-body"], [3, "formGroup"], [1, "col-md-4"], [1, "form-group"], ["type", "text", "formControlName", "currentPassword", "disabled", "", 1, "form-control"], ["type", "text", "formControlName", "newPassword", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "text", "formControlName", "confirmPassword", 1, "form-control", 3, "ngClass"], [1, "col-md-12", "mt-3", "text-right"], ["type", "button", 1, "btn", "custom-btn", 3, "click"], [1, "invalid-feedback"], [4, "ngIf"]], template: function MyCardTransactionsComponent_Template(rf, ctx) { if (rf & 1) {
        const _r24 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "div", 0)(1, "h1", 1);
        i0.ɵɵtext(2, "View My Transactions");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "button", 5);
        i0.ɵɵlistener("click", function MyCardTransactionsComponent_Template_button_click_6_listener() { i0.ɵɵrestoreView(_r24); const _r2 = i0.ɵɵreference(32); return i0.ɵɵresetView(ctx.openChangePassword(_r2)); });
        i0.ɵɵtext(7, " Change Password ");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(8, "tabset", 6)(9, "tab", 7);
        i0.ɵɵlistener("selectTab", function MyCardTransactionsComponent_Template_tab_selectTab_9_listener() { return ctx.onTabChange("tab2"); });
        i0.ɵɵelementStart(10, "div", 8)(11, "div", 9)(12, "div", 10)(13, "label", 11);
        i0.ɵɵtext(14, "From Date");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(15, "input", 12);
        i0.ɵɵlistener("ngModelChange", function MyCardTransactionsComponent_Template_input_ngModelChange_15_listener($event) { return ctx.fromDate1 = $event; });
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(16, "div", 10)(17, "button", 13);
        i0.ɵɵlistener("click", function MyCardTransactionsComponent_Template_button_click_17_listener() { return ctx.onSpendOnVend(); });
        i0.ɵɵtext(18, " Show Transactions ");
        i0.ɵɵelementEnd()()()();
        i0.ɵɵtemplate(19, MyCardTransactionsComponent_div_19_Template, 29, 2, "div", 14);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(20, "tab", 15);
        i0.ɵɵlistener("selectTab", function MyCardTransactionsComponent_Template_tab_selectTab_20_listener() { return ctx.onTabChange("tab3"); });
        i0.ɵɵelementStart(21, "div", 8)(22, "div", 9)(23, "div", 10)(24, "label", 11);
        i0.ɵɵtext(25, "From Date");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(26, "input", 12);
        i0.ɵɵlistener("ngModelChange", function MyCardTransactionsComponent_Template_input_ngModelChange_26_listener($event) { return ctx.fromDate2 = $event; });
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(27, "div", 10)(28, "button", 13);
        i0.ɵɵlistener("click", function MyCardTransactionsComponent_Template_button_click_28_listener() { return ctx.onCardRefillDetails(); });
        i0.ɵɵtext(29, " Show Transactions ");
        i0.ɵɵelementEnd()()()();
        i0.ɵɵtemplate(30, MyCardTransactionsComponent_div_30_Template, 24, 3, "div", 14);
        i0.ɵɵelementEnd()()()();
        i0.ɵɵtemplate(31, MyCardTransactionsComponent_ng_template_31_Template, 29, 9, "ng-template", null, 16, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        i0.ɵɵadvance(15);
        i0.ɵɵproperty("ngModel", ctx.fromDate1);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngIf", ctx.showCardholderSpends);
        i0.ɵɵadvance(7);
        i0.ɵɵproperty("ngModel", ctx.fromDate2);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngIf", ctx.showCardholderRefill);
    } }, dependencies: [i7.NgClass, i7.NgForOf, i7.NgIf, i3.ɵNgNoValidate, i3.DefaultValueAccessor, i3.NgControlStatus, i3.NgControlStatusGroup, i3.FormGroupDirective, i3.FormControlName, i3.NgModel, i8.TabDirective, i8.TabsetComponent, i7.DatePipe], styles: [".toplevel[_ngcontent-%COMP%] {\r\n    background: #fff;\r\n    padding: 20px;\r\n    margin-bottom: 15px;\r\n    margin-top: 10px;\r\n    border: 1px solid #ddd;\r\n    border-radius: 5px;\r\n}\r\n\r\n.table-font-size[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table-font-size[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n  font-size: 13px; \r\n}\r\n\r\n.vipDiv[_ngcontent-%COMP%] {\r\n    background: #f8f9fa;\r\n    padding: 15px;\r\n    border-radius: 3px;\r\n    min-height: 210px;\r\n}\r\n\r\n.orderStatus[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    vertical-align: middle;\r\n}\r\n\r\n.orderStatus[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n    font-size: 13px;\r\n    padding: 4px 10px;\r\n}\r\n\r\n.orderStatus[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\r\n    color: #c50f20;\r\n    font-size: 90%;\r\n    font-weight: 600;\r\n}\r\n\r\n.bottom-btn[_ngcontent-%COMP%] {\r\n    float: right;\r\n}\r\n\r\n.alert.alert-success[_ngcontent-%COMP%] {\r\n    padding: 5px 10px;\r\n}\r\n\r\n.alert[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\r\n    font-size: 25px;\r\n    vertical-align: middle;\r\n    margin-left: 5px;\r\n}\r\n\r\n.orderStatus[_ngcontent-%COMP%] {\r\n    .card-header {\r\n        border: 0;\r\n    }\r\n    .card-body {\r\n        padding: 0;\r\n        overflow: auto;\r\n    }\r\n}\r\n\r\nh3.head-title[_ngcontent-%COMP%] {\r\n    font-size: 22px;\r\n    margin: 20px 0;\r\n    font-weight: bold;\r\n}\r\n\r\n.icon[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    vertical-align: top;\r\n    color: #17a2b8;\r\n}\r\n\r\n.orderStatus[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    max-width: 25px;\r\n}\r\n\r\n.orderStatus[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n    background: #021422;\r\n    border-radius: 25px;\r\n    color: #fff;\r\n    font-size: 11px !important;\r\n    border: 1px solid #21333c;\r\n    i {\r\n        font-size: 18px;\r\n        vertical-align: middle;\r\n        padding-right: 5px;\r\n    }\r\n}\r\n\r\nbutton.btn.view-del-btn[_ngcontent-%COMP%] {\r\n    background: #63030c !important;\r\n}\r\n\r\n.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n    border: 0;\r\n}\r\n\r\n.toplevel[_ngcontent-%COMP%], .card[_ngcontent-%COMP%] {\r\n    padding: 0 20px 0;\r\n}\r\n\r\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n    padding: 8px 5px;\r\n    text-align: center;\r\n    line-height: 13px;\r\n    font-weight: 600;\r\n    font-size: 13px;\r\n    border-top: 0;\r\n}\r\n\r\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    font-size: 12px;\r\n    line-height: 15px;\r\n    padding: 10px 5px;\r\n}\r\n\r\ntd.icon[_ngcontent-%COMP%] {\r\n    padding: 0 !important;\r\n}\r\n\r\nbutton.btn.custom-btn[_ngcontent-%COMP%] {\r\n    min-width: 100px;\r\n}\r\n\r\n  .nav-tabs .nav-link {\r\n  font-size: 11px; \r\n}\r\n\r\nbutton.btn.custom-btn-white[_ngcontent-%COMP%] {\r\n    min-width: 100px;\r\n    background: #ffffff;\r\n    border: 1px solid #c50f20;\r\n    color: #c50f20;\r\n    font-weight: 600;\r\n\r\n    &:hover {\r\n        background: #c50f20;\r\n        color: #ffffff;\r\n    }\r\n}\r\n\r\n.input-group-prepend[_ngcontent-%COMP%] + .invalid-feedback[_ngcontent-%COMP%] {\r\n    top: 35px;\r\n}\r\n\r\n.card-header[_ngcontent-%COMP%] {\r\n    padding: 10px 15px;\r\n    background: #63030c;\r\n    font-size: 12px;\r\n    color: #fff;\r\n    font-weight: 500;\r\n    span {\r\n        float: left;\r\n    }\r\n    span+span {\r\n        float: right;\r\n    }\r\n}\r\n\r\n.card-header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 16px;\r\n    margin-left: 3px;\r\n}\r\n\r\n.subcard-header[_ngcontent-%COMP%] {\r\n    padding: 8px 12px;\r\n    background: #63030c;\r\n    font-size: 10px;\r\n    color: #fff;\r\n    font-weight: 500;\r\n    span {\r\n        float: left;\r\n    }\r\n    span+span {\r\n        float: right;\r\n    }\r\n}\r\n\r\n.subcard-header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 16px;\r\n    margin-left: 3px;\r\n}\r\n\r\n.icofont-info-circle[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    vertical-align: middle;\r\n    margin-left: 3px;\r\n}\r\n\r\n.orderList[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\r\n    background: #ff000029;\r\n}\r\n\r\n.orderList[_ngcontent-%COMP%] {\r\n    border-collapse: collapse;\r\n    border: 1px solid #ddd;\r\n    margin: 5px 0;\r\n}\r\n\r\n.orderList[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    border: 1px solid #ddd;\r\n}\r\n\r\n.orderList[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n    background: #212529;\r\n    color: #fff;\r\n    vertical-align: middle;\r\n}\r\n\r\n.no-border[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    border: 0 !important;\r\n    text-align: right !important;\r\n    font-weight: 600;\r\n    font-size: 12px !important;\r\n}\r\n\r\nsmall.view-customer[_ngcontent-%COMP%] {\r\n    display: block;\r\n    text-decoration: underline;\r\n    cursor: pointer;\r\n}\r\n\r\nbutton.btn.view-ord-btn[_ngcontent-%COMP%] {\r\n    min-width: 112px;\r\n}\r\n\r\nbutton.btn.view-del-btn[_ngcontent-%COMP%] {\r\n    min-width: 125px;\r\n}\r\n\r\n.card-body.no_data_available[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    color: #bd2130;\r\n    img {\r\n        display: block;\r\n        text-align: center;\r\n        margin: 0 auto 5px;\r\n        max-width: 30px;\r\n    }\r\n}\r\n\r\n\r\nsmall.viewCart[_ngcontent-%COMP%] {\r\n    text-decoration: underline;\r\n    cursor: pointer;\r\n}\r\n\r\n.hr[_ngcontent-%COMP%] {\r\n    border: none;\r\n    border-top: 1.5px solid #d1d1d1;\r\n    margin: 16px 0;\r\n    height: 0;\r\n    width: 100%;\r\n}\r\n\r\nh1.heading-title[_ngcontent-%COMP%] {\r\n    margin: 20px 0 0;\r\n}\r\n\r\n.heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    padding: 10px 5px 10px;\r\n    font-size: 20px;\r\n}\r\n\r\n.row.topLevel[_ngcontent-%COMP%] {\r\n    background: #fff;\r\n    padding: 20px 0;\r\n    margin: 0;\r\n    border-radius: 5px;\r\n}\r\n\r\n.heading.store-domain[_ngcontent-%COMP%] {\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.store-domain[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    margin-right: 20px;\r\n}\r\n\r\n.store-domain[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    background: #ddd;\r\n    padding: 5px 20px;\r\n    font-size: 13px;\r\n    border-radius: 20px;\r\n    display: inline-block;\r\n    font-weight: bold;\r\n    margin-left: 5px;\r\n}\r\n\r\n.store_id[_ngcontent-%COMP%] {\r\n    background: #ddd;\r\n    padding: 5px 20px;\r\n    border-radius: 20px;\r\n    font-size: 13px;\r\n    font-weight: 700;\r\n    float: right;\r\n    margin-top: -40px;\r\n}\r\n\r\n.box[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    overflow: hidden;\r\n    box-shadow: 0 0 4px 0px #eee;\r\n    margin: 20px 0 5px;\r\n    border-radius: 4px;\r\n    padding: 10px;\r\n    background: #fff;\r\n}\r\n\r\n.main-content-area[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\r\n    width: 20%;\r\n    float: left;\r\n    padding: 0;\r\n}\r\n\r\n.fa-star[_ngcontent-%COMP%]:before {\r\n    content: \"\\f005\";\r\n    color: #ff9600;\r\n    margin-right: 5px;\r\n}\r\n\r\n.pro-box[_ngcontent-%COMP%] {\r\n    box-shadow: 0 0 4px 0 #e9ecef;\r\n    margin: 0 5px 10px;\r\n    overflow: hidden;\r\n    padding: 15px;\r\n    border-radius: 3px;\r\n    position: relative;\r\n    border: 1px solid #dee2e6;\r\n}\r\n\r\n.pro-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    height: 100px;\r\n    width: 100px;\r\n    margin: 30px auto 15px;\r\n    display: block;\r\n}\r\n\r\n.storeitem[_ngcontent-%COMP%]   .p-details[_ngcontent-%COMP%] {\r\n    margin-bottom: 42px;\r\n}\r\n\r\np.label-txt[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    padding: 10px;\r\n    font-size: 14px;\r\n    margin: 0;\r\n}\r\n\r\n.store-available-product[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\r\n    width: 25% !important;\r\n}\r\n\r\n.selected-productLine[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .store-available-product[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\r\n    font-size: 16px;\r\n    padding: 0 10px 5px;\r\n}\r\n\r\n.right-field-head[_ngcontent-%COMP%] {\r\n    float: right;\r\n    margin-top: 10px;\r\n}\r\n\r\n.right-field-head[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    padding: 0 10px;\r\n}\r\n\r\nspan.video[_ngcontent-%COMP%], span.doc[_ngcontent-%COMP%] {\r\n    padding: 8px 15px;\r\n    background: #dee2e6;\r\n    font-size: 12px;\r\n    border-radius: 20px;\r\n}\r\n\r\n.right-field-head[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n    font-size: 11px;\r\n    border-radius: 20px;\r\n}\r\n\r\n.bottom-btn[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n    line-height: 11px;\r\n}\r\n\r\n.box.prduct-gallery[_ngcontent-%COMP%] {\r\n    position: relative;\r\n}\r\n\r\n.sample-img[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    z-index: 1;\r\n    left: 15%;\r\n    top: 28%;\r\n    transform: rotate(-45deg);\r\n}\r\n\r\np.p-name[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    margin: 0;\r\n    font-size: 13px;\r\n    font-weight: 500;\r\n    vertical-align: middle;\r\n}\r\n\r\np.item-id[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    position: absolute;\r\n    top: 0;\r\n    background: #212529;\r\n    left: 0;\r\n    font-weight: 600;\r\n    color: #fff;\r\n    border-radius: 0 0 5px;\r\n    font-size: 11px;\r\n    padding: 3px 6px;\r\n}\r\n\r\nspan.price[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n    padding: 7px 10px 0;\r\n    float: left;\r\n    font-weight: 600;\r\n    line-height: 20px;\r\n}\r\n\r\n.item-id[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\r\n    font-weight: 600;\r\n}\r\n\r\n.instock[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n    text-align: center;\r\n    margin: 0 0 3px;\r\n    position: absolute;\r\n    top: 5%;\r\n    box-shadow: 0 0 30px 0 rgb(82 63 105 / 10%);\r\n    left: 70%;\r\n    background: rgb(224 152 152 / 24%);\r\n    width: 50px;\r\n    border: 1px solid rgb(0 0 0 / 10%);\r\n    height: 50px;\r\n    border-radius: 50%;\r\n    img {\r\n        width: 30px !important;\r\n        height: 30px !important;\r\n        margin: 9px auto;\r\n    }\r\n}\r\n\r\n.pro-box.storeitem.item-box[_ngcontent-%COMP%] {\r\n    border: 1px solid #dee2e6;\r\n    height: 300px;\r\n    padding-left: 20px;\r\n    padding-right: 20px;\r\n}\r\n\r\nh1.heading-title[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    text-transform: uppercase;\r\n    font-weight: 700;\r\n    color: #ff7900;\r\n    position: relative;\r\n    margin-bottom: 10px;\r\n    width: 100%;\r\n    span {\r\n        font-size: 10px;\r\n        text-transform: inherit;\r\n        background: #495057;\r\n        color: #fff;\r\n        padding: 10px 15px;\r\n        border-radius: 25px;\r\n    }\r\n}\r\n\r\nh1.heading-title[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    max-width: 65px;\r\n    margin-right: 5px;\r\n}\r\n\r\nh1.heading-title[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    font-weight: 400;\r\n    font-size: 13px;\r\n    position: absolute;\r\n    left: 80px;\r\n    bottom: 4px;\r\n    color: grey;\r\n}\r\n\r\n.offerDiv[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 5px;\r\n    right: 5px;\r\n    font-size: 10px;\r\n    background: #dc3545;\r\n    line-height: 10px;\r\n    font-weight: 700;\r\n    width: 35px;\r\n    height: 35px;\r\n    border-radius: 50%;\r\n    padding: 9px;\r\n    text-align: center;\r\n    color: #fff;\r\n}\r\n\r\n.offerDiv[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\r\n    display: block;\r\n}\r\n\r\nspan.price.strike-price[_ngcontent-%COMP%] {\r\n    color: #ccc;\r\n    text-decoration: line-through;\r\n}\r\n\r\n.row.text-level[_ngcontent-%COMP%] {\r\n    margin: 0 -10px 10px;\r\n}\r\n\r\n.store-add-remove[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    padding: 10px;\r\n    float: left;\r\n    width: 100%;\r\n}\r\n\r\n.row.product-slider-box[_ngcontent-%COMP%] {\r\n    border-bottom: 5px solid #ddd;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.carousel-inner[_ngcontent-%COMP%] {\r\n    height: 278px;\r\n}\r\n\r\n.carousel-item[_ngcontent-%COMP%] {\r\n    margin-right: 0;\r\n    border: 1px solid #f8f9fa;\r\n    background: #fff;\r\n}\r\n\r\n.product-slider-box[_ngcontent-%COMP%]   .domain-product[_ngcontent-%COMP%] {\r\n    max-width: 23%;\r\n}\r\n\r\n.product-slider-box[_ngcontent-%COMP%]   .sub-domain-product[_ngcontent-%COMP%] {\r\n    max-width: 77%;\r\n}\r\n\r\n.store-add-remove[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n    font-size: 11px;\r\n    text-align: center;\r\n    float: left;\r\n    transition: all .5s;\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n    min-width: 65px;\r\n}\r\n\r\n.store-add-remove[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] + .btn[_ngcontent-%COMP%] {\r\n    float: right;\r\n}\r\n\r\n.item-subitem-list[_ngcontent-%COMP%]   .pro-box[_ngcontent-%COMP%] {\r\n    width: 95%;\r\n    overflow: auto;\r\n    height: 280px;\r\n}\r\n\r\n.item-subitem-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    float: left;\r\n}\r\n\r\n.item-box[_ngcontent-%COMP%] {\r\n    max-width: 225px;\r\n    width: 100%;\r\n    float: left;\r\n}\r\n\r\n.sub-item-box[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    float: left;\r\n    max-width: 225px;\r\n}\r\n\r\n.sub-item-box[_ngcontent-%COMP%]   .add_to_cart[_ngcontent-%COMP%]   button.btn[_ngcontent-%COMP%] {\r\n    background: #000064;\r\n    height: 35px;\r\n    font-size: 13px;\r\n    line-height: 16px;\r\n    color: #fff;\r\n    border-radius: 25px;\r\n    margin: 10px 0 0;\r\n    width: 100%;\r\n    text-align: center;\r\n}\r\n\r\n.add_to_cart[_ngcontent-%COMP%] {\r\n    .remove-btn {\r\n        border-radius: 50%;\r\n        background: #05054ead !important;\r\n        color: #fff;\r\n        height: 35px;\r\n        padding: 0;\r\n    }\r\n    .btn+.btn {\r\n        width: 100%;\r\n        border: 0;\r\n        border-radius: 30px;\r\n        font-size: 15px;\r\n        line-height: normal;\r\n        font-weight: 600;\r\n    }\r\n}\r\n\r\n.middle-arrow[_ngcontent-%COMP%] {\r\n    float: left;\r\n    width: 30px;\r\n    height: 50px;\r\n    font-size: 40px;\r\n    margin-top: 10%;\r\n    color: #dee2e6;\r\n    text-align: center;\r\n}\r\n\r\n.price-details[_ngcontent-%COMP%] {\r\n    float: left;\r\n    width: 100%;\r\n    margin-bottom: 10px;\r\n    font-size: 15px;\r\n    line-height: normal;\r\n    font-weight: 600;\r\n    .unit-price {\r\n        float: left;\r\n        width: 42%;\r\n    }\r\n}\r\n\r\n.unit-price[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    display: block;\r\n    font-size: 12px;\r\n    font-weight: 400;\r\n}\r\n\r\n.whole-sale-price[_ngcontent-%COMP%] {\r\n    float: right;\r\n    width: 58%;\r\n    text-align: right;\r\n    span {\r\n        font-size: 12px;\r\n        display: block;\r\n        font-weight: 400;\r\n    }\r\n}\r\n\r\n.add_to_cart[_ngcontent-%COMP%] {\r\n    clear: both;\r\n}\r\n\r\n.subItem-field[_ngcontent-%COMP%] {\r\n    width: calc(100% - 280px);\r\n    float: left;\r\n}\r\n\r\n.item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n\r\n.pro-box.active[_ngcontent-%COMP%] {\r\n    border: 1px solid #63030c;\r\n}\r\n\r\n.p-details[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\r\n    font-size: 13px;\r\n    padding: 0 5px;\r\n    min-height: 25px;\r\n    height: 25px;\r\n    text-align: center;\r\n}\r\n\r\n.p-details[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n    margin-bottom: 0;\r\n    font-weight: 400;\r\n    line-height: normal;\r\n    padding-top: 2px;\r\n    padding-bottom: 2px;\r\n}\r\n\r\n.p-details[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\r\n    margin-bottom: 4px;\r\n}\r\n\r\n.sub-item-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    margin-top: 5px !important;\r\n}\r\n\r\n.p-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n    line-height: 14px;\r\n}\r\n\r\n.add-stock[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    display: inline-block !important;\r\n    width: 60px !important;\r\n    margin-left: 5px;\r\n    vertical-align: middle;\r\n}\r\n\r\n.min-alert-count[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    width: 35px;\r\n    margin-left: 5px;\r\n    display: inline-block;\r\n    margin-right: 4px;\r\n}\r\n\r\n.d-flex[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] + span[_ngcontent-%COMP%] {\r\n    margin-left: auto;\r\n    font-weight: 600;\r\n    width: 60px;\r\n    i {\r\n        font-size: 16px;\r\n        color: #bd2130;\r\n        display: inline-block;\r\n        position: relative;\r\n        top: 2px;\r\n        cursor: pointer;\r\n    }\r\n}\r\n\r\n.sub-item-box[_ngcontent-%COMP%]   .pro-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    height: 55px;\r\n    width: 55px;\r\n    margin: 18px auto 8px;\r\n}\r\n\r\n.links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    display: block;\r\n    color: #17a2b8 !important;\r\n    text-decoration: underline !important;\r\n    font-size: 12px;\r\n    cursor: pointer;\r\n}\r\n\r\n.modal-header[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    margin: 5px 0;\r\n    color: #bd2130;\r\n}\r\n\r\n.field[_ngcontent-%COMP%] {\r\n    margin-bottom: 10px;\r\n    select {\r\n        border: 1px solid #ddd;\r\n        border-radius: 3px;\r\n        height: 26px;\r\n        font-size: 12px;\r\n        margin-left: 10px;\r\n        margin-top: -4px;\r\n        width: 60px;\r\n    }\r\n}\r\n\r\n.toplevel[_ngcontent-%COMP%] {\r\n    background: #fff;\r\n    padding: 20px;\r\n    margin-bottom: 15px;\r\n    margin-top: 10px;\r\n    border: 1px solid #ddd;\r\n    border-radius: 5px;\r\n}\r\n\r\n.orderStatus[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    max-width: 80px;\r\n}\r\n\r\n.vipDiv[_ngcontent-%COMP%] {\r\n    background: #f8f9fa;\r\n    padding: 15px;\r\n    border-radius: 3px;\r\n    min-height: 210px;\r\n}\r\n\r\n.orderStatus[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    vertical-align: middle;\r\n}\r\n\r\n.orderStatus[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n    font-size: 13px;\r\n}\r\n.orderStatus[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\r\n    color: #c50f20;\r\n    font-size: 90%;\r\n    font-weight: 600;\r\n}\r\n\r\n.bottom-btn[_ngcontent-%COMP%] {\r\n    float: right;\r\n}\r\n\r\n.alert.alert-success[_ngcontent-%COMP%] {\r\n    padding: 5px 10px;\r\n}\r\n\r\n.alert[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\r\n    font-size: 25px;\r\n    vertical-align: middle;\r\n    margin-left: 5px;\r\n}\r\n\r\n.orderStatus[_ngcontent-%COMP%] {\r\n.card-header {\r\n    border: 0;\r\n}\r\n.card-body {\r\n    padding: 0;\r\n}\r\n}\r\n\r\n.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    padding: 8px;\r\n    text-align: center;\r\n    line-height: normal;\r\n\r\n}\r\n\r\nh3.head-title[_ngcontent-%COMP%] {\r\n    font-size: 22px;\r\n    margin: 20px 0;\r\n    font-weight: bold;\r\n}\r\n\r\nlabel.clear[_ngcontent-%COMP%] {\r\n    display: block;\r\n}\r\n\r\n.save-pdf.btn[_ngcontent-%COMP%] {\r\n    font-size: 13px;\r\n    float: right;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.row.bank-details[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n}\r\n\r\n.row.bank-details[_ngcontent-%COMP%]    + .card-body[_ngcontent-%COMP%] {\r\n    padding-left: 15px;\r\n    padding-right: 15px;\r\n}\r\n\r\n.img-preview-box[_ngcontent-%COMP%] {\r\n  width: 140px;\r\n  height: 140px;\r\n  border: 1px solid #ccc;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  background: #fafafa;\r\n}\r\n\r\n.img-preview-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  max-width: 100%;\r\n  max-height: 100%;\r\n  object-fit: cover;\r\n}\r\n\r\n.transaction-filter[_ngcontent-%COMP%] {\r\n    background: #f8f9fa;\r\n    border-radius: 6px;\r\n}\r\n\r\n.filter-label[_ngcontent-%COMP%] {\r\n    font-weight: 500;\r\n    margin-bottom: 5px;\r\n    font-size: 14px;\r\n}\r\n\r\n.show-btn[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 38px;\r\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MyCardTransactionsComponent, [{
        type: Component,
        args: [{ selector: 'app-my-card-transactions', template: "<div class=\"content\">\n\n    <h1 class=\"heading-title\">View My Transactions</h1>\n\n    <div class=\"toplevel\">\n\n        <div class=\"row\">\n            <div class=\"col-md-12 text-right mb-3\">\n\n                <button type=\"button\" class=\"btn mr-2 custom-btn\" (click)=\"openChangePassword(changePasswordModal)\">\n                    Change Password\n                </button>\n\n            </div>\n        </div>\n\n        <tabset class=\"col-md-12\">\n\n            <tab heading=\"My Spend On Vend\" id=\"tab2\" (selectTab)=\"onTabChange('tab2')\">\n\n                <div class=\"transaction-filter card p-3 mt-2\">\n                    <div class=\"row align-items-end\">\n\n                        <div class=\"col-md-3\">\n                            <label class=\"filter-label\">From Date</label>\n                            <input type=\"date\" class=\"form-control\" [(ngModel)]=\"fromDate1\">\n                        </div>\n\n                        <div class=\"col-md-3\">\n                            <button class=\"btn btn-primary show-btn\" (click)=\"onSpendOnVend()\">\n                                Show Transactions\n                            </button>\n                        </div>\n\n                    </div>\n                </div>\n\n                <div *ngIf=\"showCardholderSpends\" class=\"card exiting-office-table orderStatus p-0 mt-2\">\n\n                    <!-- Card Header -->\n                    <div class=\"card-header\">\n                        <div style=\"display: flex; flex-direction: column;\">\n                            <span>Card Balance: {{cardholderSpends.CurrentBalance}}</span>\n                        </div>\n                    </div>\n\n                    <!-- Card Body -->\n                    <div class=\"card-body pa-0\">\n                        <div class=\"row m-0\">\n                            <div class=\"col-md-12 py-2\">\n                                <table class=\"table\">\n                                    <thead>\n                                        <tr>\n                                            <th class=\"font\">Serial#</th>\n                                            <th class=\"font\">Date/Time</th>\n                                            <th class=\"font\">Vending Machine Id</th>\n                                            <th class=\"font\">Location</th>\n                                            <th class=\"font\">Amt Spent</th>\n                                            <th class=\"font\">Drink Id</th>\n                                            <th class=\"font\">Card Balance After Spent</th>\n                                        </tr>\n                                    </thead>\n                                    <tbody>\n                                        <tr *ngFor=\"let item of cardholderSpends?.DebitDetail; let i = index\">\n                                            <td>{{ i + 1 }}</td>\n\n                                            <!-- Date/Time -->\n                                            <td>\n                                                {{ item.ADC_MEMBER_DEBIT_TRANS_DATETIME | date:'dd-MMM-yyyy hh:mm a' }}\n                                            </td>\n\n                                            <!-- Vending Machine Id -->\n                                            <td>{{ item.ADC_MEMBER_DEBIT_TRANS_VENDID }}</td>\n\n                                            <!-- Location -->\n                                            <td>\n                                                {{ item.ADC_MEMBER_DEBIT_TRANS_LOCTN || 'N/A' }}\n                                            </td>\n\n                                            <!-- Amount -->\n                                            <td>\u20B9{{ item.ADC_MEMBER_DEBIT_COST_AMT }}</td>\n\n                                            <!-- Drink Id -->\n                                            <td>\n                                                {{ item.ADC_MEMBER_DEBIT_PRODCT_ID }}\n                                            </td>\n\n                                            <!-- Balance After -->\n                                            <td>\u20B9{{ item.ADC_MEMBER_CARD_BAL_AFTER_TRANS }}</td>\n                                        </tr>\n                                    </tbody>\n\n                                    <ng-template #noData>\n                                        <tr>\n                                            <td colspan=\"7\" class=\"text-center\">No transactions found</td>\n                                        </tr>\n                                    </ng-template>\n                                </table>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n            </tab>\n\n            <tab heading=\"My Card Refill Details\" id=\"tab3\" (selectTab)=\"onTabChange('tab3')\">\n\n                <div class=\"transaction-filter card p-3 mt-2\">\n                    <div class=\"row align-items-end\">\n\n                        <div class=\"col-md-3\">\n                            <label class=\"filter-label\">From Date</label>\n                            <input type=\"date\" class=\"form-control\" [(ngModel)]=\"fromDate2\">\n                        </div>\n\n                        <div class=\"col-md-3\">\n                            <button class=\"btn btn-primary show-btn\" (click)=\"onCardRefillDetails()\">\n                                Show Transactions\n                            </button>\n                        </div>\n\n                    </div>\n                </div>\n\n                <div *ngIf=\"showCardholderRefill\" class=\"card exiting-office-table orderStatus p-0 mt-2\">\n\n                    <!-- Card Header -->\n                    <div class=\"card-header\">\n                        <div style=\"display: flex; flex-direction: column;\">\n                            <span>Card Balance: {{cardholderRefill.CurrentBalance}}</span>\n                        </div>\n                    </div>\n\n                    <!-- Card Body -->\n                    <div class=\"card-body pa-0\">\n                        <div class=\"row m-0\">\n                            <div class=\"col-md-12 py-2\">\n                                <table class=\"table\">\n                                    <thead>\n                                        <tr>\n                                            <th class=\"font\">Serial#</th>\n                                            <th class=\"font\">Date/Time</th>\n                                            <th class=\"font\">Refill Amt</th>\n                                            <th class=\"font\">Invoice Detail</th>\n                                            <th class=\"font\">Balance After Refill</th>\n                                        </tr>\n                                    </thead>\n                                    <tbody *ngIf=\"cardholderRefill?.CreditDetail.length; else noRefillData\">\n                                        <tr *ngFor=\"let item of cardholderRefill?.CreditDetail; let i = index\">\n\n                                            <!-- Serial -->\n                                            <td>{{ i + 1 }}</td>\n\n                                            <!-- Date/Time -->\n                                            <td>\n                                                {{ item.ADC_MEMBER_CREDIT_TRANS_DATETIME | date:'dd-MMM-yyyy hh:mm a' }}\n                                            </td>\n\n                                            <!-- Refill Amount -->\n                                            <td>\u20B9{{ item.ADC_MEMBER_CREDIT_AMT }}</td>\n\n                                            <!-- Invoice Detail -->\n                                            <td>\n                                                INV-{{ item.ADC_MEMBER_CREDIT_CARTID }}\n                                                ({{ item.ADC_MEMBER_CREDIT_FRM_PORTL_FLG ? 'Online' : 'Offline' }})\n                                            </td>\n\n                                            <!-- Balance After -->\n                                            <td>\u20B9{{ item.ADC_MEMBER_CARD_BAL_AFTER_TRANS }}</td>\n\n                                        </tr>\n                                    </tbody>\n\n                                    <ng-template #noRefillData>\n                                        <tr>\n                                            <td colspan=\"5\" class=\"text-center\">No refill transactions found</td>\n                                        </tr>\n                                    </ng-template>\n                                </table>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n            </tab>\n\n        </tabset>\n\n    </div>\n</div>\n\n<ng-template #changePasswordModal>\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Change Password</h4>\n\n        <button type=\"button\" class=\"close\" (click)=\"modalRef.hide()\">\n            &times;\n        </button>\n    </div>\n\n    <div class=\"modal-body\">\n        <form [formGroup]=\"changePasswordForm\">\n\n            <div class=\"row\">\n\n                <!-- Current Password -->\n                <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                        <label>Current Password</label>\n\n                        <input type=\"text\" class=\"form-control\" formControlName=\"currentPassword\" disabled>\n                    </div>\n                </div>\n\n                <!-- New Password -->\n                <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                        <label>New Password</label>\n\n                        <input type=\"text\" class=\"form-control\" formControlName=\"newPassword\" [ngClass]=\"{\n                     'is-invalid': (submitted || f.newPassword.touched) && f.newPassword.errors\n                   }\">\n\n                        <div *ngIf=\"(submitted || f.newPassword.touched) && f.newPassword.errors\"\n                            class=\"invalid-feedback\">\n\n                            <div *ngIf=\"f.newPassword.errors?.required\">\n                                New password is required\n                            </div>\n\n                            <div *ngIf=\"f.newPassword.errors?.minlength\">\n                                Minimum 6 characters required\n                            </div>\n\n                        </div>\n                    </div>\n                </div>\n\n                <!-- Confirm Password -->\n                <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                        <label>Confirm Password</label>\n\n                        <input type=\"text\" class=\"form-control\" formControlName=\"confirmPassword\" [ngClass]=\"{\n                     'is-invalid': (submitted || f.confirmPassword.touched) && (f.confirmPassword.errors || passwordMismatch)\n                   }\">\n\n                        <div *ngIf=\"(submitted || f.confirmPassword.touched) && (f.confirmPassword.errors || passwordMismatch)\"\n                            class=\"invalid-feedback\">\n\n                            <div *ngIf=\"f.confirmPassword.errors?.required\">\n                                Confirm password is required\n                            </div>\n\n                            <div *ngIf=\"passwordMismatch\">\n                                Passwords do not match\n                            </div>\n\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n\n            <!-- Button -->\n            <div class=\"row\">\n                <div class=\"col-md-12 mt-3 text-right\">\n                    <button type=\"button\" class=\"btn custom-btn\" (click)=\"changePassword()\">\n                        Update Password\n                    </button>\n                </div>\n            </div>\n\n        </form>\n    </div>\n</ng-template>", styles: [".toplevel {\r\n    background: #fff;\r\n    padding: 20px;\r\n    margin-bottom: 15px;\r\n    margin-top: 10px;\r\n    border: 1px solid #ddd;\r\n    border-radius: 5px;\r\n}\r\n\r\n.table-font-size th,\r\n.table-font-size td {\r\n  font-size: 13px; /* Change to your desired size */\r\n}\r\n\r\n.vipDiv {\r\n    background: #f8f9fa;\r\n    padding: 15px;\r\n    border-radius: 3px;\r\n    min-height: 210px;\r\n}\r\n\r\n.orderStatus td {\r\n    vertical-align: middle;\r\n}\r\n\r\n.orderStatus td .btn {\r\n    font-size: 13px;\r\n    padding: 4px 10px;\r\n}\r\n\r\n.orderStatus small {\r\n    color: #c50f20;\r\n    font-size: 90%;\r\n    font-weight: 600;\r\n}\r\n\r\n.bottom-btn {\r\n    float: right;\r\n}\r\n\r\n.alert.alert-success {\r\n    padding: 5px 10px;\r\n}\r\n\r\n.alert .fa {\r\n    font-size: 25px;\r\n    vertical-align: middle;\r\n    margin-left: 5px;\r\n}\r\n\r\n.orderStatus {\r\n    .card-header {\r\n        border: 0;\r\n    }\r\n    .card-body {\r\n        padding: 0;\r\n        overflow: auto;\r\n    }\r\n}\r\n\r\nh3.head-title {\r\n    font-size: 22px;\r\n    margin: 20px 0;\r\n    font-weight: bold;\r\n}\r\n\r\n.icon .fa {\r\n    font-size: 20px;\r\n    vertical-align: top;\r\n    color: #17a2b8;\r\n}\r\n\r\n.orderStatus .icon img {\r\n    max-width: 25px;\r\n}\r\n\r\n.orderStatus .btn {\r\n    background: #021422;\r\n    border-radius: 25px;\r\n    color: #fff;\r\n    font-size: 11px !important;\r\n    border: 1px solid #21333c;\r\n    i {\r\n        font-size: 18px;\r\n        vertical-align: middle;\r\n        padding-right: 5px;\r\n    }\r\n}\r\n\r\nbutton.btn.view-del-btn {\r\n    background: #63030c !important;\r\n}\r\n\r\n.table thead th {\r\n    border: 0;\r\n}\r\n\r\n.toplevel,\r\n.card {\r\n    padding: 0 20px 0;\r\n}\r\n\r\n.table th {\r\n    padding: 8px 5px;\r\n    text-align: center;\r\n    line-height: 13px;\r\n    font-weight: 600;\r\n    font-size: 13px;\r\n    border-top: 0;\r\n}\r\n\r\n.table td {\r\n    text-align: center;\r\n    font-size: 12px;\r\n    line-height: 15px;\r\n    padding: 10px 5px;\r\n}\r\n\r\ntd.icon {\r\n    padding: 0 !important;\r\n}\r\n\r\nbutton.btn.custom-btn {\r\n    min-width: 100px;\r\n}\r\n\r\n::ng-deep .nav-tabs .nav-link {\r\n  font-size: 11px; /* Adjust as needed */\r\n}\r\n\r\nbutton.btn.custom-btn-white {\r\n    min-width: 100px;\r\n    background: #ffffff;\r\n    border: 1px solid #c50f20;\r\n    color: #c50f20;\r\n    font-weight: 600;\r\n\r\n    &:hover {\r\n        background: #c50f20;\r\n        color: #ffffff;\r\n    }\r\n}\r\n\r\n.input-group-prepend+.invalid-feedback {\r\n    top: 35px;\r\n}\r\n\r\n.card-header {\r\n    padding: 10px 15px;\r\n    background: #63030c;\r\n    font-size: 12px;\r\n    color: #fff;\r\n    font-weight: 500;\r\n    span {\r\n        float: left;\r\n    }\r\n    span+span {\r\n        float: right;\r\n    }\r\n}\r\n\r\n.card-header img {\r\n    width: 16px;\r\n    margin-left: 3px;\r\n}\r\n\r\n.subcard-header {\r\n    padding: 8px 12px;\r\n    background: #63030c;\r\n    font-size: 10px;\r\n    color: #fff;\r\n    font-weight: 500;\r\n    span {\r\n        float: left;\r\n    }\r\n    span+span {\r\n        float: right;\r\n    }\r\n}\r\n\r\n.subcard-header img {\r\n    width: 16px;\r\n    margin-left: 3px;\r\n}\r\n\r\n.icofont-info-circle {\r\n    font-size: 20px;\r\n    vertical-align: middle;\r\n    margin-left: 3px;\r\n}\r\n\r\n.orderList thead tr {\r\n    background: #ff000029;\r\n}\r\n\r\n.orderList {\r\n    border-collapse: collapse;\r\n    border: 1px solid #ddd;\r\n    margin: 5px 0;\r\n}\r\n\r\n.orderList td {\r\n    border: 1px solid #ddd;\r\n}\r\n\r\n.orderList tr th {\r\n    background: #212529;\r\n    color: #fff;\r\n    vertical-align: middle;\r\n}\r\n\r\n.no-border td {\r\n    border: 0 !important;\r\n    text-align: right !important;\r\n    font-weight: 600;\r\n    font-size: 12px !important;\r\n}\r\n\r\nsmall.view-customer {\r\n    display: block;\r\n    text-decoration: underline;\r\n    cursor: pointer;\r\n}\r\n\r\nbutton.btn.view-ord-btn {\r\n    min-width: 112px;\r\n}\r\n\r\nbutton.btn.view-del-btn {\r\n    min-width: 125px;\r\n}\r\n\r\n.card-body.no_data_available {\r\n    text-align: center;\r\n    color: #bd2130;\r\n    img {\r\n        display: block;\r\n        text-align: center;\r\n        margin: 0 auto 5px;\r\n        max-width: 30px;\r\n    }\r\n}\r\n\r\n\r\nsmall.viewCart {\r\n    text-decoration: underline;\r\n    cursor: pointer;\r\n}\r\n\r\n.hr {\r\n    border: none;\r\n    border-top: 1.5px solid #d1d1d1;\r\n    margin: 16px 0;\r\n    height: 0;\r\n    width: 100%;\r\n}\r\n\r\nh1.heading-title {\r\n    margin: 20px 0 0;\r\n}\r\n\r\n.heading h2 {\r\n    padding: 10px 5px 10px;\r\n    font-size: 20px;\r\n}\r\n\r\n.row.topLevel {\r\n    background: #fff;\r\n    padding: 20px 0;\r\n    margin: 0;\r\n    border-radius: 5px;\r\n}\r\n\r\n.heading.store-domain {\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.store-domain div {\r\n    display: inline-block;\r\n    margin-right: 20px;\r\n}\r\n\r\n.store-domain span {\r\n    background: #ddd;\r\n    padding: 5px 20px;\r\n    font-size: 13px;\r\n    border-radius: 20px;\r\n    display: inline-block;\r\n    font-weight: bold;\r\n    margin-left: 5px;\r\n}\r\n\r\n.store_id {\r\n    background: #ddd;\r\n    padding: 5px 20px;\r\n    border-radius: 20px;\r\n    font-size: 13px;\r\n    font-weight: 700;\r\n    float: right;\r\n    margin-top: -40px;\r\n}\r\n\r\n.box {\r\n    width: 100%;\r\n    overflow: hidden;\r\n    box-shadow: 0 0 4px 0px #eee;\r\n    margin: 20px 0 5px;\r\n    border-radius: 4px;\r\n    padding: 10px;\r\n    background: #fff;\r\n}\r\n\r\n.main-content-area .box .col {\r\n    width: 20%;\r\n    float: left;\r\n    padding: 0;\r\n}\r\n\r\n.fa-star:before {\r\n    content: \"\\f005\";\r\n    color: #ff9600;\r\n    margin-right: 5px;\r\n}\r\n\r\n.pro-box {\r\n    box-shadow: 0 0 4px 0 #e9ecef;\r\n    margin: 0 5px 10px;\r\n    overflow: hidden;\r\n    padding: 15px;\r\n    border-radius: 3px;\r\n    position: relative;\r\n    border: 1px solid #dee2e6;\r\n}\r\n\r\n.pro-box img {\r\n    height: 100px;\r\n    width: 100px;\r\n    margin: 30px auto 15px;\r\n    display: block;\r\n}\r\n\r\n.storeitem .p-details {\r\n    margin-bottom: 42px;\r\n}\r\n\r\np.label-txt {\r\n    text-align: center;\r\n    padding: 10px;\r\n    font-size: 14px;\r\n    margin: 0;\r\n}\r\n\r\n.store-available-product .col {\r\n    width: 25% !important;\r\n}\r\n\r\n.selected-productLine h5,\r\n.store-available-product h5 {\r\n    font-size: 16px;\r\n    padding: 0 10px 5px;\r\n}\r\n\r\n.right-field-head {\r\n    float: right;\r\n    margin-top: 10px;\r\n}\r\n\r\n.right-field-head li {\r\n    display: inline-block;\r\n    padding: 0 10px;\r\n}\r\n\r\nspan.video,\r\nspan.doc {\r\n    padding: 8px 15px;\r\n    background: #dee2e6;\r\n    font-size: 12px;\r\n    border-radius: 20px;\r\n}\r\n\r\n.right-field-head .btn {\r\n    font-size: 11px;\r\n    border-radius: 20px;\r\n}\r\n\r\n.bottom-btn .btn {\r\n    line-height: 11px;\r\n}\r\n\r\n.box.prduct-gallery {\r\n    position: relative;\r\n}\r\n\r\n.sample-img {\r\n    position: absolute;\r\n    z-index: 1;\r\n    left: 15%;\r\n    top: 28%;\r\n    transform: rotate(-45deg);\r\n}\r\n\r\np.p-name {\r\n    text-align: center;\r\n    margin: 0;\r\n    font-size: 13px;\r\n    font-weight: 500;\r\n    vertical-align: middle;\r\n}\r\n\r\np.item-id {\r\n    text-align: center;\r\n    position: absolute;\r\n    top: 0;\r\n    background: #212529;\r\n    left: 0;\r\n    font-weight: 600;\r\n    color: #fff;\r\n    border-radius: 0 0 5px;\r\n    font-size: 11px;\r\n    padding: 3px 6px;\r\n}\r\n\r\nspan.price {\r\n    font-size: 12px;\r\n    padding: 7px 10px 0;\r\n    float: left;\r\n    font-weight: 600;\r\n    line-height: 20px;\r\n}\r\n\r\n.item-id b {\r\n    font-weight: 600;\r\n}\r\n\r\n.instock {\r\n    font-size: 12px;\r\n    text-align: center;\r\n    margin: 0 0 3px;\r\n    position: absolute;\r\n    top: 5%;\r\n    box-shadow: 0 0 30px 0 rgb(82 63 105 / 10%);\r\n    left: 70%;\r\n    background: rgb(224 152 152 / 24%);\r\n    width: 50px;\r\n    border: 1px solid rgb(0 0 0 / 10%);\r\n    height: 50px;\r\n    border-radius: 50%;\r\n    img {\r\n        width: 30px !important;\r\n        height: 30px !important;\r\n        margin: 9px auto;\r\n    }\r\n}\r\n\r\n.pro-box.storeitem.item-box {\r\n    border: 1px solid #dee2e6;\r\n    height: 300px;\r\n    padding-left: 20px;\r\n    padding-right: 20px;\r\n}\r\n\r\nh1.heading-title {\r\n    font-size: 20px;\r\n    text-transform: uppercase;\r\n    font-weight: 700;\r\n    color: #ff7900;\r\n    position: relative;\r\n    margin-bottom: 10px;\r\n    width: 100%;\r\n    span {\r\n        font-size: 10px;\r\n        text-transform: inherit;\r\n        background: #495057;\r\n        color: #fff;\r\n        padding: 10px 15px;\r\n        border-radius: 25px;\r\n    }\r\n}\r\n\r\nh1.heading-title img {\r\n    max-width: 65px;\r\n    margin-right: 5px;\r\n}\r\n\r\nh1.heading-title small {\r\n    display: inline-block;\r\n    font-weight: 400;\r\n    font-size: 13px;\r\n    position: absolute;\r\n    left: 80px;\r\n    bottom: 4px;\r\n    color: grey;\r\n}\r\n\r\n.offerDiv {\r\n    position: absolute;\r\n    top: 5px;\r\n    right: 5px;\r\n    font-size: 10px;\r\n    background: #dc3545;\r\n    line-height: 10px;\r\n    font-weight: 700;\r\n    width: 35px;\r\n    height: 35px;\r\n    border-radius: 50%;\r\n    padding: 9px;\r\n    text-align: center;\r\n    color: #fff;\r\n}\r\n\r\n.offerDiv small {\r\n    display: block;\r\n}\r\n\r\nspan.price.strike-price {\r\n    color: #ccc;\r\n    text-decoration: line-through;\r\n}\r\n\r\n.row.text-level {\r\n    margin: 0 -10px 10px;\r\n}\r\n\r\n.store-add-remove {\r\n    text-align: center;\r\n    padding: 10px;\r\n    float: left;\r\n    width: 100%;\r\n}\r\n\r\n.row.product-slider-box {\r\n    border-bottom: 5px solid #ddd;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.carousel-inner {\r\n    height: 278px;\r\n}\r\n\r\n.carousel-item {\r\n    margin-right: 0;\r\n    border: 1px solid #f8f9fa;\r\n    background: #fff;\r\n}\r\n\r\n.product-slider-box .domain-product {\r\n    max-width: 23%;\r\n}\r\n\r\n.product-slider-box .sub-domain-product {\r\n    max-width: 77%;\r\n}\r\n\r\n.store-add-remove .btn {\r\n    font-size: 11px;\r\n    text-align: center;\r\n    float: left;\r\n    transition: all .5s;\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n    min-width: 65px;\r\n}\r\n\r\n.store-add-remove .btn+.btn {\r\n    float: right;\r\n}\r\n\r\n.item-subitem-list .pro-box {\r\n    width: 95%;\r\n    overflow: auto;\r\n    height: 280px;\r\n}\r\n\r\n.item-subitem-list li {\r\n    width: 100%;\r\n    float: left;\r\n}\r\n\r\n.item-box {\r\n    max-width: 225px;\r\n    width: 100%;\r\n    float: left;\r\n}\r\n\r\n.sub-item-box {\r\n    width: 100%;\r\n    float: left;\r\n    max-width: 225px;\r\n}\r\n\r\n.sub-item-box .add_to_cart button.btn {\r\n    background: #000064;\r\n    height: 35px;\r\n    font-size: 13px;\r\n    line-height: 16px;\r\n    color: #fff;\r\n    border-radius: 25px;\r\n    margin: 10px 0 0;\r\n    width: 100%;\r\n    text-align: center;\r\n}\r\n\r\n.add_to_cart {\r\n    .remove-btn {\r\n        border-radius: 50%;\r\n        background: #05054ead !important;\r\n        color: #fff;\r\n        height: 35px;\r\n        padding: 0;\r\n    }\r\n    .btn+.btn {\r\n        width: 100%;\r\n        border: 0;\r\n        border-radius: 30px;\r\n        font-size: 15px;\r\n        line-height: normal;\r\n        font-weight: 600;\r\n    }\r\n}\r\n\r\n.middle-arrow {\r\n    float: left;\r\n    width: 30px;\r\n    height: 50px;\r\n    font-size: 40px;\r\n    margin-top: 10%;\r\n    color: #dee2e6;\r\n    text-align: center;\r\n}\r\n\r\n.price-details {\r\n    float: left;\r\n    width: 100%;\r\n    margin-bottom: 10px;\r\n    font-size: 15px;\r\n    line-height: normal;\r\n    font-weight: 600;\r\n    .unit-price {\r\n        float: left;\r\n        width: 42%;\r\n    }\r\n}\r\n\r\n.unit-price span {\r\n    display: block;\r\n    font-size: 12px;\r\n    font-weight: 400;\r\n}\r\n\r\n.whole-sale-price {\r\n    float: right;\r\n    width: 58%;\r\n    text-align: right;\r\n    span {\r\n        font-size: 12px;\r\n        display: block;\r\n        font-weight: 400;\r\n    }\r\n}\r\n\r\n.add_to_cart {\r\n    clear: both;\r\n}\r\n\r\n.subItem-field {\r\n    width: calc(100% - 280px);\r\n    float: left;\r\n}\r\n\r\n.item img {\r\n    width: 100%;\r\n}\r\n\r\n.pro-box.active {\r\n    border: 1px solid #63030c;\r\n}\r\n\r\n.p-details .form-control {\r\n    font-size: 13px;\r\n    padding: 0 5px;\r\n    min-height: 25px;\r\n    height: 25px;\r\n    text-align: center;\r\n}\r\n\r\n.p-details .form-group label {\r\n    margin-bottom: 0;\r\n    font-weight: 400;\r\n    line-height: normal;\r\n    padding-top: 2px;\r\n    padding-bottom: 2px;\r\n}\r\n\r\n.p-details .form-group {\r\n    margin-bottom: 4px;\r\n}\r\n\r\n.sub-item-box img {\r\n    margin-top: 5px !important;\r\n}\r\n\r\n.p-details p {\r\n    font-size: 12px;\r\n    line-height: 14px;\r\n}\r\n\r\n.add-stock input {\r\n    display: inline-block !important;\r\n    width: 60px !important;\r\n    margin-left: 5px;\r\n    vertical-align: middle;\r\n}\r\n\r\n.min-alert-count input {\r\n    width: 35px;\r\n    margin-left: 5px;\r\n    display: inline-block;\r\n    margin-right: 4px;\r\n}\r\n\r\n.d-flex span+span {\r\n    margin-left: auto;\r\n    font-weight: 600;\r\n    width: 60px;\r\n    i {\r\n        font-size: 16px;\r\n        color: #bd2130;\r\n        display: inline-block;\r\n        position: relative;\r\n        top: 2px;\r\n        cursor: pointer;\r\n    }\r\n}\r\n\r\n.sub-item-box .pro-box img {\r\n    height: 55px;\r\n    width: 55px;\r\n    margin: 18px auto 8px;\r\n}\r\n\r\n.links a {\r\n    display: block;\r\n    color: #17a2b8 !important;\r\n    text-decoration: underline !important;\r\n    font-size: 12px;\r\n    cursor: pointer;\r\n}\r\n\r\n.modal-header i {\r\n    margin: 5px 0;\r\n    color: #bd2130;\r\n}\r\n\r\n.field {\r\n    margin-bottom: 10px;\r\n    select {\r\n        border: 1px solid #ddd;\r\n        border-radius: 3px;\r\n        height: 26px;\r\n        font-size: 12px;\r\n        margin-left: 10px;\r\n        margin-top: -4px;\r\n        width: 60px;\r\n    }\r\n}\r\n\r\n.toplevel {\r\n    background: #fff;\r\n    padding: 20px;\r\n    margin-bottom: 15px;\r\n    margin-top: 10px;\r\n    border: 1px solid #ddd;\r\n    border-radius: 5px;\r\n}\r\n\r\n.orderStatus td img {\r\n    max-width: 80px;\r\n}\r\n\r\n.vipDiv {\r\n    background: #f8f9fa;\r\n    padding: 15px;\r\n    border-radius: 3px;\r\n    min-height: 210px;\r\n}\r\n\r\n.orderStatus td {\r\n    vertical-align: middle;\r\n}\r\n\r\n.orderStatus td .btn {\r\n    font-size: 13px;\r\n}\r\n.orderStatus small {\r\n    color: #c50f20;\r\n    font-size: 90%;\r\n    font-weight: 600;\r\n}\r\n\r\n.bottom-btn {\r\n    float: right;\r\n}\r\n\r\n.alert.alert-success {\r\n    padding: 5px 10px;\r\n}\r\n\r\n.alert .fa {\r\n    font-size: 25px;\r\n    vertical-align: middle;\r\n    margin-left: 5px;\r\n}\r\n\r\n.orderStatus {\r\n.card-header {\r\n    border: 0;\r\n}\r\n.card-body {\r\n    padding: 0;\r\n}\r\n}\r\n\r\n.table thead th,\r\n.table tbody td {\r\n    padding: 8px;\r\n    text-align: center;\r\n    line-height: normal;\r\n\r\n}\r\n\r\nh3.head-title {\r\n    font-size: 22px;\r\n    margin: 20px 0;\r\n    font-weight: bold;\r\n}\r\n\r\nlabel.clear {\r\n    display: block;\r\n}\r\n\r\n.save-pdf.btn {\r\n    font-size: 13px;\r\n    float: right;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.row.bank-details {\r\n    margin: 0;\r\n}\r\n\r\n.row.bank-details + .card-body {\r\n    padding-left: 15px;\r\n    padding-right: 15px;\r\n}\r\n\r\n.img-preview-box {\r\n  width: 140px;\r\n  height: 140px;\r\n  border: 1px solid #ccc;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  background: #fafafa;\r\n}\r\n\r\n.img-preview-box img {\r\n  max-width: 100%;\r\n  max-height: 100%;\r\n  object-fit: cover;\r\n}\r\n\r\n.transaction-filter {\r\n    background: #f8f9fa;\r\n    border-radius: 6px;\r\n}\r\n\r\n.filter-label {\r\n    font-weight: 500;\r\n    margin-bottom: 5px;\r\n    font-size: 14px;\r\n}\r\n\r\n.show-btn {\r\n    width: 100%;\r\n    height: 38px;\r\n}"] }]
    }], function () { return [{ type: i1.ApiService }, { type: i2.BsModalService }, { type: i3.FormBuilder }, { type: i4.Router }, { type: i5.ToastrService }, { type: i6.NgxSpinnerService }]; }, null); })();
//# sourceMappingURL=my-card-transactions.component.js.map