"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { contact, legal, siteMap } from "@/lib/content";
import { EASE, Magnetic, Reveal, SplitWords } from "./motion";
import { ArrowUpRight, ClockIcon, Pill, PinIcon } from "./ui";

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });
  const markY = useTransform(scrollYProgress, [0, 1], ["30%", "0%"]);
  const markRotate = useTransform(scrollYProgress, [0, 1], [-25, 0]);

  const cards = [
    { icon: PinIcon, label: "Find Us", lines: contact.address, href: contact.mapHref, external: true },
    { icon: ClockIcon, label: "Hours", lines: contact.hours },
  ];

  return (
    <footer id="contact" ref={ref} className="scroll-mt-24 px-3 pb-3 sm:px-4 sm:pb-4">
      <div className="grain relative overflow-hidden rounded-[36px] bg-ink text-paper">
        {/* brand globe mark, rising */}
        <motion.div
          aria-hidden
          style={{ y: markY, rotate: markRotate }}
          className="pointer-events-none absolute -top-[6%] -right-[22%] aspect-[280/454] w-[70vw] max-w-[520px] opacity-[0.035] sm:-right-[4%]"
        >
          <Image src="/brand/globe.png" alt="" fill sizes="900px" className="object-contain brightness-0 invert" />
        </motion.div>

        <div className="relative mx-auto max-w-[1320px] px-5 pt-24 pb-10 sm:px-10 sm:pt-36">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Reveal>
                <span className="eyebrow text-green">Enquiries</span>
              </Reveal>
              <h2 className="display mt-6">
                <a href={contact.phoneHref} className="group block w-fit">
                  <SplitWords text={contact.phone} className="block text-[clamp(2.9rem,7.4vw,7.5rem)] whitespace-nowrap transition-colors duration-500 group-hover:text-green" />
                </a>
                <a
                  href={contact.emailHref}
                  className="group relative mt-4 inline-block text-[clamp(1.2rem,2.4vw,2rem)] font-medium tracking-[-0.02em] text-paper/70 transition-colors hover:text-paper"
                >
                  {contact.email}
                  <span className="absolute -bottom-1 left-0 h-[2px] w-full origin-right scale-x-0 bg-green transition-transform duration-500 ease-[var(--ease-out)] group-hover:origin-left group-hover:scale-x-100" />
                </a>
              </h2>
              <Reveal delay={0.2} className="mt-10 flex flex-wrap gap-3">
                <Magnetic>
                  <Pill href={legal.serviceEnquiry.href} external>{legal.serviceEnquiry.label}</Pill>
                </Magnetic>
              </Reveal>
            </div>

            <div className="grid grid-cols-2 content-end gap-3 sm:gap-4 lg:col-span-5">
              {cards.map((c, i) => {
                const Inner = (
                  <>
                    <div className="flex items-center justify-between">
                      <span className="grid size-10 place-items-center rounded-xl bg-paper/10 text-green transition-colors duration-500 group-hover:bg-ink group-hover:text-green">
                        <c.icon className="size-5" />
                      </span>
                      {c.href && <ArrowUpRight className="size-4 opacity-40 transition-all duration-500 group-hover:rotate-45 group-hover:opacity-100" />}
                    </div>
                    <span className="mt-8 block text-xs font-semibold tracking-[0.14em] text-paper/50 uppercase transition-colors duration-500 group-hover:text-ink/60">
                      {c.label}
                    </span>
                    <span className="mt-2 block text-[15px] leading-snug font-semibold break-words">
                      {c.lines.map((l) => (
                        <span key={l} className="block">{l}</span>
                      ))}
                    </span>
                  </>
                );
                const cls =
                  "group block h-full rounded-[22px] bg-paper/[0.05] p-5 ring-1 ring-paper/10 transition-all duration-500 ease-[var(--ease-out)] sm:p-6" +
                  (c.href ? " hover:-translate-y-1 hover:bg-green hover:text-ink" : "");
                return (
                  <motion.div
                    key={c.label}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, delay: i * 0.08, ease: EASE }}
                    className="col-span-2 sm:col-span-1"
                  >
                    {c.href ? (
                      <a href={c.href} className={cls} {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                        {Inner}
                      </a>
                    ) : (
                      <div className={cls}>{Inner}</div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* site map */}
          <div className="mt-24 grid gap-10 border-t border-paper/10 pt-12 sm:mt-32 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <div className="relative h-20 w-[200px] rounded-2xl bg-paper p-3">
                <Image src="/brand/logo.png" alt="Built Environment Technology" fill sizes="200px" className="object-contain p-3" />
              </div>
            </div>
            <nav aria-label="Site Map" className="lg:col-span-8">
              <span className="text-xs font-semibold tracking-[0.14em] text-paper/50 uppercase">Site Map</span>
              <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3">
                {siteMap.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="group inline-flex items-center gap-1.5 text-[15px] text-paper/80 transition-colors hover:text-green">
                      <span className="relative">
                        {l.label}
                        <span className="absolute -bottom-0.5 left-0 h-px w-full origin-right scale-x-0 bg-green transition-transform duration-500 ease-[var(--ease-out)] group-hover:origin-left group-hover:scale-x-100" />
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* giant wordmark */}
          <div aria-hidden className="mt-20 overflow-hidden select-none sm:mt-28">
            <motion.p
              initial={{ y: "100%" }}
              whileInView={{ y: "0%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: EASE }}
              className="display text-center text-[12.2vw] leading-[0.8] tracking-[-0.06em] whitespace-nowrap text-paper/[0.07] xl:text-[10.6rem]"
            >
              built environment
            </motion.p>
          </div>

          <div className="mt-8 flex flex-col items-start justify-between gap-3 border-t border-paper/10 pt-6 text-sm text-paper/50 sm:flex-row sm:items-center">
            <span>{legal.copyright}</span>
            <a href={legal.terms.href} className="transition-colors hover:text-green">{legal.terms.label}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
