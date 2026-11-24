import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { RegisterComponent } from '../register/register.component';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { RegisterService } from '../services/register.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { DataService } from '../services/dataservice';
import { CommonService } from '../services/common.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { NgxSpinnerService } from "ngx-bootstrap-spinner";
import { DeviceAuthService } from '../services/device-auth.service';
import { ApiService } from '../services/api.service';

declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [NgbModalConfig, NgbModal, NgbActiveModal, DataService]
})
export class LoginComponent implements OnInit {

  modalRef: BsModalRef | undefined;
  modalRef1: BsModalRef | null | undefined;

  baseUrl: string = "https://www.shoppenation.in/alcoolretail/carryr/retail";

  loginForm: FormGroup;
  submitted: any;
  loginData: any;
  showloader: boolean = true;
  domainid: any;
  platformId: any;
  domainName: any;
  loadingBtn: boolean = true;

  constructor(
    private modalService: BsModalService,
    private registerService: RegisterService,
    private bsModalRef: BsModalRef,
    private router: Router,
    private spinner: NgxSpinnerService,
    public dataservice: DataService,
    public commonservice: CommonService,
    private toastr: ToastrService,
    private deviceAuthService: DeviceAuthService,
    private apiService: ApiService
  ) {

    this.loginForm = new FormGroup({
      domain: new FormControl("", [Validators.required]),
      platform: new FormControl("", [Validators.required]),
      mobile: new FormControl("", [
        Validators.required,
        Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")
      ]),
      password: new FormControl("", [Validators.required]),
    });

  }

  close() {
    this.bsModalRef.hide();
  }

  ngOnInit() {
    this.showloader = false;
  }

  gotoRegister() {
    this.close();
    this.router.navigate(['/register']);
  }

  get f() {
    return this.loginForm.controls;
  }

  domainChange(e: any) {
    this.domainid = this.loginForm.value.domain;
    this.domainName = e.target.options[e.target.options.selectedIndex].text;
    console.log(this.domainid);
  }

  platformChange(e: any) {
    this.platformId = this.loginForm.value.platform;
    console.log(this.platformId);
  }

  completeLogin(data: any) {

    this.commonservice.passLoginData(data);

    const expiryTime =
      new Date().getTime() + (5 * 60 * 60 * 1000);

    data.expiryTime = expiryTime;

    localStorage.removeItem('logindata');
    localStorage.removeItem('getDomainID');

    localStorage.setItem(
      'logindata',
      JSON.stringify(data)
    );

    localStorage.setItem(
      'getDomainID',
      this.domainid
    );

    this.apiService.refreshLoginData();

    this.showloader = false;
    this.loadingBtn = true;

    this.toastr.success('Login Successfully');

    this.router.navigate(['/dashboard']);

    this.close();
  }


  login() {

    this.submitted = true;
    this.loadingBtn = false;

    if (this.loginForm.invalid) {
      this.loadingBtn = true;
      return;
    }

    if (this.platformId == 1) {
      this.toastr.error('All Day Shop is currently disabled');
      this.loadingBtn = true;
      return;
    }

    let loginData = {
      PlatformId: 2,
      UserDomainId: +this.domainid,
      UserLoginMobileNumber: +this.loginForm.value.mobile,
      UserLoginPassword: this.loginForm.value.password,
      MDR_App_Flg: this.platformId == 3 ? true : false,
      Distribution_App_Flg: this.platformId == 2 || this.platformId == 4 ? true : false
    };

    console.log('Login Data:', loginData);

    this.showloader = true;

    this.registerService.postCallHttp(
      this.baseUrl + '/ShoppenationMDRLogin',
      loginData
    ).subscribe({

      next: (data: any) => {

        console.log("Login Response: ", data);

        // STEP 1: Check login credentials

        if (data.Message == "Please enter correct credentials.") {

          this.showloader = false;
          this.loadingBtn = true;

          this.toastr.error('Please provide correct credentials');
          return;
        }

        // STEP 2: STATIC CHALLENGE FOR TESTING

        const challenge = {
          challengeId: data.Challengeid,
          nonce: data.Nounce
        };

        console.log('STEP 1: Static Challenge:', challenge);

        // STEP 3: Call Chrome Extension only once

        console.log('STEP 2: Calling DeviceAuthService');

        this.deviceAuthService.verifyDevice(
          challenge.challengeId,
          challenge.nonce
        ).then((device: any) => {

          console.log('STEP 3: Device Response:', device);

          // STEP 4: Prepare device verification payload


          const verificationPayload = {

            "Credential_Found": 1,
            "Member_Validity_Found": data.Member_Validity_Found,
            "MDR_App_Flg": data.MDR_Connect_APP_Flg,
            "DISTRIBUTION_App_Flg": data.Distribution_APP_Flg,
            "POS_App_Flg": 0,

            "Device_UID": device.uid || "0",
            "AD_Stamp_Found_Flg": 1,
            "Access_Terminalid": device.tid || "0",

            "Hashed_Stamp1": device.stamps?.["X1.txt"] || "0",
            "Hashed_Stamp2": device.stamps?.["X2.txt"] || "0",
            "Hashed_Stamp3": device.stamps?.["X3.txt"] || "0",
            "Hashed_Stamp4": device.stamps?.["X4.txt"] || "0",

            "LoginResp_UserRoleid1": data.RETAIL_D2C_ACCT_INTRNL_CUSTMR_ROLE_ALCTD,
            "POS_Terminalid": 0,
            "Login_Instance_id": data.Login_Instance_id
          };


          console.log('STEP 4: Auth Payload:', verificationPayload);

          this.apiService.postCall(
            `${this.apiService.baseURL}/ValidateTerminalSignaturePostlogin`,
            verificationPayload
          ).subscribe(
            (verificationRes: any) => {

              console.log('Terminal Verification Response:', verificationRes);

              if (verificationRes.Physical_Terminal_Validated_Flag == 0) {

                this.showloader = false;
                this.loadingBtn = true;

                this.toastr.error(verificationRes.Message);

              } else {

                // STEP 5: Complete Login
                console.log('STEP 5: Completing Login');

                this.completeLogin(data);

                this.showloader = false;
                this.loadingBtn = true;

              }

            },
            (error) => {

              console.log('Device Authentication Error:', error);

              this.showloader = false;
              this.loadingBtn = true;

              this.toastr.error(error.error, '', {
                timeOut: 5000,
              });

            }
          );

        }).catch((error: any) => {

          console.error('Device Authentication Error:', error);

          this.showloader = false;
          this.loadingBtn = true;

          this.toastr.error(
            error.message || 'Device authentication failed'
          );

        });

      },

      error: (error) => {

        console.error('Login API Error:', error);

        this.showloader = false;
        this.loadingBtn = true;

        this.toastr.error(
          'Please provide correct credentials'
        );
      }

    });

  }


}