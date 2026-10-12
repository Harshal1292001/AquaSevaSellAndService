import PageBanner from '../components/PageBanner.jsx';
import useDocumentTitle from '../hooks/useDocumentTitle.js';
import { images, privacy } from '../data/siteData.js';

export default function PrivacyPolicy() {
  useDocumentTitle('Privacy Policy');
  return (
    <>
      <PageBanner title="Privacy Policy" />
      <section className="section">
        <div className="container" style={{ maxWidth: 860 }}>
          <img loading="lazy" decoding="async" src={images.serviceHero} alt="Aqua Seva Service" className="img-fluid rounded-4 mb-4 w-100" />
          {privacy.map((s, i) => (
            <div key={i}>
              {s.h && <h4 className="fw-bold mt-4">{s.h}</h4>}
              {s.p.map((t, j) => <p key={j}>{t}</p>)}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
