import express from 'express';
import { installGrowth } from './growth.js';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import { resolve } from 'node:path';
import { existsSync } from 'node:fs';
import { ZodError } from 'zod';
import { installAuth, sessionMiddleware } from './auth.js';
import { installCollections } from './collections.js';
import { installIntegrations, rateLimit } from './integrations.js';
import { installResearch } from './research.js';
import { installAdmin } from './admin.js';

export function createApp({ db, config, integrations = {}, serveFrontend = false }) {
  const app = express();
  app.disable('x-powered-by');
  // Only enable behind a known number of proxies, with no public direct API port.
  app.set('trust proxy', config.trustProxyHops || false);
  app.use(helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "'unsafe-inline'", 'https://accounts.google.com', 'https://www.googletagmanager.com'],
        styleSrc: ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com', 'https://accounts.google.com'],
        fontSrc: ["'self'", 'https://fonts.gstatic.com', 'data:'],
        imgSrc: ["'self'", 'data:', 'blob:', 'https://*.googleusercontent.com', 'https://www.googletagmanager.com'],
        connectSrc: [
          "'self'",
          'https://accounts.google.com',
          'https://www.google-analytics.com',
          'https://*.analytics.google.com',
          'https://*.googletagmanager.com',
        ],
        frameSrc: ["'self'", 'https://drive.google.com', 'https://docs.google.com', 'https://accounts.google.com'],
        objectSrc: ["'none'"],
        baseUri: ["'self'"],
        upgradeInsecureRequests: config.production ? [] : null,
      },
    },
    strictTransportSecurity: config.production ? undefined : false,
  }));
  app.use(cookieParser());
  app.use('/api', (_req, res, next) => { res.set('Cache-Control', 'no-store'); next(); });
  app.use('/api', (req, res, next) => {
    if (!['GET','HEAD','OPTIONS'].includes(req.method) && req.get('origin') !== config.origin) return res.status(403).json({ error: 'Origem inválida.' });
    next();
  });
  app.use(express.json({ limit: '2mb' }));
  app.get('/api/v1/health', async (_req, res) => { await db.query('SELECT 1'); res.json({ status: 'ok' }); });
  app.use('/api', sessionMiddleware(db));
  app.use('/api/v1/auth', rateLimit(db, 'auth', 30, 600000));
  app.use('/api/v1/me', rateLimit(db, 'me', 60, 60000));
  installAuth(app, db, config);
  app.use('/api', rateLimit(db, 'api', 300));
  installCollections(app, db);
  installIntegrations(app, db, config, integrations);
  installResearch(app, db, config, integrations);
  installGrowth(app, db, config, integrations);
  installAdmin(app, db, config);
  app.use('/api', (_req, res) => res.status(404).json({ error: 'Endpoint não encontrado.' }));
  app.use('/uploads', express.static(config.uploadDirectory, { dotfiles: 'deny', immutable: true, maxAge: '1y',
    setHeaders(res) { res.set('Content-Security-Policy', "default-src 'none'; sandbox"); } }));
  if (serveFrontend) {
    const dist = resolve('dist');
    app.use(express.static(dist, { setHeaders(res, path) { if (path.endsWith('.html') || path.endsWith('sw.js')) res.set('Cache-Control', 'no-cache'); } }));
    app.get('/robots.txt', (_req, res) => {
      const p = existsSync(resolve(dist, 'robots.txt')) ? resolve(dist, 'robots.txt') : resolve('public/robots.txt');
      res.type('text/plain').sendFile(p);
    });
    app.get('/sitemap.xml', (_req, res) => {
      const p = existsSync(resolve(dist, 'sitemap.xml')) ? resolve(dist, 'sitemap.xml') : resolve('public/sitemap.xml');
      res.type('application/xml').sendFile(p);
    });
    app.get('/{*path}', (req, res, next) => req.accepts('html') ? res.sendFile(resolve(dist, 'index.html')) : next());
  }
  app.use((error, _req, res, _next) => {
    if (res.headersSent) return res.end();
    const status = error instanceof ZodError ? 422 : error.code === 'LIMIT_FILE_SIZE' ? 413 : error.status || 500;
    if (status >= 500) console.error('API failure:', error.name, error.code || 'internal');
    res.status(status).json({ error: error instanceof ZodError ? 'Dados inválidos.' : status < 500 || status === 503 ? error.message : 'Falha interna. Tente novamente.' });
  });
  return app;
}
