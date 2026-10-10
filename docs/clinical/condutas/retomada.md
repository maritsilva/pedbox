# Ponto de retomada — 09/10/2026

- 163 entradas preservadas na matriz; 23 respiratórias. Três rascunhos na API local: Crupe, bronquiolite e epiglotite. Nenhuma publicação autorizada ou realizada.
- Crupe: dois artigos do UpToDate consultados. Epiglotite: manejo e tabela pediátrica consultados; diagnóstico pendente. Bronquiolite: UpToDate pendente.
- Leitura responsiva e referências corrigidas; quatro testes E2E de rascunhos/biblioteca passaram, TypeScript, build e lint aprovados.
- Login local corrigido: APP_ORIGIN da configuração local agora é http://127.0.0.1:5173; API reiniciada e entrada administrativa confirmada no navegador.
- Aspiração: referências efetivamente lidas agora registradas na matriz. Alguns candidatos anteriores eram menções em diferenciais de outros temas e foram reclassificados. Livro de 2017 diverge do resumo oficial AHA/AAP 2025 no algoritmo da criança consciente; verificar algoritmo completo antes de redigir manobras. Nenhum conteúdo público alterado.
- Próximas etapas: completar aspiração com UpToDate e algoritmo atual, depois asma e pneumotórax; complementar bronquiolite. Manter as divergências de doses e duração explícitas e submeter o lote à revisão clínica antes de publicar.

## Atualização técnica — 10/10/2026

Pedido prioritário de Marina: manter layout PedBox e integrar CDC/OMS à página IMC usando sua API RCPCH. Concluída integração local, ver docs/clinical/imc-rcpch-adaptation.md. Chave SOMENTE em .env ignorado; não reproduzir em mensagens, comandos diagnósticos ou documentos. Prévia http://127.0.0.1:5173/imc; API porta 3001. A pesquisa clínica das condutas continua pendente conforme matriz, sem publicar rascunhos.
