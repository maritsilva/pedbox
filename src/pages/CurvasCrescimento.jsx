import React, { useState } from 'react';
import { ChevronLeft, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const CURVAS = [
  {
    id: 'peso-idade-m',
    label: 'Peso por Idade — Meninas',
    desc: 'Percentis de peso para idade em crianças do sexo feminino de 0 a 5 anos',
    icon: '👧',
    color: 'bg-pink-50 border-pink-200',
  },
  {
    id: 'peso-idade-b',
    label: 'Peso por Idade — Meninos',
    desc: 'Percentis de peso para idade em crianças do sexo masculino de 0 a 5 anos',
    icon: '👦',
    color: 'bg-blue-50 border-blue-200',
  },
  {
    id: 'altura-idade-m',
    label: 'Altura por Idade — Meninas',
    desc: 'Percentis de altura/comprimento para idade em crianças do sexo feminino',
    icon: '📏',
    color: 'bg-purple-50 border-purple-200',
  },
  {
    id: 'altura-idade-b',
    label: 'Altura por Idade — Meninos',
    desc: 'Percentis de altura/comprimento para idade em crianças do sexo masculino',
    icon: '📐',
    color: 'bg-indigo-50 border-indigo-200',
  },
  {
    id: 'peso-altura-m',
    label: 'Peso por Altura — Meninas',
    desc: 'Avaliação do estado nutricional independente da idade',
    icon: '⚖️',
    color: 'bg-rose-50 border-rose-200',
  },
  {
    id: 'peso-altura-b',
    label: 'Peso por Altura — Meninos',
    desc: 'Avaliação do estado nutricional independente da idade',
    icon: '⚗️',
    color: 'bg-cyan-50 border-cyan-200',
  },
  {
    id: 'imc-idade-m',
    label: 'IMC por Idade — Meninas',
    desc: 'Percentis de índice de massa corporal para idade (2 a 19 anos)',
    icon: '📊',
    color: 'bg-amber-50 border-amber-200',
  },
  {
    id: 'imc-idade-b',
    label: 'IMC por Idade — Meninos',
    desc: 'Percentis de índice de massa corporal para idade (2 a 19 anos)',
    icon: '📈',
    color: 'bg-green-50 border-green-200',
  },
];

const REFERENCIA = [
  'Fonte: CDC Growth Charts — National Center for Health Statistics',
  'Recomendado para crianças de 0 a 19 anos',
  'Utilize com protocolos institucionais de avaliação de crescimento',
];

export default function CurvasCrescimento() {
  const navigate = useNavigate();
  const [selectedCurva, setSelectedCurva] = useState(null);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Back button */}
      <button 
        onClick={() => navigate('/')}
        className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors"
      >
        <ChevronLeft className="w-4 h-4" />
        Voltar
      </button>

      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-3">
          Curvas de Crescimento
        </h1>
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
          Percentis de crescimento (peso, altura e IMC) para avaliação do desenvolvimento infantil de 0 a 19 anos, baseado em dados dos CDC.
        </p>
      </motion.div>

      {/* Info boxes */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid md:grid-cols-3 gap-4 mb-10"
      >
        {[
          { icon: '🎯', title: 'Rastreamento', desc: 'Acompanhe o crescimento da criança ao longo do tempo' },
          { icon: '📊', title: 'Percentis', desc: 'Compreenda as posições relativas de peso, altura e IMC' },
          { icon: '🏥', title: 'Clínico', desc: 'Use em conjunto com avaliação clínica e protocolos institucionais' },
        ].map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 + idx * 0.05 }}
            className="bg-white border border-border rounded-2xl p-5"
          >
            <span className="text-3xl mb-2 block">{item.icon}</span>
            <p className="font-bold text-sm text-foreground mb-1">{item.title}</p>
            <p className="text-xs text-muted-foreground">{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Curvas grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="space-y-6"
      >
        <h2 className="text-xl font-bold text-foreground">Gráficos disponíveis</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {CURVAS.map((curva, idx) => (
            <motion.button
              key={curva.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 + idx * 0.04 }}
              onClick={() => setSelectedCurva(curva)}
              className={`border rounded-2xl p-5 text-left hover:shadow-md transition-all ${curva.color}`}
            >
              <span className="text-3xl mb-3 block">{curva.icon}</span>
              <p className="font-bold text-sm text-foreground mb-2">{curva.label}</p>
              <p className="text-xs text-muted-foreground leading-relaxed">{curva.desc}</p>
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Curva detail */}
      {selectedCurva && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-10 bg-white border border-border rounded-2xl p-8 space-y-6"
        >
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2">{selectedCurva.label}</h2>
              <p className="text-muted-foreground">{selectedCurva.desc}</p>
            </div>
            <button
              onClick={() => setSelectedCurva(null)}
              className="text-muted-foreground hover:text-foreground"
            >
              ✕
            </button>
          </div>

          {/* Placeholder for curve image/chart */}
          <div className="bg-gray-100 border border-border rounded-xl h-96 flex items-center justify-center">
            <div className="text-center space-y-2">
              <p className="text-2xl">📈</p>
              <p className="text-sm text-muted-foreground">
                Gráfico: {selectedCurva.label}
              </p>
              <p className="text-xs text-muted-foreground/60">
                (Gráficos em alta resolução disponíveis para download)
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-xs font-bold text-blue-900 mb-2">💡 Interpretação</p>
              <p className="text-xs text-blue-800">
                Crianças com medidas entre os percentis 10 e 90 estão dentro dos parâmetros normais. Desvios significativos requerem investigação clínica.
              </p>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <p className="text-xs font-bold text-amber-900 mb-2">⚠️ Atenção</p>
              <p className="text-xs text-amber-800">
                Sempre correlacione com história clínica, avaliação física e protocolos institucionais.
              </p>
            </div>
          </div>

          <button className="w-full flex items-center justify-center gap-2 bg-primary text-white font-semibold py-3 rounded-lg hover:bg-primary/90 transition-colors">
            <Download className="w-4 h-4" />
            Baixar em alta resolução
          </button>
        </motion.div>
      )}

      {/* Reference */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-10 bg-white border border-border rounded-2xl p-6"
      >
        <p className="font-bold text-foreground mb-3">Referências</p>
        <ul className="text-xs text-muted-foreground space-y-1">
          {REFERENCIA.map((ref, idx) => (
            <li key={idx}>• {ref}</li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}