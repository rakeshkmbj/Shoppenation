import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';
import { NgxSpinnerService } from "ngx-spinner";
import { NavigationExtras, Router } from '@angular/router';
import { TabDirective, TabsetComponent } from 'ngx-bootstrap/tabs';

@Component({
  selector: 'app-account-management',
  templateUrl: './account-management.component.html',
  styleUrls: ['./account-management.component.scss']
})
export class AccountManagementComponent implements OnInit {

  imgURL = this.apiService.imgURL;
  userStoreList: any;
  countryList: {};
  countryID: any;
  countryName: any;
  searchCenterForm: any;
  cityList: {};
  stateList: {};
  stateID: any;
  stateName: any;
  cityName: any;
  zipList: {};
  cityID: any;
  pinID: any;
  showThirdNodeAcc = false
  accountid: any;
  subaccountid: any;
  storeid: any;
  domainid: any;
  storeName: any;
  showNetworkList = false
  reportType: string
  showReport = false;
  showGenerate = false
  getlogindata: any;
  editMode: boolean = false;
  modalRef: any;
  addStoreUserForm: FormGroup;
  submitted = false;
  submitted1 = false;
  ispassword: boolean = false;
  roleName: any;
  uploadLabel = "";
  base64textString: string;
  isImageSaved: boolean;
  uploadLabel1 = "";
  base64textString1: string;
  isImageSaved1: boolean;
  userID: any;
  retiailStoreData: any;
  imagePath: any;
  cstmrActiveFlag: any;
  showMdrRegistedUserList: boolean;
  showuserStore: boolean = false;
  addedStoreUserList: any;
  selectedThirdNode: any;
  imagePreview: any;
  imagePreview2: any;
  B2BLinkIdForD10: any;
  macroSetupForm: FormGroup;
  selectedMacroParentTab = 'tab1';
  selectedMacroChildTab = 'tab11';
  isMacroDisplayMode = false;
  isMacroDisplayLoading = false;
  hasMacroSetup = false;

  @ViewChild('macroChildTabset') macroChildTabset!: TabsetComponent;

  constructor(
    private apiService: ApiService,
    private modalService: BsModalService,
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
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

    if (this.getlogindata.DOMAIN_ID == 10 && this.getlogindata.SECND_NODE_SUBACCT_FLG == true) {

      const payload = {
        "Domainid": this.getlogindata.DOMAIN_ID,
        "Secndry_Subacctid": this.subaccountid,
        "Secndry_Storeid": this.storeid
      }

      this.apiService.postCall(`${this.apiService.baseURL}/GetVendingPrimrySecndryB2BId`, payload)
        .subscribe(data => {
          console.log(data);
          this.B2BLinkIdForD10 = data.ACCT_PRIMRY_SECNDRY_B2B_LINK_SEQ_ID;
        },
          (error) => {
            console.log(error);
            this.toastr.error(error.error, '', {
              timeOut: 5000,
            });
          }
        );
    } else {
      this.B2BLinkIdForD10 = 'jr0xpPU';
    }

    this.getCountry();

    this.addStoreUserForm = this.formBuilder.group({
      RETAIL_ACCOUNT_ID: [''],
      RETAIL_SUBACCOUNT_ID: [''],
      RETAIL_STORE_ID: this.storeid,
      RETAIL_USR_EMAIL_ID: ['', [Validators.required, Validators.email]],
      RETAIL_USR_FIRST_NAME: ['', Validators.required],
      RETAIL_USR_LAST_NAME: ['', Validators.required],
      RETAIL_USR_ROLE: ['', Validators.required],
      RETAIL_D2C_ACCT_INTRNL_CSTMR_ADDRESS: ['', Validators.required],
      RETAIL_D2C_ACCT_INTRNL_CUSTMR_PHOTO: ['', Validators.required],
      RETAIL_D2C_ACCT_INTRNL_CUSTMR_KYC_PHOTO_ID: ['', Validators.required],
      RETAIL_D2C_ACCT_INTRNL_TEAM_MOBL_NUMBR: ['', [Validators.required, Validators.minLength(10)]],
      RETAIL_D2C_ACCT_INTRNL_CSTMR_RCNT_PWD: ['']
    });

    this.macroSetupForm = this.formBuilder.group({

      associatedIndustry: [{ value: '0' }],

      duration: ['0'],

      validityStartDate: [
        { value: '' }
      ],

      personalWalletAvailability: [false],
      corporateWalletAvailability: [false],

      onNetworkCommerceFlag: [false],
      campusTerminalPOS: [false],
      fullTerminalNetwork: [false],

      internalEmployees: [false],
      channelNetwork: [false],
      securityStaff: [false],
      b2bCustomers: [false],
      productConsumers: [false],
      serviceProviders: [false],

      banksInsurance: [false],
      csrProviders: [false],
      eventsBasedUsers: [false],
      guestsVisitors: [false],
      assetOwners: [false],
      socialGroupUsers: [false],

      cashCharging: [false],
      brandCardMultipleWallet: [false]
    });
  }

  openModal(addStoreUserModal: TemplateRef<any>, selectedThirdNode: any) {
    this.addStoreUserForm.reset();
    this.selectedThirdNode = selectedThirdNode;
    this.submitted = true;
    this.editMode = false;
    // this.emptyInput = this.storeUserForm.value.SUBACCT_OFFICE_ID;
    //  if( this.emptyInput != ""){
    this.modalRef = this.modalService.show(addStoreUserModal, Object.assign({}, { class: 'width-720' }));
    // }
  }

  onRoleChange(e) {
    // this.roleID = this.addStoreUserForm.value.RETAIL_USR_ROLE;
    this.roleName = e.target.options[e.target.options.selectedIndex].text;
    console.log(this.roleName);
  }

  get f1() { return this.addStoreUserForm.controls; }

  generate() {
    this.showGenerate = true;
  }

  generateReport(type: string) {
    this.reportType = type;
    this.showReport = true;
  }

  secondNodeAccArr = [];
  thirdNodeAccArr = [];

  onSecondNodeNetwork() {

    this.reportType = '';
    this.showReport = false;
    this.showGenerate = false;

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
        this.thirdNodeAccArr = data;
      },
        (error) => {
          console.log(error);
          this.toastr.error(error.error, '', {
            timeOut: 5000,
          });
        }
      );
  }

  openSNThirdNode() {

    const payload = {
      Cntryid: this.countryID,
      Stateid: this.stateID,
      Secnd_node_flg: false,
      Third_node_flg: true,
      Subacctid: this.subaccountid,
      Storeid: this.storeid,
      // B2b_id: "jr0xpPU"
      B2b_id: this.B2BLinkIdForD10
    }

    console.log("payload: ", payload)

    this.apiService.postCall(`${this.apiService.baseURL}/GetAcctNetwork`, payload)
      .subscribe(data => {
        console.log(data);
        this.thirdNodeAccArr = Array.isArray(data) ? data : [];
        this.showThirdNodeAcc = true;

        console.log("Third Node Acc: ", this.thirdNodeAccArr)

      },
        (error) => {
          console.log(error);
          this.toastr.error(error.error, '', {
            timeOut: 5000,
          });
        }
      );

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

  openAcctCardHolders(acc: any) {
    console.log('Acct Card Holders:', acc);
  }

  displayUsers(acc: any) {
    console.log('Display Users:', acc);
  }

  acctUserMgmt(acc: any) {
    console.log('Acct User Mgmt:', acc);
  }

  editThirdNodeAcc(acc: any) {
    console.log('Edit:', acc);
  }

  onSelectedFile(event) {
    var files = event.target.files;
    var file = files[0];
    var filename = files[0].name;
    this.uploadLabel = filename;

    if (files && file) {
      var reader = new FileReader();
      reader.onload = this._handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);

    }
  }

  _handleReaderLoaded(readerEvt) {
    let binaryString = readerEvt.target.result;
    this.base64textString = btoa(binaryString);
    console.log(this.base64textString);
    this.isImageSaved = true;
  }

  onSelectedFile1(event1) {
    var files1 = event1.target.files;
    var file1 = files1[0];
    var filename = files1[0].name;
    this.uploadLabel1 = filename;

    if (files1 && file1) {
      var reader = new FileReader();
      reader.onload = this._handleReaderLoaded1.bind(this);
      reader.readAsBinaryString(file1);

    }
  }

  _handleReaderLoaded1(readerEvt1) {
    let binaryString1 = readerEvt1.target.result;
    this.base64textString1 = btoa(binaryString1);
    console.log(this.base64textString1);
    this.isImageSaved1 = true;
  }

  getUserStoreList(acc: any, template?: any) {

    this.selectedThirdNode = acc;
    this.showMdrRegistedUserList = false;
    this.showuserStore = true;
    this.spinner.show();

    this.apiService.getCall(this.apiService.baseURL + '/GetRetailStoresByAccountSubAccount/' + 19 + "/" + acc.THIRD_NODE_ACCT_SUBACCT_ID + "/" + acc.THIRD_NODE_ACCT_STORE_ID)
      .subscribe(data => {
        this.userStoreList = data;
        console.log(data);
        this.spinner.hide();

        if (template) {
          this.modalRef = this.modalService.show(template, {
            class: 'modal-xl'
          });
        }

      },
        (error) => {
          console.log("Error: ", error)
          this.toastr.error(error.error.Message, '', {
            timeOut: 5000,
          });
          this.spinner.hide();
        });
    //}
  }

  EditStoreUsers() {
    console.log("Selected Third Node Acc: ", this.selectedThirdNode);

    let editStoreUserData = {
      RETAIL_ACCOUNT_ID: 19,
      RETAIL_SUBACCOUNT_ID: +this.selectedThirdNode.THIRD_NODE_ACCT_SUBACCT_ID,
      RETAIl_STORE_ID: +this.selectedThirdNode.THIRD_NODE_ACCT_STORE_ID,
      RETAIL_USR_ID: this.userID,
      RETAIL_USR_EMAIL_ID: this.addStoreUserForm.value.RETAIL_USR_EMAIL_ID,
      RETAIL_USR_FIRST_NAME: this.addStoreUserForm.value.RETAIL_USR_FIRST_NAME,
      RETAIL_USR_LAST_NAME: this.addStoreUserForm.value.RETAIL_USR_LAST_NAME,
      RETAIL_USR_ROLE: this.addStoreUserForm.value.RETAIL_USR_ROLE,
      RETAIL_D2C_ACCT_INTRNL_CSTMR_ADDRESS: this.addStoreUserForm.value.RETAIL_D2C_ACCT_INTRNL_CSTMR_ADDRESS,
      RETAIL_D2C_ACCT_INTRNL_CUSTMR_PHOTO: this.base64textString,
      RETAIL_D2C_ACCT_INTRNL_CUSTMR_KYC_PHOTO_ID: this.base64textString1,
      RETAIL_D2C_ACCT_INTRNL_TEAM_MOBL_NUMBR: this.addStoreUserForm.value.RETAIL_D2C_ACCT_INTRNL_TEAM_MOBL_NUMBR,
      RETAIL_D2C_ACCT_INTRNL_CSTMR_ISACTIV_FLG: this.cstmrActiveFlag,
      RETAIL_D2C_ACCT_INTRNL_CSTMR_RCNT_PWD: this.addStoreUserForm.value.RETAIL_D2C_ACCT_INTRNL_CSTMR_RCNT_PWD,
    }

    console.log("payload: ", editStoreUserData)

    this.apiService.postCall(this.apiService.baseURL + '/EditStoreUsers', editStoreUserData)
      .subscribe(data => {
        this.toastr.success('Update Successfully', '', { timeOut: 5000, });
        this.getUserStoreList(this.selectedThirdNode);
      },
        (error) => {
          this.toastr.error(error.error.Message, '', {
            timeOut: 5000,
          });
        });
    this.modalRef.hide();
  }

  selectedAccId: any

  getRetailStoresById(addStoreUserModal: any, acc: any) {

    this.userID = acc.RETAIL_USR_ID;

    this.modalRef.hide();

    this.selectedAccId = '';

    if (!acc) return;

    this.ispassword = true;
    this.editMode = true;

    console.log("selected acc:", acc);

    this.apiService
      .getCall(
        `${this.apiService.baseURL}/GetRetailStoresById/${acc.RETAIL_USR_ID}/${acc.RETAIL_SUBACCOUNT_ID}/${acc.RETAIL_STORE_ID}`
      )
      .subscribe(
        (data: any) => {

          if (!data) return;

          this.retiailStoreData = data;
          this.cstmrActiveFlag = data.RETAIL_D2C_ACCT_INTRNL_CSTMR_ISACTIV_FLG;
          this.selectedAccId = data.RETAIL_STORE_ID;

          this.modalRef = this.modalService.show(addStoreUserModal, {
            class: 'width-720'
          });

          this.imagePreview = null;
          this.imagePreview2 = null;
          this.isImageSaved = false;
          this.isImageSaved1 = false;

          this.addStoreUserForm.patchValue({
            RETAIL_USR_FIRST_NAME: data.RETAIL_USR_FIRST_NAME,
            RETAIL_USR_LAST_NAME: data.RETAIL_USR_LAST_NAME,
            RETAIL_USR_ROLE: data.RETAIL_USR_ROLE,
            RETAIL_USR_EMAIL_ID: data.RETAIL_USR_EMAIL_ID,
            RETAIL_D2C_ACCT_INTRNL_CSTMR_ADDRESS: data.RETAIL_D2C_ACCT_INTRNL_CSTMR_ADDRESS,
            RETAIL_D2C_ACCT_INTRNL_TEAM_MOBL_NUMBR: data.RETAIL_D2C_ACCT_INTRNL_TEAM_MOBL_NUMBR,
            RETAIL_D2C_ACCT_INTRNL_CSTMR_RCNT_PWD: data.RETAIL_D2C_ACCT_INTRNL_CSTMR_RCNT_PWD,
          });
        },
        (error) => {
          this.toastr.error(error?.error?.Message || 'Something went wrong', '', {
            timeOut: 5000
          });
        }
      );
  }


  addStoreUser() {

    console.log("Selected Third Node Acc: ", this.selectedThirdNode);

    let addStoreUserData = {
      RETAIL_ACCOUNT_ID: 19,   // need to change this
      RETAIL_SUBACCOUNT_ID: +this.selectedThirdNode.THIRD_NODE_ACCT_SUBACCT_ID,
      RETAIl_STORE_ID: +this.selectedThirdNode.THIRD_NODE_ACCT_STORE_ID,
      RETAIL_USR_EMAIL_ID: this.addStoreUserForm.value.RETAIL_USR_EMAIL_ID,
      RETAIL_USR_FIRST_NAME: this.addStoreUserForm.value.RETAIL_USR_FIRST_NAME,
      RETAIL_USR_LAST_NAME: this.addStoreUserForm.value.RETAIL_USR_LAST_NAME,
      RETAIL_USR_ROLE: this.addStoreUserForm.value.RETAIL_USR_ROLE,
      RETAIL_D2C_ACCT_INTRNL_CSTMR_ADDRESS: this.addStoreUserForm.value.RETAIL_D2C_ACCT_INTRNL_CSTMR_ADDRESS,
      RETAIL_D2C_ACCT_INTRNL_CUSTMR_PHOTO: this.base64textString,
      RETAIL_D2C_ACCT_INTRNL_CUSTMR_KYC_PHOTO_ID: this.base64textString1,
      RETAIL_D2C_ACCT_INTRNL_TEAM_MOBL_NUMBR: + this.addStoreUserForm.value.RETAIL_D2C_ACCT_INTRNL_TEAM_MOBL_NUMBR,
      RETAIL_D2C_ACCT_INTRNL_CSTMR_RCNT_PWD: null,
    }
    this.submitted1 = true;
    if (this.addStoreUserForm.invalid) {
      return;
    }

    console.log(addStoreUserData);
    this.apiService.postCall(this.apiService.baseURL + '/AddStoreUsers', addStoreUserData)
      .subscribe(data => {
        this.addedStoreUserList = data;
        console.log(data);
        this.toastr.success('Added Successfully', '', { timeOut: 5000, });
        this.modalRef.hide();
        this.getUserStoreList(this.selectedThirdNode);
      },
        (error) => {
          console.log(error);
          this.toastr.error(error.error.Message, '', {
            timeOut: 5000,
          });
        });
  }

  deleteAcc(store: any) {

    const payload = {
      User_Mobileno: store.RETAIL_D2C_ACCT_INTRNL_TEAM_MOBL_NUMBR,
      Login_SubAcctid: store.RETAIL_SUBACCOUNT_ID,
      Login_Storeid: store.RETAIL_STORE_ID
    }

    this.apiService.postCall(this.apiService.baseURL + '/Delete-User-MDR-MyloginAccount', payload)
      .subscribe(data => {
        console.log(data);
        this.toastr.success(data.Message);
      },
        (error) => {
          this.toastr.error(error, '', {
            timeOut: 5000,
          });
        });

    this.getUserStoreList(this.selectedThirdNode)
  }

  contractMgmt(acc: any, template?: any) {

    this.resetMacroSetupForm();

    this.selectedThirdNode = acc;
    this.selectedMacroParentTab = 'tab1';
    this.selectedMacroChildTab = 'tab11';
    if (template) {
      this.modalRef = this.modalService.show(template, {
        class: 'modal-xl'
      });
    }

    this.displayMacros();
  }

  onMacroParentTabSelected(tab: TabDirective): void {
    this.selectedMacroParentTab = tab.id || '';

    if (tab.id === 'tab1') {
      this.selectedMacroChildTab = 'tab11';
      const childTabset = this.macroChildTabset;
      const displayTab = childTabset && childTabset.tabs
        .find(childTab => childTab.id === 'tab11');

      if (displayTab) {
        displayTab.active = true;
      }
    }
  }

  onMacroChildTabSelected(tab: TabDirective): void {
    this.selectedMacroChildTab = tab.id || '';

    console.log("Selected TAB: ", tab.id);
    if (this.selectedMacroChildTab === 'tab11') {
      this.displayMacros();
    } else if (this.selectedMacroChildTab === 'tab12') {
      this.prepareMacroSetupForAdd();
    }
  }

  switchToAddMacroSetup(): void {
    this.selectedMacroChildTab = 'tab12';
    this.prepareMacroSetupForAdd();

    const addTab = this.macroChildTabset?.tabs.find(tab => tab.id === 'tab12');
    if (addTab) {
      addTab.active = true;
    }
  }

  onAddPartnerChildTabSelected(tab: TabDirective): void {
    this.selectedMacroChildTab = tab.id || '';

    console.log("Selected TAB: ", tab.id);
    if (this.selectedMacroChildTab === 'tab21') {
      // this.displayMacros();
    } else if (this.selectedMacroChildTab === 'tab22') {
      // this.prepareMacroSetupForAdd();
    }
  }

  switchToNetPartnerSetup(): void {
    this.selectedMacroChildTab = 'tab22';
    this.prepareMacroSetupForAdd();

    const addTab = this.macroChildTabset?.tabs.find(tab => tab.id === 'tab22');
    if (addTab) {
      addTab.active = true;
    }
  }

  activateWallet(type: string): void {
    console.log('Activate wallet:', type);
  }

  activateCommercialAccess(type: string): void {
    console.log('Activate commercial access:', type);
  }

  activateUserCategory(type: string): void {
    console.log('Activate user category:', type);
  }

  activateGeneralSetting(type: string): void {
    console.log('Activate general setting:', type);
  }

  displayMacros(): void {

    this.isMacroDisplayMode = true;
    this.isMacroDisplayLoading = true;
    this.hasMacroSetup = false;
    this.macroSetupForm.disable({ emitEvent: false });

    const payload = {
      "Subacctid": this.subaccountid,
      "Storeid": this.storeid
    }

    this.apiService
      .postCall(this.apiService.baseURL + '/GetAdVendAcctMacroSetup', payload)
      .subscribe(
        data => {
          console.log('Res:', data);
          const macroSetup = this.getMacroSetupFromResponse(data);
          this.hasMacroSetup = !!macroSetup;

          if (macroSetup) {
            this.patchMacroSetupForm(macroSetup);
          }

          this.isMacroDisplayLoading = false;
        },
        error => {
          console.error('Unable to load macro setup:', error);
          this.hasMacroSetup = false;
          this.isMacroDisplayLoading = false;
        }
      );

  }

  private prepareMacroSetupForAdd(): void {
    this.isMacroDisplayMode = false;
    this.hasMacroSetup = false;
    this.resetMacroSetupForm();
    this.macroSetupForm.enable({ emitEvent: false });
  }

  private resetMacroSetupForm(): void {
    this.macroSetupForm.reset({
      associatedIndustry: '0',
      duration: '0',
      validityStartDate: '',
      personalWalletAvailability: false,
      corporateWalletAvailability: false,
      onNetworkCommerceFlag: false,
      campusTerminalPOS: false,
      fullTerminalNetwork: false,
      internalEmployees: false,
      channelNetwork: false,
      securityStaff: false,
      b2bCustomers: false,
      productConsumers: false,
      serviceProviders: false,
      banksInsurance: false,
      csrProviders: false,
      eventsBasedUsers: false,
      guestsVisitors: false,
      assetOwners: false,
      socialGroupUsers: false,
      cashCharging: false,
      brandCardMultipleWallet: false
    }, { emitEvent: false });
  }

  private getMacroSetupFromResponse(response: any): any | null {
    const candidates = [response, response?.Data, response?.data, response?.Result, response?.result];

    for (const candidate of candidates) {
      const setup = Array.isArray(candidate) ? candidate[0] : candidate;
      if (setup && typeof setup === 'object' && !Array.isArray(setup) &&
        Object.keys(setup).some(key => /industry|year[135]|start.?date|corp|netwrk/i.test(key))) {
        return setup;
      }
    }

    return null;
  }

  private patchMacroSetupForm(setup: any): void {
    const value = (keys: string[], fallback: any = false): any => {
      const key = Object.keys(setup).find(item => keys.includes(item.toLowerCase()));
      return key === undefined ? fallback : setup[key];
    };
    const flag = (keys: string[]): boolean => this.toBoolean(value(keys));
    const duration = this.toBoolean(value([
      'year1_flg', 'year1flg', 'ad_vend_brnd_cards_1yr_valdty_flg'
    ])) ? '1'
      : this.toBoolean(value([
        'year3_flg', 'year3flg', 'ad_vend_brnd_cards_3yr_valdty_flg'
      ])) ? '3'
        : this.toBoolean(value([
          'year5_flg', 'year5flg', 'ad_vend_brnd_cards_5yr_valdty_flg'
        ])) ? '5' : '0';

    this.macroSetupForm.patchValue({
      associatedIndustry: String(value([
        'industryid', 'industry_id', 'industry_id_fk', 'ad_vend_brnd_industry_id'
      ], '0')),
      duration,
      validityStartDate: this.toDateInputValue(value([
        'start_date', 'startdate', 'validitystartdate', 'ad_vend_brnd_cards_valdty_start_date'
      ], '')),
      personalWalletAvailability: flag([
        'personal_flg', 'personalflg', 'ad_vend_brnd_cards_prsnl_wallt_flg'
      ]),
      corporateWalletAvailability: flag([
        'corp_flg', 'corpflg', 'ad_vend_brnd_cards_corp_wallt_flg'
      ]),
      onNetworkCommerceFlag: flag([
        'onnetwork_flg', 'onnetwrk_flg', 'onnetworkcommerceflag', 'ad_vend_brnd_cards_on_commerce_flg'
      ]),
      campusTerminalPOS: flag([
        'campus_flg', 'campusflg', 'ad_vend_brnd_cards_campus_pos_flg'
      ]),
      fullTerminalNetwork: flag([
        'netwrk_flg', 'netwrkflg', 'network_flg', 'ad_vend_brnd_cards_netwrk_pos_flg'
      ]),
      internalEmployees: flag([
        'internal_flg', 'internalflg', 'ad_vend_brnd_cards_intrnl_flg'
      ]),
      channelNetwork: flag(['chnl_flg', 'chnlflg', 'ad_vend_brnd_cards_chnl_flg']),
      securityStaff: flag([
        'contractr_flg', 'contractrflg', 'ad_vend_brnd_cards_contrctr_flg'
      ]),
      b2bCustomers: flag(['b2b_cust_flg', 'b2bcustflg', 'ad_vend_brnd_cards_b2b_cstmr_flg']),
      productConsumers: flag(['consumer_flg', 'consumerflg', 'ad_vend_brnd_cards_consumr_flg']),
      serviceProviders: flag([
        'srvc_prvdr_flg', 'srvcprvdrflg', 'ad_vend_brnd_cards_srvc_prvdr_flg'
      ]),
      banksInsurance: flag([
        'bnkr_flg', 'bnkrflg', 'ad_vend_brnd_cards_bnkr_insurr_flg'
      ]),
      csrProviders: flag(['csr_flg', 'csrflg', 'ad_vend_brnd_cards_csr_prvdr_flg']),
      eventsBasedUsers: flag(['event_flg', 'eventflg', 'ad_vend_brnd_cards_evnt_usr_flg']),
      guestsVisitors: flag(['guest_flg', 'guestflg', 'ad_vend_brnd_cards_guest_flg']),
      assetOwners: flag(['asset_owner_flg', 'assetownerflg']),
      socialGroupUsers: flag(['social_flg', 'socialflg', 'ad_vend_brnd_cards_social_usr_flg']),
      cashCharging: flag(['bo_cash_flg', 'bocashflg', 'ad_vend_brnd_cards_bo_cash_chrg_flg']),
      brandCardMultipleWallet: flag([
        'mult_acct_flg', 'multacctflg', 'ad_vend_brnd_cards_mult_acct_allwd_flg'
      ])
    }, { emitEvent: false });
  }

  private toBoolean(value: any): boolean {
    return value === true || value === 1 || value === '1' ||
      (typeof value === 'string' && ['true', 'y', 'yes'].includes(value.toLowerCase()));
  }

  private toDateInputValue(value: any): string {
    if (!value) {
      return '';
    }

    const datePart = String(value).match(/^\d{4}-\d{2}-\d{2}/);
    if (datePart) {
      return datePart[0];
    }

    const parsedDate = new Date(value);
    return isNaN(parsedDate.getTime()) ? '' : parsedDate.toISOString().slice(0, 10);
  }

  addMacroSetup(): void {

    const formValue = this.macroSetupForm.getRawValue();

    const payload = {

      "Subacctid": this.subaccountid,
      "Storeid": this.storeid,

      "Industryid": formValue.associatedIndustry,

      "Year1_Flg": formValue.duration === '1',
      "Year3_Flg": formValue.duration === '3',
      "Year5_Flg": formValue.duration === '5',

      "Start_Date": formValue.validityStartDate,

      "Corp_Flg": formValue.corporateWalletAvailability,
      "Campus_Flg": formValue.campusTerminalPOS,
      "Netwrk_Flg": formValue.fullTerminalNetwork,

      "Internal_Flg": formValue.internalEmployees,
      "Chnl_Flg": formValue.channelNetwork,
      "Contractr_Flg": formValue.securityStaff,
      "B2B_Cust_Flg": formValue.b2bCustomers,
      "Consumer_Flg": formValue.productConsumers,
      "Srvc_Prvdr_Flg": formValue.serviceProviders,

      "Bnkr_Flg": formValue.banksInsurance,
      "CSR_Flg": formValue.csrProviders,
      "Event_Flg": formValue.eventsBasedUsers,
      "Guest_Flg": formValue.guestsVisitors,
      "Social_Flg": formValue.socialGroupUsers,

      "BO_Cash_Flg": formValue.cashCharging,
      "Mult_Acct_Flg": formValue.brandCardMultipleWallet
    };

    console.log('Macro Setup Payload:', payload);

    this.apiService
      .postCall(this.apiService.baseURL + '/AddAdVendAccountMacroSetup', payload)
      .subscribe(
        data => {
          console.log('Macro setup added successfully:', data);
          this.toastr.success(data.Message);
        },
        error => {
          this.toastr.error(
            error.error?.Message || error,
            '',
            {
              timeOut: 5000
            }
          );
        }
      );
  }

}

