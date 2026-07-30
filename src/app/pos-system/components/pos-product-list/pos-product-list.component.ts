import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models';

@Component({
  selector: 'app-pos-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pos-product-list.component.html',
  styleUrls: ['./pos-product-list.component.scss']
})
export class PosProductListComponent {
  @Input() products: Product[] = [];
  @Output() addToCart = new EventEmitter<{ product: Product; quantity: number }>();

  selectedQuantity: { [key: string]: number } = {};

  updateSelectedQty(productId: string, event: any): void {
    const qty = parseInt(event.target.value, 10);
    this.selectedQuantity[productId] = qty > 0 ? qty : 1;
  }

  onAddToCart(product: Product): void {
    const quantity = this.selectedQuantity[product.id] || 1;
    this.addToCart.emit({ product, quantity });
    this.selectedQuantity[product.id] = 1;
  }

  onImageError(event: any): void {
    event.target.src = 'https://via.placeholder.com/150?text=No+Image';
  }

  onSearch(event: any): void {
    const searchTerm = event.target.value;
    console.log('Search:', searchTerm);
    // Implement search logic in parent component
  }
}
