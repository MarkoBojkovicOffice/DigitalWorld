import React, { useState } from 'react';
import { useAppContext } from '../../_context/AppContext';
import './Header.css';

const Header: React.FC = () => {
  const { cartCount } = useAppContext();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <header className="header">
      {/* Main header bar - dark charcoal */}
      <div className="header__main">
        <div className="header__main-inner container">
          {/* Hamburger + Logo */}
          <div className="header__left">
            <button className="header__hamburger" aria-label="Menu">
              <span /><span /><span />
            </button>
            <a href="/" className="header__logo">
              <span className="header__logo-text">bazzar</span>
            </a>
          </div>

          {/* Search */}
          <form className="header__search" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Pretraga"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="header__search-input"
            />
            <button type="submit" className="header__search-btn" aria-label="Pretraži">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>
          </form>

          {/* Right actions */}
          <div className="header__actions">
            <a href="/account" className="header__action-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              <span>Prijava</span>
            </a>
            <a href="/cart" className="header__action-btn header__cart-btn">
              <div className="header__cart-icon-wrap">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="9" cy="21" r="1" />
                  <circle cx="20" cy="21" r="1" />
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                </svg>
                {cartCount > 0 && (
                  <span className="header__cart-badge">{cartCount}</span>
                )}
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Sub-nav strip */}
      <div className="header__subnav">
        <div className="container header__subnav-inner">
          <div className="header__subnav-links">
            <a href="/prvomajska-akcija" className="header__subnav-link header__subnav-link--hot">
              Prvomajska akcija
            </a>
            <a href="/akcije" className="header__subnav-link">Akcije i popusti</a>
            <a href="/pampers" className="header__subnav-link">Pampers+ Loyalty Plan</a>
            <a href="/voucher" className="header__subnav-link">Poklon vaučer</a>
          </div>
          <div className="header__subnav-right">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4caf50" strokeWidth="2.5">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span>Sigurna kupovina</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

