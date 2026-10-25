import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PhoneCall } from 'lucide-react';
import './FloatingActionPill.css';

export default function FloatingActionPill() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Reveal after scrolling past the first 250px (beyond top header area)
      setVisible(window.scrollY > 250);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.aside
          className="floating-actions-corner"
          aria-label="Quick contact actions"
          initial={{ opacity: 0, scale: 0.5, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 30 }}
          transition={{ type: 'spring', stiffness: 450, damping: 25 }}
        >
          <motion.a
            href="tel:+919381678805"
            className="floating-corner-btn floating-corner-call"
            aria-label="Call SVS Pest Control Karimnagar directly: 93816 78805"
            title="Call Now: 93816 78805"
            whileHover={{ scale: 1.12, transition: { type: 'spring', stiffness: 500, damping: 20 } }}
            whileTap={{ scale: 0.92 }}
          >
            <PhoneCall size={22} color="#ffffff" strokeWidth={2.4} />
            <span className="floating-tooltip">Call: 93816 78805</span>
          </motion.a>

          <motion.a
            href="https://wa.me/919381678805?text=Hello%20SVS%20Pest%20Control%20Karimnagar%2C%20I%20would%20like%20to%20book%20a%20free%20inspection."
            className="floating-corner-btn floating-corner-wa"
            aria-label="Chat on WhatsApp with SVS Pest Control Karimnagar"
            title="Chat on WhatsApp"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.12, transition: { type: 'spring', stiffness: 500, damping: 20 } }}
            whileTap={{ scale: 0.92 }}
          >
            <svg className="floating-wa-svg" width="26" height="26" viewBox="0 0 32 32" fill="none" aria-hidden="true">
              <path d="M16 2.5C8.5 2.5 2.5 8.5 2.5 16C2.5 18.5 3.2 20.8 4.4 22.8L2.5 29.5L9.4 27.7C11.3 28.8 13.6 29.5 16 29.5C23.5 29.5 29.5 23.5 29.5 16C29.5 8.5 23.5 2.5 16 2.5Z" fill="#25D366" />
              <path d="M23.5 8.5C21.5 6.5 18.8 5.4 16 5.4C10.2 5.4 5.5 10.1 5.5 15.9C5.5 17.8 6 19.6 6.9 21.2L5.4 26.6L11 25.1C12.5 25.9 14.2 26.4 16 26.4C21.8 26.4 26.5 21.7 26.5 15.9C26.5 13.1 25.4 10.5 23.5 8.5ZM16 24.6C14.4 24.6 12.8 24.2 11.5 23.4L11.1 23.2L7.7 24.1L8.6 20.8L8.4 20.4C7.5 19 7 17.5 7 15.9C7 10.9 11 6.9 16 6.9C18.4 6.9 20.7 7.8 22.4 9.5C24.1 11.2 25 13.5 25 15.9C25 20.9 21 24.6 16 24.6ZM20.9 18.2C20.6 18.1 19.3 17.5 19.1 17.4C18.9 17.3 18.7 17.3 18.5 17.6C18.3 17.9 17.8 18.5 17.6 18.7C17.5 18.8 17.3 18.8 17 18.7C16.7 18.5 15.8 18.2 14.8 17.3C14 16.6 13.4 15.7 13.3 15.4C13.1 15.1 13.3 15 13.4 14.8C13.5 14.7 13.7 14.5 13.8 14.3C13.9 14.1 14 14 14.1 13.8C14.2 13.6 14.1 13.4 14.1 13.3C14 13.2 13.4 11.7 13.1 11.2C12.9 10.6 12.6 10.7 12.5 10.7C12.3 10.7 12.1 10.7 11.9 10.7C11.7 10.7 11.4 10.8 11.2 11C10.9 11.3 10.2 12 10.2 13.3C10.2 14.6 11.2 15.9 11.3 16.1C11.5 16.3 13.2 18.9 15.8 20C16.4 20.3 16.9 20.5 17.3 20.6C18 20.8 18.6 20.8 19 20.7C19.5 20.6 20.6 20 20.8 19.3C21 18.6 21 18.1 20.9 18.2Z" fill="white" />
            </svg>
            <span className="floating-tooltip">WhatsApp</span>
          </motion.a>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
