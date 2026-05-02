export const antihistaminicos = [
  {
    id: 'bilastina',
    name: 'Bilastina',
    category: 'antihistaminicos',
    observations: 'Anti-histamínico de segunda geração. Ação prolongada e não causa sedação.',
    brands: ['Alektos — comprimido 20 mg'],
    presentations: [{ label: 'Comprimido 20 mg' }],
    doses: [
      {
        group: 'Adultos — Rinite e urticária',
        items: [
          { label: 'Dose', value: '20 mg em dose única. Tomar 1 h antes ou 2 h após as refeições.' },
        ],
      },
    ],
    renalAdjustment: [{ label: 'Insuficiência renal', value: 'Não exige ajuste' }],
    sideEffects: [
      'Cefaleia', 'Sonolência', 'Tontura', 'Vertigem', 'Tinidos', 'Nariz seco',
      'Dificuldade para respirar', 'Cólica', 'Náusea', 'Vômito', 'Diarreia',
      'Boca seca', 'Gastrite', 'Hiporexia', 'Prurido', 'Aumento do apetite',
    ],
    contraindications: ['Lactação', 'Gravidez'],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
  },
  {
    id: 'cetirizina',
    name: 'Cetirizina',
    category: 'antihistaminicos',
    observations: 'Anti-histamínico de segunda geração derivado da hidroxizina. Possui alto potencial de risco anticolinérgico. Pelo efeito sedativo, evitar dirigir ou operar máquinas de risco.',
    brands: [
      'Zyrtec / Cetirtec / Cetirizina — comp. revestido 10 mg; sol. oral 5 mg/5 mL',
    ],
    presentations: [
      { label: 'Comprimido revestido 10 mg' },
      { label: 'Solução oral 5 mg/5 mL' },
    ],
    doses: [
      {
        group: 'Crianças',
        items: [
          { label: '6 meses a 2 anos', value: '2,5 mg/dia' },
          { label: '2 a 5 anos', value: '2,5 mg/dose 1–2×/dia' },
          { label: '6 a 12 anos', value: '5 mg/dose 1–2×/dia' },
        ],
      },
      {
        group: 'Adultos — Alergia / rinite / urticária',
        items: [
          { label: 'Dose', value: '10 mg/dia. Se persistir após 2 semanas: 20 mg/dia.' },
          { label: 'Idosos', value: '5 mg/dia' },
          { label: 'Orientação', value: 'Comprimido não deve ser partido. Tomar com água com ou sem alimentos.' },
        ],
      },
    ],
    renalAdjustment: [
      { label: 'ClCr 10–29 mL/min', value: '50% da dose normal' },
      { label: 'ClCr < 10 mL/min', value: 'Uso não recomendado' },
      { label: 'Insuficiência hepática', value: 'Melhor evitar' },
    ],
    sideEffects: [
      'Cefaleia', 'Sedação', 'Sonolência', 'Tontura', 'Agitação', 'Fadiga', 'Depressão', 'Confusão',
      'Vertigem', 'Ataxia', 'Síncope', 'Parestesias', 'Hipercinesia', 'Hipertonia', 'Tremores', 'Cãibra',
      'Taquicardia', 'Palpitação', 'Hipertensão', 'Diarreia', 'Dispepsia', 'Constipação', 'Dor abdominal',
      'Anorexia', 'Alteração do paladar', 'Boca seca', 'Flatulência', 'Aumento de transaminases',
      'Erupção cutânea', 'Fotossensibilidade', 'Prurido', 'Tosse', 'Epistaxe', 'Broncoespasmo',
      'Disúria', 'Cistite', 'Poliúria', 'Incontinência urinária', 'Dismenorreia', 'Vaginite', 'Dor de ouvido',
    ],
    contraindications: ['Disfunção vesical obstrutiva', 'Glaucoma de ângulo fechado', 'Gravidez inicial'],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
  },
  {
    id: 'clemastina',
    name: 'Clemastina',
    category: 'antihistaminicos',
    observations: 'Anti-histamínico de primeira geração derivado da monoetanolamina. Propriedades anticolinérgicas significativas e tendência acentuada para produzir sedação. Melhor evitar em idosos.',
    brands: [
      'Agasten — comp. 1 mg; xarope 0,25 mg/5 mL',
      'Clemastina + dexametasona — comp. 1 + 0,5 mg',
    ],
    presentations: [
      { label: 'Comprimido 1 mg' },
      { label: 'Xarope 0,25 mg/5 mL' },
    ],
    doses: [
      {
        group: 'Crianças',
        items: [
          { label: 'Dose por peso', value: '0,05 mg/kg/dia' },
          { label: 'Até 1 ano', value: '0,125 mg/dose 2×/dia' },
          { label: '1 a 3 anos', value: '0,125–0,25 mg/dose 2×/dia' },
          { label: '3 a 5 anos', value: '0,25–0,5 mg/dose 2×/dia' },
          { label: '6 a 11 anos', value: '0,5–1 mg/dose 2×/dia' },
        ],
      },
      {
        group: 'Adultos — Alergia / rinite / urticária / angioedema',
        items: [
          { label: 'Dose', value: '1 mg/dose 2×/dia. Se persistir após 2 semanas: 2 mg/dose 2×/dia. Máx: 6 mg/dia.' },
          { label: 'Orientação', value: 'Tomar com água, antes das refeições.' },
        ],
      },
    ],
    renalAdjustment: [
      { label: 'ClCr < 10 mL/min', value: '1 dose a cada 2 dias' },
    ],
    sideEffects: [
      'Sedação', 'Sonolência', 'Tontura', 'Cefaleia', 'Fadiga', 'Vertigem', 'Ataxia', 'Agitação',
      'Hiperatividade', 'Parestesia', 'Artralgia', 'Mialgia', 'Erupção cutânea', 'Angioedema',
      'Fotossensibilidade', 'Bradicardia', 'Palpitação', 'Edema', 'Vômito', 'Náusea', 'Diarreia',
      'Gastrite', 'Dor abdominal', 'Constipação', 'Hepatite', 'Aumento do apetite', 'Ganho de peso',
      'Faringite', 'Broncoespasmo', 'Epistaxe',
    ],
    contraindications: ['Uso de IMAO', 'Glaucoma de ângulo fechado', 'Doenças do trato respiratório inferior', 'Porfiria'],
    sensitivity: { susceptible: [], resistant: [], warning: 'Risco de depressão respiratória com anticolinérgicos. Potencializa efeito de álcool e sedativos.' },
  },
  {
    id: 'desloratadina',
    name: 'Desloratadina',
    category: 'antihistaminicos',
    observations: 'Anti-histamínico de segunda geração. Metabólito ativo da loratadina. Eficácia e segurança semelhantes. 1 gota = 0,0625 mg.',
    brands: [
      'Desalex / Destadin / Aleradina / Sigmaliv / Deslin / Desotex — comp. revestido 5 mg; xarope/sol. oral 0,5 mg/mL; gotas 1,25 mg/mL',
    ],
    presentations: [
      { label: 'Comprimido revestido 5 mg' },
      { label: 'Xarope / solução oral 0,5 mg/mL' },
      { label: 'Gotas 1,25 mg/mL (1 gota = 0,0625 mg)' },
    ],
    doses: [
      {
        group: 'Crianças',
        items: [
          { label: '6 a 11 meses', value: '1,0 mg/dia (2 mL) 1×/dia' },
          { label: '1 a 5 anos', value: '1,25 mg/dia (2,5 mL) 1×/dia' },
          { label: '6 a 11 anos', value: '2,5 mg/dia (5 mL) 1×/dia' },
          { label: 'Urticária persistente', value: 'Aumentar dose até 4× se não houver resposta após 2 semanas' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Alergia / rinite', value: '5 mg em dose única diária' },
          { label: 'Urticária', value: '5 mg/dia. Se persistir após 2 semanas: até 20 mg/dia.' },
        ],
      },
    ],
    renalAdjustment: [
      { label: 'Insuficiência renal leve/moderada', value: 'Não exige ajuste' },
      { label: 'ClCr < 10 mL/min', value: '50% da dose normal' },
    ],
    sideEffects: [
      'Fadiga', 'Cefaleia', 'Sonolência', 'Tontura', 'Boca seca', 'Garganta seca',
      'Náusea', 'Dispepsia', 'Mialgia', 'Dismenorreia', 'Taquicardia', 'Palpitação',
      'Edema', 'Erupção cutânea', 'Urticária', 'Prurido', 'Faringite', 'Dispneia',
      'Sintomas de IVAS', 'Aumento de enzimas hepáticas',
    ],
    contraindications: ['Hipersensibilidade a desloratadina ou loratadina'],
    sensitivity: { susceptible: [], resistant: [], warning: 'Pode potencializar efeito do álcool e sedativos.' },
  },
  {
    id: 'dexclorfeniramina',
    name: 'Dexclorfeniramina',
    category: 'antihistaminicos',
    observations: 'Anti-histamínico de primeira geração com risco anticolinérgico muito alto. Drágea LP não deve ser partida nem mastigada. Evitar em idosos. ATENÇÃO: gotas são 7× mais concentradas que o xarope — risco de intoxicação por troca. 1 mL = 0,4 mg; 1 gota = 0,1 mg.',
    brands: [
      'Polaramine — comp. 2 mg; drágea LP 6 mg; gotas 2 mg/mL; xarope 2 mg/5 mL',
      'Dexclorfeniramina + betametasona — comp. 2 + 0,25 mg; gotas 2 + 0,25 mg/mL; xarope 2 + 0,25 mg/5 mL',
    ],
    presentations: [
      { label: 'Comprimido 2 mg' },
      { label: 'Drágea liberação prolongada 6 mg' },
      { label: 'Gotas 2 mg/mL (1 gota = 0,1 mg)' },
      { label: 'Xarope 2 mg/5 mL' },
    ],
    doses: [
      {
        group: 'Crianças',
        items: [
          { label: 'Dose por peso', value: '0,15 mg/kg/dia ÷ 4 doses' },
          { label: '2 a 5 anos', value: '0,5 mg/dose 3–4×/dia (5 gotas ou 1,25 mL). Máx: 3 mg/dia' },
          { label: '6 a 11 anos', value: '1 mg/dose 3–4×/dia (10 gotas ou 2,5 mL). Máx: 6 mg/dia' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Dose habitual', value: '2 mg/dose 3–4×/dia (20 gotas ou 5 mL ou 1 comp.). Máx: 12 mg/dia' },
          { label: 'Drágea LP', value: '1 drágea de manhã; se necessário, 1 ao deitar. Máx: 2 drágeas/dia' },
        ],
      },
    ],
    renalAdjustment: [{ label: 'Insuficiência renal', value: 'Não exige ajuste' }],
    sideEffects: [
      'Sedação e sonolência intensas', 'Excitação', 'Agitação', 'Cefaleia', 'Irritabilidade', 'Convulsões',
      'Depressão', 'Fadiga', 'Erupção cutânea', 'Dermatite', 'Fotossensibilização', 'Anafilaxia',
      'Diarreia', 'Vômito', 'Boca seca', 'Dor abdominal', 'Aumento do apetite', 'Ganho de peso',
      'Ressacamento da mucosa nasal', 'Hepatite', 'Retenção urinária', 'Disúria', 'Poliúria',
      'Diplopia', 'Visão borrada',
    ],
    contraindications: ['Recém-nascidos', 'Uso de IMAO', 'Glaucoma de ângulo fechado', 'Retenção urinária'],
    sensitivity: { susceptible: [], resistant: [], warning: 'Potencializa efeito de álcool, sedativos e anticolinérgicos. Pode mascarar ototoxicidade de alguns medicamentos.' },
  },
  {
    id: 'difenidramina',
    name: 'Difenidramina',
    category: 'antihistaminicos',
    observations: 'Anti-histamínico de primeira geração derivado da etanolamina. Útil para urticária/angioedema graves, hipersensibilidade e distonias por antipsicóticos. Risco anticolinérgico muito alto. Tendência acentuada para sedação. Melhor evitar em idosos.',
    brands: ['Difenidrin — ampola 50 mg/mL'],
    presentations: [{ label: 'Ampola 50 mg/mL' }],
    doses: [
      {
        group: 'Crianças > 2 anos',
        items: [
          { label: 'Alergia grave / cinetose EV/IM', value: '1,25 mg/kg/dose 4×/dia. Máx: 50 mg/dose ou 300 mg/dia' },
          { label: 'Distonia aguda EV/IM', value: '1–2 mg/kg/dose; repetir em 30 min se necessário. Máx: 50 mg/dose' },
          { label: 'Profilaxia de alergia a contraste', value: '1,25 mg/kg 1 h antes + 3 doses de prednisona' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Reações alérgicas / distonias EV/IM', value: '10–50 mg/dose 4–6×/dia; ou até 100 mg/dia em dose única. Máx: 400 mg/dia' },
          { label: 'Profilaxia náusea por quimioterapia', value: '50 mg/dose' },
          { label: 'Reação transfusional / por drogas', value: 'EV: 25–50 mg/dose' },
          { label: 'Nota', value: 'Em reações anafiláticas, usar em associação à epinefrina.' },
        ],
      },
    ],
    renalAdjustment: [{ label: 'Insuficiência renal', value: 'Não exige ajuste' }],
    sideEffects: [
      'Boca seca', 'Sedação intensa', 'Sonolência', 'Tontura', 'Cefaleia', 'Excitação paradoxal',
      'Fadiga', 'Tremores', 'Risco de delirium em idosos', 'Secura nasal',
      'Erupção cutânea', 'Urticária', 'Fotossensibilidade', 'Taquicardia', 'Hipotensão',
      'Diarreia', 'Náusea', 'Vômito', 'Dor abdominal', 'Anorexia',
      'Piora da retenção urinária', 'Disúria', 'Anemia hemolítica', 'Leucopenia', 'Plaquetopenia',
      'Broncoespasmo', 'Aumento da secreção brônquica',
    ],
    contraindications: [],
    sensitivity: { susceptible: [], resistant: [], warning: 'Interações: anticolinérgicos.' },
  },
  {
    id: 'ebastina',
    name: 'Ebastina',
    category: 'antihistaminicos',
    observations: 'Anti-histamínico de segunda geração com risco anticolinérgico alto.',
    brands: ['Ebastel — comp. revestido 10 mg; xarope 5 mg/5 mL'],
    presentations: [
      { label: 'Comprimido revestido 10 mg' },
      { label: 'Xarope 5 mg/5 mL' },
    ],
    doses: [
      {
        group: 'Crianças',
        items: [
          { label: '2 a 5 anos', value: '2,5 mg/dia' },
          { label: '6 a 11 anos', value: '5 mg/dia 1×/manhã' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Alergias / rinite / urticária', value: '10–20 mg/dia 1×/manhã' },
        ],
      },
    ],
    renalAdjustment: [{ label: 'Insuficiência renal grave', value: 'Melhor evitar' }],
    sideEffects: [
      'Cefaleia', 'Sonolência', 'Insônia', 'Boca seca', 'Faringite', 'Epistaxe', 'Rinite', 'Sinusite',
      'Astenia', 'Dispepsia', 'Dor abdominal', 'Náusea', 'Vômito', 'Diarreia', 'Constipação', 'Retenção urinária',
    ],
    contraindications: [],
    sensitivity: { susceptible: [], resistant: [], warning: 'Interações: inibidores do citocromo P450.' },
  },
  {
    id: 'epinastina',
    name: 'Epinastina',
    category: 'antihistaminicos',
    observations: 'Anti-histamínico de segunda geração que não causa sedação. Eficácia semelhante a outros anti-histamínicos de 2ª geração.',
    brands: ['Talerc — comp. revestido 10 e 20 mg; suspensão oral 10 mg/5 mL'],
    presentations: [
      { label: 'Comprimido revestido 10 mg e 20 mg' },
      { label: 'Suspensão oral 10 mg/5 mL' },
    ],
    doses: [
      {
        group: 'Crianças 6–11 anos',
        items: [{ label: 'Dose', value: '5–10 mg/dia' }],
      },
      {
        group: 'Adultos',
        items: [{ label: 'Alergias / rinite / urticária', value: '10–20 mg/dia. Tomar com água com ou sem alimentos.' }],
      },
    ],
    renalAdjustment: [{ label: 'Insuficiência hepática', value: 'Evitar uso' }],
    sideEffects: [
      'Sonolência', 'Tontura', 'Fadiga', 'Cefaleia', 'Erupção cutânea', 'Náusea', 'Urticária',
      'Eritema', 'Prurido', 'Edema', 'Faringite', 'Epistaxe', 'Rinite', 'Dispepsia', 'Boca seca',
      'Desconforto GI', 'Gastrite', 'Transaminases aumentadas', 'Polaciúria', 'Hematúria', 'Palpitação',
    ],
    contraindications: [],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
  },
  {
    id: 'fexofenadina',
    name: 'Fexofenadina',
    category: 'antihistaminicos',
    observations: 'Anti-histamínico de segunda geração. Menos sedativo. Comprimido não deve ser partido.',
    brands: ['Allegra / Fexofenadina — comp. revestido 60, 120 e 180 mg; suspensão oral 6 mg/mL'],
    presentations: [
      { label: 'Comprimido revestido 60 mg' },
      { label: 'Comprimido revestido 120 mg e 180 mg' },
      { label: 'Suspensão oral 6 mg/mL' },
    ],
    doses: [
      {
        group: 'Crianças',
        items: [
          { label: '6 meses a 2 anos', value: '15 mg/dose 2×/dia' },
          { label: '2 a 11 anos', value: '60 mg/dia ÷ 1–2 doses' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Alergia / rinite', value: '120 mg/dia 1×/dia' },
          { label: 'Urticária', value: '120–180 mg/dia. Se persistir após 2 semanas: até 480 mg/dia.' },
        ],
      },
    ],
    renalAdjustment: [
      { label: 'ClCr 10–50 mL/min', value: '50% da dose' },
      { label: 'ClCr < 10 mL/min', value: '25% da dose' },
    ],
    sideEffects: [
      'Sedação e sonolência menores que de 1ª geração', 'Tontura', 'Cefaleia', 'Febre', 'Fadiga',
      'Náusea', 'Vômitos', 'Dispepsia', 'Dor no estômago', 'Alergia', 'Hipersensibilidade',
      'Irritação da garganta', 'Otite média', 'Tosse', 'Sinusite', 'Sintomas de IVAS', 'Dor nas costas',
    ],
    contraindications: [],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
  },
  {
    id: 'hidroxizina',
    name: 'Hidroxizina',
    category: 'antihistaminicos',
    observations: 'Anti-histamínico de primeira geração com risco anticolinérgico muito alto. Primeira escolha nas urticárias colinérgicas, crônicas ou refratárias. Se causar muita sonolência, tomar à noite.',
    brands: ['Droxizine / Hixizine / Pergo / Hidroxizina — sol. oral 10 mg/5 mL; comp. 25 mg'],
    presentations: [
      { label: 'Comprimido 25 mg' },
      { label: 'Solução oral 10 mg/5 mL' },
    ],
    doses: [
      {
        group: 'Crianças',
        items: [
          { label: '0 a 2 anos', value: '0,5 mg/kg/dose 4×/dia' },
          { label: '2 a 5 anos', value: '6–12 mg/dose 4×/dia. Máx: 50 mg/dia' },
          { label: '6 a 11 anos', value: '12–24 mg/dose 4×/dia. Máx: 100 mg/dia' },
          { label: 'Sedação pré-operatória', value: '0,6 mg/kg/dose' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Alergias / urticária', value: '25–50 mg/dose 3–4×/dia. Máx: 150 mg/dia' },
          { label: 'Sedação pré-operatória', value: '50–100 mg/dose' },
          { label: 'Transtorno de ansiedade', value: '50 mg/dia' },
        ],
      },
    ],
    renalAdjustment: [{ label: 'Insuficiência renal', value: 'Não exige ajuste' }],
    sideEffects: [
      'Sedação e sonolência intensas', 'Tontura', 'Confusão mental', 'Cefaleia', 'Ataxia', 'Fraqueza',
      'Hipotensão', 'Mais efeitos anticolinérgicos que os demais', 'Retenção urinária', 'Boca seca',
      'Constipação', 'Prolongamento do intervalo QT', 'Risco de queda em idosos',
    ],
    contraindications: [],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
  },
  {
    id: 'levocetirizina',
    name: 'Levocetirizina',
    category: 'antihistaminicos',
    observations: 'Anti-histamínico H1 de segunda geração.',
    brands: ['Zyxem / Uctil / Vocety / Zina — comp. revestido 5 mg; gotas 5 mg/mL'],
    presentations: [
      { label: 'Comprimido revestido 5 mg' },
      { label: 'Gotas 5 mg/mL' },
    ],
    doses: [
      {
        group: 'Crianças',
        items: [
          { label: '6 meses a 5 anos', value: '1,25 mg/dia' },
          { label: '6 a 11 anos', value: '2,5 mg/dia' },
        ],
      },
      {
        group: 'Adultos',
        items: [{ label: 'Alergias / urticária / rinite', value: '5 mg/dia' }],
      },
    ],
    renalAdjustment: [
      { label: 'ClCr 50–80 mL/min', value: '50% da dose' },
      { label: 'ClCr 10–49 mL/min', value: '50% da dose a cada 2 dias' },
      { label: 'ClCr 10–29 mL/min', value: '½ dose a cada 3 dias' },
      { label: 'ClCr < 10 mL/min', value: 'Melhor evitar' },
    ],
    sideEffects: [
      'Menos sedativo que os de 1ª geração', 'Sonolência', 'Astenia', 'Boca seca', 'Dor abdominal',
      'Angioedema', 'Constipação', 'Diarreia', 'Distensão dolorosa em crianças',
      'Nasofaringite', 'Febre', 'Retenção urinária',
    ],
    contraindications: [],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
  },
  {
    id: 'loratadina',
    name: 'Loratadina',
    category: 'antihistaminicos',
    observations: 'Anti-histamínico de segunda geração com alto risco anticolinérgico.',
    brands: ['Claritin / Histadin / Neo Loratadin / Loratadina — comp. 10 mg; xarope 5 mg/5 mL'],
    presentations: [
      { label: 'Comprimido 10 mg' },
      { label: 'Xarope 5 mg/5 mL' },
    ],
    doses: [
      {
        group: 'Crianças',
        items: [
          { label: '< 30 kg', value: '5 mg/dia' },
          { label: '≥ 30 kg', value: '10 mg/dia' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Alergias / rinite alérgica', value: '10 mg/dia' },
          { label: 'Urticária', value: '10 mg/dia. Se persistir após 2 semanas: até 40 mg/dia.' },
          { label: 'Auxiliar na asma alérgica', value: '10–20 mg/dia por até 8 semanas' },
          { label: 'Orientação', value: 'Tomar com água, junto às refeições.' },
        ],
      },
    ],
    renalAdjustment: [
      { label: 'ClCr < 50 mL/min', value: 'Mesma dose em dias alternados' },
      { label: 'Insuficiência hepática grave', value: '50% da dose ou mesma dose em dias alternados' },
    ],
    sideEffects: [
      'Menos sedativo que os de 1ª geração', 'Sonolência', 'Confusão mental', 'Cefaleia', 'Fadiga',
      'Ansiedade', 'Nervosismo', 'Hiperatividade', 'Dermatite', 'Erupção cutânea', 'Fotossensibilidade',
      'Alopécia', 'Hipotensão', 'Hipertensão', 'Palpitação', 'Náusea', 'Vômito', 'Dor abdominal',
      'Diarreia', 'Boca seca', 'Artralgia', 'Mialgia', 'Cãibras', 'Dismenorreia', 'Vaginite',
      'Descoloração da urina', 'Secura nasal e faríngea', 'Congestão nasal', 'Broncoespasmo', 'Epistaxe',
    ],
    contraindications: [],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
  },
  {
    id: 'prometazina',
    name: 'Prometazina',
    category: 'antihistaminicos',
    observations: 'Anti-histamínico de primeira geração derivado da fenotiazina. Ação antialérgica, antiemética e antipsicótica. Tendência acentuada para sedação. NÃO usar em < 2 anos (risco de parada respiratória). Uso EV arriscado — preferir IM. Se EV: infundir sem diluir por 3 min, não deixar extravasar (risco de necrose). Evitar em idosos.',
    brands: ['Fenergan / Pamergan / Prometazol — comp. revestido 25 mg; ampola 25 mg/mL'],
    presentations: [
      { label: 'Comprimido revestido 25 mg' },
      { label: 'Ampola 25 mg/mL' },
    ],
    doses: [
      {
        group: 'Crianças > 2 anos',
        items: [
          { label: 'Antiemético oral/EV/IM', value: '0,25–1,0 mg/kg/dose a cada 4–6 h. Máx: 25 mg/dose' },
          { label: 'Cinetose oral', value: '0,5 mg/kg/dose 2×/dia. Ex.: 25 kg → 12,5 mg/dose 1 h antes da partida' },
          { label: 'Alergia oral', value: '1 mg/kg/dia ÷ 2–3 doses' },
          { label: 'Profilaxia pré-soro heterólogo IM', value: '0,5 mg/kg/dose 15 min antes da infusão' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Alergia oral', value: '12,5–25 mg/dose 3×/dia. IM/EV: 25 mg/dose; repetir após 2 h se necessário.' },
          { label: 'Antiemético oral/EV', value: '12,5–25 mg/dose 4×/dia' },
          { label: 'Cinetose oral', value: '25 mg 1 h antes da partida; repetir após 8 h. Manutenção: 25 mg 2×/dia.' },
          { label: 'Sedação pré/pós-operatória IM/EV', value: '25–50 mg/dose + analgésico ou hipnótico' },
          { label: 'Vertigem oral', value: '25 mg/dose 2–3×/dia. IM: 25 mg/dose 4×/dia' },
          { label: 'Agitação aguda psiquiátrica IM', value: '25–50 mg + haloperidol 5–10 mg (em seringas separadas). Pode chegar a 100 mg.' },
        ],
      },
    ],
    renalAdjustment: [{ label: 'Insuficiência hepática em crianças', value: 'Evitar — sintomas extrapiramidais podem ser confundidos com sinais de hepatopatia' }],
    sideEffects: [
      'Sedação e sonolência intensas', 'Fadiga', 'Agitação e excitação paradoxal', 'Alucinações',
      'Delirium no idoso', 'Depressão do SNC', 'Manifestações extrapiramidais', 'Distonia', 'Convulsões',
      'Tremores', 'Tontura', 'Visão borrada', 'Incoordenação motora', 'Síndrome neuroléptica maligna',
      'Hipotensão', 'Arritmias', 'Taquicardia', 'Bradicardia', 'Hipertensão', 'Prolongamento do QT',
      'Náusea', 'Vômitos', 'Diarreia', 'Constipação', 'Boca seca', 'Dor epigástrica', 'Hepatite', 'Colestase',
      'Artralgia', 'Mialgia', 'Icterícia', 'Fotossensibilidade', 'Dermatite', 'Erupção cutânea',
      'Eritema', 'Eczema', 'Angioedema', 'Urticária', 'Anafilaxia',
      'Trombocitopenia', 'Leucopenia', 'Anemia hemolítica', 'Agranulocitose',
      'Retenção urinária', 'Impotência',
      'Apneia', 'Depressão respiratória', 'Risco de parada respiratória em < 2 anos',
    ],
    contraindications: [
      'Glaucoma de ângulo fechado', 'Depressão do SNC', 'Broncoconstrição',
      'Obstrução gastrintestinal ou urinária', 'Menores de 2 anos',
    ],
    sensitivity: { susceptible: [], resistant: [], warning: 'Interações: metoclopramida, salmeterol, antidepressivos, clozapina, tramadol e outras drogas que prolongam QT.' },
  },
  {
    id: 'rupatadina',
    name: 'Rupatadina',
    category: 'antihistaminicos',
    observations: 'Anti-histamínico de segunda geração do grupo piperidínico, com pouca chance de sedação. Início de ação em 15 min, duração ~24 h. Comprimido não deve ser partido nem mastigado.',
    brands: ['Rupafin — comprimido 10 mg'],
    presentations: [{ label: 'Comprimido 10 mg' }],
    doses: [
      {
        group: 'Adultos',
        items: [{ label: 'Alergia / rinite / urticária', value: '10 mg/dia com ou sem alimentos' }],
      },
    ],
    renalAdjustment: [{ label: 'Insuficiência renal ou hepática', value: 'Melhor evitar' }],
    sideEffects: [
      'Sedação', 'Sonolência', 'Tontura', 'Cefaleia', 'Astenia', 'Fadiga', 'Irritabilidade',
      'Aumento do apetite', 'Náusea', 'Vômitos', 'Diarreia', 'Dispepsia', 'Dor abdominal', 'Boca seca',
      'Epistaxe', 'Secura nasal e da faringe', 'Faringite', 'Rinite',
      'Prolongamento do intervalo QT', 'Mialgia', 'Artralgia', 'Erupção cutânea',
    ],
    contraindications: [],
    sensitivity: { susceptible: [], resistant: [], warning: 'Interações: inibidores do CYP450.' },
  },
];

export const angioedemaHereditario = [
  {
    id: 'icatibanto',
    name: 'Icatibanto',
    category: 'antihistaminicos',
    observations: 'Inibidor de bradicinina para angioedema hereditário agudo grave. Aplicar no abdômen durante 30 segundos.',
    brands: ['Firazyr — seringa preenchida 10 mg/mL (3 mL = 30 mg)'],
    presentations: [{ label: 'Seringa preenchida 10 mg/mL — 3 mL' }],
    doses: [
      {
        group: 'Adultos — Angioedema hereditário agudo grave',
        items: [
          { label: 'Dose', value: '30 mg SC. Se necessário, repetir 1–2 doses com 6 h de intervalo. Máx: 90 mg/24 h.' },
          { label: 'Orientação', value: 'Aplicar preferencialmente no abdômen durante 30 segundos.' },
        ],
      },
    ],
    sideEffects: [
      'Reação local: dor, ardor, edema, prurido, hiperemia, queimação',
      'Cefaleia', 'Tontura', 'Náusea', 'Dor abdominal', 'Dor no peito', 'Erupção cutânea',
      'Febre', 'Aumento de enzimas hepáticas', 'Desenvolvimento de anticorpos',
    ],
    contraindications: [],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
  },
  {
    id: 'inibidor-c1',
    name: 'Inibidor de C1 (C1-INH)',
    category: 'antihistaminicos',
    observations: 'Inibidor da esterase C1 derivado de plasma humano. Conservar sob refrigeração sem congelar. Aguardar atingir temperatura ambiente antes de aplicar.',
    brands: ['Berinert — frasco-ampola 500 UI'],
    presentations: [{ label: 'Frasco-ampola 500 UI' }],
    doses: [
      {
        group: 'Adultos e Crianças',
        items: [
          { label: 'Angioedema hereditário agudo grave', value: '20 UI/kg a cada 3–4 dias. Reconstituir e infundir lentamente (~4 mL/min).' },
        ],
      },
    ],
    sideEffects: [
      'Reação local: dor, ardor, edema, prurido, hiperemia, queimação',
      'Erupção cutânea', 'Náusea', 'Dor abdominal', 'Vômito', 'Boca seca',
      'Cefaleia', 'Tontura', 'Nasofaringite', 'Tromboembolismo',
      'Reação alérgica grave — fazer epinefrina se necessário',
    ],
    contraindications: [],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
  },
];

export const antihistDescongestionantes = [
  {
    id: 'bronfeniramina-fenilefrina',
    name: 'Bronfeniramina + Fenilefrina',
    category: 'antihistaminicos',
    observations: 'Associação de anti-histamínico de 1ª geração com descongestionante. Evitar em menores de 4 anos. Dose baseada na concentração de bronfeniramina. Medicamentos contendo pseudoefedrina ou fenilefrina não devem ser usados por mais de 3 dias (risco de rebote). 1 gota = 0,1 mg + 0,125 mg.',
    brands: [
      'Decongex Plus — comp. LP 12 + 15 mg; xarope 0,4 + 5 mg/5 mL; gotas 2 + 2,5 mg/mL',
      'Bialerge — comp. 4 + 5 mg; elixir 4 + 5 mg/5 mL',
    ],
    presentations: [
      { label: 'Comprimido LP 12 + 15 mg' },
      { label: 'Xarope 0,4 + 5 mg/5 mL' },
      { label: 'Gotas 2 + 2,5 mg/mL' },
      { label: 'Comprimido 4 + 5 mg' },
    ],
    doses: [
      {
        group: 'Crianças (evitar < 4 anos)',
        items: [
          { label: '2 a 5 anos', value: '1–2 mg/dose 3×/dia' },
          { label: '6 a 11 anos', value: '2–4 mg/dose 3×/dia' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Dose', value: '4 mg/dose a cada 6–8 h; ou 1 comp. LP (12+15 mg) a cada 12 h' },
        ],
      },
    ],
    sideEffects: [
      'Do anti-histamínico: sedação, sonolência, excitação, agitação, cefaleia, nervosismo, tontura, convulsões, boca seca, retenção urinária, visão borrada',
      'Do descongestionante: cefaleia, insônia, agitação, taquicardia, palpitação, hipertensão, angina, nervosismo, tremores, convulsão',
    ],
    contraindications: [
      'Glaucoma de ângulo fechado', 'Uso recente de IMAO', 'Insuficiência renal', 'Retenção urinária',
      'Coronariopatia', 'Doença cerebrovascular', 'Hipertensão', 'Hipertireoidismo',
    ],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
  },
  {
    id: 'bronfeniramina-pseudoefedrina',
    name: 'Bronfeniramina + Pseudoefedrina',
    category: 'antihistaminicos',
    observations: 'Associação de anti-histamínico com descongestionante.',
    brands: ['Winter AP — drágea 6 + 120 mg'],
    presentations: [{ label: 'Drágea 6 + 120 mg' }],
    doses: [
      { group: 'Adultos', items: [{ label: 'Dose', value: '1 cápsula a cada 12 h' }] },
    ],
    sideEffects: ['Ver bronfeniramina + fenilefrina'],
    contraindications: ['Ver bronfeniramina + fenilefrina'],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
  },
  {
    id: 'desloratadina-pseudoefedrina',
    name: 'Desloratadina + Pseudoefedrina',
    category: 'antihistaminicos',
    observations: 'Associação de anti-histamínico de 2ª geração com descongestionante.',
    brands: ['Desalex D12 / Esalerg D12 — comp. 2,5 + 120 mg'],
    presentations: [{ label: 'Comprimido 2,5 + 120 mg' }],
    doses: [
      { group: 'Adultos', items: [{ label: 'Dose', value: '1 comprimido a cada 12 h' }] },
    ],
    sideEffects: ['Anti-histamínico: ver desloratadina', 'Descongestionante: ver simpaticomiméticos'],
    contraindications: ['Ver bronfeniramina + fenilefrina'],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
  },
  {
    id: 'dexclorfeniramina-pseudoefedrina-guaifenesina',
    name: 'Dexclorfeniramina + Pseudoefedrina + Guaifenesina',
    category: 'antihistaminicos',
    observations: 'Tripla associação: anti-histamínico + descongestionante + expectorante. Pelo efeito sedativo, evitar dirigir ou operar máquinas.',
    brands: ['Polaramine Expectorante / EMS Expectorante — xarope 2 + 20 + 100 mg/5 mL'],
    presentations: [{ label: 'Xarope 2 + 20 + 100 mg/5 mL' }],
    doses: [
      {
        group: 'Crianças',
        items: [
          { label: '2 a 5 anos', value: '1,25–2,5 mL/dose 3–4×/dia' },
          { label: '6 a 11 anos', value: '2,5–5 mL/dose 3–4×/dia' },
        ],
      },
      { group: 'Adultos', items: [{ label: 'Dose', value: '5–10 mL/dose 3–4×/dia' }] },
    ],
    sideEffects: ['Ver dexclorfeniramina'],
    contraindications: ['Ver bronfeniramina + fenilefrina'],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
  },
  {
    id: 'difenidramina-citrato-cloreto',
    name: 'Difenidramina + Citrato de Sódio + Cloreto de Amônia',
    category: 'antihistaminicos',
    observations: 'Associação para tosse. A eficácia da pastilha é questionável — doses muito abaixo do necessário para o efeito.',
    brands: ['Benalet / Benatux — pastilha 5 + 50 + 10 mg; xarope 12,5 + 56,25 + 125 mg/5 mL'],
    presentations: [
      { label: 'Pastilha 5 + 50 + 10 mg' },
      { label: 'Xarope 12,5 + 56,25 + 125 mg/5 mL' },
    ],
    doses: [
      {
        group: 'Crianças',
        items: [
          { label: '2 a 5 anos', value: '2,5 mL/dose 4–6×/dia' },
          { label: '6 a 11 anos', value: '5–10 mL/dose 4–6×/dia' },
        ],
      },
      { group: 'Adultos', items: [{ label: 'Dose', value: '10 mL xarope/dose 3–4×/dia; ou 1 pastilha a cada 3–6 h' }] },
    ],
    sideEffects: ['Ver difenidramina'],
    contraindications: [],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
  },
  {
    id: 'fexofenadina-pseudoefedrina',
    name: 'Fexofenadina + Pseudoefedrina',
    category: 'antihistaminicos',
    observations: 'Associação de anti-histamínico de 2ª geração com descongestionante.',
    brands: ['Allegra D — comp. revestido 60 + 120 mg; comp. LP 180 + 240 mg'],
    presentations: [
      { label: 'Comprimido revestido 60 + 120 mg' },
      { label: 'Comprimido LP 180 + 240 mg' },
    ],
    doses: [
      { group: 'Adultos', items: [{ label: 'Dose', value: '1 comp. a cada 12 h; ou 1 comp. LP 1×/dia' }] },
    ],
    sideEffects: ['Anti-histamínico: ver fexofenadina', 'Descongestionante: ver simpaticomiméticos'],
    contraindications: ['Ver bronfeniramina + fenilefrina'],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
  },
  {
    id: 'loratadina-pseudoefedrina',
    name: 'Loratadina + Pseudoefedrina',
    category: 'antihistaminicos',
    observations: 'Associação de anti-histamínico de 2ª geração com descongestionante.',
    brands: ['Claritin D / Alergaliv D / Loradine D — xarope 5 + 60 mg/5 mL; comp. revestido 5 + 120 mg'],
    presentations: [
      { label: 'Comprimido revestido 5 + 120 mg' },
      { label: 'Xarope 5 + 60 mg/5 mL' },
    ],
    doses: [
      {
        group: 'Crianças 6–11 anos',
        items: [{ label: 'Dose', value: '2,5 mL/dose a cada 12 h' }],
      },
      { group: 'Adultos', items: [{ label: 'Dose', value: '1 comp. ou 5 mL xarope a cada 12 h' }] },
    ],
    sideEffects: ['Anti-histamínico: ver loratadina', 'Descongestionante: ver simpaticomiméticos'],
    contraindications: ['Ver bronfeniramina + fenilefrina'],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
  },
  {
    id: 'prometazina-sulfoguajacol',
    name: 'Prometazina + Sulfoguajacol',
    category: 'antihistaminicos',
    observations: 'Associação com expectorante. Sulfoguaiacol (guaiacolato de potássio) tem eficácia discutível — concentrações abaixo do necessário.',
    brands: ['Fenergan Expectorante — xarope pediátrico 2,5 + 45 mg/5 mL; xarope adulto 5 + 45 mg/5 mL'],
    presentations: [
      { label: 'Xarope pediátrico 2,5 + 45 mg/5 mL' },
      { label: 'Xarope adulto 5 + 45 mg/5 mL' },
    ],
    doses: [
      {
        group: 'Crianças (xarope pediátrico)',
        items: [
          { label: '2 a 5 anos', value: '5 mL/dose 3–4×/dia' },
          { label: '6 a 11 anos', value: '5 mL/dose 4–6×/dia' },
        ],
      },
      { group: 'Adultos (xarope adulto)', items: [{ label: 'Dose', value: '5–10 mL/dose 3–4×/dia' }] },
    ],
    sideEffects: ['Ver prometazina'],
    contraindications: ['Ver prometazina'],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
  },
  {
    id: 'triprolidina-pseudoefedrina',
    name: 'Triprolidina + Pseudoefedrina',
    category: 'antihistaminicos',
    observations: 'Associação de anti-histamínico de 1ª geração com descongestionante.',
    brands: ['Actifedrin / Actifedrin Pediátrico — comp. 2,5 + 60 mg; xarope 1,25 + 30 mg/5 mL'],
    presentations: [
      { label: 'Comprimido 2,5 + 60 mg' },
      { label: 'Xarope 1,25 + 30 mg/5 mL' },
    ],
    doses: [
      {
        group: 'Crianças (xarope)',
        items: [
          { label: '2 a 5 anos', value: '2,5 mL/dose 3–4×/dia' },
          { label: '6 a 11 anos', value: '5 mL/dose 3–4×/dia' },
        ],
      },
      { group: 'Adultos', items: [{ label: 'Dose', value: '1 comp. ou 10 mL/dose 3–4×/dia' }] },
    ],
    sideEffects: ['Anti-histamínico: sedação, boca seca, retenção urinária', 'Descongestionante: taquicardia, hipertensão, insônia'],
    contraindications: ['Ver bronfeniramina + fenilefrina'],
    sensitivity: { susceptible: [], resistant: [], warning: '' },
  },
];