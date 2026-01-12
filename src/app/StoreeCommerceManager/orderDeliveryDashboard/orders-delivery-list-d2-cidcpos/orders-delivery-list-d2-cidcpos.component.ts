import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-orders-delivery-list-d2-cidcpos',
  templateUrl: './orders-delivery-list-d2-cidcpos.component.html',
  styleUrls: ['./orders-delivery-list-d2-cidcpos.component.scss']
})
export class OrdersDeliveryListD2CIDCPOSComponent implements OnInit {
  imgURL = this.apiService.imgURL;
  getlogindata: any;
  accountid: any;
  subaccountid: any;
  storeid: any;
  storeName: any;
  orderNumber: any;
  notMatch: boolean;
  domainid: any;
  lastMileStoreDPOSData: any;
  disabled: boolean = true;
  modalRef?: BsModalRef;
  dispatchedList: any;
  isStoreDeliveryData: boolean;
  constructor(private apiService:ApiService, private modalService: BsModalService,
    private formBuilder: FormBuilder, private toastr: ToastrService) {
      this.getlogindata = localStorage.getItem('logindata');    
      this.domainid = localStorage.getItem('getDomainID'); 
      this.getlogindata = JSON.parse(this.getlogindata);
      this.accountid = this.getlogindata.RETAIL_D2C_ACCT_ID;
      this.subaccountid = this.getlogindata.RETAIL_D2C_USR_SUBACCT_ID;
      this.storeid = this.getlogindata.SUBACCT_OFFICES_RPOSTRY_ID;
      this.storeName = this.getlogindata.RETAIL_D2C_SUBACCT_OFFICE_NAME;
     
     }

  ngOnInit(): void {

  }
  
  getOrderNumberValue(event: any){
    this.orderNumber = event.target.value;
    if(this.orderNumber.length == 11 ) {
       this.notMatch = false;
       this.disabled = false;
    }
    else{
      this.notMatch = true;
      this.disabled = true;
    }
    }

    getOrderDetails(){
      this.LastMileStoreDeliveryPOS();
    }

  LastMileStoreDeliveryPOS(){
    let storeDeliveryPOSLost = {
    ACCT_ID: this.accountid,
    SUBACCT_ID: this.subaccountid,
    SUBACCT_OFFICE_ID: +this.storeid,
    RETAIL_ORDER_NUMBR: this.orderNumber
    }
    this.apiService.postCall(this.apiService.baseURL + '/LastMileStoreDeliveryPOS', storeDeliveryPOSLost)
  .subscribe(data => {
    console.log(data);
    this.lastMileStoreDPOSData = data;
    this.isStoreDeliveryData = true;

    if(data.READY_FOR_DELIVERY_STAGE_FLAG == 0) {
      this.isStoreDeliveryData = false;
      this.toastr.error(data.Message, '', {
        timeOut: 5000,
      });
    }
   else {
    this.toastr.success(data.Message, '', {
      timeOut: 5000,
    });
   }
    },
    (error) => {    
      this.isStoreDeliveryData = false;                       
     this.toastr.error(error.Message, '',{
       timeOut: 5000,
    })
  })  
  }

  storePOSOrderDeliveryDispatch(orderDispatchModal){
    let dispatchData = {
      POS_HOME_DELIVERY_TYPE_FLG: true,
      POS_SELF_TAKEAWAY_DELIVERY_TYPE_FLG: false,
      POS_WALK_IN_DELIVERY_TYPE_FLG: false,
      RETAIL_ORDER_NUMBR: this.orderNumber
    }
    console.log(dispatchData);
    this.apiService.postCall(this.apiService.baseURL + '/StorePOSOrderDeliveryDispatch', dispatchData)
  .subscribe(data => {
    console.log(data);
    this.dispatchedList = data;
    this.toastr.success(data.Message, '', {
      timeOut: 5000,
    });
    this.modalRef = this.modalService.show(orderDispatchModal,Object.assign({}, { class: 'orderDispatchModal' }));
    },
    (error) => {                             
     this.toastr.error(error, '',{
       timeOut: 5000,
    })
  })  
  }
  
  
  
  }


