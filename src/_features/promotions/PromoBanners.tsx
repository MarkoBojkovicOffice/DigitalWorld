import React from 'react';
import './PromoBanners.css';

const PromoBanners: React.FC = () => {
  return (
    <section className="promo">
      {/* Row 1 */}
      <div className="promo__row">
        <a href="/beauty" className="promo-card promo-card--dark">
          <div className="promo-card__content">
            <div className="promo-card__brands">
              <span>L'ORÉAL PARIS</span>
              <span className="promo-card__sep">|</span>
              <span>GARNIER</span>
              <span className="promo-card__sep">|</span>
              <span>MAYBELLINE</span>
              <span className="promo-card__sep">|</span>
              <span>essie</span>
            </div>
            <p className="promo-card__hashtag">#viralbeauty</p>
            <h3 className="promo-card__title">Next level beauty!</h3>
            <div className="promo-card__badge">do -40%</div>
            <p className="promo-card__sub">Ugrabi super popust</p>
          </div>
        </a>
        <a href="/basta" className="promo-card promo-card--garden">
          <div className="promo-card__content">
            <h3 className="promo-card__title promo-card__title--light">Pohvali se dvorištem</h3>
            <div className="promo-card__badge promo-card__badge--red">SUPER POPUSTI</div>
          </div>
        </a>
        <a href="/deca" className="promo-card promo-card--wood">
          <div className="promo-card__content">
            <h3 className="promo-card__title promo-card__title--light">IGRALIŠTA ZA DECU</h3>
            <div className="promo-card__badge promo-card__badge--red">-20%</div>
            <p className="promo-card__sub promo-card__sub--light">Sjajna zabava i vežba na otvorenom</p>
          </div>
        </a>
      </div>

      {/* Row 2 */}
      <div className="promo__row">
        <a href="/ciscenje" className="promo-card promo-card--spring">
          <div className="promo-card__content">
            <h3 className="promo-card__title">PROLEĆNO ČIŠĆENJE</h3>
            <div className="promo-card__badge promo-card__badge--yellow">DO -40%</div>
            <p className="promo-card__sub">Sve što ti je potrebno za blistav i čist dom</p>
          </div>
        </a>
        <a href="/henkel" className="promo-card promo-card--navy">
          <div className="promo-card__content">
            <div className="promo-card__brand-text">Henkel</div>
            <div className="promo-card__badge promo-card__badge--white">DO -50%</div>
            <h3 className="promo-card__title promo-card__title--light">PRAVI IZBOR ZA PROLEĆNU SVEŽINU DOMA</h3>
          </div>
        </a>
        <a href="/pampers" className="promo-card promo-card--teal">
          <div className="promo-card__content">
            <div className="promo-card__brand-text promo-card__brand-text--pampers">Pampers</div>
            <div className="promo-card__brand-text promo-card__brand-text--bazzar">bazzar.rs</div>
            <p className="promo-card__sub promo-card__sub--dark">nagrađuju najlojalnije kupce!</p>
          </div>
        </a>
      </div>
    </section>
  );
};

export default PromoBanners;
