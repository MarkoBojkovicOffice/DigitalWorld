import React from 'react';
import { mockCategories } from '../../__utilities/functions';
import './Categories.css';

const Categories: React.FC = () => {
  return (
    <section className="categories section">
      <div className="container">
        <div className="section__header">
          <h2 className="section__title">Popularne kategorije</h2>
          <a href="/kategorije" className="section__view-all">Pogledaj sve →</a>
        </div>

        <div className="categories__grid">
          {mockCategories.map((cat) => (
            <a key={cat.id} href={`/kategorija/${cat.slug}`} className="categories__card">
              <span className="categories__icon">{cat.icon}</span>
              <span className="categories__name">{cat.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
