import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormGroup, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';
import { NgxSpinnerService } from "ngx-spinner";
import { NavigationExtras, Router } from '@angular/router';
import { RazorpayService } from 'src/app/razorpay.service';
import { PaymentStatusService } from 'src/app/services/payment-status.service';
import { FormsModule } from '@angular/forms';
import { Subscription, Subject } from 'rxjs';
import { takeUntil, filter } from 'rxjs/operators';

@Component({
  selector: 'app-refill-my-card',
  templateUrl: './refill-my-card.component.html',
  styleUrls: ['./refill-my-card.component.scss']
})
export class RefillMyCardComponent implements OnInit {

  paymentSub!: Subscription;
  modalRef?: BsModalRef;
  getlogindata: any;
  subaccountid: any;
  storeid: any;

  constructor(
    private apiService: ApiService,
    private modalService: BsModalService,
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private razorpayService: RazorpayService,
    private paymentStatusService: PaymentStatusService,
  ) {
    this.getlogindata = localStorage.getItem('logindata');
    this.getlogindata = JSON.parse(this.getlogindata);
    this.subaccountid = this.apiService.requiredLoginData.subaccountid;
    this.storeid = this.apiService.requiredLoginData.storeid;
  }

  refillAmount = 200;
  gstPercent = 5;
  gstAmount = 0;
  totalAmount = 0;

  private destroy$ = new Subject<void>();

  ngOnInit() {
    this.calculateAmount();
    this.paymentStatusService.paymentStatus$
      .pipe(
        takeUntil(this.destroy$),
        filter(status => status?.success)
      )
      .subscribe(status => {

        if (status) {
          if (status.success) {
            try {
              const payload = {
                cartId: this.openCart?.MDR_CONCT_SERVICE_CARTID,
                storecode: this.getlogindata.ADC_VEND_CARDHOLDR_REGID,
                serviceId: this.openCart?.MDR_CONCT_CART_FOR_SERVICEID,
                confirmPayFlg: true,
                rzrpay_Pamnt_Id: status.paymentId,
                rzrpay_Signature: status.paymentSignature,
                rzrpay_Live_Flg: this.openCart.MDR_PG_LIVE_KEY_FLG
              }

              console.log("payload: ", payload)

              this.apiService.postCall(this.apiService.baseURL + '/MDR_Service_10and8_MakePayments', payload)
                .subscribe(data => {
                  console.log(data);
                  this.toastr.success(data.Message, '', {
                    timeOut: 5000,
                  });
                  this.modalRef?.hide();
                },
                  (error) => {
                    console.log(error)
                    this.toastr.error(error, '', {
                      timeOut: 5000,
                    });
                  });

              this.paymentStatusService.updatePaymentStatus(null);

            } catch (error: any) {
              console.log(error)
            }
          }

          console.log('Payment status: ', status)
        }

      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  calculateAmount() {
    this.gstAmount = +(this.refillAmount * this.gstPercent / 100).toFixed(2);
    this.totalAmount = +(this.refillAmount + this.gstAmount).toFixed(2);
  }

  payAmount() {
    console.log('Paying:', this.totalAmount);
    if (!this.openCart) {
      this.toastr.error('No checkout found. Please Add to Cart first.');
      return;
    }

    // this.openCart;

    this.razorpayService.payWithRazorpay(
      this.openCart.Id,
      this.openCart.MDR_CONCT_CART_TOTAL_TO_PAY_AMT_IN_PAISA,
      this.openCart.MDR_PG_LIVE_KEY_FLG,
      this.openCart.PlateformName,
      this.openCart.email,
      this.openCart.Contact);
  }

  closeCheckout() {
    this.modalRef?.hide();
  }

  openCart: any;

  addToCart(template: any) {

    const payload = {
      Storecode: this.getlogindata.ADC_VEND_CARDHOLDR_REGID,
      MemberPlanId: "999",
      PlanName: 'Vending Plan',
      ServiceId: '21',
      ServicePrice: this.refillAmount,
      Quantity: 1,
      DiscountPercent: 0,
      GstPercent: this.gstPercent,
      Currency: 'INR',
      Login_Subacctid: this.subaccountid,
      Login_Storeid: this.storeid,
      Persnl_Walt_Flg: this.getlogindata.RETAIL_D2C_ACCT_INTRNL_CUSTMR_ROLE_ALCTD === '37' ? true : false,
      Corp_Walt_Flg: false,
      Cash_Flg: false,
      Digital_Paymnt_Flg: true
    }

    console.log("payload: ", payload)

    this.apiService.postCall(this.apiService.baseURL + '/MDRCheckout', payload)
      .subscribe(data => {
        console.log(data);
        this.openCart = data;

        this.modalRef = this.modalService.show(template, { class: 'modal-md' });
      },
        (error) => {
          console.log("error: ", error);
          this.toastr.error(error.error || error, '', {
            timeOut: 5000,
          });
        });
  }

  diaplyCart(template: any) {

    const payload = {
      "Storecode": this.getlogindata.ADC_VEND_CARDHOLDR_REGID,
      "Serviceid": "21"
    }

    this.apiService.postCall(this.apiService.baseURL + '/Display-OpenCart', payload)
      .subscribe(data => {
        console.log(data);

        if (data.Message === "No Open cart Found for the Store") {
          this.toastr.error(data.Message);
        } else {
          this.openCart = data;
          this.modalRef = this.modalService.show(template, { class: 'modal-md' });
        }

      },
        (error) => {
          this.toastr.error(error.error?.Message || error, '', {
            timeOut: 5000,
          });
        });

  }


  deleteCart() {
    const payload = {
      Storecode: this.getlogindata.ADC_VEND_CARDHOLDR_REGID,
      ServiceId: this.openCart?.MDR_CONCT_CART_FOR_SERVICEID,
      CartId: this.openCart?.MDR_CONCT_SERVICE_CARTID
    }

    this.apiService.postCall(this.apiService.baseURL + '/Delete_MDR_ServiceCart', payload)
      .subscribe(data => {
        console.log(data);
        this.toastr.success(data.Message)

        this.modalRef?.hide();
        this.openCart = null;
      },
        (error) => {
          console.log('Error: ', error)
          this.toastr.error(error.error?.Message || error, '', {
            timeOut: 5000,
          });
        });
  }

}
