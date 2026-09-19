import { useState } from "react";
import { cn } from "@/premium/utils/cn";
import { linkProps } from "@/premium/lib/router";
import {
  Accordion,
  BrandMark,
  Btn,
  Container,
  Eyebrow,
  GridBackdrop,
  Horizon,
  Photo,
  ProductVisual,
  Reveal,
  SectionHead,
  StatusPill,
} from "@/premium/components/ui";
import { company, facts, faqs, getSolution, insights, photos, principles, process, solutions, team, work } from "@/premium/data/content";

/* ═══════════════════════════════════════════════════════════
   Hero
   ═══════════════════════════════════════════════════════════ */

function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink pt-[68px] lg:pt-[76px]">
      <GridBackdrop className="opacity-70" />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,rgba(201,163,74,0.10),transparent_70%)]"
        aria-hidden
      />

      <Container className="relative">
        <div className="flex flex-col items-center py-24 text-center sm:py-32 lg:py-40">
          <Reveal>
            <Eyebrow className="justify-center">
              Software engineering · {company.location}
            </Eyebrow>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="mt-9 max-w-5xl text-[clamp(2.4rem,7.2vw,5.25rem)] leading-[1.02] tracking-[-0.03em]">
              <span className="block text-bone">Software built for</span>
              <span className="block text-bone">operations that</span>
              <span className="display mt-1 block text-[clamp(2.6rem,8vw,5.75rem)] text-gold italic">
                cannot fail.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-9 max-w-2xl text-[1.0625rem] leading-[1.8] font-light text-soft sm:text-[1.125rem]">
              Digi02 engineers enterprise systems, payment and payroll infrastructure,
              institutional e-management platforms and unmanned-aerial mission software —
              for organisations that have to get it right the first time.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-11 flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
              <Btn to="/solutions" variant="primary" arrow className="w-full sm:w-auto">
                Explore solutions
              </Btn>
              <Btn to="/contact" variant="ghost" className="w-full sm:w-auto">
                Discuss your project
              </Btn>
            </div>
          </Reveal>
        </div>
      </Container>

      {/* Fact index strip */}
      <div className="relative border-t border-white/[0.08]">
        <Container wide>
          <dl className="grid grid-cols-2 lg:grid-cols-4">
            {facts.map((f, i) => (
              <Reveal
                key={f.label}
                delay={i * 90}
                className={cn(
                  "border-white/[0.08] px-1 py-7 sm:px-5 sm:py-9",
                  i % 2 === 1 && "border-l",
                  i >= 2 && "border-t lg:border-t-0",
                  i > 0 && "lg:border-l",
                )}
              >
                <dt className="display text-[clamp(1.9rem,4vw,2.75rem)] leading-none text-bone">
                  {f.value}
                </dt>
                <dd className="label mt-3 text-mute">{f.label}</dd>
              </Reveal>
            ))}
          </dl>
        </Container>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   SkyGrid band — lead product
   ═══════════════════════════════════════════════════════════ */

function SkyGridBand() {
  const sky = getSolution("skygrid")!;
  const stages = ["Plan", "Prepare", "Operate", "Review"];

  return (
    <section className="relative overflow-hidden border-t border-white/[0.08] bg-ink-soft">
      <Container wide className="relative">
        <div className="grid items-center gap-12 py-20 lg:grid-cols-12 lg:gap-16 lg:py-28">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="flex flex-wrap items-center gap-4">
                <Eyebrow>Lead product · {sky.index}</Eyebrow>
                <StatusPill status={sky.status} />
              </div>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-7 text-[clamp(2rem,4.4vw,3.25rem)] leading-[1.06] text-bone">
                {sky.name}
                <span className="display block text-gold italic">{sky.family}</span>
              </h2>
            </Reveal>
            <Reveal delay={150}>
              <p className="mt-7 max-w-lg text-[1.0625rem] leading-[1.8] font-light text-soft">
                {sky.summary}
              </p>
            </Reveal>

            <Reveal delay={220}>
              <ol className="mt-10 grid grid-cols-2 gap-px bg-white/[0.08] sm:grid-cols-4">
                {stages.map((s, i) => (
                  <li key={s} className="bg-ink-soft px-3 py-4">
                    <span className="label block text-gold/70">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="mt-2 block text-[0.9375rem] text-bone">{s}</span>
                  </li>
                ))}
              </ol>
            </Reveal>

            <Reveal delay={280}>
              <div className="mt-10 flex flex-wrap gap-3">
                <Btn to={`/solutions/${sky.slug}`} variant="secondary" arrow>
                  Explore SkyGrid
                </Btn>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={140}>
              <div className="relative">
                <div className="absolute -inset-px bg-gradient-to-br from-gold/25 via-transparent to-transparent" aria-hidden />
                <ProductVisual type="mission" className="relative" />
              </div>
            </Reveal>
            <Reveal delay={220}>
              <Photo
                src={photos.skygridUav}
                alt="SkyGrid unmanned aerial vehicle with mission camera on the field"
                caption="Field hardware — SkyGrid mission aircraft"
                ratio="aspect-[16/9]"
                className="mt-8"
              />
            </Reveal>
            <Reveal delay={260}>
              <p className="label mt-4 text-mute">
                Real product interface — mission planning console
              </p>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   Editorial intro — warm white
   ═══════════════════════════════════════════════════════════ */

function Intro() {
  return (
    <section className="relative bg-bone text-ink">
      <div className="grid-lines-dark pointer-events-none absolute inset-0 opacity-50" aria-hidden />
      <Container wide className="relative">
        <div className="grid gap-12 py-20 lg:grid-cols-12 lg:gap-16 lg:py-32">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <Reveal>
                <Eyebrow tone="light">Who we are</Eyebrow>
              </Reveal>
              <Reveal delay={100}>
                <BrandMark className="mt-10 hidden h-40 w-auto opacity-[0.16] lg:block" />
              </Reveal>
            </div>
          </div>

          <div className="lg:col-span-8">
            <Reveal>
              <p className="text-[clamp(1.35rem,3vw,2.15rem)] leading-[1.42] tracking-[-0.015em]">
                We have delivered software to organisations of every size — from startups to
                large enterprises — across multiple industries. Our expertise is
                multi-purpose software development, and our answer to every brief is the same:
                {" "}
                <span className="text-gold-dark">tailored, not templated.</span>
              </p>
            </Reveal>
            <Reveal delay={120}>
              <div className="mt-12 grid gap-10 sm:grid-cols-2">
                <p className="text-[1rem] leading-[1.85] font-light text-ink/70">
                  While we have made a strong impact in Nigeria, our solutions are built to
                  serve organisations globally — engineered for innovation and excellence
                  beyond borders.
                </p>
                <p className="text-[1rem] leading-[1.85] font-light text-ink/70">
                  Every engagement is executed with a deep sense of responsibility: quality,
                  security and timely delivery, without compromising the values the company
                  was built on.
                </p>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-12 flex flex-wrap gap-x-10 gap-y-4 border-t border-black/10 pt-8">
                {["Custom software", "Efficiency", "Security", "Scalability"].map((t) => (
                  <span key={t} className="label flex items-center gap-2 text-ink/55">
                    <span className="h-[4px] w-[4px] rotate-45 bg-gold-dark" />
                    {t}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   Solutions index
   ═══════════════════════════════════════════════════════════ */

function SolutionsIndex() {
  const [hover, setHover] = useState<string | null>(null);

  return (
    <section className="relative bg-ink">
      <Container wide>
        <div className="py-20 lg:py-28">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHead
              eyebrow="What we build"
              title={
                <>
                  Seven areas of practice,
                  <br />
                  <span className="text-soft">one standard of engineering.</span>
                </>
              }
            />
            <Reveal delay={200}>
              <Btn to="/solutions" variant="ghost" arrow>
                All solutions
              </Btn>
            </Reveal>
          </div>

          <div className="mt-14 border-t border-white/[0.08]">
            {solutions.map((s, i) => (
              <Reveal key={s.slug} delay={i * 50}>
                <a
                  {...linkProps(`/solutions/${s.slug}`)}
                  onMouseEnter={() => setHover(s.slug)}
                  onMouseLeave={() => setHover(null)}
                  className="group relative block border-b border-white/[0.08]"
                >
                  <span
                    className={cn(
                      "absolute inset-0 origin-left bg-gradient-to-r from-gold/[0.10] to-transparent transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
                      hover === s.slug ? "scale-x-100" : "scale-x-0",
                    )}
                    aria-hidden
                  />
                  <div className="relative grid grid-cols-[auto_1fr_auto] items-center gap-5 py-6 sm:gap-8 sm:py-7">
                    <span className="label w-8 shrink-0 tabular-nums text-mute transition-colors group-hover:text-gold">
                      {s.index}
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-[1.125rem] leading-tight text-bone transition-colors sm:text-[1.375rem]">
                        {s.name}
                        <span className="ml-3 hidden font-light text-mute sm:inline">
                          {s.family}
                        </span>
                      </h3>
                      <p className="mt-2 max-w-xl truncate text-[0.875rem] font-light text-mute sm:text-[0.9375rem]">
                        {s.summary}
                      </p>
                    </div>
                    <span className="flex shrink-0 items-center gap-4">
                      <span className="label hidden text-mute lg:inline">{s.status}</span>
                      <span
                        className={cn(
                          "grid h-9 w-9 place-items-center border transition-all duration-400",
                          hover === s.slug
                            ? "border-gold bg-gold text-ink"
                            : "border-white/15 text-soft",
                        )}
                      >
                        →
                      </span>
                    </span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   DigiVolt spotlight — warm white
   ═══════════════════════════════════════════════════════════ */

function DigiVoltSpotlight() {
  const dv = getSolution("digivolt")!;
  const stages = ["Book", "Match", "Ride", "Arrive"];

  return (
    <section className="relative overflow-hidden bg-bone text-ink">
      <Container wide>
        <div className="grid items-center gap-12 py-20 lg:grid-cols-12 lg:gap-16 lg:py-28">
          <div className="order-2 lg:order-1 lg:col-span-7">
            <Reveal delay={120}>
              <ProductVisual type="mobility" />
              <p className="label mt-4 text-ink/45">
                Product visualisation — not a live deployment
              </p>
            </Reveal>
          </div>

          <div className="order-1 lg:order-2 lg:col-span-5">
            <Reveal>
              <div className="flex flex-wrap items-center gap-4">
                <Eyebrow tone="light">Product · {dv.index}</Eyebrow>
                <StatusPill status={dv.status} tone="light" />
              </div>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-7 text-[clamp(2rem,4.4vw,3.25rem)] leading-[1.06]">
                {dv.name}
                <span className="display block text-gold-dark italic">{dv.family}</span>
              </h2>
            </Reveal>
            <Reveal delay={150}>
              <p className="mt-7 max-w-lg text-[1.0625rem] leading-[1.8] font-light text-ink/70">
                {dv.summary}
              </p>
            </Reveal>
            <Reveal delay={220}>
              <ul className="mt-10 grid grid-cols-2 gap-px bg-black/10">
                {stages.map((s, i) => (
                  <li key={s} className="bg-bone px-3 py-4">
                    <span className="label block text-gold-dark">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="mt-2 block text-[0.9375rem]">{s}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={280}>
              <div className="mt-10">
                <Btn to={`/solutions/${dv.slug}`} variant="onLight" arrow>
                  Explore DigiVolt
                </Btn>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   Field evidence — real payment/POS photography
   ═══════════════════════════════════════════════════════════ */

function FieldEvidence() {
  const shots = [
    { src: photos.posMarket, alt: "Retail trader accepting POS payment at a market stall", label: "Retail · POS" },
    { src: photos.posHospitality, alt: "Hospitality counter processing a card payment", label: "Hospitality · Counter" },
    { src: photos.cardPhone, alt: "Customer paying by card with a mobile phone", label: "Multi-channel · Card" },
  ];
  return (
    <section className="relative bg-ink-soft">
      <Container wide>
        <div className="py-20 lg:py-28">
          <SectionHead
            eyebrow="In the field"
            title={
              <>
                Payment systems where
                <br />
                <span className="text-soft">transactions actually happen.</span>
              </>
            }
            lead="Counter, market stall and mobile — the channels Nigerian customers already use, captured as they are."
          />
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {shots.map((s, i) => (
              <Reveal key={s.label} delay={i * 90}>
                <Photo src={s.src} alt={s.alt} caption={s.label} ratio="aspect-[4/5]" />
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   Process
   ═══════════════════════════════════════════════════════════ */

function Process() {
  return (
    <section className="relative bg-ink-soft">
      <GridBackdrop className="opacity-40" />
      <Container wide className="relative">
        <div className="py-20 lg:py-28">
          <SectionHead
            eyebrow="How we work"
            title={
              <>
                Five stages. No shortcuts,
                <br />
                <span className="text-soft">no surprises.</span>
              </>
            }
          />
          <div className="mt-14 grid gap-px bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-5">
            {process.map((p, i) => (
              <Reveal key={p.step} delay={i * 80} className="group bg-ink-soft p-6 transition-colors duration-500 hover:bg-raised lg:p-7">
                <span className="display block text-[2.25rem] leading-none text-gold/45 transition-colors duration-500 group-hover:text-gold">
                  {p.step}
                </span>
                <h3 className="mt-6 text-[1.0625rem] text-bone">{p.title}</h3>
                <p className="mt-3 text-[0.875rem] leading-[1.75] font-light text-mute">
                  {p.text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   Selected work
   ═══════════════════════════════════════════════════════════ */

function SelectedWork() {
  const picks = [work[3], work[0], work[2]];
  return (
    <section className="relative bg-ink">
      <Container wide>
        <div className="py-20 lg:py-28">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHead
              eyebrow="Selected work"
              title={
                <>
                  Systems delivered, and systems
                  <br />
                  <span className="text-soft">being built right now.</span>
                </>
              }
            />
            <Reveal delay={200}>
              <Btn to="/work" variant="ghost" arrow>
                View our work
              </Btn>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {picks.map((w, i) => (
              <Reveal key={w.slug} delay={i * 100}>
                <a
                  {...linkProps(`/solutions/${w.solution}`)}
                  className="group flex h-full flex-col border border-white/[0.08] bg-ink-soft transition-all duration-500 hover:-translate-y-1 hover:border-gold/30"
                >
                  <div className="p-5">
                    <ProductVisual type={w.visual} />
                  </div>
                  <div className="flex flex-1 flex-col p-6 lg:p-7">
                    <div className="flex items-center justify-between gap-3">
                      <span className="label text-gold">{w.kicker}</span>
                      <span className="label text-mute">{w.year}</span>
                    </div>
                    <h3 className="mt-4 text-[1.125rem] leading-snug text-bone">{w.title}</h3>
                    <p className="mt-3 flex-1 text-[0.9375rem] leading-[1.75] font-light text-mute">
                      {w.text}
                    </p>
                    <div className="mt-6 flex items-center justify-between border-t border-white/[0.08] pt-5">
                      <StatusPill status={w.status} />
                      <span className="text-soft transition-all duration-300 group-hover:translate-x-1 group-hover:text-gold">
                        →
                      </span>
                    </div>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   Principles — warm white
   ═══════════════════════════════════════════════════════════ */

function Principles() {
  return (
    <section className="relative bg-bone text-ink">
      <Container wide>
        <div className="pt-20 pb-4 lg:pt-28 lg:pb-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <SectionHead
                tone="light"
                eyebrow="Our standards"
                title={
                  <>
                    What clients
                    <br />
                    <span className="text-ink/45">come back for.</span>
                  </>
                }
              />
            </div>
            <div className="lg:col-span-8">
              <div className="border-t border-black/10">
                {principles.map((p, i) => (
                  <Reveal key={p.title} delay={i * 60}>
                    <div className="group grid grid-cols-[auto_1fr] gap-6 border-b border-black/10 py-7 sm:grid-cols-[auto_1fr_1.4fr] sm:gap-8">
                      <span className="label pt-1 text-ink/35 transition-colors group-hover:text-gold-dark">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="text-[1.0625rem] leading-snug">{p.title}</h3>
                      <p className="col-span-2 text-[0.9375rem] leading-[1.8] font-light text-ink/65 sm:col-span-1">
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

/* ═══════════════════════════════════════════════════════════
   Voice + Insights
   ═══════════════════════════════════════════════════════════ */

function VoiceAndInsights() {
  const person = team[0];
  return (
    <section className="relative bg-ink">
      <Container wide>
        <div className="py-20 lg:py-28">
          <div className="grid gap-16 lg:grid-cols-12 lg:gap-16">
            {/* Voice */}
            <div className="lg:col-span-5">
              <Reveal>
                <Eyebrow>From the team</Eyebrow>
              </Reveal>
              <Reveal delay={80}>
                <blockquote className="mt-8">
                  <p className="display text-[clamp(1.5rem,3.2vw,2.25rem)] leading-[1.24] text-bone">
                    “{person.quote}”
                  </p>
                  <footer className="mt-8 flex items-center gap-4">
                    <span className="h-px w-10 bg-gold" />
                    <span className="text-[0.9375rem] text-bone">{person.name}</span>
                    <span className="label text-mute">{person.role}</span>
                  </footer>
                </blockquote>
              </Reveal>
              <Reveal delay={160}>
                <div className="mt-10">
                  <Btn to="/company" variant="ghost" arrow>
                    Meet the team
                  </Btn>
                </div>
              </Reveal>
            </div>

            <div className="hidden lg:col-span-1 lg:block" aria-hidden>
              <div className="h-full w-px bg-gradient-to-b from-transparent via-white/12 to-transparent" />
            </div>

            {/* Insights */}
            <div className="lg:col-span-6">
              <Reveal>
                <Eyebrow>Insights</Eyebrow>
              </Reveal>
              <div className="mt-8 border-t border-white/[0.08]">
                {insights.slice(0, 3).map((a, i) => (
                  <Reveal key={a.slug} delay={i * 70}>
                    <a
                      {...linkProps(`/insights/${a.slug}`)}
                      className="group block border-b border-white/[0.08] py-6"
                    >
                      <div className="flex items-center gap-4">
                        <span className="label text-gold/70">{a.kicker}</span>
                        <span className="label text-mute">{a.read}</span>
                      </div>
                      <h3 className="mt-3 text-[1.0625rem] leading-snug text-bone transition-colors group-hover:text-gold-light">
                        {a.title}
                      </h3>
                    </a>
                  </Reveal>
                ))}
              </div>
              <Reveal delay={240}>
                <div className="mt-8">
                  <Btn to="/insights" variant="ghost" arrow>
                    All insights
                  </Btn>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   FAQ — warm white
   ═══════════════════════════════════════════════════════════ */

function Faq() {
  return (
    <section className="relative border-t border-black/10 bg-bone text-ink">
      <Container wide>
        <div className="grid gap-12 pt-20 pb-24 lg:grid-cols-12 lg:gap-16 lg:pt-24 lg:pb-32">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <SectionHead tone="light" eyebrow="Questions" title="Answers, in plain terms." />
              <Reveal delay={200}>
                <p className="mt-7 text-[0.9375rem] leading-[1.8] font-light text-ink/60">
                  Still unsure? The full set of questions lives on the contact page, alongside
                  direct lines to our team.
                </p>
                <div className="mt-7">
                  <Btn to="/contact" variant="onLight" arrow>
                    Contact Digi02
                  </Btn>
                </div>
              </Reveal>
            </div>
          </div>
          <div className="lg:col-span-8">
            <Reveal>
              <Accordion items={faqs.slice(0, 4)} tone="light" />
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   Global CTA
   ═══════════════════════════════════════════════════════════ */

export function GlobalCTA() {
  return (
    <section className="relative overflow-hidden bg-ink">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_50%_100%,rgba(201,163,74,0.13),transparent_70%)]"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64" aria-hidden>
        <Horizon />
      </div>
      <Container className="relative">
        <div className="flex flex-col items-center py-24 text-center lg:py-32">
          <Reveal>
            <Eyebrow className="justify-center">Next step</Eyebrow>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-8 max-w-4xl text-[clamp(2rem,5.4vw,3.75rem)] leading-[1.06] text-bone">
              Tell us what your operation
              <span className="display block text-gold italic">needs to work.</span>
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-8 max-w-xl text-[1.0625rem] leading-[1.8] font-light text-soft">
              Bring us a problem, a spreadsheet, or an idea on paper. We will tell you
              honestly whether we are the right team to build it.
            </p>
          </Reveal>
          <Reveal delay={280}>
            <div className="mt-11 flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
              <Btn to="/contact" variant="primary" arrow className="w-full sm:w-auto">
                Start a conversation
              </Btn>
              <Btn href={`mailto:${company.emails[0]}`} variant="ghost" className="w-full sm:w-auto">
                {company.emails[0]}
              </Btn>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   Page
   ═══════════════════════════════════════════════════════════ */

export default function Home() {
  return (
    <>
      <Hero />
      <SkyGridBand />
      <Intro />
      <SolutionsIndex />
      <DigiVoltSpotlight />
      <FieldEvidence />
      <Process />
      <SelectedWork />
      <Principles />
      <Faq />
      <VoiceAndInsights />
      <GlobalCTA />
    </>
  );
}
