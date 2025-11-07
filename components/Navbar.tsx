"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#1f352c]/95 text-[#F7E8D0] backdrop-blur-sm z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-extrabold tracking-wide">
          <span className="text-[#C6A982]">Starbrew</span> AI
        </h1>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 text-lg font-medium">
          <Link href="#hero" className="hover:text-[#C6A982] transition">Home</Link>
          <Link href="#about" className="hover:text-[#C6A982] transition">About</Link>
          <Link href="#menu" className="hover:text-[#C6A982] transition">Menu</Link>
          <Link href="#contact" className="hover:text-[#C6A982] transition">Contact</Link>
        </div>

        {/* Mobile Menu Icon */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#F7E8D0] hover:text-[#C6A982] transition"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="flex flex-col items-center gap-6 py-6 bg-[#1f352c] text-lg font-medium md:hidden">
          <Link href="#hero" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="#about" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="#menu" onClick={() => setIsOpen(false)}>Menu</Link>
          <Link href="#contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}
