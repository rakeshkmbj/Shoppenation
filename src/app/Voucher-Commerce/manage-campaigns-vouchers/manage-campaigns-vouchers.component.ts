import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormGroup, Validators, FormBuilder, AbstractControl, NgForm } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';
import { NgxSpinnerService } from "ngx-spinner";
import { NavigationExtras, Router } from '@angular/router';
import { RazorpayService } from '../../razorpay.service';
import { PaymentStatusService } from 'src/app/services/payment-status.service';
import { takeUntil, filter } from 'rxjs/operators';
import { Subscription, Subject } from 'rxjs';

@Component({
  selector: 'app-manage-campaigns-vouchers',
  templateUrl: './manage-campaigns-vouchers.component.html',
  styleUrls: ['./manage-campaigns-vouchers.component.scss']
})
export class ManageCampaignsVouchersComponent implements OnInit {

  selectedTab: string = 'vouchers';

  voucherForm!: FormGroup;
  addVoucherForm!: FormGroup;
  giftCommerceForm!: FormGroup;
  addToCampaignForm!: FormGroup;
  addCouponToVoucherForm!: FormGroup;
  attachSkuForm!: FormGroup;

  vouchers: any[] = [];
  campaigns: any[] = [];

  voucherSubCategories: any[] = [];

  showNoData: boolean = false;

  modalRef: any;
  accountid: any;
  subaccountid: any;
  storeid: any;
  storeName: any;
  domainid: any;
  getlogindata: any;
  countryList: any[] = [];
  countryID = '';
  stateList: any[] = [];
  cityList: any[] = [];
  zipList: any[] = [];
  stateID = '';
  stateName = '';
  cityID = '';
  cityName = '';
  selectedFulfillmentModel = '';
  selectedChannel = 1;
  showActiveCampaignsFlg: boolean = false;
  showSkuFlg: any;
  productLineList: any;
  selectedProductLine: any;
  itemList: any;

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
    this.accountid = this.apiService.requiredLoginData.accountid;
    this.subaccountid = this.apiService.requiredLoginData.subaccountid;
    this.storeid = this.apiService.requiredLoginData.storeid;
    this.storeName = this.apiService.requiredLoginData.storeName;
    this.domainid = this.apiService.requiredLoginData.domainid;
    this.getlogindata = localStorage.getItem('logindata');
    this.getlogindata = JSON.parse(this.getlogindata);
  }


  ngOnInit(): void {

    this.getCountry();

    this.addVoucherForm = this.formBuilder.group({

      // Basic Details
      name: [''],
      shortCode: [''],
      userType: [''],

      // Category
      category: [''],
      subCategory: [''],


      // SKU Options - Yes / No
      manufacturerSku: [''],
      selfServiceSku: [''],
      thirdPartySku: [''],


      // Marketplace - Yes / No
      marketplaceAvailable: [''],


      // Discount
      discountType: [''],
      amount: [''],
      percentage: [''],
      currency: [''],


      // Voucher Quantity
      numberOfVouchers: [''],


      // Stacking
      stackingAllowed: [''],
      stackingRule: [''],


      // Redemption
      redemptionAt: [''],

      // Phygital Voucher
      productLine: [''],
      categoryLine: ['']

    });

    this.attachSkuForm = this.formBuilder.group({

      productLine: [''],

      item: ['']

    });

    this.addCouponToVoucherForm = this.formBuilder.group({

      currency: [''],
      campaignType: [''],
      campaignCategory: [''],

      createdBeforeDate: [''],
      createdAfterDate: [''],

      amount: [150],

      couponUsage: ['stacking'],
      seniorCitizenCoupon: [true]
    });

    this.addToCampaignForm = this.formBuilder.group({
      campaignType: ['country', Validators.required],
      country: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required],
      createdBeforeDate: ['', Validators.required],
      createdAfterDate: ['', Validators.required],
      campaignCategory: ['', Validators.required]
    });

    this.voucherForm = this.formBuilder.group({

      voucherCategory: ['', Validators.required],

      voucherSubCategory: ['', Validators.required],

      fromDate: ['', Validators.required]

    });

    this.giftCommerceForm = this.formBuilder.group({
      fulfillmentModel: ['', Validators.required],
      country: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required]
    });

  }

  onCategoryChange(event: any): void {

    const category = event.target.value;

    this.voucherSubCategories = [];

    this.voucherForm.patchValue({
      voucherSubCategory: ''
    });


    if (category === 'market') {

      this.voucherSubCategories = [

        {
          id: 'market-1',
          name: 'Gift Vouchers'
        }

      ];

    }


    if (category === 'channel') {

      this.voucherSubCategories = [

        {
          id: 'channel-1',
          name: 'Loyalty Vouchers'
        },

        {
          id: 'channel-2',
          name: 'SKU Credit Vouchers'
        },

        {
          id: 'channel-2',
          name: 'Sales Achievement Voucher'
        },

        {
          id: 'channel-2',
          name: 'Special Purpose Voucher'
        },

        {
          id: 'channel-2',
          name: 'Gift Vouchers'
        }

      ];

    }


    if (category === 'enterprise') {

      this.voucherSubCategories = [

        {
          id: 'enterprise-1',
          name: 'Loyalty Vouchers'
        },

        {
          id: 'enterprise-1',
          name: 'Sales Force Vouchers'
        },

        {
          id: 'enterprise-1',
          name: 'Incentive Based Vouchers'
        },

        {
          id: 'enterprise-1',
          name: 'Special Purpose Vouchers'
        },

        {
          id: 'enterprise-1',
          name: 'Gift Vouchers'
        }

      ];

    }


    if (category === 'service') {

      this.voucherSubCategories = [

        {
          id: 'service-1',
          name: 'KPI Based Vouchers'
        },

        {
          id: 'service-1',
          name: 'Loyalty Vouchers'
        },

        {
          id: 'service-1',
          name: 'Gift Vouchers'
        }

      ];

    }

  }

  displayVouchers(): void {

    if (this.voucherForm.invalid) {

      this.voucherForm.markAllAsTouched();

      return;

    }


    this.showNoData = false;


    /*
     * Replace this dummy data with your API response.
     */

    this.vouchers = [

      {
        voucherId: '436654321',
        name: 'Gift-2100',
        userType: 'D2C',
        active: true,
        date: new Date(2026, 8, 1),
        totalCreated: 100000
      }

    ];


    if (this.vouchers.length === 0) {

      this.showNoData = true;

    }

  }

  getProductLine() {

    this.apiService.getCall(this.apiService.baseURL + '/GetSuperStoreProductLineById/' + 16)
      .subscribe((res: any) => {

        console.log("resonce: ", res)

        this.productLineList = res;

      },
        (error) => {
          console.log(error);
          this.productLineList = [];
          this.toastr.error(error.error.Message, '', {
            timeOut: 5000,
          });
        });
  }

  onProductLineChange(e: any) {

    this.selectedProductLine = e.target.value;

    this.apiService.getCall(
      this.apiService.baseURL + '/GetSuperStoreDropShipItems/' + 7 + '/' + this.selectedProductLine)
      .subscribe((res: any) => {
        console.log("responce: ", res)
        this.itemList = res;
      },
        (error) => {
          console.log(error);
          this.itemList = [];
          this.toastr.error(error.error.Message, '', {
            timeOut: 5000,
          });
        });
  }

  openAddVoucher(template: any): void {

    this.getProductLine();

    this.addVoucherForm.reset({
      name: '',
      shortCode: '',
      userType: '',
      category: '',
      subCategory: '',
      manufacturerSku: '',
      selfServiceSku: '',
      thirdPartySku: '',
      marketplaceAvailable: '',
      discountType: '',
      amount: '',
      percentage: '',
      currency: '',
      numberOfVouchers: '',
      stackingAllowed: '',
      stackingRule: '',
      redemptionByOwnStores: '',
      giftPackVouchers: '',
      redemptionByChannelPartners: '',
      productLine: '',
      categoryLine: ''
    });

    this.modalRef = this.modalService.show(template, {
      class: 'modal-xl'
    });


  }


  submitVoucher(): void {

    if (this.addVoucherForm.invalid) {

      this.addVoucherForm.markAllAsTouched();

      return;

    }

    const payload = {

      Voucher_Name: this.addVoucherForm.value.name,

      Voucher_Category:
        this.addVoucherForm.value.category,

      Total_Created:
        this.addVoucherForm.value.totalCreated,

      From_Date:
        this.addVoucherForm.value.fromDate,

      To_Date:
        this.addVoucherForm.value.toDate

    };


    console.log('Add Voucher Payload:', payload);


    /*
     * Call your Add Voucher API here.
     */


    if (this.modalRef) {

      this.modalRef.hide();

    }

  }


  viewVoucherDetails(voucher: any): void {

    console.log('Voucher Details:', voucher);

  }


  attachSKU(voucher: any, template: any): void {

    console.log('Attach SKU:', voucher);

    this.modalRef = this.modalService.show(template, {
      class: 'modal-xl'
    });

  }

  addToCampaignFunction(template: any) {

    this.showActiveCampaignsFlg = false;

    if (this.modalRef) {
      this.modalRef.hide();
    }

    this.modalRef = this.modalService.show(template, {
      class: 'modal-xl'
    });

  }

  displayActiveCampaigns() {
    this.showActiveCampaignsFlg = true;
  }


  attachCampaign(voucher: any, template: any): void {

    console.log('Attach Campaign:', voucher);

    this.modalRef = this.modalService.show(template, {
      class: 'modal-xl'
    });

  }


  channelDistribution(voucher: any, template: any): void {

    console.log('Channel Distribution:', voucher);

    this.modalRef = this.modalService.show(template, {
      class: 'modal-xl'
    });

  }


  marketPerformance(voucher: any): void {

    console.log('Market Performance:', voucher);

  }

  openAddCampaign(): void {

    console.log('Open Add Campaign');

  }


  editCampaign(campaign: any): void {

    console.log('Edit Campaign:', campaign);

  }


  viewCampaign(campaign: any): void {

    console.log('View Campaign:', campaign);

  }

  onTabChange(tab: any) {

  }

  onTabChangeSKU(tab: any) {

  }


  getCountry() {
    this.apiService.CountryList().subscribe((res) => {
      this.countryList = Array.isArray(res) ? res : [];
    });
  }

  changeCountry(e: any) {
    this.countryID = e.target.value || '';
    this.stateID = '';
    this.stateName = '';
    this.cityID = '';
    this.cityName = '';
    this.stateList = [];
    this.cityList = [];
    this.giftCommerceForm.patchValue({ state: '', city: '' }, { emitEvent: false });

    if (this.countryID) {
      this.getState();
    }
  }

  getState() {
    this.apiService.StateList(this.countryID).subscribe((res) => {
      this.stateList = Array.isArray(res) ? res : [];
    });
  }

  changeState(e: any) {
    this.stateID = e.target.value || '';
    this.stateName = this.stateID
      ? e.target.options[e.target.selectedIndex].text
      : '';
    this.cityID = '';
    this.cityName = '';
    this.cityList = [];
    this.giftCommerceForm.patchValue({ city: '' }, { emitEvent: false });

    if (this.countryID && this.stateID) {
      this.getCity();
    }
  }

  getCity() {
    this.apiService.CityList(this.countryID, this.stateID).subscribe((res) => {
      this.cityList = Array.isArray(res) ? res : [];
    });
  }

  changeCity(e: any) {
    this.cityID = e.target.value || '';
    this.cityName = this.cityID
      ? e.target.options[e.target.selectedIndex].text
      : '';
  }

  onFulfillmentModelChange(event: any): void {

    this.selectedFulfillmentModel = event.target.value;

  }

  displayChannelPartners(template: any): void {

    if (this.giftCommerceForm.invalid) {

      this.giftCommerceForm.markAllAsTouched();

      return;

    }

    const payload = {

      Fulfillment_Model:
        this.giftCommerceForm.value.fulfillmentModel,

      Country:
        this.giftCommerceForm.value.country,

      State:
        this.giftCommerceForm.value.state,

      City:
        this.giftCommerceForm.value.city

    };

    console.log('Display Channel Partners:', payload);

    // Call your API here

    if (this.modalRef) {
      this.modalRef.hide();
    }

    this.modalRef = this.modalService.show(template, {
      class: 'modal-xl'
    });

  }


  displayManagedStores(): void {

    if (this.giftCommerceForm.invalid) {

      this.giftCommerceForm.markAllAsTouched();

      return;

    }

    const payload = {

      Fulfillment_Model:
        this.giftCommerceForm.value.fulfillmentModel,

      Country:
        this.giftCommerceForm.value.country,

      State:
        this.giftCommerceForm.value.state,

      City:
        this.giftCommerceForm.value.city

    };

    console.log('Display Managed Stores:', payload);

    // Call your API here

  }

  openCommerceModelModal(template: any) {

    if (this.modalRef) {
      this.modalRef.hide();
    }

    this.modalRef = this.modalService.show(template, {
      class: 'modal-lg'
    });

  }

  couponsManagement(voucher: any, template: any) {

    console.log('Manage coupons:', voucher);

    if (this.modalRef) {
      this.modalRef.hide();
    }

    this.modalRef = this.modalService.show(template, {
      class: 'modal-lg'
    });

  }

  addCouponToVoucher(template: any) {

    if (this.modalRef) {
      this.modalRef.hide();
    }

    this.modalRef = this.modalService.show(template, {
      class: 'modal-lg'
    });

  }

  changeItem(event: any) {
    // Optional item selection logic
  }

  displaySkus() {
    this.showSkuFlg = true;

    // Load SKU list here
  }

  viewSkuDetail(sku: any) {
    // Show SKU details
  }

  addSku(sku: any) {
    // Attach SKU to voucher
  }

  disableSku(sku: any) {
    // Disable SKU for voucher
  }

  changeDiscountType(): void {

    const discountType =
      this.addVoucherForm.get('discountType')?.value;

    if (discountType === 'amount') {

      this.addVoucherForm.patchValue({
        percentage: ''
      });

    } else if (discountType === 'percentage') {

      this.addVoucherForm.patchValue({
        amount: ''
      });

    } else {

      this.addVoucherForm.patchValue({
        amount: '',
        percentage: ''
      });

    }

  }

}