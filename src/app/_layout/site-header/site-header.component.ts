import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { LoginComponent } from 'src/app/login';
import { MdrConnectComponent } from 'src/app/mdr-connect/mdr-connect.component';
import { DataAndPrivacyComponent } from 'src/app/About/data-and-privacy/data-and-privacy.component';
import { RefundComponent } from 'src/app/About/refund/refund.component';
import { PricingAndTMComponent } from 'src/app/About/pricing-and-tm/pricing-and-tm.component';
import { AllDayVendingComponent } from 'src/app/About/all-day-vending/all-day-vending.component';
import { AllDayDistributionComponent } from 'src/app/About/all-day-distribution/all-day-distribution.component';
import { MedexHcpComponent } from 'src/app/About/medex-hcp/medex-hcp.component';
import { ConnectComponent } from 'src/app/About/connect/connect.component';
import { MdrConnectComponent2 } from 'src/app/About/mdr-connect/mdr-connect.component';
import { TermsComponent } from 'src/app/About/terms/terms.component';
import { HelpDeskComponent } from 'src/app/help-desk/help-desk.component';
import { HcpLoginComponent } from 'src/app/hcp-login/hcp-login.component';
import { DeliveryLoginComponent } from 'src/app/delivery-login/delivery-login.component';

@Component({
  selector: 'site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.css']
})
export class SiteHeaderComponent implements OnInit {
  modalRef: BsModalRef | undefined;
  constructor(
    private modalService: BsModalService,
    private bsModalRef: BsModalRef,
  ) { }

  isProductOpen = false;
  
  ngOnInit() {
  }

  openHelpdeskLoginModal() {
    this.modalRef = this.modalService.show(HelpDeskComponent, Object.assign({}, { class: 'login-modal' }));
  }

  openHcpLoginModal() {
    this.modalRef = this.modalService.show(HcpLoginComponent, Object.assign({}, { class: 'login-modal' }));
  }

  openDeliveryLoginModal() {
    this.modalRef = this.modalService.show(DeliveryLoginComponent, Object.assign({}, { class: 'login-modal' }));
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

  openMedexHCP() {
    this.modalRef = this.modalService.show(MedexHcpComponent, Object.assign({}, { class: 'modal-xl' }));
  }

  openConnect() {
    this.modalRef = this.modalService.show(ConnectComponent, Object.assign({}, { class: 'modal-xl' }));
  }

  openMdrConnect() {
    this.modalRef = this.modalService.show(MdrConnectComponent2, Object.assign({}, { class: 'modal-xl' }));
  }

  openTerms(){
    this.modalRef = this.modalService.show(TermsComponent, Object.assign({}, { class: 'modal-xl' }));
  }

}