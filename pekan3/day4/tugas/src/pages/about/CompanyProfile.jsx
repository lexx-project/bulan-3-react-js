const highlist = [
  {
    title: "Crafting delightful digital experiences",
    description:
      "Lexx Studio is a product-focused team delivering responsive web applications, modern design systems, and seamless user journeys.",
  },
  {
    title: "Hybrid remote culture",
    description:
      "We collaborate across Ponorogo, Surabaya, and Jakarta with async-first practices. Stand-ups are brief, documentation is thorough, and feedback flows fast.",
  },
  {
    title: "Outcome-driven partnerships",
    description:
      "From MVP experiments to enterprise-scale rollouts, we measure success by business impact and user satisfaction rather than deliverable checklists.",
  },
];

const core = [
  {
    label: "Empathy",
    text: "Understand the real problem before proposing a solution.",
  },
  {
    label: "Craftsmanship",
    text: "Ship high-quality UI and code, even under tight timelines.",
  },
  {
    label: "Curiosity",
    text: "Explore new ideas, tools, and frameworks to stay ahead.",
  },
  {
    label: "Transparency",
    text: "Share progress openly and communicate constraints early.",
  },
];

export default function CompanyProfile() {
  return (
    <article className="space-y-16">
      <section className="rounded-3xl border border-slate-200 bg-white/90 p-10 shadow-sm">
        <h2 className="text-2xl font-bold text-slate-900">Company Snapshot</h2>
        <p className="mt-4 text-sm leading-relaxed text-slate-600">
          Founded in 2021, Lexx Studio helps startups and SMEs build polished,
          reliable web applications that scale. We combine a product mindset
          with solid engineering and visual storytelling so every release feels
          cohesive, on-brand, and performant.
        </p>

        <dl className="mt-8 grid gap-6 sm:grid-cols-2">
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wide text-blue-500">
              Team members
            </dt>
            <dd className="mt-1 text-lg font-semibold text-slate-900">
              12 core contributors
            </dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wide text-blue-500">
              Core services
            </dt>
            <dd className="mt-1 text-lg font-semibold text-slate-900">
              Product design, frontend engineering, tech mentorship
            </dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wide text-blue-500">
              Primary stack
            </dt>
            <dd className="mt-1 text-lg font-semibold text-slate-900">
              React, TypeScript, Tailwind, Node.js
            </dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wide text-blue-500">
              Delivery model
            </dt>
            <dd className="mt-1 text-lg font-semibold text-slate-900">
              Sprint-based or dedicated squad engagements
            </dd>
          </div>
        </dl>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-slate-900">What We Believe</h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-600">
          We approach every engagement as a long-term partnership. That means
          clear expectations, measurable milestones, and frequent communication.
          The goal is to become an extension of your product team rather than
          just another outsourced vendor.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {highlist.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-blue-100 bg-blue-50/50 p-8 transition hover:-translate-y-1 hover:border-blue-200 hover:bg-blue-50"
            >
              <h3 className="text-lg font-semibold text-blue-600">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-slate-900">Core Values</h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-600">
          Our values guide how we collaborate internally and how we deliver for
          clients.
        </p>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2 ">
          {core.map((value) => (
            <li
              key={value.label}
              className="rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm "
            >
              <h3 className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
                {value.label}
              </h3>
              <p className="mt-2 text-sm text-slate-600">{value.text}</p>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
