import { test, expect } from '@playwright/test';
for (const width of [390,1280]) {
 test(`vacinas: comparação e filtros em ${width}px`,async ({page})=>{
  await page.setViewportSize({width,height:900});
  await page.goto('/vacinas');
  await expect(page.getByRole('heading',{name:'Vacinas',exact:true})).toBeVisible();
  await page.getByRole('button',{name:'PNI · SUS',exact:true}).click();
  await expect(page.getByTestId('vaccine-menb')).toHaveCount(0);
  await page.getByLabel('Marco do calendário').selectOption('48');
  await expect(page.getByTestId('vaccine-vip')).toBeVisible();
  await expect(page.getByTestId('vaccine-dengue')).toHaveCount(0);
  await page.getByRole('button',{name:'SBIm',exact:true}).click();
  await expect(page.getByTestId('vaccine-dengue')).toBeVisible();
  await page.getByLabel('Buscar vacina ou tema').fill('Qdenga');
  await expect(page.locator('article')).toHaveCount(1);
  await page.getByText('Cuidados e diferenças do esquema',{exact:true}).click();
  await expect(page.getByText(/Não indicada antes dos 4 anos/)).toBeVisible();
  expect(await page.evaluate(()=>document.documentElement.scrollWidth <= innerWidth)).toBeTruthy();
  await page.screenshot({path:`artifacts/design/vacinas-${width}.png`,fullPage:true});
 });
}
