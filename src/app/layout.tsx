import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Numbers to Letters | Free Online Converter',
  description: 'Convert numbers to letters instantly with our free online converter. Support multiple formats including A1Z26, ASCII, and phone keypad notation.',
  metadataBase: new URL('https://numletter.com'),
  alternates: {
    canonical: 'https://numletter.com/'
  },
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/logo.png',
    },
  },
  manifest: '/manifest.json',
  openGraph: {
    title: 'Numbers to Letters | Free Online Converter',
    description: 'Convert numbers to letters instantly with our free online converter. Support multiple formats including A1Z26, ASCII, and phone keypad notation.',
    url: 'https://numletter.com',
    siteName: 'NumLetter',
    type: 'website',
    images: [
      {
        url: '/logo.png',
        width: 800,
        height: 600,
        alt: 'Numbers to Letters Converter'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Numbers to Letters | Free Online Converter',
    description: 'Convert numbers to letters instantly with our free online converter. Support multiple formats including A1Z26, ASCII, and phone keypad notation.',
    images: ['/logo.png']
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-M3MZ4B3LQY"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
        >
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-M3MZ4B3LQY');
          `}
        </Script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
