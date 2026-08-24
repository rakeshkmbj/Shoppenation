import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { AddNewPhysicalStoreComponent } from './components/add-new-physical-store/add-new-physical-store.component';
import * as i0 from "@angular/core";
import * as i1 from "src/app/services/api.service";
import * as i2 from "ngx-toastr";
import * as i3 from "@angular/forms";
import * as i4 from "ngx-bootstrap/modal";
import * as i5 from "ngx-spinner";
import * as i6 from "@angular/common";
import * as i7 from "ngx-bootstrap/tooltip";
function ManageBusinessOfficeComponent_div_17_tr_35_span_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵelement(1, "img", 24);
    i0.ɵɵelementEnd();
} }
function ManageBusinessOfficeComponent_div_17_tr_35_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 25);
} }
function ManageBusinessOfficeComponent_div_17_tr_35_span_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵelement(1, "img", 24);
    i0.ɵɵelementEnd();
} }
function ManageBusinessOfficeComponent_div_17_tr_35_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 25);
} }
function ManageBusinessOfficeComponent_div_17_tr_35_span_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵelement(1, "img", 24);
    i0.ɵɵelementEnd();
} }
function ManageBusinessOfficeComponent_div_17_tr_35_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 25);
} }
function ManageBusinessOfficeComponent_div_17_tr_35_span_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵelement(1, "img", 24);
    i0.ɵɵelementEnd();
} }
function ManageBusinessOfficeComponent_div_17_tr_35_ng_template_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 25);
} }
function ManageBusinessOfficeComponent_div_17_tr_35_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "td");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "td")(8, "a", 17);
    i0.ɵɵtext(9, "View");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "td");
    i0.ɵɵtemplate(11, ManageBusinessOfficeComponent_div_17_tr_35_span_11_Template, 2, 0, "span", 18);
    i0.ɵɵtemplate(12, ManageBusinessOfficeComponent_div_17_tr_35_ng_template_12_Template, 1, 0, "ng-template", null, 19, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "td");
    i0.ɵɵtemplate(15, ManageBusinessOfficeComponent_div_17_tr_35_span_15_Template, 2, 0, "span", 18);
    i0.ɵɵtemplate(16, ManageBusinessOfficeComponent_div_17_tr_35_ng_template_16_Template, 1, 0, "ng-template", null, 20, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "td");
    i0.ɵɵtemplate(19, ManageBusinessOfficeComponent_div_17_tr_35_span_19_Template, 2, 0, "span", 18);
    i0.ɵɵtemplate(20, ManageBusinessOfficeComponent_div_17_tr_35_ng_template_20_Template, 1, 0, "ng-template", null, 21, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "td");
    i0.ɵɵtemplate(23, ManageBusinessOfficeComponent_div_17_tr_35_span_23_Template, 2, 0, "span", 18);
    i0.ɵɵtemplate(24, ManageBusinessOfficeComponent_div_17_tr_35_ng_template_24_Template, 1, 0, "ng-template", null, 22, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "td")(27, "button", 23);
    i0.ɵɵtext(28, "Create Replica");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const data_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const _r5 = i0.ɵɵreference(13);
    const _r8 = i0.ɵɵreference(17);
    const _r11 = i0.ɵɵreference(21);
    const _r14 = i0.ɵɵreference(25);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i_r3 + 1);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(data_r2.RETAIL_D2C_ACCT_INTRNL_OFFICE_REGID);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(data_r2.RETAIL_D2C_SUBACCT_OFFICE_NAME);
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate("tooltip", data_r2.RETAIL_D2C_SUBACCT_OFFICE_ADDRESS);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", data_r2.RETAIL_D2C_SAME_PERIMETRIC_AREA_AS_PRIMARY_STORE_FLG == true)("ngIfElse", _r5);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", data_r2.RETAIL_D2C_SUBACCT_OFFICE_PRIMARY_ACCOUNT_STORE_FLG == true)("ngIfElse", _r8);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", data_r2.REPLICA_REQUIRED_FLG == true)("ngIfElse", _r11);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", data_r2.REPLICA_CREATED_FLG == true)("ngIfElse", _r14);
} }
function ManageBusinessOfficeComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 10)(1, "div", 11)(2, "h4", 12);
    i0.ɵɵtext(3, "Display Physical Store");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "button", 13);
    i0.ɵɵlistener("click", function ManageBusinessOfficeComponent_div_17_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r17); const ctx_r16 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r16.openModal()); });
    i0.ɵɵtext(5, "Add New Physical Store");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 14)(7, "table", 15)(8, "thead")(9, "tr")(10, "th");
    i0.ɵɵtext(11, "Sr. No.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "th");
    i0.ɵɵtext(13, "Store ID");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "th");
    i0.ɵɵtext(15, "Store Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "th");
    i0.ɵɵtext(17, "Domain & Address");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "th");
    i0.ɵɵtext(19, "On Same");
    i0.ɵɵelement(20, "br");
    i0.ɵɵtext(21, " Location");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "th");
    i0.ɵɵtext(23, "Physical");
    i0.ɵɵelement(24, "br");
    i0.ɵɵtext(25, " Store");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "th");
    i0.ɵɵtext(27, "Store Replica");
    i0.ɵɵelement(28, "br");
    i0.ɵɵtext(29, " Required");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "th");
    i0.ɵɵtext(31, "Replica Made");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(32, "th");
    i0.ɵɵtext(33, "\u00A0");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(34, "tbody");
    i0.ɵɵtemplate(35, ManageBusinessOfficeComponent_div_17_tr_35_Template, 29, 12, "tr", 16);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(35);
    i0.ɵɵproperty("ngForOf", ctx_r0.physicalStoreData);
} }
export class ManageBusinessOfficeComponent {
    constructor(apiService, toastr, formBuilder, modalService, spinner) {
        this.apiService = apiService;
        this.toastr = toastr;
        this.formBuilder = formBuilder;
        this.modalService = modalService;
        this.spinner = spinner;
        // baseURL: string = "https://www.shoppenation.in/alcoolretail/carryr/retail";
        this.imgURL = this.apiService.imgURL;
        this.resetSubject = new Subject();
        this.reset$ = this.resetSubject.asObservable();
        this.isTitle = true;
        this.accountid = this.apiService.requiredLoginData.accountid;
        this.subaccountid = this.apiService.requiredLoginData.subaccountid;
        this.storeid = this.apiService.requiredLoginData.storeid;
        this.storeName = this.apiService.requiredLoginData.storeName;
        this.domainid = this.apiService.requiredLoginData.domainid;
        this.userID = this.apiService.requiredLoginData.userID;
        console.log(this.userID);
        this.setClickedRow = function (index) {
            this.selectedRow = index;
        };
    }
    openModal() {
        const config = {
            backdrop: 'static',
            keyboard: false,
            animated: true,
            ignoreBackdropClick: true,
            initialState: {
                accountID: this.accountid,
                subAccountID: this.subaccountid
            }
        };
        this.modalRef = this.modalService.show(AddNewPhysicalStoreComponent, Object.assign(config, { class: 'physicalStoreModal' }));
    }
    ngOnInit() {
        this.GetRetailStoresByAccountSubAccount();
        // this.Form  =  this.formBuilder.group({
        //   DomainId: ['', Validators.required],
        //   Country: ['', Validators.required],
        //   State: ['', Validators.required],
        //   City: ['', Validators.required],
        //   PinCode: ['', Validators.required],
        // });
        this.RetailStoreForm = this.formBuilder.group({
            RETAIL_D2C_ACCT_ID: ['', Validators.required],
            RETAIL_D2C_SUBACCT_ID: ['', Validators.required],
            RETAIL_D2C_SUBACCT_OFFICE_NAME: ['', Validators.required],
            RETAIL_D2C_SUBACCT_OFFICE_ADDRESS: ['', Validators.required],
            RETAIL_STORE_OFFICE_SHOWROOM_FLG: ['Retail'],
            RETAIL_D2C_SUBACCT_OFFICE_CNTRY: ['', Validators.required],
            RETAIL_D2C_SUBACCT_OFFICE_STATE: ['', Validators.required],
            RETAIL_D2C_SUBACCT_OFFICE_CITY: ['', Validators.required],
            RETAIL_D2C_SUBACCT_OFFICE_CITY_PINCD: ['', Validators.required],
            country_state_city_pin: this.formBuilder.group({
                Country: ['', Validators.required],
                State: ['', Validators.required],
                City: ['', Validators.required],
                PinCode: ['', Validators.required]
            })
        });
    }
    addRetailStore() {
        //   console.log({...this.RetailStoreForm.value});
        let retailStoreData = {
            RETAIL_D2C_ACCT_ID: this.accountid,
            RETAIL_D2C_SUBACCT_ID: this.subaccountid,
            RETAIL_D2C_SUBACCT_OFFICE_NAME: this.RetailStoreForm.value.RETAIL_D2C_SUBACCT_OFFICE_NAME,
            RETAIL_D2C_SUBACCT_OFFICE_ADDRESS: this.RetailStoreForm.value.RETAIL_D2C_SUBACCT_OFFICE_ADDRESS,
            RETAIL_D2C_SUBACCT_OFFICE_CNTRY: +this.RetailStoreForm.get('country_state_city_pin').value.Country,
            RETAIL_D2C_SUBACCT_OFFICE_STATE: +this.RetailStoreForm.get('country_state_city_pin').value.State,
            RETAIL_D2C_SUBACCT_OFFICE_CITY: +this.RetailStoreForm.get('country_state_city_pin').value.City,
            RETAIL_D2C_SUBACCT_OFFICE_CITY_PINCD: this.RetailStoreForm.get('country_state_city_pin').value.PinCode,
            RETAIL_STORE_OFFICE_SHOWROOM_FLG: true,
        };
        console.log(retailStoreData);
        this.apiService.postCall(this.apiService.baseURL + '/AddRetailStore', retailStoreData)
            .subscribe(data => {
            console.log(data);
            if (!data.error) {
                this.toastr.success('Added Successfully', '', {
                    timeOut: 5000,
                });
                this.GetRetailStoresByAccountSubAccount();
                this.resetForm();
            }
            else {
                this.toastr.error(data.Message);
            }
        }, error => {
            //Error callback
            this.toastr.error(error.Message, '', {
                timeOut: 5000,
            });
        });
    }
    GetRetailStoresByAccountSubAccount() {
        this.apiService.getCall(this.apiService.baseURL + '/GetRetailStoresByAccountSubAccount' + "/" + this.accountid + "/" + this.subaccountid)
            .subscribe(data => {
            console.log(data);
            this.retailStoreList = data;
        }, (error) => {
            this.toastr.error(error.error.Message, '', {
                timeOut: 5000,
            });
        });
    }
    scrollToTop() {
        (function smoothscroll() {
            var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
            if (currentScroll > 0) {
                window.requestAnimationFrame(smoothscroll);
                window.scrollTo(0, currentScroll - (currentScroll / 2));
            }
        })();
    }
    getRetailStoreById(OfficeId) {
        this.officeId = OfficeId;
        this.apiService.getCall(this.apiService.baseURL + '/GetRetailStoreById' + "/" + OfficeId)
            .subscribe(data => {
            console.log(data);
            this.isTitle = false;
            this.scrollToTop();
            this.RetailStoreForm.patchValue({
                RETAIL_D2C_ACCT_INTRNL_OFFICE_REGID: data.RETAIL_D2C_ACCT_INTRNL_OFFICE_REGID,
                RETAIL_D2C_ACCT_ID: this.accountid,
                RETAIL_D2C_SUBACCT_ID: this.subaccountid,
                RETAIL_D2C_SUBACCT_OFFICE_NAME: data.RETAIL_D2C_SUBACCT_OFFICE_NAME,
                RETAIL_D2C_SUBACCT_OFFICE_ADDRESS: data.RETAIL_D2C_SUBACCT_OFFICE_ADDRESS,
            });
            // this.RetailStoreForm.get('country_state_city_pin').patchValue({
            //   Country: data.RETAIL_D2C_SUBACCT_OFFICE_CNTRY
            // });
            // this.RetailStoreForm.get('country_state_city_pin').patchValue({
            //   State: data.RETAIL_D2C_SUBACCT_OFFICE_STATE
            // });
            // this.RetailStoreForm.get('country_state_city_pin').patchValue({
            //    City: data.RETAIL_D2C_SUBACCT_OFFICE_CITY
            //  });
            // this.RetailStoreForm.get('country_state_city_pin').patchValue({
            //   PinCode: data.RETAIL_D2C_SUBACCT_OFFICE_CITY_PINCD,
            // });
        });
    }
    updateRetailStore() {
        let updateData = {
            RETAIL_D2C_ACCT_INTRNL_OFFICE_REGID: +this.officeId,
            RETAIL_D2C_ACCT_ID: this.RetailStoreForm.value.RETAIL_D2C_ACCT_ID,
            RETAIL_D2C_SUBACCT_ID: this.RetailStoreForm.value.RETAIL_D2C_SUBACCT_ID,
            RETAIL_D2C_SUBACCT_OFFICE_NAME: this.RetailStoreForm.value.RETAIL_D2C_SUBACCT_OFFICE_NAME,
            RETAIL_D2C_SUBACCT_OFFICE_ADDRESS: this.RetailStoreForm.value.RETAIL_D2C_SUBACCT_OFFICE_ADDRESS,
            RETAIL_D2C_SUBACCT_OFFICE_CNTRY: +this.RetailStoreForm.get('country_state_city_pin').value.Country,
            RETAIL_D2C_SUBACCT_OFFICE_STATE: +this.RetailStoreForm.get('country_state_city_pin').value.State,
            RETAIL_D2C_SUBACCT_OFFICE_CITY: +this.RetailStoreForm.get('country_state_city_pin').value.City,
            RETAIL_D2C_SUBACCT_OFFICE_CITY_PINCD: this.RetailStoreForm.get('country_state_city_pin').value.PinCode,
            RETAIL_STORE_OFFICE_SHOWROOM_FLG: this.RetailStoreForm.value.RETAIL_STORE_OFFICE_SHOWROOM_FLG
        };
        this.apiService.postCall(this.apiService.baseURL + '/EditRetailStore', updateData)
            .subscribe(data => {
            console.log(data);
            this.GetRetailStoresByAccountSubAccount();
            this.isTitle = true;
            this.resetForm();
            this.toastr.success('Updated Successfully', '', {
                timeOut: 5000,
            });
        }, (error) => {
            this.toastr.error(error, '', {
                timeOut: 5000,
            });
        });
    }
    resetForm() {
        this.isTitle = true;
        this.resetSubject.next(true);
        this.RetailStoreForm.patchValue({
            RETAIL_D2C_SUBACCT_OFFICE_NAME: "",
            RETAIL_D2C_SUBACCT_OFFICE_ADDRESS: "",
            RETAIL_STORE_OFFICE_SHOWROOM_FLG: "Retail"
        });
    }
    getPhysicalStoresSubAccount() {
        this.spinner.show();
        let payloadData = {
            SUBACCT_ID: this.subaccountid,
            RETAIL_LOGIN_USR_ID: +this.userID
        };
        this.apiService.postCall(this.apiService.baseURL + '/GetPhysicalStoresSubAccount', payloadData)
            .subscribe(data => {
            console.log(data);
            this.physicalStoreData = data;
            this.spinner.hide();
        }, (error) => {
            console.log(error);
            this.spinner.hide();
            this.toastr.error(error, '', {
                timeOut: 5000,
            });
        });
    }
    showAddress(address) {
    }
}
ManageBusinessOfficeComponent.ɵfac = function ManageBusinessOfficeComponent_Factory(t) { return new (t || ManageBusinessOfficeComponent)(i0.ɵɵdirectiveInject(i1.ApiService), i0.ɵɵdirectiveInject(i2.ToastrService), i0.ɵɵdirectiveInject(i3.FormBuilder), i0.ɵɵdirectiveInject(i4.BsModalService), i0.ɵɵdirectiveInject(i5.NgxSpinnerService)); };
ManageBusinessOfficeComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ManageBusinessOfficeComponent, selectors: [["app-manage-business-office"]], decls: 21, vars: 3, consts: [[1, "content"], [1, "heading-title"], [1, "card"], [1, "search-field-list", "pt-0"], [1, "search-list-label"], [1, "row"], [1, "col-md-8", "mt-2"], [1, "btn", "custom-btn", "mr-3", 3, "click"], ["class", "card pl-0 pr-0 physical-store", 4, "ngIf"], ["template", "<img src='assets/images/icons/please_wait.gif' />"], [1, "card", "pl-0", "pr-0", "physical-store"], [1, "card-header", "px-3", "d-flex"], [1, "m-0", "pt-2"], [1, "btn", "custom-btn", "ml-auto", 3, "click"], [1, "card-body", "py-1", "px-3"], [1, "table"], [4, "ngFor", "ngForOf"], ["placement", "top", 3, "tooltip"], [4, "ngIf", "ngIfElse"], ["elseCondition", ""], ["elseCondition0", ""], ["elseCondition1", ""], ["elseCondition2", ""], [1, "btn", "outline-btn"], ["src", "assets/images/active_icon1.png ", 1, "w-25"], ["src", "assets/images/deactive_icon1.png ", 1, "w-25"]], template: function ManageBusinessOfficeComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "h1", 1);
        i0.ɵɵtext(2, "Add Physical Store Under Same Account");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "div", 2)(4, "div", 3)(5, "div", 4);
        i0.ɵɵtext(6, "Account ID: ");
        i0.ɵɵelementStart(7, "span");
        i0.ɵɵtext(8);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(9, "div", 4);
        i0.ɵɵtext(10, "Sub-Account ID: ");
        i0.ɵɵelementStart(11, "span");
        i0.ɵɵtext(12);
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(13, "div", 5)(14, "div", 6)(15, "button", 7);
        i0.ɵɵlistener("click", function ManageBusinessOfficeComponent_Template_button_click_15_listener() { return ctx.getPhysicalStoresSubAccount(); });
        i0.ɵɵtext(16, "Display Physical Store");
        i0.ɵɵelementEnd()()()();
        i0.ɵɵtemplate(17, ManageBusinessOfficeComponent_div_17_Template, 36, 1, "div", 8);
        i0.ɵɵelement(18, "br")(19, "br");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(20, "ngx-spinner", 9);
    } if (rf & 2) {
        i0.ɵɵadvance(8);
        i0.ɵɵtextInterpolate(ctx.accountid);
        i0.ɵɵadvance(4);
        i0.ɵɵtextInterpolate(ctx.subaccountid);
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("ngIf", ctx.physicalStoreData);
    } }, dependencies: [i6.NgForOf, i6.NgIf, i5.NgxSpinnerComponent, i7.TooltipDirective], styles: [".col-md-12.reg_address[_ngcontent-%COMP%] {\r\n    padding: 10px 0;\r\n}\r\n\r\n.reg_address[_ngcontent-%COMP%]   .form-check-inline[_ngcontent-%COMP%] {\r\n    padding-right: 5px;\r\n    padding-left: 20px;\r\n    margin-right: 40px;\r\n}\r\n\r\n\r\n\r\n\r\n.switch[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    display: inline-block;\r\n    width: 45px;\r\n    height: 22px;\r\n    margin: 0;\r\n}\r\n\r\n\r\n\r\n\r\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    opacity: 0;\r\n    width: 0;\r\n    height: 0;\r\n}\r\n\r\n\r\n\r\n\r\n.slider[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    cursor: pointer;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background-color: #ccc;\r\n    -webkit-transition: .4s;\r\n    transition: .4s;\r\n}\r\n\r\n.slider[_ngcontent-%COMP%]:before {\r\n    position: absolute;\r\n    content: \"\";\r\n    height: 20px;\r\n    width: 20px;\r\n    left: 2px;\r\n    bottom: 1px;\r\n    background-color: white;\r\n    transition: .4s;\r\n}\r\n\r\ninput[_ngcontent-%COMP%]:checked + .slider[_ngcontent-%COMP%] {\r\n    background-color: #2196F3;\r\n}\r\n\r\ninput[_ngcontent-%COMP%]:focus + .slider[_ngcontent-%COMP%] {\r\n    box-shadow: 0 0 1px #2196F3;\r\n}\r\n\r\ninput[_ngcontent-%COMP%]:checked + .slider[_ngcontent-%COMP%]:before {\r\n    transform: translateX(21px);\r\n}\r\n\r\n\r\n\r\n\r\n.slider.round[_ngcontent-%COMP%] {\r\n    border-radius: 34px;\r\n}\r\n\r\n.slider.round[_ngcontent-%COMP%]:before {\r\n    border-radius: 50%;\r\n}\r\n\r\n.exiting-office-table[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\r\n    border: 0;\r\n}\r\n\r\n.table[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n}\r\n\r\n.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n    border-bottom: 0;\r\n}\r\n\r\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n    padding: 8px 15px;\r\n    font-size: 14px;\r\n}\r\n\r\n.bottom-btn[_ngcontent-%COMP%] {\r\n    clear: both;\r\n    width: 100%;\r\n    text-align: right;\r\n    padding: 20px;\r\n}\r\n\r\n.bottom-btn[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n    margin-left: 10px;\r\n    min-width: 100px;\r\n}\r\n\r\ntd.delete-icon[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n}\r\n\r\n.physical-store[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .physical-store[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    padding: 10px 8px !important;\r\n    font-size: 13px !important;\r\n    line-height: 15px;\r\n}\r\n\r\n.outline-btn[_ngcontent-%COMP%] {\r\n    border: 1px solid #bd2130;\r\n    font-size: 13px;\r\n    border-radius: 25px;\r\n    min-width: 125px;\r\n    transition: all 0.5s;\r\n    &:hover {\r\n        color: #fff;\r\n    }\r\n}\r\n\r\nimg.w-25[_ngcontent-%COMP%] {\r\n    max-width: 25px;\r\n    width: 25px !important;\r\n}\r\n\r\n.physical-store[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    color: #17a2b8 !important;\r\n    text-decoration: underline !important;\r\n    cursor: pointer;\r\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ManageBusinessOfficeComponent, [{
        type: Component,
        args: [{ selector: 'app-manage-business-office', template: "<div class=\"content\">\r\n    <!-- <h1 class=\"heading-title\">Retail Store</h1> -->\r\n    <!-- <div class=\"card\">\r\n        <div class=\"card-header\">{{isTitle == true ? 'Add Retail Store Under Same GSTIN Number': 'Update Retail Store Under Same GSTIN Number'}}</div>\r\n        <div class=\"card-body p-0\">\r\n            <form [formGroup]=\"RetailStoreForm\">\r\n                <div class=\"form-field\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Office/Store Name</label>\r\n                                <input formControlName=\"RETAIL_D2C_SUBACCT_OFFICE_NAME\" type=\"text\" class=\"form-control\" />\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Office/Store Address</label>\r\n                                <input formControlName=\"RETAIL_D2C_SUBACCT_OFFICE_ADDRESS\" type=\"text\" class=\"form-control\" />\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <country-state-city-pin [parentForm]=\"RetailStoreForm.get('country_state_city_pin')\" [reset]=\"reset$\">\r\n                    </country-state-city-pin>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Type of Office</label>\r\n                                <select class=\"form-control\" formControlName=\"RETAIL_STORE_OFFICE_SHOWROOM_FLG\">\r\n                  <option value=\"Retail\">Retail</option>\r\n                </select>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"bottom-btn bottom-btn pr-0 pb-0\">\r\n                        <button (click)=\"resetForm()\" type=\"button\" class=\"btn cancel-btn\">Cancel</button>\r\n                        <button *ngIf=\"!isTitle\" (click)=\"updateRetailStore()\" type=\"button\" class=\"btn custom-btn\">Update</button>\r\n                        <button *ngIf=\"isTitle\" (click)=\"addRetailStore()\" type=\"button\" class=\"btn custom-btn\">Add</button>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div> -->\r\n\r\n    <!-- <pre>\r\n  {{RetailStoreForm.value | json}}\r\n</pre> -->\r\n\r\n    <!-- <div class=\"card\">\r\n            <div class=\"card-header\">Add/Edit Business Office</div>\r\n            <div class=\"card-body\">\r\n            \r\n                <div class=\"form-field\">\r\n                    <div class=\"row\">\r\n    \r\n                        <div class=\"col-md-4\">\r\n                            <div class=\"form-group\">\r\n                                <label>First Name</label>\r\n                               <input type=\"text\" class=\"form-control\" />\r\n                              </div>\r\n                        </div>\r\n                        <div class=\"col-md-4\">\r\n                            <div class=\"form-group\">\r\n                                <label>Last Name</label>\r\n                               <input type=\"text\" class=\"form-control\" />\r\n                              </div>\r\n                        </div>\r\n                        <div class=\"col-md-4\">\r\n                            <div class=\"form-group\">\r\n                                <label>Contact Number</label>\r\n                               <input type=\"text\" class=\"form-control\" />\r\n                              </div>\r\n                        </div>\r\n                        <div class=\"col-md-4\">\r\n                            <div class=\"form-group\">\r\n                                <label>Address</label>\r\n                               <input type=\"text\" class=\"form-control\" />\r\n                              </div>\r\n                        </div>\r\n                        <div class=\"col-md-4\">\r\n                            <div class=\"form-group\">\r\n                                <label>Office Name</label>\r\n                               <input type=\"text\" class=\"form-control\" />\r\n                              </div>\r\n                        </div>\r\n                        <div class=\"col-md-4\">\r\n                            <div class=\"form-group\">\r\n                                <label>Country</label>\r\n                                <select class=\"form-control\">\r\n                                    <option selected>Select</option>\r\n                                    <option>xxxxx</option>\r\n                                    <option>xxxxx</option>\r\n                                    <option>xxxxx</option>\r\n                                  </select>\r\n                              </div>\r\n                        </div>\r\n                        <div class=\"col-md-4\">\r\n                            <div class=\"form-group\">\r\n                                <label>State</label>\r\n                                <select class=\"form-control\">\r\n                                    <option selected>Select</option>\r\n                                    <option>xxxxx</option>\r\n                                    <option>xxxxx</option>\r\n                                    <option>xxxxx</option>\r\n                                  </select>\r\n                              </div>\r\n                        </div>\r\n                    \r\n                        <div class=\"col-md-4\">\r\n                            <div class=\"form-group\">\r\n                                <label>City</label>\r\n                                <select class=\"form-control\">\r\n                                    <option selected>Select</option>\r\n                                    <option>xxxxx</option>\r\n                                    <option>xxxxx</option>\r\n                                    <option>xxxxx</option>\r\n                                  </select>\r\n                              </div>\r\n                        </div>\r\n                        <div class=\"col-md-4\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"orderno\">Zip Code</label>\r\n                                <select class=\"form-control\">\r\n                                    <option selected>Select</option>\r\n                                    <option>xxxxx</option>\r\n                                    <option>xxxxx</option>\r\n                                    <option>xxxxx</option>\r\n                                  </select>\r\n                              </div>\r\n                        </div>\r\n                    </div>\r\n                    \r\n                    <hr>\r\n    \r\n                    <h5>Registared Address</h5>\r\n                    <div class=\"col-md-12 reg_address\">\r\n                        <div class=\"custom-radio form-check-inline\">\r\n                            <input type=\"radio\" class=\"custom-control-input\" name=\"optradio\">\r\n                            <label class=\"custom-control-label\">Corporate Office</label>\r\n                          </div>  \r\n    \r\n                          <div class=\"custom-radio form-check-inline\">\r\n                            <input type=\"radio\" class=\"custom-control-input\" name=\"optradio\">\r\n                            <label class=\"custom-control-label\">Resg. Office</label>\r\n                          </div>  \r\n                          <div class=\"custom-radio form-check-inline\">\r\n                            <input type=\"radio\" class=\"custom-control-input\" name=\"optradio\">\r\n                            <label class=\"custom-control-label\">Branch Office</label>\r\n                          </div> \r\n                          <div class=\"custom-radio form-check-inline\">\r\n                            <input type=\"radio\" class=\"custom-control-input\" name=\"optradio\">\r\n                            <label class=\"custom-control-label\">Showroom</label>\r\n                          </div>\r\n                         \r\n                          <div class=\"custom-radio form-check-inline\">\r\n                            <input type=\"radio\" class=\"custom-control-input\" name=\"optradio\">\r\n                            <label class=\"custom-control-label\">Factory</label>\r\n                          </div>\r\n                          <div class=\"custom-radio form-check-inline\">\r\n                            <input type=\"radio\" class=\"custom-control-input\" name=\"optradio\">\r\n                            <label class=\"custom-control-label\">Store/Godown</label>\r\n                          </div>\r\n                          \r\n                    </div>\r\n                  \r\n                </div>\r\n            </div>\r\n           \r\n          </div> -->\r\n\r\n    <!-- <div class=\"card exiting-office-table\">\r\n        <div class=\"card-header\">My Exiting Business Office</div>\r\n        <div class=\"card-body pa-0\">\r\n            <table class=\"table\">\r\n                <thead>\r\n                    <tr>\r\n                        <th>Sr. No.</th>\r\n                        <th>Office Name</th>\r\n                        <th>Address</th>\r\n                        <th colspan=\"2\">Action</th>\r\n\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let retailstore of retailStoreList let i = index\" [class.active]=\"i == selectedRow\">\r\n                        <td>{{i + 1}}</td>\r\n                        <td>{{retailstore.RETAIL_D2C_SUBACCT_OFFICE_NAME}}</td>\r\n                        <td>{{retailstore.RETAIL_D2C_SUBACCT_OFFICE_ADDRESS}}</td>\r\n                        <td (click)=\"setClickedRow(i)\" class=\"delete-icon\"><i (click)=\"getRetailStoreById(retailstore.RETAIL_D2C_ACCT_INTRNL_OFFICE_REGID)\" class=\"fa fa-edit\"></i></td>\r\n                        <td class=\"delete-icon\"><i class=\"fa fa-trash\"></i></td>\r\n                    </tr>\r\n\r\n                </tbody>\r\n            </table>\r\n\r\n        </div>\r\n\r\n    </div> -->\r\n\r\n    <h1 class=\"heading-title\">Add Physical Store Under Same Account</h1>\r\n\r\n    <div class=\"card\">\r\n\r\n        <div class=\"search-field-list pt-0\">\r\n            <div class=\"search-list-label\">Account ID: <span>{{accountid}}</span></div>\r\n            <div class=\"search-list-label\">Sub-Account ID: <span>{{subaccountid}}</span></div>\r\n\r\n\r\n        </div>\r\n\r\n\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-md-8 mt-2\">\r\n                <button (click)=\"getPhysicalStoresSubAccount()\" class=\"btn custom-btn mr-3\">Display Physical Store</button>\r\n\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"card pl-0 pr-0 physical-store\" *ngIf=\"physicalStoreData\">\r\n        <div class=\"card-header px-3 d-flex\">\r\n            <h4 class=\"m-0 pt-2\">Display Physical Store</h4>\r\n            <button (click)=\"openModal()\" class=\"btn custom-btn ml-auto\">Add New Physical Store</button>\r\n        </div>\r\n        <div class=\"card-body py-1 px-3\">\r\n            <table class=\"table\">\r\n                <thead>\r\n                    <tr>\r\n                        <th>Sr. No.</th>\r\n                        <th>Store ID</th>\r\n                        <th>Store Name</th>\r\n                        <th>Domain & Address</th>\r\n                        <th>On Same<br> Location</th>\r\n                        <th>Physical<br> Store</th>\r\n                        <th>Store Replica<br> Required</th>\r\n                        <th>Replica Made</th>\r\n                        <th>&nbsp;</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let data of physicalStoreData; index as i\">\r\n                        <td>{{i+1}}</td>\r\n                        <td>{{data.RETAIL_D2C_ACCT_INTRNL_OFFICE_REGID}}</td>\r\n                        <td>{{data.RETAIL_D2C_SUBACCT_OFFICE_NAME}}</td>\r\n                        <td>\r\n                            <a placement=\"top\" tooltip=\"{{data.RETAIL_D2C_SUBACCT_OFFICE_ADDRESS}}\">View</a>\r\n                        </td>\r\n                        <td>\r\n                            <span *ngIf=\"data.RETAIL_D2C_SAME_PERIMETRIC_AREA_AS_PRIMARY_STORE_FLG == true else elseCondition\">\r\n                            <img class=\"w-25\" src=\"assets/images/active_icon1.png \" />\r\n                        </span>\r\n                            <ng-template #elseCondition><img class=\"w-25\" src=\"assets/images/deactive_icon1.png \" /></ng-template>\r\n                        </td>\r\n                        <td>\r\n                            <span *ngIf=\"data.RETAIL_D2C_SUBACCT_OFFICE_PRIMARY_ACCOUNT_STORE_FLG == true else elseCondition0\">\r\n                                <img class=\"w-25\" src=\"assets/images/active_icon1.png \" />\r\n                            </span>\r\n                            <ng-template #elseCondition0><img class=\"w-25\" src=\"assets/images/deactive_icon1.png \" /></ng-template>\r\n                        </td>\r\n                        <td>\r\n                            <span *ngIf=\"data.REPLICA_REQUIRED_FLG == true else elseCondition1\">\r\n                                <img class=\"w-25\" src=\"assets/images/active_icon1.png \" />\r\n                            </span>\r\n                            <ng-template #elseCondition1><img class=\"w-25\" src=\"assets/images/deactive_icon1.png \" /></ng-template>\r\n                        </td>\r\n                        <td>\r\n                            <span *ngIf=\"data.REPLICA_CREATED_FLG == true else elseCondition2\">\r\n                                <img class=\"w-25\" src=\"assets/images/active_icon1.png \" />\r\n                            </span>\r\n                            <ng-template #elseCondition2><img class=\"w-25\" src=\"assets/images/deactive_icon1.png \" /></ng-template>\r\n                        </td>\r\n                        <td><button class=\"btn outline-btn \">Create Replica</button></td>\r\n                    </tr>\r\n\r\n\r\n                </tbody>\r\n            </table>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <br><br>\r\n</div>\r\n<ngx-spinner template=\"<img src='assets/images/icons/please_wait.gif' />\">\r\n</ngx-spinner>", styles: [".col-md-12.reg_address {\r\n    padding: 10px 0;\r\n}\r\n\r\n.reg_address .form-check-inline {\r\n    padding-right: 5px;\r\n    padding-left: 20px;\r\n    margin-right: 40px;\r\n}\r\n\r\n\r\n/* The switch - the box around the slider */\r\n\r\n.switch {\r\n    position: relative;\r\n    display: inline-block;\r\n    width: 45px;\r\n    height: 22px;\r\n    margin: 0;\r\n}\r\n\r\n\r\n/* Hide default HTML checkbox */\r\n\r\n.switch input {\r\n    opacity: 0;\r\n    width: 0;\r\n    height: 0;\r\n}\r\n\r\n\r\n/* The slider */\r\n\r\n.slider {\r\n    position: absolute;\r\n    cursor: pointer;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background-color: #ccc;\r\n    -webkit-transition: .4s;\r\n    transition: .4s;\r\n}\r\n\r\n.slider:before {\r\n    position: absolute;\r\n    content: \"\";\r\n    height: 20px;\r\n    width: 20px;\r\n    left: 2px;\r\n    bottom: 1px;\r\n    background-color: white;\r\n    transition: .4s;\r\n}\r\n\r\ninput:checked+.slider {\r\n    background-color: #2196F3;\r\n}\r\n\r\ninput:focus+.slider {\r\n    box-shadow: 0 0 1px #2196F3;\r\n}\r\n\r\ninput:checked+.slider:before {\r\n    transform: translateX(21px);\r\n}\r\n\r\n\r\n/* Rounded sliders */\r\n\r\n.slider.round {\r\n    border-radius: 34px;\r\n}\r\n\r\n.slider.round:before {\r\n    border-radius: 50%;\r\n}\r\n\r\n.exiting-office-table .card-header {\r\n    border: 0;\r\n}\r\n\r\n.table {\r\n    margin: 0;\r\n}\r\n\r\n.table thead th {\r\n    border-bottom: 0;\r\n}\r\n\r\n.table td,\r\n.table th {\r\n    padding: 8px 15px;\r\n    font-size: 14px;\r\n}\r\n\r\n.bottom-btn {\r\n    clear: both;\r\n    width: 100%;\r\n    text-align: right;\r\n    padding: 20px;\r\n}\r\n\r\n.bottom-btn .btn {\r\n    margin-left: 10px;\r\n    min-width: 100px;\r\n}\r\n\r\ntd.delete-icon .fa {\r\n    cursor: pointer;\r\n}\r\n\r\n.physical-store th,\r\n.physical-store td {\r\n    padding: 10px 8px !important;\r\n    font-size: 13px !important;\r\n    line-height: 15px;\r\n}\r\n\r\n.outline-btn {\r\n    border: 1px solid #bd2130;\r\n    font-size: 13px;\r\n    border-radius: 25px;\r\n    min-width: 125px;\r\n    transition: all 0.5s;\r\n    &:hover {\r\n        color: #fff;\r\n    }\r\n}\r\n\r\nimg.w-25 {\r\n    max-width: 25px;\r\n    width: 25px !important;\r\n}\r\n\r\n.physical-store td a {\r\n    color: #17a2b8 !important;\r\n    text-decoration: underline !important;\r\n    cursor: pointer;\r\n}"] }]
    }], function () { return [{ type: i1.ApiService }, { type: i2.ToastrService }, { type: i3.FormBuilder }, { type: i4.BsModalService }, { type: i5.NgxSpinnerService }]; }, null); })();
//# sourceMappingURL=manage-business-office.component.js.map