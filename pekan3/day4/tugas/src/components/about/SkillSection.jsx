export default function SkillSection() {
  const skills = [
    {
      name: "HTML",
      level: "Advanced",
      focus: "Semantic markup & accessibility",
    },
    {
      name: "CSS",
      level: "Intermediate",
      focus: "Responsive layouts & animations",
    },
    {
      name: "JavaScript",
      level: "Advanced",
      focus: "ES6+, async patterns, tooling",
    },
    {
      name: "React",
      level: "Intermediate",
      focus: "Hooks, state management, routing",
    },
    {
      name: "Node.js",
      level: "Intermediate",
      focus: "REST APIs & build tooling",
    },
    {
      name: "Express.js",
      level: "Intermediate",
      focus: "Routing, middleware, API design",
    },
    {
      name: "MongoDB",
      level: "Intermediate",
      focus: "Document design & aggregation",
    },
    { name: "Git", level: "Intermediate", focus: "Branching & CI workflows" },
    {
      name: "Tailwind CSS",
      level: "Advanced",
      focus: "Design systems & rapid prototyping",
    },
  ];

  return (
    <section className="mt-20 container mx-auto px-4">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
          My Go-To Stack
        </h2>
        <p className="mt-3 text-sm text-slate-500">
          Tools and technologies I reach for when building products that feel
          polished and performant.
        </p>
      </div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill) => (
          <article
            key={skill.name}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md"
          >
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-lg font-semibold text-slate-900">
                {skill.name}
              </h3>
              <span className="inline-flex items-center rounded-full border border-slate-200 px-3 py-1 text-xs font-medium uppercase text-slate-500">
                {skill.level}
              </span>
            </div>
            <p className="mt-2 text-sm text-slate-500">{skill.focus}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
