import type { ReactNode } from "react";
import { cn } from "@/premium/utils/cn";
import { linkProps } from "@/premium/lib/router";
import { Container, Eyebrow, GridBackdrop, Reveal } from "@/premium/components/ui";

export function PageHero({
  eyebrow,
  title,
  accent,
  lead,
  aside,
  meta,
  children,
  tone = "dark",
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  lead?: ReactNode;
  aside?: ReactNode;
  meta?: { label: string; value: string }[];
  children?: ReactNode;
  tone?: "dark" | "light";
}) {
  const dark = tone === "dark";
  return (
    <section
      className={cn(
        "relative overflow-hidden pt-[68px] lg:pt-[76px]",
        dark ? "bg-ink text-bone" : "bg-bone text-ink",
      )}
    >
      {dark ? (
        <GridBackdrop className="opacity-60" />
      ) : (
        <div className="grid-lines-dark pointer-events-none absolute inset-0 opacity-50" aria-hidden />
      )}
      <div
        className={cn(
          "pointer-events-none absolute inset-0",
          dark
            ? "bg-[radial-gradient(ellipse_60%_70%_at_20%_0%,rgba(201,163,74,0.10),transparent_70%)]"
            : "bg-[radial-gradient(ellipse_60%_70%_at_20%_0%,rgba(201,163,74,0.10),transparent_70%)]",
        )}
        aria-hidden
      />
      <Container wide className="relative">
        <div className="grid gap-12 py-20 lg:grid-cols-12 lg:gap-16 lg:py-28">
          <div className={cn(aside ? "lg:col-span-7" : "lg:col-span-9")}>
            <Reveal>
              <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={90}>
              <h1 className="mt-8 text-[clamp(2.1rem,5.6vw,4.25rem)] leading-[1.04] tracking-[-0.03em]">
                {title}
                {accent && (
                  <span
                    className={cn(
                      "display block text-[clamp(2.3rem,6.2vw,4.6rem)] italic",
                      dark ? "text-gold" : "text-gold-dark",
                    )}
                  >
                    {accent}
                  </span>
                )}
              </h1>
            </Reveal>
            {lead && (
              <Reveal delay={170}>
                <p
                  className={cn(
                    "mt-8 max-w-2xl text-[1.0625rem] leading-[1.8] font-light sm:text-[1.125rem]",
                    dark ? "text-soft" : "text-ink/70",
                  )}
                >
                  {lead}
                </p>
              </Reveal>
            )}
            {children && (
              <Reveal delay={240}>
                <div className="mt-10">{children}</div>
              </Reveal>
            )}
          </div>

          {(aside || meta) && (
            <div className="lg:col-span-5 lg:pt-3">
              {aside}
              {meta && (
                <Reveal delay={200}>
                  <dl className="grid grid-cols-2 gap-px bg-white/[0.08]">
                    {meta.map((m) => (
                      <div key={m.label} className="bg-ink px-5 py-6">
                        <dt className="label text-mute">{m.label}</dt>
                        <dd className="mt-2.5 text-[1.0625rem] text-bone">{m.value}</dd>
                      </div>
                    ))}
                  </dl>
                </Reveal>
              )}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}

export function Breadcrumbs({ items }: { items: { label: string; to?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2.5">
      {items.map((c, i) => (
        <span key={c.label} className="flex items-center gap-2.5">
          {i > 0 && <span className="label text-mute">/</span>}
          {c.to ? (
            <a
              {...linkProps(c.to)}
              className="label text-mute transition-colors hover:text-gold"
            >
              {c.label}
            </a>
          ) : (
            <span className="label text-gold">{c.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
