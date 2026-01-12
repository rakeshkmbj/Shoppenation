import { Component, ViewChild, AfterViewInit, TemplateRef, OnInit } from '@angular/core';
import { NgbModal, NgbModalConfig, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { BsModalService, BsModalRef, ModalDirective } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { RegisterService } from '../services/register.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginComponent } from '../login';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit {
  baseUrl:string = "http://eguarddocshieldapi/carryr/b2b";
  modalRef: BsModalRef;
  closeResult: string;
 // isModalShown = true;
  images = [1, 2, 3].map((n) => `../assets/images/${n}.png`);
  @ViewChild('template') modalTemplate : TemplateRef<any>;
  couponForm: FormGroup;
  mobilemsg: {};
  mobileMsg: boolean;
  coupon: any;
  Coupon: any;
  message: any;
  submitted: boolean;
 
  
  constructor(
    private modalService: BsModalService,
    private registerService:RegisterService,
    private toastr: ToastrService,
    private router: Router,
    private formBuilder: FormBuilder
    ) {}

  openLoginModal() {
    this.modalRef = this.modalService.show(LoginComponent,  Object.assign({}, { class: 'login-modal' }));
}

ngOnInit () {
  this.couponForm  =  this.formBuilder.group({
    mobileNumber: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
   // password: ['', Validators.required]
});
}

ngAfterViewInit() {
   // this.openModal(this.modalTemplate);
  
  }

  config = {
    backdrop: true,
    ignoreBackdropClick: true
  };
  
  // openModal(template: TemplateRef<any>) {
  //   this.modalRef = this.modalService.show(template, Object.assign({}, { class: 'coupon-modal' }));
  // }

//   openCouponModal(couponModal: TemplateRef<any>) {
//     this.modalRef.hide();
//     this.modalRef = this.modalService.show(couponModal, this.config);
 
// }

get f(){
  return this.couponForm.controls;
}
generateCoupon() {  

  this.submitted = true;

  if (this.couponForm.invalid) {
    return;
}
  console.log(this.couponForm.value);
  let mobileNumber = this.couponForm.value.mobileNumber;
  this.registerService.getCall(this.baseUrl +'/CouponAllocation/' + mobileNumber + "/" + true ).subscribe((data: any) => {
    this.mobileMsg = true;
    this.mobilemsg = data;
    console.log(data);
    this.Coupon = data.Coupon;
    this.message = data.message;
 
 });  
 
} 




}