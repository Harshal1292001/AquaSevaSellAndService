import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { site, enquiryTypes, timeSlots, brandOptions } from '../data/siteData.js';
import { waLink, makeRef, buildEnquiryMessage, normalizePhone, todayISO, formatDate } from '../utils/whatsapp.js';

const EMPTY = { name: '', phone: '', email: '', type: 'service', brand: '', area: '', date: '', slot: 'any', message: '' };

/**
 * Enquiry form. On submit the details are validated, turned into a tidy message and
 * WhatsApp opens addressed to the business number – the customer just presses Send.
 * `compact` hides the optional fields (used on the Contact page).
 */
export default function EnquiryForm({ compact = false }) {
  const [params] = useSearchParams();
  const urlType = params.get('type');
  const validType = enquiryTypes.some((t) => t.key === urlType) ? urlType : null;

  const [form, setForm] = useState({ ...EMPTY });
  const [minDate, setMinDate] = useState('');
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(null);

  // Service buttons link here with ?type=repair etc. Set after mount so the pre-built page and the browser agree.
  useEffect(() => {
    if (validType) setForm((f) => ({ ...f, type: validType }));
  }, [validType]);
  useEffect(() => { setMinDate(todayISO()); }, []);

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: undefined });
  };

  const validate = () => {
    const er = {};
    if (form.name.trim().length < 2) er.name = 'Please enter your name.';
    if (!/^[6-9]\d{9}$/.test(normalizePhone(form.phone))) er.phone = 'Enter a valid 10-digit mobile number.';
    if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim())) er.email = 'Enter a valid email or leave it blank.';
    if (form.area.trim().length < 3) er.area = 'Please enter your area / address.';
    if (form.date && form.date < todayISO()) er.date = 'Choose today or a later date.';
    return er;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const er = validate();
    setErrors(er);
    const first = Object.keys(er)[0];
    if (first) {
      const el = document.getElementById(`enq-${first}`);
      if (el) el.focus();
      return;
    }
    const data = { ...form, phone: normalizePhone(form.phone) };
    const ref = makeRef();
    const url = waLink(buildEnquiryMessage(data, ref));
    const w = window.open(url, '_blank');
    if (w) w.opener = null;
    else window.location.href = url; // pop-up blocked: open in this tab instead
    setSent({ ref, url, data });
  };

  const reset = () => { setSent(null); setForm({ ...EMPTY, type: validType || 'service' }); setErrors({}); };

  if (sent) {
    const typeLabel = (enquiryTypes.find((t) => t.key === sent.data.type) || {}).label;
    return (
      <div className="enq-success" role="status">
        <div className="enq-check"><i className="bi bi-whatsapp"></i></div>
        <h4 className="fw-bold">Your enquiry is ready on WhatsApp</h4>
        <p className="mb-2">WhatsApp has opened with your details addressed to <strong>{site.phone}</strong>. <strong>Please press Send</strong> there so it reaches us.</p>
        <p className="small text-muted mb-3">Reference: <strong>{sent.ref}</strong></p>
        <dl className="enq-summary">
          <div><dt>Name</dt><dd>{sent.data.name}</dd></div>
          <div><dt>Mobile</dt><dd>+91 {sent.data.phone}</dd></div>
          <div><dt>For</dt><dd>{typeLabel}</dd></div>
          <div><dt>Area</dt><dd>{sent.data.area}</dd></div>
          {sent.data.date && <div><dt>Date</dt><dd>{formatDate(sent.data.date)}</dd></div>}
        </dl>
        <div className="d-flex flex-wrap gap-2">
          <a className="btn btn-brand rounded-pill px-4" href={sent.url} target="_blank" rel="noreferrer"><i className="bi bi-whatsapp me-2"></i>Open WhatsApp again</a>
          <a className="btn btn-outline-secondary rounded-pill px-4" href={`tel:${site.phone}`}><i className="bi bi-telephone me-2"></i>Call us</a>
          <button type="button" className="btn btn-link" onClick={reset}>Send another enquiry</button>
        </div>
      </div>
    );
  }

  const field = (name) => ({
    id: `enq-${name}`, name, value: form[name], onChange,
    className: `form-control ${errors[name] ? 'is-invalid' : ''}`,
    'aria-invalid': errors[name] ? 'true' : undefined,
    'aria-describedby': errors[name] ? `enq-${name}-err` : undefined,
  });
  const err = (name) => errors[name] && <div className="invalid-feedback d-block" id={`enq-${name}-err`}>{errors[name]}</div>;

  return (
    <form onSubmit={onSubmit} noValidate>
      <div className="row g-3">
        <div className="col-md-6">
          <label className="form-label" htmlFor="enq-name">Your name <span className="req">*</span></label>
          <input type="text" autoComplete="name" {...field('name')} />
          {err('name')}
        </div>
        <div className="col-md-6">
          <label className="form-label" htmlFor="enq-phone">Mobile number <span className="req">*</span></label>
          <input type="tel" inputMode="numeric" autoComplete="tel" placeholder="10-digit mobile number" {...field('phone')} />
          {err('phone')}
        </div>

        {!compact && (
          <div className="col-md-6">
            <label className="form-label" htmlFor="enq-email">Email <span className="text-muted small">(optional)</span></label>
            <input type="email" autoComplete="email" {...field('email')} />
            {err('email')}
          </div>
        )}

        <div className={compact ? 'col-12' : 'col-md-6'}>
          <label className="form-label" htmlFor="enq-type">Enquiry for <span className="req">*</span></label>
          <select {...field('type')} className="form-select">
            {enquiryTypes.map((t) => <option key={t.key} value={t.key}>{t.label}</option>)}
          </select>
        </div>

        {!compact && (
          <div className="col-md-6">
            <label className="form-label" htmlFor="enq-brand">Purifier brand <span className="text-muted small">(optional)</span></label>
            <select {...field('brand')} className="form-select">
              <option value="">Select brand</option>
              {brandOptions.map((b) => <option key={b} value={b}>{b}</option>)}
            </select>
          </div>
        )}

        <div className={compact ? 'col-12' : 'col-md-6'}>
          <label className="form-label" htmlFor="enq-area">Area / address <span className="req">*</span></label>
          <input type="text" autoComplete="street-address" placeholder="e.g. Chinchwad, near Chitamani Chowk" {...field('area')} />
          {err('area')}
        </div>

        {!compact && (
          <>
            <div className="col-md-6">
              <label className="form-label" htmlFor="enq-date">Preferred date <span className="text-muted small">(optional)</span></label>
              <input type="date" min={minDate || undefined} {...field('date')} />
              {err('date')}
            </div>
            <div className="col-md-6">
              <label className="form-label" htmlFor="enq-slot">Preferred time</label>
              <select {...field('slot')} className="form-select">
                {timeSlots.map((t) => <option key={t.key} value={t.key}>{t.label}</option>)}
              </select>
            </div>
          </>
        )}

        <div className="col-12">
          <label className="form-label" htmlFor="enq-message">Message / problem details <span className="text-muted small">(optional)</span></label>
          <textarea rows={compact ? 3 : 4} placeholder="e.g. Water flow is low and the tank is not filling" {...field('message')}></textarea>
        </div>

        <div className="col-12">
          <button className="btn btn-brand btn-lg w-100 rounded-pill" type="submit">
            <i className="bi bi-whatsapp me-2"></i>Send Enquiry on WhatsApp
          </button>
          <p className="small text-muted mt-2 mb-0">
            Your details open in WhatsApp addressed to {site.phone}. Press Send to deliver them. See our <Link to="/privacy-policy">Privacy Policy</Link>.
          </p>
        </div>
      </div>
    </form>
  );
}
