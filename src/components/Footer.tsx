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
            <img src="/logo.png" alt="SVS Pest Control Logo" className="footer__logo-img" />
            <span className="footer__logo-name">SVS PEST CONTROL</span>
          </div>
          <p className="footer__brand-desc">
            Karimnagar's premier new-generation pest defense and luxury ambient fragrance spray service. Certified, eco-safe, and customer-first.
          </p>
          <div className="footer__socials">
            {[
              { label: 'WhatsApp', icon: '💬', href: 'https://wa.me/919381678805' },
              { label: 'Call 24/7', icon: '📞', href: 'tel:+919381678805' },
              { label: 'Email', icon: '✉️', href: 'mailto:svspestcontrolservice@gmail.com' },
            ].map(s => (
              <a key={s.label} href={s.href} className="footer__social" aria-label={s.label}>
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
            <li><span>📞</span><a href="tel:+919381678805">+91 93816 78805 (24/7)</a></li>
            <li><span>✉️</span><a href="mailto:svspestcontrolservice@gmail.com">svspestcontrolservice@gmail.com</a></li>
            <li><span>📍</span><span>Karimnagar, Telangana</span></li>
            <li><span>🕐</span><span>24/7 Emergency Service Available</span></li>
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
