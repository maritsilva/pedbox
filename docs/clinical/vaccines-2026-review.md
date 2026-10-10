# Vacinas — atualização documental 10/10/2026

Fontes efetivamente consultadas:
- Imunizacao_Pediatrica_Leitura_Expandida.pdf, 17 páginas, versão interna 07/10/2026. Referências por página junto de cada síntese.
- Livreto SBIm 2026/2027 anexado: calendário da criança e comentários, PDF pp. 10–11, atualização interna 17/06/2026. O nome do arquivo não foi usado como única evidência da edição.
- Instrução Normativa PNI 2026, PDF público de 60 páginas, https://www.gov.br/saude/pt-br/vacinacao/publicacoes/instrucao-normativa-que-instrui-o-calendario-nacional-de-vacinacao-2026.pdf/@@download/file . Consulta 10/10/2026: VIP PDF pp. 15–16; rotavírus pp. 16–17; pneumocócicas pp. 19–22; influenza pp. 25–27; covid p. 28; varicela p. 42.

## Diferenças resolvidas e limites
- VIP: SBIm junho ainda informa um reforço na oferta pública. Norma PNI atual PDF p.15 confirma dois reforços, aos 15 meses e quatro anos, citando NT64/2026. Adotada norma atual para SUS; divergência aparece na página.
- Pneumocócicas: PNI transição VPC20/VPC10/VPC20, esquema 2+1; SBIm prefere VPC20 ou VPC15 em 3+1 para início até seis meses. Não invalidar automaticamente VPC10 completa.
- Dengue retirada do marco antigo de 24 meses: Qdenga a partir de quatro anos SBIm, 10–14 PNI conforme oferta.
- Covid não é apresentada como três doses independentes do produto. Série Pfizer e histórico Moderna explicitados.
- Alergia a ovo deixou de ser contraindicação genérica à influenza: norma PNI PDF p.27 distingue gravidade e ambiente de aplicação.
- HPV: apresentação principal limitada à rotina 9–14. Ampliação off label 15–19 descrita pela aula identificada separadamente, com consulta ao posicionamento atual necessária. Não houve falsa atribuição de consulta aos arquivos de setembro citados pela aula.
- VSR separado conceitualmente: monoclonal não é vacina; elegibilidade exige protocolo específico. Não incluídos volumes/doses automáticos.
- Não há motor de recuperação individual nem certificação de segurança clínica. Revisão independente segue pendente; disponibilidade local, campanhas e condições especiais não são inferidas.

## Implementação e preservação
`vaccineGuide.js` contém sínteses próprias e IDs estáveis; `Vacinas.jsx` usa os componentes e cores do PedBox, comparação, busca sem acentos e filtro por marco. SBIm mostra o calendário recomendado completo, não apenas adicionais. O filtro exclui efetivamente itens sem rotina na rede selecionada. Notas abrem por elemento nativo details, com teclado, sem modal customizado.

`vacinasData.js` e o modal legado foram preservados, mas não são importados pela página atual. PDFs privados não foram copiados para public nem para o bundle. Conteúdo é referência de rotina e não uma prescrição personalizada.

Validação: TypeScript, ESLint dos arquivos alterados e build aprovados. Quatro testes unitários de filtros/regressões; dois testes Chrome (390 e 1280 px) aprovados, sem transbordamento horizontal. Capturas em artifacts/design/vacinas-*.png.
