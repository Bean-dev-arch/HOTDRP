'use client';
import { ReactFlow, Background, Controls } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import Link from 'next/link';

export default function TreeView({ params }: { params: { id: string } }) {
  // Ici, on récupérera les personnages depuis Supabase plus tard
  const nodes = [
    { id: '1', position: { x: 0, y: 0 }, data: { label: 'Fondateur de la Lignée' } },
  ];

  return (
    <div className="h-screen w-full bg-[#0a0608]">
      {/* Barre d'outils supérieure */}
      <div className="absolute top-0 w-full z-10 p-4 flex justify-between items-center bg-black/60 backdrop-blur-md border-b border-[#ff4d29]/20">
        <Link href="/dashboard" className="text-[#ff4d29] font-cinzel text-sm">← Retour</Link>
        <button className="bg-[#d32f2f] px-4 py-2 rounded text-xs font-bold uppercase tracking-widest">
          + Ajouter un personnage
        </button>
      </div>

      <ReactFlow nodes={nodes} fitView>
        <Background color="#1a0808" gap={20} />
        <Controls />
      </ReactFlow>
    </div>
  );
}
