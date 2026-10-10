### PedBox 🩺 — A Caixa de Ferramentas da Pediatria

O **PedBox** é uma plataforma **vibe-coded**, **open-source** e **radicalmente colaborativa**, projetada para ser o "canivete suíço" do profissional de saúde que atua na pediatria. Nossa missão é clara: facilitar a tomada de decisão clínica através de ferramentas **precisas**, **rápidas** e, acima de tudo, **livres**.

Este projeto nasce da insatisfação com a **fragmentação do conhecimento médico** e as barreiras (financeiras e burocráticas) que cercam ferramentas essenciais. Acreditamos que, na saúde, **democratizar o acesso à informação** é uma extensão do ato de cuidar.

---

### 🕊️ Manifesto: Conhecimento Médico Livre

A ciência só avança quando o conhecimento circula **sem atritos**. Livros caros, assinaturas proibitivas e plataformas fechadas não protegem a qualidade — eles apenas a isolam. 

O **PedBox** é um projeto educacional e clínico construído sob os pilares da **Liberdade Radical**:
* **Acesso Universal:** Sem paywalls. O estudante da periferia e o especialista do grande centro usam a mesma ferramenta.
* **Transparência Total:** Código aberto significa que qualquer cálculo pode ser **auditado e validado** pela comunidade.
* **Antifrágil e Evolutivo:** Ao contrário de apps proprietários que morrem com seus donos, o **PedBox pertence à comunidade**. Se você vê um erro ou uma melhoria necessária, você tem o poder de mudar.

> "Conteúdo livre não é falta de rigor; é a coragem de ser revisado por todos para ser útil a qualquer um."

---

### 🛠️ O que o PedBox oferece?

O ecossistema é desenhado para ser **fluido e intuitivo**, focado em três frentes principais:

#### 1. Calculadoras Clínicas de Alta Precisão
Esqueça a regra de três no meio da emergência. Nossa biblioteca inclui:
* **Hidratação Venosa:** Cálculos de **Holiday-Segar** e protocolos de reposição hidroeletrolítica.
* **Antropometria Inteligente:** Interpretação automática de **escores-z e percentis** (Peso, Estatura, IMC e Perímetro Cefálico).
* **Nefro & Nutrição:** Cálculo de **Clearance de Creatinina** e balanço de macro/micronutrientes.

#### 2. Guia de Medicações & Segurança do Paciente
Focado na **redução de erros** de prescrição:
* **Doses por Peso:** Consulta instantânea de **mg/kg** com alertas de dose máxima.
* **Especificidade por Faixa Etária:** Diferenciação clara entre doses **neonatais e pediátricas**.
* **Diluição e Administração:** Instruções práticas para enfermagem e beira de leito.

#### 3. Repositório de Protocolos e "Vibe-Checks"
Recursos rápidos para consulta de **fluxogramas e condutas** baseadas nas evidências mais recentes, apresentados de forma visual e direta.

---

### Executar localmente

Requisitos: Node.js 22 ou superior e npm. Na primeira execução:

```bash
npm ci
cp .env.example .env
npm run dev
```

Abra http://localhost:5173. A API roda em 127.0.0.1:3001. O banco PostgreSQL embutido (PGlite) persiste em `.data/postgres`; os arquivos ficam em `.data/uploads`.

Com `DEV_AUTH=true`, a tela de login oferece uma conta administrativa fixa **somente para desenvolvimento local**. Em produção esse modo é recusado pelo servidor. Se já tiver `.env`, preserve-o em vez de copiá-lo novamente.

A aplicação usa React/Vite e uma API Node.js própria. Não exige SDK, conta ou endpoints Base44. Favoritos, anotações, biblioteca e administração funcionam localmente. Envio real de e-mail, login público e IA precisam das credenciais indicadas em `.env.example`; sem elas, o aplicativo informa a indisponibilidade e não simula sucesso.

### Verificação

```bash
npm test
npm run lint
npm run typecheck
npm run build
npm run check:independence
npx playwright install chromium
npm run test:e2e
```

Se já houver Google Chrome instalado, use `PLAYWRIGHT_CHANNEL=chrome npm run test:e2e`. Os testes de navegador usam a API na porta 4173, dados separados em `.data/e2e` e o build de produção; rode `npm run build` antes deles.

### Publicação e migração

- [Operação e publicação](docs/operacao.md): PostgreSQL externo, Docker, HTTPS, login OIDC, e-mail e IA.
- [Importação, exportação e reversão](docs/migration/README.md): formato de arquivos, identidade, anexos, simulação e restauração.
- [Relatório de execução](docs/migracao-executada.md): o que foi implementado, verificações e pendências externas.
- [Plano original](docs/plano-remocao-base44.md): inventário histórico usado como referência.

Credenciais, bancos locais e exportações não devem ser enviados ao Git. A exclusão da conta remove o perfil e dados privados do PedBox; ela não apaga a identidade do provedor externo de login.
