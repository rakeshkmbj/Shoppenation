import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-store-open-cart',
  templateUrl: './store-open-cart.component.html',
  styleUrls: ['./store-open-cart.component.css']
})
export class StoreOpenCartComponent implements OnInit {

  modalRef?: BsModalRef;
  constructor(private modalService: BsModalService) {}

  ngOnInit(): void {
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template,
      Object.assign({}, { class: 'purchase-modal' }));
  }
}
