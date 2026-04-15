'use client';

import { useState } from 'react';
import { ReactFlow, Background, Controls } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import Link from 'next/link';
import AddCharacterModal from '@/components/AddCharacterModal';

export default function TreePage({ params }: { params: { id: string } }) {
  // État pour afficher ou masquer la fenêtre d'ajout
  const [showModal, setShowModal] = useState(false);

  // Pour l'instant, un seul nœud de test (on chargera les vrais plus tard)
  const initialNodes = [
    { id: '1', position: { x: 250, y: 5 }, data: { label: 'Chef de Maison' } },
  ];

  return (
    <div className="h-screen w-full bg-[#0a0608] overflow-hidden">
      {/* Barre d'outils supérieure fidèle à tes visuels */}
      <div className="absolute top-0 w-full z-20 p-4 flex justify-between items-center bg-black/40 backdrop-blur-md border-b border-[#ff4d29]/10">
        <Link href="/dashboard" className="text-[#ff4d29] font-cinzel text-xs uppercase tracking-widest hover:brightness-125 transition-all">
          ← Retour
        </Link>
        
        <div className="flex gap-4 items-center">
          <div className="text-[10px] text-stone-500 font-cinzel uppercase tracking-tighter">
            0 personnages
          </div>
          <button 
            onClick={() => setShowModal(true)}
            className="bg-[#d32f2f] hover:bg-[#b71c1c] text-white px-5 py-2 rounded-sm text-[10px] font-bold uppercase tracking-widest transition-all shadow-lg shadow-red-900/20"
          >
            + Ajouter un personnage
          </button>
        </div>
      </div>

      {/* Zone de l'arbre généalogique */}
      <div className="w-full h-full">
        <ReactFlow nodes={initialNodes} fitView>
          <Background color="#1a0808" gap={20} />
          <Controls />
        </ReactFlow>
      </div>

      {/* Affichage de la fenêtre d'ajout si showModal est vrai */}
      {showModal && (
        <AddCharacterModal 
          treeId={params.id} 
          onClose={() => setShowModal(false)} 
          onSuccess={() => {
            setShowModal(false);
            window.location.reload(); // Rafraîchit pour voir le nouveau personnage
          }}
        />
      )}
    </div>
  );
}
