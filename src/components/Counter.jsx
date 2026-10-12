import { useEffect, useRef, useState } from 'react';

export default function Counter({ to, suffix = '', duration = 1800 }) {
  const ref = useRef(null);
  const [v, setV] = useState(0);

  useEffect(() => {
    const el = ref.current;
    let raf;
    const run = () => {
      const start = performance.now();
      const tick = (now) => {
        const p = Math.min((now - start) / duration, 1);
        setV(Math.round(to * (1 - Math.pow(1 - p, 3))));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { run(); io.disconnect(); }
    }, { threshold: 0.4 });
    io.observe(el);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
  }, [to, duration]);

  return <span ref={ref}>{v.toLocaleString('en-IN')}{suffix}</span>;
}
