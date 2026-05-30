import React, { useState } from 'react';
import { ChevronLeft, Download, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const GROWTH_CHARTS = [
  {
    category: 'OMS — Altura para Idade',
    icon: '📏',
    color: 'from-blue-500 to-cyan-600',
    charts: [
      { name: 'OMS: Altura para Idade (Meninos), 0-5 anos, em Percentil', url: 'https://www.sbp.com.br/fileadmin/user_upload/sbp/2022/abril/27/OMS._Altura_para_Idade__Meninos_._0-5_anos._Em_Percentil..pdf' },
      { name: 'OMS: Altura para Idade (Meninos), 0-5 anos, em Z score', url: 'https://www.sbp.com.br/fileadmin/user_upload/sbp/2022/abril/27/OMS._Altura_para_Idade__Meninos_._0-5_anos._Em_Z_score..pdf' },
      { name: 'OMS: Altura para Idade (Meninos), 5-19 anos, em Percentil', url: 'https://www.sbp.com.br/fileadmin/user_upload/sbp/2022/abril/27/OMS._Altura_para_Idade__Meninos_._5-19_anos._Em_Percentil..pdf' },
      { name: 'OMS: Altura para Idade (Meninos), 5-19 anos, em Z score', url: 'https://www.sbp.com.br/fileadmin/user_upload/sbp/2022/abril/27/OMS._Altura_para_Idade__Meninos_._5-19_anos._Em_Z_score..pdf' },
      { name: 'OMS: Altura para Idade (Meninas), 0-5 anos, em Percentil', url: 'https://www.sbp.com.br/fileadmin/user_upload/sbp/2022/abril/27/OMS._Altura_para_Idade__Meninas_._0-5_anos._Em_Percentil..pdf' },
      { name: 'OMS: Altura para Idade (Meninas), 0-5 anos, em Z score', url: 'https://www.sbp.com.br/fileadmin/user_upload/sbp/2022/abril/27/OMS._Altura_para_Idade__Meninas_._0-5_anos._Em_Z_score..pdf' },
      { name: 'OMS: Altura para Idade (Meninas), 5-19 anos, em Percentil', url: 'https://www.sbp.com.br/fileadmin/user_upload/sbp/2022/abril/27/OMS._Altura_para_Idade__Meninas_._5-19_anos._Em_Percentil..pdf' },
      { name: 'OMS: Altura para Idade (Meninas), 5-19 anos, em Z score', url: 'https://www.sbp.com.br/fileadmin/user_upload/sbp/2022/abril/27/OMS._Altura_para_Idade__Meninas_._5-19_anos._Em_Z_score..pdf' },
    ],
  },
  {
    category: 'OMS — Peso para Idade',
    icon: '⚖️',
    color: 'from-green-500 to-emerald-600',
    charts: [
      { name: 'OMS: Peso para Idade (Meninos), 0-5 anos, em Percentil', url: 'https://www.sbp.com.br/fileadmin/user_upload/sbp/2022/abril/27/OMS._Peso_para_Idade__Meninos_._0-5_anos._Em_Percentil..pdf' },
      { name: 'OMS: Peso para Idade (Meninos), 0-5 anos, em Z score', url: 'https://www.sbp.com.br/fileadmin/user_upload/sbp/2022/abril/27/OMS._Peso_para_Idade__Meninos_._0-5_anos._Em_Z_score.pdf' },
      { name: 'OMS: Peso para Idade (Meninas), 0-5 anos, em Percentil', url: 'https://www.sbp.com.br/fileadmin/user_upload/sbp/2022/abril/27/OMS._Peso_para_Idade__Meninas_._0-5_anos._Em_Percentil..pdf' },
      { name: 'OMS: Peso para Idade (Meninas), 0-5 anos, em Z score', url: 'https://www.sbp.com.br/fileadmin/user_upload/sbp/2022/abril/27/OMS._Peso_para_Idade__Meninas_._0-5_anos._Em__Z_score..pdf' },
      { name: 'OMS: Peso para Idade (Meninos), 5-10 anos, em Percentil', url: 'https://www.sbp.com.br/fileadmin/user_upload/sbp/2022/abril/27/OMS._Peso_para_Idade__Meninos_._5-10_anos._Em_Percentil..pdf' },
      { name: 'OMS: Peso para Idade (Meninos), 5-10 anos, em Z score', url: 'https://www.sbp.com.br/fileadmin/user_upload/sbp/2022/abril/27/OMS._Peso_para_Idade__Meninos_._5-10_anos._Em_Z_score..pdf' },
      { name: 'OMS: Peso para Idade (Meninas), 5-10 anos, em Percentil', url: 'https://www.sbp.com.br/fileadmin/user_upload/sbp/2022/abril/27/OMS._Peso_para_Idade__Meninas_._5-10_anos._Em_Percentil..pdf' },
      { name: 'OMS: Peso para Idade (Meninas), 5-10 anos, em Z score', url: 'https://www.sbp.com.br/fileadmin/user_upload/sbp/2022/abril/27/OMS._Peso_para_Idade__Meninas_._5-10_anos._Em_Z_score..pdf' },
    ],
  },
  {
    category: 'OMS — IMC',
    icon: '📊',
    color: 'from-purple-500 to-pink-600',
    charts: [
      { name: 'OMS: IMC (Meninos), 0-5 anos, em Z score', url: 'https://www.sbp.com.br/fileadmin/user_upload/Curva_de_IMC._OMS._Meninos__de_0_a_5_anos._Escore_Z.pdf' },
      { name: 'OMS: IMC (Meninas), 0-5 anos, em Z score', url: 'https://www.sbp.com.br/fileadmin/user_upload/Curva_de_IMC._OMS._Meninas__de_0_a_5_anos._Escore_Z.pdf' },
      { name: 'OMS: IMC (Meninos), 5-19 anos, em Percentil', url: 'https://www.sbp.com.br/fileadmin/user_upload/sbp/2022/abril/27/OMS._IMC__Meninos_._5-19_anos._Em_Percentil..pdf' },
      { name: 'OMS: IMC (Meninos), 5-19 anos, em Z score', url: 'https://www.sbp.com.br/fileadmin/user_upload/sbp/2022/abril/27/OMS._IMC__Meninos_._5-19_anos._Em_Z_score..pdf' },
      { name: 'OMS: IMC (Meninas), 5-19 anos, em Percentil', url: 'https://www.sbp.com.br/fileadmin/user_upload/sbp/2022/abril/27/OMS._IMC__Meninas_._5-19_anos._Em_Percentil..pdf' },
      { name: 'OMS: IMC (Meninas), 5-19 anos, em Z score', url: 'https://www.sbp.com.br/fileadmin/user_upload/sbp/2022/abril/27/OMS._IMC__Meninas_._5-19_anos._Em_Z_score..pdf' },
    ],
  },
  {
    category: 'OMS — Perímetro Cefálico',
    icon: '🔵',
    color: 'from-orange-500 to-red-600',
    charts: [
      { name: 'OMS: Perímetro cefálico (Meninos), 0-5 anos, em Percentil', url: 'https://www.sbp.com.br/fileadmin/user_upload/sbp/2022/abril/27/OMS._Perimetro_cefalico__Meninos_._0-5_anos._Em_Percentil..pdf' },
      { name: 'OMS: Perímetro cefálico (Meninos), 0-5 anos, em Z score', url: 'https://www.sbp.com.br/fileadmin/user_upload/sbp/2022/abril/27/OMS._Perimetro_cefalico__Meninos_._0-5_anos._Em_Z_score..pdf' },
      { name: 'OMS: Perímetro cefálico (Meninas), 0-5 anos, em Percentil', url: 'https://www.sbp.com.br/fileadmin/user_upload/sbp/2022/abril/27/OMS._Perimetro_cefalico__Meninas_._0-5_anos._Em_Percentil..pdf' },
      { name: 'OMS: Perímetro cefálico (Meninas), 0-5 anos, em Z score', url: 'https://www.sbp.com.br/fileadmin/user_upload/sbp/2022/abril/27/OMS._Perimetro_cefalico__Meninas_._0-5_anos._Em_Z_score..pdf' },
    ],
  },
  {
    category: 'CDC — IMC',
    icon: '📈',
    color: 'from-teal-500 to-cyan-600',
    charts: [
      { name: 'CDC. IMC em percentis. Meninos. 2-20 anos. 2022', url: 'https://www.sbp.com.br/fileadmin/user_upload/sbp/2023/agosto/17/CDC._IMC_em_Percentis._Meninos._2-20_anos._2022.pdf' },
      { name: 'CDC. IMC em percentis. Meninas. 2-20 anos. 2022', url: 'https://www.sbp.com.br/fileadmin/user_upload/sbp/2023/agosto/17/CDC._IMC_em_Percentis._Meninas._2-20_anos._2022.pdf' },
    ],
  },
  {
    category: 'Brasil — Síndrome de Down',
    icon: '👶',
    color: 'from-indigo-500 to-purple-600',
    charts: [
      { name: 'Brasil: Síndrome de Down: Altura para Idade (Meninas), 0-36 meses, em Percentil', url: 'https://www.sbp.com.br/fileadmin/user_upload/Brasil.Sindrome_de_Down.Altura_para_Idade._Meninas.0-36_meses.Percentil.pdf' },
      { name: 'Brasil: Síndrome de Down: Altura para Idade (Meninas), 3-20 anos, em Percentil', url: 'https://www.sbp.com.br/fileadmin/user_upload/Brasil.Sindrome_de_Down.Altura_para_Idade._Meninas.3-20_anos.Percentil.pdf' },
      { name: 'Brasil: Síndrome de Down: Peso para Idade (Meninas), 0-36 meses, em Percentil', url: 'https://www.sbp.com.br/fileadmin/user_upload/Brasil.Sindrome_de_Down.Peso_para_Idade._Meninas.0-36_meses.Percentil.pdf' },
      { name: 'Brasil: Síndrome de Down: Peso para Idade (Meninas), 3-20 anos, em Percentil', url: 'https://www.sbp.com.br/fileadmin/user_upload/Brasil.Sindrome_de_Down.Peso_para_Idade._Meninas.3-20_anos.Percentil.pdf' },
    ],
  },
  {
    category: 'Acondroplasia',
    icon: '📐',
    color: 'from-amber-500 to-orange-600',
    charts: [
      { name: 'Gráfico Europeu. Acondroplasia (Meninas). Altura sentada (2 a 20 anos)', url: 'https://www.sbp.com.br/fileadmin/user_upload/sbp/2022/novembro/04/Grafico_Europeu._Acondroplasia__Meninas_._Altura_sentada__2_a_20_anos_.pdf' },
      { name: 'Gráfico Europeu. Acondroplasia (Meninas). Envergadura e Comprimento das Pernas (Nascimento – 20 anos)', url: 'https://www.sbp.com.br/fileadmin/user_upload/sbp/2022/novembro/04/Grafico_Europeu._Acondroplasia__Meninas_._Envergadura_e_Comprimento_das_Pernas__Nascimento_-_20_anos_.pdf' },
      { name: 'Gráfico Europeu. Acondroplasia (Meninas). IMC (Nascimento – 20 anos)', url: 'https://www.sbp.com.br/fileadmin/user_upload/sbp/2022/novembro/04/Grafico_Europeu._Acondroplasia__Meninas_._IMC__Nascimento_-_20_anos_.pdf' },
      { name: 'Gráfico Europeu. Acondroplasia (Meninos). Altura sentada (2 a 20 anos)', url: 'https://www.sbp.com.br/fileadmin/user_upload/sbp/2022/novembro/04/Grafico_Europeu._Acondroplasia__Meninos_._Altura_sentada__2_a_20_anos_.pdf' },
      { name: 'Gráfico Europeu. Acondroplasia (Meninos). Envergadura e Comprimento das Pernas (Nascimento – 20 anos)', url: 'https://www.sbp.com.br/fileadmin/user_upload/sbp/2022/novembro/04/Grafico_Europeu._Acondroplasia__Meninos_._Envergadura_e_Comprimento_das_Pernas__Nascimento_-_20_anos_.pdf' },
      { name: 'Gráfico Europeu. Acondroplasia (Meninos). IMC (Nascimento – 20 anos)', url: 'https://www.sbp.com.br/fileadmin/user_upload/sbp/2022/novembro/04/Grafico_Europeu._Acondroplasia__Meninos_._IMC__Nascimento_-_20_anos_.pdf' },
    ],
  },
];

export default function CurvasCrescimento() {
  const navigate = useNavigate();
  const [expandedCategory, setExpandedCategory] = useState(null);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Back button */}
      <button
        onClick={() => navigate('/')}
        className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors"
      >
        <ChevronLeft className="w-4 h-4" />
        Voltar
      </button>

      {/* Header */}
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-3">
          Gráficos de Crescimento
        </h1>
        <p className="text-base md:text-lg text-muted-foreground max-w-3xl leading-relaxed">
          Acesso rápido aos gráficos de crescimento da OMS, CDC, SBP e diretrizes internacionais.
          Referências confiáveis para avaliação do desenvolvimento infantil.
        </p>
      </motion.div>

      {/* Categories */}
      <div className="space-y-4">
        {GROWTH_CHARTS.map((category, categoryIdx) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: categoryIdx * 0.05 }}
            className="bg-white border border-border rounded-2xl overflow-hidden shadow-sm"
          >
            {/* Category header */}
            <button
              onClick={() =>
                setExpandedCategory(
                  expandedCategory === category.category ? null : category.category
                )
              }
              className="w-full flex items-center justify-between px-6 py-4 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-4 text-left">
                <span className="text-4xl">{category.icon}</span>
                <h2 className="font-bold text-lg text-foreground">{category.category}</h2>
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-700">
                  {category.charts.length} gráficos
                </span>
              </div>
              <div className="text-2xl text-muted-foreground">
                {expandedCategory === category.category ? '−' : '+'}
              </div>
            </button>

            {/* Chart list */}
            {expandedCategory === category.category && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="border-t border-border bg-gray-50"
              >
                <div className="divide-y divide-border">
                  {category.charts.map((chart, idx) => (
                    <a
                      key={idx}
                      href={chart.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-6 py-3.5 hover:bg-white transition-colors group"
                    >
                      <FileText className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-sm text-foreground group-hover:text-primary transition-colors">
                          {chart.name}
                        </p>
                      </div>
                      <Download className="w-4 h-4 text-muted-foreground group-hover:text-primary flex-shrink-0" />
                    </a>
                  ))}
                </div>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-10 bg-blue-50 border border-blue-200 rounded-2xl p-6"
      >
        <p className="text-sm text-blue-900 leading-relaxed">
          <strong>Fonte:</strong> Gráficos fornecidos pela Sociedade Brasileira de Pediatria (SBP), Organização Mundial da Saúde (OMS) e CDC.
          Sempre use os gráficos apropriados para a idade, sexo e condição clínica do paciente. Correlacione com avaliação clínica completa.
        </p>
      </motion.div>
    </div>
  );
}