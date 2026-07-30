# POS System - Installation & Setup Guide

## Quick Start

### Step 1: Import the POS Module in Your App Module

Add the POS System module to your main application module:

```typescript
// src/app/app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { PosSystemModule } from './pos-system/pos-system.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,
    PosSystemModule,
    // ... other imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

### Step 2: Add POS Route to Your Routing Module

```typescript
// src/app/app.routing.ts

import { Routes } from '@angular/router';
import { POS_ROUTES } from './pos-system/pos-routes';

export const routes: Routes = [
  ...POS_ROUTES,
  // ... other routes
];
```

### Step 3: Create Navigation Button to Launch POS

```typescript
// src/app/dashboard/dashboard.component.ts

export class DashboardComponent {
  constructor(private router: Router) {}

  launchPOS(): void {
    this.router.navigate(['/pos']);
  }
}
```

```html
<!-- src/app/dashboard/dashboard.component.html -->

<button (click)="launchPOS()" class="btn-launch-pos">
  Launch POS System
</button>
```

## Alternative: Using Standalone Components

If you're using Angular 14+ with standalone components:

```typescript
// In your main route configuration

import { PosMainComponent } from './pos-system/components/pos-main/pos-main.component';

const routes: Routes = [
  {
    path: 'pos',
    component: PosMainComponent
  }
];
```

## Using the Services Directly

You can inject the services in any component:

```typescript
import { CartService, ProductService } from './pos-system/services';

export class MyComponent {
  constructor(
    private cartService: CartService,
    private productService: ProductService
  ) {
    // Subscribe to observables
    this.cartService.cartSummary$.subscribe(summary => {
      console.log('Cart Summary:', summary);
    });

    this.productService.products$.subscribe(products => {
      console.log('Products:', products);
    });
  }

  addProduct(product: Product): void {
    this.cartService.addToCart(product, 1);
  }
}
```

## Customization

### Changing Colors

Edit `src/app/pos-system/shared/variables.scss`:

```scss
$primary-color: #your-color; // Change primary orange color
$secondary-color: #your-color; // Change secondary color
```

### Adding More Products

Edit `src/app/pos-system/services/product.service.ts` in the `initializeProducts()` method:

```typescript
private initializeProducts(): void {
  const mockProducts: Product[] = [
    {
      id: '11',
      name: 'Your Product Name',
      sku: 'SKU123',
      category: 'Your Category',
      price: 100,
      mrp: 100,
      image: 'path/to/image.jpg',
      stock: 50,
      barcode: '1234567890140'
    },
    // Add more products...
  ];
  this.products.next(mockProducts);
}
```

### Integrating Real Data

Replace the mock data with API calls:

```typescript
// product.service.ts

constructor(private http: HttpClient) {
  this.initializeProducts();
}

private initializeProducts(): void {
  this.http.get<Product[]>('/api/products')
    .subscribe(products => {
      this.products.next(products);
    });
}
```

### Connecting to Backend

Create HTTP calls for cart operations:

```typescript
// cart.service.ts

constructor(private http: HttpClient) {}

saveCart(cartItems: CartItem[]): Observable<any> {
  return this.http.post('/api/cart/save', cartItems);
}

checkout(cartSummary: CartSummary): Observable<any> {
  return this.http.post('/api/cart/checkout', cartSummary);
}
```

## Features Implementation Guide

### Barcode Scanner Integration

```typescript
// In pos-product-list.component.ts

openBarcodeScanner(): void {
  // Integration with barcode scanner library
  // Example: ngx-scanner or similar
}
```

### Payment Integration

Update cart-summary component with your payment gateway:

```typescript
onDeliverSettle(): void {
  // Integrate with Razorpay, PayPal, Stripe, etc.
  const cartSummary = this.cartService.cartSummary.value;
  
  // Call payment gateway
  this.paymentService.initiatePayment(cartSummary).subscribe(
    response => {
      // Handle success
      console.log('Payment successful', response);
    }
  );
}
```

## File Structure

```
pos-system/
├── models/
│   ├── product.model.ts
│   ├── cart.model.ts
│   └── index.ts
├── services/
│   ├── product.service.ts
│   ├── cart.service.ts
│   └── index.ts
├── components/
│   ├── pos-main/
│   ├── pos-header/
│   ├── pos-sidebar/
│   ├── pos-product-list/
│   ├── pos-shopping-cart/
│   ├── pos-cart-summary/
│   └── index.ts
├── shared/
│   └── variables.scss
├── pos-system.module.ts
├── pos-routes.ts
├── index.ts
└── README.md
```

## Common Issues & Solutions

### Issue: Module not found error
**Solution**: Make sure to import PosSystemModule in your app.module.ts

### Issue: Styles not applying
**Solution**: Ensure SCSS is properly configured in angular.json

### Issue: Services not injecting
**Solution**: Verify services are provided in the module's providers array

## Performance Tips

1. **Lazy Loading**: Load POS module lazily for better initial load time
2. **OnPush Change Detection**: Consider using OnPush strategy in components
3. **Virtual Scrolling**: For large product lists, use CDK virtual scroll
4. **Image Optimization**: Optimize product images for faster loading

## Browser Compatibility

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)

## Next Steps

1. Customize the design to match your brand
2. Connect to your backend API
3. Implement payment gateway integration
4. Add barcode/QR code scanner support
5. Set up receipt printing
6. Configure inventory management

## Support & Documentation

For more details, refer to:
- [Angular Documentation](https://angular.io/docs)
- [RxJS Documentation](https://rxjs.dev/)
- [SCSS Documentation](https://sass-lang.com/)

## License

This POS system is part of the Shoppenation application.
