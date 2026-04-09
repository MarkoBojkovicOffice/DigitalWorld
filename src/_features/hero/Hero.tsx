import React from 'react';
import { useCarousel } from '../../__utilities/hooks';
import './Hero.css';

const slides = [
  {
    id: 1,
    bg: 'linear-gradient(135deg, #1b5e20 0%, #2e7d32 40%, #388e3c 70%, #66bb6a 100%)',
    badge: 'SUPER POPUSTI',
    title: 'POHVALI SE DVORIŠTEM',
    subtitle: 'Sve za savršen vrt i dvorište',
    link: '/basta',
    btnText: 'POGLEDAJ PONUDU',
    emoji: '🌿',
  },
  {
    id: 2,
    bg: 'linear-gradient(135deg, #bf360c 0%, #e64a19 40%, #ff7043 70%, #ffab91 100%)',
    badge: 'DO -50%',
    title: 'PROLEĆNA AKCIJA',
    subtitle: 'Neverovatne cene za prolećnu sezonu',
    link: '/akcije',
    btnText: 'KUPI ODMAH',
    emoji: '🌸',
  },
  {
    id: 3,
    bg: 'linear-gradient(135deg, #01579b 0%, #0277bd 40%, #039be5 70%, #4fc3f7 100%)',
    badge: '-20%',
    title: 'IGRALIŠTE ZA DECU',
    subtitle: 'Sjajna zabava i vežba na otvorenom',
    link: '/deca',
    btnText: 'ISTRAŽI PONUDU',
    emoji: '🎠',
  },
];

const Hero: React.FC = () => {
  const { current, goTo, prev, next } = useCarousel(slides.length, 5000);

  return (
    <section className="hero">
      <div className="hero__slider">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`hero__slide ${index === current ? 'hero__slide--active' : ''}`}
            style={{ background: slide.bg }}
          >
            <div className="hero__content">
              <div className="hero__emoji">{slide.emoji}</div>
              <div className="hero__badge">{slide.badge}</div>
              <h1 className="hero__title">{slide.title}</h1>
              <p className="hero__subtitle">{slide.subtitle}</p>
              <a href={slide.link} className="hero__btn">
                {slide.btnText}
              </a>
            </div>
          </div>
        ))}

        <button className="hero__arrow hero__arrow--left" onClick={prev} aria-label="Prethodni">‹</button>
        <button className="hero__arrow hero__arrow--right" onClick={next} aria-label="Sledeći">›</button>

        <div className="hero__dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`hero__dot ${index === current ? 'hero__dot--active' : ''}`}
              onClick={() => goTo(index)}
              aria-label={`Slajd ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;

