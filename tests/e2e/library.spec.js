import {test,expect} from '@playwright/test';

test('library search opens exact protocol and preserves legacy links', async ({page}) => {
 await page.goto('/biblioteca');
 await page.getByLabel('Buscar na biblioteca').fill('asmatica');
 await page.getByRole('button').filter({hasText:'Crise Asmática'}).first().click();
 await expect(page).toHaveURL('/biblioteca?tab=protocolos&id=crise-asmatica');
 await expect(page.getByRole('button',{name:'Todos os Protocolos'})).toBeVisible();
 await page.reload();
 await expect(page.getByRole('button',{name:'Todos os Protocolos'})).toBeVisible();
 await page.goto('/protocolos?id=bronquiolite');
 await expect(page).toHaveURL('/biblioteca?id=bronquiolite&tab=protocolos');
 await expect(page.getByRole('button',{name:'Todos os Protocolos'})).toBeVisible();
 await page.getByRole('button',{name:'Todos os Protocolos'}).click();
 await expect(page).toHaveURL('/biblioteca?tab=protocolos');
});

test('conduta search result opens a reloadable topic and tabs clear selection', async ({page}) => {
 await page.goto('/biblioteca?tab=condutas');
 await page.getByLabel('Buscar na biblioteca').fill('bronquiolite');
 const topic=page.getByRole('button').filter({hasText:'Bronquiolite'}).last();
 await topic.click();
 await expect(page).toHaveURL(/tab=condutas&topico=/);
 const url=page.url();
 await expect(page.getByLabel('Buscar na biblioteca')).toHaveValue('');
 await page.reload();
 await expect(page).toHaveURL(url);
 await expect(page.locator('h1').last()).toContainText(/Bronquiolite/i);
 await page.getByRole('button',{name:'Links',exact:true}).click();
 await expect(page).toHaveURL('/biblioteca?tab=links');
});

test('minimal catalogues filter drugs and open flowcharts accessibly on mobile',async({page})=>{
 await page.setViewportSize({width:390,height:844});
 await page.goto('/dosagens');
 await page.getByLabel('Buscar medicamento',{exact:true}).fill('azitromicina');
 await page.getByRole('button',{name:'Azitromicina',exact:true}).click();
 await expect(page).toHaveURL(/drug=azitromicina/);
 await page.goBack();
 await expect(page.getByLabel('Buscar medicamento',{exact:true})).toBeVisible();
 await page.screenshot({path:'test-results/dosagens-mobile.png',fullPage:true});
 await page.goto('/biblioteca?tab=protocolos');
 await page.screenshot({path:'test-results/biblioteca-mobile.png',fullPage:true});
 await page.getByRole('button',{name:'Abrir fluxograma de Crise Asmática',exact:true}).click();
 await expect(page.getByRole('dialog')).toBeVisible();
 expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
 await page.screenshot({path:'test-results/fluxograma-mobile.png',fullPage:true});
 await page.keyboard.press('Escape');
 await expect(page.getByRole('dialog')).toHaveCount(0);
 await page.goto('/biblioteca?tab=condutas');
 await page.screenshot({path:'test-results/condutas-mobile.png',fullPage:true});
});
