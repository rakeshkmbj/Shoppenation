import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { LoginComponent } from 'src/app/login';
import { MdrConnectComponent } from 'src/app/mdr-connect/mdr-connect.component';
import { DataAndPrivacyComponent } from 'src/app/About/data-and-privacy/data-and-privacy.component';
import { RefundComponent } from 'src/app/About/refund/refund.component';
import { PricingAndTMComponent } from 'src/app/About/pricing-and-tm/pricing-and-tm.component';
import { AllDayVendingComponent } from 'src/app/About/all-day-vending/all-day-vending.component';
import { AllDayDistributionComponent } from 'src/app/About/all-day-distribution/all-day-distribution.component';
@Component({
  selector: 'site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.css']
})
export class SiteHeaderComponent implements OnInit {
  modalRef: BsModalRef;
  constructor(
    private modalService: BsModalService,
  ) { }

  ngOnInit() {
  }

  openLoginModal() {
    this.modalRef = this.modalService.show(LoginComponent, Object.assign({}, { class: 'login-modal' }));
  }

  openMdrCoonectModal() {
    this.modalRef = this.modalService.show(MdrConnectComponent, Object.assign({}, { class: 'modal-xl' }));
  }

  openAllDayVending(){
    this.modalRef = this.modalService.show(AllDayVendingComponent, Object.assign({}, { class: 'modal-xl' }));
  }

  openAllDayDistribution(){
    this.modalRef = this.modalService.show(AllDayDistributionComponent, Object.assign({}, { class: 'modal-xl' }));
  }

  openDataAndPrivacy() {
    this.modalRef = this.modalService.show(DataAndPrivacyComponent, Object.assign({}, { class: 'modal-xl' }));
  }

  openRefund() {
    this.modalRef = this.modalService.show(RefundComponent, Object.assign({}, { class: 'modal-xl' }));
  }

  openPricingAndTM() {
    this.modalRef = this.modalService.show(PricingAndTMComponent, Object.assign({}, { class: 'modal-xl' }));
  }

}