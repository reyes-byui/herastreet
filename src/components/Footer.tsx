"use client";

import { FaInstagram, FaFacebookF, FaYoutube, FaPinterestP } from "react-icons/fa";
const currentYear = new Date().getFullYear();


export default function Footer() {
  return (
    <footer className="w-full border-t bg-gray-50 py-6 text-sm text-gray-600">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-4">
        {/* Copyright */}
        <div className="text-center w-full md:w-auto">
          &copy; {currentYear} Hera. All rights reserved.
        </div>
        {/* Footer Links */}
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="/disclaimer" className="hover:underline">Disclaimer</a>
          <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
          <a href="/terms" className="hover:underline">Terms</a>
          <a href="/contact" className="hover:underline">Contact</a>
        </div>
        {/* Social Icons */}
        <div className="flex flex-row items-center gap-3">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram className="text-xl text-gray-600 hover:text-[#C0C0C0] transition-colors" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebookF className="text-xl text-gray-600 hover:text-[#C0C0C0] transition-colors" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <FaYoutube className="text-xl text-gray-600 hover:text-[#C0C0C0] transition-colors" />
          </a>
          <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
            <FaPinterestP className="text-xl text-gray-600 hover:text-[#C0C0C0] transition-colors" />
          </a>
        </div>
      </div>
    </footer>
  );
}
