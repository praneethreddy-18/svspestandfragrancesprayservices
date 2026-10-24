import { useState, useEffect } from 'react';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header id="navbar" className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        {/* Logo */}
        <a href="#home" className="navbar__logo" onClick={() => handleNavClick('#home')}>
          <img src="/logo.png" alt="SVS Pest Control Logo" className="navbar__logo-img" />
          <div className="navbar__logo-text">
            <span className="navbar__logo-svs">SVS PEST CONTROL</span>
            <span className="navbar__logo-sub">PEST CONTROL · FRAGRANCE SPRAY · SANITIZATION</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="navbar__links" aria-label="Main navigation">
          {NAV_LINKS.map(link => (
            <a
              key={link.label}
              href={link.href}
              className="navbar__link"
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions Cluster: WhatsApp & Direct Call */}
        <div className="navbar__actions">
          <a
            href="https://wa.me/919381678805?text=Hello%20SVS%20Pest%20Control%2C%20I%20would%20like%20to%20inquire%20about%20your%20services."
            className="navbar__wa-btn"
            aria-label="Chat on WhatsApp"
            title="Chat on WhatsApp (+91 93816 78805)"
          >
            <svg className="navbar__wa-svg" width="26" height="26" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="16" r="16" fill="#25D366"/>
              <path d="M23.5 8.5C21.5 6.5 18.8 5.4 16 5.4C10.2 5.4 5.5 10.1 5.5 15.9C5.5 17.8 6 19.6 6.9 21.2L5.4 26.6L11 25.1C12.5 25.9 14.2 26.4 16 26.4C21.8 26.4 26.5 21.7 26.5 15.9C26.5 13.1 25.4 10.5 23.5 8.5ZM16 24.6C14.4 24.6 12.8 24.2 11.5 23.4L11.1 23.2L7.7 24.1L8.6 20.8L8.4 20.4C7.5 19 7 17.5 7 15.9C7 10.9 11 6.9 16 6.9C18.4 6.9 20.7 7.8 22.4 9.5C24.1 11.2 25 13.5 25 15.9C25 20.9 21 24.6 16 24.6ZM20.9 18.2C20.6 18.1 19.3 17.5 19.1 17.4C18.9 17.3 18.7 17.3 18.5 17.6C18.3 17.9 17.8 18.5 17.6 18.7C17.5 18.8 17.3 18.8 17 18.7C16.7 18.5 15.8 18.2 14.8 17.3C14 16.6 13.4 15.7 13.3 15.4C13.1 15.1 13.3 15 13.4 14.8C13.5 14.7 13.7 14.5 13.8 14.3C13.9 14.1 14 14 14.1 13.8C14.2 13.6 14.1 13.4 14.1 13.3C14 13.2 13.4 11.7 13.1 11.2C12.9 10.6 12.6 10.7 12.5 10.7C12.3 10.7 12.1 10.7 11.9 10.7C11.7 10.7 11.4 10.8 11.2 11C10.9 11.3 10.2 12 10.2 13.3C10.2 14.6 11.2 15.9 11.3 16.1C11.5 16.3 13.2 18.9 15.8 20C16.4 20.3 16.9 20.5 17.3 20.6C18 20.8 18.6 20.8 19 20.7C19.5 20.6 20.6 20 20.8 19.3C21 18.6 21 18.1 20.9 18.2Z" fill="white"/>
            </svg>
          </a>

          <a
            href="tel:+919381678805"
            id="navbar-cta"
            className="btn-primary navbar__cta"
            aria-label="Call SVS Pest Control"
          >
            <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
            </svg>
            93816 78805
          </a>
        </div>

        {/* Hamburger */}
        <button
          id="menu-toggle"
          className={`navbar__hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar__mobile-menu ${menuOpen ? 'open' : ''}`} aria-hidden={!menuOpen}>
        {NAV_LINKS.map(link => (
          <a
            key={link.label}
            href={link.href}
            className="navbar__mobile-link"
            onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
          >
            {link.label}
          </a>
        ))}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '16px' }}>
          <a
            href="https://wa.me/919381678805?text=Hello%20SVS%20Pest%20Control%2C%20I%20would%20like%20to%20inquire%20about%20your%20services."
            className="navbar__wa-mobile-btn"
          >
            <svg width="22" height="22" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="16" r="16" fill="#25D366"/>
              <path d="M23.5 8.5C21.5 6.5 18.8 5.4 16 5.4C10.2 5.4 5.5 10.1 5.5 15.9C5.5 17.8 6 19.6 6.9 21.2L5.4 26.6L11 25.1C12.5 25.9 14.2 26.4 16 26.4C21.8 26.4 26.5 21.7 26.5 15.9C26.5 13.1 25.4 10.5 23.5 8.5ZM16 24.6C14.4 24.6 12.8 24.2 11.5 23.4L11.1 23.2L7.7 24.1L8.6 20.8L8.4 20.4C7.5 19 7 17.5 7 15.9C7 10.9 11 6.9 16 6.9C18.4 6.9 20.7 7.8 22.4 9.5C24.1 11.2 25 13.5 25 15.9C25 20.9 21 24.6 16 24.6ZM20.9 18.2C20.6 18.1 19.3 17.5 19.1 17.4C18.9 17.3 18.7 17.3 18.5 17.6C18.3 17.9 17.8 18.5 17.6 18.7C17.5 18.8 17.3 18.8 17 18.7C16.7 18.5 15.8 18.2 14.8 17.3C14 16.6 13.4 15.7 13.3 15.4C13.1 15.1 13.3 15 13.4 14.8C13.5 14.7 13.7 14.5 13.8 14.3C13.9 14.1 14 14 14.1 13.8C14.2 13.6 14.1 13.4 14.1 13.3C14 13.2 13.4 11.7 13.1 11.2C12.9 10.6 12.6 10.7 12.5 10.7C12.3 10.7 12.1 10.7 11.9 10.7C11.7 10.7 11.4 10.8 11.2 11C10.9 11.3 10.2 12 10.2 13.3C10.2 14.6 11.2 15.9 11.3 16.1C11.5 16.3 13.2 18.9 15.8 20C16.4 20.3 16.9 20.5 17.3 20.6C18 20.8 18.6 20.8 19 20.7C19.5 20.6 20.6 20 20.8 19.3C21 18.6 21 18.1 20.9 18.2Z" fill="white"/>
            </svg>
            <span>Chat on WhatsApp</span>
          </a>
          <a href="tel:+919381678805" className="btn-primary" style={{ justifyContent: 'center' }}>
            📞 Call: 93816 78805
          </a>
        </div>
      </div>
    </header>
  );
}
