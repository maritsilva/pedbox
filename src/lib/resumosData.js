export const RESUMOS = [
  {
    id: 'exantemáticas',
    titulo: 'Doenças Exantemáticas e FSSL',
    emoji: '🔴',
    subtitulo: 'Sarampo, Rubéola, Varicela, Eritema Infeccioso e mais',
    categoria: 'Infectologia',
    referencia: 'Schvartsman C et al. Pronto-Socorro do ICr-HCFMUSP. 4ª ed. Manole; 2023.',
    seções: [
      {
        nome: 'História Natural das Doenças Exantemáticas',
        conteudo: 'Sequência: CONTÁGIO → INCUBAÇÃO (assintomático) → PRÓDROMOS (febre, enantemas) → EXANTEMA → CONVALESCENÇA. Incubação viral: geralmente 1-3 semanas, exceto mononucleose (>30-50 dias). Exantema com febre → pensar em sarampo ou rubéola. Exantema após febre → pensar em eritema infeccioso ou exantema súbito. Exantema vesicular → varicela ou mão-pé-boca.',
        color: 'blue'
      },
      {
        nome: '1. Sarampo (Morbilivírus / Paramyxovírus)',
        conteudo: 'Transmissão: AEROSSÓIS (alta — 90% dos suscetíveis se infectam). Transmite de 3-4 dias antes até 4-6 dias após o rash. Incubação: 8-12 dias. Pródromos: tosse, febre alta crescente, coriza, conjuntivite com fotofobia + Manchas de Koplik (patognomônicas — máculas branco-azuladas na mucosa jugal). Exantema: morbiliforme (maculopapular confluente com áreas de pele sã), craniocaudal lenta (3-5 dias), descamação furfurácea. Complicações: OMA (mais comum), pneumonia de células gigantes ou bacteriana (principal causa de morte), encefalite (alta letalidade), PESS. Tratamento: Vitamina A (2 doses); isolamento aéreo; notificação compulsória imediata. Profilaxia pós-contato: vacina até 3º dia (>6 meses) ou Ig padrão até 6º dia (imunodeprimidos, grávidas, <6 meses).',
        color: 'red'
      },
      {
        nome: '2. Rubéola (Rubivírus / Togaviridae)',
        conteudo: 'Transmissão: gotículas (5-7 dias antes até 5-7 dias após rash). Incubação: 14-21 dias. Pródromos: sintomas leves, febre baixa, linfadenopatia retroauricular/occipital/cervical posterior, manchas de Forscheimer (palato — não patognomônicas). Exantema: rubeoliforme (lesões isoladas, róseas), craniocaudal RÁPIDA, SEM descamação. Complicações: trombocitopenia, artropatia (mulheres jovens), Síndrome da Rubéola Congênita (surdez + catarata + PCA — quando no 1º trimestre gestacional). Tratamento: sintomáticos. Notificação compulsória imediata.',
        color: 'amber'
      },
      {
        nome: '3. Eritema Infeccioso (Parvovírus B19)',
        conteudo: 'NÃO transmite na fase exantemática! Transmissão por gotículas ANTES do rash. Incubação: ±15 dias. Pródromos: inexistentes ou inespecíficos. Exantema TRIFÁSICO: (1ª) Face esbofeteada (eritema malar), (2ª) Reticulado/rendilhado em tronco e extremidades — poupa palmas e plantas, (3ª) Recidiva por luz solar, calor, exercício. Sem descamação. Complicações: crise aplástica (em anemias hemolíticas — AINDA contagioso), hidropsia fetal não imune (infecção no 2º trimestre), artropatia, síndrome papular-purpúrica em luvas e meias.',
        color: 'green'
      },
      {
        nome: '4. Exantema Súbito / Roséola (HHV-6 e 7)',
        conteudo: 'TÍPICO EM LACTENTES (6 meses a 2 anos). Transmissão: saliva de portadores crônicos. Pródromos: febre ALTA por ~3 dias que some de forma ABRUPTA (em crise). Exantema: maculopapular, início no TRONCO com progressão centrífuga, surge APÓS desaparecimento da febre. Sem descamação. Complicação: convulsão febril (até 15%).',
        color: 'purple'
      },
      {
        nome: '5. Varicela (Vírus Varicela-Zóster)',
        conteudo: 'Transmissão: aerossol e contato direto (2 dias antes do rash até crostificação total). Incubação: 10-21 dias. Pródromos: inespecíficos (crianças geralmente sem pródromo). Exantema: VESICULAR com polimorfismo regional (mácula→pápula→vesícula→pústula→crosta), distribuição centrípeta (mais lesões no tronco), pruriginoso, acomete mucosas. Transmissível até CROSTIFICAÇÃO TOTAL. Complicações: infecção bacteriana secundária (GBA/S.aureus), varicela progressiva (imunodeprimidos), ataxia cerebelar (complicação neurológica mais comum), encefalite, síndrome varicela congênita (<20 sem). Tratamento: Aciclovir VO 20mg/kg/dose 4x/dia 5 dias (indicações específicas: >12 anos, 2º caso domiciliar, doença crônica cutânea/pulmonar, corticoide não-imunossupressor, uso de AAS). Aciclovir EV: imunodeprimidos, RN, doença grave. Profilaxia pós-contato: vacina até 5º dia (ideal 3º dia) ou Imunoglobulina Específica até 4º dia (imunodeprimidos, grávidas, RN prematuros).',
        color: 'blue'
      },
      {
        nome: '6. Doença Mão-Pé-Boca (Coxsackie A16)',
        conteudo: 'Exantema: vesículas/úlceras na CAVIDADE ORAL + lesões maculopapulares/vesiculares em mãos, pés e nádegas (nas nádegas: apenas papular, sem vesícula). Complicação: onicomadese (descolamento do leito ungueal). Quadro benigno e autolimitado — sem tratamento específico.',
        color: 'orange'
      },
      {
        nome: '7. Escarlatina (SBGA + exotoxina pirogênica)',
        conteudo: 'Transmissão: gotículas (transmite até 24h após início do ATB). Incubação: 2-5 dias. Pródromos: faringite estreptocócica (febre alta, vômito, dor abdominal), língua em morango (branco → vermelho). Exantema: MICROPAPULAR com aspecto de LIXA, craniocaudal, Sinal de Pastia (acentuação em pregas/dobras), Sinal de Filatov (palidez peribucal). Descamação: LAMINAR/lamelar (extremidades). Pode ter mais de 1 episódio (3 tipos de exotoxinas). Tratamento: penicilina benzatina DU ou amoxicilina 10 dias. Complicações: GNPE, febre reumática, abscesso periamigdaliano (adultos jovens, trismo), abscesso retrofaríngeo (< 5 anos, dor à mobilização cervical).',
        color: 'red'
      },
      {
        nome: '8. Doença de Kawasaki',
        conteudo: 'FEBRE >5 dias + 4 de 5 critérios: (1) Conjuntivite não exsudativa, (2) Alteração oral: lábios fissurados, língua em morango, hiperemia difusa — SEM faringite exsudativa, (3) Adenomegalia cervical (gânglio único ≥1,5cm), (4) Exantema POLIMORFO — não vesicular, intenso na região inguinal, (5) Edema/eritema de extremidades → descamação peri-ungueal. Complicação: ANEURISMA CORONARIANO (20-25% sem tratamento) — sempre realizar ecocardiograma! Tratamento: Imunoglobulina IV alta dose (nos primeiros 10 dias) + AAS anti-inflamatório (fase aguda) + AAS anti-agregante (fase subaguda). Diferença com escarlatina: Kawasaki em <5 anos, febre prolongada, com conjuntivite, sem faringite exsudativa.',
        color: 'pink'
      },
      {
        nome: '9. Mononucleose Infecciosa (EBV)',
        conteudo: 'Faixa etária típica: 15-24 anos. Transmissão: gotículas ("doença do beijo"). Incubação: 30-50 DIAS. Clínica: febre + faringite + ADENOPATIA GENERALIZADA + ESPLENOMEGALIA + edema palpebral (sinal de Hoagland) + EXANTEMA APÓS AMOXICILINA. Complicação: risco de ruptura esplênica (evitar atividade física de impacto). Laboratório: linfocitose com atipia, anticorpos heterófilos (>4 anos), anticorpos específicos. Tratamento: suporte.',
        color: 'indigo'
      },
      {
        nome: 'FSSL — Febre sem Sinais Localizatórios',
        conteudo: 'Definição: febre <7 dias sem causa evidente. Causas: viral autolimitada, fase prodrômica de doença benigna, infecção bacteriana grave (bacteremia oculta, ITU, pneumonia). <1 mês: INTERNAÇÃO + exames + culturas + ATB empírico. 1-3 meses: PVR + hemograma + urina; classificação de Rochester (baixo risco → acompanhar; alto risco → internar + ATB). 3-36 meses: vacinado → PVR ± urina; não vacinado → conduta por temperatura/EAS. RN com febre: TOLERÂNCIA ZERO — internar e iniciar ATB empírico.',
        color: 'teal'
      }
    ]
  },
  {
    id: 'aleitamento-materno',
    titulo: 'Aleitamento Materno',
    emoji: '🍼',
    subtitulo: 'Definições, técnica, dificuldades e contraindicações',
    categoria: 'Nutrição',
    referencia: 'Ministério da Saúde. Guia alimentar para crianças brasileiras menores de 2 anos. Brasília: MS, 2019. SBP — Aleitamento Materno.',
    seções: [
      {
        nome: 'Definições e Recomendações',
        conteudo: 'AM exclusivo: apenas leite materno até 6 meses. AM predominante: leite materno + outros líquidos. AM complementado: leite materno + alimentos sólidos (manter pelo menos até 2 anos). AM misto: leite materno + outro leite. Iniciar em sala de parto, na 1ª hora (Golden Hour). Livre demanda.',
        color: 'blue'
      },
      {
        nome: 'Fases e Composição do Leite Materno',
        conteudo: 'Colostro (até 3-5 dias): rico em proteínas, eletrólitos, IgA e vitaminas lipossolúveis (A). Leite de transição. Leite maduro (>10-15 dias): mais lipídios, calorias e lactose. Comparado ao leite de vaca: leite humano tem MAIS lactose e ferro bem absorvido; leite de vaca tem mais proteína (caseína), gordura, calorias e eletrólitos. Fatores de proteção: IgA, oligossacarídeos (HMO), prebióticos, probióticos, fator bífido, lactoferrina, lisozima.',
        color: 'green'
      },
      {
        nome: 'Lactogênese (Produção de Leite)',
        conteudo: 'Fase I (2ª metade da gestação): preparo da mama — estrogênio + progesterona. Fase II (1ºs dias pós-parto): queda da progesterona → prolactina age; apojadura surge do 2º ao 4º dia — INDEPENDENTE da sucção. Fase III — Galactopoiese: exige sucção e esvaziamento; prolactina = produção; ocitocina = ejeção.',
        color: 'amber'
      },
      {
        nome: 'Técnica e Dificuldades',
        conteudo: 'Pega correta: boca bem aberta, queixo toca a mama, lábio inferior evertido, aréola mais visível acima. Posicionamento: rosto do bebê frente à mama, corpo próximo e alinhado. Armazenamento: frasco de vidro com tampa plástica; geladeira 12h; congelador 15 dias; aquecer em banho-maria com fogo desligado; oferecer em copo/colher. Dificuldades → sempre corrigir técnica e manter AM: fissura (posições variadas, mama seca), ingurgitamento (esvaziar), mastite (ATB se sem melhora em 24h: cefalexina ou amoxicilina+clavulanato), candidíase (antifúngico tópico mãe e bebê), baixo ganho de peso (avaliar técnica, diurese, evacuação).',
        color: 'red'
      },
      {
        nome: 'Contraindicações e Situações Especiais',
        conteudo: 'ABSOLUTAS: mãe HIV ou HTLV, uso de quimioterápicos/imunossupressores; RN com galactosemia. Suspensão temporária: herpes na mama afetada, Chagas aguda, varicela 5 dias antes até 2 dias após o parto, leptospirose aguda, uso de substâncias. Manter com máscara: tuberculose bacilífera (após início de tratamento), influenza, COVID. Substâncias e intervalo para amamentar: álcool 2h/dose; maconha/cocaína 24h; anfetamina 24-36h; LSD 48h.',
        color: 'purple'
      }
    ]
  },
  {
    id: 'alimentacao-infantil',
    titulo: 'Alimentação Infantil',
    emoji: '🥦',
    subtitulo: 'Alimentação complementar, introdução alimentar e orientações',
    categoria: 'Nutrição',
    referencia: 'Brasil. Ministério da Saúde. Guia alimentar para crianças brasileiras menores de 2 anos. Brasília: MS, 2019. SBP — Alimentação na Infância.',
    seções: [
      {
        nome: 'Início e Princípios',
        conteudo: 'Introdução alimentar (IA): aos 6 meses, mantendo AM até pelo menos 2 anos. Pré-termo: IA entre 4-6 meses de idade corrigida, com sinais de prontidão (sustento cefálico, sentar com mínimo apoio, interesse por alimentos, redução do reflexo de protrusão lingual). Primeiros Mil Dias (gestação + 2 anos): janela de oportunidade que impacta toda a vida adulta.',
        color: 'green'
      },
      {
        nome: 'Papa Principal e Organização das Refeições',
        conteudo: 'Papa principal: 1 alimento de cada grupo — cereal/tubérculo (arroz, batata) + leguminosa (feijão, lentilha) + proteína animal (carne, ovo, peixe) + hortaliça (legumes/verduras). 6 meses: 2 lanches de fruta + 1 refeição/dia. 7-8 meses: 2 lanches + 2 refeições. Adicionar óleo vegetal. Fruta como sobremesa opcional (melhora absorção de ferro).',
        color: 'blue'
      },
      {
        nome: 'Orientações Gerais',
        conteudo: 'Oferecer água (não sucos). Não adicionar sal até 1 ano (SBP) — MS recomenda o mínimo. Não oferecer açúcar, mel ou ultraprocessados até 2 anos. Introduzir alimentos potencialmente alergênicos desde o início (intervalo de 3-5 dias entre eles). Consistência: amassado com garfo; >1 ano: textura da comida da família. Não peneirar nem liquidificar. Alimentos separados no prato.',
        color: 'amber'
      },
      {
        nome: 'Criança Não Amamentada',
        conteudo: 'Até 6 meses: fórmula infantil de partida (1). A partir de 6 meses: fórmula de seguimento (2). SBP: leite de vaca integral a partir de 12 meses. OMS: a partir de 12 meses. Evitar: fórmula 3 (de primeira infância), leite desnatado/semidesnatado, composto lácteo. Não adoçar nem adicionar achocolatado.',
        color: 'purple'
      }
    ]
  },
  {
    id: 'alergia-refluxo-constipacao',
    titulo: 'Alergia Alimentar, Refluxo e Constipação',
    emoji: '🥛',
    subtitulo: 'APLV, DRGE e constipação intestinal funcional',
    categoria: 'Gastroenterologia',
    referencia: 'SBP — Alergia Alimentar, 2022. SBP — Doença do Refluxo Gastroesofágico em Pediatria, 2022. Critérios de Roma IV.',
    seções: [
      {
        nome: 'APLV — Alergia à Proteína do Leite de Vaca',
        conteudo: 'Mecanismos: mediado por IgE (urticária, angioedema, anafilaxia, síndrome da alergia oral), não mediado por IgE (proctocolite, enteropatia, FPIES), misto (esofagite eosinofílica). Diagnóstico: dieta de eliminação 2-4 semanas + teste de provocação oral. Tratamento: AME → restrição materna + cálcio; fórmula → extensamente hidrolisada (1ª opção). Fórmula de aminoácidos: casos graves (anafilaxia, FPIES grave, alergias múltiplas). Prognóstico: remissão em 85-90% aos 3 anos.',
        color: 'orange'
      },
      {
        nome: 'FPIES (Enterocolite por Proteína Alimentar)',
        conteudo: 'Lactentes (2-7 meses). Vômitos profusos 1-4h após ingestão + sintomas sistêmicos (letargia, palidez, hipotensão) + neutrofilia. Critério maior: vômito 1-4h após alimento suspeito, sem sintomas IgE-mediados. Tratamento agudo: ondansetrona + hidratação VO (leve) ou EV (moderada/grave).',
        color: 'red'
      },
      {
        nome: 'Refluxo Fisiológico vs. DRGE',
        conteudo: 'Refluxo fisiológico (Roma IV): lactente saudável 3 sem a 12 meses, ≥2 regurgitações/dia por ≥3 sem, SEM aspiração, perda de peso, apneia ou hematêmese → orientar e tranquilizar os pais. DRGE: progressão para medidas não farmacológicas → citoprotetores → exclusão PLV → bloqueador H2 → IBP (lactentes). Crianças maiores: mudanças de hábitos → supressão ácida → endoscopia.',
        color: 'blue'
      },
      {
        nome: 'Constipação Intestinal Funcional',
        conteudo: 'Critérios (≥2 por ≥1 mês): ≤2 evacuações/semana, retenção, dor/dificuldade, fezes de grande calibre, massa fecal no reto, incontinência ≥1x/semana. Sinais de alerta: atraso eliminação mecônio, início no 1º mês, vômitos biliosos, baixo peso, alterações neurológicas. Tratamento: Desimpactação → PEG 1-1,5g/kg/dia ou enema por 3-5 dias. Manutenção → PEG 0,2-0,8g/kg/dia ou lactulose 1-3mL/kg + fibras + educação.',
        color: 'teal'
      }
    ]
  },
  {
    id: 'tea-tdah',
    titulo: 'TEA e TDAH',
    emoji: '🧠',
    subtitulo: 'Transtorno do Espectro Autista e Déficit de Atenção',
    categoria: 'Neurodesenvolvimento',
    referencia: 'DSM-5 (APA, 2013). CDC — Autism Data, 2020. SBP — Neurodesenvolvimento.',
    seções: [
      {
        nome: 'TEA — Transtorno do Espectro Autista',
        conteudo: 'Prevalência: ~1/36 crianças (CDC 2020). Caracterizado por díade: déficit na comunicação/interação social + padrões restritos e repetitivos de comportamento. Sinais clínicos: atraso de linguagem, déficit de reciprocidade socioemocional, estereotipias, hipersensibilidades, inflexibilidade cognitiva. Rastreio: M-CHAT-R/F (16-30 meses, pais preenchem); CARS (≥2 anos, profissional). Tratamento: ABA (Análise Comportamental Aplicada) com alta intensidade, TEACCH, terapia de fala/linguagem, terapia ocupacional. Farmacológico comorbidades: risperidona/aripiprazol (irritabilidade, FDA-aprovados), ISRS (ansiedade/TOC), psicoestimulantes (TDAH associado).',
        color: 'purple'
      },
      {
        nome: 'TDAH — Déficit de Atenção e Hiperatividade',
        conteudo: 'Transtorno do neurodesenvolvimento mais comum (3-5% no Brasil). Proporção 3 meninos:1 menina. Critérios DSM-5: ≥6 sintomas de desatenção e/ou hiperatividade/impulsividade, início antes dos 12 anos, presentes em ≥2 ambientes, com impacto funcional. Tratamento: 4-6 anos → treinamento parental + terapias não farmacológicas. ≥6 anos → psicoestimulantes (metilfenidato, lisdexanfetamina), atomoxetina, clonidina. Comorbidades frequentes: transtorno opositor (30-50%), dislexia (30%), ansiedade/depressão (25%).',
        color: 'blue'
      }
    ]
  },
  {
    id: 'bronquiolite-coqueluche',
    titulo: 'Bronquiolite e Coqueluche',
    emoji: '🫁',
    subtitulo: 'VSR, Bordetella pertussis e manejo respiratório',
    categoria: 'Respiratório',
    referencia: 'AAP Clinical Practice Guideline: Bronchiolitis, 2014. SBP — Bronquiolite e Coqueluche. MS — Informe Epidemiológico da Coqueluche, 2019.',
    seções: [
      {
        nome: 'Bronquiolite — Visão Geral',
        conteudo: 'Definição: infecção viral das vias aéreas inferiores causando 1º episódio de sibilância em <2 anos. Principal agente: VSR. Outros: rinovírus, parainfluenza, metapneumovírus humano. Diagnóstico: CLÍNICO. Pico de gravidade: 3º ao 5º dia. Saturação-alvo: 90-92%. Taquipneia por idade: <2 meses ≥60; 2-11 meses ≥50; 1-4 anos ≥40 ipm.',
        color: 'blue'
      },
      {
        nome: 'Bronquiolite — Tratamento e Profilaxia',
        conteudo: 'Suporte: hidratação, oxigênio (SpO2 90-92%), CNAF, CPAP, VNI se necessário, lavagem nasal. SEM evidência: corticoides, broncodilatadores de rotina, antibióticos, fisioterapia respiratória. Profilaxia — Palivizumabe (anticorpo monoclonal anti-VSR, 5 doses/sazonalidade): prematuros ≤28 sem até 1 ano, DPC/DCC com repercussão até <2 anos. Nirsevimabe (Beyfortus): para todos na 1ª temporada; até 24 meses com fatores de risco. Abrysvo (vacina materna): dose única IM entre 24-36 semanas de gestação.',
        color: 'green'
      },
      {
        nome: 'Coqueluche (Bordetella pertussis)',
        conteudo: 'Mais grave em <6 meses (maior risco de morte <1 mês). 3 fases: Catarral (1-2 sem — síndrome gripal), Paroxística (2-6 sem — tosse súbita e incontrolável com apneia, cianose, vômito e guincho inspiratório), Convalescença (2-6 sem — tosse mais branda). Hemograma: linfocitose intensa. RX: coração "felpudo". Tratamento: macrolídeo (azitromicina — escolha) nas primeiras 3 semanas. Quimioprofilaxia (azitromicina): contatos domiciliares, <1 ano, imunodeprimidos, asmáticos, gestantes no 3º trimestre, profissionais de creche/saúde. Vacinação: dTpa materna a partir de 20ª semana (a cada gestação); pentavalente 2, 4 e 6 meses; reforço DTP 15 meses e 4 anos.',
        color: 'amber'
      }
    ]
  },
  {
    id: 'covid',
    titulo: 'COVID-19 em Pediatria',
    emoji: '🦠',
    subtitulo: 'SARS-CoV-2, SIM-P e manejo pediátrico',
    categoria: 'Infectologia',
    referencia: 'OMS. SIM-P Guidelines, 2020. CDC. MIS-C criteria, 2023. SBP — COVID-19 na Pediatria. Ministério da Saúde — Guia de Manejo COVID-19.',
    seções: [
      {
        nome: 'Características Gerais',
        conteudo: 'Transmissão: gotículas respiratórias (aerossolização possível, inclusive por assintomáticos). Incubação: 3-6 dias (até 14 dias). Crianças geralmente apresentam quadro mais leve que adultos — maioria oligo ou assintomática. Maior mortalidade pediátrica em <1 ano e 10-19 anos. Diagnóstico: RT-PCR nasofaringe (3-7 dias — escolha); antígeno (5-7 dias); sorologia (>14 dias).',
        color: 'blue'
      },
      {
        nome: 'Classificação e Tratamento',
        conteudo: 'Assintomático/Leve: acompanhamento ambulatorial, sintomáticos. Moderado: avaliar internação, considerar Paxlovid ou Remdesivir em grupos de risco. Grave: internação + Remdesivir + corticoide (metilprednisolona 1mg/kg/dia ou dexametasona 0,15mg/kg/dia, 3-10 dias) + enoxaparina (avaliar risco). SIM-P (2-6 sem após infecção): Imunoglobulina 2g/kg (todos os critérios) + AAS + corticoide em moderados/graves.',
        color: 'red'
      },
      {
        nome: 'SIM-P (Síndrome Inflamatória Multissistêmica Pediátrica)',
        conteudo: 'Ocorre 2-6 semanas após infecção aguda. Critérios CDC: <21 anos, febre ≥38°C, evidência de inflamação (PCR ≥3mg/dL), envolvimento multissistêmico (≥2 categorias), evidência de infecção por SARS-CoV-2, sem diagnóstico alternativo. Diferença de Kawasaki: SIM-P tem D-dímero elevado, trombocitopenia, disfunção miocárdica mais comum (80%), acometimento GI em 92%, faixa etária >5 anos. Notificação compulsória obrigatória.',
        color: 'amber'
      }
    ]
  },
  {
    id: 'crescimento-baixa-estatura',
    titulo: 'Crescimento e Baixa Estatura',
    emoji: '📏',
    subtitulo: 'Parâmetros de crescimento, velocidade e investigação',
    categoria: 'Endocrinologia',
    referencia: 'OMS. Child Growth Standards, 2025. SBP — Baixa Estatura. Greulich & Pyle Atlas de Maturação Óssea.',
    seções: [
      {
        nome: 'Marcos de Crescimento',
        conteudo: 'Peso ao nascer: perde 5-10% (retorna em 10-14 dias). Ganho: 700g/mês (1º tri), 600g (2º), 500g (3º), 400g (4º). Dobra o peso com 4 meses e triplica com 1 ano. 2kg/ano entre 2 anos e puberdade. Estatura: nasce 50cm; +25cm no 1º ano; +12cm 1-2 anos; +7-8cm 2-4 anos; +6cm/ano 4-6 anos; +5-7cm/ano até puberdade. Estirão puberal: meninas M3 (8-10cm/ano); meninos G4 (10-14cm/ano). Velocidade mínima: 5cm/ano. Perímetro cefálico: ~35cm ao nascer; +2cm/mês no 1º trimestre; +1cm/mês no 2º; +0,5cm/mês no 2º semestre. Com 2 anos: 85% do PC do adulto.',
        color: 'blue'
      },
      {
        nome: 'Definição e Investigação de Baixa Estatura',
        conteudo: 'Baixa estatura: Z-escore <-2 para sexo/idade OU estatura <-2DP do alvo familiar. Estatura alvo (EA): menina = média dos pais − 6,5cm; menino = média dos pais + 6,5cm (±8,5cm). Velocidade de crescimento normal + EA baixa + IO normal → Baixa estatura familiar (variante normal). VC normal + EA normal + IO atrasada → Atraso constitucional (variante normal). VC BAIXA → causas patológicas: sistêmicas (celíaca, DRC), genéticas (Turner), endócrinas (deficiência de GH, hipotireoidismo). Investigar VC baixa com: hemograma, PCR, anti-transglutaminase + IgA, U, Cr, eletrólitos, TSH, T4L, IGF-1, IGFBP-3, cariótipo (meninas). Obesidade + baixa estatura = causas endócrinas!',
        color: 'amber'
      }
    ]
  },
  {
    id: 'desenvolvimento-infantil',
    titulo: 'Desenvolvimento Infantil',
    emoji: '👶',
    subtitulo: 'Marcos do DNPM, reflexos primitivos e linguagem',
    categoria: 'Neurologia',
    referencia: 'Caderneta de Saúde da Criança, Ministério da Saúde, 2022. Denver II. SBP — Desenvolvimento Neuropsicomotor.',
    seções: [
      {
        nome: 'Marcos do Desenvolvimento por Faixa Etária',
        conteudo: 'Áreas: Social (S), Adaptativo (A), Linguagem (L), Motor (M). RN: observa rosto, eleva cabeça em DV, reage ao som, reflexos primitivos. 1M: sorri, abre mãos, vocaliza, movimenta membros. 2-3M: responde ao contato social, segura objetos, ri alto, levanta cabeça apoiando-se nos antebraços. 4-5M: busca ativa de objetos, leva à boca, localiza o som, ROLA. 6-8M: esconde-achou, transfere objetos, duplica sílabas, SENTA sem apoio. 9-11M: imita gestos, pinça, jargão, ANDA com apoio. 12-14M: mostra o que quer, bloco na caneca, fala 1 palavra, ANDA sem apoio. 15-17M: usa colher, torre de 2 cubos, 3 palavras, anda para trás. 18-23M: tira roupa, 3 cubos, aponta 2 figuras, chuta bola. 24-29M: veste com supervisão, 6 cubos, frases de 2 palavras, pula com 2 pés. 30-36M: brinca com outras crianças, imita linha, reconhece ações, arremessa bola.',
        color: 'blue'
      },
      {
        nome: 'Reflexos Primitivos e Interpretação',
        conteudo: 'Desaparecem com maturação: marcha reflexa (1-2m), procura (3-4m), tônico cervical (3-4m), preensão palmar (4-6m), Moro (4-6m), cutâneo-plantar em extensão (máx 15-18m). Provável atraso: ausência de marco da faixa ANTERIOR, PC alterado ou alterações fenotípicas → encaminhar para avaliação multidisciplinar. Alerta para desenvolvimento: ausência de marco da faixa ATUAL ou fator de risco → estimulação e retorno em 30 dias. Prematuros: avaliar por IDADE CORRIGIDA até 2 anos.',
        color: 'green'
      },
      {
        nome: 'Linguagem e Estimulação',
        conteudo: 'Desenvolvimento da linguagem: 0-3m choro; 2-3m sorriso social; 6-9m balbucios; 9-12m jargão; ~12m primeiras palavras; 18m ~50 palavras; 24m frases de 2 palavras, ~200 palavras; 3 anos fala compreensível; 4-5 anos frases completas. Prejudicam o desenvolvimento: telas (<2 anos: zero telas), chupeta, estresse tóxico, falta de estímulo. Estimular com: colo, brincar, leitura compartilhada, conversar (mamanhês), cantar, contar histórias.',
        color: 'purple'
      }
    ]
  },
  {
    id: 'desnutricao-vitaminas',
    titulo: 'Desnutrição e Vitaminas',
    emoji: '🩺',
    subtitulo: 'Classificação, síndromes e deficiências vitamínicas',
    categoria: 'Nutrição',
    referencia: 'OMS — Gestão da Desnutrição Aguda Grave, 2013. SBP — Hipovitaminose D em Pediatria. CDC — Global Nutrition Guidelines.',
    seções: [
      {
        nome: 'Classificação da Desnutrição',
        conteudo: 'Gomez (≤2 anos): peso/p50 → eutrófico 91-110%; leve 76-90%; moderada 61-75%; grave ≤61% ou com edema. Waterlow (2-10 anos): E/I (estatura/p50 para idade) + P/E (peso/p50 para estatura): eutrófico E/I≥95%+P/E≥90%, desnutrido agudo E/I≥95%+P/E<90%, desnutrido crônico E/I<95%+P/E<90%, desnutrido pregresso E/I<95%+P/E≥90%. Marasmo: baixa ingestão energético-proteica, sem edema, criança "esquelética". Kwashiorkor: baixa ingestão proteica com calorias preservadas, edema periférico, apatia, hepatomegalia.',
        color: 'red'
      },
      {
        nome: 'Manejo da Desnutrição Grave',
        conteudo: '10 passos: (1) tratar hipoglicemia, (2) tratar hipotermia, (3) reidratar, (4) corrigir eletrólitos (K, Mg, P), (5) ATB empírico, (6) corrigir micronutrientes, (7) realimentação cautelosa, (8) catch-up hipercalórico, (9) estímulo ao DNPM, (10) seguimento ambulatorial. NÃO prescrever ferro na fase de estabilização (aumenta estresse oxidativo). Síndrome de realimentação: hipofosfatemia (principal marcador), hipomagnesemia, hipocalemia, rabdomiólise, arritmias.',
        color: 'amber'
      },
      {
        nome: 'Vitaminas Essenciais',
        conteudo: 'B1/Tiamina: beribéri, Wernicke. B2: queilite, glossite. B3/Niacina: pelagra (dermatite, diarreia, demência). B6: convulsões em neonatos. B9/Folato: defeito do tubo neural, anemia megaloblástica. B12: anemia megaloblástica + desmielinização medular (em vegetarianos). Vitamina C: escorbuto (fragilidade vascular, pseudoparalisia). Vitamina A: deficiência → alterações oculares progressivas (cegueira noturna→manchas de Bitot→destruição do globo); suplementação nas regiões de risco. Vitamina D: 400 UI/dia (<1 ano); 600 UI/dia (1-18 anos); deficiência → raquitismo; intoxicação → hipercalcemia/nefrolitíase. Vitamina K: 1mg IM ao nascer para prevenir doença hemorrágica do RN.',
        color: 'blue'
      }
    ]
  },
  {
    id: 'diarreia-aguda',
    titulo: 'Diarreia Aguda',
    emoji: '💧',
    subtitulo: 'Avaliação da hidratação, planos terapêuticos e antibióticos',
    categoria: 'Gastroenterologia',
    referencia: 'Ministério da Saúde e SBP — Doença Diarreica Aguda, 2023. OMS — Plano de Reidratação Oral.',
    seções: [
      {
        nome: 'Avaliação do Estado de Hidratação',
        conteudo: 'Sem desidratação (Plano A): alerta, olhos normais, lágrimas presentes, boca úmida, prega desaparece rápido, pulso cheio. Com desidratação (Plano B): irritado, olhos fundos, sem lágrimas, sede intensa, prega lenta, perda até 10% do peso. Desidratação grave (Plano C): letárgico/comatoso, olhos muito fundos, não consegue beber, prega muito lenta, pulso fraco/ausente, perda >10% do peso. Disenteria = sangue nas fezes (lesão mucosa).',
        color: 'blue'
      },
      {
        nome: 'Planos de Tratamento',
        conteudo: 'Plano A: SRO + líquidos domiciliar + alimentação habitual + zinco ≤5 anos (10mg/dia <6m; 20mg/dia >6m). Plano B: SRO 50-100mL/kg VO em 4-6h, ondansetrona se vômitos → reavalia (melhora→A; igual→gavagem; piora→C). Plano C: 1ª expansão SF ou RL 30mL/kg (1h se <1 ano; 30min se ≥1 ano) + 2ª expansão 70mL/kg (5h/<1 ano; 2h30min/≥1 ano) + manutenção Holliday. Antibiótico (exceção): disenteria com comprometimento sistêmico/febre alta → azitromicina (≤10 anos/≤30kg) ou ciprofloxacino (>10 anos). Etiologia: viral (rotavírus, norovírus, adenovírus), bacteriana (E.coli, Salmonella, Campylobacter, Shigella), parasitária (Giardia, Entamoeba).',
        color: 'teal'
      }
    ]
  },
  {
    id: 'diarreia-cronica',
    titulo: 'Diarreia Crônica e Doenças Funcionais',
    emoji: '🔄',
    subtitulo: 'Celíaca, DII, intolerância à lactose e distúrbios funcionais',
    categoria: 'Gastroenterologia',
    referencia: 'SBP — Doença Celíaca, 2022. ESPGHAN — Doença Inflamatória Intestinal em Crianças. Critérios de Roma IV.',
    seções: [
      {
        nome: 'Doença Celíaca e Intolerância à Lactose',
        conteudo: 'Doença Celíaca: diagnóstico inicial com anti-transglutaminase IgA + IgA total; padrão-ouro: biópsia duodenal (infiltrado linfocitário intraepitelial >25 por 100 enterócitos). Tratamento: exclusão definitiva do glúten. Intolerância à lactose: diarreia líquida, explosiva, ácida, borborigmos, flatulência, dermatite perineal. Diagnóstico clínico. Tratamento: redução da lactose, repositores de lactase, repor cálcio e vitamina D.',
        color: 'amber'
      },
      {
        nome: 'Doença Inflamatória Intestinal',
        conteudo: 'Crohn: acomete todo o TGI, saltatório e transmural, granuloma não caseoso; massa em QID, dor, parada de crescimento, fístulas/abscessos. Retocolite Ulcerativa: reto ± colo, contínua e ascendente, mucosa e submucosa; sangramento retal, tenesmo, urgência; complicações: megacólon tóxico. Crohn — indução: nutrição enteral exclusiva → corticoide → anti-TNF. RCU — indução: 5-ASA → corticoide → anti-TNF.',
        color: 'red'
      },
      {
        nome: 'Distúrbios Funcionais',
        conteudo: 'Diarreia funcional: 6 meses-5 anos, ≥4 semanas, ≥4x/dia, evacuações indolores de fezes malformadas. SII: dor abdominal ≥4 dias/mês por ≥2 meses relacionada à evacuação, não resolve com tratamento de constipação. Disquesia do lactente: <9 meses, ≥10 min de esforço antes de evacuar. Cólica do lactente: <5 meses, períodos prolongados e recorrentes de choro/irritabilidade sem causa evidente.',
        color: 'teal'
      }
    ]
  },
  {
    id: 'drc-lra',
    titulo: 'Doença Renal Crônica e Lesão Renal Aguda',
    emoji: '🫘',
    subtitulo: 'Critérios pRIFLE, KDIGO e manejo em pediatria',
    categoria: 'Nefrologia',
    referencia: 'KDIGO — AKI Guidelines, 2012. pRIFLE Pediatric. SBP — Nefropediatria.',
    seções: [
      {
        nome: 'Lesão Renal Aguda (LRA)',
        conteudo: 'Deterioração súbita e potencialmente reversível da função renal. Critérios KDIGO: aumento de creatinina ≥0,3mg/dL em 48h OU aumento ≥1,5x em 7 dias OU diurese ≤0,5mL/kg/h por ≥6h. Classificação pRIFLE (pediátrica): Risco (↓eTFG 25%, diurese <0,5mL/kg/h por 8h), Injúria (↓50%, 16h), Falência (↓75% ou TFG<35, 24h ou anúria 12h), Perda (>4 semanas), Terminal (>3 meses). Etiologias: pré-renal (hipoperfusão), renal/intrínseca (hipoperfusão prolongada, nefrotoxicidade, sepse, glomerulopatias), pós-renal (obstrução anatômica). Urgência dialítica: sobrecarga volêmica, hipercalemia e acidose refratárias, uremia, intoxicação.',
        color: 'blue'
      },
      {
        nome: 'Doença Renal Crônica (DRC)',
        conteudo: 'Dano renal estrutural ou funcional por ≥3 meses. Classificada por eTFG (equação de Schwartz) e albuminúria. Etiologias: <5 anos → malformações congênitas do trato urinário (CAKUT); >12 anos → glomerulopatias. Clínica: alterações cardiovasculares, anemia (eritropoetina reduzida), distúrbios osteometabólicos, anorexia, retardo do crescimento. Tratamento conservador (estágios 2-4); terapia de substituição renal; transplante (ideal: preemptivo).',
        color: 'amber'
      }
    ]
  },
  {
    id: 'fssl',
    titulo: 'Febre sem Sinais Localizatórios',
    emoji: '🌡️',
    subtitulo: 'Estratificação de risco e conduta por faixa etária',
    categoria: 'Infectologia',
    referencia: 'SBP — Febre sem Sinais Localizatórios, 2025. Rochester Criteria. AAP Guidelines.',
    seções: [
      {
        nome: 'Definição e Abordagem Geral',
        conteudo: 'FSSL: febre <7 dias sem causa após anamnese e exame físico. Febre: temperatura axilar ≥37,8°C (ou ≥37,5°C — novo documento SBP). FOI: febre por >1 semana ambulatorial ou >3 dias intra-hospitalar intensiva. Principal causa bacteriana: ITU. Desafio: discriminar infecção bacteriana grave de doença viral benigna. Estratificação por faixa etária em pacientes estáveis.',
        color: 'blue'
      },
      {
        nome: 'Conduta por Faixa Etária',
        conteudo: '<1 mês: TOLERÂNCIA ZERO — hospitalização + hemograma + hemocultura + urina + urocultura + líquor + RX tórax + pesquisa viral + ATB empírico. 1-3 meses: PVR + hemograma + urina; classificação de Rochester (Baixo risco: leucócitos 5-15.000/mm³, neutrófilos jovens ≤1.500, urina ≤10 leucócitos/campo → acompanhar; Alto risco → internar + ATB). 3-36 meses vacinado: PVR ± EAS/urocultura conforme sexo e idade. Não vacinado: TAX <39°C → reavaliar; TAX >39°C → depende do EAS (alterado=tratar ITU; normal → hemograma com leucócitos >20k ou neutrófilos >10k → investigar). Manejo da febre: tratar apenas se toxemia, queda do estado geral ou doença de base. Não associar nem intercalar antipiréticos.',
        color: 'red'
      }
    ]
  },
  {
    id: 'hepatologia-emergencia',
    titulo: 'Hepatologia na Emergência',
    emoji: '🫁',
    subtitulo: 'Cirrose, insuficiência hepática aguda e hemorragia digestiva',
    categoria: 'Gastroenterologia',
    referencia: 'EASL — Clinical Practice Guidelines on Liver Cirrhosis. SBP — Hepatologia Pediátrica.',
    seções: [
      {
        nome: 'Peritonite Bacteriana Espontânea e Síndrome Hepatorrenal',
        conteudo: 'PBE: paracentese para todo cirrótico com ascite admitido ou grau ≥2. Diagnóstico: ≥250 PMN/mm³ com ou sem cultura positiva. Agentes: E.coli, Klebsiella, Streptococcus, Staphylococcus. Tratamento: cefalosporina 3ª geração ou pip-tazo por 5 dias + albumina + suspender diuréticos e beta-bloqueadores. Síndrome Hepatorrenal: ascite + oligúria + creatinina crescente + excreção de sódio reduzida → vasoconstritores (terlipressina, octreotide, noradrenalina) + albumina + transplante hepático.',
        color: 'amber'
      },
      {
        nome: 'Hemorragia Digestiva Alta e Insuficiência Hepática Aguda',
        conteudo: 'HDA: estabilizar (via aérea, expansão, transfusão) → octreotide 1mg/kg/h + vitamina K + cefalosporina 3ª + endoscopia em 24h (emergência se instabilidade). IHA: sem evidências de doença crônica + lesão hepatocelular (AST/ALT/GGT>100 ou bilirrubinas elevadas) + coagulopatia não corrigida (INR≥2 OU ≥1,5 com encefalopatia). Tratar em centro com transplante. Cirrose: causas em crianças — atresia biliar (mais comum), hepatites virais B e C, alfa-1-antitripsina, galactosemia, doença de Wilson (gene ATP7B, cobre urinário 24h elevado, ceruloplasmina baixa, anéis de Kayser-Fleischer).',
        color: 'red'
      }
    ]
  },
  {
    id: 'ivas',
    titulo: 'Infecções de Vias Aéreas Superiores (IVAS)',
    emoji: '👃',
    subtitulo: 'Resfriado, gripe, crupe, OMA, sinusite e amigdalite',
    categoria: 'Respiratório',
    referencia: 'SBP — IVAS em Pediatria. AAP — Otite Média Aguda. Protocolo Albert Einstein — Crupe.',
    seções: [
      {
        nome: 'Resfriado, Gripe e SRAG',
        conteudo: 'Resfriado: rinovírus (50%), cura em 10-14 dias, sintomáticos. Síndrome gripal: influenza + comprometimento sistêmico (mialgia, cefaleia, artralgia, fadiga). SRAG: síndrome gripal + critérios de gravidade → oseltamivir para grupos de risco ou SRAG. Crupe viral (laringotraqueobronquite): parainfluenza; rouquidão, tosse ladrante, estridor. Tratamento: dexametasona VO/IM (todos); adrenalina inalatória nos casos moderados a graves.',
        color: 'blue'
      },
      {
        nome: 'OMA, Sinusite e Amigdalite Bacteriana',
        conteudo: 'OMA: efusão + inflamação na orelha média. Agentes: pneumococo, H. influenzae. Tratamento com amoxicilina: <6 meses, otorreia, OMA bilateral <24 meses, sintomas graves (otalgia >48h, T>39°C, toxemia, incerteza de reavaliação). Sinusite bacteriana (diagnóstico clínico): dupla piora após 5º dia OU >10 dias sem melhora OU rinorreia purulenta + febre. Tratamento: amoxicilina. Amigdalite bacteriana (SBGA): padrão-ouro = cultura de orofaringe; teste rápido auxilia. Tratamento: amoxicilina 10 dias. Centor/McIsaac orienta probabilidade (ver calculadora).',
        color: 'amber'
      }
    ]
  },
  {
    id: 'nefro-misce',
    titulo: 'Miscelânea em Nefropediatria',
    emoji: '🚽',
    subtitulo: 'Hidronefrose, refluxo vesicoureteral e enurese',
    categoria: 'Nefrologia',
    referencia: 'SBP — Uropatias Obstrutivas. Sociedade de Urologia Fetal (SFU). NICE — Enurese Noturna.',
    seções: [
      {
        nome: 'Hidronefrose e RVU',
        conteudo: 'Hidronefrose fetal: DPR >4mm (18-22 sem) ou >7-10mm (3º trimestre). Etiologia mais comum: transitória (41-88%). CAKUT: obstrução de junção ureteropiélica (mais comum) → refluxo vesicoureteral (2º mais comum). RVU: suspeitar em hidronefrose pré-natal ou ITU febril. Diagnóstico e classificação: uretrocistografia miccional (UCM). Tratamento: antibioticoprofilaxia guiada pela classificação (gradação I-V).',
        color: 'blue'
      },
      {
        nome: 'Enurese Noturna',
        conteudo: 'Perda involuntária de urina durante o sono em crianças ≥5 anos. Histórico familiar positivo. Primária x Secundária; Monossintomática x Não-monossintomática. Avaliação: anamnese + exame físico + diário de eliminações + urina. Manejo inicial: tratar comorbidades (constipação!), educar paciente e família. Terapia adicional: alarme de enurese ou desmopressina. Se refratário: referenciar ao especialista.',
        color: 'amber'
      }
    ]
  },
  {
    id: 'morte-encefalica',
    titulo: 'Morte Encefálica',
    emoji: '🧠',
    subtitulo: 'Diagnóstico, critérios e testes confirmatórios',
    categoria: 'Neurologia',
    referencia: 'CFM — Resolução 2.173/2017. Protocolo Morte Encefálica Brasil.',
    seções: [
      {
        nome: 'Diagnóstico de Morte Encefálica',
        conteudo: 'Pré-requisito: lesão encefálica de causa conhecida e irreversível + excluir fatores confundidores (hipotermia <35°C, hipotensão, hipoglicemia, intoxicações, medicações neurodepressoras, distúrbios eletrolíticos). Observação mínima: 6h (24h se encefalopatia hipóxico-isquêmica). 2 testes clínicos (reflexos fotomotor, corneano, oculomotor, vestíbulo-calórico, tosse/carina) + 1 teste de apneia + 1 exame confirmatório (ausência de fluxo, atividade elétrica ou metabólica). Atestado de óbito: momento da conclusão de todos os testes.',
        color: 'blue'
      },
      {
        nome: 'Intervalo Entre Testes por Faixa Etária',
        conteudo: '7 dias - 2 meses de vida: 24h entre testes clínicos. 2 meses - 2 anos: 12h. Acima de 2 anos: 1h. Parâmetros mínimos: temperatura >35°C, Sat >94%, PAS >60mmHg (<5m), >80mmHg (5m-2 anos), >85mmHg (2-7 anos), >90mmHg (≥7 anos).',
        color: 'amber'
      }
    ]
  },
  {
    id: 'nefrologia-pediatrica',
    titulo: 'Síndrome Nefrítica, Nefrótica e SHU',
    emoji: '🫘',
    subtitulo: 'GNPE, síndrome nefrótica e síndrome hemolítico-urêmica',
    categoria: 'Nefrologia',
    referencia: 'SBP — Nefrologia Pediátrica. KDIGO — Glomerulonephritis Guidelines. ISKDC — Nephrotic Syndrome.',
    seções: [
      {
        nome: 'Síndrome Nefrítica (GNPE)',
        conteudo: 'Causa mais comum na infância: GNDA pós-estreptocócica. Clínica: oligúria + edema + hipertensão + hematúria glomerular (dismorfismo, cilindros hemáticos) + ↓C3. Ocorre semanas após amigdalite ou impetigo por SBGA. Tratamento: repouso, restrição hídrica e salina, penicilina, furosemida. Biopsia se: LRA, macro-hematúria ou HAS >4 sem, C3 reduzido >8 sem, glomerulonefrite rapidamente progressiva.',
        color: 'red'
      },
      {
        nome: 'Síndrome Nefrótica',
        conteudo: 'Proteinúria nefrótica + edema + hipoalbuminemia + dislipidemia. Complicação grave: infecção (perda de imunoglobulinas) — peritonite por pneumococo. Tratamento: restrição salina + corticoide. Albumina EV: hemoconcentração/choque, edema genital, oligúria. Biopsia: <1 ano, >10 anos, hematúria macro/micro persistente, HAS, disfunção renal, redução de complemento, doença extrarrenal, corticorresistência.',
        color: 'blue'
      },
      {
        nome: 'Síndrome Hemolítico-Urêmica (SHU)',
        conteudo: 'Tríade: anemia hemolítica microangiopática + plaquetopenia + LRA. Associada a disenteria prévia (STEC-SHU — maioria). Tratamento: suporte — transfusão de hemácias e plaquetas, controle volêmico, DHE e distúrbios ácido-base, terapia substitutiva renal se necessário. Se agente pneumococo: antibiótico. Plaquetas (EVITAR se STEC-SHU).',
        color: 'amber'
      }
    ]
  },
  {
    id: 'obesidade',
    titulo: 'Obesidade e Síndrome Metabólica',
    emoji: '⚖️',
    subtitulo: 'Classificação, etiologias e dislipidemia',
    categoria: 'Endocrinologia',
    referencia: 'OMS — Child Growth Standards. SBP — Obesidade Infantil. SBP — Dislipidemia em Pediatria.',
    seções: [
      {
        nome: 'Classificação e Etiologia',
        conteudo: 'Classificação por IMC/idade (OMS, >5 anos): sobrepeso Z +1 a +2 (p85-97), obesidade Z +2 a +3 (p97-99,9), obesidade grave Z>+3 (p>99,9). <5 anos: peso/estatura. Etiologia exógena (95%): multifatorial, história familiar, início >5 anos, IO normal ou avançada, estatura normal-alta. Etiologia endógena (5%): Prader-Willi, Cushing, deficiência de GH, hipotireoidismo. Sinais de alerta para causas endócrinas: início <5 anos, sem histórico familiar, comprometimento cognitivo, IO atrasada, dismorfismos, baixa estatura. Obesidade + baixa estatura = causas endócrinas!',
        color: 'amber'
      },
      {
        nome: 'Dislipidemia e Tratamento',
        conteudo: 'Rastreio universal: 9-11 anos e 17-21 anos. Entre 2-8 anos e 12-16 anos: apenas com fatores de risco. Tratamento: mudança de estilo de vida (MEV) para todos. Medicamentoso (estatina) após 6 meses de MEV sem sucesso: LDL >190mg/dL, >160 com fatores de risco, >130 com DM. Tratamento da obesidade: MEV primeiro. Medicamentoso se ≥6 meses de MEV sem sucesso: liraglutida (>12 anos).',
        color: 'blue'
      }
    ]
  },
  {
    id: 'politrauma-afogamento',
    titulo: 'Politrauma e Afogamento',
    emoji: '🏥',
    subtitulo: 'ATLS pediátrico, lesões e manejo do afogamento',
    categoria: 'Emergência',
    referencia: 'ATLS — Advanced Trauma Life Support, 10ª ed. Szpilman D — Classificação do Afogamento. SBP — Emergências Pediátricas.',
    seções: [
      {
        nome: 'Politrauma — Atendimento Inicial',
        conteudo: '1ª causa de óbito e sequelas em pediatria. ATLS: A (vias aéreas + coluna cervical) → B (respiração + oximetria) → C (hemodinâmica + contenção sangramento + eFAST) → D (Glasgow, pupilas, reflexos, dextro) → E (exposição total + retirar prancha). Principais lesões torácicas: contusão pulmonar, pneumotórax hipertensivo/aberto, hemotórax maciço, tamponamento cardíaco. Choque hemorrágico: expansão cristaloide se normotenso; concentrado de hemácias se hipotenso. Protocolo de transfusão maciça após 60mL/kg. Tríade letal: hipotermia + coagulopatia + acidose. Trauma abdominal fechado: FAST (+) estável → TC; instável → CC. FAST (−) → buscar outros focos.',
        color: 'red'
      },
      {
        nome: 'Afogamento',
        conteudo: 'Sequência: proteger socorrista → reconhecer → flutuação → retirar da água → RCP precoce (5 ventilações de resgate antes do ABC) → aquecer se Temp >32-34°C se pulsos presentes. Classificação de Szpilman: Resgate (sem sinais) → I (espuma) → II (pulmão alterado) → III (muita espuma) → IV (coma) → V (parada respiratória) → VI (PCR). Aquecer ativamente se T <32°C antes de confirmar óbito.',
        color: 'blue'
      }
    ]
  },
  {
    id: 'puberdade',
    titulo: 'Puberdade',
    emoji: '🌱',
    subtitulo: 'Estadiamento de Tanner, puberdade precoce e atrasada',
    categoria: 'Endocrinologia',
    referencia: 'SBP — Puberdade Normal e Distúrbios Puberais. Marshall & Tanner (1969/1970) — Estadiamento Puberal.',
    seções: [
      {
        nome: 'Puberdade Normal e Estadiamento',
        conteudo: 'Meninas: ativam eixo 8-13 anos, início com telarca (M2). Meninos: 9-14 anos, início com aumento testicular ≥4mL (G2). Estadiamento de Tanner: Mama (M1-M5) — M1 impúbere, M2 broto mamário, M3 tecido ao redor da aréola, M4 duplo contorno, M5 adulta. Genital (G1-G5) — G1 infantil, G2 testículo >4mL, G3 pênis em comprimento, G4 espessura, G5 adulto. Estirão: meninas M3 (8-10cm/ano); meninos G4 (10-14cm/ano).',
        color: 'purple'
      },
      {
        nome: 'Puberdade Precoce e Atrasada',
        conteudo: 'Puberdade precoce: antes de 8 anos (meninas) ou 9 anos (meninos). Central (gonadotrofina-dependente): eixo hipotálamo-hipófise ativado precocemente. Tratamento: análogo de GnRH (aGnRH). Periférica (gonadotrofina-independente): fonte de hormônios sexuais independente do eixo. Investigar gônadas, adrenal ou fonte exógena. Puberdade atrasada/Hipogonadismo: Hipergonadotrófico (gônada falhou) ou Hipogonadotrófico (eixo falhou). Atraso constitucional (benigno): VC normal + EA normal + IO atrasada + história familiar. Tratamento: reposição hormonal.',
        color: 'blue'
      }
    ]
  },
  {
    id: 'queimaduras',
    titulo: 'Queimaduras',
    emoji: '🔥',
    subtitulo: 'Classificação, extensão e manejo inicial',
    categoria: 'Emergência',
    referencia: 'SBP — Queimaduras em Pediatria. American Burn Association. Parkland Formula.',
    seções: [
      {
        nome: 'Classificação e Avaliação',
        conteudo: 'Fontes: calor (fogo, escalda, objetos quentes), química, elétrica (lesão interna grave), radiação. Classificação por extensão: leves (<2% profunda), potencial risco (>10%), grande queimado (>20%), graves (>30%). Avaliação da superfície: Lund-Browder (mais precisa), regra dos 9, palma da mão (~1% da SCQ). Indicações de IOT: queimadura de vias aéreas (face queimada, pelos nasais chamuscados, fuligem nas VA), alterações de ausculta (estridor, broncoespasmo), superfície >15%, necessidade de cirurgias frequentes, rebaixamento de consciência. Indicações UTI: grande queimado, queimadura de VA, politrauma, queimadura elétrica (rabdomiólise), química extensa.',
        color: 'red'
      },
      {
        nome: 'Manejo Inicial',
        conteudo: 'Remover roupas e objetos. Avaliar superfície queimada. Analgesia. Reposição volêmica se queimadura 2º e 3º grau >15% da SC: Fórmula de Parkland = 4mL/kg/% (50% em 8h + 50% em 16h). Curativo conforme tipo. UTI: suporte nutricional (glutamina), sedação e analgesia, ATB se indicado (vigiar infecção fúngica).',
        color: 'amber'
      }
    ]
  },
  {
    id: 'tce-hic',
    titulo: 'TCE e Hipertensão Intracraniana',
    emoji: '💥',
    subtitulo: 'Escala de Glasgow, lesões e manejo da PIC',
    categoria: 'Neurologia',
    referencia: 'SBP — TCE em Pediatria. Brain Trauma Foundation Guidelines. ATLS 10ª ed.',
    seções: [
      {
        nome: 'TCE — Classificação e Avaliação',
        conteudo: 'Classificação pela Escala de Coma de Glasgow: leve 14-15, moderado 9-13, grave <9. Atendimento: ABCDE + D (pupilas, GCS, reflexos, toque retal). TC de crânio: hemorragia epidural/subdural/subaracnoidea/intraparenquimatosa, contusão, lesão axonal difusa, edema, desvio de linha média, fraturas, hematoma subgaleal, sinais de herniação (subfalcina — acima; uncal — abaixo). Lesão primária: irreversível. Lesão secundária: potencialmente reversível — monitorar e intervir agressivamente (FC, PA, SatO2, EtCO2, temperatura, EEG, PIC, DTC).',
        color: 'red'
      },
      {
        nome: 'Hipertensão Intracraniana',
        conteudo: 'PPC = PAM – PIC. Normal: PIC <20mmHg. Sinais de HIC: rebaixamento de consciência (1º sinal), abaulamento de fontanela, cefaleia e vômitos, alterações visuais (III par), tríade de Cushing (hipertensão + bradicardia + alteração respiratória). Tratamento: tratar a causa, decúbito elevado 30°, cabeça em posição neutra, sedação e analgesia, tratar convulsões (fenitoína), corrigir hipoglicemia e hiponatremia, manter PAM >60, PCO2 35-40, normotermia, osmolares (salina hipertônica ou manitol), hiperventilação transitória, craniectomia descompressiva. Corticoide: tumor ou infecção. Nimodipino: HSA (vasospasmo).',
        color: 'blue'
      }
    ]
  },
  {
    id: 'violencia-crianca',
    titulo: 'Violência Contra a Criança e o Adolescente',
    emoji: '🛡️',
    subtitulo: 'Maus-tratos, shaken baby e síndrome de Munchausen',
    categoria: 'Social',
    referencia: 'SBP — Maus-Tratos na Infância. ECA — Lei 8.069/90. SINAN — Sistema de Informação de Agravos de Notificação.',
    seções: [
      {
        nome: 'Sinais Físicos e Síndromes Específicas',
        conteudo: 'Fraturas sugestivas de violência: metafisárias por arrancamento (alça de balde/canto), diafisárias em espiral, costelas em <2 anos (especialmente posteriores), crânio com diástase de sutura, múltiplas ou bilaterais. Shaken Baby Syndrome: tríade encefalopatia + hematoma subdural + hemorragia de retina. Síndrome de Munchausen por Procuração: doenças variadas e recidivantes que não respondem ao tratamento, não correspondem com os exames, o responsável solicita sempre mais exames/procedimentos e usa linguagem médica.',
        color: 'red'
      },
      {
        nome: 'Conduta e Notificação',
        conteudo: 'Acolhimento interdisciplinar. Exame físico completo com registro e documentação de lesões. Exames: guiados pelas queixas; investigação radiológica completa do esqueleto em lactentes; TC de crânio e fundo de olho (suspeita de shaken baby). Hospitalização: conforme gravidade ou ausência de recursos para proteção. NOTIFICAÇÃO COMPULSÓRIA à suspeita — Conselho Tutelar (ou MP) e SINAN.',
        color: 'amber'
      }
    ]
  },
  {
    id: 'violencia-sexual',
    titulo: 'Violência Sexual',
    emoji: '⚖️',
    subtitulo: 'Atendimento de emergência, profilaxias e contracepção',
    categoria: 'Social',
    referencia: 'MS — Atenção Humanizada à Mulher em Situação de Violência Sexual. SBP — Violência Sexual em Crianças e Adolescentes. Protocolo ISTs — MS, 2022.',
    seções: [
      {
        nome: 'Atendimento de Emergência',
        conteudo: 'O atendimento é uma EMERGÊNCIA — realizar em até 72h da agressão. Etapas: acolhimento → notificação compulsória → anamnese + exame físico + coleta de vestígios → exames complementares → profilaxias → contracepção de emergência → seguimento. Exames: sorologias (HIV, hepatites, sífilis), β-HCG (meninas em idade fértil); hemograma, função renal/hepática; conteúdo vaginal (Clamídia, Gonococo, Trichomonas).',
        color: 'red'
      },
      {
        nome: 'Profilaxias e Contracepção de Emergência',
        conteudo: 'Tétano: vacinar conforme histórico vacinal + situação da ferida. ISTs não virais: penicilina benzatina (sífilis — 50.000 UI/kg IM dose única), ceftriaxona (gonorreia — 125mg IM), azitromicina (clamídia — 20mg/kg VO), metronidazol (tricomoníase — 15mg/kg/dia ÷3x por 7 dias). Hepatite B: vacina + IGHAHB (idealmente em 48h, até 14 dias). HPV: vacina se esquema incompleto. HIV (até 72h): TDF/3TC + Dolutegravir por 28 dias. Contracepção de emergência (até 72h idealmente): levonorgestrel 1,5mg VO dose única (1ª escolha) — para meninas na menacme.',
        color: 'amber'
      }
    ]
  }
];