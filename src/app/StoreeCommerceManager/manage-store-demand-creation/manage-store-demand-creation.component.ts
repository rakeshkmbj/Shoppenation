import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-manage-store-demand-creation',
  templateUrl: './manage-store-demand-creation.component.html',
  styleUrls: ['./manage-store-demand-creation.component.css']
})
export class ManageStoreDemandCreationComponent implements OnInit {

  modalRef?: BsModalRef;
  constructor(private modalService: BsModalService) {}

  ngOnInit(): void {
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template,
      Object.assign({}, { class: 'purchase-modal' }));
  }
}