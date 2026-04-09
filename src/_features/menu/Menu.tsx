import React from 'react';
import { mockCategories } from '../../__utilities/functions';
import './Menu.css';

const Menu: React.FC = () => {

  return (
    <nav className="menu">
      <div className="menu__inner container">
        <button className="menu__all-categories">
          ☰ &nbsp; Sve kategorije
        </button>

        <ul className="menu__list">
          {mockCategories.slice(0, 8).map((cat) => (
            <li
              key={cat.id}
              className="menu__item"
            >
              <a href={`/kategorija/${cat.slug}`} className="menu__link">
                {cat.name}
              </a>
            </li>
          ))}
          <li className="menu__item">
            <a href="/kategorije" className="menu__link menu__link--more">
              Više ▾
            </a>
          </li>
        </ul>

        <div className="menu__promo">
          <a href="/akcije" className="menu__promo-link">🔥 Akcije</a>
          <a href="/novo" className="menu__promo-link">✨ Novo</a>
          <a href="/magazine" className="menu__promo-link">📰 Magazin</a>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
