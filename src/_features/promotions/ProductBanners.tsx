import React from 'react';
import './ProductBanners.css';

const ProductBanners: React.FC = () => {
  return (
    <section className="pb">
      {/* Row 1 */}
      <div className="pb__row">
        <a href="/akcije" className="pb-tile pb-tile--hero pb-tile--outdoor">
          <div className="pb-tile__overlay">
            <span className="pb-tile__label">TOP PONUDA</span>
            <h3 className="pb-tile__title">Ajmo napolje</h3>
          </div>
        </a>
        <a href="/vileda" className="pb-tile pb-tile--product">
          <div className="pb-tile__discount-badge">-45%</div>
          <div className="pb-tile__img-wrap">
            <img src="https://picsum.photos/seed/mopclean/200/160" alt="Vileda mop" className="pb-tile__img" loading="lazy" />
          </div>
          <div className="pb-tile__info">
            <div className="pb-tile__brand">Vileda</div>
            <div className="pb-tile__prices">
              <span className="pb-tile__original">5.999</span>
              <span className="pb-tile__pct">-45%</span>
            </div>
            <div className="pb-tile__price">3.289,00 <span>RSD</span></div>
            <p className="pb-tile__desc">Za blistav pod, svaki put</p>
          </div>
        </a>
        <a href="/oralb" className="pb-tile pb-tile--product">
          <div className="pb-tile__discount-badge">-40%</div>
          <div className="pb-tile__img-wrap">
            <img src="https://picsum.photos/seed/toothbrush/200/160" alt="Oral-B" className="pb-tile__img" loading="lazy" />
          </div>
          <div className="pb-tile__info">
            <div className="pb-tile__brand">Oral-B</div>
            <div className="pb-tile__prices">
              <span className="pb-tile__original">9.999</span>
              <span className="pb-tile__pct">-40%</span>
            </div>
            <div className="pb-tile__price">5.999,00 <span>RSD</span></div>
            <p className="pb-tile__desc">Električna četkica za blistav osmeh</p>
          </div>
        </a>
      </div>

      {/* Row 2 */}
      <div className="pb__row">
        <a href="/prvomajska" className="pb-tile pb-tile--hero pb-tile--picnic">
          <div className="pb-tile__overlay">
            <span className="pb-tile__label">TOP POPUSTI</span>
            <h3 className="pb-tile__title">Prvomajska akcija</h3>
          </div>
        </a>
        <a href="/ariel" className="pb-tile pb-tile--product">
          <div className="pb-tile__discount-badge">-42%</div>
          <div className="pb-tile__img-wrap">
            <img src="https://picsum.photos/seed/detergent/200/160" alt="Ariel" className="pb-tile__img" loading="lazy" />
          </div>
          <div className="pb-tile__info">
            <div className="pb-tile__brand">Ariel</div>
            <div className="pb-tile__prices">
              <span className="pb-tile__original">5.499</span>
              <span className="pb-tile__pct">-42%</span>
            </div>
            <div className="pb-tile__price">3.199,00 <span>RSD</span></div>
            <p className="pb-tile__desc">Ariel color kapsule za veš 150kom</p>
          </div>
        </a>
        <a href="/bwt" className="pb-tile pb-tile--product">
          <div className="pb-tile__discount-badge">DO -45%</div>
          <div className="pb-tile__img-wrap">
            <img src="https://picsum.photos/seed/filterjug/200/160" alt="BWT" className="pb-tile__img" loading="lazy" />
          </div>
          <div className="pb-tile__info">
            <div className="pb-tile__brand">BWT</div>
            <div className="pb-tile__prices">
              <span className="pb-tile__original">4.499</span>
              <span className="pb-tile__pct">DO -45%</span>
            </div>
            <div className="pb-tile__price">2.490,00 <span>RSD</span></div>
            <p className="pb-tile__desc">Prečišćena voda za zdraviji život</p>
          </div>
        </a>
      </div>
    </section>
  );
};

export default ProductBanners;
