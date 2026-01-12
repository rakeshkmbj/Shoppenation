import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-add-new-physical-store',
  templateUrl: './add-new-physical-store.component.html',
  styleUrls: ['./add-new-physical-store.component.css']
})
export class AddNewPhysicalStoreComponent implements OnInit {
  countryID: number;
  stateID: number;
  cityID: number;
  pinID: number;
  public addStoreForm: FormGroup;
  gsttype: any;
  licensetype: any;
  domaintype: any;
  getModalData: any;
  accounttype: any;
  sameAccountType: boolean;
  otherAccountType: boolean;
  officeTypeValue: any;
  godown: boolean;
  branchOffice: boolean;
  franchisee: boolean;
  stockist: boolean;
  thirdParty: boolean;
  factoryOutlet: boolean;
  sameGstnFlag: boolean;
  otherGstnFlag: boolean;
  sameLicenseFlag: boolean;
  otherLicenseFlag: boolean;
  uploadLabel: string;
  uploadLabel1: string;
  base64textString: string;
  isImageSaved: boolean;
  base64textString1: string;
  isImageSaved1: boolean;
  uploadLabel2: string;
  base64textString2: string;
  isImageSaved2: boolean;
  domainid: number;
  domainName: any;
  replicaValue: any;
  requiredReplica: boolean;
  notrequiredReplica: boolean;
  controlType: any;
  c_control: boolean;
  s_control: boolean;
  same_domainFlag: boolean;
  diff_domainFlag: boolean;
  constructor(
    public bsModalRef: BsModalRef,
    public options: ModalOptions,
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private toastr: ToastrService
    ) { 
    console.log(this.options.initialState);
    this.getModalData = this.options.initialState;
    this.domainid = this.apiService.requiredLoginData.domainid;
    console.log(this.domainid);
  }

  ngOnInit(): void {
    this.uploadLabel = "No file choosen";
    this.uploadLabel1 = "No file choosen";
    this.uploadLabel2 = "No file choosen";
  this.addStoreForm  =  this.formBuilder.group({
      DomainId: ['', Validators.required],
      Country: ['', Validators.required],
      State: ['', Validators.required],
      City: ['', Validators.required],
      PinCode: ['', Validators.required],
      RETAIL_STORE_NAME: ['', Validators.required],
      RETAIL_STORE_ADDRESS: ['', Validators.required],
      RETAIL_CONTACT_FIRST_NAME: ['', Validators.required],
      RETAIL_CONTACT_LAST_NAME: ['', Validators.required],
      RETAIL_CONTACT_MOBILE_MUMBR: ['', Validators.required],
      RETAIL_CONTACT_EMAIL_ID: ['', Validators.required],
      RETAIL_CONTACT_PHOTO_IMAGE: ['', Validators.required],
      RETAIL_CONTACT_KYC_PHOTO_ID_IMAGE: ['', Validators.required],
      RETAIl_STORE_BANK_NAME: ['', Validators.required],
      RETAIL_STORE_BANK_BRANCH_ADDRESS: ['', Validators.required],
      RETAIl_STORE_BANK_IFSC_NUMBR: ['', Validators.required],
      RETAIL_STORE_BANK_ACCOUNT_TYPE: ['', Validators.required],
      RETAIl_STORE_BANK_ACCOUNT_NUMBR: ['', Validators.required],
      RETAIL_STORE_BANK_CANCELLED_CHEQUE_IMAGE: [''],
      RETAIL_STORE_OPERATE_ON_SAME_GSTIN_FLG: ['', Validators.required],
      RETAIL_STORE_OPERATE_ON_DIFFERENT_GSTIN_FLG: ['', Validators.required],
      RETAIL_STORE_GSTIN_NUMBR: ['', Validators.required],
      RETAIl_STORE_LICENSE_NO: ['', Validators.required],
      RETAIL_STORE_IN_SAME_PERIMETRIC_AREA_AS_PRIMARY_STORE_FLG:['', Validators.required],
      RETAIL_STORE_DOMAIN_ID: ['', Validators.required],
     // accountType: [true, ''],
      accountType: ['', Validators.required],
      officeType: ['Select', Validators.required],
      storeReplica: ['Select', Validators.required]
    });
  }

  receiveCountryId($event) {
    this.countryID = $event;
  }

  receiveStateId($event) {
    this.stateID = $event;
  }

  receiveCityId($event) {
    this.cityID = $event;
  }

  receivePinId($event) {
    this.pinID = $event;
  }

  onChangegst(e) {
    this.gsttype= e.target.value;
    console.log(this.gsttype);
 }
 onChangelicense(e) {
  this.licensetype= e.target.value;
}
onChangeDomain(e) {
  this.domaintype= e.target.value;
}

onChangeAccount(e) {
  //this.accounttype= e.target.value;
  this.accounttype = this.addStoreForm.value.accountType;
}


onChangeReplica(e){
  this.replicaValue = this.addStoreForm.value.storeReplica;
  if(this.replicaValue == 'Required'){
    this.requiredReplica = true;
    this.notrequiredReplica = false;
   // this.addStoreForm.value.RETAIL_STORE_REPLICA_REQUIRED_FLG = true;
   // this.addStoreForm.value.RETAIL_STORE_REPLICA_NOTREQUIRED_FLG = false;
    
  }

  else{
    this.requiredReplica = false;
    this.notrequiredReplica = true;
   // this.addStoreForm.value.RETAIL_STORE_REPLICA_REQUIRED_FLG = false;
   // this.addStoreForm.value.RETAIL_STORE_REPLICA_NOTREQUIRED_FLG = true;
  }
  
 }

domainChange(e){
  this.domainid = this.addStoreForm.value.RETAIL_STORE_DOMAIN_ID;
   this.domainName = e.target.options[e.target.options.selectedIndex].text;
   console.log(this.domainid);
  
 }

officeType(e){
  console.log(e.target.value);
  this.officeTypeValue = e.target.value;
}
onChangeControl(e){
  this.controlType = e.target.value;
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

 onSelectedFile2(event2) {
  var files2 = event2.target.files;
  var file2 = files2[0];
  var filename = files2[0].name;
  this.uploadLabel2 = filename;

  if (files2 && file2) {
   var reader = new FileReader();
   reader.onload = this._handleReaderLoaded2.bind(this);
   reader.readAsBinaryString(file2);

  }
 }

 _handleReaderLoaded2(readerEvt2) {
  let binaryString2 = readerEvt2.target.result;
  this.base64textString2 = btoa(binaryString2);
  console.log(this.base64textString2);
  this.isImageSaved2 = true;
 }

addPhysicalStore(){
 
  

  if(this.controlType == 1) {
    this.c_control = true;
    this.s_control = false;
  }

  if(this.controlType == 0) {
    this.c_control = false;
    this.s_control = true;
  }

  if(this.officeTypeValue == 1) {
    this.godown = true;
    this.branchOffice = false;
    this.franchisee = false;
    this.stockist = false;
    this.thirdParty = false;
    this.factoryOutlet = false;
  }

 else if(this.officeTypeValue == 2) {
    this.godown = false;
    this.branchOffice = true;
    this.franchisee = false;
    this.stockist = false;
    this.thirdParty = false;
    this.factoryOutlet = false;
  }

  else if(this.officeTypeValue == 3) {
    this.godown = false;
    this.branchOffice = false;
    this.franchisee = true;
    this.stockist = false;
    this.thirdParty = false;
    this.factoryOutlet = false;
  }

  else if(this.officeTypeValue == 4) {
    this.godown = false;
    this.branchOffice = false;
    this.franchisee = false;
    this.stockist = true;
    this.thirdParty = false;
    this.factoryOutlet = false;
  }

  else if(this.officeTypeValue == 5) {
    this.godown = false;
    this.branchOffice = false;
    this.franchisee = false;
    this.stockist = false;
    this.thirdParty = true;
    this.factoryOutlet = false;
  }

  else if(this.officeTypeValue == 6) {
    this.godown = false;
    this.branchOffice = false;
    this.franchisee = false;
    this.stockist = false;
    this.thirdParty = false;
    this.factoryOutlet = true;
  }
  if(this.gsttype == 0) {
    this.addStoreForm.value.RETAIL_STORE_GSTIN_NUMBR = null;
    this.sameGstnFlag = true;
    this.otherGstnFlag = false;
  }

  if(this.gsttype == 1) {
    this.sameGstnFlag = false;
    this.otherGstnFlag = true;
  }

  if(this.licensetype == 0) {
    this.addStoreForm.value.RETAIl_STORE_LICENSE_NO = null;
    this.sameLicenseFlag = true;
    this.otherLicenseFlag = false;
  }

  if(this.licensetype == 1) {
    this.sameLicenseFlag = false;
    this.otherLicenseFlag = true;
  }

  if(this.domaintype == 1) {
    this.domainid = this.domainid;
    this.same_domainFlag = true;
    this.diff_domainFlag = false;
  }

  if(this.domaintype == 0) {
    this.domainid = this.addStoreForm.value.RETAIL_STORE_DOMAIN_ID;
    this.same_domainFlag = false;
    this.diff_domainFlag = true;
    this.addStoreForm.value.RETAIL_STORE_REPLICA_REQUIRED_FLG = false;
    this.addStoreForm.value.RETAIL_STORE_REPLICA_NOTREQUIRED_FLG = false;
    this.c_control = false;
    this.s_control = false;
  }
  

  if(this.addStoreForm.value.accountType == true){
    this.sameAccountType = true;
    this.otherAccountType = false;
    this.addStoreForm.value.RETAIl_STORE_BANK_NAME = null;
    this.addStoreForm.value.RETAIl_STORE_BANK_IFSC_NUMBR = null;
    this.addStoreForm.value.RETAIL_STORE_BANK_BRANCH_ADDRESS = null;
    this.addStoreForm.value.RETAIl_STORE_BANK_ACCOUNT_NUMBR = null;
    this.addStoreForm.value.RETAIL_STORE_BANK_ACCOUNT_TYPE = null;
    this.addStoreForm.value.RETAIL_STORE_BANK_CANCELLED_CHEQUE_IMAGE = null;

  }
  if(this.addStoreForm.value.accountType == false){
    this.sameAccountType = false;
    this.otherAccountType = true;
  }

  

let addPhysicalStoreData = {
    RETAIL_ACCT_ID: this.getModalData.accountID,
    RETAIL_SUBACCT_ID: this.getModalData.subAccountID,
    RETAIL_STORE_NAME: this.addStoreForm.value.RETAIL_STORE_NAME,
    RETAIL_STORE_IN_SAME_PERIMETRIC_AREA_AS_PRIMARY_STORE_FLG: false,
    RETAIL_STORE_ADDRESS: this.addStoreForm.value.RETAIL_STORE_ADDRESS,
    RETAIL_STORE_COUNTRY: this.countryID,
    RETAIL_STORE_STATE: this.stateID,
    RETAIL_STORE_CITY: this.cityID,
    RETAIL_STORE_PINCODE: this.pinID,
    RETAIl_STORE_OFFICE_TYPE_BRANCH_STORE_FLAG: this.branchOffice,
    RETAIL_STORE_OFFICE_TYPE_FRANCHISEE_STORE_FLAG: this.franchisee,
    RETAIL_STORE_OFFICE_TYPE_FACTORY_OUTLET_FLAG: this.factoryOutlet,
    RETAIL_STORE_OFFICE_TYPE_FACTORY_WAREHOUSE_FLAG: this.godown,
    RETAIl_STORE_OFFICE_TYPE_STOCKIST_DISTRIBUTOR_FLG: this.stockist,
    RETAIL_STORE_OFFICE_TYPE_THIRD_PARTY_RETAIL_STORE_FLG: this.thirdParty,
    RETAIL_STORE_OPERATE_ON_SAME_GSTIN_FLG: this.sameGstnFlag,
    RETAIL_STORE_OPERATE_ON_DIFFERENT_GSTIN_FLG: this.otherGstnFlag,
    RETAIL_STORE_GSTIN_NUMBR: this.addStoreForm.value.RETAIL_STORE_GSTIN_NUMBR,
    RETAIl_STORE_OPERATE_ON_SAME_LICENSE_NO_FLG: this.sameLicenseFlag,
    RETAIL_STORE_OPERATE_ON_DIFFERENT_LICENSE_NO_FLG: this.otherLicenseFlag,
    RETAIl_STORE_LICENSE_NO: this.addStoreForm.value.RETAIl_STORE_LICENSE_NO,
    RETAIL_STORE_ON_SAME_DOMAIN_FLG: this.same_domainFlag,
    RETAIL_STORE_ON_DIFFERENT_DOMAIN_FLG: this.diff_domainFlag,
    RETAIL_STORE_DOMAIN_ID: this.domainid,
    RETAIL_STORE_REPLICA_REQUIRED_FLG: this.requiredReplica,
    RETAIL_STORE_REPLICA_NOTREQUIRED_FLG: this.notrequiredReplica,
    RETAIL_STORE_CENTRALLY_CONTROLLED_FLG: this.c_control,
    RETAIL_STORE_SOLO_CONTROLLED_FLG: this.s_control,
    RETAIL_CONTACT_FIRST_NAME: this.addStoreForm.value.RETAIL_CONTACT_FIRST_NAME,
    RETAIL_CONTACT_LAST_NAME: this.addStoreForm.value.RETAIL_CONTACT_LAST_NAME,
    RETAIL_CONTACT_MOBILE_MUMBR: this.addStoreForm.value.RETAIL_CONTACT_MOBILE_MUMBR,
    RETAIL_CONTACT_EMAIL_ID: this.addStoreForm.value.RETAIL_CONTACT_EMAIL_ID,
    RETAIL_CONTACT_PHOTO_IMAGE:  this.base64textString,
    RETAIL_CONTACT_KYC_PHOTO_ID_IMAGE:  this.base64textString1,
    RETAIl_STORE_ON_SAME_BANK_ACCOUNT_FLG: this.sameAccountType,
    RETAIL_STORE_ON_OTHER_BANK_ACCOUNT_FLG: this.otherAccountType,
    RETAIl_STORE_BANK_NAME: this.addStoreForm.value.RETAIl_STORE_BANK_NAME,
    RETAIL_STORE_BANK_BRANCH_ADDRESS: this.addStoreForm.value.RETAIL_STORE_BANK_BRANCH_ADDRESS,
    RETAIl_STORE_BANK_IFSC_NUMBR: this.addStoreForm.value.RETAIl_STORE_BANK_IFSC_NUMBR,
    RETAIL_STORE_BANK_ACCOUNT_TYPE: this.addStoreForm.value.RETAIL_STORE_BANK_ACCOUNT_TYPE,
    RETAIl_STORE_BANK_ACCOUNT_NUMBR: this.addStoreForm.value.RETAIl_STORE_BANK_ACCOUNT_NUMBR,
    RETAIL_STORE_BANK_CANCELLED_CHEQUE_IMAGE:  this.base64textString2 ? this.base64textString2 : null
  }
  console.log(addPhysicalStoreData);
  this.apiService.postCall(this.apiService.baseURL + '/AddPhysicalStore', addPhysicalStoreData)
  .subscribe(data => {
  console.log(data);
  this.toastr.success(data, '',{
    timeOut: 5000,
  });
  },
  (error) => {
    console.log(error);
    this.toastr.error(error.error, '',{
      timeOut: 5000,
    });
  })
}

}
