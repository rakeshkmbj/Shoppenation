import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormGroup, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';
import { NgxSpinnerService } from "ngx-spinner";
import { NavigationExtras, Router } from '@angular/router';

interface SecondaryAccountLink {
  ACCT_PRIMRY_SECNDRY_B2B_LINK_SEQ_ID: string;
  CategoryName: string;
  ECOMM_PLATFORM_ID: string;
  PRIMRY_SECNDRY_ACCTS_b2B_ACTIV_FLG: boolean;
  RETAIL_D2C_SUBACCT_OFFICE_CITY: number;
  RETAIL_D2C_SUBACCT_OFFICE_CNTRY: number;
  RETAIL_D2C_SUBACCT_OFFICE_NAME: string;
  RETAIL_D2C_SUBACCT_OFFICE_STATE: number;
  SECOND_NODE_ACCT_CATEGORY_ID: string;
  SECOND_NODE_ACCT_STORE_ID: string;
  SECOND_NODE_ACCT_SUBACCT_ID: string;
}

interface TertiaryAccountLink {
  ACCTS_B2B2C_ACTIV_FLG: boolean | null;
  ACCTS_SECNDRY_TERITIARY_B2B_LINK_SEQ_ID: string;
  CategoryName: string | null;
  RETAIL_D2C_SUBACCT_OFFICE_CITY: number;
  RETAIL_D2C_SUBACCT_OFFICE_CNTRY: number;
  RETAIL_D2C_SUBACCT_OFFICE_NAME: string;
  RETAIL_D2C_SUBACCT_OFFICE_STATE: number;
  SECNDRY_TERITIARY_ACCTS_b2B_ACTIV_FLG: boolean;
  THIRD_NODE_ACCT_CATEGORY_ID: string | null;
  THIRD_NODE_ACCT_STORE_ID: string;
  THIRD_NODE_ACCT_SUBACCT_ID: string;
}
interface StoreSfaList {
  SubacctId: number;
  StoreId: number;
  ForTeritiarySalesFlg: boolean;
  ForSecondarySalesFlg: boolean;
  ForPrimaryPurchaseFlg: boolean;
}
interface AddressContact {
  storeName: string;
  Country: number;
  State: number;
  City: number;
  Pincode: string;
  Address: string;
}


@Component({
  selector: 'app-orders-pending-list-d2-c-idc-pos',
  templateUrl: './orders-pending-list-d2-c-idc-pos.component.html',
  styleUrls: ['./orders-pending-list-d2-c-idc-pos.component.scss']
})
export class OrdersPendingListD2CIDCPOSComponent implements OnInit {
  imgURL = this.apiService.imgURL;
  storelist: any;
  confirmDashboardForm: FormGroup;
  channelOrder: FormGroup;
  storeID: any;
  storeName: any;
  confirmDashboardData: any;
  isSubmitted = false;
  homeDeliveryOrderList: any;
  selfDeliveryOrderList: any;

  homeDeliveryOrderList2: any;
  selfDeliveryOrderList2: any;

  homeDeliveryOrderList3: any;
  selfDeliveryOrderList3: any;

  addressRef: any

  checkedIcon: string = 'assets/images/active_icon1.png';
  modalRef?: BsModalRef;
  orderDetailsData: any;
  orderNumber: any;
  yesText: string;
  yesNoText: string;
  invoiceData: any;
  invoiceCartData = [];
  invoiceyesNoText = '';
  homeDeliveryFlag: string;
  selfTakeAwayFlag: string;
  donationFlag: string;
  holidayFlag: string;
  regularDayFlag: string;
  discountFlag: string;
  percentageFlag: string;
  orderProceedFalse: boolean = true;
  orderProceedTrue: boolean = false;
  getlogindata: any;
  accountid: any;
  subaccountid: any;
  storeid: any;
  domainid: any;
  processOrderData: { RETAIL_ACCOUNT_ID: any; RETAIL_SUBACCT_ID: any; RETAIL_STORE_ID: number; RETAIL_ORDER_NUMBR: any; RETAIL_STD_PACAKAGING_SELFTAKEAWAY_FLG: boolean; RETAIL_STD_PACAKAGING_HYPER_LOCAL_DELIVERY_FLG: boolean; RETAIL_NO_PACKING_CONSOLDTD_WALKIN_TYPE_FLG: boolean; RETAIL_NO_PACKING_PARTIAL_WALKIN_TYPE_FLG: boolean; };
  cartid: any;
  cartData: any;
  domainList: [];
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
  secondryNodeAccArr: SecondaryAccountLink[] = [];
  secondryNodeAccArr2: SecondaryAccountLink[] = [];
  secondryNodeAccArr3: SecondaryAccountLink[] = [];
  thirdNodeAccArr: TertiaryAccountLink[] = [];
  showNetworkList = false
  showThirdNodeAcc = false
  webStoreForm: FormGroup;
  productID: any;
  productName: any;
  showWebstore: any;
  itemLists: any;
  itemListsforitembased: any;
  productLineList: any;
  itemId: any;
  productLineInventoryList: any;
  collection = [];
  filterItemList: any;
  p: number = 1;
  stockinStore: number;
  isShowView: boolean = false
  selectedDashboard: string = '';
  showDash = ''
  viewStocksModalRef: any;
  sfaAccountArr: any;

  storeAddress: AddressContact = {
    storeName: '',
    Country: 0,
    State: 0,
    City: 0,
    Pincode: '',
    Address: ''
  };

  // Variables for each heading type
  generateResGeoBased: boolean = false;
  generateResGeoProductBased: boolean = false;
  generateResItemBased: boolean = false;
  generateResChannelBased: boolean = false;
  generateResSFAExecBased: boolean = false;

  // Geo Based
  basedOnSelectionGeo: string = '';
  tempbasedOnSelectionGeo: string = '';
  showSAFormGeo: boolean;

  // Geo Product Based
  basedOnSelectionGeoProduct: string = '';
  tempbasedOnSelectionGeoProduct: string = '';
  showSAFormGeoProduct: boolean;

  // Item Based
  basedOnSelectionItem: string = '';
  tempbasedOnSelectionItem: string = '';
  showSAFormItem: boolean;

  // Channel Based
  basedOnSelectionChannel: string = '';
  tempbasedOnSelectionChannel: string = '';
  showSAFormChannel: boolean;

  // SFA Exec Based
  basedOnSelectionSFAExec: string = '';
  tempbasedOnSelectionSFAExec: string = '';
  showSAFormSFAExec: boolean;

  PRIMARY_SELLER_FLG: boolean;

  storeSfaList: StoreSfaList = {
    SubacctId: 0,
    StoreId: 0,
    ForTeritiarySalesFlg: false,
    ForSecondarySalesFlg: false,
    ForPrimaryPurchaseFlg: false
  }

  constructor(
    private apiService: ApiService,
    private modalService: BsModalService,
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService) {
    this.PRIMARY_SELLER_FLG = this.apiService.requiredLoginData.PRIMARY_SELLER_FLG;
    this.accountid = this.apiService.requiredLoginData.accountid;
    this.subaccountid = this.apiService.requiredLoginData.subaccountid;
    this.storeid = this.apiService.requiredLoginData.storeid;
    this.storeName = this.apiService.requiredLoginData.storeName;
    this.domainid = this.apiService.requiredLoginData.domainid;
  }

  ngOnInit(): void {
    this.getStoreList();
    this.getCountry();

    // this.ViewDeliveryDetailsofOrderbyStore();
    this.confirmDashboardForm = this.formBuilder.group({
      STORE_ID: [this.storeid, [Validators.required]],
      SELECTED_DATE_FROM: ['', Validators.required],
      SELECTED_DATE_TO: ['', Validators.required],
    });

    this.channelOrder = this.formBuilder.group({
      COUNTRTY: ['', Validators.required],
      STATE: ['', Validators.required],
      CITY: ['', Validators.required],
      CHANNEL: ['', Validators.required],
      CHANNEL_SELECTED_DATE_FROM: ['', Validators.required],
      CHANNEL_SELECTED_DATE_TO: ['', Validators.required],
    });

    this.getProductLineList();

    this.webStoreForm = this.formBuilder.group({
      ACCT_ID: this.accountid,
      SUBACCT_ID: this.subaccountid,
      SUBACCT_OFFICE_ID: this.storeid,
      RETAIL_D2C_DOMAIN_ID: ['', Validators.required],
      RETAIL_D2C_PRODUCT_ID: ['', Validators.required],
      ProductId: '',
      itemId: ''

    });

  }

  onSelectBasedOn(event: Event, heading: string) {
    const value = (event.target as HTMLSelectElement).value;
    switch (heading) {
      case 'Geo Based':
        this.tempbasedOnSelectionGeo = value;
        break;
      case 'Geo Product Based':
        this.tempbasedOnSelectionGeoProduct = value;
        break;
      case 'Item Based':
        this.tempbasedOnSelectionItem = value;
        break;
      case 'Channel Based':
        this.tempbasedOnSelectionChannel = value;
        break;
      case 'SFA Exec Based':
        this.tempbasedOnSelectionSFAExec = value;
        break;
      default:
        break;
    }
    console.log(`Based On selected for ${heading}:`, value);
  }

  onSATabChange(heading) {

    if (heading == 'Geo Based') {

    } else if (heading == 'Geo Product Based') {

    } else if (heading == 'Item Based') {

    } else if (heading == 'Channel Based') {

    } else if (heading == 'SFA Exec Based') {

    }
  }

  showAnalysis(heading: string) {
    if (heading == 'Geo Based') {
      this.generateResGeoBased = true;
    } else if (heading == 'Geo Product Based') {
      this.generateResGeoProductBased = true;
    } else if (heading == 'Item Based') {
      this.generateResItemBased = true;
    } else if (heading == 'Channel Based') {
      this.generateResChannelBased = true;
    } else if (heading == 'SFA Exec Based') {
      this.generateResSFAExecBased = true;
    }
  }

  showSaForm(heading: string) {
    switch (heading) {
      case 'Geo Based':
        this.basedOnSelectionGeo = this.tempbasedOnSelectionGeo;
        this.showSAFormGeo = !!this.basedOnSelectionGeo;
        break;
      case 'Geo Product Based':
        this.basedOnSelectionGeoProduct = this.tempbasedOnSelectionGeoProduct;
        this.showSAFormGeoProduct = !!this.basedOnSelectionGeoProduct;
        break;
      case 'Item Based':
        this.basedOnSelectionItem = this.tempbasedOnSelectionItem;
        this.showSAFormItem = !!this.basedOnSelectionItem;
        break;
      case 'Channel Based':
        this.basedOnSelectionChannel = this.tempbasedOnSelectionChannel;
        this.showSAFormChannel = !!this.basedOnSelectionChannel;
        break;
      case 'SFA Exec Based':
        this.basedOnSelectionSFAExec = this.tempbasedOnSelectionSFAExec;
        this.showSAFormSFAExec = !!this.basedOnSelectionSFAExec;
        break;
      default:
        break;
    }
  }

  onKeyInput(event: any) {
    console.log(event.target.value);
    this.stockinStore = event.target.value;
  }

  onPItemChange(e) {
    this.itemId = this.webStoreForm.value.itemId;
    if (this.itemId === "" || this.itemId === null) {
    }
    else {
      this.showWebstore = false;
    }

  }

  movementName = ''

  stockMovement(name, template) {

    if (name === 'inward') {
      this.movementName = "Inward"
    } else {
      this.movementName = "Outward"
    }

    this.viewStocksModalRef = this.modalService.show(template, { class: 'modal-xl' });
  }

  getProductLineList() {
    this.apiService.getCall(this.apiService.baseURL + '/GetStoreProductLines/' + this.accountid + "/" + this.subaccountid + "/" + this.storeid)
      .subscribe(data => {
        this.productLineList = data;
        console.log(data);
      })
  }


  getAllItemSubItemAvailableForInventoryForselectedChannel() {
    this.apiService.getCall(this.apiService.baseURL + '/GetAllItemSubItemAvailableForInventory' + "/" + this.domainid + "/" + this.accountid + "/" + this.selectedChannel.SECOND_NODE_ACCT_SUBACCT_ID + "/" + this.selectedChannel.SECOND_NODE_ACCT_STORE_ID + "/" + this.productID + "/" + this.itemId)
      .subscribe(data => {
        this.productLineInventoryList = data;
        console.log(data);
        for (let i = 1; i <= this.productLineInventoryList.length; i++) {
          this.collection.push(`item ${i}`);
        }
        this.showWebstore = true;
        this.p = 1;
        this.filterItemList = this.productLineInventoryList.reduce((unique, o) => {
          if (!unique.some(obj => obj.ItemId === o.ItemId && obj.value === o.value)) {
            unique.push(o);
          }
          return unique;
        }, []);

      },
        (error) => {
          console.log(error);
          this.toastr.error(error.error.Message, '', {
            timeOut: 5000,
          });
          this.showWebstore = false;
        });
  }

  onretailDropshipStoreChange(e) {
    this.productID = this.webStoreForm.value.RETAIL_D2C_PRODUCT_ID;
    if (this.productID === "" || this.productID === null) {
    }
    else {
      this.productName = e.target.options[e.target.options.selectedIndex].text;
      console.log(this.productID);
      this.GetItemListOfStore();
      this.showWebstore = false;
    }
  }

  onSelectProductLine(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const productId = selectElement.value;

    this.apiService.getCall(this.apiService.baseURL + '/GetStoreProductItemList/' + this.accountid + "/" + this.subaccountid + "/" + this.storeid + "/" + productId)
      .subscribe(data => {
        console.log(data);
        this.itemListsforitembased = data;
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

  GetItemListOfStore() {
    this.apiService.getCall(this.apiService.baseURL + '/GetStoreProductItemList/' + this.accountid + "/" + this.subaccountid + "/" + this.storeid + "/" + this.productID)
      .subscribe(data => {
        console.log(data);
        this.itemLists = data;
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

  getCountry() {
    this.apiService.CountryList().subscribe((res) => {
      this.countryList = res;
      //   this.getState();
    });
  }

  changeCountry(e) {
    this.countryID = e.target.value;
    console.log(this.countryID);
    // this.countryName = e.target.options[e.target.options.selectedIndex].text;
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
      console.log(this.stateList);
    });
  }

  changeState(e) {
    this.stateID = e.target.value;
    this.stateName = e.target.options[e.target.options.selectedIndex].text;
    if (this.countryID) {
      this.getCity();
    }
    else {
      this.cityList = null;
      this.zipList = null;
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
    this.cityName = e.target.options[e.target.options.selectedIndex].text;
  }

  getChannel(e, number: number) {
    this.stateID = e.target.value;
    this.stateName = e.target.options[e.target.options.selectedIndex].text;
    if (this.countryID) {
      this.getCity();
    }
    else {
      this.cityList = null;
      this.zipList = null;
    }

    console.log("inside get channel")

    this.onSecondNodeNetwork(number)
  }

  toChannelValue(item: any): string {
    return JSON.stringify({
      subaccId: item.SECOND_NODE_ACCT_SUBACCT_ID,
      storeId: item.SECOND_NODE_ACCT_STORE_ID
    });
  }

  onChannelChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const value = selectElement.value;
    if (value) {
      const { subaccId, storeId } = JSON.parse(value);
      this.storeSfaList.SubacctId = subaccId;
      this.storeSfaList.StoreId = storeId;
    }
  }

  onAccountCategoryChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const selectedCategory = selectElement.value;

    this.storeSfaList = {
      SubacctId: 0,
      StoreId: 0,
      ForTeritiarySalesFlg: false,
      ForSecondarySalesFlg: false,
      ForPrimaryPurchaseFlg: false
    }

    if (selectedCategory === 'primary') {
      this.storeSfaList.ForPrimaryPurchaseFlg = true;
      this.storeSfaList.ForSecondarySalesFlg = false;
      this.storeSfaList.ForTeritiarySalesFlg = false;
    } else if (selectedCategory === 'secondary') {
      this.storeSfaList.ForPrimaryPurchaseFlg = false;
      this.storeSfaList.ForSecondarySalesFlg = true;
      this.storeSfaList.ForTeritiarySalesFlg = false;
    } else {
      this.storeSfaList.ForPrimaryPurchaseFlg = false;
      this.storeSfaList.ForSecondarySalesFlg = false;
      this.storeSfaList.ForTeritiarySalesFlg = true;
    }

    console.log("Payload: ", this.storeSfaList)


    this.apiService.postCall(this.apiService.baseURL + '/GetStoreSfaExecList', this.storeSfaList)
      .subscribe(data => {
        this.sfaAccountArr = data;
        console.log(this.sfaAccountArr);
      },
        (error) => {
          this.toastr.error(error.error.Message, '', {
            timeOut: 5000,
          });
        });
  }

  onSecondNodeNetwork(number?: number) {

    this.thirdNodeAccArr = [];
    this.showThirdNodeAcc = false;

    const payload = {
      Cntryid: this.countryID,
      Stateid: this.stateID,
      Secnd_node_flg: true,
      Third_node_flg: false,
      Subacctid: this.subaccountid,
      Storeid: this.storeid,
      B2b_id: "RH1"
    }

    console.log("payload: ", payload)

    this.apiService.postCall(`${this.apiService.baseURL}/GetAcctNetwork`, payload)
      .subscribe(data => {
        console.log(data);

        if (number == 2) {
          this.secondryNodeAccArr2 = Array.isArray(data) ? data : [];
        } else if (number == 3) {
          this.secondryNodeAccArr3 = Array.isArray(data) ? data : [];
        } else {
          this.secondryNodeAccArr = Array.isArray(data) ? data : [];

          console.log("Secondary Node Acc: ", this.secondryNodeAccArr)

          if (this.secondryNodeAccArr.length > 0) {
            this.showNetworkList = true;
          } else {
            this.showNetworkList = false;
            this.toastr.error("No Accounts avaliable")
          }
        }

      },
        (error) => {
          console.log(error);
          this.toastr.error(error.error, '', {
            timeOut: 5000,
          });
        }
      );

  }

  onStoreChange(e) {
    this.storeID = this.confirmDashboardForm.value.STORE_ID;
    this.storeName = e.target.options[e.target.options.selectedIndex].text;
    console.log(this.storeID);
  }


  getStoreList() {
    this.apiService.storeList().subscribe((data) => {
      this.storelist = data;
      console.log(this.storelist);
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.confirmDashboardForm.controls;
  }

  confirmDeliveryStatus(number?: number) {
    this.isSubmitted = true;
    this.spinner.show();

    if (!this.confirmDashboardForm.valid) {
      this.spinner.hide();
      return false;

    } else {
      let fromDate = this.confirmDashboardForm.value.SELECTED_DATE_FROM;
      let isofromDate = new Date(fromDate.getTime() - fromDate.getTimezoneOffset() * 60000).toISOString();
      let toDate = this.confirmDashboardForm.value.SELECTED_DATE_TO;
      let isotoDate = new Date(toDate.getTime() - toDate.getTimezoneOffset() * 60000).toISOString();

      // let data = {
      //   ACCT_ID: this.accountid,
      //   SUBACCT_ID: this.subaccountid,
      //   STORE_ID: + this.confirmDashboardForm.value.STORE_ID,
      //   SELECTED_DATE_FROM: isofromDate,
      //   SELECTED_DATE_TO: isotoDate,
      // }

      let tempData = {}
      if (number) {
        tempData = {
          ACCT_ID: this.accountid,
          SUBACCT_ID: this.selectedChannel.SECOND_NODE_ACCT_SUBACCT_ID,
          STORE_ID: this.selectedChannel.SECOND_NODE_ACCT_STORE_ID,
          SELECTED_DATE_FROM: isofromDate,
          SELECTED_DATE_TO: isotoDate,
        }
      } else {
        tempData = {
          ACCT_ID: 8,
          SUBACCT_ID: 40,
          STORE_ID: 27,
          SELECTED_DATE_FROM: isofromDate,
          SELECTED_DATE_TO: isotoDate,
        }
      }


      this.apiService.postCall(this.apiService.baseURL + '/ListingofConfirmedDeliveryOrdersDeliveryStatus', tempData)
        .subscribe(data => {
          this.confirmDashboardData = data;
          console.log(data);
          this.spinner.hide();

          if (number) {
            this.homeDeliveryOrderList2 = data.HOME_DELIVERY_ORDER_LIST_DASHBOARD;
            this.selfDeliveryOrderList2 = data.SELF_TAKEAWAY_ORDER_LIST_DASHBOARD;
          } else {
            this.homeDeliveryOrderList = data.HOME_DELIVERY_ORDER_LIST_DASHBOARD;
            this.selfDeliveryOrderList = data.SELF_TAKEAWAY_ORDER_LIST_DASHBOARD;
          }


          // if (this.confirmDashboardData.Order_In_Store_Flag == true) {
          //   this.checkedIcon = 'assets/images/active_icon1.png';
          // }
          // else if (this.confirmDashboardData.Order_In_Store_Flag == false) {
          //   this.checkedIcon = 'assets/images/deactive_icon1.png';
          // }

          // else if (this.homeDeliveryOrderList.RETAIL_D2C_ORDER_DELIVERY_TAKEN_FRM_VEND_FLAG == true) {
          //   this.checkedIcon = 'assets/images/active_icon1.png';
          // }
          // else if (this.homeDeliveryOrderList.RETAIL_D2C_ORDER_DELIVERY_TAKEN_FRM_VEND_FLAG == false) {
          //   this.checkedIcon = 'assets/images/deactive_icon1.png';
          // }

          // else if (this.homeDeliveryOrderList.RETAIL_D2C_ORDER_DELIVERD_TO_CUSTMR_FLG == true) {
          //   this.checkedIcon = 'assets/images/active_icon1.png';
          // }
          // else if (this.homeDeliveryOrderList.RETAIL_D2C_ORDER_DELIVERD_TO_CUSTMR_FLG == false) {
          //   this.checkedIcon = 'assets/images/deactive_icon1.png';
          // }

        },
          (error) => {
            this.toastr.error(error.error.Message, '', {
              timeOut: 5000,
            });
          });
    }
  }

  /*   ViewDeliveryDetailsofOrderbyStore(orderNumber, orderDetailsModal) {
      this.orderNumber = orderNumber;
      let deliveryData = {
        RETAIL_ORDER_NUMBR: orderNumber,
        DELIVERY_TYPE_SELF_TAKEAWAY_FLG: false,
        DELIVERY_TYPE_HOME_DELIVERY_FLG: true
      }
      console.log(deliveryData);
      this.apiService.postCall(this.apiService.baseURL + '/ViewDeliveryDetailsofOrderbyStore', deliveryData)
        .subscribe(data => {
          if (data) {
            this.modalRef = this.modalService.show(orderDetailsModal, Object.assign({}, { class: 'orderDetailsModal' }));
            this.orderDetailsData = data;
            if (this.orderDetailsData.RETAIL_D2C_ORDER_DELIVERY_TAKEN_FRM_VEND_FLAG == true) {
              this.yesNoText = "Yes"
            }
            else if (this.orderDetailsData.RETAIL_D2C_ORDER_DELIVERY_TAKEN_FRM_VEND_FLAG == false) {
              this.yesNoText = "No"
            }
            else if (this.orderDetailsData.RETAIL_D2C_ORDER_DELIVERD_TO_CUSTMR_FLG == true) {
              this.yesNoText = "Yes"
            }
   
            else if (this.orderDetailsData.RETAIL_D2C_ORDER_DELIVERD_TO_CUSTMR_FLG == false) {
              this.yesNoText = "No"
            }
            else if (this.orderDetailsData.RETAIL_D2C_TRIP_ALLOCATED_TO_VAHAN_FLG == true) {
              this.yesNoText = "Yes"
            }
   
            else if (this.orderDetailsData.RETAIL_D2C_TRIP_ALLOCATED_TO_VAHAN_FLG == false) {
              this.yesNoText = "No"
            }
   
          }
   
          console.log(data);
        },
          (error) => {
            this.toastr.error(error.error.Message, '', {
              timeOut: 5000,
            });
          });
    } */

  closeModal() {
    this.modalRef?.hide();
  }


  viewInvoiceDetails(orderNumber, invoiceDetailsModal) {
    this.apiService.getCall(this.apiService.baseURL + '/ViewInvoiceDetailsofOrderbyStore/' + orderNumber)
      .subscribe(data => {
        console.log(data);
        this.invoiceData = data;
        this.invoiceCartData = data.CART_Items_List;
        console.log(this.invoiceCartData);
        if (this.invoiceData) {
          this.modalRef = this.modalService.show(invoiceDetailsModal, Object.assign({}, { class: 'invoiceDetailsModal' }));
          if (this.invoiceData.RETAIL_D2C_DELIVERY_TYPE_HOME_DELIVERY_FLG == true) {
            this.homeDeliveryFlag = "Yes"
          }

          if (this.invoiceData.RETAIL_D2C_DELIVERY_TYPE_HOME_DELIVERY_FLG == false) {
            this.homeDeliveryFlag = "No"
          }
          if (this.invoiceData.RETAIL_D2C_DELIVERY_TYPE_SELF_TAKEAWAY_FLG == true) {
            this.selfTakeAwayFlag = "Yes"
          }

          if (this.invoiceData.RETAIL_D2C_DELIVERY_TYPE_SELF_TAKEAWAY_FLG == false) {

            this.selfTakeAwayFlag = "No"
          }

          if (this.invoiceData.RETAIL_D2C_CUSTOMER_DONATION_FLAG == true) {
            this.donationFlag = "Yes"
          }
          if (this.invoiceData.RETAIL_D2C_CUSTOMER_DONATION_FLAG == false) {
            this.donationFlag = "No"
          }
          if (this.invoiceData.RETAIL_D2C_INVOICED_ON_HOLIDAY_FLAG == true) {
            this.holidayFlag = "Yes"
          }
          if (this.invoiceData.RETAIL_D2C_INVOICED_ON_HOLIDAY_FLAG == false) {
            this.holidayFlag = "No"
          }
          if (this.invoiceData.RETAIL_D2C_INVOICED_ON_REGULAR_DAY_FLAG == true) {
            this.regularDayFlag = "Yes"
          }
          if (this.invoiceData.RETAIL_D2C_INVOICED_ON_REGULAR_DAY_FLAG == false) {
            this.regularDayFlag = "No"
          }

          //  if (this.invoiceCartData.RETAIL_D2C_DISCOUNT_AVAILABLE_FLG == true) {
          //     this.discountFlag = "Yes"
          //   }
          //  if (this.invoiceData.invoiceCartData.RETAIL_D2C_DISCOUNT_AVAILABLE_FLG == false) {
          //   this.discountFlag = "No"
          // }

          //  if (this.invoiceData.invoiceCartData.RETAIL_D2C_DISCOUNT_PERCENTAGE_FLG == true) {
          //   this.percentageFlag = "Yes"
          // }
          // if (this.invoiceData.invoiceCartData.RETAIL_D2C_DISCOUNT_PERCENTAGE_FLG == false) {
          //   this.percentageFlag = "No"
          // }
        }
      },
        (error) => {
          this.toastr.error(error.error.Message, '', {
            timeOut: 5000,
          });
        });
  }

  processOrderWorkflow(deliveryType, orderNumber) {
    console.log(deliveryType);
    if (deliveryType == 'homeDelivery') {
      this.processOrderData = {
        RETAIL_ACCOUNT_ID: this.accountid,
        RETAIL_SUBACCT_ID: this.subaccountid,
        RETAIL_STORE_ID: + this.confirmDashboardForm.value.STORE_ID,
        RETAIL_ORDER_NUMBR: orderNumber,
        RETAIL_STD_PACAKAGING_SELFTAKEAWAY_FLG: false,
        RETAIL_STD_PACAKAGING_HYPER_LOCAL_DELIVERY_FLG: true,
        RETAIL_NO_PACKING_CONSOLDTD_WALKIN_TYPE_FLG: false,
        RETAIL_NO_PACKING_PARTIAL_WALKIN_TYPE_FLG: false
      }
    }
    else {
      this.processOrderData = {
        RETAIL_ACCOUNT_ID: this.accountid,
        RETAIL_SUBACCT_ID: this.subaccountid,
        RETAIL_STORE_ID: + this.confirmDashboardForm.value.STORE_ID,
        RETAIL_ORDER_NUMBR: orderNumber,
        RETAIL_STD_PACAKAGING_SELFTAKEAWAY_FLG: true,
        RETAIL_STD_PACAKAGING_HYPER_LOCAL_DELIVERY_FLG: false,
        RETAIL_NO_PACKING_CONSOLDTD_WALKIN_TYPE_FLG: false,
        RETAIL_NO_PACKING_PARTIAL_WALKIN_TYPE_FLG: false
      }
    }

    this.apiService.postCall(this.apiService.baseURL + '/ProcessOrderWorkflow', this.processOrderData)
      .subscribe(data => {
        console.log(data);
        this.orderProceedTrue = true;
        this.orderProceedFalse = false;

        this.confirmDeliveryStatus();
        if (data == null) {
          this.toastr.error('Process Order done already!', '', {
            timeOut: 5000,
          });
        }

        else {
          this.toastr.success(data.message, '', {
            timeOut: 5000,
          });

        }
      },
        (error) => {
          this.toastr.error(error.error.Message, '', {
            timeOut: 5000,
          });
        });
  }

  selectedChannel: any;

  openView(item) {
    this.selectedChannel = item;
    this.isShowView = !this.isShowView;
  }

  onDashboardSelect(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const selectedValue = selectElement.value;

    if (selectedValue === 'Online Order Dashboard') {
      this.selectedDashboard = selectedValue;
    } else if (selectedValue === 'Stocks Inventory Dashboard') {
      this.selectedDashboard = selectedValue;
    } else {
      this.selectedDashboard = '';
    }
  }

  showDashboard() {
    this.showDash = this.selectedDashboard;
  }

  viewCustomerModal(viewcustomer: TemplateRef<any>) {
    this.modalRef = this.modalService.show(viewcustomer, Object.assign({}, { class: 'customerModal' }));
  }

  openCartModal(cartID, template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, Object.assign({}, { class: 'cartModal' }));
    this.cartid = cartID;
    this.viewCartonStoreDashboard(cartID);
  }

  viewCartonStoreDashboard(cartID) {
    this.apiService.getCall(this.apiService.baseURL + '/ViewCartonStoreDashboard/' + cartID)
      .subscribe(data => {
        this.cartData = data;
      },
        (error) => {
          console.log(error);
          this.modalService.hide();
          this.toastr.error(error.error, '', {
            timeOut: 5000,
          })
        }
      );
  }

  viewOrderFulfillmentonStoreDashboard(orderNumber) {
    this.apiService.getCall(this.apiService.baseURL + '/ViewOrderFulfillmentonStoreDashboard/' + orderNumber)
      .subscribe(data => {
        this.orderDetailsData = data;
        this.router.navigateByUrl('/opld2cidcPOS/orderfulfillment', { state: { orderDetails: this.orderDetailsData, orderNumber: orderNumber } });
        //  this.router.navigate(["StoreeCommerceManager/opld2cidcPOS/orderfulfillment"],  navigationExtras);


        // if (data) {
        //   this.modalRef = this.modalService.show(orderDetailsModal, Object.assign({}, { class: 'orderDetailsModal' }));
        //   this.orderDetailsData = data;
        //   }

        console.log(data);
      },
        (error) => {
          this.toastr.error(error.error.message, '', {
            timeOut: 5000,
          });
        });
  }

  orderFulfillment() {
    this.router.navigate(['/orderfulfillment']);
  }

  // showAddress(address, SellerStoreName: string, SellerStoreAddress: string) {
  //   this.modalRef.hide()
  //   this.selectedStoreName = SellerStoreName;
  //   this.selectedStoreAddress = SellerStoreAddress;
  //   this.addressRef = this.modalService.show(address, { class: 'modal-md' });
  // }

  openSNAddress(name: string, subaccid: any, storeid: any, template) {

    const payload = {
      Subacctid: subaccid,
      Storeid: storeid
    }

    this.apiService.postCall(`${this.apiService.baseURL}/GetAcctAddressContact`, payload)
      .subscribe(data => {
        console.log(data);

        this.storeAddress = {
          storeName: name,
          Country: data.Country,
          State: data.State,
          City: data.City,
          Pincode: data.Pincode,
          Address: data.Address
        };

      },
        (error) => {
          console.log(error);
          this.toastr.error(error.error, '', {
            timeOut: 5000,
          });
        }
      );

    this.addressRef = this.modalService.show(template, { class: 'modal-md' });

  }

  showB2B: boolean = false

  B2BOrders() {
    this.showB2B = true;
    console.log("showB2B: ", this.showB2B)
  }

  openSNThirdNode(item: SecondaryAccountLink) {

    const payload = {
      Cntryid: item.RETAIL_D2C_SUBACCT_OFFICE_CNTRY,
      Stateid: item.RETAIL_D2C_SUBACCT_OFFICE_STATE,
      Secnd_node_flg: false,
      Third_node_flg: true,
      Subacctid: this.subaccountid,
      Storeid: this.storeid,
      B2b_id: item.ACCT_PRIMRY_SECNDRY_B2B_LINK_SEQ_ID
    }

    console.log("payload: ", payload)

    this.apiService.postCall(`${this.apiService.baseURL}/GetAcctNetwork`, payload)
      .subscribe(data => {
        console.log(data);
        this.thirdNodeAccArr = Array.isArray(data) ? data : [];

        console.log("Third Node Acc: ", this.thirdNodeAccArr)

        if (this.thirdNodeAccArr.length > 0) {
          this.showThirdNodeAcc = true;
        } else {
          this.showThirdNodeAcc = false;
          this.toastr.error("No Accounts avaliable")
        }

      },
        (error) => {
          console.log(error);
          this.toastr.error(error.error, '', {
            timeOut: 5000,
          });
        }
      );

  }

  openSNEdit(item: SecondaryAccountLink) {

  }

  openTNAddress(name, subaccid, storeid, template) {
    const payload = {
      Subacctid: subaccid,
      Storeid: storeid
    }

    this.apiService.postCall(`${this.apiService.baseURL}/GetAcctAddressContact`, payload)
      .subscribe(data => {
        console.log(data);

        this.storeAddress = {
          storeName: name,
          Country: data.Country,
          State: data.State,
          City: data.City,
          Pincode: data.Pincode,
          Address: data.Address
        };

      },
        (error) => {
          console.log(error);
          this.toastr.error(error.error, '', {
            timeOut: 5000,
          });
        }
      );
    this.addressRef = this.modalService.show(template, { class: 'modal-md' });
  }


  openTNEdit(item: TertiaryAccountLink) {

  }

}
