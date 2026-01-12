import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-delivery-order-packaging',
  templateUrl: './delivery-order-packaging.component.html',
  styleUrls: ['./delivery-order-packaging.component.scss']
})
export class DeliveryOrderPackagingComponent implements OnInit {
  modalRef: BsModalRef;
  imgURL = this.apiService.imgURL;
  getlogindata: any;
  accountid: any;
  subaccountid: any;
  storeid: any;
  workflowData: any;
  orderNumber: any;
  NoOfRecords: any;
  deliveryType: string;
  customerID: any;
  cartNo: any;
  subItemsData: [];
  totalPackage: any;
  deliveryFlag: boolean;
  deliveryFlag1: boolean;
  inventoryFlag: string;
  printingFlag: string;
  isInventoryYes: boolean = true;
  subItemQuantity: number;
  modalRef2?: BsModalRef;
  orderPlace: any;
  config = {
    backdrop: true,
    ignoreBackdropClick: true
  };
  datalist:boolean = false;
  storeName: any;
  domainid: any;
  orderPackagingData: any;
  constructor(
    private apiService: ApiService,
    private modalService: BsModalService,
    private toastr: ToastrService,
    private commonservice: CommonService
  ) {
    this.getlogindata = localStorage.getItem('logindata');    
    this.domainid = localStorage.getItem('getDomainID'); 
    this.getlogindata = JSON.parse(this.getlogindata);
    this.accountid = this.getlogindata.RETAIL_D2C_ACCT_ID;
    this.subaccountid = this.getlogindata.RETAIL_D2C_USR_SUBACCT_ID;
    this.storeid = this.getlogindata.SUBACCT_OFFICES_RPOSTRY_ID;
    this.storeName = this.getlogindata.RETAIL_D2C_SUBACCT_OFFICE_NAME;
   

  }

  ngOnInit() {
   
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
    this.PhysicalCheckoutFromInventory();
  }

  storeDeliveryOrderPackagingWF() {
    let packagingData = {
      AccountId: this.accountid,
      SubAccountId: this.subaccountid,
      OfficeId: this.storeid,
    };

    this.apiService.postCall(this.apiService.baseURL + '/StoreDeliveryOrderPackagingWF', packagingData)
      .subscribe(data => {
        console.log(data);
        this.orderPackagingData = data;
        if(data == "No StoreDeliveryOrderPackaging Found") {
          this.datalist = true;
          this.toastr.error('No Store Delivery Order Packaging Found', '', {
          timeOut: 5000,
         });
        }
        this.subItemsData = data.subItems;
        this.orderNumber = data.RETAIL_D2C_ORDER_NUMBR;
        this.NoOfRecords = data.NoOfRecords;
        this.customerID = data.RETAIL_D2C_CUSTOMR_ID;
        this.cartNo = data.RETAIL_D2C_CUSTMR_CART_NUMBR;
        this.totalPackage = data.RETAIL_D2C_ORDER_PACKAGES_COUNT;

       //  this.totalPackage = 1;
        if (data.RETAIL_D2C_DELIVERY_TYPE_HOME_DELIVERY_FLG == true) {
          this.deliveryType = "Home Delivery";
        }

        if (data.RETAIL_D2C_DELIVERY_TYPE_SELF_TAKEAWAY_FLG == true) {
          this.deliveryType = "Self Delivery";
        }


        // this.toastr.success(data, '', {
        //  timeOut: 5000,
        // });

      },
        (error) => {                              //Error callback
          this.toastr.error(error.error.Message, '', {
            timeOut: 5000,
          });

        }
      );
  }

  PhysicalCheckoutFromInventory() {
    if (this.deliveryType == "Home Delivery") {
      this.deliveryFlag = true;
      this.deliveryFlag1 = false;
    }

    if (this.deliveryType == "Self Delivery") {
      this.deliveryFlag = false;
      this.deliveryFlag1 = true;
    }
    let checkoutInventoryData = {
      RETAIL_ACCT_ID: this.accountid,
      RETAIL_SUBACCT_ID: this.subaccountid,
      RETAIL_OFFICE_ID: this.storeid,
      RETAIL_DOMAIN_ID: 1,
      RETAIL_CUSTOMR_ID: this.customerID,
      RETAIL_CART_ID: this.cartNo,
      RETAIL_ORDER_NUMBR: this.orderNumber,
      RETAIL_D2C_ORDER_PACKAGES_COUNT: this.totalPackage,
     // RETAIL_D2C_ORDER_PACKAGES_COUNT: 1,
      RETAIL_D2C_DELIVERY_TYPE_SELF_TAKEAWAY_FLG: this.deliveryFlag1,
      RETAIL_D2C_DELIVERY_TYPE_HOME_DELIVERY_FLG: this.deliveryFlag,
    };

    console.log(checkoutInventoryData);
    this.apiService.postCall(this.apiService.baseURL + '/PhysicalCheckoutFromInventory', checkoutInventoryData)
      .subscribe(data => {
        console.log(data);
        this.orderNumber = data.print_Order_Sticker[0].RETAIL_ORDER_NUMBR;
        if (data.InventoryFlag == true) {
          this.inventoryFlag = "Yes"
        }

        if (data.InventoryFlag == false) {
          this.inventoryFlag = "No"
        }

        if (data.PrintingFlag == true) {
          this.printingFlag = "Yes"
        }

        if (data.PrintingFlag == false) {
          this.printingFlag = "No"
        }

      },
        (error) => {                              //Error callback
          this.toastr.error(error, '', {
            timeOut: 5000,
          });

        }
      );
  }

  packaingDoneOrderDeliveryReady(templateNested) {
    if (this.deliveryType == "Home Delivery") {
      this.deliveryFlag = true;
      this.deliveryFlag1 = false;
    }

    if (this.deliveryType == "Self Delivery") {
      this.deliveryFlag = false;
      this.deliveryFlag1 = true;
    }
    let orderDeliveryReadyData = {
      RETAIL_ACCT_ID: this.accountid,
      RETAIL_SUBACCT_ID: this.subaccountid,
      RETAIL_OFFICE_ID: this.storeid,
      RETAIL_DOMAIN_ID: 1,
      RETAIL_CUSTOMR_ID: this.customerID,
      RETAIL_CART_ID: this.cartNo,
      RETAIL_ORDER_NUMBR: this.orderNumber,
      TOTAL_PACKETS_IN_ORDER: this.totalPackage,
      RETAIL_D2C_DELIVERY_TYPE_SELF_TAKEAWAY_FLG: this.deliveryFlag1,
      RETAIL_D2C_DELIVERY_TYPE_HOME_DELIVERY_FLG: this.deliveryFlag,
    };

    console.log(orderDeliveryReadyData);
    this.apiService.postCall(this.apiService.baseURL + '/PackaingDoneOrderDeliveryReady', orderDeliveryReadyData)
      .subscribe(data => {
        console.log(data);
        this.orderPlace = data;
        this.storeDeliveryOrderPackagingWF();
        // if(this.orderPlace === 'object'){
        //   this.toastr.success(data, '', {
        //     timeOut: 5000,
        //   });
        // }
// else {
//   this.toastr.error(data, '', {
//     timeOut: 5000,
//   });
// }
       
      this.modalRef.hide();
      this.modalRef2 = this.modalService.show(templateNested, this.config);
      },
        (error) => {                              //Error callback
          this.toastr.error(error, '', {
            timeOut: 5000,
          });

        }
      );
  }

  onChangeInventory(value) {
   if(value == "Yes") {
     this.isInventoryYes = false;
   }
   else{
    this.isInventoryYes = true;
   }
}

onChangeEvent(event: any){
this.subItemQuantity = event.target.value;
console.log(this.subItemQuantity);
}


}
