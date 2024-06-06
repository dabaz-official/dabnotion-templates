import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import clsx from 'clsx';

import './globals.css';
import { seo } from '@dabaz/lib/seo';
import { Header } from '@dabaz/components/layout/Header';

export const metadata: Metadata = {
  metadataBase: new URL('https://notion.dabaz.me'),
  title: {
    default: seo.home.title,
    template: "%s | DabNotion",
  },
  description: seo.home.description,
  openGraph: {
    title: seo.home.title,
    description: seo.home.description,
    url: "https://notion.dabaz.me",
    siteName: seo.home.siteName,
    locale: "en_US",
    type: "website",
    images: {
      url: seo.home.imageSrc,
      width: 1920,
      height: 1080,
      alt: seo.home.imageAlt,
    },
  },
  twitter: {
    card: "summary_large_image",
    creator: "@dabaz_official",
    title: seo.home.title,
    description: seo.home.description,
    images: seo.home.imageSrc,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const fontSans = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={clsx('h-full antialiased', fontSans.variable)}
      suppressHydrationWarning
    >
      <body className="p-4">
        <Header />
        <div className="min-h-full bg-white text-black">
          {children}
        </div>
      </body>
    </html>
  );
}
