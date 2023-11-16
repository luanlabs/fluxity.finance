import './globals.css';
import type { Metadata } from 'next';
import { Toaster } from 'react-hot-toast';
import localFont from 'next/font/local';

export const metadata: Metadata = {
  title: 'Fluxity',
  description:
    'Fluxity is a token streaming platform unlocking new digital payment possibilities on the Stellar network.',
  keywords:
    'Fluxity, Stellar, token streaming, cryptocurrency, blockchain, finance, digital payments, smart contracts',
  applicationName: 'Fluxity',
  creator: 'Fluxity Team, fluxity.finance@gmail.com',
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
      <body className="overflow-x-hidden">
        <div> {children}</div>
        <Toaster position="bottom-center" />
      </body>
    </html>
  );
}
