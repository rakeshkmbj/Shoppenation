import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ApiService } from 'src/app/services/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { error } from 'console';
@Component({
  selector: 'app-adevertiser-dashboard',
  templateUrl: './adevertiser-dashboard.component.html',
  styleUrls: ['./adevertiser-dashboard.component.css']
})
export class AdevertiserDashboardComponent implements OnInit {
  inventoryForm: FormGroup;
  pubInventoryForm: FormGroup;
  masterDetailForm: FormGroup;
  modalRef?: BsModalRef;
  storeId: number;
  inventoryist: any = [];
  userid: number;
  pubInventoryList: any;
  stateID: any;
  countryID: any;
  cityID: any;
  pinID: any;
  detailmodaluserid: any;
  uploadLabel = 'No file choosen';
  base64textString: string;
  isImageSaved: boolean;
  constructor(
    private modalService: BsModalService,
    private apiservice: ApiService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService
    ) {
    this.storeId = this.apiservice.requiredLoginData.storeid;
   // this.userid = this.apiservice.requiredLoginData.userID
  }

  ngOnInit(): void {

    this.inventoryForm = this.formBuilder.group({
      INVTYPE_ID: ['', Validators.required],
      ADTYPE_ID: ['', Validators.required],
      ADUNIT_ID: ['', Validators.required],
      ALLOCATD_ORGID: ['', Validators.required],
      FEE_PERCNTG: ['', Validators.required],
      INV_NAME: ['', Validators.required]
    });
    this.pubInventoryForm = this.formBuilder.group({
      AD_ADMEDIA_FEE_PERCNTG: [''],
      AD_PUB_INV_ACTIV_FLG: [''],
    });
    
    this.masterDetailForm = this.formBuilder.group({
      ORG_NAME: ['', Validators.required],
      ORG_ADDRESS: ['', Validators.required],
      BANK_NAME: ['', Validators.required],
      BANK_BRANCH: ['', Validators.required],
      BANK_ACCOUNT_NUMBR: ['', Validators.required],
      BANK_IFSC: ['', Validators.required],
      BANK_APPROVED_FLG: ['', Validators.required],
      CONTRCT_PDF_ATTCHMNT: ['', Validators.required]
    });

    

    this.managePubinventory();
  }
  openModal(template: TemplateRef<any>, userid) {
    this.modalRef = this.modalService.show(template);
    this.userid = userid;
  }

  viewopenModal(viewdetailtemplate: TemplateRef<any>, userid) {
    this.modalRef = this.modalService.show(viewdetailtemplate, Object.assign({}, { class: 'gray modal-lg modal-dialog-scrollable' }));
    this.viewPubInventoryDetail(userid);
  }

  managePubinventory() {
    this.apiservice.getCall(this.apiservice.baseURL + "/ManagePubinventory/" + this.storeId)
      .subscribe(data => {
        console.log(data);
        this.inventoryist = data;
      }

      ), (error) => {
        console.log(error);
      }
  }


  addPubinventory() {
    if (this.inventoryForm.valid) {
      const formData = {
        USER_ID: +this.userid,
        INVTYPE_ID: +this.inventoryForm.value.INVTYPE_ID,
        INV_NAME: this.inventoryForm.value.INV_NAME,
        ADTYPE_ID: +this.inventoryForm.value.ADTYPE_ID,
        ADUNIT_ID: +this.inventoryForm.value.ADUNIT_ID,
        ALLOCATD_ORGID: +this.inventoryForm.value.ALLOCATD_ORGID,
        FEE_PERCNTG: +this.inventoryForm.value.FEE_PERCNTG,
        Active_FLG: true
      };
      console.log(formData);
      this.apiservice.postCall(`${this.apiservice.baseURL}/AddPubinventory`, formData)
      .subscribe(data => {
        console.log(data);
        this.toastr.success(data);
        this.modalService.hide();
      },
        
        error =>{
          console.log(error);
          this.toastr.error(error.error.Message)
        })

    } else {
      this.toastr.error("Please fill all fields!");
      
    }
  }

  viewPubInventoryDetail(userid){
    this.userid = userid;
    this.apiservice.getCall(`${this.apiservice.baseURL}/ViewPubInventoryDetail/${userid}`).
    subscribe(data => {
      console.log(data);
      this.pubInventoryList = data;
    }, error => {
      console.log(error);
    });

}

getSelectedInventory(item){
  console.log(item.AD_PUB_INV_ACTIV_FLG);
  let data = {
      AD_PUBLISHER_INVENTORY_ID: item.AD_PUBLISHER_INVENTORY_ID,
      USER_ID: item.AD_PUB_USER_ID,
      INVTYPE_ID: item.AD_PUB_INVTYPE_ID,
      ADTYPE_ID: item.AD_PUB_ADTYPE_ID,
      ADUNIT_ID: item.AD_PUB_ADUNIT_ID,
      ALLOCATD_ORGID: item.AD_PUB_ALLOCATD_ORGID,
      FEE_PERCNTG: +item.AD_ADMEDIA_FEE_PERCNTG,
      INV_NAME: item.AD_PUB_INVNAME,
      Active_FLG: item.AD_PUB_INV_ACTIV_FLG === 'true' ? true : item.AD_PUB_INV_ACTIV_FLG === 'false' ? false : item.AD_PUB_INV_ACTIV_FLG
  }
  console.log(data);
  this.apiservice.postCall(this.apiservice.baseURL + '/EditPubinventory', data).
  subscribe((data) => {
    console.log(data);
    this.toastr.success(data);
    this.modalService.hide();
  }
  ,  error => {
    console.log(error);
    this.toastr.error(error.error);
 }
  ); 
}

AddMasterDetailopenModal(addMasterDetailtemplate: TemplateRef<any>, userid) {
  this.detailmodaluserid = userid;
  this.modalRef = this.modalService.show(addMasterDetailtemplate, Object.assign({}, { class: 'gray modal-lg modal-dialog-scrollable' }));
 // this.userid = userid;
}

receiveCountryId($event) {
  this.countryID = $event;
  console.log(this.countryID);
}

receiveStateId($event) {
  this.stateID = $event;
}

receiveCityId($event) {
  this.cityID = $event;
}

receivePinId($event) {
  this.pinID = $event;
}

addPubMasterDetail () {
  let data = {
    USERID: +this.detailmodaluserid,
    ORG_COUNTRY: +this.countryID,
    STATE: +this.stateID,
    CITY: +this.cityID,
    PINCODE: +this.pinID,
    ORG_NAME: this.masterDetailForm.value.ORG_NAME,
    ORG_ADDRESS: this.masterDetailForm.value.ORG_ADDRESS,
    BANK_NAME: this.masterDetailForm.value.BANK_NAME,
    BANK_BRANCH: this.masterDetailForm.value.BANK_BRANCH,
    BANK_ACCOUNT_NUMBR: +this.masterDetailForm.value.BANK_ACCOUNT_NUMBR,
    BANK_IFSC: this.masterDetailForm.value.BANK_IFSC,
    BANK_APPROVED_FLG: true,
    CONTRCT_PDF_ATTCHMNT: this.base64textString,
  }
  console.log(data);
  this.apiservice.postCall(this.apiservice.baseURL+'/AddPubMasterDetail', data)
  .subscribe((data)=> {
    console.log(data);
    this.toastr.success(data);
  }, error => {
    console.log(error);
    this.toastr.error(error.error.Message);
  });
}

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

}
