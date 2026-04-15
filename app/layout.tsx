import './globals.css';
import { Cinzel, Crimson_Text } from 'next/font/google';

const cinzel = Cinzel({ 
  subsets: ['latin'], 
  variable: '--font-cinzel',
  weight: ['400', '700'] 
});

const crimson = Crimson_Text({ 
  subsets: ['latin'], 
  variable: '--font-crimson',
  weight: ['400', '600'] 
});

export const metadata = {
  title: 'HOTD RP - Lignages',
  description: 'Arbre généalogique des Sept Couronnes',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${cinzel.variable} ${crimson.variable}`}>
      <body>{children}</body>
    </html>
  );
}
