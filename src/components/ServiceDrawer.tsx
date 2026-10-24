import React, { useState } from 'react';
import './ServiceDrawer.css';
import type { BookCatalog } from './BookCatalogData';

interface ServiceDrawerProps {
  catalog: BookCatalog | null;
  onClose: () => void;
}

export default function ServiceDrawer({ catalog, onClose }: ServiceDrawerProps) {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [selectedPropertySize, setSelectedPropertySize] = useState<'1bhk' | '2bhk' | '3bhk' | 'villa' | 'corporate'>('2bhk');
  const [selectedScentTier, setSelectedScentTier] = useState<string>('Oud / Arabian Luxury');

  if (!catalog) return null;

  const activePage = catalog.pages[activeTab];

  // Service estimation presets
  const pestCalculations: Record<string, { label: string; est: string; warranty: string }> = {
    '1bhk': { label: '1 BHK Apartment (< 800 sq ft)', est: 'Free On-Site Inspection', warranty: '1 Year Maintenance AMC' },
    '2bhk': { label: '2 BHK Apartment (800 - 1300 sq ft)', est: 'Free On-Site Inspection', warranty: '1 Year Maintenance AMC' },
    '3bhk': { label: '3 BHK / Duplex (1300 - 2200 sq ft)', est: 'Free On-Site Inspection', warranty: 'Up to 5-Year Termite Option' },
    'villa': { label: 'Luxury Villa / Gated Estate (2200+ sq ft)', est: 'Complimentary Property Assessment', warranty: 'Up to 10-Year Warranty' },
    'corporate': { label: 'Commercial Tech Park / Clinic / Hotel', est: 'Custom Audit Quote', warranty: 'FSSAI & HACCP Compliant' },
  };

  const scentCalculations: Record<string, { label: string; est: string; duration: string }> = {
    'Oud / Arabian Luxury': { label: 'Royal Oud, Amber Oud, Oud Sultan', est: 'Premium VIP Package', duration: '8 Continuous Hours' },
    'Woody & Rich': { label: 'Sandalwood Gold, Cedar Wood Luxe', est: 'Executive Package', duration: '8 Continuous Hours' },
    'Sweet / Gourmand': { label: 'Vanilla Musk, Caramel Oud, Honey Amber', est: 'Hospitality Package', duration: '8 Continuous Hours' },
    'Fresh / Citrus & Floral': { label: 'Citrus Royale, Bergamot Breeze, Royal Rose', est: 'Boutique Package', duration: '8 Continuous Hours' },
    'Brand Signature Scents': { label: 'Imperial Musk, Sapphire Night, Crown Oud', est: 'Bespoke Curation', duration: '8 Continuous Hours' },
  };

  const currentPestEst = pestCalculations[selectedPropertySize];
  const currentScentEst = scentCalculations[selectedScentTier];

  const handleBookNow = () => {
    onClose();
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whatsAppQuoteText = catalog.id === 'pest'
    ? `Hello SVS Pest Control, I am requesting a service quote for *${currentPestEst.label}*. Please arrange a Free On-Site Inspection.`
    : `Hello SVS & ICPC Fragrance Services, I am requesting a quote for *Ambient Fragrance Scenting* for the *${selectedScentTier}* collection (${currentScentEst.est}). Please share custom options.`;

  const whatsAppUrl = `https://wa.me/919381678805?text=${encodeURIComponent(whatsAppQuoteText)}`;

  return (
    <div className="drawer-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div
        className="drawer-panel"
        onClick={(e) => e.stopPropagation()}
        style={{ '--drawer-theme': catalog.themeColor } as React.CSSProperties}
      >
        {/* Drawer Header Bar */}
        <div className="drawer-header">
          <div className="drawer-header-brand">
            <span className="drawer-badge">{catalog.badge}</span>
            <div className="drawer-title-group">
              <h2 className="drawer-heading">{catalog.cardTitle}</h2>
              <span className="drawer-sub">{catalog.categoryTitle}</span>
            </div>
          </div>
          <button className="drawer-close-btn" onClick={onClose} aria-label="Close Dossier">
            <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="drawer-tabs">
          {catalog.pages.map((p, idx) => (
            <button
              key={idx}
              className={`drawer-tab-btn ${activeTab === idx ? 'active' : ''}`}
              onClick={() => setActiveTab(idx)}
            >
              <span className="tab-number">0{idx + 1}</span>
              <span className="tab-title">{p.title}</span>
            </button>
          ))}
        </div>

        {/* Scrollable Content Body */}
        <div className="drawer-body">
          {/* Hero Banner inside Drawer */}
          <div className="drawer-hero-banner">
            <img src={catalog.cardImage} alt={catalog.cardTitle} className="drawer-banner-img" />
            <div className="drawer-banner-overlay" />
            <div className="drawer-banner-content">
              <span className="banner-tag">{catalog.tagline}</span>
              <h3 className="banner-title">{activePage.title}</h3>
              {activePage.subtitle && <p className="banner-subtitle">{activePage.subtitle}</p>}
            </div>
          </div>

          {/* Interactive Calculator Section */}
          <div className="drawer-calculator-card">
            <div className="calculator-header">
              <div className="calc-icon">⚡</div>
              <div>
                <h4 className="calc-title">
                  {catalog.id === 'pest' ? 'Instant Property Estimate Calculator' : 'Interactive Scent Tier & Rate Calculator'}
                </h4>
                <p className="calc-desc">Select your requirements for instant rates & transparent pricing</p>
              </div>
            </div>

            {catalog.id === 'pest' ? (
              <div className="calc-controls">
                <div className="calc-pill-selector">
                  {(Object.keys(pestCalculations) as Array<keyof typeof pestCalculations>).map((key) => (
                    <button
                      key={key}
                      className={`calc-pill ${selectedPropertySize === key ? 'active' : ''}`}
                      onClick={() => setSelectedPropertySize(key)}
                    >
                      {key.toUpperCase()}
                    </button>
                  ))}
                </div>

                <div className="calc-result-box">
                  <div className="result-main">
                    <span className="result-label">{currentPestEst.label}</span>
                    <span className="result-price">{currentPestEst.est}</span>
                  </div>
                  <div className="result-meta">
                    <span className="meta-tag">🛡️ {currentPestEst.warranty}</span>
                    <span className="meta-tag">✅ Free Inspection Included</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="calc-controls">
                <div className="calc-pill-selector">
                  {Object.keys(scentCalculations).map((tier) => (
                    <button
                      key={tier}
                      className={`calc-pill calc-pill--gold ${selectedScentTier === tier ? 'active' : ''}`}
                      onClick={() => setSelectedScentTier(tier)}
                    >
                      {tier}
                    </button>
                  ))}
                </div>

                <div className="calc-result-box calc-result-box--gold">
                  <div className="result-main">
                    <span className="result-label">{currentScentEst.label}</span>
                    <span className="result-price result-price--gold">{currentScentEst.est} <small>/ session</small></span>
                  </div>
                  <div className="result-meta">
                    <span className="meta-tag">⏳ {currentScentEst.duration}</span>
                    <span className="meta-tag">✨ 100% Pure Swiss/French Oils</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Standards / Highlight Box */}
          {activePage.highlightBox && (
            <div className="drawer-highlight-box">
              <div className="highlight-tag-row">
                <span className="highlight-badge">{activePage.highlightBox.badge || 'VERIFIED STANDARD'}</span>
                <strong>{activePage.highlightBox.title}</strong>
              </div>
              <p>{activePage.highlightBox.content}</p>
            </div>
          )}

          {/* Services & Treatment Specs Grid */}
          {activePage.bullets && (
            <div className="drawer-specs-grid">
              {activePage.bullets.map((b, i) => (
                <div key={i} className="spec-card">
                  <div className="spec-icon-box">
                    <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="spec-content">
                    <h5 className="spec-title">{b.title}</h5>
                    <p className="spec-desc">{b.desc}</p>
                    {b.price && <span className="spec-price-tag">{b.price}</span>}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Metrics Row */}
          {activePage.metrics && (
            <div className="drawer-metrics-row">
              {activePage.metrics.map((m, idx) => (
                <div key={idx} className="drawer-metric-item">
                  <span className="metric-val">{m.value}</span>
                  <span className="metric-lbl">{m.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Drawer Fixed Footer Bar */}
        <div className="drawer-footer">
          <div className="drawer-footer-actions">
            <button className="drawer-btn-primary" onClick={handleBookNow}>
              Book Free Inspection
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
            <a
              href={whatsAppUrl}
              className="drawer-btn-wa"
              title="Get instant WhatsApp quote"
            >
              💬 WhatsApp Quote
            </a>
            <a href="tel:+919381678805" className="drawer-btn-call">
              📞 +91 93816 78805
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
