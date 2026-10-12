import { mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { randomUUID } from 'node:crypto';
import multer from 'multer';
import { fileTypeFromBuffer } from 'file-type';
import nodemailer from 'nodemailer';
import { z } from 'zod';
import { httpError } from './schemas.js';

export function rateLimit(db, namespace, max, duration = 60000) {
  return async (req, _res, next) => {
    const key = `${namespace}:${req.user?.id || req.ip}`;
    const { rows } = await db.query(`INSERT INTO request_limits(key,count,reset_at) VALUES($1,1,$2)
      ON CONFLICT(key) DO UPDATE SET count=CASE WHEN request_limits.reset_at<now() THEN 1 ELSE request_limits.count+1 END,
      reset_at=CASE WHEN request_limits.reset_at<now() THEN excluded.reset_at ELSE request_limits.reset_at END RETURNING count`,
      [key, new Date(Date.now() + duration)]);
    if (rows[0].count > max) throw httpError(429, 'Muitas solicitações. Aguarde e tente novamente.');
    next();
  };
}

export function installIntegrations(app, db, config, overrides = {}) {
  const upload = multer({ storage: multer.memoryStorage(), limits: { fileSize: 10 * 1024 * 1024, files: 1, fields: 0 } });
  app.post('/api/v1/uploads', (req, _res, next) => {
    if (!req.user) throw httpError(401, 'Entre para continuar.');
    if (req.user.role !== 'admin') throw httpError(403, 'Acesso restrito ao administrador.');
    next();
  }, rateLimit(db, 'upload', 20), upload.single('file'), async (req, res) => {
    if (!req.file) throw httpError(422, 'Selecione um arquivo.');
    const type = await fileTypeFromBuffer(req.file.buffer);
    if (!type || !['image/png','image/jpeg','image/webp','image/gif','application/pdf'].includes(type.mime)) throw httpError(422, 'Use PNG, JPEG, WebP, GIF ou PDF.');
    const filename = `${randomUUID()}.${type.ext}`;
    await mkdir(config.uploadDirectory, { recursive: true });
    await writeFile(join(config.uploadDirectory, filename), req.file.buffer, { flag: 'wx' });
    res.status(201).json({ file_url: '/uploads/' + filename });
  });
  const transport = overrides.mail || (config.smtpUrl && nodemailer.createTransport(config.smtpUrl));
  app.post('/api/v1/contact', rateLimit(db, 'contact', 5, 600000), async (req, res) => {
    const data = z.object({
      name: z.string().trim().min(1).max(200), email: z.string().email().max(320),
      institution: z.string().max(500).default(''), reason: z.string().max(200).default(''),
      message: z.string().trim().min(1).max(20000),
    }).strict().parse(req.body);
    const toEmail = config.contactTo || 'marina@pedbox.app';
    const fromEmail = config.mailFrom || 'PedBox <marina@pedbox.app>';

    // Archive message in database
    const msgId = 'msg_' + randomUUID().replace(/-/g, '').slice(0, 16);
    try {
      await db.query(
        `INSERT INTO contact_submissions(id, name, email, institution, reason, message, status, created_date, updated_date)
         VALUES($1, $2, $3, $4, $5, $6, 'unread', now(), now())`,
        [msgId, data.name, data.email, data.institution, data.reason, data.message]
      );
    } catch (_e) {}
    try {
      const noteTitle = `[Contato] ${data.reason ? `${data.reason} — ` : ''}${data.name}`.slice(0, 1000);
      const noteContent = `Nome: ${data.name}\nE-mail: ${data.email}\nInstituição: ${data.institution || '-'}\nMotivo: ${data.reason || '-'}\n\nMensagem:\n${data.message}`.slice(0, 200000);
      const notePayload = {
        titulo: noteTitle,
        conteudo: noteContent,
        cor: 'yellow',
      };
      await db.query(`INSERT INTO notes(id, user_id, data, created_date, updated_date)
        SELECT $1, id, $2::jsonb, now(), now()
        FROM users WHERE email = 'marina@pedbox.app' LIMIT 1`,
        [msgId, JSON.stringify(notePayload)]
      );
    } catch (_e) {
      // ignore archive failure
    }

    if (!transport || !config.contactTo || !config.mailFrom) throw httpError(503, 'Envio de e-mail ainda não configurado.');
    await transport.sendMail({
      from: fromEmail, to: toEmail, replyTo: data.email,
      subject: `[PedBox Contato] ${data.reason.replace(/[\r\n]/g, ' ')} — ${data.name.replace(/[\r\n]/g, ' ')}`,
      text: `Nome: ${data.name}\nE-mail: ${data.email}\nInstituição: ${data.institution}\nMotivo: ${data.reason}\n\n${data.message}`,
    });
    res.json({ ok: true });
  });
}
