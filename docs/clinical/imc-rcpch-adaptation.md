# IMC: integração RCPCH com layout PedBox

Atualizado em 10/10/2026. Layout, componentes, cores e navegação seguem o PedBox. Não foi incorporado o componente de gráficos ou a identidade visual RCPCH.

## Integração

O servidor faz chamadas autenticadas para `https://api.rcpch.ac.uk/growth/v1/{cdc|who}/calculation` e `/chart-coordinates`. A chave é lida de `RCPCH_API_KEY`, somente no servidor. Configurar como segredo no Render, nunca como variável VITE. A configuração local está no arquivo ignorado `.env`; a chave não integra testes, documentação nem frontend.

A página permite selecionar CDC ou OMS/WHO (diferente de UK-WHO), acompanhar várias medições, visualizar percentis ou SDS e conferir uma tabela. A referência, o nascimento, sexo e idade gestacional são bloqueados após o primeiro registro. A idade plotada é a corrigida retornada pela API. Respostas completas, incluindo proveniência e versões, permanecem associadas à medição em memória. Não há persistência entre páginas ou recarregamentos.

Os campos enviados ao RCPCH são datas, sexo, idade gestacional e medidas. Não há nome ou identificador. Três chamadas por medição, sem fallback silencioso. Validação de entrada, timeout, limite de solicitações, origem verificada e `no-store` são aplicados. Curvas públicas são cacheadas no servidor por até seis horas, com um conjunto limitado de combinações; os resultados individuais não são cacheados.

As curvas mantêm os segmentos de origem separados, incluindo transições WHO 2006/2007. Valores sem resultado válido aparecem como ausentes; IMC sem resultado válido impede adicionar a medição. O módulo CDC local de lactentes foi preservado. A integração não implica certificação clínica do PedBox.

## Fontes consultadas

- https://growth.rcpch.ac.uk/integrator/making-api-calls/
- https://api.rcpch.ac.uk/growth-spec/v1/
- https://growth.rcpch.ac.uk/developer/who-reference-implementation/
- Pasta local `/Users/marina/Downloads/TABELAS IMC`: PDFs de instruções 0–5 e 5–19 anos, documento de computação de centis/escores Z, planilhas expandidas.

Os PDFs explicam a conversão de dias em meses (30,4375), a transição comprimento/estatura e o tratamento das caudas fora de ±3 Z. Não foi implementada uma fórmula LMS genérica como substituto da API.

## Verificação e limites

Chamadas reais fictícias CDC e WHO retornaram 200, motor 4.6.4 / API 5.1.0 com proveniência. Fixtures em `tests/fixtures/growth` contêm apenas dados fictícios e curvas públicas. Comparação registrada em `who-table-comparison.json`: 392 pontos de percentis IMC masculino WHO 2007 comparados com a planilha fornecida, diferença máxima 0,0007 kg/m². Essa amostra não certifica todos os indicadores/sexos/idades.

Testes cobrem validação, chave apenas no header upstream, ausência de fallback, resultados fora de faixa, preservação da proveniência, gráficos, isolamento de referência, remoção, duplicatas e responsividade. A revisão clínica independente permanece pendente. Idade óssea e eventos não foram incorporados ao fluxo.

Resultado final desta rodada: build, TypeScript e ESLint aprovados; 8 testes de integração/crescimento, 15 testes existentes do servidor e 4 testes de navegador aprovados. Teste real da prévia: paciente fictício, OMS, IMC 19, percentil 92,91, Z 1,47; 21 segmentos de curva, 1 ponto, nenhum erro JavaScript e nenhum transbordamento horizontal em 390 px. Capturas desktop/mobile em artifacts/design. Inspeção confirmou ausência da chave em src, dist, docs, tests e server.

## Seletores ampliados — 10/10/2026

A página agora expõe as seis referências oficiais (CDC, WHO, UK-WHO, Turner, trissomia 21 UK/Irlanda e trissomia 21 AAP), os quatro métodos de medição, os cinco formatos nomeados de curvas mais valores personalizados em percentis/SDS e os cinco métodos de idade óssea. O cálculo combinado de peso/altura foi preservado como conveniência. Escolhas específicas de diagnóstico são restritas por confirmação informada nesta sessão; Turner exige sexo feminino e estatura, com validação também no servidor. Formulários não alteram o layout global.

As opções pertencem aos endpoints clínicos de cálculo e gráficos. Os endpoints de geração de pacientes fictícios e cálculo em lote não são apresentados como fluxo clínico. Valores de idade óssea são transmitidos e preservados na resposta, sem inferir método ou diagnóstico.

Testes: 8 testes da integração e 5 de navegador aprovados, além de build, tipos e lint. Testes reais fictícios passaram para UK-WHO, Turner, ambas as referências de trissomia 21 e OFC OMS; gráfico Turner com linhas SDS personalizadas retornou 200. A proveniência Turner usa `turners-syndrome` na versão observada, embora a rota seja `turner`; essa correspondência explícita é validada sem alterar a resposta original. Coordenadas negativas de idade corrigida foram preservadas para prematuros, sem descartar os segmentos anteriores ao termo.
