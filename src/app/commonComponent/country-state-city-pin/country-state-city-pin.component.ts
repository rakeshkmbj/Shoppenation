import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';



@Component({
  selector: 'country-state-city-pin',
  templateUrl: './country-state-city-pin.component.html',
  styleUrls: ['./country-state-city-pin.component.scss']
})
export class CountryStateCityPinComponent implements OnInit {
  @Input ('parentForm')
  public parentForm: FormGroup;
  @Input() reset: Observable<boolean>;
  @Output() countryEvent = new EventEmitter<any>();
  @Output() stateEvent = new EventEmitter<any>();
  @Output() cityEvent = new EventEmitter<any>();
  @Output() pincodeEvent = new EventEmitter<any>();
  domainList: [];
  countryList: {};
  countryID: any;
  countryName: any;
  searchCenterForm: any;
  cityList: {};
  stateList: {};
  stateID: any;
  stateName: any;
  cityName: any;
  Form: FormGroup;
  zipList: {};
  cityID: any;
  pinID: any;
  constructor( private apiService:ApiService,
    private toastr: ToastrService,
    private formBuilder: FormBuilder,
    private http: HttpClient,
  //  private SpinnerService: NgxSpinnerService,
    private modalService: BsModalService) { }

  ngOnInit(): void {
    this. getDomain();
    this.getCountry();
    this.parentForm  =  this.formBuilder.group({
      DomainId: ['', Validators.required],
      Country: ['', Validators.required],
      State: ['', Validators.required],
      City: ['', Validators.required],
      PinCode: ['', Validators.required],
    });
    
  }

  getDomain(){
    this.domainList = this.apiService.Domain;
  }
  
  getCountry(){
      this.apiService.CountryList().subscribe((res)=>{
      this.countryList = res;
   //   this.getState();
  });
}

changeCountry(e){
  this.countryID =e.target.value;	
  this.countryEvent.emit(this.countryID)
  console.log(this.countryID);
// this.countryName = e.target.options[e.target.options.selectedIndex].text;
if(this.countryID){
  this.getState();
}
else {
  this.stateList = null;
  this.cityList = null;
  this.zipList = null;
}
 
  }
 
getState() {
  this.apiService.StateList(this.countryID).subscribe((res)=>{
    this.stateList = res;
    console.log(this.stateList);
    });
}

changeState(e){
  
  this.stateID =e.target.value;
  this.stateEvent.emit(this.stateID);
  this.stateName = e.target.options[e.target.options.selectedIndex].text;
  if(this.stateID) {
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
  this.apiService.CityList(this.countryID, this.stateID).subscribe((res)=>{
    this.cityList = res;
    console.log(this.cityList);
    });
}
changeCity(e){
  this.cityID =e.target.value;
  console.log(this.cityID);
  this.cityEvent.emit(this.cityID)
  this.cityName = e.target.options[e.target.options.selectedIndex].text;
    this.getZip();
  
}

getZip() {
  this.apiService.ZipList(this.stateName, this.cityName).subscribe((res)=>{
    this.zipList = res;
    console.log(this.zipList);
    });
}
changePin(e){
 // this.pinID =e.target.value;
  this.pinID = e.target.options[e.target.options.selectedIndex].text;
  console.log(this.pinID);
  this.pincodeEvent.emit(this.pinID)
  
}

}