import { Cinzel, Crimson_Text } from 'next/font/google';
import "./globals.css";

const cinzel = Cinzel({ 
  subsets: ['latin'], 
  variable: '--font-cinzel' 
});

const crimson = Crimson_Text({ 
  weight: ['400', '600', '700'], 
  subsets: ['latin'], 
  variable: '--font-crimson' 
});

export const metadata = {
  title: 'Dragon Lineage - RP',
  description: 'Forge ta dynastie dans le sang et le feu',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${cinzel.variable} ${crimson.variable}`}>
      <body className="bg-black antialiased text-white">
        {children}
      </body>
    </html>
  );
}
