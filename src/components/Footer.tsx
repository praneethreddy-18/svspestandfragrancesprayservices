import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ChevronRight,
  MessageSquare,
  ShieldCheck,
  Leaf,
  Award,
  Bug,
  ShieldAlert,
  Target,
  Wind,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import './Footer.css';

export default function Footer() {
  const scrollTo = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
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
            <a
              href="https://wa.me/919381678805"
              className="footer__social"
              aria-label="WhatsApp Us"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageSquare size={18} />
            </a>
            <a
              href="tel:+919381678805"
              className="footer__social"
              aria-label="Call SVS Pest Control 24/7"
            >
              <Phone size={18} />
            </a>
            <a
              href="mailto:svspestcontrolservice@gmail.com"
              className="footer__social"
              aria-label="Email SVS Pest Control"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer__col">
          <h4 className="footer__col-title">Quick Links</h4>
          <ul className="footer__links">
            {[
              { label: 'Home', href: '#home' },
              { label: 'Services', href: '#services' },
              { label: 'Why Us', href: '#why-us' },
              { label: 'Testimonials', href: '#testimonials' },
              { label: 'FAQ', href: '#faq' },
              { label: 'Contact', href: '#contact' }
            ].map(({ label, href }) => (
              <li key={label}>
                <button className="footer__link" onClick={() => scrollTo(href)}>
                  <ChevronRight size={13} className="footer__link-chevron" />
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className="footer__col">
          <h4 className="footer__col-title">Our Services</h4>
          <ul className="footer__links">
            {[
              { name: 'General Pest Control', icon: <Bug size={14} className="footer__svc-icon" /> },
              { name: 'Termite Treatment', icon: <ShieldAlert size={14} className="footer__svc-icon" /> },
              { name: 'Rodent Control', icon: <Target size={14} className="footer__svc-icon" /> },
              { name: 'Mosquito Fogging', icon: <Wind size={14} className="footer__svc-icon" /> },
              { name: 'Fragrance Spray', icon: <Sparkles size={14} className="footer__svc-icon" /> },
              { name: 'Sanitization & Disinfection', icon: <CheckCircle2 size={14} className="footer__svc-icon" /> }
            ].map(({ name, icon }) => (
              <li key={name}>
                <button className="footer__link" onClick={() => scrollTo('#services')}>
                  {icon}
                  {name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="footer__col">
          <h4 className="footer__col-title">Contact Us</h4>
          <ul className="footer__contact-items">
            <li>
              <div className="footer__contact-icon-wrap">
                <Phone size={16} color="#ED1C24" />
              </div>
              <a href="tel:+919381678805">+91 93816 78805 (24/7 Helpline)</a>
            </li>
            <li>
              <div className="footer__contact-icon-wrap">
                <Mail size={16} color="#ED1C24" />
              </div>
              <a href="mailto:svspestcontrolservice@gmail.com">svspestcontrolservice@gmail.com</a>
            </li>
            <li>
              <div className="footer__contact-icon-wrap">
                <MapPin size={16} color="#ED1C24" />
              </div>
              <a
                href="https://www.google.com/maps/place/18%C2%B026'14.6%22N+79%C2%B009'07.7%22E/@18.437389,79.152139,17z"
                target="_blank"
                rel="noopener noreferrer"
              >
                H.no. 22-9-19, Krishnanagar, Bommakal Road, Karimnagar, Telangana – 505001
              </a>
            </li>
            <li>
              <div className="footer__contact-icon-wrap">
                <Clock size={16} color="#ED1C24" />
              </div>
              <span>24/7 Emergency Response Available</span>
            </li>
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
            <span className="footer__badge">
              <ShieldCheck size={14} color="#ED1C24" />
              Govt Certified
            </span>
            <span className="footer__badge">
              <Leaf size={14} color="#22c55e" />
              Eco-Safe
            </span>
            <span className="footer__badge">
              <Award size={14} color="#f59e0b" />
              100% Service Warranty
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
