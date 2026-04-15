'use client';

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-[#0a0608] z-[999] flex flex-col items-center justify-center">
      {/* Background avec l'effet de braises de ta page de login */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a0808] to-[#0a0608] opacity-50" />
      
      <div className="relative flex flex-col items-center">
        <div className="text-7xl animate-bounce mb-6 filter drop-shadow-[0_0_15px_rgba(255,100,20,0.5)]">
          🐲
        </div>
        <p className="font-cinzel text-[#e8c070] text-lg tracking-[0.4em] uppercase animate-pulse">
          Chargement
        </p>
        <div className="mt-4 flex gap-1">
          <div className="w-1.5 h-1.5 bg-[#ff4d29] rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div className="w-1.5 h-1.5 bg-[#ff4d29] rounded-full animate-bounce [animation-delay:-0.15s]"></div>
          <div className="w-1.5 h-1.5 bg-[#ff4d29] rounded-full animate-bounce"></div>
        </div>
      </div>
    </div>
  );
}
