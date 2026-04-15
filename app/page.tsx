'use client';

import { supabase } from '../lib/supabase';

export default function Home() {
  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'discord',
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });
    if (error) console.error("Erreur de forge :", error.message);
  };

  return (
    <div className="hotd-root">
      {/* Couches de fond */}
      <div className="scales-bg" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(139,26,26,0.15)_0%,_transparent_70%)] z-0" />

      {/* Contenu Principal */}
      <main className="relative z-10 flex flex-col items-center text-center">
        
        {/* L'Emoji Dragon à la place du texte */}
        <div className="dragon-icon mb-4">
          🐉
        </div>

        <h1 className="font-cinzel text-2xl md:text-4xl tracking-[0.6em] text-[#e8c070] mb-12 drop-shadow-md">
          LINEAGE
        </h1>

        <button 
          onClick={handleLogin}
          className="group relative px-10 py-4 bg-transparent border border-[#ff4d29]/30 hover:border-[#ff4d29] transition-all duration-500 rounded-sm"
        >
          <span className="relative font-cinzel text-[#ff4d29] group-hover:text-[#ffedc2] text-sm tracking-[0.3em] font-bold">
            ENTRER DANS LA DANSE
          </span>
          <div className="absolute inset-0 bg-[#ff4d29]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
        </button>

      </main>

      {/* Ligne de finition */}
      <div className="absolute bottom-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#ff4d29]/20 to-transparent" />
    </div>
  );
}
