'use client';
import { PlusCircle, Search } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#0a0608] text-white font-crimson">
      {/* Overlay dégradé rouge sang en haut */}
      <div className="absolute top-0 w-full h-[50vh] bg-gradient-to-b from-[#3d0a0a] to-transparent opacity-40 pointer-events-none" />

      <main className="relative z-10 max-w-6xl mx-auto pt-20 px-6 text-center">
        {/* Titre Principal */}
        <h1 className="font-cinzel text-5xl md:text-7xl font-bold text-[#ff4d29] tracking-tighter mb-4 drop-shadow-[0_0_15px_rgba(255,77,41,0.3)]">
          LES SEPT COURONNES
        </h1>
        
        <p className="text-stone-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Enrichis l'histoire de Westeros et des Sept Couronnes avec ta communauté RP
        </p>

        {/* Boutons d'action */}
        <div className="flex flex-wrap justify-center gap-4 mb-24">
          <button className="flex items-center gap-2 bg-[#d32f2f] hover:bg-[#b71c1c] text-white px-8 py-3 rounded-md font-bold transition-all shadow-lg">
            <PlusCircle size={20} />
            Créer un nouvel arbre
          </button>
          <button className="flex items-center gap-2 border border-[#d32f2f]/50 hover:bg-[#d32f2f]/10 text-stone-400 px-8 py-3 rounded-md font-bold transition-all">
            <Search size={20} />
            Explorer les arbres
          </button>
        </div>

        {/* Liste des arbres */}
        <div className="text-left">
          <h2 className="font-cinzel text-2xl text-[#8b1a1a] tracking-widest uppercase mb-8">
            ARBRES GÉNÉALOGIQUES EXISTANTS
          </h2>

          {/* Zone de la Galerie (État vide) */}
          <div className="bg-black/40 border border-white/5 rounded-xl p-20 flex flex-col items-center justify-center text-center">
            <div className="text-6xl mb-6 animate-bounce">🐲</div>
            <h3 className="text-stone-400 text-xl mb-2">Aucun arbre généalogique pour le moment</h3>
            <p className="text-stone-600">Soyez le premier à créer l'histoire de votre maison !</p>
          </div>
        </div>
      </main>
    </div>
  );
}
