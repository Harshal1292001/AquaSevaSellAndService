import { useState } from 'react';
import { site } from '../data/siteData.js';

/** One-field "call me back" strip: opens WhatsApp with the number prefilled. */
export default function QuickCallback() {
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

  const submit = (e) => {
    e.preventDefault();
    const digits = phone.replace(/\D/g, '').replace(/^91/, '');
    if (!/^[6-9]\d{9}$/.test(digits)) { setError('Enter a valid 10-digit mobile number.'); return; }
    setError('');
    const msg = `Hello Aqua Seva Service, please call me back on ${digits} for RO service.`;
    window.open(`https://wa.me/${site.phoneRaw}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener');
    setPhone('');
  };

  return (
    <section className="callback">
      <div className="container">
        <div className="callback-card">
          <div className="callback-text">
            <h3 className="fw-bold mb-1">Get a call back in minutes</h3>
            <p className="mb-0">Leave your mobile number. Our technician will call you to fix a time.</p>
          </div>
          <form className="callback-form" onSubmit={submit} noValidate>
            <div className="input-group">
              <span className="input-group-text"><i className="bi bi-phone"></i></span>
              <input
                type="tel" inputMode="numeric" className={`form-control ${error ? 'is-invalid' : ''}`}
                placeholder="Mobile number" aria-label="Mobile number"
                value={phone} onChange={(e) => setPhone(e.target.value)} autoComplete="tel"
              />
              <button className="btn btn-accent" type="submit">Call Me Back</button>
            </div>
            {error && <div className="small text-warning-emphasis mt-1">{error}</div>}
          </form>
        </div>
      </div>
    </section>
  );
}
