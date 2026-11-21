import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class ApiService {
    //requiredLoginData: { domainid: number; accountid: any; subaccountid: any; storeid: any; storeName: any; };
    constructor(http) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
        this.http = http;
        this.baseURL = "https://www.shoppenation.in/alcoolretail/carryr/retail";
        this.csURL = "https://www.shoppenation.in/eppcommonapis/api/EPP/";
        this.imgURL = "https://www.shoppenation.in/alcoolretail/";
        this.subject = new Subject();
        this.Domain = [
            { id: 1, name: 'Test Domain' },
            { id: 2, name: 'Al-Cool' },
            { id: 3, name: 'Res-to-Ran' }
        ];
        try {
            const storedLoginData = localStorage.getItem('logindata');
            this.domainid = localStorage.getItem('getDomainID');
            if (storedLoginData) {
                this.getlogindata = JSON.parse(storedLoginData);
                this.requiredLoginData = {
                    domainid: +this.domainid || null,
                    accountid: ((_a = this.getlogindata) === null || _a === void 0 ? void 0 : _a.RETAIL_D2C_ACCT_ID) || null,
                    subaccountid: ((_b = this.getlogindata) === null || _b === void 0 ? void 0 : _b.RETAIL_D2C_USR_SUBACCT_ID) || null,
                    storeid: ((_c = this.getlogindata) === null || _c === void 0 ? void 0 : _c.RETAIL_D2C_ACCT_INTRNL_OFFICE_REGID) || null,
                    storeName: ((_d = this.getlogindata) === null || _d === void 0 ? void 0 : _d.RETAIL_D2C_SUBACCT_OFFICE_NAME) || null,
                    address: ((_e = this.getlogindata) === null || _e === void 0 ? void 0 : _e.RETAIL_D2C_SUBACCT_OFFICE_ADDRESS) || null,
                    pincode: ((_f = this.getlogindata) === null || _f === void 0 ? void 0 : _f.RETAIL_D2C_SUBACCT_OFFICE_CITY_PINCD) || null,
                    photo: ((_g = this.getlogindata) === null || _g === void 0 ? void 0 : _g.RETAIL_D2C_ACCT_INTRNL_CUSTMR_PHOTO) || null,
                    username: `${((_h = this.getlogindata) === null || _h === void 0 ? void 0 : _h.RETAIL_D2C_ACCT_INTRNL_FIRST_NAME) || ''} ${((_j = this.getlogindata) === null || _j === void 0 ? void 0 : _j.RETAIL_D2C_ACCT_INTRNL_LAST_NAME) || ''}`.trim(),
                    roleid: ((_k = this.getlogindata) === null || _k === void 0 ? void 0 : _k.RETAIL_D2C_ACCT_INTRNL_CUSTMR_ROLE_ALCTD) || null,
                    cartcount: ((_l = this.getlogindata) === null || _l === void 0 ? void 0 : _l.OPEN_CART_COUNT) || 0,
                    userID: ((_m = this.getlogindata) === null || _m === void 0 ? void 0 : _m.RETAIL_D2C_ACCT_INTRNL_USR_ID) || null,
                    PRIMARY_SELLER_FLG: ((_o = this.getlogindata) === null || _o === void 0 ? void 0 : _o.PRIMARY_SELLER_FLG) || null,
                    SECONDRY_SELLER_FLG: ((_p = this.getlogindata) === null || _p === void 0 ? void 0 : _p.SECONDRY_SELLER_FLG) || null,
                    TERITIARY_SELLER_FLG: ((_q = this.getlogindata) === null || _q === void 0 ? void 0 : _q.TERITIARY_SELLER_FLG) || null,
                    PlatformId: ((_r = this.getlogindata) === null || _r === void 0 ? void 0 : _r.PlatformId) || null
                };
            }
            else {
                console.warn('No login data found in localStorage.');
                this.requiredLoginData = null;
            }
        }
        catch (error) {
            console.error('Error reading login data from localStorage:', error);
            this.requiredLoginData = null;
        }
    }
    postCall(baseURL, data) {
        let headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Credentials': 'true',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PATCH, DELETE, PUT, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
            'Authorization': `Basic ZXBwdXNlcjpFcHBVc2VyQEVwcA==`,
        });
        let options = { headers: headers };
        return this.http.post(baseURL, data, options);
    }
    getCall(baseURL) {
        let headers = new HttpHeaders({
            "Content-Type": "application/json",
            "Access-Control-Allow-Headers": "*",
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
            'Authorization': `Basic ZXBwdXNlcjpFcHBVc2VyQEVwcA==`,
        });
        return this.http.get(baseURL, { headers: headers });
    }
    CountryList() {
        let Headers = {
            headers: new HttpHeaders()
                .set('Authorization', `Basic cmFrZXNoazplcHBhcHBsaWNhdGlvbg==`)
        };
        return this.http.get(this.csURL + 'GetCountry', Headers);
    }
    StateList(countryID) {
        let Headers = {
            headers: new HttpHeaders()
                .set('Authorization', `Basic cmFrZXNoazplcHBhcHBsaWNhdGlvbg==`)
        };
        return this.http.get(this.csURL + 'GetState' + "/" + countryID, Headers);
    }
    CityList(countryID, stateID) {
        let Headers = {
            headers: new HttpHeaders()
                .set('Authorization', `Basic cmFrZXNoazplcHBhcHBsaWNhdGlvbg==`)
        };
        return this.http.get(this.csURL + 'GetCity' + "/" + countryID + "/" + stateID, Headers);
    }
    ZipList(stateName, cityName) {
        let Headers = {
            headers: new HttpHeaders()
                .set('Authorization', `Basic cmFrZXNoazplcHBhcHBsaWNhdGlvbg==`)
        };
        return this.http.get(this.csURL + 'GetZipCodes' + "/" + stateName + "/" + cityName, Headers);
    }
    storeList() {
        return this.getCall(this.baseURL + '/GetRetailStoresByAccountSubAccount' + "/" + 5 + "/" + 15);
    }
    productLineList() {
        return this.getCall(this.baseURL + '/GetSuperStoreProductLine');
    }
}
ApiService.ɵfac = function ApiService_Factory(t) { return new (t || ApiService)(i0.ɵɵinject(i1.HttpClient)); };
ApiService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ApiService, factory: ApiService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ApiService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.HttpClient }]; }, null); })();
//# sourceMappingURL=api.service.js.map