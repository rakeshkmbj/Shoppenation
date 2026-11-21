import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
import * as i3 from "@ng-bootstrap/ng-bootstrap";
function BusinessDomainProductLineComponent_ngb_carousel_102_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 30);
    i0.ɵɵelement(1, "img", 31);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "div", 32)(3, "label");
    i0.ɵɵtext(4, "Item01");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("src", ctx_r1.images[0], i0.ɵɵsanitizeUrl);
} }
function BusinessDomainProductLineComponent_ngb_carousel_102_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 30);
    i0.ɵɵelement(1, "img", 33);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "div", 32)(3, "label");
    i0.ɵɵtext(4, "Item02");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("src", ctx_r2.images[1], i0.ɵɵsanitizeUrl);
} }
function BusinessDomainProductLineComponent_ngb_carousel_102_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 30);
    i0.ɵɵelement(1, "img", 34);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "div", 32)(3, "label");
    i0.ɵɵtext(4, "Item03");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("src", ctx_r3.images[2], i0.ɵɵsanitizeUrl);
} }
function BusinessDomainProductLineComponent_ngb_carousel_102_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ngb-carousel", 28);
    i0.ɵɵtemplate(1, BusinessDomainProductLineComponent_ngb_carousel_102_ng_template_1_Template, 5, 1, "ng-template", 29);
    i0.ɵɵtemplate(2, BusinessDomainProductLineComponent_ngb_carousel_102_ng_template_2_Template, 5, 1, "ng-template", 29);
    i0.ɵɵtemplate(3, BusinessDomainProductLineComponent_ngb_carousel_102_ng_template_3_Template, 5, 1, "ng-template", 29);
    i0.ɵɵelementEnd();
} }
export class BusinessDomainProductLineComponent {
    constructor() {
        this.images = [1, 2, 3].map((n) => `../assets/images/${n}.jpg`);
    }
    ngOnInit() {
    }
}
BusinessDomainProductLineComponent.ɵfac = function BusinessDomainProductLineComponent_Factory(t) { return new (t || BusinessDomainProductLineComponent)(); };
BusinessDomainProductLineComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BusinessDomainProductLineComponent, selectors: [["app-business-domain-product-line"]], decls: 125, vars: 1, consts: [[1, "content"], [1, "heading-title"], [1, "card"], [1, "card-header"], [1, "card-body"], [1, "form-field"], [1, "row"], [1, "col-md-3"], [1, "form-group"], ["for", "office"], ["id", "office", 1, "form-control"], ["for", "irtype"], ["id", "irtype", 1, "form-control"], ["for", "pisno"], ["id", "pisno", 1, "form-control"], ["for", "orderno"], ["id", "orderno", 1, "form-control"], ["for", "ssa"], [1, "input-text"], [1, "col-md-12"], [1, "item-subitems"], [1, "item-details"], ["data-interval", "false", "data-ride", "carousel", "data-pause", "hover", 4, "ngIf"], [1, "col-md-9"], [1, "sub-item-details"], [1, "box"], ["src", "/assets/images/img-not-found.png", 2, "height", "170px"], [1, "label-name"], ["data-interval", "false", "data-ride", "carousel", "data-pause", "hover"], ["ngbSlide", ""], [1, "picsum-img-wrapper"], ["alt", "Random first slide", 2, "height", "170px", 3, "src"], [1, "carousel-caption"], ["alt", "Random second slide", 2, "height", "170px", 3, "src"], ["alt", "Random third slide", 2, "height", "170px", 3, "src"]], template: function BusinessDomainProductLineComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "h1", 1);
        i0.ɵɵtext(2, "CARRY-r MART STORE E-COMMERCE MANAGER");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "div", 2)(4, "div", 3);
        i0.ɵɵtext(5, "Store Published Items Recieved from B2B Platform Supplier");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "div", 4)(7, "h6");
        i0.ɵɵtext(8, "Finish/Publish Goods Recieved");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(9, "br");
        i0.ɵɵelementStart(10, "div", 5)(11, "div", 6)(12, "div", 7)(13, "div", 8)(14, "label", 9);
        i0.ɵɵtext(15, "Office");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(16, "select", 10)(17, "option");
        i0.ɵɵtext(18, "Delhi");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(19, "option");
        i0.ɵɵtext(20, "2");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(21, "option");
        i0.ɵɵtext(22, "3");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(23, "option");
        i0.ɵɵtext(24, "4");
        i0.ɵɵelementEnd()()()();
        i0.ɵɵelementStart(25, "div", 7)(26, "div", 8)(27, "label", 11);
        i0.ɵɵtext(28, "Inventory Recieved Type");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(29, "select", 12)(30, "option");
        i0.ɵɵtext(31, "xxxxx");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(32, "option");
        i0.ɵɵtext(33, "2");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(34, "option");
        i0.ɵɵtext(35, "3");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(36, "option");
        i0.ɵɵtext(37, "4");
        i0.ɵɵelementEnd()()()();
        i0.ɵɵelementStart(38, "div", 7)(39, "div", 8)(40, "label", 13);
        i0.ɵɵtext(41, "Pending Inventory Shipment No");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(42, "select", 14)(43, "option");
        i0.ɵɵtext(44, "15675656");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(45, "option");
        i0.ɵɵtext(46, "2");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(47, "option");
        i0.ɵɵtext(48, "3");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(49, "option");
        i0.ɵɵtext(50, "4");
        i0.ɵɵelementEnd()()()();
        i0.ɵɵelementStart(51, "div", 7)(52, "div", 8)(53, "label", 15);
        i0.ɵɵtext(54, "Order No");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(55, "select", 16)(56, "option");
        i0.ɵɵtext(57, "18789787");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(58, "option");
        i0.ɵɵtext(59, "2");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(60, "option");
        i0.ɵɵtext(61, "3");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(62, "option");
        i0.ɵɵtext(63, "4");
        i0.ɵɵelementEnd()()()()();
        i0.ɵɵelementStart(64, "div", 6)(65, "div", 7)(66, "div", 8)(67, "label", 17);
        i0.ɵɵtext(68, "Supplier Sub-Account");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(69, "div", 18);
        i0.ɵɵtext(70, "357789");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(71, "div", 7)(72, "div", 8)(73, "label");
        i0.ɵɵtext(74, "Domain");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(75, "div", 18);
        i0.ɵɵtext(76, "Women Wears");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(77, "div", 7)(78, "div", 8)(79, "label", 17);
        i0.ɵɵtext(80, "Product Line");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(81, "div", 18);
        i0.ɵɵtext(82, "Designer Sarees");
        i0.ɵɵelementEnd()()()();
        i0.ɵɵelement(83, "hr");
        i0.ɵɵelementStart(84, "div", 6)(85, "div", 19)(86, "h5");
        i0.ɵɵtext(87, "Transaction ID: ");
        i0.ɵɵelementStart(88, "span");
        i0.ɵɵtext(89, "1234567890");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(90, "p");
        i0.ɵɵtext(91, "Supplier Items Recieved & Accepted: ");
        i0.ɵɵelementStart(92, "span");
        i0.ɵɵtext(93, "For Order #23456 ");
        i0.ɵɵelementEnd()()()()()()();
        i0.ɵɵelementStart(94, "div", 20)(95, "div", 6)(96, "div", 7)(97, "div", 2)(98, "div", 3);
        i0.ɵɵtext(99, "items");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(100, "div", 4)(101, "div", 21);
        i0.ɵɵtemplate(102, BusinessDomainProductLineComponent_ngb_carousel_102_Template, 4, 0, "ngb-carousel", 22);
        i0.ɵɵelementEnd()()()();
        i0.ɵɵelementStart(103, "div", 23)(104, "div", 2)(105, "div", 3);
        i0.ɵɵtext(106, "Sub-Items");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(107, "div", 4)(108, "div", 24)(109, "div", 25);
        i0.ɵɵelement(110, "img", 26);
        i0.ɵɵelementStart(111, "span", 27);
        i0.ɵɵtext(112, "Item 01");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(113, "div", 25);
        i0.ɵɵelement(114, "img", 26);
        i0.ɵɵelementStart(115, "span", 27);
        i0.ɵɵtext(116, "Item 01");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(117, "div", 25);
        i0.ɵɵelement(118, "img", 26);
        i0.ɵɵelementStart(119, "span", 27);
        i0.ɵɵtext(120, "Item 01");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(121, "div", 25);
        i0.ɵɵelement(122, "img", 26);
        i0.ɵɵelementStart(123, "span", 27);
        i0.ɵɵtext(124, "Item 01");
        i0.ɵɵelementEnd()()()()()()()()();
    } if (rf & 2) {
        i0.ɵɵadvance(102);
        i0.ɵɵproperty("ngIf", ctx.images);
    } }, dependencies: [i1.NgIf, i2.NgSelectOption, i2.ɵNgSelectMultipleOption, i3.NgbCarousel, i3.NgbSlide], styles: [".card-header[_ngcontent-%COMP%] {\r\n    font-size: 18px;\r\n    font-weight: 600;\r\n    padding: 8px 15px;\r\n}\r\n\r\n.item-details[_ngcontent-%COMP%] {\r\n    height: 200px;\r\n}\r\n\r\n.item-details[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 200px;\r\n}\r\n\r\n.item-subitems[_ngcontent-%COMP%] {\r\n    margin: 30px 0 0;\r\n    border: 1px solid #ddd;\r\n    padding: 10px;\r\n    border-radius: 3px;\r\n}\r\n\r\n.sub-item-details[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\r\n    width: 23%;\r\n    float: left;\r\n    padding: 0px;\r\n    margin: 0 1%;\r\n    text-align: center;\r\n    border: 1px solid #ddd;\r\n    border-radius: 5px;\r\n}\r\n\r\n.box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n\r\nspan.label-name[_ngcontent-%COMP%] {\r\n    padding: 10px;\r\n    display: block;\r\n}\r\n\r\n.item-details[_ngcontent-%COMP%]   .carousel-indicators[_ngcontent-%COMP%] {\r\n    display: none;\r\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BusinessDomainProductLineComponent, [{
        type: Component,
        args: [{ selector: 'app-business-domain-product-line', template: "<div class=\"content\">\n    <h1 class=\"heading-title\">CARRY-r MART STORE E-COMMERCE MANAGER</h1>\n\n    <div class=\"card\">\n        <div class=\"card-header\">Store Published Items Recieved from B2B Platform Supplier</div>\n        <div class=\"card-body\">\n            <h6>Finish/Publish Goods Recieved</h6>\n            <br>\n            <div class=\"form-field\">\n                <div class=\"row\">\n                    <div class=\"col-md-3\">\n                        <div class=\"form-group\">\n                            <label for=\"office\">Office</label>\n                            <select class=\"form-control\" id=\"office\">\n                                <option>Delhi</option>\n                                <option>2</option>\n                                <option>3</option>\n                                <option>4</option>\n                              </select>\n                          </div>\n                    </div>\n                    <div class=\"col-md-3\">\n                        <div class=\"form-group\">\n                            <label for=\"irtype\">Inventory Recieved Type</label>\n                            <select class=\"form-control\" id=\"irtype\">\n                                <option>xxxxx</option>\n                                <option>2</option>\n                                <option>3</option>\n                                <option>4</option>\n                              </select>\n                          </div>\n                    </div>\n                \n                    <div class=\"col-md-3\">\n                        <div class=\"form-group\">\n                            <label for=\"pisno\">Pending Inventory Shipment No</label>\n                            <select class=\"form-control\" id=\"pisno\">\n                                <option>15675656</option>\n                                <option>2</option>\n                                <option>3</option>\n                                <option>4</option>\n                              </select>\n                          </div>\n                    </div>\n                    <div class=\"col-md-3\">\n                        <div class=\"form-group\">\n                            <label for=\"orderno\">Order No</label>\n                            <select class=\"form-control\" id=\"orderno\">\n                                <option>18789787</option>\n                                <option>2</option>\n                                <option>3</option>\n                                <option>4</option>\n                              </select>\n                          </div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-md-3\">\n                        <div class=\"form-group\">\n                            <label for=\"ssa\">Supplier Sub-Account</label>\n                            <div class=\"input-text\">357789</div>\n                          </div>\n                    </div> \n                    <div class=\"col-md-3\">\n                        <div class=\"form-group\">\n                            <label>Domain</label>\n                            <div class=\"input-text\">Women Wears</div>\n                          </div>\n                    </div> \n                    <div class=\"col-md-3\">\n                        <div class=\"form-group\">\n                            <label for=\"ssa\">Product Line</label>\n                            <div class=\"input-text\">Designer Sarees</div>\n                          </div>\n                    </div> \n                </div>\n                <hr>\n                <div class=\"row\">\n                   \n                    <div class=\"col-md-12\">\n                        <h5>Transaction ID: <span>1234567890</span></h5>\n                        <p>Supplier Items Recieved & Accepted: <span>For Order #23456 </span></p>\n                    </div>\n                </div>\n            </div>\n        </div>\n       \n      </div>\n\n      <div class=\"item-subitems\">\n          \n          <div class=\"row\">\n              <div class=\"col-md-3\">\n                  <div class=\"card\">\n                    <div class=\"card-header\">items</div>\n                 <div class=\"card-body\">\n                    <div class=\"item-details\">\n                    <ngb-carousel data-interval=\"false\" data-ride=\"carousel\" data-pause=\"hover\" *ngIf=\"images\">\n                        <ng-template ngbSlide>\n                          <div class=\"picsum-img-wrapper\">\n                            <img style=\"height: 170px;\" [src]=\"images[0]\" alt=\"Random first slide\">\n                          </div>\n                           <div class=\"carousel-caption\">\n                           <label>Item01</label>\n                          </div> \n                        </ng-template>\n                        <ng-template ngbSlide>\n                          <div class=\"picsum-img-wrapper\">\n                            <img style=\"height: 170px;\" [src]=\"images[1]\" alt=\"Random second slide\">\n                          </div>\n                          <div class=\"carousel-caption\">\n                            <label>Item02</label>\n                          </div>  \n                        </ng-template>\n                        <ng-template ngbSlide>\n                          <div class=\"picsum-img-wrapper\">\n                            <img style=\"height: 170px;\" [src]=\"images[2]\" alt=\"Random third slide\">\n                          </div>\n                          <div class=\"carousel-caption\">\n                            <label>Item03</label>\n                          </div> \n                        </ng-template>\n                      </ngb-carousel>\n                  </div>\n                </div>\n                </div>\n              </div>\n              <div class=\"col-md-9\">\n                <div class=\"card\">\n                    <div class=\"card-header\">Sub-Items</div>\n                 <div class=\"card-body\">\n               \n                <div class=\"sub-item-details\">\n                    <div class=\"box\">\n                    <img style=\"height: 170px;\" src=\"/assets/images/img-not-found.png\" />\n                    <span class=\"label-name\">Item 01</span>\n                </div>\n                <div class=\"box\">\n                    <img style=\"height: 170px;\" src=\"/assets/images/img-not-found.png\" />\n                    <span class=\"label-name\">Item 01</span>\n                </div>\n                <div class=\"box\">\n                    <img style=\"height: 170px;\" src=\"/assets/images/img-not-found.png\" />\n                    <span class=\"label-name\">Item 01</span>\n                </div>\n                <div class=\"box\">\n                    <img style=\"height: 170px;\" src=\"/assets/images/img-not-found.png\" />\n                    <span class=\"label-name\">Item 01</span>\n                </div>\n                </div>\n              </div>\n              </div>\n            </div>\n          </div>\n      </div>\n</div>\n", styles: [".card-header {\r\n    font-size: 18px;\r\n    font-weight: 600;\r\n    padding: 8px 15px;\r\n}\r\n\r\n.item-details {\r\n    height: 200px;\r\n}\r\n\r\n.item-details .carousel-item img {\r\n    width: 100%;\r\n    height: 200px;\r\n}\r\n\r\n.item-subitems {\r\n    margin: 30px 0 0;\r\n    border: 1px solid #ddd;\r\n    padding: 10px;\r\n    border-radius: 3px;\r\n}\r\n\r\n.sub-item-details .box {\r\n    width: 23%;\r\n    float: left;\r\n    padding: 0px;\r\n    margin: 0 1%;\r\n    text-align: center;\r\n    border: 1px solid #ddd;\r\n    border-radius: 5px;\r\n}\r\n\r\n.box img {\r\n    width: 100%;\r\n}\r\n\r\nspan.label-name {\r\n    padding: 10px;\r\n    display: block;\r\n}\r\n\r\n.item-details .carousel-indicators {\r\n    display: none;\r\n}"] }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=business-domain-product-line.component.js.map