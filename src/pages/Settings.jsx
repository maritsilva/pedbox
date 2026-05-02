import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { base44 } from '@/api/base44Client';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { AlertTriangle, LogOut, ChevronLeft } from 'lucide-react';

export default function Settings() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const me = await base44.auth.me();
        setUser(me);
      } catch (error) {
        navigate('/');
      } finally {
        setLoading(false);
      }
    };
    loadUser();
  }, [navigate]);

  const handleDeleteAccount = async () => {
    setDeleting(true);
    try {
      // Call delete endpoint or function
      await base44.asServiceRole.functions.invoke('deleteUserAccount', {});
      await base44.auth.logout('/');
    } catch (error) {
      console.error('Error deleting account:', error);
      setDeleting(false);
    }
  };

  const handleLogout = async () => {
    await base44.auth.logout('/');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-muted-foreground">Carregando...</div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="min-h-screen bg-background"
    >
      {/* Mobile Header */}
      <div className="md:hidden sticky top-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border-b border-border">
        <div className="flex items-center gap-3 px-4 h-12">
          <button
            onClick={() => navigate(-1)}
            className="p-2 rounded-lg hover:bg-secondary select-none"
            style={{ WebkitTouchCallout: 'none', userSelect: 'none' }}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <h1 className="text-lg font-bold">Configurações</h1>
        </div>
      </div>

      {/* Desktop Header */}
      <div className="hidden md:block px-6 py-8">
        <h1 className="text-3xl font-bold">Configurações</h1>
      </div>

      <div className="max-w-2xl mx-auto px-4 md:px-6 py-6 space-y-6">
        {/* User Info */}
        {user && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white dark:bg-slate-800 rounded-2xl border border-border p-6"
          >
            <h2 className="text-lg font-bold mb-4">Informações da Conta</h2>
            <div className="space-y-3">
              <div>
                <p className="text-xs text-muted-foreground">Email</p>
                <p className="text-sm font-semibold">{user.email}</p>
              </div>
              {user.full_name && (
                <div>
                  <p className="text-xs text-muted-foreground">Nome</p>
                  <p className="text-sm font-semibold">{user.full_name}</p>
                </div>
              )}
              {user.role && (
                <div>
                  <p className="text-xs text-muted-foreground">Papel</p>
                  <p className="text-sm font-semibold capitalize">{user.role}</p>
                </div>
              )}
            </div>
          </motion.div>
        )}

        {/* Logout */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Button
            onClick={handleLogout}
            className="w-full bg-primary hover:bg-primary/90 text-white flex items-center gap-2 select-none"
            style={{ WebkitTouchCallout: 'none', userSelect: 'none' }}
          >
            <LogOut className="w-4 h-4" />
            Sair
          </Button>
        </motion.div>

        {/* Delete Account */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-red-50 dark:bg-red-950/20 rounded-2xl border border-red-200 dark:border-red-800 p-6"
        >
          <div className="flex items-start gap-3 mb-4">
            <AlertTriangle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-red-900 dark:text-red-100">Zona de Perigo</h3>
              <p className="text-sm text-red-800 dark:text-red-200 mt-1">Esta ação é permanente e não pode ser desfeita.</p>
            </div>
          </div>

          {!showConfirm ? (
            <Button
              onClick={() => setShowConfirm(true)}
              className="w-full bg-red-600 hover:bg-red-700 text-white select-none"
              style={{ WebkitTouchCallout: 'none', userSelect: 'none' }}
            >
              Deletar Minha Conta
            </Button>
          ) : (
            <div className="space-y-3">
              <p className="text-sm font-semibold text-red-900 dark:text-red-100">
                Tem certeza? Todos seus dados serão apagados permanentemente.
              </p>
              <div className="flex gap-2">
                <Button
                  onClick={() => setShowConfirm(false)}
                  variant="outline"
                  className="flex-1 select-none"
                  style={{ WebkitTouchCallout: 'none', userSelect: 'none' }}
                >
                  Cancelar
                </Button>
                <Button
                  onClick={handleDeleteAccount}
                  disabled={deleting}
                  className="flex-1 bg-red-600 hover:bg-red-700 text-white select-none"
                  style={{ WebkitTouchCallout: 'none', userSelect: 'none' }}
                >
                  {deleting ? 'Deletando...' : 'Deletar Permanentemente'}
                </Button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}