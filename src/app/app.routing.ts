import { Routes, RouterModule } from '@angular/router';
import { SiteLayoutComponent } from './_layout/site-layout/site-layout.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { OperateConsoleComponent } from './StoreeCommerceManager/storeFullfillmentPOS/generate-console/operate-console.component';
import { StoreOrderworkflowCycleComponent } from './StoreeCommerceManager/businessDomain/store-orderworkflow-cycle/store-orderworkflow-cycle.component';
import { ManageStoreOrderprocessingComponent } from './StoreeCommerceManager/businessDomain/manage-store-orderprocessing/manage-store-orderprocessing.component';
import { StoreDeliveryRacksComponent } from './StoreeCommerceManager/businessDomain/store-delivery-racks/store-delivery-racks.component';
import { PublishWebstoreCloudComponent } from './StoreeCommerceManager/createManageWebstore/publish-webstore-cloud/publish-webstore-cloud.component';
import { AccountRecievablesBankSettlementComponent } from './StoreeCommerceManager/accountsRecievablesPayables/account-recievables-bank-settlement/account-recievables-bank-settlement.component';
import { PayablePlatformInvoiceComponent } from './StoreeCommerceManager/accountsRecievablesPayables/payable-platform-invoice/payable-platform-invoice.component';
import { AddBankKYCComponent } from './StoreeCommerceManager/businessDomain/add-bank-kyc/add-bank-kyc.component';
import { BusinessDomainProductLineComponent } from './StoreeCommerceManager/businessDomain/business-domain-product-line/business-domain-product-line.component';
import { ManageBusinessOfficeComponent } from './StoreeCommerceManager/businessDomain/manage-business-office/manage-business-office.component';
import { ManageCredencialComponent } from './StoreeCommerceManager/businessDomain/manage-credencial/manage-credencial.component';
import { ManageStoreItemSubItemDiscountsComponent } from './StoreeCommerceManager/businessDomain/manage-store-item-sub-item-discounts/manage-store-item-sub-item-discounts.component';
import { ManageStoreUserComponent } from './StoreeCommerceManager/businessDomain/manage-store-user/manage-store-user.component';
import { MapofficeD2CComponent } from './StoreeCommerceManager/businessDomain/mapoffice-d2-c/mapoffice-d2-c.component';
import { AddBrochureGalleryComponent } from './StoreeCommerceManager/createManageWebstore/add-brochure-gallery/add-brochure-gallery.component';
import { DiscountStoreProductComponent } from './StoreeCommerceManager/createManageWebstore/discount-store-product/discount-store-product.component';
import { DropShipStoreDomainProductComponent } from './StoreeCommerceManager/createManageWebstore/drop-ship-store-domain-product/drop-ship-store-domain-product.component';
import { EditBrochureGalleryComponent } from './StoreeCommerceManager/createManageWebstore/edit-brochure-gallery/edit-brochure-gallery.component';
import { WebstoreBusinessWebsiteComponent } from './StoreeCommerceManager/createManageWebstore/webstore-business-website/webstore-business-website.component';
import { WebstorePlatformMarketPlaceComponent } from './StoreeCommerceManager/createManageWebstore/webstore-platform-market-place/webstore-platform-market-place.component';
import { AddStoreProductsInventoryComponent } from './StoreeCommerceManager/ManageStoreInventory/add-store-products-inventory/add-store-products-inventory.component';
import { DeliveryOrderPackagingComponent } from './StoreeCommerceManager/orderDeliveryDashboard/delivery-order-packaging/delivery-order-packaging.component';
import { OrdersDeliveryListD2CIDCPOSComponent } from './StoreeCommerceManager/orderDeliveryDashboard/orders-delivery-list-d2-cidcpos/orders-delivery-list-d2-cidcpos.component';
import { StoreEcommerceManagerComponent } from './StoreeCommerceManager/store-ecommerce-manager/store-ecommerce-manager.component';
import { OrderD2CInstantDeliveryPOSComponent } from './StoreeCommerceManager/storeFullfillmentPOS/order-d2-cinstant-delivery-pos/order-d2-cinstant-delivery-pos.component';
import { OrderD2CThirdPartyDeliveryPOSComponent } from './StoreeCommerceManager/storeFullfillmentPOS/order-d2-cthird-party-delivery-pos/order-d2-cthird-party-delivery-pos.component';
import { OrderSelfTakeAwayPOSComponent } from './StoreeCommerceManager/storeFullfillmentPOS/order-self-take-away-pos/order-self-take-away-pos.component';
import { RandomWalkInCustomerPOSComponent } from './StoreeCommerceManager/storeFullfillmentPOS/random-walk-in-customer-pos/random-walk-in-customer-pos.component';
import { SelfTakeAwayDispatchPOSComponent } from './StoreeCommerceManager/storeFullfillmentPOS/self-take-away-dispatch-pos/self-take-away-dispatch-pos.component';
import { OrdersPendingListD2CIDCPOSComponent } from './StoreeCommerceManager/storePendingOrder/orders-pending-list-d2-c-idc-pos/orders-pending-list-d2-c-idc-pos.component';
import { OrdersPendingListSelfTakeAwayPOSComponent } from './StoreeCommerceManager/storePendingOrder/orders-pending-list-self-take-away-pos/orders-pending-list-self-take-away-pos.component';
import { PendingListD2CThirdPartyDeliveryPOSComponent } from './StoreeCommerceManager/storePendingOrder/pending-list-d2-cthird-party-delivery-pos/pending-list-d2-cthird-party-delivery-pos.component';
import { StoreOpenCartComponent } from './StoreeCommerceManager/store-open-cart/store-open-cart.component';
import { ManageStoreDemandCreationComponent } from './StoreeCommerceManager/manage-store-demand-creation/manage-store-demand-creation.component';
import { LastmileDeliverySupportStoreComponent } from './StoreeCommerceManager/businessDomain/lastmile-delivery-support-store/lastmile-delivery-support-store.component';
import { DefaultComponent } from './StoreeCommerceManager/default/default.component';
import { OrderFulfillmentComponent } from './StoreeCommerceManager/storePendingOrder/orders-pending-list-d2-c-idc-pos/order-fulfillment/order-fulfillment.component';
import { PublisherDashboardComponent } from './StoreeCommerceManager/publisher-dashboard/publisher-dashboard.component';
import { AdevertiserDashboardComponent } from './StoreeCommerceManager/adevertiser-dashboard/adevertiser-dashboard.component';
import { AccountAllocationMISComponent } from './StoreeCommerceManager/manageStoreSFA/account-allocation-mis/account-allocation-mis.component';
import { BusinessAccountAllocationComponent } from './StoreeCommerceManager/manageStoreSFA/business-account-allocation/business-account-allocation.component';
import { ProfileManagementComponent } from './Mdr_connect_Dashboard/profile-management/profile-management.component';
import { PostManagementComponent } from './Mdr_connect_Dashboard/post-management/post-management.component';
import { CommunincationDeskComponent } from './Mdr_connect_Dashboard/communincation-desk/communincation-desk.component';
import { SellerStoreSkuManagementComponent } from './Mdr_connect_Dashboard/seller-store-sku-management/seller-store-sku-management.component';
import { BuyServicesComponent } from './Mdr_connect_Dashboard/buy-services/buy-services.component';
import { AccountBasedMISComponent } from './All-Day-Vending/account-based-mis/account-based-mis.component';
import { BatchUploadComponent } from './All-Day-Vending/batch-upload/batch-upload.component';
import { ManageCustomerCardComponent } from './All-Day-Vending/manage-customer-card/manage-customer-card.component';
import { ManageVendorsComponent } from './All-Day-Vending/manage-vendors/manage-vendors.component';
import { ManageVendsComponent } from './All-Day-Vending/manage-vends/manage-vends.component';
import { MyCardTransactionsComponent } from './All-Day-Vending/my-card-transactions/my-card-transactions.component';
import { MyUsersManagementComponent } from './All-Day-Vending/my-users-management/my-users-management.component';
import { PayablesReceivablesComponent } from './All-Day-Vending/payables-receivables/payables-receivables.component';
import { RefillMyCardComponent } from './All-Day-Vending/refill-my-card/refill-my-card.component';
import { MyInvoicesComponent } from './All-Day-Vending/my-invoices/my-invoices.component';
import { AccountManagementComponent } from './All-Day-Vending/account-management/account-management.component';

const appRoutes: Routes = [
  {
    path: '',
    component: SiteLayoutComponent,
    children: [
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'register', component: RegisterComponent },
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: '',
    component: StoreEcommerceManagerComponent,
    children: [
      { path: 'dashboard', component: DefaultComponent },
      // { path: '', component: RightPanelComponent, pathMatch: 'full' },
      { path: 'businessDomainProductLine', component: BusinessDomainProductLineComponent },
      { path: 'manageBusinessOffice', component: ManageBusinessOfficeComponent },
      { path: 'addBankKYC', component: AddBankKYCComponent },
      { path: 'manageCredencial', component: ManageCredencialComponent },
      { path: 'mapoffice', component: MapofficeD2CComponent },
      { path: 'addBrochureGallery', component: AddBrochureGalleryComponent },
      { path: 'editBrochureGallery', component: EditBrochureGalleryComponent },
      { path: 'discountStoreProduct', component: DiscountStoreProductComponent },
      { path: 'dropshipstoredomainproduct', component: DropShipStoreDomainProductComponent },
      { path: 'webstoreplatformmarketplace', component: WebstorePlatformMarketPlaceComponent },
      { path: 'webstorebusinesswebsite', component: WebstoreBusinessWebsiteComponent },
      { path: 'orderselftakeawayPOS', component: OrderSelfTakeAwayPOSComponent },
      { path: 'randomwalkcustomerPOS', component: RandomWalkInCustomerPOSComponent },
      { path: 'orderd2cthirdpartydeliveryPOS', component: OrderD2CThirdPartyDeliveryPOSComponent },
      { path: 'orderd2cinstantdeliveryPOS', component: OrderD2CInstantDeliveryPOSComponent },
      { path: 'oplstaPOS', component: OrdersPendingListSelfTakeAwayPOSComponent },
      { path: 'opld2cidcPOS', component: OrdersPendingListD2CIDCPOSComponent },
      { path: 'pld2ctpdPOS', component: PendingListD2CThirdPartyDeliveryPOSComponent },
      { path: 'deliveryOrderPackaging', component: DeliveryOrderPackagingComponent },
      { path: 'selftakeawaydispatchPOS', component: SelfTakeAwayDispatchPOSComponent },
      { path: 'instantDeliveryDispatchPOS', component: OrdersDeliveryListD2CIDCPOSComponent },
      { path: 'recievableBankSettlement', component: AccountRecievablesBankSettlementComponent },
      { path: 'payablePlatformInvoice', component: PayablePlatformInvoiceComponent },
      { path: 'addStoreProductInventory', component: AddStoreProductsInventoryComponent },
      { path: 'itemSubitemDiscount', component: ManageStoreItemSubItemDiscountsComponent },
      { path: 'manageStoreUser', component: ManageStoreUserComponent },
      { path: 'managelstdeliverysbs', component: LastmileDeliverySupportStoreComponent },
      { path: 'publishwebstore', component: PublishWebstoreCloudComponent },
      { path: 'deliveryracks', component: StoreDeliveryRacksComponent },
      { path: 'manageStoreOrderProcessing', component: ManageStoreOrderprocessingComponent },
      { path: 'storeOrderworkflowcycle', component: StoreOrderworkflowCycleComponent },
      { path: 'operateConsole', component: OperateConsoleComponent },
      { path: 'opencart', component: StoreOpenCartComponent },
      { path: 'storedemand', component: ManageStoreDemandCreationComponent },
      { path: 'opld2cidcPOS/orderfulfillment', component: OrderFulfillmentComponent },
      { path: 'publisherDashboard', component: PublisherDashboardComponent },
      { path: 'advertiserDashboard', component: AdevertiserDashboardComponent },
      { path: 'accountAllocationMis', component: AccountAllocationMISComponent },
      { path: 'businessAccountAllocation', component: BusinessAccountAllocationComponent },
      { path: 'profileManagement', component: ProfileManagementComponent },
      { path: 'postManagement', component: PostManagementComponent },
      { path: 'communicationDesk', component: CommunincationDeskComponent },
      { path: 'sellerstoreskumanagement', component: SellerStoreSkuManagementComponent },
      { path: 'buyservice', component: BuyServicesComponent },
      { path: 'myUserManagement', component: MyUsersManagementComponent },
      { path: 'payablesReceivables', component: PayablesReceivablesComponent },
      { path: 'manageCustomerCard', component: ManageCustomerCardComponent },
      { path: 'accountBasedMIS', component: AccountBasedMISComponent },
      { path: 'batchUpload', component: BatchUploadComponent },
      { path: 'manageVends', component: ManageVendsComponent },
      { path: 'manageVendors', component: ManageVendorsComponent },
      { path: 'myCardTransactions', component: MyCardTransactionsComponent },
      { path: 'refillMyCard', component: RefillMyCardComponent },
      { path: 'myInvoices', component: MyInvoicesComponent },
      { path: 'accountManagement', component: AccountManagementComponent },

    ]
  },
];

export const routing = RouterModule.forRoot(appRoutes);


