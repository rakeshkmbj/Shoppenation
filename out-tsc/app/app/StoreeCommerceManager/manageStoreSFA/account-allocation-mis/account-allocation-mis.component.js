import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "src/app/services/api.service";
import * as i2 from "ngx-bootstrap/modal";
import * as i3 from "ngx-toastr";
import * as i4 from "src/app/services/common.service";
import * as i5 from "@angular/forms";
import * as i6 from "@angular/common";
function AccountAllocationMISComponent_div_56_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 4)(1, "table", 28)(2, "thead")(3, "tr")(4, "th");
    i0.ɵɵtext(5, "Sr. No.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "th");
    i0.ɵɵtext(7, "Subacc ID");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "th");
    i0.ɵɵtext(9, "Store ID");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "th");
    i0.ɵɵtext(11, "Account Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "th");
    i0.ɵɵtext(13, "Account Address");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "th");
    i0.ɵɵtext(15, "Pincode");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "th");
    i0.ɵɵtext(17, " Actions ");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(18, "tbody")(19, "tr")(20, "td");
    i0.ɵɵtext(21, "1");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "td");
    i0.ɵɵtext(23, "18988");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "td");
    i0.ɵɵtext(25, "18237");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "td");
    i0.ɵɵtext(27, "Pawan Departments");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "td");
    i0.ɵɵtext(29, "D 78 South ex");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "td");
    i0.ɵɵtext(31, "91865923");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(32, "td")(33, "button", 29);
    i0.ɵɵlistener("click", function AccountAllocationMISComponent_div_56_Template_button_click_33_listener() { i0.ɵɵrestoreView(_r4); const ctx_r3 = i0.ɵɵnextContext(); const _r1 = i0.ɵɵreference(58); return i0.ɵɵresetView(ctx_r3.showAllocation(_r1)); });
    i0.ɵɵtext(34, "Show Allocation");
    i0.ɵɵelementEnd()()()()()();
} }
function AccountAllocationMISComponent_ng_template_57_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "form")(1, "div", 30)(2, "h4", 31);
    i0.ɵɵtext(3, "Allocated to Sales Force");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "button", 32);
    i0.ɵɵlistener("click", function AccountAllocationMISComponent_ng_template_57_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r6); const ctx_r5 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r5.modalRef.hide()); });
    i0.ɵɵelementStart(5, "span", 33);
    i0.ɵɵtext(6, "\u00D7");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(7, "div", 34)(8, "table", 28)(9, "thead")(10, "tr")(11, "th");
    i0.ɵɵtext(12, "Sr. No.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "th");
    i0.ɵɵtext(14, "User ID");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "th");
    i0.ɵɵtext(16, "First Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "th");
    i0.ɵɵtext(18, "Last name");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "th");
    i0.ɵɵtext(20, "Mobile No.");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(21, "tbody")(22, "tr")(23, "td");
    i0.ɵɵtext(24, "1");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "td");
    i0.ɵɵtext(26, "873412");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "td");
    i0.ɵɵtext(28, "Umesh");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(29, "td");
    i0.ɵɵtext(30, "Sharma");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(31, "td");
    i0.ɵɵtext(32, "7163693076");
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(33, "div", 35)(34, "button", 36);
    i0.ɵɵlistener("click", function AccountAllocationMISComponent_ng_template_57_Template_button_click_34_listener() { i0.ɵɵrestoreView(_r6); const ctx_r7 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r7.modalRef.hide()); });
    i0.ɵɵtext(35, "Close");
    i0.ɵɵelementEnd()()();
} }
export class AccountAllocationMISComponent {
    constructor(apiService, modalService, toastr, commonservice, formBuilder) {
        this.apiService = apiService;
        this.modalService = modalService;
        this.toastr = toastr;
        this.commonservice = commonservice;
        this.formBuilder = formBuilder;
        this.imgURL = this.apiService.imgURL;
        this.isGetAccVisible = false;
        this.getlogindata = localStorage.getItem('logindata');
        this.getlogindata = JSON.parse(this.getlogindata);
        this.accountid = this.getlogindata.RETAIL_D2C_ACCT_ID;
        this.subaccountid = this.getlogindata.RETAIL_D2C_USR_SUBACCT_ID;
        this.storeid = this.getlogindata.RETAIL_D2C_ACCT_INTRNL_OFFICE_REGID;
    }
    ngOnInit() {
    }
    openModalLarge(template) {
        this.isTitle = true;
        this.isAdd = true;
        this.modalRef = this.modalService.show(template, { class: 'modal-xl' });
    }
    openModalSmall(template) {
        this.isTitle = true;
        this.isAdd = true;
        this.smallModalRef = this.modalService.show(template, { class: 'modal-sm' });
    }
    getAccount() {
        this.isGetAccVisible = true;
    }
    showAllocation(template) {
        this.openModalLarge(template);
    }
}
AccountAllocationMISComponent.ɵfac = function AccountAllocationMISComponent_Factory(t) { return new (t || AccountAllocationMISComponent)(i0.ɵɵdirectiveInject(i1.ApiService), i0.ɵɵdirectiveInject(i2.BsModalService), i0.ɵɵdirectiveInject(i3.ToastrService), i0.ɵɵdirectiveInject(i4.CommonService), i0.ɵɵdirectiveInject(i5.FormBuilder)); };
AccountAllocationMISComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AccountAllocationMISComponent, selectors: [["app-account-allocation-mis"]], decls: 59, vars: 1, consts: [[1, "content"], [1, "heading-title"], [1, "row"], [1, "col-md-12"], [1, "card", "pb-0"], [1, "col-md-3"], [1, "form-group"], ["for", "dropdown1"], ["id", "dropdown1", 1, "form-control"], ["value", "", "selected", "", "disabled", ""], ["value", "option1a"], ["value", "option1b"], ["for", "dropdown2"], ["id", "dropdown2", 1, "form-control"], ["value", "option2a"], ["value", "option2b"], ["for", "dropdown3"], ["id", "dropdown3", 1, "form-control"], ["value", "option3a"], ["value", "option3b"], ["for", "dropdown4"], ["id", "dropdown4", 1, "form-control"], ["value", "option4a"], ["value", "option4b"], [1, "col-md-12", "mb-3"], ["type", "button", 1, "btn", "custom-btn", "float-right", 3, "click"], ["class", "card pb-0", 4, "ngIf"], ["viewusertemplate", ""], [1, "table"], [1, "mr-2", "px-2", "py-1", "action-btn", 3, "click"], [1, "modal-header"], [1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"]], template: function AccountAllocationMISComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "h1", 1);
        i0.ɵɵtext(2, "Account Allocation MIS");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "div", 2)(7, "div", 5)(8, "div", 6)(9, "label", 7);
        i0.ɵɵtext(10, "Account Category");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "select", 8)(12, "option", 9);
        i0.ɵɵtext(13, "Select option");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(14, "option", 10);
        i0.ɵɵtext(15, "Primary");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(16, "option", 11);
        i0.ɵɵtext(17, "Secondary");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(18, "option", 11);
        i0.ɵɵtext(19, "Teritiary");
        i0.ɵɵelementEnd()()()();
        i0.ɵɵelementStart(20, "div", 5)(21, "div", 6)(22, "label", 12);
        i0.ɵɵtext(23, "Country");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(24, "select", 13)(25, "option", 9);
        i0.ɵɵtext(26, "Select option");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(27, "option", 14);
        i0.ɵɵtext(28, "Option 2A");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(29, "option", 15);
        i0.ɵɵtext(30, "Option 2B");
        i0.ɵɵelementEnd()()()();
        i0.ɵɵelementStart(31, "div", 5)(32, "div", 6)(33, "label", 16);
        i0.ɵɵtext(34, "State");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(35, "select", 17)(36, "option", 9);
        i0.ɵɵtext(37, "Select option");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(38, "option", 18);
        i0.ɵɵtext(39, "Option 3A");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(40, "option", 19);
        i0.ɵɵtext(41, "Option 3B");
        i0.ɵɵelementEnd()()()();
        i0.ɵɵelementStart(42, "div", 5)(43, "div", 6)(44, "label", 20);
        i0.ɵɵtext(45, "City");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(46, "select", 21)(47, "option", 9);
        i0.ɵɵtext(48, "Select option");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(49, "option", 22);
        i0.ɵɵtext(50, "Option 4A");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(51, "option", 23);
        i0.ɵɵtext(52, "Option 4B");
        i0.ɵɵelementEnd()()()();
        i0.ɵɵelementStart(53, "div", 24)(54, "button", 25);
        i0.ɵɵlistener("click", function AccountAllocationMISComponent_Template_button_click_54_listener() { return ctx.getAccount(); });
        i0.ɵɵtext(55, "Get Account");
        i0.ɵɵelementEnd()()();
        i0.ɵɵtemplate(56, AccountAllocationMISComponent_div_56_Template, 35, 0, "div", 26);
        i0.ɵɵelementEnd()()()();
        i0.ɵɵtemplate(57, AccountAllocationMISComponent_ng_template_57_Template, 36, 0, "ng-template", null, 27, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        i0.ɵɵadvance(56);
        i0.ɵɵproperty("ngIf", ctx.isGetAccVisible);
    } }, dependencies: [i6.NgIf, i5.ɵNgNoValidate, i5.NgSelectOption, i5.ɵNgSelectMultipleOption, i5.NgControlStatusGroup, i5.NgForm], styles: ["i.fa.fa-edit[_ngcontent-%COMP%] {\r\n    font-size: 25px;\r\n    color: #bd2130;\r\n}\r\n\r\n.action-btn[_ngcontent-%COMP%] {\r\n    font-size: 0.775rem; \r\n    background-color: #10b981; \r\n    color: #ffffff; \r\n    border: none;\r\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AccountAllocationMISComponent, [{
        type: Component,
        args: [{ selector: 'app-account-allocation-mis', template: "<div class=\"content\">\n    <h1 class=\"heading-title\">Account Allocation MIS</h1>\n\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <div class=\"card pb-0\">\n\n                <div class=\"row\">\n                    <div class=\"col-md-3\">\n                        <div class=\"form-group\">\n                            <label for=\"dropdown1\">Account Category</label>\n                            <select id=\"dropdown1\" class=\"form-control\">\n                                <option value=\"\" selected disabled>Select option</option>\n                                <option value=\"option1a\">Primary</option>\n                                <option value=\"option1b\">Secondary</option>\n                                <option value=\"option1b\">Teritiary</option>\n                            </select>\n                        </div>\n                    </div>\n                    <div class=\"col-md-3\">\n                        <div class=\"form-group\">\n                            <label for=\"dropdown2\">Country</label>\n                            <select id=\"dropdown2\" class=\"form-control\">\n                                <option value=\"\" selected disabled>Select option</option>\n                                <option value=\"option2a\">Option 2A</option>\n                                <option value=\"option2b\">Option 2B</option>\n                            </select>\n                        </div>\n                    </div>\n                    <div class=\"col-md-3\">\n                        <div class=\"form-group\">\n                            <label for=\"dropdown3\">State</label>\n                            <select id=\"dropdown3\" class=\"form-control\">\n                                <option value=\"\" selected disabled>Select option</option>\n                                <option value=\"option3a\">Option 3A</option>\n                                <option value=\"option3b\">Option 3B</option>\n                            </select>\n                        </div>\n                    </div>\n                    <div class=\"col-md-3\">\n                        <div class=\"form-group\">\n                            <label for=\"dropdown4\">City</label>\n                            <select id=\"dropdown4\" class=\"form-control\">\n                                <option value=\"\" selected disabled>Select option</option>\n                                <option value=\"option4a\">Option 4A</option>\n                                <option value=\"option4b\">Option 4B</option>\n                            </select>\n                        </div>\n                    </div>\n                    <div class=\"col-md-12 mb-3\">\n                        <button (click)=\"getAccount()\" type=\"button\" class=\"btn custom-btn float-right\">Get\n                            Account</button>\n                    </div>\n                </div>\n\n                <div *ngIf=\"isGetAccVisible\" class=\"card pb-0\">\n                    <table class=\"table\">\n                        <thead>\n                            <tr>\n                                <th>Sr. No.</th>\n                                <th>Subacc ID</th>\n                                <th>Store ID</th>\n                                <th>Account Name</th>\n                                <th>Account Address</th>\n                                <th>Pincode</th>\n                                <th>\n                                    Actions\n                                </th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr>\n                                <td>1</td>\n                                <td>18988</td>\n                                <td>18237</td>\n                                <td>Pawan Departments</td>\n                                <td>D 78 South ex</td>\n                                <td>91865923</td>\n                                <td>\n                                    <button (click)=\"showAllocation(viewusertemplate)\" class=\"mr-2 px-2 py-1 action-btn\">Show Allocation</button>\n                                </td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n\n            </div>\n        </div>\n    </div>\n</div>\n\n\n<ng-template #viewusertemplate>\n    <form>\n        <div class=\"modal-header\">\n            <h4 class=\"modal-title pull-left\">Allocated to Sales Force</h4>\n            <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n                <span aria-hidden=\"true\">&times;</span>\n            </button>\n        </div>\n        <div class=\"modal-body\">\n            <table class=\"table\">\n                <thead>\n                    <tr>\n                        <th>Sr. No.</th>\n                        <th>User ID</th>\n                        <th>First Name</th>\n                        <th>Last name</th>\n                        <th>Mobile No.</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr>\n                        <td>1</td>\n                        <td>873412</td>\n                        <td>Umesh</td>\n                        <td>Sharma</td>\n                        <td>7163693076</td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n\n\n        <div class=\"modal-footer\">\n            <button (click)=\"modalRef.hide()\" type=\"button\" class=\"btn btn-secondary\">Close</button>\n        </div>\n    </form>\n</ng-template>\n", styles: ["i.fa.fa-edit {\r\n    font-size: 25px;\r\n    color: #bd2130;\r\n}\r\n\r\n.action-btn {\r\n    font-size: 0.775rem; /* Equivalent to text-sm */\r\n    background-color: #10b981; /* Equivalent to bg-green-500 */\r\n    color: #ffffff; /* Equivalent to text-white */\r\n    border: none;\r\n}\r\n"] }]
    }], function () { return [{ type: i1.ApiService }, { type: i2.BsModalService }, { type: i3.ToastrService }, { type: i4.CommonService }, { type: i5.FormBuilder }]; }, null); })();
//# sourceMappingURL=account-allocation-mis.component.js.map