import { Link } from 'react-router-dom';
import { site } from '../data/siteData.js';

/** Sticky bottom action bar – only visible on phones. */
export default function MobileBar() {
  return (
    <div className="mobile-bar" role="navigation" aria-label="Quick actions">
      <a href={`tel:${site.phone}`} className="mb-call"><i className="bi bi-telephone-fill"></i><span>Call</span></a>
      <a href={`https://wa.me/${site.phoneRaw}`} target="_blank" rel="noreferrer" className="mb-wa"><i className="bi bi-whatsapp"></i><span>WhatsApp</span></a>
      <Link to="/enquiry" className="mb-book"><i className="bi bi-chat-left-text"></i><span>Enquiry</span></Link>
    </div>
  );
}
