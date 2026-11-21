import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "./api.service";
export class LocationService {
    constructor(apiService) {
        this.apiService = apiService;
    }
    // ✅ Get list of countries
    getCountries() {
        return this.apiService.CountryList();
    }
    // ✅ Get list of states by country ID
    getStatesByCountryId(countryId) {
        return this.apiService.StateList(countryId);
    }
    // ✅ Get list of cities by country + state ID
    getCitiesByStateId(countryId, stateId) {
        return this.apiService.CityList(countryId, stateId);
    }
    // ✅ Get country name by ID
    getCountryName(countryId) {
        return this.getCountries().pipe(map(countries => {
            const country = countries.find(c => c.CNTRY_ID === countryId);
            return country ? country.CNTRY_NM : '';
        }));
    }
    // ✅ Get state name by ID (within a country)
    getStateName(countryId, stateId) {
        return this.getStatesByCountryId(countryId).pipe(map(states => {
            const state = states.find(s => s.STATE_ID === stateId);
            return state ? state.STATE_NM : '';
        }));
    }
    // ✅ Get city name by ID (within a state)
    getCityName(countryId, stateId, cityId) {
        return this.getCitiesByStateId(countryId, stateId).pipe(map(cities => {
            const city = cities.find(c => c.CITY_ID === cityId);
            return city ? city.CITY_NM : '';
        }));
    }
    // ✅ Utility: Get all names at once
    getLocationNames(countryId, stateId, cityId) {
        return new Observable(observer => {
            this.getCountryName(countryId).subscribe(countryName => {
                this.getStateName(countryId, stateId).subscribe(stateName => {
                    this.getCityName(countryId, stateId, cityId).subscribe(cityName => {
                        observer.next({ country: countryName, state: stateName, city: cityName });
                        observer.complete();
                    });
                });
            });
        });
    }
}
LocationService.ɵfac = function LocationService_Factory(t) { return new (t || LocationService)(i0.ɵɵinject(i1.ApiService)); };
LocationService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: LocationService, factory: LocationService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LocationService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.ApiService }]; }, null); })();
//# sourceMappingURL=getname.js.map