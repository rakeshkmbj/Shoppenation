import { Component, ViewChild } from '@angular/core';
import { Validators } from '@angular/forms';
import { LoginComponent } from '../login';
import { AtAGlanceComponent } from '../About/at-aglance/at-aglance.component';
import { AboutUsComponent } from '../About/about-us/about-us.component';
import * as i0 from "@angular/core";
import * as i1 from "ngx-bootstrap/modal";
import * as i2 from "../services/register.service";
import * as i3 from "ngx-toastr";
import * as i4 from "@angular/router";
import * as i5 from "@angular/forms";
import * as i6 from "@angular/common";
import * as i7 from "ngx-bootstrap/carousel";
const _c0 = ["template"];
function HomeComponent_div_59_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 40);
    i0.ɵɵlistener("click", function HomeComponent_div_59_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.openLoginModal()); });
    i0.ɵɵelementStart(1, "section", 41)(2, "div", 42)(3, "span", 43);
    i0.ɵɵelement(4, "img", 11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "h3");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(7, "div", 44);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("src", item_r1.img, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r1.name);
} }
export class HomeComponent {
    constructor(modalService, registerService, toastr, router, formBuilder) {
        this.modalService = modalService;
        this.registerService = registerService;
        this.toastr = toastr;
        this.router = router;
        this.formBuilder = formBuilder;
        this.baseUrl = "http://eguarddocshieldapi/carryr/b2b";
        // isModalShown = true;
        this.images = [1, 2, 3].map((n) => `../assets/images/${n}.png`);
        this.slides = [
            '../assets/images/11.png',
            '../assets/images/22.png',
            '../assets/images/33.png',
            '../assets/images/44.png'
        ];
        this.currentIndex2 = 0;
        this.domainimages = [
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
        this.currentIndex = 0;
        this.config = {
            backdrop: true,
            ignoreBackdropClick: true
        };
    }
    getPrevIndex() {
        return this.currentIndex2 === 0
            ? this.slides.length - 1
            : this.currentIndex2 - 1;
    }
    getNextIndex() {
        return (this.currentIndex2 + 1) % this.slides.length;
    }
    nextSlide() {
        if (this.currentIndex < this.domainimages.length - 4) {
            this.currentIndex++;
        }
        else {
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
            this.currentIndex2 =
                (this.currentIndex2 + 1) % this.slides.length;
        }, 3500);
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
    // openModal(template: TemplateRef<any>) {
    //   this.modalRef = this.modalService.show(template, Object.assign({}, { class: 'coupon-modal' }));
    // }
    //   openCouponModal(couponModal: TemplateRef<any>) {
    //     this.modalRef.hide();
    //     this.modalRef = this.modalService.show(couponModal, this.config);
    // }
    get f() {
        return this.couponForm.controls;
    }
    generateCoupon() {
        this.submitted = true;
        if (this.couponForm.invalid) {
            return;
        }
        console.log(this.couponForm.value);
        let mobileNumber = this.couponForm.value.mobileNumber;
        this.registerService.getCall(this.baseUrl + '/CouponAllocation/' + mobileNumber + "/" + true).subscribe((data) => {
            this.mobileMsg = true;
            this.mobilemsg = data;
            console.log(data);
            this.Coupon = data.Coupon;
            this.message = data.message;
        });
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(i0.ɵɵdirectiveInject(i1.BsModalService), i0.ɵɵdirectiveInject(i2.RegisterService), i0.ɵɵdirectiveInject(i3.ToastrService), i0.ɵɵdirectiveInject(i4.Router), i0.ɵɵdirectiveInject(i5.FormBuilder)); };
HomeComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: HomeComponent, selectors: [["app-home"]], viewQuery: function HomeComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.modalTemplate = _t.first);
    } }, decls: 130, vars: 7, consts: [[3, "noPause"], ["src", "../assets/images/4.png", 1, "w-100"], [1, "hero-overlay-content"], ["src", "../assets/images/5.png", 1, "w-100"], ["src", "../assets/images/1.png", 1, "w-100"], ["src", "../assets/images/2.png", 1, "w-100"], ["src", "../assets/images/3.png", 1, "w-100"], [1, "platform-showcase"], [1, "section-header"], [1, "custom-slider"], [1, "side-card", "left"], [3, "src"], [1, "center-card"], [1, "side-card", "right"], [1, "our-services", "padding"], [1, "container", "pl-0", "pr-0"], [1, "section-title", "text-center"], [1, "title"], [1, "domain-carousel-wrapper"], [1, "domain-carousel-track"], ["class", "domain-carousel-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "digital-transformation"], [1, "container"], [1, "row", "align-items-center"], [1, "col-lg-3", "col-12", "text-center", "text-lg-start"], [1, "col-lg-7", "col-12", "mt-3", "mt-lg-0"], [1, "dtps-provider"], [1, "col-lg-5", "col-12", "text-center", "text-lg-start"], [1, "col-lg-2", "col-12", "text-center"], ["src", "../assets/images/logo_1.jpg", 2, "max-width", "60px"], [1, "col-lg-2", "col-12", "text-center", "mt-3", "mt-lg-0"], [1, "btn", "btn-primary", "learn-more-btn", "w-100", 3, "click"], [1, "contact-section"], [1, "contact-container"], [1, "contact-card", "about-section"], [1, "btn", "btncolor", 3, "click"], [1, "about-content", "mt-2"], ["href", "http://www.all-day.in/#/home", "target", "_blank"], ["href", "http://www.ad-connect.in/", "target", "_blank"], [1, "contact-card"], [1, "domain-carousel-item", 3, "click"], [1, "gray-scale-frame"], [1, "content"], [1, "img"], [1, "border-box"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "carousel", 0)(1, "slide");
        i0.ɵɵelement(2, "img", 1);
        i0.ɵɵelementStart(3, "div", 2)(4, "h2");
        i0.ɵɵtext(5, " Ability to Bridge ");
        i0.ɵɵelementStart(6, "span");
        i0.ɵɵtext(7, "Business to Business");
        i0.ɵɵelementEnd();
        i0.ɵɵtext(8, " & Direct to Consumers Commerce ");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(9, "slide");
        i0.ɵɵelement(10, "img", 3);
        i0.ɵɵelementStart(11, "div", 2)(12, "h2");
        i0.ɵɵtext(13, " Ability to Bridge ");
        i0.ɵɵelementStart(14, "span");
        i0.ɵɵtext(15, "Business to Business");
        i0.ɵɵelementEnd();
        i0.ɵɵtext(16, " & Direct to Consumers Commerce ");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(17, "slide");
        i0.ɵɵelement(18, "img", 4);
        i0.ɵɵelementStart(19, "div", 2)(20, "h2");
        i0.ɵɵtext(21, " Ability to Bridge ");
        i0.ɵɵelementStart(22, "span");
        i0.ɵɵtext(23, "Business to Business");
        i0.ɵɵelementEnd();
        i0.ɵɵtext(24, " & Direct to Consumers Commerce ");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(25, "slide");
        i0.ɵɵelement(26, "img", 5);
        i0.ɵɵelementStart(27, "div", 2)(28, "h2");
        i0.ɵɵtext(29, " Ability to Bridge ");
        i0.ɵɵelementStart(30, "span");
        i0.ɵɵtext(31, "Business to Business");
        i0.ɵɵelementEnd();
        i0.ɵɵtext(32, " & Direct to Consumers Commerce ");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(33, "slide");
        i0.ɵɵelement(34, "img", 6);
        i0.ɵɵelementStart(35, "div", 2)(36, "h2");
        i0.ɵɵtext(37, " Ability to Bridge ");
        i0.ɵɵelementStart(38, "span");
        i0.ɵɵtext(39, "Business to Business");
        i0.ɵɵelementEnd();
        i0.ɵɵtext(40, " & Direct to Consumers Commerce ");
        i0.ɵɵelementEnd()()()();
        i0.ɵɵelementStart(41, "section", 7)(42, "div", 8)(43, "h2");
        i0.ɵɵtext(44, "Our Next Generation Ecosystems");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(45, "div", 9)(46, "div", 10);
        i0.ɵɵelement(47, "img", 11);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(48, "div", 12);
        i0.ɵɵelement(49, "img", 11);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(50, "div", 13);
        i0.ɵɵelement(51, "img", 11);
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(52, "div", 14)(53, "div", 15)(54, "div", 16)(55, "h1", 17);
        i0.ɵɵtext(56, "Shoppenation Business Domains");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(57, "div", 18)(58, "div", 19);
        i0.ɵɵtemplate(59, HomeComponent_div_59_Template, 8, 2, "div", 20);
        i0.ɵɵelementEnd()()()();
        i0.ɵɵelementStart(60, "div", 21)(61, "div", 22)(62, "div", 23)(63, "div", 24)(64, "h2");
        i0.ɵɵtext(65, "Digital Transformation Platform for Businesses");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(66, "div", 25)(67, "div", 26)(68, "div", 23)(69, "div", 27)(70, "h5");
        i0.ɵɵtext(71, " Get your Brand Direct to Consumers & be ready for Future... ");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(72, "div", 28);
        i0.ɵɵelement(73, "img", 29);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(74, "div", 27)(75, "p")(76, "strong")(77, "u");
        i0.ɵɵtext(78, "Revolution for Businesses");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(79, "p");
        i0.ɵɵtext(80, " Selling online with your own website powered with an e-commerce engine integrated with your brand and marketplace has never been easier. ");
        i0.ɵɵelementEnd()()()()();
        i0.ɵɵelementStart(81, "div", 30)(82, "button", 31);
        i0.ɵɵlistener("click", function HomeComponent_Template_button_click_82_listener() { return ctx.openLearnMore(); });
        i0.ɵɵtext(83, " Learn More ");
        i0.ɵɵelementEnd()()()()();
        i0.ɵɵelementStart(84, "div", 32)(85, "div", 33)(86, "div", 34)(87, "h5");
        i0.ɵɵtext(88, "Know more About us");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(89, "button", 35);
        i0.ɵɵlistener("click", function HomeComponent_Template_button_click_89_listener() { return ctx.openAboutUs(); });
        i0.ɵɵtext(90, " About Us ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(91, "div", 36)(92, "p");
        i0.ɵɵtext(93, " Know More for our All-Day Shop Platform");
        i0.ɵɵelement(94, "br");
        i0.ɵɵelementStart(95, "a", 37);
        i0.ɵɵtext(96, " http://www.all-day.in/#/home ");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(97, "p");
        i0.ɵɵtext(98, " Know more for our IPTV & Ad Monetization Platform");
        i0.ɵɵelement(99, "br");
        i0.ɵɵelementStart(100, "a", 38);
        i0.ɵɵtext(101, " http://www.ad-connect.in/ ");
        i0.ɵɵelementEnd()()()();
        i0.ɵɵelementStart(102, "div", 39)(103, "h5");
        i0.ɵɵtext(104, "Registered Address");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(105, "p");
        i0.ɵɵtext(106, " Plot No, 11-A Central Market");
        i0.ɵɵelement(107, "br");
        i0.ɵɵtext(108, " 2nd Floor, Lajpat Nagar II");
        i0.ɵɵelement(109, "br");
        i0.ɵɵtext(110, " New Delhi 110024 - INDIA");
        i0.ɵɵelement(111, "br");
        i0.ɵɵtext(112, " +91 8700693372");
        i0.ɵɵelement(113, "br");
        i0.ɵɵelementStart(114, "strong");
        i0.ɵɵtext(115, "Support@all-day.in");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(116, "div", 39)(117, "h5");
        i0.ɵɵtext(118, "Development Centre & Sales office");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(119, "p");
        i0.ɵɵtext(120, " Plot No. 530");
        i0.ɵɵelement(121, "br");
        i0.ɵɵtext(122, " Udyog Vihar Phase-5");
        i0.ɵɵelement(123, "br");
        i0.ɵɵtext(124, " Gurugram (NCR) 122016 - INDIA");
        i0.ɵɵelement(125, "br");
        i0.ɵɵtext(126, " +91 9810061994");
        i0.ɵɵelement(127, "br");
        i0.ɵɵelementStart(128, "strong");
        i0.ɵɵtext(129, "Rajesh.h@all-day.in");
        i0.ɵɵelementEnd()()()()();
    } if (rf & 2) {
        i0.ɵɵproperty("noPause", false);
        i0.ɵɵadvance(47);
        i0.ɵɵproperty("src", ctx.slides[ctx.getPrevIndex()], i0.ɵɵsanitizeUrl);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("src", ctx.slides[ctx.currentIndex2], i0.ɵɵsanitizeUrl);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("src", ctx.slides[ctx.getNextIndex()], i0.ɵɵsanitizeUrl);
        i0.ɵɵadvance(7);
        i0.ɵɵstyleProp("transform", "translateX(-" + ctx.currentIndex * 25 + "%)");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.domainimages);
    } }, dependencies: [i6.NgForOf, i7.SlideComponent, i7.CarouselComponent], styles: [".our-services[_ngcontent-%COMP%] {\r\n    padding: 50px 20px;\r\n}\r\n\r\n.our-services[_ngcontent-%COMP%]   section[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    height: 250px;\r\n    border-radius: 5px;\r\n    background: #fff;\r\n    box-shadow: 0 0 5px #eee;\r\n    position: relative;\r\n}\r\n\r\n.our-services[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n    font-size: 16px;\r\n    font-weight: 600;\r\n    margin-top: 5px;\r\n}\r\n\r\n.our-services[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    font-size: 16px;\r\n}\r\n\r\n.digital-transformation[_ngcontent-%COMP%] {\r\n    padding: 40px;\r\n    background: #dd7022;\r\n}\r\n\r\n.digital-transformation[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    padding-top: 25px;\r\n    color: #fff;\r\n    font-size: 22px;\r\n}\r\n\r\n.dtps-provider[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    background: #fff;\r\n    padding: 10px;\r\n    border-radius: 5px;\r\n}\r\n\r\n.dtps-provider[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\r\n    font-size: 16px;\r\n    font-weight: 700;\r\n    padding: 32px 0;\r\n    margin: 0;\r\n    text-align: left;\r\n}\r\n\r\n.dtps-provider[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 13px;\r\n    margin: 0;\r\n}\r\n\r\n.dtps-provider[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    line-height: 16px;\r\n    display: inline-block;\r\n    font-weight: 600;\r\n    margin-top: 5px;\r\n    color: #fff;\r\n}\r\n\r\n.learnmore[_ngcontent-%COMP%] {\r\n    text-align: right;\r\n    padding-top: 30px;\r\n}\r\n\r\n.learn-more-btn[_ngcontent-%COMP%] {\r\n    padding: 12px 35px;\r\n    font-size: 15px;\r\n    font-weight: 600;\r\n    background: #f57921;\r\n    border-color: #f57921;\r\n}\r\n\r\n\r\n\r\nsection.star-performers[_ngcontent-%COMP%] {\r\n    padding: 30px 15px;\r\n}\r\n\r\n.padding[_ngcontent-%COMP%] {\r\n    padding: 30px 15px;\r\n}\r\n\r\n.section-title[_ngcontent-%COMP%] {\r\n    margin-bottom: 25px;\r\n    padding-bottom: 15px;\r\n    border-bottom: 1px solid #ddd;\r\n}\r\n\r\nh1.title[_ngcontent-%COMP%] {\r\n    font-size: 25px;\r\n    margin-bottom: 0px;\r\n    position: relative;\r\n    display: inline-block;\r\n}\r\n\r\nh1.title[_ngcontent-%COMP%]:after {\r\n    position: absolute;\r\n    content: \"\";\r\n    background: #f57921;\r\n    width: 100%;\r\n    height: 2px;\r\n    left: 0;\r\n    bottom: -16px;\r\n    z-index: 999;\r\n}\r\n\r\n.product-items[_ngcontent-%COMP%]   .col-sm-3[_ngcontent-%COMP%] {\r\n    margin-bottom: 20px;\r\n}\r\n\r\nsection.partner-store[_ngcontent-%COMP%] {\r\n    background: #ff960a;\r\n}\r\n\r\n.partner-store[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    font-size: 25px;\r\n    color: #fff;\r\n    font-weight: bold;\r\n    padding: 40px 10px;\r\n    margin: 0;\r\n}\r\n\r\n.partner-store[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n    font-size: 16px;\r\n    color: #fff;\r\n    padding: 15px;\r\n}\r\n\r\n.store-details[_ngcontent-%COMP%] {\r\n    background: #fff;\r\n    padding-left: 0;\r\n    padding-right: 0;\r\n    height: 110px;\r\n}\r\n\r\n.store-name[_ngcontent-%COMP%] {\r\n    float: left;\r\n    font-size: 18px;\r\n    background: #f3053c;\r\n    padding: 15px 5px;\r\n    height: 90px;\r\n    width: 148px;\r\n    line-height: 60px;\r\n    margin: 10px;\r\n    color: #fff;\r\n    text-align: center;\r\n    font-weight: bold;\r\n}\r\n\r\n.store-details[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\r\n    float: left;\r\n    margin: 0 5px;\r\n}\r\n\r\n.store-details[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    max-width: 110px;\r\n}\r\n\r\n.store-items[_ngcontent-%COMP%] {\r\n    float: left;\r\n    margin: 10px 0;\r\n}\r\n\r\nspan.dis-coupon[_ngcontent-%COMP%] {\r\n    display: block;\r\n    font-size: 13px;\r\n    padding: 10px 0;\r\n}\r\n.dis-coupon[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n    text-decoration: underline;\r\n}\r\n\r\n.carousel-caption[_ngcontent-%COMP%] {\r\n    left: 28%;\r\n}\r\n\r\n.carousel-caption[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: -100%;\r\n    right: -20%;\r\n    font-size: 25px;\r\n    line-height: 28px;\r\n    background: rgba(0,0,0,.2);\r\n    padding: 20px 30px;\r\n    border-radius: 4px;\r\n    font-family: serif;\r\n}\r\n\r\nbutton.btn.btn-primary.custom-btn.shop-btn[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    width: 350px;\r\n    font-size: 18px;\r\n}\r\n\r\n\r\nsection.offer-day[_ngcontent-%COMP%] {\r\n    background: #607d8b1a;\r\n    padding-bottom: 40px;\r\n    padding-top: 40px;\r\n}\r\n\r\nspan.img[_ngcontent-%COMP%] {\r\n    padding: 5px;\r\n    display: block;\r\n}\r\n\r\n.img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    border-radius: 5px;\r\n}\r\n\r\n.offer-day[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    margin-bottom: 35px;\r\n}\r\n\r\n.offer-day[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    max-width: 60px;\r\n    margin-right: 10px;\r\n}\r\n\r\nspan.free-delivery[_ngcontent-%COMP%] {\r\n    font-size: 14px;\r\n    position: absolute;\r\n    left: 70px;\r\n    top: 55px;\r\n}\r\n\r\nbutton.btn.shop-today-btn[_ngcontent-%COMP%] {\r\n    float: right;\r\n    background: #ff9600;\r\n    padding: 10px 50px;\r\n    font-size: 20px;\r\n    font-weight: 600;\r\n    color: #fff;\r\n}\r\n\r\n.carousel-caption[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n    font-size: 55px;\r\n    font-weight: 900;\r\n    font-family: serif;\r\n    text-align: left;\r\n}\r\n\r\n.carousel-caption[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    padding-left: 150px;\r\n}\r\n\r\n.offer-day[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n\r\n.product-items[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n\r\n.mobile-msg.alert-info[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n    padding: 10px;\r\n    margin: 4px 0;\r\n    border-radius: 3px;\r\n}\r\n\r\n.contact-section[_ngcontent-%COMP%] {\r\n    background: #f2f2f2;\r\n    padding: 55px 0 0 0;   \r\n}\r\n\r\n.contact-section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\r\n    max-width: 1400px;\r\n}\r\n\r\n\r\n.contact-section[_ngcontent-%COMP%]   .col-md-4[_ngcontent-%COMP%] {\r\n    padding-left: 40px;\r\n    padding-right: 40px;\r\n}\r\n\r\n\r\n.contact-left[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .contact-middle[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .contact-right[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\r\n    margin-bottom: 18px;\r\n    font-weight: 600;\r\n}\r\n\r\n.contact-title[_ngcontent-%COMP%] {\r\n    margin-bottom: 30px;\r\n    text-align: center;\r\n}\r\n\r\n\r\n.contact-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    line-height: 1.8;\r\n    margin-bottom: 12px;\r\n    color: #555;\r\n}\r\n\r\n\r\n.contact-left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    margin-bottom: 14px;\r\n}\r\n\r\n\r\n.contact-footer[_ngcontent-%COMP%] {\r\n    background: #ea7c2d;\r\n    color: #fff;\r\n    text-align: center;\r\n    padding: 18px 0;   \r\n    margin-top: 50px;  \r\n    font-size: 14px;\r\n}\r\n\r\n\r\n.contact-section[_ngcontent-%COMP%] {\r\n  background: #f4f7fb;\r\n  padding: 50px 20px 30px;\r\n}\r\n\r\n\r\n.contact-section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\r\n  max-width: 1350px;\r\n}\r\n\r\n\r\n.contact-section[_ngcontent-%COMP%]   .col-md-4[_ngcontent-%COMP%] {\r\n  background: #fff;\r\n  border-radius: 10px;\r\n  padding: 28px 28px;\r\n  box-shadow: 0 4px 10px rgba(0,0,0,0.06);\r\n}\r\n\r\n\r\n.contact-section[_ngcontent-%COMP%]   .col-md-4[_ngcontent-%COMP%]:hover {\r\n  transform: none;\r\n  box-shadow: 0 4px 10px rgba(0,0,0,0.06);\r\n}\r\n\r\n\r\n.contact-section[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\r\n  row-gap: 25px;\r\n}\r\n\r\n\r\n.contact-section[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\r\n  font-size: 16px;\r\n  font-weight: 700;\r\n  color: #FF7900;\r\n  margin-bottom: 18px;\r\n  border-left: 4px solid #FF7900;\r\n  padding-left: 10px;\r\n}\r\n\r\n\r\n.contact-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  font-size: 14px;\r\n  color: #333;\r\n  line-height: 1.8;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n\r\n.contact-section[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  color: #2f6fed;\r\n  font-weight: 600;\r\n  text-decoration: none;\r\n}\r\n\r\n.contact-section[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  text-decoration: underline;\r\n}\r\n\r\n\r\n.contact-section[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\r\n  display: block;\r\n  margin-top: 8px;\r\n  color: #FF7900;\r\n  font-weight: 600;\r\n}\r\n\r\n\r\n.contact-section[_ngcontent-%COMP%] {\r\n  background: #f4f7fb;\r\n  padding: 50px 40px;\r\n}\r\n\r\n\r\n.contact-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  gap: 25px;              \r\n  max-width: 1300px;\r\n  margin: 0 auto;\r\n}\r\n\r\n\r\n.contact-card[_ngcontent-%COMP%] {\r\n  flex: 1;\r\n  background: #fff;\r\n  border-radius: 10px;\r\n  padding: 28px;\r\n  box-shadow: 0 4px 10px rgba(0,0,0,0.06);\r\n}\r\n\r\n\r\n.contact-card[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\r\n  font-size: 16px;\r\n  font-weight: 700;\r\n  color: #FF7900;\r\n  margin-bottom: 15px;\r\n  border-left: 4px solid #FF7900;\r\n  padding-left: 10px;\r\n}\r\n\r\n\r\n.contact-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  font-size: 14px;\r\n  color: #333;\r\n  line-height: 1.8;\r\n}\r\n\r\n\r\n.contact-card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  color: #2f6fed;\r\n  font-weight: 600;\r\n  text-decoration: none;\r\n}\r\n\r\n.contact-card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  text-decoration: underline;\r\n}\r\n\r\n\r\n.contact-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\r\n  display: block;\r\n  margin-top: 8px;\r\n  color: #FF7900;\r\n  font-weight: 600;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  .contact-container[_ngcontent-%COMP%] {\r\n    flex-direction: column;\r\n  }\r\n}\r\n\r\n\r\n.domain-carousel-wrapper[_ngcontent-%COMP%] {\r\n  overflow: hidden;\r\n  width: 100%;\r\n}\r\n\r\n\r\n.domain-carousel-track[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  transition: transform 0.6s ease-in-out;\r\n}\r\n\r\n\r\n.domain-carousel-item[_ngcontent-%COMP%] {\r\n  min-width: 25%; \r\n  padding: 10px;\r\n  box-sizing: border-box;\r\n}\r\n\r\n\r\n.domain-carousel-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 180px;\r\n  object-fit: cover;\r\n  border-radius: 8px;\r\n}\r\n\r\n\r\n.domain-carousel-wrapper[_ngcontent-%COMP%]:hover   .domain-carousel-track[_ngcontent-%COMP%] {\r\n  transition: transform 0.4s ease-in-out;\r\n}\r\n\r\n@media (max-width: 992px) {\r\n  .domain-carousel-item[_ngcontent-%COMP%] {\r\n    min-width: 50%;\r\n  }\r\n}\r\n\r\n@media (max-width: 576px) {\r\n  .domain-carousel-item[_ngcontent-%COMP%] {\r\n    min-width: 100%;\r\n  }\r\n}\r\n\r\n.btncolor[_ngcontent-%COMP%] {\r\n  background-color: #ff7a00;   \r\n  color: #fff;                 \r\n  padding: 10px 20px;          \r\n  margin: 5px;                 \r\n  border: none;\r\n  border-radius: 6px;\r\n  font-weight: 500;\r\n  transition: all 0.3s ease;\r\n}\r\n\r\n\r\n.btncolor[_ngcontent-%COMP%]:hover {\r\n  background-color: #e66a00;\r\n  color: #fff;\r\n}\r\n\r\n.custom-caption[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n\r\n  width: 90%;\r\n  text-align: center;\r\n  z-index: 2;\r\n}\r\n\r\n.custom-caption[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  margin: 0;\r\n  padding: 12px 20px;\r\n\r\n  background: rgba(0, 0, 0, 0.45);\r\n  border-radius: 8px;\r\n\r\n  color: #fff;\r\n  font-size: 20px;\r\n  font-weight: 600;\r\n  line-height: 1.4;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n\r\n  .custom-caption[_ngcontent-%COMP%] {\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    width: 90%;\r\n  }\r\n\r\n  .custom-caption[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 14px;\r\n    padding: 8px 12px;\r\n    line-height: 1.3;\r\n  }\r\n}\r\n\r\n@media (max-width: 768px) {\r\n\r\n  carousel[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    height: 180px;        \r\n    object-fit: cover;\r\n  }\r\n\r\n}\r\n\r\n@media (max-width: 768px) {\r\n\r\n  .digital-transformation[_ngcontent-%COMP%] {\r\n    padding: 20px 12px;   \r\n  }\r\n\r\n  .digital-transformation[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    font-size: 16px;\r\n    text-align: center;\r\n    margin-bottom: 10px;\r\n  }\r\n\r\n  .dtps-provider[_ngcontent-%COMP%] {\r\n    padding: 12px;\r\n  }\r\n\r\n  .dtps-provider[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\r\n    font-size: 13px;\r\n    text-align: center;\r\n  }\r\n\r\n  .dtps-provider[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n    line-height: 1.4;\r\n    text-align: center;\r\n  }\r\n\r\n  .dtps-provider[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    max-width: 45px;   \r\n    margin: 8px auto;\r\n  }\r\n\r\n  .learn-more-btn[_ngcontent-%COMP%] {\r\n    padding: 8px;\r\n    font-size: 13px;\r\n    margin-top: 10px;\r\n  }\r\n\r\n}\r\n\r\n.platform-showcase[_ngcontent-%COMP%] {\r\n  background: #f8f9fb;\r\n  padding: 30px;\r\n}\r\n\r\n.section-header[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  font-size: 38px;\r\n  font-weight: 700;\r\n  color: #0d2f6f;\r\n  margin-bottom: 8px;\r\n}\r\n\r\n.section-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  color: #666;\r\n  font-size: 16px;\r\n}\r\n\r\n.custom-slider[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n\r\n  gap: 20px;\r\n\r\n  max-width: 1600px;\r\n  margin: auto;\r\n\r\n  overflow: hidden;\r\n  padding: 30px 0;\r\n}\r\n\r\n\r\n.center-card[_ngcontent-%COMP%] {\r\n  flex: 0 0 65%;\r\n\r\n  transform: scale(1);\r\n  z-index: 5;\r\n\r\n  transition: all .5s ease;\r\n}\r\n\r\n.center-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  border-radius: 20px;\r\n\r\n  box-shadow:\r\n    0 20px 60px rgba(0,0,0,.18);\r\n}\r\n\r\n\r\n.side-card[_ngcontent-%COMP%] {\r\n  flex: 0 0 22%;\r\n\r\n  opacity: .45;\r\n  filter: blur(2px);\r\n\r\n  transition: all .5s ease;\r\n}\r\n\r\n.side-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  border-radius: 16px;\r\n}\r\n\r\n.left[_ngcontent-%COMP%] {\r\n  transform: translateX(40px) scale(.85);\r\n}\r\n\r\n.right[_ngcontent-%COMP%] {\r\n  transform: translateX(-40px) scale(.85);\r\n}\r\n\r\nslide[_ngcontent-%COMP%] {\r\n  position: relative;\r\n}\r\n\r\n.hero-overlay-content[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n\r\n  right: 4%;\r\n  bottom: 30%;\r\n\r\n  width: 850px;\r\n  max-width: 30%;\r\n\r\n  padding: 12px 20px;\r\n\r\n  backdrop-filter: blur(6px);\r\n  -webkit-backdrop-filter: blur(6px);\r\n\r\n  border: 1px solid rgba(255,255,255,.06);\r\n\r\n  border-radius: 14px;\r\n\r\n  z-index: 10;\r\n}\r\n\r\n.hero-overlay-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  font-size: 16px;\r\n  line-height: 1.3;\r\n  font-weight: 700;\r\n\r\n  margin: 0 0 6px 0;\r\n\r\n  color: #fff;\r\n}\r\n\r\n.hero-overlay-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  color: #ff9d6b;\r\n}\r\n\r\n.hero-overlay-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  font-size: 11px;\r\n  line-height: 1.4;\r\n\r\n  margin: 0;\r\n\r\n  color: rgba(255,255,255,.85);\r\n}\r\n\r\n\r\n.carousel-item[_ngcontent-%COMP%]::before {\r\n  content: '';\r\n\r\n  position: absolute;\r\n  inset: 0;\r\n\r\n  z-index: 1;\r\n}\r\n\r\n.carousel-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  z-index: 0;\r\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HomeComponent, [{
        type: Component,
        args: [{ selector: 'app-home', template: "<!-- ================= HERO CAROUSEL ================= -->\r\n<carousel [noPause]=\"false\">\r\n\r\n  <slide>\r\n    <img src=\"../assets/images/4.png\" class=\"w-100\" />\r\n\r\n    <div class=\"hero-overlay-content\">\r\n      <h2>\r\n        Ability to Bridge\r\n        <span>Business to Business</span>\r\n        & Direct to Consumers Commerce\r\n      </h2>\r\n    </div>\r\n  </slide>\r\n\r\n  <slide>\r\n    <img src=\"../assets/images/5.png\" class=\"w-100\" />\r\n\r\n    <div class=\"hero-overlay-content\">\r\n      <h2>\r\n        Ability to Bridge\r\n        <span>Business to Business</span>\r\n        & Direct to Consumers Commerce\r\n      </h2>\r\n    </div>\r\n  </slide>\r\n\r\n  <slide>\r\n    <img src=\"../assets/images/1.png\" class=\"w-100\" />\r\n\r\n    <div class=\"hero-overlay-content\">\r\n      <h2>\r\n        Ability to Bridge\r\n        <span>Business to Business</span>\r\n        & Direct to Consumers Commerce\r\n      </h2>\r\n    </div>\r\n  </slide>\r\n\r\n  <slide>\r\n    <img src=\"../assets/images/2.png\" class=\"w-100\" />\r\n\r\n    <div class=\"hero-overlay-content\">\r\n      <h2>\r\n        Ability to Bridge\r\n        <span>Business to Business</span>\r\n        & Direct to Consumers Commerce\r\n      </h2>\r\n    </div>\r\n  </slide>\r\n\r\n  <slide>\r\n    <img src=\"../assets/images/3.png\" class=\"w-100\" />\r\n\r\n    <div class=\"hero-overlay-content\">\r\n      <h2>\r\n        Ability to Bridge\r\n        <span>Business to Business</span>\r\n        & Direct to Consumers Commerce\r\n      </h2>\r\n    </div>\r\n  </slide>\r\n\r\n</carousel>\r\n\r\n\r\n<section class=\"platform-showcase\">\r\n\r\n  <div class=\"section-header\">\r\n    <h2>Our Next Generation Ecosystems</h2>\r\n  </div>\r\n\r\n  <div class=\"custom-slider\">\r\n\r\n    <div class=\"side-card left\">\r\n      <img [src]=\"slides[getPrevIndex()]\" />\r\n    </div>\r\n\r\n    <div class=\"center-card\">\r\n      <img [src]=\"slides[currentIndex2]\" />\r\n    </div>\r\n\r\n    <div class=\"side-card right\">\r\n      <img [src]=\"slides[getNextIndex()]\" />\r\n    </div>\r\n\r\n  </div>\r\n\r\n</section>\r\n\r\n\r\n<!-- ================= SERVICES ================= -->\r\n<div class=\"our-services padding\">\r\n\r\n  <div class=\"container pl-0 pr-0\">\r\n\r\n    <div class=\"section-title text-center\">\r\n      <h1 class=\"title\">Shoppenation Business Domains</h1>\r\n    </div>\r\n\r\n    <div class=\"domain-carousel-wrapper\">\r\n      <div class=\"domain-carousel-track\" [style.transform]=\"'translateX(-' + (currentIndex * 25) + '%)'\">\r\n\r\n        <div class=\"domain-carousel-item\" *ngFor=\"let item of domainimages\" (click)=\"openLoginModal()\">\r\n\r\n          <section class=\"gray-scale-frame\">\r\n            <div class=\"content\">\r\n              <span class=\"img\">\r\n                <img [src]=\"item.img\" />\r\n              </span>\r\n              <h3>{{ item.name }}</h3>\r\n            </div>\r\n            <div class=\"border-box\"></div>\r\n          </section>\r\n\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n\r\n\r\n<!-- ================= DIGITAL TRANSFORMATION ================= -->\r\n<div class=\"digital-transformation\">\r\n\r\n  <div class=\"container\">\r\n\r\n    <div class=\"row align-items-center\">\r\n\r\n      <div class=\"col-lg-3 col-12 text-center text-lg-start\">\r\n        <h2>Digital Transformation Platform for Businesses</h2>\r\n      </div>\r\n\r\n      <div class=\"col-lg-7 col-12 mt-3 mt-lg-0\">\r\n\r\n        <div class=\"dtps-provider\">\r\n\r\n          <div class=\"row align-items-center\">\r\n\r\n            <div class=\"col-lg-5 col-12 text-center text-lg-start\">\r\n              <h5>\r\n                Get your Brand Direct to Consumers & be ready for Future...\r\n              </h5>\r\n            </div>\r\n\r\n            <div class=\"col-lg-2 col-12 text-center\">\r\n              <img src=\"../assets/images/logo_1.jpg\" style=\"max-width:60px;\">\r\n            </div>\r\n\r\n            <div class=\"col-lg-5 col-12 text-center text-lg-start\">\r\n              <p><strong><u>Revolution for Businesses</u></strong></p>\r\n              <p>\r\n                Selling online with your own website powered with an e-commerce engine integrated with your brand and\r\n                marketplace has never been easier.\r\n              </p>\r\n            </div>\r\n\r\n          </div>\r\n\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <div class=\"col-lg-2 col-12 text-center mt-3 mt-lg-0\">\r\n        <button (click)=\"openLearnMore()\" class=\"btn btn-primary learn-more-btn w-100\">\r\n          Learn More\r\n        </button>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n\r\n\r\n<!-- ================= CONTACT SECTION ================= -->\r\n<div class=\"contact-section\">\r\n\r\n  <div class=\"contact-container\">\r\n\r\n    <!-- ABOUT -->\r\n    <div class=\"contact-card about-section\">\r\n      <h5>Know more About us</h5>\r\n\r\n      <button (click)=\"openAboutUs()\" class=\"btn btncolor\">\r\n        About Us\r\n      </button>\r\n\r\n      <div class=\"about-content mt-2\">\r\n\r\n        <p>\r\n          Know More for our All-Day Shop Platform<br>\r\n          <a href=\"http://www.all-day.in/#/home\" target=\"_blank\">\r\n            http://www.all-day.in/#/home\r\n          </a>\r\n        </p>\r\n\r\n        <p>\r\n          Know more for our IPTV & Ad Monetization Platform<br>\r\n          <a href=\"http://www.ad-connect.in/\" target=\"_blank\">\r\n            http://www.ad-connect.in/\r\n          </a>\r\n        </p>\r\n\r\n      </div>\r\n    </div>\r\n\r\n    <!-- REGISTERED -->\r\n    <div class=\"contact-card\">\r\n      <h5>Registered Address</h5>\r\n      <p>\r\n        Plot No, 11-A Central Market<br>\r\n        2nd Floor, Lajpat Nagar II<br>\r\n        New Delhi 110024 - INDIA<br>\r\n        +91 8700693372<br>\r\n        <strong>Support@all-day.in</strong>\r\n      </p>\r\n    </div>\r\n\r\n    <!-- OFFICE -->\r\n    <div class=\"contact-card\">\r\n      <h5>Development Centre & Sales office</h5>\r\n      <p>\r\n        Plot No. 530<br>\r\n        Udyog Vihar Phase-5<br>\r\n        Gurugram (NCR) 122016 - INDIA<br>\r\n        +91 9810061994<br>\r\n        <strong>Rajesh.h@all-day.in</strong>\r\n      </p>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>", styles: [".our-services {\r\n    padding: 50px 20px;\r\n}\r\n\r\n.our-services section {\r\n    text-align: center;\r\n    height: 250px;\r\n    border-radius: 5px;\r\n    background: #fff;\r\n    box-shadow: 0 0 5px #eee;\r\n    position: relative;\r\n}\r\n\r\n.our-services h3 {\r\n    font-size: 16px;\r\n    font-weight: 600;\r\n    margin-top: 5px;\r\n}\r\n\r\n.our-services span {\r\n    font-size: 16px;\r\n}\r\n\r\n.digital-transformation {\r\n    padding: 40px;\r\n    background: #dd7022;\r\n}\r\n\r\n.digital-transformation h2 {\r\n    padding-top: 25px;\r\n    color: #fff;\r\n    font-size: 22px;\r\n}\r\n\r\n.dtps-provider {\r\n    text-align: center;\r\n    background: #fff;\r\n    padding: 10px;\r\n    border-radius: 5px;\r\n}\r\n\r\n.dtps-provider h5 {\r\n    font-size: 16px;\r\n    font-weight: 700;\r\n    padding: 32px 0;\r\n    margin: 0;\r\n    text-align: left;\r\n}\r\n\r\n.dtps-provider p {\r\n    font-size: 13px;\r\n    margin: 0;\r\n}\r\n\r\n.dtps-provider span {\r\n    line-height: 16px;\r\n    display: inline-block;\r\n    font-weight: 600;\r\n    margin-top: 5px;\r\n    color: #fff;\r\n}\r\n\r\n.learnmore {\r\n    text-align: right;\r\n    padding-top: 30px;\r\n}\r\n\r\n.learn-more-btn {\r\n    padding: 12px 35px;\r\n    font-size: 15px;\r\n    font-weight: 600;\r\n    background: #f57921;\r\n    border-color: #f57921;\r\n}\r\n\r\n\r\n\r\nsection.star-performers {\r\n    padding: 30px 15px;\r\n}\r\n\r\n.padding {\r\n    padding: 30px 15px;\r\n}\r\n\r\n.section-title {\r\n    margin-bottom: 25px;\r\n    padding-bottom: 15px;\r\n    border-bottom: 1px solid #ddd;\r\n}\r\n\r\nh1.title {\r\n    font-size: 25px;\r\n    margin-bottom: 0px;\r\n    position: relative;\r\n    display: inline-block;\r\n}\r\n\r\nh1.title:after {\r\n    position: absolute;\r\n    content: \"\";\r\n    background: #f57921;\r\n    width: 100%;\r\n    height: 2px;\r\n    left: 0;\r\n    bottom: -16px;\r\n    z-index: 999;\r\n}\r\n\r\n.product-items .col-sm-3 {\r\n    margin-bottom: 20px;\r\n}\r\n\r\nsection.partner-store {\r\n    background: #ff960a;\r\n}\r\n\r\n.partner-store h2 {\r\n    font-size: 25px;\r\n    color: #fff;\r\n    font-weight: bold;\r\n    padding: 40px 10px;\r\n    margin: 0;\r\n}\r\n\r\n.partner-store h3 {\r\n    font-size: 16px;\r\n    color: #fff;\r\n    padding: 15px;\r\n}\r\n\r\n.store-details {\r\n    background: #fff;\r\n    padding-left: 0;\r\n    padding-right: 0;\r\n    height: 110px;\r\n}\r\n\r\n.store-name {\r\n    float: left;\r\n    font-size: 18px;\r\n    background: #f3053c;\r\n    padding: 15px 5px;\r\n    height: 90px;\r\n    width: 148px;\r\n    line-height: 60px;\r\n    margin: 10px;\r\n    color: #fff;\r\n    text-align: center;\r\n    font-weight: bold;\r\n}\r\n\r\n.store-details .img {\r\n    float: left;\r\n    margin: 0 5px;\r\n}\r\n\r\n.store-details img {\r\n    max-width: 110px;\r\n}\r\n\r\n.store-items {\r\n    float: left;\r\n    margin: 10px 0;\r\n}\r\n\r\nspan.dis-coupon {\r\n    display: block;\r\n    font-size: 13px;\r\n    padding: 10px 0;\r\n}\r\n.dis-coupon label {\r\n    text-decoration: underline;\r\n}\r\n\r\n.carousel-caption {\r\n    left: 28%;\r\n}\r\n\r\n.carousel-caption p {\r\n    position: absolute;\r\n    top: -100%;\r\n    right: -20%;\r\n    font-size: 25px;\r\n    line-height: 28px;\r\n    background: rgba(0,0,0,.2);\r\n    padding: 20px 30px;\r\n    border-radius: 4px;\r\n    font-family: serif;\r\n}\r\n\r\nbutton.btn.btn-primary.custom-btn.shop-btn {\r\n    display: inline-block;\r\n    width: 350px;\r\n    font-size: 18px;\r\n}\r\n/* \r\n.border-box {\r\n    position: absolute;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    border: 3px solid transparent;\r\n    transition: .5s ease;\r\n    height: 100%;\r\n}\r\n\r\n.our-services section:hover .border-box {\r\n    border: 3px solid #ddd;\r\n    transform: translate(-15px, -15px);\r\n    border-radius: 4px;\r\n}\r\n\r\n.gray-scale-frame:hover {\r\n    filter: grayscale(0%);\r\n}\r\n.gray-scale-frame {\r\n    filter: grayscale(100%);\r\n} */\r\n\r\nsection.offer-day {\r\n    background: #607d8b1a;\r\n    padding-bottom: 40px;\r\n    padding-top: 40px;\r\n}\r\n\r\nspan.img {\r\n    padding: 5px;\r\n    display: block;\r\n}\r\n\r\n.img img {\r\n    width: 100%;\r\n    border-radius: 5px;\r\n}\r\n\r\n.offer-day h1 {\r\n    position: relative;\r\n    margin-bottom: 35px;\r\n}\r\n\r\n.offer-day h1 img {\r\n    max-width: 60px;\r\n    margin-right: 10px;\r\n}\r\n\r\nspan.free-delivery {\r\n    font-size: 14px;\r\n    position: absolute;\r\n    left: 70px;\r\n    top: 55px;\r\n}\r\n\r\nbutton.btn.shop-today-btn {\r\n    float: right;\r\n    background: #ff9600;\r\n    padding: 10px 50px;\r\n    font-size: 20px;\r\n    font-weight: 600;\r\n    color: #fff;\r\n}\r\n\r\n.carousel-caption h3 {\r\n    font-size: 55px;\r\n    font-weight: 900;\r\n    font-family: serif;\r\n    text-align: left;\r\n}\r\n\r\n.carousel-caption span {\r\n    padding-left: 150px;\r\n}\r\n\r\n.offer-day img {\r\n    width: 100%;\r\n}\r\n\r\n.product-items img {\r\n    width: 100%;\r\n}\r\n\r\n.mobile-msg.alert-info {\r\n    font-size: 12px;\r\n    padding: 10px;\r\n    margin: 4px 0;\r\n    border-radius: 3px;\r\n}\r\n\r\n.contact-section {\r\n    background: #f2f2f2;\r\n    padding: 55px 0 0 0;   /* Increased top spacing */\r\n}\r\n\r\n.contact-section .container {\r\n    max-width: 1400px;\r\n}\r\n\r\n/* Better column spacing */\r\n.contact-section .col-md-4 {\r\n    padding-left: 40px;\r\n    padding-right: 40px;\r\n}\r\n\r\n/* Headings */\r\n.contact-left h4,\r\n.contact-middle h5,\r\n.contact-right h5 {\r\n    margin-bottom: 18px;\r\n    font-weight: 600;\r\n}\r\n\r\n.contact-title {\r\n    margin-bottom: 30px;\r\n    text-align: center;\r\n}\r\n\r\n/* Paragraph spacing */\r\n.contact-section p {\r\n    line-height: 1.8;\r\n    margin-bottom: 12px;\r\n    color: #555;\r\n}\r\n\r\n/* Links spacing */\r\n.contact-left p {\r\n    margin-bottom: 14px;\r\n}\r\n\r\n/* Footer */\r\n.contact-footer {\r\n    background: #ea7c2d;\r\n    color: #fff;\r\n    text-align: center;\r\n    padding: 18px 0;   /* Increased height */\r\n    margin-top: 50px;  /* More breathing space */\r\n    font-size: 14px;\r\n}\r\n\r\n/* \uD83D\uDD25 CONTACT SECTION CLEAN */\r\n.contact-section {\r\n  background: #f4f7fb;\r\n  padding: 50px 20px 30px;\r\n}\r\n\r\n/* CONTAINER WIDTH CONTROL */\r\n.contact-section .container {\r\n  max-width: 1350px;\r\n}\r\n\r\n/* CARD STYLE */\r\n.contact-section .col-md-4 {\r\n  background: #fff;\r\n  border-radius: 10px;\r\n  padding: 28px 28px;\r\n  box-shadow: 0 4px 10px rgba(0,0,0,0.06);\r\n}\r\n\r\n/* \uD83D\uDD25 REMOVE HOVER EFFECT COMPLETELY */\r\n.contact-section .col-md-4:hover {\r\n  transform: none;\r\n  box-shadow: 0 4px 10px rgba(0,0,0,0.06);\r\n}\r\n\r\n/* SPACING BETWEEN CARDS */\r\n.contact-section .row {\r\n  row-gap: 25px;\r\n}\r\n\r\n/* HEADINGS */\r\n.contact-section h5 {\r\n  font-size: 16px;\r\n  font-weight: 700;\r\n  color: #FF7900;\r\n  margin-bottom: 18px;\r\n  border-left: 4px solid #FF7900;\r\n  padding-left: 10px;\r\n}\r\n\r\n/* TEXT */\r\n.contact-section p {\r\n  font-size: 14px;\r\n  color: #333;\r\n  line-height: 1.8;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n/* LINKS */\r\n.contact-section a {\r\n  color: #2f6fed;\r\n  font-weight: 600;\r\n  text-decoration: none;\r\n}\r\n\r\n.contact-section a:hover {\r\n  text-decoration: underline;\r\n}\r\n\r\n/* EMAIL HIGHLIGHT */\r\n.contact-section strong {\r\n  display: block;\r\n  margin-top: 8px;\r\n  color: #FF7900;\r\n  font-weight: 600;\r\n}\r\n\r\n/* SECTION */\r\n.contact-section {\r\n  background: #f4f7fb;\r\n  padding: 50px 40px;\r\n}\r\n\r\n/* FLEX CONTAINER */\r\n.contact-container {\r\n  display: flex;\r\n  gap: 25px;              /* \uD83D\uDD25 PERFECT GAP CONTROL */\r\n  max-width: 1300px;\r\n  margin: 0 auto;\r\n}\r\n\r\n/* CARDS */\r\n.contact-card {\r\n  flex: 1;\r\n  background: #fff;\r\n  border-radius: 10px;\r\n  padding: 28px;\r\n  box-shadow: 0 4px 10px rgba(0,0,0,0.06);\r\n}\r\n\r\n/* HEADING */\r\n.contact-card h5 {\r\n  font-size: 16px;\r\n  font-weight: 700;\r\n  color: #FF7900;\r\n  margin-bottom: 15px;\r\n  border-left: 4px solid #FF7900;\r\n  padding-left: 10px;\r\n}\r\n\r\n/* TEXT */\r\n.contact-card p {\r\n  font-size: 14px;\r\n  color: #333;\r\n  line-height: 1.8;\r\n}\r\n\r\n/* LINKS */\r\n.contact-card a {\r\n  color: #2f6fed;\r\n  font-weight: 600;\r\n  text-decoration: none;\r\n}\r\n\r\n.contact-card a:hover {\r\n  text-decoration: underline;\r\n}\r\n\r\n/* EMAIL */\r\n.contact-card strong {\r\n  display: block;\r\n  margin-top: 8px;\r\n  color: #FF7900;\r\n  font-weight: 600;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  .contact-container {\r\n    flex-direction: column;\r\n  }\r\n}\r\n\r\n/* WRAPPER */\r\n.domain-carousel-wrapper {\r\n  overflow: hidden;\r\n  width: 100%;\r\n}\r\n\r\n/* TRACK */\r\n.domain-carousel-track {\r\n  display: flex;\r\n  transition: transform 0.6s ease-in-out;\r\n}\r\n\r\n/* ITEM */\r\n.domain-carousel-item {\r\n  min-width: 25%; /* \uD83D\uDD25 4 items visible */\r\n  padding: 10px;\r\n  box-sizing: border-box;\r\n}\r\n\r\n/* IMAGE */\r\n.domain-carousel-item img {\r\n  width: 100%;\r\n  height: 180px;\r\n  object-fit: cover;\r\n  border-radius: 8px;\r\n}\r\n\r\n/* OPTIONAL SMOOTH */\r\n.domain-carousel-wrapper:hover .domain-carousel-track {\r\n  transition: transform 0.4s ease-in-out;\r\n}\r\n\r\n@media (max-width: 992px) {\r\n  .domain-carousel-item {\r\n    min-width: 50%;\r\n  }\r\n}\r\n\r\n@media (max-width: 576px) {\r\n  .domain-carousel-item {\r\n    min-width: 100%;\r\n  }\r\n}\r\n\r\n.btncolor {\r\n  background-color: #ff7a00;   /* orange */\r\n  color: #fff;                 /* white text */\r\n  padding: 10px 20px;          /* spacing inside */\r\n  margin: 5px;                 /* spacing outside */\r\n  border: none;\r\n  border-radius: 6px;\r\n  font-weight: 500;\r\n  transition: all 0.3s ease;\r\n}\r\n\r\n/* Hover effect */\r\n.btncolor:hover {\r\n  background-color: #e66a00;\r\n  color: #fff;\r\n}\r\n\r\n.custom-caption {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n\r\n  width: 90%;\r\n  text-align: center;\r\n  z-index: 2;\r\n}\r\n\r\n.custom-caption p {\r\n  display: inline-block;\r\n  margin: 0;\r\n  padding: 12px 20px;\r\n\r\n  background: rgba(0, 0, 0, 0.45);\r\n  border-radius: 8px;\r\n\r\n  color: #fff;\r\n  font-size: 20px;\r\n  font-weight: 600;\r\n  line-height: 1.4;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n\r\n  .custom-caption {\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    width: 90%;\r\n  }\r\n\r\n  .custom-caption p {\r\n    font-size: 14px;\r\n    padding: 8px 12px;\r\n    line-height: 1.3;\r\n  }\r\n}\r\n\r\n@media (max-width: 768px) {\r\n\r\n  carousel img {\r\n    height: 180px;        /* \uD83D\uDD25 compact */\r\n    object-fit: cover;\r\n  }\r\n\r\n}\r\n\r\n@media (max-width: 768px) {\r\n\r\n  .digital-transformation {\r\n    padding: 20px 12px;   /* \uD83D\uDD25 reduced */\r\n  }\r\n\r\n  .digital-transformation h2 {\r\n    font-size: 16px;\r\n    text-align: center;\r\n    margin-bottom: 10px;\r\n  }\r\n\r\n  .dtps-provider {\r\n    padding: 12px;\r\n  }\r\n\r\n  .dtps-provider h5 {\r\n    font-size: 13px;\r\n    text-align: center;\r\n  }\r\n\r\n  .dtps-provider p {\r\n    font-size: 12px;\r\n    line-height: 1.4;\r\n    text-align: center;\r\n  }\r\n\r\n  .dtps-provider img {\r\n    max-width: 45px;   /* \uD83D\uDD25 smaller logo */\r\n    margin: 8px auto;\r\n  }\r\n\r\n  .learn-more-btn {\r\n    padding: 8px;\r\n    font-size: 13px;\r\n    margin-top: 10px;\r\n  }\r\n\r\n}\r\n\r\n.platform-showcase {\r\n  background: #f8f9fb;\r\n  padding: 30px;\r\n}\r\n\r\n.section-header {\r\n  text-align: center;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.section-header h2 {\r\n  font-size: 38px;\r\n  font-weight: 700;\r\n  color: #0d2f6f;\r\n  margin-bottom: 8px;\r\n}\r\n\r\n.section-header p {\r\n  color: #666;\r\n  font-size: 16px;\r\n}\r\n\r\n.custom-slider {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n\r\n  gap: 20px;\r\n\r\n  max-width: 1600px;\r\n  margin: auto;\r\n\r\n  overflow: hidden;\r\n  padding: 30px 0;\r\n}\r\n\r\n/* CENTER */\r\n.center-card {\r\n  flex: 0 0 65%;\r\n\r\n  transform: scale(1);\r\n  z-index: 5;\r\n\r\n  transition: all .5s ease;\r\n}\r\n\r\n.center-card img {\r\n  width: 100%;\r\n  border-radius: 20px;\r\n\r\n  box-shadow:\r\n    0 20px 60px rgba(0,0,0,.18);\r\n}\r\n\r\n/* SIDES */\r\n.side-card {\r\n  flex: 0 0 22%;\r\n\r\n  opacity: .45;\r\n  filter: blur(2px);\r\n\r\n  transition: all .5s ease;\r\n}\r\n\r\n.side-card img {\r\n  width: 100%;\r\n  border-radius: 16px;\r\n}\r\n\r\n.left {\r\n  transform: translateX(40px) scale(.85);\r\n}\r\n\r\n.right {\r\n  transform: translateX(-40px) scale(.85);\r\n}\r\n\r\nslide {\r\n  position: relative;\r\n}\r\n\r\n.hero-overlay-content {\r\n  position: absolute;\r\n\r\n  right: 4%;\r\n  bottom: 30%;\r\n\r\n  width: 850px;\r\n  max-width: 30%;\r\n\r\n  padding: 12px 20px;\r\n\r\n  backdrop-filter: blur(6px);\r\n  -webkit-backdrop-filter: blur(6px);\r\n\r\n  border: 1px solid rgba(255,255,255,.06);\r\n\r\n  border-radius: 14px;\r\n\r\n  z-index: 10;\r\n}\r\n\r\n.hero-overlay-content h2 {\r\n  font-size: 16px;\r\n  line-height: 1.3;\r\n  font-weight: 700;\r\n\r\n  margin: 0 0 6px 0;\r\n\r\n  color: #fff;\r\n}\r\n\r\n.hero-overlay-content h2 span {\r\n  color: #ff9d6b;\r\n}\r\n\r\n.hero-overlay-content p {\r\n  font-size: 11px;\r\n  line-height: 1.4;\r\n\r\n  margin: 0;\r\n\r\n  color: rgba(255,255,255,.85);\r\n}\r\n\r\n\r\n.carousel-item::before {\r\n  content: '';\r\n\r\n  position: absolute;\r\n  inset: 0;\r\n\r\n  z-index: 1;\r\n}\r\n\r\n.carousel-item img {\r\n  position: relative;\r\n  z-index: 0;\r\n}"] }]
    }], function () { return [{ type: i1.BsModalService }, { type: i2.RegisterService }, { type: i3.ToastrService }, { type: i4.Router }, { type: i5.FormBuilder }]; }, { modalTemplate: [{
            type: ViewChild,
            args: ['template']
        }] }); })();
//# sourceMappingURL=home.component.js.map