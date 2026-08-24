import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "src/app/services/api.service";
import * as i2 from "@angular/forms";
import * as i3 from "ngx-toastr";
export class StoreOrderworkflowCycleComponent {
    constructor(apiService, formBuilder, toastr) {
        this.apiService = apiService;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.imgURL = this.apiService.imgURL;
        this.accountid = this.apiService.requiredLoginData.accountid;
        this.subaccountid = this.apiService.requiredLoginData.subaccountid;
        this.storeid = this.apiService.requiredLoginData.storeid;
        this.storeName = this.apiService.requiredLoginData.storeName;
        this.domainid = this.apiService.requiredLoginData.domainid;
    }
    ngOnInit() {
        this.storeUserForm = this.formBuilder.group({
            STORE_ID: this.storeid,
            ACCT_ID: this.accountid,
            SUBACCT_ID: this.subaccountid,
            Workflow_type: [''],
            RETAIL_D2C_PRODUCT_ID: ['', Validators.required],
        });
    }
    //   getStoreList() {
    //     this.apiService.storeList().subscribe((data) => {
    //       this.storelist = data;
    //       console.log(this.storelist);
    //   });
    //  }
    get f1() { return this.storeUserForm.controls; }
    StoreorderProcessingWorkflowCycle() {
        if (this.storeUserForm.value.Workflow_type == 1) {
            this.cycle_flag1 = true;
            this.cycle_flag2 = false;
        }
        if (this.storeUserForm.value.Workflow_type == 2) {
            this.cycle_flag1 = false;
            this.cycle_flag2 = true;
        }
        let dataList = {
            ACCT_ID: this.accountid,
            SUBACCT_ID: this.subaccountid,
            STORE_ID: +this.storeid,
            RETAIL_STORE_WORLFLOW_CYCLE1_FLG: this.cycle_flag1,
            RETAIL_STORE_WORKFLOW_CYCLE2_FLG: this.cycle_flag2
        };
        console.log(dataList);
        this.apiService.postCall(this.apiService.baseURL + '/StoreorderProcessingWorkflowCycle', dataList)
            .subscribe(data => {
            console.log(data);
            this.toastr.success('STORE ORDER PROCESSING WORKFLOW CYCLE IS UPDATED', '', { timeOut: 5000, });
        }, (error) => {
            this.toastr.error(error.error.Message, '', {
                timeOut: 5000,
            });
        });
    }
}
StoreOrderworkflowCycleComponent.ɵfac = function StoreOrderworkflowCycleComponent_Factory(t) { return new (t || StoreOrderworkflowCycleComponent)(i0.ɵɵdirectiveInject(i1.ApiService), i0.ɵɵdirectiveInject(i2.FormBuilder), i0.ɵɵdirectiveInject(i3.ToastrService)); };
StoreOrderworkflowCycleComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StoreOrderworkflowCycleComponent, selectors: [["app-store-orderworkflow-cycle"]], decls: 54, vars: 2, consts: [[1, "row"], [1, "col-md-12"], [1, "heading-title"], [3, "formGroup"], [1, "topLevel"], [1, "col-md-6"], [1, "form-group"], [1, "form-control", "form-level", "no-border"], [1, "bottom-panel"], [1, "card"], [1, "card-body", "p-0"], [1, "form-check"], ["formControlName", "Workflow_type", "type", "radio", "id", "Workflow1", "value", "1", 1, "form-check-input"], ["for", "Workflow1", 1, "form-check-label"], [1, "col-md-5", "pr-0"], [1, "col-md-2"], [1, "btn", "send-order-text"], [1, "col-md-3"], ["formControlName", "Workflow_type", "type", "radio", "id", "Workflow2", "value", "2", 1, "form-check-input"], ["for", "Workflow2", 1, "form-check-label"], [1, "col-md-12", "pr-0"], [1, "more-space"], [1, "col-md-12", "mt-5", "text-right"], [1, "btn", "custom-btn", 3, "click"]], template: function StoreOrderworkflowCycleComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
        i0.ɵɵtext(3, "Manage my stores order processing workflow");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(4, "form", 3)(5, "div", 4)(6, "div", 0)(7, "div", 5)(8, "div", 6)(9, "label");
        i0.ɵɵtext(10, "Store");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "div", 7);
        i0.ɵɵtext(12);
        i0.ɵɵelementEnd()()()()();
        i0.ɵɵelementStart(13, "div", 8)(14, "div", 9)(15, "div", 10)(16, "h5");
        i0.ɵɵtext(17, "Select & Save Order Processing Workflow");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(18, "div", 11);
        i0.ɵɵelement(19, "input", 12);
        i0.ɵɵelementStart(20, "label", 13);
        i0.ɵɵtext(21, " Order Processing Workflow Cycle 1 ");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(22, "div", 0)(23, "div", 14);
        i0.ɵɵtext(24, " Confirmed Order Dashboard and Packaging Desk(Simultaneously) ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(25, "div", 15)(26, "button", 16);
        i0.ɵɵtext(27, "Send Order to");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(28, "div", 17);
        i0.ɵɵtext(29, "Store Delivery POS");
        i0.ɵɵelementEnd()();
        i0.ɵɵelement(30, "br");
        i0.ɵɵelementStart(31, "div", 11);
        i0.ɵɵelement(32, "input", 18);
        i0.ɵɵelementStart(33, "label", 19);
        i0.ɵɵtext(34, " Order Processing Workflow Cycle 2 ");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(35, "div", 0)(36, "div", 20);
        i0.ɵɵtext(37, " Confirmed Order Dashboard \u00A0\u00A0");
        i0.ɵɵelementStart(38, "button", 16);
        i0.ɵɵtext(39, "Send Order to");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(40, "span", 21);
        i0.ɵɵtext(41, "Product Line Store Console");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(42, "button", 16);
        i0.ɵɵtext(43, "Send Order to");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(44, "span", 21);
        i0.ɵɵtext(45, "Packaging Desk");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(46, "button", 16);
        i0.ɵɵtext(47, "Send Order to");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(48, "span", 21);
        i0.ɵɵtext(49, "Store Delivery POS");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(50, "div", 0)(51, "div", 22)(52, "button", 23);
        i0.ɵɵlistener("click", function StoreOrderworkflowCycleComponent_Template_button_click_52_listener() { return ctx.StoreorderProcessingWorkflowCycle(); });
        i0.ɵɵtext(53, "Save Order Processing Workflow");
        i0.ɵɵelementEnd()()()()()()();
    } if (rf & 2) {
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("formGroup", ctx.storeUserForm);
        i0.ɵɵadvance(8);
        i0.ɵɵtextInterpolate1(" ", ctx.storeName, " ");
    } }, dependencies: [i2.ɵNgNoValidate, i2.DefaultValueAccessor, i2.RadioControlValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.FormGroupDirective, i2.FormControlName], styles: [".heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    padding: 10px 5px 10px;\r\n    font-size: 20px;\r\n  }\r\n  \r\n  .topLevel[_ngcontent-%COMP%] {\r\n    background: #fff;\r\n    padding: 20px;\r\n    margin: 0;\r\n    border-radius: 5px;\r\n  }\r\n  \r\n  .custom-file[_ngcontent-%COMP%] {\r\n     height: 100%;\r\n  }\r\n  \r\n  h1.heading-title[_ngcontent-%COMP%] {\r\n  \r\n  \r\n    span {\r\n        font-size: 10px;\r\n        text-transform: inherit;\r\n        background: #495057;\r\n        color: #fff;\r\n        padding: 10px 15px;\r\n        border-radius: 25px;\r\n    }\r\n  }\r\n  \r\n  h1.heading-title[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    max-width: 65px;\r\n    margin-right: 5px;\r\n  }\r\n  \r\n  h1.heading-title[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    font-weight: 400;\r\n    font-size: 13px;\r\n    position: absolute;\r\n    left: 80px;\r\n    bottom: 4px;\r\n    color: grey;\r\n  }\r\n  \r\n  \r\n  \r\n  .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    padding: 5px;\r\n    line-height: 18px;\r\n  }\r\n  \r\n  td.actdct_icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    max-width: 50px;\r\n  }\r\n  \r\n  .search-list-label[_ngcontent-%COMP%] {\r\n    margin-bottom: 5px;\r\n  }\r\n  \r\n  .btn[_ngcontent-%COMP%] {\r\n    font-size: 14px;\r\n    min-height: 36px;\r\n  }\r\n  \r\n  \r\n  label.clear[_ngcontent-%COMP%] {\r\n    display: block;\r\n    margin: 3px 0 0 0;\r\n  }\r\n  \r\n  .width-100[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n  \r\n  .txt-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    max-width: 50px;\r\n    margin-left: 5px;\r\n  }\r\n\r\n  .bottom-panel[_ngcontent-%COMP%] {\r\n    margin-top: 15px;\r\n    .form-check {\r\n      margin: 0 0 10px;\r\n      font-size: 15px;\r\n      font-weight: 600;\r\n  }\r\n\r\n  button.btn.send-order-text {\r\n    background: #63030c;\r\n    color: #fff;\r\n    position: relative;\r\n    top: -3px;\r\n    padding-top: 3px;\r\n    padding-bottom: 3px;\r\n    min-height: auto;\r\n    font-size: 12px;\r\n    padding-right: 5px;\r\n}\r\nbutton.btn.send-order-text:after {\r\n  content: \"\";\r\n  position: absolute;\r\n  border-left: 34px solid #63030c;\r\n  top: -5px;\r\n  right: -33px;\r\n  border-top: 17px solid transparent;\r\n  border-bottom: 17px solid transparent;\r\n}\r\n\r\nspan.more-space {\r\n  padding-left: 40px;\r\n  padding-right: 10px;\r\n}\r\n\r\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StoreOrderworkflowCycleComponent, [{
        type: Component,
        args: [{ selector: 'app-store-orderworkflow-cycle', template: "<div class=\"row\">\n    <div class=\"col-md-12\">\n      <h1 class=\"heading-title\">Manage my stores order processing workflow</h1>\n    </div>\n  </div>\n \n  \n  <form [formGroup]=\"storeUserForm\">\n    <div class=\"topLevel\">\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <div class=\"form-group\">\n            <label>Store</label>\n            <div class=\"form-control form-level no-border\">\n              {{storeName}}\n            </div>\n            <!-- <select class=\"form-control\" formControlName=\"STORE_ID\" (change)=\"onStoreChange($event)\">\n               [ngClass]=\"{ 'is-invalid': submitted1 && f1.SUBACCT_OFFICE_ID.errors }\"> \n              <option value=\"\">Select</option>\n              <option *ngFor=\"let store of storelist\" [value]=\"store.RETAIL_D2C_ACCT_INTRNL_OFFICE_REGID\">\n                {{store.RETAIL_D2C_SUBACCT_OFFICE_NAME}}</option>\n            </select> -->\n            <!-- <div *ngIf=\"submitted1 && f1.SUBACCT_OFFICE_ID.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"f1.SUBACCT_OFFICE_ID.errors.required\">Store is required</div>\n            </div> -->\n          </div>\n        </div>\n        <!-- <div class=\"col-md-3\">\n          <label class=\"clear\">&nbsp;</label>\n          <button class=\"btn width-100 custom-btn\">Display my Store Bank</button>\n        </div> -->\n      </div>\n  \n    </div>\n \n  \n  <div class=\"bottom-panel\">\n    <div class=\"card\">\n      <div class=\"card-body p-0\">\n        <h5>Select & Save Order Processing Workflow</h5>\n        <div class=\"form-check\">\n          <input class=\"form-check-input\" formControlName=\"Workflow_type\" type=\"radio\" id=\"Workflow1\" value=\"1\">\n          <label class=\"form-check-label\" for=\"Workflow1\">\n            Order Processing Workflow Cycle 1\n          </label>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-5 pr-0\">\n            Confirmed Order Dashboard and Packaging Desk(Simultaneously)\n          </div>\n          <div class=\"col-md-2\"><button class=\"btn send-order-text\">Send Order to</button></div>\n          <div class=\"col-md-3\">Store Delivery POS</div>\n        </div>\n<br>\n\n        <div class=\"form-check\">\n          <input formControlName=\"Workflow_type\" class=\"form-check-input\" type=\"radio\" id=\"Workflow2\" value=\"2\">\n          <label class=\"form-check-label\" for=\"Workflow2\">\n            Order Processing Workflow Cycle 2\n          </label>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-12 pr-0\">\n            Confirmed Order Dashboard &nbsp;&nbsp;<button class=\"btn send-order-text\">Send Order to</button>\n            <span class=\"more-space\">Product Line Store Console</span>\n            <button class=\"btn send-order-text\">Send Order to</button>\n            <span class=\"more-space\">Packaging Desk</span>\n            <button class=\"btn send-order-text\">Send Order to</button>\n            <span class=\"more-space\">Store Delivery POS</span>\n          </div>\n         \n         \n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-12 mt-5 text-right\">\n            <button (click)=\"StoreorderProcessingWorkflowCycle()\" class=\"btn custom-btn\">Save Order Processing Workflow</button>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</form>\n  \n  \n \n ", styles: ["\r\n\r\n.heading h2 {\r\n    padding: 10px 5px 10px;\r\n    font-size: 20px;\r\n  }\r\n  \r\n  .topLevel {\r\n    background: #fff;\r\n    padding: 20px;\r\n    margin: 0;\r\n    border-radius: 5px;\r\n  }\r\n  \r\n  .custom-file {\r\n     height: 100%;\r\n  }\r\n  \r\n  h1.heading-title {\r\n  \r\n  \r\n    span {\r\n        font-size: 10px;\r\n        text-transform: inherit;\r\n        background: #495057;\r\n        color: #fff;\r\n        padding: 10px 15px;\r\n        border-radius: 25px;\r\n    }\r\n  }\r\n  \r\n  h1.heading-title img {\r\n    max-width: 65px;\r\n    margin-right: 5px;\r\n  }\r\n  \r\n  h1.heading-title small {\r\n    display: inline-block;\r\n    font-weight: 400;\r\n    font-size: 13px;\r\n    position: absolute;\r\n    left: 80px;\r\n    bottom: 4px;\r\n    color: grey;\r\n  }\r\n  \r\n  \r\n  \r\n  .table th, .table td {\r\n    padding: 5px;\r\n    line-height: 18px;\r\n  }\r\n  \r\n  td.actdct_icon img {\r\n    max-width: 50px;\r\n  }\r\n  \r\n  .search-list-label {\r\n    margin-bottom: 5px;\r\n  }\r\n  \r\n  .btn {\r\n    font-size: 14px;\r\n    min-height: 36px;\r\n  }\r\n  \r\n  \r\n  label.clear {\r\n    display: block;\r\n    margin: 3px 0 0 0;\r\n  }\r\n  \r\n  .width-100 {\r\n    width: 100%;\r\n  }\r\n  \r\n  .txt-icon img {\r\n    max-width: 50px;\r\n    margin-left: 5px;\r\n  }\r\n\r\n  .bottom-panel {\r\n    margin-top: 15px;\r\n    .form-check {\r\n      margin: 0 0 10px;\r\n      font-size: 15px;\r\n      font-weight: 600;\r\n  }\r\n\r\n  button.btn.send-order-text {\r\n    background: #63030c;\r\n    color: #fff;\r\n    position: relative;\r\n    top: -3px;\r\n    padding-top: 3px;\r\n    padding-bottom: 3px;\r\n    min-height: auto;\r\n    font-size: 12px;\r\n    padding-right: 5px;\r\n}\r\nbutton.btn.send-order-text:after {\r\n  content: \"\";\r\n  position: absolute;\r\n  border-left: 34px solid #63030c;\r\n  top: -5px;\r\n  right: -33px;\r\n  border-top: 17px solid transparent;\r\n  border-bottom: 17px solid transparent;\r\n}\r\n\r\nspan.more-space {\r\n  padding-left: 40px;\r\n  padding-right: 10px;\r\n}\r\n\r\n}"] }]
    }], function () { return [{ type: i1.ApiService }, { type: i2.FormBuilder }, { type: i3.ToastrService }]; }, null); })();
//# sourceMappingURL=store-orderworkflow-cycle.component.js.map