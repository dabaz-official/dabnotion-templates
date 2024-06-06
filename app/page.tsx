import { Hero } from "@dabaz/components/home/Hero";
import { Features } from "@dabaz/components/home/Features";

export default function HomePage() {
  return (
    <main>
      <div className="mx-auto max-w-3xl bg-white text-black">
        <Hero />
      </div>
      <Features />
    </main>
  );
}
