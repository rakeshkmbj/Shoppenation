import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {
  firstName: string;
  subAccountName: string;
  totalCartItem: any;
  unseenMessage: any;

  constructor(public router: Router) { }

  ngOnInit() {

    let getloginResData = JSON.parse(localStorage.getItem('loginResData'));
    console.log(getloginResData);
    this.firstName = getloginResData.CARRYR_B2B_ACCT_INTRNL_FIRST_NAME;
   this.subAccountName= getloginResData.SubAccountName;
   this.totalCartItem= getloginResData.CARRYR_MART_B2B_TOTAL_OPEND_CART_COUNT;
   this.unseenMessage= getloginResData.CARRYR_MART_NOTIFICATN_DESK_UNSEEN_SUM_TOTAL;
   

    $('.add').click(function () {
      if ($(this).prev().val() < 1000) {
        $(this).prev().val(+$(this).prev().val() + 1);
      }
  });
  $('.sub').click(function () {
      if ($(this).next().val() > 1) {
        if ($(this).next().val() > 1) $(this).next().val(+$(this).next().val() - 1);
      }
  });
  }

  logout(){ this.router.navigate(['/']);
    localStorage.removeItem('loginResData');
  }
  

}