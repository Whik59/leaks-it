import type { Metadata } from "next";
import Script from "next/script";
import "../styles/globals.css";
import { strings } from '../data/strings';
import { Geist, Geist_Mono } from "next/font/google";
import AffiliateBanner from "@/components/AffiliateBanner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // Point to the final, canonical WWW domain to avoid redirect issues.
  metadataBase: new URL('https://www.onlyfanleaks.fr'),
  title: strings.siteTitle,
  description: strings.siteDescription,
  keywords: strings.siteKeywords,
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/favicon-32x32.png',
  },
  openGraph: {
    title: strings.siteTitle,
    description: strings.siteDescription,
    url: '/',
    siteName: strings.siteTitle,
    images: [
      {
        url: '/examplevideo-v2.png',
        width: 1200,
        height: 630,
        alt: strings.siteTitle,
      }
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: strings.siteTitle,
    description: strings.siteDescription,
    creator: '@NathanP274706',
    site: '@NathanP274706',
    images: {
      url: '/examplevideo-v2.png',
      alt: strings.siteTitle,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AffiliateBanner />
        {children}
        <Script id="popcash-script" strategy="afterInteractive">
          {`
            var uid = '488882';
            var wid = '743102';
            var pop_tag = document.createElement('script');
            pop_tag.src = '//cdn.popcash.net/show.js';
            document.body.appendChild(pop_tag);
            pop_tag.onerror = function() {
              pop_tag = document.createElement('script');
              pop_tag.src = '//cdn2.popcash.net/show.js';
              document.body.appendChild(pop_tag);
            };
          `}
        </Script>
      </body>
    </html>
  );
}
