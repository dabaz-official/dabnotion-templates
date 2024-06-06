import Link from 'next/link';
import Image from 'next/image';

import { Button } from '@dabaz/components/ui/button';

export function Hero() {
  return (
    <div className="text-center items-center flex flex-col gap-4">
      <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
        Premium Notion Templates
      </h1>
      <p className="text-xl md:text-2xl font-medium">
        A collection of premium Notion templates to boost productivity, organize projects, and enhance personal planning.
      </p>
      <Link
        href="/store"
      >
        <Button variant="red" size="notionlg">
          Browse templates
        </Button>
      </Link>
      <Image
        src="/images/hero.avif"
        alt="Notion Second Brain"
        className="w-full h-auto py-16"
        height={996}
        width={1571}
      />
    </div>
  );
}