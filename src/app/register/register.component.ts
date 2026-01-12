import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { RegisterService } from '../services/register.service';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
//import { invalid } from '@angular/compiler/src/render3/view/util';
declare var $:any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  baseUrl:string = "http://eguarddocshieldapi/carryr/b2b";
  registerForm: FormGroup;
  showotpDiv: boolean;
  disabled: boolean = false;
  otpNotValid: boolean;
  showGstInput: boolean;
  mobileVerifyMessage: boolean;
  gstVerifyMessage: boolean;
  submitted = false;
  httpdata: any;
  users: any;
  a: any;
  SubscriptionPlan: string;
  SubscriptionPlans: any;
  Paymentfrequency: any;
  AnnualPlancost: any;
  PaymentFrequencyCost: any;
  Subtotal: any;
  GST: any;
  Total: any;
  FirstPaymentPayableAmount: any;
  showOSPlan: boolean;
  showStep3: boolean;
  showRegister: boolean = true;
  submittedgst: boolean;
  planName: any;
  step1: boolean = true;
  validMobile: boolean;
  inputText: string;
  cardNumber: any;
  cvv: any;
  mobileNo: any;
  constructor(private http: HttpClient, private modalService: NgbModal, private registerService:RegisterService, private toastr: ToastrService) {
    this.registerForm = new FormGroup({
      MobileNo: new FormControl('', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      GSTNO: new FormControl('', [Validators.required, Validators.pattern("^([0][1-9]|[1-2][0-9]|[3][0-7])([a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}[1-9a-zA-Z]{1}[zZ]{1}[0-9a-zA-Z]{1})+$")]),
      ConfirmationCode: new FormControl('', []),
      gstnchecked: new FormControl('Yes'),
      USR_EMAIL_ID: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$")]),
      SUPR_SELLER_SERVICE_ID: new FormControl(''),
      USER_SELCTD_SUBSCRIBER_PLAN_ID: new FormControl('', [Validators.required]),
      USR_SELECTD_PAYMNT_FREQUENCY_ID: new FormControl('', [Validators.required]),
      CARRYR_MART_COUPN_NUMBR: new FormControl('', []),
      CARRYR_MART_FREEBIE_CRDT_CARD_NO: new FormControl('', Validators.required),
      CARRYR_MART_FREEBIE_CRDT_CARD_CVV: new FormControl('', Validators.required),
    });

  }
  
  PaymentFrequancy = [{"id": 1, "plan":"Monthly"},
                      {"id": 2,"plan":"Quarterly"},
                      {"id": 3,"plan":"Yearly"},
                    ];

  ngOnInit() {
    this.showGstInput = true;
    this.getSubscriptionPlans();
  }

  changeSubsPlan(e) {
    console.log(e.target.value);

  }

  changePaymentFrequancy(e) {
    console.log(e.target.value);
  }

  showGSTField(e) {
    if(e.target.value == "Yes"){
     this.showGstInput = true;
    }
    else{
     this.showGstInput = false;
    }
  
 }

  get f(){
    return this.registerForm.controls;
  }


 verifyGST(){
  this.submittedgst = true;

  if (this.registerForm.value.MobileNo.length != 10 || this.registerForm.value.GSTNO.length != 15) {
    alert('false');
    return;
}

    let gstData = {
      MobileNo: this.registerForm.value.MobileNo,
      GSTNO: this.registerForm.value.GSTNO,
     
    }
  this.registerService.postCallHttp(this.baseUrl + '/GSTVerification', gstData).subscribe(data => { 
    this.showotpDiv = true;
   // this.toastr.success(data);

    this.toastr.success((data));
 }
 ,
     (err : Response) => {
       alert('error');
      this.toastr.error((err['error']['Message']));
      this.showotpDiv = false;
      
    }
    ); 
    
 }

 getSubscriptionPlans() {  
   this.registerService.getCall(this.baseUrl +'/GetServiceSubscriptionPlans').subscribe((data: any) => {
    console.log(data);
   this.SubscriptionPlans = data;
  // this.planName = data.Value;

  });  
  
} 

getOTPVerify() {  
   const mobileNumber = this.registerForm.value.MobileNo;
    const ConfirmationCode = this.registerForm.value.ConfirmationCode;
    this.registerService.getCall(this.baseUrl +'/VerifyMobile/' + mobileNumber + "/" + ConfirmationCode).subscribe((data: {}) => {
     console.log(data);
     if(data == "false") {
       this.otpNotValid = true;
     }
     else{
       this.otpNotValid = false;
     }
   });  
   
 } 


PreActivation(){
  this.submittedgst = true;
  this.submitted = true;
if(this.submittedgst == true && this.submitted == true) {
  let date = new Date();
  let dateFormat = date.toISOString();
  let preActivationData = {
    USR_PRIMRY_MOBL_NUMBR: this.registerForm.value.MobileNo,
    PRIMRY_MOBL_NUMBR_VERYFYD_FLG: true,
    USR_GSTIN_NUMBR: this.registerForm.value.GSTNO,
    USR_GSTIN_NO_VERYFYD_FLG: true,
    USR_EMAIL_ID: this.registerForm.value.USR_EMAIL_ID,
    SUPR_SELLER_SERVICE_ID: 1,
    USER_SELCTD_SUBSCRIBER_PLAN_ID: + this.registerForm.value.USER_SELCTD_SUBSCRIBER_PLAN_ID,
    USR_SELECTD_PAYMNT_FREQUENCY_ID: + this.registerForm.value.USR_SELECTD_PAYMNT_FREQUENCY_ID,
    USR_ACCEPTANCE_TERMS_CONDITION_READ_AGREED_FLG: true,
    CARRYR_MART_30_DAYS_CREDT_FLG: true,
    USR_ACCEPTANCE_TERMS_CONDITION_READ_AGREED_DATETIME: dateFormat,
    ModifyBy: ''
  }

 
  this.registerService.postCallHttp(this.baseUrl + '/PreActivation', preActivationData).subscribe(data => { 
   this.showOSPlan = true;
   this.showRegister = false;
 let summaryDetails = data;
 this.SubscriptionPlan = summaryDetails.CARRYR_MART_B2B_SUPR_SELLER_SERVICE_NAME;
 this.Paymentfrequency = summaryDetails.CARRYR_MART_FREQUENCY_NAME;
 this.AnnualPlancost   = summaryDetails.CARRYR_MART_B2B_ANNUAL_SUBSCRIPTN_PLN_COST;
 this.PaymentFrequencyCost  = summaryDetails.CARRYR_MART_B2B_PAYMNT_FRQUENCY_LOADING_COST;
 this.Subtotal  = summaryDetails.CARRYR_MART_B2B_SUB_TOTAL_COST;
 this.GST  = summaryDetails.CARRYR_MART_B2B_SUPR_SELLER_GST_SLAB;
 this.Total = summaryDetails.CARRYR_MART_B2B_TOTAL_COST;
 this.FirstPaymentPayableAmount = summaryDetails.CARRYR_MART_B2B_PERIODIC_BILLING_CYCLE_PAYABLE_COST
 console.log(summaryDetails);
  this.step1 = false;
 },

 error => {
  console.log(error);
 // this.toastr.error(error['Message']);
  this.showotpDiv = false;
  if(error == "Bad Request") {
    this.toastr.error('Please pass all required data');
  }
});
   
}

else {
  return
}
 
 
}
 
getCardAndCVV(event){
  const mobilenumber = event.target.value;
  let mobileLength = mobilenumber.length;
  if(mobileLength == 10) {
    this.registerService.getCall(this.baseUrl +'/GetCouponCreditCard/' + mobilenumber).subscribe((data: any) => {
      console.log(data);
      let txt = 'No Record Found for Your Mobile Number . Please Contact Us at our Account Support Number.';
      if(data == txt) {
      this.toastr.error((data));
      this.validMobile = false;
      }
      else{
        this.validMobile = true;
        let dataList = data[0];
        this.cardNumber = dataList.CARRYR_MART_FREEBIE_CRDT_CARD_NO;
        this.cvv = dataList.CARRYR_MART_FREEBIE_CRDT_CARD_CVV;
      }
    }
    ,
     (err : Response) => {
       alert('error');
      this.toastr.error((err['error']['Message']));
      
    }
    ); 
     
  }
 
 }

 verifyCouponNumber(couponNo){
  const CouponNumber = couponNo.value;
  let CouponLength = CouponNumber.length;
  if(CouponLength == 7) {
    this.registerService.getCall(this.baseUrl +'/CouponNumberValidation/' + CouponNumber).subscribe((data: any) => {
      console.log(data);
      let txt = "Please Use Valid Coupon Number";
      if(data == txt) {
      this.toastr.error((data));
      }
      else{
        this.toastr.success((data));
        $('#myModal').modal('show');
      }
    }
    ,
     (err : Response) => {
       alert('error');
      this.toastr.error((err['error']['Message']));
      
    }
    ); 
     
  }
 
 }

 
 getOTPforCoupon(otpforCoupon){
  this.mobileNo = this.registerForm.value.MobileNo;
  let confirmationCode = otpforCoupon.value;
  this.registerService.getCall(this.baseUrl +'/VerifyOTPForCouponNumber/' + this.mobileNo + "/" + confirmationCode).subscribe((data: any) => {
    console.log(data);
    
  }
  ,
   (err : Response) => {
     alert('error');
    this.toastr.error((err['error']['Message']));
    
  }
  ); 
   
}

next(){
  this.showOSPlan = false;
  this.showStep3 = true;
}

makePayments (){
 alert('dd');
  let date = new Date();
  let dateFormat = date.toISOString();
  let paymentData = {
    USR_PRIMRY_MOBL_NUMBR: this.registerForm.value.MobileNo,
    CARRYR_MART_B2B_PERIODIC_BILLING_CYCLE_PAYABLE_COST: this.FirstPaymentPayableAmount,
    CARRYR_MART_POS_ID: 1,
    CARRYR_MART_COUPN_NUMBR: this.registerForm.value.CARRYR_MART_COUPN_NUMBR,
    CARRYR_MART_FREEBIE_CRDT_CARD_NO: this.registerForm.value.CARRYR_MART_FREEBIE_CRDT_CARD_NO,
    CARRYR_MART_FREEBIE_CRDT_CARD_CVV: this.registerForm.value.CARRYR_MART_FREEBIE_CRDT_CARD_CVV,
    CARRYR_MART_PAYMNT_TYPE: 2 ,
    PAYMNT_DONE_DATE_TIME: dateFormat
  }
//  console.log(paymentData);
  this.registerService.postCallHttp(this.baseUrl + '/MakePayment', paymentData).subscribe(data => { 
 console.log(data);
 
 }
 ,
     (err : Response) => {
       alert('error');
      this.toastr.error((err['error']['Message']));
      
    }
    ); 
 }

 

}