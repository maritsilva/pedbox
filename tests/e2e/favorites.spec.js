import {test,expect} from '@playwright/test';
test('favorites filter by type, accept unaccented search and recover from no results', async ({page}) => {
 const headers={Origin:'http://127.0.0.1:4173'};
 await page.goto('/login');
 await page.getByRole('button',{name:'Entrar no ambiente local'}).click();
 await expect(page).toHaveURL('/');
 const items=[{tipo:'ferramenta',chave:'/sinais-vitais'},{tipo:'dosagem',chave:'paracetamol'},{tipo:'ferramenta',chave:'protocolo-crise-asmatica'}];
 for(const data of items) expect((await page.request.post('/api/v1/favorites',{headers,data})).ok()).toBe(true);
 try {
  await page.goto('/favoritos');
  await expect(page.getByRole('heading',{name:'Paracetamol',exact:true})).toBeVisible();
  await page.getByRole('button',{name:'Protocolos',exact:true}).click();
  await expect(page.getByRole('heading',{name:'Paracetamol',exact:true})).toHaveCount(0);
  await expect(page.getByRole('heading',{name:'Crise Asmática',exact:true})).toBeVisible();
  await page.getByLabel('Buscar favoritos').fill('asmatica');
  await expect(page.getByRole('heading',{name:'Crise Asmática',exact:true})).toBeVisible();
  await page.getByLabel('Buscar favoritos').fill('zzzinexistente');
  await expect(page.getByText('Nenhum favorito corresponde aos filtros.')).toBeVisible();
  await expect(page.getByLabel('Buscar favoritos')).toBeVisible();
  await page.getByRole('button',{name:'Limpar filtros',exact:true}).click();
  await expect(page.getByRole('heading',{name:'Paracetamol',exact:true})).toBeVisible();
  await page.getByRole('button',{name:'Medicamentos',exact:true}).click();
  await expect(page.getByRole('heading',{name:'Crise Asmática',exact:true})).toHaveCount(0);
  await page.getByRole('button',{name:'Remover Paracetamol dos favoritos',exact:true}).click();
  await expect(page.getByRole('heading',{name:'Paracetamol',exact:true})).toHaveCount(0);
 } finally {for(const data of items) await page.request.delete('/api/v1/favorites',{headers,data});}
});
