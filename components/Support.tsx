"use client";

import { motion, useScroll, useTransform, type MotionValue } from "motion/react";
import { useRef } from "react";
import { support } from "@/lib/content";
import { EASE, Reveal } from "./motion";
import { CheckIcon, WrenchIcon } from "./ui";

function Word({ children, progress, range }: { children: string; progress: MotionValue<number>; range: [number, number] }) {
  const opacity = useTransform(progress, range, [0.14, 1]);
  const y = useTransform(progress, range, [6, 0]);
  return (
    <motion.span style={{ opacity, y }} className="inline-block">
      {children}&nbsp;
    </motion.span>
  );
}

/** Words light up as the paragraph scrolls through the viewport. */
function ScrollText({ text, className }: { text: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.45"] });
  const words = text.split(" ");
  return (
    <p ref={ref} className={className} aria-label={text}>
      <span aria-hidden>
        {words.map((w, i) => (
          <Word key={i} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]}>
            {w}
          </Word>
        ))}
      </span>
    </p>
  );
}

export default function Support() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "start 0.3"] });
  const clip = useTransform(scrollYProgress, (p) => `inset(0 ${6 - 6 * p}% round ${56 - 20 * p}px)`);

  return (
    <section ref={ref} className="px-3 sm:px-4">
      <motion.div style={{ clipPath: clip }} className="grain relative overflow-hidden bg-ink text-paper">
        <div aria-hidden className="pointer-events-none absolute -left-40 top-10 size-[520px] rounded-full bg-green/20 blur-[120px]" />
        <div aria-hidden className="pointer-events-none absolute -right-40 bottom-0 size-[420px] rounded-full bg-green/10 blur-[100px]" />

        <div className="relative mx-auto max-w-[1240px] px-5 py-24 sm:px-10 sm:py-36">
          <Reveal>
            <span className="eyebrow inline-flex items-center gap-3 text-green">
              <span className="grid size-9 place-items-center rounded-full bg-green text-ink">
                <WrenchIcon className="size-4" />
              </span>
              Ongoing technical support
            </span>
          </Reveal>

          <ScrollText
            text={support.ongoing}
            className="display mt-10 max-w-[1100px] text-[clamp(2rem,4.6vw,4.25rem)] leading-[1.06]"
          />

          <div className="mt-20 grid gap-10 border-t border-paper/10 pt-12 sm:mt-28 lg:grid-cols-12">
            <Reveal className="lg:col-span-6">
              <p className="text-lg leading-relaxed text-paper/70 sm:text-xl">{support.compliance}</p>
            </Reveal>
            <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:col-span-5 lg:col-start-8">
              {[
                { big: "Part F", small: "Building Regulations (2021)" },
                { big: "3.14", small: "in Scotland Standard" },
              ].map((b, i) => (
                <motion.div
                  key={b.big}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.1 + i * 0.1, ease: EASE }}
                  className="group relative overflow-hidden rounded-[22px] bg-paper/[0.06] p-5 ring-1 ring-paper/10 transition-colors duration-500 hover:bg-green hover:text-ink sm:p-6"
                >
                  <CheckIcon className="size-5 text-green transition-colors duration-500 group-hover:text-ink" />
                  <span className="display mt-8 block text-4xl sm:text-5xl">{b.big}</span>
                  <span className="mt-2 block text-sm text-paper/60 transition-colors duration-500 group-hover:text-ink/70">{b.small}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
