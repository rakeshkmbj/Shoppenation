import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "src/app/services/api.service";
import * as i2 from "ngx-bootstrap/modal";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/router";
import * as i5 from "ngx-toastr";
import * as i6 from "ngx-spinner";
import * as i7 from "../../razorpay.service";
import * as i8 from "src/app/pos-system/services/modal.service";
import * as i9 from "@angular/common";
function CardAccessAndPosManagementComponent_img_85_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 44);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("src", ctx_r0.cardDetails.IMAGE, i0.ɵɵsanitizeUrl);
} }
function CardAccessAndPosManagementComponent_div_86_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 45);
    i0.ɵɵelement(1, "i", 46);
    i0.ɵɵelementEnd();
} }
export class CardAccessAndPosManagementComponent {
    constructor(apiService, modalService, formBuilder, router, toastr, spinner, razorpayService, posModalService) {
        this.apiService = apiService;
        this.modalService = modalService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.toastr = toastr;
        this.spinner = spinner;
        this.razorpayService = razorpayService;
        this.posModalService = posModalService;
        this.cardAccessForm = this.formBuilder.group({
            mobilenumber: ['']
        });
        this.cardDetails = {
            REGID: '',
            VALID: true,
            SUSPENDED: false,
            GENERATED_FROM: '',
            FIRST_NAME: '',
            LAST_NAME: '',
            MOBILE: '',
            IMAGE: '',
            PASSPORT_ID: ''
        };
        this.accountid = this.apiService.requiredLoginData.accountid;
        this.subaccountid = this.apiService.requiredLoginData.subaccountid;
        this.storeid = this.apiService.requiredLoginData.storeid;
        this.storeName = this.apiService.requiredLoginData.storeName;
        this.domainid = this.apiService.requiredLoginData.domainid;
        this.getlogindata = localStorage.getItem('logindata');
        this.getlogindata = JSON.parse(this.getlogindata);
    }
    ngOnInit() {
    }
    getCardIdentification() {
        // Call API using cardTagId
    }
    // openBrandCommercePOS(): void {
    //   this.router.navigate(['/pos']);
    // }
    openBrandCommercePOS() {
        this.router.navigate(['/pos']);
        setTimeout(() => {
            if (document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen();
            }
        }, 200);
    }
}
CardAccessAndPosManagementComponent.ɵfac = function CardAccessAndPosManagementComponent_Factory(t) { return new (t || CardAccessAndPosManagementComponent)(i0.ɵɵdirectiveInject(i1.ApiService), i0.ɵɵdirectiveInject(i2.BsModalService), i0.ɵɵdirectiveInject(i3.FormBuilder), i0.ɵɵdirectiveInject(i4.Router), i0.ɵɵdirectiveInject(i5.ToastrService), i0.ɵɵdirectiveInject(i6.NgxSpinnerService), i0.ɵɵdirectiveInject(i7.RazorpayService), i0.ɵɵdirectiveInject(i8.ModalService)); };
CardAccessAndPosManagementComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CardAccessAndPosManagementComponent, selectors: [["app-card-access-and-pos-management"]], decls: 107, vars: 9, consts: [[1, "content"], [1, "heading-title"], [3, "formGroup"], [1, "card", "mb-4"], [1, "card-body"], [1, "row", "align-items-center"], [1, "col-lg-5"], [1, "sub-title"], ["type", "text", "placeholder", "Enter Mobile Number", "formControlName", "mobilenumber", 1, "form-control", "form-control-lg"], ["type", "button", 1, "btn", "custom-btnn", "w-100", "mt-4", 3, "click"], [1, "fa", "fa-credit-card", "me-2"], [1, "col-lg-2", "text-center"], [1, "or-divider"], [1, "col-lg-5", "text-center"], [1, "qr-box"], ["src", "assets/images/sampleQR.png", 1, "img-fluid"], ["type", "button", 1, "btn", "custom-btnn", "mt-4"], [1, "fa", "fa-qrcode", "me-2"], [1, "card", "mt-4"], [1, "card-header", "section-header"], [1, "fa", "fa-user-circle", "me-2"], [1, "row"], [1, "col-lg-8"], [1, "col-md-6", "mb-4"], [1, "status-container"], [1, "status-item"], [1, "status-badge", "success"], [1, "fa", "fa-check"], [1, "fa", "fa-check-circle"], [1, "col-lg-4", "text-center"], [1, "holder-image"], [3, "src", 4, "ngIf"], ["class", "placeholder-image", 4, "ngIf"], [1, "row", "mt-4", "align-items-start"], [1, "col-lg-4"], ["type", "button", 1, "btn", "btn-dark", "authenticate-btn"], [1, "fa", "fa-user-check", "me-2"], [1, "validation-section"], [1, "validation-label"], [1, "otp-box", "mt-2"], ["maxlength", "1", 1, "otp-input"], ["type", "button", 1, "btn", "custom-btnn", "ms-2", "mt-4"], [1, "d-flex", "justify-content-end", "gap-8", "mt-4"], ["type", "button", 1, "btn", "custom-btnn", 3, "click"], [3, "src"], [1, "placeholder-image"], [1, "fa", "fa-user", "fa-5x"]], template: function CardAccessAndPosManagementComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "h1", 1);
        i0.ɵɵtext(2, "Card Access Management");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "form", 2)(4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "div", 6)(8, "h5", 7);
        i0.ɵɵtext(9, " Registered User Mobile ");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(10, "input", 8);
        i0.ɵɵelementStart(11, "button", 9);
        i0.ɵɵlistener("click", function CardAccessAndPosManagementComponent_Template_button_click_11_listener() { return ctx.getCardIdentification(); });
        i0.ɵɵelement(12, "i", 10);
        i0.ɵɵtext(13, " Get Card Identification ");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(14, "div", 11)(15, "div", 12)(16, "span");
        i0.ɵɵtext(17, "OR");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(18, "div", 13)(19, "h5", 7);
        i0.ɵɵtext(20, " Scan QR Code ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(21, "div", 14);
        i0.ɵɵelement(22, "img", 15);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(23, "button", 16);
        i0.ɵɵelement(24, "i", 17);
        i0.ɵɵtext(25, " Scan QR for Identification ");
        i0.ɵɵelementEnd()()()()();
        i0.ɵɵelementStart(26, "div", 18)(27, "div", 19);
        i0.ɵɵelement(28, "i", 20);
        i0.ɵɵtext(29, " User Identity Details ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(30, "div", 4)(31, "div", 21)(32, "div", 22)(33, "div", 21)(34, "div", 23)(35, "label");
        i0.ɵɵtext(36, "Reg ID");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(37, "h6");
        i0.ɵɵtext(38);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(39, "div", 23)(40, "label");
        i0.ɵɵtext(41, "Passport ID");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(42, "h6");
        i0.ɵɵtext(43);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(44, "div", 23)(45, "label");
        i0.ɵɵtext(46, "First Name");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(47, "h6");
        i0.ɵɵtext(48);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(49, "div", 23)(50, "label");
        i0.ɵɵtext(51, "Last Name");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(52, "h6");
        i0.ɵɵtext(53);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(54, "div", 23)(55, "label");
        i0.ɵɵtext(56, "Mobile Number");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(57, "h6");
        i0.ɵɵtext(58);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(59, "div", 23)(60, "label");
        i0.ɵɵtext(61, "Generated From");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(62, "h6");
        i0.ɵɵtext(63);
        i0.ɵɵelementEnd()()();
        i0.ɵɵelement(64, "hr");
        i0.ɵɵelementStart(65, "div", 24)(66, "div", 25)(67, "label");
        i0.ɵɵtext(68, "Validity");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(69, "span", 26);
        i0.ɵɵelement(70, "i", 27);
        i0.ɵɵtext(71, " Active ");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(72, "div", 25)(73, "label");
        i0.ɵɵtext(74, "Suspended");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(75, "span", 26);
        i0.ɵɵtext(76, " No ");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(77, "div", 25)(78, "label");
        i0.ɵɵtext(79, "Verification");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(80, "span", 26);
        i0.ɵɵelement(81, "i", 28);
        i0.ɵɵtext(82, " Verified User ");
        i0.ɵɵelementEnd()()()();
        i0.ɵɵelementStart(83, "div", 29)(84, "div", 30);
        i0.ɵɵtemplate(85, CardAccessAndPosManagementComponent_img_85_Template, 1, 1, "img", 31);
        i0.ɵɵtemplate(86, CardAccessAndPosManagementComponent_div_86_Template, 2, 0, "div", 32);
        i0.ɵɵelementEnd()()();
        i0.ɵɵelement(87, "hr");
        i0.ɵɵelementStart(88, "div", 33)(89, "div", 34)(90, "button", 35);
        i0.ɵɵelement(91, "i", 36);
        i0.ɵɵtext(92, " Authenticate User ");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(93, "div", 22)(94, "div", 37)(95, "label", 38);
        i0.ɵɵtext(96, " Validation Reference ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(97, "div", 39);
        i0.ɵɵelement(98, "input", 40)(99, "input", 40)(100, "input", 40)(101, "input", 40);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(102, "button", 41);
        i0.ɵɵtext(103, " Validate ");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(104, "div", 42)(105, "button", 43);
        i0.ɵɵlistener("click", function CardAccessAndPosManagementComponent_Template_button_click_105_listener() { return ctx.openBrandCommercePOS(); });
        i0.ɵɵtext(106, " Take user order on terminal ");
        i0.ɵɵelementEnd()()()()()()()();
    } if (rf & 2) {
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("formGroup", ctx.cardAccessForm);
        i0.ɵɵadvance(35);
        i0.ɵɵtextInterpolate(ctx.cardDetails.REGID);
        i0.ɵɵadvance(5);
        i0.ɵɵtextInterpolate(ctx.cardDetails.PASSPORT_ID);
        i0.ɵɵadvance(5);
        i0.ɵɵtextInterpolate(ctx.cardDetails.FIRST_NAME);
        i0.ɵɵadvance(5);
        i0.ɵɵtextInterpolate(ctx.cardDetails.LAST_NAME);
        i0.ɵɵadvance(5);
        i0.ɵɵtextInterpolate(ctx.cardDetails.MOBILE);
        i0.ɵɵadvance(5);
        i0.ɵɵtextInterpolate(ctx.cardDetails.GENERATED_FROM);
        i0.ɵɵadvance(22);
        i0.ɵɵproperty("ngIf", ctx.cardDetails.IMAGE);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.cardDetails.IMAGE);
    } }, dependencies: [i9.NgIf, i3.ɵNgNoValidate, i3.DefaultValueAccessor, i3.NgControlStatus, i3.NgControlStatusGroup, i3.FormGroupDirective, i3.FormControlName], styles: [".section-header[_ngcontent-%COMP%] {\r\n    background: #ffffff;\r\n    border-bottom: 2px solid #f3f3f3;\r\n    font-size: 20px;\r\n    font-weight: 600;\r\n    color: #f58220;\r\n    padding: 18px 25px;\r\n}\r\n\r\n.card-body[_ngcontent-%COMP%] {\r\n    padding: 30px;\r\n}\r\n\r\n\r\n\r\n.sub-title[_ngcontent-%COMP%] {\r\n    font-weight: 600;\r\n    color: #444;\r\n    margin-bottom: 20px;\r\n}\r\n\r\nlabel[_ngcontent-%COMP%] {\r\n    font-weight: 600;\r\n    color: #666;\r\n    margin-bottom: 6px;\r\n}\r\n\r\n\r\n\r\n.form-control-lg[_ngcontent-%COMP%] {\r\n    height: 52px;\r\n    border-radius: 8px;\r\n    border: 1px solid #d6d6d6;\r\n    font-size: 15px;\r\n}\r\n\r\n.form-control-lg[_ngcontent-%COMP%]:focus {\r\n    border-color: #f58220;\r\n    box-shadow: 0 0 0 0.15rem rgba(245, 130, 32, .25);\r\n}\r\n\r\n\r\n\r\n.custom-btnn[_ngcontent-%COMP%] {\r\n    background: #b52817;\r\n    color: #fff;\r\n    border: none;\r\n    height: 48px;\r\n    border-radius: 8px;\r\n    font-weight: 600;\r\n    padding: 0 25px;\r\n    transition: .3s;\r\n}\r\n\r\n\r\n\r\n.or-divider[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    height: 100%;\r\n}\r\n\r\n.or-divider[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    width: 70px;\r\n    height: 70px;\r\n    border-radius: 50%;\r\n    border: 2px solid #f58220;\r\n    color: #f58220;\r\n    font-size: 22px;\r\n    font-weight: 700;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n\r\n\r\n.qr-box[_ngcontent-%COMP%] {\r\n    width: 180px;\r\n    height: 180px;\r\n    border: 2px dashed #d9d9d9;\r\n    border-radius: 12px;\r\n    margin: auto;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    background: #fafafa;\r\n}\r\n\r\n.qr-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 150px;\r\n    height: 150px;\r\n    object-fit: contain;\r\n}\r\n\r\n\r\n\r\n.status-container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    gap: 30px;\r\n    align-items: flex-start;\r\n    margin-top: 10px;\r\n}\r\n\r\n.status-item[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 10px;\r\n}\r\n\r\n.status-item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n    font-size: 18px;\r\n    font-weight: 600;\r\n    color: #4b5563;\r\n    margin: 0;\r\n}\r\n\r\n.status-badge[_ngcontent-%COMP%] {\r\n    display: inline-flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 8px;\r\n\r\n    padding: 10px 22px;\r\n\r\n    border-radius: 30px;\r\n\r\n    font-size: 12px;\r\n    font-weight: 600;\r\n\r\n    min-height: 46px;\r\n    width: fit-content;\r\n\r\n    transition: all .3s ease;\r\n}\r\n\r\n.status-badge[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    color: #ffffff;\r\n}\r\n\r\n.status-badge.success[_ngcontent-%COMP%] {\r\n    background: #4CAF50;\r\n    color: #ffffff;\r\n}\r\n\r\n.status-badge.danger[_ngcontent-%COMP%] {\r\n    background: #dc3545;\r\n    color: #ffffff;\r\n}\r\n\r\n.status-badge.warning[_ngcontent-%COMP%] {\r\n    background: #f0ad4e;\r\n    color: #ffffff;\r\n}\r\n\r\n.status-badge.info[_ngcontent-%COMP%] {\r\n    background: #0d6efd;\r\n    color: #ffffff;\r\n}\r\n\r\n.status-badge[_ngcontent-%COMP%]:hover {\r\n    transform: translateY(-2px);\r\n    box-shadow: 0 5px 12px rgba(0, 0, 0, .15);\r\n}\r\n\r\n\r\n\r\n@media (max-width: 768px) {\r\n\r\n    .status-container[_ngcontent-%COMP%] {\r\n        flex-direction: column;\r\n        gap: 20px;\r\n    }\r\n\r\n    .status-item[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n    }\r\n\r\n    .status-badge[_ngcontent-%COMP%] {\r\n        width: fit-content;\r\n    }\r\n}\r\n\r\n\r\n\r\n.card-body[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\r\n    margin-top: 5px;\r\n    font-size: 17px;\r\n    font-weight: 600;\r\n    color: #222;\r\n}\r\n\r\n\r\n\r\n.authentication-box[_ngcontent-%COMP%] {\r\n    margin-top: 35px;\r\n    border-top: 1px solid #ececec;\r\n    padding-top: 25px;\r\n}\r\n\r\n.authentication-box[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\r\n    margin-bottom: 20px;\r\n    color: #f58220;\r\n    font-weight: 600;\r\n}\r\n\r\n\r\n\r\n.otp-box[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    gap: 12px;\r\n    margin-top: 10px;\r\n}\r\n\r\n.otp-input[_ngcontent-%COMP%] {\r\n    width: 55px;\r\n    height: 55px;\r\n    text-align: center;\r\n    font-size: 22px;\r\n    font-weight: 600;\r\n    border-radius: 10px;\r\n    border: 2px solid #d7d7d7;\r\n    transition: .3s;\r\n}\r\n\r\n.otp-input[_ngcontent-%COMP%]:focus {\r\n    border-color: #f58220;\r\n    outline: none;\r\n    box-shadow: 0 0 8px rgba(245, 130, 32, .2);\r\n}\r\n\r\n\r\n\r\n.holder-image[_ngcontent-%COMP%] {\r\n    width: 220px;\r\n    height: 220px;\r\n    margin: auto;\r\n    border-radius: 12px;\r\n    border: 2px solid #ececec;\r\n    overflow: hidden;\r\n    background: #fafafa;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.holder-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 100%;\r\n    object-fit: cover;\r\n}\r\n\r\n.placeholder-image[_ngcontent-%COMP%] {\r\n    color: #b8b8b8;\r\n}\r\n\r\n\r\n\r\n.verified-box[_ngcontent-%COMP%] {\r\n    margin-top: 20px;\r\n}\r\n\r\n.verified-box[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\r\n    font-size: 15px;\r\n    padding: 12px 24px;\r\n}\r\n\r\n\r\n\r\n@media (max-width: 991px) {\r\n\r\n    .or-divider[_ngcontent-%COMP%] {\r\n        margin: 30px 0;\r\n    }\r\n\r\n    .status-row[_ngcontent-%COMP%] {\r\n        flex-direction: column;\r\n        align-items: flex-start;\r\n        gap: 12px;\r\n    }\r\n\r\n    .holder-image[_ngcontent-%COMP%] {\r\n        width: 180px;\r\n        height: 180px;\r\n    }\r\n\r\n    .authentication-box[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] {\r\n        margin-bottom: 20px;\r\n    }\r\n\r\n}\r\n\r\n@media (max-width: 576px) {\r\n\r\n    .heading-title[_ngcontent-%COMP%] {\r\n        font-size: 24px;\r\n    }\r\n\r\n    .card-body[_ngcontent-%COMP%] {\r\n        padding: 20px;\r\n    }\r\n\r\n    .otp-box[_ngcontent-%COMP%] {\r\n        justify-content: center;\r\n    }\r\n\r\n    .otp-input[_ngcontent-%COMP%] {\r\n        width: 45px;\r\n        height: 45px;\r\n    }\r\n\r\n    .holder-image[_ngcontent-%COMP%] {\r\n        width: 150px;\r\n        height: 150px;\r\n    }\r\n\r\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CardAccessAndPosManagementComponent, [{
        type: Component,
        args: [{ selector: 'app-card-access-and-pos-management', template: "<div class=\"content\">\n\n    <h1 class=\"heading-title\">Card Access Management</h1>\n\n    <form [formGroup]=\"cardAccessForm\">\n\n        <!-- ======================= -->\n        <!-- Identification Section -->\n        <!-- ======================= -->\n\n        <div class=\"card mb-4\">\n\n            <div class=\"card-body\">\n\n                <div class=\"row align-items-center\">\n\n                    <!-- RFID -->\n\n                    <div class=\"col-lg-5\">\n\n                        <h5 class=\"sub-title\">\n                            Registered User Mobile\n                        </h5>\n\n                        <input type=\"text\" class=\"form-control form-control-lg\" placeholder=\"Enter Mobile Number\"\n                            formControlName=\"mobilenumber\">\n\n                        <button type=\"button\" class=\"btn custom-btnn w-100 mt-4\" (click)=\"getCardIdentification()\">\n\n                            <i class=\"fa fa-credit-card me-2\"></i>\n\n                            Get Card Identification\n\n                        </button>\n\n                    </div>\n\n                    <!-- Divider -->\n\n                    <div class=\"col-lg-2 text-center\">\n\n                        <div class=\"or-divider\">\n\n                            <span>OR</span>\n\n                        </div>\n\n                    </div>\n\n                    <!-- QR -->\n\n                    <div class=\"col-lg-5 text-center\">\n\n                        <h5 class=\"sub-title\">\n\n                            Scan QR Code\n\n                        </h5>\n\n                        <div class=\"qr-box\">\n\n                            <img src=\"assets/images/sampleQR.png\" class=\"img-fluid\">\n\n                        </div>\n\n                        <button type=\"button\" class=\"btn custom-btnn mt-4\">\n\n                            <i class=\"fa fa-qrcode me-2\"></i>\n\n                            Scan QR for Identification\n\n                        </button>\n\n                    </div>\n\n                </div>\n\n            </div>\n\n        </div>\n\n        <!-- ======================= -->\n        <!-- User Details -->\n        <!-- ======================= -->\n\n        <div class=\"card mt-4\">\n\n            <div class=\"card-header section-header\">\n                <i class=\"fa fa-user-circle me-2\"></i>\n                User Identity Details\n            </div>\n\n            <div class=\"card-body\">\n\n                <div class=\"row\">\n\n                    <!-- Left Details -->\n\n                    <div class=\"col-lg-8\">\n\n                        <div class=\"row\">\n\n                            <div class=\"col-md-6 mb-4\">\n                                <label>Reg ID</label>\n                                <h6>{{cardDetails.REGID}}</h6>\n                            </div>\n\n                            <div class=\"col-md-6 mb-4\">\n                                <label>Passport ID</label>\n                                <h6>{{cardDetails.PASSPORT_ID}}</h6>\n                            </div>\n\n                            <div class=\"col-md-6 mb-4\">\n                                <label>First Name</label>\n                                <h6>{{cardDetails.FIRST_NAME}}</h6>\n                            </div>\n\n                            <div class=\"col-md-6 mb-4\">\n                                <label>Last Name</label>\n                                <h6>{{cardDetails.LAST_NAME}}</h6>\n                            </div>\n\n                            <div class=\"col-md-6 mb-4\">\n                                <label>Mobile Number</label>\n                                <h6>{{cardDetails.MOBILE}}</h6>\n                            </div>\n\n                            <div class=\"col-md-6 mb-4\">\n                                <label>Generated From</label>\n                                <h6>{{cardDetails.GENERATED_FROM}}</h6>\n                            </div>\n\n                        </div>\n\n                        <hr>\n\n                        <div class=\"status-container\">\n\n                            <!-- Validity -->\n                            <div class=\"status-item\">\n\n                                <label>Validity</label>\n\n                                <span class=\"status-badge success\">\n                                    <i class=\"fa fa-check\"></i>\n                                    Active\n                                </span>\n\n                            </div>\n\n                            <!-- Suspended -->\n                            <div class=\"status-item\">\n\n                                <label>Suspended</label>\n\n                                <span class=\"status-badge success\">\n                                    No\n                                </span>\n\n                            </div>\n\n                            <!-- Verification -->\n                            <div class=\"status-item\">\n\n                                <label>Verification</label>\n\n                                <span class=\"status-badge success\">\n                                    <i class=\"fa fa-check-circle\"></i>\n                                    Verified User\n                                </span>\n\n                            </div>\n\n                        </div>\n\n                    </div>\n\n                    <!-- Right Image -->\n\n                    <div class=\"col-lg-4 text-center\">\n\n                        <div class=\"holder-image\">\n\n                            <img *ngIf=\"cardDetails.IMAGE\" [src]=\"cardDetails.IMAGE\">\n\n                            <div *ngIf=\"!cardDetails.IMAGE\" class=\"placeholder-image\">\n\n                                <i class=\"fa fa-user fa-5x\"></i>\n\n                            </div>\n\n                        </div>\n\n                    </div>\n\n                </div>\n\n                <hr>\n\n                <div class=\"row mt-4 align-items-start\">\n\n                    <!-- Left Side -->\n                    <div class=\"col-lg-4\">\n\n                        <button class=\"btn btn-dark authenticate-btn\" type=\"button\">\n\n                            <i class=\"fa fa-user-check me-2\"></i>\n                            Authenticate User\n\n                        </button>\n\n                    </div>\n\n                    <!-- Right Side -->\n                    <div class=\"col-lg-8\">\n\n                        <!-- OTP Row -->\n\n                        <div class=\"validation-section\">\n\n                            <label class=\"validation-label\">\n\n                                Validation Reference\n\n                            </label>\n\n                            <div class=\"otp-box mt-2\">\n\n                                <input maxlength=\"1\" class=\"otp-input\">\n\n                                <input maxlength=\"1\" class=\"otp-input\">\n\n                                <input maxlength=\"1\" class=\"otp-input\">\n\n                                <input maxlength=\"1\" class=\"otp-input\">\n\n                            </div>\n\n                            <button class=\"btn custom-btnn ms-2 mt-4\" type=\"button\">\n\n                                Validate\n\n                            </button>\n\n\n                        </div>\n\n                        <!-- Buttons Row -->\n\n                        <div class=\"d-flex justify-content-end gap-8 mt-4\">\n\n                            <button class=\"btn custom-btnn\" type=\"button\" (click)=\"openBrandCommercePOS()\">\n\n                                Take user order on terminal\n\n                            </button>\n\n                        </div>\n\n                    </div>\n\n                </div>\n\n            </div>\n\n        </div>\n    </form>\n\n</div>", styles: ["/* ==========================================\r\n   Cards\r\n========================================== */\r\n\r\n.section-header {\r\n    background: #ffffff;\r\n    border-bottom: 2px solid #f3f3f3;\r\n    font-size: 20px;\r\n    font-weight: 600;\r\n    color: #f58220;\r\n    padding: 18px 25px;\r\n}\r\n\r\n.card-body {\r\n    padding: 30px;\r\n}\r\n\r\n/* ==========================================\r\n   Titles\r\n========================================== */\r\n\r\n.sub-title {\r\n    font-weight: 600;\r\n    color: #444;\r\n    margin-bottom: 20px;\r\n}\r\n\r\nlabel {\r\n    font-weight: 600;\r\n    color: #666;\r\n    margin-bottom: 6px;\r\n}\r\n\r\n/* ==========================================\r\n   Input\r\n========================================== */\r\n\r\n.form-control-lg {\r\n    height: 52px;\r\n    border-radius: 8px;\r\n    border: 1px solid #d6d6d6;\r\n    font-size: 15px;\r\n}\r\n\r\n.form-control-lg:focus {\r\n    border-color: #f58220;\r\n    box-shadow: 0 0 0 0.15rem rgba(245, 130, 32, .25);\r\n}\r\n\r\n/* ==========================================\r\n   Buttons\r\n========================================== */\r\n\r\n.custom-btnn {\r\n    background: #b52817;\r\n    color: #fff;\r\n    border: none;\r\n    height: 48px;\r\n    border-radius: 8px;\r\n    font-weight: 600;\r\n    padding: 0 25px;\r\n    transition: .3s;\r\n}\r\n\r\n/* ==========================================\r\n   OR Divider\r\n========================================== */\r\n\r\n.or-divider {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    height: 100%;\r\n}\r\n\r\n.or-divider span {\r\n    width: 70px;\r\n    height: 70px;\r\n    border-radius: 50%;\r\n    border: 2px solid #f58220;\r\n    color: #f58220;\r\n    font-size: 22px;\r\n    font-weight: 700;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n/* ==========================================\r\n   QR\r\n========================================== */\r\n\r\n.qr-box {\r\n    width: 180px;\r\n    height: 180px;\r\n    border: 2px dashed #d9d9d9;\r\n    border-radius: 12px;\r\n    margin: auto;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    background: #fafafa;\r\n}\r\n\r\n.qr-box img {\r\n    width: 150px;\r\n    height: 150px;\r\n    object-fit: contain;\r\n}\r\n\r\n/*====================================\r\n    Status Section\r\n====================================*/\r\n\r\n.status-container {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    gap: 30px;\r\n    align-items: flex-start;\r\n    margin-top: 10px;\r\n}\r\n\r\n.status-item {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 10px;\r\n}\r\n\r\n.status-item label {\r\n    font-size: 18px;\r\n    font-weight: 600;\r\n    color: #4b5563;\r\n    margin: 0;\r\n}\r\n\r\n.status-badge {\r\n    display: inline-flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 8px;\r\n\r\n    padding: 10px 22px;\r\n\r\n    border-radius: 30px;\r\n\r\n    font-size: 12px;\r\n    font-weight: 600;\r\n\r\n    min-height: 46px;\r\n    width: fit-content;\r\n\r\n    transition: all .3s ease;\r\n}\r\n\r\n.status-badge i {\r\n    color: #ffffff;\r\n}\r\n\r\n.status-badge.success {\r\n    background: #4CAF50;\r\n    color: #ffffff;\r\n}\r\n\r\n.status-badge.danger {\r\n    background: #dc3545;\r\n    color: #ffffff;\r\n}\r\n\r\n.status-badge.warning {\r\n    background: #f0ad4e;\r\n    color: #ffffff;\r\n}\r\n\r\n.status-badge.info {\r\n    background: #0d6efd;\r\n    color: #ffffff;\r\n}\r\n\r\n.status-badge:hover {\r\n    transform: translateY(-2px);\r\n    box-shadow: 0 5px 12px rgba(0, 0, 0, .15);\r\n}\r\n\r\n/* Responsive */\r\n\r\n@media (max-width: 768px) {\r\n\r\n    .status-container {\r\n        flex-direction: column;\r\n        gap: 20px;\r\n    }\r\n\r\n    .status-item {\r\n        width: 100%;\r\n    }\r\n\r\n    .status-badge {\r\n        width: fit-content;\r\n    }\r\n}\r\n\r\n/* ==========================================\r\n   Details\r\n========================================== */\r\n\r\n.card-body h6 {\r\n    margin-top: 5px;\r\n    font-size: 17px;\r\n    font-weight: 600;\r\n    color: #222;\r\n}\r\n\r\n/* ==========================================\r\n   Authentication\r\n========================================== */\r\n\r\n.authentication-box {\r\n    margin-top: 35px;\r\n    border-top: 1px solid #ececec;\r\n    padding-top: 25px;\r\n}\r\n\r\n.authentication-box h5 {\r\n    margin-bottom: 20px;\r\n    color: #f58220;\r\n    font-weight: 600;\r\n}\r\n\r\n/* ==========================================\r\n   OTP\r\n========================================== */\r\n\r\n.otp-box {\r\n    display: flex;\r\n    gap: 12px;\r\n    margin-top: 10px;\r\n}\r\n\r\n.otp-input {\r\n    width: 55px;\r\n    height: 55px;\r\n    text-align: center;\r\n    font-size: 22px;\r\n    font-weight: 600;\r\n    border-radius: 10px;\r\n    border: 2px solid #d7d7d7;\r\n    transition: .3s;\r\n}\r\n\r\n.otp-input:focus {\r\n    border-color: #f58220;\r\n    outline: none;\r\n    box-shadow: 0 0 8px rgba(245, 130, 32, .2);\r\n}\r\n\r\n/* ==========================================\r\n   Holder Image\r\n========================================== */\r\n\r\n.holder-image {\r\n    width: 220px;\r\n    height: 220px;\r\n    margin: auto;\r\n    border-radius: 12px;\r\n    border: 2px solid #ececec;\r\n    overflow: hidden;\r\n    background: #fafafa;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.holder-image img {\r\n    width: 100%;\r\n    height: 100%;\r\n    object-fit: cover;\r\n}\r\n\r\n.placeholder-image {\r\n    color: #b8b8b8;\r\n}\r\n\r\n/* ==========================================\r\n   Verified\r\n========================================== */\r\n\r\n.verified-box {\r\n    margin-top: 20px;\r\n}\r\n\r\n.verified-box .badge {\r\n    font-size: 15px;\r\n    padding: 12px 24px;\r\n}\r\n\r\n/* ==========================================\r\n   Responsive\r\n========================================== */\r\n\r\n@media (max-width: 991px) {\r\n\r\n    .or-divider {\r\n        margin: 30px 0;\r\n    }\r\n\r\n    .status-row {\r\n        flex-direction: column;\r\n        align-items: flex-start;\r\n        gap: 12px;\r\n    }\r\n\r\n    .holder-image {\r\n        width: 180px;\r\n        height: 180px;\r\n    }\r\n\r\n    .authentication-box .row>div {\r\n        margin-bottom: 20px;\r\n    }\r\n\r\n}\r\n\r\n@media (max-width: 576px) {\r\n\r\n    .heading-title {\r\n        font-size: 24px;\r\n    }\r\n\r\n    .card-body {\r\n        padding: 20px;\r\n    }\r\n\r\n    .otp-box {\r\n        justify-content: center;\r\n    }\r\n\r\n    .otp-input {\r\n        width: 45px;\r\n        height: 45px;\r\n    }\r\n\r\n    .holder-image {\r\n        width: 150px;\r\n        height: 150px;\r\n    }\r\n\r\n}"] }]
    }], function () { return [{ type: i1.ApiService }, { type: i2.BsModalService }, { type: i3.FormBuilder }, { type: i4.Router }, { type: i5.ToastrService }, { type: i6.NgxSpinnerService }, { type: i7.RazorpayService }, { type: i8.ModalService }]; }, null); })();
//# sourceMappingURL=card-access-and-pos-management.component.js.map