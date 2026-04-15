'use client';
import { useEffect, useState } from 'react';

export default function Embers() {
  const [particles, setParticles] = useState<any[]>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      size: Math.random() * 3 + 1,
      hue: Math.random() * 30 + 10,
      left: Math.random() * 100,
      duration: Math.random() * 6 + 5,
      delay: Math.random() * 8,
      drift: (Math.random() - 0.5) * 80,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="embers absolute inset-0 pointer-events-none">
      {particles.map((p) => (
        <div
          key={p.id}
          className="ember"
          style={{
            width: `${p.size}px`,
            height: `${p.size}px`,
            left: `${p.left}%`,
            background: `hsl(${p.hue}, 100%, 65%)`,
            boxShadow: `0 0 ${p.size * 2}px hsl(${p.hue}, 100%, 65%)`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            // @ts-ignore
            '--drift': `${p.drift}px`,
          }}
        />
      ))}
    </div>
  );
}
