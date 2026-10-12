import { useEffect } from 'react';

export const DEFAULT_DESC =
  'Aqua Seva Service – RO water purifier service, repair, installation and AMC for all brands in Chinchwad, Pimpri Chinchwad, Pune. Same-day doorstep service, 24x7. Call +91-8698565561.';

export const DESCRIPTIONS = {
  About: 'About Aqua Seva Service – trusted RO water purifier repair and service company in Chinchwad, Pune with 10+ years of experience and 9,000+ services.',
  Service: 'RO water purifier service from ₹299, repair and installation from ₹499 for all brands in Chinchwad – Pune. Genuine spare parts, after-service warranty.',
  Blog: 'Practical RO water purifier tips: servicing schedule, AMC benefits, common problems and understanding TDS – from Aqua Seva Service.',
  'RO Care Tools': 'Free RO care tools: check your RO membrane health from TDS readings and find out when your water purifier service is due.',
  Enquiry: 'Send an enquiry to Aqua Seva Service for RO service, repair, installation, AMC or a new water purifier in Chinchwad – Pune. Your details open in WhatsApp.',
  Contact: 'Contact Aqua Seva Service, Shop No. 4 Chitamani Chowk Spine Road, Chinchwad – Pune 411033. Call +91-8698565561 or book on WhatsApp.',
  'Privacy Policy': 'Privacy Policy of Aqua Seva Service – what information we collect, how we use and protect it.',
};

function setMeta(name, content, attr = 'name') {
  let el = document.head.querySelector(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

export default function useDocumentTitle(title, description) {
  useEffect(() => {
    const full = title ? `${title} – Aqua Seva Service` : 'Aqua Seva Service – Water Purifier Service';
    const desc = description || DESCRIPTIONS[title] || DEFAULT_DESC;
    document.title = full;
    setMeta('description', desc);
    setMeta('og:title', full, 'property');
    setMeta('og:description', desc, 'property');
  }, [title, description]);
}
