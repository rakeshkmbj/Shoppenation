import { Component } from '@angular/core';
import { LoginComponent } from 'src/app/login';
import { MdrConnectComponent } from 'src/app/mdr-connect/mdr-connect.component';
import { DataAndPrivacyComponent } from 'src/app/About/data-and-privacy/data-and-privacy.component';
import { RefundComponent } from 'src/app/About/refund/refund.component';
import { PricingAndTMComponent } from 'src/app/About/pricing-and-tm/pricing-and-tm.component';
import { AllDayVendingComponent } from 'src/app/About/all-day-vending/all-day-vending.component';
import { AllDayDistributionComponent } from 'src/app/About/all-day-distribution/all-day-distribution.component';
import { MedexHcpComponent } from 'src/app/About/medex-hcp/medex-hcp.component';
import { ConnectComponent } from 'src/app/About/connect/connect.component';
import { MdrConnectComponent2 } from 'src/app/About/mdr-connect/mdr-connect.component';
import { TermsComponent } from 'src/app/About/terms/terms.component';
import { HelpDeskComponent } from 'src/app/help-desk/help-desk.component';
import { HcpLoginComponent } from 'src/app/hcp-login/hcp-login.component';
import { DeliveryLoginComponent } from 'src/app/delivery-login/delivery-login.component';
import * as i0 from "@angular/core";
import * as i1 from "ngx-bootstrap/modal";
import * as i2 from "@angular/common";
function SiteHeaderComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 36);
    i0.ɵɵlistener("click", function SiteHeaderComponent_div_9_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.toggleMenu()); });
    i0.ɵɵelementEnd();
} }
function SiteHeaderComponent_div_48_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 37)(1, "div", 31);
    i0.ɵɵlistener("click", function SiteHeaderComponent_div_48_Template_div_click_1_listener() { i0.ɵɵrestoreView(_r5); const ctx_r4 = i0.ɵɵnextContext(); ctx_r4.openMdrCoonectModal(); return i0.ɵɵresetView(ctx_r4.closeMenu()); });
    i0.ɵɵelement(2, "img", 16);
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4, "MDR Connect");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "div", 31);
    i0.ɵɵlistener("click", function SiteHeaderComponent_div_48_Template_div_click_5_listener() { i0.ɵɵrestoreView(_r5); const ctx_r6 = i0.ɵɵnextContext(); ctx_r6.openHcpLoginModal(); return i0.ɵɵresetView(ctx_r6.closeMenu()); });
    i0.ɵɵelement(6, "img", 18);
    i0.ɵɵelementStart(7, "span");
    i0.ɵɵtext(8, "HCP Login");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "div", 31);
    i0.ɵɵlistener("click", function SiteHeaderComponent_div_48_Template_div_click_9_listener() { i0.ɵɵrestoreView(_r5); const ctx_r7 = i0.ɵɵnextContext(); ctx_r7.openLoginModal(); return i0.ɵɵresetView(ctx_r7.closeMenu()); });
    i0.ɵɵelement(10, "img", 32);
    i0.ɵɵelementStart(11, "span");
    i0.ɵɵtext(12, "Partner Login");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "div", 31);
    i0.ɵɵlistener("click", function SiteHeaderComponent_div_48_Template_div_click_13_listener() { i0.ɵɵrestoreView(_r5); const ctx_r8 = i0.ɵɵnextContext(); ctx_r8.openDeliveryLoginModal(); return i0.ɵɵresetView(ctx_r8.closeMenu()); });
    i0.ɵɵelement(14, "img", 33);
    i0.ɵɵelementStart(15, "span");
    i0.ɵɵtext(16, "Delivery Login");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(17, "div", 34);
    i0.ɵɵlistener("click", function SiteHeaderComponent_div_48_Template_div_click_17_listener() { i0.ɵɵrestoreView(_r5); const ctx_r9 = i0.ɵɵnextContext(); ctx_r9.openHelpdeskLoginModal(); return i0.ɵɵresetView(ctx_r9.closeMenu()); });
    i0.ɵɵelement(18, "img", 35);
    i0.ɵɵelementStart(19, "span");
    i0.ɵɵtext(20, "Help Desk");
    i0.ɵɵelementEnd()()();
} }
export class SiteHeaderComponent {
    constructor(modalService, bsModalRef) {
        this.modalService = modalService;
        this.bsModalRef = bsModalRef;
        this.isProductOpen = false;
        this.isMobileMenuOpen = false;
        this.isAppsOpen = false;
        this.isMenuOpen = false;
        this.isProductsOpen = false;
    }
    ngOnInit() {
    }
    closeMenu() {
        this.isMenuOpen = false;
    }
    toggleApps() {
        this.isAppsOpen = !this.isAppsOpen;
    }
    toggleMenu() {
        this.isAppsOpen = false;
        this.isMenuOpen = !this.isMenuOpen;
    }
    toggleProducts() {
        if (window.innerWidth < 992) {
            this.isProductsOpen = !this.isProductsOpen;
        }
    }
    toggleMobileMenu() {
        this.isMobileMenuOpen = !this.isMobileMenuOpen;
    }
    openHelpdeskLoginModal() {
        this.closeMenu();
        this.modalRef = this.modalService.show(HelpDeskComponent, Object.assign({}, { class: 'login-modal' }));
    }
    openHcpLoginModal() {
        this.closeMenu();
        this.modalRef = this.modalService.show(HcpLoginComponent, Object.assign({}, { class: 'login-modal' }));
    }
    openDeliveryLoginModal() {
        this.closeMenu();
        this.modalRef = this.modalService.show(DeliveryLoginComponent, Object.assign({}, { class: 'login-modal' }));
    }
    openLoginModal() {
        this.closeMenu();
        this.modalRef = this.modalService.show(LoginComponent, Object.assign({}, { class: 'login-modal' }));
    }
    openMdrCoonectModal() {
        this.closeMenu();
        this.modalRef = this.modalService.show(MdrConnectComponent, Object.assign({}, { class: 'modal-xl' }));
    }
    openAllDayVending() {
        this.modalRef = this.modalService.show(AllDayVendingComponent, Object.assign({}, { class: 'modal-xl' }));
    }
    openAllDayDistribution() {
        this.modalRef = this.modalService.show(AllDayDistributionComponent, Object.assign({}, { class: 'modal-xl' }));
    }
    openDataAndPrivacy() {
        this.modalRef = this.modalService.show(DataAndPrivacyComponent, Object.assign({}, { class: 'modal-xl' }));
    }
    openRefund() {
        this.modalRef = this.modalService.show(RefundComponent, Object.assign({}, { class: 'modal-xl' }));
    }
    openPricingAndTM() {
        this.modalRef = this.modalService.show(PricingAndTMComponent, Object.assign({}, { class: 'modal-xl' }));
    }
    openMedexHCP() {
        this.modalRef = this.modalService.show(MedexHcpComponent, Object.assign({}, { class: 'modal-xl' }));
    }
    openConnect() {
        this.modalRef = this.modalService.show(ConnectComponent, Object.assign({}, { class: 'modal-xl' }));
    }
    openMdrConnect() {
        this.modalRef = this.modalService.show(MdrConnectComponent2, Object.assign({}, { class: 'modal-xl' }));
    }
    openTerms() {
        this.modalRef = this.modalService.show(TermsComponent, Object.assign({}, { class: 'modal-xl' }));
    }
}
SiteHeaderComponent.ɵfac = function SiteHeaderComponent_Factory(t) { return new (t || SiteHeaderComponent)(i0.ɵɵdirectiveInject(i1.BsModalService), i0.ɵɵdirectiveInject(i1.BsModalRef)); };
SiteHeaderComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SiteHeaderComponent, selectors: [["site-header"]], decls: 110, vars: 8, consts: [[1, "container-fluid", "header"], [1, "d-lg-none"], [1, "row", "align-items-center"], [1, "col-auto", "logo", "d-flex", "align-items-center"], ["src", "../assets/images/logo_1.jpg"], [1, "col", "header-title"], [1, "col-auto", "mobile-toggle", 3, "click"], ["class", "nav-overlay", 3, "click", 4, "ngIf"], [1, "nav-content"], [1, "left-block"], [1, "d-flex", "section-links"], [1, "products-dropdown", 3, "click"], [1, "products-label"], [1, "products-menu"], [1, "app-item", 3, "click"], ["src", "../assets/images/vending.jpg"], ["src", "../assets/images/MdrConnect.jpg"], ["src", "../assets/images/distribution.png"], ["src", "../assets/images/businessman.png"], [1, "links", 3, "click"], [1, "mobile-section"], [1, "section-title", "clickable", 3, "click"], [1, "arrow"], ["class", "applications-grid", 4, "ngIf"], [1, "d-none", "d-lg-block"], [1, "container-fluid"], [1, "row", "flex-nowrap", "align-items-stretch"], [1, "col", "position-relative"], [1, "top-heading"], [1, "products-dropdown"], [1, "d-flex", "section-login"], [1, "backoffice-login", 3, "click"], ["src", "../assets/images/login_icon.png"], ["src", "../assets/images/d_man.png"], [1, "backoffice-login", "helpdesk-icon", 3, "click"], ["src", "../assets/images/helpdesk-icon.png"], [1, "nav-overlay", 3, "click"], [1, "applications-grid"]], template: function SiteHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        i0.ɵɵelement(4, "img", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "div", 5);
        i0.ɵɵtext(6, " All Day Digital Enterprise Application Platform ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "div", 6);
        i0.ɵɵlistener("click", function SiteHeaderComponent_Template_div_click_7_listener() { return ctx.toggleMenu(); });
        i0.ɵɵtext(8, " \u2630 ");
        i0.ɵɵelementEnd()();
        i0.ɵɵtemplate(9, SiteHeaderComponent_div_9_Template, 1, 0, "div", 7);
        i0.ɵɵelementStart(10, "div", 8)(11, "div", 9)(12, "div", 10)(13, "div", 11);
        i0.ɵɵlistener("click", function SiteHeaderComponent_Template_div_click_13_listener() { return ctx.toggleProducts(); });
        i0.ɵɵelementStart(14, "span", 12);
        i0.ɵɵtext(15, "Products");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(16, "div", 13)(17, "div", 14);
        i0.ɵɵlistener("click", function SiteHeaderComponent_Template_div_click_17_listener() { return ctx.openAllDayVending(); });
        i0.ɵɵelement(18, "img", 15);
        i0.ɵɵelementStart(19, "span");
        i0.ɵɵtext(20, "All-Day Vending");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(21, "div", 14);
        i0.ɵɵlistener("click", function SiteHeaderComponent_Template_div_click_21_listener() { return ctx.openMdrConnect(); });
        i0.ɵɵelement(22, "img", 16);
        i0.ɵɵelementStart(23, "span");
        i0.ɵɵtext(24, "MDR Connect");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(25, "div", 14);
        i0.ɵɵlistener("click", function SiteHeaderComponent_Template_div_click_25_listener() { return ctx.openAllDayDistribution(); });
        i0.ɵɵelement(26, "img", 17);
        i0.ɵɵelementStart(27, "span");
        i0.ɵɵtext(28, "All-Day Distribution");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(29, "div", 14);
        i0.ɵɵlistener("click", function SiteHeaderComponent_Template_div_click_29_listener() { return ctx.openMedexHCP(); });
        i0.ɵɵelement(30, "img", 18);
        i0.ɵɵelementStart(31, "span");
        i0.ɵɵtext(32, "MedX");
        i0.ɵɵelementEnd()()()();
        i0.ɵɵelementStart(33, "span", 19);
        i0.ɵɵlistener("click", function SiteHeaderComponent_Template_span_click_33_listener() { return ctx.openDataAndPrivacy(); });
        i0.ɵɵtext(34, "Data & Privacy");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(35, "span", 19);
        i0.ɵɵlistener("click", function SiteHeaderComponent_Template_span_click_35_listener() { return ctx.openRefund(); });
        i0.ɵɵtext(36, "Refunds");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(37, "span", 19);
        i0.ɵɵlistener("click", function SiteHeaderComponent_Template_span_click_37_listener() { return ctx.openPricingAndTM(); });
        i0.ɵɵtext(38, "Pricing");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(39, "span", 19);
        i0.ɵɵlistener("click", function SiteHeaderComponent_Template_span_click_39_listener() { return ctx.openTerms(); });
        i0.ɵɵtext(40, "Terms");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(41, "span", 19);
        i0.ɵɵlistener("click", function SiteHeaderComponent_Template_span_click_41_listener() { return ctx.openConnect(); });
        i0.ɵɵtext(42, "Connect");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(43, "div", 20)(44, "div", 21);
        i0.ɵɵlistener("click", function SiteHeaderComponent_Template_div_click_44_listener() { return ctx.toggleApps(); });
        i0.ɵɵtext(45, " Applications ");
        i0.ɵɵelementStart(46, "span", 22);
        i0.ɵɵtext(47, "\u2304");
        i0.ɵɵelementEnd()();
        i0.ɵɵtemplate(48, SiteHeaderComponent_div_48_Template, 21, 0, "div", 23);
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(49, "div", 24)(50, "div", 25)(51, "div", 26)(52, "div", 3);
        i0.ɵɵelement(53, "img", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(54, "div", 27)(55, "div", 9)(56, "div", 28);
        i0.ɵɵtext(57, " All Day Digital Enterprise Application Platform ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(58, "div", 10)(59, "div", 29)(60, "span", 12);
        i0.ɵɵtext(61, "Products");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(62, "div", 13)(63, "div", 14);
        i0.ɵɵlistener("click", function SiteHeaderComponent_Template_div_click_63_listener() { return ctx.openAllDayVending(); });
        i0.ɵɵelement(64, "img", 15);
        i0.ɵɵelementStart(65, "span");
        i0.ɵɵtext(66, "All-Day Vending");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(67, "div", 14);
        i0.ɵɵlistener("click", function SiteHeaderComponent_Template_div_click_67_listener() { return ctx.openMdrConnect(); });
        i0.ɵɵelement(68, "img", 16);
        i0.ɵɵelementStart(69, "span");
        i0.ɵɵtext(70, "MDR Connect");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(71, "div", 14);
        i0.ɵɵlistener("click", function SiteHeaderComponent_Template_div_click_71_listener() { return ctx.openAllDayDistribution(); });
        i0.ɵɵelement(72, "img", 17);
        i0.ɵɵelementStart(73, "span");
        i0.ɵɵtext(74, "All-Day Distribution");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(75, "div", 14);
        i0.ɵɵlistener("click", function SiteHeaderComponent_Template_div_click_75_listener() { return ctx.openMedexHCP(); });
        i0.ɵɵelement(76, "img", 18);
        i0.ɵɵelementStart(77, "span");
        i0.ɵɵtext(78, "MedX");
        i0.ɵɵelementEnd()()()();
        i0.ɵɵelementStart(79, "span", 19);
        i0.ɵɵlistener("click", function SiteHeaderComponent_Template_span_click_79_listener() { return ctx.openDataAndPrivacy(); });
        i0.ɵɵtext(80, "Data & Privacy");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(81, "span", 19);
        i0.ɵɵlistener("click", function SiteHeaderComponent_Template_span_click_81_listener() { return ctx.openRefund(); });
        i0.ɵɵtext(82, "Refunds");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(83, "span", 19);
        i0.ɵɵlistener("click", function SiteHeaderComponent_Template_span_click_83_listener() { return ctx.openPricingAndTM(); });
        i0.ɵɵtext(84, "Pricing");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(85, "span", 19);
        i0.ɵɵlistener("click", function SiteHeaderComponent_Template_span_click_85_listener() { return ctx.openTerms(); });
        i0.ɵɵtext(86, "Terms");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(87, "span", 19);
        i0.ɵɵlistener("click", function SiteHeaderComponent_Template_span_click_87_listener() { return ctx.openConnect(); });
        i0.ɵɵtext(88, "Connect");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(89, "div", 30)(90, "div", 31);
        i0.ɵɵlistener("click", function SiteHeaderComponent_Template_div_click_90_listener() { return ctx.openMdrCoonectModal(); });
        i0.ɵɵelement(91, "img", 16);
        i0.ɵɵelementStart(92, "span");
        i0.ɵɵtext(93, "MDR Connect");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(94, "div", 31);
        i0.ɵɵlistener("click", function SiteHeaderComponent_Template_div_click_94_listener() { return ctx.openHcpLoginModal(); });
        i0.ɵɵelement(95, "img", 18);
        i0.ɵɵelementStart(96, "span");
        i0.ɵɵtext(97, "HCP Login");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(98, "div", 31);
        i0.ɵɵlistener("click", function SiteHeaderComponent_Template_div_click_98_listener() { return ctx.openLoginModal(); });
        i0.ɵɵelement(99, "img", 32);
        i0.ɵɵelementStart(100, "span");
        i0.ɵɵtext(101, "Partner Login");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(102, "div", 31);
        i0.ɵɵlistener("click", function SiteHeaderComponent_Template_div_click_102_listener() { return ctx.openDeliveryLoginModal(); });
        i0.ɵɵelement(103, "img", 33);
        i0.ɵɵelementStart(104, "span");
        i0.ɵɵtext(105, "Delivery Login");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(106, "div", 34);
        i0.ɵɵlistener("click", function SiteHeaderComponent_Template_div_click_106_listener() { return ctx.openHelpdeskLoginModal(); });
        i0.ɵɵelement(107, "img", 35);
        i0.ɵɵelementStart(108, "span");
        i0.ɵɵtext(109, "Help Desk");
        i0.ɵɵelementEnd()()()()()()()();
    } if (rf & 2) {
        i0.ɵɵadvance(9);
        i0.ɵɵproperty("ngIf", ctx.isMenuOpen);
        i0.ɵɵadvance(1);
        i0.ɵɵclassProp("open", ctx.isMenuOpen);
        i0.ɵɵadvance(3);
        i0.ɵɵclassProp("open", ctx.isProductsOpen);
        i0.ɵɵadvance(33);
        i0.ɵɵclassProp("rotate", ctx.isAppsOpen);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.isAppsOpen);
    } }, dependencies: [i2.NgIf], styles: [".header[_ngcontent-%COMP%] {\r\n  padding: 6px 35px;\r\n  \r\n  background: #fff;\r\n}\r\n\r\n.logo[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\n\r\n.logo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  display: block;\r\n  line-height: 12px;\r\n  font-weight: 600;\r\n  font-size: 11px;\r\n  text-align: center;\r\n}\r\n\r\n.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  max-width: 80px;\r\n}\r\n\r\nnav.navbar.navbar-light[_ngcontent-%COMP%] {\r\n  padding-bottom: 0;\r\n}\r\n\r\nform.form-inline.search-field[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  margin-top: 12px;\r\n}\r\n\r\n.search-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\nbutton.btn[_ngcontent-%COMP%] {\r\n  width: 35px;\r\n  padding: 0;\r\n  height: 36px;\r\n  position: absolute;\r\n  right: 1px;\r\n  border: 0;\r\n  background: #FF7900;\r\n  border-left: 1px solid #ddd;\r\n  border-radius: 0 4px 4px 0;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  max-width: 20px;\r\n}\r\n\r\n.backoffice-login[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  display: inline-block;\r\n  cursor: pointer;\r\n  margin: 10px 20px;\r\n  opacity: 0.7;\r\n}\r\n\r\n.backoffice-login[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  max-width: 30px;\r\n}\r\n\r\n.backoffice-login[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  display: block;\r\n  font-size: 12px;\r\n  font-weight: 700;\r\n}\r\n\r\n.topnav[_ngcontent-%COMP%] {\r\n  text-align: right;\r\n  position: absolute;\r\n  right: 15px;\r\n  z-index: 99;\r\n}\r\n\r\n.topnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  display: block;\r\n  font-size: 10px;\r\n  color: #ff7900;\r\n  cursor: pointer;\r\n  text-decoration: underline;\r\n}\r\n\r\n.header[_ngcontent-%COMP%]   a.nav-link[_ngcontent-%COMP%] {\r\n  padding-left: 12px !important;\r\n  padding-right: 12px !important;\r\n  color: #333;\r\n  font-weight: 600;\r\n  font-size: 13px;\r\n  padding-bottom: 0;\r\n}\r\n\r\nh3[_ngcontent-%COMP%] {\r\n  font-size: 20px;\r\n  margin: 0;\r\n  font-weight: bold;\r\n}\r\n\r\n.helpdesk-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  max-width: 18px;\r\n  opacity: 0.9;\r\n}\r\n\r\n.mdrlogin[_ngcontent-%COMP%] {\r\n  font-weight: bold;\r\n  animation: neonBlink 1s infinite alternate;\r\n}\r\n\r\n@keyframes neonBlink {\r\n  0% {\r\n    color: #ff00ff;\r\n    \r\n    text-shadow: 0 0 5px #ff00ff, 0 0 10px #ff33ff, 0 0 20px #ff66ff;\r\n  }\r\n\r\n  50% {\r\n    color: #a020f0;\r\n    \r\n    text-shadow: 0 0 5px #a020f0, 0 0 10px #b266ff, 0 0 20px #cc66ff;\r\n  }\r\n\r\n  100% {\r\n    color: #ff00ff;\r\n    \r\n    text-shadow: 0 0 5px #ff00ff, 0 0 10px #ff33ff, 0 0 20px #ff66ff;\r\n  }\r\n}\r\n\r\n\r\n.header[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\r\n  flex-wrap: nowrap;\r\n}\r\n\r\n\r\n.nav-section[_ngcontent-%COMP%] {\r\n  gap: 18px;\r\n  margin-left: 25px;\r\n}\r\n\r\n\r\n.section-login[_ngcontent-%COMP%] {\r\n  margin-left: auto;\r\n}\r\n\r\n\r\n.backoffice-login[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  max-width: 22px;\r\n}\r\n\r\n\r\n.backoffice-login[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  font-size: 11px;\r\n}\r\n\r\n\r\n.section-links[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  font-weight: 600;\r\n  margin-right: 15px;\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  max-width: 50px;\r\n}\r\n\r\n\r\n.backoffice-login[_ngcontent-%COMP%] {\r\n  margin: 5px 8px;\r\n}\r\n\r\n.section-links[_ngcontent-%COMP%] {\r\n  margin-left: 20px;\r\n  \r\n}\r\n\r\n\r\n.section-products[_ngcontent-%COMP%] {\r\n  margin-left: 30px;\r\n}\r\n\r\n.section-login[_ngcontent-%COMP%] {\r\n  margin-left: 30px;\r\n}\r\n\r\n.section-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n\r\n  font-size: 12px;\r\n  font-weight: 600;\r\n\r\n  color: #FF7900;\r\n  \r\n\r\n  text-decoration: underline;\r\n\r\n  margin-right: 18px;\r\n\r\n  transition: color 0.25s ease;\r\n  cursor: pointer;\r\n\r\n}\r\n\r\n\r\n\r\n.section-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n\r\n  color: #cc6100;\r\n\r\n}\r\n\r\n.applications-box[_ngcontent-%COMP%] {\r\n\r\n  border: 1px solid #d6dde6;\r\n  border-radius: 10px;\r\n\r\n  padding: 6px 16px 8px 16px;\r\n\r\n  background: #f8fafc;\r\n\r\n}\r\n\r\n\r\n\r\n.applications-heading[_ngcontent-%COMP%] {\r\n\r\n  font-size: 11px;\r\n  font-weight: 600;\r\n\r\n  color: #2f6fed;\r\n\r\n  letter-spacing: 1px;\r\n\r\n  margin-bottom: 4px;\r\n\r\n}\r\n\r\n\r\n\r\n.applications-list[_ngcontent-%COMP%] {\r\n\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 22px;\r\n\r\n}\r\n\r\n\r\n\r\n.app-item[_ngcontent-%COMP%] {\r\n\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 6px;\r\n\r\n  padding: 4px 6px;\r\n\r\n  border-radius: 6px;\r\n\r\n  cursor: pointer;\r\n\r\n  transition: all 0.2s ease;\r\n\r\n}\r\n\r\n\r\n\r\n.app-item[_ngcontent-%COMP%]:hover {\r\n\r\n  background: #eef4ff;\r\n\r\n}\r\n\r\n\r\n\r\n.primary-app[_ngcontent-%COMP%] {\r\n\r\n  font-weight: 600;\r\n\r\n  color: #2f6fed;\r\n\r\n}\r\n\r\n\r\n\r\n.app-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n\r\n  width: 18px;\r\n  height: 18px;\r\n\r\n}\r\n\r\n\r\n\r\n.app-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n\r\n  font-size: 13px;\r\n\r\n}\r\n\r\n.applications-heading[_ngcontent-%COMP%] {\r\n\r\n  text-align: center;\r\n  \r\n\r\n  font-size: 11px;\r\n  font-weight: 700;\r\n\r\n  color: #1b3c74;\r\n\r\n  letter-spacing: 1.5px;\r\n\r\n  margin-bottom: 6px;\r\n\r\n  text-transform: uppercase;\r\n\r\n}\r\n\r\n\r\n\r\n.applications-box[_ngcontent-%COMP%] {\r\n\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n\r\n}\r\n\r\n.section-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  font-size: 15px;\r\n  font-weight: 600;\r\n}\r\n\r\n\r\n.header[_ngcontent-%COMP%] {\r\n  padding: 6px 20px;\r\n  border-bottom: 5px solid #FF7900;\r\n  background: #fff;\r\n}\r\n\r\n\r\n.logo[_ngcontent-%COMP%] {\r\n  padding: 0 15px;\r\n}\r\n\r\n.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  height: 80px;\r\n  \r\n  object-fit: contain;\r\n}\r\n\r\n\r\n.nav-row[_ngcontent-%COMP%] {\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n\r\n.section-links[_ngcontent-%COMP%] {\r\n  gap: 22px;\r\n}\r\n\r\n\r\n.section-login[_ngcontent-%COMP%] {\r\n  margin-left: auto;\r\n  gap: 10px;\r\n}\r\n\r\n\r\n.products-dropdown[_ngcontent-%COMP%] {\r\n  position: relative;\r\n}\r\n\r\n\r\n.products-dropdown[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  padding-bottom: 6px;\r\n  \r\n}\r\n\r\n.products-dropdown[_ngcontent-%COMP%]:hover   .products-menu[_ngcontent-%COMP%] {\r\n  display: block;\r\n}\r\n\r\n.nav-row[_ngcontent-%COMP%] {\r\n  justify-content: space-between;\r\n}\r\n\r\n\r\n.left-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n\r\n\r\n\r\n.products-label[_ngcontent-%COMP%] {\r\n  font-size: 18px;\r\n  font-weight: 700;\r\n  color: #FF7900;\r\n}\r\n\r\n.links[_ngcontent-%COMP%] {\r\n  color: #FF7900;\r\n  font-size: 18px;\r\n}\r\n\r\n\r\n.nav-row[_ngcontent-%COMP%] {\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n\r\n.top-heading[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  font-size: 18px;\r\n  font-weight: 700;\r\n  color: #5f6f7f;\r\n  margin-bottom: 6px;\r\n}\r\n\r\n\r\n.section-links[_ngcontent-%COMP%] {\r\n  gap: 22px;\r\n}\r\n\r\n\r\n.section-login[_ngcontent-%COMP%] {\r\n  margin-left: auto;\r\n  gap: 10px;\r\n}\r\n\r\n\r\n.products-dropdown[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  padding-bottom: 6px;\r\n}\r\n\r\n.products-dropdown[_ngcontent-%COMP%]:hover   .products-menu[_ngcontent-%COMP%] {\r\n  display: block;\r\n}\r\n\r\n.left-block[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  \r\n}\r\n\r\n.col[_ngcontent-%COMP%] {\r\n  position: relative;\r\n}\r\n\r\n.section-login[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  right: 20px;\r\n  bottom: 8px;\r\n}\r\n\r\n\r\n.products-dropdown[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  display: inline-block;\r\n}\r\n\r\n\r\n.products-label[_ngcontent-%COMP%] {\r\n  font-size: 18px;\r\n  font-weight: 600;\r\n  color: #FF7900;\r\n  cursor: pointer;\r\n  padding-bottom: 8px;\r\n  \r\n}\r\n\r\n\r\n.products-menu[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 100%;\r\n  \r\n  left: 0;\r\n  background: #fff;\r\n  border: 1px solid #d6dde6;\r\n  border-radius: 8px;\r\n  padding: 10px;\r\n  min-width: 220px;\r\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);\r\n  z-index: 999;\r\n\r\n  \r\n  opacity: 0;\r\n  visibility: hidden;\r\n  transform: translateY(5px);\r\n  transition: all 0.2s ease;\r\n}\r\n\r\n\r\n.products-dropdown[_ngcontent-%COMP%]:hover   .products-menu[_ngcontent-%COMP%] {\r\n  opacity: 1;\r\n  visibility: visible;\r\n  transform: translateY(0);\r\n}\r\n\r\n.products-menu[_ngcontent-%COMP%]:hover {\r\n  visibility: visible;\r\n  opacity: 1;\r\n}\r\n\r\n\r\n.mobile-toggle[_ngcontent-%COMP%] {\r\n  font-size: 22px;\r\n  cursor: pointer;\r\n  padding: 10px;\r\n  display: none;\r\n}\r\n\r\n\r\n.nav-content[_ngcontent-%COMP%] {\r\n  display: block;\r\n}\r\n\r\n\r\n@media (max-width: 992px) {\r\n\r\n  \r\n  .mobile-toggle[_ngcontent-%COMP%] {\r\n    display: block;\r\n    position: absolute;\r\n    right: 15px;\r\n    top: 10px;\r\n    z-index: 1001;\r\n  }\r\n\r\n  \r\n  .header[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\r\n    flex-wrap: wrap !important;\r\n  }\r\n\r\n  \r\n  .nav-content[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    max-height: 0;\r\n    overflow: hidden;\r\n    transition: all 0.3s ease;\r\n  }\r\n\r\n  \r\n  .nav-content.open[_ngcontent-%COMP%] {\r\n    max-height: 1000px;\r\n    padding-top: 50px;\r\n  }\r\n\r\n  \r\n  .top-heading[_ngcontent-%COMP%] {\r\n    text-align: left;\r\n    font-size: 16px;\r\n  }\r\n\r\n  \r\n  .section-links[_ngcontent-%COMP%] {\r\n    flex-direction: column;\r\n    gap: 10px;\r\n    margin-left: 0;\r\n  }\r\n\r\n  .links[_ngcontent-%COMP%], .products-label[_ngcontent-%COMP%] {\r\n    font-size: 14px;\r\n  }\r\n\r\n  \r\n  .products-menu[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    box-shadow: none;\r\n    border: none;\r\n    padding-left: 10px;\r\n  }\r\n\r\n  \r\n  .section-login[_ngcontent-%COMP%] {\r\n    position: static !important;\r\n    flex-wrap: wrap;\r\n    justify-content: flex-start;\r\n    margin-top: 10px;\r\n  }\r\n\r\n  .backoffice-login[_ngcontent-%COMP%] {\r\n    width: 25%;\r\n    text-align: center;\r\n    margin: 10px 0;\r\n  }\r\n\r\n  .backoffice-login[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    font-size: 10px;\r\n  }\r\n\r\n  \r\n  .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    height: 50px;\r\n  }\r\n}\r\n\r\n@media (max-width: 992px) {\r\n\r\n  \r\n  .header[_ngcontent-%COMP%] {\r\n    padding: 10px 15px;\r\n  }\r\n\r\n  .top-heading[_ngcontent-%COMP%] {\r\n    font-size: 16px;\r\n    font-weight: 700;\r\n    text-align: left;\r\n    padding-right: 40px;\r\n  }\r\n\r\n  \r\n  .mobile-toggle[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    right: 15px;\r\n    top: 14px;\r\n    font-size: 22px;\r\n    z-index: 1001;\r\n  }\r\n\r\n  \r\n  .nav-content[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    top: 0;\r\n    right: -100%;\r\n    width: 85%;\r\n    height: 100vh;\r\n    background: #ffffff;\r\n    z-index: 1000;\r\n    padding: 20px 18px;\r\n    overflow-y: auto;\r\n    transition: right 0.3s ease;\r\n    box-shadow: -5px 0 20px rgba(0, 0, 0, 0.08);\r\n  }\r\n\r\n  .nav-content.open[_ngcontent-%COMP%] {\r\n    right: 0;\r\n  }\r\n\r\n  \r\n  .nav-content[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n\r\n  \r\n  .mobile-section[_ngcontent-%COMP%] {\r\n    margin-top: 25px;\r\n  }\r\n\r\n  \r\n  .section-title[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n    font-weight: 700;\r\n    color: #8a98a8;\r\n    margin-bottom: 12px;\r\n    text-transform: uppercase;\r\n    letter-spacing: 1px;\r\n  }\r\n\r\n  \r\n  .mobile-links[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 14px;\r\n  }\r\n\r\n  .links[_ngcontent-%COMP%], .products-label[_ngcontent-%COMP%] {\r\n    font-size: 16px;\r\n    font-weight: 600;\r\n    color: #FF7900;\r\n  }\r\n\r\n  \r\n  .products-menu[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    display: none;\r\n    padding-left: 12px;\r\n    margin-top: 6px;\r\n    border-left: 2px solid #eee;\r\n  }\r\n\r\n  .products-dropdown.open[_ngcontent-%COMP%]   .products-menu[_ngcontent-%COMP%] {\r\n    display: block;\r\n  }\r\n\r\n  .app-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    font-size: 13px;\r\n  }\r\n\r\n  \r\n  .applications-grid[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-columns: repeat(3, 1fr);\r\n    gap: 18px;\r\n    margin-top: 10px;\r\n  }\r\n\r\n  .backoffice-login[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    padding: 10px 5px;\r\n    border-radius: 10px;\r\n    transition: all 0.2s ease;\r\n  }\r\n\r\n  .backoffice-login[_ngcontent-%COMP%]:hover {\r\n    background: #f5f7fb;\r\n  }\r\n\r\n  .backoffice-login[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    max-width: 28px;\r\n    margin-bottom: 6px;\r\n    opacity: 0.8;\r\n  }\r\n\r\n  .backoffice-login[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    font-size: 11px;\r\n    font-weight: 600;\r\n    color: #5f6f7f;\r\n  }\r\n\r\n  \r\n  .nav-overlay[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    inset: 0;\r\n    \r\n    \r\n    z-index: 999;\r\n  }\r\n\r\n  .nav-content[_ngcontent-%COMP%] {\r\n    background: #ffffff;\r\n    \r\n    opacity: 1 !important;\r\n  }\r\n\r\n  \r\n  .links[_ngcontent-%COMP%], .products-label[_ngcontent-%COMP%] {\r\n    color: #FF7900;\r\n  }\r\n\r\n  .section-title[_ngcontent-%COMP%] {\r\n    color: #2f3e4e;\r\n  }\r\n}\r\n\r\n@media (max-width: 992px) {\r\n  .top-heading[_ngcontent-%COMP%] {\r\n    font-size: 14px;\r\n    \r\n    font-weight: 600;\r\n    line-height: 1.3;\r\n  }\r\n}\r\n\r\n\r\n.header-title[_ngcontent-%COMP%] {\r\n  font-size: 14px;\r\n  font-weight: 600;\r\n  color: #5f6f7f;\r\n  line-height: 1.2;\r\n}\r\n\r\n\r\n@media (max-width: 992px) {\r\n\r\n  .header-title[_ngcontent-%COMP%] {\r\n    font-size: 13px;\r\n    padding-right: 10px;\r\n  }\r\n\r\n  .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    height: 45px;\r\n  }\r\n\r\n  .header[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\r\n    align-items: center;\r\n  }\r\n}\r\n\r\n@media (max-width: 992px) {\r\n\r\n  .backoffice-login[_ngcontent-%COMP%] {\r\n    padding: 4px 2px;\r\n    \r\n  }\r\n\r\n  .backoffice-login[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    max-width: 22px;\r\n    margin-bottom: 3px;\r\n  }\r\n\r\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SiteHeaderComponent, [{
        type: Component,
        args: [{ selector: 'site-header', template: "<div class=\"container-fluid header\">\n\n  <!-- ================= MOBILE NAV ================= -->\n  <div class=\"d-lg-none\">\n\n    <!-- TOP BAR -->\n    <div class=\"row align-items-center\">\n\n      <div class=\"col-auto logo d-flex align-items-center\">\n        <img src=\"../assets/images/logo_1.jpg\" />\n      </div>\n\n      <div class=\"col header-title\">\n        All Day Digital Enterprise Application Platform\n      </div>\n\n      <div class=\"col-auto mobile-toggle\" (click)=\"toggleMenu()\">\n        \u2630\n      </div>\n\n    </div>\n\n    <!-- OVERLAY -->\n    <div class=\"nav-overlay\" *ngIf=\"isMenuOpen\" (click)=\"toggleMenu()\"></div>\n\n    <!-- SIDEBAR -->\n    <div class=\"nav-content\" [class.open]=\"isMenuOpen\">\n\n      <div class=\"left-block\">\n\n        <!-- LINKS -->\n        <div class=\"d-flex section-links\">\n\n          <!-- PRODUCTS -->\n          <div class=\"products-dropdown\" [class.open]=\"isProductsOpen\" (click)=\"toggleProducts()\">\n\n            <span class=\"products-label\">Products</span>\n\n            <div class=\"products-menu\">\n\n              <div class=\"app-item\" (click)=\"openAllDayVending()\">\n                <img src=\"../assets/images/vending.jpg\" />\n                <span>All-Day Vending</span>\n              </div>\n\n              <div class=\"app-item\" (click)=\"openMdrConnect()\">\n                <img src=\"../assets/images/MdrConnect.jpg\" />\n                <span>MDR Connect</span>\n              </div>\n\n              <div class=\"app-item\" (click)=\"openAllDayDistribution()\">\n                <img src=\"../assets/images/distribution.png\" />\n                <span>All-Day Distribution</span>\n              </div>\n\n              <div class=\"app-item\" (click)=\"openMedexHCP()\">\n                <img src=\"../assets/images/businessman.png\" />\n                <span>MedX</span>\n              </div>\n\n            </div>\n          </div>\n\n          <span class=\"links\" (click)=\"openDataAndPrivacy()\">Data & Privacy</span>\n          <span class=\"links\" (click)=\"openRefund()\">Refunds</span>\n          <span class=\"links\" (click)=\"openPricingAndTM()\">Pricing</span>\n          <span class=\"links\" (click)=\"openTerms()\">Terms</span>\n          <span class=\"links\" (click)=\"openConnect()\">Connect</span>\n\n        </div>\n\n      </div>\n\n      <!-- APPLICATIONS (ACCORDION) -->\n      <div class=\"mobile-section\">\n\n        <div class=\"section-title clickable\" (click)=\"toggleApps()\">\n          Applications\n          <span class=\"arrow\" [class.rotate]=\"isAppsOpen\">\u2304</span>\n        </div>\n\n        <div class=\"applications-grid\" *ngIf=\"isAppsOpen\">\n\n          <div class=\"backoffice-login\" (click)=\"openMdrCoonectModal(); closeMenu()\">\n            <img src=\"../assets/images/MdrConnect.jpg\" />\n            <span>MDR Connect</span>\n          </div>\n\n          <div class=\"backoffice-login\" (click)=\"openHcpLoginModal(); closeMenu()\">\n            <img src=\"../assets/images/businessman.png\" />\n            <span>HCP Login</span>\n          </div>\n\n          <div class=\"backoffice-login\" (click)=\"openLoginModal(); closeMenu()\">\n            <img src=\"../assets/images/login_icon.png\" />\n            <span>Partner Login</span>\n          </div>\n\n          <div class=\"backoffice-login\" (click)=\"openDeliveryLoginModal(); closeMenu()\">\n            <img src=\"../assets/images/d_man.png\" />\n            <span>Delivery Login</span>\n          </div>\n\n          <div class=\"backoffice-login helpdesk-icon\" (click)=\"openHelpdeskLoginModal(); closeMenu()\">\n            <img src=\"../assets/images/helpdesk-icon.png\" />\n            <span>Help Desk</span>\n          </div>\n\n        </div>\n\n      </div>\n\n    </div>\n  </div>\n\n  <!-- ================= DESKTOP NAV ================= -->\n  <div class=\"d-none d-lg-block\">\n\n    <!-- \u2705 YOUR ORIGINAL CODE (NO CHANGE AT ALL) -->\n    <div class=\"container-fluid\">\n\n      <div class=\"row flex-nowrap align-items-stretch\">\n\n        <!-- LOGO -->\n        <div class=\"col-auto logo d-flex align-items-center\">\n          <img src=\"../assets/images/logo_1.jpg\" />\n        </div>\n\n        <!-- RIGHT CONTENT -->\n        <div class=\"col position-relative\">\n\n          <div class=\"left-block\">\n\n            <div class=\"top-heading\">\n              All Day Digital Enterprise Application Platform\n            </div>\n\n            <div class=\"d-flex section-links\">\n\n              <div class=\"products-dropdown\">\n                <span class=\"products-label\">Products</span>\n\n                <div class=\"products-menu\">\n                  <div class=\"app-item\" (click)=\"openAllDayVending()\">\n                    <img src=\"../assets/images/vending.jpg\" />\n                    <span>All-Day Vending</span>\n                  </div>\n\n                  <div class=\"app-item\" (click)=\"openMdrConnect()\">\n                    <img src=\"../assets/images/MdrConnect.jpg\" />\n                    <span>MDR Connect</span>\n                  </div>\n\n                  <div class=\"app-item\" (click)=\"openAllDayDistribution()\">\n                    <img src=\"../assets/images/distribution.png\" />\n                    <span>All-Day Distribution</span>\n                  </div>\n\n                  <div class=\"app-item\" (click)=\"openMedexHCP()\">\n                    <img src=\"../assets/images/businessman.png\" />\n                    <span>MedX</span>\n                  </div>\n                </div>\n              </div>\n\n              <span class=\"links\" (click)=\"openDataAndPrivacy()\">Data & Privacy</span>\n              <span class=\"links\" (click)=\"openRefund()\">Refunds</span>\n              <span class=\"links\" (click)=\"openPricingAndTM()\">Pricing</span>\n              <span class=\"links\" (click)=\"openTerms()\">Terms</span>\n              <span class=\"links\" (click)=\"openConnect()\">Connect</span>\n\n            </div>\n\n          </div>\n\n          <!-- RIGHT SIDE -->\n          <div class=\"d-flex section-login\">\n\n            <div class=\"backoffice-login\" (click)=\"openMdrCoonectModal()\">\n              <img src=\"../assets/images/MdrConnect.jpg\" />\n              <span>MDR Connect</span>\n            </div>\n\n            <div class=\"backoffice-login\" (click)=\"openHcpLoginModal()\">\n              <img src=\"../assets/images/businessman.png\" />\n              <span>HCP Login</span>\n            </div>\n\n            <div class=\"backoffice-login\" (click)=\"openLoginModal()\">\n              <img src=\"../assets/images/login_icon.png\" />\n              <span>Partner Login</span>\n            </div>\n\n            <div class=\"backoffice-login\" (click)=\"openDeliveryLoginModal()\">\n              <img src=\"../assets/images/d_man.png\" />\n              <span>Delivery Login</span>\n            </div>\n\n            <div class=\"backoffice-login helpdesk-icon\" (click)=\"openHelpdeskLoginModal()\">\n              <img src=\"../assets/images/helpdesk-icon.png\" />\n              <span>Help Desk</span>\n            </div>\n\n          </div>\n\n        </div>\n\n      </div>\n    </div>\n\n  </div>\n\n</div>", styles: [".header {\r\n  padding: 6px 35px;\r\n  /* border-bottom: 5px solid #FF7900; */\r\n  background: #fff;\r\n}\r\n\r\n.logo {\r\n  text-align: center;\r\n}\r\n\r\n.logo span {\r\n  display: block;\r\n  line-height: 12px;\r\n  font-weight: 600;\r\n  font-size: 11px;\r\n  text-align: center;\r\n}\r\n\r\n.logo img {\r\n  max-width: 80px;\r\n}\r\n\r\nnav.navbar.navbar-light {\r\n  padding-bottom: 0;\r\n}\r\n\r\nform.form-inline.search-field {\r\n  position: relative;\r\n  margin-top: 12px;\r\n}\r\n\r\n.search-field input {\r\n  width: 100%;\r\n}\r\n\r\nbutton.btn {\r\n  width: 35px;\r\n  padding: 0;\r\n  height: 36px;\r\n  position: absolute;\r\n  right: 1px;\r\n  border: 0;\r\n  background: #FF7900;\r\n  border-left: 1px solid #ddd;\r\n  border-radius: 0 4px 4px 0;\r\n}\r\n\r\n.btn img {\r\n  max-width: 20px;\r\n}\r\n\r\n.backoffice-login {\r\n  text-align: center;\r\n  display: inline-block;\r\n  cursor: pointer;\r\n  margin: 10px 20px;\r\n  opacity: 0.7;\r\n}\r\n\r\n.backoffice-login img {\r\n  max-width: 30px;\r\n}\r\n\r\n.backoffice-login span {\r\n  display: block;\r\n  font-size: 12px;\r\n  font-weight: 700;\r\n}\r\n\r\n.topnav {\r\n  text-align: right;\r\n  position: absolute;\r\n  right: 15px;\r\n  z-index: 99;\r\n}\r\n\r\n.topnav a {\r\n  display: block;\r\n  font-size: 10px;\r\n  color: #ff7900;\r\n  cursor: pointer;\r\n  text-decoration: underline;\r\n}\r\n\r\n.header a.nav-link {\r\n  padding-left: 12px !important;\r\n  padding-right: 12px !important;\r\n  color: #333;\r\n  font-weight: 600;\r\n  font-size: 13px;\r\n  padding-bottom: 0;\r\n}\r\n\r\nh3 {\r\n  font-size: 20px;\r\n  margin: 0;\r\n  font-weight: bold;\r\n}\r\n\r\n.helpdesk-icon img {\r\n  max-width: 18px;\r\n  opacity: 0.9;\r\n}\r\n\r\n.mdrlogin {\r\n  font-weight: bold;\r\n  animation: neonBlink 1s infinite alternate;\r\n}\r\n\r\n@keyframes neonBlink {\r\n  0% {\r\n    color: #ff00ff;\r\n    /* neon pink */\r\n    text-shadow: 0 0 5px #ff00ff, 0 0 10px #ff33ff, 0 0 20px #ff66ff;\r\n  }\r\n\r\n  50% {\r\n    color: #a020f0;\r\n    /* neon purple */\r\n    text-shadow: 0 0 5px #a020f0, 0 0 10px #b266ff, 0 0 20px #cc66ff;\r\n  }\r\n\r\n  100% {\r\n    color: #ff00ff;\r\n    /* back to neon pink */\r\n    text-shadow: 0 0 5px #ff00ff, 0 0 10px #ff33ff, 0 0 20px #ff66ff;\r\n  }\r\n}\r\n\r\n/* Prevent wrapping */\r\n.header .row {\r\n  flex-wrap: nowrap;\r\n}\r\n\r\n/* Section spacing */\r\n.nav-section {\r\n  gap: 18px;\r\n  margin-left: 25px;\r\n}\r\n\r\n/* Push login section to right */\r\n.section-login {\r\n  margin-left: auto;\r\n}\r\n\r\n/* Reduce icon size */\r\n.backoffice-login img {\r\n  max-width: 22px;\r\n}\r\n\r\n/* Reduce font size slightly */\r\n.backoffice-login span {\r\n  font-size: 11px;\r\n}\r\n\r\n/* Reduce link font */\r\n.section-links span {\r\n  font-weight: 600;\r\n  margin-right: 15px;\r\n  cursor: pointer;\r\n}\r\n\r\n/* Reduce logo slightly */\r\n.logo img {\r\n  max-width: 50px;\r\n}\r\n\r\n/* Reduce overall spacing */\r\n.backoffice-login {\r\n  margin: 5px 8px;\r\n}\r\n\r\n.section-links {\r\n  margin-left: 20px;\r\n  /* small spacing after logo */\r\n}\r\n\r\n/* Keep proper spacing between sections */\r\n.section-products {\r\n  margin-left: 30px;\r\n}\r\n\r\n.section-login {\r\n  margin-left: 30px;\r\n}\r\n\r\n.section-links a {\r\n\r\n  font-size: 12px;\r\n  font-weight: 600;\r\n\r\n  color: #FF7900;\r\n  /* default orange */\r\n\r\n  text-decoration: underline;\r\n\r\n  margin-right: 18px;\r\n\r\n  transition: color 0.25s ease;\r\n  cursor: pointer;\r\n\r\n}\r\n\r\n\r\n/* Hover effect (slightly darker orange for premium feel) */\r\n.section-links a:hover {\r\n\r\n  color: #cc6100;\r\n\r\n}\r\n\r\n.applications-box {\r\n\r\n  border: 1px solid #d6dde6;\r\n  border-radius: 10px;\r\n\r\n  padding: 6px 16px 8px 16px;\r\n\r\n  background: #f8fafc;\r\n\r\n}\r\n\r\n\r\n/* Heading */\r\n.applications-heading {\r\n\r\n  font-size: 11px;\r\n  font-weight: 600;\r\n\r\n  color: #2f6fed;\r\n\r\n  letter-spacing: 1px;\r\n\r\n  margin-bottom: 4px;\r\n\r\n}\r\n\r\n\r\n/* Row */\r\n.applications-list {\r\n\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 22px;\r\n\r\n}\r\n\r\n\r\n/* App item */\r\n.app-item {\r\n\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 6px;\r\n\r\n  padding: 4px 6px;\r\n\r\n  border-radius: 6px;\r\n\r\n  cursor: pointer;\r\n\r\n  transition: all 0.2s ease;\r\n\r\n}\r\n\r\n\r\n/* Hover */\r\n.app-item:hover {\r\n\r\n  background: #eef4ff;\r\n\r\n}\r\n\r\n\r\n/* MDR Connect highlight (subtle, clean) */\r\n.primary-app {\r\n\r\n  font-weight: 600;\r\n\r\n  color: #2f6fed;\r\n\r\n}\r\n\r\n\r\n/* Icons */\r\n.app-item img {\r\n\r\n  width: 18px;\r\n  height: 18px;\r\n\r\n}\r\n\r\n\r\n/* Text */\r\n.app-item span {\r\n\r\n  font-size: 13px;\r\n\r\n}\r\n\r\n.applications-heading {\r\n\r\n  text-align: center;\r\n  /* center horizontally */\r\n\r\n  font-size: 11px;\r\n  font-weight: 700;\r\n\r\n  color: #1b3c74;\r\n\r\n  letter-spacing: 1.5px;\r\n\r\n  margin-bottom: 6px;\r\n\r\n  text-transform: uppercase;\r\n\r\n}\r\n\r\n\r\n/* Optional: make box full-width aligned nicely */\r\n.applications-box {\r\n\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n\r\n}\r\n\r\n.section-links a {\r\n  font-size: 15px;\r\n  font-weight: 600;\r\n}\r\n\r\n/* HEADER */\r\n.header {\r\n  padding: 6px 20px;\r\n  border-bottom: 5px solid #FF7900;\r\n  background: #fff;\r\n}\r\n\r\n/* LOGO FULL HEIGHT */\r\n.logo {\r\n  padding: 0 15px;\r\n}\r\n\r\n.logo img {\r\n  height: 80px;\r\n  /* \uD83D\uDD25 controls full header height */\r\n  object-fit: contain;\r\n}\r\n\r\n/* RIGHT CONTAINER */\r\n.nav-row {\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n/* LEFT LINKS */\r\n.section-links {\r\n  gap: 22px;\r\n}\r\n\r\n/* RIGHT SIDE */\r\n.section-login {\r\n  margin-left: auto;\r\n  gap: 10px;\r\n}\r\n\r\n/* DROPDOWN FIX */\r\n.products-dropdown {\r\n  position: relative;\r\n}\r\n\r\n/* \uD83D\uDD25 CRITICAL: keep hover area alive */\r\n.products-dropdown {\r\n  position: relative;\r\n  padding-bottom: 6px;\r\n  /* creates invisible hover bridge */\r\n}\r\n\r\n.products-dropdown:hover .products-menu {\r\n  display: block;\r\n}\r\n\r\n.nav-row {\r\n  justify-content: space-between;\r\n}\r\n\r\n/* LEFT BLOCK */\r\n.left-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n/* RIGHT LOGIN */\r\n/* .section-login {\r\n  position: absolute;\r\n  right: 20px;\r\n  bottom: 10px;\r\n} */\r\n\r\n.products-label {\r\n  font-size: 18px;\r\n  font-weight: 700;\r\n  color: #FF7900;\r\n}\r\n\r\n.links {\r\n  color: #FF7900;\r\n  font-size: 18px;\r\n}\r\n\r\n/* \uD83D\uDD25 RIGHT SIDE STRUCTURE */\r\n.nav-row {\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n/* \uD83D\uDD25 HEADING */\r\n.top-heading {\r\n  text-align: center;\r\n  font-size: 18px;\r\n  font-weight: 700;\r\n  color: #5f6f7f;\r\n  margin-bottom: 6px;\r\n}\r\n\r\n/* \uD83D\uDD25 LEFT LINKS */\r\n.section-links {\r\n  gap: 22px;\r\n}\r\n\r\n/* \uD83D\uDD25 RIGHT LOGIN */\r\n.section-login {\r\n  margin-left: auto;\r\n  gap: 10px;\r\n}\r\n\r\n/* \uD83D\uDD25 DROPDOWN FIX (NO FLICKER) */\r\n.products-dropdown {\r\n  position: relative;\r\n  padding-bottom: 6px;\r\n}\r\n\r\n.products-dropdown:hover .products-menu {\r\n  display: block;\r\n}\r\n\r\n.left-block {\r\n  display: inline-block;\r\n  /* \uD83D\uDD25 shrink to content width */\r\n}\r\n\r\n.col {\r\n  position: relative;\r\n}\r\n\r\n.section-login {\r\n  position: absolute;\r\n  right: 20px;\r\n  bottom: 8px;\r\n}\r\n\r\n/* WRAPPER */\r\n.products-dropdown {\r\n  position: relative;\r\n  display: inline-block;\r\n}\r\n\r\n/* LABEL */\r\n.products-label {\r\n  font-size: 18px;\r\n  font-weight: 600;\r\n  color: #FF7900;\r\n  cursor: pointer;\r\n  padding-bottom: 8px;\r\n  /* \uD83D\uDD25 creates hover bridge */\r\n}\r\n\r\n/* MENU */\r\n.products-menu {\r\n  position: absolute;\r\n  top: 100%;\r\n  /* directly attached */\r\n  left: 0;\r\n  background: #fff;\r\n  border: 1px solid #d6dde6;\r\n  border-radius: 8px;\r\n  padding: 10px;\r\n  min-width: 220px;\r\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);\r\n  z-index: 999;\r\n\r\n  /* \uD83D\uDD25 animation */\r\n  opacity: 0;\r\n  visibility: hidden;\r\n  transform: translateY(5px);\r\n  transition: all 0.2s ease;\r\n}\r\n\r\n/* \uD83D\uDD25 HOVER AREA FIX (NO GAP) */\r\n.products-dropdown:hover .products-menu {\r\n  opacity: 1;\r\n  visibility: visible;\r\n  transform: translateY(0);\r\n}\r\n\r\n.products-menu:hover {\r\n  visibility: visible;\r\n  opacity: 1;\r\n}\r\n\r\n/* ================= MOBILE TOGGLE ================= */\r\n.mobile-toggle {\r\n  font-size: 22px;\r\n  cursor: pointer;\r\n  padding: 10px;\r\n  display: none;\r\n}\r\n\r\n/* ================= DEFAULT DESKTOP ================= */\r\n.nav-content {\r\n  display: block;\r\n}\r\n\r\n/* ================= TABLET + MOBILE ================= */\r\n@media (max-width: 992px) {\r\n\r\n  /* Show burger */\r\n  .mobile-toggle {\r\n    display: block;\r\n    position: absolute;\r\n    right: 15px;\r\n    top: 10px;\r\n    z-index: 1001;\r\n  }\r\n\r\n  /* Remove forced single row */\r\n  .header .row {\r\n    flex-wrap: wrap !important;\r\n  }\r\n\r\n  /* Stack layout */\r\n  .nav-content {\r\n    width: 100%;\r\n    max-height: 0;\r\n    overflow: hidden;\r\n    transition: all 0.3s ease;\r\n  }\r\n\r\n  /* OPEN STATE */\r\n  .nav-content.open {\r\n    max-height: 1000px;\r\n    padding-top: 50px;\r\n  }\r\n\r\n  /* Center heading */\r\n  .top-heading {\r\n    text-align: left;\r\n    font-size: 16px;\r\n  }\r\n\r\n  /* LINKS STACK */\r\n  .section-links {\r\n    flex-direction: column;\r\n    gap: 10px;\r\n    margin-left: 0;\r\n  }\r\n\r\n  .links,\r\n  .products-label {\r\n    font-size: 14px;\r\n  }\r\n\r\n  /* DROPDOWN FULL WIDTH */\r\n  .products-menu {\r\n    position: relative;\r\n    box-shadow: none;\r\n    border: none;\r\n    padding-left: 10px;\r\n  }\r\n\r\n  /* LOGIN SECTION STACK */\r\n  .section-login {\r\n    position: static !important;\r\n    flex-wrap: wrap;\r\n    justify-content: flex-start;\r\n    margin-top: 10px;\r\n  }\r\n\r\n  .backoffice-login {\r\n    width: 25%;\r\n    text-align: center;\r\n    margin: 10px 0;\r\n  }\r\n\r\n  .backoffice-login span {\r\n    font-size: 10px;\r\n  }\r\n\r\n  /* LOGO SIZE */\r\n  .logo img {\r\n    height: 50px;\r\n  }\r\n}\r\n\r\n@media (max-width: 992px) {\r\n\r\n  /* ===== HEADER CLEAN ===== */\r\n  .header {\r\n    padding: 10px 15px;\r\n  }\r\n\r\n  .top-heading {\r\n    font-size: 16px;\r\n    font-weight: 700;\r\n    text-align: left;\r\n    padding-right: 40px;\r\n  }\r\n\r\n  /* ===== BURGER ===== */\r\n  .mobile-toggle {\r\n    position: absolute;\r\n    right: 15px;\r\n    top: 14px;\r\n    font-size: 22px;\r\n    z-index: 1001;\r\n  }\r\n\r\n  /* ===== PANEL STYLE (KEY FIX) ===== */\r\n  .nav-content {\r\n    position: fixed;\r\n    top: 0;\r\n    right: -100%;\r\n    width: 85%;\r\n    height: 100vh;\r\n    background: #ffffff;\r\n    z-index: 1000;\r\n    padding: 20px 18px;\r\n    overflow-y: auto;\r\n    transition: right 0.3s ease;\r\n    box-shadow: -5px 0 20px rgba(0, 0, 0, 0.08);\r\n  }\r\n\r\n  .nav-content.open {\r\n    right: 0;\r\n  }\r\n\r\n  /* ===== REMOVE LOGO INSIDE PANEL ===== */\r\n  .nav-content .logo {\r\n    display: none;\r\n  }\r\n\r\n  /* ===== SECTION BLOCK ===== */\r\n  .mobile-section {\r\n    margin-top: 25px;\r\n  }\r\n\r\n  /* ===== SECTION TITLE ===== */\r\n  .section-title {\r\n    font-size: 12px;\r\n    font-weight: 700;\r\n    color: #8a98a8;\r\n    margin-bottom: 12px;\r\n    text-transform: uppercase;\r\n    letter-spacing: 1px;\r\n  }\r\n\r\n  /* ===== CONTENT LINKS ===== */\r\n  .mobile-links {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 14px;\r\n  }\r\n\r\n  .links,\r\n  .products-label {\r\n    font-size: 16px;\r\n    font-weight: 600;\r\n    color: #FF7900;\r\n  }\r\n\r\n  /* ===== DROPDOWN CLEAN ===== */\r\n  .products-menu {\r\n    position: relative;\r\n    display: none;\r\n    padding-left: 12px;\r\n    margin-top: 6px;\r\n    border-left: 2px solid #eee;\r\n  }\r\n\r\n  .products-dropdown.open .products-menu {\r\n    display: block;\r\n  }\r\n\r\n  .app-item span {\r\n    font-size: 13px;\r\n  }\r\n\r\n  /* ===== APPLICATION GRID (KEY FIX) ===== */\r\n  .applications-grid {\r\n    display: grid;\r\n    grid-template-columns: repeat(3, 1fr);\r\n    gap: 18px;\r\n    margin-top: 10px;\r\n  }\r\n\r\n  .backoffice-login {\r\n    text-align: center;\r\n    padding: 10px 5px;\r\n    border-radius: 10px;\r\n    transition: all 0.2s ease;\r\n  }\r\n\r\n  .backoffice-login:hover {\r\n    background: #f5f7fb;\r\n  }\r\n\r\n  .backoffice-login img {\r\n    max-width: 28px;\r\n    margin-bottom: 6px;\r\n    opacity: 0.8;\r\n  }\r\n\r\n  .backoffice-login span {\r\n    font-size: 11px;\r\n    font-weight: 600;\r\n    color: #5f6f7f;\r\n  }\r\n\r\n  /* LIGHT overlay instead of heavy fade */\r\n  .nav-overlay {\r\n    position: fixed;\r\n    inset: 0;\r\n    /* background: rgba(0, 0, 0, 0.15); */\r\n    /* \uD83D\uDD25 reduced from 0.25 */\r\n    z-index: 999;\r\n  }\r\n\r\n  .nav-content {\r\n    background: #ffffff;\r\n    /* pure white */\r\n    opacity: 1 !important;\r\n  }\r\n\r\n  /* improve contrast */\r\n  .links,\r\n  .products-label {\r\n    color: #FF7900;\r\n  }\r\n\r\n  .section-title {\r\n    color: #2f3e4e;\r\n  }\r\n}\r\n\r\n@media (max-width: 992px) {\r\n  .top-heading {\r\n    font-size: 14px;\r\n    /* reduced from 16\u201318 */\r\n    font-weight: 600;\r\n    line-height: 1.3;\r\n  }\r\n}\r\n\r\n/* HEADER TITLE NEXT TO LOGO */\r\n.header-title {\r\n  font-size: 14px;\r\n  font-weight: 600;\r\n  color: #5f6f7f;\r\n  line-height: 1.2;\r\n}\r\n\r\n/* MOBILE ONLY TUNING */\r\n@media (max-width: 992px) {\r\n\r\n  .header-title {\r\n    font-size: 13px;\r\n    padding-right: 10px;\r\n  }\r\n\r\n  .logo img {\r\n    height: 45px;\r\n  }\r\n\r\n  .header .row {\r\n    align-items: center;\r\n  }\r\n}\r\n\r\n@media (max-width: 992px) {\r\n\r\n  .backoffice-login {\r\n    padding: 4px 2px;\r\n    /* \uD83D\uDD25 reduce from 6\u201310px */\r\n  }\r\n\r\n  .backoffice-login img {\r\n    max-width: 22px;\r\n    margin-bottom: 3px;\r\n  }\r\n\r\n}"] }]
    }], function () { return [{ type: i1.BsModalService }, { type: i1.BsModalRef }]; }, null); })();
//# sourceMappingURL=site-header.component.js.map