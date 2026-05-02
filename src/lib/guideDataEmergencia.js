export const emergenciaAnticolinergicos = [
  {
    id: 'atropina',
    name: 'Atropina',
    category: 'emergencia',
    observations: 'Parassimpaticolítico, bloqueio vagal, anticolinérgico. Indicada na bradicardia sintomática, hipoperfusão ou hipotensão não relacionada à hipóxia, bradicardias vagas (inalação de gases irritantes, estimulação de seio carotídeo, compressão ocular, estimulação peritoneal, injeção de contraste). Antídoto na intoxicação por organofosforados. Doses muito baixas (< 0,5 mg) podem induzir bradicardia paradoxal.',
    brands: [
      'Atropion / Hytropin — ampola 0,5 mg/mL e 0,25 mg/mL',
      'Atrofarma / Pasmodex / Santropina / Atropina — ampola 0,25 mg/mL',
    ],
    presentations: [
      { label: 'Ampola 0,25 mg/mL' },
      { label: 'Ampola 0,5 mg/mL' },
    ],
    doses: [
      {
        group: 'Crianças',
        items: [
          { label: 'Antiarrítmico / parada — EV ou IO', value: '0,02 mg/kg/dose. Dose mínima: 0,1 mg. Máx: 0,5 mg (criança) / 1 mg (adolescente). Repetir 1 vez se necessário.' },
          { label: 'Antiarrítmico — endotraqueal', value: '0,04–0,3 mg/kg em 5 mL de SF 0,9%' },
          { label: 'Pré-anestésico (< 5 kg)', value: '0,02 mg/kg. Dose mínima: 0,1 mg. EV/IM/SC 30–60 min antes.' },
          { label: 'Pré-anestésico (> 5 kg)', value: '0,01–0,02 mg/kg. Máx: 0,4 mg. Repetir a cada 4–6 h se necessário.' },
          { label: 'Pré-intubação (alto risco de bradicardia)', value: 'EV: 0,02 mg/kg. Máx: 0,5 mg. Não recomendado como rotina.' },
          { label: 'Antiespasmódico', value: 'SC: 0,01 mg/kg a cada 4–6 h. Máx: 0,4 mg.' },
          { label: 'Intoxicação por organofosforado', value: 'EV/IM: 0,05–0,1 mg/kg; repetir a cada 5–15 min. Titular até pele seca, taquicardia, midríase. Máx: 5 mg.' },
          { label: 'Bradicardia sintomática — EV', value: '0,02 mg/kg. Pode repetir a cada 3–5 min. Mín: 0,1 mg; Máx: 0,5 mg.' },
          { label: 'Bradicardia sintomática — endotraqueal', value: '0,04–0,06 mg/kg/dose.' },
          { label: 'Envenenamento por muscarina', value: 'EV: 0,02 mg/kg; titular até resposta.' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Bradicardia sintomática', value: 'EV: 0,5 mg/dose; repetir a cada 3–5 min. Máx: 3 mg.' },
          { label: 'Bradicardia — endotraqueal', value: '0,04 mg/kg em 10 mL de soro fisiológico.' },
          { label: 'Assistolia / AESP', value: 'EV: 1 mg/dose. Máx: 3 mg (ou 0,04 mg/kg por período de 4 h). Não mais recomendado como rotina na PCR.' },
          { label: 'Pré-anestésico / pré-intubação', value: 'EV/IM/SC: 0,4–0,6 mg/dose, 30–60 min antes. Repetir a cada 4–6 h se necessário.' },
          { label: 'Reversão de curarização', value: 'EV/IM/SC: 0,01–0,03 mg/kg, 1 min antes de neostigmina; ou 0,007–0,010 mg/kg junto com edrofônio.' },
          { label: 'Antiespasmódico', value: '0,3–1,2 mg a cada 4–6 h.' },
          { label: 'Intoxicação por organofosforado / carbamato', value: 'EV: 2–5 mg/dose a cada 5–10 min até atropinização. Depois a cada 4 h. Máx: 50 mg nas primeiras 24 h. Garantir oxigenação antes.' },
          { label: 'Envenenamento por muscarina', value: 'EV: 1–2 mg/dose; titular até resposta.' },
        ],
      },
    ],
    preparation: 'Via EV: pode ser feita sem diluir em bolus lento (bradicardia paradoxal se muito rápido). Endotraqueal: diluir em 5–10 mL (adultos) ou 3–5 mL (crianças) de SF.',
    renalAdjustment: [{ label: 'Insuficiência renal', value: 'Não exige ajuste.' }],
    sideEffects: [
      'Secura da boca, sede, constipação, dificuldade urinária, midríase, visão borrada, cicloplegia.',
      'Taquicardia, palpitações, disritmia cardíaca, hipotensão.',
      'Rubor facial, pele seca e quente, hipertermia (em crianças com paralisia cerebral).',
      'Inquietação, ataxia, tremores, confusão, alucinações, coma.',
      'Depressão respiratória. Doses < 0,5 mg: bradicardia paradoxal.',
    ],
    contraindications: [
      'Glaucoma de ângulo fechado', 'Doença obstrutiva gastrointestinal', 'Miastenia',
      'Uropatia obstrutiva', 'Taquicardia', 'Tireotoxicose',
    ],
  },
];

export const emergenciaAlcalinizantes = [
  {
    id: 'bicarbonato-sodio',
    name: 'Bicarbonato de sódio',
    category: 'emergencia',
    observations: 'Alcalinizante. Indicado na acidose metabólica com paciente bem ventilado. Na PCR, oxigenação e adrenalina têm prioridade. Correção mais urgente nas paradas por acidose metabólica primária, hiperpotassemia, hipermagnesemia ou intoxicação por tricíclicos/bloqueadores de canal de sódio. Incompatível com dextrose, álcool, dobutamina, noradrenalina, amiodarona, fenitoína e midazolam.',
    brands: [
      'Bicarbonato de sódio 5% — frasco 250 mL (1 mL = 0,60 mEq)',
      'Bicarbonato de sódio 8,4% — ampola 10 mL ou 20 mL; frasco 250 mL (1 mL = 1,0 mEq)',
      'Bicarbonato de sódio 10% — ampola 10 mL (1 mL = 1,2 mEq)',
    ],
    presentations: [
      { label: 'Ampola 8,4% — 10 mL (10 mEq)' },
      { label: 'Ampola 8,4% — 20 mL (20 mEq)' },
      { label: 'Frasco 5% — 250 mL' },
      { label: 'Frasco 8,4% — 250 mL' },
    ],
    doses: [
      {
        group: 'Adultos e crianças',
        items: [
          { label: 'Dose empírica (emergência, sem gasometria)', value: '1 mEq/kg = 1 mL/kg do bicarbonato 8,4%. Se persistir grave: repetir 0,5 mEq/kg a cada 10 min. 3 mEq/kg eleva o pH em ~0,1.' },
          { label: 'Correção pela gasometria', value: 'Excesso de base × 0,3 × peso; ou (HCO₃ desejado − HCO₃ encontrado) × 0,6 × peso. Corrigir em 2–6 h; repor metade em 1 h e repetir gasometria.' },
          { label: 'Indicação de correção', value: 'pH < 7,1; excesso de base < −15; ou HCO₃ < 10 mEq/L.' },
          { label: 'Parada / acidose grave / hiperpotassemia grave / tricíclicos', value: '1 mEq/kg em bolus; repetir metade após 10–15 min conforme pH. Considerar 1–2 mEq/kg em bolus de ≥ 2 min no paciente bem ventilado e refratário.' },
        ],
      },
      {
        group: 'Uso oral — Crianças',
        items: [
          { label: 'Insuficiência renal crônica', value: '1–3 mEq/kg/dia. Ajustar pela gasometria venosa.' },
          { label: 'Acidose tubular renal — proximal', value: 'Iniciar 5–10 mEq/kg/dia; ajustar pela gasometria.' },
          { label: 'Acidose tubular renal — distal / lactentes', value: '5–8 mEq/kg/dia ÷ 4–5 doses.' },
          { label: 'Acidose tubular renal — distal / crianças', value: '2–3 mEq/kg/dia ÷ 4–5 doses.' },
        ],
      },
      {
        group: 'Uso oral — Adultos',
        items: [
          { label: 'Insuficiência renal crônica', value: '15–23 mEq/dia. Ajustar pela gasometria.' },
          { label: 'Acidose tubular renal', value: '0,5–2 mEq/kg/dia ÷ 4–5 doses.' },
          { label: 'Alcalinização urinária', value: 'Iniciar 4 g (48 mEq); depois 1–2 g (12–24 mEq) a cada 4 h. Máx: 16 g/dia (96 g/dia em idosos).' },
        ],
      },
    ],
    preparation: 'Emergência: diluir ampola 8,4% 1:1 com ABD (concentração final 4,2%); administrar em ≥ 2 min em bolus. Fora das emergências: correr em 1–2 h. Lavar o acesso com 3–5 mL de SF antes e depois da administração. Solução isotônica: 3 mL de bicarb 8,4% em 17 mL de ABD.',
    sideEffects: [
      'Alcalose metabólica, hipernatremia, hipocalcemia, hipopotassemia, hiperosmolaridade.',
      'Tetania, convulsão, cefaleia paradoxal encefálica.',
      'Piora de ICC, edema pulmonar por excesso de sódio, hipervolemia, hemorragia cerebral.',
      'Necrose tecidual se infiltrar.',
      'Acidose cerebral paradoxal (evitar com hiperventilação e perfusão adequada).',
    ],
    contraindications: [
      'Alcalose', 'Hipernatremia', 'Edema pulmonar grave',
      'Hipocalcemia', 'Perda excessiva de cloreto', 'Uso de diuréticos causadores de alcalose hipoclorêmica',
    ],
  },
];

export const emergenciaVasoativos = [
  {
    id: 'dobutamina',
    name: 'Dobutamina',
    category: 'emergencia',
    observations: 'Catecolamina sintética com forte efeito inotrópico β1. Indicada no choque com baixa contratilidade, baixo débito e resistência vascular sistêmica elevada. Efeito inotrópico menor em < 12 meses. No choque com hipotensão e resistência periférica baixa em crianças, preferir adrenalina; em adultos, noradrenalina. Evitar uso > 48 h consecutivas.',
    brands: [
      'Dobutrex / Dobutan / Dobutariston / Dobu / Cloridrato de dobutamina — ampola 20 mL: 12,5 mg/mL',
    ],
    presentations: [{ label: 'Ampola 20 mL — 12,5 mg/mL (250 mg)' }],
    doses: [
      {
        group: 'Crianças e adultos',
        items: [
          { label: 'Choque / IC grave', value: 'Iniciar 2–2,5 µg/kg/min; aumentar 2,5 µg/kg/min; titular até 15–20 µg/kg/min. Se usar > 1–2 dias, não ultrapassar 5 µg/kg/min. Máx: 40 µg/kg/min.' },
          { label: 'Recém-nascidos', value: '2–15 µg/kg/min.' },
        ],
      },
    ],
    preparation: 'Diluir em SG ou SF. Concentração máxima recomendada: 5 mg/mL (5.000 µg/mL). Soluções padrão: 1.000 µg/mL ou 400 µg/mL. Incompatível na mesma linha com: heparina, bicarbonato e antimicrobianos.',
    renalAdjustment: [{ label: 'Insuficiência renal', value: 'Não exige ajuste.' }],
    sideEffects: [
      'Taquicardia, extrassístoles, palpitação, hipertensão (raro), hipotensão, angina.',
      'Cefaleia, parestesia, náusea, vômito, dispneia, dor no peito.',
      'Flebite, necrose dérmica se extravasar.',
      'Trombocitopenia, redução do potássio sérico.',
    ],
    contraindications: [
      'Estenose subaórtica hipertrófica', 'Miocardiopatia hipertrófica',
    ],
  },

  {
    id: 'dopamina',
    name: 'Dopamina',
    category: 'emergencia',
    observations: 'Catecolamina endógena. Doses < 3 µg/kg/min: efeito dopaminérgico (não recomendado). Doses 5–10 µg/kg/min: predomínio β-adrenérgico (inotrópico). Doses > 10 µg/kg/min: predomínio α-adrenérgico (vasopressor). Evitar > 20 µg/kg/min (exceto RN). Se necessário > 30 µg/kg/min para sustentar PA, preferir noradrenalina.',
    brands: [
      'Dopacris / Dopabane / Inotropisa / Cloridrato de dopamina — ampola 10 mL: 5 mg/mL',
    ],
    presentations: [{ label: 'Ampola 10 mL — 5 mg/mL (50 mg)' }],
    doses: [
      {
        group: 'Crianças e adultos',
        items: [
          { label: 'Dose inotrópica (β-adrenérgica)', value: '5–10 µg/kg/min' },
          { label: 'Dose inotrópica e pressora (α-adrenérgica)', value: '10–20 µg/kg/min' },
          { label: 'Choque — iniciar', value: '5–10 µg/kg/min; titular a cada 2–5 min. Máx: 50 µg/kg/min.' },
          { label: 'Dose vasodilatadora renal (não recomendada para oligúria/sepse)', value: '1–3 µg/kg/min' },
        ],
      },
    ],
    preparation: 'Diluições padrão: 800–1.600 µg/mL (crianças); 200, 400 ou 1.000 µg/mL (adultos). Evitar concentração > 3.200 µg/mL.',
    renalAdjustment: [{ label: 'Insuficiência renal', value: 'Não exige ajuste.' }],
    sideEffects: [
      'Taquicardia, arritmia, extrassístolia, alargamento de QRS, palpitação, hipertensão, angina.',
      'Cefaleia, ansiedade, midríase, oligúria, piloereção.',
      'Náusea, vômito, dispneia, hipóxia, aumento do shunt intrapulmonar.',
      'Necrose tecidual se infiltrar (aplicar fentolamina 5–10 mg em 15 mL de SF).',
      'Uso prolongado: supressão de TSH e hipotireoidismo.',
    ],
    contraindications: [
      'Feocromocitoma', 'Taquiarritmias', 'Fibrilação ventricular',
    ],
  },

  {
    id: 'epinefrina',
    name: 'Epinefrina',
    suffix: 'Adrenalina',
    category: 'emergencia',
    observations: 'Droga de escolha no choque séptico com hipotensão em crianças e na PCR. Aumenta FC, contratilidade, resistência vascular periférica. Efeito broncodilatador. Nunca associar bicarbonato na mesma via. Se infiltrar: aplicar fentolamina 1–5 mg em 5 mL de SF imediatamente.',
    brands: [
      'Adren / Efrinalin / Hemitartarato / Epifrin / Epinefrina — ampola 1 mL: 1 mg/mL',
    ],
    presentations: [{ label: 'Ampola 1 mL — 1 mg/mL (1:1.000)' }],
    doses: [
      {
        group: 'Crianças',
        items: [
          { label: 'PCR — EV/IO', value: '0,01 mg/kg (= 0,1 mL/kg da solução 1:10.000). Repetir a cada 3–5 min. Máx: 1 mg/dose.' },
          { label: 'PCR — endotraqueal', value: '0,05–0,1 mg/kg a cada 3–5 min.' },
          { label: 'PCR — neonatos', value: '0,01–0,03 mg/kg da solução 1:10.000.' },
          { label: 'Asma grave refratária a β-agonista', value: 'SC: 0,01–0,5 mg/kg; repetir até 3 vezes a cada 20 min.' },
          { label: 'Choque com hipotensão / refratário a volume', value: 'Iniciar 0,05–0,3 µg/kg/min; titular a cada 2–5 min.' },
          { label: 'Choque anafilático — IM/SC', value: '0,1 mL/kg; máx: 0,3 mL.' },
          { label: 'Choque anafilático — nebulização', value: '0,5 mL/kg (máx: 5 ampolas) em 5 mL de SF. Nebulizar em 5–10 min a cada 2–4 h.' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'PCR — EV', value: '1 mg (= 1 ampola) a cada 3–5 min.' },
          { label: 'PCR — endotraqueal', value: '2 mg (2 ampolas) em 10 mL de SF + 5 ventilações manuais.' },
          { label: 'Hipotensão / choque', value: 'Infusão: 0,05–0,1 µg/kg/min; titular a cada 2–5 min.' },
          { label: 'Choque refratário', value: 'Até 20 µg/kg/min conforme resposta.' },
          { label: 'Reação anafilática — IM/SC', value: '0,3–0,5 mg a cada 5–15 min.' },
          { label: 'Choque anafilático — infusão contínua', value: '2–10 µg/minuto.' },
          { label: 'Infusão contínua — dose baixa', value: '0,05–0,3 µg/kg/min.' },
          { label: 'Infusão contínua — dose alta', value: '0,3–2,0 µg/kg/min.' },
        ],
      },
    ],
    preparation: 'Preferir via central em acesso exclusivo. Não associar bicarbonato na mesma linha. Em crianças, usar bombas de seringa.',
    renalAdjustment: [{ label: 'Insuficiência renal', value: 'Não exige ajuste.' }],
    sideEffects: [
      'Ansiedade, tremor, cefaleia, tontura, astenia, palpitação.',
      'Arritmias, extrassístole, taquicardia ventricular ou supraventricular.',
      'Náusea, vômito, dispepsia, hipopotassemia.',
      'Dose alta: taquicardia ventricular, IAM, hipertensão grave, convulsões, AVC, edema pulmonar agudo, isquemia renal/esplâncnica.',
      'Aumenta lactato sérico mesmo com perfusão periférica normal (não usar para monitorar choque).',
    ],
    contraindications: [
      'Insuficiência cardíaca', 'Glaucoma de ângulo fechado', 'Uso de IMAO',
    ],
  },

  {
    id: 'norepinefrina',
    name: 'Norepinefrina',
    suffix: 'Noradrenalina',
    category: 'emergencia',
    observations: 'Medicamento de escolha no choque refratário com hipotensão e no choque séptico. Melhor ação pressora que epinefrina, mesmo em dose baixa. Menos taquicardia e arritmias que epinefrina. Não diluir em soluções alcalinas ou com bicarbonato. Se extravasar: infiltrar 10–15 mL de fentolamina diluída.',
    brands: [
      'Hyponor / Hyporrine / Norepine / Hemitartarato de norepinefrina — ampola 4 mL: 2 mg/mL',
    ],
    presentations: [{ label: 'Ampola 4 mL — 2 mg/mL (8 mg)' }],
    doses: [
      {
        group: 'Crianças',
        items: [
          { label: 'Choque séptico', value: 'Iniciar 0,05–0,1 µg/kg/min; aumentar ~0,02 µg/kg/min. Máx: 0,5 µg/kg/min (excepcionalmente até 2,0 µg/kg/min).' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Hipotensão / choque refratário', value: 'Iniciar 5–10 µg/min (ou 0,1–0,5 µg/kg/min); titular a cada 2–5 min. Manutenção: 2–4 µg/min.' },
          { label: 'IC grave', value: '1–30 µg/min (ou 0,2–1 µg/kg/min).' },
        ],
      },
    ],
    preparation: 'Diluições padrão: 1 amp (4 mg) + 250 mL = 16 µg/mL; + 500 mL = 8 µg/mL; + 1.000 mL = 4 µg/mL. Preferir concentração ≥ 16 µg/mL. Fórmula: velocidade (mL/h) = dose (µg/kg/min) × peso × 60 / concentração (µg/mL).',
    renalAdjustment: [{ label: 'Insuficiência renal', value: 'Não exige ajuste.' }],
    sideEffects: [
      'Arritmias, hipertensão, palpitação, taquicardia, bradicardia reflexa, BAV.',
      'Cefaleia, ansiedade, confusão, inquietação, tremor.',
      'Retenção urinária, náusea, vômito.',
      'Isquemia periférica, redução da perfusão renal, piora de trombose mesentérica.',
      'Necrose tecidual se extravasar.',
    ],
    contraindications: [
      'Hipotensão por hipovolemia', 'Trombose vascular',
    ],
  },

  {
    id: 'vasopressina',
    name: 'Vasopressina',
    category: 'emergencia',
    observations: 'Hormônio antidiurético com efeito vasoconstritor sistêmico potente. Meia-vida ~30 min. Monitorização completa durante tratamento, inclusive ECG contínuo. Não interromper infusão abruptamente (risco de hipotensão).',
    brands: ['Encrise — ampola 1 mL: 20 UI/mL'],
    presentations: [{ label: 'Ampola 1 mL — 20 UI/mL' }],
    doses: [
      {
        group: 'Crianças',
        items: [
          { label: 'Choque refratário a norepinefrina', value: '0,0002–0,004 UI/kg/min; dobrar a cada 30 min se necessário. Máx: 0,04 UI/kg/min.' },
          { label: 'Hemorragia GI grave', value: 'Ataque: 0,33 UI/kg em 20 min; manutenção: 0,002–0,005 UI/kg/min (máx: 0,01 UI/kg/min).' },
          { label: 'Diabetes insípido — IM/SC', value: '2,5–5 UI/dose a cada 4 h.' },
          { label: 'Diabetes insípido — EV pós-operatório', value: 'Iniciar 0,0005 UI/kg/h; titular até 0,01 UI/kg/h.' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Choque refratário', value: '0,01–0,03 UI/min; titular 0,005 UI/min a cada 10–15 min. Máx: 0,03 UI/min (associado à norepinefrina).' },
          { label: 'Hemorragia GI grave', value: 'Ataque: 20 UI em 100 mL de SG 5% em 20 min; manutenção: 0,2 UI/min, aumentar 0,2 UI/min a cada hora. Máx: 0,8 UI/min. Após 12 h de controle, reduzir dose pela metade.' },
          { label: 'Pacientes cirróticos', value: 'Preferir 0,13 UI/min.' },
          { label: 'PCR — substitui 1ª ou 2ª dose de adrenalina', value: 'EV: bolus único de 40 UI + 20 mL de ABD ou SF 0,9%.' },
          { label: 'Distensão abdominal pós-operatória', value: 'IM/SC: 5–10 UI/dose a cada 4 h.' },
          { label: 'Diabetes insípido', value: 'IM/SC: 5–10 UI/dose, 2–3 vezes ao dia.' },
        ],
      },
    ],
    preparation: 'Diluir para 0,1–1 UI/mL em SF ou ABD.',
    renalAdjustment: [{ label: 'ClCr < 10 mL/min', value: 'Titular com cuidado pelo efeito.' }],
    sideEffects: [
      'Bradicardia, hipertensão, arritmias, FA, angina, BAV, isquemia de extremidades, trombose venosa.',
      'Cefaleia, vertigem, tremor.',
      'Náusea, vômito, flatulência, cólicas, insuficiência vascular mesentérica.',
      'Hiponatremia, retenção e intoxicação hídrica, edema pulmonar, broncoconstrição.',
      'Plaquetopenia, insuficiência renal.',
      'Pode precipitar IAM, PCR ou choque hemorrágico em doses altas EV.',
    ],
    contraindications: [],
  },
];