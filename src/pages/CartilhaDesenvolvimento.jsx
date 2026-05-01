import React, { useState } from 'react';
import { ChevronDown, AlertCircle, CheckCircle2, Users, Brain, Zap, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ageGroups = [
  { age: '2 meses', id: 'dois-meses', triagem: false },
  { age: '4 meses', id: 'quatro-meses', triagem: false },
  { age: '6 meses', id: 'seis-meses', triagem: false },
  { age: '9 meses', id: 'nove-meses', triagem: true },
  { age: '12 meses', id: 'doze-meses', triagem: false },
  { age: '15 meses', id: 'quinze-meses', triagem: false },
  { age: '18 meses', id: 'dezoito-meses', triagem: true },
  { age: '2 anos', id: 'dois-anos', triagem: true },
  { age: '30 meses', id: 'trinta-meses', triagem: true },
  { age: '3 anos', id: 'tres-anos', triagem: false },
  { age: '4 anos', id: 'quatro-anos', triagem: false },
  { age: '5 anos', id: 'cinco-anos', triagem: false },
];

const domains = [
  { icon: '💖', name: 'Social/Emocional', color: 'from-pink-500 to-rose-500' },
  { icon: '💬', name: 'Linguagem/Comunicação', color: 'from-blue-500 to-cyan-500' },
  { icon: '🧠', name: 'Cognitivo', color: 'from-purple-500 to-violet-500' },
  { icon: '🏃', name: 'Motor/Físico', color: 'from-green-500 to-emerald-500' },
];

function CollapsibleSection({ title, icon, children }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div className="bg-white rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow">
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
            className="border-t border-border px-6 py-4 text-foreground space-y-4"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function DomainCard({ domain, markers }) {
  return (
    <div className={`bg-gradient-to-br ${domain.color} rounded-2xl p-4 text-white`}>
      <div className="flex items-center gap-2 mb-3">
        <span className="text-2xl">{domain.icon}</span>
        <h4 className="font-bold text-sm">{domain.name}</h4>
      </div>
      <ul className="space-y-1.5 text-xs">
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

function AlertCard({ alerta, conduta }) {
  return (
    <div className="flex gap-3 p-3 bg-red-50 rounded-lg border border-red-200">
      <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
      <div className="text-sm">
        <p className="font-semibold text-red-900">{alerta}</p>
        <p className="text-red-800 text-xs mt-0.5">{conduta}</p>
      </div>
    </div>
  );
}

function AgeContent({ data }) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {data.markers.map((domain, i) => (
          <DomainCard key={i} domain={domains[i]} markers={domain} />
        ))}
      </div>

      <CollapsibleSection title="Pontos de atenção para o profissional" icon="👁️">
        <p className="leading-relaxed text-sm">{data.atencao}</p>
      </CollapsibleSection>

      <CollapsibleSection title="Orientações aos cuidadores" icon="👨‍👩‍👧">
        <p className="leading-relaxed text-sm">{data.orientacoes}</p>
      </CollapsibleSection>

      <CollapsibleSection title="⚠️ Sinais de alerta" icon="🚨">
        <div className="space-y-2">
          {data.alertas.map((item, i) => (
            <AlertCard key={i} alerta={item.alerta} conduta={item.conduta} />
          ))}
        </div>
      </CollapsibleSection>
    </div>
  );
}

export default function CartilhaDesenvolvimento() {
  const [activeAge, setActiveAge] = useState('dois-meses');
  const [activeTab, setActiveTab] = useState('home');

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
        { alerta: 'Não eleva minimamente a cabeça em prono', conduta: 'Reforçar estímulo e avaliar atraso motor' },
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
        { alerta: 'Não leva mãos à boca', conduta: 'Avaliar coordenação e tônus' },
      ],
    },
    'seis-meses': {
      markers: [
        ['Reconhece pessoas familiares', 'Gosta de se olhar no espelho', 'Ri'],
        ['Reveza sons com o cuidador', 'Sopra saliva', 'Emite sons agudos'],
        ['Leva objetos à boca para explorar', 'Alcança brinquedo desejado', 'Fecha os lábios para mostrar que não quer comida'],
        ['Rola de barriga para barriga para cima', 'Empurra o corpo com braços em prono', 'Apoia-se nas mãos quando sentado'],
      ],
      atencao: 'Avaliar rolar, apoio em membros superiores, início do sentar com apoio, interação social, vocalização recíproca e prontidão alimentar.',
      orientacoes: 'Estimular brincadeiras de turnos - quando o bebê sorri, o cuidador sorri; quando vocaliza, o cuidador copia. Orientar leitura, nomeação de objetos, música e brinquedos para estimular alcance.',
      alertas: [
        { alerta: 'Não rola ou não tenta alcançar objetos', conduta: 'Avaliar atraso motor' },
        { alerta: 'Não vocaliza ou não interage com sons', conduta: 'Avaliar audição e comunicação' },
        { alerta: 'Não reconhece familiares ou não sorri', conduta: 'Avaliar interação social' },
        { alerta: 'Não sustenta tronco com apoio', conduta: 'Avaliar hipotonia/atraso motor' },
        { alerta: 'Assimetria de movimentos', conduta: 'Avaliar alteração neurológica' },
      ],
    },
    'nove-meses': {
      markers: [
        ['Estranha pessoas', 'Demonstra expressões (feliz, triste, irritado)', 'Olha quando chamado pelo nome', 'Sorri em brincadeiras'],
        ['Faz sons como "mamamama" e "babababa"', 'Levanta braços para ser pego'],
        ['Procura objetos que saem do campo visual', 'Bate dois objetos'],
        ['Chega à posição sentada sozinho', 'Transfere objetos entre mãos', 'Usa dedos para pegar comida', 'Senta sem apoio'],
      ],
      atencao: 'Avaliar sentar independente, transferência de objetos, pinça, interação com estrangeiros, permanência do objeto e comunicação.',
      orientacoes: 'Estimular gestos como "tchau" e "não", brincadeiras de esconder, blocos e recipientes, leitura compartilhada, alimentação com dedos e exposição a sabores.',
      alertas: [
        { alerta: 'Não senta sem apoio', conduta: 'Avaliar atraso motor' },
        { alerta: 'Não responde ao nome', conduta: 'Avaliar audição, comunicação social e TEA' },
        { alerta: 'Não balbucia', conduta: 'Avaliar linguagem e audição' },
        { alerta: 'Não transfere objetos entre mãos', conduta: 'Avaliar coordenação e simetria' },
        { alerta: 'Perda de habilidades', conduta: 'Encaminhamento prioritário' },
      ],
    },
    'doze-meses': {
      markers: [
        ['Brinca com o cuidador como parceiro'],
        ['Dá "tchau"', 'Chama "mamã", "papá" ou nome especial', 'Entende "não"'],
        ['Coloca objetos em recipientes', 'Procura objetos escondidos'],
        ['Puxa-se para ficar em pé', 'Anda segurando nos móveis', 'Bebe de copo sem tampa com ajuda', 'Pinça polegar-indicador'],
      ],
      atencao: 'Avaliar gestos comunicativos, compreensão simples, pinça fina, apoio em pé, marcha lateral com apoio e interação lúdica.',
      orientacoes: 'Estimular nomeação de objetos, resposta ao apontar, brincadeiras com potes, ambiente seguro para exploração, leitura e alimentação com diferentes texturas.',
      alertas: [
        { alerta: 'Não faz gestos como dar tchau', conduta: 'Avaliar comunicação social' },
        { alerta: 'Não entende comandos simples', conduta: 'Avaliar audição e linguagem receptiva' },
        { alerta: 'Não se puxa para ficar em pé', conduta: 'Avaliar atraso motor' },
        { alerta: 'Não faz pinça', conduta: 'Avaliar motricidade fina e tônus' },
        { alerta: 'Não procura objetos escondidos', conduta: 'Avaliar cognição/desenvolvimento global' },
      ],
    },
    'quinze-meses': {
      markers: [
        ['Imita outras crianças', 'Mostra objeto de interesse', 'Bate palmas', 'Abraça boneca', 'Demonstra afeto'],
        ['Uma ou duas palavras além de "mamãe/papai"', 'Olha para objeto quando nomeado', 'Segue instrução com gesto e palavra', 'Aponta para pedir'],
        ['Usa objetos de forma funcional', 'Empilha dois ou mais objetos'],
        ['Dá alguns passos sozinho', 'Usa dedos para se alimentar'],
      ],
      atencao: 'Avaliar primeiras palavras, apontamento comunicativo, brincadeira funcional, marcha independente inicial e imitação.',
      orientacoes: 'Repetir e expandir primeiras palavras, nomear objetos quando aponta, aguardar tentativa de vocalização, envolver em atividades cotidianas, manter rotina.',
      alertas: [
        { alerta: 'Não aponta para pedir ajuda ou objetos', conduta: 'Avaliar comunicação social' },
        { alerta: 'Não tenta falar nenhuma palavra funcional', conduta: 'Avaliar linguagem e audição' },
        { alerta: 'Não dá passos sozinho', conduta: 'Avaliar atraso motor' },
        { alerta: 'Não imita ações simples', conduta: 'Avaliar cognição e interação' },
        { alerta: 'Não demonstra afeto ou interesse social', conduta: 'Avaliar desenvolvimento social/TEA' },
      ],
    },
    'dezoito-meses': {
      markers: [
        ['Afasta-se do cuidador, mas verifica se está por perto', 'Aponta para mostrar algo interessante', 'Olha páginas de livro com cuidador', 'Ajuda a vestir-se'],
        ['Três ou mais palavras além de "mamãe/papai"', 'Segue instruções sem gestos'],
        ['Copia tarefas simples como varrer', 'Brinca funcionalmente (empurra carrinho)'],
        ['Anda sem apoio', 'Rabisca', 'Bebe em copo sem tampa', 'Come com dedos', 'Tenta usar colher', 'Sobe e desce de sofá'],
      ],
      atencao: 'Avaliar linguagem expressiva, compreensão, brincadeira funcional, marcha independente, autonomia motora e qualidade de interação.',
      orientacoes: 'Estimular brincadeira de faz de conta, reconhecimento de sentimentos, perguntas simples, escolhas, rotina, uso de copo e colher, limitar telas.',
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
        ['Percebe quando outros estão tristes', 'Olha para rosto do cuidador em situação nova'],
        ['Aponta figuras em livro quando solicitado', 'Duas palavras juntas', 'Aponta duas partes do corpo', 'Usa gestos além de acenar'],
        ['Segura algo com uma mão enquanto usa a outra', 'Tenta usar interruptores ou botões', 'Brinca com mais de um brinquedo'],
        ['Chuta bola', 'Corre', 'Sobe degraus', 'Come com colher'],
      ],
      atencao: 'Avaliar combinação de palavras, gestos comunicativos, brincadeira funcional, marcha, coordenação e interação social.',
      orientacoes: 'Estimular expansão da linguagem, brincadeira com outras crianças com supervisão, manejo de conflitos, brincadeira simbólica, uso de bola e rotina.',
      alertas: [
        { alerta: 'Não combina duas palavras', conduta: 'Avaliar atraso de linguagem' },
        { alerta: 'Não aponta partes do corpo quando solicitado', conduta: 'Avaliar compreensão' },
        { alerta: 'Não usa gestos variados', conduta: 'Avaliar comunicação social' },
        { alerta: 'Não corre ou tem marcha muito instável', conduta: 'Avaliar atraso motor' },
        { alerta: 'Não brinca de forma funcional', conduta: 'Avaliar cognição e TEA' },
        { alerta: 'Não percebe ou reage a emoções de outros', conduta: 'Avaliar interação social' },
      ],
    },
    'trinta-meses': {
      markers: [
        ['Brinca ao lado e às vezes com crianças', 'Mostra conquistas', 'Segue rotinas simples'],
        ['Cerca de 50 palavras', 'Duas ou mais palavras com ação', 'Nomeia coisas em livro', 'Usa "eu", "você" ou "nós"'],
        ['Usa objetos em brincadeira de faz de conta', 'Resolve problemas simples', 'Segue duas etapas', 'Reconhece uma cor'],
        ['Gira maçanetas ou tampas', 'Tira algumas roupas', 'Pula com os dois pés', 'Vira páginas uma a uma'],
      ],
      atencao: 'Avaliar linguagem em expansão, compreensão de duas etapas, brincadeira simbólica, coordenação motora fina e socialização com pares.',
      orientacoes: 'Repetir palavras, expandir frases, nomeação funcional, leitura, brinquedos que estimulem causa-efeito e coordenação.',
      alertas: [
        { alerta: 'Vocabulário muito reduzido', conduta: 'Avaliar linguagem e audição' },
        { alerta: 'Não usa frases com ação', conduta: 'Avaliar linguagem expressiva' },
        { alerta: 'Não segue instruções em duas etapas', conduta: 'Avaliar linguagem receptiva e cognição' },
        { alerta: 'Não faz brincadeira simbólica', conduta: 'Avaliar cognição e TEA' },
        { alerta: 'Não pula com os dois pés', conduta: 'Avaliar motor grosso' },
        { alerta: 'Não interage com outras crianças', conduta: 'Avaliar desenvolvimento social' },
      ],
    },
    'tres-anos': {
      markers: [
        ['Brinca com outras crianças', 'Acalma-se após separação', 'Percebe outras crianças'],
        ['Conversa com duas trocas', 'Faz perguntas (quem, o quê, onde)', 'Descreve ações em figuras', 'Diz o próprio nome'],
        ['Desenha círculo quando demonstrado', 'Evita tocar objetos quentes'],
        ['Enfia contas em cordão', 'Veste algumas roupas', 'Usa garfo'],
      ],
      atencao: 'Avaliar inteligibilidade, conversa recíproca, brincadeira com pares, coordenação fina e autonomia. Atrasos ficam mais evidentes.',
      orientacoes: 'Estimular brincadeira de faz de conta, reconhecimento de sentimentos, perguntas-respostas, escolhas, autonomia em higiene.',
      alertas: [
        { alerta: 'Não faz frases ou não mantém trocas', conduta: 'Avaliar linguagem' },
        { alerta: 'Não pergunta ou não responde perguntas', conduta: 'Avaliar linguagem e cognição' },
        { alerta: 'Fala muito pouco compreensível', conduta: 'Avaliar linguagem e audição' },
        { alerta: 'Não brinca com outras crianças', conduta: 'Avaliar socialização e TEA' },
        { alerta: 'Não desenha círculo quando demonstrado', conduta: 'Avaliar motricidade fina e cognição' },
        { alerta: 'Dificuldade importante de autonomia', conduta: 'Avaliar desenvolvimento global' },
      ],
    },
    'quatro-anos': {
      markers: [
        ['Finge ser outro personagem', 'Pede para brincar', 'Consola alguém triste', 'Evita perigos', 'Adapta comportamento'],
        ['Frases com quatro ou mais palavras', 'Repete palavras de músicas', 'Fala sobre acontecimentos do dia'],
        ['Nomeia algumas cores', 'Antecipa próximas ações', 'Desenha pessoa com três+ partes'],
        ['Pega bola grande', 'Serve comida com supervisão', 'Desabotoa botões', 'Segura lápis corretamente'],
      ],
      atencao: 'Avaliar linguagem narrativa, autorregulação, brincadeira complexa, coordenação motora fina, autonomia e comportamento em grupo.',
      orientacoes: 'Estimular expansão de linguagem, brincadeira com regras simples, manejo de frustração, arte, leitura, prontidão pré-escolar.',
      alertas: [
        { alerta: 'Não usa frases de quatro palavras', conduta: 'Avaliar linguagem' },
        { alerta: 'Não conta acontecimento simples', conduta: 'Avaliar linguagem narrativa e cognição' },
        { alerta: 'Não brinca de faz de conta', conduta: 'Avaliar desenvolvimento social e cognitivo' },
        { alerta: 'Não interage com outras crianças', conduta: 'Avaliar TEA e socialização' },
        { alerta: 'Comportamento muito desorganizado', conduta: 'Avaliar autorregulação e neurodesenvolvimento' },
      ],
    },
    'cinco-anos': {
      markers: [
        ['Segue regras e reveza ao brincar', 'Canta, dança ou atua', 'Realiza tarefas simples'],
        ['Conta história com dois eventos', 'Responde perguntas sobre livro', 'Mantém conversa com 3+ trocas', 'Usa/reconhece rimas'],
        ['Conta até 10', 'Nomeia números 1-5', 'Usa noções temporais', 'Mantém atenção 5-10 min', 'Escreve letras', 'Nomeia letras'],
        ['Abotoa botões', 'Pula em um pé'],
      ],
      atencao: 'Avaliar prontidão escolar, linguagem narrativa, compreensão, atenção sustentada, habilidades pré-acadêmicas e coordenação fina.',
      orientacoes: 'Estimular leitura, escrita de letras e números, conversa sobre experiências, brincadeiras com regras, preparação para escola.',
      alertas: [
        { alerta: 'Não mantém conversa com múltiplas trocas', conduta: 'Avaliar linguagem e pragmática' },
        { alerta: 'Não conta história simples', conduta: 'Avaliar linguagem narrativa' },
        { alerta: 'Não reconhece números/letras', conduta: 'Avaliar prontidão escolar' },
        { alerta: 'Não mantém atenção por minutos', conduta: 'Avaliar atenção, ambiente e desenvolvimento' },
        { alerta: 'Não pula em um pé', conduta: 'Avaliar motor grosso' },
        { alerta: 'Dificuldade importante em regras', conduta: 'Avaliar autorregulação e socialização' },
      ],
    },
  };

  const currentAgeGroup = ageGroups.find(g => g.id === activeAge);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero */}
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-12"
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Cartilha de Desenvolvimento Infantil</h1>
          <p className="text-lg text-blue-100 mb-2">2 meses a 5 anos · Vigilância do Desenvolvimento em Puericultura</p>
          <p className="text-blue-100 text-sm">Baseada no programa Act Early (CDC) · Adaptação SBP e Sociedade Paraibana de Pediatria</p>
        </div>
      </motion.section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          <button
            onClick={() => setActiveTab('home')}
            className={`px-4 py-2 rounded-lg font-semibold transition-all text-sm ${
              activeTab === 'home'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-white text-muted-foreground border border-border hover:border-blue-400'
            }`}
          >
            Apresentação
          </button>
          <button
            onClick={() => setActiveTab('marcos')}
            className={`px-4 py-2 rounded-lg font-semibold transition-all text-sm ${
              activeTab === 'marcos'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-white text-muted-foreground border border-border hover:border-blue-400'
            }`}
          >
            Marcos por Idade
          </button>
          <button
            onClick={() => setActiveTab('orientacoes')}
            className={`px-4 py-2 rounded-lg font-semibold transition-all text-sm ${
              activeTab === 'orientacoes'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-white text-muted-foreground border border-border hover:border-blue-400'
            }`}
          >
            Fluxo Clínico
          </button>
        </div>

        {/* Home Tab */}
        {activeTab === 'home' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
            <CollapsibleSection title="Apresentação Técnica" icon="📋">
              <div className="space-y-4 text-sm leading-relaxed">
                <p>A <strong>Cartilha de Desenvolvimento — 2 meses a 5 anos</strong> é uma adaptação/tradução brasileira do programa <strong>Act Early</strong>, do Centers for Disease Control and Prevention (CDC), realizada em parceria com a Sociedade Brasileira de Pediatria e Sociedade Paraibana de Pediatria.</p>
                <p>O objetivo central é favorecer a <strong>identificação precoce de atrasos do neurodesenvolvimento</strong>, permitindo intervenções oportunas. Os marcos apresentados correspondem ao que aproximadamente <strong>75% ou mais das crianças</strong> conseguem realizar em cada idade.</p>
                <p className="text-amber-800 bg-amber-50 p-3 rounded-lg border border-amber-200">⚠️ Este material pode ser usado como apoio na vigilância do desenvolvimento infantil, mas não substitui instrumentos padronizados e validados de triagem.</p>
              </div>
            </CollapsibleSection>

            <CollapsibleSection title="Objetivo do Uso Clínico" icon="🎯">
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2"><span className="text-blue-600 font-bold">1.</span><span><strong>Acompanhar marcos</strong> do desenvolvimento em consultas de puericultura</span></li>
                <li className="flex gap-2"><span className="text-blue-600 font-bold">2.</span><span><strong>Identificar atrasos precocemente</strong>, antes que a criança acumule prejuízos funcionais</span></li>
                <li className="flex gap-2"><span className="text-blue-600 font-bold">3.</span><span><strong>Orientar cuidadores</strong> com atividades simples, seguras e adequadas à idade</span></li>
                <li className="flex gap-2"><span className="text-blue-600 font-bold">4.</span><span><strong>Definir necessidade de triagem formal</strong>, encaminhamento ou intervenção precoce</span></li>
                <li className="flex gap-2"><span className="text-blue-600 font-bold">5.</span><span><strong>Registrar objetivamente</strong> no prontuário marcos, ausências e preocupações familiares</span></li>
              </ul>
            </CollapsibleSection>

            <CollapsibleSection title="Os 4 Domínios Avaliados" icon="🧩">
              <div className="space-y-3 text-sm">
                <div className="border-l-4 border-pink-500 pl-4">
                  <p className="font-bold">💖 Social/Emocional</p>
                  <p className="text-muted-foreground text-xs">Reciprocidade, sorriso social, vínculo, imitação, interesse por pessoas, compartilhamento de atenção, resposta ao cuidador</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <p className="font-bold">💬 Linguagem/Comunicação</p>
                  <p className="text-muted-foreground text-xs">Vocalização, balbucio, resposta a sons, gestos, compreensão, palavras, combinação de palavras, conversa</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <p className="font-bold">🧠 Cognitivo/Adaptativo</p>
                  <p className="text-muted-foreground text-xs">Exploração, permanência do objeto, resolução de problemas, brincadeira funcional, brincadeira simbólica, atenção</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <p className="font-bold">🏃 Motor/Físico</p>
                  <p className="text-muted-foreground text-xs">Controle cefálico, rolar, sentar, engatinhar, marcha, corrida, coordenação motora fina, autonomia</p>
                </div>
              </div>
            </CollapsibleSection>

            <CollapsibleSection title="Perguntas Obrigatórias ao Cuidador" icon="❓">
              <div className="space-y-3 text-sm">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="font-semibold text-blue-900">O que vocês fazem juntos?</p>
                  <p className="text-xs text-blue-800 mt-1">Avaliar interação, vínculo, rotina e estímulo ambiental</p>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="font-semibold text-blue-900">Do que a criança gosta de brincar ou fazer?</p>
                  <p className="text-xs text-blue-800 mt-1">Identificar repertório funcional e interesses</p>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="font-semibold text-blue-900">Há algo que a criança faz ou deixa de fazer que preocupa?</p>
                  <p className="text-xs text-blue-800 mt-1">Valorizar preocupação parental (dado clínico relevante)</p>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="font-semibold text-blue-900">A criança perdeu alguma habilidade que já havia adquirido?</p>
                  <p className="text-xs text-blue-800 mt-1">Investigar regressão (sinal de alerta maior)</p>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="font-semibold text-blue-900">A criança nasceu prematura?</p>
                  <p className="text-xs text-blue-800 mt-1">Interpretar marcos conforme idade corrigida quando aplicável</p>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="font-semibold text-blue-900">Há alguma necessidade especial de saúde?</p>
                  <p className="text-xs text-blue-800 mt-1">Identificar maior risco de atraso ou vulnerabilidade</p>
                </div>
              </div>
            </CollapsibleSection>

            <CollapsibleSection title="Sinais de Alerta Transversais" icon="🚨">
              <div className="space-y-2">
                <AlertCard alerta="Perda de habilidade adquirida" conduta="Sempre exige investigação prioritária" />
                <AlertCard alerta="Ausência de contato visual ou reciprocidade social" conduta="Alerta para atraso social/TEA" />
                <AlertCard alerta="Ausência de resposta ao nome após 9-12 meses" conduta="Avaliar audição, linguagem e comunicação social" />
                <AlertCard alerta="Ausência de balbucio" conduta="Avaliar audição e linguagem" />
                <AlertCard alerta="Ausência de gestos comunicativos" conduta="Alerta para atraso comunicativo/TEA" />
                <AlertCard alerta="Não apontar para mostrar interesse até 18 meses" conduta="Sinal importante de alteração de atenção compartilhada" />
                <AlertCard alerta="Não combinar palavras aos 2 anos" conduta="Atraso de linguagem" />
                <AlertCard alerta="Assimetria motora persistente" conduta="Avaliar alteração neurológica" />
              </div>
            </CollapsibleSection>
          </motion.div>
        )}

        {/* Marcos Tab */}
        {activeTab === 'marcos' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-bold text-foreground mb-4">Escolha a idade da criança</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
                {ageGroups.map(group => (
                  <button
                    key={group.id}
                    onClick={() => setActiveAge(group.id)}
                    className={`px-3 py-2 rounded-lg font-semibold transition-all text-sm relative ${
                      activeAge === group.id
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'bg-white text-muted-foreground border border-border hover:border-blue-400'
                    }`}
                  >
                    {group.age}
                    {group.triagem && <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">✓</span>}
                  </button>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-3">✓ Períodos com triagem formal recomendada</p>
            </div>

            <AnimatePresence mode="wait">
              <motion.div key={activeAge} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">
                  <h2 className="text-2xl font-bold text-foreground mb-2">{currentAgeGroup.age}</h2>
                  {currentAgeGroup.triagem && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-3 flex gap-2 mb-4">
                      <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-red-800"><strong>Triagem formal recomendada:</strong> Triagem geral do desenvolvimento {currentAgeGroup.id === 'dezoito-meses' || currentAgeGroup.id === 'dois-anos' ? '+ Triagem de autismo' : ''}</p>
                    </div>
                  )}
                </div>
                <AgeContent data={data[activeAge]} />
              </motion.div>
            </AnimatePresence>
          </motion.div>
        )}

        {/* Fluxo Clínico Tab */}
        {activeTab === 'orientacoes' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
            <CollapsibleSection title="Fluxo Prático para Consulta de Puericultura" icon="📝">
              <div className="space-y-4 text-sm">
                <div className="flex gap-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <span className="font-bold text-blue-600 flex-shrink-0">1.</span>
                  <div>
                    <p className="font-semibold text-blue-900">Confirmar dados básicos</p>
                    <p className="text-xs text-blue-800 mt-0.5">Idade cronológica, prematuridade, condições clínicas, intercorrências</p>
                  </div>
                </div>
                <div className="flex gap-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <span className="font-bold text-blue-600 flex-shrink-0">2.</span>
                  <div>
                    <p className="font-semibold text-blue-900">Fazer as 6 perguntas obrigatórias</p>
                    <p className="text-xs text-blue-800 mt-0.5">O que fazem juntos, gosta de brincar, preocupações, regressão, prematuridade, necessidades especiais</p>
                  </div>
                </div>
                <div className="flex gap-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <span className="font-bold text-blue-600 flex-shrink-0">3.</span>
                  <div>
                    <p className="font-semibold text-blue-900">Observar a criança</p>
                    <p className="text-xs text-blue-800 mt-0.5">Brincando e interagindo durante a consulta nos 4 domínios</p>
                  </div>
                </div>
                <div className="flex gap-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <span className="font-bold text-blue-600 flex-shrink-0">4.</span>
                  <div>
                    <p className="font-semibold text-blue-900">Avaliar marcos</p>
                    <p className="text-xs text-blue-800 mt-0.5">Presentes, ausentes, parcialmente adquiridos em cada domínio</p>
                  </div>
                </div>
                <div className="flex gap-3 p-3 bg-green-50 rounded-lg border border-green-200">
                  <span className="font-bold text-green-600 flex-shrink-0">✓</span>
                  <div>
                    <p className="font-semibold text-green-900">Se TUDO OK:</p>
                    <p className="text-xs text-green-800 mt-0.5">Orientar estímulos específicos, agendar próxima consulta</p>
                  </div>
                </div>
                <div className="flex gap-3 p-3 bg-red-50 rounded-lg border border-red-200">
                  <span className="font-bold text-red-600 flex-shrink-0">⚠️</span>
                  <div>
                    <p className="font-semibold text-red-900">Se PREOCUPAÇÃO ou ATRASO:</p>
                    <p className="text-xs text-red-800 mt-0.5">Descartar problemas de audição/visão, aplicar triagem padronizada, orientar estímulo, reavaliar em curto prazo ou encaminhar</p>
                  </div>
                </div>
              </div>
            </CollapsibleSection>

            <CollapsibleSection title="Orientações Gerais aos Cuidadores" icon="👨‍👩‍👧">
              <div className="space-y-4 text-sm">
                <div className="border-l-4 border-blue-500 pl-4">
                  <p className="font-bold">Linguagem e Comunicação</p>
                  <p className="text-muted-foreground text-xs mt-1">Conversar, cantar, ler, nomear objetos, responder vocalizações, ampliar tentativas comunicativas. Se criança diz "ba", expandir: "bola, sim, isso é uma bola"</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <p className="font-bold">Brincadeira e Cognição</p>
                  <p className="text-muted-foreground text-xs mt-1">Causa e efeito, blocos, potes, livros, objetos do cotidiano, esconder, faz de conta, problemas simples. Estimular atenção, permanência do objeto, imitação</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <p className="font-bold">Desenvolvimento Motor</p>
                  <p className="text-muted-foreground text-xs mt-1">Tempo no chão, movimento livre, alcance de brinquedos, rolar, sentar, engatinhar, marcha, degraus, bola, pulo, desenho, folhear, manipulação segura</p>
                </div>
                <div className="border-l-4 border-pink-500 pl-4">
                  <p className="font-bold">Vínculo e Socioemocional</p>
                  <p className="text-muted-foreground text-xs mt-1">Responsividade, contato afetivo, previsibilidade, rotina, reconhecimento de emoções, nomeação de sentimentos, reforço positivo</p>
                </div>
                <div className="border-l-4 border-yellow-500 pl-4">
                  <p className="font-bold">Sono e Rotina</p>
                  <p className="text-muted-foreground text-xs mt-1">Rotinas consistentes. 1-2 anos: 11-14h de sono/dia incluindo sonecas. Evitar bebidas açucaradas</p>
                </div>
                <div className="border-l-4 border-red-500 pl-4">
                  <p className="font-bold">Telas</p>
                  <p className="text-muted-foreground text-xs mt-1">Limitar menores de 2 anos (excepto videochamadas). Bebês e crianças pequenas aprendem por conversa, brincadeira e interação</p>
                </div>
              </div>
            </CollapsibleSection>

            <CollapsibleSection title="Quando Encaminhar para Especialista" icon="➡️">
              <div className="space-y-2">
                <div className="flex gap-3 p-3 bg-orange-50 rounded-lg border border-orange-200">
                  <span className="text-orange-600 flex-shrink-0">→</span>
                  <div className="text-sm">
                    <p className="font-semibold text-orange-900">Atraso motor, assimetria, tônus alterado</p>
                    <p className="text-xs text-orange-800">Neuropediatria, fisioterapia, reabilitação</p>
                  </div>
                </div>
                <div className="flex gap-3 p-3 bg-orange-50 rounded-lg border border-orange-200">
                  <span className="text-orange-600 flex-shrink-0">→</span>
                  <div className="text-sm">
                    <p className="font-semibold text-orange-900">Atraso de fala ou compreensão</p>
                    <p className="text-xs text-orange-800">Fonoaudiologia, avaliação auditiva, pediatria/neuropediatria</p>
                  </div>
                </div>
                <div className="flex gap-3 p-3 bg-orange-50 rounded-lg border border-orange-200">
                  <span className="text-orange-600 flex-shrink-0">→</span>
                  <div className="text-sm">
                    <p className="font-semibold text-orange-900">Suspeita de TEA</p>
                    <p className="text-xs text-orange-800">Pediatria do desenvolvimento, neuropediatria, psicologia, fonoaudiologia, terapia ocupacional</p>
                  </div>
                </div>
                <div className="flex gap-3 p-3 bg-orange-50 rounded-lg border border-orange-200">
                  <span className="text-orange-600 flex-shrink-0">→</span>
                  <div className="text-sm">
                    <p className="font-semibold text-orange-900">Atraso global</p>
                    <p className="text-xs text-orange-800">Equipe multiprofissional</p>
                  </div>
                </div>
                <div className="flex gap-3 p-3 bg-red-50 rounded-lg border border-red-200">
                  <span className="text-red-600 flex-shrink-0 font-bold">🔴</span>
                  <div className="text-sm">
                    <p className="font-semibold text-red-900">Regressão</p>
                    <p className="text-xs text-red-800">Encaminhamento PRIORITÁRIO</p>
                  </div>
                </div>
              </div>
            </CollapsibleSection>

            <CollapsibleSection title="Referência" icon="📚">
              <p className="text-sm text-muted-foreground">Sociedade Brasileira de Pediatria; Sociedade Paraibana de Pediatria. <strong>Cartilha de Desenvolvimento: 2 meses a 5 anos — Aprenda os sinais. Aja cedo.</strong> Material traduzido/adaptado do programa <strong>Act Early</strong>, do Centers for Disease Control and Prevention (CDC).</p>
            </CollapsibleSection>
          </motion.div>
        )}
      </div>
    </div>
  );
}