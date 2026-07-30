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
    cardTagId: ['']
  });

  cardDetails = {
    REGID: '',
    VALID: true,
    SUSPENDED: false,
    GENERATED_FROM: '',
    FIRST_NAME: '',
    LAST_NAME: '',
    MOBILE: '',
    IMAGE: ''
  };

  getCardIdentification() {
    // Call API using cardTagId
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

}
