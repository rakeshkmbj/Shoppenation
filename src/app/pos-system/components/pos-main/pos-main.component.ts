import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService, ProductService } from '../../services';
import { CartItem, CartSummary, ProductCategory } from '../../models';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PosHeaderComponent } from '../pos-header/pos-header.component';
import { PosSidebarComponent } from '../pos-sidebar/pos-sidebar.component';
import { PosProductListComponent } from '../pos-product-list/pos-product-list.component';
import { PosShoppingCartComponent } from '../pos-shopping-cart/pos-shopping-cart.component';
import { PosCartSummaryComponent } from '../pos-cart-summary/pos-cart-summary.component';

interface StoreInfo {
  name: string;
  terminalId: string;
  location: string;
}

@Component({
  selector: 'app-pos-main',
  standalone: true,
  imports: [
    CommonModule,
    PosHeaderComponent,
    PosSidebarComponent,
    PosProductListComponent,
    PosShoppingCartComponent,
    PosCartSummaryComponent
  ],
  templateUrl: './pos-main.component.html',
  styleUrls: ['./pos-main.component.scss']
})
export class PosMainComponent implements OnInit {
  storeInfo: StoreInfo = {
    name: 'Raj Medical Store',
    terminalId: 'POS-01',
    location: 'Main Branch'
  };

  userName = 'Rajesh Handa';

  categories$: Observable<ProductCategory[]>;
  selectedCategory$: Observable<string>;
  cartItems$: Observable<CartItem[]>;
  cartSummary$: Observable<CartSummary | null>;
  filteredProducts$: Observable<any[]>;

  constructor(
    private cartService: CartService,
    private productService: ProductService
  ) {
    this.categories$ = this.productService.getCategories();
    this.selectedCategory$ = this.productService.getSelectedCategory();
    this.cartItems$ = this.cartService.cartItems$;
    this.cartSummary$ = this.cartService.cartSummary$;
    this.filteredProducts$ = this.productService.getProducts();
  }

  ngOnInit(): void {
    // Initialize POS system
  }

  onAddToCart(event: any): void {
    this.cartService.addToCart(event.product, event.quantity);
  }

  onUpdateQuantity(event: any): void {
    this.cartService.updateQuantity(event.productId, event.quantity);
  }

  onRemoveItem(productId: string): void {
    this.cartService.removeFromCart(productId);
  }

  onCategorySelect(categoryId: string): void {
    this.productService.selectCategory(categoryId);
  }

  onDeliverSettle(): void {
    console.log('Deliver & Settle clicked');
    const cartSummary = this.cartService.getCurrentCartSummary();
    // Implement delivery and settlement logic
  }

  onDeleteCart(): void {
    if (confirm('Are you sure you want to clear the cart?')) {
      this.cartService.clearCart();
    }
  }

  onMakePending(): void {
    console.log('Make Pending to Deliver clicked');
    // Implement pending order logic
  }

  onNotificationClick(): void {
    console.log('Notification clicked');
  }
}
