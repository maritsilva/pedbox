import {test,expect} from '@playwright/test';
import {readFileSync} from 'node:fs';
const fixture=name=>JSON.parse(readFileSync(new URL(`../fixtures/growth/${name}.json`,import.meta.url)));
test.beforeEach(async({page})=>{
 await page.route('**/api/v1/growth/charts?**',async route=>{
  const u=new URL(route.request().url()),ref=u.searchParams.get('reference'),type=u.searchParams.get('type');
  const raw=fixture((ref==='who'?'who':'cdc')+'-chart');
  for(const segment of raw.centile_data)for(const sexes of Object.values(segment))for(const data of Object.values(sexes))if(data)data[type]=data.bmi;
  await route.fulfill({json:raw});
 });
 await page.route('**/api/v1/growth/measurements',async route=>{
  const f=route.request().postDataJSON();const bmi=f.weight/(f.height/100)**2;
  await route.fulfill({json:{...f,date:f.measureDate,age:f.measureDate==='2024-01-01'?8:9,ageMonths:108,bmi,scores:{bmi:{z:1.1,percentile:87},height:{z:0,percentile:50},weight:{z:0,percentile:50}},raw:{bmi:fixture(f.reference+'-bmi')}}});
 });
});
test('growth workspace retains exact measurements, plots points and isolates patient references',async({page})=>{
 const failures=[];page.on('pageerror',e=>failures.push(e.message));
 await page.goto('/imc');
 await page.getByLabel('Nascimento',{exact:true}).fill('2016-01-01');
 await page.getByLabel('Data da medição',{exact:true}).fill('2024-01-01');
 await page.getByLabel('Altura (cm)',{exact:true}).fill('120');
 await page.getByLabel('Peso (kg)',{exact:true}).fill('25,5');
 await page.getByRole('button',{name:'Calcular e adicionar ao gráfico'}).click();
 await expect(page.locator('.growth-summary')).toContainText('17,71');
 await expect(page.locator('.recharts-scatter-symbol')).toHaveCount(1);
 await expect(page.getByLabel('Nascimento',{exact:true})).toBeDisabled();
 await page.getByLabel('Data da medição',{exact:true}).fill('2025-01-01');
 await page.getByLabel('Altura (cm)',{exact:true}).fill('126');
 await page.getByRole('button',{name:'Calcular e adicionar ao gráfico'}).click();
 await expect(page.locator('.recharts-scatter-symbol')).toHaveCount(2);
 await page.getByRole('button',{name:'Calcular e adicionar ao gráfico'}).click();
 await expect(page.getByRole('alert')).toContainText('Já existe');
 await page.getByRole('button',{name:'Escore Z / SDS',exact:true}).click();
 await expect(page.getByRole('img',{name:/Gráfico de IMC, escore Z/})).toBeVisible();
 await page.getByRole('button',{name:'Peso',exact:true}).click();
 await expect(page.getByRole('heading',{name:'Peso por idade',exact:true})).toBeVisible();
 await page.getByRole('button',{name:'Remover medição de 01/01/2024'}).click();
 await expect(page.locator('.growth-table tbody tr')).toHaveCount(1);
 await page.getByRole('button',{name:'Novo acompanhamento',exact:true}).click();
 await expect(page.locator('.growth-table tbody tr')).toHaveCount(1);
 await page.getByRole('button',{name:'Confirmar: apagar medições',exact:true}).click();
 await expect(page.getByLabel('Nascimento',{exact:true})).toBeEnabled();
 expect(failures).toEqual([]);
});
for(const width of [390,1440])test(`growth chart fits ${width}px`,async({page})=>{
 await page.setViewportSize({width,height:1000});await page.goto('/imc');
 await expect(page.getByRole('heading',{name:'IMC por idade',exact:true})).toBeVisible();
 await expect(page.locator('.recharts-line-curve')).toHaveCount(7);
 await expect(page.locator('.recharts-line-curve').first()).toHaveAttribute('d',/M.*[LC]/);
 await page.screenshot({path:`artifacts/design/imc-${width}.png`,fullPage:true});
 expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
});

test('WHO selection is isolated and unavailable curves do not fall back to CDC',async({page})=>{
 await page.goto('/imc');
 await page.getByLabel('Referência de crescimento').selectOption('who');
 await expect(page.getByRole('img',{name:/percentis WHO/})).toBeVisible();
 await expect(page.locator('.recharts-line-curve')).toHaveCount(21);
 await page.route('**/api/v1/growth/charts?**',route=>route.fulfill({status:503,json:{error:'RCPCH indisponível'}}));
 await page.getByRole('button',{name:'Peso',exact:true}).click();
 await expect(page.getByRole('alert')).toContainText('RCPCH indisponível');
 await expect(page.locator('.recharts-line-curve')).toHaveCount(0);
});

test('all API selectors are available and specialist choices require a diagnosis',async({page})=>{
 await page.goto('/imc');
 await expect(page.getByLabel('Referência de crescimento').locator('option')).toHaveCount(6);
 await expect(page.getByLabel('Referência de crescimento').locator('option[value="turner"]')).toHaveAttribute('disabled','');
 await page.getByLabel('Diagnóstico para curvas específicas').selectOption('turner');
 await page.getByLabel('Referência de crescimento').selectOption('turner');
 await expect(page.getByLabel('Tipo de medição')).toHaveValue('height');
 await expect(page.getByLabel('Sexo da referência')).toHaveValue('F');
 await expect(page.getByLabel('Tipo de medição').locator('option[value="ofc"]')).toHaveAttribute('disabled','');
 await expect(page.getByLabel('Formato das curvas').locator('option')).toHaveCount(6);
 await page.getByLabel('Formato das curvas').selectOption('custom');
 await page.getByLabel('Unidade dos valores').selectOption('z');
 await expect(page.getByLabel('Valores separados por ;')).toHaveValue('-3;-2;-1;0;1;2;3');
 await page.getByText('Idade óssea (opcional)',{exact:true}).click();
 await expect(page.getByLabel('Método da idade óssea').locator('option')).toHaveCount(6);
});
