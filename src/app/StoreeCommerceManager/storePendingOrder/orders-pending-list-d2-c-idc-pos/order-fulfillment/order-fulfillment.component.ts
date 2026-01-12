import { Component, OnInit, TemplateRef } from '@angular/core';
import {Router } from '@angular/router';
import {Location} from '@angular/common';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { HomeDeliveryDetailsModalComponent } from './home-delivery-details-modal/home-delivery-details-modal.component';
import { CommonService } from 'src/app/services/common.service';
@Component({
  selector: 'order-fulfillment',
  templateUrl: './order-fulfillment.component.html',
  styleUrls: ['./order-fulfillment.component.css']
})
export class OrderFulfillmentComponent implements OnInit {
  getOrderDetailData: any;
  getOrderDetailDataList: any;
  orderNumber: string;
  bsModalRef?: BsModalRef;
  constructor(private location: Location, private commonservice:CommonService, private router: Router, private modalService: BsModalService) {
    this.getOrderDetailDataList = this.router.getCurrentNavigation().extras.state;
    console.log(this.getOrderDetailDataList);
    this.getOrderDetailData = this.getOrderDetailDataList.orderDetails;
    this.orderNumber = this.getOrderDetailDataList.orderNumber;
  }

  ngOnInit(): void {
   
  }

  back(){
    this.location.back();
  }

  hideModal() {
    this.modalService.hide();
    }

  homeDeliveryDetailModal() {
   // this.commonservice.homeDeliverydata = this.getOrderDetailData;
    this.commonservice.getHomeDelivery(this.getOrderDetailData);
    // const initialState: ModalOptions = {
    //   initialState: this.getOrderDetailData
    // };
    this.bsModalRef = this.modalService.show(HomeDeliveryDetailsModalComponent);
   // this.bsModalRef.content.closeBtnName = 'Close';
  }

  openModal(template: TemplateRef<any>) {
    this.bsModalRef = this.modalService.show(template);
  }

}
