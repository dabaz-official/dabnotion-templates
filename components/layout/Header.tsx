'use client'

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Dialog, DialogPanel } from '@headlessui/react';
import clsx from 'clsx';

import { Logo } from '@dabaz/components/common/Logo';
import { Button } from '@dabaz/components/ui/button';
import { useScrollTop } from '@dabaz/hooks/use-scroll-top';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrolled = useScrollTop();

  return (
    <header className={clsx(
      "fixed top-0 left-0 right-0 z-[100] p-4 sm:px-6 md:px-8", scrolled && "bg-white/80 border-b-[1px] border-white/40 shadow-sm backdrop-blur-md"
    )}>
      <nav className="flex justify-between">
        <div className="flex items-center">
          <Link href="/">
            <span className="sr-only">DabNotion</span>
            <Logo className="h-9 w-auto" />
          </Link>
        </div>
        <div className="flex md:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-neutral-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden md:flex gap-2 items-center my-auto">
          <Link
            href="#faqs"
          >
            <Button variant="ghost" size="notionsm">
              FAQs
            </Button>
          </Link>
          <Link
            href="/store"
          >
            <Button variant="black" size="notionsm">
              Browse templates
            </Button>
          </Link>
        </div>
        <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-4 sm:max-w-sm sm:ring-1 sm:ring-neutral-900/10">
            <div className="flex items-center justify-between">
              <Link href="/">
                <span className="sr-only">DabNotion</span>
                <Logo className="h-9 w-auto" />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-neutral-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6">
                <div className="py-4">
                  <Link
                    href="/store"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-medium leading-7 text-black hover:bg-neutral-50"
                  >
                    Browse templates
                  </Link>
                  <Link
                    href="#faqs"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-medium leading-7 text-black hover:bg-neutral-50"
                  >
                    FAQs
                  </Link>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </nav>
    </header>
  );
}