import React from 'react';
import { mockProducts } from '../../__utilities/functions';
import ProductCard from '../../__utilities/components/ProductCard';
import './Products.css';

const Products: React.FC = () => {
  const deals = mockProducts.filter((p) => p.discount && p.discount >= 15);

  return (
    <>
      {/* Weekly Deals */}
      <section className="products section">
        <div className="container">
          <div className="section__header">
            <h2 className="section__title">🔥 Nedeljne akcije</h2>
            <a href="/akcije" className="section__view-all">Pogledaj sve →</a>
          </div>
          <div className="products__grid">
            {deals.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* All Products */}
      <section className="products section">
        <div className="container">
          <div className="section__header">
            <h2 className="section__title">✨ Preporučeno za vas</h2>
            <a href="/proizvodi" className="section__view-all">Pogledaj sve →</a>
          </div>
          <div className="products__grid">
            {mockProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
