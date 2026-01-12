import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
@Component({
  selector: 'activation-deactivation',
  templateUrl:  './activation-deactivation.component.html',
  styleUrls: ['./activation-deactivation.component.css']
})
export class ActivationDeactivationComponent {
  closeBtnName?: string;
  subitemID: number;
  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit(): void {
    console.log(this.subitemID);
  }
 

}
