import { toast } from 'sonner';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { services } from '@/api/services';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { AlertTriangle, LogOut, FolderOpen, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Settings() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [driveFolderUrl, setDriveFolderUrl] = useState('');
  const [savingDrive, setSavingDrive] = useState(false);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const me = await services.auth.me();
        setUser(me);
        setDriveFolderUrl(me.drive_folder_url || '');
      } catch {
        navigate('/');
      } finally {
        setLoading(false);
      }
    };
    loadUser();
  }, [navigate]);

  const handleSaveDriveFolder = async (e) => {
    e.preventDefault();
    setSavingDrive(true);
    try {
      const res = await services.auth.updateProfile({ drive_folder_url: driveFolderUrl.trim() });
      if (res?.user) setUser(res.user);
      toast.success('Pasta do Google Drive vinculada salva nas suas configurações!');
    } catch (err) {
      toast.error(err.message || 'Erro ao salvar pasta.');
    } finally {
      setSavingDrive(false);
    }
  };

  const handleDeleteAccount = async () => {
    setDeleting(true);
    try {
      // Call delete endpoint or function
      await services.auth.deleteAccount();
      await services.auth.logout('/');
    } catch (error) {
      toast.error(error.message);
      setDeleting(false);
    }
  };

  const handleLogout = async () => {
    await services.auth.logout('/');
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
      <header className="clinical-page page-heading !pb-5 !mb-0">
        <p className="eyebrow">Sua conta</p>
        <h1>Configurações</h1>
        <p>Gerencie seu acesso e suas preferências.</p>
      </header>

      <div className="page-surface max-w-2xl mx-auto px-4 md:px-6 py-6 space-y-6">
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

        {/* Pasta do Google Drive Vinculada */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="bg-white dark:bg-slate-800 rounded-2xl border border-border p-6 space-y-4"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-xl bg-purple-50 text-purple-700">
                <FolderOpen className="w-4 h-4" />
              </div>
              <h2 className="text-base font-bold">Pasta do Google Drive Vinculada</h2>
            </div>
            <Link
              to="/biblioteca?tab=documentos"
              className="text-xs font-semibold text-brand-navy hover:text-brand-teal flex items-center gap-1"
            >
              <span>Ver Documentos</span>
              <ExternalLink className="w-3 h-3" />
            </Link>
          </div>

          <p className="text-xs text-muted-foreground leading-relaxed">
            Link da pasta oficial compartilhada da sua equipe ou serviço no Google Drive. Salvo nas configurações da sua conta e sincronizado com a aba <strong>Biblioteca &gt; Documentos</strong>.
          </p>

          <form onSubmit={handleSaveDriveFolder} className="space-y-3">
            <input
              type="url"
              placeholder="https://drive.google.com/drive/folders/..."
              value={driveFolderUrl}
              onChange={(e) => setDriveFolderUrl(e.target.value)}
              className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 dark:text-slate-100 font-mono focus:outline-none focus:ring-2 focus:ring-brand-teal"
            />
            <div className="flex gap-2">
              <Button
                type="submit"
                disabled={savingDrive}
                className="bg-brand-navy hover:bg-slate-800 text-white text-xs font-bold px-4 py-2 rounded-xl"
              >
                {savingDrive ? 'Salvando...' : 'Salvar Pasta nas Configurações'}
              </Button>
            </div>
          </form>
        </motion.div>

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
                Tem certeza? Seu perfil, favoritos, anotações e conversas no PedBox serão apagados. Sua conta no provedor de login permanece disponível.
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
