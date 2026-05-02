export const vacinasData = [
  // Ao Nascer
  {
    nome: 'BCG',
    idade: 'Ao Nascer',
    previne: 'Formas graves de tuberculose, especialmente meningite tuberculosa e tuberculose miliar (disseminada pelo corpo)',
    composicao: 'Vacina atenuada, composta pelo bacilo de Calmette-Guérin (BCG), obtido pelo enfraquecimento da bactéria da tuberculose; contém glutamato de sódio e solução fisiológica a 0,9%',
    indicacao: 'De rotina a partir do nascimento até os 5 anos; também para pessoas que convivem com portadores de hanseníase',
    contraindicacao: 'Pessoas imunodeprimidas; prematuros com menos de 2 kg; recém-nascidos de mães que usaram medicamentos imunossupressores na gestação',
    esquema: 'Dose única',
    via: 'Intradérmica (buco direito)',
    efeitosAdversos: 'Quase sempre forma uma cicatriz característica de até 1 cm, que é uma reação esperada e normal — evolui de mancha vermelha para pequena úlcera que vai cicatrizando ao longo de 3 a 6 meses. Eventos mais raros: úlceras grandes, gânglios ou abscessos axilares, disseminação do bacilo vacinal',
    ondeEncontrar: 'UBS e serviços privados'
  },
  {
    nome: 'Hepatite B (dose ao nascer)',
    idade: 'Ao Nascer',
    previne: 'Infecção hepática causada pelo vírus da hepatite B, prevenindo especialmente a hepatite crônica — forma que acomete 90% dos bebês contaminados ao nascer',
    composicao: 'Vacina inativada composta por proteína de superfície do vírus (HBsAg), hidróxido de alumínio, cloreto de sódio e água para injeção',
    indicacao: 'Para todas as idades; deve ser aplicada de preferência nas primeiras 12–24 horas após o nascimento',
    contraindicacao: 'Anafilaxia a qualquer componente ou dose anterior; púrpura trombocitopênica após dose anterior com componente hepatite B',
    esquema: 'Quatro doses no total — dose ao nascer (isolada) + doses aos 2, 4 e 6 meses (na Penta/DTPw-HBHib); ou 3 doses (nascimento + 2 meses + 6 meses) no esquema privado com hexavalente',
    via: 'Intramuscular',
    efeitosAdversos: 'Dor no local (3–29%), vermelhidão e endurecimento (0,2–17%), febre em 1–6%, cansaço, tontura, dor de cabeça e desconforto gastrointestinal (1–20%)',
    ondeEncontrar: 'UBS (para todas as idades) e serviços privados'
  },

  // 2 Meses
  {
    nome: 'Penta (DTPw-HBHib)',
    idade: '2 Meses',
    previne: 'Difteria, tétano, coqueluche, meningite por Haemophilus influenzae tipo b (Hib) e hepatite B',
    composicao: 'Vacina inativada composta por toxoides diftérico e tetânico, célula inteira purificada da bactéria da coqueluche (Bordetella pertussis), antígeno do vírus da hepatite B (HBsAg) e componente da cápsula do Hib conjugado a proteína; contém fosfato de alumínio, cloreto de sódio e água para injeção',
    indicacao: 'Crianças até 7 anos; usada na rotina do PNI aos 2, 4 e 6 meses',
    contraindicacao: 'Maiores de 7 anos; crianças que apresentaram encefalopatia, episódio hipotônico-hiporreativo (EHH), convulsões nas primeiras 72h, reação anafilática nas primeiras 2h ou encefalopatia aguda após dose anterior',
    esquema: 'Três doses (2, 4, 6 meses) + reforços',
    via: 'Intramuscular',
    efeitosAdversos: 'Febre, irritabilidade, dor e vermelhidão no local são comuns nas primeiras 48–72h. O componente pertussis é o principal responsável pelos eventos. EHH (criança fica pálida, flácida, sem consciência por minutos a horas) ocorre raramente, melhora sem sequelas e não contraindica doses seguintes',
    ondeEncontrar: 'UBS'
  },
  {
    nome: 'VIP (Vacina Inativada Poliomielite)',
    idade: '2 Meses',
    previne: 'Poliomielite (paralisia infantil)',
    composicao: 'Vacina inativada trivalente (tipos 1, 2 e 3 do vírus da pólio); contém 2-fenoxietanol, polissorbato 80, formaldeído, entre outros; pode conter traços de neomicina, estreptomicina e polimixina B',
    indicacao: 'Crianças menores de 5 anos; o PNI adota VIP nas três primeiras doses (2, 4 e 6 meses); SBIm recomenda VIP em todas as doses',
    contraindicacao: 'Anafilaxia a qualquer componente ou dose anterior (principalmente aos antibióticos da fórmula)',
    esquema: 'Três doses aos 2, 4 e 6 meses + reforços aos 15 meses e aos 4–5 anos',
    via: 'Intramuscular',
    efeitosAdversos: 'Eritema discreto no local em menos de 3%, endurecimento em menos de 12%, dor leve em menos de 30%; febre é rara (menos de 10%); anafilaxia muito rara',
    ondeEncontrar: 'UBS e serviços privados'
  },
  {
    nome: 'Pneumocócica Conjugada (VPC10 ou VPC13)',
    idade: '2 Meses',
    previne: 'VPC10: ~70% das doenças graves (pneumonia, meningite, otite) por 10 sorotipos de pneumococo; VPC13: ~90% por 13 sorotipos',
    composicao: 'Vacinas inativadas. VPC10: 10 sorotipos conjugados a proteínas (proteína D do Hib, toxoide tetânico e toxoide diftérico) + fosfato de alumínio. VPC13: 13 sorotipos conjugados à proteína CRM197 + sais de alumínio, sacarose, polissorbato 80',
    indicacao: 'Rotina a partir dos 2 meses até 5 anos; SBIm/SBP recomendam VPC13 por proteger contra mais sorotipos',
    contraindicacao: 'Anafilaxia a qualquer componente ou dose anterior',
    esquema: 'Quatro doses — aos 2, 4, 6 meses e reforço entre 12–15 meses',
    via: 'Intramuscular',
    efeitosAdversos: 'VPC10: Dor, inchaço e vermelhidão em 38,3%; irritabilidade em 52,3%; sonolência, perda de apetite e febre em mais de 10%. VPC13: Diminuição do apetite, irritabilidade, sonolência, febre e reações locais em mais de 10% das crianças',
    ondeEncontrar: 'UBS e serviços privados'
  },
  {
    nome: 'Rotavírus Humano (VRH1)',
    idade: '2 Meses',
    previne: 'Doença diarreica por rotavírus (sorotipo P1A, genótipo P8)',
    composicao: 'Vacina oral atenuada, contendo um tipo de rotavírus vivo enfraquecido; contém sacarose, adipato dissódico, meio de cultura e água estéril',
    indicacao: 'Bebês de 6 semanas a 8 meses; a 1ª dose deve ser obrigatoriamente aplicada até 3 meses e 15 dias de idade',
    contraindicacao: 'Crianças fora da faixa etária; imunodeficiências; alergia grave a componentes; doença gastrintestinal grave ou história de invaginação intestinal',
    esquema: 'VRH1: 2 doses com intervalo mínimo de 4 semanas (padrão: 2 e 4 meses)',
    via: 'Oral',
    efeitosAdversos: 'Risco muito pequeno de invaginação intestinal na primeira semana após a segunda dose; muito inferior ao risco de hospitalização por gastroenterite por rotavírus',
    ondeEncontrar: 'UBS'
  },

  // 3 Meses
  {
    nome: 'Meningocócica C Conjugada',
    idade: '3 Meses',
    previne: 'Doenças causadas pelo meningococo C, incluindo meningite e meningococcemia',
    composicao: 'Vacina inativada; antígeno da cápsula da bactéria (oligossacarídeo do sorogrupo C) conjugado a uma proteína transportadora (toxoide tetânico ou CRM-197); contém adjuvante (hidróxido de alumínio), manitol, fosfatos e água para injeção',
    indicacao: 'Crianças e adolescentes; SBIm recomenda preferencialmente a ACWY, usando a C quando aquela não estiver disponível',
    contraindicacao: 'Anafilaxia a qualquer componente ou dose anterior',
    esquema: 'PNI: 3 doses (3, 5 meses) + reforço aos 12 meses. SBIm: inicia aos 3 meses, 2 doses no 1º ano, reforços entre 12–15 meses, 5–6 anos e 11 anos',
    via: 'Intramuscular',
    efeitosAdversos: 'Reações no local (vermelhidão, inchaço, dor intensa) em 1,5%; febre, dor de cabeça, mal-estar, náusea e vômito em 0,3–10%',
    ondeEncontrar: 'UBS'
  },
  {
    nome: 'Meningocócica ACWY Conjugada',
    idade: '3 Meses',
    previne: 'Meningites e infecções generalizadas pelos meningococos A, C, W e Y',
    composicao: 'Vacina inativada; oligossacarídeos dos sorogrupos A, C, W e Y conjugados a toxoide tetânico ou CRM-197',
    indicacao: 'A partir dos 2 meses; preferida sobre a meningocócica C por proteger contra três tipos adicionais',
    contraindicacao: 'Anafilaxia a qualquer componente ou dose anterior',
    esquema: 'Inicia aos 3 meses, 2 doses no 1º ano, reforços entre 12–15 meses, 5–6 anos e aos 11 anos',
    via: 'Intramuscular profunda',
    efeitosAdversos: 'Em 10%: dor, inchaço, febre, irritabilidade, cansaço. Em 1–10%: sintomas gastrointestinais, erupções, dor articular. Em 0,01–0,1%: inchaço extenso do membro vacinado. Reações somem em até 72h',
    ondeEncontrar: 'Serviços privados'
  },
  {
    nome: 'Meningocócica B',
    idade: '3 Meses',
    previne: 'Meningites e infecções generalizadas pelo meningococo B',
    composicao: 'Vacina inativada composta por quatro componentes: três proteínas subcapsulares e vesículas da membrana externa do meningococo B; contém hidróxido de alumínio, cloreto de sódio, histidina, sacarose e água para injeção',
    indicacao: 'Crianças e adolescentes conforme SBIm/SBP; adultos até 50 anos em situações de risco; viajantes; pessoas com doenças que aumentem o risco meningocócico',
    contraindicacao: 'Anafilaxia a qualquer componente ou dose anterior',
    esquema: 'Início 3–11 meses: 2 doses com intervalo de 2 meses + reforço entre 12–15 meses. Pode ser aplicada simultaneamente à ACWY',
    via: 'Intramuscular',
    efeitosAdversos: 'Em mais de 10%: cefaleia, náuseas, dores musculares e articulares, mal-estar, reações locais intensas (dor pode atrapalhar atividades cotidianas)',
    ondeEncontrar: 'Serviços privados'
  },

  // 6 Meses
  {
    nome: 'Influenza (Gripe) — Trivalente ou Quadrivalente',
    idade: '6 Meses',
    previne: 'Infecção pelo vírus influenza (gripe)',
    composicao: 'Vacina inativada; proteínas de diferentes cepas do vírus influenza definidas anualmente pela OMS, cultivadas em ovos embrionados de galinha; pode conter traços de proteínas do ovo, formaldeído e antibióticos (gentamicina ou neomicina). A quadrivalente protege contra duas cepas de vírus A + duas de vírus B',
    indicacao: 'Todas as pessoas a partir de 6 meses; especialmente grupos de risco',
    contraindicacao: 'Alergia grave (anafilaxia) ao ovo de galinha ou a qualquer componente da vacina',
    esquema: 'Crianças de 6 meses a 8 anos: 2 doses na primeira vez, com 1 mês de intervalo + vacinação anual. A partir de 9 anos: dose única anual',
    via: 'Intramuscular',
    efeitosAdversos: 'Dor, vermelhidão e endurecimento local em 15–20% (somem em 48h); febre, mal-estar e dor muscular em 1–2% dos vacinados',
    ondeEncontrar: 'UBS e serviços privados'
  },
  {
    nome: 'Covid-19',
    idade: '6 Meses',
    previne: 'COVID-19 (Doença causada pelo coronavírus SARS-CoV-2)',
    composicao: 'Composição varia conforme fabricante (Pfizer/BioNTech — mRNA; CoronaVac — inativada, etc)',
    indicacao: 'Crianças a partir de 6 meses conforme as recomendações vigentes do MS e SBIm',
    contraindicacao: 'Anafilaxia a qualquer componente ou dose anterior',
    esquema: 'Varia conforme o produto disponível e recomendações vigentes',
    via: 'Intramuscular',
    efeitosAdversos: 'Varia conforme o fabricante — consulte as informações específicas da vacina disponível',
    ondeEncontrar: 'UBS e serviços privados'
  },

  // 9 Meses
  {
    nome: 'Febre Amarela',
    idade: '9 Meses',
    previne: 'Febre amarela',
    composicao: 'Vacina atenuada com vírus vivo enfraquecido cultivado em ovo de galinha; contém gelatina bovina (Bio-Manguinhos) ou lactose e sorbitol (Sanofi Pasteur); eficácia estimada em 95%',
    indicacao: 'Todas as pessoas a partir de 9 meses em todo o território nacional',
    contraindicacao: 'Crianças abaixo de 6 meses; imunodeprimidos graves; gestantes (salvo risco epidemiológico); mulheres amamentando bebês até 6 meses (suspender amamentação por 10 dias se inevitável); pacientes transplantados, com câncer ou doenças do timo',
    esquema: 'Crianças até 4 anos: 2 doses (9 meses + 4 anos). Acima de 4 anos: pode ser considerada segunda dose conforme risco epidemiológico',
    via: 'Subcutânea',
    efeitosAdversos: 'Febre, dor de cabeça e muscular em ~4% dos primeiros vacinados; reações alérgicas em 1:130.000–250.000 doses; eventos graves (doença neurológica ou viscerotrópica) são raríssimos (0,04–0,2 casos por 100 mil vacinados)',
    ondeEncontrar: 'UBS'
  },

  // 12 Meses
  {
    nome: 'Tríplice Viral (SCR)',
    idade: '12 Meses',
    previne: 'Sarampo, caxumba e rubéola',
    composicao: 'Vacina atenuada com vírus vivos enfraquecidos dos três agentes; contém aminoácidos, albumina humana, sulfato de neomicina, sorbitol e gelatina; traços de proteína do ovo de galinha',
    indicacao: 'Crianças, adolescentes e adultos',
    contraindicacao: 'Gestantes; imunodeprimidos; anafilaxia a dose anterior ou componente',
    esquema: 'SBIm/SBP: 2 doses — aos 12 meses e aos 15 meses (podendo ser usada a tetraviral SCR-V na segunda dose). Considerado protegido quem tomou 2 doses a partir dos 12 meses com intervalo mínimo de 1 mês',
    via: 'Subcutânea',
    efeitosAdversos: 'Febre alta (>39,5°C) de 5–15% dos vacinados, surgindo 5–12 dias após; manchas vermelhas no corpo em 5%; convulsão febril pode ocorrer em crianças predispostas; meningite benigna e encefalite são raríssimas (1:1 milhão–2,5 milhões na 1ª dose); púrpura trombocitopênica em 1:30.000–40.000 (contraindica doses subsequentes)',
    ondeEncontrar: 'UBS'
  },
  {
    nome: 'Varicela (Catapora)',
    idade: '12 Meses',
    previne: 'Varicela (catapora)',
    composicao: 'Vacina atenuada com vírus vivos enfraquecidos da varicela; contém gelatina, traços de neomicina e água para injeção; não contém proteína do ovo',
    indicacao: 'Rotina a partir dos 12 meses; adolescentes e adultos suscetíveis',
    contraindicacao: 'Anafilaxia a componente ou dose anterior; gestantes; imunodeprimidos (avaliar com médico)',
    esquema: 'SBIm/SBP: 2 doses — 1ª aos 12 meses e 2ª entre 15–24 meses; intervalo mínimo de 3 meses entre doses',
    via: 'Subcutânea',
    efeitosAdversos: 'Dor no local em 26%, vermelhidão em 5%; vesículas próximas ao local em 1–3%; erupção semelhante à varicela (2–5 lesões) em 3–5% dos vacinados entre 5–26 dias após a vacinação',
    ondeEncontrar: 'UBS e serviços privados'
  },
  {
    nome: 'Hepatite A',
    idade: '12 Meses',
    previne: 'Hepatite A',
    composicao: 'Vacina inativada composta por antígeno do vírus da hepatite A, sal de alumínio amorfo, estabilizante, cloreto de sódio; pode conter traços de neomicina, fenoxietanol e formaldeído',
    indicacao: 'Todas as pessoas a partir de 12 meses',
    contraindicacao: 'Anafilaxia a componente ou dose anterior',
    esquema: 'SBIm/SBP: 2 doses com intervalo de 6 meses — recomendadas aos 12 e 18 meses. O PNI oferece dose única para crianças de 15 meses a 4 anos e 11 meses',
    via: 'Intramuscular',
    efeitosAdversos: 'Em 10%: irritabilidade, dor de cabeça, cansaço, dor e vermelhidão no local. Em 1–10%: perda de apetite, sonolência, diarreia, náusea, vômito, febre baixa',
    ondeEncontrar: 'UBS e serviços privados'
  },

  // 15 Meses
  {
    nome: 'DTP (reforço)',
    idade: '15 Meses',
    previne: 'Difteria, tétano e coqueluche',
    composicao: 'Mesma composição da Penta (DTPw-HBHib) — toxoides diftérico e tetânico, célula inteira purificada da coqueluche, antígeno hepatite B e Hib conjugado',
    indicacao: 'Primeira dose de reforço após esquema primário em crianças até 7 anos',
    contraindicacao: 'Maiores de 7 anos; encefalopatia, EHH ou convulsões nas primeiras 72h após dose anterior',
    esquema: '1ª dose de reforço aos 15 meses',
    via: 'Intramuscular',
    efeitosAdversos: 'Febre, irritabilidade, dor e vermelhidão no local nas primeiras 48–72h; eventos adversos geralmente menores que nas doses primárias',
    ondeEncontrar: 'UBS'
  },
  {
    nome: 'Tetraviral (SCR-V)',
    idade: '15 Meses',
    previne: 'Sarampo, caxumba, rubéola e varicela',
    composicao: 'Vacina atenuada com vírus vivos dos quatro agentes; contém lactose anidra, sorbitol, manitol, aminoácidos, traços de neomicina e proteína do ovo',
    indicacao: 'Crianças menores de 12 anos, como substituta da aplicação simultânea de SCR + varicela; o PNI adota a SCR-V aos 15 meses',
    contraindicacao: 'Gestantes; imunodeprimidos; anafilaxia a dose anterior ou componente',
    esquema: '1 dose aos 15 meses (PNI). SBIm/SBP recomendam 2 doses totais com intervalo de 3 meses',
    via: 'Subcutânea',
    efeitosAdversos: 'Febre em 22% (vs. 15% com vacinas separadas); risco de convulsão febril ligeiramente maior com SCR-V vs. vacinas separadas (1 caso adicional para cada 2.500 crianças). Erupções cutâneas, meningite benigna e encefalite seguem o mesmo perfil da SCR isolada',
    ondeEncontrar: 'UBS'
  },

  // 18 Meses
  {
    nome: 'Hepatite A (2ª dose)',
    idade: '18 Meses',
    previne: 'Hepatite A',
    composicao: 'Mesma composição descrita para a 1ª dose — Vacina inativada composta por antígeno do vírus da hepatite A, sal de alumínio amorfo, estabilizante, cloreto de sódio',
    indicacao: 'Todas as pessoas a partir de 12 meses — segunda dose do esquema de 2 doses',
    contraindicacao: 'Anafilaxia a componente ou dose anterior',
    esquema: '2ª dose 6 meses após a 1ª dose (aos 18 meses se iniciado aos 12 meses)',
    via: 'Intramuscular',
    efeitosAdversos: 'Semelhantes à 1ª dose — irritabilidade, dor de cabeça, cansaço, dor e vermelhidão no local em até 10%',
    ondeEncontrar: 'UBS e serviços privados'
  },
  {
    nome: 'Varicela (2ª dose)',
    idade: '18 Meses',
    previne: 'Varicela (catapora)',
    composicao: 'Mesma composição descrita para a 1ª dose — Vacina atenuada com vírus vivos enfraquecidos da varicela; contém gelatina, traços de neomicina e água para injeção',
    indicacao: 'Rotina para completar esquema de 2 doses; adolescentes e adultos suscetíveis',
    contraindicacao: 'Anafilaxia a componente ou dose anterior; gestantes; imunodeprimidos (avaliar com médico)',
    esquema: '2ª dose entre 15–24 meses; intervalo mínimo de 3 meses entre doses',
    via: 'Subcutânea',
    efeitosAdversos: 'Semelhantes à 1ª dose — dor no local, vermelhidão, vesículas próximas ao local, erupção semelhante à varicela (2–5 lesões) em 3–5% dos vacinados',
    ondeEncontrar: 'UBS e serviços privados'
  },

  // 24 Meses
  {
    nome: 'Dengue',
    idade: '2 Anos (24 meses)',
    previne: 'Infecção pelos quatro sorotipos de dengue (DEN1–DEN4); eficácia de 65,5% na prevenção da doença, 93% na dengue grave/hemorrágica e mais de 80% nas internações',
    composicao: 'Vacina atenuada com os quatro sorotipos vivos do vírus dengue, obtidos por tecnologia de DNA recombinante; contém aminoácidos, arginina, sacarose, trealose, sorbitol, trometamol e ureia. Não contém adjuvantes nem conservantes',
    indicacao: 'Crianças a partir de 9 anos, adolescentes e adultos até 45 anos previamente infectados (soropositivos)',
    contraindicacao: 'Imunodeprimidos; alergia grave a componentes; gestantes; mulheres amamentando; pessoas sem contato prévio com o vírus (soronegativos) — risco aumentado de dengue grave',
    esquema: '3 doses com intervalo de 6 meses',
    via: 'Subcutânea',
    efeitosAdversos: 'Dor de cabeça, dor no local, mal-estar e mialgia; reações leves a moderadas, de curta duração (até 3 dias); febre pode surgir até 14 dias após a vacinação',
    ondeEncontrar: 'Serviços privados'
  },

  // 4 Anos
  {
    nome: 'DTP (2º reforço)',
    idade: '4 Anos',
    previne: 'Difteria, tétano e coqueluche',
    composicao: 'Vacina inativada com toxoides diftérico e tetânico + células inteiras purificadas da Bordetella pertussis; contém fosfato de alumínio, cloreto de sódio e água para injeção',
    indicacao: 'Crianças até 7 anos como segundo reforço da série',
    contraindicacao: 'Maiores de 7 anos; encefalopatia, EHH ou convulsões nas primeiras 72h após dose anterior',
    esquema: '2º reforço aos 4 anos',
    via: 'Intramuscular',
    efeitosAdversos: 'Febre, irritabilidade, dor e vermelhidão no local; geralmente menos intenso que nas doses primárias',
    ondeEncontrar: 'UBS'
  },
  {
    nome: 'Febre Amarela (2ª dose)',
    idade: '4 Anos',
    previne: 'Febre amarela',
    composicao: 'Mesma composição descrita para a 1ª dose — Vacina atenuada com vírus vivo enfraquecido cultivado em ovo de galinha; contém gelatina bovina (Bio-Manguinhos) ou lactose e sorbitol (Sanofi Pasteur)',
    indicacao: 'Segunda dose do esquema de crianças até 4 anos (com 1ª dose aos 9 meses)',
    contraindicacao: 'Crianças abaixo de 6 meses; imunodeprimidos graves; gestantes (salvo risco epidemiológico); mulheres amamentando bebês até 6 meses',
    esquema: '2ª dose aos 4 anos',
    via: 'Subcutânea',
    efeitosAdversos: 'Febre, dor de cabeça e muscular em ~4% dos vacinados; reações alérgicas e eventos graves são raríssimos',
    ondeEncontrar: 'UBS'
  },
  {
    nome: 'Varicela (2ª dose)',
    idade: '4 Anos',
    previne: 'Varicela (catapora)',
    composicao: 'Mesma composição da varicela — Vacina atenuada com vírus vivos enfraquecidos da varicela; contém gelatina, traços de neomicina e água para injeção',
    indicacao: 'Segunda dose do esquema de varicela (se não foi dada a tetraviral aos 15 meses)',
    contraindicacao: 'Anafilaxia a componente ou dose anterior; gestantes; imunodeprimidos (avaliar com médico)',
    esquema: '2ª dose aos 4 anos',
    via: 'Subcutânea',
    efeitosAdversos: 'Dor no local, vermelhidão, erupção semelhante à varicela em pequena porcentagem de vacinados',
    ondeEncontrar: 'UBS e serviços privados'
  },

  // 5-6 Anos
  {
    nome: 'DTPa-VIP (privado, reforço)',
    idade: '4–5 Anos',
    previne: 'Difteria, tétano, coqueluche (acelular) e poliomielite',
    composicao: 'Vacina inativada com toxoides diftérico e tetânico, componentes acelulares da Bordetella pertussis + poliovírus inativados tipos 1, 2, 3 e Hib. Contém lactose, 2-fenoxietanol, hidróxido de alumínio',
    indicacao: 'Reforço dos 4–5 anos em crianças que usaram o esquema privado',
    contraindicacao: 'Maiores de 7 anos; encefalopatia, EHH ou convulsões nas primeiras 72h após dose anterior',
    esquema: 'Reforço aos 4–5 anos',
    via: 'Intramuscular',
    efeitosAdversos: 'Reações locais em até 21%; febre >38°C em até 22%; reações geralmente menos intensas que em doses primárias',
    ondeEncontrar: 'Serviços privados'
  },
  {
    nome: 'Meningocócica ACWY (reforço)',
    idade: '5–6 Anos',
    previne: 'Meningites e infecções generalizadas pelos meningococos A, C, W e Y',
    composicao: 'Mesma composição descrita — Vacina inativada; oligossacarídeos dos sorogrupos A, C, W e Y conjugados a toxoide tetânico ou CRM-197',
    indicacao: 'Reforço do esquema iniciado na infância (entre 5 e 6 anos, conforme SBIm/SBP)',
    contraindicacao: 'Anafilaxia a componente ou dose anterior',
    esquema: 'Reforço entre 5–6 anos',
    via: 'Intramuscular profunda',
    efeitosAdversos: 'Dor, inchaço, febre, irritabilidade em até 10%; sintomas geralmente desaparecem em até 72h',
    ondeEncontrar: 'Serviços privados'
  },

  // 9+ Anos
  {
    nome: 'HPV4 (Quadrivalente)',
    idade: '9+ Anos',
    previne: 'Infecções por HPV tipos 6, 11, 16 e 18; previne câncer do colo do útero, vulva, vagina, ânus e verrugas genitais (condiloma)',
    composicao: 'Vacina inativada com proteínas L1 dos HPV tipos 6, 11, 16, 18 + sulfato de hidroxifosfato de alumínio, L-histidina, polissorbato 80, borato de sódio e água para injeção',
    indicacao: 'PNI: Meninas de 9–14 anos; meninos de 11–14 anos; pessoas de 9–26 anos vivendo com HIV/Aids, transplantados ou em tratamento oncológico',
    contraindicacao: 'Gestantes; anafilaxia a dose anterior ou componente',
    esquema: '9–14 anos e 11 meses: 2 doses com intervalo de 6 meses. A partir dos 15 anos: 3 doses (0–1/2–6 meses)',
    via: 'Intramuscular',
    efeitosAdversos: 'Dor no local em 10–20%; febre, irritabilidade em menos de 10%; reações alérgicas raras',
    ondeEncontrar: 'UBS e serviços privados'
  },
  {
    nome: 'HPV9 (Nonavalente)',
    idade: '9+ Anos',
    previne: 'Infecções por 9 tipos de HPV (6, 11, 16, 18, 31, 33, 45, 52, 58); amplia proteção contra cânceres HPV-relacionados',
    composicao: 'Similar ao HPV4, mas com cobertura para 9 tipos de HPV',
    indicacao: 'A partir de 9 anos; oferece maior cobertura que HPV4',
    contraindicacao: 'Gestantes; anafilaxia a componente ou dose anterior',
    esquema: '9–14 anos e 11 meses: 2 doses (intervalo 6 meses). A partir dos 15 anos: 3 doses (0–1/2–6 meses)',
    via: 'Intramuscular',
    efeitosAdversos: 'Semelhantes ao HPV4, com bom perfil de segurança',
    ondeEncontrar: 'Serviços privados'
  },
  {
    nome: 'HPV2 (Bivalente)',
    idade: '9+ Anos',
    previne: 'Infecções por HPV tipos 16 e 18 — prevenção de cânceres, especialmente do colo do útero',
    composicao: 'Proteínas L1 dos HPV 16 e 18 + adjuvante AS04 (MPL e alumínio), cloreto de sódio, fosfato de sódio e água para injeção',
    indicacao: 'A partir de 9 anos',
    contraindicacao: 'Gestantes; anafilaxia a componente ou dose anterior',
    esquema: '9–14 anos e 11 meses: 2 doses (intervalo 6 meses). A partir dos 15 anos: 3 doses (0–1/2–6 meses)',
    via: 'Intramuscular',
    efeitosAdversos: 'Dor no local, febre baixa, reações alérgicas leves; bom perfil de segurança geral',
    ondeEncontrar: 'Serviços privados'
  },
  {
    nome: 'dTpa (Tríplice Bacteriana Acelular do Tipo Adulto)',
    idade: '9+ Anos',
    previne: 'Difteria, tétano e coqueluche',
    composicao: 'Vacina inativada com toxoides diftérico (formulação reduzida — "d" minúsculo) e tetânico + componentes acelulares da Bordetella pertussis',
    indicacao: 'Adolescentes e adultos como reforço; gestantes a partir da 20ª semana de gestação; profissionais de saúde que lidam com recém-nascidos',
    contraindicacao: 'Anafilaxia a componente ou dose anterior',
    esquema: 'Dose única ou reforço conforme histórico vacinal',
    via: 'Intramuscular',
    efeitosAdversos: 'Dor, inchaço e vermelhidão no local; febre e mal-estar em menos de 10%; reações alérgicas raras',
    ondeEncontrar: 'UBS (para gestantes e profissionais de saúde) e serviços privados'
  },
  ];