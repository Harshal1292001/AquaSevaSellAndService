import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner.jsx';
import CtaStrip from '../components/CtaStrip.jsx';
import Reveal from '../components/Reveal.jsx';
import TiltCard from '../components/TiltCard.jsx';
import HowItWorks from '../components/HowItWorks.jsx';
import Stages3D from '../components/Stages3D.jsx';
import BrandsAreas from '../components/BrandsAreas.jsx';
import Faq from '../components/Faq.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import useDocumentTitle from '../hooks/useDocumentTitle.js';
import { site, images } from '../data/siteData.js';

const why = ['On Time Service', 'Skilled & Experienced Technician', 'Best & Transparent Prices', 'Assured Service Quality'];

function ServiceBlock({ title, img, price, note, reverse, children }) {
  return (
    <div className={`row g-5 align-items-center mb-5 ${reverse ? 'flex-lg-row-reverse' : ''}`}>
      <Reveal className="col-lg-5">
        <TiltCard className="img-tilt"><img loading="lazy" decoding="async" src={img} alt={title} className="img-fluid rounded-4" /></TiltCard>
      </Reveal>
      <Reveal className="col-lg-7" delay={120}>
        <h3 className="fw-bold">{title}</h3>
        {children}
        <div className="price-pill">
          <strong>{price}</strong> {note && <span className="text-muted fw-normal">{note}</span>}
          <a href={`tel:${site.phone}`} className="ms-3"><i className="bi bi-telephone me-1"></i>{site.phone}</a>
        </div>
      </Reveal>
    </div>
  );
}

export default function Service() {
  useDocumentTitle('Service');
  return (
    <>
      <PageBanner title="Service" />

      <section className="section">
        <div className="container">
          <div className="row g-5 align-items-center">
            <Reveal className="col-lg-6">
              <h2 className="section-title">Welcome to Aqua Seva Service</h2>
              <p className="lead">Get quick &amp; doorstep best RO water purifier repair &amp; service. Call Us: {site.phone}</p>
              <div className="row g-2 mb-3">
                {why.map((w) => (
                  <div className="col-sm-6" key={w}><div className="why-chip"><i className="bi bi-check-circle-fill me-2"></i>{w}</div></div>
                ))}
              </div>
              <p>
                At Aqua Seva Services we make sure your RO water purifier functions at its best and gives you clean, pure drinking water, so your family is protected from water-borne diseases.
              </p>
              <p className="mb-0">
                Our experienced technicians are trained to handle all RO repair and servicing needs, from a simple filter replacement to a complex system overhaul.
              </p>
            </Reveal>
            <Reveal className="col-lg-6" delay={120}>
              <TiltCard className="img-tilt"><img loading="lazy" decoding="async" src={images.serviceHero} alt="Aqua Seva Service" className="img-fluid rounded-4" /></TiltCard>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="section bg-soft">
        <div className="container">
          <SectionHeading title="Simple, Transparent Pricing" sub="Spare parts and filters are charged separately as per our rate card." />
          <div className="row g-4 justify-content-center">
            {[
              { t: 'RO Service', type: 'service', p: '₹299', n: 'Only', l: ['Cleaning of machine & filters', 'Complete checkup', 'Free TDS test'] },
              { t: 'RO Repair', type: 'repair', p: '₹299', n: 'Visit & diagnosis', l: ['Doorstep diagnosis', 'Genuine spare parts', 'Control-box repair extra'], hot: true },
              { t: 'RO Installation', type: 'install', p: '₹499', n: 'Starting from', l: ['Wall mounting', 'Water & power connection', 'Free TDS test'] },
            ].map((c, i) => (
              <Reveal className="col-md-6 col-lg-4" key={c.t} delay={i * 100}>
                <TiltCard className={`plan h-100 ${c.hot ? 'hot' : ''}`}>
                  {c.hot && <span className="plan-flag">Most booked</span>}
                  <h5 className="fw-bold">{c.t}</h5>
                  <div className="plan-price">{c.p}</div>
                  <div className="text-muted small mb-3">{c.n}</div>
                  <ul className="tick-list mb-4">{c.l.map((x) => <li key={x}>{x}</li>)}</ul>
                  <Link to={`/enquiry?type=${c.type}`} className="btn btn-brand rounded-pill w-100">Book Now</Link>
                </TiltCard>
              </Reveal>
            ))}
          </div>
          <p className="text-center mt-4 mb-0">Want regular checkups all year? Ask us about an <strong>AMC plan</strong>: <Link to="/enquiry?type=amc">send an enquiry</Link> or call {site.phone}</p>
        </div>
      </section>

      {/* DETAIL BLOCKS */}
      <section className="section">
        <div className="container">
          <SectionHeading title="Why Choose Us for Aqua Seva Service in Chinchwad" />

          <ServiceBlock title="Water Purifier Service All Brand & Model" img={images.serviceMain} price="RO Service ₹299 only">
            <p>
              Water purifier service is the regular maintenance and upkeep of your purification system: cleaning, replacing filters, fixing or replacing worn parts, and an inspection to confirm it works correctly and efficiently.
            </p>
            <p>Get the best price on RO servicing in your area with one call. Our experienced professionals offer low-cost, reliable service at your doorstep.</p>
          </ServiceBlock>

          <ServiceBlock title="Water Purifier Repairs All Brand & Model" img={images.repair} price="Service ₹299" note="spare parts charged separately" reverse>
            <p>
              RO is a technology that removes ions and molecules so you can drink pure water. Book an Aqua Seva RO expert and get a quick response at your doorstep.
            </p>
            <p>
              Repair covers fixing or replacing filters, leaks, a broken control valve or any other issue. The repair is based on a proper diagnosis, and our technician also suggests how to keep the system in good condition.
            </p>
          </ServiceBlock>

          <ServiceBlock title="Water Purifier Installation All Brand" img={images.install1} price="From ₹499">
            <p>
              Installation means setting up and connecting the purifier in your home or building: choosing the right spot, preparing plumbing and electrical connections, and configuring the system correctly. Our technician also shows you how to use and maintain it.
            </p>
            <p>We also handle uninstallation and re-installation when you shift homes or offices.</p>
          </ServiceBlock>
        </div>
      </section>

      <section className="section stages-section text-white">
        <div className="container">
          <SectionHeading light title="Know Your Purifier" sub="The five stages we check and service on every visit." />
          <Stages3D />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="row g-4">
            {[
              { icon: 'bi-person-gear', title: 'Our Expert Aqua Seva Services', text: 'Our technicians are highly skilled in all major brands and models. We use only genuine spare parts to protect the longevity and performance of your purifier.' },
              { icon: 'bi-patch-check', title: 'Quality Assurance', text: 'Every repair is done with meticulous attention to detail. We do not just fix the problem; we make sure your purifier stays reliable in the long term.' },
              { icon: 'bi-calendar-check', title: 'AMC Plans', text: 'Annual Maintenance Contracts give you regular scheduled checkups and a free TDS test every visit. Call us to book your plan.' },
            ].map((b, i) => (
              <Reveal className="col-md-4" key={b.title} delay={i * 100}>
                <TiltCard className="feature-box h-100">
                  <i className={`bi ${b.icon} feature-icon`}></i>
                  <h5 className="fw-bold mt-3">{b.title}</h5>
                  <p className="text-muted mb-0">{b.text}</p>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-soft">
        <div className="container">
          <SectionHeading title="How We Work" sub="When you contact us, we schedule a convenient time for a technician to visit." />
          <HowItWorks />
        </div>
      </section>

      <section className="section">
        <div className="container"><BrandsAreas /></div>
      </section>

      <section className="section bg-soft">
        <div className="container" style={{ maxWidth: 860 }}>
          <SectionHeading title="Frequently Asked Questions" />
          <Faq />
        </div>
      </section>

      <CtaStrip title="Book Your RO Service Now" />
    </>
  );
}
