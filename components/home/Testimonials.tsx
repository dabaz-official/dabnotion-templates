import Image from 'next/image';

import { testimonialItems } from '@dabaz/components/home/testimonial-items';
import clsx from 'clsx';


export function Testimonials() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-black md:text-5xl">
            What our customers said
          </h2>
          <p className="mt-6 text-lg md:text-xl leading-8 text-black font-medium">
            Over 10,000 users have transformed their digital productivity and organization with our Notion templates.
          </p>
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-2 py-8">
          {testimonialItems.featured.map((item) => (
            <div key={item.body} className="flex flex-col pb-0 md:pb-16 lg:pr-8 xl:pr-20">
              <figure className="mt-10 flex flex-auto flex-col justify-between text-center mx-auto">
                <blockquote className="text-lg leading-8 text-black">
                  <p>&ldquo;{item.body}&rdquo;</p>
                </blockquote>
                <figcaption className="mt-10 flex flex-col items-center gap-x-6 mx-auto gap-4">
                  <Image
                    src={item.author.imageUrl}
                    alt={item.author.name}
                    width={128}
                    height={128}
                    className="h-14 w-14 rounded-full bg-neutral-50"
                  />
                  <div className="text-base">
                    <div className="font-semibold text-black">{item.author.name}</div>
                    <div className="mt-1 text-neutral-600 text-sm md:text-base">
                      {item.author.description}
                    </div>
                  </div>
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
        <div className="mx-auto md:flow-root max-w-2xl md:mt-20 lg:mx-0 lg:max-w-none hidden">
          <div className="-mt-8 sm:columns-2 sm:text-[0] lg:columns-3">
            {testimonialItems.others.map((testimonial) => (
              <div key={testimonial.body} className="pt-4 sm:inline-block sm:w-full sm:px-2">
                <figure className="rounded-2xl bg-neutral-100 p-8 text-sm leading-6">
                  <blockquote className="text-black md:text-base">
                    <p>{`“${testimonial.body}”`}</p>
                  </blockquote>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
