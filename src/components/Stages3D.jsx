import { stages } from '../data/siteData.js';

/** Rotating 3D ring showing the stages inside an RO purifier (pure CSS 3D). */
export default function Stages3D() {
  return (
    <div className="ring-scene" aria-label="Stages of an RO water purifier">
      <div className="ring">
        {stages.map((s, i) => (
          <div className="ring-card" style={{ '--i': i }} key={s.title}>
            <i className={`bi ${s.icon}`}></i>
            <h6>{s.title}</h6>
            <p>{s.text}</p>
            <span className="ring-num">Stage {i + 1}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
