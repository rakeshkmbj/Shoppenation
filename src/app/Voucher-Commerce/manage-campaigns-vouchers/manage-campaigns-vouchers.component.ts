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
  addcouponForm!: FormGroup;
  couponRuleForm!: FormGroup;
  couponsForm!: FormGroup;
  addVoucherForm!: FormGroup;
  giftCommerceForm!: FormGroup;
  addToCampaignForm!: FormGroup;
  addCouponToVoucherForm!: FormGroup;
  attachSkuForm!: FormGroup;
  selectedCouponType: any;

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
  selectedCategoryLine: any;
  itemList: any;
  SKUs: any;
  coupons: any[] = [];

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

    this.couponRuleForm = this.formBuilder.group({
      userType: ['individual', Validators.required],
      minCart: [1, [Validators.required, Validators.min(1)]],
      valueType: ['amount', Validators.required],
      amount: [150, [Validators.required, Validators.min(0.01)]],
      currency: ['INR', Validators.required],
      percentage: [null, [
        Validators.required,
        Validators.min(0.01),
        Validators.max(100)
      ]]
    });

    this.updateValueValidators();

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
      categoryLine: [''],
      ecomstore: ['']

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

    this.couponsForm = this.formBuilder.group({

      couponCategory: ['', Validators.required],

      couponSubCategory: ['', Validators.required],

      fromDate: ['', Validators.required]

    });

    this.addcouponForm = this.formBuilder.group({

      couponname: ['', Validators.required]

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

    this.apiService.getCall(this.apiService.baseURL + '/GetSuperStoreProductLineById/' + this.AssociatedEcomStore.AD_VEND_ASSOCTD_ECOMM_DOMNID)
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

  onCategoryLineChange(e: any) {
    this.selectedCategoryLine = e.target.value;
  }

  onProductLineChange(e: any) {

    this.selectedProductLine = e.target.value;

    this.apiService.getCall(
      this.apiService.baseURL + '/GetSuperStoreDropShipItems/' + this.AssociatedEcomStore.AD_VEND_ASSOCTD_ECOMM_DOMNID + '/' + this.selectedProductLine)
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

  AssociatedEcomStore: any

  getEcomStores() {

    const payload = {
      "Subacctid": this.subaccountid,
      "Storeid": this.storeid
    }

    this.apiService.postCall(this.apiService.baseURL + '/GetAdVendAcctMacroSetup', payload)
      .subscribe((res: any) => {

        console.log("Ecom store resonce: ", res);
        this.AssociatedEcomStore = res;

        this.getProductLine();
      },
        (error) => {
          console.log(error);
          this.productLineList = [];
          this.toastr.error(error.error.Message, '', {
            timeOut: 5000,
          });
        });

  }

  openAddVoucher(template: any): void {

    this.getEcomStores();

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
      categoryLine: '',
      ecomstore: '',
      redemptionAt: ''
    });

    this.modalRef = this.modalService.show(template, {
      class: 'modal-xl'
    });

  }

  openCouponModel(template: any) {
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

    this.showNoData = false;

    if (tab === 'tab1') {
      this.selectedTab = 'vouchers';
    } else if (tab === 'tab2') {
      this.selectedTab = 'campaigns';
    } else if (tab === 'tab3') {
      this.selectedTab = 'coupons';
    } else {
      console.log("Wrong tab selected")
    }

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

  displayPhygitalVouchers() {

    const payload = {
      "ProductId": this.selectedProductLine,
      "Itemid": this.selectedCategoryLine,
      "Domainld": this.AssociatedEcomStore.AD_VEND_ASSOCTD_ECOMM_DOMNID,
      "AccountId": this.AssociatedEcomStore.AD_VEND_ASSOCTD_ECOMM_ACCTID,
      "SubAccountId": this.AssociatedEcomStore.AD_VEND_ASSOCTD_ECOMM_SUBACCTID,
      "Storeld": this.AssociatedEcomStore.AD_VEND_ASSOCTD_ECOMM_STOREID
    }

    console.log("Payload: ", payload);

    this.apiService.postCall(this.apiService.baseURL + '/DisplaySubitemsByltem', payload)
      .subscribe((res: any) => {

        console.log("SKU resonce: ", res);

        this.SKUs = res;

      },
        (error) => {
          console.log(error);
          this.productLineList = [];
          this.toastr.error(error.error.Message, '', {
            timeOut: 5000,
          });
        });

  }

  displayCoupons() {

    if (this.couponsForm.invalid) {

      this.couponsForm.markAllAsTouched();

      return;

    }

    this.coupons = [{
      couponId: 4787854,
      categoryId: '0012',
      category: 'Discount',
      subCategory: 'Bulk Disc.',
      name: 'Corporate Based 10%'
    }];

    this.showNoData = false;

    if (this.coupons.length === 0) {

      this.showNoData = true;

    }

  }

  onCouponNameChange(event: any): void {

    this.selectedCouponType = event.target.value;

  }


  updateValueValidators(): void {
    const amount = this.couponRuleForm.get('amount')!;
    const percentage = this.couponRuleForm.get('percentage')!;

    if (this.couponRuleForm.get('valueType')?.value === 'amount') {
      amount.setValidators([
        Validators.required,
        Validators.min(0.01)
      ]);
      percentage.clearValidators();
    } else {
      percentage.setValidators([
        Validators.required,
        Validators.min(0.01),
        Validators.max(100)
      ]);
      amount.clearValidators();
    }

    amount.updateValueAndValidity({ emitEvent: false });
    percentage.updateValueAndValidity({ emitEvent: false });
  }

  addCouponRule(): void {
    if (this.couponRuleForm.invalid) {
      this.couponRuleForm.markAllAsTouched();
      return;
    }

    const formValue = this.couponRuleForm.value;

    const payload = {
      userType: formValue.userType,
      minCart: Number(formValue.minCart),
      valueType: formValue.valueType,
      amount: formValue.valueType === 'amount'
        ? Number(formValue.amount)
        : null,
      currency: formValue.valueType === 'amount'
        ? formValue.currency
        : null,
      percentage: formValue.valueType === 'percentage'
        ? Number(formValue.percentage)
        : null
    };

    console.log('Coupon Rule:', payload);

    // Call your API here.
  }

}