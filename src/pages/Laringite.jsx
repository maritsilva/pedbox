import React, { useState } from 'react';
import { ChevronLeft, Info, AlertTriangle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Laringite() {
  const navigate = useNavigate();
  const [expandedSection, setExpandedSection] = useState(null);

  const gravityScores = [
    {
      grade: 'Leve',
      color: 'bg-green-50 border-green-200',
      symptoms: 'Tosse estridulosa, sem estridor inspiratório em repouso, sem ou leve tiragem'
    },
    {
      grade: 'Moderada',
      color: 'bg-yellow-50 border-yellow-200',
      symptoms: 'Estridor em repouso, pouca ou nenhuma agitação'
    },
    {
      grade: 'Grave',
      color: 'bg-orange-50 border-orange-200',
      symptoms: 'Estridor expiratório, agitação e confusão mental'
    },
    {
      grade: 'Ameaça à vida',
      color: 'bg-red-50 border-red-200',
      symptoms: 'Estridores pouco audíveis, letargia, rebaixamento de consciência, cianose'
    }
  ];

  const treatment = [
    {
      category: 'Leve/Moderada',
      color: 'from-green-500 to-green-700',
      steps: [
        { drug: 'Dexametasona', dose: '0,6 mg/kg', via: 'VO, IM, EV', notes: 'Dose única, máximo 10mg' },
        { drug: 'Alternativa: Prednisolona', dose: '1-2 mg/kg/dia', via: 'VO', notes: '3 dias' }
      ],
      followUp: 'Alta com orientações se melhora após observação'
    },
    {
      category: 'Grave',
      color: 'from-red-500 to-red-700',
      steps: [
        { drug: 'Dexametasona', dose: '0,6 mg/kg', via: 'VO, IM, EV', notes: 'Dose única' },
        { drug: 'E Adrenalina inalatória', dose: '0,5 mL/kg', via: 'Inalatória', notes: 'Máximo 5mL' },
        { drug: 'Observação', dose: '—', via: 'Pelo menos 4 horas', notes: 'Monitorização rigorosa' }
      ],
      followUp: 'Internação se sem resposta'
    }
  ];

  const differentials = [
    {
      condition: 'Epiglotite',
      clues: 'Ausência de tosse de cão, febre alta, sialorréia, posição de tripé, aparência tóxica'
    },
    {
      condition: 'Traqueíte bacteriana',
      clues: 'Febre alta, aspecto tóxico, secreções purulentas, falência de resposta ao tratamento'
    },
    {
      condition: 'Corpo estranho na via aérea',
      clues: 'Início súbito sem pródromo viral, história de engasgamento, ausência de febre'
    },
    {
      condition: 'Abcesso retrofaríngeo',
      clues: 'Disfagia intensa, torcicolo, abaulamento faríngeo posterior'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-extrabold text-foreground">Laringite Aguda (Crupe)</h1>
          <p className="text-xs text-muted-foreground mt-1">Protocolo clínico | Crianças 6 meses a 6 anos</p>
        </div>
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          Voltar
        </button>
      </div>

      {/* Definição rápida */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6"
      >
        <p className="text-sm text-blue-900">
          <strong>Laringite:</strong> Síndrome respiratória com <strong>edema subglótico</strong> — tríade clássica: <strong>tosse "de cão"</strong>, <strong>estridor inspiratório</strong>, <strong>rouquidão</strong>
        </p>
      </motion.div>

      {/* 1. AVALIAÇÃO DE GRAVIDADE */}
      <div className="bg-white border border-border rounded-lg shadow-sm mb-4 overflow-hidden">
        <div className="bg-gradient-to-r from-primary/5 to-blue-50 px-4 py-3 border-b border-border">
          <h2 className="text-sm font-bold text-foreground">1. AVALIAÇÃO DE GRAVIDADE</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 p-4">
          {gravityScores.map((item, idx) => (
            <div key={idx} className={`border rounded-lg p-3 ${item.color}`}>
              <p className="text-sm font-bold text-foreground mb-1">{item.grade}</p>
              <p className="text-xs text-muted-foreground">{item.symptoms}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 2. DIAGNÓSTICO */}
      <div className="bg-white border border-border rounded-lg shadow-sm mb-4 overflow-hidden">
        <div className="bg-gradient-to-r from-primary/5 to-blue-50 px-4 py-3 border-b border-border">
          <h2 className="text-sm font-bold text-foreground">2. DIAGNÓSTICO</h2>
        </div>

        <div className="p-4 space-y-3 text-xs text-muted-foreground">
          <div>
            <p className="font-bold text-foreground mb-1">Quadro clínico típico:</p>
            <ul className="list-disc pl-5 space-y-0.5">
              <li>Pródromo 1-3 dias com IVAS</li>
              <li>Início súbito, frequentemente à noite</li>
              <li><strong>Tosse "de cão" — patognomônica</strong></li>
              <li>Estridor inspiratório (agrava com agitação)</li>
              <li>Rouquidão/disfonia</li>
            </ul>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded p-2">
            <p className="font-bold text-amber-900 text-xs mb-1">Exames complementares:</p>
            <p className="text-amber-800">Diagnóstico é <strong>essencialmente clínico</strong>. Exames não são necessários na maioria dos casos. RX apenas se diagnóstico incerto.</p>
          </div>
        </div>
      </div>

      {/* 3. TRATAMENTO */}
      <div className="bg-white border border-border rounded-lg shadow-sm mb-4 overflow-hidden">
        <div className="bg-gradient-to-r from-primary/5 to-blue-50 px-4 py-3 border-b border-border">
          <h2 className="text-sm font-bold text-foreground">3. TRATAMENTO</h2>
        </div>

        <div className="space-y-4 p-4">
          {treatment.map((proto, idx) => (
            <div key={idx} className={`bg-gradient-to-br ${proto.color} text-white rounded-lg p-4`}>
              <h3 className="font-bold text-sm mb-3">{proto.category}</h3>

              <div className="space-y-2 mb-3">
                {proto.steps.map((step, stepIdx) => (
                  <div key={stepIdx} className="bg-white/10 rounded p-2 text-xs">
                    <p className="font-bold mb-0.5">{step.drug}</p>
                    <p><strong>Dose:</strong> {step.dose} | <strong>Via:</strong> {step.via}</p>
                    {step.notes && <p className="text-white/80 italic">{step.notes}</p>}
                  </div>
                ))}
              </div>

              <p className="text-xs bg-white/20 rounded p-2 italic">{proto.followUp}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 4. CRITÉRIOS DE INTERNAÇÃO */}
      <div className="bg-white border border-border rounded-lg shadow-sm mb-4 overflow-hidden">
        <div className="bg-gradient-to-r from-red-500/5 to-orange-50 px-4 py-3 border-b border-border">
          <h2 className="text-sm font-bold text-foreground">4. CRITÉRIOS DE INTERNAÇÃO</h2>
        </div>

        <div className="p-4 space-y-3 text-xs text-muted-foreground">
          <div className="border-l-4 border-red-500 pl-3">
            <p className="font-bold text-foreground mb-1">Enfermaria:</p>
            <ul className="list-disc pl-5 space-y-0.5">
              <li>Laringite moderada com resposta inadequada ao tratamento</li>
              <li>Laringite grave com melhora parcial após medidas iniciais</li>
            </ul>
          </div>

          <div className="border-l-4 border-red-700 pl-3 bg-red-50 p-2 rounded">
            <p className="font-bold text-red-900 mb-1">UTI:</p>
            <ul className="list-disc pl-5 space-y-0.5 text-red-800">
              <li>Laringite grave sem resposta às medidas iniciais</li>
              <li>Desconforto respiratório grave, rebaixamento de consciência, hipoxemia</li>
              <li>Efeito rebote após adrenalina nebulizada</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 5. DIAGNÓSTICOS DIFERENCIAIS */}
      <div className="bg-white border border-border rounded-lg shadow-sm mb-4 overflow-hidden">
        <div className="bg-gradient-to-r from-primary/5 to-blue-50 px-4 py-3 border-b border-border flex items-center gap-2">
          <AlertTriangle className="w-4 h-4 text-amber-600" />
          <h2 className="text-sm font-bold text-foreground">5. DIAGNÓSTICOS DIFERENCIAIS</h2>
        </div>

        <div className="divide-y divide-border">
          {differentials.map((item, idx) => (
            <div key={idx} className="p-4 hover:bg-gray-50/50 transition-colors">
              <p className="font-bold text-sm text-foreground mb-1">{item.condition}</p>
              <p className="text-xs text-muted-foreground">{item.clues}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 6. CRITÉRIOS DE ALTA */}
      <div className="bg-white border border-border rounded-lg shadow-sm overflow-hidden">
        <div className="bg-gradient-to-r from-green-500/5 to-emerald-50 px-4 py-3 border-b border-border">
          <h2 className="text-sm font-bold text-foreground">6. CRITÉRIOS DE ALTA</h2>
        </div>

        <div className="p-4">
          <div className="grid md:grid-cols-2 gap-4 text-xs text-muted-foreground">
            <div>
              <p className="font-bold text-foreground mb-2">Permitido alta:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Sem estridor em repouso</li>
                <li>SpO₂ normal (≥ 94%)</li>
                <li>Boa troca de ar</li>
                <li>Nível normal de consciência</li>
                <li>Tolera líquidos VO</li>
              </ul>
            </div>

            <div>
              <p className="font-bold text-foreground mb-2">Retornar se:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Piora da tosse rouca</li>
                <li>Falta de ar/estridor</li>
                <li>Prostração/letargia</li>
                <li>Piora do estado geral</li>
                <li>Febre {">"}72h</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Epidemiologia */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-6 bg-slate-50 border border-border rounded-lg p-4 text-xs text-muted-foreground"
      >
        <p className="font-bold text-foreground mb-2">Epidemiologia:</p>
        <p>Afeta crianças 6 meses-6 anos (pico 2 anos), predomínio masculino (1,5:1), sazonalidade outono/inverno. Responsável por 7% das hospitalizações pediátricas. Etiologia: Parainfluenza &gt; 75%, Influenza, VSR, Rinovírus.</p>
      </motion.div>
    </div>
  );
}