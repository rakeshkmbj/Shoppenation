import { Product } from './product.model';

export interface CartItem {
  product: Product;
  quantity: number;
  price: number;
  discount: number;
  discountPercentage: number;
  cashback: number;
  total: number;
  mrpTotal: number;
}

export interface CartSummary {
  items: CartItem[];
  totalItems: number;
  totalQty: number;
  mrpTotal: number;
  discountAmount: number;
  cashbackAmount: number;
  taxAmount: number;
  netPayable: number;
}
