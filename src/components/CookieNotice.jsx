import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const KEY = 'asv-cookie-ok';

export default function CookieNotice() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try { if (!localStorage.getItem(KEY)) setShow(true); } catch (e) { setShow(true); }
  }, []);

  const accept = () => {
    try { localStorage.setItem(KEY, '1'); } catch (e) { /* ignore */ }
    setShow(false);
  };

  // lets CSS move other floating buttons out of the way while the notice is visible
  useEffect(() => {
    document.body.classList.toggle('has-cookie', show);
    return () => document.body.classList.remove('has-cookie');
  }, [show]);

  if (!show) return null;
  return (
    <div className="cookie" role="dialog" aria-label="Cookie notice">
      <p className="mb-2">We use cookies to improve your browsing experience. See our <Link to="/privacy-policy">Privacy Policy</Link>.</p>
      <button className="btn btn-brand btn-sm rounded-pill px-3" onClick={accept}>Got it</button>
    </div>
  );
}
