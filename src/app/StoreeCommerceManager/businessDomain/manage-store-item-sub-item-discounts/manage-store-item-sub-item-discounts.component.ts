import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

interface B2BItemDiscount {
  Acctid: number;
  Subacctid: number;
  Storeid: number;
  ProductId: number;
  ItemId: number;
  SubItemId: number;
  Retailer_Flg: number;
  Distributor_Flg: number;
  Franchisee_flg: number;
  CountsOnCart: number;
  PercntgFigure: number;
  Percntg_Flg: number;
  Regular_Discount_Flg: number;
  Item_Counts_Discount_Flg: number;
  Promotional_Discount_Flg: number;
  FromDate: string;
  ToDate: string;
}

interface PreferredPartnerDiscount {
  ManufacturerAcctId: number;
  ManufacturerSubacctId: number;
  ManufacturerStoreId: number;
  ProductId: number;
  ItemId: number;
  SubitemId: number;
  DistributorFlg: number;
  RetailerFlg: number;
  FranchiseFlg: number;
  PartnerSubacctId: number;
  PartnerStoreId: number;
  PercentFlag: number;
  PrefDiscountNumber: number;
  ValidFrom: string;
  ValidTo: string;
}

interface SecondaryAccounts {
  CategoryId: string;
  DomainId: string | null;
  LinkSeqId: string;
  OfficeName: string;
  StoreId: string;
  SubaccountId: string;
}

interface RegularDiscountDetails {
  RETAIL_B2B_DISCOUNT_FIGURE: number;
  RETAIL_B2B_DISCOUNT_ID: string;
  RETAIL_B2B_DISCOUNT_TYPE: string;
  RETAIL_B2B_DISCOUNT_VALD_FRM_DATE: string;
  RETAIL_B2B_DISCOUNT_VALID_TO_DATE: string;
  RETAIL_B2B_ITEM_DISCNT_VALID_FLG: boolean;
  RETAIL_B2B_ITEM_SPL_DISC_PERCNTG_FIG: boolean;
}

interface EditRegularDiscountDetails {
  DiscountId: string;
  AcctBasedDiscntFlg: boolean;
  ItemCountsDiscntFlg: boolean;
  SubitemsCountsOnCart: number;
  PercntgFlg: boolean;
  PercntgFigure: number;
  DateFrom: string;
  DateTo: string;
}

@Component({
  selector: 'app-manage-store-item-sub-item-discounts',
  templateUrl: './manage-store-item-sub-item-discounts.component.html',
  styleUrls: ['./manage-store-item-sub-item-discounts.component.scss']
})

export class ManageStoreItemSubItemDiscountsComponent implements OnInit {
  @Output() countryEvent = new EventEmitter<any>();
  @Output() stateEvent = new EventEmitter<any>();
  @Output() cityEvent = new EventEmitter<any>();
  imgURL = this.apiService.imgURL;
  storelist: any;
  itemSubitemForm: FormGroup;
  officeID: any;
  storeName: any;
  productLinelist: any;
  productID: any;
  productName: any;
  dropShipItemList: any;
  itemID: any;
  ItemSubtemDiscountList: any;
  itemName: any;
  showMrpDiscountTable: boolean;
  subitemName: any;
  couponID: any;
  retailMRP: any;
  retailSize: any;
  discountForm: FormGroup;
  subItemID: any;
  discountFlag: boolean;
  percentgFlag: boolean;
  wholesalePrice: any;
  mrpID: any;
  mrpForm: FormGroup;
  mrp: any;
  wholesalemrp: any;
  getlogindata: any;
  accountid: any;
  subaccountid: any;
  storeid: any;
  domainid: any;
  manageStoreItemPDList: [];
  previousDate: Date;
  bebModalData: any;

  countryList: {};
  countryID: any;
  countryName: any;
  // searchCenterForm: any;
  cityList: {};
  stateList: {};
  stateID: any;
  stateName: any;
  cityName: any;
  // Form: FormGroup;
  // zipList: {};
  cityID: any;
  pinID: any;

  constructor(private apiService: ApiService,
    private modalService: BsModalService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService) {
    this.accountid = this.apiService.requiredLoginData.accountid;
    this.subaccountid = this.apiService.requiredLoginData.subaccountid;
    this.storeid = this.apiService.requiredLoginData.storeid;
    this.storeName = this.apiService.requiredLoginData.storeName;
    this.domainid = this.apiService.requiredLoginData.domainid;
  }

  b2bItemDiscount: B2BItemDiscount = {
    Acctid: 0,
    Subacctid: 0,
    Storeid: 0,
    ProductId: 0,
    ItemId: 0,
    SubItemId: 0,
    Retailer_Flg: 0,
    Distributor_Flg: 0,
    Franchisee_flg: 0,
    CountsOnCart: 1,
    PercntgFigure: 0,
    Percntg_Flg: 0,
    Regular_Discount_Flg: 0,
    Item_Counts_Discount_Flg: 0,
    Promotional_Discount_Flg: 0,
    FromDate: '',
    ToDate: ''
  };

  addNewPreferredPartnerDiscount: PreferredPartnerDiscount = {
    ManufacturerAcctId: 0,
    ManufacturerSubacctId: 0,
    ManufacturerStoreId: 0,
    ProductId: 0,
    ItemId: 0,
    SubitemId: 0,
    DistributorFlg: 0,
    RetailerFlg: 0,
    FranchiseFlg: 0,
    PartnerSubacctId: 0,
    PartnerStoreId: 0,
    PercentFlag: 0,
    PrefDiscountNumber: 0,
    ValidFrom: '',
    ValidTo: ''
  };

  secondaryAcc: SecondaryAccounts[] = [];
  
  DisDatefrom: Date | null = null;
  DisDateto: Date | null = null;

  modalRef: BsModalRef;

  isRegularDiscountSelectedTab1 = false;
  isItemCountDiscountSelectedTab1 = false;
  isPromotionalDiscountSelectedTab1 = false;
  isPrefferdPartnerDiscountSelectedTab1 = false;

  isRegularDiscountSelectedTab2 = false;
  isItemCountDiscountSelectedTab2 = false;
  isPromotionalDiscountSelectedTab2 = false;
  isPrefferdPartnerDiscountSelectedTab2 = false;

  isRegularDiscountSelectedTab3 = false;
  isItemCountDiscountSelectedTab3 = false;
  isPromotionalDiscountSelectedTab3 = false;
  isPrefferdPartnerDiscountSelectedTab3 = false;

  dicountArr: RegularDiscountDetails[] = [];

  discountEdit: EditRegularDiscountDetails = {
    DiscountId: '',
    AcctBasedDiscntFlg: false,
    ItemCountsDiscntFlg: false,
    SubitemsCountsOnCart: 0,
    PercntgFlg: false,
    PercntgFigure: 0,
    DateFrom: '',
    DateTo: ''
  }

  ngOnInit(): void {
    this.getStoreList();
    this.getProductLineList();

    this.itemSubitemForm = this.formBuilder.group({
      SUBACCT_OFFICE_ID: this.storeid,
      RETAIL_D2C_PRODUCT_ID: ['', Validators.required],
      itemid: ['', Validators.required],
    });

    this.discountForm = this.formBuilder.group({
      RETAIL_DISCOUNT_FIGURE: ['', Validators.required],
      RETAIL_D2C_DISCOUNT_PERCENTG_FLG: ['', Validators.required],
      RETAIL_VALID_FROM_DATE: ['', Validators.required],
      RETAIL_VALID_To_DATE: ['', Validators.required],
      RETAIL_D2C_DISCOUNT_VALIDITY_FLG: ['', Validators.required],
    });



    this.mrpForm = this.formBuilder.group({
      Retail_MRP: ['', Validators.required],
      RETAIL_WHOLESALE_MRP: ['', Validators.required]
    });

  }

  getStoreList() {
    this.apiService.storeList().subscribe((data) => {
      this.storelist = data;
      console.log(this.storelist);
    });
  }

  //  onStoreChange(e){
  //   this.officeID = this.itemSubitemForm.value.SUBACCT_OFFICE_ID;
  //   this.storeName = e.target.options[e.target.options.selectedIndex].text;
  //   console.log(this.officeID);
  // }

  getProductLineList() {

    this.apiService.getCall(this.apiService.baseURL + '/GetStoreProductLines/' + this.accountid + "/" + this.subaccountid + "/" + this.storeid)
      // this.apiService.postCall(this.apiService.baseURL + '/GetItemListOfStore', data)
      .subscribe(data => {
        console.log(data);
        this.productLinelist = data;
        if (data.length == "") {
          this.toastr.error(data, '', {
            timeOut: 5000,
          });
        }
      },
        (error) => {
          this.toastr.error(error, '', {
            timeOut: 5000,
          });
        }
      )

  }

  productLineChange(e) {
    this.productID = this.itemSubitemForm.value.RETAIL_D2C_PRODUCT_ID;
    this.productName = e.target.options[e.target.options.selectedIndex].text;
    console.log(this.productID);
    this.GetItemListOfStore();
  }

  GetItemListOfStore() {
    this.apiService.getCall(this.apiService.baseURL + '/GetStoreProductItemList' + "/" + this.accountid + "/" + this.subaccountid + "/" + this.storeid + "/" + this.productID)

      .subscribe(data => {
        console.log(data);
        this.dropShipItemList = data;
        if (data.length == "") {
          this.toastr.error(data, '', {
            timeOut: 5000,
          });
        }
      },
        (error) => {
          this.toastr.error(error, '', {
            timeOut: 5000,
          });
        }
      )
  }

  // getItemList(){
  //   this.apiService.getCall(this.apiService.baseURL + '/GetSuperStoreDropShipItems/' + this.domainid + "/" + this.productID)
  //    .subscribe(data => {
  //    this.dropShipItemList = data;
  // });
  // }

  itemChange(e) {
    this.itemID = this.itemSubitemForm.value.itemid;
    this.itemName = e.target.options[e.target.options.selectedIndex].text;
    console.log(this.itemID);
    this.showMrpDiscountTable = false;
  }

  addItemSubtemDiscount() {
    let addItemSubtemDiscountData = {
      RETAIL_DOMAIN_ID: +this.domainid,
      RETAIL_ACCOUNT_ID: this.accountid,
      RETAIL_SUBACCOUNT_ID: this.subaccountid,
      RETAIl_STORE_ID: +this.storeid,
      RETAIL_PRODUCT_ID: +this.productID,
      RETAIL_ITEM_ID: +this.itemID
    }
    this.apiService.postCall(this.apiService.baseURL + '/AddItemSubtemDiscount', addItemSubtemDiscountData)
      .subscribe(data => {
        console.log(data);
        this.toastr.success(data, '', {
          timeOut: 5000,
        });
      },
        (error) => {
          this.toastr.error(error, '', {
            timeOut: 5000,
          });
        }
      )
  }

  manageyStoreItemsPricesandDiscounts() {
    let manageStoreItemPC = {
      RETAIL_DOMAIN_ID: +this.domainid,
      RETAIL_ACCOUNT_ID: this.accountid,
      RETAIL_SUBACCOUNT_ID: this.subaccountid,
      RETAIl_STORE_ID: +this.storeid,
      RETAIL_PRODUCT_ID: +this.productID,
      RETAIL_ITEM_ID: +this.itemID
    }
    this.apiService.postCall(this.apiService.baseURL + '/ManageyStoreItemsPricesandDiscounts', manageStoreItemPC)
      .subscribe(data => {
        console.log(data);
        this.manageStoreItemPDList = data;
        if (data.length != '') {
          this.showMrpDiscountTable = true
        }
        else {
          this.toastr.error("Data not available", '', {
            timeOut: 5000,
          });
        }
      },
        (error) => {
          this.showMrpDiscountTable = false;
          this.toastr.error(error, '', {
            timeOut: 5000,
          });
        }
      )
  }

  getItemSubtemDiscount() {
    let getItemSubtemDiscountData = {
      RETAIL_DOMAIN_ID: +this.domainid,
      RETAIL_ACCOUNT_ID: this.accountid,
      RETAIL_SUBACCOUNT_ID: this.subaccountid,
      RETAIl_STORE_ID: +this.storeid,
      RETAIL_PRODUCT_ID: +this.productID,
      RETAIL_ITEM_ID: +this.itemID
    }
    this.apiService.postCall(this.apiService.baseURL + '/GetItemSubtemDiscount', getItemSubtemDiscountData)
      .subscribe(data => {
        console.log(data);
        this.ItemSubtemDiscountList = data;
        if (data.length != '') {
          this.showMrpDiscountTable = true
        }
        else {
          this.toastr.error("Data not available", '', {
            timeOut: 5000,
          });
        }


      },
        (error) => {
          this.toastr.error(error, '', {
            timeOut: 5000,
          });
        }
      )
  }

  selecttemSubtemDiscountData(itemSubitemDiscount, template) {
    this.modalRef = this.modalService.show(template, Object.assign({}, { class: 'width-720' }));
    console.log(itemSubitemDiscount);
    this.subitemName = itemSubitemDiscount.RETAIL_D2C_SUBITEM_NAME;
    this.couponID = itemSubitemDiscount.DiscountId;
    this.retailMRP = itemSubitemDiscount.RETAIL_D2C_SUBITEM_MRP;
    this.wholesalePrice = itemSubitemDiscount.RETAIL_D2C_SUBITEM_CASE_MRP;
    this.retailSize = itemSubitemDiscount.RETAIL_D2C_SUBITEM_SIZE;
    this.subItemID = itemSubitemDiscount.RETAIL_SUB_ITEM_ID;
    console.log(itemSubitemDiscount.RETAIL_D2C_DISCOUNT_PERCENTG_FLG);
    if (itemSubitemDiscount.RETAIL_D2C_DISCOUNT_PERCENTG_FLG == true) {
      this.discountForm.patchValue({
        RETAIL_D2C_DISCOUNT_PERCENTG_FLG: "Yes"
      });
    }

    if (itemSubitemDiscount.RETAIL_D2C_DISCOUNT_PERCENTG_FLG == false) {
      this.discountForm.patchValue({
        RETAIL_D2C_DISCOUNT_PERCENTG_FLG: "No"
      });
    }

    if (itemSubitemDiscount.RETAIL_D2C_DISCOUNT_VALIDITY_FLG == false) {
      this.discountForm.patchValue({
        RETAIL_D2C_DISCOUNT_VALIDITY_FLG: "No"
      });
    }

    if (itemSubitemDiscount.RETAIL_D2C_DISCOUNT_VALIDITY_FLG == false) {
      this.discountForm.patchValue({
        RETAIL_D2C_DISCOUNT_VALIDITY_FLG: "No"
      });
    }
    this.discountForm.patchValue({
      RETAIL_D2C_DISCOUNT_VALIDITY_FLG: itemSubitemDiscount.RETAIL_D2C_DISCOUNT_VALIDITY_FLG,
      RETAIL_D2C_DISCOUNT_PERCENTG_FLG: itemSubitemDiscount.RETAIL_D2C_DISCOUNT_PERCENTG_FLG,

      RETAIL_VALID_FROM_DATE: itemSubitemDiscount.RETAIL_D2C_DISCOUNT_VALID_TO_DATE,
      RETAIL_VALID_To_DATE: itemSubitemDiscount.RETAIL_D2C_DISCOUNT_VALID_TO_DATE,
      RETAIL_DISCOUNT_FIGURE: itemSubitemDiscount.RETAIL_D2C_DISCOUNT_FIGURE,
    });
  }
  onDateChange(newDate: Date) {
    this.previousDate = new Date(newDate);
  }
  updateItemSubitemDiscount() {

    // if(this.discountForm.value.RETAIL_D2C_DISCOUNT_VALIDITY_FLG == "1") {
    //   this.discountFlag = true;
    // }

    // if(this.discountForm.value.RETAIL_D2C_DISCOUNT_VALIDITY_FLG == "0") {
    //   this.discountFlag = false;
    // }

    // if(this.discountForm.value.RETAIL_D2C_DISCOUNT_PERCENTG_FLG == "1") {
    //   this.percentgFlag = true;
    // }

    // if(this.discountForm.value.RETAIL_D2C_DISCOUNT_PERCENTG_FLG == "0") {
    //   this.percentgFlag = false;
    // }


    let updateItemSubItemDiscountData = {
      DiscountId: +this.couponID,
      RETAIL_DOMAIN_ID: +this.domainid,
      RETAIL_ACCOUNT_ID: +this.accountid,
      RETAIL_SUBACCOUNT_ID: +this.subaccountid,
      RETAIl_STORE_ID: +this.storeid,
      RETAIL_PRODUCT_ID: +this.productID,
      RETAIL_ITEM_ID: +this.itemID,
      RETAIL_SUB_ITEM_ID: +this.subItemID,
      RETAIL_VALID_FROM_DATE: this.discountForm.value.RETAIL_VALID_FROM_DATE.toISOString().slice(0, 13) + ':' + "00",
      RETAIL_VALID_To_DATE: this.discountForm.value.RETAIL_VALID_To_DATE.toISOString().slice(0, 13) + ':' + "00",
      RETAIL_VALIDITY_FLG: this.discountForm.value.RETAIL_D2C_DISCOUNT_VALIDITY_FLG,
      RETAIL_PERCENTG_FLG: this.discountForm.value.RETAIL_D2C_DISCOUNT_PERCENTG_FLG,
      RETAIL_DISCOUNT_FIGURE: +this.discountForm.value.RETAIL_DISCOUNT_FIGURE
    }

    console.log(updateItemSubItemDiscountData);
    this.apiService.postCall(this.apiService.baseURL + '/EditItemSubtemDiscount', updateItemSubItemDiscountData)
      .subscribe(data => {
        console.log(data);
        this.manageyStoreItemsPricesandDiscounts();
        this.toastr.success('Updated Successfully', '', {
          timeOut: 5000,
        });
        //this.modalService.hide();
        this.modalRef.hide();
        //this.getItemSubtemDiscount();
      },
        (error) => {
          this.toastr.error(error, '', {
            timeOut: 5000,
          });
        }
      )
  }

  closeModal() {
    this.modalRef.hide();
    // this.modalService.hide();
    this.discountForm.reset({
      RETAIL_D2C_DISCOUNT_PERCENTG_FLG: 'Select',
      RETAIL_D2C_DISCOUNT_VALIDITY_FLG: 'Select'

    });
  }

  selectSubItemPriceData(itemSubitemDiscount, template1) {
    console.log(itemSubitemDiscount);
    this.mrpID = itemSubitemDiscount.STORE_ITEM_SUBITEM_MRP_ID;
    this.retailSize = itemSubitemDiscount.RETAIL_D2C_SUBITEM_SIZE;
    this.itemID = itemSubitemDiscount.RETAIL_ITEM_ID;
    this.subItemID = itemSubitemDiscount.RETAIL_SUB_ITEM_ID;
    this.mrp = itemSubitemDiscount.RETAIL_D2C_SUBITEM_MRP;
    this.wholesalemrp = itemSubitemDiscount.RETAIL_D2C_SUBITEM_CASE_MRP;
    this.subitemName = itemSubitemDiscount.RETAIL_D2C_SUBITEM_NAME;
    this.modalRef = this.modalService.show(template1, Object.assign({}, { class: 'width-720' }));

    this.mrpForm.patchValue({
      Retail_MRP: this.mrp,
      RETAIL_WHOLESALE_MRP: this.wholesalemrp,
    });
  }

  updateItemSubitemMRP() {
    let updateItemSubItemMRPData = {
      STORE_ITEM_SUBITEM_MRP_ID: +this.mrpID,
      RETAIL_DOMAIN_ID: +this.domainid,
      RETAIL_ACCOUNT_ID: +this.accountid,
      RETAIL_SUBACCOUNT_ID: +this.subaccountid,
      RETAIl_STORE_ID: +this.storeid,
      RETAIL_PRODUCT_ID: +this.productID,
      RETAIL_ITEM_ID: +this.itemID,
      RETAIL_SUB_ITEM_ID: +this.subItemID,
      Retail_MRP: +this.mrpForm.value.Retail_MRP,
      RETAIL_WHOLESALE_MRP: +this.mrpForm.value.RETAIL_WHOLESALE_MRP
    }

    console.log(updateItemSubItemMRPData);
    this.apiService.postCall(this.apiService.baseURL + '/EditSubItemPrice', updateItemSubItemMRPData)
      .subscribe(data => {
        console.log(data);
        this.manageyStoreItemsPricesandDiscounts();
        this.toastr.success(data, '', {
          timeOut: 5000,
        });
        this.modalRef.hide();
        // this.modalService.hide();
      },
        (error) => {
          this.toastr.error(error, '', {
            timeOut: 5000,
          });
        }
      )
  }

  onslectDiscountFlag(e: Event) {
    const value = (e.target as HTMLInputElement).value;
    console.log('Selected Discount Flag:', value);

    if (value == 'true') {
      this.b2bItemDiscount.Percntg_Flg = 1;
    } else {
      this.b2bItemDiscount.Percntg_Flg = 0;
    }
  }

  onslectDiscountFlagPreddredDiscount(e: Event) {
    const value = (e.target as HTMLInputElement).value;
    console.log('Selected Discount Flag:', value);

    if (value == 'true') {
      this.addNewPreferredPartnerDiscount.PercentFlag = 1;
    } else {
      this.addNewPreferredPartnerDiscount.PercentFlag = 0;
    }
  }

  formatDateToISOString(date: Date): string {
    if (!date) return '';
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    const hours = ('0' + date.getHours()).slice(-2);
    const minutes = ('0' + date.getMinutes()).slice(-2);
    const seconds = ('0' + date.getSeconds()).slice(-2);
    return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
  }

  addRegularDiscount() {

    this.b2bItemDiscount.FromDate = this.formatDateToISOString(new Date(this.b2bItemDiscount.FromDate))
    this.b2bItemDiscount.ToDate = this.formatDateToISOString(new Date(this.b2bItemDiscount.ToDate))
    console.log("Data: ", this.b2bItemDiscount);


    this.apiService.postCall(this.apiService.baseURL + '/AddB2BitemSplDiscount', this.b2bItemDiscount)
      .subscribe(data => {
        console.log(data);
        this.toastr.success(data.message);
        this.modalRef.hide();
      },
        (error) => {
          this.toastr.error(error, '', {
            timeOut: 5000,
          });
        }
      )

    this.modalRef.hide()
  }

  addPrefferedDiscount() {
    console.log("payload: ", this.addNewPreferredPartnerDiscount)

    this.apiService.postCall(this.apiService.baseURL + '/AddItemDiscount', this.addNewPreferredPartnerDiscount)
      .subscribe(data => {

        console.log(data);

        this.toastr.success(data, '', {
          timeOut: 5000,
        });
      },
        (error) => {
          this.toastr.error(error.error, '', {
            timeOut: 5000,
          });
        }
      )

    this.modalRef.hide();
  }

  openB2BModal(item, templateB2B) {

    this.selectedDiscountTypeTab1 = '';
    this.selectedDiscountTypeTab2 = '';
    this.selectedDiscountTypeTab3 = '';

    this.subItemID = item.RETAIL_SUB_ITEM_ID

    this.isRegularDiscountSelectedTab1 = false;
    this.isItemCountDiscountSelectedTab1 = false;
    this.isPromotionalDiscountSelectedTab1 = false;
    this.isPrefferdPartnerDiscountSelectedTab1 = false;

    this.isRegularDiscountSelectedTab2 = false;
    this.isItemCountDiscountSelectedTab2 = false;
    this.isPromotionalDiscountSelectedTab2 = false;
    this.isPrefferdPartnerDiscountSelectedTab2 = false;

    this.isRegularDiscountSelectedTab3 = false;
    this.isItemCountDiscountSelectedTab3 = false;
    this.isPromotionalDiscountSelectedTab3 = false;
    this.isPrefferdPartnerDiscountSelectedTab3 = false;

    this.b2bItemDiscount = {
      Acctid: +this.accountid,
      Subacctid: +this.subaccountid,
      Storeid: +this.storeid,
      ProductId: +this.productID,
      ItemId: +this.itemID,
      SubItemId: +this.subItemID,
      Retailer_Flg: 0,
      Distributor_Flg: 1,
      Franchisee_flg: 0,
      CountsOnCart: 1,
      PercntgFigure: 0,
      Percntg_Flg: 0,
      Regular_Discount_Flg: 0,
      Item_Counts_Discount_Flg: 0,
      Promotional_Discount_Flg: 0,
      FromDate: '',
      ToDate: ''
    };

    this.addNewPreferredPartnerDiscount = {
      ManufacturerAcctId: +this.accountid,
      ManufacturerSubacctId: +this.subaccountid,
      ManufacturerStoreId: +this.storeid,
      ProductId: +this.productID,
      ItemId: +this.itemID,
      SubitemId: +this.subItemID,
      DistributorFlg: 1,
      RetailerFlg: 0,
      FranchiseFlg: 0,
      PartnerSubacctId: 0,
      PartnerStoreId: 0,
      PercentFlag: 0,
      PrefDiscountNumber: 0,
      ValidFrom: '',
      ValidTo: ''
    };

    this.modalRef = this.modalService.show(templateB2B, Object.assign({}, { class: 'b2bModal' }));
    this.bebModalData = item;
  }

  getDiscount() {

    const payload = {
      SubacctId: +this.subaccountid,
      StoreId: +this.storeid,
      ProductId: +this.productID,
      ItemId: +this.itemID,
      SubitemId: +this.subItemID,
      DistributorFlg: this.addNewPreferredPartnerDiscount.DistributorFlg,
      RetailerFlg: this.addNewPreferredPartnerDiscount.RetailerFlg,
      FranchiseFlg: this.addNewPreferredPartnerDiscount.FranchiseFlg,
      RegularDiscountFlg: this.b2bItemDiscount.Regular_Discount_Flg,
      ItemCountsDiscountFlg: this.b2bItemDiscount.Item_Counts_Discount_Flg,
      PromotionalDiscountFlg: this.b2bItemDiscount.Promotional_Discount_Flg,
      PrefAccountDiscountFlg: !this.b2bItemDiscount.Regular_Discount_Flg && !this.b2bItemDiscount.Item_Counts_Discount_Flg && !this.b2bItemDiscount.Promotional_Discount_Flg ? 1 : 0
    }

    console.log(payload)

    this.apiService.postCall(this.apiService.baseURL + '/GetB2B_Discount_Details', payload)
      .subscribe(data => {

        console.log(data);
        this.dicountArr = Array.isArray(data) ? data.map((item: any) => ({
          RETAIL_B2B_DISCOUNT_FIGURE: item.RETAIL_B2B_DISCOUNT_FIGURE,
          RETAIL_B2B_DISCOUNT_ID: item.RETAIL_B2B_DISCOUNT_ID,
          RETAIL_B2B_DISCOUNT_TYPE: item.RETAIL_B2B_DISCOUNT_TYPE,
          RETAIL_B2B_DISCOUNT_VALD_FRM_DATE: item.RETAIL_B2B_DISCOUNT_VALD_FRM_DATE,
          RETAIL_B2B_DISCOUNT_VALID_TO_DATE: item.RETAIL_B2B_DISCOUNT_VALID_TO_DATE,
          RETAIL_B2B_ITEM_DISCNT_VALID_FLG: item.RETAIL_B2B_ITEM_DISCNT_VALID_FLG,
          RETAIL_B2B_ITEM_SPL_DISC_PERCNTG_FIG: item.RETAIL_B2B_ITEM_SPL_DISC_PERCNTG_FIG
        })) : [];

      },
        (error) => {
          this.toastr.error("No discount added.");
        }
      )

  }

  selectedDiscountTypeTab1: string = '';
  selectedDiscountTypeTab2: string = '';
  selectedDiscountTypeTab3: string = '';

  onTabChange(event: any) {
    // Reset all radio selections when switching tabs
    this.selectedDiscountTypeTab1 = '';
    this.selectedDiscountTypeTab2 = '';
    this.selectedDiscountTypeTab3 = '';

    // Optionally, reset your tab selection flags as well
    this.isRegularDiscountSelectedTab1 = false;
    this.isItemCountDiscountSelectedTab1 = false;
    this.isPromotionalDiscountSelectedTab1 = false;
    this.isPrefferdPartnerDiscountSelectedTab1 = false;

    this.isRegularDiscountSelectedTab2 = false;
    this.isItemCountDiscountSelectedTab2 = false;
    this.isPromotionalDiscountSelectedTab2 = false;
    this.isPrefferdPartnerDiscountSelectedTab2 = false;

    this.isRegularDiscountSelectedTab3 = false;
    this.isItemCountDiscountSelectedTab3 = false;
    this.isPromotionalDiscountSelectedTab3 = false;
    this.isPrefferdPartnerDiscountSelectedTab3 = false;
  }

  onSelecttab1(event: Event): void {
    const selectedValue = (event.target as HTMLInputElement).value;
    console.log('Selected Discount Type:', selectedValue);

    this.b2bItemDiscount.Franchisee_flg = this.addNewPreferredPartnerDiscount.FranchiseFlg = 0;
    this.b2bItemDiscount.Retailer_Flg = this.addNewPreferredPartnerDiscount.RetailerFlg = 0;
    this.b2bItemDiscount.Distributor_Flg = this.addNewPreferredPartnerDiscount.DistributorFlg = 1;

    switch (selectedValue) {
      case 'regularDiscount':
        this.isRegularDiscountSelectedTab1 = true;
        this.b2bItemDiscount.Regular_Discount_Flg = 1;
        this.isItemCountDiscountSelectedTab1 = false;
        this.b2bItemDiscount.Item_Counts_Discount_Flg = 0;
        this.isPromotionalDiscountSelectedTab1 = false;
        this.b2bItemDiscount.Promotional_Discount_Flg = 0;
        this.isPrefferdPartnerDiscountSelectedTab1 = false;

        break;
      case 'itemCountsDiscount':
        this.isRegularDiscountSelectedTab1 = false;
        this.b2bItemDiscount.Regular_Discount_Flg = 0;
        this.isItemCountDiscountSelectedTab1 = true;
        this.b2bItemDiscount.Item_Counts_Discount_Flg = 1;
        this.isPromotionalDiscountSelectedTab1 = false;
        this.b2bItemDiscount.Promotional_Discount_Flg = 0;
        this.isPrefferdPartnerDiscountSelectedTab1 = false;
        break;
      case 'promotionalDiscount':
        this.isRegularDiscountSelectedTab1 = false;
        this.b2bItemDiscount.Regular_Discount_Flg = 0;
        this.isItemCountDiscountSelectedTab1 = false;
        this.b2bItemDiscount.Item_Counts_Discount_Flg = 0;
        this.isPromotionalDiscountSelectedTab1 = true;
        this.b2bItemDiscount.Promotional_Discount_Flg = 1;
        this.isPrefferdPartnerDiscountSelectedTab1 = false;
        break;
      case 'prefferedPartnerDiscount':
        this.isRegularDiscountSelectedTab1 = false;
        this.b2bItemDiscount.Regular_Discount_Flg = 0;
        this.isItemCountDiscountSelectedTab1 = false;
        this.b2bItemDiscount.Item_Counts_Discount_Flg = 0;
        this.isPromotionalDiscountSelectedTab1 = false;
        this.b2bItemDiscount.Promotional_Discount_Flg = 0;
        this.isPrefferdPartnerDiscountSelectedTab1 = true;
        break;
      default:
        console.log('No valid discount type selected');

    }

    this.getDiscount()
  }

  onSelecttab2(event: Event): void {
    const selectedValue = (event.target as HTMLInputElement).value;
    console.log('Selected Discount Type:', selectedValue);

    this.b2bItemDiscount.Franchisee_flg = this.addNewPreferredPartnerDiscount.FranchiseFlg = 0;
    this.b2bItemDiscount.Retailer_Flg = this.addNewPreferredPartnerDiscount.RetailerFlg = 1;
    this.b2bItemDiscount.Distributor_Flg = this.addNewPreferredPartnerDiscount.DistributorFlg = 0;

    switch (selectedValue) {
      case 'regularDiscount':
        this.isRegularDiscountSelectedTab2 = true;
        this.b2bItemDiscount.Regular_Discount_Flg = 1;
        this.isItemCountDiscountSelectedTab2 = false;
        this.b2bItemDiscount.Item_Counts_Discount_Flg = 0;
        this.isPromotionalDiscountSelectedTab2 = false;
        this.b2bItemDiscount.Promotional_Discount_Flg = 0;
        this.isPrefferdPartnerDiscountSelectedTab2 = false;

        break;
      case 'itemCountsDiscount':
        this.isRegularDiscountSelectedTab2 = false;
        this.b2bItemDiscount.Regular_Discount_Flg = 0;
        this.isItemCountDiscountSelectedTab2 = true;
        this.b2bItemDiscount.Item_Counts_Discount_Flg = 1;
        this.isPromotionalDiscountSelectedTab2 = false;
        this.b2bItemDiscount.Promotional_Discount_Flg = 0;
        this.isPrefferdPartnerDiscountSelectedTab2 = false;
        break;
      case 'promotionalDiscount':
        this.isRegularDiscountSelectedTab2 = false;
        this.b2bItemDiscount.Regular_Discount_Flg = 0;
        this.isItemCountDiscountSelectedTab2 = false;
        this.b2bItemDiscount.Item_Counts_Discount_Flg = 0;
        this.isPromotionalDiscountSelectedTab2 = true;
        this.b2bItemDiscount.Promotional_Discount_Flg = 1;
        this.isPrefferdPartnerDiscountSelectedTab2 = false;
        break;
      case 'prefferedPartnerDiscount':
        this.isRegularDiscountSelectedTab2 = false;
        this.b2bItemDiscount.Regular_Discount_Flg = 0;
        this.isItemCountDiscountSelectedTab2 = false;
        this.b2bItemDiscount.Item_Counts_Discount_Flg = 0;
        this.isPromotionalDiscountSelectedTab2 = false;
        this.b2bItemDiscount.Promotional_Discount_Flg = 0;
        this.isPrefferdPartnerDiscountSelectedTab2 = true;
        break;
      default:
        console.log('No valid discount type selected');

    }

    this.getDiscount()
  }

  onSelecttab3(event: Event): void {
    const selectedValue = (event.target as HTMLInputElement).value;
    console.log('Selected Discount Type:', selectedValue);

    this.b2bItemDiscount.Franchisee_flg = this.addNewPreferredPartnerDiscount.FranchiseFlg = 1;
    this.b2bItemDiscount.Retailer_Flg = this.addNewPreferredPartnerDiscount.RetailerFlg = 0;
    this.b2bItemDiscount.Distributor_Flg = this.addNewPreferredPartnerDiscount.DistributorFlg = 0;

    switch (selectedValue) {
      case 'regularDiscount':
        this.isRegularDiscountSelectedTab3 = true;
        this.b2bItemDiscount.Regular_Discount_Flg = 1;
        this.isItemCountDiscountSelectedTab3 = false;
        this.b2bItemDiscount.Item_Counts_Discount_Flg = 0;
        this.isPromotionalDiscountSelectedTab3 = false;
        this.b2bItemDiscount.Promotional_Discount_Flg = 0;
        this.isPrefferdPartnerDiscountSelectedTab3 = false;

        break;
      case 'itemCountsDiscount':
        this.isRegularDiscountSelectedTab3 = false;
        this.b2bItemDiscount.Regular_Discount_Flg = 0;
        this.isItemCountDiscountSelectedTab3 = true;
        this.b2bItemDiscount.Item_Counts_Discount_Flg = 1;
        this.isPromotionalDiscountSelectedTab3 = false;
        this.b2bItemDiscount.Promotional_Discount_Flg = 0;
        this.isPrefferdPartnerDiscountSelectedTab3 = false;
        break;
      case 'promotionalDiscount':
        this.isRegularDiscountSelectedTab3 = false;
        this.b2bItemDiscount.Regular_Discount_Flg = 0;
        this.isItemCountDiscountSelectedTab3 = false;
        this.b2bItemDiscount.Item_Counts_Discount_Flg = 0;
        this.isPromotionalDiscountSelectedTab3 = true;
        this.b2bItemDiscount.Promotional_Discount_Flg = 1;
        this.isPrefferdPartnerDiscountSelectedTab3 = false;
        break;
      case 'prefferedPartnerDiscount':
        this.isRegularDiscountSelectedTab3 = false;
        this.b2bItemDiscount.Regular_Discount_Flg = 0;
        this.isItemCountDiscountSelectedTab3 = false;
        this.b2bItemDiscount.Item_Counts_Discount_Flg = 0;
        this.isPromotionalDiscountSelectedTab3 = false;
        this.b2bItemDiscount.Promotional_Discount_Flg = 0;
        this.isPrefferdPartnerDiscountSelectedTab3 = true;
        break;
      default:
        console.log('No valid discount type selected');

    }

    this.getDiscount()
  }

  openEditRegularDiscountModal(template, discount?) {

    if (discount) {
      this.discountEdit = {
        DiscountId: discount.RETAIL_B2B_DISCOUNT_ID,
        AcctBasedDiscntFlg: false,
        ItemCountsDiscntFlg: false,
        SubitemsCountsOnCart: 0,
        PercntgFlg: discount.RETAIL_B2B_ITEM_SPL_DISC_PERCNTG_FIG,
        PercntgFigure: discount.RETAIL_B2B_DISCOUNT_FIGURE,
        DateFrom: discount.RETAIL_B2B_DISCOUNT_VALD_FRM_DATE,
        DateTo: discount.RETAIL_B2B_DISCOUNT_VALID_TO_DATE,
      }

      this.DisDatefrom = discount.RETAIL_B2B_DISCOUNT_VALD_FRM_DATE ? new Date(discount.RETAIL_B2B_DISCOUNT_VALD_FRM_DATE) : null
      this.DisDateto = discount.RETAIL_B2B_DISCOUNT_VALID_TO_DATE ? new Date(discount.RETAIL_B2B_DISCOUNT_VALID_TO_DATE) : null
    }

    if (this.modalRef) {
      this.modalRef.hide();
    }
    this.modalRef = this.modalService.show(template, Object.assign({}, { class: 'width-720' }));
  }

  editDiscount(discount: any) {

    const payload = {
      ...discount,
      DateFrom: this.DisDatefrom ? this.DisDatefrom.toISOString() : '',
      DateTo: this.DisDateto ? this.DisDateto.toISOString() : '',
    };

    console.log(payload)

    this.apiService.postCall(this.apiService.baseURL + '/EditB2BDiscountNew', payload)
      .subscribe(data => {
        console.log(data);
        this.toastr.success(data.Message)
      },
        (error) => {
          this.toastr.error(error, '', {
            timeOut: 5000,
          });
        }
      )
    this.modalRef.hide();
  }

  openAddRegularDiscountModal(template) {
    if (this.modalRef) {
      this.modalRef.hide();
    }
    this.modalRef = this.modalService.show(template, Object.assign({}, { class: 'width-720' }));
  }

  openEditItemCountDiscountModal(template, discount?) {

    if (discount) {
      this.discountEdit = {
        DiscountId: discount.RETAIL_B2B_DISCOUNT_ID,
        AcctBasedDiscntFlg: false,
        ItemCountsDiscntFlg: false,
        SubitemsCountsOnCart: 0,
        PercntgFlg: discount.RETAIL_B2B_ITEM_SPL_DISC_PERCNTG_FIG,
        PercntgFigure: discount.RETAIL_B2B_DISCOUNT_FIGURE,
        DateFrom: discount.RETAIL_B2B_DISCOUNT_VALD_FRM_DATE,
        DateTo: discount.RETAIL_B2B_DISCOUNT_VALID_TO_DATE,
      }

      this.DisDatefrom = discount.RETAIL_B2B_DISCOUNT_VALD_FRM_DATE ? new Date(discount.RETAIL_B2B_DISCOUNT_VALD_FRM_DATE) : null
      this.DisDateto = discount.RETAIL_B2B_DISCOUNT_VALID_TO_DATE ? new Date(discount.RETAIL_B2B_DISCOUNT_VALID_TO_DATE) : null
    }

    if (this.modalRef) {
      this.modalRef.hide();
    }
    this.modalRef = this.modalService.show(template, Object.assign({}, { class: 'width-720' }));
  }

  openAddItemCountDiscountModal(template) {
    if (this.modalRef) {
      this.modalRef.hide();
    }
    this.modalRef = this.modalService.show(template, Object.assign({}, { class: 'width-720' }));
  }

  openEditPromotionalDiscountModal(template, discount?) {

    if (discount) {
      this.discountEdit = {
        DiscountId: discount.RETAIL_B2B_DISCOUNT_ID,
        AcctBasedDiscntFlg: false,
        ItemCountsDiscntFlg: false,
        SubitemsCountsOnCart: 0,
        PercntgFlg: discount.RETAIL_B2B_ITEM_SPL_DISC_PERCNTG_FIG,
        PercntgFigure: discount.RETAIL_B2B_DISCOUNT_FIGURE,
        DateFrom: discount.RETAIL_B2B_DISCOUNT_VALD_FRM_DATE,
        DateTo: discount.RETAIL_B2B_DISCOUNT_VALID_TO_DATE,
      }

      this.DisDatefrom = discount.RETAIL_B2B_DISCOUNT_VALD_FRM_DATE ? new Date(discount.RETAIL_B2B_DISCOUNT_VALD_FRM_DATE) : null
      this.DisDateto = discount.RETAIL_B2B_DISCOUNT_VALID_TO_DATE ? new Date(discount.RETAIL_B2B_DISCOUNT_VALID_TO_DATE) : null
    }

    if (this.modalRef) {
      this.modalRef.hide();
    }
    this.modalRef = this.modalService.show(template, Object.assign({}, { class: 'width-720' }));
  }

  openAddPromotionaliscountModal(template) {
    if (this.modalRef) {
      this.modalRef.hide();
    }
    this.modalRef = this.modalService.show(template, Object.assign({}, { class: 'width-720' }));
  }

  openEditPrefferedDiscountModal(template, discount?) {
    if (this.modalRef) {
      this.modalRef.hide();
    }
    this.modalRef = this.modalService.show(template, Object.assign({}, { class: 'width-720' }));
  }

  openAddPrefferediscountModal(template) {

    const payload = {
      PlatformId: '2',
      PrimaryStoreId: this.storeid,
      PrimarySubaccountId: this.subaccountid
    }

    console.log("payload: ", payload)

    this.apiService.postCall(this.apiService.baseURL + '/GetSecondaryAccounts', payload)
      .subscribe(data => {
        console.log(data);

        this.secondaryAcc = (data as any[]).map(item => ({
          CategoryId: item.CategoryId,
          DomainId: item.DomainId ?? null,
          LinkSeqId: item.LinkSeqId,
          OfficeName: item.OfficeName,
          StoreId: item.StoreId,
          SubaccountId: item.SubaccountId
        }));

      },
        (error) => {
          this.toastr.error(error, '', {
            timeOut: 5000,
          });
        }
      )

    if (this.modalRef) {
      this.modalRef.hide();
    }
    this.modalRef = this.modalService.show(template, Object.assign({}, { class: 'width-720' }));
  }

  onSelectNetworkAcc(e) {
    const selectedValue = e.target.value;
    this.addNewPreferredPartnerDiscount.PartnerSubacctId = selectedValue;
    const selectedSecondaryAcc = this.secondaryAcc.find(acc => acc.SubaccountId === selectedValue);
    this.addNewPreferredPartnerDiscount.PartnerStoreId = selectedSecondaryAcc ? +selectedSecondaryAcc.StoreId : 0;
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
    }
  }

  getState() {
    this.apiService.StateList(this.countryID).subscribe((res) => {
      this.stateList = res;
      console.log(this.stateList);
    });
  }

  changeState(e) {

    this.stateID = e.target.value;
    this.stateEvent.emit(this.stateID);
    this.stateName = e.target.options[e.target.options.selectedIndex].text;
    if (this.stateID) {
      this.getCity();
      this.cityList = null;
    }
    else {
      this.cityList = null;
    }

  }

  getCity() {
    this.apiService.CityList(this.countryID, this.stateID).subscribe((res) => {
      this.cityList = res;
      console.log(this.cityList);
    });
  }
  changeCity(e) {
    this.cityID = e.target.value;
    console.log(this.cityID);
    this.cityEvent.emit(this.cityID)
    this.cityName = e.target.options[e.target.options.selectedIndex].text;
  }

}



