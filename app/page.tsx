'use client'; // TRÈS IMPORTANT : permet d'utiliser le bouton et la redirection

import { useState } from 'react';
import { supabase } from '@/lib/supabase'; // On utilise le fichier de connexion créé à l'étape précédente
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import LoadingScreen from '@/components/LoadingScreen';

export default function NewTree() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // Cette fonction s'exécute quand on clique sur "Créer l'arbre"
  const handleCreateTree = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const description = formData.get('description') as string;

    // 1. On récupère l'utilisateur connecté pour savoir qui crée l'arbre
    const { data: { user } } = await supabase.auth.getUser();

    // 2. Envoi vers ta table Supabase "trees"
    const { data, error } = await supabase
      .from('trees')
      .insert([
        { 
          name: name, 
          description: description,
          created_by: user?.id // Lie l'arbre à l'utilisateur Discord
        }
      ])
      .select()
      .single();

    if (error) {
      alert("Erreur : " + error.message);
      setLoading(false);
    } else {
      // 3. Si ça marche, on va sur la page de l'arbre fraîchement créé
      router.push(`/tree/${data.id}`);
    }
  };

  if (loading) return <LoadingScreen />;

  return (
    <main className="min-h-screen bg-[#0a0608] flex flex-col p-6">
      <Link href="/dashboard" className="text-[#ff4d29] hover:underline mb-8 flex items-center gap-2">
        ← Retour
      </Link>
      
      <div className="flex-1 flex items-center justify-center">
        {/* On lie le formulaire à notre fonction handleCreateTree */}
        <form onSubmit={handleCreateTree} className="bg-[#0f060a] border border-[#ff4d29]/30 p-8 rounded-lg w-full max-w-lg shadow-2xl">
          <h2 className="font-cinzel text-2xl text-[#ff4d29] text-center mb-8 uppercase">
            Créer un nouvel arbre généalogique
          </h2>
          
          <div className="space-y-6">
            <div>
              <label className="block text-stone-400 text-sm mb-2">Nom de l'arbre *</label>
              <input 
                name="name" 
                type="text" 
                required
                placeholder="Ex: Maison Targaryen" 
                className="w-full bg-black border border-stone-800 p-3 rounded text-white focus:border-[#ff4d29] outline-none" 
              />
            </div>
            
            <div>
              <label className="block text-stone-400 text-sm mb-2">Description</label>
              <textarea 
                name="description"
                placeholder="Décrivez votre arbre généalogique..." 
                rows={4}
                className="w-full bg-black border border-stone-800 p-3 rounded text-white focus:border-[#ff4d29] outline-none" 
              />
            </div>

            <button 
              type="submit"
              className="w-full bg-[#d32f2f] hover:bg-[#b71c1c] text-white py-4 rounded font-bold flex items-center justify-center gap-2 transition-colors"
            >
              💾 Créer l'arbre
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
