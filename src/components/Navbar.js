// components/Navbar.js
"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className=" mx-auto px-10 py-3 flex justify-between items-center">
        <Link href="/#home"><h1 className="text-2xl font-bold">JaroldEnderez</h1></Link>
        <div className="flex space-x-6">
          <Link href="/#home" className="hover:text-blue-600">Home</Link>
          <Link href="/#about" className="hover:text-blue-600">Experience</Link>
          <Link href="/#projects" className="hover:text-blue-600">Projects</Link>
          <Link href="/#contact" className="hover:text-blue-600">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
