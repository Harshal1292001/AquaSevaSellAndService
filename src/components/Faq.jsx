import { useEffect, useState } from 'react';
import { faqs } from '../data/siteData.js';

export default function Faq() {
  const [open, setOpen] = useState(0);

  useEffect(() => {
    const el = document.createElement('script');
    el.type = 'application/ld+json';
    el.id = 'faq-jsonld';
    el.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    });
    document.head.appendChild(el);
    return () => el.remove();
  }, []);

  return (
    <div className="faq">
      {faqs.map((f, i) => (
        <div className={`faq-item ${open === i ? 'open' : ''}`} key={f.q}>
          <button className="faq-q" type="button" aria-expanded={open === i} onClick={() => setOpen(open === i ? -1 : i)}>
            <span>{f.q}</span>
            <i className="bi bi-plus-lg"></i>
          </button>
          <div className="faq-a"><div><p>{f.a}</p></div></div>
        </div>
      ))}
    </div>
  );
}
