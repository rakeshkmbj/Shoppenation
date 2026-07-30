import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CartItem, CartSummary, Product } from '../models';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems = new BehaviorSubject<CartItem[]>([]);
  public cartItems$ = this.cartItems.asObservable();

  private cartSummary = new BehaviorSubject<CartSummary>({
    items: [],
    totalItems: 0,
    totalQty: 0,
    mrpTotal: 0,
    discountAmount: 0,
    cashbackAmount: 0,
    taxAmount: 0,
    netPayable: 0
  });
  public cartSummary$ = this.cartSummary.asObservable();

  constructor() {
    this.loadCartFromLocalStorage();
  }

  // Add item to cart
  addToCart(product: Product, quantity: number = 1): void {
    const currentItems = this.cartItems.value;
    const existingItem = currentItems.find(item => item.product.id === product.id);

    if (existingItem) {
      existingItem.quantity += quantity;
      this.updateCartItemTotal(existingItem);
    } else {
      const newItem: CartItem = {
        product,
        quantity,
        price: product.price,
        discount: 0,
        discountPercentage: 0,
        cashback: 0,
        total: product.price * quantity,
        mrpTotal: product.mrp * quantity
      };
      currentItems.push(newItem);
    }

    this.cartItems.next([...currentItems]);
    this.updateCartSummary();
    this.saveCartToLocalStorage();
  }

  // Update quantity
  updateQuantity(productId: string, quantity: number): void {
    const items = this.cartItems.value;
    const item = items.find(ci => ci.product.id === productId);

    if (item) {
      if (quantity <= 0) {
        this.removeFromCart(productId);
      } else {
        item.quantity = quantity;
        this.updateCartItemTotal(item);
        this.cartItems.next([...items]);
        this.updateCartSummary();
        this.saveCartToLocalStorage();
      }
    }
  }

  // Apply discount
  applyDiscount(productId: string, discountPercentage: number): void {
    const items = this.cartItems.value;
    const item = items.find(ci => ci.product.id === productId);

    if (item) {
      item.discountPercentage = discountPercentage;
      item.discount = (item.price * item.quantity * discountPercentage) / 100;
      this.updateCartItemTotal(item);
      this.cartItems.next([...items]);
      this.updateCartSummary();
      this.saveCartToLocalStorage();
    }
  }

  // Remove from cart
  removeFromCart(productId: string): void {
    const filteredItems = this.cartItems.value.filter(item => item.product.id !== productId);
    this.cartItems.next(filteredItems);
    this.updateCartSummary();
    this.saveCartToLocalStorage();
  }

  // Clear cart
  clearCart(): void {
    this.cartItems.next([]);
    this.updateCartSummary();
    this.saveCartToLocalStorage();
  }

  // Get cart total
  getCartTotal(): number {
    return this.cartItems.value.reduce((total, item) => total + item.total, 0);
  }

  // Get cart items count
  getCartItemsCount(): number {
    return this.cartItems.value.length;
  }

  // Get total quantity
  getTotalQuantity(): number {
    return this.cartItems.value.reduce((total, item) => total + item.quantity, 0);
  }

  // Private helper methods
  private updateCartItemTotal(item: CartItem): void {
    item.total = (item.price * item.quantity) - item.discount;
    item.mrpTotal = item.product.mrp * item.quantity;
  }

  private updateCartSummary(): void {
    const items = this.cartItems.value;
    const totalQty = items.reduce((sum, item) => sum + item.quantity, 0);
    const mrpTotal = items.reduce((sum, item) => sum + item.mrpTotal, 0);
    const discountAmount = items.reduce((sum, item) => sum + item.discount, 0);
    const cashbackAmount = items.reduce((sum, item) => sum + item.cashback, 0);
    const taxAmount = (mrpTotal - discountAmount) * 0.05; // 5% tax
    const netPayable = (mrpTotal - discountAmount - cashbackAmount) + taxAmount;

    const summary: CartSummary = {
      items,
      totalItems: items.length,
      totalQty,
      mrpTotal,
      discountAmount,
      cashbackAmount,
      taxAmount,
      netPayable
    };

    this.cartSummary.next(summary);
  }

  private saveCartToLocalStorage(): void {
    const cartData = this.cartItems.value;
    localStorage.setItem('pos_cart', JSON.stringify(cartData));
  }

  private loadCartFromLocalStorage(): void {
    const savedCart = localStorage.getItem('pos_cart');
    if (savedCart) {
      try {
        const items = JSON.parse(savedCart);
        this.cartItems.next(items);
        this.updateCartSummary();
      } catch (error) {
        console.error('Error loading cart from localStorage:', error);
      }
    }
  }

  // Get current cart items
  getCurrentCart(): CartItem[] {
    return this.cartItems.value;
  }

  // Get current cart summary (value)
  getCurrentCartSummary(): CartSummary {
    return this.cartSummary.value;
  }
}
