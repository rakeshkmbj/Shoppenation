import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormGroup, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';
import { NgxSpinnerService } from "ngx-spinner";
import { NavigationExtras, Router } from '@angular/router';


interface TertiaryAccountLink {
  ACCTS_B2B2C_ACTIV_FLG: boolean | null;
  ACCTS_SECNDRY_TERITIARY_B2B_LINK_SEQ_ID: string;
  CategoryName: string | null;
  RETAIL_D2C_SUBACCT_OFFICE_CITY: number;
  RETAIL_D2C_SUBACCT_OFFICE_CNTRY: number;
  RETAIL_D2C_SUBACCT_OFFICE_NAME: string;
  RETAIL_D2C_SUBACCT_OFFICE_STATE: number;
  SECNDRY_TERITIARY_ACCTS_b2B_ACTIV_FLG: boolean;
  THIRD_NODE_ACCT_CATEGORY_ID: string | null;
  THIRD_NODE_ACCT_STORE_ID: string;
  THIRD_NODE_ACCT_SUBACCT_ID: string;
}

interface SecondaryAccountLink {
  ACCT_PRIMRY_SECNDRY_B2B_LINK_SEQ_ID: string;
  CategoryName: string;
  ECOMM_PLATFORM_ID: string;
  PRIMRY_SECNDRY_ACCTS_b2B_ACTIV_FLG: boolean;
  RETAIL_D2C_SUBACCT_OFFICE_CITY: number;
  RETAIL_D2C_SUBACCT_OFFICE_CNTRY: number;
  RETAIL_D2C_SUBACCT_OFFICE_NAME: string;
  RETAIL_D2C_SUBACCT_OFFICE_STATE: number;
  SECOND_NODE_ACCT_CATEGORY_ID: string;
  SECOND_NODE_ACCT_STORE_ID: string;
  SECOND_NODE_ACCT_SUBACCT_ID: string;
}

@Component({
  selector: 'app-account-recievables-bank-settlement',
  templateUrl: './account-recievables-bank-settlement.component.html',
  styleUrls: ['./account-recievables-bank-settlement.component.scss']
})
export class AccountRecievablesBankSettlementComponent implements OnInit {

  countryList: {};
  countryID: any;
  countryName: any;
  searchCenterForm: any;
  cityList: {};
  stateList: {};
  stateID: any;
  stateName: any;
  cityName: any;
  zipList: {};
  cityID: any;
  pinID: any;
  thirdNodeAccArr: TertiaryAccountLink[] = [];
  showThirdNodeAcc = false
  accountid: any;
  subaccountid: any;
  storeid: any;
  domainid: any;
  storeName: any;
  secondryNodeAccArr: SecondaryAccountLink[] = [];
  showNetworkList = false
  reportType: string
  showReport = false;
  showGenerate = false


  constructor(
    private apiService: ApiService,
    private modalService: BsModalService,
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
  ) {
    this.accountid = this.apiService.requiredLoginData.accountid;
    this.subaccountid = this.apiService.requiredLoginData.subaccountid;
    this.storeid = this.apiService.requiredLoginData.storeid;
    this.storeName = this.apiService.requiredLoginData.storeName;
    this.domainid = this.apiService.requiredLoginData.domainid;
  }

  ngOnInit(): void {
    this.getCountry()
  }

  generate(){
    this.showGenerate = true;
  }

  generateReport(type: string){
    this.reportType = type;
    this.showReport = true;
  }


  onSecondNodeNetwork() {

    this.reportType = '';
    this.showReport = false;
    this.showGenerate = false;

    this.thirdNodeAccArr = [];
    this.showThirdNodeAcc = false;

    const payload = {
      Cntryid: this.countryID,
      Stateid: this.stateID,
      Secnd_node_flg: true,
      Third_node_flg: false,
      Subacctid: this.subaccountid,
      Storeid: this.storeid,
      B2b_id: "RH1"
    }

    console.log("payload: ", payload)

    this.apiService.postCall(`${this.apiService.baseURL}/GetAcctNetwork`, payload)
      .subscribe(data => {
        console.log(data);

        this.secondryNodeAccArr = Array.isArray(data) ? data : [];

        console.log("Secondary Node Acc: ", this.secondryNodeAccArr)

        if (this.secondryNodeAccArr.length > 0) {
          this.showNetworkList = true;
        } else {
          this.showNetworkList = false;
          this.toastr.error("No Accounts avaliable")
        }

      },
        (error) => {
          console.log(error);
          this.toastr.error(error.error, '', {
            timeOut: 5000,
          });
        }
      );

  }

  getCountry() {
    this.apiService.CountryList().subscribe((res) => {
      this.countryList = res;
      //   this.getState();
    });
  }

  changeCountry(e) {
    this.countryID = e.target.value;
    console.log(this.countryID);
    // this.countryName = e.target.options[e.target.options.selectedIndex].text;
    if (this.countryID) {
      this.getState();
    }
    else {
      this.stateList = null;
      this.cityList = null;
      this.zipList = null;
    }

  }

  getState() {
    this.apiService.StateList(this.countryID).subscribe((res) => {
      this.stateList = res;
      console.log(this.stateList);
    });
  }

  changeState(e) {
    this.stateID = e.target.value;
    this.stateName = e.target.options[e.target.options.selectedIndex].text;
    if (this.countryID) {
      this.getCity();
    }
    else {
      this.cityList = null;
      this.zipList = null;
    }
  }

  getCity() {
    this.apiService.CityList(this.countryID, this.stateID).subscribe((res) => {
      this.cityList = res;
      console.log(this.cityList);
    });
  }

  changeCity(e) {
    this.cityID = e.target.value;
    console.log(this.cityID);
    this.cityName = e.target.options[e.target.options.selectedIndex].text;
  }


}
