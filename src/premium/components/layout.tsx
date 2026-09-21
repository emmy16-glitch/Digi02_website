import { useEffect, useRef, useState } from "react";
import { cn } from "@/premium/utils/cn";
import { linkProps, useRoute } from "@/premium/lib/router";
import { telHref } from "@/premium/lib/phone";
import { company, nav, solutions } from "@/premium/data/content";
import { Btn, Container, Horizon, LogoLockup, LogoStacked } from "@/premium/components/ui";

/* ═══════════════════════════════════════════════════════════
   Header
   ═══════════════════════════════════════════════════════════ */

export function Header() {
  const path = useRoute();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const el = document.documentElement;
      const max = el.scrollHeight - el.clientHeight;
      setProgress(max > 0 ? Math.min(100, (el.scrollTop / max) * 100) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [path]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (to: string) => path === to || path.startsWith(to + "/");

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "border-b border-white/[0.08] bg-ink/92 backdrop-blur-xl"
            : "border-b border-transparent bg-gradient-to-b from-ink/80 to-transparent",
        )}
      >
        <Container wide>
          <div className="flex h-[68px] items-center justify-between gap-6 lg:h-[76px]">
            <a
              {...linkProps("/")}
              className="flex shrink-0 items-center transition-opacity duration-300 hover:opacity-80"
              aria-label="Digi02 home"
            >
              <LogoLockup
                tone="light"
                className={cn(
                  "transition-all duration-500",
                  scrolled ? "h-[28px] sm:h-[31px]" : "h-[31px] sm:h-[35px]",
                )}
              />
            </a>

            <nav className="hidden items-center gap-1 lg:flex">
              {nav.map((item) => (
                <a
                  key={item.to}
                  {...linkProps(item.to)}
                  className={cn(
                    "group relative px-4 py-2 text-[0.8125rem] font-light tracking-[0.02em] transition-colors duration-300",
                    isActive(item.to) ? "text-bone" : "text-soft hover:text-bone",
                  )}
                >
                  {item.label}
                  <span
                    className={cn(
                      "absolute bottom-0.5 left-4 h-px bg-gold transition-all duration-400",
                      isActive(item.to) ? "w-[calc(100%-2rem)]" : "w-0 group-hover:w-[calc(100%-2rem)]",
                    )}
                  />
                </a>
              ))}
            </nav>

            <div className="hidden lg:block">
              <Btn to="/contact" variant="secondary" arrow className="min-h-[42px]! px-5! py-2!">
                Discuss your project
              </Btn>
            </div>

            <button
              ref={menuButtonRef}
              onClick={() => setOpen((v) => !v)}
              className="relative z-50 flex h-11 w-11 flex-col items-center justify-center gap-[6px] lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-navigation-panel"
            >
              <span
                className={cn(
                  "block h-px w-6 bg-bone transition-all duration-400",
                  open && "translate-y-[3.5px] rotate-45",
                )}
              />
              <span
                className={cn(
                  "block h-px w-6 bg-bone transition-all duration-400",
                  open && "-translate-y-[3.5px] -rotate-45",
                )}
              />
            </button>
          </div>
        </Container>
        <div
          className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-gold-dark via-gold to-gold-light"
          style={{ width: `${progress}%` }}
          aria-hidden
        />
      </header>

      {/* Mobile menu */}
      <div
        id="mobile-navigation-panel"
        className={cn(
          "fixed inset-0 z-40 bg-ink transition-all duration-500 lg:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <div className="grid-lines absolute inset-0 opacity-60" aria-hidden />
        <Container className="relative flex h-full flex-col justify-between pt-28 pb-10">
          <nav className="flex flex-col">
            {nav.map((item, i) => (
              <a
                key={item.to}
                {...linkProps(item.to)}
                className="group flex items-baseline gap-5 border-b border-white/[0.08] py-5 transition-colors"
                style={{
                  transitionDelay: `${i * 40}ms`,
                }}
              >
                <span className="label text-gold/70">{String(i + 1).padStart(2, "0")}</span>
                <span
                  className={cn(
                    "text-[1.75rem] leading-none font-light transition-colors",
                    isActive(item.to) ? "text-gold" : "text-bone group-hover:text-gold",
                  )}
                >
                  {item.label}
                </span>
              </a>
            ))}
          </nav>

          <div className="space-y-5">
            <Btn to="/contact" variant="primary" arrow className="w-full">
              Discuss your project
            </Btn>
            <div className="space-y-1.5">
              {company.phones.map((p) => (
                <a key={p} href={telHref(p)} className="block text-[0.9375rem] font-light text-soft">
                  {p}
                </a>
              ))}
              <a href={`mailto:${company.emails[0]}`} className="block text-[0.9375rem] font-light text-gold">
                {company.emails[0]}
              </a>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

/* ═══════════════════════════════════════════════════════════
   Footer
   ═══════════════════════════════════════════════════════════ */

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.08] bg-ink">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-56 opacity-70" aria-hidden>
        <Horizon />
      </div>

      <Container wide className="relative">
        <div className="grid gap-12 pt-20 pb-16 lg:grid-cols-12 lg:gap-8 lg:pt-28">
          <div className="lg:col-span-4">
            <LogoStacked className="h-24 w-auto sm:h-28" />
            <p className="mt-7 max-w-xs text-[0.9375rem] leading-[1.75] font-light text-soft">
              Empowering organisations with tailored software, built for security
              and growth across Nigeria and beyond.
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-3 lg:col-span-8 lg:gap-8">
            <FooterCol title="Solutions">
              {solutions.slice(0, 5).map((s) => (
                <FooterLink key={s.slug} to={`/solutions/${s.slug}`}>
                  {s.name}
                </FooterLink>
              ))}
              <FooterLink to="/solutions">All solutions</FooterLink>
            </FooterCol>

            <FooterCol title="Company">
              <FooterLink to="/company">About Digi02</FooterLink>
              <FooterLink to="/work">Our work</FooterLink>
              <FooterLink to="/industries">Industries</FooterLink>
              <FooterLink to="/insights">Insights</FooterLink>
              <FooterLink to="/contact">Contact</FooterLink>
            </FooterCol>

            <FooterCol title="Contact">
              {company.phones.map((p) => (
                <a
                  key={p}
                  href={telHref(p)}
                  className="block text-[0.875rem] font-light text-soft transition-colors hover:text-gold"
                >
                  {p}
                </a>
              ))}
              {company.emails.map((e) => (
                <a
                  key={e}
                  href={`mailto:${e}`}
                  className="block text-[0.875rem] font-light text-soft transition-colors hover:text-gold"
                >
                  {e}
                </a>
              ))}
              <p className="pt-2 text-[0.8125rem] leading-relaxed font-light text-mute">
                {company.address}
              </p>
            </FooterCol>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/[0.08] py-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="label text-mute">
            © {year} {company.legalName}
          </p>
          <p className="label text-mute">
            {company.location} · <span className="text-gold/70">{company.website}</span>
          </p>
        </div>
      </Container>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="label text-gold/80">{title}</h3>
      <div className="mt-5 flex flex-col gap-2.5">{children}</div>
    </div>
  );
}

function FooterLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <a
      {...linkProps(to)}
      className="text-[0.875rem] font-light text-soft transition-colors duration-300 hover:text-gold"
    >
      {children}
    </a>
  );
}
