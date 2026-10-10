// Keep each source segment separate: never draw a bridge across a reference transition.
export function chartSeries(response, sex, type) {
 const output=[];
 for(const part of response?.centile_data||[]){
  for(const [segment,sexes] of Object.entries(part)){
   for(const curve of sexes?.[sex==='M'?'male':'female']?.[type]||[]){
    const data=curve.data.filter(p=>Number.isFinite(p.x)&&Number.isFinite(p.y)).map(p=>({age:p.x,value:p.y}));
    if(data.length)output.push({id:`${segment}-${curve.centile}`,segment,centile:curve.centile,sds:curve.sds,data});
   }
  }
 }
 return output;
}
