export interface Product {
  id: string;
  name: string;
  sku: string;
  category: string;
  price: number;
  mrp: number;
  image: string;
  stock: number;
  description?: string;
  barcode?: string;
}

export interface ProductCategory {
  id: string;
  name: string;
  icon?: string;
  count?: number;
}
