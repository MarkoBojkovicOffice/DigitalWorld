import React from 'react';
import { mockCategories } from '../../__utilities/functions';
import './Sidebar.css';

const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar__login">
        <p className="sidebar__login-title">Sigurna online kupovina</p>
        <p className="sidebar__login-sub">Prijavi se za najbolje iskustvo kupovanja</p>
        <a href="/login" className="sidebar__login-btn">Prijava</a>
      </div>
      <nav className="sidebar__nav">
        <a href="/supermarket" className="sidebar__cat sidebar__cat--active">
          <span className="sidebar__cat-icon">🛒</span>
          <span className="sidebar__cat-name">Supermarket</span>
          <span className="sidebar__cat-arrow">›</span>
        </a>
        <div className="sidebar__group-label">Ajmo napolje!</div>
        {mockCategories.slice(1).map((cat) => (
          <a key={cat.id} href={`/kategorija/${cat.slug}`} className="sidebar__cat">
            <span className="sidebar__cat-icon">{cat.icon}</span>
            <span className="sidebar__cat-name">{cat.name}</span>
            <span className="sidebar__cat-arrow">›</span>
          </a>
        ))}
        <div className="sidebar__group-label">Ostalo</div>
        <a href="/brendovi" className="sidebar__cat">
          <span className="sidebar__cat-icon">🏷️</span>
          <span className="sidebar__cat-name">Svi brendovi</span>
          <span className="sidebar__cat-arrow">›</span>
        </a>
        <a href="/voucher" className="sidebar__cat">
          <span className="sidebar__cat-icon">🎁</span>
          <span className="sidebar__cat-name">Poklon vaučer</span>
          <span className="sidebar__cat-arrow">›</span>
        </a>
      </nav>
    </aside>
  );
};

export default Sidebar;
