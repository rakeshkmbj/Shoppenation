import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { LoginComponent } from 'src/app/login';
import { MdrConnectComponent } from 'src/app/mdr-connect/mdr-connect.component';

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

}