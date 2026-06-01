import React, { useState } from 'react';
import { Mail, BookOpen, Share2, Zap, Users, Heart, AlertCircle, Copy, ExternalLink, CheckCircle, ArrowRight, Globe, Stethoscope, GraduationCap, Sparkles, Code2, FlaskConical } from 'lucide-react';
import { motion } from 'framer-motion';
import { base44 } from '@/api/base44Client';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const FREEDOMS = [
  { icon: BookOpen,   color: 'from-blue-500 to-blue-600',   bg: 'bg-blue-50',   border: 'border-blue-200',   text: 'text-blue-700',   title: 'Estude livremente',  desc: 'Explore o código, a lógica e o design sem restrições. Aprenda como foi construído.' },
  { icon: Copy,       color: 'from-violet-500 to-violet-600', bg: 'bg-violet-50', border: 'border-violet-200', text: 'text-violet-700', title: 'Copie e adapte',     desc: 'Pegue o modelo, ajuste para sua realidade local, seus protocolos e necessidades institucionais.' },
  { icon: Share2,     color: 'from-cyan-500 to-cyan-600',    bg: 'bg-cyan-50',    border: 'border-cyan-200',   text: 'text-cyan-700',   title: 'Compartilhe',        desc: 'Distribua para sua liga, hospital ou rede de ensino. Sem pedidos de autorização.' },
  { icon: Zap,        color: 'from-amber-500 to-orange-500', bg: 'bg-amber-50',   border: 'border-amber-200',  text: 'text-amber-700',  title: 'Crie novas versões', desc: 'Melhore o design, adicione novas seções, integre com suas ferramentas. A criatividade é sua.' },
  { icon: Users,      color: 'from-green-500 to-emerald-600',bg: 'bg-green-50',   border: 'border-green-200',  text: 'text-green-700',  title: 'Melhore o conteúdo', desc: 'Encontrou um erro? Tem uma recomendação clínica melhor? Sugira melhorias que beneficiem todos.' },
  { icon: Globe,      color: 'from-pink-500 to-rose-600',    bg: 'bg-pink-50',    border: 'border-pink-200',   text: 'text-pink-700',   title: 'Sem fronteiras',     desc: 'Pediátras de qualquer país podem usar, traduzir e localizar o PedBox para sua comunidade.' },
];

const IMPACTS = [
  { icon: '🎓', label: 'Estudantes de medicina', desc: 'Acesso a ferramentas clínicas de qualidade sem mensalidade' },
  { icon: '🏥', label: 'Residentes e internos', desc: 'Decisões mais rápidas e embasadas no plantão' },
  { icon: '🌍', label: 'Regiões de escasso recurso', desc: 'Mesmo acesso independente da infraestrutura' },
  { icon: '🔬', label: 'Pesquisadores e professores', desc: 'Base para novas ferramentas educacionais' },
];

const FEATURES_PEDBOX = [
  { icon: Stethoscope,    label: 'Protocolos clínicos', desc: '10+ protocolos pediátricos baseados em diretrizes nacionais e internacionais' },
  { icon: FlaskConical,   label: 'Calculadoras e scores', desc: 'APGAR, Glasgow, PEWS, PRAM, Silverman-Anderson e mais' },
  { icon: BookOpen,       label: 'Guia de medicamentos', desc: 'Dosagens, indicações e contraindicações para a prática pediátrica' },
  { icon: GraduationCap, label: 'Condutas em desenvolvimento', desc: 'Biblioteca crescente de condutas clínicas organizadas por especialidade' },
  { icon: Sparkles,       label: 'SophIA — IA para pesquisa', desc: 'Agente inteligente para pesquisa clínica pediátrica baseada em evidências' },
  { icon: Code2,          label: 'Código aberto', desc: 'Construído para ser copiado, adaptado e melhorado pela comunidade' },
];

export default function Contato() {
  const [formData, setFormData] = useState({ name: '', email: '', institution: '', reason: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    const reasonLabels = {
      sugestao: 'Sugestão de melhoria',
      erro: 'Reportar erro / conteúdo inadequado',
      adaptacao: 'Interesse em adaptar / usar localmente',
      colaboracao: 'Proposta de colaboração',
      outro: 'Outro',
    };
    await base44.integrations.Core.SendEmail({
      to: 'dramarinasilvaped@gmail.com',
      subject: `[PedBox Contato] ${reasonLabels[formData.reason] || formData.reason} — ${formData.name}`,
      body: `Nome: ${formData.name}\nE-mail: ${formData.email}\nInstituição: ${formData.institution}\nMotivo: ${reasonLabels[formData.reason] || formData.reason}\n\nMensagem:\n${formData.message}`,
    });
    setSending(false);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', institution: '', reason: '', message: '' });
      setSubmitted(false);
    }, 4000);
  };

  return (
    <div className="bg-gradient-to-b from-slate-50 via-white to-blue-50/30 min-h-screen">

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <motion.section
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden pt-16 pb-20 px-4 text-center"
      >
        {/* BG decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-br from-blue-100/60 via-cyan-100/40 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-1.5 text-xs font-bold text-blue-700 mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            Projeto educacional aberto · Livre para adaptar
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight mb-6">
            Conhecimento médico<br />
            deve ser{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">livre.</span>
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto mb-8">
            PedBox é um projeto educacional construído com a convicção de que barreiras de acesso ao conhecimento em saúde reforçam desigualdades.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="#sobre" className="flex items-center gap-2 bg-primary text-white font-bold px-6 py-3 rounded-2xl hover:bg-primary/90 transition-all shadow-md hover:shadow-lg">
              Conhecer o projeto <ArrowRight className="w-4 h-4" />
            </a>
            <button
              onClick={() => window.open('https://app.base44.com/app-templates/69f4e81a840a3c93cee16789', '_blank')}
              className="flex items-center gap-2 bg-white border-2 border-border text-foreground font-bold px-6 py-3 rounded-2xl hover:border-primary/40 transition-all shadow-sm"
            >
              <Copy className="w-4 h-4" /> Copiar o modelo
            </button>
          </div>
        </div>
      </motion.section>

      {/* ── O QUE É O PEDBOX ────────────────────────────────────────── */}
      <motion.section id="sobre"
        variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}
        className="max-w-6xl mx-auto px-4 py-16"
      >
        <motion.div variants={item} className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-3">O que é o PedBox?</h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">Uma plataforma clínica completa para a pediatria, gratuita e de código aberto.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES_PEDBOX.map((feat, i) => {
            const Icon = feat.icon;
            return (
              <motion.div key={i} variants={item}
                className="bg-white border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all group"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <p className="font-bold text-gray-900 mb-1.5">{feat.label}</p>
                <p className="text-sm text-gray-500 leading-relaxed">{feat.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </motion.section>

      {/* ── PROPÓSITO ────────────────────────────────────────────────── */}
      <motion.section
        variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}
        className="max-w-4xl mx-auto px-4 py-10"
      >
        <motion.div variants={item}
          className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl p-8 sm:p-12 shadow-xl text-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3" />
          <div className="relative">
            <p className="text-blue-200 text-xs font-bold uppercase tracking-widest mb-4">O propósito</p>
            <h2 className="text-3xl font-extrabold mb-5 leading-snug">
              O PedBox nasceu da frustração com fragmentação, acesso restrito e duplicação de esforço na educação médica.
            </h2>
            <div className="space-y-4 text-blue-100 leading-relaxed">
              <p>
                Sabemos que estudantes, residentes, professores e profissionais de saúde precisam de ferramentas rápidas e confiáveis — mas muitas vezes enfrentam custos proibitivos, plataformas fechadas ou conhecimento disperso.
              </p>
              <p>
                Decidimos construir algo diferente: um projeto educacional <strong className="text-white">radicalmente livre</strong>. Não apenas disponível, mas genuinamente aberto para estudo, adaptação e melhoria contínua.
              </p>
            </div>
            <div className="mt-6 pt-6 border-t border-white/20">
              <p className="text-xl font-bold text-white">Na saúde, democratizar conhecimento também é uma forma de cuidado.</p>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* ── 6 LIBERDADES ─────────────────────────────────────────────── */}
      <motion.section
        variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}
        className="max-w-6xl mx-auto px-4 py-16"
      >
        <motion.div variants={item} className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-3">Livre para estudar, copiar, adaptar e melhorar.</h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">Seis liberdades que definem o PedBox como um projeto genuinamente aberto.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FREEDOMS.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div key={i} variants={item}
                whileHover={{ y: -4 }}
                className={`${card.bg} ${card.border} border rounded-2xl p-6 transition-all hover:shadow-md`}
              >
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center mb-4 shadow-sm`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h3 className={`text-base font-bold mb-2 ${card.text}`}>{card.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{card.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </motion.section>

      {/* ── POR QUE IMPORTA ──────────────────────────────────────────── */}
      <motion.section
        variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}
        className="max-w-6xl mx-auto px-4 py-10"
      >
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left text */}
          <motion.div variants={item}>
            <p className="text-xs font-bold text-green-600 uppercase tracking-widest mb-3">Por que isso importa</p>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-5 leading-snug">
              A ciência avança quando o conhecimento é compartilhado.
            </h2>
            <div className="space-y-3 text-gray-600 leading-relaxed mb-6">
              <p>Barreiras — livros caros, plataformas proprietárias, conteúdos fragmentados — não protegem a qualidade; apenas a preservam longe de quem mais precisa.</p>
              <p className="font-semibold text-blue-700">Conteúdo livre não significa qualidade baixa — significa que o conhecimento é revisado, melhorado e reutilizado coletivamente.</p>
            </div>
            <ul className="space-y-3">
              {[
                { label: 'Desigualdade de acesso', desc: 'Estudantes em instituições menos favorecidas ficam para trás.' },
                { label: 'Duplicação de esforço', desc: 'Cada escola, hospital e liga reinventa a roda.' },
                { label: 'Conhecimento estagnado', desc: 'Melhorias em um lugar não beneficiam os demais.' },
              ].map((it, i) => (
                <li key={i} className="flex gap-3">
                  <span className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5">✕</span>
                  <span><strong className="text-gray-800">{it.label}:</strong> {it.desc}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right impact cards */}
          <motion.div variants={item} className="grid grid-cols-2 gap-4">
            {IMPACTS.map((imp, i) => (
              <div key={i} className="bg-white border border-border rounded-2xl p-5 shadow-sm hover:shadow-md transition-all">
                <span className="text-3xl">{imp.icon}</span>
                <p className="font-bold text-sm text-gray-900 mt-3 mb-1">{imp.label}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{imp.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* ── AVISO ÉTICO ──────────────────────────────────────────────── */}
      <motion.section
        initial="hidden" whileInView="show" variants={item} viewport={{ once: true }}
        className="max-w-4xl mx-auto px-4 py-10"
      >
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 sm:p-8 flex gap-4">
          <AlertCircle className="w-7 h-7 text-amber-500 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-bold text-amber-900 text-base mb-2">Responsabilidade ética</h3>
            <p className="text-amber-800 text-sm leading-relaxed">
              O PedBox é uma <strong>ferramenta educacional</strong>. Não substitui diretrizes oficiais, protocolos locais, avaliação clínica direta ou supervisão profissional. Recomendações clínicas devem sempre ser validadas com protocolos institucionais e orientação de especialistas. Ao usar, adaptar ou compartilhar este conteúdo, você assume responsabilidade por sua aplicação ética e profissional.
            </p>
          </div>
        </div>
      </motion.section>

      {/* ── FORMULÁRIO ───────────────────────────────────────────────── */}
      <motion.section
        variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}
        className="max-w-3xl mx-auto px-4 py-16"
      >
        <motion.div variants={item} className="text-center mb-10">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-2">Entre em contato</h2>
          <p className="text-gray-500">Sugestão, erro, colaboração ou só um oi — respondemos todos.</p>
        </motion.div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
            className="bg-green-50 border-2 border-green-300 rounded-2xl p-10 text-center"
          >
            <div className="w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-5 shadow">
              <CheckCircle className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-extrabold text-green-900 mb-2">Mensagem enviada!</h3>
            <p className="text-green-700">Obrigado por entrar em contato. Responderemos em breve.</p>
          </motion.div>
        ) : (
          <motion.form variants={item} onSubmit={handleSubmit}
            className="bg-white rounded-3xl shadow-lg border border-border p-8 sm:p-10 space-y-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Seu nome</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required
                  className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all bg-secondary/30"
                  placeholder="João Silva" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">E-mail</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required
                  className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all bg-secondary/30"
                  placeholder="joao@example.com" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Instituição / Área</label>
              <input type="text" name="institution" value={formData.institution} onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all bg-secondary/30"
                placeholder="Ex: USP, Hospital X, Liga de Pediatria, Desenvolvedor" />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Motivo do contato</label>
              <select name="reason" value={formData.reason} onChange={handleChange} required
                className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all bg-secondary/30 text-gray-700">
                <option value="">Selecione um motivo</option>
                <option value="sugestao">Sugestão de melhoria</option>
                <option value="erro">Reportar erro / conteúdo inadequado</option>
                <option value="adaptacao">Interesse em adaptar / usar localmente</option>
                <option value="colaboracao">Proposta de colaboração</option>
                <option value="outro">Outro</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Mensagem</label>
              <textarea name="message" value={formData.message} onChange={handleChange} required rows="5"
                className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all bg-secondary/30 resize-none"
                placeholder="Conte-nos mais..." />
            </div>

            <button type="submit" disabled={sending}
              className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold py-3.5 rounded-xl hover:shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-60">
              {sending ? <span className="animate-pulse">Enviando...</span> : <><Mail className="w-5 h-5" /> Enviar mensagem</>}
            </button>
          </motion.form>
        )}
      </motion.section>

      {/* ── COPIAR MODELO ────────────────────────────────────────────── */}
      <motion.section
        initial="hidden" whileInView="show" variants={item} viewport={{ once: true }}
        className="max-w-4xl mx-auto px-4 py-6"
      >
        <div className="bg-gradient-to-br from-orange-50 to-amber-50 border border-amber-200 rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-center gap-6">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-400 to-amber-400 flex items-center justify-center shadow-md flex-shrink-0">
            <Copy className="w-8 h-8 text-white" />
          </div>
          <div className="flex-1 text-center sm:text-left">
            <p className="font-extrabold text-gray-900 text-xl mb-1">Copiar ou adaptar o PedBox</p>
            <p className="text-gray-600 text-sm leading-relaxed">Acesse o modelo completo no Base44 e crie sua própria versão da plataforma — para sua liga, hospital ou especialidade.</p>
          </div>
          <button
            onClick={() => window.open('https://app.base44.com/app-templates/69f4e81a840a3c93cee16789', '_blank')}
            className="flex items-center gap-2 bg-gradient-to-r from-orange-400 to-amber-400 text-white font-bold px-6 py-3 rounded-2xl hover:shadow-lg transition-all flex-shrink-0"
          >
            Acessar modelo <ExternalLink className="w-4 h-4" />
          </button>
        </div>
      </motion.section>

      {/* ── SOBRE A DESENVOLVEDORA ───────────────────────────────────── */}
      <motion.section
        initial="hidden" whileInView="show" variants={item} viewport={{ once: true }}
        className="max-w-4xl mx-auto px-4 py-10"
      >
        <div className="bg-white border border-border rounded-3xl p-8 sm:p-10 shadow-sm flex flex-col sm:flex-row gap-8 items-start">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow flex-shrink-0">
            <Heart className="w-8 h-8 text-white" />
          </div>
          <div>
            <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">Sobre a desenvolvedora</p>
            <h3 className="text-xl font-extrabold text-gray-900 mb-3">Uma médica residente que acredita em ciência aberta</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              O PedBox foi desenvolvido por uma médica residente em pediatria que acredita que barreiras de acesso ao conhecimento em saúde são barreiras à equidade. Este projeto é um convite: estudar, questionar, melhorar e construir juntos ferramentas que sirvam a toda a comunidade médica.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold rounded-full">Medicina baseada em evidências</span>
              <span className="px-3 py-1 bg-green-50 border border-green-200 text-green-700 text-xs font-semibold rounded-full">Código aberto</span>
              <span className="px-3 py-1 bg-violet-50 border border-violet-200 text-violet-700 text-xs font-semibold rounded-full">Livre para adaptar</span>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ── ENCERRAMENTO ─────────────────────────────────────────────── */}
      <motion.section
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-center py-20 px-4 mt-6"
      >
        <div className="max-w-2xl mx-auto">
          <div className="w-16 h-16 rounded-full bg-white/15 flex items-center justify-center mx-auto mb-6">
            <Heart className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4">
            Conhecimento livre também é cuidado.
          </h2>
          <p className="text-blue-100 text-lg leading-relaxed">
            Obrigado por fazer parte desta comunidade de aprendizado compartilhado.
          </p>
        </div>
      </motion.section>

    </div>
  );
}