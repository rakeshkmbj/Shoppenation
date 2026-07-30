// POS System Route Configuration
// Add this to your main routing module to integrate POS

import { Routes } from '@angular/router';
import { PosMainComponent } from './components/pos-main/pos-main.component';

export const POS_ROUTES: Routes = [
  {
    path: 'pos',
    component: PosMainComponent,
    data: { title: 'POS System' }
  }
];

// Usage in app.routing.ts or main routing module:
// import { POS_ROUTES } from './pos-system/pos-routes';
// 
// export const routes: Routes = [
//   ...POS_ROUTES,
//   // other routes
// ];
