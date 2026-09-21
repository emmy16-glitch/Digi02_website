import { useState } from "react";
import { cn } from "@/premium/utils/cn";
import {
  Btn,
  Container,
  Eyebrow,
  Reveal,
  SectionHead,
} from "@/premium/components/ui";
import { Breadcrumbs, PageHero } from "@/premium/components/PageHero";
import { GlobalCTA } from "@/premium/pages/Home";
import { company, principles, team } from "@/premium/data/content";

function Story() {
  return (
    <section className="relative bg-bone text-ink">
      <div className="grid-lines-dark pointer-events-none absolute inset-0 opacity-40" aria-hidden />
      <Container wide className="relative">
        <div className="grid gap-12 py-20 lg:grid-cols-12 lg:gap-16 lg:py-28">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <Reveal>
                <Eyebrow tone="light">Our story</Eyebrow>
              </Reveal>
              <Reveal delay={100}>
                <div className="mt-10 hidden lg:block">
                  <dl className="space-y-6">
                    {[
                      { k: "Base", v: company.location },
                      { k: "Focus", v: "Enterprise & operational software" },
                      { k: "Reach", v: "Nigeria and beyond" },
                    ].map((r) => (
                      <div key={r.k} className="border-t border-black/10 pt-4">
                        <dt className="label text-ink/40">{r.k}</dt>
                        <dd className="mt-2 text-[0.9375rem]">{r.v}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </Reveal>
            </div>
          </div>

          <div className="lg:col-span-8">
            <Reveal>
              <p className="text-[clamp(1.35rem,3vw,2.15rem)] leading-[1.42] tracking-[-0.015em]">
                Digi02 is a software company based in Kaduna, Nigeria. We engineer systems for
                organisations whose operations carry real consequence. Institutions that
                process payments, run payroll, keep records, fly missions and answer for
                every decision they make.
              </p>
            </Reveal>
            <Reveal delay={110}>
              <div className="mt-12 grid gap-10 sm:grid-cols-2">
                <p className="text-[1rem] leading-[1.85] font-light text-ink/70">
                  Our expertise spans multi-purpose software development: enterprise
                  e-management, payroll automation, payment platforms, point of sale,
                  unmanned-aerial systems and bespoke engineering. Whatever the brief, the
                  discipline is the same. Understand the operation first, then build the
                  system around it.
                </p>
                <p className="text-[1rem] leading-[1.85] font-light text-ink/70">
                  We have made a strong impact in Nigeria, and our solutions are built to
                  serve organisations globally. But scale is not the point. The point is that
                  when a system we build is used on a Monday morning by someone who did not
                  write it, it works. Quietly, correctly, and on time.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Team() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="relative bg-bone-soft text-ink">
      <Container wide>
        <div className="py-20 lg:py-28">
          <SectionHead
            tone="light"
            eyebrow="The team"
            title={
              <>
                People who answer
                <br />
                <span className="text-ink/45">for what they build.</span>
              </>
            }
            lead="A small, senior team. Every person here has a name, a role and a standard they are held to."
          />

          <div className="mt-14 grid grid-cols-2 gap-x-5 gap-y-10 sm:gap-x-6 lg:grid-cols-5 lg:gap-x-7">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={i * 70}>
                <figure
                  className="group"
                  onMouseEnter={() => setActive(i)}
                  onMouseLeave={() => setActive(null)}
                >
                  <div className="relative overflow-hidden bg-black/5">
                    <img
                      src={m.photo}
                      alt={m.name}
                      loading="lazy"
                      className={cn(
                        "aspect-[3/4] w-full object-cover grayscale transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
                        active === i
                          ? "scale-[1.04] grayscale-0"
                          : "scale-100 opacity-90",
                      )}
                    />
                    <span
                      className={cn(
                        "absolute inset-0 border transition-all duration-500",
                        active === i ? "border-gold" : "border-transparent",
                      )}
                      aria-hidden
                    />
                  </div>
                  <figcaption className="mt-5">
                    <p className="label text-gold-dark">{m.role}</p>
                    <h3 className="mt-2.5 text-[1rem] leading-snug">{m.name}</h3>
                    <div
                      className="grid overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                      style={{ gridTemplateRows: active === i ? "1fr" : "0fr" }}
                    >
                      <p className="min-h-0 pt-3 text-[0.8125rem] leading-[1.7] font-light text-ink/60">
                        “{m.quote}”
                      </p>
                    </div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function Standards() {
  return (
    <section className="relative bg-ink">
      <Container wide>
        <div className="py-20 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-32">
                <SectionHead
                  eyebrow="Our standards"
                  title={
                    <>
                      The rules we
                      <br />
                      <span className="text-soft">will not bend.</span>
                    </>
                  }
                />
              </div>
            </div>
            <div className="lg:col-span-8">
              <div className="border-t border-white/[0.08]">
                {principles.map((p, i) => (
                  <Reveal key={p.title} delay={i * 60}>
                    <div className="group grid grid-cols-[auto_1fr] gap-6 border-b border-white/[0.08] py-7 sm:grid-cols-[auto_1fr_1.4fr] sm:gap-8">
                      <span className="label pt-1 text-mute transition-colors group-hover:text-gold">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="text-[1.0625rem] leading-snug text-bone">{p.title}</h3>
                      <p className="col-span-2 text-[0.9375rem] leading-[1.8] font-light text-mute sm:col-span-1">
                        {p.text}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Office() {
  return (
    <section className="relative bg-ink-soft">
      <Container wide>
        <div className="py-20 lg:py-28">
          <SectionHead
            eyebrow="Where we are"
            title={
              <>
                Kaduna, Nigeria.
                <br />
                <span className="text-soft">Working everywhere.</span>
              </>
            }
          />
          <div className="mt-14 grid gap-px bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-4">
            {[
              { k: "Address", v: company.address, long: true },
              { k: "Call us", v: company.phones.join("\n"), links: "tel" },
              { k: "Email us", v: company.emails.join("\n"), links: "mailto" },
              { k: "Website", v: company.website },
            ].map((c, i) => (
              <Reveal key={c.k} delay={i * 70} className="bg-ink-soft p-7">
                <h3 className="label text-gold">{c.k}</h3>
                {c.links === "tel" ? (
                  <div className="mt-5 space-y-2">
                    {company.phones.map((p) => (
                      <a
                        key={p}
                        href={`tel:${p.replace(/[^+\d]/g, "")}`}
                        className="block text-[0.9375rem] font-light text-bone/90 transition-colors hover:text-gold"
                      >
                        {p}
                      </a>
                    ))}
                  </div>
                ) : c.links === "mailto" ? (
                  <div className="mt-5 space-y-2">
                    {company.emails.map((e) => (
                      <a
                        key={e}
                        href={`mailto:${e}`}
                        className="block text-[0.9375rem] font-light text-bone/90 transition-colors hover:text-gold"
                      >
                        {e}
                      </a>
                    ))}
                  </div>
                ) : (
                  <p
                    className={cn(
                      "mt-5 text-[0.9375rem] leading-[1.75] font-light text-bone/90",
                      c.long && "max-w-[16rem]",
                    )}
                  >
                    {c.v}
                  </p>
                )}
              </Reveal>
            ))}
          </div>
          <Reveal delay={260}>
            <div className="mt-12">
              <Btn to="/contact" variant="secondary" arrow>
                Contact Digi02
              </Btn>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

export default function CompanyPage() {
  return (
    <>
      <PageHero
        eyebrow="Company"
        title="Engineering with"
        accent="accountability."
        lead="Digi02 builds software for organisations that have to account for what their systems do. We hold ourselves to the same standard."
      >
        <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Company" }]} />
      </PageHero>
      <Story />
      <Team />
      <Standards />
      <Office />
      <GlobalCTA />
    </>
  );
}
