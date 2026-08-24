import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "ngx-bootstrap/modal";
import * as i2 from "@angular/forms";
import * as i3 from "src/app/services/api.service";
import * as i4 from "ngx-toastr";
import * as i5 from "@angular/common";
import * as i6 from "../../../../../commonComponent/country-state-city-pin/country-state-city-pin.component";
function AddNewPhysicalStoreComponent_div_61_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 63);
    i0.ɵɵelement(1, "input", 64);
    i0.ɵɵelementEnd();
} }
function AddNewPhysicalStoreComponent_div_77_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 63);
    i0.ɵɵelement(1, "input", 65);
    i0.ɵɵelementEnd();
} }
function AddNewPhysicalStoreComponent_div_88_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 71)(1, "div", 58)(2, "input", 72);
    i0.ɵɵlistener("change", function AddNewPhysicalStoreComponent_div_88_div_11_Template_input_change_2_listener($event) { i0.ɵɵrestoreView(_r9); const ctx_r8 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r8.onChangeControl($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "label", 30);
    i0.ɵɵtext(4, " Centrally Controlled ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "div", 60)(6, "input", 73);
    i0.ɵɵlistener("change", function AddNewPhysicalStoreComponent_div_88_div_11_Template_input_change_6_listener($event) { i0.ɵɵrestoreView(_r9); const ctx_r10 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r10.onChangeControl($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "label", 30);
    i0.ɵɵtext(8, " Solo Controlled ");
    i0.ɵɵelementEnd()()();
} }
function AddNewPhysicalStoreComponent_div_88_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 66)(1, "div", 8)(2, "label");
    i0.ɵɵtext(3, "Store Replica");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "select", 67);
    i0.ɵɵlistener("change", function AddNewPhysicalStoreComponent_div_88_Template_select_change_4_listener($event) { i0.ɵɵrestoreView(_r12); const ctx_r11 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r11.onChangeReplica($event)); });
    i0.ɵɵelementStart(5, "option", 18);
    i0.ɵɵtext(6, "Select");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "option", 68);
    i0.ɵɵtext(8, "Required");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "option", 69);
    i0.ɵɵtext(10, "Not Required");
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(11, AddNewPhysicalStoreComponent_div_88_div_11_Template, 9, 0, "div", 70);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(11);
    i0.ɵɵproperty("ngIf", ctx_r2.requiredReplica);
} }
function AddNewPhysicalStoreComponent_div_94_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 63)(1, "select", 74);
    i0.ɵɵlistener("change", function AddNewPhysicalStoreComponent_div_94_Template_select_change_1_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r13 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r13.domainChange($event)); });
    i0.ɵɵelementStart(2, "option", 75);
    i0.ɵɵtext(3, "Select");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "option", 19);
    i0.ɵɵtext(5, "All-Day Liquor");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "option", 20);
    i0.ɵɵtext(7, "All-Day Kitchen");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "option", 21);
    i0.ɵɵtext(9, "All-Day Kirana");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "option", 22);
    i0.ɵɵtext(11, "All-Day Fashion");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "option", 23);
    i0.ɵɵtext(13, "All-Day Electronics & Large Appliances");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "option", 24);
    i0.ɵɵtext(15, "All-Day Home & Office Furnitures");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "option", 76);
    i0.ɵɵtext(17, "All-Day Pharma & Medicos");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "option", 77);
    i0.ɵɵtext(19, "All-Day Home D\u00E9cor & Furnishings");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "option", 78);
    i0.ɵɵtext(21, "All-Day Pet Shoppe & Pet Care");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "option", 79);
    i0.ɵɵtext(23, "All-Day Garden & Outdoor");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "option", 80);
    i0.ɵɵtext(25, "All-Day Food & Agro Care");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "option", 81);
    i0.ɵɵtext(27, "All-Day New & Used Automobile");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "option", 82);
    i0.ɵɵtext(29, "All-Day Health & Medical Equipments ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "option", 83);
    i0.ɵɵtext(31, "All-Day Home Office & Automobile Services");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(32, "option", 84);
    i0.ɵɵtext(33, "All-Day Automobile Spare Parts ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(34, "option", 85);
    i0.ɵɵtext(35, "All-Day Kitchen & Dining ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(36, "option", 86);
    i0.ɵɵtext(37, "All-Day Electrical & Lighting");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(38, "option", 87);
    i0.ɵɵtext(39, "All-Day Mobile & Entertainment Gadgets ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(40, "option", 88);
    i0.ɵɵtext(41, "All-Day Sanitary Paints & Furnishing");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(42, "option", 89);
    i0.ɵɵtext(43, "All-Day De-Evento ");
    i0.ɵɵelementEnd()()();
} }
function AddNewPhysicalStoreComponent_div_127_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 90);
    i0.ɵɵelementContainerStart(1);
    i0.ɵɵelement(2, "img", 91);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("src", "data:image/jpeg;base64," + ctx_r4.base64textString, i0.ɵɵsanitizeUrl);
} }
function AddNewPhysicalStoreComponent_div_136_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 90);
    i0.ɵɵelementContainerStart(1);
    i0.ɵɵelement(2, "img", 91);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("src", "data:image/jpeg;base64," + ctx_r5.base64textString1, i0.ɵɵsanitizeUrl);
} }
function AddNewPhysicalStoreComponent_div_150_div_46_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 90);
    i0.ɵɵelementContainerStart(1);
    i0.ɵɵelement(2, "img", 91);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r15 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("src", "data:image/jpeg;base64," + ctx_r15.base64textString2, i0.ɵɵsanitizeUrl);
} }
function AddNewPhysicalStoreComponent_div_150_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 92)(1, "div", 6)(2, "div", 40)(3, "div", 8)(4, "label", 93);
    i0.ɵɵtext(5, "Name of Bank");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(6, "input", 94);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "div", 40)(8, "div", 8)(9, "label", 95);
    i0.ɵɵtext(10, "IFSC Code");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(11, "input", 96);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "div", 40)(13, "div", 8)(14, "label", 97);
    i0.ɵɵtext(15, "Branch Addess");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(16, "input", 98);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(17, "div", 40)(18, "div", 8)(19, "label", 99);
    i0.ɵɵtext(20, "Bank Account Number");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(21, "input", 100);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(22, "div", 40)(23, "div", 8)(24, "label", 101);
    i0.ɵɵtext(25, "Re-enter Account Number");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(26, "input", 102);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(27, "div", 40)(28, "div", 8)(29, "label");
    i0.ɵɵtext(30, "Account Type");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(31, "select", 103)(32, "option", 18);
    i0.ɵɵtext(33, "Select");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(34, "option");
    i0.ɵɵtext(35, "Saving Account");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(36, "option");
    i0.ɵɵtext(37, "Current Account");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(38, "div", 104)(39, "fieldset", 8)(40, "label");
    i0.ɵɵtext(41, "Attached Cancel Cheque");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(42, "div", 49)(43, "input", 105);
    i0.ɵɵlistener("change", function AddNewPhysicalStoreComponent_div_150_Template_input_change_43_listener($event) { i0.ɵɵrestoreView(_r17); const ctx_r16 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r16.onSelectedFile2($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(44, "label", 54);
    i0.ɵɵtext(45);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(46, AddNewPhysicalStoreComponent_div_150_div_46_Template, 3, 1, "div", 52);
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵadvance(45);
    i0.ɵɵtextInterpolate(ctx_r6.uploadLabel2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r6.isImageSaved2);
} }
export class AddNewPhysicalStoreComponent {
    constructor(bsModalRef, options, formBuilder, apiService, toastr) {
        this.bsModalRef = bsModalRef;
        this.options = options;
        this.formBuilder = formBuilder;
        this.apiService = apiService;
        this.toastr = toastr;
        console.log(this.options.initialState);
        this.getModalData = this.options.initialState;
        this.domainid = this.apiService.requiredLoginData.domainid;
        console.log(this.domainid);
    }
    ngOnInit() {
        this.uploadLabel = "No file choosen";
        this.uploadLabel1 = "No file choosen";
        this.uploadLabel2 = "No file choosen";
        this.addStoreForm = this.formBuilder.group({
            DomainId: ['', Validators.required],
            Country: ['', Validators.required],
            State: ['', Validators.required],
            City: ['', Validators.required],
            PinCode: ['', Validators.required],
            RETAIL_STORE_NAME: ['', Validators.required],
            RETAIL_STORE_ADDRESS: ['', Validators.required],
            RETAIL_CONTACT_FIRST_NAME: ['', Validators.required],
            RETAIL_CONTACT_LAST_NAME: ['', Validators.required],
            RETAIL_CONTACT_MOBILE_MUMBR: ['', Validators.required],
            RETAIL_CONTACT_EMAIL_ID: ['', Validators.required],
            RETAIL_CONTACT_PHOTO_IMAGE: ['', Validators.required],
            RETAIL_CONTACT_KYC_PHOTO_ID_IMAGE: ['', Validators.required],
            RETAIl_STORE_BANK_NAME: ['', Validators.required],
            RETAIL_STORE_BANK_BRANCH_ADDRESS: ['', Validators.required],
            RETAIl_STORE_BANK_IFSC_NUMBR: ['', Validators.required],
            RETAIL_STORE_BANK_ACCOUNT_TYPE: ['', Validators.required],
            RETAIl_STORE_BANK_ACCOUNT_NUMBR: ['', Validators.required],
            RETAIL_STORE_BANK_CANCELLED_CHEQUE_IMAGE: [''],
            RETAIL_STORE_OPERATE_ON_SAME_GSTIN_FLG: ['', Validators.required],
            RETAIL_STORE_OPERATE_ON_DIFFERENT_GSTIN_FLG: ['', Validators.required],
            RETAIL_STORE_GSTIN_NUMBR: ['', Validators.required],
            RETAIl_STORE_LICENSE_NO: ['', Validators.required],
            RETAIL_STORE_IN_SAME_PERIMETRIC_AREA_AS_PRIMARY_STORE_FLG: ['', Validators.required],
            RETAIL_STORE_DOMAIN_ID: ['', Validators.required],
            // accountType: [true, ''],
            accountType: ['', Validators.required],
            officeType: ['Select', Validators.required],
            storeReplica: ['Select', Validators.required]
        });
    }
    receiveCountryId($event) {
        this.countryID = $event;
    }
    receiveStateId($event) {
        this.stateID = $event;
    }
    receiveCityId($event) {
        this.cityID = $event;
    }
    receivePinId($event) {
        this.pinID = $event;
    }
    onChangegst(e) {
        this.gsttype = e.target.value;
        console.log(this.gsttype);
    }
    onChangelicense(e) {
        this.licensetype = e.target.value;
    }
    onChangeDomain(e) {
        this.domaintype = e.target.value;
    }
    onChangeAccount(e) {
        //this.accounttype= e.target.value;
        this.accounttype = this.addStoreForm.value.accountType;
    }
    onChangeReplica(e) {
        this.replicaValue = this.addStoreForm.value.storeReplica;
        if (this.replicaValue == 'Required') {
            this.requiredReplica = true;
            this.notrequiredReplica = false;
            // this.addStoreForm.value.RETAIL_STORE_REPLICA_REQUIRED_FLG = true;
            // this.addStoreForm.value.RETAIL_STORE_REPLICA_NOTREQUIRED_FLG = false;
        }
        else {
            this.requiredReplica = false;
            this.notrequiredReplica = true;
            // this.addStoreForm.value.RETAIL_STORE_REPLICA_REQUIRED_FLG = false;
            // this.addStoreForm.value.RETAIL_STORE_REPLICA_NOTREQUIRED_FLG = true;
        }
    }
    domainChange(e) {
        this.domainid = this.addStoreForm.value.RETAIL_STORE_DOMAIN_ID;
        this.domainName = e.target.options[e.target.options.selectedIndex].text;
        console.log(this.domainid);
    }
    officeType(e) {
        console.log(e.target.value);
        this.officeTypeValue = e.target.value;
    }
    onChangeControl(e) {
        this.controlType = e.target.value;
    }
    onSelectedFile(event) {
        var files = event.target.files;
        var file = files[0];
        var filename = files[0].name;
        this.uploadLabel = filename;
        if (files && file) {
            var reader = new FileReader();
            reader.onload = this._handleReaderLoaded.bind(this);
            reader.readAsBinaryString(file);
        }
    }
    _handleReaderLoaded(readerEvt) {
        let binaryString = readerEvt.target.result;
        this.base64textString = btoa(binaryString);
        console.log(this.base64textString);
        this.isImageSaved = true;
    }
    onSelectedFile1(event1) {
        var files1 = event1.target.files;
        var file1 = files1[0];
        var filename = files1[0].name;
        this.uploadLabel1 = filename;
        if (files1 && file1) {
            var reader = new FileReader();
            reader.onload = this._handleReaderLoaded1.bind(this);
            reader.readAsBinaryString(file1);
        }
    }
    _handleReaderLoaded1(readerEvt1) {
        let binaryString1 = readerEvt1.target.result;
        this.base64textString1 = btoa(binaryString1);
        console.log(this.base64textString1);
        this.isImageSaved1 = true;
    }
    onSelectedFile2(event2) {
        var files2 = event2.target.files;
        var file2 = files2[0];
        var filename = files2[0].name;
        this.uploadLabel2 = filename;
        if (files2 && file2) {
            var reader = new FileReader();
            reader.onload = this._handleReaderLoaded2.bind(this);
            reader.readAsBinaryString(file2);
        }
    }
    _handleReaderLoaded2(readerEvt2) {
        let binaryString2 = readerEvt2.target.result;
        this.base64textString2 = btoa(binaryString2);
        console.log(this.base64textString2);
        this.isImageSaved2 = true;
    }
    addPhysicalStore() {
        if (this.controlType == 1) {
            this.c_control = true;
            this.s_control = false;
        }
        if (this.controlType == 0) {
            this.c_control = false;
            this.s_control = true;
        }
        if (this.officeTypeValue == 1) {
            this.godown = true;
            this.branchOffice = false;
            this.franchisee = false;
            this.stockist = false;
            this.thirdParty = false;
            this.factoryOutlet = false;
        }
        else if (this.officeTypeValue == 2) {
            this.godown = false;
            this.branchOffice = true;
            this.franchisee = false;
            this.stockist = false;
            this.thirdParty = false;
            this.factoryOutlet = false;
        }
        else if (this.officeTypeValue == 3) {
            this.godown = false;
            this.branchOffice = false;
            this.franchisee = true;
            this.stockist = false;
            this.thirdParty = false;
            this.factoryOutlet = false;
        }
        else if (this.officeTypeValue == 4) {
            this.godown = false;
            this.branchOffice = false;
            this.franchisee = false;
            this.stockist = true;
            this.thirdParty = false;
            this.factoryOutlet = false;
        }
        else if (this.officeTypeValue == 5) {
            this.godown = false;
            this.branchOffice = false;
            this.franchisee = false;
            this.stockist = false;
            this.thirdParty = true;
            this.factoryOutlet = false;
        }
        else if (this.officeTypeValue == 6) {
            this.godown = false;
            this.branchOffice = false;
            this.franchisee = false;
            this.stockist = false;
            this.thirdParty = false;
            this.factoryOutlet = true;
        }
        if (this.gsttype == 0) {
            this.addStoreForm.value.RETAIL_STORE_GSTIN_NUMBR = null;
            this.sameGstnFlag = true;
            this.otherGstnFlag = false;
        }
        if (this.gsttype == 1) {
            this.sameGstnFlag = false;
            this.otherGstnFlag = true;
        }
        if (this.licensetype == 0) {
            this.addStoreForm.value.RETAIl_STORE_LICENSE_NO = null;
            this.sameLicenseFlag = true;
            this.otherLicenseFlag = false;
        }
        if (this.licensetype == 1) {
            this.sameLicenseFlag = false;
            this.otherLicenseFlag = true;
        }
        if (this.domaintype == 1) {
            this.domainid = this.domainid;
            this.same_domainFlag = true;
            this.diff_domainFlag = false;
        }
        if (this.domaintype == 0) {
            this.domainid = this.addStoreForm.value.RETAIL_STORE_DOMAIN_ID;
            this.same_domainFlag = false;
            this.diff_domainFlag = true;
            this.addStoreForm.value.RETAIL_STORE_REPLICA_REQUIRED_FLG = false;
            this.addStoreForm.value.RETAIL_STORE_REPLICA_NOTREQUIRED_FLG = false;
            this.c_control = false;
            this.s_control = false;
        }
        if (this.addStoreForm.value.accountType == true) {
            this.sameAccountType = true;
            this.otherAccountType = false;
            this.addStoreForm.value.RETAIl_STORE_BANK_NAME = null;
            this.addStoreForm.value.RETAIl_STORE_BANK_IFSC_NUMBR = null;
            this.addStoreForm.value.RETAIL_STORE_BANK_BRANCH_ADDRESS = null;
            this.addStoreForm.value.RETAIl_STORE_BANK_ACCOUNT_NUMBR = null;
            this.addStoreForm.value.RETAIL_STORE_BANK_ACCOUNT_TYPE = null;
            this.addStoreForm.value.RETAIL_STORE_BANK_CANCELLED_CHEQUE_IMAGE = null;
        }
        if (this.addStoreForm.value.accountType == false) {
            this.sameAccountType = false;
            this.otherAccountType = true;
        }
        let addPhysicalStoreData = {
            RETAIL_ACCT_ID: this.getModalData.accountID,
            RETAIL_SUBACCT_ID: this.getModalData.subAccountID,
            RETAIL_STORE_NAME: this.addStoreForm.value.RETAIL_STORE_NAME,
            RETAIL_STORE_IN_SAME_PERIMETRIC_AREA_AS_PRIMARY_STORE_FLG: false,
            RETAIL_STORE_ADDRESS: this.addStoreForm.value.RETAIL_STORE_ADDRESS,
            RETAIL_STORE_COUNTRY: this.countryID,
            RETAIL_STORE_STATE: this.stateID,
            RETAIL_STORE_CITY: this.cityID,
            RETAIL_STORE_PINCODE: this.pinID,
            RETAIl_STORE_OFFICE_TYPE_BRANCH_STORE_FLAG: this.branchOffice,
            RETAIL_STORE_OFFICE_TYPE_FRANCHISEE_STORE_FLAG: this.franchisee,
            RETAIL_STORE_OFFICE_TYPE_FACTORY_OUTLET_FLAG: this.factoryOutlet,
            RETAIL_STORE_OFFICE_TYPE_FACTORY_WAREHOUSE_FLAG: this.godown,
            RETAIl_STORE_OFFICE_TYPE_STOCKIST_DISTRIBUTOR_FLG: this.stockist,
            RETAIL_STORE_OFFICE_TYPE_THIRD_PARTY_RETAIL_STORE_FLG: this.thirdParty,
            RETAIL_STORE_OPERATE_ON_SAME_GSTIN_FLG: this.sameGstnFlag,
            RETAIL_STORE_OPERATE_ON_DIFFERENT_GSTIN_FLG: this.otherGstnFlag,
            RETAIL_STORE_GSTIN_NUMBR: this.addStoreForm.value.RETAIL_STORE_GSTIN_NUMBR,
            RETAIl_STORE_OPERATE_ON_SAME_LICENSE_NO_FLG: this.sameLicenseFlag,
            RETAIL_STORE_OPERATE_ON_DIFFERENT_LICENSE_NO_FLG: this.otherLicenseFlag,
            RETAIl_STORE_LICENSE_NO: this.addStoreForm.value.RETAIl_STORE_LICENSE_NO,
            RETAIL_STORE_ON_SAME_DOMAIN_FLG: this.same_domainFlag,
            RETAIL_STORE_ON_DIFFERENT_DOMAIN_FLG: this.diff_domainFlag,
            RETAIL_STORE_DOMAIN_ID: this.domainid,
            RETAIL_STORE_REPLICA_REQUIRED_FLG: this.requiredReplica,
            RETAIL_STORE_REPLICA_NOTREQUIRED_FLG: this.notrequiredReplica,
            RETAIL_STORE_CENTRALLY_CONTROLLED_FLG: this.c_control,
            RETAIL_STORE_SOLO_CONTROLLED_FLG: this.s_control,
            RETAIL_CONTACT_FIRST_NAME: this.addStoreForm.value.RETAIL_CONTACT_FIRST_NAME,
            RETAIL_CONTACT_LAST_NAME: this.addStoreForm.value.RETAIL_CONTACT_LAST_NAME,
            RETAIL_CONTACT_MOBILE_MUMBR: this.addStoreForm.value.RETAIL_CONTACT_MOBILE_MUMBR,
            RETAIL_CONTACT_EMAIL_ID: this.addStoreForm.value.RETAIL_CONTACT_EMAIL_ID,
            RETAIL_CONTACT_PHOTO_IMAGE: this.base64textString,
            RETAIL_CONTACT_KYC_PHOTO_ID_IMAGE: this.base64textString1,
            RETAIl_STORE_ON_SAME_BANK_ACCOUNT_FLG: this.sameAccountType,
            RETAIL_STORE_ON_OTHER_BANK_ACCOUNT_FLG: this.otherAccountType,
            RETAIl_STORE_BANK_NAME: this.addStoreForm.value.RETAIl_STORE_BANK_NAME,
            RETAIL_STORE_BANK_BRANCH_ADDRESS: this.addStoreForm.value.RETAIL_STORE_BANK_BRANCH_ADDRESS,
            RETAIl_STORE_BANK_IFSC_NUMBR: this.addStoreForm.value.RETAIl_STORE_BANK_IFSC_NUMBR,
            RETAIL_STORE_BANK_ACCOUNT_TYPE: this.addStoreForm.value.RETAIL_STORE_BANK_ACCOUNT_TYPE,
            RETAIl_STORE_BANK_ACCOUNT_NUMBR: this.addStoreForm.value.RETAIl_STORE_BANK_ACCOUNT_NUMBR,
            RETAIL_STORE_BANK_CANCELLED_CHEQUE_IMAGE: this.base64textString2 ? this.base64textString2 : null
        };
        console.log(addPhysicalStoreData);
        this.apiService.postCall(this.apiService.baseURL + '/AddPhysicalStore', addPhysicalStoreData)
            .subscribe(data => {
            console.log(data);
            this.toastr.success(data, '', {
                timeOut: 5000,
            });
        }, (error) => {
            console.log(error);
            this.toastr.error(error.error, '', {
                timeOut: 5000,
            });
        });
    }
}
AddNewPhysicalStoreComponent.ɵfac = function AddNewPhysicalStoreComponent_Factory(t) { return new (t || AddNewPhysicalStoreComponent)(i0.ɵɵdirectiveInject(i1.BsModalRef), i0.ɵɵdirectiveInject(i1.ModalOptions), i0.ɵɵdirectiveInject(i2.FormBuilder), i0.ɵɵdirectiveInject(i3.ApiService), i0.ɵɵdirectiveInject(i4.ToastrService)); };
AddNewPhysicalStoreComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AddNewPhysicalStoreComponent, selectors: [["app-add-new-physical-store"]], decls: 155, vars: 12, consts: [[1, "modal-header"], [1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "btn-close", "close", "pull-right", 3, "click"], ["aria-hidden", "true", 1, "visually-hidden"], [1, "modal-body"], [3, "formGroup"], [1, "row"], [1, "col-md-6"], [1, "form-group"], ["for", "store"], ["type", "text", "formControlName", "RETAIL_STORE_NAME", "id", "store", 1, "form-control"], [1, "d-flex", "pt-1"], [1, "form-check"], ["formControlName", "RETAIL_STORE_IN_SAME_PERIMETRIC_AREA_AS_PRIMARY_STORE_FLG", "type", "checkbox", "value", "", "id", "samePerimetric", 1, "form-check-input"], ["for", "samePerimetric", 1, "form-check-label"], ["type", "text", "formControlName", "RETAIL_STORE_ADDRESS", "id", "store", 1, "form-control"], [3, "countryEvent", "stateEvent", "cityEvent", "pincodeEvent"], ["formControlName", "officeType", 1, "form-control", 3, "change"], ["selected", ""], ["value", "1"], ["value", "2"], ["value", "3"], ["value", "4"], ["value", "5"], ["value", "6"], [1, "row", "inner-bg"], [1, "col-md-12"], [1, "form-group", "mb-0", "mt-2"], [1, "form-check", "pb-2"], ["type", "radio", "value", "0", "name", "GSTIN", 1, "form-check-input", 3, "change"], [1, "form-check-label"], ["type", "radio", "value", "1", "name", "GSTIN", 1, "form-check-input", 3, "change"], ["class", "ml-2 pb-2", 4, "ngIf"], ["type", "radio", "name", "license", "value", "0", 1, "form-check-input", 3, "change"], ["type", "radio", "name", "license", "value", "1", 1, "form-check-input", 3, "change"], ["type", "radio", "name", "domain", "value", "1", 1, "form-check-input", 3, "change"], ["class", "same-domain-child", 4, "ngIf"], ["type", "radio", "name", "domain", "value", "0", 1, "form-check-input", 3, "change"], [1, "row", "main-conact-form"], [1, "col-md-12", "mt-3", "mb-1"], [1, "col-md-4"], ["for", "fname"], ["formControlName", "RETAIL_CONTACT_FIRST_NAME", "type", "text", "id", "fname", 1, "form-control"], ["for", "lname"], ["formControlName", "RETAIL_CONTACT_LAST_NAME", "type", "text", "id", "lname", 1, "form-control"], ["for", "pnumber"], ["formControlName", "RETAIL_CONTACT_MOBILE_MUMBR", "type", "text", "id", "pnumber", 1, "form-control"], ["for", "email"], ["formControlName", "RETAIL_CONTACT_EMAIL_ID", "type", "text", "id", "email", 1, "form-control"], [1, "custom-file"], ["formControlName", "RETAIL_CONTACT_PHOTO_IMAGE", "type", "file", "id", "personPhoto", 1, "custom-file-input", 3, "change"], ["for", "personPhoto", 1, "custom-file-label"], ["class", "img-space", 4, "ngIf"], ["formControlName", "RETAIL_CONTACT_KYC_PHOTO_ID_IMAGE", "type", "file", "id", "kycphoto", 1, "custom-file-input", 3, "change"], ["for", "kycphoto", 1, "custom-file-label"], [1, "row", "main-conact-form", "mt-3"], [1, "col-md-12", "mb-1"], [1, "d-flex", "col-md-12", "mb-3"], [1, "form-check", "pr-4"], ["formControlName", "accountType", "type", "radio", "name", "accountType", 1, "form-check-input", 3, "value", "change"], [1, "form-check", "pl-4"], ["class", "bankDetails", 4, "ngIf"], [1, "btn", "custom-btn", "add-store-btn", 3, "click"], [1, "ml-2", "pb-2"], ["type", "text", "formControlName", "RETAIL_STORE_GSTIN_NUMBR", 1, "form-control"], ["type", "text", "formControlName", "RETAIl_STORE_LICENSE_NO", 1, "form-control"], [1, "same-domain-child"], ["formControlName", "storeReplica", 1, "form-control", 3, "change"], ["value", "Required"], ["value", "Not Required"], ["class", "d-flex", 4, "ngIf"], [1, "d-flex"], ["type", "radio", "name", "control", "value", "1", 1, "form-check-input", 3, "change"], ["type", "radio", "name", "control", "value", "0", 1, "form-check-input", 3, "change"], ["formControlName", "RETAIL_STORE_DOMAIN_ID", 1, "form-control", 3, "change"], ["value", ""], ["value", "7"], ["value", "8"], ["value", "9"], ["value", "10"], ["value", "11"], ["value", "12"], ["value", "13"], ["value", "14"], ["value", "15"], ["value", "16"], ["value", "17"], ["value", "18"], ["value", "19"], ["value", "20"], [1, "img-space"], [3, "src"], [1, "bankDetails"], ["for", "bankname"], ["formControlName", "RETAIl_STORE_BANK_NAME", "type", "text", "id", "bankname", 1, "form-control"], ["for", "ifsc"], ["formControlName", "RETAIl_STORE_BANK_IFSC_NUMBR", "type", "text", "id", "ifsc", 1, "form-control"], ["for", "baddress"], ["formControlName", "RETAIL_STORE_BANK_BRANCH_ADDRESS", "type", "text", "id", "baddress", 1, "form-control"], ["for", "ban"], ["formControlName", "RETAIl_STORE_BANK_ACCOUNT_NUMBR", "type", "text", "id", "ban", 1, "form-control"], ["for", "ran1"], ["formControlName", "RETAIl_STORE_BANK_ACCOUNT_NUMBR", "type", "text", "id", "ran1", 1, "form-control"], ["formControlName", "RETAIL_STORE_BANK_ACCOUNT_TYPE", 1, "form-control"], [1, "col-md-8"], ["formControlName", "RETAIL_STORE_BANK_CANCELLED_CHEQUE_IMAGE", "type", "file", "id", "kycphoto", 1, "custom-file-input", 3, "change"]], template: function AddNewPhysicalStoreComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "h4", 1);
        i0.ɵɵtext(2, "Add new Physical Store");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "button", 2);
        i0.ɵɵlistener("click", function AddNewPhysicalStoreComponent_Template_button_click_3_listener() { return ctx.bsModalRef.hide(); });
        i0.ɵɵelementStart(4, "span", 3);
        i0.ɵɵtext(5, "\u00D7");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(6, "div", 4)(7, "form", 5)(8, "div", 6)(9, "div", 7)(10, "div", 8)(11, "label", 9);
        i0.ɵɵtext(12, "Office/Store Name");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(13, "input", 10);
        i0.ɵɵelementStart(14, "div", 11)(15, "div", 12);
        i0.ɵɵelement(16, "input", 13);
        i0.ɵɵelementStart(17, "label", 14)(18, "small");
        i0.ɵɵtext(19, "Store on same Perimetric Area as of Primary Store");
        i0.ɵɵelementEnd()()()()()();
        i0.ɵɵelementStart(20, "div", 7)(21, "div", 8)(22, "label", 9);
        i0.ɵɵtext(23, "Office/Store Address");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(24, "input", 15);
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(25, "country-state-city-pin", 16);
        i0.ɵɵlistener("countryEvent", function AddNewPhysicalStoreComponent_Template_country_state_city_pin_countryEvent_25_listener($event) { return ctx.receiveCountryId($event); })("stateEvent", function AddNewPhysicalStoreComponent_Template_country_state_city_pin_stateEvent_25_listener($event) { return ctx.receiveStateId($event); })("cityEvent", function AddNewPhysicalStoreComponent_Template_country_state_city_pin_cityEvent_25_listener($event) { return ctx.receiveCityId($event); })("pincodeEvent", function AddNewPhysicalStoreComponent_Template_country_state_city_pin_pincodeEvent_25_listener($event) { return ctx.receivePinId($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(26, "div", 6)(27, "div", 7)(28, "div", 8)(29, "label");
        i0.ɵɵtext(30, "Type of Office");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(31, "select", 17);
        i0.ɵɵlistener("change", function AddNewPhysicalStoreComponent_Template_select_change_31_listener($event) { return ctx.officeType($event); });
        i0.ɵɵelementStart(32, "option", 18);
        i0.ɵɵtext(33, "Select");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(34, "option", 19);
        i0.ɵɵtext(35, "Godown");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(36, "option", 20);
        i0.ɵɵtext(37, "Branch Office");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(38, "option", 21);
        i0.ɵɵtext(39, "Franchisee");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(40, "option", 22);
        i0.ɵɵtext(41, "Stockist/Distributor");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(42, "option", 23);
        i0.ɵɵtext(43, "Direct Third Party Retail Store");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(44, "option", 24);
        i0.ɵɵtext(45, "Factory Outlet");
        i0.ɵɵelementEnd()()()()();
        i0.ɵɵelementStart(46, "div", 25)(47, "div", 26)(48, "div", 27)(49, "label");
        i0.ɵɵtext(50, "GSTN");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(51, "div", 7)(52, "div", 28)(53, "input", 29);
        i0.ɵɵlistener("change", function AddNewPhysicalStoreComponent_Template_input_change_53_listener($event) { return ctx.onChangegst($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(54, "label", 30);
        i0.ɵɵtext(55, " Operate on Same GSTIN ");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(56, "div", 7)(57, "div", 28)(58, "input", 31);
        i0.ɵɵlistener("change", function AddNewPhysicalStoreComponent_Template_input_change_58_listener($event) { return ctx.onChangegst($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(59, "label", 30);
        i0.ɵɵtext(60, " Operate on Other GSTIN ");
        i0.ɵɵelementEnd()();
        i0.ɵɵtemplate(61, AddNewPhysicalStoreComponent_div_61_Template, 2, 0, "div", 32);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(62, "div", 25)(63, "div", 26)(64, "div", 27)(65, "label");
        i0.ɵɵtext(66, "License");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(67, "div", 7)(68, "div", 28)(69, "input", 33);
        i0.ɵɵlistener("change", function AddNewPhysicalStoreComponent_Template_input_change_69_listener($event) { return ctx.onChangelicense($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(70, "label", 30);
        i0.ɵɵtext(71, " Operate on Same License Number ");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(72, "div", 7)(73, "div", 28)(74, "input", 34);
        i0.ɵɵlistener("change", function AddNewPhysicalStoreComponent_Template_input_change_74_listener($event) { return ctx.onChangelicense($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(75, "label", 30);
        i0.ɵɵtext(76, " Operate on Other License Number ");
        i0.ɵɵelementEnd()();
        i0.ɵɵtemplate(77, AddNewPhysicalStoreComponent_div_77_Template, 2, 0, "div", 32);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(78, "div", 25)(79, "div", 26)(80, "div", 27)(81, "label");
        i0.ɵɵtext(82, "Domain");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(83, "div", 7)(84, "div", 28)(85, "input", 35);
        i0.ɵɵlistener("change", function AddNewPhysicalStoreComponent_Template_input_change_85_listener($event) { return ctx.onChangeDomain($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(86, "label", 30);
        i0.ɵɵtext(87, " Store on Same Domain ");
        i0.ɵɵelementEnd()();
        i0.ɵɵtemplate(88, AddNewPhysicalStoreComponent_div_88_Template, 12, 1, "div", 36);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(89, "div", 7)(90, "div", 28)(91, "input", 37);
        i0.ɵɵlistener("change", function AddNewPhysicalStoreComponent_Template_input_change_91_listener($event) { return ctx.onChangeDomain($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(92, "label", 30);
        i0.ɵɵtext(93, " Store on Different Domain ");
        i0.ɵɵelementEnd()();
        i0.ɵɵtemplate(94, AddNewPhysicalStoreComponent_div_94_Template, 44, 0, "div", 32);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(95, "div", 38)(96, "div", 39)(97, "h6");
        i0.ɵɵtext(98, "Main Contact Person");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(99, "div", 40)(100, "div", 8)(101, "label", 41);
        i0.ɵɵtext(102, "First Name");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(103, "input", 42);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(104, "div", 40)(105, "div", 8)(106, "label", 43);
        i0.ɵɵtext(107, "Last Name");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(108, "input", 44);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(109, "div", 40)(110, "div", 8)(111, "label", 45);
        i0.ɵɵtext(112, "Primary Mobile Number");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(113, "input", 46);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(114, "div", 7)(115, "div", 8)(116, "label", 47);
        i0.ɵɵtext(117, "Email");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(118, "input", 48);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(119, "div", 7)(120, "fieldset", 8)(121, "label");
        i0.ɵɵtext(122, "Person Photo");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(123, "div", 49)(124, "input", 50);
        i0.ɵɵlistener("change", function AddNewPhysicalStoreComponent_Template_input_change_124_listener($event) { return ctx.onSelectedFile($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(125, "label", 51);
        i0.ɵɵtext(126);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(127, AddNewPhysicalStoreComponent_div_127_Template, 3, 1, "div", 52);
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(128, "div", 7)(129, "fieldset", 8)(130, "label");
        i0.ɵɵtext(131, "Kyc Photo");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(132, "div", 49)(133, "input", 53);
        i0.ɵɵlistener("change", function AddNewPhysicalStoreComponent_Template_input_change_133_listener($event) { return ctx.onSelectedFile1($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(134, "label", 54);
        i0.ɵɵtext(135);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(136, AddNewPhysicalStoreComponent_div_136_Template, 3, 1, "div", 52);
        i0.ɵɵelementEnd()()()();
        i0.ɵɵelementStart(137, "div", 55)(138, "div", 56)(139, "h5");
        i0.ɵɵtext(140, "Bank Account Details");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(141, "div", 57)(142, "div", 58)(143, "input", 59);
        i0.ɵɵlistener("change", function AddNewPhysicalStoreComponent_Template_input_change_143_listener($event) { return ctx.onChangeAccount($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(144, "label", 30);
        i0.ɵɵtext(145, " Same as Sub-Account ");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(146, "div", 60)(147, "input", 59);
        i0.ɵɵlistener("change", function AddNewPhysicalStoreComponent_Template_input_change_147_listener($event) { return ctx.onChangeAccount($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(148, "label", 30);
        i0.ɵɵtext(149, " Different Bank Account ");
        i0.ɵɵelementEnd()()()();
        i0.ɵɵtemplate(150, AddNewPhysicalStoreComponent_div_150_Template, 47, 2, "div", 61);
        i0.ɵɵelementStart(151, "div", 6)(152, "div", 26)(153, "button", 62);
        i0.ɵɵlistener("click", function AddNewPhysicalStoreComponent_Template_button_click_153_listener() { return ctx.addPhysicalStore(); });
        i0.ɵɵtext(154, "Add Store");
        i0.ɵɵelementEnd()()()()();
    } if (rf & 2) {
        i0.ɵɵadvance(7);
        i0.ɵɵproperty("formGroup", ctx.addStoreForm);
        i0.ɵɵadvance(54);
        i0.ɵɵproperty("ngIf", ctx.gsttype == 1);
        i0.ɵɵadvance(16);
        i0.ɵɵproperty("ngIf", ctx.licensetype == 1);
        i0.ɵɵadvance(11);
        i0.ɵɵproperty("ngIf", ctx.domaintype == 1);
        i0.ɵɵadvance(6);
        i0.ɵɵproperty("ngIf", ctx.domaintype == 0);
        i0.ɵɵadvance(32);
        i0.ɵɵtextInterpolate(ctx.uploadLabel);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.isImageSaved);
        i0.ɵɵadvance(8);
        i0.ɵɵtextInterpolate(ctx.uploadLabel1);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.isImageSaved1);
        i0.ɵɵadvance(7);
        i0.ɵɵproperty("value", true);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("value", false);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", ctx.accounttype == false);
    } }, dependencies: [i5.NgIf, i2.ɵNgNoValidate, i2.NgSelectOption, i2.ɵNgSelectMultipleOption, i2.DefaultValueAccessor, i2.CheckboxControlValueAccessor, i2.SelectControlValueAccessor, i2.RadioControlValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.FormGroupDirective, i2.FormControlName, i6.CountryStateCityPinComponent], styles: [".form-check-input[_ngcontent-%COMP%] {\r\n    margin-top: 3px;\r\n}\r\n\r\n.custom-btn.add-store-btn[_ngcontent-%COMP%] {\r\n    margin: 10px 0;\r\n    float: right;\r\n    min-width: 120px;\r\n}\r\n\r\n.same-domain-child[_ngcontent-%COMP%] {\r\n    background: #e9edf057;\r\n    padding: 10px 15px;\r\n    border-radius: 5px;\r\n}\r\n\r\n.inner-bg[_ngcontent-%COMP%] {\r\n    background: #e9ecef;\r\n    margin: 0 0 5px;\r\n    border-radius: 5px;\r\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AddNewPhysicalStoreComponent, [{
        type: Component,
        args: [{ selector: 'app-add-new-physical-store', template: "<div class=\"modal-header\">\r\n    <h4 class=\"modal-title pull-left\">Add new Physical Store</h4>\r\n    <button type=\"button\" (click)=\"bsModalRef.hide()\" class=\"btn-close close pull-right\" aria-label=\"Close\">\r\n      <span aria-hidden=\"true\" class=\"visually-hidden\">&times;</span>\r\n    </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n    <form [formGroup]=\"addStoreForm\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n                <div class=\"form-group\">\r\n                    <label for=\"store\">Office/Store Name</label>\r\n                    <input type=\"text\" formControlName=\"RETAIL_STORE_NAME\" class=\"form-control\" id=\"store\">\r\n                    <div class=\"d-flex pt-1\">\r\n                        <div class=\"form-check\">\r\n                            <input formControlName=\"RETAIL_STORE_IN_SAME_PERIMETRIC_AREA_AS_PRIMARY_STORE_FLG\" class=\"form-check-input\" type=\"checkbox\" value=\"\" id=\"samePerimetric\">\r\n                            <label class=\"form-check-label\" for=\"samePerimetric\">\r\n                            <small>Store on same Perimetric Area as of Primary Store</small>\r\n                        </label>\r\n                        </div>\r\n\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n                <div class=\"form-group\">\r\n                    <label for=\"store\">Office/Store Address</label>\r\n                    <input type=\"text\" formControlName=\"RETAIL_STORE_ADDRESS\" class=\"form-control\" id=\"store\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <country-state-city-pin (countryEvent)=\"receiveCountryId($event)\" (stateEvent)=\"receiveStateId($event)\" (cityEvent)=\"receiveCityId($event)\" (pincodeEvent)=\"receivePinId($event)\"></country-state-city-pin>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n                <div class=\"form-group\">\r\n                    <label>Type of Office</label>\r\n                    <select formControlName=\"officeType\" (change)=\"officeType($event)\" class=\"form-control\">\r\n                <option selected>Select</option>\r\n                <option value=\"1\">Godown</option>\r\n                <option value=\"2\">Branch Office</option>\r\n                <option value=\"3\">Franchisee</option>\r\n                <option value=\"4\">Stockist/Distributor</option>\r\n                <option value=\"5\">Direct Third Party Retail Store</option>\r\n                <option value=\"6\">Factory Outlet</option>\r\n              </select>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n\r\n        <div class=\"row inner-bg\">\r\n            <div class=\"col-md-12\">\r\n                <div class=\"form-group mb-0 mt-2\">\r\n                    <label>GSTN</label>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n                <div class=\"form-check pb-2\">\r\n                    <input class=\"form-check-input\" type=\"radio\" value=\"0\" name=\"GSTIN\" (change)=\"onChangegst($event)\">\r\n                    <label class=\"form-check-label\">\r\n                  Operate on Same GSTIN\r\n                </label>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-6\">\r\n                <div class=\"form-check pb-2\">\r\n                    <input class=\"form-check-input\" type=\"radio\" value=\"1\" (change)=\"onChangegst($event)\" name=\"GSTIN\">\r\n                    <label class=\"form-check-label\">\r\n                  Operate on Other GSTIN\r\n                </label>\r\n                </div>\r\n                <div *ngIf=\"gsttype == 1\" class=\"ml-2 pb-2\">\r\n                    <input type=\"text\" formControlName=\"RETAIL_STORE_GSTIN_NUMBR\" class=\"form-control\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row inner-bg\">\r\n            <div class=\"col-md-12\">\r\n                <div class=\"form-group mb-0 mt-2\">\r\n                    <label>License</label>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n                <div class=\"form-check pb-2\">\r\n                    <input class=\"form-check-input\" type=\"radio\" name=\"license\" value=\"0\" (change)=\"onChangelicense($event)\">\r\n                    <label class=\"form-check-label\">\r\n                  Operate on Same License Number\r\n                </label>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-6\">\r\n                <div class=\"form-check pb-2\">\r\n                    <input class=\"form-check-input\" type=\"radio\" name=\"license\" value=\"1\" (change)=\"onChangelicense($event)\">\r\n                    <label class=\"form-check-label\">\r\n                  Operate on Other License Number\r\n                </label>\r\n                </div>\r\n                <div *ngIf=\"licensetype == 1\" class=\"ml-2 pb-2\"><input type=\"text\" formControlName=\"RETAIl_STORE_LICENSE_NO\" class=\"form-control\"></div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row inner-bg\">\r\n            <div class=\"col-md-12\">\r\n                <div class=\"form-group mb-0 mt-2\">\r\n                    <label>Domain</label>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n                <div class=\"form-check pb-2\">\r\n                    <input class=\"form-check-input\" type=\"radio\" name=\"domain\" value=\"1\" (change)=\"onChangeDomain($event)\">\r\n                    <label class=\"form-check-label\">\r\n                  Store on Same Domain\r\n                </label>\r\n                </div>\r\n                <div class=\"same-domain-child\" *ngIf=\"domaintype == 1\">\r\n                    <div class=\"form-group\">\r\n                        <label>Store Replica</label>\r\n                        <select class=\"form-control\" formControlName=\"storeReplica\" (change)=\"onChangeReplica($event)\">\r\n                            <option selected>Select</option>\r\n                            <option value=\"Required\">Required</option>\r\n                            <option value=\"Not Required\">Not Required</option>\r\n                        </select>\r\n                    </div>\r\n\r\n                    <div class=\"d-flex\" *ngIf=\"requiredReplica\">\r\n                        <div class=\"form-check pr-4\">\r\n                            <input class=\"form-check-input\" type=\"radio\" name=\"control\" value=\"1\" (change)=\"onChangeControl($event)\">\r\n                            <label class=\"form-check-label\">\r\n                      Centrally Controlled\r\n                    </label>\r\n                        </div>\r\n\r\n                        <div class=\"form-check pl-4\">\r\n                            <input class=\"form-check-input\" type=\"radio\" name=\"control\" value=\"0\" (change)=\"onChangeControl($event)\">\r\n                            <label class=\"form-check-label\">\r\n                      Solo Controlled\r\n                    </label>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-6\">\r\n                <div class=\"form-check pb-2\">\r\n                    <input class=\"form-check-input\" type=\"radio\" name=\"domain\" value=\"0\" (change)=\"onChangeDomain($event)\">\r\n                    <label class=\"form-check-label\">\r\n                    Store on Different Domain\r\n                </label>\r\n                </div>\r\n                <div *ngIf=\"domaintype == 0\" class=\"ml-2 pb-2\">\r\n                    <select (change)=\"domainChange($event)\" class=\"form-control\" formControlName=\"RETAIL_STORE_DOMAIN_ID\">\r\n                        <option value=\"\">Select</option>\r\n          <option value=\"1\">All-Day Liquor</option>\r\n          <option value=\"2\">All-Day Kitchen</option>\r\n          <option value=\"3\">All-Day Kirana</option>\r\n          <option value=\"4\">All-Day Fashion</option>\r\n          <option value=\"5\">All-Day Electronics & Large Appliances</option>\r\n          <option value=\"6\">All-Day Home & Office Furnitures</option>\r\n          <option value=\"7\">All-Day Pharma & Medicos</option>\r\n          <option value=\"8\">All-Day Home D\u00E9cor & Furnishings</option>\r\n          <option value=\"9\">All-Day Pet Shoppe & Pet Care</option>\r\n          <option value=\"10\">All-Day Garden & Outdoor</option>\r\n          <option value=\"11\">All-Day Food & Agro Care</option>\r\n          <option value=\"12\">All-Day New & Used Automobile</option>\r\n          <option value=\"13\">All-Day Health & Medical Equipments </option>\r\n          <option value=\"14\">All-Day Home Office & Automobile Services</option>\r\n          <option value=\"15\">All-Day Automobile Spare Parts </option>\r\n          <option value=\"16\">All-Day Kitchen & Dining  </option>\r\n          <option value=\"17\">All-Day Electrical & Lighting</option>\r\n          <option value=\"18\">All-Day Mobile & Entertainment Gadgets </option>\r\n          <option value=\"19\">All-Day Sanitary Paints & Furnishing</option>\r\n          <option value=\"20\">All-Day De-Evento </option>\r\n                    </select>\r\n\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"row main-conact-form\">\r\n            <div class=\"col-md-12 mt-3 mb-1\">\r\n                <h6>Main Contact Person</h6>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n                <div class=\"form-group\">\r\n                    <label for=\"fname\">First Name</label>\r\n                    <input formControlName=\"RETAIL_CONTACT_FIRST_NAME\" type=\"text\" id=\"fname\" class=\"form-control\">\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n                <div class=\"form-group\">\r\n                    <label for=\"lname\">Last Name</label>\r\n                    <input formControlName=\"RETAIL_CONTACT_LAST_NAME\" type=\"text\" id=\"lname\" class=\"form-control\">\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n                <div class=\"form-group\">\r\n                    <label for=\"pnumber\">Primary Mobile Number</label>\r\n                    <input formControlName=\"RETAIL_CONTACT_MOBILE_MUMBR\" type=\"text\" id=\"pnumber\" class=\"form-control\">\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-6\">\r\n                <div class=\"form-group\">\r\n                    <label for=\"email\">Email</label>\r\n                    <input formControlName=\"RETAIL_CONTACT_EMAIL_ID\" type=\"text\" id=\"email\" class=\"form-control\">\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n                <fieldset class=\"form-group\">\r\n                    <label>Person Photo</label>\r\n                    <div class=\"custom-file\">\r\n                        <input formControlName=\"RETAIL_CONTACT_PHOTO_IMAGE\" type=\"file\" (change)=\"onSelectedFile($event)\" class=\"custom-file-input\" id=\"personPhoto\">\r\n                        <label class=\"custom-file-label\" for=\"personPhoto\">{{uploadLabel}}</label>\r\n                        <div class=\"img-space\" *ngIf=\"isImageSaved\">\r\n                            <ng-container>\r\n                                <img [src]=\"'data:image/jpeg;base64,' + base64textString\">\r\n                            </ng-container>\r\n                        </div>\r\n                    </div>\r\n                </fieldset>\r\n            </div>\r\n\r\n            <div class=\"col-md-6\">\r\n                <fieldset class=\"form-group\">\r\n                    <label>Kyc Photo</label>\r\n                    <div class=\"custom-file\">\r\n                        <input formControlName=\"RETAIL_CONTACT_KYC_PHOTO_ID_IMAGE\" type=\"file\" (change)=\"onSelectedFile1($event)\" class=\"custom-file-input\" id=\"kycphoto\">\r\n                        <label class=\"custom-file-label\" for=\"kycphoto\">{{uploadLabel1}}</label>\r\n                        <div class=\"img-space\" *ngIf=\"isImageSaved1\">\r\n                            <ng-container>\r\n                                <img [src]=\"'data:image/jpeg;base64,' + base64textString1\">\r\n                            </ng-container>\r\n                        </div>\r\n                    </div>\r\n                </fieldset>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row main-conact-form mt-3\">\r\n            <div class=\"col-md-12 mb-1\">\r\n                <h5>Bank Account Details</h5>\r\n            </div>\r\n            <div class=\"d-flex col-md-12 mb-3\">\r\n                <div class=\"form-check pr-4\">\r\n                    <input class=\"form-check-input\" formControlName=\"accountType\" type=\"radio\" name=\"accountType\" [value]=\"true\" (change)=\"onChangeAccount($event)\">\r\n                    <label class=\"form-check-label\">\r\n                        Same as Sub-Account\r\n                    </label>\r\n                </div>\r\n                <div class=\"form-check pl-4\">\r\n                    <input class=\"form-check-input\" formControlName=\"accountType\" type=\"radio\" name=\"accountType\" [value]=\"false\" (change)=\"onChangeAccount($event)\">\r\n                    <label class=\"form-check-label\">\r\n                        Different Bank Account\r\n                    </label>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n        <div class=\"bankDetails\" *ngIf=\"accounttype == false\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-4\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"bankname\">Name of Bank</label>\r\n                        <input formControlName=\"RETAIl_STORE_BANK_NAME\" type=\"text\" id=\"bankname\" class=\"form-control\">\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-md-4\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"ifsc\">IFSC Code</label>\r\n                        <input formControlName=\"RETAIl_STORE_BANK_IFSC_NUMBR\" type=\"text\" id=\"ifsc\" class=\"form-control\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"baddress\">Branch Addess</label>\r\n                        <input formControlName=\"RETAIL_STORE_BANK_BRANCH_ADDRESS\" type=\"text\" id=\"baddress\" class=\"form-control\">\r\n                    </div>\r\n                </div>\r\n\r\n                <!-- <div class=\"col-md-4\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"country\">Country</label>\r\n                        <input type=\"text\" id=\"country\" class=\"form-control\">\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-md-4\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"state\">State</label>\r\n                        <input type=\"text\" id=\"state\" class=\"form-control\">\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-md-4\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"city\">City</label>\r\n                        <input type=\"text\" id=\"city\" class=\"form-control\">\r\n                    </div>\r\n                </div> -->\r\n                <div class=\"col-md-4\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"ban\">Bank Account Number</label>\r\n                        <input formControlName=\"RETAIl_STORE_BANK_ACCOUNT_NUMBR\" type=\"text\" id=\"ban\" class=\"form-control\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"ran1\">Re-enter Account Number</label>\r\n                        <input formControlName=\"RETAIl_STORE_BANK_ACCOUNT_NUMBR\" type=\"text\" id=\"ran1\" class=\"form-control\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                    <div class=\"form-group\">\r\n                        <label>Account Type</label>\r\n                        <select class=\"form-control\" formControlName=\"RETAIL_STORE_BANK_ACCOUNT_TYPE\">\r\n                            <option selected>Select</option>\r\n                            <option>Saving Account</option>\r\n                            <option>Current Account</option>\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-8\">\r\n                    <fieldset class=\"form-group\">\r\n                        <label>Attached Cancel Cheque</label>\r\n\r\n                        <div class=\"custom-file\">\r\n                            <input formControlName=\"RETAIL_STORE_BANK_CANCELLED_CHEQUE_IMAGE\" type=\"file\" (change)=\"onSelectedFile2($event)\" class=\"custom-file-input\" id=\"kycphoto\">\r\n                            <label class=\"custom-file-label\" for=\"kycphoto\">{{uploadLabel2}}</label>\r\n                            <div class=\"img-space\" *ngIf=\"isImageSaved2\">\r\n                                <ng-container>\r\n                                    <img [src]=\"'data:image/jpeg;base64,' + base64textString2\">\r\n                                </ng-container>\r\n                            </div>\r\n                        </div>\r\n\r\n\r\n                    </fieldset>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <button (click)=\"addPhysicalStore()\" class=\"btn custom-btn add-store-btn\">Add Store</button>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</div>\r\n\r\n<!-- <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-default\" (click)=\"bsModalRef.hide()\">{{closeBtnName}}</button>\r\n  </div> -->", styles: [".form-check-input {\r\n    margin-top: 3px;\r\n}\r\n\r\n.custom-btn.add-store-btn {\r\n    margin: 10px 0;\r\n    float: right;\r\n    min-width: 120px;\r\n}\r\n\r\n.same-domain-child {\r\n    background: #e9edf057;\r\n    padding: 10px 15px;\r\n    border-radius: 5px;\r\n}\r\n\r\n.inner-bg {\r\n    background: #e9ecef;\r\n    margin: 0 0 5px;\r\n    border-radius: 5px;\r\n}"] }]
    }], function () { return [{ type: i1.BsModalRef }, { type: i1.ModalOptions }, { type: i2.FormBuilder }, { type: i3.ApiService }, { type: i4.ToastrService }]; }, null); })();
//# sourceMappingURL=add-new-physical-store.component.js.map