import { brands, areas, site } from '../data/siteData.js';

export default function BrandsAreas() {
  return (
    <div className="row g-4">
      <div className="col-lg-7">
        <div className="panel h-100">
          <h4 className="fw-bold mb-3"><i className="bi bi-grid-3x3-gap me-2 text-brand"></i>All Brands &amp; Models Serviced</h4>
          <div className="pill-wrap">
            {brands.map((b) => <span className="pill" key={b}>{b}</span>)}
          </div>
          <p className="small text-muted mt-3 mb-0">
            {site.name} is an independent service provider with no affiliation to any brand. Brand names are listed for reference only.
          </p>
        </div>
      </div>
      <div className="col-lg-5">
        <div className="panel h-100">
          <h4 className="fw-bold mb-3"><i className="bi bi-geo-alt me-2 text-brand"></i>Areas We Serve</h4>
          <div className="pill-wrap">
            {areas.map((a) => <span className="pill pill-area" key={a}>{a}</span>)}
          </div>
          <p className="small text-muted mt-3 mb-0">Technicians available 24×7 across Pimpri Chinchwad, Pune.</p>
        </div>
      </div>
    </div>
  );
}
