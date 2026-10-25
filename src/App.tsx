import { useEffect, useState, useRef } from 'react';
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
  const [activeSection, setActiveSection] = useState('home');
  const progressBarRef = useRef<HTMLDivElement>(null);
  const activeSectionRef = useRef('home');

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const currentScroll = window.scrollY;

      // Update progress bar directly via ref (zero React re-renders)
      if (progressBarRef.current && totalScroll > 0) {
        const percent = Math.min(100, Math.max(0, (currentScroll / totalScroll) * 100));
        progressBarRef.current.style.width = `${percent}%`;
      }

      // Track scroll direction on body
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

      // Only update state if active section actually changed
      if (currentActive !== activeSectionRef.current) {
        activeSectionRef.current = currentActive;
        setActiveSection(currentActive);

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
      }

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScroll);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    updateScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Top High-Tech Red/Gold Gradient Scroll Progress Bar */}
      <div
        ref={progressBarRef}
        className="scroll-progress-bar"
        style={{ width: '0%' }}
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
