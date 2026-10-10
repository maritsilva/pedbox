import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import {X,GitBranch} from 'lucide-react';

export default function FluxogramaModal({title,children,isOpen,onClose}){
 return <Dialog.Root open={isOpen} onOpenChange={open=>{if(!open)onClose();}}><Dialog.Portal>
  <Dialog.Overlay className="fixed inset-0 z-50 bg-slate-950/40"/>
  <Dialog.Content className="flow-dialog" aria-describedby="flow-description">
   <header><div><p className="eyebrow flex items-center gap-2"><GitBranch size={15}/>Consulta visual</p><Dialog.Title>{title}</Dialog.Title></div><Dialog.Close className="icon-action" aria-label="Fechar fluxograma"><X size={20}/></Dialog.Close></header>
   <Dialog.Description id="flow-description" className="flow-description">Siga as etapas e os critérios indicados. Em diagramas largos, deslize a área do fluxograma.</Dialog.Description>
   <div className="flow-canvas" tabIndex={0} role="region" aria-label="Etapas do fluxograma">{children}</div>
   <footer><Dialog.Close className="filter-toggle">Voltar aos protocolos</Dialog.Close></footer>
  </Dialog.Content>
 </Dialog.Portal></Dialog.Root>;
}
