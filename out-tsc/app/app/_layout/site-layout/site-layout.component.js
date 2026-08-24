import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "../site-header/site-header.component";
import * as i3 from "../site-footer/site-footer.component";
export class SiteLayoutComponent {
    constructor() { }
    ngOnInit() {
    }
}
SiteLayoutComponent.ɵfac = function SiteLayoutComponent_Factory(t) { return new (t || SiteLayoutComponent)(); };
SiteLayoutComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SiteLayoutComponent, selectors: [["app-site-layout"]], decls: 3, vars: 0, template: function SiteLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "site-header")(1, "router-outlet")(2, "site-footer");
    } }, dependencies: [i1.RouterOutlet, i2.SiteHeaderComponent, i3.SiteFooterComponent] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SiteLayoutComponent, [{
        type: Component,
        args: [{ selector: 'app-site-layout', template: "<site-header></site-header>\n<router-outlet></router-outlet>\n<site-footer></site-footer>" }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=site-layout.component.js.map