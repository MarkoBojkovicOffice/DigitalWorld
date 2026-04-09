export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  image: string;
  category: string;
  rating: number;
  reviewCount: number;
  badge?: string;
  isNew?: boolean;
  brand?: string;
  seller?: string;
}

export interface Category {
  id: number;
  name: string;
  icon: string;
  slug: string;
  subcategories?: string[];
}

export interface Banner {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  link: string;
  buttonText: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface User {
  id: number;
  name: string;
  email: string;
  avatar?: string;
}
