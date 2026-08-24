import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./_services/loader.service";
import * as i2 from "./services/common.service";
import * as i3 from "@angular/router";
export class AppComponent {
    constructor(loaderService, commonservice) {
        this.loaderService = loaderService;
        this.commonservice = commonservice;
        this.name = 'Angular 4';
    }
    ngOnInit() {
        this.loaderService.status.subscribe((val) => {
            this.showLoader = val;
            //    alert(this.showLoader);
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(i0.ɵɵdirectiveInject(i1.LoaderService), i0.ɵɵdirectiveInject(i2.CommonService)); };
AppComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 0, consts: [[1, "loader"], ["role", "status", 1, "spinner-border"], [1, "sr-only"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "router-outlet")(1, "div", 0)(2, "div", 1)(3, "span", 2);
        i0.ɵɵtext(4, "Loading...");
        i0.ɵɵelementEnd()()()();
    } }, dependencies: [i3.RouterOutlet], styles: ["p[_ngcontent-%COMP%] {\n  font-family: Lato;\n}\n\n.tootlbar-icon[_ngcontent-%COMP%] {\n  padding: 0 14px;\n}\n\n.tootlbar-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n.loader[_ngcontent-%COMP%] {\n  background: rgba(0,0,0, 0.5);\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1050;\n  display: none;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  outline: 0;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppComponent, [{
        type: Component,
        args: [{ selector: 'app-root', template: "<router-outlet>\r\n    <div class=\"loader\">\r\n    <div class=\"spinner-border\" role=\"status\">\r\n        <span class=\"sr-only\">Loading...</span>\r\n      </div>\r\n    </div>\r\n</router-outlet>\r\n\r\n", styles: ["p {\n  font-family: Lato;\n}\n\n.tootlbar-icon {\n  padding: 0 14px;\n}\n\n.tootlbar-spacer {\n  flex: 1 1 auto;\n}\n\n.loader {\n  background: rgba(0,0,0, 0.5);\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1050;\n  display: none;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  outline: 0;\n}"] }]
    }], function () { return [{ type: i1.LoaderService }, { type: i2.CommonService }]; }, null); })();
//# sourceMappingURL=app.component.js.map