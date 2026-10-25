import { useState, type ReactNode, type CSSProperties } from 'react';
import './Services.css';

interface ServiceItem {
  id: string;
  division: 'pest' | 'fragrance';
  divisionBadge: string;
  divisionColor: string;
  image: string;
  icon: ReactNode;
  title: string;
  desc: string;
  features: string[];
  pricing: string;
  warranty?: string;
  color: string;
}

const SERVICES: ServiceItem[] = [
  {
    id: 'termite-defense',
    division: 'pest',
    divisionBadge: 'Defense Grade',
    divisionColor: '#ED1C24',
    image: '/termite_svc.jpg',
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Pre & Post Termite Treatment',
    desc: 'Subterranean termite chemical barrier with drilling & pressure injection technology for foundations and woodwork.',
    features: ['Govt-Approved Termiticide', 'Pressure Drilling & Misting', 'Hitech City & Gachibowli Protocol', 'Audit-Ready Certificate'],
    pricing: 'Free On-Site Inspection',
    warranty: 'Up to 10-Year Warranty',
    color: '#ED1C24',
  },
  {
    id: 'cockroach-baiting',
    division: 'pest',
    divisionBadge: 'Safe Gel Tech',
    divisionColor: '#ED1C24',
    image: '/cockroach_svc.jpg',
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
      </svg>
    ),
    title: 'Cockroach Eradication & IGR',
    desc: 'German and American cockroach elimination using odourless dot-gel baiting and Insect Growth Regulators (IGR).',
    features: ['No Need to Empty Kitchen', '100% Odourless & Safe', 'Targets Nest Cascades', 'Follow-up Guarantee'],
    pricing: 'Custom Tailored Quote',
    warranty: '100% Eradication Guarantee',
    color: '#ED1C24',
  },
  {
    id: 'bedbug-thermal',
    division: 'pest',
    divisionBadge: 'Single Visit',
    divisionColor: '#ED1C24',
    image: '/bedbug_svc.jpg',
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
      </svg>
    ),
    title: 'Bedbug Elimination & Eradication',
    desc: 'High-temperature steam and targeted contact treatments that eliminate adult bedbugs, nymphs, and hidden eggs.',
    features: ['Crack & Crevice Infusion', 'Mattress & Headboard Safe', 'Rapid Egg Neutralization', 'Residential & Hotel Suites'],
    pricing: 'Written Guarantee Quote',
    warranty: 'Service Warranty Included',
    color: '#ED1C24',
  },
  {
    id: 'rodent-control',
    division: 'pest',
    divisionBadge: 'Scientific Proofing',
    divisionColor: '#ED1C24',
    image: '/rodent_svc.jpg',
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
    title: 'Scientific Rodent Control & Proofing',
    desc: 'Tamper-resistant bait stations, runway trapping, glue boards, and structural entry point exclusion.',
    features: ['Tamper-Resistant Stations', 'Structural Hole Exclusion', 'Prevents Wire Gnawing', 'Audit-Ready Docs'],
    pricing: 'Site Assessment Quote',
    warranty: 'Guaranteed Containment',
    color: '#ED1C24',
  },
  {
    id: 'mosquito-fogging',
    division: 'pest',
    divisionBadge: 'Vector Defense',
    divisionColor: '#ED1C24',
    image: '/mosquito_svc.jpg',
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 00-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    title: 'Mosquito ULV Fogging & Larviciding',
    desc: 'Integrated mosquito control combining organic larviciding and thermal fogging during seasonal spikes.',
    features: ['Dengue/Malaria Prevention', 'Organic Water Treatment', 'Thermal & Cold Fogging', 'Villas & Gated Societies'],
    pricing: 'Area-Based Inspection',
    warranty: 'Immediate Adulticide Impact',
    color: '#ED1C24',
  },
  {
    id: 'woodborer-disinfection',
    division: 'pest',
    divisionBadge: 'Hospital Grade',
    divisionColor: '#059669',
    image: '/disinfection_svc.jpg',
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    title: 'Wood Borer Injection & Disinfection',
    desc: 'Hospital-grade broad spectrum antimicrobial misting, syringe treatment for antique timber, and emergency wildlife removal.',
    features: ['Antimicrobial Fogging', 'Wood Borer Syringe Tech', '24/7 Snake/Lizard Rescue', 'NABH / HACCP Standards'],
    pricing: 'Complimentary Assessment',
    warranty: 'Hospital Grade Certified',
    color: '#10b981',
  },
  {
    id: 'cold-air-fragrance',
    division: 'fragrance',
    divisionBadge: '8-Hour Formula',
    divisionColor: '#ED1C24',
    image: '/fragrance_hd.jpg',
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    title: 'Cold-Air Aroma Diffuser System',
    desc: 'Transforms pure fragrance oils into sub-micron dry mist that remains airborne for 8 continuous hours without heat or smoke.',
    features: ['Up to 5,000 Sq. Ft. Per Unit', 'No Burning, Zero Residue', 'Acoustically Silent', 'Hotel Lobbies & Banquets'],
    pricing: 'Turnkey 8-Hour Session',
    warranty: 'Continuous 8-Hr Output',
    color: '#ED1C24',
  },
  {
    id: 'luxury-scent-collections',
    division: 'fragrance',
    divisionBadge: '50+ European Scents',
    divisionColor: '#ED1C24',
    image: '/fragrance_hd.jpg',
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    title: 'Luxury Fragrance Scenting',
    desc: 'Imported Swiss and French essential oils complying with IFRA Geneva. Royal Oud, Velvet Mogra, Amber & Cedarwood.',
    features: ['100% Pure Aroma Oils', 'No Alcohol Dilution', 'Custom Signature Blends', 'Luxury Events & Weddings'],
    pricing: 'Tailored Event Packages',
    warranty: 'IFRA Geneva Certified',
    color: '#ED1C24',
  },
];

export default function Services() {
  const [filter, setFilter] = useState<'all' | 'pest' | 'fragrance'>('all');

  const filteredServices = SERVICES.filter(
    s => filter === 'all' || s.division === filter
  );

  const handleBooking = (title: string) => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      // pre-fill service dropdown if input exists
      const selectEl = document.querySelector('#service') as HTMLSelectElement | null;
      if (selectEl) {
        if (title.includes('Termite')) selectEl.value = 'Termite Treatment';
        else if (title.includes('Rodent')) selectEl.value = 'Rodent Control';
        else if (title.includes('Mosquito')) selectEl.value = 'Mosquito & Fly Control';
        else if (title.includes('Disinfection') || title.includes('Sanitization')) selectEl.value = 'Sanitization & Disinfection';
        else if (title.includes('Fragrance') || title.includes('Aroma')) selectEl.value = 'Fragrance Spray Service';
        else selectEl.value = 'General Pest Control';

        // Trigger change event so React form state updates
        selectEl.dispatchEvent(new Event('change', { bubbles: true }));
      }
    }
  };

  return (
    <section id="services" className="services-section">
      <div className="services-bg-mesh" aria-hidden="true" />

      <div className="container">
        {/* Section Header with division tabs */}
        <div className="services-section__header">
          <div className="section-tag section-tag--glow">
            <span className="dot" />
            Dual Division Portfolio
          </div>
          <h2 className="section-title">
            Engineered For <span>Absolute Protection</span> & <span>Opulent Atmosphere</span>
          </h2>
          <p className="section-subtitle">
            Defense-standard pest elimination and world-class 8-hour cold-air sensory ambient scenting — delivering uncompromising hygiene and elegance.
          </p>

          {/* Interactive Division Filter Tabs */}
          <div className="services-filter-tabs">
            <button
              className={`filter-tab ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All Services ({SERVICES.length})
            </button>
            <button
              className={`filter-tab filter-tab--pest ${filter === 'pest' ? 'active' : ''}`}
              onClick={() => setFilter('pest')}
            >
              🛡️ Pest Control Division
            </button>
            <button
              className={`filter-tab filter-tab--fragrance ${filter === 'fragrance' ? 'active' : ''}`}
              onClick={() => setFilter('fragrance')}
            >
              ✨ Fragrance Spray Division
            </button>
          </div>
        </div>

        {/* ── Services Targets & Aroma Preview Bar ── */}
        <div className="services-targets-preview">
          <div className="preview-label">
            <span>Specialized In</span>
          </div>
          <div className="preview-chips-wrap">
            <div className="preview-chip preview-chip--pest" onClick={() => setFilter('pest')}>
              <span className="chip-icon">🪳</span>
              <span className="chip-name">Cockroaches</span>
            </div>
            <div className="preview-chip preview-chip--pest" onClick={() => setFilter('pest')}>
              <span className="chip-icon">🪵</span>
              <span className="chip-name">Termites</span>
            </div>
            <div className="preview-chip preview-chip--pest" onClick={() => setFilter('pest')}>
              <span className="chip-icon">🕷️</span>
              <span className="chip-name">Bedbugs</span>
            </div>
            <div className="preview-chip preview-chip--pest" onClick={() => setFilter('pest')}>
              <span className="chip-icon">🦟</span>
              <span className="chip-name">Mosquitoes</span>
            </div>
            <div className="preview-chip preview-chip--fragrance" onClick={() => setFilter('fragrance')}>
              <span className="chip-icon">👑</span>
              <span className="chip-name">Royal Oud</span>
            </div>
            <div className="preview-chip preview-chip--fragrance" onClick={() => setFilter('fragrance')}>
              <span className="chip-icon">✨</span>
              <span className="chip-name">Amber Musk</span>
            </div>
            <div className="preview-chip preview-chip--fragrance" onClick={() => setFilter('fragrance')}>
              <span className="chip-icon">🌿</span>
              <span className="chip-name">Sandalwood</span>
            </div>
          </div>
        </div>

        {/* Enhanced Glassmorphic Service Cards Grid */}
        <div className="services-grid" role="list">
          {filteredServices.map((svc) => (
            <article
              key={svc.id}
              id={`service-card-${svc.id}`}
              className={`service-card service-card--glass service-card--${svc.division}`}
              role="listitem"
            >
              {/* Card Header Media with Glass Overlay */}
              <div className="service-card__media">
                <img
                  src={svc.image}
                  alt={svc.title}
                  className="service-card__img"
                  loading="lazy"
                />
                <div className="service-card__media-glass" />
                <div className="service-card__media-badge" style={{ borderColor: svc.divisionColor }}>
                  {svc.divisionBadge}
                </div>
                <div
                  className="service-card__icon-float"
                  style={{ '--svc-color': svc.color } as CSSProperties}
                >
                  {svc.icon}
                </div>
              </div>

              <div className="service-card__body">
                <h3 className="service-card__title">{svc.title}</h3>
                <p className="service-card__desc">{svc.desc}</p>

                {/* Price & Guarantee Pill */}
                <div className="service-card__metrics">
                  <div className="metric-tag">
                    <span className="metric-label">Pricing</span>
                    <span className="metric-value">{svc.pricing}</span>
                  </div>
                  {svc.warranty && (
                    <div className="metric-tag metric-tag--warranty">
                      <span className="metric-label">Guarantee</span>
                      <span className="metric-value">{svc.warranty}</span>
                    </div>
                  )}
                </div>

                <ul className="service-card__features">
                  {svc.features.map(f => (
                    <li key={f} className="service-card__feature">
                      <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="service-card__footer">
                  <button
                    id={`book-${svc.id}`}
                    className="service-card__btn"
                    onClick={() => handleBooking(svc.title)}
                  >
                    Schedule Service
                    <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  <a
                    href={`https://wa.me/919381678805?text=${encodeURIComponent(`Hello SVS Pest Control & Fragrance Services, I would like to book or inquire about *${svc.title}*.`)}`}
                    className="service-card__wa-btn"
                    title="WhatsApp Inquiry"
                  >
                    💬
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
