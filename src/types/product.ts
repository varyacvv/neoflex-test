export type Category = "wired" | "wireless";

export interface Product {
  id: number;
  title: string;
  price: number;
  oldPrice?: number;
  rating: number;
  image: string;
  category: Category;
}

export interface CartItemType {
  product: Product;
  quantity: number;
}
