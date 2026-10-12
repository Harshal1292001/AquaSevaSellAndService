import { useEffect, useState } from 'react';
import { site } from '../data/siteData.js';

/** Orange speed-dial button (like the original site) with Call / WhatsApp / Email + back to top. */
export default function FloatingActions() {
  const [open, setOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className={`dial ${open ? 'open' : ''}`}>
      {showTop && (
        <button className="dial-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top">
          <i className="bi bi-arrow-up"></i>
        </button>
      )}
      <a className="dial-item d-wa" href={`https://wa.me/${site.phoneRaw}`} target="_blank" rel="noreferrer" aria-label="WhatsApp"><i className="bi bi-whatsapp"></i></a>
      <a className="dial-item d-mail" href={`mailto:${site.email}`} aria-label="Email"><i className="bi bi-envelope-fill"></i></a>
      <a className="dial-item d-call" href={`tel:${site.phone}`} aria-label="Call"><i className="bi bi-telephone-fill"></i></a>
      <button className="dial-main" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Quick contact">
        <i className="bi bi-plus-lg"></i>
      </button>
    </div>
  );
}
