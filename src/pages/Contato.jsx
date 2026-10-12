import React, { useState } from 'react';
import { Mail, BookOpen, ShieldCheck, AlertCircle, Sparkles, MessageSquare, CheckCircle2, Send, Building2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { services } from '@/api/services';

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const item = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } };

const PILARES = [
  {
    icon: ShieldCheck,
    title: 'Rigor Científico',
    desc: 'Conteúdos e ferramentas baseados em diretrizes oficiais da SBP, Ministério da Saúde, AAP e Organização Mundial da Saúde.',
    color: 'border-blue-200 bg-blue-50/50 text-blue-600',
  },
  {
    icon: Sparkles,
    title: 'Apoio à Decisão no Plantão',
    desc: 'Fluxos projetados para respostas rápidas, checagens automáticas de limites de dosagens e apoio à prescrição segura.',
    color: 'border-emerald-200 bg-emerald-50/50 text-emerald-600',
  },
  {
    icon: BookOpen,
    title: 'Aprimoramento Contínuo',
    desc: 'Revisão constante de condutas, notas técnicas e calculadoras clínicas para manter a prática médica sempre atualizada.',
    color: 'border-indigo-200 bg-indigo-50/50 text-indigo-600',
  },
];

const STATS = [
  { value: '47+', label: 'Calculadoras clínicas' },
  { value: '130+', label: 'Diretrizes e condutas' },
  { value: '500+', label: 'Doses pediátricas' },
  { value: '100%', label: 'Gratuito e sem anúncios' },
];

export default function Contato() {
  const [formData, setFormData] = useState({ name: '', email: '', institution: '', reason: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    const reasonLabels = {
      sugestao: 'Sugestão de melhoria ou nova conduta',
      erro: 'Reportar inconsistência de cálculo ou dosagem',
      institucional: 'Contato institucional / acadêmico',
      duvida: 'Dúvidas sobre ferramentas da plataforma',
      outro: 'Outro assunto',
    };
    try {
      await services.contact.send(formData);
      setSubmitted(true);
      setTimeout(() => {
        setFormData({ name: '', email: '', institution: '', reason: '', message: '' });
        setSubmitted(false);
      }, 5000);
    } catch {
      // Fallback para cliente de e-mail local direcionado à contato@pedbox.app
      const reasonText = reasonLabels[formData.reason] || formData.reason || 'Contato PedBox';
      const subject = encodeURIComponent(`[PedBox Contato] ${reasonText} — ${formData.name}`);
      const body = encodeURIComponent(
        `Nome: ${formData.name}\nE-mail: ${formData.email}\nInstituição: ${formData.institution}\nMotivo: ${reasonText}\n\nMensagem:\n${formData.message}`
      );
      window.location.href = `mailto:contato@pedbox.app?subject=${subject}&body=${body}`;
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-slate-50/60 min-h-screen pb-16">
      {/* ── HERO BANNER ── */}
      <section className="score-banner max-w-5xl mx-auto mt-4 sm:mt-6 overflow-hidden relative rounded-3xl">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/4 pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative max-w-4xl mx-auto px-4 py-8 sm:py-12 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-white/15 border border-white/20 rounded-full px-4 py-1.5 text-xs font-semibold mb-4 backdrop-blur-sm text-white">
            <MessageSquare className="w-3.5 h-3.5" />
            Canal de Atendimento e Comunicação
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight text-white mb-4">
            Fale com a equipe do PedBox
          </h1>
          <p className="text-base sm:text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Envie suas dúvidas, sugestões de novos temas ou reporte inconsistências clínicas.
            Nosso compromisso é com o rigor científico e a segurança do atendimento infantil.
          </p>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8 max-w-3xl mx-auto">
            {STATS.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.06 }}
                className="bg-white/10 border border-white/20 rounded-2xl p-3 sm:p-4 backdrop-blur-sm"
              >
                <p className="text-2xl sm:text-3xl font-extrabold text-white leading-none mb-1">{s.value}</p>
                <p className="text-xs text-blue-200">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── PILARES CLÍNICOS ── */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pt-10">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {PILARES.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={i}
                variants={item}
                className={`border rounded-2xl p-5 bg-white shadow-2xs transition-all hover:shadow-md`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${p.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-800 mb-1.5">{p.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{p.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* ── FORMULÁRIO E CANAIS ── */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Coluna Lateral: Informações e Suporte */}
          <div className="space-y-4">
            <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-2xs">
              <div className="w-10 h-10 bg-blue-100 text-blue-700 rounded-xl flex items-center justify-center mb-4">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-800 mb-1">E-mail Oficial</h3>
              <p className="text-xs text-slate-500 mb-3">
                Para assuntos institucionais, parcerias acadêmicas ou feedback direto:
              </p>
              <a
                href="mailto:contato@pedbox.app"
                className="text-sm font-bold text-blue-600 hover:text-blue-700 hover:underline break-all"
              >
                contato@pedbox.app
              </a>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-2xs">
              <div className="w-10 h-10 bg-emerald-100 text-emerald-700 rounded-xl flex items-center justify-center mb-4">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-800 mb-1">Uso Institucional</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Hospitais, serviços de residência médica e ligas de pediatria podem utilizar a plataforma
                gratuitamente para apoio diário e atividades acadêmicas.
              </p>
            </div>

            <div className="bg-amber-50/80 border border-amber-200 rounded-3xl p-5 flex gap-3 text-xs leading-relaxed text-amber-900">
              <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold mb-1">Aviso de Responsabilidade Médica</p>
                <p className="text-amber-800">
                  O PedBox é uma ferramenta de apoio à tomada de decisão clínica. O julgamento clínico
                  individual, a anamnese detalhada e a supervisão profissional prevalecem em qualquer situação.
                </p>
              </div>
            </div>
          </div>

          {/* Coluna Principal: Formulário */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm">
              <div className="mb-6">
                <h2 className="text-xl font-bold text-slate-900">Envie uma mensagem</h2>
                <p className="text-xs text-slate-500 mt-1">
                  Preencha os campos abaixo. Retornaremos o mais breve possível.
                </p>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center"
                >
                  <div className="w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-md">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-emerald-900 mb-1">Mensagem enviada com sucesso!</h3>
                  <p className="text-xs text-emerald-700">
                    Agradecemos seu contato. Sua contribuição é fundamental para o aprimoramento contínuo da plataforma.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Seu nome <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 focus:outline-none transition-all text-xs"
                        placeholder="Nome completo"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        E-mail de contato <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 focus:outline-none transition-all text-xs"
                        placeholder="seuemail@exemplo.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Instituição / Serviço Hospitalar
                      </label>
                      <input
                        type="text"
                        name="institution"
                        value={formData.institution}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 focus:outline-none transition-all text-xs"
                        placeholder="Ex: Hospital das Clínicas, Santa Casa, UBS"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Motivo do contato <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="reason"
                        value={formData.reason}
                        onChange={handleChange}
                        required
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 focus:outline-none transition-all text-xs text-slate-800"
                      >
                        <option value="">Selecione o motivo...</option>
                        <option value="sugestao">Sugestão de conduta ou nova calculadora</option>
                        <option value="erro">Reportar inconsistência clínica ou cálculo</option>
                        <option value="institucional">Contato institucional ou acadêmico</option>
                        <option value="duvida">Dúvida sobre uso da plataforma</option>
                        <option value="outro">Outro assunto</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Mensagem <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 focus:outline-none transition-all resize-none text-xs"
                      placeholder="Descreva em detalhes sua sugestão, dúvida ou observação clínica..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold py-3.5 rounded-xl hover:shadow-md transition-all hover:scale-[1.005] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-xs"
                  >
                    {submitting ? (
                      <>
                        <div className="w-3.5 h-3.5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                        <span>Enviando mensagem...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Enviar Mensagem</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}