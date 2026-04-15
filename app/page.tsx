'use client';

import { supabase } from '../lib/supabase';
import { useEffect, useState } from 'react';

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'discord',
      options: {
        // Redirige vers la route de callback après l'autorisation Discord
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });
    
    if (error) {
      console.error("Erreur de connexion:", error.message);
      alert("La forge a échoué : " + error.message);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#050505] flex flex-col items-center justify-center overflow-hidden">
      
      {/* --- AMBIANCE VISUELLE --- */}
      {/* Halo rouge central */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1a0808] via-transparent to-transparent opacity-70" />
      </div>

      {/* Grain de vieux film (optionnel via CSS global mais ajouté ici pour la texture) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

      <main className="relative z-10 text-center px-4 max-w-4xl">
        
        {/* --- LOGO / TITRE --- */}
        <div className="mb-12 select-none">
          <h1 className="font-cinzel text-6xl md:text-9xl font-bold tracking-[0.25em] text-transparent bg-clip-text bg-gradient-to-b from-[#ffedc2] via-[#ff4d29] to-[#8b1a1a] drop-shadow-[0_0_35px_rgba(255,77,41,0.5)]">
            DRAGON
          </h1>
          <h2 className="font-cinzel text-2xl md:text-4xl tracking-[0.6em] text-[#e8c070] mt-[-15px] opacity-90 drop-shadow-md">
            LINEAGE
          </h2>
        </div>

        {/* --- ACCROCHE --- */}
        <p className="font-crimson text-stone-400 text-lg md:text-2xl max-w-2xl mx-auto mb-14 leading-relaxed italic opacity-80">
          "The history of Westeros is written in blood and fire. <br className="hidden md:block"/> 
          Forge your dynasty and claim your place among the legends."
        </p>

        {/* --- BOUTON DE CONNEXION --- */}
        <div className="flex flex-col items-center gap-8">
          <button 
            onClick={handleLogin}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group relative px-16 py-5 bg-transparent border border-[#ff4d29]/30 hover:border-[#ff4d29] transition-all duration-700 ease-out rounded-sm overflow-hidden"
          >
            {/* Effet de brillance interne au survol */}
            <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-[#ff4d29]/10 to-transparent transition-transform duration-1000 ${isHovered ? 'translate-x-[200%]' : '-translate-x-[100%]'}`} />
            
            <span className="relative font-cinzel text-[#ff4d29] group-hover:text-[#ffedc2] text-sm tracking-[0.4em] font-bold transition-colors duration-500">
              SE CONNECTER AVEC DISCORD
            </span>
          </button>
          
          {/* Décoration sous le bouton */}
          <div className="flex items-center gap-4 w-full max-w-xs">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#ff4d29]/40" />
            <span className="font-cinzel text-[9px] text-stone-600 tracking-[0.3em] uppercase whitespace-nowrap">
              Valyrian Certified
            </span>
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#ff4d29]/40" />
          </div>
        </div>
      </main>

      {/* --- DÉCORATION DE BAS DE PAGE --- */}
      <div className="absolute bottom-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#ff4d29]/20 to-transparent" />
      
      {/* Coins décoratifs (optionnels pour le look "Ancien") */}
      <div className="absolute top-10 left-10 w-20 h-20 border-t border-l border-[#ff4d29]/10" />
      <div className="absolute top-10 right-10 w-20 h-20 border-t border-r border-[#ff4d29]/10" />
      <div className="absolute bottom-10 left-10 w-20 h-20 border-b border-l border-[#ff4d29]/10" />
      <div className="absolute bottom-10 right-10 w-20 h-20 border-b border-r border-[#ff4d29]/10" />

    </div>
  );
}
