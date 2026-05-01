import React from 'react';
import { Link } from 'react-router-dom';
import { Droplets, Scale, Activity, Ruler, TrendingUp, Calendar, Microscope, Zap, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { useFavorites } from '@/hooks/useFavorites.jsx';

const CALCULATORS = [
  { label: 'Hidratação Venosa', desc: 'Cálculo rápido de volumes e velocidades', path: '/hidratacao', Icon: Droplets, keywords: ['hidratação', 'venosa', 'soro', 'holliday'] },
  { label: 'IMC Pediátrico', desc: 'Avaliação de crescimento e percentis', path: '/imc', Icon: Scale, keywords: ['imc', 'massa', 'corporal', 'peso', 'altura'] },
  { label: 'PA Pediátrica', desc: 'Classificação por idade, sexo e altura', path: '/pressao-arterial', Icon: Activity, keywords: ['pressão', 'arterial', 'hipertensão'] },
  { label: 'Perímetro Cefálico', desc: 'Avaliação do crescimento craniano', path: '/perimetro-cefalico', Icon: Ruler, keywords: ['perímetro', 'cabeça', 'craniano'] },
  { label: 'Alvo Parental', desc: 'Estatura esperada baseada nos pais', path: '/alvo-parental', Icon: TrendingUp, keywords: ['alvo', 'parental', 'altura', 'pais'] },
  { label: 'IG Corrigida', desc: 'Idade gestacional ajustada para prematuridade', path: '/idade-gestacional-corrigida', Icon: Calendar, keywords: ['idade', 'gestacional', 'corrigida', 'prematuro'] },
  { label: 'Centor/McIsaac', desc: 'Probabilidade de faringite estreptocócica', path: '/centor-mcisaac', Icon: Microscope, keywords: ['centor', 'mcisaac', 'faringite'] },
];

export default function Calculadoras() {
  const { toggleFavorite, isFavorite } = useFavorites();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="bg-primary/10 rounded-xl p-3">
            <Zap className="w-8 h-8 text-primary" />
          </div>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-foreground mb-2">Calculadoras Pediátricas</h1>
        <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mx-auto">Ferramentas rápidas e precisas para avaliação clínica no plantão</p>
      </motion.div>

      {/* Grid de Calculadoras */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {CALCULATORS.map((tool, i) => (
          <motion.div
            key={tool.path}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
          >
            <Link to={tool.path}>
              <div className="bg-white border border-border rounded-2xl p-5 h-full hover:shadow-md hover:border-primary/30 transition-all group cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="text-primary bg-primary/10 rounded-xl p-3 flex-shrink-0">
                    <tool.Icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-semibold text-foreground mb-1">{tool.label}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{tool.desc}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-primary group-hover:translate-x-1 transition-transform">Acessar →</span>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          toggleFavorite(tool.path);
                        }}
                        className="p-2 hover:bg-secondary rounded-lg transition-colors flex-shrink-0"
                      >
                        <Star className={`w-4 h-4 ${isFavorite(tool.path) ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground group-hover:text-yellow-400'}`} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}