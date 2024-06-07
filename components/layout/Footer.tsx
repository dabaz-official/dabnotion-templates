const today = new Date();
const year = today.getFullYear();

export function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-8 md:flex md:items-center md:justify-center lg:px-8">
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-sm leading-5 text-neutral-600">
            &copy; {year} DabAZ. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}