import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "ngx-bootstrap/modal";
import * as i2 from "src/app/services/api.service";
import * as i3 from "ngx-toastr";
import * as i4 from "@angular/forms";
export class RefundComponent {
    constructor(bsModalRef, apiService, toastr, fb, modalService) {
        this.bsModalRef = bsModalRef;
        this.apiService = apiService;
        this.toastr = toastr;
        this.fb = fb;
        this.modalService = modalService;
    }
    ngOnInit() {
    }
    close() {
        this.bsModalRef.hide();
    }
}
RefundComponent.ɵfac = function RefundComponent_Factory(t) { return new (t || RefundComponent)(i0.ɵɵdirectiveInject(i1.BsModalRef), i0.ɵɵdirectiveInject(i2.ApiService), i0.ɵɵdirectiveInject(i3.ToastrService), i0.ɵɵdirectiveInject(i4.FormBuilder), i0.ɵɵdirectiveInject(i1.BsModalService)); };
RefundComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RefundComponent, selectors: [["app-refund"]], decls: 39, vars: 0, consts: [[1, "modal-header", "custom-header"], [1, "title-wrapper"], [1, "modal-title"], ["type", "button", 1, "close-btn", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "content"]], template: function RefundComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "h4", 2);
        i0.ɵɵtext(3, "Refund & Cancellation");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(4, "button", 3);
        i0.ɵɵlistener("click", function RefundComponent_Template_button_click_4_listener() { return ctx.close(); });
        i0.ɵɵelementStart(5, "span", 4);
        i0.ɵɵtext(6, "\u00D7");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(7, "div", 5)(8, "div", 6)(9, "p");
        i0.ɵɵtext(10, " Our focus is complete customer satisfaction. In the event, if you are not satisfied /displeased with Retail Products provided by our partners/OEMs and if you provide us the reason for your refund & Cancellation of payments with in three(03) days of your card recharge , we will refund back the money left on the card as balance on card , provided the reasons are genuine and proved after investigation. Please read the fine prints of each products sold on our Partner/OEM smart vending machines displayed on vending machines before charging your issued cards , it provides all the details about the services or the product you purchase from the Vending Machines . In case of dissatisfaction from our Partner Products & Services services, Users have the liberty to cancel their Card Re-charge and request a refund of Balance on the card from us. Our Policy for the cancellation and refund will be as follows: ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "p")(12, "strong");
        i0.ɵɵtext(13, "Cancellation Policy");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(14, "p");
        i0.ɵɵtext(15, "For Cancellations please contact us at");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(16, "p");
        i0.ɵɵtext(17, "Garima.k@all-day.in");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(18, "p");
        i0.ɵɵtext(19, " Requests received later than 3 business days of your Card re-charge will not be entertained for cancellation & Refund ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(20, "p")(21, "strong");
        i0.ɵɵtext(22, "Refund Policy");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(23, "p");
        i0.ɵɵtext(24, " We will try our best to provide best Products & service to our user, In case any user is not completely satisfied with our Products & service we can provide a refund. If paid by credit card, refunds will be issued to the original credit card provided at the time of purchase and in case of payment gateway name payments refund will be made to the same account. ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(25, "p")(26, "strong");
        i0.ɵɵtext(27, "MDR-Connect Platform");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(28, "p")(29, "strong");
        i0.ɵɵtext(30, "Cancellation & Refund Policy");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(31, "p");
        i0.ɵɵtext(32, " We will not entertain any cancellation request or retreat request for Membership Cancellation after 72 hours of payment. If cancellation is done within 72 Hours then we will refund the entire amount via same source within 07 to 10 working days. ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(33, "p");
        i0.ɵɵtext(34, " If the customer has paid twice for one transaction, the one transaction amount will be refunded via same source within 07 to 10 working days. ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(35, "p");
        i0.ɵɵtext(36, "For Cancellations & Refunds please contact us at");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(37, "p");
        i0.ɵɵtext(38, "Garima.k@all-day.in");
        i0.ɵɵelementEnd()()();
    } }, styles: [".modal-header[_ngcontent-%COMP%] {\r\n  position: relative;\r\n}\r\n\r\n.modal-header[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  text-align: center;\r\n  font-size: 20px;\r\n  font-weight: 600;\r\n  color: #000; \r\n}\r\n\r\n\r\n.modal-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  right: 15px;\r\n  top: 10px;\r\n}\r\n\r\n\r\n\r\n.modal-body[_ngcontent-%COMP%] {\r\n  padding: 20px 25px;\r\n  max-height: 80vh;\r\n  overflow-y: auto;\r\n}\r\n\r\n\r\n\r\n.modal-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  font-size: 15.8px;   \r\n  line-height: 1.7;\r\n  color: #555;\r\n  margin-bottom: 12px;\r\n}\r\n\r\n\r\n\r\n.modal-body[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%]:first-of-type   strong[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  font-size: 19px;       \r\n  color: #ff7a00;        \r\n  font-weight: 600;\r\n  margin-bottom: 6px;\r\n}\r\n\r\n\r\n\r\n.modal-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\r\n  font-size: 16.5px;\r\n  color: #222;\r\n  font-weight: 600;\r\n}\r\n\r\n\r\n\r\n.modal-body[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n  font-size: 17px;\r\n  color: #222;\r\n  font-weight: 600;\r\n  margin-top: 10px;\r\n}\r\n\r\n\r\n\r\n.modal-body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n  margin-left: 20px;\r\n  margin-bottom: 12px;\r\n}\r\n\r\n.modal-body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  font-size: 15.3px;\r\n  line-height: 1.6;\r\n  color: #555;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n\r\n\r\n.modal-body[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  display: block;\r\n  margin: 18px auto;\r\n  max-width: 65%;\r\n  height: auto;\r\n  border-radius: 6px;\r\n}\r\n\r\n\r\n\r\n.modal-body[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n\r\n\r\n.modal-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  border-collapse: collapse;\r\n  margin: 12px 0;\r\n}\r\n\r\n.modal-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .modal-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n  border: 1px solid #ddd;\r\n  padding: 9px;\r\n  font-size: 14.5px;\r\n}\r\n\r\n.modal-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n  background: #f7f7f7;\r\n  font-weight: 600;\r\n}\r\n\r\n\r\n\r\n.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  width: 5px;\r\n}\r\n\r\n.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n  background: #ccc;\r\n  border-radius: 10px;\r\n}\r\n\r\n.close-btn[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 15px;\r\n  right: 25px;\r\n  background: none;\r\n  border: none;\r\n  font-size: 32px;\r\n  cursor: pointer;\r\n  color: #575757;\r\n  z-index: 10;\r\n}\r\n\r\n.close-btn[_ngcontent-%COMP%]:hover {\r\n  color: #000;\r\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RefundComponent, [{
        type: Component,
        args: [{ selector: 'app-refund', template: "<div class=\"modal-header custom-header\">\n    \n    <div class=\"title-wrapper\">\n        <h4 class=\"modal-title\">Refund & Cancellation</h4>\n    </div>\n\n    <button type=\"button\" class=\"close-btn\" (click)=\"close()\">\n        <span aria-hidden=\"true\">&times;</span>\n    </button>\n\n</div>\n\n\n<div class=\"modal-body\">\n\n    <div class=\"content\">\n\n        <p>\n            Our focus is complete customer satisfaction. In the event, if you are not satisfied \n            /displeased with Retail Products provided by our partners/OEMs and if you \n            provide us the reason for your refund & Cancellation of payments with in \n            three(03) days of your card recharge , we will refund back the money left on the \n            card as balance on card , provided the reasons are genuine and proved after \n            investigation. Please read the fine prints of each products sold on our\n            Partner/OEM smart vending machines displayed on vending machines before \n            charging your issued cards , it provides all the details about the services or the \n            product you purchase from the Vending Machines . In case of dissatisfaction from \n            our Partner Products & Services services, Users have the liberty to cancel their \n            Card Re-charge and request a refund of Balance on the card from us. Our Policy \n            for the cancellation and refund will be as follows:\n        </p>\n\n\n        <p><strong>Cancellation Policy</strong></p>\n\n        <p>For Cancellations please contact us at</p>\n\n        <p>Garima.k@all-day.in</p>\n\n        <p>\n            Requests received later than 3 business days of your Card re-charge will not be \n            entertained for cancellation & Refund\n        </p>\n\n\n        <p><strong>Refund Policy</strong></p>\n\n        <p>\n            We will try our best to provide best Products & service to our user, In case any \n            user is not completely satisfied with our Products & service we can provide a \n            refund. If paid by credit card, refunds will be issued to the original credit card \n            provided at the time of purchase and in case of payment gateway name payments \n            refund will be made to the same account.\n        </p>\n\n\n        <p><strong>MDR-Connect Platform</strong></p>\n\n        <p><strong>Cancellation & Refund Policy</strong></p>\n\n        <p>\n            We will not entertain any cancellation request or retreat request for Membership \n            Cancellation after 72 hours of payment. If cancellation is done within 72 Hours \n            then we will refund the entire amount via same source within 07 to 10 working \n            days.\n        </p>\n\n\n        <p>\n            If the customer has paid twice for one transaction, the one transaction amount \n            will be refunded via same source within 07 to 10 working days.\n        </p>\n\n\n        <p>For Cancellations & Refunds please contact us at</p>\n\n        <p>Garima.k@all-day.in</p>\n\n    </div>\n\n</div>", styles: ["\r\n/* \uD83D\uDD39 Modal Header Title (CENTER + BLACK) */\r\n.modal-header {\r\n  position: relative;\r\n}\r\n\r\n.modal-header .modal-title {\r\n  width: 100%;\r\n  text-align: center;\r\n  font-size: 20px;\r\n  font-weight: 600;\r\n  color: #000; /* black */\r\n}\r\n\r\n/* keep close button untouched */\r\n.modal-header .close-btn {\r\n  position: absolute;\r\n  right: 15px;\r\n  top: 10px;\r\n}\r\n\r\n\r\n/* \uD83D\uDD39 Modal Body */\r\n.modal-body {\r\n  padding: 20px 25px;\r\n  max-height: 80vh;\r\n  overflow-y: auto;\r\n}\r\n\r\n\r\n/* \uD83D\uDD39 Content Paragraphs (slight increase only) */\r\n.modal-body p {\r\n  font-size: 15.8px;   /* slightly increased */\r\n  line-height: 1.7;\r\n  color: #555;\r\n  margin-bottom: 12px;\r\n}\r\n\r\n\r\n/* \uD83D\uDD25 ONLY MAIN HEADING (FIRST STRONG PARA) */\r\n.modal-body .content > p:first-of-type strong {\r\n  display: inline-block;\r\n  font-size: 19px;       /* slightly increased */\r\n  color: #ff7a00;        /* orange */\r\n  font-weight: 600;\r\n  margin-bottom: 6px;\r\n}\r\n\r\n\r\n/* \uD83D\uDD39 Other headings (NORMAL BLACK, small increase) */\r\n.modal-body p strong {\r\n  font-size: 16.5px;\r\n  color: #222;\r\n  font-weight: 600;\r\n}\r\n\r\n\r\n/* \uD83D\uDD39 h4 headings (keep subtle) */\r\n.modal-body h4 {\r\n  font-size: 17px;\r\n  color: #222;\r\n  font-weight: 600;\r\n  margin-top: 10px;\r\n}\r\n\r\n\r\n/* \uD83D\uDD39 Lists */\r\n.modal-body ul {\r\n  margin-left: 20px;\r\n  margin-bottom: 12px;\r\n}\r\n\r\n.modal-body ul li {\r\n  font-size: 15.3px;\r\n  line-height: 1.6;\r\n  color: #555;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n\r\n/* \uD83D\uDD39 Images (CENTERED + CLEAN) */\r\n.modal-body img {\r\n  display: block;\r\n  margin: 18px auto;\r\n  max-width: 65%;\r\n  height: auto;\r\n  border-radius: 6px;\r\n}\r\n\r\n\r\n/* \uD83D\uDD39 Section spacing */\r\n.modal-body .content > * {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n\r\n/* \uD83D\uDD39 Tables */\r\n.modal-body table {\r\n  width: 100%;\r\n  border-collapse: collapse;\r\n  margin: 12px 0;\r\n}\r\n\r\n.modal-body table td,\r\n.modal-body table th {\r\n  border: 1px solid #ddd;\r\n  padding: 9px;\r\n  font-size: 14.5px;\r\n}\r\n\r\n.modal-body table th {\r\n  background: #f7f7f7;\r\n  font-weight: 600;\r\n}\r\n\r\n\r\n/* \uD83D\uDD39 Scrollbar */\r\n.modal-body::-webkit-scrollbar {\r\n  width: 5px;\r\n}\r\n\r\n.modal-body::-webkit-scrollbar-thumb {\r\n  background: #ccc;\r\n  border-radius: 10px;\r\n}\r\n\r\n.close-btn {\r\n  position: absolute;\r\n  top: 15px;\r\n  right: 25px;\r\n  background: none;\r\n  border: none;\r\n  font-size: 32px;\r\n  cursor: pointer;\r\n  color: #575757;\r\n  z-index: 10;\r\n}\r\n\r\n.close-btn:hover {\r\n  color: #000;\r\n}"] }]
    }], function () { return [{ type: i1.BsModalRef }, { type: i2.ApiService }, { type: i3.ToastrService }, { type: i4.FormBuilder }, { type: i1.BsModalService }]; }, null); })();
//# sourceMappingURL=refund.component.js.map