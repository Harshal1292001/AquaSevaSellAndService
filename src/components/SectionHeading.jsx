import Reveal from './Reveal.jsx';

export default function SectionHeading({ title, sub, center = true, light = false }) {
  return (
    <Reveal className={`mb-5 ${center ? 'text-center' : ''}`}>
      <h2 className={`section-title ${center ? 'is-center' : ''} ${light ? 'text-white' : ''}`}>{title}</h2>
      {sub && <p className={`mb-0 ${light ? 'text-white-50' : 'text-muted'}`}>{sub}</p>}
    </Reveal>
  );
}
