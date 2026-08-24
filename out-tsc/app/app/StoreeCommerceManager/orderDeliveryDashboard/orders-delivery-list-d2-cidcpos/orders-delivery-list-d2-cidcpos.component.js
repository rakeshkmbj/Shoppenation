import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "src/app/services/api.service";
import * as i2 from "ngx-bootstrap/modal";
import * as i3 from "@angular/forms";
import * as i4 from "ngx-toastr";
import * as i5 from "@angular/common";
function OrdersDeliveryListD2CIDCPOSComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13);
    i0.ɵɵtext(1, "Please enter 11 digit value");
    i0.ɵɵelementEnd();
} }
function OrdersDeliveryListD2CIDCPOSComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 14)(1, "h5", 15);
    i0.ɵɵtext(2, "Delivery Center Vahan Details");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 16)(4, "div", 3)(5, "div", 17)(6, "div", 18)(7, "p");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "p");
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "p");
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "p");
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "p");
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "p");
    i0.ɵɵtext(18);
    i0.ɵɵelement(19, "br");
    i0.ɵɵtext(20);
    i0.ɵɵelement(21, "br");
    i0.ɵɵtext(22);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(23, "div", 19);
    i0.ɵɵelement(24, "img", 20);
    i0.ɵɵpipe(25, "slice");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "div", 21);
    i0.ɵɵelement(27, "img", 20);
    i0.ɵɵpipe(28, "slice");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate1("Delivery Center ID: ", ctx_r1.lastMileStoreDPOSData.RETAIL_D2C_DELIVERY_CENTRE_ID, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Trip ID: ", ctx_r1.lastMileStoreDPOSData.RETAIL_D2C_TRIP_ID, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Vahan ID: ", ctx_r1.lastMileStoreDPOSData.HOME_DELIVERY_TRIP_ALLOCATED_TO_VAHAN_ID, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Vehicle No: ", ctx_r1.lastMileStoreDPOSData.RETAIl_DELIVERY_PLATFORM_VEHICLE_NUMBR, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Mobile No: ", ctx_r1.lastMileStoreDPOSData.RETAIL_DELIVERY_PLATFORM_ACCESS_MOBL_NUMBR, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate3("", ctx_r1.lastMileStoreDPOSData.RETAIL_DELIVERY_PERSON_FIRST_NAME, " ", ctx_r1.lastMileStoreDPOSData.RETAIL_DELIVERY_PERSON_MIDDLE_NAME, " ", ctx_r1.lastMileStoreDPOSData.RETAIL_DELIVERY_PERSON_LAST_NAME, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" Licence #: ", ctx_r1.lastMileStoreDPOSData.RETAIL_DELIVERY_PERSON_VEHICLE_LICENSE_NUMBR, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" Vehicle Type: ", ctx_r1.lastMileStoreDPOSData.RETAIL_DELIVERY_VEHICLE_TYPE, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate2("src", "", ctx_r1.imgURL, "", i0.ɵɵpipeBind3(25, 14, ctx_r1.lastMileStoreDPOSData.RETAIl_DELIVERY_PERSON_PHOTO_IMAGE, 1, -4), "jpeg", i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(3);
    i0.ɵɵpropertyInterpolate2("src", "", ctx_r1.imgURL, "", i0.ɵɵpipeBind3(28, 18, ctx_r1.lastMileStoreDPOSData.RETAIL_DELIVERY_PERSON_PHOTO_ID_CARD_IMAGE, 1, -4), "jpeg", i0.ɵɵsanitizeUrl);
} }
function OrdersDeliveryListD2CIDCPOSComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 22)(1, "div", 23);
    i0.ɵɵtext(2, "Order Selected & Dispatched to Ravi Kumar");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 24)(4, "div", 3)(5, "div", 25)(6, "table", 26)(7, "thead")(8, "tr")(9, "th");
    i0.ɵɵtext(10, "Order No.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "th");
    i0.ɵɵtext(12, "Packets on Rack");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "th");
    i0.ɵɵtext(14, "Total Packets in Order");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "th");
    i0.ɵɵtext(16, "Allocated Date & Time");
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
    i0.ɵɵtext(26);
    i0.ɵɵpipe(27, "date");
    i0.ɵɵelementEnd()()()()()()();
    i0.ɵɵelementStart(28, "div", 27)(29, "button", 28);
    i0.ɵɵlistener("click", function OrdersDeliveryListD2CIDCPOSComponent_div_17_Template_button_click_29_listener() { i0.ɵɵrestoreView(_r6); const ctx_r5 = i0.ɵɵnextContext(); const _r3 = i0.ɵɵreference(19); return i0.ɵɵresetView(ctx_r5.storePOSOrderDeliveryDispatch(_r3)); });
    i0.ɵɵtext(30, "Dispatch Order for Delivery");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(20);
    i0.ɵɵtextInterpolate(ctx_r2.lastMileStoreDPOSData.OrderNumber);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Rack #", ctx_r2.lastMileStoreDPOSData.RETAIL_D2C_STORAGE_RACK_ID, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r2.lastMileStoreDPOSData.RETAIL_PACKETS_IN_ORDERS);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(27, 4, ctx_r2.lastMileStoreDPOSData.HOME_DELIVERY_TRIP_ALLOCATED_TO_VAHAN_DATETIME));
} }
function OrdersDeliveryListD2CIDCPOSComponent_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div")(1, "div", 29)(2, "h4", 30);
    i0.ɵɵtext(3, "Store Delivery Details");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "button", 31);
    i0.ɵɵlistener("click", function OrdersDeliveryListD2CIDCPOSComponent_ng_template_18_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r8); const ctx_r7 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r7.modalRef == null ? null : ctx_r7.modalRef.hide()); });
    i0.ɵɵelementStart(5, "span", 32);
    i0.ɵɵtext(6, "\u00D7");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(7, "div", 33)(8, "div", 3)(9, "div", 25);
    i0.ɵɵelement(10, "img", 34);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "div", 3)(12, "div", 10);
    i0.ɵɵtext(13, "Order Number");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "div", 10);
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "div", 3)(17, "div", 10);
    i0.ɵɵtext(18, "Packet Count(s)");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "div", 10);
    i0.ɵɵtext(20);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(21, "div", 3)(22, "div", 10);
    i0.ɵɵtext(23, "Store Id");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "div", 10);
    i0.ɵɵtext(25);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(15);
    i0.ɵɵtextInterpolate(ctx_r4.dispatchedList.RETAIL_ORDER_NUMBR);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r4.dispatchedList.RETAIL_D2C_ORDER_PACKET_COUNTS);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r4.dispatchedList.RETAIL_D2C_ORDER_FROM_STORE_ID);
} }
export class OrdersDeliveryListD2CIDCPOSComponent {
    constructor(apiService, modalService, formBuilder, toastr) {
        this.apiService = apiService;
        this.modalService = modalService;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.imgURL = this.apiService.imgURL;
        this.disabled = true;
        this.getlogindata = localStorage.getItem('logindata');
        this.domainid = localStorage.getItem('getDomainID');
        this.getlogindata = JSON.parse(this.getlogindata);
        this.accountid = this.getlogindata.RETAIL_D2C_ACCT_ID;
        this.subaccountid = this.getlogindata.RETAIL_D2C_USR_SUBACCT_ID;
        this.storeid = this.getlogindata.RETAIL_D2C_ACCT_INTRNL_OFFICE_REGID;
        this.storeName = this.getlogindata.RETAIL_D2C_SUBACCT_OFFICE_NAME;
    }
    ngOnInit() {
    }
    getOrderNumberValue(event) {
        this.orderNumber = event.target.value;
        if (this.orderNumber.length == 11) {
            this.notMatch = false;
            this.disabled = false;
        }
        else {
            this.notMatch = true;
            this.disabled = true;
        }
    }
    getOrderDetails() {
        this.LastMileStoreDeliveryPOS();
    }
    LastMileStoreDeliveryPOS() {
        let storeDeliveryPOSLost = {
            ACCT_ID: this.accountid,
            SUBACCT_ID: this.subaccountid,
            SUBACCT_OFFICE_ID: +this.storeid,
            RETAIL_ORDER_NUMBR: this.orderNumber
        };
        this.apiService.postCall(this.apiService.baseURL + '/LastMileStoreDeliveryPOS', storeDeliveryPOSLost)
            .subscribe(data => {
            console.log(data);
            this.lastMileStoreDPOSData = data;
            this.isStoreDeliveryData = true;
            if (data.READY_FOR_DELIVERY_STAGE_FLAG == 0) {
                this.isStoreDeliveryData = false;
                this.toastr.error(data.Message, '', {
                    timeOut: 5000,
                });
            }
            else {
                this.toastr.success(data.Message, '', {
                    timeOut: 5000,
                });
            }
        }, (error) => {
            this.isStoreDeliveryData = false;
            this.toastr.error(error.Message, '', {
                timeOut: 5000,
            });
        });
    }
    storePOSOrderDeliveryDispatch(orderDispatchModal) {
        let dispatchData = {
            POS_HOME_DELIVERY_TYPE_FLG: true,
            POS_SELF_TAKEAWAY_DELIVERY_TYPE_FLG: false,
            POS_WALK_IN_DELIVERY_TYPE_FLG: false,
            RETAIL_ORDER_NUMBR: this.orderNumber
        };
        console.log(dispatchData);
        this.apiService.postCall(this.apiService.baseURL + '/StorePOSOrderDeliveryDispatch', dispatchData)
            .subscribe(data => {
            console.log(data);
            this.dispatchedList = data;
            this.toastr.success(data.Message, '', {
                timeOut: 5000,
            });
            this.modalRef = this.modalService.show(orderDispatchModal, Object.assign({}, { class: 'orderDispatchModal' }));
        }, (error) => {
            this.toastr.error(error, '', {
                timeOut: 5000,
            });
        });
    }
}
OrdersDeliveryListD2CIDCPOSComponent.ɵfac = function OrdersDeliveryListD2CIDCPOSComponent_Factory(t) { return new (t || OrdersDeliveryListD2CIDCPOSComponent)(i0.ɵɵdirectiveInject(i1.ApiService), i0.ɵɵdirectiveInject(i2.BsModalService), i0.ɵɵdirectiveInject(i3.FormBuilder), i0.ɵɵdirectiveInject(i4.ToastrService)); };
OrdersDeliveryListD2CIDCPOSComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: OrdersDeliveryListD2CIDCPOSComponent, selectors: [["app-orders-delivery-list-d2-cidcpos"]], decls: 20, vars: 4, consts: [[1, "content"], [1, "heading-title"], [1, "toplevel"], [1, "row"], [1, "col-md-4", "order-number-field"], [1, "form-group"], ["type", "text", 1, "form-control", 3, "keyup"], ["class", "error", 4, "ngIf"], [1, "btn", "custom-btn", "mt-2", "pull-right", 2, "min-width", "100px", 3, "disabled", "click"], ["class", "col-md-8", 4, "ngIf"], [1, "col-md-6"], ["class", "card exiting-office-table orderStatus", 4, "ngIf"], ["orderDispatchModal", ""], [1, "error"], [1, "col-md-8"], [1, "vahan-detail-title"], [1, "card"], [1, "col-md-4"], [1, "details"], [1, "col-md-3", "pl-0"], [1, "card-img-top", 3, "src"], [1, "col-md-5"], [1, "card", "exiting-office-table", "orderStatus"], [1, "card-header"], [1, "card-body", "pa-0"], [1, "col-md-12"], [1, "table"], [1, "text-right"], ["type", "button", 1, "btn", "custom-btn", 3, "click"], [1, "modal-header"], [1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "btn-close", "close", "pull-right", 3, "click"], ["aria-hidden", "true", 1, "visually-hidden"], [1, "modal-body"], ["src", "assets/images/active_icon1.png"]], template: function OrdersDeliveryListD2CIDCPOSComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "h1", 1);
        i0.ɵɵtext(2, "Home Delivery POS/Self Takeaway POS/Walk-in-POS");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "label");
        i0.ɵɵtext(8, "Enter Order Number");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "input", 6);
        i0.ɵɵlistener("keyup", function OrdersDeliveryListD2CIDCPOSComponent_Template_input_keyup_9_listener($event) { return ctx.getOrderNumberValue($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(10, OrdersDeliveryListD2CIDCPOSComponent_div_10_Template, 2, 0, "div", 7);
        i0.ɵɵelementStart(11, "button", 8);
        i0.ɵɵlistener("click", function OrdersDeliveryListD2CIDCPOSComponent_Template_button_click_11_listener() { return ctx.getOrderDetails(); });
        i0.ɵɵtext(12, "Send");
        i0.ɵɵelementEnd()()();
        i0.ɵɵtemplate(13, OrdersDeliveryListD2CIDCPOSComponent_div_13_Template, 29, 22, "div", 9);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(14, "div", 3)(15, "div", 10);
        i0.ɵɵelement(16, "div", 5);
        i0.ɵɵelementEnd()()();
        i0.ɵɵtemplate(17, OrdersDeliveryListD2CIDCPOSComponent_div_17_Template, 31, 6, "div", 11);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(18, OrdersDeliveryListD2CIDCPOSComponent_ng_template_18_Template, 26, 3, "ng-template", null, 12, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        i0.ɵɵadvance(10);
        i0.ɵɵproperty("ngIf", ctx.notMatch);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("disabled", ctx.disabled);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.isStoreDeliveryData);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngIf", ctx.isStoreDeliveryData);
    } }, dependencies: [i5.NgIf, i5.SlicePipe, i5.DatePipe], styles: [".toplevel[_ngcontent-%COMP%] {\r\n    background: #fff;\r\n    padding: 20px;\r\n    margin-bottom: 15px;\r\n    margin-top: 10px;\r\n    border-radius: 5px;\r\n}\r\n\r\n.orderStatus[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    max-width: 80px;\r\n}\r\n\r\n.vipDiv[_ngcontent-%COMP%] {\r\n    background: #f8f9fa;\r\n    padding: 15px;\r\n    border-radius: 3px;\r\n    min-height: 210px;\r\n}\r\n\r\n.card.person-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    max-width: 100px;\r\n}\r\n\r\n.orderStatus[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    vertical-align: middle;\r\n}\r\n\r\n.orderStatus[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n    font-size: 13px;\r\n}\r\n.orderStatus[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\r\n    color: #c50f20;\r\n    font-size: 90%;\r\n    font-weight: 600;\r\n}\r\n\r\n.bottom-btn[_ngcontent-%COMP%] {\r\n    float: right;\r\n}\r\n\r\n.alert.alert-success[_ngcontent-%COMP%] {\r\n    padding: 5px 10px;\r\n}\r\n\r\n.alert[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\r\n    font-size: 25px;\r\n    vertical-align: middle;\r\n    margin-left: 5px;\r\n}\r\n\r\n.orderStatus[_ngcontent-%COMP%] {\r\n.card-header {\r\n    border: 0;\r\n}\r\n.card-body {\r\n    padding: 0;\r\n}\r\n}\r\n\r\n\r\n.details[_ngcontent-%COMP%] {\r\n    padding: 0;\r\n}\r\n.details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n    font-weight: 600;\r\n    margin-bottom: 3px;\r\n}\r\n .card[_ngcontent-%COMP%] {\r\n    margin-bottom: 0;\r\n\r\n}\r\n.col-md-7.order-number-field[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\r\n    max-width: 300px;\r\n}\r\n\r\n.vahan-detail-title[_ngcontent-%COMP%] {\r\n    font-size: 14px;\r\n    font-weight: 600;\r\n}\r\n\r\n.error[_ngcontent-%COMP%] {\r\n    font-size: 11px;\r\n    color: #bd2130;\r\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OrdersDeliveryListD2CIDCPOSComponent, [{
        type: Component,
        args: [{ selector: 'app-orders-delivery-list-d2-cidcpos', template: "<div class=\"content\">\n    <h1 class=\"heading-title\">Home Delivery POS/Self Takeaway POS/Walk-in-POS</h1>\n    <div class=\"toplevel\">\n        <div class=\"row\">\n\n            <div class=\"col-md-4 order-number-field\">\n                <div class=\"form-group\">\n                    <label>Enter Order Number</label>\n                    <input type=\"text\" (keyup)=\"getOrderNumberValue($event)\" class=\"form-control\" />\n                    <div *ngIf=\"notMatch\" class=\"error\">Please enter 11 digit value</div>\n\n                    <button [disabled]=\"disabled\" (click)=\"getOrderDetails()\" style=\"min-width: 100px\" class=\"btn custom-btn mt-2 pull-right\">Send</button>\n                </div>\n            </div>\n            <div class=\"col-md-8\" *ngIf=\"isStoreDeliveryData\">\n                <h5 class=\"vahan-detail-title\">Delivery Center Vahan Details</h5>\n                <div class=\"card\">\n                    <div class=\"row\">\n                        <div class=\"col-md-4\">\n                            <div class=\"details\">\n                                <p>Delivery Center ID: {{lastMileStoreDPOSData.RETAIL_D2C_DELIVERY_CENTRE_ID}}</p>\n                                <p>Trip ID: {{lastMileStoreDPOSData.RETAIL_D2C_TRIP_ID}}</p>\n                                <p>Vahan ID: {{lastMileStoreDPOSData.HOME_DELIVERY_TRIP_ALLOCATED_TO_VAHAN_ID}}</p>\n                                <p>Vehicle No: {{lastMileStoreDPOSData.RETAIl_DELIVERY_PLATFORM_VEHICLE_NUMBR}}</p>\n                                <p>Mobile No: {{lastMileStoreDPOSData.RETAIL_DELIVERY_PLATFORM_ACCESS_MOBL_NUMBR}}</p>\n                                <p>{{lastMileStoreDPOSData.RETAIL_DELIVERY_PERSON_FIRST_NAME}} {{lastMileStoreDPOSData.RETAIL_DELIVERY_PERSON_MIDDLE_NAME}} {{lastMileStoreDPOSData.RETAIL_DELIVERY_PERSON_LAST_NAME}} <br> Licence #: {{lastMileStoreDPOSData.RETAIL_DELIVERY_PERSON_VEHICLE_LICENSE_NUMBR}}<br>                                    Vehicle Type: {{lastMileStoreDPOSData.RETAIL_DELIVERY_VEHICLE_TYPE}}\n                                </p>\n                            </div>\n                        </div>\n                        <div class=\"col-md-3 pl-0\">\n                            <img class=\"card-img-top\" src=\"{{imgURL}}{{lastMileStoreDPOSData.RETAIl_DELIVERY_PERSON_PHOTO_IMAGE | slice:1:-4}}jpeg\" />\n                        </div>\n                        <div class=\"col-md-5\">\n                            <img class=\"card-img-top\" src=\"{{imgURL}}{{lastMileStoreDPOSData.RETAIL_DELIVERY_PERSON_PHOTO_ID_CARD_IMAGE | slice:1:-4}}jpeg\" />\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <div class=\"form-group\">\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"card exiting-office-table orderStatus\" *ngIf=\"isStoreDeliveryData\">\n        <div class=\"card-header\">Order Selected & Dispatched to Ravi Kumar</div>\n        <div class=\"card-body pa-0\">\n            <div class=\"row\">\n                <div class=\"col-md-12\">\n                    <table class=\"table\">\n                        <thead>\n                            <tr>\n                                <th>Order No.</th>\n                                <th>Packets on Rack</th>\n                                <th>Total Packets in Order</th>\n                                <th>Allocated Date & Time</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr>\n                                <td>{{lastMileStoreDPOSData.OrderNumber}}</td>\n                                <td>Rack #{{lastMileStoreDPOSData.RETAIL_D2C_STORAGE_RACK_ID}}</td>\n                                <td>{{lastMileStoreDPOSData.RETAIL_PACKETS_IN_ORDERS}}</td>\n                                <td>{{lastMileStoreDPOSData.HOME_DELIVERY_TRIP_ALLOCATED_TO_VAHAN_DATETIME | date}}</td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n\n            </div>\n        </div>\n        <div class=\"text-right\">\n            <button type=\"button\" (click)=\"storePOSOrderDeliveryDispatch(orderDispatchModal)\" class=\"btn custom-btn\">Dispatch Order for Delivery</button>\n        </div>\n    </div>\n\n</div>\n<ng-template #orderDispatchModal>\n    <div>\n        <div class=\"modal-header\">\n            <h4 class=\"modal-title pull-left\">Store Delivery Details</h4>\n            <button type=\"button\" class=\"btn-close close pull-right\" aria-label=\"Close\" (click)=\"modalRef?.hide()\">\n      <span aria-hidden=\"true\" class=\"visually-hidden\">&times;</span>\n    </button>\n        </div>\n        <div class=\"modal-body\">\n            <div class=\"row\">\n                <div class=\"col-md-12\"><img src=\"assets/images/active_icon1.png\"></div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-6\">Order Number</div>\n                <div class=\"col-md-6\">{{dispatchedList.RETAIL_ORDER_NUMBR}}</div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-6\">Packet Count(s)</div>\n                <div class=\"col-md-6\">{{dispatchedList.RETAIL_D2C_ORDER_PACKET_COUNTS}}</div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-6\">Store Id</div>\n                <div class=\"col-md-6\">{{dispatchedList.RETAIL_D2C_ORDER_FROM_STORE_ID}}</div>\n            </div>\n        </div>\n    </div>\n</ng-template>", styles: [".toplevel {\r\n    background: #fff;\r\n    padding: 20px;\r\n    margin-bottom: 15px;\r\n    margin-top: 10px;\r\n    border-radius: 5px;\r\n}\r\n\r\n.orderStatus td img {\r\n    max-width: 80px;\r\n}\r\n\r\n.vipDiv {\r\n    background: #f8f9fa;\r\n    padding: 15px;\r\n    border-radius: 3px;\r\n    min-height: 210px;\r\n}\r\n\r\n.card.person-img img {\r\n    max-width: 100px;\r\n}\r\n\r\n.orderStatus td {\r\n    vertical-align: middle;\r\n}\r\n\r\n.orderStatus td .btn {\r\n    font-size: 13px;\r\n}\r\n.orderStatus small {\r\n    color: #c50f20;\r\n    font-size: 90%;\r\n    font-weight: 600;\r\n}\r\n\r\n.bottom-btn {\r\n    float: right;\r\n}\r\n\r\n.alert.alert-success {\r\n    padding: 5px 10px;\r\n}\r\n\r\n.alert .fa {\r\n    font-size: 25px;\r\n    vertical-align: middle;\r\n    margin-left: 5px;\r\n}\r\n\r\n.orderStatus {\r\n.card-header {\r\n    border: 0;\r\n}\r\n.card-body {\r\n    padding: 0;\r\n}\r\n}\r\n\r\n\r\n.details {\r\n    padding: 0;\r\n}\r\n.details p {\r\n    font-size: 12px;\r\n    font-weight: 600;\r\n    margin-bottom: 3px;\r\n}\r\n .card {\r\n    margin-bottom: 0;\r\n\r\n}\r\n.col-md-7.order-number-field .form-group {\r\n    max-width: 300px;\r\n}\r\n\r\n.vahan-detail-title {\r\n    font-size: 14px;\r\n    font-weight: 600;\r\n}\r\n\r\n.error {\r\n    font-size: 11px;\r\n    color: #bd2130;\r\n}\r\n\r\n"] }]
    }], function () { return [{ type: i1.ApiService }, { type: i2.BsModalService }, { type: i3.FormBuilder }, { type: i4.ToastrService }]; }, null); })();
//# sourceMappingURL=orders-delivery-list-d2-cidcpos.component.js.map