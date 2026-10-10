import test from 'node:test';
import assert from 'node:assert/strict';
import {evaluateGrowth} from '../src/lib/growthMeasurements.js';
const base={birthDate:'2016-01-01',measureDate:'2026-01-01',sex:'M',height:'120',weight:'25'};
test('growth entry calculates BMI without rounding inputs and accepts decimal comma',()=>{
 const r=evaluateGrowth(base,'2026-10-10');
 assert.equal(r.ageMonths,120);assert.equal(r.bmi,25/1.44);
 assert.equal(evaluateGrowth({...base,weight:'25,5'},'2026-10-10').weight,25.5);
 assert.ok(Number.isFinite(r.scores.bmi.z));
});
test('dates use exact calendar boundaries including leap-day birthdays',()=>{
 assert.equal(evaluateGrowth({...base,birthDate:'2024-02-29',measureDate:'2026-02-28'},'2026-10-10').ageMonths,24);
 assert.equal(evaluateGrowth({...base,birthDate:'2006-01-01'},'2026-10-10').ageMonths,240);
 for(const patch of [{birthDate:'2024-01-02'},{birthDate:'2005-12-31'},{measureDate:'2027-01-01'},{birthDate:'2026-02-30'},{birthDate:'2026-02-01'},{birthDate:''}])assert.throws(()=>evaluateGrowth({...base,...patch},'2026-10-10'));
});
test('invalid and nonfinite measurements never create chart points',()=>{
 for(const patch of [{height:''},{height:'NaN'},{height:'0'},{height:'120abc'},{weight:'Infinity'},{weight:'201'},{weight:'2.9'},{sex:'X'}])assert.throws(()=>evaluateGrowth({...base,...patch},'2026-10-10'));
});
