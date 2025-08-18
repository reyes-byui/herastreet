
"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { FaInstagram, FaFacebookF, FaYoutube, FaPinterestP } from "react-icons/fa";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/what-i-do", label: "What I Do" },
  { href: "/latest", label: "Latest" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="w-full border-none fixed top-0 left-0 z-50 bg-black/80 transition-colors duration-300">
      <nav className="max-w-5xl mx-auto flex items-center justify-between px-4 py-5 sm:py-7">
        <Link
          href="/"
          className="flex items-center"
        >
          <span className="block w-12 h-12 sm:w-16 sm:h-16 relative">
            <Image
              src="/images/HA.jpg"
              alt="Hera Logo"
              className="rounded-full object-cover w-full h-full"
              width={64}
              height={64}
            />
          </span>
        </Link>
        {/* Desktop nav */}
        <div className="hidden sm:flex items-center gap-6">
          <ul className="flex gap-6 text-base font-medium">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="transition-colors text-white hover:bg-gradient-to-r hover:from-[#f8f8f8] hover:via-[#C0C0C0] hover:to-[#888888] hover:bg-clip-text hover:text-transparent"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-4 ml-6">
            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram className="text-xl text-white hover:text-[#C0C0C0] transition-colors" />
            </Link>
            <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebookF className="text-xl text-white hover:text-[#C0C0C0] transition-colors" />
            </Link>
            <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <FaYoutube className="text-xl text-white hover:text-[#C0C0C0] transition-colors" />
            </Link>
            <Link href="https://pinterest.com" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
              <FaPinterestP className="text-xl text-white hover:text-[#C0C0C0] transition-colors" />
            </Link>
          </div>
        </div>
        {/* Hamburger icon for mobile */}
        <button
          className="sm:hidden text-3xl focus:outline-none z-20"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
        {/* Mobile dropdown menu */}
        <div
          className={`fixed top-0 right-0 h-full w-3/4 max-w-xs bg-black flex flex-col items-center justify-center gap-8 z-30 sm:hidden transform transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
          style={{ boxShadow: menuOpen ? '-4px 0 24px 0 rgba(0,0,0,0.4)' : 'none' }}
        >
          <button
            className="absolute top-4 right-4 text-white text-3xl focus:outline-none"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          >
            <HiX />
          </button>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
                className="text-white text-2xl font-semibold transition-colors hover:bg-gradient-to-r hover:from-[#f8f8f8] hover:via-[#C0C0C0] hover:to-[#888888] hover:bg-clip-text hover:text-transparent"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
