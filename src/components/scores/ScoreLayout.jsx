import React from 'react';
import { ChevronLeft, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ScoreLayout({ 
  title, 
  subtitle, 
  category, 
  icon, 
  color = 'bg-red-500',
  currentScore,
  maxScore,
  instruction,
  criteria,
  onCriteriaChange,
  results,
  reference,
  onBack,
  children 
}) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Back button */}
      {onBack && (
        <button 
          onClick={onBack}
          className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          Calculadoras
        </button>
      )}

      <div className="flex flex-col lg:flex-row gap-6 items-start">
        {/* Left column */}
        <div className="flex-1 min-w-0 space-y-6">
          {/* Header card */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`${color} text-white rounded-3xl p-8 shadow-lg relative overflow-hidden`}
          >
            {/* Background decoration */}
            <div className="absolute top-4 right-6 opacity-20">
              <div className="text-6xl">{icon}</div>
            </div>

            <div className="relative z-10">
              <span className="inline-block text-xs font-bold bg-white/20 px-3 py-1 rounded-full mb-3">
                {category}
              </span>
              <h1 className="text-3xl font-extrabold mb-1">{title}</h1>
              <p className="text-sm font-medium opacity-90 mb-6">{subtitle}</p>
              
              <div className="border-t border-white/20 pt-4">
                <p className="text-4xl font-extrabold">{currentScore || 0}</p>
                <p className="text-sm opacity-90 mt-1">/ {maxScore} critérios</p>
              </div>

              <p className="text-xs mt-4 opacity-85 leading-relaxed">
                {children}
              </p>
            </div>
          </motion.div>

          {/* Instruction alert */}
          {instruction && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-2xl p-4"
            >
              <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <p className="text-xs text-amber-800 leading-relaxed">{instruction}</p>
            </motion.div>
          )}

          {/* Criteria grid */}
          {criteria && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {criteria.map((criterion, idx) => (
                  <motion.div
                    key={criterion.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + idx * 0.05 }}
                    className="flex gap-3 p-4 bg-white border border-border rounded-xl hover:border-primary/40 hover:shadow-sm transition-all"
                  >
                    <input
                      type="checkbox"
                      id={criterion.id}
                      checked={criterion.checked || false}
                      onChange={() => onCriteriaChange?.(criterion.id)}
                      className="w-5 h-5 mt-0.5 cursor-pointer"
                    />
                    <label htmlFor={criterion.id} className="flex-1 cursor-pointer">
                      <p className="font-semibold text-sm text-foreground">{criterion.label}</p>
                      {criterion.description && (
                        <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                          {criterion.description}
                        </p>
                      )}
                    </label>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Reference */}
          {reference && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white border border-border rounded-2xl p-5"
            >
              <p className="font-bold text-sm text-foreground mb-3">Referência</p>
              <div className="text-xs text-muted-foreground space-y-1.5">
                {Array.isArray(reference) ? (
                  reference.map((ref, idx) => (
                    <p key={idx}>• {ref}</p>
                  ))
                ) : (
                  <p>{reference}</p>
                )}
              </div>
            </motion.div>
          )}
        </div>

        {/* Right sidebar */}
        <div className="lg:w-80 flex-shrink-0 space-y-4 lg:sticky lg:top-20">
          {/* Score card */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white border border-border rounded-2xl p-5 shadow-sm"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                📊
              </div>
              <p className="font-bold text-sm text-foreground">Pontuação atual</p>
            </div>

            <p className="text-4xl font-extrabold text-center text-primary mb-3">
              {currentScore || 0}
            </p>

            {/* Progress bar */}
            <div className="w-full bg-gray-100 rounded-full h-2 mb-3">
              <div 
                className={`${color} h-2 rounded-full transition-all`}
                style={{ width: `${maxScore ? (currentScore / maxScore * 100) : 0}%` }}
              />
            </div>

            <p className="text-xs text-muted-foreground text-center">
              {currentScore} de {maxScore} critérios
            </p>
          </motion.div>

          {/* Results */}
          {results && (
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-3"
            >
              {results.map((result, idx) => (
                <div 
                  key={idx}
                  className={`rounded-2xl p-4 border ${result.bgColor} ${result.borderColor}`}
                >
                  <div className="flex items-start gap-3">
                    <span className={`text-2xl flex-shrink-0`}>{result.icon}</span>
                    <div className="flex-1">
                      <p className={`font-bold text-sm ${result.textColor}`}>{result.label}</p>
                      {result.description && (
                        <p className={`text-xs mt-1 ${result.descriptionColor} leading-relaxed`}>
                          {result.description}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {/* Info box */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-blue-50 border border-blue-200 rounded-2xl p-4"
          >
            <p className="text-xs font-semibold text-blue-900 mb-2">💡 Ferramenta de apoio</p>
            <p className="text-xs text-blue-800 leading-relaxed">
              Correlacionar com clínica e protocolos institucionais. Sempre validate com avaliação clínica e demais exames laboratoriais.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}