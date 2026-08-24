import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "ngx-bootstrap/modal";
export class ActivationDeactivationComponent {
    constructor(bsModalRef) {
        this.bsModalRef = bsModalRef;
    }
    ngOnInit() {
        console.log(this.subitemID);
    }
}
ActivationDeactivationComponent.ɵfac = function ActivationDeactivationComponent_Factory(t) { return new (t || ActivationDeactivationComponent)(i0.ɵɵdirectiveInject(i1.BsModalRef)); };
ActivationDeactivationComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ActivationDeactivationComponent, selectors: [["activation-deactivation"]], decls: 24, vars: 1, consts: [[1, "modal-header"], [1, "modal-title", "pull-left"], ["type", "button", 1, "btn-close", "close", "pull-right", 3, "click"], ["aria-hidden", "true", 1, "visually-hidden"], [1, "modal-body"], [1, "form-check"], ["type", "radio", "name", "actRadio", 1, "form-check-input"], [1, "form-check-label"], [1, "modal-footer"], ["type", "button", 1, "btn", "custom-btn", 3, "click"]], template: function ActivationDeactivationComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "h4", 1);
        i0.ɵɵtext(2, "De-activation & Re-activation");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "button", 2);
        i0.ɵɵlistener("click", function ActivationDeactivationComponent_Template_button_click_3_listener() { return ctx.bsModalRef.hide(); });
        i0.ɵɵelementStart(4, "span", 3);
        i0.ɵɵtext(5, "\u00D7");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(6, "div", 4)(7, "ul")(8, "li")(9, "span");
        i0.ɵɵtext(10);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(11, "li")(12, "div", 5);
        i0.ɵɵelement(13, "input", 6);
        i0.ɵɵelementStart(14, "label", 7);
        i0.ɵɵtext(15, "Active");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(16, "li")(17, "div", 5);
        i0.ɵɵelement(18, "input", 6);
        i0.ɵɵelementStart(19, "label", 7);
        i0.ɵɵtext(20, "DeActive");
        i0.ɵɵelementEnd()()()()();
        i0.ɵɵelementStart(21, "div", 8)(22, "button", 9);
        i0.ɵɵlistener("click", function ActivationDeactivationComponent_Template_button_click_22_listener() { return ctx.bsModalRef.hide(); });
        i0.ɵɵtext(23, "Save");
        i0.ɵɵelementEnd()();
    } if (rf & 2) {
        i0.ɵɵadvance(10);
        i0.ɵɵtextInterpolate1("SubItem ID: ", ctx.subitemID, "");
    } } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ActivationDeactivationComponent, [{
        type: Component,
        args: [{ selector: 'activation-deactivation', template: "<div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\">De-activation & Re-activation</h4>\n    <button type=\"button\" class=\"btn-close close pull-right\" (click)=\"bsModalRef.hide()\">\n      <span aria-hidden=\"true\" class=\"visually-hidden\">&times;</span>\n    </button>\n</div>\n<div class=\"modal-body\">\n    <ul>\n        <li><span>SubItem ID: {{subitemID}}</span></li>\n        <li>\n            <div class=\"form-check\">\n                <input class=\"form-check-input\" type=\"radio\" name=\"actRadio\" />\n                <label class=\"form-check-label\">Active</label>\n            </div>\n        </li>\n        <li>\n            <div class=\"form-check\">\n                <input class=\"form-check-input\" type=\"radio\" name=\"actRadio\" />\n                <label class=\"form-check-label\">DeActive</label>\n            </div>\n        </li>\n    </ul>\n</div>\n<div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn custom-btn\" (click)=\"bsModalRef.hide()\">Save</button>\n</div>" }]
    }], function () { return [{ type: i1.BsModalRef }]; }, null); })();
//# sourceMappingURL=activation-deactivation.component.js.map