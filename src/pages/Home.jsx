import { lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal.jsx';
import Counter from '../components/Counter.jsx';
import TiltCard from '../components/TiltCard.jsx';
import Stages3D from '../components/Stages3D.jsx';
import HowItWorks from '../components/HowItWorks.jsx';
import BrandsAreas from '../components/BrandsAreas.jsx';
import Faq from '../components/Faq.jsx';
import QuickCallback from '../components/QuickCallback.jsx';
import Reviews from '../components/Reviews.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import CtaStrip from '../components/CtaStrip.jsx';
import useDocumentTitle from '../hooks/useDocumentTitle.js';
import { site, images, stats, homeServices, features } from '../data/siteData.js';

// Three.js is loaded on demand so the first paint stays fast.
const Hero3D = lazy(() => import('../components/Hero3D.jsx'));

export default function Home() {
  useDocumentTitle('');
  return (
    <>
      {/* HERO */}
      <section className="hero text-white">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-6 hero-copy">
              <span className="hero-badge"><i className="bi bi-geo-alt-fill me-2"></i>Chinchwad – Pune · Since 2018</span>
              <h1 className="hero-title">Aqua Seva Service do All Brand Water Purifier Service &amp; Repair</h1>
              <p className="hero-lead">Best RO water purifier repair and service in Chinchwad. Doorstep service, genuine parts, 24×7.</p>
              <div className="d-flex flex-wrap gap-3 mb-4">
                <a href={`tel:${site.phone}`} className="btn btn-accent btn-lg rounded-pill px-4">
                  <i className="bi bi-telephone-fill me-2"></i>Call Us {site.phone}
                </a>
                <Link to="/service" className="btn btn-outline-light btn-lg rounded-pill px-4">Our Services</Link>
              </div>
              <ul className="hero-points list-unstyled">
                <li><i className="bi bi-check-circle-fill"></i>Free TDS test every visit</li>
                <li><i className="bi bi-check-circle-fill"></i>Same-day service</li>
                <li><i className="bi bi-check-circle-fill"></i>After-service warranty</li>
              </ul>
            </div>
            <div className="col-lg-6">
              <div className="hero-stage">
                <Suspense fallback={<div className="hero3d no-webgl" />}>
                  <Hero3D />
                </Suspense>
                <span className="chip chip-1"><i className="bi bi-droplet-half"></i> RO · UV · UF</span>
                <span className="chip chip-2"><i className="bi bi-clock-history"></i> 24×7 Support</span>
                <span className="chip chip-3"><i className="bi bi-currency-rupee"></i> Service from ₹299</span>
              </div>
            </div>
          </div>
        </div>
        <svg className="hero-wave" viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0,40 C240,90 480,0 720,30 C960,60 1200,90 1440,35 L1440,80 L0,80 Z" fill="#fff" />
        </svg>
      </section>

      {/* STATS */}
      <section className="stats-wrap">
        <div className="container">
          <div className="stats-card">
            <div className="row g-3 text-center">
              {stats.map((s) => (
                <div className="col-6 col-md-3" key={s.label}>
                  <div className="stat-num"><Counter to={s.value} suffix={s.suffix} /></div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <QuickCallback />

      {/* INTRO */}
      <section className="section">
        <div className="container">
          <div className="row g-5 align-items-center">
            <Reveal className="col-lg-7">
              <h2 className="section-title">Best RO Water Purifier Repair and Service in Chinchwad</h2>
              <p>
                Established in 2018, we are a Chinchwad – Pune based company providing all kinds of RO and UV water purifier sales, service, repair, installation, uninstallation and annual maintenance contract (AMC) services at your doorstep across Chinchwad – Pune.
              </p>
              <p>
                Our work is performed by experienced and knowledgeable technicians who are timely, professional and reliable. We offer prompt, courteous service at very reasonable cost in every corner of Chinchwad – Pune and nearby Pimpri Chinchwad.
              </p>
              <p className="text-muted small">
                Looking for: water purifier service in Chinchwad, RO repair, RO installation, water purifier service near me? You are in the right place.
              </p>
              <p>We are a collaborative, supportive team, available 24×7. Call: {site.phone}.</p>
              <Link to="/about" className="btn btn-brand rounded-pill px-4">About Us</Link>
            </Reveal>
            <Reveal className="col-lg-5" delay={120}>
              <TiltCard className="img-tilt">
                <img loading="lazy" decoding="async" src={images.install} alt="RO installation by Aqua Seva Service" className="img-fluid rounded-4" />
              </TiltCard>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section bg-soft">
        <div className="container">
          <SectionHeading title="Our Services" sub="Doorstep RO service for every brand and model." />
          <div className="row g-4">
            {homeServices.map((s, i) => (
              <Reveal className="col-md-6 col-lg-4" key={s.title} delay={i * 100}>
                <TiltCard className="service-card h-100">
                  <img loading="lazy" decoding="async" src={s.img} alt={s.title} />
                  <div className="p-4">
                    <div className="d-flex align-items-start justify-content-between gap-2 mb-2">
                      <div className="icon-circle"><i className={`bi ${s.icon}`}></i></div>
                      <div className="price-tag text-end">
                        <strong>{s.price}</strong>
                        <small>{s.priceNote}</small>
                      </div>
                    </div>
                    <h5 className="fw-bold">{s.title}</h5>
                    <ul className="tick-list mb-3">
                      {s.points.map((p) => <li key={p}>{p}</li>)}
                    </ul>
                    <div className="d-flex flex-wrap align-items-center gap-2">
                      <Link to={`/enquiry?type=${s.enq}`} className="btn btn-brand btn-sm rounded-pill px-3">Enquire Now</Link>
                      <a href={`tel:${site.phone}`} className="link-call small"><i className="bi bi-telephone me-1"></i>{site.phone}</a>
                    </div>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3D STAGES */}
      <section className="section stages-section text-white">
        <div className="container">
          <SectionHeading light title="What Happens Inside Your RO" sub="Five stages turn raw water into pure drinking water. Each one needs timely care." />
          <Stages3D />
          <p className="text-center text-white-50 small mt-2 mb-0">Hover to pause the ring.</p>
        </div>
      </section>

      {/* WHY US */}
      <section className="section">
        <div className="container">
          <div className="row g-5 align-items-center mb-5">
            <Reveal className="col-lg-6">
              <h2 className="section-title">Aqua Seva Service in Chinchwad – Pune</h2>
              <p className="lead">Our company provides water purifier service, installation, AMC &amp; repair of all brands. Call Us : {site.phone}.</p>
            </Reveal>
            <Reveal className="col-lg-6" delay={120}>
              <TiltCard className="img-tilt">
                <img loading="lazy" decoding="async" src={images.homeService} alt="Water purifier service" className="img-fluid rounded-4" />
              </TiltCard>
            </Reveal>
          </div>
          <div className="row g-4">
            {features.map((f, i) => (
              <Reveal className="col-sm-6 col-lg-3" key={f.title} delay={(i % 4) * 80}>
                <TiltCard className="feature-box h-100" max={12}>
                  <i className={`bi ${f.icon} feature-icon`}></i>
                  <h6 className="fw-bold mt-3">{f.title}</h6>
                  <p className="small text-muted mb-0">{f.text}</p>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* HOW */}
      <section className="section bg-soft">
        <div className="container">
          <SectionHeading title="How Aqua Seva Service Works in Chinchwad – Pune" sub="Four simple steps from call to clean water." />
          <HowItWorks />
        </div>
      </section>

      {/* BRANDS + AREAS */}
      <section className="section">
        <div className="container"><BrandsAreas /></div>
      </section>

      {/* FAQ */}
      <section className="section bg-soft">
        <div className="container" style={{ maxWidth: 860 }}>
          <SectionHeading title="Frequently Asked Questions" sub="Quick answers about pricing, brands, warranty and AMC." />
          <Faq />
        </div>
      </section>

      {/* TOOLS TEASER + FEEDBACK */}
      <section className="section">
        <div className="container">
          <div className="row g-4 align-items-stretch">
            <Reveal className="col-lg-6">
              <div className="tools-teaser h-100">
                <i className="bi bi-activity"></i>
                <h3 className="fw-bold">Is your RO still working well?</h3>
                <p>Check your membrane health from two TDS readings, or find out when your service is due. Free, takes a minute.</p>
                <Link to="/tools" className="btn btn-accent rounded-pill px-4">Try RO Care Tools</Link>
              </div>
            </Reveal>
            <Reveal className="col-lg-6" delay={100}><Reviews /></Reveal>
          </div>
        </div>
      </section>

      <CtaStrip title="Need RO Service Today? Call Our Technician" />
    </>
  );
}
