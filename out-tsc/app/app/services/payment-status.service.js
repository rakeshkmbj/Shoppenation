import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
export class PaymentStatusService {
    constructor() {
        this.paymentStatusSubject = new Subject();
        this.paymentStatus$ = this.paymentStatusSubject.asObservable(); // Observable for other components
    }
    // Function to update payment status
    updatePaymentStatus(status) {
        this.paymentStatusSubject.next(status);
    }
}
PaymentStatusService.ɵfac = function PaymentStatusService_Factory(t) { return new (t || PaymentStatusService)(); };
PaymentStatusService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: PaymentStatusService, factory: PaymentStatusService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PaymentStatusService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();
//# sourceMappingURL=payment-status.service.js.map