import React, { useState, useEffect, useRef } from 'react';
import { base44 } from '@/api/base44Client';
import { Search, Send, Loader2, FlaskConical, ChevronLeft, Plus, BookOpen, Zap, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import MessageBubble from '@/components/MessageBubble';

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
  const [loading, setLoading] = useState(false);
  const [sending, setSending] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    base44.auth.isAuthenticated().then(async (authed) => {
      setIsAuthenticated(authed);
      if (authed) {
        await startNewConversation();
      }
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const startNewConversation = async () => {
    setLoading(true);
    const conv = await base44.agents.createConversation({
      agent_name: AGENT_NAME,
      metadata: { name: 'Pesquisa Pediátrica' },
    });
    setConversation(conv);
    setMessages([]);
    setLoading(false);

    base44.agents.subscribeToConversation(conv.id, (data) => {
      setMessages([...data.messages]);
    });
  };

  const handleSend = async (text) => {
    const msg = text || input.trim();
    if (!msg || !conversation || sending) return;
    setInput('');
    setSending(true);
    await base44.agents.addMessage(conversation, { role: 'user', content: msg });
    setSending(false);
  };

  if (!isAuthenticated) {
    return (
      <div className="max-w-xl mx-auto px-4 py-16 text-center">
        <FlaskConical className="w-12 h-12 text-primary mx-auto mb-4" />
        <h2 className="text-xl font-bold mb-2">SophIA — IA do Pedbox</h2>
        <p className="text-muted-foreground text-sm mb-6">Faça login para acessar a SophIA, a inteligência artificial do Pedbox.</p>
        <button
          onClick={() => base44.auth.redirectToLogin()}
          className="bg-primary text-white px-6 py-2.5 rounded-xl font-semibold text-sm"
        >
          Entrar
        </button>
      </div>
    );
  }

  const assistantMessages = messages.filter(m => m.role === 'assistant');
  const isWaiting = sending || (messages.length > 0 && messages[messages.length - 1]?.role === 'user');

  return (
    <div className="flex flex-col h-[calc(100vh-64px)] max-w-3xl mx-auto">
      {/* Header */}
      <div className="px-4 py-3 border-b border-border bg-white flex items-center justify-between flex-shrink-0">
        <div className="flex items-center gap-3">
          <div className="bg-primary/10 rounded-xl p-2">
            <FlaskConical className="w-5 h-5 text-primary" />
          </div>
          <div>
            <p className="font-bold text-sm text-foreground">SophIA</p>
            <p className="text-xs text-muted-foreground">Inteligência Artificial do Pedbox</p>
          </div>
        </div>
        <button
          onClick={startNewConversation}
          className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors border border-border rounded-lg px-2.5 py-1.5"
        >
          <Plus className="w-3.5 h-3.5" />
          Nova busca
        </button>
      </div>

      {/* Disclaimer */}
      <div className="px-4 py-2 bg-amber-50 border-b border-amber-100 flex items-start gap-2 flex-shrink-0">
        <Shield className="w-3.5 h-3.5 text-amber-500 flex-shrink-0 mt-0.5" />
        <p className="text-xs text-amber-700">Resumos para fins educacionais. Não substituem o julgamento clínico.</p>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
        {loading ? (
          <div className="flex justify-center py-12">
            <Loader2 className="w-6 h-6 animate-spin text-muted-foreground" />
          </div>
        ) : messages.length === 0 ? (
          <div className="space-y-6 py-4">
            <div className="text-center">
              <div className="text-4xl mb-3">🔬</div>
              <h3 className="font-bold text-foreground mb-1">SophIA — sua IA clínica pediátrica</h3>
              <p className="text-sm text-muted-foreground max-w-sm mx-auto">
                Busco nas principais fontes científicas — PubMed, AAP, SBP, WHO — e resumo o que é relevante para sua prática clínica.
              </p>
            </div>
            <div>
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-3 text-center">Sugestões</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {SUGGESTIONS.map((s, i) => (
                  <button
                    key={i}
                    onClick={() => handleSend(s.text)}
                    className="flex items-start gap-2.5 bg-white border border-border rounded-xl px-3.5 py-3 text-left hover:border-primary/40 hover:shadow-sm transition-all text-sm"
                  >
                    <span className="text-lg flex-shrink-0">{s.icon}</span>
                    <span className="text-foreground leading-snug">{s.text}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <>
            {messages.map((msg, i) => (
              <MessageBubble key={i} message={msg} />
            ))}
            {isWaiting && (
              <div className="flex gap-3 justify-start">
                <div className="h-7 w-7 rounded-lg bg-slate-100 flex items-center justify-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-slate-400" />
                </div>
                <div className="bg-white border border-slate-200 rounded-2xl px-4 py-2.5">
                  <div className="flex gap-1 items-center h-5">
                    {[0, 1, 2].map(i => (
                      <div key={i} className="w-1.5 h-1.5 rounded-full bg-slate-300 animate-bounce" style={{ animationDelay: `${i * 0.15}s` }} />
                    ))}
                  </div>
                </div>
              </div>
            )}
          </>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div className="px-4 py-3 border-t border-border bg-white flex-shrink-0">
        <form
          onSubmit={(e) => { e.preventDefault(); handleSend(); }}
          className="flex gap-2"
        >
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Buscar evidência, guideline, medicamento..."
            className="flex-1 border border-border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary bg-secondary/30"
            disabled={sending || loading}
          />
          <button
            type="submit"
            disabled={!input.trim() || sending || loading}
            className="bg-primary text-white rounded-xl px-4 py-2.5 disabled:opacity-40 transition-opacity flex-shrink-0"
          >
            {sending ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
          </button>
        </form>
      </div>
    </div>
  );
}