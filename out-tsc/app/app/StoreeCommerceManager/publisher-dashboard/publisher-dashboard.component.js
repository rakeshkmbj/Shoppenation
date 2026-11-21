import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
function PublisherDashboardComponent_div_59_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 38)(1, "label", 39);
    i0.ɵɵtext(2, "Country");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "select", 40)(4, "option", 41);
    i0.ɵɵtext(5, "Select");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "option");
    i0.ɵɵtext(7, "India");
    i0.ɵɵelementEnd()()();
} }
function PublisherDashboardComponent_div_61_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 38)(1, "label", 42);
    i0.ɵɵtext(2, "Inventory Type");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "select", 43)(4, "option", 41);
    i0.ɵɵtext(5, "Select");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "option");
    i0.ɵɵtext(7, "Websites");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "option");
    i0.ɵɵtext(9, "Apps");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "option");
    i0.ɵɵtext(11, "OTT");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "option");
    i0.ɵɵtext(13, "CTV");
    i0.ɵɵelementEnd()()();
} }
export class PublisherDashboardComponent {
    constructor() { }
    ngOnInit() {
    }
    sortEvent(e) {
        this.sortType = e.target.value;
        console.log(e.target.value);
    }
}
PublisherDashboardComponent.ɵfac = function PublisherDashboardComponent_Factory(t) { return new (t || PublisherDashboardComponent)(); };
PublisherDashboardComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PublisherDashboardComponent, selectors: [["app-publisher-dashboard"]], decls: 103, vars: 2, consts: [[1, "main-content-area"], [1, "row"], [1, "col-md-12"], [1, "heading-title"], [1, "topLevel"], [1, "col-md-3"], [1, "from-group", "w-100", "relative"], ["type", "text", "placeholder", "dd/mm/yyyy", 1, "form-control"], [1, "ti-calendar"], [1, "col-md-1", "d-flex", "align-items-center", "justify-content-center", "p-0"], [1, "or", "mt-3"], [1, "col-md-5", "report-radio-fields"], [1, "d-block", "w-100"], [1, "d-flex", "mt-1"], [1, "form-check", "form-check-inline"], ["type", "radio", "name", "inlineRadioOptions", "id", "inlineRadio1", "value", "option1", 1, "form-check-input"], ["for", "inlineRadio1", 1, "form-check-label"], ["type", "radio", "name", "inlineRadioOptions", "id", "inlineRadio2", "value", "option2", 1, "form-check-input"], ["for", "inlineRadio2", 1, "form-check-label"], ["type", "radio", "name", "inlineRadioOptions", "id", "inlineRadio3", "value", "option3", 1, "form-check-input"], ["for", "inlineRadio3", 1, "form-check-label"], ["type", "radio", "name", "inlineRadioOptions", "id", "inlineRadio4", "value", "option3", 1, "form-check-input"], [1, "row", "mt-2"], [1, "form-group"], ["for", "sorton"], ["id", "sorton", 1, "form-control", 3, "change"], ["value", ""], ["value", "ALL"], ["value", "GR"], ["value", "IT"], ["class", "form-group min-width-150", 4, "ngIf"], [1, "col-md-3", "mt-2"], [1, "btn", "custom-btn", "w-100"], [1, "card", "mt-3"], [1, "d-flex", "align-items-center"], [1, "mr-auto"], [1, "table"], ["scope", "col"], [1, "form-group", "min-width-150"], ["for", "country"], ["id", "country", 1, "form-control"], ["selected", ""], ["for", "inventory"], ["id", "inventory", 1, "form-control"]], template: function PublisherDashboardComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
        i0.ɵɵtext(4, "Publisher Dashboard");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(5, "form")(6, "div", 4)(7, "div", 1)(8, "div", 5)(9, "div", 6)(10, "label");
        i0.ɵɵtext(11, "From Date");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(12, "input", 7)(13, "i", 8);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(14, "div", 5)(15, "div", 6)(16, "label");
        i0.ɵɵtext(17, "To Date");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(18, "input", 7)(19, "i", 8);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(20, "div", 9)(21, "div", 10)(22, "span");
        i0.ɵɵtext(23, "OR");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(24, "div", 11)(25, "label", 12);
        i0.ɵɵtext(26, "Report for");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(27, "div", 13)(28, "div", 14);
        i0.ɵɵelement(29, "input", 15);
        i0.ɵɵelementStart(30, "label", 16);
        i0.ɵɵtext(31, "Today");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(32, "div", 14);
        i0.ɵɵelement(33, "input", 17);
        i0.ɵɵelementStart(34, "label", 18);
        i0.ɵɵtext(35, "Yesterday");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(36, "div", 14);
        i0.ɵɵelement(37, "input", 19);
        i0.ɵɵelementStart(38, "label", 20);
        i0.ɵɵtext(39, "Weekly");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(40, "div", 14);
        i0.ɵɵelement(41, "input", 21);
        i0.ɵɵelementStart(42, "label", 20);
        i0.ɵɵtext(43, "Monthly");
        i0.ɵɵelementEnd()()()()();
        i0.ɵɵelementStart(44, "div", 22)(45, "div", 5)(46, "div", 23)(47, "label", 24);
        i0.ɵɵtext(48, "Sort On");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(49, "select", 25);
        i0.ɵɵlistener("change", function PublisherDashboardComponent_Template_select_change_49_listener($event) { return ctx.sortEvent($event); });
        i0.ɵɵelementStart(50, "option", 26);
        i0.ɵɵtext(51, "Select");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(52, "option", 27);
        i0.ɵɵtext(53, "For All Geo & Inventories");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(54, "option", 28);
        i0.ɵɵtext(55, "Geography Region");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(56, "option", 29);
        i0.ɵɵtext(57, "Inventory Type");
        i0.ɵɵelementEnd()()()();
        i0.ɵɵelementStart(58, "div", 5);
        i0.ɵɵtemplate(59, PublisherDashboardComponent_div_59_Template, 8, 0, "div", 30);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(60, "div", 5);
        i0.ɵɵtemplate(61, PublisherDashboardComponent_div_61_Template, 14, 0, "div", 30);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(62, "div", 1)(63, "div", 31)(64, "button", 32);
        i0.ɵɵtext(65, "View Revenue Report");
        i0.ɵɵelementEnd()()()()();
        i0.ɵɵelementStart(66, "div", 33)(67, "div", 34)(68, "h4", 35);
        i0.ɵɵtext(69, "Generated Report");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(70, "table", 36)(71, "thead")(72, "tr")(73, "th", 37);
        i0.ɵɵtext(74, "Date");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(75, "th", 37);
        i0.ɵɵtext(76, "Inventory Type");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(77, "th", 37);
        i0.ɵɵtext(78, "Size");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(79, "th", 37);
        i0.ɵɵtext(80, "Impressions");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(81, "th", 37);
        i0.ɵɵtext(82, "Clicks");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(83, "th", 37);
        i0.ɵɵtext(84, " CPM");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(85, "th", 37);
        i0.ɵɵtext(86, " Revenue");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(87, "tbody")(88, "tr")(89, "td");
        i0.ɵɵtext(90, "xxxx");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(91, "td");
        i0.ɵɵtext(92, "xxxx");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(93, "td");
        i0.ɵɵtext(94, "xxxx");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(95, "td");
        i0.ɵɵtext(96, "xxxx");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(97, "td");
        i0.ɵɵtext(98, "xxxx");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(99, "td");
        i0.ɵɵtext(100, "xxxx");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(101, "td");
        i0.ɵɵtext(102, "xxxx");
        i0.ɵɵelementEnd()()()()()();
    } if (rf & 2) {
        i0.ɵɵadvance(59);
        i0.ɵɵproperty("ngIf", ctx.sortType === "GR" || ctx.sortType === "ALL");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.sortType === "IT" || ctx.sortType === "ALL");
    } }, dependencies: [i1.NgIf, i2.ɵNgNoValidate, i2.NgSelectOption, i2.ɵNgSelectMultipleOption, i2.NgControlStatusGroup, i2.NgForm], styles: [".topLevel[_ngcontent-%COMP%] {\r\n    background: #fff;\r\n    padding: 20px;\r\n    margin: 0;\r\n    border-radius: 5px;\r\n}\r\n\r\n.report-radio-fields[_ngcontent-%COMP%]   .form-check[_ngcontent-%COMP%] {\r\n    min-width: 85px;\r\n}\r\n\r\n.or[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    background: #e9ecef;\r\n    padding: 10px;\r\n    border-radius: 25px;\r\n    margin-top: 5px;\r\n}\r\n\r\n.relative[_ngcontent-%COMP%] {\r\n    position: relative;\r\n}\r\n\r\ni.ti-calendar[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 30px;\r\n    font-size: 20px;\r\n    right: 8px;\r\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PublisherDashboardComponent, [{
        type: Component,
        args: [{ selector: 'app-publisher-dashboard', template: "<div class=\"main-content-area\">\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n        <h1 class=\"heading-title\">Publisher Dashboard</h1>\n        </div>\n    </div>\n    <form>\n        <div class=\"topLevel\">\n            <div class=\"row\">\n                <div class=\"col-md-3\">\n                <div class=\"from-group w-100 relative\">\n                    <label>From Date</label>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"dd/mm/yyyy\" />\n                    <i class=\"ti-calendar\"></i>\n                </div>\n                </div>\n                <div class=\"col-md-3\">\n                <div class=\"from-group w-100 relative\">\n                    <label>To Date</label>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"dd/mm/yyyy\" />\n                    <i class=\"ti-calendar\"></i>\n                </div>\n                </div>\n                <div class=\"col-md-1 d-flex align-items-center justify-content-center p-0\">\n                    <div class=\"or mt-3\"><span>OR</span></div>\n                </div>\n                <div class=\"col-md-5 report-radio-fields\">\n                    <label class=\"d-block w-100\">Report for</label>\n                    <div class=\"d-flex mt-1\">\n                    <div class=\"form-check form-check-inline\">\n                        <input class=\"form-check-input\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio1\" value=\"option1\">\n                        <label class=\"form-check-label\" for=\"inlineRadio1\">Today</label>\n                      </div>\n                      <div class=\"form-check form-check-inline\">\n                        <input class=\"form-check-input\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio2\" value=\"option2\">\n                        <label class=\"form-check-label\" for=\"inlineRadio2\">Yesterday</label>\n                      </div>\n                      <div class=\"form-check form-check-inline\">\n                        <input class=\"form-check-input\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio3\" value=\"option3\">\n                        <label class=\"form-check-label\" for=\"inlineRadio3\">Weekly</label>\n                      </div>\n                      <div class=\"form-check form-check-inline\">\n                        <input class=\"form-check-input\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio4\" value=\"option3\">\n                        <label class=\"form-check-label\" for=\"inlineRadio3\">Monthly</label>\n                      </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row mt-2\">\n              <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label for=\"sorton\">Sort On</label>\n                <select class=\"form-control\" id=\"sorton\" (change)=\"sortEvent($event)\">\n                  <option value=\"\">Select</option>\n                  <option value=\"ALL\">For All Geo & Inventories</option>\n                  <option value=\"GR\">Geography Region</option>\n                  <option value=\"IT\">Inventory Type</option>\n                </select>\n              </div>\n              </div>\n              <div class=\"col-md-3\">\n              <div class=\"form-group min-width-150\" *ngIf=\"sortType === 'GR' || sortType === 'ALL'\">\n                <label for=\"country\">Country</label>\n                <select class=\"form-control\" id=\"country\">\n                  <option selected>Select</option>\n                  <option>India</option>\n                </select>\n              </div>\n              </div>\n              <div class=\"col-md-3\">\n              <div class=\"form-group min-width-150\" *ngIf=\"sortType === 'IT' || sortType === 'ALL'\">\n                <label for=\"inventory\">Inventory Type</label>\n                <select class=\"form-control\" id=\"inventory\">\n                  <option selected>Select</option>\n                  <option>Websites</option>\n                  <option>Apps</option>\n                  <option>OTT</option>\n                  <option>CTV</option>\n                </select>\n              </div>\n            </div>\n            </div>\n            <div class=\"row\">\n            <div class=\"col-md-3 mt-2\">\n                 <button class=\"btn custom-btn w-100\">View Revenue Report</button>\n            </div>\n            </div>\n        </div>\n    </form>\n\n<div class=\"card mt-3\">\n  <div class=\"d-flex align-items-center\">\n<h4 class=\"mr-auto\">Generated Report</h4>\n\n</div>\n<table class=\"table\">\n    <thead>\n      <tr>\n        <th scope=\"col\">Date</th>\n        <th scope=\"col\">Inventory Type</th>\n        <th scope=\"col\">Size</th>\n        <th scope=\"col\">Impressions</th>\n        <th scope=\"col\">Clicks</th>\n        <th scope=\"col\"> CPM</th>\n        <th scope=\"col\"> Revenue</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>xxxx</td>\n        <td>xxxx</td>\n        <td>xxxx</td>\n        <td>xxxx</td>\n        <td>xxxx</td>\n        <td>xxxx</td>\n        <td>xxxx</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n\n</div>", styles: [".topLevel {\r\n    background: #fff;\r\n    padding: 20px;\r\n    margin: 0;\r\n    border-radius: 5px;\r\n}\r\n\r\n.report-radio-fields .form-check {\r\n    min-width: 85px;\r\n}\r\n\r\n.or span {\r\n    background: #e9ecef;\r\n    padding: 10px;\r\n    border-radius: 25px;\r\n    margin-top: 5px;\r\n}\r\n\r\n.relative {\r\n    position: relative;\r\n}\r\n\r\ni.ti-calendar {\r\n    position: absolute;\r\n    top: 30px;\r\n    font-size: 20px;\r\n    right: 8px;\r\n}\r\n"] }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=publisher-dashboard.component.js.map