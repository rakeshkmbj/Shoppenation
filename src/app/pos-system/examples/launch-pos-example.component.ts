// src/app/All-Day-Vending/card-access-and-pos-management/launch-pos-example.component.ts
// This is an example of how to launch the POS system from your dashboard

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-launch-pos-example',
  template: `
    <div class="dashboard-section">
      <div class="card">
        <h3>POS Management</h3>
        <button class="btn btn-primary" (click)="launchPOS()">
          <span class="icon">🛒</span>
          Launch POS System
        </button>
      </div>
    </div>
  `,
  styles: [`
    .dashboard-section {
      padding: 20px;
    }

    .card {
      background: white;
      border-radius: 8px;
      padding: 20px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }

    h3 {
      margin-top: 0;
      color: #333;
    }

    .btn {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 12px 24px;
      background-color: #ff6b35;
      color: white;
      border: none;
      border-radius: 6px;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .btn:hover {
      background-color: #e55a2b;
      box-shadow: 0 4px 12px rgba(255, 107, 53, 0.3);
    }

    .icon {
      font-size: 18px;
    }
  `]
})
export class LaunchPosExampleComponent {
  constructor(private router: Router) {}

  launchPOS(): void {
    // Navigate to the POS system
    this.router.navigate(['/pos']);

    // Alternative: You can also use window.open for full-screen experience
    // window.open('/pos', '_blank', 'width=1920,height=1080,menubar=0,toolbar=0');
  }
}

// Alternative approach: Using a service to communicate with POS

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PosIntegrationService {
  private orderCompleted$ = new Subject<any>();

  // Listen for completed orders from POS
  onOrderCompleted() {
    return this.orderCompleted$.asObservable();
  }

  // Emit when order is completed in POS
  completeOrder(orderData: any) {
    this.orderCompleted$.next(orderData);
  }
}

// Usage in your dashboard:
// 
// export class YourDashboardComponent {
//   constructor(
//     private router: Router,
//     private posService: PosIntegrationService
//   ) {
//     this.posService.onOrderCompleted().subscribe(order => {
//       console.log('Order completed:', order);
//       // Update your dashboard with order details
//     });
//   }
//
//   launchPOS() {
//     this.router.navigate(['/pos']);
//   }
// }
