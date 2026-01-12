import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Paginator } from '../../_models/pagination'
import { TemplateRef } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ToastrService } from 'ngx-toastr';
import { RazorpayService } from 'src/app/razorpay.service';
import { PaymentStatusService } from 'src/app/services/payment-status.service';

@Component({
  selector: 'app-buy-services',
  templateUrl: './buy-services.component.html',
  styleUrls: ['./buy-services.component.css']
})
export class BuyServicesComponent implements OnInit {

  postsPaginator: Paginator<any>;

  modalRef?: BsModalRef;

  // Payment variables
  memberId = '';
  storeCode = '1100012100';
  selectedMembership = 'Premium';
  changeType = 'no';
  memberType = 'premium';
  servicePrice = 17899;
  discount = 10;
  gst = 18;
  validity = 1;

  servicesList = [
    { id: 1, name: 'MDR-Home-Store SKUs' },
    { id: 2, name: 'MDR-Dedicated-Store SKUs' },
    { id: 3, name: 'Image Text Posts' },
    { id: 4, name: '10Seconds Video-AD' },
    { id: 5, name: 'Turbo Push for Post' },
    { id: 6, name: 'Membership Re-Subscription' },
    { id: 8, name: 'View Profile Package' }
  ];

  // Cart variables
  cartId = 'CART987654';
  servId = 'SRV1001';
  membershipId = 'MEMB101';
  memberTypeName = 'Premium';
  perUnitCost = 17899;
  getlogindata: any;

  constructor(
    private modalService: BsModalService,
    private apiService: ApiService,
    private toastr: ToastrService,
    private razorpayService: RazorpayService,
    private paymentStatusService: PaymentStatusService
  ) {
    this.getlogindata = localStorage.getItem('logindata');
    this.getlogindata = JSON.parse(this.getlogindata);
    console.log("Login data: ", this.getlogindata)
  }

  paymentStatus: any;

  ngOnInit(): void {

    this.paymentStatusService.paymentStatus$.subscribe(async status => {
      if (status) {
        this.paymentStatus = status;

        if (status.success) {

          try {

            const payload = {
              cartId: this.openCart?.MDR_CONCT_SERVICE_CARTID,
              storecode: "1001070099",
              serviceId: this.openCart?.MDR_CONCT_CART_FOR_SERVICEID,
              confirmPayFlg: true
            }

            this.apiService.postCall(this.apiService.baseURL + '/MDR_Service_10and8_MakePayments', payload)
              .subscribe(data => {
                console.log(data);
                this.toastr.success(data.Message);
                this.modalRef?.hide();
              },
                (error) => {
                  console.log(error)
                  this.toastr.error(error, '', {
                    timeOut: 5000,
                  });
                });

          } catch (error: any) {
            console.log(error)
          }

        }

        console.log("Payment status: ", this.paymentStatus)

      }
    });

  }

  showDetails = false;

  selectedService: string = "";

  perUnitPrice = 5.0;
  quantity = 25;
  showPriceDetails = false;
  serviceDiscount: any;

  showPrice() {

    const payload = {
      Storecode: "1001070099",
      Serviceid: this.selectedService
    }

    console.log("For get: ", payload)

    this.apiService.postCall(this.apiService.baseURL + '/Get-Service-Discount-Price', payload)
      .subscribe(data => {
        console.log(data);
        this.serviceDiscount = data;

      },
        (error) => {
          this.toastr.error(error, '', {
            timeOut: 5000,
          });
        });

    this.showPriceDetails = true;
  }

  showPaymentDetails() {
    this.showDetails = true;
  }

  openCheckoutModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-lg' });
  }

  openCart: any;

  openCartModal(template) {

    const payload = {
      Storecode: "1001070099",
      Serviceid: this.selectedService
    }

    console.log("Payload: ", payload)

    this.apiService.postCall(this.apiService.baseURL + '/Display-OpenCart', payload)
      .subscribe(data => {
        console.log(data);

        if (data.Message === 'No Open cart Found for the Store') {
          this.toastr.error("No Open cart Found for the Store")
          return;
        }
        this.openCart = data;

        this.modalRef?.hide();
        this.openCheckoutModal(template);
      },
        (error) => {
          this.toastr.error(error.error.Message, '', {
            timeOut: 5000,
          });
        });
  }

  closeCheckout() {
    this.selectedService = "";
    this.showPriceDetails = false;
    this.modalRef?.hide()
  }

  openCheckout(template) {
    this.modalRef?.hide();
    this.openCheckoutModal(template);
  }

  closeCart(tempalte: any) {
    this.openCheckout(tempalte)
  }

  cartCheckout(template) {

    const payload = {
      Storecode: "1001070099",
      MemberPlanId: this.serviceDiscount?.MDR_STORE_MEMBRSHIP_PLAN_ID,
      PlanName: this.serviceDiscount?.MDR_MEMBERSHIP_PLAN_NAME,
      ServiceId: this.selectedService,
      ServicePrice: this.serviceDiscount?.ServicePrice,
      Quantity: this.quantity,
      DiscountPercent: this.serviceDiscount?.Discount_Percntg,
      GstPercent: this.serviceDiscount?.GST_Percntg,
      Currency: "INR"
    }

    console.log("Payload: ", payload)

    this.apiService.postCall(this.apiService.baseURL + '/MDRCheckout', payload)
      .subscribe(data => {
        console.log(data);
        this.openCart = data;

        this.modalRef?.hide();
        this.openCheckoutModal(template);
      },
        (error) => {

          console.log("Error: ", error)

          this.toastr.error(error.error.Message, '', {
            timeOut: 5000,
          });
        });
  }

  deleteCart() {

    const payload = {
      Storecode: "1001070099",
      ServiceId: this.openCart?.MDR_CONCT_CART_FOR_SERVICEID,
      CartId: this.openCart?.MDR_CONCT_SERVICE_CARTID
    }

    this.apiService.postCall(this.apiService.baseURL + '/Delete_MDR_ServiceCart', payload)
      .subscribe(data => {
        console.log(data);
        this.toastr.success(data.Message)

        this.modalRef?.hide();
        this.openCart = null;
        this.selectedService = ''

      },
        (error) => {
          console.log("Error: ", error)
          this.toastr.error(error.error.Message, '', {
            timeOut: 5000,
          });
        });

  }

  payment() {

    console.log("data for the cart: ", this.openCart);

    this.razorpayService.payWithRazorpay(this.openCart.Id, this.openCart.MDR_CONCT_CART_TOTAL_TO_PAY_AMT_IN_PAISA);
  }

}