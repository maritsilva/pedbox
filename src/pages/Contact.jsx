import React, { useState } from 'react';
import { Mail, Heart, Copy, ExternalLink } from 'lucide-react';
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

export default function Contact() {
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
            Vamos conversar?
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Tem sugestões, encontrou algum erro ou quer colaborar? Adoramos ouvir de você.
          </p>
        </div>
      </motion.section>



      {/* Formulário de Contato */}
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-3xl mx-auto px-4 py-12"
      >
        <motion.h2 variants={item} className="text-2xl font-bold text-gray-900 mb-8">
          Seu feedback é importante
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
            className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 sm:p-10 space-y-6"
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
                placeholder="Ex: USP, Hospital X, Liga de Pediatria"
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

      {/* CTA Final */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="bg-slate-900 text-white text-center py-12 px-4"
      >
        <div className="max-w-2xl mx-auto">
          <p className="text-sm text-slate-300">
            O PedBox é um projeto de código aberto. <br/>
            Construído pela comunidade médica, para a comunidade médica.
          </p>
        </div>
      </motion.section>
    </div>
  );
}