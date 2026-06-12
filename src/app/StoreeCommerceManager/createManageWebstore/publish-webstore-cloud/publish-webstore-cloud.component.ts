import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-publish-webstore-cloud',
  templateUrl: './publish-webstore-cloud.component.html',
  styleUrls: ['./publish-webstore-cloud.component.scss']
})
export class PublishWebstoreCloudComponent implements OnInit {
  imgURL = this.apiService.imgURL;
  storelist: any;
  storeName: any;
  domainID = 1;
  userStoreList: any;
  submitted = false;
  retiailStoreData: any;
  userID: any;
  responseForCloudList: any;
  storeUserForm: FormGroup;
  showuserStore: boolean;
  show: boolean;
  disabled: boolean = true;
  getlogindata: any;
  accountid: any;
  subaccountid: any;
  storeid: any;
  domainid: any;
  constructor(private apiService: ApiService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService) {

      this.getlogindata = localStorage.getItem('logindata');    
    this.domainid = localStorage.getItem('getDomainID'); 
    this.getlogindata = JSON.parse(this.getlogindata);
    this.accountid = this.getlogindata.RETAIL_D2C_ACCT_ID;
    this.subaccountid = this.getlogindata.RETAIL_D2C_USR_SUBACCT_ID;
    this.storeid = this.getlogindata.RETAIL_D2C_ACCT_INTRNL_OFFICE_REGID;
    this.storeName = this.getlogindata.RETAIL_D2C_SUBACCT_OFFICE_NAME;
   
     }
 

  ngOnInit(): void {
    this.getStoreList();
    this.storeUserForm = this.formBuilder.group({
      SUBACCT_OFFICE_ID: this.storeid,
      RETAIL_D2C_PRODUCT_ID: ['', Validators.required],
    });
  }
  get f() { return this.storeUserForm.controls; }

  getStoreList() {
    this.apiService.storeList().subscribe((data) => {
      this.storelist = data;
      console.log(this.storelist);
    });
  }

  validateResponseForCloud(){
  //  this.submitted = true;
    let validateResponseForCloudData = {
     RETAIL_DOMAIN_ID: +this.domainID,
     RETAIL_ACCOUNT_ID: +this.accountid,
     RETAIL_SUBACCOUNT_ID: +this.subaccountid,
     RETAIl_STORE_ID: +this.storeid,
     }
  
  //   if (this.storeUserForm.invalid) {
  //     return;
  //  }
 
    console.log(validateResponseForCloudData);
    this.apiService.postCall(this.apiService.baseURL + '/ValidateResponseForCloud', validateResponseForCloudData)
    .subscribe(data => {
     this.responseForCloudList = data;
    console.log(data);
    this.show = true;
 //   this.toastr.success('Add Successfully', '',{timeOut: 5000,});
 
    },
    (error) => {   
     this.toastr.error(error, '',{
      timeOut: 5000,
    });
    });
  }

  publishMyStoreOnCloud(){
     let publishMyStoreOnCloudData = {
       RETAIL_DOMAIN_ID: +this.domainID,
       RETAIL_ACCOUNT_ID: +this.accountid,
       RETAIL_SUBACCOUNT_ID: +this.subaccountid,
       RETAIl_STORE_ID: +this.storeid,
       RETAIL_VALIDATE_RESPONSE_FOR_CLOUD_PUBLISHING: true
       }
 
      console.log(publishMyStoreOnCloudData);
      this.apiService.postCall(this.apiService.baseURL + '/PublishMyStoreOnCloud', publishMyStoreOnCloudData)
      .subscribe(data => {
      console.log(data);
      this.show = true;
      this.toastr.success(data, '',{timeOut: 5000,});
   
      },
      (error) => {   
       this.toastr.error(error, '',{
        timeOut: 5000,
      });
      });
    }

}
