import { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { services, safePath } from '@/api/services';

export default function Login() {
  const [status, setStatus] = useState(null), [error, setError] = useState(''), [busy, setBusy] = useState(false);
  const [params] = useSearchParams();
  const returnTo = safePath(params.get('returnTo'));
  useEffect(() => { services.auth.status().then(setStatus).catch(e => setError(e.message)); }, []);
  const devLogin = async () => {
    setBusy(true);
    try { await services.auth.devLogin(); window.location.assign(returnTo); }
    catch (e) { setError(e.message); setBusy(false); }
  };
  return <main className="login-page min-h-screen grid place-items-center p-6">
    <section className="login-card w-full max-w-md p-8 sm:p-10 space-y-5">
      <Link to="/" aria-label="PedBox — início"><img src="/assets/pedbox-logo.png" alt="PedBox" className="h-9 mb-8" /></Link>
      <p className="eyebrow">Seu espaço de trabalho</p>
      <h1 className="text-3xl font-bold tracking-tight">Entrar no PedBox</h1>
      <p>Salve favoritos, organize anotações e acesse a SophIA.</p>
      {error && <p role="alert" className="text-red-700">{error}</p>}
      {!status && !error && <p>Carregando…</p>}
      {status?.configured && <a className="block rounded-lg bg-blue-700 p-3 text-white text-center" href={'/api/v1/auth/login?returnTo=' + encodeURIComponent(returnTo)}>Continuar com sua conta</a>}
      {status?.development && <button disabled={busy} className="w-full rounded-lg bg-blue-700 p-3 text-white" onClick={devLogin}>{busy ? 'Entrando…' : 'Entrar no ambiente local'}</button>}
      {status && !status.configured && !status.development && <p>O login ainda não está disponível. As ferramentas públicas continuam acessíveis.</p>}
      <Link to="/" className="block text-blue-700">Voltar às ferramentas</Link>
    </section>
  </main>;
}
