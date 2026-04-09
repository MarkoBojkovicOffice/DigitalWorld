import React, { useState } from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail('');
    alert('Uspješno ste se prijavili na newsletter!');
  };

  return (
    <footer className="footer">
      {/* Newsletter */}
      <div className="footer__newsletter">
        <div className="container footer__newsletter-inner">
          <div>
            <h3 className="footer__newsletter-title">📬 Prijavite se na newsletter</h3>
            <p>Budite prvi koji saznaje za akcije i ekskluzivne ponude</p>
          </div>
          <form className="footer__newsletter-form" onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Unesite e-mail adresu"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="footer__newsletter-input"
            />
            <button type="submit" className="footer__newsletter-btn">
              Prijavite se
            </button>
          </form>
        </div>
      </div>

      {/* Main footer */}
      <div className="footer__main">
        <div className="container footer__main-inner">
          {/* Brand */}
          <div className="footer__brand">
            <div className="footer__logo">
              <span className="footer__logo-b">B</span>azzar<span className="footer__logo-dot">.rs</span>
            </div>
            <p className="footer__brand-desc">
              Najveći online marketplace u Srbiji. Kupujte pouzdano, brzo i sigurno.
            </p>
            <div className="footer__social">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="footer__social-link">f</a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="footer__social-link">📷</a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="footer__social-link">𝕏</a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="footer__social-link">▶</a>
            </div>
          </div>

          {/* Links */}
          <div className="footer__col">
            <h4>O kompaniji</h4>
            <ul>
              <li><a href="/o-nama">O nama</a></li>
              <li><a href="/karijere">Karijere</a></li>
              <li><a href="/press">Press</a></li>
              <li><a href="/partneri">Partneri</a></li>
              <li><a href="/prodavci">Postani prodavac</a></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4>Pomoć</h4>
            <ul>
              <li><a href="/faq">Česta pitanja</a></li>
              <li><a href="/dostava">Dostava</a></li>
              <li><a href="/povrat">Povrat robe</a></li>
              <li><a href="/pracenje">Praćenje narudžbine</a></li>
              <li><a href="/kontakt">Kontakt</a></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4>Informacije</h4>
            <ul>
              <li><a href="/privatnost">Politika privatnosti</a></li>
              <li><a href="/uslovi">Uslovi korišćenja</a></li>
              <li><a href="/kolacici">Politika kolačića</a></li>
              <li><a href="/magazine">Magazin</a></li>
            </ul>
          </div>

          {/* Payment */}
          <div className="footer__col">
            <h4>Načini plaćanja</h4>
            <div className="footer__payments">
              <span className="footer__payment-badge">VISA</span>
              <span className="footer__payment-badge">Mastercard</span>
              <span className="footer__payment-badge">PayPal</span>
              <span className="footer__payment-badge">COD</span>
              <span className="footer__payment-badge">Bank</span>
            </div>
            <h4 style={{ marginTop: 20 }}>Kontakt</h4>
            <p style={{ fontSize: 13, color: '#aaa' }}>
              📞 +381 11 123 4567<br />
              📧 podrska@bazzar.rs<br />
              Pon–Pet: 08:00 – 20:00
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>© 2024 Bazzar.rs — Sva prava zadržana</p>
          <p>Izrađeno sa ❤️ u Srbiji</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
