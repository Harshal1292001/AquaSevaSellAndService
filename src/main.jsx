import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './styles/custom.css';
import App from './App.jsx';

const app = (
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

const rootEl = document.getElementById('root');
// Pages are pre-built into real HTML at build time; React "hydrates" them.
// During `npm run dev` the root is empty, so we render normally.
if (rootEl.hasChildNodes()) ReactDOM.hydrateRoot(rootEl, app);
else ReactDOM.createRoot(rootEl).render(app);
