import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalService } from 'ngx-bootstrap/modal';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-my-users-management',
  templateUrl: './my-users-management.component.html',
  styleUrls: ['./my-users-management.component.css']
})
export class MyUsersManagementComponent implements OnInit {

  imgURL = this.apiService.imgURL;
  storelist: any;
  officeID: any;
  storeName: any;
  userStoreList: any;
  mdrRegistedUserList: any;
  showMdrRegistedUserList: boolean

  modalRef: any;
  base64textString: string;
  isImageSaved: boolean;
  uploadLabel = "";
  base64textString1: string;
  isImageSaved1: boolean;
  uploadLabel1 = "";
  addedStoreUserList: any;
  showuserStore: boolean = false;
  emptyInput: any;
  submitted = false;
  submitted1 = false;
  ispassword: boolean = false;
  retiailStoreData: any;
  imagePath: any;
  userID: any;
  editMode: boolean = false;
  cstmrActiveFlag: any;
  roleName: any;
  getlogindata: any;
  accountid: any;
  subaccountid: any;
  storeid: any;
  domainid: number;
  PRIMARY_SELLER_FLG: boolean;
  SECONDRY_SELLER_FLG: boolean;
  TERITIARY_SELLER_FLG: boolean;

  constructor(private apiService: ApiService, private modalService: BsModalService,
    private formBuilder: FormBuilder, private spinner: NgxSpinnerService,
    private toastr: ToastrService) {
    this.accountid = this.apiService.requiredLoginData.accountid;
    this.subaccountid = this.apiService.requiredLoginData.subaccountid;
    this.storeid = this.apiService.requiredLoginData.storeid;
    this.storeName = this.apiService.requiredLoginData.storeName;
    this.domainid = this.apiService.requiredLoginData.domainid;
    this.PRIMARY_SELLER_FLG = this.apiService.requiredLoginData.PRIMARY_SELLER_FLG;
    this.SECONDRY_SELLER_FLG = this.apiService.requiredLoginData.SECONDRY_SELLER_FLG;
    this.TERITIARY_SELLER_FLG = this.apiService.requiredLoginData.TERITIARY_SELLER_FLG;

    this.getlogindata = localStorage.getItem('logindata');
    this.getlogindata = JSON.parse(this.getlogindata);

    console.log("PRIMARY_SELLER_FLG: ", this.PRIMARY_SELLER_FLG)
    console.log("SECONDRY_SELLER_FLG: ", this.SECONDRY_SELLER_FLG)
    console.log("TERITIARY_SELLER_FLG: ", this.TERITIARY_SELLER_FLG)
  }
  addStoreUserForm: FormGroup;
  storeUserForm: FormGroup;

  ngOnInit(): void {
    this.getStoreList();
    this.uploadLabel = "No file choosen";
    this.uploadLabel1 = "No file choosen";
    this.storeUserForm = this.formBuilder.group({
      SUBACCT_OFFICE_ID: ['', Validators.required],
      RETAIL_D2C_PRODUCT_ID: ['', Validators.required],
    });

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

  get f() { return this.storeUserForm.controls; }
  get f1() { return this.addStoreUserForm.controls; }

  getStoreList() {
    this.apiService.storeList().subscribe((data) => {
      this.storelist = data;
      console.log(this.storelist);
    });
  }

  getUserStoreList() {
    this.showMdrRegistedUserList = false;
    this.showuserStore = true;
    this.spinner.show();

    // console.log(this.apiService.baseURL + '/GetRetailStoresByAccountSubAccount/' + this.accountid + "/" + this.subaccountid + "/" + this.storeid);

    this.apiService.getCall(this.apiService.baseURL + '/GetRetailStoresByAccountSubAccount/' + this.accountid + "/" + this.subaccountid + "/" + this.storeid)
      .subscribe(data => {
        this.userStoreList = data;
        console.log(data);
        this.spinner.hide();
      },
        (error) => {
          this.toastr.error(error, '', {
            timeOut: 5000,
          });
          this.spinner.hide();
        });
    //}
  }

  openModal(addStoreUserModal: TemplateRef<any>) {
    this.submitted = true;
    this.editMode = false;
    // this.emptyInput = this.storeUserForm.value.SUBACCT_OFFICE_ID;
    //  if( this.emptyInput != ""){
    this.modalRef = this.modalService.show(addStoreUserModal, Object.assign({}, { class: 'width-720' }));
    // }
  }

  openSmallModal(addStoreUserModal: TemplateRef<any>) {
    this.submitted = true;
    this.editMode = false;
    this.modalRef = this.modalService.show(addStoreUserModal, Object.assign({}, { class: 'width-480' }));
    // }
  }

  selectedPassword: any;
  selectedAddress: any;
  selectedPhoto: any;

  openDetails(template: any, pass: any, address: any, photo: any) {

    this.selectedPassword = pass;
    this.selectedAddress = address;
    this.selectedPhoto = photo;

    this.openSmallModal(template)

  }

  slectedUserStore: any

  registerOnMdr(template: any, store: any) {

    this.slectedUserStore = store;
    this.openSmallModal(template)

  }

  registerToMDR(store: any) {

    const payload = {
      User_Mobileno: store.RETAIL_D2C_ACCT_INTRNL_TEAM_MOBL_NUMBR,
      MDR_Main_SubAcctid: "6139",
      MDR_Main_StoreId: "60134",
      Login_SubAcctid: this.subaccountid,
      Login_Storeid: this.storeid,
      MDR_System_Flg: true
    }

    console.log("Payload: ", payload)

    this.apiService.postCall(this.apiService.baseURL + '/register', payload)
      .subscribe(data => {
        console.log(data);
        this.toastr.success(data.Message)
      },
        (error) => {
          this.toastr.error(error, '', {
            timeOut: 5000,
          });
        });

    this.modalRef.hide();
  }

  deleteAcc(store: any) {

    const payload = {
      User_Mobileno: store.RETAIL_D2C_ACCT_INTRNL_TEAM_MOBL_NUMBR,
      Login_SubAcctid: this.subaccountid,
      Login_Storeid: this.storeid
    }

    this.apiService.postCall(this.apiService.baseURL + '/Delete-User-MDR-MyloginAccount', payload)
      .subscribe(data => {
        console.log(data);
        this.toastr.success(data);
      },
        (error) => {
          this.toastr.error(error, '', {
            timeOut: 5000,
          });
        });

    this.getUserStoreList()
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
    // console.log(this.base64textString);
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
    // console.log(this.base64textString1);
    this.isImageSaved1 = true;
  }

  onRoleChange(e) {
    // this.roleID = this.addStoreUserForm.value.RETAIL_USR_ROLE;
    this.roleName = e.target.options[e.target.options.selectedIndex].text;
    console.log(this.roleName);
  }

  addStoreUser() {
    let addStoreUserData = {
      RETAIL_ACCOUNT_ID: +this.getlogindata.RETAIL_D2C_ACCT_ID,
      RETAIL_SUBACCOUNT_ID: +this.subaccountid,
      RETAIl_STORE_ID: +this.storeid,
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
        this.getUserStoreList();
      },
        (error) => {
          console.log(error);
          this.toastr.error(error.error.Message, '', {
            timeOut: 5000,
          });
        });
  }

  getRetailStoresById(addStoreUserModal, userID, storeID) {
    this.userID = userID;
    this.ispassword = true;
    this.editMode = true;
    
    this.apiService.getCall(this.apiService.baseURL + '/GetRetailStoresById/' + userID + "/" + this.subaccountid + "/" + storeID)
      .subscribe(data => {
        this.retiailStoreData = data;
        this.cstmrActiveFlag = data.RETAIL_D2C_ACCT_INTRNL_CSTMR_ISACTIV_FLG;
        console.log(data);
        this.modalRef = this.modalService.show(addStoreUserModal, Object.assign({}, { class: 'width-720' }));
        this.imagePath = data.RETAIL_D2C_ACCT_INTRNL_CUSTMR_PHOTO_Path.substring(2);
        let imgurl = this.imgURL + this.imagePath;
        fetch(imgurl)
          .then(response => response.blob())
          .then(File => {
            var reader = new FileReader();
            reader.onload = (e: any) => {
              const imgBase64Path = e.target.result;
              this.base64textString = imgBase64Path.substring(23);
            };
            reader.readAsDataURL(File);


          });

        this.addStoreUserForm.patchValue({
          RETAIL_USR_FIRST_NAME: data.RETAIL_USR_FIRST_NAME,
          RETAIL_USR_LAST_NAME: data.RETAIL_USR_LAST_NAME,
          RETAIL_USR_ROLE: data.RETAIL_USR_ROLE,
          RETAIL_USR_EMAIL_ID: data.RETAIL_USR_EMAIL_ID,
          RETAIL_D2C_ACCT_INTRNL_CSTMR_ADDRESS: data.RETAIL_D2C_ACCT_INTRNL_CSTMR_ADDRESS,
          RETAIL_D2C_ACCT_INTRNL_CUSTMR_PHOTO: data.RETAIL_D2C_ACCT_INTRNL_CUSTMR_PHOTO,
          RETAIL_D2C_ACCT_INTRNL_TEAM_MOBL_NUMBR: data.RETAIL_D2C_ACCT_INTRNL_TEAM_MOBL_NUMBR,
          RETAIL_D2C_ACCT_INTRNL_CSTMR_RCNT_PWD: data.RETAIL_D2C_ACCT_INTRNL_CSTMR_RCNT_PWD,
        });
      },
        (error) => {
          this.toastr.error(error.error.Message, '', {
            timeOut: 5000,
          });

        });
  }

  EditStoreUsers() {
    let editStoreUserData = {
      RETAIL_ACCOUNT_ID: +this.getlogindata.RETAIL_D2C_ACCT_ID,
      RETAIL_SUBACCOUNT_ID: this.subaccountid,
      RETAIL_STORE_ID: +this.storeid,
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

    console.log("Edit payload: ", editStoreUserData);

    this.apiService.postCall(this.apiService.baseURL + '/EditStoreUsers', editStoreUserData)
      .subscribe(data => {
        this.toastr.success('Update Successfully', '', { timeOut: 5000, });
        this.modalRef.hide();
        this.getUserStoreList();
      },
        (error) => {
          this.toastr.error(error.error.Message, '', {
            timeOut: 5000,
          });
        });

  }

}