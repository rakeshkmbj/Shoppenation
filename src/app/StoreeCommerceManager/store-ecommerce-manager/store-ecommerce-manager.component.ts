import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import {Router} from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-store-ecommerce-manager',
  templateUrl: './store-ecommerce-manager.component.html',
  styleUrls: ['./store-ecommerce-manager.component.scss']
})
export class StoreEcommerceManagerComponent implements OnInit {
  imgURL = this.apiService.imgURL;
  getlogindata: any;
  officename: any;
  address: any;
  pincode: any;
  domainname: any;
  accountid: any;
  subaccid: any;
  storeid: any;
  photo: any;
  username: string;
  roleid: any;
  role = '';
  cartcount: any;
  domainid: any;
  storeName: any;

  constructor(public commonservice: CommonService, private apiService:ApiService, private router: Router) {
    this.accountid = this.apiService.requiredLoginData.accountid;
    this.subaccid = this.apiService.requiredLoginData.subaccountid;
    this.storeid = this.apiService.requiredLoginData.storeid;
    this.officename = this.apiService.requiredLoginData.storeName;
    this.domainid = this.apiService.requiredLoginData.domainid;
    this.address = this.apiService.requiredLoginData.address;
    this.pincode = this.apiService.requiredLoginData.pincode;
    this.photo = this.apiService.requiredLoginData.photo;
    this.username = this.apiService.requiredLoginData.username;
    this.roleid = this.apiService.requiredLoginData.roleid;
    this.cartcount = this.apiService.requiredLoginData.cartcount;

    this.getlogindata = localStorage.getItem('logindata');
    this.getlogindata = JSON.parse(this.getlogindata);
   }

  ngOnInit(): void {
    let loginDAta = JSON.parse(localStorage.getItem("logindata"));
    this.username = loginDAta.RETAIL_D2C_ACCT_INTRNL_FIRST_NAME + " " + loginDAta.RETAIL_D2C_ACCT_INTRNL_LAST_NAME;
    this.commonservice.stringSubject.subscribe(loginData =>{
      console.log(loginData);
       });
    
       if(this.cartcount == null){
        this.cartcount = 0;
      }
       if(this.roleid == 1){
         this.role = "Super Admin";
       }
       else if(this.roleid == 2){
        this.role = "Admin";
      }
      else if(this.roleid == 3){
        this.role = "Store Inventury Incharge";
      }
  }

  logout(){
    this.router.navigate(['/']);
    localStorage.clear();
  }

}
