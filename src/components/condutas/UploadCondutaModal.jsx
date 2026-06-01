import React, { useState, useRef } from 'react';
import { X, Upload, FileText, Image, AlertTriangle, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { base44 } from '@/api/base44Client';

export default function UploadCondutaModal({ topico, onClose, onContentUpdate }) {
  const [tab, setTab] = useState('md'); // 'md' | 'image'
  const [mdText, setMdText] = useState(topico?.conteudo || '');
  const [uploading, setUploading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const mdFileRef = useRef();
  const imgFileRef = useRef();

  const handleMdFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => setMdText(ev.target.result);
    reader.readAsText(file);
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setUploading(true);
    try {
      const { file_url } = await base44.integrations.Core.UploadFile({ file });
      setImageUrl(file_url);
      // Insert image markdown at cursor or end
      const imgMd = `\n![${file.name}](${file_url})\n`;
      setMdText(prev => prev + imgMd);
    } finally {
      setUploading(false);
    }
  };

  const handleSave = () => {
    onContentUpdate(mdText);
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      onClose();
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 40 }}
        className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-border flex-shrink-0">
          <div>
            <p className="text-xs text-muted-foreground font-semibold uppercase tracking-widest">Editar Conduta</p>
            <h2 className="text-base font-bold text-foreground truncate">{topico?.label}</h2>
          </div>
          <button onClick={onClose} className="p-2 rounded-lg hover:bg-secondary transition-colors">
            <X className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 px-5 pt-4 flex-shrink-0">
          <button
            onClick={() => setTab('md')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all ${tab === 'md' ? 'bg-primary text-white' : 'bg-secondary text-muted-foreground hover:text-foreground'}`}
          >
            <FileText className="w-4 h-4" /> Markdown
          </button>
          <button
            onClick={() => setTab('image')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all ${tab === 'image' ? 'bg-primary text-white' : 'bg-secondary text-muted-foreground hover:text-foreground'}`}
          >
            <Image className="w-4 h-4" /> Imagens
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto p-5 space-y-4">
          {tab === 'md' && (
            <>
              {/* Upload .md file */}
              <div>
                <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-2 block">
                  Carregar arquivo .md
                </label>
                <button
                  onClick={() => mdFileRef.current?.click()}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl border-2 border-dashed border-border hover:border-primary hover:bg-primary/5 transition-all text-sm text-muted-foreground hover:text-primary font-medium w-full justify-center"
                >
                  <Upload className="w-4 h-4" />
                  Clique para carregar arquivo .md
                </button>
                <input
                  ref={mdFileRef}
                  type="file"
                  accept=".md,.txt"
                  onChange={handleMdFileUpload}
                  className="hidden"
                />
              </div>

              {/* Text editor */}
              <div>
                <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-2 block">
                  Editar conteúdo (Markdown)
                </label>
                <textarea
                  value={mdText}
                  onChange={(e) => setMdText(e.target.value)}
                  className="w-full h-64 border border-border rounded-xl p-3 text-xs font-mono focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none leading-relaxed bg-gray-50"
                  placeholder="## Título&#10;&#10;Digite o conteúdo em Markdown...&#10;&#10;- Item 1&#10;- Item 2&#10;&#10;| Coluna 1 | Coluna 2 |&#10;|---|---|&#10;| Valor | Valor |"
                />
                <p className="text-xs text-muted-foreground mt-1">{mdText.length} caracteres</p>
              </div>
            </>
          )}

          {tab === 'image' && (
            <>
              <div>
                <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-2 block">
                  Adicionar imagem ao conteúdo
                </label>
                <button
                  onClick={() => imgFileRef.current?.click()}
                  disabled={uploading}
                  className="flex flex-col items-center gap-2 p-8 rounded-xl border-2 border-dashed border-border hover:border-primary hover:bg-primary/5 transition-all text-sm text-muted-foreground hover:text-primary font-medium w-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {uploading ? (
                    <>
                      <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                      <span>Enviando imagem...</span>
                    </>
                  ) : (
                    <>
                      <Image className="w-8 h-8" />
                      <span>Clique para enviar imagem (JPG, PNG, GIF, WEBP)</span>
                      <span className="text-xs text-muted-foreground">A imagem será inserida automaticamente no Markdown</span>
                    </>
                  )}
                </button>
                <input
                  ref={imgFileRef}
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </div>

              {imageUrl && (
                <div className="bg-green-50 border border-green-200 rounded-xl p-3">
                  <p className="text-xs font-bold text-green-700 mb-2 flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" /> Imagem carregada com sucesso!
                  </p>
                  <img src={imageUrl} alt="uploaded" className="max-h-40 rounded-lg border border-border" />
                  <p className="text-xs text-muted-foreground mt-2 break-all">{imageUrl}</p>
                </div>
              )}

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-3">
                <p className="text-xs text-amber-800 flex items-start gap-2">
                  <AlertTriangle className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
                  A imagem é inserida no Markdown da aba "Markdown". Vá até lá para revisar e salvar.
                </p>
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="flex gap-3 p-5 border-t border-border flex-shrink-0">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-2.5 rounded-xl border border-border text-sm font-semibold text-muted-foreground hover:bg-secondary transition-all"
          >
            Cancelar
          </button>
          <button
            onClick={handleSave}
            disabled={success}
            className={`flex-1 px-4 py-2.5 rounded-xl text-sm font-bold text-white transition-all flex items-center justify-center gap-2 ${success ? 'bg-green-500' : 'bg-primary hover:bg-primary/90'}`}
          >
            {success ? <><Check className="w-4 h-4" /> Salvo!</> : 'Salvar Conteúdo'}
          </button>
        </div>
      </motion.div>
    </div>
  );
}