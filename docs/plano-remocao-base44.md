# Plano de remoção do Base44 — PedBox

> Documento histórico de planejamento. A execução e as pendências atuais estão em [migração executada](migracao-executada.md).

Data: 12/09/2026. Repositório: https://github.com/maritsilva/pedbox.
Base analisada: branch `main`, commit `bd80a9a135b4d05ab20f23c8ae07452c88b32f21`.

## Resultado esperado

Executar e publicar o PedBox sem SDK, infraestrutura, autenticação, armazenamento, agente ou mídia hospedada no Base44, preservando as funcionalidades existentes e os dados dos usuários. Manter React, Vite, Tailwind, as telas e os dados clínicos locais.

A retirada não é apenas desinstalar dois pacotes: exige substituir o backend que eles disponibilizam. Este documento é um planejamento baseado na leitura do código; a migração ainda não foi implementada.

## Diagnóstico com evidências

Há 19 arquivos em `src/` que referenciam `base44Client`. Foram encontradas chamadas a cinco entidades de domínio, autenticação, duas integrações, agentes e uma função privilegiada. Existem sete esquemas em `base44/entities/`, incluindo User e Vacina.

| Dependência | Evidência no repositório | Trabalho necessário |
| --- | --- | --- |
| SDK | `package.json`, `src/api/base44Client.js` | Substituir consumidores por serviços próprios e remover `@base44/sdk` (`^0.8.41`). |
| Build e ferramentas Base44 | `vite.config.js`, `package.json` | Remover `@base44/vite-plugin` (`^1.0.30`) e seus recursos de edição, analytics e notificações; configurar explicitamente o alias `@`. |
| Configuração e token | `src/lib/app-params.js`, `src/api/base44Client.js` | Retirar parâmetros e variáveis `VITE_BASE44_*`, token em URL e chaves de armazenamento do provedor. |
| Login e sessão | `Layout.jsx`, `Admin.jsx`, `Settings.jsx`, `Pesquisa.jsx`, hooks de favoritos e outras telas | Implementar login, callback, sessão, logout, perfil e papéis de acesso. |
| Contexto de autenticação legado | `src/lib/AuthContext.jsx`, `src/components/ProtectedRoute.jsx` | O contexto importa utilitário interno do SDK e consulta `/api/apps/public`. Não está montado em `main.jsx`/`App.jsx`; `ProtectedRoute` não tem consumidores encontrados. Substituir por um contexto efetivamente integrado, sem assumir que as rotas já estão protegidas por ele. |
| Favoritos | `src/hooks/useFavorites.jsx`, `useDosagemFavorites.jsx`, `usePageFavorites.jsx` | Migrar `Favorito` e unificar comportamento de sessão e filtros por tipo. |
| Anotações | `src/components/biblioteca/AnotacoesTab.jsx`, `src/pages/FavoritosPage.jsx` | Migrar CRUD e isolamento por proprietário. |
| Conteúdo administrativo | `src/pages/Admin.jsx`, `Condutas.jsx`, `Biblioteca.jsx`, componentes `biblioteca/` e `admin/` | Migrar `CategoriaCustom`, `Conduta` e `LinkBiblioteca`, com leitura pública e escrita administrativa. |
| Upload | `Admin.jsx`, `src/components/condutas/UploadCondutaModal.jsx` | Substituir `Core.UploadFile`, migrar objetos e reescrever URLs persistidas. |
| Contato | `src/pages/Contact.jsx` e `Contato.jsx` | Substituir `Core.SendEmail` por endpoint de servidor; ambas as rotas existem em `App.jsx`. |
| Exclusão de conta | `src/pages/Settings.jsx:33` | Substituir `asServiceRole.functions.invoke('deleteUserAccount')`. A implementação da função não está no checkout. |
| SophIA | `src/pages/Pesquisa.jsx`, `src/components/MessageBubble.jsx`, `base44/agents/pediatric_research.jsonc` | Recriar conversas, mensagens, eventos, memória e integração com modelo/pesquisa. |
| Imagens e favicon | `Home.jsx`, `Layout.jsx`, `MobileHeader.jsx`, `index.html` | Migrar duas URLs distintas de imagens em `media.base44.com`; substituir o favicon de `base44.com`. Inspecionar também URLs existentes nos dados exportados. |
| Publicação e documentação | `base44/config.jsonc`, `README.md` | Criar processo independente de build, deploy, configuração e operação. |

As calculadoras e muitos catálogos estão em `src/lib/` e nas próprias páginas. `Vacinas.jsx` usa `src/lib/vacinasData`, embora também exista um esquema remoto `Vacina`. Não foi encontrada chamada a `entities.Vacina`: inventariar possíveis registros remotos antes de decidir arquivá-los ou migrá-los.

## Arquitetura proposta

Proposta de engenharia, ainda sem contratação de infraestrutura:

```text
Frontend React/Vite
    → serviços de domínio do PedBox
        → API própria /api/v1
            → PostgreSQL
            → autenticação por biblioteca/provedor mantido
            → adaptador de armazenamento de objetos
            → adaptador de e-mail
            → adaptador de IA e pesquisa
```

Usar Node.js/TypeScript para a API, banco PostgreSQL com migrações SQL versionadas e armazenamento de objetos substituível. Servir frontend e API sob a mesma origem quando possível. Sessões com cookie HttpOnly/Secure e proteção contra CSRF nas operações que alteram dados; autorização aplicada pelo servidor. Não implementar criptografia ou gestão de senhas artesanalmente.

Criar módulos `auth`, `favorites`, `notes`, `content`, `uploads`, `contact` e `research`. Os componentes devem depender desses contratos, não do SDK de um novo fornecedor. O provedor de autenticação, hospedagem, e-mail, objetos e IA será definido conforme operação existente, orçamento e requisitos de exportação. Não há estimativa de custo mensal confiável sem volume de usuários, arquivos e consultas de IA.

Uma plataforma gerenciada pode implementar parte da arquitetura; manter migrações, exportação e contratos próprios reduz o esforço de uma troca futura. Usar apenas dados locais eliminaria funcionalidades multiusuário, administração compartilhada e IA; isso não atende à preservação funcional adotada neste plano.

Para preservar imports existentes, definir `resolve.alias` apontando `@` para o caminho absoluto de `src`. Essa opção é documentada pelo [Vite](https://vite.dev/config/shared-options.html#resolve-alias). Não é necessário atualizar a versão principal do Vite para realizar essa separação.

## Modelo de dados e autorização

Preservar campos, defaults, valores de enum, conteúdo Markdown e metadados implícitos relevantes (`id`, `created_date`, `updated_date`, `created_by_id`). Os JSONC não contêm todo o contrato de dados gerenciado pelo Base44: confrontar com exportações reais.

| Origem | Destino proposto | Regra obrigatória |
| --- | --- | --- |
| User | `users` + vínculo com identidade | Papel `user` por padrão; alteração para `admin` só por operação administrativa confiável. |
| Favorito | `favorites` | Proprietário obrigatório; unicidade `(user_id, tipo, chave)`; CRUD apenas do próprio usuário. |
| Anotacao | `notes` | CRUD apenas do proprietário; cor validada; preservar anotações vazias quando permitidas pelo contrato. |
| CategoriaCustom | `custom_categories` | Leitura pública; escrita apenas admin; preservar `categoria_id` e subcategorias. |
| Conduta | `clinical_contents` | Leitura pública; escrita apenas admin; preservar identificadores de categoria/subcategoria/tópico usados na composição com conteúdo local. |
| LinkBiblioteca | `library_links` | Leitura pública; escrita apenas admin. |
| Vacina | Arquivo de exportação e, se necessário, `vaccines` | Conferir existência/uso dos registros remotos; não sobrescrever o catálogo local por suposição. |
| Conversas/memória do agente | `conversations`, `messages` e memória explicitamente modelada | Acesso apenas do proprietário; migração depende de exportabilidade confirmada. |

Derivar o proprietário da sessão no servidor; rejeitar tentativas de enviar outro `user_id`. As regras atuais de anotações/favoritos dependem de `created_by_id`; filtros enviados pelo navegador não substituem autorização. Se usar RLS do PostgreSQL, testar com o papel real da aplicação: proprietários de tabelas e papéis privilegiados podem contornar as políticas. Ver [documentação de segurança por linha do PostgreSQL](https://www.postgresql.org/docs/current/ddl-rowsecurity.html).

Nos três hooks de favoritos, a leitura atual busca todos os tipos e a remoção filtra somente `chave`. Separar medicamentos, dosagens e ferramentas em leitura e exclusão. Antes de criar a restrição de unicidade, gerar relatório de duplicados e resolver sem descarte silencioso.

## Contratos mínimos da API

| Serviço | Contrato proposto | Observações |
| --- | --- | --- |
| Sessão | `GET /api/v1/me`, início/callback de login, `POST /api/v1/logout` | Perfil estável, expiração e retorno à rota original com destino validado. |
| Conta | `DELETE /api/v1/me` | Reautenticação quando cabível; excluir/anomizar dependências conforme política definida, revogar sessões e limpar cache privado. |
| Favoritos | `GET`, `PUT`, `DELETE /api/v1/favorites` | Operações idempotentes por tipo/chave; propriedade derivada da sessão. |
| Anotações | `GET/POST /api/v1/notes`, `PATCH/DELETE /api/v1/notes/:id` | Paginação e ordenação por criação; verificar propriedade também ao acessar por ID. |
| Conteúdo | Coleções `/categories`, `/contents`, `/library-links` sob `/api/v1` | GET público; POST/PATCH/DELETE admin; preservar semântica de ordenação e filtros utilizada pelas telas. |
| Arquivos | `POST /api/v1/uploads` | Admin; validar tipo/tamanho e retornar contrato estável com `file_url` ou mapear no adaptador. |
| Contato | `POST /api/v1/contact` | Destinatário fixado no servidor, validação, limite de frequência e tratamento de falha/reenvio. |
| Pesquisa | `POST /api/v1/conversations`, `POST /api/v1/conversations/:id/messages`, eventos da conversa | Autenticação, propriedade, streaming por SSE ou equivalente, cancelamento e reconexão. |

Padronizar respostas, paginação, erros 401/403/404/422/429/5xx e estados de carregamento. A API não deve oferecer uma reprodução irrestrita de qualquer entidade ou função do SDK.

## Etapas e critérios de entrega

### 0. Fechar inventário e estabelecer a referência — prioridade P0

- Registrar o comportamento atual com conta comum, administrador e visitante; rodar build, lint e typecheck e separar falhas preexistentes.
- Obter exportações completas e paginadas das entidades, usuários, objetos, conversas e memória disponíveis; conferir funções, segredos, login, domínio e integrações configuradas fora do Git.
- Documentar o comportamento efetivo de `deleteUserAccount`. A chamada no frontend não comprova funcionamento ou acesso privilegiado real.
- Escolher provedores de destino e o fluxo de migração de contas. Não assumir que senhas ou sessões Base44 são exportáveis.
- Inventariar rotas efetivamente montadas em `App.jsx`; não promover telas órfãs a funcionalidades novas durante a migração.

Entrega: inventário de dados e serviços externos, backup verificável, baseline e decisões registradas. Desenvolvimento com fixtures pode avançar; a virada de produção depende desses dados.

### 1. Isolar as dependências — prioridade P0

- Criar os contratos de serviços e um adaptador temporário Base44.
- Atualizar os 19 consumidores para esses serviços; implementar um único contexto de sessão montado em `App.jsx`.
- Preservar telas públicas e integrar guardas nas funções privadas/admin, além da autorização no servidor.
- Unificar favoritos com filtro por tipo e invalidar consultas ao trocar usuário ou sair.

Entrega: dependência Base44 concentrada no adaptador temporário; testes de contrato e fluxos existentes preservados. Essa etapa ainda não significa independência do provedor.

### 2. Implementar backend e migrar dados — prioridade P0

- Criar API, migrações, autenticação, autorização, CRUD, limites de paginação e índices.
- Implementar importador repetível com modo de simulação, checkpoints, relatório de erros e mapa `legacy_id → new_id` (ou preservação dos IDs originais).
- Importar identidades antes de favoritos/anotações; categorias antes de conteúdo dependente. Manter vínculo com identificadores textuais usados pelo frontend e pelo conteúdo local.
- Vincular contas de forma verificável. Caso credenciais não sejam portáveis, planejar convite/recuperação/novo login e associação segura; nunca associar automaticamente por e-mail não verificado.
- Implementar exclusão de conta no servidor com transação para dados relacionais e trabalho retomável para provedor de identidade/objetos. Tratar falhas parciais e impedir acesso após revogação.

Entrega: duas contas não conseguem ler ou alterar dados uma da outra; usuário comum não escreve conteúdo admin; importação reconciliada por entidade, usuário, IDs e amostras de conteúdo.

### 3. Substituir arquivos e e-mail — prioridade P1

- Transferir mídia para armazenamento próprio e ativos fixos para `public/` ou `src/assets/`.
- Reescrever URLs em `Conduta.imagens`, Markdown, links e quaisquer outros campos exportados. Validar existência e integridade dos objetos, sem confundir URLs externas legítimas com dependências Base44.
- Substituir envio de e-mail nas duas páginas de contato; manter destinatários e mensagens atuais conforme comportamento validado.

Entrega: uploads e contato funcionam usando somente serviços de destino; imagens antigas permanecem acessíveis após bloqueio de domínios Base44.

### 4. Substituir a SophIA — prioridade P1, maior incerteza

- Versionar as instruções do agente no backend. O arquivo atual declara `claude_sonnet_4_6`, memória habilitada com escopo `both`, `tool_configs: []` e `context_files: []`.
- Confirmar recursos efetivos no ambiente Base44: o texto do prompt pede busca web e conhecimento da plataforma, mas isso não comprova ferramentas de pesquisa ou ingestão do conteúdo local.
- Implementar adaptador para modelo, armazenamento de conversas e eventos; preservar o formato necessário a `MessageBubble.jsx`, incluindo chamadas de ferramentas e estados quando usados.
- Implementar pesquisa e recuperação de conteúdo explicitamente se fizerem parte da experiência esperada. Não prometer acesso a fontes licenciadas apenas porque seus nomes aparecem na interface.
- Encerrar assinaturas ao desmontar a tela ou iniciar outra conversa; tratar erro, cancelamento, reconexão, mensagens duplicadas e limites de uso.
- Avaliar respostas com conjunto fixo de perguntas e checagem de referências reais; qualquer revisão clínica fica a cargo de responsável pelo conteúdo. A migração técnica não valida a correção médica das respostas.
- Confirmar exportação de histórico/memória; se indisponível, registrar a limitação e definir tratamento antes da virada, sem prometer preservação inexistente.

Entrega: conversa completa, isolamento por usuário, fontes verificáveis quando há pesquisa e nenhum segredo de IA no frontend.

### 5. Remover SDK/plugin e publicar de forma independente — prioridade P1

- Trocar o adaptador pelo backend novo; remover `base44Client.js`, código legado sem consumidores, SDK, plugin e configuração Base44 após preservar os contratos necessários.
- Configurar alias Vite, atualizar lockfile, nome do pacote, README e `.env.example`; credenciais de backend nunca recebem prefixo `VITE_`.
- Criar build/deploy independentes, healthcheck, logs sem tokens, backup/restauração e fallback de SPA para acesso direto às rotas.
- Rever `public/sw.js`: ele inclui `/offline.html` no precache, mas esse arquivo não está presente; também armazena respostas GET de `/api/`. Excluir sessão, anotações, favoritos e conversas do cache compartilhado.
- Rever `src/main.jsx`: a inicialização de produção apaga todos os caches e registra novamente o service worker. Implementar atualização versionada e escopo de cache do PedBox, preservando recursos públicos necessários ao offline.
- Validar atualização de instalações existentes para evitar que um bundle antigo continue chamando Base44.

Entrega: build e navegação independentes, inclusive com Base44 bloqueado na rede; acesso offline aos recursos públicos previstos e nenhum dado privado reaparecendo após logout/troca de conta.

### 6. Ensaio, virada e reversão — prioridade P0 para desligamento

1. Executar importação em homologação e reconciliar contagens, IDs, proprietários, arquivos e amostras de conteúdo; testar restauração de backup.
2. Fazer ensaio completo de virada com o volume real e medir duração.
3. Colocar as escritas da origem em manutenção, exportar/importar o delta final e registrar um marco consistente de dados.
4. Publicar a aplicação nova e mudar domínio/configuração; verificar login, CRUD, uploads, contato, IA e acesso direto às rotas.
5. Observar erros, latência e reconciliação antes de encerrar o ambiente antigo. Definir período e responsáveis antes da produção.
6. Para reversão: congelar escritas novas, preservar/exportar alterações realizadas no destino e reconciliar antes de reabrir a origem. Apenas voltar DNS não restaura dados criados após a migração.

Entrega: tráfego e dados no destino, plano de reversão exercitado e confirmação operacional antes de desativar Base44.

## Sequência sugerida de PRs

| PR | Escopo | Depende de |
| --- | --- | --- |
| 1 | Baseline, contratos e adaptador transitório; contexto de sessão | Inventário de código |
| 2 | Banco, identidade, autorização e importador | PR 1 e definições da etapa 0 |
| 3 | Favoritos, anotações e conteúdo administrativo no destino | PR 2 |
| 4 | Arquivos, contato e exclusão de conta | PRs 2–3 |
| 5 | Conversas, streaming, memória e pesquisa da SophIA | Identidade/API e decisão de IA |
| 6 | Remoção dos pacotes, mídia, cache, documentação e deploy | PRs 3–5 |
| 7 | Evidências do ensaio e roteiro final de virada | PR 6 e exportações reais |

Estimativa inicial de planejamento: 20–35 dias úteis de engenharia para uma pessoa, com acesso disponível e volume moderado. Faixa indicativa, não compromisso: inventário 2–3; contratos 2–3; backend/dados 5–8; arquivos/e-mail 2–3; IA 4–8; build/cache 2–4; ensaio/virada 3–6. Espera por acesso, recuperação de dados e revisão clínica não estão incluídas. Reestimar ao concluir a etapa 0; histórico/memória da IA e migração de identidades são as maiores incertezas.

## Verificação final de independência

- [ ] Instalação limpa, build, lint e typecheck executados; falhas preexistentes documentadas e nenhuma nova falha introduzida pela migração.
- [ ] Testes de autorização cobrem visitante, usuário A, usuário B e admin, inclusive acesso por IDs conhecidos.
- [ ] CRUD, filtros, ordenação, paginação, duplicados e concorrência de favoritos validados.
- [ ] Conteúdo e resultados das calculadoras preservados por testes de regressão representativos, sem alterar fórmulas nesta migração.
- [ ] Contato, upload, exclusão de conta, login expirado, logout e streaming testados também em cenários de falha.
- [ ] Dados e objetos reconciliados; backup restaurável; nenhuma associação incorreta entre identidades e registros.
- [ ] Nenhum pacote `@base44/*` no manifesto/lockfile/árvore instalada; nenhuma referência executável no bundle ou configuração de produção.
- [ ] Nenhuma requisição a domínios Base44 ao navegar pelas rotas, inclusive favicon, mídia, autenticação e IA; testar bloqueio desses domínios.
- [ ] Remoção de URLs Base44 em dados persistidos; exceções históricas/documentais não representam dependência de execução.
- [ ] Sessões, cache privado e service worker testados com troca de usuário e atualização da versão antiga.
- [ ] Homologação, observabilidade, restauração e reversão verificadas antes de desligar o ambiente anterior.

## Limites da análise realizada

Foi clonado e inspecionado o código e os esquemas versionados. Não foram acessados o painel Base44, dados reais, segredos, configuração de domínio, logs ou contas de usuários. Não foram instaladas dependências nem executados build, lint, typecheck ou testes nesta entrega de planejamento; portanto, o funcionamento atual em execução não foi atestado. O único arquivo adicionado por esta tarefa é este plano.
