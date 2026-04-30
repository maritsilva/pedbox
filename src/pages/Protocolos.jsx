import React from 'react';
import { BookOpen } from 'lucide-react';

export default function Protocolos() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="mb-7">
        <h1 className="text-2xl font-extrabold text-foreground mb-1">Protocolos Clínicos</h1>
        <p className="text-muted-foreground text-sm">Diretrizes e guias de cuidado pediátrico</p>
      </div>
      <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8 flex flex-col items-center text-center gap-3">
        <BookOpen className="w-10 h-10 text-blue-400" />
        <p className="text-blue-700 font-medium">Protocolos em desenvolvimento</p>
        <p className="text-blue-600 text-sm">Em breve: Crise Asmática, Sepse, Convulsão Febril e mais.</p>
      </div>
    </div>
  );
}