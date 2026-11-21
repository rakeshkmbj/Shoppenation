import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormGroup, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';
import { NgxSpinnerService } from "ngx-spinner";
import { NavigationExtras, Router } from '@angular/router';
import { RazorpayService } from '../../razorpay.service';
import { ModalService } from 'src/app/pos-system/services/modal.service';

@Component({
  selector: 'app-card-access-and-pos-management',
  templateUrl: './card-access-and-pos-management.component.html',
  styleUrls: ['./card-access-and-pos-management.component.scss']
})
export class CardAccessAndPosManagementComponent implements OnInit {
  accountid: any;
  subaccountid: any;
  storeid: any;
  storeName: any;
  domainid: any;
  getlogindata: any;

  constructor(
    private apiService: ApiService,
    private modalService: BsModalService,
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private razorpayService: RazorpayService,
    private posModalService: ModalService,
  ) {
    this.accountid = this.apiService.requiredLoginData.accountid;
    this.subaccountid = this.apiService.requiredLoginData.subaccountid;
    this.storeid = this.apiService.requiredLoginData.storeid;
    this.storeName = this.apiService.requiredLoginData.storeName;
    this.domainid = this.apiService.requiredLoginData.domainid;
    this.getlogindata = localStorage.getItem('logindata');
    this.getlogindata = JSON.parse(this.getlogindata);
  }

  ngOnInit(): void {
  }

  cardAccessForm = this.formBuilder.group({
    mobilenumber: ['']
  });

  cardDetails = {
    REGID: '',
    VALID: true,
    SUSPENDED: false,
    GENERATED_FROM: '',
    FIRST_NAME: '',
    LAST_NAME: '',
    MOBILE: '',
    IMAGE: '',
    PASSPORT_ID: ''
  };

 getCardIdentification() {

  const formValue = this.cardAccessForm.getRawValue();

  const payload = {
    "Card_Manf_UID_Flg": false,
    "Card_Primry_MobIle_FLg": true,
    "Card_UID": "",
    "Card_Mob_Numbr": formValue.mobilenumber
  }

  this.apiService.postCall(this.apiService.baseURL + '/GetMemberIdentity', payload)
    .subscribe(data => {
      console.log(data);
    },
        (error) => {
           console.log('Error: ', error)
          this.toastr.error(error.error?.Message || error, '', {
            timeOut: 5000,
          });
        });
 }

  // openBrandCommercePOS(): void {
  //   this.router.navigate(['/pos']);
  // }

  openBrandCommercePOS() {

    this.router.navigate(['/pos']);

    setTimeout(() => {

      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      }

    }, 200);
  }

  aurthenticateUser() {
    // http://www.shripatigroup.com/alcoolretail/carryr/retail/AuthenticateUserForPOS
    const payload = {
      "User_Regid": "string",
      "Partnerid": "string",
      "Terminlid": "string",
      "POSid": "string" 
  }

  this.apiService.postCall(this.apiService.baseURL + '/AuthenticateUserForPOS', payload)
        .subscribe(data => {
          console.log(data);

          if(data.Message === 'User Type is Not Added to Brand Commerce'){
            this.toastr.error(data.Message);
          } else{
            this.toastr.success(data.Message);
          }

        },
          (error) => {
            console.log('Error: ', error)
            this.toastr.error(error.error?.Message || error, '', {
              timeOut: 5000,
            });
          });

// http://www.shripatigroup.com/alcoolretail/carryr/retail/DisplayUserAppMsg
// {
//   "User_Regid": "string"
// }
// http://www.shripatigroup.com/alcoolretail/carryr/retail/VerifyUserCode
// {
//   "User_Regid": "string",
//   "Authentication_id": "string",
//   "User_Code": "string"
// }
  }

}
