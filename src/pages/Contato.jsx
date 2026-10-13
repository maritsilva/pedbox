import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Mail,
  BookOpen,
  Share2,
  Heart,
  AlertCircle,
  Copy,
  ExternalLink,
  Globe,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Check,
  Sparkles,
} from 'lucide-react';
import { toast } from 'sonner';
import { services } from '@/api/services';

const PILARES_LIBERDADE = [
  {
    icon: BookOpen,
    title: 'Estudo com Transparência',
    desc: 'Lógica clínica explícita, fórmulas matemáticas auditáveis e referências oficiais da SBP, Ministério da Saúde e OMS.',
    tag: 'Ciência Aberta',
  },
  {
    icon: Copy,
    title: 'Adaptação à Realidade Local',
    desc: 'Flexibilidade conceitual para que cada hospital, serviço de emergência ou liga acadêmica personalize condutas para seus recursos.',
    tag: 'Personalização',
  },
  {
    icon: Share2,
    title: 'Acesso sem Barreiras',
    desc: 'Ferramenta integralmente livre de assinaturas ou paywalls no momento crítico em que o pediatra está à beira do leito.',
    tag: 'Democratização',
  },
  {
    icon: Sparkles,
    title: 'Evolução Contínua Coletiva',
    desc: 'Aprimoramento constante impulsionado por quem vive a assistência real nas enfermarias, UTIs e ambulatórios.',
    tag: 'Comunidade Viva',
  },
];

const STATS = [
  { value: '47+', label: 'Calculadoras clínicas' },
  { value: '130+', label: 'Tópicos de conduta' },
  { value: '500+', label: 'Dosagens pediátricas' },
  { value: '100%', label: 'Gratuito e aberto' },
];

export default function Contato() {
  const [formData, setFormData] = useState({ name: '', email: '', institution: '', reason: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('contato@pedbox.app');
    setCopiedEmail(true);
    toast.success('E-mail contato@pedbox.app copiado!');
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    const reasonLabels = {
      sugestao: 'Sugestão de melhoria ou nova conduta',
      erro: 'Reportar erro ou inconsistência clínica',
      adaptacao: 'Interesse em adaptar ou usar localmente',
      colaboracao: 'Proposta de colaboração acadêmica/técnica',
      outro: 'Outro assunto',
    };

    try {
      await services.contact.send(formData);
      setSubmitted(true);
      toast.success('Mensagem enviada com sucesso!');
      setTimeout(() => {
        setFormData({ name: '', email: '', institution: '', reason: '', message: '' });
        setSubmitted(false);
      }, 5000);
    } catch {
      // Fallback seguro via mailto direcionado exclusivamente ao email oficial
      const reasonText = reasonLabels[formData.reason] || formData.reason || 'Contato PedBox';
      const subject = encodeURIComponent(`[PedBox Contato] ${reasonText} — ${formData.name}`);
      const body = encodeURIComponent(
        `Nome: ${formData.name}\nE-mail: ${formData.email}\nInstituição: ${formData.institution}\nMotivo: ${reasonText}\n\nMensagem:\n${formData.message}`
      );
      window.location.href = `mailto:contato@pedbox.app?subject=${subject}&body=${body}`;
      setSubmitted(true);
      toast.info('Abrindo seu aplicativo de e-mail para envio...');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="clinical-page max-w-5xl mx-auto space-y-8 pb-16">
      {/* ── HERO BANNER: MANIFESTO PEDBOX ── */}
      <section className="relative rounded-3xl bg-gradient-to-br from-[#164B73] via-[#1E3A5F] to-[#0D2840] text-white p-6 sm:p-10 shadow-sm border border-slate-800/20 overflow-hidden">
        {/* Elementos visuais sutis de fundo */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-teal/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-sky-500/10 rounded-full blur-2xl pointer-events-none translate-y-1/2 -translate-x-1/3" />

        <div className="relative max-w-4xl mx-auto text-center space-y-5">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-3.5 py-1.5 text-xs font-semibold backdrop-blur-xs text-teal-300">
            <Globe className="w-3.5 h-3.5 text-brand-teal" />
            <span>Manifesto do Conhecimento Pediátrico Aberto</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight leading-tight text-white">
            Conhecimento médico deve ser{' '}
            <span className="relative inline-block text-cyan-300">
              livre.
              <span className="absolute bottom-1 left-0 right-0 h-2 bg-brand-teal/30 rounded-full -z-0" />
            </span>
          </h1>

          <p className="text-sm sm:text-base text-slate-200 max-w-2xl mx-auto leading-relaxed">
            O conhecimento na saúde precisa ser vivo, descentralizado e compartilhado. Quando uma conduta é compreendida, adaptada e aprimorada coletivamente, toda a assistência à criança evolui.
          </p>

          {/* Cards de Métricas */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-4 max-w-3xl mx-auto">
            {STATS.map((s, i) => (
              <div
                key={i}
                className="bg-white/10 border border-white/15 rounded-2xl p-3.5 sm:p-4 backdrop-blur-xs text-center"
              >
                <p className="text-2xl sm:text-3xl font-display font-extrabold text-white leading-none mb-1">
                  {s.value}
                </p>
                <p className="text-[11px] sm:text-xs text-slate-300 font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROPÓSITO DO PROJETO ── */}
      <section className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-2xs space-y-6">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
          <div className="md:w-1/3 space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-teal-200/80 text-brand-teal flex items-center justify-center">
              <Heart className="w-6 h-6 fill-current" />
            </div>
            <h2 className="text-xl sm:text-2xl font-display font-extrabold text-brand-navy leading-snug">
              O Propósito do PedBox
            </h2>
            <p className="text-xs text-slate-500">
              Democratizar a prática médica com rigor metodológico e usabilidade imediata.
            </p>
          </div>

          <div className="md:w-2/3 space-y-3.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
            <p>
              O PedBox nasceu da vivência das dificuldades da formação pediátrica: <strong className="text-slate-900">fragmentação de diretrizes</strong>, <strong className="text-slate-900">calculadoras protegidas por assinaturas</strong> e a constante necessidade de refazer tabelas e anotações à mão durante plantões exaustivos.
            </p>
            <p>
              Estudantes, residentes e médicos precisam de agilidade e confiabilidade na cabeceira do paciente. O PedBox propõe um modelo diferente: uma plataforma clínica aberta, focada na segurança do cálculo de doses e na consulta rápida de condutas pediátricas.
            </p>
            <div className="border-l-3 border-brand-teal bg-teal-50/60 p-3.5 sm:p-4 rounded-r-2xl">
              <p className="text-xs sm:text-sm font-bold text-brand-navy">
                "Na pediatria, democratizar conhecimento com rigor e rapidez à beira do leito também é uma forma de cuidado."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PILARES DE LIBERDADE E COLABORAÇÃO ── */}
      <section className="space-y-4">
        <div className="text-center max-w-2xl mx-auto space-y-1">
          <h2 className="text-xl sm:text-2xl font-display font-extrabold text-brand-navy tracking-tight">
            Pilares do Projeto Aberto
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            Construído para apoiar profissionais e instituições sem restrições desnecessárias.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {PILARES_LIBERDADE.map((pilar, idx) => {
            const IconComponent = pilar.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between space-y-3"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 text-brand-navy flex items-center justify-center">
                    <IconComponent className="w-5 h-5 text-brand-teal" />
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-brand-teal block mb-1">
                      {pilar.tag}
                    </span>
                    <h3 className="text-sm font-bold text-slate-900 leading-snug">
                      {pilar.title}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {pilar.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Card CTA do Repositório GitHub Aberto */}
        <div className="bg-gradient-to-r from-slate-900 to-[#164B73] rounded-2xl p-5 sm:p-6 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xs">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 text-xs text-teal-300 font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Código e Dados Auditáveis</span>
            </div>
            <h3 className="text-base sm:text-lg font-bold text-white">
              Conheça o Repositório do PedBox no GitHub
            </h3>
            <p className="text-xs text-slate-300 max-w-xl">
              Acompanhe as atualizações de condutas, reporte inconsistências e sugira novas calculadoras para a comunidade médica.
            </p>
          </div>

          <a
            href="https://github.com/maritsilva/pedbox"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-brand-navy hover:bg-slate-100 px-4 py-2.5 rounded-xl font-bold text-xs shadow-2xs transition-all shrink-0 cursor-pointer self-start sm:self-auto"
          >
            <span>Ver no GitHub</span>
            <ExternalLink className="w-3.5 h-3.5 text-brand-teal" />
          </a>
        </div>
      </section>

      {/* ── CIÊNCIA ABERTA & SEGURANÇA CLÍNICA ── */}
      <section className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-2xs">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-display font-extrabold text-brand-navy leading-snug">
              Por que a Abertura Importa para a Prática Pediátrica
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Barreiras de acesso ao conhecimento clínico aprofundam disparidades regionais. A ciência médica se fortalece quando diretrizes e cálculos são verificados e compartilhados de forma transparente.
            </p>
            <div className="space-y-2.5">
              {[
                {
                  title: 'Equidade assistencial',
                  desc: 'Profissionais de saúde em qualquer região têm acesso à mesma ferramenta rápida e atualizada.',
                },
                {
                  title: 'Redução de erros de prescrição',
                  desc: 'Checagem automática de limites de dose e faixas etárias para aumentar a segurança do paciente.',
                },
                {
                  title: 'Conhecimento continuamente revisado',
                  desc: 'Notas técnicas e protocolos aprimorados com o retorno dos profissionais que atuam na linha de frente.',
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200/80"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold text-slate-900">{item.title}</p>
                    <p className="text-[11px] text-slate-500 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-teal-50/70 to-sky-50/70 border border-teal-200/80 rounded-2xl p-6 space-y-4 shadow-2xs">
            <div className="w-10 h-10 rounded-xl bg-teal-100 text-brand-teal flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <blockquote className="text-sm sm:text-base font-bold text-slate-800 leading-snug">
              "Conteúdo aberto não significa menor rigor — significa que cada calculadora, dose e conduta pode ser auditada, corrigida e aperfeiçoada continuamente por quem vive a assistência médica."
            </blockquote>
            <p className="text-xs font-semibold text-brand-teal">
              — Princípio Editorial do PedBox
            </p>
          </div>
        </div>
      </section>

      {/* ── RESPONSABILIDADE ÉTICA ── */}
      <section className="bg-amber-50/80 border border-amber-200 rounded-2xl p-5 flex items-start gap-3.5 shadow-2xs">
        <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
          <AlertCircle className="w-5 h-5" />
        </div>
        <div className="space-y-1">
          <h3 className="text-xs sm:text-sm font-bold text-amber-950">
            Responsabilidade Ética e Apoio à Decisão Clínica
          </h3>
          <p className="text-xs text-amber-900/90 leading-relaxed">
            O PedBox é uma plataforma de consulta médica e suporte à decisão clínica baseada em evidências. Ele não substitui a anamnese, o exame físico detalhado, a supervisão presencial e a soberania do julgamento médico na tomada de conduta individual para cada criança.
          </p>
        </div>
      </section>

      {/* ── SOBRE A DESENVOLVEDORA / IDEALIZADORA ── */}
      <section className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-2xs space-y-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
            <Heart className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-display font-extrabold text-brand-navy">
              Sobre a Idealização do PedBox
            </h3>
            <p className="text-xs text-slate-500">
              Desenvolvido por médica residente em pediatria para colegas da assistência
            </p>
          </div>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
          O PedBox foi concebido e programado por uma médica residente em pediatria que acredita que ferramentas clínicas de ponta devem estar ao alcance de todo médico, residente e estudante de medicina. Este espaço é um convite contínuo à colaboração de pediatras de todo o país para mantermos condutas claras, objetivas e acessíveis.
        </p>
      </section>

      {/* ── FORMULÁRIO DE CONTATO OFICIAL ── */}
      <section className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-2xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
          <div>
            <h2 className="text-xl sm:text-2xl font-display font-extrabold text-brand-navy">
              Entre em Contato
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              Sugestões de temas, correções clínicas ou propostas de colaboração.
            </p>
          </div>

          {/* Badge E-mail Oficial com Botão de Cópia */}
          <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 px-3.5 py-2 rounded-xl text-xs self-start sm:self-auto">
            <Mail className="w-4 h-4 text-brand-teal" />
            <a
              href="mailto:contato@pedbox.app"
              className="font-bold text-brand-navy hover:text-brand-teal transition-colors"
            >
              contato@pedbox.app
            </a>
            <button
              type="button"
              onClick={handleCopyEmail}
              className="p-1 text-slate-400 hover:text-brand-teal transition-colors cursor-pointer"
              title="Copiar e-mail"
            >
              {copiedEmail ? (
                <Check className="w-3.5 h-3.5 text-emerald-600" />
              ) : (
                <Copy className="w-3.5 h-3.5" />
              )}
            </button>
          </div>
        </div>

        {submitted ? (
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center space-y-2">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-xl flex items-center justify-center mx-auto">
              <Check className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-emerald-950">Mensagem enviada com sucesso!</h3>
            <p className="text-xs text-emerald-700">
              Agradecemos seu contato e sua colaboração para o aprimoramento do PedBox.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Seu Nome
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Nome completo"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-brand-teal focus:bg-white transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Seu E-mail
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="email@exemplo.com"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-brand-teal focus:bg-white transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Instituição / Hospital / Serviço
              </label>
              <input
                type="text"
                name="institution"
                value={formData.institution}
                onChange={handleChange}
                placeholder="Ex: USP, Unicamp, Hospital Regional, Residente, Liga Acadêmica..."
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-brand-teal focus:bg-white transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Motivo do Contato
              </label>
              <select
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                required
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-brand-teal focus:bg-white transition-all"
              >
                <option value="">Selecione um assunto</option>
                <option value="sugestao">Sugestão de nova calculadora ou conduta</option>
                <option value="erro">Reportar inconsistência de dose ou cálculo</option>
                <option value="adaptacao">Uso ou adaptação em serviço/hospital local</option>
                <option value="colaboracao">Colaboração acadêmica ou técnica</option>
                <option value="outro">Outro assunto</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Mensagem
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                placeholder="Detalhes da sua observação, referência bibliográfica ou mensagem..."
                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3.5 text-xs text-slate-800 focus:outline-none focus:border-brand-teal focus:bg-white transition-all resize-none leading-relaxed"
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full sm:w-auto px-6 py-2.5 bg-brand-navy hover:bg-slate-800 text-white font-bold text-xs rounded-xl shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {submitting ? (
                <>
                  <div className="w-3.5 h-3.5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                  <span>Enviando...</span>
                </>
              ) : (
                <>
                  <Mail className="w-3.5 h-3.5 text-brand-teal" />
                  <span>Enviar Mensagem</span>
                </>
              )}
            </button>
          </form>
        )}
      </section>

      {/* ── ENCERRAMENTO COLETIVO ── */}
      <section className="rounded-3xl bg-slate-100/90 border border-slate-200/90 p-6 text-center space-y-3">
        <h3 className="text-base font-bold text-brand-navy">
          Conhecimento livre também é uma forma de cuidado.
        </h3>
        <p className="text-xs text-slate-500 max-w-lg mx-auto">
          Obrigado por fazer parte da comunidade que utiliza e aprimora o PedBox todos os dias.
        </p>
        <div className="pt-1 flex items-center justify-center gap-3">
          <Link
            to="/ferramentas"
            className="text-xs font-bold text-brand-teal hover:underline inline-flex items-center gap-1"
          >
            Explorar Ferramentas <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <span className="text-slate-300">•</span>
          <Link
            to="/biblioteca"
            className="text-xs font-bold text-brand-teal hover:underline inline-flex items-center gap-1"
          >
            Ver Biblioteca Clínica <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
