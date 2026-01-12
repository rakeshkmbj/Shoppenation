import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'store-manager-header',
  templateUrl: './store-manager-header.component.html',
  styleUrls: ['./store-manager-header.component.scss']
})
export class StoreManagerHeaderComponent implements OnInit {
  getLoginData: any;

  constructor(public commonservice :CommonService) {
   }

  ngOnInit(): void {
 
   
   
      
  }
 
 
}
