"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { contact, hero } from "@/lib/content";
import { Counter, EASE, Magnetic, SplitWords } from "./motion";
import { Pill, ShieldIcon } from "./ui";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yA = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const yB = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const yC = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const curve = useTransform(scrollYProgress, [0, 1], [0, 160]);

  return (
    <section id="top" ref={ref} className="relative overflow-hidden pt-36 pb-12 sm:pt-44 sm:pb-16">
      {/* ambient glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[720px] w-[1200px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(141,199,63,0.28),transparent)] blur-2xl" />
        <div className="absolute inset-x-0 top-0 h-full bg-[linear-gradient(to_bottom,transparent_60%,var(--cream))]" />
      </div>

      {/* sweeping airflow curve, drawn on load */}
      <motion.svg
        aria-hidden
        style={{ y: curve }}
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-x-0 top-[34%] h-[70vh] w-full"
      >
        <motion.path
          d="M-40 620 C 260 760, 520 300, 820 420 S 1260 760, 1500 180"
          fill="none"
          stroke="var(--green)"
          strokeWidth="26"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2.4, delay: 0.6, ease: [0.65, 0, 0.35, 1] }}
        />
        <motion.path
          d="M-40 690 C 300 820, 560 380, 860 500 S 1280 820, 1500 290"
          fill="none"
          stroke="var(--green-soft)"
          strokeWidth="10"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.6, delay: 0.9, ease: [0.65, 0, 0.35, 1] }}
        />
      </motion.svg>

      <div className="relative mx-auto max-w-[1320px] px-5 sm:px-8">
        <div className="mx-auto max-w-[1080px] text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
            className="mb-7 inline-flex items-center gap-2 rounded-full bg-paper/80 py-1.5 pl-1.5 pr-4 text-[13px] font-semibold text-ink-2 ring-1 ring-ink/5 backdrop-blur"
          >
            <span className="rounded-full bg-green px-2.5 py-1 text-[11px] font-bold tracking-wide text-ink uppercase">MVHR</span>
            &amp; MEV
          </motion.div>

          <h1 className="display text-[clamp(2.25rem,5.6vw,5rem)] text-balance text-ink">
            <SplitWords text="Welcome to" immediate delay={0.25} className="block text-ink/45" />
            <SplitWords text="Built Environment Technology Ltd" immediate delay={0.4} className="block" />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.1, delay: 0.9, ease: EASE }}
            className="mx-auto mt-8 max-w-[640px] text-base leading-relaxed text-muted sm:text-lg"
          >
            {hero.intro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1, ease: EASE }}
            className="mt-10 flex flex-wrap items-center justify-center gap-3"
          >
            <Magnetic>
              <Pill href={contact.phoneHref} icon="phone">{contact.phone}</Pill>
            </Magnetic>
            <Magnetic>
              <Pill href={contact.emailHref} tone="ghost" icon="mail">{contact.email}</Pill>
            </Magnetic>
          </motion.div>
        </div>

        {/* composition — outer layer = scroll parallax, inner = entrance */}
        <div className="relative mx-auto mt-20 grid max-w-[1180px] grid-cols-12 items-end gap-4 sm:mt-24 sm:gap-6">
          <motion.div style={{ y: yA }} className="relative col-span-7 sm:col-span-4">
            <motion.figure
              initial={{ opacity: 0, y: 80, rotate: -3 }}
              animate={{ opacity: 1, y: 0, rotate: -2 }}
              transition={{ duration: 1.4, delay: 1.2, ease: EASE }}
              className="relative"
            >
              <div className="group relative aspect-[4/5] overflow-hidden rounded-[28px] bg-green-soft shadow-[0_40px_80px_-40px_rgba(16,20,16,0.45)]">
                <Image
                  src="/images/installer.png"
                  alt="Built Environment Technology engineer installing an MVHR unit"
                  fill
                  sizes="(min-width: 640px) 33vw, 58vw"
                  className="object-cover transition-transform duration-[1.4s] ease-[var(--ease-out)] group-hover:scale-[1.06]"
                  loading="eager"
                />
              </div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2, duration: 0.9, ease: EASE }}
                className="absolute -bottom-5 left-4 flex items-center gap-2.5 rounded-2xl bg-paper/90 py-2.5 pl-2.5 pr-4 shadow-xl ring-1 ring-ink/5 backdrop-blur sm:left-6"
              >
                <span className="grid size-9 place-items-center rounded-xl bg-green text-ink">
                  <ShieldIcon className="size-5" />
                </span>
                <span className="text-left text-[12px] leading-tight font-semibold sm:text-[13px]">
                  NICEIC
                  <span className="block font-normal text-muted">Domestic Installer</span>
                </span>
              </motion.div>
            </motion.figure>
          </motion.div>

          <motion.div style={{ y: yB }} className="relative col-span-5 sm:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4, delay: 1.35, ease: EASE }}
              className="grain relative flex aspect-[4/5] flex-col justify-between overflow-hidden rounded-[28px] bg-ink p-5 text-paper sm:aspect-[4/4.4] sm:p-8"
            >
              <div aria-hidden className="absolute -right-20 -top-20 size-64 rounded-full bg-green/25 blur-3xl" />
              <span className="eyebrow relative text-green">Heat recovery</span>
              <div className="relative">
                <Counter to={95} suffix="%" className="display block text-[clamp(3rem,7vw,6.5rem)] text-green" />
                <p className="mt-3 max-w-[18ch] text-sm leading-snug text-paper/70 sm:text-base">recover as much as 95% of heat from the ventilated rooms</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div style={{ y: yC }} className="relative col-span-12 hidden sm:col-span-4 sm:block">
            <motion.figure
              initial={{ opacity: 0, y: 120, rotate: 3 }}
              animate={{ opacity: 1, y: 0, rotate: 2 }}
              transition={{ duration: 1.4, delay: 1.5, ease: EASE }}
              className="relative"
            >
              <div className="group relative aspect-[4/4.6] overflow-hidden rounded-[28px] bg-paper shadow-[0_40px_80px_-40px_rgba(16,20,16,0.45)]">
                <Image
                  src="/images/unit-zehnder-1.png"
                  alt="Zehnder MVHR unit"
                  fill
                  sizes="33vw"
                  className="object-cover transition-transform duration-[1.4s] ease-[var(--ease-out)] group-hover:scale-[1.06]"
                />
              </div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2.2, duration: 0.9, ease: EASE }}
                className="absolute -top-6 -left-6 rounded-2xl bg-green px-4 py-3 text-ink shadow-xl"
              >
                <span className="display block text-3xl">Part F</span>
                <span className="text-[12px] font-semibold opacity-75">current Building Regulations (2021)</span>
              </motion.div>
            </motion.figure>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
