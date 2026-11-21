import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function PosProductListComponent_option_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 10);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const line_r4 = ctx.$implicit;
    i0.ɵɵproperty("value", line_r4);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", line_r4, " ");
} }
function PosProductListComponent_option_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 10);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const category_r5 = ctx.$implicit;
    i0.ɵɵproperty("value", category_r5);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", category_r5, " ");
} }
function PosProductListComponent_div_23_div_1_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 28);
    i0.ɵɵtext(1, "In Stock");
    i0.ɵɵelementEnd();
} }
function PosProductListComponent_div_23_div_1_span_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 29);
    i0.ɵɵtext(1, "Out of Stock");
    i0.ɵɵelementEnd();
} }
function PosProductListComponent_div_23_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 13)(1, "div", 14)(2, "img", 15);
    i0.ɵɵlistener("error", function PosProductListComponent_div_23_div_1_Template_img_error_2_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r10 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r10.onImageError($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 16);
    i0.ɵɵtemplate(4, PosProductListComponent_div_23_div_1_span_4_Template, 2, 0, "span", 17);
    i0.ɵɵtemplate(5, PosProductListComponent_div_23_div_1_span_5_Template, 2, 0, "span", 18);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 19)(7, "h4", 20);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div", 21);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "div", 22)(12, "span", 23);
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "span", 24);
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "div", 25)(17, "input", 26);
    i0.ɵɵlistener("change", function PosProductListComponent_div_23_div_1_Template_input_change_17_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r11); const product_r7 = restoredCtx.$implicit; const ctx_r12 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r12.updateSelectedQty(product_r7.id, $event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "button", 27);
    i0.ɵɵlistener("click", function PosProductListComponent_div_23_div_1_Template_button_click_18_listener() { const restoredCtx = i0.ɵɵrestoreView(_r11); const product_r7 = restoredCtx.$implicit; const ctx_r13 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r13.onAddToCart(product_r7)); });
    i0.ɵɵtext(19, " ADD TO CART ");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const product_r7 = ctx.$implicit;
    const ctx_r6 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("src", product_r7.image, i0.ɵɵsanitizeUrl)("alt", product_r7.name);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", product_r7.stock > 0);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", product_r7.stock === 0);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(product_r7.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("SKU: ", product_r7.sku, "");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("\u20B9", product_r7.price, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("MRP: \u20B9", product_r7.mrp, "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("value", ctx_r6.selectedQuantity[product_r7.id] || 1);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("disabled", product_r7.stock === 0);
} }
function PosProductListComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 11);
    i0.ɵɵtemplate(1, PosProductListComponent_div_23_div_1_Template, 20, 10, "div", 12);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r2.filteredProducts);
} }
function PosProductListComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 30)(1, "div", 31);
    i0.ɵɵtext(2, "\uD83D\uDCE6");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p");
    i0.ɵɵtext(4, "No products found");
    i0.ɵɵelementEnd()();
} }
export class PosProductListComponent {
    constructor() {
        this.products = [];
        this.addToCart = new EventEmitter();
        this.selectedQuantity = {};
        this.activeTab = 'all-products';
        this.searchText = '';
        this.selectedLine = '';
        this.selectedItemCategory = '';
        this.filteredProducts = [];
        this.productLines = ['Pain Killers', 'Antibiotics', 'Vitamins & Supplements', 'Cough & Cold'];
        this.itemCategories = ['All Products', 'Top in Demand', 'Categories'];
    }
    ngOnChanges(changes) {
        if (changes.products) {
            this.updateDisplayProducts();
        }
    }
    updateSelectedQty(productId, event) {
        const qty = parseInt(event.target.value, 10);
        this.selectedQuantity[productId] = qty > 0 ? qty : 1;
    }
    onAddToCart(product) {
        const quantity = this.selectedQuantity[product.id] || 1;
        this.addToCart.emit({ product, quantity });
        this.selectedQuantity[product.id] = 1;
    }
    onImageError(event) {
        event.target.src = 'https://via.placeholder.com/150?text=No+Image';
    }
    selectTab(tab) {
        this.activeTab = tab;
        this.updateDisplayProducts();
    }
    onSearch(event) {
        this.searchText = event.target.value;
        this.updateDisplayProducts();
    }
    onProductLineChange(line) {
        this.selectedLine = line;
        this.updateDisplayProducts();
    }
    onItemCategoryChange(category) {
        this.selectedItemCategory = category;
        this.updateDisplayProducts();
    }
    updateDisplayProducts() {
        const search = this.searchText.trim().toLowerCase();
        let products = [...(this.products || [])];
        if (this.activeTab === 'top-in-demand') {
            products = products
                .slice()
                .sort((a, b) => b.stock - a.stock)
                .slice(0, 6);
        }
        if (this.selectedLine) {
            products = products.filter((product) => product.category.toLowerCase() === this.selectedLine.toLowerCase());
        }
        if (this.selectedItemCategory === 'Top in Demand') {
            products = products.filter((product) => product.stock > 50);
        }
        else if (this.selectedItemCategory === 'Categories') {
            products = products.filter((product) => product.category !== '');
        }
        if (search) {
            products = products.filter((product) => {
                var _a;
                return product.name.toLowerCase().includes(search) ||
                    product.sku.toLowerCase().includes(search) ||
                    ((_a = product.barcode) === null || _a === void 0 ? void 0 : _a.includes(search));
            });
        }
        if (this.activeTab === 'categories' && !this.selectedLine) {
            products = [...(this.products || [])];
        }
        this.filteredProducts = products;
    }
}
PosProductListComponent.ɵfac = function PosProductListComponent_Factory(t) { return new (t || PosProductListComponent)(); };
PosProductListComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PosProductListComponent, selectors: [["app-pos-product-list"]], inputs: { products: "products" }, outputs: { addToCart: "addToCart" }, standalone: true, features: [i0.ɵɵNgOnChangesFeature, i0.ɵɵStandaloneFeature], decls: 25, vars: 10, consts: [[1, "product-list-container"], [1, "category-tabs"], [1, "category-tab", 3, "click"], [1, "filter-row"], [1, "filter-field"], [1, "custom-select", 3, "change"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "products-grid", 4, "ngIf"], ["class", "no-products", 4, "ngIf"], [3, "value"], [1, "products-grid"], ["class", "product-card", 4, "ngFor", "ngForOf"], [1, "product-card"], [1, "product-image"], [3, "src", "alt", "error"], [1, "product-badge"], ["class", "in-stock", 4, "ngIf"], ["class", "out-stock", 4, "ngIf"], [1, "product-info"], [1, "product-name"], [1, "product-sku"], [1, "product-prices"], [1, "price"], [1, "mrp"], [1, "product-actions"], ["type", "number", "min", "1", 1, "qty-input", 3, "value", "change"], [1, "btn-add", 3, "disabled", "click"], [1, "in-stock"], [1, "out-stock"], [1, "no-products"], [1, "no-products-icon"]], template: function PosProductListComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "button", 2);
        i0.ɵɵlistener("click", function PosProductListComponent_Template_button_click_2_listener() { return ctx.selectTab("categories"); });
        i0.ɵɵtext(3, "Categories");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "button", 2);
        i0.ɵɵlistener("click", function PosProductListComponent_Template_button_click_4_listener() { return ctx.selectTab("top-in-demand"); });
        i0.ɵɵtext(5, "Top in Demand");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "button", 2);
        i0.ɵɵlistener("click", function PosProductListComponent_Template_button_click_6_listener() { return ctx.selectTab("all-products"); });
        i0.ɵɵtext(7, "All Products");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(8, "div", 3)(9, "div", 4)(10, "label");
        i0.ɵɵtext(11, "Product Lines");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "select", 5);
        i0.ɵɵlistener("change", function PosProductListComponent_Template_select_change_12_listener($event) { return ctx.onProductLineChange($event.target.value); });
        i0.ɵɵelementStart(13, "option", 6);
        i0.ɵɵtext(14, "All lines");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(15, PosProductListComponent_option_15_Template, 2, 2, "option", 7);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(16, "div", 4)(17, "label");
        i0.ɵɵtext(18, "Item Categories");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(19, "select", 5);
        i0.ɵɵlistener("change", function PosProductListComponent_Template_select_change_19_listener($event) { return ctx.onItemCategoryChange($event.target.value); });
        i0.ɵɵelementStart(20, "option", 6);
        i0.ɵɵtext(21, "All categories");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(22, PosProductListComponent_option_22_Template, 2, 2, "option", 7);
        i0.ɵɵelementEnd()()();
        i0.ɵɵtemplate(23, PosProductListComponent_div_23_Template, 2, 1, "div", 8);
        i0.ɵɵtemplate(24, PosProductListComponent_div_24_Template, 5, 0, "div", 9);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵclassProp("active", ctx.activeTab === "categories");
        i0.ɵɵadvance(2);
        i0.ɵɵclassProp("active", ctx.activeTab === "top-in-demand");
        i0.ɵɵadvance(2);
        i0.ɵɵclassProp("active", ctx.activeTab === "all-products");
        i0.ɵɵadvance(9);
        i0.ɵɵproperty("ngForOf", ctx.productLines);
        i0.ɵɵadvance(7);
        i0.ɵɵproperty("ngForOf", ctx.itemCategories);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.filteredProducts && ctx.filteredProducts.length > 0);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.filteredProducts && ctx.filteredProducts.length === 0);
    } }, dependencies: [CommonModule, i1.NgForOf, i1.NgIf], styles: [".product-list-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: 100%;\r\n  gap: 16px;\r\n\r\n  .search-and-controls {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 12px;\r\n    background-color: #f9f9f9;\r\n    padding: 16px;\r\n    border-radius: 8px;\r\n\r\n    .search-section {\r\n      position: relative;\r\n      display: flex;\r\n      align-items: center;\r\n\r\n      .search-input {\r\n        width: 100%;\r\n        padding: 10px 16px 10px 40px;\r\n        border: 1px solid #ddd;\r\n        border-radius: 6px;\r\n        font-size: 14px;\r\n        transition: all 0.3s ease;\r\n\r\n        &:focus {\r\n          outline: none;\r\n          border-color: #ff6b35;\r\n          box-shadow: 0 0 0 3px rgba(255, 107, 53, 0.1);\r\n        }\r\n\r\n        &::placeholder {\r\n          color: #aaa;\r\n        }\r\n      }\r\n\r\n      .search-icon {\r\n        position: absolute;\r\n        left: 12px;\r\n        font-size: 16px;\r\n        color: #666;\r\n      }\r\n    }\r\n\r\n    .control-buttons {\r\n      display: flex;\r\n      gap: 10px;\r\n\r\n      button {\r\n        flex: 1;\r\n        display: flex;\r\n        flex-direction: column;\r\n        align-items: center;\r\n        gap: 4px;\r\n        padding: 10px;\r\n        border: 1px solid #ddd;\r\n        border-radius: 6px;\r\n        background-color: white;\r\n        cursor: pointer;\r\n        transition: all 0.3s ease;\r\n        font-size: 12px;\r\n        font-weight: 500;\r\n\r\n        .icon {\r\n          font-size: 20px;\r\n        }\r\n\r\n        &:hover {\r\n          background-color: #f0f0f0;\r\n          border-color: #ff6b35;\r\n        }\r\n\r\n        &.btn-voice {\r\n          background-color: #ff6b35;\r\n          color: white;\r\n          border-color: #ff6b35;\r\n\r\n          &:hover {\r\n            background-color: #e55a2b;\r\n          }\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  .category-tabs {\r\n    display: flex;\r\n    gap: 8px;\r\n    padding: 0 16px;\r\n    border-bottom: 1px solid #e0e0e0;\r\n    overflow-x: auto;\r\n\r\n    .category-tab {\r\n      padding: 10px 16px;\r\n      background: none;\r\n      border: none;\r\n      border-bottom: 3px solid transparent;\r\n      cursor: pointer;\r\n      font-size: 13px;\r\n      font-weight: 500;\r\n      color: #666;\r\n      transition: all 0.3s ease;\r\n      white-space: nowrap;\r\n\r\n      &:hover {\r\n        color: #ff6b35;\r\n      }\r\n\r\n      &.active {\r\n        color: #ff6b35;\r\n        border-bottom-color: #ff6b35;\r\n      }\r\n    }\r\n\r\n    .tab-recent {\r\n      margin-left: auto;\r\n      display: flex;\r\n      align-items: center;\r\n\r\n      .recent-label {\r\n        font-size: 12px;\r\n        color: #999;\r\n        font-weight: 600;\r\n        text-transform: uppercase;\r\n      }\r\n    }\r\n  }\r\n\r\n  .products-grid {\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));\r\n    gap: 12px;\r\n    padding: 0 16px;\r\n    flex: 1;\r\n    overflow-y: auto;\r\n\r\n    .product-card {\r\n      background: white;\r\n      border: 1px solid #e0e0e0;\r\n      border-radius: 8px;\r\n      overflow: hidden;\r\n      transition: all 0.3s ease;\r\n      display: flex;\r\n      flex-direction: column;\r\n\r\n      &:hover {\r\n        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);\r\n        border-color: #ff6b35;\r\n      }\r\n\r\n      .product-image {\r\n        position: relative;\r\n        width: 100%;\r\n        height: 140px;\r\n        background-color: #f5f5f5;\r\n        overflow: hidden;\r\n\r\n        img {\r\n          width: 100%;\r\n          height: 100%;\r\n          object-fit: cover;\r\n        }\r\n\r\n        .product-badge {\r\n          position: absolute;\r\n          top: 8px;\r\n          right: 8px;\r\n\r\n          span {\r\n            display: inline-block;\r\n            padding: 4px 8px;\r\n            border-radius: 4px;\r\n            font-size: 10px;\r\n            font-weight: 600;\r\n\r\n            &.in-stock {\r\n              background-color: #d4edda;\r\n              color: #155724;\r\n            }\r\n\r\n            &.out-stock {\r\n              background-color: #f8d7da;\r\n              color: #721c24;\r\n            }\r\n          }\r\n        }\r\n      }\r\n\r\n      .product-info {\r\n        padding: 12px;\r\n        flex: 1;\r\n        display: flex;\r\n        flex-direction: column;\r\n\r\n        .product-name {\r\n          margin: 0 0 6px 0;\r\n          font-size: 13px;\r\n          font-weight: 600;\r\n          color: #333;\r\n          line-height: 1.4;\r\n          min-height: 32px;\r\n        }\r\n\r\n        .product-sku {\r\n          font-size: 11px;\r\n          color: #999;\r\n          margin-bottom: 8px;\r\n        }\r\n\r\n        .product-prices {\r\n          display: flex;\r\n          gap: 8px;\r\n          margin-bottom: 10px;\r\n          font-size: 12px;\r\n\r\n          .price {\r\n            font-weight: 700;\r\n            color: #ff6b35;\r\n            font-size: 14px;\r\n          }\r\n\r\n          .mrp {\r\n            color: #999;\r\n            text-decoration: line-through;\r\n            font-size: 11px;\r\n          }\r\n        }\r\n\r\n        .product-actions {\r\n          display: flex;\r\n          gap: 6px;\r\n          margin-top: auto;\r\n\r\n          .qty-input {\r\n            width: 50px;\r\n            padding: 6px 8px;\r\n            border: 1px solid #ddd;\r\n            border-radius: 4px;\r\n            text-align: center;\r\n            font-size: 12px;\r\n\r\n            &:focus {\r\n              outline: none;\r\n              border-color: #ff6b35;\r\n            }\r\n          }\r\n\r\n          .btn-add {\r\n            flex: 1;\r\n            padding: 6px 8px;\r\n            background-color: #ff6b35;\r\n            color: white;\r\n            border: none;\r\n            border-radius: 4px;\r\n            font-size: 11px;\r\n            font-weight: 600;\r\n            cursor: pointer;\r\n            transition: all 0.3s ease;\r\n\r\n            &:hover:not(:disabled) {\r\n              background-color: #e55a2b;\r\n            }\r\n\r\n            &:disabled {\r\n              background-color: #ccc;\r\n              cursor: not-allowed;\r\n              opacity: 0.6;\r\n            }\r\n          }\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  .no-products {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    padding: 40px;\r\n    color: #999;\r\n\r\n    .no-products-icon {\r\n      font-size: 48px;\r\n      margin-bottom: 16px;\r\n      opacity: 0.5;\r\n    }\r\n\r\n    p {\r\n      margin: 0;\r\n      font-size: 16px;\r\n      font-weight: 500;\r\n    }\r\n  }\r\n}\r\n\r\n\r\n.products-grid[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  width: 8px;\r\n}\r\n\r\n.products-grid[_ngcontent-%COMP%]::-webkit-scrollbar-track {\r\n  background: #f1f1f1;\r\n}\r\n\r\n.products-grid[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n  background: #888;\r\n  border-radius: 4px;\r\n\r\n  &:hover {\r\n    background: #555;\r\n  }\r\n}\r\n\r\n@media (max-width: 1200px) {\r\n  .product-list-container[_ngcontent-%COMP%]   .products-grid[_ngcontent-%COMP%] {\r\n    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));\r\n  }\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  .product-list-container[_ngcontent-%COMP%] {\r\n    .search-and-controls {\r\n      .control-buttons {\r\n        flex-wrap: wrap;\r\n\r\n        button {\r\n          flex: 0 1 calc(50% - 5px);\r\n          padding: 8px;\r\n          font-size: 11px;\r\n        }\r\n      }\r\n    }\r\n\r\n    .products-grid {\r\n      grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));\r\n      gap: 8px;\r\n    }\r\n  }\r\n}\r\n.filter-row[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    width: 100%;\r\n    gap: 20px;\r\n    margin: 20px 0;\r\n}\r\n\r\n.filter-field[_ngcontent-%COMP%] {\r\n    flex: 0 0 calc(50% - 10px);\r\n    max-width: calc(50% - 10px);\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 8px;\r\n}\r\n\r\n.filter-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n    font-size: 16px;\r\n    font-weight: 600;\r\n    color: #444;\r\n    margin-bottom: 4px;\r\n}\r\n\r\n.custom-select[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 44px;\r\n    padding: 0 14px;\r\n    border: 1px solid #d8d8d8;\r\n    border-radius: 6px;\r\n    background: #fff;\r\n    font-size: 15px;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n    .filter-row[_ngcontent-%COMP%] {\r\n        flex-direction: column;\r\n    }\r\n\r\n    .filter-field[_ngcontent-%COMP%] {\r\n        flex: 0 0 100%;\r\n        max-width: 100%;\r\n    }\r\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PosProductListComponent, [{
        type: Component,
        args: [{ selector: 'app-pos-product-list', standalone: true, imports: [CommonModule], template: "<div class=\"product-list-container\">\r\n\r\n  <div class=\"category-tabs\">\r\n    <button class=\"category-tab\" [class.active]=\"activeTab === 'categories'\"\r\n      (click)=\"selectTab('categories')\">Categories</button>\r\n    <button class=\"category-tab\" [class.active]=\"activeTab === 'top-in-demand'\" (click)=\"selectTab('top-in-demand')\">Top\r\n      in Demand</button>\r\n    <button class=\"category-tab\" [class.active]=\"activeTab === 'all-products'\" (click)=\"selectTab('all-products')\">All\r\n      Products</button>\r\n  </div>\r\n\r\n  <div class=\"filter-row\">\r\n    <div class=\"filter-field\">\r\n      <label>Product Lines</label>\r\n      <select class=\"custom-select\" (change)=\"onProductLineChange($event.target.value)\">\r\n        <option value=\"\">All lines</option>\r\n        <option *ngFor=\"let line of productLines\" [value]=\"line\">\r\n          {{ line }}\r\n        </option>\r\n      </select>\r\n    </div>\r\n    <div class=\"filter-field\">\r\n      <label>Item Categories</label>\r\n      <select class=\"custom-select\" (change)=\"onItemCategoryChange($event.target.value)\">\r\n        <option value=\"\">All categories</option>\r\n        <option *ngFor=\"let category of itemCategories\" [value]=\"category\">\r\n          {{ category }}\r\n        </option>\r\n      </select>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"products-grid\" *ngIf=\"filteredProducts && filteredProducts.length > 0\">\r\n    <div *ngFor=\"let product of filteredProducts\" class=\"product-card\">\r\n      <div class=\"product-image\">\r\n        <img [src]=\"product.image\" [alt]=\"product.name\" (error)=\"onImageError($event)\">\r\n        <div class=\"product-badge\">\r\n          <span *ngIf=\"product.stock > 0\" class=\"in-stock\">In Stock</span>\r\n          <span *ngIf=\"product.stock === 0\" class=\"out-stock\">Out of Stock</span>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"product-info\">\r\n        <h4 class=\"product-name\">{{ product.name }}</h4>\r\n        <div class=\"product-sku\">SKU: {{ product.sku }}</div>\r\n\r\n        <div class=\"product-prices\">\r\n          <span class=\"price\">\u20B9{{ product.price }}</span>\r\n          <span class=\"mrp\">MRP: \u20B9{{ product.mrp }}</span>\r\n        </div>\r\n\r\n        <div class=\"product-actions\">\r\n          <input type=\"number\" class=\"qty-input\" min=\"1\" [value]=\"selectedQuantity[product.id] || 1\"\r\n            (change)=\"updateSelectedQty(product.id, $event)\">\r\n          <button class=\"btn-add\" (click)=\"onAddToCart(product)\" [disabled]=\"product.stock === 0\">\r\n            ADD TO CART\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div *ngIf=\"filteredProducts && filteredProducts.length === 0\" class=\"no-products\">\r\n    <div class=\"no-products-icon\">\uD83D\uDCE6</div>\r\n    <p>No products found</p>\r\n  </div>\r\n</div>", styles: [".product-list-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: 100%;\r\n  gap: 16px;\r\n\r\n  .search-and-controls {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 12px;\r\n    background-color: #f9f9f9;\r\n    padding: 16px;\r\n    border-radius: 8px;\r\n\r\n    .search-section {\r\n      position: relative;\r\n      display: flex;\r\n      align-items: center;\r\n\r\n      .search-input {\r\n        width: 100%;\r\n        padding: 10px 16px 10px 40px;\r\n        border: 1px solid #ddd;\r\n        border-radius: 6px;\r\n        font-size: 14px;\r\n        transition: all 0.3s ease;\r\n\r\n        &:focus {\r\n          outline: none;\r\n          border-color: #ff6b35;\r\n          box-shadow: 0 0 0 3px rgba(255, 107, 53, 0.1);\r\n        }\r\n\r\n        &::placeholder {\r\n          color: #aaa;\r\n        }\r\n      }\r\n\r\n      .search-icon {\r\n        position: absolute;\r\n        left: 12px;\r\n        font-size: 16px;\r\n        color: #666;\r\n      }\r\n    }\r\n\r\n    .control-buttons {\r\n      display: flex;\r\n      gap: 10px;\r\n\r\n      button {\r\n        flex: 1;\r\n        display: flex;\r\n        flex-direction: column;\r\n        align-items: center;\r\n        gap: 4px;\r\n        padding: 10px;\r\n        border: 1px solid #ddd;\r\n        border-radius: 6px;\r\n        background-color: white;\r\n        cursor: pointer;\r\n        transition: all 0.3s ease;\r\n        font-size: 12px;\r\n        font-weight: 500;\r\n\r\n        .icon {\r\n          font-size: 20px;\r\n        }\r\n\r\n        &:hover {\r\n          background-color: #f0f0f0;\r\n          border-color: #ff6b35;\r\n        }\r\n\r\n        &.btn-voice {\r\n          background-color: #ff6b35;\r\n          color: white;\r\n          border-color: #ff6b35;\r\n\r\n          &:hover {\r\n            background-color: #e55a2b;\r\n          }\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  .category-tabs {\r\n    display: flex;\r\n    gap: 8px;\r\n    padding: 0 16px;\r\n    border-bottom: 1px solid #e0e0e0;\r\n    overflow-x: auto;\r\n\r\n    .category-tab {\r\n      padding: 10px 16px;\r\n      background: none;\r\n      border: none;\r\n      border-bottom: 3px solid transparent;\r\n      cursor: pointer;\r\n      font-size: 13px;\r\n      font-weight: 500;\r\n      color: #666;\r\n      transition: all 0.3s ease;\r\n      white-space: nowrap;\r\n\r\n      &:hover {\r\n        color: #ff6b35;\r\n      }\r\n\r\n      &.active {\r\n        color: #ff6b35;\r\n        border-bottom-color: #ff6b35;\r\n      }\r\n    }\r\n\r\n    .tab-recent {\r\n      margin-left: auto;\r\n      display: flex;\r\n      align-items: center;\r\n\r\n      .recent-label {\r\n        font-size: 12px;\r\n        color: #999;\r\n        font-weight: 600;\r\n        text-transform: uppercase;\r\n      }\r\n    }\r\n  }\r\n\r\n  .products-grid {\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));\r\n    gap: 12px;\r\n    padding: 0 16px;\r\n    flex: 1;\r\n    overflow-y: auto;\r\n\r\n    .product-card {\r\n      background: white;\r\n      border: 1px solid #e0e0e0;\r\n      border-radius: 8px;\r\n      overflow: hidden;\r\n      transition: all 0.3s ease;\r\n      display: flex;\r\n      flex-direction: column;\r\n\r\n      &:hover {\r\n        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);\r\n        border-color: #ff6b35;\r\n      }\r\n\r\n      .product-image {\r\n        position: relative;\r\n        width: 100%;\r\n        height: 140px;\r\n        background-color: #f5f5f5;\r\n        overflow: hidden;\r\n\r\n        img {\r\n          width: 100%;\r\n          height: 100%;\r\n          object-fit: cover;\r\n        }\r\n\r\n        .product-badge {\r\n          position: absolute;\r\n          top: 8px;\r\n          right: 8px;\r\n\r\n          span {\r\n            display: inline-block;\r\n            padding: 4px 8px;\r\n            border-radius: 4px;\r\n            font-size: 10px;\r\n            font-weight: 600;\r\n\r\n            &.in-stock {\r\n              background-color: #d4edda;\r\n              color: #155724;\r\n            }\r\n\r\n            &.out-stock {\r\n              background-color: #f8d7da;\r\n              color: #721c24;\r\n            }\r\n          }\r\n        }\r\n      }\r\n\r\n      .product-info {\r\n        padding: 12px;\r\n        flex: 1;\r\n        display: flex;\r\n        flex-direction: column;\r\n\r\n        .product-name {\r\n          margin: 0 0 6px 0;\r\n          font-size: 13px;\r\n          font-weight: 600;\r\n          color: #333;\r\n          line-height: 1.4;\r\n          min-height: 32px;\r\n        }\r\n\r\n        .product-sku {\r\n          font-size: 11px;\r\n          color: #999;\r\n          margin-bottom: 8px;\r\n        }\r\n\r\n        .product-prices {\r\n          display: flex;\r\n          gap: 8px;\r\n          margin-bottom: 10px;\r\n          font-size: 12px;\r\n\r\n          .price {\r\n            font-weight: 700;\r\n            color: #ff6b35;\r\n            font-size: 14px;\r\n          }\r\n\r\n          .mrp {\r\n            color: #999;\r\n            text-decoration: line-through;\r\n            font-size: 11px;\r\n          }\r\n        }\r\n\r\n        .product-actions {\r\n          display: flex;\r\n          gap: 6px;\r\n          margin-top: auto;\r\n\r\n          .qty-input {\r\n            width: 50px;\r\n            padding: 6px 8px;\r\n            border: 1px solid #ddd;\r\n            border-radius: 4px;\r\n            text-align: center;\r\n            font-size: 12px;\r\n\r\n            &:focus {\r\n              outline: none;\r\n              border-color: #ff6b35;\r\n            }\r\n          }\r\n\r\n          .btn-add {\r\n            flex: 1;\r\n            padding: 6px 8px;\r\n            background-color: #ff6b35;\r\n            color: white;\r\n            border: none;\r\n            border-radius: 4px;\r\n            font-size: 11px;\r\n            font-weight: 600;\r\n            cursor: pointer;\r\n            transition: all 0.3s ease;\r\n\r\n            &:hover:not(:disabled) {\r\n              background-color: #e55a2b;\r\n            }\r\n\r\n            &:disabled {\r\n              background-color: #ccc;\r\n              cursor: not-allowed;\r\n              opacity: 0.6;\r\n            }\r\n          }\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  .no-products {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    padding: 40px;\r\n    color: #999;\r\n\r\n    .no-products-icon {\r\n      font-size: 48px;\r\n      margin-bottom: 16px;\r\n      opacity: 0.5;\r\n    }\r\n\r\n    p {\r\n      margin: 0;\r\n      font-size: 16px;\r\n      font-weight: 500;\r\n    }\r\n  }\r\n}\r\n\r\n/* Scrollbar styling */\r\n.products-grid::-webkit-scrollbar {\r\n  width: 8px;\r\n}\r\n\r\n.products-grid::-webkit-scrollbar-track {\r\n  background: #f1f1f1;\r\n}\r\n\r\n.products-grid::-webkit-scrollbar-thumb {\r\n  background: #888;\r\n  border-radius: 4px;\r\n\r\n  &:hover {\r\n    background: #555;\r\n  }\r\n}\r\n\r\n@media (max-width: 1200px) {\r\n  .product-list-container .products-grid {\r\n    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));\r\n  }\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  .product-list-container {\r\n    .search-and-controls {\r\n      .control-buttons {\r\n        flex-wrap: wrap;\r\n\r\n        button {\r\n          flex: 0 1 calc(50% - 5px);\r\n          padding: 8px;\r\n          font-size: 11px;\r\n        }\r\n      }\r\n    }\r\n\r\n    .products-grid {\r\n      grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));\r\n      gap: 8px;\r\n    }\r\n  }\r\n}\r\n.filter-row {\r\n    display: flex;\r\n    width: 100%;\r\n    gap: 20px;\r\n    margin: 20px 0;\r\n}\r\n\r\n.filter-field {\r\n    flex: 0 0 calc(50% - 10px);\r\n    max-width: calc(50% - 10px);\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 8px;\r\n}\r\n\r\n.filter-field label {\r\n    font-size: 16px;\r\n    font-weight: 600;\r\n    color: #444;\r\n    margin-bottom: 4px;\r\n}\r\n\r\n.custom-select {\r\n    width: 100%;\r\n    height: 44px;\r\n    padding: 0 14px;\r\n    border: 1px solid #d8d8d8;\r\n    border-radius: 6px;\r\n    background: #fff;\r\n    font-size: 15px;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n    .filter-row {\r\n        flex-direction: column;\r\n    }\r\n\r\n    .filter-field {\r\n        flex: 0 0 100%;\r\n        max-width: 100%;\r\n    }\r\n}"] }]
    }], null, { products: [{
            type: Input
        }], addToCart: [{
            type: Output
        }] }); })();
//# sourceMappingURL=pos-product-list.component.js.map