import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-hcp-login',
  templateUrl: './hcp-login.component.html',
  styleUrls: ['./hcp-login.component.css']
})
export class HcpLoginComponent implements OnInit {

  constructor(
    private bsModalRef: BsModalRef,
  ) { }

  ngOnInit(): void {
  }

  close() {
    this.bsModalRef.hide();
  }

}
