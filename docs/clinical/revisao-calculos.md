# Registro de revisão de cálculos

Data: 08/10/2026. Este registro distingue conferência da implementação de aprovação clínica. Os novos cálculos continuam em rascunho administrativo.

## PTS — Pediatric Trauma Score

Prévia implementada com seis componentes e intervalo de −6 a +12. Limites inclusivos: 10 e 20 kg recebem +1; PAS de 50 e 90 mmHg recebe +1. Nenhum campo vazio gera pontuação. Não exibe estimativa de mortalidade nem indica conduta automática.

Fontes: Tepas et al., 1987, PMID 3102714 (validação original); Pediatric Prevention Network, Pediatric Trauma, tabela 3 (componentes consultados em 08/10/2026): https://learn.pedspandemicnetwork.org/mod/book/view.php?chapterid=379&id=2785 . O livro local de emergências foi pesquisado por termos de trauma; essa busca não localizou a tabela completa, portanto não foi atribuído ao livro suporte que não foi conferido.

Testes: máximo 12, mínimo −6, quatro limites numéricos, pressão vazia, opção inexistente e peso negativo.

## Apgar

Erro comprovado corrigido: a implementação associava pontuações a manobras específicas de reanimação. Essas recomendações foram retiradas. A pontuação isolada não determina início ou sequência de reanimação. A tabela de referência foi contextualizada para avaliação aos 5 minutos em recém-nascidos a termo e prematuros tardios; não se trata de previsão individual de desfecho.

Fonte: AAP/ACOG, The Apgar Score, 2015, consultado em 08/10/2026: https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2015/10/the-apgar-score . A revisão clínica integral da ferramenta continua pendente.

## Campos incompletos

Apgar, PEWS, Silverman-Anderson e PAS-Asma: o cabeçalho agora mostra traço até concluir os critérios, em vez de um subtotal que poderia ser confundido com resultado completo. Zero continua sendo resultado válido quando todos os critérios respondidos levam a zero. As interpretações já condicionadas ao preenchimento completo foram preservadas, exceto a associação incorreta do Apgar descrita acima.

## Pendências

Conferir individualmente os demais catálogos, apresentações medicamentosas e escalas. Rodwell permanece bloqueado pelo erro previamente identificado; seu código foi preservado. Os 163 tópicos de condutas ainda dependem da matriz de fontes e da pesquisa final nos livros pediátricos e UpToDate. Nenhum lote foi publicado.

## Motor de dosagens e catálogo

Corrigida a validação do intervalo quando o teto é diário mesmo que a dose de base seja por tomada; sem intervalo, a divisão do teto não podia ser aplicada corretamente. Limites negativos/não finitos, unidades de concentração desconhecidas e frações inválidas agora não produzem resultado numérico.

O interpretador de frequência deixou de confundir duração do tratamento (por exemplo, 5–10 dias) com intervalo entre tomadas. Alternativas explícitas como 12/12h ou 1x ao dia são preservadas. Intervalos ambíguos ou esquemas em fases não são adivinhados.

O catálogo tinha dois registros de ceftriaxona no mesmo grupo, sendo o primeiro um subconjunto exato de duas indicações do segundo. A visualização agora usa apenas o registro de cinco indicações. Os arquivos de origem continuam intactos. Inventário regenerado: 133 medicamentos únicos e 208 indicações. Não houve atribuição automática de tetos clínicos.

## RDAI

Prévia administrativa implementada: sibilância expiratória (0–4), inspiratória (0–2), distribuição (0–2), três regiões de retração (0–3 cada). Faixa total 0–17, sem previsão de desfecho, indicação de tratamento ou ponto de corte de alta/internação. Testes conferem zero, máximo, caso misto, campo ausente e opção fora da escala.

Conferência da tabela: Kim et al., Arch Pediatr Adolesc Med, 2011, tabela 1 (https://jamanetwork.com/journals/jamapediatrics/fullarticle/1107654); Nonoyama et al., Can J Respir Ther, 2019, tabela 1, página 17 (https://cjrt.ca/article/81397.pdf). Consulta em 08/10/2026. Referências usadas para os componentes, sem transportar intervenções dos estudos para recomendações na ferramenta.

## Questionários com condição de uso pendente

CDLQI: integração eletrônica depende de confirmar as condições da Cardiff University; a ferramenta aponta ao recurso oficial. Roma IV: questionários oficiais dependem de licença da Rome Foundation. Nenhum texto integral desses instrumentos foi reproduzido e nenhum contato externo foi enviado em nome da usuária.

## Curvas de crescimento — 09/10/2026

Erro comprovado: a antiga tabela identificada como CDC 2000 apresentava, por exemplo, mediana de IMC feminino aos 240 meses de 28,2533; o arquivo oficial fornece 21,71699934. As tabelas simplificadas de IMC, estatura, peso, comprimento, perímetro cefálico e peso/comprimento foram substituídas pelos sete arquivos oficiais completos, com parâmetros LMS originais. Os arquivos anteriores estão preservados em `legacy-growth/*.txt` e não são importados pelo aplicativo.

Fonte: https://www.cdc.gov/growthcharts/cdc-data-files.htm (consulta 09/10/2026). CSVs originais e hashes SHA-256 em `data/references/cdc-2000/manifest.json`. Dados gerados em `src/lib/cdcOfficialLMS.js`. Mantida interpolação linear entre pontos LMS, admitida pela documentação CDC; não extrapolar além da faixa. Testes comparam todos os parâmetros e os percentis publicados em todos os registros dos sete arquivos, além de limites e entradas inválidas.

A calculadora de pressão arterial não pode mais usar o percentil de estatura de 24 meses para uma criança de 12 meses. O fluxo explica a indisponibilidade para menores de 2 anos. A própria tabela de pressão arterial continua pendente de conferência individual.

Esta correção valida a transcrição e a reprodução matemática de CDC 2000. Não equivale à aprovação clínica global nem define CDC como padrão brasileiro ou como referência preferencial para lactentes. Seleção OMS/CDC, interpretação, extremos de IMC e adequação por população continuam em revisão.

## Pressão arterial — bloqueio por erro comprovado, 09/10/2026

O ramo para menores de 13 anos em `getBPCategory` retornava “Pressão Elevada” sempre que PAS ≥120 ou PAD ≥80 após excluir P<90. Assim, percentis 99,9 com 160/100 mmHg recebiam classificação inferior à correta. Além disso, comparava `maxP < 95 + 12`, somando pontos percentuais; a referência exige 12 **mmHg** acima do valor de pressão no P95. A diastólica masculina de 1 ano também diverge da tabela 4 oficial em vários pontos de estatura.

Fonte: Flynn et al., AAP 2017, tabelas 3–5, https://publications.aap.org/pediatrics/article-abstract/140/3/e20171904/38358/Clinical-Practice-Guideline-for-Screening-and ; resumo oficial AAP com a tabela de classificação: https://aap2.silverchair-cdn.com/aap2/content_public/cms/resources/15681/2020-jul-pediatric-hypertension.pdf . Consulta 09/10/2026.

A rota e o catálogo agora marcam este cálculo como bloqueado; código e tabelas foram preservados para auditoria. A liberação requer a conferência integral das tabelas, correção do algoritmo por limites em mmHg e testes dos limiares por idade. Não foi bloqueado apenas por falta de revisão, mas por erros demonstráveis.

## Idade corrigida — 09/10/2026

Corrigidos três comportamentos: somar semanas extras para nascidos após 40 semanas; apresentar idade pós-menstrual como se fosse idade corrigida antes do termo; decompor anos/meses por 365/30 dias (produzindo meses artificiais). O motor agora usa datas UTC validadas e dias inteiros, sem efeitos de fuso/horário de verão, mostrando semanas e dias exatos. Nascidos a partir de 37 semanas mantêm idade cronológica; antes de alcançar a referência de 40 semanas, a apresentação identifica explicitamente idade pós-menstrual. A partir de 2 anos, o uso clínico da diferença aritmética exige individualização.

Fonte primária institucional: AAP, Corrected Age for Preemies, https://www.healthychildren.org/English/ages-stages/baby/preemie/Pages/Corrected-Age-For-Preemies.aspx ; consulta em 09/10/2026. A classificação de prematuro antes de 37 semanas também está descrita em https://publications.aap.org/pediatrics/article/153/2/e2023063801/196384 . A referência bibliográfica SBP não conferida da versão anterior foi retirada desta página. Código original do repositório preservado em `legacy-calculators/IdadeGestacionalCorrigida.jsx.txt`.

Formulário refeito com visual mínimo, campos rotulados, mensagens de erro e limpeza explícita. Testes incluem exemplo AAP (32 semanas ao nascer, 16 semanas cronológicas, 8 corrigidas), antes/no termo, pós-termo, ano bissexto, datas invertidas/inexistentes e dias gestacionais inválidos. Revisão profissional permanece pendente.
