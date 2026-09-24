"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { contact, legal, servicing } from "@/lib/content";
import { EASE, Magnetic, Reveal, SplitWords } from "./motion";
import { ArrowUpRight, Eyebrow, Pill } from "./ui";

const units = [
  { src: "/images/unit-ventaxia.png", alt: "Vent-Axia MVHR unit", label: "Vent-Axia" },
  { src: "/images/unit-zehnder-1.png", alt: "Zehnder MVHR unit", label: "Zehnder" },
  { src: "/images/unit-zehnder-2.png", alt: "Zehnder ComfoAir MVHR unit", label: "Zehnder ComfoAir" },
];

export default function Servicing() {
  return (
    <section id="servicing" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-7 lg:flex-row lg:items-end">
          <div>
            <Reveal>
              <Eyebrow>Service Enquiry</Eyebrow>
            </Reveal>
            <h2 className="display mt-6 text-[clamp(2.5rem,6vw,5.25rem)] leading-[0.9] uppercase">
              <SplitWords text={servicing.title[0]} className="block" />
              <SplitWords text={servicing.title[1]} delay={0.1} className="block text-green-deep" />
            </h2>
          </div>

          <Reveal delay={0.2} className="flex items-center gap-5 mix-blend-multiply lg:mb-2 lg:max-w-[280px]">
            <div className="relative h-16 w-[116px] shrink-0 mix-blend-multiply">
              <Image src="/images/niceic.png" alt="NICEIC" fill sizes="116px" className="object-contain" />
            </div>
            <div className="border-l border-ink/15 pl-5">
              <p className="text-[11px] font-semibold tracking-[0.16em] text-muted uppercase">Accreditation</p>
              <p className="mt-1 text-sm leading-snug font-semibold">{servicing.accreditation}</p>
            </div>
          </Reveal>
        </div>

        {/* unit gallery */}
        <div className="mt-8 grid grid-cols-1 gap-6 sm:mt-10 sm:grid-cols-3 sm:gap-5">
          {units.map((u, i) => (
            <motion.figure
              key={u.src}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -10% 0px" }}
              transition={{ duration: 1.2, delay: i * 0.1, ease: EASE }}
              className="group"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-[16px] bg-green-soft">
                <Image
                  src={u.src}
                  alt={u.alt}
                  fill
                  sizes="(min-width: 1320px) 405px, (min-width: 640px) 33vw, 100vw"
                  className="object-cover transition-transform duration-[1.2s] ease-[var(--ease-out)] group-hover:scale-[1.04]"
                />
              </div>
              <figcaption className="mt-4 flex items-center justify-between border-b border-ink/15 pb-4">
                <span className="text-sm font-semibold">{u.label}</span>
                <span className="text-[11px] tracking-[0.12em] text-muted uppercase">MVHR system</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        {/* service list */}
        <div className="mt-12 grid gap-10 sm:mt-16 lg:grid-cols-12">
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
                  <span className="flex-1 text-[1.0625rem] leading-snug font-semibold tracking-[-0.02em] sm:text-[1.375rem]">{item}</span>
                  <ArrowUpRight className="mr-5 size-6 shrink-0 -rotate-45 opacity-0 transition-all duration-700 ease-[var(--ease-out)] group-hover:rotate-0 group-hover:opacity-100" />
                </div>
              </motion.li>
            ))}
          </ul>

          <Reveal delay={0.15} className="lg:col-span-4">
            <div className="grain relative overflow-hidden rounded-[28px] bg-green p-7 text-ink sm:p-9 lg:sticky lg:top-32">
              <div aria-hidden className="absolute -right-16 -bottom-16 size-56 rounded-full bg-paper/30 blur-2xl" />
              <p className="display relative text-[1.625rem] leading-[1.15] sm:text-[1.875rem]">{servicing.cta}</p>
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
          <div className="flex flex-col gap-6 border-y border-ink/15 py-7 sm:flex-row sm:items-center sm:gap-10">
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
                      className="object-contain mix-blend-multiply"
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
