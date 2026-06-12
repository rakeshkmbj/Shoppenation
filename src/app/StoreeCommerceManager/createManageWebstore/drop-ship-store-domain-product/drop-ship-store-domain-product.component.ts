import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-drop-ship-store-domain-product',
  templateUrl: './drop-ship-store-domain-product.component.html',
  styleUrls: ['./drop-ship-store-domain-product.component.scss']
})
export class DropShipStoreDomainProductComponent implements OnInit {
 // baseURL: string = "http://www.shripatigroup.com/alcoolretail/carryr/retail";
  imgURL = this.apiService.imgURL;
  isValid: boolean = true;
  itemsPerSlide = 4;
   singleSlideOffset = true;
   noWrap = false;
   slidesChangeMessage = '';

   private innerWidth: number;
   private mobileBreakpoint = 480;
  retailStoreList: any;
  storeNameList: any;
  productLineList: any;
  retailDropshipList: any;
  officeID: any;
  productID: any;
  storeName: any;
  productName: any;
  showStoreName: any;
  showProductName: any;
  storeItemList: any;
  storesubItemList= [];
  incart: -1;
  addClass: boolean;
  isChecked: false;
  selected: any;
  isSelected: boolean;
  checkBox: any;
  selectedProductArry: any;
  checkedList:any;
  showWebstore: boolean;
  subItemDetails: any;
  flag: boolean;
  priceList: any;
  getlogindata: any;
  accountid: any;
  subaccountid: any;
  storeid: any;
  domainid: any;
  ProductId: any;
  productLineName: any;
  brandOrgList: any;
  itemId: any;
  webtagshow: boolean;
  pathtext: string;
  txt: any;
  p: number = 1;
  collection = [];
  isitemChecked: boolean = true;
   constructor(private apiService:ApiService, private spinner: NgxSpinnerService,
    private toastr: ToastrService,
    private formBuilder: FormBuilder,
    private http: HttpClient) {
    this.masterSelected = false;
    this.getlogindata = localStorage.getItem('logindata');    
    this.domainid = localStorage.getItem('getDomainID'); 
    this.getlogindata = JSON.parse(this.getlogindata);
    this.accountid = this.getlogindata.RETAIL_D2C_ACCT_ID;
    this.subaccountid = this.getlogindata.RETAIL_D2C_USR_SUBACCT_ID;
    this.storeid = this.getlogindata.RETAIL_D2C_ACCT_INTRNL_OFFICE_REGID;
    this.storeName = this.getlogindata.RETAIL_D2C_SUBACCT_OFFICE_NAME;
     }

    webStoreForm: FormGroup;

   ngOnInit(): void {
     
     this.adjustsItemsPerSlide();
     this.storeList();
     this.getProductLineList();
     this.webStoreForm = this.formBuilder.group({
      ACCT_ID: ['', Validators.required],
      SUBACCT_ID: ['', Validators.required],
      SUBACCT_OFFICE_ID: ['', Validators.required],
      RETAIL_D2C_DOMAIN_ID: ['', Validators.required],
      RETAIL_D2C_PRODUCT_ID: ['', Validators.required],
      itemId: ['', Validators.required],
      ProductId: '',
      Image: [''],
  });
   }

 private adjustsItemsPerSlide() {
   this.innerWidth = window.innerWidth;
   if (this.innerWidth < this.mobileBreakpoint) {

     this.itemsPerSlide = 1;
   } else {
     this.itemsPerSlide = 3;
   }
 }

 storeList() {
  this.apiService.getCall(this.apiService.baseURL + '/GetRetailStoresByAccountSubAccount' + "/" + this.accountid + "/" + this.subaccountid)
    .subscribe(data => {
      console.log(data);
      this.retailStoreList = data;
    },
    (error) => {   
     this.toastr.error(error.error.Message, '',{
      timeOut: 5000,
    });
    }
    ) 
}

getProductLineList() {
 this.apiService.getCall(this.apiService.baseURL + '/GetAllDomainSuperStoreProductLine')
 // this.apiService.getCall(this.apiService.baseURL + '/GetStoreProductLines/' + this.accountid +"/"+ this.subaccountid +"/"+ this.storeid)
 .subscribe(data => {
      this.productLineList = data;
       console.log(data);
      //  let domainID = this.domainid;
      //  this.productLineList =  data.filter(function(domain) {
      //   return domain.DomainId == domainID;
      // });
  })
}

onStoreChange(e){
  this.showWebstore= false;
  this.officeID = this.webStoreForm.value.SUBACCT_OFFICE_ID;
  this.storeName = e.target.options[e.target.options.selectedIndex].text;
  //this.state = e.
  console.log(this.officeID);
}

// retailDropshipStore() {
//   this.apiService.getCall(this.apiService.baseURL + '/GetRetailDropshipStore').subscribe(data => {
//        this.retailDropshipList = data;
//         console.log(data);
//    })
//  }

 onretailDropshipStoreChange(e){
  this.productID = this.webStoreForm.value.RETAIL_D2C_PRODUCT_ID;
  this.productName = e.target.options[e.target.options.selectedIndex].text;
  console.log(this.productID);
  if(this.webStoreForm.value.RETAIL_D2C_PRODUCT_ID != '') {
    this.itemList();
  }
  this.showWebstore= false;
 
}

itemList() {
    this.apiService.getCall(this.apiService.baseURL + '/GetSuperStoreProductItems/' +  this.productID)
    .subscribe(data => {
     this.brandOrgList = data;
      console.log(this.brandOrgList);
    },
    (error) => {  
      console.log(error);
      this.brandOrgList = [];
      this.toastr.error(error.error, '',{
       timeOut: 5000,
     });
     }
    ) 
  

 
 } 


 onPItemChange(e){
 // this.showloader= true;
  this.itemId = this.webStoreForm.value.itemId;
if(this.itemId !="") {
 // this.showloader= false;
 // this.GetSuperStoreDropShipSubItems();
 
}

 else{
 // this.empty = true;
 }
 
 }
 showWebStore(webstoreText){
  this.txt = webstoreText;
  this.spinner.show();
  this.showStoreName = this.storeName;
  this.showProductName = this.productName;
  let manageWebStoreData = {
    ACCT_ID: this.accountid,
    SUBACCT_ID: this.subaccountid,
    SUBACCT_OFFICE_ID: this.storeid,
    RETAIL_D2C_DOMAIN_ID: +this.domainid,
    RETAIL_D2C_PRODUCT_ID: +this.productID,
    ITEM_ID: +this.itemId
  }
  console.log("payload: ", manageWebStoreData)
  this.pathtext ='';
  if(this.txt === 'Reserved') {
    this.pathtext = 'RetailDropshipReserveStore';
  }
  if(this.txt === 'Generic') {
    this.pathtext = 'RetailDropshipStore';
  }
  this.apiService.postCall(this.apiService.baseURL + '/' + this.pathtext, manageWebStoreData)
  .subscribe(data => {
  this.spinner.hide();
  this.storeItemList = data.SUPER_STORE_ITEM_DISPLAYED;
  this.storesubItemList = data.ITEM_SUBITEM_DISPALYED;
  for (let i = 1; i <= this.storesubItemList.length; i++) {
    this.collection.push(`item ${i}`);
  }
  if(this.storeItemList.length == 0){
    this.showWebstore = false;
    this.toastr.error('Data not Available', '',{
      timeOut: 5000,
   });
  }
  else{
    this.showWebstore= true;
  }
 // this.priceList = data.SUPER_STORE_ITEM_DISPLAYED.RETAIL_D2C_SUBITEM_MRP[0];
 
  console.log(this.priceList);
  },
  (error) => {    
    console.log(error);     
    this.spinner.hide();                    
   this.toastr.error(error.error.Message, '',{
     timeOut: 5000,
  });
  this.showWebstore= false;
})  
}



newSelectedArray:any = [];
masterSelected:boolean;
isAllSelected() {
  this.masterSelected = this.storesubItemList.every(function(item:any) {
      return item.isSelected == true;
    })
  this.getCheckedItemList();
}
 

getCheckedItemList(){
  this.checkedList = [];
  for (var i = 0; i < this.storesubItemList.length; i++) {
    if(this.storesubItemList[i].isSelected) {
      this.subItemDetails = {
        RETAIL_D2C_ITEM_ID: this.storesubItemList[i].RETAIL_D2C_ITEM_ID,
        RETAIL_D2C_SUBITEM_ID: this.storesubItemList[i].RETAIL_D2C_SUBITEM_ID,
        RETAIL_D2C_SUBITEM_MRP: this.storesubItemList[i].RETAIL_D2C_SUBITEM_MRP[0].RETAIL_D2C_SUBITEM_RETAIL_BOTTLE_MRP,
        RETAIL_D2C_SUBITEM_Case_MRP: this.storesubItemList[i].RETAIL_D2C_SUBITEM_MRP[0].RETAIL_D2C_SUBITEM_RETAIL_CASE_WHOLESALE_MRP,
      }
      console.log(this.subItemDetails);
    this.checkedList.push(this.subItemDetails);
    }
  }
 if(this.checkedList.length == 0){
   this.isitemChecked = true;
 }
 else{
  this.isitemChecked = false;
 }
  console.log(this.checkedList);
}

cnfAlert() {
  if(this.checkedList == '') {
    this.toastr.error('Please select Product List', '',{
      timeOut: 5000,
   });
  }
  else {
    
Swal.fire({
  title: 'Are you sure?',
  text: "You want to store this SubItem",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes'
}).then((result) => {
  if (result.isConfirmed) {
    this.updateMyStoreProductLine();
    this.isitemChecked = true;
  }
})
  }
 
}

updateMyStoreProductLine(){
  let updateMyStoreProductLineData = {
  ACCT_ID: this.accountid,
  SUBACCT_ID: this.subaccountid,
  SUBACCT_OFFICE_ID: +this.storeid,
  RETAIL_D2C_DOMAIN_ID: +this.domainid,
  RETAIL_D2C_PRODUCT_ID: +this.productID,
  ITEM_SUBITEM_NEW_ADDED: this.checkedList
  }
  console.log(updateMyStoreProductLineData);

  this.apiService.postCall(this.apiService.baseURL + '/UpdateMyStoreProductLine', updateMyStoreProductLineData)
.subscribe(data => {
  console.log(data);
  this.toastr.success('Update Store ProductLine Successfully', '',{
        timeOut: 5000,
     });
    // this.showRetailDropshipStoreList();
  },
  (error) => {                             
   this.toastr.error(error.error.Message, '',{
     timeOut: 5000,
  })
})  
}

showWebTags() {
  this.webtagshow = true;
}

}