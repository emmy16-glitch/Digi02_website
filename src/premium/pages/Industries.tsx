import { linkProps } from "@/premium/lib/router";
import {
  Btn,
  Container,
  Photo,
  ProductVisual,
  Reveal,
  SectionHead,
  StatusPill,
} from "@/premium/components/ui";
import { Breadcrumbs, PageHero } from "@/premium/components/PageHero";
import { GlobalCTA } from "@/premium/pages/Home";
import { industries, photos, work } from "@/premium/data/content";

const WORK_PHOTOS: Record<string, { src: string; alt: string }> = {
  mission: { src: photos.skygridUav, alt: "SkyGrid mission aircraft in the field" },
  transaction: { src: photos.posMarket, alt: "Market trader accepting POS payment" },
  workflow: { src: photos.cardPhone, alt: "Card payment with mobile phone" },
  institution: { src: photos.engineeringTeam, alt: "Engineering team reviewing operations" },
  mobility: { src: photos.posHospitality, alt: "Hospitality counter payment" },
  engineering: { src: photos.engineeringTeam, alt: "Engineering team reviewing operations" },
};

/* ═══════════════════════════════════════════════════════════
   Industries
   ═══════════════════════════════════════════════════════════ */

export function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Sectors where the work"
        accent="has consequences."
        lead="Retail counters, school bursaries, institutional records, aerial patrols, hospital bills. The sector changes; the requirement does not — the system has to work, and it has to be accountable."
      >
        <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Industries" }]} />
      </PageHero>

      <section className="relative bg-bone text-ink">
        <Container wide>
          <div className="py-20 lg:py-28">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-4">
                <div className="lg:sticky lg:top-32">
                  <SectionHead
                    tone="light"
                    eyebrow="Coverage"
                    title={
                      <>
                        Nine sectors.
                        <br />
                        <span className="text-ink/45">One engineering discipline.</span>
                      </>
                    }
                    lead="We do not claim to know your sector better than you do. We claim to know how to build the system that your sector needs."
                  />
                </div>
              </div>

              <div className="lg:col-span-8">
                <div className="border-t border-black/10">
                  {industries.map((ind, i) => (
                    <Reveal key={ind.name} delay={i * 45}>
                      <div className="group grid grid-cols-[auto_1fr] gap-5 border-b border-black/10 py-7 sm:grid-cols-[auto_1.15fr_1fr] sm:gap-8">
                        <span className="label pt-1.5 text-ink/35 transition-colors group-hover:text-gold-dark">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <div>
                          <h3 className="text-[1.0625rem] leading-snug">{ind.name}</h3>
                          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5">
                            {ind.tags.map((t) => (
                              <span key={t} className="label text-gold-dark/70">
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                        <p className="col-span-2 text-[0.9375rem] leading-[1.8] font-light text-ink/65 sm:col-span-1">
                          {ind.text}
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

      <GlobalCTA />
    </>
  );
}

/* ═══════════════════════════════════════════════════════════
   Work
   ═══════════════════════════════════════════════════════════ */

export function WorkPage() {
  const note =
    "We label every engagement honestly. A built product is shown as built. A capability is shown as a capability. Nothing here borrows numbers we cannot verify.";

  return (
    <>
      <PageHero
        eyebrow="Our work"
        title="Systems delivered, and systems"
        accent="being built now."
        lead="A selection of engagements across payments, institutional management, payroll and unmanned-aerial operations — each described as it actually stands."
      >
        <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Work" }]} />
      </PageHero>

      <section className="relative bg-ink">
        <Container wide>
          <div className="py-20 lg:py-28">
            <Reveal>
              <div className="border-l-2 border-gold/50 pl-6">
                <p className="max-w-2xl text-[0.9375rem] leading-[1.8] font-light text-soft">
                  {note}
                </p>
              </div>
            </Reveal>

            <div className="mt-16 space-y-8 lg:mt-20 lg:space-y-12">
              {work.map((w, i) => (
                <Reveal key={w.slug} delay={i * 70}>
                  <article className="group grid gap-0 border border-white/[0.08] bg-ink-soft transition-colors duration-500 hover:border-gold/25 lg:grid-cols-12">
                    <div className="p-7 sm:p-9 lg:col-span-5 lg:p-10">
                      <div className="flex flex-wrap items-center justify-between gap-4">
                        <span className="label text-gold">{w.kicker}</span>
                        <span className="label text-mute">{w.year}</span>
                      </div>
                      <h2 className="mt-6 text-[clamp(1.375rem,2.6vw,1.875rem)] leading-tight text-bone">
                        {w.title}
                      </h2>
                      <p className="mt-5 max-w-md text-[0.9375rem] leading-[1.8] font-light text-soft">
                        {w.text}
                      </p>
                      <div className="mt-8 flex flex-wrap items-center gap-5">
                        <StatusPill status={w.status} />
                        <a
                          {...linkProps(`/solutions/${w.solution}`)}
                          className="inline-flex items-center gap-2.5 text-[0.8125rem] tracking-[0.08em] text-gold uppercase"
                        >
                          Solution
                          <span className="transition-transform duration-300 group-hover:translate-x-1">
                            →
                          </span>
                        </a>
                      </div>
                    </div>
                    <div className="border-t border-white/[0.08] p-7 sm:p-9 lg:col-span-7 lg:border-t-0 lg:border-l lg:p-10">
                      {WORK_PHOTOS[w.visual] ? (
                        <Photo
                          src={WORK_PHOTOS[w.visual].src}
                          alt={WORK_PHOTOS[w.visual].alt}
                          ratio="aspect-[16/10]"
                        />
                      ) : (
                        <ProductVisual type={w.visual} />
                      )}
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="relative bg-bone text-ink">
        <Container wide>
          <div className="py-20 lg:py-28">
            <SectionHead
              tone="light"
              eyebrow="A note on evidence"
              title="What we will and will not claim."
            />
            <div className="mt-14 grid gap-x-12 gap-y-10 lg:grid-cols-2">
              {[
                {
                  t: "Shown as real",
                  d: "Product interfaces that exist and are used, photographed or captured as they are — never recoloured or regenerated to look better than they are.",
                },
                {
                  t: "Shown as direction",
                  d: "Product visualisations for systems still in development. These are labelled clearly and never presented as live deployments.",
                },
                {
                  t: "Never invented",
                  d: "No fabricated customer counts, deployment totals, market coverage or performance statistics. If we cannot verify a number, we do not print it.",
                },
                {
                  t: "Never generic",
                  d: "No stock photography of teams smiling at laptops, no fake operators, no borrowed competitor imagery. Every visual is built for Digi02 in Digi02's palette.",
                },
              ].map((c, i) => (
                <Reveal key={c.t} delay={i * 70}>
                  <div className="border-t border-black/10 pt-7">
                    <h3 className="text-[1.0625rem]">{c.t}</h3>
                    <p className="mt-3 max-w-lg text-[0.9375rem] leading-[1.8] font-light text-ink/65">
                      {c.d}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={280}>
              <div className="mt-14">
                <Btn to="/contact" variant="onLight" arrow>
                  Discuss your project
                </Btn>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <GlobalCTA />
    </>
  );
}


