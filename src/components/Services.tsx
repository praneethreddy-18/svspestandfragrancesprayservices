import './Services.css';

const SERVICES = [
  {
    id: 'pest-control',
    icon: (
      <svg width="36" height="36" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/>
      </svg>
    ),
    title: 'General Pest Control',
    desc: 'Comprehensive treatment for cockroaches, ants, spiders, bedbugs, and common household pests using eco-safe chemicals.',
    features: ['Cockroaches & Ants', 'Bedbugs & Fleas', 'Spiders & Mites', 'Eco-safe chemicals'],
    color: '#2ecc71',
  },
  {
    id: 'termite-control',
    icon: (
      <svg width="36" height="36" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
    ),
    title: 'Termite Treatment',
    desc: 'Advanced anti-termite solutions including soil treatment, wood treatment, and baiting systems to protect your property.',
    features: ['Soil Treatment', 'Wood Treatment', 'Baiting Systems', '5-Year Warranty'],
    color: '#f0c040',
  },
  {
    id: 'rodent-control',
    icon: (
      <svg width="36" height="36" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
      </svg>
    ),
    title: 'Rodent Control',
    desc: 'Effective rodent management through trapping, exclusion, and sanitation for rats and mice infestations.',
    features: ['Live Trapping', 'Exclusion Sealing', 'Sanitation Tips', 'Follow-up Visits'],
    color: '#e74c3c',
  },
  {
    id: 'mosquito-control',
    icon: (
      <svg width="36" height="36" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/>
      </svg>
    ),
    title: 'Mosquito & Fly Control',
    desc: 'Targeted fogging and larvicidal treatments to eliminate mosquito breeding zones and protect against vector-borne diseases.',
    features: ['ULV Fogging', 'Larvicidal Treatment', 'Breeding Zone Removal', 'Safe for Children'],
    color: '#3498db',
  },
  {
    id: 'fragrance-spray',
    icon: (
      <svg width="36" height="36" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
      </svg>
    ),
    title: 'Fragrance Spray Service',
    desc: 'Premium aromatic spray services for homes, offices, and events. Long-lasting freshness with curated fragrance collections.',
    features: ['100+ Fragrance Options', 'Long-Lasting Formula', 'Event & Home Packages', 'Custom Schedules'],
    color: '#9b59b6',
  },
  {
    id: 'disinfection',
    icon: (
      <svg width="36" height="36" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
      </svg>
    ),
    title: 'Sanitization & Disinfection',
    desc: 'Professional deep sanitization services for residential and commercial spaces using hospital-grade disinfectants.',
    features: ['Hospital-Grade Products', 'Post-COVID Certified', 'Office & Home', 'Same-Day Service'],
    color: '#1abc9c',
  },
];

export default function Services() {
  return (
    <section id="services" className="services-section">
      {/* Decorative bg glow */}
      <div className="services-section__glow" aria-hidden="true" />

      <div className="container">
        <div className="services-section__header">
          <div className="section-tag">
            <span className="dot" />
            Our Services
          </div>
          <h2 className="section-title">
            Everything You Need for a <span>Pest-Free, Fresh</span> Space
          </h2>
          <p className="section-subtitle">
            From targeted pest elimination to luxurious fragrance solutions — we cover every corner of your home and workplace.
          </p>
        </div>

        <div className="services-grid" role="list">
          {SERVICES.map((svc, i) => (
            <article
              key={svc.id}
              id={`service-card-${svc.id}`}
              className="glass-card service-card"
              role="listitem"
              style={{ animationDelay: `${i * 0.07}s` } as React.CSSProperties}
            >
              <div className="service-card__icon" style={{ '--svc-color': svc.color } as React.CSSProperties}>
                {svc.icon}
              </div>
              <h3 className="service-card__title">{svc.title}</h3>
              <p className="service-card__desc">{svc.desc}</p>
              <ul className="service-card__features">
                {svc.features.map(f => (
                  <li key={f} className="service-card__feature">
                    <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <div className="service-card__footer">
                <button
                  id={`book-${svc.id}`}
                  className="service-card__btn"
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Book Service
                  <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
                  </svg>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
