import { test, expect } from '@playwright/test';

test('public tools run without Base44 and no JavaScript crashes', async ({ page }) => {
  const failures = [], vendor = [];
  page.on('pageerror', error => failures.push(error.message));
  page.on('request', req => { if (/base44/i.test(req.url())) vendor.push(req.url()); });
  const routes = ['/', '/guia','/dosagens','/calculadoras','/hidratacao','/imc','/pressao-arterial','/perimetro-cefalico',
    '/alvo-parental','/idade-gestacional-corrigida','/centor-mcisaac','/vacinas','/desenvolvimento','/wood-downes','/pram',
    '/drogas-emergencia','/calculadoras-hub','/apgar','/glasgow-pediatrico','/pews','/sipa','/silverman-anderson',
    '/rodwell','/pas-asma','/favoritos','/ferramentas','/biblioteca','/curvas-crescimento','/sinais-vitais','/rastreio-preventivo','/contact','/contato'];
  for (const route of routes) {
    await page.goto(route);
    await expect(page.locator('#root')).not.toBeEmpty();
  }
  expect(failures).toEqual([]); expect(vendor).toEqual([]);
});

test('login, notes UI, persistence, admin authorization and logout', async ({ page }) => {
  await page.goto('/admin');
  await expect(page).toHaveURL(/\/login\?/);
  await page.getByRole('button', { name: 'Entrar no ambiente local' }).click();
  await expect(page).toHaveURL('/admin');
  await page.goto('/biblioteca');
  await page.getByRole('button', { name: /Anotações/ }).first().click();
  await page.getByRole('button', { name: /Nova Anotação/i }).click();
  const title = 'Anotação e2e ' + Date.now();
  await page.getByPlaceholder('Título *', { exact: true }).fill(title);
  await page.getByRole('button', { name: 'Salvar', exact: true }).click();
  await expect(page.getByText(title, { exact: true })).toBeVisible();
  await page.reload();
  await page.getByRole('button', { name: /Anotações/ }).first().click();
  await expect(page.getByText(title, { exact: true })).toBeVisible();
  await page.goto('/pesquisa');
  await expect(page.getByRole('alert')).toContainText('ainda não foi configurada');
  await page.goto('/settings');
  await page.getByRole('button', { name: 'Sair', exact: true }).click();
  await expect(page).toHaveURL('/');
  await page.goto('/admin');
  await expect(page).toHaveURL(/\/login\?/);
});

test('offline shell works and private API responses are never cached', async ({ page, context }) => {
  await page.goto('/imc');
  await page.evaluate(() => navigator.serviceWorker.ready);
  await page.reload();
  await page.waitForFunction(() => !!navigator.serviceWorker.controller);
  await page.goto('/login');
  await page.getByRole('button',{ name:'Entrar no ambiente local' }).click();
  await expect(page).toHaveURL('/');
  await page.goto('/biblioteca');
  await page.getByRole('button',{ name:/Anotações/ }).first().click();
  const cached = await page.evaluate(async () => {
    const keys = await caches.keys();
    return (await Promise.all(keys.map(async key => (await (await caches.open(key)).keys()).map(r=>r.url)))).flat();
  });
  expect(cached.some(url=>url.includes('/api/'))).toBe(false);
  await context.setOffline(true);
  await page.goto('/imc');
  await expect(page.locator('#root')).not.toBeEmpty();
  await expect(page.locator('body')).toContainText('IMC');
  await context.setOffline(false);
});
