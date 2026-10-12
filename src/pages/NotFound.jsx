import { Link } from 'react-router-dom';
import useDocumentTitle from '../hooks/useDocumentTitle.js';

export default function NotFound() {
  useDocumentTitle('Page not found');
  return (
    <section className="section text-center">
      <div className="container py-5">
        <div className="display-1 fw-bold text-brand">404</div>
        <h2 className="fw-bold">This page has dried up</h2>
        <p className="text-muted">The page you are looking for does not exist or has moved.</p>
        <Link to="/" className="btn btn-brand rounded-pill px-4 me-2">Back to Home</Link>
        <Link to="/contact" className="btn btn-outline-secondary rounded-pill px-4">Contact Us</Link>
      </div>
    </section>
  );
}
