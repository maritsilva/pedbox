const root = '/api/v1';

/** @param {string} path @param {{body?: any, method?: string, signal?: AbortSignal}} [options] */
export async function request(path, { body, method = 'GET', signal } = {}) {
  const form = body instanceof FormData;
  const res = await fetch(root + path, { method, credentials: 'same-origin', signal,
    headers: body && !form ? { 'Content-Type': 'application/json' } : {},
    body: body ? form ? body : JSON.stringify(body) : undefined });
  const data = await res.json();
  if (!res.ok) {
    if (res.status === 401) window.dispatchEvent(new Event('pedbox:session-ended'));
    throw Object.assign(new Error(data.error || 'Não foi possível concluir a solicitação.'), { status: res.status });
  }
  return data;
}
function collection(path) {
  const list = async (sort = '-created_date', filter = {}) => {
    const items = [];
    let offset = 0;
    do {
      const query = new URLSearchParams({ sort, filter: JSON.stringify(filter), limit: '200', offset: String(offset) });
      const page = await request(path + '?' + query);
      items.push(...page.items);
      offset = page.nextOffset;
    } while (offset !== null);
    return items;
  };
  return { list, filter: (filter, sort) => list(sort, filter),
    create: body => request(path, { method: 'POST', body }),
    update: (id, body) => request(path + '/' + encodeURIComponent(id), { method: 'PATCH', body }),
    delete: id => request(path + '/' + encodeURIComponent(id), { method: 'DELETE' }) };
}
export function safePath(value) {
  try {
    const url = new URL(value || '/', window.location.origin);
    return url.origin === window.location.origin ? url.pathname + url.search + url.hash : '/';
  } catch { return '/'; }
}
export const services = {
  auth: {
    me: () => request('/me'),
    status: () => request('/auth/status'),
    login: (body) => request('/auth/login', { method: 'POST', body }),
    register: (body) => request('/auth/register', { method: 'POST', body }),
    googleVerify: (credential) => request('/auth/google/verify', { method: 'POST', body: { credential } }),
    devLogin: () => request('/auth/dev-login', { method: 'POST' }),
    isAuthenticated: async () => { try { await request('/me'); return true; } catch (e) { if (e.status === 401) return false; throw e; } },
    redirectToLogin: (returnTo = window.location.href) => { window.location.assign('/login?returnTo=' + encodeURIComponent(safePath(returnTo))); },
    logout: async (returnTo = '/') => {
      await request('/logout', { method: 'POST' });
      window.dispatchEvent(new Event('pedbox:session-ended'));
      window.location.assign(safePath(returnTo));
    },
    deleteAccount: async () => { await request('/me', { method: 'DELETE' }); window.dispatchEvent(new Event('pedbox:session-ended')); },
    updateProfile: (body) => request('/me', { method: 'PATCH', body }),
  },
  favorites: { ...collection('/favorites'), remove: (tipo, chave) => request('/favorites', { method: 'DELETE', body: { tipo, chave } }) },
  notes: collection('/notes'), categories: collection('/categories'), contents: collection('/contents'), libraryLinks: collection('/library-links'), userLinks: collection('/user-links'),
  uploads: { create: ({ file }) => { const body = new FormData(); body.append('file', file); return request('/uploads', { method: 'POST', body }); } },
  contact: { send: body => request('/contact', { method: 'POST', body }) },
  admin: {
    getAnalytics: (days = 30) => request('/admin/analytics?days=' + encodeURIComponent(days)),
    getContacts: (status = 'all') => request('/admin/contacts?status=' + encodeURIComponent(status)),
    updateContact: (id, body) => request('/admin/contacts/' + encodeURIComponent(id), { method: 'PATCH', body }),
    deleteContact: (id) => request('/admin/contacts/' + encodeURIComponent(id), { method: 'DELETE' }),
    getHealth: () => request('/admin/health'),
    getSettings: () => request('/admin/settings'),
    updateSettings: (body) => request('/admin/settings', { method: 'PATCH', body }),
  },
  publicSeo: {
    getSettings: () => request('/public/seo-settings'),
  },
  analytics: {
    hit: (path, category = 'geral', device = 'desktop') => request('/analytics/hit', { method: 'POST', body: { path, category, device } }),
  },
  research: {
    status: () => request('/research/status'), list: () => request('/conversations'),
    create: () => request('/conversations', { method: 'POST' }),
    get: id => request('/conversations/' + encodeURIComponent(id)),
    async send(id, content, onUpdate, signal, requestId = crypto.randomUUID()) {
      const res = await fetch(root + '/conversations/' + encodeURIComponent(id) + '/messages', {
        method: 'POST', credentials: 'same-origin', signal, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ content, requestId }),
      });
      if (!res.ok) throw new Error((await res.json()).error);
      if (!res.headers.get('Content-Type')?.includes('text/event-stream')) { onUpdate(await res.json()); return; }
      const reader = res.body.getReader(), decoder = new TextDecoder();
      let buffer = '', completed = false;
      try {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          buffer += decoder.decode(value, { stream: true });
          let end;
          while ((end = buffer.indexOf('\n\n')) >= 0) {
            const event = buffer.slice(0, end); buffer = buffer.slice(end + 2);
            if (!event.startsWith('data: ')) continue;
            const data = JSON.parse(event.slice(6));
            if (data.status === 'error') throw new Error(data.error);
            if (data.status === 'completed') completed = true;
            onUpdate(data);
          }
        }
        if (!completed) throw new Error('Conexão interrompida. Tente novamente.');
      } finally { await reader.cancel(); }
    },
  },
};
