import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner.jsx';
import Reveal from '../components/Reveal.jsx';
import EnquiryForm from '../components/EnquiryForm.jsx';
import useDocumentTitle from '../hooks/useDocumentTitle.js';
import { site, images } from '../data/siteData.js';

export default function Contact() {
  useDocumentTitle('Contact');
  return (
    <>
      <PageBanner title="Contact" />
      <section className="section">
        <div className="container">
          <div className="row g-5">
            <Reveal className="col-lg-5">
              <h2 className="section-title">{site.name}</h2>
              <div className="contact-item"><i className="bi bi-telephone-fill"></i><div><h6 className="fw-bold mb-0">Contact No.</h6><a href={`tel:${site.phone}`}>{site.phone}</a></div></div>
              <div className="contact-item"><i className="bi bi-envelope-fill"></i><div><h6 className="fw-bold mb-0">Email</h6><a href={`mailto:${site.email}`}>{site.email}</a></div></div>
              <div className="contact-item"><i className="bi bi-geo-alt-fill"></i><div><h6 className="fw-bold mb-0">Address</h6>{site.address.map((a) => <div key={a}>{a}</div>)}</div></div>
              <div className="contact-item"><i className="bi bi-clock-fill"></i><div><h6 className="fw-bold mb-0">Working Hours</h6>Available 24 × 7 in all areas</div></div>
              <p className="mt-4">
                Aqua Seva Service is the best service provider in Chinchwad – Pune for RO water purifier service, repair, AMC and installation of all brands. We also provide spare parts and re-installation.
              </p>
              <Link to="/enquiry" className="btn btn-outline-primary rounded-pill px-4">Need to give more details? Full enquiry form</Link>
            </Reveal>

            <Reveal className="col-lg-7" delay={120}>
              <div className="form-card">
                <h4 className="fw-bold mb-1">Quick Enquiry</h4>
                <p className="text-muted small mb-3">Fill the form and it opens in WhatsApp, addressed to {site.phone}.</p>
                <EnquiryForm compact />
              </div>
            </Reveal>
          </div>

          <Reveal className="row g-4 mt-4">
            <div className="col-md-7"><img loading="lazy" decoding="async" src={images.office} alt="Aqua Seva office" className="img-fluid rounded-4 w-100 h-100 object-fit-cover" /></div>
            <div className="col-md-5"><img loading="lazy" decoding="async" src={images.callUs} alt="RO service, call us" className="img-fluid rounded-4 w-100 h-100 object-fit-cover" /></div>
          </Reveal>

          <Reveal className="map-wrap mt-5">
            <iframe
              title="Aqua Seva Service location"
              src="https://www.google.com/maps?q=Chitamani+Chowk+Spine+Road+Chinchwad+Pune+411033&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            ></iframe>
          </Reveal>
        </div>
      </section>
    </>
  );
}
