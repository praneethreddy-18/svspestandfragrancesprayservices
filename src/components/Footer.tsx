import './Footer.css';

export default function Footer() {
  const scrollTo = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__top-line" aria-hidden="true" />

      <div className="container footer__grid">
        {/* Brand */}
        <div className="footer__brand">
          <div className="footer__logo">
            <svg width="32" height="32" viewBox="0 0 28 28" fill="none">
              <path d="M14 2L24 8V20L14 26L4 20V8L14 2Z" fill="url(#fLogoGrad)"/>
              <path d="M14 6L10 10V16L14 20L18 16V10L14 6Z" fill="rgba(8,0,0,0.6)"/>
              <circle cx="14" cy="13" r="2.5" fill="#fff"/>
              <defs>
                <linearGradient id="fLogoGrad" x1="4" y1="2" x2="24" y2="26" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#ff3333"/>
                  <stop offset="1" stopColor="#b81515"/>
                </linearGradient>
              </defs>
            </svg>
            <span className="footer__logo-name">SVS Pest & Spray</span>
          </div>
          <p className="footer__brand-desc">
            Premium pest control and fragrance spray services for homes and businesses in Hyderabad. Certified, eco-safe, and trusted since 2010.
          </p>
          <div className="footer__socials">
            {[
              { label: 'WhatsApp', icon: '💬', href: 'https://wa.me/919999999999' },
              { label: 'Facebook', icon: '📘', href: '#' },
              { label: 'Instagram', icon: '📸', href: '#' },
            ].map(s => (
              <a key={s.label} href={s.href} className="footer__social" aria-label={s.label} target="_blank" rel="noopener noreferrer">
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer__col">
          <h4 className="footer__col-title">Quick Links</h4>
          <ul className="footer__links">
            {[['Home', '#home'], ['Services', '#services'], ['Why Us', '#why-us'], ['Testimonials', '#testimonials'], ['Contact', '#contact']].map(([label, href]) => (
              <li key={label}>
                <button className="footer__link" onClick={() => scrollTo(href)}>{label}</button>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className="footer__col">
          <h4 className="footer__col-title">Our Services</h4>
          <ul className="footer__links">
            {['General Pest Control', 'Termite Treatment', 'Rodent Control', 'Mosquito Control', 'Fragrance Spray', 'Sanitization'].map(s => (
              <li key={s}>
                <button className="footer__link" onClick={() => scrollTo('#services')}>{s}</button>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="footer__col">
          <h4 className="footer__col-title">Contact Us</h4>
          <ul className="footer__contact-items">
            <li><span>📞</span><a href="tel:+919999999999">+91 99999 99999</a></li>
            <li><span>✉️</span><a href="mailto:info@svspestservices.com">info@svspestservices.com</a></li>
            <li><span>📍</span><span>Hyderabad, Telangana, India</span></li>
            <li><span>🕐</span><span>Mon–Sat: 8 AM – 8 PM</span></li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p className="footer__copyright">
            © {year} SVS Pest & Fragrance Spray Services. All rights reserved.
          </p>
          <div className="footer__badges">
            <span className="footer__badge">🛡️ Govt Certified</span>
            <span className="footer__badge">🌿 Eco-Safe</span>
            <span className="footer__badge">⭐ 5000+ Clients</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
