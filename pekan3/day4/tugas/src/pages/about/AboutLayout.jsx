import { NavLink, useOutlet } from "react-router-dom";
import AboutOverview from "./index";

export default function AboutLayout() {
  const outlet = useOutlet();

  return (
    <section className="mx-auto max-w-5xl px-4 pb-16 pt-24">
      <header className="text-center">
        <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-blue-500">
          About
        </span>
        <h1 className="mt-4 text-3xl font-bold text-slate-900">
          Learn more about Lexx
        </h1>
        <p className="mt-2 text-sm text-slate-500">
          Discover the story behind the brand and get to know the team.
        </p>
      </header>

      <nav className="mt-10 flex justify-center gap-3">
        <NavLink
          end
          to="/about"
          className={({ isActive }) =>
            `inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold transition ${
              isActive
                ? "bg-blue-500 text-white shadow-sm"
                : "bg-blue-50 text-blue-600 hover:bg-blue-100"
            }`
          }
        >
          Overview
        </NavLink>
        <NavLink
          to="/about/company"
          className={({ isActive }) =>
            `inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold transition ${
              isActive
                ? "bg-blue-500 text-white shadow-sm"
                : "bg-blue-50 text-blue-600 hover:bg-blue-100"
            }`
          }
        >
          Company Profile
        </NavLink>
      </nav>

      <div className="mt-12 space-y-16">{outlet ?? <AboutOverview />}</div>
    </section>
  );
}
