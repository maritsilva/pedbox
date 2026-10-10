# Execução da migração — PedBox

Atualização: 07/10/2026. Branch local: `codex/remove-base44`.
Referência original: `bd80a9a135b4d05ab20f23c8ae07452c88b32f21`.

## Implementado

- Remoção do SDK, plugin Vite, parâmetros de autenticação, endpoints e mídia remota do Base44. Esquemas e configuração do agente foram preservados como documentação histórica em `docs/migration/`.
- API própria em `server/`, PostgreSQL com migrações versionadas e PostgreSQL embutido persistente via PGlite no desenvolvimento. PostgreSQL externo obrigatório em produção.
- Serviços de frontend em `src/api/services.js`, contexto de sessão integrado e rotas privadas/administrativas protegidas. Login público OIDC com PKCE/state/nonce, sessão de oito horas e autenticação local restrita ao desenvolvimento.
- CRUD de favoritos, anotações, categorias, condutas e links; isolamento por proprietário no servidor; tipos distintos de favoritos e compatibilidade com favoritos antigos de anotações.
- Upload administrativo com limite e validação de formato; envio SMTP com destinatário definido no servidor; exclusão do perfil e dos dados privados com revogação de sessões.
- Adaptador Anthropic para SophIA, busca web opcional, histórico persistente, cancelamento, tratamento de falhas e repetição idempotente. Transmissão de estado e resposta completa por SSE.
- Importação com simulação, transação, preservação de IDs, associação explícita de identidades e reescrita de URLs; exportação com manifesto e anexos. Não houve acesso aos dados reais da origem.
- Imagens locais, favicon próprio e cache offline restrito ao conteúdo estático. Respostas de API e arquivos enviados não são colocados no cache do service worker.
- Dockerfile, Compose com PostgreSQL e HTTPS via Caddy, configuração de exemplo, instruções de operação e workflow de CI. Nenhum servidor externo foi provisionado.
- Correção dos erros de lint/tipagem encontrados, incluindo imports sem uso, props opcionais, tipos de componentes e coerções numéricas já implícitas. Não houve revisão ou atualização de recomendações clínicas. A observação duplicada removida já era sobrescrita pelo valor seguinte em JavaScript.

## Verificação

Executados na versão atual:

| Verificação | Resultado |
| --- | --- |
| ESLint | Passou, sem erros |
| TypeScript / checkJs | Passou, sem erros |
| Build Vite | Passou |
| Testes de API e migração | 15 passaram |
| Testes de navegador (Chrome) | 3 passaram: 32 rotas públicas, login/anotações/logout e offline |
| Independência de execução | Sem Base44 em código, configuração de runtime, manifesto, lockfile ou bundle |
| Diff | Sem erros de whitespace |

Os testes de API exigem portas locais temporárias. O sandbox inicialmente bloqueou essas portas; a execução autorizada fora dessa restrição passou. Há testes de acesso anônimo, proprietário, outro usuário, admin, origem da requisição, arquivos disfarçados, serviços indisponíveis, e-mail, conversas, exclusão, expiração, importação, idempotência e restauração.

O build mantém aviso de tamanho do bundle (aproximadamente 3,1 MB antes de compressão). Dividir o bundle por rota é uma otimização posterior, não requisito para remover o provedor.

## Ainda necessário para produção

1. Disponibilizar uma conta/servidor de hospedagem e domínio, configurar o ambiente e ensaiar o deploy Docker. Não existe uma URL pública publicada nesta entrega.
2. Configurar e homologar o provedor OIDC, SMTP e a API de IA. Os testes de integrações usam substitutos locais; não comprovam entrega de e-mail, login no provedor ou geração real de respostas.
3. Exportar os usuários, registros, anexos e histórico/memória disponíveis no Base44; converter o formato, validar os vínculos e importar. O banco local preparado não é uma cópia de produção.
4. Validar o conteúdo clínico e as respostas da IA com o responsável pelo produto antes de uso real. A busca não garante acesso a fontes licenciadas. Não há indexação automática de todo o conteúdo nem extração de nova memória entre conversas.
5. Definir backups, retenção, alertas, janela de manutenção e responsável pela reversão; reconciliar o delta antes de desligar a origem.

As alterações permanecem no checkout local. Não foram enviadas ao GitHub, mescladas ou publicadas. Consulte [operação](operacao.md) e [migração de dados](migration/README.md) para os comandos e limites completos.
