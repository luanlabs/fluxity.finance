import './globals.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';

export const metadata: Metadata = {
  title: 'Fluxity.finance',
  description: 'A money streaming service',
};

const myFont = localFont({
  src: [
    { style: 'normal', weight: '400', path: '../../public/font/Aeonik-Regular.ttf' },
    { style: 'normal', weight: '500', path: '../../public/font/Aeonik-Medium.ttf' },
    { style: 'normal', weight: '700', path: '../../public/font/Aeonik-Bold.ttf' },
  ],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={myFont.className}>
      <head>
        <title>Fluxity.finance</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="Fluxity, stream, stellar" />
      </head>
      <body className="overflow-x-hidden">{children}</body>
    </html>
  );
}
