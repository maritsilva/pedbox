import 'dotenv/config';
import { pathToFileURL } from 'node:url';

// Pure checks: never connect to providers or include configuration values in output.
export function productionPreflight(env) {
  const checks = [];
  const add = (id, status, message) => checks.push({ id, status, message });
  const validUrl = (value, protocols) => {
    try { const url = new URL(value); return protocols.includes(url.protocol) ? url : null; }
    catch { return null; }
  };
  add('mode', env.NODE_ENV === 'production' ? 'ok' : 'error', 'NODE_ENV deve ser production.');
  const origin = validUrl(env.APP_ORIGIN, ['https:']);
  add('origin', origin && !origin.username && !origin.password && origin.pathname === '/' && !origin.search && !origin.hash ? 'ok' : 'error', 'APP_ORIGIN deve ser uma origem HTTPS, sem caminho, credenciais ou parâmetros.');
  const database = validUrl(env.DATABASE_URL, ['postgres:', 'postgresql:']);
  add('database', database?.hostname && database.pathname.length > 1 ? 'ok' : 'error', 'DATABASE_URL deve apontar para um banco PostgreSQL nomeado. A conexão será validada na homologação.');
  add('development-login', env.DEV_AUTH !== 'true' ? 'ok' : 'error', 'O login local precisa estar desativado em produção.');
  const integer = (value, min, max) => /^\d+$/.test(String(value)) && Number(value) >= min && Number(value) <= max;
  add('port', integer(env.PORT || '3001', 1, 65535) ? 'ok' : 'error', 'PORT deve ser um inteiro entre 1 e 65535.');
  add('proxy', integer(env.TRUST_PROXY_HOPS || '0', 0, 10) ? 'ok' : 'error', 'TRUST_PROXY_HOPS deve ser um inteiro entre 0 e 10, conforme a infraestrutura.');
  add('uploads', env.UPLOAD_DIR?.startsWith('/') ? 'ok' : 'error', 'UPLOAD_DIR deve ser absoluto e estar no volume persistente. Permissões e persistência exigem homologação.');
  const oidc = [env.OIDC_ISSUER, env.OIDC_CLIENT_ID, env.OIDC_CLIENT_SECRET];
  if (oidc.every(Boolean)) {
    const issuer = validUrl(env.OIDC_ISSUER, ['https:']);
    add('login', issuer && !issuer.username && !issuer.password ? 'ok' : 'error', 'OIDC_ISSUER deve usar HTTPS sem credenciais no endereço. Testar o login com o provedor na homologação.');
  } else add('login', oidc.some(Boolean) ? 'error' : 'warning', 'Login indisponível até configurar OIDC_ISSUER, OIDC_CLIENT_ID e OIDC_CLIENT_SECRET juntos.');
  const mail = [env.SMTP_URL, env.MAIL_FROM, env.CONTACT_TO];
  add('mail', mail.every(Boolean) ? (validUrl(env.SMTP_URL, ['smtp:', 'smtps:']) ? 'ok' : 'error') : 'warning', 'E-mail exige SMTP_URL válido, MAIL_FROM e CONTACT_TO; entrega depende de teste real.');
  add('ai', env.ANTHROPIC_API_KEY && env.ANTHROPIC_MODEL ? 'ok' : 'warning', 'IA exige chave e modelo configurados; disponibilidade depende de teste real.');
  return { readyForHomologation: !checks.some(c => c.status === 'error'), checks,
    limitation: 'Checagem estática: não valida conexão, cobrança, autenticação, backup, restauração nem aprovação clínica.' };
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const result = productionPreflight(process.env);
  console.log(JSON.stringify(result, null, 2));
  process.exitCode = result.readyForHomologation ? 0 : 1;
}
