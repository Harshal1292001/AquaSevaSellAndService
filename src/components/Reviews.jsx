import { reviews, site } from '../data/siteData.js';

/**
 * Customer feedback block. Real reviews go in `reviews` (siteData.js).
 * While the list is empty it shows an invitation to share feedback instead –
 * we never ship invented testimonials.
 */
export default function Reviews() {
  const feedbackLink = site.googleReviewUrl || `https://wa.me/${site.phoneRaw}?text=${encodeURIComponent('Hello Aqua Seva Service, I would like to share my feedback.')}`;

  if (reviews.length === 0) {
    return (
      <div className="panel text-center feedback-card">
        <div className="stars" aria-hidden="true">
          {[...Array(5)].map((_, i) => <i key={i} className="bi bi-star-fill"></i>)}
        </div>
        <h4 className="fw-bold mt-2">Happy with our service?</h4>
        <p className="text-muted mb-3">Your feedback helps other families in Pimpri Chinchwad choose safe drinking water.</p>
        <a href={feedbackLink} target="_blank" rel="noreferrer" className="btn btn-brand rounded-pill px-4">
          <i className="bi bi-chat-heart me-2"></i>{site.googleReviewUrl ? 'Review us on Google' : 'Share Your Feedback'}
        </a>
      </div>
    );
  }

  return (
    <div className="row g-4">
      {reviews.map((r) => (
        <div className="col-md-4" key={r.name}>
          <div className="panel h-100">
            <div className="stars mb-2" aria-label={`${r.rating} out of 5 stars`}>
              {[...Array(r.rating)].map((_, i) => <i key={i} className="bi bi-star-fill"></i>)}
            </div>
            <p>“{r.text}”</p>
            <strong>{r.name}</strong> <span className="text-muted small">· {r.area}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
