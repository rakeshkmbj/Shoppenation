import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';
import { CommonService } from 'src/app/services/common.service';
@Component({
  selector: 'app-account-allocation-mis',
  templateUrl: './account-allocation-mis.component.html',
  styleUrls: ['./account-allocation-mis.component.css']
})
export class AccountAllocationMISComponent implements OnInit {

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
   smallModalRef: any;
 
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
   }
 
 openModalLarge(template: TemplateRef<any>) {
   this.isTitle = true;
   this.isAdd = true;
   this.modalRef = this.modalService.show(template, { class: 'modal-xl' });
 }
 
 openModalSmall(template: TemplateRef<any>) {
   this.isTitle = true;
   this.isAdd = true;
   this.smallModalRef = this.modalService.show(template, { class: 'modal-sm' });
 }

 isGetAccVisible = false;

   getAccount(){
    this.isGetAccVisible = true;
   }

   showAllocation(template){
    this.openModalLarge(template)
   }
 
}
