// DADOS DE CONDUTAS E MANEJOS PEDIÁTRICOS

export const CONDUTAS_CATEGORIAS = [
  {
    id: 'neonatal',
    label: 'Neonatal',
    icon: '👶',
    color: 'blue',
    subcategorias: [
      {
        id: 'cuidados-basicos',
        label: 'Cuidados Neonatais Básicos',
        topicos: [
          {
            id: 'adaptacao-neonatal',
            label: 'Adaptação Neonatal',
            conteudo: `## 1. Definição e Contexto Clínico

A adaptação neonatal é um processo fisiológico fundamental que marca a transição do feto à vida extrauterina. Envolve profundas mudanças nos sistemas circulatório, respiratório, metabólico e de termorregulação, exigindo respostas rápidas para a sobrevivência do recém-nascido.

## 2. Fisiopatologia

Durante o nascimento, ocorre o fechamento progressivo dos shunts fetais (ducto arterioso, forame oval e ducto venoso), a desobstrução das vias respiratórias, a remoção do líquido pulmonar, a expansão alveolar e a ativação do surfactante, além do início da termorregulação independente e ajuste do metabolismo energético.

## 3. Mudanças Fisiológicas

### Sistema Circulatório
- Na vida fetal: o sangue contorna os pulmões por meio dos shunts (ducto venoso, forame oval, ducto arterioso), sendo a placenta o principal órgão de troca gasosa.
- Com o nascimento: o clampeamento do cordão umbilical eleva a resistência vascular sistêmica e a primeira inspiração reduz a resistência pulmonar.
- Em poucas horas/dias: pulmões assumem a oxigenação, o ducto arterioso fecha funcionalmente em 24-48h.

### Sistema Respiratório
- No útero: o pulmão é preenchido por líquido, com maturação do surfactante a partir da 34ª semana.
- Após o nascimento: estímulos de frio, toque e hipóxia provocam a primeira respiração.
- Estabilização: padrão respiratório se regulariza em minutos.

### Termorregulação
- Vulnerabilidade: grande superfície corporal/peso, gordura subcutânea escassa e baixa reserva de energia.
- Adaptação: termogênese não-tremor (gordura marrom), vasoconstrição periférica, postura em flexão. Meta: temperatura corporal 36,5–37,5°C.

### Sistema Metabólico
- Transição: interrupção do suprimento de glicose materna leva à ativação da gliconeogênese.
- Hipoglicemia: comum nas primeiras horas; garantir alimentação precoce.

## 4. Escore de APGAR

| Parâmetro | 0 | 1 | 2 |
|---|---|---|---|
| FC | Ausente | <100 bpm | >100 bpm |
| Respiração | Ausente | Irregular/fraca | Forte/choro |
| Tônus | Flácido | Flexão discreta | Flexão ativa |
| Irritabilidade | Ausente | Careta | Choro/espirro |
| Cor | Cianótico/pálido | Corpo róseo/extremidades azuis | Completamente róseo |

- **8–10:** Boa adaptação.
- **4–7:** Adaptação moderada, pode exigir suporte.
- **0–3:** Adaptação deficiente, reanimação imediata.

## 5. Condutas Imediatas na Sala de Parto

- Garantir ambiente aquecido (24-26°C), equipe treinada e material de reanimação disponível.
- Secar o RN vigorosamente, estimular respiração e manter via aérea.
- Clampeamento do cordão entre 1-3 minutos para RN a termo estável.
- Contato pele a pele imediato se RN estável.

## 6. Sinais de Alarme

- **Respiratórios:** Taquipneia (>60 irpm), retrações, gemido, cianose central >10 min, apneia >20s.
- **Circulatórios:** Perfusão capilar >3s, pulsos fracos, palidez, bradicardia persistente <100 bpm.
- **Neurológicos:** Letargia, hipotonia, convulsões, reflexos primitivos ausentes.
- **Metabólicos:** Hipoglicemia sintomática (<45 mg/dL), hipotermia (<36,5°C).`
          },
          {
            id: 'reanimacao-neonatal',
            label: 'Reanimação Neonatal',
            conteudo: `## 1. Definição

A reanimação neonatal é a resposta imediata para restabelecer respiração e circulação em recém-nascidos que falham na transição da vida fetal para neonatal.

**Epidemiologia:**
- 85%: cuidados de rotina
- 10%: passos iniciais
- 3–5%: ventilação com pressão positiva (VPP)
- <1%: massagem cardíaca/medicações

## 2. Algoritmo de Reanimação Neonatal (SBP/AAP 2024)

### Avaliação Inicial (15s)
Pergunte:
1. Gestação ≥34 semanas?
2. Respira/chorando?
3. Tônus adequado?

Se SIM para todas: cuidados de rotina. Se NÃO: inicie **passos iniciais**.

### Passos Iniciais (até 30s)
- Aquecer (calor radiante)
- Posicionar cabeça em leve extensão
- Aspirar boca/nariz só se necessário
- Secar vigorosamente
- Estimular (dorso/plantas dos pés)

### Ventilação com Pressão Positiva (VPP)
- 40–60 ventilações/min
- Pressão inicial: 20–25 cmH₂O (prematuros: 15–20)
- PEEP: 5 cmH₂O

**Após 30s de VPP:**
- FC >100 bpm: desmame progressivo
- FC 60–100 bpm: continue VPP, considere intubação
- FC <60 bpm: **VPP + massagem cardíaca**

### Massagem Cardíaca
- Técnica dos 2 polegares, terço inferior do esterno
- 120/min (3:1) — 3 compressões : 1 ventilação
- Profundidade: 1/3 do tórax

### Medicações
**Adrenalina** (IV, IO ou ET):
- 0,01–0,03 mg/kg (0,1–0,3 mL/kg da sol. 1:10.000)
- Repetir a cada 3–5 min se FC <60 bpm

**Expansores** (SF 0,9% ou RL): 10 mL/kg IV

## 3. Critérios de Interrupção
- 10 minutos de reanimação sem resposta
- Apgar 0 aos 10 minutos (individualizar)
- Malformações incompatíveis com a vida`
          },
          {
            id: 'triagem-neonatal',
            label: 'Triagem Neonatal',
            conteudo: `## Triagem Neonatal

A triagem neonatal (Teste do Pezinho) é um programa de rastreamento populacional que visa identificar precocemente doenças genéticas, metabólicas, infecciosas e endócrinas em recém-nascidos antes do aparecimento de sintomas.

## Doenças Rastreadas (Programa Nacional)

**Fase I:**
- Fenilcetonúria
- Hipotireoidismo Congênito

**Fase II:**
- Doença Falciforme e outras hemoglobinopatias
- Fibrose Cística
- Hiperplasia Adrenal Congênita
- Deficiência de Biotinidase
- Galactosemia

## Momento da Coleta

- Ideal: entre o 3º e o 5º dia de vida (após 48h de alimentação)
- Mínimo: 24h de vida
- Máximo: até o 30º dia para algumas doenças

## Outros Testes de Triagem

- **Teste do Olhinho (Reflexo Vermelho):** Detecta opacidades e alterações oculares. Realizar antes da alta e idealmente no 1º mês.
- **Teste da Orelhinha (TANU):** Triagem auditiva neonatal universal. Antes da alta hospitalar.
- **Teste do Coraçãozinho:** Oximetria de pulso pré e pós-ductal para detecção de cardiopatias congênitas críticas.
- **Teste da Linguinha:** Avaliação do frênulo lingual.`
          }
        ]
      },
      {
        id: 'infeccoes-congenitas',
        label: 'Infecções Congênitas TORCHS',
        topicos: [
          {
            id: 'sifilis-congenita',
            label: 'Sífilis Congênita',
            conteudo: `## Definição

A Sífilis Congênita é uma infecção sistêmica grave causada pela transmissão vertical da bactéria *Treponema pallidum* da gestante infectada para o feto. É completamente prevenível e sua ocorrência é um marcador de falha na qualidade do pré-natal. **Notificação compulsória.**

## Transmissão Vertical
- **Sífilis Primária e Secundária:** Risco de 70–100%.
- **Sífilis Latente Recente:** Risco de 40%.
- **Sífilis Latente Tardia:** Risco de 10%.

## Tratamento Materno Inadequado (qualquer um):
- Ausência de tratamento documentado
- Tratamento com medicamento que não seja Penicilina
- Esquema incompleto ou doses incorretas
- Tratamento nos últimos 30 dias antes do parto
- Não tratamento do(s) parceiro(s)

## Manifestações Clínicas

### Sífilis Congênita Precoce (até 2 anos)
- **Viscerais:** Hepatoesplenomegalia (achado mais comum), linfadenopatia
- **Cutâneo-mucosas:** Pênfigo sifilítico (palmas e plantas), rinite sifilítica ("escorregada"), rágades
- **Ósseas:** Osteocondrite e periostite — **Pseudoparalisia de Parrot**
- **Hematológicas:** Anemia, trombocitopenia
- **Neurológicas:** Meningite, convulsões, hidrocefalia

### Sífilis Congênita Tardia (após 2 anos — Estigmas)
- **Tríade de Hutchinson:** Dentes de Hutchinson + ceratite intersticial + surdez neurossensorial
- **Ósseos:** Tíbia em "lâmina de sabre", fronte olímpica
- **Faciais:** Nariz em "sela"

## Diagnóstico
- **VDRL/RPR:** Triagem e seguimento (quantitativos)
- **FTA-ABS/TP-PA:** Confirmatório (qualitativo)
- RN de mãe com sorologia reagente: comparar VDRL RN vs. mãe
- Títulos do RN 4x maiores que os maternos = altamente sugestivo
- Investigação completa: hemograma, radiografia de ossos longos, punção lombar, RX tórax

## Tratamento

**Penicilina G Cristalina** é o tratamento de escolha (único que atinge níveis adequados no SNC).
- **Neurossífilis ou sintomática:** Penicilina G Cristalina por 10 dias
- **RN assintomático, mãe inadequadamente tratada:** Penicilina G Cristalina 10 dias

## Seguimento
VDRL com 1, 3, 6, 12 e 18 meses. Espera-se negativação por volta dos 12–18 meses.`
          },
          {
            id: 'toxoplasmose-congenita',
            label: 'Toxoplasmose Congênita',
            conteudo: `## Definição

A toxoplasmose congênita é causada pela transmissão vertical do *Toxoplasma gondii* durante a gestação. O risco de transmissão aumenta com a idade gestacional, porém as formas mais graves ocorrem quando a infecção é adquirida no 1º trimestre.

## Manifestações Clínicas

- A maioria dos RN é assintomática ao nascer
- **Tríade clássica (Sabin):** Coriorretinite, hidrocefalia e calcificações intracranianas
- Outras: icterícia, hepatoesplenomegalia, anemia, convulsões, microcefalia

## Diagnóstico
- IgM e IgG anti-*Toxoplasma* no RN
- PCR no líquor e urina
- Fundo de olho, USG craniana, TC de crânio
- Punção lombar

## Tratamento

**Esquema padrão (12 meses):**
- Pirimetamina + Sulfadiazina + Ácido Folínico por 12 meses
- Corticoide (Prednisona 1 mg/kg/dia) nos casos com comprometimento do SNC ou coriorretinite ativa

## Seguimento
- Avaliação oftalmológica regular (risco de novas lesões)
- Avaliação neurológica e desenvolvimento`
          }
        ]
      },
      {
        id: 'patologias-neonatais',
        label: 'Patologias Neonatais Específicas',
        topicos: [
          {
            id: 'ictericia-neonatal',
            label: 'Icterícia Neonatal',
            conteudo: `## 1. Definição

A icterícia neonatal é a coloração amarelada da pele e mucosas por acúmulo de bilirrubina. Afeta 60% dos RN a termo e 80% dos prematuros. Pode evoluir para encefalopatia bilirrubínica (kernicterus) se não tratada adequadamente.

## 2. Classificação

| Tipo | Início | Características | Causas principais |
|---|---|---|---|
| Precoce | <24h | Sempre patológica | Hemólise ABO/Rh, infecções |
| Fisiológica | 24–72h | Benigna, autolimitada | Imaturidade hepática |
| Prolongada | >14d | Requer investigação | Atresia biliar, hipotireoidismo |
| Tardia | >7d | Associada ao aleitamento | Baixa ingesta, desidratação |

## 3. Zonas de Kramer

| Zona | Localização | Bilirrubina aprox. |
|---|---|---|
| 1 | Cabeça e pescoço | ~6 mg/dL |
| 2 | Tórax até umbigo | ~9 mg/dL |
| 3 | Umbigo até joelhos | ~12 mg/dL |
| 4 | Braços e pernas | ~15 mg/dL |
| 5 | Palmas e plantas | >15 mg/dL |

## 4. Sinais de Alerta
- Icterícia precoce (<24h)
- Rápida progressão (>5 mg/dL/dia)
- Zona 4 ou 5 em RN <48h
- Sinais neurológicos (hipotonia, letargia, sucção fraca)

## 5. Investigação Laboratorial
- Bilirrubina total e frações
- Tipagem sanguínea mãe e RN
- Coombs direto
- Hemograma completo e reticulócitos

## 6. Tratamento

### Fototerapia Convencional
- Luz LED azul (460–490 nm)
- Irradiância >30 μW/cm²/nm
- Área exposta máxima + proteção ocular
- Monitorizar bilirrubina 4–6h após início, depois 12/12h

### Exsanguineotransfusão
- Indicações: falha fototerapia, níveis críticos, encefalopatia
- Volume: 160 mL/kg (2x volemia)
- Sangue irradiado, leucodepletado, compatível (<5 dias)

## 7. Suspensão da Fototerapia
- Bilirrubina <13 mg/dL com tendência decrescente por 12–24h

## 8. Orientações aos Pais
- Sinais de alerta: icterícia de rápida progressão, recusa alimentar, letargia`
          },
          {
            id: 'hiperbilirrubinemia-neonatal',
            label: 'Hiperbilirrubinemia Neonatal',
            conteudo: `## Definição

Hiperbilirrubinemia neonatal é o acúmulo de bilirrubina nos tecidos resultando em icterícia. Afeta ~60% dos RN a termo e ~80% dos prematuros. Níveis excessivos de bilirrubina indireta são neurotóxicos e podem causar kernicterus.

## Fisiopatologia

Maior produção (hemólise fisiológica + maior volume eritrocitário) + menor eliminação (imaturidade da UGT) + aumento da circulação êntero-hepática = acúmulo de bilirrubina.

## Fatores de Risco para Hiperbilirrubinemia Significativa
- Icterícia nas primeiras 24–36h
- Doença hemolítica (incompatibilidade Rh, ABO)
- Prematuridade (especialmente 35–36 semanas)
- Dificuldade no aleitamento / perda de peso >7%
- História familiar de irmão com fototerapia
- Cefaloematoma ou equimoses extensas
- Deficiência de G6PD

## Avaliação Diagnóstica

**Solicitar bilirrubina total em RN ≥35 semanas se:**
- Icterícia nas primeiras 24–36h
- Incompatibilidade sanguínea
- Icterícia abaixo da linha mamilar (zona ≥2)
- Perda de peso >7% ou dificuldade na amamentação

## Tratamento

### Fototerapia
- Luz azul (425–475 nm)
- Transforma bilirrubina em isômeros hidrossolúveis
- Eficácia depende da irradiância e área corporal exposta

### Exsanguinotransfusão
- Casos graves sem resposta à fototerapia
- Encefalopatia bilirrubínica aguda

### Imunoglobulina IV
- Doença hemolítica isoimune com ascensão de bilirrubina apesar da fototerapia

## Complicação
**Kernicterus:** Sequela permanente — paralisia cerebral coreoatetoide, surdez neurossensorial, paresia do olhar vertical, displasia do esmalte dentário.

## Prevenção
- Rastreamento universal a cada 12h
- Aleitamento materno frequente (8–12x/dia)
- Avaliação de risco antes da alta
- Seguimento pós-alta em 24–48h`
          },
          {
            id: 'sepse-neonatal',
            label: 'Sepse Neonatal',
            conteudo: `## 1. Definição

Síndrome clínica com sinais de infecção sistêmica e resposta inflamatória desregulada. Principal causa de morbimortalidade no período neonatal.

- **Incidência:** 1–5 por 1.000 nascidos vivos
- **Mortalidade:** 10–50% conforme gravidade
- **Sequelas neurológicas:** 20–50% dos sobreviventes

**Classificação:**
- **Sepse precoce (<72h):** Transmissão vertical (materna)
- **Sepse tardia (>72h):** Transmissão horizontal (nosocomial)

## 2. Etiologia

| Tipo | Principais Agentes |
|---|---|
| Sepse Precoce | *S. agalactiae* (GBS), *E. coli*, *Listeria monocytogenes* |
| Sepse Tardia | *Staphylococcus coagulase-negativa*, *S. aureus*, enterobactérias, *Candida spp.* |

## 3. Fatores de Risco

| Categoria | Fatores |
|---|---|
| Maternos | Corioamnionite, ruptura de membranas >18h, febre intraparto, colonização GBS |
| Neonatais | Prematuridade, baixo peso, asfixia |
| Hospitalares | CVC, VM, ATB prévio, hospitalização prolongada |

## 4. Manifestações Clínicas
- **Respiratórias:** Apneia, taquipneia, gemido
- **Cardiovasculares:** Instabilidade hemodinâmica, má perfusão
- **Neurológicas:** Letargia, convulsões, fontanela abaulada
- **Gastrointestinais:** Distensão, intolerância alimentar
- **Gerais:** Instabilidade térmica, icterícia

## 5. Diagnóstico

| Biomarcador | Normal | Suspeita de Sepse |
|---|---|---|
| PCR | <10 mg/L | >10 mg/L |
| Procalcitonina | <0,5 ng/mL | >2 ng/mL |
| Relação I/T | <0,2 | >0,3 |
| Lactato | <2 mmol/L | >4 mmol/L |

## 6. Manejo
- **Antibioticoterapia empírica imediata** (máximo 1 hora após suspeita)
- Suporte hemodinâmico e ventilatório
- Monitorização contínua

## 7. Prevenção
- **Precoce:** Profilaxia intraparto para GBS positivo
- **Tardia:** Higienização rigorosa das mãos, remoção precoce de cateteres`
          }
        ]
      }
    ]
  },
  {
    id: 'respiratorio',
    label: 'Doenças Respiratórias',
    icon: '🫁',
    color: 'cyan',
    subcategorias: [
      {
        id: 'infeccoes-respiratorias',
        label: 'Infecções Respiratórias',
        topicos: [
          {
            id: 'bronquiolite-viral',
            label: 'Bronquiolite Viral',
            conteudo: `## 1. Definição

Infecção viral respiratória aguda do trato inferior, com inflamação e obstrução dos bronquíolos. Afeta predominantemente lactentes <2 anos, com pico entre 2–6 meses. Principal causa de hospitalização nessa faixa etária.

## 2. Etiologia
- **VSR:** 50–90% dos casos
- **Outros:** Rinovírus, metapneumovírus humano, parainfluenza, influenza, adenovírus
- Coinfecção por múltiplos vírus em até 1/3 dos casos

## 3. Fatores de Risco para Doença Grave
- Idade < 12 semanas (especialmente <3 meses)
- Prematuridade <37 semanas
- Cardiopatia congênita com repercussão hemodinâmica
- Displasia broncopulmonar
- Imunodeficiências, doenças neuromusculares

## 4. Apresentação Clínica

**Pródromo (1–3 dias):** Coriza, espirros, obstrução nasal, tosse, febre baixa

**Fase de vias aéreas inferiores:** Piora da tosse, taquipneia, sibilância, aumento do trabalho respiratório

**Sinais de Desconforto Respiratório:** Tiragens, batimento de asa nasal, gemência, taquipneia, irritabilidade

**Sinais de Gravidade:** Cianose, apneia, letargia

## 5. Diagnóstico

O diagnóstico é **clínico** — sem necessidade de exames rotineiros.

- **Radiografia de tórax:** Apenas em casos graves, dúvida diagnóstica ou suspeita de complicações
- **Testes virais:** Não indicados rotineiramente
- **Oximetria de pulso:** Ferramenta fundamental para avaliação de gravidade

## 6. Tratamento — Medidas de Suporte

✅ **Hidratação** adequada (oral/SNG/IV)
✅ **Desobstrução nasal** com SF 0,9% e aspiração suave
✅ **Oxigenoterapia** para manter SpO₂ ≥ 90%
✅ **Antitérmicos** para febre e conforto

❌ **Broncodilatadores:** Sem benefício consistente — teste terapêutico pode ser considerado com avaliação de resposta
❌ **Corticosteroides:** Não recomendados
❌ **Antibióticos:** Não indicados (a não ser infecção bacteriana associada)
❌ **Antivirais:** Não usar rotineiramente

## 7. Critérios de Hospitalização
- Idade <3 meses
- SpO₂ <90% em ar ambiente
- Desconforto respiratório moderado a grave
- Dificuldade alimentar/recusa, desidratação
- Letargia, apneia
- Fatores de risco para doença grave

**UTI Pediátrica:**
- Apneia
- SpO₂ <92% mesmo com O₂
- pH <7,3 e pCO₂ >60 mmHg
- Instabilidade hemodinâmica`
          },
          {
            id: 'pneumonia',
            label: 'Pneumonia / PAC',
            conteudo: `## 1. Definição e Etiologia

Processo inflamatório agudo do parênquima pulmonar, geralmente infeccioso. Principal causa isolada de mortalidade por infecção em crianças <5 anos.

**Etiologia por faixa etária:**
- **Neonatos (<2 meses):** *S. agalactiae*, bacilos Gram-negativos, *Listeria*
- **Lactentes (2m–2a):** Vírus predominam (VSR, Rinovírus, Influenza); bacteriana: *S. pneumoniae*
- **Pré-escolares (2–5a):** *S. pneumoniae*, etiologia viral ainda frequente
- **Escolares/Adolescentes (>5a):** *S. pneumoniae* + agentes atípicos (*Mycoplasma*, *Chlamydophila*)

## 2. Avaliação Clínica

### Critérios de Taquipneia (OMS)
| Idade | FR |
|---|---|
| <2 meses | ≥60 irpm |
| 2–12 meses | ≥50 irpm |
| 1–5 anos | ≥40 irpm |

### Critérios de Gravidade (Hospitalização — qualquer um)
- Tiragem subcostal
- SpO₂ <90–92% em ar ambiente
- Desconforto respiratório grave (asa nasal, gemência, cianose, apneia)
- Incapacidade de beber, vômitos, prostração, alteração do nível de consciência
- Lactentes <2–3 meses
- Falha terapêutica ambulatorial (48–72h)

### Exames Complementares
- **RX de tórax:** Não necessário na PAC leve-moderada ambulatorial. Indicado na hospitalização, dúvida diagnóstica, falha terapêutica ou suspeita de complicações.
- **Hemograma, PCR:** Não recomendados rotineiramente no ambulatório.

## 3. Tratamento

### Ambulatorial (PAC leve-moderada)
- **1ª escolha:** **Amoxicilina 80–100 mg/kg/dia**
- **>5 anos com quadro atípico (tosse seca, início arrastado):** Azitromicina ou outro macrolídeo

### Hospitalar (PAC grave)
- **Suporte:** O₂ para SpO₂ >92%, hidratação venosa
- **1ª escolha (vacinado):** Penicilina G Cristalina ou Ampicilina
- **Alternativa (não vacinado ou grave):** Ceftriaxona
- **Duração:** 7–10 dias; transição EV→VO na melhora clínica

## 4. Complicação Mais Comum
**Derrame Pleural Parapneumônico** — se purulento (empiema): drenagem torácica

## 5. Prevenção
- Vacinas: Pneumococo (VPC13), Hib, Influenza
- Aleitamento materno
- Higiene das mãos e evitar fumaça de cigarro`
          },
          {
            id: 'faringoamigdalite',
            label: 'Faringoamigdalite Aguda',
            conteudo: `## 1. Definição e Etiologia

Inflamação da faringe e/ou amígdalas palatinas. Uma das queixas mais comuns na prática pediátrica.

- **Viral (70–80%):** Rinovírus, Adenovírus, Influenza, EBV — autolimitada, tratamento sintomático
- **Bacteriana (15–30%):** *Streptococcus pyogenes* (EBHGA) — pico entre 5 e 15 anos — **tratar para prevenir Febre Reumática!**

## 2. Diferenciação Clínica

**Sugestivo de VIRAL:**
- Coriza, tosse, conjuntivite, diarreia
- Início gradual, febre baixa
- Vesículas ou úlceras (Coxsackievírus)

**Sugestivo de EBHGA:**
- Dor de garganta intensa + febre alta (>38,5°C)
- **Ausência** de sintomas virais (sem tosse, sem coriza)
- Exsudato purulento nas amígdalas, petéquias no palato
- Adenomegalia cervical anterior dolorosa, dor abdominal, náuseas/vômitos

## 3. Escore de Centor/McIsaac

| Critério | Pontos |
|---|---|
| Febre >38°C | +1 |
| Ausência de tosse | +1 |
| Linfonodos cervicais aumentados e dolorosos | +1 |
| Edema ou exsudato amigdaliano | +1 |
| Idade 3–14 anos | +1 |

**Interpretação:**
- **0–1 ponto:** Baixa probabilidade EBHGA (<10%) — não testar nem tratar
- **2–3 pontos:** Intermediária — **realizar teste diagnóstico**
- **≥4 pontos:** Alta probabilidade — tratar ou confirmar com teste rápido

## 4. Diagnóstico
- **Teste Rápido de EBHGA:** Rápido, específico >95%. Negativo com alta suspeita = confirmar com cultura
- **Cultura de Orofaringe:** Padrão-ouro (resultado em 24–48h)

## 5. Tratamento

**Faringite Viral:** Apenas sintomático — analgésicos, hidratação. **Antibióticos contraindicados.**

**Faringite Estreptocócica (EBHGA):**
- **1ª escolha:** Amoxicilina oral (palatabilidade) ou Penicilina G Benzatina IM (adesão)
- **Duração:** **10 dias completos** (prevenir Febre Reumática)
- **Alergia não anafilática:** Cefalosporinas de 1ª geração
- **Alergia grave:** Macrolídeos (Azitromicina) ou Clindamicina

## 6. Complicações

**Supurativas:** Abscesso peritonsilar, OMA, sinusite, linfadenite

**Não supurativas:**
- **Febre Reumática Aguda** — **prevenível** com tratamento correto!
- **GNDA** — tratamento da faringite NÃO previne`
          },
          {
            id: 'otite-media-aguda',
            label: 'Otite Média Aguda (OMA)',
            conteudo: `## 1. Definição

Infecção aguda do espaço da orelha média com efusão e sinais/sintomas de inflamação. Causa mais comum de consulta médica e prescrição de ATB em crianças. Pico: 6–24 meses.

## 2. Etiologia
- *Streptococcus pneumoniae* — 30–50%
- *Haemophilus influenzae* — 25–30% (30–40% produzem beta-lactamase)
- *Moraxella catarrhalis* — 10–15% (>90% produzem beta-lactamase)

## 3. Diagnóstico Clínico (3 critérios necessários)
1. **Início agudo** (<48h)
2. **Efusão na orelha média:** Abaulamento da MT (mais específico), nível hidroaéreo, otorreia, mobilidade diminuída
3. **Inflamação:** Hiperemia acentuada da MT ou otalgia significativa

## 4. Analgesia — Pilar Fundamental
- **Mandatória** para todos os pacientes, independentemente do ATB
- Paracetamol ou Ibuprofeno nas primeiras 24–48h

## 5. Antibioticoterapia vs. Observação

**ATB IMEDIATO:**
- Todas as crianças <6 meses
- 6 meses a 2 anos com diagnóstico de certeza (especialmente bilateral)
- Qualquer criança com OMA grave (otalgia mod/grave, febre ≥39°C)
- Otorreia, comorbidades

**OBSERVAÇÃO (Watchful Waiting):**
- 6m a 2a com OMA unilateral, não grave, diagnóstico incerto
- >2 anos com OMA não grave
- Condição: família confiável + acesso fácil à reavaliação

## 6. Escolha do Antibiótico
- **1ª linha:** **Amoxicilina 80–90 mg/kg/dia** (alta dose)
- **2ª linha (falha em 48–72h ou ATB recente):** Amoxicilina-Clavulanato
- **Alergia à penicilina:** Macrolídeos ou cefalosporinas (se não anafilática)

## 7. Prevenção
- Vacina pneumocócica conjugada (VPC13) e Influenza — mais eficazes
- Aleitamento materno
- Evitar tabagismo passivo`
          },
          {
            id: 'tuberculose',
            label: 'Tuberculose',
            conteudo: `## 1. Definição

Doença infecciosa crônica granulomatosa causada pelo *Mycobacterium tuberculosis* (bacilo de Koch). Transmissão aerógena por gotículas de um caso bacilífero.

## 2. Formas Clínicas em Pediatria

**TB Primária (mais comum em crianças):**
- Febre baixa vespertina, irritabilidade, baixo ganho de peso
- Característica radiológica: **adenomegalia hilar/mediastinal**

**TB Pós-Primária (tipo adulto — adolescentes):**
- Lesões nos ápices, cavitação, febre, sudorese noturna, perda de peso
- Altamente bacilífera e transmissível

**Formas Graves:**
- **TB Miliar:** Disseminação hematogênica — múltiplos nódulos nos pulmões
- **Meningoencefalite Tuberculosa:** Alta letalidade, risco de sequelas neurológicas

## 3. Diagnóstico

- **História de contato** com adulto bacilífero — **dado mais importante!**
- **Teste Tuberculínico (PPD):**
  - ≥5 mm: Imunossuprimidos, contato próximo com bacilífero
  - ≥10 mm: Crianças saudáveis
- **RX de Tórax:** Adenomegalia hilar/mediastinal (achado mais comum em crianças)
- **TRM-TB/GeneXpert:** Método de escolha — detecta DNA do *M. tuberculosis* e resistência à Rifampicina em ~2h
- **Sistema de Pontuação do MS:** Para diagnóstico sem confirmação bacteriológica

## 4. Tratamento

### TB Ativa — Esquema Padrão (6 meses)
- **Fase Intensiva (2 meses):** RHZE (Rifampicina + Isoniazida + Pirazinamida + Etambutol)
- **Fase de Manutenção (4 meses):** RH (Rifampicina + Isoniazida)
- Meningoencefálica: 12 meses | Óssea: 9–12 meses

**TDO/DOTS:** Observação direta da tomada do medicamento — estratégia mais eficaz para adesão

### ILTB (Quimioprofilaxia)
- Indicação: Crianças <5 anos, contato de caso bacilífero, PPD ≥5 mm, após excluída doença ativa
- Isoniazida em monoterapia por 6–9 meses

## 5. Prevenção
- **BCG ao nascer:** Previne formas graves (miliar e meníngea) — não previne a infecção
- **Controle de contatos:** Investigação de todos os contatos próximos de caso bacilífero`
          }
        ]
      },
      {
        id: 'doencas-obstrutivas',
        label: 'Doenças Obstrutivas e Crônicas',
        topicos: [
          {
            id: 'asma',
            label: 'Asma',
            conteudo: `## 1. Definição e Diagnóstico

A asma é uma doença heterogênea, caracterizada por **inflamação crônica das vias aéreas**, sintomas respiratórios variáveis e **limitação variável ao fluxo aéreo expiratório**.

**Sintomas típicos:** Sibilância, dispneia, opressão torácica e tosse — variam ao longo do tempo e em intensidade.

### Abordagem Diagnóstica

**≥6 anos e adolescentes:** Confirmar com espirometria
- Aumento do VEF₁ ≥12% do previsto após broncodilatador

**≤5 anos:** Diagnóstico predominantemente clínico
- Sibilância recorrente, tosse noturna, desencadeantes típicos, atopia familiar
- Resposta a CI auxilia o diagnóstico

## 2. Avaliação e Controle

### Controle dos Sintomas (últimas 4 semanas — 4 perguntas)
1. Sintomas diurnos >2x/semana?
2. Despertar noturno por asma?
3. Uso de SABA >2x/semana para alívio?
4. Limitação de atividades?

- **Bem controlada:** 0 alterações
- **Parcialmente controlada:** 1–2 alterações
- **Não controlada:** 3–4 alterações

## 3. Tratamento de Manutenção (GINA)

### Princípio Fundamental de Segurança
**SABA isolado NÃO deve ser a única estratégia.** Todo paciente com asma deve receber alguma forma de CI.

### Vias de Tratamento

**Via 1 (Preferencial — ≥12 anos):**
- **Etapas 1–2:** CI-formoterol em baixa dose sob demanda (resgate anti-inflamatório)
- **Etapas 3–5:** Estratégia MART/SMART (CI-formoterol manutenção + resgate)

**Via 2 (Alternativa):**
- CI diário + SABA sob demanda
- CI-LABA diário + SABA sob demanda

**Crianças 6–11 anos:**
- CI baixa dose + SABA (ou CI-SABA) como resgate
- CI-LABA nas etapas superiores

**≤5 anos:**
- SABA com espaçador + máscara como broncodilatador de resgate
- CI baixa dose como controlador principal

## 4. Manejo da Crise

### Crise Leve
- SABA inalado a cada 20 min por 1h
- Corticoide oral sistêmico

### Crise Moderada/Grave
- SABA + Ipratrópio nebulizados
- Corticoide IV/oral (Prednisolona 1–2 mg/kg)
- O₂ para SpO₂ >92%
- Avaliação de internação

### Critérios de UTI
- SpO₂ <92% com O₂
- Silêncio respiratório
- Rebaixamento do nível de consciência
- Falência respiratória

## 5. Técnica Inalatória

**0–3 anos:** Spray com espaçador + máscara facial
**4–5 anos:** Spray com espaçador + máscara ou bocal
**≥6 anos:** Spray com espaçador + bocal ou dispositivo de pó seco

**Orientações:**
- 1 jato por vez
- 5–6 respirações pelo espaçador
- Bochecho com água após CI (candidíase orofaríngea)`
          }
        ]
      },
      {
        id: 'sindromes-agudas',
        label: 'Síndromes Respiratórias Agudas',
        topicos: [
          {
            id: 'crupe',
            label: 'Laringotraqueíte Viral (Crupe)',
            conteudo: `## 1. Definição

Síndrome clínica aguda com inflamação da laringe e traqueia, causando obstrução das vias aéreas superiores. Causa mais comum de estridor em crianças febris — pico entre 6 meses e 3 anos.

**Tríade Clássica:**
- Tosse "metálica" ou "de cachorro"
- Estridor inspiratório
- Rouquidão

## 2. Etiologia
- **Vírus Parainfluenza (tipos 1, 2 e 3):** ~75% dos casos — pico outono/inverno
- **Outros:** VSR, Influenza A e B, Adenovírus

## 3. Avaliação Clínica — Escore de Westley

| Critério | Pontuação |
|---|---|
| Estridor | 0 (ausente) / 1 (com agitação) / 2 (em repouso) |
| Tiragem | 0 (ausente) / 1 (leve) / 2 (moderada) / 3 (grave) |
| Entrada de Ar | 0 (normal) / 1 (diminuída) / 2 (muito diminuída) |
| Cianose | 0 (ausente) / 4 (com agitação) / 5 (em repouso) |
| Nível de Consciência | 0 (normal) / 5 (alterado) |

**Classificação:**
- **Leve (≤2 pts):** Estridor com agitação, sem tiragem em repouso
- **Moderado (3–7 pts):** Estridor em repouso, tiragem visível
- **Grave (≥8 pts):** Intervenção imediata!

## 4. Tratamento

### Medidas Gerais (todos os graus)
- Manter criança calma no colo dos pais (choro agrava!)
- Antitérmicos
- Umidificação do ar (conforto limitado)

### Crupe Leve (Escore ≤2)
- **Dexametasona oral — dose única**
- Observar e, se estável, alta com orientações

### Crupe Moderado a Grave (Escore ≥3)
- **Dexametasona IM/IV + Nebulização com Epinefrina (Adrenalina)**
- Epinefrina: efeito rápido mas transitório (~2h)
- **⚠️ Observação obrigatória por 3–4h após adrenalina** (risco de efeito rebote)
- O₂ para SpO₂ ≥94%

### Falência Respiratória Iminente
- Intubação orotraqueal por profissional experiente
- Tubo 0,5–1,0 mm menor que o previsto para a idade

## 5. Prognóstico
Doença autolimitada com excelente prognóstico. Resolução em ~1 semana. Intubação necessária em <1% dos hospitalizados.

**Sinal de Torre/Campanário:** Estreitamento subglótico na RX cervical (não é exame de rotina)`
          }
        ]
      }
    ]
  },
  {
    id: 'neurologia',
    label: 'Neurologia',
    icon: '🧠',
    color: 'purple',
    subcategorias: [
      {
        id: 'epilepsias',
        label: 'Epilepsias e Convulsões',
        topicos: [
          {
            id: 'convulsao-febril',
            label: 'Convulsão Febril',
            conteudo: `## 1. Definição

Crise epiléptica em crianças de **6 a 60 meses**, associada a febre (≥38°C), sem infecção do SNC, distúrbio metabólico ou história prévia de convulsão afebril. A emergência neurológica mais comum na pediatria — afeta 2–5% das crianças, pico entre 12–18 meses.

## 2. Classificação

### Convulsão Febril Simples (CFS) — 70–75%
- Tônico-clônica generalizada
- Duração **<15 minutos**
- **Não recorre em 24 horas**
- Recuperação pós-ictal rápida, neurológico normal

### Convulsão Febril Complexa (CFC)
- Duração **>15 minutos**
- Natureza **focal**
- **Recorrência em 24 horas**
- Pode haver paralisia de Todd

## 3. Exames Complementares

**Na CF simples com exame físico/neurológico normais:** exames geralmente desnecessários.

### Punção Lombar — Indicações
- **Fortemente recomendada:** Lactentes <12 meses (sinais meníngeos pouco confiáveis)
- **Considerar:** 12–18 meses
- **Indicada:** Sinais de irritação meníngea, sensório alterado, CF complexa, antibioticoterapia prévia

### Neuroimagem e EEG
- **TC/RM:** Não de rotina. Indicada em CF complexa focal, neurológico alterado, macrocrania
- **EEG:** Não indicado na 1ª CF simples

## 4. Manejo da Crise Aguda (>5 minutos)

1. Via aérea pérvia (decúbito lateral), avaliar ABC
2. O₂ suplementar
3. Glicemia capilar

**Benzodiazepínicos:**
- **Midazolam** intranasal/IM: **0,2 mg/kg** (máx. 10 mg)
- **Diazepam** IV: **0,2–0,3 mg/kg** (máx. 10 mg) ou retal: **0,5 mg/kg**
- **Lorazepam** IV: **0,1 mg/kg** (máx. 4 mg)

Se persistir: protocolo de estado de mal epiléptico (Fenitoína, Fenobarbital ou Ácido Valproico)

## 5. Conduta Pós-Crise
- Investigar e tratar causa da febre
- Antitérmicos para conforto (não previnem recorrência de CF!)
- **Não indicar profilaxia antiepiléptica** na CF simples

## 6. Prognóstico
- Risco de recorrência: 30–40%
- Risco de epilepsia futura: ~2–5% (similar à população geral na CF simples)
- Sem evidências de dano neurológico ou déficit cognitivo após CF simples`
          }
        ]
      },
      {
        id: 'neurodesenvolvimento',
        label: 'Transtornos do Neurodesenvolvimento',
        topicos: [
          {
            id: 'tdah',
            label: 'TDAH',
            conteudo: `## 1. Definição

Transtorno do neurodesenvolvimento com padrão persistente de desatenção, hiperatividade e impulsividade, interferindo no funcionamento/desenvolvimento. Prevalência: ~5% em crianças e adolescentes.

## 2. Fisiopatologia

Disfunção nos circuitos do córtex pré-frontal, corpo estriado e cerebelo, com desequilíbrio nos sistemas de dopamina e noradrenalina — prejudicando atenção, controle de impulsos e função executiva.

## 3. Fatores de Risco
- **Genéticos:** Herdabilidade ~76% — história familiar é o principal fator
- **Pré e perinatais:** Exposição a tabaco, álcool, baixo peso, prematuridade
- **Ambientais:** Neurotoxinas (chumbo), TCE

## 4. Diagnóstico — Critérios DSM-5

**Sintomas em ≥2 ambientes por ≥6 meses:**

### Desatenção
- Dificuldade de manter foco, parece não ouvir, dificuldade em organizar tarefas, perde objetos, facilmente distraído, esquecimentos

### Hiperatividade/Impulsividade
- Inquietação motora, dificuldade em ficar sentado, fala excessiva, responde antes de terminar perguntas, dificuldade em esperar a vez, interrompe conversas

### Diagnóstico Diferencial
- Transtornos de Ansiedade, Depressão
- Transtornos de Aprendizagem (dislexia, discalculia)
- TEA, Transtorno de Oposição Desafiante
- Apneia do sono, deficiências nutricionais, distúrbios da tireoide

## 5. Tratamento

### Não Farmacológico (sempre!)
- **TCC:** Organização, planejamento, regulação emocional
- **Treinamento Parental:** Manejo de comportamentos, rotinas, reforço positivo
- **Intervenções Escolares:** Posicionamento preferencial, tempo extra, instruções segmentadas

### Farmacológico

**1ª Linha (Psicoestimulantes):**
- **Metilfenidato** (Ritalina, Concerta)
- **Lisdexanfetamina**
- Bloqueiam a recaptação de dopamina e noradrenalina

**2ª Linha (Não Estimulantes):**
- **Atomoxetina** (inibidor seletivo da recaptação de noradrenalina)
- Alfa-2-agonistas: Clonidina, Guanfacina
- Bupropiona (adultos com comorbidades depressivas)

## 6. Seguimento
- Consultas mensais inicialmente para ajuste de medicação
- Após estabilização: a cada 3–6 meses
- Monitorar: peso, altura, FC, PA, efeitos adversos e comorbidades`
          },
          {
            id: 'tea',
            label: 'Transtorno do Espectro Autista (TEA)',
            conteudo: `## 1. Definição

Transtorno do neurodesenvolvimento com déficits persistentes na comunicação e interação social + padrões restritos e repetitivos de comportamento. Sinais nos primeiros anos de vida. Prevalência: ~1/36 crianças, mais comum em meninos.

## 2. Critérios Diagnósticos (DSM-5-TR)

### Déficits na Comunicação e Interação Social
- Falha em iniciar/responder a interações sociais
- Contato visual atípico, dificuldade em usar/compreender gestos
- Dificuldades em desenvolver e manter relacionamentos

### Padrões Restritos e Repetitivos de Comportamento
- Estereotipias motoras, ecolalia, uso repetitivo de objetos
- Insistência na rotina, rituais inflexíveis
- Interesses fixos e restritos em intensidade/foco
- Hiper ou hiporreatividade a estímulos sensoriais

## 3. Níveis de Gravidade

- **Nível 1 (apoio):** Dificuldades notáveis em comunicação social; inflexibilidade interfere em 1 contexto
- **Nível 2 (apoio substancial):** Déficits acentuados, óbvios mesmo com suporte, interferem em vários contextos
- **Nível 3 (apoio muito substancial):** Déficits graves, interferem em todos os domínios

## 4. Avaliação

**Sinais de Alerta no 1º ano:**
- Ausência de balbucio com 12 meses
- Ausência de gestos (apontar, acenar) com 12 meses
- Ausência de palavras únicas com 16 meses
- Ausência de frases com 2 palavras com 24 meses
- **Qualquer perda de habilidade de linguagem ou social**

**Exames:**
- Avaliação audiológica (excluir surdez)
- Genética: microarray cromossômico, X frágil (com dismorfismos ou DI)
- EEG: na suspeita de epilepsia ou regressão

## 5. Tratamento

### Intervenções Não Farmacológicas (1ª linha)
- **ABA:** Maior evidência — melhora habilidades sociais, comunicação, adaptativas
- **Terapia da Fala e Linguagem**
- **Terapia Ocupacional:** Integração sensorial, habilidades motoras finas
- **Intervenções educacionais + suporte psicossocial**

### Farmacológico (comorbidades e sintomas-alvo)
- **Irritabilidade/Agressividade:** Risperidona, Aripiprazol (aprovados para essa indicação)
- **TDAH comórbido:** Metilfenidato (maior risco de irritabilidade/insônia)
- **Comportamentos repetitivos/Ansiedade:** ISRS

## 6. Comorbidades Comuns
Epilepsia, transtornos do sono, problemas gastrintestinais, TDAH, ansiedade, depressão, deficiência intelectual`
          }
        ]
      }
    ]
  },
  {
    id: 'hematologia',
    label: 'Hematologia',
    icon: '🩸',
    color: 'red',
    subcategorias: [
      {
        id: 'anemias',
        label: 'Anemias e Carências',
        topicos: [
          {
            id: 'anemia-ferropriva',
            label: 'Anemia Ferropriva',
            conteudo: `## 1. Definição

Etapa final da deficiência de ferro, com redução da hemoglobina a níveis insuficientes para atender às necessidades fisiológicas. Carência nutricional de maior prevalência global — afeta desproporcionalmente crianças nos primeiros anos de vida.

## 2. Fisiopatologia — 3 Estágios

1. **Depleção dos estoques:** Redução da ferritina, sem comprometimento funcional
2. **Eritropoiese ferro-deficiente:** Estoques esgotados, queda do ferro sérico e saturação de transferrina
3. **Anemia ferropriva:** Produção de Hb insuficiente — eritrócitos microcíticos e hipocrômicos

## 3. Critérios Diagnósticos de Anemia (OMS)

| Faixa Etária | Hemoglobina |
|---|---|
| 6 meses a 5 anos | <11,0 g/dL |
| 5 a 11 anos | <11,5 g/dL |
| 12 a 14 anos | <12,0 g/dL |

## 4. Exames Laboratoriais

- **Hemograma:** Anemia microcítica (VCM <80 fL), hipocrômica (HCM <27 pg), RDW elevado, plaquetose reativa
- **Ferritina sérica:** Primeiro a se alterar — <12 ng/mL em <5 anos = depleção
- **Ferro sérico:** Reduzido
- **Saturação de transferrina:** <16%
- **TIBC:** Aumentado

## 5. Tratamento

### Via Oral (1ª escolha)
- **Crianças:** 3–5 mg/kg/dia de ferro elementar
- **Fracionamento:** 2–3 tomadas para reduzir efeitos GI
- **Administrar em jejum** (1h antes ou 2h após refeições)
- **Potencializadores:** Vitamina C (suco cítrico) — aumenta absorção
- **Inibidores:** Leite/derivados, antiácidos, chás, café, cereais — evitar

**Formulações:**
- **Sulfato Ferroso:** Referência (20% Fe elementar), menor custo
- **Ferro Polimaltosado:** Melhor tolerabilidade, pode ser dado com refeições
- **Ferro Quelato (Bisglicinato):** Alta biodisponibilidade

### Via Parenteral (IV) — Indicações
- Intolerância grave à via oral
- Síndromes de má absorção (DII, doença celíaca, cirurgia bariátrica)
- Necessidade de reposição rápida
- Anemia refratária ao tratamento oral

### Duração do Tratamento
- Normalização da Hb: 1–2 meses
- **Manter por mais 2–6 meses** após normalização do hemograma (repor estoques!)
- Meta: Ferritina sérica adequada

## 6. Profilaxia (SBP 2026)

| População | Dose | Início/Duração |
|---|---|---|
| RN a termo saudável | 10–12,5 mg/dia (DOSE FIXA) | 6 meses, em 2 ciclos de 3 meses |
| Prematuro/BPN <2.500g | 2–4 mg/kg/dia conforme peso | A partir de 30 dias por 1 ano |

## 7. Monitoramento
- Pico reticulocitário: 7º–10º dia
- Aumento de Hb: esperar 1–2 g/dL após 30–45 dias`
          },
          {
            id: 'anemia-falciforme',
            label: 'Anemia Falciforme',
            conteudo: `## 1. Definição

Hemoglobinopatia genética de herança autossômica recessiva com hemoglobina S (HbS). A HbS sob baixa oxigenação polimeriza-se, deformando as hemácias (foice). Causa anemia hemolítica crônica e vaso-oclusão.

## 2. Manifestações Agudas

### Crise Vaso-Oclusiva (CVO) — Mais Comum
- Dor súbita e intensa de caráter isquêmico (ossos, articulações, tórax, abdome)
- Desencadeantes: infecções, frio, desidratação, estresse

### Síndrome Torácica Aguda (STA) — Alta Mortalidade
- Novo infiltrado no RX + febre ≥38,5°C, tosse, dor torácica, dispneia ou hipoxemia

### Sequestro Esplênico Agudo
- Mais comum 3 meses–5 anos
- Aumento súbito do baço + hipovolemia
- Queda abrupta da Hb >2 g/dL

### AVC — Muito Grave
- Pico na 1ª década de vida
- Isquêmico ou hemorrágico — hemiparesia, afasia, convulsões

### Crise Aplásica
- Parvovírus B19 — reticulocitopenia acentuada (<1%)

## 3. Cuidados de Manutenção

**Penicilinoterapia Profilática (a partir do diagnóstico até 5 anos):**
- Penicilina V oral: 125 mg 12/12h (<3 anos) → 250 mg 12/12h (3–5 anos)

**Ácido Fólico:** 1 mg/dia (<1 ano) → 5 mg/dia (>1 ano)

**Imunização Especial:** VPC13/15, VPP23, meningocócica ACWY, meningocócica B, Hib, Influenza anual

**Doppler Transcraniano (DTC):** Rastreamento anual 2–16 anos (HbSS/Sβ⁰)

## 4. Terapia Modificadora

### Hidroxiureia
- Aumenta HbF, reduz polimerização, diminui hemólise e inflamação
- **Indicações:** Crises recorrentes (>3/ano), STA prévia, anemia grave, prevenção secundária de AVC
- **Dose inicial:** 15–20 mg/kg/dia VO em dose única
- **Monitoramento:** Hemograma a cada 2–4 semanas no ajuste, depois 2–3 meses

### Transfusão — Indicações Crônicas
- Prevenção primária/secundária de AVC
- Meta: HbS <30%, Hb total 9–10 g/dL`
          },
          {
            id: 'crises-falcemicas',
            label: 'Crises Falcêmicas — Manejo',
            conteudo: `## Manejo de Emergência das Crises Falcêmicas

## Princípios Gerais
- **Analgesia nas primeiras 60 minutos** na chegada ao serviço
- Hidratação: 1–1,5x necessidades basais (evitar sobrecarga → STA)
- O₂ para SpO₂ >95%
- ATB precoce se febre (>38,0°C = emergência médica na DF)

## Crise Vaso-Oclusiva Álgica

### Analgesia Escalonada
| Intensidade | Medicação |
|---|---|
| Leve | Dipirona, Paracetamol ou Ibuprofeno |
| Moderada/Intensa | **Morfina 0,1–0,2 mg/kg/dose EV 2/2h ou 4/4h** |
| Após melhora | Tramadol 5 mg/kg/dia EV 6/6h |

**Corticoide:** Considerar Metilprednisolona 2 mg/kg/dia em dor intratável >72h (atenção ao rebote)

**Transfusão:** Apenas se dor intratável, queda de Hb >2 g/dL ou complicações. CH deleucotizado/fenotipado 10 mL/kg

## Síndrome Torácica Aguda — Internação Obrigatória
- **ATB:** Ceftriaxona 100 mg/kg/dia + Macrolídeo (se >10 anos ou grave — cobrir *Mycoplasma*)
- **Transfusão:** Manter Hb ~10 g/dL; considerar transfusão de troca parcial se grave
- **O₂** se SpO₂ <92%; fisioterapia respiratória

## Sequestro Esplênico — Emergência
- Expansão SF 0,9% 20 mL/kg se choque
- **Transfusão cuidadosa:** Alíquotas de 5 mL/kg (risco de hiperviscosidade)
- Medir tamanho do baço com fita métrica
- Planejar esplenectomia após estabilização

## Crise Aplásica
- Transfusão CH deleucotizado/fenotipado 10 mL/kg
- **Isolamento de gotículas** (Parvovírus B19)

## AVC
- Transfusão simples 10 mL/kg (Hb ~10 g/dL)
- TC de crânio urgente
- Regime de transfusão crônica (prevenção secundária — HbS <30%)`
          }
        ]
      }
    ]
  },
  {
    id: 'nefrologia',
    label: 'Nefrologia e Urologia',
    icon: '🫘',
    color: 'teal',
    subcategorias: [
      {
        id: 'itu',
        label: 'Infecções do Trato Urinário',
        topicos: [
          {
            id: 'infeccao-trato-urinario',
            label: 'Infecção do Trato Urinário (ITU)',
            conteudo: `## 1. Definição

Presença e multiplicação de microrganismos no trato urinário, confirmada por urocultura. Na infância pode resultar em cicatriz renal, hipertensão e DRC se manejada tardiamente.

## 2. Epidemiologia e Fatores de Risco
- **Masculino <6m:** Fimose, anomalias anatômicas
- **Feminino após 1a:** Uretra curta
- **Anatômicos:** RVU, válvula de uretra posterior, hidronefrose, uropatia obstrutiva
- **Funcionais:** Disfunção miccional, constipação, estase urinária
- **Sistêmicos:** Prematuridade, imunossupressão, diabetes

## 3. Classificação
- **Cistite (baixa):** Disúria/polaciúria, sem febre alta
- **Pielonefrite (alta):** Febre ≥38,5°C + dor lombar/flanco ± toxemia
  - *Complicada:* Uropatia obstrutiva, RVU grau III-V, nefrolitíase, falha terapêutica
- **Bacteriúria assintomática:** Tratar apenas gestantes ou pré-procedimento

## 4. Apresentação Clínica por Faixa Etária
- **Neonatos:** Febre/hipotermia, icterícia, sepse
- **1–24m:** Febre sem foco, irritabilidade, vômitos
- **2–5a:** Disúria, polaciúria, enurese secundária
- **>5a:** Cistite ou pielonefrite clássica

## 5. Diagnóstico

**Coleta de urina:**
- **PSP:** Qualquer crescimento
- **Cateterismo:** ≥10⁴ UFC/mL
- **Jato médio:** ≥10⁵ UFC/mL

**EAS:** Piúria >5–10 leucócitos/campo ou nitrito positivo reforçam suspeita

**Imagem:**
- **USG renal:** Até 4 semanas após 1ª ITU febril <2 anos, ou se complicação
- **UCM:** Se USG alterada, ITU febril recorrente ou RVU suspeito
- **DMSA 4–6m** após pielonefrite: avaliar cicatriz renal

## 6. Indicações de Internação
- <2 meses
- Toxemia/sepse
- Vômitos persistentes
- Uropatia obstrutiva
- Falha VO
- Imunodeficiência

## 7. Tratamento
- **Ambulatorial:** ATB VO por 7–10 dias, reavaliar em 48–72h
- **Hospitalar:** ATB EV 2–4 dias → VO quando afebril ≥24h e tolerando dieta; total 10–14 dias

## 8. Profilaxia Antimicrobiana (Avaliação Nefropediátrica)
- RVU grau III-V
- ≥2 ITU febris em 6m ou ≥3 cistites em 12m
- Anomalias urológicas complexas

**Esquemas noturnos:** Nitrofurantoína 1–2 mg/kg ou SMX-TMP 2 mg/kg (componente TMP)`
          }
        ]
      },
      {
        id: 'glomerulopatias',
        label: 'Glomerulopatias',
        topicos: [
          {
            id: 'sindrome-nefrotica',
            label: 'Síndrome Nefrótica',
            conteudo: `## 1. Definição

Glomerulopatia com aumento da permeabilidade da barreira de filtração a proteínas, resultando em proteinúria maciça e consequências sistêmicas.

**Critérios diagnósticos:**
- **uPCR ≥ 2,0 mg/mg** na 1ª urina da manhã (equivale a ≥40 mg/m²/h)
- **Albuminemia <3,0 g/dL**
- **Edema:** Generalizado (periorbital, MMII, genitália), ascite, derrames
- Hiperlipidemia, hipercoagulabilidade

## 2. Etiologia

**Primária (idiopática) — mais comum 1–10 anos:**
- **Doença de Lesões Mínimas (DLM):** Causa mais comum; excelente resposta a corticosteroides
- **GESF:** Mais associada à corticorresistência e pior prognóstico

**Secundária:** Suspeitar em sinais sistêmicos, idade atípica, complemento baixo, hematúria significativa — LES, vasculite por IgA, infecções, drogas

**Congênita/Genética:** Em <1 ano, alta probabilidade genética; encaminhar para nefrologia pediátrica

## 3. Avaliação Inicial

**Exames essenciais:**
- EAS (proteinúria + hematúria)
- uPCR (1ª urina da manhã)
- Albumina sérica, perfil lipídico
- Ureia/creatinina, eletrólitos
- Hemograma, C3/C4 (se suspeita secundária)

**Biópsia renal — considerar quando:**
- Idade ≥12 anos na apresentação
- <1 ano (encaminhar para centro especializado)
- **Corticorresistência**
- Sinais atípicos (hematúria macroscópica, hipocomplementemia, sintomas sistêmicos, insuficiência renal)

## 4. Tratamento

### Definições
- **Remissão completa:** Fita urinária negativa/traços por ≥3 dias consecutivos
- **Recaída:** Proteinúria em faixa nefrótica (fita ≥3+ por 3 dias)
- **Corticossensível (SSNS):** Remissão completa em até 4 semanas com prednisona
- **Corticorresistente (SRNS):** Sem remissão no tempo esperado

### Primeiro Episódio (SSNS)
**Prednisona ou Prednisolona VO, dose única pela manhã:**
- **Fase diária (4–6 semanas):** 60 mg/m²/dia ou 2 mg/kg/dia (máx. 60 mg/dia)
- **Fase em dias alternados (4–6 semanas):** 40 mg/m² ou 1,5 mg/kg (máx. 40 mg) em dias alternados
- **Total:** 8–12 semanas

### Recaídas (SSNS)
- 60 mg/m²/dia ou 2 mg/kg/dia (máx. 60 mg/dia) até remissão completa por ≥3 dias
- Após: 40 mg/m² em dias alternados por 4 semanas

### Quando Usar Poupadores de Corticoide
**Indicações:** Recidivante frequente (FRNS) ou corticodependente (SDNS) com eventos adversos graves

**Opções:** Ciclosporina, Tacrolimo, Ciclofosfamida, MMF, Rituximabe`
          },
          {
            id: 'gnpe',
            label: 'Glomerulonefrite Pós-Estreptocócica (GNPE)',
            conteudo: `## 1. Definição

Protótipo da síndrome nefrítica aguda na infância. Glomerulopatia por imunocomplexos desencadeada por cepas nefritogênicas do *Streptococcus pyogenes* (EBHGA).

**Período de Latência:**
- **Após Faringoamigdalite:** 1–3 semanas
- **Após Piodermite (impetigo):** 3–6 semanas

## 2. Manifestações Clínicas (Síndrome Nefrítica Clássica)
- **Hematúria:** Universal — urina "cor de Coca-Cola"
- **Edema:** Início súbito, periorbital matutino, pode evoluir para anasarca
- **Hipertensão Arterial:** 60–80% dos casos — pode ser a complicação mais grave
- **Oligúria**

## 3. Diagnóstico Laboratorial
- **EAS:** Hematúria com dismorfismo eritrocitário + **cilindros hemáticos** (patognomônicos!) + proteinúria
- **Função Renal:** Elevação transitória de ureia e creatinina
- **ASO:** Elevada (infecção faríngea) | **Anti-DNase B:** (infecção de pele)
- **C3 baixo em >90% dos casos** — normalização em 6–8 semanas confirma GNPE
  - ⚠️ C3 persistentemente baixo >8–12 semanas → investigar outras glomerulopatias (GNMP)

**Biópsia:** Raramente indicada em crianças com quadro típico

## 4. Tratamento — Exclusivamente de Suporte

**Não existe tratamento específico para a lesão glomerular.**

### Hipervolemia e Edema
- **Restrição hídrica e salina** (medida mais importante)
- Volume = diurese prévia + perdas insensíveis (~400 mL/m²/SC)
- **Furosemida** (oral ou IV em casos graves)

### Hipertensão Arterial
- Restrição de sal + diuréticos
- Anlodipino ou Enalapril se necessário

### Antibioticoterapia
- Apenas se **infecção estreptocócica ativa** — Penicilina ou Amoxicilina por 10 dias
- Erradica a bactéria e previne Febre Reumática — **NÃO altera o curso renal já estabelecido**

## 5. Prognóstico
**Excelente em crianças — >95% recuperam completamente sem sequelas.**

Seguimento ambulatorial para monitorar PA e normalização dos exames de urina`
          }
        ]
      }
    ]
  }
];