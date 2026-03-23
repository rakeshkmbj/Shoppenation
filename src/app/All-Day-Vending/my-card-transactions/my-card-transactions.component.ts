import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormGroup, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';
import { NgxSpinnerService } from "ngx-spinner";
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-my-card-transactions',
  templateUrl: './my-card-transactions.component.html',
  styleUrls: ['./my-card-transactions.component.css']
})
export class MyCardTransactionsComponent implements OnInit {

  activeTabId: string = 'tab1';
  getlogindata: any;
  fromDate1: string = '';
  fromDate2: string = '';
  cardholderRefill: any;
  cardholderSpends: any;
  showCardholderRefill: boolean;
  showCardholderSpends: boolean;

  constructor(
    private apiService: ApiService,
    private modalService: BsModalService,
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
  ) {

    this.getlogindata = localStorage.getItem('logindata');
    this.getlogindata = JSON.parse(this.getlogindata);
    console.log("Login data: ", this.getlogindata)

  }

  ngOnInit(): void {
    this.onCurrentBalanceTabSelected()
  }

  onTabChange(tabId: string): void {
    this.activeTabId = tabId;

    switch (tabId) {
      case 'tab1':
        this.onCurrentBalanceTabSelected();
        break;
      case 'tab2':
        break;
      case 'tab3':
        break;
      default:
        break;
    }
  }

  onCurrentBalanceTabSelected(): void {

    // const payload = {
    //   Card_Manufid: this.getlogindata.RETAIL_D2C_ACCT_INTRNL_OFFICE_REGID
    // }

    // this.apiService.postCall(this.apiService.baseURL + '/GetCardholderBalance', payload)
    //   .subscribe(data => {
    //     console.log(data);

    //   },
    //     (error) => {
    //       this.toastr.error(error, '', {
    //         timeOut: 5000,
    //       });
    //     });
  }

  onSpendOnVend(): void {
    this.showCardholderSpends = false;

    const payload = {
      Cardholder_Regid: this.getlogindata.ADC_VEND_CARDHOLDR_REGID,
      Frm_Date: this.fromDate1
    }

    console.log("payload: ", payload)

    this.apiService.postCall(this.apiService.baseURL + '/GetCardholderSpends', payload)
      .subscribe(data => {
        console.log(data);

        if (data.Message) {
          this.toastr.error(data.Message)
        } else {
          this.cardholderSpends = data;
        }

        this.showCardholderSpends = true;

      },
        (error) => {
          this.toastr.error(error, '', {
            timeOut: 5000,
          });
        });
  }

  onCardRefillDetails(): void {

    this.showCardholderRefill = false;

    const payload = {
      Cardholder_Regid: this.getlogindata.ADC_VEND_CARDHOLDR_REGID,
      Frm_Date: this.fromDate2
    }

    this.apiService.postCall(this.apiService.baseURL + '/GetCardholderRefill', payload)
      .subscribe(data => {
        console.log(data);

        if (data.Message) {
          this.toastr.error(data.Message)
        } else {
          this.cardholderRefill = data;
        }

        this.showCardholderRefill = true;

      },
        (error) => {
          this.toastr.error(error, '', {
            timeOut: 5000,
          });
        });
  }

}
