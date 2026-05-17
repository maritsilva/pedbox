import React from 'react';
import { ClipboardList, Pill, Info, AlertTriangle, Activity, LogOut } from 'lucide-react';

function Section({ icon, title, color = 'blue', children }) {
  const colors = {
    blue: 'text-blue-600 bg-blue-50 border-blue-200',
    green: 'text-green-600 bg-green-50 border-green-200',
    amber: 'text-amber-600 bg-amber-50 border-amber-200',
    red: 'text-red-600 bg-red-50 border-red-200',
    purple: 'text-purple-600 bg-purple-50 border-purple-200',
    slate: 'text-slate-600 bg-slate-50 border-slate-200',
    cyan: 'text-cyan-600 bg-cyan-50 border-cyan-200',
  };
  return (
    <div className="bg-white border border-border rounded-2xl shadow-sm overflow-hidden">
      <div className={`flex items-center gap-2.5 px-5 py-3.5 border-b border-border ${colors[color]}`}>
        {icon}
        <h3 className="text-sm font-bold">{title}</h3>
      </div>
      <div className="px-5 py-4">{children}</div>
    </div>
  );
}

function AntibioticsTable() {
  const rows = [
    { drug: 'Ampicilina', dose: '150–200 mg/kg/dia de 6/6h', obs: 'Máx 12 g/dia' },
    { drug: 'Ampicilina-sulbactam', dose: '150–200 mg/kg/dia de ampicilina', obs: '—' },
    { drug: 'Penicilina cristalina', dose: '200.000–250.000 U/kg/dia de 4/4h ou 6/6h', obs: 'Máx 24 milhões U/dia' },
    { drug: 'Oxacilina', dose: '200 mg/kg/dia de 6/6h', obs: 'Máx 12 g/dia' },
    { drug: 'Ceftriaxona', dose: '50–100 mg/kg/dia de 12/12h', obs: 'Máx 4 g/dia' },
    { drug: 'Cefotaxima', dose: '150 mg/kg/dia de 8/8h ou 6/6h', obs: 'Máx 8 g/dia' },
    { drug: 'Vancomicina', dose: '40–60 mg/kg/dia de 6/6h ou 8/8h', obs: 'Máx 4 g/dia' },
    { drug: 'Ceftarolina', dose: '< 2 anos: 8 mg/kg/dose; ≥ 2 anos/≤ 33kg: 12 mg de 8/8h; > 33 kg: 400 mg de 8/8h ou 600 mg de 12/12h', obs: '—' },
    { drug: 'Linezolida', dose: '< 12 anos: 30 mg/kg/dia de 8/8h; ≥ 12 anos: 600 mg de 8/8h', obs: 'Máx 600 mg/dose' },
    { drug: 'Levofloxacino', dose: '6m–5 anos: 20 mg/kg/dia de 12/12h; 5–16 anos: 10 mg/kg 1×/dia', obs: 'Máx 750 mg/dia' },
    { drug: 'Azitromicina', dose: '10 mg/kg/dia nos dias 1–2; 5 mg/kg/dia nos seguintes', obs: 'Máx 500 mg/dia' },
    { drug: 'Amicacina', dose: '15 mg/kg/dia de 12/12h', obs: '—' },
    { drug: 'Amoxicilina-clavulanato', dose: '75 mg/kg/dia de amoxicilina de 8/8h', obs: 'Máx 1 g/dose' },
    { drug: 'Metronidazol', dose: '30 mg/kg/dia de 6/6h', obs: 'Máx 4 g/dia' },
  ];
  return (
    <div className="overflow-x-auto rounded-xl border border-border shadow-sm">
      <table className="w-full text-xs">
        <thead>
          <tr className="bg-blue-600">
            <th className="px-3 py-2 text-left font-bold text-white">Antibiótico</th>
            <th className="px-3 py-2 text-left font-bold text-white">Dose EV</th>
            <th className="px-3 py-2 text-left font-bold text-white">Obs</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {rows.map((r, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-blue-50/30'}>
              <td className="px-3 py-2 font-semibold text-blue-900 whitespace-nowrap align-top">{r.drug}</td>
              <td className="px-3 py-2 text-foreground leading-relaxed">{r.dose}</td>
              <td className="px-3 py-2 text-muted-foreground align-top">{r.obs}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="text-xs text-muted-foreground px-3 py-2 border-t">Fonte: SBP — Departamentos Científicos de Pneumologia e Infectologia, 2024.</p>
    </div>
  );
}

function DrainageTubeTable() {
  const rows = [
    { weight: '< 3 kg', loculado: '8–10', naoLoculado: '10–12' },
    { weight: '3–8 kg', loculado: '10–12', naoLoculado: '12–16' },
    { weight: '9–15 kg', loculado: '12–16', naoLoculado: '16–20' },
    { weight: '16–40 kg', loculado: '16–20', naoLoculado: '24–28' },
    { weight: '> 40 kg', loculado: '24–28', naoLoculado: '28–36' },
  ];
  return (
    <div className="overflow-x-auto rounded-xl border border-border">
      <table className="w-full text-xs">
        <thead>
          <tr className="bg-slate-600">
            <th className="px-3 py-2 text-left font-bold text-white">Peso</th>
            <th className="px-3 py-2 text-center font-bold text-white">Derrame loculado (Fr)</th>
            <th className="px-3 py-2 text-center font-bold text-white">Derrame não loculado (Fr)</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {rows.map((r, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50/30'}>
              <td className="px-3 py-2 font-semibold">{r.weight}</td>
              <td className="px-3 py-2 text-center font-bold text-slate-700">{r.loculado}</td>
              <td className="px-3 py-2 text-center font-bold text-slate-700">{r.naoLoculado}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function PneumoniaComplicada() {
  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-500 to-indigo-700 rounded-2xl p-5 text-white">
        <p className="text-blue-200 text-xs font-semibold mb-0.5">Documento Científico · Pneumologia / Infectologia</p>
        <h1 className="text-2xl font-extrabold leading-tight">🫁 PAC Complicada</h1>
        <p className="text-blue-100 text-sm mt-0.5">Pneumonia Adquirida na Comunidade Complicada · Atualização 2024</p>
        <p className="text-blue-200 text-xs mt-3 border-t border-blue-400/40 pt-2">SBP — Departamentos Científicos de Pneumologia e Infectologia · Nº 151 · Abr/2024</p>
      </div>

      {/* Definition */}
      <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 text-sm text-blue-900 leading-relaxed">
        <strong>PAC complicada (PACC)</strong> = PAC associada a complicações <strong>locais</strong> (derrame parapneumônico [DP], empiema pleural [EP], pneumonia necrosante, abscesso pulmonar) e/ou <strong>sistêmicas</strong> (bacteremia, falência de múltiplos órgãos, SARA, CIVD).
      </div>

      {/* Complications */}
      <Section icon={<Activity className="w-4 h-4" />} title="1. Principais Complicações e Agentes" color="blue">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
          <div className="space-y-2">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-3">
              <p className="font-bold text-xs text-blue-700 mb-1.5">Derrame Parapneumônico (DPP) / Empiema (EP)</p>
              <ul className="text-xs space-y-1 text-blue-900">
                <li>• Manifestação mais comum da PACC</li>
                <li>• 3 estágios: exsudativo → fibrinopurulento → organizado</li>
                <li>• Suspeitar quando PAC não melhora com antibióticos</li>
                <li>• Sinais: febre alta, calafrios, dor torácica, macicez</li>
              </ul>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-3">
              <p className="font-bold text-xs text-purple-700 mb-1.5">Pneumonia Necrosante</p>
              <ul className="text-xs space-y-1 text-purple-900">
                <li>• Acomete até 7% das PAC pediátricas</li>
                <li>• Agentes: pneumococo, S. aureus (incluindo MRSA), S. pyogenes</li>
                <li>• Suspeitar: PAC grave sem melhora após 72h de antibióticos</li>
                <li>• 63–100% evoluem com EP associado</li>
                <li>• TC de tórax com contraste: padrão-ouro diagnóstico</li>
              </ul>
            </div>
          </div>
          <div className="space-y-2">
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-3">
              <p className="font-bold text-xs text-amber-700 mb-1.5">Abscesso Pulmonar (AP)</p>
              <ul className="text-xs space-y-1 text-amber-900">
                <li>• Evolução insidiosa (1–2 semanas pós-aspiração)</li>
                <li>• Febre persistente, toxemia, hipoxemia sem resposta</li>
                <li>• Tosse pode tornar-se produtiva (vômica)</li>
                <li>• Tratamento geralmente conservador</li>
              </ul>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-3">
              <p className="font-bold text-xs text-slate-700 mb-1.5">Principais patógenos bacterianos</p>
              <ul className="text-xs space-y-1 text-slate-800">
                <li>• <strong>{'<'} 5 anos:</strong> S. pneumoniae (principal)</li>
                <li>• <strong>PACC grave:</strong> S. aureus (MRSA), S. pyogenes</li>
                <li>• Outros: H. influenzae, M. catarrhalis, K. pneumoniae</li>
                <li>• Atípicos: M. pneumoniae, C. pneumoniae</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Diagnostics */}
      <Section icon={<ClipboardList className="w-4 h-4" />} title="2. Diagnóstico" color="cyan">
        <div className="space-y-3 text-sm">
          <div>
            <p className="text-xs font-semibold text-muted-foreground mb-2">Exames laboratoriais:</p>
            <ul className="space-y-1.5 text-sm">
              {[
                'Hemoculturas: sempre, apesar de positivas em < 10% dos casos.',
                'Líquido pleural (se significativo): citologia, bioquímica (glicose, LDH, pH), Gram, cultura e PCR para patógenos.',
                'EP quando: pH < 7,20, glicose < 2,2 mmol/L, LDH ≥ 1000 U/L, leucócitos ≥ 15×10⁶/L.',
                'PCR e VHS: mais úteis no monitoramento da resposta que no diagnóstico diferencial viral/bacteriano.',
              ].map((item, i) => <li key={i} className="flex gap-2"><span className="text-cyan-400">•</span>{item}</li>)}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold text-muted-foreground mb-2">Exames de imagem:</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
              {[
                { label: 'Radiografia (RXT)', text: 'Primeira linha. Detecta pneumatoceles em 4–8 dias. Baixa sensibilidade para pneumonia necrosante inicial.' },
                { label: 'Ultrassonografia (US)', text: 'Mais sensível para avaliar espaço pleural. Superior à TC para loculações e fibrina. Sem radiação. Método preferido para quantificar DP.' },
                { label: 'TC de tórax', text: 'Padrão-ouro para pneumonia necrosante. Útil para decisão de conduta intervencionista. Distingue AP de pneumonia necrosante.' },
              ].map((item, i) => (
                <div key={i} className="bg-cyan-50 border border-cyan-200 rounded-xl p-3">
                  <p className="font-bold text-cyan-800 mb-1">{item.label}</p>
                  <p className="text-cyan-900">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Antimicrobial therapy */}
      <Section icon={<Pill className="w-4 h-4" />} title="3. Terapia Antimicrobiana" color="blue">
        <div className="space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
            <div className="bg-green-50 border border-green-200 rounded-xl p-3">
              <p className="font-bold text-green-700 mb-1.5">PACC com DP / boas condições</p>
              <ul className="space-y-1 text-green-900">
                <li>• Penicilina cristalina <strong>ou</strong></li>
                <li>• Ampicilina</li>
                <li>• + abordagem cirúrgica se indicado</li>
                <li>• Se Mycoplasma/Chlamydia: + macrolídeo</li>
              </ul>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-3">
              <p className="font-bold text-yellow-700 mb-1.5">PACC grave (empírico)</p>
              <ul className="space-y-1 text-yellow-900">
                <li>• Ceftriaxona <strong>ou</strong> Cefotaxima</li>
                <li>• Em área com MRSA: + Vancomicina</li>
                <li>• Alternativa anti-MRSA: Linezolida ou Clindamicina</li>
                <li>• Ceftarolina: opção em monoterapia</li>
              </ul>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-xl p-3">
              <p className="font-bold text-red-700 mb-1.5">PACC muito grave (UTI)</p>
              <ul className="space-y-1 text-red-900">
                <li>• Vancomicina +</li>
                <li>• Ceftriaxona/cefotaxima +</li>
                <li>• Azitromicina</li>
                <li>• Sazonalidade influenza: + Oseltamivir</li>
                <li>• Duração geral: 2–4 semanas EV</li>
              </ul>
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold text-muted-foreground mb-2">Doses de antibióticos EV para PACC:</p>
            <AntibioticsTable />
          </div>
        </div>
      </Section>

      {/* Surgical treatment */}
      <Section icon={<LogOut className="w-4 h-4" />} title="4. Tratamento Cirúrgico" color="amber">
        <div className="space-y-3">
          {/* Indications for drainage */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-3">
              <p className="font-bold text-amber-800 mb-2">Indicações de drenagem pleural simples</p>
              <ul className="space-y-1 text-amber-900">
                {['Pus no espaço pleural', 'Germes Gram+ na coloração', 'Glicose < 50 mg/dL', 'LDH > 1.000 UI', 'Comprometimento pulmonar por derrame extenso', 'Septações e/ou loculações'].map((item, i) => (
                  <li key={i} className="flex gap-1.5"><span>•</span>{item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-xl p-3">
              <p className="font-bold text-red-800 mb-2">Falha da drenagem de tórax</p>
              <ul className="space-y-1 text-red-900">
                {['Febre persistente ou aumentando após 72h da drenagem', 'Débito escasso com persistência de imagem', 'Persistência de septações ou loculações na US', 'Piora do quadro respiratório'].map((item, i) => (
                  <li key={i} className="flex gap-1.5"><span>•</span>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Tube size */}
          <div>
            <p className="text-xs font-semibold text-muted-foreground mb-2">Tamanho recomendado do tubo de drenagem por peso:</p>
            <DrainageTubeTable />
            <p className="text-xs text-muted-foreground mt-1.5">Retirar o dreno quando débito ≤ 40–60 mL/24h ou {'<'} 1–1,5 mL/kg/dia.</p>
          </div>

          {/* Fibrinolytics */}
          <div className="bg-secondary/60 rounded-xl p-3 text-xs">
            <p className="font-semibold mb-1.5">Fibrinolíticos (uroquinase — mais utilizado):</p>
            <ul className="space-y-1 text-foreground">
              <li>• <strong>{'<'} 1 ano:</strong> 10.000 UI em 10 mL de SF 0,9%</li>
              <li>• <strong>{'>'} 1 ano:</strong> 40.000 UI em 40 mL de SF 0,9%</li>
              <li>• Via: dreno pleural pinçado por 4h com mudanças posturais; 2×/dia</li>
            </ul>
          </div>

          {/* VTCA indications */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-xs text-amber-900">
            <p className="font-bold mb-1.5">Indicações de VTCA (videotoracoscopia assistida):</p>
            <ul className="space-y-1">
              {[
                'Derrame pleural massivo com comprometimento respiratório, com falha de drenagem + fibrinolíticos',
                'Fístula bronco-pleural não resolvida com drenagem simples',
                'Necrose extensa',
                'Persistência de febre, septicemia, IR ou coleção de pus organizada após drenagem com fibrinolíticos',
              ].map((item, i) => (
                <li key={i} className="flex gap-1.5"><span>•</span>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Vaccination */}
      <Section icon={<Activity className="w-4 h-4" />} title="5. Prevenção — Vacinação" color="green">
        <div className="space-y-2 text-sm">
          <p>A <strong>vacinação antipneumocócica</strong> é a principal medida preventiva contra PACC.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            {[
              { label: 'VPC10 (SUS)', text: 'Implementada em 2010 para lactentes. Redução importante dos sorotipos vacinais em < 5 anos.' },
              { label: 'VPC13 (CRIEs)', text: 'Para grupos especiais: HIV, oncológicos, transplantados, asplenia, imunodeficiências, fibrose cística.' },
              { label: 'VPC15 (rede privada)', text: 'Disponível desde 2023. Adiciona sorotipos 22F e 33F.' },
              { label: 'PCV20', text: 'Recentemente aprovada para crianças ≥ 6 semanas. 20 sorotipos.' },
            ].map((v, i) => (
              <div key={i} className="bg-green-50 border border-green-200 rounded-xl p-3">
                <p className="font-bold text-green-800 mb-1">{v.label}</p>
                <p className="text-green-900">{v.text}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground bg-secondary/60 rounded-xl p-3">⚠️ Após introdução da VPC10, há aumento de cepas não vacinais (19A, 6C, 3). Em 2022, sorotipo 19A representou 52% dos casos em {'<'} 5 anos — muitas cepas com alta resistência à penicilina.</p>
        </div>
      </Section>

      {/* References */}
      <Section icon={<Info className="w-4 h-4" />} title="Referências" color="purple">
        <ul className="space-y-1 text-xs text-muted-foreground">
          {[
            'SBP. Pneumonias Adquiridas na Comunidade Complicadas: Atualização 2024. Documento Científico Nº 151, Departamentos de Pneumologia e Infectologia, Abr/2024.',
            'Benedictis FM et al. Complicated pneumonia in children. Lancet. 2020;396:786-98.',
            'Masters IB, Isles AF, Grimwood K. Necrotizing pneumonia: an emerging problem in children? Pneumonia (Nathan). 2017;9:11.',
            'Moreno-Pérez D et al. Community acquired pneumonia in children: Treatment of complicated cases. An Pediatr (Barc). 2015;83(3):217.',
          ].map((ref, i) => (
            <li key={i} className="flex gap-2"><span className="font-bold">[{i + 1}]</span>{ref}</li>
          ))}
        </ul>
      </Section>
    </div>
  );
}