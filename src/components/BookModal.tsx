import { useState, useEffect, type CSSProperties } from 'react';
import './BookModal.css';
import type { BookCatalog } from './BookCatalogData';
import { playPageTurnSound } from './soundUtils';

interface BookModalProps {
  catalog: BookCatalog | null;
  onClose: () => void;
}

export default function BookModal({ catalog, onClose }: BookModalProps) {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isFlipping, setIsFlipping] = useState<boolean>(false);
  const [flipDirection, setFlipDirection] = useState<'next' | 'prev'>('next');
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [bookmarkedPages, setBookmarkedPages] = useState<number[]>([]);

  useEffect(() => {
    setCurrentPage(1);
    setBookmarkedPages([]);
  }, [catalog]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'b' || e.key === 'B') toggleBookmark(currentPage);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentPage, catalog, soundEnabled, isFlipping]);

  if (!catalog) return null;

  const totalPages = catalog.pages.length;
  const pageData = catalog.pages[currentPage - 1];
  const isBookmarked = bookmarkedPages.includes(currentPage);

  const triggerSound = () => {
    if (soundEnabled) {
      playPageTurnSound();
    }
  };

  const goNext = () => {
    if (currentPage < totalPages && !isFlipping) {
      triggerSound();
      setFlipDirection('next');
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage((prev) => prev + 1);
        setIsFlipping(false);
      }, 350);
    }
  };

  const goPrev = () => {
    if (currentPage > 1 && !isFlipping) {
      triggerSound();
      setFlipDirection('prev');
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage((prev) => prev - 1);
        setIsFlipping(false);
      }, 350);
    }
  };

  const toggleBookmark = (pg: number) => {
    setBookmarkedPages((prev) =>
      prev.includes(pg) ? prev.filter((p) => p !== pg) : [...prev, pg]
    );
  };

  const handleBookingClick = () => {
    onClose();
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Instant WhatsApp booking message tailored to current page
  const whatsAppMessage = encodeURIComponent(
    `Hello SVS Pest Control & Fragrance Services, I am reviewing your official Dossier for *${catalog.cardTitle}* on *Chapter ${currentPage}: ${pageData.title}* (${pageData.subtitle || ''}). I would like to schedule an immediate consultation / service booking.`
  );
  const whatsAppUrl = `https://wa.me/919381678805?text=${whatsAppMessage}`;

  return (
    <div className="book-modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div
        className="book-modal-container"
        onClick={(e) => e.stopPropagation()}
        style={{ '--book-theme': catalog.themeColor } as CSSProperties}
      >
        {/* Top Header / Bar */}
        <div className="book-modal-header">
          <div className="book-header-left">
            <span className="book-badge">{catalog.badge}</span>
            <span className="book-cat-title">{catalog.categoryTitle}</span>
          </div>

          <div className="book-nav-controls">
            {/* Audio Toggle */}
            <button
              className={`book-tool-btn ${soundEnabled ? 'active' : ''}`}
              onClick={() => setSoundEnabled(!soundEnabled)}
              title={soundEnabled ? 'Page flip sound: ON' : 'Page flip sound: OFF'}
              aria-label="Toggle Page Turn Sound"
            >
              {soundEnabled ? (
                <svg width="17" height="17" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                </svg>
              ) : (
                <svg width="17" height="17" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                </svg>
              )}
            </button>

            {/* Bookmark Ribbon Toggle */}
            <button
              className={`book-tool-btn ${isBookmarked ? 'bookmarked' : ''}`}
              onClick={() => toggleBookmark(currentPage)}
              title={isBookmarked ? 'Remove Bookmark (B)' : 'Bookmark this Chapter (B)'}
              aria-label="Bookmark Chapter"
            >
              <svg width="17" height="17" fill={isBookmarked ? 'currentColor' : 'none'} viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
              </svg>
            </button>

            <span className="book-page-indicator">
              Section <strong>{currentPage}</strong> of <strong>{totalPages}</strong>
            </span>

            <button
              className="book-btn-nav"
              onClick={goPrev}
              disabled={currentPage === 1 || isFlipping}
              aria-label="Previous Page"
            >
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              className="book-btn-nav"
              onClick={goNext}
              disabled={currentPage === totalPages || isFlipping}
              aria-label="Next Page"
            >
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <button className="book-btn-close" onClick={onClose} aria-label="Close Book">
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* 3D Realistic Book Stage */}
        <div className="book-stage">
          {/* Physical Bookmark Ribbon Hanging from Top */}
          {isBookmarked && (
            <div className="bookmark-ribbon" title="Bookmarked Chapter">
              <span className="ribbon-tail" />
            </div>
          )}

          <div className="book-binder-spine" />
          
          <div className="book-page-spread parchment-texture">
            {/* Left Page (Image, Chapter Intro, Highlights) */}
            <div className="book-page book-page--left">
              <div className="book-page-inner">
                <div className="book-page-top">
                  <span className="book-chapter-tag">{pageData.chapterTag}</span>
                  <span className="book-stamp-tag">OFFICIAL AUDITED DOSSIER</span>
                </div>

                <div className="book-media-showcase">
                  <img
                    src={catalog.cardImage}
                    alt={catalog.cardTitle}
                    className="book-showcase-img"
                  />
                  <div className="book-showcase-gradient" />
                  <div className="book-showcase-caption">
                    <span className="showcase-tag">{catalog.tagline}</span>
                  </div>
                </div>

                {pageData.highlightBox && (
                  <div className="book-highlight-box">
                    <div className="highlight-box-head">
                      <span className="highlight-bullet" />
                      <strong>{pageData.highlightBox.title}</strong>
                      {pageData.highlightBox.badge && (
                        <span className="highlight-tag">{pageData.highlightBox.badge}</span>
                      )}
                    </div>
                    <p>{pageData.highlightBox.content}</p>
                  </div>
                )}

                {pageData.metrics && (
                  <div className="book-metrics-grid">
                    {pageData.metrics.map((m, idx) => (
                      <div key={idx} className="metric-box">
                        <span className="metric-val">{m.value}</span>
                        <span className="metric-lbl">{m.label}</span>
                      </div>
                    ))}
                  </div>
                )}

                <div className="book-folio left-folio">
                  <span>{currentPage * 2 - 1}</span>
                  <span className="folio-label">{catalog.cardTitle}</span>
                </div>
              </div>
            </div>

            {/* Right Page (Content Details, Bullet Points, Action CTAs) */}
            <div className={`book-page book-page--right ${isFlipping ? `flipping-${flipDirection}` : ''}`}>
              <div className="book-page-inner">
                <div className="book-page-top">
                  <span className="book-page-indicator-mini">DOCUMENTATION · CHAPTER {currentPage}</span>
                  <span className="book-verified-seal">
                    <svg width="14" height="14" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Audited Standard
                  </span>
                </div>

                <div className="book-content-header">
                  <h2 className="book-section-title">{pageData.title}</h2>
                  {pageData.subtitle && <p className="book-section-subtitle">{pageData.subtitle}</p>}
                </div>

                <p className="book-lead-text">{pageData.lead}</p>

                {pageData.bullets && (
                  <div className="book-bullet-list">
                    {pageData.bullets.map((b, i) => (
                      <div key={i} className="book-bullet-item">
                        <div className="bullet-indicator">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3}>
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </div>
                        <div className="bullet-body">
                          <h4 className="bullet-heading">{b.title}</h4>
                          <p className="bullet-desc">{b.desc}</p>
                          {b.price && <div className="bullet-price">{b.price}</div>}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Footer Action & Page Folio with WhatsApp */}
                <div className="book-right-footer">
                  {pageData.footerNote && (
                    <p className="book-footer-note">{pageData.footerNote}</p>
                  )}
                  <div className="book-action-row">
                    <button className="book-cta-primary" onClick={handleBookingClick}>
                      Book Service Now
                      <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                    
                    {/* Instant WhatsApp Booking for this Chapter */}
                    <a
                      href={whatsAppUrl}
                      className="book-cta-whatsapp"
                      title="Direct WhatsApp Consultation with Chapter Details"
                    >
                      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.634.06-1.503-.263-.807-.3-1.428-.8-2.073-1.444-.805-.804-1.34-1.849-1.436-2.19-.098-.342-.016-.628.187-.831.144-.144.316-.245.474-.245.158 0 .235.006.338.25.105.249.362.883.394.948.032.065.053.141.01.226-.042.086-.064.139-.128.214-.064.075-.136.167-.194.225-.065.065-.133.136-.057.266.076.13.338.558.726.903.499.444.92.581 1.05.646.131.065.207.054.283-.033.076-.087.327-.381.414-.512.087-.13.174-.109.293-.065.12.043.762.359.893.424.13.065.217.098.25.152.033.055.033.315-.111.72z" />
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.98-1.39A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.2a8.16 8.16 0 01-4.32-1.233l-.31-.184-3.19.89.893-3.109-.202-.32A8.156 8.156 0 013.8 12c0-4.521 3.679-8.2 8.2-8.2 4.522 0 8.2 3.679 8.2 8.2 0 4.521-3.678 8.2-8.2 8.2z" clipRule="evenodd" />
                      </svg>
                      Instant WhatsApp
                    </a>

                    <a href="tel:+919381678805" className="book-cta-call">
                      <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      Direct Call
                    </a>
                  </div>
                </div>

                <div className="book-folio right-folio">
                  <span className="folio-label">Official Service Dossier</span>
                  <span>{currentPage * 2}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Page Thumbnails Bar */}
        <div className="book-thumbnails-bar">
          <div className="book-thumbs-wrap">
            {catalog.pages.map((p, idx) => (
              <button
                key={idx}
                className={`book-thumb-btn ${currentPage === idx + 1 ? 'active' : ''} ${bookmarkedPages.includes(idx + 1) ? 'thumb-has-bookmark' : ''}`}
                onClick={() => {
                  if (!isFlipping && currentPage !== idx + 1) {
                    triggerSound();
                    setFlipDirection(idx + 1 > currentPage ? 'next' : 'prev');
                    setIsFlipping(true);
                    setTimeout(() => {
                      setCurrentPage(idx + 1);
                      setIsFlipping(false);
                    }, 300);
                  }
                }}
              >
                <div className="thumb-row">
                  <span className="thumb-num">Ch. 0{p.pageNumber}</span>
                  {bookmarkedPages.includes(idx + 1) && (
                    <span className="thumb-bm-dot" title="Bookmarked">★</span>
                  )}
                </div>
                <span className="thumb-title">{p.title}</span>
              </button>
            ))}
          </div>

          <div className="book-hint-text">
            <span>Keys: [← / →] Flip · [B] Bookmark · [ESC] Close</span>
          </div>
        </div>
      </div>
    </div>
  );
}
