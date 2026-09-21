import { linkProps } from "@/premium/lib/router";
import {
  BrandMark,
  Btn,
  Container,
  Eyebrow,
  GridBackdrop,
  Horizon,
  Photo,
  Reveal,
  SectionHead,
  StatusPill,
} from "@/premium/components/ui";
import { company, getSolution, photos, process, solutions, work } from "@/premium/data/content";

/* ═══════════════════════════════════════════════════════════
   1. Hero — one photograph, headline dominant
   ═══════════════════════════════════════════════════════════ */

function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink pt-[68px] lg:pt-[76px]">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <img
          src={photos.heroDroneCrew}
          alt=""
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/40 to-ink" />
      </div>
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
              Digi02 designs and builds operational software for organisations
              in Nigeria and beyond: ERP, payments, payroll, e-management,
              mobility and UAV ground control.
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
   2. Who Digi02 is
   ═══════════════════════════════════════════════════════════ */

function Identity() {
  return (
    <section className="relative bg-bone text-ink">
      <div className="grid-lines-dark pointer-events-none absolute inset-0 opacity-50" aria-hidden />
      <Container wide className="relative">
        <div className="grid gap-12 py-20 lg:grid-cols-12 lg:gap-16 lg:py-28">
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
                Digi02 is a software company based in Kaduna, Nigeria. We build
                systems around actual operational workflows, for organisations
                of every size.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-8 max-w-2xl text-[1rem] leading-[1.85] font-light text-ink/70">
                Every engagement is scoped in writing, tested before release,
                documented on handover, and supported after launch.
              </p>
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
   3. Flagship products — SkyGrid and DigiVolt together
   ═══════════════════════════════════════════════════════════ */

function Flagships() {
  const sky = getSolution("skygrid")!;
  const dv = getSolution("digivolt")!;

  return (
    <section className="relative border-t border-white/[0.08] bg-ink-soft">
      <Container wide className="relative">
        <div className="py-20 lg:py-28">
          <SectionHead
            eyebrow="Flagship products"
            title={
              <>
                Two products,
                <br />
                <span className="text-soft">built and running.</span>
              </>
            }
          />

          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            <Reveal>
              <article className="flex h-full flex-col border border-white/[0.08] bg-ink">
                <Photo
                  src={photos.skygridFieldOps}
                  alt="SkyGrid mission aircraft prepared for flight in the field"
                  caption="Mission aircraft at pre-flight"
                  ratio="aspect-[16/9]"
                  className="p-5 pb-0"
                />
                <div className="flex flex-1 flex-col p-6 lg:p-8">
                  <div className="flex flex-wrap items-center gap-4">
                    <Eyebrow>{sky.name}</Eyebrow>
                    <StatusPill status={sky.status} />
                  </div>
                  <p className="display mt-4 text-[1.5rem] text-gold italic">{sky.family}</p>
                  <p className="mt-4 flex-1 text-[0.9375rem] leading-[1.8] font-light text-soft">
                    {sky.summary}
                  </p>
                  <p className="label mt-6 text-mute">
                    Mission planning · Route design · Readiness · Command analytics
                  </p>
                  <div className="mt-6">
                    <Btn to={`/solutions/${sky.slug}`} variant="secondary" arrow>
                      Explore SkyGrid
                    </Btn>
                  </div>
                </div>
              </article>
            </Reveal>

            <Reveal delay={120}>
              <article className="flex h-full flex-col border border-white/[0.08] bg-ink">
                <Photo
                  src={photos.digivoltBook}
                  alt="DigiVolt rider app booking screen"
                  caption="DigiVolt rider app screens"
                  ratio="aspect-[16/9]"
                  className="p-5 pb-0"
                />
                <div className="flex flex-1 flex-col p-6 lg:p-8">
                  <div className="flex flex-wrap items-center gap-4">
                    <Eyebrow>{dv.name}</Eyebrow>
                    <StatusPill status={dv.status} />
                  </div>
                  <p className="display mt-4 text-[1.5rem] text-gold italic">{dv.family}</p>
                  <p className="mt-4 flex-1 text-[0.9375rem] leading-[1.8] font-light text-soft">
                    {dv.summary}
                  </p>
                  <p className="label mt-6 text-mute">
                    Booking · Driver matching · Live trip tracking · Arrival
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <Btn to={`/solutions/${dv.slug}`} variant="secondary" arrow>
                      Explore DigiVolt
                    </Btn>
                  </div>
                  <div className="label mt-5 flex flex-wrap gap-x-6 gap-y-2 text-mute">
                    <a
                      href="https://play.google.com/store/apps/details?id=com.digi02.digivolt"
                      target="_blank"
                      rel="noreferrer"
                      className="transition-colors hover:text-gold"
                    >
                      Get the rider app →
                    </a>
                    <a
                      href="https://play.google.com/store/apps/details?id=com.digi02.digivolt.driver"
                      target="_blank"
                      rel="noreferrer"
                      className="transition-colors hover:text-gold"
                    >
                      Get the driver app →
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   4. What else we build — the other five capabilities
   ═══════════════════════════════════════════════════════════ */

function MoreCapabilities() {
  const rest = solutions.filter((s) => s.slug !== "skygrid" && s.slug !== "digivolt");

  return (
    <section className="relative bg-ink">
      <Container wide>
        <div className="py-20 lg:py-28">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHead
              eyebrow="What else we build"
              title={
                <>
                  Five more capabilities,
                  <br />
                  <span className="text-soft">same engineering discipline.</span>
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
            {rest.map((s, i) => (
              <Reveal key={s.slug} delay={i * 50}>
                <a
                  {...linkProps(`/solutions/${s.slug}`)}
                  className="group relative block border-b border-white/[0.08]"
                >
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
                    <span className="grid h-9 w-9 shrink-0 place-items-center border border-white/15 text-soft transition-all duration-400 group-hover:border-gold group-hover:bg-gold group-hover:text-ink">
                      →
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
   5. Selected work
   ═══════════════════════════════════════════════════════════ */

function SelectedWork() {
  const picks = [work[3], work[0], work[2]];
  /** One distinct photograph per work card. Status pills state what each item is. */
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
    <section className="relative bg-ink-soft">
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
                  className="group flex h-full flex-col border border-white/[0.08] bg-ink transition-all duration-500 hover:-translate-y-1 hover:border-gold/30"
                >
                  <div className="p-5">
                    <Photo
                      src={cardMedia[w.slug].src}
                      alt={cardMedia[w.slug].alt}
                      ratio="aspect-[16/10]"
                    />
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
   6. How we engineer — process plus verification standard
   ═══════════════════════════════════════════════════════════ */

const VERIFICATION = [
  "Scope written down",
  "Tests executed",
  "Integrations defined",
  "Controlled rollout",
  "Documented handover",
  "Post-launch responsibility",
];

function Engineering() {
  return (
    <section className="relative bg-bone text-ink">
      <Container wide>
        <div className="py-20 lg:py-28">
          <SectionHead
            tone="light"
            eyebrow="How we engineer"
            title={
              <>
                Built to
                <span className="text-ink/45"> be checked.</span>
              </>
            }
            lead="Five stages from first conversation to live operation, each one verifiable."
          />

          <div className="mt-14 grid gap-px bg-black/10 sm:grid-cols-2 lg:grid-cols-5">
            {process.map((p, i) => (
              <Reveal key={p.step} delay={i * 80} className="bg-bone p-6 lg:p-7">
                <h3 className="text-[1.0625rem]">{p.title}</h3>
                <p className="mt-3 text-[0.875rem] leading-[1.75] font-light text-ink/65">
                  {p.text}
                </p>
              </Reveal>
            ))}
          </div>

          <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <Reveal>
                <Photo
                  src={photos.standardsReview}
                  alt="Operations team monitoring live systems from a control room"
                  caption="Operations floor: systems under watch"
                  ratio="aspect-[16/10]"
                />
              </Reveal>
            </div>
            <div className="lg:col-span-5">
              <Reveal>
                <p className="text-[clamp(1.25rem,2.4vw,1.75rem)] leading-[1.4]">
                  Every system leaves Digi02 with its scope written down, its
                  tests run, its handover documented, and a person responsible
                  for it after launch.
                </p>
              </Reveal>
              <Reveal delay={120}>
                <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 border-t border-black/10 pt-8">
                  {VERIFICATION.map((v) => (
                    <span key={v} className="label flex items-center gap-2 text-ink/55">
                      <span className="h-[4px] w-[4px] rotate-45 bg-gold-dark" />
                      {v}
                    </span>
                  ))}
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
   7. Final CTA
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
      <Identity />
      <Flagships />
      <MoreCapabilities />
      <SelectedWork />
      <Engineering />
      <GlobalCTA />
    </>
  );
}
