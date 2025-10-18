const CONTACT_CHANNELS = [
  {
    icon: "✉️",
    label: "Email",
    value: "hello@lexx.dev",
    href: "mailto:hello@lexx.dev",
    helper: "I usually reply within a few hours.",
  },
  {
    icon: "📞",
    label: "Phone / WhatsApp",
    value: "+62 882-0093-91607",
    href: "https://wa.me/62882009391607",
    helper: "Available weekdays, 09.00 – 17.00 WIB.",
  },
  {
    icon: "📍",
    label: "Based in",
    value: "Ponorogo, Indonesia",
    href: "https://maps.app.goo.gl/NcsHRJA5bo9eszBB9",
    helper: "Open to remote collaboration globally.",
  },
];

export default function ContactInfoSection() {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-blue-100/40 py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center">
          <span className="inline-flex items-center rounded-full border border-blue-200 bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-blue-600">
            Contact
          </span>
          <h2 className="mt-4 text-3xl font-semibold text-slate-900">
            Say Hello Anytime
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            Choose the channel you prefer and I&apos;ll make sure to get back to
            you.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
          {CONTACT_CHANNELS.map((channel) => (
            <a
              key={channel.label}
              href={channel.href}
              className="group flex flex-col gap-4 rounded-2xl border border-blue-100 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:bg-white hover:shadow-md"
            >
              <span className="text-3xl" aria-hidden>
                {channel.icon}
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  {channel.label}
                </p>
                <p className="mt-1 text-lg font-semibold text-slate-900">
                  {channel.value}
                </p>
              </div>
              <p className="text-xs text-slate-500">{channel.helper}</p>
              <span className="text-xs font-semibold text-blue-500 opacity-0 transition group-hover:opacity-100">
                Get in touch →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
