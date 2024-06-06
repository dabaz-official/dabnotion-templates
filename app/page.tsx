import { Hero } from "@dabaz/components/home/Hero";
import { Features } from "@dabaz/components/home/Features";
import { Testimonials } from "@dabaz/components/home/Testimonials";

export default function HomePage() {
  return (
    <main>
      <div className="mx-auto max-w-3xl bg-white text-black">
        <Hero />
      </div>
      <Features />
      <Testimonials />
    </main>
  );
}
