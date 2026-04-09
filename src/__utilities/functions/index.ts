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
    name: 'Gorenje GMC6SBK Multicooker',
    price: 7985,
    originalPrice: 14990,
    discount: 47,
    image: 'https://picsum.photos/seed/multicooker/300/300',
    category: 'homeAppliances',
    rating: 4.7,
    reviewCount: 124,
    badge: '-47%',
    seller: 'Bazzar',
  },
  {
    id: 2,
    name: 'Xiaomi 33W Power Bank 20000mAh',
    price: 2540,
    originalPrice: 3390,
    discount: 25,
    image: 'https://picsum.photos/seed/powerbank/300/300',
    category: 'electronics',
    rating: 4.6,
    reviewCount: 89,
    badge: 'NOVO',
    isNew: true,
    brand: 'Xiaomi',
    seller: 'Sentinel shop',
  },
  {
    id: 3,
    name: "L'Oréal Paris Revitalift Filler krema",
    price: 1670,
    originalPrice: 2399,
    discount: 30,
    image: 'https://picsum.photos/seed/loreal/300/300',
    category: 'beauty',
    rating: 4.5,
    reviewCount: 67,
    badge: '-30%',
    brand: "L'ORÉAL",
    seller: 'Supermarket',
  },
  {
    id: 4,
    name: 'Baštenska garnitura BORMANN BSP1180',
    price: 16599,
    originalPrice: 20986,
    discount: 21,
    image: 'https://picsum.photos/seed/garden/300/300',
    category: 'garden',
    rating: 4.4,
    reviewCount: 43,
    badge: 'NOVO',
    isNew: true,
    brand: 'BORMANN PRO',
    seller: 'Poljobit',
  },
  {
    id: 5,
    name: 'ORION Sobni bicikl JOY F1',
    price: 20190,
    originalPrice: 24490,
    discount: 18,
    image: 'https://picsum.photos/seed/bike/300/300',
    category: 'sports',
    rating: 4.3,
    reviewCount: 31,
    badge: 'NOVO',
    isNew: true,
    brand: 'ORION',
    seller: 'Sport Depot',
  },
  {
    id: 6,
    name: 'Audi SQ8 Plavi automobil igračka',
    price: 15660,
    originalPrice: 25900,
    discount: 40,
    image: 'https://picsum.photos/seed/audi/300/300',
    category: 'toys',
    rating: 4.8,
    reviewCount: 156,
    badge: '-40%',
    brand: 'AUDI',
    seller: 'Premium Stili',
  },
  {
    id: 7,
    name: 'Vileda SuperMocio 3Action mop',
    price: 3289,
    originalPrice: 5999,
    discount: 45,
    image: 'https://picsum.photos/seed/mop/300/300',
    category: 'homeGarden',
    rating: 4.6,
    reviewCount: 78,
    badge: '-45%',
    brand: 'Vileda',
    seller: 'Bazzar',
  },
  {
    id: 8,
    name: 'Oral-B iO Series 4 električna četkica',
    price: 5999,
    originalPrice: 9999,
    discount: 40,
    image: 'https://picsum.photos/seed/oralb/300/300',
    category: 'beauty',
    rating: 4.7,
    reviewCount: 92,
    badge: '-40%',
    brand: 'Oral-B',
    seller: 'Bazzar',
  },
  {
    id: 9,
    name: 'Ariel color kapsule za veš 150kom',
    price: 3199,
    originalPrice: 5499,
    discount: 42,
    image: 'https://picsum.photos/seed/ariel/300/300',
    category: 'cleaning',
    rating: 4.5,
    reviewCount: 234,
    badge: '-42%',
    brand: 'Ariel',
    seller: 'Supermarket',
  },
  {
    id: 10,
    name: 'BWT Penguin filter bokal za vodu',
    price: 2490,
    originalPrice: 4499,
    discount: 45,
    image: 'https://picsum.photos/seed/bwt/300/300',
    category: 'homeGarden',
    rating: 4.4,
    reviewCount: 45,
    badge: 'DO -45%',
    brand: 'BWT',
    seller: 'Bazzar',
  },
];

export const mockCategories: Category[] = [
  { id: 1, name: 'Supermarket', icon: '🛒', slug: 'supermarket' },
  { id: 2, name: 'Hrana i piće', icon: '🍎', slug: 'hrana-i-pice' },
  { id: 3, name: 'Čišćenje pranje i održavanje', icon: '🧹', slug: 'ciscenje' },
  { id: 4, name: 'Lepota i nega', icon: '💄', slug: 'lepota-i-nega' },
  { id: 5, name: 'Kuća i bašta', icon: '🏠', slug: 'kuca-i-basta' },
  { id: 6, name: 'Kućni aparati', icon: '🔌', slug: 'kucni-aparati' },
  { id: 7, name: 'Tehnika', icon: '📱', slug: 'tehnika' },
  { id: 8, name: 'Računari', icon: '💻', slug: 'racunari' },
  { id: 9, name: 'Sportska oprema', icon: '⚽', slug: 'sportska-oprema' },
  { id: 10, name: 'Oprema za bebe', icon: '👶', slug: 'oprema-za-bebe' },
  { id: 11, name: 'Dečiji kutak', icon: '🎠', slug: 'deciji-kutak' },
  { id: 12, name: 'Moda', icon: '👗', slug: 'moda' },
  { id: 13, name: 'Kućni ljubimci', icon: '🐾', slug: 'kucni-ljubimci' },
  { id: 14, name: 'Auto moto oprema i delovi', icon: '🚗', slug: 'auto-moto' },
  { id: 15, name: 'Alati', icon: '🔧', slug: 'alati' },
  { id: 16, name: 'Kancelarijska oprema', icon: '📋', slug: 'kancelarija' },
  { id: 17, name: 'Profesionalna oprema', icon: '🏭', slug: 'profesionalna-oprema' },
  { id: 18, name: 'Ostalo', icon: '📦', slug: 'ostalo' },
];

export const mockBanners: Banner[] = [
  {
    id: 1,
    title: 'POHVALI SE DVORIŠTEM',
    subtitle: 'Sve za savršen vrt i dvorište',
    image: '',
    link: '/basta',
    buttonText: 'POGLEDAJ PONUDU',
  },
  {
    id: 2,
    title: 'PROLEĆNA AKCIJA',
    subtitle: 'Neverovatne cene za prolećnu sezonu',
    image: '',
    link: '/akcije',
    buttonText: 'KUPI ODMAH',
  },
  {
    id: 3,
    title: 'IGRALIŠTE ZA DECU',
    subtitle: 'Sjajna zabava i vežba na otvorenom',
    image: '',
    link: '/deca',
    buttonText: 'ISTRAŽI PONUDU',
  },
];
