'use client';
import { useState } from 'react';
import { supabase } from '@/lib/supabase';

interface Props {
  treeId: string;
  onClose: () => void;
  onSuccess: () => void;
}

export default function AddCharacterModal({ treeId, onClose, onSuccess }: Props) {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    
    // On prépare l'objet avec les colonnes exactes de ta table Supabase
    const newCharacter = {
      first_name: formData.get('first_name'),
      last_name: formData.get('last_name'),
      title: formData.get('title'),
      house: formData.get('house'),
      birth_date: formData.get('birth_date'),
      is_alive: formData.get('is_alive') === 'on',
      bio: formData.get('bio'),
      tree_id: treeId, // On lie le perso à l'arbre actuel
    };

    const { error } = await supabase
      .from('characters')
      .insert([newCharacter]);

    if (!error) {
      onSuccess(); // Ferme la modal et rafraîchit l'arbre
    } else {
      alert("Erreur lors de l'ajout : " + error.message);
    }
    setLoading(false);
  };

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
      <div className="bg-[#0f060a] border border-[#ff4d29]/20 p-8 rounded-lg w-full max-w-2xl shadow-2xl max-h-[90vh] overflow-y-auto">
        <h2 className="font-cinzel text-xl text-[#ff4d29] mb-8 uppercase border-b border-[#ff4d29]/10 pb-4">
          Ajouter un personnage
        </h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input name="first_name" placeholder="Prénom *" required className="bg-black border border-stone-800 p-3 rounded text-white outline-none focus:border-[#ff4d29]" />
          <input name="last_name" placeholder="Nom" className="bg-black border border-stone-800 p-3 rounded text-white outline-none focus:border-[#ff4d29]" />
          
          <div className="col-span-2">
             <input name="title" placeholder="Titre (Ex: Prince, Main du Roi...)" className="w-full bg-black border border-stone-800 p-3 rounded text-white outline-none focus:border-[#ff4d29]" />
          </div>

          <select name="house" className="bg-black border border-stone-800 p-3 rounded text-white outline-none focus:border-[#ff4d29]">
            <option value="">Sélectionnez une maison</option>
            <option value="Targaryen">Targaryen</option>
            <option value="Stark">Stark</option>
            <option value="Velaryon">Velaryon</option>
            <option value="Hightower">Hightower</option>
          </select>

          <input name="birth_date" placeholder="Date de naissance (Ex: 112 AC)" className="bg-black border border-stone-800 p-3 rounded text-white outline-none focus:border-[#ff4d29]" />

          <div className="col-span-2 flex justify-between items-center bg-black/40 p-3 rounded border border-stone-800">
            <span className="text-stone-300">Le personnage est-il vivant ?</span>
            <input name="is_alive" type="checkbox" defaultChecked className="w-5 h-5 accent-[#d32f2f]" />
          </div>

          <textarea name="bio" placeholder="Biographie et faits marquants..." className="col-span-2 w-full bg-black border border-stone-800 p-3 rounded text-white h-32 outline-none focus:border-[#ff4d29]" />

          <div className="mt-4 flex gap-4 col-span-2">
            <button type="button" onClick={onClose} className="flex-1 bg-stone-900 text-stone-400 py-3 rounded font-bold uppercase text-xs hover:bg-stone-800 transition-colors">
              Annuler
            </button>
            <button type="submit" disabled={loading} className="flex-1 bg-[#d32f2f] text-white py-3 rounded font-bold uppercase text-xs hover:bg-[#b71c1c] transition-colors shadow-lg shadow-red-900/20">
              {loading ? 'Inscription...' : 'Forger le destin'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
