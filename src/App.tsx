import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import FloatingActionPill from './components/FloatingActionPill';
import './index.css';

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

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
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Smooth Scroll Reveal: Once an element comes into view, keep it 100% visible and vivid
    const observerCallback: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          entry.target.classList.remove('is-hidden', 'is-hidden-above');
          // Once revealed, keep it permanently solid so it NEVER fades to black when scrolling up or down
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: '-30px 0px -50px 0px',
      threshold: [0.08, 0.2],
    });

    // Auto-attach to all cards, sections, steps, FAQ, and testimonials
    const targets = document.querySelectorAll(
      '.service-card, .rate-card, .whyus-card, .process-step, .testimonial-card, .contact-info, .contact-form-wrap, .section-title, .section-subtitle, .division-showcase, .faq-card, .faq-localities-block'
    );
    targets.forEach((el, index) => {
      el.classList.add('reveal-on-scroll');
      (el as HTMLElement).style.transitionDelay = `${(index % 3) * 0.12}s`;
      observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Top Dynamic Gradient Scroll Progress Bar */}
      <div
        className="scroll-progress-bar"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingActionPill />
    </>
  );
}

export default App;
