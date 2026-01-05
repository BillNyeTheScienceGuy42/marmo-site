import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { BrowserRouter, useNavigate } from 'react-router-dom'
import App from './App'
import React from 'react';

// Handles redirect from 404.html fallback for SPA routing
function RedirectOnLoad({ children }) {
  const navigate = useNavigate();
  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const preservedPath = params.get('p');
    if (preservedPath) {
      navigate(preservedPath + window.location.hash, { replace: true });
    }
  }, [navigate]);
  return children;
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <RedirectOnLoad>
        <App />
      </RedirectOnLoad>
    </BrowserRouter>
  </StrictMode>,
)
