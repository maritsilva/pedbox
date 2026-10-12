import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { services } from '@/api/services';
import {
  Activity, Mail, MailCheck, Archive, Trash2, RefreshCw,
  Smartphone, Monitor, Tablet, CheckCircle2, Clock,
  Server, Database, Sparkles, ExternalLink, Search, ChevronRight,
  BookOpen, Calculator, Stethoscope, ShieldCheck, Check, Info,
  Globe, Save
} from 'lucide-react';
import { motion } from 'framer-motion';
import {
  ResponsiveContainer, AreaChart, Area, XAxis, YAxis,
  Tooltip, CartesianGrid
} from 'recharts';
import { toast } from 'sonner';

// Helper to format dates
function formatDate(dateStr) {
  if (!dateStr) return '—';
  try {
    const d = new Date(dateStr);
    return new Intl.DateTimeFormat('pt-BR', {
      day: '2-digit', month: '2-digit', year: 'numeric',
      hour: '2-digit', minute: '2-digit'
    }).format(d);
  } catch {
    return dateStr;
  }
}

function formatDayLabel(dayStr) {
  if (!dayStr) return '';
  try {
    const [, month, day] = dayStr.split('-');
    return `${day}/${month}`;
  } catch {
    return dayStr;
  }
}

function formatUptime(seconds) {
  if (!seconds || seconds <= 0) return '0h';
  const d = Math.floor(seconds / 86400);
  const h = Math.floor((seconds % 86400) / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  if (d > 0) return `${d}d ${h}h ${m}m`;
  if (h > 0) return `${h}h ${m}m`;
  return `${m}m`;
}

// Map route path to human-readable clinical name
function getRouteLabel(path) {
  const map = {
    '/': 'Página Inicial (Home)',
    '/curvas-crescimento': 'Curvas de Crescimento OMS/Intergrowth',
    '/guia': 'Guia de Antimicrobianos & Fórmulas',
    '/dosagens': 'Calculadora de Dosagens',
    '/calculadoras': 'Hub de Calculadoras Pediátricas',
    '/biblioteca': 'Biblioteca de Condutas & Protocolos',
    '/condutas': 'Condutas Pediátricas',
    '/protocolos': 'Protocolos Clínicos',
    '/documentos': 'Documentos & Google Drive',
    '/vacinas': 'Calendário Vacinal SBIm / PNI',
    '/sinais-vitais': 'Tabela de Sinais Vitais & Referências',
    '/hidratacao': 'Hidratação Venosa (Holliday-Segar)',
    '/drogas-emergencia': 'Drogas de Emergência & Reanimação PALS',
    '/horas-de-vida': 'Calculadora de Horas de Vida',
    '/idade-gestacional': 'Idade Gestacional & DPP',
    '/idade-gestacional-corrigida': 'Idade Corrigida (Prematuros)',
    '/ictericia': 'Fototerapia & Risco de Hiperbilirrubinemia',
    '/pressao-arterial': 'Percentis de Pressão Arterial',
    '/imc': 'Cálculo de IMC e Z-Score',
    '/perimetro-cefalico': 'Perímetro Cefálico OMS',
    '/alvo-parental': 'Alvo Parental e Estatura Estimada',
    '/centor-mcisaac': 'Escore Centor-McIsaac',
    '/amamentacao': 'Segurança na Amamentação',
    '/desenvolvimento': 'Cartilha de Desenvolvimento Infantil',
    '/wood-downes': 'Escore de Wood-Downes',
    '/pram': 'Escore PRAM (Asma)',
    '/apgar': 'Escore de APGAR',
    '/glasgow-pediatrico': 'Escala de Glasgow Pediátrica',
    '/pews': 'Escore de Alerta Precoce (PEWS)',
    '/sipa': 'Índice de Choque Pediátrico (SIPA)',
    '/silverman-anderson': 'Boletim de Silverman-Andersen',
    '/rodwell': 'Escore Hematológico de Rodwell',
    '/pas-asma': 'Pediatric Asthma Score (PAS)',
    '/favoritos': 'Favoritos do Usuário',
    '/contato': 'Formulário de Contato / Suporte',
    '/perfil': 'Perfil do Médico / Usuário',
  };
  return map[path] || path;
}

export default function Admin() {
  const [tab, setTab] = useState('analytics'); // 'analytics' | 'contacts' | 'health'
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  // Analytics data
  const [analyticsDays, setAnalyticsDays] = useState(30);
  const [analytics, setAnalytics] = useState(null);

  // Contacts data
  const [contacts, setContacts] = useState([]);
  const [contactStatusFilter, setContactStatusFilter] = useState('all');
  const [contactReasonFilter, setContactReasonFilter] = useState('all');
  const [contactSearch, setContactSearch] = useState('');
  const [selectedContact, setSelectedContact] = useState(null);

  // Health data
  const [health, setHealth] = useState(null);

  // SEO & Google Platform Settings
  const [googleSiteVerification, setGoogleSiteVerification] = useState('');
  const [googleAnalyticsId, setGoogleAnalyticsId] = useState('');
  const [savingSettings, setSavingSettings] = useState(false);

  // Load all admin data
  const loadData = useCallback(async (isRefresh = false) => {
    if (isRefresh) setRefreshing(true);
    try {
      const [analyticsRes, contactsRes, healthRes, settingsRes] = await Promise.all([
        services.admin.getAnalytics(analyticsDays).catch(() => null),
        services.admin.getContacts('all').catch(() => ({ items: [] })),
        services.admin.getHealth().catch(() => null),
        services.admin.getSettings().catch(() => null),
      ]);

      if (analyticsRes) setAnalytics(analyticsRes);
      if (contactsRes?.items) setContacts(contactsRes.items);
      if (healthRes) setHealth(healthRes);
      if (settingsRes) {
        setGoogleSiteVerification(settingsRes.googleSiteVerification || '');
        setGoogleAnalyticsId(settingsRes.googleAnalyticsId || '');
      }
    } catch (err) {
      toast.error('Erro ao carregar dados administrativos: ' + (err.message || 'Falha de conexão'));
    } finally {
      setLoading(false);
      if (isRefresh) {
        setRefreshing(false);
        toast.success('Dados administrativos atualizados!');
      }
    }
  }, [analyticsDays]);

  const handleSaveSeoSettings = async (e) => {
    e?.preventDefault?.();
    setSavingSettings(true);
    try {
      await services.admin.updateSettings({
        googleSiteVerification,
        googleAnalyticsId,
      });
      toast.success('Configurações do Google Search Console e Analytics salvas!');
    } catch (err) {
      toast.error('Erro ao salvar configurações: ' + (err.message || 'Falha de rede'));
    } finally {
      setSavingSettings(false);
    }
  };

  useEffect(() => {
    loadData(false);
  }, [loadData]);

  // Handle contact status update
  const handleUpdateContactStatus = async (id, status) => {
    try {
      await services.admin.updateContact(id, { status });
      setContacts(prev => prev.map(c => c.id === id ? { ...c, status } : c));
      if (selectedContact?.id === id) {
        setSelectedContact(prev => ({ ...prev, status }));
      }
      toast.success(
        status === 'read' ? 'Mensagem marcada como lida' :
        status === 'archived' ? 'Mensagem arquivada' : 'Mensagem marcada como não lida'
      );
    } catch (err) {
      toast.error('Não foi possível atualizar a mensagem: ' + err.message);
    }
  };

  // Handle contact deletion
  const handleDeleteContact = async (id) => {
    if (!window.confirm('Tem certeza que deseja excluir esta mensagem de contato?')) return;
    try {
      await services.admin.deleteContact(id);
      setContacts(prev => prev.filter(c => c.id !== id));
      if (selectedContact?.id === id) setSelectedContact(null);
      toast.success('Mensagem de contato excluída.');
    } catch (err) {
      toast.error('Erro ao excluir mensagem: ' + err.message);
    }
  };

  // Filtered contacts
  const filteredContacts = useMemo(() => {
    return contacts.filter(c => {
      if (contactStatusFilter !== 'all' && c.status !== contactStatusFilter) return false;
      if (contactReasonFilter !== 'all' && c.reason !== contactReasonFilter) return false;
      if (contactSearch.trim()) {
        const q = contactSearch.toLowerCase();
        const matchesName = (c.name || '').toLowerCase().includes(q);
        const matchesEmail = (c.email || '').toLowerCase().includes(q);
        const matchesInst = (c.institution || '').toLowerCase().includes(q);
        const matchesMsg = (c.message || '').toLowerCase().includes(q);
        if (!matchesName && !matchesEmail && !matchesInst && !matchesMsg) return false;
      }
      return true;
    });
  }, [contacts, contactStatusFilter, contactReasonFilter, contactSearch]);

  const unreadCount = useMemo(() => {
    return contacts.filter(c => c.status === 'unread').length;
  }, [contacts]);

  const uniqueReasons = useMemo(() => {
    const set = new Set();
    contacts.forEach(c => { if (c.reason) set.add(c.reason); });
    return Array.from(set);
  }, [contacts]);

  if (loading) {
    return (
      <div className="clinical-page flex flex-col items-center justify-center min-h-[60vh] gap-3">
        <RefreshCw className="w-8 h-8 text-primary animate-spin" />
        <p className="text-sm font-semibold text-muted-foreground">Carregando painel de comando administrativo…</p>
      </div>
    );
  }

  return (
    <div className="clinical-page max-w-7xl mx-auto px-4 py-6 md:py-8 space-y-6">
      {/* ─── Top Header ─── */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-border">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Painel em Tempo Real
            </span>
            <span className="text-xs text-muted-foreground flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-primary" /> Admin
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight mt-1">
            Painel Administrativo
          </h1>
          <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
            Métricas de tráfego, mensagens recebidas dos usuários e status de integridade clínica.
          </p>
        </div>

        <button
          onClick={() => loadData(true)}
          disabled={refreshing}
          className="self-start sm:self-auto inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold bg-white border border-border text-foreground hover:bg-secondary/70 transition-all shadow-sm active:scale-95 disabled:opacity-50"
        >
          <RefreshCw className={`w-3.5 h-3.5 text-primary ${refreshing ? 'animate-spin' : ''}`} />
          {refreshing ? 'Atualizando…' : 'Atualizar Dados'}
        </button>
      </div>

      {/* ─── KPI Cards Row ─── */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {/* Total Pageviews */}
        <div className="bg-white border border-border rounded-2xl p-4 shadow-sm relative overflow-hidden">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Acessos Totais</span>
            <div className="w-8 h-8 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center">
              <Activity className="w-4 h-4" />
            </div>
          </div>
          <p className="text-2xl sm:text-3xl font-extrabold text-foreground mt-2">
            {analytics?.summary?.totalHits?.toLocaleString('pt-BR') || 0}
          </p>
          <div className="flex items-center gap-1.5 mt-2 text-xs text-muted-foreground">
            <span className="font-semibold text-sky-600">+{analytics?.summary?.todayHits || 0} hoje</span>
            <span>• {analytics?.summary?.weekHits || 0} nesta semana</span>
          </div>
        </div>

        {/* Contact Messages */}
        <div className="bg-white border border-border rounded-2xl p-4 shadow-sm relative overflow-hidden">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Contatos Recebidos</span>
            <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${unreadCount > 0 ? 'bg-amber-50 text-amber-600' : 'bg-secondary text-muted-foreground'}`}>
              <Mail className="w-4 h-4" />
            </div>
          </div>
          <p className="text-2xl sm:text-3xl font-extrabold text-foreground mt-2">
            {contacts.length}
          </p>
          <div className="flex items-center gap-1.5 mt-2 text-xs">
            {unreadCount > 0 ? (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 font-bold text-[11px]">
                {unreadCount} nova{unreadCount > 1 ? 's' : ''} pendente{unreadCount > 1 ? 's' : ''}
              </span>
            ) : (
              <span className="text-muted-foreground">Todas mensagens lidas</span>
            )}
          </div>
        </div>

        {/* Clinical Catalog */}
        <div className="bg-white border border-border rounded-2xl p-4 shadow-sm relative overflow-hidden">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Acervo Clínico</span>
            <div className="w-8 h-8 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
              <BookOpen className="w-4 h-4" />
            </div>
          </div>
          <p className="text-2xl sm:text-3xl font-extrabold text-foreground mt-2">
            59 Condutas
          </p>
          <div className="flex items-center gap-1.5 mt-2 text-xs text-muted-foreground">
            <span>29 Neonatologia • 30 Cirurgia Pediátrica</span>
          </div>
        </div>

        {/* Clinical Calculators */}
        <div className="bg-white border border-border rounded-2xl p-4 shadow-sm relative overflow-hidden">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Ferramentas Ativas</span>
            <div className="w-8 h-8 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center">
              <Calculator className="w-4 h-4" />
            </div>
          </div>
          <p className="text-2xl sm:text-3xl font-extrabold text-foreground mt-2">
            36 Calculadoras
          </p>
          <div className="flex items-center gap-1.5 mt-2 text-xs text-muted-foreground">
            <span className="text-teal-600 font-semibold">48 ferramentas interativas</span>
            <span>no catálogo</span>
          </div>
        </div>
      </div>

      {/* ─── Main Tabs Navigation ─── */}
      <div className="flex gap-2 p-1.5 bg-secondary/50 rounded-2xl max-w-2xl border border-border">
        <button
          onClick={() => setTab('analytics')}
          className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all ${
            tab === 'analytics'
              ? 'bg-white text-foreground shadow-sm'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          <Activity className="w-4 h-4 text-primary" />
          Acessos & Telemetria
        </button>

        <button
          onClick={() => setTab('contacts')}
          className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all relative ${
            tab === 'contacts'
              ? 'bg-white text-foreground shadow-sm'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          <Mail className="w-4 h-4 text-primary" />
          Mensagens de Contato
          {unreadCount > 0 && (
            <span className="px-1.5 py-0.5 rounded-full bg-amber-500 text-white font-extrabold text-[10px]">
              {unreadCount}
            </span>
          )}
        </button>

        <button
          onClick={() => setTab('health')}
          className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all ${
            tab === 'health'
              ? 'bg-white text-foreground shadow-sm'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          <Stethoscope className="w-4 h-4 text-primary" />
          Status Clínico & Sistema
        </button>

        <button
          onClick={() => setTab('seo')}
          className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all ${
            tab === 'seo'
              ? 'bg-white text-foreground shadow-sm'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          <Globe className="w-4 h-4 text-primary" />
          SEO & Google
        </button>
      </div>

      {/* ─── TAB 1: Acessos & Telemetria ─── */}
      {tab === 'analytics' && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
          {/* Chart Header & Controls */}
          <div className="bg-white border border-border rounded-2xl p-5 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-foreground flex items-center gap-2">
                  <Activity className="w-5 h-5 text-primary" />
                  Evolução de Acessos ao PedBox
                </h3>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Visualização cronológica dos acessos com distinção entre dispositivos móveis e desktop.
                </p>
              </div>

              {/* Range Selector */}
              <div className="flex items-center gap-1 bg-secondary/50 p-1 rounded-xl self-start sm:self-auto border border-border">
                {[7, 14, 30].map(days => (
                  <button
                    key={days}
                    onClick={() => setAnalyticsDays(days)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      analyticsDays === days
                        ? 'bg-white text-foreground shadow-xs'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {days} dias
                  </button>
                ))}
              </div>
            </div>

            {/* Recharts Area Chart */}
            <div className="h-64 sm:h-80 w-full">
              {analytics?.dailyHits && analytics.dailyHits.length > 0 ? (
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={analytics.dailyHits} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.4} />
                        <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0.0} />
                      </linearGradient>
                      <linearGradient id="colorMobile" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#10b981" stopOpacity={0.0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <XAxis
                      dataKey="date"
                      tickFormatter={formatDayLabel}
                      tick={{ fontSize: 11, fill: '#64748b' }}
                      axisLine={{ stroke: '#e2e8f0' }}
                      tickLine={false}
                    />
                    <YAxis
                      allowDecimals={false}
                      tick={{ fontSize: 11, fill: '#64748b' }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <Tooltip
                      content={({ active, payload, label }) => {
                        if (!active || !payload?.length) return null;
                        return (
                          <div className="bg-slate-900 text-white px-3 py-2 rounded-xl text-xs shadow-xl space-y-1">
                            <p className="font-bold border-b border-slate-700 pb-1">{formatDate(label)}</p>
                            <p className="text-sky-300 font-semibold">Total: {payload[0]?.value} acessos</p>
                            {payload[1] && (
                              <p className="text-emerald-300">Mobile: {payload[1]?.value}</p>
                            )}
                          </div>
                        );
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="hits"
                      name="Total"
                      stroke="#0ea5e9"
                      strokeWidth={2.5}
                      fillOpacity={1}
                      fill="url(#colorTotal)"
                    />
                    <Area
                      type="monotone"
                      dataKey="mobile"
                      name="Mobile"
                      stroke="#10b981"
                      strokeWidth={2}
                      strokeDasharray="4 4"
                      fillOpacity={1}
                      fill="url(#colorMobile)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-muted-foreground gap-2">
                  <Activity className="w-8 h-8 opacity-30" />
                  <p className="text-xs">Nenhum dado de acesso registrado para este período.</p>
                </div>
              )}
            </div>

            <div className="flex items-center justify-end gap-5 mt-4 pt-3 border-t border-border text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-1.5 bg-sky-500 rounded-full" /> Total de Acessos
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-1.5 bg-emerald-500 rounded-full" /> Acessos Mobile
              </span>
            </div>
          </div>

          {/* Secondary Stats: Top Routes & Devices */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Top Routes */}
            <div className="lg:col-span-2 bg-white border border-border rounded-2xl p-5 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="text-sm font-bold text-foreground">Ferramentas & Páginas Mais Visitadas</h4>
                  <p className="text-xs text-muted-foreground">Ranking das rotas clínicas com maior demanda.</p>
                </div>
                <span className="text-xs font-semibold text-muted-foreground">Últimos {analyticsDays} dias</span>
              </div>

              {analytics?.topRoutes && analytics.topRoutes.length > 0 ? (
                <div className="space-y-3">
                  {analytics.topRoutes.map((route, idx) => {
                    const maxCount = analytics.topRoutes[0]?.count || 1;
                    const pct = Math.round((route.count / maxCount) * 100);
                    return (
                      <div key={route.path} className="space-y-1">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-semibold text-foreground truncate max-w-[260px] sm:max-w-md">
                            <span className="text-muted-foreground mr-1.5 font-mono">#{idx + 1}</span>
                            {getRouteLabel(route.path)}
                          </span>
                          <span className="font-mono font-bold text-primary">{route.count} acessos</span>
                        </div>
                        <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                          <div
                            className="h-full bg-primary rounded-full transition-all duration-500"
                            style={{ width: `${pct}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="py-8 text-center text-xs text-muted-foreground">
                  Nenhuma navegação registrada recentemente.
                </div>
              )}
            </div>

            {/* Devices Breakdown */}
            <div className="bg-white border border-border rounded-2xl p-5 shadow-sm flex flex-col justify-between">
              <div>
                <h4 className="text-sm font-bold text-foreground">Dispositivos Utilizados</h4>
                <p className="text-xs text-muted-foreground mb-4">Perfil de uso dos médicos (plantão vs mesa).</p>

                <div className="space-y-3">
                  {/* Desktop */}
                  <div className="p-3 rounded-xl bg-secondary/40 border border-border flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center">
                        <Monitor className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-foreground">Computador (Desktop)</p>
                        <p className="text-[11px] text-muted-foreground">Consultórios e enfermarias</p>
                      </div>
                    </div>
                    <span className="text-sm font-extrabold text-foreground font-mono">
                      {analytics?.devices?.desktop || 0}
                    </span>
                  </div>

                  {/* Mobile */}
                  <div className="p-3 rounded-xl bg-secondary/40 border border-border flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">
                        <Smartphone className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-foreground">Smartphone (Mobile)</p>
                        <p className="text-[11px] text-muted-foreground">À beira do leito / plantão</p>
                      </div>
                    </div>
                    <span className="text-sm font-extrabold text-foreground font-mono">
                      {analytics?.devices?.mobile || 0}
                    </span>
                  </div>

                  {/* Tablet */}
                  <div className="p-3 rounded-xl bg-secondary/40 border border-border flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center">
                        <Tablet className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-foreground">Tablet</p>
                        <p className="text-[11px] text-muted-foreground">Prescrição e rounds</p>
                      </div>
                    </div>
                    <span className="text-sm font-extrabold text-foreground font-mono">
                      {analytics?.devices?.tablet || 0}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-4 p-3 bg-primary/5 rounded-xl border border-primary/20 text-xs text-muted-foreground flex items-start gap-2">
                <Info className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <p>
                  As métricas de acesso são agregadas de forma 100% anônima, respeitando a privacidade e a LGPD.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* ─── TAB 2: Mensagens de Contato ─── */}
      {tab === 'contacts' && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
          {/* Filter Bar */}
          <div className="bg-white border border-border rounded-2xl p-4 shadow-sm flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                value={contactSearch}
                onChange={e => setContactSearch(e.target.value)}
                placeholder="Buscar por nome, e-mail, hospital ou conteúdo…"
                className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 bg-secondary/20"
              />
            </div>

            {/* Status Filter */}
            <div className="flex items-center gap-1.5 overflow-x-auto">
              {[
                { id: 'all', label: 'Todas' },
                { id: 'unread', label: 'Não Lidas' },
                { id: 'read', label: 'Lidas' },
                { id: 'archived', label: 'Arquivadas' },
              ].map(st => (
                <button
                  key={st.id}
                  onClick={() => setContactStatusFilter(st.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                    contactStatusFilter === st.id
                      ? 'bg-primary text-white shadow-xs'
                      : 'bg-secondary/60 text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {st.label}
                </button>
              ))}
            </div>

            {/* Reason Filter */}
            {uniqueReasons.length > 0 && (
              <select
                value={contactReasonFilter}
                onChange={e => setContactReasonFilter(e.target.value)}
                className="text-xs px-3 py-2 rounded-xl border border-border bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
              >
                <option value="all">Todos os Motivos</option>
                {uniqueReasons.map(r => (
                  <option key={r} value={r}>{r}</option>
                ))}
              </select>
            )}
          </div>

          {/* Messages List & Detail Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* List Column */}
            <div className={`${selectedContact ? 'lg:col-span-5' : 'lg:col-span-12'} space-y-3`}>
              {filteredContacts.length > 0 ? (
                filteredContacts.map(msg => {
                  const isSelected = selectedContact?.id === msg.id;
                  const isUnread = msg.status === 'unread';

                  return (
                    <div
                      key={msg.id}
                      onClick={() => setSelectedContact(msg)}
                      className={`p-4 rounded-2xl border transition-all cursor-pointer shadow-sm relative ${
                        isSelected
                          ? 'border-primary bg-primary/5 ring-1 ring-primary/20'
                          : isUnread
                          ? 'border-amber-200 bg-amber-50/40 hover:bg-amber-50/70'
                          : 'border-border bg-white hover:bg-secondary/30'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="space-y-0.5">
                          <div className="flex items-center gap-2">
                            {isUnread && (
                              <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0" title="Não lida" />
                            )}
                            <h4 className="text-sm font-bold text-foreground">
                              {msg.name || 'Remetente'}
                            </h4>
                          </div>
                          <p className="text-xs text-muted-foreground">{msg.email}</p>
                          {msg.institution && (
                            <p className="text-[11px] text-slate-500 italic">{msg.institution}</p>
                          )}
                        </div>

                        <span className="text-[11px] text-muted-foreground shrink-0">
                          {formatDate(msg.created_date)}
                        </span>
                      </div>

                      {/* Reason Tag */}
                      <div className="mt-2.5 flex items-center justify-between gap-2">
                        <span className="inline-block px-2 py-0.5 rounded-lg text-[10px] font-bold uppercase tracking-wider bg-secondary text-foreground border border-border">
                          {msg.reason || 'Contato Geral'}
                        </span>

                        <span className="text-xs text-primary font-semibold flex items-center gap-1">
                          Ver detalhes <ChevronRight className="w-3.5 h-3.5" />
                        </span>
                      </div>

                      {/* Snippet */}
                      <p className="mt-2 text-xs text-slate-600 line-clamp-2">
                        {msg.message}
                      </p>
                    </div>
                  );
                })
              ) : (
                <div className="bg-white border border-border rounded-2xl p-12 text-center space-y-2">
                  <MailCheck className="w-10 h-10 text-muted-foreground/40 mx-auto" />
                  <p className="text-sm font-bold text-foreground">Nenhuma mensagem encontrada</p>
                  <p className="text-xs text-muted-foreground">
                    Não há formulários de contato que atendam aos filtros selecionados.
                  </p>
                </div>
              )}
            </div>

            {/* Selected Message Detail Column */}
            {selectedContact && (
              <div className="lg:col-span-7 bg-white border border-border rounded-2xl p-6 shadow-sm space-y-6 self-start sticky top-6">
                <div className="flex items-start justify-between border-b border-border pb-4 gap-4">
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded-lg text-xs font-bold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20 mb-2">
                      {selectedContact.reason || 'Contato'}
                    </span>
                    <h3 className="text-xl font-bold text-foreground">{selectedContact.name}</h3>
                    <p className="text-xs text-muted-foreground">{selectedContact.email}</p>
                    {selectedContact.institution && (
                      <p className="text-xs text-slate-600 mt-0.5">Instituição: {selectedContact.institution}</p>
                    )}
                  </div>

                  <div className="text-right">
                    <span className="text-xs text-muted-foreground block">
                      {formatDate(selectedContact.created_date)}
                    </span>
                    <span className={`inline-block mt-1 px-2 py-0.5 rounded-full text-[11px] font-bold ${
                      selectedContact.status === 'unread' ? 'bg-amber-100 text-amber-800' :
                      selectedContact.status === 'archived' ? 'bg-slate-100 text-slate-700' :
                      'bg-emerald-100 text-emerald-800'
                    }`}>
                      {selectedContact.status === 'unread' ? 'Não lida' :
                       selectedContact.status === 'archived' ? 'Arquivada' : 'Lida'}
                    </span>
                  </div>
                </div>

                {/* Message Content */}
                <div className="bg-secondary/30 rounded-xl p-4 border border-border text-sm text-foreground whitespace-pre-wrap leading-relaxed font-sans min-h-[140px]">
                  {selectedContact.message}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                  <div className="flex items-center gap-2">
                    <a
                      href={`mailto:${selectedContact.email}?subject=${encodeURIComponent(`Re: [PedBox] ${selectedContact.reason || 'Contato'}`)}`}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-primary text-white hover:bg-primary/90 transition-all shadow-xs"
                    >
                      <ExternalLink className="w-3.5 h-3.5" /> Responder por E-mail
                    </a>

                    {selectedContact.status === 'unread' ? (
                      <button
                        onClick={() => handleUpdateContactStatus(selectedContact.id, 'read')}
                        className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-white border border-border text-foreground hover:bg-secondary transition-all"
                      >
                        <Check className="w-3.5 h-3.5 text-emerald-600" /> Marcar como Lida
                      </button>
                    ) : (
                      <button
                        onClick={() => handleUpdateContactStatus(selectedContact.id, 'unread')}
                        className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-white border border-border text-foreground hover:bg-secondary transition-all"
                      >
                        <Mail className="w-3.5 h-3.5 text-amber-600" /> Marcar como Não Lida
                      </button>
                    )}

                    {selectedContact.status !== 'archived' && (
                      <button
                        onClick={() => handleUpdateContactStatus(selectedContact.id, 'archived')}
                        className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-white border border-border text-foreground hover:bg-secondary transition-all"
                      >
                        <Archive className="w-3.5 h-3.5 text-slate-500" /> Arquivar
                      </button>
                    )}
                  </div>

                  <button
                    onClick={() => handleDeleteContact(selectedContact.id)}
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-rose-600 hover:bg-rose-50 transition-all"
                    title="Excluir mensagem permanentemente"
                  >
                    <Trash2 className="w-3.5 h-3.5" /> Excluir
                  </button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      )}

      {/* ─── TAB 3: Status Clínico & Plataforma ─── */}
      {tab === 'health' && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
          {/* Services Health Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* PostgreSQL */}
            <div className="bg-white border border-border rounded-2xl p-5 shadow-sm space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Banco de Dados</span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Conectado
                </span>
              </div>
              <div className="flex items-center gap-2.5 pt-1">
                <Database className="w-5 h-5 text-primary" />
                <p className="text-base font-extrabold text-foreground">PostgreSQL</p>
              </div>
              <p className="text-xs text-muted-foreground">
                Latência de consulta: <span className="font-mono font-bold text-foreground">{health?.database?.latencyMs ?? 1} ms</span>
              </p>
            </div>

            {/* Gemini AI */}
            <div className="bg-white border border-border rounded-2xl p-5 shadow-sm space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Assistente Clínico IA</span>
                <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold ${
                  health?.services?.gemini ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-600'
                }`}>
                  {health?.services?.gemini ? <CheckCircle2 className="w-3 h-3 text-emerald-600" /> : <Clock className="w-3 h-3 text-slate-500" />}
                  {health?.services?.gemini ? 'Ativo' : 'Não configurado'}
                </span>
              </div>
              <div className="flex items-center gap-2.5 pt-1">
                <Sparkles className="w-5 h-5 text-indigo-500" />
                <p className="text-base font-extrabold text-foreground">Google Gemini 2.5</p>
              </div>
              <p className="text-xs text-muted-foreground">
                Suporte a respostas estruturadas e pesquisa bibliográfica.
              </p>
            </div>

            {/* Server Uptime */}
            <div className="bg-white border border-border rounded-2xl p-5 shadow-sm space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Servidor Node.js</span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-sky-100 text-sky-800">
                  <Server className="w-3 h-3 text-sky-600" /> Online
                </span>
              </div>
              <div className="flex items-center gap-2.5 pt-1">
                <Clock className="w-5 h-5 text-sky-500" />
                <p className="text-base font-extrabold text-foreground font-mono">
                  {formatUptime(health?.system?.uptime)}
                </p>
              </div>
              <p className="text-xs text-muted-foreground">
                Versão do Node: <span className="font-mono font-bold text-foreground">{health?.system?.nodeVersion || 'v20.x'}</span>
              </p>
            </div>
          </div>

          {/* Clinical Catalog Detailed Breakdown */}
          <div className="bg-white border border-border rounded-2xl p-6 shadow-sm space-y-6">
            <div>
              <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                <Stethoscope className="w-5 h-5 text-primary" />
                Cobertura do Acervo Clínico Especializado
              </h3>
              <p className="text-xs text-muted-foreground mt-0.5">
                Todas as 59 condutas e 36 calculadoras (48 ferramentas interativas) estão integralmente indexadas no código fonte e acessíveis instantaneamente.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Neonatologia */}
              <div className="border border-border rounded-xl p-4 bg-secondary/20 space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-foreground flex items-center gap-2">
                    <span className="text-base">👶</span> Neonatologia (29 Condutas)
                  </h4>
                  <span className="text-xs font-extrabold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                    100% Completo
                  </span>
                </div>
                <ul className="text-xs text-slate-600 space-y-1.5 list-disc list-inside">
                  <li>Lote 1: Cuidados Básicos & Exame Físico (5 condutas)</li>
                  <li>Lote 2: Infecções Congênitas TORCHS (6 condutas)</li>
                  <li>Lote 3: Malformações & Anomalias Fetais (4 condutas)</li>
                  <li>Lote 4: Respiratório, Asfixia & Sepse Neonatal (6 condutas)</li>
                  <li>Lote 5: Metabolismo & Trato Digestivo (4 condutas)</li>
                  <li>Lote 6: Neurologia & ROP Neonatal (4 condutas)</li>
                </ul>
              </div>

              {/* Cirurgia Pediátrica */}
              <div className="border border-border rounded-xl p-4 bg-secondary/20 space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-foreground flex items-center gap-2">
                    <span className="text-base">🔪</span> Cirurgia Pediátrica (30 Condutas)
                  </h4>
                  <span className="text-xs font-extrabold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                    100% Completo
                  </span>
                </div>
                <ul className="text-xs text-slate-600 space-y-1.5 list-disc list-inside">
                  <li>Patologias Cervicais e Parede Torácica (Cisto tireoglosso, pectus)</li>
                  <li>Hérnia Diafragmática & Anomalias Pulmonares (CPAM, enfisema lobar)</li>
                  <li>Trato Digestivo Alto e Parede Abdominal (Estenose hipertrófica, gastrosquise)</li>
                  <li>Urgências Abdominais (Apendicite aguda, invaginação, má rotação)</li>
                  <li>Urologia Pediátrica & Escroto Agudo (Torção testicular, hipospádia)</li>
                  <li>Tumores Pediátricos, Trauma e Técnica Cirúrgica (Fios cirúrgicos)</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* ─── TAB 4: SEO & Google Integrations ─── */}
      {tab === 'seo' && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
          <form onSubmit={handleSaveSeoSettings} className="space-y-6">
            {/* Header info */}
            <div className="bg-white border border-border rounded-2xl p-6 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                    <Globe className="w-5 h-5 text-primary" />
                    Configurações de SEO & Google Integrations
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    Conecte o PedBox ao Google Search Console e ao Google Analytics (GA4) para monitorar indexação e audiência sem alterar código.
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={savingSettings}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-primary text-white hover:bg-primary/90 transition-all shadow-sm active:scale-95 disabled:opacity-50 shrink-0"
                >
                  <Save className={`w-4 h-4 ${savingSettings ? 'animate-spin' : ''}`} />
                  {savingSettings ? 'Salvando…' : 'Salvar Configurações'}
                </button>
              </div>
            </div>

            {/* Inputs Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Google Search Console */}
              <div className="bg-white border border-border rounded-2xl p-6 shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-xs">
                      GSC
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-foreground">Google Search Console</h4>
                      <p className="text-[11px] text-muted-foreground">Verificação de Propriedade do Domínio</p>
                    </div>
                  </div>

                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                    googleSiteVerification ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-600'
                  }`}>
                    {googleSiteVerification ? 'Configurado' : 'Pendente'}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-foreground block">
                    Código de Verificação (Tag HTML)
                  </label>
                  <input
                    type="text"
                    value={googleSiteVerification}
                    onChange={e => setGoogleSiteVerification(e.target.value)}
                    placeholder="Cole aqui o código ou a tag <meta name='google-site-verification' content='...' />"
                    className="w-full px-3.5 py-2.5 rounded-xl text-xs border border-border bg-secondary/20 focus:outline-none focus:ring-2 focus:ring-primary/20 font-mono"
                  />
                  <p className="text-[11px] text-muted-foreground leading-relaxed">
                    No Search Console, escolha <strong>Tag HTML</strong> como método de verificação e cole a tag ou código acima. O PedBox injeta dinamicamente no cabeçalho.
                  </p>
                </div>

                <a
                  href="https://search.google.com/search-console"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-primary font-bold hover:underline"
                >
                  Abrir Google Search Console <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Google Analytics 4 */}
              <div className="bg-white border border-border rounded-2xl p-6 shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center font-bold text-xs">
                      GA4
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-foreground">Google Analytics 4</h4>
                      <p className="text-[11px] text-muted-foreground">Monitoramento de Tráfego e Engajamento</p>
                    </div>
                  </div>

                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                    googleAnalyticsId ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-600'
                  }`}>
                    {googleAnalyticsId ? 'Ativo' : 'Inativo'}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-foreground block">
                    ID da Métrica (Measurement ID)
                  </label>
                  <input
                    type="text"
                    value={googleAnalyticsId}
                    onChange={e => setGoogleAnalyticsId(e.target.value)}
                    placeholder="Ex: G-XXXXXXXXXX"
                    className="w-full px-3.5 py-2.5 rounded-xl text-xs border border-border bg-secondary/20 focus:outline-none focus:ring-2 focus:ring-primary/20 font-mono"
                  />
                  <p className="text-[11px] text-muted-foreground leading-relaxed">
                    Ao preencher o ID <strong>G-XXXXX</strong>, o script oficial gtag.js é inicializado assincronamente e registra as páginas visitadas pelos médicos.
                  </p>
                </div>

                <a
                  href="https://analytics.google.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-primary font-bold hover:underline"
                >
                  Abrir Google Analytics <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Sitemap & Diagnostics */}
            <div className="bg-white border border-border rounded-2xl p-6 shadow-sm space-y-4">
              <h4 className="text-sm font-bold text-foreground flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Arquivos de Indexação Ativos
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <a
                  href="https://pedbox.app/sitemap.xml"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-secondary/30 border border-border hover:bg-secondary/60 transition-all flex items-center justify-between"
                >
                  <div>
                    <p className="text-xs font-bold text-foreground font-mono">sitemap.xml</p>
                    <p className="text-[11px] text-muted-foreground">34 URLs clínicas indexadas</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-primary" />
                </a>

                <a
                  href="https://pedbox.app/robots.txt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-secondary/30 border border-border hover:bg-secondary/60 transition-all flex items-center justify-between"
                >
                  <div>
                    <p className="text-xs font-bold text-foreground font-mono">robots.txt</p>
                    <p className="text-[11px] text-muted-foreground">Diretrizes para o Googlebot</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-primary" />
                </a>

                <a
                  href="https://search.google.com/test/rich-results?url=https%3A%2F%2Fpedbox.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-secondary/30 border border-border hover:bg-secondary/60 transition-all flex items-center justify-between"
                >
                  <div>
                    <p className="text-xs font-bold text-foreground">Resultados Avançados</p>
                    <p className="text-[11px] text-muted-foreground">Validador de Schema do Google</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-primary" />
                </a>
              </div>
            </div>
          </form>
        </motion.div>
      )}
    </div>
  );
}
