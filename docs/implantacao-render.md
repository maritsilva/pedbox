# Implantação no Render

Estado: configuração preparada; nenhuma conta criada, cobrança autorizada ou implantação realizada. O orçamento será apresentado antes da contratação.

## Estrutura

`render.yaml` prepara um serviço Docker para a interface e a API na mesma origem, PostgreSQL gerenciado e disco persistente para uploads. Não publicar somente `dist`: autenticação, favoritos, anotações e administração precisam da API. Manter o disco em `/app/.data`; apenas arquivos nesse volume sobrevivem à troca de contêiner. O serviço com disco usa uma instância e pode ter interrupção breve no deploy.

## Antes de ativar

1. Revisar cotação dos planos e região no painel. A região inicial é Ohio, mantendo aplicação e banco na mesma região; não há recursos provisionados.
2. Conectar o repositório e a revisão testada. Deploy automático está desligado.
3. Definir `APP_ORIGIN` com a URL HTTPS final. Configurar domínio e redirecionamento OIDC para `/api/v1/auth/callback`. `DEV_AUTH=false` é obrigatório.
4. Preencher as credenciais OIDC. SMTP e IA são opcionais; sem configuração suas funções devem informar indisponibilidade. Nunca colocar segredos em variáveis `VITE_*`.
5. Executar validações de lint, tipos, testes, build e independência. Criar homologação separada e não usar dados reais de pacientes nos testes.
6. Após login real, promover o ID correto com `node scripts/set-admin.js ID`. Verificar conta comum sem acesso administrativo.

## Aceitação na homologação

- `/api/v1/health` responde 200 e consulta o banco.
- Login/logout, favoritos e anotações persistem após reiniciar o serviço.
- Upload permanece após novo deploy; visitantes não podem enviar arquivos.
- Rascunhos clínicos não aparecem a visitantes. Publicação requer conteúdo, referências e revisão explícita no painel; uma edição devolve o texto a rascunho.
- E-mail e IA só são considerados homologados após testar com os serviços reais configurados.
- Nenhuma ferramenta com erro comprovado está liberada; novas calculadoras permanecem em revisão.

## Backup e reversão

Definir backup diário e retenção inicial de 30 dias, com cópia privada fora do serviço. Fazer `pg_dump` do PostgreSQL e cópia do diretório de uploads em uma janela sem escritas. A exportação `node scripts/export-data.js PASTA_NOVA` complementa o backup; não inclui segredos nem sessões. Ensaiar restauração em banco e volume separados e conferir contagens, proprietários e checksums antes da produção.

Antes do deploy, registrar a revisão anterior e criar backup. Reverter a imagem não desfaz migrações nem recupera dados: se necessário restaurar, suspender escritas e reconciliar alterações recentes primeiro. Monitorar saúde, erros 5xx, espaço em disco e falhas nas integrações. Configurar os alertas no painel na publicação.

Referências consultadas: [Blueprint](https://render.com/docs/blueprint-spec), [disco persistente](https://render.com/docs/disks). O esquema preparado precisa ser validado também pelo Render na conta de destino; não se confunde com uma implantação homologada.

## Checagem de configuração

Com as variáveis do ambiente de homologação definidas, executar `npm run check:production` (ou `node scripts/preflight.js` no contêiner). A saída não inclui valores de segredos. Código de saída 1 indica configuração incompatível com produção; código 0 permite avançar para os testes reais de homologação. Avisos identificam integrações indisponíveis.

Essa checagem não cria recursos, não conecta a provedores e não substitui o ensaio de backup/restauração, o teste de permissões do disco ou a aprovação clínica. Docker e pg_dump não estão disponíveis no ambiente local atual; a execução do contêiner e o backup nativo PostgreSQL ainda precisam ser conferidos no ambiente de destino ou em uma máquina com essas ferramentas.
