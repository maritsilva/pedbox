import React, { useState } from 'react';
import { Mail, BookOpen, Share2, Zap, Users, Heart, AlertCircle, Copy, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { base44 } from '@/api/base44Client';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Contato() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    institution: '',
    reason: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
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
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', institution: '', reason: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const handleCopyModel = () => {
    window.open('https://app.base44.com/app-templates/69f4e81a840a3c93cee16789', '_blank');
  };

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
            Conhecimento médico deve ser <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">livre.</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            PedBox é um projeto educacional construído com a convicção de que barreiras de acesso ao conhecimento em saúde reforçam desigualdades.
          </p>
        </div>
      </motion.section>

      {/* Propósito */}
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">O propósito do PedBox</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              O PedBox nasceu da frustração com <strong>fragmentação de conteúdo</strong>, <strong>acesso restrito</strong> e <strong>duplicação desnecessária de esforço</strong> na educação médica. Sabemos que estudantes, residentes, professores e profissionais de saúde precisam de ferramentas rápidas e confiáveis — mas muitas vezes enfrentam custos proibitivos, plataformas fechadas ou conhecimento disperso.
            </p>
            <p>
              Decidimos construir algo diferente: um projeto educacional <strong>radicalmente livre</strong>. Não apenas disponível, mas genuinamente aberto para estudo, adaptação e melhoria contínua.
            </p>
            <p className="text-lg font-semibold text-blue-700">
              Na saúde, democratizar conhecimento também é uma forma de cuidado.
            </p>
          </div>
        </motion.div>
      </motion.section>

      {/* Seção de Liberdade */}
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

        <motion.div
          variants={container}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
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

      {/* Por que conteúdos livres importam */}
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-4 py-16"
      >
        <motion.div variants={item} className="bg-gradient-to-br from-green-50 to-cyan-50 rounded-3xl p-8 sm:p-12 border-2 border-green-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Por que isso importa para a ciência e para a saúde</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              <strong>A ciência avança quando o conhecimento é compartilhado.</strong> Barreiras — como livros caros, plataformas proprietárias e conteúdos fragmentados — não protegem a qualidade; apenas a preservam longe de quem mais precisa.
            </p>
            <p>
              Na educação médica, essas barreiras têm consequências reais:
            </p>
            <ul className="space-y-2 ml-4">
              <li className="flex gap-3">
                <span className="text-green-600 font-bold">•</span>
                <span><strong>Desigualdade de acesso:</strong> estudantes em instituições menos favorecidas ficam para trás.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-600 font-bold">•</span>
                <span><strong>Duplicação de esforço:</strong> cada escola, hospital e ligas reinventam a roda.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-600 font-bold">•</span>
                <span><strong>Conhecimento estagnado:</strong> melhorias em um lugar não beneficiam os demais.</span>
              </li>
            </ul>
            <p className="mt-4 font-semibold text-blue-700">
              Conteúdo livre não significa conteúdo de qualidade baixa — significa que o conhecimento é revisado, melhorado e reutilizado coletivamente.
            </p>
          </div>
        </motion.div>
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
              O PedBox é uma <strong>ferramenta educacional</strong>. Não substitui diretrizes oficiais, protocolos locais, avaliação clínica direta ou supervisão profissional. Recomendações clínicas devem sempre ser validadas com protocolos institucionais e orientação de especialistas. Ao usar, adaptar ou compartilhar este conteúdo, você assume responsabilidade por sua aplicação ética e profissional.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Formulário de Contato */}
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-3xl mx-auto px-4 py-16"
      >
        <motion.h2 variants={item} className="text-3xl font-bold text-gray-900 text-center mb-10">
          Entre em contato
        </motion.h2>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-green-50 border-2 border-green-400 rounded-2xl p-8 text-center"
          >
            <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-green-900 mb-2">Mensagem enviada!</h3>
            <p className="text-green-700">Obrigado por entrar em contato. Responderemos em breve.</p>
          </motion.div>
        ) : (
          <motion.form
            variants={item}
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl shadow-lg p-8 sm:p-10 space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Seu nome</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder="João Silva"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">E-mail</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder="joao@example.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Instituição / Área</label>
              <input
                type="text"
                name="institution"
                value={formData.institution}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors"
                placeholder="Ex: USP, Hospital X, Liga de Pediatria, Desenvolvedor"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Motivo do contato</label>
              <select
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors text-gray-700"
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
              <label className="block text-sm font-semibold text-gray-700 mb-2">Mensagem</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors resize-none"
                placeholder="Conte-nos mais..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold py-3 rounded-xl hover:shadow-lg transition-all transform hover:scale-105"
            >
              <Mail className="w-5 h-5 inline mr-2" />
              Enviar mensagem
            </button>
          </motion.form>
        )}
      </motion.section>

      {/* Copiar Modelo */}
      <motion.section
        variants={item}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-3xl mx-auto px-4 py-12"
      >
        <button
          onClick={handleCopyModel}
          className="w-full bg-gradient-to-r from-orange-400 to-amber-400 text-white font-bold py-4 rounded-2xl hover:shadow-lg transition-all transform hover:scale-105 flex items-center justify-center gap-3"
        >
          <Copy className="w-6 h-6" />
          Copiar ou adaptar o modelo do PedBox
          <ExternalLink className="w-5 h-5" />
        </button>
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

      {/* Footer com info da desenvolvedora */}
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
    </div>
  );
}