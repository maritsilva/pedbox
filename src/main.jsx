import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App.jsx'
import '@/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)

// Register Service Worker for offline support (production only)
if ('serviceWorker' in navigator) {
  if (import.meta.env.PROD) {
    window.addEventListener('load', async () => {
      // Clear all caches first to avoid stale React chunks causing hook errors
      if (window.caches) {
        const keys = await caches.keys();
        await Promise.all(keys.map(k => caches.delete(k)));
      }
      // Unregister old SWs, then register fresh
      const regs = await navigator.serviceWorker.getRegistrations();
      await Promise.all(regs.map(r => r.unregister()));
      navigator.serviceWorker.register('/sw.js').catch(() => {});
    });
  } else {
    // In dev, always unregister any stale service workers
    navigator.serviceWorker.getRegistrations().then(regs => {
      regs.forEach(r => r.unregister());
    });
    if (window.caches) {
      caches.keys().then(keys => keys.forEach(k => caches.delete(k)));
    }
  }
}