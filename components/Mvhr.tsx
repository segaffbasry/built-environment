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

        {/* A concise performance feature keeps the focus on the benefits. */}
        <div className="mt-16 grid gap-8 border-y border-ink/15 py-10 sm:mt-24 sm:py-14 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-4">
            <p className="eyebrow text-green-deep">Heat recovery</p>
            <p className="mt-6 text-sm text-muted">Recover as much as</p>
            <Counter to={95} suffix="%" className="display mt-2 block text-[clamp(5rem,10vw,8rem)] text-green-deep" />
            <p className="mt-3 text-sm text-muted">of heat from ventilated rooms</p>
          </Reveal>
          <div className="lg:col-span-8 lg:border-l lg:border-ink/15 lg:pl-12">
            <Reveal>
              <h3 className="display text-3xl sm:text-4xl">Fresh air. Recovered warmth.</h3>
              <p className="mt-6 max-w-[65ch] text-lg leading-relaxed text-ink-2">{mvhr.exchange}</p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-[70ch] text-base leading-relaxed text-muted">{mvhr.siting}</p>
            </Reveal>
          </div>
        </div>

        {/* add-ons */}
        <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-6">
          {mvhr.addOns.map((a, i) => (
            <motion.div
              key={a.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -8% 0px" }}
              transition={{ duration: 1, delay: i * 0.1, ease: EASE }}
              className={`group relative isolate overflow-hidden rounded-[20px] p-8 sm:p-10 ${i === 0 ? "bg-ink text-paper" : "bg-green text-ink"}`}
            >
              <span
                aria-hidden
                className={`absolute -right-24 -bottom-24 -z-10 size-72 rounded-full blur-2xl transition-transform duration-[1.2s] ease-[var(--ease-out)] group-hover:scale-150 ${i === 0 ? "bg-green/30" : "bg-paper/40"}`}
              />
              <span className={`text-sm font-semibold tabular-nums ${i === 0 ? "text-green" : "text-ink/60"}`}>{String(i + 1).padStart(2, "0")}</span>
              <h3 className="display mt-8 text-[clamp(2rem,3.6vw,3rem)] leading-none sm:mt-10">{a.name}</h3>
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
