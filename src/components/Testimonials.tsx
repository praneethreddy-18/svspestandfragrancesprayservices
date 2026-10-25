import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, CheckCircle2 } from 'lucide-react';
import './Testimonials.css';

const TESTIMONIALS = [
  {
    id: 'test-1',
    name: 'K. Ramesh Reddy',
    role: 'Homeowner, Mukarampura',
    initials: 'KR',
    rating: 5,
    text: 'SVS Pest Control was professional, responsive and very effective. Their odorless gel baiting solved our kitchen cockroach problem in just one visit. Our home is finally pest-free!',
  },
  {
    id: 'test-2',
    name: 'Priya Sharma',
    role: 'Boutique Owner, Collectorate Road',
    initials: 'PS',
    rating: 5,
    text: 'Excellent service and great results. We booked their 8-hour cold diffusion scenting for our showroom opening. The team was knowledgeable, punctual, and made the whole process easy.',
  },
  {
    id: 'test-3',
    name: 'V. Suresh Kumar',
    role: 'Apartment Resident, Jyothinagar',
    initials: 'VS',
    rating: 5,
    text: 'Highly recommend SVS Pest Control! They were on time, courteous and resolved our persistent termite issue quickly. The written warranty gave us complete peace of mind.',
  },
  {
    id: 'test-4',
    name: 'Ch. Venkat Ramana',
    role: 'Restaurant Manager, Mankammathota',
    initials: 'VR',
    rating: 5,
    text: 'In the food business, hygiene compliance is critical. SVS handles our regular pest management with 100% safe, non-toxic products and audit-ready documentation. Outstanding service!',
  },
  {
    id: 'test-5',
    name: 'M. Anitha Rao',
    role: 'Homeowner, Kashmirgadda',
    initials: 'AR',
    rating: 5,
    text: 'Very impressed with their eco-safe chemistry. With toddlers and elderly parents at home, safety was our top concern. Zero chemical smell, zero mess, and highly effective results.',
  },
  {
    id: 'test-6',
    name: 'T. Rajeshwar Rao',
    role: 'Function Hall Manager, Padmanagar',
    initials: 'TR',
    rating: 5,
    text: 'Booked both general pest disinfection and ambient scenting for a grand wedding reception. The venue smelled divine throughout the evening and zero insect disturbance. 10/10 service!',
  },
];

export default function Testimonials() {
  const [startIndex, setStartIndex] = useState(0);

  const nextSlide = () => {
    setStartIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevSlide = () => {
    setStartIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const displayedTestimonials = [
    TESTIMONIALS[startIndex % TESTIMONIALS.length],
    TESTIMONIALS[(startIndex + 1) % TESTIMONIALS.length],
    TESTIMONIALS[(startIndex + 2) % TESTIMONIALS.length],
  ];

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        {/* Header matching reference */}
        <div className="testimonials-section__header">
          <h2 className="testimonials-title">
            WHAT OUR <span className="title-red">CUSTOMERS SAY</span>
          </h2>
          <p className="testimonials-subtitle">
            We're proud to help homeowners and businesses stay pest-free. Here's what some of our customers have to say.
          </p>
        </div>

        {/* Testimonials Grid matching reference */}
        <div className="testimonials-grid">
          {displayedTestimonials.map((t, idx) => (
            <article key={`${t.id}-${idx}`} className="testimonial-card">
              {/* Star Rating */}
              <div className="testimonial-card__stars">
                {Array.from({ length: t.rating }).map((_, si) => (
                  <Star key={si} size={18} fill="#f59e0b" color="#f59e0b" />
                ))}
              </div>

              {/* Quote Text */}
              <p className="testimonial-card__text">
                "{t.text}"
              </p>

              {/* Author & Large Watermark Quote */}
              <div className="testimonial-card__footer">
                <div className="testimonial-card__author">
                  <div className="testimonial-card__avatar">
                    <span className="testimonial-initials">{t.initials}</span>
                  </div>
                  <div>
                    <div className="testimonial-name-row">
                      <h4 className="testimonial-card__name">{t.name}</h4>
                      <span className="verified-badge">
                        <CheckCircle2 size={12} color="#16a34a" strokeWidth={3} />
                        Verified
                      </span>
                    </div>
                    <p className="testimonial-card__role">{t.role}</p>
                  </div>
                </div>

                <span className="testimonial-watermark">”</span>
              </div>
            </article>
          ))}
        </div>

        {/* Carousel Arrow Controls */}
        <div className="testimonials-controls">
          <button className="carousel-arrow-btn" onClick={prevSlide} aria-label="Previous testimonials">
            <ChevronLeft size={20} strokeWidth={2.5} />
          </button>
          <button className="carousel-arrow-btn carousel-arrow-btn--active" onClick={nextSlide} aria-label="Next testimonials">
            <ChevronRight size={20} strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </section>
  );
}
