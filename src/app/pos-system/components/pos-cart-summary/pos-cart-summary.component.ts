import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartSummary } from '../../models';

@Component({
  selector: 'app-pos-cart-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pos-cart-summary.component.html',
  styleUrls: ['./pos-cart-summary.component.scss']
})
export class PosCartSummaryComponent {
  @Input() summary: CartSummary | null = null;
  @Output() deliverSettle = new EventEmitter<void>();
  @Output() deleteCart = new EventEmitter<void>();
  @Output() makePending = new EventEmitter<void>();
}
