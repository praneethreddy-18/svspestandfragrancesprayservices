import { useState, useEffect, useMemo, type ReactNode } from 'react';
import {
  Bug,
  ShieldCheck,
  ShieldAlert,
  Wind,
  Crosshair,
  Rat,
  Radar,
  Home,
  Building2,
  Sparkles,
  Search,
  X,
  ChevronRight,
  ChevronLeft,
  Check,
  Phone,
  MessageCircle,
  Calendar,
  Leaf,
  Target,
  Crown,
  Flame,
  Droplets,
  Flower2,
  Clock
} from 'lucide-react';
import './Hero.css';

interface ServiceCardData {
  id: string;
  badge: string;
  badgeGold?: boolean;
  tag: string;
  title: string;
  desc: string;
  features: string[];
  image?: string;
  icon?: ReactNode;
  price?: string;
}

const PEST_CARDS: ServiceCardData[] = [
  {
    id: 'cockroach-control',
    image: '/svc_cockroach.jpg',
    badge: 'Gel Baiting',
    tag: 'Cockroaches',
    price: 'Free Inspection',
    title: 'Cockroach Control',
    desc: 'Eliminate cockroaches with targeted treatments that address infestations and help prevent their return. We focus on common hiding places to keep your space clean and hygienic.',
    features: [
      'No need to empty kitchen utensils or food racks',
      'Targets hidden cockroach nest cascades with IGR',
      'Safe for children, senior citizens, and pets'
    ],
    icon: <Bug size={24} color="#ED1C24" strokeWidth={2.2} />
  },
  {
    id: 'termite-treatment',
    image: '/svc_termite.jpg',
    badge: '05-Yr Warranty',
    tag: 'Termites',
    price: 'Free Inspection',
    title: 'Termite Treatment',
    desc: 'Protect your property from costly termite damage with professional inspection, targeted treatment, and preventive solutions to safeguard your home or business.',
    features: [
      'Subterranean termite perimeter chemical barrier',
      'Specialized foundation drilling & deep soil saturation',
      'Odourless, non-toxic Government approved termiticide'
    ],
    icon: <ShieldAlert size={24} color="#ED1C24" strokeWidth={2.2} />
  },
  {
    id: 'mosquito-control',
    image: '/svc_mosquito.jpg',
    badge: 'Vector Defense',
    tag: 'Mosquitoes',
    price: 'Free Inspection',
    title: 'Mosquito Control',
    desc: 'Enjoy greater comfort with effective mosquito management solutions that target breeding areas and help reduce mosquito activity around your property.',
    features: [
      'Eliminates dengue, malaria, and chikungunya risks',
      'Water body breeding source neutralization',
      'Thermal fogging & organic cold ULV misting'
    ],
    icon: <Wind size={24} color="#ED1C24" strokeWidth={2.2} />
  },
  {
    id: 'ant-control',
    image: '/svc_ant.jpg',
    badge: 'Eco-Safe Baiting',
    tag: 'Ants',
    price: 'Free Inspection',
    title: 'Ant Control',
    desc: 'Keep unwanted ants out of your living and working spaces with treatments that target ant trails, nesting areas, and common entry points.',
    features: [
      'Targets deep underground ant nests and queen colonies',
      'Non-repellent bait transfer throughout the colony',
      'Long-term barrier around kitchens and pantries'
    ],
    icon: <Crosshair size={24} color="#ED1C24" strokeWidth={2.2} />
  },
  {
    id: 'rodent-control',
    image: '/svc_rodent.jpg',
    badge: 'Humane Proofing',
    tag: 'Rodents',
    price: 'Free Inspection',
    title: 'Rodent Control',
    desc: 'Protect your property from rats and mice with effective control strategies, entry-point recommendations, and preventive measures to help keep rodents away.',
    features: [
      'Tamper-resistant bait stations & runway tracking',
      'Complete structural entry point exclusion',
      'Audit-compliant for food businesses & residences'
    ],
    icon: <Rat size={24} color="#ED1C24" strokeWidth={2.2} />
  },
  {
    id: 'spider-control',
    image: '/svc_spider.jpg',
    badge: 'Targeted Treatment',
    tag: 'Spiders',
    price: 'Free Inspection',
    title: 'Spider Control',
    desc: 'Reduce unwanted spiders and webs with targeted treatments and practical prevention tips to keep your indoor and outdoor spaces comfortable.',
    features: [
      'Web removal and exterior barrier defense',
      'Crack and crevice targeted micro-injection',
      'Deterrence for corners, ceiling fans, and basements'
    ],
    icon: <Radar size={24} color="#ED1C24" strokeWidth={2.2} />
  },
  {
    id: 'residential-pest-control',
    image: '/svc_residential.jpg',
    badge: 'Whole Home Defense',
    tag: 'Residential',
    price: 'Free Inspection',
    title: 'Residential Pest Control',
    desc: 'Keep your family and home protected with customized pest management plans tailored to your property, pest concerns, and prevention needs.',
    features: [
      'Customized apartment & villa seasonal protection plans',
      'Complete interior and exterior perimeter shield',
      'Scheduled re-treatment warranty & free re-visits'
    ],
    icon: <Home size={24} color="#ED1C24" strokeWidth={2.2} />
  },
  {
    id: 'commercial-pest-control',
    image: '/svc_commercial.jpg',
    badge: 'Audit Compliant',
    tag: 'Commercial',
    price: 'Free Inspection',
    title: 'Commercial Pest Control',
    desc: 'Maintain a clean, professional environment with pest management solutions for hospitals, hotels, offices, retail spaces, restaurants, warehouses, and other commercial properties.',
    features: [
      'HACCP, FSSAI & ISO regulatory audit documentation',
      'Discreet after-hours treatment schedules',
      'Dedicated account manager & emergency response'
    ],
    icon: <Building2 size={24} color="#ED1C24" strokeWidth={2.2} />
  }
];

const FRAGRANCE_CARDS: ServiceCardData[] = [
  {
    id: 'oud',
    image: '/fragrance_oud.jpg',
    badge: '5-Star VIP Tier',
    badgeGold: true,
    tag: 'Oud & Arabian',
    price: 'Premium Package',
    title: 'Oud / Arabian Luxury Collection',
    desc: 'Royal Oud, Amber Oud, Midnight Oud, Oud Sultan, Black Oud, Desert Oud, Oud Al Royal.',
    features: [
      'Ideal for: 5-Star Hotel Lobbies, Banquets, Presidential Lounges',
      'Cold-air micron diffusion maintaining intensity hours 1 through 8',
      'Turnkey machine setup, refill maintenance & calibration'
    ],
    icon: <Crown size={24} color="#ED1C24" strokeWidth={2.2} />
  },
  {
    id: 'woody',
    image: '/fragrance_woody.jpg',
    badge: 'Prestige Tier',
    badgeGold: true,
    tag: 'Woody & Rich',
    price: 'Executive Package',
    title: 'Woody & Rich Collection',
    desc: 'Sandalwood Gold, Cedar Wood Luxe, Smoky Vetiver, Stone Wood, Dark Timber.',
    features: [
      'Ideal for: Corporate Offices, Executive Boardrooms, VIP Clubs',
      'Calibrated volumetric output matching room volume seamlessly',
      'Professional delivery & technician support throughout'
    ],
    icon: <Flame size={24} color="#ED1C24" strokeWidth={2.2} />
  },
  {
    id: 'gourmand',
    image: '/fragrance_gourmand.jpg',
    badge: 'Gourmand Tier',
    badgeGold: true,
    tag: 'Sweet & Vanilla',
    price: 'Signature Package',
    title: 'Sweet / Gourmand Collection',
    desc: 'Vanilla Musk, Honey Amber, Caramel Oud, Sweet Saffron, Chocolate Coffee.',
    features: [
      'Ideal for: Fine Dining Restaurants, Cafes, Upscale Retail Stores',
      'Builds emotional dwell time and unforgettable customer recall',
      'Tailored fragrance scheduling & consultation'
    ],
    icon: <Droplets size={24} color="#ED1C24" strokeWidth={2.2} />
  },
  {
    id: 'fresh',
    image: '/fragrance_fresh.jpg',
    badge: 'Fresh Tier',
    badgeGold: true,
    tag: 'Citrus & Floral',
    price: 'Event Package',
    title: 'Fresh / Citrus & Floral Luxury',
    desc: 'Citrus Royale, Bergamot Breeze, Aqua Marine, Royal Rose, Velvet Mogra, Golden Tuberose.',
    features: [
      'Ideal for: Luxury Weddings, Spas, Salons, Clinics, Boutiques',
      '100% zero smoke, zero flame, zero residue or fabric staining',
      'Dedicated event support & scent sample trials'
    ],
    icon: <Flower2 size={24} color="#ED1C24" strokeWidth={2.2} />
  },
  {
    id: 'brand',
    image: '/fragrance_brand.jpg',
    badge: 'Signature Line',
    badgeGold: true,
    tag: 'Brand Signatures',
    price: 'Retail Branding',
    title: 'Ready-for-Selling Brand Scents',
    desc: 'Royal Amber, Midnight Sultan, Golden Flower, Imperial Musk, Sapphire Night, Platinum Rose, Crown Oud.',
    features: [
      'Signature scents curated exclusively for brand identity',
      'Team arrives 45 minutes early for complete equipment setup',
      'Custom scent branding for retail & hospitality chains'
    ],
    icon: <Sparkles size={24} color="#ED1C24" strokeWidth={2.2} />
  },
  {
    id: 'turnkey',
    image: '/fragrance_diffuser.jpg',
    badge: 'Full Protocol',
    badgeGold: true,
    tag: 'Turnkey Protocol',
    price: '8-Hr Full Setup',
    title: 'Service Package & Booking Terms',
    desc: 'Professional-grade aroma cold diffusion machines installed seamlessly for your scheduled 8-hour window.',
    features: [
      'Coverage: Up to 5,000 sq ft per unit (scalable for large venues)',
      'Setup time: 30–45 minutes prior to event opening',
      'Service regions: Karimnagar & surrounding districts'
    ],
    icon: <Clock size={24} color="#ED1C24" strokeWidth={2.2} />
  }
];

export default function Hero() {
  const [activeDivision, setActiveDivision] = useState<'pest' | 'fragrance'>('pest');
  const [selectedTag, setSelectedTag] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [heroSlide, setHeroSlide] = useState<number>(0);

  // Auto-advance hero carousel continuously every 4.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setHeroSlide(prev => (prev === 0 ? 1 : 0));
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleBooking = (title: string) => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      const selectEl = document.querySelector('#service') as HTMLSelectElement | null;
      if (selectEl) {
        if (title.includes('Termite')) selectEl.value = 'Termite Treatment';
        else if (title.includes('Cockroach')) selectEl.value = 'General Pest Control';
        else if (title.includes('Rodent')) selectEl.value = 'Rodent Control';
        else if (title.includes('Mosquito')) selectEl.value = 'Mosquito & Fly Control';
        else if (title.includes('Fragrance') || title.includes('Aroma')) selectEl.value = 'Fragrance Spray Service';
        else selectEl.value = 'General Pest Control';

        selectEl.dispatchEvent(new Event('change', { bubbles: true }));
      }
    }
  };

  // Quick filter categories matching reference cards
  const pestTags = ['All', 'Cockroaches', 'Termites', 'Mosquitoes', 'Ants', 'Rodents', 'Spiders', 'Residential', 'Commercial'];
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
    setHeroSlide(div === 'pest' ? 0 : 1);
    setSelectedTag('All');
    setSearchQuery('');
  };

  const nextHeroSlide = () => setHeroSlide(prev => (prev === 0 ? 1 : 0));
  const prevHeroSlide = () => setHeroSlide(prev => (prev === 0 ? 1 : 0));

  return (
    <section id="home" className="hero-snackz">
      {/* Background glow effects */}
      <div className="hero-ambient-glow" />

      {/* ── FULLSCREEN HERO DUAL CAROUSEL BILLBOARD ── */}
      <div className="hero-billboard-wrap hero-billboard-fullscreen">
        {/* ── SLIDE 1: PEST CONTROL HERO ── */}
        <div className={`hero-carousel-slide ${heroSlide === 0 ? 'slide--active' : ''}`}>
          <img
            src="/pest_free_home_hero_bg.jpg"
            alt="A Pest Free Home A Happier Tomorrow"
            className="billboard-bg-img"
          />
          <div className="billboard-gradient-overlay" />

          <div className="container hero-billboard-container">
            <div className="hero-billboard-content">
              <div className="billboard-kicker-clean">
                PROFESSIONAL PEST CONTROL · SVS DEFENSE
              </div>

              <h1 className="billboard-h1-pestpro">
                A <span className="h1-red-solid">PEST FREE</span><br />
                HOME A HAPPIER<br />
                <span className="h1-red-solid">TOMORROW</span>
              </h1>

              <p className="billboard-lead-clean">
                Reliable pest control solutions to keep your home and business safe, healthy and worry-free.
              </p>

              {/* 3 Circular Value Features */}
              <div className="billboard-features-row">
                <div className="billboard-feat-item">
                  <div className="feat-circle-icon">
                    <ShieldCheck size={26} color="#ffffff" strokeWidth={2.4} />
                  </div>
                  <div className="feat-copy">
                    <strong>Safe</strong>
                    <small>For Your Family &amp; Pets</small>
                  </div>
                </div>

                <div className="billboard-feat-item">
                  <div className="feat-circle-icon">
                    <Target size={26} color="#ffffff" strokeWidth={2.4} />
                  </div>
                  <div className="feat-copy">
                    <strong>Effective</strong>
                    <small>Long-Lasting Protection</small>
                  </div>
                </div>

                <div className="billboard-feat-item">
                  <div className="feat-circle-icon">
                    <Leaf size={26} color="#ffffff" strokeWidth={2.4} />
                  </div>
                  <div className="feat-copy">
                    <strong>Eco-Friendly</strong>
                    <small>Solutions</small>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="billboard-action-row">
                <button className="billboard-btn-inspect" onClick={() => handleScroll('#contact')}>
                  BOOK A FREE INSPECTION
                  <ChevronRight size={18} strokeWidth={2.8} />
                </button>
                <button
                  className="billboard-btn-secondary"
                  onClick={() => {
                    handleDivisionChange('pest');
                    const el = document.querySelector('.hero-snackz-container');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  VIEW PEST SERVICES
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ── SLIDE 2: LUXURY AMBIENT FRAGRANCE SPRAY HERO ── */}
        <div className={`hero-carousel-slide ${heroSlide === 1 ? 'slide--active' : ''}`}>
          <img
            src="/hero_fragrance_bottles.jpg"
            alt="Luxury Ambient Fragrance Perfume Scenting"
            className="billboard-bg-img"
          />
          <div className="billboard-gradient-overlay billboard-gradient-overlay--gold" />

          <div className="container hero-billboard-container">
            <div className="hero-billboard-content">
              <div className="billboard-kicker-clean kicker-gold">
                LUXURY AMBIENT SCENTING · SVS SIGNATURE
              </div>

              <h1 className="billboard-h1-pestpro">
                A <span className="h1-gold-solid">LUXURY SCENTED</span><br />
                AMBIENCE A LASTING<br />
                <span className="h1-gold-solid">IMPRESSION</span>
              </h1>

              <p className="billboard-lead-clean">
                Transform weddings, boutiques, executive offices &amp; residences with 8-hour continuous cold-air diffusion and 50+ imported French &amp; Swiss fragrance oils.
              </p>

              {/* 3 Circular Value Features matching pest control */}
              <div className="billboard-features-row">
                <div className="billboard-feat-item">
                  <div className="feat-circle-icon feat-circle-icon--gold">
                    <Clock size={26} color="#ffffff" strokeWidth={2.4} />
                  </div>
                  <div className="feat-copy">
                    <strong>8-Hour Scent</strong>
                    <small>Continuous Diffusion</small>
                  </div>
                </div>

                <div className="billboard-feat-item">
                  <div className="feat-circle-icon feat-circle-icon--gold">
                    <Crown size={26} color="#ffffff" strokeWidth={2.4} />
                  </div>
                  <div className="feat-copy">
                    <strong>50+ Scents</strong>
                    <small>Swiss &amp; French Oils</small>
                  </div>
                </div>

                <div className="billboard-feat-item">
                  <div className="feat-circle-icon feat-circle-icon--gold">
                    <Droplets size={26} color="#ffffff" strokeWidth={2.4} />
                  </div>
                  <div className="feat-copy">
                    <strong>100% Safe</strong>
                    <small>Zero Heat or Residue</small>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="billboard-action-row">
                <button className="billboard-btn-inspect btn-gold-bg" onClick={() => handleScroll('#contact')}>
                  BOOK A SCENT TRIAL
                  <ChevronRight size={18} strokeWidth={2.8} />
                </button>
                <button
                  className="billboard-btn-secondary"
                  onClick={() => {
                    handleDivisionChange('fragrance');
                    const el = document.querySelector('.hero-snackz-container');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  VIEW FRAGRANCE MENU
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ── FLOATING CAROUSEL ARROWS ── */}
        <button
          type="button"
          className="hero-carousel-arrow hero-arrow-prev"
          onClick={prevHeroSlide}
          aria-label="Previous Hero Slide"
        >
          <ChevronLeft size={24} strokeWidth={2.4} />
        </button>
        <button
          type="button"
          className="hero-carousel-arrow hero-arrow-next"
          onClick={nextHeroSlide}
          aria-label="Next Hero Slide"
        >
          <ChevronRight size={24} strokeWidth={2.4} />
        </button>

        {/* ── SLEEK MINIMAL DOT INDICATORS (NO TABS) ── */}
        <div className="hero-carousel-dots">
          <button
            type="button"
            className={`hero-carousel-dot ${heroSlide === 0 ? 'hero-carousel-dot--active' : ''}`}
            onClick={() => setHeroSlide(0)}
            aria-label="Pest Control Slide"
          />
          <button
            type="button"
            className={`hero-carousel-dot ${heroSlide === 1 ? 'hero-carousel-dot--active' : ''}`}
            onClick={() => setHeroSlide(1)}
            aria-label="Luxury Fragrance Slide"
          />
        </div>
      </div>

      <div className="container hero-snackz-container">
        {/* ── SNACKZMEDIA DUAL DIVISION SWITCHER TABS ── */}
        <div className="hero-snackz-tabs">
          <button
            className={`snackz-tab ${activeDivision === 'pest' ? 'active active-pest' : ''}`}
            onClick={() => handleDivisionChange('pest')}
          >
            <div className="tab-icon">
              <ShieldCheck size={28} color="#ED1C24" strokeWidth={2.2} />
            </div>
            <div className="tab-info">
              <span className="tab-pill">DIVISION 01</span>
              <span className="tab-heading">Defense Pest Control</span>
              <span className="tab-sub">Government Approved · Pre & Post Termite 10-Yr Warranty · Karimnagar</span>
            </div>
          </button>

          <button
            className={`snackz-tab ${activeDivision === 'fragrance' ? 'active active-fragrance' : ''}`}
            onClick={() => handleDivisionChange('fragrance')}
          >
            <div className="tab-icon">
              <Sparkles size={28} color="#ED1C24" strokeWidth={2.2} />
            </div>
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
                  <span>GOVERNMENT APPROVED DEFENSE</span>
                </div>
              </div>

              <div className="showcase-banner-details">
                <div className="banner-kicker">KARIMNAGAR DIVISION</div>
                <h2 className="banner-h2">Defense-Grade Pest Elimination & Termite Protection</h2>
                <div className="banner-quote-badge banner-quote-badge--red">
                  💬 <em>“Pests don’t negotiate with your health and property — neither do we.”</em>
                </div>
                <p className="banner-desc">
                  Protecting homes, commercial complexes, hotels, and healthcare facilities across Karimnagar with Government Approved odorless, eco-safe chemistry. Formulated specifically for local soil, residential architecture, and seasonal pest spikes.
                </p>

                {/* 3 Metric Cards */}
                <div className="showcase-metrics-grid">
                  <div className="metric-card">
                    <span className="metric-number">100%</span>
                    <span className="metric-title">Safe Chemistry</span>
                  </div>
                  <div className="metric-card">
                    <span className="metric-number">Certified</span>
                    <span className="metric-title">Govt Specialists</span>
                  </div>
                  <div className="metric-card">
                    <span className="metric-number">05-Year</span>
                    <span className="metric-title">Termite Warranty</span>
                  </div>
                </div>

                {/* Call to Actions */}
                <div className="showcase-cta-row">
                  <button className="btn-red-cta" onClick={() => handleScroll('#contact')}>
                    Book Free Property Inspection
                    <Calendar size={18} strokeWidth={2.5} />
                  </button>
                  <a href="tel:+919381678805" className="btn-call-cta">
                    <Phone size={17} strokeWidth={2.4} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '6px' }} />
                    Direct Call: 93816 78805
                  </a>
                  <a
                    href={`https://wa.me/919381678805?text=${encodeURIComponent('Hello SVS Pest Control, I would like to schedule a Free On-Site Inspection for my property.')}`}
                    className="btn-wa-cta"
                  >
                    <MessageCircle size={17} strokeWidth={2.4} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '6px' }} />
                    Instant WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* In-Page Rate Cards Grid with Direct Filter Toolbar */}
            <div id="services" className="inpage-content-block">
              <div className="block-header">
                <div className="pestpro-kicker-row">
                  <span className="kicker-line" />
                  <span className="kicker-text">OUR SERVICES</span>
                  <span className="kicker-line" />
                </div>
                <h3 className="block-title">Core Elimination Treatments & Service Specifications</h3>
                <p className="block-sub">
                  At SVS Pest Control, we provide reliable, effective, and family-conscious pest control solutions for homes and businesses. Our experienced team identifies pest problems, targets infestations, and helps prevent them from returning.
                </p>
              </div>

              {/* Directly Filterable Search Bar & Chips */}
              <div className="hero-filter-toolbar">
                <div className="hero-search-box">
                  <Search size={18} strokeWidth={2.2} color="#64748b" />
                  <input
                    type="text"
                    placeholder="Search cockroach, termite, mosquito, ant, rodent, spider, residential, commercial..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="hero-search-input"
                  />
                  {searchQuery && (
                    <button className="hero-search-clear" onClick={() => setSearchQuery('')} aria-label="Clear search">
                      <X size={16} strokeWidth={2.5} />
                    </button>
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
                  {displayedPestCards.map((card, idx) => (
                    <div
                      key={card.id}
                      className={`rate-card ${idx === 0 ? 'rate-card-active' : ''}`}
                    >
                      {card.image && (
                        <div className="rate-card-media">
                          <img src={card.image} alt={card.title} className="rate-card-img" loading="lazy" />
                          {card.icon && (
                            <div className="rate-icon-badge">
                              {card.icon}
                            </div>
                          )}
                        </div>
                      )}
                      <div className="rate-card-content">
                        <div className="rate-card-header">
                          <span className="rate-badge">{card.badge}</span>
                          <span className="rate-price">{card.price || 'Free Inspection'}</span>
                        </div>
                        <h4 className="rate-title">{card.title}</h4>
                        <p className="rate-desc">{card.desc}</p>
                        <ul className="rate-features">
                          {card.features.map(f => (
                            <li key={f}>
                              <Check size={14} className="rate-check" strokeWidth={3} />
                              <span>{f}</span>
                            </li>
                          ))}
                        </ul>
                        <button
                          className="rate-learn-more"
                          onClick={() => handleBooking(card.title)}
                        >
                          Learn More
                          <ChevronRight size={15} strokeWidth={2.8} />
                        </button>
                      </div>
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
                    <Calendar size={18} strokeWidth={2.5} />
                  </button>
                  <a href="tel:+919381678805" className="btn-call-cta">
                    <Phone size={17} strokeWidth={2.4} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '6px' }} />
                    Direct Call: 93816 78805
                  </a>
                  <a
                    href={`https://wa.me/919381678805?text=${encodeURIComponent('Hello SVS & ICPC Fragrance Services, I would like to inquire about 8-Hour Ambient Fragrance Scenting for my venue.')}`}
                    className="btn-wa-cta"
                  >
                    <MessageCircle size={17} strokeWidth={2.4} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '6px' }} />
                    Instant WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* In-Page Scent Collections & Rate Structure (From uploaded PDF catalog) */}
            <div className="inpage-content-block">
              <div className="block-header">
                <div className="pestpro-kicker-row">
                  <span className="kicker-line kicker-line--gold" />
                  <span className="kicker-text kicker-text--gold">LUXURY AMBIENT SCENTING</span>
                  <span className="kicker-line kicker-line--gold" />
                </div>
                <h3 className="block-title">Luxury Fragrance Collections & Service Packages</h3>
                <p className="block-sub">
                  Curated cold-air diffusion collections and turnkey scenting packages for hotel lobbies, luxury weddings, banquets, and corporate suites.
                </p>
              </div>

              {/* Directly Filterable Fragrance Scent Bar & Chips */}
              <div className="hero-filter-toolbar">
                <div className="hero-search-box">
                  <Search size={18} strokeWidth={2.2} color="#64748b" />
                  <input
                    type="text"
                    placeholder="Search oud, sandalwood, amber, vanilla, rose, citrus..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="hero-search-input"
                  />
                  {searchQuery && (
                    <button className="hero-search-clear" onClick={() => setSearchQuery('')} aria-label="Clear search">
                      <X size={16} strokeWidth={2.5} />
                    </button>
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
                  {displayedFragranceCards.map((card, idx) => (
                    <div
                      key={card.id}
                      className={`rate-card rate-card-gold-border ${idx === 0 ? 'rate-card-active' : ''}`}
                    >
                      {card.image && (
                        <div className="rate-card-media">
                          <img src={card.image} alt={card.title} className="rate-card-img" loading="lazy" />
                          {card.icon && (
                            <div className="rate-icon-badge rate-icon-badge--gold">
                              {card.icon}
                            </div>
                          )}
                        </div>
                      )}
                      <div className="rate-card-content">
                        <div className="rate-card-header">
                          <span className="rate-badge rate-badge-gold">{card.badge}</span>
                          <span className="rate-price rate-price-gold">{card.price || 'Premium Package'}</span>
                        </div>
                        <h4 className="rate-title">{card.title}</h4>
                        <p className="rate-desc">{card.desc}</p>
                        <ul className="rate-features">
                          {card.features.map(f => (
                            <li key={f}>
                              <Check size={14} className="rate-check rate-check-gold" strokeWidth={3} />
                              <span>{f}</span>
                            </li>
                          ))}
                        </ul>
                        <button
                          className="rate-learn-more learn-more-gold"
                          onClick={() => handleBooking(card.title)}
                        >
                          Book Scenting
                          <ChevronRight size={15} strokeWidth={2.8} />
                        </button>
                      </div>
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
