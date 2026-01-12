import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-home-delivery-details-modal',
  templateUrl: './home-delivery-details-modal.component.html',
  styleUrls: ['./home-delivery-details-modal.component.css']
})
export class HomeDeliveryDetailsModalComponent implements OnInit {

  modalRef?: BsModalRef;
  dataList: any;
  constructor(private modalService: BsModalService, public commonservice: CommonService) {
     this.dataList =  this.commonservice.homdeliverydata;
    console.log(this.dataList);
  }

  ngOnInit(): void {
  
  }
  hideModal() {
  this.modalService.hide();
  }

 

}
