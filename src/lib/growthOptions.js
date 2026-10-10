// Enum values verified against the public RCPCH OpenAPI specification (2026-10-10).
export const GROWTH_REFERENCES = [
 ['cdc','CDC'], ['who','OMS / WHO'], ['uk-who','UK-WHO'],
 ['trisomy-21','Trissomia 21 · Reino Unido/Irlanda'], ['trisomy-21-aap','Trissomia 21 · AAP/EUA'], ['turner','Síndrome de Turner'],
];
export const GROWTH_FORMATS = [
 ['three-percent-centiles','P3, P10, P25, P50, P75, P90, P97'],
 ['cole-nine-centiles','Cole · nove centis'], ['extended-who-centiles','OMS · centis estendidos'],
 ['five-percent-centiles','Centis a partir de P5'], ['eighty-five-percent-centiles','CDC · inclui P85 e extremos'], ['custom','Valores personalizados'],
];
export const BONE_AGE_METHODS = [['greulich-pyle','Greulich–Pyle'],['tanner-whitehouse-ii','Tanner–Whitehouse II'],['tanner-whitehouse-iii','Tanner–Whitehouse III'],['fels','Fels'],['bonexpert','BoneXpert']];
export const referenceLabel = value => GROWTH_REFERENCES.find(r=>r[0]===value)?.[1] || value;
export function specialistAllowed(reference, diagnosis) {
 return reference==='turner'?diagnosis==='turner':reference.startsWith('trisomy-21')?diagnosis==='trisomy-21':true;
}
