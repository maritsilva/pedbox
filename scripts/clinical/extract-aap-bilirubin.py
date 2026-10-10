"""Extract numerical AAP 2022 supplemental tables 1–4 from the 48-page PDF.
Usage: python extract-aap-bilirubin.py input.pdf output.json
Requires pdfplumber. No PDF is redistributed.
"""
import sys,re,json,hashlib
import pdfplumber
source,destination=sys.argv[1:]
curves={}; current=None; table=None; plateaus={}
with pdfplumber.open(source) as pdf:
 for page in pdf.pages[40:47]:
  for line in page.extract_text().splitlines():
   match=re.match(r'SUPPLEMENTALTABLE([1-4])',line)
   if match: table=int(match[1]);current=None
   match=re.match(r'Gestationalageof(\d+)',line)
   if match:
    current=f'{table}-{match[1]}';assert current not in curves
    curves[current]=[None]
   match=re.match(r'^(\d{1,2}) ((?:\d+\.\d+a? ?)+)$',line)
   if match and current:
    day=int(match[1]);values=[float(v) for v in re.findall(r'\d+\.\d+',match[2])]
    assert len(values)==(23 if day==0 else 24),(current,day,len(values))
    assert len(curves[current])==(1 if day==0 else day*24)
    curves[current].extend(values)
   if line.startswith('aThethreshold') and current:
    match=re.search(r'afterbirthis([\d.]+)mg/dL',line)
    assert match,line
    plateaus[current]=float(match[1])
for key,values in curves.items():
 if len(values)<337:
  assert key in plateaus and values[-1]==plateaus[key],key
  values.extend([plateaus[key]]*(337-len(values)))
 curves[key]=values[:337]
 assert len(curves[key])==337 and all(v is not None for v in curves[key][1:])
assert len(curves)==18,len(curves)
json.dump({'source':'AAP 2022, supplemental tables 1–4, PDF pp.41–47','sha256':hashlib.sha256(open(source,'rb').read()).hexdigest(),'curves':curves},open(destination,'w'),separators=(',',':'))
print('Extracted 18 curves, 336 hourly values each; age zero unavailable.')
