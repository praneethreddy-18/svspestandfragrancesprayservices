import { motion } from 'motion/react';
import AnimatedCounter from './AnimatedCounter';
import {
  Users,
  ShieldCheck,
  Award,
  MapPin,
  CheckCircle2,
  PhoneCall,
  Search,
  Sparkles
} from 'lucide-react';
import './WhyUs.css';

interface FeatureItem {
  id: string;
  image: string;
  badge: string;
  title: string;
  desc: string;
}

const WHY_US_FEATURES: FeatureItem[] = [
  {
    id: 'experienced-professionals',
    image: '/realistic_technician_clean.jpg',
    badge: 'Certified Technicians',
    title: 'Experienced Professionals',
    desc: 'Our trained and certified technicians bring years of hands-on experience to every job.',
  },
  {
    id: 'effective-solutions',
    image: '/pest_control_hd.jpg',
    badge: 'Proven Formulation',
    title: 'Effective Solutions',
    desc: 'We use proven methods and high-quality products to eliminate pests and help prevent them from returning.',
  },
  {
    id: 'safe-family-pets',
    image: '/safe_family_pets.jpg',
    badge: '100% Non-Toxic',
    title: 'Safe for Your Family & Pets',
    desc: 'We prioritize safety by using treatments that are effective and family-conscious.',
  },
  {
    id: 'eco-friendly',
    image: '/disinfection_svc.jpg',
    badge: 'Govt Approved Care',
    title: 'Eco-Friendly Approach',
    desc: 'We choose environmentally responsible solutions whenever possible.',
  },
  {
    id: 'customized-plans',
    image: '/svc_residential.jpg',
    badge: 'Custom Architecture',
    title: 'Customized Plans',
    desc: 'Every property is different. We provide tailored solutions based on your specific pest concerns and needs.',
  },
  {
    id: 'reliable-support',
    image: '/faq_consultation.jpg',
    badge: '24/7 Helpline',
    title: 'Reliable Support',
    desc: 'From your first inspection to follow-up visits, our team is here to answer questions and provide ongoing support.',
  },
];

const TRUST_STATS = [
  {
    icon: <Users size={26} color="#ED1C24" strokeWidth={2.4} />,
    value: '100+',
    label: 'Happy Customers',
  },
  {
    icon: <ShieldCheck size={26} color="#ED1C24" strokeWidth={2.4} />,
    value: '100%',
    label: 'Service Warranty',
  },
  {
    icon: <Award size={26} color="#ED1C24" strokeWidth={2.4} />,
    value: '99%',
    label: 'Customer Satisfaction',
  },
  {
    icon: <MapPin size={26} color="#ED1C24" strokeWidth={2.4} />,
    value: '30+',
    label: 'Areas Served',
  },
];

const PROCESS_STEPS = [
  {
    step: '01',
    icon: <PhoneCall size={20} color="#ED1C24" strokeWidth={2.2} />,
    title: 'Book Online / Call',
    desc: 'Schedule via call, WhatsApp, or instant booking form.'
  },
  {
    step: '02',
    icon: <Search size={20} color="#ED1C24" strokeWidth={2.2} />,
    title: 'Free Inspection',
    desc: 'Our specialist inspects harborages and identifying entry points.'
  },
  {
    step: '03',
    icon: <Sparkles size={20} color="#ED1C24" strokeWidth={2.2} />,
    title: 'Tailored Treatment',
    desc: 'Targeted eco-friendly chemical application or cold-air diffusion.'
  },
  {
    step: '04',
    icon: <ShieldCheck size={20} color="#ED1C24" strokeWidth={2.2} />,
    title: 'Follow-Up & Guarantee',
    desc: 'We verify results and re-treat at zero cost if pests recur.'
  },
];

export default function WhyUs() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="why-us" className="whyus-wrapper">
      {/* ── TOP HERO BANNER: "WHY CHOOSE SVS PEST CONTROL?" (Clean White Theme) ── */}
      <div className="whyus-hero-banner">
        <div className="container">
          <div className="whyus-hero-inner">
            {/* Left Content */}
            <div className="whyus-hero-text">
              <div className="whyus-breadcrumb">
                <a href="#home" onClick={(e) => { e.preventDefault(); handleScroll('#home'); }}>Home</a>
                <span className="crumb-sep">&gt;</span>
                <span className="crumb-active">Why Us</span>
              </div>

              <h2 className="whyus-hero-title">
                WHY CHOOSE<br />
                <span className="whyus-title-accent">SVS PEST CONTROL?</span>
              </h2>

              <p className="whyus-hero-desc">
                We're more than just a pest control company — we're your trusted partner in creating safer,
                healthier and more comfortable spaces. Here's what makes SVS Pest Control the right choice for your home or business:
              </p>

              <div className="whyus-hero-badges">
                <div className="hero-mini-badge">
                  <CheckCircle2 size={16} color="#ED1C24" />
                  <span>Licensed & Certified</span>
                </div>
                <div className="hero-mini-badge">
                  <CheckCircle2 size={16} color="#ED1C24" />
                  <span>Eco-Safe Chemistry</span>
                </div>
                <div className="hero-mini-badge">
                  <CheckCircle2 size={16} color="#ED1C24" />
                  <span>Warranty Guaranteed</span>
                </div>
              </div>
            </div>

            {/* Right Media Frame */}
            <div className="whyus-hero-media">
              <div className="whyus-img-frame">
                <img
                  src="/pest_technician_hero_bg.jpg"
                  alt="SVS Pest Control Technician Spraying Protective Barrier"
                  className="whyus-tech-img"
                  loading="lazy"
                />
                <div className="whyus-shield-overlay" />
                <div className="whyus-shield-tag">
                  <ShieldCheck size={20} color="#ED1C24" />
                  <span>ADVANCED BARRIER PROTECTION</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── 6-FEATURE CARDS SECTION (CLEAN WHITE BG) ── */}
      <div className="whyus-features-section">
        <div className="container">
          <div className="whyus-features-grid">
            {WHY_US_FEATURES.map((item, idx) => (
              <motion.div
                key={item.id}
                className="whyus-feature-card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -8, transition: { type: 'spring', stiffness: 400, damping: 20 } }}
              >
                <div className="feature-img-wrap">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="feature-card-img"
                    loading="lazy"
                  />
                  <div className="feature-img-overlay" />
                  <span className="feature-img-badge">{item.badge}</span>
                </div>
                <div className="feature-content">
                  <h3 className="feature-title">{item.title}</h3>
                  <p className="feature-desc">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* ── 4-STEP SERVICE PROCESS ── */}
          <div className="whyus-process-strip">
            <div className="process-header">
              <span className="process-tag">HOW IT WORKS</span>
              <h3 className="process-title">Simple <span>4-Step</span> Service Process</h3>
            </div>

            <div className="process-steps-row">
              {PROCESS_STEPS.map((p, idx) => (
                <motion.div
                  key={p.step}
                  className="process-pill-step"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -6, transition: { type: 'spring', stiffness: 400, damping: 20 } }}
                >
                  <div className="process-step-top">
                    <span className="process-step-num">{p.step}</span>
                    <span className="process-step-icon">{p.icon}</span>
                  </div>
                  <h4 className="process-step-title">{p.title}</h4>
                  <p className="process-step-desc">{p.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── "TRUSTED BY HOMES & BUSINESSES" STATS BAR ── */}
          <div className="whyus-trust-bar">
            <div className="trust-bar-lead">
              <span className="trust-kicker">TRUSTED BY</span>
              <h3 className="trust-heading">HOMES & BUSINESSES</h3>
              <p className="trust-desc">
                Our commitment to quality, customer satisfaction and effective pest control has made us a trusted choice in the community.
              </p>
            </div>

            <div className="trust-bar-stats">
              {TRUST_STATS.map((stat, idx) => (
                <motion.div
                  key={idx}
                  className="trust-stat-col"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.45, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -4, transition: { type: 'spring', stiffness: 400, damping: 20 } }}
                >
                  <div className="stat-icon-wrap">
                    {stat.icon}
                  </div>
                  <AnimatedCounter value={stat.value} className="stat-value" duration={2} />
                  <div className="stat-label">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
