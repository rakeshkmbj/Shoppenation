import { HttpClient } from '@angular/common/http';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';
import { ActivationDeactivationComponent } from '../activation-deactivation/activation-deactivation.component';

@Component({
  selector: 'app-add-store-products-inventory',
  templateUrl: './add-store-products-inventory.component.html',
  styleUrls: ['./add-store-products-inventory.component.scss']
})
export class AddStoreProductsInventoryComponent implements OnInit {
  imgURL = this.apiService.imgURL;
  isValid: boolean = true;
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
  storesubItemList: any;
  addClass: boolean;
  isChecked: false;
  isSelected: boolean;
  selectedProductArry: any;
  checkedList:any;
  showWebstore: boolean;
  ItemSubItemInventoryList: any;
  filterItemList: any;
  productLineInventoryList: any;
  webStoreForm: FormGroup;
  inventoryForm: FormGroup;
  publicViewForm: FormGroup;
  topPickForm: FormGroup;
  newSelfForm: FormGroup;
  inventoryFormData: any;
  playerName: any;
  phone: any;
  iscValue: any;
  aicValue: any;
  macValue: any;
  aa: any;
  getlogindata: any;
  accountid: any;
  subaccountid: any;
  storeid: any;
  isaicValue: any;
  ismacValue: any;
  inputValue: any;
  domainid: any;
  p: number = 1;
  collection = [];
  itemLists:[];
  itemId: any;
  minalertCount: number;
  modalRef?: BsModalRef;
  subItemId: any;
  publicviewData: any;
  stockinStore: number;
  bsModalRef?: BsModalRef;
  btnDisabled: boolean = true;
  noTopPick: any;
  topPickList: any;
  showError: boolean;
  toppickActiveFlag: boolean;
  topPickRadioActive: boolean;
  newSelfData: any;
  showError1: boolean;
  newSelfActiveFlag: any;
  newSelftxt: any;
  newSelfFlag: boolean;
  topPickFlag: boolean;
   constructor(private apiService:ApiService,
    private toastr: ToastrService,
    private formBuilder: FormBuilder,
    private modalService: BsModalService,
    private http: HttpClient) {
      this.getlogindata = localStorage.getItem('logindata');    
      this.domainid = localStorage.getItem('getDomainID'); 
      this.getlogindata = JSON.parse(this.getlogindata);
      this.accountid = this.getlogindata.RETAIL_D2C_ACCT_ID;
      this.subaccountid = this.getlogindata.RETAIL_D2C_USR_SUBACCT_ID;
      this.storeid = this.getlogindata.RETAIL_D2C_ACCT_INTRNL_OFFICE_REGID;
      this.storeName = this.getlogindata.RETAIL_D2C_SUBACCT_OFFICE_NAME;
     }

   ngOnInit(): void {
     this.getProductLineList();
     this.webStoreForm = this.formBuilder.group({
      ACCT_ID: this.accountid,
      SUBACCT_ID: this.subaccountid,
      SUBACCT_OFFICE_ID: this.storeid,
      RETAIL_D2C_DOMAIN_ID: ['', Validators.required],
      RETAIL_D2C_PRODUCT_ID: ['', Validators.required],
      ProductId: '',
      itemId:''
  
  });

  this.publicViewForm = this.formBuilder.group({
    RETAIL_D2C_STORE_APPROVED_PUBLISH_SUBITEM_ID: [''],
    RETAIL_D2C_STORE_ITEM_SUBITEM_MARKETPLACE_PUBLISH_APPROVAL_GRANTED_FLG: ['', Validators.required],
    RETAIL_D2C_STORE_ITEM_SUBITEM_PUBLISH_APPROVAL_TIME_LIMIT_MINUTE: ['', Validators.required],
   
  });

  this.inventoryForm = this.formBuilder.group({
    START_INVENTORY_COUNT_NUMBR: ['', Validators.required],
    START_INVENTORY_COUNT_UPDATION_FLG: ['', Validators.required],
    ADDED_CASES_QUANTITY_NUMBR: ['', Validators.required],
    MIN_ALRT_COUNT_NUMBR: ['', Validators.required],
});

this.topPickForm = this.formBuilder.group({
  Active_Flg: ['' , Validators.required],
});

this.newSelfForm = this.formBuilder.group({
  Active_Flg: ['' , Validators.required],
});

   }
  
  getProductLineList() {
    this.apiService.getCall(this.apiService.baseURL + '/GetStoreProductLines/' + this.accountid  +"/"+ this.subaccountid +"/"+ this.storeid)
   .subscribe(data => {
        this.productLineList = data;
         console.log(data);
    })
  }
   onretailDropshipStoreChange(e){
    this.productID = this.webStoreForm.value.RETAIL_D2C_PRODUCT_ID;
     if(this.productID === "" || this.productID === null) {
      this.btnDisabled = true;
     }
     else {
      this.productName = e.target.options[e.target.options.selectedIndex].text;
      console.log(this.productID);
       this.GetItemListOfStore();
       this.showWebstore =  false;
       this.btnDisabled = true;
     }
  }

  onKey(event) {
    this.inputValue = event.target.value;

  }

  GetItemListOfStore(){
    this.apiService.getCall(this.apiService.baseURL + '/GetStoreProductItemList/' + this.accountid  +"/"+ this.subaccountid +"/"+ this.storeid +"/"+ this.productID)
    .subscribe(data => {
      console.log(data);
      this.itemLists = data;
      if(data.length ==""){
        this.toastr.error(data, '',{
          timeOut: 5000,
       });
      }
       },
         (error) => {   
          this.toastr.error(error, '',{
           timeOut: 5000,
         });
         }
         ) 
     }

  onPItemChange(e){
    this.itemId = this.webStoreForm.value.itemId;
    if(this.itemId === "" || this.itemId === null) {
     this.btnDisabled = true;
    }
    else{
     this.showWebstore =  false;
     this.btnDisabled = false;
    }
   
}


  getAllItemSubItemAvailableForInventory() {
    this.apiService.getCall(this.apiService.baseURL + '/GetAllItemSubItemAvailableForInventory' + "/" + this.domainid + "/" + this.accountid + "/" + this.subaccountid + "/" + this.storeid + "/" + this.productID + "/" + this.itemId)
    .subscribe(data => {
      this.productLineInventoryList = data;
       console.log(data);
       for (let i = 1; i <= this.productLineInventoryList.length; i++) {
        this.collection.push(`item ${i}`);
      }
       this.showWebstore =  true;
       this.p = 1;
       this.filterItemList = this.productLineInventoryList.reduce((unique, o) => {
        if(!unique.some(obj => obj.ItemId === o.ItemId && obj.value === o.value)) {
          unique.push(o);
        }
        return unique;
    },[]);
    
  },
  (error) => {       
    console.log(error);                      
       this.toastr.error(error.error.Message, '',{
          timeOut: 5000,
       });
       this.showWebstore =  false;
  });
}
 

  onKeyInput(event: any) { 
    console.log(event.target.value);
    this.stockinStore = event.target.value;
  }
  
  
    SaveDropShipItemSubItemSaveInventory(item_id, subItem_id){
      let inventoryData = {
      DomainId: +this.domainid,
      AccountId: this.accountid,
      SubAccountId: this.subaccountid,
      OfficeId: +this.storeid,
      ProductLineId: +this.productID,
      ItemId: item_id,
      SubItemId: subItem_id,
      UnitReceivedInCounts: this.stockinStore
      }
  
      this.apiService.postCall(this.apiService.baseURL + '/SaveDropShipItemSubItemSaveInventory', inventoryData).subscribe(data => {
    console.log(data);
    this.toastr.success(data, '',{
      timeOut: 3000,
       });
     this.getAllItemSubItemAvailableForInventory();
    },
    (error) => {                             
     this.toastr.error(error, '',{
       timeOut: 3000,
    })
  })  
  }

  openModal(alertCountTemplate: TemplateRef<any>, subitemid) {
    this.modalRef = this.modalService.show(alertCountTemplate, Object.assign({}, { class: 'alertCountModal' }));
    this.subItemId =subitemid
  }

 

  minAlertCount() {
    if(this.minalertCount === null || this.minalertCount== undefined) {
      this.toastr.error('Please enter value');
    }
    else {
    let alertCountData = {
      STORE_ID: this.storeid,
      SUBITEM_ID: this.subItemId,
      minalertcount: this.minalertCount,
    }
    this.apiService.postCall(this.apiService.baseURL + '/EditSubitemMinalertcount', alertCountData)
    .subscribe(data => {
      console.log(data);
      this.getAllItemSubItemAvailableForInventory();
      this.toastr.success('Updated Successfully!');
      this.modalService.hide();
      this.minalertCount = null;
      },
      (error) => {                             
       this.toastr.error(error, '',{
         timeOut: 5000,
      })
    })  
  }
  }

  publicViewModal(publicViewTemplate: TemplateRef<any>, subItemid) {
    this.modalRef = this.modalService.show(publicViewTemplate, Object.assign({}, { class: 'publicViewModal' }));
    this.getSubitemPublicViewStatus(subItemid)
  }
 
  
   getSubitemPublicViewStatus(subItemid){
    this.apiService.getCall(this.apiService.baseURL + '/GetSubitemPublicViewStatus/'+ subItemid + "/"+ this.storeid)
    .subscribe(data => {
    console.log(data);
    this.publicviewData = data;
    this.subItemId = data[0].RETAIL_D2C_STORE_APPROVED_PUBLISH_SUBITEM_ID;
    this.publicViewForm.patchValue({
      RETAIL_D2C_STORE_APPROVED_PUBLISH_SUBITEM_ID: this.publicviewData[0].RETAIL_D2C_STORE_APPROVED_PUBLISH_SUBITEM_ID,
      RETAIL_D2C_STORE_ITEM_SUBITEM_MARKETPLACE_PUBLISH_APPROVAL_GRANTED_FLG: this.publicviewData[0].RETAIL_D2C_STORE_ITEM_SUBITEM_MARKETPLACE_PUBLISH_APPROVAL_GRANTED_FLG,
      RETAIL_D2C_STORE_ITEM_SUBITEM_PUBLISH_APPROVAL_TIME_LIMIT_MINUTE: this.publicviewData[0].RETAIL_D2C_STORE_ITEM_SUBITEM_PUBLISH_APPROVAL_TIME_LIMIT_MINUTE,
     
  })
    },
    (error) => {
      console.log(error);
    });
  }

  EditSubitemPublicViewStatus(){
    let data = {
      STORE_ID: this.storeid,
      SUBITEM_ID: this.subItemId,
      MARKETPLACE_PUBLISH_APPROVAL_FLAG: this.publicViewForm.value.RETAIL_D2C_STORE_ITEM_SUBITEM_MARKETPLACE_PUBLISH_APPROVAL_GRANTED_FLG,
      PUBLISH_APPROVAL_TIME_LIMIT_MINUTES: this.publicViewForm.value.RETAIL_D2C_STORE_ITEM_SUBITEM_PUBLISH_APPROVAL_TIME_LIMIT_MINUTE
    }
    console.log(data);
    this.apiService.postCall(this.apiService.baseURL + '/EditSubitemPublicViewStatus', data)
    .subscribe(data => {
      console.log(data);
      this.toastr.success('Updated Successfully!');
      this.modalService.hide();
      },
      (error) => {                             
       this.toastr.error(error, '',{
         timeOut: 5000,
      })
    })  


  }

  openActModal(subitemid) {
    const initialState: ModalOptions = {
      initialState: {subitemID:subitemid }
    };
    this.bsModalRef = this.modalService.show(ActivationDeactivationComponent, Object.assign({}, { class: 'actModal' }, initialState));
  }


  openModalTopPick(topPickTemplate: TemplateRef<any>, subItemid) {    
    this.modalRef = this.modalService.show(topPickTemplate, Object.assign({}, { class: 'publicViewModal' }));
   this.subItemId = subItemid;
   this.getSubitemTopPick(subItemid);
  }

  getSubitemTopPick(subitemid) {
    this.apiService.getCall(this.apiService.baseURL+'/GetSubitemTopPick/'+ this.storeid+ "/" + subitemid)
    .subscribe(data => {
      console.log(data);
      this.topPickList = data;
      this.showError = false;
      this.toppickActiveFlag = data[0].RETAIL_TOPPICK_ACTIV_FLG;
      this.topPickForm.patchValue({
        Active_Flg: data[0].RETAIL_TOPPICK_ACTIV_FLG,
    })
   
    },
    (error) => {
      console.log(error);
      this.topPickList = [];
      this.noTopPick = error.error;
      this.showError = true;
      this.toastr.error(error.error, '',{
        timeOut: 5000,
     })
    }
    )
  }

  addSubitemTopPick(subitemid){
    let addpickData = {
      SubItemId: subitemid,
      Store_ID: this.storeid
    }
    this.apiService.postCall(this.apiService.baseURL +'/AddSubitemTopPick', addpickData)
    .subscribe(data => {
      console.log(data);
        this.toastr.success('Added Successfully');
        this.modalRef.hide();
    },
    (error) => {
      console.log(error);
      this.toastr.error(error.error)
    })
  }

  onTopPickChange(e) {
    if(this.topPickForm.value.Active_Flg === 'true') {
      this.topPickFlag = true;
    }
    else {
      this.topPickFlag = false;
    }
  }

  updateSubitemTopPick(toppickId, subitemId){
    let data = {
      RETAIL_STORE_TOPPICKS_ID:toppickId,
      SubItemId: subitemId,
      Store_ID: this.storeid,
      Active_Flg: this.topPickFlag
    }
    this.apiService.postCall(this.apiService.baseURL + '/EditSubitemTopPick', data)
    .subscribe(data => {
      console.log(data);
      this.toastr.success('Updated Successfully');
      this.modalRef.hide();
    },
    
    (error) => {
      console.log(error.error);
    })
  }

  openModalNewSelf(newSelfTemplate: TemplateRef<any>, subItemid) {
    this.modalRef = this.modalService.show(newSelfTemplate, Object.assign({}, { class: 'publicViewModal' }));
   this.subItemId = subItemid;
   this.getSubitemNewonShelf(subItemid);
  }
  
  getSubitemNewonShelf(subitemid) {
    this.apiService.getCall(this.apiService.baseURL+'/GetSubitemNewonShelf/'+ this.storeid+ "/" + subitemid)
    .subscribe(data => {
      console.log(data);
      this.newSelfData = data;
      this.showError1 = false;
      this.newSelfActiveFlag = data[0].RETAIL_NEW_ON_SHELF_ACTIV_FLG;
      this.newSelfForm.patchValue({
        Active_Flg: data[0].RETAIL_NEW_ON_SHELF_ACTIV_FLG,
    })
   
    },
    (error) => {
      console.log(error);
      this.newSelfData = [];
      this.newSelftxt = error.error;
      this.showError1 = true;
      this.toastr.error(error.error, '',{
        timeOut: 5000,
     })
    }
    )
  }
 
  addSubitemNewonShelf(subitemid){
    let addselfData = {
      SubItemId: subitemid,
      Store_ID: this.storeid
    }
    this.apiService.postCall(this.apiService.baseURL +'/AddSubitemNewonShelf', addselfData)
    .subscribe(data => {
      console.log(data);
        this.toastr.success('Added Successfully');
        this.modalRef.hide();
    },
    (error) => {
      console.log(error);
      this.toastr.error(error.error)
    })
  }

  onnewSelfChange(e) {
    if(this.newSelfForm.value.Active_Flg === 'true') {
      this.newSelfFlag = true;
    }
    else {
      this.newSelfFlag = false;
    }
  }

  updateSubitemNewonShelf(newselfId, subitemId){
    let data = {
      RETAIl_STORE_NEW_ON_SHELF_ID:newselfId,
      SubItemId: subitemId,
      Store_ID: this.storeid,
      Active_Flg: this.newSelfFlag
    }
    this.apiService.postCall(this.apiService.baseURL + '/EditSubitemNewonShelf', data)
    .subscribe(data => {
      this.toastr.success('Updated Successfully');
      this.modalRef.hide();
    },
    
    (error) => {
      console.log(error.error);
    })
  }
  
  }