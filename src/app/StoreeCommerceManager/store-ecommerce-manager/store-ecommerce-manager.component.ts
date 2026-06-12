import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-store-ecommerce-manager',
  templateUrl: './store-ecommerce-manager.component.html',
  styleUrls: ['./store-ecommerce-manager.component.scss']
})
export class StoreEcommerceManagerComponent implements OnInit {
  imgURL = this.apiService.imgURL;
  getlogindata: any;
  officename: any;
  address: any;
  pincode: any;
  domainname: any;
  accountid: any;
  subaccid: any;
  storeid: any;
  photo: any;
  username: string;
  roleid: any;
  role = '';
  cartcount: any;
  domainid: any;
  storeName: any;
  modalRef: BsModalRef;

  constructor(
    public commonservice: CommonService,
    private modalService: BsModalService,
    private apiService: ApiService,
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
  ) {
    this.accountid = this.apiService.requiredLoginData.accountid;
    this.subaccid = this.apiService.requiredLoginData.subaccountid;
    this.storeid = this.apiService.requiredLoginData.storeid;
    this.officename = this.apiService.requiredLoginData.storeName;
    this.domainid = this.apiService.requiredLoginData.domainid;
    this.address = this.apiService.requiredLoginData.address;
    this.pincode = this.apiService.requiredLoginData.pincode;
    this.photo = this.apiService.requiredLoginData.photo;
    this.username = this.apiService.requiredLoginData.username;
    this.roleid = this.apiService.requiredLoginData.roleid;
    this.cartcount = this.apiService.requiredLoginData.cartcount;

    this.getlogindata = localStorage.getItem('logindata');
    this.getlogindata = JSON.parse(this.getlogindata);
  }

  changePasswordForm: FormGroup;
  submitted = false;
  passwordMismatch = false;

  ngOnInit(): void {
    let loginDAta = JSON.parse(localStorage.getItem("logindata"));
    this.username = loginDAta.RETAIL_D2C_ACCT_INTRNL_FIRST_NAME + " " + loginDAta.RETAIL_D2C_ACCT_INTRNL_LAST_NAME;
    this.commonservice.stringSubject.subscribe(loginData => {
      console.log(loginData);
    });

    if (this.cartcount == null) {
      this.cartcount = 0;
    }
    if (this.roleid == 1) {
      this.role = "Super Admin";
    }
    else if (this.roleid == 2) {
      this.role = "Admin";
    }
    else if (this.roleid == 3) {
      this.role = "Store Inventury Incharge";
    }

    this.changePasswordForm = this.formBuilder.group({
      currentPassword: ['', Validators.required],
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    });

  }

  logout() {
    localStorage.clear();
    sessionStorage.clear();

    this.router.navigate(['/']).then(() => {
      window.location.reload();
    });
  }

  openChangePassword(template) {

    const payload = {
      Account_Subaccid: this.subaccid,
      Account_Storeid: this.storeid,
      CardRegid: this.getlogindata.ADC_VEND_CARDHOLDR_REGID
    }

    console.log("payload: ", payload);

    this.apiService.postCall(`${this.apiService.baseURL}/GetVendPassword`, payload)
      .subscribe(data => {
        console.log(data);
      },
        (error) => {
          console.log(error);
          this.toastr.error(error.error, '', {
            timeOut: 5000,
          });
        }
      );

    this.modalRef = this.modalService.show(template, Object.assign({}, { class: 'width-720' }));
  }

  accDetails(template: any) {
    this.modalRef = this.modalService.show(template, Object.assign({}, { class: 'width-720' }));
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
      currentPassword: this.f.currentPassword.value,
      newPassword: this.f.newPassword.value
    };

    console.log("Change Password Payload:", payload);

    // 🔹 Call API here
  }


}
