export const opioides = [
  {
    id: 'buprenorfina',
    name: 'Buprenorfina',
    category: 'opioides',
    observations: 'Ação analgésica cerca de 30 vezes mais potente que a morfina. Seus efeitos não são totalmente revertidos pela naloxona. Comprimidos sublinguais foram retirados do mercado pelo risco de uso abusivo. Início: 10–30 min. Duração: 6–8 h.',
    brands: ['Restiva — adesivo transdérmico 5, 10 e 20 mg'],
    presentations: [
      { label: 'Adesivo transdérmico 5 mg' },
      { label: 'Adesivo transdérmico 10 mg' },
      { label: 'Adesivo transdérmico 20 mg' },
    ],
    doses: [
      {
        group: 'Adultos > 16 anos',
        items: [
          { label: 'Dor crônica', value: 'Iniciar com adesivo de 5 mg. Ajustar a cada 7 dias.' },
          { label: 'Dependência de opioides (alternativa à metadona)', value: 'Começar com dose equivalente ao opioide anterior e reduzir progressivamente' },
          { label: 'Orientação', value: '2 adesivos de 5 mg em áreas diferentes equivalem a 1 adesivo de 10 mg. Reduzir a dose gradualmente a cada 7 dias antes da retirada.' },
        ],
      },
    ],
    sideEffects: [
      'Constipação', 'Náusea', 'Vômitos', 'Diarreia', 'Dispepsia', 'Hepatite',
      'Depressão respiratória', 'Euforia', 'Sedação', 'Sudorese', 'Tontura', 'Sonolência',
      'Insônia', 'Cefaleia', 'Ansiedade', 'Depressão', 'Calafrios', 'Lacrimejamento',
      'Miose', 'Dependência e risco de uso abusivo', 'Agitação', 'Alucinação', 'Alergia',
      'Bradicardia', 'Hipotensão ortostática', 'Retenção urinária', 'Rinite',
    ],
    contraindications: ['Gravidez', 'Lactação', 'Insuficiência hepática', 'Hipertensão intracraniana'],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
  },
  {
    id: 'codeina',
    name: 'Codeína',
    category: 'opioides',
    observations: 'Opioide fraco com ação analgésica semelhante à do tramadol, porém com mais efeitos adversos. Antídoto: naloxona.',
    brands: [
      'Codein — ampola 30 mg/mL; comprimido 30 e 60 mg; solução oral',
      'Codeína + diclofenaco — comprimido 50 + 50 mg',
      'Codeína + paracetamol — comprimidos em várias associações',
    ],
    presentations: [
      { label: 'Comprimido 30 mg e 60 mg' },
      { label: 'Ampola 30 mg/mL' },
    ],
    doses: [
      {
        group: 'Crianças > 2 anos',
        items: [
          { label: 'Analgesia — dose por peso', value: '0,5–1,0 mg/kg/dose a cada 4–6 h' },
          { label: 'Analgesia — 2 a 6 anos', value: '2,5–5 mg/dose a cada 4–6 h. Máx: 30 mg/dia' },
          { label: 'Analgesia — 6 a 11 anos', value: '5–10 mg/dose a cada 4–6 h. Máx: 60 mg/dia' },
          { label: 'Tosse', value: '1,0–1,5 mg/kg/dia ÷ 4–6 doses' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Analgesia — oral', value: '30–60 mg/dose, 4–6×/dia. Máx: 360 mg/dia' },
          { label: 'Analgesia — IM', value: '15–30 mg a cada 4–6 h' },
          { label: 'Tosse', value: '10–20 mg/dose a cada 4–6 h. Máx: 120 mg/dia' },
          { label: 'Antidiarreico', value: '15–60 mg/dose a cada 4 h' },
        ],
      },
    ],
    renalAdjustment: [
      { label: 'ClCr 10–50 mL/min', value: '75% da dose' },
      { label: 'ClCr < 10 mL/min', value: '50% da dose' },
    ],
    sideEffects: [
      'Náusea', 'Vômitos', 'Constipação', 'Sonolência', 'Tontura',
      'Depressão do SNC', 'Depressão respiratória', 'Euforia', 'Disforia', 'Miose',
      'Risco de dependência', 'Palpitação', 'Bradicardia', 'Hipotensão', 'Vasodilatação',
      'Espasmo do trato urinário e biliar', 'Retenção urinária',
      'Uso EV provoca grande liberação de histamina',
    ],
    contraindications: ['Toxicomanias', 'Tosse produtiva', 'Tosse em < 2 anos', 'Asma grave', 'Íleo paralítico'],
    sensitivity: { susceptible: [], resistant: [], warning: 'Interações: anticolinérgicos, antidepressivos, benzodiazepínicos, barbitúricos.' },
  },
  {
    id: 'hidromorfona',
    name: 'Hidromorfona',
    category: 'opioides',
    observations: 'Opioide semissintético cerca de 4 vezes mais potente que morfina. Pico de ação: 9 h. Duração: 13 h. Descontinuado no Brasil — importar (Dilaudid).',
    brands: ['Dilaudid — descontinuado no Brasil (importar)'],
    presentations: [],
    doses: [
      {
        group: 'Adultos — Dor moderada a severa persistente',
        items: [
          { label: 'Dose inicial', value: '8 mg/dia' },
          { label: 'Ajuste', value: 'Aumentar 8 mg a cada 2 dias até efeito desejado' },
          { label: 'Retirada', value: 'Reduzir 50% a cada 2 dias' },
        ],
      },
    ],
    renalAdjustment: [
      { label: 'ClCr 30–50 mL/min', value: '50% da dose' },
      { label: 'ClCr < 30 mL/min', value: '25% da dose' },
    ],
    sideEffects: [
      'Cefaleia', 'Sonolência', 'Hiporexia', 'Tontura', 'Vertigem', 'Sedação', 'Ansiedade',
      'Depressão respiratória', 'Náusea', 'Vômito', 'Constipação', 'Espasmo urinário ou biliar',
      'Dependência e risco de uso abusivo', 'Agitação', 'Alucinação',
    ],
    contraindications: ['Asma grave', 'Depressão respiratória', 'Íleo paralítico'],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
  },
  {
    id: 'metadona',
    name: 'Metadona',
    category: 'opioides',
    observations: 'Agonista de receptores µ e antagonista de receptores NMDA. Usada no tratamento da abstinência por opioides e como analgésico potente. Causa menos dependência, euforia e sedação que a maioria dos opioides. Risco de acumulação em uso contínuo, com duração que pode chegar a 24–48 h. Antídoto: naloxona.',
    brands: ['Mytedom — ampola 10 mg/mL; comprimido 5 e 10 mg'],
    presentations: [
      { label: 'Comprimido 5 mg e 10 mg' },
      { label: 'Ampola 10 mg/mL' },
    ],
    doses: [
      {
        group: 'Crianças — Analgesia',
        items: [
          { label: 'Dose', value: '0,1 mg/kg/dose a cada 4 h nas primeiras 3 doses; depois a cada 6–12 h' },
        ],
      },
      {
        group: 'Crianças — Abstinência iatrogênica',
        items: [
          { label: 'Início', value: '0,05–0,1 mg/kg/dose 4×/dia. Aumentar 0,05 mg/kg/dose até controle.' },
          { label: 'Desmame', value: 'Após 24–48 h, ampliar intervalo para 8–12–24 h. Reduzir 0,05 mg/kg/dia até retirada.' },
        ],
      },
      {
        group: 'Adultos — Dor refratária',
        items: [
          { label: 'EV/SC/IM', value: '2,5–10 mg/dose a cada 3–8 h. Titular menor dose eficaz.' },
          { label: 'Oral', value: '2,5–5 mg/dose a cada 3–8 h' },
        ],
      },
      {
        group: 'Adultos — Desintoxicação / abstinência',
        items: [
          { label: 'Dose', value: '15–40 mg/dia. Ajustar pelos sintomas por 3 dias. Reduzir 20% ou 5 mg/dia conforme tolerância. Máx: 120 mg/dia.' },
        ],
      },
    ],
    renalAdjustment: [
      { label: 'ClCr 30–50 mL/min', value: 'A cada 6–8 h' },
      { label: 'ClCr 10–29 mL/min', value: 'A cada 8–12 h' },
      { label: 'ClCr < 10 mL/min', value: 'A cada 12–24 h' },
    ],
    sideEffects: [
      'Nervosismo', 'Irritabilidade', 'Tremores', 'Insônia', 'Desmaios', 'Sedação', 'Tontura',
      'Desorientação', 'Delirium', 'Dependência', 'Hipertensão intracraniana',
      'Hipotensão', 'Bradicardia', 'Vasodilatação', 'Parada cardíaca',
      'Sintomas de liberação histamínica', 'Prurido', 'Erupção cutânea', 'Urticária', 'Sudorese',
      'Depressão respiratória', 'Anorexia', 'Náusea', 'Vômitos', 'Boca seca', 'Cólicas',
      'Espasmo biliar', 'Constipação',
      'Libera hormônio antidiurético', 'Aumenta QTc no ECG', 'Risco de arritmias',
      'Eliminação longa e imprevisível com risco de efeitos cumulativos',
    ],
    contraindications: ['Asma grave', 'Íleo paralítico', 'Depressão respiratória'],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
  },
  {
    id: 'morfina',
    name: 'Morfina',
    category: 'opioides',
    observations: 'Opioide de escolha para dor moderada a intensa. Duração: 4–7 h. Equivalência: 10 mg EV = 20–30 mg VO. Taxa de conversão: 1 mg morfina oral = 10 mg de codeína ou tramadol oral. Antídoto: naloxona 0,01 mg/kg.',
    brands: [
      'Dimorf / Dimorf LC — comp. 10 e 30 mg; sol. oral 10 mg/mL; amp. 0,2/1/10 mg/mL; cáps. lib. controlada 30, 60 e 100 mg',
      'Sulfato de morfina — ampola 10 mg/mL; comprimido 10 e 30 mg; cápsulas liberação prolongada 30, 60 e 100 mg',
    ],
    presentations: [
      { label: 'Comprimido 10 mg e 30 mg' },
      { label: 'Solução oral 10 mg/mL' },
      { label: 'Ampola 0,2 mg/mL; 1 mg/mL; 10 mg/mL' },
      { label: 'Cápsulas liberação prolongada 30, 60 e 100 mg' },
    ],
    doses: [
      {
        group: 'Crianças < 1 mês',
        items: [
          { label: 'Oral', value: '0,08 mg/kg/dose a cada 4–6 h' },
          { label: 'EV/IM/SC', value: '0,03–0,1 mg/kg/dose a cada 4–8 h' },
        ],
      },
      {
        group: 'Crianças 1–3 meses',
        items: [
          { label: 'Oral', value: '0,1 mg/kg/dose a cada 3–4 h' },
          { label: 'EV/IM/SC', value: '0,03–0,1 mg/kg/dose a cada 4 h' },
        ],
      },
      {
        group: 'Crianças 3–11 meses',
        items: [
          { label: 'Oral', value: '0,1–0,2 mg/kg/dose a cada 4 h' },
          { label: 'EV/SC', value: '0,05–0,2 mg/kg/dose a cada 4 h' },
        ],
      },
      {
        group: 'Crianças 1–11 anos',
        items: [
          { label: 'Oral', value: '0,2–0,5 mg/kg/dose a cada 4 h. Máx: 15 mg/dose' },
          { label: 'EV/IM/SC', value: '0,05–0,2 mg/kg/dose a cada 4 h' },
          { label: 'Solução oral', value: '1 mL = 26 gotas. 1 gota = 0,4 mg' },
          { label: 'Sedação/analgesia contínua CTI', value: 'RN: bolus 0,03–0,05 mg, infusão 5–10 µg/kg/h (até 30 µg/kg/h). Lactentes/crianças: bolus 0,03–0,2 mg, infusão 5–40 µg/kg/h' },
          { label: 'Drepanocitose', value: 'EV: 0,1–0,15 mg/kg/dose a cada 2–4 h; infusão contínua 20–30 µg/kg/h' },
          { label: 'Câncer terminal', value: '0,04–0,07 mg/kg/h' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'EV', value: '2–5 mg/dose lento em 4–5 min a cada 4 h; aumentar conforme resposta até 10–15 mg/dose. Dor intensa refratária: até 10 mg/h (casos com tolerância: até 80 mg/h)' },
          { label: 'IM', value: '5–20 mg/dose' },
          { label: 'Oral', value: '10–30 mg/dose a cada 4 h' },
          { label: 'Liberação prolongada', value: '30–60 mg/dose a cada 12 h' },
          { label: 'Adaptação à VM', value: 'Bolus 1–2 mg a cada 10 min até efeito; infusão contínua 2–35 mg/h' },
          { label: 'Infarto / angina instável', value: '2–5 mg/dose; repetir a cada 5–15 min se necessário; depois a cada 4–6 h. Máx: 10 mg/dose.' },
          { label: 'Intratecal', value: '0,2–1 mg (1/10 da dose epidural)' },
        ],
      },
    ],
    preparation: 'EV: diluir em SGI 5% para 0,1–1 mg/mL. Aplicar em 1–2 mL a cada 5 min. Monitorar sonolência e sedação como sinal de risco de depressão respiratória.',
    renalAdjustment: [
      { label: 'ClCr 10–50 mL/min', value: '75% da dose' },
      { label: 'ClCr < 10 mL/min', value: '50% da dose' },
    ],
    sideEffects: [
      'Depressão respiratória e apneia — monitorar sedação', 'Tontura', 'Vertigem', 'Sonolência',
      'Confusão', 'Sedação', 'Cefaleia', 'Inquietação', 'Aumento de pressão intracraniana',
      'Euforia', 'Ansiedade', 'Miose', 'Alucinação', 'Fraqueza muscular', 'Tremores',
      'Náusea', 'Vômitos', 'Constipação', 'Distensão abdominal', 'Boca seca', 'Anorexia', 'Íleo paralítico',
      'Retenção urinária', 'Broncoespasmo', 'Vasodilatação', 'Convulsões em neonatos',
      'Erupção cutânea', 'Hiperemia', 'Coceira na face, nariz e corpo', 'Anafilaxia',
      'Espasmo biliar ou vesical', 'Sudorese', 'Liberação de ADH',
      'Tolerância', 'Dependência', 'Síndrome de abstinência se retirada rápida',
    ],
    contraindications: [
      'Asma aguda', 'Hipertensão ou tumor intracraniano', 'Politraumatizados com hipovolemia',
      'Convulsão', 'Distúrbio respiratório grave não intubado', 'Íleo paralítico',
      'Parkinson agudo', 'Uso recente de IMAO',
    ],
    sensitivity: { susceptible: [], resistant: [], warning: 'Evitar associação com antidepressivos, benzodiazepínicos, barbitúricos e outros depressores do SNC.' },
  },
  {
    id: 'nalbufina',
    name: 'Nalbufina',
    category: 'opioides',
    observations: 'Analgésico de efeito intermediário, útil para dor moderada. Antídoto: naloxona.',
    brands: ['Nubain — ampola 10 mg/mL'],
    presentations: [{ label: 'Ampola 10 mg/mL' }],
    doses: [
      {
        group: 'Crianças > 1 ano',
        items: [
          { label: 'Dose', value: 'Melhor evitar. Se necessário: 0,1–0,15 mg/kg/dose a cada 4–8 h' },
        ],
      },
      {
        group: 'Adultos — Analgesia',
        items: [
          { label: 'SC/IM/EV', value: 'Iniciar com 10 mg/dose a cada 3–6 h, aumentar até efeito. Máx: 20 mg/dose / 160 mg/dia.' },
          { label: 'Adjuvante em anestesia', value: '0,25–0,5 mg/kg EV. Reduzir dose gradualmente.' },
        ],
      },
    ],
    renalAdjustment: [{ label: 'Insuficiência renal', value: 'Reduzir a dose' }],
    sideEffects: [
      'Sedação', 'Fadiga', 'Sudorese', 'Tontura', 'Vertigem', 'Miose', 'Cefaleia', 'Pesadelos',
      'Vômito', 'Náusea', 'Boca seca', 'Constipação', 'Alergia', 'Dispneia',
      'Hipotensão', 'Taquicardia', 'Depressão respiratória', 'Dependência e risco de uso abusivo',
    ],
    contraindications: ['Asma grave', 'Íleo paralítico', 'Depressão respiratória'],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
  },
  {
    id: 'oxicodona',
    name: 'Oxicodona',
    category: 'opioides',
    observations: 'Opioide semissintético para dor moderada a intensa, especialmente no pós-operatório. Há relatos de uso abusivo por causar euforia. Comprimidos não devem ser fracionados. Interromper todos os opioides anteriores antes de iniciar.',
    brands: ['Oxycontin — comprimido revestido de liberação prolongada 10, 20 e 40 mg'],
    presentations: [
      { label: 'Comprimido LP revestido 10 mg' },
      { label: 'Comprimido LP revestido 20 mg' },
      { label: 'Comprimido LP revestido 40 mg' },
    ],
    doses: [
      {
        group: 'Adultos — Analgesia',
        items: [
          { label: 'Dose inicial', value: '10 mg a cada 12 h' },
          { label: 'Ajuste', value: 'Ajustar a cada 1–2 dias até efeito desejado' },
          { label: 'Doses > 40 mg', value: 'Apenas para pacientes tolerantes a opioides' },
        ],
      },
    ],
    renalAdjustment: [{ label: 'Doença renal', value: 'Evitar ou titular lentamente' }],
    sideEffects: [
      'Constipação', 'Náusea', 'Vômito', 'Cólicas', 'Boca seca', 'Espasmo biliar',
      'Fadiga', 'Tontura', 'Nervosismo', 'Agitação', 'Cefaleia', 'Mal-estar',
      'Miose', 'Visão borrada', 'Depressão respiratória', 'Hipertensão intracraniana',
      'Fraqueza muscular', 'Retenção urinária', 'Hiponatremia', 'Risco de abuso e dependência',
    ],
    contraindications: ['Asma', 'Íleo paralítico', 'Coma', 'Depressão respiratória', 'Gravidez', 'Amamentação'],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
  },
  {
    id: 'petidina-meperidina',
    name: 'Petidina / Meperidina',
    category: 'opioides',
    observations: 'Opioide sintético. Não deve ser usado para dor crônica pelo risco de acúmulo do metabólito tóxico norpetidina. Menor constipação, prurido e espasmo urinário/biliar que morfina, mas maior risco de neurotoxicidade. Início: 2–10 min. Duração: 2–3 h. Antídoto: naloxona. Evitar em idosos.',
    brands: ['Dolosal / Dolantina — ampola 50 mg/mL'],
    presentations: [{ label: 'Ampola 50 mg/mL' }],
    doses: [
      {
        group: 'Crianças',
        items: [
          { label: 'Nota', value: 'Melhor evitar. Não usar em < 1 ano.' },
          { label: 'Analgesia IM/SC', value: '1–1,8 mg/kg/dose a cada 3–4 h' },
          { label: 'Controle de tremores em reações pirogênicas', value: '0,25–0,5 mg/kg/dose' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Dor aguda IM/SC', value: '50–150 mg/dose a cada 3–4 h' },
          { label: 'Dor aguda EV lento (2–3 min)', value: '50–100 mg/dose a cada 3–4 h' },
          { label: 'Idosos e debilitados', value: 'Iniciar com 30 mg/dose. Máx: 500 mg/dia' },
          { label: 'Analgesia obstétrica IM/SC', value: '50–100 mg/dose a cada 1–3 h' },
        ],
      },
    ],
    renalAdjustment: [{ label: 'Insuficiência renal', value: 'Melhor evitar' }],
    sideEffects: [
      'Sonolência', 'Cefaleia', 'Sedação', 'Euforia', 'Depressão mental', 'Fraqueza', 'Convulsão',
      'Depressão respiratória', 'Apneia', 'Constipação', 'Boca seca', 'Espasmo biliar',
      'Hipotensão', 'Bradicardia', 'Inotropismo negativo', 'Taquicardia',
      'Piora de hipertensão intracraniana', 'Retenção urinária',
      'Erupção cutânea', 'Urticária',
      'Uso prolongado: acúmulo de norpetidina → tremor, mioclonias, agitação, convulsões, prurido',
    ],
    contraindications: ['Insuficiência respiratória', 'Uso de IMAO'],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
  },
  {
    id: 'tramadol',
    name: 'Tramadol',
    category: 'opioides',
    observations: 'Opioide fraco com efeitos cardiovasculares e respiratórios mínimos e baixo potencial de dependência. 50 mg de tramadol ≈ 30 mg de codeína. 1 mL = 40 gotas; 1 gota = 2,5 mg. Antídoto: naloxona. Para descontinuar: reduzir 25–50% da dose a cada 2–4 dias.',
    brands: [
      'Tramal / Unidol / Sensitram / Tramadon — cápsulas 50 mg; gotas 100 mg/mL; ampola 50 mg/mL; comprimido retard 100 mg',
      'Tramadol + paracetamol — comprimido revestido 37,5 + 325 mg',
    ],
    presentations: [
      { label: 'Cápsula 50 mg' },
      { label: 'Gotas 100 mg/mL' },
      { label: 'Ampola 50 mg/mL' },
      { label: 'Comprimido retard 100 mg' },
    ],
    doses: [
      {
        group: 'Crianças',
        items: [
          { label: 'Nota', value: 'Melhor evitar. Não usar em < 4 anos.' },
          { label: 'Dor moderada a intensa', value: '1–2 mg/kg/dose (0,4–0,8 gotas/kg/dose) a cada 4–6 h. Máx: 400 mg/dia.' },
          { label: 'Analgesia em queimados (oral)', value: '0,6–1 gota/kg/dose 3×/dia' },
        ],
      },
      {
        group: 'Adultos > 16 anos',
        items: [
          { label: 'Dor moderada a intensa', value: '50–100 mg/dose a cada 4–6 h. Máx: 400 mg/dia' },
          { label: 'Liberação prolongada', value: '100 mg/dose 1×/dia. Máx: 300 mg/dia' },
          { label: 'Idosos', value: '50 mg/dose a cada 3–4 h. Máx: 300 mg/dia' },
        ],
      },
    ],
    renalAdjustment: [
      { label: 'ClCr < 30 mL/min', value: '50–100 mg a cada 12 h' },
      { label: 'ClCr < 10 mL/min', value: '50 mg a cada 12 h. Evitar comp. liberação prolongada.' },
    ],
    sideEffects: [
      'Náusea', 'Vômito', 'Boca seca', 'Anorexia', 'Diarreia', 'Dispepsia', 'Flatulência', 'Constipação',
      'Tontura', 'Sonolência', 'Cefaleia', 'Vertigem', 'Sudorese', 'Ansiedade', 'Confusão mental',
      'Agitação', 'Euforia', 'Mal-estar', 'Alucinações', 'Nervosismo', 'Tremores', 'Distúrbios do sono',
      'Disúria', 'Polaciúria', 'Hipertonia', 'Espasticidade muscular',
      'Hipotensão', 'Prurido', 'Eritema', 'Exantema',
      'Hiponatremia por secreção inapropriada de ADH',
      'Risco de convulsão em pacientes com limiar baixo',
      'Mínima depressão respiratória e central com doses habituais em adultos',
    ],
    contraindications: ['Uso de inibidores da monoaminoxidase (IMAO)', 'Dependência a opioides', 'Epilepsia'],
    sensitivity: { susceptible: [], resistant: [], warning: 'Carbamazepina reduz eficácia. Fluoxetina, olanzapina e venlafaxina aumentam risco de síndrome serotoninérgica.' },
  },
  {
    id: 'viminol',
    name: 'Viminol',
    category: 'opioides',
    observations: 'Opioide sintético com baixo potencial de causar depressão respiratória. Pico de ação: 1 h. Duração: 4 h. Antídoto: naloxona.',
    brands: ['Dividol — cápsula 70 mg'],
    presentations: [{ label: 'Cápsula 70 mg' }],
    doses: [
      {
        group: 'Adultos — Dor moderada a grave',
        items: [
          { label: 'Dose', value: '70 mg/dose até 4×/dia. Máx: 140 mg/dose.' },
          { label: 'Orientação', value: 'Tomar com água, junto às refeições' },
        ],
      },
    ],
    sideEffects: [
      'Prurido', 'Sonolência', 'Sedação', 'Cefaleia', 'Vertigem',
      'Depressão respiratória', 'Náusea', 'Vômito',
      'Dependência se usado por tempo prolongado',
    ],
    contraindications: [],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
  },
];