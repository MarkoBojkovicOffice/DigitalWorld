import React from 'react';
import { mockBanners } from '../../__utilities/functions';
import { useCarousel } from '../../__utilities/hooks';
import './Hero.css';

const Hero: React.FC = () => {
  const { current, goTo, prev, next } = useCarousel(mockBanners.length, 5000);

  return (
    <section className="hero">
      <div className="hero__slider">
        {mockBanners.map((b, index) => (
          <div
            key={b.id}
            className={`hero__slide ${index === current ? 'hero__slide--active' : ''}`}
            style={{ backgroundImage: `url(${b.image})` }}
          >
            <div className="hero__overlay" />
            <div className="hero__content container">
              <h1 className="hero__title">{b.title}</h1>
              <p className="hero__subtitle">{b.subtitle}</p>
              <a href={b.link} className="hero__btn">
                {b.buttonText}
              </a>
            </div>
          </div>
        ))}

        {/* Arrows */}
        <button className="hero__arrow hero__arrow--left" onClick={prev} aria-label="Prethodni">
          ‹
        </button>
        <button className="hero__arrow hero__arrow--right" onClick={next} aria-label="Sledeći">
          ›
        </button>

        {/* Dots */}
        <div className="hero__dots">
          {mockBanners.map((_, index) => (
            <button
              key={index}
              className={`hero__dot ${index === current ? 'hero__dot--active' : ''}`}
              onClick={() => goTo(index)}
              aria-label={`Baner ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Promo strip */}
      <div className="hero__promo container">
        <div className="hero__promo-item">
          <span className="hero__promo-icon">🚚</span>
          <div>
            <strong>Besplatna dostava</strong>
            <p>Za narudžbine iznad 3.000 RSD</p>
          </div>
        </div>
        <div className="hero__promo-item">
          <span className="hero__promo-icon">🔒</span>
          <div>
            <strong>Sigurna kupovina</strong>
            <p>SSL zaštita i provjereni prodavci</p>
          </div>
        </div>
        <div className="hero__promo-item">
          <span className="hero__promo-icon">↩️</span>
          <div>
            <strong>Povrat do 30 dana</strong>
            <p>Jednostavan povrat robe</p>
          </div>
        </div>
        <div className="hero__promo-item">
          <span className="hero__promo-icon">💬</span>
          <div>
            <strong>Podrška 24/7</strong>
            <p>Uvijek smo tu za vas</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
