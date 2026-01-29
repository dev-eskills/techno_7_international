import { useState } from 'react';
import logo from "/public/logo.png";

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Advice', href: '#advice' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-black/5">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 md:h-20 items-center justify-between">
          {/* ADJUSTED BRANDING SECTION */}
          <a href="/" className="flex items-center gap-3 group">
            <img
              src={logo}
              alt="Techno7 Logo"
              className="h-8 w-auto md:h-10 object-contain transition-transform group-hover:scale-105"
            />
            <span className="text-lg md:text-md font-semibold tracking-tight text-black">
              TECHNO 7 INTERNATIONAL
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex md:items-center md:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-black hover:text-black/70 transition"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* <div className="hidden md:flex md:items-center md:gap-4">
            <a
              href="#signup"
              className="text-sm font-medium text-black hover:text-black/70 transition"
            >
              Sign Up
            </a>
            <a
              href="#login"
              className="rounded-lg bg-black px-4 py-2 text-sm font-medium text-white hover:bg-black/90 transition"
            >
              Login
            </a>
          </div> */}

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden rounded-lg p-2 text-black hover:bg-black/5"
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-black/5 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block py-2 text-sm font-medium text-black"
              >
                {link.label}
              </a>
            ))}
            {/* <div className="pt-2 flex gap-3">
              <a href="#signup" className="text-sm font-medium text-black">Sign Up</a>
              <a href="#login" className="rounded-lg bg-black px-4 py-2 text-sm font-medium text-white">Login</a>
            </div> */}
          </div>
        )}
      </nav>
    </header>
  );
}
