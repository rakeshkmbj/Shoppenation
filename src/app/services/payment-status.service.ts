import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentStatusService {
  private paymentStatusSubject = new Subject<any>();
  paymentStatus$ = this.paymentStatusSubject.asObservable(); // Observable for other components

  // Function to update payment status
  updatePaymentStatus(status: any) {
    this.paymentStatusSubject.next(status);
  }
}