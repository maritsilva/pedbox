import test from 'node:test';
import assert from 'node:assert/strict';
import { filterVaccineGuide, vaccineGuide } from '../src/lib/vaccineGuide.js';

test('PNI exclui MenB; SBIm inclui MenB e busca aceita acentos omitidos', () => {
 assert.equal(filterVaccineGuide({network:'pni',query:'meningococica B'}).length,0);
 assert.equal(filterVaccineGuide({network:'sbim',query:'meningococica B'})[0].id,'menb');
});
test('dengue pertence a 4 anos SBIm e 10–14 PNI, nunca a 24 meses', () => {
 assert.equal(filterVaccineGuide({age:'24',query:'Qdenga'}).length,0);
 assert.equal(filterVaccineGuide({network:'pni',age:'48',query:'Qdenga'}).length,0);
 assert.equal(filterVaccineGuide({network:'sbim',age:'48',query:'Qdenga'})[0].id,'dengue');
 assert.equal(filterVaccineGuide({network:'pni',age:'120',query:'Qdenga'})[0].id,'dengue');
});
test('norma PNI 2026 p.15: segundo reforço VIP aos 4 anos', () => {
 assert.ok(filterVaccineGuide({network:'pni',age:'48'}).some(v=>v.id==='vip'));
 assert.match(vaccineGuide.find(v=>v.id==='vip').pni,/15 meses e 4 anos/);
});
test('filtro vazio não recorre a registros não relacionados', () => {
 assert.deepEqual(filterVaccineGuide({query:'inexistente123'}),[]);
 assert.equal(new Set(vaccineGuide.map(v=>v.id)).size,vaccineGuide.length);
});
