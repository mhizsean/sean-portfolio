"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useState } from "react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "Skills", path: "/skills" },
  { name: "Writings", path: "/writings" },
  { name: "About Me", path: "/about" },
  { name: "Contact Me", path: "/contact" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="fixed top-6 right-6 z-50 md:hidden flex flex-col gap-1.5 p-2"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <motion.span
          className="w-6 h-0.5 bg-accent-primary"
          animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
        />
        <motion.span
          className="w-6 h-0.5 bg-accent-primary"
          animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
        />
        <motion.span
          className="w-6 h-0.5 bg-accent-primary"
          animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
        />
      </button>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex fixed right-8 top-1/2 -translate-y-1/2 z-40 flex-col gap-8">
        {navItems.map((item, index) => (
          <motion.div
            key={item.path}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Link
              href={item.path}
              className={`font-serif text-lg transition-colors relative ${
                pathname === item.path
                  ? "text-accent-primary"
                  : "text-gray-400 hover:text-accent-primary"
              }`}
            >
              {pathname === item.path && (
                <motion.span
                  layoutId="activeNav"
                  className="absolute -left-4 top-1/2 -translate-y-1/2 w-1 h-6 bg-accent-primary"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              {item.name.toUpperCase()}
            </Link>
          </motion.div>
        ))}
      </nav>

      {/* Mobile Navigation */}
      <motion.nav
        className="md:hidden fixed inset-0 z-40 bg-dark-bg flex flex-col items-center justify-center gap-8"
        initial={{ opacity: 0, x: "100%" }}
        animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
      >
        {navItems.map((item, index) => (
          <motion.div
            key={item.path}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 20 }}
            transition={{ delay: index * 0.1 }}
          >
            <Link
              href={item.path}
              onClick={() => setIsOpen(false)}
              className={`font-serif text-2xl transition-colors ${
                pathname === item.path ? "text-accent-primary" : "text-gray-400"
              }`}
            >
              {item.name.toUpperCase()}
            </Link>
          </motion.div>
        ))}
      </motion.nav>
    </>
  );
}
