import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "src/app/services/api.service";
import * as i2 from "ngx-bootstrap/modal";
import * as i3 from "ngx-toastr";
import * as i4 from "src/app/services/common.service";
import * as i5 from "@angular/forms";
import * as i6 from "@angular/common";
function StoreDeliveryRacksComponent_tr_29_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
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
    i0.ɵɵelementStart(11, "td")(12, "i", 11);
    i0.ɵɵlistener("click", function StoreDeliveryRacksComponent_tr_29_Template_i_click_12_listener() { const restoredCtx = i0.ɵɵrestoreView(_r6); const racklist_r3 = restoredCtx.$implicit; const ctx_r5 = i0.ɵɵnextContext(); const _r1 = i0.ɵɵreference(31); return i0.ɵɵresetView(ctx_r5.getRackDetail(_r1, racklist_r3)); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const racklist_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i_r4 + 1);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(racklist_r3.RETAIL_D2C_SORAGE_RACK_ID);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(racklist_r3.RETAIL_D2C_STORAGE_RACK_NAME);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(racklist_r3.RETAIL_D2C_STORAGE_RACK_PACKAGE_MAX_LIMIT_COUNT);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(racklist_r3.RETAIl_D2C_STORAGE_RACK_TOTL_CURNT_FILLED_COUNT);
} }
function StoreDeliveryRacksComponent_ng_template_30_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "form", 12)(1, "div", 13)(2, "h4", 14);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "button", 15);
    i0.ɵɵlistener("click", function StoreDeliveryRacksComponent_ng_template_30_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r8); const ctx_r7 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r7.modalRef.hide()); });
    i0.ɵɵelementStart(5, "span", 16);
    i0.ɵɵtext(6, "\u00D7");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(7, "div", 17)(8, "div", 18)(9, "label", 19);
    i0.ɵɵtext(10, "Rack Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(11, "input", 20);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "div", 18)(13, "label", 19);
    i0.ɵɵtext(14, "Inventory Holding Capacity Packets");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "select", 21)(16, "option", 22);
    i0.ɵɵtext(17, "Select");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "option", 23);
    i0.ɵɵtext(19, "100");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "option", 24);
    i0.ɵɵtext(21, "75");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "option", 25);
    i0.ɵɵtext(23, "50");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(24, "div", 26)(25, "button", 27);
    i0.ɵɵlistener("click", function StoreDeliveryRacksComponent_ng_template_30_Template_button_click_25_listener() { i0.ɵɵrestoreView(_r8); const ctx_r9 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r9.onBtnClick()); });
    i0.ɵɵtext(26);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "button", 28);
    i0.ɵɵlistener("click", function StoreDeliveryRacksComponent_ng_template_30_Template_button_click_27_listener() { i0.ɵɵrestoreView(_r8); const ctx_r10 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r10.modalRef.hide()); });
    i0.ɵɵtext(28, "Close");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("formGroup", ctx_r2.addrackForm);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.isTitle == true ? "Add New Rack" : "Update New Rack", "");
    i0.ɵɵadvance(23);
    i0.ɵɵtextInterpolate(ctx_r2.isAdd == true ? "Add" : "Update");
} }
export class StoreDeliveryRacksComponent {
    constructor(apiService, modalService, toastr, commonservice, formBuilder) {
        this.apiService = apiService;
        this.modalService = modalService;
        this.toastr = toastr;
        this.commonservice = commonservice;
        this.formBuilder = formBuilder;
        // baseURL: string = "https://www.shoppenation.in/alcoolretail/carryr/retail";
        this.imgURL = this.apiService.imgURL;
        this.getlogindata = localStorage.getItem('logindata');
        this.getlogindata = JSON.parse(this.getlogindata);
        this.accountid = this.getlogindata.RETAIL_D2C_ACCT_ID;
        this.subaccountid = this.getlogindata.RETAIL_D2C_USR_SUBACCT_ID;
        this.storeid = this.getlogindata.RETAIL_D2C_ACCT_INTRNL_OFFICE_REGID;
    }
    ngOnInit() {
        this.GetStoreRacksAccountSubAccount(this.accountid, this.subaccountid, this.storeid);
        this.addrackForm = this.formBuilder.group({
            RETAIL_D2C_STORAGE_RACK_NAME: ['', Validators.required],
            RETAIL_D2C_STORAGE_RACK_PACKAGE_MAX_LIMIT_COUNT: ['', Validators.required]
        });
    }
    openModal(template) {
        this.addrackForm.patchValue({
            RETAIL_D2C_STORAGE_RACK_NAME: "",
            RETAIL_D2C_STORAGE_RACK_PACKAGE_MAX_LIMIT_COUNT: "Select",
        });
        this.isTitle = true;
        this.isAdd = true;
        this.modalRef = this.modalService.show(template, Object.assign({}, { class: 'rackModal' }));
    }
    addStoreRacks() {
        let rackData = {
            RETAIL_D2C_STORE_ACCT_ID: this.accountid,
            RETAIL_D2C_STORE_SUBACCT_ID: this.subaccountid,
            RETAIL_D2C_STORE_ID: this.storeid,
            RETAIL_D2C_STORAGE_RACK_NAME: this.addrackForm.value.RETAIL_D2C_STORAGE_RACK_NAME,
            RETAIL_D2C_STORAGE_RACK_PACKAGE_MAX_LIMIT_COUNT: this.addrackForm.value.RETAIL_D2C_STORAGE_RACK_PACKAGE_MAX_LIMIT_COUNT,
        };
        console.log(rackData);
        this.apiService.postCall(this.apiService.baseURL + '/AddStoreRacks', rackData)
            .subscribe(data => {
            console.log(data);
            this.toastr.success("Added Successfully", '', {
                timeOut: 5000,
            });
            this.GetStoreRacksAccountSubAccount(this.accountid, this.subaccountid, this.storeid);
            this.modalRef.hide();
        }, (error) => {
            this.toastr.error(error, '', {
                timeOut: 5000,
            });
        });
    }
    GetStoreRacksAccountSubAccount(accountId, subaccountId, OfficeId) {
        this.apiService.getCall(this.apiService.baseURL + '/GetStoreRacksAccountSubAccount' + "/" + accountId + "/" + subaccountId + "/" + OfficeId)
            .subscribe(data => {
            console.log(data);
            this.rackDetails = data;
        });
    }
    getRackDetail(template, rowlist) {
        this.openModal(template);
        this.isTitle = false;
        this.isAdd = false;
        console.log(rowlist);
        this.rowlist = rowlist;
        this.addrackForm.patchValue({
            RETAIL_D2C_SORAGE_RACK_ID: rowlist.RETAIL_D2C_SORAGE_RACK_ID,
            RETAIL_D2C_STORE_ACCT_ID: rowlist.RETAIL_D2C_STORE_ACCT_ID,
            RETAIL_D2C_STORE_SUBACCT_ID: rowlist.RETAIL_D2C_STORE_SUBACCT_ID,
            RETAIL_D2C_STORE_ID: rowlist.RETAIL_D2C_STORE_ID,
            RETAIL_D2C_STORAGE_RACK_NAME: rowlist.RETAIL_D2C_STORAGE_RACK_NAME,
            RETAIL_D2C_STORAGE_RACK_PACKAGE_MAX_LIMIT_COUNT: rowlist.RETAIL_D2C_STORAGE_RACK_PACKAGE_MAX_LIMIT_COUNT,
        });
    }
    updateRackDetails() {
        let updateData = {
            RETAIL_D2C_SORAGE_RACK_ID: +this.rowlist.RETAIL_D2C_SORAGE_RACK_ID,
            RETAIL_D2C_STORE_ACCT_ID: this.rowlist.RETAIL_D2C_STORE_ACCT_ID,
            RETAIL_D2C_STORE_SUBACCT_ID: this.rowlist.RETAIL_D2C_STORE_SUBACCT_ID,
            RETAIL_D2C_STORE_ID: this.rowlist.RETAIL_D2C_STORE_ID,
            RETAIl_CURRENT_COUNT: this.rowlist.RETAIl_D2C_STORAGE_RACK_TOTL_CURNT_FILLED_COUNT,
            RETAIL_D2C_STORAGE_RACK_NAME: this.addrackForm.value.RETAIL_D2C_STORAGE_RACK_NAME,
            RETAIL_D2C_STORAGE_RACK_PACKAGE_MAX_LIMIT_COUNT: +this.addrackForm.value.RETAIL_D2C_STORAGE_RACK_PACKAGE_MAX_LIMIT_COUNT,
        };
        console.log(updateData);
        this.apiService.postCall(this.apiService.baseURL + '/EditStoreRacks', updateData)
            .subscribe(data => {
            console.log(data);
            this.toastr.success('Updated Successfully', '', {
                timeOut: 5000,
            });
            this.GetStoreRacksAccountSubAccount(this.accountid, this.subaccountid, this.storeid);
            this.modalRef.hide();
        }, (error) => {
            this.toastr.error(error.error.Message, '', {
                timeOut: 5000,
            });
        });
    }
    onBtnClick() {
        if (this.isAdd == true) {
            this.addStoreRacks();
        }
        else {
            this.updateRackDetails();
        }
    }
}
StoreDeliveryRacksComponent.ɵfac = function StoreDeliveryRacksComponent_Factory(t) { return new (t || StoreDeliveryRacksComponent)(i0.ɵɵdirectiveInject(i1.ApiService), i0.ɵɵdirectiveInject(i2.BsModalService), i0.ɵɵdirectiveInject(i3.ToastrService), i0.ɵɵdirectiveInject(i4.CommonService), i0.ɵɵdirectiveInject(i5.FormBuilder)); };
StoreDeliveryRacksComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StoreDeliveryRacksComponent, selectors: [["app-store-delivery-racks"]], decls: 32, vars: 1, consts: [[1, "content"], [1, "heading-title"], [1, "row"], [1, "col-md-12"], [1, "card", "pb-0"], [1, "col-md-9"], [1, "col-md-3"], ["data-toggle", "modal", 1, "btn", "custom-btn", "pull-right", 2, "margin-bottom", "10px", 3, "click"], [1, "table"], [4, "ngFor", "ngForOf"], ["template", ""], [1, "fa", "fa-edit", 3, "click"], [3, "formGroup"], [1, "modal-header"], [1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "mb-3"], [1, "form-label"], ["formControlName", "RETAIL_D2C_STORAGE_RACK_NAME", "type", "text", 1, "form-control"], ["formControlName", "RETAIL_D2C_STORAGE_RACK_PACKAGE_MAX_LIMIT_COUNT", 1, "form-select", "form-control"], ["value", "Select", "selected", ""], ["value", "100"], ["value", "75"], ["value", "50"], [1, "modal-footer"], ["type", "button", 1, "btn", "custom-btn", 3, "click"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"]], template: function StoreDeliveryRacksComponent_Template(rf, ctx) { if (rf & 1) {
        const _r11 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "div", 0)(1, "h1", 1);
        i0.ɵɵtext(2, "Manage Store Racks for holding ready Packages for Delivery");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "div", 2)(7, "div", 5)(8, "h5");
        i0.ɵɵtext(9, "Already added Racks for this Store");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(10, "div", 6)(11, "button", 7);
        i0.ɵɵlistener("click", function StoreDeliveryRacksComponent_Template_button_click_11_listener() { i0.ɵɵrestoreView(_r11); const _r1 = i0.ɵɵreference(31); return i0.ɵɵresetView(ctx.openModal(_r1)); });
        i0.ɵɵtext(12, "Add new Rack");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(13, "table", 8)(14, "thead")(15, "tr")(16, "th");
        i0.ɵɵtext(17, "Sr. No.");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(18, "th");
        i0.ɵɵtext(19, "Rack ID");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(20, "th");
        i0.ɵɵtext(21, "Rack Name");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(22, "th");
        i0.ɵɵtext(23, "Holding Capacity");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(24, "th");
        i0.ɵɵtext(25, "Current filled by System");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(26, "th");
        i0.ɵɵtext(27, "Action");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(28, "tbody");
        i0.ɵɵtemplate(29, StoreDeliveryRacksComponent_tr_29_Template, 13, 5, "tr", 9);
        i0.ɵɵelementEnd()()()()()();
        i0.ɵɵtemplate(30, StoreDeliveryRacksComponent_ng_template_30_Template, 29, 3, "ng-template", null, 10, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        i0.ɵɵadvance(29);
        i0.ɵɵproperty("ngForOf", ctx.rackDetails);
    } }, dependencies: [i6.NgForOf, i5.ɵNgNoValidate, i5.NgSelectOption, i5.ɵNgSelectMultipleOption, i5.DefaultValueAccessor, i5.SelectControlValueAccessor, i5.NgControlStatus, i5.NgControlStatusGroup, i5.FormGroupDirective, i5.FormControlName], styles: ["i.fa.fa-edit[_ngcontent-%COMP%] {\r\n    font-size: 25px;\r\n    color: #bd2130;\r\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StoreDeliveryRacksComponent, [{
        type: Component,
        args: [{ selector: 'app-store-delivery-racks', template: "<div class=\"content\">\n    <h1 class=\"heading-title\">Manage Store Racks for holding ready Packages for Delivery</h1>\n\n    <div class=\"row\">\n        <!-- <div class=\"col-md-12\">\n            <div class=\"card\">\n                <div class=\"col-md-6 pl-0\">\n                    <p><strong>Store: Daizy Wines & Liquor</strong></p><br>\n                    <button class=\"btn custom-btn\">Manage my Store Racks</button>\n                </div>\n            </div>\n        </div> -->\n\n\n        <div class=\"col-md-12\">\n            <div class=\"card pb-0\">\n                <div class=\"row\">\n                    <div class=\"col-md-9\">\n                        <h5>Already added Racks for this Store</h5>\n                    </div>\n                    <div class=\"col-md-3\"><button style=\"margin-bottom:10px;\" data-toggle=\"modal\" (click)=\"openModal(template)\" class=\"btn custom-btn pull-right\">Add new Rack</button></div>\n                </div>\n\n\n                <table class=\"table\">\n                    <thead>\n                        <tr>\n                            <th>Sr. No.</th>\n                            <th>Rack ID</th>\n                            <th>Rack Name</th>\n                            <th>Holding Capacity</th>\n                            <th>Current filled by System</th>\n                            <th>Action</th>\n\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let racklist of rackDetails; let i = index\">\n                            <td>{{i + 1}}</td>\n                            <td>{{racklist.RETAIL_D2C_SORAGE_RACK_ID}}</td>\n                            <td>{{racklist.RETAIL_D2C_STORAGE_RACK_NAME}}</td>\n                            <td>{{racklist.RETAIL_D2C_STORAGE_RACK_PACKAGE_MAX_LIMIT_COUNT}}</td>\n                            <td>{{racklist.RETAIl_D2C_STORAGE_RACK_TOTL_CURNT_FILLED_COUNT}}</td>\n                            <td><i (click)=\"getRackDetail(template, racklist)\" class=\"fa fa-edit\"></i></td>\n                        </tr>\n                      \n                       \n                       \n\n\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n\n\n\n\n</div>\n\n<ng-template #template>\n    <form [formGroup]=\"addrackForm\">\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title pull-left\"> {{isTitle == true ? 'Add New Rack': 'Update New Rack'}}</h4>\n      <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"mb-3\">\n        <label class=\"form-label\">Rack Name</label>\n        <input formControlName=\"RETAIL_D2C_STORAGE_RACK_NAME\" type=\"text\" class=\"form-control\">\n        </div>\n        <div class=\"mb-3\">\n            <label class=\"form-label\">Inventory Holding Capacity Packets</label>\n            <select formControlName=\"RETAIL_D2C_STORAGE_RACK_PACKAGE_MAX_LIMIT_COUNT\" class=\"form-select form-control\">\n                <option value=\"Select\" selected>Select</option>\n                <option value=\"100\">100</option>\n                <option value=\"75\">75</option>\n                <option value=\"50\">50</option>\n              </select>\n            </div>\n       \n    </div>\n  \n\n    <div class=\"modal-footer\">\n        <button type=\"button\" (click)=\"onBtnClick()\" class=\"btn custom-btn\">{{isAdd == true ? 'Add': 'Update'}}</button>\n      <button type=\"button\" class=\"btn btn-secondary\" (click)=\"modalRef.hide()\">Close</button>\n    </div>\n    </form>\n  </ng-template>", styles: ["i.fa.fa-edit {\r\n    font-size: 25px;\r\n    color: #bd2130;\r\n}"] }]
    }], function () { return [{ type: i1.ApiService }, { type: i2.BsModalService }, { type: i3.ToastrService }, { type: i4.CommonService }, { type: i5.FormBuilder }]; }, null); })();
//# sourceMappingURL=store-delivery-racks.component.js.map