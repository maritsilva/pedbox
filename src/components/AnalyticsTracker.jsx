import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { services } from '@/api/services';

function getCategory(path) {
  if (path.startsWith('/calculadoras') || path.startsWith('/curvas-crescimento') || path.startsWith('/hidratacao') || path.startsWith('/imc') || path.startsWith('/pressao') || path.startsWith('/apgar') || path.startsWith('/glasgow') || path.startsWith('/pews') || path.startsWith('/sipa') || path.startsWith('/silverman') || path.startsWith('/rodwell') || path.startsWith('/pas-asma') || path.startsWith('/centor') || path.startsWith('/pram') || path.startsWith('/wood')) {
    return 'calculadora';
  }
  if (path.startsWith('/guia') || path.startsWith('/dosagens') || path.startsWith('/drogas')) {
    return 'guia';
  }
  if (path.startsWith('/biblioteca') || path.startsWith('/condutas') || path.startsWith('/protocolos') || path.startsWith('/documentos')) {
    return 'conduta';
  }
  if (path.startsWith('/vacinas')) {
    return 'vacina';
  }
  if (path.startsWith('/sinais-vitais') || path.startsWith('/amamentacao') || path.startsWith('/desenvolvimento') || path.startsWith('/horas-de-vida') || path.startsWith('/idade-gestacional') || path.startsWith('/alvo-parental') || path.startsWith('/ictericia')) {
    return 'ferramenta';
  }
  return 'geral';
}

function getDevice() {
  if (typeof navigator === 'undefined') return 'desktop';
  const ua = navigator.userAgent || '';
  if (/iPad|Tablet/i.test(ua)) return 'tablet';
  if (/Mobi|Android|iPhone/i.test(ua)) return 'mobile';
  return 'desktop';
}

export default function AnalyticsTracker() {
  const location = useLocation();
  const lastTracked = useRef('');

  useEffect(() => {
    const path = location.pathname;
    // Don't track administrative or login screens
    if (!path || path.startsWith('/admin') || path.startsWith('/login')) return;
    if (lastTracked.current === path) return;
    lastTracked.current = path;

    const timer = setTimeout(() => {
      try {
        const category = getCategory(path);
        const device = getDevice();
        services.analytics.hit(path, category, device).catch(() => {});
      } catch {
        // Ignore analytics reporting failures
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return null;
}
