// Offline generator: checked-in CDC CSVs only; never replaces source files.
import {readFile,writeFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
const base=new URL('../data/references/cdc-2000/',import.meta.url);
const tables={bmiagerev:['bmiBoysLMS','bmiGirlsLMS'],statage:['heightBoysLMS','heightGirlsLMS'],wtage:['weightBoysLMS','weightGirlsLMS'],lenageinf:['lengthBoysLMS','lengthGirlsLMS'],wtageinf:['weightInfBoysLMS','weightInfGirlsLMS'],hcageinf:['hcBoysLMS','hcGirlsLMS'],wtleninf:['wflBoysLMS','wflGirlsLMS']};
const manifest=JSON.parse(await readFile(new URL('manifest.json',base),'utf8'));
let output='// Generated from official CDC 2000 CSVs; provenance: data/references/cdc-2000/manifest.json.\n';
for(const source of manifest){
 const raw=await readFile(new URL(source.file,base));
 if(createHash('sha256').update(raw).digest('hex')!==source.sha256)throw new Error('Source hash mismatch: '+source.file);
 const [header,...lines]=raw.toString().trim().split(/\r?\n/);
 const keys=header.split(',').map(k=>k.trim());
 const rows=lines.map(line=>Object.fromEntries(line.split(',').map((v,i)=>[keys[i],Number(v)]))).filter(r=>[1,2].includes(r.Sex));
 if(rows.length!==source.rows)throw new Error('Row count mismatch: '+source.file);
 const names=tables[source.file.replace('.csv','')];
 for(const sex of [1,2]){
  const values=rows.filter(r=>r.Sex===sex).map(r=>({[r.Length==null?'age':'len']:r.Agemos??r.Length,L:r.L,M:r.M,S:r.S}));
  if(values.some(r=>Object.values(r).some(v=>!Number.isFinite(v))))throw new Error('Invalid LMS');
  output+='export const '+names[sex-1]+' = '+JSON.stringify(values)+';\n';
 }
}
await writeFile(new URL('../src/lib/cdcOfficialLMS.js',import.meta.url),output);
console.log('Generated seven CDC references with verified source hashes.');
