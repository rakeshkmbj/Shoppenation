import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export class ModalService {
    constructor() {
        this.isModalOpen$ = new BehaviorSubject(false);
    }
    getModalState() {
        return this.isModalOpen$.asObservable();
    }
    openModal() {
        this.isModalOpen$.next(true);
    }
    closeModal() {
        this.isModalOpen$.next(false);
    }
}
ModalService.ɵfac = function ModalService_Factory(t) { return new (t || ModalService)(); };
ModalService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ModalService, factory: ModalService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ModalService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();
//# sourceMappingURL=modal.service.js.map