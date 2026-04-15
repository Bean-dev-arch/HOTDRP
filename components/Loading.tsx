'use client';
export default function Loading() {
  return (
    <div className="fixed inset-0 bg-[#0a0608] z-[100] flex flex-col items-center justify-center">
      <div className="text-6xl animate-bounce mb-4">🐲</div>
      <p className="font-cinzel text-[#e8c070] tracking-[0.3em] uppercase animate-pulse">
        Chargement...
      </p>
    </div>
  );
}
