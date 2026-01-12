import { Component, OnInit, TemplateRef } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-self-take-away-dispatch-pos',
  templateUrl: './self-take-away-dispatch-pos.component.html',
  styleUrls: ['./self-take-away-dispatch-pos.component.scss']
})
export class SelfTakeAwayDispatchPOSComponent implements OnInit {
  imgURL = this.apiService.imgURL;
  getlogindata: any;
  accountid: any;
  subaccountid: any;
  storeid: any;
  form: FormGroup;
  submitted = false;
  customerID: any;
  customerName: string;
  profileImage: any;
  rackID: any;
  packetOrder: any;
  orderNumber: any;
  detailsFound: boolean;
  happycodematch: boolean = false;
  storeName: any;
  domainid: any;
  pcInvoiceFlag: boolean = true;
  modalRef?: BsModalRef;
  qrcode: any;
  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private modalService: BsModalService,
    private toastr: ToastrService,
    private commonservice: CommonService,
    
  ) {
    this.accountid = this.apiService.requiredLoginData.accountid;
    this.subaccountid = this.apiService.requiredLoginData.subaccountid;
    this.storeid = this.apiService.requiredLoginData.storeid;
    this.storeName = this.apiService.requiredLoginData.storeName;
    this.domainid = this.apiService.requiredLoginData.domainid;

  }

  ngOnInit(): void {
  
  this.form = this.formBuilder.group(
    {
      RETAIL_ORDER_NUMBR: ['', Validators.required],
      RETAIL_HAPPY_CODE: ['', Validators.required],
    });
  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    this.SelfTakeAwayDeliveryPOS();
  }

SelfTakeAwayDeliveryPOS(){
   let selfDeliveryPOSLost = {
    ACCT_ID: this.accountid,
    SUBACCT_ID: this.subaccountid,
    SUBACCT_OFFICE_ID: +this.storeid,
    RETAIL_ORDER_NUMBR: this.form.value.RETAIL_ORDER_NUMBR,
    RETAIL_HAPPY_CODE: this.form.value.RETAIL_HAPPY_CODE
    }
    console.log(selfDeliveryPOSLost);
    this.apiService.postCall(this.apiService.baseURL + '/SelfTakeAwayDeliveryPOS', selfDeliveryPOSLost)
  .subscribe(data => {
    console.log(data);
    if(data.HAPPY_CODE_MATCHED_FLAG == 1){
      this.detailsFound = true;
      this.happycodematch = true;
      this.customerID = data.RETAIL_D2C_CUSTOMER_ID;
      this.customerName = data.RETAIL_D2C_CUSTOMER_FIRST_NAME + " " + data.RETAIL_D2C_CUSTOMER_LAST_NAME;
      this.profileImage = data.RETAIL_D2C_PROFILE_IMAGE;
      this.rackID = data.RETAIL_D2C_STORAGE_RACK_ID;
      this.packetOrder = data.RETAIL_PACKETS_IN_ORDERS;
      this.orderNumber = this.form.value.RETAIL_ORDER_NUMBR;
      this.toastr.success(data.Message, '', {
        timeOut: 5000,
      });
    }
   else {
    this.detailsFound = false;
    this.toastr.error(data.Message, '', {
      timeOut: 5000,
    });
   }
    },
    (error) => {  
      this.happycodematch = false;
      this.detailsFound = false;                           
     this.toastr.error(error, '',{
       timeOut: 5000,
    })
  })  
  }
StorePOSOrderDeliveryDispatch(){
  let deliverDispatchList = {
    POS_HOME_DELIVERY_TYPE_FLG: false,
    POS_SELF_TAKEAWAY_DELIVERY_TYPE_FLG: true,
    POS_WALK_IN_DELIVERY_TYPE_FLG: false,
    RETAIL_ORDER_NUMBR: this.form.value.RETAIL_ORDER_NUMBR
   }
   console.log(deliverDispatchList);
   this.apiService.postCall(this.apiService.baseURL + '/StorePOSOrderDeliveryDispatch', deliverDispatchList)
 .subscribe(data => {
   console.log(data);
   this.toastr.success(data.Message, '',{
    timeOut: 5000,
 })
   },
   (error) => {                           
    this.toastr.error(error, '',{
      timeOut: 5000,
   })
 })  

}

pcChange(pcValue) {
  console.log(pcValue);
  if(pcValue == "Invoice"){
    this.pcInvoiceFlag = true;
  }
  else{
    this.pcInvoiceFlag = false;
  }
}

openQRModal(qrtemplate: TemplateRef<any>) {
  this.modalRef = this.modalService.show(qrtemplate);
  this.getQRCode();
}


getQRCode(){
 this.apiService.getCall(this.apiService.baseURL + '/GetQRCode')
 .subscribe(data => {
   console.log(data);
   this.qrcode = data[0].ALL_DAY_DIGITAL_BANK_ACCT_QR_CODE_IMAGE;
 },
   (error) => {                           
    this.toastr.error(error, '',{
      timeOut: 5000,
   })
 })  

}

}
