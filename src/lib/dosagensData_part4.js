// PARTE 4: Antifúngicos, Antivirais adicionais, Antibióticos adicionais,
// Anestésicos locais, Oftalmologia, Otorrinolaringologia, Dermatologia,
// Nefrologia, Sedação/Analgesia procedimental, Neonatologia

export const PART4_CATEGORIAS = [

  // ─── ANTIFÚNGICOS ────────────────────────────────────────────────────────
  {
    id: 'antifungicos',
    label: 'Antifúngicos',
    icon: '🍄',
    color: 'lime',
    drugs: [
      {
        id: 'fluconazol',
        name: 'Fluconazol',
        sinonimo: null,
        marcas: 'Zoltec, Fluconal',
        descricao: 'Antifúngico triazólico indicado para candidíase, meningite criptocócica e profilaxia em imunossuprimidos.',
        indicacoes: [
          {
            id: 'candidíase-oral',
            label: 'Candidíase Oral / Esofágica',
            dose_min: 3, dose_max: 6, dose_max_abs: 200,
            unidade: 'mg/kg/dia', freq: '1x ao dia por 7–14 dias',
            obs: 'Candidíase oral: 3 mg/kg/dia × 7–14 dias. Esofágica: 6 mg/kg/dia × 14–21 dias. Máx 200 mg/dia.',
            apresentacoes: [
              { label: 'Suspensão 10 mg/mL', conc: 10, tipo: 'mL' },
              { label: 'Suspensão 40 mg/mL', conc: 40, tipo: 'mL' },
              { label: 'Cápsula 50 mg', conc: 50, tipo: 'comprimido' },
              { label: 'Cápsula 150 mg', conc: 150, tipo: 'comprimido' },
              { label: 'Frasco amp. 2 mg/mL (EV)', conc: 2, tipo: 'mL' },
            ],
          },
          {
            id: 'candidíase-sistêmica',
            label: 'Candidíase Sistêmica / Invasiva',
            dose_min: 6, dose_max: 12, dose_max_abs: 400,
            unidade: 'mg/kg/dia', freq: '1x ao dia',
            obs: 'Ataque: 12 mg/kg. Manutenção: 6–12 mg/kg/dia. Máx 400 mg/dia.',
            apresentacoes: [
              { label: 'Frasco amp. 2 mg/mL (EV)', conc: 2, tipo: 'mL' },
              { label: 'Cápsula 150 mg', conc: 150, tipo: 'comprimido' },
            ],
          },
          {
            id: 'meningite-criptococica',
            label: 'Meningite Criptocócica (manutenção)',
            dose_min: 6, dose_max: 12, dose_max_abs: 400,
            unidade: 'mg/kg/dia', freq: '1x ao dia por 8 semanas',
            obs: 'Consolidação após anfotericina: 6–12 mg/kg/dia × 8 semanas. Máx 400 mg/dia.',
            apresentacoes: [
              { label: 'Frasco amp. 2 mg/mL (EV)', conc: 2, tipo: 'mL' },
              { label: 'Cápsula 150 mg', conc: 150, tipo: 'comprimido' },
            ],
          },
          {
            id: 'profilaxia-candida',
            label: 'Profilaxia de Candidíase (imunossuprimidos)',
            dose_min: 3, dose_max: 6, dose_max_abs: 200,
            unidade: 'mg/kg/dia', freq: '1x ao dia',
            obs: 'RN prematuro < 1.500 g: 3–6 mg/kg/dia × 6 semanas. Imunossuprimidos: 3 mg/kg/dia.',
            apresentacoes: [
              { label: 'Suspensão 10 mg/mL', conc: 10, tipo: 'mL' },
              { label: 'Frasco amp. 2 mg/mL (EV)', conc: 2, tipo: 'mL' },
            ],
          },
        ],
        alerta: '⚠️ Interações medicamentosas frequentes (inibidor CYP2C9/3A4). Monitorar transaminases em uso prolongado.',
      },
      {
        id: 'nistatina',
        name: 'Nistatina',
        sinonimo: null,
        marcas: 'Micostatin, Nistatina',
        descricao: 'Antifúngico poliênico tópico/oral, não absorvido sistemicamente. Indicado para candidíase oral e intestinal.',
        indicacoes: [
          {
            id: 'candidiase-oral',
            label: 'Candidíase Oral (Sapinho)',
            dose_min: 100000, dose_max: 200000, dose_max_abs: 600000,
            unidade: 'UI/dose', freq: '4 vezes ao dia por 7–14 dias',
            obs: 'RN/lactentes: 100.000 UI × 4/dia. Crianças: 100.000–200.000 UI × 4/dia. Borrifar na boca e não engolir.',
            apresentacoes: [
              { label: 'Suspensão oral 100.000 UI/mL', conc: 100000, tipo: 'mL' },
            ],
          },
        ],
        alerta: null,
      },
      {
        id: 'griseofulvina',
        name: 'Griseofulvina',
        sinonimo: null,
        marcas: 'Grisovin',
        descricao: 'Antifúngico indicado para tinea capitis (tinha da cabeça) e outras dermatofitoses.',
        indicacoes: [
          {
            id: 'tinea-capitis',
            label: 'Tinea Capitis / Dermatofitoses',
            dose_min: 10, dose_max: 20, dose_max_abs: 500,
            unidade: 'mg/kg/dia', freq: '1x ao dia por 6–12 semanas',
            obs: 'Microsize: 10–20 mg/kg/dia. Tomar com alimento gorduroso. Tinea capitis: pelo menos 6 semanas.',
            apresentacoes: [
              { label: 'Comprimido 125 mg', conc: 125, tipo: 'comprimido' },
              { label: 'Comprimido 500 mg', conc: 500, tipo: 'comprimido' },
              { label: 'Suspensão 25 mg/mL', conc: 25, tipo: 'mL' },
            ],
          },
        ],
        alerta: '⚠️ Contraindicado em < 2 anos. Evitar exposição solar. Teratogênico.',
      },
      {
        id: 'itraconazol',
        name: 'Itraconazol',
        sinonimo: null,
        marcas: 'Sporanox, Itrax',
        descricao: 'Antifúngico triazólico de amplo espectro para dermatofitoses, candidíase e aspergilose.',
        indicacoes: [
          {
            id: 'onicomicose-tinea',
            label: 'Tinea / Onicomicose',
            dose_min: 3, dose_max: 5, dose_max_abs: 200,
            unidade: 'mg/kg/dia', freq: '1x ao dia por 2–4 semanas',
            obs: 'Tomar com alimento. Solução oral em jejum. Máx 200 mg/dia.',
            apresentacoes: [
              { label: 'Cápsula 100 mg', conc: 100, tipo: 'comprimido' },
              { label: 'Solução oral 10 mg/mL', conc: 10, tipo: 'mL' },
            ],
          },
        ],
        alerta: '⚠️ Hepatotóxico. Múltiplas interações medicamentosas.',
      },
    ],
  },

  // ─── ANTIBIÓTICOS ADICIONAIS ─────────────────────────────────────────────
  {
    id: 'antibioticos-adicionais',
    label: 'Antibióticos — Outros',
    icon: '🧬',
    color: 'blue',
    drugs: [
      {
        id: 'ampiclilina',
        name: 'Ampicilina',
        sinonimo: null,
        marcas: 'Binotal, Ampicillin',
        descricao: 'Penicilina de amplo espectro indicada para meningite neonatal, listeriose, ITU e sepse neonatal.',
        indicacoes: [
          {
            id: 'meningite-neonatal',
            label: 'Meningite Neonatal / Sepse',
            dose_min: 50, dose_max: 100, dose_max_abs: 3000,
            unidade: 'mg/kg/dia ÷ 2–4', freq: '6/6h ou 12/12h',
            obs: 'Sepse: 50–100 mg/kg/dia ÷ 2–3. Meningite: 200–400 mg/kg/dia ÷ 4.',
            apresentacoes: [
              { label: 'Fr. amp. 500 mg (EV/IM)', conc: 500, tipo: 'frasco' },
              { label: 'Fr. amp. 1000 mg (EV)', conc: 1000, tipo: 'frasco' },
            ],
          },
          {
            id: 'itu-pneumonia',
            label: 'ITU / Pneumonia (ambulatorial)',
            dose_min: 50, dose_max: 100, dose_max_abs: 500,
            unidade: 'mg/kg/dia ÷ 4', freq: '6/6h por 7–10 dias',
            obs: 'VO: 50–100 mg/kg/dia ÷ 4. Máx 3 g/dia.',
            apresentacoes: [
              { label: 'Suspensão 250 mg/5 mL (50 mg/mL)', conc: 50, tipo: 'mL' },
              { label: 'Cápsula 250 mg', conc: 250, tipo: 'comprimido' },
              { label: 'Cápsula 500 mg', conc: 500, tipo: 'comprimido' },
            ],
          },
        ],
        alerta: null,
      },
      {
        id: 'clindamicina',
        name: 'Clindamicina',
        sinonimo: null,
        marcas: 'Dalacin C',
        descricao: 'Lincosamida indicada para infecções por anaeróbios, MRSA ambulatorial e infecções de pele graves.',
        indicacoes: [
          {
            id: 'pele-grave',
            label: 'Infecção de Pele Grave / MRSA Ambulatorial',
            dose_min: 10, dose_max: 20, dose_max_abs: 600,
            unidade: 'mg/kg/dia ÷ 3', freq: '8/8h por 7–14 dias',
            obs: 'VO: 10–20 mg/kg/dia ÷ 3. EV: 20–40 mg/kg/dia ÷ 3–4. Máx 600 mg/dose EV.',
            apresentacoes: [
              { label: 'Cápsula 300 mg', conc: 300, tipo: 'comprimido' },
              { label: 'Solução oral 75 mg/5 mL (15 mg/mL)', conc: 15, tipo: 'mL' },
              { label: 'Ampola 150 mg/mL (EV/IM)', conc: 150, tipo: 'mL' },
            ],
          },
        ],
        alerta: '⚠️ Risco de colite pseudomembranosa por C. difficile.',
      },
      {
        id: 'cefazolina',
        name: 'Cefazolina',
        sinonimo: null,
        marcas: 'Kefazol',
        descricao: 'Cefalosporina de 1ª geração parenteral. Profilaxia cirúrgica e infecções de pele/osso.',
        indicacoes: [
          {
            id: 'profilaxia-cirurgica',
            label: 'Profilaxia Cirúrgica',
            dose_min: 25, dose_max: 30, dose_max_abs: 2000,
            unidade: 'mg/kg/dose', freq: 'Dose única (30–60 min antes)',
            obs: '25–30 mg/kg. Dose máxima: 2 g. Repetir a cada 4h em cirurgias longas.',
            apresentacoes: [
              { label: 'Fr. amp. 500 mg (EV/IM)', conc: 500, tipo: 'frasco' },
              { label: 'Fr. amp. 1000 mg (EV)', conc: 1000, tipo: 'frasco' },
            ],
          },
          {
            id: 'infecção-grave',
            label: 'Infecção Grave (Pele/Osso)',
            dose_min: 25, dose_max: 100, dose_max_abs: 2000,
            unidade: 'mg/kg/dia ÷ 3', freq: '8/8h',
            obs: 'Leve: 25 mg/kg/dia. Grave: 100 mg/kg/dia. Máx 6 g/dia.',
            apresentacoes: [
              { label: 'Fr. amp. 1000 mg (EV)', conc: 1000, tipo: 'frasco' },
            ],
          },
        ],
        alerta: null,
      },
      {
        id: 'cefuroxima',
        name: 'Cefuroxima',
        sinonimo: null,
        marcas: 'Zinnat, Cefurox',
        descricao: 'Cefalosporina de 2ª geração indicada para OMA, sinusite, pneumonia leve e ITU.',
        indicacoes: [
          {
            id: 'oma-pneumonia',
            label: 'OMA / Sinusite / Pneumonia Leve',
            dose_min: 20, dose_max: 30, dose_max_abs: 500,
            unidade: 'mg/kg/dia ÷ 2', freq: '12/12h por 7–10 dias',
            obs: 'OMA: 25–30 mg/kg/dia ÷ 2. Máx 500 mg/dose.',
            apresentacoes: [
              { label: 'Suspensão 125 mg/5 mL (25 mg/mL)', conc: 25, tipo: 'mL' },
              { label: 'Comprimido 250 mg', conc: 250, tipo: 'comprimido' },
              { label: 'Comprimido 500 mg (≥12 anos)', conc: 500, tipo: 'comprimido', idade_min: 12 },
            ],
          },
        ],
        alerta: null,
      },
      {
        id: 'cefpodoxima',
        name: 'Cefpodoxima',
        sinonimo: null,
        marcas: 'Orelox, Cefpodox',
        descricao: 'Cefalosporina de 3ª geração oral para OMA, sinusite, pneumonia e ITU.',
        indicacoes: [
          {
            id: 'oma-itu',
            label: 'OMA / Sinusite / ITU / Pneumonia',
            dose_min: 5, dose_max: 10, dose_max_abs: 200,
            unidade: 'mg/kg/dia ÷ 2', freq: '12/12h por 5–10 dias',
            obs: 'Máx 200 mg/dose. OMA: 5 mg/kg/dose × 2/dia × 5 dias.',
            apresentacoes: [
              { label: 'Suspensão 10 mg/mL', conc: 10, tipo: 'mL' },
              { label: 'Comprimido 100 mg', conc: 100, tipo: 'comprimido' },
              { label: 'Comprimido 200 mg (≥12 anos)', conc: 200, tipo: 'comprimido', idade_min: 12 },
            ],
          },
        ],
        alerta: null,
      },
      {
        id: 'cefdinir',
        name: 'Cefdinir',
        sinonimo: null,
        marcas: 'Omnicef',
        descricao: 'Cefalosporina de 3ª geração oral com boa cobertura para patógenos respiratórios.',
        indicacoes: [
          {
            id: 'respiratorio',
            label: 'OMA / Faringoamigdalite / Pneumonia',
            dose_min: 7, dose_max: 14, dose_max_abs: 600,
            unidade: 'mg/kg/dia ÷ 1–2', freq: '1x ou 2x ao dia por 5–10 dias',
            obs: 'OMA (6m–12a): 14 mg/kg/dia 1×/dia × 5d. Máx 600 mg/dia.',
            apresentacoes: [
              { label: 'Suspensão 25 mg/mL', conc: 25, tipo: 'mL' },
              { label: 'Cápsula 300 mg', conc: 300, tipo: 'comprimido' },
            ],
          },
        ],
        alerta: null,
      },
      {
        id: 'penicilina-benzatina',
        name: 'Penicilina Benzatina',
        sinonimo: 'Benzetacil',
        marcas: 'Benzetacil',
        descricao: 'Penicilina de depósito indicada para faringoamigdalite estreptocócica, sífilis e febre reumática.',
        indicacoes: [
          {
            id: 'faringite',
            label: 'Faringoamigdalite Estreptocócica',
            dose_min: 600000, dose_max: 1200000, dose_max_abs: 1200000,
            unidade: 'UI — dose única IM', freq: 'Dose única IM',
            obs: '< 25 kg: 600.000 UI IM. ≥ 25 kg: 1.200.000 UI IM. Dose única.',
            apresentacoes: [
              { label: 'Fr. 600.000 UI (IM)', conc: 600000, tipo: 'frasco' },
              { label: 'Fr. 1.200.000 UI (IM)', conc: 1200000, tipo: 'frasco' },
            ],
          },
          {
            id: 'profilaxia-reumatica',
            label: 'Profilaxia Febre Reumática',
            dose_min: 600000, dose_max: 1200000, dose_max_abs: 1200000,
            unidade: 'UI — a cada 21 dias IM', freq: 'A cada 21 dias',
            obs: '< 25 kg: 600.000 UI. ≥ 25 kg: 1.200.000 UI. A cada 3 semanas indefinidamente.',
            apresentacoes: [
              { label: 'Fr. 600.000 UI (IM)', conc: 600000, tipo: 'frasco' },
              { label: 'Fr. 1.200.000 UI (IM)', conc: 1200000, tipo: 'frasco' },
            ],
          },
        ],
        alerta: '⚠️ Nunca administrar EV. Ter adrenalina disponível (risco de anafilaxia). Aplicar IM profundo.',
      },
      {
        id: 'doxiciclina',
        name: 'Doxiciclina',
        sinonimo: null,
        marcas: 'Vibramicina, Doxiciclina',
        descricao: 'Tetraciclina indicada para micoplasma, clamídia, RMSF e outras infecções em ≥ 8 anos.',
        indicacoes: [
          {
            id: 'pneumonia-atipica',
            label: 'Pneumonia Atípica / Mico / Clamídia (≥ 8 anos)',
            dose_min: 2, dose_max: 4, dose_max_abs: 200,
            unidade: 'mg/kg/dia ÷ 2', freq: '12/12h por 7–10 dias',
            obs: 'Ataque: 4 mg/kg no D1 (máx 200 mg). Manutenção: 2 mg/kg × 2/dia. Apenas ≥ 8 anos.',
            apresentacoes: [
              { label: 'Cápsula 100 mg (≥8 anos)', conc: 100, tipo: 'comprimido', idade_min: 8 },
              { label: 'Suspensão 5 mg/mL', conc: 5, tipo: 'mL' },
            ],
          },
        ],
        alerta: '⚠️ Contraindicada < 8 anos (depósito em ossos/dentes).',
      },
      {
        id: 'eritromicina',
        name: 'Eritromicina',
        sinonimo: null,
        marcas: 'Eritrocina, Ilosone',
        descricao: 'Macrolídeo histórico para coqueluche, micoplasma e infecções por organismos sensíveis.',
        indicacoes: [
          {
            id: 'coqueluche',
            label: 'Coqueluche (Bordetella pertussis)',
            dose_min: 10, dose_max: 12.5, dose_max_abs: 500,
            unidade: 'mg/kg/dose', freq: '6/6h por 14 dias',
            obs: '40–50 mg/kg/dia ÷ 4 × 14 dias. Alternativa: azitromicina.',
            apresentacoes: [
              { label: 'Suspensão 25 mg/mL', conc: 25, tipo: 'mL' },
              { label: 'Comprimido 500 mg', conc: 500, tipo: 'comprimido' },
            ],
          },
        ],
        alerta: '⚠️ Associada a estenose hipertrófica do piloro em < 2 semanas.',
      },
      {
        id: 'gentamicina',
        name: 'Gentamicina',
        sinonimo: null,
        marcas: 'Garamicina',
        descricao: 'Aminoglicosídeo indicado para sepse neonatal, infecções por gram-negativos e sinergia.',
        indicacoes: [
          {
            id: 'sepse-neonatal',
            label: 'Sepse Neonatal (< 1 mês)',
            dose_min: 2.5, dose_max: 5, dose_max_abs: 120,
            unidade: 'mg/kg/dose', freq: 'A cada 24–48h (neonatos)',
            obs: 'RN 0–7d: 4–5 mg/kg a cada 48h. RN 8–28d: 4 mg/kg a cada 36h. Monitorar nível sérico.',
            apresentacoes: [
              { label: 'Ampola 40 mg/mL (EV/IM)', conc: 40, tipo: 'mL' },
              { label: 'Ampola 10 mg/mL pediátrica', conc: 10, tipo: 'mL' },
            ],
          },
          {
            id: 'gram-negativos',
            label: 'Infecção por Gram-negativos (Crianças)',
            dose_min: 5, dose_max: 7.5, dose_max_abs: 300,
            unidade: 'mg/kg/dia', freq: '1x ao dia (dose estendida)',
            obs: '5–7,5 mg/kg/dia dose única. Monitorar função renal e nível sérico.',
            apresentacoes: [
              { label: 'Ampola 40 mg/mL (EV/IM)', conc: 40, tipo: 'mL' },
            ],
          },
        ],
        alerta: '⚠️ Nefrotóxico e ototóxico. Monitorar função renal e nível sérico.',
      },
      {
        id: 'nitrofurantoina',
        name: 'Nitrofurantoína',
        sinonimo: null,
        marcas: 'Macrodantina, Nitrofur',
        descricao: 'Antibiótico indicado para ITU não complicada e profilaxia de infecção urinária recorrente.',
        indicacoes: [
          {
            id: 'itu',
            label: 'ITU Não Complicada',
            dose_min: 5, dose_max: 7, dose_max_abs: 100,
            unidade: 'mg/kg/dia ÷ 4', freq: '6/6h por 5–7 dias',
            obs: 'Tratamento: 5–7 mg/kg/dia ÷ 4. Profilaxia: 1–2 mg/kg/noite.',
            apresentacoes: [
              { label: 'Cápsula 100 mg', conc: 100, tipo: 'comprimido' },
              { label: 'Suspensão 5 mg/mL', conc: 5, tipo: 'mL' },
            ],
          },
          {
            id: 'profilaxia-itu',
            label: 'Profilaxia ITU Recorrente',
            dose_min: 1, dose_max: 2, dose_max_abs: 50,
            unidade: 'mg/kg/dose', freq: 'À noite (1x ao dia)',
            obs: '1–2 mg/kg/noite. Uso prolongado.',
            apresentacoes: [
              { label: 'Suspensão 5 mg/mL', conc: 5, tipo: 'mL' },
              { label: 'Cápsula 100 mg', conc: 100, tipo: 'comprimido' },
            ],
          },
        ],
        alerta: '⚠️ Contraindicada em < 1 mês (risco de anemia hemolítica). Evitar em insuficiência renal.',
      },
      {
        id: 'ciprofloxacino',
        name: 'Ciprofloxacino',
        sinonimo: null,
        marcas: 'Cipro, Ciproflox',
        descricao: 'Fluoroquinolona para infecções graves por gram-negativos, ITU complicada e gastrenterite bacteriana.',
        indicacoes: [
          {
            id: 'itu-grave',
            label: 'ITU Complicada / Infecções Gram-negativas',
            dose_min: 10, dose_max: 20, dose_max_abs: 750,
            unidade: 'mg/kg/dia ÷ 2', freq: '12/12h por 7–14 dias',
            obs: 'VO: 10–20 mg/kg/dia ÷ 2. EV: 10–15 mg/kg/dia ÷ 2. Máx 750 mg/dose VO.',
            apresentacoes: [
              { label: 'Comprimido 250 mg', conc: 250, tipo: 'comprimido' },
              { label: 'Comprimido 500 mg', conc: 500, tipo: 'comprimido' },
              { label: 'Suspensão 25 mg/mL', conc: 25, tipo: 'mL' },
              { label: 'Solução EV 2 mg/mL', conc: 2, tipo: 'mL' },
            ],
          },
        ],
        alerta: '⚠️ Uso criterioso em crianças (risco de artropatia). Reservar para casos sem alternativa.',
      },
    ],
  },

  // ─── ANTIVIRAIS ADICIONAIS ───────────────────────────────────────────────
  {
    id: 'antivirais',
    label: 'Antivirais',
    icon: '🦠',
    color: 'teal',
    drugs: [
      {
        id: 'valaciclovir',
        name: 'Valaciclovir',
        sinonimo: null,
        marcas: 'Valtrex',
        descricao: 'Pró-droga do aciclovir com biodisponibilidade superior, para herpes labial, genital e zóster.',
        indicacoes: [
          {
            id: 'herpes-labial',
            label: 'Herpes Labial Recorrente',
            dose_min: 20, dose_max: 20, dose_max_abs: 2000,
            unidade: 'mg/kg/dia ÷ 2', freq: '2x ao dia por 5 dias',
            obs: '≥ 12 anos: 2 g × 2 no dia 1, depois 1 g × 2 por 4 dias.',
            apresentacoes: [
              { label: 'Comprimido 500 mg', conc: 500, tipo: 'comprimido' },
              { label: 'Comprimido 1000 mg', conc: 1000, tipo: 'comprimido' },
            ],
          },
          {
            id: 'varicela-imuno',
            label: 'Varicela em Imunodeprimidos',
            dose_min: 20, dose_max: 30, dose_max_abs: 3000,
            unidade: 'mg/kg/dia ÷ 3', freq: '8/8h por 7–10 dias',
            obs: 'Imunodeprimidos: 20–30 mg/kg/dia ÷ 3. Máx 3 g/dia.',
            apresentacoes: [
              { label: 'Comprimido 1000 mg', conc: 1000, tipo: 'comprimido' },
            ],
          },
        ],
        alerta: null,
      },
      {
        id: 'ribavirina',
        name: 'Ribavirina',
        sinonimo: null,
        marcas: 'Rebetol, Virazole',
        descricao: 'Antiviral para hepatite C (associado ao interferon), bronquiolite grave por VSR e hantavirose.',
        indicacoes: [
          {
            id: 'bronquiolite-vsr',
            label: 'Bronquiolite Grave por VSR (imunodeprimidos)',
            dose_min: 20, dose_max: 20, dose_max_abs: 1200,
            unidade: 'mg/kg/dia ÷ 3', freq: '8/8h por 3–7 dias',
            obs: 'Uso restrito a imunodeprimidos graves. Aerossol: 20 mg/kg/dia ou 6 g/dia × 3–7 dias.',
            apresentacoes: [
              { label: 'Cápsula 200 mg', conc: 200, tipo: 'comprimido' },
            ],
          },
        ],
        alerta: '⚠️ Teratogênico. Uso muito restrito em pediatria. Sempre consultar especialista.',
      },
      {
        id: 'ganciclovir',
        name: 'Ganciclovir',
        sinonimo: null,
        marcas: 'Cymevene',
        descricao: 'Antiviral para infecção por citomegalovírus (CMV) em imunodeprimidos e RN com CMV congênito.',
        indicacoes: [
          {
            id: 'cmv-congenito',
            label: 'CMV Congênito Sintomático',
            dose_min: 6, dose_max: 6, dose_max_abs: 900,
            unidade: 'mg/kg/dose EV', freq: '12/12h por 6 semanas',
            obs: '6 mg/kg EV × 2/dia × 6 semanas. RN sintomáticos com acometimento neurológico.',
            apresentacoes: [
              { label: 'Fr. amp. 500 mg (EV)', conc: 500, tipo: 'frasco' },
            ],
          },
          {
            id: 'cmv-imunodeprimidos',
            label: 'CMV em Imunodeprimidos',
            dose_min: 5, dose_max: 7.5, dose_max_abs: 900,
            unidade: 'mg/kg/dose', freq: '12/12h (indução) por 14–21 dias',
            obs: 'Indução: 5 mg/kg × 2/dia × 14–21d. Manutenção: 5 mg/kg × 1/dia.',
            apresentacoes: [
              { label: 'Fr. amp. 500 mg (EV)', conc: 500, tipo: 'frasco' },
            ],
          },
        ],
        alerta: '⚠️ Mielotóxico. Monitorar hemograma. Teratogênico.',
      },
    ],
  },

  // ─── SEDAÇÃO / ANALGESIA PROCEDIMENTAL ──────────────────────────────────
  {
    id: 'sedacao-analgesia',
    label: 'Sedação e Analgesia Procedimental',
    icon: '💉',
    color: 'purple',
    drugs: [
      {
        id: 'cetamina',
        name: 'Cetamina (Ketamina)',
        sinonimo: 'Ketamina',
        marcas: 'Ketalar, Ketamin',
        descricao: 'Anestésico dissociativo com analgesia e broncodilatação. Sedação para procedimentos em urgência.',
        indicacoes: [
          {
            id: 'sedacao-proc',
            label: 'Sedação para Procedimentos Dolorosos',
            dose_min: 1, dose_max: 2, dose_max_abs: 100,
            unidade: 'mg/kg/dose EV', freq: 'Dose única. Repetir 50% se necessário.',
            obs: 'EV: 1–2 mg/kg lento em 60 seg. IM: 3–4 mg/kg. Associar midazolam 0,05 mg/kg.',
            apresentacoes: [
              { label: 'Ampola 50 mg/mL (EV/IM)', conc: 50, tipo: 'mL' },
              { label: 'Ampola 10 mg/mL (diluído EV)', conc: 10, tipo: 'mL' },
            ],
          },
          {
            id: 'broncoespasmo',
            label: 'Broncoespasmo Grave (IOT)',
            dose_min: 1, dose_max: 2, dose_max_abs: 100,
            unidade: 'mg/kg/dose', freq: 'Dose de indução. Manutenção 0,5–1 mg/kg/h EV.',
            obs: 'Broncoespasmo grave refratário: 1–2 mg/kg EV. Broncodilatador.',
            apresentacoes: [
              { label: 'Ampola 50 mg/mL', conc: 50, tipo: 'mL' },
            ],
          },
        ],
        alerta: '⚠️ Aumenta secreções. Usar atropina profilaticamente. Laringoespasmo raro mas possível.',
      },
      {
        id: 'propofol',
        name: 'Propofol',
        sinonimo: null,
        marcas: 'Diprivan',
        descricao: 'Hipnótico EV para sedação em UTI e indução anestésica.',
        indicacoes: [
          {
            id: 'inducao-anestesia',
            label: 'Indução Anestésica',
            dose_min: 2, dose_max: 3, dose_max_abs: 200,
            unidade: 'mg/kg/dose', freq: 'Dose única EV lenta',
            obs: 'Crianças 3–16 anos: 2,5 mg/kg EV lento. Máx 200 mg. Pode causar dor na injeção.',
            apresentacoes: [
              { label: 'Ampola 10 mg/mL (EV)', conc: 10, tipo: 'mL' },
            ],
          },
        ],
        alerta: '⚠️ Contraindicado < 3 anos para sedação em UTI. Risco de síndrome do infusão de propofol.',
      },
      {
        id: 'fentanil',
        name: 'Fentanil',
        sinonimo: null,
        marcas: 'Fentanil',
        descricao: 'Opioide de ação curta e rápida para analgesia e sedação em UTI e procedimentos.',
        indicacoes: [
          {
            id: 'analgesia-proc',
            label: 'Analgesia para Procedimentos',
            dose_min: 1, dose_max: 2, dose_max_abs: 100,
            unidade: 'mcg/kg/dose EV', freq: 'Dose única. Repetir se necessário.',
            obs: '1–2 mcg/kg EV em 3–5 min. Infusão contínua: 1–5 mcg/kg/h.',
            apresentacoes: [
              { label: 'Ampola 0,05 mg/mL = 50 mcg/mL (EV)', conc: 0.05, tipo: 'mL' },
            ],
          },
          {
            id: 'analgesia-uti',
            label: 'Analgesia Contínua em UTI',
            dose_min: 1, dose_max: 5, dose_max_abs: 200,
            unidade: 'mcg/kg/h (infusão)', freq: 'Infusão contínua EV',
            obs: 'Iniciar 1–2 mcg/kg/h. Titular conforme resposta. Máx 5 mcg/kg/h.',
            apresentacoes: [
              { label: 'Ampola 50 mcg/mL (EV)', conc: 0.05, tipo: 'mL' },
            ],
          },
        ],
        alerta: '⚠️ Monitorar FR e SpO₂. Ter naloxona disponível.',
      },
      {
        id: 'nalbufina',
        name: 'Nalbufina',
        sinonimo: null,
        marcas: 'Nubain',
        descricao: 'Opioide misto agonista-antagonista para dor moderada a intensa em procedimentos.',
        indicacoes: [
          {
            id: 'dor-moderada',
            label: 'Dor Moderada a Intensa',
            dose_min: 0.1, dose_max: 0.2, dose_max_abs: 20,
            unidade: 'mg/kg/dose EV/IM', freq: 'A cada 3–6h se necessário',
            obs: '0,1–0,2 mg/kg EV/IM/SC. Máx 20 mg/dose.',
            apresentacoes: [
              { label: 'Ampola 10 mg/mL (EV/IM/SC)', conc: 10, tipo: 'mL' },
            ],
          },
        ],
        alerta: '⚠️ Efeito teto analgésico. Pode reverter efeito de outros opioides.',
      },
      {
        id: 'tramadol',
        name: 'Tramadol',
        sinonimo: null,
        marcas: 'Tramal, Ultram',
        descricao: 'Opioide de ação mista indicado para dor moderada a intensa em ≥ 12 anos.',
        indicacoes: [
          {
            id: 'dor-moderada',
            label: 'Dor Moderada a Intensa (≥ 12 anos)',
            dose_min: 1, dose_max: 2, dose_max_abs: 100,
            unidade: 'mg/kg/dose', freq: '6/6h ou 8/8h',
            obs: 'Apenas ≥ 12 anos. Máx 100 mg/dose, 400 mg/dia.',
            apresentacoes: [
              { label: 'Gotas 100 mg/mL (1 gota = 2,5 mg)', conc: 100, tipo: 'gotas', mL_por_gota: 0.025, idade_min: 12 },
              { label: 'Ampola 50 mg/mL (EV/IM)', conc: 50, tipo: 'mL', idade_min: 12 },
              { label: 'Comprimido 50 mg (≥12 anos)', conc: 50, tipo: 'comprimido', idade_min: 12 },
              { label: 'Comprimido 100 mg SR (≥12 anos)', conc: 100, tipo: 'comprimido', idade_min: 12 },
            ],
          },
        ],
        alerta: '⚠️ Contraindicado < 12 anos. Risco de depressão respiratória.',
      },
      {
        id: 'atropina',
        name: 'Atropina',
        sinonimo: null,
        marcas: 'Atropina',
        descricao: 'Anticolinérgico usado para bradicardia, pré-medicação anestésica e intoxicação por organofosforado.',
        indicacoes: [
          {
            id: 'bradicardia',
            label: 'Bradicardia Sintomática',
            dose_min: 0.01, dose_max: 0.02, dose_max_abs: 0.5,
            unidade: 'mg/kg/dose', freq: 'Dose única EV. Repetir 1× em 5 min se necessário.',
            obs: 'Dose mínima: 0,1 mg (evitar efeito paradoxal). Máx 0,5 mg crianças, 1 mg adolescentes.',
            apresentacoes: [
              { label: 'Ampola 0,5 mg/mL (EV/IM)', conc: 0.5, tipo: 'mL' },
              { label: 'Ampola 1 mg/mL (EV)', conc: 1, tipo: 'mL' },
            ],
          },
          {
            id: 'premed-anestesia',
            label: 'Pré-medicação Anestésica',
            dose_min: 0.02, dose_max: 0.02, dose_max_abs: 0.4,
            unidade: 'mg/kg/dose IM', freq: 'Dose única (30–60 min antes)',
            obs: '0,01–0,02 mg/kg IM 30–60 min antes. Mín 0,1 mg. Máx 0,4 mg.',
            apresentacoes: [
              { label: 'Ampola 0,5 mg/mL (IM)', conc: 0.5, tipo: 'mL' },
            ],
          },
        ],
        alerta: '⚠️ Dose mínima 0,1 mg (bradicardia paradoxal se < 0,1 mg).',
      },
      {
        id: 'naloxona',
        name: 'Naloxona',
        sinonimo: null,
        marcas: 'Narcan',
        descricao: 'Antagonista opioide para reversão de depressão respiratória por opioides.',
        indicacoes: [
          {
            id: 'reversao-opioides',
            label: 'Reversão de Depressão por Opioides',
            dose_min: 0.01, dose_max: 0.1, dose_max_abs: 2,
            unidade: 'mg/kg/dose', freq: 'Repetir a cada 2–3 min se necessário',
            obs: '0,01 mg/kg EV/IM/IN. Dose inicial. Máx 2 mg/dose. Pode precisar de repetições.',
            apresentacoes: [
              { label: 'Ampola 0,4 mg/mL (EV/IM)', conc: 0.4, tipo: 'mL' },
              { label: 'Ampola 1 mg/mL (EV)', conc: 1, tipo: 'mL' },
            ],
          },
        ],
        alerta: '⚠️ Meia-vida curta (30–90 min): reaplicar se opioide de ação prolongada. Monitorar FR e SpO₂.',
      },
    ],
  },

  // ─── NEONATOLOGIA ────────────────────────────────────────────────────────
  {
    id: 'neonatologia',
    label: 'Neonatologia',
    icon: '👶',
    color: 'pink',
    drugs: [
      {
        id: 'surfactante',
        name: 'Surfactante Exógeno',
        sinonimo: 'Beractant / Poractant',
        marcas: 'Survanta, Curosurf',
        descricao: 'Surfactante pulmonar exógeno para SDR neonatal em prematuros.',
        indicacoes: [
          {
            id: 'sdr-profilaxia',
            label: 'SDR — Profilaxia / Resgate Precoce',
            dose_min: 100, dose_max: 200, dose_max_abs: 400,
            unidade: 'mg/kg/dose IT', freq: 'Dose única IT. Repetir em 12h se necessário.',
            obs: 'Beractant (Survanta): 100 mg/kg IT. Poractant (Curosurf): 100–200 mg/kg IT.',
            apresentacoes: [
              { label: 'Survanta 200 mg/8 mL (25 mg/mL)', conc: 25, tipo: 'mL' },
              { label: 'Curosurf 120 mg/1,5 mL (80 mg/mL)', conc: 80, tipo: 'mL' },
            ],
          },
        ],
        alerta: '🚨 Uso exclusivo em UTIN. Administração intratraqueal por profissional treinado.',
      },
      {
        id: 'cafeina-citrato',
        name: 'Cafeína Citrato',
        sinonimo: null,
        marcas: 'Cafcit',
        descricao: 'Estimulante respiratório para apneia da prematuridade.',
        indicacoes: [
          {
            id: 'apneia-prematuridade',
            label: 'Apneia da Prematuridade',
            dose_min: 20, dose_max: 20, dose_max_abs: 200,
            unidade: 'mg/kg (ataque) EV/VO', freq: 'Ataque: 20 mg/kg; Manutenção: 5–10 mg/kg/dia',
            obs: 'Ataque: 20 mg/kg. Manutenção: 5–10 mg/kg/dia 1×/dia. EV em 30 min.',
            apresentacoes: [
              { label: 'Solução 10 mg/mL (EV/VO)', conc: 10, tipo: 'mL' },
              { label: 'Solução 20 mg/mL', conc: 20, tipo: 'mL' },
            ],
          },
        ],
        alerta: null,
      },
      {
        id: 'indometacina',
        name: 'Indometacina',
        sinonimo: null,
        marcas: 'Indocin IV',
        descricao: 'AINE EV para fechamento farmacológico de canal arterial persistente (PCA) em prematuros.',
        indicacoes: [
          {
            id: 'pca',
            label: 'Canal Arterial Persistente (PCA)',
            dose_min: 0.1, dose_max: 0.2, dose_max_abs: 0.2,
            unidade: 'mg/kg/dose EV', freq: 'A cada 12–24h × 3 doses',
            obs: '< 48h: 0,1 mg/kg × 3. 2–7d: 0,2 mg/kg × 3. > 7d: 0,25 mg/kg × 3.',
            apresentacoes: [
              { label: 'Fr. amp. 1 mg (EV — UTIN)', conc: 1, tipo: 'frasco' },
            ],
          },
        ],
        alerta: '⚠️ Monitorar função renal, diurese e plaquetas. Contraindicado em hemorragia ativa.',
      },
      {
        id: 'ibuprofeno-neonatal',
        name: 'Ibuprofeno (PCA neonatal)',
        sinonimo: null,
        marcas: 'Pedea',
        descricao: 'AINE EV alternativa à indometacina para fechamento farmacológico do canal arterial em prematuros.',
        indicacoes: [
          {
            id: 'pca',
            label: 'Canal Arterial Persistente (PCA)',
            dose_min: 5, dose_max: 10, dose_max_abs: 10,
            unidade: 'mg/kg/dose EV', freq: 'D1: 10 mg/kg; D2 e D3: 5 mg/kg (a cada 24h)',
            obs: 'D1: 10 mg/kg. D2: 5 mg/kg. D3: 5 mg/kg. Infundir em 15 min.',
            apresentacoes: [
              { label: 'Fr. amp. 5 mg/mL — Pedea (EV)', conc: 5, tipo: 'mL' },
            ],
          },
        ],
        alerta: '⚠️ Uso exclusivo em UTIN. Monitorar função renal.',
      },
      {
        id: 'vitamina-k1-neonatal',
        name: 'Vitamina K1 (Fitomenadiona)',
        sinonimo: 'Fitomenadiona',
        marcas: 'Kanakion',
        descricao: 'Prevenção da doença hemorrágica do RN. Dose única após o parto.',
        indicacoes: [
          {
            id: 'profilaxia-rn',
            label: 'Profilaxia Doença Hemorrágica do RN',
            dose_min: 1, dose_max: 2, dose_max_abs: 2,
            unidade: 'mg — dose única IM', freq: 'Dose única ao nascer',
            obs: 'RN a termo: 1 mg IM. Prematuros < 1.500g: 0,5 mg IM.',
            apresentacoes: [
              { label: 'Ampola 10 mg/mL (IM)', conc: 10, tipo: 'mL' },
              { label: 'Ampola 2 mg/0,2 mL pediátrica', conc: 10, tipo: 'mL' },
            ],
          },
        ],
        alerta: null,
      },
      {
        id: 'fenobarbital-neonatal',
        name: 'Fenobarbital (Neonatal)',
        sinonimo: null,
        marcas: 'Gardenal',
        descricao: 'Anticonvulsivante de primeira linha para convulsões neonatais.',
        indicacoes: [
          {
            id: 'convulsao-neonatal',
            label: 'Convulsão Neonatal',
            dose_min: 20, dose_max: 40, dose_max_abs: 40,
            unidade: 'mg/kg (ataque EV)', freq: 'Ataque EV; Manutenção: 3–5 mg/kg/dia',
            obs: 'Ataque: 20 mg/kg EV lento. Pode repetir 10–20 mg/kg. Máx 40 mg/kg.',
            apresentacoes: [
              { label: 'Ampola 100 mg/mL (EV)', conc: 100, tipo: 'mL' },
            ],
          },
        ],
        alerta: '⚠️ Infundir < 1 mg/kg/min. Monitorar respiração.',
      },
    ],
  },

  // ─── DERMATOLOGIA ────────────────────────────────────────────────────────
  {
    id: 'dermatologia',
    label: 'Dermatologia',
    icon: '🧴',
    color: 'amber',
    drugs: [
      {
        id: 'permetrina',
        name: 'Permetrina',
        sinonimo: null,
        marcas: 'Kwell, Nix',
        descricao: 'Pediculicida e escabicida tópico de primeira escolha.',
        indicacoes: [
          {
            id: 'pediculose',
            label: 'Pediculose (Piolho)',
            dose_min: 1, dose_max: 1, dose_max_abs: 1,
            unidade: '% — aplicação tópica', freq: 'Dose única. Repetir em 7–10 dias.',
            obs: 'Permetrina 1% (shampoo/loção). Aplicar nos cabelos úmidos, deixar 10 min, enxaguar.',
            apresentacoes: [
              { label: 'Shampoo/Loção 1% (tópico)', conc: 10, tipo: 'mL' },
            ],
          },
          {
            id: 'escabiose',
            label: 'Escabiose (Sarna)',
            dose_min: 5, dose_max: 5, dose_max_abs: 5,
            unidade: '% — aplicação tópica', freq: 'Reaplicar em 1 semana.',
            obs: 'Permetrina 5% (creme). Aplicar de pescoço para baixo. Deixar 8–14h. Repetir em 1 semana.',
            apresentacoes: [
              { label: 'Creme 5% (tópico)', conc: 50, tipo: 'mL' },
            ],
          },
        ],
        alerta: null,
      },
      {
        id: 'benzoato-benzila',
        name: 'Benzoato de Benzila',
        sinonimo: null,
        marcas: 'Benzoato de Benzila',
        descricao: 'Escabicida e pediculicida alternativo à permetrina.',
        indicacoes: [
          {
            id: 'escabiose',
            label: 'Escabiose (Sarna)',
            dose_min: 25, dose_max: 25, dose_max_abs: 25,
            unidade: '% — aplicação tópica', freq: '2 aplicações em 24h. Repetir em 1 semana.',
            obs: '> 2 anos: benzoato 25%. Aplicar de pescoço para baixo, deixar 24h, banho.',
            apresentacoes: [
              { label: 'Loção 25% (tópico)', conc: 250, tipo: 'mL' },
            ],
          },
        ],
        alerta: '⚠️ Diluir para 12,5% em < 2 anos.',
      },
      {
        id: 'mupirocina',
        name: 'Mupirocina',
        sinonimo: null,
        marcas: 'Bactroban',
        descricao: 'Antibiótico tópico para impetigo e infecções por S. aureus da pele.',
        indicacoes: [
          {
            id: 'impetigo',
            label: 'Impetigo / Infecção de Pele por S. aureus',
            dose_min: 2, dose_max: 2, dose_max_abs: 2,
            unidade: '% — aplicação tópica', freq: '3 vezes ao dia por 5–7 dias',
            obs: 'Mupirocina 2% pomada. Aplicar em pequena camada sobre a lesão 3×/dia × 5–7 dias.',
            apresentacoes: [
              { label: 'Pomada 2% (tópico)', conc: 20, tipo: 'mL' },
            ],
          },
        ],
        alerta: null,
      },
      {
        id: 'aciclovir-topico',
        name: 'Aciclovir (Tópico)',
        sinonimo: null,
        marcas: 'Zovirax creme',
        descricao: 'Antiviral tópico para herpes labial.',
        indicacoes: [
          {
            id: 'herpes-labial',
            label: 'Herpes Labial',
            dose_min: 5, dose_max: 5, dose_max_abs: 5,
            unidade: '% — aplicação tópica', freq: '5 vezes ao dia por 5 dias',
            obs: 'Aplicar sobre a lesão 5×/dia desde o início dos pródromos. Não é absorvido sistemicamente.',
            apresentacoes: [
              { label: 'Creme 5% (tópico)', conc: 50, tipo: 'mL' },
            ],
          },
        ],
        alerta: null,
      },
    ],
  },

  // ─── ANTICONVULSIVANTES DE MANUTENÇÃO ────────────────────────────────────
  {
    id: 'anticonvulsivantes',
    label: 'Anticonvulsivantes (Manutenção)',
    icon: '⚡',
    color: 'purple',
    drugs: [
      {
        id: 'acido-valproico',
        name: 'Ácido Valproico',
        sinonimo: 'Valproato de Sódio',
        marcas: 'Depakene, Depakote',
        descricao: 'Anticonvulsivante de amplo espectro para epilepsia generalizada, ausências e síndrome de Lennox-Gastaut.',
        indicacoes: [
          {
            id: 'epilepsia',
            label: 'Epilepsia Generalizada / Ausências',
            dose_min: 10, dose_max: 15, dose_max_abs: 500,
            unidade: 'mg/kg/dia ÷ 2–3', freq: '8/8h ou 12/12h',
            obs: 'Iniciar 10–15 mg/kg/dia; aumentar 5–10 mg/kg/semana. Máx 60 mg/kg/dia (2.500 mg/dia).',
            apresentacoes: [
              { label: 'Xarope 57,6 mg/mL', conc: 57.6, tipo: 'mL' },
              { label: 'Comprimido 250 mg', conc: 250, tipo: 'comprimido' },
              { label: 'Comprimido 500 mg', conc: 500, tipo: 'comprimido' },
              { label: 'Cápsula CR 250 mg (1x/dia)', conc: 250, tipo: 'comprimido' },
            ],
          },
          {
            id: 'status-epileptico-ev',
            label: 'Status Epiléptico (EV)',
            dose_min: 15, dose_max: 45, dose_max_abs: 2500,
            unidade: 'mg/kg (ataque EV)', freq: 'Ataque: 15–45 mg/kg EV lento',
            obs: '15–45 mg/kg EV em 5–10 min. Manutenção: 1–4 mg/kg/h infusão contínua.',
            apresentacoes: [
              { label: 'Fr. amp. 100 mg/mL (EV)', conc: 100, tipo: 'frasco' },
            ],
          },
          {
            id: 'transtorno-bipolar',
            label: 'Transtorno Bipolar / Estabilizador de Humor',
            dose_min: 10, dose_max: 30, dose_max_abs: 1500,
            unidade: 'mg/kg/dia ÷ 2–3', freq: '8/8h ou 12/12h',
            obs: 'Iniciar 10–15 mg/kg/dia. Nível sérico alvo: 50–100 mcg/mL.',
            apresentacoes: [
              { label: 'Comprimido 250 mg', conc: 250, tipo: 'comprimido' },
              { label: 'Comprimido 500 mg', conc: 500, tipo: 'comprimido' },
            ],
          },
        ],
        alerta: '⚠️ Hepatotóxico em < 2 anos. Teratogênico. Monitorar nível sérico, TGO/TGP e amônia.',
      },
      {
        id: 'carbamazepina',
        name: 'Carbamazepina',
        sinonimo: null,
        marcas: 'Tegretol',
        descricao: 'Anticonvulsivante para epilepsia focal (parcial), nevralgia e transtorno bipolar.',
        indicacoes: [
          {
            id: 'epilepsia-focal',
            label: 'Epilepsia Focal',
            dose_min: 5, dose_max: 10, dose_max_abs: 400,
            unidade: 'mg/kg/dia ÷ 2–3', freq: '8/8h ou 12/12h',
            obs: 'Iniciar 5 mg/kg/dia; aumentar gradual. Máx 35 mg/kg/dia (1.000–2.000 mg/dia).',
            apresentacoes: [
              { label: 'Comprimido 200 mg', conc: 200, tipo: 'comprimido' },
              { label: 'Suspensão 20 mg/mL', conc: 20, tipo: 'mL' },
              { label: 'Comp. CR 200 mg (liberação prolongada)', conc: 200, tipo: 'comprimido' },
              { label: 'Comp. CR 400 mg (liberação prolongada)', conc: 400, tipo: 'comprimido' },
            ],
          },
          {
            id: 'nevralgia',
            label: 'Nevralgia do Trigêmeo / Dor Neuropática',
            dose_min: 5, dose_max: 10, dose_max_abs: 400,
            unidade: 'mg/kg/dia ÷ 2', freq: '12/12h — titulação lenta',
            obs: 'Iniciar 5 mg/kg/dia. Aumentar gradualmente conforme resposta. Monitorar nível sérico (4–12 mcg/mL).',
            apresentacoes: [
              { label: 'Comprimido 200 mg', conc: 200, tipo: 'comprimido' },
              { label: 'Comp. CR 400 mg', conc: 400, tipo: 'comprimido' },
            ],
          },
        ],
        alerta: '⚠️ Interações importantes. Monitorar nível sérico e hemograma (aplasia rara). Rash grave (SJS/DRESS).',
      },
      {
        id: 'lamotrigina',
        name: 'Lamotrigina',
        sinonimo: null,
        marcas: 'Lamictal',
        descricao: 'Anticonvulsivante de amplo espectro para epilepsia focal e generalizada.',
        indicacoes: [
          {
            id: 'epilepsia',
            label: 'Epilepsia Focal / Generalizada',
            dose_min: 0.5, dose_max: 5, dose_max_abs: 200,
            unidade: 'mg/kg/dia', freq: '12/12h (ajuste lento)',
            obs: 'Sem VPA: iniciar 0,6 mg/kg/dia × 2 semanas → aumentar. Com VPA: iniciar 0,15 mg/kg/dia.',
            apresentacoes: [
              { label: 'Comp. 25 mg', conc: 25, tipo: 'comprimido' },
              { label: 'Comp. 50 mg', conc: 50, tipo: 'comprimido' },
              { label: 'Comp. 100 mg', conc: 100, tipo: 'comprimido' },
            ],
          },
        ],
        alerta: '⚠️ Titulação lenta obrigatória (SJS/NET se rápida). Ajustar dose com valproato.',
      },
      {
        id: 'levetiracetam',
        name: 'Levetiracetam',
        sinonimo: null,
        marcas: 'Keppra',
        descricao: 'Anticonvulsivante de amplo espectro para epilepsia focal e generalizada.',
        indicacoes: [
          {
            id: 'epilepsia',
            label: 'Epilepsia Focal / Generalizada (VO)',
            dose_min: 10, dose_max: 20, dose_max_abs: 1500,
            unidade: 'mg/kg/dia ÷ 2', freq: '12/12h',
            obs: 'Iniciar 10 mg/kg/dia. Aumentar 10 mg/kg/2 semanas. Máx 60 mg/kg/dia (3.000 mg/dia).',
            apresentacoes: [
              { label: 'Solução oral 100 mg/mL', conc: 100, tipo: 'mL' },
              { label: 'Comp. 250 mg', conc: 250, tipo: 'comprimido' },
              { label: 'Comp. 500 mg', conc: 500, tipo: 'comprimido' },
            ],
          },
          {
            id: 'status-epileptico',
            label: 'Status Epiléptico (EV)',
            dose_min: 20, dose_max: 60, dose_max_abs: 3000,
            unidade: 'mg/kg (ataque EV)', freq: 'Infundir em 5–15 min',
            obs: '20–60 mg/kg EV (máx 3.000 mg). Infundir em 5–15 min. Alternativa ao fenobarbital.',
            apresentacoes: [
              { label: 'Fr. amp. 100 mg/mL (EV)', conc: 100, tipo: 'mL' },
            ],
          },
        ],
        alerta: '⚠️ Pode causar irritabilidade/alterações comportamentais.',
      },
      {
        id: 'topiramato',
        name: 'Topiramato',
        sinonimo: null,
        marcas: 'Topamax',
        descricao: 'Anticonvulsivante para epilepsia focal, generalizada e profilaxia de enxaqueca.',
        indicacoes: [
          {
            id: 'epilepsia',
            label: 'Epilepsia Focal / Generalizada',
            dose_min: 0.5, dose_max: 3, dose_max_abs: 200,
            unidade: 'mg/kg/dia ÷ 2', freq: '12/12h (titulação lenta)',
            obs: 'Iniciar 0,5–1 mg/kg/dia. Aumentar 0,5–1 mg/kg/semana. Máx 9 mg/kg/dia.',
            apresentacoes: [
              { label: 'Comp. 25 mg', conc: 25, tipo: 'comprimido' },
              { label: 'Comp. 50 mg', conc: 50, tipo: 'comprimido' },
              { label: 'Comp. 100 mg', conc: 100, tipo: 'comprimido' },
            ],
          },
        ],
        alerta: '⚠️ Hipersudorese e nefrolitíase. Déficit cognitivo. Hidratar bem.',
      },
      {
        id: 'clonazepam',
        name: 'Clonazepam',
        sinonimo: null,
        marcas: 'Rivotril',
        descricao: 'Benzodiazepínico anticonvulsivante para epilepsia, mioclonias e síndrome de Lennox-Gastaut.',
        indicacoes: [
          {
            id: 'epilepsia',
            label: 'Epilepsia / Mioclonias',
            dose_min: 0.01, dose_max: 0.05, dose_max_abs: 2,
            unidade: 'mg/kg/dia ÷ 2–3', freq: '8/8h ou 12/12h',
            obs: 'Iniciar 0,01 mg/kg/dia. Aumentar gradual. Máx 0,2 mg/kg/dia (20 mg/dia).',
            apresentacoes: [
              { label: 'Gotas 2,5 mg/mL (1 gota = 0,1 mg)', conc: 2.5, tipo: 'gotas', mL_por_gota: 0.04 },
              { label: 'Comp. 0,5 mg', conc: 0.5, tipo: 'comprimido' },
              { label: 'Comp. 2 mg', conc: 2, tipo: 'comprimido' },
            ],
          },
        ],
        alerta: '⚠️ Sedativo. Tolerância pode desenvolver. Não interromper abruptamente.',
      },
      {
        id: 'oxcarbazepina',
        name: 'Oxcarbazepina',
        sinonimo: null,
        marcas: 'Trileptal',
        descricao: 'Anticonvulsivante para epilepsia focal, com melhor tolerabilidade que a carbamazepina.',
        indicacoes: [
          {
            id: 'epilepsia-focal',
            label: 'Epilepsia Focal',
            dose_min: 8, dose_max: 10, dose_max_abs: 600,
            unidade: 'mg/kg/dia ÷ 2', freq: '12/12h',
            obs: 'Iniciar 8–10 mg/kg/dia ÷ 2. Aumentar gradual. Máx 46 mg/kg/dia (2.400 mg/dia).',
            apresentacoes: [
              { label: 'Suspensão 60 mg/mL', conc: 60, tipo: 'mL' },
              { label: 'Comp. 300 mg', conc: 300, tipo: 'comprimido' },
              { label: 'Comp. 600 mg', conc: 600, tipo: 'comprimido' },
            ],
          },
        ],
        alerta: '⚠️ Hiponatremia. Rash (menor que carbamazepina).',
      },
    ],
  },

  // ─── UROLOGIA / NEFROLOGIA ───────────────────────────────────────────────
  {
    id: 'nefrologia',
    label: 'Nefrologia / Urologia',
    icon: '🫘',
    color: 'cyan',
    drugs: [
      {
        id: 'desmopressina',
        name: 'Desmopressina (DDAVP)',
        sinonimo: null,
        marcas: 'Minirin, DDAVP',
        descricao: 'Análogo da vasopressina para enurese noturna, diabetes insípido e hemofilia A leve.',
        indicacoes: [
          {
            id: 'enurese',
            label: 'Enurese Noturna Primária',
            dose_min: 0.2, dose_max: 0.6, dose_max_abs: 0.6,
            unidade: 'mg/dose VO (à noite)', freq: '1x ao dia à noite',
            obs: '0,2 mg VO à noite. Aumentar para 0,4 mg se necessário. Máx 0,6 mg.',
            apresentacoes: [
              { label: 'Comp. 0,1 mg', conc: 0.1, tipo: 'comprimido' },
              { label: 'Comp. 0,2 mg', conc: 0.2, tipo: 'comprimido' },
              { label: 'Spray nasal 0,1 mg/jato', conc: 0.1, tipo: 'jatos' },
            ],
          },
          {
            id: 'diabetes-insipido',
            label: 'Diabetes Insípido Central',
            dose_min: 0.05, dose_max: 0.3, dose_max_abs: 0.4,
            unidade: 'mg/dose', freq: '2 vezes ao dia',
            obs: 'VO: 0,05–0,3 mg 2×/dia. Ajustar conforme débito urinário.',
            apresentacoes: [
              { label: 'Comp. 0,1 mg', conc: 0.1, tipo: 'comprimido' },
              { label: 'Comp. 0,2 mg', conc: 0.2, tipo: 'comprimido' },
              { label: 'Spray nasal 0,1 mg/jato', conc: 0.1, tipo: 'jatos' },
            ],
          },
        ],
        alerta: '⚠️ Risco de hiponatremia. Restringir líquidos 1h antes a 8h após uso.',
      },
      {
        id: 'oxibutinina',
        name: 'Oxibutinina',
        sinonimo: null,
        marcas: 'Ditropan, Retemic',
        descricao: 'Antimuscarínico para bexiga hiperativa, enurese e urgência urinária.',
        indicacoes: [
          {
            id: 'bexiga-hiperativa',
            label: 'Bexiga Hiperativa / Enurese',
            dose_min: 0.1, dose_max: 0.2, dose_max_abs: 5,
            unidade: 'mg/kg/dose', freq: '8/8h',
            obs: '5–9 anos: 2,5 mg × 2/dia. ≥ 9 anos: 5 mg × 2–3/dia. Máx 5 mg × 3/dia.',
            apresentacoes: [
              { label: 'Comp. 5 mg', conc: 5, tipo: 'comprimido' },
              { label: 'Xarope 1 mg/mL', conc: 1, tipo: 'mL' },
            ],
          },
        ],
        alerta: '⚠️ Contraindicado em < 5 anos. Efeitos anticolinérgicos (boca seca, constipação).',
      },
    ],
  },

  // ─── ENDOCRINOLOGIA ──────────────────────────────────────────────────────
  {
    id: 'endocrinologia',
    label: 'Endocrinologia',
    icon: '🧬',
    color: 'indigo',
    drugs: [
      {
        id: 'levotiroxina',
        name: 'Levotiroxina (T4)',
        sinonimo: null,
        marcas: 'Puran T4, Euthyrox',
        descricao: 'Hormônio tireoidiano para hipotireoidismo congênito e adquirido.',
        indicacoes: [
          {
            id: 'hipotireoidismo-congenito',
            label: 'Hipotireoidismo Congênito (< 3 meses)',
            dose_min: 10, dose_max: 15, dose_max_abs: 50,
            unidade: 'mcg/kg/dia', freq: '1x ao dia',
            obs: 'RN: 10–15 mcg/kg/dia. Lactentes: 6–8 mcg/kg/dia. Ajustar por TSH/T4.',
            apresentacoes: [
              { label: 'Comp. 25 mcg', conc: 0.025, tipo: 'comprimido' },
              { label: 'Comp. 50 mcg', conc: 0.05, tipo: 'comprimido' },
            ],
          },
          {
            id: 'hipotireoidismo-crianca',
            label: 'Hipotireoidismo Adquirido (Criança)',
            dose_min: 2, dose_max: 5, dose_max_abs: 100,
            unidade: 'mcg/kg/dia', freq: '1x ao dia em jejum',
            obs: '3–12m: 6–8 mcg/kg. 1–5a: 5–6 mcg/kg. 6–12a: 4–5 mcg/kg. >12a: 2–3 mcg/kg.',
            apresentacoes: [
              { label: 'Comp. 25 mcg', conc: 0.025, tipo: 'comprimido' },
              { label: 'Comp. 50 mcg', conc: 0.05, tipo: 'comprimido' },
              { label: 'Comp. 100 mcg', conc: 0.1, tipo: 'comprimido' },
            ],
          },
        ],
        alerta: '⚠️ Tomar em jejum. Monitorar TSH e T4 livre a cada 4–6 semanas inicialmente.',
      },
      {
        id: 'insulina-rapida',
        name: 'Insulina Regular',
        sinonimo: 'Insulina Humana Regular',
        marcas: 'Humulin R, Novolin R',
        descricao: 'Insulina de ação curta para controle da cetoacidose diabética e hiperglicemia aguda.',
        indicacoes: [
          {
            id: 'cad',
            label: 'Cetoacidose Diabética (CAD)',
            dose_min: 0.05, dose_max: 0.1, dose_max_abs: 10,
            unidade: 'UI/kg/h (infusão EV)', freq: 'Infusão contínua EV',
            obs: 'Infusão: 0,05–0,1 UI/kg/h. Não usar bolus em crianças com CAD. Monitorar K+.',
            apresentacoes: [
              { label: 'Frasco 100 UI/mL (EV/SC)', conc: 100, tipo: 'mL' },
            ],
          },
          {
            id: 'hiperglicemia',
            label: 'Hiperglicemia Aguda (SC)',
            dose_min: 0.1, dose_max: 0.3, dose_max_abs: 10,
            unidade: 'UI/kg/dose SC', freq: 'A cada 4–6h conforme glicemia',
            obs: 'Correcting dose SC: 0,1–0,3 UI/kg/dose. Monitorar glicemia a cada 1–2h.',
            apresentacoes: [
              { label: 'Frasco 100 UI/mL (SC)', conc: 100, tipo: 'mL' },
            ],
          },
        ],
        alerta: '🚨 Monitorar glicemia e potássio. Risco de hipoglicemia e hipocalemia.',
      },
      {
        id: 'glucagon',
        name: 'Glucagon',
        sinonimo: null,
        marcas: 'GlucaGen',
        descricao: 'Hormônio para tratamento da hipoglicemia grave quando acesso EV não está disponível.',
        indicacoes: [
          {
            id: 'hipoglicemia-grave',
            label: 'Hipoglicemia Grave (sem acesso EV)',
            dose_min: 0.02, dose_max: 0.03, dose_max_abs: 1,
            unidade: 'mg/kg/dose IM/SC', freq: 'Dose única. Repetir 1× se necessário.',
            obs: '< 25 kg: 0,5 mg IM. ≥ 25 kg: 1 mg IM. Monitorar glicemia. Posicionar em decúbito lateral.',
            apresentacoes: [
              { label: 'Fr. amp. 1 mg (IM/SC/EV)', conc: 1, tipo: 'frasco' },
            ],
          },
        ],
        alerta: '⚠️ Posicionar em decúbito lateral (risco de vômito). Administrar carboidratos ao acordar.',
      },
      {
        id: 'metformina',
        name: 'Metformina',
        sinonimo: null,
        marcas: 'Glifage, Glucoformin',
        descricao: 'Biguanida para diabetes mellitus tipo 2 em ≥ 10 anos e síndrome dos ovários policísticos.',
        indicacoes: [
          {
            id: 'dm2',
            label: 'DM tipo 2 (≥ 10 anos)',
            dose_min: 500, dose_max: 1000, dose_max_abs: 1000,
            unidade: 'mg/dia (dose inicial)', freq: '1–2 vezes ao dia durante refeição',
            obs: 'Iniciar 500 mg/dia durante refeição. Aumentar 500 mg/semana. Máx 2.000 mg/dia.',
            apresentacoes: [
              { label: 'Comp. 500 mg', conc: 500, tipo: 'comprimido' },
              { label: 'Comp. 850 mg', conc: 850, tipo: 'comprimido' },
              { label: 'Comp. XR 500 mg (liberação prolongada)', conc: 500, tipo: 'comprimido' },
            ],
          },
        ],
        alerta: '⚠️ Suspender em cirurgias e exames com contraste. Risco de acidose lática (raro).',
      },
    ],
  },

  // ─── REUMATOLOGIA / IMUNOSSUPRESSORES ───────────────────────────────────
  {
    id: 'reumatologia',
    label: 'Reumatologia / Imunossupressores',
    icon: '🦴',
    color: 'orange',
    drugs: [
      {
        id: 'metotrexato',
        name: 'Metotrexato',
        sinonimo: null,
        marcas: 'Metotrexato, Rheumatrex',
        descricao: 'Imunossupressor e antimetabólito indicado para artrite idiopática juvenil, psoríase e leucemia linfoblástica aguda.',
        indicacoes: [
          {
            id: 'aij',
            label: 'Artrite Idiopática Juvenil (AIJ)',
            dose_min: 10, dose_max: 15, dose_max_abs: 25,
            unidade: 'mg/m² — 1x/semana SC/VO', freq: '1x por semana',
            obs: '10–15 mg/m²/semana VO ou SC. Máx 25 mg/semana. Suplementar ácido fólico.',
            apresentacoes: [
              { label: 'Comp. 2,5 mg', conc: 2.5, tipo: 'comprimido' },
              { label: 'Comp. 10 mg', conc: 10, tipo: 'comprimido' },
              { label: 'Ampola 25 mg/mL (SC/EV)', conc: 25, tipo: 'mL' },
            ],
          },
        ],
        alerta: '⚠️ Dose SEMANAL (nunca diária!). Suplementar ácido fólico 5 mg/semana. Hepatotóxico.',
      },
      {
        id: 'azatioprina',
        name: 'Azatioprina',
        sinonimo: null,
        marcas: 'Imuran',
        descricao: 'Imunossupressor para doenças autoimunes, prevenção de rejeição de transplante e DII.',
        indicacoes: [
          {
            id: 'autoimune',
            label: 'Doença Autoimune / Transplante',
            dose_min: 1, dose_max: 3, dose_max_abs: 200,
            unidade: 'mg/kg/dia', freq: '1–2 vezes ao dia',
            obs: 'Iniciar 1 mg/kg/dia. Aumentar gradual. Manutenção: 1–3 mg/kg/dia. Máx 200 mg/dia.',
            apresentacoes: [
              { label: 'Comp. 50 mg', conc: 50, tipo: 'comprimido' },
            ],
          },
        ],
        alerta: '⚠️ Mielotóxico. Monitorar hemograma e enzimas hepáticas.',
      },
      {
        id: 'hidroxicloroquina',
        name: 'Hidroxicloroquina',
        sinonimo: null,
        marcas: 'Reuquinol, Plaquinol',
        descricao: 'Antimalárico e imunomodulador para LES, artrite e malária.',
        indicacoes: [
          {
            id: 'les-aij',
            label: 'LES / Artrite Juvenil',
            dose_min: 4, dose_max: 6.5, dose_max_abs: 400,
            unidade: 'mg/kg/dia', freq: '1x ao dia',
            obs: 'Máx 6,5 mg/kg/dia (400 mg/dia). Exame oftalmológico anual.',
            apresentacoes: [
              { label: 'Comp. 400 mg', conc: 400, tipo: 'comprimido' },
            ],
          },
        ],
        alerta: '⚠️ Retinopatia com uso prolongado. Exame oftalmológico anual.',
      },
    ],
  },

  // ─── GASTRENTEROLOGIA ADICIONAL ──────────────────────────────────────────
  {
    id: 'gastro-adicional',
    label: 'Gastroenterologia — Complementar',
    icon: '🫃',
    color: 'teal',
    drugs: [
      {
        id: 'pantoprazol',
        name: 'Pantoprazol',
        sinonimo: null,
        marcas: 'Pantozol, Tecta',
        descricao: 'Inibidor da bomba de prótons para refluxo gastroesofágico e úlcera péptica.',
        indicacoes: [
          {
            id: 'drge-ulcera',
            label: 'DRGE / Úlcera Péptica',
            dose_min: 0.5, dose_max: 1, dose_max_abs: 40,
            unidade: 'mg/kg/dia', freq: '1x ao dia (30 min antes)',
            obs: '5–11 anos (≥15 kg): 20 mg/dia. ≥12 anos: 40 mg/dia. EV: 0,5–1 mg/kg/dose 1×/dia.',
            apresentacoes: [
              { label: 'Comp. 20 mg', conc: 20, tipo: 'comprimido' },
              { label: 'Comp. 40 mg', conc: 40, tipo: 'comprimido' },
              { label: 'Fr. amp. 40 mg (EV)', conc: 40, tipo: 'frasco' },
            ],
          },
        ],
        alerta: null,
      },
      {
        id: 'esomeprazol',
        name: 'Esomeprazol',
        sinonimo: null,
        marcas: 'Nexium',
        descricao: 'Inibidor da bomba de prótons isômero S do omeprazol.',
        indicacoes: [
          {
            id: 'drge',
            label: 'DRGE / Esofagite Erosiva',
            dose_min: 0.5, dose_max: 1, dose_max_abs: 40,
            unidade: 'mg/kg/dia', freq: '1x ao dia',
            obs: '< 20 kg: 10 mg/dia. ≥ 20 kg: 20–40 mg/dia.',
            apresentacoes: [
              { label: 'Comp. 10 mg', conc: 10, tipo: 'comprimido' },
              { label: 'Comp. 20 mg', conc: 20, tipo: 'comprimido' },
              { label: 'Comp. 40 mg (≥12 anos)', conc: 40, tipo: 'comprimido', idade_min: 12 },
            ],
          },
        ],
        alerta: null,
      },
      {
        id: 'mesalazina',
        name: 'Mesalazina (5-ASA)',
        sinonimo: '5-Aminossalicílico',
        marcas: 'Asacol, Pentasa',
        descricao: 'Anti-inflamatório intestinal para doença de Crohn e retocolite ulcerativa.',
        indicacoes: [
          {
            id: 'rcu',
            label: 'Retocolite Ulcerativa / Crohn',
            dose_min: 15, dose_max: 30, dose_max_abs: 1200,
            unidade: 'mg/kg/dia ÷ 3', freq: '8/8h',
            obs: 'Indução: 30–50 mg/kg/dia. Manutenção: 15–30 mg/kg/dia. Máx 4 g/dia.',
            apresentacoes: [
              { label: 'Comp. 400 mg', conc: 400, tipo: 'comprimido' },
              { label: 'Comp. 800 mg', conc: 800, tipo: 'comprimido' },
            ],
          },
        ],
        alerta: null,
      },
      {
        id: 'trimebutina',
        name: 'Trimebutina',
        sinonimo: null,
        marcas: 'Debridat',
        descricao: 'Regulador da motilidade intestinal para cólica e síndrome do intestino irritável.',
        indicacoes: [
          {
            id: 'colica-sii',
            label: 'Cólica / SII',
            dose_min: 3, dose_max: 5, dose_max_abs: 100,
            unidade: 'mg/kg/dia ÷ 3', freq: '8/8h',
            obs: '2–5a: 25 mg × 3/dia. 6–12a: 50 mg × 3/dia. > 12a: 100 mg × 3/dia.',
            apresentacoes: [
              { label: 'Suspensão 12,5 mg/5 mL (2,5 mg/mL)', conc: 2.5, tipo: 'mL' },
              { label: 'Comp. 100 mg', conc: 100, tipo: 'comprimido' },
            ],
          },
        ],
        alerta: null,
      },
    ],
  },

  // ─── RESPIRATÓRIO ADICIONAL ──────────────────────────────────────────────
  {
    id: 'respiratorio-adicional',
    label: 'Respiratório — Complementar',
    icon: '🫁',
    color: 'blue',
    drugs: [
      {
        id: 'montelucaste',
        name: 'Montelucaste',
        sinonimo: null,
        marcas: 'Singulair',
        descricao: 'Antagonista dos leucotrienos para asma persistente leve e rinite alérgica.',
        indicacoes: [
          {
            id: 'asma-rinite',
            label: 'Asma Persistente / Rinite Alérgica',
            dose_min: 4, dose_max: 10, dose_max_abs: 10,
            unidade: 'mg/dia — dose fixa', freq: '1x ao dia (à noite)',
            obs: '6m–5a: 4 mg/dia (granulado). 6–14a: 5 mg/dia. ≥ 15a: 10 mg/dia.',
            apresentacoes: [
              { label: 'Sachê granulado 4 mg (6m–5a)', conc: 4, tipo: 'comprimido' },
              { label: 'Comp. mastigável 5 mg (6–14 anos)', conc: 5, tipo: 'comprimido', idade_min: 6 },
              { label: 'Comp. 10 mg (≥15 anos)', conc: 10, tipo: 'comprimido', idade_min: 15 },
            ],
          },
        ],
        alerta: '⚠️ Pode causar alterações neuropsiquiátricas (pesadelos, agitação).',
      },
      {
        id: 'salmeterol',
        name: 'Salmeterol',
        sinonimo: null,
        marcas: 'Serevent',
        descricao: 'Beta-2 agonista de longa duração (LABA) para asma persistente moderada/grave em ≥ 4 anos. NUNCA usar sem CI.',
        indicacoes: [
          {
            id: 'asma-manutencao',
            label: 'Asma — Manutenção (associar ao CI)',
            dose_min: 25, dose_max: 50, dose_max_abs: 50,
            unidade: 'mcg/dose (inalação)', freq: '2 vezes ao dia',
            obs: '4–11a: 25 mcg × 2/dia. ≥12a: 50 mcg × 2/dia. SEMPRE associar a corticoide inalatório.',
            apresentacoes: [
              { label: 'Spray 25 mcg/jato', conc: 0.025, tipo: 'jatos', idade_min: 4 },
            ],
          },
        ],
        alerta: '⚠️ NUNCA usar como monoterapia na asma (risco de morte). Sempre associar ao CI.',
      },
      {
        id: 'fluticasona',
        name: 'Fluticasona Propionato (inalatória)',
        sinonimo: null,
        marcas: 'Flixotide',
        descricao: 'Corticosteroide inalatório potente para manutenção da asma persistente.',
        indicacoes: [
          {
            id: 'asma-manutencao',
            label: 'Asma — Manutenção',
            dose_min: 50, dose_max: 200, dose_max_abs: 500,
            unidade: 'mcg/dia ÷ 2', freq: '12/12h',
            obs: '5–11a: 50–100 mcg × 2/dia. ≥12a: 100–500 mcg × 2/dia. Bochechar após uso.',
            apresentacoes: [
              { label: 'Spray 50 mcg/jato', conc: 0.05, tipo: 'jatos' },
              { label: 'Spray 125 mcg/jato', conc: 0.125, tipo: 'jatos' },
              { label: 'Spray 250 mcg/jato', conc: 0.25, tipo: 'jatos' },
            ],
          },
        ],
        alerta: '⚠️ Bochechar e lavar a boca após cada inalação (candidíase orofaríngea).',
      },
      {
        id: 'brometo-ipatropio-nebulização',
        name: 'Brometo de Ipratrópio (nebulização)',
        sinonimo: null,
        marcas: 'Atrovent NF',
        descricao: 'Anticolinérgico broncodilatador; associar ao salbutamol nas crises de asma grave.',
        indicacoes: [
          {
            id: 'crise-asma',
            label: 'Crise Grave de Asma (associar ao salbutamol)',
            dose_min: 0.02, dose_max: 0.05, dose_max_abs: 0.5,
            unidade: 'mg/kg/dose (nebulização)', freq: 'A cada 20 min × 3; depois 4/4h–6/6h',
            obs: '< 20 kg: 0,25 mg/dose. ≥ 20 kg: 0,5 mg/dose. Diluir em SF até 3–4 mL.',
            apresentacoes: [
              { label: 'Sol. nebulização 0,25 mg/mL', conc: 0.25, tipo: 'mL' },
            ],
          },
        ],
        alerta: null,
      },
      {
        id: 'n-acetilcisteina-iv',
        name: 'N-Acetilcisteína EV',
        sinonimo: 'NAC intravenosa',
        marcas: 'Fluimucil IV',
        descricao: 'Antídoto para intoxicação por paracetamol; mucolítico EV.',
        indicacoes: [
          {
            id: 'intoxicacao-paracetamol',
            label: 'Intoxicação Aguda por Paracetamol',
            dose_min: 150, dose_max: 150, dose_max_abs: 21000,
            unidade: 'mg/kg — protocolo 3 bolsas EV', freq: 'Protocolo: 3 fases (21h total)',
            obs: 'Fase 1: 150 mg/kg em 15–60 min. Fase 2: 50 mg/kg em 4h. Fase 3: 100 mg/kg em 16h.',
            apresentacoes: [
              { label: 'Ampola 200 mg/mL (EV diluído)', conc: 200, tipo: 'mL' },
            ],
          },
        ],
        alerta: '⚠️ Risco de reação anafilactoide na infusão rápida. Infundir lentamente na 1ª fase.',
      },
    ],
  },

  // ─── ANALGÉSICOS TÓPICOS / LOCAIS ────────────────────────────────────────
  {
    id: 'analgesia-topica',
    label: 'Analgesia Tópica',
    icon: '🩹',
    color: 'yellow',
    drugs: [
      {
        id: 'emla',
        name: 'EMLA (Lidocaína + Prilocaína)',
        sinonimo: 'Mistura Eutectica',
        marcas: 'EMLA',
        descricao: 'Anestésico tópico para procedimentos: punção venosa, PL, biópsia, circuncisão.',
        indicacoes: [
          {
            id: 'punção-venosa',
            label: 'Anestesia Tópica (Punção / Procedimentos)',
            dose_min: 1, dose_max: 2, dose_max_abs: 10,
            unidade: 'g/local — aplicação tópica', freq: 'Aplicar 1–2h antes. Oclusivo.',
            obs: '< 10 kg: máx 1 g. 10–20 kg: máx 2 g. > 20 kg: máx 10 g. Cobrir com curativo oclusivo 1–2h.',
            apresentacoes: [
              { label: 'Creme 2,5+2,5% (tópico)', conc: 25, tipo: 'mL' },
            ],
          },
        ],
        alerta: '⚠️ Risco de metemoglobinemia em < 3 meses ou em dose excessiva.',
      },
      {
        id: 'lidocaina',
        name: 'Lidocaína',
        sinonimo: null,
        marcas: 'Xylestesin, Lidostesim',
        descricao: 'Anestésico local para infiltração, bloqueio de nervo e antiarrítmico EV.',
        indicacoes: [
          {
            id: 'infiltracao',
            label: 'Infiltração / Bloqueio Local',
            dose_min: 2, dose_max: 4, dose_max_abs: 200,
            unidade: 'mg/kg/dose (s/ epinefrina)', freq: 'Dose única infiltrada',
            obs: 'Sem epinefrina: máx 4 mg/kg. Com epinefrina: máx 7 mg/kg. Solução 1–2% (10–20 mg/mL).',
            apresentacoes: [
              { label: 'Solução 1% = 10 mg/mL (infiltração)', conc: 10, tipo: 'mL' },
              { label: 'Solução 2% = 20 mg/mL (infiltração)', conc: 20, tipo: 'mL' },
            ],
          },
          {
            id: 'arritmia',
            label: 'Antiarrítmico — TV/FV (EV)',
            dose_min: 1, dose_max: 1, dose_max_abs: 100,
            unidade: 'mg/kg/dose EV', freq: 'Bolus EV. Manutenção: 20–50 mcg/kg/min',
            obs: '1 mg/kg EV bolus. Infusão: 20–50 mcg/kg/min. Máx 100 mg/dose.',
            apresentacoes: [
              { label: 'Ampola 10 mg/mL = 1% (EV)', conc: 10, tipo: 'mL' },
              { label: 'Ampola 20 mg/mL = 2% (EV)', conc: 20, tipo: 'mL' },
            ],
          },
        ],
        alerta: '⚠️ Não usar com vasoconstritores em extremidades (dedos, nariz, orelhas, pênis).',
      },
    ],
  },
];