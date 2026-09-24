"use client";

import { motion } from "motion/react";
import { services } from "@/lib/content";
import { EASE, Reveal, SplitWords } from "./motion";
import { ArrowUpRight, BadgeIcon, BoxIcon, CadIcon, ClipboardIcon, Eyebrow, FanIcon, SpecIcon, TruckIcon } from "./ui";

const icons = [SpecIcon, CadIcon, TruckIcon, FanIcon, ClipboardIcon, BadgeIcon, BoxIcon];

export default function Services() {
  return (
    <section id="services" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto grid max-w-[1320px] gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <Reveal>
              <Eyebrow>Project Services</Eyebrow>
            </Reveal>
            <SplitWords
              as="h2"
              text="Every project is different"
              className="display mt-6 block text-[clamp(2rem,3.8vw,3.25rem)]"
            />
            <Reveal delay={0.15}>
              <p className="mt-8 max-w-[480px] text-base leading-relaxed text-muted sm:text-lg">{services.lead}</p>
            </Reveal>
          </div>
        </div>

        <ul className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:col-span-7">
          {services.options.map((label, i) => {
            const Icon = icons[i];
            const wide = i === services.options.length - 1;
            return (
              <motion.li
                key={label}
                initial={{ opacity: 0, y: 40, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "0px 0px -8% 0px" }}
                transition={{ duration: 0.9, delay: (i % 2) * 0.08, ease: EASE }}
                className={wide ? "sm:col-span-2" : ""}
              >
                <div className="group relative isolate flex h-full min-h-[148px] cursor-default flex-col justify-between overflow-hidden rounded-[24px] bg-paper p-6 ring-1 ring-ink/[0.06] transition-[transform,box-shadow] duration-700 ease-[var(--ease-out)] hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-30px_rgba(79,122,28,0.5)] sm:min-h-[184px] sm:p-7">
                  {/* sweep fill */}
                  <span
                    aria-hidden
                    className="absolute inset-0 -z-10 origin-bottom scale-y-0 rounded-[24px] bg-green transition-transform duration-700 ease-[var(--ease-out)] group-hover:scale-y-100"
                  />
                  <div className="flex items-start justify-between gap-4">
                    <span className="text-sm font-semibold tabular-nums text-muted transition-colors duration-500 group-hover:text-ink/70">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="grid size-12 place-items-center rounded-2xl bg-green-soft text-green-deep transition-all duration-700 ease-[var(--ease-out)] group-hover:rotate-[-8deg] group-hover:bg-ink group-hover:text-green">
                      <Icon className="size-6" />
                    </span>
                  </div>
                  <div className="mt-8 flex items-end justify-between gap-4">
                    <p className="text-[1.0625rem] leading-snug font-semibold tracking-[-0.015em] text-ink sm:text-[1.125rem]">{label}</p>
                    <ArrowUpRight className="size-5 shrink-0 -translate-x-2 translate-y-2 opacity-0 transition-all duration-500 ease-[var(--ease-out)] group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100" />
                  </div>
                </div>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
