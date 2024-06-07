import type { Metadata } from 'next';

import { seo } from '@dabaz/lib/seo';
import { StoreHeadings } from '@dabaz/components/store/StoreHeadings';

export const metadata: Metadata = {
  title: seo.store.title,
  description: seo.store.description,
  openGraph: {
    title: seo.store.title,
    description: seo.store.description,
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
    title: seo.store.title,
    description: seo.store.description,
    images: seo.home.imageSrc,
  },
};

export default function Page() {
  return (
    <main>
      <StoreHeadings />
    </main>
  )
}