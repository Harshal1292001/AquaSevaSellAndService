import { site, enquiryTypes, timeSlots } from '../data/siteData.js';

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

/** wa.me link addressed to the business number with the message prefilled. */
export function waLink(text) {
  return `https://wa.me/${site.phoneRaw}?text=${encodeURIComponent(text)}`;
}

/** Keeps only the 10 mobile digits (drops +91 / 91 / 0 prefixes, spaces and dashes). */
export function normalizePhone(value) {
  let d = String(value || '').replace(/\D/g, '');
  if (d.length === 12 && d.startsWith('91')) d = d.slice(2);
  if (d.length === 11 && d.startsWith('0')) d = d.slice(1);
  return d;
}

export function todayISO() {
  const d = new Date();
  const p = (n) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
}

export function formatDate(iso) {
  if (!iso) return '';
  const [y, m, d] = iso.split('-');
  return `${Number(d)} ${MONTHS[Number(m) - 1]} ${y}`;
}

/** Short reference number so you and the customer can refer to the same enquiry. */
export function makeRef() {
  const d = new Date();
  const p = (n) => String(n).padStart(2, '0');
  return `ASV-${String(d.getFullYear()).slice(2)}${p(d.getMonth() + 1)}${p(d.getDate())}-${Math.floor(1000 + Math.random() * 9000)}`;
}

const opt = (label, value) => (value ? `*${label}:* ${value}` : null);

/** Builds the WhatsApp message (uses WhatsApp *bold* markup). */
export function buildEnquiryMessage(f, ref) {
  const type = (enquiryTypes.find((t) => t.key === f.type) || {}).label || f.type;
  const slot = (timeSlots.find((t) => t.key === f.slot) || {}).label;
  return [
    '*New Enquiry – Aqua Seva Service*',
    `Ref: ${ref}`,
    '',
    opt('Name', f.name.trim()),
    opt('Mobile', `+91 ${f.phone}`),
    opt('Email', (f.email || '').trim()),
    opt('Enquiry For', type),
    opt('Purifier Brand', f.brand),
    opt('Area / Address', f.area.trim()),
    opt('Preferred Date', formatDate(f.date)),
    opt('Preferred Time', slot),
    opt('Message', (f.message || '').trim()),
    '',
    'Sent from the website enquiry form.',
  ].filter((line) => line !== null).join('\n');
}
