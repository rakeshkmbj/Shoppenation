import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PosMainComponent } from '../pos-main/pos-main.component';
import * as i0 from "@angular/core";
import * as i1 from "../../services/modal.service";
import * as i2 from "@angular/common";
function PosModalComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵlistener("click", function PosModalComponent_div_0_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r2); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onBackdropClick()); });
    i0.ɵɵelementStart(1, "div", 2);
    i0.ɵɵlistener("click", function PosModalComponent_div_0_Template_div_click_1_listener($event) { return $event.stopPropagation(); });
    i0.ɵɵelementStart(2, "div", 3)(3, "h2");
    i0.ɵɵtext(4, "Point of Sale");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "button", 4);
    i0.ɵɵlistener("click", function PosModalComponent_div_0_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r2); const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.closeModal()); });
    i0.ɵɵelement(6, "i", 5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "div", 6);
    i0.ɵɵelement(8, "app-pos-main");
    i0.ɵɵelementEnd()()();
} }
export class PosModalComponent {
    constructor(modalService) {
        this.modalService = modalService;
        this.isOpen$ = this.modalService.getModalState();
    }
    ngOnInit() {
    }
    closeModal() {
        this.modalService.closeModal();
    }
    onBackdropClick() {
        this.closeModal();
    }
}
PosModalComponent.ɵfac = function PosModalComponent_Factory(t) { return new (t || PosModalComponent)(i0.ɵɵdirectiveInject(i1.ModalService)); };
PosModalComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PosModalComponent, selectors: [["app-pos-modal"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 2, vars: 3, consts: [["class", "pos-modal-overlay", 3, "click", 4, "ngIf"], [1, "pos-modal-overlay", 3, "click"], [1, "pos-modal-container", 3, "click"], [1, "pos-modal-header"], ["title", "Close POS", 1, "close-btn", 3, "click"], [1, "fas", "fa-times"], [1, "pos-modal-body"]], template: function PosModalComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, PosModalComponent_div_0_Template, 9, 0, "div", 0);
        i0.ɵɵpipe(1, "async");
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(1, 1, ctx.isOpen$));
    } }, dependencies: [CommonModule, i2.NgIf, i2.AsyncPipe, PosMainComponent], styles: [".pos-modal-overlay[_ngcontent-%COMP%] {\n      position: fixed;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      background-color: rgba(0, 0, 0, 0.5);\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      z-index: 9999;\n      animation: fadeIn 0.3s ease-in-out;\n    }\n\n    @keyframes fadeIn {\n      from {\n        opacity: 0;\n      }\n      to {\n        opacity: 1;\n      }\n    }\n\n    .pos-modal-container[_ngcontent-%COMP%] {\n      background: white;\n      border-radius: 8px;\n      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);\n      width: 95%;\n      height: 95vh;\n      max-width: 1600px;\n      display: flex;\n      flex-direction: column;\n      overflow: hidden;\n      animation: slideUp 0.3s ease-out;\n    }\n\n    @keyframes slideUp {\n      from {\n        transform: translateY(50px);\n        opacity: 0;\n      }\n      to {\n        transform: translateY(0);\n        opacity: 1;\n      }\n    }\n\n    .pos-modal-header[_ngcontent-%COMP%] {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      padding: 16px 24px;\n      border-bottom: 1px solid #e0e0e0;\n      background: linear-gradient(135deg, #ff6b35 0%, #ff8c5a 100%);\n      color: white;\n    }\n\n    .pos-modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n      margin: 0;\n      font-size: 20px;\n      font-weight: 600;\n    }\n\n    .close-btn[_ngcontent-%COMP%] {\n      background: rgba(255, 255, 255, 0.2);\n      border: none;\n      color: white;\n      font-size: 24px;\n      cursor: pointer;\n      padding: 8px 12px;\n      border-radius: 4px;\n      transition: background 0.2s ease;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n    }\n\n    .close-btn[_ngcontent-%COMP%]:hover {\n      background: rgba(255, 255, 255, 0.3);\n    }\n\n    .pos-modal-body[_ngcontent-%COMP%] {\n      flex: 1;\n      overflow: hidden;\n      display: flex;\n      flex-direction: column;\n    }\n\n    \n    @media (max-width: 1024px) {\n      .pos-modal-container[_ngcontent-%COMP%] {\n        width: 98%;\n        height: 98vh;\n      }\n    }\n\n    @media (max-width: 768px) {\n      .pos-modal-container[_ngcontent-%COMP%] {\n        width: 100%;\n        height: 100vh;\n        border-radius: 0;\n      }\n\n      .pos-modal-header[_ngcontent-%COMP%] {\n        padding: 12px 16px;\n      }\n\n      .pos-modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n        font-size: 18px;\n      }\n    }"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PosModalComponent, [{
        type: Component,
        args: [{ selector: 'app-pos-modal', standalone: true, imports: [CommonModule, PosMainComponent], template: `
    <div class="pos-modal-overlay" *ngIf="isOpen$ | async" (click)="onBackdropClick()">
      <div class="pos-modal-container" (click)="$event.stopPropagation()">
        <!-- Modal Header -->
        <div class="pos-modal-header">
          <h2>Point of Sale</h2>
          <button class="close-btn" (click)="closeModal()" title="Close POS">
            <i class="fas fa-times"></i>
          </button>
        </div>

        <!-- Modal Body -->
        <div class="pos-modal-body">
          <app-pos-main></app-pos-main>
        </div>
      </div>
    </div>
  `, styles: ["\n    .pos-modal-overlay {\n      position: fixed;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      background-color: rgba(0, 0, 0, 0.5);\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      z-index: 9999;\n      animation: fadeIn 0.3s ease-in-out;\n    }\n\n    @keyframes fadeIn {\n      from {\n        opacity: 0;\n      }\n      to {\n        opacity: 1;\n      }\n    }\n\n    .pos-modal-container {\n      background: white;\n      border-radius: 8px;\n      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);\n      width: 95%;\n      height: 95vh;\n      max-width: 1600px;\n      display: flex;\n      flex-direction: column;\n      overflow: hidden;\n      animation: slideUp 0.3s ease-out;\n    }\n\n    @keyframes slideUp {\n      from {\n        transform: translateY(50px);\n        opacity: 0;\n      }\n      to {\n        transform: translateY(0);\n        opacity: 1;\n      }\n    }\n\n    .pos-modal-header {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      padding: 16px 24px;\n      border-bottom: 1px solid #e0e0e0;\n      background: linear-gradient(135deg, #ff6b35 0%, #ff8c5a 100%);\n      color: white;\n    }\n\n    .pos-modal-header h2 {\n      margin: 0;\n      font-size: 20px;\n      font-weight: 600;\n    }\n\n    .close-btn {\n      background: rgba(255, 255, 255, 0.2);\n      border: none;\n      color: white;\n      font-size: 24px;\n      cursor: pointer;\n      padding: 8px 12px;\n      border-radius: 4px;\n      transition: background 0.2s ease;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n    }\n\n    .close-btn:hover {\n      background: rgba(255, 255, 255, 0.3);\n    }\n\n    .pos-modal-body {\n      flex: 1;\n      overflow: hidden;\n      display: flex;\n      flex-direction: column;\n    }\n\n    /* Responsive design */\n    @media (max-width: 1024px) {\n      .pos-modal-container {\n        width: 98%;\n        height: 98vh;\n      }\n    }\n\n    @media (max-width: 768px) {\n      .pos-modal-container {\n        width: 100%;\n        height: 100vh;\n        border-radius: 0;\n      }\n\n      .pos-modal-header {\n        padding: 12px 16px;\n      }\n\n      .pos-modal-header h2 {\n        font-size: 18px;\n      }\n    }\n  "] }]
    }], function () { return [{ type: i1.ModalService }]; }, null); })();
//# sourceMappingURL=pos-modal.component.js.map