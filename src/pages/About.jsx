import React from 'react';
import { BookOpen, Copy, Share2, Zap, Users, AlertCircle, Heart, ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <div className="bg-gradient-to-b from-blue-50 via-white to-cyan-50 min-h-screen">

      {/* Hero */}
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="py-16 px-4 text-center"
      >
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
            Sobre o <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">PedBox</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Um projeto educacional construído com a convicção de que barreiras de acesso ao conhecimento em saúde reforçam desigualdades.
          </p>
        </div>
      </motion.section>

      {/* O que é o PedBox */}
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-4 py-12"
      >
        <motion.div
          variants={item}
          className="bg-white rounded-3xl p-8 sm:p-12 shadow-lg border-l-4 border-blue-500"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">O que é o PedBox?</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              O <strong>PedBox</strong> é uma plataforma educacional pediátrica, totalmente gratuita e de código aberto, desenvolvida para apoiar estudantes de medicina, médicos residentes, pediatras e profissionais de saúde no dia a dia clínico.
            </p>
            <p>
              A plataforma reúne em um único lugar um <strong>Guia de Doses Pediátricas</strong> com centenas de medicamentos organizados por categoria, <strong>Calculadoras Clínicas</strong> (hidratação venosa, IMC pediátrico, pressão arterial, perímetro cefálico, alvo parental, idade gestacional corrigida, escore de Centor/McIsaac), <strong>Protocolos Clínicos</strong> baseados em evidências, <strong>Vacinas</strong>, <strong>Marcos do Desenvolvimento</strong> infantil e ferramentas de pesquisa como o PedResearch.
            </p>
            <p>
              O PedBox nasceu da frustração com a <strong>fragmentação de conteúdo</strong>, o <strong>acesso restrito</strong> e a <strong>duplicação desnecessária de esforço</strong> na educação médica. Sabemos que estudantes, residentes, professores e profissionais de saúde precisam de ferramentas rápidas e confiáveis — mas muitas vezes enfrentam custos proibitivos, plataformas fechadas ou conhecimento disperso.
            </p>
            <p>
              A plataforma está <strong>em constante atualização</strong>, com novas funcionalidades, medicamentos e conteúdos clínicos sendo adicionados regularmente para atender às necessidades da comunidade médica.
            </p>
            <p className="text-lg font-semibold text-blue-700">
              Na saúde, democratizar conhecimento também é uma forma de cuidado.
            </p>
          </div>
        </motion.div>
      </motion.section>

      {/* Para quem é */}
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-4 py-8"
      >
        <motion.div
          variants={item}
          className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 sm:p-12 border-2 border-blue-200"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Para quem é o PedBox?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
            {[
              { emoji: '🎓', title: 'Estudantes de medicina', desc: 'Que precisam de referências rápidas durante o internato e estágios.' },
              { emoji: '🏥', title: 'Médicos residentes', desc: 'Que buscam agilidade nas decisões clínicas do dia a dia.' },
              { emoji: '👩‍⚕️', title: 'Pediatras e clínicos', desc: 'Que desejam manter-se atualizados com conteúdo confiável e gratuito.' },
              { emoji: '🔬', title: 'Ligas e grupos acadêmicos', desc: 'Que querem adaptar o conteúdo para sua realidade institucional.' },
            ].map((p, i) => (
              <div key={i} className="bg-white rounded-2xl p-5 shadow-sm flex gap-3">
                <span className="text-3xl flex-shrink-0">{p.emoji}</span>
                <div>
                  <p className="font-bold text-gray-900">{p.title}</p>
                  <p className="text-sm text-gray-600 mt-1">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.section>

      {/* Livre para usar */}
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-4 py-16"
      >
        <motion.h2 variants={item} className="text-4xl font-bold text-gray-900 text-center mb-12">
          Livre para estudar, copiar, adaptar e melhorar.
        </motion.h2>
        <motion.div variants={container} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: BookOpen, title: 'Estude livremente', desc: 'Explore o código, a lógica e o design sem restrições. Aprenda como foi construído.' },
            { icon: Copy, title: 'Copie e adapte', desc: 'Pegue o modelo, ajuste para sua realidade local, seus protocolos e suas necessidades institucionais.' },
            { icon: Share2, title: 'Compartilhe', desc: 'Distribua para sua liga, seu hospital, sua rede de ensino. Sem pedidos de autorização.' },
            { icon: Zap, title: 'Crie novas versões', desc: 'Melhore o design, adicione novas seções, integre com suas ferramentas. A criatividade é sua.' },
            { icon: Users, title: 'Melhore o conteúdo', desc: 'Encontrou um erro? Tem uma recomendação clínica melhor? Sugira melhorias que beneficiem todos.' },
          ].map((card, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{ scale: 1.05, translateY: -5 }}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all border-t-4 border-blue-400"
            >
              <card.icon className="w-10 h-10 text-cyan-600 mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">{card.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Copiar Modelo */}
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-3xl mx-auto px-4 py-8"
      >
        <motion.h2 variants={item} className="text-2xl font-bold text-gray-900 text-center mb-6">
          Copie ou adapte o modelo do PedBox
        </motion.h2>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="https://app.base44.com/app-templates/69f4e81a840a3c93cee16789"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-gradient-to-r from-orange-400 to-amber-400 text-white font-bold py-4 rounded-2xl hover:shadow-lg transition-all transform hover:scale-105 flex items-center justify-center gap-3"
          >
            <Copy className="w-5 h-5" />
            Adaptar no Base44
            <ExternalLink className="w-4 h-4" />
          </a>
          <a
            href="https://github.com/maritsilva/pedbox"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-gray-900 text-white font-bold py-4 rounded-2xl hover:shadow-lg transition-all transform hover:scale-105 flex items-center justify-center gap-3"
          >
            <Github className="w-5 h-5" />
            Repositório GitHub
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </motion.section>

      {/* Aviso Ético */}
      <motion.section
        variants={item}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-4 py-12"
      >
        <div className="bg-amber-50 border-l-4 border-amber-500 rounded-2xl p-6 sm:p-8 flex gap-4">
          <AlertCircle className="w-7 h-7 text-amber-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-bold text-amber-900 text-lg mb-3">Responsabilidade ética</h3>
            <p className="text-amber-800 text-sm leading-relaxed">
              O PedBox é uma <strong>ferramenta educacional</strong>. Não substitui diretrizes oficiais, protocolos locais, avaliação clínica direta ou supervisão profissional. Recomendações clínicas devem sempre ser validadas com protocolos institucionais e orientação de especialistas.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Sobre a desenvolvedora */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-4 py-12 text-center"
      >
        <div className="bg-white rounded-2xl p-8 shadow-md border-2 border-blue-100">
          <h3 className="text-xl font-bold text-gray-900 mb-3">Sobre a desenvolvedora</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            O PedBox foi desenvolvido por uma médica residente em pediatria que acredita que barreiras de acesso ao conhecimento em saúde são barreiras à equidade. Este projeto é um convite: estudar, questionar, melhorar e construir juntos ferramentas que sirvam a toda comunidade médica.
          </p>
          <p className="text-gray-600 text-sm">
            <strong>Licença:</strong> Livre para estudo, cópia, adaptação e melhoria.
          </p>
        </div>
      </motion.section>

      {/* Encerramento */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-center py-16 px-4"
      >
        <div className="max-w-2xl mx-auto">
          <Heart className="w-12 h-12 mx-auto mb-4 opacity-80" />
          <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight">
            Conhecimento livre também é cuidado.
          </h2>
          <p className="mt-4 text-blue-100 text-lg">
            Obrigado por fazer parte desta comunidade de aprendizado compartilhado.
          </p>
        </div>
      </motion.section>
    </div>
  );
}