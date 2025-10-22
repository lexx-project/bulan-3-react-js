import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-black/80 text-black dark:text-white py-8 border-2">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          <div>
            <h3 className="text-xl font-semibold mb-4">Lexx Store</h3>
            <p className="text-gray-800 dark:text-gray-400">
              Your one-stop shop for amazing products.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-400">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="hover:text-white text-gray-800 dark:text-gray-400"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-gray-800 dark:text-gray-400 hover:text-white"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-800 dark:text-gray-400 hover:text-white"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-800 dark:text-gray-400 hover:text-white"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 ">Contact Us</h3>
            <p className="text-gray-800 dark:text-gray-400">
              123 Main Street, Anytown USA
            </p>
            <p className="text-gray-800 dark:text-gray-400">
              info@lexxstore.com
            </p>
            <p className="text-gray-800 dark:text-gray-400">+1 234 567 8900</p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-800 dark:text-gray-400">
          &copy; {new Date().getFullYear()} Lexx Store. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
