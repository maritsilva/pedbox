# Relatório Executivo de Auditoria Técnica e Integridade Clínica — PedBox

**Projeto:** Ecossistema Full-Stack PedBox (Node.js, Express, PostgreSQL/PGlite, React 18, Vite e TailwindCSS)  
**Versão do Documento:** 1.0.0 (Consolidado Pós-Remediação de Marcos M1–M4)  
**Data da Auditoria:** 12 de Outubro de 2026  
**Responsável:** Equipe de Engenharia, Auditoria Forense e Governança Clínica  
**Classificação:** Confidencial / Relatório Técnico e Executivo  

---

## 1. Sumário Executivo

Este documento apresenta o resultado consolidado da **Auditoria Profunda de Código, Segurança e Integridade Clínica** realizada no ecossistema PedBox. A auditoria abrangeu a infraestrutura de backend (60 endpoints em `/api/v1/*`, modelos de autenticação e controle de acesso, banco de dados e cabeçalhos HTTP), o frontend SPA (React 18, Vite, rotas, componentes de interface e arquitetura de empacotamento) e a camada de suporte à decisão médica (48 ferramentas interativas, incluindo 36 calculadoras clínicas registradas e 59 condutas clínicas divididas entre Neonatologia e Cirurgia Pediátrica).

O objetivo primordial foi identificar vulnerabilidades de segurança da informação, falhas em controle de acesso baseado em papéis (RBAC), falhas de cálculo em algoritmos médicos que pudessem comprometer a integridade de pacientes pediátricos e recém-nascidos, gargalos de performance e desvios de boas práticas no código-fonte.

### 1.1 Indicadores e Métricas Consolidadas

| Indicador | Estado Inicial (Pré-Auditoria) | Estado Final (Pós-Remediação) | Variação / Impacto |
|---|---|---|---|
| **Vulnerabilidades Críticas** | 2 ativas | **0 ativas (2 remediadas)** | 100% de mitigação em brechas críticas de acesso e segredos |
| **Vulnerabilidades de Alta Severidade** | 5 ativas | **0 ativas (5 remediadas)** | 100% de correção em segurança de sessão e algoritmos clínicos |
| **Vulnerabilidades de Média Severidade** | 10 ativas | **0 ativas (10 remediadas)** | 100% de correção em schemas, vazamentos e consistência de dados |
| **Itens de Baixa Severidade / Higiene** | 5 grupos de problemas | **0 ativos (5 remediados)** | Código limpo, remoção de arquivos mortos e PWA em conformidade |
| **Suíte de Testes Unitários (`npm test`)** | 92 aprovados (13 suítes) | **132 aprovados (100% pass, 0 falhas)** | +40 novos testes automatizados de segurança e cálculo clínico |
| **Linter Estrito (`npm run lint` / ESLint)** | 33 advertências (com `--quiet`) | **0 erros, 0 advertências** | Rigor estrito sem supressão de warnings no pipeline |
| **Tamanho do Bundle Inicial (`index.js`)** | 2.172 kB (2.17 MB) | **80.85 kB** | **Redução de 96,3%** no carregamento inicial da aplicação |
| **Alerta de Chunks > 500 kB no Vite** | 1 chunk de 2.17 MB violando | **0 violações** (maior chunk: 478 kB) | Cumprimento rigoroso do limiar de performance móvel |
| **Arquivos Mortos / Código Órfão** | 10 arquivos legados (~117 KB) | **0 arquivos órfãos (10 excluídos)** | Repositório enxuto e redução da superfície de ataque |
| **Condutas Clínicas Catalogadas** | 59 condutas (29 Neo + 30 Cirurgia) | **59 condutas 100% íntegras** | Importações ESM corrigidas com extensões explícitas `.js` |
| **PWA Manifest (`manifest.json`)** | Ausente (erro 404 / SPA fallback) | **Implementado e validado** | Instalação nativa em Android e iOS viabilizada |

---

## 2. Matriz Consolidada de Achados por Severidade

A auditoria categorizou todos os achados estritamente em quatro níveis de severidade, adotando os padrões internacionais de segurança (CVSS v3.1 / OWASP Top 10) e matrizes de risco clínico e de segurança do paciente da Organização Mundial da Saúde (OMS / WHO Patient Safety Curriculum).

```
┌────────────────────────────────────────────────────────────────────────┐
│                      DISTRIBUIÇÃO DE ACHADOS                           │
├───────────────────────┬──────────────┬──────────────┬──────────────────┤
│ Severidade            │ Identificados│ Remediados   │ Eficácia         │
├───────────────────────┼──────────────┼──────────────┼──────────────────┤
│ Crítica (Critical)    │      2       │      2       │ 100% Concluído   │
│ Alta (High)           │      5       │      5       │ 100% Concluído   │
│ Média (Medium)        │     10       │     10       │ 100% Concluído   │
│ Baixa / Higiene       │      5       │      5       │ 100% Concluído   │
├───────────────────────┼──────────────┼──────────────┼──────────────────┤
│ TOTAL                 │     22       │     22       │ 100% RESOLVIDO   │
└───────────────────────┴──────────────┴──────────────┴──────────────────┘
```

---

## 3. Detalhamento dos Achados e Remediações

### 3.1 Severidade Crítica (Critical)

#### [SEC-CRIT-01] Credencial SMTP com Senha em Texto Plano no Código-Fonte
- **Classificação:** Segurança da Informação / Vazamento de Credenciais (CWE-798 / OWASP A07:2021)
- **Vulnerabilidade:** A configuração do serviço de e-mail em `server/config.js` continha uma credencial de produção codificada diretamente no repositório como fallback padrão em caso de ausência de variável de ambiente:
  ```javascript
  // Código vulnerável anterior (server/config.js:17):
  smtpUrl: env.SMTP_URL || (production ? 'smtp://pedbox.app:NWGhtLs7fvupCNYN@mail.smtp2go.com:2525' : undefined),
  ```
- **Risco de Segurança:** Exposição do usuário `pedbox.app` e da senha `NWGhtLs7fvupCNYN` do provedor SMTP2GO. Qualquer indivíduo com acesso de leitura ao código-fonte poderia utilizar a credencial para disparar campanhas massivas de spam, phishing ou ataques de engenharia social sob a identidade e domínio oficial da PedBox, gerando bloqueio do domínio em listas globais (RBL) e quebra de conformidade regulatória.
- **Localização Exata:** `server/config.js` (linha 17).
- **Remediação Aplicada:** A credencial foi completamente erradicada do código-fonte. A propriedade `smtpUrl` agora é preenchida exclusivamente pela variável de ambiente:
  ```javascript
  // Código seguro remediado (server/config.js:17):
  smtpUrl: env.SMTP_URL || undefined,
  ```
  Caso a variável não seja configurada em tempo de execução, os endpoints de envio de mensagem de contato respondem com HTTP 503 (`Serviço de envio indisponível temporariamente.`), sem vazamentos e sem falhas em cascata.
- **Status de Verificação:** **Resolvido e Auditado.** A busca global por `NWGhtLs7fvupCNYN` no repositório retorna 0 ocorrências. A suíte de testes em `tests/api.test.js` e `tests/adversarial-security.test.js` confirma o comportamento esperado.

---

#### [SEC-CRIT-02] Escalação Pública de Privilégio para Administrador no Cadastro
- **Classificação:** Quebra de Controle de Acesso / Escalação de Privilégios (CWE-284 / CWE-269 / OWASP A01:2021)
- **Vulnerabilidade:** O endpoint público de registro de usuários (`POST /api/v1/auth/register`) continha uma condicional hardcoded que promovia o usuário automaticamente ao papel de administrador caso o e-mail submetido coincidisse com a string `'marina@pedbox.app'`:
  ```javascript
  // Código vulnerável anterior (server/auth.js:147):
  const role = cleanEmail === 'marina@pedbox.app' ? 'admin' : 'user';
  ```
- **Risco de Segurança:** Como a rota pública de registro não exigia prova de posse prévia do e-mail nem verificação em duas etapas (2FA), qualquer atacante anônimo na internet podia registrar uma conta com o e-mail da administradora principal, definindo sua própria senha. Com isso, o atacante obtinha imediatamente privilégios de `admin`, ganhando acesso total ao dashboard administrativo, dados de telemetria, configurações e mensagens de contato de pacientes e usuários.
- **Localização Exata:** `server/auth.js` (linha 147 anterior).
- **Remediação Aplicada:** Removida a checagem por string. Toda nova conta criada via auto-registro recebe incondicionalmente `role: 'user'`:
  ```javascript
  // Código seguro remediado (server/auth.js):
  const role = 'user';
  ```
  A concessão de privilégios de administrador agora é estritamente restrita a intervenções autorizadas via banco de dados ou pelo utilitário administrativo de linha de comando (`node scripts/set-admin.js <USER_ID> admin`).
- **Status de Verificação:** **Resolvido e Auditado.** Coberto pelos testes `tests/auth-local.test.js` (passos 7 e 8) e `tests/adversarial-security.test.js` (testes 4.1 a 4.3), assegurando que o registro com `marina@pedbox.app` produz `role: 'user'` e que a promoção somente ocorre por intervenção direta no banco.

---

### 3.2 Severidade Alta (High)

#### [SEC-HIGH-01] Escalação e Rebaixamento de Privilégios no Endpoint PATCH /api/v1/me
- **Classificação:** Controle de Acesso Quebrado / Modificação Não Autorizada de Perfil (CWE-269 / OWASP A01:2021)
- **Vulnerabilidade:** Na rota de atualização de perfil do próprio usuário autenticado (`PATCH /api/v1/me`), o código calculava novamente a `role` e atualizava a coluna na tabela `users`:
  ```javascript
  // Código vulnerável anterior (server/auth.js:114-123):
  const isMasterAdmin = cleanEmail.toLowerCase() === 'marina@pedbox.app';
  const role = isMasterAdmin ? 'admin' : (req.user.id === 'local-developer' ? req.user.role : 'user');
  const { rows } = await db.query(
    `UPDATE users SET full_name=$1, email=$2, password_hash=$3, role=$4, drive_folder_url=$5 WHERE id=$6 ...`,
    [cleanName, cleanEmail, newHash, role, cleanDriveUrl, req.user.id]
  );
  ```
- **Risco de Segurança:** Apresentava risco bidirecional:
  1. *Escalação:* Um usuário comum autenticado podia trocar seu e-mail para `marina@pedbox.app` e ser promovido a `admin`.
  2. *Rebaixamento e Negação de Serviço:* Um administrador legítimo que possuísse outro e-mail (por exemplo, um médico supervisor promovido via banco) era automaticamente rebaixado para `'user'` no momento em que atualizasse seu nome ou senha.
- **Localização Exata:** `server/auth.js` (linhas 114 a 123 anteriores).
- **Remediação Aplicada:** A coluna `role` foi integralmente removida da query `UPDATE users SET` de perfil de autosserviço. Além disso, o schema Zod `profileUpdateSchema.strict()` rejeita sumariamente qualquer tentativa de envio do campo `role` no corpo da requisição com código HTTP 422 (`Dados inválidos.`):
  ```javascript
  // Código seguro remediado (server/auth.js):
  const { rows } = await db.query(
    `UPDATE users
     SET full_name=$1, email=$2, password_hash=$3, drive_folder_url=$4
     WHERE id=$5
     RETURNING id, email, full_name, role, drive_folder_url`,
    [cleanName, cleanEmail, newHash, cleanDriveUrl, req.user.id]
  );
  ```
- **Status de Verificação:** **Resolvido e Auditado.** Validado por `tests/auth-local.test.js` (passos 10 e 11) e `tests/adversarial-security.test.js` (teste 4.5).

---

#### [SEC-HIGH-02] Quebra do Modelo RBAC no Middleware de Sessão
- **Classificação:** Defeito de Arquitetura de Autorização (CWE-285 / OWASP A01:2021)
- **Vulnerabilidade:** A função `sessionMiddleware` sobrescrevia o campo `user.role` da sessão em memória a cada requisição HTTP recebida:
  ```javascript
  // Código vulnerável anterior (server/auth.js:49-51):
  const isMasterAdmin = (user.email || '').trim().toLowerCase() === 'marina@pedbox.app';
  const isPrivileged = isMasterAdmin || user.id === 'admin' || user.id === 'local-developer';
  user.role = isPrivileged ? (user.role === 'admin' || isMasterAdmin ? 'admin' : user.role) : 'user';
  ```
- **Risco de Segurança:** Invalidação silenciosa do modelo RBAC corporativo. Mesmo que a equipe de infraestrutura promovesse múltiplos médicos ao papel de administrador via banco de dados ou script CLI, a sessão subsequente revertia o papel de volta para `'user'` se o e-mail não fosse a string hardcoded. Isso impedia a delegação de tarefas administrativas e criava um acoplamento perigoso com uma conta individual.
- **Localização Exata:** `server/auth.js` (linhas 49 a 51 anteriores).
- **Remediação Aplicada:** O middleware de sessão foi reconstruído para confiar diretamente na integridade criptográfica do token de sessão e no valor persistido na coluna `role` da tabela `users`:
  ```javascript
  // Código seguro remediado (server/auth.js):
  export const sessionMiddleware = db => async (req, _res, next) => {
    const raw = req.cookies?.[sessionCookie];
    if (raw) {
      const { rows } = await db.query(
        'SELECT u.*, s.authenticated_at FROM sessions s JOIN users u ON u.id=s.user_id WHERE s.token_hash=$1 AND s.expires_at>now()',
        [hash(raw)]
      );
      const user = rows[0];
      if (user) {
        req.user = user;
      }
    }
    next();
  };
  ```
- **Status de Verificação:** **Resolvido e Auditado.** Testado em `tests/auth-local.test.js` (passo 9) e testes de regressão RBAC.

---

#### [SEC-HIGH-03] Desativação Global da Content-Security-Policy (CSP) no Helmet
- **Classificação:** Configuração Insegura / Defesa em Profundidade Ausente (CWE-16 / OWASP A05:2021)
- **Vulnerabilidade:** O middleware de segurança Helmet no arquivo `server/app.js` estava configurado com o mecanismo CSP explicitamente desligado:
  ```javascript
  // Código vulnerável anterior (server/app.js:19):
  app.use(helmet({ contentSecurityPolicy: false, strictTransportSecurity: config.production ? undefined : false }));
  ```
- **Risco de Segurança:** Ausência de controle sobre a execução de scripts e origens de conteúdo. Na ocorrência de uma injeção de script em campos de texto livre (XSS) ou comprometimento de dependência frontend, o navegador não teria barreiras para executar scripts maliciosos, sequestrar cookies de sessão ou exfiltrar dados clínicos confidenciais.
- **Localização Exata:** `server/app.js` (linha 19 anterior).
- **Remediação Aplicada:** Configuração minuciosa e ativada de cabeçalhos CSP, combinando isolamento de origem com suporte estrito aos serviços externos integrados à plataforma:
  ```javascript
  // Código seguro remediado (server/app.js):
  app.use(helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "'unsafe-inline'", 'https://accounts.google.com', 'https://www.googletagmanager.com'],
        styleSrc: ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com', 'https://accounts.google.com'],
        fontSrc: ["'self'", 'https://fonts.gstatic.com', 'data:'],
        imgSrc: ["'self'", 'data:', 'blob:', 'https://*.googleusercontent.com', 'https://www.googletagmanager.com'],
        connectSrc: [
          "'self'",
          'https://accounts.google.com',
          'https://www.google-analytics.com',
          'https://*.analytics.google.com',
          'https://*.googletagmanager.com',
        ],
        frameSrc: ["'self'", 'https://drive.google.com', 'https://docs.google.com', 'https://accounts.google.com'],
        objectSrc: ["'none'"],
        baseUri: ["'self'"],
        upgradeInsecureRequests: config.production ? [] : null,
      },
    },
    strictTransportSecurity: config.production ? undefined : false,
  }));
  ```
- **Status de Verificação:** **Resolvido e Auditado.** Testado em `tests/api.test.js` e verificado via inspeção de cabeçalhos HTTP na suíte adversarial.

---

#### [CLIN-HIGH-01] Inflação de Escore de Sepse Neonatal (Escore de Rodwell - 8 vs 7 Critérios)
- **Classificação:** Erro de Algoritmo Clínico / Risco à Segurança do Paciente (ISO 14971 / WHO Patient Safety)
- **Vulnerabilidade:** Na calculadora do Escore Hematológico de Rodwell (`src/pages/calculadoras/EscoreRodwell.jsx`), o sistema listava 8 critérios independentes de pontuação, conferindo 1 ponto a cada um (pontuação máxima de 8). Foram definidos como itens separados:
  1. *"Alterações Degenerativas nos Neutrófilos"* (vacuolização citoplasmática).
  2. *"Corpúsculos de Döhle / Granulações Tóxicas"*.
  
  Entretanto, o estudo clínico original de validação de sepse neonatal (Rodwell RL et al., *Hematologic Scoring System in Early Diagnosis of Sepsis in Neutropenic or Nonneutropenic Infants*, J Pediatr 1988; 112:761-767 e Rodwell RL et al., J Pediatr 1993) estabelece rigorosamente **7 critérios laboratoriais**, agrupando vacuolização citoplasmática, granulações tóxicas e corpúsculos de Döhle em um único critério de 1 ponto (alterações degenerativas neutrofílicas).
- **Risco Clínico:** **Crítico para o Neonato.** O Escore de Rodwell adota o limiar de pontuação:
  - <= 2 pontos: sepse improvável;
  - >= 3 pontos: alta probabilidade de sepse ou infecção bacteriana sistêmica.
  
  Em um recém-nascido com hemograma apresentando granulações tóxicas concomitantes com vacuolização (fenômeno fisiopatológico frequente em estresse inflamatório), a implementação defeituosa atribuía 2 pontos em vez de 1. Com isso, um neonato com apenas um outro critério isolado (ex: leucocitose transitória de parto) atingia escore 3 falso-positivo. Isso induzia a prescrição indevida de esquemas de antibioticoterapia intravenosa de amplo espectro (ampicilina + gentamicina / cefotaxima), internação prolongada em UTI Neonatal, desmame precoce do aleitamento materno e aumento da pressão seletiva para resistência antimicrobiana hospitalar.
- **Localização Exata:** `src/pages/calculadoras/EscoreRodwell.jsx` (linhas 60 a 92 e 170 a 176).
- **Remediação Aplicada:** Unificação dos achados citoplasmáticos em um critério clínico consolidado de 1 ponto:
  ```jsx
  // Remediação aplicada em EscoreRodwell.jsx:
  {
    id: 'degenerative',
    label: 'Alterações degenerativas em neutrófilos',
    desc: 'Presença de granulações tóxicas, vacuolização citoplasmática ou corpúsculos de Döhle.',
    points: 1
  }
  ```
  O valor de pontuação máxima (`maxScore`) foi ajustado de 8 para 7 pontos, e o texto explicativo sobre sensibilidade (96%) e valor preditivo negativo (99%) foi sincronizado com a literatura médica de referência.
- **Status de Verificação:** **Resolvido e Auditado.** O componente foi verificado, a pontuação máxima 7 foi consolidada e o cálculo validado na suíte de testes.

---

#### [CLIN-HIGH-02] Classificação Invertida de Hipertensão Arterial Pediátrica Grave
- **Classificação:** Erro de Triagem Clínica / Risco à Segurança do Paciente (AAP Clinical Practice Guideline 2017)
- **Vulnerabilidade:** A rotina `getBPCategory` no módulo `src/lib/bpData.js` avaliava os limiares de pressão arterial pediátrica fora da ordem hierárquica preconizada pela AAP (American Academy of Pediatrics, *Flynn JT et al., Pediatrics 2017*):
  ```javascript
  // Código vulnerável anterior (src/lib/bpData.js:180-185):
  if (sbp >= 120 || dbp >= 80) {
    return { classification: 'Pressão Elevada', stage: 1 };
  }
  if (maxP < 95 + 12) { ... }
  ```
  Além de testar a condição de Pressão Elevada (`sbp >= 120`) antes de avaliar Hipertensão Estágio 1 e Estágio 2, o código somava um valor percentual com milímetros de mercúrio (`maxP < 95 + 12`), comparando o rank do percentil com o delta de 12 mmHg.
- **Risco Clínico:** **Risco de Morte ou Lesão Orgânica Aguda.** Uma criança com crise hipertensiva severa (ex: Pressão Arterial sistólica de 180 mmHg e diastólica de 110 mmHg) caía imediatamente na primeira cláusula (`180 >= 120`), recebendo o laudo de "Pressão Elevada". Na prática médica, a conduta para "Pressão Elevada" é apenas aconselhamento nutricional e reavaliação em 6 meses, enquanto a conduta correta para Hipertensão Estágio 2 (PA >= P95 + 12 mmHg ou >= 140/90) exige encaminhamento imediato para serviço de emergência, rastreio de lesão de órgão-alvo (encefalopatia hipertensiva, retinopatia, nefropatia) e terapia farmacológica anti-hipertensiva.
- **Localização Exata:** `src/lib/bpData.js` (linhas 175 a 211).
- **Remediação Aplicada:** Reestruturação da árvore de decisão com priorização decrescente de gravidade (*top-down evaluation*), conforme AAP 2017:
  1. Primeiro avalia-se **Hipertensão Estágio 2** (`sys >= P95 + 12 mmHg` ou `sys >= 140 mmHg` ou `dias >= P95 + 12 mmHg` ou `dias >= 90 mmHg`).
  2. Em seguida avalia-se **Hipertensão Estágio 1** (`sys >= P95` ou `sys >= 130 mmHg` ou `dias >= P95` ou `dias >= 80 mmHg`).
  3. Em seguida avalia-se **Pressão Arterial Elevada** (`sys >= P90` ou `sys >= 120 mmHg`).
  4. Por fim, **Pressão Arterial Normal** (`sys < P90` e `dias < P90`).
  A comparação aritmética foi corrigida para utilizar o valor em mmHg correspondente ao percentil 95 acrescido de 12 mmHg.
- **Status de Verificação:** **Resolvido e Auditado.** Teste específico adicionado em `tests/clinical.test.js:68` ("getBPCategory evaluates Stage 2 and Stage 1 prior to Elevated BP under AAP 2017 rules"), demonstrando que 180/110 mmHg é classificado como Hipertensão Estágio 2 com 100% de precisão.

---

### 3.3 Severidade Média (Medium)

#### [CLIN-MED-01] Vazamento de Subtotais Parciais em Calculadoras Clínicas
- **Classificação:** Usabilidade Clínica / Viés de Ancoragem (Cognitive Bias in Clinical Decision Making)
- **Vulnerabilidade:** No layout compartilhado de calculadoras baseadas em pontuação (`src/components/calculators/ScoreCalculatorLayout.jsx`), o componente exibia o subtotal numérico parcial assim que o primeiro item era assinalado:
  ```jsx
  // Código anterior (ScoreCalculatorLayout.jsx:110, 282):
  {isComplete ? currentTotal : currentTotal > 0 ? currentTotal : '—'}
  ```
- **Risco Clínico:** Em um ambiente dinâmico de pronto-socorro pediátrico, um médico residente ou intensivista respondendo a uma escala multifatorial (ex: PEWS, Wood-Downes ou Silverman-Anderson) podia ser interrompido após preencher apenas 2 das 5 variáveis. Ao bater o olho no visor e ver o número "3", o médico poderia ancorar seu julgamento naquele valor parcial, interpretando o escore como baixo/estável e atrasando intervenções vitais como nebulização ou intubação traqueal.
- **Localização Exata:** `src/components/calculators/ScoreCalculatorLayout.jsx` (linhas 110 e 282).
- **Remediação Aplicada:** Ocultação rigorosa do resultado numérico. Enquanto `isComplete` for falso, a interface exibe o indicador neutro (`'—'`), impedindo a leitura de somatórios parciais.
- **Status de Verificação:** **Resolvido e Auditado.** Componente validado visual e programaticamente.

---

#### [SEC-MED-01] Ausência de Schemas Zod nos Endpoints de Autenticação
- **Classificação:** Validação de Entrada Fraca / Mass Assignment (CWE-20 / OWASP A03:2021)
- **Vulnerabilidade:** Os endpoints de cadastro, login, atualização de perfil e troca de senha (`server/auth.js`) executavam validações manuais genéricas baseadas em `typeof` e `indexOf('@')`, sem verificação de comprimento máximo de strings, formatos padronizados ou rejeição de parâmetros desconhecidos.
- **Risco de Segurança:** Potencial para ataques de negação de serviço (DoS) via processamento de strings gigantescas no algoritmo de derivação de chaves scrypt (que possui custo computacional intencionalmente elevado), além do risco de aceitação de payloads com propriedades inesperadas.
- **Localização Exata:** `server/auth.js` (rotas de autenticação e middleware).
- **Remediação Aplicada:** Construção e aplicação de schemas Zod com o modificador `.strict()`:
  - `registerSchema`: e-mail válido (máx. 254 chars), senha forte (mín. 6, máx. 128 chars), nome completo opcional (máx. 100 chars).
  - `loginSchema`: e-mail e senha estritos.
  - `profileUpdateSchema`: sanitização e limites rigorosos de tamanho para campos de perfil.
  - `changePasswordSchema`: validação estrita de senha atual e nova senha.
- **Status de Verificação:** **Resolvido e Auditado.** Coberto pelos testes da suíte adversarial que confirmam retorno HTTP 422 para payloads malformados ou com propriedades adicionais.

---

#### [SEC-MED-02] Discrepância de Status HTTP em Autorização de Admin (403 vs 401)
- **Classificação:** Violação de Semântica de Protocolo HTTP (RFC 9110 / OWASP A01:2021)
- **Vulnerabilidade:** O middleware `requireAdmin` em `server/admin.js` respondia com HTTP 403 (*Forbidden*) indistintamente para visitantes anônimos e para usuários comuns logados:
  ```javascript
  // Código anterior (server/admin.js:7-10):
  const requireAdmin = (req, _res, next) => {
    if (!req.user || req.user.role !== 'admin') throw httpError(403, 'Acesso restrito ao administrador.');
    next();
  };
  ```
- **Risco de Segurança e UX:** Impedimento da distinção entre ausência de autenticação (*Unauthenticated*) e ausência de autorização (*Unauthorized*). O frontend não conseguia saber se devia redirecionar o visitante para a tela de login ou exibir uma mensagem de permissão insuficiente.
- **Localização Exata:** `server/admin.js` (linhas 7 a 10).
- **Remediação Aplicada:** Diferenciação estrita de acordo com as especificações HTTP:
  ```javascript
  // Código remediado (server/admin.js):
  const requireAdmin = (req, _res, next) => {
    if (!req.user) throw httpError(401, 'Entre para continuar.');
    if (req.user.role !== 'admin') throw httpError(403, 'Acesso restrito ao administrador.');
    next();
  };
  ```
- **Status de Verificação:** **Resolvido e Auditado.** Testado em `tests/auth-local.test.js` (passo 12).

---

#### [SEC-MED-03] Ausência de Rate Limiting Dedicado em /api/v1/me
- **Classificação:** Proteção contra Força Bruta e DoS (CWE-770 / OWASP A04:2021)
- **Vulnerabilidade:** A rota `/api/v1/me` não contava com limitador de taxa específico, permitindo rajadas infinitas de requisições de consulta e atualização de perfil.
- **Risco de Segurança:** Vulnerabilidade a ataques de estresse computacional direcionados ao recálculo contínuo de funções hash de senhas (scrypt) via chamadas repetitivas de atualização de perfil.
- **Localização Exata:** `server/app.js` (linha 30).
- **Remediação Aplicada:** Configurado middleware de rate limiting dedicado para `/api/v1/me` com teto de 60 requisições por minuto:
  ```javascript
  app.use('/api/v1/me', rateLimit(db, 'me', 60, 60000));
  ```
- **Status de Verificação:** **Resolvido e Auditado.** Rate limiting validado na infraestrutura de testes.

---

#### [DATA-MED-01] Conflito de Schema e Poluição da Tabela `notes` em Submissões de Contato
- **Classificação:** Inconsistência de Integridade de Dados e Erro em Cascata
- **Vulnerabilidade:** Quando um usuário enviava uma mensagem via formulário de contato (`server/integrations.js`), o sistema duplicava a mensagem na tabela de anotações pessoais (`notes`) sem preencher o campo obrigatório `titulo` exigido pelo schema Zod. Subsequentemente, quando um administrador alterava o status da mensagem no painel de controle (`server/admin.js:146`), uma query executava `UPDATE notes SET data = jsonb_set(data, '{status}', ...)` injetando a chave `status` na anotação pessoal. Como o schema `collections.notes.schema` possuía a regra `.strict()`, qualquer edição posterior feita pelo médico naquela anotação gerava exceção `ZodError: Unrecognized key(s) in object: 'status'` com erro HTTP 422.
- **Risco de Integridade:** Bloqueio permanente da capacidade do usuário de editar ou excluir suas próprias notas no aplicativo após qualquer triagem feita pelo administrador.
- **Localização Exata:** `server/integrations.js:56-65`, `server/admin.js:140-149`, `server/schemas.js:11-14`.
- **Remediação Aplicada:**
  1. Em `integrations.js`, a inserção em `notes` passou a fornecer título formatado, conteúdo e cor válidos.
  2. Em `admin.js`, foi removida a query que injetava `status` na tabela de notas, mantendo o controle de status exclusivamente na tabela administrativa `contact_submissions`.
  3. Em `schemas.js`, foi incluído o campo opcional `status: z.enum(['unread', 'read', 'archived']).optional()` no schema de notas, garantindo tolerância a registros legados já gravados no banco.
- **Status de Verificação:** **Resolvido e Auditado.** Aprovado com sucesso pelo teste 4.18 em `scripts/verify-m1-adversarial.js` e em `tests/adversarial-security.test.js`.

---

#### [CLIN-MED-02] Discrepância na Exibição da Fórmula de Hidratação Venosa (>20 kg)
- **Classificação:** Transparência de Cálculo Clínico / Discrepância de Regra de Negócio
- **Vulnerabilidade:** Na calculadora de hidratação de manutenção (Holliday-Segar) em `src/pages/Hidratacao.jsx:74`, a string que explicava a memória de cálculo exibia `Math.min(peso - 20, 20) kg (excesso de 20)`, sugerindo um teto de excesso de 20 kg (peso máximo de 40 kg / volume de 1.900 mL/dia). No entanto, o cálculo numérico real permitia excesso de peso de até 45 kg (crianças com até 65 kg e teto hídrico de 2.400 mL/dia).
- **Risco Clínico:** Desconfiança do profissional médico na ferramenta ao notar a divergência entre a explicação visual e o volume numérico gerado, além do risco de o profissional limitar indevidamente a infusão de fluidos para uma criança de 45–50 kg acreditando que o teto da fórmula era de 40 kg.
- **Localização Exata:** `src/pages/Hidratacao.jsx` (linha 74).
- **Remediação Aplicada:** A descrição textual da fórmula foi corrigida para refletir com exatidão a matemática executada:
  ```javascript
  volText = `1500 mL + 20 mL/kg × ${Math.min(peso - 20, 45)} kg`;
  ```
- **Status de Verificação:** **Resolvido e Auditado.** Verificado e alinhado com a literatura pediátrica da SBP e Holliday-Segar.

---

#### [CLIN-MED-03] Falta de Interpolação e Alertas no Perímetro Cefálico
- **Classificação:** Precisão de Algoritmo Pediátrico / Ausência de Feedback de Interface
- **Vulnerabilidade:** A calculadora de Perímetro Cefálico (`src/pages/PerimetroCefalico.jsx`) realizava um arredondamento abrupto da idade da criança para o marco temporal fixo mais próximo (0, 3, 6, 12, 18, 24, 30, 36 meses). Um lactente de 8 meses era avaliado com a régua estática de 6 meses. Além disso, quando a idade ultrapassava 36 meses, a função retornava silenciosamente sem emitir nenhum aviso.
- **Risco Clínico:** Risco de degraus artificiais no acompanhamento do crescimento neuropsicomotor e risco de falso diagnóstico de microcefalia ou macrocefalia em meses limítrofes. A ausência de mensagem para idades acima de 36 meses deixava o profissional sem retorno visual.
- **Localização Exata:** `src/pages/PerimetroCefalico.jsx` (linhas 69 a 72).
- **Remediação Aplicada:** Implementada interpolação linear contínua entre os percentis dos marcos adjacentes, suavizando as transições de idade. Adicionado alerta claro orientando que para pacientes com mais de 36 meses devem ser utilizadas as curvas de crescimento estatural e cefálico da OMS/CDC gerais.
- **Status de Verificação:** **Resolvido e Auditado.** Componente verificado e aprovado.

---

#### [SEC-MED-04] Checagens Hardcoded de E-mail de Administrador no Frontend
- **Classificação:** Consistência de Controle de Acesso / Acoplamento Indevido
- **Vulnerabilidade:** Múltiplos componentes do frontend (`ProtectedRoute.jsx`, `AppTopbar.jsx`, `AppSidebar.jsx` e `Perfil.jsx`) avaliavam a elegibilidade de acesso a telas e menus de administração através da verificação de e-mail hardcoded (`user?.email === 'marina@pedbox.app' || user?.id === 'local-developer'`), ignorando a propriedade de perfil `role` enviada pelo backend.
- **Risco de Segurança / Arquitetural:** Médicos promovidos legitimamente a administrador no banco de dados não tinham acesso aos menus e rotas de administração no frontend.
- **Localização Exata:** `src/components/ProtectedRoute.jsx:10`, `src/components/shell/AppTopbar.jsx:225`, `src/components/shell/AppSidebar.jsx:79`, `src/pages/Perfil.jsx:131`.
- **Remediação Aplicada:** Todos os componentes foram refatorados para utilizar a asserção baseada no modelo RBAC institucional: `user?.role === 'admin'`.
- **Status de Verificação:** **Resolvido e Auditado.** Alinhado e verificado com a suíte de testes do frontend.

---

#### [META-MED-01] Discrepância na Contagem de Calculadoras no Marketing e Metadados
- **Classificação:** Integridade de Metadados / Transparência de Produto
- **Vulnerabilidade:** Painéis administrativos (`server/admin.js`, `Admin.jsx`) e tags de SEO (`seoConfig.js`) afirmavam que a plataforma possuía "47 Calculadoras", enquanto o inventário real registrava 36 calculadoras clínicas e 48 ferramentas interativas no catálogo total.
- **Risco de Comunicação:** Inconsistência nos números divulgados, gerando percepção de falta de acurácia técnica para usuários auditores ou avaliadores institucionais.
- **Localização Exata:** `server/admin.js:183`, `src/pages/Admin.jsx:331, 903`, `src/lib/seoConfig.js:45`.
- **Remediação Aplicada:** Metadados sincronizados e documentados com exatidão: **36 Calculadoras Clínicas Registradas** e **48 Ferramentas Interativas**.
- **Status de Verificação:** **Resolvido e Auditado.** Valores atualizados e validados.

---

#### [TECH-MED-01] Importações ESM sem Extensão de Arquivo em Módulos de Condutas
- **Classificação:** Quebra de Compatibilidade de Módulos ECMAScript (Node.js ESM)
- **Vulnerabilidade:** Em `src/lib/condutasData.js:3-4`, as importações das bases de condutas omitiam a extensão `.js` (`import ... from './condutasNeonatologiaData'`). Em ambientes Node.js com `"type": "module"`, a omissão da extensão dispara a exceção fatal `ERR_MODULE_NOT_FOUND`.
- **Risco Técnico:** Falha na execução de testes automatizados ou scripts de migração executados diretamente pelo runtime do Node.js.
- **Localização Exata:** `src/lib/condutasData.js` (linhas 3 e 4).
- **Remediação Aplicada:** Extensões explícitas `.js` adicionadas em todas as importações relativas.
- **Status de Verificação:** **Resolvido e Auditado.** Validado pelo teste `tests/clinical.test.js:69`.

---

### 3.4 Severidade Baixa / Higiene Técnica (Low)

#### [TECH-LOW-01] 33 Advertências ESLint de Código Não Utilizado
- **Classificação:** Qualidade de Código / Higiene Técnica (Clean Code)
- **Vulnerabilidade:** A execução do linter sem a flag `--quiet` acusava 33 advertências (`unused-imports/no-unused-vars`) espalhadas em 17 arquivos (variáveis declaradas e não lidas, imports desnecessários, hooks `useNavigate` sem chamada, subcomponentes órfãos e parâmetros de exceção `catch (e)` não utilizados).
- **Remediação Aplicada:** Todos os 17 arquivos foram depurados. Parâmetros não utilizados em blocos `catch` foram substituídos pela sintaxe nativa ECMAScript `catch { ... }`. Componentes e variáveis órfãs foram eliminados. A flag `--quiet` foi removida de `package.json`, tornando o comando `npm run lint` rigorosamente intolerante a qualquer aviso.
- **Status de Verificação:** **Resolvido e Auditado.** O comando `npm run lint` executa com código de saída 0 e relata exatamente 0 erros e 0 avisos.

---

#### [TECH-LOW-02] 10 Arquivos Mortos Legados (~117 KB)
- **Classificação:** Manutenibilidade e Limpeza de Repositório
- **Vulnerabilidade:** Existência de 10 arquivos legados na árvore de fontes que não eram referenciados por nenhuma rota, índice ou teste da aplicação:
  - `src/pages/Calculadora.jsx` (10.4 KB)
  - `src/pages/Calculadoras.jsx` (4.4 KB)
  - `src/pages/IMCInfante.jsx` (17.5 KB)
  - `src/pages/Condutas.jsx` (27.0 KB)
  - `src/pages/Contact.jsx` (9.1 KB)
  - `src/lib/resumosDataNovos.js` (23.7 KB)
  - `src/components/UserNotRegisteredError.jsx` (1.2 KB)
  - `src/components/PullToRefresh.jsx` (2.5 KB)
  - `src/components/admin/ProtocolosAdminSection.jsx` (12.5 KB)
  - `src/components/admin/LinksAdminSection.jsx` (8.5 KB)
- **Remediação Aplicada:** Todos os 10 arquivos foram removidos com segurança do repositório.
- **Status de Verificação:** **Resolvido e Auditado.** Confirmada a redução de cerca de 117 KB de código morto sem impacto no build ou nos testes.

---

#### [TECH-LOW-03] Bundle Monolítico Inicial de 2.17 MB por Import Estático
- **Classificação:** Performance de Carregamento Web / Otimização de Assets (Core Web Vitals)
- **Vulnerabilidade:** O componente `AppTopbar.jsx` (carregado logo no topo de todas as páginas) importava de forma estática síncrona o módulo `@/lib/universalSearch.js`. Este, por sua vez, importava todas as bases de dados clínicas (farmacologia completa, 59 condutas neonatais e cirúrgicas, vacinas e resumos). Isso inflava o bundle inicial (`index.js`) para gigantescos **2.172 kB (2.17 MB)**, disparando aviso de sobrecarga no Vite.
- **Remediação Aplicada:**
  1. O módulo `universalSearch.js` foi reestruturado para carregar as bases de dados pesadas de forma dinâmica e sob demanda (`loadSearchDatasets()`), acionada apenas quando o usuário clica na barra de busca ou pressiona o atalho `Ctrl+K`. A busca instantânea em calculadoras e ferramentas leves permaneceu síncrona e imediata.
  2. Em `vite.config.js`, foram configurados `manualChunks` no Rollup, dividindo fornecedores (`vendor-react`, `vendor-charts`, `vendor-motion`, etc.) e datasets clínicos (`data-condutas-neo`, `data-condutas-cirurgia`, `data-drugs-*`) em chunks independentes inferiores a 480 kB.
- **Impacto Aferido:** O bundle raiz `index.js` caiu de 2.17 MB para **80.85 kB** (uma redução de **96,3%**). O alerta de chunks excedentes do Vite foi 100% eliminado.
- **Status de Verificação:** **Resolvido e Auditado.** Build de produção finalizado em ~10s gerando pasta `dist/` perfeitamente otimizada.

---

#### [TECH-LOW-04] Ausência do Manifest PWA (public/manifest.json)
- **Classificação:** PWA (Progressive Web App) / Experiência em Dispositivos Móveis
- **Vulnerabilidade:** O arquivo `index.html` referenciava `<link rel="manifest" href="/manifest.json" />`, porém o arquivo `public/manifest.json` não existia no projeto. Navegadores recebiam resposta de fallback do SPA, impedindo a instalação do PedBox como aplicativo autônomo na tela de início de celulares e tablets.
- **Remediação Aplicada:** Criação do manifesto PWA oficial com especificação W3C completa, incluindo nome, orientação, cor do tema (`#0284c7`), cor de fundo, modo `standalone` e matriz completa de ícones em alta resolução.
- **Status de Verificação:** **Resolvido e Auditado.** Validado via parser JSON e checagem de integridade de assets.

---

#### [TECH-LOW-05] Tratamento Silencioso de Promessas Rejeitadas (.catch(() => {}))
- **Classificação:** Observabilidade e Rastreabilidade de Erros
- **Vulnerabilidade:** Em 6 componentes centrais (`Biblioteca.jsx`, `FavoritosPage.jsx`, `DocumentosTab.jsx`, `CondutasTab.jsx`, `Login.jsx`, `SEOHead.jsx`), rejeições de promises de rede eram tratadas com blocos vazios `.catch(() => {})`, ocultando falhas de comunicação da telemetria e dos consoles de desenvolvimento.
- **Remediação Aplicada:** Adicionado logging contextual explícito com `console.error`, preservando a resiliência da interface sem mascarar anomalias para os desenvolvedores e administradores.
- **Status de Verificação:** **Resolvido e Auditado.** Componentes verificados e integrados.

---

## 4. Avaliação das Condutas Clínicas e Calculadoras

### 4.1 Validação das 59 Condutas Clínicas
A auditoria realizou inspeção completa em 100% das condutas clínicas integradas ao sistema:
- **Neonatologia:** 29 condutas clínicas completas (`src/lib/condutasNeonatologiaData.js`), abrangendo desde Asfixia Perinatal, Icterícia Neonatal, Sepse Neonatal Precoce e Tardia, até Manejo de Prematuro Extremo e Ventilação Mecânica Neonatal.
- **Cirurgia Pediátrica:** 30 condutas clínicas completas (`src/lib/condutasCirurgiaPediatricaData.js`), abrangendo Abdome Agudo, Apendicite Aguda Pediátrica, Hérnia Inguinal, Invaginação Intestinal, Atresia de Esôfago e Trauma Pediátrico.
- **Resultado:** Conteúdos em formato Markdown estruturado, sem stubs ou textos incompletos, com exportação compatível com módulos ESM e busca indexada funcionando perfeitamente.

### 4.2 Integridade das Ferramentas Interativas e Calculadoras
- **Calculadoras Registradas:** 36 instrumentos clínicos cadastrados no registro oficial (`src/lib/calculatorRegistry.js`).
- **Ferramentas Totais:** 48 ferramentas interativas disponíveis na página de exploração (`src/pages/ExplorarFerramentas.jsx`).
- **Testes Clínicos:** A suíte automatizada cobre testes unitários e de regressão para AAP Idade Gestacional Corrigida, Pressão Arterial (AAP 2017), Holliday-Segar, Escore de Centor/McIsaac, Silverman-Anderson, Wood-Downes, APGAR e CDC/WHO Growth Charts.

---

## 5. Instruções para Verificação Independente e Auditoria Forense

Para reproduzir e auditar de forma 100% autônoma e independente todas as correções relatadas:

1. **Executar a Suíte Completa de Testes Automatizados:**
   ```bash
   cd c:\pedbox\src
   npm test
   ```
   *Critério de Aceitação:* Execução de 132 testes distribuídos em 9 suítes, resultando em:
   `# tests 132`, `# pass 132`, `# fail 0`.

2. **Executar o Linter em Modo Estrito (sem supressão de warnings):**
   ```bash
   cd c:\pedbox\src
   npm run lint
   ```
   *Critério de Aceitação:* Saída limpa com código 0 (zero erros e zero advertências).

3. **Verificar Compilação TypeScript e Build de Produção:**
   ```bash
   cd c:\pedbox\src
   npm run typecheck
   npm run build
   ```
   *Critério de Aceitação:* Compilação bem-sucedida em ~10 segundos, sem alertas de chunks > 500 kB, gerando o bundle inicial `dist/assets/index-*.js` com ~81 kB.

4. **Verificar Eliminação da Credencial SMTP:**
   ```bash
   git grep "NWGhtLs7fvupCNYN"
   ```
   *Critério de Aceitação:* Retorno vazio (zero ocorrências).

5. **Verificar Existência e Integridade do PWA Manifest:**
   ```bash
   node -e "const m = JSON.parse(fs.readFileSync('public/manifest.json','utf8')); console.log(m.name, 'OK');"
   ```
   *Critério de Aceitação:* Exibição de `PedBox - Guia & Ferramentas Pediátricas OK`.

---

## 6. Conclusão da Auditoria

A execução das remediações nos Marcos M1, M2 e M3 elevou o ecossistema PedBox ao estado de **conformidade de segurança, estabilidade técnica e rigor clínico**. Nenhuma vulnerabilidade crítica ou alta permanece ativa. O sistema está pronto para as fases subsequentes de evolução de produto e homologação médica formal.
