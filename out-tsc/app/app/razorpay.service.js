import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import * as i0 from "@angular/core";
import * as i1 from "./services/payment-status.service";
export class RazorpayService {
    constructor(paymentStatusService) {
        this.paymentStatusService = paymentStatusService;
    }
    payWithRazorpay(orderId, amount, keyFlg, name, email, contact) {
        const razorpayKey = keyFlg ? environment.razorpay.liveKey : environment.razorpay.testKey;
        const options = {
            key: razorpayKey,
            amount: amount * 100,
            currency: "INR",
            name: "Shoppenation",
            description: "Test Transaction",
            image: "https://example.com/your_logo",
            order_id: orderId,
            handler: (response) => {
                // Call function on successful payment
                this.onPaymentSuccess(response);
                console.log(response);
            },
            prefill: {
                name: name,
                email: email,
                contact: contact
            },
            notes: {
                address: "AD Connect Corporate Office"
            },
            theme: {
                color: "#63040D"
            }
        };
        const rzp = new Razorpay(options);
        rzp.on('payment.failed', (response) => {
            // Call function on failed payment
            this.onPaymentFailure(response);
        });
        rzp.open();
    }
    onPaymentSuccess(response) {
        // console.log("Payment Success", response);
        this.paymentStatusService.updatePaymentStatus({
            success: true,
            paymentId: response.razorpay_payment_id,
            orderId: response.razorpay_order_id,
            paymentSignature: response.razorpay_signature
        });
    }
    onPaymentFailure(response) {
        // console.error("Payment Failure", response);
        this.paymentStatusService.updatePaymentStatus({
            success: false,
            error: response.error.description
        });
    }
}
RazorpayService.ɵfac = function RazorpayService_Factory(t) { return new (t || RazorpayService)(i0.ɵɵinject(i1.PaymentStatusService)); };
RazorpayService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: RazorpayService, factory: RazorpayService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RazorpayService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.PaymentStatusService }]; }, null); })();
//# sourceMappingURL=razorpay.service.js.map