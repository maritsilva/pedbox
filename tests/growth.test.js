import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import * as data from '../src/lib/cdcOfficialLMS.js';
import {calcPercentile,calcZScore,normCDF} from '../src/lib/cdcGrowthData.js';
import {calcInfantPercentile} from '../src/lib/cdcInfantData.js';
const dir=new URL('../data/references/cdc-2000/',import.meta.url);
const tables={bmiagerev:['bmiBoysLMS','bmiGirlsLMS'],statage:['heightBoysLMS','heightGirlsLMS'],wtage:['weightBoysLMS','weightGirlsLMS'],lenageinf:['lengthBoysLMS','lengthGirlsLMS'],wtageinf:['weightInfBoysLMS','weightInfGirlsLMS'],hcageinf:['hcBoysLMS','hcGirlsLMS'],wtleninf:['wflBoysLMS','wflGirlsLMS']};
test('all seven official CDC files retain their hashes; every imported LMS and published percentile is reproduced',()=>{
 const manifest=JSON.parse(readFileSync(new URL('manifest.json',dir),'utf8'));
 for(const entry of manifest){
  const raw=readFileSync(new URL(entry.file,dir));
  assert.equal(createHash('sha256').update(raw).digest('hex'),entry.sha256);
  const [head,...lines]=raw.toString().trim().split(/\r?\n/);const keys=head.split(',').map(x=>x.trim());
  const rows=lines.map(line=>Object.fromEntries(line.split(',').map((x,i)=>[keys[i],Number(x)]))).filter(r=>[1,2].includes(r.Sex));
  assert.equal(rows.length,entry.rows);
  for(const r of rows){
   const axis=r.Agemos??r.Length;
   const row=data[tables[entry.file.replace('.csv','')][r.Sex-1]].find(x=>(x.age??x.len)===axis);
   assert.ok(row);for(const k of ['L','M','S'])assert.equal(row[k],r[k]);
   for(const p of [3,5,10,25,50,75,90,95,97])assert.ok(Math.abs(normCDF(calcZScore(r['P'+p],row.L,row.M,row.S))*100-p)<0.03,entry.file+' '+axis+' P'+p);
  }
 }
});
test('growth medians reproduce P50, including corrected female BMI at 20 years',()=>{
 assert.equal(calcPercentile('bmi','F',240,21.71699934).percentile,50);
 assert.equal(calcPercentile('bmi','M',24,16.57502768).percentile,50);
 assert.equal(calcInfantPercentile('weight','M',9.5,9.476500305).percentile,50);
});
test('unsupported ages, measurements, sex and curve names cannot silently clamp or select another reference',()=>{
 for(const args of [['height','M',12,75],['bmi','F',241,22],['bmi','X',120,20],['x','M',120,20],['bmi','M',NaN,20],['bmi','M',120,0]])assert.equal(calcPercentile(...args).percentile,null);
 for(const args of [['wfl','F',44,3],['weight','M',37,10],['hc','X',10,45],['length','F',3,NaN]])assert.equal(calcInfantPercentile(...args).percentile,null);
});
