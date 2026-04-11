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

  modalRef: BsModalRef | undefined;
  activeTabId: string = 'tab1';
  getlogindata: any;
  fromDate1: string = '';
  fromDate2: string = '';
  cardholderRefill: any;
  cardholderSpends: any;
  showCardholderRefill: boolean | undefined;
  showCardholderSpends: boolean | undefined;
  changePasswordForm: FormGroup;
  submitted: any | undefined;
  passwordMismatch: any | undefined;
  subaccountid: any | undefined;
  storeid: any | undefined;

  constructor(
    private apiService: ApiService,
    private modalService: BsModalService,
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
  ) {

    this.subaccountid = this.apiService.requiredLoginData.subaccountid;
    this.storeid = this.apiService.requiredLoginData.storeid;

    this.getlogindata = localStorage.getItem('logindata');
    this.getlogindata = JSON.parse(this.getlogindata);
    console.log("Login data: ", this.getlogindata)

    this.changePasswordForm = this.formBuilder.group({
      currentPassword: [{ value: '', disabled: true }, Validators.required],
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    });

  }

  ngOnInit(): void {
    this.onCurrentBalanceTabSelected();
    this.initForm();
  }

  initForm() {
    this.changePasswordForm = this.formBuilder.group({
      currentPassword: [{ value: '', disabled: true }],
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    });
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

  openChangePassword(template: any) {

    this.submitted = false;
    this.passwordMismatch = false;

    this.initForm();

    const payload = {
      Account_Subacctid: this.subaccountid,
      Account_Storeid: this.storeid,
      CardRegid: this.getlogindata.ADC_VEND_CARDHOLDR_REGID
    };

    this.apiService.postCall(`${this.apiService.baseURL}/GetVendPassword`, payload)
      .subscribe((data: any) => {

        this.changePasswordForm.patchValue({
          currentPassword: data.Password
        });

      }, (error) => {
        this.toastr.error(error.error, '', { timeOut: 5000 });
      });

    this.modalRef = this.modalService.show(template, { class: 'width-720' });
  }

  get f() {
    return this.changePasswordForm.controls;
  }

  changePassword() {
    this.submitted = true;

    if (this.changePasswordForm.invalid) return;

    const { newPassword, confirmPassword } = this.changePasswordForm.value;

    if (newPassword !== confirmPassword) {
      this.passwordMismatch = true;
      return;
    }

    this.passwordMismatch = false;

    const payload = {
      CardRegid: this.getlogindata.ADC_VEND_CARDHOLDR_REGID,
      Password: this.f.newPassword.value
    };

    console.log("Change Password Payload:", payload);

    this.apiService.postCall(`${this.apiService.baseURL}/ChangeVendPassword`, payload)
      .subscribe(data => {
        console.log(data);
        this.toastr.success(data.Message);
      },
        (error) => {
          console.log(error);
          this.toastr.error(error.error, '', {
            timeOut: 5000,
          });
        }
      );

    this.modalRef?.hide();
  }

}
