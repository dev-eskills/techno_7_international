import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "/public/fullLogo.png";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const navLinks = [
  { label: "Home", href: "/", isHash: false },
  { label: "About", href: "/about", isHash: false },
  { label: "Courses", href: "/courses", isHash: false },
  { label: "Course Features", href: "/features", isHash: true },
  { label: "Testimonials", href: "/#testimonials", isHash: true },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const MotionHashLink = motion(HashLink);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 left-0 right-0 z-50 bg-white border-b border-white/10"
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-3">
        <div className="flex h-13 md:h-16 items-center justify-between">
          {/* LEFT: Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="Techno7 Logo"
              /* Removed h-24 and fixed width to allow natural scaling */
              /* Added h-10 to h-12 for a standard navbar height */
              className="h-10 md:h-12 w-auto object-contain"
            />
          </Link>
          {/* CENTER: Nav Links */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => {
              const LinkComponent = link.isHash ? MotionHashLink : motion(Link);
              return (
                <LinkComponent
                  key={link.label}
                  smooth={link.isHash}
                  to={link.href}
                  whileHover={{ y: -2 }}
                  className="group relative text-sm font-medium text-black/80 hover:text-zinc-700 transition"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 h-[2px] bg-black w-0 group-hover:w-full transition-all" />
                </LinkComponent>
              );
            })}
          </div>

          {/* RIGHT: Contact Button */}
          <div className="hidden md:flex">
            <Link to={"/contact"}>
              <motion.p
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="rounded-lg bg-black px-5 py-2 text-sm text-white hover:bg-zinc-700 transition"
              >
                Contact Us
              </motion.p>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-black"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden space-y-3 py-4 border-t border-white/10"
            >
              {navLinks.map((link) => {
                const LinkComponent = link.isHash ? HashLink : Link;
                return (
                  <LinkComponent
                    key={link.label}
                    smooth={link.isHash}
                    to={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block text-sm text-black"
                  >
                    {link.label}
                  </LinkComponent>
                );
              })}

              <Link
                to="/contact"
                className="mt-3 inline-block rounded-md bg-black px-4 py-2 text-sm text-white"
                onClick={() => setMenuOpen(false)}
              >
                Contact Us
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
