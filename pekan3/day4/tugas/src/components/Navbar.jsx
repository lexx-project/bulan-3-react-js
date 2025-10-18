import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 z-20 w-full bg-blue-500 p-4">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Lexx</h2>
        <ul className="flex gap-3 text-[20px] font-semibold text-white">
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `inline-block rounded-full px-4 py-1 transition ${
                  isActive ? "bg-white/20" : "hover:bg-white/10"
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `inline-block rounded-full px-4 py-1 transition ${
                  isActive ? "bg-white/20" : "hover:bg-white/10"
                }`
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `inline-block rounded-full px-4 py-1 transition ${
                  isActive ? "bg-white/20" : "hover:bg-white/10"
                }`
              }
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/product"
              className={({ isActive }) =>
                `inline-block rounded-full px-4 py-1 transition ${
                  isActive ? "bg-white/20" : "hover:bg-white/10"
                }`
              }
            >
              Product
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
