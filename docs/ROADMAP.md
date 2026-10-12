# Roadmap Estratégico de Evolução Técnica e Clínica — PedBox

**Documento:** Plano Diretor de Arquitetura, Ferramentas Clínicas e Governança  
**Versão:** 1.0.0 (Planejamento Plurianual 2026–2028)  
**Status:** Aprovado para Planejamento  
**Classificação:** Estratégico / Confidencial  

---

## 1. Visão Estratégica e Princípios Norteadores

O **PedBox** consolida-se como a principal plataforma digital de suporte à decisão clínica pediátrica e neonatal para médicos, residentes e estudantes de medicina no Brasil. O ecossistema alia rapidez no ponto de cuidado (*point-of-care*) com rigor científico baseado em evidências da Sociedade Brasileira de Pediatria (SBP), Ministério da Saúde (MS), American Academy of Pediatrics (AAP) e Organização Mundial da Saúde (OMS).

Para as próximas fases de desenvolvimento, o roadmap é estruturado sobre **Três Pilares Estratégicos**:

1. **Excelência Arquitetural, Resiliência e Conformidade Regulatória:**  
   Garantir disponibilidade ininterrupta em ambientes críticos (UTI e Pronto-Socorro), segurança defensiva proativa contra ameaças cibernéticas e estrita conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018) e normas internacionais (HIPAA / ISO 27001).

2. **Expansão de Ferramentas Clínicas de Alta Complexidade:**  
   Amadurecer o catálogo com calculadoras voltadas à medicina intensiva pediátrica (UTIP), neonatologia de alto risco, ressuscitação de trauma, emergências metabólicas e suporte avançado à vida.

3. **Governança Clínica Contínua e Segurança do Paciente:**  
   Implementar processos institucionais de validação médica por pares (*peer-review* duplo), rastreabilidade de fontes bibliográficas e verificação automatizada contínua por suítes de casos clínicos sintéticos (*golden datasets*).

---

## 2. Roadmap Arquitetural e de Infraestrutura

A evolução da infraestrutura técnica é dividida em três horizontes temporais, priorizados por criticidade de operação hospitalar e maturidade do produto.

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                   HORIZONTES DA EVOLUÇÃO ARQUITETURAL                       │
├─────────────────────┬───────────────────────────┬───────────────────────────┤
│ Fase 1: Curto Prazo │ Fase 2: Médio Prazo       │ Fase 3: Longo Prazo       │
│ (0 a 3 meses)       │ (3 a 6 meses)             │ (6 a 12 meses)            │
├─────────────────────┼───────────────────────────┼───────────────────────────┤
│ • Invalidação de    │ • Cache distribuído Redis │ • Interoperabilidade HL7/ │
│   sessão avançada   │ • Rate limiting distribuído│   FHIR com prontuários    │
│ • CI/CD com SAST/   │ • Logs estruturados LGPD  │ • Suporte offline         │
│   DAST automatizado │ • Criptografia em repouso │   bidirecional avançado   │
│ • Tipagem TypeScript│ • Telemetria com Open-    │ • SSO hospitalar federado │
│   estrita no core   │   Telemetry / Grafana     │   (SAML 2.0 / OAuth2 CFM) │
└─────────────────────┴───────────────────────────┴───────────────────────────┘
```

### 2.1 Fase 1 — Curto Prazo (0 a 3 meses)

#### A1. Invalidação Centralizada de Sessão e Revogação Ativa de Tokens
- **Objetivo:** Permitir revogação instantânea de sessões médicas ativas quando uma senha for alterada, uma conta for desativada ou houver suspeita de acesso indevido em terminais públicos hospitalares.
- **Implementação:**
  - Migração da verificação de sessão baseada em banco relacional para uma camada rápida em memória com tabela de controle de revogação (*token blacklist / active session tracker*).
  - Endpoint `POST /api/v1/auth/logout-all` para desconectar todos os outros dispositivos conectados com um único clique.
  - Expiração forçada de sessão após inatividade prolongada (15 minutos em abas em segundo plano).
- **Critério de Aceitação:** Logout executado em um navegador invalida imediatamente requisições subsequentes em outros navegadores em menos de 100 ms.

#### A2. Varredura Automatizada de Segurança em CI/CD (DevSecOps)
- **Objetivo:** Prevenir a reintrodução inadvertida de credenciais em texto plano, injeções SQL, dependências vulneráveis e desvios de lint.
- **Implementação:**
  - Integração do **GitHub Actions** com etapas de verificação obrigatórias antes de qualquer merge na branch `main`:
    1. *SAST (Static Application Security Testing):* CodeQL e Semgrep com regras customizadas para detectar segredos hardcoded e chamadas inseguras.
    2. *SCA (Software Composition Analysis):* Trivy e Dependabot para bloquear CVEs conhecidas em pacotes npm.
    3. *DAST (Dynamic Application Security Testing):* Execução de varredura leve com OWASP ZAP contra ambiente de staging temporário.
    4. *Gating Estrito:* Falha em qualquer etapa de segurança, lint (`npm run lint`) ou teste (`npm test`) bloqueia o deploy.
- **Critério de Aceitação:** Zero vulnerabilidades críticas ou altas no pipeline de CI/CD.

#### A3. Migração Gradual para TypeScript Estrito nos Algoritmos Clínicos
- **Objetivo:** Garantir segurança em tempo de compilação para todos os cálculos médicos, eliminando erros sutis de tipagem dinâmica (como concatenar texto com números ou valores `undefined`/`NaN`).
- **Implementação:**
  - Renomeação progressiva de arquivos em `src/lib/` para `.ts` com `strict: true` ativado.
  - Definição de tipos imutáveis para faixas etárias, percentis, unidades de medida e modelos de dados clínicos.
- **Critério de Aceitação:** 100% dos algoritmos em `src/lib/` tipados e compilados sem o uso de `any`.

---

### 2.2 Fase 2 — Médio Prazo (3 a 6 meses)

#### A4. Cache Distribuído e Rate Limiting em Redis
- **Objetivo:** Proteger a infraestrutura contra picos de tráfego (ex: plantões noturnos em grandes hospitais ou campanhas de vacinação) e garantir tempos de resposta de API inferiores a 50 ms.
- **Implementação:**
  - Substituição do armazenamento de rate limit em banco SQL por Redis com algoritmo *Token Bucket*.
  - Cache em memória de diretrizes estáticas, bulários e curvas de crescimento (CDC/WHO/RCPCH), reduzindo a carga no banco de dados relacional em 80%.
- **Critério de Aceitação:** Suporte a 5.000 requisições simultâneas por minuto sem degradação de latência.

#### A5. Auditoria de Conformidade LGPD / HIPAA e Logs Estruturados Imutáveis
- **Objetivo:** Atender às exigências legais da LGPD sobre tratamento de dados sensíveis de saúde e prontuários.
- **Implementação:**
  - Criação de trilha de auditoria (*Audit Trail*) imutável registrando: quem acessou o registro, quando, a partir de qual IP e qual dado foi modificado.
  - Anonimização irreversível ou pseudoanonimização de dados de pacientes em notas e históricos.
  - Implementação de módulo de criptografia de colunas sensíveis em repouso no PostgreSQL utilizando `pgcrypto` (AES-256).
  - Termo explícito de consentimento e política de retenção/expurgo periódico de dados pessoais.
- **Critério de Aceitação:** Relatório automatizado de auditoria exportável em conformidade com as exigências da Autoridade Nacional de Proteção de Dados (ANPD).

#### A6. Observabilidade e Telemetria Hospitalar (OpenTelemetry & Sentry)
- **Objetivo:** Identificar exceções em tempo real e monitorar métricas de Core Web Vitals no ambiente clínico.
- **Implementação:**
  - Instrumentação com OpenTelemetry para rastreamento distribuído de requisições.
  - Integração do Sentry no frontend e backend para alerta imediato de falhas não tratadas na interface médica.
- **Critério de Aceitação:** Detecção e alerta de erros em produção em menos de 60 segundos após a ocorrência.

---

### 2.3 Fase 3 — Longo Prazo (6 a 12 meses)

#### A7. Sincronização Offline Bidirecional Avançada (Offline-First Local Database)
- **Objetivo:** Permitir que o médico use todas as calculadoras, consulte condutas e redija notas clínicas mesmo em subsolos hospitalares, ambulâncias ou UTIs com blindagem eletromagnética e sem sinal de Wi-Fi.
- **Implementação:**
  - Armazenamento local no navegador via IndexedDB com camada PGlite / RxDB.
  - Sincronização em segundo plano (*Background Sync API*) quando a conexão for restabelecida, com resolução determinística de conflitos baseada em carimbos temporais UTC (CRDTs).
- **Critério de Aceitação:** Operação funcional contínua com 100% dos recursos clínicos disponíveis em modo avião.

#### A8. Interoperabilidade com Prontuários Eletrônicos (HL7 / FHIR R4)
- **Objetivo:** Permitir a importação automática de dados do paciente (peso, idade gestacional, exames laboratoriais) de sistemas de prontuário eletrônico (ex: MV Soul, Tasy Philips, Epimed) para as calculadoras da PedBox, e o retorno da prescrição/cálculo diretamente para o prontuário.
- **Implementação:**
  - Criação de adaptadores de integração FHIR R4 (Recursos: `Patient`, `Observation`, `MedicationRequest`).
  - Suporte ao padrão SMART on FHIR para execução do PedBox como aplicativo embutido no prontuário hospitalar.
- **Critério de Aceitação:** Importação com um clique de dados laboratoriais do prontuário para o cálculo do Escore de Rodwell e PEWS.

---

## 3. Roadmap de Ferramentas e Calculadoras Clínicas

A expansão das ferramentas segue as prioridades da prática médica diária de emergencistas, intensivistas, pediatras gerais e cirurgiões infantis.

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    MATRIZ DE PRIORIZAÇÃO DE NOVAS FERRAMENTAS               │
├─────────────────────────┬───────────────────────┬────────────┬──────────────┤
│ Ferramenta / Calculadora│ Especialidade Alvo    │ Criticidade│ Horizonte    │
├─────────────────────────┼───────────────────────┼────────────┼──────────────┤
│ 1. Glasgow Pediátrico   │ Emergência / Neurologia│ Máxima     │ Q1 (Mês 1)   │
│ 2. Reposição Eletrolítica│ Terapia Intensiva/Nefro│ Máxima    │ Q1 (Mês 2)   │
│ 3. Infusões Vasoativas  │ UTIP / Emergência     │ Máxima     │ Q1 (Mês 3)   │
│ 4. Queimados Pediátricos│ Cirurgia / Emergência │ Alta       │ Q2 (Mês 4)   │
│ 5. PIM-3 / PRISM-IV     │ UTI Pediátrica        │ Alta       │ Q2 (Mês 5)   │
│ 6. Jouvet / FOUR Score  │ UTIP / Neurologia     │ Média-Alta │ Q2 (Mês 6)   │
│ 7. Ventilação Mecânica  │ UTIP / Neonatologia   │ Alta       │ Q3 (Mês 7-8) │
│ 8. Nefrologia Avançada  │ Nefrologia Pediátrica │ Média      │ Q3 (Mês 9-10)│
│ 9. Ballard Novo Completo│ Neonatologia          │ Média      │ Q4 (Mês 11)  │
└─────────────────────────┴───────────────────────┴────────────┴──────────────┘
```

### 3.1 Emergência e Terapia Intensiva Pediátrica (UTIP)

#### C1. Escala de Coma de Glasgow Pediátrica (PGCS) Adaptada para Lactentes
- **Indicação Clínica:** Avaliação do nível de consciência e traumatismo cranioencefálico (TCE) em crianças menores de 4 anos e lactentes não-verbais.
- **Especificação Técnica:**
  - Adaptação da resposta verbal: choro consolável (5), choro inconsolável / irritado (4), choro inadequado (3), gemência (2), nenhuma (1).
  - Adaptação da resposta motora: movimentos espontâneos normais (6), retirada ao toque (5), retirada à dor (4), flexão anormal / decorticação (3), extensão anormal / descerebração (2), flacidez (1).
  - Integração com a escala de reatividade pupilar (GCS-P).
- **Referência:** Teasdale G et al. / Holmes JF et al. (PECARN Group).

#### C2. Escala de Coma de Jouvet e FOUR Score Pediátrico (Full Outline of UnResponsiveness)
- **Indicação Clínica:** Avaliação neurológica precisa de pacientes pediátricos intubados em ventilação mecânica na UTIP, superando as limitações do componente verbal do Glasgow.
- **Especificação Técnica:**
  - Quatro componentes pontuados de 0 a 4: Resposta Ocular, Resposta Motora, Reflexos de Tronco Encefálico e Padrão Respiratório.
  - Alertas automáticos para ausência de reflexos de tronco (sugestivo de morte encefálica ou herniação iminente).
- **Referência:** Wijdicks EF et al. / Pediatric validation: Cohen J et al. (Neurocrit Care).

#### C3. Escore PIM-3 (Pediatric Index of Mortality 3) e PRISM-IV
- **Indicação Clínica:** Predição de mortalidade hospitalar na admissão de UTI Pediátrica para avaliação de gravidade e benchmarking de qualidade da unidade.
- **Especificação Técnica:**
  - PIM-3: pressão arterial sistólica, reação pupilar, PaO2/FiO2, excesso de base, motivo de admissão (alto risco / baixo risco), ventilação mecânica na 1ª hora.
  - Cálculo de risco logístico calibrado de óbito.
- **Referência:** Straney L et al. (Lancet Respir Med 2013) / Pollack MM et al. (Pediatr Crit Care Med).

#### C4. Calculadora de Infusões Contínuas e Drogas Vasoativas de Emergência
- **Indicação Clínica:** Titulação precisa de drogas de suporte hemodinâmico e sedoanalgesia em choque séptico, choque cardiogênico e parada cardiorrespiratória.
- **Fármacos Inclusos:**
  - Adrenalina (Epinefrina): 0,05 a 1,0 mcg/kg/min.
  - Noradrenalina (Norepinefrina): 0,05 a 2,0 mcg/kg/min.
  - Dopamina: 2 a 20 mcg/kg/min.
  - Dobutamina: 2,5 a 20 mcg/kg/min.
  - Milrinona: 0,25 a 0,75 mcg/kg/min (com/sem dose de ataque).
  - Nitroprussiato de Sódio e Nitroglicerina.
  - Fentanil, Midazolam, Cetamina e Dexmedetomidina.
- **Especificação Técnica:**
  - Cálculo bidirecional: o médico informa a taxa em mL/h e obtém a dose em mcg/kg/min, ou informa a dose desejada e obtém a taxa de infusão na bomba.
  - Prescrição gerada pronta com cálculo de diluição padronizada (soluções padrão e concentradas para restrição hídrica).
  - Alertas visuais para doses supraterapêuticas ou risco de extravasamento em acesso venoso periférico.
- **Referência:** PALS (Pediatric Advanced Life Support) / Diretrizes SBP de Choque Séptico.

#### C5. Calculadora de Ventilação Mecânica Pediátrica e Índice de Oxigenação (OI / OSI)
- **Indicação Clínica:** Estratificação de gravidade da Síndrome do Desconforto Respiratório Agudo Pediátrico (PARDS) conforme critérios do PALICC-2 (2023).
- **Especificação Técnica:**
  - Índice de Oxigenação: $OI = \frac{MAP \times FiO_2 \times 100}{PaO_2}$
  - Índice de Saturação de Oxigênio (não invasivo): $OSI = \frac{MAP \times FiO_2 \times 100}{SpO_2}$
  - Classificação automática de gravidade (Leve, Moderada, Grave) e recomendação de suporte ventilatório protetor ou indicação de ECMO.
- **Referência:** PALICC-2 Guidelines (Pediatr Crit Care Med 2023).

---

### 3.2 Nefrologia e Manejo Hidroeletrolítico Avançado

#### C6. Calculadora de Reposição Eletrolítica Avançada
- **Indicação Clínica:** Manejo seguro de distúrbios agudos do sódio, potássio e equilíbrio ácido-básico.
- **Módulos:**
  1. *Hiponatremia Aguda Sintomática:* Cálculo de infusão de Solução Salina Hipertônica a 3% (volume em mL = $\Delta Na \times peso \times 0,6 \times 2$) com limitação rígida de taxa de elevação (máximo 8 a 10 mEq/L em 24h) para prevenção de Síndrome de Desmielinização Osmótica (Mielinólise Pontina).
  2. *Déficit de Água Livre na Hipernatremia:* Cálculo do déficit hídrico e taxa de infusão para redução controlada do sódio (máximo 0,5 mEq/L/hora) para evitar edema cerebral iatrogênico.
  3. *Reposição de Potássio na Hipocalemia:* Cálculo da concentração máxima permitida em acesso venoso periférico (40 mEq/L) vs acesso central (60–80 mEq/L) e taxa horária máxima (0,5 mEq/kg/h).
  4. *Correção de Acidose Metabólica Grave:* Cálculo de reposição de Bicarbonato de Sódio 8,4% em acidose com pH < 7,10 e instabilidade hemodinâmica.
- **Referência:** Diretrizes de Nefrologia Pediátrica da SBP e UpToDate Pediatric Fluid Management.

#### C7. Clearance de Creatinina Pediátrico e Equação de Schwartz Atualizada
- **Indicação Clínica:** Avaliação precisa da Taxa de Filtração Glomerular Estimada (TFGe) em crianças e adolescentes.
- **Fórmulas Integradas:**
  - *Schwartz "Bedside" Atualizada (2009):* $eGFR = \frac{0,413 \times Estatura (cm)}{Creatinina Sérica (mg/dL)}$
  - *Fórmula de Schwartz-Lyon (2012) e Equação com Cistatina C:* Maior precisão em faixas etárias extremas e pacientes com alteração de massa muscular.
  - *Estadiamento KDIGO Pediátrico:* Estágios 1 a 5 de Doença Renal Crônica ou classificação de Injúria Renal Aguda (AKIN/KDIGO Pediátrico por débito urinário e creatinina).
- **Referência:** Schwartz GJ et al. (J Am Soc Nephrol 2009) / KDIGO Clinical Practice Guideline.

#### C8. Fração de Excreção de Sódio (FeNa) e Ureia (FeU)
- **Indicação Clínica:** Diferenciação diagnóstica entre Injúria Renal Aguda Pré-Renal e Necrose Tubular Aguda (NTA) intrínseca.
- **Especificação:**
  - $FeNa (\%) = \frac{Na_{urina} \times Cr_{plasma}}{Na_{plasma} \times Cr_{urina}} \times 100$
  - Limiares pediátricos: FeNa < 1% (pré-renal em crianças) vs < 2,5% (em prematuros); FeNa > 2% (lesão renal intrínseca).
  - FeU para pacientes em uso de diuréticos de alça.

---

### 3.3 Cirurgia Pediátrica e Trauma

#### C9. Fórmulas de Ressuscitação de Queimados Pediátricos (Parkland Modificada e Carvajal)
- **Indicação Clínica:** Reposição volêmica rigorosa em grandes queimados pediátricos (Área de Superfície Corporal Queimada - SCQ > 10%).
- **Especificação Técnica:**
  - *Mapeamento de SCQ:* Tabela de Lund-Browder interativa para ajuste dinâmico da superfície corporal conforme a idade (cabeça representa proporcionalmente mais área em lactentes do que em adolescentes).
  - *Fórmula de Parkland Modificada:* 3 a 4 mL/kg/%SCQ de Ringer Lactato nas primeiras 24 horas + Necessidades de Manutenção Basais de Holliday-Segar com soro contendo Glicose a 5% (imperativo em pediatria para prevenir hipoglicemia grave por esgotamento de glicogênio hepático).
  - *Fórmula de Carvajal / Galveston:* Baseada em m² de Superfície Corporal Total ($5000 mL/m^2 SCQ + 2000 mL/m^2 SCT$).
  - *Metas de Débito Urinário:* Exibição de meta pediátrica: 1,0 mL/kg/h em lactentes e 0,5 a 1,0 mL/kg/h em crianças maiores.
- **Referência:** American Burn Association (ABA) / Sociedade Brasileira de Queimaduras (SBQ).

#### C10. Escore de Trauma Pediátrico (Pediatric Trauma Score - PTS)
- **Indicação Clínica:** Triagem rápida de gravidade em trauma pediátrico na sala de emergência.
- **Especificação:**
  - 6 variáveis: Peso Corporal, Via Aérea, Pressão Arterial Sistólica, Sistema Nervoso Central, Ferimentos Abertos e Fraturas Esqueléticas.
  - Pontuação de -6 a +12; PTS <= 8 indica trauma com alto risco de mortalidade e transferência imediata para centro terciário de trauma pediátrico.
- **Referência:** Tepas JJ et al. (J Pediatr Surg).

---

### 3.4 Neonatologia Avançada

#### C11. Curvas de Crescimento de Fenton 2013 e Intergrowth-21st Integradas
- **Indicação Clínica:** Avaliação antropométrica longitudinal de prematuros extremos (de 22 a 50 semanas de idade gestacional pós-menstrual).
- **Especificação:**
  - Curvas de peso, comprimento e perímetro cefálico separadas por sexo.
  - Classificação de Adequação Nutricional Intrauterina: PIG (Pequeno para Idade Gestacional < P10), AIG (Adequado P10–P90) e GIG (Grande > P90).
- **Referência:** Fenton TR, Kim JH (BMC Pediatr 2013) / INTERGROWTH-21st Project.

#### C12. Escore de SNAPPE-II (Score for Neonatal Acute Physiology with Perinatal Extension-II)
- **Indicação Clínica:** Predição de mortalidade neonatal nas primeiras 12 horas de admissão na UTI Neonatal.
- **Especificação:**
  - Coleta de 9 variáveis fisiológicas: PA média, menor temperatura, razão PaO2/FiO2, menor pH sérico, convulsões, débito urinário, peso ao nascer, PIG e Apgar no 5º minuto < 7.
- **Referência:** Richardson DK et al. (Pediatrics 2001).

---

## 4. Recomendações Estruturadas de Governança Clínica

A transição de uma ferramenta informativa para um software médico de classe de suporte à decisão clínica (CDSS) exige processos formais de governança.

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                 CICLO DE GOVERNANÇA CLÍNICA DO PEDBOX                       │
│                                                                             │
│   [ Proposição de ]      [ Parecer Médico ]      [ Implementação ]          │
│   [  Nova Conduta ] ───> [ Duplo Blindado ] ───> [  Algorítmica  ]          │
│                                                          │                  │
│   [ Homologação   ]      [ Monitoramento  ]              ▼                  │
│   [ em Produção   ] <─── [  e Feedback    ] <─── [ Golden Dataset]          │
│     (Anual / SBP)          (Canal Clínico)        (100+ Testes Auto)        │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 4.1 Fluxo Formal de Revisão Médica (*Double Medical Review*)
1. **Comitê Editorial Pediátrico:** Instituir um conselho médico multidisciplinar constituído por no mínimo 3 especialistas certificados pela Sociedade Brasileira de Pediatria (SBP) em:
   - Pediatria Geral e Ambulatorial;
   - Medicina Intensiva Pediátrica (UTIP);
   - Neonatologia e Terapia Intensiva Neonatal.
2. **Revisão Médica Dupla Obrigatória (*Double Sign-off*):**  
   Nenhum algoritmo clínico, calculadora ou diretriz poderá ser publicado em produção sem a aprovação formal documentada de pelo menos **dois revisores médicos independentes**.
3. **Registro de Rastreabilidade Médica:**  
   Cada conduta e calculadora manterá no código e na interface:
   - Nome e número do CRM/RQE dos médicos revisores;
   - Data do parecer favorável;
   - Identificador da versão clínica aprovada.

### 4.2 Versionamento e Rastreabilidade de Diretrizes Clínicas
1. **Identificadores Digitais (DOIs) Obrigatórios:**  
   Todas as referências científicas do PedBox deverão conter link direto para a publicação original indexada (PubMed / SciELO / DOI oficial) ou diretriz emitida pela Sociedade Brasileira de Pediatria (SBP), Ministério da Saúde (MS), AAP ou OMS.
2. **Ciclo de Validade e Expiração de Diretrizes:**  
   Implementar um mecanismo de alerta no painel administrativo sinalizando qualquer protocolo ou calculadora cuja diretriz de referência não tenha sido revisada nos últimos **12 meses**, forçando uma auditoria bibliográfica para incorporar eventuais consensos médicos recém-lançados.

### 4.3 Homologação com Casos Clínicos Sintéticos (*Golden Datasets*)
1. **Construção de Banco de Dados de Testes Clínicos:**  
   Desenvolver uma suíte com mais de **100 casos clínicos simulados** baseados em vinhetas reais, contendo:
   - Pacientes limítrofes (*edge-cases*): prematuros extremos (< 26 semanas), lactentes em choque, adolescentes obesos (> 100 kg), pacientes com insuficiência renal crônica.
   - Resultados esperados validados manualmente por médicos especialistas.
2. **Execução Automatizada a Cada Release:**  
   Os *golden datasets* serão executados automaticamente pelo executor de testes (`npm test`) em toda alteração de código. Caso uma modificação gere discrepância no valor calculado superior a 0,01% ou altere uma classificação categórica, o build será abortado imediatamente.

### 4.4 Disclaimer Legal, Termos de Uso e Gestão de Responsabilidade
1. **Alinhamento com Resoluções do CFM (Conselho Federal de Medicina):**  
   Em conformidade com a Resolução CFM nº 2.314/2022 (Telemedicina e Saúde Digital) e orientações éticas profissionais:
   - A plataforma deve conter termo de responsabilidade claro afirmando que o **PedBox atua exclusivamente como ferramenta de suporte à decisão clínica**, não substituindo a anamnese completa, o exame físico detalhado, a avaliação médica presencial e a soberania inalienável do médico assistente sobre a prescrição e conduta.
   - Consentimento do usuário médico exigido no primeiro login anual.
2. **Bloqueio de Responsabilidade por Uso Indevido:**  
   Aviso explícito em tela de que o software não é destinado ao público leigo para automedicação de crianças.

### 4.5 Canal Direto de Reporte de Discrepância Clínica
1. **Botão de Notificação Contextual:**  
   Inclusão de um botão discreto `"Reportar Inconsistência Clínica"` no rodapé de cada calculadora e conduta médica.
2. **Fluxo de Tratamento de Alertas Médicos:**  
   Ao clicar, o usuário pode descrever o caso e a divergência encontrada. O reporte é gravado com prioridade máxima na tabela administrativa de auditoria, notificando imediatamente o comitê médico para averiguação e emissão de nota técnica ou correção em até 48 horas úteis.

---

## 5. Cronograma Consolidado de Entregas (2026–2028)

| Trimestre | Meta Arquitetural | Meta de Ferramentas Clínicas | Meta de Governança |
|---|---|---|---|
| **2026 Q4** | Invalidação centralizada de sessão; CI/CD com SAST/DAST; TypeScript nos módulos clínicos. | Glasgow Pediátrico Adaptado; Reposição Eletrolítica Avançada; Infusões Contínuas de Emergência. | Comitê médico formalizado; Golden dataset com 100 casos clínicos. |
| **2027 Q1** | Cache e rate limit Redis; Logs de auditoria estruturados LGPD/HIPAA; Criptografia at-rest. | Fórmulas de Queimados Pediátricos; Escore PIM-3 e PRISM-IV; Jouvet / FOUR Score. | Termos de uso CFM 2026 atualizados; Canal de reporte contextual ativo. |
| **2027 Q2** | Telemetria OpenTelemetry & Sentry; Sincronização offline-first PGlite no cliente. | Calculadora de Ventilação Mecânica e Índice de Oxigenação (OI/OSI); Drogas Anticonvulsivantes. | Ciclo anual de revisão das 59 condutas; Selo de acreditação clínica. |
| **2027 Q3–Q4** | Interoperabilidade SMART on FHIR R4; Integração com prontuários eletrônicos (MV/Tasy). | Equação de Schwartz Avançada; Fenton 2013 / Intergrowth-21st; SNAPPE-II; Ballard Novo. | Auditoria forense externa de segurança; Integração oficial com conselhos médicos. |

---

## 6. Conclusão

O cumprimento deste roadmap posicionará a PedBox como o padrão ouro de tecnologia médica pediátrica no Brasil, unindo **segurança da informação de nível bancário**, **acurácia clínica validada cientificamente** e **eficiência operacional** para médicos nos momentos mais decisivos do cuidado à saúde da criança.
