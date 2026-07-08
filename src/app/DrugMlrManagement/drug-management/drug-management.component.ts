import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormGroup, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';
import { NgxSpinnerService } from "ngx-spinner";
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-drug-management',
  templateUrl: './drug-management.component.html',
  styleUrls: ['./drug-management.component.scss']
})
export class DrugManagementComponent implements OnInit {

  activeTabId: any;
  modalRef: any;

  drugPkForm: FormGroup;
  absorptionForm: FormGroup;
  distributionForm: FormGroup;
  metabolismForm: FormGroup;
  eliminationForm: FormGroup;
  timeBasedForm: FormGroup;
  specialPopulationForm: FormGroup;
  drugDrugInteractionForm: FormGroup;
  clinicalInterpretationForm: FormGroup;
  regulatoryEvidenceForm: FormGroup;

  constructor(
    private apiService: ApiService,
    private modalService: BsModalService,
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
  ) {

    this.drugPkForm = this.formBuilder.group({
      subitemId: [''],
      drugName: [''],
      pkId: [''],

      drugType: [''],
      drugForm: [''],
      route: [''],
      subRoute: [''],

      drugStrength: [''],
      mu: [''],

      drugRefProduct: [''],
      productType: [''],
      studyPopulation: [''],

      drugPhase: [''],
      country: [''],
      sponsor: [''],

      doseUnit: [''],
      bioanalyticalMethod: [''],

      var1: [''],
      var2: [''],
      var3: [''],

      targetClass: [''],
      targetFamily: [''],
      targetSubtype: [''],
      specificTarget: ['']
    });

    this.absorptionForm = this.formBuilder.group({

      baDetail: [''],

      aucOral: [''],
      aucIv: [''],
      absoluteBA: [''],

      doseOral: [''],
      doseIv: [''],
      relativeF: [''],

      tmax: [''],
      cmax: [''],
      ka: [''],

      pka: [''],
      foodEffect: [''],
      drugBA: [''],

      gastricPhDependence: [false],
      firstpassMetabolism: [false],
      consistentPatient: [false],
      supportTable1: [false],

      supportTable2: [false],
      measuredUsingAUC: [false],
      measuredUsingCmax: [false],
      accessedUsingFeed: [false],

      changesUsingDoseEscalation: [false],
      pgpSubstrate: [false],
      accessedUsingFasting: [false],
      scLymphaticUptake: [false],

      engraftmentRate: [''],
      vectorEntryRate: [''],

      var1: [''],
      var2: [''],
      var3: [''],

      clinicalRef: ['']
    });

    this.distributionForm = this.formBuilder.group({

      volumeDistribution: [''],
      plasmaProteinBinding: [''],
      bbbPenetration: [false],

      tissueSelectivity: [''],
      placentalTransfer: [false],
      breastMilkExcretion: [false],

      summary: [''],

      var1: [''],
      var2: [''],
      var3: ['']
    });

    this.metabolismForm = this.formBuilder.group({

      metabolismOrgan: [''],
      hepaticClearance: [''],
      intrinsicClearance: [''],

      enzymeInvolved: [''],

      enzymeInhibitor: [false],
      enzymeInducer: [false],

      activeMetabolites: [false],
      metabolitePotency: [''],

      geneticPolymorphism: [false],

      summary: [''],

      var1: [''],
      var2: [''],
      var3: ['']
    });

    this.eliminationForm = this.formBuilder.group({

      clearanceValue: [''],
      halfLife: [''],
      routeElimination: [''],

      renalExcretion: [''],
      hepaticExcretion: [''],

      dialyzable: [false],

      summary: [''],

      var1: [''],
      var2: [''],
      var3: ['']
    });

    this.timeBasedForm = this.formBuilder.group({

      steadyState: [''],
      accumulationRisk: [''],
      peakFluctuation: [''],

      linearStatus: [false],
      nonLinearThreshold: [''],

      dailyCompliance: [false],

      summary: [''],

      var1: [''],
      var2: [''],
      var3: ['']

    });

    this.specialPopulationForm = this.formBuilder.group({

      renalAdjustment: [''],
      hepaticAdjustment: [''],

      elderlyAdjustment: [false],
      pediatricData: [false],
      obesityImpact: [false],

      pregnancyCategory: [''],

      adjustmentNote: [''],

      var1: [''],
      var2: [''],
      var3: ['']

    });

    this.drugDrugInteractionForm = this.formBuilder.group({

      interactionRisk: [''],

      enzymeInhibitorExposure: [''],

      inducerExposure: [''],

      transporterExposure: [''],

      foodInteraction: [''],

      alcoholInteraction: [false],

      interactionSummary: [''],

      var1: [''],
      var2: [''],
      var3: ['']

    });

    this.clinicalInterpretationForm = this.formBuilder.group({

      therapeuticWindowIndex: [''],

      therapeuticWindowInterpretation: [''],

      tdmMonitoring: [false],

      doseFlexibility: [''],

      doseForgivenessIndex: [''],

      pkSafetySummary: [''],

      mrSummary: [''],

      var1: [''],
      var2: [''],
      var3: ['']

    });

    this.regulatoryEvidenceForm = this.formBuilder.group({

      studyType: [''],

      regulatoryApproval: [''],

      guidelineRef: [''],

      publishedEvidence: [false],

      evidenceStudy: [''],

      studyDownloadable: [false],

      var1: [''],
      var2: [''],
      var3: ['']

    });

  }

  ngOnInit(): void {
  }

  onTabChange(tabId: string): void {
    this.activeTabId = tabId;

    switch (tabId) {
      case 'tab1':
        break;
      case 'tab2':
        break;
      case 'tab3':
        break;
      default:
        break;
    }
  }

  openDataRepo(template: any) {
    this.modalRef = this.modalService.show(template, { class: 'modal-xl' });
  }

}
