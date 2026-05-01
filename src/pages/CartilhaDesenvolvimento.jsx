import React, { useState } from 'react';
import { ChevronDown, Book, AlertCircle, CheckCircle2, Users, Brain, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ageGroups = [
  { age: '2 meses', id: 'dois-meses' },
  { age: '4 meses', id: 'quatro-meses' },
  { age: '6 meses', id: 'seis-meses' },
  { age: '9 meses', id: 'nove-meses' },
  { age: '12 meses', id: 'doze-meses' },
  { age: '15 meses', id: 'quinze-meses' },
  { age: '18 meses', id: 'dezoito-meses' },
  { age: '2 anos', id: 'dois-anos' },
  { age: '30 meses', id: 'trinta-meses' },
  { age: '3 anos', id: 'tres-anos' },
  { age: '4 anos', id: 'quatro-anos' },
  { age: '5 anos', id: 'cinco-anos' },
];

const domains = [
  { icon: '💖', name: 'Social/Emocional', color: 'from-pink-500 to-rose-500' },
  { icon: '💬', name: 'Linguagem/Comunicação', color: 'from-blue-500 to-cyan-500' },
  { icon: '🧠', name: 'Cognitivo', color: 'from-purple-500 to-violet-500' },
  { icon: '🏃', name: 'Motor/Físico', color: 'from-green-500 to-emerald-500' },
];

function Section({ title, children, icon = null }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <button
        onClick={() => setOpen(!open)}
        className="w-full px-6 py-4 flex items-center gap-3 hover:bg-secondary transition-colors text-left"
      >
        {icon && <span className="text-2xl flex-shrink-0">{icon}</span>}
        <h3 className="text-lg font-bold text-foreground flex-1">{title}</h3>
        <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-border px-6 py-4 text-sm text-foreground"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function DomainCard({ domain, markers }) {
  return (
    <div className={`bg-gradient-to-br ${domain.color} rounded-2xl p-4 text-white`}>
      <div className="flex items-center gap-2 mb-3">
        <span className="text-2xl">{domain.icon}</span>
        <h4 className="font-bold">{domain.name}</h4>
      </div>
      <ul className="space-y-2 text-sm">
        {markers.map((marker, i) => (
          <li key={i} className="flex gap-2">
            <span className="text-white/70 flex-shrink-0">•</span>
            <span>{marker}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function AgeGroup({ data }) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {data.markers.map((domain, i) => (
          <DomainCard key={i} domain={domains[i]} markers={domain} />
        ))}
      </div>

      <Section title="Pontos de atenção para o profissional">
        <p className="leading-relaxed">{data.atencao}</p>
      </Section>

      <Section title="Orientações aos cuidadores">
        <p className="leading-relaxed">{data.orientacoes}</p>
      </Section>

      <Section title="⚠️ Sinais de alerta">
        <div className="space-y-2">
          {data.alertas.map((alerta, i) => (
            <div key={i} className="flex gap-3 p-3 bg-red-50 rounded-lg border border-red-200">
              <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-semibold text-red-900">{alerta.alerta}</p>
                <p className="text-red-800 text-xs mt-0.5">{alerta.conduta}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}

export default function CartilhaDesenvolvimento() {
  const [activeAge, setActiveAge] = useState('dois-meses');
  const [activeSection, setActiveSection] = useState('apresentacao');

  const data = {
    'dois-meses': {
      markers: [
        ['Acalma-se ao conversar ou ser pego no colo', 'Olha para o rosto do cuidador', 'Parece feliz ao ver o cuidador', 'Sorri quando falam ou sorriem para ele'],
        ['Emite sons diferentes do choro', 'Reage a sons altos'],
        ['Observa o cuidador enquanto ele se move', 'Olha para brinquedo por vários segundos'],
        ['Mantém a cabeça erguida em prono', 'Move braços e pernas', 'Abre as mãos brevemente'],
      ],
      atencao: 'Avaliar qualidade do contato visual, responsividade ao som, simetria dos movimentos, tônus, sucção, interação com cuidador e sinais de irritabilidade ou apatia.',
      orientacoes: 'Estimular fala, canto, leitura, contato afetivo, tempo supervisionado de bruços enquanto acordado. O bebê deve ser alimentado apenas com leite materno ou fórmula nos primeiros 6 meses.',
      alertas: [
        { alerta: 'Não fixa o olhar no rosto', conduta: 'Avaliar visão, interação e desenvolvimento' },
        { alerta: 'Não reage a sons altos', conduta: 'Avaliar audição' },
        { alerta: 'Não movimenta braços e pernas adequadamente', conduta: 'Avaliar tônus, força e simetria' },
        { alerta: 'Perda de habilidade adquirida', conduta: 'Encaminhamento prioritário' },
      ],
    },
    'quatro-meses': {
      markers: [
        ['Sorri sozinho para chamar atenção', 'Ri quando estimulado', 'Olha, move-se ou vocaliza para manter atenção'],
        ['Faz sons como "oooo" e "aahh"', 'Vocaliza quando falam com ele', 'Vira a cabeça para a voz'],
        ['Abre a boca ao ver mama ou mamadeira', 'Olha para as mãos com interesse'],
        ['Mantém cabeça firme sem apoio', 'Segura brinquedo colocado na mão', 'Balança brinquedos com os braços', 'Leva mãos à boca', 'Eleva tronco em prono'],
      ],
      atencao: 'Observar controle cefálico, simetria de membros, interação social ativa, resposta auditiva, interesse visual pelas mãos e objetos.',
      orientacoes: 'Orientar brincadeiras seguras no chão, brinquedos fáceis de segurar, exploração oral de objetos seguros, conversa, canto e leitura. Limitar telas - não recomendadas para menores de 2 anos.',
      alertas: [
        { alerta: 'Não sustenta a cabeça', conduta: 'Avaliar atraso motor/hipotonia' },
        { alerta: 'Não sorri ou não busca interação', conduta: 'Avaliar desenvolvimento social' },
        { alerta: 'Não reage à voz', conduta: 'Avaliar audição' },
        { alerta: 'Mãos persistentemente fechadas ou assimetria', conduta: 'Avaliar alteração neuromotora' },
      ],
    },
    'seis-meses': {
      markers: [
        ['Reconhece pessoas familiares', 'Gosta de se olhar no espelho', 'Ri'],
        ['Reveza sons com o cuidador', 'Sopra saliva', 'Emite sons agudos'],
        ['Leva objetos à boca para explorar', 'Alcança brinquedo desejado', 'Fecha os lábios para mostrar que não quer comida'],
        ['Rola de barriga para barriga para cima', 'Empurra o corpo com braços esticados em prono', 'Apoia-se nas mãos quando sentado'],
      ],
      atencao: 'Avaliar rolar, apoio em membros superiores, início do sentar com apoio, interação social, vocalização recíproca e prontidão alimentar.',
      orientacoes: 'Estimular brincadeiras de turnos - quando o bebê sorri, o cuidador sorri; quando vocaliza, o cuidador copia. Orientar leitura, nomeação de objetos, música e brinquedos para estimular alcance.',
      alertas: [
        { alerta: 'Não rola ou não tenta alcançar objetos', conduta: 'Avaliar atraso motor' },
        { alerta: 'Não vocaliza ou não interage com sons', conduta: 'Avaliar audição e comunicação' },
        { alerta: 'Não reconhece familiares ou não sorri', conduta: 'Avaliar interação social' },
        { alerta: 'Assimetria de movimentos', conduta: 'Avaliar alteração neurológica' },
      ],
    },
    'nove-meses': {
      markers: [
        ['Estranha pessoas', 'Demonstra expressões como feliz, triste, irritado ou surpreso', 'Olha quando chamado pelo nome', 'Sorri ou ri em brincadeiras'],
        ['Faz sons como "mamamama" e "babababa"', 'Levanta braços para ser pego'],
        ['Procura objetos que saem do campo visual', 'Bate dois objetos'],
        ['Chega à posição sentada sozinho', 'Transfere objetos entre mãos', 'Usa dedos para pegar comida', 'Senta sem apoio'],
      ],
      atencao: 'Avaliar sentar, transferência de objetos, pinça, interação social com estrangeiros, permanência do objeto e comunicação.',
      orientacoes: 'Estimular gestos como "tchau" e "não", brincadeiras de esconder, blocos e recipientes, leitura compartilhada, alimentação com dedos e exposição a sabores.',
      alertas: [
        { alerta: 'Não senta sem apoio', conduta: 'Avaliar atraso motor' },
        { alerta: 'Não responde ao nome', conduta: 'Avaliar audição, comunicação social e TEA' },
        { alerta: 'Não balbucia', conduta: 'Avaliar linguagem e audição' },
        { alerta: 'Não demonstra estranhamento ou reciprocidade', conduta: 'Avaliar desenvolvimento social' },
        { alerta: 'Perda de habilidades', conduta: 'Encaminhamento prioritário' },
      ],
    },
    'doze-meses': {
      markers: [
        ['Brinca com o cuidador como parceiro de jogo'],
        ['Dá "tchau"', 'Chama "mamã", "papá" ou outro nome especial', 'Entende "não"'],
        ['Coloca objetos em recipientes', 'Procura objetos escondidos'],
        ['Puxa-se para ficar em pé', 'Anda segurando nos móveis', 'Bebe de copo sem tampa com ajuda', 'Pinça polegar-indicador'],
      ],
      atencao: 'Avaliar gestos comunicativos, compreensão simples, pinça fina, apoio em pé, marcha lateral com apoio e interação lúdica.',
      orientacoes: 'Estimular nomeação de objetos, resposta ao apontar, brincadeiras com potes e panelas, ambiente seguro para exploração, leitura e alimentação com diferentes texturas.',
      alertas: [
        { alerta: 'Não faz gestos como dar tchau', conduta: 'Avaliar comunicação social' },
        { alerta: 'Não entende comandos simples', conduta: 'Avaliar audição e linguagem receptiva' },
        { alerta: 'Não se puxa para ficar em pé', conduta: 'Avaliar atraso motor' },
        { alerta: 'Não procura objetos escondidos', conduta: 'Avaliar cognição' },
      ],
    },
    'quinze-meses': {
      markers: [
        ['Imita outras crianças', 'Mostra objeto de interesse', 'Bate palmas', 'Abraça boneca ou brinquedo', 'Demonstra afeto'],
        ['Tenta dizer uma ou duas palavras além de "mamãe/papai"', 'Olha para objeto familiar quando nomeado', 'Segue instrução com gesto e palavra', 'Aponta para pedir algo'],
        ['Usa objetos de forma funcional', 'Empilha pelo menos dois objetos'],
        ['Dá alguns passos sozinho', 'Usa os dedos para se alimentar'],
      ],
      atencao: 'Avaliar primeiras palavras, apontamento comunicativo, brincadeira funcional, marcha independente inicial e imitação.',
      orientacoes: 'Repetir e expandir primeiras palavras, nomear objetos quando ela aponta, aguardar tentativa de vocalização, envolver em atividades cotidianas, manter rotina de sono e alimentação.',
      alertas: [
        { alerta: 'Não aponta para pedir ajuda', conduta: 'Avaliar comunicação social' },
        { alerta: 'Não tenta falar nenhuma palavra funcional', conduta: 'Avaliar linguagem e audição' },
        { alerta: 'Não dá passos sozinho', conduta: 'Avaliar atraso motor' },
        { alerta: 'Não demonstra afeto ou interesse social', conduta: 'Avaliar desenvolvimento social e TEA' },
      ],
    },
    'dezoito-meses': {
      markers: [
        ['Afasta-se do cuidador, mas verifica se está por perto', 'Aponta para mostrar algo interessante', 'Olha páginas de livro com o cuidador', 'Ajuda a vestir-se'],
        ['Tenta dizer três ou mais palavras além de "mamãe/papai"', 'Segue instruções sem gestos'],
        ['Copia tarefas simples, como varrer', 'Brinca funcionalmente, como empurrar carrinho'],
        ['Anda sem apoio', 'Rabisca', 'Bebe em copo sem tampa', 'Alimenta-se com dedos', 'Tenta usar colher', 'Sobe e desce de sofá sem ajuda'],
      ],
      atencao: 'Avaliar linguagem expressiva, compreensão, brincadeira funcional, marcha independente, independência motora e qualidade de interação.',
      orientacoes: 'Estimular brincadeira de faz de conta, reconhecimento de sentimentos, perguntas simples, escolhas, rotina de sono/alimentação, uso de copo e colher, limitar telas.',
      alertas: [
        { alerta: 'Não anda sem apoio', conduta: 'Avaliar atraso motor' },
        { alerta: 'Menos de três palavras além de "mamãe/papai"', conduta: 'Avaliar linguagem e audição' },
        { alerta: 'Não segue comandos sem gesto', conduta: 'Avaliar linguagem receptiva' },
        { alerta: 'Não aponta para mostrar interesse', conduta: 'Alerta importante para comunicação social/TEA' },
        { alerta: 'Perda de fala ou interação', conduta: 'Encaminhamento prioritário' },
      ],
    },
    'dois-anos': {
      markers: [
        ['Percebe quando outros estão tristes', 'Olha para o rosto do cuidador em situação nova'],
        ['Aponta figuras em livro quando solicitado', 'Diz pelo menos duas palavras juntas', 'Aponta pelo menos duas partes do corpo', 'Usa gestos além de acenar'],
        ['Segura algo com uma mão enquanto usa a outra', 'Tenta usar interruptores ou botões', 'Brinca com mais de um brinquedo'],
        ['Chuta bola', 'Corre', 'Sobe degraus com ou sem ajuda', 'Come com colher'],
      ],
      atencao: 'Avaliar combinação de palavras, gestos comunicativos, brincadeira funcional, marcha, coordenação e interação social.',
      orientacoes: 'Estimular expansão da linguagem, brincadeira com outras crianças com supervisão, manejo de conflitos, brincadeira simbólica, uso de bola e rotina.',
      alertas: [
        { alerta: 'Não combina duas palavras', conduta: 'Avaliar atraso de linguagem' },
        { alerta: 'Não aponta partes do corpo', conduta: 'Avaliar compreensão' },
        { alerta: 'Não usa gestos variados', conduta: 'Avaliar comunicação social' },
        { alerta: 'Não corre ou marcha instável', conduta: 'Avaliar atraso motor' },
        { alerta: 'Não percebe emoções de outros', conduta: 'Avaliar interação social' },
      ],
    },
    'trinta-meses': {
      markers: [
        ['Brinca ao lado e às vezes com outras crianças', 'Mostra conquistas dizendo "olhe para mim"', 'Segue rotinas simples'],
        ['Fala cerca de 50 palavras', 'Usa duas ou mais palavras com ação', 'Nomeia coisas em livro', 'Usa "eu", "você" ou "nós"'],
        ['Usa objetos em brincadeira de faz de conta', 'Resolve problemas simples', 'Segue instruções de duas etapas', 'Reconhece uma cor'],
        ['Gira maçanetas ou tampas', 'Tira algumas roupas', 'Pula com os dois pés', 'Vira páginas uma a uma'],
      ],
      atencao: 'Avaliar linguagem em expansão, compreensão de duas etapas, brincadeira simbólica, coordenação motora fina e socialização com pares.',
      orientacoes: 'Repetir palavras, expandir frases, nomeação funcional, leitura, brinquedos que estimulem causa-efeito, coordenação e início de rotina pré-escolar.',
      alertas: [
        { alerta: 'Vocabulário muito reduzido', conduta: 'Avaliar linguagem e audição' },
        { alerta: 'Não usa frases com ação', conduta: 'Avaliar linguagem expressiva' },
        { alerta: 'Não segue instruções em duas etapas', conduta: 'Avaliar linguagem receptiva e cognição' },
        { alerta: 'Não faz brincadeira simbólica', conduta: 'Avaliar cognição e TEA' },
        { alerta: 'Não interage com outras crianças', conduta: 'Avaliar desenvolvimento social' },
      ],
    },
    'tres-anos': {
      markers: [
        ['Brinca com outras crianças', 'Acalma-se após separação', 'Percebe outras crianças e tenta participar'],
        ['Conversa com pelo menos duas trocas', 'Faz perguntas como "quem", "o quê", "onde"', 'Descreve ações em figuras', 'Diz o próprio nome'],
        ['Desenha círculo quando demonstrado', 'Evita tocar objetos quentes'],
        ['Enfia contas em cordão', 'Veste algumas roupas sozinho', 'Usa garfo'],
      ],
      atencao: 'Avaliar inteligibilidade, conversa recíproca, brincadeira com pares, coordenação fina e autonomia. Atrasos de linguagem e dificuldade social tornam-se mais evidentes.',
      orientacoes: 'Estimular brincadeira de faz de conta, reconhecimento de sentimentos, perguntas-respostas, escolhas, autonomia em higiene e alimentação.',
      alertas: [
        { alerta: 'Não faz frases ou não mantém trocas', conduta: 'Avaliar linguagem' },
        { alerta: 'Não pergunta ou não responde perguntas', conduta: 'Avaliar linguagem e cognição' },
        { alerta: 'Fala muito pouco compreensível', conduta: 'Avaliar linguagem e audição' },
        { alerta: 'Não brinca com outras crianças', conduta: 'Avaliar socialização e TEA' },
        { alerta: 'Não desenha círculo', conduta: 'Avaliar motricidade fina e cognição' },
      ],
    },
    'quatro-anos': {
      markers: [
        ['Finge ser outro personagem', 'Pede para brincar', 'Consola alguém triste', 'Evita perigos', 'Adapta comportamento conforme ambiente'],
        ['Usa frases com quatro ou mais palavras', 'Repete palavras de músicas', 'Fala sobre acontecimentos do dia', 'Responde perguntas'],
        ['Nomeia algumas cores', 'Antecipa próximas ações em história', 'Desenha pessoa com três ou mais partes'],
        ['Pega bola grande', 'Serve comida com supervisão', 'Desabotoa botões', 'Segura lápis entre dedos e polegar'],
      ],
      atencao: 'Avaliar linguagem narrativa, autorregulação, capacidade de brincar com pares, jogo simbólico complexo, coordenação motora fina e autonomia.',
      orientacoes: 'Estimular expansão de linguagem, brincadeira com regras simples, manejo de frustração, arte, leitura, prontidão pré-escolar.',
      alertas: [
        { alerta: 'Não usa frases de quatro palavras', conduta: 'Avaliar linguagem' },
        { alerta: 'Não conta acontecimentos simples', conduta: 'Avaliar linguagem narrativa e cognição' },
        { alerta: 'Não brinca de faz de conta', conduta: 'Avaliar desenvolvimento social e cognitivo' },
        { alerta: 'Não interage com outras crianças', conduta: 'Avaliar TEA e socialização' },
        { alerta: 'Comportamento muito desorganizado', conduta: 'Avaliar autorregulação e neurodesenvolvimento' },
      ],
    },
    'cinco-anos': {
      markers: [
        ['Segue regras e reveza ao brincar', 'Canta, dança ou atua', 'Realiza tarefas simples'],
        ['Conta história com dois eventos', 'Responde perguntas sobre livro', 'Mantém conversa com mais de três trocas', 'Usa ou reconhece rimas'],
        ['Conta até 10', 'Nomeia alguns números', 'Usa noções temporais', 'Mantém atenção 5-10 minutos', 'Escreve algumas letras', 'Nomeia letras'],
        ['Abotoa botões', 'Pula em um pé'],
      ],
      atencao: 'Avaliar prontidão escolar, linguagem narrativa, compreensão, atenção sustentada, habilidades pré-acadêmicas, coordenação fina.',
      orientacoes: 'Estimular leitura, escrita de letras, números, conversa sobre experiências, brincadeiras com regras, preparação para escola.',
      alertas: [
        { alerta: 'Não mantém conversa com múltiplas trocas', conduta: 'Avaliar linguagem e pragmática' },
        { alerta: 'Não conta história simples', conduta: 'Avaliar linguagem narrativa' },
        { alerta: 'Não reconhece números/letras', conduta: 'Avaliar prontidão escolar' },
        { alerta: 'Não mantém atenção por minutos', conduta: 'Avaliar atenção e desenvolvimento' },
        { alerta: 'Não pula em um pé', conduta: 'Avaliar motor grosso' },
        { alerta: 'Dificuldade em regras e turnos', conduta: 'Avaliar autorregulação e socialização' },
      ],
    },
  };

  const sections = {
    apresentacao: {
      title: 'Apresentação Técnica',
      content: `A Cartilha de Desenvolvimento — 2 meses a 5 anos é uma adaptação/tradução brasileira do programa Act Early, do CDC. O objetivo central é favorecer a identificação precoce de atrasos do neurodesenvolvimento, permitindo intervenções oportunas.

Os marcos apresentados correspondem ao que aproximadamente 75% ou mais das crianças conseguem realizar em cada idade. Este material pode ser usado como apoio na vigilância do desenvolvimento infantil, mas não substitui instrumentos padronizados e validados de triagem.`,
    },
    objetivo: {
      title: 'Objetivo do Uso Clínico',
      content: `1. Acompanhar marcos do desenvolvimento em consultas de puericultura
2. Identificar atrasos precocemente
3. Orientar cuidadores com atividades simples e adequadas à idade
4. Definir necessidade de triagem formal ou intervenção precoce
5. Registrar objetivamente no prontuário os marcos e preocupações`,
    },
    dominios: {
      title: 'Domínios Avaliados',
      content: `Social/Emocional: Reciprocidade, sorriso, vínculo, imitação, interesse por pessoas
Linguagem/Comunicação: Vocalização, balbucio, gestos, compreensão, palavras
Cognitivo/Adaptativo: Exploração, permanência do objeto, resolução de problemas
Motor/Físico: Controle cefálico, rolar, sentar, marcha, coordenação fina`,
    },
    perguntas: {
      title: 'Perguntas Obrigatórias ao Cuidador',
      content: `• O que vocês fazem juntos?
• Do que a criança gosta de brincar?
• Há algo que preocupa vocês?
• A criança perdeu alguma habilidade?
• A criança nasceu prematura?
• Há necessidades especiais de saúde?`,
    },
    sinais: {
      title: 'Sinais de Alerta Transversais',
      content: `✓ Perda de habilidade adquirida (sempre exige investigação)
✓ Ausência de contato visual ou reciprocidade social
✓ Ausência de resposta ao nome após 9-12 meses
✓ Ausência de balbucio
✓ Ausência de gestos comunicativos
✓ Não apontar para mostrar interesse até 18 meses
✓ Não combinar palavras aos 2 anos
✓ Assimetria motora persistente
✓ Hipotonia ou hipertonia importante
✓ Preocupação persistente da família`,
    },
    encaminhamento: {
      title: 'Quando Encaminhar',
      content: `Atraso motor importante → Neuropediatria, fisioterapia
Atraso de fala/compreensão → Fonoaudiologia, avaliação auditiva
Suspeita de TEA → Pediatria do desenvolvimento, neuropediatria
Atraso global → Equipe multiprofissional
Regressão → Encaminhamento prioritário
Dúvida persistente → Reavaliação em curto prazo`,
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero */}
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-12"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Cartilha de Desenvolvimento Infantil</h1>
          <p className="text-lg text-blue-100 mb-2">2 meses a 5 anos</p>
          <p className="text-blue-100 text-sm">Versão organizada para profissionais da saúde · Baseada no programa Act Early (CDC)</p>
        </div>
      </motion.section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {Object.entries(sections).map(([key, section]) => (
            <button
              key={key}
              onClick={() => setActiveSection(key)}
              className={`px-4 py-2 rounded-lg font-semibold transition-all text-sm ${
                activeSection === key
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-muted-foreground border border-border hover:border-blue-400'
              }`}
            >
              {section.title}
            </button>
          ))}
        </div>

        {/* Info Sections */}
        <AnimatePresence mode="wait">
          {activeSection !== 'idade' && (
            <motion.div
              key={activeSection}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-white rounded-2xl p-8 shadow-lg mb-12"
            >
              <p className="text-foreground leading-relaxed whitespace-pre-line">{sections[activeSection].content}</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Age Selection */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">Marcos por Idade</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
            {ageGroups.map(group => (
              <button
                key={group.id}
                onClick={() => setActiveAge(group.id)}
                className={`px-3 py-2 rounded-lg font-semibold transition-all text-sm ${
                  activeAge === group.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-muted-foreground border border-border hover:border-blue-400'
                }`}
              >
                {group.age}
              </button>
            ))}
          </div>
        </div>

        {/* Age Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeAge}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <AgeGroup data={data[activeAge]} />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}