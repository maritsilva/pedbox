import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App.jsx'
import '@/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)

// Versioned public shell only. Never erase unrelated origin caches.
if ('serviceWorker' in navigator) {
  if (import.meta.env.PROD) {
    window.addEventListener('load', () => navigator.serviceWorker.register('/sw.js').catch(console.error));
  } else {
    navigator.serviceWorker.getRegistrations().then(regs => {
      regs.filter(reg => reg.active?.scriptURL === new URL('/sw.js', location.origin).href).forEach(reg => reg.unregister());
    });
  }
}
