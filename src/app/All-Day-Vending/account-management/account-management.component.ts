import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormGroup, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';
import { NgxSpinnerService } from "ngx-spinner";
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-account-management',
  templateUrl: './account-management.component.html',
  styleUrls: ['./account-management.component.css']
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
      B2b_id: "jr0xpPU"
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

  contractMgmt(acc: any) {
    console.log('Contract Mgmt:', acc);
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

}

