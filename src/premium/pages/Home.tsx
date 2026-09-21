import { useEffect, useState } from "react";
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
import { company, faqs, getSolution, insights, photos, process, solutions, team, work } from "@/premium/data/content";

/* ═══════════════════════════════════════════════════════════
   Hero
   ═══════════════════════════════════════════════════════════ */

const HERO_ROTATION_MS = 5000;

/** Faint field-photography backdrop frames. Decorative only — no captions, no controls.
    Five sourced frames of African technology in use, used only here on the homepage. */
const heroFrames = [
  photos.heroCodeReview,
  photos.heroNairaMarket,
  photos.heroDroneCrew,
  photos.heroLagosOffice,
  photos.heroPosTap,
];

/**
 * Transparent background rotation under the hero copy.
 * Crossfades on the old site's 5s cadence with no visible controls;
 * the parent section pauses it on hover/focus, and it never
 * auto-advances under prefers-reduced-motion.
 */
function HeroFieldBackdrop({ paused }: { paused: boolean }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (paused) return;
    const t = window.setTimeout(
      () => setIndex((i) => (i + 1) % heroFrames.length),
      HERO_ROTATION_MS,
    );
    return () => window.clearTimeout(t);
  }, [index, paused]);

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      {heroFrames.map((src, i) => (
        <img
          key={src}
          src={src}
          alt=""
          loading={i === 0 ? "eager" : "lazy"}
          decoding="async"
          className={cn(
            "absolute inset-0 h-full w-full object-cover opacity-40 transition-opacity duration-1000",
            i === index ? "opacity-40" : "opacity-0",
          )}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/40 to-ink" />
    </div>
  );
}

function Hero() {
  const [resting, setResting] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReducedMotion(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  return (
    <section
      className="relative overflow-hidden bg-ink pt-[68px] lg:pt-[76px]"
      onMouseEnter={() => setResting(true)}
      onMouseLeave={() => setResting(false)}
      onFocus={() => setResting(true)}
      onBlur={() => setResting(false)}
    >
      <HeroFieldBackdrop paused={resting || reducedMotion} />
      <GridBackdrop className="opacity-70" />

      <Container className="relative">
        <div className="flex flex-col items-center py-24 text-center sm:py-32 lg:py-40">
          <Reveal>
            <Eyebrow className="justify-center">
              Kaduna-rooted operational technology
            </Eyebrow>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="mt-9 max-w-5xl text-[clamp(2.4rem,7.2vw,5.25rem)] leading-[1.02] tracking-[-0.03em]">
              <span className="block text-bone">Technology built</span>
              <span className="display mt-1 block text-[clamp(2.6rem,8vw,5.75rem)] text-gold italic">
                for real operations.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-9 max-w-2xl text-[1.0625rem] leading-[1.8] font-light text-soft sm:text-[1.125rem]">
              Digi02 designs and builds software for organisations in Nigeria and
              beyond: ERP, payments, payroll, e-management, mobility and UAV
              ground control.
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
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   SkyGrid band — lead product
   ═══════════════════════════════════════════════════════════ */

function SkyGridBand() {
  const sky = getSolution("skygrid")!;

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
              <p className="label mt-10 text-mute">
                Mission planning · Route design · Readiness · Command analytics
              </p>
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
                <Photo
                  src={photos.skygridFieldOps}
                  alt="SkyGrid mission aircraft prepared for flight in the field"
                  caption="Field hardware: SkyGrid mission aircraft"
                  ratio="aspect-[16/9]"
                  className="relative"
                />
              </div>
            </Reveal>
            <Reveal delay={220}>
              <p className="label mt-4 text-mute">
                Mission aircraft at pre-flight
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
              <Reveal delay={180}>
                <Photo
                  src={photos.whoWeAre}
                  alt="Northern Nigerian business people in a meeting in Kaduna"
                  caption="Kaduna business community: the organisations we build for"
                  ratio="aspect-[4/3]"
                  className="mt-10"
                />
              </Reveal>
            </div>
          </div>

          <div className="lg:col-span-8">
            <Reveal>
              <p className="text-[clamp(1.35rem,3vw,2.15rem)] leading-[1.42] tracking-[-0.015em]">
                We build software for organisations of every size, from startups to
                large enterprises. Every system is designed around the organisation
                that will run it.{" "}
                <span className="text-gold-dark">Nothing templated.</span>
              </p>
            </Reveal>
            <Reveal delay={120}>
              <div className="mt-12 grid gap-10 sm:grid-cols-2">
                <p className="text-[1rem] leading-[1.85] font-light text-ink/70">
                  We work from Kaduna, Nigeria, and build for organisations here
                  and abroad.
                </p>
                <p className="text-[1rem] leading-[1.85] font-light text-ink/70">
                  Every engagement is scoped in writing, tested before release,
                  and delivered on the agreed date.
                </p>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-12 flex flex-wrap gap-x-10 gap-y-4 border-t border-black/10 pt-8">
                {["Scoped in writing", "Tested before release", "Documented handover", "Post-launch support"].map((t) => (
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

  return (
    <section className="relative overflow-hidden bg-bone text-ink">
      <Container wide>
        <div className="grid items-center gap-12 py-20 lg:grid-cols-12 lg:gap-16 lg:py-28">
          <div className="order-2 lg:order-1 lg:col-span-7">
            <Reveal delay={120}>
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                <Photo
                  src={photos.digivoltBook}
                  alt="DigiVolt rider app: book a ride in seconds"
                  ratio="aspect-[3/4]"
                />
                <Photo
                  src={photos.digivoltSafety}
                  alt="DigiVolt rider app: live trip tracking and safety"
                  ratio="aspect-[3/4]"
                />
              </div>
              <p className="label mt-4 text-ink/45">
                DigiVolt rider app screens
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
              <p className="label mt-10 text-ink/55">
                Booking · Driver matching · Live trip tracking · Arrival
              </p>
            </Reveal>
            <Reveal delay={280}>
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <Btn to={`/solutions/${dv.slug}`} variant="onLight" arrow>
                  Explore DigiVolt
                </Btn>
              </div>
              <div className="label mt-6 flex flex-wrap gap-x-6 gap-y-2 text-ink/55">
                <a
                  href="https://play.google.com/store/apps/details?id=com.digi02.digivolt"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-gold-dark"
                >
                  Get the rider app →
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.digi02.digivolt.driver"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-gold-dark"
                >
                  Get the driver app →
                </a>
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
                Tested where
                <br />
                <span className="text-soft">transactions happen.</span>
              </>
            }
            lead="Market stall, hospitality counter, mobile: the channels customers already use."
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
            title="The work, in order."
          />
          <div className="mt-14 grid gap-px bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-5">
            {process.map((p, i) => (
              <Reveal key={p.step} delay={i * 80} className="group bg-ink-soft p-6 transition-colors duration-500 hover:bg-raised lg:p-7">
                <h3 className="text-[1.0625rem] text-bone">{p.title}</h3>
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
  /** One distinct photograph per work card — none repeated elsewhere on this page. */
  const cardMedia: Record<string, { src: string; alt: string }> = {
    "uav-mission-operations": {
      src: photos.skygridSurveyFlight,
      alt: "Agricultural drone in flight over farmland",
    },
    "secondary-school-payments": {
      src: photos.schoolClassroom,
      alt: "Secondary-school students in uniforms",
    },
    "company-payroll": {
      src: photos.opsTeam,
      alt: "Operations team running validated payroll systems",
    },
  };
  return (
    <section className="relative bg-ink">
      <Container wide>
        <div className="py-20 lg:py-28">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHead
              eyebrow="Selected work"
              title="Selected work."
              lead="A few systems we have shipped or are building now."
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
                    {cardMedia[w.slug] ? (
                      <Photo
                        src={cardMedia[w.slug].src}
                        alt={cardMedia[w.slug].alt}
                        ratio="aspect-[16/10]"
                      />
                    ) : (
                      <ProductVisual type={w.visual} />
                    )}
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
              <div className="lg:sticky lg:top-32">
                <SectionHead
                  tone="light"
                  eyebrow="Our standards"
                  title={
                    <>
                      Built to
                      <br />
                      <span className="text-ink/45">be checked.</span>
                    </>
                  }
                />
                <Reveal delay={120}>
                  <Photo
                    src={photos.standardsReview}
                    alt="Operations team monitoring live systems from a control room"
                    caption="Operations floor: systems under watch"
                    ratio="aspect-[4/5]"
                    className="mt-10"
                  />
                </Reveal>
              </div>
            </div>
            <div className="lg:col-span-8">
              <Reveal>
                <p className="text-[clamp(1.35rem,3vw,2.15rem)] leading-[1.42] tracking-[-0.015em]">
                  Every system leaves Digi02 with its scope written down, its
                  tests run, its handover documented, and a person responsible
                  for it after launch.
                </p>
              </Reveal>
              <Reveal delay={120}>
                <p className="mt-8 max-w-xl text-[1rem] leading-[1.85] font-light text-ink/70">
                  That is the whole standard. If a system cannot be checked, it
                  is not finished.
                </p>
              </Reveal>
              <Reveal delay={180}>
                <div className="mt-10">
                  <Btn to="/company" variant="onLight" arrow>
                    Meet the team
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
              <SectionHead tone="light" eyebrow="Questions" title="Questions." />
              <Reveal delay={200}>
                <p className="mt-7 text-[0.9375rem] leading-[1.8] font-light text-ink/60">
                  More answers on the contact page, with direct lines to the team.
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
