'use client';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import Embers from '@/components/Embers';

export default function LoginPage() {
  const supabase = createClientComponentClient();

  const handleLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'discord',
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });
  };

  return (
    <div className="hotd-root">
      <div className="bg-canvas"></div>
      <div className="scales-bg"></div>
      <Embers />

      <div className="card-medieval">
        {/* Ornements aux coins */}
        <div className="absolute top-2 left-2 w-5 h-5 border-t border-l border-[#c8641e99]"></div>
        <div className="absolute top-2 right-2 w-5 h-5 border-t border-r border-[#c8641e99]"></div>
        <div className="absolute bottom-2 left-2 w-5 h-5 border-b border-l border-[#c8641e99]"></div>
        <div className="absolute bottom-2 right-2 w-5 h-5 border-b border-r border-[#c8641e99]"></div>

        <span className="dragon-icon mb-3">🐉</span>

        <h1 className="site-title font-cinzel text-3xl font-bold text-[#e8c070] tracking-widest uppercase">
          HOTD RP
        </h1>

        <div className="flex items-center gap-3 my-4">
          <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-[#b4641e80] to-transparent"></div>
          <div className="w-1.5 h-1.5 bg-[#dc8c32b3] rotate-45"></div>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-[#b4641e80] via-[#b4641e80] to-transparent"></div>
        </div>

        <div className="subtitle font-cinzel text-[10px] text-[#b47832e6] tracking-[0.2em] uppercase mb-8">
          Arbre généalogique des Sept Couronnes
        </div>

        <p className="tagline font-crimson italic text-[#c8a064cc] mb-8 leading-relaxed text-lg">
          Connectez-vous avec Discord pour enrichir<br />l'histoire de Westeros
        </p>

        <button 
          onClick={handleLogin}
          className="group relative flex items-center justify-center gap-3 w-full py-3 bg-[#5865F2] hover:bg-[#4752d4] text-white font-cinzel font-bold text-sm tracking-wider uppercase rounded-sm transition-all shadow-lg"
        >
          <svg className="w-5 h-5" viewBox="0 0 71 55" fill="currentColor">
            <path d="M60.105 4.898A58.55 58.55 0 0 0 45.58.465a.22.22 0 0 0-.233.11 40.784 40.784 0 0 0-1.8 3.697c-5.456-.817-10.886-.817-16.232 0-.485-1.164-1.201-2.587-1.826-3.697a.228.228 0 0 0-.233-.11 58.386 58.386 0 0 0-14.525 4.433.207.207 0 0 0-.095.082C1.578 18.73-.944 32.144.293 45.39a.244.244 0 0 0 .093.167c6.107 4.487 12.025 7.213 17.837 9.019a.23.23 0 0 0 .249-.082 42.08 42.08 0 0 0 3.627-5.9.225.225 0 0 0-.123-.312 38.772 38.772 0 0 1-5.539-2.64.228.228 0 0 1-.022-.378 31.17 31.17 0 0 0 1.1-.862.22.22 0 0 1 .23-.031c11.619 5.304 24.198 5.304 35.68 0a.219.219 0 0 1 .232.028c.356.293.728.586 1.103.865a.228.228 0 0 1-.02.378 36.384 36.384 0 0 1-5.54 2.637.227.227 0 0 0-.121.315 47.249 47.249 0 0 0 3.624 5.897.225.225 0 0 0 .249.084c5.835-1.806 11.754-4.532 17.86-9.019a.228.228 0 0 0 .093-.164c1.48-15.315-2.48-28.618-10.497-40.412a.18.18 0 0 0-.093-.084zm-36.38 32.427c-3.497 0-6.38-3.211-6.38-7.156 0-3.944 2.827-7.156 6.38-7.156 3.583 0 6.438 3.24 6.38 7.156 0 3.945-2.827 7.156-6.38 7.156zm23.593 0c-3.498 0-6.38-3.211-6.38-7.156 0-3.944 2.826-7.156 6.38-7.156 3.582 0 6.437 3.24 6.38 7.156 0 3.945-2.826 7.156-6.38 7.156z" />
          </svg>
          Se connecter avec Discord
        </button>

        <p className="legal mt-6 text-[10px] text-[#96643cb3] italic leading-relaxed font-crimson">
          En vous connectant, vous acceptez de contribuer<br />à l'univers collaboratif de HOTD RP
        </p>
      </div>
    </div>
  );
}
