import {readFile} from 'node:fs/promises';
import {test,expect} from '@playwright/test';

test('clinical draft is private and appears in administrative preview',async({page,request})=>{
 const headers={Origin:'http://127.0.0.1:4173'};
 await page.request.post('/api/v1/auth/dev-login',{headers,data:{}});
 const {CONDUTAS_CATEGORIAS}=await import('../../src/lib/condutasData.js');
 const id='laringotraqueite-aguda-viral-crupe';
 const category=CONDUTAS_CATEGORIAS.find(c=>c.subcategorias.some(s=>s.topicos.some(t=>t.id===id)));
 const sub=category.subcategorias.find(s=>s.topicos.some(t=>t.id===id));
 const topic=sub.topicos.find(t=>t.id===id);
 const marker='Prévia clínica isolada '+Date.now();
 const draft=await readFile(new URL('../../data/clinical-drafts/respiratorias/laringotraqueite-aguda-viral-crupe.md',import.meta.url),'utf8');
 const response=await page.request.post('/api/v1/contents',{headers,data:{categoria_id:category.id,categoria_label:category.label,subcategoria_id:sub.id,subcategoria_label:sub.label,topico_id:id,topico_label:topic.label,conteudo:draft+'\n\n'+marker,review_sources:'Fonte de teste; não é conteúdo clínico.',publication_status:'draft'}});
 expect(response.ok()).toBe(true);
 const created=await response.json();
 try{
  const anonymous=await request.get('/api/v1/contents?limit=200');
  expect(JSON.stringify(await anonymous.json())).not.toContain(marker);
  await page.goto('/biblioteca?tab=condutas&topico='+id);
  await expect(page.getByText(marker)).toHaveCount(0);
  await page.goto('/admin?topico='+id);
  await page.getByRole('button',{name:'Preview',exact:true}).click();
  await expect(page.getByText('Rascunho — não publicado',{exact:true})).toBeVisible();
  await expect(page.getByText(marker,{exact:true})).toBeVisible();
  await expect(page.getByRole('table')).toHaveCount(3);
  await expect(page.getByRole('link',{name:'Croup: Management',exact:true})).toHaveAttribute('href','https://www.uptodate.com/contents/croup-management');
  await expect(page.locator('a[href="#ref-6"]').first()).toBeVisible();
  await page.screenshot({path:'test-results/crupe-draft-desktop.png',fullPage:true});
  await page.setViewportSize({width:390,height:844});
  await page.screenshot({path:'test-results/crupe-draft-mobile.png',fullPage:true});
  expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
 }finally{
  await page.request.delete('/api/v1/contents/'+created.id,{headers});
 }
});
