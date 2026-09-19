import { linkProps } from "@/premium/lib/router";
import { Btn, Container, Eyebrow, Reveal } from "@/premium/components/ui";
import { Breadcrumbs, PageHero } from "@/premium/components/PageHero";
import { GlobalCTA } from "@/premium/pages/Home";
import { getInsight, insights } from "@/premium/data/content";

export function InsightsPage() {
  const [lead, ...rest] = insights;

  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Notes from the"
        accent="engineering floor."
        lead="Practical writing on enterprise systems, payroll, payments and aerial operations in Nigeria — drawn from work we have actually done, not trends we have read about."
      >
        <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Insights" }]} />
      </PageHero>

      {/* Lead article */}
      <section className="relative bg-ink">
        <Container wide>
          <Reveal>
            <a
              {...linkProps(`/insights/${lead.slug}`)}
              className="group block border-b border-white/[0.08] py-16 lg:py-24"
            >
              <div className="grid gap-8 lg:grid-cols-12 lg:gap-16">
                <div className="lg:col-span-3">
                  <Eyebrow>Latest</Eyebrow>
                  <div className="mt-6 flex flex-col gap-2">
                    <span className="label text-mute">{lead.date}</span>
                    <span className="label text-mute">{lead.read} read</span>
                  </div>
                </div>
                <div className="lg:col-span-9">
                  <span className="label text-gold">{lead.kicker}</span>
                  <h2 className="mt-5 max-w-3xl text-[clamp(1.6rem,3.6vw,2.5rem)] leading-[1.1] text-bone transition-colors duration-300 group-hover:text-gold-light">
                    {lead.title}
                  </h2>
                  <p className="mt-6 max-w-2xl text-[1.0625rem] leading-[1.8] font-light text-soft">
                    {lead.excerpt}
                  </p>
                  <span className="mt-8 inline-flex items-center gap-3 text-[0.8125rem] tracking-[0.08em] text-gold uppercase">
                    Read
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </div>
              </div>
            </a>
          </Reveal>
        </Container>
      </section>

      {/* Remaining articles */}
      <section className="relative bg-ink">
        <Container wide>
          <div className="py-16 lg:py-20">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
              {rest.map((a, i) => (
                <Reveal key={a.slug} delay={i * 80} className="lg:col-span-4">
                  <a
                    {...linkProps(`/insights/${a.slug}`)}
                    className="group flex h-full flex-col border-t border-white/[0.12] pt-7"
                  >
                    <div className="flex items-center gap-4">
                      <span className="label text-gold">{a.kicker}</span>
                      <span className="label text-mute">{a.read}</span>
                    </div>
                    <h3 className="mt-5 text-[1.1875rem] leading-snug text-bone transition-colors duration-300 group-hover:text-gold-light">
                      {a.title}
                    </h3>
                    <p className="mt-4 flex-1 text-[0.9375rem] leading-[1.8] font-light text-mute">
                      {a.excerpt}
                    </p>
                    <div className="mt-7 flex items-center justify-between">
                      <span className="label text-mute">{a.date}</span>
                      <span className="text-soft transition-all duration-300 group-hover:translate-x-1 group-hover:text-gold">
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

      <GlobalCTA />
    </>
  );
}

export function InsightArticlePage({ slug }: { slug: string }) {
  const a = getInsight(slug);

  if (!a) {
    return (
      <section className="bg-ink pt-[68px] lg:pt-[76px]">
        <Container>
          <div className="py-32 text-center">
            <h1 className="text-[2rem] text-bone">Article not found</h1>
            <div className="mt-8 flex justify-center">
              <Btn to="/insights" variant="secondary" arrow>
                All insights
              </Btn>
            </div>
          </div>
        </Container>
      </section>
    );
  }

  const idx = insights.findIndex((x) => x.slug === slug);
  const next = insights[(idx + 1) % insights.length];

  return (
    <>
      <section className="relative overflow-hidden bg-ink pt-[68px] lg:pt-[76px]">
        <div className="grid-lines pointer-events-none absolute inset-0 opacity-50" aria-hidden />
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_30%_0%,rgba(201,163,74,0.10),transparent_70%)]"
          aria-hidden
        />
        <Container className="relative">
          <div className="py-20 lg:py-28">
            <Reveal>
              <Breadcrumbs
                items={[
                  { label: "Home", to: "/" },
                  { label: "Insights", to: "/insights" },
                  { label: a.kicker },
                ]}
              />
            </Reveal>
            <Reveal delay={80}>
              <div className="mt-10 flex flex-wrap items-center gap-5">
                <span className="label text-gold">{a.kicker}</span>
                <span className="h-px w-8 bg-gold/40" />
                <span className="label text-mute">{a.date}</span>
                <span className="label text-mute">{a.read} read</span>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <h1 className="mt-8 max-w-4xl text-[clamp(1.9rem,5vw,3.5rem)] leading-[1.08] tracking-[-0.025em] text-bone">
                {a.title}
              </h1>
            </Reveal>
            <Reveal delay={220}>
              <p className="mt-8 max-w-2xl text-[1.0625rem] leading-[1.8] font-light text-soft">
                {a.excerpt}
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="relative bg-bone text-ink">
        <Container>
          <div className="grid gap-12 py-20 lg:grid-cols-12 lg:gap-16 lg:py-28">
            <div className="lg:col-span-8">
              <div className="space-y-14">
                {a.body.map((s, i) => (
                  <Reveal key={s.heading} delay={i * 60}>
                    <section>
                      <h2 className="text-[1.375rem] leading-snug tracking-[-0.02em]">
                        {s.heading}
                      </h2>
                      <p className="mt-5 text-[1.0625rem] leading-[1.85] font-light text-ink/75">
                        {s.text}
                      </p>
                    </section>
                  </Reveal>
                ))}
              </div>

              <Reveal delay={200}>
                <div className="mt-16 border-t border-black/10 pt-8">
                  <p className="text-[0.9375rem] leading-[1.8] font-light text-ink/60">
                    Written by the Digi02 team in Kaduna. If your organisation is facing the
                    problem described here, we are happy to talk it through — no obligation.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <Btn to="/contact" variant="onLight" arrow>
                      Talk to Digi02
                    </Btn>
                  </div>
                </div>
              </Reveal>
            </div>

            <aside className="lg:col-span-4">
              <div className="lg:sticky lg:top-32">
                <Reveal delay={120}>
                  <div className="border border-black/10 bg-white p-7">
                    <h3 className="label text-gold-dark">Keep reading</h3>
                    <a
                      {...linkProps(`/insights/${next.slug}`)}
                      className="group mt-5 block border-t border-black/10 pt-5"
                    >
                      <span className="label text-ink/40">{next.kicker}</span>
                      <p className="mt-3 text-[1.0625rem] leading-snug transition-colors group-hover:text-gold-dark">
                        {next.title}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-2 text-soft transition-all duration-300 group-hover:translate-x-1 group-hover:text-gold-dark">
                        →
                      </span>
                    </a>
                  </div>
                </Reveal>
                <Reveal delay={200}>
                  <div className="mt-8">
                    <Btn to="/insights" variant="onLight" className="w-full">
                      All insights
                    </Btn>
                  </div>
                </Reveal>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <GlobalCTA />
    </>
  );
}
