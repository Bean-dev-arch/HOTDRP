'use client';

export default function AddCharacterModal() {
  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50 overflow-y-auto">
      <div className="bg-[#0f060a] border border-[#ff4d29]/20 p-8 rounded-lg w-full max-w-2xl my-auto shadow-[0_0_50px_rgba(0,0,0,1)]">
        <h2 className="font-cinzel text-xl text-[#ff4d29] mb-8 uppercase border-b border-[#ff4d29]/10 pb-4">
          Ajouter un personnage
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Portrait & Infos de base */}
          <div className="col-span-2">
            <label className="block text-stone-500 text-xs uppercase mb-2">Portrait</label>
            <input type="file" className="w-full bg-black border border-stone-800 p-2 text-xs text-stone-400" />
          </div>

          <input placeholder="Prénom *" className="bg-black border border-stone-800 p-3 rounded text-white" />
          <input placeholder="Nom" className="bg-black border border-stone-800 p-3 rounded text-white" />
          
          <div className="col-span-2">
             <input placeholder="Titre (Ex: Roi, Reine...)" className="w-full bg-black border border-stone-800 p-3 rounded text-white" />
          </div>

          <select className="bg-black border border-stone-800 p-3 rounded text-white">
            <option>Sélectionnez une maison</option>
            <option>Targaryen</option>
            <option>Stark</option>
          </select>

          <input placeholder="Date de naissance (Ex: 126 AC)" className="bg-black border border-stone-800 p-3 rounded text-white" />

          {/* Switch Vivant/Mort */}
          <div className="col-span-2 flex justify-between items-center bg-black/40 p-3 rounded border border-stone-800">
            <span className="text-stone-300">Le personnage est-il vivant ?</span>
            <input type="checkbox" className="w-5 h-5 accent-[#d32f2f]" />
          </div>

          <textarea placeholder="Biographie..." className="col-span-2 w-full bg-black border border-stone-800 p-3 rounded text-white h-32" />
        </div>

        <div className="mt-8 flex gap-4">
          <button className="flex-1 bg-stone-800 hover:bg-stone-700 py-3 rounded font-bold uppercase text-xs">Annuler</button>
          <button className="flex-1 bg-[#d32f2f] hover:bg-[#b71c1c] py-3 rounded font-bold uppercase text-xs">Forger le destin</button>
        </div>
      </div>
    </div>
  );
}
