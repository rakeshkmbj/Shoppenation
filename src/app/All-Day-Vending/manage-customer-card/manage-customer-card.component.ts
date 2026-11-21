import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormGroup, Validators, FormBuilder, AbstractControl, NgForm } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';
import { NgxSpinnerService } from "ngx-spinner";
import { NavigationExtras, Router } from '@angular/router';
import { RazorpayService } from '../../razorpay.service';
import { PaymentStatusService } from 'src/app/services/payment-status.service';
import { takeUntil, filter } from 'rxjs/operators';
import { Subscription, Subject } from 'rxjs';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';

@Component({
  selector: 'app-manage-customer-card',
  templateUrl: './manage-customer-card.component.html',
  styleUrls: ['./manage-customer-card.component.scss']
})
export class ManageCustomerCardComponent implements OnInit {

  modalRef: BsModalRef;
  countryList: any[] = [];
  countryID: any;
  countryName: any;
  searchCenterForm: any;
  cityList: any[] = [];
  stateList: any[] = [];
  stateID: any;
  stateName: any;
  cityName: any;
  zipList: any[] = [];
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
  gstPercent = 5;
  openCart: any;
  gstAmount = 0;
  totalAmount = 0;
  maxCashAmount = 476.19;
  memberIdentity: any;
  selectedBrandCommerceTab: any;
  searchType: string = 'manufacturer';
  manufacturerId: string = '';
  mobileNumber: string = '';
  showDetails: boolean = false;
  B2BLinkIdForD10: any;
  addBrandCommerceForm: FormGroup;
  dateFrom: any;

  cardCreationMisArr: any;
  cardCreationMisPage = 1;
  readonly cardCreationMisPageSize = 10;

  cardTnxRefillArr: any;
  cardTnxRefillPage = 1;
  readonly cardTnxRefillPageSize = 10;

  cardTnxSpendArr: any;
  cardTnxSpendPage = 1;
  readonly cardTnxSpendPageSize = 10;

  settlementTnxCashArr: any;
  settlementTnxCashPage = 1;
  readonly settlementTnxCashPageSize = 10;
  settlementTnxOnlineArr: any;
  settlementTnxOnlinePage = 1;
  readonly settlementTnxOnlinePageSize = 10;

  // Registration
  regId: any;

  // Wallet
  walletType: string = '';
  refillAmount: number | null = null;
  paymentType: string = '';

  // Cart
  cartSummary = {
    wallet: 'Personal',
    amount: 50,
    payment: 'Cash',
    total: 50
  };

  constructor(
    private apiService: ApiService,
    private modalService: BsModalService,
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private razorpayService: RazorpayService,
    private paymentStatusService: PaymentStatusService,
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

    this.addBrandCommerceForm = this.formBuilder.group({
      user: ['', Validators.required]
    })

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

  private destroy$ = new Subject<void>();

  ngOnInit(): void {

    if (this.getlogindata.DOMAIN_ID == 10 && this.getlogindata.SECND_NODE_SUBACCT_FLG == true) {

      const payload = {
        "Domainid": this.getlogindata.DOMAIN_ID,
        "Secndry_Subacctid": this.subaccountid,
        "Secndry_Storeid": this.storeid
      }

      this.apiService.postCall(`${this.apiService.baseURL}/GetVendingPrimrySecndryB2BId`, payload)
        .subscribe(data => {
          console.log(data);
          this.B2BLinkIdForD10 = data.ACCT_PRIMRY_SECNDRY_B2B_LINK_SEQ_ID;
        },
          (error) => {
            console.log(error);
            this.toastr.error(error.error, '', {
              timeOut: 5000,
            });
          }
        );
    } else {
      this.B2BLinkIdForD10 = 'jr0xpPU';
    }

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

    this.calculateAmount();
    this.paymentStatusService.paymentStatus$
      .pipe(
        takeUntil(this.destroy$),
        filter(status => status?.success)
      )
      .subscribe(status => {

        if (status) {
          if (status.success) {
            try {
              const payload = {
                cartId: this.openCart?.MDR_CONCT_SERVICE_CARTID,
                storecode: this.regId,
                serviceId: this.openCart?.MDR_CONCT_CART_FOR_SERVICEID,
                confirmPayFlg: true,
                rzrpay_Pamnt_Id: status.paymentId,
                rzrpay_Signature: status.paymentSignature,
                rzrpay_Live_Flg: this.openCart.MDR_PG_LIVE_KEY_FLG
              }

              console.log("payload: ", payload)

              this.apiService.postCall(this.apiService.baseURL + '/MDR_Service_10and8_MakePayments', payload)
                .subscribe(data => {
                  console.log(data);
                  this.toastr.success(data.Message, '', {
                    timeOut: 5000,
                  });
                  this.modalRef?.hide();
                },
                  (error) => {
                    console.log(error)
                    this.toastr.error(error, '', {
                      timeOut: 5000,
                    });
                  });

              this.paymentStatusService.updatePaymentStatus(null);

            } catch (error: any) {
              console.log(error)
            }
          }

          console.log('Payment status: ', status)
        }

      });

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

  brandCommerce(template: any, user: any) {
    this.SelectedUser = user;
    this.confirmation = "";
    this.modalRef = this.modalService.show(template, { class: 'modal-xl' });
  }

  onBrandCommerceTabSelected(tab: any): void {
    this.selectedBrandCommerceTab = tab.id || '';

    console.log("Selected TAB: ", tab.id);
    if (this.selectedBrandCommerceTab === 'tab1') {

    } else if (this.selectedBrandCommerceTab === 'tab2') {

    }
  }

  showMIS(selectedAccBasedMisTab: any) {

    this.cardCreationMisArr = [];
    this.cardTnxRefillArr = [];
    this.cardTnxSpendArr = [];
    this.settlementTnxCashArr = [];
    this.settlementTnxOnlineArr = [];

    if (selectedAccBasedMisTab === 'tab1') {
      this.getCardCreationMis();
    } else if (selectedAccBasedMisTab === 'tab21') {
      this.getCardTnxMis('refill');
    } else if (selectedAccBasedMisTab === 'tab22') {
      this.getCardTnxMis('spend');
    } else if (selectedAccBasedMisTab === 'tab31') {
      this.getSettlementMis('cash');
    } else if (selectedAccBasedMisTab === 'tab32') {
      this.getSettlementMis('online');
    }
  }

  downloadPDF(selectedAccBasedMisTab: any) {
    let reportTitle: string;
    let headers: string[];
    let data: any[];
    let rows: string[][];
    let amountField: string | null = null;

    switch (selectedAccBasedMisTab) {
      case 'tab1':
        reportTitle = 'Card Creation MIS';
        headers = ['Serial#', 'DateTime', 'Card used UID', 'Section/Dept', 'Name', 'Mob. No.'];
        data = this.cardCreationMisArr;
        rows = (Array.isArray(data) ? data : []).map((item, index) => [
          this.formatPdfValue(index + 1),
          this.formatPdfDate(item.ADC_VEND_CARDHOLDR_REGISTRD_DATETIME),
          this.formatPdfValue(item.ADC_VEND_MANUFACTR_CARDID),
          this.formatPdfValue(item.ADC_VEND_CLAS_DEPT_NAME),
          this.formatPdfName(item.ADC_VEND_CARDHOLDR_FIRST_NAME, item.ADC_VEND_CARDHOLDR_LAST_NAME),
          this.formatPdfValue(item.ADC_VEND_CARDHOLDR_PRIM_MOB_NUMBR)
        ]);
        break;
      case 'tab21':
        reportTitle = 'Card Re-fill Transactions';
        amountField = 'ADC_MEMBER_CREDIT_AMT';
        headers = ['Serial#', 'DateTime', 'Card used UID', 'Section/Dept', 'Name', 'Mob. No.', 'Online', 'Cash', 'Amount (INR)'];
        data = this.cardTnxRefillArr;
        rows = (Array.isArray(data) ? data : []).map((item, index) => [
          this.formatPdfValue(index + 1),
          this.formatPdfDate(item.ADC_MEMBER_CREDIT_TRANS_DATETIME),
          this.formatPdfValue(item.ADC_VEND_MANUFACTR_CARDID),
          this.formatPdfValue(item.ADC_VEND_CLAS_DEPT_NAME),
          this.formatPdfName(item.ADC_VEND_CARDHOLDR_FIRST_NAME, item.ADC_VEND_CARDHOLDR_LAST_NAME),
          this.formatPdfValue(item.ADC_VEND_CARDHOLDR_PRIM_MOB_NUMBR || item.ADC_VEND_CARDHOLDR_ALTRNT_MOB_NUMBR),
          item.ADC_MEMBER_CREDIT_PAYMENT_MODE === 'online' ? 'Yes' : 'No',
          item.ADC_MEMBER_CREDIT_PAYMENT_MODE === 'cash' ? 'Yes' : 'No',
          this.formatPdfValue(item.ADC_MEMBER_CREDIT_AMT)
        ]);
        break;
      case 'tab22':
        reportTitle = 'Spend On Vends Transactions';
        amountField = 'ADC_MEMBER_DEBIT_COST_AMT';
        headers = ['Serial#', 'DateTime', 'Card used UID', 'Section/Dept', 'Name', 'Mob. No.', 'Vend ID', 'Product ID', 'Amount (INR)'];
        data = this.cardTnxSpendArr;
        rows = (Array.isArray(data) ? data : []).map((item, index) => [
          this.formatPdfValue(index + 1),
          this.formatPdfDate(item.ADC_MEMBER_DEBIT_TRANS_DATETIME),
          this.formatPdfValue(item.ADC_VEND_MANUFACTR_CARDID),
          this.formatPdfValue(item.ADC_VEND_CLAS_DEPT_NAME),
          this.formatPdfName(item.ADC_VEND_CARDHOLDR_FIRST_NAME, item.ADC_VEND_CARDHOLDR_LAST_NAME),
          this.formatPdfValue(item.ADC_VEND_CARDHOLDR_PRIM_MOB_NUMBR || item.ADC_VEND_CARDHOLDR_ALTRNT_MOB_NUMBR),
          this.formatPdfValue(item.ADC_MEMBER_DEBIT_TRANS_VENDID),
          this.formatPdfValue(item.ADC_MEMBER_DEBIT_PRODCT_ID),
          this.formatPdfValue(item.ADC_MEMBER_DEBIT_COST_AMT)
        ]);
        break;
      case 'tab31':
        reportTitle = 'Online Transactions Settlements';
        amountField = 'ADC_VEND_TRANS_CREDIT_AMT';
        headers = ['Serial#', 'DateTime', 'Card used UID', 'Section/Dept', 'Name', 'Mob. No.', 'Receivable Amt'];
        data = this.settlementTnxCashArr;
        rows = (Array.isArray(data) ? data : []).map((item, index) => [
          this.formatPdfValue(index + 1),
          this.formatPdfDate(item.ADC_VEND_TRANS_DATETIME),
          '-',
          this.formatPdfValue(item.ADC_VEND_CLAS_DEPT_NAME),
          this.formatPdfName(item.ADC_VEND_CARDHOLDR_FIRST_NAME, item.ADC_VEND_CARDHOLDR_LAST_NAME),
          this.formatPdfValue(item.ADC_VEND_CARDHOLDR_PRIM_MOB_NUMBR),
          this.formatPdfValue(item.ADC_VEND_TRANS_SECND_NODE_RECVBL_AMT)
        ]);
        break;
      case 'tab32':
        reportTitle = 'Offline Transactions Settlements';
        amountField = 'ADC_VEND_TRANS_CREDIT_AMT';
        headers = ['Serial#', 'DateTime', 'Card used UID', 'Section/Dept', 'Name', 'Mob. No.', 'Receivable Amt'];
        data = this.settlementTnxOnlineArr;
        rows = (Array.isArray(data) ? data : []).map((item, index) => [
          this.formatPdfValue(index + 1),
          this.formatPdfDate(item.ADC_VEND_TRANS_DATETIME),
          '-',
          this.formatPdfValue(item.ADC_VEND_CLAS_DEPT_NAME),
          this.formatPdfName(item.ADC_VEND_CARDHOLDR_FIRST_NAME, item.ADC_VEND_CARDHOLDR_LAST_NAME),
          this.formatPdfValue(item.ADC_VEND_CARDHOLDR_PRIM_MOB_NUMBR),
          this.formatPdfValue(item.ADC_VEND_TRANS_SECND_NODE_RECVBL_AMT)
        ]);
        break;
      default:
        this.toastr.error('Unable to determine which report to export.');
        return;
    }

    if (!Array.isArray(data) || data.length === 0) {
      this.toastr.warning('No report data is available. Display the report before downloading.');
      return;
    }

    const account = this.selectedAccountObj || {};
    const officeName = this.formatPdfValue(account.RETAIL_D2C_SUBACCT_OFFICE_NAME);
    const orientation = headers.length > 7 ? 'landscape' : 'portrait';
    const pdf = new jsPDF({ orientation });

    const drawHeader = () => {
      pdf.setFont('helvetica', 'bold');
      pdf.setFontSize(14);
      pdf.text(reportTitle, 14, 16);
      pdf.setFont('helvetica', 'normal');
      pdf.setFontSize(10);
      pdf.text(`Office: ${officeName}`, 14, 23);
      pdf.text(
        `SubAccount ID: ${this.formatPdfValue(account.THIRD_NODE_ACCT_SUBACCT_ID)}  |  Store ID: ${this.formatPdfValue(account.THIRD_NODE_ACCT_STORE_ID)}  |  Category: ${this.formatPdfValue(account.CategoryName)}`,
        14,
        29
      );
      pdf.text(`Date From: ${this.formatPdfValue(this.dateFrom)}`, 14, 35);
    };

    drawHeader();
    autoTable(pdf, {
      head: [headers],
      body: rows,
      startY: 41,
      theme: 'grid',
      styles: { font: 'helvetica', fontSize: 8, cellPadding: 2, overflow: 'linebreak' },
      headStyles: { fillColor: [107, 16, 20], textColor: 255, fontStyle: 'bold' },
      margin: { top: 41, right: 14, bottom: 14, left: 14 },
      didDrawPage: () => drawHeader()
    });

    if (amountField) {
      const total = data.reduce((sum, item) => {
        const amount = Number(item?.[amountField]);
        return sum + (Number.isFinite(amount) ? amount : 0);
      }, 0);
      const finalY = (pdf as jsPDF & { lastAutoTable?: { finalY: number } }).lastAutoTable?.finalY ?? 41;
      let totalY = finalY + 9;

      if (totalY > pdf.internal.pageSize.getHeight() - 14) {
        pdf.addPage();
        drawHeader();
        totalY = 43;
      }

      pdf.setFont('helvetica', 'bold');
      pdf.setFontSize(10);
      pdf.text(`Total (INR): ${total.toFixed(2)}`, pdf.internal.pageSize.getWidth() - 14, totalY, { align: 'right' });
    }

    const safeOfficeName = String(account.RETAIL_D2C_SUBACCT_OFFICE_NAME || 'account')
      .trim()
      .replace(/[^a-z0-9]+/gi, '_')
      .replace(/^_+|_+$/g, '');
    const safeDate = String(this.dateFrom || new Date().toISOString().slice(0, 10)).replace(/[^0-9-]/g, '');
    pdf.save(`${safeOfficeName}_${selectedAccBasedMisTab}_${safeDate}.pdf`);
  }

  private formatPdfValue(value: any): string {
    return value === null || value === undefined || value === '' ? '-' : String(value);
  }

  private formatPdfDate(value: any): string {
    if (!value) {
      return '-';
    }

    const date = new Date(value);
    return Number.isNaN(date.getTime())
      ? this.formatPdfValue(value)
      : date.toLocaleString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: 'numeric',
        minute: '2-digit'
      });
  }

  private formatPdfName(firstName: any, lastName: any): string {
    return [firstName, lastName].filter(value => value !== null && value !== undefined && value !== '').join(' ') || '-';
  }

  getCardCreationMis() {

    this.cardCreationMisPage = 1;

    const payload = {
      "Third_Node_Subacctid": this.selectedAccountObj.THIRD_NODE_ACCT_SUBACCT_ID,
      "Third_Node_Storeid": this.selectedAccountObj.THIRD_NODE_ACCT_STORE_ID,
      "Date_From": this.dateFrom
    }

    console.log("payload for card creation MIS: ", payload);

    this.apiService.postCall(`${this.apiService.baseURL}/GetAcctCardsReport`, payload)
      .subscribe(data => {
        console.log(data);

        if (data.Message) {
          this.toastr.success(data.Message);
        } else {
          this.cardCreationMisArr = data;
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

  getCardTnxMis(type: any) {

    if (type === 'refill') {
      this.cardTnxRefillPage = 1;
    } else if (type === 'spend') {
      this.cardTnxSpendPage = 1;
    }

    const payload = {
      "Third_Node_Subacctid": this.selectedAccountObj.THIRD_NODE_ACCT_SUBACCT_ID,
      "Third_Node_Storeid": this.selectedAccountObj.THIRD_NODE_ACCT_STORE_ID,
      "Date_From": this.dateFrom,
      "Refill_TXN_Flg": type === 'refill' ? true : false,
      "Spend_TXN_Flg": type === 'spend' ? true : false,
    }

    console.log("payload for card Trnx MIS: ", payload);

    this.apiService.postCall(`${this.apiService.baseURL}/GetAcctTxnReport`, payload)
      .subscribe(data => {
        console.log(data);

        if (data.Message) {
          this.toastr.success(data.Message);
        } else {
          if (type === 'refill') {
            this.cardTnxRefillArr = data;
          } else {
            this.cardTnxSpendArr = data;
          }
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

  getCardRefillTotal(): number {
    if (!Array.isArray(this.cardTnxRefillArr)) {
      return 0;
    }

    return this.cardTnxRefillArr.reduce((total, item) => {
      const amount = Number(item?.ADC_MEMBER_CREDIT_AMT);
      return total + (Number.isFinite(amount) ? amount : 0);
    }, 0);
  }

  getSettlementMis(type: any) {

    if (type === 'cash') {
      this.settlementTnxCashPage = 1;
    } else {
      this.settlementTnxOnlinePage = 1;
    }

    const payload = {
      "Third_Node_Subacctid": this.selectedAccountObj.THIRD_NODE_ACCT_SUBACCT_ID,
      "Third_Node_Storeid": this.selectedAccountObj.THIRD_NODE_ACCT_STORE_ID,
      "Date_From": this.dateFrom,
      "Cash_Flg": type === 'online' ? true : false,
      "Online_PB_Flg": type === 'cash' ? true : false,
    }

    console.log("payload for Settlement MIS: ", payload);

    this.apiService.postCall(`${this.apiService.baseURL}/GetAcctSettlementReport`, payload)
      .subscribe(data => {
        console.log(data);

        if (data.Message) {
          this.toastr.success(data.Message);
        } else {
          if (type === 'cash') {
            this.settlementTnxCashArr = data;
          } else {
            this.settlementTnxOnlineArr = data;
          }
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

  getSettlementCashTotal(): number {
    if (!Array.isArray(this.settlementTnxCashArr)) {
      return 0;
    }

    return this.settlementTnxCashArr.reduce((total, item) => {
      const amount = Number(item?.ADC_VEND_TRANS_CREDIT_AMT);
      return total + (Number.isFinite(amount) ? amount : 0);
    }, 0);
  }

  openAccBasedMISAndSummary(template: any) {
    this.modalRef = this.modalService.show(template, { class: 'modal-xl' });
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

      console.log("Payload for edit card holder: ", payload);

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

          // if(data.Message === '')


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
      B2b_id: this.B2BLinkIdForD10
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

  backOfficeCardRefill(template: any) {

    this.showDetails = false;
    this.mobileNumber = '';
    this.manufacturerId = '';
    this.regId = '';

    this.resetForm();

    this.modalRef = this.modalService.show(template, Object.assign({}, { class: 'modal-lg' }));
  }

  // Search
  searchCredential(form: NgForm) {
    if (form.invalid) {
      form.control.markAllAsTouched();
      return;
    }

    if (this.searchType == 'manufacturer') {
      if (!this.manufacturerId) {
        alert('Please enter Card Manufacturer ID');
        return;
      }
    }

    if (this.searchType == 'mobile') {
      if (!this.mobileNumber) {
        alert('Please enter Registered Mobile Number');
        return;
      }
    }

    const payload = {
      Card_Manf_UID_Flg: this.searchType === 'manufacturer' ? true : false,
      Card_Primry_MobIle_FLg: this.searchType === 'mobile' ? true : false,
      Card_UID: this.manufacturerId,
      Card_Mob_Numbr: this.mobileNumber
    }

    this.apiService.postCall(this.apiService.baseURL + '/GetMemberIdentity', payload)
      .subscribe(
        (data: any) => {
          console.log("Data: ", data);
          this.memberIdentity = data;
          this.regId = data.ADC_VEND_CARDHOLDR_REGID;
          this.showDetails = true;
        },
        (error) => {
          this.spinner.hide();
          this.loadingRefill = false;
          this.toastr.error('Failed to fetch data');
        }
      );
  }

  // Add To Cart
  addToCart(form: NgForm, template: any) {

    if (form.invalid) {
      form.control.markAllAsTouched();
      return;
    }

    if (this.refillAmount! < 1 || this.refillAmount! > 500) {
      return;
    }

    const payload = {
      Storecode: this.regId,
      MemberPlanId: "999",
      PlanName: 'Vending Plan',
      ServiceId: '21',
      ServicePrice: this.refillAmount.toFixed(2),
      Quantity: 1,
      DiscountPercent: 0,
      GstPercent: this.gstPercent,
      Currency: 'INR',
      Login_Subacctid: this.subaccountid,
      Login_Storeid: this.storeid,
      Persnl_Walt_Flg: this.walletType === 'Personal' ? true : false,
      Corp_Walt_Flg: this.walletType === 'Corporate' ? true : false,
      Cash_Flg: this.paymentType === 'Cash' ? true : false,
      Digital_Paymnt_Flg: this.paymentType === 'Digital' ? true : false,
    }

    console.log("payload: ", payload)

    this.apiService.postCall(this.apiService.baseURL + '/MDRCheckout', payload)
      .subscribe(data => {
        console.log(data);
        this.openCart = data;

        this.modalRef.hide();

        this.modalRef = this.modalService.show(template, { class: 'modal-md' });
      },
        (error) => {
          console.log("error: ", error);
          this.toastr.error(error.error || error, '', {
            timeOut: 5000,
          });
        });
  }

  cartFormPreserve: any;

  openAddToCart(cartForm: NgForm, checkouTemplate: any, confirmCheckoutTemplate: any) {
    if (this.walletType === 'Corporate') {
      this.toastr.error("This feature is unavailable");
    }
    else if (this.paymentType === 'Cash') {
      this.cartFormPreserve = cartForm;
      this.modalRef.hide();
      this.modalRef = this.modalService.show(confirmCheckoutTemplate, { class: 'modal-md' });
    } else {
      this.addToCart(cartForm, checkouTemplate);
    }
  }

  diaplyCart(template: any) {

    const payload = {
      "Storecode": this.regId,
      "Serviceid": "21"
    }

    console.log("Display cart: ", payload);

    this.apiService.postCall(this.apiService.baseURL + '/Display-OpenCart', payload)
      .subscribe(data => {
        console.log(data);

        if (data.Message === "No Open cart Found for the Store") {
          this.toastr.error(data.Message);
        } else {
          this.openCart = data;
          this.modalRef.hide();
          this.modalRef = this.modalService.show(template, { class: 'modal-md' });
        }

      },
        (error) => {
          this.toastr.error(error.error?.Message || error, '', {
            timeOut: 5000,
          });
        });

  }

  // Checkout
  checkout() {
    console.log('Checkout');
    console.log(this.cartSummary);

    // Checkout API

  }

  onPaymentTypeChange(): void {

    if (this.paymentType === 'Cash') {
      // Fixed amount for cash
      this.refillAmount = this.maxCashAmount;
    } else {
      // Clear amount for digital so user can enter any value
      this.refillAmount = null;
    }

  }

  // Reset Form
  resetForm() {
    this.searchType = 'manufacturer';
    this.manufacturerId = '';
    this.mobileNumber = '';
    this.showDetails = false;
    this.regId = '';

    this.walletType = '';
    this.refillAmount = null;
    this.paymentType = '';
  }

  closeCheckout() {
    this.modalRef?.hide();
  }

  deleteCart() {
    const payload = {
      Storecode: this.regId,
      ServiceId: this.openCart?.MDR_CONCT_CART_FOR_SERVICEID,
      CartId: this.openCart?.MDR_CONCT_SERVICE_CARTID
    }

    console.log("delete payload: ", payload);

    this.apiService.postCall(this.apiService.baseURL + '/Delete_MDR_ServiceCart', payload)
      .subscribe(data => {
        console.log(data);
        this.toastr.success(data.Message)

        this.modalRef?.hide();
        this.openCart = null;
      },
        (error) => {
          console.log('Error: ', error)
          this.toastr.error(error.error?.Message || error, '', {
            timeOut: 5000,
          });
        });
  }

  calculateAmount() {
    this.gstAmount = +(this.refillAmount * this.gstPercent / 100).toFixed(2);
    this.totalAmount = +(this.refillAmount + this.gstAmount).toFixed(2);
  }

  payAmount() {
    if (!this.openCart) {
      this.toastr.error('No checkout found. Please Add to Cart first.');
      return;
    }

    if (this.paymentType === 'Cash') {

      const payload = {
        CartId: this.openCart.MDR_CONCT_SERVICE_CARTID,
        Storecode: this.regId,
        ServiceId: "21",
        ConfirmPayFlg: true,
        Persnl_Wallet_Flg: this.walletType === 'Personal' ? true : false,
        Corp_Wallet_Flg: this.walletType === 'Corporate' ? true : false,
        Corp_Wallet_Subacctid: this.memberIdentity.ADC_VEND_THIRD_NODE_SUBACCTID,
        Corp_Wallet_Storeid: this.memberIdentity.ADC_VEND_THIRD_NODE_STOREID,
        Cash_Flg: true
      }

      console.log("Cash payment payload: ", payload);

      this.apiService.postCall(this.apiService.baseURL + '/BackofficeCashPayment', payload)
        .subscribe(data => {
          console.log(data);

          if (data.Message === ' Corporate Wallets are not associated with your account ') {
            this.toastr.error(data.Message);
          } else {
            this.toastr.success(data.Message);
          }

          this.modalRef?.hide();
          this.openCart = null;
        },
          (error) => {
            console.log('Error: ', error)
            this.toastr.error(error.error?.Message || error, '', {
              timeOut: 5000,
            });
          });

    } else {
      this.razorpayService.payWithRazorpay(
        this.openCart.Id,
        this.openCart.MDR_CONCT_CART_TOTAL_TO_PAY_AMT_IN_PAISA,
        this.openCart.MDR_PG_LIVE_KEY_FLG,
        this.openCart.PlateformName,
        this.openCart.email,
        this.openCart.Contact);
    }

  }

  confirmCheckout(checkoutModal: any) {
    this.addToCart(this.cartFormPreserve, checkoutModal);
  }

  addBrandCommerceUser() {

    const formValue = this.addBrandCommerceForm.getRawValue();

    const payload = {
      "User_Regid": this.SelectedUser.ADC_VEND_CARDHOLDR_REGID,
      "User_Type": formValue.user,
      "Login_Subacctid": this.subaccountid,
      "Login_Storeid": this.storeid
    }

    console.log("Payload for add user: ", payload);

    this.apiService.postCall(this.apiService.baseURL + '/AddUserOnBrandCommerce', payload)
      .subscribe(data => {
        console.log(data);

        if (data.Message === 'User Type is Not Added to Brand Commerce') {
          this.toastr.error(data.Message);
        } else {
          this.toastr.success(data.Message);
        }

      },
        (error) => {
          console.log('Error: ', error)
          this.toastr.error(error.error?.Message || error, '', {
            timeOut: 5000,
          });
        });
  }


  vendTransaction: any = {};

  displayVendTransactionDetailModal(template: any, transaction: any): void {
    this.vendTransaction = transaction;

    this.modalRef.hide();

    this.modalRef = this.modalService.show(template, {
      class: 'modal-lg'
    });
  }


}