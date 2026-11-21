import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "src/app/services/api.service";
import * as i2 from "ngx-bootstrap/modal";
import * as i3 from "@angular/forms";
import * as i4 from "ngx-toastr";
import * as i5 from "@angular/common";
function ManageStoreOrderprocessingComponent_div_18_tr_19_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr")(1, "td");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "td");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "td")(8, "button", 20);
    i0.ɵɵlistener("click", function ManageStoreOrderprocessingComponent_div_18_tr_19_Template_button_click_8_listener() { const restoredCtx = i0.ɵɵrestoreView(_r8); const console_r5 = restoredCtx.$implicit; const ctx_r7 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r7.displayAvailableProductLine(console_r5.Id, console_r5.Value)); });
    i0.ɵɵtext(9, "For Adding/Removing Product line(s) to Console");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "td")(11, "button", 21);
    i0.ɵɵtext(12, "View Associated Product Lines");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "td", 22);
    i0.ɵɵlistener("click", function ManageStoreOrderprocessingComponent_div_18_tr_19_Template_td_click_13_listener() { const restoredCtx = i0.ɵɵrestoreView(_r8); const i_r6 = restoredCtx.index; const ctx_r9 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r9.setClickedRow(i_r6)); });
    i0.ɵɵelementStart(14, "i", 23);
    i0.ɵɵlistener("click", function ManageStoreOrderprocessingComponent_div_18_tr_19_Template_i_click_14_listener() { const restoredCtx = i0.ɵɵrestoreView(_r8); const console_r5 = restoredCtx.$implicit; const ctx_r10 = i0.ɵɵnextContext(2); const _r2 = i0.ɵɵreference(23); return i0.ɵɵresetView(ctx_r10.editRow(console_r5.Id, console_r5.Value, _r2)); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const console_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("active", i_r6 == ctx_r4.selectedRow);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i_r6 + 1);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(console_r5.Id);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(console_r5.Value);
} }
function ManageStoreOrderprocessingComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 15)(1, "h5", 16);
    i0.ɵɵtext(2, "Already Available Consoles");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "table", 17)(4, "thead")(5, "tr")(6, "th", 18);
    i0.ɵɵtext(7, "Serial No.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "th", 18);
    i0.ɵɵtext(9, "Console ID");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "th", 18);
    i0.ɵɵtext(11, "Console Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "th", 18);
    i0.ɵɵtext(13, "\u00A0");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "th", 18);
    i0.ɵɵtext(15, "\u00A0");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "th", 18);
    i0.ɵɵtext(17, "\u00A0");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(18, "tbody");
    i0.ɵɵtemplate(19, ManageStoreOrderprocessingComponent_div_18_tr_19_Template, 15, 5, "tr", 19);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(19);
    i0.ɵɵproperty("ngForOf", ctx_r0.consoleList);
} }
function ManageStoreOrderprocessingComponent_div_21_ng_container_29_Template(rf, ctx) { if (rf & 1) {
    const _r18 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "tr")(2, "td");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "td");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "td");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "td");
    i0.ɵɵtext(9, "Yes");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "td")(11, "input", 32);
    i0.ɵɵlistener("change", function ManageStoreOrderprocessingComponent_div_21_ng_container_29_Template_input_change_11_listener($event) { i0.ɵɵrestoreView(_r18); const ctx_r17 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r17.onItemChange($event.target.value)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "td")(13, "button", 33);
    i0.ɵɵlistener("click", function ManageStoreOrderprocessingComponent_div_21_ng_container_29_Template_button_click_13_listener() { const restoredCtx = i0.ɵɵrestoreView(_r18); const productLine_r15 = restoredCtx.$implicit; const ctx_r19 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r19.ADDProductlinetoConsole(productLine_r15.ProductId)); });
    i0.ɵɵelement(14, "i", 34);
    i0.ɵɵtext(15, " Add");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const productLine_r15 = ctx.$implicit;
    const i_r16 = ctx.index;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i_r16 + 1);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(productLine_r15.ProductId);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(productLine_r15.ProductName);
    i0.ɵɵadvance(4);
    i0.ɵɵpropertyInterpolate("value", productLine_r15.ProductName);
} }
function ManageStoreOrderprocessingComponent_div_21_tr_30_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 35);
    i0.ɵɵtext(2, "No Records Found.");
    i0.ɵɵelementEnd()();
} }
function ManageStoreOrderprocessingComponent_div_21_ng_container_47_Template(rf, ctx) { if (rf & 1) {
    const _r23 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "tr")(2, "td");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "td");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "td");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "td")(9, "i", 36);
    i0.ɵɵlistener("click", function ManageStoreOrderprocessingComponent_div_21_ng_container_47_Template_i_click_9_listener() { const restoredCtx = i0.ɵɵrestoreView(_r23); const productLine_r20 = restoredCtx.$implicit; const ctx_r22 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r22.DeleteProductlinetoConsole(productLine_r20.RETAIL_D2C_PRODUCT_ID)); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const productLine_r20 = ctx.$implicit;
    const i_r21 = ctx.index;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i_r21 + 1);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(productLine_r20.RETAIL_D2C_PRODUCT_ID);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(productLine_r20.RETAIL_D2C_PRODUCT_NAME);
} }
function ManageStoreOrderprocessingComponent_div_21_tr_48_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 37);
    i0.ɵɵtext(2, "No Records Found.");
    i0.ɵɵelementEnd()();
} }
function ManageStoreOrderprocessingComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2)(1, "div", 24)(2, "div", 25)(3, "h4");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "div", 26)(6, "h4");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(8, "div", 4)(9, "div", 27)(10, "div", 28)(11, "h6");
    i0.ɵɵtext(12, "Add Product Line to Consoles");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "table", 29)(14, "thead")(15, "tr")(16, "th", 18);
    i0.ɵɵtext(17, "S No.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "th", 18);
    i0.ɵɵtext(19, "Product ID");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "th", 18);
    i0.ɵɵtext(21, "Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "th", 18);
    i0.ɵɵtext(23, "Available");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "th", 18);
    i0.ɵɵtext(25, "Add to Console");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "th", 18);
    i0.ɵɵtext(27, "\u00A0");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(28, "tbody");
    i0.ɵɵtemplate(29, ManageStoreOrderprocessingComponent_div_21_ng_container_29_Template, 16, 4, "ng-container", 30);
    i0.ɵɵtemplate(30, ManageStoreOrderprocessingComponent_div_21_tr_30_Template, 3, 0, "tr", 31);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(31, "div", 8)(32, "div", 28)(33, "h6");
    i0.ɵɵtext(34, "Delete Associated Product Lines with Console");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(35, "table", 29)(36, "thead")(37, "tr")(38, "th", 18);
    i0.ɵɵtext(39, "S No.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(40, "th", 18);
    i0.ɵɵtext(41, "Product ID");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(42, "th", 18);
    i0.ɵɵtext(43, "Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(44, "th", 18);
    i0.ɵɵtext(45, "\u00A0");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(46, "tbody");
    i0.ɵɵtemplate(47, ManageStoreOrderprocessingComponent_div_21_ng_container_47_Template, 10, 3, "ng-container", 30);
    i0.ɵɵtemplate(48, ManageStoreOrderprocessingComponent_div_21_tr_48_Template, 3, 0, "tr", 31);
    i0.ɵɵelementEnd()()()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("Console ID: ", ctx_r1.consoleID, "");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("Console Name: ", ctx_r1.consolename, "");
    i0.ɵɵadvance(22);
    i0.ɵɵproperty("ngForOf", ctx_r1.availableProductLineList);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (ctx_r1.availableProductLineList == null ? null : ctx_r1.availableProductLineList.length) == 0);
    i0.ɵɵadvance(17);
    i0.ɵɵproperty("ngForOf", ctx_r1.viewProductLineAddedList);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (ctx_r1.viewProductLineAddedList == null ? null : ctx_r1.viewProductLineAddedList.length) == 0);
} }
function ManageStoreOrderprocessingComponent_ng_template_22_div_21_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "Console Name is required");
    i0.ɵɵelementEnd();
} }
function ManageStoreOrderprocessingComponent_ng_template_22_div_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 50);
    i0.ɵɵtemplate(1, ManageStoreOrderprocessingComponent_ng_template_22_div_21_div_1_Template, 2, 0, "div", 31);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r24 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r24.f.RETAIL_CONSOLE_NAME.errors.required);
} }
function ManageStoreOrderprocessingComponent_ng_template_22_button_23_Template(rf, ctx) { if (rf & 1) {
    const _r29 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 51);
    i0.ɵɵlistener("click", function ManageStoreOrderprocessingComponent_ng_template_22_button_23_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r29); const ctx_r28 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r28.AddConsolesofStores()); });
    i0.ɵɵtext(1, "Add Store Console");
    i0.ɵɵelementEnd();
} }
function ManageStoreOrderprocessingComponent_ng_template_22_button_24_Template(rf, ctx) { if (rf & 1) {
    const _r31 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 20);
    i0.ɵɵlistener("click", function ManageStoreOrderprocessingComponent_ng_template_22_button_24_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r31); const ctx_r30 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r30.updateConsole()); });
    i0.ɵɵtext(1, "Update");
    i0.ɵɵelementEnd();
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
function ManageStoreOrderprocessingComponent_ng_template_22_Template(rf, ctx) { if (rf & 1) {
    const _r33 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "form", 3)(1, "div", 38)(2, "h4", 39);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "button", 40);
    i0.ɵɵlistener("click", function ManageStoreOrderprocessingComponent_ng_template_22_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r33); const ctx_r32 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r32.modalRef == null ? null : ctx_r32.modalRef.hide()); });
    i0.ɵɵelementStart(5, "span", 41);
    i0.ɵɵtext(6, "\u00D7");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(7, "div", 42)(8, "div", 43)(9, "span", 44);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "span", 44);
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "span", 44);
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "span", 44);
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(17, "div", 6)(18, "label");
    i0.ɵɵtext(19, "Enter Console Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(20, "input", 45);
    i0.ɵɵtemplate(21, ManageStoreOrderprocessingComponent_ng_template_22_div_21_Template, 2, 1, "div", 46);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "div", 47);
    i0.ɵɵtemplate(23, ManageStoreOrderprocessingComponent_ng_template_22_button_23_Template, 2, 0, "button", 48);
    i0.ɵɵtemplate(24, ManageStoreOrderprocessingComponent_ng_template_22_button_24_Template, 2, 0, "button", 49);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("formGroup", ctx_r3.addConsoleForm);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r3.modalTitle);
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate1("Store: ", ctx_r3.storeName, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Account ID: ", ctx_r3.accountid, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Sub Account ID: ", ctx_r3.subaccountid, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Store ID: ", ctx_r3.storeid, "");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(10, _c0, ctx_r3.submitted && ctx_r3.f.RETAIL_CONSOLE_NAME.errors));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r3.submitted && ctx_r3.f.RETAIL_CONSOLE_NAME.errors);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r3.update);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r3.update);
} }
export class ManageStoreOrderprocessingComponent {
    constructor(apiService, modalService, formBuilder, toastr) {
        this.apiService = apiService;
        this.modalService = modalService;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.imgURL = this.apiService.imgURL;
        this.disabled = true;
        this.submitted = false;
        this.update = false;
        this.isdisabled = true;
        this.hideProductLineFlag = false;
        this.accountid = this.apiService.requiredLoginData.accountid;
        this.subaccountid = this.apiService.requiredLoginData.subaccountid;
        this.storeid = this.apiService.requiredLoginData.storeid;
        this.storeName = this.apiService.requiredLoginData.storeName;
        this.domainid = this.apiService.requiredLoginData.domainid;
        this.setClickedRow = function (index) {
            this.selectedRow = index;
        };
    }
    ngOnInit() {
        // this. getStoreList();
        this.DisplayConsolesofStores();
        this.storeUserForm = this.formBuilder.group({
            STORE_ID: this.storeid,
            ACCT_ID: this.accountid,
            SUBACCT_ID: this.subaccountid,
            RETAIL_D2C_PRODUCT_ID: ['', Validators.required],
        });
        this.addConsoleForm = this.formBuilder.group({
            RETAIL_CONSOLE_NAME: ['', Validators.required],
        });
    }
    //   getStoreList() {
    //     this.apiService.storeList().subscribe((data) => {
    //       this.storelist = data;
    //       console.log(this.storelist);
    //   });
    //  }
    //  onStoreChange(e){
    //   this.storeID = this.storeUserForm.value.STORE_ID;
    //    this.storeName = e.target.options[e.target.options.selectedIndex].text;
    //    console.log(this.storeID);
    //    this.disabled = true;
    //    if(this.storeName != "Select") {
    //     this.DisplayConsolesofStores();
    //     this.disabled = false;
    //    }
    //  }
    openModal(template) {
        this.update = false;
        this.modalTitle = "Add Store Console";
        const initialState = {
            list: [this.storeName, this.accountid, this.subaccountid, this.storeid]
            // storename: this.storeName,
            // accountid: this.accountID,
            // subaccountid: this.subAccountID,
            // storeid: this.storeID
        };
        this.modalRef = this.modalService.show(template, { initialState, class: 'gray modal-md' });
    }
    DisplayConsolesofStores() {
        let dataList = {
            ACCT_ID: this.accountid,
            SUBACCT_ID: this.subaccountid,
            STORE_ID: +this.storeid
        };
        console.log(dataList);
        this.apiService.postCall(this.apiService.baseURL + '/DisplayConsolesofStores', dataList)
            .subscribe(data => {
            console.log(data);
            this.consoleList = data;
            if (data.length == 0) {
                this.toastr.error('Data not Available', '', { timeOut: 5000, });
                this.hideProductLineFlag = false;
            }
            //  this.toastr.success('STORE ORDER PROCESSING WORKFLOW CYCLE IS UPDATED', '',{timeOut: 5000,});
        }, (error) => {
            this.toastr.error(error.error.Message, '', {
                timeOut: 5000,
            });
        });
    }
    get f() { return this.addConsoleForm.controls; }
    AddConsolesofStores() {
        this.submitted = true;
        let dataList = {
            ACCT_ID: this.accountid,
            SUBACCT_ID: this.subaccountid,
            STORE_ID: +this.storeid,
            RETAIL_CONSOLE_NAME: this.addConsoleForm.value.RETAIL_CONSOLE_NAME
        };
        if (this.addConsoleForm.invalid) {
            return;
        }
        console.log(dataList);
        this.apiService.postCall(this.apiService.baseURL + '/ADDNewConsoletoStore', dataList)
            .subscribe(data => {
            console.log(data);
            if (data.length == 0) {
                this.toastr.success('Data not Available', '', { timeOut: 5000, });
            }
            this.toastr.success('Added Successfully', '', { timeOut: 5000, });
        }, (error) => {
            this.toastr.error(error.error.Message, '', {
                timeOut: 5000,
            });
        });
    }
    editRow(consoleId, consoleName, template) {
        this.modalTitle = "Update Store Console";
        console.log(consoleId, consoleName);
        this.consoleID = consoleId;
        this.modalRef = this.modalService.show(template);
        this.update = true;
        this.addConsoleForm.patchValue({
            // ACCT_ID: this.accountID,
            //  SUBACCT_ID: this.subAccountID,
            //  STORE_ID: + this.storeID,
            RETAIL_CONSOLE_ID: +this.storeid,
            RETAIL_CONSOLE_NAME: consoleName
        });
    }
    viewProductLine(consoleId) {
        this.apiService.getCall(this.apiService.baseURL + '/ViewProductlinesAvailablewithConsole/' + consoleId)
            .subscribe(data => {
            console.log(data);
            if ($.isArray(data)) {
                this.viewProductLineAddedList = data;
            }
            else {
                this.viewProductLineAddedList = [];
            }
        });
    }
    updateConsole() {
        let updateList = {
            ACCT_ID: this.accountid,
            SUBACCT_ID: this.subaccountid,
            STORE_ID: +this.storeid,
            RETAIL_CONSOLE_ID: +this.consoleID,
            RETAIL_CONSOLE_NAME: this.addConsoleForm.value.RETAIL_CONSOLE_NAME
        };
        console.log(updateList);
        this.apiService.postCall(this.apiService.baseURL + '/EditNewConsoletoStore', updateList)
            .subscribe(data => {
            var _a;
            console.log(data);
            this.DisplayConsolesofStores();
            (_a = this.modalRef) === null || _a === void 0 ? void 0 : _a.hide();
            this.toastr.success('Update Successfully', '', { timeOut: 5000, });
        }, (error) => {
            this.toastr.error(error.error.Message, '', {
                timeOut: 5000,
            });
        });
    }
    displayAvailableProductLine(consoleId, consoleName) {
        this.consoleID = consoleId;
        this.consolename = consoleName;
        let productLineData = {
            ACCT_ID: this.accountid,
            SUBACCT_ID: this.subaccountid,
            STORE_ID: +this.storeid,
            RETAIL_CONSOLE_ID: +consoleId
        };
        console.log(productLineData);
        this.apiService.postCall(this.apiService.baseURL + '/DisplayAvailableProductLine', productLineData)
            .subscribe(data => {
            console.log(data);
            this.hideProductLineFlag = true;
            this.availableProductLineList = data;
            this.viewProductLine(consoleId);
            //this.toastr.success('Update Successfully', '',{timeOut: 5000,});
        }, (error) => {
            this.toastr.error(error, '', {
                timeOut: 5000,
            });
        });
    }
    onItemChange(value) {
        console.log(" Value is : ", value);
        if (value) {
            this.isdisabled = false;
        }
    }
    ADDProductlinetoConsole(productid) {
        let productLineData = {
            Product_Line: +productid,
            RETAIL_CONSOLE_ID: +this.consoleID
        };
        console.log(productLineData);
        this.apiService.postCall(this.apiService.baseURL + '/ADDProductlinetoConsole', productLineData)
            .subscribe(data => {
            console.log(data);
            this.toastr.success(data, '', { timeOut: 5000, });
            this.viewProductLine(this.consoleID);
        }, (error) => {
            this.toastr.error(error, '', {
                timeOut: 5000,
            });
        });
    }
    DeleteProductlinetoConsole(productid) {
        let productLineData = {
            Product_Line: +productid,
            RETAIL_CONSOLE_ID: +this.consoleID
        };
        console.log(productLineData);
        this.apiService.postCall(this.apiService.baseURL + '/DeleteProductlinetoConsole', productLineData)
            .subscribe(data => {
            console.log(data);
            this.toastr.success(data, '', { timeOut: 5000, });
            this.viewProductLine(this.consoleID);
        }, (error) => {
            this.toastr.error(error, '', {
                timeOut: 5000,
            });
        });
    }
}
ManageStoreOrderprocessingComponent.ɵfac = function ManageStoreOrderprocessingComponent_Factory(t) { return new (t || ManageStoreOrderprocessingComponent)(i0.ɵɵdirectiveInject(i1.ApiService), i0.ɵɵdirectiveInject(i2.BsModalService), i0.ɵɵdirectiveInject(i3.FormBuilder), i0.ɵɵdirectiveInject(i4.ToastrService)); };
ManageStoreOrderprocessingComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ManageStoreOrderprocessingComponent, selectors: [["app-manage-store-orderprocessing"]], decls: 24, vars: 4, consts: [[1, "content"], [1, "heading-title"], [1, "card"], [3, "formGroup"], [1, "row"], [1, "col-md-5"], [1, "form-group"], [1, "form-control", "form-level", "no-border"], [1, "col-md-5", "pl-0"], [1, "block"], [1, "btn", "custom-btn", 3, "click"], ["class", "card p-2", 4, "ngIf"], [1, "col-md-12"], ["class", "card", 4, "ngIf"], ["template", ""], [1, "card", "p-2"], [1, "p-2", "card-title"], [1, "table"], ["scope", "col"], [3, "active", 4, "ngFor", "ngForOf"], [1, "btn", "black-btn", 3, "click"], [1, "btn", "black-btn"], [3, "click"], [1, "icofont-ui-edit", 3, "click"], [1, "row", "head-level"], [1, "col-md-2"], [1, "col-md-6"], [1, "col-md-7"], [1, "card-body", "p-0", "mb-0", "left-box"], [1, "table", "mb-0"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["type", "radio", "name", "exampleRadios", 1, "form-check-input", 3, "value", "change"], [1, "add-btn", 3, "click"], [1, "icofont-ui-add"], ["colspan", "6"], [1, "icofont-trash", 3, "click"], ["colspan", "4"], [1, "modal-header"], [1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "sub-list"], [1, "list-item"], ["type", "text", "formControlName", "RETAIL_CONSOLE_NAME", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], [1, "form-group", "mt-3"], ["type", "submit", "class", "btn custom-btn", 3, "click", 4, "ngIf"], ["class", "btn black-btn", 3, "click", 4, "ngIf"], [1, "invalid-feedback"], ["type", "submit", 1, "btn", "custom-btn", 3, "click"]], template: function ManageStoreOrderprocessingComponent_Template(rf, ctx) { if (rf & 1) {
        const _r34 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "div", 0)(1, "h1", 1);
        i0.ɵɵtext(2, "Manage Store Order Processing Consoles");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "div", 2)(4, "form", 3)(5, "div", 4)(6, "div", 5)(7, "div", 6)(8, "label");
        i0.ɵɵtext(9, "Store");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "div", 7);
        i0.ɵɵtext(11);
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(12, "div", 8)(13, "div", 6)(14, "label", 9);
        i0.ɵɵtext(15, "\u00A0");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(16, "button", 10);
        i0.ɵɵlistener("click", function ManageStoreOrderprocessingComponent_Template_button_click_16_listener() { i0.ɵɵrestoreView(_r34); const _r2 = i0.ɵɵreference(23); return i0.ɵɵresetView(ctx.openModal(_r2)); });
        i0.ɵɵtext(17, "Add New Console for Store");
        i0.ɵɵelementEnd()()()()()();
        i0.ɵɵtemplate(18, ManageStoreOrderprocessingComponent_div_18_Template, 20, 1, "div", 11);
        i0.ɵɵelementStart(19, "div", 4)(20, "div", 12);
        i0.ɵɵtemplate(21, ManageStoreOrderprocessingComponent_div_21_Template, 49, 6, "div", 13);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(22, ManageStoreOrderprocessingComponent_ng_template_22_Template, 25, 12, "ng-template", null, 14, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵelementEnd()();
    } if (rf & 2) {
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("formGroup", ctx.storeUserForm);
        i0.ɵɵadvance(7);
        i0.ɵɵtextInterpolate1(" ", ctx.storeName, " ");
        i0.ɵɵadvance(7);
        i0.ɵɵproperty("ngIf", (ctx.consoleList == null ? null : ctx.consoleList.length) > 0);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", ctx.hideProductLineFlag);
    } }, dependencies: [i5.NgClass, i5.NgForOf, i5.NgIf, i3.ɵNgNoValidate, i3.DefaultValueAccessor, i3.NgControlStatus, i3.NgControlStatusGroup, i3.FormGroupDirective, i3.FormControlName], styles: ["label.block[_ngcontent-%COMP%] {\r\n    display: block;\r\n}\r\n\r\ni.icofont-ui-edit[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    color: #ba080b;\r\n    cursor: pointer;\r\n}\r\n\r\n.head-level[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    min-height: 30px;\r\n    padding: 0;\r\n    font-size: 12px;\r\n}\r\n\r\ninput.form-check-input[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    margin: 0;\r\n}\r\n\r\n.left-box[_ngcontent-%COMP%] {\r\n    border: 1px solid #ddd;\r\n}\r\n\r\n.left-box[_ngcontent-%COMP%] {\r\n    h6 {\r\n        padding: 10px;\r\n        margin: 0;\r\n        font-size: 15px;\r\n        font-weight: 600;\r\n    }\r\n\r\n    .table th, .table td {\r\n        padding: 8px 5px;\r\n    }\r\n}\r\n\r\ni.icofont-trash[_ngcontent-%COMP%] {\r\n    color: #ba080b;\r\n    cursor: pointer;\r\n}\r\n\r\nspan.add-btn[_ngcontent-%COMP%] {\r\n    border: 1px solid #ba080b;\r\n    display: block;\r\n    font-size: 11px;\r\n    padding: 0px;\r\n    border-radius: 5px;\r\n    color: #ba080b;\r\n    cursor: pointer;\r\n}\r\n\r\n.modal-header[_ngcontent-%COMP%] {\r\n    padding: 10px 20px;\r\n}\r\n\r\n.modal-body[_ngcontent-%COMP%] {\r\n    padding: 10px 20px;\r\n}\r\n\r\nspan.list-item[_ngcontent-%COMP%] {\r\n    border: 1px solid #cfd8dc;\r\n    display: inline-block;\r\n    padding: 5px 10px;\r\n    margin-right: 5px;\r\n    border-radius: 25px;\r\n    font-size: 10px;\r\n    font-weight: 600;\r\n    margin-bottom: 10px;\r\n}\r\n\r\ninput.only-text-field[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    border: none;\r\n    pointer-events: none;\r\n}\r\n\r\ntr.active[_ngcontent-%COMP%]   input.only-text-field[_ngcontent-%COMP%] {\r\n    pointer-events: all;\r\n    border: 1px solid #ddd;\r\n    text-align: left;\r\n    padding: 3px 6px;\r\n    border-radius: 4px;\r\n}\r\n\r\n.update[_ngcontent-%COMP%] {\r\n    display: block;\r\n}\r\n\r\n.update[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    min-width: 75px;\r\n}\r\n\r\ni.icofont-close[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    padding: 5px 5px;\r\n    margin-left: 5px;\r\n    display: inline-block;\r\n    position: relative;\r\n    top: 3px;\r\n    cursor: pointer;\r\n}\r\n\r\n.card-title[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    font-size: 16px;\r\n    font-weight: 700;\r\n}\r\n\r\n.modal-content[_ngcontent-%COMP%]   button.btn.black-btn[_ngcontent-%COMP%] {\r\n    min-width: 100px;\r\n}\r\n\r\nbutton.add-btn[_ngcontent-%COMP%] {\r\n    border: 1px solid #e91e63;\r\n    background: none;\r\n    font-weight: 600;\r\n    border-radius: 25px;\r\n    font-size: 10px;\r\n    padding: 5px 10px;\r\n    cursor: pointer;\r\n}\r\n\r\n.modal-body[_ngcontent-%COMP%]   button.btn.black-btn[_ngcontent-%COMP%] {\r\n    width: 100px;\r\n    height: 40px;\r\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ManageStoreOrderprocessingComponent, [{
        type: Component,
        args: [{ selector: 'app-manage-store-orderprocessing', template: "<div class=\"content\">\n    <h1 class=\"heading-title\">Manage Store Order Processing Consoles</h1>\n\n    <div class=\"card\">\n      <form [formGroup]=\"storeUserForm\">   \n      <div class=\"row\">\n       \n        <div class=\"col-md-5\">\n          <div class=\"form-group\">\n            <label>Store</label>\n            <div class=\"form-control form-level no-border\">\n              {{storeName}}\n            </div>\n            <!-- <select class=\"form-control\" formControlName=\"STORE_ID\" (change)=\"onStoreChange($event)\">\n               [ngClass]=\"{ 'is-invalid': submitted1 && f1.SUBACCT_OFFICE_ID.errors }\">\n              <option value=\"\">Select</option>\n              <option *ngFor=\"let store of storelist\" [value]=\"store.RETAIL_D2C_ACCT_INTRNL_OFFICE_REGID\">\n                {{store.RETAIL_D2C_SUBACCT_OFFICE_NAME}}</option>\n            </select> -->\n            <!-- <div *ngIf=\"submitted1 && f1.SUBACCT_OFFICE_ID.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"f1.SUBACCT_OFFICE_ID.errors.required\">Store is required</div>\n            </div> -->\n          </div>\n        </div>\n\n        <div class=\"col-md-5 pl-0\">\n          <div class=\"form-group\">\n            <label class=\"block\">&nbsp;</label>\n              <button class=\"btn custom-btn\" (click)=\"openModal(template)\">Add New Console for Store</button>\n             \n            </div>\n      </div>\n\n\n        </div>\n      </form>\n      </div>\n      <div class=\"card p-2\" *ngIf=\"consoleList?.length > 0\">\n       <h5 class=\"p-2 card-title\">Already Available Consoles</h5>\n        <table class=\"table\">\n          <thead>\n            <tr>\n              <th scope=\"col\">Serial No.</th>\n              <th scope=\"col\">Console ID</th>\n              <th scope=\"col\">Console Name</th>\n              <th scope=\"col\">&nbsp;</th>\n              <th scope=\"col\">&nbsp;</th>\n              <th scope=\"col\">&nbsp;</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let console of consoleList let i = index\" [class.active]=\"i == selectedRow\">\n              <td>{{i + 1}}</td>\n              <td>{{console.Id}}</td>\n              <td>{{console.Value}}</td>\n              <td><button (click)=\"displayAvailableProductLine(console.Id, console.Value)\" class=\"btn black-btn\">For Adding/Removing Product line(s) to Console</button></td>\n              <td><button  class=\"btn black-btn\">View Associated Product Lines</button></td>\n              <td (click)=\"setClickedRow(i)\">\n                <i class=\"icofont-ui-edit\" (click)=\"editRow(console.Id, console.Value, template)\"></i>\n               \n              </td>\n            </tr>\n            \n          </tbody>\n        </table>\n         \n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"card\" *ngIf=\"hideProductLineFlag\">\n              <div class=\"row head-level\">\n                <div class=\"col-md-2\">\n                  <h4>Console ID: {{consoleID}}</h4>\n                  <!-- <button class=\"btn custom-btn\">Add Product Line</button> -->\n                </div>\n                <div class=\"col-md-6\">\n                  <h4>Console Name: {{consolename}}</h4>\n                  <!-- <button class=\"btn custom-btn\">Delete Product Line</button> -->\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-md-7\">\n                  <div class=\"card-body p-0 mb-0 left-box\">\n                    <h6>Add Product Line to Consoles</h6>\n                    <table class=\"table mb-0\">\n                      <thead>\n                        <tr>\n                          <th scope=\"col\">S No.</th>\n                          <th scope=\"col\">Product ID</th>\n                          <th scope=\"col\">Name</th>\n                          <th scope=\"col\">Available</th>\n                          <th scope=\"col\">Add to Console</th>\n                          <th scope=\"col\">&nbsp;</th>\n                        </tr>\n                      </thead>\n                      <tbody>\n                        <ng-container *ngFor=\"let productLine of availableProductLineList let i = index\">\n                        <tr>\n                          <td>{{i+1}}</td>\n                          <td>{{productLine.ProductId}}</td>\n                          <td>{{productLine.ProductName}}</td>\n                          <td>Yes</td>\n                          <td><input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" value=\"{{productLine.ProductName}}\" (change)=\"onItemChange($event.target.value)\"></td>\n                          <td>\n                            <button (click)=\"ADDProductlinetoConsole(productLine.ProductId)\" class=\"add-btn\"><i class=\"icofont-ui-add\"></i> Add</button>\n                           </td>\n                        </tr>\n                      </ng-container>\n                      <tr *ngIf=\"availableProductLineList?.length==0\">\n                        <td colspan=\"6\">No Records Found.</td>\n                      </tr>\n                      </tbody>\n                    </table>\n                  </div>\n                 </div>\n                \n             \n                 <div class=\"col-md-5 pl-0\">\n                  <div class=\"card-body p-0 mb-0 left-box\">\n                    <h6>Delete Associated Product Lines with Console</h6>\n                    <table class=\"table mb-0\">\n                      <thead>\n                        <tr>\n                          <th scope=\"col\">S No.</th>\n                          <th scope=\"col\">Product ID</th>\n                          <th scope=\"col\">Name</th>\n                         \n                          <th scope=\"col\">&nbsp;</th>\n                        </tr>\n                      </thead>\n                      <tbody>\n                        \n                        <ng-container *ngFor=\"let productLine of viewProductLineAddedList let i = index\">\n                        <tr>\n                          <td>{{i+1}}</td>\n                          <td>{{productLine.RETAIL_D2C_PRODUCT_ID}}</td>\n                          <td>{{productLine.RETAIL_D2C_PRODUCT_NAME}}</td>\n                          <td><i (click)=\"DeleteProductlinetoConsole(productLine.RETAIL_D2C_PRODUCT_ID)\" class=\"icofont-trash\"></i></td>\n                        </tr>\n                      </ng-container>\n                       <tr *ngIf=\"viewProductLineAddedList?.length==0\">\n                        <td colspan=\"4\">No Records Found.</td>\n                      </tr> \n                      </tbody>\n                    </table>\n                  </div>\n                </div>\n                </div>\n          </div>\n\n</div>\n<ng-template #template>\n  <form [formGroup]=\"addConsoleForm\">\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\">{{modalTitle}}</h4>\n   \n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef?.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <div class=\"sub-list\">\n      <span class=\"list-item\">Store: {{storeName}}</span>\n      <span class=\"list-item\">Account ID: {{accountid}}</span>\n      <span class=\"list-item\">Sub Account ID: {{subaccountid}}</span>\n      <span class=\"list-item\">Store ID: {{storeid}}</span>\n    </div>\n    <div class=\"form-group\">\n      <label>Enter Console Name</label>\n      <input type=\"text\" formControlName=\"RETAIL_CONSOLE_NAME\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.RETAIL_CONSOLE_NAME.errors }\" />\n      <div *ngIf=\"submitted && f.RETAIL_CONSOLE_NAME.errors\" class=\"invalid-feedback\">\n          <div *ngIf=\"f.RETAIL_CONSOLE_NAME.errors.required\">Console Name is required</div>\n      </div>\n    </div>\n\n    <div class=\"form-group mt-3\">\n     <button *ngIf=\"!update\" type=\"submit\" class=\"btn custom-btn\" (click)=\"AddConsolesofStores()\">Add Store Console</button>\n     <button *ngIf=\"update\" class=\"btn black-btn\" (click)=\"updateConsole()\">Update</button>\n    </div>\n  </div>\n  </form>\n</ng-template>", styles: ["label.block {\r\n    display: block;\r\n}\r\n\r\ni.icofont-ui-edit {\r\n    font-size: 20px;\r\n    color: #ba080b;\r\n    cursor: pointer;\r\n}\r\n\r\n.head-level .btn {\r\n    width: 100%;\r\n    min-height: 30px;\r\n    padding: 0;\r\n    font-size: 12px;\r\n}\r\n\r\ninput.form-check-input {\r\n    position: relative;\r\n    margin: 0;\r\n}\r\n\r\n.left-box {\r\n    border: 1px solid #ddd;\r\n}\r\n\r\n.left-box {\r\n    h6 {\r\n        padding: 10px;\r\n        margin: 0;\r\n        font-size: 15px;\r\n        font-weight: 600;\r\n    }\r\n\r\n    .table th, .table td {\r\n        padding: 8px 5px;\r\n    }\r\n}\r\n\r\ni.icofont-trash {\r\n    color: #ba080b;\r\n    cursor: pointer;\r\n}\r\n\r\nspan.add-btn {\r\n    border: 1px solid #ba080b;\r\n    display: block;\r\n    font-size: 11px;\r\n    padding: 0px;\r\n    border-radius: 5px;\r\n    color: #ba080b;\r\n    cursor: pointer;\r\n}\r\n\r\n.modal-header {\r\n    padding: 10px 20px;\r\n}\r\n\r\n.modal-body {\r\n    padding: 10px 20px;\r\n}\r\n\r\nspan.list-item {\r\n    border: 1px solid #cfd8dc;\r\n    display: inline-block;\r\n    padding: 5px 10px;\r\n    margin-right: 5px;\r\n    border-radius: 25px;\r\n    font-size: 10px;\r\n    font-weight: 600;\r\n    margin-bottom: 10px;\r\n}\r\n\r\ninput.only-text-field {\r\n    text-align: center;\r\n    border: none;\r\n    pointer-events: none;\r\n}\r\n\r\ntr.active input.only-text-field {\r\n    pointer-events: all;\r\n    border: 1px solid #ddd;\r\n    text-align: left;\r\n    padding: 3px 6px;\r\n    border-radius: 4px;\r\n}\r\n\r\n.update {\r\n    display: block;\r\n}\r\n\r\n.update button {\r\n    min-width: 75px;\r\n}\r\n\r\ni.icofont-close {\r\n    font-size: 20px;\r\n    padding: 5px 5px;\r\n    margin-left: 5px;\r\n    display: inline-block;\r\n    position: relative;\r\n    top: 3px;\r\n    cursor: pointer;\r\n}\r\n\r\n.card-title {\r\n    margin: 0;\r\n    font-size: 16px;\r\n    font-weight: 700;\r\n}\r\n\r\n.modal-content button.btn.black-btn {\r\n    min-width: 100px;\r\n}\r\n\r\nbutton.add-btn {\r\n    border: 1px solid #e91e63;\r\n    background: none;\r\n    font-weight: 600;\r\n    border-radius: 25px;\r\n    font-size: 10px;\r\n    padding: 5px 10px;\r\n    cursor: pointer;\r\n}\r\n\r\n.modal-body button.btn.black-btn {\r\n    width: 100px;\r\n    height: 40px;\r\n}"] }]
    }], function () { return [{ type: i1.ApiService }, { type: i2.BsModalService }, { type: i3.FormBuilder }, { type: i4.ToastrService }]; }, null); })();
//# sourceMappingURL=manage-store-orderprocessing.component.js.map