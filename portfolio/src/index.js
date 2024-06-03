import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import SEO from '../src/components/SEO';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SEO />
    <App />
  </React.StrictMode>
);

reportWebVitals();
