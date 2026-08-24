import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models';

@Component({
  selector: 'app-pos-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pos-product-list.component.html',
  styleUrls: ['./pos-product-list.component.scss']
})
export class PosProductListComponent implements OnChanges {
  @Input() products: Product[] = [];
  @Output() addToCart = new EventEmitter<{ product: Product; quantity: number }>();

  selectedQuantity: { [key: string]: number } = {};
  activeTab: 'categories' | 'top-in-demand' | 'all-products' = 'all-products';
  searchText = '';
  selectedLine = '';
  selectedItemCategory = '';
  filteredProducts: Product[] = [];

  productLines = ['Pain Killers', 'Antibiotics', 'Vitamins & Supplements', 'Cough & Cold'];
  itemCategories = ['All Products', 'Top in Demand', 'Categories'];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.products) {
      this.updateDisplayProducts();
    }
  }

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

  selectTab(tab: 'categories' | 'top-in-demand' | 'all-products'): void {
    this.activeTab = tab;
    this.updateDisplayProducts();
  }

  onSearch(event: any): void {
    this.searchText = event.target.value;
    this.updateDisplayProducts();
  }

  onProductLineChange(line: string): void {
    this.selectedLine = line;
    this.updateDisplayProducts();
  }

  onItemCategoryChange(category: string): void {
    this.selectedItemCategory = category;
    this.updateDisplayProducts();
  }

  private updateDisplayProducts(): void {
    const search = this.searchText.trim().toLowerCase();
    let products = [...(this.products || [])];

    if (this.activeTab === 'top-in-demand') {
      products = products
        .slice()
        .sort((a, b) => b.stock - a.stock)
        .slice(0, 6);
    }

    if (this.selectedLine) {
      products = products.filter((product) =>
        product.category.toLowerCase() === this.selectedLine.toLowerCase()
      );
    }

    if (this.selectedItemCategory === 'Top in Demand') {
      products = products.filter((product) => product.stock > 50);
    } else if (this.selectedItemCategory === 'Categories') {
      products = products.filter((product) => product.category !== '');
    }

    if (search) {
      products = products.filter(
        (product) =>
          product.name.toLowerCase().includes(search) ||
          product.sku.toLowerCase().includes(search) ||
          product.barcode?.includes(search)
      );
    }

    if (this.activeTab === 'categories' && !this.selectedLine) {
      products = [...(this.products || [])];
    }

    this.filteredProducts = products;
  }
}
