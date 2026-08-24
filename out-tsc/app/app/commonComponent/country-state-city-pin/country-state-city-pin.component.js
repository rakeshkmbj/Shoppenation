import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Validators } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "src/app/services/api.service";
import * as i2 from "ngx-toastr";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/common/http";
import * as i5 from "ngx-bootstrap/modal";
import * as i6 from "@angular/common";
function CountryStateCityPinComponent_option_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 11);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const country_r4 = ctx.$implicit;
    i0.ɵɵproperty("value", country_r4.CNTRY_ID);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(country_r4.CNTRY_NM);
} }
function CountryStateCityPinComponent_option_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 11);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const state_r5 = ctx.$implicit;
    i0.ɵɵproperty("value", state_r5.STATE_ID);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(state_r5.STATE_NM);
} }
function CountryStateCityPinComponent_option_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 11);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const city_r6 = ctx.$implicit;
    i0.ɵɵproperty("value", city_r6.CITY_ID);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(city_r6.CITY_NM);
} }
function CountryStateCityPinComponent_option_33_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 11);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const zip_r7 = ctx.$implicit;
    i0.ɵɵproperty("value", zip_r7.Id);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(zip_r7.Value);
} }
export class CountryStateCityPinComponent {
    constructor(apiService, toastr, formBuilder, http, 
    //  private SpinnerService: NgxSpinnerService,
    modalService) {
        this.apiService = apiService;
        this.toastr = toastr;
        this.formBuilder = formBuilder;
        this.http = http;
        this.modalService = modalService;
        this.countryEvent = new EventEmitter();
        this.stateEvent = new EventEmitter();
        this.cityEvent = new EventEmitter();
        this.pincodeEvent = new EventEmitter();
    }
    ngOnInit() {
        this.getDomain();
        this.getCountry();
        this.parentForm = this.formBuilder.group({
            DomainId: ['', Validators.required],
            Country: ['', Validators.required],
            State: ['', Validators.required],
            City: ['', Validators.required],
            PinCode: ['', Validators.required],
        });
    }
    getDomain() {
        this.domainList = this.apiService.Domain;
    }
    getCountry() {
        this.apiService.CountryList().subscribe((res) => {
            this.countryList = res;
            //   this.getState();
        });
    }
    changeCountry(e) {
        this.countryID = e.target.value;
        this.countryEvent.emit(this.countryID);
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
        this.stateEvent.emit(this.stateID);
        this.stateName = e.target.options[e.target.options.selectedIndex].text;
        if (this.stateID) {
            this.getCity();
            this.cityList = null;
            this.zipList = null;
        }
        else {
            this.cityList = null;
            // this.zipList = null;
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
        this.cityEvent.emit(this.cityID);
        this.cityName = e.target.options[e.target.options.selectedIndex].text;
        this.getZip();
    }
    getZip() {
        this.apiService.ZipList(this.stateName, this.cityName).subscribe((res) => {
            this.zipList = res;
            console.log(this.zipList);
        });
    }
    changePin(e) {
        // this.pinID =e.target.value;
        this.pinID = e.target.options[e.target.options.selectedIndex].text;
        console.log(this.pinID);
        this.pincodeEvent.emit(this.pinID);
    }
}
CountryStateCityPinComponent.ɵfac = function CountryStateCityPinComponent_Factory(t) { return new (t || CountryStateCityPinComponent)(i0.ɵɵdirectiveInject(i1.ApiService), i0.ɵɵdirectiveInject(i2.ToastrService), i0.ɵɵdirectiveInject(i3.FormBuilder), i0.ɵɵdirectiveInject(i4.HttpClient), i0.ɵɵdirectiveInject(i5.BsModalService)); };
CountryStateCityPinComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CountryStateCityPinComponent, selectors: [["country-state-city-pin"]], inputs: { parentForm: "parentForm", reset: "reset" }, outputs: { countryEvent: "countryEvent", stateEvent: "stateEvent", cityEvent: "cityEvent", pincodeEvent: "pincodeEvent" }, decls: 34, vars: 5, consts: [[3, "formGroup"], [1, "row"], [1, "col-md-6"], [1, "form-group"], ["formControlName", "Country", 1, "form-control", 3, "change"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "State", 1, "form-control", 3, "change"], ["formControlName", "City", 1, "form-control", 3, "change"], ["selected", "", "value", ""], ["formControlName", "PinCode", 1, "form-control", 3, "change"], [3, "value"]], template: function CountryStateCityPinComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "form", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "label");
        i0.ɵɵtext(5, "Country");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "select", 4);
        i0.ɵɵlistener("change", function CountryStateCityPinComponent_Template_select_change_6_listener($event) { return ctx.changeCountry($event); });
        i0.ɵɵelementStart(7, "option", 5);
        i0.ɵɵtext(8, "Select");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(9, CountryStateCityPinComponent_option_9_Template, 2, 2, "option", 6);
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(10, "div", 2)(11, "div", 3)(12, "label");
        i0.ɵɵtext(13, "State");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(14, "select", 7);
        i0.ɵɵlistener("change", function CountryStateCityPinComponent_Template_select_change_14_listener($event) { return ctx.changeState($event); });
        i0.ɵɵelementStart(15, "option", 5);
        i0.ɵɵtext(16, "Select");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(17, CountryStateCityPinComponent_option_17_Template, 2, 2, "option", 6);
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(18, "div", 2)(19, "div", 3)(20, "label");
        i0.ɵɵtext(21, "City");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(22, "select", 8);
        i0.ɵɵlistener("change", function CountryStateCityPinComponent_Template_select_change_22_listener($event) { return ctx.changeCity($event); });
        i0.ɵɵelementStart(23, "option", 9);
        i0.ɵɵtext(24, "Select");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(25, CountryStateCityPinComponent_option_25_Template, 2, 2, "option", 6);
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(26, "div", 2)(27, "div", 3)(28, "label");
        i0.ɵɵtext(29, "Pin Code");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(30, "select", 10);
        i0.ɵɵlistener("change", function CountryStateCityPinComponent_Template_select_change_30_listener($event) { return ctx.changePin($event); });
        i0.ɵɵelementStart(31, "option", 9);
        i0.ɵɵtext(32, "Select");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(33, CountryStateCityPinComponent_option_33_Template, 2, 2, "option", 6);
        i0.ɵɵelementEnd()()()()();
    } if (rf & 2) {
        i0.ɵɵproperty("formGroup", ctx.parentForm);
        i0.ɵɵadvance(9);
        i0.ɵɵproperty("ngForOf", ctx.countryList);
        i0.ɵɵadvance(8);
        i0.ɵɵproperty("ngForOf", ctx.stateList);
        i0.ɵɵadvance(8);
        i0.ɵɵproperty("ngForOf", ctx.cityList);
        i0.ɵɵadvance(8);
        i0.ɵɵproperty("ngForOf", ctx.zipList);
    } }, dependencies: [i6.NgForOf, i3.ɵNgNoValidate, i3.NgSelectOption, i3.ɵNgSelectMultipleOption, i3.SelectControlValueAccessor, i3.NgControlStatus, i3.NgControlStatusGroup, i3.FormGroupDirective, i3.FormControlName] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CountryStateCityPinComponent, [{
        type: Component,
        args: [{ selector: 'country-state-city-pin', template: "<form [formGroup]=\"parentForm\">\n    <div class=\"row\">\n        <!-- <div class=\"col-md-6\">\n            <div class=\"form-group\">\n                <label>Domain</label>\n                <select class=\"form-control\" formControlName=\"DomainId\">\n                    <option selected value=\"\">Select</option>\n                    <option *ngFor=\"let domain of domainList\" [ngValue]=\"domain.id\">{{domain.name}}</option>\n                    </select>\n            </div>\n        </div> -->\n        <div class=\"col-md-6\">\n            <div class=\"form-group\">\n                <label>Country</label>\n                <select class=\"form-control\" formControlName=\"Country\" (change)=\"changeCountry($event)\">\n                    <option value=\"\">Select</option>\n                    <option *ngFor=\"let country of countryList\" [value]=\"country.CNTRY_ID\">{{country.CNTRY_NM}}</option>\n                    </select>\n            </div>\n        </div>\n        <div class=\"col-md-6\">\n            <div class=\"form-group\">\n                <label>State</label>\n                <select formControlName=\"State\" class=\"form-control\" (change)=\"changeState($event)\">\n                    <option value=\"\">Select</option>\n                    <option *ngFor=\"let state of stateList\" [value]=\"state.STATE_ID\">{{state.STATE_NM}}</option>\n                    </select>\n            </div>\n        </div>\n        <div class=\"col-md-6\">\n            <div class=\"form-group\">\n                <label>City</label>\n                <select formControlName=\"City\" class=\"form-control\" (change)=\"changeCity($event)\">\n                    <option selected value=\"\">Select</option>\n                    <option *ngFor=\"let city of cityList\" [value]=\"city.CITY_ID\">{{city.CITY_NM}}</option>\n                    </select>\n            </div>\n        </div>\n        <div class=\"col-md-6\">\n            <div class=\"form-group\">\n                <label>Pin Code</label>\n                <select formControlName=\"PinCode\" class=\"form-control\" (change)=\"changePin($event)\">\n                <option selected value=\"\">Select</option>\n                <option *ngFor=\"let zip of zipList\" [value]=\"zip.Id\">{{zip.Value}}</option>\n              </select>\n            </div>\n        </div>\n    </div>\n</form>" }]
    }], function () { return [{ type: i1.ApiService }, { type: i2.ToastrService }, { type: i3.FormBuilder }, { type: i4.HttpClient }, { type: i5.BsModalService }]; }, { parentForm: [{
            type: Input,
            args: ['parentForm']
        }], reset: [{
            type: Input
        }], countryEvent: [{
            type: Output
        }], stateEvent: [{
            type: Output
        }], cityEvent: [{
            type: Output
        }], pincodeEvent: [{
            type: Output
        }] }); })();
//# sourceMappingURL=country-state-city-pin.component.js.map