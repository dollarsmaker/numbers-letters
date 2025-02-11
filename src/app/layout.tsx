import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
