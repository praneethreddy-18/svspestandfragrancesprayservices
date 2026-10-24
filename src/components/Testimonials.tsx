import './Testimonials.css';

const TESTIMONIALS = [
  {
    id: 'test-1',
    name: 'Ramesh Kumar',
    role: 'Homeowner, Karimnagar',
    avatar: '👨‍💼',
    rating: 5,
    text: 'SVS Pest Services did an excellent job! They got rid of the cockroach problem in our kitchen within a single visit. Very professional team and eco-safe products — safe for our kids.',
  },
  {
    id: 'test-2',
    name: 'Priya Sharma',
    role: 'Business Owner, Mukarampura, Karimnagar',
    avatar: '👩‍💼',
    rating: 5,
    text: 'We had a severe termite issue in our office building. The SVS team handled it efficiently with minimal disruption. The 5-year warranty gave us real peace of mind.',
  },
  {
    id: 'test-3',
    name: 'Suresh Reddy',
    role: 'Apartment Resident, Collectorate Road, Karimnagar',
    avatar: '🧑‍💼',
    rating: 5,
    text: 'Their fragrance spray service is absolutely amazing. The scent lasts for weeks and the variety of options is impressive. Highly recommend their combo packages!',
  },
  {
    id: 'test-4',
    name: 'Lakshmi Naidu',
    role: 'Restaurateur, Jyothinagar, Karimnagar',
    avatar: '👩‍🍳',
    rating: 5,
    text: 'Running a restaurant, pest-free certification is critical for us. SVS has been our trusted partner for 3 years. Prompt, reliable, and affordable — 10/10!',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials-section">
      <div className="testimonials-section__glow" aria-hidden="true" />
      <div className="container">
        <div className="testimonials-section__header">
          <div className="section-tag"><span className="dot" />Testimonials</div>
          <h2 className="section-title">
            Loved by <span>Homes & Businesses</span> Across Karimnagar
          </h2>
          <p className="section-subtitle">
            Real feedback from local residents and business owners experiencing our modern pest & fragrance services.
          </p>
        </div>

        <div className="testimonials-grid">
          {TESTIMONIALS.map((t, i) => (
            <article
              key={t.id}
              id={t.id}
              className="glass-card testimonial-card"
              style={{ animationDelay: `${i * 0.1}s` } as React.CSSProperties}
            >
              {/* Stars */}
              <div className="testimonial-card__stars" aria-label={`${t.rating} stars`}>
                {Array.from({ length: t.rating }).map((_, si) => (
                  <svg key={si} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              {/* Quote */}
              <blockquote className="testimonial-card__text">"{t.text}"</blockquote>
              {/* Author */}
              <div className="testimonial-card__author">
                <div className="testimonial-card__avatar">{t.avatar}</div>
                <div>
                  <div className="testimonial-card__name">{t.name}</div>
                  <div className="testimonial-card__role">{t.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
