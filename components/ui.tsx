import type { ReactNode, SVGProps } from "react";

type Tone = "green" | "ink" | "ghost" | "light";

const tones: Record<Tone, string> = {
  green: "bg-green text-ink",
  ink: "bg-ink text-paper",
  ghost: "bg-paper/70 text-ink ring-1 ring-ink/10 backdrop-blur",
  light: "bg-paper text-ink",
};

const dotTones: Record<Tone, string> = {
  green: "bg-ink text-green",
  ink: "bg-green text-ink",
  ghost: "bg-ink text-paper",
  light: "bg-green text-ink",
};

/** Pill button: label rolls up on hover, arrow chip slides through. */
export function Pill({
  href,
  children,
  tone = "green",
  external,
  className = "",
  icon = "arrow",
}: {
  href: string;
  children: ReactNode;
  tone?: Tone;
  external?: boolean;
  className?: string;
  icon?: "arrow" | "phone" | "mail";
}) {
  const Icon = icon === "phone" ? PhoneIcon : icon === "mail" ? MailIcon : ArrowIcon;
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`group relative inline-flex h-12 items-center whitespace-nowrap gap-3 rounded-full pl-6 pr-1.5 text-[15px] font-semibold transition-[transform,box-shadow] duration-500 ease-[var(--ease-out)] hover:shadow-[0_14px_40px_-12px_rgba(79,122,28,0.55)] active:scale-[0.97] ${tones[tone]} ${className}`}
    >
      <span className="relative block overflow-hidden leading-6">
        <span className="block transition-transform duration-500 ease-[var(--ease-out)] group-hover:-translate-y-full">{children}</span>
        <span aria-hidden className="absolute inset-0 block translate-y-full transition-transform duration-500 ease-[var(--ease-out)] group-hover:translate-y-0">
          {children}
        </span>
      </span>
      <span className={`relative grid size-9 place-items-center overflow-hidden rounded-full ${dotTones[tone]}`}>
        <Icon className="size-4 transition-transform duration-500 ease-[var(--ease-out)] group-hover:translate-x-7" />
        <Icon className="absolute size-4 -translate-x-7 transition-transform duration-500 ease-[var(--ease-out)] group-hover:translate-x-0" />
      </span>
    </a>
  );
}

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span className={`eyebrow inline-flex items-center gap-2.5 text-green-deep ${className}`}>
      <span className="relative flex size-2">
        <span className="absolute inset-0 animate-ping rounded-full bg-green opacity-60" />
        <span className="relative size-2 rounded-full bg-green" />
      </span>
      {children}
    </span>
  );
}

/* ——— Icons (1.6px line, 24 grid) ——— */

type P = SVGProps<SVGSVGElement>;
const base = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round", viewBox: "0 0 24 24" } as const;

export const ArrowIcon = (p: P) => (
  <svg {...base} strokeWidth={2} {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);
export const ArrowUpRight = (p: P) => (
  <svg {...base} strokeWidth={2} {...p}>
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
);
export const PhoneIcon = (p: P) => (
  <svg {...base} strokeWidth={1.9} {...p}>
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />
  </svg>
);
export const MailIcon = (p: P) => (
  <svg {...base} strokeWidth={1.9} {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);
export const PinIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 21s-7-6.2-7-11a7 7 0 1 1 14 0c0 4.8-7 11-7 11Z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);
export const ClockIcon = (p: P) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);
export const CheckIcon = (p: P) => (
  <svg {...base} strokeWidth={2.2} {...p}>
    <path d="m5 12.5 4.5 4.5L19 7.5" />
  </svg>
);

/* Service option icons */
export const SpecIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M7 3h7l4 4v14H7z" />
    <path d="M14 3v4h4M10 12h5M10 15.5h5M10 8.5h2" />
  </svg>
);
export const CadIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M3 21 12 3l9 18z" />
    <path d="M7.5 12h9M12 3v18" />
  </svg>
);
export const TruckIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M3 6h11v10H3zM14 9h4l3 3v4h-7" />
    <circle cx="7" cy="17.5" r="1.8" />
    <circle cx="17" cy="17.5" r="1.8" />
  </svg>
);
export const FanIcon = (p: P) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="1.6" />
    <path d="M12 10.4c0-3 1-5 3-5.4M13.6 12c3 0 5 1 5.4 3M12 13.6c0 3-1 5-3 5.4M10.4 12c-3 0-5-1-5.4-3" />
  </svg>
);
export const ClipboardIcon = (p: P) => (
  <svg {...base} {...p}>
    <rect x="5" y="4" width="14" height="17" rx="2" />
    <path d="M9 4V3h6v1M8.5 11h7M8.5 14.5h7M8.5 18h4" />
  </svg>
);
export const BadgeIcon = (p: P) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="9" r="6" />
    <path d="m9.5 9 1.8 1.8L14.8 7.3M8.5 14.2 7 21l5-2.5 5 2.5-1.5-6.8" />
  </svg>
);
export const BoxIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9z" />
    <path d="m4 7.5 8 4.5 8-4.5M12 12v9" />
  </svg>
);
export const WrenchIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M14.5 6.5a4 4 0 0 0 5 5L21 13l-8 8-2.5-2.5 1.5-1.5-5.5-5.5-1.5 1.5L2.5 10.5l8-8L12 4a4 4 0 0 0 2.5 2.5Z" />
  </svg>
);
export const ShieldIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 3 4.5 6v5.5c0 4.5 3.2 8 7.5 9.5 4.3-1.5 7.5-5 7.5-9.5V6z" />
    <path d="m8.8 12 2.2 2.2 4.2-4.4" />
  </svg>
);
