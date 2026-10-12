import PageBanner from '../components/PageBanner.jsx';
import CtaStrip from '../components/CtaStrip.jsx';
import Reveal from '../components/Reveal.jsx';
import Counter from '../components/Counter.jsx';
import TiltCard from '../components/TiltCard.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import useDocumentTitle from '../hooks/useDocumentTitle.js';
import { site, images, stats, features } from '../data/siteData.js';

const perks = [
  'Professional, well-trained, and expert technicians',
  'Get 100% after service warranty',
  'Timely services right at your doorway',
  'Services at 20% lower price than market',
];

export default function About() {
  useDocumentTitle('About');
  return (
    <>
      <PageBanner title="About" />

      <section className="section">
        <div className="container">
          <div className="row g-5 align-items-center">
            <Reveal className="col-lg-6">
              <TiltCard className="img-tilt"><img loading="lazy" decoding="async" src={images.aboutHero} alt="About Aqua Seva Service" className="img-fluid rounded-4" /></TiltCard>
            </Reveal>
            <Reveal className="col-lg-6" delay={120}>
              <h2 className="section-title">Who We Are?</h2>
              <p>Introducing Aqua Seva Service, the best RO water purifier repair and service in Chinchwad – Pune.</p>
              <p>
                At Aqua Seva Service we are dedicated to making sure your RO water purifier works at its best and gives you clean, pure drinking water, so your family stays protected from water-borne diseases.
              </p>
              <h5 className="fw-bold mt-4">“Welcome to Aqua Seva Service Center”</h5>
              <p className="text-muted">Award Winning RO Water Purifier Service Near Me. Call Us: {site.phone}</p>
              <ul className="tick-list">
                {perks.map((p) => <li key={p}>{p}</li>)}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section bg-soft">
        <div className="container">
          <div className="row g-5 align-items-center">
            <Reveal className="col-lg-7">
              <p>
                Our team of experienced technicians is trained to handle all kinds of RO water purifier repair and servicing needs. Whether it is a simple filter replacement or a complex system overhaul, we have the expertise to get the job done efficiently.
              </p>
              <p>
                We understand the importance of a properly functioning water purifier in your home or office, which is why we offer quick and reliable service. With prompt response times and quality workmanship, you can trust us to keep your RO in top condition.
              </p>
              <p className="mb-0">
                Do not compromise on the quality of your drinking water. Contact {site.phone} today for all your RO water purifier repair and servicing needs in Chinchwad – Pune.
              </p>
            </Reveal>
            <Reveal className="col-lg-5" delay={120}>
              <div className="stats-card stats-inline">
                <h5 className="fw-bold text-center mb-3">Our Milestones</h5>
                <div className="row g-3 text-center">
                  {stats.map((s) => (
                    <div className="col-6" key={s.label}>
                      <div className="stat-num"><Counter to={s.value} suffix={s.suffix} /></div>
                      <div className="stat-label">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="row g-5 align-items-center">
            <Reveal className="col-lg-5">
              <TiltCard className="img-tilt"><img loading="lazy" decoding="async" src={images.amc} alt="RO AMC" className="img-fluid rounded-4" /></TiltCard>
            </Reveal>
            <Reveal className="col-lg-7" delay={120}>
              <h2 className="section-title">Why Choose Us?</h2>
              <h5 className="fw-bold">Focus On Getting Our Jobs Done</h5>
              <p>
                At Aqua Seva Service we strongly believe that customer satisfaction is our primary target. We provide quick resolution and competitive prices, transparent service with warranty, and we always prefer genuine branded spare parts only. We have been serving quality RO water purifier service in Chinchwad – Pune for 10 years.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section bg-soft">
        <div className="container">
          <SectionHeading title="What You Get With Us" />
          <div className="row g-4">
            {features.map((f, i) => (
              <Reveal className="col-sm-6 col-lg-3" key={f.title} delay={(i % 4) * 80}>
                <TiltCard className="feature-box bg-white h-100" max={12}>
                  <i className={`bi ${f.icon} feature-icon`}></i>
                  <h6 className="fw-bold mt-3">{f.title}</h6>
                  <p className="small text-muted mb-0">{f.text}</p>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaStrip />
    </>
  );
}
