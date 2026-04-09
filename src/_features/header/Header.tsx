import React, { useState } from 'react';
import { useAppContext } from '../../_context/AppContext';
import './Header.css';

const Header: React.FC = () => {
  const { cartCount } = useAppContext();
  const [searchQuery, setSearchQuery] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Search logic will be wired to API later
  };

  return (
    <header className="header">
      {/* Top bar */}
      <div className="header__topbar">
        <div className="header__topbar-inner container">
          <span>📞 +381 11 123 4567</span>
          <span>📧 podrska@bazzar.rs</span>
          <div className="header__topbar-links">
            <a href="/tracking">Praćenje narudžbine</a>
            <a href="/seller">Postani prodavac</a>
            <a href="/help">Pomoć</a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="header__main">
        <div className="header__main-inner container">
          {/* Logo */}
          <a href="/" className="header__logo">
            <span className="header__logo-b">B</span>azzar
            <span className="header__logo-dot">.rs</span>
          </a>

          {/* Search */}
          <form className="header__search" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Pretraži proizvode..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="header__search-input"
            />
            <button type="submit" className="header__search-btn">
              🔍
            </button>
          </form>

          {/* Actions */}
          <div className="header__actions">
            <a href="/wishlist" className="header__action-btn" title="Lista želja">
              <span className="header__action-icon">♡</span>
              <span className="header__action-label">Lista želja</span>
            </a>

            <a href="/account" className="header__action-btn" title="Moj nalog">
              <span className="header__action-icon">👤</span>
              <span className="header__action-label">Nalog</span>
            </a>

            <a href="/cart" className="header__action-btn header__cart" title="Korpa">
              <span className="header__action-icon">🛒</span>
              {cartCount > 0 && (
                <span className="header__cart-badge">{cartCount}</span>
              )}
              <span className="header__action-label">Korpa</span>
            </a>

            <button
              className="header__burger"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              ☰
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
