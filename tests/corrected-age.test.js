import test from 'node:test';
import assert from 'node:assert/strict';
import {calculateCorrectedAge as calc} from '../src/lib/correctedAge.js';
const base={weeks:'32',days:'0',birthDate:'2024-01-01',assessmentDate:'2024-04-22'};
test('AAP example: 32 weeks at birth, 16 chronological weeks yields 8 corrected weeks',()=>{
 const r=calc(base);assert.equal(r.chronologicalDays,112);assert.deepEqual(r.corrected,{weeks:8,days:0});
});
test('before due date reports postmenstrual age; exactly 40 weeks gives zero corrected days',()=>{
 const before=calc({...base,assessmentDate:'2024-01-02',days:'6'});assert.equal(before.beforeTerm,true);assert.deepEqual(before.postmenstrual,{weeks:33,days:0});assert.equal(before.corrected,null);
 const term=calc({...base,assessmentDate:'2024-02-26'});assert.equal(term.beforeTerm,false);assert.equal(term.correctedDays,0);
});
test('term and postterm births do not subtract or add artificial weeks',()=>{
 for(const weeks of ['37','40','42']){const r=calc({...base,weeks});assert.equal(r.correctionDays,0);assert.equal(r.correctedDays,r.chronologicalDays);}
});
test('rejects invalid dates, reversed dates, partial numbers and noninteger gestational days',()=>{
 for(const patch of [{weeks:''},{days:''},{weeks:'32x'},{days:'7'},{days:'1.5'},{weeks:'19'},{birthDate:'2024-02-30'},{birthDate:'2025-01-01'},{assessmentDate:''}])assert.ok(calc({...base,...patch}).error);
});
test('exact elapsed days handle leap years and do not change with local daylight-saving time',()=>{
 const r=calc({...base,birthDate:'2024-02-28',assessmentDate:'2024-03-01'});assert.equal(r.chronologicalDays,2);
 assert.equal(calc({...base,assessmentDate:'2026-01-01'}).beyondTwoYears,true);
 assert.equal(calc({...base,assessmentDate:'2025-12-31'}).beyondTwoYears,false);
});
