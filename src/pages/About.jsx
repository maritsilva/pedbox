import React from 'react';
import { BookOpen, Copy, Share2, Zap, Users, AlertCircle, Heart, ExternalLink, Github, Mail } from 'lucide-react';
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
    <div className="bg-white min-h-screen">

      {/* Hero */}
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="py-16 px-4 text-center bg-gradient-to-b from-slate-50 to-white"
      >
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
            Sobre o <span className="text-blue-600">PedBox</span>
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Um projeto educacional construído com a convicção de que barreiras de acesso ao conhecimento em saúde reforçam desigualdades.
          </p>
        </div>

        {/* Quick features */}
        <div className="max-w-4xl mx-auto mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          {[
            { icon: '🆓', title: 'Gratuito e aberto', desc: 'Acesso livre para todos' },
            { icon: '✓', title: 'Baseado em evidências', desc: 'Conteúdo confiável e atualizado' },
            { icon: '⚡', title: 'Feito para o dia a dia', desc: 'Ferramentas rápidas e práticas' },
            { icon: '❤️', title: 'Focado em pediatria', desc: 'Cuidado centrado na criança' },
          ].map((item, i) => (
            <div key={i} className="text-sm">
              <div className="text-3xl mb-2">{item.icon}</div>
              <p className="font-bold text-gray-900 text-sm">{item.title}</p>
              <p className="text-xs text-gray-600 mt-0.5">{item.desc}</p>
            </div>
          ))}
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
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left: Text */}
          <motion.div variants={item}>
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-blue-600 inline-block">O que é o PedBox?</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed text-sm">
              <p>
                O <strong>PedBox</strong> é uma plataforma educacional pediátrica, totalmente gratuita e de código aberto, desenvolvida para apoiar estudantes de medicina, médicos residentes, pediatras e profissionais de saúde.
              </p>
              <p>
                A plataforma reúne em um único lugar um <strong>Guia de Doses Pediátricas</strong>, <strong>Calculadoras Clínicas</strong>, <strong>Protocolos Clínicos</strong> baseados em evidências, <strong>Vacinas</strong>, <strong>Marcos do Desenvolvimento</strong> infantil e ferramentas de pesquisa.
              </p>
              <p>
                O PedBox nasceu da frustração com a <strong>fragmentação de conteúdo</strong> e o <strong>acesso restrito</strong> na educação médica. Sabemos que profissionais precisam de ferramentas rápidas e confiáveis sem custos proibitivos.
              </p>
            </div>
          </motion.div>

          {/* Right: Visual */}
          <motion.div variants={item} className="flex justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">💊</div>
              <p className="text-gray-600 font-medium">Conhecimento livre e acessível</p>
            </div>
          </motion.div>
        </div>
      </motion.section>



      {/* Nossos pilares */}
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-4 py-16"
      >
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-4 pb-4">Nossos pilares</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: '🛡️', title: 'Acesso democrático', desc: 'Amortized que conhecimento a todos, em qualquer lugar.' },
            { icon: '✓', title: 'Rigor e confiabilidade', desc: 'Alicerçado em evidências necessárias e melhores estudos disponíveis.' },
            { icon: '👥', title: 'Comunidade', desc: 'Feito por profissionais de saúde para profissionais de saúde.' },
            { icon: '🔄', title: 'Evolução contínua', desc: 'Estamos sempre aprimorando a plataforma com base no feedback.' },
          ].map((pillar, i) => (
            <motion.div key={i} variants={item} className="text-center">
              <div className="text-4xl mb-3">{pillar.icon}</div>
              <h3 className="font-bold text-gray-900 mb-2">{pillar.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Impacto */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="bg-slate-50 py-16 px-4"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 pb-4 text-center">Impacto que queremos gerar</h2>
          <p className="text-gray-700 text-center mb-8 max-w-2xl mx-auto">
            Nosso objetivo é contribuir para uma formação médica mais justa, prática e baseada em evidências, ajudando quem cuida de quem mais importa: nossas crianças.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {[
              { num: '+10 mil', desc: 'Profissionais e estudantes' },
              { num: '+500', desc: 'Conteúdos e ferramentas' },
              { num: '100%', desc: 'Gratuito e aberto' },
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-4xl font-bold text-blue-600 mb-2">{stat.num}</p>
                <p className="text-gray-600">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Participe */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-4 py-16 bg-white rounded-2xl shadow-sm"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-4 pb-4">Participe do PedBox</h2>
        <p className="text-gray-700 text-base mb-8">
          Tem sugestões, encontrou algum conteúdo que pode ser melhorado ou quer contribuir com o projeto? Sua participação faz toda a diferença!
        </p>
        <a
          href="mailto:pedboxapp@gmail.com"
          className="inline-block bg-blue-600 text-white font-bold px-8 py-3 rounded-lg hover:bg-blue-700 transition-all"
        >
          Entrar em contato
        </a>
      </motion.section>

      {/* Aviso */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-4 py-12"
      >
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 text-center">
          <p className="text-sm text-amber-900">
            <strong>⚠️ Versão Beta:</strong> O PedBox está em desenvolvimento. Toda informação deve ser validada com diretrizes oficiais e supervisão médica antes de qualquer decisão clínica.
          </p>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="bg-slate-900 text-white text-center py-12 px-4"
      >
        <div className="max-w-2xl mx-auto">
          <p className="text-sm text-slate-300 mb-4">
            O PedBox é um projeto de código aberto. <br/>
            Inspirado pela colaboração. Movido pelo cuidado. Construído para transformar.
          </p>
          <a
            href="mailto:pedboxapp@gmail.com"
            className="text-blue-400 hover:text-blue-300 font-semibold"
          >
            Tem dúvidas? Entre em contato →
          </a>
        </div>
      </motion.section>
    </div>
  );
}