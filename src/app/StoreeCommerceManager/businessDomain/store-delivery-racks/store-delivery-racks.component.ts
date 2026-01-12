
import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-store-delivery-racks',
  templateUrl: './store-delivery-racks.component.html',
  styleUrls: ['./store-delivery-racks.component.scss']
})
export class StoreDeliveryRacksComponent implements OnInit {
 // baseURL: string = "http://www.shripatigroup.com/alcoolretail/carryr/retail";
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
   }

  ngOnInit(): void {
  this.GetStoreRacksAccountSubAccount(this.accountid, this.subaccountid, this.storeid);
    this.addrackForm = this.formBuilder.group({
      RETAIL_D2C_STORAGE_RACK_NAME: ['', Validators.required],
      RETAIL_D2C_STORAGE_RACK_PACKAGE_MAX_LIMIT_COUNT: ['', Validators.required]
    });
  }

  openModal(template: TemplateRef<any>) {
    this.addrackForm.patchValue({
      RETAIL_D2C_STORAGE_RACK_NAME: "",
      RETAIL_D2C_STORAGE_RACK_PACKAGE_MAX_LIMIT_COUNT: "Select",
      
    });
    this.isTitle = true;
    this.isAdd = true;
    this.modalRef = this.modalService.show(template, Object.assign({}, { class: 'rackModal' }));
  }

 

  addStoreRacks(){
  
    let rackData = {
      RETAIL_D2C_STORE_ACCT_ID: this.accountid,
      RETAIL_D2C_STORE_SUBACCT_ID: this.subaccountid,
      RETAIL_D2C_STORE_ID: this.storeid,
      RETAIL_D2C_STORAGE_RACK_NAME:this.addrackForm.value.RETAIL_D2C_STORAGE_RACK_NAME ,
      RETAIL_D2C_STORAGE_RACK_PACKAGE_MAX_LIMIT_COUNT: this.addrackForm.value.RETAIL_D2C_STORAGE_RACK_PACKAGE_MAX_LIMIT_COUNT,
     };

  
  console.log(rackData);
  this.apiService.postCall(this.apiService.baseURL + '/AddStoreRacks', rackData)
   .subscribe(data => {
    console.log(data);
    this.toastr.success("Added Successfully", '', {
    timeOut: 5000,
    });
    this.GetStoreRacksAccountSubAccount(this.accountid, this.subaccountid, this.storeid);
    this.modalRef.hide();
   },
   (error) => {                              //Error callback
     this.toastr.error(error, '', {
      timeOut: 5000,
     });

    }
   );
 }
 
 GetStoreRacksAccountSubAccount(accountId, subaccountId, OfficeId){
  this.apiService.getCall(this.apiService.baseURL + '/GetStoreRacksAccountSubAccount' + "/" + accountId+ "/" + subaccountId+ "/" + OfficeId)
  .subscribe(data => {
    console.log(data);
    this.rackDetails = data;

   } );
}



getRackDetail(template, rowlist){
  this.openModal(template);
  this.isTitle = false;
  this.isAdd = false;
  console.log(rowlist);
  this.rowlist = rowlist;
  this.addrackForm.patchValue({
    RETAIL_D2C_SORAGE_RACK_ID: rowlist.RETAIL_D2C_SORAGE_RACK_ID,
    RETAIL_D2C_STORE_ACCT_ID: rowlist.RETAIL_D2C_STORE_ACCT_ID,
    RETAIL_D2C_STORE_SUBACCT_ID: rowlist.RETAIL_D2C_STORE_SUBACCT_ID,
    RETAIL_D2C_STORE_ID: rowlist.RETAIL_D2C_STORE_ID,
    RETAIL_D2C_STORAGE_RACK_NAME: rowlist.RETAIL_D2C_STORAGE_RACK_NAME,
    RETAIL_D2C_STORAGE_RACK_PACKAGE_MAX_LIMIT_COUNT: rowlist.RETAIL_D2C_STORAGE_RACK_PACKAGE_MAX_LIMIT_COUNT,
})
}

updateRackDetails(){
  let updateData = {
    RETAIL_D2C_SORAGE_RACK_ID: + this.rowlist.RETAIL_D2C_SORAGE_RACK_ID,
    RETAIL_D2C_STORE_ACCT_ID: this.rowlist.RETAIL_D2C_STORE_ACCT_ID,
    RETAIL_D2C_STORE_SUBACCT_ID: this.rowlist.RETAIL_D2C_STORE_SUBACCT_ID,
    RETAIL_D2C_STORE_ID: this.rowlist.RETAIL_D2C_STORE_ID,
    RETAIl_CURRENT_COUNT:this.rowlist.RETAIl_D2C_STORAGE_RACK_TOTL_CURNT_FILLED_COUNT,
    RETAIL_D2C_STORAGE_RACK_NAME: this.addrackForm.value.RETAIL_D2C_STORAGE_RACK_NAME,
    RETAIL_D2C_STORAGE_RACK_PACKAGE_MAX_LIMIT_COUNT: + this.addrackForm.value.RETAIL_D2C_STORAGE_RACK_PACKAGE_MAX_LIMIT_COUNT,
    }
    console.log(updateData); 
  this.apiService.postCall(this.apiService.baseURL + '/EditStoreRacks', updateData)
  .subscribe(data => {
   console.log(data); 
  this.toastr.success('Updated Successfully', '',{
  timeOut: 5000,
});
this.GetStoreRacksAccountSubAccount(this.accountid, this.subaccountid, this.storeid);
this.modalRef.hide();
},
(error) => { 

  this.toastr.error(error.error.Message, '',{
   timeOut: 5000,
 });
   
 });
}

onBtnClick(){
  if(this.isAdd == true) {
    this.addStoreRacks();
  }
  else{
    this.updateRackDetails();
  }
}

}
