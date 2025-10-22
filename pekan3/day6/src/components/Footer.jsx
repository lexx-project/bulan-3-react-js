import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-8 lg:px-12 py-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-center sm:text-left">
          <span className="text-lg font-semibold tracking-tight">
            Lexx Store
          </span>
          <p className="mt-2 text-sm text-slate-400">
            Pilihan belanja online terbaik untuk kebutuhan Anda{" "}
          </p>
        </div>

        <nav className="flex justify-center sm:justify-end gap-4 text-sm text-slate-300">
          <Link to="/about" className="hover:text-white transition-colors">
            Tentang
          </Link>
          <Link to="/products" className="hover:text-white transition-colors">
            Produk
          </Link>
          <Link to="/" className="hover:text-white transition-colors">
            Home
          </Link>
        </nav>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto w-full max-w-6xl px-4 sm:px-8 lg:px-12 py-4 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Lexx Store. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
