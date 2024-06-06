import Link from 'next/link';
import Image from 'next/image';

export function Hero() {
  return (
    <div className="text-center items-center flex flex-col gap-4">
      <h1 className="text-5xl md:text-6xl font-semibold tracking-tight">
        Premium Notion Templates
      </h1>
      <p className="text-xl md:text-2xl font-medium">
        A collection of premium Notion templates to boost productivity, organize projects, and enhance personal planning.
      </p>
      <Link
        href="/store"
        className="text-base font-medium px-4 py-2 rounded-md bg-notion-red text-white hover:bg-notion-red/90 shadow"
      >
        Browse templates
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