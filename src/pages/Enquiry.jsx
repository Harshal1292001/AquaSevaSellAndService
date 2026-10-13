import PageBanner from '../components/PageBanner.jsx';
import Reveal from '../components/Reveal.jsx';
import EnquiryForm from '../components/EnquiryForm.jsx';
import useDocumentTitle from '../hooks/useDocumentTitle.js';
import { site } from '../data/siteData.js';

const steps = [
  { icon: 'bi-pencil-square', t: 'Fill the form', d: 'Tell us what you need and where you are.' },
  { icon: 'bi-whatsapp', t: 'WhatsApp opens', d: `Your details appear in a chat with ${site.phone}. Press Send.` },
  { icon: 'bi-telephone-inbound', t: 'We call you back', d: 'Our team confirms the visit, often the same day.' },
];

const prices = [
  ['RO Service', '₹249'],
  ['RO Repair (visit & diagnosis)', '₹249'],
  ['RO Installation', 'from ₹449'],
  ['AMC Plan', 'Call for plan'],
];

export default function Enquiry() {
  useDocumentTitle('Enquiry');
  return (
    <>
      <PageBanner title="Enquiry" />
      <section className="section">
        <div className="container">
          <div className="row g-5">
            <Reveal className="col-lg-7">
              <div className="form-card">
                <h2 className="h3 fw-bold mb-1">Send Us Your Enquiry</h2>
                <p className="text-muted mb-4">Service, repair, installation, AMC or a new purifier? Fill in the details and we will get back to you quickly.</p>
                <EnquiryForm />
              </div>
            </Reveal>

            <Reveal className="col-lg-5" delay={120}>
              <aside className="enq-side">
                <div className="panel mb-4">
                  <h5 className="fw-bold mb-3">What happens next?</h5>
                  <ol className="enq-steps">
                    {steps.map((s, i) => (
                      <li key={s.t}>
                        <span className="enq-num">{i + 1}</span>
                        <div><strong><i className={`bi ${s.icon} me-1 text-brand`}></i>{s.t}</strong><div className="small text-muted">{s.d}</div></div>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="panel mb-4">
                  <h5 className="fw-bold mb-3">Our Prices</h5>
                  <ul className="list-unstyled mb-2">
                    {prices.map(([n, p]) => (
                      <li key={n} className="price-row"><span>{n}</span><strong>{p}</strong></li>
                    ))}
                  </ul>
                  <p className="small text-muted mb-0">Spare parts and filters are charged separately as per rate card. Free TDS test every visit.</p>
                </div>

                <div className="panel enq-call">
                  <h5 className="fw-bold">Prefer to talk?</h5>
                  <p className="small mb-3">We are available 24 × 7.</p>
                  <div className="d-grid gap-2">
                    <a href={`tel:${site.phone}`} className="btn btn-accent rounded-pill"><i className="bi bi-telephone-fill me-2"></i>{site.phone}</a>
                    <a href={`https://wa.me/${site.phoneRaw}`} target="_blank" rel="noreferrer" className="btn btn-outline-success rounded-pill"><i className="bi bi-whatsapp me-2"></i>Chat on WhatsApp</a>
                  </div>
                </div>
              </aside>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
