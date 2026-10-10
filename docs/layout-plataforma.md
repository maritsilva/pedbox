# Layout da plataforma — 8 de outubro de 2026

A revisão abrange a estrutura compartilhada da plataforma e as páginas clínicas: navegação, espaçamento responsivo, tipografia, campos, leitura de conteúdo, biblioteca, medicamentos, favoritos, calculadoras, login, configurações, administração, pesquisa e contato.

## Decisões visuais

- Fundo neutro, superfícies brancas e azul escuro para navegação e cabeçalhos de escores.
- Cores de gravidade, alertas e resultados preservadas nos componentes clínicos.
- Larguras de leitura próprias para formulários e conteúdo; margens consistentes por meio de `page-surface`.
- Abas da biblioteca agrupadas, com estado selecionado acessível e alvos de toque de 44 px.
- Cabeçalho móvel sem duplicar o título principal da página; configurações usa a navegação comum.
- Login e acesso à pesquisa com o mesmo padrão de cartões.
- Protocolos sem contêiner duplicado; colunas e botões com largura mínima corrigida para evitar cartões cortados em celulares.
- Cache do aplicativo atualizado para v6.

## Verificação

Lint e compilação aprovados. A suíte de navegador completa passou antes da última correção dos cartões de protocolos: 7 testes, incluindo 32 rotas públicas, login, notas, persistência, controle de acesso e funcionamento offline. O teste responsivo cobre 21 URLs nas larguras 390 e 1280 px. Imagens de biblioteca, APGAR e login são geradas em `test-results` para inspeção; esses arquivos são temporários.

Esta etapa é visual. Não constitui aprovação clínica das fórmulas, doses ou condutas. A matriz de pesquisa dos 163 tópicos, complementação no UpToDate e revisão clínica permanecem pendentes, assim como a homologação em ambiente real do Render. Não houve publicação nem contratação de serviços.

## Simplificação solicitada pela usuária

A segunda revisão prioriza interação direta: início compacto com busca e quatro acessos, catálogo único em lista com busca e categoria, favoritos com área de toque de 44 px e cabeçalhos de escores claros. O tema compartilhado reduz sombras, raios e tamanho dos títulos nas rotas existentes; cores clínicas de alertas e resultados são preservadas.

O menu móvel usa diálogo modal com contenção de foco e fechamento por Escape. Os atalhos de condutas e protocolos abrem a aba correspondente. Foi retirado da estrutura o gesto de atualização que apenas esperava e não atualizava dados. A navegação Voltar tem retorno ao início quando não existe página anterior dentro do aplicativo. Cache atualizado para v7.

O catálogo de ferramentas inclui o registro de calculadoras e exibe estados de revisão/desativação. O teste de navegador cobre a navegação pelo menu e a busca sem acentos no catálogo, além dos fluxos existentes.

Na verificação final, foram corrigidos dois problemas das animações anteriores: deslocamento lateral que excedia a largura na abertura da dosagem e remontagem tardia da página após redirecionamento, capaz de limpar a busca recém-digitada. A troca de rota agora é imediata, preservando a reinicialização dos formulários quando o endereço muda.

## Favoritos: revisão de interação

Cartões compactos com área principal para abrir e botão nomeado para remover. Corrigidos filtros de categoria que anteriormente alteravam apenas a aparência, acrescentado filtro Medicamentos e normalização de acentos na busca. O estado vazio agora considera os favoritos salvos, sem esconder os controles quando a busca não retorna resultados. Removido o painel promocional repetido.

Validação: compilação, lint e TypeScript aprovados; teste de navegador com favoritos de ferramenta, medicamento e protocolo passou para filtro por tipo, pesquisa sem acentos, recuperação de busca vazia e remoção persistida. Dados de teste isolados e removidos ao finalizar.

## Biblioteca: navegação e busca

Resultados de busca abrem diretamente o protocolo ou a conduta usando parâmetros no endereço. Corrigidos resultados que perdiam o identificador no redirecionamento e seleção de conduta que dependia de armazenamento local sem abrir o tópico. Favoritos usam os mesmos links diretos. Endereços antigos de protocolos preservam seus parâmetros.

Busca sem distinção de acentos; durante a pesquisa, a lista da aba é substituída pelos resultados para reduzir duplicação visual. Trocar de aba limpa busca e tópico selecionado. O estado do tópico é derivado do endereço e dos dados carregados, permitindo recarregar e navegar pelo histórico. Não houve modificação dos textos clínicos.

Testes específicos aprovados para protocolo encontrado pela busca, acesso por link antigo, recarga, conduta encontrada e troca de aba. Compilação, TypeScript e lint aprovados.

## Catálogos e fluxogramas — 09/10/2026

Dosagens: lista por categoria em duas colunas no desktop/uma no celular, filtro por categoria, favoritos, busca sem acentos, sem carrossel de “mais usados” ou cartões promocionais. Seleção do medicamento sincronizada com URL e histórico.

Condutas: catálogo compacto por categoria/subcategoria, filtro em seletor, remoção da barra lateral duplicada e cabeçalho de leitura neutro. Biblioteca: navegação por seções com indicador discreto e largura consistente.

Protocolos: texto e fluxograma com ações explícitas e separadas, busca local e filtro de especialidade. Fluxograma em diálogo Radix, foco contido, Escape para fechar, título acessível e rolagem interna. Diagramas preservam cores de gravidade e conteúdo clínico; largura mínima evita comprimir ramos em colunas ilegíveis no celular.

Verificação: 11 testes de navegador passaram, incluindo navegação profunda, histórico de dosagens, filtros, diálogo e layouts em 390/1280 px. Capturas de Biblioteca, Condutas e fluxograma inspecionadas; diagrama recebeu largura mínima após inspeção. Build, TypeScript e ESLint aprovados.
