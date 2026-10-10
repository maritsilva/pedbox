# Estado de retomada — 09/10/2026

O trabalho global ainda NÃO está concluído. Não publicar nem contratar serviços sem a etapa de implantação combinada. As condutas continuam reservadas para o fim da atualização técnica e em rascunho até aprovação.

Última alteração: calculadora de idade corrigida reescrita com motor puro (`src/lib/correctedAge.js`), datas validadas, semanas/dias exatos, distinção da idade pós-menstrual e ausência de correção em nascidos a termo. Fonte AAP e limites registrados em `docs/clinical/revisao-calculos.md`. Cinco testes do motor passaram; build, ESLint e TypeScript aprovados. Teste de navegador do novo fluxo deve ter seu resultado consultado na conversa.

Antes disso: sete tabelas CDC 2000 foram substituídas pelos arquivos oficiais completos. CSVs, hashes e gerador offline em `data/references/cdc-2000` e `scripts/generate-cdc-lms.js`; três testes comparam todas as linhas e percentis publicados. Pressão arterial bloqueada por erros comprovados de classificação; Rodwell também permanece bloqueado. Código original preservado. Revisão clínica pendente continua distinta de bloqueio.

Próximos passos concretos:

- Continuar conferência individual de cálculos/doses e fontes: 133 medicamentos, 208 indicações; ainda há limites diários ambíguos e apresentações a revisar. Não inferir doses a partir de dados contraditórios.
- Conferir as tabelas de PA e reconstruir o algoritmo em mmHg antes de liberar. Onze das 19 novas ferramentas do catálogo ainda não têm motor; as novas permanecem em prévia administrativa.
- Concluir homologação Docker/PostgreSQL real, persistência de uploads e restauração/reversão. Docker e pg_dump não estavam instalados; nenhum servidor foi contratado/publicado.
- Após atualização técnica: confirmar edições dos cinco PDFs pediátricos indicados, montar matriz dos 163 tópicos e então complementar no Chrome autenticado com UpToDate. Não usar livros gerais, não publicar textos sem revisão, não disponibilizar os PDFs no site.

Não iniciar outra migração Base44: a migração para API própria já existe neste checkout. Não resetar as alterações não commitadas. Testes de navegador usam Chrome isolado e banco `.data/e2e`, não a base local da usuária. Comandos Node precisam do PATH do runtime Codex. O agendamento de retomada deve continuar enquanto o escopo completo estiver pendente.
