import React from 'react';
import { Product } from '../../__utilities/types';
import { formatPrice } from '../../__utilities/functions';
import { useAppContext } from '../../_context/AppContext';
import './ProductCard.css';

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  const { addToCart, wishlist, toggleWishlist } = useAppContext();
  const isWishlisted = wishlist.includes(product.id);

  return (
    <div className="product-card">
      {product.badge && (
        <span className="product-card__badge">{product.badge}</span>
      )}

      <button
        className={`product-card__wishlist ${isWishlisted ? 'product-card__wishlist--active' : ''}`}
        onClick={() => toggleWishlist(product.id)}
        aria-label="Lista želja"
      >
        {isWishlisted ? '♥' : '♡'}
      </button>

      <a href={`/proizvod/${product.id}`} className="product-card__image-wrap">
        <img
          src={product.image}
          alt={product.name}
          className="product-card__image"
          loading="lazy"
        />
      </a>

      <div className="product-card__body">
        <a href={`/proizvod/${product.id}`} className="product-card__name">
          {product.name}
        </a>

        <div className="product-card__rating">
          {'★'.repeat(Math.round(product.rating))}{'☆'.repeat(5 - Math.round(product.rating))}
          <span className="product-card__rating-count">({product.reviewCount})</span>
        </div>

        <div className="product-card__price-row">
          <span className="product-card__price">{formatPrice(product.price)}</span>
          {product.originalPrice && (
            <span className="product-card__original">{formatPrice(product.originalPrice)}</span>
          )}
          {product.discount && (
            <span className="product-card__discount">-{product.discount}%</span>
          )}
        </div>

        <button
          className="product-card__add-btn"
          onClick={() => addToCart(product)}
        >
          + Dodaj u korpu
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
