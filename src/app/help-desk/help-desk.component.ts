import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-help-desk',
  templateUrl: './help-desk.component.html',
  styleUrls: ['./help-desk.component.css']
})
export class HelpDeskComponent implements OnInit {

  constructor(
     private bsModalRef: BsModalRef,
   ) { }
 
   ngOnInit(): void {
   }
 
   close() {
     this.bsModalRef.hide();
   }

}
