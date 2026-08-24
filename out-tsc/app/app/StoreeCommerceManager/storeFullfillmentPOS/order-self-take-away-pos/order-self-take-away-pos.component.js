import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
export class OrderSelfTakeAwayPOSComponent {
    constructor() { }
    ngOnInit() {
    }
}
OrderSelfTakeAwayPOSComponent.ɵfac = function OrderSelfTakeAwayPOSComponent_Factory(t) { return new (t || OrderSelfTakeAwayPOSComponent)(); };
OrderSelfTakeAwayPOSComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: OrderSelfTakeAwayPOSComponent, selectors: [["app-order-self-take-away-pos"]], decls: 87, vars: 0, consts: [[1, "content"], [1, "card"], [1, "card-header"], [1, "card-body"], [1, "form-field"], [1, "row"], [1, "col-md-6"], [1, "form-group"], [1, "form-control"], ["selected", ""], [1, "bottom-btn"], ["type", "button", 1, "btn", "grey-btn", "btn-dark"], ["type", "button", 1, "btn", "custom-btn", "btn-primary"], [1, "card", "exiting-office-table"], [1, "card-body", "pa-0"], [1, "table"], [1, "icon"], [1, "fa", "fa-trash"]], template: function OrderSelfTakeAwayPOSComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelement(1, "br");
        i0.ɵɵelementStart(2, "div", 1)(3, "div", 2);
        i0.ɵɵtext(4, "Add Point of Sale/Service(POS) for my Store");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "div", 3)(6, "h6");
        i0.ɵɵtext(7, "Domain: ");
        i0.ɵɵelementStart(8, "strong");
        i0.ɵɵtext(9, "Liquor");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(10, "div", 4)(11, "div", 5)(12, "div", 6)(13, "div", 7)(14, "label");
        i0.ɵɵtext(15, "Store where POS is to be added");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(16, "select", 8)(17, "option", 9);
        i0.ɵɵtext(18, "Select");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(19, "option");
        i0.ɵɵtext(20, "xxxxx");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(21, "option");
        i0.ɵɵtext(22, "xxxxx");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(23, "option");
        i0.ɵɵtext(24, "xxxxx");
        i0.ɵɵelementEnd()()()();
        i0.ɵɵelementStart(25, "div", 6)(26, "div", 7)(27, "label");
        i0.ɵɵtext(28, "Type of POS to be added");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(29, "select", 8)(30, "option", 9);
        i0.ɵɵtext(31, "Select");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(32, "option");
        i0.ɵɵtext(33, "xxxxx");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(34, "option");
        i0.ɵɵtext(35, "xxxxx");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(36, "option");
        i0.ɵɵtext(37, "xxxxx");
        i0.ɵɵelementEnd()()()()()()()();
        i0.ɵɵelementStart(38, "div", 10)(39, "button", 11);
        i0.ɵɵtext(40, "Cancel");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(41, "button", 12);
        i0.ɵɵtext(42, "Add POS to my Store");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(43, "div", 13)(44, "div", 2);
        i0.ɵɵtext(45, "Exiting Add POS to my Store");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(46, "div", 14)(47, "h6");
        i0.ɵɵtext(48, "Store: ");
        i0.ɵɵelementStart(49, "strong");
        i0.ɵɵtext(50, "Daizy Wines & Liquors Road Alpha Hazariagh");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(51, "table", 15)(52, "thead")(53, "tr")(54, "th");
        i0.ɵɵtext(55, "Sr. No");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(56, "th");
        i0.ɵɵtext(57, "Name");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(58, "th");
        i0.ɵɵtext(59, "\u00A0");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(60, "tbody")(61, "tr")(62, "td");
        i0.ɵɵtext(63, "01");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(64, "td");
        i0.ɵɵtext(65, "Self Take away POS");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(66, "td")(67, "span", 16);
        i0.ɵɵelement(68, "i", 17);
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(69, "tr")(70, "td");
        i0.ɵɵtext(71, "02");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(72, "td");
        i0.ɵɵtext(73, "Walk-in Customer POS");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(74, "td")(75, "span", 16);
        i0.ɵɵelement(76, "i", 17);
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(77, "tr")(78, "td");
        i0.ɵɵtext(79, "03");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(80, "td");
        i0.ɵɵtext(81, "Self Take away POS");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(82, "td")(83, "span", 16);
        i0.ɵɵelement(84, "i", 17);
        i0.ɵɵelementEnd()()()()()()();
        i0.ɵɵelement(85, "br")(86, "br");
        i0.ɵɵelementEnd();
    } }, dependencies: [i1.NgSelectOption, i1.ɵNgSelectMultipleOption], styles: [".col-md-12.reg_address[_ngcontent-%COMP%] {\r\n    padding: 10px 0;\r\n}\r\n.reg_address[_ngcontent-%COMP%]   .form-check-inline[_ngcontent-%COMP%] {\r\n    padding-right: 5px;\r\n    padding-left: 20px;\r\n    margin-right: 40px;\r\n}\r\n\r\n\r\n.switch[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    display: inline-block;\r\n    width: 45px;\r\n    height: 22px;\r\n    margin: 0;\r\n  }\r\n  \r\n  \r\n  .switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    opacity: 0;\r\n    width: 0;\r\n    height: 0;\r\n  }\r\n  \r\n  \r\n  .slider[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    cursor: pointer;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background-color: #ccc;\r\n    -webkit-transition: .4s;\r\n    transition: .4s;\r\n  }\r\n  \r\n  .slider[_ngcontent-%COMP%]:before {\r\n    position: absolute;\r\n    content: \"\";\r\n    height: 20px;\r\n    width: 20px;\r\n    left: 2px;\r\n    bottom: 1px;\r\n    background-color: white;\r\n    transition: .4s;\r\n  }\r\n  \r\n  input[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%] {\r\n    background-color: #2196F3;\r\n  }\r\n  \r\n  input[_ngcontent-%COMP%]:focus    + .slider[_ngcontent-%COMP%] {\r\n    box-shadow: 0 0 1px #2196F3;\r\n  }\r\n  \r\n  input[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%]:before {\r\n    transform: translateX(21px);\r\n  }\r\n  \r\n  \r\n  .slider.round[_ngcontent-%COMP%] {\r\n    border-radius: 34px;\r\n  }\r\n  \r\n  .slider.round[_ngcontent-%COMP%]:before {\r\n    border-radius: 50%;\r\n  }\r\n\r\n\r\n\r\n.table[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n}\r\n\r\n.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n    border-bottom: 0;\r\n}\r\n\r\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n    padding: 8px 15px;\r\n    font-size: 14px;\r\n}\r\n\r\n.bottom-btn[_ngcontent-%COMP%] {\r\n    clear: both;\r\n    width: 100%;\r\n    text-align: right;\r\n    padding: 20px;\r\n}\r\n\r\n.bottom-btn[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n    margin-left: 10px;\r\n    min-width: 100px;\r\n}\r\n\r\nspan.icon[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    color: #bd2130;\r\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OrderSelfTakeAwayPOSComponent, [{
        type: Component,
        args: [{ selector: 'app-order-self-take-away-pos', template: "<div class=\"content\">\n    <br>\n        <div class=\"card\">\n            <div class=\"card-header\">Add Point of Sale/Service(POS) for my Store</div>\n            <div class=\"card-body\">\n            <h6>Domain: <strong>Liquor</strong></h6>\n                <div class=\"form-field\">\n                    <div class=\"row\">\n               <div class=\"col-md-6\">\n                            <div class=\"form-group\">\n                                <label>Store where POS is to be added</label>\n                                <select class=\"form-control\">\n                                    <option selected>Select</option>\n                                    <option>xxxxx</option>\n                                    <option>xxxxx</option>\n                                    <option>xxxxx</option>\n                                  </select>\n                              </div>\n                        </div>\n                        <div class=\"col-md-6\">\n                            <div class=\"form-group\">\n                                <label>Type of POS to be added</label>\n                                <select class=\"form-control\">\n                                    <option selected>Select</option>\n                                    <option>xxxxx</option>\n                                    <option>xxxxx</option>\n                                    <option>xxxxx</option>\n                                  </select>\n                              </div>\n                        </div>\n                    \n                       \n                       \n                    </div>\n                    \n                 \n                   \n                   \n                </div>\n            </div>\n           \n          </div>\n          <div class=\"bottom-btn\">\n            <button type=\"button\" class=\"btn grey-btn btn-dark\">Cancel</button>\n            <button type=\"button\" class=\"btn custom-btn btn-primary\">Add POS to my Store</button>\n          </div>\n         \n          <div class=\"card exiting-office-table\">\n            <div class=\"card-header\">Exiting Add POS to my Store</div>\n            <div class=\"card-body pa-0\">\n                <h6>Store: <strong>Daizy Wines & Liquors Road Alpha Hazariagh</strong></h6>\n                <table class=\"table\">\n                    <thead>\n                      <tr>\n                        <th>Sr. No</th>\n                        <th>Name</th>\n                        <th>&nbsp;</th>\n                      </tr>\n                    </thead>\n                    <tbody>\n                      <tr>\n                        <td>01</td>\n                        <td>Self Take away POS</td>\n                        <td><span class=\"icon\"><i class=\"fa fa-trash\"></i></span></td>\n                      </tr>\n                      <tr>\n                        <td>02</td>\n                        <td>Walk-in Customer POS</td>\n                        <td><span class=\"icon\"><i class=\"fa fa-trash\"></i></span></td>\n                      </tr>\n                      <tr>\n                        <td>03</td>\n                        <td>Self Take away POS</td>\n                        <td><span class=\"icon\"><i class=\"fa fa-trash\"></i></span></td>\n                      </tr>\n\n                   \n                    </tbody>\n                  </table>\n            \n            </div>\n           \n          </div>\n          <br><br>\n    </div>\n    ", styles: [".col-md-12.reg_address {\r\n    padding: 10px 0;\r\n}\r\n.reg_address .form-check-inline {\r\n    padding-right: 5px;\r\n    padding-left: 20px;\r\n    margin-right: 40px;\r\n}\r\n\r\n/* The switch - the box around the slider */\r\n.switch {\r\n    position: relative;\r\n    display: inline-block;\r\n    width: 45px;\r\n    height: 22px;\r\n    margin: 0;\r\n  }\r\n  \r\n  /* Hide default HTML checkbox */\r\n  .switch input {\r\n    opacity: 0;\r\n    width: 0;\r\n    height: 0;\r\n  }\r\n  \r\n  /* The slider */\r\n  .slider {\r\n    position: absolute;\r\n    cursor: pointer;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background-color: #ccc;\r\n    -webkit-transition: .4s;\r\n    transition: .4s;\r\n  }\r\n  \r\n  .slider:before {\r\n    position: absolute;\r\n    content: \"\";\r\n    height: 20px;\r\n    width: 20px;\r\n    left: 2px;\r\n    bottom: 1px;\r\n    background-color: white;\r\n    transition: .4s;\r\n  }\r\n  \r\n  input:checked + .slider {\r\n    background-color: #2196F3;\r\n  }\r\n  \r\n  input:focus + .slider {\r\n    box-shadow: 0 0 1px #2196F3;\r\n  }\r\n  \r\n  input:checked + .slider:before {\r\n    transform: translateX(21px);\r\n  }\r\n  \r\n  /* Rounded sliders */\r\n  .slider.round {\r\n    border-radius: 34px;\r\n  }\r\n  \r\n  .slider.round:before {\r\n    border-radius: 50%;\r\n  }\r\n\r\n\r\n\r\n.table {\r\n    margin: 0;\r\n}\r\n\r\n.table thead th {\r\n    border-bottom: 0;\r\n}\r\n\r\n.table td, .table th {\r\n    padding: 8px 15px;\r\n    font-size: 14px;\r\n}\r\n\r\n.bottom-btn {\r\n    clear: both;\r\n    width: 100%;\r\n    text-align: right;\r\n    padding: 20px;\r\n}\r\n\r\n.bottom-btn .btn {\r\n    margin-left: 10px;\r\n    min-width: 100px;\r\n}\r\n\r\nspan.icon .fa {\r\n    font-size: 20px;\r\n    color: #bd2130;\r\n}"] }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=order-self-take-away-pos.component.js.map