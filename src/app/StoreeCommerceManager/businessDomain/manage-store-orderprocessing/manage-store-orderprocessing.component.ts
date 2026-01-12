import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-manage-store-orderprocessing',
  templateUrl: './manage-store-orderprocessing.component.html',
  styleUrls: ['./manage-store-orderprocessing.component.scss']
})
export class ManageStoreOrderprocessingComponent implements OnInit {
  imgURL = this.apiService.imgURL;
  storeUserForm:FormGroup;
  storeID: any;
  storelist: any;
  storeName: any;
  disabled: boolean = true;
  RETAIL_CONSOLE_NAME: string;
  addConsoleForm: FormGroup;
  submitted = false;
  consoleList: any;
  selectedRow: Number;
  setClickedRow: Function;
  update: boolean = false;
  modalTitle: string;
  consoleID: any;
  availableProductLineList: any;
  isdisabled: boolean = true
  viewProductLineAddedList : any;
  consolename: string;
  hideProductLineFlag: boolean = false
  getlogindata: any;
  accountid: any;
  subaccountid: any;
  storeid: any;
  domainid: any;
  constructor(private apiService:ApiService,
     private modalService: BsModalService,
     private formBuilder: FormBuilder,
     private toastr: ToastrService)
   { 
    this.accountid = this.apiService.requiredLoginData.accountid;
    this.subaccountid = this.apiService.requiredLoginData.subaccountid;
    this.storeid = this.apiService.requiredLoginData.storeid;
    this.storeName = this.apiService.requiredLoginData.storeName;
    this.domainid = this.apiService.requiredLoginData.domainid;
    this.setClickedRow = function (index) {
      this.selectedRow = index;
     }
   }

  modalRef?: BsModalRef;
  

  ngOnInit(): void {
   // this. getStoreList();
   this.DisplayConsolesofStores();
    this.storeUserForm = this.formBuilder.group({
      STORE_ID: this.storeid,
      ACCT_ID: this.accountid,
      SUBACCT_ID: this.subaccountid,
      RETAIL_D2C_PRODUCT_ID: ['', Validators.required],
     });

     this.addConsoleForm = this.formBuilder.group({
      RETAIL_CONSOLE_NAME: ['', Validators.required],
     });
  }

//   getStoreList() {
//     this.apiService.storeList().subscribe((data) => {
//       this.storelist = data;
//       console.log(this.storelist);
//   });
//  }

//  onStoreChange(e){
//   this.storeID = this.storeUserForm.value.STORE_ID;
//    this.storeName = e.target.options[e.target.options.selectedIndex].text;
//    console.log(this.storeID);
//    this.disabled = true;
//    if(this.storeName != "Select") {
//     this.DisplayConsolesofStores();
//     this.disabled = false;
//    }
 
//  }

  openModal(template: TemplateRef<any>) {
    this.update = false;
    this.modalTitle = "Add Store Console";
    const initialState  = {
      list: [this.storeName, this.accountid, this.subaccountid, this.storeid]
      // storename: this.storeName,
      // accountid: this.accountID,
      // subaccountid: this.subAccountID,
      // storeid: this.storeID
    }
    this.modalRef = this.modalService.show(template, {initialState, class: 'gray modal-md' });
  }


  DisplayConsolesofStores(){
     let dataList = {
       ACCT_ID: this.accountid,
       SUBACCT_ID: this.subaccountid,
       STORE_ID: + this.storeid
      }
    
   console.log(dataList);
   this.apiService.postCall(this.apiService.baseURL + '/DisplayConsolesofStores', dataList)
    .subscribe(data => {
    console.log(data);
    this.consoleList = data;
   
    if(data.length == 0) {
      this.toastr.error('Data not Available', '',{timeOut: 5000,});
      this.hideProductLineFlag = false;
    }
  
  //  this.toastr.success('STORE ORDER PROCESSING WORKFLOW CYCLE IS UPDATED', '',{timeOut: 5000,});
    },
    (error) => {   
     this.toastr.error(error.error.Message, '',{
      timeOut: 5000,
    });
    });
   
   }

   get f() { return this.addConsoleForm.controls; }

   AddConsolesofStores(){
    this.submitted = true;
    let dataList = {
      ACCT_ID: this.accountid,
      SUBACCT_ID: this.subaccountid,
      STORE_ID: + this.storeid,
      RETAIL_CONSOLE_NAME: this.addConsoleForm.value.RETAIL_CONSOLE_NAME
     }

     if (this.addConsoleForm.invalid) {
      return;
  }

console.log(dataList);
this.apiService.postCall(this.apiService.baseURL + '/ADDNewConsoletoStore', dataList)
 .subscribe(data => {
 console.log(data);

 if(data.length == 0) {
   this.toastr.success('Data not Available', '',{timeOut: 5000,});
 }

this.toastr.success('Added Successfully', '',{timeOut: 5000,});
 },
 (error) => {   
  this.toastr.error(error.error.Message, '',{
   timeOut: 5000,
 });
 });

}

editRow(consoleId, consoleName, template) {
  this.modalTitle = "Update Store Console";
console.log(consoleId, consoleName);
this.consoleID = consoleId;
this.modalRef = this.modalService.show(template);
this.update = true;

this.addConsoleForm.patchValue({  
     // ACCT_ID: this.accountID,
    //  SUBACCT_ID: this.subAccountID,
    //  STORE_ID: + this.storeID,
      RETAIL_CONSOLE_ID: + this.storeid,
      RETAIL_CONSOLE_NAME: consoleName
  
});  
}

viewProductLine(consoleId){
  this.apiService.getCall(this.apiService.baseURL + '/ViewProductlinesAvailablewithConsole/' + consoleId )
  .subscribe(data => {
 console.log(data);

 if($.isArray(data)) {
  this.viewProductLineAddedList = data;
} else {
  this.viewProductLineAddedList = [];
}


});
}




updateConsole() {
  let updateList = {
    ACCT_ID: this.accountid,
    SUBACCT_ID: this.subaccountid,
    STORE_ID: + this.storeid,
    RETAIL_CONSOLE_ID: +this.consoleID,
    RETAIL_CONSOLE_NAME: this.addConsoleForm.value.RETAIL_CONSOLE_NAME
   }
   console.log(updateList);
   this.apiService.postCall(this.apiService.baseURL + '/EditNewConsoletoStore', updateList)
 .subscribe(data => {
 console.log(data);
 this.DisplayConsolesofStores();
 this.modalRef?.hide();
 this.toastr.success('Update Successfully', '',{timeOut: 5000,});
 },
 (error) => {   
  this.toastr.error(error.error.Message, '',{
   timeOut: 5000,
 });
 });
}


displayAvailableProductLine(consoleId, consoleName){
  this.consoleID = consoleId;
  this.consolename = consoleName;
  let productLineData = {
    ACCT_ID: this.accountid,
    SUBACCT_ID: this.subaccountid,
    STORE_ID: + this.storeid,
    RETAIL_CONSOLE_ID: + consoleId
   }
   console.log(productLineData);
   this.apiService.postCall(this.apiService.baseURL + '/DisplayAvailableProductLine', productLineData)
 .subscribe(data => {
 console.log(data);
 this.hideProductLineFlag = true;
 this.availableProductLineList = data;
 this.viewProductLine(consoleId);
 //this.toastr.success('Update Successfully', '',{timeOut: 5000,});
 },
 (error) => {   
  this.toastr.error(error, '',{
   timeOut: 5000,
 });
 });
  
}

onItemChange(value){
  console.log(" Value is : ", value );
  if(value){
    this.isdisabled = false;
  }
  
}

ADDProductlinetoConsole(productid){
  let productLineData = {
    Product_Line: + productid,
    RETAIL_CONSOLE_ID: + this.consoleID
   }
   console.log(productLineData);
   this.apiService.postCall(this.apiService.baseURL + '/ADDProductlinetoConsole', productLineData)
 .subscribe(data => {
 console.log(data);
 this.toastr.success(data, '',{timeOut: 5000,});
 this.viewProductLine(this.consoleID);
 },
 (error) => {   
  this.toastr.error(error, '',{
   timeOut: 5000,
 });
 });
  
}

DeleteProductlinetoConsole(productid){
  let productLineData = {
    Product_Line: + productid,
    RETAIL_CONSOLE_ID: + this.consoleID
   }
   console.log(productLineData);
   this.apiService.postCall(this.apiService.baseURL + '/DeleteProductlinetoConsole', productLineData)
 .subscribe(data => {
 console.log(data);
 this.toastr.success(data, '',{timeOut: 5000,});
 this.viewProductLine(this.consoleID);
 },
 (error) => {   
  this.toastr.error(error, '',{
   timeOut: 5000,
 });
 });
  
}

}
