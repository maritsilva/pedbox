import React, { useState, useEffect, useRef } from 'react';
import { base44 } from '@/api/base44Client';
import { Send, Loader2, Plus, Shield, Sparkles, RotateCcw } from 'lucide-react';
import MessageBubble from '@/components/MessageBubble';
import { motion, AnimatePresence } from 'framer-motion';

const AGENT_NAME = 'pediatric_research';

const SUGGESTIONS = [
  { icon: '🦠', text: 'Últimas diretrizes para tratamento de sepse neonatal' },
  { icon: '💊', text: 'Atualizações de dosagem de amoxicilina em otite média' },
  { icon: '🫁', text: 'Evidências recentes sobre bronquiolite por VRS' },
  { icon: '🧠', text: 'Novas recomendações para convulsão febril' },
  { icon: '⚠️', text: 'Alertas de segurança recentes em medicamentos pediátricos' },
  { icon: '📋', text: 'Guideline atualizado da AAP sobre febre sem sinais' },
];

export default function Pesquisa() {
  const [conversation, setConversation] = useState(null);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    base44.auth.isAuthenticated().then(async (authed) => {
      setIsAuthenticated(authed);
      if (authed) {
        await startNewConversation();
      } else {
        setLoading(false);
      }
    });
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

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

    setTimeout(() => inputRef.current?.focus(), 100);
  };

  const handleSend = async (text) => {
    const msg = text || input.trim();
    if (!msg || !conversation || sending) return;
    setInput('');
    setSending(true);
    await base44.agents.addMessage(conversation, { role: 'user', content: msg });
    setSending(false);
    setTimeout(() => inputRef.current?.focus(), 100);
  };

  if (!isAuthenticated && !loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-3xl shadow-xl p-10 text-center max-w-sm w-full">
          <div className="w-16 h-16 bg-gradient-to-br from-primary to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl font-extrabold mb-2 text-foreground">SophIA</h2>
          <p className="text-muted-foreground text-sm mb-6 leading-relaxed">IA clínica pediátrica do Pedbox. Faça login para pesquisar diretrizes, evidências e doses.</p>
          <button
            onClick={() => base44.auth.redirectToLogin()}
            className="w-full bg-primary text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-primary/90 transition-colors shadow"
          >
            Entrar para acessar
          </button>
        </motion.div>
      </div>
    );
  }

  const isWaiting = sending || (messages.length > 0 && messages[messages.length - 1]?.role === 'user');

  return (
    <div className="flex flex-col bg-slate-50" style={{ height: 'calc(100dvh - 56px)' }}>
      {/* Header */}
      <div className="px-4 py-3 bg-white border-b border-border flex items-center justify-between flex-shrink-0 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-gradient-to-br from-primary to-blue-600 rounded-xl flex items-center justify-center shadow-sm">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <div>
            <p className="font-extrabold text-sm text-foreground leading-none">SophIA</p>
            <p className="text-[11px] text-muted-foreground mt-0.5">IA Clínica Pediátrica · Pedbox</p>
          </div>
        </div>
        <button
          onClick={startNewConversation}
          disabled={loading}
          className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors border border-border rounded-lg px-3 py-1.5 hover:border-primary/40 hover:bg-primary/5 disabled:opacity-40"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          Nova conversa
        </button>
      </div>

      {/* Disclaimer */}
      <div className="px-4 py-2 bg-amber-50 border-b border-amber-100 flex items-center gap-2 flex-shrink-0">
        <Shield className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
        <p className="text-xs text-amber-700">Resumos educacionais. Sempre valide com julgamento clínico e protocolos institucionais.</p>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-5 space-y-5">
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="flex flex-col items-center gap-3 text-muted-foreground">
              <Loader2 className="w-7 h-7 animate-spin text-primary" />
              <p className="text-sm">Preparando SophIA...</p>
            </div>
          </div>
        ) : messages.length === 0 ? (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-8 py-4 max-w-2xl mx-auto w-full">
            {/* Hero */}
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-blue-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-foreground">Olá, sou a SophIA!</h3>
                <p className="text-sm text-muted-foreground mt-1 max-w-xs mx-auto leading-relaxed">
                  Sua assistente de pesquisa clínica pediátrica. Busco e resumo evidências das principais fontes científicas.
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-2 text-xs text-muted-foreground">
                {['PubMed', 'AAP', 'SBP', 'WHO', 'NICE', 'UpToDate'].map(src => (
                  <span key={src} className="bg-white border border-border rounded-full px-2.5 py-0.5 font-semibold">{src}</span>
                ))}
              </div>
            </div>

            {/* Suggestions */}
            <div>
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-3 text-center">Sugestões para começar</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {SUGGESTIONS.map((s, i) => (
                  <motion.button
                    key={i}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => handleSend(s.text)}
                    className="flex items-start gap-3 bg-white border border-border rounded-2xl px-4 py-3.5 text-left hover:border-primary/40 hover:shadow-md transition-all group"
                  >
                    <span className="text-xl flex-shrink-0">{s.icon}</span>
                    <span className="text-sm text-foreground leading-snug group-hover:text-primary transition-colors">{s.text}</span>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        ) : (
          <div className="max-w-2xl mx-auto w-full space-y-5">
            <AnimatePresence>
              {messages.map((msg, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }}>
                  <MessageBubble message={msg} />
                </motion.div>
              ))}
            </AnimatePresence>
            {isWaiting && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-3 justify-start">
                <div className="h-7 w-7 rounded-xl bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center shadow-sm flex-shrink-0">
                  <Sparkles className="w-3.5 h-3.5 text-white" />
                </div>
                <div className="bg-white border border-slate-200 rounded-2xl px-4 py-3 shadow-sm">
                  <div className="flex gap-1 items-center h-4">
                    {[0, 1, 2].map(j => (
                      <div key={j} className="w-1.5 h-1.5 rounded-full bg-primary/50 animate-bounce" style={{ animationDelay: `${j * 0.15}s` }} />
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div className="px-4 py-4 border-t border-border bg-white flex-shrink-0 shadow-[0_-2px_8px_rgba(0,0,0,0.04)]">
        <div className="max-w-2xl mx-auto">
          <form onSubmit={(e) => { e.preventDefault(); handleSend(); }} className="flex gap-2 items-end">
            <div className="flex-1 relative">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="Pergunte sobre evidências, diretrizes, medicamentos..."
                className="w-full border border-border rounded-2xl px-4 py-3 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary bg-slate-50 placeholder:text-muted-foreground/60 transition-all"
                disabled={sending || loading}
              />
            </div>
            <button
              type="submit"
              disabled={!input.trim() || sending || loading}
              className="bg-primary text-white rounded-2xl p-3 disabled:opacity-40 transition-all hover:bg-primary/90 hover:shadow-md flex-shrink-0 shadow-sm"
            >
              {sending ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
            </button>
          </form>
          <p className="text-center text-[10px] text-muted-foreground/50 mt-2">SophIA pode cometer erros. Verifique informações críticas.</p>
        </div>
      </div>
    </div>
  );
}