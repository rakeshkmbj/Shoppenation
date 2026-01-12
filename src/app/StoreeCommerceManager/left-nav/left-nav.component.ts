import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.scss']
})
export class LeftNavComponent implements OnInit {
  public scrollbarOptions = { axis: 'yx', theme: 'minimal-dark' };
  getlogindata: any;
  navLinkAccess: boolean = false;
  isDisabled: boolean;
  role: any;
  MDR_Connect_App_Flag: any;
  MDR_Seller_With_SKU_Flag: any;

  primarySellerFlag: boolean;

  constructor(
    private toastr: ToastrService,
    private router: Router
  ) {
    this.getlogindata = localStorage.getItem('logindata');
    console.log('getlogindata: ', JSON.parse(this.getlogindata));
    this.getlogindata = JSON.parse(this.getlogindata);
  }

  ngOnInit(): void {
    this.role = this.getlogindata.RETAIL_D2C_ACCT_INTRNL_CUSTMR_ROLE_ALCTD;
    this.primarySellerFlag = this.getlogindata.PRIMARY_SELLER_FLG;

    this.MDR_Connect_App_Flag = this.getlogindata.MDR_Connect_App_Flag;
    this.MDR_Seller_With_SKU_Flag = this.getlogindata.MDR_Seller_With_SKU_Flag;

    console.log("NAv bAr wala login data: ", this.getlogindata)

    // this.primarySellerFlag = false;


    if ($('.dropdown li a').hasClass('active')) {
    }
    // $(".nav-item > a").click(function () {

    //   $('.nav-item').removeClass('active');
    //   $(this).parent('.nav-item').toggleClass('active');

    // });

  }
  status1: boolean = false;
  status2: boolean = false;
  status3: boolean = false;
  status4: boolean = false;
  status5: boolean = false;
  status6: boolean = false;
  status7: boolean = false;
  status8: boolean = false;
  status9: boolean = false;
  status10: boolean = false;
  status11: boolean = false;
  status12: boolean = false;

  clickEvent1() {
    this.status1 = !this.status1;
  }

  clickEvent2() {
    this.status2 = !this.status2;
  }

  clickEvent3() {
    this.status3 = !this.status3;
  }

  clickEvent4() {
    this.status4 = !this.status4;
  }

  clickEvent5() {
    this.status5 = !this.status5;
  }

  clickEvent6() {
    this.status6 = !this.status6;
  }

  clickEvent7() {
    this.status7 = !this.status7;
  }

  clickEvent8() {
    this.status8 = !this.status8;
  }

  clickEvent9() {
    this.status9 = !this.status9;
  }

  clickEvent10() {
    this.status10 = !this.status10;
  }

  clickEvent11() {
    this.status11 = !this.status11;
  }

  clickEvent12() {
    this.status12 = !this.status12;
  }

  handleItemSubitemDiscountClick(event: Event) {
    if (!this.primarySellerFlag) {
      this.toastr.error('Access Denied', '', {
        timeOut: 5000,
      });
      event.preventDefault();
      return;
    }
  }

}
