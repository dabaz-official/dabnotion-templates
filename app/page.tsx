import { Hero } from "@dabaz/components/home/Hero";
import { Features } from "@dabaz/components/home/Features";
import { Testimonials } from "@dabaz/components/home/Testimonials";
import { Faqs } from "@dabaz/components/home/Faqs";

export default function HomePage() {
  return (
    <main>
      <div className="mx-auto max-w-3xl text-black">
        <Hero />
      </div>
      <Features />
      <Testimonials />
      <div className="mx-auto max-w-3xl text-black">
        <Faqs />
      </div>
    </main>
  );
}
