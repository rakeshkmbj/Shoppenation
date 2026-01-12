import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-store-orderworkflow-cycle',
  templateUrl: './store-orderworkflow-cycle.component.html',
  styleUrls: ['./store-orderworkflow-cycle.component.scss']
})
export class StoreOrderworkflowCycleComponent implements OnInit {
  imgURL = this.apiService.imgURL;
  storeUserForm:FormGroup;
  storelist: any;
  storeName: any;
  cycle_flag1: boolean;
  cycle_flag2: boolean;
  getlogindata: any;
  accountid: any;
  subaccountid: any;
  storeid: any;
  domainid: any;
  constructor(private apiService:ApiService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService) {
      this.accountid = this.apiService.requiredLoginData.accountid;
      this.subaccountid = this.apiService.requiredLoginData.subaccountid;
      this.storeid = this.apiService.requiredLoginData.storeid;
      this.storeName = this.apiService.requiredLoginData.storeName;
      this.domainid = this.apiService.requiredLoginData.domainid;
    }


  ngOnInit(): void {
  
    this.storeUserForm = this.formBuilder.group({
      STORE_ID: this.storeid,
      ACCT_ID: this.accountid,
      SUBACCT_ID: this.subaccountid,
      Workflow_type: [''],
      RETAIL_D2C_PRODUCT_ID: ['', Validators.required],
     });
  }

//   getStoreList() {
//     this.apiService.storeList().subscribe((data) => {
//       this.storelist = data;
//       console.log(this.storelist);
//   });
//  }

 get f1() { return this.storeUserForm.controls; }
 
StoreorderProcessingWorkflowCycle(){
 if(this.storeUserForm.value.Workflow_type == 1) {
  this.cycle_flag1 = true;
  this.cycle_flag2 = false;
 }

 if(this.storeUserForm.value.Workflow_type == 2) {
  this.cycle_flag1 = false;
  this.cycle_flag2 = true;
 }

  let dataList = {
    ACCT_ID: this.accountid,
    SUBACCT_ID: this.subaccountid,
    STORE_ID: + this.storeid,
    RETAIL_STORE_WORLFLOW_CYCLE1_FLG: this.cycle_flag1,
    RETAIL_STORE_WORKFLOW_CYCLE2_FLG: this.cycle_flag2
   }
 
console.log(dataList);
this.apiService.postCall(this.apiService.baseURL + '/StoreorderProcessingWorkflowCycle', dataList)
 .subscribe(data => {
 console.log(data);
 this.toastr.success('STORE ORDER PROCESSING WORKFLOW CYCLE IS UPDATED', '',{timeOut: 5000,});
 },
 (error) => {   
  this.toastr.error(error.error.Message, '',{
   timeOut: 5000,
 });
 });

}

  

}
