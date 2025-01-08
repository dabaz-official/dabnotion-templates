import Image from 'next/image';

const products = {
  bundle: [
    {
      id: 1,
      name: 'Resolution Bundle',
      tags: ['Personal'],
      href: 'https://gumroad.com/a/429277395/YkJkr',
      ogPrice: '$54',
      price: '$19',
      discount: '%65',
      imageSrc: '/images/products/resolution-bundle.png',
    },
  ],
  personal: [
    {
      id: 1,
      name: 'Second Brain',
      tags: ['Personal', 'Project Management'],
      href: 'https://gumroad.com/a/429277395/qwzxl',
      price: '$99',
      imageSrc: '/images/products/second-brain.png',
    },
    {
      id: 2,
      name: 'GTD Dashboard',
      tags: ['Personal', 'Project Management'],
      href: 'https://gumroad.com/a/429277395/ulzyy',
      price: 'From $39',
      imageSrc: '/images/products/gtd-dashboard.webp',
    },
    {
      id: 3,
      name: 'Resolution Bundle',
      tags: ['Personal'],
      href: 'https://gumroad.com/a/429277395/YkJkr',
      ogPrice: '$54',
      price: '$19',
      discount: '%65',
      imageSrc: '/images/products/resolution-bundle.png',
    },
    {
      id: 4,
      name: 'Finance Tracker',
      tags: ['Personal', 'Finance'],
      href: 'https://gumroad.com/a/429277395/beygm',
      price: '$39',
      imageSrc: '/images/products/finance-tracker.png',
    },
  ],
  pro: [
    {
      id: 1,
      name: 'Second Brain',
      tags: ['Personal', 'Project Management'],
      href: 'https://gumroad.com/a/429277395/qwzxl',
      price: '$99',
      imageSrc: '/images/products/second-brain.png',
    },
    {
      id: 2,
      name: 'Freelance OS',
      tags: ['Personal', 'Professional', 'Business'],
      href: 'https://gumroad.com/a/429277395/gpckg',
      price: '$79',
      imageSrc: '/images/products/freelance-os.jpeg',
    },
    {
      id: 3,
      name: 'Content OS',
      tags: ['Personal', 'Professional', 'Business', 'Content'],
      href: 'https://gumroad.com/a/429277395/vhdyw',
      price: '$79',
      imageSrc: '/images/products/content-os.png',
    },
    {
      id: 4,
      name: 'Content Calendar',
      tags: ['Personal', 'Professional', 'Business', 'Content'],
      href: 'https://gumroad.com/a/429277395/wxtvs',
      price: '$0',
      imageSrc: '/images/products/content-calendar.png',
    },
  ],
  course: [
    {
      id: 1,
      name: 'Creator Course',
      tags: ['Professional', 'Business', 'Course'],
      href: 'https://gumroad.com/a/429277395/unndvl',
      price: '$149',
      imageSrc: '/images/products/notion-creator-course.webp',
    },
  ]
}

export function ProductList() {
  return (
    <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-7xl">
      <div className="flex items-center justify-between space-x-4">
        <h2 className="text-lg font-semibold text-black">
          Bundle
        </h2>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
        {products.bundle.map((product) => (
          <div key={product.id} className="group relative">
            <div className="aspect-h-3 aspect-w-6 overflow-hidden rounded-lg bg-neutral-100">
              <Image
                width={600}
                height={315}
                src={product.imageSrc}
                alt={product.name} 
                className="object-cover object-center"
              />
              <div className="flex items-end p-2 opacity-0 group-hover:opacity-100" aria-hidden="true">
                <div className="w-full rounded-md bg-white bg-opacity-75 px-4 py-2 text-center text-sm font-medium text-black backdrop-blur-sm backdrop-filter">
                  View Product
                </div>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between space-x-8 text-base font-medium text-black">
              <h3>
                <a
                  href={product.href}
                  target="_blank"
                >
                  <span aria-hidden="true" className="absolute inset-0" />
                  {product.name}
                </a>
              </h3>
              <p className="flex gap-1">
                <span>
                  <s className="text-notion-orange">
                    {product.ogPrice}
                  </s>
                </span>
                {product.price}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 flex items-center justify-between space-x-4">
        <h2 className="text-lg font-semibold text-black">
          Personal
        </h2>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
        {products.personal.map((product) => (
          <div key={product.id} className="group relative">
            <div className="aspect-h-3 aspect-w-6 overflow-hidden rounded-lg bg-neutral-100">
              <Image
                width={600}
                height={315}
                src={product.imageSrc}
                alt={product.name} 
                className="object-cover object-center"
              />
              <div className="flex items-end p-2 opacity-0 group-hover:opacity-100" aria-hidden="true">
                <div className="w-full rounded-md bg-white bg-opacity-75 px-4 py-2 text-center text-sm font-medium text-black backdrop-blur-sm backdrop-filter">
                  View Product
                </div>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between space-x-8 text-base font-medium text-black">
              <h3>
                <a
                  href={product.href}
                  target="_blank"
                >
                  <span aria-hidden="true" className="absolute inset-0" />
                  {product.name}
                </a>
              </h3>
              <p className="flex gap-1">
                <span>
                  <s className="text-notion-orange">
                    {product.ogPrice}
                  </s>
                </span>
                {product.price}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 flex items-center justify-between space-x-4">
        <h2 className="text-lg font-semibold text-black">
          Professional
        </h2>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
        {products.pro.map((product) => (
          <div key={product.id} className="group relative">
            <div className="aspect-h-3 aspect-w-6 overflow-hidden rounded-lg bg-neutral-100">
              <Image
                width={600}
                height={315}
                src={product.imageSrc}
                alt={product.name} 
                className="object-cover object-center"
              />
              <div className="flex items-end p-2 opacity-0 group-hover:opacity-100" aria-hidden="true">
                <div className="w-full rounded-md bg-white bg-opacity-75 px-4 py-2 text-center text-sm font-medium text-black backdrop-blur-sm backdrop-filter">
                  View Product
                </div>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between space-x-8 text-base font-medium text-black">
              <h3>
                <a
                  href={product.href}
                  target="_blank"
                >
                  <span aria-hidden="true" className="absolute inset-0" />
                  {product.name}
                </a>
              </h3>
              <p className="flex gap-1">
                {product.price}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 flex items-center justify-between space-x-4">
        <h2 className="text-lg font-semibold text-black">
          Course
        </h2>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
        {products.course.map((product) => (
          <div key={product.id} className="group relative">
            <div className="aspect-h-3 aspect-w-6 overflow-hidden rounded-lg bg-neutral-100">
              <Image
                width={600}
                height={315}
                src={product.imageSrc}
                alt={product.name} 
                className="object-cover object-center"
              />
              <div className="flex items-end p-2 opacity-0 group-hover:opacity-100" aria-hidden="true">
                <div className="w-full rounded-md bg-white bg-opacity-75 px-4 py-2 text-center text-sm font-medium text-black backdrop-blur-sm backdrop-filter">
                  View Product
                </div>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between space-x-8 text-base font-medium text-black">
              <h3>
                <a
                  href={product.href}
                  target="_blank"
                >
                  <span aria-hidden="true" className="absolute inset-0" />
                  {product.name}
                </a>
              </h3>
              <p className="flex gap-1">
                {product.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
