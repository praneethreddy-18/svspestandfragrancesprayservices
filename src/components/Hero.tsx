import React, { useState, useMemo } from 'react';
import './Hero.css';

interface ServiceCardData {
  id: string;
  badge: string;
  badgeGold?: boolean;
  tag: string;
  title: string;
  desc: string;
  features: string[];
}

const PEST_CARDS: ServiceCardData[] = [
  {
    id: 'termite',
    badge: '10-Yr Warranty',
    tag: 'Termites',
    title: 'Anti-Termite Treatment (Pre & Post Construction)',
    desc: 'Drilling, chemical barrier injection & deep soil saturation protecting foundations, wooden cupboards, and door frames.',
    features: [
      'Subterranean termite perimeter chemical barrier',
      'Specialized Hitech City & Gachibowli soil protocol',
      'Odourless, non-toxic CIB approved termiticide'
    ]
  },
  {
    id: 'cockroach',
    badge: 'Gel Baiting',
    tag: 'Cockroaches',
    title: 'Cockroach Elimination & IGR Gel Treatment',
    desc: 'Targeted German & American cockroach eradication using dot-gel baiting & Insect Growth Regulators (IGR).',
    features: [
      'No need to empty kitchen utensils or food racks',
      'Targets hidden cockroach nest cascades',
      'Safe for children, senior citizens, and pets'
    ]
  },
  {
    id: 'bedbug',
    badge: 'Guaranteed',
    tag: 'Bedbugs',
    title: 'Bedbug Thermal & Chemical Eradication',
    desc: 'Deep seam infusion and thermal misting that exterminates adult bedbugs, nymphs, and hidden egg colonies.',
    features: [
      'High-penetration crack & headboard treatment',
      'Single-visit eradication with follow-up warranty',
      'Mattresses and upholstery completely sanitized'
    ]
  },
  {
    id: 'rodent',
    badge: 'Humane Proofing',
    tag: 'Rodents',
    title: 'Scientific Rodent Control & Building Exclusion',
    desc: 'Tamper-resistant bait stations, runway tracking, glue boards, and structural entry point exclusion.',
    features: [
      'Summer heat rodent migration protocol',
      'Audit-compliant for restaurants, clinics, and offices',
      'Prevents wire gnawing and pantry contamination'
    ]
  },
  {
    id: 'mosquito',
    badge: 'Vector Defense',
    tag: 'Mosquitoes',
    title: 'Mosquito ULV Fogging & Larvicidal Treatment',
    desc: 'Integrated mosquito management combining organic larviciding and thermal fogging during monsoon spikes.',
    features: [
      'Eliminates dengue, malaria, and chikungunya risks',
      'Water body breeding source neutralization',
      'Ideal for apartments, gated villas, and gardens'
    ]
  },
  {
    id: 'disinfection',
    badge: '24/7 Available',
    tag: 'Disinfection',
    title: 'Disinfection & Specialized Pest Removal',
    desc: 'Hospital-grade surface disinfection, wood borer syringe injection, and humane reptile/snake extraction.',
    features: [
      'Broad-spectrum antimicrobial misting',
      'Furniture borers & powder-post beetle treatment',
      '24/7 emergency snake removal in Karimnagar'
    ]
  }
];

const FRAGRANCE_CARDS: ServiceCardData[] = [
  {
    id: 'oud',
    badge: '5-Star VIP Tier',
    badgeGold: true,
    tag: 'Oud & Arabian',
    title: 'Oud / Arabian Luxury Collection',
    desc: 'Royal Oud, Amber Oud, Midnight Oud, Oud Sultan, Black Oud, Desert Oud, Oud Al Royal.',
    features: [
      'Ideal for: 5-Star Hotel Lobbies, Banquets, Presidential Lounges',
      'Cold-air micron diffusion maintaining intensity hours 1 through 8',
      'Turnkey machine setup, refill maintenance & calibration'
    ]
  },
  {
    id: 'woody',
    badge: 'Prestige Tier',
    badgeGold: true,
    tag: 'Woody & Rich',
    title: 'Woody & Rich Collection',
    desc: 'Sandalwood Gold, Cedar Wood Luxe, Smoky Vetiver, Stone Wood, Dark Timber.',
    features: [
      'Ideal for: Corporate Offices, Executive Boardrooms, VIP Clubs',
      'Calibrated volumetric output matching room volume seamlessly',
      'Professional delivery & technician support throughout'
    ]
  },
  {
    id: 'gourmand',
    badge: 'Gourmand Tier',
    badgeGold: true,
    tag: 'Sweet & Vanilla',
    title: 'Sweet / Gourmand Collection',
    desc: 'Vanilla Musk, Honey Amber, Caramel Oud, Sweet Saffron, Chocolate Coffee.',
    features: [
      'Ideal for: Fine Dining Restaurants, Cafes, Upscale Retail Stores',
      'Builds emotional dwell time and unforgettable customer recall',
      'Tailored fragrance scheduling & consultation'
    ]
  },
  {
    id: 'fresh',
    badge: 'Fresh Tier',
    badgeGold: true,
    tag: 'Citrus & Floral',
    title: 'Fresh / Citrus & Floral Luxury',
    desc: 'Citrus Royale, Bergamot Breeze, Aqua Marine, Royal Rose, Velvet Mogra, Golden Tuberose.',
    features: [
      'Ideal for: Luxury Weddings, Spas, Salons, Clinics, Boutiques',
      '100% zero smoke, zero flame, zero residue or fabric staining',
      'Dedicated event support & scent sample trials'
    ]
  },
  {
    id: 'brand',
    badge: 'Signature Line',
    badgeGold: true,
    tag: 'Brand Signatures',
    title: 'Ready-for-Selling Brand Scents',
    desc: 'Royal Amber, Midnight Sultan, Golden Flower, Imperial Musk, Sapphire Night, Platinum Rose, Crown Oud.',
    features: [
      'Signature scents curated exclusively for brand identity',
      'Team arrives 45 minutes early for complete equipment setup',
      'Custom scent branding for retail & hospitality chains'
    ]
  },
  {
    id: 'turnkey',
    badge: 'Full Protocol',
    badgeGold: true,
    tag: 'Turnkey Protocol',
    title: 'Service Package & Booking Terms',
    desc: 'Professional-grade aroma cold diffusion machines installed seamlessly for your scheduled 8-hour window.',
    features: [
      'Coverage: Up to 5,000 sq ft per unit (scalable for large venues)',
      'Setup time: 30–45 minutes prior to event opening',
      'Service regions: Karimnagar & surrounding districts'
    ]
  }
];

export default function Hero() {
  const [activeDivision, setActiveDivision] = useState<'pest' | 'fragrance'>('pest');
  const [selectedTag, setSelectedTag] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // Quick filter categories
  const pestTags = ['All', 'Termites', 'Cockroaches', 'Bedbugs', 'Rodents', 'Mosquitoes', 'Disinfection'];
  const fragranceTags = ['All', 'Oud & Arabian', 'Woody & Rich', 'Sweet & Vanilla', 'Citrus & Floral', 'Brand Signatures'];

  const currentTags = activeDivision === 'pest' ? pestTags : fragranceTags;

  // Filtered Cards based on active tab, chip tag, and search term
  const displayedPestCards = useMemo(() => {
    return PEST_CARDS.filter(card => {
      const matchTag = selectedTag === 'All' || card.tag === selectedTag;
      const matchSearch =
        card.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        card.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        card.features.some(f => f.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchTag && matchSearch;
    });
  }, [selectedTag, searchQuery]);

  const displayedFragranceCards = useMemo(() => {
    return FRAGRANCE_CARDS.filter(card => {
      const matchTag = selectedTag === 'All' || card.tag === selectedTag;
      const matchSearch =
        card.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        card.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        card.features.some(f => f.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchTag && matchSearch;
    });
  }, [selectedTag, searchQuery]);

  const handleDivisionChange = (div: 'pest' | 'fragrance') => {
    setActiveDivision(div);
    setSelectedTag('All');
    setSearchQuery('');
  };

  return (
    <section id="home" className="hero-snackz">
      {/* Background glow effects */}
      <div className="hero-ambient-glow" />

      <div className="container hero-snackz-container">
        {/* Top Floating Badge */}
        <div className="hero-badge-wrap">
          <div className="hero-live-badge">
            <span className="live-dot-pulse" />
            <span>24/7 Rapid Response · Karimnagar · CIB Approved & IFRA Geneva Standards</span>
          </div>
        </div>

        {/* Hero Title & Subtitle with Impactful Quotes */}
        <div className="hero-title-area">
          <div className="hero-quote-pill">
            <span className="quote-icon">“</span>
            <span>Where Absolute Hygiene Meets Unrivaled Luxury</span>
            <span className="quote-icon">”</span>
          </div>

          <h1 className="hero-h1">
            Defense-Grade <span className="text-red-glow">Pest Elimination</span> &{' '}
            <span className="text-gold-glow">Bespoke Ambient Scenting</span>
          </h1>

          <p className="hero-lead">
            <em>“Total eradication for peace of mind. Opulent fragrances for lasting impressions.”</em>  
            Certified CIB defense chemistry paired with European cold-air diffusion — safeguarding homes, commercial spaces, and luxury venues across Karimnagar.
          </p>
        </div>

        {/* ── SNACKZMEDIA DUAL DIVISION SWITCHER TABS ── */}
        <div className="hero-snackz-tabs">
          <button
            className={`snackz-tab ${activeDivision === 'pest' ? 'active active-pest' : ''}`}
            onClick={() => handleDivisionChange('pest')}
          >
            <div className="tab-icon">🛡️</div>
            <div className="tab-info">
              <span className="tab-pill">DIVISION 01</span>
              <span className="tab-heading">Defense Pest Control</span>
              <span className="tab-sub">CIB Approved · Pre & Post Termite 10-Yr Warranty · Karimnagar</span>
            </div>
          </button>

          <button
            className={`snackz-tab ${activeDivision === 'fragrance' ? 'active active-fragrance' : ''}`}
            onClick={() => handleDivisionChange('fragrance')}
          >
            <div className="tab-icon">✨</div>
            <div className="tab-info">
              <span className="tab-pill tab-pill-gold">DIVISION 02</span>
              <span className="tab-heading">Luxury Fragrance Scenting</span>
              <span className="tab-sub">8-Hour Cold Diffusion · 50+ Swiss/French Oils · IFRA Geneva</span>
            </div>
          </button>
        </div>

        {/* ── IN-PAGE DIRECT CONTENT SHOWCASE (ZERO MODALS) ── */}
        {activeDivision === 'pest' ? (
          <div key="pest-showcase" className="division-showcase animate-fade-in">
            {/* Top Showcase Banner with Image & Key Stats */}
            <div className="showcase-banner showcase-banner--pest">
              <div className="showcase-banner-img-wrap">
                <img
                  src="/pest_control_hd.jpg"
                  alt="Defense Certified Pest Control"
                  className="showcase-img"
                />
                <div className="showcase-img-overlay" />
                <div className="showcase-img-badge">
                  <span>CIB & IS DEFENSE CERTIFIED</span>
                </div>
              </div>

              <div className="showcase-banner-details">
                <div className="banner-kicker">KARIMNAGAR DIVISION</div>
                <h2 className="banner-h2">Defense-Grade Pest Elimination & Termite Protection</h2>
                <div className="banner-quote-badge banner-quote-badge--red">
                  💬 <em>“Pests don’t negotiate with your health and property — neither do we.”</em>
                </div>
                <p className="banner-desc">
                  Protecting homes, commercial complexes, hotels, and healthcare facilities across Karimnagar with Central Insecticides Board (CIB) approved odorless, eco-safe chemistry. Formulated specifically for local soil, residential architecture, and seasonal pest spikes.
                </p>

                {/* 3 Metric Cards */}
                <div className="showcase-metrics-grid">
                  <div className="metric-card">
                    <span className="metric-number">100%</span>
                    <span className="metric-title">Safe Chemistry</span>
                  </div>
                  <div className="metric-card">
                    <span className="metric-number">Certified</span>
                    <span className="metric-title">CIB Specialists</span>
                  </div>
                  <div className="metric-card">
                    <span className="metric-number">10-Year</span>
                    <span className="metric-title">Termite Warranty</span>
                  </div>
                </div>

                {/* Call to Actions */}
                <div className="showcase-cta-row">
                  <button className="btn-red-cta" onClick={() => handleScroll('#contact')}>
                    Book Free Property Inspection
                    <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                  <a href="tel:+919381678805" className="btn-call-cta">
                    📞 Direct Call: 93816 78805
                  </a>
                  <a
                    href={`https://wa.me/919381678805?text=${encodeURIComponent('Hello SVS Pest Control, I would like to schedule a Free On-Site Inspection for my property.')}`}
                    className="btn-wa-cta"
                  >
                    💬 Instant WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* In-Page Rate Cards Grid with Direct Filter Toolbar */}
            <div className="inpage-content-block">
              <div className="block-header">
                <h3 className="block-title">Core Elimination Treatments & Service Specifications</h3>
                <p className="block-sub">
                  Filter by category or type below to find specific treatment procedures:
                </p>
              </div>

              {/* Directly Filterable Search Bar & Chips */}
              <div className="hero-filter-toolbar">
                <div className="hero-search-box">
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <input
                    type="text"
                    placeholder="Search termite, cockroach, bedbug, rodent, mosquito..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="hero-search-input"
                  />
                  {searchQuery && (
                    <button className="hero-search-clear" onClick={() => setSearchQuery('')}>✕</button>
                  )}
                </div>

                <div className="hero-category-chips">
                  {currentTags.map(tag => (
                    <button
                      key={tag}
                      className={`hero-chip ${selectedTag === tag ? 'chip-active-pest' : ''}`}
                      onClick={() => setSelectedTag(tag)}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

              {displayedPestCards.length === 0 ? (
                <div className="hero-no-results">
                  <p>No treatments match "{searchQuery || selectedTag}". Try choosing "All" or a different category.</p>
                  <button className="btn-secondary" onClick={() => { setSelectedTag('All'); setSearchQuery(''); }}>Reset Filters</button>
                </div>
              ) : (
                <div className="rates-cards-grid">
                  {displayedPestCards.map(card => (
                    <div key={card.id} className="rate-card">
                      <div className="rate-card-header">
                        <span className="rate-badge">{card.badge}</span>
                        <span className="rate-price">Free Inspection</span>
                      </div>
                      <h4 className="rate-title">{card.title}</h4>
                      <p className="rate-desc">{card.desc}</p>
                      <ul className="rate-features">
                        {card.features.map(f => (
                          <li key={f}>✓ {f}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ) : (
          /* ── FRAGRANCE SPRAY DIVISION CONTENT (From your uploaded PDFs) ── */
          <div key="fragrance-showcase" className="division-showcase animate-fade-in">
            {/* Top Showcase Banner */}
            <div className="showcase-banner showcase-banner--fragrance">
              <div className="showcase-banner-img-wrap">
                <img
                  src="/fragrance_hd.jpg"
                  alt="Luxury Cold-Air Aroma Diffuser"
                  className="showcase-img"
                />
                <div className="showcase-img-overlay" />
                <div className="showcase-img-badge showcase-img-badge-gold">
                  <span>IFRA GENEVA & ISO 9001:2015 CERTIFIED</span>
                </div>
              </div>

              <div className="showcase-banner-details">
                <div className="banner-kicker banner-kicker-gold">PREMIUM AMBIENT SCENTING · KARIMNAGAR</div>
                <h2 className="banner-h2">Long-Lasting 8-Hour Cold-Air Fragrance Scenting Service</h2>
                <div className="banner-quote-badge banner-quote-badge--gold">
                  ✨ <em>“People may forget what you said, but they will never forget how your space smelled.”</em>
                </div>
                <p className="banner-desc">
                  Transform any venue into a luxurious sensory memory. Our professional-grade aroma diffuser systems deliver rich, consistent fragrance that lasts up to 8 continuous hours without heat, smoke, or dilution.
                </p>

                {/* 3 Metric Cards */}
                <div className="showcase-metrics-grid">
                  <div className="metric-card metric-card-gold">
                    <span className="metric-number">8 Hours</span>
                    <span className="metric-title">Continuous Output</span>
                  </div>
                  <div className="metric-card metric-card-gold">
                    <span className="metric-number">50+ Scents</span>
                    <span className="metric-title">Swiss & French Oils</span>
                  </div>
                  <div className="metric-card metric-card-gold">
                    <span className="metric-number">5,000 sq ft</span>
                    <span className="metric-title">Coverage per Unit</span>
                  </div>
                </div>

                {/* Call to Actions */}
                <div className="showcase-cta-row">
                  <button className="btn-gold-cta" onClick={() => handleScroll('#contact')}>
                    Book Fragrance Scenting Session
                    <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                  <a href="tel:+919381678805" className="btn-call-cta">
                    📞 Direct Call: 93816 78805
                  </a>
                  <a
                    href={`https://wa.me/919381678805?text=${encodeURIComponent('Hello SVS & ICPC Fragrance Services, I would like to inquire about 8-Hour Ambient Fragrance Scenting for my venue.')}`}
                    className="btn-wa-cta"
                  >
                    💬 Instant WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* In-Page Scent Collections & Rate Structure (From uploaded PDF catalog) */}
            <div className="inpage-content-block">
              <div className="block-header">
                <h3 className="block-title">Luxury Fragrance Collections & Service Packages</h3>
                <p className="block-sub">
                  Filter by scent family or search by essence note:
                </p>
              </div>

              {/* Directly Filterable Fragrance Scent Bar & Chips */}
              <div className="hero-filter-toolbar">
                <div className="hero-search-box">
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <input
                    type="text"
                    placeholder="Search oud, sandalwood, amber, vanilla, rose, citrus..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="hero-search-input"
                  />
                  {searchQuery && (
                    <button className="hero-search-clear" onClick={() => setSearchQuery('')}>✕</button>
                  )}
                </div>

                <div className="hero-category-chips">
                  {currentTags.map(tag => (
                    <button
                      key={tag}
                      className={`hero-chip ${selectedTag === tag ? 'chip-active-gold' : ''}`}
                      onClick={() => setSelectedTag(tag)}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

              {displayedFragranceCards.length === 0 ? (
                <div className="hero-no-results">
                  <p>No scent collections match "{searchQuery || selectedTag}". Try choosing "All" or a different fragrance category.</p>
                  <button className="btn-secondary" onClick={() => { setSelectedTag('All'); setSearchQuery(''); }}>Reset Filters</button>
                </div>
              ) : (
                <div className="rates-cards-grid">
                  {displayedFragranceCards.map(card => (
                    <div key={card.id} className="rate-card rate-card-gold-border">
                      <div className="rate-card-header">
                        <span className="rate-badge rate-badge-gold">{card.badge}</span>
                        <span className="rate-price rate-price-gold">Premium Package</span>
                      </div>
                      <h4 className="rate-title">{card.title}</h4>
                      <p className="rate-desc">{card.desc}</p>
                      <ul className="rate-features">
                        {card.features.map(f => (
                          <li key={f}>✓ {f}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
