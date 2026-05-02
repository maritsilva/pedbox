export const reidratacaoOral = [
  {
    id: 'sais-reidratacao-oral',
    name: 'Sais para reidratação oral',
    category: 'antianemicos-imuno',
    observations: 'Disponíveis com 90 mEq/L ou 50 mEq/L de sódio. Composição padrão (90 mEq/L por envelope para 1 L): 3,5 g NaCl, 1,5 g KCl, 2,9 g citrato de sódio, 20 g glicose. A solução deve ser preparada com água filtrada ou fervida e é válida por 24 horas. Líquidos muito açucarados (refrigerantes, sucos adoçados) não substituem a TRO.',
    brands: [
      'BabyDRAX / Hidralyte / Hidraplex / Hidroten / Polydrat / Pra-T-Sal / Sindrat — 90 mEq/L de sódio',
      'Reidrat 90 / Reidratante / Reidrat 50 — 50 mEq/L de sódio',
      'Floralyte 90 / Pedialyte 90 — frasco 500 mL (90 mEq/L)',
      'Floralyte 45 / Hidralyte / Pedialyte NG 45 Zinco — frasco 500 mL (45 mEq/L)',
      'Hidrafix 90 / Pedialyte 60 Zinco / Polydrat / Rehidrazol — 60 mEq/L',
    ],
    presentations: [
      { label: 'Envelope para diluir em 1 litro de água (90 mEq/L de sódio)' },
      { label: 'Frasco plástico pronto 250–500 mL (45, 60 ou 90 mEq/L)' },
      { label: 'Flaconete 25 mL para diluir em 250 mL' },
    ],
    doses: [
      {
        group: 'Crianças',
        items: [
          { label: 'Reidratação inicial (diarreia/vômitos)', value: '20–30 mL/kg/hora nas primeiras horas' },
          { label: 'Manutenção após cada evacuação — até 1 ano', value: '50–100 mL por vez' },
          { label: 'Manutenção — 1 a 10 anos', value: '100–200 mL por vez' },
          { label: 'Manutenção — > 10 anos', value: '200–400 mL por vez' },
          { label: 'Dengue clássica', value: '60–80 mL/kg/dia de líquidos; pelo menos 1/3 como SRO' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Desidratação importante', value: '50–100 mL/kg ao longo de 4–6 horas (ex.: 1–3 litros a cada 2 horas em paciente de 60 kg)' },
          { label: 'Dengue clássica', value: '60–80 mL/kg/dia; 2/3 como soluções caseiras + 1/3 como SRO' },
        ],
      },
    ],
    preparation: 'Soro caseiro emergencial: dissolver 20 g de açúcar (1 colher de sopa) + 3,5 g de sal (1 colher de chá) em 1 litro de água filtrada ou fervida. Deve estar levemente salgado (sabor de lágrima). Uso apenas em emergência pela imprecisão do preparo caseiro.',
    sideEffects: [
      'Náusea e vômitos (geralmente da doença de base).',
      'Hipernatremia se SRO não diluído corretamente.',
      'Risco de hiper-hidratação em ICC, disfunção renal ou SIADH.',
    ],
    contraindications: [
      'Sedação, coma, choque, crise convulsiva, alteração do nível de consciência',
      'Íleo paralítico',
      'Vômitos persistentes (preferir hidratação parenteral)',
    ],
  },
];

export const estimulantesApetite = [
  {
    id: 'buclizina',
    name: 'Buclizina',
    category: 'antianemicos-imuno',
    observations: 'Anticolinérgico antiemético. Vendido como estimulante do apetite, mas não há comprovação de efeito como orexígeno.',
    brands: ['Buclina — comprimido 25 mg'],
    presentations: [{ label: 'Comprimido 25 mg' }],
    doses: [
      {
        group: 'Crianças',
        items: [
          { label: 'Orexígeno (uso controverso)', value: '12,5 mg/dose, 2 vezes ao dia, antes do almoço e jantar' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Náuseas / vômitos', value: '25–50 mg/dose, 1–3 vezes ao dia' },
          { label: 'Cinetose', value: '25 mg/dose, 3 horas antes da viagem' },
          { label: 'Orexígeno (uso controverso)', value: '25 mg/dose, 2 vezes ao dia, antes do almoço e jantar' },
        ],
      },
    ],
    sideEffects: [
      'Sonolência, tontura, fraqueza, cefaleia, nervosismo, insônia.',
      'Visão borrada, secura na boca/nariz/garganta, constipação, retenção urinária.',
      'Efeitos anticolinérgicos maiores em crianças e idosos.',
    ],
    contraindications: [],
  },

  {
    id: 'ciproeptadina',
    name: 'Ciproeptadina',
    category: 'antianemicos-imuno',
    observations: 'Anti-histamínico. A cobamamida associada tem pouca ação anabolizante e não estimula o apetite. Tomar 1 hora antes das refeições.',
    brands: [
      'Cobavital — microcomprimido 4 + 1 mg; xarope 100 mL: 4 + 1 mg/15 mL',
      'Ciproeptadina + vitaminas B1, B2, B3, B6 e C — diversas associações',
    ],
    presentations: [
      { label: 'Comprimido / microcomprimido 4 mg' },
      { label: 'Xarope 4 mg/15 mL' },
    ],
    doses: [
      {
        group: 'Crianças > 2 anos',
        items: [
          { label: 'Dose geral', value: '0,25 mg/kg/dia ÷ 2 doses' },
          { label: '2–6 anos', value: '2 mg/dose, 2–3 vezes ao dia' },
          { label: '7–12 anos', value: '4 mg/dose, 2–3 vezes ao dia' },
          { label: 'Espasticidade pós-lesão medular', value: '4 mg/dose, 3–4 vezes ao dia. Máx: 36 mg/dia ou 0,5 mg/kg/dia.' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Alergia', value: '4 mg/dose, 2–3 vezes ao dia' },
          { label: 'Orexígeno', value: 'Iniciar 2 mg/dose. Máx: 8 mg/dose, 4 vezes ao dia.' },
          { label: 'Profilaxia da enxaqueca', value: '8–24 mg/dia' },
          { label: 'Cinetose', value: '4–20 mg/dia' },
        ],
      },
    ],
    sideEffects: [
      'Sedação, sonolência, cefaleia, tontura, nervosismo, excitabilidade, convulsões, ataxia.',
      'Taquicardia, palpitação, edema.',
      'Boca seca, diarreia, vômito, dor abdominal, hepatite.',
      'Hemólise, leucopenia, plaquetopenia.',
      'Broncoespasmo, epistaxe, aumento de transaminases.',
    ],
    contraindications: [
      'Disfunção vesical obstrutiva', 'Glaucoma', 'Lactação', 'Gravidez inicial',
      'Obstrução piloroduodenal', 'Úlcera péptica', 'Hipertrofia prostática',
    ],
  },
];

export const auxiliaresObesidade = [
  {
    id: 'lorcasserina',
    name: 'Lorcasserina',
    category: 'antianemicos-imuno',
    observations: 'Sacietógeno. Suspender se não houver redução de peso após 12 semanas de uso.',
    brands: ['Belviq — comprimido revestido 10 mg'],
    presentations: [{ label: 'Comprimido revestido 10 mg' }],
    doses: [
      {
        group: 'Adultos > 18 anos',
        items: [
          { label: 'Obesidade / sobrepeso', value: '10 mg/dose, 2 vezes ao dia. Suspender se sem efeito em 12 semanas.' },
        ],
      },
    ],
    sideEffects: [
      'Cefaleia, tontura, insônia.',
      'Hipoglicemia, dor muscular.',
      'Nasofaringite, tosse, hipertensão, edema.',
      'Náusea, vômito, diarreia, constipação.',
    ],
    contraindications: [],
  },

  {
    id: 'orlistate',
    name: 'Orlistate',
    category: 'antianemicos-imuno',
    observations: 'Inibidor de lipase. Reduz em até 30% a absorção de gordura da refeição. Associar suplementação com vitaminas lipossolúveis no tratamento prolongado. Uso não recomendado em crianças.',
    brands: ['Lipiblock / Lystate / Siluestat / Lipoxen / Orlipid / Xenilip / Orlistate — cápsula 120 mg'],
    presentations: [{ label: 'Cápsula 120 mg' }],
    doses: [
      {
        group: 'Adultos',
        items: [
          { label: 'Redução da absorção intestinal de gorduras', value: '120 mg/dose, 3 vezes ao dia, junto às refeições. Máx: 360 mg/dia.' },
        ],
      },
    ],
    sideEffects: [
      'Diarreia, esteatorreia, urgência fecal, flatulência com incontinência fecal.',
      'Dor abdominal, vômito, hipovitaminose.',
      'Cefaleia, fadiga, ansiedade, dor nas costas, mialgia, artralgia.',
      'Alergia, anafilaxia, urticária, otite.',
      'Sintomas GI piores com dieta rica em gordura.',
    ],
    contraindications: ['Colestase', 'Síndrome de má absorção intestinal', 'Gravidez'],
  },

  {
    id: 'sibutramina',
    name: 'Sibutramina',
    category: 'antianemicos-imuno',
    observations: 'Inibidor da recaptação de norepinefrina e serotonina. Além do receituário, é necessário preencher termo de responsabilidade em 3 vias. Suspender se não houver redução de peso após 2 meses. Monitorar PA e função cardíaca a cada 2 meses. Pode ser usado por até 2 anos.',
    brands: ['Biomag / Sibus / Slenfig / Saciette / Vazy / Cloridrato de sibutramina — cápsulas 10 e 15 mg'],
    presentations: [
      { label: 'Cápsula 10 mg' },
      { label: 'Cápsula 15 mg' },
    ],
    doses: [
      {
        group: 'Adultos > 16 anos',
        items: [
          { label: 'Sobrepeso / obesidade', value: 'Iniciar 10 mg/dia pela manhã. Se resultado inadequado após 4 semanas, aumentar para 15 mg/dia. Máx: 15 mg/dia.' },
        ],
      },
    ],
    sideEffects: [
      'Cefaleia, insônia, vertigem, tontura, sonolência, depressão.',
      'Taquicardia (média 4–6 bpm), hipertensão (média 2–4 mmHg), palpitação, dor torácica.',
      'Náusea, constipação, boca seca, dispepsia, dor abdominal.',
      'Rinite, sinusite, faringite, tosse.',
      'Erupção cutânea, sudorese, artralgia.',
    ],
    contraindications: [
      'IMC < 30', 'Cardiopatia / coronariopatia / arritmia / ICC', 'AVC prévio',
      'Hipertensão mal controlada', 'Idosos', 'Gestação / lactação',
      'Antecedente de anorexia ou bulimia', 'Uso de psicoativos', 'Insuficiência hepática grave',
    ],
  },
];

export const antianemicos = [
  {
    id: 'alfadarbepoetina',
    name: 'Alfadarbepoetina',
    category: 'antianemicos-imuno',
    observations: 'Forma geneticamente modificada da eritropoietina com duração 3× maior que a alfaepoetina. Manter Hb entre 10 e 11 g/dL. Monitorar ferro: suplementar se ferritina < 100 µg/L.',
    brands: ['Aranesp — seringa preenchida 40 a 500 µg/mL'],
    presentations: [{ label: 'Seringa preenchida 40–500 µg/mL' }],
    doses: [
      {
        group: 'Adultos e crianças > 1 ano',
        items: [
          { label: 'Anemia da IRC não dialítica (Hb < 10 g/dL)', value: 'EV/SC: 0,45 µg/kg/dose semanal; ou 0,75 µg/kg/dose quinzenal; ou 1,5 µg/kg/dose mensal (adultos).' },
          { label: 'Anemia da IRC dialítica', value: 'EV/SC: 0,45 µg/kg/dose semanal' },
          { label: 'Anemia por neoplasia / quimioterapia — adultos', value: 'SC: 2,25 µg/kg/dose semanal. Se Hb < 10 g/dL após 6 semanas, aumentar para 4,5 µg/kg. Dose alternativa: 500 µg a cada 3 semanas.' },
          { label: 'Mielodisplasia — adultos', value: 'SC: 150–300 µg/dose semanal (usual 240 µg) ou 500 µg a cada 2–3 semanas' },
        ],
      },
    ],
    sideEffects: [
      'Edema, hipertensão, ICC, IAM.',
      'Tromboembolismo arterial e venoso, embolia pulmonar, AVC, AIT.',
      'Aplasia pura de eritrócitos (descontinuar se anticorpos).',
      'Progressão tumoral, convulsões, encefalopatia hipertensiva.',
    ],
    contraindications: ['Hipertensão não controlada'],
  },

  {
    id: 'alfaepoetina',
    name: 'Alfaepoetina',
    suffix: 'Eritropoietina',
    category: 'antianemicos-imuno',
    observations: 'Eritropoietina recombinante. Manter Hb entre 10 e 11 g/dL. Monitorar ferro (ferritina < 100 µg/L ou transferrina < 20%: suplementar). Confirmar ausência de deficiência de ferro, folato ou B12 antes de iniciar. Via EV: aplicar lenta (1–5 min) seguida de 10 mL de SF. Armazenar a 2–8 ºC sem congelar.',
    brands: [
      'Alfaepoetina / Eritromax / Eprex / Eritropoietina / Hemax / Relipoietina — seringa ou frasco-ampola 1.000–40.000 UI/mL',
    ],
    presentations: [
      { label: 'Frasco-ampola / seringa 1.000, 2.000, 3.000, 4.000, 10.000, 20.000 e 40.000 UI/mL' },
    ],
    doses: [
      {
        group: 'Adultos e crianças',
        items: [
          { label: 'Anemia da IRC (Hb < 10 g/dL)', value: 'EV ou SC: 50–150 UI/kg/dose, 1–3 vezes/semana. Reduzir 25% se Hb subir 1 g/dL em 2 semanas; aumentar 25% se não subir em 4 semanas.' },
          { label: 'Anemia por AZT na AIDS', value: 'EV/SC: 100 UI/kg/dose, 3x/semana. Aumentar 50–100% se sem resposta em 8 semanas. Máx: 300 UI/kg.' },
          { label: 'Anemia neoplásica / quimioterapia', value: 'SC: 150 UI/kg/dose 3x/semana ou 40.000 UI/dose 1x/semana. Aumentar para 300 UI/kg ou 60.000 UI se sem resposta após 4 semanas.' },
          { label: 'Anemia do prematuro', value: 'SC: 50–500 UI/kg/dose, 3x/semana, por até 10 doses' },
          { label: 'Preparo para cirurgia (Hb 10–13 g/dL)', value: 'SC: 300 UI/kg/dia, 10 dias antes até 4 dias depois' },
        ],
      },
    ],
    sideEffects: [
      'Hipertensão, ICC, IAM, AVC, encefalopatia hipertensiva.',
      'Aplasia pura de eritrócitos (descontinuar).',
      'Trombose venosa profunda, tromboembolismo.',
      'Náusea, vômito, artralgia, mialgia, cefaleia, fadiga, febre.',
      'Stevens-Johnson, necrose epidérmica tóxica.',
    ],
    contraindications: [
      'Hipertensão não controlada',
      'Aplasia pura adquirida de série vermelha após tratamento prévio',
      'Angina instável',
    ],
  },

  {
    id: 'betaepoetina',
    name: 'Betaepoetina',
    category: 'antianemicos-imuno',
    observations: 'Eritropoietina recombinante beta. Não utilizar em menores de 2 anos com doença renal. Aplicar a primeira dose sob supervisão de reação anafilática.',
    brands: ['Recormon — seringa preenchida 6.000 UI'],
    presentations: [{ label: 'Seringa preenchida 6.000 UI' }],
    doses: [
      {
        group: 'Adultos e crianças',
        items: [
          { label: 'Anemia da IRC não dialítica', value: 'SC: 20 UI/kg/dose, 3x/semana. Aumentar 20 UI/kg/dose a cada 4 semanas se necessário. Máx: 720 UI/kg.' },
          { label: 'Anemia da IRC dialítica', value: 'EV (2 min): 40 UI/kg/dose, 3x/semana.' },
          { label: 'Anemia neoplásica / quimioterapia', value: 'SC adultos: 30.000 UI ou 450 UI/kg/dose, 3–7x/semana. Dobrar se sem resposta em 4 semanas. Descontinuar após 8 semanas sem alteração.' },
          { label: 'Anemia do prematuro (profilático)', value: 'SC: 250 UI/kg/dose, 3x/semana. Iniciar no 3º dia de vida, por 6 semanas.' },
        ],
      },
    ],
    sideEffects: ['Ver alfaepoetina.'],
    contraindications: ['Hipertensão não controlada'],
  },

  {
    id: 'ferro',
    name: 'Ferro',
    category: 'antianemicos-imuno',
    observations: 'Expresso em mg de ferro elementar. Sulfato ferroso é a primeira escolha (melhor custo/benefício). Sais ferrosos: tomar 1 h antes ou 2 h após refeições (melhor absorção); se intolerância, tomar com alimentos. Sais férricos (ferro III): podem ser tomados durante ou após refeições. Ácido ascórbico > 200 mg favorece absorção. Escurecimento das fezes é normal e proporcional à dose. Antídoto: desferroxamina.',
    brands: [
      'Sulfato ferroso — drágeas, gotas, xarope, comprimidos (diversas)',
      'Ferripolimaltose — gotas 50 mg/mL; xarope 50 mg/5 mL; comp. mastigável 100 mg',
      'Glicinato férrico — gotas 50 mg/mL; comprimido 300 mg; flaconete 50 mg',
      'Sacrato de hidróxido de ferro III — ampola EV 20 mg/mL',
      'Carboximaltose férrica — frasco 10 mL: 50 mg/mL',
    ],
    presentations: [
      { label: 'Gotas 50 mg/mL (ferro elementar)' },
      { label: 'Xarope 50 mg/5 mL' },
      { label: 'Comprimido / drágea 100–300 mg' },
      { label: 'Ampola EV 20 mg/mL (sacrato)' },
      { label: 'Frasco EV 50 mg/mL (carboximaltose)' },
    ],
    doses: [
      {
        group: 'Profilaxia — crianças (SBP 2018)',
        items: [
          { label: 'RN a termo / bom peso — início 3º mês até 2 anos', value: '1 mg/kg/dia' },
          { label: 'Pré-termo 1–1,5 kg — início 30 dias', value: '3 mg/kg/dia até 1 ano; depois 1 mg/kg/dia até 2 anos' },
          { label: 'Pré-termo < 1 kg — início 30 dias', value: '4 mg/kg/dia até 1 ano; depois 1 mg/kg/dia até 2 anos' },
        ],
      },
      {
        group: 'Terapêutico — crianças (anemia ferropriva documentada)',
        items: [
          { label: 'Oral', value: '3–6 mg/kg/dia ÷ 1–3 doses. Prematuros: 6 mg/kg/dia ÷ 3 doses.' },
          { label: 'Dose total EV (fórmula)', value: 'Fe (mg) = peso × 4 × (Hb desejada − Hb atual)' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Anemia ferropriva — oral / IM', value: '3–5 mg/kg/dia ou 100–200 mg/dia, 1–3 vezes ao dia. Idosos: 15–50 mg/dia. Manter até normalizar Hb e ferritina (até 6 meses).' },
          { label: 'EV', value: '100–300 mg/dose em 100 mL SF em 30 min. Repetir 1–3x/semana. Intervalo mínimo 48 h.' },
          { label: 'Dose total EV (fórmula)', value: 'Fe (mg) = peso × (Hb desejada − Hb atual) × 2,4 + 500' },
          { label: 'Gestante — oral', value: '60–200 mg/dia' },
          { label: 'Profilaxia por perda menstrual excessiva', value: '30–60 mg/dia por 3 meses consecutivos ao ano' },
          { label: 'Profilaxia em gestantes', value: '30–60 mg/dia + ácido fólico 400 µg a partir da 20ª semana' },
        ],
      },
    ],
    sideEffects: [
      'Constipação, diarreia, dispepsia, pirose, dor epigástrica, náusea, vômito, cólicas.',
      'Escurecimento das fezes (normal) e dos dentes (removível pela escovação).',
      'EV: cefaleia, tontura, prurido, febre, hipotensão (injeção rápida), flebite, anafilaxia (rara).',
    ],
    contraindications: [
      'Hemocromatose', 'Hemosiderose', 'Anemias hemolíticas',
      'Anemias relacionadas a infecções e neoplasias', 'Ferritina > 500 ng/mL',
    ],
  },

  {
    id: 'folinato-calcio',
    name: 'Folinato de cálcio',
    suffix: 'Ácido folínico / Leucovorina',
    category: 'antianemicos-imuno',
    observations: 'Forma ativa do ácido fólico. 100 mg de folinato contém 92,6 mg de ácido folínico. Forma injetável apenas para uso hospitalar. Aplicar sempre antes do antineoplásico em todos os ciclos.',
    brands: [
      'Leucovorin / Tevafolin — ampola 10 mg/mL',
      'Folacin / Folinato de cálcio — comprimido 15 mg; frasco-ampola 50 mg',
    ],
    presentations: [
      { label: 'Ampola 10 mg/mL' },
      { label: 'Comprimido 15 mg' },
      { label: 'Frasco-ampola 50 mg' },
    ],
    doses: [
      {
        group: 'Adultos e crianças',
        items: [
          { label: 'Anemia megaloblástica por deficiência de folato', value: 'EV/IM: 0,25–1 mg/dia' },
          { label: 'Resgate do metotrexato', value: 'EV ou oral: 10 mg/m²/dose ou 15 mg/m²/dose a cada 6 h por 10 doses, iniciando 24–36 h após metotrexato. Ajustar conforme nível sérico.' },
          { label: 'Câncer colorretal (com fluoruracila)', value: '200 mg/m² EV lento. Com oxaliplatina: 500 mg/m² EV lento (3 min).' },
          { label: 'Intoxicação por pirimetamina', value: 'Oral/IM: 10–25 mg/dose a cada dose de pirimetamina' },
        ],
      },
    ],
    sideEffects: [
      'Exantema, urticária, prurido, broncoespasmo, anafilaxia.',
      'Náusea, vômito, diarreia, estomatite.',
      'Fadiga, trombocitose.',
    ],
    contraindications: ['Anemia por deficiência de vitamina B12'],
  },

  {
    id: 'acido-folico',
    name: 'Vitamina B9',
    suffix: 'Ácido fólico',
    category: 'antianemicos-imuno',
    observations: 'Estoques corporais suficientes para ~3 meses. Pode mascarar anemia perniciosa por deficiência de B12, com agravamento das complicações neurológicas.',
    brands: ['Diversas marcas — comprimido 5 mg; gotas 0,2 mg/mL e 0,5 mg/mL'],
    presentations: [
      { label: 'Comprimido 5 mg' },
      { label: 'Gotas 0,2 mg/mL e 0,5 mg/mL' },
    ],
    doses: [
      {
        group: 'Crianças',
        items: [
          { label: 'Profilático em lactentes', value: '200 µg/dia' },
          { label: 'Tratamento da deficiência', value: '0,5–1 mg/dia por 3–4 semanas; manutenção 0,2 mg/dia' },
          { label: 'Anemias hemolíticas crônicas (drepanocitose, talassemia)', value: '5 mg/dia ou em dias alternados' },
          { label: 'Suplementação oral (antiepilépticos / diálise)', value: '1 mg/dia ou 5 mg/semana' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Deficiência', value: '0,4–1 mg/dia (casos resistentes: até 5 mg/dia)' },
          { label: 'Suplementação em anemias crônicas', value: '5 mg/dia' },
          { label: 'Uso de antiepilépticos / metotrexato / trimetoprima', value: '1–5 mg/dia' },
          { label: 'Anemia megaloblástica / hemolítica', value: '1–5 mg/dia associado à B12 até cessação da anemia' },
          { label: 'Profilaxia perinatal — mulheres em idade fértil', value: '0,4–1 mg/dia; iniciar 1–3 meses antes da concepção, continuar até 2–3 meses de gestação' },
          { label: 'Profilaxia perinatal — histórico familiar de DTN', value: '4–5 mg/dia' },
        ],
      },
    ],
    sideEffects: [
      'Irritabilidade, distúrbios do sono, confusão, anorexia, náusea.',
      'Flatulência, erupção cutânea, prurido, broncoespasmo.',
    ],
    contraindications: [],
  },

  {
    id: 'vitamina-b12',
    name: 'Vitamina B12',
    suffix: 'Cianocobalamina',
    category: 'antianemicos-imuno',
    observations: 'Exige fator intrínseco gástrico para absorção. Estoques corporais suficientes para até 3 anos. Suplementação indicada em idosos com atrofia gástrica, gastrectomizados, síndromes de má absorção, doença de Crohn e vegetarianos estritos.',
    brands: ['Amicored / Bedozil / Cronobê / Citoneurin B12 FC — ampolas 1.000 e 5.000 µg'],
    presentations: [
      { label: 'Ampola 1.000 µg' },
      { label: 'Ampola 5.000 µg' },
    ],
    doses: [
      {
        group: 'Adultos e crianças',
        items: [
          { label: 'Suplementação — oral', value: '50–150 µg/dia (manipulada ou em associações)' },
          { label: 'Suplementação — IM', value: '1.000–5.000 µg/dose mensal' },
          { label: 'Anemia perniciosa — indução', value: 'IM: 500–1.000 µg/dose por 1–2 semanas; depois 1.000 µg/semana até normalizar (1–2 meses); depois 1.000–5.000 µg mensal contínua.' },
          { label: 'Anemia megaloblástica com manifestações neurológicas', value: 'IM: 1.000–5.000 µg/dose, 1–2x/semana por 2 semanas; depois 1 dose semanal por 1 mês; depois 1.000 µg mensal.' },
          { label: 'Ressecção duodenal/ileal', value: 'IM: 1.000 µg mensal; ou oral 200 µg/dia' },
        ],
      },
    ],
    sideEffects: [
      'Trombose periférica, alergia, urticária, coceira, exantema, diarreia.',
    ],
    contraindications: [],
  },
];

export const imunoestimulantes = [
  {
    id: 'filgrastim',
    name: 'Filgrastim',
    category: 'antianemicos-imuno',
    observations: 'Fator estimulante do crescimento de colônia de granulócitos (G-CSF). 1 mL = 10 µg. Aguardar 24–72 h após quimioterapia para iniciar. Fazer 2 hemogramas semanais durante tratamento. Uso exclusivo por especialistas.',
    brands: [
      'Filgrastim — frasco-ampola 30 µg/mL (1 mL) ou 300 µg/0,5 mL (seringa)',
    ],
    presentations: [
      { label: 'Frasco-ampola 300 µg/mL' },
      { label: 'Seringa 0,5 mL — 300 µg' },
    ],
    doses: [
      {
        group: 'Crianças',
        items: [
          { label: 'Neutropenia pós-quimioterapia', value: 'EV ou SC: 5 µg/kg/dia' },
          { label: 'Neutropenia idiopática ou cíclica', value: 'SC: 1–5 µg/kg/dia' },
          { label: 'Neutropenia por AZT/zidovudina', value: '5–10 µg/kg/dia' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Neutropenia pós-quimioterapia', value: 'SC ou EV: 5 µg/kg/dia. Interromper quando neutrófilos ≥ 1.000–1.500/mm³.' },
          { label: 'Pós-transplante de medula', value: 'Iniciar 5–10 µg/kg/dia; ajustar pelo leucograma.' },
          { label: 'Neutropenia crônica grave', value: 'SC: iniciar 5 µg/kg/dia; manutenção 1–10 µg/kg a cada 24 ou 48 h.' },
          { label: 'Aplasia de medula com infecção de repetição', value: 'Iniciar 5 µg/kg/dia; manutenção 1–5 µg/kg/dia.' },
          { label: 'Mobilização de células progenitoras', value: '10 µg/kg/dia por 4 dias antes da leucaférese.' },
        ],
      },
    ],
    preparation: 'Diluir em 10–50 mL de SG 5%. Se concentração < 15 µg/mL, adicionar albumina humana. Diluição mínima: 2 µg/mL. Não usar salina.',
    sideEffects: [
      'Dor osteomuscular, cefaleia, fraqueza, febre, fotofobia.',
      'Náusea, vômito, diarreia, mucosite, esplenomegalia.',
      'Insuficiência respiratória aguda, arritmia, pericardite.',
      'Anemia, plaquetopenia, síndrome mielodisplásica.',
      'Vasculite, alopecia, anafilaxia.',
      'Glomerulonefrite (reduzir dose ou suspender).',
    ],
    contraindications: [],
  },

  {
    id: 'lipegfilgrastim',
    name: 'Lipegfilgrastim',
    category: 'antianemicos-imuno',
    observations: 'Fator estimulante do crescimento de colônia de granulócitos, de ação prolongada.',
    brands: ['Lonquex — seringa preenchida 0,6 mL: 6 mg'],
    presentations: [{ label: 'Seringa preenchida 0,6 mL — 6 mg' }],
    doses: [
      {
        group: 'Adultos',
        items: [
          { label: 'Neutropenia pós-quimioterapia', value: 'SC: 6 mg, 24–72 horas após cada ciclo.' },
        ],
      },
    ],
    sideEffects: [
      'Dor osteomuscular, cefaleia, dor no peito.',
      'Hipopotassemia, esplenomegalia, trombocitopenia, alergia.',
    ],
    contraindications: [],
  },

  {
    id: 'molgramostim',
    name: 'Molgramostim',
    category: 'antianemicos-imuno',
    observations: 'Fator de crescimento da linhagem mieloide, regulador da hematopoiese. Iniciar após fim da quimioterapia; interromper pelo menos 2 dias antes do próximo ciclo. Uso exclusivo por especialistas.',
    brands: ['Manipulado / genérico (não possui marca comercial principal no Brasil)'],
    presentations: [{ label: 'Frasco para injeção (SC ou EV)' }],
    doses: [
      {
        group: 'Adultos',
        items: [
          { label: 'Leucopenia por quimioterapia / mielodisplasia / HIV', value: 'SC: iniciar 5 µg/kg/dose por 2–4 dias; manutenção 5–10 µg/kg/dose conforme resposta.' },
          { label: 'Neutropenia crônica grave', value: 'SC: iniciar 5 µg/kg; manutenção 1–5 µg/kg diariamente ou a cada 2–7 dias.' },
        ],
      },
    ],
    preparation: 'EV: diluir em SF ou SG para mínimo de 75 µg/mL; infundir em 30 min.',
    sideEffects: [
      'Febre, náusea, vômito, diarreia, anorexia, edema.',
      'Hipotensão, hipertensão intracraniana, dor óssea, artralgia, dor torácica.',
      'Derrame cavitário, aumento de peso, broncospasmo, erupção cutânea.',
      'Trombocitopenia, linfocitose. Risco de converter mielodisplasia em leucemia.',
    ],
    contraindications: ['Leucemia mieloide aguda ou crônica', 'Síndrome mielodisplásica'],
  },

  {
    id: 'pegfilgrastim',
    name: 'Pegfilgrastim',
    category: 'antianemicos-imuno',
    observations: 'G-CSF peguilado, tão eficaz quanto filgrastim. Aplicar no mínimo 24 h após quimioterapia. Aguardar pelo menos 14 dias para o próximo ciclo. Conservar a 2–8 ºC sem congelar. Uso exclusivo subcutâneo por especialistas.',
    brands: ['Neulastim — seringa preenchida 0,6 mL: 6 mg'],
    presentations: [{ label: 'Seringa preenchida 0,6 mL — 6 mg' }],
    doses: [
      {
        group: 'Crianças (fabricante contraindica; uso off-label)',
        items: [
          { label: 'Neutropenia pós-quimioterapia', value: 'SC: 0,1 mg/kg/dose. Máx: 6 mg.' },
        ],
      },
      {
        group: 'Adultos',
        items: [
          { label: 'Neutropenia pós-quimioterapia (exceto LMA e mielodisplasia)', value: 'SC: 6 mg (1 seringa) ≥ 24 h após quimioterapia. Pode repetir após 2 semanas se necessário.' },
        ],
      },
    ],
    sideEffects: [
      'Dor osteomuscular, cefaleia, edema periférico.',
      'Alergia, urticária, anafilaxia.',
      'Náusea, glomerulonefrite, síndrome respiratória aguda.',
      'Ruptura de baço, hiperglicocitose. Pode estimular crescimento de tumores mieloides.',
    ],
    contraindications: [],
  },

  {
    id: 'plerixafor',
    name: 'Plerixafor',
    category: 'antianemicos-imuno',
    observations: 'Mobilizador de células-tronco hematopoéticas. Utilizado em linfoma não-Hodgkin ou mieloma múltiplo. Iniciar após 4 dias de tratamento com filgrastim.',
    brands: ['Mozobil — frasco-ampola 1,2 mL: 24 mg'],
    presentations: [{ label: 'Frasco-ampola 1,2 mL — 24 mg' }],
    doses: [
      {
        group: 'Adultos',
        items: [
          { label: 'Mobilização de células-tronco para transplante autólogo', value: 'SC: 0,24 mg/kg/dia ~11 h antes da aférese, por 2–4 dias. Máx: 40 mg/dia.' },
        ],
      },
    ],
    renalAdjustment: [
      { label: 'ClCr < 50 mL/min', value: '0,16 mg/kg/dia. Máx: 27 mg/dia.' },
    ],
    sideEffects: [
      'Cefaleia, fadiga, tontura, síncope, insônia.',
      'Diarreia, náusea, vômito, dor abdominal, constipação, boca seca.',
      'Artralgia, mialgia, hipotensão, reação no local da injeção.',
      'Anafilaxia, hiperleucocitose, plaquetopenia. Ruptura esplênica (rara).',
    ],
    contraindications: [],
  },
];