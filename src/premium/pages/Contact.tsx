import { useMemo, useState } from "react";
import { cn } from "@/premium/utils/cn";
import { Accordion, Btn, Container, Eyebrow, Reveal } from "@/premium/components/ui";
import { Breadcrumbs, PageHero } from "@/premium/components/PageHero";
import { company, faqs, solutions } from "@/premium/data/content";
import { telHref } from "@/premium/lib/phone";

type Fields = {
  name: string;
  email: string;
  org: string;
  interest: string;
  message: string;
};

const empty: Fields = {
  name: "",
  email: "",
  org: "",
  interest: "",
  message: "",
};

export default function ContactPage() {
  const [f, setF] = useState<Fields>(empty);
  const [copied, setCopied] = useState(false);
  const [touched, setTouched] = useState(false);

  const set = (k: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setF((p) => ({ ...p, [k]: e.target.value }));

  const body = useMemo(
    () =>
      [
        `Name: ${f.name}`,
        `Email: ${f.email}`,
        `Organisation: ${f.org || "Not provided"}`,
        `Area of interest: ${f.interest || "Not provided"}`,
        "",
        "Project enquiry:",
        f.message,
      ].join("\n"),
    [f],
  );

  const mailto = `mailto:${company.emails[0]}?subject=${encodeURIComponent(
    `Project enquiry: ${f.org || f.name || "Digi02 website"}`,
  )}&body=${encodeURIComponent(body)}`;

  const valid = f.name.trim() && f.email.includes("@") && f.message.trim().length > 8;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched(true);
    if (!valid) return;
    window.location.href = mailto;
  };

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(
        `To: ${company.emails[0]}\nSubject: Project enquiry\n\n${body}`,
      );
      setCopied(true);
      setTimeout(() => setCopied(false), 2600);
    } catch {
      setCopied(false);
    }
  };

  const fieldCls =
    "w-full border-b bg-transparent py-3.5 text-[0.9375rem] font-light text-bone placeholder:text-mute/70 outline-none transition-colors duration-300 focus:border-gold";

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's discuss what"
        accent="needs to work."
        lead="Tell us about the operation, the problem and what happens if it is not solved. We read every enquiry and reply personally."
      >
        <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Contact" }]} />
      </PageHero>

      {/* Form */}
      <section className="relative bg-ink-soft">
        <Container wide>
          <div className="grid gap-12 py-20 lg:grid-cols-12 lg:gap-16 lg:py-28">
            <div className="lg:col-span-7">
              <Reveal>
                <Eyebrow>Project enquiry</Eyebrow>
              </Reveal>
              <Reveal delay={80}>
                <p className="mt-7 max-w-xl text-[1.0625rem] leading-[1.8] font-light text-soft">
                  Submitting this form opens your email application with the enquiry prepared
                  and addressed to{" "}
                  <span className="text-gold">{company.emails[0]}</span>. Nothing is stored on
                  this website. A server-side endpoint can be connected later.
                </p>
              </Reveal>

              <Reveal delay={150}>
                <form onSubmit={submit} className="mt-12 space-y-9" noValidate>
                  <div className="grid gap-9 sm:grid-cols-2">
                    <Field label="Your name" required>
                      <input
                        value={f.name}
                        onChange={set("name")}
                        placeholder="Full name"
                        className={cn(fieldCls, "border-white/15")}
                      />
                    </Field>
                    <Field label="Email" required>
                      <input
                        type="email"
                        value={f.email}
                        onChange={set("email")}
                        placeholder="name@organisation.com"
                        className={cn(fieldCls, "border-white/15")}
                      />
                    </Field>
                  </div>

                  <div className="grid gap-9 sm:grid-cols-2">
                    <Field label="Organisation">
                      <input
                        value={f.org}
                        onChange={set("org")}
                        placeholder="Company or institution"
                        className={cn(fieldCls, "border-white/15")}
                      />
                    </Field>
                    <Field label="Area of interest">
                      <div className="relative">
                        <select
                          value={f.interest}
                          onChange={set("interest")}
                          className={cn(fieldCls, "border-white/15 appearance-none pr-8")}
                        >
                          <option value="" className="bg-ink-soft">
                            Select a solution
                          </option>
                          {solutions.map((s) => (
                            <option key={s.slug} value={s.name} className="bg-ink-soft">
                              {s.name}
                            </option>
                          ))}
                          <option value="Something else" className="bg-ink-soft">
                            Something else
                          </option>
                        </select>
                        <span className="pointer-events-none absolute top-1/2 right-1 -translate-y-1/2 text-mute">
                          ↓
                        </span>
                      </div>
                    </Field>
                  </div>

                  <Field label="What do you need built?" required>
                    <textarea
                      value={f.message}
                      onChange={set("message")}
                      rows={5}
                      placeholder="The operation, the problem, and what happens if it is not solved."
                      className={cn(fieldCls, "resize-none border-white/15")}
                    />
                  </Field>

                  {touched && !valid && (
                    <p className="text-[0.8125rem] text-gold">
                      Please add your name, a valid email and a short description.
                    </p>
                  )}

                  <div className="flex flex-wrap items-center gap-4 pt-2">
                    <Btn type="submit" variant="primary" arrow>
                      Prepare enquiry
                    </Btn>
                    <Btn onClick={copy} variant="ghost">
                      {copied ? "Copied ✓" : "Copy details"}
                    </Btn>
                  </div>
                </form>
              </Reveal>
            </div>

            {/* Details */}
            <div className="lg:col-span-5">
              <Reveal delay={120}>
                <div className="border border-white/[0.08] bg-ink p-7 sm:p-9">
                  <h2 className="label text-gold">Direct lines</h2>
                  <div className="mt-8 space-y-8">
                    <div>
                      <p className="label text-mute">Call us</p>
                      <div className="mt-3 space-y-1.5">
                        {company.phones.map((p) => (
                          <a
                            key={p}
                            href={telHref(p)}
                            className="block text-[1.0625rem] font-light text-bone transition-colors hover:text-gold"
                          >
                            {p}
                          </a>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="label text-mute">Email us</p>
                      <div className="mt-3 space-y-1.5">
                        {company.emails.map((e) => (
                          <a
                            key={e}
                            href={`mailto:${e}`}
                            className="block text-[1.0625rem] font-light text-bone transition-colors hover:text-gold"
                          >
                            {e}
                          </a>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="label text-mute">Visit us</p>
                      <p className="mt-3 max-w-[17rem] text-[0.9375rem] leading-[1.8] font-light text-soft">
                        {company.address}
                      </p>
                    </div>
                    <div>
                      <p className="label text-mute">Hours</p>
                      <p className="mt-3 text-[0.9375rem] leading-[1.8] font-light text-soft">
                        Monday to Friday, 9:00 to 17:00 WAT
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={200}>
                <div className="mt-8 border border-white/[0.08] bg-ink p-7 sm:p-9">
                  <h2 className="label text-gold">What happens next</h2>
                  <ol className="mt-7 space-y-6">
                    {[
                      "We read your enquiry and reply within two working days.",
                      "A short call to understand the operation and the constraint.",
                      "A written scope with an honest assessment, including when we are not the right team.",
                    ].map((s, i) => (
                      <li key={i} className="flex gap-4">
                        <span className="label shrink-0 pt-1 text-gold/70">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="text-[0.9375rem] leading-[1.75] font-light text-soft">
                          {s}
                        </span>
                      </li>
                    ))}
                  </ol>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="relative bg-ink">
        <Container wide>
          <div className="grid gap-12 py-20 lg:grid-cols-12 lg:gap-16 lg:py-28">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-32">
                <Reveal>
                  <Eyebrow>Before you write</Eyebrow>
                </Reveal>
                <Reveal delay={80}>
                  <h2 className="mt-7 text-[clamp(1.75rem,3.6vw,2.5rem)] leading-[1.1] text-bone">
                    Common
                    <span className="display block text-gold italic">questions.</span>
                  </h2>
                </Reveal>
              </div>
            </div>
            <div className="lg:col-span-8">
              <Reveal delay={120}>
                <Accordion items={faqs} />
              </Reveal>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

function Field({
  label,
  children,
  required,
}: {
  label: string;
  children: React.ReactNode;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="label flex items-center gap-2 text-mute">
        {label}
        {required && <span className="text-gold">*</span>}
      </span>
      <div className="mt-1">{children}</div>
    </label>
  );
}
