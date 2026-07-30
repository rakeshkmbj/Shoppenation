import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Product, ProductCategory } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products = new BehaviorSubject<Product[]>([]);
  public products$ = this.products.asObservable();

  private categories = new BehaviorSubject<ProductCategory[]>([]);
  public categories$ = this.categories.asObservable();

  private selectedCategory = new BehaviorSubject<string>('all');
  public selectedCategory$ = this.selectedCategory.asObservable();

  constructor() {
    this.initializeProducts();
    this.initializeCategories();
  }

  private initializeProducts(): void {
    const mockProducts: Product[] = [
      {
        id: '1',
        name: 'Anacin 10 mg Tablet',
        sku: 'ANC10',
        category: 'Pain Killers',
        price: 25,
        mrp: 25,
        image: 'assets/images/anacin.jpg',
        stock: 100,
        barcode: '1234567890123'
      },
      {
        id: '2',
        name: 'Crocin 500 mg Tablet',
        sku: 'CRC500',
        category: 'Pain Killers',
        price: 40,
        mrp: 40,
        image: 'assets/images/crocin.jpg',
        stock: 85,
        barcode: '1234567890124'
      },
      {
        id: '3',
        name: 'Combifiam Tablet',
        sku: 'CMB100',
        category: 'Antibiotics',
        price: 35.5,
        mrp: 35.5,
        image: 'assets/images/combifiam.jpg',
        stock: 60,
        barcode: '1234567890125'
      },
      {
        id: '4',
        name: 'Dolo 650 mg Tablet',
        sku: 'DLO650',
        category: 'Pain Killers',
        price: 18,
        mrp: 18,
        image: 'assets/images/dolo.jpg',
        stock: 120,
        barcode: '1234567890126'
      },
      {
        id: '5',
        name: 'Disprin Regular Tablet',
        sku: 'DSP100',
        category: 'Pain Killers',
        price: 22,
        mrp: 22,
        image: 'assets/images/disprin.jpg',
        stock: 95,
        barcode: '1234567890127'
      },
      {
        id: '6',
        name: 'Calpol 650 mg Tablet',
        sku: 'CLP650',
        category: 'Pain Killers',
        price: 20,
        mrp: 20,
        image: 'assets/images/calpol.jpg',
        stock: 110,
        barcode: '1234567890128'
      },
      {
        id: '7',
        name: 'Amoxicillin 500mg',
        sku: 'AMX500',
        category: 'Antibiotics',
        price: 45,
        mrp: 45,
        image: 'assets/images/amoxicillin.jpg',
        stock: 75,
        barcode: '1234567890129'
      },
      {
        id: '8',
        name: 'Vitamin B Complex',
        sku: 'VIT001',
        category: 'Vitamins & Supplements',
        price: 50,
        mrp: 50,
        image: 'assets/images/vitamin.jpg',
        stock: 88,
        barcode: '1234567890130'
      },
      {
        id: '9',
        name: 'Strepsils Lozenges',
        sku: 'STR100',
        category: 'Cough & Cold',
        price: 30,
        mrp: 30,
        image: 'assets/images/strepsils.jpg',
        stock: 92,
        barcode: '1234567890131'
      },
      {
        id: '10',
        name: 'Ibuprofen 400mg',
        sku: 'IBU400',
        category: 'Pain Killers',
        price: 28,
        mrp: 28,
        image: 'assets/images/ibuprofen.jpg',
        stock: 105,
        barcode: '1234567890132'
      }
    ];

    this.products.next(mockProducts);
  }

  private initializeCategories(): void {
    const mockCategories: ProductCategory[] = [
      { id: 'all', name: 'All Categories', count: 10 },
      { id: 'pain-killers', name: 'Pain Killers', count: 6 },
      { id: 'antibiotics', name: 'Antibiotics', count: 2 },
      { id: 'vitamins', name: 'Vitamins & Supplements', count: 1 },
      { id: 'cough-cold', name: 'Cough & Cold', count: 1 }
    ];

    this.categories.next(mockCategories);
  }

  getProducts(): Observable<Product[]> {
    return this.products$;
  }

  getCategories(): Observable<ProductCategory[]> {
    return this.categories$;
  }

  selectCategory(categoryId: string): void {
    this.selectedCategory.next(categoryId);
  }

  getSelectedCategory(): Observable<string> {
    return this.selectedCategory$;
  }

  searchProducts(searchTerm: string): Observable<Product[]> {
    if (!searchTerm.trim()) {
      return this.products$;
    }

    const filtered = this.products.value.filter(p =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.sku.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.barcode?.includes(searchTerm)
    );

    return of(filtered).pipe(delay(300));
  }

  getProductById(id: string): Observable<Product | undefined> {
    return of(this.products.value.find(p => p.id === id)).pipe(delay(200));
  }

  updateProductStock(productId: string, quantity: number): void {
    const products = this.products.value;
    const product = products.find(p => p.id === productId);
    if (product) {
      product.stock -= quantity;
      this.products.next([...products]);
    }
  }
}
