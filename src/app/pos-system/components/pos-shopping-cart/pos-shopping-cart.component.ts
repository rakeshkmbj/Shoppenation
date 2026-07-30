import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartItem } from '../../models';

@Component({
  selector: 'app-pos-shopping-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pos-shopping-cart.component.html',
  styleUrls: ['./pos-shopping-cart.component.scss']
})
export class PosShoppingCartComponent {
  @Input() items: CartItem[] = [];
  @Output() updateQuantity = new EventEmitter<{ productId: string; quantity: number }>();
  @Output() removeItem = new EventEmitter<string>();

  increaseQty(productId: string): void {
    const item = this.items.find(i => i.product.id === productId);
    if (item) {
      this.updateQuantity.emit({ productId, quantity: item.quantity + 1 });
    }
  }

  decreaseQty(productId: string): void {
    const item = this.items.find(i => i.product.id === productId);
    if (item && item.quantity > 1) {
      this.updateQuantity.emit({ productId, quantity: item.quantity - 1 });
    }
  }

  onRemoveItem(productId: string): void {
    this.removeItem.emit(productId);
  }
}
