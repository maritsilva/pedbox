import React, { useState } from 'react';
import { Mail, BookOpen, Share2, Zap, Users, Heart, AlertCircle, Copy, ExternalLink, Globe, Star, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { base44 } from '@/api/base44Client';

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

const FREEDOM_CARDS = [
  { icon: BookOpen,  title: 'Estude livremente',  desc: 'Explore o código, a lógica e o design sem restrições. Aprenda como foi construído.', color: 'blue' },
  { icon: Copy,      title: 'Copie e adapte',     desc: 'Pegue o modelo, ajuste para sua realidade local, seus protocolos e necessidades institucionais.', color: 'indigo' },
  { icon: Share2,    title: 'Compartilhe',         desc: 'Distribua para sua liga, hospital, rede de ensino. Sem pedidos de autorização.', color: 'cyan' },
  { icon: Zap,       title: 'Crie novas versões',  desc: 'Melhore o design, adicione seções, integre com suas ferramentas. A criatividade é sua.', color: 'violet' },
  { icon: Users,     title: 'Melhore o conteúdo', desc: 'Encontrou um erro? Tem uma recomendação clínica melhor? Sugira melhorias para todos.', color: 'teal' },
];

const STATS = [
  { value: '10+', label: 'Protocolos clínicos' },
  { value: '200+', label: 'Tópicos de conduta' },
  { value: '500+', label: 'Dosagens pediátricas' },
  { value: '100%', label: 'Gratuito e livre' },
];

const COLOR_MAP = {
  blue:   'from-blue-50 to-blue-100/50 border-blue-200 text-blue-600',
  indigo: 'from-indigo-50 to-indigo-100/50 border-indigo-200 text-indigo-600',
  cyan:   'from-cyan-50 to-cyan-100/50 border-cyan-200 text-cyan-600',
  violet: 'from-violet-50 to-violet-100/50 border-violet-200 text-violet-600',
  teal:   'from-teal-50 to-teal-100/50 border-teal-200 text-teal-600',
};

export default function Contato() {
  const [formData, setFormData] = useState({ name: '', email: '', institution: '', reason: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
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
    setSubmitting(false);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', institution: '', reason: '', message: '' });
      setSubmitted(false);
    }, 4000);
  };

  return (
    <div className="bg-white min-h-screen">

      {/* ── HERO ── */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/4 pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative max-w-5xl mx-auto px-6 py-24 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-white/15 border border-white/20 rounded-full px-4 py-1.5 text-sm font-semibold mb-6 backdrop-blur-sm">
            <Globe className="w-3.5 h-3.5" />
            Projeto educacional aberto
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
            Conhecimento médico<br />
            deve ser{' '}
            <span className="relative inline-block">
              <span className="relative z-10">livre.</span>
              <span className="absolute bottom-1 left-0 right-0 h-3 bg-cyan-400/40 rounded-full -z-0" />
            </span>
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
            PedBox é um projeto educacional construído com a convicção de que barreiras de acesso ao conhecimento em saúde reforçam desigualdades.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-14 max-w-3xl mx-auto">
            {STATS.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.08 }}
                className="bg-white/10 border border-white/20 rounded-2xl px-4 py-5 backdrop-blur-sm"
              >
                <p className="text-3xl font-extrabold leading-none mb-1">{s.value}</p>
                <p className="text-sm text-blue-200">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── PROPÓSITO ── */}
      <motion.section
        variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}
        className="max-w-4xl mx-auto px-6 py-20"
      >
        <motion.div variants={item} className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="lg:w-1/3">
            <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-4">
              <Heart className="w-7 h-7 text-blue-600" />
            </div>
            <h2 className="text-3xl font-extrabold text-foreground leading-tight">O propósito do PedBox</h2>
          </div>
          <div className="lg:w-2/3 space-y-4 text-muted-foreground leading-relaxed text-base">
            <p>
              O PedBox nasceu da frustração com <strong className="text-foreground">fragmentação de conteúdo</strong>, <strong className="text-foreground">acesso restrito</strong> e <strong className="text-foreground">duplicação desnecessária de esforço</strong> na educação médica.
            </p>
            <p>
              Sabemos que estudantes, residentes, professores e profissionais de saúde precisam de ferramentas rápidas e confiáveis — mas muitas vezes enfrentam custos proibitivos, plataformas fechadas ou conhecimento disperso.
            </p>
            <p>
              Decidimos construir algo diferente: um projeto educacional <strong className="text-foreground">radicalmente livre</strong>. Não apenas disponível, mas genuinamente aberto para estudo, adaptação e melhoria contínua.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-2xl p-4 mt-2">
              <p className="font-bold text-blue-800 text-lg">Na saúde, democratizar conhecimento também é uma forma de cuidado.</p>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* ── LIBERDADE ── */}
      <section className="bg-slate-50 py-20">
        <motion.div
          variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="max-w-6xl mx-auto px-6"
        >
          <motion.div variants={item} className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-foreground">Livre para estudar, copiar, adaptar e melhorar.</h2>
            <p className="text-muted-foreground mt-3 text-lg">Sem licenças, sem permissões, sem barreiras.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {FREEDOM_CARDS.map((card, i) => {
              const colors = COLOR_MAP[card.color];
              return (
                <motion.div
                  key={i}
                  variants={item}
                  whileHover={{ y: -4 }}
                  className={`bg-gradient-to-br ${colors} border rounded-3xl p-6 transition-all hover:shadow-lg`}
                >
                  <div className={`w-11 h-11 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-4`}>
                    <card.icon className={`w-5 h-5 ${colors.split(' ')[3]}`} />
                  </div>
                  <h3 className="text-base font-extrabold text-foreground mb-2">{card.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
                </motion.div>
              );
            })}

            {/* CTA card */}
            <motion.button
              variants={item}
              whileHover={{ y: -4 }}
              onClick={() => window.open('https://github.com/maritsilva/pedbox', '_blank')}
              className="bg-gradient-to-br from-orange-400 to-amber-500 text-white rounded-3xl p-6 text-left transition-all hover:shadow-xl hover:shadow-orange-200 group"
            >
              <div className="w-11 h-11 rounded-2xl bg-white/20 flex items-center justify-center mb-4">
                <Copy className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-base font-extrabold mb-2">Copiar o modelo</h3>
              <p className="text-sm text-orange-100 leading-relaxed mb-4">Acesse o template completo do PedBox e crie sua versão.</p>
              <div className="flex items-center gap-1.5 font-bold text-sm">
                Abrir template <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* ── POR QUE IMPORTA ── */}
      <motion.section
        variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}
        className="max-w-5xl mx-auto px-6 py-20"
      >
        <motion.div variants={item} className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-foreground mb-5 leading-snug">Por que isso importa para a ciência e para a saúde</h2>
            <p className="text-muted-foreground leading-relaxed mb-5">
              <strong className="text-foreground">A ciência avança quando o conhecimento é compartilhado.</strong> Barreiras não protegem a qualidade; apenas a preservam longe de quem mais precisa.
            </p>
            <div className="space-y-3">
              {[
                { title: 'Desigualdade de acesso', desc: 'Estudantes em instituições menos favorecidas ficam para trás.' },
                { title: 'Duplicação de esforço', desc: 'Cada escola, hospital e liga reinventa a roda desnecessariamente.' },
                { title: 'Conhecimento estagnado', desc: 'Melhorias em um lugar não beneficiam os demais.' },
              ].map((p, i) => (
                <div key={i} className="flex gap-3 p-4 bg-green-50 border border-green-200 rounded-2xl">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-sm text-foreground">{p.title}</p>
                    <p className="text-sm text-muted-foreground mt-0.5">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-3xl p-8">
            <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center mb-5">
              <Star className="w-6 h-6 text-green-600" />
            </div>
            <blockquote className="text-xl font-bold text-green-900 leading-snug mb-4">
              "Conteúdo livre não significa conteúdo de qualidade baixa — significa que o conhecimento é revisado, melhorado e reutilizado coletivamente."
            </blockquote>
            <p className="text-sm text-green-700">Princípio central do PedBox</p>
          </div>
        </motion.div>
      </motion.section>

      {/* ── AVISO ÉTICO ── */}
      <div className="max-w-4xl mx-auto px-6 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="bg-amber-50 border border-amber-200 rounded-3xl p-6 sm:p-8 flex gap-4"
        >
          <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
            <AlertCircle className="w-5 h-5 text-amber-600" />
          </div>
          <div>
            <h3 className="font-extrabold text-amber-900 text-base mb-2">Responsabilidade ética</h3>
            <p className="text-amber-800 text-sm leading-relaxed">
              O PedBox é uma <strong>ferramenta educacional</strong>. Não substitui diretrizes oficiais, protocolos locais, avaliação clínica direta ou supervisão profissional. Recomendações clínicas devem sempre ser validadas com protocolos institucionais e orientação de especialistas. Ao usar, adaptar ou compartilhar este conteúdo, você assume responsabilidade por sua aplicação ética e profissional.
            </p>
          </div>
        </motion.div>
      </div>

      {/* ── FORMULÁRIO ── */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-2xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-extrabold text-foreground">Entre em contato</h2>
            <p className="text-muted-foreground mt-2">Sugestões, correções, colaborações — adoramos ouvir você.</p>
          </motion.div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-green-50 border-2 border-green-300 rounded-3xl p-10 text-center"
            >
              <div className="w-16 h-16 bg-green-500 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-extrabold text-green-900 mb-2">Mensagem enviada!</h3>
              <p className="text-green-700">Obrigado por entrar em contato. Responderemos em breve.</p>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="bg-white rounded-3xl shadow-lg border border-border p-8 sm:p-10 space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-1.5">Seu nome</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required
                    className="w-full px-4 py-3 rounded-xl border border-border bg-slate-50 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all text-sm"
                    placeholder="João Silva"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-1.5">E-mail</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required
                    className="w-full px-4 py-3 rounded-xl border border-border bg-slate-50 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all text-sm"
                    placeholder="joao@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-1.5">Instituição / Área</label>
                <input type="text" name="institution" value={formData.institution} onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-slate-50 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all text-sm"
                  placeholder="Ex: USP, Hospital X, Liga de Pediatria, Desenvolvedor"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-1.5">Motivo do contato</label>
                <select name="reason" value={formData.reason} onChange={handleChange} required
                  className="w-full px-4 py-3 rounded-xl border border-border bg-slate-50 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all text-sm text-foreground"
                >
                  <option value="">Selecione um motivo</option>
                  <option value="sugestao">Sugestão de melhoria</option>
                  <option value="erro">Reportar erro / conteúdo inadequado</option>
                  <option value="adaptacao">Interesse em adaptar / usar localmente</option>
                  <option value="colaboracao">Proposta de colaboração</option>
                  <option value="outro">Outro</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-1.5">Mensagem</label>
                <textarea name="message" value={formData.message} onChange={handleChange} required rows="5"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-slate-50 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all resize-none text-sm"
                  placeholder="Conte-nos mais..."
                />
              </div>

              <button type="submit" disabled={submitting}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold py-4 rounded-2xl hover:shadow-xl hover:shadow-blue-200 transition-all hover:scale-[1.01] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {submitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Mail className="w-5 h-5" />
                    Enviar mensagem
                  </>
                )}
              </button>
            </motion.form>
          )}
        </div>
      </section>

      {/* ── SOBRE A DESENVOLVEDORA ── */}
      <motion.section
        initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="max-w-4xl mx-auto px-6 py-16"
      >
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-100 rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row gap-6 items-start">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
            <Heart className="w-8 h-8 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-extrabold text-foreground mb-3">Sobre a desenvolvedora</h3>
            <p className="text-muted-foreground leading-relaxed mb-3">
              O PedBox foi desenvolvido por uma médica residente em pediatria que acredita que barreiras de acesso ao conhecimento em saúde são barreiras à equidade. Este projeto é um convite: estudar, questionar, melhorar e construir juntos ferramentas que sirvam a toda a comunidade médica.
            </p>
            <p className="text-sm font-semibold text-blue-700 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" />
              Licença livre para estudo, cópia, adaptação e melhoria.
            </p>
          </div>
        </div>
      </motion.section>

      {/* ── ENCERRAMENTO ── */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-800 text-white text-center py-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Heart className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4">
            Conhecimento livre também é cuidado.
          </h2>
          <p className="text-blue-200 text-lg mb-8 leading-relaxed">
            Obrigado por fazer parte desta comunidade de aprendizado compartilhado.
          </p>
          <button
            onClick={() => window.open('https://github.com/maritsilva/pedbox', '_blank')}
            className="inline-flex items-center gap-2 bg-white text-blue-700 font-bold px-8 py-4 rounded-2xl hover:shadow-xl transition-all hover:scale-105"
          >
            <Copy className="w-5 h-5" />
            Copiar modelo do PedBox
            <ExternalLink className="w-4 h-4" />
          </button>
        </motion.div>
      </section>
    </div>
  );
}