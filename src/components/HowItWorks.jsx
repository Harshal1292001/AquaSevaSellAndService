import { useState } from 'react';
import { steps } from '../data/siteData.js';
import Reveal from './Reveal.jsx';

export default function HowItWorks() {
  const [flipped, setFlipped] = useState(-1);
  return (
    <div className="row g-4">
      {steps.map((s, i) => (
        <Reveal key={s.title} className="col-sm-6 col-lg-3" delay={i * 80}>
          <button
            type="button"
            className={`flip ${flipped === i ? 'is-flipped' : ''}`}
            aria-pressed={flipped === i}
            aria-label={`Step ${i + 1}: ${s.title}. ${s.text}`}
            onClick={() => setFlipped(flipped === i ? -1 : i)}
          >
            <span className="flip-in">
              <span className="flip-face flip-front">
                <span className="flip-step">{i + 1}</span>
                <i className={`bi ${s.icon}`}></i>
                <span className="flip-h">{s.title}</span>
                <small>Tap to read</small>
              </span>
              <span className="flip-face flip-back">
                <span className="flip-h">{s.title}</span>
                <span className="flip-p">{s.text}</span>
              </span>
            </span>
          </button>
        </Reveal>
      ))}
    </div>
  );
}
