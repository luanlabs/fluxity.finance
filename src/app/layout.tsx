import './globals.css';
import type { Metadata } from 'next';
import { Toaster } from 'react-hot-toast';
import localFont from 'next/font/local';

export const metadata: Metadata = {
  title: 'Fluxity - Token Streaming on Stellar Network',
  applicationName: 'Fluxity',
  classification: 'Business',
  category: 'Finance, Cryptocurrency, Blockchain',
  creator: 'Fluxity Team, support@fluxity.finance',
  keywords:
    'Fluxity, Stellar, token streaming, cryptocurrency, blockchain, finance, digital payments, smart contracts',
  description:
    'Fluxity: Automate payouts & subscriptions on Stellar. Secure, real-time token streaming for dynamic businesses.',
  themeColor: '#E4F6F9',
  abstract: 'New Payment Horizons with Token Streaming with Fluxity',
  viewport:
    'viewport-fit=cover, width=device-width, initial-scale=1.0, maximum-scale=1.0, initial-scale=1, minimum-scale=1, user-scalable=no',
  authors: [{ name: 'Fluxity Team', url: 'support@fluxity.finance' }],
};

const myFont = localFont({
  src: [
    { style: 'normal', weight: '400', path: '../../public/font/Aeonik-Regular.woff' },
    { style: 'normal', weight: '500', path: '../../public/font/Aeonik-Medium.woff' },
  ],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={myFont.className}>
      <head>
        <meta charSet="UTF-8" />
        <title>Fluxity - Token Streaming on Stellar Network</title>

        <meta name="application-name" content="Fluxity" />
        <meta name="classification" content="Business" />
        <meta name="category" content="Finance, Cryptocurrency, Blockchain" />
        <meta name="creator" content="Fluxity Team, support@fluxity.finance" />
        <meta
          name="keywords"
          content="Fluxity, Stellar, token streaming, cryptocurrency, blockchain, finance, digital payments, smart contracts"
        />
        <meta
          name="description"
          content="Fluxity: Automate payouts & subscriptions on Stellar. Secure, real-time token streaming for dynamic businesses."
        />
        <meta name="theme-color" content="#E4F6F9" />
        <meta name="abstract" content="New Payment Horizons with Token Streaming with Fluxity" />
        <meta
          name="viewport"
          content="viewport-fit=cover, width=device-width, initial-scale=1.0, maximum-scale=1.0, initial-scale=1, minimum-scale=1, user-scalable=no"
        />
        <meta name="author" content="Fluxity Team" />
        <link rel="author" href="mailto:support@fluxity.finance"></link>
        <meta name="robots" content="follow, index" />
        <meta name="coverage" content="Worldwide" />
        <meta name="revisit-after" content="7 days" />
        <meta name="directory" content="submission" />
        <meta name="copyright" content="Fluxity Finance" />
        <meta name="url" content="http://fluxity.finance" />
        <meta name="identifier-URL" content="http://fluxity.finance" />
      </head>
      <body className="overflow-x-hidden">
        <div> {children}</div>
        <Toaster position="bottom-center" />
      </body>
    </html>
  );
}
