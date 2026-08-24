import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "ngx-bootstrap/modal";
import * as i2 from "src/app/services/common.service";
import * as i3 from "@angular/common";
function HomeDeliveryDetailsModalComponent_span_42_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵelement(1, "i", 10);
    i0.ɵɵelementEnd();
} }
function HomeDeliveryDetailsModalComponent_span_43_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵelement(1, "i", 3);
    i0.ɵɵelementEnd();
} }
function HomeDeliveryDetailsModalComponent_span_51_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵelement(1, "i", 10);
    i0.ɵɵelementEnd();
} }
function HomeDeliveryDetailsModalComponent_span_52_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵelement(1, "i", 3);
    i0.ɵɵelementEnd();
} }
export class HomeDeliveryDetailsModalComponent {
    constructor(modalService, commonservice) {
        this.modalService = modalService;
        this.commonservice = commonservice;
        this.dataList = this.commonservice.homdeliverydata;
        console.log(this.dataList);
    }
    ngOnInit() {
    }
    hideModal() {
        this.modalService.hide();
    }
}
HomeDeliveryDetailsModalComponent.ɵfac = function HomeDeliveryDetailsModalComponent_Factory(t) { return new (t || HomeDeliveryDetailsModalComponent)(i0.ɵɵdirectiveInject(i1.BsModalService), i0.ɵɵdirectiveInject(i2.CommonService)); };
HomeDeliveryDetailsModalComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: HomeDeliveryDetailsModalComponent, selectors: [["app-home-delivery-details-modal"]], decls: 58, vars: 23, consts: [[1, "modal-header"], [1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "btn-close", "close", "pull-right", 3, "click"], [1, "ti-close"], [1, "modal-body"], [1, "list-group", "inline-list"], [1, "list-group-item", "d-flex", "justify-content-between", "align-items-center"], [1, "badge", "badge-primary", "badge-pill"], [1, "list-group"], [4, "ngIf"], [1, "ti-check"]], template: function HomeDeliveryDetailsModalComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "h4", 1);
        i0.ɵɵtext(2, "Home Delivery Details");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "button", 2);
        i0.ɵɵlistener("click", function HomeDeliveryDetailsModalComponent_Template_button_click_3_listener() { return ctx.hideModal(); });
        i0.ɵɵelement(4, "i", 3);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(5, "div", 4)(6, "ul", 5)(7, "li", 6);
        i0.ɵɵtext(8, " Order allocated to Trip Id ");
        i0.ɵɵelementStart(9, "span", 7);
        i0.ɵɵtext(10);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(11, "li", 6);
        i0.ɵɵtext(12, " Driver Mobile Number ");
        i0.ɵɵelementStart(13, "span")(14, "strong");
        i0.ɵɵtext(15);
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(16, "li", 6);
        i0.ɵɵtext(17, " Allocated to Vahan Id ");
        i0.ɵɵelementStart(18, "span", 7);
        i0.ɵɵtext(19);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(20, "li", 6);
        i0.ɵɵtext(21, " Vehicle Id ");
        i0.ɵɵelementStart(22, "span", 7);
        i0.ɵɵtext(23);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(24, "li", 6);
        i0.ɵɵtext(25, " Vahan Driver Name ");
        i0.ɵɵelementStart(26, "span")(27, "strong");
        i0.ɵɵtext(28);
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(29, "li", 6);
        i0.ɵɵtext(30, " Delivery Centre ");
        i0.ɵɵelementStart(31, "span")(32, "strong");
        i0.ɵɵtext(33);
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(34, "li", 6);
        i0.ɵɵtext(35, " Trip Execution Forecasted Date ");
        i0.ɵɵelementStart(36, "span", 7);
        i0.ɵɵtext(37);
        i0.ɵɵpipe(38, "date");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(39, "ul", 8)(40, "li", 6);
        i0.ɵɵtext(41, " Order taken by Vahan from Store ");
        i0.ɵɵtemplate(42, HomeDeliveryDetailsModalComponent_span_42_Template, 2, 0, "span", 9);
        i0.ɵɵtemplate(43, HomeDeliveryDetailsModalComponent_span_43_Template, 2, 0, "span", 9);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(44, "li", 6);
        i0.ɵɵtext(45, " Order taken DateTime ");
        i0.ɵɵelementStart(46, "span", 7);
        i0.ɵɵtext(47);
        i0.ɵɵpipe(48, "date");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(49, "li", 6);
        i0.ɵɵtext(50, " Order delivered to Customer ");
        i0.ɵɵtemplate(51, HomeDeliveryDetailsModalComponent_span_51_Template, 2, 0, "span", 9);
        i0.ɵɵtemplate(52, HomeDeliveryDetailsModalComponent_span_52_Template, 2, 0, "span", 9);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(53, "li", 6);
        i0.ɵɵtext(54, " Order delivered DateTime ");
        i0.ɵɵelementStart(55, "span", 7);
        i0.ɵɵtext(56);
        i0.ɵɵpipe(57, "date");
        i0.ɵɵelementEnd()()()();
    } if (rf & 2) {
        i0.ɵɵadvance(10);
        i0.ɵɵtextInterpolate(ctx.dataList.Order_Allocated_to_Trip_Numbr);
        i0.ɵɵadvance(5);
        i0.ɵɵtextInterpolate(ctx.dataList.Delivery_Vahan_Driver_Mobile_Number);
        i0.ɵɵadvance(4);
        i0.ɵɵtextInterpolate(ctx.dataList.Order_With_Delivery_Vahan_Id);
        i0.ɵɵadvance(4);
        i0.ɵɵtextInterpolate(ctx.dataList.Delivery_Vahan_Vehicle_Number);
        i0.ɵɵadvance(5);
        i0.ɵɵtextInterpolate2("", ctx.dataList.Delivery_Vahan_Driver_First_Name, " ", ctx.dataList.Delivery_Vahan_Driver_Last_Name, "");
        i0.ɵɵadvance(5);
        i0.ɵɵtextInterpolate(ctx.dataList.Delivery_Centre_Name);
        i0.ɵɵadvance(4);
        i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(38, 14, ctx.dataList.Trip_Execution_Forecasted_Date, "medium"));
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("ngIf", ctx.dataList.Order_Taken_by_Vahan_Flag == true);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.dataList.Order_Taken_by_Vahan_Flag == false);
        i0.ɵɵadvance(4);
        i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(48, 17, ctx.dataList.Order_Taken_by_Vahan_DateTime, "medium"));
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngIf", ctx.dataList.Order_Delivery_Done_to_Customer_Flag == true);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.dataList.Order_Delivery_Done_to_Customer_Flag == false);
        i0.ɵɵadvance(4);
        i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(57, 20, ctx.dataList.Order_Delivered_To_Customer_DateTime, "medium"));
    } }, dependencies: [i3.NgIf, i3.DatePipe], styles: ["i.ti-close[_ngcontent-%COMP%] {\r\n    border: 1px solid red;\r\n    padding: 5px;\r\n    border-radius: 50%;\r\n    color: red;\r\n    font-weight: bold;\r\n}\r\n\r\ni.ti-check[_ngcontent-%COMP%] {\r\n    color: #10b9b9;\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n}\r\n\r\n.badge[_ngcontent-%COMP%] {\r\n    padding: 8px 15px;\r\n    font-size: 85%;\r\n    font-weight: 600;\r\n}\r\n\r\n.modal-header[_ngcontent-%COMP%]   i.ti-close[_ngcontent-%COMP%] {\r\n    border: 0;\r\n    color: #495057;\r\n    font-size: 20px;\r\n}\r\n\r\n.inline-list[_ngcontent-%COMP%] + ul.list-group[_ngcontent-%COMP%] {\r\n    margin-top: 10px;\r\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HomeDeliveryDetailsModalComponent, [{
        type: Component,
        args: [{ selector: 'app-home-delivery-details-modal', template: "<div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\">Home Delivery Details</h4>\n    <button type=\"button\" class=\"btn-close close pull-right\" aria-label=\"Close\" (click)=\"hideModal()\">\n      <i class=\"ti-close\"></i>\n    </button>\n</div>\n<div class=\"modal-body\">\n    <ul class=\"list-group inline-list\">\n        <li class=\"list-group-item d-flex justify-content-between align-items-center\">\n            Order allocated to Trip Id\n            <span class=\"badge badge-primary badge-pill\">{{dataList.Order_Allocated_to_Trip_Numbr}}</span>\n        </li>\n        <li class=\"list-group-item d-flex justify-content-between align-items-center\">\n            Driver Mobile Number\n            <span><strong>{{dataList.Delivery_Vahan_Driver_Mobile_Number}}</strong></span>\n        </li>\n        <li class=\"list-group-item d-flex justify-content-between align-items-center\">\n            Allocated to Vahan Id\n            <span class=\"badge badge-primary badge-pill\">{{dataList.Order_With_Delivery_Vahan_Id}}</span>\n        </li>\n\n        <li class=\"list-group-item d-flex justify-content-between align-items-center\">\n            Vehicle Id\n            <span class=\"badge badge-primary badge-pill\">{{dataList.Delivery_Vahan_Vehicle_Number}}</span>\n        </li>\n        <li class=\"list-group-item d-flex justify-content-between align-items-center\">\n            Vahan Driver Name\n            <span><strong>{{dataList.Delivery_Vahan_Driver_First_Name}} {{dataList.Delivery_Vahan_Driver_Last_Name}}</strong></span>\n        </li>\n        <li class=\"list-group-item d-flex justify-content-between align-items-center\">\n            Delivery Centre\n            <span><strong>{{dataList.Delivery_Centre_Name}}</strong></span>\n        </li>\n        <li class=\"list-group-item d-flex justify-content-between align-items-center\">\n            Trip Execution Forecasted Date\n            <span class=\"badge badge-primary badge-pill\">{{dataList.Trip_Execution_Forecasted_Date | date:'medium'}}</span>\n        </li>\n    </ul>\n    <ul class=\"list-group\">\n        <li class=\"list-group-item d-flex justify-content-between align-items-center\">\n            Order taken by Vahan from Store\n            <span *ngIf=\"dataList.Order_Taken_by_Vahan_Flag == true\"><i class=\"ti-check\"></i></span>\n            <span *ngIf=\"dataList.Order_Taken_by_Vahan_Flag == false\"><i class=\"ti-close\"></i></span>\n        </li>\n        <li class=\"list-group-item d-flex justify-content-between align-items-center\">\n            Order taken DateTime\n            <span class=\"badge badge-primary badge-pill\">{{dataList.Order_Taken_by_Vahan_DateTime | date:'medium'}}</span>\n        </li>\n        <li class=\"list-group-item d-flex justify-content-between align-items-center\">\n            Order delivered to Customer\n            <span *ngIf=\"dataList.Order_Delivery_Done_to_Customer_Flag == true\"><i class=\"ti-check\"></i></span>\n            <span *ngIf=\"dataList.Order_Delivery_Done_to_Customer_Flag == false\"><i class=\"ti-close\"></i></span>\n        </li>\n        <li class=\"list-group-item d-flex justify-content-between align-items-center\">\n            Order delivered DateTime\n            <span class=\"badge badge-primary badge-pill\">{{dataList.Order_Delivered_To_Customer_DateTime | date:'medium'}}</span>\n        </li>\n    </ul>\n</div>", styles: ["i.ti-close {\r\n    border: 1px solid red;\r\n    padding: 5px;\r\n    border-radius: 50%;\r\n    color: red;\r\n    font-weight: bold;\r\n}\r\n\r\ni.ti-check {\r\n    color: #10b9b9;\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n}\r\n\r\n.badge {\r\n    padding: 8px 15px;\r\n    font-size: 85%;\r\n    font-weight: 600;\r\n}\r\n\r\n.modal-header i.ti-close {\r\n    border: 0;\r\n    color: #495057;\r\n    font-size: 20px;\r\n}\r\n\r\n.inline-list+ul.list-group {\r\n    margin-top: 10px;\r\n}"] }]
    }], function () { return [{ type: i1.BsModalService }, { type: i2.CommonService }]; }, null); })();
//# sourceMappingURL=home-delivery-details-modal.component.js.map