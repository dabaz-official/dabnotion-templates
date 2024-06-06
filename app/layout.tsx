import type { Metadata } from 'next';
import clsx from 'clsx';

import '@dabaz/styles/globals.css';
import '@dabaz/styles/tailwind.css';
import { seo } from '@dabaz/lib/seo';
import { Header } from '@dabaz/components/layout/Header';
import { fontSans } from '@dabaz/fonts/inter';

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
      <body className="mx-auto max-w-7xl p-4 sm:px-6 lg:px-8 font-sans">
        <Header />
        <div className="pt-16 pb-48 min-h-full">
          {children}
        </div>
      </body>
    </html>
  );
}
