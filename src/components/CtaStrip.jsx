import { Link } from 'react-router-dom';
import { site } from '../data/siteData.js';

export default function CtaStrip({ title = 'Book AMC Plan For RO Water Purifier' }) {
  return (
    <section className="cta-strip text-white text-center">
      <span className="bub b1"></span><span className="bub b3"></span><span className="bub b4"></span>
      <div className="container py-5 position-relative">
        <h2 className="fw-bold mb-2">{title}</h2>
        <p className="text-white-50 mb-4">Same-day doorstep service in Chinchwad – Pune, 24×7.</p>
        <div className="d-flex flex-wrap gap-3 justify-content-center">
          <a href={`tel:${site.phone}`} className="btn btn-accent btn-lg rounded-pill px-4">
            <i className="bi bi-telephone-fill me-2"></i>{site.phone}
          </a>
          <Link to="/enquiry" className="btn btn-outline-light btn-lg rounded-pill px-4">Send Enquiry</Link>
        </div>
      </div>
    </section>
  );
}
