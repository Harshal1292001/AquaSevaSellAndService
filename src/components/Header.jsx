import { useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { navLinks, images, site } from '../data/siteData.js';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => { setOpen(false); }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('nav-open', open);
    return () => document.body.classList.remove('nav-open');
  }, [open]);

  return (
    <header className={`site-nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="container d-flex align-items-center justify-content-between">
        <Link className="brand" to="/" aria-label={`${site.name} home`}>
          <img src={images.logo} alt={site.name} />
        </Link>

        <button
          className={`nav-toggle d-lg-none ${open ? 'is-open' : ''}`}
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          aria-controls="main-nav"
          onClick={() => setOpen(!open)}
        >
          <span></span><span></span><span></span>
        </button>

        <nav id="main-nav" className={`nav-panel ${open ? 'open' : ''}`} aria-label="Main">
          <ul className="nav-list">
            {navLinks.map((l) => (
              <li key={l.to}>
                <NavLink end={l.to === '/'} to={l.to} className={({ isActive }) => `nav-link-x ${isActive ? 'active' : ''}`}>
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <a href={`tel:${site.phone}`} className="btn btn-accent rounded-pill px-4 nav-cta">
            <i className="bi bi-telephone-fill me-2"></i>Call Now
          </a>
        </nav>
      </div>
      {open && <button className="nav-backdrop d-lg-none" aria-label="Close menu" onClick={() => setOpen(false)} />}
    </header>
  );
}
