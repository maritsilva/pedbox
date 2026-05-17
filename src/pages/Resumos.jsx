import React, { useState } from 'react';
import { BookOpen, ChevronRight, ChevronDown, Search, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const RESUMOS = [
  {
    id: 'exantemáticas',
    titulo: 'Doenças Exantemáticas e FSSL',
    emoji: '🔴',
    subtitulo: 'Sarampo, Rubéola, Varicela, Eritema Infeccioso e mais',
    seções: [
      {
        nome: 'História Natural',
        conteudo: 'CONTÁGIO → PERÍODO DE INCUBAÇÃO (assintomático) → PRÓDROMOS (febre, enantema) → EXANTEMA → CONVALESCENÇA. Período de incubação viral: 1-3 semanas (exceto mononucleose: >1 mês).',
        color: 'blue'
      },
      {
        nome: '1. SARAMPO (Morbilivírus)',
        conteudo: 'Transmissão: AEROSSÓIS (3-4 dias antes até 4-6 dias após rash). Período incubação: 8-12 dias. Pródromos: Tosse, febre (máximo com rash), coriza, conjuntivite (fotofobia), Manchas de Koplik (enantema patognomônico). Exantema: Morbiliforme, craniocaudal lenta (3-5 dias), descamação furfurácea. Complicações: OMA (mais comum), pneumonia de células gigantes, encefalite, PESS. Tratamento: Vitamina A (dose no dx + dia 2). Notificação compulsória.',
        color: 'red'
      },
      {
        nome: '2. RUBÉOLA (Rubivírus)',
        conteudo: 'Transmissão: Gotículas (5-7 dias antes até 5-7 dias após rash). Período incubação: 14-21 dias. Pródromos: Sintomas catarrais leves, febre baixa, mialgia, linfadenopatia retroauricular/occipital/cervical posterior, manchas de Forscheimer. Exantema: Rubeoliforme/maculopapular róseo (lesões isoladas), craniocaudal RÁPIDA, sem descamação. Complicação: Síndrome da rubéola congênita (surdez, catarata, PCA). Notificação compulsória.',
        color: 'amber'
      },
      {
        nome: '3. ERITEMA INFECCIOSO (Parvovírus B19)',
        conteudo: 'Transmissão: Gotículas (SEM transmissão na fase exantemática). Período incubação: ±15 dias. Pródromos: Inexistentes ou inespecíficos. Exantema: TRIFÁSICO - (1) Face esbofeteada, (2) Reticulado em tronco/extremidades (poupa palmas/plantas), (3) Recidiva (luz, calor, exercício). Complicações: Crise aplástica (anemia hemolítica prévia), infecção fetal (hidropsia fetal não imune), artropatia, síndrome papular-purpúrica em luvas e meias.',
        color: 'green'
      },
      {
        nome: '4. EXANTEMA SÚBITO (HVH-6)',
        conteudo: 'TÍPICO EM LACTENTES (6 meses a 2 anos). Transmissão: Saliva de portadores crônicos assintomáticos. Pródromos: Febre ALTA que some EM CRISE (abrupta) - 3 dias. Exantema: Maculopapular, INÍCIO EM TRONCO (centrífugo), após febre desaparecer. Complicação: Convulsão/crise febril (até 15%). Sem descamação.',
        color: 'purple'
      },
      {
        nome: '5. VARICELA (VVZ)',
        conteudo: 'Transmissão: AEROSSOL/contato direto (2 dias antes até crosta). Período incubação: 10-21 dias. Pródromos: Inespecíficos (criança sem pródromo). Exantema: VESICULAR com POLIMORFISMO REGIONAL (mácula→pápula→vesícula→pústula→crosta), distribuição CENTRÍPETA (mais tronco), PRURIGINOSO, acomete mucosas. CRIANÇA DEIXA DE TRANSMITIR COM FORMAÇÃO DE CROSTA. Complicações: Infecção bacteriana secundária (5%), varicela progressiva (imunodeprimidos), ataxia cerebelar aguda, encefalite. Herpes-zoster: lesões vesiculares em 1-2 dermátomos. Tratar com aciclovir IV se imunossuprimido.',
        color: 'blue'
      },
      {
        nome: '6. DOENÇA MÃO-PÉ-BOCA (Coxsackie A16)',
        conteudo: 'Exantema: Vesiculares ulceradas na CAVIDADE ORAL + maculopapular/vesicular em mãos, pés, nádegas. Nas nádegas: apenas papular. Complicação: Onicomadese (descolamento leito ungueal). Quadro benigno, autolimitado.',
        color: 'orange'
      },
      {
        nome: '7. ESCARLATINA (SBGA + exotoxina)',
        conteudo: 'Transmissão: Gotículas (até 24h após ATB). Período incubação: 2-5 dias. Pródromos: Faringite estreptocócica (febre alta, vômito, dor abdominal), língua em morango (branco depois vermelho). Exantema: MICROPAPULAR com aspecto de LIXA, craniocaudal, Sinal de Pastia (acentuação em pregas), Sinal de Filatov (palidez peribucal). Descamação: LAMINAR/lamelar (extremidades). Tratamento: Penicilina benzatina OU amoxicilina 10 dias. Complicações: GNPE, febre reumática, abscesso periamigdaliano/retrofaríngeo.',
        color: 'red'
      },
      {
        nome: '8. DOENÇA DE KAWASAKI',
        conteudo: 'FEBRE >5 dias + 4 de 5 critérios: (1) Conjuntivite não exsudativa, (2) Alteração lábios/cavidade oral (lábios fissurados, língua em morango, sem faringite exsudativa), (3) Adenomegalia cervical (>1,5cm, gânglio único), (4) Exantema polimorfo (não vesicular, intenso inguinal), (5) Edema/eritema extremidades + descamação (peri-ungueal). Complicação: ANEURISMA CORONARIANO (20-25% sem tratamento). FAZER ECOCARDIOGRAMA! Tratamento: Imunoglobulina IV alta dose (primeiros 10 dias) + AAS anti-inflamatório (fase aguda) + anti-agregante (fase subaguda).',
        color: 'pink'
      },
      {
        nome: '9. MONONUCLEOSE INFECCIOSA (EBV)',
        conteudo: 'Faixa etária: 15-24 anos. Transmissão: Gotículas ("doença do beijo"). Período incubação: 30-50 DIAS. Clínica: Febre, fadiga, FARINGITE + ADENOPATIA GENERALIZADA + ESPLENOMEGALIA + EDEMA PALPEBRAL (sinal de Hoagland) + EXANTEMA APÓS AMOXICILINA. Complicação: Risco de ruptura esplênica. Lab: Linfocitose com atipia, anticorpos heterófilos (>4 anos). Tratamento: SUPORTE.',
        color: 'indigo'
      },
      {
        nome: 'FEBRE SEM SINAIS LOCALIZATÓRIOS (FSSL)',
        conteudo: 'Definição: Temperatura >37,8ºC ATÉ 7 DIAS sem causa evidente. Causas: Doença infecciosa autolimitada, fase prodrômica, infecção bacteriana grave (bacteremia oculta, ITU, pneumonia oculta). Conduta por idade: <1 mês: INTERNAÇÃO+exames+culturas+ATB empírico. 1-3 meses: PVR+hemograma+urina+classificação Rochester (baixo risco=acompanhamento, alto risco=internação). 3-36 meses vacinado: PVR; não vacinado: depende temperatura/EAS. RN COM FEBRE: TOLERÂNCIA ZERO - internar e ATB empírico.',
        color: 'teal'
      },
      {
        nome: 'TABELA COMPARATIVA',
        conteudo: 'SARAMPO: Pródromos tosse+conjuntivite+Koplik | Exantema morbiliforme craniocaudal | Descamação furfurácea. RUBÉOLA: Linfadenopatia+Forscheimer | Rubeoliforme craniocaudal rápido | Sem descamação. ERITEMA INFEC.: Pródromos inespecíficos | Trifásico (esbofeteada+reticulado+recidiva) | Sem descamação. EXANTEMA SÚBITO: Febre alta em crise | Maculopapular início tronco | Sem descamação. VARICELA: Pródromos inespecíficos | Vesicular polimórfico distribuição centrípeta | Sem descamação. ESCARLATINA: Faringite+língua morango | Micropapular/lixa+Pastia/Filatov | Laminar extremidades.',
        color: 'gray'
      }
    ]
  }
];

function ResumoCard({ resumo, expanded, onToggle }) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
      <button
        onClick={() => onToggle(resumo.id)}
        className="w-full px-5 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center gap-3 flex-1">
          <span className="text-2xl">{resumo.emoji}</span>
          <div className="text-left">
            <p className="font-bold text-foreground">{resumo.titulo}</p>
            <p className="text-xs text-muted-foreground mt-0.5">{resumo.subtitulo}</p>
          </div>
        </div>
        <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform ${expanded ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="px-5 py-4 border-t border-gray-100 bg-gray-50/50 space-y-3 max-h-[70vh] overflow-y-auto">
              {resumo.seções.map((seção, idx) => (
                <div key={idx} className="bg-white rounded-xl p-4 border border-gray-200">
                  <div className="flex gap-2 mb-2">
                    <div className={`w-3 h-3 rounded-full flex-shrink-0 mt-1 
                      ${seção.color === 'blue' ? 'bg-blue-500' : ''}
                      ${seção.color === 'red' ? 'bg-red-500' : ''}
                      ${seção.color === 'amber' ? 'bg-amber-500' : ''}
                      ${seção.color === 'green' ? 'bg-green-500' : ''}
                      ${seção.color === 'purple' ? 'bg-purple-500' : ''}
                      ${seção.color === 'orange' ? 'bg-orange-500' : ''}
                      ${seção.color === 'pink' ? 'bg-pink-500' : ''}
                      ${seção.color === 'indigo' ? 'bg-indigo-500' : ''}
                      ${seção.color === 'teal' ? 'bg-teal-500' : ''}
                      ${seção.color === 'gray' ? 'bg-gray-400' : ''}
                    `} />
                    <h3 className="font-bold text-sm text-foreground flex-1">{seção.nome}</h3>
                  </div>
                  <p className="text-xs text-gray-700 leading-relaxed">{seção.conteudo}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Resumos() {
  const [expandedId, setExpandedId] = useState(null);
  const [search, setSearch] = useState('');

  const filtered = RESUMOS.filter(r =>
    r.titulo.toLowerCase().includes(search.toLowerCase()) ||
    r.subtitulo.toLowerCase().includes(search.toLowerCase()) ||
    r.seções.some(s => s.nome.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-extrabold text-foreground mb-1">Resumos Clínicos</h1>
        <p className="text-muted-foreground text-sm">Sínteses de protocolos e diretrizes pediátricas para consulta rápida</p>
      </div>

      {/* Search */}
      <div className="relative mb-6">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <input
          type="text"
          placeholder="Buscar resumo (ex: sarampo, varicela…)"
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full pl-10 pr-10 py-3 bg-white border border-border rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
        />
        {search && (
          <button onClick={() => setSearch('')} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Results */}
      {filtered.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-4xl mb-3">🔍</p>
          <p className="font-semibold text-foreground">Nenhum resumo encontrado</p>
          <p className="text-sm text-muted-foreground mt-1">Tente outros termos de busca</p>
        </div>
      ) : (
        <div className="space-y-4">
          {filtered.map(resumo => (
            <ResumoCard
              key={resumo.id}
              resumo={resumo}
              expanded={expandedId === resumo.id}
              onToggle={() => setExpandedId(expandedId === resumo.id ? null : resumo.id)}
            />
          ))}
        </div>
      )}

      {/* Info */}
      <div className="mt-8 bg-blue-50 border border-blue-200 rounded-2xl p-4 text-xs text-blue-900">
        <p className="font-semibold mb-1">💡 Dica</p>
        <p>Clique nos resumos para expandir e visualizar todo o conteúdo de forma organizada. Use a busca para encontrar rapidamente o tópico desejado.</p>
      </div>
    </div>
  );
}