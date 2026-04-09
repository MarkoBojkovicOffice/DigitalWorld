import React from 'react';
import Hero from '../_features/hero/Hero';
import ProductCarousel from '../_features/products/ProductCarousel';
import BrandLogos from '../_features/brands/BrandLogos';
import PromoBanners from '../_features/promotions/PromoBanners';
import ProductBanners from '../_features/promotions/ProductBanners';
import Categories from '../_features/categories/Categories';
import './HomePage.css';

const HomePage: React.FC = () => {
  return (
    <main className="homepage">
      <Hero />
      <ProductCarousel />
      <BrandLogos />
      <PromoBanners />
      <ProductBanners />
      <Categories />
    </main>
  );
};

export default HomePage;
