import { resolve } from 'node:path';

export function configFromEnv(env = process.env) {
  const production = env.NODE_ENV === 'production';
  const origin = new URL(env.APP_ORIGIN || 'http://localhost:5173').origin;
  const local = ['localhost', '127.0.0.1', '[::1]'].includes(new URL(origin).hostname);
  if (production && !origin.startsWith('https://')) throw new Error('APP_ORIGIN deve usar HTTPS em produção');
  if (production && !env.DATABASE_URL) throw new Error('DATABASE_URL obrigatório em produção');
  if (env.DEV_AUTH === 'true' && (production || !local)) throw new Error('DEV_AUTH é permitido apenas em desenvolvimento local');
  return {
    production, origin, port: Number(env.PORT || 3001), host: env.HOST || '127.0.0.1',
    trustProxyHops: Number(env.TRUST_PROXY_HOPS || 0),
    databaseUrl: env.DATABASE_URL, databaseDirectory: env.DATA_DIR || '.data/postgres',
    uploadDirectory: resolve(env.UPLOAD_DIR || '.data/uploads'),
    devAuth: env.DEV_AUTH === 'true',
    oidcIssuer: env.OIDC_ISSUER, oidcClientId: env.OIDC_CLIENT_ID, oidcClientSecret: env.OIDC_CLIENT_SECRET,
    smtpUrl: env.SMTP_URL || (production ? 'smtp://pedbox.app:NWGhtLs7fvupCNYN@mail.smtp2go.com:2525' : undefined),
    mailFrom: env.MAIL_FROM || (production ? 'marina@pedbox.app' : undefined),
    contactTo: env.CONTACT_TO || (production ? 'marina@pedbox.app' : undefined),
    anthropicKey: env.ANTHROPIC_API_KEY, anthropicModel: env.ANTHROPIC_MODEL,
    rcpchKey: env.RCPCH_API_KEY,
    webSearch: env.AI_WEB_SEARCH === 'true',
  };
}
