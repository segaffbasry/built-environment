"use client";

import Image from "next/image";
import { motion, useScroll, useSpring } from "motion/react";
import { useRef } from "react";
import { mvhr } from "@/lib/content";
import { Counter, EASE, Reveal, SplitWords } from "./motion";
import { Eyebrow } from "./ui";

function Benefits() {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.7", "end 0.6"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <ol ref={ref} className="relative">
      <span aria-hidden className="absolute top-6 bottom-6 left-6 w-px bg-ink/10" />
      <motion.span aria-hidden style={{ scaleY }} className="absolute top-6 bottom-6 left-6 w-px origin-top bg-green" />
      {mvhr.benefits.map((b, i) => (
        <motion.li
          key={b}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -12% 0px" }}
          transition={{ duration: 0.9, ease: EASE }}
          className="group relative flex gap-6 pb-10 last:pb-0 sm:gap-8 sm:pb-14"
        >
          <span className="relative z-10 grid size-12 shrink-0 place-items-center rounded-full bg-cream ring-1 ring-ink/10 transition-all duration-500 ease-[var(--ease-out)] group-hover:scale-110 group-hover:bg-green group-hover:ring-green">
            <span className="text-base font-semibold tabular-nums">{i + 1}</span>
          </span>
          <p className="pt-2 text-[1.2rem] leading-snug font-medium tracking-[-0.01em] text-ink-2 transition-colors duration-500 group-hover:text-ink sm:text-[1.5rem]">
            {b}
          </p>
        </motion.li>
      ))}
    </ol>
  );
}

/** Cross-flow heat exchanger: stale air out, fresh air in, heat passes across. */
function ExchangerDiagram() {
  return (
    <div className="relative aspect-square w-full">
      <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full" aria-hidden>
        {/* ducts */}
        <path d="M20 120 L160 160 M240 240 L380 280" stroke="#101410" strokeOpacity="0.1" strokeWidth="34" strokeLinecap="round" fill="none" />
        <path d="M20 280 L160 240 M240 160 L380 120" stroke="#8dc73f" strokeOpacity="0.22" strokeWidth="34" strokeLinecap="round" fill="none" />
        {/* airflows */}
        <path className="flow" d="M20 120 L160 160 L240 240 L380 280" stroke="#101410" strokeWidth="3" fill="none" strokeLinecap="round" />
        <path className="flow" d="M20 280 L160 240 L240 160 L380 120" stroke="#4f7a1c" strokeWidth="3" fill="none" strokeLinecap="round" />
        {/* exchanger core */}
        <motion.g
          style={{ transformBox: "fill-box", transformOrigin: "center" }}
          initial={{ rotate: 0 }}
          whileInView={{ rotate: 45 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, ease: EASE }}
        >
          <rect x="140" y="140" width="120" height="120" rx="18" fill="#ffffff" stroke="#101410" strokeOpacity="0.12" />
          {Array.from({ length: 7 }).map((_, i) => (
            <line key={i} x1={152 + i * 16} y1="152" x2={152 + i * 16} y2="248" stroke={i % 2 ? "#8dc73f" : "#101410"} strokeOpacity={i % 2 ? 0.9 : 0.25} strokeWidth="3" strokeLinecap="round" />
          ))}
        </motion.g>
      </svg>

      <span className="absolute top-[18%] left-0 rounded-full bg-ink px-3 py-1 text-[11px] font-semibold text-paper sm:text-xs">polluted air</span>
      <span className="absolute bottom-[18%] left-0 rounded-full bg-green px-3 py-1 text-[11px] font-semibold text-ink sm:text-xs">fresh incoming air</span>
      <span className="absolute top-[18%] right-0 rounded-full bg-paper px-3 py-1 text-[11px] font-semibold text-green-deep ring-1 ring-green/40 sm:text-xs">pre-warm</span>
      <span className="absolute bottom-[8%] left-1/2 -translate-x-1/2 rounded-full bg-paper px-3 py-1 text-[11px] font-semibold text-muted ring-1 ring-ink/10 sm:text-xs">heat exchanger</span>
    </div>
  );
}

export default function Mvhr() {
  return (
    <section id="mvhr" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
        {/* benefits */}
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <Reveal>
                <Eyebrow>MVHR</Eyebrow>
              </Reveal>
              <SplitWords as="h2" text={mvhr.title} className="display mt-6 block text-[clamp(2.3rem,4.6vw,4.25rem)]" stagger={0.04} />
              <Reveal delay={0.2}>
                <div className="group relative mt-10 hidden aspect-[5/4] max-w-[440px] overflow-hidden rounded-[28px] bg-paper lg:block">
                  <Image
                    src="/images/unit-zehnder-2.png"
                    alt="Wall-mounted MVHR unit"
                    fill
                    sizes="440px"
                    className="object-cover transition-transform duration-[1.4s] ease-[var(--ease-out)] group-hover:scale-105"
                  />
                </div>
              </Reveal>
            </div>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <Benefits />
          </div>
        </div>

        {/* heat exchange */}
        <div className="mt-28 grid items-center gap-12 rounded-[36px] bg-paper p-6 ring-1 ring-ink/5 sm:mt-40 sm:p-12 lg:grid-cols-2 lg:gap-16 lg:p-16">
          <Reveal>
            <ExchangerDiagram />
          </Reveal>
          <div>
            <Reveal>
              <div className="flex items-end gap-4">
                <Counter to={95} suffix="%" className="display text-[clamp(5rem,12vw,10rem)] leading-[0.8] text-green-deep" />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-8 text-lg leading-relaxed text-ink-2 sm:text-xl">{mvhr.exchange}</p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">{mvhr.siting}</p>
            </Reveal>
          </div>
        </div>

        {/* add-ons */}
        <div className="mt-6 grid gap-4 sm:mt-6 sm:grid-cols-2 sm:gap-6">
          {mvhr.addOns.map((a, i) => (
            <motion.div
              key={a.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -8% 0px" }}
              transition={{ duration: 1, delay: i * 0.1, ease: EASE }}
              className={`group relative isolate overflow-hidden rounded-[32px] p-8 sm:p-12 ${i === 0 ? "bg-ink text-paper" : "bg-green text-ink"}`}
            >
              <span
                aria-hidden
                className={`absolute -right-24 -bottom-24 -z-10 size-72 rounded-full blur-2xl transition-transform duration-[1.2s] ease-[var(--ease-out)] group-hover:scale-150 ${i === 0 ? "bg-green/30" : "bg-paper/40"}`}
              />
              <span className={`text-sm font-semibold tabular-nums ${i === 0 ? "text-green" : "text-ink/60"}`}>{String(i + 1).padStart(2, "0")}</span>
              <h3 className="display mt-14 text-[clamp(2rem,3.6vw,3rem)] leading-none sm:mt-20">{a.name}</h3>
              <p className={`mt-5 max-w-[46ch] text-lg leading-relaxed sm:text-xl ${i === 0 ? "text-paper/70" : "text-ink/75"}`}>
                {a.prefix && <>{a.prefix} </>}
                <b className={i === 0 ? "text-paper" : "text-ink"}>{a.name}</b> {a.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
