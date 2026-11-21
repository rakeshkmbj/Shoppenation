import { Component } from '@angular/core';
import { NgbModalConfig, NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { DataService } from '../services/dataservice';
import * as i0 from "@angular/core";
import * as i1 from "ngx-bootstrap/modal";
import * as i2 from "../services/register.service";
import * as i3 from "@angular/router";
import * as i4 from "ngx-bootstrap-spinner";
import * as i5 from "../services/dataservice";
import * as i6 from "../services/common.service";
import * as i7 from "ngx-toastr";
import * as i8 from "@angular/common";
import * as i9 from "@angular/forms";
function LoginComponent_div_23_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "Platform is required");
    i0.ɵɵelementEnd();
} }
function LoginComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 45);
    i0.ɵɵtemplate(1, LoginComponent_div_23_div_1_Template, 2, 0, "div", 46);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.f.platform.errors.required);
} }
function LoginComponent_option_30_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 11);
    i0.ɵɵtext(1, "Admediaworld");
    i0.ɵɵelementEnd();
} }
function LoginComponent_option_31_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 12);
    i0.ɵɵtext(1, "All-Day Kitchen");
    i0.ɵɵelementEnd();
} }
function LoginComponent_option_32_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 13);
    i0.ɵɵtext(1, "All-Day Kirana");
    i0.ɵɵelementEnd();
} }
function LoginComponent_option_33_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 14);
    i0.ɵɵtext(1, "All-Day Fashion");
    i0.ɵɵelementEnd();
} }
function LoginComponent_option_34_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 47);
    i0.ɵɵtext(1, "All-Day Electronics & Large Appliances");
    i0.ɵɵelementEnd();
} }
function LoginComponent_option_35_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 48);
    i0.ɵɵtext(1, "All-Day Home & Office Furnitures");
    i0.ɵɵelementEnd();
} }
function LoginComponent_option_36_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 49);
    i0.ɵɵtext(1, "All-Day Pharma & Medicos");
    i0.ɵɵelementEnd();
} }
function LoginComponent_option_37_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 50);
    i0.ɵɵtext(1, "All-Day Home D\u00E9cor & Furnishings");
    i0.ɵɵelementEnd();
} }
function LoginComponent_option_38_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 51);
    i0.ɵɵtext(1, "All-Day Pet Shoppe & Pet Care");
    i0.ɵɵelementEnd();
} }
function LoginComponent_option_39_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 52);
    i0.ɵɵtext(1, "All-Day Food & Agro Care");
    i0.ɵɵelementEnd();
} }
function LoginComponent_option_40_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 53);
    i0.ɵɵtext(1, "All-Day New & Used Automobile");
    i0.ɵɵelementEnd();
} }
function LoginComponent_option_41_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 54);
    i0.ɵɵtext(1, "All-Day Health & Medical Equipments ");
    i0.ɵɵelementEnd();
} }
function LoginComponent_option_42_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 55);
    i0.ɵɵtext(1, "All-Day Home Office & Automobile Services");
    i0.ɵɵelementEnd();
} }
function LoginComponent_option_43_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 56);
    i0.ɵɵtext(1, "All-Day Automobile Spare Parts ");
    i0.ɵɵelementEnd();
} }
function LoginComponent_option_44_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 57);
    i0.ɵɵtext(1, "All-Day Kitchen & Dining ");
    i0.ɵɵelementEnd();
} }
function LoginComponent_option_45_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 58);
    i0.ɵɵtext(1, "All-Day Electrical & Lighting");
    i0.ɵɵelementEnd();
} }
function LoginComponent_option_46_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 59);
    i0.ɵɵtext(1, "All-Day Mobile & Entertainment Gadgets ");
    i0.ɵɵelementEnd();
} }
function LoginComponent_option_47_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 60);
    i0.ɵɵtext(1, "All-Day Sanitary Paints & Furnishing");
    i0.ɵɵelementEnd();
} }
function LoginComponent_option_48_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 61);
    i0.ɵɵtext(1, "All-Day De-Evento ");
    i0.ɵɵelementEnd();
} }
function LoginComponent_option_49_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 62);
    i0.ɵɵtext(1, "All-Day Problend");
    i0.ɵɵelementEnd();
} }
function LoginComponent_div_50_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "Domain is required");
    i0.ɵɵelementEnd();
} }
function LoginComponent_div_50_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 45);
    i0.ɵɵtemplate(1, LoginComponent_div_50_div_1_Template, 2, 0, "div", 46);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r21 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r21.f.domain.errors.required);
} }
function LoginComponent_div_55_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "Mobile Number is required");
    i0.ɵɵelementEnd();
} }
function LoginComponent_div_55_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "Please, Enter 10 digit Mobile Number");
    i0.ɵɵelementEnd();
} }
function LoginComponent_div_55_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 45);
    i0.ɵɵtemplate(1, LoginComponent_div_55_div_1_Template, 2, 0, "div", 46);
    i0.ɵɵtemplate(2, LoginComponent_div_55_div_2_Template, 2, 0, "div", 46);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r22 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r22.f.mobile.errors.required);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r22.f.mobile.errors.pattern);
} }
function LoginComponent_div_60_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "Password is required");
    i0.ɵɵelementEnd();
} }
function LoginComponent_div_60_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "Please, Enter 10 digit Mobile Number");
    i0.ɵɵelementEnd();
} }
function LoginComponent_div_60_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 45);
    i0.ɵɵtemplate(1, LoginComponent_div_60_div_1_Template, 2, 0, "div", 46);
    i0.ɵɵtemplate(2, LoginComponent_div_60_div_2_Template, 2, 0, "div", 46);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r23 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r23.f.password.errors.required);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r23.f.password.errors.pattern);
} }
function LoginComponent_button_66_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 63);
    i0.ɵɵtext(1, "Sign In");
    i0.ɵɵelementEnd();
} }
function LoginComponent_button_67_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 64);
    i0.ɵɵelement(1, "span", 65);
    i0.ɵɵtext(2, " Loading... ");
    i0.ɵɵelementEnd();
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
export class LoginComponent {
    constructor(modalService, registerService, bsModalRef, router, spinner, dataservice, commonservice, toastr) {
        this.modalService = modalService;
        this.registerService = registerService;
        this.bsModalRef = bsModalRef;
        this.router = router;
        this.spinner = spinner;
        this.dataservice = dataservice;
        this.commonservice = commonservice;
        this.toastr = toastr;
        this.baseUrl = "https://www.shoppenation.in/alcoolretail/carryr/retail";
        this.showloader = true;
        this.loadingBtn = true;
        this.loginForm = new FormGroup({
            domain: new FormControl("", [Validators.required]),
            platform: new FormControl("", [Validators.required]),
            mobile: new FormControl("", [
                Validators.required,
                Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")
            ]),
            password: new FormControl("", [Validators.required]),
        });
    }
    close() {
        this.bsModalRef.hide();
    }
    ngOnInit() {
        this.showloader = false;
    }
    gotoRegister() {
        this.close();
        this.router.navigate(['/register']);
    }
    get f() {
        return this.loginForm.controls;
    }
    domainChange(e) {
        this.domainid = this.loginForm.value.domain;
        this.domainName = e.target.options[e.target.options.selectedIndex].text;
        console.log(this.domainid);
    }
    platformChange(e) {
        this.platformId = this.loginForm.value.platform;
        console.log(this.platformId);
    }
    login() {
        this.submitted = true;
        this.loadingBtn = false;
        if (this.loginForm.invalid) {
            this.loadingBtn = true;
            return;
        }
        if (this.platformId == 1) {
            this.toastr.error('All Day Shop is currently disabled');
            this.loadingBtn = true;
            return;
        }
        let loginData = {
            PlatformId: 2,
            UserDomainId: +this.domainid,
            UserLoginMobileNumber: +this.loginForm.value.mobile,
            UserLoginPassword: this.loginForm.value.password,
            MDR_App_Flg: this.platformId == 3 ? true : false,
            Distribution_App_Flg: this.platformId == 2 || this.platformId == 4 ? true : false
        };
        console.log(loginData);
        this.showloader = true;
        this.registerService.postCallHttp(this.baseUrl + '/ShoppenationMDRLogin', loginData).subscribe((data) => {
            console.log(data);
            if (data.Message == "Please enter correct credentials.") {
                this.showloader = false;
                this.loadingBtn = true;
                this.toastr.error('Please provide correct credentials');
                return;
            }
            // Pass login data
            this.commonservice.passLoginData(data);
            // ==========================
            // LOGIN EXPIRY (5 HOURS)
            // ==========================
            const expiryTime = new Date().getTime() + (5 * 60 * 60 * 1000);
            // const expiryTime = new Date().getTime() + (1 * 60 * 1000);
            // Add expiry directly into the login response object
            data.expiryTime = expiryTime;
            // Remove old session
            localStorage.removeItem('logindata');
            localStorage.removeItem('getDomainID');
            // Save updated login data
            localStorage.setItem('logindata', JSON.stringify(data));
            localStorage.setItem('getDomainID', this.domainid);
            this.showloader = false;
            this.loadingBtn = true;
            this.toastr.success("Login Successfully");
            this.router.navigate(['/dashboard']);
            this.close();
        }, (error) => {
            console.log(error);
            this.showloader = false;
            this.loadingBtn = true;
            this.toastr.error('Please provide correct credentials', '', {
                timeOut: 5000
            });
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(i0.ɵɵdirectiveInject(i1.BsModalService), i0.ɵɵdirectiveInject(i2.RegisterService), i0.ɵɵdirectiveInject(i1.BsModalRef), i0.ɵɵdirectiveInject(i3.Router), i0.ɵɵdirectiveInject(i4.NgxSpinnerService), i0.ɵɵdirectiveInject(i5.DataService), i0.ɵɵdirectiveInject(i6.CommonService), i0.ɵɵdirectiveInject(i7.ToastrService)); };
LoginComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: LoginComponent, selectors: [["app-login"]], features: [i0.ɵɵProvidersFeature([NgbModalConfig, NgbModal, NgbActiveModal, DataService])], decls: 70, vars: 39, consts: [[1, "modal-header"], [1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "login-field"], ["novalidate", "", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "domain"], ["formControlName", "platform", "id", "platform", 1, "form-control", 3, "ngClass", "change"], ["value", ""], ["value", "1"], ["value", "2"], ["value", "3"], ["value", "4"], ["class", "invalid-feedback", 4, "ngIf"], ["formControlName", "domain", "id", "domain", 1, "form-control", 3, "ngClass", "change"], ["value", "1", 4, "ngIf"], ["value", "2", 4, "ngIf"], ["value", "3", 4, "ngIf"], ["value", "4", 4, "ngIf"], ["value", "5", 4, "ngIf"], ["value", "6", 4, "ngIf"], ["value", "7", 4, "ngIf"], ["value", "8", 4, "ngIf"], ["value", "9", 4, "ngIf"], ["value", "11", 4, "ngIf"], ["value", "12", 4, "ngIf"], ["value", "13", 4, "ngIf"], ["value", "14", 4, "ngIf"], ["value", "15", 4, "ngIf"], ["value", "16", 4, "ngIf"], ["value", "17", 4, "ngIf"], ["value", "18", 4, "ngIf"], ["value", "19", 4, "ngIf"], ["value", "20", 4, "ngIf"], ["value", "10", 4, "ngIf"], ["formControlName", "mobile", "type", "text", "placeholder", "Mobile Number", 1, "form-control", 3, "ngClass"], ["for", "pwd"], ["formControlName", "password", "type", "password", "placeholder", "Enter password", "id", "pwd", 1, "form-control", 3, "ngClass"], [1, "form-forget"], [1, "bottom-btn"], ["type", "submit", "class", "btn custom-btn", 4, "ngIf"], ["class", "btn btn-success", "type", "button", "disabled", "", 4, "ngIf"], ["type", "button", 1, "btn", "custom-btn", 3, "click"], [1, "invalid-feedback"], [4, "ngIf"], ["value", "5"], ["value", "6"], ["value", "7"], ["value", "8"], ["value", "9"], ["value", "11"], ["value", "12"], ["value", "13"], ["value", "14"], ["value", "15"], ["value", "16"], ["value", "17"], ["value", "18"], ["value", "19"], ["value", "20"], ["value", "10"], ["type", "submit", 1, "btn", "custom-btn"], ["type", "button", "disabled", "", 1, "btn", "btn-success"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "spinner-border-sm"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "h4", 1);
        i0.ɵɵtext(2, "Login");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "button", 2);
        i0.ɵɵlistener("click", function LoginComponent_Template_button_click_3_listener() { return ctx.close(); });
        i0.ɵɵelementStart(4, "span", 3);
        i0.ɵɵtext(5, "\u00D7");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(6, "div", 4)(7, "div", 5)(8, "form", 6);
        i0.ɵɵlistener("ngSubmit", function LoginComponent_Template_form_ngSubmit_8_listener() { return ctx.login(); });
        i0.ɵɵelementStart(9, "div", 7)(10, "label", 8);
        i0.ɵɵtext(11, "Patform");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "select", 9);
        i0.ɵɵlistener("change", function LoginComponent_Template_select_change_12_listener($event) { return ctx.platformChange($event); });
        i0.ɵɵelementStart(13, "option", 10);
        i0.ɵɵtext(14, "Select");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(15, "option", 11);
        i0.ɵɵtext(16, "All Day Shop");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(17, "option", 12);
        i0.ɵɵtext(18, "All Day Distribution");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(19, "option", 13);
        i0.ɵɵtext(20, "All Day MDR-Connect");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(21, "option", 14);
        i0.ɵɵtext(22, "All Day Vending");
        i0.ɵɵelementEnd()();
        i0.ɵɵtemplate(23, LoginComponent_div_23_Template, 2, 1, "div", 15);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(24, "div", 7)(25, "label", 8);
        i0.ɵɵtext(26, "Application");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(27, "select", 16);
        i0.ɵɵlistener("change", function LoginComponent_Template_select_change_27_listener($event) { return ctx.domainChange($event); });
        i0.ɵɵelementStart(28, "option", 10);
        i0.ɵɵtext(29, "Select");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(30, LoginComponent_option_30_Template, 2, 0, "option", 17);
        i0.ɵɵtemplate(31, LoginComponent_option_31_Template, 2, 0, "option", 18);
        i0.ɵɵtemplate(32, LoginComponent_option_32_Template, 2, 0, "option", 19);
        i0.ɵɵtemplate(33, LoginComponent_option_33_Template, 2, 0, "option", 20);
        i0.ɵɵtemplate(34, LoginComponent_option_34_Template, 2, 0, "option", 21);
        i0.ɵɵtemplate(35, LoginComponent_option_35_Template, 2, 0, "option", 22);
        i0.ɵɵtemplate(36, LoginComponent_option_36_Template, 2, 0, "option", 23);
        i0.ɵɵtemplate(37, LoginComponent_option_37_Template, 2, 0, "option", 24);
        i0.ɵɵtemplate(38, LoginComponent_option_38_Template, 2, 0, "option", 25);
        i0.ɵɵtemplate(39, LoginComponent_option_39_Template, 2, 0, "option", 26);
        i0.ɵɵtemplate(40, LoginComponent_option_40_Template, 2, 0, "option", 27);
        i0.ɵɵtemplate(41, LoginComponent_option_41_Template, 2, 0, "option", 28);
        i0.ɵɵtemplate(42, LoginComponent_option_42_Template, 2, 0, "option", 29);
        i0.ɵɵtemplate(43, LoginComponent_option_43_Template, 2, 0, "option", 30);
        i0.ɵɵtemplate(44, LoginComponent_option_44_Template, 2, 0, "option", 31);
        i0.ɵɵtemplate(45, LoginComponent_option_45_Template, 2, 0, "option", 32);
        i0.ɵɵtemplate(46, LoginComponent_option_46_Template, 2, 0, "option", 33);
        i0.ɵɵtemplate(47, LoginComponent_option_47_Template, 2, 0, "option", 34);
        i0.ɵɵtemplate(48, LoginComponent_option_48_Template, 2, 0, "option", 35);
        i0.ɵɵtemplate(49, LoginComponent_option_49_Template, 2, 0, "option", 36);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(50, LoginComponent_div_50_Template, 2, 1, "div", 15);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(51, "div", 7)(52, "label");
        i0.ɵɵtext(53, "Mobile Number");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(54, "input", 37);
        i0.ɵɵtemplate(55, LoginComponent_div_55_Template, 3, 2, "div", 15);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(56, "div", 7)(57, "label", 38);
        i0.ɵɵtext(58, "Password:");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(59, "input", 39);
        i0.ɵɵtemplate(60, LoginComponent_div_60_Template, 3, 2, "div", 15);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(61, "label", 40)(62, "a");
        i0.ɵɵtext(63, "Forgot your password?");
        i0.ɵɵelementEnd()();
        i0.ɵɵelement(64, "br");
        i0.ɵɵelementStart(65, "div", 41);
        i0.ɵɵtemplate(66, LoginComponent_button_66_Template, 2, 0, "button", 42);
        i0.ɵɵtemplate(67, LoginComponent_button_67_Template, 3, 0, "button", 43);
        i0.ɵɵelementStart(68, "button", 44);
        i0.ɵɵlistener("click", function LoginComponent_Template_button_click_68_listener() { return ctx.gotoRegister(); });
        i0.ɵɵtext(69, "Sign Up");
        i0.ɵɵelementEnd()()()()();
    } if (rf & 2) {
        let tmp_4_0;
        let tmp_5_0;
        let tmp_6_0;
        let tmp_7_0;
        let tmp_8_0;
        let tmp_9_0;
        let tmp_10_0;
        let tmp_11_0;
        let tmp_12_0;
        let tmp_13_0;
        let tmp_14_0;
        let tmp_15_0;
        let tmp_16_0;
        let tmp_17_0;
        let tmp_18_0;
        let tmp_19_0;
        let tmp_20_0;
        let tmp_21_0;
        let tmp_22_0;
        let tmp_23_0;
        i0.ɵɵadvance(8);
        i0.ɵɵproperty("formGroup", ctx.loginForm);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(31, _c0, ctx.submitted && ctx.f.platform.errors));
        i0.ɵɵadvance(11);
        i0.ɵɵproperty("ngIf", ctx.submitted && ctx.f.platform.errors);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(33, _c0, ctx.submitted && ctx.f.domain.errors));
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", ((tmp_4_0 = ctx.loginForm.get("platform")) == null ? null : tmp_4_0.value) != 4);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ((tmp_5_0 = ctx.loginForm.get("platform")) == null ? null : tmp_5_0.value) != 4);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ((tmp_6_0 = ctx.loginForm.get("platform")) == null ? null : tmp_6_0.value) != 4);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ((tmp_7_0 = ctx.loginForm.get("platform")) == null ? null : tmp_7_0.value) != 4);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ((tmp_8_0 = ctx.loginForm.get("platform")) == null ? null : tmp_8_0.value) != 4);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ((tmp_9_0 = ctx.loginForm.get("platform")) == null ? null : tmp_9_0.value) != 4);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ((tmp_10_0 = ctx.loginForm.get("platform")) == null ? null : tmp_10_0.value) != 4);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ((tmp_11_0 = ctx.loginForm.get("platform")) == null ? null : tmp_11_0.value) != 4);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ((tmp_12_0 = ctx.loginForm.get("platform")) == null ? null : tmp_12_0.value) != 4);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ((tmp_13_0 = ctx.loginForm.get("platform")) == null ? null : tmp_13_0.value) != 4);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ((tmp_14_0 = ctx.loginForm.get("platform")) == null ? null : tmp_14_0.value) != 4);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ((tmp_15_0 = ctx.loginForm.get("platform")) == null ? null : tmp_15_0.value) != 4);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ((tmp_16_0 = ctx.loginForm.get("platform")) == null ? null : tmp_16_0.value) != 4);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ((tmp_17_0 = ctx.loginForm.get("platform")) == null ? null : tmp_17_0.value) != 4);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ((tmp_18_0 = ctx.loginForm.get("platform")) == null ? null : tmp_18_0.value) != 4);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ((tmp_19_0 = ctx.loginForm.get("platform")) == null ? null : tmp_19_0.value) != 4);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ((tmp_20_0 = ctx.loginForm.get("platform")) == null ? null : tmp_20_0.value) != 4);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ((tmp_21_0 = ctx.loginForm.get("platform")) == null ? null : tmp_21_0.value) != 4);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ((tmp_22_0 = ctx.loginForm.get("platform")) == null ? null : tmp_22_0.value) != 4);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ((tmp_23_0 = ctx.loginForm.get("platform")) == null ? null : tmp_23_0.value) == 4);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.submitted && ctx.f.domain.errors);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(35, _c0, ctx.submitted && ctx.f.mobile.errors));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.submitted && ctx.f.mobile.errors);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(37, _c0, ctx.submitted && ctx.f.password.errors));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.submitted && ctx.f.password.errors);
        i0.ɵɵadvance(6);
        i0.ɵɵproperty("ngIf", ctx.loadingBtn);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.loadingBtn);
    } }, dependencies: [i8.NgClass, i8.NgIf, i9.ɵNgNoValidate, i9.NgSelectOption, i9.ɵNgSelectMultipleOption, i9.DefaultValueAccessor, i9.SelectControlValueAccessor, i9.NgControlStatus, i9.NgControlStatusGroup, i9.FormGroupDirective, i9.FormControlName], styles: [".login-field[_ngcontent-%COMP%] {\r\n    padding: 0 10px;\r\n}\r\n\r\nlabel.form-forget[_ngcontent-%COMP%] {\r\n    float: right;\r\n    color: #007bff;\r\n    font-size: 12px;\r\n    padding: 3px;\r\n}\r\n\r\n.form-control[_ngcontent-%COMP%]   input[type=\"text\"][_ngcontent-%COMP%], form-control[_ngcontent-%COMP%]   input[type=\"password\"][_ngcontent-%COMP%] {\r\n    height: 40px;\r\n}\r\n\r\n\r\n\r\n.login-field[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n    font-weight: 600;\r\n}\r\n\r\nbutton.reg-close[_ngcontent-%COMP%] {\r\n    width: 30px;\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    font-size: 30px;\r\n}\r\nbutton.btn.custom-btn[type=\"submit\"][_ngcontent-%COMP%] {\r\n    background: #ba080b;\r\n}\r\n\r\n.login-field[_ngcontent-%COMP%]   .bottom-btn[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n    min-width: 130px;\r\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LoginComponent, [{
        type: Component,
        args: [{ selector: 'app-login', providers: [NgbModalConfig, NgbModal, NgbActiveModal, DataService], template: "<div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\">Login</h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"close()\">\n        <span aria-hidden=\"true\">&times;</span>\n    </button>\n</div>\n<div class=\"modal-body\">\n    <div class=\"login-field\">\n        <form [formGroup]=\"loginForm\" (ngSubmit)=\"login()\" novalidate>\n\n            <div class=\"form-group\">\n                <label for=\"domain\">Patform</label>\n                <select formControlName=\"platform\" class=\"form-control\" (change)=\"platformChange($event)\" id=\"platform\"\n                    [ngClass]=\"{ 'is-invalid': submitted && f.platform.errors }\">\n                    <option value=\"\">Select</option>\n                    <option value=\"1\">All Day Shop</option>\n                    <option value=\"2\">All Day Distribution</option>\n                    <option value=\"3\">All Day MDR-Connect</option>\n                    <option value=\"4\">All Day Vending</option>\n                </select>\n                <div *ngIf=\"submitted && f.platform.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.platform.errors.required\">Platform is required</div>\n                </div>\n            </div>\n\n            <div class=\"form-group\">\n                <label for=\"domain\">Application</label>\n                <select formControlName=\"domain\" class=\"form-control\" (change)=\"domainChange($event)\" id=\"domain\"\n                    [ngClass]=\"{ 'is-invalid': submitted && f.domain.errors }\">\n                    <option value=\"\">Select</option>\n                    <option *ngIf=\"loginForm.get('platform')?.value != 4\" value=\"1\">Admediaworld</option>\n                    <option *ngIf=\"loginForm.get('platform')?.value != 4\" value=\"2\">All-Day Kitchen</option>\n                    <option *ngIf=\"loginForm.get('platform')?.value != 4\" value=\"3\">All-Day Kirana</option>\n                    <option *ngIf=\"loginForm.get('platform')?.value != 4\" value=\"4\">All-Day Fashion</option>\n                    <option *ngIf=\"loginForm.get('platform')?.value != 4\" value=\"5\">All-Day Electronics & Large Appliances</option>\n                    <option *ngIf=\"loginForm.get('platform')?.value != 4\" value=\"6\">All-Day Home & Office Furnitures</option>\n                    <option *ngIf=\"loginForm.get('platform')?.value != 4\" value=\"7\">All-Day Pharma & Medicos</option>\n                    <option *ngIf=\"loginForm.get('platform')?.value != 4\" value=\"8\">All-Day Home D\u00E9cor & Furnishings</option>\n                    <option *ngIf=\"loginForm.get('platform')?.value != 4\" value=\"9\">All-Day Pet Shoppe & Pet Care</option>                    \n                    <option *ngIf=\"loginForm.get('platform')?.value != 4\" value=\"11\">All-Day Food & Agro Care</option>\n                    <option *ngIf=\"loginForm.get('platform')?.value != 4\" value=\"12\">All-Day New & Used Automobile</option>\n                    <option *ngIf=\"loginForm.get('platform')?.value != 4\" value=\"13\">All-Day Health & Medical Equipments </option>\n                    <option *ngIf=\"loginForm.get('platform')?.value != 4\" value=\"14\">All-Day Home Office & Automobile Services</option>\n                    <option *ngIf=\"loginForm.get('platform')?.value != 4\" value=\"15\">All-Day Automobile Spare Parts </option>\n                    <option *ngIf=\"loginForm.get('platform')?.value != 4\" value=\"16\">All-Day Kitchen & Dining </option>\n                    <option *ngIf=\"loginForm.get('platform')?.value != 4\" value=\"17\">All-Day Electrical & Lighting</option>\n                    <option *ngIf=\"loginForm.get('platform')?.value != 4\" value=\"18\">All-Day Mobile & Entertainment Gadgets </option>\n                    <option *ngIf=\"loginForm.get('platform')?.value != 4\" value=\"19\">All-Day Sanitary Paints & Furnishing</option>\n                    <option *ngIf=\"loginForm.get('platform')?.value != 4\" value=\"20\">All-Day De-Evento </option>\n\n                    <option *ngIf=\"loginForm.get('platform')?.value == 4\" value=\"10\">All-Day Problend</option>\n                </select>\n                <div *ngIf=\"submitted && f.domain.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.domain.errors.required\">Domain is required</div>\n\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label>Mobile Number</label>\n                <input formControlName=\"mobile\" type=\"text\" class=\"form-control\" placeholder=\"Mobile Number\"\n                    [ngClass]=\"{ 'is-invalid': submitted && f.mobile.errors }\">\n                <div *ngIf=\"submitted && f.mobile.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.mobile.errors.required\">Mobile Number is required</div>\n                    <div *ngIf=\"f.mobile.errors.pattern\">Please, Enter 10 digit Mobile Number</div>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"pwd\">Password:</label>\n                <input formControlName=\"password\" type=\"password\" class=\"form-control\" placeholder=\"Enter password\"\n                    id=\"pwd\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\">\n                <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.password.errors.required\">Password is required</div>\n                    <div *ngIf=\"f.password.errors.pattern\">Please, Enter 10 digit Mobile Number</div>\n                </div>\n            </div>\n            <!-- routerLink=\"/dashboard\" -->\n\n            <label class=\"form-forget\">\n                <a>Forgot your password?</a>\n            </label>\n            <br>\n            <div class=\"bottom-btn\">\n                <button type=\"submit\" class=\"btn custom-btn\" *ngIf=\"loadingBtn\">Sign In</button>\n                <button class=\"btn btn-success\" type=\"button\" disabled *ngIf=\"!loadingBtn\">\n                    <span class=\"spinner-border spinner-border-sm\" role=\"status\" aria-hidden=\"true\"></span>\n                    Loading...\n                </button>\n                <button type=\"button\" class=\"btn custom-btn\" (click)=\"gotoRegister()\">Sign Up</button>\n            </div>\n        </form>\n    </div>\n</div>\n\n<!-- <ng-template #registerModal>\n  <button type=\"button\" class=\"close reg-close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n  <app-register></app-register>\n\n</ng-template> -->", styles: ["\r\n  \r\n  .login-field {\r\n    padding: 0 10px;\r\n}\r\n\r\nlabel.form-forget {\r\n    float: right;\r\n    color: #007bff;\r\n    font-size: 12px;\r\n    padding: 3px;\r\n}\r\n\r\n.form-control input[type=\"text\"],\r\nform-control input[type=\"password\"] {\r\n    height: 40px;\r\n}\r\n\r\n/* button.close {\r\n    margin: 10px;\r\n    font-size: 30px;\r\n} */\r\n\r\n.login-field .form-group label {\r\n    font-weight: 600;\r\n}\r\n\r\nbutton.reg-close {\r\n    width: 30px;\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    font-size: 30px;\r\n}\r\nbutton.btn.custom-btn[type=\"submit\"] {\r\n    background: #ba080b;\r\n}\r\n\r\n.login-field .bottom-btn .btn {\r\n    min-width: 130px;\r\n}\r\n"] }]
    }], function () { return [{ type: i1.BsModalService }, { type: i2.RegisterService }, { type: i1.BsModalRef }, { type: i3.Router }, { type: i4.NgxSpinnerService }, { type: i5.DataService }, { type: i6.CommonService }, { type: i7.ToastrService }]; }, null); })();
//# sourceMappingURL=login.component.js.map