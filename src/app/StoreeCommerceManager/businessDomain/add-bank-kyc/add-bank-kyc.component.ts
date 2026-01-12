import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-add-bank-kyc',
  templateUrl: './add-bank-kyc.component.html',
  styleUrls: ['./add-bank-kyc.component.scss']
})
export class AddBankKYCComponent implements OnInit {
 // baseURL: string = "http://www.shripatigroup.com/alcoolretail/carryr/retail";
  imgURL = this.apiService.imgURL;
  addStoreBankForm: FormGroup;
  storeUserForm:FormGroup;
  base64textString: string;
  isImageSaved: boolean;
  uploadLabel = "";
  submitted = false;
  submitted1 = false;
  addStoreBankList: any;
  storelist: any;
  storeName: any;
  emptyInput: any;
  approvedBankList:any={};
  modalRef: any;
  showApprovedBank: boolean = false;
  getlogindata: any;
  accountid: any;
  subaccountid: any;
  storeid: any;
  domainid: any;
  constructor(private apiService:ApiService, private modalService: BsModalService,
     private formBuilder: FormBuilder, private toastr: ToastrService) {
      this.accountid = this.apiService.requiredLoginData.accountid;
      this.subaccountid = this.apiService.requiredLoginData.subaccountid;
      this.storeid = this.apiService.requiredLoginData.storeid;
      this.storeName = this.apiService.requiredLoginData.storeName;
      this.domainid = this.apiService.requiredLoginData.domainid;
      }

  ngOnInit(): void {
  //  this. getStoreList();
    this.uploadLabel = 'No file choosen';
    this.storeUserForm = this.formBuilder.group({
      SUBACCT_OFFICE_ID: [this.storeid, Validators.required],
      RETAIL_D2C_PRODUCT_ID: ['', Validators.required],
     });
    this.addStoreBankForm = this.formBuilder.group({
      RETAIL_D2C_BANK_NAME: ['', Validators.required],
      RETAIL_D2C_BANK_ACCOUNT_NUMBER: ['', [Validators.required, Validators.minLength(9)]],
      RETAIL_D2C_BANK_IFSC_CODE: ['', Validators.required],
      RETAIL_D2C_TYP_OF_BANK_ACCOUNT: ['', Validators.required],
      RETAIL_BRANCH_ADDRESS_DETAIL: ['', Validators.required],
      RETAIL_BANK_ACCOUNT_CANCLD_CHEQUE_IMG: ['', Validators.required]
    });
  }

//   getStoreList() {
//     this.apiService.storeList().subscribe((data) => {
//       this.storelist = data;
//       console.log(this.storelist);
//   });
//  }

//  onStoreChange(e){
//  this.officeID = this.storeUserForm.value.SUBACCT_OFFICE_ID;
//   this.storeName = e.target.options[e.target.options.selectedIndex].text;
//   console.log(this.officeID);
//   this.showApprovedBank= false;
// }
  
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
  //this.isFileUploaded = false
 }
 get f1() { return this.storeUserForm.controls; }
 get f() { return this.addStoreBankForm.controls; }

 getDisplayApprovedBank(){
  this.submitted1 = true;
 // this.emptyInput = this.storeUserForm.value.SUBACCT_OFFICE_ID;
 // if( this.emptyInput != ""){
  this.apiService.getCall(this.apiService.baseURL + '/GetDisplayApprovedBank/' + this.accountid + "/" + this.subaccountid + "/" + this.storeid)
   .subscribe(data => {
   this.approvedBankList = data.RETAIL_STS_BNKDTL_WORKFLOW_APPROVAL;
   console.log(data);
   this.showApprovedBank= true;
  },
(error) => {                              
  this.toastr.error(error.error.Message, '', {
   timeOut: 5000,
  });

 });
//}
}


sendToBackOfficeForApproval(){
  this.apiService.getCall(this.apiService.baseURL + '/SendToBackOfficeForApproval/' + this.accountid + "/" + this.subaccountid + "/" + this.storeid)
   .subscribe(data => {
   console.log(data);
   this.toastr.success(data.Message, '', {
    timeOut: 5000,
   });
},
(error) => {                              
  this.toastr.error(error.error.Message, '', {
   timeOut: 5000,
  });

 });

}

openModal(addStoreBankFormModal: TemplateRef<any>) {
  this.emptyInput = this.storeUserForm.value.SUBACCT_OFFICE_ID;
 // if( this.emptyInput != ""){
    this.modalRef = this.modalService.show(addStoreBankFormModal, Object.assign({}, { class: 'width-720' }));
 // }
}
 
  addStoreBank(){
    let currentDate = new Date();
    let currentDateLocal = currentDate.toLocaleDateString();
    let addStoreBankData = {
      RETAIL_D2C_ACCT_ID: this.accountid,
      RETAIL_D2C_SUBACCT_ID: this.subaccountid,
      RETAIl_D2C_OFFICE_REGID: this.storeid,
      RETAIL_D2C_BANK_NAME: this.addStoreBankForm.value.RETAIL_D2C_BANK_NAME,
      RETAIL_D2C_BANK_ACCOUNT_NUMBER: this.addStoreBankForm.value.RETAIL_D2C_BANK_ACCOUNT_NUMBER,
      RETAIL_D2C_BANK_IFSC_CODE: this.addStoreBankForm.value.RETAIL_D2C_BANK_IFSC_CODE,
      RETAIL_D2C_TYP_OF_BANK_ACCOUNT: this.addStoreBankForm.value.RETAIL_D2C_TYP_OF_BANK_ACCOUNT,
      RETAIL_BRANCH_ADDRESS_DETAIL: this.addStoreBankForm.value.RETAIL_BRANCH_ADDRESS_DETAIL,
      RETAIL_BANK_ACCOUNT_CANCLD_CHEQUE_IMG: this.base64textString,
      RETAIL_CHQ_IMAGE: this.base64textString,
      RETAIL_STORE_BANK_ADDED_DATETIME: currentDateLocal,
      RETAIL_STORE_BANK_BACKOFFICE_WRKFLOW_APPROVAL: null,
      RETAIL_STORE_BANK_BACKOFFICE_APPROVED_LOCKED_FLG: null,
      RETAIL_D2C_SYSTEM_BANK_DELETION_DATETIME: null,
      RETAIL_D2C_SYSTEM_BANK_DELETION_FLG: null
     }
     this.submitted = true;
     if (this.addStoreBankForm.invalid) {
      return;
  }
  console.log(addStoreBankData);
  this.apiService.postCall(this.apiService.baseURL + '/AddStoreBank', addStoreBankData)
   .subscribe(data => {
    this.addStoreBankList = data;
   console.log(data);
   this.toastr.success('Add Successfully', '',{timeOut: 5000,});
//   this.getUserStoreList();
   },
   (error) => {   
    this.toastr.error(error.error.Message, '',{
     timeOut: 5000,
   });
   });

  }

}
