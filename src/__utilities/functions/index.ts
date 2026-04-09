import { Product, Category, Banner } from '../types';

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('sr-RS', {
    style: 'currency',
    currency: 'RSD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};

export const calculateDiscount = (original: number, current: number): number => {
  return Math.round(((original - current) / original) * 100);
};

export const getDiscountedProducts = (products: Product[]): Product[] => {
  return products.filter((p) => p.discount && p.discount > 0);
};

export const getNewProducts = (products: Product[]): Product[] => {
  return products.filter((p) => p.isNew);
};

export const getProductsByCategory = (products: Product[], category: string): Product[] => {
  return products.filter((p) => p.category === category);
};

export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};

export const mockProducts: Product[] = [
  {
    id: 1,
    name: 'Samsung Galaxy S24 Ultra 256GB',
    price: 129999,
    originalPrice: 149999,
    discount: 13,
    image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=400&fit=crop',
    category: 'electronics',
    rating: 4.8,
    reviewCount: 234,
    badge: 'AKCIJA',
  },
  {
    id: 2,
    name: 'Apple MacBook Air M3 13"',
    price: 179990,
    originalPrice: 199990,
    discount: 10,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop',
    category: 'computers',
    rating: 4.9,
    reviewCount: 156,
    badge: 'POPULAR',
  },
  {
    id: 3,
    name: 'Philips Air Fryer XXL HD9650',
    price: 24990,
    originalPrice: 34990,
    discount: 29,
    image: 'https://images.unsplash.com/photo-1585515320310-259814833e62?w=400&h=400&fit=crop',
    category: 'homeGarden',
    rating: 4.6,
    reviewCount: 89,
    badge: '-29%',
  },
  {
    id: 4,
    name: 'Nike Air Max 270 Muške patike',
    price: 14990,
    originalPrice: 18990,
    discount: 21,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
    category: 'fashion',
    rating: 4.5,
    reviewCount: 312,
  },
  {
    id: 5,
    name: 'Sony WH-1000XM5 Bežične slušalice',
    price: 39990,
    originalPrice: 49990,
    discount: 20,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
    category: 'electronics',
    rating: 4.7,
    reviewCount: 198,
    badge: 'AKCIJA',
  },
  {
    id: 6,
    name: 'Bosch Robotski usisivač Indego M+700',
    price: 49990,
    originalPrice: 69990,
    discount: 29,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop',
    category: 'homeGarden',
    rating: 4.4,
    reviewCount: 67,
    badge: '-29%',
  },
  {
    id: 7,
    name: 'Lego Technic Bugatti Chiron',
    price: 22990,
    originalPrice: 27990,
    discount: 18,
    image: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=400&h=400&fit=crop',
    category: 'toys',
    rating: 4.8,
    reviewCount: 145,
    isNew: true,
    badge: 'NOVO',
  },
  {
    id: 8,
    name: 'Garmin Forerunner 955 Solar GPS sat',
    price: 67990,
    originalPrice: 79990,
    discount: 15,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop',
    category: 'sports',
    rating: 4.6,
    reviewCount: 78,
  },
];

export const mockCategories: Category[] = [
  { id: 1, name: 'Supermarket', icon: '🛒', slug: 'supermarket' },
  { id: 2, name: 'Dom i bašta', icon: '🏠', slug: 'home-garden' },
  { id: 3, name: 'Tehnika', icon: '📱', slug: 'electronics' },
  { id: 4, name: 'Računari', icon: '💻', slug: 'computers' },
  { id: 5, name: 'Sport i rekreacija', icon: '⚽', slug: 'sports' },
  { id: 6, name: 'Beba i deca', icon: '👶', slug: 'baby' },
  { id: 7, name: 'Moda', icon: '👗', slug: 'fashion' },
  { id: 8, name: 'Auto-moto', icon: '🚗', slug: 'automotive' },
  { id: 9, name: 'Alati', icon: '🔧', slug: 'tools' },
  { id: 10, name: 'Kancelarija', icon: '📋', slug: 'office' },
  { id: 11, name: 'Lepota i zdravlje', icon: '💄', slug: 'beauty' },
  { id: 12, name: 'Igračke i hobiji', icon: '🎮', slug: 'toys' },
];

export const mockBanners: Banner[] = [
  {
    id: 1,
    title: 'Prolećna rasprodaja',
    subtitle: 'Do -50% na hiljade artikala',
    image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1200&h=500&fit=crop',
    link: '/akcije',
    buttonText: 'Kupi odmah',
  },
  {
    id: 2,
    title: 'Novi Samsung Galaxy S24',
    subtitle: 'Najnovija tehnologija u tvojim rukama',
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=1200&h=500&fit=crop',
    link: '/tehnika',
    buttonText: 'Pogledaj',
  },
  {
    id: 3,
    title: 'Sport & Fitness',
    subtitle: 'Opremi se za novu sezonu',
    image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1200&h=500&fit=crop',
    link: '/sport',
    buttonText: 'Istraži',
  },
];
