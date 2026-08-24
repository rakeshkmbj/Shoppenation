import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "ngx-bootstrap/modal";
import * as i2 from "src/app/services/api.service";
import * as i3 from "ngx-toastr";
import * as i4 from "@angular/forms";
export class ConnectComponent {
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
ConnectComponent.ɵfac = function ConnectComponent_Factory(t) { return new (t || ConnectComponent)(i0.ɵɵdirectiveInject(i1.BsModalRef), i0.ɵɵdirectiveInject(i2.ApiService), i0.ɵɵdirectiveInject(i3.ToastrService), i0.ɵɵdirectiveInject(i4.FormBuilder), i0.ɵɵdirectiveInject(i1.BsModalService)); };
ConnectComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ConnectComponent, selectors: [["app-connect"]], decls: 65, vars: 0, consts: [[1, "modal-header", "custom-header"], [1, "title-wrapper"], [1, "modal-title"], ["type", "button", 1, "close-btn", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "content"], ["src", "assets/images/Connect.jpg", 2, "width", "60%"], [2, "margin-left", "20px", "list-style-type", "disc"]], template: function ConnectComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "h4", 2);
        i0.ɵɵtext(3, "Connect");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(4, "button", 3);
        i0.ɵɵlistener("click", function ConnectComponent_Template_button_click_4_listener() { return ctx.close(); });
        i0.ɵɵelementStart(5, "span", 4);
        i0.ɵɵtext(6, "\u00D7");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(7, "div", 5)(8, "div", 6)(9, "p")(10, "strong");
        i0.ɵɵtext(11, "Partner With All Day Digital Platforms");
        i0.ɵɵelementEnd()();
        i0.ɵɵelement(12, "img", 7);
        i0.ɵɵelementStart(13, "p");
        i0.ɵɵtext(14, " We are constantly looking for Market Partners so expand your portfolio with our innovative and Next Generation Tech. Platforms and get lucrative partnerships with fast & agile deployments methodology . ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(15, "p")(16, "strong");
        i0.ɵɵtext(17, "Ideal for");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(18, "ul", 8)(19, "li");
        i0.ɵɵtext(20, "Resellers");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(21, "li");
        i0.ɵɵtext(22, "System Integrators");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(23, "li");
        i0.ɵɵtext(24, "Consulting organizations");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(25, "li");
        i0.ɵɵtext(26, "Domain based Marketing companies");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(27, "li");
        i0.ɵɵtext(28, "Products & Services Franchise companies");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(29, "li");
        i0.ɵɵtext(30, "Digital Marketing Organizations");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(31, "li");
        i0.ɵɵtext(32, "Freelancers & Senior Domain consultants");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(33, "li");
        i0.ɵɵtext(34, "Social Media Influencers");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(35, "li");
        i0.ɵɵtext(36, "Domain Process Audit Organizations");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(37, "li");
        i0.ɵɵtext(38, "Vending Machines Manufacturers");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(39, "li");
        i0.ɵɵtext(40, "Event Organizers & Clubs");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(41, "li");
        i0.ɵɵtext(42, "Schools /Universities/Hospitals/corporates");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(43, "p");
        i0.ɵɵtext(44, " Add a high value products to your Service offerings and earn on referrals , full deployments or become full time market franchise for domains/Geography ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(45, "ul", 8)(46, "li");
        i0.ɵɵtext(47, "Get Sales Trainings and Sales Kit of our Platform after signing a formal partnership agreement with online priority Support to your clients");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(48, "li");
        i0.ɵɵtext(49, "Faster win strategy formation with our partners sharing competitors industry data and our Platform USPs");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(50, "li");
        i0.ɵɵtext(51, "Higher Earnings");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(52, "li");
        i0.ɵɵtext(53, "Providing Promotional Growth to our partners on our Business OTT Platform Ad-Connect");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(54, "li");
        i0.ɵɵtext(55, "Provide Optional Tools to monetize All stakeholders keeping our partner interest as priority.");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(56, "p")(57, "strong");
        i0.ɵɵtext(58, "For Partnership queries contact");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(59, "p");
        i0.ɵɵtext(60, "Rajesh Handa");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(61, "p");
        i0.ɵɵtext(62, "+91 9810061994");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(63, "p");
        i0.ɵɵtext(64, "Rajesh.h@all-day.in");
        i0.ɵɵelementEnd()()();
    } }, styles: [".modal-header[_ngcontent-%COMP%] {\r\n  position: relative;\r\n}\r\n\r\n.modal-header[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  text-align: center;\r\n  font-size: 20px;\r\n  font-weight: 600;\r\n  color: #000; \r\n}\r\n\r\n\r\n.modal-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  right: 15px;\r\n  top: 10px;\r\n}\r\n\r\n\r\n\r\n.modal-body[_ngcontent-%COMP%] {\r\n  padding: 20px 25px;\r\n  max-height: 80vh;\r\n  overflow-y: auto;\r\n}\r\n\r\n\r\n\r\n.modal-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  font-size: 15.8px;   \r\n  line-height: 1.7;\r\n  color: #555;\r\n  margin-bottom: 12px;\r\n}\r\n\r\n\r\n\r\n.modal-body[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%]:first-of-type   strong[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  font-size: 19px;       \r\n  color: #ff7a00;        \r\n  font-weight: 600;\r\n  margin-bottom: 6px;\r\n}\r\n\r\n\r\n\r\n.modal-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\r\n  font-size: 16.5px;\r\n  color: #222;\r\n  font-weight: 600;\r\n}\r\n\r\n\r\n\r\n.modal-body[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n  font-size: 17px;\r\n  color: #222;\r\n  font-weight: 600;\r\n  margin-top: 10px;\r\n}\r\n\r\n\r\n\r\n.modal-body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n  margin-left: 20px;\r\n  margin-bottom: 12px;\r\n}\r\n\r\n.modal-body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  font-size: 15.3px;\r\n  line-height: 1.6;\r\n  color: #555;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n\r\n\r\n.modal-body[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  display: block;\r\n  margin: 18px auto;\r\n  max-width: 65%;\r\n  height: auto;\r\n  border-radius: 6px;\r\n}\r\n\r\n\r\n\r\n.modal-body[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n\r\n\r\n.modal-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  border-collapse: collapse;\r\n  margin: 12px 0;\r\n}\r\n\r\n.modal-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .modal-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n  border: 1px solid #ddd;\r\n  padding: 9px;\r\n  font-size: 14.5px;\r\n}\r\n\r\n.modal-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n  background: #f7f7f7;\r\n  font-weight: 600;\r\n}\r\n\r\n\r\n\r\n.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  width: 5px;\r\n}\r\n\r\n.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n  background: #ccc;\r\n  border-radius: 10px;\r\n}\r\n\r\n.close-btn[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 15px;\r\n  right: 25px;\r\n  background: none;\r\n  border: none;\r\n  font-size: 32px;\r\n  cursor: pointer;\r\n  color: #575757;\r\n  z-index: 10;\r\n}\r\n\r\n.close-btn[_ngcontent-%COMP%]:hover {\r\n  color: #000;\r\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ConnectComponent, [{
        type: Component,
        args: [{ selector: 'app-connect', template: "<div class=\"modal-header custom-header\">\n\n    <div class=\"title-wrapper\">\n        <h4 class=\"modal-title\">Connect</h4>\n    </div>\n\n    <button type=\"button\" class=\"close-btn\" (click)=\"close()\">\n        <span aria-hidden=\"true\">&times;</span>\n    </button>\n\n</div>\n\n\n<div class=\"modal-body\">\n\n    <div class=\"content\">\n\n        <p><strong>Partner With All Day Digital Platforms</strong></p>\n\n        <img style=\"width: 60%;\" src=\"assets/images/Connect.jpg\">\n\n        <p>\n            We are constantly looking for Market Partners so expand your portfolio with our innovative and Next Generation Tech. Platforms and get lucrative partnerships with fast & agile deployments methodology .\n        </p>\n\n        <p><strong>Ideal for</strong></p>\n\n        <ul style=\"margin-left: 20px; list-style-type: disc;\">\n            <li>Resellers</li>\n            <li>System Integrators</li>\n            <li>Consulting organizations</li>\n            <li>Domain based Marketing companies</li>\n            <li>Products & Services Franchise companies</li>\n            <li>Digital Marketing Organizations</li>\n            <li>Freelancers & Senior Domain consultants</li>\n            <li>Social Media Influencers</li>\n            <li>Domain Process Audit Organizations</li>\n            <li>Vending Machines Manufacturers</li>\n            <li>Event Organizers & Clubs</li>\n            <li>Schools /Universities/Hospitals/corporates</li>\n        </ul>\n\n        <p>\n            Add a high value products to your Service offerings and earn on referrals , full deployments or become full time market franchise for domains/Geography\n        </p>\n\n        <ul style=\"margin-left: 20px; list-style-type: disc;\">\n            <li>Get Sales Trainings and Sales Kit of our Platform after signing a formal partnership agreement with online priority Support to your clients</li>\n            <li>Faster win strategy formation with our partners sharing competitors industry data and our Platform USPs</li>\n            <li>Higher Earnings</li>\n            <li>Providing Promotional Growth to our partners on our Business OTT Platform Ad-Connect</li>\n            <li>Provide Optional Tools to monetize  All stakeholders keeping our partner interest as priority.</li>\n        </ul>\n\n        <p><strong>For Partnership queries contact</strong></p>\n\n        <p>Rajesh Handa</p>\n        <p>+91 9810061994</p>\n        <p>Rajesh.h@all-day.in</p>\n\n    </div>\n\n</div>", styles: ["\r\n/* \uD83D\uDD39 Modal Header Title (CENTER + BLACK) */\r\n.modal-header {\r\n  position: relative;\r\n}\r\n\r\n.modal-header .modal-title {\r\n  width: 100%;\r\n  text-align: center;\r\n  font-size: 20px;\r\n  font-weight: 600;\r\n  color: #000; /* black */\r\n}\r\n\r\n/* keep close button untouched */\r\n.modal-header .close-btn {\r\n  position: absolute;\r\n  right: 15px;\r\n  top: 10px;\r\n}\r\n\r\n\r\n/* \uD83D\uDD39 Modal Body */\r\n.modal-body {\r\n  padding: 20px 25px;\r\n  max-height: 80vh;\r\n  overflow-y: auto;\r\n}\r\n\r\n\r\n/* \uD83D\uDD39 Content Paragraphs (slight increase only) */\r\n.modal-body p {\r\n  font-size: 15.8px;   /* slightly increased */\r\n  line-height: 1.7;\r\n  color: #555;\r\n  margin-bottom: 12px;\r\n}\r\n\r\n\r\n/* \uD83D\uDD25 ONLY MAIN HEADING (FIRST STRONG PARA) */\r\n.modal-body .content > p:first-of-type strong {\r\n  display: inline-block;\r\n  font-size: 19px;       /* slightly increased */\r\n  color: #ff7a00;        /* orange */\r\n  font-weight: 600;\r\n  margin-bottom: 6px;\r\n}\r\n\r\n\r\n/* \uD83D\uDD39 Other headings (NORMAL BLACK, small increase) */\r\n.modal-body p strong {\r\n  font-size: 16.5px;\r\n  color: #222;\r\n  font-weight: 600;\r\n}\r\n\r\n\r\n/* \uD83D\uDD39 h4 headings (keep subtle) */\r\n.modal-body h4 {\r\n  font-size: 17px;\r\n  color: #222;\r\n  font-weight: 600;\r\n  margin-top: 10px;\r\n}\r\n\r\n\r\n/* \uD83D\uDD39 Lists */\r\n.modal-body ul {\r\n  margin-left: 20px;\r\n  margin-bottom: 12px;\r\n}\r\n\r\n.modal-body ul li {\r\n  font-size: 15.3px;\r\n  line-height: 1.6;\r\n  color: #555;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n\r\n/* \uD83D\uDD39 Images (CENTERED + CLEAN) */\r\n.modal-body img {\r\n  display: block;\r\n  margin: 18px auto;\r\n  max-width: 65%;\r\n  height: auto;\r\n  border-radius: 6px;\r\n}\r\n\r\n\r\n/* \uD83D\uDD39 Section spacing */\r\n.modal-body .content > * {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n\r\n/* \uD83D\uDD39 Tables */\r\n.modal-body table {\r\n  width: 100%;\r\n  border-collapse: collapse;\r\n  margin: 12px 0;\r\n}\r\n\r\n.modal-body table td,\r\n.modal-body table th {\r\n  border: 1px solid #ddd;\r\n  padding: 9px;\r\n  font-size: 14.5px;\r\n}\r\n\r\n.modal-body table th {\r\n  background: #f7f7f7;\r\n  font-weight: 600;\r\n}\r\n\r\n\r\n/* \uD83D\uDD39 Scrollbar */\r\n.modal-body::-webkit-scrollbar {\r\n  width: 5px;\r\n}\r\n\r\n.modal-body::-webkit-scrollbar-thumb {\r\n  background: #ccc;\r\n  border-radius: 10px;\r\n}\r\n\r\n.close-btn {\r\n  position: absolute;\r\n  top: 15px;\r\n  right: 25px;\r\n  background: none;\r\n  border: none;\r\n  font-size: 32px;\r\n  cursor: pointer;\r\n  color: #575757;\r\n  z-index: 10;\r\n}\r\n\r\n.close-btn:hover {\r\n  color: #000;\r\n}"] }]
    }], function () { return [{ type: i1.BsModalRef }, { type: i2.ApiService }, { type: i3.ToastrService }, { type: i4.FormBuilder }, { type: i1.BsModalService }]; }, null); })();
//# sourceMappingURL=connect.component.js.map