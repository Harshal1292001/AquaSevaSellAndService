import { useRef } from 'react';

/** 3D tilt-on-hover wrapper with a moving light glare. */
export default function TiltCard({ children, className = '', max = 9 }) {
  const ref = useRef(null);

  const move = (e) => {
    const el = ref.current;
    if (!el) return; // card may already be unmounted (touch devices fire late mouse events)
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateX(${-y * max}deg) rotateY(${x * max}deg)`;
    el.style.setProperty('--gx', `${(x + 0.5) * 100}%`);
    el.style.setProperty('--gy', `${(y + 0.5) * 100}%`);
  };
  const leave = () => { if (ref.current) ref.current.style.transform = ''; };

  return (
    <div ref={ref} className={`tilt ${className}`} onMouseMove={move} onMouseLeave={leave}>
      {children}
      <span className="tilt-glare" aria-hidden="true" />
    </div>
  );
}
