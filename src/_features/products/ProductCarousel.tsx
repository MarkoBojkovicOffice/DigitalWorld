import React, { useState } from 'react';
import { mockProducts } from '../../__utilities/functions';
import './ProductCarousel.css';

const VISIBLE = 4;

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  return (
    <div className="pc-card__stars">
      {[1, 2, 3, 4, 5].map((s) => (
        <span key={s} className={`pc-card__star ${s <= Math.round(rating) ? 'pc-card__star--on' : ''}`}>★</span>
      ))}
      <span className="pc-card__rating-num">({rating})</span>
    </div>
  );
};

const ProductCarousel: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const total = mockProducts.length;
  const maxStart = Math.max(0, total - VISIBLE);
  const dots = Math.ceil(total / VISIBLE);

  const prev = () => setCurrent((c) => Math.max(0, c - VISIBLE));
  const next = () => setCurrent((c) => Math.min(maxStart, c + VISIBLE));
  const goTo = (dot: number) => setCurrent(Math.min(dot * VISIBLE, maxStart));

  const visible = mockProducts.slice(current, current + VISIBLE);

  return (
    <section className="pc">
      <div className="pc__header">
        <h2 className="pc__title">#bazzarovih 10 - <span>najbolje iz nedeljne ponude</span></h2>
      </div>
      <div className="pc__wrapper">
        <button className="pc__arrow pc__arrow--left" onClick={prev} disabled={current === 0} aria-label="Prethodni">‹</button>
        <div className="pc__track">
          {visible.map((product) => (
            <div key={product.id} className="pc-card">
              <div className="pc-card__top">
                <div className="pc-card__badge-wrap">
                  {product.isNew && <span className="pc-card__badge pc-card__badge--new">NOVO</span>}
                  {!product.isNew && product.discount && (
                    <span className="pc-card__badge pc-card__badge--discount">-{product.discount}%</span>
                  )}
                </div>
                {product.brand && (
                  <span className="pc-card__brand">{product.brand}</span>
                )}
              </div>
              <div className="pc-card__img-wrap">
                <img
                  src={`https://picsum.photos/seed/${product.id}x/220/180`}
                  alt={product.name}
                  className="pc-card__img"
                  loading="lazy"
                />
              </div>
              <div className="pc-card__body">
                <div className="pc-card__prices">
                  {product.originalPrice && (
                    <span className="pc-card__original">{product.originalPrice.toLocaleString('sr-RS')}</span>
                  )}
                  {product.discount && (
                    <span className="pc-card__pct-badge">-{product.discount}%</span>
                  )}
                </div>
                <div className="pc-card__price">
                  {product.price.toLocaleString('sr-RS')},00 <span>RSD</span>
                </div>
                <StarRating rating={product.rating} />
                <p className="pc-card__name">{product.name}</p>
                {product.seller && (
                  <p className="pc-card__seller">{product.seller}</p>
                )}
              </div>
            </div>
          ))}
        </div>
        <button className="pc__arrow pc__arrow--right" onClick={next} disabled={current >= maxStart} aria-label="Sledeći">›</button>
      </div>
      <div className="pc__dots">
        {Array.from({ length: dots }).map((_, i) => (
          <button
            key={i}
            className={`pc__dot ${Math.floor(current / VISIBLE) === i ? 'pc__dot--active' : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Stranica ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductCarousel;
