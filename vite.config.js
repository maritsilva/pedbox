import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url';

const antimicrobials = [
  'Penicilinas', 'Carbapenemos', 'Quinolonas', 'Sulfonamidas', 'Macrolideos',
  'Glicopeptideos', 'OutrosAntibacterianos', 'OutrosBacterianos', 'Antimicobacterianos',
  'Antifungicos', 'Equinocandinas', 'OutrosAntifungicos', 'Antivirais', 'AntiHepatite',
  'Antirretrovirais', 'Antimalaricos', 'Antiparasitarios', 'Probioticos'
];

const criticalDrugs = [
  'AntiHipertensivos', 'Anticonvulsivantes', 'Broncodilatadores', 'Corticosteroides',
  'Diureticos', 'Emergencia', 'EnxaquecaAINEs', 'Estatinas', 'ExpansoresColoides',
  'HipertensaoPulmonar', 'Hipotensao', 'IECA', 'InsuficienciaCardiaca', 'Opioides',
  'Anestesicos', 'Ansiol', 'Antagonistas', 'Anticolinergicos'
];

export default defineConfig({
  plugins: [react()],
  resolve: { alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) } },
  server: { proxy: { '/api': 'http://127.0.0.1:3001', '/uploads': 'http://127.0.0.1:3001' } },
  build: {
    chunkSizeWarningLimit: 500,
    rollupOptions: {
      output: {
        manualChunks(id) {
          const norm = id.replace(/\\/g, '/');

          if (norm.includes('node_modules')) {
            if (
              norm.includes('/react/') ||
              norm.includes('/react-dom/') ||
              norm.includes('/scheduler/') ||
              norm.includes('/react-is/') ||
              norm.includes('/react-router/') ||
              norm.includes('/react-router-dom/') ||
              norm.includes('/@remix-run/') ||
              norm.includes('/use-sync-external-store/')
            ) {
              return 'vendor-react';
            }
            if (norm.includes('/lodash/')) {
              return 'vendor-lodash';
            }
            if (norm.includes('/react-hook-form/') || norm.includes('/@hookform/')) {
              return 'vendor-forms';
            }
            if (norm.includes('/framer-motion/')) {
              return 'vendor-motion';
            }
            if (norm.includes('/lucide-react/')) {
              return 'vendor-icons';
            }
            if (norm.includes('@tanstack')) {
              return 'vendor-query';
            }
            if (norm.includes('/recharts/') || norm.includes('/d3-') || norm.includes('/victory-vendor/')) {
              return 'vendor-charts';
            }
            if (norm.includes('/@radix-ui/')) {
              return 'vendor-radix';
            }
            return 'vendor-common';
          }

          // Clinical heavy datasets
          if (norm.includes('condutasNeonatologiaData')) {
            return 'data-condutas-neo';
          }
          if (norm.includes('condutasCirurgiaPediatricaData')) {
            return 'data-condutas-cirurgia';
          }
          if (norm.includes('condutasUrgenciaEmergenciaData')) {
            return 'data-condutas-urgencia';
          }
          if (norm.includes('condutasPuericulturaData')) {
            return 'data-condutas-puericultura';
          }
          if (norm.includes('condutasRespiratoriasData')) {
            return 'data-condutas-respiratorio';
          }
          if (norm.includes('condutasData')) {
            return 'data-condutas-index';
          }
          if (norm.includes('guideData')) {
            if (antimicrobials.some(m => norm.includes(m))) {
              return 'data-drugs-infecto';
            }
            if (criticalDrugs.some(c => norm.includes(c))) {
              return 'data-drugs-critical';
            }
            return 'data-drugs-clinic';
          }
          if (norm.includes('dosagensData')) {
            return 'data-drugs-clinic';
          }
          if (norm.includes('resumosData')) {
            return 'data-resumos';
          }
          if (norm.includes('vacinasData') || norm.includes('vaccineGuide')) {
            return 'data-vacinas';
          }
          if (norm.includes('amamentacaoData')) {
            return 'data-amamentacao';
          }
        },
      },
    },
  },
});
