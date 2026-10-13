import React, { useState } from 'react';
import { 
  Mail, 
  BookOpen, 
  Share2, 
  Zap, 
  Users, 
  Heart, 
  AlertCircle, 
  Copy, 
  ExternalLink, 
  Globe, 
  Star, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';
import { motion } from 'framer-motion';
import { services } from '@/api/services';

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

const FREEDOM_CARDS = [
  { icon: BookOpen, title: 'Estude livremente', desc: 'Explore o código, a lógica e o design sem restrições. Aprenda como foi construído.', color: 'blue' },
  { icon: Copy, title: 'Copie e adapte', desc: 'Pegue o modelo, ajuste para sua realidade local, seus protocolos e necessidades institucionais.', color: 'indigo' },
  { icon: Share2, title: 'Compartilhe', desc: 'Distribua para sua liga, hospital, rede de ensino. Sem pedidos de autorização.', color: 'cyan' },
  { icon: Zap, title: 'Crie novas versões', desc: 'Melhore o design, adicione seções, integre com suas ferramentas. A criatividade é sua.', color: 'violet' },
  { icon: Users, title: 'Melhore o conteúdo', desc: 'Encontrou um erro? Tem uma recomendação clínica melhor? Sugira melhorias para todos.', color: 'teal' },
];

const STATS = [
  { value: '47+', label: 'Calculadoras clínicas' },
  { value: '130+', label: 'Tópicos de conduta' },
  { value: '500+', label: 'Dosagens pediátricas' },
  { value: '100%', label: 'Gratuito e aberto' },
];

const COLOR_MAP = {
  blue: 'from-blue-50 to-blue-100/60 border-blue-200 text-blue-600',
  indigo: 'from-indigo-50 to-indigo-100/60 border-indigo-200 text-indigo-600',
  cyan: 'from-cyan-50 to-cyan-100/60 border-cyan-200 text-cyan-600',
  violet: 'from-violet-50 to-violet-100/60 border-violet-200 text-violet-600',
  teal: 'from-teal-50 to-teal-100/60 border-teal-200 text-teal-600',
};

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
      erro: 'Reportar erro / inconsistência clínica',
      adaptacao: 'Interesse em adaptar / usar localmente',
      colaboracao: 'Proposta de colaboração',
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
      // Fallback para cliente de e-mail local direcionado a marina@pedbox.app
      const reasonText = reasonLabels[formData.reason] || formData.reason || 'Contato PedBox';
      const subject = encodeURIComponent(`[PedBox Contato] ${reasonText} — ${formData.name}`);
      const body = encodeURIComponent(
        `Nome: ${formData.name}\nE-mail: ${formData.email}\nInstituição: ${formData.institution}\nMotivo: ${reasonText}\n\nMensagem:\n${formData.message}`
      );
      window.location.href = `mailto:marina@pedbox.app?subject=${subject}&body=${body}`;
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-white min-h-screen text-slate-800">
      {/* ── HERO / MANIFESTO ── */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white overflow-hidden rounded-3xl mx-2 sm:mx-4 mt-2 sm:mt-4 shadow-md">
        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/4 pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative max-w-5xl mx-auto px-6 py-16 sm:py-24 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-white/15 border border-white/20 rounded-full px-4 py-1.5 text-xs sm:text-sm font-semibold mb-6 backdrop-blur-sm">
            <Globe className="w-3.5 h-3.5 text-cyan-300" />
            <span>Projeto educacional aberto</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 tracking-tight">
            Conhecimento médico<br />
            deve ser{' '}
            <span className="relative inline-block">
              <span className="relative z-10">livre.</span>
              <span className="absolute bottom-1.5 left-0 right-0 h-3.5 bg-cyan-400/40 rounded-full -z-0" />
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed font-normal">
            O conhecimento deve ser como uma hidra: vivo, descentralizado e capaz de renascer em novas versões sempre que alguém o copia, adapta e melhora.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-12 max-w-3xl mx-auto">
            {STATS.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.08 }}
                className="bg-white/10 border border-white/20 rounded-2xl px-4 py-4 sm:py-5 backdrop-blur-sm"
              >
                <p className="text-2xl sm:text-3xl font-extrabold leading-none mb-1 text-white">{s.value}</p>
                <p className="text-xs sm:text-sm text-blue-200">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── PROPÓSITO ── */}
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-6 py-16 sm:py-20"
      >
        <motion.div variants={item} className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="lg:w-1/3">
            <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-4 shadow-2xs">
              <Heart className="w-7 h-7 text-blue-600" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
              O propósito do PedBox
            </h2>
          </div>
          <div className="lg:w-2/3 space-y-4 text-slate-600 leading-relaxed text-sm sm:text-base">
            <p>
              O PedBox nasceu da frustração com a <strong className="text-slate-900">fragmentação de conteúdo</strong>, o <strong className="text-slate-900">acesso restrito</strong> e a <strong className="text-slate-900">duplicação desnecessária de esforço</strong> na educação médica pediátrica.
            </p>
            <p>
              Sabemos que estudantes, residentes, preceptores e profissionais de saúde precisam de ferramentas rápidas e confiáveis à beira do leito — mas frequentemente enfrentam barreiras de paywall, plataformas fechadas ou tabelas dispersas.
            </p>
            <p>
              Decidimos construir algo diferente: um projeto educacional radicalmente livre. Não apenas disponível na web, mas genuinamente aberto para estudo, adaptação e melhoria contínua por toda a comunidade.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-2xl p-4 mt-2 shadow-2xs">
              <p className="font-bold text-blue-900 text-base sm:text-lg">
                Na saúde, democratizar conhecimento também é uma forma de cuidado.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* ── LIBERDADE / MANIFESTO CARDS ── */}
      <section className="bg-slate-50/80 py-16 sm:py-20 border-y border-slate-200/80">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto px-6"
        >
          <motion.div variants={item} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Livre para estudar, copiar, adaptar e melhorar.
            </h2>
            <p className="text-slate-500 mt-3 text-base sm:text-lg">
              Sem licenças restritivas, sem permissões, sem barreiras de acesso.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {FREEDOM_CARDS.map((card, i) => {
              const colors = COLOR_MAP[card.color];
              const IconComp = card.icon;
              return (
                <motion.div
                  key={i}
                  variants={item}
                  whileHover={{ y: -4 }}
                  className={`bg-gradient-to-br ${colors} border rounded-3xl p-6 transition-all hover:shadow-lg flex flex-col justify-between`}
                >
                  <div>
                    <div className="w-11 h-11 rounded-2xl bg-white shadow-2xs flex items-center justify-center mb-4">
                      <IconComp className={`w-5 h-5 ${colors.split(' ')[3]}`} />
                    </div>
                    <h3 className="text-base font-extrabold text-slate-900 mb-2">{card.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{card.desc}</p>
                  </div>
                </motion.div>
              );
            })}

            {/* CTA card: Copiar Modelo */}
            <motion.a
              variants={item}
              whileHover={{ y: -4 }}
              href="https://github.com/maritsilva/pedbox"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-amber-500 to-orange-600 text-white rounded-3xl p-6 text-left transition-all hover:shadow-xl hover:shadow-orange-200 group flex flex-col justify-between cursor-pointer"
            >
              <div>
                <div className="w-11 h-11 rounded-2xl bg-white/20 flex items-center justify-center mb-4">
                  <Copy className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-base font-extrabold mb-2 text-white">Copiar o modelo</h3>
                <p className="text-xs sm:text-sm text-orange-100 leading-relaxed mb-4">
                  Acesse o repositório aberto do PedBox no GitHub e crie sua própria versão personalizada.
                </p>
              </div>
              <div className="flex items-center gap-1.5 font-bold text-xs sm:text-sm pt-2">
                <span>Abrir repositório</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.a>
          </div>
        </motion.div>
      </section>

      {/* ── POR QUE IMPORTA ── */}
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-5xl mx-auto px-6 py-16 sm:py-20"
      >
        <motion.div variants={item} className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-5 leading-snug">
              Por que isso importa para a ciência e para a saúde
            </h2>
            <p className="text-slate-600 leading-relaxed mb-5 text-sm sm:text-base">
              <strong className="text-slate-900">A ciência avança quando o conhecimento é compartilhado.</strong> Barreiras artificiais não protegem a qualidade clínica; apenas a afastam de quem mais precisa atender à beira do leito.
            </p>
            <div className="space-y-3">
              {[
                { title: 'Desigualdade de acesso', desc: 'Estudantes e médicos em serviços com menos recursos não devem ficar desamparados.' },
                { title: 'Duplicação de esforço', desc: 'Cada escola, hospital e liga médica acaba reinventando a mesma calculadora ou tabela.' },
                { title: 'Conhecimento vivo e atualizado', desc: 'Melhorias, correções de dosagens e novos protocolos beneficiam a todos instantaneamente.' },
              ].map((p, i) => (
                <div key={i} className="flex gap-3 p-4 bg-emerald-50/70 border border-emerald-200/90 rounded-2xl">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-xs sm:text-sm text-slate-900">{p.title}</p>
                    <p className="text-xs text-slate-600 mt-0.5">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 border-2 border-emerald-200 rounded-3xl p-7 sm:p-8 shadow-2xs">
            <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center mb-5 shadow-2xs">
              <Star className="w-6 h-6 text-emerald-600" />
            </div>
            <blockquote className="text-lg sm:text-xl font-bold text-emerald-950 leading-snug mb-4">
              "Conteúdo livre não significa conteúdo de qualidade baixa — significa que o conhecimento é revisado, melhorado e reutilizado coletivamente."
            </blockquote>
            <p className="text-xs sm:text-sm text-emerald-700 font-semibold">— Princípio central do PedBox</p>
          </div>
        </motion.div>
      </motion.section>

      {/* ── AVISO ÉTICO ── */}
      <div className="max-w-4xl mx-auto px-6 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-amber-50/90 border border-amber-200 rounded-3xl p-6 sm:p-8 flex gap-4 shadow-2xs"
        >
          <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center shrink-0">
            <AlertCircle className="w-5 h-5 text-amber-700" />
          </div>
          <div>
            <h3 className="font-extrabold text-amber-950 text-sm sm:text-base mb-1.5">
              Responsabilidade ética e médica
            </h3>
            <p className="text-amber-900/90 text-xs sm:text-sm leading-relaxed">
              O PedBox é uma <strong>ferramenta educacional e de suporte à decisão clínica</strong>. Não substitui o julgamento profissional, as diretrizes oficiais locais, a avaliação clínica direta ou a supervisão médica. Ao utilizar, adaptar ou compartilhar este material, você assume total compromisso com sua aplicação ética, segura e responsável na prática da medicina.
            </p>
          </div>
        </motion.div>
      </div>

      {/* ── FORMULÁRIO DE CONTATO ── */}
      <section className="bg-slate-50/80 py-16 sm:py-20 border-t border-slate-200/80">
        <div className="max-w-2xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Entre em contato</h2>
            <p className="text-slate-500 mt-2 text-sm sm:text-base">
              Sugestões, correções clínicas, propostas de colaboração — adoramos ouvir você.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 bg-white px-4 py-2 rounded-2xl border border-slate-200 shadow-2xs text-xs sm:text-sm">
              <Mail className="w-4 h-4 text-blue-600" />
              <span className="text-slate-500">E-mail:</span>
              <a href="mailto:marina@pedbox.app" className="font-bold text-blue-600 hover:underline">
                marina@pedbox.app
              </a>
              <span className="text-slate-300">|</span>
              <a href="mailto:contato@pedbox.app" className="font-bold text-blue-600 hover:underline">
                contato@pedbox.app
              </a>
            </div>
          </motion.div>

          {submitted ? (
            <div className="bg-emerald-50 border-2 border-emerald-300 rounded-3xl p-8 sm:p-10 text-center animate-in fade-in zoom-in-95 duration-200">
              <div className="w-16 h-16 bg-emerald-500 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-extrabold text-emerald-950 mb-2">Mensagem enviada com sucesso!</h3>
              <p className="text-emerald-700 text-sm">
                Obrigado por apoiar a construção do PedBox. Responderemos o mais breve possível.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-3xl shadow-sm border border-slate-200/90 p-6 sm:p-10 space-y-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">Seu nome</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/70 focus:border-blue-600 focus:bg-white focus:outline-none transition-all text-xs sm:text-sm text-slate-800"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">E-mail para resposta</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/70 focus:border-blue-600 focus:bg-white focus:outline-none transition-all text-xs sm:text-sm text-slate-800"
                    placeholder="voce@exemplo.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">Instituição / Hospital / Liga</label>
                <input
                  type="text"
                  name="institution"
                  value={formData.institution}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/70 focus:border-blue-600 focus:bg-white focus:outline-none transition-all text-xs sm:text-sm text-slate-800"
                  placeholder="Ex: USP, Unicamp, Hospital Regional, Residente, Acadêmico..."
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">Motivo do contato</label>
                <select
                  name="reason"
                  value={formData.reason}
                  onChange={handleChange}
                  required
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/70 focus:border-blue-600 focus:bg-white focus:outline-none transition-all text-xs sm:text-sm text-slate-800"
                >
                  <option value="">Selecione um motivo</option>
                  <option value="sugestao">Sugestão de melhoria ou nova conduta clínica</option>
                  <option value="erro">Reportar erro / inconsistência em cálculo ou dose</option>
                  <option value="adaptacao">Interesse em adaptar / usar localmente no serviço</option>
                  <option value="colaboracao">Proposta de colaboração acadêmica ou técnica</option>
                  <option value="outro">Outro assunto</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">Mensagem</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/70 focus:border-blue-600 focus:bg-white focus:outline-none transition-all resize-none text-xs sm:text-sm text-slate-800 leading-relaxed"
                  placeholder="Descreva detalhes da sua sugestão, dúvida ou mensagem..."
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-3.5 rounded-2xl shadow-md transition-all hover:scale-[1.01] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-xs sm:text-sm cursor-pointer"
              >
                {submitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                    <span>Enviando mensagem...</span>
                  </>
                ) : (
                  <>
                    <Mail className="w-4 h-4" />
                    <span>Enviar mensagem</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* ── SOBRE A DESENVOLVEDORA ── */}
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-6 py-16"
      >
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-100 rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row gap-6 items-start shadow-2xs">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shrink-0 shadow-md">
            <Heart className="w-8 h-8 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-extrabold text-slate-900 mb-3">Sobre a desenvolvedora</h3>
            <p className="text-slate-600 leading-relaxed mb-3 text-sm sm:text-base">
              O PedBox foi desenvolvido por uma médica residente em pediatria que acredita que barreiras de acesso ao conhecimento em saúde são barreiras à equidade. Este projeto é um convite aberto: estudar, questionar, melhorar e construir juntos ferramentas que sirvam com excelência a toda a comunidade médica.
            </p>
            <p className="text-xs sm:text-sm font-semibold text-blue-700 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Licença livre para estudo, cópia, adaptação e melhoria contínua.</span>
            </p>
          </div>
        </div>
      </motion.section>

      {/* ── ENCERRAMENTO / CALL TO ACTION ── */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white text-center py-16 sm:py-20 px-6 rounded-3xl mx-2 sm:mx-4 mb-6 shadow-lg">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
            <Heart className="w-8 h-8 text-cyan-300" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-4 tracking-tight">
            Conhecimento livre também é cuidado.
          </h2>
          <p className="text-blue-100 text-base sm:text-lg mb-8 leading-relaxed">
            Obrigado por fazer parte desta comunidade de aprendizado compartilhado.
          </p>
          <a
            href="https://github.com/maritsilva/pedbox"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-blue-700 font-bold px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl hover:shadow-xl transition-all hover:scale-105 cursor-pointer text-xs sm:text-sm"
          >
            <Copy className="w-4 h-4" />
            <span>Copiar modelo do PedBox</span>
            <ExternalLink className="w-3.5 h-3.5 ml-1 text-blue-500" />
          </a>
        </motion.div>
      </section>
    </div>
  );
}
