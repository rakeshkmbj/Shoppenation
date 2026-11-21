import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePipe } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class PosHeaderComponent {
    constructor() {
        this.userName = 'User';
        this.notificationClick = new EventEmitter();
        this.currentDate = new Date();
        this.currentTime = new Date();
        this.userAvatar = 'https://via.placeholder.com/40?text=RH';
    }
    ngOnInit() {
        setInterval(() => {
            this.currentTime = new Date();
        }, 1000);
    }
}
PosHeaderComponent.ɵfac = function PosHeaderComponent_Factory(t) { return new (t || PosHeaderComponent)(); };
PosHeaderComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PosHeaderComponent, selectors: [["app-pos-header"]], inputs: { storeInfo: "storeInfo", userName: "userName" }, outputs: { notificationClick: "notificationClick" }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 58, vars: 13, consts: [[1, "pos-header"], [1, "header-left"], [1, "logo"], [1, "logo-text"], [1, "logo-subtext"], [1, "header-divider"], [1, "pos-label"], [1, "header-center"], [1, "store-info"], [1, "store-main"], [1, "store-name-section"], [1, "store-name"], [1, "store-gstin"], [1, "gst-label"], [1, "gst-value"], [1, "terminal-info"], [1, "info-item"], [1, "label"], [1, "value"], [1, "status", "online"], [1, "header-right"], [1, "date-time"], [1, "notifications"], [1, "notification-btn", 3, "click"], [1, "notification-icon"], [1, "notification-badge"], [1, "user-profile"], [1, "settings-btn"], [1, "user-info"], ["alt", "User", 1, "user-avatar", 3, "src"], [1, "user-details"], [1, "user-name"], [1, "user-status"], [1, "dropdown-btn"]], template: function PosHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "header", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
        i0.ɵɵtext(4, "AD");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "span", 4);
        i0.ɵɵtext(6, "VENDING");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(7, "span", 5);
        i0.ɵɵtext(8, "|");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "div", 6);
        i0.ɵɵtext(10, "POS");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(11, "div", 7)(12, "div", 8)(13, "div", 9)(14, "div", 10)(15, "label");
        i0.ɵɵtext(16, "Store Name:");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(17, "div", 11);
        i0.ɵɵtext(18);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(19, "div", 12)(20, "span", 13);
        i0.ɵɵtext(21, "GSTIN :");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(22, "span", 14);
        i0.ɵɵtext(23);
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(24, "div", 15)(25, "div", 16)(26, "span", 17);
        i0.ɵɵtext(27, "Terminal ID:");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(28, "span", 18);
        i0.ɵɵtext(29);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(30, "span", 19);
        i0.ɵɵtext(31, "\u25CF Online");
        i0.ɵɵelementEnd()()()()();
        i0.ɵɵelementStart(32, "div", 20)(33, "div", 21)(34, "div");
        i0.ɵɵtext(35);
        i0.ɵɵpipe(36, "date");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(37, "div");
        i0.ɵɵtext(38);
        i0.ɵɵpipe(39, "date");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(40, "div", 22)(41, "button", 23);
        i0.ɵɵlistener("click", function PosHeaderComponent_Template_button_click_41_listener() { return ctx.notificationClick.emit(); });
        i0.ɵɵelementStart(42, "span", 24);
        i0.ɵɵtext(43, "\uD83D\uDD14");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(44, "span", 25);
        i0.ɵɵtext(45, "1");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(46, "div", 26)(47, "button", 27);
        i0.ɵɵtext(48, "\u2699\uFE0F");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(49, "div", 28);
        i0.ɵɵelement(50, "img", 29);
        i0.ɵɵelementStart(51, "div", 30)(52, "div", 31);
        i0.ɵɵtext(53);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(54, "div", 32);
        i0.ɵɵtext(55, "GOLD MEMBER");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(56, "button", 33);
        i0.ɵɵtext(57, "\u25BC");
        i0.ɵɵelementEnd()()()();
    } if (rf & 2) {
        i0.ɵɵadvance(18);
        i0.ɵɵtextInterpolate(ctx.storeInfo.name);
        i0.ɵɵadvance(5);
        i0.ɵɵtextInterpolate(ctx.storeInfo.gstin || "ABHgf134666xx");
        i0.ɵɵadvance(6);
        i0.ɵɵtextInterpolate(ctx.storeInfo.terminalId);
        i0.ɵɵadvance(6);
        i0.ɵɵtextInterpolate1("Date: ", i0.ɵɵpipeBind2(36, 7, ctx.currentDate, "dd MMM yyyy"), "");
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(39, 10, ctx.currentTime, "hh:mm a"));
        i0.ɵɵadvance(12);
        i0.ɵɵproperty("src", ctx.userAvatar, i0.ɵɵsanitizeUrl);
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate(ctx.userName);
    } }, dependencies: [CommonModule, i1.DatePipe], styles: [".pos-header[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding: 16px 24px;\r\n  background-color: #ffffff;\r\n  border-bottom: 1px solid #e0e0e0;\r\n  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.06);\r\n  min-height: 90px;\r\n\r\n  .header-left {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 16px;\r\n\r\n    .logo {\r\n      display: flex;\r\n      flex-direction: column;\r\n      align-items: center;\r\n      font-weight: bold;\r\n      margin-right: 8px;\r\n\r\n      .logo-text {\r\n        color: #ff6b35;\r\n        font-size: 22px;\r\n        line-height: 1;\r\n      }\r\n\r\n      .logo-subtext {\r\n        color: #333;\r\n        font-size: 11px;\r\n        letter-spacing: 1px;\r\n      }\r\n    }\r\n\r\n    .header-divider {\r\n      font-size: 22px;\r\n      color: #ddd;\r\n    }\r\n\r\n    .pos-label {\r\n      font-weight: 700;\r\n      color: #ff6b35;\r\n      font-size: 16px;\r\n      letter-spacing: 0.1em;\r\n    }\r\n  }\r\n\r\n  .header-center {\r\n    flex: 1;\r\n    margin: 0 24px;\r\n\r\n    .store-info {\r\n      display: flex;\r\n      flex-direction: column;\r\n      gap: 8px;\r\n\r\n      .store-main {\r\n        display: flex;\r\n        flex-wrap: wrap;\r\n        gap: 12px;\r\n        align-items: center;\r\n      }\r\n\r\n      .store-name-section {\r\n        display: flex;\r\n        align-items: center;\r\n        gap: 10px;\r\n\r\n        label {\r\n          font-size: 12px;\r\n          font-weight: 600;\r\n          color: #666;\r\n        }\r\n\r\n        .store-name {\r\n          font-size: 16px;\r\n          font-weight: 700;\r\n          color: #222;\r\n        }\r\n      }\r\n\r\n      .store-gstin {\r\n        display: flex;\r\n        align-items: center;\r\n        gap: 8px;\r\n        font-size: 14px;\r\n        color: #333;\r\n      }\r\n\r\n      .gst-label {\r\n        color: #666;\r\n        font-weight: 600;\r\n      }\r\n\r\n      .gst-value {\r\n        font-weight: 700;\r\n        color: #222;\r\n      }\r\n\r\n      .terminal-info {\r\n        .info-item {\r\n          display: flex;\r\n          flex-wrap: wrap;\r\n          gap: 10px;\r\n          align-items: center;\r\n          font-size: 13px;\r\n          color: #444;\r\n        }\r\n\r\n        .label {\r\n          color: #666;\r\n          font-weight: 600;\r\n        }\r\n\r\n        .value {\r\n          color: #222;\r\n          font-weight: 700;\r\n        }\r\n\r\n        .status {\r\n          padding: 3px 10px;\r\n          border-radius: 20px;\r\n          font-size: 11px;\r\n          font-weight: 600;\r\n\r\n          &.online {\r\n            color: #28a745;\r\n          }\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  .header-right {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 20px;\r\n\r\n    .date-time {\r\n      display: flex;\r\n      flex-direction: column;\r\n      font-size: 12px;\r\n      color: #666;\r\n      text-align: right;\r\n      min-width: 110px;\r\n\r\n      div {\r\n        line-height: 1.4;\r\n      }\r\n    }\r\n\r\n    .notifications {\r\n      position: relative;\r\n\r\n      .notification-btn {\r\n        background: none;\r\n        border: none;\r\n        font-size: 20px;\r\n        cursor: pointer;\r\n        position: relative;\r\n        padding: 0;\r\n\r\n        &:hover {\r\n          opacity: 0.8;\r\n        }\r\n\r\n        .notification-badge {\r\n          position: absolute;\r\n          top: -5px;\r\n          right: -5px;\r\n          background-color: #ff6b35;\r\n          color: white;\r\n          border-radius: 50%;\r\n          width: 18px;\r\n          height: 18px;\r\n          display: flex;\r\n          align-items: center;\r\n          justify-content: center;\r\n          font-size: 10px;\r\n          font-weight: bold;\r\n        }\r\n      }\r\n    }\r\n\r\n    .user-profile {\r\n      display: flex;\r\n      align-items: center;\r\n      gap: 10px;\r\n      padding: 0 12px;\r\n      border-left: 1px solid #e0e0e0;\r\n\r\n      .settings-btn {\r\n        background: none;\r\n        border: none;\r\n        font-size: 18px;\r\n        cursor: pointer;\r\n\r\n        &:hover {\r\n          opacity: 0.8;\r\n        }\r\n      }\r\n\r\n      .user-info {\r\n        display: flex;\r\n        align-items: center;\r\n        gap: 10px;\r\n\r\n        .user-avatar {\r\n          width: 40px;\r\n          height: 40px;\r\n          border-radius: 50%;\r\n          object-fit: cover;\r\n          border: 2px solid #ff6b35;\r\n        }\r\n\r\n        .user-details {\r\n          display: flex;\r\n          flex-direction: column;\r\n          font-size: 12px;\r\n\r\n          .user-name {\r\n            font-weight: 700;\r\n            color: #333;\r\n          }\r\n\r\n          .user-status {\r\n            color: #ff6b35;\r\n            font-weight: 700;\r\n            font-size: 11px;\r\n          }\r\n        }\r\n      }\r\n\r\n      .dropdown-btn {\r\n        background: none;\r\n        border: none;\r\n        font-size: 12px;\r\n        cursor: pointer;\r\n        color: #666;\r\n\r\n        &:hover {\r\n          color: #333;\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n@media (max-width: 1024px) {\r\n  .pos-header[_ngcontent-%COMP%] {\r\n    flex-wrap: wrap;\r\n    height: auto;\r\n    padding: 12px 16px;\r\n\r\n    .header-center {\r\n      flex-basis: 100%;\r\n      margin: 10px 0;\r\n\r\n      .store-info {\r\n        flex-direction: column;\r\n        gap: 10px;\r\n      }\r\n    }\r\n  }\r\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PosHeaderComponent, [{
        type: Component,
        args: [{ selector: 'app-pos-header', standalone: true, imports: [CommonModule, DatePipe], template: "<header class=\"pos-header\">\r\n  <div class=\"header-left\">\r\n    <div class=\"logo\">\r\n      <span class=\"logo-text\">AD</span>\r\n      <span class=\"logo-subtext\">VENDING</span>\r\n    </div>\r\n    <span class=\"header-divider\">|</span>\r\n    <div class=\"pos-label\">POS</div>\r\n  </div>\r\n\r\n  <div class=\"header-center\">\r\n    <div class=\"store-info\">\r\n      <div class=\"store-main\">\r\n        <div class=\"store-name-section\">\r\n          <label>Store Name:</label>\r\n          <div class=\"store-name\">{{ storeInfo.name }}</div>\r\n        </div>\r\n        <div class=\"store-gstin\">\r\n          <span class=\"gst-label\">GSTIN :</span>\r\n          <span class=\"gst-value\">{{ storeInfo.gstin || 'ABHgf134666xx' }}</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"terminal-info\">\r\n        <div class=\"info-item\">\r\n          <span class=\"label\">Terminal ID:</span>\r\n          <span class=\"value\">{{ storeInfo.terminalId }}</span>\r\n          <span class=\"status online\">\u25CF Online</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"header-right\">\r\n    <div class=\"date-time\">\r\n      <div>Date: {{ currentDate | date: 'dd MMM yyyy' }}</div>\r\n      <div>{{ currentTime | date: 'hh:mm a' }}</div>\r\n    </div>\r\n\r\n    <div class=\"notifications\">\r\n      <button class=\"notification-btn\" (click)=\"notificationClick.emit()\">\r\n        <span class=\"notification-icon\">\uD83D\uDD14</span>\r\n        <span class=\"notification-badge\">1</span>\r\n      </button>\r\n    </div>\r\n\r\n    <div class=\"user-profile\">\r\n      <button class=\"settings-btn\">\u2699\uFE0F</button>\r\n      <div class=\"user-info\">\r\n        <img [src]=\"userAvatar\" alt=\"User\" class=\"user-avatar\">\r\n        <div class=\"user-details\">\r\n          <div class=\"user-name\">{{ userName }}</div>\r\n          <div class=\"user-status\">GOLD MEMBER</div>\r\n        </div>\r\n      </div>\r\n      <button class=\"dropdown-btn\">\u25BC</button>\r\n    </div>\r\n  </div>\r\n</header>\r\n", styles: [".pos-header {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding: 16px 24px;\r\n  background-color: #ffffff;\r\n  border-bottom: 1px solid #e0e0e0;\r\n  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.06);\r\n  min-height: 90px;\r\n\r\n  .header-left {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 16px;\r\n\r\n    .logo {\r\n      display: flex;\r\n      flex-direction: column;\r\n      align-items: center;\r\n      font-weight: bold;\r\n      margin-right: 8px;\r\n\r\n      .logo-text {\r\n        color: #ff6b35;\r\n        font-size: 22px;\r\n        line-height: 1;\r\n      }\r\n\r\n      .logo-subtext {\r\n        color: #333;\r\n        font-size: 11px;\r\n        letter-spacing: 1px;\r\n      }\r\n    }\r\n\r\n    .header-divider {\r\n      font-size: 22px;\r\n      color: #ddd;\r\n    }\r\n\r\n    .pos-label {\r\n      font-weight: 700;\r\n      color: #ff6b35;\r\n      font-size: 16px;\r\n      letter-spacing: 0.1em;\r\n    }\r\n  }\r\n\r\n  .header-center {\r\n    flex: 1;\r\n    margin: 0 24px;\r\n\r\n    .store-info {\r\n      display: flex;\r\n      flex-direction: column;\r\n      gap: 8px;\r\n\r\n      .store-main {\r\n        display: flex;\r\n        flex-wrap: wrap;\r\n        gap: 12px;\r\n        align-items: center;\r\n      }\r\n\r\n      .store-name-section {\r\n        display: flex;\r\n        align-items: center;\r\n        gap: 10px;\r\n\r\n        label {\r\n          font-size: 12px;\r\n          font-weight: 600;\r\n          color: #666;\r\n        }\r\n\r\n        .store-name {\r\n          font-size: 16px;\r\n          font-weight: 700;\r\n          color: #222;\r\n        }\r\n      }\r\n\r\n      .store-gstin {\r\n        display: flex;\r\n        align-items: center;\r\n        gap: 8px;\r\n        font-size: 14px;\r\n        color: #333;\r\n      }\r\n\r\n      .gst-label {\r\n        color: #666;\r\n        font-weight: 600;\r\n      }\r\n\r\n      .gst-value {\r\n        font-weight: 700;\r\n        color: #222;\r\n      }\r\n\r\n      .terminal-info {\r\n        .info-item {\r\n          display: flex;\r\n          flex-wrap: wrap;\r\n          gap: 10px;\r\n          align-items: center;\r\n          font-size: 13px;\r\n          color: #444;\r\n        }\r\n\r\n        .label {\r\n          color: #666;\r\n          font-weight: 600;\r\n        }\r\n\r\n        .value {\r\n          color: #222;\r\n          font-weight: 700;\r\n        }\r\n\r\n        .status {\r\n          padding: 3px 10px;\r\n          border-radius: 20px;\r\n          font-size: 11px;\r\n          font-weight: 600;\r\n\r\n          &.online {\r\n            color: #28a745;\r\n          }\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  .header-right {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 20px;\r\n\r\n    .date-time {\r\n      display: flex;\r\n      flex-direction: column;\r\n      font-size: 12px;\r\n      color: #666;\r\n      text-align: right;\r\n      min-width: 110px;\r\n\r\n      div {\r\n        line-height: 1.4;\r\n      }\r\n    }\r\n\r\n    .notifications {\r\n      position: relative;\r\n\r\n      .notification-btn {\r\n        background: none;\r\n        border: none;\r\n        font-size: 20px;\r\n        cursor: pointer;\r\n        position: relative;\r\n        padding: 0;\r\n\r\n        &:hover {\r\n          opacity: 0.8;\r\n        }\r\n\r\n        .notification-badge {\r\n          position: absolute;\r\n          top: -5px;\r\n          right: -5px;\r\n          background-color: #ff6b35;\r\n          color: white;\r\n          border-radius: 50%;\r\n          width: 18px;\r\n          height: 18px;\r\n          display: flex;\r\n          align-items: center;\r\n          justify-content: center;\r\n          font-size: 10px;\r\n          font-weight: bold;\r\n        }\r\n      }\r\n    }\r\n\r\n    .user-profile {\r\n      display: flex;\r\n      align-items: center;\r\n      gap: 10px;\r\n      padding: 0 12px;\r\n      border-left: 1px solid #e0e0e0;\r\n\r\n      .settings-btn {\r\n        background: none;\r\n        border: none;\r\n        font-size: 18px;\r\n        cursor: pointer;\r\n\r\n        &:hover {\r\n          opacity: 0.8;\r\n        }\r\n      }\r\n\r\n      .user-info {\r\n        display: flex;\r\n        align-items: center;\r\n        gap: 10px;\r\n\r\n        .user-avatar {\r\n          width: 40px;\r\n          height: 40px;\r\n          border-radius: 50%;\r\n          object-fit: cover;\r\n          border: 2px solid #ff6b35;\r\n        }\r\n\r\n        .user-details {\r\n          display: flex;\r\n          flex-direction: column;\r\n          font-size: 12px;\r\n\r\n          .user-name {\r\n            font-weight: 700;\r\n            color: #333;\r\n          }\r\n\r\n          .user-status {\r\n            color: #ff6b35;\r\n            font-weight: 700;\r\n            font-size: 11px;\r\n          }\r\n        }\r\n      }\r\n\r\n      .dropdown-btn {\r\n        background: none;\r\n        border: none;\r\n        font-size: 12px;\r\n        cursor: pointer;\r\n        color: #666;\r\n\r\n        &:hover {\r\n          color: #333;\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n@media (max-width: 1024px) {\r\n  .pos-header {\r\n    flex-wrap: wrap;\r\n    height: auto;\r\n    padding: 12px 16px;\r\n\r\n    .header-center {\r\n      flex-basis: 100%;\r\n      margin: 10px 0;\r\n\r\n      .store-info {\r\n        flex-direction: column;\r\n        gap: 10px;\r\n      }\r\n    }\r\n  }\r\n}\r\n"] }]
    }], null, { storeInfo: [{
            type: Input
        }], userName: [{
            type: Input
        }], notificationClick: [{
            type: Output
        }] }); })();
//# sourceMappingURL=pos-header.component.js.map