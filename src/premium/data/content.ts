/* Team photos: real portraits supplied from device (public/images/team) */

/* ────────────────────────────────────────────────────────────
   Company
   ──────────────────────────────────────────────────────────── */

export const company = {
  name: "Digi02",
  legalName: "Digi02 Software Solutions",
  positioning:
    "Software engineered for operations that have to work: the first time, every time.",
  intro:
    "Digi02 is a software company based in Kaduna, Nigeria. We build enterprise systems, payment and payroll infrastructure, institutional e-management platforms and unmanned-aerial mission software for organisations that cannot afford to guess.",
  location: "Kaduna, Nigeria",
  address: "No. 2, The Hub, Industrial Area, Farin Gida, Mando, Kaduna, Nigeria",
  phones: ["+234 (0) 816 940 4088", "+234 (0) 906 787 9766"],
  emails: ["info@digi02.org", "support@digi02.org"],
  website: "digi02.org",
};

/* ────────────────────────────────────────────────────────────
   Navigation
   ──────────────────────────────────────────────────────────── */

export const nav = [
  { label: "Solutions", to: "/solutions" },
  { label: "Industries", to: "/industries" },
  { label: "Work", to: "/work" },
  { label: "Company", to: "/company" },
  { label: "Insights", to: "/insights" },
];

/* ────────────────────────────────────────────────────────────
   Solutions
   ──────────────────────────────────────────────────────────── */

export type Visual =
  | "mission"
  | "mobility"
  | "workflow"
  | "transaction"
  | "institution"
  | "engineering";

export type Solution = {
  slug: string;
  name: string;
  family: string;
  status: "Built product" | "In development" | "Solution capability";
  statusNote: string;
  summary: string;
  body: string[];
  capabilities: { title: string; text: string }[];
  visual: Visual;
  index: string;
};

export const solutions: Solution[] = [
  {
    slug: "skygrid",
    name: "SkyGrid",
    family: "Unmanned aerial systems",
    status: "Built product",
    statusNote: "Real product interface, shown as built.",
    summary:
      "Ground-control software for unmanned aerial operations: mission planning, route design, readiness and command analytics in one console.",
    body: [
      "SkyGrid is Digi02's unmanned-aerial mission platform. It exists because aerial work in Nigeria (survey, inspection, security, mapping) is usually planned in one tool, flown in another and reported in a third. SkyGrid closes that gap.",
      "A mission moves through four deliberate stages: Plan, Prepare, Operate and Review. Waypoints, geofences and flight parameters are authored on a map; readiness is confirmed before launch; the operation is monitored live; and the command view turns what happened into something you can act on.",
    ],
    capabilities: [
      {
        title: "Mission planning",
        text: "Author waypoints, geofences and flight parameters directly on the operational map.",
      },
      {
        title: "Route planning",
        text: "Design and adjust flight paths with clear, legible geometry, no hidden settings.",
      },
      {
        title: "Mission operations",
        text: "A single readiness view covering aircraft, crew and mission state before launch.",
      },
      {
        title: "Command analytics",
        text: "Post-mission review and reporting for teams that have to account for every flight.",
      },
      {
        title: "AutoPilot integration",
        text: "Autonomous control behaviour defined during planning, not improvised in the field.",
      },
      {
        title: "Data collection",
        text: "Real-time capture feeding survey, inspection and security workflows.",
      },
    ],
    visual: "mission",
    index: "01",
  },
  {
    slug: "digivolt",
    name: "DigiVolt",
    family: "Mobility platform",
    status: "Built product",
    statusNote: "Available now on Google Play: separate rider and driver apps.",
    summary:
      "DigiVolt connects riders with nearby drivers. Book in seconds, track the trip to arrival. Built for Nigerian cities.",
    body: [
      "DigiVolt is Digi02's mobility platform. It connects riders with nearby drivers so a trip can be booked in seconds, tracked in real time and completed without negotiation at the kerb.",
      "DigiVolt is live on Google Play: a rider app for booking and tracking trips, and a driver app for receiving requests, navigating routes and tracking earnings.",
    ],
    capabilities: [
      {
        title: "Instant booking",
        text: "Set a pickup and destination to create the trip.",
      },
      {
        title: "Driver matching",
        text: "Nearby-driver assignment designed around real city conditions, not ideal maps.",
      },
      {
        title: "Live trip tracking",
        text: "Riders and operations see the same trip state.",
      },
      {
        title: "Fare handling",
        text: "Transparent pricing and payment settlement built into the trip, not bolted on.",
      },
      {
        title: "Operations view",
        text: "A dispatch console for fleets managing many vehicles at once.",
      },
    ],
    visual: "mobility",
    index: "02",
  },
  {
    slug: "enterprise-systems",
    name: "Enterprise Systems",
    family: "ERP & operations",
    status: "Solution capability",
    statusNote: "Delivered as tailored systems, not one boxed product.",
    summary:
      "ERP systems that centralise operations, sharpen decisions and make resources legible across a whole organisation.",
    body: [
      "Most organisations do not lack data. They lack a single place where it agrees. Our enterprise systems centralise finance, inventory, sales, HR and reporting so that every department describes the same reality.",
      "We build around how your organisation actually runs, then make that workflow auditable. Automation covers payroll processing, invoice generation and inventory tracking to reduce manual error. Reporting provides real-time insight into KPIs, sales trends and stock levels for demand forecasting and performance tracking.",
      "Systems are modular and scale with growth: CRM, e-commerce integration and financial reporting can be added later. Tax handling is configured for Nigerian obligations including VAT and Corporate Income Tax, with accurate record-keeping for audits. Retail chains gain inventory tracking, automated purchase orders and loyalty support; manufacturers gain production scheduling and raw-material tracking.",
    ],
    capabilities: [
      {
        title: "Centralised operations",
        text: "One operational record across departments, locations and roles.",
      },
      {
        title: "Decision support",
        text: "Reporting that answers the questions leadership actually asks.",
      },
      {
        title: "Resource visibility",
        text: "Stock, assets, people and budgets in one coherent view.",
      },
      {
        title: "Role-based access",
        text: "Permissions that follow the org chart, with a full audit trail.",
      },
      {
        title: "Modular rollout",
        text: "Start with one function, extend without rebuilding everything.",
      },
    ],
    visual: "workflow",
    index: "03",
  },
  {
    slug: "e-management",
    name: "E-Management",
    family: "Institutional platforms",
    status: "Solution capability",
    statusNote: "Built to institutional process, not around generic software.",
    summary:
      "Digital management platforms for institutions: structured approvals, records and service delivery that stand up to scrutiny.",
    body: [
      "Institutions move on process. When that process lives on paper, every audit becomes an archaeology project. Our e-management platforms put requests, approvals, records and correspondence into a system with a memory, streamlining operations and improving productivity for organisations of all sizes.",
      "The emphasis is on traceability: who asked, who approved, when, and on what basis. That is what lets an institution serve people quickly without losing accountability.",
    ],
    capabilities: [
      {
        title: "Structured approvals",
        text: "Multi-stage workflows that mirror real institutional authority.",
      },
      {
        title: "Records management",
        text: "Searchable, versioned records with retention you control.",
      },
      {
        title: "Service delivery",
        text: "Public-facing request tracking with internal case handling.",
      },
      {
        title: "Correspondence control",
        text: "Inbound and outbound documentation logged against a single reference.",
      },
      {
        title: "Audit trail",
        text: "Every action attributed, timestamped and retrievable.",
      },
    ],
    visual: "institution",
    index: "04",
  },
  {
    slug: "payroll-automation",
    name: "Payroll Automation",
    family: "HR & finance",
    status: "Solution capability",
    statusNote: "Configured to your statutory obligations.",
    summary:
      "Payroll platforms that process salaries, taxes and compliance with precision, so payday stops being a risk.",
    body: [
      "Payroll is the one system that has to be right, on the same date, every month. Our payroll automation handles salary computation, allowances, bonuses and statutory deductions, including PAYE, pension contributions and VAT handling, with compliance reporting generated as part of the run.",
      "The platform is designed for accuracy first: every figure in a payslip can be traced back to the input that produced it. Employee records, promotions, attendance, leave and performance stay in one interface, with encryption protecting sensitive salary data. Errors surface before payment, not after.",
    ],
    capabilities: [
      {
        title: "Salary processing",
        text: "Automated computation across grades, allowances and deductions.",
      },
      {
        title: "Tax calculations",
        text: "Statutory deductions applied correctly, with records to match.",
      },
      {
        title: "Compliance reporting",
        text: "Regulatory outputs generated as part of the run, not afterwards.",
      },
      {
        title: "Payslip transparency",
        text: "Employees see exactly how every figure was reached.",
      },
      {
        title: "Pre-payment validation",
        text: "Checks that catch anomalies before money leaves the account.",
      },
    ],
    visual: "workflow",
    index: "05",
  },
  {
    slug: "payment-systems",
    name: "Payment Systems",
    family: "Payments & POS",
    status: "Solution capability",
    statusNote: "Integrated with the channels your customers already use.",
    summary:
      "Payment platforms and POS infrastructure for secure transactions, automated invoicing and reconciliation that balances.",
    body: [
      "Payments fail quietly. Money arrives, records disagree, and someone spends the last week of the month finding the difference. Our payment systems are built so that transaction, settlement and record agree from the start, with automated reconciliation aligning payment data to sales records.",
      "We support the channels that matter locally: debit and credit cards, bank transfers and digital wallets, with multi-currency support for businesses trading across borders, automated invoicing and financial reporting. Security follows PCI DSS expectations with encryption and traceable transactions. Gateways integrate with WooCommerce, Shopify and Magento, plus POS and accounting software, and recurring billing is available for subscription models. Specialised flows cover secondary-school fee collection, retail, hospitality, healthcare, and government services such as taxes, permits and licences.",
    ],
    capabilities: [
      {
        title: "Secure transactions",
        text: "Encryption and security practice aligned to PCI DSS expectations.",
      },
      {
        title: "POS operations",
        text: "Point-of-sale flows built for real counter conditions.",
      },
      {
        title: "Automated invoicing",
        text: "Invoices generated, delivered and tracked without manual steps.",
      },
      {
        title: "Reconciliation",
        text: "Payment data aligned to sales records automatically.",
      },
      {
        title: "Financial reporting",
        text: "Clear reporting on volume, channel and settlement state.",
      },
      {
        title: "Multi-channel",
        text: "Cards, bank transfer and digital wallets in one integration.",
      },
    ],
    visual: "transaction",
    index: "06",
  },
  {
    slug: "custom-software",
    name: "Custom Software",
    family: "Engineering services",
    status: "Solution capability",
    statusNote: "Scoped, built and handed over with documentation.",
    summary:
      "Bespoke software for problems generic products cannot solve. It is engineered, documented and handed over properly.",
    body: [
      "Some problems simply do not have an off-the-shelf answer. We build custom software for those cases: a defined problem, a tailored system, and a handover that leaves your team in control.",
      "Engagements start from the operational problem, not from a template. We architect openly, test rigorously and document what we build so the system survives the people who made it.",
    ],
    capabilities: [
      {
        title: "Discovery & scoping",
        text: "The operational problem stated precisely before a line is written.",
      },
      {
        title: "System architecture",
        text: "Modular design that can grow without a rewrite.",
      },
      {
        title: "Integration",
        text: "Connection to the systems you already depend on.",
      },
      {
        title: "Rigorous testing",
        text: "Attention to detail and continuous improvement through the build.",
      },
      {
        title: "Handover",
        text: "Documentation and support that outlive the project.",
      },
    ],
    visual: "engineering",
    index: "07",
  },
];

export const getSolution = (slug: string) =>
  solutions.find((s) => s.slug === slug);

/* ────────────────────────────────────────────────────────────
   Industries
   ──────────────────────────────────────────────────────────── */

export const industries = [
  {
    name: "Government & Public Sector",
    text: "E-management platforms that make institutional process traceable and service delivery measurable.",
    tags: ["E-Management", "Records", "Approvals"],
  },
  {
    name: "Education",
    text: "Fee payment, records and administration for schools and institutions that deal with hundreds of payers.",
    tags: ["Payments", "Payroll", "E-Management"],
  },
  {
    name: "Retail & E-commerce",
    text: "Point of sale, inventory and online payment that reconcile to the same numbers.",
    tags: ["POS", "Payments", "ERP"],
  },
  {
    name: "Hospitality & Tourism",
    text: "Bookings, in-house services and settlement handled securely from one system.",
    tags: ["Payments", "Enterprise"],
  },
  {
    name: "Healthcare",
    text: "Bill payment, claims and records handled with the care the sector demands.",
    tags: ["Payments", "Records"],
  },
  {
    name: "Agriculture",
    text: "Aerial survey and field data collection that replace guesswork with measurement.",
    tags: ["SkyGrid", "Data"],
  },
  {
    name: "Security & Surveillance",
    text: "Planned aerial patrols, documented missions and reviewable incident records.",
    tags: ["SkyGrid", "Reporting"],
  },
  {
    name: "Logistics & Mobility",
    text: "Dispatch, fleet visibility and trip operations built around real routes.",
    tags: ["DigiVolt", "Enterprise"],
  },
  {
    name: "Energy & Utilities",
    text: "Inspection of hard-to-reach infrastructure and operational reporting on one console.",
    tags: ["SkyGrid", "ERP"],
  },
];

/* ────────────────────────────────────────────────────────────
   Work — capability case studies
   ──────────────────────────────────────────────────────────── */

export const work = [
  {
    slug: "secondary-school-payments",
    kicker: "Payments",
    title: "Secure payment solution for secondary schools",
    status: "Solution capability",
    text: "Fee collection designed for institutions handling many payers at once: automated invoicing, multiple payment channels and reconciliation that balances against school records.",
    solution: "payment-systems",
    visual: "transaction" as Visual,
    year: "2024",
  },
  {
    slug: "institutional-e-management",
    kicker: "E-Management",
    title: "E-management for institutional workflow",
    status: "Solution capability",
    text: "Structured requests, staged approvals and a full audit trail, replacing paper-driven process with a system that can account for every decision.",
    solution: "e-management",
    visual: "institution" as Visual,
    year: "2024",
  },
  {
    slug: "company-payroll",
    kicker: "Payroll",
    title: "Payroll for seamless company management",
    status: "Solution capability",
    text: "Salary processing, statutory deductions and compliance reporting in one validated run. Accuracy checked before payment, not after.",
    solution: "payroll-automation",
    visual: "workflow" as Visual,
    year: "2025",
  },
  {
    slug: "uav-mission-operations",
    kicker: "SkyGrid",
    title: "Unmanned aerial mission operations",
    status: "Built product",
    text: "Mission planning, route design, readiness confirmation and command analytics in a single ground-control console.",
    solution: "skygrid",
    visual: "mission" as Visual,
    year: "2025",
  },
  {
    slug: "urban-mobility",
    kicker: "DigiVolt",
    title: "Urban mobility platform",
    status: "Built product",
    text: "Booking, driver matching, live tracking and fare settlement designed for Nigerian city conditions. Live on Google Play.",
    solution: "digivolt",
    visual: "mobility" as Visual,
    year: "2026",
  },
];

/* ────────────────────────────────────────────────────────────
   Team
   ──────────────────────────────────────────────────────────── */

export const team = [
  {
    name: "Olamide Opeyemi",
    role: "Business Development Lead",
    quote:
      "We don't just build software; we build trust. Our solutions are tailored, efficient, and built with the highest level of professionalism.",
    photo: "/images/team/olamide-opeyemi.jpg",
  },
  {
    name: "Ade Bakare",
    role: "Senior Data Analyst",
    quote:
      "Our culture of integrity and transparency ensures that we always deliver on our promises. Clients trust us because we prioritise their success.",
    photo: "/images/team/ade-bakare.jpg",
  },
  {
    name: "Engr. Ovidi Faith",
    role: "DevOps Analyst",
    quote:
      "Through rigorous testing, attention to detail, and a commitment to continuous improvement. We never settle for less than the best.",
    photo: "/images/team/ovidi-faith.jpg",
  },
  {
    name: "Ose Daniels",
    role: "Data Analyst",
    quote:
      "The strong ethical foundation. We never cut corners; we always ensure that every project meets industry best practices.",
    photo: "/images/team/ose-daniels.jpg",
  },
  {
    name: "Lee Elijah Danjuma",
    role: "Field Technician",
    quote:
      "Every project is executed with a deep sense of responsibility. We ensure quality, security, and timely delivery, without compromising our core values.",
    photo: "/images/team/lee-danjuma.jpg",
  },
];

/* Real photography supplied from device — wired into hero/work/company sections */
export const photos = {
  skygridUav: "/images/skygrid/uav-field.jpg",
  skygridFieldOps: "/images/skygrid/skygrid-field-ops.jpg",
  skygridHardware: "/images/skygrid/skygrid-hardware.jpg",
  posHospitality: "/images/payments/pos-hospitality.jpg",
  posMarket: "/images/payments/pos-market.jpg",
  cardPhone: "/images/payments/card-phone.jpg",
  fieldCardPayment: "/images/payments/field-card-payment.jpg",
  engineeringTeam: "/images/company/engineering-team.jpg",
  opsTeam: "/images/company/ops-team.jpg",
  digivoltBook: "/images/digivolt/digivolt-book.jpg",
  digivoltSafety: "/images/digivolt/digivolt-safety.jpg",
  digivoltProtection: "/images/digivolt/digivolt-protection.jpg",
  digivoltDriver: "/images/digivolt/digivolt-driver.jpg",
  /* Homepage flagship panel: passenger following a route on a phone map
     in a taxi (Pexels 5835455, free to use, no attribution required).
     Illustrative, not a Digi02 screenshot. */
  digivoltRiderTaxi: "/images/digivolt/digivolt-rider-taxi.jpg",  /* Real photography, no AI-generated imagery. Pexels-licensed (free to use,
     no attribution required).
     whoWeAre: Kaduna business meeting, documentary photo by mk_photoz (Pexels 38649010).
     standardsReview: operations team monitoring live systems from a control room (Pexels 19317897).
     skygridSurveyFlight: agricultural drone in flight over farmland (Pexels 34182315).
     schoolClassroom: secondary-school students in uniforms (Pexels 37898351). */
  whoWeAre: "/images/home/who-we-are-kaduna.jpg",
  standardsReview: "/images/home/standards-review.jpg",
  skygridSurveyFlight: "/images/skygrid/skygrid-survey-flight.jpg",
  schoolClassroom: "/images/payments/school-classroom.jpg",
  /* Hero — one documentary frame of African technology in use,
     sourced online (Pexels-licensed, free to use, no attribution required).
     heroDroneCrew: operators preparing an agricultural drone in the field (Pexels 34182309). */
  heroDroneCrew: "/images/hero/hero-drone-crew.jpg",
};

/* ────────────────────────────────────────────────────────────
   Principles & process
   ──────────────────────────────────────────────────────────── */

export const principles = [
  {
    title: "Integrity first",
    text: "We say what a system does and does not do. No inflated claims, no borrowed numbers.",
  },
  {
    title: "Security by default",
    text: "Access control, encryption and audit trails are part of the architecture, not an add-on.",
  },
  {
    title: "Rigorously tested",
    text: "Rigorous testing and attention to detail through every stage of the build.",
  },
  {
    title: "Tailored, not templated",
    text: "We build around how your organisation actually operates, then make it auditable.",
  },
  {
    title: "Delivered on time",
    text: "Quality, security and timely delivery, without compromising our core values.",
  },
];

export const process = [
  {
    step: "01",
    title: "Understand",
    text: "We start from the operational problem, not from a feature list. Nothing is scoped until the problem is stated precisely.",
  },
  {
    step: "02",
    title: "Architect",
    text: "Open architecture, defined integrations and a data model that will still make sense in five years.",
  },
  {
    step: "03",
    title: "Build",
    text: "Modular engineering with rigorous testing throughout. No single unreviewed release at the end.",
  },
  {
    step: "04",
    title: "Deploy",
    text: "Controlled rollout, migration and training so the system is adopted rather than endured.",
  },
  {
    step: "05",
    title: "Support",
    text: "Continuous improvement after handover. We stay reachable, and we document what we build.",
  },
];

/* ────────────────────────────────────────────────────────────
   Insights
   ──────────────────────────────────────────────────────────── */

export type Insight = {
  slug: string;
  title: string;
  kicker: string;
  date: string;
  read: string;
  excerpt: string;
  body: { heading: string; text: string }[];
};

export const insights: Insight[] = [
  {
    slug: "erp-solutions-nigeria",
    title: "The future of e-management solutions for Nigerian enterprises",
    kicker: "Enterprise",
    date: "March 2025",
    read: "6 min",
    excerpt:
      "How ERP and e-management systems are transforming Nigerian businesses through improved efficiency, enhanced reporting and seamless management.",
    body: [
      {
        heading: "The real problem is not data",
        text: "Most Nigerian enterprises are not short of information. Sales exist in one spreadsheet, stock in another, finance in a third, and each was updated by a different person at a different time. The cost is not the absence of data; it is the time spent deciding which version is true. A centralised system removes that argument entirely, because there is only one record.",
      },
      {
        heading: "Reporting should answer questions, not fill screens",
        text: "A dashboard is only useful if it answers the question leadership is actually asking. Too many enterprise deployments produce attractive charts nobody acts on. We design reporting backwards from decisions: what needs to be known, how often, and by whom. The interface follows from that.",
      },
      {
        heading: "Rollout in stages, not in one leap",
        text: "The failure mode for enterprise software in Nigeria is rarely the software. It is attempting to change every process in an organisation on a single weekend. Modular rollout, one function, one department, one cycle, lets a team learn the system while the business keeps running.",
      },
      {
        heading: "Ownership matters",
        text: "A system that only the vendor understands is a liability. Documentation, role-based access and a proper handover are what separate software you own from software you rent indefinitely.",
      },
    ],
  },
  {
    slug: "payroll-solutions-nigeria",
    title: "Why Nigerian businesses need secure payroll systems to thrive",
    kicker: "Payroll",
    date: "March 2025",
    read: "5 min",
    excerpt:
      "Payroll automation reduces errors, ensures compliance and improves employee satisfaction. Here is what to look for.",
    body: [
      {
        heading: "Payday is a deadline, not a task",
        text: "Payroll is the one operational process with a fixed monthly date and no tolerance for error. Manual computation puts an organisation in the position of hoping, every month, that nothing was mistyped. Automation turns that hope into a checkable run.",
      },
      {
        heading: "Compliance is a record, not a promise",
        text: "Statutory deductions are only half the obligation. Being able to show how each figure was reached is the other half. A payroll system should produce the supporting record as part of the run, not scramble for it when a query arrives.",
      },
      {
        heading: "Transparency reduces friction",
        text: "Employees who can see how their payslip was calculated raise fewer queries and trust the organisation more. That transparency is a design choice, not a bonus feature.",
      },
      {
        heading: "Validate before payment",
        text: "The most valuable moment in any payroll run is the one before money leaves the account. Anomaly checks applied there are worth more than any reconciliation done afterwards.",
      },
    ],
  },
  {
    slug: "payment-solutions-nigeria",
    title: "Building reliable payment solutions for Nigerian businesses",
    kicker: "Payments",
    date: "March 2025",
    read: "7 min",
    excerpt:
      "Secure payment gateways improve customer trust and transaction security. What reliability actually means in practice.",
    body: [
      {
        heading: "Security is the entry requirement",
        text: "Payment fraud is the primary concern for most Nigerian businesses accepting digital payments. Encryption, PCI DSS-aligned practice and traceable transactions are the baseline, not a premium tier. Any payment system that treats security as optional should not be considered at all.",
      },
      {
        heading: "Speed changes behaviour",
        text: "Customers expect a transaction to complete in seconds, whether it happens online or at a counter. Slow authorisation does not just test patience. It sends buyers to a competitor or back to cash.",
      },
      {
        heading: "Reconciliation is where the money is",
        text: "Manual reconciliation loses revenue quietly. When payment data aligns automatically with sales records, the organisation gains accurate financial records, better transparency and a materially smaller administrative workload.",
      },
      {
        heading: "Meet customers on their channel",
        text: "Cards, bank transfer and digital wallets all have a place. Supporting multiple channels, with multi-currency handling where the business trades across borders, is now an operational requirement rather than an ambition.",
      },
    ],
  },
  {
    slug: "uav-autopilot-nigeria",
    title: "How UAV software with AutoPilot supports security in Nigeria",
    kicker: "SkyGrid",
    date: "March 2025",
    read: "6 min",
    excerpt:
      "Drone technology is enhancing security, agriculture and data collection across Nigerian industries.",
    body: [
      {
        heading: "From improvised flights to planned missions",
        text: "Aerial work becomes genuinely useful when it is repeatable. A mission planned once, with defined waypoints and geofences, can be flown again next week under the same conditions. That is what makes aerial data comparable over time instead of merely interesting once.",
      },
      {
        heading: "Readiness before launch",
        text: "In security operations the cost of an unplanned failure is high. Confirming aircraft, crew and mission state before launch is a discipline, and it belongs in the software rather than in someone's memory.",
      },
      {
        heading: "Evidence, not anecdote",
        text: "Security reporting has to stand up to scrutiny. A command view that records what was flown, when and what was captured turns an aerial patrol into documented evidence.",
      },
      {
        heading: "Beyond security",
        text: "The same mission discipline serves agriculture, infrastructure inspection and survey. Any sector that currently relies on manual inspection of large or inaccessible areas can benefit from planned, documented aerial data collection.",
      },
    ],
  },
];

export const getInsight = (slug: string) =>
  insights.find((i) => i.slug === slug);

/* ────────────────────────────────────────────────────────────
   FAQs
   ──────────────────────────────────────────────────────────── */

export const faqs = [
  {
    q: "Where is Digi02 based, and where do you work?",
    a: "Our office is in Kaduna, Nigeria: No. 2, The Hub, Industrial Area, Farin Gida, Mando. We build primarily for organisations across Nigeria, and our systems are designed to serve businesses globally.",
  },
  {
    q: "What does an engagement look like?",
    a: "Understand, architect, build, deploy, support. We scope from the operational problem, build modularly with testing throughout, deploy in controlled stages and remain reachable after handover.",
  },
  {
    q: "Do you build from scratch or configure existing products?",
    a: "Both. Some problems are solved well by tailoring a platform we already build (payroll, payments, e-management). Others genuinely need bespoke engineering. We will tell you which one yours is.",
  },
  {
    q: "Can you integrate with the systems we already run?",
    a: "Yes. Integration is part of the architecture stage, not an afterthought. We connect to existing accounting, banking and operational systems wherever an interface allows.",
  },
  {
    q: "What about data security and compliance?",
    a: "Role-based access, encryption, audit trails and payment practice aligned to PCI DSS expectations are built into the architecture. For payroll and payments, statutory records are produced as part of each run.",
  },
  {
    q: "What is the status of DigiVolt?",
    a: "DigiVolt is live on Google Play, with separate rider and driver apps. The route visuals on this site are illustrative diagrams, not live trip data.",
  },
];

/* ────────────────────────────────────────────────────────────
   Facts (verifiable, non-promotional)
   ──────────────────────────────────────────────────────────── */

export const facts = [
  { value: "07", label: "Solution areas" },
  { value: "02", label: "Products: SkyGrid · DigiVolt" },
  { value: "05", label: "Specialists featured" },
  { value: "01", label: "Base: Kaduna, Nigeria" },
];
