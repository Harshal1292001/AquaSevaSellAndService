import { Link } from 'react-router-dom';
import { footerLinks, site, images } from '../data/siteData.js';

export default function Footer() {
  return (
    <footer className="site-footer text-white">
      <div className="container pt-5">
        <div className="row g-4 pb-4">
          <div className="col-lg-5">
            <img loading="lazy" decoding="async" src={images.logo} alt={site.name} className="footer-logo mb-3" />
            <p className="text-white-50">
              RO water purifier service, repair, AMC and installation for all brands in Chinchwad – Pune. Doorstep service, genuine spare parts and transparent pricing.
            </p>
            <div className="d-flex gap-2">
              <a href={site.social.facebook} className="social" aria-label="Facebook"><i className="bi bi-facebook"></i></a>
              <a href={site.social.x} className="social" aria-label="X"><i className="bi bi-twitter-x"></i></a>
              <a href={site.social.instagram} className="social" aria-label="Instagram"><i className="bi bi-instagram"></i></a>
              <a href={`https://wa.me/${site.phoneRaw}`} className="social" aria-label="WhatsApp" target="_blank" rel="noreferrer"><i className="bi bi-whatsapp"></i></a>
            </div>
          </div>
          <div className="col-6 col-lg-3">
            <h6 className="fw-bold mb-3">Quick Links</h6>
            <ul className="list-unstyled mb-0">
              {footerLinks.map((l) => (
                <li key={l.to} className="mb-2"><Link to={l.to} className="footer-link">{l.label}</Link></li>
              ))}
            </ul>
          </div>
          <div className="col-6 col-lg-4">
            <h6 className="fw-bold mb-3">Contact</h6>
            <p className="mb-2"><i className="bi bi-telephone-fill me-2"></i><a className="footer-link" href={`tel:${site.phone}`}>{site.phone}</a></p>
            <p className="mb-2"><i className="bi bi-envelope-fill me-2"></i><a className="footer-link" href={`mailto:${site.email}`}>{site.email}</a></p>
            <p className="mb-0 text-white-50"><i className="bi bi-geo-alt-fill me-2 text-white"></i>{site.address.join(', ')}</p>
            <p className="mb-2 mt-2"><i className="bi bi-clock-fill me-2"></i><span className="text-white-50">Open 24 × 7</span></p>
            <a className="btn btn-outline-light btn-sm rounded-pill px-3" href={site.mapsUrl} target="_blank" rel="noreferrer"><i className="bi bi-signpost-split me-1"></i>Get Directions</a>
          </div>
        </div>
        <div className="border-top border-secondary py-3 text-center small text-white-50">
          Copyright © <span suppressHydrationWarning>{new Date().getFullYear()}</span> - {site.name}
        </div>
      </div>
    </footer>
  );
}
