import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private apiService: ApiService) {}

  // ✅ Get list of countries
  getCountries(): Observable<any[]> {
    return this.apiService.CountryList();
  }

  // ✅ Get list of states by country ID
  getStatesByCountryId(countryId: number): Observable<any[]> {
    return this.apiService.StateList(countryId);
  }

  // ✅ Get list of cities by country + state ID
  getCitiesByStateId(countryId: number, stateId: number): Observable<any[]> {
    return this.apiService.CityList(countryId, stateId);
  }

  // ✅ Get country name by ID
  getCountryName(countryId: number): Observable<string> {
    return this.getCountries().pipe(
      map(countries => {
        const country = countries.find(c => c.CNTRY_ID === countryId);
        return country ? country.CNTRY_NM : '';
      })
    );
  }

  // ✅ Get state name by ID (within a country)
  getStateName(countryId: number, stateId: number): Observable<string> {
    return this.getStatesByCountryId(countryId).pipe(
      map(states => {
        const state = states.find(s => s.STATE_ID === stateId);
        return state ? state.STATE_NM : '';
      })
    );
  }

  // ✅ Get city name by ID (within a state)
  getCityName(countryId: number, stateId: number, cityId: number): Observable<string> {
    return this.getCitiesByStateId(countryId, stateId).pipe(
      map(cities => {
        const city = cities.find(c => c.CITY_ID === cityId);
        return city ? city.CITY_NM : '';
      })
    );
  }

  // ✅ Utility: Get all names at once
  getLocationNames(countryId: number, stateId: number, cityId: number): Observable<{country: string, state: string, city: string}> {
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