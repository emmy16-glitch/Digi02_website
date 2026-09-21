import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/premium/utils/cn";
import { linkProps } from "@/premium/lib/router";
import type { Visual } from "@/premium/data/content";

/* ═══════════════════════════════════════════════════════════
   Reveal
   ═══════════════════════════════════════════════════════════ */

export function Reveal({
  children,
  delay = 0,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "article" | "span";
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setSeen(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      className={cn("reveal", seen && "is-in", className)}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

/* ═══════════════════════════════════════════════════════════
   Layout primitives
   ═══════════════════════════════════════════════════════════ */

export function Container({
  children,
  className,
  wide,
}: {
  children: ReactNode;
  className?: string;
  wide?: boolean;
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-6 sm:px-8 lg:px-12",
        wide ? "max-w-[1560px]" : "max-w-[1320px]",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function Eyebrow({
  children,
  tone = "dark",
  className,
}: {
  children: ReactNode;
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "label flex items-center gap-3",
        tone === "dark" ? "text-gold" : "text-gold-dark",
        className,
      )}
    >
      <span
        className={cn(
          "h-[5px] w-[5px] shrink-0 rotate-45",
          tone === "dark" ? "bg-gold" : "bg-gold-dark",
        )}
      />
      <span>{children}</span>
    </div>
  );
}

export function Rule({ tone = "dark" }: { tone?: "dark" | "light" }) {
  return (
    <div
      className={cn(
        "h-px w-full",
        tone === "dark"
          ? "bg-white/10"
          : "bg-black/10",
      )}
    />
  );
}

/* ═══════════════════════════════════════════════════════════
   Buttons
   ═══════════════════════════════════════════════════════════ */

type BtnProps = {
  children: ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost" | "onLight";
  className?: string;
  arrow?: boolean;
  type?: "button" | "submit";
};

export function Btn({
  children,
  to,
  href,
  onClick,
  variant = "primary",
  className,
  arrow = false,
  type = "button",
}: BtnProps) {
  const base =
    "group/btn relative inline-flex min-h-[46px] items-center justify-center gap-3 overflow-hidden px-6 py-3 text-[0.8125rem] font-medium tracking-[0.08em] uppercase transition-colors duration-300";

  const styles: Record<string, string> = {
    primary:
      "bg-gold text-ink hover:bg-gold-light",
    secondary:
      "border border-gold/45 text-bone hover:border-gold hover:bg-gold/[0.07]",
    ghost:
      "border border-white/15 text-bone/80 hover:border-gold/50 hover:text-bone",
    onLight:
      "border border-ink/20 text-ink hover:border-gold-dark hover:bg-gold/[0.09]",
  };

  const inner = (
    <>
      <span className="relative z-10">{children}</span>
      {arrow && (
        <span className="relative z-10 translate-x-0 text-[0.95em] transition-transform duration-300 group-hover/btn:translate-x-1">
          →
        </span>
      )}
    </>
  );

  const cls = cn(base, styles[variant], className);

  if (to) {
    return (
      <a {...linkProps(to)} className={cls}>
        {inner}
      </a>
    );
  }
  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel="noreferrer"
        className={cls}
      >
        {inner}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} className={cls}>
      {inner}
    </button>
  );
}

/* ═══════════════════════════════════════════════════════════
   Status pill
   ═══════════════════════════════════════════════════════════ */

export function StatusPill({
  status,
  tone = "dark",
}: {
  status: string;
  tone?: "dark" | "light";
}) {
  return (
    <span
      className={cn(
        "label inline-flex items-center gap-2 border px-2.5 py-1.5 leading-none",
        tone === "dark"
          ? "border-gold/30 text-gold"
          : "border-gold-dark/40 text-gold-dark",
      )}
    >
      <span
        className={cn(
          "h-[4px] w-[4px] rounded-full",
          tone === "dark" ? "bg-gold" : "bg-gold-dark",
        )}
      />
      {status}
    </span>
  );
}

/* ═══════════════════════════════════════════════════════════
   Logo
   ═══════════════════════════════════════════════════════════ */

export function LogoLockup({
  className,
  tone = "light",
}: {
  className?: string;
  tone?: "light" | "dark";
}) {
  return (
    <img
      src={tone === "light" ? "/images/brand/digi02-logo-light.png" : "/images/brand/digi02-logo-dark.png"}
      alt="Digi02 logo"
      className={cn("h-9 w-auto select-none sm:h-10", className)}
      draggable={false}
    />
  );
}

export function LogoStacked({ className }: { className?: string }) {
  return (
    <img
      src="/images/brand/digi02-logo-light.png"
      alt="Digi02 logo"
      className={cn("h-20 w-auto select-none sm:h-24", className)}
      draggable={false}
    />
  );
}

export function BrandMark({ className }: { className?: string }) {
  return (
    <img
      src="/images/brand/digi02-globe-mark.png"
      alt=""
      aria-hidden
      className={cn("h-24 w-24 object-contain select-none", className)}
      draggable={false}
    />
  );
}

/* ═══════════════════════════════════════════════════════════
   Section heading
   ═══════════════════════════════════════════════════════════ */

export function SectionHead({
  eyebrow,
  title,
  lead,
  tone = "dark",
  align = "left",
  className,
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  tone?: "dark" | "light";
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl",
        className,
      )}
    >
      <Reveal>
        <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
      </Reveal>
      <Reveal delay={80}>
        <h2
          className={cn(
            "mt-6 text-[clamp(1.9rem,4.4vw,3.35rem)] leading-[1.06]",
            tone === "dark" ? "text-bone" : "text-ink",
          )}
        >
          {title}
        </h2>
      </Reveal>
      {lead && (
        <Reveal delay={160}>
          <p
            className={cn(
              "mt-6 max-w-2xl text-[1.0625rem] leading-[1.75] font-light",
              align === "center" && "mx-auto",
              tone === "dark" ? "text-soft" : "text-ink/65",
            )}
          >
            {lead}
          </p>
        </Reveal>
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   Accordion
   ═══════════════════════════════════════════════════════════ */

export function Accordion({
  items,
  tone = "dark",
}: {
  items: { q: string; a: string }[];
  tone?: "dark" | "light";
}) {
  const [open, setOpen] = useState<number | null>(0);
  const border = tone === "dark" ? "border-white/10" : "border-black/10";

  return (
    <div className={cn("border-t", border)}>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className={cn("border-b", border)}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-start gap-5 py-6 text-left"
              aria-expanded={isOpen}
            >
              <span
                className={cn(
                  "label mt-1 shrink-0 tabular-nums",
                  tone === "dark" ? "text-mute" : "text-ink/40",
                )}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span
                className={cn(
                  "flex-1 text-[1.0625rem] leading-snug font-normal transition-colors",
                  tone === "dark"
                    ? isOpen
                      ? "text-bone"
                      : "text-bone/75 hover:text-bone"
                    : isOpen
                      ? "text-ink"
                      : "text-ink/70 hover:text-ink",
                )}
              >
                {item.q}
              </span>
              <span
                className={cn(
                  "mt-1 grid h-6 w-6 shrink-0 place-items-center transition-all duration-400",
                  isOpen ? "rotate-45 text-gold" : "text-mute",
                )}
                aria-hidden
              >
                +
              </span>
            </button>
            <div
              className="grid overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="min-h-0">
                <p
                  className={cn(
                    "pr-10 pb-7 pl-[3.1rem] text-[0.9375rem] leading-[1.8] font-light",
                    tone === "dark" ? "text-soft" : "text-ink/65",
                  )}
                >
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   Backdrop: subtle operational grid
   ═══════════════════════════════════════════════════════════ */

export function GridBackdrop({
  tone = "dark",
  className,
}: {
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0",
        tone === "dark" ? "grid-lines" : "grid-lines-dark",
        className,
      )}
    />
  );
}

/* ═══════════════════════════════════════════════════════════
   Product visuals — SVG, no stock photography
   ═══════════════════════════════════════════════════════════ */

function Panel({
  children,
  label,
  className,
  tone = "dark",
}: {
  children: ReactNode;
  label?: string;
  className?: string;
  tone?: "dark" | "light";
}) {
  const dark = tone === "dark";
  return (
    <div
      className={cn(
        "relative overflow-hidden",
        dark
          ? "border border-white/10 bg-ink-soft"
          : "border border-black/10 bg-white",
        className,
      )}
    >
      {label && (
        <div
          className={cn(
            "label flex items-center justify-between border-b px-4 py-2.5",
            dark ? "border-white/10 text-mute" : "border-black/10 text-ink/45",
          )}
        >
          <span className="flex items-center gap-2">
            <span className={dark ? "bg-gold h-[4px] w-[4px]" : "h-[4px] w-[4px] bg-gold-dark"} />
            {label}
          </span>
          <span className="hidden sm:inline">Digi02</span>
        </div>
      )}
      {children}
    </div>
  );
}

/* — SkyGrid: mission / route planning ---------------------- */

function MissionVisual() {
  const waypoints: [number, number][] = [
    [86, 236],
    [178, 178],
    [268, 214],
    [356, 148],
    [452, 196],
  ];
  const path = waypoints.map((p, i) => (i ? `L${p[0]} ${p[1]}` : `M${p[0]} ${p[1]}`)).join(" ");

  return (
    <Panel label="SkyGrid · Mission plan" className="h-full">
      <svg viewBox="0 0 540 330" className="block h-full w-full" role="img" aria-label="Mission planning interface">
        <defs>
          <pattern id="mg" width="27" height="27" patternUnits="userSpaceOnUse">
            <path d="M27 0H0V27" fill="none" stroke="rgba(255,255,255,0.055)" strokeWidth="1" />
          </pattern>
          <linearGradient id="mgold" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#E0BC67" />
            <stop offset="100%" stopColor="#C9A34A" />
          </linearGradient>
        </defs>
        <rect width="540" height="330" fill="url(#mg)" />

        {/* terrain contours */}
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <path
            key={i}
            d={`M-20 ${58 + i * 46} C 90 ${30 + i * 46}, 150 ${86 + i * 46}, 250 ${58 + i * 46} S 430 ${22 + i * 46}, 560 ${62 + i * 46}`}
            fill="none"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="1"
          />
        ))}

        {/* geofence */}
        <path
          d="M56 96 L 250 62 L 486 122 L 470 292 L 120 306 Z"
          fill="rgba(201,163,74,0.045)"
          stroke="rgba(201,163,74,0.4)"
          strokeWidth="1"
          strokeDasharray="5 5"
        />

        {/* route */}
        <path d={path} fill="none" stroke="url(#mgold)" strokeWidth="2" strokeLinecap="round" />
        <path
          d={path}
          fill="none"
          stroke="#E0BC67"
          strokeWidth="2"
          strokeDasharray="6 14"
          className="dash-flow"
          opacity="0.85"
        />

        {waypoints.map((p, i) => (
          <g key={i}>
            <circle cx={p[0]} cy={p[1]} r="11" fill="rgba(201,163,74,0.16)" className="pulse-node" style={{ animationDelay: `${i * 0.4}s` }} />
            <circle cx={p[0]} cy={p[1]} r="5.5" fill="#050505" stroke="#E0BC67" strokeWidth="1.6" />
            <text x={p[0]} y={p[1] + 3.2} textAnchor="middle" fill="#E0BC67" fontSize="7.5" fontFamily="JetBrains Mono, monospace">
              {i + 1}
            </text>
          </g>
        ))}

        {/* readouts */}
        <g fontFamily="JetBrains Mono, monospace" fontSize="8.5" fill="#AAA8A2">
          <rect x="26" y="20" width="128" height="42" fill="rgba(5,5,5,0.72)" stroke="rgba(255,255,255,0.1)" />
          <text x="36" y="35" fill="#C9A34A">WAYPOINTS</text>
          <text x="36" y="52" fill="#F7F6F2" fontSize="11">05 · 12.4 km</text>

          <rect x="386" y="20" width="128" height="42" fill="rgba(5,5,5,0.72)" stroke="rgba(255,255,255,0.1)" />
          <text x="396" y="35" fill="#C9A34A">STAGE</text>
          <text x="396" y="52" fill="#F7F6F2" fontSize="11">01 · PLAN</text>
        </g>
      </svg>
    </Panel>
  );
}

/* — DigiVolt: mobility route ------------------------------- */

function MobilityVisual() {
  return (
    <Panel label="DigiVolt · Trip sequence" tone="light" className="h-full">
      <svg viewBox="0 0 540 330" className="block aspect-[540/330] w-full" role="img" aria-label="Mobility booking flow">
        <rect width="540" height="330" fill="#F7F6F2" />
        {/* city blocks */}
        {[0, 1, 2, 3].map((r) =>
          [0, 1, 2, 3, 4].map((c) => (
            <rect
              key={`${r}-${c}`}
              x={26 + c * 100}
              y={30 + r * 70}
              width={72}
              height={48}
              rx="2"
              fill="rgba(5,5,5,0.045)"
              stroke="rgba(5,5,5,0.07)"
            />
          )),
        )}
        {/* route */}
        <path
          d="M92 288 L 92 216 L 196 216 L 196 130 L 330 130 L 330 74 L 452 74"
          fill="none"
          stroke="#86672B"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M92 288 L 92 216 L 196 216 L 196 130 L 330 130 L 330 74 L 452 74"
          fill="none"
          stroke="#C9A34A"
          strokeWidth="2"
          strokeDasharray="8 12"
          className="dash-flow"
        />
        {/* pickup */}
        <circle cx="92" cy="288" r="16" fill="rgba(201,163,74,0.18)" className="pulse-node" />
        <circle cx="92" cy="288" r="7" fill="#C9A34A" />
        {/* destination */}
        <g>
          <rect x="440" y="42" width="24" height="24" fill="#050505" transform="rotate(45 452 54)" />
          <rect x="446" y="48" width="12" height="12" fill="#C9A34A" transform="rotate(45 452 54)" />
        </g>

        {/* state chips */}
        {[
          { x: 226, y: 176, t: "BOOK" },
          { x: 340, y: 100, t: "MATCH" },
        ].map((c) => (
          <g key={c.t} fontFamily="JetBrains Mono, monospace">
            <rect x={c.x} y={c.y} width={c.t.length * 8 + 20} height="22" fill="#050505" />
            <text x={c.x + 10} y={c.y + 15} fontSize="9" fill="#E0BC67" letterSpacing="1.4">
              {c.t}
            </text>
          </g>
        ))}
        <g fontFamily="JetBrains Mono, monospace" fontSize="8.5">
          <text x="26" y="22" fill="#86672B" letterSpacing="1.4">PICKUP</text>
          <text x="470" y="26" fill="#86672B" letterSpacing="1.4">DROP-OFF</text>
        </g>
      </svg>
    </Panel>
  );
}

/* — Enterprise / payroll: operational rows ---------------- */

function WorkflowVisual() {
  const rows = [
    { k: "Payroll run · March", v: "Validated", w: 100, live: false },
    { k: "Statutory deductions", v: "In progress", w: 62, live: true },
    { k: "Approval · Finance", v: "Pending", w: 0, live: false },
    { k: "Bank instruction", v: "Queued", w: 0, live: false },
  ];
  return (
    <Panel label="Operations · Run 04" className="h-full">
      <div className="flex h-full flex-col justify-between p-5 sm:p-6">
        <div className="space-y-4">
          {rows.map((r) => (
            <div key={r.k}>
              <div className="flex items-baseline justify-between gap-4">
                <span className="text-[0.8125rem] font-light text-bone/90">{r.k}</span>
                <span className="label text-mute">{r.v}</span>
              </div>
              <div className="mt-2.5 h-[3px] w-full bg-white/[0.08]">
                <div
                  className={cn("h-full transition-all duration-1000", r.live ? "bg-gold" : "bg-gold/45")}
                  style={{ width: `${Math.max(r.w, 2)}%` }}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 flex items-end justify-between border-t border-white/10 pt-4">
          <div>
            <div className="label text-mute">Reconciliation</div>
            <div className="mt-1.5 text-[1.5rem] leading-none text-bone">Aligned</div>
          </div>
          <div className="text-right">
            <div className="label text-mute">Records</div>
            <div className="mt-1.5 text-[1.5rem] leading-none text-gold">Single</div>
          </div>
        </div>
      </div>
    </Panel>
  );
}

/* — Payments: transaction ledger -------------------------- */

function TransactionVisual() {
  const tx = [
    { id: "TRX-8841", ch: "Transfer", s: "Settled" },
    { id: "TRX-8842", ch: "Card", s: "Settled" },
    { id: "TRX-8843", ch: "POS · Counter 2", s: "Pending" },
    { id: "TRX-8844", ch: "Wallet", s: "Settled" },
  ];
  return (
    <Panel label="Payments · Ledger" className="h-full">
      <div className="flex h-full flex-col p-5 sm:p-6">
        <div className="flex items-baseline justify-between">
          <div>
            <div className="label text-mute">Today</div>
            <div className="mt-2 text-[2rem] leading-none text-bone">4 channels</div>
          </div>
          <div className="text-right">
            <div className="label text-mute">Status</div>
            <div className="mt-2 text-[0.8125rem] text-gold">Reconciling</div>
          </div>
        </div>
        <div className="mt-6 space-y-px">
          {tx.map((t) => (
            <div
              key={t.id}
              className="flex items-center justify-between gap-3 bg-white/[0.03] px-3 py-3 transition-colors hover:bg-white/[0.06]"
            >
              <span className="font-mono text-[0.6875rem] tracking-wider text-bone/80">{t.id}</span>
              <span className="hidden flex-1 text-[0.8125rem] font-light text-soft sm:block">{t.ch}</span>
              <span
                className={cn(
                  "label",
                  t.s === "Settled" ? "text-gold" : "text-mute",
                )}
              >
                {t.s}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-auto grid grid-cols-3 gap-4 border-t border-white/10 pt-5">
          {[
            { k: "Invoices", v: "Auto" },
            { k: "Recon", v: "Live" },
            { k: "Security", v: "PCI" },
          ].map((m) => (
            <div key={m.k}>
              <div className="label text-mute">{m.k}</div>
              <div className="mt-1.5 text-[0.9375rem] text-bone">{m.v}</div>
            </div>
          ))}
        </div>
      </div>
    </Panel>
  );
}

/* — E-Management: approval chain ------------------------- */

function InstitutionVisual() {
  const chain = [
    { t: "Request submitted", d: "Department", done: true },
    { t: "Head of unit review", d: "Approval", done: true },
    { t: "Directorate sign-off", d: "Approval", done: false, active: true },
    { t: "Record issued", d: "Registry", done: false },
  ];
  return (
    <Panel label="E-Management · Workflow" className="h-full">
      <div className="flex h-full flex-col justify-center gap-0 p-5 sm:p-7">
        {chain.map((c, i) => (
          <div key={c.t} className="flex gap-4">
            <div className="flex flex-col items-center">
              <span
                className={cn(
                  "grid h-7 w-7 shrink-0 place-items-center rounded-full border text-[0.625rem] transition-colors",
                  c.done
                    ? "border-gold/60 bg-gold/15 text-gold"
                    : c.active
                      ? "border-gold bg-gold text-ink"
                      : "border-white/15 text-mute",
                )}
              >
                {c.done ? "✓" : i + 1}
              </span>
              {i < chain.length - 1 && (
                <span className={cn("w-px flex-1", c.done ? "bg-gold/45" : "bg-white/12")} />
              )}
            </div>
            <div className={cn("pb-7", i === chain.length - 1 && "pb-0")}>
              <div className={cn("text-[0.9375rem]", c.active ? "text-bone" : c.done ? "text-bone/80" : "text-mute")}>
                {c.t}
              </div>
              <div className="label mt-1.5 text-mute">{c.d}</div>
            </div>
          </div>
        ))}
      </div>
    </Panel>
  );
}

/* — Custom software: modular architecture --------------- */

function EngineeringVisual() {
  const mods = [
    "Core",
    "Auth",
    "Data",
    "API",
    "Reports",
    "Integrations",
    "Mobile",
    "Audit",
  ];
  return (
    <Panel label="Architecture · Modules" className="h-full">
      <div className="grid h-full grid-cols-2 gap-px bg-white/[0.08] p-px sm:grid-cols-4">
        {mods.map((m, i) => (
          <div
            key={m}
            className="group/mod flex aspect-[4/3] flex-col justify-between bg-ink-soft p-4 transition-colors duration-300 hover:bg-raised"
          >
            <span className="label text-mute">{String(i + 1).padStart(2, "0")}</span>
            <span className="text-[0.875rem] leading-tight text-bone/85">{m}</span>
            <span className="h-[2px] w-0 bg-gold transition-all duration-500 group-hover/mod:w-full" />
          </div>
        ))}
      </div>
    </Panel>
  );
}

export function ProductVisual({
  type,
  className,
}: {
  type: Visual;
  className?: string;
}) {
  const map: Record<Visual, () => ReactNode> = {
    mission: MissionVisual,
    mobility: MobilityVisual,
    workflow: WorkflowVisual,
    transaction: TransactionVisual,
    institution: InstitutionVisual,
    engineering: EngineeringVisual,
  };
  const Cmp = map[type];
  return <div className={className}>{Cmp()}</div>;
}

/* Real photography — supplied device images, restrained framing */
export function Photo({
  src,
  alt,
  caption,
  className,
  ratio = "aspect-[4/3]",
}: {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  ratio?: string;
}) {
  return (
    <figure className={className}>
      <div className={cn("relative overflow-hidden border border-white/10 bg-ink-soft", ratio)}>
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>
      {caption && <figcaption className="label mt-4 text-mute">{caption}</figcaption>}
    </figure>
  );
}

/* ═══════════════════════════════════════════════════════════
   Abstract horizon (CTA / footer)
   ═══════════════════════════════════════════════════════════ */

export function Horizon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
      className={cn("block h-full w-full", className)}
    >
      <defs>
        <linearGradient id="hgold" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#C9A34A" stopOpacity="0" />
          <stop offset="45%" stopColor="#E0BC67" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#C9A34A" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M0 214 C 220 178, 330 236, 520 208 S 800 130, 980 168 S 1240 236, 1440 190"
        fill="none"
        stroke="url(#hgold)"
        strokeWidth="1.4"
      />
      <path
        d="M0 254 C 240 226, 360 274, 560 250 S 830 190, 1020 218 S 1270 276, 1440 240"
        fill="none"
        stroke="rgba(201,163,74,0.22)"
        strokeWidth="1"
      />
      <path
        d="M0 292 C 260 272, 400 306, 620 288 S 880 244, 1080 264 S 1300 302, 1440 282"
        fill="none"
        stroke="rgba(255,255,255,0.07)"
        strokeWidth="1"
      />
    </svg>
  );
}
