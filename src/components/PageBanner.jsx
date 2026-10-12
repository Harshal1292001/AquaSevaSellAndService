import { Link } from 'react-router-dom';

export default function PageBanner({ title, crumbs }) {
  return (
    <section className="page-banner text-white">
      <span className="bub b1"></span><span className="bub b2"></span><span className="bub b3"></span><span className="bub b4"></span>
      <div className="container py-5 position-relative">
        <h1 className="fw-bold display-5 mb-2">{title}</h1>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
            {crumbs && crumbs.map((c) => (
              <li className="breadcrumb-item" key={c.to}><Link to={c.to}>{c.label}</Link></li>
            ))}
            <li className="breadcrumb-item active" aria-current="page">{crumbs ? 'Article' : title}</li>
          </ol>
        </nav>
      </div>
    </section>
  );
}
