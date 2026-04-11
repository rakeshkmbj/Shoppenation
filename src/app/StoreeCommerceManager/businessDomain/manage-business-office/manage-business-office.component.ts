import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { Observable, Subject } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { AddNewPhysicalStoreComponent } from './components/add-new-physical-store/add-new-physical-store.component';

@Component({
  selector: 'app-manage-business-office',
  templateUrl: './manage-business-office.component.html',
  styleUrls: ['./manage-business-office.component.scss']
})
export class ManageBusinessOfficeComponent implements OnInit {
 // baseURL: string = "http://www.shripatigroup.com/alcoolretail/carryr/retail";
  imgURL = this.apiService.imgURL;
  RetailStoreForm: FormGroup;
  resetSubject: Subject<boolean> = new Subject();
  reset$: Observable<boolean> = this.resetSubject.asObservable();
  retailStoreList: any;
  selectedRow: Number;
  setClickedRow: Function;
  isTitle: boolean = true;
  officeId: any;
  getlogindata: any;
  accountid: any;
  subaccountid: any;
  storeid: any;
  storeName: any;
  domainid: any;
  modalRef: BsModalRef;
  userID: any;
  physicalStoreData: [];
  constructor( private apiService:ApiService,
    private toastr: ToastrService,
    private formBuilder: FormBuilder,
    private modalService: BsModalService,
    private spinner: NgxSpinnerService,
  //  private http: HttpClient,
  
   // private modalService: BsModalService
   )
    {
      this.accountid = this.apiService.requiredLoginData.accountid;
      this.subaccountid = this.apiService.requiredLoginData.subaccountid;
      this.storeid = this.apiService.requiredLoginData.storeid;
      this.storeName = this.apiService.requiredLoginData.storeName;
      this.domainid = this.apiService.requiredLoginData.domainid;
      this.userID = this.apiService.requiredLoginData.userID;
      console.log(this.userID);
      this.setClickedRow = function (index) {
        this.selectedRow = index;
       }
     }

     openModal() {
      const config: ModalOptions = {
        backdrop: 'static',
        keyboard: false,
        animated: true,
        ignoreBackdropClick: true,
        initialState: {
          accountID: this.accountid,
          subAccountID: this.subaccountid
        }
      };
      this.modalRef = this.modalService.show(AddNewPhysicalStoreComponent, Object.assign(config, { class: 'physicalStoreModal' }));
    }

  ngOnInit(): void {
    this.GetRetailStoresByAccountSubAccount();
    // this.Form  =  this.formBuilder.group({
    //   DomainId: ['', Validators.required],
    //   Country: ['', Validators.required],
    //   State: ['', Validators.required],
    //   City: ['', Validators.required],
    //   PinCode: ['', Validators.required],
    // });
    this.RetailStoreForm  =  this.formBuilder.group({
      RETAIL_D2C_ACCT_ID: ['', Validators.required],
      RETAIL_D2C_SUBACCT_ID: ['', Validators.required],
      RETAIL_D2C_SUBACCT_OFFICE_NAME: ['', Validators.required],
      RETAIL_D2C_SUBACCT_OFFICE_ADDRESS: ['', Validators.required],
      RETAIL_STORE_OFFICE_SHOWROOM_FLG: ['Retail'],
       RETAIL_D2C_SUBACCT_OFFICE_CNTRY: ['', Validators.required],
       RETAIL_D2C_SUBACCT_OFFICE_STATE: ['', Validators.required],
       RETAIL_D2C_SUBACCT_OFFICE_CITY: ['', Validators.required],
       RETAIL_D2C_SUBACCT_OFFICE_CITY_PINCD: ['', Validators.required],
       country_state_city_pin: this.formBuilder.group({
        Country: ['', Validators.required],
        State: ['', Validators.required],
        City: ['', Validators.required],
        PinCode: ['', Validators.required]
      })
    });
  }


  addRetailStore(){
 //   console.log({...this.RetailStoreForm.value});
    let retailStoreData = {
      RETAIL_D2C_ACCT_ID: this.accountid,
      RETAIL_D2C_SUBACCT_ID: this.subaccountid,
      RETAIL_D2C_SUBACCT_OFFICE_NAME: this.RetailStoreForm.value.RETAIL_D2C_SUBACCT_OFFICE_NAME,
      RETAIL_D2C_SUBACCT_OFFICE_ADDRESS: this.RetailStoreForm.value.RETAIL_D2C_SUBACCT_OFFICE_ADDRESS,
      RETAIL_D2C_SUBACCT_OFFICE_CNTRY: + this.RetailStoreForm.get('country_state_city_pin').value.Country,
      RETAIL_D2C_SUBACCT_OFFICE_STATE: + this.RetailStoreForm.get('country_state_city_pin').value.State,
      RETAIL_D2C_SUBACCT_OFFICE_CITY: + this.RetailStoreForm.get('country_state_city_pin').value.City,
      RETAIL_D2C_SUBACCT_OFFICE_CITY_PINCD: this.RetailStoreForm.get('country_state_city_pin').value.PinCode,
      RETAIL_STORE_OFFICE_SHOWROOM_FLG: true,
     
     };
   
    
   console.log(retailStoreData);
   this.apiService.postCall(this.apiService.baseURL + '/AddRetailStore', retailStoreData)
    .subscribe(data => {
     console.log(data);
     if (!data.error) {
      this.toastr.success('Added Successfully', '', {
        timeOut: 5000,
       });
       this.GetRetailStoresByAccountSubAccount();
       this.resetForm();  
    }
    else {
      this.toastr.error(data.Message);
    }
   
    },
    error => {    
                     //Error callback
      this.toastr.error(error.Message, '',{
        timeOut: 5000,
     })
    }
    );
  }

  GetRetailStoresByAccountSubAccount() {
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

  scrollToTop() {
    (function smoothscroll() {
        var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
        if (currentScroll > 0) {
            window.requestAnimationFrame(smoothscroll);
            window.scrollTo(0, currentScroll - (currentScroll / 2));
        }
    })();
}

  getRetailStoreById(OfficeId){
    this.officeId = OfficeId;
    this.apiService.getCall(this.apiService.baseURL + '/GetRetailStoreById' + "/" + OfficeId)
    .subscribe(data => {
      console.log(data);
      this.isTitle = false;
      this.scrollToTop();
      this.RetailStoreForm.patchValue({
        RETAIL_D2C_ACCT_INTRNL_OFFICE_REGID: data.RETAIL_D2C_ACCT_INTRNL_OFFICE_REGID,
        RETAIL_D2C_ACCT_ID: this.accountid,
        RETAIL_D2C_SUBACCT_ID: this.subaccountid,
        RETAIL_D2C_SUBACCT_OFFICE_NAME: data.RETAIL_D2C_SUBACCT_OFFICE_NAME,
        RETAIL_D2C_SUBACCT_OFFICE_ADDRESS: data.RETAIL_D2C_SUBACCT_OFFICE_ADDRESS,
       
    })

    // this.RetailStoreForm.get('country_state_city_pin').patchValue({
    //   Country: data.RETAIL_D2C_SUBACCT_OFFICE_CNTRY
    // });
    // this.RetailStoreForm.get('country_state_city_pin').patchValue({
    //   State: data.RETAIL_D2C_SUBACCT_OFFICE_STATE
    // });
    // this.RetailStoreForm.get('country_state_city_pin').patchValue({
    //    City: data.RETAIL_D2C_SUBACCT_OFFICE_CITY
    //  });
    // this.RetailStoreForm.get('country_state_city_pin').patchValue({
    //   PinCode: data.RETAIL_D2C_SUBACCT_OFFICE_CITY_PINCD,
    // });

     } );
  }

  updateRetailStore(){
   
    let updateData = {
      RETAIL_D2C_ACCT_INTRNL_OFFICE_REGID: + this.officeId,
      RETAIL_D2C_ACCT_ID:this.RetailStoreForm.value.RETAIL_D2C_ACCT_ID,
      RETAIL_D2C_SUBACCT_ID: this.RetailStoreForm.value.RETAIL_D2C_SUBACCT_ID,
      RETAIL_D2C_SUBACCT_OFFICE_NAME: this.RetailStoreForm.value.RETAIL_D2C_SUBACCT_OFFICE_NAME,
      RETAIL_D2C_SUBACCT_OFFICE_ADDRESS: this.RetailStoreForm.value.RETAIL_D2C_SUBACCT_OFFICE_ADDRESS,
      RETAIL_D2C_SUBACCT_OFFICE_CNTRY: + this.RetailStoreForm.get('country_state_city_pin').value.Country,
      RETAIL_D2C_SUBACCT_OFFICE_STATE: + this.RetailStoreForm.get('country_state_city_pin').value.State,
      RETAIL_D2C_SUBACCT_OFFICE_CITY: + this.RetailStoreForm.get('country_state_city_pin').value.City,
      RETAIL_D2C_SUBACCT_OFFICE_CITY_PINCD: this.RetailStoreForm.get('country_state_city_pin').value.PinCode,
      RETAIL_STORE_OFFICE_SHOWROOM_FLG: this.RetailStoreForm.value.RETAIL_STORE_OFFICE_SHOWROOM_FLG
    }
    
    this.apiService.postCall(this.apiService.baseURL + '/EditRetailStore', updateData)
    .subscribe(data => {
     console.log(data);
  this.GetRetailStoresByAccountSubAccount();  
  this.isTitle = true;
  this.resetForm();
  this.toastr.success('Updated Successfully', '',{
    timeOut: 5000,
 });
  },
  (error) => {
    this.toastr.error(error, '',{
     timeOut: 5000,
   });
   })  
   }
 

  resetForm(){
    this.isTitle = true;
    this.resetSubject.next(true);
    this.RetailStoreForm.patchValue({
      RETAIL_D2C_SUBACCT_OFFICE_NAME: "",
      RETAIL_D2C_SUBACCT_OFFICE_ADDRESS: "",
      RETAIL_STORE_OFFICE_SHOWROOM_FLG: "Retail"
    });
   
  }

  getPhysicalStoresSubAccount(){
    this.spinner.show();
    let payloadData = {  
        SUBACCT_ID: this.subaccountid,
        RETAIL_LOGIN_USR_ID: +this.userID
    }
    this.apiService.postCall(this.apiService.baseURL + '/GetPhysicalStoresSubAccount', payloadData)
    .subscribe(data => {
      console.log(data);
      this.physicalStoreData = data;
      this.spinner.hide();
    },
   
     (error) => {
      console.log(error);
      this.spinner.hide();
      this.toastr.error(error, '', {
        timeOut: 5000,
      })
     }
     ) 
    
    
  }

  showAddress(address){

  }

}
