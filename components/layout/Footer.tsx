import { Logo } from "@dabaz/components/common/Logo";

const today = new Date();
const year = today.getFullYear();

export function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-8 md:flex md:items-center md:justify-center lg:px-8">
        <div className="md:order-1">
          <Logo className="h-8 md:h-10 w-auto mx-auto" />
          <p className="text-center text-sm leading-5 text-neutral-600 mt-4">
            &copy; {year} DabAZ. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}