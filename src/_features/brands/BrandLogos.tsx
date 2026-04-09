import React from 'react';
import './BrandLogos.css';

const brands = [
  {
    id: 1,
    content: (
      <div className="bl-card__loreal">
        <span className="bl-card__loreal-main">L'ORÉAL</span>
        <span className="bl-card__loreal-sub">PARIS</span>
      </div>
    ),
  },
  {
    id: 2,
    content: (
      <div className="bl-card__loreal">
        <span className="bl-card__loreal-main">L'ORÉAL</span>
        <span className="bl-card__loreal-sub">MEN EXPERT</span>
      </div>
    ),
  },
  {
    id: 3,
    content: (
      <div className="bl-card__mixa">
        <span className="bl-card__mixa-name">Mixa</span>
        <span className="bl-card__mixa-sub">stručnjak za osetljivu kožu</span>
      </div>
    ),
  },
  {
    id: 4,
    content: (
      <div className="bl-card__maybelline">
        <span className="bl-card__maybelline-name">MAYBELLINE</span>
        <span className="bl-card__maybelline-sub">NEW YORK</span>
      </div>
    ),
  },
  {
    id: 5,
    content: (
      <div className="bl-card__garnier">
        <span className="bl-card__garnier-name">GARNIER</span>
      </div>
    ),
  },
  {
    id: 6,
    content: (
      <div className="bl-card__essie">
        <span className="bl-card__essie-name">essie</span>
      </div>
    ),
  },
];

const BrandLogos: React.FC = () => {
  return (
    <section className="bl">
      <div className="bl__header">
        <h2 className="bl__title">Najpopularniji beauty brendovi</h2>
      </div>
      <div className="bl__grid">
        {brands.map((brand) => (
          <a key={brand.id} href="/beauty" className="bl-card">
            {brand.content}
          </a>
        ))}
      </div>
    </section>
  );
};

export default BrandLogos;
