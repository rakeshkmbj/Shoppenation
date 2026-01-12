import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-operate-console',
  templateUrl: './operate-console.component.html',
  styleUrls: ['./operate-console.component.scss']
})
export class OperateConsoleComponent implements OnInit {

  constructor(private apiService:ApiService, private modalService: BsModalService, private formBuilder: FormBuilder, private toastr: ToastrService)
  { }

  modalRef?: BsModalRef;
  ngOnInit(): void {
  }

  openModal(template: TemplateRef<any>) {
    const initialState  = {
    //  list: [this.storeName, this.accountID, this.subAccountID, this.storeID]
      // storename: this.storeName,
      // accountid: this.accountID,
      // subaccountid: this.subAccountID,
      // storeid: this.storeID
    }
    this.modalRef = this.modalService.show(template, {initialState, class: 'modal-lg' });
  }

}
