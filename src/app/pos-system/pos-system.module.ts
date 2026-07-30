// POS System Module - Main entry point

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Components
import { PosMainComponent } from './components/pos-main/pos-main.component';
import { PosHeaderComponent } from './components/pos-header/pos-header.component';
import { PosSidebarComponent } from './components/pos-sidebar/pos-sidebar.component';
import { PosProductListComponent } from './components/pos-product-list/pos-product-list.component';
import { PosShoppingCartComponent } from './components/pos-shopping-cart/pos-shopping-cart.component';
import { PosCartSummaryComponent } from './components/pos-cart-summary/pos-cart-summary.component';

// Services
import { CartService } from './services/cart.service';
import { ProductService } from './services/product.service';

const POS_COMPONENTS = [
  PosMainComponent,
  PosHeaderComponent,
  PosSidebarComponent,
  PosProductListComponent,
  PosShoppingCartComponent,
  PosCartSummaryComponent
];

const POS_SERVICES = [CartService, ProductService];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule, ...POS_COMPONENTS],
  providers: POS_SERVICES,
  exports: POS_COMPONENTS
})
export class PosSystemModule {}

// Export main component for lazy loading
export { PosMainComponent };
