import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "ngx-bootstrap/modal";
import * as i2 from "@angular/forms";
export class HelpDeskComponent {
    constructor(bsModalRef) {
        this.bsModalRef = bsModalRef;
    }
    ngOnInit() {
    }
    close() {
        this.bsModalRef.hide();
    }
}
HelpDeskComponent.ɵfac = function HelpDeskComponent_Factory(t) { return new (t || HelpDeskComponent)(i0.ɵɵdirectiveInject(i1.BsModalRef)); };
HelpDeskComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: HelpDeskComponent, selectors: [["app-help-desk"]], decls: 24, vars: 0, consts: [[1, "modal-header"], [1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "login-field"], ["novalidate", ""], [1, "form-group"], ["formControlName", "mobile", "type", "text", "placeholder", "Mobile Number", 1, "form-control"], ["for", "pwd"], ["type", "password", "placeholder", "Enter password", "id", "pwd", 1, "form-control"], [1, "form-forget"], [1, "bottom-btn"], ["type", "submit", 1, "btn", "custom-btn"]], template: function HelpDeskComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "h4", 1);
        i0.ɵɵtext(2, "Helpdesk Login");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "button", 2);
        i0.ɵɵlistener("click", function HelpDeskComponent_Template_button_click_3_listener() { return ctx.close(); });
        i0.ɵɵelementStart(4, "span", 3);
        i0.ɵɵtext(5, "\u00D7");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(6, "div", 4)(7, "div", 5)(8, "form", 6)(9, "div", 7)(10, "label");
        i0.ɵɵtext(11, "Mobile Number");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(12, "input", 8);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(13, "div", 7)(14, "label", 9);
        i0.ɵɵtext(15, "Password:");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(16, "input", 10);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(17, "label", 11)(18, "a");
        i0.ɵɵtext(19, "Forgot your password?");
        i0.ɵɵelementEnd()();
        i0.ɵɵelement(20, "br");
        i0.ɵɵelementStart(21, "div", 12)(22, "button", 13);
        i0.ɵɵtext(23, "Sign In");
        i0.ɵɵelementEnd()()()()();
    } }, dependencies: [i2.ɵNgNoValidate, i2.DefaultValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.FormControlName, i2.NgForm], styles: [".login-field[_ngcontent-%COMP%] {\r\n    padding: 0 10px;\r\n}\r\n\r\nlabel.form-forget[_ngcontent-%COMP%] {\r\n    float: right;\r\n    color: #007bff;\r\n    font-size: 12px;\r\n    padding: 3px;\r\n}\r\n\r\n.form-control[_ngcontent-%COMP%]   input[type=\"text\"][_ngcontent-%COMP%], form-control[_ngcontent-%COMP%]   input[type=\"password\"][_ngcontent-%COMP%] {\r\n    height: 40px;\r\n}\r\n\r\n\r\n\r\n.login-field[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n    font-weight: 600;\r\n}\r\n\r\nbutton.reg-close[_ngcontent-%COMP%] {\r\n    width: 30px;\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    font-size: 30px;\r\n}\r\nbutton.btn.custom-btn[type=\"submit\"][_ngcontent-%COMP%] {\r\n    background: #ba080b;\r\n}\r\n\r\n.login-field[_ngcontent-%COMP%]   .bottom-btn[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n    min-width: 130px;\r\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HelpDeskComponent, [{
        type: Component,
        args: [{ selector: 'app-help-desk', template: "<div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\">Helpdesk Login</h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"close()\">\n        <span aria-hidden=\"true\">&times;</span>\n    </button>\n</div>\n<div class=\"modal-body\">\n    <div class=\"login-field\">\n        <form novalidate>\n\n            <div class=\"form-group\">\n                <label>Mobile Number</label>\n                <input formControlName=\"mobile\" type=\"text\" class=\"form-control\" placeholder=\"Mobile Number\">\n            </div>\n            <div class=\"form-group\">\n                <label for=\"pwd\">Password:</label>\n                <input type=\"password\" class=\"form-control\" placeholder=\"Enter password\"\n                    id=\"pwd\">\n            </div>\n\n            <label class=\"form-forget\">\n                <a>Forgot your password?</a>\n            </label>\n            <br>\n            <div class=\"bottom-btn\">\n                <button type=\"submit\" class=\"btn custom-btn\">Sign In</button>\n            </div>\n        </form>\n    </div>\n</div>", styles: ["\r\n  \r\n  .login-field {\r\n    padding: 0 10px;\r\n}\r\n\r\nlabel.form-forget {\r\n    float: right;\r\n    color: #007bff;\r\n    font-size: 12px;\r\n    padding: 3px;\r\n}\r\n\r\n.form-control input[type=\"text\"],\r\nform-control input[type=\"password\"] {\r\n    height: 40px;\r\n}\r\n\r\n/* button.close {\r\n    margin: 10px;\r\n    font-size: 30px;\r\n} */\r\n\r\n.login-field .form-group label {\r\n    font-weight: 600;\r\n}\r\n\r\nbutton.reg-close {\r\n    width: 30px;\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    font-size: 30px;\r\n}\r\nbutton.btn.custom-btn[type=\"submit\"] {\r\n    background: #ba080b;\r\n}\r\n\r\n.login-field .bottom-btn .btn {\r\n    min-width: 130px;\r\n}\r\n"] }]
    }], function () { return [{ type: i1.BsModalRef }]; }, null); })();
//# sourceMappingURL=help-desk.component.js.map