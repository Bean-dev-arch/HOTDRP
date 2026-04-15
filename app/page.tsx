'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#050505] flex flex-col items-center justify-center overflow-hidden">
      
      {/* EFFET DE FOND : Brume et Braises */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1a0808] via-transparent to-transparent opacity-60" />
        {/* Ici, on pourrait ajouter ton composant Embers si tu l'as déjà créé */}
      </div>

      <main className="relative z-10 text-center px-4">
        {/* LOGO / TITRE - L'effet Or/Sang */}
        <div className="mb-12">
          <h1 className="font-cinzel text-5xl md:text-8xl font-bold tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-b from-[#ffedc2] via-[#ff4d29] to-[#8b1a1a] drop-shadow-[0_0_30px_rgba(255,77,41,0.4)]">
            DRAGON
          </h1>
          <h2 className="font-cinzel text-2xl md:text-4xl tracking-[0.5em] text-[#e8c070] mt-[-10px] opacity-80">
            LINEAGE
          </h2>
        </div>

        {/* TEXTE D'INTRODUCTION */}
        <p className="font-crimson text-stone-400 text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed italic">
          "The history of Westeros is written in blood and fire. Forge your dynasty and claim your place among the legends."
        </p>

        {/* BOUTON DISCORD - Style exact */}
        <div className="flex flex-col items-center gap-6">
          <Link href="/api/auth/login" 
            className="group relative px-12 py-4 bg-transparent border border-[#ff4d29]/40 hover:border-[#ff4d29] transition-all duration-500 rounded-sm">
            
            {/* Effet de lueur interne au survol */}
            <div className="absolute inset-0 bg-[#ff4d29]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <span className="relative font-cinzel text-[#ff4d29] group-hover:text-[#ffedc2] text-sm tracking-[0.3em] font-bold">
              SE CONNECTER AVEC DISCORD
            </span>
          </Link>
          
          <span className="font-cinzel text-[10px] text-stone-600 tracking-widest uppercase">
            Protégé par les flammes de Valyria
          </span>
        </div>
      </main>

      {/* DÉCORATION : Ligne rouge fine en bas */}
      <div className="absolute bottom-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#ff4d29]/30 to-transparent" />
    </div>
  );
}
