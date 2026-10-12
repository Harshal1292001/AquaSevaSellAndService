import { site } from '../data/siteData.js';

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="container d-flex align-items-center gap-3">
        <div className="marquee flex-grow-1" aria-label={site.marquee}>
          <div className="marquee-track" aria-hidden="true">
            <span>{site.marquee}</span>
            <span>{site.marquee}</span>
          </div>
        </div>
        <div className="d-none d-lg-flex gap-3 flex-shrink-0 small">
          <a href={`tel:${site.phone}`}><i className="bi bi-telephone-fill me-1"></i>{site.phone.replace('+91-', '')}</a>
          <a href={`mailto:${site.email}`}><i className="bi bi-envelope-fill me-1"></i>{site.email}</a>
        </div>
      </div>
    </div>
  );
}
