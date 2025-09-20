// components/Navbar.js
"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // lightweight icons

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="mx-auto px-6 sm:px-10 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/#home">
          <h1 className="text-xl sm:text-2xl font-bold">JaroldEnderez</h1>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          <Link href="/#home" className="hover:text-blue-600">Home</Link>
          <Link href="/#about" className="hover:text-blue-600">Experience</Link>
          <Link href="/#projects" className="hover:text-blue-600">Projects</Link>
          <Link href="/#contact" className="hover:text-blue-600">Contact</Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-gray-100"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md border-t px-6 py-4 flex flex-col space-y-4">
          <Link href="/#home" onClick={() => setIsOpen(false)} className="hover:text-blue-600">
            Home
          </Link>
          <Link href="/#about" onClick={() => setIsOpen(false)} className="hover:text-blue-600">
            Experience
          </Link>
          <Link href="/#projects" onClick={() => setIsOpen(false)} className="hover:text-blue-600">
            Projects
          </Link>
          <Link href="/#contact" onClick={() => setIsOpen(false)} className="hover:text-blue-600">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
