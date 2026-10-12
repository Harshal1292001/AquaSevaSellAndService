import React from 'react';
import { Writable } from 'node:stream';
import { renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App.jsx';

/** Renders the whole app for one URL and resolves with the HTML string. */
export function render(url) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    const sink = new Writable({
      write(chunk, _enc, cb) { chunks.push(Buffer.from(chunk)); cb(); },
    });
    sink.on('finish', () => resolve(Buffer.concat(chunks).toString('utf8')));
    const { pipe } = renderToPipeableStream(
      <React.StrictMode>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </React.StrictMode>,
      {
        onAllReady() { pipe(sink); }, // waits for lazy pages, then sends complete HTML
        onShellError: reject,
        onError(err) { console.error('SSR error on', url, err); },
      }
    );
  });
}
