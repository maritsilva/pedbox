import { z } from 'zod';
import { randomUUID } from 'node:crypto';
import { httpError } from './schemas.js';
import { rateLimit } from './integrations.js';

export function installAdmin(app, db, config) {
  const requireAdmin = (req, _res, next) => {
    if (!req.user) throw httpError(401, 'Entre para continuar.');
    if (req.user.role !== 'admin') throw httpError(403, 'Acesso restrito ao administrador.');
    next();
  };

  const hitSchema = z.object({
    path: z.string().trim().min(1).max(200),
    category: z.string().max(50).default('geral'),
    device: z.enum(['mobile', 'tablet', 'desktop']).default('desktop'),
  }).strict();

  // Public hit tracker
  app.post('/api/v1/analytics/hit', rateLimit(db, 'analytics', 200), async (req, res) => {
    const data = hitSchema.parse(req.body);
    const id = 'hit_' + randomUUID().replace(/-/g, '').slice(0, 16);
    try {
      await db.query(
        'INSERT INTO page_hits(id, path, category, device, created_date) VALUES($1, $2, $3, $4, now())',
        [id, data.path, data.category, data.device]
      );
    } catch (_err) {
      // Ignore background hit insert errors
    }
    res.json({ ok: true });
  });

  // Admin Analytics Overview
  app.get('/api/v1/admin/analytics', requireAdmin, async (req, res) => {
    const days = Math.min(Math.max(parseInt(req.query.days || '30', 10) || 30, 7), 90);

    const { rows: totalRows } = await db.query(
      `SELECT count(*)::int AS total FROM page_hits WHERE created_date >= now() - ($1 || ' days')::interval`,
      [days]
    );
    const totalHits = totalRows[0]?.total || 0;

    const { rows: todayRows } = await db.query(
      `SELECT count(*)::int AS today FROM page_hits WHERE created_date >= date_trunc('day', now())`
    );
    const todayHits = todayRows[0]?.today || 0;

    const { rows: weekRows } = await db.query(
      `SELECT count(*)::int AS week FROM page_hits WHERE created_date >= now() - interval '7 days'`
    );
    const weekHits = weekRows[0]?.week || 0;

    const { rows: dailyRows } = await db.query(
      `SELECT
         to_char(date_trunc('day', created_date), 'YYYY-MM-DD') AS day,
         count(*)::int AS total,
         count(*) FILTER (WHERE device = 'mobile')::int AS mobile,
         count(*) FILTER (WHERE device != 'mobile')::int AS desktop
       FROM page_hits
       WHERE created_date >= now() - ($1 || ' days')::interval
       GROUP BY 1
       ORDER BY 1 ASC`,
      [days]
    );

    const dailyMap = new Map(dailyRows.map(r => [r.day, r]));
    const dailyHits = [];
    const now = new Date();
    for (let i = days - 1; i >= 0; i--) {
      const d = new Date(now.getTime() - i * 86400000);
      const dayStr = d.toISOString().slice(0, 10);
      const existing = dailyMap.get(dayStr);
      dailyHits.push({
        date: dayStr,
        hits: existing?.total || 0,
        mobile: existing?.mobile || 0,
        desktop: existing?.desktop || 0,
      });
    }

    const { rows: topRoutes } = await db.query(
      `SELECT path, count(*)::int AS count
       FROM page_hits
       WHERE created_date >= now() - ($1 || ' days')::interval
       GROUP BY path
       ORDER BY count DESC
       LIMIT 12`,
      [days]
    );

    const { rows: deviceRows } = await db.query(
      `SELECT
         COALESCE(device, 'desktop') AS device,
         count(*)::int AS count
       FROM page_hits
       WHERE created_date >= now() - ($1 || ' days')::interval
       GROUP BY device`,
      [days]
    );
    const devices = { desktop: 0, mobile: 0, tablet: 0 };
    deviceRows.forEach(r => { devices[r.device] = r.count; });

    res.json({
      summary: {
        totalHits,
        todayHits,
        weekHits,
        days,
      },
      dailyHits,
      topRoutes,
      devices,
    });
  });

  // Admin Contacts Management
  app.get('/api/v1/admin/contacts', requireAdmin, async (req, res) => {
    const status = req.query.status || 'all';
    let query = 'SELECT id, name, email, institution, reason, message, status, created_date, updated_date FROM contact_submissions';
    const params = [];
    if (status && status !== 'all') {
      params.push(status);
      query += ` WHERE status = $${params.length}`;
    }
    query += ' ORDER BY created_date DESC LIMIT 100';

    const { rows } = await db.query(query, params);
    res.json({ items: rows });
  });

  app.patch('/api/v1/admin/contacts/:id', requireAdmin, async (req, res) => {
    const { id } = req.params;
    const body = z.object({
      status: z.enum(['unread', 'read', 'archived']),
    }).strict().parse(req.body);

    const { rows } = await db.query(
      'UPDATE contact_submissions SET status = $1, updated_date = now() WHERE id = $2 RETURNING *',
      [body.status, id]
    );
    if (!rows.length) throw httpError(404, 'Mensagem não encontrada.');
    res.json(rows[0]);
  });

  app.delete('/api/v1/admin/contacts/:id', requireAdmin, async (req, res) => {
    const { id } = req.params;
    await db.query('DELETE FROM contact_submissions WHERE id = $1', [id]);
    try {
      await db.query('DELETE FROM notes WHERE id = $1', [id]);
    } catch (_e) {}
    res.json({ ok: true });
  });

  // Admin Health & System Overview
  app.get('/api/v1/admin/health', requireAdmin, async (_req, res) => {
    const start = Date.now();
    await db.query('SELECT 1');
    const latencyMs = Date.now() - start;

    const { rows: unreadCountRows } = await db.query(
      "SELECT count(*)::int AS count FROM contact_submissions WHERE status = 'unread'"
    );
    const unreadContacts = unreadCountRows[0]?.count || 0;

    res.json({
      database: {
        connected: true,
        latencyMs,
      },
      services: {
        gemini: Boolean(process.env.GEMINI_API_KEY),
        smtp: Boolean(config.smtpUrl && config.contactTo),
        drive: true,
      },
      catalog: {
        condutas: {
          total: 59,
          neonatologia: 29,
          cirurgiaPediatrica: 30,
        },
        calculators: {
          total: 36,
          interactiveTools: 48,
        },
      },
      unreadContacts,
      system: {
        uptime: process.uptime(),
        nodeVersion: process.version,
        timestamp: new Date().toISOString(),
      },
    });
  });

  // Public SEO Settings (for Google Search Console tag and GA4 script loading)
  app.get('/api/v1/public/seo-settings', async (_req, res) => {
    try {
      const { rows } = await db.query(
        "SELECT key, value FROM platform_settings WHERE key IN ('google_site_verification', 'google_analytics_id')"
      );
      const settings = {};
      rows.forEach(r => { settings[r.key] = r.value; });
      res.json({
        googleSiteVerification: settings.google_site_verification || '',
        googleAnalyticsId: settings.google_analytics_id || '',
      });
    } catch (_err) {
      res.json({ googleSiteVerification: '', googleAnalyticsId: '' });
    }
  });

  // Admin Platform Settings (Google Search Console & Google Analytics)
  app.get('/api/v1/admin/settings', requireAdmin, async (_req, res) => {
    const { rows } = await db.query('SELECT key, value FROM platform_settings');
    const settings = {};
    rows.forEach(r => { settings[r.key] = r.value; });
    res.json({
      googleSiteVerification: settings.google_site_verification || '',
      googleAnalyticsId: settings.google_analytics_id || '',
    });
  });

  app.patch('/api/v1/admin/settings', requireAdmin, async (req, res) => {
    const body = z.object({
      googleSiteVerification: z.string().trim().max(500).optional(),
      googleAnalyticsId: z.string().trim().max(100).optional(),
    }).strict().parse(req.body);

    if (body.googleSiteVerification !== undefined) {
      await db.query(
        `INSERT INTO platform_settings(key, value, updated_date) VALUES('google_site_verification', $1, now())
         ON CONFLICT (key) DO UPDATE SET value = EXCLUDED.value, updated_date = now()`,
        [body.googleSiteVerification]
      );
    }
    if (body.googleAnalyticsId !== undefined) {
      await db.query(
        `INSERT INTO platform_settings(key, value, updated_date) VALUES('google_analytics_id', $1, now())
         ON CONFLICT (key) DO UPDATE SET value = EXCLUDED.value, updated_date = now()`,
        [body.googleAnalyticsId]
      );
    }
    res.json({ ok: true });
  });
}
