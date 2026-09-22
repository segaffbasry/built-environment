"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { contact, legal, servicing } from "@/lib/content";
import { EASE, Magnetic, Reveal, SplitWords } from "./motion";
import { ArrowUpRight, Eyebrow, Pill } from "./ui";

const units = [
  { src: "/images/unit-ventaxia.png", alt: "Vent-Axia MVHR unit", rotate: -4 },
  { src: "/images/unit-zehnder-1.png", alt: "Zehnder MVHR unit", rotate: 0 },
  { src: "/images/unit-zehnder-2.png", alt: "Zehnder ComfoAir MVHR unit", rotate: 4 },
];

export default function Servicing() {
  return (
    <section id="servicing" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
          <div>
            <Reveal>
              <Eyebrow>Service Enquiry</Eyebrow>
            </Reveal>
            <h2 className="display mt-6 text-[clamp(3.25rem,10vw,9.5rem)] leading-[0.9] uppercase">
              <SplitWords text={servicing.title[0]} className="block" />
              <SplitWords text={servicing.title[1]} delay={0.1} className="block text-green-deep" />
            </h2>
          </div>

          <Reveal delay={0.2} className="flex max-w-[360px] flex-col gap-5">
            <div className="flex items-center gap-4 rounded-[20px] bg-paper p-3 pr-5 ring-1 ring-ink/5">
              <div className="relative h-14 w-[104px] shrink-0 overflow-hidden rounded-xl bg-paper">
                <Image src="/images/niceic.png" alt="NICEIC Domestic Installer" fill sizes="104px" className="object-contain" />
              </div>
              <span className="text-sm leading-snug font-semibold">{servicing.accreditation}</span>
            </div>
          </Reveal>
        </div>

        {/* unit gallery */}
        <div className="mt-16 grid grid-cols-3 gap-3 sm:mt-20 sm:gap-6">
          {units.map((u, i) => (
            <motion.figure
              key={u.src}
              initial={{ opacity: 0, y: 60, rotate: u.rotate * 1.6 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, margin: "0px 0px -10% 0px" }}
              transition={{ duration: 1.2, delay: i * 0.1, ease: EASE }}
              className="group relative aspect-square overflow-hidden rounded-[20px] bg-paper p-2 ring-1 ring-ink/5 sm:rounded-[28px] sm:p-3"
            >
              <div className="relative h-full w-full overflow-hidden rounded-[14px] sm:rounded-[20px]">
                <Image
                  src={u.src}
                  alt={u.alt}
                  fill
                  sizes="(min-width: 1320px) 420px, 33vw"
                  className="object-cover transition-transform duration-[1.2s] ease-[var(--ease-out)] group-hover:scale-[1.08] group-hover:rotate-[1.5deg]"
                />
              </div>
            </motion.figure>
          ))}
        </div>

        {/* service list */}
        <div className="mt-16 grid gap-12 sm:mt-24 lg:grid-cols-12">
          <ul className="border-t border-ink/10 lg:col-span-8">
            {servicing.items.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "0px 0px -6% 0px" }}
                transition={{ duration: 0.9, delay: i * 0.05, ease: EASE }}
                className="group relative border-b border-ink/10"
              >
                <span
                  aria-hidden
                  className="absolute inset-0 origin-left scale-x-0 bg-green transition-transform duration-700 ease-[var(--ease-out)] group-hover:scale-x-100"
                />
                <div className="relative flex items-center gap-5 py-5 transition-[padding] duration-700 ease-[var(--ease-out)] group-hover:pl-5 sm:gap-8 sm:py-7">
                  <span className="w-8 text-sm font-semibold tabular-nums text-muted transition-colors group-hover:text-ink/70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 text-[1.25rem] leading-snug font-semibold tracking-[-0.02em] sm:text-[1.9rem]">{item}</span>
                  <ArrowUpRight className="mr-5 size-6 shrink-0 -rotate-45 opacity-0 transition-all duration-700 ease-[var(--ease-out)] group-hover:rotate-0 group-hover:opacity-100" />
                </div>
              </motion.li>
            ))}
          </ul>

          <Reveal delay={0.15} className="lg:col-span-4">
            <div className="grain relative overflow-hidden rounded-[28px] bg-green p-7 text-ink sm:p-9 lg:sticky lg:top-32">
              <div aria-hidden className="absolute -right-16 -bottom-16 size-56 rounded-full bg-paper/30 blur-2xl" />
              <p className="display relative text-[2rem] leading-[1.05] sm:text-[2.5rem]">{servicing.cta}</p>
              <div className="relative mt-10 flex flex-col gap-3 text-[15px] font-semibold">
                <a href={contact.phoneHref} className="group flex items-center justify-between border-b border-ink/15 pb-3">
                  {contact.phone}
                  <ArrowUpRight className="size-4 transition-transform duration-500 group-hover:rotate-45" />
                </a>
                <a href={contact.serviceEmailHref} className="group flex items-center justify-between border-b border-ink/15 pb-3">
                  {contact.serviceEmail}
                  <ArrowUpRight className="size-4 transition-transform duration-500 group-hover:rotate-45" />
                </a>
              </div>
              <div className="relative mt-8">
                <Magnetic>
                  <Pill href={legal.serviceEnquiry.href} tone="ink" external>
                    {legal.serviceEnquiry.label}
                  </Pill>
                </Magnetic>
              </div>
            </div>
          </Reveal>
        </div>

        {/* service partners */}
        <Reveal className="mt-20 sm:mt-28">
          <div className="flex flex-col gap-6 rounded-[28px] bg-paper p-6 ring-1 ring-ink/5 sm:flex-row sm:items-center sm:gap-10 sm:p-8">
            <span className="eyebrow shrink-0 text-muted">{servicing.partners}</span>
            <div className="marquee relative flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
              <div className="marquee-track flex w-max items-center gap-16">
                {[0, 1, 2, 3].map((k) => (
                  <div key={k} className="relative h-16 w-[340px] shrink-0 sm:h-20 sm:w-[425px]" aria-hidden={k > 0}>
                    <Image
                      src="/images/partners.png"
                      alt={k === 0 ? "Zehnder, Greenwood, Mitsubishi Electric, Vent-Axia, Systemair, Vortice, Titon and Nuaire" : ""}
                      fill
                      sizes="425px"
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
            <a
              href="/images/ventilation-servicing-flyer.png"
              target="_blank"
              className="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-green-deep"
            >
              View flyer
              <ArrowUpRight className="size-4 transition-transform duration-500 group-hover:rotate-45" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
