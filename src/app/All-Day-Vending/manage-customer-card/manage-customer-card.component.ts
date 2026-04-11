import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormGroup, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';
import { NgxSpinnerService } from "ngx-spinner";
import { NavigationExtras, Router } from '@angular/router';
import { RazorpayService } from '../../razorpay.service';

@Component({
  selector: 'app-manage-customer-card',
  templateUrl: './manage-customer-card.component.html',
  styleUrls: ['./manage-customer-card.component.css']
})
export class ManageCustomerCardComponent implements OnInit {

  modalRef: BsModalRef;
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
  showAccHolders = false
  accountid: any;
  subaccountid: any;
  storeid: any;
  domainid: any;
  storeName: any;
  showNetworkList = false
  reportType: string
  showReport = false;
  showGenerate = false;
  userCardForm: FormGroup;
  displayCardHolders: FormGroup;
  base64textString: any;
  isImageSaved: boolean;
  uploadLabel = "";
  getlogindata: any;
  classId: any;
  cardHolders: any[] = [];
  confirmation = "";
  SelectedUser: any;
  isEditMode = false;
  classDepName: any;
  classDepArr: any;
  thirdNodeAccArr: any;
  selectedAccountObj: any;
  changePasswordForm: FormGroup;
  submitted = false;
  passwordMismatch = false;
  cardBalance: any;
  activeTabId: string = 'tab2';
  fromDate1: string = '';
  fromDate2: string = '';
  cardholderRefill: any = null;
  cardholderSpends: any = null;
  showCardholderRefill: boolean = false;
  showCardholderSpends: boolean = false;
  loadingSpend: boolean = false;
  loadingRefill: boolean = false;
  selectedUer: any;

  constructor(
    private apiService: ApiService,
    private modalService: BsModalService,
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private razorpayService: RazorpayService,
  ) {
    this.accountid = this.apiService.requiredLoginData.accountid;
    this.subaccountid = this.apiService.requiredLoginData.subaccountid;
    this.storeid = this.apiService.requiredLoginData.storeid;
    this.storeName = this.apiService.requiredLoginData.storeName;
    this.domainid = this.apiService.requiredLoginData.domainid;
    this.getlogindata = localStorage.getItem('logindata');
    this.getlogindata = JSON.parse(this.getlogindata);

    this.userCardForm = this.formBuilder.group({
      cardNo: ['', Validators.required],
      cardType: ['Student', Validators.required],
      rollNo: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      guardianName: [''],
      primaryMobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      altMobile: ['', [Validators.pattern('^[0-9]{10}$')]],
      email: ['', Validators.email],
      gender: ['M', Validators.required],
      photo: [null]
    });

    this.displayCardHolders = this.formBuilder.group({
      classId: ['', Validators.required],
      accId: ['', Validators.required]
    })

    this.changePasswordForm = this.formBuilder.group({
      currentPassword: [{ value: '', disabled: true }, Validators.required],
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    });

  }

  ngOnInit(): void {

    this.onTabChange('tab2');

    this.initForm();
    this.getCountry();

    if (this.getlogindata.THIRD_NODE_SUBACCT_FLG) {

      this.displayCardHolders.setValue({
        classId: '',
        accId: this.accountid
      });

      this.selectedAccountObj = {
        THIRD_NODE_ACCT_SUBACCT_ID: this.subaccountid,
        THIRD_NODE_ACCT_STORE_ID: this.storeid
      }

      this.getClassDep(this.selectedAccountObj.THIRD_NODE_ACCT_SUBACCT_ID, this.selectedAccountObj.THIRD_NODE_ACCT_STORE_ID);
    }

  }

  initForm() {
    this.changePasswordForm = this.formBuilder.group({
      currentPassword: [{ value: '', disabled: true }],
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    });
  }

  generate() {
    this.showGenerate = true;
  }

  generateReport(type: string) {
    this.reportType = type;
    this.showReport = true;
  }


  DisplayCardHolders() {

    this.cardHolders = [];

    const formValue = this.displayCardHolders.value;

    this.reportType = '';
    this.showReport = false;
    this.showGenerate = false;

    this.showAccHolders = false;

    const payload = {
      Account_Subacctid: this.selectedAccountObj.THIRD_NODE_ACCT_SUBACCT_ID,
      Account_Storeid: this.selectedAccountObj.THIRD_NODE_ACCT_STORE_ID,
      Class_Department_ID: formValue.classId || this.userCardForm.value.classId
    }

    console.log("payload: ", payload)

    this.apiService.postCall(`${this.apiService.baseURL}/GetVend-AllCardHolder`, payload)
      .subscribe(data => {
        console.log(data);

        if (data.Message == "No data Available") {
          this.toastr.error(data.Message, '', {
            timeOut: 5000,
          });
        } else {
          this.cardHolders = data || [];
        }

      },
        (error) => {
          console.log(error);
          this.toastr.error(error.Message, '', {
            timeOut: 5000,
          });
        }
      );
  }

  confirmDelete(template: any, user: any) {
    this.SelectedUser = user;
    this.confirmation = "";
    this.modalRef = this.modalService.show(template, { class: 'modal-md' });
  }

  deleteCard() {

    this.modalRef.hide();

    if (this.confirmation === "" || this.confirmation === "no") {
      return;
    }

    const payload = {
      SecondNode_Storecode: this.getlogindata.Storecode,
      Account_Subacctid: this.selectedAccountObj.THIRD_NODE_ACCT_SUBACCT_ID,
      Account_Storeid: this.selectedAccountObj.THIRD_NODE_ACCT_STORE_ID,
      Class_Department_ID: this.displayCardHolders.value.classId,
      Card_Regid: this.SelectedUser.ADC_VEND_CARDHOLDR_REGID
    }

    console.log("payload: ", payload);

    this.apiService.postCall(`${this.apiService.baseURL}/SuspendVendCardHolder`, payload)
      .subscribe(data => {
        console.log(data);
        this.toastr.success(data.Message);
        this.DisplayCardHolders();
      },
        (error) => {
          console.log(error);
          this.toastr.error(error.Message, '', {
            timeOut: 5000,
          });
        }
      );

  }

  closeUserCardModal() {
    this.modalRef?.hide();
  }

  addNewUserCard(template: any) {

    this.isEditMode = false;

    this.userCardForm.reset({
      cardType: 'Student',
      gender: 'M',
      classId: ''
    });

    this.userCardForm.enable();

    this.uploadLabel = 'Choose file';
    this.base64textString = '';
    this.imagePreview = null;
    this.isImageSaved = false;

    this.modalRef = this.modalService.show(template, { class: 'modal-lg' });
  }


  addNewClassDep(template: any) {
    this.classDepName = "";
    this.modalRef = this.modalService.show(template, { class: 'modal-md' });
  }

  submitAddClassDep() {
    if (this.classDepName !== '') {

      const payload = {
        Account_Subacctid: this.selectedAccountObj.THIRD_NODE_ACCT_SUBACCT_ID,
        Account_Storeid: this.selectedAccountObj.THIRD_NODE_ACCT_STORE_ID,
        Account_Class_Dept_Name: this.classDepName
      }

      console.log("payload: ", payload)

      this.apiService.postCall(`${this.apiService.baseURL}/ADD-CLASS-DEPARTMNT`, payload)
        .subscribe(data => {
          console.log(data);

          this.toastr.success(data.Message);
          this.getClassDep(this.selectedAccountObj.THIRD_NODE_ACCT_SUBACCT_ID, this.selectedAccountObj.THIRD_NODE_ACCT_STORE_ID);
        },
          (error) => {
            console.log(error);
            this.toastr.error(error.Message, '', {
              timeOut: 5000,
            });
          }
        );

    } else {
      this.toastr.error('Please Enter a valid Class \ Departmnet Name');
    }

    this.modalRef.hide();
  }

  getClassDep(subaccid: any, storeid: any) {

    this.classDepArr = null;

    const payload = {
      Account_Subacctid: subaccid,
      Account_Storeid: storeid,
    }

    console.log("payload: ", payload)

    this.apiService.postCall(`${this.apiService.baseURL}/GetAccount-Class-dept`, payload)
      .subscribe(data => {
        console.log(data);
        this.classDepArr = data;
      },
        (error) => {
          console.log(error);
          this.toastr.error(error.Message, '', {
            timeOut: 5000,
          });
        }
      );
  }

  editUserCard(template: any, user: any) {
    this.isEditMode = true;

    this.userCardForm.patchValue({
      cardNo: user.ADC_VEND_MANUFACTR_CARDID,
      rollNo: user.ADC_VEND_ACCOUNT_INTERNL_UID,
      firstName: user.ADC_VEND_CARDHOLDR_FIRST_NAME,
      lastName: user.ADC_VEND_CARDHOLDR_LAST_NAME,
      primaryMobile: user.ADC_VEND_CARDHOLDR_PRIM_MOB_NUMBR,
      altMobile: user.ADC_VEND_CARDHOLDR_ALTRNT_MOB_NUMBR,
      email: user.ADC_VEND_CARDHOLDR_EMAILID,
      gender: user.ADC_VEND_CARDHOLDR_MALE_FLG ? 'M' : 'F',
      classId: user.Class_Department_ID || '1'
    });

    // this.userCardForm.get('cardNo')?.disable();
    this.userCardForm.get('cardType')?.disable();
    this.userCardForm.get('rollNo')?.disable();
    this.userCardForm.get('primaryMobile')?.disable();

    this.modalRef = this.modalService.show(template, { class: 'modal-lg' });
  }

  imagePreview: string | ArrayBuffer | null = null;

  submitUserCard() {

    if (this.userCardForm.invalid) {
      this.userCardForm.markAllAsTouched();
      return;
    }

    const formValue = this.userCardForm.getRawValue();
    const parentformValue = this.displayCardHolders.value;

    if (this.isEditMode) {
      const payload = {
        Account_Subacctid: this.selectedAccountObj.THIRD_NODE_ACCT_SUBACCT_ID,
        Account_Storeid: this.selectedAccountObj.THIRD_NODE_ACCT_STORE_ID,
        Class_Department_ID: parentformValue.classId,
        Card_Regid: formValue.cardNo,
        First_Name: formValue.firstName,
        Last_Name: formValue.lastName,
        Prim_Mob_Numbr: formValue.primaryMobile,
        Altrnt_Mob_Numbr: formValue.altMobile,
        Email_ID: formValue.email,
        Pic: this.base64textString
      };

      console.log("Payload for add card holder: ", payload);

      this.apiService.postCall(
        `${this.apiService.baseURL}/EditVend-CardHolder-Credentials`,
        payload
      ).subscribe(res => {
        this.toastr.success('Card updated successfully');
        this.modalRef.hide();
        this.DisplayCardHolders();
      });

    } else {
      // ===== ADD API (your existing logic) =====

      const payload = {
        Card_MUID: formValue.cardNo,
        Second_Node_Storecode: '1001090106', // need to change
        Account_Acctid: '19', // need to change
        Account_Subacctid: this.selectedAccountObj.THIRD_NODE_ACCT_SUBACCT_ID,
        Account_Storeid: this.selectedAccountObj.THIRD_NODE_ACCT_STORE_ID,
        Class_Dept_ID: parentformValue.classId,
        Card_Typeid: formValue.cardType,
        First_Name: formValue.firstName,
        Last_Name: formValue.lastName,
        Male_Flg: formValue.gender === 'M',
        Female_Flg: formValue.gender === 'F',
        Account_Internal_UID: formValue.rollNo,
        Guardian_Hus_Wife_Name: formValue.guardianName,
        Primary_Mob_Numbr: formValue.primaryMobile,
        Alternate_Mob_Numbr: formValue.altMobile,
        Email_id: formValue.email,
        Cardholder_PIC: formValue.photo
      };

      console.log("Payload for add card holder: ", payload);

      this.apiService.postCall(`${this.apiService.baseURL}/ADD_New_CARDHOLDER`, payload)
        .subscribe(data => {
          console.log(data);
          this.toastr.success(data.Message);
          this.DisplayCardHolders();
          this.modalRef.hide();
        },
          (error) => {
            console.log(error);
            this.toastr.error(error.error, '', {
              timeOut: 5000,
            });
            this.modalRef.hide();
          }
        );
    }
  }

  onFileSelect(event: any) {
    const files = event.target.files;
    const file = files[0];

    if (!file) return;

    this.uploadLabel = file.name;

    const reader = new FileReader();
    reader.onload = (e: any) => {
      const binaryString = e.target.result;
      this.base64textString = btoa(binaryString);

      this.userCardForm.patchValue({
        photo: this.base64textString
      });

      this.userCardForm.get('photo')?.updateValueAndValidity();

      this.imagePreview = `data:${file.type};base64,${this.base64textString}`;

      this.isImageSaved = true;
    };

    reader.readAsBinaryString(file);
  }

  selectedUser: any;
  userpassword: any;

  showPassword(user: any, template: any) {

    this.selectedUser = user;

    const payload = {
      Account_Subacctid: this.selectedAccountObj.THIRD_NODE_ACCT_SUBACCT_ID,
      Account_Storeid: this.selectedAccountObj.THIRD_NODE_ACCT_STORE_ID,
      CardRegid: user.ADC_VEND_CARDHOLDR_REGID
    }

    console.log("Payload: ", payload);

    this.apiService.postCall(`${this.apiService.baseURL}/GetVendPassword`, payload)
      .subscribe(data => {
        console.log(data);
        this.userpassword = data;

        this.modalRef = this.modalService.show(template, { class: 'modal-md' });

      },
        (error) => {
          console.log(error);
          this.toastr.error(error.error, '', {
            timeOut: 5000,
          });
          this.modalRef.hide();
        }
      );
  }


  openChangePassword(user: any, template: any) {

    this.selectedUser = user;
    this.submitted = false;
    this.passwordMismatch = false;

    this.initForm();

    const payload = {
      Account_Subacctid: this.selectedAccountObj.THIRD_NODE_ACCT_SUBACCT_ID,
      Account_Storeid: this.selectedAccountObj.THIRD_NODE_ACCT_STORE_ID,
      CardRegid: user.ADC_VEND_CARDHOLDR_REGID
    }

    console.log("payload: ", payload);

    this.apiService.postCall(`${this.apiService.baseURL}/GetVendPassword`, payload)
      .subscribe(data => {
        console.log(data);

        this.changePasswordForm.patchValue({
          currentPassword: data.Password
        });

      },
        (error) => {
          console.log(error);
          this.toastr.error(error.error, '', {
            timeOut: 5000,
          });
        }
      );

    this.modalRef = this.modalService.show(template, Object.assign({}, { class: 'width-720' }));
  }

  get f() {
    return this.changePasswordForm.controls;
  }

  changePassword() {
    this.submitted = true;

    if (this.changePasswordForm.invalid) return;

    const { newPassword, confirmPassword } = this.changePasswordForm.value;

    if (newPassword !== confirmPassword) {
      this.passwordMismatch = true;
      return;
    }

    this.passwordMismatch = false;

    const payload = {
      CardRegid: this.selectedUser.ADC_VEND_CARDHOLDR_REGID,
      Password: this.f.newPassword.value
    };

    console.log("Change Password Payload:", payload);

    this.apiService.postCall(`${this.apiService.baseURL}/ChangeVendPassword`, payload)
      .subscribe(data => {
        console.log(data);
        this.toastr.success(data.Message);
      },
        (error) => {
          console.log(error);
          this.toastr.error(error.error, '', {
            timeOut: 5000,
          });
        }
      );

    this.modalRef.hide();
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

    this.openSNThirdNode();

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

  openSNThirdNode() {

    const payload = {
      Cntryid: this.countryID,
      Stateid: this.stateID,
      Secnd_node_flg: false,
      Third_node_flg: true,
      Subacctid: this.subaccountid,
      Storeid: this.storeid,
      B2b_id: "jr0xpPU"
    }

    console.log("payload: ", payload)

    this.apiService.postCall(`${this.apiService.baseURL}/GetAcctNetwork`, payload)
      .subscribe(data => {
        console.log(data);
        this.thirdNodeAccArr = Array.isArray(data) ? data : [];

        console.log("Third Node Acc: ", this.thirdNodeAccArr)

      },
        (error) => {
          console.log(error);
          this.toastr.error(error.error, '', {
            timeOut: 5000,
          });
        }
      );
  }

  onAccountChange(event: any) {
    const selectedId = event.target.value;

    this.selectedAccountObj = this.thirdNodeAccArr.find(
      x => x.THIRD_NODE_ACCT_SUBACCT_ID == selectedId
    );

    console.log('Selected Object:', this.selectedAccountObj);

    this.getClassDep(this.selectedAccountObj.THIRD_NODE_ACCT_SUBACCT_ID, this.selectedAccountObj.THIRD_NODE_ACCT_STORE_ID);
  }

  viewBalance(template: any, user: any) {

    console.log("Selected user: ", user)

    const payload = {
      Card_Manufid: user.ADC_VEND_MANUFACTR_CARDID
    }

    console.log("payload: ", payload);

    this.apiService.postCall(this.apiService.baseURL + '/GetCardholderBalance', payload)
      .subscribe(data => {
        console.log(data);
        this.cardBalance = data.Balance;
      },
        (error) => {
          this.toastr.error(error, '', {
            timeOut: 5000,
          });
        });

    this.modalRef = this.modalService.show(template, Object.assign({}, { class: 'width-480' }));

  }

  viewTransactionModal(template: any, user: any) {

    this.selectedUer = user;
    this.modalRef = this.modalService.show(template, Object.assign({}, { class: 'modal-xl' }));

  }


  onTabChange(tabId: string): void {
    this.activeTabId = tabId;

    // Reset UI states
    this.showCardholderRefill = false;
    this.showCardholderSpends = false;

    if (tabId === 'tab2') {
      this.cardholderSpends = null;
    }

    if (tabId === 'tab3') {
      this.cardholderRefill = null;
    }
  }

  onSpendOnVend(): void {

    if (!this.fromDate1) {
      this.toastr.warning('Please select From Date');
      return;
    }

    this.loadingSpend = true;
    this.showCardholderSpends = false;

    const payload = {
      Cardholder_Regid: this.selectedUer.ADC_VEND_CARDHOLDR_REGID,
      Frm_Date: this.fromDate1
    };

    this.spinner.show();

    this.apiService.postCall(this.apiService.baseURL + '/GetCardholderSpends', payload)
      .subscribe(
        (data: any) => {

          this.spinner.hide();
          this.loadingSpend = false;

          if (data?.Message) {
            this.toastr.error(data.Message);
            return;
          }

          this.cardholderSpends = data || {};
          this.showCardholderSpends = true;
        },
        (error) => {
          this.spinner.hide();
          this.loadingSpend = false;
          this.toastr.error('Failed to fetch transactions');
        }
      );
  }

  onCardRefillDetails(): void {

    if (!this.fromDate2) {
      this.toastr.warning('Please select From Date');
      return;
    }

    this.loadingRefill = true;
    this.showCardholderRefill = false;

    const payload = {
      Cardholder_Regid: this.selectedUer.ADC_VEND_CARDHOLDR_REGID,
      Frm_Date: this.fromDate2
    };

    this.spinner.show();

    this.apiService.postCall(this.apiService.baseURL + '/GetCardholderRefill', payload)
      .subscribe(
        (data: any) => {

          this.spinner.hide();
          this.loadingRefill = false;

          if (data?.Message) {
            this.toastr.error(data.Message);
            return;
          }

          this.cardholderRefill = data || {};
          this.showCardholderRefill = true;
        },
        (error) => {
          this.spinner.hide();
          this.loadingRefill = false;
          this.toastr.error('Failed to fetch refill data');
        }
      );
  }

}
