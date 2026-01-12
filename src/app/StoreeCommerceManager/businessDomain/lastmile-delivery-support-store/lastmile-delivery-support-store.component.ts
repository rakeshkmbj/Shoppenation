import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-lastmile-delivery-support-store',
  templateUrl: './lastmile-delivery-support-store.component.html',
  styleUrls: ['./lastmile-delivery-support-store.component.scss']
})
export class LastmileDeliverySupportStoreComponent implements OnInit {
  modalRef?: BsModalRef;
  constructor(private modalService: BsModalService) {}
 
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  ngOnInit(): void {
  }

}
