# Operação do PedBox

## Desenvolvimento preparado

`npm ci`, uma cópia de `.env.example` para `.env` e `npm run dev` iniciam a aplicação com PostgreSQL embutido persistente. Não é necessário instalar PostgreSQL separadamente. O processo que usa PGlite deve ser único: pare a API antes de executar importação/exportação sobre o mesmo diretório local. Para várias instâncias ou produção, configure `DATABASE_URL` e use PostgreSQL externo.

A conta local tem ID `local-developer` e papel admin. Ela não representa nenhum usuário do sistema antigo. `DEV_AUTH` exige ambiente não produtivo, origem local e conexão de loopback. Nunca publique essa configuração através de um túnel. Em produção o servidor recusa o modo local e exige HTTPS e PostgreSQL externo.

## Caminho de publicação preparado

O repositório inclui Dockerfile, Compose, PostgreSQL persistente e Caddy para HTTPS. Essa opção roda em uma VM sua com Docker, endereço IP público, domínio apontado para ela e portas 80/443 disponíveis. Não há uma hospedagem permanente fornecida pelo assistente. Esta entrega não criou conta de nuvem, contratou servidor ou configurou DNS.

1. Copie `deploy/production.env.example` para `.env.production` no servidor.
2. Preencha `DOMAIN`, `APP_ORIGIN` e uma senha aleatória hexadecimal em `POSTGRES_PASSWORD`. Preencha login/e-mail/IA conforme abaixo. O arquivo contém segredos: mantenha permissões restritas e fora do Git.
3. Execute `docker compose --env-file .env.production up -d --build`.
4. Confira `docker compose --env-file .env.production ps` e o endpoint `https://SEU_DOMINIO/api/v1/health`.
5. Faça o primeiro login e promova o usuário pelo ID com `docker compose --env-file .env.production exec app node scripts/set-admin.js ID_DO_USUARIO`. Obtenha o ID em `/api/v1/me` na sessão desse usuário. Rebaixamento: acrescente `user` ao comando.

O Compose não publica portas do PostgreSQL nem da API diretamente. `TRUST_PROXY_HOPS=1` é específico para esse único proxy; ajuste apenas ao conhecer a topologia. Sessões e limites de requisição ficam no banco, permitindo múltiplos processos quando a infraestrutura de arquivos também for compartilhada. O armazenamento de arquivos implementado é disco persistente, apropriado à VM única: uma plataforma que descarta o disco exige adaptar esse serviço ou montar um volume persistente.

O Caddy obtém certificados para um domínio público corretamente configurado. Referência: [documentação oficial do proxy Caddy](https://caddyserver.com/docs/quick-starts/reverse-proxy). O manifesto foi preparado, mas o contêiner e HTTPS público ainda precisam ser validados no servidor de destino; não houve deploy nesta entrega.

## Login público

O backend usa `openid-client` com Authorization Code, PKCE, state e nonce. Ele aceita um provedor OpenID Connect mantido, por exemplo Google configurado como cliente web ou um serviço OIDC de sua escolha.

Configure `OIDC_ISSUER`, `OIDC_CLIENT_ID` e `OIDC_CLIENT_SECRET`. Registre exatamente `https://SEU_DOMINIO/api/v1/auth/callback` como callback autorizado. Solicita `openid email profile` e autenticação recente (`max_age=0`); o provedor deve incluir `auth_time`. Valide login, expiração e retorno à rota original com o provedor real antes de publicar para usuários.

O vínculo é por `issuer` e `subject`, não por e-mail. Contas novas recebem papel user; claims do provedor não concedem admin. Apenas e-mail verificado é armazenado. Contas antigas devem ser vinculadas explicitamente durante a importação, com prova de identidade; não é seguro associá-las apenas por coincidência de e-mail. As credenciais/sessões antigas não são reutilizadas.

A sessão local dura oito horas, usa cookie HttpOnly, SameSite=Lax e Secure em produção. Toda operação de alteração verifica Origin. Logout revoga a sessão PedBox; a sessão no provedor não é encerrada globalmente. Exclusão exige autenticação nos últimos cinco minutos, apaga o usuário e seus favoritos, notas, conversas e memória por cascata e revoga todas as sessões PedBox. Não apaga conteúdo público administrativo nem a conta do provedor. Backups seguem seu prazo operacional de retenção; não prometa eliminação imediata de todas as cópias.

Referência técnica: [openid-client](https://github.com/panva/openid-client). O fluxo real do provedor continua pendente de credenciais; os testes locais não substituem essa homologação.

## E-mail e anexos

Configure `SMTP_URL`, `MAIL_FROM` e `CONTACT_TO`. `CONTACT_TO` é controlado pelo servidor. O formulário fornece nome, e-mail, instituição, motivo e mensagem; o remetente digitado vira Reply-To. Configure SPF/DKIM no serviço escolhido e teste a entrega real. Sem SMTP configurado, a API retorna indisponibilidade.

Uploads exigem admin, até 10 MiB e assinatura de arquivo PNG/JPEG/WebP/GIF/PDF. Os nomes são gerados no servidor e os arquivos são públicos, pois servem ao conteúdo público da biblioteca. Não use esse endpoint para anexos clínicos privados. O volume `uploads` deve participar do backup. A aplicação não remove arquivos públicos ao excluir uma conta administrativa, porque conteúdos públicos podem continuar referenciando-os.

## SophIA

Configure `ANTHROPIC_API_KEY` e `ANTHROPIC_MODEL` no servidor. O adaptador usa a API Anthropic diretamente e preserva as instruções de origem em `server/research/instructions.txt`, acrescentando limites explícitos sobre conteúdo não consultado. O modelo é configurável; confirme acesso ao modelo escolhido na conta. Não há chave no bundle do navegador.

`AI_WEB_SEARCH=true` habilita a ferramenta de busca oferecida pela API, até três usos por resposta; links de citações retornados pelo provedor são apresentados como fontes. A ferramenta depende de habilitação na conta e pode gerar cobrança. Sem ela, o agente recebe instrução para informar que não dispõe de pesquisa atual. Referência: [busca web da API Claude](https://platform.claude.com/docs/en/agents-and-tools/tool-use/web-search-tool).

Conversas e mensagens são persistidas no PostgreSQL. A interface permite recuperar até 100 conversas recentes, cancelar solicitações e repetir uma tentativa com a mesma chave, sem duplicar respostas já concluídas. SSE transmite o estado de geração e a resposta completa; não há transmissão token a token. A geração considera até 29 mensagens recentes e tem limite de duração, frequência e tamanho. Ao exceder 200 mensagens, é necessário abrir outra conversa.

Memória anterior pode ser importada em `Memory.json`. Não foi implementada extração automática de nova memória entre conversas; o histórico da conversa fornece o contexto corrente. Não há indexação automática de todos os arquivos clínicos nem acesso garantido a fontes licenciadas. A qualidade clínica e fidelidade das fontes precisam de homologação por responsável clínico, com o serviço real configurado.

## Backup, monitoramento e reversão

`npm run migrate:export -- exports/backup-NOVO` exporta entidades, identidades OIDC, conversas, memória, manifesto de checksums e cópia de arquivos quando configurados. Não inclui tokens de sessão ou segredos do ambiente. Use pasta nova e armazenamento privado; transfira os backups para fora do servidor e teste uma restauração periodicamente. A frequência e retenção devem ser definidas antes de produção.

No Compose, faça também backup PostgreSQL (`pg_dump`) e dos volumes, mantendo escritas em manutenção quando precisar de um marco consistente entre banco e objetos. Exporte para volume montado ou copie o arquivo para fora do contêiner; o filesystem do contêiner não é backup persistente. Monitore `/api/v1/health`, erros 5xx, espaço em disco, falhas de SMTP/IA e duração de requisições. Configure alertas na plataforma de hospedagem; não existe serviço de monitoramento externo criado por esta entrega.

Antes de trocar o tráfego: ensaie restauração, congele escritas na origem, importe o delta e reconcilie contagens/proprietários/arquivos. Preserve o ambiente antigo durante o período de observação definido. Se precisar voltar, congele novas escritas e reconcilie os dados criados no destino antes de reabrir a origem. Trocar DNS sozinho não recupera alterações.
