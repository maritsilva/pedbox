# Horas de vida e idade gestacional

Implementação própria, 10/10/2026. Rotas `/horas-de-vida` e `/idade-gestacional`; integração no catálogo de calculadoras, ferramentas, busca e cabeçalho móvel.

## Horas de vida
Diferença entre instantes locais em minutos completos. Exibe horas completas, minutos restantes, decomposição em dias de 24 horas e horas decimais. Não arredonda a hora completa para cima. Modo atual usa relógio do dispositivo, atualizado a cada segundo e ao retomar foco; modo escolhido usa data/hora explícitas. Dados permanecem na memória da página, sem envio de informações do paciente.

Datas/horários inválidos, hora inexistente em transição de verão e referência anterior ao nascimento são rejeitados. Fuso é exibido; ambos os horários devem corresponder ao fuso do dispositivo. Na repetição de horário de verão adota-se a primeira ocorrência, comportamento explicitado na interface. Não permite selecionar dois fusos distintos.

## Idade gestacional
Referência funcional consultada: https://www.fetalmed.net/calculadora/calculadora-idade-gestacional/ (10/10/2026). Implementados quatro métodos de entrada com interface PedBox, sem copiar código, ilustrações ou textos da referência.

Base clínica: ACOG, AIUM, SMFM. Methods for Estimating the Due Date, Committee Opinion 700, https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2017/05/methods-for-estimating-the-due-date (consulta 10/10/2026).

- DUM: início informado, DPP +280 dias; pressuposto de ciclo de 28 dias explicitado.
- Ultrassom: início equivalente = data do exame − (7 × semanas + dias). Não calcula idade pela biometria; usa idade já registrada no laudo.
- DPP: início equivalente = DPP −280 dias.
- Transferência: início equivalente = transferência −14 dias − idade embrionária; DPP = transferência +266 − idade embrionária. D5 +261; D3 +263.
- Referência atual ou escolhida; dias de calendário em UTC exclusivamente para evitar dias de 23/25 horas alterarem a idade obstétrica.
- Trimestres: primeiro até 13s6d, segundo 14s0d–27s6d, terceiro a partir de 28s0d (ACOG, How Your Fetus Grows During Pregnancy).
- Faixa operacional de 0–44s6d, não é definição de duração normal da gestação. Calendário apenas aritmético, sem recomendações automáticas de exames.

A ferramenta não arbitra divergências DUM/ultrassom nem muda a datação obstétrica estabelecida. DUM equivalente identificada como tal. Revisão clínica independente continua pendente.

Validação: sete testes de unidade com referências de datas exatas, ano bissexto, DPP inversa, D3/D5, limites e entradas inválidas; testes de navegador em 390/1280 px, atualização automática do relógio, limpeza de resultado após edição e descoberta em ferramentas. TypeScript, lint dos novos arquivos e build executados.
