import React, { useState, useEffect } from 'react';
import { useAuth } from '@/lib/AuthContext';
import { services } from '@/api/services';
import PageHeader from '@/components/PageHeader';
import {
  User,
  Mail,
  Lock,
  KeyRound,
  Eye,
  EyeOff,
  CheckCircle2,
  AlertCircle,
  LogOut,
} from 'lucide-react';

export default function Perfil() {
  const { user, refreshUser } = useAuth();

  // Personal data state
  const [fullName, setFullName] = useState(user?.full_name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [personalBusy, setPersonalBusy] = useState(false);
  const [personalMsg, setPersonalMsg] = useState({ text: '', type: '' });

  // Password state
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [passwordBusy, setPasswordBusy] = useState(false);
  const [passwordMsg, setPasswordMsg] = useState({ text: '', type: '' });

  useEffect(() => {
    if (user) {
      setFullName(user.full_name || '');
      setEmail(user.email || '');
    }
  }, [user]);

  const handleUpdatePersonal = async (e) => {
    e.preventDefault();
    setPersonalMsg({ text: '', type: '' });

    if (!fullName.trim()) {
      setPersonalMsg({ text: 'O nome não pode estar em branco.', type: 'error' });
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setPersonalMsg({ text: 'Informe um endereço de e-mail válido.', type: 'error' });
      return;
    }

    setPersonalBusy(true);
    try {
      await services.auth.updateProfile({
        full_name: fullName.trim(),
        email: email.trim().toLowerCase(),
      });
      setPersonalMsg({ text: 'Dados cadastrais atualizados com sucesso!', type: 'success' });
      if (typeof refreshUser === 'function') refreshUser();
    } catch (err) {
      setPersonalMsg({ text: err.message || 'Erro ao atualizar dados.', type: 'error' });
    } finally {
      setPersonalBusy(false);
    }
  };

  const handleUpdatePassword = async (e) => {
    e.preventDefault();
    setPasswordMsg({ text: '', type: '' });

    if (!newPassword || newPassword.length < 6) {
      setPasswordMsg({ text: 'A nova senha deve ter no mínimo 6 caracteres.', type: 'error' });
      return;
    }
    if (newPassword !== confirmPassword) {
      setPasswordMsg({ text: 'A confirmação de senha não confere.', type: 'error' });
      return;
    }

    setPasswordBusy(true);
    try {
      await services.auth.updateProfile({
        current_password: currentPassword,
        new_password: newPassword,
      });
      setPasswordMsg({ text: 'Senha alterada com sucesso!', type: 'success' });
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
    } catch (err) {
      setPasswordMsg({ text: err.message || 'Erro ao alterar senha.', type: 'error' });
    } finally {
      setPasswordBusy(false);
    }
  };

  const handleLogout = () => {
    services.auth.logout();
  };

  const isMasterAdmin = user?.role === 'admin';

  return (
    <div className="clinical-page max-w-4xl mx-auto space-y-8">
      {/* ── HEADER ── */}
      <PageHeader
        kind="profile"
        eyebrow="Configurações de Conta"
        title="Meu Perfil"
        description="Atualize seu nome profissional, e-mail de acesso e senha de segurança."
      />

      {/* ── USER OVERVIEW CARD ── */}
      <div className="bg-white border border-slate-200/90 rounded-3xl p-6 shadow-2xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-navy to-brand-blue flex items-center justify-center text-white text-xl font-bold shadow-xs">
            {user?.full_name?.charAt(0).toUpperCase() || 'U'}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-display font-extrabold text-brand-navy">
                {user?.full_name || 'Profissional de Saúde'}
              </h2>
              {isMasterAdmin && (
                <span className="px-2 py-0.5 rounded-md bg-amber-100 text-amber-800 text-[10px] font-extrabold uppercase tracking-wider">
                  Administrador
                </span>
              )}
            </div>
            <p className="text-xs text-slate-500 font-medium">{user?.email}</p>
          </div>
        </div>

        <button
          type="button"
          onClick={handleLogout}
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border border-slate-200 text-slate-600 hover:text-rose-600 hover:border-rose-200 hover:bg-rose-50/50 text-xs font-semibold transition-colors cursor-pointer"
        >
          <LogOut className="w-3.5 h-3.5" />
          <span>Sair da conta</span>
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-6 items-start">
        {/* ── SECTION 1: PERSONAL DATA ── */}
        <section className="bg-white border border-slate-200/90 rounded-3xl p-6 shadow-2xs space-y-5">
          <div className="flex items-center gap-2.5 pb-2 border-b border-slate-100">
            <div className="p-2 rounded-xl bg-teal-50 text-brand-teal">
              <User className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-brand-navy">Dados Pessoais</h3>
              <p className="text-[11px] text-slate-400">Nome de exibição e e-mail</p>
            </div>
          </div>

          {personalMsg.text && (
            <div
              className={`p-3 rounded-xl text-xs flex items-start gap-2 ${
                personalMsg.type === 'success'
                  ? 'bg-teal-50 border border-teal-200 text-teal-800'
                  : 'bg-rose-50 border border-rose-200 text-rose-800'
              }`}
            >
              {personalMsg.type === 'success' ? (
                <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
              ) : (
                <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
              )}
              <span>{personalMsg.text}</span>
            </div>
          )}

          <form onSubmit={handleUpdatePersonal} className="space-y-4">
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-slate-700">Nome Completo</label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full pl-10 pr-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-brand-teal focus:ring-3 focus:ring-brand-teal/15 focus:bg-white transition-all"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-slate-700">E-mail de Acesso</label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-brand-teal focus:ring-3 focus:ring-brand-teal/15 focus:bg-white transition-all"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={personalBusy}
              className="w-full py-2.5 px-4 rounded-xl bg-brand-navy hover:bg-slate-800 text-white font-bold text-xs shadow-xs transition-colors cursor-pointer disabled:opacity-60"
            >
              {personalBusy ? 'Salvando...' : 'Salvar Alterações'}
            </button>
          </form>
        </section>

        {/* ── SECTION 2: PASSWORD ── */}
        <section className="bg-white border border-slate-200/90 rounded-3xl p-6 shadow-2xs space-y-5">
          <div className="flex items-center gap-2.5 pb-2 border-b border-slate-100">
            <div className="p-2 rounded-xl bg-indigo-50 text-indigo-600">
              <KeyRound className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-brand-navy">Segurança & Senha</h3>
              <p className="text-[11px] text-slate-400">Altere sua senha de login</p>
            </div>
          </div>

          {passwordMsg.text && (
            <div
              className={`p-3 rounded-xl text-xs flex items-start gap-2 ${
                passwordMsg.type === 'success'
                  ? 'bg-teal-50 border border-teal-200 text-teal-800'
                  : 'bg-rose-50 border border-rose-200 text-rose-800'
              }`}
            >
              {passwordMsg.type === 'success' ? (
                <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
              ) : (
                <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
              )}
              <span>{passwordMsg.text}</span>
            </div>
          )}

          <form onSubmit={handleUpdatePassword} className="space-y-4">
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-slate-700">Senha Atual</label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type={showCurrentPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  className="w-full pl-10 pr-10 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-brand-teal focus:ring-3 focus:ring-brand-teal/15 focus:bg-white transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer p-1"
                >
                  {showCurrentPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-slate-700">Nova Senha</label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type={showNewPassword ? 'text' : 'password'}
                  required
                  minLength={6}
                  placeholder="Mínimo 6 caracteres"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full pl-10 pr-10 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-brand-teal focus:ring-3 focus:ring-brand-teal/15 focus:bg-white transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer p-1"
                >
                  {showNewPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-slate-700">Confirmar Nova Senha</label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type={showNewPassword ? 'text' : 'password'}
                  required
                  minLength={6}
                  placeholder="Repita a nova senha"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full pl-10 pr-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-brand-teal focus:ring-3 focus:ring-brand-teal/15 focus:bg-white transition-all"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={passwordBusy}
              className="w-full py-2.5 px-4 rounded-xl bg-brand-navy hover:bg-slate-800 text-white font-bold text-xs shadow-xs transition-colors cursor-pointer disabled:opacity-60"
            >
              {passwordBusy ? 'Alterando...' : 'Alterar Senha'}
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}
