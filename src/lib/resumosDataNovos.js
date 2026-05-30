// Novos resumos adaptados para a estrutura do app
export const RESUMOS_NOVOS = [
  {
    id: 'covid',
    titulo: 'COVID-19 em Pediatria',
    emoji: '🦠',
    subtitulo: 'SARS-CoV-2, SIM-P e manejo pediátrico',
    categoria: 'Infectologia',
    referencia: 'OMS. SIM-P Guidelines, 2020. CDC. MIS-C criteria, 2023. SBP — COVID-19 na Pediatria.',
    seções: [
      {
        nome: 'Características Gerais',
        conteudo: 'Transmissão: gotículas respiratórias (aerossolização possível, inclusive por assintomáticos). Incubação: 3-6 dias (até 14 dias). Crianças geralmente apresentam quadro mais leve que adultos — maioria oligo ou assintomática. Maior mortalidade pediátrica em <1 ano e 10-19 anos. Diagnóstico: RT-PCR nasofaringe (3-7 dias — escolha), antígeno (5-7 dias), sorologia (>14 dias).',
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
    id: 'crescimento-baixa-estatura-novo',
    titulo: 'Crescimento e Baixa Estatura',
    emoji: '📏',
    subtitulo: 'Parâmetros de crescimento, velocidade e investigação',
    categoria: 'Endocrinologia',
    referencia: 'OMS. Child Growth Standards, 2025. SBP — Baixa Estatura. Greulich & Pyle Atlas.',
    seções: [
      {
        nome: 'Definição de Baixa Estatura',
        conteudo: 'Baixa estatura: Z-escore <-2 para sexo/idade OU estatura <-2DP do alvo familiar. Estatura alvo (EA): menina = média dos pais − 6,5cm; menino = média dos pais + 6,5cm (±8,5cm). Velocidade de crescimento normal + EA baixa + IO normal → Baixa estatura familiar (variante normal). VC normal + EA normal + IO atrasada → Atraso constitucional (variante normal).',
        color: 'blue'
      },
      {
        nome: 'Investigação de Velocidade Baixa',
        conteudo: 'VC BAIXA (<5cm/ano) → causas patológicas: sistêmicas (celíaca, DRC), genéticas (Turner), endócrinas (deficiência de GH, hipotireoidismo). Investigar VC baixa com: hemograma, PCR, anti-transglutaminase + IgA, U, Cr, eletrólitos, TSH, T4L, IGF-1, IGFBP-3, cariótipo (meninas). Obesidade + baixa estatura = causas endócrinas! Marcos de estatura: nasce 50cm; +25cm no 1º ano; +12cm 1-2 anos; +7-8cm 2-4 anos; +6cm/ano 4-6 anos.',
        color: 'amber'
      }
    ]
  },
  {
    id: 'desenvolvimento-infantil-novo',
    titulo: 'Desenvolvimento Infantil',
    emoji: '👶',
    subtitulo: 'Marcos do DNPM, reflexos primitivos e linguagem',
    categoria: 'Neurologia',
    referencia: 'Caderneta de Saúde da Criança, Ministério da Saúde, 2022. Denver II.',
    seções: [
      {
        nome: 'Marcos por Faixa Etária',
        conteudo: 'Áreas: Social (S), Adaptativo (A), Linguagem (L), Motor (M). RN: observa rosto, reage ao som. 1M: sorri, vocaliza. 2-3M: responde ao contato, segura objetos. 4-5M: rola. 6-8M: senta sem apoio. 9-11M: anda com apoio. 12-14M: anda sem apoio, 1 palavra. 18-23M: tira roupa, chuta bola. 24-29M: veste com supervisão, frases 2 palavras. 30-36M: brinca com outras crianças, arremessa bola.',
        color: 'blue'
      },
      {
        nome: 'Reflexos e Interpretação',
        conteudo: 'Desaparecem com maturação: marcha reflexa (1-2m), procura (3-4m), tônico cervical (3-4m), preensão palmar (4-6m), Moro (4-6m), cutâneo-plantar (15-18m). Provável atraso: ausência de marco da faixa anterior, PC alterado ou alterações fenotípicas. Alerta: ausência de marco da faixa atual → estimulação e retorno 30 dias. Prematuros: avaliar por idade corrigida até 2 anos.',
        color: 'green'
      },
      {
        nome: 'Desenvolvimento de Linguagem',
        conteudo: '0-3m: choro; 2-3m: sorriso social; 6-9m: balbucios; 9-12m: jargão; ~12m: primeiras palavras; 18m: ~50 palavras; 24m: frases 2 palavras, ~200 palavras; 3 anos: fala compreensível; 4-5 anos: frases completas. Prejudicam: telas (<2 anos), chupeta, estresse. Estimular: colo, brincadeira, leitura, conversa, canções, histórias.',
        color: 'purple'
      }
    ]
  },
  {
    id: 'desnutricao-vitaminas-novo',
    titulo: 'Desnutrição e Vitaminas',
    emoji: '🩺',
    subtitulo: 'Classificação, síndromes e deficiências vitamínicas',
    categoria: 'Nutrição',
    referencia: 'OMS — Gestão da Desnutrição Aguda Grave, 2013. SBP — Hipovitaminose D.',
    seções: [
      {
        nome: 'Classificação da Desnutrição',
        conteudo: 'Gomez (≤2 anos): peso/p50 → eutrófico 91-110%, leve 76-90%, moderada 61-75%, grave ≤61% ou com edema. Waterlow (2-10 anos): E/I + P/E. Marasmo: baixa ingestão energético-proteica, sem edema. Kwashiorkor: baixa ingestão proteica com calorias preservadas, edema periférico, apatia, hepatomegalia.',
        color: 'red'
      },
      {
        nome: 'Manejo da Desnutrição Grave',
        conteudo: '10 passos: (1) hipoglicemia, (2) hipotermia, (3) reidratar, (4) eletrólitos, (5) ATB, (6) micronutrientes, (7) realimentação cautelosa, (8) catch-up, (9) estimulação DNPM, (10) seguimento. NÃO prescrever ferro inicialmente. Síndrome realimentação: hipofosfatemia (principal).',
        color: 'amber'
      },
      {
        nome: 'Vitaminas Essenciais',
        conteudo: 'B1: beribéri. B3: pelagra. B6: convulsões. B9: defeito tubo neural. B12: anemia + desmielinização. Vitamina A: cegueira noturna, manchas de Bitot. Vitamina D: raquitismo (400-600 UI/dia). Vitamina C: escorbuto. Vitamina K: 1mg IM ao nascer para prevenir HDA.',
        color: 'blue'
      }
    ]
  },
  {
    id: 'diarreia-aguda-novo',
    titulo: 'Diarreia Aguda',
    emoji: '💧',
    subtitulo: 'Avaliação da hidratação, planos terapêuticos e antibióticos',
    categoria: 'Gastroenterologia',
    referencia: 'Ministério da Saúde e SBP — Doença Diarreica Aguda, 2023.',
    seções: [
      {
        nome: 'Avaliação do Estado de Hidratação',
        conteudo: 'Sem desidratação: alerta, olhos normais, lágrimas, boca úmida, prega desaparece rápido. Com desidratação: irritado, olhos fundos, sem lágrimas, prega lenta, perda até 10%. Grave: letárgico, muito fundos, prega muito lenta, pulso fraco, perda >10%.',
        color: 'blue'
      },
      {
        nome: 'Planos de Tratamento',
        conteudo: 'Plano A: SRO + líquidos + alimentação habitual + zinco ≤5 anos. Plano B: SRO 50-100mL/kg VO 4-6h, ondansetrona se vômitos. Plano C: 1ª expansão SF/RL 30mL/kg + 2ª expansão 70mL/kg + manutenção Holliday. Antibiótico (exceção): disenteria com toxemia → azitromicina.',
        color: 'teal'
      }
    ]
  },
  {
    id: 'diarreia-cronica-novo',
    titulo: 'Diarreia Crônica e Doenças Funcionais',
    emoji: '🔄',
    subtitulo: 'Celíaca, DII, intolerância à lactose e distúrbios funcionais',
    categoria: 'Gastroenterologia',
    referencia: 'SBP — Doença Celíaca, 2022. ESPGHAN — DII em Crianças.',
    seções: [
      {
        nome: 'Doença Celíaca',
        conteudo: 'Diagnóstico: anti-transglutaminase IgA + IgA total; padrão-ouro: biópsia (infiltrado >25 por 100 enterócitos). Tratamento: exclusão definitiva do glúten. Associado a atraso crescimento, anemia, dermatite herpetiforme.',
        color: 'amber'
      },
      {
        nome: 'Doença Inflamatória Intestinal',
        conteudo: 'Crohn: todo TGI, transmural, granuloma; massa QID, dor, parada crescimento. RCU: reto ± colo, mucosa/submucosa; sangramento, tenesmo. Indução Crohn: nutrição enteral exclusiva → corticoide. RCU: 5-ASA → corticoide.',
        color: 'red'
      },
      {
        nome: 'Intolerância à Lactose e Distúrbios Funcionais',
        conteudo: 'Lactose: diarreia líquida explosiva, ácida, borborigmos. Diagnóstico clínico. Diarreia funcional: 6m-5a, ≥4x/dia. SII: dor abdominal ≥4 dias/mês. Disquesia: <9m, esforço prolongado. Cólica: <5m, choro recorrente.',
        color: 'teal'
      }
    ]
  },
  {
    id: 'drc-lra-novo',
    titulo: 'Doença Renal Crônica e Lesão Renal Aguda',
    emoji: '🫘',
    subtitulo: 'Critérios pRIFLE, KDIGO e manejo em pediatria',
    categoria: 'Nefrologia',
    referencia: 'KDIGO — AKI Guidelines, 2012. pRIFLE. SBP — Nefropediatria.',
    seções: [
      {
        nome: 'Lesão Renal Aguda',
        conteudo: 'Deterioração súbita da função renal. Critérios KDIGO: Cr ≥0,3mg/dL 48h OU ≥1,5x 7 dias OU diurese ≤0,5mL/kg/h ≥6h. Etiologias: pré-renal, renal/intrínseca, pós-renal. Urgência dialítica: sobrecarga, hipercalemia, acidose, uremia, intoxicação.',
        color: 'blue'
      },
      {
        nome: 'Doença Renal Crônica',
        conteudo: 'Dano renal ≥3 meses, classificada por eTFG. <5 anos: CAKUT (malformações). >12 anos: glomerulopatias. Complicações: alterações cardiovasculares, anemia, distúrbios ósseos, retardo crescimento. Tratamento: conservador → terapia renal → transplante.',
        color: 'amber'
      }
    ]
  },
  {
    id: 'febre-sem-sinais-localizatorios-novo',
    titulo: 'Febre sem Sinais Localizatórios',
    emoji: '🌡️',
    subtitulo: 'Estratificação de risco e conduta por faixa etária',
    categoria: 'Infectologia',
    referencia: 'SBP — FSSL, 2025. Rochester Criteria. AAP Guidelines.',
    seções: [
      {
        nome: 'Definição e Abordagem Geral',
        conteudo: 'FSSL: febre <7 dias sem causa. Febre: ≥37,8°C (ou ≥37,5°C). FOI: >1 semana ambulatorial ou >3 dias intra-hospitalar. Principal bacteriana: ITU. Discriminar bacteriana grave de viral benigna.',
        color: 'blue'
      },
      {
        nome: 'Conduta por Faixa Etária',
        conteudo: '<1m: TOLERÂNCIA ZERO — internação + hemograma + culturas + ATB empírico. 1-3m: Rochester → baixo risco (acompanhar) vs alto risco (internar + ATB). 3-36m vacinado: PVR ± EAS. Não vacinado: TAX <39°C → reavaliar; >39°C → depende EAS. RN: tratar sempre.',
        color: 'red'
      }
    ]
  },
  {
    id: 'hepatologia-emergencia-novo',
    titulo: 'Hepatologia na Emergência',
    emoji: '🫁',
    subtitulo: 'Cirrose, insuficiência hepática aguda e hemorragia digestiva',
    categoria: 'Gastroenterologia',
    referencia: 'EASL — Guidelines. SBP — Hepatologia Pediátrica.',
    seções: [
      {
        nome: 'Peritonite Bacteriana Espontânea',
        conteudo: 'Paracentese todo cirrótico internado. Diagnóstico: ≥250 PMN/mm³. Agentes: E.coli, Klebsiella, Streptococcus. Tratamento: cefalosporina 3ª ou pip-tazo 5 dias + albumina + suspender diuréticos.',
        color: 'amber'
      },
      {
        nome: 'Hemorragia Digestiva e Insuficiência Hepática Aguda',
        conteudo: 'HDA: estabilizar → octreotide + vitamina K + ATB 3ª + endoscopia 24h. IHA: sem cirrose + coagulopatia não corrigida → tratar em centro transplante. Doença Wilson: genes ATP7B, cobre urinário alto, ceruloplasmina baixa, anéis de Kayser-Fleischer.',
        color: 'red'
      }
    ]
  },
  {
    id: 'ivas-novo',
    titulo: 'Infecções de Vias Aéreas Superiores',
    emoji: '👃',
    subtitulo: 'Resfriado, gripe, crupe, OMA, sinusite e amigdalite',
    categoria: 'Respiratório',
    referencia: 'SBP — IVAS em Pediatria. AAP — OMA. Protocolo Albert Einstein.',
    seções: [
      {
        nome: 'Resfriado, Gripe e SRAG',
        conteudo: 'Resfriado: rinovírus, 10-14 dias. Síndrome gripal: influenza + mialgia, cefaleia, fadiga. SRAG: gripal + gravidade → oseltamivir. Crupe: parainfluenza, rouquidão, tosse ladrante, estridor. Tratamento: dexametasona; adrenalina inalatória em moderado-grave.',
        color: 'blue'
      },
      {
        nome: 'OMA, Sinusite e Amigdalite',
        conteudo: 'OMA: efusão + inflamação. Agentes: pneumococo, H. influenzae. Tratar se: <6m, otorreia, bilateral <24m, severe. Sinusite: dupla piora >5 dias ou >10 dias, purulenta + febre. Amigdalite: SBGA, cultura padrão-ouro. Tratamento: amoxicilina 10 dias.',
        color: 'amber'
      }
    ]
  },
  {
    id: 'nefrologia-miscelanea-novo',
    titulo: 'Miscelânea em Nefropediatria',
    emoji: '🚽',
    subtitulo: 'Hidronefrose, refluxo vesicoureteral e enurese',
    categoria: 'Nefrologia',
    referencia: 'SBP — Uropatias Obstrutivas. SFU. NICE — Enurese.',
    seções: [
      {
        nome: 'Hidronefrose e RVU',
        conteudo: 'Hidronefrose fetal: DPR >4mm (18-22 sem) ou >7-10mm (3º tri). Etiologia comum: transitória (41-88%). CAKUT: obstrução JUP → RVU. Diagnóstico: UCM. Tratamento: antibioticoprofilaxia conforme classificação.',
        color: 'blue'
      },
      {
        nome: 'Enurese Noturna',
        conteudo: 'Perda involuntária urina durante sono ≥5 anos. Histórico familiar +. Primária vs Secundária; Monossintomática vs Não. Avaliação: anamnese + diário + urina. Manejo: tratar comorbidades (constipação!), alarme ou desmopressina.',
        color: 'amber'
      }
    ]
  },
  {
    id: 'morte-encefalica-novo',
    titulo: 'Morte Encefálica',
    emoji: '🧠',
    subtitulo: 'Diagnóstico, critérios e testes confirmatórios',
    categoria: 'Neurologia',
    referencia: 'CFM — Resolução 2.173/2017. Protocolo Morte Encefálica Brasil.',
    seções: [
      {
        nome: 'Diagnóstico de Morte Encefálica',
        conteudo: 'Pré-requisito: lesão encefálica irreversível + excluir confundidores (hipotermia <35°C, hipotensão, sedação, drogas). Observação: 6h (24h se HIE). 2 testes clínicos (reflexos) + 1 apneia + 1 confirmatório (fluxo ausente ou atividade zero).',
        color: 'blue'
      },
      {
        nome: 'Intervalo Entre Testes',
        conteudo: '7d-2m: 24h. 2m-2a: 12h. >2a: 1h. Parâmetros mínimos: Temp >35°C, Sat >94%, PAS >60 (<5m), >80 (5m-2a), >85 (2-7a), >90 (≥7a).',
        color: 'amber'
      }
    ]
  },
  {
    id: 'nefrologia-pediatrica-novo',
    titulo: 'Síndrome Nefrítica, Nefrótica e SHU',
    emoji: '🫘',
    subtitulo: 'GNPE, síndrome nefrótica e síndrome hemolítico-urêmica',
    categoria: 'Nefrologia',
    referencia: 'SBP — Nefrologia Pediátrica. KDIGO. ISKDC.',
    seções: [
      {
        nome: 'Síndrome Nefrítica',
        conteudo: 'Mais comum: GNDA pós-estreptocócica. Clínica: oligúria + edema + HAS + hematúria + ↓C3. Após amigdalite/impetigo SBGA. Tratamento: repouso, restrição hídrica-salina, penicilina, furosemida. Biópsia se: LRA, macro-hematúria, HAS >4 sem.',
        color: 'red'
      },
      {
        nome: 'Síndrome Nefrótica',
        conteudo: 'Proteinúria nefrótica + edema + hipoalbuminemia + dislipidemia. Risco: peritonite pneumococo. Tratamento: sal baixo + corticoide. Albumina EV se: choque, edema genital, oligúria. Biópsia: <1a, >10a, hematúria, HAS, Cr elevada, C3↓, refratária.',
        color: 'blue'
      },
      {
        nome: 'Síndrome Hemolítico-Urêmica',
        conteudo: 'Tríade: anemia microangiopática + plaquetopenia + LRA. Associada disenteria (STEC-SHU). Tratamento: suporte — transfusão, controle volêmico, TRS se necessário. EVITAR plaquetas em STEC. Pneumococo: ATB.',
        color: 'amber'
      }
    ]
  },
  {
    id: 'obesidade-novo',
    titulo: 'Obesidade e Síndrome Metabólica',
    emoji: '⚖️',
    subtitulo: 'Classificação, etiologias e dislipidemia',
    categoria: 'Endocrinologia',
    referencia: 'OMS. SBP — Obesidade Infantil. SBP — Dislipidemia.',
    seções: [
      {
        nome: 'Classificação e Etiologia',
        conteudo: 'IMC/idade (>5a): sobrepeso Z +1 a +2 (p85-97), obesidade Z +2 a +3 (p97-99,9), grave Z>+3. <5a: peso/estatura. Exógena (95%): multifatorial, familiar, >5a, IO normal, estatura normal-alta. Endógena (5%): Prader-Willi, Cushing, ↓GH, hipotireoidismo. Alerta: <5a, sem familiar, cognitivo ↓, IO ↓, dismorfismos, baixa estatura.',
        color: 'amber'
      },
      {
        nome: 'Dislipidemia e Tratamento',
        conteudo: 'Rastreio: 9-11 anos e 17-21 anos. 2-8 e 12-16: fatores risco. Tratamento: MEV todos. Medicamentoso (estatin) após 6 meses: LDL >190, >160 com risco, >130 com DM. Obesidade: MEV primeiro. Liraglutida (>12a) se MEV falha.',
        color: 'blue'
      }
    ]
  },
  {
    id: 'politrauma-afogamento-novo',
    titulo: 'Politrauma e Afogamento',
    emoji: '🏥',
    subtitulo: 'ATLS pediátrico, lesões e manejo do afogamento',
    categoria: 'Emergência',
    referencia: 'ATLS 10ª ed. Szpilman. SBP — Emergências.',
    seções: [
      {
        nome: 'Politrauma — Atendimento Inicial',
        conteudo: '1ª causa morte/sequelas. ATLS: A (vias aéreas + coluna) → B (respiração) → C (hemodinâmica + sangramento) → D (Glasgow, pupilas) → E (exposição). Lesões torácicas: contusão, pneumotórax, hemotórax, tamponamento. Choque: expansão cristaloide se normotenso; RBC se hipotenso. Transfusão maciça >60mL/kg.',
        color: 'red'
      },
      {
        nome: 'Afogamento',
        conteudo: 'Sequência: proteger socorrista → reconhecer → flutuação → retirar → RCP precoce (5 ventilações antes ABC) → aquecer se Temp >32-34°C. Classificação Szpilman: Resgate → I (espuma) → II (pulmão) → III (muita) → IV (coma) → V (apneia) → VI (PCR). Aquecer se T <32°C antes confirmar óbito.',
        color: 'blue'
      }
    ]
  },
  {
    id: 'puberdade-novo',
    titulo: 'Puberdade',
    emoji: '🌱',
    subtitulo: 'Estadiamento de Tanner, puberdade precoce e atrasada',
    categoria: 'Endocrinologia',
    referencia: 'SBP — Puberdade. Marshall & Tanner (1969/1970).',
    seções: [
      {
        nome: 'Puberdade Normal e Estadiamento',
        conteudo: 'Meninas: 8-13 anos, telarca (M2). Meninos: 9-14 anos, testículo ≥4mL (G2). Tanner: M1-M5 (mama), G1-G5 (genital). Estirão: meninas M3 (8-10cm/a), meninos G4 (10-14cm/a).',
        color: 'purple'
      },
      {
        nome: 'Puberdade Precoce e Atrasada',
        conteudo: 'Precoce: <8a (meninas) ou <9a (meninos). Central: eixo ativado → aGnRH. Periférica: hormônios independentes. Atrasada/Hipogonadismo: Hipergonadotrófico (gônada) ou Hipogonadotrófico (eixo). Atraso constitucional: VC normal + EA normal + IO atrasada + familiar.',
        color: 'blue'
      }
    ]
  },
  {
    id: 'queimaduras-novo',
    titulo: 'Queimaduras',
    emoji: '🔥',
    subtitulo: 'Classificação, extensão e manejo inicial',
    categoria: 'Emergência',
    referencia: 'SBP — Queimaduras. ABA. Parkland Formula.',
    seções: [
      {
        nome: 'Classificação e Avaliação',
        conteudo: 'Fontes: calor, química, elétrica (lesão interna), radiação. Extensão: leves (<2% profunda), risco (>10%), grande queimado (>20%), graves (>30%). Avaliação: Lund-Browder, regra dos 9, palma (~1%). IOT se: queimadura VA, estridor/broncoespasmo, >15%, cirurgias frequentes, rebaixamento.',
        color: 'red'
      },
      {
        nome: 'Manejo Inicial',
        conteudo: 'Remover roupas. Analgesia. Reidratação: Parkland = 4mL/kg/% (50% 8h + 50% 16h) se 2º-3º grau >15%. Curativo. UTI: nutrição, sedação, ATB se indicado.',
        color: 'amber'
      }
    ]
  },
  {
    id: 'tce-hic-novo',
    titulo: 'TCE e Hipertensão Intracraniana',
    emoji: '💥',
    subtitulo: 'Escala de Glasgow, lesões e manejo da PIC',
    categoria: 'Neurologia',
    referencia: 'SBP — TCE em Pediatria. BTF Guidelines. ATLS 10ª.',
    seções: [
      {
        nome: 'TCE — Classificação',
        conteudo: 'Glasgow: leve 14-15, moderado 9-13, grave <9. Atendimento ABCDE + D. TC: epidural, subdural, subaracnoidea, contusão, LAD, edema, desvio linha média, fraturas, herniação.',
        color: 'red'
      },
      {
        nome: 'Hipertensão Intracraniana',
        conteudo: 'PPC = PAM – PIC. Normal <20mmHg. Sinais: rebaixamento (1º), abaulamento fontanela, cefaleia/vômitos, alterações visuais, tríade Cushing. Tratamento: causa, decúbito 30°, sedação, tratar convulsões, salina hipertônica/manitol, normalizar CO2, normotermia, craniectomia.',
        color: 'blue'
      }
    ]
  },
  {
    id: 'violencia-crianca-novo',
    titulo: 'Violência Contra a Criança e o Adolescente',
    emoji: '🛡️',
    subtitulo: 'Maus-tratos, shaken baby e síndrome de Munchausen',
    categoria: 'Social',
    referencia: 'SBP — Maus-Tratos. ECA Lei 8.069/90. SINAN.',
    seções: [
      {
        nome: 'Sinais Físicos e Síndromes',
        conteudo: 'Fraturas sugestivas: metafisárias (alça balde), diafisárias espiral, costelas <2a (posteriores), crânio, múltiplas/bilaterais. Shaken Baby: encefalopatia + subdural + hemorragia retina. Munchausen por Procuração: doenças variadas não responsivas, cuidador solicita exames/procedimentos.',
        color: 'red'
      },
      {
        nome: 'Conduta e Notificação',
        conteudo: 'Acolhimento multidisciplinar. Exame físico completo com documentação. Exames: guiados; esqueleto lactentes; TC crânio + fundoscopia (shaken). Hospitalização: gravidade ou falta recurso. NOTIFICAÇÃO COMPULSÓRIA → Conselho Tutelar + MP + SINAN.',
        color: 'amber'
      }
    ]
  },
  {
    id: 'violencia-sexual-novo',
    titulo: 'Violência Sexual',
    emoji: '⚖️',
    subtitulo: 'Atendimento de emergência, profilaxias e contracepção',
    categoria: 'Social',
    referencia: 'MS — Atenção Humanizada. SBP — Violência Sexual. Protocolo ISTs.',
    seções: [
      {
        nome: 'Atendimento de Emergência',
        conteudo: 'EMERGÊNCIA — até 72h. Etapas: acolhimento → notificação → anamnese + exame + coleta → exames complementares → profilaxias → contracepção → seguimento. Exames: sorologias, β-HCG, hemograma, função renal/hepática, conteúdo vaginal.',
        color: 'red'
      },
      {
        nome: 'Profilaxias e Contracepção',
        conteudo: 'Tétano: conforme histórico. ISTs não virais: penicilina (sífilis), ceftriaxona (gonorreia), azitromicina (clamídia), metronidazol (tricomoníase). Hepatite B: vacina + IGHAHB. HPV: vacina. HIV (até 72h): TDF/3TC+Dolutegravir 28d. Contracepção: levonorgestrel 1,5mg VO dose única.',
        color: 'amber'
      }
    ]
  }
];