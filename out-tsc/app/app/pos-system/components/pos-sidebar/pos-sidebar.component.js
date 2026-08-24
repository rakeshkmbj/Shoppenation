import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function PosSidebarComponent_div_30_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 16);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const category_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(category_r1.count);
} }
function PosSidebarComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 13);
    i0.ɵɵlistener("click", function PosSidebarComponent_div_30_Template_div_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r5); const category_r1 = restoredCtx.$implicit; const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.selectCategory(category_r1.id)); });
    i0.ɵɵelementStart(1, "span", 14);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, PosSidebarComponent_div_30_span_3_Template, 2, 1, "span", 15);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const category_r1 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("active", category_r1.id === ctx_r0.selectedCategory);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(category_r1.name);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", category_r1.count);
} }
export class PosSidebarComponent {
    constructor() {
        this.categories = [];
        this.selectedCategory = 'all';
        this.categorySelect = new EventEmitter();
        this.activeNav = 'terminal';
    }
    selectCategory(categoryId) {
        this.categorySelect.emit(categoryId);
    }
    setActiveNav(nav) {
        this.activeNav = nav;
    }
}
PosSidebarComponent.ɵfac = function PosSidebarComponent_Factory(t) { return new (t || PosSidebarComponent)(); };
PosSidebarComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PosSidebarComponent, selectors: [["app-pos-sidebar"]], inputs: { categories: "categories", selectedCategory: "selectedCategory" }, outputs: { categorySelect: "categorySelect" }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 34, vars: 9, consts: [[1, "pos-sidebar"], [1, "sidebar-logo"], [1, "logo-icon"], [1, "sidebar-nav"], [1, "nav-item", 3, "click"], [1, "nav-icon"], [1, "nav-label"], [1, "sidebar-categories"], [1, "categories-header"], [1, "categories-list"], ["class", "category-item", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "sidebar-footer"], [1, "logout-btn"], [1, "category-item", 3, "click"], [1, "category-name"], ["class", "category-count", 4, "ngIf"], [1, "category-count"]], template: function PosSidebarComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "aside", 0)(1, "div", 1)(2, "span", 2);
        i0.ɵɵtext(3, "\uD83C\uDFEA");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(4, "nav", 3)(5, "div", 4);
        i0.ɵɵlistener("click", function PosSidebarComponent_Template_div_click_5_listener() { return ctx.setActiveNav("dashboard"); });
        i0.ɵɵelementStart(6, "span", 5);
        i0.ɵɵtext(7, "\uD83C\uDFE0");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "span", 6);
        i0.ɵɵtext(9, "DASHBOARD");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(10, "div", 4);
        i0.ɵɵlistener("click", function PosSidebarComponent_Template_div_click_10_listener() { return ctx.setActiveNav("terminal"); });
        i0.ɵɵelementStart(11, "span", 5);
        i0.ɵɵtext(12, "\uD83D\uDDA5\uFE0F");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(13, "span", 6);
        i0.ɵɵtext(14, "TERMINAL POS");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(15, "div", 4);
        i0.ɵɵlistener("click", function PosSidebarComponent_Template_div_click_15_listener() { return ctx.setActiveNav("orders"); });
        i0.ɵɵelementStart(16, "span", 5);
        i0.ɵɵtext(17, "\uD83D\uDED2");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(18, "span", 6);
        i0.ɵɵtext(19, "ORDERS");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(20, "div", 4);
        i0.ɵɵlistener("click", function PosSidebarComponent_Template_div_click_20_listener() { return ctx.setActiveNav("sync"); });
        i0.ɵɵelementStart(21, "span", 5);
        i0.ɵɵtext(22, "\uD83D\uDD04");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(23, "span", 6);
        i0.ɵɵtext(24, "SYNC");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(25, "div", 7)(26, "div", 8)(27, "h4");
        i0.ɵɵtext(28, "Categories");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(29, "div", 9);
        i0.ɵɵtemplate(30, PosSidebarComponent_div_30_Template, 4, 4, "div", 10);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(31, "div", 11)(32, "button", 12);
        i0.ɵɵtext(33, "Logout");
        i0.ɵɵelementEnd()()();
    } if (rf & 2) {
        i0.ɵɵadvance(5);
        i0.ɵɵclassProp("active", ctx.activeNav === "dashboard");
        i0.ɵɵadvance(5);
        i0.ɵɵclassProp("active", ctx.activeNav === "terminal");
        i0.ɵɵadvance(5);
        i0.ɵɵclassProp("active", ctx.activeNav === "orders");
        i0.ɵɵadvance(5);
        i0.ɵɵclassProp("active", ctx.activeNav === "sync");
        i0.ɵɵadvance(10);
        i0.ɵɵproperty("ngForOf", ctx.categories);
    } }, dependencies: [CommonModule, i1.NgForOf, i1.NgIf], styles: [".pos-sidebar[_ngcontent-%COMP%] {\r\n  width: 200px;\r\n  background: linear-gradient(135deg, #2d3436 0%, #1e2229 100%);\r\n  color: white;\r\n  display: flex;\r\n  flex-direction: column;\r\n  overflow-y: auto;\r\n  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.1);\r\n\r\n  .sidebar-logo {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    padding: 16px;\r\n    border-bottom: 1px solid rgba(255, 255, 255, 0.1);\r\n\r\n    .logo-icon {\r\n      font-size: 32px;\r\n    }\r\n  }\r\n\r\n  .sidebar-nav {\r\n    padding: 12px 0;\r\n    border-bottom: 1px solid rgba(255, 255, 255, 0.1);\r\n\r\n    .nav-item {\r\n      display: flex;\r\n      flex-direction: column;\r\n      align-items: center;\r\n      gap: 6px;\r\n      padding: 12px;\r\n      margin: 4px 8px;\r\n      cursor: pointer;\r\n      border-radius: 8px;\r\n      transition: all 0.3s ease;\r\n      user-select: none;\r\n\r\n      .nav-icon {\r\n        font-size: 24px;\r\n      }\r\n\r\n      .nav-label {\r\n        font-size: 11px;\r\n        font-weight: 600;\r\n        text-align: center;\r\n        letter-spacing: 0.5px;\r\n      }\r\n\r\n      &:hover {\r\n        background-color: rgba(255, 255, 255, 0.1);\r\n      }\r\n\r\n      &.active {\r\n        background-color: #ff6b35;\r\n        color: white;\r\n        box-shadow: 0 4px 12px rgba(255, 107, 53, 0.3);\r\n      }\r\n    }\r\n  }\r\n\r\n  .sidebar-categories {\r\n    flex: 1;\r\n    padding: 16px 8px;\r\n    overflow-y: auto;\r\n\r\n    .categories-header {\r\n      padding: 0 8px 8px;\r\n      margin-bottom: 8px;\r\n      border-bottom: 1px solid rgba(255, 255, 255, 0.1);\r\n\r\n      h4 {\r\n        margin: 0;\r\n        font-size: 12px;\r\n        font-weight: 600;\r\n        text-transform: uppercase;\r\n        letter-spacing: 0.5px;\r\n      }\r\n    }\r\n\r\n    .categories-list {\r\n      display: flex;\r\n      flex-direction: column;\r\n      gap: 4px;\r\n\r\n      .category-item {\r\n        display: flex;\r\n        justify-content: space-between;\r\n        align-items: center;\r\n        padding: 8px 12px;\r\n        border-radius: 6px;\r\n        cursor: pointer;\r\n        transition: all 0.3s ease;\r\n        font-size: 12px;\r\n\r\n        .category-name {\r\n          flex: 1;\r\n          color: rgba(255, 255, 255, 0.8);\r\n        }\r\n\r\n        .category-count {\r\n          background-color: rgba(255, 255, 255, 0.2);\r\n          color: rgba(255, 255, 255, 0.9);\r\n          padding: 2px 6px;\r\n          border-radius: 12px;\r\n          font-size: 10px;\r\n          font-weight: 600;\r\n        }\r\n\r\n        &:hover {\r\n          background-color: rgba(255, 255, 255, 0.1);\r\n\r\n          .category-name {\r\n            color: white;\r\n          }\r\n        }\r\n\r\n        &.active {\r\n          background-color: #ff6b35;\r\n\r\n          .category-name,\r\n          .category-count {\r\n            color: white;\r\n            background-color: rgba(255, 255, 255, 0.3);\r\n          }\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  .sidebar-footer {\r\n    padding: 12px;\r\n    border-top: 1px solid rgba(255, 255, 255, 0.1);\r\n\r\n    .logout-btn {\r\n      width: 100%;\r\n      padding: 8px 12px;\r\n      background-color: rgba(255, 107, 53, 0.2);\r\n      color: #ff6b35;\r\n      border: 1px solid #ff6b35;\r\n      border-radius: 6px;\r\n      cursor: pointer;\r\n      font-size: 12px;\r\n      font-weight: 600;\r\n      transition: all 0.3s ease;\r\n\r\n      &:hover {\r\n        background-color: #ff6b35;\r\n        color: white;\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n\r\n.pos-sidebar[_ngcontent-%COMP%]::-webkit-scrollbar, .pos-sidebar[_ngcontent-%COMP%]   .sidebar-categories[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  width: 6px;\r\n}\r\n\r\n.pos-sidebar[_ngcontent-%COMP%]::-webkit-scrollbar-track, .pos-sidebar[_ngcontent-%COMP%]   .sidebar-categories[_ngcontent-%COMP%]::-webkit-scrollbar-track {\r\n  background: rgba(255, 255, 255, 0.05);\r\n}\r\n\r\n.pos-sidebar[_ngcontent-%COMP%]::-webkit-scrollbar-thumb, .pos-sidebar[_ngcontent-%COMP%]   .sidebar-categories[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n  background: rgba(255, 255, 255, 0.2);\r\n  border-radius: 3px;\r\n\r\n  &:hover {\r\n    background: rgba(255, 255, 255, 0.3);\r\n  }\r\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PosSidebarComponent, [{
        type: Component,
        args: [{ selector: 'app-pos-sidebar', standalone: true, imports: [CommonModule], template: "<aside class=\"pos-sidebar\">\r\n  <div class=\"sidebar-logo\">\r\n    <span class=\"logo-icon\">\uD83C\uDFEA</span>\r\n  </div>\r\n\r\n  <nav class=\"sidebar-nav\">\r\n    <div class=\"nav-item\" [class.active]=\"activeNav === 'dashboard'\" (click)=\"setActiveNav('dashboard')\">\r\n      <span class=\"nav-icon\">\uD83C\uDFE0</span>\r\n      <span class=\"nav-label\">DASHBOARD</span>\r\n    </div>\r\n\r\n    <div class=\"nav-item\" [class.active]=\"activeNav === 'terminal'\" (click)=\"setActiveNav('terminal')\">\r\n      <span class=\"nav-icon\">\uD83D\uDDA5\uFE0F</span>\r\n      <span class=\"nav-label\">TERMINAL POS</span>\r\n    </div>\r\n\r\n    <div class=\"nav-item\" [class.active]=\"activeNav === 'orders'\" (click)=\"setActiveNav('orders')\">\r\n      <span class=\"nav-icon\">\uD83D\uDED2</span>\r\n      <span class=\"nav-label\">ORDERS</span>\r\n    </div>\r\n\r\n    <div class=\"nav-item\" [class.active]=\"activeNav === 'sync'\" (click)=\"setActiveNav('sync')\">\r\n      <span class=\"nav-icon\">\uD83D\uDD04</span>\r\n      <span class=\"nav-label\">SYNC</span>\r\n    </div>\r\n  </nav>\r\n\r\n  <div class=\"sidebar-categories\">\r\n    <div class=\"categories-header\">\r\n      <h4>Categories</h4>\r\n    </div>\r\n    <div class=\"categories-list\">\r\n      <div *ngFor=\"let category of categories\" \r\n           class=\"category-item\" \r\n           [class.active]=\"category.id === selectedCategory\"\r\n           (click)=\"selectCategory(category.id)\">\r\n        <span class=\"category-name\">{{ category.name }}</span>\r\n        <span class=\"category-count\" *ngIf=\"category.count\">{{ category.count }}</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"sidebar-footer\">\r\n    <button class=\"logout-btn\">Logout</button>\r\n  </div>\r\n</aside>\r\n", styles: [".pos-sidebar {\r\n  width: 200px;\r\n  background: linear-gradient(135deg, #2d3436 0%, #1e2229 100%);\r\n  color: white;\r\n  display: flex;\r\n  flex-direction: column;\r\n  overflow-y: auto;\r\n  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.1);\r\n\r\n  .sidebar-logo {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    padding: 16px;\r\n    border-bottom: 1px solid rgba(255, 255, 255, 0.1);\r\n\r\n    .logo-icon {\r\n      font-size: 32px;\r\n    }\r\n  }\r\n\r\n  .sidebar-nav {\r\n    padding: 12px 0;\r\n    border-bottom: 1px solid rgba(255, 255, 255, 0.1);\r\n\r\n    .nav-item {\r\n      display: flex;\r\n      flex-direction: column;\r\n      align-items: center;\r\n      gap: 6px;\r\n      padding: 12px;\r\n      margin: 4px 8px;\r\n      cursor: pointer;\r\n      border-radius: 8px;\r\n      transition: all 0.3s ease;\r\n      user-select: none;\r\n\r\n      .nav-icon {\r\n        font-size: 24px;\r\n      }\r\n\r\n      .nav-label {\r\n        font-size: 11px;\r\n        font-weight: 600;\r\n        text-align: center;\r\n        letter-spacing: 0.5px;\r\n      }\r\n\r\n      &:hover {\r\n        background-color: rgba(255, 255, 255, 0.1);\r\n      }\r\n\r\n      &.active {\r\n        background-color: #ff6b35;\r\n        color: white;\r\n        box-shadow: 0 4px 12px rgba(255, 107, 53, 0.3);\r\n      }\r\n    }\r\n  }\r\n\r\n  .sidebar-categories {\r\n    flex: 1;\r\n    padding: 16px 8px;\r\n    overflow-y: auto;\r\n\r\n    .categories-header {\r\n      padding: 0 8px 8px;\r\n      margin-bottom: 8px;\r\n      border-bottom: 1px solid rgba(255, 255, 255, 0.1);\r\n\r\n      h4 {\r\n        margin: 0;\r\n        font-size: 12px;\r\n        font-weight: 600;\r\n        text-transform: uppercase;\r\n        letter-spacing: 0.5px;\r\n      }\r\n    }\r\n\r\n    .categories-list {\r\n      display: flex;\r\n      flex-direction: column;\r\n      gap: 4px;\r\n\r\n      .category-item {\r\n        display: flex;\r\n        justify-content: space-between;\r\n        align-items: center;\r\n        padding: 8px 12px;\r\n        border-radius: 6px;\r\n        cursor: pointer;\r\n        transition: all 0.3s ease;\r\n        font-size: 12px;\r\n\r\n        .category-name {\r\n          flex: 1;\r\n          color: rgba(255, 255, 255, 0.8);\r\n        }\r\n\r\n        .category-count {\r\n          background-color: rgba(255, 255, 255, 0.2);\r\n          color: rgba(255, 255, 255, 0.9);\r\n          padding: 2px 6px;\r\n          border-radius: 12px;\r\n          font-size: 10px;\r\n          font-weight: 600;\r\n        }\r\n\r\n        &:hover {\r\n          background-color: rgba(255, 255, 255, 0.1);\r\n\r\n          .category-name {\r\n            color: white;\r\n          }\r\n        }\r\n\r\n        &.active {\r\n          background-color: #ff6b35;\r\n\r\n          .category-name,\r\n          .category-count {\r\n            color: white;\r\n            background-color: rgba(255, 255, 255, 0.3);\r\n          }\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  .sidebar-footer {\r\n    padding: 12px;\r\n    border-top: 1px solid rgba(255, 255, 255, 0.1);\r\n\r\n    .logout-btn {\r\n      width: 100%;\r\n      padding: 8px 12px;\r\n      background-color: rgba(255, 107, 53, 0.2);\r\n      color: #ff6b35;\r\n      border: 1px solid #ff6b35;\r\n      border-radius: 6px;\r\n      cursor: pointer;\r\n      font-size: 12px;\r\n      font-weight: 600;\r\n      transition: all 0.3s ease;\r\n\r\n      &:hover {\r\n        background-color: #ff6b35;\r\n        color: white;\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n/* Scrollbar styling */\r\n.pos-sidebar::-webkit-scrollbar,\r\n.pos-sidebar .sidebar-categories::-webkit-scrollbar {\r\n  width: 6px;\r\n}\r\n\r\n.pos-sidebar::-webkit-scrollbar-track,\r\n.pos-sidebar .sidebar-categories::-webkit-scrollbar-track {\r\n  background: rgba(255, 255, 255, 0.05);\r\n}\r\n\r\n.pos-sidebar::-webkit-scrollbar-thumb,\r\n.pos-sidebar .sidebar-categories::-webkit-scrollbar-thumb {\r\n  background: rgba(255, 255, 255, 0.2);\r\n  border-radius: 3px;\r\n\r\n  &:hover {\r\n    background: rgba(255, 255, 255, 0.3);\r\n  }\r\n}\r\n"] }]
    }], null, { categories: [{
            type: Input
        }], selectedCategory: [{
            type: Input
        }], categorySelect: [{
            type: Output
        }] }); })();
//# sourceMappingURL=pos-sidebar.component.js.map