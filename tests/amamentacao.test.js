import test from 'node:test';
import assert from 'node:assert/strict';
import {
  AMAMENTACAO_DATA,
  AMAMENTACAO_METADATA,
  NIVEIS_SEGURANCA,
  filterAmamentacao,
  getAmamentacaoStats
} from '../src/lib/amamentacaoData.js';

test('amamentacao metadata contains official Ministry of Health 2025 reference', () => {
  assert.equal(AMAMENTACAO_METADATA.ano, 2025);
  assert.equal(AMAMENTACAO_METADATA.isbn, '978-65-5993-866-7');
  assert.equal(AMAMENTACAO_METADATA.totalItens, 1301);
  assert.match(AMAMENTACAO_METADATA.pdfUrl, /bvsms\.saude\.gov\.br/);
});

test('amamentacao dataset contains 1301 items with unique IDs', () => {
  assert.equal(AMAMENTACAO_DATA.length, 1301);
  const ids = new Set(AMAMENTACAO_DATA.map((d) => d.id));
  assert.equal(ids.size, 1301);
});

test('levels 1 to 5 are defined and stats match', () => {
  assert.equal(Object.keys(NIVEIS_SEGURANCA).length, 5);
  const stats = getAmamentacaoStats();
  assert.equal(stats.total, 1301);
  assert.ok(stats[1] > 0);
  assert.ok(stats[2] > 0);
  assert.ok(stats[3] > 0);
  assert.ok(stats[4] > 0);
  assert.ok(stats[5] > 0);
  assert.equal(stats[1] + stats[2] + stats[3] + stats[4] + stats[5], 1301);
});

test('search finds substances with and without diacritics / accents', () => {
  const withAccents = filterAmamentacao({ query: 'Álcool' });
  const withoutAccents = filterAmamentacao({ query: 'alcool' });
  assert.ok(withAccents.length > 0);
  assert.equal(withAccents.length, withoutAccents.length);
  assert.ok(withAccents.some((item) => item.nome.includes('Álcool')));
});

test('key clinical drugs have official classifications from MS 2025', () => {
  // Paracetamol -> Nível 1 (Compatível)
  const paracetamol = AMAMENTACAO_DATA.find((d) => d.nome === 'Paracetamol');
  assert.ok(paracetamol);
  assert.equal(paracetamol.primaryLevel, 1);
  assert.match(paracetamol.classificacao, /compatível/i);

  // Dipirona -> Nível 4 (Risco de agranulocitose na 3ª edição MS 2025)
  const dipirona = AMAMENTACAO_DATA.find((d) => d.nome === 'Dipirona');
  assert.ok(dipirona);
  assert.equal(dipirona.primaryLevel, 4);
  assert.match(dipirona.descricao, /agranulocitose/i);

  // Cocaína e crack -> Nível 5 (Contraindicado)
  const cocaina = AMAMENTACAO_DATA.find((d) => d.nome === 'Cocaína e crack');
  assert.ok(cocaina);
  assert.equal(cocaina.primaryLevel, 5);
  assert.match(cocaina.classificacao, /contraindicado/i);

  // Febre Amarela -> Nível 4 / Nível 5 (Contraindicado < 6 meses)
  const febreAmarela = AMAMENTACAO_DATA.find((d) => d.nome === 'Contra febre amarela');
  assert.ok(febreAmarela);
  assert.ok(febreAmarela.levels.includes(4) && febreAmarela.levels.includes(5));
});

test('filter by level isolates exact groups', () => {
  const level1 = filterAmamentacao({ nivel: 1 });
  assert.ok(level1.every((item) => item.levels ? item.levels.includes(1) : item.primaryLevel === 1));

  const level5 = filterAmamentacao({ nivel: 5 });
  assert.ok(level5.every((item) => item.levels ? item.levels.includes(5) : item.primaryLevel === 5));
});

test('no personal user names exist in amamentacao dataset', () => {
  const raw = JSON.stringify(AMAMENTACAO_DATA);
  assert.equal(raw.includes('Marina Silva'), false);
});
