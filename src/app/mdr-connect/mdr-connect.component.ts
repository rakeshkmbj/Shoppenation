import { NgbModalConfig, NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { RegisterComponent } from '../register/register.component';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { RegisterService } from '../services/register.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { DataService } from '../services/dataservice';
import { CommonService } from '../services/common.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { NgxSpinnerService } from "ngx-bootstrap-spinner";
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { applyStyles } from '@popperjs/core';
import { TemplateRef } from '@angular/core';
import { LocationService } from '../services/getname';
import { CommonModule } from '@angular/common';
import { RazorpayService } from '../razorpay.service';
import { PaymentStatusService } from '../services/payment-status.service';

interface MdrRegistrationRequest {
  MDRS_CategoryId: number;
  Seller_Flg: boolean;
  Buyer_Flg: boolean;
  Seller_Buyer_Flg: boolean;
  DomainId: number;
  SKU_Pack_Count: number;
  Org_Name: string;
  Org_Type: string;
  GSTIN_Numbr: string;
  Reg_Email: string;
  Reg_Mobile_Numbr: string;
  Country: string;
  State: string;
  City: string;
  PIN: string;
  Address: string;
  Landmark: string;
  First_Name: string;
  Last_Name: string;
  MDR_REGISTRD_ON_PRODUCT_FLG: boolean;
  MDR_REGISTRD_ON_SERVICE_FLG: boolean;
  MDR_REGSITRD_MEMBERSHIP_PLANID: string;
  MDR_REGISTRD_PINCODE: string;
  MDR_STORE_MAIN_PROFILE_CREATED_FLG: boolean;
  MDR_BO_STORE_MADE_AND_ACTIVE_FLG: boolean;
}

@Component({
  selector: 'app-mdr-connect',
  templateUrl: './mdr-connect.component.html',
  styleUrls: ['./mdr-connect.component.css'],
})
export class MdrConnectComponent implements OnInit {
  modalRef: BsModalRef;
  category: any;
  // skusValue: number = 10;
  minValue: number = 10;
  maxValue: number = 500;
  step: number = 5;
  hasGstin: boolean = true;
  countryList: {};
  countryID: any;
  countryName: any;
  searchCenterForm: any;
  cityList: {};
  stateList: {};
  stateID: any;
  stateName: any;
  cityName: any;
  Form: FormGroup;
  zipList: {};
  cityID: any;
  pinID: any;
  showTooltip = false;
  refferedBy = "";
  childModalRef: any;

  MdrReg: MdrRegistrationRequest = {
    MDRS_CategoryId: 0,
    Seller_Flg: false,
    Buyer_Flg: false,
    Seller_Buyer_Flg: false,
    DomainId: 0,
    SKU_Pack_Count: 0,
    Org_Name: '',
    Org_Type: '',
    GSTIN_Numbr: 'temp',
    Reg_Email: '',
    Reg_Mobile_Numbr: '',
    Country: '',
    State: '',
    City: '',
    PIN: '',
    Address: '',
    Landmark: '',
    First_Name: '',
    Last_Name: '',
    MDR_REGISTRD_ON_PRODUCT_FLG: false,
    MDR_REGISTRD_ON_SERVICE_FLG: false,
    MDR_REGSITRD_MEMBERSHIP_PLANID: '',
    MDR_REGISTRD_PINCODE: '',
    MDR_STORE_MAIN_PROFILE_CREATED_FLG: false,
    MDR_BO_STORE_MADE_AND_ACTIVE_FLG: false
  };

  getlogindata: any;
  showmore: boolean = false;
  showpayment = false;
  trackForm: FormGroup;
  trackResponse: any;

  @Output() countryEvent = new EventEmitter<any>();
  @Output() stateEvent = new EventEmitter<any>();
  @Output() cityEvent = new EventEmitter<any>();
  @Output() pincodeEvent = new EventEmitter<any>();
  baseUrl: string = "http://www.shripatigroup.com/alcoolretail/carryr/retail";
  MdrRegistration: FormGroup;
  constructor(
    private bsModalRef: BsModalRef,
    private apiService: ApiService,
    private locationNames: LocationService,
    private toastr: ToastrService,
    private fb: FormBuilder,
    private modalService: BsModalService,
    private razorpayService: RazorpayService,
    private paymentStatusService: PaymentStatusService
  ) {

    this.trackForm = this.fb.group({
      regId: ['', Validators.required]
    });

    this.getlogindata = localStorage.getItem('logindata');
    this.getlogindata = JSON.parse(this.getlogindata);
    console.log("Login data: ", this.getlogindata)

    this.MdrRegistration = new FormGroup({
      entityType: new FormControl('', Validators.required),
      registeringAs: new FormControl('', Validators.required),
      skusValue: new FormControl({ value: 0, disabled: true }, [Validators.pattern("^[0-9]+$")]),
      industry: new FormControl('', Validators.required),
      companyType: new FormControl('', Validators.required),
      gstin: new FormControl(
      { value: '', disabled: false },
      [
        Validators.required,
        Validators.maxLength(30)
      ]
      ),
      organizationName: new FormControl('', Validators.required),
      promoterFirstName: new FormControl('', Validators.required),
      promoterLastName: new FormControl('', Validators.required),
      Country: new FormControl('', Validators.required),
      State: new FormControl('', Validators.required),
      City: new FormControl('', Validators.required),
      PinCode: new FormControl('', [Validators.required]),
      mobile: new FormControl('', [
        Validators.required,
        Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      address: new FormControl('', Validators.required),
      landmark: new FormControl('', Validators.required),
      plan: new FormControl('', Validators.required),
      termsCheck: new FormControl(false, Validators.requiredTrue)
    });

  }

  paymentStatus: any;
  showPaymentStatusPopup: any;
  showPaymentStatusTypePopup: any;

  ngOnInit(): void {
    this.getCountry();

    this.paymentStatusService.paymentStatus$.subscribe(async status => {
      if (status) {
        this.paymentStatus = status;

        if (status.success) {

          try {

            const payload = {
              Cartid: this.cartDetials?.MDR_CONCT_SERVICE_CARTID,
              Confirnflg: 1,
              RazrPay_ordrerid: this.cartDetials?.Id
            }

            console.log("payload: ", payload)

            this.apiService.postCall(this.apiService.baseURL + '/Service7-MakePayments', payload)
              .subscribe(data => {
                console.log(data);
                this.toastr.success(data);
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

  more() {
    this.showmore = !this.showmore;
  }

  onSubmitTrack() {
    if (this.trackForm.valid) {
      const regId = this.trackForm.value.regId;

      const payload = {
        Mobile: regId
      }

      this.apiService.postCall(this.apiService.baseURL + '/TrackFormMDR', payload)
        .subscribe(data => {
          console.log(data);

          this.trackResponse = data;

        },
          (error) => {
            console.log("Error: ", error)

            this.toastr.error(error.error, '', {
              timeOut: 5000,
            });
          });
    }
  }


  RegisterMyOrg() {

    const formValues = this.MdrRegistration.getRawValue();

    const payload = {
      MDRS_CategoryId: formValues.entityType,
      Seller_Flg: this.MdrReg.Seller_Flg,
      Buyer_Flg: this.MdrReg.Buyer_Flg,
      Seller_Buyer_Flg: this.MdrReg.Seller_Buyer_Flg,
      DomainId: formValues.industry,
      SKU_Pack_Count: formValues.skusValue && formValues.gstin !== 0 ? formValues.skusValue : 1,
      Org_Name: formValues.organizationName,
      Org_Type: formValues.companyType,
      GSTIN_Numbr: formValues.gstin && formValues.gstin.trim() !== "" ? formValues.gstin : "ABHPH7777RHCZ0",
      Reg_Email: formValues.email,
      Reg_Mobile_Numbr: formValues.mobile,
      Country: formValues.Country,
      State: formValues.State,
      City: formValues.City,
      PIN: formValues.PinCode,
      Address: formValues.address,
      Landmark: formValues.landmark,
      First_Name: formValues.promoterFirstName,
      Last_Name: formValues.promoterLastName,
      MDR_REGISTRD_ON_PRODUCT_FLG: this.MdrReg.MDR_REGISTRD_ON_PRODUCT_FLG,
      MDR_REGISTRD_ON_SERVICE_FLG: this.MdrReg.MDR_REGISTRD_ON_SERVICE_FLG,
      MDR_REGSITRD_MEMBERSHIP_PLANID: formValues.plan,
      MDR_REGISTRD_PINCODE: formValues.PinCode,
      MDR_STORE_MAIN_PROFILE_CREATED_FLG: this.MdrReg.MDR_STORE_MAIN_PROFILE_CREATED_FLG,
      MDR_BO_STORE_MADE_AND_ACTIVE_FLG: this.MdrReg.MDR_BO_STORE_MADE_AND_ACTIVE_FLG
    };

    console.log("Payload: ", payload);

    this.apiService.postCall(this.apiService.baseURL + '/RegisterMDRForm', payload)
      .subscribe(data => {
        console.log(data);

        this.toastr.success(data)
      },
        (error) => {
          this.toastr.error(error, '', {
            timeOut: 5000,
          });
        });

    this.close()
  }

  close() {
    this.bsModalRef.hide();
  }

  selectPlan(event: Event): void {
    const selectedValue = (event.target as HTMLSelectElement).value;
    console.log(selectedValue)
    this.MdrRegistration.get('plan')?.setValue(selectedValue);
    this.MdrReg.MDR_REGSITRD_MEMBERSHIP_PLANID = selectedValue;
  }

  selectCategory(event: Event): void {
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.category = selectedValue;

    if (selectedValue === '0') {
      this.MdrReg.MDR_REGISTRD_ON_PRODUCT_FLG = true;
      this.MdrReg.MDR_REGISTRD_ON_SERVICE_FLG = false;
    } else if (selectedValue === '1') {
      this.MdrReg.MDR_REGISTRD_ON_PRODUCT_FLG = false;
      this.MdrReg.MDR_REGISTRD_ON_SERVICE_FLG = true;
    } else {
      this.MdrReg.MDR_REGISTRD_ON_PRODUCT_FLG = false;
      this.MdrReg.MDR_REGISTRD_ON_SERVICE_FLG = false;
    }
  }

  onSelectRegisteringAs(event: Event): void {
    const selectedValue = (event.target as HTMLSelectElement).value;

    console.log('Registering As:', selectedValue);

    if (selectedValue === 's' || selectedValue === 'sb') {
      this.MdrReg.Seller_Flg = selectedValue === 's';
      this.MdrReg.Buyer_Flg = false;
      this.MdrReg.Seller_Buyer_Flg = selectedValue === 'sb';

      this.MdrRegistration.get('skusValue')?.setValue(10);
    } else if (selectedValue === 'b') {
      this.MdrReg.Seller_Flg = false;
      this.MdrReg.Buyer_Flg = true;
      this.MdrReg.Seller_Buyer_Flg = false;

      this.MdrRegistration.get('skusValue')?.setValue(0);
    } else {
      this.MdrReg.Seller_Flg = false;
      this.MdrReg.Buyer_Flg = false;
      this.MdrReg.Seller_Buyer_Flg = false;

      this.MdrRegistration.get('skusValue')?.setValue(0);
    }
  }

  increment(): void {
    if (this.MdrReg.Seller_Flg == true || this.MdrReg.Seller_Buyer_Flg == true) {
      const currentValue = this.MdrRegistration.get('skusValue')?.value || this.minValue;
      if (currentValue + this.step <= this.maxValue) {
        this.MdrRegistration.get('skusValue')?.setValue(currentValue + this.step);
      }
    }
  }

  decrement(): void {
    if (this.MdrReg.Seller_Flg == true || this.MdrReg.Seller_Buyer_Flg == true) {
      const currentValue = this.MdrRegistration.get('skusValue')?.value || this.minValue;
      if (currentValue - this.step >= this.minValue) {
        this.MdrRegistration.get('skusValue')?.setValue(currentValue - this.step);
      }
    }
  }

  gstinOwner(event: Event): void {
    // const selectedValue = (event.target as HTMLSelectElement).value;
    // if (selectedValue === 'false') {
    //   this.hasGstin = false;
    //   this.MdrRegistration.get('gstin')?.disable();
    //   this.MdrRegistration.get('gstin')?.setValue('');
    // } else {
    //   this.hasGstin = true;
    //   this.MdrRegistration.get('gstin')?.enable();
    // }
  }


  refferedby(event: Event): void {
    const selectedValue = (event.target as HTMLSelectElement).value;
    if (selectedValue === 'bm') {
      this.refferedBy = 'bm';
    } else if (selectedValue === 'bf') {
      this.refferedBy = 'bf';
    } else if (selectedValue === 'sf') {
      this.refferedBy = 'sf';
    } else {
      this.refferedBy = '';
    }
  }

  showMakePayment() {
    this.showpayment = !this.showpayment;
  }

  getCountry() {
    this.apiService.CountryList().subscribe((res) => {
      console.log("Country List: ", res)
      this.countryList = res;
      //   this.getState();
    });
  }

  changeCountry(e) {
    this.countryID = e.target.value;
    this.countryEvent.emit(this.countryID)
    console.log(this.countryID);
    if (this.countryID) {
      this.getState();
    }
    else {
      this.stateList = null;
      this.cityList = null;
      this.zipList = null;
    }

  }

  getState() {
    this.apiService.StateList(this.countryID).subscribe((res) => {
      this.stateList = res;
      console.log("State List: ", res)
    });
  }

  changeState(e) {

    this.stateID = e.target.value;
    this.stateEvent.emit(this.stateID);
    this.stateName = e.target.options[e.target.options.selectedIndex].text;
    if (this.stateID) {
      this.getCity();
      this.cityList = null;
      this.zipList = null;
    }
    else {
      this.cityList = null;
      // this.zipList = null;
    }

  }

  getCity() {
    this.apiService.CityList(this.countryID, this.stateID).subscribe((res) => {
      this.cityList = res;
      console.log("City List: ", res)
    });
  }
  changeCity(e) {
    this.cityID = e.target.value;
    console.log(this.cityID);
    this.cityEvent.emit(this.cityID)
    this.cityName = e.target.options[e.target.options.selectedIndex].text;
    this.getZip();
  }

  getZip() {
    this.apiService.ZipList(this.stateName, this.cityName).subscribe((res) => {
      this.zipList = res;
      console.log(this.zipList);
    });
  }
  changePin(e) {
    // this.pinID =e.target.value;
    this.pinID = e.target.options[e.target.options.selectedIndex].text;
    console.log(this.pinID);
    this.pincodeEvent.emit(this.pinID)

  }

  showCart = false

  closeCheckout() {
    this.showCart = false;
  }

  showDetails = false
  memberId = '';
  storeCode = '';
  selectedMembership = '';
  changeType = 'no';
  memberType = 'MDR01';
  PlanId = ''

  showPaymentDetails() {

    const payload = {
      MemberRegid: this.memberId,
      FreshMembershipFlg: true,
      ReActivationFlg: false
    }

    this.apiService.postCall(this.apiService.baseURL + '/GetStorecode_Memberplan', payload)
      .subscribe(data => {
        console.log(data);

        this.storeCode = data.Storecode;
        this.selectedMembership = data.PlanName;
        this.PlanId = data.PlanId

        this.showDetails = true;
      },
        (error) => {

          console.log("Error: ", error)

          this.toastr.error(error.error.Message, '', {
            timeOut: 5000,
          });

          this.showDetails = false;
        });

  }

  updateMembershipType() {

    const payload = {
      Storecode: this.storeCode,
      MemberPlanId: this.memberType
    }

    this.apiService.postCall(this.apiService.baseURL + '/Update_inRegistration_MemberPlan', payload)
      .subscribe(data => {
        console.log(data);

        this.toastr.success(data.Message);

        this.showDetails = false;
        this.memberId = '';
        this.storeCode = '';
        this.selectedMembership = '';
        this.changeType = 'no';
        this.memberType = 'MDR01';
        this.PlanId = '';
        this.showPriceDetails = false;
        this.serviceDiscount = null;
      },
        (error) => {

          console.log("Error: ", error)

          this.toastr.error(error.error.Message, '', {
            timeOut: 5000,
          });

          this.showDetails = false;
        });
  }

  openCart() {
    this.showCart = true;
  }

  viewOpenCart() {

    const payload = {
      Storecode: "1001070099",
      Serviceid: "7"
    }

    this.apiService.postCall(this.apiService.baseURL + '/Display-OpenCart', payload)
      .subscribe(data => {
        console.log(data);

        if (data.Message === 'No Open cart Found for the Store') {
          this.toastr.error("No Open cart Found for the Store")
          return;
        }
        this.cartDetials = data;

        this.modalRef?.hide();
        this.showCart = true;
      },
        (error) => {
          this.toastr.error(error, '', {
            timeOut: 5000,
          });
        });
  }


  payment() {
    this.razorpayService.payWithRazorpay(this.cartDetials.Id, this.cartDetials.MDR_CONCT_CART_TOTAL_TO_PAY_AMT_IN_PAISA);
  }

  serviceDiscount: any;
  showPriceDetails: boolean = false

  showPrice() {

    const payload = {
      Storecode: "1001070099",
      Serviceid: "7"
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

  cartDetials: any;

  cartCheckout() {

    const payload = {
      Storecode: "1001070099",
      MemberPlanId: this.serviceDiscount?.MDR_STORE_MEMBRSHIP_PLAN_ID,
      PlanName: this.serviceDiscount?.MDR_MEMBERSHIP_PLAN_NAME,
      ServiceId: "7",
      ServicePrice: this.serviceDiscount?.ServicePrice,
      Quantity: "1",
      DiscountPercent: this.serviceDiscount?.Discount_Percntg,
      GstPercent: this.serviceDiscount?.GST_Percntg,
      Currency: "INR"
    }

    console.log("Payload: ", payload)

    this.apiService.postCall(this.apiService.baseURL + '/MDRCheckout', payload)
      .subscribe(data => {
        console.log(data);
        this.cartDetials = data;
        this.showCart = true;
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
      ServiceId: "7",
      CartId: this.cartDetials?.MDR_CONCT_SERVICE_CARTID
    }

    this.apiService.postCall(this.apiService.baseURL + '/Delete_MDR_ServiceCart', payload)
      .subscribe(data => {
        console.log(data);

        this.toastr.success(data.Message);
        this.showCart = false;
        this.cartDetials = null;

      },
        (error) => {
          console.log("Error: ", error)
          this.toastr.error(error.error.Message, '', {
            timeOut: 5000,
          });
        });
  }

}
