import './Hero.css';

export default function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      {/* Background image */}
      <div className="hero__bg">
        <img src="/hero_banner.png" alt="SVS Pest and Fragrance Spray Services" className="hero__bg-img" />
        <div className="hero__bg-overlay" />
      </div>

      {/* Animated particles */}
      <div className="hero__particles" aria-hidden="true">
        {Array.from({ length: 15 }).map((_, i) => (
          <div key={i} className="particle" style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 8}s`,
            animationDuration: `${6 + Math.random() * 6}s`,
            width: `${3 + Math.random() * 5}px`,
            height: `${3 + Math.random() * 5}px`,
          }} />
        ))}
      </div>

      <div className="container hero__content">
        <div className="hero__badge fade-in-up">
          <span className="dot" />
          Trusted Since 2010 · 5000+ Happy Clients
        </div>

        <h1 className="hero__title fade-in-up" style={{ animationDelay: '0.1s' }}>
          Your Home,<br />
          <span className="hero__title-gradient">Pest-Free</span> &<br />
          Fresh Always
        </h1>

        <p className="hero__desc fade-in-up" style={{ animationDelay: '0.2s' }}>
          SVS Pest & Fragrance Spray Services delivers premium pest control and
          refreshing fragrance solutions for homes and businesses — safe, certified, and effective.
        </p>

        <div className="hero__actions fade-in-up" style={{ animationDelay: '0.3s' }}>
          <button
            id="hero-book-cta"
            className="btn-primary hero__btn-main"
            onClick={() => handleScroll('#contact')}
          >
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Book a Free Inspection
          </button>
          <button
            id="hero-services-cta"
            className="btn-secondary"
            onClick={() => handleScroll('#services')}
          >
            Explore Services
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Stats */}
        <div className="hero__stats fade-in-up" style={{ animationDelay: '0.45s' }}>
          {[
            { value: '5000+', label: 'Clients Served' },
            { value: '15+', label: 'Years Experience' },
            { value: '100%', label: 'Eco-Safe Products' },
            { value: '24/7', label: 'Support' },
          ].map(stat => (
            <div key={stat.label} className="hero__stat">
              <span className="hero__stat-val">{stat.value}</span>
              <span className="hero__stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button className="hero__scroll-ind" onClick={() => handleScroll('#services')} aria-label="Scroll to services">
        <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </section>
  );
}
