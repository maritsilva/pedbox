import test from 'node:test';
import assert from 'node:assert/strict';
import {thresholds,evaluateBilirubin} from '../src/lib/bilirubin.js';
import {readFileSync} from 'node:fs';
const tables=JSON.parse(readFileSync(new URL('../src/lib/aapBilirubinTables.json',import.meta.url),'utf8'));
const base={birthDate:'2026-01-01',birthTime:'00:00',weeks:'40',days:'0',unit:'mg/dL',risk:false,readings:[{date:'2026-01-02',time:'00:00',total:'13.3',direct:'',weight:'',type:'serum'}]};
test('AAP tables: independent 24/48h anchors, risk and gestational groups',()=>{
 assert.equal(thresholds(40,24,false).photo,13.3);
 assert.equal(thresholds(40,48,false).photo,17);
 assert.equal(thresholds(35,24,false).photo,10.6);
 assert.equal(thresholds(35,24,true).photo,8.9);
 assert.equal(thresholds(38,48,false).exchange,24);
 assert.equal(thresholds(40,24,false).escalation,19.4);
 assert.equal(thresholds(40,24.99,false).photo,13.3);
 assert.equal(thresholds(34,24,false),null);
 assert.equal(thresholds(40,0,false),null);
 assert.equal(thresholds(40,337,false),null);
});
test('18 curves complete and finite at each supported hour',()=>{
 assert.equal(Object.keys(tables.curves).length,18);
 for(const curve of Object.values(tables.curves)){
  assert.equal(curve.length,337);assert.equal(curve[0],null);
  for(let i=1;i<=336;i++)assert.ok(Number.isFinite(curve[i]));
 }
});
test('threshold equality triggers treatment; direct is not subtracted',()=>{
 assert.equal(evaluateBilirubin(base).results[0].status,'photo');
 assert.equal(evaluateBilirubin({...base,readings:[{...base.readings[0],direct:'3'}]}).results[0].status,'photo');
 assert.equal(evaluateBilirubin({...base,readings:[{...base.readings[0],total:'19.4'}]}).results[0].status,'escalation');
 assert.equal(evaluateBilirubin({...base,readings:[{...base.readings[0],total:'21.4'}]}).results[0].status,'exchange');
});
test('unit equivalence, transcutaneous confirmation and invalid direct',()=>{
 const r=evaluateBilirubin({...base,unit:'µmol/L',readings:[{...base.readings[0],total:String(13.3*17.1)}]});
 assert.equal(r.results[0].status,'photo');
 const t=evaluateBilirubin({...base,readings:[{...base.readings[0],type:'tcb'}]}).results[0];assert.equal(t.status,'screening');assert.equal(t.confirmSerum,true);
 assert.ok(evaluateBilirubin({...base,readings:[{...base.readings[0],direct:'14'}]}).error);
 assert.ok(evaluateBilirubin({...base,risk:null}).error);
});
test('sorts serial samples, detects rapid rise and duplicate timestamps',()=>{
 const r=evaluateBilirubin({...base,readings:[{...base.readings[0],time:'12:00',total:'18'},base.readings[0]]});
 assert.equal(r.results[0].index,1);assert.equal(r.results[1].rapid,true);
 assert.ok(evaluateBilirubin({...base,readings:[base.readings[0],base.readings[0]]}).error);
});
test('rising during treatment lowers exchange threshold only',()=>{
 const ordinary=thresholds(40,48,false),rising=thresholds(40,48,false,true);
 assert.equal(ordinary.photo,rising.photo);assert.ok(rising.exchange<ordinary.exchange);
});
