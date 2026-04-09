import React from 'react';
import Hero from '../_features/hero/Hero';
import Categories from '../_features/categories/Categories';
import Products from '../_features/products/Products';
import './HomePage.css';

const HomePage: React.FC = () => {
  return (
    <main className="homepage">
      <Hero />
      <Categories />
      <Products />

      {/* Brand banner */}
      <section className="homepage__banner section">
        <div className="container">
          <div className="homepage__banner-inner">
            <div className="homepage__banner-text">
              <h2>Prodajte na Bazzar.rs</h2>
              <p>Pridružite se 500+ prodavaca i doprite do miliona kupaca u Srbiji.</p>
              <a href="/prodavci" className="homepage__banner-btn">Počni danas</a>
            </div>
            <div className="homepage__banner-stats">
              <div className="homepage__stat">
                <strong>500+</strong>
                <span>Aktivnih prodavaca</span>
              </div>
              <div className="homepage__stat">
                <strong>140.000+</strong>
                <span>Proizvoda</span>
              </div>
              <div className="homepage__stat">
                <strong>1M+</strong>
                <span>Zadovoljnih kupaca</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
