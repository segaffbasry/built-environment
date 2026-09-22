"use client";

import Image from "next/image";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";
import { contact, legal, nav } from "@/lib/content";
import { Pill } from "./ui";
import { EASE } from "./motion";

export default function Nav() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setSolid(y > 24);
    setHidden(y > 480 && y > prev && !open);
  });

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: hidden ? -110 : 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: EASE, delay: hidden ? 0 : 0.1 }}
        className="fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:px-6 sm:pt-4"
      >
        <div
          className={`mx-auto flex h-16 max-w-[1320px] items-center justify-between rounded-full pl-5 pr-2 transition-[background-color,box-shadow,backdrop-filter] duration-500 sm:h-[72px] sm:pl-6 ${
            solid || open ? "bg-paper/80 shadow-[0_10px_40px_-18px_rgba(16,20,16,0.25)] ring-1 ring-ink/5 backdrop-blur-xl" : "bg-transparent"
          }`}
        >
          <a href="#top" aria-label="Built Environment Technology — home" className="relative block h-10 w-[98px] shrink-0 sm:h-12 sm:w-[118px]">
            <Image src="/brand/logo.png" alt="Built Environment Technology" fill sizes="120px" className="object-contain object-left" loading="eager" />
          </a>

          <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
            {nav.map((l) => (
              <a key={l.href} href={l.href} className="group relative rounded-full px-4 py-2 text-[15px] font-medium text-ink-2 transition-colors hover:text-ink">
                <span className="absolute inset-0 scale-75 rounded-full bg-green-soft opacity-0 transition-all duration-500 ease-[var(--ease-out)] group-hover:scale-100 group-hover:opacity-100" />
                <span className="relative">{l.label}</span>
              </a>
            ))}
            <a href={legal.shop.href} className="group relative rounded-full px-4 py-2 text-[15px] font-medium text-ink-2 transition-colors hover:text-ink">
              <span className="absolute inset-0 scale-75 rounded-full bg-green-soft opacity-0 transition-all duration-500 ease-[var(--ease-out)] group-hover:scale-100 group-hover:opacity-100" />
              <span className="relative">Shop</span>
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <span className="hidden sm:block">
              <Pill href={contact.phoneHref} icon="phone">
                {contact.phone}
              </Pill>
            </span>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Menu"}
              aria-expanded={open}
              onClick={() => setOpen((o) => !o)}
              className="grid size-12 place-items-center rounded-full bg-ink text-paper lg:hidden"
            >
              <span className="relative block h-3 w-5">
                <span className={`absolute left-0 top-0 h-[2px] w-5 rounded bg-current transition-transform duration-500 ease-[var(--ease-out)] ${open ? "translate-y-[5px] rotate-45" : ""}`} />
                <span className={`absolute bottom-0 left-0 h-[2px] w-5 rounded bg-current transition-transform duration-500 ease-[var(--ease-out)] ${open ? "-translate-y-[5px] -rotate-45" : ""}`} />
              </span>
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 bg-cream/95 px-6 pt-28 backdrop-blur-xl lg:hidden"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <nav aria-label="Mobile" className="flex flex-col">
              {[...nav, { label: legal.shop.label, href: legal.shop.href }].map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 + i * 0.06, duration: 0.7, ease: EASE }}
                  className="display border-b border-line py-4 text-4xl"
                >
                  {l.label}
                </motion.a>
              ))}
            </nav>
            <div className="mt-10 flex flex-col gap-2 text-lg">
              <a href={contact.phoneHref} className="font-semibold">{contact.phone}</a>
              <a href={contact.emailHref} className="text-muted">{contact.email}</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
