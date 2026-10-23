import './WhyUs.css';


const REASONS = [
  {
    id: 'certified',
    icon: '🏆',
    title: 'Certified & Licensed',
    desc: 'All our technicians hold valid pesticide operator licenses and follow government safety norms.',
  },
  {
    id: 'eco-safe',
    icon: '🌿',
    title: '100% Eco-Safe Products',
    desc: 'We use WHO-approved, child- and pet-friendly chemicals that are effective yet harmless.',
  },
  {
    id: 'experienced',
    icon: '⏱️',
    title: '15+ Years Experience',
    desc: 'Over a decade of solving pest problems across Hyderabad and surrounding areas.',
  },
  {
    id: 'quick-response',
    icon: '⚡',
    title: 'Quick Response',
    desc: 'Same-day bookings available. Our team responds within 2 hours of your request.',
  },
  {
    id: 'guarantee',
    icon: '🛡️',
    title: 'Service Guarantee',
    desc: 'Not satisfied? We re-treat at no cost. Your peace of mind is our priority.',
  },
  {
    id: 'affordable',
    icon: '💰',
    title: 'Transparent Pricing',
    desc: 'No hidden charges. Get an upfront quote before we begin any treatment.',
  },
];

const PROCESS = [
  { step: '01', title: 'Book Online / Call', desc: 'Schedule via call, WhatsApp, or our contact form.' },
  { step: '02', title: 'Free Inspection', desc: 'Our expert visits and identifies the exact problem.' },
  { step: '03', title: 'Tailored Treatment', desc: 'We apply the best solution for your specific issue.' },
  { step: '04', title: 'Follow-Up & Guarantee', desc: 'We check back and re-treat if needed at no cost.' },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="whyus-section">
      <div className="whyus-section__glow" aria-hidden="true" />

      <div className="container">
        {/* Why Us */}
        <div className="whyus-section__header">
          <div className="section-tag"><span className="dot" />Why Choose Us</div>
          <h2 className="section-title">
            The <span>SVS Difference</span> You Can Trust
          </h2>
          <p className="section-subtitle">
            We don't just eliminate pests — we build trust through transparency, safety, and results.
          </p>
        </div>

        <div className="whyus-grid">
          {REASONS.map((r, i) => (
            <div key={r.id} id={`reason-${r.id}`} className="whyus-card glass-card" style={{ animationDelay: `${i * 0.08}s` } as React.CSSProperties}>
              <div className="whyus-card__emoji">{r.icon}</div>
              <h3 className="whyus-card__title">{r.title}</h3>
              <p className="whyus-card__desc">{r.desc}</p>
            </div>
          ))}
        </div>

        {/* Process */}
        <div className="process-block">
          <div className="section-tag" style={{ marginBottom: '12px' }}><span className="dot" />How It Works</div>
          <h2 className="section-title">Simple 4-Step <span>Process</span></h2>

          <div className="process-steps">
            {PROCESS.map((p, i) => (
              <div key={p.step} className="process-step" id={`step-${p.step}`}>
                <div className="process-step__num">{p.step}</div>
                {i < PROCESS.length - 1 && <div className="process-step__line" aria-hidden="true" />}
                <div className="process-step__content">
                  <h4 className="process-step__title">{p.title}</h4>
                  <p className="process-step__desc">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
