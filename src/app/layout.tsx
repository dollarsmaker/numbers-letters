import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

// GTM ID - 请替换为你的 GTM 容器 ID
const GTM_ID = 'GTM-KFWC5ZG6';

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
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${GTM_ID}');
            `,
          }}
        />

        {/*adsense*/}
        <script async
                src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9280823005138577"
                crossOrigin="anonymous">
        </script>
      </head>
      <body className={inter.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        {children}
      </body>
    </html>
  );
}
