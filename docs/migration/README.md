# Importar e exportar dados

O código antigo não inclui os dados hospedados. As cópias de esquemas em `source-schemas/` e `source-agent.json` são somente documentação histórica, sem dependência de execução. Obtenha a exportação completa na conta de origem antes de desligá-la.

## Formato de entrada

Forneça uma pasta privada com `User.json`, `Favorito.json`, `Anotacao.json`, `CategoriaCustom.json`, `Conduta.json`, `LinkBiblioteca.json` e `Vacina.json`. Cada arquivo deve ser um array JSON; use `[]` quando a entidade estiver vazia. Não confunda exportar a definição da entidade com exportar seus registros. Se a ferramenta de origem gerar CSV ou envelope paginado, converta explicitamente e confira todas as páginas antes de importar.

Preserve `id`, `created_date`, `updated_date` e `created_by_id`. IDs são strings e podem ser mantidos sem conversão para UUID. Datas devem ser válidas e incluir o fuso da origem. O importador não inventa datas nem ignora campos de domínio desconhecidos: revise a exportação se o contrato divergir. Metadados de plataforma sem uso (`app_id`, `created_by`, `is_sample`) são descartados; o proprietário dos dados privados é preservado por ID.

Exemplo de `User.json`:

```json
[{"id":"usuario-antigo","email":"pessoa@example.com","full_name":"Pessoa","role":"user","created_date":"2026-01-01T00:00:00Z"}]
```

Exemplo de `Anotacao.json`:

```json
[{"id":"nota-antiga","created_by_id":"usuario-antigo","titulo":"Minha nota","conteudo":"Texto","cor":"yellow","created_date":"2026-01-01T00:00:00Z"}]
```

`identity-map.json` opcional associa o ID antigo à identidade verificada no novo provedor:

```json
{"usuario-antigo":{"issuer":"https://seu-provedor.example","subject":"identificador-verificado"}}
```

Não associe contas por e-mail não verificado. Sem esse mapa ou `issuer`/`subject` no usuário, o perfil antigo fica preservado, mas sem login vinculado; o relatório contabiliza `unlinkedUsers`. Corrija os vínculos antes de liberar a migração para usuários existentes. Se um novo usuário já tiver sido criado por login, resolva a colisão de identidade antes de importar; não substitua IDs às cegas.

Conversas opcionais em `Conversation.json` têm `{id,user_id,name,messages,created_date,updated_date}`; mensagens têm `role` (`user` ou `assistant`) e `content` textual. `Memory.json` opcional tem `[{"user_id":"usuario-antigo","content":"Memória exportada"}]`. O formato real do exportador de agentes ainda precisa ser conferido; formatos incompatíveis devem ser transformados conscientemente. Conversas/memórias não fornecidas não podem ser reconstruídas pelo código.

## Arquivos e URLs

Copie os anexos para a pasta de entrada e crie `files.json`:

```json
[{"name":"arquivo.png","path":"files/arquivo.png","sha256":"CHECKSUM_SHA256_REAL"}]
```

Crie `media-map.json` mapeando cada URL antiga ao novo endereço, por exemplo:

```json
{"https://media.base44.com/caminho/exportado.png":"/uploads/arquivo.png"}
```

O arquivo mapeado deve estar presente em `files.json`. O importador verifica checksums e reescreve URLs inclusive em Markdown. Ele não baixa endereços arbitrários nem sobrescreve arquivos de destino diferentes. URLs Base44 sem mapeamento provocam erro. Inspecione os arquivos de origem antes de importá-los; a migração é uma operação do administrador, não um endpoint público de upload.

## Executar

Com o backend local parado se estiver usando PGlite:

```bash
npm run migrate:import -- /caminho/da/exportacao
npm run migrate:import -- /caminho/da/exportacao --apply
npm run migrate:export -- exports/backup-novo
```

A primeira chamada é uma simulação: executa validações e SQL em transação e desfaz os registros. Migrações de esquema podem ser aplicadas mesmo na simulação. A segunda grava os dados; cópia de mídia só acontece com `--apply`. A importação de dados é atômica, sem checkpoints parciais: uma falha desfaz todos os registros. Arquivos copiados antes de uma falha podem ficar órfãos; não remova arquivos existentes sem conferir referências.

Repetir registros iguais é seguro. Registros com o mesmo ID e conteúdo/proprietário diferente causam falha. `--replace` permite substituição explícita e deve ser usado apenas após revisão e backup, especialmente no delta final. Não use o importador sobre um destino recebendo escritas de usuários. Favoritos duplicados por `(user_id,tipo,chave)` causam erro para evitar perda silenciosa.

Confira totais por entidade e por usuário, identidades não vinculadas, amostras de conteúdo, datas e anexos. Restaure uma exportação em banco separado e valide as telas antes de produção. Para volumes grandes, meça o consumo de memória em homologação: o importador atual carrega os arquivos JSON em memória e é destinado a volumes moderados.

`Vacina` é preservada no banco para não perder registros remotos. A tela pública continua usando `src/lib/vacinasData`, como no código original; trocar a fonte exigiria decisão de conteúdo separada.
