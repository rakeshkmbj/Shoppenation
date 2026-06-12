import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-delivery-login',
  templateUrl: './delivery-login.component.html',
  styleUrls: ['./delivery-login.component.css']
})
export class DeliveryLoginComponent implements OnInit {

    constructor(
      private bsModalRef: BsModalRef,
    ) { }
  
    ngOnInit(): void {
    }
  
    close() {
      this.bsModalRef.hide();
    }

}
