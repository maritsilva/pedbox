import {test} from 'node:test';
import assert from 'node:assert/strict';
import {productionPreflight} from '../scripts/preflight.js';
const valid = {NODE_ENV:'production', APP_ORIGIN:'https://example.org', DATABASE_URL:'postgresql://user:private-password@database/pedbox', UPLOAD_DIR:'/app/.data/uploads', DEV_AUTH:'false', PORT:'3001', TRUST_PROXY_HOPS:'1'};
test('valid base deployment distinguishes unconfigured integrations from readiness', () => {
 const report = productionPreflight(valid);
 assert.equal(report.readyForHomologation,true);
 assert.deepEqual(report.checks.filter(c=>c.status==='warning').map(c=>c.id),['login','mail','ai']);
 assert.ok(report.limitation.includes('não valida'));
});
test('rejects unsafe or malformed production configuration', () => {
 for(const overrides of [{APP_ORIGIN:'http://example.org'}, {APP_ORIGIN:'https://example.org/path'}, {DATABASE_URL:'https://example.org/db'}, {DATABASE_URL:'postgres://host'}, {DEV_AUTH:'true'}, {PORT:'NaN'}, {TRUST_PROXY_HOPS:'-1'}, {UPLOAD_DIR:'./uploads'}, {OIDC_CLIENT_ID:'only-one-field'}]) {
  assert.equal(productionPreflight({...valid,...overrides}).readyForHomologation,false,JSON.stringify(Object.keys(overrides)));
 }
});
test('reports never expose secrets, including malformed provider URLs', () => {
 const secret='NEVER_PRINT_THIS';
 const report=productionPreflight({...valid,DATABASE_URL:secret,OIDC_ISSUER:secret,OIDC_CLIENT_ID:secret,OIDC_CLIENT_SECRET:secret,SMTP_URL:secret,MAIL_FROM:secret,CONTACT_TO:secret,ANTHROPIC_API_KEY:secret,ANTHROPIC_MODEL:secret});
 assert.equal(JSON.stringify(report).includes(secret),false);
 assert.equal(report.readyForHomologation,false);
});
