import {test} from 'node:test';
import assert from 'node:assert/strict';
import express from 'express';
import request from 'supertest';
import {readFileSync} from 'node:fs';
import {installGrowth} from '../server/growth.js';
import {chartSeries} from '../src/lib/rcpchGrowth.js';
const fixture=n=>JSON.parse(readFileSync(new URL(`./fixtures/growth/${n}.json`,import.meta.url)));
const input={reference:'who',sex:'M',birthDate:'2016-01-01',measureDate:'2025-01-01',height:120,weight:25,gestationWeeks:40,gestationDays:0};
function setup(fetchGrowth,key='test-only-key'){
 const app=express();app.use(express.json());
 installGrowth(app,{query:async()=>({rows:[{count:1}]})},{rcpchKey:key},{fetchGrowth});
 app.use((e,_req,res,_next)=>res.status(e.name==='ZodError'?422:e.status||500).json({error:e.message}));return app;
}
test('proxy allows only explicit references and safe inputs without forwarding arbitrary fields',async()=>{
 let calls=0;const app=setup(async()=>{calls++;throw Error('should not run');});
 for(const body of [{...input,reference:'unlisted'},{...input,name:'patient'},{...input,birthDate:'2025-02-30'},{...input,weight:0},{...input,gestationDays:7},{...input,measureDate:'2015-01-01'}])await request(app).post('/api/v1/growth/measurements').send(body).expect(422);
 assert.equal(calls,0);
});
test('API key stays in upstream header and full provenance survives the result',async()=>{
 const calls=[];const app=setup(async(url,options)=>{calls.push({url,options});return {ok:true,json:async()=>fixture('who-bmi')};});
 const r=await request(app).post('/api/v1/growth/measurements').send(input).expect(200);
 assert.equal(calls.length,3);assert.equal(calls[0].options.headers['Subscription-Key'],'test-only-key');
 assert.ok(calls.every(c=>c.url==='https://api.rcpch.ac.uk/growth/v1/who/calculation'));
 assert.deepEqual(r.body.raw.bmi.provenance,fixture('who-bmi').provenance);assert.ok(!JSON.stringify(r.body).includes('test-only-key'));
});
test('unavailable upstream and missing key never produce a local substituted result',async()=>{
 await request(setup(async()=>{throw Error('secret');})).post('/api/v1/growth/measurements').send(input).expect(503);
 await request(setup(async()=>({ok:false,status:401}))).post('/api/v1/growth/measurements').send(input).expect(503);
 await request(setup(async()=>{},'')).post('/api/v1/growth/measurements').send(input).expect(503);
});
test('unsupported result is marked absent, never zero; invalid BMI is rejected',async()=>{
 const app=setup(async(_url,o)=>{const result=fixture('who-bmi');if(JSON.parse(o.body).measurement_method==='weight')result.measurement_calculated_values.corrected_measurement_error='Unsupported';return {ok:true,json:async()=>result};});
 const r=await request(app).post('/api/v1/growth/measurements').send(input).expect(200);assert.equal(r.body.scores.weight.z,null);assert.equal(r.body.scores.weight.percentile,null);
 const invalid=fixture('who-bmi');invalid.measurement_calculated_values.corrected_sds=null;
 await request(setup(async()=>({ok:true,json:async()=>invalid}))).post('/api/v1/growth/measurements').send(input).expect(422);
});
test('chart coordinates preserve numeric values and separate WHO transitions',()=>{
 const raw=fixture('who-chart'),lines=chartSeries(raw,'M','bmi');
 assert.ok(new Set(lines.map(c=>c.segment)).size>=3);
 const first=raw.centile_data[0].who_2006_infant.male.bmi[0].data[0];
 assert.deepEqual(lines[0].data[0],{age:first.x,value:first.y});
 assert.ok(chartSeries(fixture('cdc-chart'),'M','bmi').length===7);
});

test('specialist diagnosis, Turner sex and measurement restrictions are enforced server-side',async()=>{
 let calls=0;const app=setup(async()=>{calls++;throw Error('should not call');});
 for(const body of [{...input,reference:'turner'},{...input,reference:'turner',diagnosis:'turner',measurement:'height',value:100},{...input,reference:'turner',diagnosis:'turner',sex:'F',measurement:'weight',value:20},{...input,reference:'trisomy-21'},{...input,reference:'trisomy-21-aap'}])await request(app).post('/api/v1/growth/measurements').send(body).expect(422);
 assert.equal(calls,0);
});
test('all six references and single measurement paths forward supported selections',async()=>{
 for(const ref of ['cdc','who','uk-who','turner','trisomy-21','trisomy-21-aap']){
  let payload;const app=setup(async(url,o)=>{assert.ok(url.includes('/'+ref+'/calculation'));payload=JSON.parse(o.body);const r=fixture('who-bmi');r.provenance.growth_reference=ref==='turner'?'turners-syndrome':ref;return {ok:true,json:async()=>r};});
  const body={...input,reference:ref,sex:'F',diagnosis:ref==='turner'?'turner':ref.startsWith('trisomy')?'trisomy-21':'none',measurement:'height',value:110,boneAge:8,boneAgeType:'fels'};
  const result=await request(app).post('/api/v1/growth/measurements').send(body).expect(200);
  assert.equal(payload.measurement_method,'height');assert.equal(payload.bone_age_type,'fels');assert.equal(result.body.height,110);assert.equal(result.body.scores.bmi.z,null);
 }
});
test('custom SDS and named chart formats are validated and forwarded',async()=>{
 let payload;const app=setup(async(_url,o)=>{payload=JSON.parse(o.body);return {ok:true,json:async()=>fixture('cdc-chart')};});
 await request(app).get('/api/v1/growth/charts?reference=cdc&sex=M&type=ofc&format=custom&custom=-3;-2;0;2;3&isSds=true').expect(200);
 assert.deepEqual(payload.centile_format,[-3,-2,0,2,3]);assert.equal(payload.is_sds,true);
 await request(app).get('/api/v1/growth/charts?reference=cdc&sex=M&type=bmi&format=cole-nine-centiles').expect(200);assert.equal(payload.centile_format,'cole-nine-centiles');
 await request(app).get('/api/v1/growth/charts?reference=cdc&sex=M&type=bmi&format=custom&custom=NaN').expect(422);
});
