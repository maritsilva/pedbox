import React, { useEffect, useState } from 'react';
import { useSearchParams, Link, useNavigate } from 'react-router-dom';
import { services, safePath } from '@/api/services';
import PedBoxLogo from '@/components/brand/PedBoxLogo';
import { Mail, Lock, User, Eye, EyeOff, ArrowRight, AlertCircle, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function Login() {
  const [mode, setMode] = useState('login'); // 'login' | 'register'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [status, setStatus] = useState(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [busy, setBusy] = useState(false);

  const [params] = useSearchParams();
  const navigate = useNavigate();
  const returnTo = safePath(params.get('returnTo'));

  useEffect(() => {
    services.auth.status().then(setStatus).catch(() => {});
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setBusy(true);

    try {
      if (mode === 'register') {
        if (!fullName.trim()) {
          throw new Error('Por favor, informe seu nome completo.');
        }
        if (!email.trim() || !email.includes('@')) {
          throw new Error('Por favor, informe um endereço de e-mail válido.');
        }
        if (password.length < 6) {
          throw new Error('A senha deve ter pelo menos 6 caracteres.');
        }
        await services.auth.register({
          email: email.trim(),
          password,
          full_name: fullName.trim(),
        });
        setSuccess('Conta criada com sucesso! Redirecionando...');
      } else {
        if (!email.trim() || !password) {
          throw new Error('Por favor, preencha seu e-mail e senha.');
        }
        await services.auth.login({
          email: email.trim(),
          password,
        });
        setSuccess('Login realizado! Redirecionando...');
      }

      window.dispatchEvent(new Event('pedbox:session-started'));
      setTimeout(() => {
        window.location.assign(returnTo);
      }, 500);
    } catch (err) {
      setError(err.message || 'Erro ao processar a autenticação.');
      setBusy(false);
    }
  };

  const devLogin = async () => {
    setBusy(true);
    setError('');
    try {
      await services.auth.devLogin();
      window.dispatchEvent(new Event('pedbox:session-started'));
      window.location.assign(returnTo);
    } catch (e) {
      setError(e.message);
      setBusy(false);
    }
  };

  const handleGoogleLogin = () => {
    // If standard OIDC is configured, redirect to the endpoint
    if (status?.configured) {
      window.location.assign('/api/v1/auth/login?returnTo=' + encodeURIComponent(returnTo));
    } else {
      setError('Login direto com Google requer configuração do Client ID no servidor. Você pode criar sua conta com e-mail e senha acima.');
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-md bg-white border border-slate-200/90 rounded-3xl shadow-xl p-6 sm:p-9 space-y-6">
        {/* LOGO & BRAND */}
        <div className="text-center space-y-2">
          <Link to="/" className="inline-block hover:opacity-90 transition-opacity">
            <PedBoxLogo className="h-10 mx-auto" />
          </Link>
          <p className="text-xs font-bold uppercase tracking-wider text-brand-teal pt-1">
            Espaço Clínico PedBox
          </p>
          <h1 className="text-2xl font-display font-extrabold text-brand-navy">
            {mode === 'login' ? 'Acesse sua conta' : 'Crie sua conta gratuita'}
          </h1>
          <p className="text-xs text-slate-500 leading-relaxed max-w-xs mx-auto">
            Salve seus medicamentos favoritos, acerte doses com rapidez e organize suas anotações clínicas.
          </p>
        </div>

        {/* MODE TOGGLE (Entrar / Criar Conta) */}
        <div className="grid grid-cols-2 p-1 bg-slate-100 rounded-2xl border border-slate-200 text-xs font-bold">
          <button
            type="button"
            onClick={() => {
              setMode('login');
              setError('');
            }}
            className={`py-2 rounded-xl transition-all cursor-pointer ${
              mode === 'login'
                ? 'bg-white text-brand-navy shadow-xs font-extrabold'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            Entrar
          </button>
          <button
            type="button"
            onClick={() => {
              setMode('register');
              setError('');
            }}
            className={`py-2 rounded-xl transition-all cursor-pointer ${
              mode === 'register'
                ? 'bg-white text-brand-navy shadow-xs font-extrabold'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            Criar conta
          </button>
        </div>

        {/* ALERTS */}
        {error && (
          <div role="alert" className="p-3.5 bg-rose-50 border border-rose-200 rounded-2xl text-xs text-rose-800 flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
            <span className="leading-relaxed">{error}</span>
          </div>
        )}

        {success && (
          <div role="status" className="p-3.5 bg-teal-50 border border-teal-200 rounded-2xl text-xs text-teal-800 flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
            <span className="leading-relaxed font-semibold">{success}</span>
          </div>
        )}

        {/* AUTH FORM */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === 'register' && (
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-slate-700">Nome completo</label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  required
                  placeholder="Dra. Camila Rocha"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full pl-10 pr-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-brand-teal focus:ring-3 focus:ring-brand-teal/15 focus:bg-white transition-all text-slate-800"
                />
              </div>
            </div>
          )}

          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-slate-700">E-mail</label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                required
                placeholder="seuemail@exemplo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-brand-teal focus:ring-3 focus:ring-brand-teal/15 focus:bg-white transition-all text-slate-800"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <label className="block text-xs font-bold text-slate-700">Senha</label>
              {mode === 'login' && (
                <span className="text-[11px] text-slate-400">Mínimo 6 caracteres</span>
              )}
            </div>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type={showPassword ? 'text' : 'password'}
                required
                minLength={6}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-10 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-brand-teal focus:ring-3 focus:ring-brand-teal/15 focus:bg-white transition-all text-slate-800"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer p-1"
                title={showPassword ? 'Ocultar senha' : 'Ver senha'}
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={busy}
            className="w-full mt-2 py-3 px-4 rounded-xl bg-brand-navy hover:bg-slate-800 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
          >
            {busy ? (
              <span>Processando...</span>
            ) : mode === 'login' ? (
              <>
                <span>Entrar no PedBox</span>
                <ArrowRight className="w-4 h-4" />
              </>
            ) : (
              <>
                <span>Cadastrar e Começar</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        {/* DIVIDER */}
        <div className="relative flex items-center justify-center">
          <div className="border-t border-slate-200 w-full" />
          <span className="bg-white px-3 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
            ou
          </span>
        </div>

        {/* GOOGLE SIGN-IN BUTTON */}
        <button
          type="button"
          onClick={handleGoogleLogin}
          className="w-full py-2.5 px-4 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 font-semibold text-xs flex items-center justify-center gap-3 transition-colors shadow-2xs cursor-pointer"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
            />
          </svg>
          <span>Continuar com o Google</span>
        </button>

        {/* DEV LOGIN */}
        {status?.development && (
          <button
            type="button"
            disabled={busy}
            onClick={devLogin}
            className="w-full py-2 px-3 rounded-xl border border-dashed border-slate-300 text-slate-500 hover:text-slate-800 text-[11px] font-semibold transition-colors"
          >
            Entrar como Desenvolvedor Local
          </button>
        )}

        {/* FOOTER LINKS */}
        <div className="pt-2 text-center">
          <Link
            to={returnTo || '/'}
            className="text-xs font-semibold text-slate-500 hover:text-brand-navy transition-colors"
          >
            Continuar sem entrar (acesso público)
          </Link>
        </div>
      </div>
    </main>
  );
}
