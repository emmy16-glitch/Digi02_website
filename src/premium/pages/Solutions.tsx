import { linkProps } from "@/premium/lib/router";
import {
  Btn,
  Container,
  Eyebrow,
  Photo,
  ProductVisual,
  Reveal,
  SectionHead,
  StatusPill,
} from "@/premium/components/ui";
import { Breadcrumbs, PageHero } from "@/premium/components/PageHero";
import { GlobalCTA } from "@/premium/pages/Home";
import { getSolution, photos, solutions, type Solution } from "@/premium/data/content";

/** Live store listings. Only solutions with an entry here show download actions. */
const STORE_URLS: Record<string, { rider: string; driver: string }> = {
  digivolt: {
    rider: "https://play.google.com/store/apps/details?id=com.digi02.digivolt",
    driver: "https://play.google.com/store/apps/details?id=com.digi02.digivolt.driver",
  },
};

const SOLUTION_PHOTOS: Record<string, { src: string; alt: string; caption: string }> = {
  digivolt: { src: photos.digivoltDriver, alt: "DigiVolt driver app: trip requests with Naira fares", caption: "Driver app: trip requests, Naira fares and earnings" },
  "enterprise-systems": { src: photos.engineeringTeam, alt: "Digi02 engineering team at work", caption: "Engineering discipline: operations console" },
};

/** Real photography replacing generated diagrams — each image appears once. */
const SOLUTION_VISUALS: Record<string, { src: string; alt: string; caption: string; ratio: string }> = {
  skygrid: { src: photos.skygridUav, alt: "SkyGrid mission aircraft on the field", caption: "Field hardware: SkyGrid mission aircraft", ratio: "aspect-[16/9]" },
  digivolt: { src: photos.digivoltProtection, alt: "DigiVolt safety tools: live trip protection", caption: "DigiVolt safety tools screens", ratio: "aspect-[4/5]" },
  "payment-systems": { src: photos.fieldCardPayment, alt: "Customer paying by card with a mobile phone", caption: "Payer side: card and phone payment", ratio: "aspect-[16/9]" },
  "payroll-automation": { src: photos.opsTeam, alt: "Operations team running validated payroll systems", caption: "Operations floor: validated runs, people behind them", ratio: "aspect-[16/9]" },
};

/* ═══════════════════════════════════════════════════════════
   Solutions index
   ═══════════════════════════════════════════════════════════ */

export function SolutionsPage() {
  const [built, developing, capability] = [
    solutions.filter((s) => s.status === "Built product"),
    solutions.filter((s) => s.status === "In development"),
    solutions.filter((s) => s.status === "Solution capability"),
  ];

  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Seven areas of practice,"
        accent="one standard."
        lead="From unmanned-aerial mission software to payroll that has to be right every month. Each system is engineered around the operation it serves, and labelled honestly for what it is today."
      >
        <div className="flex flex-wrap gap-3">
          <Btn to="/contact" variant="primary" arrow>
            Discuss your project
          </Btn>
          <Btn to="/industries" variant="ghost">
            See industries
          </Btn>
        </div>
      </PageHero>

      {/* Product rows */}
      <section className="relative bg-ink-soft">
        <Container wide>
          <div className="py-16 lg:py-24">
            <Reveal>
              <Eyebrow>Products</Eyebrow>
            </Reveal>
            <div className="mt-10 space-y-8 lg:space-y-12">
              {[...built, ...developing].map((s, i) => (
                <Reveal key={s.slug} delay={i * 80}>
                  <a
                    {...linkProps(`/solutions/${s.slug}`)}
                    className="group grid gap-8 border border-white/[0.08] bg-ink p-6 transition-all duration-500 hover:border-gold/30 sm:p-8 lg:grid-cols-12 lg:gap-12"
                  >
                    <div className="lg:col-span-5">
                      <div className="flex items-center gap-4">
                        <span className="label text-gold/70">{s.index}</span>
                        <StatusPill status={s.status} />
                      </div>
                      <h2 className="mt-6 text-[clamp(1.6rem,3.4vw,2.375rem)] leading-tight text-bone">
                        {s.name}
                      </h2>
                      <p className="label mt-3 text-mute">{s.family}</p>
                      <p className="mt-6 max-w-md text-[0.9375rem] leading-[1.8] font-light text-soft">
                        {s.summary}
                      </p>
                      <span className="mt-7 inline-flex items-center gap-3 text-[0.8125rem] tracking-[0.08em] text-gold uppercase">
                        Explore
                        <span className="transition-transform duration-300 group-hover:translate-x-1">
                          →
                        </span>
                      </span>
                    </div>
                    <div className="lg:col-span-7">
                      <ProductVisual type={s.visual} />
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Capability grid */}
      <section className="relative bg-ink">
        <Container wide>
          <div className="py-20 lg:py-28">
            <SectionHead
              eyebrow="Solution capabilities"
              title={
                <>
                  Platforms we build and tailor
                  <br />
                  <span className="text-soft">to your organisation.</span>
                </>
              }
              lead="These are delivered as tailored systems, configured around how your organisation actually runs. Not as one boxed product."
            />
            <div className="mt-14 grid gap-px bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-5">
              {capability.map((s, i) => (
                <Reveal key={s.slug} delay={i * 70}>
                  <a
                    {...linkProps(`/solutions/${s.slug}`)}
                    className="group flex h-full flex-col bg-ink p-6 transition-colors duration-500 hover:bg-raised lg:p-7"
                  >
                    <span className="label text-mute transition-colors group-hover:text-gold">
                      {s.index}
                    </span>
                    <h3 className="mt-6 text-[1.0625rem] leading-snug text-bone">{s.name}</h3>
                    <p className="mt-3 flex-1 text-[0.875rem] leading-[1.75] font-light text-mute">
                      {s.summary}
                    </p>
                    <span className="mt-5 text-soft transition-all duration-300 group-hover:translate-x-1 group-hover:text-gold">
                      →
                    </span>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <GlobalCTA />
    </>
  );
}

/* ═══════════════════════════════════════════════════════════
   Solution detail
   ═══════════════════════════════════════════════════════════ */

export function SolutionDetailPage({ slug }: { slug: string }) {
  const s = getSolution(slug);

  if (!s) {
    return (
      <section className="bg-ink pt-[68px] lg:pt-[76px]">
        <Container>
          <div className="py-32 text-center">
            <h1 className="text-[2rem] text-bone">Solution not found</h1>
            <div className="mt-8 flex justify-center">
              <Btn to="/solutions" variant="secondary" arrow>
                All solutions
              </Btn>
            </div>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <>
      <PageHero
        eyebrow={`Solution ${s.index} · ${s.family}`}
        title={s.name}
        lead={s.summary}
        aside={
          <div className="border border-white/[0.08] bg-ink-soft p-7">
            <StatusPill status={s.status} />
            <p className="mt-5 text-[0.9375rem] leading-[1.75] font-light text-soft">
              {s.statusNote}
            </p>
            <div className="mt-7 space-y-3">
              {STORE_URLS[s.slug] && (
                <>
                  <Btn href={STORE_URLS[s.slug].rider} variant="primary" className="w-full">
                    Get the rider app
                  </Btn>
                  <Btn href={STORE_URLS[s.slug].driver} variant="secondary" className="w-full">
                    Get the driver app
                  </Btn>
                </>
              )}
              <Btn to="/contact" variant={STORE_URLS[s.slug] ? "ghost" : "primary"} arrow className="w-full">
                Discuss this solution
              </Btn>
            </div>
          </div>
        }
      >
        <Breadcrumbs
          items={[{ label: "Home", to: "/" }, { label: "Solutions", to: "/solutions" }, { label: s.name }]}
        />
      </PageHero>

      {/* Overview + visual */}
      <section className="relative bg-ink-soft">
        <Container wide>
          <div className="grid gap-12 py-20 lg:grid-cols-12 lg:gap-16 lg:py-28">
            <div className="lg:col-span-5">
              <Reveal>
                <Eyebrow>Overview</Eyebrow>
              </Reveal>
              <div className="mt-8 space-y-6">
                {s.body.map((p, i) => (
                  <Reveal key={i} delay={i * 80}>
                    <p className="text-[1.0625rem] leading-[1.85] font-light text-soft">{p}</p>
                  </Reveal>
                ))}
              </div>
            </div>
            <div className="lg:col-span-7">
              <Reveal delay={120}>
                {SOLUTION_VISUALS[slug] ? (
                  <Photo
                    src={SOLUTION_VISUALS[slug].src}
                    alt={SOLUTION_VISUALS[slug].alt}
                    caption={SOLUTION_VISUALS[slug].caption}
                    ratio={SOLUTION_VISUALS[slug].ratio}
                  />
                ) : (
                  <ProductVisual type={s.visual} />
                )}
              </Reveal>
              {SOLUTION_PHOTOS[slug] && (
                <Reveal delay={200}>
                  <Photo
                    src={SOLUTION_PHOTOS[slug].src}
                    alt={SOLUTION_PHOTOS[slug].alt}
                    caption={SOLUTION_PHOTOS[slug].caption}
                    ratio="aspect-[16/9]"
                    className="mt-8"
                  />
                </Reveal>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* Capabilities */}
      <section className="relative bg-ink">
        <Container wide>
          <div className="py-20 lg:py-28">
            <SectionHead
              eyebrow="Capabilities"
              title={
                <>
                  What the system
                  <br />
                  <span className="text-soft">takes care of.</span>
                </>
              }
            />
            <div className="mt-14 grid gap-x-12 lg:grid-cols-2">
              {s.capabilities.map((c, i) => (
                <Reveal key={c.title} delay={i * 60}>
                  <div className="group flex gap-6 border-t border-white/[0.08] py-7">
                    <span className="label shrink-0 pt-1.5 text-mute transition-colors group-hover:text-gold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-[1.0625rem] text-bone">{c.title}</h3>
                      <p className="mt-2.5 text-[0.9375rem] leading-[1.75] font-light text-mute">
                        {c.text}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Next solution */}
      <NextSolution current={s} />

      <GlobalCTA />
    </>
  );
}

function NextSolution({ current }: { current: Solution }) {
  const idx = solutions.findIndex((s) => s.slug === current.slug);
  const next = solutions[(idx + 1) % solutions.length];
  const prev = solutions[(idx - 1 + solutions.length) % solutions.length];

  return (
    <section className="relative border-t border-white/[0.08] bg-ink-soft">
      <Container wide>
        <div className="grid sm:grid-cols-2">
          <a
            {...linkProps(`/solutions/${prev.slug}`)}
            className="group border-white/[0.08] border-b p-8 transition-colors hover:bg-raised sm:border-r sm:border-b-0 lg:p-12"
          >
            <span className="label text-mute">Previous</span>
            <h3 className="mt-4 flex items-center gap-3 text-[1.375rem] text-bone">
              <span className="text-mute transition-transform duration-300 group-hover:-translate-x-1">
                ←
              </span>
              {prev.name}
            </h3>
          </a>
          <a
            {...linkProps(`/solutions/${next.slug}`)}
            className="group p-8 text-right transition-colors hover:bg-raised lg:p-12"
          >
            <span className="label text-mute">Next</span>
            <h3 className="mt-4 flex items-center justify-end gap-3 text-[1.375rem] text-bone">
              {next.name}
              <span className="text-mute transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </h3>
          </a>
        </div>
      </Container>
    </section>
  );
}

export default SolutionsPage;
