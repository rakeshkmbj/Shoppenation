import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-data-and-privacy',
  templateUrl: './data-and-privacy.component.html',
  styleUrls: ['./data-and-privacy.component.css']
})
export class DataAndPrivacyComponent implements OnInit {

  constructor(
    private bsModalRef: BsModalRef,
    private apiService: ApiService,
    private toastr: ToastrService,
    private fb: FormBuilder,
    private modalService: BsModalService
  ) { }

  ngOnInit(): void {
  }

  close() {
    this.bsModalRef.hide();
  }

}