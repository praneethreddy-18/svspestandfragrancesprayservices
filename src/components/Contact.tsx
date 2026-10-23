import { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-section__glow" aria-hidden="true" />
      <div className="container contact-layout">
        {/* Left info panel */}
        <div className="contact-info">
          <div className="section-tag"><span className="dot" />Get In Touch</div>
          <h2 className="section-title">
            Book a <span>Free Inspection</span> Today
          </h2>
          <p className="section-subtitle" style={{ marginBottom: '40px' }}>
            Fill out the form and our team will reach out within 2 hours to confirm your appointment.
          </p>

          <div className="contact-info__items">
            {[
              { icon: '📞', label: 'Phone / WhatsApp', value: '+91 99999 99999', href: 'tel:+919999999999' },
              { icon: '✉️', label: 'Email', value: 'info@svspestservices.com', href: 'mailto:info@svspestservices.com' },
              { icon: '📍', label: 'Location', value: 'Hyderabad, Telangana', href: '#' },
              { icon: '🕐', label: 'Working Hours', value: 'Mon–Sat: 8 AM – 8 PM', href: '#' },
            ].map(item => (
              <a key={item.label} href={item.href} className="contact-info__item" id={`contact-${item.label.toLowerCase().replace(/\s/g, '-')}`}>
                <div className="contact-info__item-icon">{item.icon}</div>
                <div>
                  <div className="contact-info__item-label">{item.label}</div>
                  <div className="contact-info__item-value">{item.value}</div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Form */}
        <div className="contact-form-wrap glass-card">
          {submitted ? (
            <div className="contact-success">
              <div className="contact-success__icon">✅</div>
              <h3>Booking Request Sent!</h3>
              <p>Thank you, <strong>{form.name}</strong>! Our team will call you at <strong>{form.phone}</strong> within 2 hours to confirm your appointment.</p>
              <button className="btn-primary" style={{ marginTop: '20px' }} onClick={() => setSubmitted(false)}>
                Send Another Request
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <h3 className="contact-form__title">Request a Free Visit</h3>

              <div className="contact-form__row">
                <div className="contact-form__group">
                  <label htmlFor="name">Full Name *</label>
                  <input id="name" name="name" type="text" required placeholder="Your full name" value={form.name} onChange={handleChange} />
                </div>
                <div className="contact-form__group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input id="phone" name="phone" type="tel" required placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={handleChange} />
                </div>
              </div>

              <div className="contact-form__group">
                <label htmlFor="service">Service Required *</label>
                <select id="service" name="service" required value={form.service} onChange={handleChange}>
                  <option value="">Select a service...</option>
                  <option>General Pest Control</option>
                  <option>Termite Treatment</option>
                  <option>Rodent Control</option>
                  <option>Mosquito & Fly Control</option>
                  <option>Fragrance Spray Service</option>
                  <option>Sanitization & Disinfection</option>
                </select>
              </div>

              <div className="contact-form__group">
                <label htmlFor="message">Message / Address</label>
                <textarea id="message" name="message" rows={4} placeholder="Your address or any specific details..." value={form.message} onChange={handleChange} />
              </div>

              <button type="submit" id="contact-submit" className="btn-primary contact-form__submit">
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
                Book Free Inspection
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
