import React, { useState } from 'react';
import { WifiOff, X, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function OfflineBanner() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: -48, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -48, opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="sticky top-0 z-[60] w-full bg-amber-500 text-white px-4 py-2.5 flex items-center gap-3 shadow-md"
      >
        <WifiOff className="w-4 h-4 flex-shrink-0" />
        <div className="flex-1 min-w-0">
          <p className="text-xs font-bold leading-tight">Você está offline</p>
          <p className="text-[11px] text-amber-100 leading-tight hidden sm:block">
            Protocolos, condutas e ferramentas já acessados ficam disponíveis localmente.
          </p>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <span className="hidden sm:flex items-center gap-1 text-[10px] font-semibold bg-amber-600/60 px-2 py-0.5 rounded-full">
            <Info className="w-3 h-3" /> Modo Offline
          </span>
          <button
            onClick={() => setDismissed(true)}
            className="p-1 rounded-lg hover:bg-amber-600/40 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}