import test from 'node:test';
import assert from 'node:assert/strict';
import {calculateLifeHours as life,calculateGestationalAge as ga,calendarDate,localTimestamp} from '../src/lib/timeCalculators.js';

test('horas completas e minutos na virada de dia, sem arredondar',()=>{
 const r=life({birthDate:'2026-10-09',birthTime:'23:45',referenceDate:'2026-10-11',referenceTime:'01:15'});
 assert.deepEqual([r.hours,r.minutes,r.days,r.remainingHours,r.decimalHours],[25,30,1,1,25.5]);
});
test('relógio atual injetável e instante do nascimento',()=>{
 const f={birthDate:'2026-10-10',birthTime:'10:00'};
 assert.equal(life({...f,now:localTimestamp(f.birthDate,f.birthTime)}).hours,0);
 assert.equal(life({...f,now:localTimestamp(f.birthDate,f.birthTime)+3599999}).hours,0);
 assert.equal(life({...f,now:localTimestamp(f.birthDate,f.birthTime)+3600000}).hours,1);
});
test('rejeita data impossível, horário inválido e referência anterior',()=>{
 assert.equal(calendarDate('2025-02-29'),null);
 assert.equal(localTimestamp('2026-10-10','24:00'),null);
 assert.ok(life({birthDate:'2026-10-10',birthTime:'12:00',referenceDate:'2026-10-10',referenceTime:'11:59'}).error);
});
test('DUM e DPP equivalentes; inclui 29 de fevereiro',()=>{
 const r=ga({method:'dum',baseDate:'2024-01-01',referenceDate:'2024-02-29'});
 assert.deepEqual([r.weeks,r.days,r.dpp],[8,3,'2024-10-07']);
 const inverse=ga({method:'dpp',baseDate:'2024-10-07',referenceDate:'2024-02-29'});
 assert.equal(inverse.totalDays,59);
 assert.equal(inverse.start,'2024-01-01');
});
test('ultrassom: 12s3d mais dez dias = 13s6d; retroprojeção permitida',()=>{
 const f={method:'ultrasound',baseDate:'2026-03-01',weeks:'12',days:'3'};
 const r=ga({...f,referenceDate:'2026-03-11'});
 assert.deepEqual([r.weeks,r.days,r.trimester],[13,6,1]);
 assert.equal(ga({...f,referenceDate:'2026-03-12'}).trimester,2);
 assert.equal(ga({...f,referenceDate:'2026-02-28'}).totalDays,86);
});
test('ACOG: transferência D5 +261 dias; D3 +263 dias',()=>{
 const f={method:'ivf',baseDate:'2026-01-01',referenceDate:'2026-01-01'};
 assert.equal(ga({...f,embryoDay:'5'}).dpp,'2026-09-19');
 assert.equal(ga({...f,embryoDay:'3'}).dpp,'2026-09-21');
 assert.equal(ga({...f,embryoDay:'5'}).totalDays,19);
});
test('limites de gestação, dias adicionais e DPP ultrapassada',()=>{
 assert.ok(ga({method:'dum',baseDate:'2026-02-01',referenceDate:'2026-01-01'}).error);
 assert.ok(ga({method:'dum',baseDate:'2025-01-01',referenceDate:'2026-01-01'}).error);
 assert.ok(ga({method:'ultrasound',baseDate:'2026-01-01',referenceDate:'2026-01-01',weeks:'12',days:'7'}).error);
 assert.equal(ga({method:'dpp',baseDate:'2026-10-10',referenceDate:'2026-10-11'}).daysToDue,-1);
});
