import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import * as i0 from "@angular/core";
export class ProductService {
    constructor() {
        this.products = new BehaviorSubject([]);
        this.products$ = this.products.asObservable();
        this.categories = new BehaviorSubject([]);
        this.categories$ = this.categories.asObservable();
        this.selectedCategory = new BehaviorSubject('all');
        this.selectedCategory$ = this.selectedCategory.asObservable();
        this.initializeProducts();
        this.initializeCategories();
    }
    initializeProducts() {
        const mockProducts = [
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
    initializeCategories() {
        const mockCategories = [
            { id: 'all', name: 'All Categories', count: 10 },
            { id: 'pain-killers', name: 'Pain Killers', count: 6 },
            { id: 'antibiotics', name: 'Antibiotics', count: 2 },
            { id: 'vitamins', name: 'Vitamins & Supplements', count: 1 },
            { id: 'cough-cold', name: 'Cough & Cold', count: 1 }
        ];
        this.categories.next(mockCategories);
    }
    getProducts() {
        return this.products$;
    }
    getCategories() {
        return this.categories$;
    }
    selectCategory(categoryId) {
        this.selectedCategory.next(categoryId);
    }
    getSelectedCategory() {
        return this.selectedCategory$;
    }
    searchProducts(searchTerm) {
        if (!searchTerm.trim()) {
            return this.products$;
        }
        const filtered = this.products.value.filter(p => {
            var _a;
            return p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                p.sku.toLowerCase().includes(searchTerm.toLowerCase()) ||
                ((_a = p.barcode) === null || _a === void 0 ? void 0 : _a.includes(searchTerm));
        });
        return of(filtered).pipe(delay(300));
    }
    getProductById(id) {
        return of(this.products.value.find(p => p.id === id)).pipe(delay(200));
    }
    updateProductStock(productId, quantity) {
        const products = this.products.value;
        const product = products.find(p => p.id === productId);
        if (product) {
            product.stock -= quantity;
            this.products.next([...products]);
        }
    }
}
ProductService.ɵfac = function ProductService_Factory(t) { return new (t || ProductService)(); };
ProductService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ProductService, factory: ProductService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProductService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=product.service.js.map