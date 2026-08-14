import './globals.css';
import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';
import localFont from 'next/font/local';

const SITE_URL = 'https://fluxity.finance';
const SITE_TITLE = 'Fluxity - Token Streaming on Stellar Network';
const SITE_DESCRIPTION =
  'Fluxity: Automate payouts & subscriptions on Stellar. Secure, real-time token streaming for dynamic businesses.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  applicationName: 'Fluxity',
  description: SITE_DESCRIPTION,
  keywords: [
    'Fluxity',
    'Stellar',
    'token streaming',
    'cryptocurrency',
    'blockchain',
    'finance',
    'digital payments',
    'smart contracts',
  ],
  category: 'Finance, Cryptocurrency, Blockchain',
  classification: 'Business',
  creator: 'Fluxity Team',
  authors: [{ name: 'Fluxity Team', url: SITE_URL }],
  robots: { index: true, follow: true },
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: 'Fluxity',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  other: {
    abstract: 'New Payment Horizons with Token Streaming with Fluxity',
    copyright: 'Fluxity Finance',
    coverage: 'Worldwide',
  },
};

export const viewport: Viewport = {
  themeColor: '#E4F6F9',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

const aeonik = localFont({
  src: [
    { style: 'normal', weight: '400', path: '../../public/font/Aeonik-Regular.woff' },
    { style: 'normal', weight: '500', path: '../../public/font/Aeonik-Medium.woff' },
  ],
  display: 'swap',
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={aeonik.className}>
      <body className="overflow-x-hidden">
        <div>{children}</div>
        <Toaster position="bottom-center" />
      </body>
    </html>
  );
}
