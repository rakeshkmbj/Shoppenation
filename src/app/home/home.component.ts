import { Component, ViewChild, AfterViewInit, TemplateRef, OnInit } from '@angular/core';
import { NgbModal, NgbModalConfig, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { BsModalService, BsModalRef, ModalDirective } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { RegisterService } from '../services/register.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginComponent } from '../login';
import { AtAGlanceComponent } from '../About/at-aglance/at-aglance.component';
import { AboutUsComponent } from '../About/about-us/about-us.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  baseUrl: string = "http://eguarddocshieldapi/carryr/b2b";
  modalRef: BsModalRef | undefined;
  closeResult: string | undefined;
  // isModalShown = true;
  images = [1, 2, 3].map((n) => `../assets/images/${n}.png`);
  @ViewChild('template') modalTemplate: TemplateRef<any> | undefined;
  couponForm: FormGroup | undefined;
  mobilemsg: {} | undefined;
  mobileMsg: boolean | undefined;
  coupon: any;
  Coupon: any;
  message: any;
  submitted: boolean | undefined;

  constructor(
    private modalService: BsModalService,
    private registerService: RegisterService,
    private toastr: ToastrService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  domainimages = [
    { img: "../assets/images/domain images/newalcohol.jpg", name: "Alcohol & Liquor" },
    { img: "../assets/images/domain images/restaurants.png", name: "Restaurants & F&B" },
    { img: "../assets/images/domain images/newfmcg.jpg", name: "FMCG" },
    { img: "../assets/images/domain images/fashion.png", name: "Fashion & Lifestyle" },
    { img: "../assets/images/domain images/Electronics and Large Appliances.jpeg", name: "Electronics & Appliances" },
    { img: "../assets/images/domain images/Home decor and furnishing.jpeg", name: "Home Decor & Furnishing" },
    { img: "../assets/images/domain images/Pharma and Medicos.jpg", name: "Pharma & Medicos" },
    { img: "../assets/images/domain images/pet-shoppe.jpg", name: "Pet Shoppe" },
    { img: "../assets/images/domain images/Garden and Outdoor.jpeg", name: "Garden & Outdoor" },
    { img: "../assets/images/domain images/Food and Agro.jpeg", name: "Food & Agro" },
    { img: "../assets/images/domain images/newConstruction.jpg", name: "Construction" },
    { img: "../assets/images/domain images/newmedical.jpg", name: "Medical Services" },
    { img: "../assets/images/domain images/image-70957--113629.jpg", name: "General Retail" },
    { img: "../assets/images/domain images/Automobile Spare Parts.jpeg", name: "Automobile Spare Parts" },
    { img: "../assets/images/domain images/Kitchen and Dining.jpeg", name: "Kitchen & Dining" },
    { img: "../assets/images/domain images/Electric and Lighting.jpeg", name: "Electrical & Lighting" },
    { img: "../assets/images/domain images/384ed512517d8d754890cf1375f60263.jpg", name: "Miscellaneous" }
  ];

  currentIndex = 0;

  nextSlide() {
    if (this.currentIndex < this.domainimages.length - 4) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
  }

  openLoginModal() {
    this.modalRef = this.modalService.show(LoginComponent, Object.assign({}, { class: 'login-modal' }));
  }

  ngOnInit() {
    this.couponForm = this.formBuilder.group({
      mobileNumber: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      // password: ['', Validators.required]
    });

    setInterval(() => {
      this.nextSlide();
    }, 2500); // 🔥 speed control
  }

  openLearnMore() {
    this.modalRef = this.modalService.show(AtAGlanceComponent, Object.assign({}, { class: 'modal-xl' }));
  }

  ngAfterViewInit() {
    // this.openModal(this.modalTemplate);

  }

  openAboutUs() {
    this.modalRef = this.modalService.show(AboutUsComponent, Object.assign({}, { class: 'modal-xl' }));
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

  get f() {
    return this.couponForm!.controls;
  }
  generateCoupon() {

    this.submitted = true;

    if (this.couponForm!.invalid) {
      return;
    }
    console.log(this.couponForm!.value);
    let mobileNumber = this.couponForm!.value.mobileNumber;
    this.registerService.getCall(this.baseUrl + '/CouponAllocation/' + mobileNumber + "/" + true).subscribe((data: any) => {
      this.mobileMsg = true;
      this.mobilemsg = data;
      console.log(data);
      this.Coupon = data.Coupon;
      this.message = data.message;

    });

  }

}