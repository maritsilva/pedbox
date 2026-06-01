import React, { useState, useEffect, useRef } from 'react';
import { base44 } from '@/api/base44Client';
import { Send, Loader2, RotateCcw, Shield, Sparkles, Mic, ChevronRight } from 'lucide-react';
import MessageBubble from '@/components/MessageBubble';
import { motion, AnimatePresence } from 'framer-motion';

const AGENT_NAME = 'pediatric_research';

const SUGGESTIONS = [
  { icon: '🦠', text: 'Tratamento de sepse neonatal — últimas diretrizes', tag: 'Infectologia' },
  { icon: '💊', text: 'Dosagem de amoxicilina em otite média aguda', tag: 'Farmacologia' },
  { icon: '🫁', text: 'Evidências recentes sobre bronquiolite por VRS', tag: 'Respiratório' },
  { icon: '🧠', text: 'Novas recomendações para convulsão febril', tag: 'Neurologia' },
  { icon: '🌡️', text: 'Guideline atualizado sobre febre sem sinais localizatórios', tag: 'Infectologia' },
  { icon: '🩸', text: 'Diagnóstico e tratamento de anemia ferropriva em lactentes', tag: 'Hematologia' },
];

const SOURCES = ['PubMed', 'AAP', 'SBP', 'WHO', 'NICE', 'UpToDate'];

export default function Pesquisa() {
  const [conversation, setConversation] = useState(null);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);
  const textareaRef = useRef(null);

  useEffect(() => {
    base44.auth.isAuthenticated().then(async (authed) => {
      setIsAuthenticated(authed);
      if (authed) await startNewConversation();
      else setLoading(false);
    });
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Auto-resize textarea
  useEffect(() => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = 'auto';
    el.style.height = Math.min(el.scrollHeight, 160) + 'px';
  }, [input]);

  const startNewConversation = async () => {
    setLoading(true);
    setMessages([]);
    const conv = await base44.agents.createConversation({
      agent_name: AGENT_NAME,
      metadata: { name: 'Pesquisa Pediátrica' },
    });
    setConversation(conv);
    setLoading(false);
    base44.agents.subscribeToConversation(conv.id, (data) => {
      setMessages([...data.messages]);
    });
    setTimeout(() => textareaRef.current?.focus(), 100);
  };

  const handleSend = async (text) => {
    const msg = text || input.trim();
    if (!msg || !conversation || sending) return;
    setInput('');
    setSending(true);
    await base44.agents.addMessage(conversation, { role: 'user', content: msg });
    setSending(false);
    setTimeout(() => textareaRef.current?.focus(), 100);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  // ── Not authenticated ──
  if (!isAuthenticated && !loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-md w-full"
        >
          {/* Logo */}
          <div className="relative w-20 h-20 mx-auto mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-3xl flex items-center justify-center shadow-2xl shadow-blue-900/50">
              <Sparkles className="w-10 h-10 text-white" />
            </div>
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-400 rounded-full border-2 border-slate-900 animate-pulse" />
          </div>
          <h1 className="text-4xl font-extrabold text-white mb-2">SophIA</h1>
          <p className="text-blue-300 text-base mb-1 font-medium">IA Clínica Pediátrica</p>
          <p className="text-slate-400 text-sm mb-8 leading-relaxed max-w-xs mx-auto">
            Pesquise diretrizes, evidências e protocolos com inteligência artificial especializada em pediatria.
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {SOURCES.map(s => (
              <span key={s} className="bg-white/10 border border-white/20 text-white/70 text-xs px-2.5 py-1 rounded-full font-medium">{s}</span>
            ))}
          </div>
          <button
            onClick={() => base44.auth.redirectToLogin()}
            className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-4 rounded-2xl font-bold text-base hover:shadow-xl hover:shadow-blue-900/40 transition-all hover:scale-105 shadow-lg"
          >
            Entrar para acessar
          </button>
          <p className="text-slate-500 text-xs mt-4">Acesso gratuito para profissionais e estudantes</p>
        </motion.div>
      </div>
    );
  }

  const isWaiting = sending || (messages.length > 0 && messages[messages.length - 1]?.role === 'user');
  const hasMessages = messages.length > 0;

  return (
    <div className="flex flex-col bg-slate-50" style={{ height: 'calc(100dvh - 56px)' }}>

      {/* ── HEADER ── */}
      <div className="px-4 py-3 bg-white border-b border-border flex items-center justify-between flex-shrink-0">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-sm">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-green-400 rounded-full border-2 border-white" />
          </div>
          <div>
            <p className="font-extrabold text-sm text-foreground leading-none">SophIA</p>
            <p className="text-[11px] text-muted-foreground mt-0.5 leading-none">IA Clínica Pediátrica · Pedbox</p>
          </div>
        </div>
        <button
          onClick={startNewConversation}
          disabled={loading}
          className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary border border-border rounded-xl px-3 py-1.5 hover:border-primary/40 hover:bg-primary/5 transition-all disabled:opacity-40"
        >
          <RotateCcw className="w-3 h-3" />
          Nova conversa
        </button>
      </div>

      {/* ── DISCLAIMER ── */}
      <div className="px-4 py-2 bg-amber-50 border-b border-amber-100 flex items-center gap-2 flex-shrink-0">
        <Shield className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
        <p className="text-xs text-amber-700 leading-relaxed">Resumos educacionais. Sempre valide com julgamento clínico e protocolos institucionais.</p>
      </div>

      {/* ── MESSAGES AREA ── */}
      <div className="flex-1 overflow-y-auto px-4 py-6">
        {loading ? (
          <div className="flex justify-center items-center h-full">
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg animate-pulse">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <p className="text-sm text-muted-foreground font-medium">Preparando SophIA...</p>
            </div>
          </div>
        ) : !hasMessages ? (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto w-full space-y-8 py-2"
          >
            {/* Hero */}
            <div className="text-center">
              <div className="relative w-20 h-20 mx-auto mb-5">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl flex items-center justify-center shadow-xl shadow-blue-200">
                  <Sparkles className="w-9 h-9 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white shadow" />
              </div>
              <h2 className="text-2xl font-extrabold text-foreground">Olá, sou a SophIA</h2>
              <p className="text-sm text-muted-foreground mt-2 max-w-sm mx-auto leading-relaxed">
                Assistente de pesquisa clínica pediátrica. Busco e resumo evidências das principais fontes científicas.
              </p>
              {/* Source badges */}
              <div className="flex flex-wrap justify-center gap-1.5 mt-4">
                {SOURCES.map(s => (
                  <span key={s} className="bg-blue-50 border border-blue-200 text-blue-700 text-[10px] font-bold px-2.5 py-1 rounded-full">{s}</span>
                ))}
              </div>
            </div>

            {/* Suggestion cards */}
            <div>
              <p className="text-[11px] font-bold text-muted-foreground/70 uppercase tracking-widest text-center mb-4">Sugestões para começar</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {SUGGESTIONS.map((s, i) => (
                  <motion.button
                    key={i}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.06 }}
                    onClick={() => handleSend(s.text)}
                    className="flex items-start gap-3 bg-white border border-border rounded-2xl px-4 py-3.5 text-left hover:border-primary/40 hover:shadow-md transition-all group relative overflow-hidden"
                  >
                    <span className="text-xl flex-shrink-0 mt-0.5">{s.icon}</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-foreground leading-snug group-hover:text-primary transition-colors font-medium">{s.text}</p>
                      <p className="text-[10px] text-muted-foreground mt-1 font-semibold">{s.tag}</p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-muted-foreground/40 group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Capabilities hint */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200/80 rounded-2xl p-5">
              <p className="text-xs font-bold text-blue-800 mb-3">O que a SophIA pode fazer</p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  ['📚', 'Resumir evidências científicas'],
                  ['💊', 'Consultar doses e esquemas'],
                  ['🔍', 'Pesquisar diretrizes atualizadas'],
                  ['⚡', 'Comparar condutas clínicas'],
                ].map(([icon, text]) => (
                  <div key={text} className="flex items-center gap-2">
                    <span className="text-base">{icon}</span>
                    <span className="text-xs text-blue-700 font-medium">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ) : (
          <div className="max-w-2xl mx-auto w-full space-y-5">
            <AnimatePresence>
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <MessageBubble message={msg} />
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Typing indicator */}
            {isWaiting && (
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex gap-3 items-end"
              >
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-sm flex-shrink-0">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <div className="bg-white border border-slate-200 rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm">
                  <div className="flex gap-1.5 items-center h-5">
                    {[0, 1, 2].map(j => (
                      <div
                        key={j}
                        className="w-2 h-2 rounded-full bg-blue-400 animate-bounce"
                        style={{ animationDelay: `${j * 0.15}s` }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* ── INPUT AREA ── */}
      <div className="px-4 pt-3 pb-4 border-t border-border bg-white flex-shrink-0 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
        <div className="max-w-2xl mx-auto">
          <form
            onSubmit={(e) => { e.preventDefault(); handleSend(); }}
            className="flex gap-2 items-end"
          >
            <div className="flex-1 relative bg-slate-50 border border-border rounded-2xl focus-within:ring-2 focus-within:ring-primary/25 focus-within:border-primary transition-all">
              <textarea
                ref={textareaRef}
                rows={1}
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Pergunte sobre evidências, diretrizes, medicamentos..."
                disabled={sending || loading}
                className="w-full bg-transparent px-4 py-3 pr-4 text-sm text-foreground focus:outline-none placeholder:text-muted-foreground/60 resize-none leading-relaxed"
                style={{ maxHeight: '160px' }}
              />
            </div>
            <button
              type="submit"
              disabled={!input.trim() || sending || loading}
              className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-2xl p-3 disabled:opacity-40 transition-all hover:shadow-lg hover:shadow-blue-200 flex-shrink-0 shadow-sm disabled:cursor-not-allowed"
            >
              {sending
                ? <Loader2 className="w-5 h-5 animate-spin" />
                : <Send className="w-5 h-5" />
              }
            </button>
          </form>
          <p className="text-center text-[10px] text-muted-foreground/50 mt-2 leading-relaxed">
            SophIA pode cometer erros. Verifique informações críticas com fontes oficiais. · Enter para enviar
          </p>
        </div>
      </div>
    </div>
  );
}