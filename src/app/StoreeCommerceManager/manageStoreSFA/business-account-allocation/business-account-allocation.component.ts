import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { error } from 'console';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';
import { CommonService } from 'src/app/services/common.service';
import { Output, EventEmitter } from '@angular/core';

interface StoreSfaExecListRequest {
  SubacctId: number;
  StoreId: number;
  ForTeritiarySalesFlg: boolean;
  ForSecondarySalesFlg: boolean;
  ForPrimaryPurchaseFlg: boolean;
}

interface GetAccount {
  Login_Subacctid: any;
  Login_Storeid: any;
  For_Primary_Flg: boolean;
  For_Secondry_Flg: boolean;
  For_Teritiary_Flg: boolean;
  Countryid: any;
  Stateid: any;
  Cityid: any;
}

interface SfaAccount {
  FirstName: string;
  LastName: string;
  MobileNumber: string;
  Photo: string;
  RoleId: number;
  RoleName: string;
  UserId: string;
}

interface CustomerAccessStore {
  CustomerAccessStoreCode: string;
  OfficeName: string;
  StoreId: string;
  SubacctId: number;
}

interface AccountList {
  Address: string | null;
  CategoryId: string;
  CategoryName: string;
  LinkId: string;
  OfficeName: string;
  PinCode: string | null;
  StoreId: string;
  SubacctId: string;
}

interface SfaRegistrationPayload {
  User_Mobileno: string | null;
  Primary_Subacctid: number;
  Primary_Storeid: number;
  User_Subacctid: number;
  User_Storeid: number;
  b2b_retailer_Flg: boolean;
  b2b_distributor_Flg: boolean;
  b2b_Franchisee_flg: boolean;
  b2b_Branch_Flg: boolean;
}

interface AddSfaRelationPayload {
  Login_Subacctid: number;
  Login_Storeid: number;
  Ecom_Store_Code: string;
  SFE_USERID: string;
  For_Primry_Purchase_Flg: boolean;
  For_Secndry_Sales_Flg: boolean;
  For_Teritiary_Sales_Flg: boolean;
  B2B_Link_Seq_ID: any;
}

interface SfaRelation {
  B2BLinkSeqId: string;
  BuyerStoreAddress: string;
  BuyerStoreCity: string;
  BuyerStoreCode: string;
  BuyerStoreCountry: string;
  BuyerStoreName: string;
  BuyerStorePincode: string;
  BuyerStoreState: string;
  EcomStoreCode: string;
  EcomStoreName: string;
  IsActive: boolean;
  RelationId: number;
  SellerStoreAddress: string;
  SellerStoreCity: string;
  SellerStoreCode: string;
  SellerStoreCountry: string;
  SellerStoreName: string;
  SellerStorePincode: string;
  SellerStoreState: string;
}

interface Details {
  Photo: string;
  mobile: string;
  roleId: number;
  roleName: string;
}

interface AddressContact {
  storeName: string;
  Country: number;
  State: number;
  City: number;
  Pincode: string;
  Address: string;
}

interface Credentials {
  Reg_Mobile: string;
  App_Password: string;
}

@Component({
  selector: 'app-business-account-allocation',
  templateUrl: './business-account-allocation.component.html',
  styleUrls: ['./business-account-allocation.component.css']
})
export class BusinessAccountAllocationComponent implements OnInit {

  @Output() countryEvent = new EventEmitter<any>();
  @Output() stateEvent = new EventEmitter<any>();
  @Output() cityEvent = new EventEmitter<any>();

  imgURL = this.apiService.imgURL;
  getlogindata: any;
  accountid: any;
  subaccountid: any;
  storeid: any;
  modalRef: any;
  addrackForm: any;
  rackDetails: any;
  isTitle: boolean;
  isAdd: boolean;
  rowlist: any;
  smallModalRef: any;
  sfaRegRef: any
  addStoreRef: any;
  detailsRef: any;
  deleteUserRef: any;
  showcredentialsRef: any;
  PRIMARY_SELLER_FLG: boolean;
  SECONDRY_SELLER_FLG: boolean;
  TERITIARY_SELLER_FLG: boolean;
  PlatformId: number;
  addressRef: any;

  constructor(
    private apiService: ApiService,
    private modalService: BsModalService,
    private toastr: ToastrService,
    private commonservice: CommonService,
    private formBuilder: FormBuilder
  ) {
    this.getlogindata = localStorage.getItem('logindata');
    this.getlogindata = JSON.parse(this.getlogindata);
    this.accountid = this.getlogindata.RETAIL_D2C_ACCT_ID;
    this.subaccountid = this.getlogindata.RETAIL_D2C_USR_SUBACCT_ID;
    this.storeid = this.getlogindata.SUBACCT_OFFICES_RPOSTRY_ID;
    this.PRIMARY_SELLER_FLG = this.apiService.requiredLoginData.PRIMARY_SELLER_FLG;
    this.SECONDRY_SELLER_FLG = this.apiService.requiredLoginData.SECONDRY_SELLER_FLG;
    this.TERITIARY_SELLER_FLG = this.apiService.requiredLoginData.TERITIARY_SELLER_FLG;
    this.PlatformId = this.apiService.requiredLoginData.PlatformId;
  }

  storeSfaList: StoreSfaExecListRequest = {
    SubacctId: 0,
    StoreId: 0,
    ForTeritiarySalesFlg: false,
    ForSecondarySalesFlg: false,
    ForPrimaryPurchaseFlg: false
  }

  credentials: Credentials = {
    Reg_Mobile: '',
    App_Password: ''
  }

  getAccountArr: GetAccount = {
    Login_Subacctid: null,
    Login_Storeid: null,
    For_Primary_Flg: false,
    For_Secondry_Flg: false,
    For_Teritiary_Flg: false,
    Countryid: null,
    Stateid: null,
    Cityid: null
  }

  details: Details = {
    Photo: '',
    mobile: '',
    roleId: 0,
    roleName: ''
  }

  teritiarySalesFlg = true;
  secondarySalesFlg = false;
  primaryPurchaseFlg = false;
  showAccList = false;
  sfaAccountArr: SfaAccount[] = [];
  sfaRelationList: SfaRelation[] = [];

  countryList: {};
  countryID: any;
  countryName: any;
  cityList: {};
  stateList: {};
  stateID: any;
  stateName: any;
  cityName: any;
  cityID: any;
  pinID: any;
  ecomStoreList: CustomerAccessStore[] = [];
  accountForSFA: AccountList[] = [];

  sfaRegestration: SfaRegistrationPayload = {
    User_Mobileno: '',
    Primary_Subacctid: 0,
    Primary_Storeid: 0,
    User_Subacctid: 0,
    User_Storeid: 0,
    b2b_retailer_Flg: false,
    b2b_distributor_Flg: false,
    b2b_Franchisee_flg: false,
    b2b_Branch_Flg: false
  }

  storeAddress: AddressContact = {
    storeName: '',
    Country: 0,
    State: 0,
    City: 0,
    Pincode: '',
    Address: ''
  };

  addSfaRelationPayload: AddSfaRelationPayload = {
    Login_Subacctid: 0,
    Login_Storeid: 0,
    Ecom_Store_Code: '',
    SFE_USERID: '',
    For_Primry_Purchase_Flg: false,
    For_Secndry_Sales_Flg: false,
    For_Teritiary_Sales_Flg: false,
    B2B_Link_Seq_ID: null
  }

  ngOnInit(): void {

    // Set initial tab and SFA list based on seller flags
    if (this.PRIMARY_SELLER_FLG) {
      // Primary: Only show Secondary tab
      this.teritiarySalesFlg = false;
      this.secondarySalesFlg = true;
      this.primaryPurchaseFlg = false;
      this.storeSfaList = {
        SubacctId: this.subaccountid,
        StoreId: this.storeid,
        ForTeritiarySalesFlg: false,
        ForSecondarySalesFlg: true,
        ForPrimaryPurchaseFlg: false
      };
    } else if (this.SECONDRY_SELLER_FLG) {
      // Secondary: Show Primary and Tertiary tabs, default to Primary
      this.teritiarySalesFlg = false;
      this.secondarySalesFlg = false;
      this.primaryPurchaseFlg = true;
      this.storeSfaList = {
        SubacctId: this.subaccountid,
        StoreId: this.storeid,
        ForTeritiarySalesFlg: false,
        ForSecondarySalesFlg: false,
        ForPrimaryPurchaseFlg: true
      };
    } else if (this.TERITIARY_SELLER_FLG) {
      // Tertiary: Only show Primary tab
      this.teritiarySalesFlg = false;
      this.secondarySalesFlg = false;
      this.primaryPurchaseFlg = true;
      this.storeSfaList = {
        SubacctId: this.subaccountid,
        StoreId: this.storeid,
        ForTeritiarySalesFlg: false,
        ForSecondarySalesFlg: false,
        ForPrimaryPurchaseFlg: true
      };
    } else {
      // Default: fallback to Tertiary
      this.teritiarySalesFlg = true;
      this.secondarySalesFlg = false;
      this.primaryPurchaseFlg = false;
      this.storeSfaList = {
        SubacctId: this.subaccountid,
        StoreId: this.storeid,
        ForTeritiarySalesFlg: true,
        ForSecondarySalesFlg: false,
        ForPrimaryPurchaseFlg: false
      };
    }

    this.apiService.postCall(this.apiService.baseURL + '/GetStoreSfaExecList', this.storeSfaList)
      .subscribe(data => {

        this.sfaAccountArr = data as SfaAccount[];
        console.log(this.sfaAccountArr);
        console.log("img url: ", this.imgURL)
      },
        (error) => {
          this.toastr.error(error.error.Message, '', {
            timeOut: 5000,
          });
        });

    this.getCountry()
  }

  addSfaRelation() {

    this.apiService.postCall(this.apiService.baseURL + '/AddSfaRelation', this.addSfaRelationPayload)
      .subscribe(data => {

        this.sfaAccountArr = data as SfaAccount[];
        console.log(this.sfaAccountArr);
      },
        (error) => {

          console.log("Responce: ", error)
          this.toastr.error(error.error, '', {
            timeOut: 5000,
          });
        });

    console.log("Payload: ", this.addSfaRelationPayload)

    this.addStoreRef.hide()

    this.modalRef.show()

  }

  addSfaRelationModel(linkId, template) {

    this.modalRef.hide();

    this.addSfaRelationPayload = {
      ... this.addSfaRelationPayload,
      B2B_Link_Seq_ID: linkId
    }

    this.addStoreRef = this.modalService.show(template, { class: 'modal-sm' });
  }

  openModalLarge(template: TemplateRef<any>) {
    this.isTitle = true;
    this.isAdd = true;
    this.modalRef = this.modalService.show(template, { class: 'modal-xl' });
  }

  openModalSmall(template: TemplateRef<any>) {
    this.isTitle = true;
    this.isAdd = true;
    this.smallModalRef = this.modalService.show(template, { class: 'modal-sm' });
  }

  openModalMedium(template: TemplateRef<any>) {
    this.isTitle = true;
    this.isAdd = true;
    this.smallModalRef = this.modalService.show(template, { class: 'modal-md' });
  }

  closeSmallModal(viewusertemplate) {
    if (this.smallModalRef) {
      this.smallModalRef.hide();
      this.openModalLarge(viewusertemplate)
    }
  }

  onEcomSelectStore(event: any) {
    const selectedStoreId = event.target.value;
    const selectedStore = this.ecomStoreList.find(store => store.StoreId == selectedStoreId);
    const customerAccessStoreCode = selectedStore ? selectedStore.CustomerAccessStoreCode : null;
    console.log('CustomerAccessStoreCode:', customerAccessStoreCode);

    if (selectedStore) {
      const storeId = selectedStore.StoreId;
      const accid = selectedStore.SubacctId;
      console.log('Selected StoreId:', storeId, 'SubacctId:', accid);

      this.addSfaRelationPayload = {
        ... this.addSfaRelationPayload,
        Login_Subacctid: this.subaccountid,
        Login_Storeid: this.storeid,
        Ecom_Store_Code: customerAccessStoreCode,
      }


    } else {
      console.log('No store found for StoreId:', selectedStoreId);
    }
  }

  onSelectStore(event: any) {
    const selectedStoreId = event.target.value;
    const selectedStore = this.ecomStoreList.find(store => store.StoreId == selectedStoreId);
    if (selectedStore) {
      const storeId = selectedStore.StoreId;
      const accid = selectedStore.SubacctId;
      console.log('Selected StoreId:', storeId, 'SubacctId:', accid);

      this.sfaRegestration = {
        ... this.sfaRegestration,
        Primary_Subacctid: accid,
        Primary_Storeid: +storeId,
        User_Subacctid: this.subaccountid,
        User_Storeid: this.storeid,
        b2b_retailer_Flg: false,
        b2b_distributor_Flg: false,
        b2b_Franchisee_flg: false,
        b2b_Branch_Flg: true
      }

    } else {
      console.log('No store found for StoreId:', selectedStoreId);
    }
  }

  onSfaRegistration() {

    console.log("Payload: ", this.sfaRegestration)

    this.apiService.postCall(this.apiService.baseURL + '/B2BAppCustRegistration', this.sfaRegestration)
      .subscribe(data => {
        console.log(data);

        this.toastr.show(data.Message)
      },
        (error) => {
          this.toastr.error(error.error.Message, '', {
            timeOut: 5000,
          });
        });

    this.sfaRegRef.hide()
  }

  showDetails(Photo, mobile, roleId, roleName, template) {

    this.details = {
      Photo: Photo,
      mobile: mobile,
      roleId: roleId,
      roleName: roleName
    }

    this.detailsRef = this.modalService.show(template, { class: 'modal-md' });

  }

  deleteUser(template) {
    this.deleteUserRef = this.modalService.show(template, { class: 'modal-sm' });
  }

  showCredentials(template, userId) {

    const payload = {
      Userid: userId,
      Login_Subacctid: this.subaccountid,
      Login_Storeid: this.storeid
    }

    console.log("Payload: ", payload)

    this.apiService.postCall(this.apiService.baseURL + '/GetSFA_AppPassword_OnDashboard', payload)
      .subscribe(data => {
        console.log(data);

        this.credentials = {
          Reg_Mobile: data.Reg_Mobile,
          App_Password: data.App_Password
        };

      },
        (error) => {
          console.log(error)
          this.toastr.error(error.error.Message, '', {
            timeOut: 5000,
          });
        });

    this.showcredentialsRef = this.modalService.show(template, { class: 'modal-sm' });
  }

  getStoreCredentials(storeID) {
    this.apiService.getCall(`${this.apiService.baseURL}/GetStoreCredentials/${storeID}`)
      .subscribe(data => {
        console.log(data);


      },
        (error) => {
          console.log(error);
          this.toastr.error(error.error, '', {
            timeOut: 5000,
          });
        }
      );
  }

  viewUserAllocated(template, userId) {
    this.openModalLarge(template);

    console.log("useradat: ", this.getlogindata)

    const payload = {
      SubacctId: this.subaccountid,
      StoreId: this.storeid,
      SfaUserId: userId,
      ForPrimryFlg: this.primaryPurchaseFlg,
      ForSecndryFlg: this.secondarySalesFlg,
      ForTertiaryFlg: this.teritiarySalesFlg
    }

    console.log("payload: ", payload)

    this.apiService.postCall(this.apiService.baseURL + '/GetSFA_Relations', payload)
      .subscribe(data => {
        this.sfaRelationList = (data as SfaRelation[]) || [];
        console.log(this.sfaRelationList);
      },
        (error) => {
          this.toastr.error(error.error.Message, '', {
            timeOut: 5000,
          });
        });
  }

  editStatus(template) {
    this.modalRef.hide()
    this.openModalSmall(template)
  }

  selectedStoreName: string;
  selectedStoreAddress: string;

  showAddress(address, SellerStoreName: string, SellerStoreAddress: string) {
    this.modalRef.hide()
    this.selectedStoreName = SellerStoreName;
    this.selectedStoreAddress = SellerStoreAddress;
    this.openModalMedium(address)
  }

  openAccAddress(name, subaccid, storeid, template) {
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

    this.modalRef.hide()
    this.addressRef = this.modalService.show(template, { class: 'modal-md' });
  }

  allocateNewUser(template, roleId, userId) {

    this.addSfaRelationPayload = {
      ... this.addSfaRelationPayload,
      SFE_USERID: userId
    }

    const payload = {
      LoginSubacctid: this.subaccountid,
      LoginStoreid: this.storeid,
      LoginPlatformid: this.PlatformId,
      ForPrimryFlg: roleId === 15,
      ForSecndryFlg: roleId === 16,
      ForTertiaryFlg: roleId === 17
    }

    console.log("Payload: ", payload)

    this.apiService.postCall(this.apiService.baseURL + '/GetEcomStoreList', payload)
      .subscribe(data => {
        console.log(data);
        this.ecomStoreList = (data as CustomerAccessStore[]) || [];
      },
        (error) => {
          this.toastr.error(error.error.Message, '', {
            timeOut: 5000,
          });
        });

    this.showAccList = false;
    this.openModalLarge(template);
  }

  setAccCategory(event: any) {
    const selectedValue = event.target.value;
    console.log('Selected Account Category:', selectedValue);
    if (selectedValue == "primary") {
      this.addSfaRelationPayload.For_Primry_Purchase_Flg = this.getAccountArr.For_Primary_Flg = true;
      this.addSfaRelationPayload.For_Secndry_Sales_Flg = this.getAccountArr.For_Secondry_Flg = false;
      this.addSfaRelationPayload.For_Teritiary_Sales_Flg = this.getAccountArr.For_Teritiary_Flg = false;
    } else if (selectedValue == "secondary") {
      this.addSfaRelationPayload.For_Primry_Purchase_Flg = this.getAccountArr.For_Primary_Flg = false;
      this.addSfaRelationPayload.For_Secndry_Sales_Flg = this.getAccountArr.For_Secondry_Flg = true;
      this.addSfaRelationPayload.For_Teritiary_Sales_Flg = this.getAccountArr.For_Teritiary_Flg = false;
    } else if (selectedValue == "teritiary") {
      this.addSfaRelationPayload.For_Primry_Purchase_Flg = this.getAccountArr.For_Primary_Flg = false;
      this.addSfaRelationPayload.For_Secndry_Sales_Flg = this.getAccountArr.For_Secondry_Flg = false;
      this.addSfaRelationPayload.For_Teritiary_Sales_Flg = this.getAccountArr.For_Teritiary_Flg = true;
    } else {
      this.addSfaRelationPayload.For_Primry_Purchase_Flg = this.getAccountArr.For_Primary_Flg = false;
      this.addSfaRelationPayload.For_Secndry_Sales_Flg = this.getAccountArr.For_Secondry_Flg = false;
      this.addSfaRelationPayload.For_Teritiary_Sales_Flg = this.getAccountArr.For_Teritiary_Flg = false;
    }
  }

  getAccount() {
    this.getAccountArr.Login_Subacctid = this.subaccountid;
    this.getAccountArr.Login_Storeid = this.storeid;
    this.getAccountArr.Countryid = this.countryID;
    this.getAccountArr.Stateid = this.stateID;
    this.getAccountArr.Cityid = this.cityID;

    console.log("payload: ", this.getAccountArr)
    // Check if Ecom_Store_Code is empty before making API call
    // if (!this.addSfaRelationPayload.Ecom_Store_Code) {
    //   this.toastr.error('Please select the E-Commerce Store', '', {
    //   timeOut: 3000,
    //   });
    //   return;
    // }

    this.apiService.postCall(this.apiService.baseURL + '/GetAccountsForSFA', this.getAccountArr)
      .subscribe(data => {
        console.log(data);
        this.accountForSFA = (data.data as AccountList[]) || [];
      },
        (error) => {
          this.toastr.error(error.error.Message, '', {
            timeOut: 5000,
          });
        });
    this.showAccList = true;
  }

  sfaEcomReg(template, roleId: number, MobileNumber) {

    const payload = {
      LoginSubacctid: this.subaccountid,
      LoginStoreid: this.storeid,
      LoginPlatformid: this.PlatformId,
      ForPrimryFlg: roleId === 15,
      ForSecndryFlg: roleId === 16,
      ForTertiaryFlg: roleId === 17
    }

    this.sfaRegestration = {
      User_Mobileno: MobileNumber,
      Primary_Subacctid: 0,
      Primary_Storeid: 0,
      User_Subacctid: 0,
      User_Storeid: 0,
      b2b_retailer_Flg: false,
      b2b_distributor_Flg: false,
      b2b_Franchisee_flg: false,
      b2b_Branch_Flg: false
    }

    this.apiService.postCall(this.apiService.baseURL + '/GetEcomStoreList', payload)
      .subscribe(data => {
        console.log(data);
        this.ecomStoreList = (data as CustomerAccessStore[]) || [];
      },
        (error) => {
          this.toastr.error(error.error.Message, '', {
            timeOut: 5000,
          });
        });

    this.sfaRegRef = this.modalService.show(template, { class: 'modal-sm' });

  }

  onTabChange(event) {
    console.log('Tab changed:', event);

    this.sfaAccountArr = [];

    if (event == "Teritiary Account") {
      this.teritiarySalesFlg = true;
      this.secondarySalesFlg = false;
      this.primaryPurchaseFlg = false;
    } else if (event == "Secondary Account") {
      this.teritiarySalesFlg = false;
      this.secondarySalesFlg = true;
      this.primaryPurchaseFlg = false;
    } else {
      this.teritiarySalesFlg = false;
      this.secondarySalesFlg = false;
      this.primaryPurchaseFlg = true;
    }

    this.storeSfaList = {
      SubacctId: this.subaccountid,
      StoreId: this.storeid,
      ForTeritiarySalesFlg: this.teritiarySalesFlg,
      ForSecondarySalesFlg: this.secondarySalesFlg,
      ForPrimaryPurchaseFlg: this.primaryPurchaseFlg
    }

    console.log("Payload: ", this.storeSfaList)


    this.apiService.postCall(this.apiService.baseURL + '/GetStoreSfaExecList', this.storeSfaList)
      .subscribe(data => {
        this.sfaAccountArr = data as SfaAccount[];
        console.log(this.sfaAccountArr);
      },
        (error) => {
          this.toastr.error(error.error.Message, '', {
            timeOut: 5000,
          });
        });

  }

  getCountry() {
    this.apiService.CountryList().subscribe((res) => {
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
