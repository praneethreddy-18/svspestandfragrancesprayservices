import { useState } from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, HeartHandshake, Leaf, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import './EcoNatureBanner.css';

interface EcoPillar {
  id: string;
  icon: typeof ShieldCheck;
  title: string;
  badge: string;
  desc: string;
  highlights: string[];
}

const ECO_PILLARS: EcoPillar[] = [
  {
    id: 'govt',
    icon: ShieldCheck,
    title: 'Government-Approved Formulations',
    badge: '100% Certified Safe',
    desc: 'Exclusively certified active formulations compliant with national public health and municipal sanitation standards.',
    highlights: ['Zero toxic runoff', 'Audit-ready documentation', 'Safe for commercial kitchens']
  },
  {
    id: 'pets',
    icon: HeartHandshake,
    title: 'Family & Pet-Friendly Protection',
    badge: 'Zero Relocation Needed',
    desc: 'Odorless, non-staining gel and cold-misting techniques keep your household comfortable with zero downtime.',
    highlights: ['Harmless to dogs & cats', 'Safe for toddlers & elderly', 'No packing of kitchen utensils']
  },
  {
    id: 'nature',
    icon: Leaf,
    title: 'Eco-Balanced Botanical Respect',
    badge: 'Garden & Plant Safe',
    desc: 'Precision targeted barrier applications designed to eradicate invasive pests while protecting your indoor flora and gardens.',
    highlights: ['Protects pollinator insects', 'Non-staining indoor foliage', 'Targeted crack & crevice dosing']
  }
];

export default function EcoNatureBanner() {
  const [activeCard, setActiveCard] = useState<string>('govt');

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="eco-nature" className="eco-banner-section" aria-labelledby="eco-banner-heading">
      {/* Background Soft Ambient Light Mesh */}
      <div className="eco-banner-mesh" aria-hidden="true" />

      <div className="container eco-banner-container">
        {/* Top Header & Modern Eyebrow Pill */}
        <div className="eco-banner-header reveal-on-scroll">
          <div className="eco-eyebrow-pill">
            <Leaf size={14} className="eco-leaf-icon" />
            <span>ECO-FRIENDLY &amp; GOVERNMENT APPROVED</span>
            <Sparkles size={13} className="eco-sparkle-icon" />
          </div>

          <h2 id="eco-banner-heading" className="eco-banner-title">
            Green, Pure &amp; 100% <span className="eco-title-gradient">Pest-Free Living</span>
          </h2>

          <p className="eco-banner-subtitle">
            Engineered with modern, odorless, and government-approved science. Safe for your children,
            pets, and indoor plants — uncompromising on pest elimination.
          </p>
        </div>

        {/* 3 Frosted Glass Eco Trust Cards */}
        <div className="eco-cards-grid">
          {ECO_PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            const isHovered = activeCard === pillar.id;

            return (
              <motion.div
                key={pillar.id}
                className={`eco-card ${isHovered ? 'eco-card--active' : ''}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -8, transition: { type: 'spring', stiffness: 400, damping: 20 } }}
                onMouseEnter={() => setActiveCard(pillar.id)}
              >
                <div className="eco-card-top">
                  <div className="eco-icon-wrapper">
                    <Icon size={24} className="eco-icon" />
                  </div>
                  <span className="eco-card-badge">{pillar.badge}</span>
                </div>

                <h3 className="eco-card-title">{pillar.title}</h3>
                <p className="eco-card-desc">{pillar.desc}</p>

                <ul className="eco-card-checklist">
                  {pillar.highlights.map((item, i) => (
                    <li key={i} className="eco-checklist-item">
                      <CheckCircle2 size={15} className="eco-check-icon" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Action Button & Guarantee Strip */}
        <div className="eco-cta-strip reveal-on-scroll">
          <motion.button
            type="button"
            className="eco-cta-btn"
            onClick={scrollToContact}
            aria-label="Book a free eco-safe inspection"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          >
            <span>Book Your Free Eco-Friendly Inspection</span>
            <ArrowRight size={18} />
          </motion.button>

        </div>
      </div>

      {/* ── CUSTOM ARCHITECTURAL SVG CURVED WAVE DIVIDER ── */}
      <div className="eco-wave-divider" aria-hidden="true">
        <svg
          viewBox="0 0 1440 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="eco-wave-svg"
        >
          <defs>
            <linearGradient id="ecoRedGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ED1C24" stopOpacity="0.35" />
              <stop offset="50%" stopColor="#990000" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#ED1C24" stopOpacity="0.4" />
            </linearGradient>
            <linearGradient id="ecoLightContactGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#ffffff" />
            </linearGradient>
          </defs>

          {/* Layer 1: Ambient Brand Red Glow Wave */}
          <path
            className="eco-wave-path eco-wave-back"
            d="M0,50 C320,125 560,15 880,70 C1180,120 1340,35 1440,50 L1440,160 L0,160 Z"
            fill="url(#ecoRedGradient)"
          />

          {/* Layer 2: Subtle Red Translucent Flow Wave */}
          <path
            className="eco-wave-path eco-wave-mid"
            d="M0,75 C260,25 600,115 940,55 C1180,15 1350,75 1440,70 L1440,160 L0,160 Z"
            fill="rgba(237, 28, 36, 0.14)"
          />

          {/* Layer 3: Clean Light Canvas Wave (Seamless Flow into Contact) */}
          <path
            className="eco-wave-path eco-wave-front"
            d="M0,98 C340,35 700,135 1060,65 C1240,30 1370,80 1440,75 L1440,160 L0,160 Z"
            fill="url(#ecoLightContactGradient)"
          />
        </svg>
      </div>
    </section>
  );
}
