"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/team" },
    { name: "Impact", href: "/impact" },
    { name: "Achievements", href: "/achievement" },
    { name: "Future Plans", href: "/projects" },
    { name: "Contact", href: "/contact" }
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-zinc-950/80 border-b border-zinc-200/50 dark:border-zinc-900/50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <span className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center text-white font-bold text-xl shadow-md shadow-emerald-500/10">
            J
          </span>
          <div>
            <span className="font-extrabold text-xl tracking-tight text-zinc-900 dark:text-white block">
              JIA
            </span>
            <span className="text-[10px] text-zinc-500 dark:text-zinc-400 font-semibold tracking-wider uppercase block -mt-1">
              Social Organization
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.href} 
                href={link.href} 
                className={`text-sm font-medium transition-colors ${
                  isActive 
                    ? "text-emerald-600 dark:text-emerald-400 font-semibold" 
                    : "text-zinc-600 dark:text-zinc-300 hover:text-emerald-500 dark:hover:text-emerald-400"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <Link 
            href="/contact" 
            className="px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-600/25 transition-all hover:shadow-emerald-600/35 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            Get Involved
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-zinc-200/50 dark:border-zinc-900/50 bg-white dark:bg-zinc-950 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link 
                    key={link.href} 
                    href={link.href} 
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-base font-semibold transition-colors ${
                      isActive 
                        ? "text-emerald-600 dark:text-emerald-400" 
                        : "text-zinc-700 dark:text-zinc-300"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <Link 
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 rounded-xl bg-emerald-600 text-white font-bold text-base shadow-md"
              >
                Get Involved
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
