import { Component, OnInit, TemplateRef, Output, EventEmitter } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { ToastrService } from 'ngx-toastr';
import { firstValueFrom } from 'rxjs';

interface KeyManagementProfile {
  MDR_TOP_MANAGEMENT_ID: string;
  MDR_TOP_MNGMT_ABOUT_TXT: string;
  MDR_TOP_MNGMT_ACTIV_FLG: boolean;
  MDR_TOP_MNGMT_CORP_TITLE: string;
  MDR_TOP_MNGMT_FIRST_NAME: string;
  MDR_TOP_MNGMT_LAST_NAME: string;
  MDR_TOP_MNGMT_PIC_IMAGE: string;
  MDR_TO_MANAGEMENT_MAIN_PROFILE_FLG: boolean;
}

interface ClientRecommendation {
  MDR_STORE_CLIENT_ACTIV_FLG: boolean;
  MDR_STORE_CLIENT_ID: string;
  MDR_STORE_CLIENT_IMAGE: string;
  MDR_STORE_CLIENT_ORG: string;
  MDR_STORE_CLIENT_REP_DESIGNATION: string;
  MDR_STORE_CLIENT_REP_FIRSTNAME: string;
  MDR_STORE_CLIENT_REP_LASTNAME: string;
  MDR_STORE_CLIENT_SAID_ABOUT_TEXT: string;
}

interface StoreProductService {
  MDR_STORE_PRDCT_SERVC_ACTIV_FLG: boolean;
  MDR_STORE_PRDCT_SERVC_ID: string;
  MDR_STORE_PRDCT_SERVC_IMAGE: string;
  MDR_STORE_PRDCT_SERVC_TXT: string;
}

interface OrgProfile {
  MDR_ADDRESS: string;
  MDR_ADDRESS_ACTIV_FLG: boolean;
  MDR_ADDRESS_CITY: string;
  MDR_ADDRESS_COUNTRY: string;
  MDR_ADDRESS_LANDMARK: string;
  MDR_ADDRESS_LATD: string | null;
  MDR_ADDRESS_LONGTD: string | null;
  MDR_ADDRESS_PINCODE: string;
  MDR_ADDRESS_STATE: string;
  MDR_CORP_CONTACT_EMAILID: string;
  MDR_CORP_CONTACT_NUMBER: string;
  MDR_CORP_RESPONDER: string;
  MDR_ORG_NAME: string;
  MDR_ORG_TYPE: string;
  MDR_PROFILE_ORG_GSTIN: string;
}

interface GeoServicibility {
  MDR_GEOSERVICIBILITY_CATGRY: string;
  MDR_GEO_ACTIV_FLG: boolean;
  MDR_SERVC_CITY_ID: number;
  MDR_SERVC_COUNTRY_ID: number;
  MDR_SERVC_ID: number;
  MDR_SERVC_STATE_ID: number;
  MDR_SERV_PINCODE: string;
}

interface Media {
  MDR_MEDIA_ACTIV_FLG: boolean;
  MDR_MEDIA_HEAD_TXT: string;
  MDR_MEDIA_ID: string;
  MDR_MEDIA_PIC: string;
  MDR_MEDIA_SUBJCT_TXT: string;
}
@Component({
  selector: 'app-profile-management',
  templateUrl: './profile-management.component.html',
  styleUrls: ['./profile-management.component.css']
})

export class ProfileManagementComponent implements OnInit {
  imgURL = this.apiService.imgURL;
  modalRef!: BsModalRef;
  mainProfileForm!: FormGroup;
  keyManagementForm!: FormGroup;
  mediaCertificationForm!: FormGroup;
  productServiceForm!: FormGroup;
  clientRecommendationForm!: FormGroup;
  geoServicibilityForm!: FormGroup;
  isProfileExisting = false;

  keyManagementProfileArr: KeyManagementProfile[] = [];
  storeandprdtArr: StoreProductService[] = [];
  clientRecommendationArr: ClientRecommendation[] = [];
  geoservicibilityArr: GeoServicibility[] = [];
  mediaCertificationsArr: Media[] = [];

  orgLogoUrl: string = '';
  profilePicUrl: string = '';

  orgProfile: OrgProfile = {
    MDR_ADDRESS: "",
    MDR_ADDRESS_ACTIV_FLG: false,
    MDR_ADDRESS_CITY: "",
    MDR_ADDRESS_COUNTRY: "",
    MDR_ADDRESS_LANDMARK: "",
    MDR_ADDRESS_LATD: null,
    MDR_ADDRESS_LONGTD: null,
    MDR_ADDRESS_PINCODE: "",
    MDR_ADDRESS_STATE: "",
    MDR_CORP_CONTACT_EMAILID: "",
    MDR_CORP_CONTACT_NUMBER: "",
    MDR_CORP_RESPONDER: "",
    MDR_ORG_NAME: "",
    MDR_ORG_TYPE: "",
    MDR_PROFILE_ORG_GSTIN: ""
  };

  countryList: any[] = [];
  countryID: any;
  countryName: any;
  cityList: any[] = [];
  stateList: any[] = [];
  stateID: any;
  stateName: any;
  cityName: any;
  zipList: any[] = [];
  cityID: any;
  pinID: any;

  @Output() countryEvent = new EventEmitter<any>();
  @Output() stateEvent = new EventEmitter<any>();
  @Output() cityEvent = new EventEmitter<any>();
  @Output() pincodeEvent = new EventEmitter<any>();
  constructor(
    private modalService: BsModalService,
    private fb: FormBuilder,
    private apiService: ApiService,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {

    this.getCountry();

    this.mainProfileForm = this.fb.group({
      Login_Storecode: ['1001070099', Validators.required],
      Main_Display_Text: ['', Validators.required],
      Corp_Logo: [''],
      Corp_About_Text: [''],
      Website_URL: ['', Validators.pattern('https?://.+')],
      Corp_PhoneNumber: ['', Validators.pattern('^[0-9]{10,15}$')],
      Corp_Emailid: ['', [Validators.required, Validators.email]],
      Corp_Responder_Name: [''],
      MainProfile_Mngmt_Pic: [''],
      MainProfile_FirstName: ['', Validators.required],
      MainProfile_LastName: ['', Validators.required],
      MainProfile_Designation: [''],
      Mngmt_About_Text: [''],
      Employee_Counts: [, [Validators.required, Validators.min(0)]]
    });

    this.loadMainProfile();

    this.keyManagementForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      designation: ['', Validators.required],
      active: [true],
      about: [''],
      profilePic: [null]
    });

    this.mediaCertificationForm = this.fb.group({
      subject: ['', Validators.required],
      active: [true],
      details: [''],
      mediaPic: [null]
    });

    this.productServiceForm = this.fb.group({
      Prdct_Servc_Txt: ['', Validators.required],
      Prdct_Servc_Image: ['', Validators.required]
    });

    this.clientRecommendationForm = this.fb.group({
      Client_Org_Name: ['', Validators.required],
      Client_First_Name: ['', Validators.required],
      Client_Last_Name: ['', Validators.required],
      Designation: ['', Validators.required],
      Person_Pic: [null, Validators.required],
      Appreciation_Txt: ['']
    });

    this.geoServicibilityForm = this.fb.group({
      Geo_Category: ['', Validators.required],
      CountryId: ['', Validators.required],
      StateId: [''],
      CityId: [''],
      PinCode: ['']
    });

  }

  onTabChange(tabName: string) {
    console.log("Switched to tab:", tabName);

    let payload = {
      Storecode: "1001070099",
      Media_Profile_Flg: false,
      Mangmt_Profile_Flg: false,
      Prod_Servc_Profile_Flg: false,
      Client_Profile_Flg: false,
      Geo_Service_Profile_Flg: false,
      Corp_Contact_Profile_Flg: false
    };

    switch (tabName) {
      case "Main Profile":
        this.loadMainProfile();
        break;

      case "Key Management Profile":
        payload.Mangmt_Profile_Flg = true;

        this.apiService.postCall(this.apiService.baseURL + '/GetMdrProfileAddons', payload)
          .subscribe({
            next: (data: KeyManagementProfile[]) => {
              if (data && data.length > 0) {

                this.keyManagementProfileArr = data;
              }
              console.log("Mapped Profiles:", this.keyManagementProfileArr);
            },
            error: (error) => {
              this.toastr.error(error, '', { timeOut: 5000 });
            }
          });

        break;

      case "Media & Certifications":
        payload.Media_Profile_Flg = true;

        this.apiService.postCall(this.apiService.baseURL + '/GetMdrProfileAddons', payload)
          .subscribe({
            next: (data) => {
              console.log(data);
              this.mediaCertificationsArr = data;
            },
            error: (error) => {
              this.toastr.error(error, '', { timeOut: 5000 });
            }
          });

        break;

      case "Product & Services":
        payload.Prod_Servc_Profile_Flg = true;

        this.apiService.postCall(this.apiService.baseURL + '/GetMdrProfileAddons', payload)
          .subscribe({
            next: (data) => {
              console.log(data);

              this.storeandprdtArr = data;
            },
            error: (error) => {
              this.toastr.error(error, '', { timeOut: 5000 });
            }
          });

        break;

      case "Clients & Recommendations":
        payload.Client_Profile_Flg = true;

        this.apiService.postCall(this.apiService.baseURL + '/GetMdrProfileAddons', payload)
          .subscribe({
            next: (data) => {
              console.log(data);
              this.clientRecommendationArr = data;
            },
            error: (error) => {
              this.toastr.error(error, '', { timeOut: 5000 });
            }
          });

        break;

      case "Geo Service":
        payload.Geo_Service_Profile_Flg = true;

        this.apiService.postCall(this.apiService.baseURL + '/GetMdrProfileAddons', payload)
          .subscribe({
            next: (data) => {
              console.log(data);
              this.geoservicibilityArr = data;
            },
            error: (error) => {
              this.toastr.error(error, '', { timeOut: 5000 });
            }
          });

        break;

      case "Corp Contact":
        payload.Corp_Contact_Profile_Flg = true;

        this.apiService.postCall(this.apiService.baseURL + '/GetMdrProfileAddons', payload)
          .subscribe({
            next: (data: OrgProfile) => {
              this.orgProfile = data[0];

              console.log("Org Profiles:", this.orgProfile);
            },
            error: (error) => {
              this.toastr.error(error, '', { timeOut: 5000 });
            }
          });

        break;
    }

  }

  editenabled = false;

  enableEditing() {
    this.mainProfileForm.get('Main_Display_Text')?.enable();
    this.mainProfileForm.get('Corp_About_Text')?.enable();
    this.mainProfileForm.get('Corp_Logo')?.enable();
    this.mainProfileForm.get('Website_URL')?.enable();
    this.mainProfileForm.get('Employee_Counts')?.enable();

    this.editenabled = true;
    this.isProfileExisting = false;
  }

  editMainProfile() {

    if (this.orgLogoUrl == '') {
      this.loadMainProfile();
      this.editenabled = false;
      this.isProfileExisting = true;
      return
    }

    const payload = {
      Storecode: "1001070099",
      Profilehead_Text: this.mainProfileForm.get('Main_Display_Text').value,
      Corp_About_Text: this.mainProfileForm.get('Corp_About_Text').value,
      Corp_Logo: this.mainProfileForm.get('Corp_Logo').value,
      Web_URL: this.mainProfileForm.get('Website_URL').value,
      Employees_No: this.mainProfileForm.get('Employee_Counts').value
    }

    console.log("Edit payload: ", payload);

    this.apiService.postCall(this.apiService.baseURL + '/EditMDR_MainProfile', payload)
      .subscribe({
        next: (data) => {
          console.log(data);
          this.toastr.success(data)
        },
        error: (error) => {
          this.toastr.error(error, '', { timeOut: 5000 });
        }
      });

    this.orgLogoUrl = ''
    this.loadMainProfile();
    this.editenabled = false;
    this.isProfileExisting = true;
  }

  async onSubmitGeoServicibility() {
    if (this.geoServicibilityForm.valid) {

      const payload = {
        Storecode: "1001070099",
        Geo_Category: this.geoServicibilityForm.get('Geo_Category')?.value,
        CountryId: this.geoServicibilityForm.get('CountryId')?.value,
        StateId: this.geoServicibilityForm.get('StateId')?.value,
        CityId: this.geoServicibilityForm.get('CityId')?.value,
        PinCode: this.geoServicibilityForm.get('PinCode')?.value
      }

      console.log("Payload: ", payload)

      const payloadforget = {
        Storecode: "1001070099",
        Media_Profile_Flg: false,
        Mangmt_Profile_Flg: false,
        Prod_Servc_Profile_Flg: false,
        Client_Profile_Flg: false,
        Geo_Service_Profile_Flg: true,
        Corp_Contact_Profile_Flg: false
      };

      try {
        const res1 = await firstValueFrom(
          this.apiService.postCall(this.apiService.baseURL + '/AddMDR_ServiceabilityGeoAddon', payload)
        );
        console.log("First API response:", res1);

        this.toastr.success(res1.Message, "", { timeOut: 5000 });

        const res2: any = await firstValueFrom(
          this.apiService.postCall(this.apiService.baseURL + '/GetMdrProfileAddons', payloadforget)
        );

        console.log("Geo: ", res2)

        this.geoservicibilityArr = Array.isArray(res2) ? res2 : (res2?.MNGMT_LIST ?? []);
        console.log("Mapped Profiles:", this.geoservicibilityArr);

        this.modalRef?.hide();
      } catch (err) {
        this.toastr.error(err, '', { timeOut: 5000 });
      }

    }
  }

  async onaddKeyManagementProfileSubmit() {

    if (this.keyManagementForm.valid) {
      const payload = {
        Storecode: "1001070099",
        First_Name: this.keyManagementForm.get('firstName')?.value,
        Last_Name: this.keyManagementForm.get('lastName')?.value,
        Designation: this.keyManagementForm.get('designation')?.value,
        About_Txt: this.keyManagementForm.get('about')?.value,
        Person_Pic: this.keyManagementForm.get('profilePic')?.value
      };

      const payloadforget = {
        Storecode: "1001070099",
        Media_Profile_Flg: false,
        Mangmt_Profile_Flg: true,
        Prod_Servc_Profile_Flg: false,
        Client_Profile_Flg: false,
        Geo_Service_Profile_Flg: false,
        Corp_Contact_Profile_Flg: false
      };

      try {
        const res1 = await firstValueFrom(
          this.apiService.postCall(this.apiService.baseURL + '/AddMDR_ProfileMngmtAddon', payload)
        );
        console.log("First API response:", res1);

        if (res1 === "Your plan limit is already consumed fully so management is not added")
          this.toastr.error(res1, "", { timeOut: 5000 });
        else
          this.toastr.success(res1, "", { timeOut: 5000 });

        const res2: any = await firstValueFrom(
          this.apiService.postCall(this.apiService.baseURL + '/GetMdrProfileAddons', payloadforget)
        );

        this.keyManagementProfileArr = Array.isArray(res2) ? res2 : (res2?.MNGMT_LIST ?? []);
        console.log("Mapped Profiles:", this.keyManagementProfileArr);

        this.modalRef?.hide();
      } catch (err) {
        this.toastr.error(err, '', { timeOut: 5000 });
      }
    }
  }

  editclientandrecommendation: any;

  openeditClientRecommendations(client: any, template: TemplateRef<any>) {

    this.ProfilePicaddclient = ""

    this.editclientandrecommendation = {
      Storecode: "1001070099",
      Clientid: client.MDR_STORE_CLIENT_ID,
      Client_Org_Name: client.MDR_STORE_CLIENT_ORG,
      Client_First_Name: client.MDR_STORE_CLIENT_REP_FIRSTNAME,
      Client_Last_Name: client.MDR_STORE_CLIENT_REP_LASTNAME,
      Designation: client.MDR_STORE_CLIENT_REP_DESIGNATION,
      Person_Pic: '',
      Appreciation_Txt: client.MDR_STORE_CLIENT_SAID_ABOUT_TEXT,
      Activ_Flg: client.MDR_STORE_CLIENT_ACTIV_FLG
    }

    console.log(this.editclientandrecommendation)

    this.openModal(template);
  }

  oneditClientRecommendation() {

    if (this.editclientandrecommendation.Prd_Srvc_Image === '') {
      return;
    }

    console.log(this.editclientandrecommendation);

    let payload = {
      Storecode: "1001070099",
      Media_Profile_Flg: false,
      Mangmt_Profile_Flg: false,
      Prod_Servc_Profile_Flg: false,
      Client_Profile_Flg: true,
      Geo_Service_Profile_Flg: false,
      Corp_Contact_Profile_Flg: false
    };

    this.apiService.postCall(this.apiService.baseURL + '/EditMDR_ProfileClientAddon', this.editclientandrecommendation)
      .subscribe({
        next: (data) => {
          console.log(data);
          this.toastr.success(data.Message);

          this.apiService.postCall(this.apiService.baseURL + '/GetMdrProfileAddons', payload)
            .subscribe({
              next: (data) => {
                this.clientRecommendationArr = data;
              },
              error: (error) => {
                this.toastr.error(error, '', { timeOut: 5000 });
              }
            });
        },
        error: (error) => {
          this.toastr.error(error, '', { timeOut: 5000 });
        }
      });

    this.modalRef?.hide()

  }

  editproductservice: any;

  openditProductService(product: any, template: TemplateRef<any>) {

    this.mediaImageUrl2 = ""

    this.editproductservice = {
      Storecode: "1001070099",
      Prd_Srvc_id: product.MDR_STORE_PRDCT_SERVC_ID,
      Prd_Srvc_Txt: product.MDR_STORE_PRDCT_SERVC_TXT,
      Prd_Srvc_Image: '',
      Activ_Flg: product.MDR_STORE_PRDCT_SERVC_ACTIV_FLG
    }

    console.log(this.editproductservice)

    this.openModal(template);

  }

  oneditGeoServicibility() {

    console.log(this.editgeoservicibility)

    let payload = {
      Storecode: "1001070099",
      Media_Profile_Flg: false,
      Mangmt_Profile_Flg: false,
      Prod_Servc_Profile_Flg: false,
      Client_Profile_Flg: false,
      Geo_Service_Profile_Flg: true,
      Corp_Contact_Profile_Flg: false
    };

    this.apiService.postCall(this.apiService.baseURL + '/EditMDR_ServiceabilityGeoAddon', this.editgeoservicibility)
      .subscribe({
        next: (data) => {
          console.log(data);
          this.toastr.success(data.Message);

          this.apiService.postCall(this.apiService.baseURL + '/GetMdrProfileAddons', payload)
            .subscribe({
              next: (data) => {
                this.geoservicibilityArr = data;
              },
              error: (error) => {
                this.toastr.error(error, '', { timeOut: 5000 });
              }
            });
        },
        error: (error) => {
          this.toastr.error(error, '', { timeOut: 5000 });
        }
      });

    this.modalRef?.hide()

  }

  detail: any;

  showDetails(object: any, template: TemplateRef<any>) {

    this.detail = object;

    this.openSmallModal(template);
  }

  oneditProductService() {

    if (this.editproductservice.Prd_Srvc_Image === '') {
      return;
    }

    console.log(this.editproductservice);

    let payload = {
      Storecode: "1001070099",
      Media_Profile_Flg: false,
      Mangmt_Profile_Flg: false,
      Prod_Servc_Profile_Flg: true,
      Client_Profile_Flg: false,
      Geo_Service_Profile_Flg: false,
      Corp_Contact_Profile_Flg: false
    };

    this.apiService.postCall(this.apiService.baseURL + '/EditMDR_ProfilePRDCTSERVCAddon', this.editproductservice)
      .subscribe({
        next: (data) => {
          console.log(data);
          this.toastr.success(data.Message);

          this.apiService.postCall(this.apiService.baseURL + '/GetMdrProfileAddons', payload)
            .subscribe({
              next: (data) => {
                this.storeandprdtArr = data;
              },
              error: (error) => {
                this.toastr.error(error, '', { timeOut: 5000 });
              }
            });
        },
        error: (error) => {
          this.toastr.error(error, '', { timeOut: 5000 });
        }
      });

    this.modalRef?.hide()

  }

  editkeymanagementprofile: any;

  openeditKeyManagementProfile(profile: any, template: TemplateRef<any>) {

    this.profilePicUrladdKeyManagement = ""

    this.editkeymanagementprofile = {
      StoreCode: "1001070099",
      Mngmt_id: profile.MDR_TOP_MANAGEMENT_ID,
      First_Name: profile.MDR_TOP_MNGMT_FIRST_NAME,
      Last_Name: profile.MDR_TOP_MNGMT_LAST_NAME,
      Designation: profile.MDR_TOP_MNGMT_CORP_TITLE,
      About_Txt: profile.MDR_TOP_MNGMT_ABOUT_TXT,
      Person_PIC: '',
      Activ_Flg: profile.MDR_TOP_MNGMT_ACTIV_FLG
    }

    console.log(this.editkeymanagementprofile)

    this.openModal(template);
  }

  oneditKeyManagementProfileSubmit() {

    if (this.editkeymanagementprofile.Person_PIC === '') {
      return;
    }

    console.log(this.editkeymanagementprofile)

    let payload = {
      Storecode: "1001070099",
      Media_Profile_Flg: false,
      Mangmt_Profile_Flg: true,
      Prod_Servc_Profile_Flg: false,
      Client_Profile_Flg: false,
      Geo_Service_Profile_Flg: false,
      Corp_Contact_Profile_Flg: false
    };

    this.apiService.postCall(this.apiService.baseURL + '/EditMDR_ProfileMngmtAddon', this.editkeymanagementprofile)
      .subscribe({
        next: (data) => {
          console.log(data);
          this.toastr.success(data.Message)

          this.apiService.postCall(this.apiService.baseURL + '/GetMdrProfileAddons', payload)
            .subscribe({
              next: (data: KeyManagementProfile[]) => {
                if (data && data.length > 0) {

                  this.keyManagementProfileArr = data;
                }
              },
              error: (error) => {
                this.toastr.error(error, '', { timeOut: 5000 });
              }
            });
        },
        error: (error) => {
          this.toastr.error(error, '', { timeOut: 5000 });
        }
      });

    this.modalRef?.hide()

  }

  mediaImageUrl: string | ArrayBuffer | null = null;

  onMediaImageSelectedaddMediaCertification(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        const base64WithPrefix = reader.result as string;

        this.mediaImageUrl = base64WithPrefix;

        const base64String = base64WithPrefix.split(',')[1];

        this.mediaCertificationForm.get('mediaPic')?.setValue(base64String);

        this.editMedia.MediaImage = base64String;

        // console.log("Base64 (no prefix):", base64String);
      };

      reader.readAsDataURL(file);
    }
  }

  mediaImageUrl2: string | ArrayBuffer | null = null;

  onMediaImageSelectedaddProductAndService(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        const base64WithPrefix = reader.result as string;

        this.mediaImageUrl2 = base64WithPrefix;

        const base64String = base64WithPrefix.split(',')[1];

        this.productServiceForm.get('Prdct_Servc_Image')?.setValue(base64String);

        this.editproductservice.Prd_Srvc_Image = base64String;

        // console.log("Base64 (no prefix):", base64String);
      };

      reader.readAsDataURL(file);
    }
  }

  ProfilePicaddclient: string | ArrayBuffer | null = null;

  onMediaImageaddClientRecommendation(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        const base64WithPrefix = reader.result as string;

        this.ProfilePicaddclient = base64WithPrefix;

        const base64String = base64WithPrefix.split(',')[1];

        this.clientRecommendationForm.get('Person_Pic')?.setValue(base64String);

        this.editclientandrecommendation.Person_Pic = base64String;

        // console.log("Base64 (no prefix):", base64String);
      };

      reader.readAsDataURL(file);
    }
  }

  async onSubmitClientRecommendation() {

    if (this.clientRecommendationForm.valid) {

      const payload = {
        Storecode: "1001070099",
        Client_Org_Name: this.clientRecommendationForm.get('Client_Org_Name')?.value,
        Client_First_Name: this.clientRecommendationForm.get('Client_First_Name')?.value,
        Client_Last_Name: this.clientRecommendationForm.get('Client_Last_Name')?.value,
        Designation: this.clientRecommendationForm.get('Designation')?.value,
        Person_Pic: this.clientRecommendationForm.get('Person_Pic')?.value,
        Appreciation_Txt: this.clientRecommendationForm.get('Appreciation_Txt')?.value
      }

      const payloadforget = {
        Storecode: "1001070099",
        Media_Profile_Flg: false,
        Mangmt_Profile_Flg: false,
        Prod_Servc_Profile_Flg: false,
        Client_Profile_Flg: true,
        Geo_Service_Profile_Flg: false,
        Corp_Contact_Profile_Flg: false
      };

      try {
        const res1 = await firstValueFrom(
          this.apiService.postCall(this.apiService.baseURL + '/AddMDR_ProfileClientAddon', payload)
        );
        console.log("First API response:", res1);

        this.toastr.success(res1.Message, "", { timeOut: 5000 });

        const res2: any = await firstValueFrom(
          this.apiService.postCall(this.apiService.baseURL + '/GetMdrProfileAddons', payloadforget)
        );

        console.log("Clients: ", res2)

        this.clientRecommendationArr = Array.isArray(res2) ? res2 : (res2?.MNGMT_LIST ?? []);
        console.log("Client & Recommendation:", this.clientRecommendationArr);

        this.modalRef?.hide();
      } catch (err) {
        this.toastr.error(err, '', { timeOut: 5000 });
      }
    }
  }

  async onSubmitMediaCertification() {
    if (this.mediaCertificationForm.valid) {
      const formData = this.mediaCertificationForm.value;

      const payload = {
        StoreCode: "1001070099",
        HeaderText: formData.details,
        MediaImage: formData.mediaPic,
        MediaSubject: formData.subject
      };

      console.log("Payload: ", payload)

      const payloadforget = {
        Storecode: "1001070099",
        Media_Profile_Flg: true,
        Mangmt_Profile_Flg: false,
        Prod_Servc_Profile_Flg: false,
        Client_Profile_Flg: false,
        Geo_Service_Profile_Flg: false,
        Corp_Contact_Profile_Flg: false
      };

      try {
        const res1 = await firstValueFrom(
          this.apiService.postCall(this.apiService.baseURL + '/AddMDR_ProfileMediaAddon', payload)
        );
        console.log("First API response:", res1);

        this.toastr.success(res1.Message, "", { timeOut: 5000 });

        const res2: any = await firstValueFrom(
          this.apiService.postCall(this.apiService.baseURL + '/GetMdrProfileAddons', payloadforget)
        );

        console.log("Media: ", res2);

        this.mediaCertificationsArr = Array.isArray(res2) ? res2 : (res2?.MEDIA_LIST ?? []);
        console.log("Mapped Media Certifications:", this.mediaCertificationsArr);

        this.modalRef?.hide();
      } catch (err) {
        this.toastr.error(err, '', { timeOut: 5000 });
      }
    } else {
      this.toastr.warning("Please fill all required fields!", "", { timeOut: 3000 });
    }
  }

  editMedia: any;

  openeditMediaCerification(media: any, template: TemplateRef<any>) {

    this.mediaImageUrl = ""

    this.editMedia = {
      StoreCode: "1001070099",
      MediaId: media.MDR_MEDIA_ID,
      HeaderText: media.MDR_MEDIA_HEAD_TXT,
      MediaImage: "",
      MediaSubject: media.MDR_MEDIA_SUBJCT_TXT,
      ActivFlg: media.MDR_MEDIA_ACTIV_FLG
    }

    console.log(this.editMedia)

    this.openModal(template);
  }

  editMediaCerification() {

    if (this.editMedia.MediaImage === '') {
      return;
    }

    console.log("Edit media: ", this.editMedia)

    let payload = {
      Storecode: "1001070099",
      Media_Profile_Flg: true,
      Mangmt_Profile_Flg: false,
      Prod_Servc_Profile_Flg: false,
      Client_Profile_Flg: false,
      Geo_Service_Profile_Flg: false,
      Corp_Contact_Profile_Flg: false
    };

    this.apiService.postCall(this.apiService.baseURL + '/EditMDR_ProfileMediaAddon', this.editMedia)
      .subscribe({
        next: (data) => {
          console.log(data);
          this.toastr.success(data.Message)

          this.apiService.postCall(this.apiService.baseURL + '/GetMdrProfileAddons', payload)
            .subscribe({
              next: (data) => {
                this.mediaCertificationsArr = data;

              },
              error: (error) => {
                this.toastr.error(error, '', { timeOut: 5000 });
              }
            });
        },
        error: (error) => {
          this.toastr.error(error, '', { timeOut: 5000 });
        }
      });

    this.modalRef?.hide()

  }

  async onSubmitProductService() {
    if (this.productServiceForm.valid) {
      console.log(this.productServiceForm.value);

      const payload = {
        Storecode: "1001070099",
        Prdct_Servc_Txt: this.productServiceForm.value.Prdct_Servc_Txt,
        Prdct_Servc_Image: this.productServiceForm.value.Prdct_Servc_Image
      };


      const payloadforget = {
        Storecode: "1001070099",
        Media_Profile_Flg: false,
        Mangmt_Profile_Flg: false,
        Prod_Servc_Profile_Flg: true,
        Client_Profile_Flg: false,
        Geo_Service_Profile_Flg: false,
        Corp_Contact_Profile_Flg: false
      };

      try {
        const res1 = await firstValueFrom(
          this.apiService.postCall(this.apiService.baseURL + '/AddMDR_ProfilePRDCTSERVCAddon', payload)
        );

        console.log("First API response:", res1);

        if (typeof res1 === "string" && res1.includes("limit")) {
          this.toastr.error(res1, "", { timeOut: 5000 });
        } else {
          this.toastr.success("Product and Service saved successfully!", "", { timeOut: 5000 });
        }

        await new Promise(resolve => setTimeout(resolve, 1000));

        const res2: any = await firstValueFrom(
          this.apiService.postCall(this.apiService.baseURL + '/GetMdrProfileAddons', payloadforget)
        );

        console.log("REs: ", res2)

        this.storeandprdtArr = Array.isArray(res2) ? res2 : (res2?.MEDIA_LIST ?? []);
        console.log("Store and Services:", this.storeandprdtArr);

        this.modalRef?.hide();
      } catch (err) {
        console.error("Error:", err);
        this.toastr.error("Failed to save Media Certification!", "", { timeOut: 5000 });
      }
    } else {
      this.toastr.warning("Please fill all required fields!", "", { timeOut: 3000 });
    }
  }


  loadMainProfile() {
    console.log("Main Profile function executed");

    this.apiService.getCall(this.apiService.baseURL + `/GetSingleMdrStoreMasterProfile/${1001070099}`)
      .subscribe({
        next: (data) => {
          this.mainProfileForm.patchValue({
            Login_Storecode: data.storecode || '1001070099',
            Main_Display_Text: data.MDR_CORP_PROFILE_DISPLAY_TEXT,
            Corp_Logo: data.MDR_CORP_LOGO,
            Corp_About_Text: data.MDR_CORP_ABOUT_TEXT,
            Website_URL: data.Website_URL || '',
            Corp_PhoneNumber: data.Corp_PhoneNumber || '',
            Corp_Emailid: data.Corp_Emailid || '',
            Corp_Responder_Name: data.Corp_Responder_Name || '',
            MainProfile_Mngmt_Pic: data.MDR_TOP_MNGMT_PIC_IMAGE,
            MainProfile_FirstName: data.MDR_TOP_MNGMT_FIRST_NAME,
            MainProfile_LastName: data.MDR_TOP_MNGMT_LAST_NAME,
            MainProfile_Designation: data.MDR_TOP_MNGMT_CORP_TITLE,
            Mngmt_About_Text: data.Mngmt_About_Text || '',
            Employee_Counts: data.MDR_NO_OF_EMPLOYEES_COUNTS
          });

          console.log("Profile data: ", this.mainProfileForm.value)

          if (data && data.MDR_MEMBERSHIP_ID) {
            this.mainProfileForm.disable();
            this.isProfileExisting = true;
          }

        },
        error: (error) => {
          this.toastr.error(error, '', { timeOut: 5000 });
        }
      });

  }

  onOrgLogoChange(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        const base64WithPrefix = reader.result as string;

        this.orgLogoUrl = base64WithPrefix;

        const base64String = base64WithPrefix.split(',')[1];

        this.mainProfileForm.get('Corp_Logo')?.setValue(base64String);

        // console.log("Org Logo Base64 (no prefix):", base64String);
      };

      reader.readAsDataURL(file);
    }
  }

  onProfilePicChange(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        const base64WithPrefix = reader.result as string;

        this.profilePicUrl = base64WithPrefix;

        const base64String = base64WithPrefix.split(',')[1];

        this.mainProfileForm.get('MainProfile_Mngmt_Pic')?.setValue(base64String);

        // console.log("Base64 (no prefix):", base64String);
      };

      reader.readAsDataURL(file);
    }
  }

  profilePicUrladdKeyManagement = '';

  onProfilePicChangeaddKeyManagementProfile(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        const base64WithPrefix = reader.result as string;

        this.profilePicUrladdKeyManagement = base64WithPrefix;

        const base64String = base64WithPrefix.split(',')[1];

        this.editkeymanagementprofile.Person_PIC = base64String;
        this.keyManagementForm.get('profilePic')?.setValue(base64String);

        // console.log("Base64 (no prefix):", base64String);
      };

      reader.readAsDataURL(file);
    }
  }


  keyProfile = {
    firstName: '',
    lastName: '',
    designation: '',
    active: true,
    about: '',
    imageUrl: ''
  };

  media = {
    subject: '',
    active: true,
    mediaDetails: '',
    imageUrl: ''
  };

  onMediaImageSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.media.imageUrl = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  addMedia(): void {
    console.log('Media:', this.media);
    this.modalRef?.hide();
  }


  onProfileImageSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.keyProfile.imageUrl = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }


  addKeyProfile(): void {
    console.log('Key Profile:', this.keyProfile);
    this.modalRef?.hide();
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, Object.assign({}, { class: 'modal-lg' }));
  }

  openSmallModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, Object.assign({}, { class: 'modal-md' }));
  }

  onSubmit(): void {
    if (this.mainProfileForm.valid) {
      const payload = this.mainProfileForm.getRawValue();

      const apiUrl = this.isProfileExisting
        ? this.apiService.baseURL + '/EditMDR_MainProfile'
        : this.apiService.baseURL + '/AddMDR_MainProfile';

      this.apiService.postCall(apiUrl, payload).subscribe({
        next: (data) => {
          this.toastr.success('Profile saved successfully');
          this.loadMainProfile();
        },
        error: (error) => {
          this.toastr.error(error, '', { timeOut: 5000 });
        }
      });

    } else {
      this.mainProfileForm.markAllAsTouched();
    }
  }

  viewgeoServicibilityDetails(client: any) {

  }

  editgeoservicibility: any;

  openeditgeoServicibilityClient(geo: any, template: TemplateRef<any>) {

    this.apiService.StateList(geo.MDR_SERVC_COUNTRY_ID).subscribe((stateRes) => {
      this.stateList = stateRes;
      console.log("State List: ", stateRes);

      this.apiService.CityList(geo.MDR_SERVC_COUNTRY_ID, geo.MDR_SERVC_STATE_ID).subscribe((cityRes) => {
        this.cityList = cityRes;
        console.log("City List: ", cityRes);

        const selectedState = this.stateList.find(
          (s: any) => s.STATE_ID === geo.MDR_SERVC_STATE_ID
        );
        const stateName = selectedState ? selectedState.STATE_NM : null;

        const selectedCity = this.cityList.find(
          (c: any) => c.CITY_ID === geo.MDR_SERVC_CITY_ID
        );
        const cityName = selectedCity ? selectedCity.CITY_NM : null;

        this.apiService.ZipList(stateName, cityName).subscribe((zipRes) => {
          this.zipList = zipRes;
          console.log("ZIP List: ", zipRes);
        });
      });
    });

    this.editgeoservicibility = {
      Storecode: "1001070099",
      ServiceId: geo.MDR_SERVC_ID,
      Geo_Category: geo.MDR_GEOSERVICIBILITY_CATGRY,
      CountryId: geo.MDR_SERVC_COUNTRY_ID,
      StateId: geo.MDR_SERVC_STATE_ID,
      CityId: geo.MDR_SERVC_CITY_ID,
      PinCode: geo.MDR_SERV_PINCODE,
      Activ_Flg: geo.MDR_GEO_ACTIV_FLG
    }

    console.log(this.editgeoservicibility)

    this.openModal(template);

  }

  getCountry() {
    this.apiService.CountryList().subscribe((res) => {
      console.log("Country List: ", res)
      this.countryList = res;
      //   this.getState();
    });
  }

  changeCountry(e) {
    this.countryID = e.target.value;
    this.countryEvent.emit(this.countryID)
    console.log(this.countryID);
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
      console.log("State List: ", res)
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
      console.log("City List: ", res)
    });
  }
  changeCity(e) {
    this.cityID = e.target.value;
    console.log(this.cityID);
    this.cityEvent.emit(this.cityID)
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
    this.pincodeEvent.emit(this.pinID)
  }

}
