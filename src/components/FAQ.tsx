import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  HelpCircle,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  ShieldCheck,
  Target,
  Leaf,
  Headset
} from 'lucide-react';
import './FAQ.css';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const FAQ_LIST: FAQItem[] = [
  {
    id: 1,
    question: 'What types of pests do you treat?',
    answer: 'We treat a wide range of pests including cockroaches, ants, termites, mosquitoes, rodents, spiders, bed bugs, woodborers, and more. Our customized solutions are designed to keep your home or business safe and pest-free.'
  },
  {
    id: 2,
    question: 'Are your pest control treatments safe for my family and pets?',
    answer: 'Yes, absolutely. We prioritize family and pet safety by exclusively deploying odorless, non-staining, Government-approved and eco-friendly active treatments that are harmless to children, elderly family members, and pets.'
  },
  {
    id: 3,
    question: 'How often should I schedule pest control services?',
    answer: 'For standard residential homes, quarterly preventive maintenance (every 3–4 months) is ideal. High-traffic commercial properties like restaurants, food outlets, and hotels typically benefit from monthly inspection and maintenance schedules.'
  },
  {
    id: 4,
    question: 'Do you offer one-time treatments or ongoing plans?',
    answer: 'We provide both! You can book flexible single-session emergency treatments or cost-effective annual maintenance contracts (AMC) that include scheduled preventive visits and guaranteed retreatment coverage.'
  },
  {
    id: 5,
    question: 'How long does a typical treatment take?',
    answer: 'A standard residential treatment typically takes between 30 to 60 minutes depending on property size and infestation level. Our modern gel baiting and cold-misting techniques allow quick, seamless application with zero downtime.'
  },
  {
    id: 6,
    question: 'Will I need to leave my home during the treatment?',
    answer: 'In most cases, no! With our odorless gel baiting and target-crevice applications, you can stay comfortably indoors without packing away food or utensils. For specialized high-volume thermal fogging, a brief 1–2 hour settling period is recommended.'
  },
  {
    id: 7,
    question: 'Do you provide commercial pest control services?',
    answer: 'Yes, we service offices, retail stores, restaurants, hospitals, warehouses, banquets, and educational institutions with audit-ready documentation compliant with FSSAI, ISO, and municipal sanitation standards.'
  },
  {
    id: 8,
    question: 'What areas do you serve?',
    answer: 'We proudly serve the entire Karimnagar municipal corporation and surrounding hubs including Mukarampura, Collectorate Road, Jyothinagar, Mankammathota, Vidyanagar, Kothapalli, Padmanagar, and adjacent districts.'
  },
  {
    id: 9,
    question: 'How much do your pest control services cost?',
    answer: 'Our pricing is transparent and competitive with zero hidden charges. We offer free on-site inspections and upfront flat quotations tailored to your exact property size and pest type.'
  },
  {
    id: 10,
    question: 'What if the pests return after treatment?',
    answer: 'Your peace of mind is guaranteed. All our core elimination treatments include a written service warranty. If pests return during the warranty period, our team re-treats your property completely free of charge.'
  }
];

const SIDEBAR_BENEFITS = [
  {
    icon: <ShieldCheck size={22} color="#ED1C24" strokeWidth={2.4} />,
    title: 'Trusted Experts',
    desc: 'Certified and experienced team'
  },
  {
    icon: <Target size={22} color="#ED1C24" strokeWidth={2.4} />,
    title: 'Effective Solutions',
    desc: 'Long-lasting pest control'
  },
  {
    icon: <Leaf size={22} color="#ED1C24" strokeWidth={2.4} />,
    title: 'Eco-Friendly',
    desc: 'Safe for your family and pets'
  },
  {
    icon: <Headset size={22} color="#ED1C24" strokeWidth={2.4} />,
    title: 'Reliable Support',
    desc: "We're here whenever you need us"
  }
];

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="faq" className="faq-section-wrapper">
      {/* ── TOP HERO BANNER: "FREQUENTLY ASKED QUESTIONS" ── */}
      <div className="faq-hero-banner">
        <div className="container">
          <div className="faq-hero-inner">
            {/* Left Column: Consultation Image */}
            <div className="faq-hero-media">
              <div className="faq-img-frame">
                <img
                  src="/faq_consultation.jpg"
                  alt="SVS Pest Control Specialist Consulting with Homeowner"
                  className="faq-tech-img"
                  loading="lazy"
                />
                <div className="faq-shield-overlay" />
                <div className="faq-shield-tag">
                  <ShieldCheck size={20} color="#ED1C24" />
                  <span>EXPERT CONSULTATION & SUPPORT</span>
                </div>
              </div>
            </div>

            {/* Right Column: FAQ Matter (Breadcrumb, Title & Description) */}
            <div className="faq-hero-text">
              <div className="faq-breadcrumb">
                <a href="#home" onClick={(e) => { e.preventDefault(); handleScroll('#home'); }}>HOME</a>
                <span className="faq-crumb-sep">&gt;</span>
                <span className="faq-crumb-active">FAQ</span>
              </div>

              <h2 className="faq-hero-title">
                FREQUENTLY ASKED<br />
                <span className="faq-title-red">QUESTIONS</span>
              </h2>

              <p className="faq-hero-desc">
                Find answers to common questions about our pest control services, treatments, safety, pricing and more. If you don't see your question here, feel free to contact our team.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── 2-COLUMN ACCORDION + SIDEBAR SECTION ── */}
      <div className="faq-main-body">
        <div className="container">
          <div className="faq-layout-grid">
            {/* Left Column: 10 Numbered Accordion Items */}
            <div className="faq-accordion-col">
              {FAQ_LIST.map((item) => {
                const isOpen = openId === item.id;
                return (
                  <motion.div
                    key={item.id}
                    className={`faq-numbered-card ${isOpen ? 'faq-card--open' : ''}`}
                    whileHover={{ y: -3, transition: { type: 'spring', stiffness: 400, damping: 25 } }}
                  >
                    <button
                      type="button"
                      className={`faq-card-header-btn ${isOpen ? 'btn--open' : ''}`}
                      onClick={() => toggleFAQ(item.id)}
                      aria-expanded={isOpen}
                    >
                      <div className="faq-header-left">
                        <span className={`faq-number-badge ${isOpen ? 'number--open' : ''}`}>
                          {item.id}
                        </span>
                        <span className="faq-question-text">{item.question}</span>
                      </div>
                      <span className="faq-chevron-icon">
                        {isOpen ? (
                          <ChevronUp size={20} strokeWidth={2.8} />
                        ) : (
                          <ChevronDown size={20} strokeWidth={2.8} />
                        )}
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="faq-answer"
                          className="faq-answer-container"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                          style={{ overflow: 'hidden' }}
                        >
                          <p className="faq-answer-content">{item.answer}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>

            {/* Right Column: 2 Sidebar Cards */}
            <aside className="faq-sidebar-col">
              {/* Box 1: Still Have Questions? */}
              <div className="faq-help-box">
                <div className="faq-help-icon-circle">
                  <HelpCircle size={32} color="#ffffff" strokeWidth={2.2} />
                </div>
                <h3 className="faq-help-title">
                  STILL HAVE<br />
                  <span>QUESTIONS?</span>
                </h3>
                <p className="faq-help-desc">
                  Our team is here to help. Contact us anytime for expert advice and support.
                </p>
                <button
                  className="faq-contact-btn"
                  onClick={() => handleScroll('#contact')}
                >
                  CONTACT US
                  <ArrowRight size={18} strokeWidth={2.5} />
                </button>
              </div>

              {/* Box 2: Why Choose SVS Pest Control? Mini Card */}
              <div className="faq-why-box">
                <h4 className="faq-why-title">
                  WHY CHOOSE <span className="title-red">SVS PEST CONTROL?</span>
                </h4>

                <div className="faq-why-list">
                  {SIDEBAR_BENEFITS.map((b, idx) => (
                    <div key={idx} className="faq-why-item">
                      <div className="faq-why-icon-wrap">
                        {b.icon}
                      </div>
                      <div className="faq-why-text">
                        <h5 className="faq-why-item-title">{b.title}</h5>
                        <p className="faq-why-item-desc">{b.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
