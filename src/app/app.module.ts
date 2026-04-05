import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppLayoutComponent } from './_layout/app-layout/app-layout.component';
import { SiteLayoutComponent } from './_layout/site-layout/site-layout.component';
import { AppHeaderComponent } from './_layout/app-header/app-header.component';
import { SiteHeaderComponent } from './_layout/site-header/site-header.component';
import { SiteFooterComponent } from './_layout/site-footer/site-footer.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
//import { StoreeCommerceManagerComponent } from './StoreeCommerceManager/StoreeCommerceManager.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { NgbModule, NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';
import { routing } from './app.routing';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { NgxGalleryModule } from 'ngx-gallery-9';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderService } from './_services/loader.service';
import { StoreEcommerceManagerComponent } from './StoreeCommerceManager/store-ecommerce-manager/store-ecommerce-manager.component';
import { LeftNavComponent } from './StoreeCommerceManager/left-nav/left-nav.component';
import * as $ from "jquery";
import { MalihuScrollbarModule } from 'ngx-malihu-scrollbar';
import { StoreManagerHeaderComponent } from './StoreeCommerceManager/store-manager-header/store-manager-header.component';
import { BusinessDomainProductLineComponent } from './StoreeCommerceManager/businessDomain/business-domain-product-line/business-domain-product-line.component';
import { ManageBusinessOfficeComponent } from './StoreeCommerceManager/businessDomain/manage-business-office/manage-business-office.component';
import { AddBankKYCComponent } from './StoreeCommerceManager/businessDomain/add-bank-kyc/add-bank-kyc.component';
import { ManageCredencialComponent } from './StoreeCommerceManager/businessDomain/manage-credencial/manage-credencial.component';
import { MapofficeD2CComponent } from './StoreeCommerceManager/businessDomain/mapoffice-d2-c/mapoffice-d2-c.component';
import { AddBrochureGalleryComponent } from './StoreeCommerceManager/createManageWebstore/add-brochure-gallery/add-brochure-gallery.component';
import { EditBrochureGalleryComponent } from './StoreeCommerceManager/createManageWebstore/edit-brochure-gallery/edit-brochure-gallery.component';
import { DiscountStoreProductComponent } from './StoreeCommerceManager/createManageWebstore/discount-store-product/discount-store-product.component';
import { DropShipStoreDomainProductComponent } from './StoreeCommerceManager/createManageWebstore/drop-ship-store-domain-product/drop-ship-store-domain-product.component';
import { WebstorePlatformMarketPlaceComponent } from './StoreeCommerceManager/createManageWebstore/webstore-platform-market-place/webstore-platform-market-place.component';
import { WebstoreBusinessWebsiteComponent } from './StoreeCommerceManager/createManageWebstore/webstore-business-website/webstore-business-website.component';
import { OrderSelfTakeAwayPOSComponent } from './StoreeCommerceManager/storeFullfillmentPOS/order-self-take-away-pos/order-self-take-away-pos.component';
import { RandomWalkInCustomerPOSComponent } from './StoreeCommerceManager/storeFullfillmentPOS/random-walk-in-customer-pos/random-walk-in-customer-pos.component';
import { OrderD2CThirdPartyDeliveryPOSComponent } from './StoreeCommerceManager/storeFullfillmentPOS/order-d2-cthird-party-delivery-pos/order-d2-cthird-party-delivery-pos.component';
import { OrderD2CInstantDeliveryPOSComponent } from './StoreeCommerceManager/storeFullfillmentPOS/order-d2-cinstant-delivery-pos/order-d2-cinstant-delivery-pos.component';
import { OrdersPendingListSelfTakeAwayPOSComponent } from './StoreeCommerceManager/storePendingOrder/orders-pending-list-self-take-away-pos/orders-pending-list-self-take-away-pos.component';
import { OrdersPendingListD2CIDCPOSComponent } from './StoreeCommerceManager/storePendingOrder/orders-pending-list-d2-c-idc-pos/orders-pending-list-d2-c-idc-pos.component';
import { PendingListD2CThirdPartyDeliveryPOSComponent } from './StoreeCommerceManager/storePendingOrder/pending-list-d2-cthird-party-delivery-pos/pending-list-d2-cthird-party-delivery-pos.component';
import { DeliveryOrderPackagingComponent } from './StoreeCommerceManager/orderDeliveryDashboard/delivery-order-packaging/delivery-order-packaging.component';
import { SelfTakeAwayDispatchPOSComponent } from './StoreeCommerceManager/storeFullfillmentPOS/self-take-away-dispatch-pos/self-take-away-dispatch-pos.component';
import { OrdersDeliveryListD2CIDCPOSComponent } from './StoreeCommerceManager/orderDeliveryDashboard/orders-delivery-list-d2-cidcpos/orders-delivery-list-d2-cidcpos.component';
import { AccountRecievablesBankSettlementComponent } from './StoreeCommerceManager/accountsRecievablesPayables/account-recievables-bank-settlement/account-recievables-bank-settlement.component';
import { PayablePlatformInvoiceComponent } from './StoreeCommerceManager/accountsRecievablesPayables/payable-platform-invoice/payable-platform-invoice.component';
import { AddStoreProductsInventoryComponent } from './StoreeCommerceManager/ManageStoreInventory/add-store-products-inventory/add-store-products-inventory.component';
import { CountryStateCityPinComponent } from './commonComponent/country-state-city-pin/country-state-city-pin.component';
import { ManageStoreItemSubItemDiscountsComponent } from './StoreeCommerceManager/businessDomain/manage-store-item-sub-item-discounts/manage-store-item-sub-item-discounts.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ManageStoreUserComponent } from './StoreeCommerceManager/businessDomain/manage-store-user/manage-store-user.component';
import { PublishWebstoreCloudComponent } from './StoreeCommerceManager/createManageWebstore/publish-webstore-cloud/publish-webstore-cloud.component';
import { StoreDeliveryRacksComponent } from './StoreeCommerceManager/businessDomain/store-delivery-racks/store-delivery-racks.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ManageStoreOrderprocessingComponent } from './StoreeCommerceManager/businessDomain/manage-store-orderprocessing/manage-store-orderprocessing.component';
import { StoreOrderworkflowCycleComponent } from './StoreeCommerceManager/businessDomain/store-orderworkflow-cycle/store-orderworkflow-cycle.component';
import { OperateConsoleComponent } from './StoreeCommerceManager/storeFullfillmentPOS/generate-console/operate-console.component';
import { StoreOpenCartComponent } from './StoreeCommerceManager/store-open-cart/store-open-cart.component';
import { ManageStoreDemandCreationComponent } from './StoreeCommerceManager/manage-store-demand-creation/manage-store-demand-creation.component';
import { LastmileDeliverySupportStoreComponent } from './StoreeCommerceManager/businessDomain/lastmile-delivery-support-store/lastmile-delivery-support-store.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { DefaultComponent } from './StoreeCommerceManager/default/default.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { PopoverModule } from 'ngx-bootstrap/popover';
import { OrderFulfillmentComponent } from './StoreeCommerceManager/storePendingOrder/orders-pending-list-d2-c-idc-pos/order-fulfillment/order-fulfillment.component';
import { HomeDeliveryDetailsModalComponent } from './StoreeCommerceManager/storePendingOrder/orders-pending-list-d2-c-idc-pos/order-fulfillment/home-delivery-details-modal/home-delivery-details-modal.component';
import { AddNewPhysicalStoreComponent } from './StoreeCommerceManager/businessDomain/manage-business-office/components/add-new-physical-store/add-new-physical-store.component';
import { ActivationDeactivationComponent } from './StoreeCommerceManager/ManageStoreInventory/activation-deactivation/activation-deactivation.component';
import { PublisherDashboardComponent } from './StoreeCommerceManager/publisher-dashboard/publisher-dashboard.component';
import { AdevertiserDashboardComponent } from './StoreeCommerceManager/adevertiser-dashboard/adevertiser-dashboard.component';
import { BusinessAccountAllocationComponent } from './StoreeCommerceManager/manageStoreSFA/business-account-allocation/business-account-allocation.component';
import { AccountAllocationMISComponent } from './StoreeCommerceManager/manageStoreSFA/account-allocation-mis/account-allocation-mis.component';
import { MdrConnectComponent } from './mdr-connect/mdr-connect.component';
import { ProfileManagementComponent } from './Mdr_connect_Dashboard/profile-management/profile-management.component';
import { PostManagementComponent } from './Mdr_connect_Dashboard/post-management/post-management.component';
import { CommunincationDeskComponent } from './Mdr_connect_Dashboard/communincation-desk/communincation-desk.component';
import { SellerStoreSkuManagementComponent } from './Mdr_connect_Dashboard/seller-store-sku-management/seller-store-sku-management.component';
import { BuyServicesComponent } from './Mdr_connect_Dashboard/buy-services/buy-services.component';
import { MyUsersManagementComponent } from './All-Day-Vending/my-users-management/my-users-management.component';
import { PayablesReceivablesComponent } from './All-Day-Vending/payables-receivables/payables-receivables.component';
import { ManageCustomerCardComponent } from './All-Day-Vending/manage-customer-card/manage-customer-card.component';
import { AccountBasedMISComponent } from './All-Day-Vending/account-based-mis/account-based-mis.component';
import { BatchUploadComponent } from './All-Day-Vending/batch-upload/batch-upload.component';
import { ManageVendsComponent } from './All-Day-Vending/manage-vends/manage-vends.component';
import { ManageVendorsComponent } from './All-Day-Vending/manage-vendors/manage-vendors.component';
import { MyCardTransactionsComponent } from './All-Day-Vending/my-card-transactions/my-card-transactions.component';
import { RefillMyCardComponent } from './All-Day-Vending/refill-my-card/refill-my-card.component';
import { MyInvoicesComponent } from './All-Day-Vending/my-invoices/my-invoices.component';
import { AccountManagementComponent } from './All-Day-Vending/account-management/account-management.component';
import { DataAndPrivacyComponent } from './About/data-and-privacy/data-and-privacy.component';
import { RefundComponent } from './About/refund/refund.component';
import { PricingAndTMComponent } from './About/pricing-and-tm/pricing-and-tm.component';
import { AtAGlanceComponent } from './About/at-aglance/at-aglance.component';
import { AllDayVendingComponent } from './About/all-day-vending/all-day-vending.component';
import { AllDayDistributionComponent } from './About/all-day-distribution/all-day-distribution.component';
import { MedexHcpComponent } from './About/medex-hcp/medex-hcp.component';
import { AboutUsComponent } from './About/about-us/about-us.component';
import { ConnectComponent } from './About/connect/connect.component';
import { TermsComponent } from './About/terms/terms.component';
import { HcpLoginComponent } from './hcp-login/hcp-login.component';
import { DeliveryLoginComponent } from './delivery-login/delivery-login.component';
import { HelpDeskComponent } from './help-desk/help-desk.component';

@NgModule({
  imports: [ 
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule, routing, 
    NgbModule,
    NgxGalleryModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    TabsModule.forRoot(),
    PopoverModule.forRoot(),
    NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' }),
    TooltipModule.forRoot(),
    ToastrModule.forRoot(),
    ModalModule.forRoot(),
    MalihuScrollbarModule.forRoot(),
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    CarouselModule.forRoot(),
   
   ],
  declarations: [
     AppComponent,
     AppLayoutComponent,
     SiteLayoutComponent,
     AppHeaderComponent,
     SiteHeaderComponent,
     SiteFooterComponent,
     LoginComponent,
  
     HomeComponent,
     RegisterComponent,
     ProfileComponent,
     StoreEcommerceManagerComponent,
     LeftNavComponent,
     StoreManagerHeaderComponent,
     BusinessDomainProductLineComponent,
     ManageBusinessOfficeComponent,
     AddBankKYCComponent,
     ManageCredencialComponent,
     MapofficeD2CComponent,
     AddBrochureGalleryComponent,
     EditBrochureGalleryComponent,
     DiscountStoreProductComponent,
     DropShipStoreDomainProductComponent,
     WebstorePlatformMarketPlaceComponent,
     WebstoreBusinessWebsiteComponent,
     OrderSelfTakeAwayPOSComponent,
     RandomWalkInCustomerPOSComponent,
     OrderD2CThirdPartyDeliveryPOSComponent,
     OrderD2CInstantDeliveryPOSComponent,
     OrdersPendingListSelfTakeAwayPOSComponent,
     OrdersPendingListD2CIDCPOSComponent,
     PendingListD2CThirdPartyDeliveryPOSComponent,
     DeliveryOrderPackagingComponent,
     SelfTakeAwayDispatchPOSComponent,
     OrdersDeliveryListD2CIDCPOSComponent,
     AccountRecievablesBankSettlementComponent,
     PayablePlatformInvoiceComponent,
     AddStoreProductsInventoryComponent,
     CountryStateCityPinComponent,
     ManageStoreItemSubItemDiscountsComponent,
     ManageStoreUserComponent,
     PublishWebstoreCloudComponent,
     StoreDeliveryRacksComponent,
     ManageStoreOrderprocessingComponent,
     StoreOrderworkflowCycleComponent,
     OperateConsoleComponent,
     StoreOpenCartComponent,
     ManageStoreDemandCreationComponent,
     LastmileDeliverySupportStoreComponent,
     DefaultComponent,
     OrderFulfillmentComponent,
     HomeDeliveryDetailsModalComponent,
     AddNewPhysicalStoreComponent,
     ActivationDeactivationComponent,
     PublisherDashboardComponent,
     AdevertiserDashboardComponent,
     BusinessAccountAllocationComponent,
     AccountAllocationMISComponent,
     MdrConnectComponent,
     ProfileManagementComponent,
     PostManagementComponent,
     CommunincationDeskComponent,
     SellerStoreSkuManagementComponent,
     BuyServicesComponent,
     MyUsersManagementComponent,
     PayablesReceivablesComponent,
     ManageCustomerCardComponent,
     AccountBasedMISComponent,
     BatchUploadComponent,
     ManageVendsComponent,
     ManageVendorsComponent,
     MyCardTransactionsComponent,
     RefillMyCardComponent,
     MyInvoicesComponent,
     AccountManagementComponent,
     DataAndPrivacyComponent,
     RefundComponent,
     PricingAndTMComponent,
     AtAGlanceComponent,
     AllDayVendingComponent,
     AllDayDistributionComponent,
     MedexHcpComponent,
     AboutUsComponent,
     ConnectComponent,
     TermsComponent,
     HcpLoginComponent,
     DeliveryLoginComponent,
     HelpDeskComponent,
     ],
     providers: [
    
      {provide: LocationStrategy, useClass: HashLocationStrategy},
        LoaderService,
    
  ],
  bootstrap:    [ AppComponent ],
 schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
