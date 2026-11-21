import { Component } from '@angular/core';
import * as i0 from "@angular/core";
export class AppLayoutComponent {
    constructor() { }
    ngOnInit() {
    }
}
AppLayoutComponent.ɵfac = function AppLayoutComponent_Factory(t) { return new (t || AppLayoutComponent)(); };
AppLayoutComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AppLayoutComponent, selectors: [["app-app-layout"]], decls: 0, vars: 0, template: function AppLayoutComponent_Template(rf, ctx) { } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppLayoutComponent, [{
        type: Component,
        args: [{ selector: 'app-app-layout', template: "<!-- <app-header></app-header>\n\n<div class=\"container-fluid pl-0\">\n    <div class=\"row\">\n      <div class=\"col-md-3 width-20\">\n        <left-panel></left-panel>\n      </div>\n\n      <div class=\"col-md-9 width-80\">\n    \n        <router-outlet></router-outlet>\n\n      </div>\n    </div>\n    \n  </div> -->\n" }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=app-layout.component.js.map