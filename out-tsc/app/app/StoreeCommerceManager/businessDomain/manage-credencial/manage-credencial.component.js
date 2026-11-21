import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
export class ManageCredencialComponent {
    constructor() { }
    ngOnInit() {
    }
}
ManageCredencialComponent.ɵfac = function ManageCredencialComponent_Factory(t) { return new (t || ManageCredencialComponent)(); };
ManageCredencialComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ManageCredencialComponent, selectors: [["app-manage-credencial"]], decls: 85, vars: 0, consts: [[1, "row"], [1, "col-md-12"], [1, "heading-title"], [1, "card"], [1, "card-header"], [1, "card-body"], [1, "form-field"], [1, "row", "reg_address"], [1, "col-md-4"], [1, "form-group"], ["type", "text", 1, "form-control"], [1, "form-control"], [1, "bottom-btn"], ["type", "button", 1, "btn", "grey-btn", "btn-dark"], ["type", "button", 1, "btn", "orange-btn", "btn-primary"]], template: function ManageCredencialComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
        i0.ɵɵtext(3, "Title");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(4, "div", 3)(5, "div", 4);
        i0.ɵɵtext(6, "Add/Edit Team Member");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "div", 5)(8, "div", 6)(9, "div", 7)(10, "div", 8)(11, "div", 9)(12, "label");
        i0.ɵɵtext(13, "First Name");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(14, "input", 10);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(15, "div", 8)(16, "div", 9)(17, "label");
        i0.ɵɵtext(18, "Last Name");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(19, "input", 10);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(20, "div", 8)(21, "div", 9)(22, "label");
        i0.ɵɵtext(23, "Mobile Number");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(24, "input", 10);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(25, "div", 8)(26, "div", 9)(27, "label");
        i0.ɵɵtext(28, "Role");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(29, "select", 11)(30, "option");
        i0.ɵɵtext(31, "Admin");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(32, "option");
        i0.ɵɵtext(33, "User");
        i0.ɵɵelementEnd()()()();
        i0.ɵɵelementStart(34, "div", 8)(35, "div", 9)(36, "label");
        i0.ɵɵtext(37, "Password");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(38, "input", 10);
        i0.ɵɵelementEnd()()()()();
        i0.ɵɵelementStart(39, "div", 12)(40, "button", 13);
        i0.ɵɵtext(41, "Cancel");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(42, "button", 14);
        i0.ɵɵtext(43, "Add");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelement(44, "br");
        i0.ɵɵelementStart(45, "div", 3)(46, "div", 4);
        i0.ɵɵtext(47, "Manage my Credencials");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(48, "div", 5);
        i0.ɵɵelement(49, "br");
        i0.ɵɵelementStart(50, "div", 6)(51, "div", 0)(52, "div", 8)(53, "div", 9)(54, "label");
        i0.ɵɵtext(55, "Existing Password");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(56, "input", 10);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(57, "div", 8)(58, "div", 9)(59, "label");
        i0.ɵɵtext(60, "New Password");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(61, "input", 10);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(62, "div", 8)(63, "div", 9)(64, "label");
        i0.ɵɵtext(65, "Re-Enter New Password");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(66, "input", 10);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(67, "div", 8)(68, "div", 9)(69, "label");
        i0.ɵɵtext(70, "Primary Email");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(71, "input", 10);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(72, "div", 8)(73, "div", 9)(74, "label");
        i0.ɵɵtext(75, "Other Email");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(76, "input", 10);
        i0.ɵɵelementEnd()()()()();
        i0.ɵɵelementStart(77, "div", 12)(78, "button", 13);
        i0.ɵɵtext(79, "Cancel");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(80, "button", 14);
        i0.ɵɵtext(81, "Submit");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelement(82, "br")(83, "br")(84, "br");
    } }, dependencies: [i1.NgSelectOption, i1.ɵNgSelectMultipleOption], styles: [".card-header[_ngcontent-%COMP%] {\r\n    font-weight: 600;\r\n    font-size: 15px;\r\n}\r\n\r\n.bottom-btn[_ngcontent-%COMP%] {\r\n    clear: both;\r\n    width: 100%;\r\n    text-align: right;\r\n    padding: 20px;\r\n}\r\n\r\n.bottom-btn[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n    margin-left: 10px;\r\n    min-width: 100px;\r\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ManageCredencialComponent, [{
        type: Component,
        args: [{ selector: 'app-manage-credencial', template: "<div class=\"row\">\n    <div class=\"col-md-12\">\n      <h1 class=\"heading-title\">Title</h1>\n    </div>\n  </div>\n<div class=\"card\">\n    <div class=\"card-header\">Add/Edit Team Member</div>\n    <div class=\"card-body\">\n        <div class=\"form-field\">\n            <div class=\"row reg_address\">\n              \n<div class=\"col-md-4\">\n    <div class=\"form-group\">\n        <label>First Name</label>\n        <input type=\"text\" class=\"form-control\">\n      </div>\n</div>\n\n<div class=\"col-md-4\">\n    <div class=\"form-group\">\n        <label>Last Name</label>\n        <input type=\"text\" class=\"form-control\">\n      </div>\n</div>\n\n<div class=\"col-md-4\">\n    <div class=\"form-group\">\n        <label>Mobile Number</label>\n        <input type=\"text\" class=\"form-control\">\n      </div>\n</div>\n\n<div class=\"col-md-4\">\n    <div class=\"form-group\">\n        <label>Role</label>\n        <select class=\"form-control\">\n            <option>Admin</option>\n            <option>User</option>\n        </select>\n      </div>\n</div>\n\n<div class=\"col-md-4\">\n    <div class=\"form-group\">\n        <label>Password</label>\n        <input type=\"text\" class=\"form-control\">\n      </div>\n</div>\n\n </div>\n            \n    </div>\n   \n  </div>\n  <div class=\"bottom-btn\"><button type=\"button\" class=\"btn grey-btn btn-dark\">Cancel</button>\n    <button type=\"button\" class=\"btn orange-btn btn-primary\">Add</button></div>\n\n\n  \n</div><br>\n    <div class=\"card\">\n        <div class=\"card-header\">Manage my Credencials</div>\n        <div class=\"card-body\"><br>\n            <div class=\"form-field\">\n                <div class=\"row\">\n                <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                        <label>Existing Password</label>\n                        <input type=\"text\" class=\"form-control\" />\n                      </div>\n                </div>\n                <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                        <label>New Password</label>\n                        <input type=\"text\" class=\"form-control\" />\n                      </div>\n                </div>\n                <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                        <label>Re-Enter New Password</label>\n                        <input type=\"text\" class=\"form-control\" />\n                      </div>\n                </div>\n\n                <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                        <label>Primary Email</label>\n                        <input type=\"text\" class=\"form-control\" />\n                      </div>\n                </div>\n\n                <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                        <label>Other Email</label>\n                        <input type=\"text\" class=\"form-control\" />\n                      </div>\n                </div>\n    \n                </div>\n              \n            </div>\n        </div>\n        <div class=\"bottom-btn\"><button type=\"button\" class=\"btn grey-btn btn-dark\">Cancel</button>\n            <button type=\"button\" class=\"btn orange-btn btn-primary\">Submit</button></div>\n      </div>\n      <br>\n      <br>\n      <br>", styles: [".card-header {\r\n    font-weight: 600;\r\n    font-size: 15px;\r\n}\r\n\r\n.bottom-btn {\r\n    clear: both;\r\n    width: 100%;\r\n    text-align: right;\r\n    padding: 20px;\r\n}\r\n\r\n.bottom-btn .btn {\r\n    margin-left: 10px;\r\n    min-width: 100px;\r\n}"] }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=manage-credencial.component.js.map