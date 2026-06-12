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
declare var $: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [NgbModalConfig, NgbModal, NgbActiveModal, DataService]
})
export class LoginComponent implements OnInit {
  modalRef: BsModalRef;
  modalRef1: BsModalRef | null;
  baseUrl: string = "http://www.shripatigroup.com/alcoolretail/carryr/retail";
  loginForm: FormGroup;
  submitted: boolean;
  loginData: string;
  showloader: boolean = true;
  domainid: any;
  platformId: any;
  domainName: any;
  loadingBtn: boolean = true;
  constructor(private modalService: BsModalService,
    private registerService: RegisterService,
    private bsModalRef: BsModalRef,
    private router: Router,
    private spinner: NgxSpinnerService,
    public dataservice: DataService,
    public commonservice: CommonService,
    private toastr: ToastrService) {
    this.loginForm = new FormGroup({
      domain: new FormControl("", [Validators.required]),
      platform: new FormControl("", [Validators.required]),
      mobile: new FormControl("", [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
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

  domainChange(e) {
    this.domainid = this.loginForm.value.domain;
    this.domainName = e.target.options[e.target.options.selectedIndex].text;
    console.log(this.domainid);
  }

  platformChange(e) {
    this.platformId = this.loginForm.value.platform;
    console.log(this.platformId)
  }


  // login(){
  //  this.submitted = true;
  //  this.loadingBtn = false;
  //   if (this.loginForm.invalid) {
  //     return;
  // }

  //   let loginData = {
  //     PlatformId: this.platformId,
  //     UserDomainId: +this.domainid,
  //     UserLoginMobileNumber: +this.loginForm.value.mobile,
  //     UserLoginPassword: this.loginForm.value.password
  //   }

  //   console.log(loginData)
  //   this.showloader = true;
  //   this.registerService.postCallHttp(this.baseUrl + '/Shoppenationstorelogin', loginData).subscribe(data => { 
  //     console.log(data);
  //     this.commonservice.passLoginData(data);
  //     localStorage.setItem('logindata', JSON.stringify(data));
  //     localStorage.setItem('getDomainID', this.domainid);
  //     this.showloader = false;
  //     let message = "Login Successfully";

  //   if(data == "Please providecorrect credentials  for login to access your store") {
  //     this.toastr.error('Please provide correct credentials');
  //     this.loadingBtn = true;
  //   }
  //   else {
  //     this.toastr.success(message);
  //     this.router.navigate(['/dashboard']);
  //     this.close();
  //   }

  //  },
  //  (error) => {   
  //   this.loadingBtn = true;
  //   this.toastr.error('Please provide correct credentials', '',{
  //     timeOut: 5000,
  //  })
  // }
  //     ); 
  // }


  login() {
    this.submitted = true;
    this.loadingBtn = false;
    if (this.loginForm.invalid) {
      return;
    }

    if(this.platformId == 1) {
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
    }

    console.log(loginData)
    this.showloader = true;
    this.registerService.postCallHttp(this.baseUrl + '/ShoppenationMDRLogin', loginData).subscribe(data => {
      console.log(data);
      this.commonservice.passLoginData(data);
      localStorage.setItem('logindata', JSON.stringify(data));
      localStorage.setItem('getDomainID', this.domainid);
      this.showloader = false;
      let message = "Login Successfully";

      if (data.Message == "Please enter correct credentials.") {
        this.toastr.error('Please provide correct credentials');
        this.loadingBtn = true;
      }
      else {
        this.toastr.success(message);
        this.router.navigate(['/dashboard']);
        this.close();
      }

    },
      (error) => {
        this.loadingBtn = true;
        this.toastr.error('Please provide correct credentials', '', {
          timeOut: 5000,
        })
      }
    );
  }

}

