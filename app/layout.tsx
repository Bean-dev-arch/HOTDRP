import { Cinzel, Crimson_Text } from 'next/font/google';

const cinzel = Cinzel({ 
  subsets: ['latin'], 
  variable: '--font-cinzel' 
});

const crimson = Crimson_Text({ 
  weight: ['400', '600', '700'], 
  subsets: ['latin'], 
  variable: '--font-crimson' 
});

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${cinzel.variable} ${crimson.variable}`}>
      <body className="bg-black antialiased">
        {children}
      </body>
    </html>
  );
}
    <html lang="fr" className={`${cinzel.variable} ${crimson.variable}`}>
      <body>{children}</body>
    </html>
  );
}
