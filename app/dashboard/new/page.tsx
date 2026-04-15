'use client';
import Link from 'next/link';

export default function NewTree() {
  return (
    <main className="min-h-screen bg-[#0a0608] flex flex-col p-6">
      <Link href="/dashboard" className="text-[#ff4d29] hover:underline mb-8 flex items-center gap-2">
        ← Retour
      </Link>
      
      <div className="flex-1 flex items-center justify-center">
        <div className="bg-[#0f060a] border border-[#ff4d29]/30 p-8 rounded-lg w-full max-w-lg shadow-2xl">
          <h2 className="font-cinzel text-2xl text-[#ff4d29] text-center mb-8 uppercase">
            Créer un nouvel arbre généalogique
          </h2>
          
          <div className="space-y-6">
            <div>
              <label className="block text-stone-400 text-sm mb-2">Nom de l'arbre *</label>
              <input type="text" placeholder="Ex: Maison Targaryen" 
                     className="w-full bg-black border border-stone-800 p-3 rounded text-white focus:border-[#ff4d29] outline-none" />
            </div>
            
            <div>
              <label className="block text-stone-400 text-sm mb-2">Description</label>
              <textarea placeholder="Décrivez votre arbre généalogique..." rows={4}
                        className="w-full bg-black border border-stone-800 p-3 rounded text-white focus:border-[#ff4d29] outline-none" />
            </div>

            <button className="w-full bg-[#d32f2f] hover:bg-[#b71c1c] text-white py-4 rounded font-bold flex items-center justify-center gap-2 transition-colors">
              💾 Créer l'arbre
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
