import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyUs from './components/WhyUs';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import EcoNatureBanner from './components/EcoNatureBanner';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingActionPill from './components/FloatingActionPill';
import SectionNavDots from './components/SectionNavDots';
import './index.css';

const SECTION_IDS = ['home', 'services', 'why-us', 'testimonials', 'faq', 'contact'];

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const currentScroll = window.scrollY;
      if (totalScroll > 0) {
        setScrollProgress((currentScroll / totalScroll) * 100);
      }

      // Track scroll direction on body for directional animations
      if (currentScroll > lastScrollY && currentScroll > 80) {
        document.body.classList.add('scrolling-down');
        document.body.classList.remove('scrolling-up');
      } else if (currentScroll < lastScrollY) {
        document.body.classList.add('scrolling-up');
        document.body.classList.remove('scrolling-down');
      }
      lastScrollY = currentScroll;

      // Active Section Tracking (Scrollspy)
      const scrollTriggerPosition = currentScroll + window.innerHeight * 0.35;
      let currentActive = 'home';
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (scrollTriggerPosition >= top) {
            currentActive = id;
          }
        }
      }

      setActiveSection(currentActive);

      // Add active highlight class to current section and remove from others
      SECTION_IDS.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
          if (id === currentActive) {
            el.classList.add('section--active');
          } else {
            el.classList.remove('section--active');
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Trigger on mount
    handleScroll();

    // Continuous Bidirectional Fade-In & Fade-Out Scroll Reveal Observer
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          entry.target.classList.remove('is-hidden');
        } else {
          // Fade-out when scrolling away
          entry.target.classList.remove('is-visible');
          entry.target.classList.add('is-hidden');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: '0px 0px -40px 0px',
      threshold: [0.06, 0.18],
    });

    // Auto-attach to all cards, sections, steps, FAQ, testimonials, and contact blocks
    const attachObservers = () => {
      const targets = document.querySelectorAll(
        '.reveal-on-scroll, .rate-card, .whyus-feature-card, .process-pill-step, .whyus-trust-bar, .whyus-process-strip, .whyus-hero-inner, .whyus-features-grid, .testimonial-card, .testimonials-section__header, .testimonials-grid, .faq-hero-inner, .faq-numbered-card, .faq-help-box, .faq-why-box, .eco-banner-header, .eco-card, .eco-cta-strip, .contact-hero-inner, .contact-info-card, .contact-form-box, .contact-map-box, .contact-bottom-badge, .showcase-banner, .inpage-content-block, .block-header, .hero-snackz-tabs'
      );

      targets.forEach((el, index) => {
        if (!el.classList.contains('reveal-on-scroll')) {
          el.classList.add('reveal-on-scroll');
        }
        if (!(el as HTMLElement).style.transitionDelay) {
          (el as HTMLElement).style.transitionDelay = `${(index % 4) * 0.09}s`;
        }
        observer.observe(el);
      });
    };

    attachObservers();

    // Re-attach whenever dynamic tabs (Pest <-> Fragrance) or content changes
    const mutationObserver = new MutationObserver(() => {
      attachObservers();
    });
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return (
    <>
      {/* Top High-Tech Red/Gold Gradient Scroll Progress Bar */}
      <div
        className="scroll-progress-bar"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      <Navbar activeSection={activeSection} />

      {/* Floating Section Quick-Jump Indicator on Desktop */}
      <SectionNavDots activeSection={activeSection} />

      <main>
        <Hero />
        <WhyUs />
        <Testimonials />
        <FAQ />
        <EcoNatureBanner />
        <Contact />
      </main>

      <Footer />
      <FloatingActionPill />
    </>
  );
}

export default App;
