import Link from 'next/link';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@dabaz/components/ui/accordion';
import { faqsItems } from './faqs-items';

export function Faqs() {
  return (
    <div className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-black md:text-5xl">
            Frequently asked questions
          </h2>
          <p className="mt-6 text-lg md:text-xl leading-8 text-black font-medium">
            Can’t find the answer you’re looking for? Send us an{" "}
            <Link
              href="mailto:notion@dabaz.me"
              className="underline text-notion-yellow hover:text-notion-yellow/80"
            >
              email
            </Link>
            {" "}and we’ll get back to you ASAP.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <Accordion type="single" collapsible className="w-full">
            {faqsItems.map((item) => (
              <AccordionItem key={item.question} value={item.answer}>
                <AccordionTrigger className="text-base md:text-lg font-semibold text-black">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-neutral-600">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  )
}