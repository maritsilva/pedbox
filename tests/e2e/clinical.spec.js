import { test, expect } from '@playwright/test';

test('dose conversion respects caps, presentation restrictions and invalid values', async ({page}) => {
 await page.goto('/dosagens?drug=paracetamol');
 await page.getByLabel('Peso (kg)', {exact:true}).fill('100');
 await page.getByLabel('Idade', {exact:true}).fill('12');
 await page.getByLabel('Unidade da idade').selectOption('anos');
 await page.getByLabel('Intervalo cadastrado').selectOption('6');
 await page.getByRole('combobox', {name:'Apresentação',exact:true}).selectOption({label:'Suspensão 100 mg/mL (Bebê)'});
 await expect(page.getByText('1.000 mg', {exact:true})).toBeVisible();
 await expect(page.getByText('10 mL', {exact:true})).toBeVisible();
 await page.getByLabel('Peso (kg)', {exact:true}).fill('-1');
 await expect(page.getByText('Informe peso maior que zero e até 200 kg.',{exact:true})).toBeVisible();
 await expect(page.getByText('10 mL', {exact:true})).toHaveCount(0);
});

test('canonical catalogue, clinical drafts and blocked tool remain clearly distinguished', async ({page}) => {
 await page.goto('/calculadoras-hub');
 await expect(page).toHaveURL('/calculadoras');
 await page.getByLabel('Buscar calculadora').fill('superficie');
 await expect(page.locator('article')).toHaveCount(1);
 await expect(page.getByRole('heading',{name:'Superfície corporal',exact:true})).toBeVisible();
 await page.getByRole('link',{name:'Ver ferramenta em revisão'}).click();
 await expect(page.getByText('A prévia de cálculo está disponível para revisão na conta administrativa.')).toBeVisible();
 await page.goto('/rodwell');
 await expect(page.getByText('Em revisão — cálculo desativado')).toBeVisible();
 await expect(page.locator('input[type=checkbox]')).toHaveCount(0);
 await page.goto('/condutas');
 await expect(page).toHaveURL('/biblioteca?tab=condutas');
});

for (const width of [390,1280]) test(`clinical layout fits ${width}px`, async ({page}) => {
 await page.setViewportSize({width,height:900});
 for(const path of ['/','/biblioteca','/biblioteca?tab=protocolos','/biblioteca?tab=links','/biblioteca?tab=anotacoes','/guia','/favoritos','/ferramentas','/calculadoras','/dosagens?drug=paracetamol','/apgar','/pews','/sipa','/imc','/hidratacao','/vacinas','/desenvolvimento','/contact','/contato','/pesquisa','/login']){
  await page.goto(path);
  await expect(page.locator('h1').last()).toBeVisible();
  if (['/','/ferramentas','/biblioteca','/apgar','/login'].includes(path)) await page.waitForTimeout(800);
  if (['/','/ferramentas','/biblioteca','/apgar','/login'].includes(path)) await page.screenshot({path:`test-results/layout-${path.slice(1)||'home'}-${width}.png`,fullPage:true});
  expect(await page.evaluate(()=>document.documentElement.scrollWidth<=window.innerWidth)).toBe(true);
 }
});


test('mobile menu and simplified catalogue support direct navigation', async ({page}) => {
 await page.setViewportSize({width:390,height:844});
 await page.goto('/');
 await page.getByRole('button',{name:'Abrir menu'}).click();
 await expect(page.getByRole('dialog')).toBeVisible();
 await page.keyboard.press('Escape');
 await expect(page.getByRole('dialog')).toHaveCount(0);
 await page.getByRole('button',{name:'Abrir menu'}).click();
 await page.getByRole('dialog').getByRole('link',{name:'Condutas',exact:true}).click();
 await expect(page).toHaveURL('/biblioteca?tab=condutas');
 await expect(page.getByRole('dialog')).toHaveCount(0);
 await page.goto('/ferramentas');
 await page.getByLabel('Buscar ferramenta').fill('superficie');
 await expect(page.getByRole('heading',{name:'Superfície corporal',exact:true})).toBeVisible();
 await page.getByRole('link').filter({has:page.getByRole('heading',{name:'Superfície corporal',exact:true})}).click();
 await expect(page.getByText('A prévia de cálculo está disponível para revisão na conta administrativa.')).toBeVisible();
});

test('Apgar distinguishes unanswered criteria from an explicitly completed zero score', async ({page}) => {
 await page.goto('/apgar');
 await expect(page.locator('.score-banner').getByText('—',{exact:true})).toBeVisible();
 await expect(page.getByText('Resultado',{exact:true})).toHaveCount(0);
 const zeroOptions=page.getByRole('button',{name:/0 pts$/});
 await expect(zeroOptions).toHaveCount(5);
 for(let i=0;i<5;i++) await zeroOptions.nth(i).click();
 await expect(page.getByText('5/5 critérios preenchidos')).toBeVisible();
 await expect(page.locator('.score-banner').getByText('0',{exact:true})).toBeVisible();
 await expect(page.getByText('Faixa de 0–3 pontos',{exact:true})).toBeVisible();
 await expect(page.getByText(/A pontuação não determina manobras/)).toBeVisible();
 await expect(page.getByText('Reanimação avançada imediata:',{exact:false})).toHaveCount(0);
});

test('blood pressure cannot expose the known incorrect classification through its route',async({page})=>{
 await page.goto('/pressao-arterial');
 await expect(page.getByText('Em revisão — cálculo desativado')).toBeVisible();
 await expect(page.locator('input')).toHaveCount(0);
});

test('corrected age identifies postmenstrual age and clears stale results',async({page})=>{
 await page.goto('/idade-gestacional-corrigida');
 await page.getByLabel('Semanas ao nascer',{exact:true}).fill('32');
 await page.getByLabel('Dias adicionais ao nascer').fill('0');
 await page.getByLabel('Data de nascimento').fill('2024-01-01');
 await page.getByLabel('Data da avaliação').fill('2024-04-22');
 await page.getByRole('button',{name:'Calcular',exact:true}).click();
 await expect(page.getByText('8 semanas e 0 dias',{exact:true})).toBeVisible();
 await page.getByLabel('Data da avaliação').fill('2024-01-02');
 await expect(page.getByRole('region',{name:'Resultado da idade'})).toHaveCount(0);
 await page.getByRole('button',{name:'Calcular',exact:true}).click();
 await expect(page.getByRole('heading',{name:'Idade pós-menstrual',exact:true})).toBeVisible();
 await page.getByRole('button',{name:'Limpar',exact:true}).click();
 await expect(page.getByLabel('Semanas ao nascer',{exact:true})).toHaveValue('');
});
