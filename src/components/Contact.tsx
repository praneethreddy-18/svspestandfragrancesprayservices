import { useState, useEffect, type ChangeEvent, type FormEvent } from 'react';
import { motion } from 'motion/react';
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  MessageSquareText,
  Star,
  ShieldCheck,
  Users,
  ChevronRight,
  CheckCircle2
} from 'lucide-react';
import './Contact.css';

const ALL_SERVICES = [
  'Cockroach Control',
  'Termite Treatment',
  'Bed Bug Control',
  'Fly Control',
  'Mosquito Control',
  'Ant Control',
  'Rodent Control',
  'Lizard Control',
  'Spider Control',
  'Honey Bee Removal',
  'Residential Pest Control',
  'Commercial Pest Control',
  'Luxury Ambient Fragrance Scenting',
];

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    services: [] as string[],
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleExternalSelect = (e: Event) => {
      const customEvent = e as CustomEvent<{ serviceName: string }>;
      const targetSvc = customEvent.detail?.serviceName;
      if (targetSvc && ALL_SERVICES.includes(targetSvc)) {
        setForm(f => ({
          ...f,
          services: f.services.includes(targetSvc) ? f.services : [...f.services, targetSvc]
        }));
      }
    };
    window.addEventListener('svs-select-service', handleExternalSelect);
    return () => window.removeEventListener('svs-select-service', handleExternalSelect);
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const toggleService = (svc: string) => {
    setForm(f => ({
      ...f,
      services: f.services.includes(svc)
        ? f.services.filter(s => s !== svc)
        : [...f.services, svc]
    }));
  };

  const buildWhatsAppUrl = () => {
    const svcLine = form.services.length > 0
      ? `🛠 Services:\n${form.services.map(s => `  • ${s}`).join('\n')}`
      : '';
    const lines = [
      `Hello SVS Pest Control Karimnagar! I would like to book a service.`,
      ``,
      `👤 Name: ${form.name}`,
      form.email        ? `📧 Email: ${form.email}` : '',
      form.phone        ? `📞 Phone: ${form.phone}` : '',
      svcLine,
      form.message      ? `📝 Message: ${form.message}` : '',
      ``,
      `Please confirm my booking. Thank you!`
    ].filter(l => l !== '');
    return `https://wa.me/919381678805?text=${encodeURIComponent(lines.join('\n'))}`;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.name || (!form.phone && !form.email)) return;
    // Open WhatsApp with pre-filled message immediately
    window.open(buildWhatsAppUrl(), '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };


  return (
    <section id="contact" className="contact-wrapper">
      <div className="contact-main-body">
        <div className="container">

          {/* Section Header */}
          <motion.div
            className="contact-section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="contact-eyebrow-pill">Get In Touch</div>
            <h2 className="contact-section-title">Contact <span>SVS Pest Control</span></h2>
            <p className="contact-section-sub">
              Have a question or need a pest control solution? Our Karimnagar team is ready to help. Reach out today for expert advice and same-day service.
            </p>
          </motion.div>

          {/* 3 INFO CARDS ROW */}
          <div className="contact-cards-grid">
            <motion.a
              href="tel:+919381678805"
              className="contact-info-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: 0, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4, boxShadow: '0 12px 36px rgba(237,28,36,0.18)' }}
            >
              <div className="contact-card-icon-circle">
                <Phone size={24} color="#ffffff" strokeWidth={2.4} />
              </div>
              <div className="contact-card-content">
                <h4 className="contact-card-title">Call Us</h4>
                <p className="contact-card-primary">+91 93816 78805</p>
                <p className="contact-card-sub">
                  Mon - Sat: 8:00 AM - 8:00 PM<br />
                  Sunday: 9:00 AM - 5:00 PM (24/7 Helpline)
                </p>
              </div>
            </motion.a>

            <motion.a
              href="mailto:svspestcontrolservice@gmail.com"
              className="contact-info-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4, boxShadow: '0 12px 36px rgba(237,28,36,0.18)' }}
            >
              <div className="contact-card-icon-circle">
                <Mail size={24} color="#ffffff" strokeWidth={2.4} />
              </div>
              <div className="contact-card-content">
                <h4 className="contact-card-title">Email Us</h4>
                <p className="contact-card-primary">svspestcontrolservice@gmail.com</p>
                <p className="contact-card-sub">We respond within 24 hours.</p>
              </div>
            </motion.a>

            <motion.div
              className="contact-info-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4, boxShadow: '0 12px 36px rgba(237,28,36,0.18)' }}
            >
              <div className="contact-card-icon-circle">
                <MapPin size={24} color="#ffffff" strokeWidth={2.4} />
              </div>
              <div className="contact-card-content">
                <h4 className="contact-card-title">Our Location</h4>
                <p className="contact-card-primary">H.no. 22-9-19, Krishnanagar,</p>
                <p className="contact-card-sub">Bommakal Road, Karimnagar, Telangana - 505001</p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=H.no.+22-9-19+Krishnanagar+Bommakal+Road+Karimnagar+Telangana+505001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-card-link"
                >
                  Get Directions <ChevronRight size={15} strokeWidth={2.8} />
                </a>
              </div>
            </motion.div>
          </div>

          {/* 2-COLUMN: FORM LEFT + MAP RIGHT */}
          <div className="contact-form-map-grid">
            <motion.div
              className="contact-form-box"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            >
              <h3 className="form-box-title">Send Us a Message</h3>
              <p className="form-box-sub">Fill out the form below and our team will get back to you soon.</p>

              {submitted ? (
                <div className="contact-submitted-state">
                  <div className="submitted-icon-wrap">
                    <CheckCircle2 size={44} color="#16a34a" strokeWidth={2.2} />
                  </div>
                  <h4 className="submitted-title">Message Received!</h4>
                  <p className="submitted-desc">
                    Thank you, <strong>{form.name}</strong>. Our Karimnagar dispatch team will contact you shortly regarding <strong>{form.services.length > 0 ? form.services.join(', ') : 'your inquiry'}</strong>.
                  </p>
                  <div className="submitted-actions">
                    <a
                      href={buildWhatsAppUrl()}
                      className="btn-wa-direct"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Continue on WhatsApp
                    </a>
                    <button
                      type="button"
                      className="btn-reset-form"
                      onClick={() => {
                        setSubmitted(false);
                        setForm({ name: '', email: '', phone: '', services: [], message: '' });
                      }}
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form className="contact-message-form" onSubmit={handleSubmit} noValidate>
                  <div className="form-double-row">
                    <div className="form-field-group">
                      <label htmlFor="name" className="form-label">Full Name *</label>
                      <input id="name" name="name" type="text" required placeholder="e.g. Ramesh Reddy" value={form.name} onChange={handleChange} className="form-input" />
                    </div>
                    <div className="form-field-group">
                      <label htmlFor="email" className="form-label">Email Address *</label>
                      <input id="email" name="email" type="email" required placeholder="john@example.com" value={form.email} onChange={handleChange} className="form-input" />
                    </div>
                  </div>

                  <div className="form-double-row">
                    <div className="form-field-group">
                      <label htmlFor="phone" className="form-label">Phone Number</label>
                      <input id="phone" name="phone" type="tel" placeholder="+91 93816 78805" value={form.phone} onChange={handleChange} className="form-input" />
                    </div>
                  </div>

                  {/* Multi-select services */}
                  <div className="form-field-group">
                    <label className="form-label">
                      Services Required
                      {form.services.length > 0 && (
                        <span className="services-count-badge">{form.services.length} selected</span>
                      )}
                    </label>
                    <div className="services-checkbox-grid">
                      {ALL_SERVICES.map(svc => {
                        const checked = form.services.includes(svc);
                        return (
                          <button
                            key={svc}
                            type="button"
                            className={`service-pill ${checked ? 'service-pill--active' : ''}`}
                            onClick={() => toggleService(svc)}
                            aria-pressed={checked}
                          >
                            {checked && <span className="pill-check">✓</span>}
                            {svc}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="form-field-group">
                    <label htmlFor="message" className="form-label">Your Message *</label>
                    <textarea id="message" name="message" rows={4} required placeholder="Tell us how we can help..." value={form.message} onChange={handleChange} className="form-textarea" />
                  </div>

                  <motion.button
                    type="submit"
                    id="contact-submit"
                    className="form-submit-red-btn"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                  >
                    SEND MESSAGE
                    <ArrowRight size={18} strokeWidth={2.8} />
                  </motion.button>
                </form>
              )}
            </motion.div>

            {/* Right: Google Maps iframe */}
            <motion.div
              className="contact-map-box"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            >
              <iframe
                title="SVS Pest Control Karimnagar - Krishnanagar Location"
                src="https://maps.google.com/maps?q=18.437389,79.152139&hl=en&z=17&output=embed"
                className="contact-map-iframe"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="contact-map-floating-card">
                <div className="floating-pin-icon">
                  <MapPin size={22} color="#ED1C24" strokeWidth={2.4} />
                </div>
                <div className="floating-card-info">
                  <h4 className="floating-business-name">SVS Pest Control</h4>
                  <p className="floating-business-address">
                    H.no. 22-9-19, Krishnanagar,<br />
                    Bommakal Road, Karimnagar - 505001
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* BOTTOM 4 BADGES STRIP */}
          <div className="contact-features-strip">
            <div className="contact-feature-item">
              <div className="feature-icon-circle-red">
                <MessageSquareText size={20} color="#ffffff" strokeWidth={2.4} />
              </div>
              <div className="feature-text-wrap">
                <h5 className="feature-item-title">Quick Response</h5>
                <p className="feature-item-desc">We reply within 24 hours.</p>
              </div>
            </div>
            <div className="contact-feature-item">
              <div className="feature-icon-circle-red">
                <Star size={20} color="#ffffff" strokeWidth={2.4} fill="#ffffff" />
              </div>
              <div className="feature-text-wrap">
                <h5 className="feature-item-title">Expert Advice</h5>
                <p className="feature-item-desc">Get professional guidance.</p>
              </div>
            </div>
            <div className="contact-feature-item">
              <div className="feature-icon-circle-red">
                <ShieldCheck size={20} color="#ffffff" strokeWidth={2.4} />
              </div>
              <div className="feature-text-wrap">
                <h5 className="feature-item-title">Reliable Support</h5>
                <p className="feature-item-desc">We are here for your peace of mind.</p>
              </div>
            </div>
            <div className="contact-feature-item">
              <div className="feature-icon-circle-red">
                <Users size={20} color="#ffffff" strokeWidth={2.4} />
              </div>
              <div className="feature-text-wrap">
                <h5 className="feature-item-title">Customer Focused</h5>
                <p className="feature-item-desc">Your satisfaction matters.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
