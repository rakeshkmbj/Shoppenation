import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import * as _ from 'lodash';
@Injectable({
  providedIn: 'root'
})

export class ApiService {
  baseURL: string = "http://www.shripatigroup.com/alcoolretail/carryr/retail";
  csURL: string = "http://www.shripatigroup.com/eppcommonapis/api/EPP/";
  imgURL: string = "http://www.shripatigroup.com/alcoolretail/";
  countryList: Object;
  subject = new Subject();
  countryID: number;

  imageError: string;
  isImageSaved: boolean;
  cardImageBase64: string;
  uploadLabel: any;
  base64textString: string;
  isFileUploaded: boolean;
  retailStoreList: any;
  getlogindata: any;
  domainid: any;
  requiredLoginData: any;
  //requiredLoginData: { domainid: number; accountid: any; subaccountid: any; storeid: any; storeName: any; };
  constructor(private http: HttpClient) {
    try {
      const storedLoginData = localStorage.getItem('logindata');
      this.domainid = localStorage.getItem('getDomainID');

      if (storedLoginData) {
        this.getlogindata = JSON.parse(storedLoginData);

        this.requiredLoginData = {
          domainid: +this.domainid || null,
          accountid: this.getlogindata?.RETAIL_D2C_ACCT_ID || null,
          subaccountid: this.getlogindata?.RETAIL_D2C_USR_SUBACCT_ID || null,
          storeid: this.getlogindata?.RETAIL_D2C_ACCT_INTRNL_OFFICE_REGID || null,
          storeName: this.getlogindata?.RETAIL_D2C_SUBACCT_OFFICE_NAME || null,
          address: this.getlogindata?.RETAIL_D2C_SUBACCT_OFFICE_ADDRESS || null,
          pincode: this.getlogindata?.RETAIL_D2C_SUBACCT_OFFICE_CITY_PINCD || null,
          photo: this.getlogindata?.RETAIL_D2C_ACCT_INTRNL_CUSTMR_PHOTO || null,
          username: `${this.getlogindata?.RETAIL_D2C_ACCT_INTRNL_FIRST_NAME || ''} ${this.getlogindata?.RETAIL_D2C_ACCT_INTRNL_LAST_NAME || ''}`.trim(),
          roleid: this.getlogindata?.RETAIL_D2C_ACCT_INTRNL_CUSTMR_ROLE_ALCTD || null,
          cartcount: this.getlogindata?.OPEN_CART_COUNT || 0,
          userID: this.getlogindata?.RETAIL_D2C_ACCT_INTRNL_USR_ID || null,
          PRIMARY_SELLER_FLG: this.getlogindata?.PRIMARY_SELLER_FLG || null,
          SECONDRY_SELLER_FLG: this.getlogindata?.SECONDRY_SELLER_FLG || null,
          TERITIARY_SELLER_FLG: this.getlogindata?.TERITIARY_SELLER_FLG || null,
          PlatformId: this.getlogindata?.PlatformId || null
        };
      } else {
        console.warn('No login data found in localStorage.');
        this.requiredLoginData = null;
      }
    } catch (error) {
      console.error('Error reading login data from localStorage:', error);
      this.requiredLoginData = null;
    }
  }

  Domain: any = [
    { id: 1, name: 'Test Domain' },
    { id: 2, name: 'Al-Cool' },
    { id: 3, name: 'Res-to-Ran' }
  ]




  postCall(baseURL, data): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, DELETE, PUT, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',

    });
    let options = { headers: headers }
    return this.http.post(baseURL, data, options)

  }



  getCall(baseURL): Observable<any> {

    let headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Access-Control-Allow-Headers": "*",
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
    });
    return this.http.get(baseURL, { headers: headers });
  }


  CountryList(): Observable<any> {
    let Headers = {
      headers: new HttpHeaders()
        .set('Authorization', `Basic cmFrZXNoazplcHBhcHBsaWNhdGlvbg==`)
    }
    return this.http.get(this.csURL + 'GetCountry', Headers);
  }



  StateList(countryID): Observable<any> {
    let Headers = {
      headers: new HttpHeaders()
        .set('Authorization', `Basic cmFrZXNoazplcHBhcHBsaWNhdGlvbg==`)
    }
    return this.http.get(this.csURL + 'GetState' + "/" + countryID, Headers);
  }

  CityList(countryID, stateID): Observable<any> {
    let Headers = {
      headers: new HttpHeaders()
        .set('Authorization', `Basic cmFrZXNoazplcHBhcHBsaWNhdGlvbg==`)
    }
    return this.http.get(this.csURL + 'GetCity' + "/" + countryID + "/" + stateID, Headers);
  }

  ZipList(stateName, cityName): Observable<any> {
    let Headers = {
      headers: new HttpHeaders()
        .set('Authorization', `Basic cmFrZXNoazplcHBhcHBsaWNhdGlvbg==`)
    }
    return this.http.get(this.csURL + 'GetZipCodes' + "/" + stateName + "/" + cityName, Headers);
  }


  storeList(): Observable<any> {
    return this.getCall(this.baseURL + '/GetRetailStoresByAccountSubAccount' + "/" + 5 + "/" + 15);
  }

  productLineList(): Observable<any> {
    return this.getCall(this.baseURL + '/GetSuperStoreProductLine');
  }



}