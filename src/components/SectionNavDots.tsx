import React, { useState } from 'react';
import './SectionNavDots.css';

interface SectionNavDotsProps {
  activeSection: string;
}

const SECTIONS = [
  { id: 'home', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'why-us', label: 'Why Us' },
  { id: 'testimonials', label: 'Reviews' },
  { id: 'faq', label: 'FAQ' },
  { id: 'contact', label: 'Contact' },
];

export default function SectionNavDots({ activeSection }: SectionNavDotsProps) {
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="section-nav-dots" aria-label="Section Quick Jump Navigation">
      <div className="section-nav-dots__pill">
        {SECTIONS.map(({ id, label }) => {
          const isActive = activeSection === id;
          return (
            <button
              key={id}
              type="button"
              className={`section-nav-dot ${isActive ? 'section-nav-dot--active' : ''}`}
              onClick={() => scrollTo(id)}
              onMouseEnter={() => setHoveredSection(id)}
              onMouseLeave={() => setHoveredSection(null)}
              aria-label={`Jump to ${label} section`}
              aria-current={isActive ? 'true' : undefined}
            >
              <span className="dot-shape" />
              {(hoveredSection === id || isActive) && (
                <span className="dot-tooltip">
                  {label}
                  {isActive && <span className="tooltip-active-tag">Active</span>}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
