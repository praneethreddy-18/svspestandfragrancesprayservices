import { useState } from 'react';
import './FAQ.css';

interface FAQItem {
  id: string;
  category: 'pest' | 'fragrance' | 'general';
  categoryLabel: string;
  question: string;
  answer: string;
  highlight?: string;
}

const FAQS: FAQItem[] = [
  {
    id: 'faq-safety',
    category: 'pest',
    categoryLabel: 'Pest Safety',
    question: 'Are your pest control chemicals safe for infants, pregnant women, and pets?',
    answer: 'Yes, 100%. We exclusively deploy odorless Central Insecticides Board (CIB) approved active agents at calibrated safety levels. You do not need to inhale pungent fumes, and pets or children do not need to be evacuated during gel baiting.',
    highlight: '100% CIB Approved & Eco-Safe',
  },
  {
    id: 'faq-kitchen',
    category: 'pest',
    categoryLabel: 'Pest Preparation',
    question: 'Do I need to empty all my kitchen utensils before cockroach treatment?',
    answer: 'No! Unlike traditional harsh chemical sprays, our advanced German fipronil gel baiting is precisely placed into hidden hinges, cracks, and motor crevices. You do not need to pack away kitchen groceries or wash utensils after the visit.',
    highlight: 'Zero Kitchen Emptying Required',
  },
  {
    id: 'faq-time',
    category: 'general',
    categoryLabel: 'Karimnagar Dispatch',
    question: 'How fast can an SVS technician reach my address in Karimnagar?',
    answer: 'For emergency pest problems (severe bedbugs, snake sightings, or active termite outbreaks), our Karimnagar response team reaches your location within 2 hours. We also accommodate convenient scheduled evening or weekend slots.',
    highlight: 'Within 2-Hour Rapid Response',
  },
  {
    id: 'faq-termite-warranty',
    category: 'pest',
    categoryLabel: 'Termite Warranty',
    question: 'How does the 10-Year Termite Warranty work?',
    answer: 'Our drill-and-inject sub-slab pressure barrier creates an impenetrable chemical shield around and beneath your foundation. You receive an official written warranty certificate with complimentary annual checkups and zero-cost retreatment if termites re-enter.',
    highlight: '10-Year Written Guarantee',
  },
  {
    id: 'faq-fragrance-hours',
    category: 'fragrance',
    categoryLabel: 'Fragrance Tech',
    question: 'How does the 8-Hour Cold-Air Fragrance Diffuser work for events or retail?',
    answer: 'Our professional cold-air nebulizers pulverize pure fragrance oil into sub-micron dry scent molecules that float suspended in ambient airflow for 8 continuous hours. There is zero flame, zero water dilution, and zero oily residue on floors or fine garments.',
    highlight: '8 Hours Continuous Diffusion',
  },
  {
    id: 'faq-fragrance-custom',
    category: 'fragrance',
    categoryLabel: 'Fragrance Selection',
    question: 'Can we sample fragrances before booking a wedding or commercial venue?',
    answer: 'Absolutely. We carry 50+ imported European and Middle Eastern aroma essences including Royal Oud, Amber Musk, Sandalwood Gold, and Citrus Royale. We bring testing strips directly to your venue during your free consultation.',
    highlight: '50+ Fragrance Samples Available',
  },
];

const LOCALITIES = [
  'Collectorate Road',
  'Mukarampura',
  'Tower Circle',
  'Kaman Road',
  'Mankammathota',
  'Jyothinagar',
  'Housing Board Colony',
  'Vidyanagar',
  'Bhagyanagar',
  'Vavilalapally',
  'Kothapalli',
  'Alugunur',
  'Padmanagar',
  'Thimmapur',
];

export default function FAQ() {
  const [openId, setOpenId] = useState<string>('faq-safety');
  const [activeCategory, setActiveCategory] = useState<'all' | 'pest' | 'fragrance'>('all');

  const filteredFaqs = FAQS.filter(
    (item) => activeCategory === 'all' || item.category === activeCategory || (activeCategory === 'pest' && item.category === 'general')
  );

  return (
    <section id="faq" className="faq-section">
      <div className="faq-glow" aria-hidden="true" />

      <div className="container">
        {/* Section Header */}
        <div className="faq-header">
          <div className="section-tag">
            <span className="dot" />
            Clear Answers · Zero Doubts
          </div>
          <h2 className="section-title">
            Frequently Asked <span>Questions</span>
          </h2>
          <p className="section-subtitle">
            Everything you need to know about our safety standards, rapid Karimnagar response times, and treatment guarantees.
          </p>

          {/* Filter Pills */}
          <div className="faq-filter-bar">
            <button
              className={`faq-filter-btn ${activeCategory === 'all' ? 'active' : ''}`}
              onClick={() => setActiveCategory('all')}
            >
              All Questions
            </button>
            <button
              className={`faq-filter-btn faq-filter-btn--pest ${activeCategory === 'pest' ? 'active' : ''}`}
              onClick={() => setActiveCategory('pest')}
            >
              🛡️ Pest Control & Safety
            </button>
            <button
              className={`faq-filter-btn faq-filter-btn--fragrance ${activeCategory === 'fragrance' ? 'active' : ''}`}
              onClick={() => setActiveCategory('fragrance')}
            >
              ✨ Ambient Fragrance Scenting
            </button>
          </div>
        </div>

        {/* FAQ Accordion Grid */}
        <div className="faq-accordion-wrap">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`faq-card ${isOpen ? 'open' : ''}`}
                onClick={() => setOpenId(isOpen ? '' : faq.id)}
              >
                <button
                  type="button"
                  className="faq-question-btn"
                  aria-expanded={isOpen}
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpenId(isOpen ? '' : faq.id);
                  }}
                >
                  <div className="faq-q-left">
                    <span className={`faq-category-badge faq-category-badge--${faq.category}`}>
                      {faq.categoryLabel}
                    </span>
                    <span className="faq-q-text">{faq.question}</span>
                  </div>
                  <span className={`faq-toggle-icon ${isOpen ? 'rotated' : ''}`}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>

                {isOpen && (
                  <div className="faq-answer-panel">
                    <p className="faq-answer-text">{faq.answer}</p>
                    {faq.highlight && (
                      <div className="faq-highlight-tag">
                        <span>✓</span> {faq.highlight}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Local Karimnagar Hubs Banner */}
        <div className="faq-localities-block">
          <div className="localities-header">
            <span className="localities-pin">📍</span>
            <div>
              <h3 className="localities-title">Serving All Localities Across Karimnagar</h3>
              <p className="localities-subtitle">Mobile response vans stationed across key zones for same-day inspection and treatment:</p>
            </div>
          </div>

          <div className="localities-tags-grid">
            {LOCALITIES.map((loc) => (
              <span key={loc} className="locality-tag">
                <span className="locality-dot" />
                {loc}
              </span>
            ))}
          </div>

          <div className="localities-cta-strip">
            <span>Live in or around Karimnagar and need instant assistance?</span>
            <div className="localities-actions">
              <a href="tel:+919381678805" className="loc-btn-call">
                📞 Call 93816 78805
              </a>
              <a
                href="https://wa.me/919381678805?text=Hello%20SVS%20Pest%20Control%20Karimnagar%2C%20I%20would%20like%20to%20schedule%20a%20free%20visit."
                className="loc-btn-wa"
              >
                💬 WhatsApp Dispatch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
