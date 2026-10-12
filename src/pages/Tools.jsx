import { useState } from 'react';
import PageBanner from '../components/PageBanner.jsx';
import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import CtaStrip from '../components/CtaStrip.jsx';
import useDocumentTitle from '../hooks/useDocumentTitle.js';
import { site, filterGuide } from '../data/siteData.js';

const wa = (text) => `https://wa.me/${site.phoneRaw}?text=${encodeURIComponent(text)}`;

/* ---------- Membrane health ---------- */
function MembraneChecker() {
  const [raw, setRaw] = useState('');
  const [pure, setPure] = useState('');
  const r = Number(raw);
  const p = Number(pure);
  const ready = raw !== '' && pure !== '' && r > 0 && p >= 0 && p <= r;
  const rejection = ready ? Math.round((1 - p / r) * 100) : null;

  let status = null;
  if (ready) {
    if (rejection >= 90) status = { cls: 'ok', icon: 'bi-check-circle-fill', t: 'Membrane looks healthy', d: 'Your RO is rejecting most dissolved solids. Keep up the regular service schedule.' };
    else if (rejection >= 75) status = { cls: 'warn', icon: 'bi-exclamation-triangle-fill', t: 'Performance is declining', d: 'Filters or the membrane are getting tired. A service and checkup is recommended soon.' };
    else status = { cls: 'bad', icon: 'bi-x-octagon-fill', t: 'Membrane likely needs attention', d: 'Rejection is low. Book a technician to test and, if needed, replace the membrane.' };
  }

  let advice = null;
  if (raw !== '' && r > 0) {
    if (r < 150) advice = 'Your input water TDS is low. A UV/UF purifier is often enough for such water; RO may not be necessary.';
    else if (r <= 500) advice = 'Moderate TDS. An RO (with UV/UF) purifier is the usual choice for this range.';
    else advice = 'High TDS. A good RO purifier is recommended, and the membrane should be checked more often.';
  }

  return (
    <div className="tool-card h-100">
      <div className="tool-head"><i className="bi bi-activity"></i><h4>RO Membrane Health Check</h4></div>
      <p className="text-muted small">Measure TDS of your tap water and of the purified water with a TDS meter, then enter both readings (mg/L or ppm).</p>
      <div className="row g-3">
        <div className="col-6">
          <label className="form-label" htmlFor="raw">Input (tap) TDS</label>
          <input id="raw" type="number" inputMode="numeric" min="0" className="form-control" value={raw} onChange={(e) => setRaw(e.target.value)} placeholder="e.g. 450" />
        </div>
        <div className="col-6">
          <label className="form-label" htmlFor="pure">Purified water TDS</label>
          <input id="pure" type="number" inputMode="numeric" min="0" className="form-control" value={pure} onChange={(e) => setPure(e.target.value)} placeholder="e.g. 40" />
        </div>
      </div>
      {raw !== '' && pure !== '' && !ready && <div className="text-danger small mt-2">Purified TDS cannot be higher than the input TDS.</div>}
      {advice && <p className="small mt-3 mb-0"><i className="bi bi-lightbulb me-1 text-warning"></i>{advice}</p>}
      {status && (
        <div className={`result ${status.cls}`} role="status">
          <i className={`bi ${status.icon}`}></i>
          <div>
            <strong>{status.t}</strong>
            <div className="small">Rejection rate: <b>{rejection}%</b>. {status.d}</div>
          </div>
        </div>
      )}
      {status && status.cls !== 'ok' && (
        <a className="btn btn-accent rounded-pill w-100 mt-3" href={wa(`Hello Aqua Seva Service, my RO check shows ${rejection}% rejection (input TDS ${raw}, purified TDS ${pure}). Please book a service visit.`)} target="_blank" rel="noreferrer">
          <i className="bi bi-whatsapp me-2"></i>Book a Checkup
        </a>
      )}
      <p className="tiny text-muted mt-3 mb-0">Rule-of-thumb guide only. Our technician confirms on site.</p>
    </div>
  );
}

/* ---------- Service due ---------- */
function ServiceDue() {
  const [source, setSource] = useState('municipal');
  const [usage, setUsage] = useState('home');
  const [months, setMonths] = useState('');

  let interval = source === 'municipal' ? 4 : 3;
  if (usage === 'heavy') interval -= 1;
  const m = Number(months);
  const ready = months !== '' && m >= 0;
  let status = null;
  if (ready) {
    if (m >= interval) status = { cls: 'bad', icon: 'bi-alarm-fill', t: 'Service is overdue', d: `With your water and usage, service is best done every ${interval} months. You are ${m - interval === 0 ? 'right at' : `${m - interval} month(s) past`} the due time.` };
    else if (m >= interval - 1) status = { cls: 'warn', icon: 'bi-hourglass-split', t: 'Service due soon', d: `Recommended interval is ${interval} months. Book now to stay ahead.` };
    else status = { cls: 'ok', icon: 'bi-check-circle-fill', t: 'You are on track', d: `Recommended interval is ${interval} months. Next service in about ${interval - m} month(s).` };
  }

  return (
    <div className="tool-card h-100">
      <div className="tool-head"><i className="bi bi-calendar2-check"></i><h4>Service Due Calculator</h4></div>
      <p className="text-muted small">Find out when your purifier needs its next service.</p>
      <div className="row g-3">
        <div className="col-sm-6">
          <label className="form-label" htmlFor="source">Water source</label>
          <select id="source" className="form-select" value={source} onChange={(e) => setSource(e.target.value)}>
            <option value="municipal">Municipal / corporation</option>
            <option value="borewell">Borewell / tanker / hard water</option>
          </select>
        </div>
        <div className="col-sm-6">
          <label className="form-label" htmlFor="usage">Usage</label>
          <select id="usage" className="form-select" value={usage} onChange={(e) => setUsage(e.target.value)}>
            <option value="home">Home (normal)</option>
            <option value="heavy">Office / shop / heavy use</option>
          </select>
        </div>
        <div className="col-12">
          <label className="form-label" htmlFor="months">Months since last service</label>
          <input id="months" type="number" inputMode="numeric" min="0" max="60" className="form-control" value={months} onChange={(e) => setMonths(e.target.value)} placeholder="e.g. 5" />
        </div>
      </div>
      {status && (
        <div className={`result ${status.cls}`} role="status">
          <i className={`bi ${status.icon}`}></i>
          <div><strong>{status.t}</strong><div className="small">{status.d}</div></div>
        </div>
      )}
      {status && status.cls !== 'ok' && (
        <a className="btn btn-accent rounded-pill w-100 mt-3" href={wa(`Hello Aqua Seva Service, my RO service is due (last service ${months} months ago). Please book a visit.`)} target="_blank" rel="noreferrer">
          <i className="bi bi-whatsapp me-2"></i>Book Service Now
        </a>
      )}
      <p className="tiny text-muted mt-3 mb-0">Guide based on typical water conditions.</p>
    </div>
  );
}

export default function Tools() {
  useDocumentTitle('RO Care Tools');
  return (
    <>
      <PageBanner title="RO Care Tools" />
      <section className="section">
        <div className="container">
          <SectionHeading title="Free Tools to Look After Your RO" sub="Quick checks you can do in a minute, with no sign-up." />
          <div className="row g-4">
            <Reveal className="col-lg-6"><MembraneChecker /></Reveal>
            <Reveal className="col-lg-6" delay={100}><ServiceDue /></Reveal>
          </div>
        </div>
      </section>

      <section className="section bg-soft">
        <div className="container">
          <SectionHeading title="Filter Replacement Guide" sub="Typical life of each part. Hard or high-TDS water shortens these." />
          <Reveal>
            <div className="table-responsive guide-table">
              <table className="table align-middle mb-0">
                <thead><tr><th>Part</th><th>What it does</th><th>Typical change</th></tr></thead>
                <tbody>
                  {filterGuide.map((f) => (
                    <tr key={f.part}>
                      <td data-label="Part"><strong>{f.part}</strong></td>
                      <td data-label="What it does">{f.role}</td>
                      <td data-label="Typical change"><span className="pill">{f.life}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>
      <CtaStrip title="Not sure what your RO needs? Ask our technician" />
    </>
  );
}
