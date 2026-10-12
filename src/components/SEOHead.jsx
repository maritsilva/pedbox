import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { SEO_PAGES, BASE_URL, DEFAULT_OG_IMAGE, generateSchemaLD } from '@/lib/seoConfig';
import { services } from '@/api/services';

function updateMetaTag(nameOrProperty, key, value) {
  let element = document.querySelector(`meta[${key}="${nameOrProperty}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(key, nameOrProperty);
    document.head.appendChild(element);
  }
  element.setAttribute('content', value);
}

function updateLinkCanonical(href) {
  let element = document.querySelector('link[rel="canonical"]');
  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', 'canonical');
    document.head.appendChild(element);
  }
  element.setAttribute('href', href);
}

function updateJsonLd(schemaData) {
  let script = document.getElementById('pedbox-seo-schema');
  if (!script) {
    script = document.createElement('script');
    script.id = 'pedbox-seo-schema';
    script.type = 'application/ld+json';
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(schemaData);
}

function setGoogleSiteVerification(code) {
  if (!code) return;
  let cleaned = code.trim();
  const match = cleaned.match(/content=["']([^"']+)["']/i);
  if (match) cleaned = match[1];
  updateMetaTag('google-site-verification', 'name', cleaned);
}

function loadGoogleAnalytics(measurementId) {
  if (!measurementId || document.getElementById('pedbox-ga4-script')) return;
  const script = document.createElement('script');
  script.id = 'pedbox-ga4-script';
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', measurementId);
}

export default function SEOHead() {
  const location = useLocation();
  const gaIdRef = useRef('');

  // Fetch and apply dynamic platform SEO settings (Google Search Console & GA4)
  useEffect(() => {
    services.publicSeo.getSettings()
      .then(settings => {
        if (settings?.googleSiteVerification) {
          setGoogleSiteVerification(settings.googleSiteVerification);
        }
        if (settings?.googleAnalyticsId) {
          gaIdRef.current = settings.googleAnalyticsId;
          loadGoogleAnalytics(settings.googleAnalyticsId);
        }
      })
      .catch((err) => {
        console.error('Falha ao carregar configurações públicas de SEO:', err);
      });
  }, []);

  // Update route SEO metadata on every page navigation
  useEffect(() => {
    const path = location.pathname;
    const isPrivate = ['/admin', '/settings', '/perfil', '/favoritos', '/login'].some(p => path.startsWith(p));

    if (isPrivate) {
      document.title = 'PedBox | Área Restrita';
      updateMetaTag('robots', 'name', 'noindex, nofollow');
      return;
    }

    const page = SEO_PAGES[path] || SEO_PAGES['/'];
    const fullUrl = `${BASE_URL}${path === '/' ? '' : path}`;

    // 1. Page Title
    document.title = page.title;

    // 2. Primary Meta Tags
    updateMetaTag('description', 'name', page.description);
    if (page.keywords?.length) {
      updateMetaTag('keywords', 'name', page.keywords.join(', '));
    }
    updateMetaTag('robots', 'name', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');

    // 3. Canonical Link
    updateLinkCanonical(fullUrl);

    // 4. Open Graph (Facebook, WhatsApp, LinkedIn)
    updateMetaTag('og:title', 'property', page.title);
    updateMetaTag('og:description', 'property', page.description);
    updateMetaTag('og:url', 'property', fullUrl);
    updateMetaTag('og:image', 'property', DEFAULT_OG_IMAGE);
    updateMetaTag('og:type', 'property', 'website');
    updateMetaTag('og:site_name', 'property', 'PedBox');
    updateMetaTag('og:locale', 'property', 'pt_BR');

    // 5. Twitter Card
    updateMetaTag('twitter:card', 'name', 'summary_large_image');
    updateMetaTag('twitter:title', 'name', page.title);
    updateMetaTag('twitter:description', 'name', page.description);
    updateMetaTag('twitter:image', 'name', DEFAULT_OG_IMAGE);

    // 6. Schema.org JSON-LD Structured Data
    try {
      const schema = generateSchemaLD(path);
      updateJsonLd(schema);
    } catch {
      // Ignore JSON-LD generation errors
    }

    // 7. Track GA4 page view if configured
    if (typeof window.gtag === 'function' && gaIdRef.current) {
      try {
        window.gtag('event', 'page_view', {
          page_path: path,
          page_title: page.title,
        });
      } catch {}
    }
  }, [location.pathname]);

  return null;
}
