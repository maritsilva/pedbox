// PARTE 3: Cardiovascular, Corticoides, Emergência, Laxantes, Probióticos, Psicotrópicos, Vitaminas

export const PART3_CATEGORIAS = [
  {
    id: 'cardiovascular',
    label: 'Cardiovascular / Anti-hipertensivos',
    icon: '❤️',
    color: 'pink',
    drugs: [
      {
        id: 'captopril',
        name: 'Captopril',
        sinonimo: null,
        marcas: 'Capoten',
        descricao: 'Inibidor da ECA indicado para hipertensão arterial e insuficiência cardíaca em crianças.',
        indicacoes: [
          {
            id: 'has',
            label: 'Hipertensão Arterial',
            dose_min: 0.1, dose_max: 0.5, dose_max_abs: 6,
            unidade: 'mg/kg/dose', freq: '8/8h',
            obs: 'Iniciar 0,1 mg/kg/dose. Aumentar gradual. Máx 6 mg/kg/dia.',
            apresentacoes: [
              { label: 'Comprimido 12,5 mg', conc: 12.5, tipo: 'comprimido' },
              { label: 'Comprimido 25 mg', conc: 25, tipo: 'comprimido' },
              { label: 'Solução 1 mg/mL (manipulada)', conc: 1, tipo: 'mL' },
            ],
          },
        ],
        alerta: '⚠️ Monitorar função renal e potássio. Evitar em RN e gestação.',
      },
      {
        id: 'enalapril',
        name: 'Enalapril',
        sinonimo: null,
        marcas: 'Vasotec, Renitec',
        descricao: 'Inibidor da ECA indicado para hipertensão e insuficiência cardíaca.',
        indicacoes: [
          {
            id: 'has',
            label: 'Hipertensão Arterial',
            dose_min: 0.05, dose_max: 0.6, dose_max_abs: 40,
            unidade: 'mg/kg/dia', freq: '1x ao dia',
            obs: 'Iniciar 0,05–0,1 mg/kg/dia. Máx 0,6 mg/kg/dia (máx 40 mg/dia).',
            apresentacoes: [
              { label: 'Comprimido 5 mg', conc: 5, tipo: 'comprimido' },
              { label: 'Comprimido 10 mg', conc: 10, tipo: 'comprimido' },
              { label: 'Solução 1 mg/mL (manipulada)', conc: 1, tipo: 'mL' },
            ],
          },
        ],
        alerta: '⚠️ Monitorar função renal e potássio.',
      },
      {
        id: 'propranolol',
        name: 'Propranolol',
        sinonimo: null,
        marcas: 'Inderal',
        descricao: 'Betabloqueador não seletivo indicado para HAS, arritmias, hemangiomas e enxaqueca.',
        indicacoes: [
          {
            id: 'has-arritmia',
            label: 'HAS / Arritmia / Enxaqueca / Hemangioma',
            dose_min: 0.5, dose_max: 2, dose_max_abs: 40,
            unidade: 'mg/kg/dia ÷ 3', freq: '8/8h',
            obs: 'HAS: 0,5–1 mg/kg/dia. Hemangioma: 2–3 mg/kg/dia ÷ 2. Máx 8 mg/kg/dia.',
            apresentacoes: [
              { label: 'Comprimido 10 mg', conc: 10, tipo: 'comprimido' },
              { label: 'Comprimido 40 mg', conc: 40, tipo: 'comprimido' },
              { label: 'Solução 1 mg/mL', conc: 1, tipo: 'mL' },
            ],
          },
        ],
        alerta: '⚠️ Pode mascarar hipoglicemia. Não interromper abruptamente.',
      },
      {
        id: 'amlodipino',
        name: 'Anlodipino',
        sinonimo: 'Amlodipino',
        marcas: 'Norvasc, Anlo',
        descricao: 'Bloqueador de canal de cálcio indicado para hipertensão em crianças ≥ 6 anos.',
        indicacoes: [
          {
            id: 'has',
            label: 'Hipertensão Arterial (≥ 6 anos)',
            dose_min: 0.1, dose_max: 0.2, dose_max_abs: 5,
            unidade: 'mg/kg/dia', freq: '1x ao dia',
            obs: '6–17 anos: 2,5–5 mg/dia.',
            apresentacoes: [
              { label: 'Comprimido 2,5 mg', conc: 2.5, tipo: 'comprimido' },
              { label: 'Comprimido 5 mg', conc: 5, tipo: 'comprimido' },
            ],
          },
        ],
        alerta: null,
      },
      {
        id: 'furosemida',
        name: 'Furosemida',
        sinonimo: null,
        marcas: 'Lasix',
        descricao: 'Diurético de alça indicado para edema e insuficiência cardíaca.',
        indicacoes: [
          {
            id: 'edema',
            label: 'Edema / Insuficiência Cardíaca',
            dose_min: 0.5, dose_max: 2, dose_max_abs: 40,
            unidade: 'mg/kg/dose', freq: '12/12h ou 1x ao dia',
            obs: 'EV: 0,5–2 mg/kg/dose lento. VO: 1–4 mg/kg/dia ÷ 1–2.',
            apresentacoes: [
              { label: 'Ampola 10 mg/mL (EV)', conc: 10, tipo: 'mL' },
              { label: 'Comprimido 40 mg', conc: 40, tipo: 'comprimido' },
              { label: 'Solução oral 10 mg/mL', conc: 10, tipo: 'mL' },
            ],
          },
        ],
        alerta: null,
      },
      {
        id: 'digoxina',
        name: 'Digoxina',
        sinonimo: null,
        marcas: 'Lanoxin',
        descricao: 'Glicosídeo cardíaco para insuficiência cardíaca e controle de frequência em arritmias.',
        indicacoes: [
          {
            id: 'manutencao',
            label: 'Dose de Manutenção',
            dose_min: 0.008, dose_max: 0.012, dose_max_abs: 0.25,
            unidade: 'mg/kg/dia', freq: '1x ao dia',
            obs: 'Manutenção: 8–12 mcg/kg/dia. Nível sérico alvo: 0,8–2 ng/mL.',
            apresentacoes: [
              { label: 'Sol. pediátrica 0,05 mg/mL (50 mcg/mL)', conc: 0.05, tipo: 'mL' },
              { label: 'Comprimido 0,25 mg', conc: 0.25, tipo: 'comprimido' },
            ],
          },
        ],
        alerta: '⚠️ Índice terapêutico estreito. Monitorar nível sérico, ECG e eletrólitos.',
      },
    ],
  },

  {
    id: 'corticoides',
    label: 'Corticoides',
    icon: '💉',
    color: 'purple',
    drugs: [
      {
        id: 'prednisolona',
        name: 'Prednisolona',
        sinonimo: null,
        marcas: 'Predsim, Prelone',
        descricao: 'Corticosteroide sistêmico indicado para asma, crup e doenças inflamatórias.',
        indicacoes: [
          {
            id: 'asma-crise',
            label: 'Asma (crise moderada/grave) — < 12 anos',
            dose_min: 1, dose_max: 2, dose_max_abs: 40,
            unidade: 'mg/kg/dia', freq: '1–2 doses ao dia por 3–10 dias',
            obs: 'Máx 40 mg/dia (crianças). ≥ 12 anos: máx 60 mg/dia.',
            apresentacoes: [
              { label: 'Solução oral 3 mg/mL', conc: 3, tipo: 'mL' },
              { label: 'Gotas 11 mg/mL', conc: 11, tipo: 'gotas', mL_por_gota: 0.033 },
              { label: 'Comprimido 5 mg', conc: 5, tipo: 'comprimido' },
              { label: 'Comprimido 20 mg', conc: 20, tipo: 'comprimido' },
            ],
          },
          {
            id: 'crup',
            label: 'Crup (Laringotraqueobronquite)',
            dose_min: 0.6, dose_max: 0.6, dose_max_abs: 10,
            unidade: 'mg/kg/dose', freq: 'Dose única',
            obs: '0,6 mg/kg VO dose única. Máx 10 mg.',
            apresentacoes: [
              { label: 'Solução oral 3 mg/mL', conc: 3, tipo: 'mL' },
              { label: 'Gotas 11 mg/mL', conc: 11, tipo: 'gotas', mL_por_gota: 0.033 },
            ],
          },
          {
            id: 'nefrotico',
            label: 'Síndrome Nefrótica',
            dose_min: 2, dose_max: 2, dose_max_abs: 60,
            unidade: 'mg/kg/dia', freq: '1x ao dia por 4–6 semanas',
            obs: '2 mg/kg/dia × 4–6 semanas (máx 60 mg/dia); depois 1,5 mg/kg em dias alternados × 4–6 semanas.',
            apresentacoes: [
              { label: 'Solução oral 3 mg/mL', conc: 3, tipo: 'mL' },
              { label: 'Comprimido 5 mg', conc: 5, tipo: 'comprimido' },
              { label: 'Comprimido 20 mg', conc: 20, tipo: 'comprimido' },
            ],
          },
          {
            id: 'antiinflamatorio',
            label: 'Anti-inflamatório Geral',
            dose_min: 0.5, dose_max: 2, dose_max_abs: 60,
            unidade: 'mg/kg/dia', freq: '1–3 doses ao dia',
            obs: 'Dose de 0,5–2 mg/kg/dia conforme indicação. Máx 60 mg/dia.',
            apresentacoes: [
              { label: 'Solução oral 3 mg/mL', conc: 3, tipo: 'mL' },
              { label: 'Comprimido 5 mg', conc: 5, tipo: 'comprimido' },
              { label: 'Comprimido 20 mg', conc: 20, tipo: 'comprimido' },
            ],
          },
        ],
        alerta: null,
      },
      {
        id: 'dexametasona',
        name: 'Dexametasona',
        sinonimo: null,
        marcas: 'Decadron',
        descricao: 'Corticosteroide de longa duração indicado para crup, meningite bacteriana e inflamações graves.',
        indicacoes: [
          {
            id: 'antiinflamatorio',
            label: 'Anti-inflamatório Geral',
            dose_min: 0.15, dose_max: 0.3, dose_max_abs: 10,
            unidade: 'mg/kg/dia', freq: '6/6h ou 12/12h',
            obs: 'Elixir oral 0,1 mg/mL. Ampola 2 mg/mL. Dividir em 2–3 doses ao dia.',
            apresentacoes: [
              { label: 'Elixir oral 0,1 mg/mL', conc: 0.1, tipo: 'mL' },
              { label: 'Ampola 2 mg/mL (IM/EV)', conc: 2, tipo: 'mL' },
              { label: 'Comprimido 0,5 mg', conc: 0.5, tipo: 'comprimido' },
              { label: 'Comprimido 4 mg', conc: 4, tipo: 'comprimido' },
            ],
          },
          {
            id: 'crup',
            label: 'Crup (Laringotraqueobronquite)',
            dose_min: 0.15, dose_max: 0.6, dose_max_abs: 10,
            unidade: 'mg/kg/dose', freq: 'Dose única (repetir em 24h se necessário)',
            obs: 'Dose única VO ou IM. 0,15–0,6 mg/kg. Máx 10 mg.',
            apresentacoes: [
              { label: 'Elixir oral 0,1 mg/mL', conc: 0.1, tipo: 'mL' },
              { label: 'Ampola 2 mg/mL (IM/EV)', conc: 2, tipo: 'mL' },
            ],
          },
          {
            id: 'meningite',
            label: 'Meningite Bacteriana',
            dose_min: 0.15, dose_max: 0.15, dose_max_abs: 10,
            unidade: 'mg/kg/dose', freq: '6/6h por 2 dias',
            obs: '0,15 mg/kg × 4/dia × 2 dias. Iniciar junto com antibiótico.',
            apresentacoes: [
              { label: 'Ampola 4 mg/mL (EV)', conc: 4, tipo: 'mL' },
            ],
          },
          {
            id: 'edema-cerebral',
            label: 'Edema Cerebral',
            dose_min: 0.5, dose_max: 1, dose_max_abs: 10,
            unidade: 'mg/kg/dose', freq: '6/6h',
            obs: 'Ataque: 0,5–1 mg/kg EV/IM. Manutenção: 0,25–0,5 mg/kg × 4/dia.',
            apresentacoes: [
              { label: 'Ampola 4 mg/mL (EV)', conc: 4, tipo: 'mL' },
            ],
          },
          {
            id: 'broncoespasmo',
            label: 'Broncoespasmo / Asma Grave',
            dose_min: 0.3, dose_max: 0.6, dose_max_abs: 10,
            unidade: 'mg/kg/dose', freq: '6/6h ou 12/12h por 1–3 dias',
            obs: '0,3–0,6 mg/kg EV/IM. Máx 10 mg/dose.',
            apresentacoes: [
              { label: 'Ampola 2 mg/mL (IM/EV)', conc: 2, tipo: 'mL' },
            ],
          },
        ],
        alerta: null,
      },
      {
        id: 'budesonida-inalatoria',
        name: 'Budesonida (inalatória)',
        sinonimo: null,
        marcas: 'Pulmicort',
        descricao: 'Corticosteroide inalatório indicado para crup moderado/grave e manutenção da asma.',
        indicacoes: [
          {
            id: 'crup',
            label: 'Crup Moderado/Grave',
            dose_min: 2, dose_max: 2, dose_max_abs: 2,
            unidade: 'mg — dose única (nebulização)', freq: 'Dose única. Repetir em 12h se necessário.',
            obs: '2 mg nebulizados (4 mL de 0,5 mg/mL ou 2 mL de 1 mg/mL).',
            apresentacoes: [
              { label: 'Nebulização 0,5 mg/2 mL', conc: 0.5, tipo: 'mL' },
              { label: 'Nebulização 1 mg/2 mL', conc: 1, tipo: 'mL' },
            ],
          },
          {
            id: 'asma-manutencao',
            label: 'Asma — Manutenção',
            dose_min: 0.5, dose_max: 1, dose_max_abs: 2,
            unidade: 'mg/dia ÷ 2', freq: '12/12h',
            obs: 'Dose baixa: 0,25–0,5 mg × 2/dia. Dose alta: 1 mg × 2/dia.',
            apresentacoes: [
              { label: 'Nebulização 0,25 mg/2 mL', conc: 0.25, tipo: 'mL' },
              { label: 'Nebulização 0,5 mg/2 mL', conc: 0.5, tipo: 'mL' },
            ],
          },
        ],
        alerta: null,
      },
      {
        id: 'hidrocortisona',
        name: 'Hidrocortisona',
        sinonimo: null,
        marcas: 'Solu-Cortef, Flebocortid',
        descricao: 'Corticosteroide parenteral indicado para asma grave, insuficiência adrenal e anafilaxia.',
        indicacoes: [
          {
            id: 'asma-grave',
            label: 'Asma Grave / Anafilaxia / Insuf. Adrenal',
            dose_min: 5, dose_max: 10, dose_max_abs: 500,
            unidade: 'mg/kg/dose', freq: '4/4h ou 6/6h',
            obs: 'Asma grave: 5–10 mg/kg × 4/dia. Anafilaxia: 1–5 mg/kg EV.',
            apresentacoes: [
              { label: 'Fr. amp. 100 mg (EV)', conc: 100, tipo: 'frasco' },
              { label: 'Fr. amp. 500 mg (EV)', conc: 500, tipo: 'frasco' },
            ],
          },
        ],
        alerta: null,
      },
      {
        id: 'metilprednisolona',
        name: 'Metilprednisolona',
        sinonimo: null,
        marcas: 'Solu-Medrol',
        descricao: 'Corticosteroide parenteral para asma grave e pulsoterapia.',
        indicacoes: [
          {
            id: 'asma-grave',
            label: 'Asma Grave',
            dose_min: 1, dose_max: 2, dose_max_abs: 125,
            unidade: 'mg/kg/dose', freq: '6/6h',
            obs: '1–2 mg/kg/dose × 2–4/dia. Máx 125 mg/dose.',
            apresentacoes: [
              { label: 'Fr. amp. 125 mg (EV)', conc: 125, tipo: 'frasco' },
              { label: 'Fr. amp. 500 mg (EV)', conc: 500, tipo: 'frasco' },
            ],
          },
          {
            id: 'pulsoterapia',
            label: 'Pulsoterapia',
            dose_min: 10, dose_max: 30, dose_max_abs: 1000,
            unidade: 'mg/kg/dia', freq: '1x ao dia por 3–5 dias',
            obs: '10–30 mg/kg/dia (máx 1 g/dia) × 3 dias. Infundir em 30–60 min.',
            apresentacoes: [
              { label: 'Fr. amp. 1000 mg (EV)', conc: 1000, tipo: 'frasco' },
            ],
          },
        ],
        alerta: null,
      },
    ],
  },

  {
    id: 'emergencia',
    label: 'Drogas de Atendimento Emergencial',
    icon: '🚨',
    color: 'red',
    drugs: [
      {
        id: 'adrenalina-emergencia',
        name: 'Adrenalina (Epinefrina)',
        sinonimo: 'Epinefrina',
        marcas: 'Adrenalina, EpiPen',
        descricao: 'Catecolamina de primeira linha no tratamento da anafilaxia e parada cardiorrespiratória.',
        indicacoes: [
          {
            id: 'anafilaxia',
            label: 'Anafilaxia',
            dose_min: 0.01, dose_max: 0.01, dose_max_abs: 0.5,
            unidade: 'mg/kg/dose IM (1:1.000)', freq: 'Repetir a cada 5–15 min se necessário',
            obs: '0,01 mg/kg IM na face anterolateral da coxa. Máx 0,5 mg.',
            apresentacoes: [
              { label: 'Ampola 1 mg/mL — 1:1.000 (IM/SC)', conc: 1, tipo: 'mL' },
            ],
          },
          {
            id: 'pcr',
            label: 'Parada Cardiorrespiratória (PCR)',
            dose_min: 0.01, dose_max: 0.01, dose_max_abs: 1,
            unidade: 'mg/kg/dose EV (1:10.000)', freq: 'A cada 3–5 min',
            obs: '0,01 mg/kg EV da sol. 1:10.000 (0,1 mg/mL). Máx 1 mg/dose.',
            apresentacoes: [
              { label: 'Ampola 0,1 mg/mL — 1:10.000 (EV/IO)', conc: 0.1, tipo: 'mL' },
            ],
          },
          {
            id: 'crup',
            label: 'Crup Grave (nebulização)',
            dose_min: 5, dose_max: 5, dose_max_abs: 5,
            unidade: 'mg — dose fixa', freq: 'Dose única. Repetir se necessário.',
            obs: '5 mL da sol. 1 mg/mL nebulizados. Ou 0,5 mL/kg (máx 4–5 mL).',
            apresentacoes: [
              { label: 'Ampola 1 mg/mL — 1:1.000 (nebulização)', conc: 1, tipo: 'mL' },
            ],
          },
        ],
        alerta: '🚨 Anafilaxia: IM na face anterolateral da coxa. Monitorar FC e PA.',
      },
      {
        id: 'diazepam',
        name: 'Diazepam',
        sinonimo: null,
        marcas: 'Valium',
        descricao: 'Benzodiazepínico indicado para convulsão aguda e status epiléptico.',
        indicacoes: [
          {
            id: 'convulsao',
            label: 'Convulsão / Status Epiléptico',
            dose_min: 0.2, dose_max: 0.5, dose_max_abs: 10,
            unidade: 'mg/kg/dose', freq: 'Repetir 1× após 5–10 min se necessário',
            obs: 'EV: 0,2–0,5 mg/kg lento (máx 10 mg). Retal: 0,5 mg/kg.',
            apresentacoes: [
              { label: 'Ampola 5 mg/mL (EV)', conc: 5, tipo: 'mL' },
              { label: 'Solução retal 2 mg/mL', conc: 2, tipo: 'mL' },
            ],
          },
          {
            id: 'convulsao-febril',
            label: 'Convulsão Febril (dose pré-hospitalar)',
            dose_min: 0.3, dose_max: 0.5, dose_max_abs: 10,
            unidade: 'mg/kg/dose retal', freq: 'Dose única retal',
            obs: 'Retal: 0,3–0,5 mg/kg. Máx 10 mg. Alternativa ao EV no ambiente pré-hospitalar.',
            apresentacoes: [
              { label: 'Solução retal 2 mg/mL', conc: 2, tipo: 'mL' },
              { label: 'Ampola 5 mg/mL (retal)', conc: 5, tipo: 'mL' },
            ],
          },
          {
            id: 'espasmo-muscular',
            label: 'Espasmo Muscular / Sedação Leve',
            dose_min: 0.1, dose_max: 0.3, dose_max_abs: 5,
            unidade: 'mg/kg/dose VO', freq: '8/8h (uso agudo)',
            obs: 'Tétano: 0,1–0,3 mg/kg VO × 6–8/dia. Espasmos: 0,2–0,3 mg/kg × 3–4/dia.',
            apresentacoes: [
              { label: 'Ampola 5 mg/mL (EV)', conc: 5, tipo: 'mL' },
            ],
          },
        ],
        alerta: '⚠️ Infundir lentamente (< 5 mg/min). Monitorar FR e SpO₂.',
      },
      {
        id: 'midazolam',
        name: 'Midazolam',
        sinonimo: null,
        marcas: 'Dormonid',
        descricao: 'Benzodiazepínico de ação rápida para convulsão, sedação e procedimentos.',
        indicacoes: [
          {
            id: 'convulsao',
            label: 'Convulsão / Status Epiléptico',
            dose_min: 0.1, dose_max: 0.3, dose_max_abs: 10,
            unidade: 'mg/kg/dose', freq: 'Repetir 1× após 5 min se necessário',
            obs: 'EV/IM: 0,1–0,3 mg/kg (máx 10 mg). Intranasal: 0,2 mg/kg (0,1 mL/narina). Bucal: 0,3–0,5 mg/kg.',
            apresentacoes: [
              { label: 'Ampola 5 mg/mL (EV/IM)', conc: 5, tipo: 'mL' },
              { label: 'Ampola 1 mg/mL (EV diluído)', conc: 1, tipo: 'mL' },
            ],
          },
          {
            id: 'sedacao',
            label: 'Sedação para Procedimentos',
            dose_min: 0.05, dose_max: 0.5, dose_max_abs: 10,
            unidade: 'mg/kg/dose', freq: 'Dose única (15–30 min antes)',
            obs: 'VO/intranasal: 0,3–0,5 mg/kg. EV: 0,05–0,1 mg/kg. Máx 5 mg EV; 10 mg VO.',
            apresentacoes: [
              { label: 'Ampola 5 mg/mL (EV/IM)', conc: 5, tipo: 'mL' },
              { label: 'Solução oral 2 mg/mL', conc: 2, tipo: 'mL' },
            ],
          },
          {
            id: 'sedacao-uti',
            label: 'Sedação Contínua em UTI',
            dose_min: 0.05, dose_max: 0.1, dose_max_abs: 10,
            unidade: 'mg/kg/h (infusão EV)', freq: 'Infusão contínua EV',
            obs: 'Infusão: 0,05–0,1 mg/kg/h. Titular conforme necessidade. Máx 0,4 mg/kg/h.',
            apresentacoes: [
              { label: 'Ampola 5 mg/mL (EV)', conc: 5, tipo: 'mL' },
            ],
          },
        ],
        alerta: '⚠️ Monitorar respiração e PA. Ter flumazenil disponível.',
      },
      {
        id: 'fenobarbital',
        name: 'Fenobarbital',
        sinonimo: null,
        marcas: 'Gardenal',
        descricao: 'Barbitúrico para status epiléptico refratário e epilepsia de manutenção.',
        indicacoes: [
          {
            id: 'status-epileptico',
            label: 'Status Epiléptico Refratário (Ataque EV)',
            dose_min: 15, dose_max: 20, dose_max_abs: 1000,
            unidade: 'mg/kg (ataque EV)', freq: 'Dose única EV lenta (1 mg/kg/min)',
            obs: '15–20 mg/kg EV. Pode repetir 5–10 mg/kg se necessário. Máx 40 mg/kg total.',
            apresentacoes: [
              { label: 'Ampola 100 mg/mL (EV)', conc: 100, tipo: 'mL' },
            ],
          },
          {
            id: 'epilepsia-manutencao',
            label: 'Epilepsia — Manutenção (VO)',
            dose_min: 3, dose_max: 5, dose_max_abs: 180,
            unidade: 'mg/kg/dia', freq: '1–2 vezes ao dia',
            obs: 'Lactentes: 5–6 mg/kg/dia. Crianças 1–5a: 6–8 mg/kg/dia. > 5a: 3–5 mg/kg/dia.',
            apresentacoes: [
              { label: 'Comprimido 100 mg (VO)', conc: 100, tipo: 'comprimido' },
            ],
          },
          {
            id: 'hiperbilirrubinemia',
            label: 'Hiperbilirrubinemia Neonatal (indutor enzimático)',
            dose_min: 3, dose_max: 5, dose_max_abs: 30,
            unidade: 'mg/kg/dia', freq: '1x ao dia por alguns dias',
            obs: 'Fenobarbital 3–5 mg/kg/dia VO para induzir glucuronil transferase. Uso adjuvante na icterícia.',
            apresentacoes: [
              { label: 'Comprimido 100 mg (VO)', conc: 100, tipo: 'comprimido' },
            ],
          },
        ],
        alerta: '⚠️ Infusão lenta (1 mg/kg/min). Risco de apneia e hipotensão.',
      },
      {
        id: 'adenosina',
        name: 'Adenosina',
        sinonimo: null,
        marcas: 'Adenocor',
        descricao: 'Antiarrítmico de meia-vida ultracurta para TSV.',
        indicacoes: [
          {
            id: 'tsv',
            label: 'Taquicardia Supraventricular (TSV)',
            dose_min: 0.1, dose_max: 0.3, dose_max_abs: 12,
            unidade: 'mg/kg/dose', freq: 'Bolus EV rápido. Repetir em doses crescentes.',
            obs: '1ª: 0,1 mg/kg. 2ª: 0,2 mg/kg. 3ª: 0,3 mg/kg (máx 12 mg). Flush SF imediato.',
            apresentacoes: [
              { label: 'Ampola 3 mg/mL (2 mL = 6 mg)', conc: 3, tipo: 'mL' },
            ],
          },
        ],
        alerta: '🚨 Bolus EV RÁPIDO + flush SF imediato. Meia-vida < 10 segundos.',
      },
      {
        id: 'glicose-hipoglicemia',
        name: 'Glicose (Hipoglicemia)',
        sinonimo: 'Dextrose',
        marcas: 'Soro Glicosado',
        descricao: 'Tratamento da hipoglicemia aguda em crianças.',
        indicacoes: [
          {
            id: 'hipoglicemia',
            label: 'Hipoglicemia Aguda',
            dose_min: 0.2, dose_max: 0.5, dose_max_abs: 25,
            unidade: 'g/kg EV', freq: 'Dose única EV. Repetir se necessário.',
            obs: '0,25 g/kg EV = 2,5 mL/kg SG 10% ou 1 mL/kg SG 25%. Nunca usar SG 50% puro.',
            apresentacoes: [
              { label: 'SG 10% (0,1 g/mL) — usar 2,5 mL/kg', conc: 100, tipo: 'mL' },
              { label: 'SG 25% (0,25 g/mL) — usar 1 mL/kg', conc: 250, tipo: 'mL' },
            ],
          },
        ],
        alerta: '🚨 Nunca usar SG 50% puro em crianças. Monitorar glicemia.',
      },
    ],
  },

  {
    id: 'laxantes',
    label: 'Laxantes',
    icon: '🌾',
    color: 'amber',
    drugs: [
      {
        id: 'polietilenoglicol',
        name: 'Polietilenoglicol (PEG)',
        sinonimo: 'Macrogol',
        marcas: 'Muvinlax, Forlax, Movicol',
        descricao: 'Laxante osmótico de primeira linha para constipação funcional em crianças.',
        indicacoes: [
          {
            id: 'constipacao',
            label: 'Constipação Funcional — Manutenção',
            dose_min: 0.5, dose_max: 1, dose_max_abs: 34,
            unidade: 'g/kg/dia', freq: '1x ao dia',
            obs: 'Desimpactação: 1–1,5 g/kg/dia × 3–6 dias. Dissolver em água.',
            apresentacoes: [
              { label: 'Sachê 17 g', conc: 17, tipo: 'comprimido' },
            ],
          },
        ],
        alerta: null,
      },
      {
        id: 'lactulose',
        name: 'Lactulose',
        sinonimo: null,
        marcas: 'Lactulona, Duphalac',
        descricao: 'Laxante osmótico indicado para constipação e encefalopatia hepática.',
        indicacoes: [
          {
            id: 'constipacao',
            label: 'Constipação',
            dose_min: 0.5, dose_max: 1, dose_max_abs: 40,
            unidade: 'mL/kg/dia ÷ 1–2', freq: '1–2 doses ao dia',
            obs: 'Máx 60 mL/dia.',
            apresentacoes: [
              { label: 'Xarope 66,7% (667 mg/mL)', conc: 667, tipo: 'mL' },
            ],
          },
        ],
        alerta: null,
      },
      {
        id: 'bisacodil',
        name: 'Bisacodil',
        sinonimo: null,
        marcas: 'Dulcolax, Lacto-purga',
        descricao: 'Laxante estimulante para constipação ocasional.',
        indicacoes: [
          {
            id: 'constipacao',
            label: 'Constipação',
            dose_min: 0.1, dose_max: 0.3, dose_max_abs: 10,
            unidade: 'mg/kg/dose', freq: '1x ao dia',
            obs: '3–12a: 5 mg/dose. >12a: 5–10 mg/dose. Efeito em 6–12h.',
            apresentacoes: [
              { label: 'Comprimido 5 mg', conc: 5, tipo: 'comprimido' },
              { label: 'Supositório 5 mg (< 12 anos)', conc: 5, tipo: 'comprimido' },
              { label: 'Supositório 10 mg (≥ 12 anos)', conc: 10, tipo: 'comprimido', idade_min: 12 },
            ],
          },
        ],
        alerta: null,
      },
    ],
  },

  {
    id: 'probioticos',
    label: 'Probióticos',
    icon: '🦠',
    color: 'green',
    drugs: [
      {
        id: 'saccharomyces',
        name: 'Saccharomyces boulardii',
        sinonimo: null,
        marcas: 'Floratil, Reflor',
        descricao: 'Probiótico para prevenção e tratamento de diarreia, inclusive associada a antibióticos.',
        indicacoes: [
          {
            id: 'diarreia',
            label: 'Diarreia Aguda / Prevenção com ATB',
            dose_min: 200, dose_max: 250, dose_max_abs: 500,
            unidade: 'mg/dia ÷ 2', freq: '12/12h por 5–10 dias',
            obs: 'Diarreia: 200 mg × 2/dia. Prevenção (ATB): 250 mg × 2/dia.',
            apresentacoes: [
              { label: 'Cápsula 200 mg', conc: 200, tipo: 'comprimido' },
              { label: 'Sachê 200 mg', conc: 200, tipo: 'comprimido' },
            ],
          },
        ],
        alerta: null,
      },
    ],
  },

  {
    id: 'psicotropicos',
    label: 'Psicotrópicos',
    icon: '🧠',
    color: 'purple',
    drugs: [
      {
        id: 'metilfenidato',
        name: 'Metilfenidato',
        sinonimo: null,
        marcas: 'Ritalina, Concerta',
        descricao: 'Estimulante do SNC indicado para TDAH em crianças ≥ 6 anos.',
        indicacoes: [
          {
            id: 'tdah',
            label: 'TDAH (≥ 6 anos)',
            dose_min: 0.3, dose_max: 1, dose_max_abs: 60,
            unidade: 'mg/kg/dia ÷ 2', freq: '12/12h (IR) ou 1×/dia (LP)',
            obs: 'Iniciar 0,3 mg/kg/dose; aumentar 0,1 mg/kg/semana. Máx 60 mg/dia.',
            apresentacoes: [
              { label: 'Comp. 5 mg (≥6 anos)', conc: 5, tipo: 'comprimido', idade_min: 6 },
              { label: 'Comp. 10 mg (≥6 anos)', conc: 10, tipo: 'comprimido', idade_min: 6 },
              { label: 'Comp. LP 18 mg — Concerta (≥6 anos)', conc: 18, tipo: 'comprimido', idade_min: 6 },
              { label: 'Comp. LP 36 mg — Concerta (≥6 anos)', conc: 36, tipo: 'comprimido', idade_min: 6 },
            ],
          },
        ],
        alerta: '⚠️ Monitorar peso, altura, FC e PA. Controle especial (receita B).',
      },
      {
        id: 'risperidona',
        name: 'Risperidona',
        sinonimo: null,
        marcas: 'Risperdal',
        descricao: 'Antipsicótico atípico para irritabilidade no autismo e transtornos psicóticos.',
        indicacoes: [
          {
            id: 'autismo',
            label: 'Irritabilidade / Autismo',
            dose_min: 0.01, dose_max: 0.06, dose_max_abs: 3,
            unidade: 'mg/kg/dia', freq: '1x ao dia',
            obs: 'Iniciar 0,25 mg/dia (< 20 kg) ou 0,5 mg/dia (≥ 20 kg). Máx 3 mg/dia.',
            apresentacoes: [
              { label: 'Comp. 1 mg', conc: 1, tipo: 'comprimido' },
              { label: 'Comp. 2 mg', conc: 2, tipo: 'comprimido' },
              { label: 'Solução oral 1 mg/mL', conc: 1, tipo: 'mL' },
            ],
          },
        ],
        alerta: '⚠️ Monitorar ganho de peso, efeitos extrapiramidais e prolactina.',
      },
    ],
  },

  {
    id: 'vitaminas',
    label: 'Vitaminas e Suplementos',
    icon: '🌟',
    color: 'yellow',
    drugs: [
      {
        id: 'vitamina-d3',
        name: 'Vitamina D3 (Colecalciferol)',
        sinonimo: null,
        marcas: 'Addera D3, Colecalciferol',
        descricao: 'Suplementação de vitamina D para prevenção e tratamento da deficiência e raquitismo.',
        indicacoes: [
          {
            id: 'profilaxia',
            label: 'Profilaxia (Lactentes)',
            dose_min: 400, dose_max: 600, dose_max_abs: 600,
            unidade: 'UI/dia', freq: '1x ao dia',
            obs: 'Lactentes: 400 UI/dia. Crianças/adolescentes: 600 UI/dia.',
            apresentacoes: [
              { label: 'Gotas 200 UI/gota', conc: 200, tipo: 'gotas' },
              { label: 'Gotas 400 UI/gota', conc: 400, tipo: 'gotas' },
              { label: 'Comp. 1.000 UI', conc: 1000, tipo: 'comprimido' },
            ],
          },
          {
            id: 'deficiencia',
            label: 'Deficiência / Raquitismo',
            dose_min: 1000, dose_max: 2000, dose_max_abs: 4000,
            unidade: 'UI/dia', freq: '1x ao dia por 3 meses',
            obs: 'Raquitismo: 1.000–5.000 UI/dia. Monitorar 25-OH-D3.',
            apresentacoes: [
              { label: 'Comp. 1.000 UI', conc: 1000, tipo: 'comprimido' },
              { label: 'Comp. 2.000 UI', conc: 2000, tipo: 'comprimido' },
            ],
          },
        ],
        alerta: null,
      },
      {
        id: 'sulfato-ferroso',
        name: 'Sulfato Ferroso',
        sinonimo: 'Ferro elementar',
        marcas: 'Ibifol, Noripurum',
        descricao: 'Suplementação de ferro para anemia ferropriva e profilaxia da deficiência de ferro.',
        indicacoes: [
          {
            id: 'anemia',
            label: 'Anemia Ferropriva — Tratamento',
            dose_min: 3, dose_max: 6, dose_max_abs: 200,
            unidade: 'mg/kg/dia de ferro elementar ÷ 1–3', freq: '1–3 doses ao dia',
            obs: 'Em jejum para melhor absorção. Por 3–6 meses.',
            apresentacoes: [
              { label: 'Gotas 25 mg/mL Fe elem.', conc: 25, tipo: 'mL' },
              { label: 'Comp. 40 mg Fe elem. (200 mg sulfato)', conc: 40, tipo: 'comprimido' },
            ],
          },
          {
            id: 'profilaxia',
            label: 'Profilaxia (Lactentes)',
            dose_min: 1, dose_max: 2, dose_max_abs: 15,
            unidade: 'mg/kg/dia de ferro elementar', freq: '1x ao dia',
            obs: 'RN a termo: 1 mg/kg/dia a partir de 4–6 meses. Prematuros: 2–4 mg/kg/dia desde 4 semanas.',
            apresentacoes: [
              { label: 'Gotas 25 mg/mL Fe elem.', conc: 25, tipo: 'mL' },
            ],
          },
        ],
        alerta: null,
      },
      {
        id: 'acido-folico',
        name: 'Ácido Fólico',
        sinonimo: null,
        marcas: 'Acifol',
        descricao: 'Vitamina B9 para anemia megaloblástica e deficiência de folato.',
        indicacoes: [
          {
            id: 'deficiencia',
            label: 'Deficiência / Anemia Megaloblástica',
            dose_min: 0.05, dose_max: 0.1, dose_max_abs: 5,
            unidade: 'mg/kg/dia', freq: '1x ao dia',
            obs: 'Deficiência: 0,5–1 mg/dia. Anemia megaloblástica: 1–5 mg/dia.',
            apresentacoes: [
              { label: 'Comp. 0,4 mg', conc: 0.4, tipo: 'comprimido' },
              { label: 'Comp. 1 mg', conc: 1, tipo: 'comprimido' },
              { label: 'Comp. 5 mg', conc: 5, tipo: 'comprimido' },
            ],
          },
        ],
        alerta: null,
      },
    ],
  },
];